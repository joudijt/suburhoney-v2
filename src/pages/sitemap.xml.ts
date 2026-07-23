import type { APIRoute } from "astro";
import { INDEXABLE_PATHS, LOCALES, localeUrl } from "../config/site";

/**
 * Generated rather than hand-maintained: the previous public/sitemap.xml listed
 * a single URL on a domain the site no longer uses, and all six locale pages
 * were missing.
 *
 * Each entry carries xhtml:link alternates so Google can pair the three locale
 * versions of the same page.
 */
export const GET: APIRoute = () => {
  const lastmod = new Date().toISOString().slice(0, 10);

  const urls = INDEXABLE_PATHS.flatMap((path) =>
    LOCALES.map((lang) => {
      const alternates = LOCALES.map(
        (alt) => `    <xhtml:link rel="alternate" hreflang="${alt}" href="${localeUrl(alt, path)}" />`
      ).join("\n");

      return `  <url>
    <loc>${localeUrl(lang, path)}</loc>
${alternates}
    <xhtml:link rel="alternate" hreflang="x-default" href="${localeUrl("en", path)}" />
    <lastmod>${lastmod}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>${path === "/" ? "1.0" : "0.7"}</priority>
  </url>`;
    })
  ).join("\n");

  const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
${urls}
</urlset>
`;

  return new Response(body, { headers: { "Content-Type": "application/xml; charset=utf-8" } });
};
