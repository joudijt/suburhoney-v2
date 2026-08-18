import type { APIRoute } from "astro";
import { SITE_URL } from "../config/site";

/**
 * Generated so the Sitemap line always matches SITE_URL - the static version
 * kept pointing at the old Netlify domain after the move to suburhoney.com.
 *
 * The AI crawlers are listed explicitly and allowed: this is a brand site that
 * wants to be quoted in AI answers. `User-agent: *` already allows them; being
 * named is what stops a cautious operator's crawler guessing, and it is the one
 * place a person checks when asking whether a site opted out.
 */
const AI_CRAWLERS = [
  // OpenAI: training crawler, the search index, and live user-triggered fetches.
  "GPTBot",
  "OAI-SearchBot",
  "ChatGPT-User",
  // Perplexity: index crawler and live user-triggered fetches.
  "PerplexityBot",
  "Perplexity-User",
  // Anthropic: index crawler, live user fetches, and the legacy agent name.
  "ClaudeBot",
  "Claude-User",
  "anthropic-ai",
  // Gemini / AI Overviews - separate from Googlebot, which robots.txt above covers.
  "Google-Extended",
  // Apple Intelligence, Alexa, Meta AI.
  "Applebot-Extended",
  "Amazonbot",
  "meta-externalagent",
  // Bing powers Copilot and ChatGPT search, so it is an answer-engine crawler here.
  "Bingbot",
  "DuckAssistBot",
  "cohere-ai",
];

/**
 * Common Crawl feeds model training corpora and returns no citation, no
 * referral and no search surface. It is the one crawler with nothing on the
 * other side of the trade, so it is the one that gets turned away.
 */
const TRAINING_ONLY = ["CCBot"];

/**
 * Written as comments: robots.txt has no directive for these, and an unknown
 * directive gets flagged in Search Console.
 */
const SURFACES = [
  ["llms.txt", "English brief"],
  ["llms-ar.txt", "العربية"],
  ["llms-ms.txt", "Bahasa Melayu"],
  ["llms-full.txt", "all three, concatenated"],
  ["about.md", "entity facts - the brand, the seller, both shops"],
  ["faq.md", "the Q&A on its own"],
  ["AGENTS.md", "what an automated agent can do here"],
];

export const GET: APIRoute = () => {
  const body = [
    "User-agent: *",
    "Allow: /",
    "",
    ...AI_CRAWLERS.flatMap((bot) => [`User-agent: ${bot}`, "Allow: /", ""]),
    "# Training-only crawler, no citation or search surface - the one that is blocked.",
    ...TRAINING_ONLY.flatMap((bot) => [`User-agent: ${bot}`, "Disallow: /", ""]),
    `Sitemap: ${SITE_URL}/sitemap.xml`,
    "",
    "# Machine-readable surfaces:",
    ...SURFACES.map(([file, what]) => `# ${SITE_URL}/${file}  (${what})`),
    "",
  ].join("\n");

  return new Response(body, { headers: { "Content-Type": "text/plain; charset=utf-8" } });
};
