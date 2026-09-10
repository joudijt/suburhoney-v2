import type { PageFigure } from "./pageFigures";

/**
 * Lead images rendered under the H1 on blog articles.
 *
 * Keyed by the article's **English slug** (or its own slug for single-language
 * articles), which is what `ARTICLE_GROUPS` in content/articles/index.ts uses to
 * tie the three locales of one article together. Blog slugs are deliberately
 * localized, so they cannot be the key the way page slugs are in
 * `PAGE_FIGURES` - resolve a locale slug through `getCanonicalSlug()` first.
 *
 * ⛔ GENERATED FILE. Written by scripts/assign-article-figures.mjs from the crop
 *    table in scripts/make-article-crops.mjs. Edit those, not this.
 *
 * Every frame here is a real cut of a photograph that is already on this site -
 * the standing ruling of 2026-08-26 is reuse only, never generate. The library
 * is eighteen frames from ten photographs against forty-eight article groups, so
 * a photograph carries two or three articles under different crop windows; the
 * repeats are listed at the end of this file.
 *
 * The declared width/height is the file's real size. Nothing is upscaled, and
 * every frame is 4:3 because the blog card band is a fixed `aspect-[4/3]` with
 * `object-cover` and scripts/qa/image-audit.mjs fails a content image that
 * renders at a ratio other than its own.
 */
export const ARTICLE_FIGURES: Record<string, PageFigure> = {
  "royal-honey-in-malaysia-explained": {
    src: "/images/figure-honey-in-glass.webp",
    width: 940,
    height: 705,
  },
  "is-royal-honey-safe": {
    src: "/images/article-pure-honey.webp",
    width: 1536,
    height: 1152,
  },
  "royal-honey-vs-madu-biasa": {
    src: "/images/figure-blossom-and-light.webp",
    width: 1057,
    height: 793,
  },
  "dakwaan-tenaga-batin-pada-produk": {
    src: "/images/figure-lavender-and-ginger.webp",
    width: 700,
    height: 525,
  },
  "cara-semak-produk-berdaftar-kkm": {
    src: "/images/figure-honey-dipper.webp",
    width: 1536,
    height: 1152,
  },
  "kandungan-produk-tenaga-batin": {
    src: "/images/article-black-seed.webp",
    width: 800,
    height: 600,
  },
  "how-is-honeycomb-made": {
    src: "/images/figure-jar-and-comb.webp",
    width: 1057,
    height: 793,
  },
  "honeycomb-vs-beeswax-and-other-bee-products": {
    src: "/images/figure-tea-and-comb.webp",
    width: 768,
    height: 576,
  },
  "how-to-serve-honeycomb": {
    src: "/images/figure-spoon-close.webp",
    width: 1024,
    height: 768,
  },
  "buying-honey-in-malaysia-guide": {
    src: "/images/figure-jar-and-ingredients.webp",
    width: 1152,
    height: 864,
  },
  "honey-brands-in-malaysia": {
    src: "/images/figure-jar-and-botanicals.webp",
    width: 1124,
    height: 843,
  },
  "what-is-a-honey-blend": {
    src: "/images/figure-jar-and-walnuts.webp",
    width: 800,
    height: 600,
  },
  "apa-itu-madu-asli": {
    src: "/images/figure-honey-in-glass.webp",
    width: 940,
    height: 705,
  },
  "madu-asli-import-atau-tempatan": {
    src: "/images/figure-table-setting.webp",
    width: 1024,
    height: 768,
  },
  "madu-kampung-vs-madu-berjenama": {
    src: "/images/figure-jar-alone.webp",
    width: 1152,
    height: 864,
  },
  "honey-vitamins-and-minerals": {
    src: "/images/figure-ingredients-left.webp",
    width: 1152,
    height: 864,
  },
  "is-honey-halal": {
    src: "/images/figure-jar-and-botanicals.webp",
    width: 1124,
    height: 843,
  },
  "honey-before-and-after-exercise": {
    src: "/images/figure-lavender-and-ginger.webp",
    width: 700,
    height: 525,
  },
  "bulk-honey-gifts-for-events": {
    src: "/images/figure-couple-at-table.webp",
    width: 1365,
    height: 1024,
  },
  "how-much-honey-for-a-toddler": {
    src: "/images/figure-jar-and-walnuts.webp",
    width: 800,
    height: 600,
  },
  "is-honey-bad-for-your-teeth": {
    src: "/images/figure-couple-sharing.webp",
    width: 1365,
    height: 1024,
  },
  "honey-and-diabetes": {
    src: "/images/figure-honey-in-glass.webp",
    width: 940,
    height: 705,
  },
  "honey-for-cough-and-cold": {
    src: "/images/figure-honey-dipper.webp",
    width: 1536,
    height: 1152,
  },
  "honey-calories-and-sugar-content": {
    src: "/images/figure-spoon-close.webp",
    width: 1024,
    height: 768,
  },
  "honey-vs-sugar-which-is-healthier": {
    src: "/images/figure-board-and-nuts.webp",
    width: 620,
    height: 465,
  },
  "how-much-honey-is-safe-per-day": {
    src: "/images/figure-blossom-and-light.webp",
    width: 1057,
    height: 793,
  },
  "honey-during-ramadan-suhoor": {
    src: "/images/figure-table-setting.webp",
    width: 1024,
    height: 768,
  },
  "honey-for-couples-malaysia": {
    src: "/images/article-couples.webp",
    width: 1252,
    height: 939,
  },
  "black-seed-honey-benefits": {
    src: "/images/article-black-seed.webp",
    width: 800,
    height: 600,
  },
  "how-to-identify-pure-honey": {
    src: "/images/article-pure-honey.webp",
    width: 1536,
    height: 1152,
  },
  "honeycomb-honey-malaysia": {
    src: "/images/figure-jar-and-comb.webp",
    width: 1057,
    height: 793,
  },
  "can-you-eat-honeycomb-wax": {
    src: "/images/figure-tea-and-comb.webp",
    width: 768,
    height: 576,
  },
  "limatha-yatfu-al-shama-fawq-al-asal": {
    src: "/images/figure-jar-and-comb.webp",
    width: 1057,
    height: 793,
  },
  "where-to-buy-raw-honey-kuala-lumpur": {
    src: "/images/figure-jar-alone.webp",
    width: 1152,
    height: 864,
  },
  "beli-madu-online-atau-kedai-fizikal": {
    src: "/images/figure-jar-alone.webp",
    width: 1152,
    height: 864,
  },
  "shiraa-al-asal-online-fi-malizia": {
    src: "/images/figure-jar-and-walnuts.webp",
    width: 800,
    height: 600,
  },
  "how-to-read-a-honey-label-malaysia": {
    src: "/images/figure-ingredients-left.webp",
    width: 1152,
    height: 864,
  },
  "mukawwinat-khaltat-al-asal-bil-aashab": {
    src: "/images/figure-jar-and-ingredients.webp",
    width: 1152,
    height: 864,
  },
  "logo-autentik-kkm-madu": {
    src: "/images/figure-jar-and-comb.webp",
    width: 1057,
    height: 793,
  },
  "al-asal-al-udwi-fi-malizia": {
    src: "/images/figure-blossom-and-light.webp",
    width: 1057,
    height: 793,
  },
  "kelulut-honey-standard-malaysia": {
    src: "/images/figure-honey-dipper.webp",
    width: 1536,
    height: 1152,
  },
  "al-farq-bayn-al-asal-al-kham-wal-musaffa": {
    src: "/images/figure-honey-in-glass.webp",
    width: 940,
    height: 705,
  },
  "what-does-raw-honey-mean": {
    src: "/images/figure-honey-in-glass.webp",
    width: 940,
    height: 705,
  },
  "is-malaysian-honey-local-or-imported": {
    src: "/images/figure-blossom-and-light.webp",
    width: 1057,
    height: 793,
  },
  "what-is-arabic-honey": {
    src: "/images/figure-jar-and-botanicals.webp",
    width: 1124,
    height: 843,
  },
  "madu-khalta": {
    src: "/images/figure-jar-and-ingredients.webp",
    width: 1152,
    height: 864,
  },
  "beza-madu-tulen-dan-madu-campuran": {
    src: "/images/figure-jar-and-ingredients.webp",
    width: 1152,
    height: 864,
  },
  "types-of-honey-in-malaysia": {
    src: "/images/figure-jar-and-ingredients.webp",
    width: 1152,
    height: 864,
  },
  "manuka-honey-vs-local-honey": {
    src: "/images/figure-honey-dipper.webp",
    width: 1536,
    height: 1152,
  },
  "what-is-sidr-honey": {
    src: "/images/figure-table-setting.webp",
    width: 1024,
    height: 768,
  },
  "madu-kelulut-vs-madu-tualang": {
    src: "/images/figure-blossom-and-light.webp",
    width: 1057,
    height: 793,
  },
  "honey-vs-gula-melaka": {
    src: "/images/figure-spoonful.webp",
    width: 952,
    height: 714,
  },
  "is-honey-in-malaysia-fake": {
    src: "/images/figure-jar-and-walnuts.webp",
    width: 800,
    height: 600,
  },
  "why-is-honey-dark-or-light": {
    src: "/images/figure-honey-in-glass.webp",
    width: 940,
    height: 705,
  },
  "madu-berbuih": {
    src: "/images/figure-honey-dipper.webp",
    width: 1536,
    height: 1152,
  },
  "madu-berasing-dua-lapisan": {
    src: "/images/figure-honey-in-glass.webp",
    width: 940,
    height: 705,
  },
  "madu-beku-dalam-peti-sejuk": {
    src: "/images/figure-table-setting.webp",
    width: 1024,
    height: 768,
  },
  "how-to-store-honey-malaysia": {
    src: "/images/figure-jar-alone.webp",
    width: 1152,
    height: 864,
  },
  "tarikh-luput-madu": {
    src: "/images/figure-jar-alone.webp",
    width: 1152,
    height: 864,
  },
  "hal-lil-asal-tarikh-salahiya": {
    src: "/images/figure-jar-alone.webp",
    width: 1152,
    height: 864,
  },
  "madu-saffron": {
    src: "/images/figure-ingredients-left.webp",
    width: 1152,
    height: 864,
  },
  "asal-bil-zafaran": {
    src: "/images/figure-ingredients-left.webp",
    width: 1152,
    height: 864,
  },
  "honey-with-nuts-malaysia": {
    src: "/images/figure-board-and-nuts.webp",
    width: 620,
    height: 465,
  },
  "tariqat-amal-asal-bil-mukassarat": {
    src: "/images/figure-board-and-nuts.webp",
    width: 620,
    height: 465,
  },
  "honey-in-hot-drinks-malaysia": {
    src: "/images/figure-tea-and-comb.webp",
    width: 768,
    height: 576,
  },
  "madu-campur-air-panas": {
    src: "/images/figure-tea-and-comb.webp",
    width: 768,
    height: 576,
  },
  "al-ma-al-sakhin-wal-asal": {
    src: "/images/figure-tea-and-comb.webp",
    width: 768,
    height: 576,
  },
  "baking-with-honey-malaysia": {
    src: "/images/figure-spoon-close.webp",
    width: 1024,
    height: 768,
  },
  "madu-untuk-masakan": {
    src: "/images/figure-spoonful.webp",
    width: 952,
    height: 714,
  },
  "resepi-sarapan-guna-madu": {
    src: "/images/figure-spoon-close.webp",
    width: 1024,
    height: 768,
  },
  "waktu-terbaik-makan-madu": {
    src: "/images/figure-spoonful.webp",
    width: 952,
    height: 714,
  },
  "honeycomb-hantaran-gift-idea": {
    src: "/images/figure-couple-at-table.webp",
    width: 1365,
    height: 1024,
  },
  "doorgift-madu-kahwin": {
    src: "/images/figure-couple-at-table.webp",
    width: 1365,
    height: 1024,
  },
  "hadiah-madu-untuk-raya": {
    src: "/images/figure-couple-sharing.webp",
    width: 1365,
    height: 1024,
  },
  "hadiyat-al-asal-lil-eid": {
    src: "/images/figure-couple-sharing.webp",
    width: 1365,
    height: 1024,
  },
  "hadiya-min-malizia-lil-ahl": {
    src: "/images/figure-table-setting.webp",
    width: 1024,
    height: 768,
  },
  "is-honey-safe-during-pregnancy": {
    src: "/images/figure-lavender-and-ginger.webp",
    width: 700,
    height: 525,
  },
  "can-babies-have-honey": {
    src: "/images/figure-honey-dipper.webp",
    width: 1536,
    height: 1152,
  },
  "hal-al-asal-masmuh-lil-atfal-aqal-min-sana": {
    src: "/images/figure-honey-dipper.webp",
    width: 1536,
    height: 1152,
  },
  "honey-allergy-symptoms": {
    src: "/images/figure-board-and-nuts.webp",
    width: 620,
    height: 465,
  },
  "is-honey-vegan": {
    src: "/images/figure-blossom-and-light.webp",
    width: 1057,
    height: 793,
  },
  "bringing-honey-on-a-plane-malaysia": {
    src: "/images/figure-jar-alone.webp",
    width: 1152,
    height: 864,
  },
  "naql-al-asal-fi-al-taira": {
    src: "/images/figure-jar-alone.webp",
    width: 1152,
    height: 864,
  },
  "idkhal-al-asal-ila-malizia": {
    src: "/images/figure-jar-and-botanicals.webp",
    width: 1124,
    height: 843,
  },
};
