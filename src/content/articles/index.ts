import type { Locale } from "../../config/site";
import type { Article } from "./types";

import { article as enCouples } from "./en/honey-for-couples-malaysia";
import { article as enBlackSeed } from "./en/black-seed-honey-benefits";
import { article as enPure } from "./en/how-to-identify-pure-honey";

import { article as msCouples } from "./ms/madu-suami-isteri";
import { article as msBlackSeed } from "./ms/habbatus-sauda-dan-madu";
import { article as msPure } from "./ms/cara-kenal-madu-asli";

import { article as arCouples } from "./ar/asal-al-zawjayn";
import { article as arBlackSeed } from "./ar/habbat-al-barakah-wal-asal";
import { article as arPure } from "./ar/kayfa-tamiz-al-asal-al-asli";

/** Newest first - this is the order the blog index renders. */
export const ARTICLES: Record<Locale, Article[]> = {
  en: [enCouples, enBlackSeed, enPure],
  ms: [msCouples, msBlackSeed, msPure],
  ar: [arCouples, arBlackSeed, arPure],
};

/**
 * The same article in three languages, keyed by locale.
 *
 * Slugs are deliberately different per locale - a Malay reader searches Malay
 * words, so /ms/blog/madu-suami-isteri earns the click that
 * /ms/blog/honey-for-couples-malaysia would not. That means hreflang cannot be
 * derived from the slug, so the translations are declared here instead.
 *
 * Adding a locale to an existing article means adding it to its group. An
 * article missing from every group still builds - it simply gets no hreflang
 * alternates, which is correct for content that genuinely exists in one
 * language only.
 */
export const ARTICLE_GROUPS: Record<Locale, string>[] = [
  { en: "honey-for-couples-malaysia", ms: "madu-suami-isteri", ar: "asal-al-zawjayn" },
  { en: "black-seed-honey-benefits", ms: "habbatus-sauda-dan-madu", ar: "habbat-al-barakah-wal-asal" },
  { en: "how-to-identify-pure-honey", ms: "cara-kenal-madu-asli", ar: "kayfa-tamiz-al-asal-al-asli" },
];

export function getArticles(lang: Locale): Article[] {
  return ARTICLES[lang] ?? [];
}

export function getArticle(lang: Locale, slug: string): Article | undefined {
  return getArticles(lang).find((a) => a.slug === slug);
}

/** The equivalent slug in every other locale, for hreflang and the language switcher. */
export function getTranslations(lang: Locale, slug: string): Partial<Record<Locale, string>> {
  return ARTICLE_GROUPS.find((g) => g[lang] === slug) ?? {};
}
