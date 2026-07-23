import type { APIRoute } from "astro";
import { SITE_URL } from "../config/site";

/**
 * Generated so the Sitemap line always matches SITE_URL - the static version
 * kept pointing at the old Netlify domain after the move to suburhoney.com.
 *
 * The AI crawlers are listed explicitly and allowed: this is a brand site that
 * wants to be quoted in AI answers.
 */
const AI_CRAWLERS = ["GPTBot", "ClaudeBot", "Google-Extended", "PerplexityBot"];

export const GET: APIRoute = () => {
  const body = [
    "User-agent: *",
    "Allow: /",
    "",
    ...AI_CRAWLERS.flatMap((bot) => [`User-agent: ${bot}`, "Allow: /", ""]),
    `Sitemap: ${SITE_URL}/sitemap.xml`,
    "",
  ].join("\n");

  return new Response(body, { headers: { "Content-Type": "text/plain; charset=utf-8" } });
};
