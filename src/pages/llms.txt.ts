import type { APIRoute } from "astro";
import { LOCALES, SITE_URL, localeUrl } from "../config/site";
import { getArticles } from "../content/articles";
import { buildLlmsText } from "../content/llms/build";

/**
 * /llms.txt - the English entry point for AI crawlers and assistants.
 *
 * Generated rather than hand-written so the page list cannot go stale: the
 * previous static file still pointed at the old Netlify domain and knew about
 * one page. The per-locale variants live at /llms-ar.txt and /llms-ms.txt.
 */
export const GET: APIRoute = () => {
  const links = [
    `- [Home](${localeUrl("en")}): the product, its ten ingredients, the morning ritual, wholesale enquiry, FAQ`,
    `- [Benefits](${localeUrl("en", "/benefits/")}): what each ingredient is there for - fertility, stamina, male vitality`,
    `- [Retail](${localeUrl("en", "/retail/")}): every verified retail channel, jar sizes, FAQ`,
    `- [Why Us](${localeUrl("en", "/why-us/")}): what differentiates Subur from a typical processed honey blend`,
    `- [Contact](${localeUrl("en", "/contact/")}): current channels to reach Subur Honey`,
    `- [Guides](${localeUrl("en", "/blog/")}): buying guides for Malaysian readers`,
    ...getArticles("en").map(
      (a) => `- [${a.heading}](${localeUrl("en", `/blog/${a.slug}/`)}): ${a.description}`
    ),
  ];

  const languages = [
    "- Primary content language: English",
    ...LOCALES.filter((l) => l !== "en").map(
      (l) => `- ${l === "ar" ? "Arabic" : "Bahasa Malaysia"}: ${SITE_URL}/llms-${l}.txt`
    ),
    `- All three concatenated: ${SITE_URL}/llms-full.txt`,
    `- Companion files: ${SITE_URL}/about.md - ${SITE_URL}/faq.md - ${SITE_URL}/AGENTS.md`,
  ];

  return new Response(buildLlmsText("en", links, languages), {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
};
