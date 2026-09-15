# Round 7 — gate report

15 articles: 8 English, 7 Malay, 0 Arabic (D63 — the supplied keyword list carried no Arabic
demand). All fifteen ship single-language, in no `ARTICLE_GROUPS` entry (D64).

## Incident mid-round: homepage 500, found and fixed before this report

Adding `set:html` to `src/components/sections/Faq.astro` (so a homepage FAQ answer could carry
the new inline links) put a JS block comment across three lines that contained the literal
sequence `*/` inside the path `i18n/locales/*/common.json`. That closed the comment early and the
Astro compiler failed on the orphaned text, taking `/en/`, `/ms/` and `/ar/` down with a 500 on
every request. Caught by direct verification of the homepage after wiring, not by the article
gate (which only checks `/blog/` routes). Fixed by rewording the comment
(`i18n/locales/{lang}/common.json`); all three homepages re-verified 200 after the fix. Full tree
diff re-checked afterward — all 71 changed files are accounted for by this round's own work
(money-page fixes, sibling `related` swaps, the two template fixes, 15 new articles, the registry,
figure assignment, docs). Nothing unexplained in the diff.

## Mechanical — `scripts/qa/press-gate.mjs` (new this round)

Built fresh because no reusable probe existed in `docs/press/round-5/` or `round-6/` beyond a
description of the `@graph` bug. Flattens `@graph`, decodes HTML entities on **both** sides of the
FAQ-schema-vs-visible-text parity check (an entity-encoding mismatch there produced 5 false
failures on the first run — the same class of defect as round 5's `@graph` bug, caught the same
way: a known-good control run first).

**Control: `en/is-honey-halal` (live since round 6) + `ms/adakah-madu-halal`.** Both PASS on every
check, including the two the round intentionally accepts a WARN on:

| Check | Result |
|---|---|
| Word count (rendered region, 800–1,060 band per `gates.md`) | 15/15 PASS, final range 930–1,059 |
| H1, key takeaway (40–60w), 5+ H2 with standalone answer paragraphs | 15/15 PASS |
| Structured block (table or term-list) | 15/15 PASS |
| FAQ count ≥6, FAQ schema = visible text | 15/15 PASS |
| Meta title ≤60, description ≤155 | 15/15 PASS |
| Canonical self-referencing, robots index,follow | 15/15 PASS |
| OG set + og:image byte-checked (not just 200) | 15/15 PASS |
| Twitter card | 15/15 PASS |
| hreflang + x-default | **0/15 — WARN by design.** No article is in an `ARTICLE_GROUPS` entry (D64); `gates.md`'s rule is that a language the article was never written in is a WARN, not a FAIL |
| JSON-LD valid, `@id` entities resolve | 15/15 PASS |
| Internal links out (≥3, trailing slash, no dead targets) | 15/15 PASS — audited separately, see below |
| Internal links in (not an orphan) | 15/15 PASS — every article gains ≥1 inbound link from a page that predates this round |
| No escaped `<a href>` markup | 15/15 PASS, **and the pre-existing defect on 40 live articles is fixed** (below) |
| No owner-facing text leaked (TODO/FIXME/brief fragments) | 15/15 PASS |
| `npm run check:ai` | PASS, unchanged |
| `node scripts/qa/banned-terms.mjs` | PASS on `src/`, 0 hits after 2 paraphrase fixes (below) |
| Sitemap: 15 new locs, `lastmod` present | PASS, 133→148 |
| llms.txt / llms-ms.txt list the new articles | PASS |
| Focus-keyword uniqueness within the round | PASS — `royal honey malaysia` appears twice, once EN once MS, one per language per non-negotiable 8 |
| Round-wide cannibalisation vs. all live articles | PASS — programmatic check against 1,063 live terms, 0 exact collisions (see `ROUND-7-MAP.md`) |

## Pre-existing live defect found and fixed (not part of this round's new content)

**64 escaped `<a href>` anchors across 40 live article pages**, all three languages, shipped since
round 5. `[lang]/blog/[slug].astro` interpolated `{faq.a}` as plain text while every FAQ answer
containing a link (round 5 onward) carries real `<a href>` markup — readers saw the literal tag as
text and the link never worked. The four standalone page routes already used `set:html` correctly;
only the article route and the homepage `Faq.astro` did not. Fixed in both. Verified against
rendered HTML: 0 escaped occurrences site-wide after the fix, vs. 64 before.

## Judgement — adversarial review

Money pages (`src/content/pages/`), never reviewed across rounds 1–6 per D44, were reviewed this
round by an independent agent. 15 findings, all verified against the file before fixing, all
applied:

- WhatsApp listed as a 5th purchase channel on `benefits.ts` (all 3 languages) and the homepage
  FAQ — contradicts `retail.ts`'s own "no fifth channel" position. Fixed.
- English `why-us.ts` table cell still read crystallisation as "a sign of raw honey" (the same
  claim D44 removed elsewhere). Fixed to match the MS/AR framing.
- Malay `retail.ts` denied overseas shipping outright ("dalam Malaysia sahaja") while the same
  paragraph then tells overseas buyers to check the platforms — self-contradictory. Fixed.
- Arabic `benefits.ts` ingredient arithmetic: "ten other ingredients" (would total eleven) vs.
  "nine other" everywhere else on the same page and in EN/MS. Fixed.
- An invented, unsourced "most-searched ingredients for reproductive wellness" ranking (EN/MS/AR
  `benefits.ts`). Fixed — kept only the checkable half.
- "Best value per gram" and "most common/popular size" on `retail.ts` (all 3 languages) — price
  and popularity claims neither the site nor this round can source. Fixed.
- "Hand-filled" — an unverified production claim. Fixed.
- An implied sales-volume/trust claim on `why-us.ts` ("sells jar after jar", "families come back
  to"). Fixed to a plain factual statement.
- `contact.ts` (all 3 languages) promised a phone/email channel "being set up," contradicting
  `AI-FACTS.yml`'s published WhatsApp-only contact line. Fixed.

**Not fixed, escalated instead (D68):** the homepage FAQ / benefits-page fertility-vitality-stamina
copy is live marketing text across three languages and sits at or over the ceiling on its own
terms. Round 7's writer brief forbids any *new* article from repeating, extending, or issuing a
verdict against that copy — but rewriting the owner's existing homepage sales copy is outside a
content round's mandate and is reported here for the owner's decision, not silently changed.

**Round-specific adversarial checks, run directly against the 15 new files:**
- No named competitor brand (Etumax, Vital Honey, Kingdom Honey, Black Horse, Royal Honey VIP)
  appears within the same sentence, paragraph or FAQ answer as "SUBUR" — grepped, confirmed clean.
- No fertility/vitality/potency/stamina/libido claim in the royal-honey or tenaga-batin clusters —
  grepped; the one hit is a direct, attributed quotation from French Customs describing what was
  seized ("so-called aphrodisiac honey"), reporting a regulator's own wording, not a claim the
  article or SUBUR makes.
- No statute/section numbers, no RM figures, no penalty language anywhere in the six
  highest-risk articles — grepped, zero hits.
- No claim or implication that SUBUR is NPRA-registered, was tested, or carries a MAL number.
- Malaysia's own record (no honey found with sildenafil/tadalafil; the one entry on KKM's list is
  `MADU ADUNAN HERBA` / dexamethasone) stated identically and correctly across all three articles
  that touch it.

## Banned-terms fixes during wiring

Two Malay phrases in `cara-semak-produk-berdaftar-kkm.ts` and `dakwaan-tenaga-batin-pada-produk.ts`
used "produk tradisional" / "ubat tradisional," which the site's own `banned-terms.mjs` gate
correctly flags (the word is banned everywhere, including as NPRA's own category name). Reworded
to "ubat herba (berdaftar dengan NPRA)" without changing the regulatory meaning. Re-ran: 0 hits.

## Internal-linking audit (separate script, whole corpus)

Programmatic sweep of every `href="/en|ms|ar/..."` in every article and money page: 0 dead links,
0 missing trailing slashes, every `related[]` slug resolves in its own locale. Thirteen live
sibling articles each had exactly one `related` slug swapped (D16 convention — grid stays at two)
to link forward into the new cluster hubs. Seven existing pages (`/en/retail/`, `/en/benefits/`,
`/en/why-us/`, `/ms/retail/`, `/ms/benefits/`, `/ms/why-us/`, both homepage FAQs) gained inline
inbound links into the new articles — see `ROUND-7-MAP.md` for the full table.

## Images

Zero bytes added. All 15 new figure keys assigned to existing frames from the 18-frame library;
the six `royal-honey`/`tenaga-batin` articles deliberately use frames with no branded jar and no
people in them (comment in `assign-article-figures.mjs`), so no image visually implies a claim the
copy refuses to make.

## Payload

0 KB added (no new images, no new JS). Well under the 2.2 MB round ceiling.

## Not run this round

Stage 7 (build/deploy/IndexNow/live verification) — out of scope per the hard stop. `npx tsc`
resolved to a stub binary with no local TypeScript install and exited 0 having checked nothing;
flagged, not treated as a passing typecheck.
