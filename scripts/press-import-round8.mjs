/**
 * PRESS round 8 — turn docs/press/round-8/draft-*.json into real article .ts
 * modules, using JSON.stringify for every string/array field so nothing can
 * ever produce the unescaped-quote build break round 7 hit three times.
 *
 *   node scripts/press-import-round8.mjs
 */
import fs from "node:fs";
import path from "node:path";

const REPO = process.cwd();
const DIR = path.join(REPO, "docs/press/round-8");

/** slug -> { lang, icon, related, published } */
const PLAN = {
  "madu-dan-lemon": {
    lang: "ms",
    file: "draft-madu-dan-lemon.json",
    icon: "/icons/ingrediant_01.webp",
    related: ["madu-dan-halia", "cara-kenal-madu-asli"],
  },
  "madu-dan-halia": {
    lang: "ms",
    file: "draft-madu-dan-halia.json",
    icon: "/icons/ingrediant_03.webp",
    related: ["madu-dan-lemon", "habbatus-sauda-dan-madu"],
  },
  "madu-dan-kayu-manis": {
    lang: "ms",
    file: "draft-madu-dan-kayu-manis.json",
    icon: "/icons/ingrediant_06.webp",
    related: ["madu-dan-halia", "habbatus-sauda-dan-madu"],
  },
  "honey-as-an-energy-source": {
    lang: "en",
    file: "draft-honey-as-an-energy-source.json",
    icon: "/icons/ingrediant_04.webp",
    related: ["honey-before-and-after-exercise", "black-seed-honey-benefits"],
  },
  "honey-and-yogurt": {
    lang: "en",
    file: "draft-honey-and-yogurt.json",
    icon: "/icons/ingrediant_09.webp",
    related: ["honey-with-nuts-malaysia", "black-seed-honey-benefits"],
  },
};

const TODAY = "2026-09-15";

function tsLiteral(value, indent = 2) {
  // JSON.stringify handles ALL escaping correctly by construction - this is
  // the whole point. Pretty-print with the repo's 2-space style.
  return JSON.stringify(value, null, indent).replace(/\n/g, "\n" + " ".repeat(0));
}

let report = [];

for (const [slug, plan] of Object.entries(PLAN)) {
  const draftPath = path.join(DIR, plan.file);
  if (!fs.existsSync(draftPath)) throw new Error(`missing draft: ${draftPath}`);
  const draft = JSON.parse(fs.readFileSync(draftPath, "utf8"));

  const article = {
    slug,
    title: draft.title,
    heading: draft.heading,
    description: draft.description,
    primaryKeyword: draft.primaryKeyword,
    keywords: draft.keywords,
    published: TODAY,
    updated: TODAY,
    readingMinutes: draft.readingMinutes,
    icon: plan.icon,
    figureAlt: draft.figureAlt, // overwritten later by assign-article-figures.mjs from the real frame
    category: draft.category,
    blocks: draft.blocks,
    faqs: draft.faqs,
    related: plan.related,
  };

  // Build the .ts body by JSON.stringify-ing each field value individually so
  // the output reads like the hand-written files (one key per line) while
  // every string is escaped by the JSON serializer, never by hand.
  const lines = [];
  lines.push(`import type { Article } from "../types";`);
  lines.push(``);
  lines.push(`export const article: Article = {`);
  for (const [key, value] of Object.entries(article)) {
    lines.push(`  ${key}: ${tsLiteralIndented(value, 2)},`);
  }
  lines.push(`};`);
  lines.push(``);
  const ts = lines.join("\n");

  const outDir = path.join(REPO, "src/content/articles", plan.lang);
  const outPath = path.join(outDir, `${slug}.ts`);
  fs.writeFileSync(outPath, ts, "utf8");

  const wordCount = countWords(article);
  report.push({ slug, lang: plan.lang, outPath: path.relative(REPO, outPath), wordCount, faqCount: article.faqs.length });
}

function tsLiteralIndented(value, baseIndent) {
  const json = JSON.stringify(value, null, 2);
  // Re-indent every line after the first by baseIndent spaces so nested
  // structures line up under their key, matching the hand-written files.
  return json
    .split("\n")
    .map((line, i) => (i === 0 ? line : " ".repeat(baseIndent) + line))
    .join("\n");
}

function countWords(article) {
  const parts = [];
  const walk = (b) => {
    if (b.answer) parts.push(b.answer);
    if (b.text) parts.push(b.text);
    if (b.question) parts.push(b.question);
    if (b.items) b.items.forEach((it) => parts.push(it.text || ""));
    if (b.steps) b.steps.forEach((s) => parts.push(s.title || "", s.text || ""));
    if (b.rows) b.rows.forEach((r) => r.forEach((c) => parts.push(c)));
    if (b.title) parts.push(b.title);
  };
  article.blocks.forEach(walk);
  const bodyWords = parts.join(" ").split(/\s+/).filter(Boolean).length;
  const faqWords = article.faqs
    .map((f) => f.q + " " + f.a)
    .join(" ")
    .split(/\s+/)
    .filter(Boolean).length;
  return { bodyWords, faqWords, total: bodyWords + faqWords };
}

console.log(JSON.stringify(report, null, 2));
