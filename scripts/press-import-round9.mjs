/**
 * PRESS round 9 — turn docs/press/round-9/draft-*.json into real article .ts
 * modules via JSON.stringify (see press-import-round8.mjs for why).
 *
 *   node scripts/press-import-round9.mjs
 */
import fs from "node:fs";
import path from "node:path";

const REPO = process.cwd();
const DIR = path.join(REPO, "docs/press/round-9");

const PLAN = {
  "madu-dan-bawang-putih": {
    lang: "ms",
    file: "draft-madu-dan-bawang-putih.json",
    icon: "/icons/ingrediant_02.webp",
    related: ["madu-dan-halia", "madu-dan-kayu-manis"],
  },
  "madu-dan-bunga-lawang": {
    lang: "ms",
    file: "draft-madu-dan-bunga-lawang.json",
    icon: "/icons/ingrediant_01.webp",
    related: ["madu-dan-buah-pala", "madu-saffron"],
  },
  "madu-dan-buah-pala": {
    lang: "ms",
    file: "draft-madu-dan-buah-pala.json",
    icon: "/icons/ingrediant_05.webp",
    related: ["madu-dan-bunga-lawang", "madu-dan-halia"],
  },
  "honey-and-coffee": {
    lang: "en",
    file: "draft-honey-and-coffee.json",
    icon: "/icons/ingrediant_08.webp",
    related: ["honey-in-hot-drinks-malaysia", "honey-and-yogurt"],
  },
  "honey-and-garlic": {
    lang: "en",
    file: "draft-honey-and-garlic.json",
    icon: "/icons/ingrediant_02.webp",
    related: ["black-seed-honey-benefits", "honey-and-yogurt"],
  },
};

const TODAY = "2026-09-15";

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
    figureAlt: draft.figureAlt, // overwritten later by assign-article-figures.mjs
    category: draft.category,
    blocks: draft.blocks,
    faqs: draft.faqs,
    related: plan.related,
  };

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
