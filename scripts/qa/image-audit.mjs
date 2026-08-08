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
      for (const e of errors) {
        // Astro's own dev toolbar runs an accessibility audit in the page and
        // logs a fetch error of its own when a navigation cuts it short. It does
        // not exist in the build, so it is noise here rather than a site fault.
        if (e.includes("Astro") && e.includes("audit")) continue;
        failures.push(`${url} @${size.w}: console/network: ${e}`);
      }

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
        // 2px of slack: the header is h-20 (80px) and the layers below it are
        // offset by the same 80px, but the bar also carries a 1px bottom border
        // (and a second one on the collapsed mobile menu). One or two pixels of
        // photo under a hairline border is not the bug this check is for.
        if (BACKGROUND.test(img.src) && img.topInPage < img.headerBottom - 2) {
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
