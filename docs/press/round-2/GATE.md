# PRESS Round 2 — gate report

18 articles (6 en / 6 ms / 6 ar). Run 2026-08-25 on branch `press/round-2`.

## Mechanical — automated

Three runners used: `bin/press_gate.py` against rendered `dist/` HTML (control run first, against
a live round-1 article, per gates.md's own instruction — see below); a custom dist-level checker
(`docs/press/round-2/check-dist.mjs`) reading meta/JSON-LD/FAQ-parity/links/images directly, because
`press_gate.py` does not traverse `@graph` (documented runner limitation, confirmed again this
round); and a content-module validator (`docs/press/round-2/validate.mjs`) against the typed source,
because the rendered `<article>` region folds the FAQ, related cards and breadcrumb into any word
count read from HTML.

**Control run first** (gates.md's own instruction): gated `dist/en/blog/how-to-store-honey-malaysia/index.html`
(a round-1 article, live and verified since 2026-08-20) with `press_gate.py`. It failed `word-count`
(1545 vs band 800-1060 — the runner counts the whole article region, not body copy),
`schema-article`/`schema-faqpage`/`faq-count` (the `@graph` traversal gap) and warned on
`image-dimensions`. Round 2's articles fail the identical checks for the identical reasons —
confirmed as the runner's own framing, not a round-2 defect, before trusting any finding below.

| # | Check | Result |
|---|---|---|
| 1 | Word count, 800-1,000 body words | **PASS** — 18/18 inside band (864-1,034), measured by `wordcount.mjs` directly on block text (answer+headings+paragraphs+list/steps/table/callouts/cta; FAQs excluded). Two articles trimmed post-write to bring them back under 1,000 (`ms/madu-untuk-masakan`, `ms/doorgift-madu-kahwin`); two more (`ar/mukawwinat-khaltat-al-asal-bil-aashab`, `ar/shiraa-al-asal-online-fi-malizia`) trimmed slightly for margin |
| 2 | H1 present, unique, carries focus keyword | **PASS** — 18/18, verified via `validate.mjs` (`heading` field) and manually spot-checked in rendered HTML |
| 3 | Key takeaway 40-60 words, first block | **PASS** — 18/18, `answer` block is always `blocks[0]` |
| 4 | Answer-first under every H2 (40-70 words, stands alone) | **PASS** — 18/18 after two fix passes (one structural fix for a list-before-paragraph ordering in `ar/shiraa-al-asal-online-fi-malizia`, several word-count adjustments, one 71-word overage from the Stage 6 anti-translation rewrite in `ms3` trimmed back into band) |
| 5 | 5-7 H2 sections | **PASS** — 18/18 (6-7 each) |
| 6 | Structured block (table or comparison list) | **PASS** — every article carries at least one table |
| 7 | FAQ count 6-10 | **PASS** — 8-9 per article |
| 8 | FAQ parity with schema | **PASS by construction and verified** — `check-dist.mjs` compares on-page `<summary>` count against the rendered `FAQPage.mainEntity` length for all 18; identical counts on every page |
| 9 | Meta title ≤60, unique site-wide | **PASS** — verified against all 18 round-2 titles plus cross-checked no collision with round-1/pre-round-1 titles |
| 10 | Meta description ≤155/160, unique | **PASS** — 18/18 |
| 11 | Canonical absolute and self-referencing | **PASS** — `check-dist.mjs` compares the rendered canonical against the expected `https://suburhoney.com/{lang}/blog/{slug}/` for all 18, exact match |
| 12 | OG set complete | **PASS** — type/title/description/url/image/locale all present, `og:type=article` confirmed |
| 13 | OG image reachable | **PASS** — every `og:image` URL resolved to a real file in `dist/`, byte size sanity-checked (>1 KB, i.e. not an empty/broken file) |
| 14 | Twitter card | **PASS** — card/title/description/image present on all 18 |
| 15 | hreflang | **PASS, with the same intentional rule as round 1 (D14)** — 15 single-language articles emit no hreflang at all (correct: they are not a cluster); the 3 members of the new G6 group (`manuka-honey-vs-local-honey` en Round 1 + `madu-manuka-vs-madu-tempatan-malaysia` ms + `al-farq-bayn-asal-manuka-wal-asal-al-malizi` ar) each emit a full 3-language cluster plus `x-default` pointing at the English member — verified directly in rendered HTML on all three pages |
| 16 | JSON-LD valid | **PASS** — `check-dist.mjs` parses `@graph` on all 18 pages: `BlogPosting` + `FAQPage` + `BreadcrumbList` present and valid on every one. `press_gate.py` reports these missing on all 18 (same runner limitation recorded in round 1's gate — it does not read `@graph`) |
| 17 | Entity `@id` for author/publisher | **PASS** — both resolve to `${SITE_URL}/#organization` on all 18 |
| 18 | Internal links out ≥3 | **PASS** — `check-dist.mjs` counts 3-5 unique same-locale internal links per page, 18/18 |
| 19 | Internal links in | **PASS** — every new article appears on its locale's blog index (existing page), and additionally each of 18 pre-round-2 live articles (6 per language, distinct, none reused) had one `related` slot swapped to point at a specific round-2 article, so every new article carries a contextual inbound link, not just the index listing |
| 20 | Anchor text | **PASS** — no "click here"/"read more" found in any of the 18 |
| 21 | Images | **PASS** — 16 generated WebP (886x665, 4:3, 17-34 KB each) + 2 reused (1200x900, 44 KB, shared G6 asset). All have alt text and width/height attributes rendered. Two images regenerated before shipping — see `IMAGE-INVENTORY.md` |
| 22 | Slug native script per language | **PASS** — Malay slugs in Malay, Arabic slugs transliterated Latin per the site's existing convention, matching round 1's pattern exactly |
| 23 | Slug drift | **N/A** — repo has no slug registry to drift against (unchanged from round 1's finding) |
| 24 | Sitemap | **PASS** — 66 locs, up from 48 (18 new article URLs, all present, `lastmod` = 2026-08-25 for the new articles) |
| 25 | Route reachable | **PASS locally** — 67 pages built, all 18 new routes present in `dist/` |
| 26 | Existing project gates | **PASS** — `banned-terms.mjs` (src **and** `--dir=dist`), `check:ai` (`facts-sync.mjs --check`). Both were already green at Stage 0 after the D17 fix, and stayed green through every rebuild in this round |
| 26a | Focus-keyword uniqueness within the round | **PASS** — 18 unique focus keywords, cross-checked against each other and against all 30 live (9 pre-round-1 + 21 round-1) keywords. Zero collisions |
| 26b | Round payload ceiling (2.5 MB) | **PASS** — ~347 KB of new images (16 generated + 0 for 2 reused) |
| 26c | Rollback recorded | **PASS** — `ROLLBACK.md`, pre-round sha (`b13c44b`) and the 48 live URLs captured before Stage 5 |

## Judgement — adversarial review

Three independent reviewers, one per language, each briefed with the calibre of round-1's own
catches (fabricated map feature, inverted density physics, wrong MGO/NZ fact) as the bar, and told
explicitly not to invent findings to seem thorough.

**English** — 5 of 6 clean on first pass. One real finding: `honey-with-nuts-malaysia`'s lead image
showed a jar of loose whole nut chunks with no honey visible — a direct visual contradiction of the
article's own point (nuts are ground in, never whole pieces) and of `FACTS-COMMON.md`. Root cause:
`zimage` was dead for the whole round, so every image fell through to `pollinations`, and this one
fallback render ignored the "no whole nut halves" instruction in its prompt. Regenerated; second
result passes.

**Bahasa Malaysia** — 3 of 6 clean, 3 fixed:
1. `madu-manuka-vs-madu-tempatan-malaysia` mirrored the English Round-1 Manuka article's structure
   near-literally — same 3-item list order, same 4-row table order, same "three questions" list
   order, same FAQ sequence. PRESS non-negotiable 4 forbids this even when the underlying facts are
   correct. Reordered and reworded every mirrored section; facts unchanged.
2. `doorgift-madu-kahwin` stated an invented customer-behaviour norm ("most couples start asking
   right after the date is set, not a week before") with no source. Replaced with a generic hedge.
3. `resepi-sarapan-guna-madu` inverted the standing infant-safety warning into an implied "safe for
   ages 1+" endorsement — the exact pattern the round's brief explicitly banned. Restored to
   warning-only phrasing with the allergy caveat intact.

**Arabic** — 4 of 6 clean, 2 fixed:
1. `mukawwinat-khaltat-al-asal-bil-aashab` stated an invented specific — that competitors typically
   list only "three or four" ingredient names. No source for the number. Rewritten to the true,
   general point without the invented count.
2. `hadiyat-al-asal-lil-eid` claimed a gift jar "will be eaten before the week is out" — an
   unverifiable specific about recipient behaviour. Rewritten to the true, general point (it gets
   eaten, not shelved) without the invented timeframe.

All fixes verified: re-ran `validate.mjs`, `wordcount.mjs`, `check-dist.mjs`, both `banned-terms.mjs`
modes and `check:ai` after every batch of edits. Final state: all 18 pass every mechanical check
above.

## Deliberate deviations from the generic article spec (same as round 1)

| Deviation | Why |
|---|---|
| One lead image per article, no inline images, no per-article OG image beyond the lead figure | Site's own convention (D4 from round 1), unchanged — this host is request-count sensitive |
| Images at 886x665 rather than the requested 1200x900 | `pollinations`' anonymous tier clamped resolution this round (zimage fully dead); declared dimensions match the real file, not the request |
| Fact sheets are `FACTS-COMMON.md` + `ROUND-2-MAP.md` rows, not 18 separate files | Same rationale as round 1's D11 — the map rows already carry sourced evidence, competitor gaps and per-topic risk notes; a second file would duplicate them |

## Could not run — recorded, not passed

| Check | Status |
|---|---|
| **Search Console demand data (Stage 1)** | **NOT RUN.** Cogny MCP free quota exhausted, confirmed again 2026-08-25 (resets 1 Sep). Same as round 1 (D8/D19). Demand rests on live SERP/PAA/competitor research only, every claim sourced with a URL in the three `demand-*.md` files |
| **Keyword volumes** | **NOT AVAILABLE.** No figure appears anywhere in the map |
| `scripts/qa/image-audit.mjs` | **NOT RUN as written** — targets a dev server and the six standalone pages, not blog articles (same as round 1's finding). Checked manually instead: all 18 lead images render at their declared aspect ratio, no crop artefacts |
| Live checks (37-45) | Pending deploy — see the live section, appended after Stage 7 |

## Pre-existing failures this round did not introduce

- Everything round 1 already recorded (9 originally-live articles fail answer-first on 3 H2s each;
  `StoreModal.astro` sticker has no width/height; Arabic `llms.txt`'s unsourced weight-variance line;
  the Netlify twin duplicating content) is unchanged and untouched by round 2.
- **New, found and fixed at Stage 0, not a round-2 regression**: `scripts/ai/facts-sync.mjs` was
  still hardcoding banned positioning terms into the Malay/Arabic `AI-FACTS.yml` strings — round 1's
  D13 fix only touched the hand-written prose surfaces, not this generator. Confirmed the generated
  file never ships (only the English key feeds `about.md`/`faq.md`), so this was dormant, not live —
  fixed anyway (D17).
