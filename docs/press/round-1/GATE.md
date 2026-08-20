# PRESS Round 1 — gate report

21 articles (7 en / 7 ms / 7 ar). Run 2026-08-20 on branch `press-round-1`.
Every check below is recorded, **including the ones that could not run** — a silently skipped check
reads as a pass.

## Mechanical — automated

Two runners were used, because neither alone is sufficient here:

- `bin/press_gate.py` against the **rendered HTML** in `dist/` — what actually gets crawled.
- A round checker against the **content modules** (`docs/press/round-1/` scratch, `node
  --experimental-strip-types`), because on this site the typed blocks are the source of truth: the
  JSON-LD is generated from the same objects the reader sees, and the rendered `<article>` region
  folds the FAQ, the related cards and the breadcrumb into any word count taken from HTML.

| # | Check | Result |
|---|---|---|
| 1 | Word count, 800–1,000 body words | **PASS** — 21/21 inside the band (964–1,000). Measured across `answer` + headings + paragraphs + lists + steps + table + callouts + cta, FAQs excluded |
| 2 | H1 present, unique, carries the focus keyword | **PASS** |
| 3 | Key takeaway 40–60 words, first block | **PASS** — 21/21 |
| 4 | Answer-first under every H2 (40–70 words, stands alone) | **PASS** for the round. The 9 **pre-existing** live articles fail this check — recorded below, not introduced here |
| 5 | 5–7 H2 sections | **PASS** — 21/21 |
| 6 | Structured block (table or comparison list) | **PASS** — every article carries at least one table |
| 7 | FAQ count 6–10 | **PASS** — 7–10 per article |
| 8 | FAQ parity with schema | **PASS by construction** — `FAQPage` is generated from `article.faqs`, the same array the page renders. They cannot diverge |
| 9 | Meta title ≤60, unique site-wide | **PASS** for the round (30–56 chars). 6 live articles exceed 60 — pre-existing |
| 10 | Meta description ≤155, unique | **PASS** for the round (117–154). 4 live articles exceed — pre-existing |
| 11 | Canonical absolute and self-referencing | **PASS** — built from `localeUrl()`, verified on rendered pages |
| 12 | OG set complete | **PASS** — type/title/description/url/image/locale all present |
| 13 | OG image reachable | **PASS locally** (`/jarncap.png`, the site-wide social image, is a real file in `dist/`). Per-article OG images were **not** generated — see "Deliberate deviations" |
| 14 | Twitter card | **PASS** |
| 15 | hreflang | **PASS, with an intentional rule** — 12 grouped articles emit a full cluster plus `x-default`; the 9 single-language articles emit **no** hreflang, by D14 |
| 16 | JSON-LD valid | **PASS** — every round page parses to `@graph` with `Organization` + `BlogPosting` + `FAQPage` + `BreadcrumbList`. `press_gate.py` reports these as missing on all 30 blog pages; that is a **runner limitation** (it does not read `@graph`), verified by parsing the rendered JSON directly |
| 17 | Entity `@id` for author/publisher | **PASS** — both resolve to `${SITE_URL}/#organization` |
| 18 | Internal links out ≥3 | **PASS** — 4–5 per article, all same-locale, all resolving to real routes |
| 19 | Internal links in | **PASS** — every new article is linked from its locale's blog index, and each of the 9 live articles now carries one `related` link into the round (D16) |
| 20 | Anchor text | **PASS** — no "click here", "read more" or bare URLs; two positional "here" anchors were found by the reviewer and fixed |
| 21 | Images | **PASS** — 14 WebP, all 1200×900, 21–44 KB each, alt text on every one, width/height emitted |
| 22 | Slug native script per language | **PASS** — Malay slugs in Malay, Arabic slugs transliterated in Latin per the site's existing convention (`asal-al-zawjayn`, `kayfa-tamiz-al-asal-al-asli`) |
| 23 | Slug drift | **N/A** — this repo has no slug registry to drift against. `getStaticPaths()` reads the article modules directly, so a slug cannot disagree with its route |
| 24 | Sitemap | **PASS** — 48 locs (18 page + 30 article), up from 27. `sitemap.xml.ts` was patched this round because it enumerated `ARTICLE_GROUPS` and would have shipped 9 articles unlisted (D6) |
| 25 | Route reachable | **PASS locally** — 49 pages built, every new route present in `dist/` |
| 26 | Existing project gates | **PASS** — `banned-terms.mjs` (src **and** `--dir=dist`), `check:ai`. The dist mode was **failing before this round** and was fixed (D13) |
| 26a | Focus-keyword uniqueness within the round | **PASS** — 21 unique focus keywords, none colliding with the 9 live ones |
| 26b | Round payload ceiling (2.5 MB) | **PASS** — 434 KB of new images |
| 26c | Rollback recorded | **PASS** — `ROLLBACK.md`, pre-round sha and the 27 live URLs captured before Stage 5 |

### Runner findings that are not defects

- **`schema-article` / `schema-faqpage` / `faq-count` fail on all 30 blog pages.** `press_gate.py`
  looks for top-level `@type` and does not traverse `@graph`. Parsed directly, every round page
  carries all four nodes. Do not "fix" the pages.
- **`word-count` fails on 26 pages.** The runner counts the whole `<article>` region — FAQ answers,
  related cards and breadcrumb included — which adds roughly 400–600 words. Body copy is in band.
- **`image-dimensions` warns on all 30.** One image lacks width/height: the store-modal sticker in
  `StoreModal.astro`, a decorative image inside a hidden modal. Pre-existing, site-wide, not part of
  this round.
- **`no-owner-facing-leak` fires once**, on `where-to-buy-raw-honey-kuala-lumpur`, matching the
  string `"I cannot"`. It is the article quoting what an honest seller may say —
  *"I cannot tell you" is a fair answer; an invented country is not.* Not a leak.

## Judgement — adversarial review

Three independent reviewers, one per language, each briefed to assume something was wrong. They
found real defects; all were fixed and re-verified.

**The five that mattered most:**

1. **A fabricated feature.** Both the English and Malay buying guides told readers the retail page
   carries *map links* — eight mentions between them, three inside `FAQPage` schema. There is no
   map anywhere in the repo. Removed.
2. **A cross-surface contradiction on crystallisation.** `llms.txt` (×3), `why-us` (×3) and the live
   "real vs fake honey" articles called crystallisation *a sign of authenticity*; the new storage and
   expiry articles said it proves nothing either way. The accurate line — raw honey crystallises, it
   is not a fault, and on its own it does not prove a jar is genuine, because a syrup-heavy blend
   granulates too — was applied to all nine surfaces so the round ships one answer, not two.
3. **Inverted physics, in three languages.** Articles had comb and nut pieces sinking. Beeswax is
   about 0.95 g/cm³ and nut kernels about 1.0, against honey at about 1.4 — they rise. Corrected in
   the articles and in the Arabic `llms.txt` line that said the same thing.
4. **A product-fact contradiction.** The site publishes that the walnut and almond are **ground into**
   the blend and cannot be separated; a dozen passages across all three languages described visible,
   biteable nut pieces — and the Malay buying guide turned it into a *verification test* a buyer
   would fail on genuine product. One Arabic article also built a choking caveat on it. All aligned
   to the published fact.
5. **A wrong fact about a competitor category.** The Manuka article stated MGO and UMF both describe
   "one New Zealand honey". UMF is the New Zealand licensing scheme; MGO is not country-tied and
   Australian producers sell MGO-graded manuka. Corrected, including the cost argument that rested
   on it.

Also fixed: an invented visual authenticity test ("real comb is never flat" — cut comb is drawn on
flat foundation, so this would make a buyer reject genuine comb); a stock promise the map row
banned; invented customer-frequency social proof ("this question arrives every week"); a figure
attributed to a search query that was never run; ~20 answer paragraphs that collapsed when read
alone; duplicate FAQ entities competing with live pages; four thin H2s; and a toddler-safety
sentence that went past the standing infant rule into advice.

**Caught earlier, by a writer rather than a reviewer:** the English research file carried a
"335 MT production / 803,000 kg demand" pair. The writer fetched the source PDF, found neither
figure in it, and refused both — using only figures the paper states with their years. A fabricated
number that survived the research stage was stopped at the writing stage.

## Deliberate deviations from the article spec

| Deviation | Why |
|---|---|
| One lead image per article, no inline images, no per-article OG image | The site's own convention, and this host collapses on request count (29→2 first-paint requests is what halved LCP). Blog cards reuse the same file. The site-wide OG image is unchanged |
| Four articles do not carry the exact focus-keyword string in their meta description | "How to Store Honey **in** Malaysia" is how a person writes it. Exact-substring placement would mean stuffing; the keyword is in the title, H1, answer block, a heading and the first 100 words |
| Single-language articles emit no hreflang and no `x-default` | hreflang describes a cluster; one page is not a cluster (D14) |
| Fact sheets are the demand-file candidate sections plus the map row, not 21 separate files | The demand sections already carry sourced evidence, competitor gaps and per-topic risks (D11) |

## Could not run — recorded, not passed

| Check | Status |
|---|---|
| **Search Console demand data (Stage 1)** | **NOT RUN.** The Cogny MCP free call quota for the period is exhausted (next reset 1 Sep). No GSC queries, impressions or positions informed this round; topic selection rests on live SERP research only, and every claim in the demand files carries its URL and pull date |
| **Keyword volumes** | **NOT AVAILABLE.** No keyword tool on this machine. No volume figure appears anywhere in the map — demand is evidenced by SERP composition, competitor thinness and observed query phrasings |
| **`scripts/qa/image-audit.mjs`** | **NOT RUN as written** — it targets a dev server and the six standalone pages, not blog articles. Its three assertions were checked instead against the **live** article and index pages in a real browser at 375 px: every image decoded (`naturalWidth > 0`), no deferred image was left unswapped, and the 1200×900 figures sit in a 4:3 frame so nothing is cropped |
| **Live checks (37–45)** | **RUN — all pass.** See the live section below |

## Pre-existing failures this round did not introduce

Recorded so the next round does not mistake them for its own work:

- The 9 live articles fail answer-first (three H2s each are followed by a list or table rather than a
  standalone answer paragraph), and 6 titles / 4 descriptions exceed the length limits.
- `StoreModal.astro`'s sticker image has no width/height.
- `llms/ar.txt` carries a "±5% weight variance" claim whose source is not in the repo.
- The Netlify twin (`suburhoney.netlify.app`) is still live, indexable, and serves an older build
  with no canonical tag. It duplicates every URL this round adds. Outside the repo; owner's call.

## Live — after deploy (2026-08-20)

Deployed over FTPS: **142 files, SIZE-verified 142/142, 0 failures.**

| # | Check | Result |
|---|---|---|
| 37 | Each new URL serves the article | **PASS — compared by bytes, not status.** All 21 URLs return 200 and are byte-identical to the local build. Each also carries its own canonical tag and its lead image reference |
| 38 | No redirect hop | **PASS** — redirects were not followed; every URL answered 200 directly |
| 39 | OG / article images serve as images | **PASS** — sampled three round images: `image/webp`, byte-identical to the local files |
| 40 | Rendered HTML carries the meta | **PASS** — canonical, hreflang, OG and JSON-LD are all in the served HTML, not injected client-side |
| 41 | Sitemap fetches and includes the new URLs | **PASS** — live `/sitemap.xml` is 200, 48 locs, and contains the round's slugs in all three languages |
| 42 | IndexNow accepted | **PASS** — 48 URLs submitted and accepted |
| 43 | Payload budget | **PASS** — 434 KB of images added against a 2.5 MB ceiling; `dist/` is 6.6 MB |
| 44 | No owner-facing text leaked | **PASS** — the one hit is the article quoting an honest seller's `"I cannot tell you"`, not a leak |
| 45 | Mobile render at 375 px | **PASS — looked at, not assumed.** Five live pages (en/ms/ar article + en/ar blog index) at 375×812: one H1 each, zero unswapped deferred images, zero broken images, no sideways scroll (`scrollWidth` exactly 375), and every lead image decoded at 1200×900. Arabic RTL screenshot reviewed |

**One defect the byte check caught that a status check would not have.** The Arabic hot-water
article served 200, byte-perfect — and with no lead image. Its group is Malay + Arabic with no
English member, so `getAssetKey()` could not resolve a shared canonical slug and fell back to the
article's own slug, while the shared image was filed under the Malay one. Fixed by filing the image
under both keys, rebuilt, redeployed and re-verified. This is exactly the class of failure that
"200 OK" hides.

### Surfaces re-checked live

`/llms.txt` 34,546 B · `/llms-ar.txt` 35,434 B `text/plain; charset=UTF-8` · `/llms-ms.txt`
34,297 B · `/llms-full.txt` 104,675 B · `/robots.txt` 1,175 B · `/about.md`
`text/markdown; charset=UTF-8`. All 200. The article index inside each brief is generated, so all
21 new articles are listed in their own language's brief.
