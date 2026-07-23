import type { Locale } from "../../config/site";

import en from "./en.txt?raw";
import ar from "./ar.txt?raw";
import ms from "./ms.txt?raw";

const BASE: Record<Locale, string> = { en, ar, ms };

/** Section headings in the reader's own language - an AI summary in Malay should not have English headings. */
const HEADINGS: Record<Locale, { pages: string; languages: string }> = {
  en: { pages: "Pages", languages: "Languages" },
  ar: { pages: "الصفحات", languages: "اللغات" },
  ms: { pages: "Halaman", languages: "Bahasa" },
};

/**
 * Appends the generated page list to the hand-written product summary.
 *
 * The prose in ./{locale}.txt is maintained by hand because it describes the
 * product. The link list is generated because it goes stale the moment an
 * article is added - which is exactly what happened to the file this replaced.
 */
export function buildLlmsText(lang: Locale, links: string[], languages: string[]): string {
  const h = HEADINGS[lang];
  return [
    BASE[lang].trimEnd(),
    "",
    `## ${h.pages}`,
    ...links,
    "",
    `## ${h.languages}`,
    ...languages,
    "",
  ].join("\n");
}
