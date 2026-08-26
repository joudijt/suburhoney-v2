/**
 * Article lead figures, cut from the site's own photography.
 *
 * Standing ruling (2026-08-26): article images are REUSED from the project's own
 * photo library, never generated. Rounds 1-4 shipped generated frames; this
 * script replaces every one of them with a real cut of a photograph that is
 * already on this site.
 *
 * The library is small - ten distinct photographs - and there are 54 figure
 * keys, so each photograph carries two or three articles under a different crop
 * window. That reuse is the honest consequence of the ruling and is recorded in
 * docs/press/images/INVENTORY.md rather than hidden.
 *
 * Every window below is expressed in SOURCE PIXELS and is a 4:3 cut, because the
 * blog card band is a fixed `aspect-[4/3]` with `object-cover`: a figure at any
 * other ratio is silently cropped there, and scripts/qa/image-audit.mjs fails a
 * content image that renders at a ratio other than its own.
 *
 * ⛔ Nothing is upscaled. The output is exactly the window size, and
 *    articleFigures.ts declares that same number.
 *
 *   node scripts/make-article-crops.mjs && npm run optimize:images
 */
import sharp from "sharp";
import { join } from "node:path";

const DIR = "assets-src/images";

/**
 * A window is [left, top, width, height] in source pixels, width:height = 4:3.
 * Anchors were read off the photographs themselves, not guessed from filenames.
 *
 * `label` records what is actually in the frame - it becomes the alt text and is
 * the only thing that stops an article claiming a picture it does not have.
 */
const FRAMES = [
  // --- article-pure-honey.png (1536x1152) — no branding anywhere in frame.
  {
    out: "figure-honey-dipper",
    src: "article-pure-honey.png",
    box: [0, 0, 1536, 1152],
    label: "A wooden dipper lifting honey over an open glass jar, with honeycomb behind it.",
  },
  {
    out: "figure-honey-in-glass",
    src: "article-pure-honey.png",
    box: [0, 160, 940, 705],
    label: "An open glass jar filled with clear golden honey, a dipper resting in it.",
  },

  // --- article-black-seed.png (800x600) — no branding.
  {
    out: "figure-black-seed",
    src: "article-black-seed.png",
    box: [0, 0, 800, 600],
    label: "Black seeds in a wooden scoop beside a small corked bottle of dark oil.",
  },

  // --- page-benefits.png (1536x1024) — man with the SUBUR jar, tea and comb.
  {
    out: "figure-spoonful",
    src: "page-benefits.png",
    box: [0, 200, 952, 714],
    label: "A man lifting a wooden spoon of honey above an open jar of SUBUR honey.",
  },
  {
    out: "figure-tea-and-comb",
    src: "page-benefits.png",
    box: [0, 448, 768, 576],
    label: "A glass cup of tea beside a slab of honeycomb on a wooden board.",
  },

  // --- page-retail.png (1536x864) — the jar alone on a cream ground.
  {
    out: "figure-jar-alone",
    src: "page-retail.png",
    box: [192, 0, 1152, 864],
    label: "A jar of SUBUR honey standing alone against a plain cream background.",
  },

  // --- page-why-us.png (1536x864) — the jar ringed by its ten ingredients.
  {
    out: "figure-jar-and-ingredients",
    src: "page-why-us.png",
    box: [192, 0, 1152, 864],
    label: "A jar of SUBUR honey surrounded by its ingredients: star anise, saffron, ginger, walnut, almond, honeycomb and black seed.",
  },
  {
    out: "figure-ingredients-left",
    src: "page-why-us.png",
    box: [0, 0, 1152, 864],
    label: "Star anise, saffron threads, ginger and coffee beans arranged around a jar of honey.",
  },

  // --- ritual-bg-latin.png (1536x1024) — couple at a table with the jar.
  {
    out: "figure-couple-at-table",
    src: "ritual-bg-latin.png",
    box: [30, 0, 1365, 1024],
    label: "A couple sharing honey from a jar at a table set with tea, nuts and honeycomb.",
  },
  {
    out: "figure-board-and-nuts",
    src: "ritual-bg-latin.png",
    box: [420, 559, 620, 465],
    label: "Two glass bowls of nuts and a honey dipper on a wooden board, with a hand lifting a wooden spoon above them.",
  },

  // --- ritual-bg-ar.png (1536x1024) — the mirrored composition.
  {
    out: "figure-couple-sharing",
    src: "ritual-bg-ar.png",
    box: [171, 0, 1365, 1024],
    label: "A couple at a table, each holding a wooden spoon beside an open jar of honey.",
  },
  {
    out: "figure-table-setting",
    src: "ritual-bg-ar.png",
    box: [430, 256, 1024, 768],
    label: "A table set with a jar of honey, a bowl of nuts, a dish of honey and a cup of tea.",
  },

  // --- hero-bg-latin.png (1983x793) — the widest frame in the library.
  {
    out: "figure-jar-and-comb",
    src: "hero-bg-latin.png",
    box: [900, 0, 1057, 793],
    label: "A jar of SUBUR honey beside honeycomb and almonds, with honey drizzling from a dipper.",
  },
  {
    out: "figure-blossom-and-light",
    src: "hero-bg-latin.png",
    box: [0, 0, 1057, 793],
    label: "Chamomile and lavender lying in warm light on a honey-coloured surface.",
  },

  // --- hero-bg-ar.png (1264x843).
  {
    out: "figure-jar-and-botanicals",
    src: "hero-bg-ar.png",
    box: [0, 0, 1124, 843],
    label: "A jar of SUBUR honey with honeycomb, walnuts and ginger around its base.",
  },
  {
    out: "figure-lavender-and-ginger",
    src: "hero-bg-ar.png",
    box: [564, 200, 700, 525],
    label: "Lavender, chamomile and sliced ginger on a warm cream surface.",
  },
  {
    out: "figure-jar-and-walnuts",
    src: "hero-bg-ar.png",
    box: [0, 243, 800, 600],
    // Named for what the window actually caught. The first pass called it
    // "comb-and-walnuts" and the frame came back centred on the jar - the alt
    // would have described a photograph that does not exist.
    label: "A jar of SUBUR honey with honeycomb, walnuts and almonds at its base and honey pouring in.",
  },
  {
    out: "figure-spoon-close",
    src: "page-benefits-square.png",
    box: [0, 256, 1024, 768],
    label: "A wooden spoon of honey held over an open jar, close in.",
  },
];

const seen = new Set();
for (const f of FRAMES) {
  const [left, top, width, height] = f.box;
  const ratio = width / height;
  if (Math.abs(ratio - 4 / 3) > 0.005) {
    throw new Error(`${f.out}: window is ${width}x${height} (${ratio.toFixed(3)}), not 4:3`);
  }
  if (seen.has(f.out)) throw new Error(`${f.out}: duplicate output name`);
  seen.add(f.out);

  const src = join(DIR, f.src);
  const meta = await sharp(src).metadata();
  if (left + width > meta.width || top + height > meta.height) {
    throw new Error(
      `${f.out}: window ${left},${top} ${width}x${height} falls outside ${f.src} (${meta.width}x${meta.height})`,
    );
  }
  await sharp(src)
    .extract({ left, top, width, height })
    .png()
    .toFile(join(DIR, `${f.out}.png`));
  console.log(`${f.out.padEnd(30)} ${width}x${height}  <- ${f.src}`);
}
console.log(`\n${FRAMES.length} frames written to ${DIR}. Now run: npm run optimize:images`);
