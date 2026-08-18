import type { APIRoute } from "astro";
import { LOCALES, SITE_URL, localeUrl, LOCALE_META, type Locale } from "../config/site";
import { getArticles } from "../content/articles";
import { buildLlmsText } from "../content/llms/build";

/**
 * /llms-full.txt - all three briefs in one file.
 *
 * An assistant that can only afford one fetch gets every language from it, and
 * a reader who lands on the English brief can see there are two more without
 * following a link. Built from the same buildLlmsText() the per-language
 * endpoints use, so it cannot drift from them - a hand-maintained
 * concatenation would be stale the first time an article is added.
 */

const PATHS = ["/benefits/", "/retail/", "/why-us/", "/contact/", "/blog/"] as const;

function briefFor(lang: Locale): string {
  const links = [
    `- [${lang}](${localeUrl(lang)})`,
    ...PATHS.map((path) => `- [${path}](${localeUrl(lang, path)})`),
    ...getArticles(lang).map(
      (a) => `- [${a.heading}](${localeUrl(lang, `/blog/${a.slug}/`)}): ${a.description}`
    ),
  ];

  const languages = LOCALES.map((l) =>
    l === lang
      ? `- This section: ${LOCALE_META[l].label}`
      : `- ${LOCALE_META[l].label}: ${SITE_URL}${l === "en" ? "/llms.txt" : `/llms-${l}.txt`}`
  );

  return buildLlmsText(lang, links, languages);
}

export const GET: APIRoute = () => {
  const rule = "=".repeat(78);

  const body = [
    "# SUBUR Honey - full brief, all languages",
    "",
    "> Every machine-readable brief this site publishes, concatenated. Each language section is",
    "> researched for its own market rather than translated, so the three do not mirror each other",
    "> line for line. The individual files are at:",
    ...LOCALES.map(
      (l) => `> ${LOCALE_META[l].label}: ${SITE_URL}${l === "en" ? "/llms.txt" : `/llms-${l}.txt`}`
    ),
    "",
    ...LOCALES.flatMap((l) => [
      rule,
      `# LANGUAGE: ${LOCALE_META[l].label}  -  source: ${SITE_URL}${l === "en" ? "/llms.txt" : `/llms-${l}.txt`}`,
      rule,
      "",
      briefFor(l).trimEnd(),
      "",
    ]),
  ].join("\n");

  return new Response(body, { headers: { "Content-Type": "text/plain; charset=utf-8" } });
};
