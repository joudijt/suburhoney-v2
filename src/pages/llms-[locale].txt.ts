import type { APIRoute } from "astro";
import { LOCALES, SITE_URL, localeUrl, type Locale } from "../config/site";
import { getArticles } from "../content/articles";
import { buildLlmsText } from "../content/llms/build";

/** /llms-ar.txt and /llms-ms.txt. English lives at /llms.txt. */
export function getStaticPaths() {
  return LOCALES.filter((l) => l !== "en").map((locale) => ({ params: { locale } }));
}

const LABEL: Record<string, { home: string; guides: string; primary: string; english: string }> = {
  ar: {
    home: "الصفحة الرئيسية",
    guides: "الأدلة",
    primary: "لغة المحتوى الأساسية: العربية",
    english: "الإنجليزية",
  },
  ms: {
    home: "Laman Utama",
    guides: "Panduan",
    primary: "Bahasa kandungan utama: Bahasa Malaysia",
    english: "Bahasa Inggeris",
  },
};

export const GET: APIRoute = ({ params }) => {
  const lang = params.locale as Locale;
  const l = LABEL[lang];

  const links = [
    `- [${l.home}](${localeUrl(lang)})`,
    `- [${l.guides}](${localeUrl(lang, "/blog/")})`,
    ...getArticles(lang).map(
      (a) => `- [${a.heading}](${localeUrl(lang, `/blog/${a.slug}/`)}): ${a.description}`
    ),
  ];

  const languages = [`- ${l.primary}`, `- ${l.english}: ${SITE_URL}/llms.txt`];

  return new Response(buildLlmsText(lang, links, languages), {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
};
