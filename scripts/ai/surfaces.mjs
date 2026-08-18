/**
 * Regenerates the AI-visibility surfaces that live in public/.
 *
 *   1. facts-sync.mjs -> AI-FACTS.yml from src/config/site.ts
 *   2. kit build      -> .beacon-out/ (git-ignored staging)
 *   3. adopt          -> about.md, faq.md, AGENTS.md into public/
 *
 * Runs as part of `npm run build`, before `astro build` copies public/ into
 * dist/. Anything written after that copy would never ship.
 *
 * What it deliberately does NOT adopt:
 *   - the kit's llms.txt / ar/llms.txt / ms/llms.txt. This site serves its own
 *     at /llms.txt, /llms-ar.txt, /llms-ms.txt from Astro endpoints that append
 *     a generated page list to 32 KB of hand-written, natively-researched prose
 *     per language. The kit's versions go to staging and are discarded.
 *   - llms-full.txt, which is an endpoint here (src/pages/llms-full.txt.ts) for
 *     the same reason: the briefs only exist at build time.
 *   - pricing.md - no price is published on this site and none was supplied.
 *   - schema.jsonld - SEO.astro already emits the Organization and the two
 *     per-branch LocalBusiness/GroceryStore nodes. A second graph would
 *     duplicate the entity rather than strengthen it.
 *
 * Usage: node scripts/ai/surfaces.mjs
 */
import { execFileSync } from "node:child_process";
import { copyFileSync, existsSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const ROOT = join(dirname(fileURLToPath(import.meta.url)), "../..");
const STAGE = join(ROOT, ".beacon-out");
const ADOPT = ["about.md", "faq.md", "AGENTS.md"];

const run = (script, args = []) =>
  execFileSync(process.execPath, [join(ROOT, "scripts/ai", script), ...args], {
    stdio: "inherit",
    cwd: ROOT,
  });

run("facts-sync.mjs");
run("build.mjs", ["--out", STAGE]);

for (const f of ADOPT) {
  const src = join(STAGE, f);
  if (!existsSync(src)) {
    console.error(`  MISSING  ${src} - a block in AI-FACTS.yml went blank`);
    process.exit(1);
  }
  copyFileSync(src, join(ROOT, "public", f));
  console.log(`  adopted   public/${f}`);
}
