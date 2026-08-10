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
  // `mid` covers 1024-1279, where the section is only about 720-780px tall under
  // the header and a 16:9 cut would crop a fifth of the frame away.
  { src: "hero-bg-latin.png", suffix: "mid", ratio: 1.4, anchor: 0.72 },
  { src: "hero-bg-ar.png", suffix: "mid", ratio: 1.4, anchor: 0.4 },
  { src: "hero-bg-latin.png", suffix: "wide", ratio: 16 / 9, anchor: 0.68 },
  { src: "hero-bg-latin.png", suffix: "tall", ratio: 4 / 5, anchor: 0.78 },
  { src: "hero-bg-latin.png", suffix: "portrait", ratio: 1 / 2, anchor: 0.71 },
  { src: "hero-bg-ar.png", suffix: "wide", ratio: 16 / 9, anchor: 0.38 },
  { src: "hero-bg-ar.png", suffix: "tall", ratio: 4 / 5, anchor: 0.34 },
  { src: "hero-bg-ar.png", suffix: "portrait", ratio: 1 / 2, anchor: 0.27 },

  // Ritual background, shown only from xl up (below that the same photo is a
  // card above the text, at its own 3:2). A 16:9 cut of a 3:2 source keeps the
  // full width - it only trims 80px off the top and bottom - so the couple, the
  // jar and the empty half the text box sits on all survive, and the residual
  // object-cover crop at 1440 drops from 17% to about 6%.
  { src: "ritual-bg-latin.png", suffix: "wide", ratio: 16 / 9, anchor: 0.5 },
  { src: "ritual-bg-ar.png", suffix: "wide", ratio: 16 / 9, anchor: 0.5 },

  // Benefits lead photo. The half the desktop overlay text fills is empty cream
  // in the source, so below lg it reads as a blank panel. A real square cut
  // framed on the man and the jar replaces the CSS crop that used to do this.
  { src: "page-benefits.png", suffix: "square", ratio: 1, anchor: 0.34 },
];

for (const crop of CROPS) {
  const srcPath = join(DIR, crop.src);
  const meta = await sharp(srcPath).metadata();

  // Largest window of the requested ratio that fits inside the source.
  let width = Math.min(meta.width, Math.round(meta.height * crop.ratio));
  let height = Math.min(meta.height, Math.round(width / crop.ratio));
  width = Math.min(meta.width, Math.round(height * crop.ratio));

  const left = Math.max(0, Math.min(meta.width - width, Math.round(meta.width * crop.anchor - width / 2)));
  const top = Math.max(0, Math.round((meta.height - height) / 2));

  const out = join(DIR, crop.src.replace(/\.png$/, `-${crop.suffix}.png`));
  await sharp(srcPath).extract({ left, top, width, height }).toFile(out);
  console.log(`${crop.src} ${meta.width}x${meta.height} -> ${width}x${height} @${left},${top}  ${out}`);
}
