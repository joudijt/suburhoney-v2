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
};
