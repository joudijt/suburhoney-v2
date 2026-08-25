import type { PageFigure } from "./pageFigures";

/**
 * Lead images rendered under the H1 on blog articles.
 *
 * Keyed by the article's **English slug**, which is what `ARTICLE_GROUPS` in
 * content/articles/index.ts uses to tie the three locales of one article
 * together. Blog slugs are deliberately localized, so they cannot be the key the
 * way page slugs are in `PAGE_FIGURES` - resolve a locale slug through
 * `getCanonicalSlug()` first.
 *
 * Same reasoning as pageFigures: one file serves all three languages, so only
 * the translated alt text lives with the copy (`figureAlt` on Article) and the
 * geometry lives here once instead of nine times.
 *
 * All three are supplied photographs, cropped to a shared 4:3 in assets-src.
 */
export const ARTICLE_FIGURES: Record<string, PageFigure> = {
  // All three are 4:3 so every article renders one identical frame. The pixel
  // sizes differ because the two photographs are only as large as their sources
  // and the pipeline never upscales - the rendered box is the same either way.
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

  // Round 1 (2026-08-20). All 1200x900 - the blog card frame is a fixed 4:3 and
  // scripts/qa/image-audit.mjs fails any content image rendered at a ratio other
  // than its own, so the generator's output is cover-cropped to 4:3 rather than
  // letterboxed. Grouped articles share one file, keyed by the group's English
  // slug; single-language articles are keyed by their own slug. Both resolve
  // through getAssetKey().
  "honeycomb-honey-malaysia": {
    src: "/images/article-honeycomb-honey-malaysia.webp",
    width: 1200,
    height: 900,
  },
  "can-you-eat-honeycomb-wax": {
    src: "/images/article-can-you-eat-honeycomb-wax.webp",
    width: 1200,
    height: 900,
  },
  "where-to-buy-raw-honey-kuala-lumpur": {
    src: "/images/article-where-to-buy-raw-honey-kuala-lumpur.webp",
    width: 1200,
    height: 900,
  },
  "types-of-honey-in-malaysia": {
    src: "/images/article-types-of-honey-in-malaysia.webp",
    width: 1200,
    height: 900,
  },
  "how-to-store-honey-malaysia": {
    src: "/images/article-how-to-store-honey-malaysia.webp",
    width: 1200,
    height: 900,
  },
  "manuka-honey-vs-local-honey": {
    src: "/images/article-manuka-honey-vs-local-honey.webp",
    width: 1200,
    height: 900,
  },
  "is-malaysian-honey-local-or-imported": {
    src: "/images/article-is-malaysian-honey-local-or-imported.webp",
    width: 1200,
    height: 900,
  },
  "madu-beku-dalam-peti-sejuk": {
    src: "/images/article-madu-beku-dalam-peti-sejuk.webp",
    width: 1200,
    height: 900,
  },
  "beza-madu-tulen-dan-madu-campuran": {
    src: "/images/article-beza-madu-tulen-dan-madu-campuran.webp",
    width: 1200,
    height: 900,
  },
  "madu-berbuih": {
    src: "/images/article-madu-berbuih.webp",
    width: 1200,
    height: 900,
  },
  "waktu-terbaik-makan-madu": {
    src: "/images/article-waktu-terbaik-makan-madu.webp",
    width: 1200,
    height: 900,
  },
  "madu-campur-air-panas": {
    src: "/images/article-madu-campur-air-panas.webp",
    width: 1200,
    height: 900,
  },
  // Same picture, second key. The Malay and Arabic hot-water articles are one
  // group, but the group has no English member, so getAssetKey() cannot resolve
  // either of them to a shared canonical slug and each falls back to its own.
  // Filing the file under both keys is the honest fix; inventing an English slug
  // for a page that does not exist in English would not be.
  "al-ma-al-sakhin-wal-asal": {
    src: "/images/article-madu-campur-air-panas.webp",
    width: 1200,
    height: 900,
  },
  "hal-lil-asal-tarikh-salahiya": {
    src: "/images/article-hal-lil-asal-tarikh-salahiya.webp",
    width: 1200,
    height: 900,
  },
  "asal-bil-zafaran": {
    src: "/images/article-asal-bil-zafaran.webp",
    width: 1200,
    height: 900,
  },

  // Round 2 (2026-08-25). All 886x665 (4:3) - pollinations' anonymous tier
  // clamped resolution below the 1200x900 requested this round (zimage was
  // dead, so every image fell through to pollinations); declaring the real
  // pixel size here rather than the requested one, per the site's own rule
  // that a hardcoded dimension must match the file, not the request. The two
  // Manuka articles (ms, ar) are members of G6 in ARTICLE_GROUPS, whose
  // canonical English slug is "manuka-honey-vs-local-honey" above - they
  // resolve through getAssetKey() to that key already and need no entry here.
  "honey-with-nuts-malaysia": {
    src: "/images/article-honey-with-nuts-malaysia.webp",
    width: 886,
    height: 665,
  },
  "honeycomb-hantaran-gift-idea": {
    src: "/images/article-honeycomb-hantaran-gift-idea.webp",
    width: 886,
    height: 665,
  },
  "is-honey-safe-during-pregnancy": {
    src: "/images/article-is-honey-safe-during-pregnancy.webp",
    width: 886,
    height: 665,
  },
  "honey-allergy-symptoms": {
    src: "/images/article-honey-allergy-symptoms.webp",
    width: 886,
    height: 665,
  },
  "honey-vs-gula-melaka": {
    src: "/images/article-honey-vs-gula-melaka.webp",
    width: 886,
    height: 665,
  },
  "is-honey-vegan": {
    src: "/images/article-is-honey-vegan.webp",
    width: 886,
    height: 665,
  },
  "beli-madu-online-atau-kedai-fizikal": {
    src: "/images/article-beli-madu-online-atau-kedai-fizikal.webp",
    width: 886,
    height: 665,
  },
  "hadiah-madu-untuk-raya": {
    src: "/images/article-hadiah-madu-untuk-raya.webp",
    width: 886,
    height: 665,
  },
  "doorgift-madu-kahwin": {
    src: "/images/article-doorgift-madu-kahwin.webp",
    width: 886,
    height: 665,
  },
  "resepi-sarapan-guna-madu": {
    src: "/images/article-resepi-sarapan-guna-madu.webp",
    width: 886,
    height: 665,
  },
  "madu-untuk-masakan": {
    src: "/images/article-madu-untuk-masakan.webp",
    width: 886,
    height: 665,
  },
  "limatha-yatfu-al-shama-fawq-al-asal": {
    src: "/images/article-limatha-yatfu-al-shama-fawq-al-asal.webp",
    width: 886,
    height: 665,
  },
  "mukawwinat-khaltat-al-asal-bil-aashab": {
    src: "/images/article-mukawwinat-khaltat-al-asal-bil-aashab.webp",
    width: 886,
    height: 665,
  },
  "hal-al-asal-masmuh-lil-atfal-aqal-min-sana": {
    src: "/images/article-hal-al-asal-masmuh-lil-atfal-aqal-min-sana.webp",
    width: 886,
    height: 665,
  },
  "shiraa-al-asal-online-fi-malizia": {
    src: "/images/article-shiraa-al-asal-online-fi-malizia.webp",
    width: 886,
    height: 665,
  },
  "hadiyat-al-asal-lil-eid": {
    src: "/images/article-hadiyat-al-asal-lil-eid.webp",
    width: 886,
    height: 665,
  },

  // Round 3 (2026-08-25). 886x665 - the free generator's hard cap,
  // confirmed by two control runs that both returned 886x665 whatever
  // size was requested. Declared at its REAL size: the pipeline never
  // upscales, and a template that claims 1200x900 for a 886x665 file
  // ships a lie the image audit cannot see.
  "is-honey-in-malaysia-fake": {
    src: "/images/article-is-honey-in-malaysia-fake.webp",
    width: 886,
    height: 665,
  },
  "what-is-sidr-honey": {
    src: "/images/article-what-is-sidr-honey.webp",
    width: 886,
    height: 665,
  },
  "honey-in-hot-drinks-malaysia": {
    src: "/images/article-honey-in-hot-drinks-malaysia.webp",
    width: 886,
    height: 665,
  },
  "baking-with-honey-malaysia": {
    src: "/images/article-baking-with-honey-malaysia.webp",
    width: 886,
    height: 665,
  },
  "how-to-read-a-honey-label-malaysia": {
    src: "/images/article-how-to-read-a-honey-label-malaysia.webp",
    width: 886,
    height: 665,
  },
  "why-is-honey-dark-or-light": {
    src: "/images/article-why-is-honey-dark-or-light.webp",
    width: 886,
    height: 665,
  },
  "tarikh-luput-madu": {
    src: "/images/article-tarikh-luput-madu.webp",
    width: 886,
    height: 665,
  },
  "madu-kelulut-vs-madu-tualang": {
    src: "/images/article-madu-kelulut-vs-madu-tualang.webp",
    width: 886,
    height: 665,
  },
  "madu-khalta": {
    src: "/images/article-madu-khalta.webp",
    width: 886,
    height: 665,
  },
  "madu-saffron": {
    src: "/images/article-madu-saffron.webp",
    width: 886,
    height: 665,
  },
  "naql-al-asal-fi-al-taira": {
    src: "/images/article-naql-al-asal-fi-al-taira.webp",
    width: 886,
    height: 665,
  },
  "al-farq-bayn-al-asal-al-kham-wal-musaffa": {
    src: "/images/article-al-farq-bayn-al-asal-al-kham-wal-musaffa.webp",
    width: 886,
    height: 665,
  },
  "tariqat-amal-asal-bil-mukassarat": {
    src: "/images/article-tariqat-amal-asal-bil-mukassarat.webp",
    width: 886,
    height: 665,
  },
  "hadiya-min-malizia-lil-ahl": {
    src: "/images/article-hadiya-min-malizia-lil-ahl.webp",
    width: 886,
    height: 665,
  },
};
