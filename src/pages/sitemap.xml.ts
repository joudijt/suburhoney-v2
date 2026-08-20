import type { APIRoute } from "astro";
import { INDEXABLE_PATHS, LOCALES, localeUrl } from "../config/site";
import { getArticles, getTranslations } from "../content/articles";

/**
 * Generated rather than hand-maintained: the previous public/sitemap.xml listed
 * a single URL on a domain the site no longer uses, and all six locale pages
 * were missing.
 *
 * Each entry carries xhtml:link alternates so Google can pair the locale
 * versions of the same page. For articles that pairing cannot be derived from
 * the URL, because every language has its own slug, so it comes from
 * ARTICLE_GROUPS.
 */

interface Entry {
  loc: string;
  alternates: { lang: string; href: string }[];
  lastmod: string;
  priority: string;
}

export const GET: APIRoute = () => {
  const today = new Date().toISOString().slice(0, 10);
  const entries: Entry[] = [];

  for (const path of INDEXABLE_PATHS) {
    const alternates = LOCALES.map((l) => ({ lang: l, href: localeUrl(l, path) }));
    alternates.push({ lang: "x-default", href: localeUrl("en", path) });
    for (const lang of LOCALES) {
      entries.push({
        loc: localeUrl(lang, path),
        alternates,
        lastmod: today,
        priority: path === "/" ? "1.0" : "0.7",
      });
    }
  }

  /*
    Every article, not every group.

    This used to loop ARTICLE_GROUPS, which silently dropped any article that
    exists in one language only - and after the demand-led rounds most articles
    do, because Malay, Arabic and English readers search for different things.
    The group is still what supplies the alternates; it is no longer what
    decides whether a URL is listed at all.
  */
  for (const lang of LOCALES) {
    for (const article of getArticles(lang)) {
      const translations = getTranslations(lang, article.slug);
      const langs = LOCALES.filter((l) => translations[l]);

      const alternates = langs.map((l) => ({
        lang: l as string,
        href: localeUrl(l, `/blog/${translations[l]}/`),
      }));
      /* A single-language article gets no alternates and no x-default: there is
         nothing to pair it with, and pointing x-default at a URL in another
         language would be a lie about what that page is. */
      if (translations.en) {
        alternates.push({ lang: "x-default", href: localeUrl("en", `/blog/${translations.en}/`) });
      }

      entries.push({
        loc: localeUrl(lang, `/blog/${article.slug}/`),
        alternates,
        lastmod: article.updated,
        priority: "0.8",
      });
    }
  }

  const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
${entries
  .map(
    (e) => `  <url>
    <loc>${e.loc}</loc>
${e.alternates.map((a) => `    <xhtml:link rel="alternate" hreflang="${a.lang}" href="${a.href}" />`).join("\n")}
    <lastmod>${e.lastmod}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>${e.priority}</priority>
  </url>`
  )
  .join("\n")}
</urlset>
`;

  return new Response(body, { headers: { "Content-Type": "application/xml; charset=utf-8" } });
};
