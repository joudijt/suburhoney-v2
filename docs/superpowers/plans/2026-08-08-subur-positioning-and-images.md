# Subur positioning rewrite + image framing Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Replace the false "traditional Middle Eastern honey" positioning (and the rejected "studied standards" wording) with a plain-language quality-blend frame across all three locales, and make every image on the site render its subject whole on desktop and mobile with nothing hidden under the fixed navbar.

**Architecture:** Two independent workstreams sharing one verification harness. The image work is art direction moved out of CSS and into the build: a new crop script produces real per-breakpoint derivatives in `assets-src/`, `optimize-images.mjs` ships them, and components pick between them with `<picture>` + `media`. The content work is a hand rewrite, file by file and locale by locale, gated by a banned-term checker that must end at zero hits.

**Tech Stack:** Astro 7 (static output), Tailwind v4, sharp (image pipeline), Playwright (visual + measurement QA), Node 22.

Spec: `docs/superpowers/specs/2026-08-08-subur-positioning-and-images-design.md`

## Global Constraints

- Branch is **`master`**, not `main`. The tree was clean at plan time; keep commits small.
- Run every Node/Playwright script **from inside `D:\suburhoney-v2`** or module resolution fails.
- Dev server: `npm run dev -- --port 5182`. On Windows it must be launched detached (PowerShell `Start-Process`); a backgrounded `npm run dev &` from the Bash tool dies with its parent shell.
- **A brand-new `.astro` file's novel Tailwind classes do not compile while the dev server is running.** If a new class computes as unset, `npx astro dev stop` and relaunch before assuming the class name is wrong. (No new page files are planned here, but new utility classes on existing files are.)
- **Never write a production claim the project cannot verify**: no "small batch", "hand made", "lab tested", "cold pressed", "award winning". Craft tone comes only from the facts listed in the spec.
- **No medical claims.** The existing rule stands: Subur is a food, not a medicine.
- Arabic and Malay copy is **written natively**, never translated word-for-word from the new English.
- **Slugs, URLs, filenames of existing assets and sitemap structure do not change.**
- Physical vs logical CSS: use `left-*`/`right-*`/`object-left`/`object-right` when anchoring to a **one-file-serves-all-locales image**; use `start-*`/`end-*`/`col-start-*` when anchoring to the **reader's direction**. Getting this backwards mirrors silently under `dir="rtl"`.
- `public/*.webp` is generated output. Never hand-edit it; edit `assets-src/` and rerun `npm run optimize:images`.
- Two classes of image, with different bars:
  - **Content images** (lead figures, blog cards): rendered ratio must equal natural ratio within 0.02. Zero crop.
  - **Full-bleed backgrounds** (hero, ritual): a real art-directed source per breakpoint band, residual `object-cover` crop ≤ 10%, and the jar/label/couple verified whole by looking at a screenshot.

---

## File Structure

**Created**

- `scripts/make-crops.mjs` — produces art-directed derivatives in `assets-src/images/` from the existing originals. Peer of `make-page-figures.mjs`; rerun only when a source photo or a crop window changes.
- `scripts/qa/image-audit.mjs` — Playwright audit: per-image natural-vs-rendered ratio, navbar overlap, console errors, horizontal overflow. This is the test suite for the image workstream.
- `scripts/qa/banned-terms.mjs` — greps `src/` (and optionally `dist/`) for every banned term in all three languages. This is the test suite for the content workstream.
- `assets-src/images/hero-bg-{latin,ar}-{wide,tall,portrait}.png` — 6 hero derivatives.
- `assets-src/images/page-benefits-square.png` — 1 lead-image derivative.

**Modified**

- `scripts/optimize-images.mjs` — 7 new `TARGETS` entries.
- `src/components/sections/Hero.astro` — photo layer clears the navbar; `<picture>` with three sources.
- `src/components/sections/Ritual.astro` — mobile card renders at the photo's native ratio.
- `src/pages/[lang]/blog/index.astro` — card image band matches the 4:3 figures.
- `src/config/pageFigures.ts` + `src/components/article/PageFigure.astro` — `mobileCrop` CSS rule replaced by a real square derivative.
- `src/i18n/locales/{en,ar,ms}/common.json` — positioning rewrite.
- `src/content/pages/{en,ar,ms}/{benefits,retail,why-us,contact}.ts` — positioning rewrite.
- `src/content/articles/{en,ar,ms}/*.ts` — 9 articles, banned terms out.
- `src/content/llms/{en,ar,ms}.txt`, `src/pages/llms.txt.ts` — same.
- `src/content/articles/types.ts` + `src/components/article/Blocks.astro` — callout tone `"tradition"` renamed `"origin"`.

---

### Task 1: Image audit harness

**Files:**
- Create: `scripts/qa/image-audit.mjs`

**Interfaces:**
- Consumes: nothing.
- Produces: `node scripts/qa/image-audit.mjs` — exits `1` with a per-image report when any check fails, `0` when clean. Tasks 2-6 and 15 all gate on it. Accepts an optional `--base` (default `http://localhost:5182`).

- [ ] **Step 1: Write the audit script**

```js
/**
 * Image audit. Every visible <img> on every page, in every locale, at every
 * breakpoint band, has to satisfy three things:
 *
 *   1. it actually loaded (naturalWidth > 0)
 *   2. content images render at their natural aspect ratio - no object-cover
 *      crop at all; full-bleed background layers may crop up to 10%
 *   3. nothing sits underneath the fixed 80px header
 *
 * Run the dev server first:  npm run dev -- --port 5182
 * Then, from the project root:  node scripts/qa/image-audit.mjs
 */
import { chromium } from "playwright";

const BASE = process.argv.find((a) => a.startsWith("--base="))?.split("=")[1] ?? "http://localhost:5182";
const LOCALES = ["en", "ar", "ms"];
const PATHS = ["", "/benefits/", "/retail/", "/why-us/", "/contact/", "/blog/"];
const WIDTHS = [
  { w: 390, h: 844 },
  { w: 430, h: 932 },
  { w: 768, h: 1024 },
  { w: 1024, h: 800 },
  { w: 1440, h: 900 },
];

/** Full-bleed background layers: allowed to crop, but only up to 10%. */
const BACKGROUND = /hero-bg|ritual-bg/;
/** Purely decorative, intrinsically unconstrained. */
const IGNORE = /bee-cursor|honey-sticker|honey-jar-sticker|logo-8|ingrediant_/;

const failures = [];

const browser = await chromium.launch();
for (const size of WIDTHS) {
  const ctx = await browser.newContext({ viewport: { width: size.w, height: size.h } });
  const page = await ctx.newPage();
  const errors = [];
  page.on("console", (m) => m.type() === "error" && errors.push(m.text()));
  page.on("response", (r) => r.status() >= 400 && errors.push(`${r.status()} ${r.url()}`));

  for (const lang of LOCALES) {
    for (const path of PATHS) {
      const url = `${BASE}/${lang}${path}`;
      errors.length = 0;
      await page.goto(url, { waitUntil: "networkidle" });
      // Scroll the whole page in real increments: reveals are IntersectionObserver
      // driven and lazy images never load if you only measure the first screen.
      await page.evaluate(async () => {
        const step = window.innerHeight * 0.8;
        for (let y = 0; y < document.body.scrollHeight; y += step) {
          window.scrollTo(0, y);
          await new Promise((r) => setTimeout(r, 120));
        }
        window.scrollTo(0, 0);
      });
      await page.waitForTimeout(600);

      const report = await page.evaluate(() => {
        const header = document.querySelector("header").getBoundingClientRect();
        const scrollX = document.documentElement.scrollWidth > document.documentElement.clientWidth;
        const imgs = [...document.querySelectorAll("img")]
          .filter((img) => {
            const r = img.getBoundingClientRect();
            return getComputedStyle(img).display !== "none" && r.width > 0 && r.height > 0;
          })
          .map((img) => {
            const r = img.getBoundingClientRect();
            const absTop = r.top + window.scrollY;
            return {
              src: (img.currentSrc || img.src).split("/").pop(),
              natW: img.naturalWidth,
              natRatio: img.naturalWidth ? img.naturalWidth / img.naturalHeight : 0,
              boxRatio: r.width / r.height,
              fit: getComputedStyle(img).objectFit,
              // Only meaningful before any scrolling, so recorded in page coords
              // and compared against the header's fixed band.
              topInPage: absTop,
              headerBottom: header.height,
            };
          });
        return { imgs, scrollX };
      });

      if (report.scrollX) failures.push(`${url} @${size.w}: horizontal overflow`);
      for (const e of errors) failures.push(`${url} @${size.w}: console/network: ${e}`);

      for (const img of report.imgs) {
        if (IGNORE.test(img.src)) continue;
        if (!img.natW) {
          failures.push(`${url} @${size.w}: ${img.src} did not load`);
          continue;
        }
        const crop = 1 - Math.min(img.natRatio, img.boxRatio) / Math.max(img.natRatio, img.boxRatio);
        const limit = BACKGROUND.test(img.src) ? 0.1 : 0.02;
        if (img.fit === "cover" && crop > limit) {
          failures.push(
            `${url} @${size.w}: ${img.src} crops ${(crop * 100).toFixed(0)}% ` +
              `(nat ${img.natRatio.toFixed(3)} vs box ${img.boxRatio.toFixed(3)}, limit ${limit * 100}%)`
          );
        }
        // A background layer whose top edge is above the header's bottom edge is
        // being clipped by the bar.
        if (BACKGROUND.test(img.src) && img.topInPage < img.headerBottom - 1) {
          failures.push(
            `${url} @${size.w}: ${img.src} starts at y=${Math.round(img.topInPage)}, under the ${img.headerBottom}px header`
          );
        }
      }
    }
  }
  await ctx.close();
}
await browser.close();

if (failures.length) {
  console.error(`\n${failures.length} failure(s):\n` + failures.map((f) => `  - ${f}`).join("\n"));
  process.exit(1);
}
console.log("image audit clean");
```

- [ ] **Step 2: Run it against the current site and confirm it fails with the known offenders**

```bash
# PowerShell, detached, from D:\suburhoney-v2
Start-Process -FilePath "cmd.exe" -ArgumentList "/c","cd /d D:\suburhoney-v2 && npm run dev -- --port 5182" -WindowStyle Hidden
node scripts/qa/image-audit.mjs
```

Expected: FAIL, and the report must include at minimum
- `hero-bg-*.webp crops 69%` at 390
- `hero-bg-*.webp starts at y=0, under the 80px header`
- `ritual-bg-*.webp crops 33%` at 390
- `article-*.webp crops 23%` at 1440

If any of those four are missing, the audit is not measuring what it claims - fix the audit before touching a component.

- [ ] **Step 3: Commit**

```bash
git add scripts/qa/image-audit.mjs
git commit -m "Add a Playwright image audit covering crop, load and navbar overlap"
```

---

### Task 2: Hero photo clears the navbar

**Files:**
- Modify: `src/components/sections/Hero.astro:33-41`

**Interfaces:**
- Consumes: `scripts/qa/image-audit.mjs` from Task 1.
- Produces: nothing new; Task 3 edits the same block.

- [ ] **Step 1: Move the photo layer below the header**

The header is `fixed` and `h-20` (80px). The photo layer is currently `absolute inset-0`, so its top 80px sits under the bar and the honey dipper at the top of the frame is sliced on every viewport.

Replace the wrapper opening tag:

```html
  <div class="absolute inset-0 -z-20" aria-hidden="true">
```

with:

```html
  <!-- top-20, not inset-0: the header is fixed and h-20, so a photo starting at
       y=0 has its top 80px hidden behind the bar. Starting the layer at the
       header's bottom edge keeps the whole composition visible. The section
       keeps its own pt-20 so the text stays clear of the bar too. -->
  <div class="absolute inset-x-0 bottom-0 top-20 -z-20" aria-hidden="true">
```

- [ ] **Step 2: Run the audit and confirm the overlap failures are gone**

Run: `node scripts/qa/image-audit.mjs`
Expected: no line containing `under the 80px header`. Crop failures still present - Task 3 fixes those.

- [ ] **Step 3: Look at it**

Screenshot `/en` and `/ar` at 1440x900 and read the images. The dipper at the top of the frame must be whole, and the band behind the header must read as the header's own cream bar, not as a gap.

- [ ] **Step 4: Commit**

```bash
git add src/components/sections/Hero.astro
git commit -m "Start the hero photo below the fixed header instead of behind it"
```

---

### Task 3: Art-directed hero crops per breakpoint band

**Files:**
- Create: `scripts/make-crops.mjs`
- Create (generated): `assets-src/images/hero-bg-{latin,ar}-{wide,tall,portrait}.png`
- Modify: `scripts/optimize-images.mjs:45-48`
- Modify: `src/components/sections/Hero.astro:16-23, 33-41`

**Interfaces:**
- Consumes: the audit from Task 1, the navbar offset from Task 2.
- Produces: `node scripts/make-crops.mjs` regenerates every derivative in `assets-src/images/`. Task 6 adds an entry to the same `CROPS` table.

**Why three bands.** With the photo layer starting at y=80, the box the photo has to fill is roughly:

| Viewport | Box | Ratio | Source ratio 1.5 crops |
|---|---|---|---|
| 390x844 | 390x764 | 0.51 | 66% |
| 768x1024 | 768x944 | 0.81 | 46% |
| 1440x900 | 1440x820 | 1.76 | 15% |

One 3:2 file cannot serve all three. Each band gets a source cut close to its own ratio: `wide` 16:9 (1.78), `tall` 4:5 (0.80), `portrait` 1:2 (0.50).

- [ ] **Step 1: Write the crop script**

```js
/**
 * Art-directed crops of the full-bleed photographs.
 *
 * The hero is a full-bleed background whose box ratio swings from 0.51 on a
 * phone to 1.76 on a desktop. One 3:2 file cannot fill all of those without
 * cutting the jar in half, so each breakpoint band gets its own cut of the same
 * photograph, chosen so the jar and its label are always whole.
 *
 * Output lands in assets-src/, not public/ - optimize-images.mjs is still the
 * only thing that writes public/. Rerun both after changing a window here:
 *   node scripts/make-crops.mjs && npm run optimize:images
 */
import sharp from "sharp";
import { join } from "node:path";

const DIR = "assets-src/images";

/**
 * `anchor` is the horizontal centre of the subject as a fraction of the source
 * width, and `ratio` is the output aspect ratio. The window is the largest crop
 * of that ratio that fits the source, centred on the anchor and clamped to the
 * edges. Anchors were read off the actual photographs: the latin jar sits right
 * of centre, the Arabic jar left of centre (the two files are mirrored).
 */
const CROPS = [
  { src: "hero-bg-latin.png", suffix: "wide", ratio: 16 / 9, anchor: 0.62 },
  { src: "hero-bg-latin.png", suffix: "tall", ratio: 4 / 5, anchor: 0.66 },
  { src: "hero-bg-latin.png", suffix: "portrait", ratio: 1 / 2, anchor: 0.68 },
  { src: "hero-bg-ar.png", suffix: "wide", ratio: 16 / 9, anchor: 0.38 },
  { src: "hero-bg-ar.png", suffix: "tall", ratio: 4 / 5, anchor: 0.34 },
  { src: "hero-bg-ar.png", suffix: "portrait", ratio: 1 / 2, anchor: 0.32 },
];

for (const crop of CROPS) {
  const srcPath = join(DIR, crop.src);
  const meta = await sharp(srcPath).metadata();

  // Largest window of the requested ratio that fits inside the source.
  let width = Math.min(meta.width, Math.round(meta.height * crop.ratio));
  let height = Math.min(meta.height, Math.round(width / crop.ratio));
  width = Math.round(height * crop.ratio);

  const left = Math.max(0, Math.min(meta.width - width, Math.round(meta.width * crop.anchor - width / 2)));
  const top = Math.max(0, Math.round((meta.height - height) / 2));

  const out = join(DIR, crop.src.replace(/\.png$/, `-${crop.suffix}.png`));
  await sharp(srcPath).extract({ left, top, width, height }).toFile(out);
  console.log(`${crop.src} ${meta.width}x${meta.height} -> ${width}x${height} @${left},${top}  ${out}`);
}
```

- [ ] **Step 2: Generate the crops and look at every one of them**

```bash
node scripts/make-crops.mjs
```

Then `Read` all six PNGs. **Requirement: the jar is entirely inside the frame and no letter of the label is cut.** If one fails, adjust that row's `anchor` (and only that row) and rerun. Do not proceed on a crop you have not looked at.

Note the two Arabic sources are smaller (`hero-bg-ar.png` is 1264x843), so `hero-bg-ar-portrait.png` lands around 421px wide. That is about 1.1x on a 390px viewport - acceptable, and recorded here so it is not rediscovered as a bug later.

- [ ] **Step 3: Register the derivatives in the image pipeline**

In `scripts/optimize-images.mjs`, replace the two hero entries with:

```js
  // Hero background: full-bleed, object-cover, lazy. Per-locale photo -
  // mirrored compositions, jar on opposite sides to sit clear of the text.
  // Three cuts per locale because the box ratio swings from 0.51 on a phone to
  // 1.76 on a desktop; one 3:2 file cut the jar in half at both ends. Windows
  // are defined in scripts/make-crops.mjs.
  { src: "images/hero-bg-ar.png", width: 1536, quality: 78 },
  { src: "images/hero-bg-latin.png", width: 1536, quality: 78 },
  { src: "images/hero-bg-ar-wide.png", width: 1536, quality: 78 },
  { src: "images/hero-bg-latin-wide.png", width: 1536, quality: 78 },
  { src: "images/hero-bg-ar-tall.png", width: 1024, quality: 78 },
  { src: "images/hero-bg-latin-tall.png", width: 1024, quality: 78 },
  { src: "images/hero-bg-ar-portrait.png", width: 900, quality: 78 },
  { src: "images/hero-bg-latin-portrait.png", width: 900, quality: 78 },
```

Run: `npm run optimize:images`
Expected: eight hero lines in the output, no `WARNING: n source(s) with no target`.

- [ ] **Step 4: Serve them with `<picture>`**

In `src/components/sections/Hero.astro`, replace the frontmatter `bg` constant:

```js
/* Studio photo, mirrored per locale: the latin file has the jar on the right
   with calm empty space on the left (text sits there for en/ms); the ar file
   has the jar on the left with calm space on the right (text sits there for
   ar, aligned with the language switcher).
   Three cuts each, one per breakpoint band - see scripts/make-crops.mjs. A
   single 3:2 file cropped 66% of the frame on a phone and cut the jar apart. */
const base = lang === "ar" ? "hero-bg-ar" : "hero-bg-latin";
const bg = {
  portrait: `/images/${base}-portrait.webp`,
  tall: `/images/${base}-tall.webp`,
  wide: `/images/${base}-wide.webp`,
  position: lang === "ar" ? "object-left" : "object-right",
};
```

and the image inside the layer wrapper edited in Task 2:

```html
    <picture>
      <source media="(min-width: 1024px)" srcset={bg.wide} />
      <source media="(min-width: 640px)" srcset={bg.tall} />
      <img
        src={bg.portrait}
        alt=""
        aria-hidden="true"
        loading="lazy"
        decoding="async"
        class={`h-full w-full object-cover ${bg.position}`}
      />
    </picture>
```

`object-left`/`object-right` stay **physical**: the two files are mirrored photographs, so the anchor follows the picture, not the reading direction.

- [ ] **Step 5: Run the audit**

Run: `node scripts/qa/image-audit.mjs`
Expected: no `hero-bg` failure at any width. (Ritual and blog failures remain.)

- [ ] **Step 6: Look at it**

Screenshot `/en` and `/ar` at 390x844, 768x1024 and 1440x900. The jar must be whole and recognisable in all six, and the hero text must still be legible over the photo.

- [ ] **Step 7: Commit**

```bash
git add scripts/make-crops.mjs scripts/optimize-images.mjs src/components/sections/Hero.astro assets-src/images public/images
git commit -m "Give the hero a real crop per breakpoint band instead of one 3:2 file"
```

---

### Task 4: Ritual mobile card renders at native ratio

**Files:**
- Modify: `src/components/sections/Ritual.astro:81-92`

**Interfaces:**
- Consumes: the audit from Task 1.
- Produces: nothing.

- [ ] **Step 1: Match the card to the photo**

The card is `aspect-square sm:aspect-[4/3]` over a 3:2 source, which throws away 33% of the frame at 390px. The sources are 1536x1024 exactly, so a 3:2 box crops nothing.

Replace the `class` on that `<img>`:

```html
          class={`aspect-[3/2] w-full rounded-[2rem] border border-gold/30 object-cover shadow-soft ${bg.position}`}
```

and update the comment above the wrapper, which currently justifies cropping:

```html
      {/* Mobile and tablet counterpart of the background photo above: the same
          file, shown as a card over the text instead of behind it. Rendered at
          the source's own 3:2 ratio so nothing is cropped - the earlier square
          box cut a third of the frame away. The subject-side object-position is
          kept so any sub-pixel difference lands on the empty half.
          The jar animation that used to sit here is gone: it was already hidden
          from lg up, the photo shows the jar anyway, and keeping it would have
          meant lazy-loading 12 images nobody sees. ritual-jar-motion.ts is left
          on disk unused if it is ever wanted back. */}
```

- [ ] **Step 2: Run the audit**

Run: `node scripts/qa/image-audit.mjs`
Expected: no `ritual-bg` failure below 1024. The desktop background layer stays a full-bleed `object-cover` and its residual crop (11% latin, 17% ar at 1440) must now be under the 10% background limit - if the `ar` layer still fails, fix it by adding a `ritual-bg-ar-wide` row to `CROPS` in `scripts/make-crops.mjs` with `ratio: 16/9, anchor: 0.62`, a matching `TARGETS` entry, and a `<source media="(min-width: 1024px)">` on that layer. Do not fix it by loosening the limit.

- [ ] **Step 3: Look at it**

Screenshot `/en`, `/ar`, `/ms` at 390x844 scrolled to `#ritual`. The couple and the jar must both be inside the card.

- [ ] **Step 4: Commit**

```bash
git add src/components/sections/Ritual.astro
git commit -m "Render the ritual mobile card at the photo's own ratio"
```

---

### Task 5: Blog cards match their figures

**Files:**
- Modify: `src/pages/[lang]/blog/index.astro:85-99`

**Interfaces:**
- Consumes: the audit from Task 1.
- Produces: nothing.

- [ ] **Step 1: Replace the fixed-height band with the figures' own ratio**

All three article figures are 4:3. The band is a fixed `h-44 md:h-52` against a full-width card, which crops 23% on desktop and 31% on mobile.

Replace the band's opening tag:

```html
            <div class="relative flex aspect-[4/3] items-center justify-center overflow-hidden bg-[linear-gradient(160deg,var(--color-sand),var(--color-cream-soft))]">
```

and the comment inside it:

```html
                /* The band is the figures' own 4:3, so object-cover crops
                   nothing and every card still has an identical image box.
                   Decorative here - the heading right below carries the same
                   meaning, so alt stays empty rather than repeating it. */
```

The fallback branch (articles with no figure, rendering the category icon at `h-16 w-16`) is unchanged and still centres inside the taller band.

- [ ] **Step 2: Run the audit**

Run: `node scripts/qa/image-audit.mjs`
Expected: no `article-*` failure at any width.

- [ ] **Step 3: Look at it**

Screenshot `/en/blog/` at 1440 and 390. All three cards must be the same height with the image fully visible.

- [ ] **Step 4: Commit**

```bash
git add "src/pages/[lang]/blog/index.astro"
git commit -m "Match the blog card image band to the figures' 4:3 ratio"
```

---

### Task 6: A real square derivative for the benefits lead image

**Files:**
- Modify: `scripts/make-crops.mjs` (one new `CROPS` row)
- Modify: `scripts/optimize-images.mjs` (one new `TARGETS` entry)
- Modify: `src/config/pageFigures.ts`
- Modify: `src/components/article/PageFigure.astro:39-51`

**Interfaces:**
- Consumes: `CROPS` from Task 3.
- Produces: `PageFigure.mobileSrc?: string` replacing `PageFigure.mobileCrop?: string`. No other consumer of `PAGE_FIGURES` reads either field.

- [ ] **Step 1: Add the crop row**

In `scripts/make-crops.mjs`, append to `CROPS`:

```js
  // Benefits lead photo. The half the desktop overlay text fills is empty cream
  // in the source, so below lg it reads as a blank panel. A real square cut
  // framed on the man and the jar replaces the CSS crop that used to do this.
  { src: "page-benefits.png", suffix: "square", ratio: 1, anchor: 0.34 },
```

Run: `node scripts/make-crops.mjs`, then `Read` `assets-src/images/page-benefits-square.png`. The man and the jar must both be fully in frame; adjust `anchor` and rerun if not.

- [ ] **Step 2: Ship it**

In `scripts/optimize-images.mjs`, directly after the `page-benefits.png` entry:

```js
  // Square cut of the same photo for below-lg, where the wide frame's empty
  // half reads as an unfinished image. See scripts/make-crops.mjs.
  { src: "images/page-benefits-square.png", width: 1024, quality: 78 },
```

Run: `npm run optimize:images`
Expected: the new line appears, no orphan warning.

- [ ] **Step 3: Swap the CSS crop for the derivative**

In `src/config/pageFigures.ts`, replace the `mobileCrop` field and its doc comment:

```ts
  /**
   * A real crop of the same photo, served below `lg` for photos whose subject
   * sits on one side and whose other half is deliberately empty. On desktop the
   * overlay text fills that half; below `lg` the text moves underneath, leaving
   * the empty half looking like an unfinished image. Art direction belongs in
   * the image pipeline, not in an object-position guess, so this is a genuine
   * square cut from scripts/make-crops.mjs rather than a CSS crop of the wide
   * file. Figures with a centred composition leave this unset.
   */
  mobileSrc?: string;
```

and the `benefits` entry:

```ts
  benefits: {
    src: "/images/page-benefits.webp",
    width: 1536,
    height: 1024,
    mobileSrc: "/images/page-benefits-square.webp",
  },
```

- [ ] **Step 4: Render it**

In `src/components/article/PageFigure.astro`, replace the `<img>` and the comment above it:

```html
      {/* No forced aspect ratio: the photo is 3:2 and the two still-lifes are
          16:9, and cropping either to a shared box cut the subject. Intrinsic
          width/height are still set so the reading column reserves the space.
          Where a figure declares a mobileSrc, below lg gets a real square cut of
          the same photo instead of a CSS crop of this one. */}
      <picture>
        {figure.mobileSrc && <source media="(max-width: 1023px)" srcset={figure.mobileSrc} />}
        <img
          src={figure.src}
          alt={alt}
          width={figure.width}
          height={figure.height}
          loading="lazy"
          decoding="async"
          class="h-auto w-full"
        />
      </picture>
```

Note the `width`/`height` attributes stay the wide file's. That is deliberate: they only reserve layout space, and the square source is `h-auto w-full` so it sizes itself once loaded.

- [ ] **Step 5: Run the audit**

Run: `node scripts/qa/image-audit.mjs`
Expected: clean. Zero failures across every page, locale and width. If anything else surfaces, fix it under the same rule - real derivative for a fixed box, matching box otherwise.

- [ ] **Step 6: Look at it**

Screenshot `/en/benefits/`, `/ar/benefits/`, `/ms/benefits/` at 390 and 1440. Below `lg` the square photo must show the man and the jar with the answer text underneath; at `lg` the wide photo with the overlay must be unchanged from before this task.

- [ ] **Step 7: Commit**

```bash
git add scripts/make-crops.mjs scripts/optimize-images.mjs src/config/pageFigures.ts src/components/article/PageFigure.astro assets-src/images public/images
git commit -m "Serve a real square crop of the benefits photo below lg"
```

---

### Task 7: Banned-term checker

**Files:**
- Create: `scripts/qa/banned-terms.mjs`

**Interfaces:**
- Consumes: nothing.
- Produces: `node scripts/qa/banned-terms.mjs [--dir=src]` — exits `1` listing `file:line` for every hit. Tasks 8-14 gate on it.

- [ ] **Step 1: Write the checker**

```js
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
```

- [ ] **Step 2: Run it and confirm it fails loudly**

Run: `node scripts/qa/banned-terms.mjs`
Expected: FAIL with roughly 250 hits across 24 files, including `src/i18n/locales/en/common.json`, all three `llms` files, and the blog articles.

- [ ] **Step 3: Commit**

```bash
git add scripts/qa/banned-terms.mjs
git commit -m "Add a checker for the retired positioning terms"
```

---

### Task 8: English homepage copy

**Files:**
- Modify: `src/i18n/locales/en/common.json`

**Interfaces:**
- Consumes: the checker from Task 7.
- Produces: the English anchor copy that Tasks 10 and 12 mirror natively in Arabic and Malay. Key names are unchanged - only values move.

- [ ] **Step 1: Rewrite the anchors exactly**

| Key | New value |
|---|---|
| `seo.title` | `SUBUR Honey \| Honey Blend for Married Couples in Malaysia` |
| `seo.description` | `Shop SUBUR Honey, a honey blend made for married couples across Malaysia. Raw honeycomb with saffron, ginseng, black seed, walnuts and more - all ten ingredients named on the label. All natural, vegan. Retail and wholesale across Malaysia.` |
| `hero.heading` | `Real honey. Ten real ingredients.` |
| `hero.headingAccent` | `Made for married couples.` |
| `hero.description` | `A honey blend made for married couples in Malaysia. Raw honeycomb, nuts, spices and roots - all ten named on the label.` |
| `hero.badges` | `["ALL NATURAL", "10 NAMED INGREDIENTS", "RAW HONEYCOMB", "FOR MARRIED COUPLES", "VEGAN"]` |
| `benefits.subheading` | `Ten ingredients, all named on the label: raw honeycomb, nuts, spices and roots.` |
| `footer.copyright` | `Subur Honey. Ten ingredients. All named. Nothing hidden.` |

- [ ] **Step 2: Rewrite every remaining hit in the file**

Roughly 26 hits: the three benefit-card descriptions, the ten ingredient `alt` and `description` strings, the wholesale block, seven FAQ answers, and the final CTA.

Rules for each:
- Say what the ingredient is and what it is used for, without "traditionally" or "for generations". `"Traditionally used to support digestion and warmth."` becomes `"Used to support digestion and warmth."`
- Alt text names the ingredient and its place in the blend: `"Star anise, a traditional spice used in the Subur Honey blend"` becomes `"Star anise, one of the ten ingredients in the Subur Honey blend"`.
- The FAQ answer at `faq.items[].a` that reads `"Subur is more than honey. It combines honey with traditional herbs and natural ingredients inspired by generations of Middle Eastern knowledge."` becomes `"Subur is more than honey. It is raw honeycomb blended with nine other ingredients - nuts, spices and roots - each one named on the label."`
- Plain words. No word longer than necessary, no sentence that needs re-reading.
- No production claims, no medical claims (Global Constraints).

- [ ] **Step 3: Check the file**

Run: `node scripts/qa/banned-terms.mjs`
Expected: zero hits under `src/i18n/locales/en/`. Other files still failing.

- [ ] **Step 4: Look at the page**

Load `/en` at 1440 and 390. The new hero heading is shorter than the old one - confirm it does not leave an awkward gap, and that no badge wraps mid-word.

- [ ] **Step 5: Commit**

```bash
git add src/i18n/locales/en/common.json
git commit -m "Rewrite the English homepage copy around named ingredients"
```

---

### Task 9: English pages and llms.txt

**Files:**
- Modify: `src/content/pages/en/{benefits,retail,why-us,contact}.ts`
- Modify: `src/content/llms/en.txt`
- Modify: `src/pages/llms.txt.ts:16`

**Interfaces:**
- Consumes: the English anchors from Task 8.
- Produces: nothing.

- [ ] **Step 1: Rewrite `why-us.ts`**

- `title`: `Why Choose Subur Honey | Ten Named Ingredients, Raw Honeycomb, Nothing Hidden`
- `description`: drop the Middle Eastern clause; keep ten named ingredients, raw honeycomb base, no artificial additives, made for married couples, trusted by thousands of Malaysian households.
- The comparison table row `["Recipe origin", "Traditional Middle Eastern", "Usually undisclosed"]` becomes `["Ingredient list", "All ten named on the label", "Usually an undisclosed blend"]`. Check the existing `Ingredients` row does not now say the same thing twice - if it does, merge them and leave four rows.
- The `answer` block, the callout and the five FAQ answers lose every banned term. `"a traditional daily food, not a medicine"` becomes `"an everyday food, not a medicine"` - the legal point is unchanged and must stay.

- [ ] **Step 2: Rewrite `benefits.ts`, `retail.ts`, `contact.ts`**

Same rules. `contact.ts` has two hits, both the same sentence pattern: `"Subur Honey is the traditional Middle Eastern honey blend made for married couples across Malaysia"` becomes `"Subur Honey is a honey blend made for married couples across Malaysia"`.

- [ ] **Step 3: Rewrite `src/content/llms/en.txt` and `src/pages/llms.txt.ts:16`**

`llms.txt.ts:16` currently reads `the traditional-use case for each ingredient`; make it `what each ingredient is there for`. `en.txt` has 13 hits - same treatment, and its summary line must now match `seo.description` from Task 8.

- [ ] **Step 4: Check**

Run: `node scripts/qa/banned-terms.mjs`
Expected: zero hits under `src/content/pages/en/`, `src/content/llms/en.txt`, `src/pages/llms.txt.ts`.

- [ ] **Step 5: Commit**

```bash
git add src/content/pages/en src/content/llms/en.txt src/pages/llms.txt.ts
git commit -m "Rewrite the English pages and llms.txt around named ingredients"
```

---

### Task 10: Arabic homepage and pages

**Files:**
- Modify: `src/i18n/locales/ar/common.json`
- Modify: `src/content/pages/ar/{benefits,retail,why-us,contact}.ts`
- Modify: `src/content/llms/ar.txt`

**Interfaces:**
- Consumes: the English anchors from Task 8 as the *meaning* to convey.
- Produces: nothing.

- [ ] **Step 1: Write the Arabic natively**

Same keys, same structure, 27 hits in the locale file plus the pages and `ar.txt`. Write Arabic that an Arabic speaker would write for this product - do not translate the new English sentence by sentence. The brand word stays **سُوبور** (not سُبُر). Keep the existing register: plain, factual, hedged where the English hedges.

Anchors to convey, not to copy:
- hero heading: real honey, ten real ingredients / made for married couples
- hero description: a honey blend for married couples in Malaysia; raw honeycomb, nuts, spices and roots; all ten named on the label
- badges: five short labels matching the English set
- footer copyright: ten ingredients, all named, nothing hidden

Every occurrence of `معايير مدروسة`, `الشرق الأوسط`, `تقليدي`, `عبر الأجيال` goes.

- [ ] **Step 2: Check**

Run: `node scripts/qa/banned-terms.mjs`
Expected: zero hits under any `ar` path.

- [ ] **Step 3: Look at it**

Load `/ar` at 1440 and 390. RTL must be unaffected: jar on the left, text on the right, badges wrapping cleanly, no Latin punctuation stranded at a line end.

- [ ] **Step 4: Commit**

```bash
git add src/i18n/locales/ar/common.json src/content/pages/ar src/content/llms/ar.txt
git commit -m "Rewrite the Arabic homepage, pages and llms.txt"
```

---

### Task 11: Malay homepage and pages

**Files:**
- Modify: `src/i18n/locales/ms/common.json`
- Modify: `src/content/pages/ms/{benefits,retail,why-us,contact}.ts`
- Modify: `src/content/llms/ms.txt`

**Interfaces:**
- Consumes: the English anchors from Task 8 as the *meaning* to convey.
- Produces: nothing.

- [ ] **Step 1: Write the Malay natively**

26 hits in the locale file plus the pages and `ms.txt`. Every `piawaian dikaji dengan teliti`, `Timur Tengah`, `tradisi/tradisional`, `turun-temurun` goes. Keep the existing Malaysian register - this is the home-market language and it should read like a local product page, not a translation.

- [ ] **Step 2: Check**

Run: `node scripts/qa/banned-terms.mjs`
Expected: zero hits under any `ms` path.

- [ ] **Step 3: Look at it**

Load `/ms` at 1440 and 390.

- [ ] **Step 4: Commit**

```bash
git add src/i18n/locales/ms/common.json src/content/pages/ms src/content/llms/ms.txt
git commit -m "Rewrite the Malay homepage, pages and llms.txt"
```

---

### Task 12: The nine blog articles

**Files:**
- Modify: `src/content/articles/en/{black-seed-honey-benefits,honey-for-couples-malaysia,how-to-identify-pure-honey}.ts`
- Modify: `src/content/articles/ar/{asal-al-zawjayn,habbat-al-barakah-wal-asal,kayfa-tamiz-al-asal-al-asli}.ts`
- Modify: `src/content/articles/ms/{cara-kenal-madu-asli,habbatus-sauda-dan-madu,madu-suami-isteri}.ts`

**Interfaces:**
- Consumes: the rewritten pages from Tasks 9-11 for tone.
- Produces: nothing.

- [ ] **Step 1: Rewrite in place**

Heaviest files first: the couples article (16 hits per locale) and the black-seed article (12-13).

- `title`, `description`, `keywords` and `slug` are **not** all equal here: `slug` never changes. Titles and descriptions may.
- Articles legitimately discuss how long people have eaten these foods. Keep the substance, drop the banned framing: `"Nigella sativa is genuinely well studied compared with most traditional ingredients"` becomes `"Nigella sativa has been studied more than most of the other ingredients in this blend"`.
- `"a blend like madu suami isteri is deliberately not pure honey"` and the surrounding paragraph stay - only the banned words go.
- Any sentence whose only content was heritage ("passed down through generations in Middle Eastern households") is deleted rather than reworded into a weaker version of itself.
- Article `related` links and internal `<a href>`s are unchanged.

- [ ] **Step 2: Check**

Run: `node scripts/qa/banned-terms.mjs`
Expected: the only remaining hits are `src/content/articles/types.ts` and `src/components/article/Blocks.astro` (the callout tone identifier, handled in Task 13).

- [ ] **Step 3: Read one article per locale end to end**

Load `/en/blog/black-seed-honey-benefits/`, `/ar/blog/habbat-al-barakah-wal-asal/`, `/ms/blog/madu-suami-isteri/`. Confirm no paragraph now contradicts itself or dangles a clause where a sentence was cut.

- [ ] **Step 4: Commit**

```bash
git add src/content/articles
git commit -m "Take the retired positioning terms out of the nine blog articles"
```

---

### Task 13: Rename the `tradition` callout tone

**Files:**
- Modify: `src/content/articles/types.ts:59`
- Modify: `src/components/article/Blocks.astro:14`
- Modify: `src/content/articles/en/black-seed-honey-benefits.ts:67`
- Modify: `src/content/articles/ar/habbat-al-barakah-wal-asal.ts:61`
- Modify: `src/content/articles/ms/habbatus-sauda-dan-madu.ts:67`

**Interfaces:**
- Consumes: nothing.
- Produces: `CalloutBlock["tone"]` is now `"note" | "warning" | "origin"`. No other consumer exists - these five lines are every occurrence in the repo.

- [ ] **Step 1: Rename**

In `types.ts`: `tone: "note" | "warning" | "origin";`

In `Blocks.astro`, the style map key: `origin: { border: "border-brown/20", bg: "bg-brown/[0.04]", dot: "bg-brown/60" },`

In the three articles: `tone: "origin",`

- [ ] **Step 2: Check both gates**

Run: `node scripts/qa/banned-terms.mjs`
Expected: `no banned terms in src/`

Run: `npx astro check` (or `npx tsc --noEmit` if `astro check` is not installed)
Expected: no new type errors on `CalloutBlock`.

- [ ] **Step 3: Look at it**

Load `/en/blog/black-seed-honey-benefits/` and confirm the callout still renders with its brown border and dot, not unstyled.

- [ ] **Step 4: Commit**

```bash
git add src/content/articles/types.ts src/components/article/Blocks.astro src/content/articles
git commit -m "Rename the tradition callout tone to origin"
```

---

### Task 14: Structured data and the built output

**Files:**
- Verify: `src/components/SEO.astro` (expected: no change needed)
- Verify: `dist/**`

**Interfaces:**
- Consumes: every content task.
- Produces: a clean `dist/`.

- [ ] **Step 1: Build**

Run: `npm run build`
Expected: clean, 28 pages.

- [ ] **Step 2: Check the built output, not the source**

Run: `node scripts/qa/banned-terms.mjs --dir=dist`
Expected: `no banned terms in dist/`.

If this fails while `src/` is clean, a string is being generated somewhere the source grep does not cover - most likely `SEO.astro`'s JSON-LD `@graph` or a hardcoded fallback. Fix it at the source; do not add an exception to the checker.

- [ ] **Step 3: Spot-check the three homepages**

```bash
grep -o "<title>[^<]*</title>" dist/en/index.html dist/ar/index.html dist/ms/index.html
grep -o '"description":"[^"]\{0,120\}' dist/en/index.html | head -5
```

Expected: the new title from Task 8 in English, and the Arabic and Malay equivalents from Tasks 10 and 11. The JSON-LD `Product` description must match the new positioning, not the old one.

- [ ] **Step 4: Commit anything that changed**

```bash
git add -A src
git commit -m "Align the generated metadata with the new positioning"
```

(If nothing changed, skip the commit and say so.)

---

### Task 15: Full verification pass

**Files:**
- None modified unless a failure is found.

**Interfaces:**
- Consumes: everything.
- Produces: the report handed back to the user.

- [ ] **Step 1: Run both gates from a cold build**

```bash
npm run build
node scripts/qa/banned-terms.mjs
node scripts/qa/banned-terms.mjs --dir=dist
# dev server must be running detached on 5182
node scripts/qa/image-audit.mjs
```

Expected: all four clean.

- [ ] **Step 2: Look at the site**

Screenshot and actually read: `/en`, `/ar`, `/ms` at 390x844 and 1440x900; `/en/benefits/` and `/ar/benefits/` at 390 and 1440; `/en/blog/` at 390 and 1440; `/en/why-us/` at 1440.

Check specifically:
- the jar is whole in every hero
- nothing is sliced by the navbar
- the new headings do not overflow or leave a hole where longer copy used to sit
- Arabic still mirrors correctly

- [ ] **Step 3: Report honestly**

State what was verified and how, and name anything left undone. Known items expected to remain open, and which must be reported rather than quietly fixed:
- the jar label artwork still carries its printed seal
- `robots.txt` / `sitemap.xml` still describe the old single-locale site
- Arabic and Malay copy has still never been reviewed by a native speaker

- [ ] **Step 4: Final commit if anything moved**

```bash
git status --short
```
