/**
 * Screenshots of the blog index and a spread of articles, so the lead figures
 * get looked at by a person before they ship.
 *
 * The image audit proves a figure loaded and renders at its own ratio. It cannot
 * see that a crop is empty, that a subject was cropped away, or that a product
 * label became legible at the rendered width - and each of those has shipped on
 * this kind of round before.
 *
 *   npm run dev -- --port 5182
 *   node scripts/qa/shoot-figures.mjs
 */
import { chromium } from "playwright";
import { mkdirSync } from "node:fs";

const BASE = process.argv.find((a) => a.startsWith("--base="))?.split("=")[1] ?? "http://localhost:5182";
const OUT = "qa/figures";
mkdirSync(OUT, { recursive: true });

const SHOTS = [
  ["blog-en", "/en/blog/"],
  ["blog-ms", "/ms/blog/"],
  ["blog-ar", "/ar/blog/"],
  ["en-kelulut", "/en/blog/kelulut-honey-standard-malaysia/"],
  ["en-babies", "/en/blog/can-babies-have-honey/"],
  ["en-nuts", "/en/blog/honey-with-nuts-malaysia/"],
  ["en-sidr", "/en/blog/what-is-sidr-honey/"],
  ["ar-hadiya", "/ar/blog/hadiya-min-malizia-lil-ahl/"],
  ["ms-doorgift", "/ms/blog/doorgift-madu-kahwin/"],
];

const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 1280, height: 1000 } });
for (const [name, path] of SHOTS) {
  await page.goto(BASE + path, { waitUntil: "networkidle", timeout: 60000 });
  // Lazy images are IntersectionObserver-driven; scroll them in, then wait on
  // the decode rather than on a fixed delay.
  await page.evaluate(async () => {
    const step = window.innerHeight * 0.8;
    for (let y = 0; y < document.body.scrollHeight; y += step) {
      window.scrollTo(0, y);
      await new Promise((r) => setTimeout(r, 120));
    }
    window.scrollTo(0, 0);
  });
  await page
    .waitForFunction(() => [...document.images].every((i) => i.complete && i.naturalWidth > 0), null, {
      timeout: 30000,
    })
    .catch(() => console.warn(`  ! ${name}: an image never decoded`));
  // The reveal animation leaves everything at opacity 0 until it is scrolled
  // past, and scrolling back to the top does not re-run it - the first pass
  // shot nine blank cream pages. Force the end state before the shutter.
  await page.addStyleTag({
    content: "[data-reveal]{opacity:1 !important;transform:none !important;visibility:visible !important}",
  });
  await page.waitForTimeout(250);
  await page.screenshot({ path: `${OUT}/${name}.png`, fullPage: name.startsWith("blog-") });
  console.log(`${name.padEnd(14)} ${path}`);
}
await browser.close();
console.log(`-> ${OUT}`);
