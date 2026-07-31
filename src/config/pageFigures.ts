/**
 * Lead images rendered above the content blocks on the standalone pages.
 *
 * The geometry lives here once rather than in each locale's content file: the
 * same file is served to every language, so repeating width/height nine times
 * would only create three chances for them to drift. The translated alt text is
 * the one part that does belong with the copy - see `figureAlt` on Article.
 *
 * Keyed by page slug, which is the same string in all three locales for these
 * pages (unlike blog articles, whose slugs are localized).
 *
 * `page-benefits` is a studio photo. `page-retail` and `page-why-us` are product
 * still-lifes composed from the real jarncap and ingredient-icon assets, so no
 * scene is presented as a photograph that was never taken.
 */
export interface PageFigure {
  src: string;
  width: number;
  height: number;
  /**
   * Classes applied below `lg` for photos whose subject sits on one side and
   * whose other half is deliberately empty. On desktop the overlay text fills
   * that half; below `lg` the text moves underneath, leaving the empty half
   * looking like an unfinished image - so those widths crop it away instead.
   * Anchored with the physical `object-left`/`object-right`, never the
   * direction-aware `object-start`: one file serves all three locales.
   * Figures with a centred composition leave this unset and are never cropped.
   */
  mobileCrop?: string;
}

export const PAGE_FIGURES: Record<string, PageFigure> = {
  benefits: {
    src: "/images/page-benefits.webp",
    width: 1536,
    height: 1024,
    mobileCrop: "aspect-square object-cover object-left sm:aspect-[4/3]",
  },
  retail: { src: "/images/page-retail.webp", width: 1536, height: 864 },
  // Jar centred with ingredients spread to both edges - cropping either side
  // would cut ingredients off, so it always renders in full.
  "why-us": { src: "/images/page-why-us.webp", width: 1536, height: 864 },
};
