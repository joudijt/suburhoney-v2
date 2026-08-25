import { readFileSync, existsSync, statSync } from "node:fs";

const ROWS = [
  ["en","honey-with-nuts-malaysia"],["en","honeycomb-hantaran-gift-idea"],
  ["en","is-honey-safe-during-pregnancy"],["en","honey-allergy-symptoms"],
  ["en","honey-vs-gula-melaka"],["en","is-honey-vegan"],
  ["ms","beli-madu-online-atau-kedai-fizikal"],["ms","hadiah-madu-untuk-raya"],
  ["ms","madu-manuka-vs-madu-tempatan-malaysia"],["ms","doorgift-madu-kahwin"],
  ["ms","resepi-sarapan-guna-madu"],["ms","madu-untuk-masakan"],
  ["ar","limatha-yatfu-al-shama-fawq-al-asal"],["ar","al-farq-bayn-asal-manuka-wal-asal-al-malizi"],
  ["ar","mukawwinat-khaltat-al-asal-bil-aashab"],["ar","hal-al-asal-masmuh-lil-atfal-aqal-min-sana"],
  ["ar","shiraa-al-asal-online-fi-malizia"],["ar","hadiyat-al-asal-lil-eid"],
];

let allOk = true;
const seenTitles = new Set();
const seenDescs = new Set();

for (const [lang, slug] of ROWS) {
  const path = `dist/${lang}/blog/${slug}/index.html`;
  const issues = [];
  if (!existsSync(path)) { console.log(`FAIL ${path}: MISSING`); allOk = false; continue; }
  const html = readFileSync(path, "utf8");

  const title = html.match(/<title>([^<]*)<\/title>/)?.[1];
  if (!title) issues.push("no <title>");
  else if (title.length > 60) issues.push(`title ${title.length} chars`);
  else if (seenTitles.has(title)) issues.push(`DUPLICATE title: ${title}`);
  seenTitles.add(title);

  const desc = html.match(/<meta name="description" content="([^"]*)"/)?.[1];
  if (!desc) issues.push("no meta description");
  else if (desc.length > 160) issues.push(`description ${desc.length} chars`);
  else if (seenDescs.has(desc)) issues.push(`DUPLICATE description`);
  seenDescs.add(desc);

  const canonical = html.match(/<link rel="canonical" href="([^"]*)"/)?.[1];
  const expectedUrl = `https://suburhoney.com/${lang}/blog/${slug}/`;
  if (canonical !== expectedUrl) issues.push(`canonical mismatch: ${canonical}`);

  if (!/<meta name="robots" content="index, follow/.test(html)) issues.push("robots not index,follow");

  for (const tag of ['og:type', 'og:title', 'og:description', 'og:url', 'og:image', 'og:locale']) {
    if (!new RegExp(`property="${tag}"`).test(html)) issues.push(`missing ${tag}`);
  }
  if (!/property="og:type" content="article"/.test(html)) issues.push("og:type is not article");

  for (const tag of ['twitter:card', 'twitter:title', 'twitter:description', 'twitter:image']) {
    if (!new RegExp(`name="${tag}"`).test(html)) issues.push(`missing ${tag}`);
  }

  // JSON-LD
  const ldMatch = html.match(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/);
  if (!ldMatch) { issues.push("no JSON-LD script"); }
  else {
    let graph;
    try { graph = JSON.parse(ldMatch[1])["@graph"]; } catch (e) { issues.push(`JSON-LD parse error: ${e.message}`); }
    if (graph) {
      const types = graph.flatMap(n => Array.isArray(n["@type"]) ? n["@type"] : [n["@type"]]);
      if (!types.includes("BlogPosting")) issues.push("no BlogPosting node");
      if (!types.includes("FAQPage")) issues.push("no FAQPage node");
      if (!types.includes("BreadcrumbList")) issues.push("no BreadcrumbList node");
      const blogPosting = graph.find(n => n["@type"] === "BlogPosting");
      if (blogPosting) {
        if (typeof blogPosting.author?.["@id"] !== "string" || !blogPosting.author["@id"].includes("#organization")) issues.push("author not @id ref");
        if (typeof blogPosting.publisher?.["@id"] !== "string" || !blogPosting.publisher["@id"].includes("#organization")) issues.push("publisher not @id ref");
        if (!blogPosting.image || blogPosting.image.length === 0) issues.push("BlogPosting.image empty");
      }
      const faqPage = graph.find(n => n["@type"] === "FAQPage");
      if (faqPage) {
        const schemaFaqs = faqPage.mainEntity.map(q => q.name);
        // parity check: count of on-page <summary> vs schema count
        const onPageFaqCount = (html.match(/<summary/g) || []).length;
        if (onPageFaqCount !== schemaFaqs.length) issues.push(`FAQ parity: on-page ${onPageFaqCount} vs schema ${schemaFaqs.length}`);
        if (schemaFaqs.length < 6 || schemaFaqs.length > 10) issues.push(`schema FAQ count ${schemaFaqs.length}`);
      }
    }
  }

  // OG image reachability (local file check since dist)
  const ogImage = html.match(/property="og:image" content="([^"]*)"/)?.[1];
  if (ogImage) {
    const localPath = "dist" + new URL(ogImage).pathname;
    if (!existsSync(localPath)) issues.push(`og:image file missing: ${localPath}`);
    else {
      const size = statSync(localPath).size;
      if (size < 1000) issues.push(`og:image suspiciously small: ${size} bytes`);
    }
  }

  // internal links out (same-locale /blog/ or page links)
  const linkMatches = [...html.matchAll(/<a\s+href="(\/[a-z]{2}\/[^"]*)"/g)].map(m => m[1]);
  const sameLocaleLinks = linkMatches.filter(h => h.startsWith(`/${lang}/`));
  const uniqueOutbound = new Set(sameLocaleLinks.filter(h => h !== `/${lang}/blog/${slug}/`));
  if (uniqueOutbound.size < 3) issues.push(`only ${uniqueOutbound.size} unique internal links found`);

  // anchor text bans
  if (/>click here</i.test(html) || />read more</i.test(html)) issues.push("banned anchor text found");

  // image dimensions on the lead figure
  const figureImgMatch = html.match(new RegExp(`<img[^>]*src="/images/article-[^"]*"[^>]*>`));
  if (figureImgMatch) {
    if (!/width="\d+"/.test(figureImgMatch[0]) || !/height="\d+"/.test(figureImgMatch[0])) {
      issues.push("lead image missing width/height");
    }
    if (!/alt="[^"]+"/.test(figureImgMatch[0])) issues.push("lead image missing alt");
  } else {
    issues.push("no lead image found in rendered HTML");
  }

  if (issues.length) {
    allOk = false;
    console.log(`FAIL ${path}`);
    issues.forEach(i => console.log(`   - ${i}`));
  } else {
    console.log(`PASS ${path}`);
  }
}
console.log(allOk ? "\nALL DIST CHECKS PASSED" : "\nSOME DIST CHECKS FAILED");
