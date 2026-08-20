# PRESS — decisions log (SUBUR Honey)

`approved` = the user said it. `assumed` = PRESS decided it under delegation and the user can
overturn it.

| # | Date | Decision | Status |
|---|---|---|---|
| D1 | 2026-08-20 | Round 1 ships **7 articles per language × 3 languages = 21 articles** | approved (user: "press subur honey project for each lang 7 articles") |
| D2 | 2026-08-20 | Length **800–1,000 words** per article, sitting at the top of the band so the round does not read thinner than the nine live articles | assumed (PRESS default) |
| D3 | 2026-08-20 | Topics are chosen from **each language's own demand**, not one topic set translated three ways. Where a topic genuinely has demand in more than one language it becomes an `ARTICLE_GROUPS` group and earns hreflang; otherwise it ships single-language | assumed |
| D4 | 2026-08-20 | **One lead image per article**, 4:3 WebP ≤ 110 KB, matching the site's existing article convention. Not hero + 2 inline + OG: this host collapses on request count, and the blog cards reuse the same file | assumed |
| D5 | 2026-08-20 | Round payload ceiling **2.5 MB** total added bytes | assumed |
| D6 | 2026-08-20 | `sitemap.xml.ts` is patched to enumerate **all** articles (it looped `ARTICLE_GROUPS` only, so a single-language article would have shipped unlisted) | assumed |
| D7 | 2026-08-20 | `SEO.astro` is patched to emit hreflang **only for locales present in `alternates`** when an explicit alternates map is passed. It previously fell back to a derived path and would have emitted 404 hreflang URLs for single-language articles | assumed |
| D8 | 2026-08-20 | No Search Console data in Stage 1 — the Cogny MCP free call quota for the period is exhausted. Demand evidence is live SERP/PAA/competitor research and is labelled as such; no invented search volumes | assumed, reported in GATE.md |
| D9 | 2026-08-20 | Images generated free via `pollinations` (the `zimage` provider returns 401 — expired token) | assumed |
| D10 | 2026-08-20 | Work lands on branch `press-round-1` off `master` @ `23452bc`. Rollback = `git checkout master` (nothing else was touched) | assumed |
| D11 | 2026-08-20 | Per-article fact sheets are **the candidate section in the language's demand file plus the article's map row**, not 21 duplicate files. Each candidate section already carries sourced evidence with URLs, the competitor gap and a per-topic risk list; copying that into a second file would have created two versions of the same facts | assumed |
| D12 | 2026-08-20 | `ARTICLE_FIGURES` is now keyed through `getAssetKey()` — the group's English slug where a group exists, the article's own slug otherwise. Without it every single-language article silently lost its lead image and its blog card fell back to a category icon | assumed |
| D13 | 2026-08-20 | Fixed a **pre-existing** failure this round exposed: `node scripts/qa/banned-terms.mjs --dir=dist` was red before the round. `scripts/ai/facts-sync.mjs` is a `.mjs` file, which the src-mode scan does not read, so it kept writing "traditional-use idiom of Middle Eastern honey blends" into `about.md`, `faq.md` and `AI-FACTS.yml` — all three live on suburhoney.com today. Rewritten without the banned positioning; both gate modes now pass | assumed |
| D14 | 2026-08-20 | hreflang is emitted only for a real cluster: a single-language article gets **no** hreflang annotation at all, and `x-default` is emitted only when the cluster has an English member. Annotating a lone page with a self-referencing hreflang, or naming a Malay page as the fallback for every other language, are both claims the round cannot support | assumed |
| D15 | 2026-08-20 | Images are 1200×900 (4:3). Pollinations' anonymous tier permits **one queued request per IP** and clamps resolution, so generation is strictly sequential with long waits, and each result is cover-cropped to exactly 4:3 — `scripts/qa/image-audit.mjs` fails any content image rendered at a ratio other than its own | assumed |
| D16 | 2026-08-20 | Each of the nine live articles swapped one `related` slug for a round-1 article, so every new page has a contextual inbound link and no live page lost its own inbound link. The related grid is `sm:grid-cols-2`, so the count stays at exactly two rather than growing to three | assumed |
