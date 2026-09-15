/**
 * SEO / AEO gate for a PRESS round, run against RENDERED HTML.
 *
 * Rounds 5 and 6 each rebuilt this check from scratch and round 5's first
 * version had a bug that failed all 18 articles AND a known-good control
 * identically: it assumed the page emitted a bare JSON-LD array, when this site
 * emits one <script> holding a top-level `@graph`. 54 apparent failures, zero
 * real ones. So two things are permanent here:
 *
 *   1. the JSON-LD reader flattens `@graph`, and
 *   2. `--control` is a first-class flag. ALWAYS gate a known-good page from an
 *      earlier round in the same run. Whatever the control also reports is this
 *      script's framing, not the round's defect.
 *
 * Usage:
 *   node scripts/qa/press-gate.mjs --base http://localhost:4321 \
 *        --urls /en/blog/what-is-a-honey-blend/,/ms/blog/apa-itu-madu-asli/ \
 *        --control /en/blog/is-honey-halal/
 *
 *   node scripts/qa/press-gate.mjs --dir dist --urls ... --control ...
 *
 * Word count is scoped to the <article> region and cut at the FAQ's sibling
 * boilerplate, and the title/description limits are the ones round 6 shipped
 * against (60 / 165) rather than the generic 60 / 155, because that is what the
 * live corpus was written to.
 */
import { readFile } from "node:fs/promises";
import { join } from "node:path";

const arg = (n, d = null) => {
  const i = process.argv.indexOf(`--${n}`);
  return i > -1 && process.argv[i + 1] ? process.argv[i + 1] : d;
};

const BASE = arg("base");
const DIR = arg("dir");
const TITLE_MAX = Number(arg("title-max", 60));
const DESC_MAX = Number(arg("desc-max", 165));
const WORDS_MIN = Number(arg("min-words", 800));
const WORDS_MAX = Number(arg("max-words", 1060)); // rendered runs ~50-70 over draft
const urls = (arg("urls", "") || "").split(",").filter(Boolean);
const controls = (arg("control", "") || "").split(",").filter(Boolean);

if (!BASE && !DIR) {
  console.error("need --base <origin> or --dir <builtdir>");
  process.exit(2);
}

async function fetchHtml(path) {
  if (DIR) {
    const p = join(DIR, path.replace(/^\//, ""), "index.html");
    return readFile(p, "utf8");
  }
  const r = await fetch(BASE + path);
  if (!r.ok) throw new Error(`HTTP ${r.status}`);
  return r.text();
}

const attr = (html, re) => (html.match(re) || [])[1] ?? null;
const meta = (html, name) =>
  attr(html, new RegExp(`<meta[^>]+name=["']${name}["'][^>]+content=["']([^"']*)["']`, "i")) ??
  attr(html, new RegExp(`<meta[^>]+content=["']([^"']*)["'][^>]+name=["']${name}["']`, "i"));
const prop = (html, p) =>
  attr(html, new RegExp(`<meta[^>]+property=["']${p}["'][^>]+content=["']([^"']*)["']`, "i")) ??
  attr(html, new RegExp(`<meta[^>]+content=["']([^"']*)["'][^>]+property=["']${p}["']`, "i"));

/** Every JSON-LD node on the page, with `@graph` flattened. THIS is the round-5 fix. */
function ldNodes(html) {
  const out = [];
  for (const m of html.matchAll(
    /<script[^>]+type=["']application\/ld\+json["'][^>]*>([\s\S]*?)<\/script>/gi
  )) {
    let parsed;
    try {
      parsed = JSON.parse(m[1].trim());
    } catch (e) {
      out.push({ __parseError: String(e) });
      continue;
    }
    const push = (n) => {
      if (!n || typeof n !== "object") return;
      if (Array.isArray(n)) return n.forEach(push);
      if (n["@graph"]) return n["@graph"].forEach(push);
      out.push(n);
    };
    push(parsed);
  }
  return out;
}

/** The reader-visible article region, minus nav/footer/TOC/related/CTA rails. */
function articleWords(html) {
  let s = html.match(/<article[\s\S]*?<\/article>/i)?.[0] ?? html;
  s = s.replace(/<script[\s\S]*?<\/script>/gi, " ");
  s = s.replace(/<style[\s\S]*?<\/style>/gi, " ");
  s = s.replace(/<nav[\s\S]*?<\/nav>/gi, " "); // breadcrumb + on-this-page
  // cut the related-articles rail, which is navigation, not article body
  const rel = s.search(/id=["']related-heading["']/i);
  if (rel > -1) s = s.slice(0, s.lastIndexOf("<section", rel));
  s = s.replace(/<[^>]+>/g, " ").replace(/&[a-z]+;/gi, " ");
  return s.split(/\s+/).filter(Boolean).length;
}

async function gate(path, isControl) {
  const f = [];
  const w = [];
  let html;
  try {
    html = await fetchHtml(path);
  } catch (e) {
    return { path, isControl, fail: [`unreachable: ${e.message}`], warn: [] };
  }

  const title = attr(html, /<title>([\s\S]*?)<\/title>/i)?.trim() ?? null;
  const desc = meta(html, "description");
  const canon = attr(html, /<link[^>]+rel=["']canonical["'][^>]+href=["']([^"']+)["']/i);
  const robots = meta(html, "robots");
  const h1s = [...html.matchAll(/<h1[^>]*>([\s\S]*?)<\/h1>/gi)];
  const h2s = [...html.matchAll(/<h2[^>]*>/gi)];

  if (!title) f.push("no <title>");
  else if (title.length > TITLE_MAX) f.push(`title ${title.length} > ${TITLE_MAX}`);
  if (!desc) f.push("no meta description");
  else if (desc.length > DESC_MAX) f.push(`description ${desc.length} > ${DESC_MAX}`);
  if (!canon) f.push("no canonical");
  else if (!canon.startsWith("http")) f.push("canonical is relative");
  else if (!canon.endsWith(path)) f.push(`canonical ${canon} does not match ${path}`);
  if (robots && /noindex/i.test(robots)) f.push(`robots: ${robots}`);
  if (h1s.length !== 1) f.push(`${h1s.length} <h1>`);
  if (h2s.length < 5) f.push(`${h2s.length} <h2>, need >= 5`);

  for (const p of ["og:title", "og:description", "og:type", "og:url", "og:image", "og:locale"]) {
    if (!prop(html, p)) f.push(`missing ${p}`);
  }
  if (prop(html, "og:type") !== "article") f.push(`og:type = ${prop(html, "og:type")}`);
  if (!meta(html, "twitter:card")) f.push("missing twitter:card");

  const ogImg = prop(html, "og:image");
  if (ogImg && BASE) {
    // byte-check, never a bare status: an SPA fallback answers 200 for a missing file
    try {
      const r = await fetch(ogImg.startsWith("http") ? ogImg : BASE + ogImg);
      const buf = Buffer.from(await r.arrayBuffer());
      const ct = r.headers.get("content-type") || "";
      if (!/^image\//.test(ct)) f.push(`og:image content-type ${ct}`);
      else if (buf.length < 1000) f.push(`og:image only ${buf.length} bytes`);
    } catch (e) {
      f.push(`og:image unfetchable: ${e.message}`);
    }
  }

  const alts = [...html.matchAll(/<link[^>]+rel=["']alternate["'][^>]+hreflang=["']([^"']+)["']/gi)].map(
    (m) => m[1]
  );
  // PRESS non-negotiable 4 forbids translating between languages, so a
  // single-language article legitimately has no alternates. WARN, never FAIL.
  if (alts.length === 0) w.push("no hreflang (single-language article - expected this round)");
  else if (!alts.includes("x-default")) f.push("hreflang set present but no x-default");

  const nodes = ldNodes(html);
  const bad = nodes.find((n) => n.__parseError);
  if (bad) f.push(`JSON-LD parse error: ${bad.__parseError}`);
  const byType = (t) => nodes.find((n) => n["@type"] === t);
  const post = byType("BlogPosting");
  const faq = byType("FAQPage");
  const crumb = byType("BreadcrumbList");
  if (!post) f.push("no BlogPosting node");
  if (!faq) f.push("no FAQPage node");
  if (!crumb) f.push("no BreadcrumbList node");
  if (post) {
    for (const k of ["headline", "description", "image", "datePublished", "dateModified", "inLanguage", "mainEntityOfPage", "author", "publisher"]) {
      if (!post[k]) f.push(`BlogPosting missing ${k}`);
    }
    const ids = new Set(nodes.map((n) => n["@id"]).filter(Boolean));
    for (const k of ["author", "publisher"]) {
      const ref = post[k]?.["@id"];
      if (ref && !ids.has(ref)) f.push(`BlogPosting.${k} @id ${ref} resolves to nothing on this page`);
    }
  }
  if (faq) {
    const n = (faq.mainEntity || []).length;
    if (n < 6) f.push(`${n} FAQ items in schema, need >= 6`);
    /* Parity: every schema question must appear in the visible summary text.
       ⛔ Both sides must be entity-DECODED before comparing. JSON-LD carries a
       quotation mark raw; the visible <summary> carries it as &quot;. Stripping
       entities on one side only reported five correct articles as broken -
       the same class of probe bug as round 5's @graph failure. */
    const decode = (t) =>
      t
        .replace(/&quot;/g, '"')
        .replace(/&#0?39;|&apos;|&#x27;/gi, "'")
        .replace(/&nbsp;/g, " ")
        .replace(/&lt;/g, "<")
        .replace(/&gt;/g, ">")
        .replace(/&#(\d+);/g, (_, d) => String.fromCharCode(+d))
        .replace(/&amp;/g, "&")
        .replace(/\s+/g, " ");
    const visible = decode(html.replace(/<[^>]+>/g, " "));
    for (const q of faq.mainEntity || []) {
      const probe = decode(q.name || "").trim().slice(0, 28);
      if (probe && !visible.includes(probe)) f.push(`FAQ schema question not visible on page: "${probe}…"`);
    }
  }

  const words = articleWords(html);
  if (words < WORDS_MIN) f.push(`${words} words < ${WORDS_MIN}`);
  else if (words > WORDS_MAX) f.push(`${words} words > ${WORDS_MAX}`);

  const body = html.match(/<article[\s\S]*?<\/article>/i)?.[0] ?? html;
  const internal = [...body.matchAll(/href=["'](\/(?:en|ms|ar)\/[^"']*)["']/gi)].map((m) => m[1]);
  const uniq = [...new Set(internal)].filter((h) => h !== path);
  if (uniq.length < 3) f.push(`${uniq.length} distinct internal links, need >= 3`);
  for (const h of uniq) if (!h.endsWith("/") && !h.includes("#")) f.push(`internal link without trailing slash: ${h}`);
  for (const m of body.matchAll(/<a\b[^>]*>([\s\S]*?)<\/a>/gi)) {
    const t = m[1].replace(/<[^>]+>/g, "").trim().toLowerCase();
    if (/^(click here|read more|here|link|this)$/.test(t)) f.push(`weak anchor text: "${t}"`);
  }

  // raw markup leaking into text - the escaped-anchor defect this round fixed
  if (/&lt;a href/.test(html)) f.push("escaped <a href> rendering as visible text");
  for (const leak of ["TODO", "FIXME", "LOREM", "PLACEHOLDER", "{{", "FACTS-VERIFIED"]) {
    if (html.includes(leak)) f.push(`owner-facing text leaked: ${leak}`);
  }

  return { path, isControl, fail: f, warn: w, words, title: title?.length, desc: desc?.length };
}

const results = [];
for (const u of controls) results.push(await gate(u, true));
for (const u of urls) results.push(await gate(u, false));

const ctlFails = new Set(results.filter((r) => r.isControl).flatMap((r) => r.fail.map((x) => x.replace(/\d+/g, "N"))));

let hard = 0;
for (const r of results) {
  const tag = r.isControl ? "CONTROL" : "       ";
  const status = r.fail.length ? "FAIL" : "PASS";
  console.log(`${tag} ${status}  ${r.path}   ${r.words ?? "?"}w  title:${r.title ?? "?"}  desc:${r.desc ?? "?"}`);
  for (const x of r.fail) {
    const shared = !r.isControl && ctlFails.has(x.replace(/\d+/g, "N"));
    console.log(`         ${shared ? "· (control fails identically -> gate framing, not a defect)" : "✗"} ${x}`);
    if (!r.isControl && !shared) hard++;
  }
  for (const x of r.warn) console.log(`         ~ ${x}`);
}

console.log(`\n${results.filter((r) => !r.isControl).length} article(s) gated, ${hard} real failure(s).`);
if (controls.length === 0) console.log("⚠ NO CONTROL RUN. Do not believe a mass failure without one.");
process.exit(hard ? 1 : 0);
