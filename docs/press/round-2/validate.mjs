import { readFileSync } from "node:fs";

const ROWS = [
  ["en","honey-with-nuts-malaysia","honey with nuts malaysia"],
  ["en","honeycomb-hantaran-gift-idea","honeycomb hantaran gift idea"],
  ["en","is-honey-safe-during-pregnancy","is honey safe during pregnancy"],
  ["en","honey-allergy-symptoms","honey allergy symptoms"],
  ["en","honey-vs-gula-melaka","honey vs gula melaka"],
  ["en","is-honey-vegan","is honey vegan"],
  ["ms","beli-madu-online-atau-kedai-fizikal","beli madu online atau kedai fizikal"],
  ["ms","hadiah-madu-untuk-raya","hadiah madu untuk raya"],
  ["ms","madu-manuka-vs-madu-tempatan-malaysia","madu manuka vs madu tempatan malaysia"],
  ["ms","doorgift-madu-kahwin","doorgift madu kahwin"],
  ["ms","resepi-sarapan-guna-madu","resepi sarapan guna madu"],
  ["ms","madu-untuk-masakan","madu untuk masakan"],
  ["ar","limatha-yatfu-al-shama-fawq-al-asal","لماذا يطفو الشمع فوق العسل"],
  ["ar","al-farq-bayn-asal-manuka-wal-asal-al-malizi","الفرق بين عسل مانوكا وعسل ماليزي"],
  ["ar","mukawwinat-khaltat-al-asal-bil-aashab","مكونات خلطة العسل بالأعشاب"],
  ["ar","hal-al-asal-masmuh-lil-atfal-aqal-min-sana","هل العسل مسموح للأطفال أقل من سنة"],
  ["ar","shiraa-al-asal-online-fi-malizia","شراء عسل أونلاين في ماليزيا"],
  ["ar","hadiyat-al-asal-lil-eid","هدية عسل للعيد"],
];

const BANNED = [
  /traditional/i, /traditionally/i, /\btradition\b/i, /\btraditions\b/i,
  /middle[- ]east/i, /for generations/i, /generational/i, /studied standards/i,
  /تقليدي/, /تقليديّ/, /تقاليد/, /(?<![ء-ي])تقليد(?![ء-ي])/,
  /الشرق الأوسط/, /شرق أوسط/, /عبر الأجيال/, /معايير مدروسة/,
  /tradisional/i, /\btradisi\b/i, /timur tengah/i, /turun-temurun/i, /piawaian dikaji/i,
];

const wc = (s) => (s.match(/\S+/g) || []).length;

let allOk = true;
const focusSeen = new Set();

for (const [lang, slug, focus] of ROWS) {
  const path = `src/content/articles/${lang}/${slug}.ts`;
  let mod;
  try {
    mod = await import(new URL(`../../../${path}`, import.meta.url).href);
  } catch (e) {
    console.log(`FAIL ${path}: IMPORT ERROR ${e.message}`);
    allOk = false;
    continue;
  }
  const a = mod.article;
  const issues = [];

  if (a.slug !== slug) issues.push(`slug mismatch: ${a.slug}`);
  if (a.primaryKeyword !== focus) issues.push(`primaryKeyword mismatch: "${a.primaryKeyword}" vs "${focus}"`);
  if (focusSeen.has(a.primaryKeyword)) issues.push(`DUPLICATE primaryKeyword within round: ${a.primaryKeyword}`);
  focusSeen.add(a.primaryKeyword);

  if (a.title.length > 60) issues.push(`title ${a.title.length} chars > 60`);
  if (a.description.length > 155) issues.push(`description ${a.description.length} chars > 155`);
  if (!a.published || a.published !== "2026-08-25") issues.push(`published=${a.published}`);
  if (!a.updated || a.updated !== "2026-08-25") issues.push(`updated=${a.updated}`);
  if (!a.icon || !a.icon.startsWith("/icons/")) issues.push(`icon bad: ${a.icon}`);
  if (!a.figureAlt) issues.push(`figureAlt missing`);
  if (!Array.isArray(a.related) || a.related.length !== 2) issues.push(`related should have 2 entries, has ${a.related?.length}`);

  const blocks = a.blocks;
  if (blocks[0]?.type !== "answer") issues.push(`first block is not 'answer'`);
  const headings = blocks.filter(b => b.type === "heading");
  if (headings.length < 5 || headings.length > 7) issues.push(`${headings.length} headings (want 5-7)`);
  // answer-first: every heading block is immediately followed by a paragraph block
  headings.forEach((h) => {
    const idx = blocks.indexOf(h);
    const next = blocks[idx + 1];
    if (!next || next.type !== "paragraph") {
      issues.push(`heading "${h.text}" not followed by a standalone paragraph`);
    } else {
      const words = wc(next.text.replace(/<[^>]+>/g, ""));
      if (words < 40 || words > 70) issues.push(`answer para after "${h.text}" is ${words} words (want 40-70)`);
    }
  });
  if (!blocks.some(b => b.type === "table")) issues.push(`no table block`);
  if (!blocks.some(b => b.type === "callout")) issues.push(`no callout block`);
  if (!blocks.some(b => b.type === "cta")) issues.push(`no cta block`);

  // body word count: answer+headings+paragraphs+list+steps+table+callout+cta, FAQs excluded
  let bodyWords = 0;
  for (const b of blocks) {
    const text = JSON.stringify(b).replace(/<[^>]+>/g, " ");
    bodyWords += wc(text.replace(/[{}"[\],:]/g, " ").replace(/\b(type|answer|question|text|heading|id|title|ordered|items|term|steps|caption|columns|rows|tone|icon|name|attribution|label)\b/g, " "));
  }
  if (bodyWords < 750 || bodyWords > 1100) issues.push(`body ~${bodyWords} words (rough, want ~800-1000)`);

  const faqs = a.faqs;
  if (faqs.length < 6 || faqs.length > 10) issues.push(`${faqs.length} faqs (want 6-10)`);
  faqs.forEach((f, i) => {
    const words = wc(f.a);
    if (words < 40 || words > 70) issues.push(`faq[${i}] answer ${words} words (want 40-70)`);
  });

  // banned terms scan across the whole serialized module
  const fullText = readFileSync(path, "utf8");
  for (const re of BANNED) {
    if (re.test(fullText)) issues.push(`BANNED TERM MATCH: ${re}`);
  }

  if (issues.length) {
    allOk = false;
    console.log(`FAIL ${path}`);
    issues.forEach(i => console.log(`   - ${i}`));
  } else {
    console.log(`PASS ${path}  (~${bodyWords} body words, ${headings.length} headings, ${faqs.length} faqs)`);
  }
}

console.log(allOk ? "\nALL 18 STRUCTURAL CHECKS PASSED" : "\nSOME CHECKS FAILED - see above");
