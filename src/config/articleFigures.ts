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
};
