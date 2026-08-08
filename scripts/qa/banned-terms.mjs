/**
 * Fails while any banned positioning term survives.
 *
 * The site used to describe Subur as "a traditional Middle Eastern honey blend
 * built on generations of knowledge", and later as having "precisely studied
 * standards". Neither is true of the product, so both are gone - in all three
 * languages, on every surface, including the blog articles.
 *
 *   node scripts/qa/banned-terms.mjs             # checks src/
 *   node scripts/qa/banned-terms.mjs --dir=dist  # checks the built output
 */
import { readdir, readFile } from "node:fs/promises";
import { join } from "node:path";

const dir = process.argv.find((a) => a.startsWith("--dir="))?.split("=")[1] ?? "src";

const BANNED = [
  /traditional/i,
  /traditionally/i,
  /\btradition\b/i,
  /\btraditions\b/i,
  /middle[- ]east/i,
  /for generations/i,
  /generational/i,
  /studied standards/i,
  /تقليدي/,
  /تقليديّ/,
  /تقاليد/,
  /\bتقليد\b/,
  /الشرق الأوسط/,
  /شرق أوسط/,
  /عبر الأجيال/,
  /معايير مدروسة/,
  /tradisional/i,
  /\btradisi\b/i,
  /timur tengah/i,
  /turun-temurun/i,
  /piawaian dikaji/i,
];

const EXT = /\.(ts|tsx|astro|json|txt|md)$/;
const SKIP = /node_modules|docs[\\/]superpowers/;

const hits = [];
async function* walk(d) {
  for (const e of await readdir(d, { withFileTypes: true })) {
    const p = join(d, e.name);
    if (SKIP.test(p)) continue;
    if (e.isDirectory()) yield* walk(p);
    else if (EXT.test(e.name) || dir === "dist") yield p;
  }
}
for await (const file of walk(dir)) {
  const lines = (await readFile(file, "utf8")).split(/\r?\n/);
  lines.forEach((line, i) => {
    for (const re of BANNED) {
      if (re.test(line)) hits.push(`${file}:${i + 1}: ${line.trim().slice(0, 160)}`);
    }
  });
}

if (hits.length) {
  console.error(`${hits.length} banned term(s):\n` + hits.map((h) => `  ${h}`).join("\n"));
  process.exit(1);
}
console.log(`no banned terms in ${dir}/`);
