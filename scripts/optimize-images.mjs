/**
 * Generates the shipping image set in public/ from the originals in assets-src/.
 *
 * Originals live outside public/ on purpose: only the optimized output should be
 * published, and the raw PNGs are far too heavy to serve directly (the hero jar
 * alone was 513 KB as a 24-bit PNG).
 *
 * Every target is sized at 2x its largest on-screen size so it stays sharp on
 * retina without paying for pixels nobody sees. Sources are never upscaled.
 *
 * Run via `npm run optimize:images`; `npm run build` runs it first.
 */
import { mkdir, readdir, stat } from "node:fs/promises";
import { dirname, join } from "node:path";
import sharp from "sharp";

const SRC = "assets-src";
const OUT = "public";

const WEBP = { quality: 82, effort: 6 };

/**
 * width/height are the *output* cap in pixels, already doubled for retina.
 * `alsoPng` keeps a PNG next to the WebP for consumers that cannot read WebP —
 * currently only the Open Graph / schema.org image, which social crawlers fetch.
 */
const TARGETS = [
  // Hero jars. Displayed at most 294px wide (w-[64%] of a max-w-[460px] stage),
  // so 2x would be 588 — but the source is only 400px, and we never upscale.
  { src: "jar.png", width: 400, height: 639 },
  { src: "jarncap.png", width: 400, height: 639, alsoPng: true },

  // Header logo: h-9/h-10 => 40px tall at most.
  { src: "logo-8.png", height: 80 },

  // Store modal sticker: md:h-40 => 160px tall.
  { src: "images/honey-sticker.png", height: 320 },

  // Answer-box corner sticker: ~72px tall on the card.
  { src: "images/honey-jar-sticker.png", height: 144 },

  // Cursor bee: 34px wide as a cursor, 18px inside the Benefits SVG flight path.
  { src: "images/bee-cursor.png", width: 96 },

  // Hero background: full-bleed, object-cover, lazy. Per-locale photo -
  // mirrored compositions, jar on opposite sides to sit clear of the text.
  { src: "images/hero-bg-ar.png", width: 1536, quality: 78 },
  { src: "images/hero-bg-latin.png", width: 1536, quality: 78 },

  // Ritual background: full-bleed, object-cover, lazy. Per-locale photo, same
  // mirrored-pair convention as the hero above - the couple always sits on the
  // reading-start side so the text box can take the empty half opposite them.
  { src: "images/ritual-bg-ar.png", width: 1536, quality: 78 },
  { src: "images/ritual-bg-latin.png", width: 1536, quality: 78 },

  // Lead images above the content blocks on benefits / retail / why-us. Shown
  // at most 768px wide (the max-w-3xl reading column), so 1536 is the 2x cap.
  // page-benefits is a photo; the other two are product still-lifes composed
  // from jarncap + the real ingredient icons - locale-independent, one each.
  { src: "images/page-benefits.png", width: 1536, quality: 78 },
  { src: "images/page-retail.png", width: 1536, quality: 82 },
  { src: "images/page-why-us.png", width: 1536, quality: 82 },
];

// Ingredient icons: 80px in the hero (md:h-20), ~51px in the honeycomb, and
// 112px in the detail panel (h-28) — the panel is the biggest, so 2x = 224.
for (let i = 1; i <= 10; i++) {
  const n = String(i).padStart(2, "0");
  TARGETS.push({ src: `icons/ingrediant_${n}.png`, width: 224, height: 224 });
}

const kb = (n) => (n / 1024).toFixed(1).padStart(8);

let totalIn = 0;
let totalOut = 0;

for (const t of TARGETS) {
  const srcPath = join(SRC, t.src);
  const outWebp = join(OUT, t.src.replace(/\.(png|jpe?g)$/i, ".webp"));
  await mkdir(dirname(outWebp), { recursive: true });

  const before = (await stat(srcPath)).size;
  const img = sharp(srcPath);
  const meta = await img.metadata();

  // withoutEnlargement keeps small sources at their native size.
  const resized = img.resize({
    width: t.width,
    height: t.height,
    fit: "inside",
    withoutEnlargement: true,
  });

  const info = await resized
    .clone()
    .webp({ ...WEBP, quality: t.quality ?? WEBP.quality })
    .toFile(outWebp);

  totalIn += before;
  totalOut += info.size;

  console.log(
    `${kb(before)} KB -> ${kb(info.size)} KB  ${String(Math.round((1 - info.size / before) * 100)).padStart(3)}%  ` +
      `${meta.width}x${meta.height} -> ${info.width}x${info.height}  ${outWebp}`
  );

  if (t.alsoPng) {
    const outPng = join(OUT, t.src);
    const pngInfo = await resized
      .clone()
      .png({ compressionLevel: 9, palette: true, quality: 90 })
      .toFile(outPng);
    totalOut += pngInfo.size;
    console.log(`${" ".repeat(11)}   ${kb(pngInfo.size)} KB          (OG/schema fallback)  ${outPng}`);
  }
}

// Anything left in assets-src that no target covers is dead weight — surface it
// rather than letting it rot unnoticed.
const covered = new Set(TARGETS.map((t) => t.src.replace(/\\/g, "/")));
async function* walk(dir, prefix = "") {
  for (const entry of await readdir(dir, { withFileTypes: true })) {
    const rel = prefix ? `${prefix}/${entry.name}` : entry.name;
    if (entry.isDirectory()) yield* walk(join(dir, entry.name), rel);
    else yield rel;
  }
}
const orphans = [];
for await (const rel of walk(SRC)) if (!covered.has(rel)) orphans.push(rel);
if (orphans.length) console.log(`\nWARNING: ${orphans.length} source(s) with no target:`, orphans.join(", "));

console.log(
  `\n${TARGETS.length} images: ${(totalIn / 1024 / 1024).toFixed(2)} MB -> ` +
    `${(totalOut / 1024 / 1024).toFixed(2)} MB (${Math.round((1 - totalOut / totalIn) * 100)}% smaller)`
);
