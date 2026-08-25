# PRESS round 3 — gate report

18 articles: 6 English, 6 Malay, 6 Arabic. Recorded 2026-08-25.

**Reporting rule observed:** every check below says pass, fail, or *why it could not run*. A
silently skipped check reads as a pass, so nothing is omitted.

---

## The headline: the gate itself was wrong three times, and a control caught it

Before believing a single finding, the mechanical gate was run against **`en/how-to-store-honey-malaysia`,
live and correct since round 1**. It failed four checks. That is the whole argument for control runs.

| What the gate reported | What was actually true | Fix |
|---|---|---|
| `schema-article: <none>`, `schema-faqpage: missing` | The page ships **one** `<script>` containing an `@graph` with `Organization`, `BlogPosting`, `FAQPage` (10 questions) and `BreadcrumbList` — which is the *right* way to publish a connected entity graph. The gate only read each script's top-level `@type` | `bin/press_gate.py` now flattens `@graph` before reading types, and `faq-count` reads the flattened nodes |
| `hreflang-present: <none>`, `missing x-default` on single-language articles | PRESS non-negotiable 4 and D14: a demand-led round deliberately ships articles that exist in one language only, and annotating a lone page with a self-referencing hreflang claims a cluster that does not exist. The gate was failing pages for obeying the design | Zero hreflang is now a **WARN**; `x-default` is demanded **only** where the cluster has an English member |
| `word-count 1545 (band 800–1060)` | The brief's 800–1,000 band **excludes** FAQs; the gate counts the rendered region, which **includes** them. Two tools, one band, different measurements | Band recalibrated empirically — see below |

### The word band, derived rather than guessed

All 48 live articles were measured on the gate's own counter: they span **747–1,545 words**. The band
is therefore **740–1,560**, and round 3 spans **1,336–1,511** — inside the live range and near the
top, which is what the brief asked for ("aim ~950 draft words; the live articles are long-form and a
thin round reads as a quality drop").

---

## Mechanical checks — 18/18 pass

`python bin/press_gate.py <18 rendered files> --min-words 740 --max-words 1560` → **exit 0, 0 failures.**

Run against **rendered HTML in `dist/`**, never source templates.

Word count · H1 · key takeaway · answer-first under every H2 · section count · structured block ·
FAQ count · FAQ/schema parity · meta title · meta description · canonical · robots · full OG set ·
Twitter card · hreflang · JSON-LD validity · entity `@id` · internal links out · anchor text ·
images · slug · sitemap · route reachable — all pass on all 18.

**Warnings, all deliberate and all shared with the live corpus:** single-language pages declaring no
hreflang (by design), Malay+Arabic clusters with no `x-default` (by design, D14), and an
`image-dimensions` warning the control articles produce identically.

## Project gates

| Gate | Result |
|---|---|
| `node scripts/ai/facts-sync.mjs --check` (`check:ai`) | **PASS** — and it was **red before this round**, permanently. See D24: CRLF checkout vs LF generator, not content drift. Fixed |
| `node scripts/qa/banned-terms.mjs` (src) | PASS |
| `node scripts/qa/banned-terms.mjs --dir=dist` | PASS |
| `npm run build` | PASS — 85 pages |
| Sitemap | **66 → 84 locs**, all 18 new URLs present with real `lastmod` |
| `npx tsc` | **COULD NOT RUN** — no TypeScript in this project's `node_modules`, and `@astrojs/check` is not installed. Type safety rests on the Astro build plus per-file runtime shape validation against `types.ts`. Stated rather than skipped |
| `node scripts/qa/image-audit.mjs` | **2 failures, both checked and dismissed** — see below |

### `image-audit`: checked, dismissed, evidence recorded

It reported `hero-bg-latin-portrait.webp` and `ritual-bg-latin.webp` as "did not load" at a 390 px
viewport. Both are **homepage background plates round 3 never touched**, and both serve **HTTP 200
with byte-identical size** to the local file. It is the audit's own artefact on `data-src`-deferred
background images at that viewport, not a defect. Not "fixed" — a round that edits a correct file to
satisfy its own report has damaged the site.

---

## Adversarial review — 3 reviewers, 14 blockers, all fixed

Each reviewer was given the live corpus **and the `llms*.txt` files**, because a content round fails
against the site's own published copy, not against a style guide.

### The four that matter

1. **A wrong number that would have been the round's most-quoted line.** `en/baking-with-honey-malaysia`
   published "about 80 g of honey per 100 g of sugar" — a **volume** ratio carried into **mass**.
   Verified: 1 cup honey = 340 g, 1 cup sugar = 200 g → **≈ 128 g per 100 g**. The article's own
   callout warned against exactly this three blocks below where it made it. Root cause: it was the
   only article in the round whose spine had no entry in `FACTS-VERIFIED.md`. A baking section now
   exists with the arithmetic written out (D36).
2. **Fabrication by denial.** `ar/hadiya-min-malizia-lil-ahl` denied three published facts — a bulk
   pathway, shipping abroad, and the channel count. All three exist on the site. **Root cause was
   this round's own facts brief**, which inherited a false negative from round 2. Corrected, and the
   same denial was fixed on a **live** round-2 article that had shipped with it (D37).
3. **Both G8 articles called natural darkening a defect**, contradicting `llms/ms.txt` in four places
   and a live article the page itself links to (D38).
4. **One article was a translation of its partner and one contradicted its partner** — both hreflang
   defects. The contradiction came from an over-tight instruction in this round's brief (D39).

### Findings checked and dismissed — three of them

Reported in good faith, verified false, **not acted on**. Recorded so round 4 does not rediscover
them and "correct" correct copy: the nut-settling sentence that is right because the medium is a cup
of tea (D32); the image-audit failures above; and a "three channels" count that is a deliberately
scoped subset in an article about buying **online** (D40).

### The fix round introduced three regressions, and the re-run caught them

Two articles grew past the word band and one meta description reached 160 characters. **A fix round
is exactly where regressions enter**, which is why the mechanical set re-runs after it. All three
corrected and re-verified.

---

## Round payload

| Item | Value |
|---|---|
| Ceiling set before Stage 4 | **2.2 MB** |
| Images added | **14 files**, 886×665, 14–37 KB each |
| Total added | **~0.3 MB** — comfortably inside the ceiling |
| Genuine reuse | 4 of 18 articles ship without a new file: three share a partner's image via `getAssetKey()`, and `ms/madu-untuk-ibu-mengandung` reuses the existing round-2 pregnancy image outright |

Images are declared at their **real** 886×665, the free provider's hard cap, confirmed by two
control generations that both returned that size whatever was requested (D28).

---

## Open items for the owner — neither is round 3's to decide

1. **Jar size and the ±5% tolerance.** `llms/{en,ms,ar}.txt` publish "250 g, 400 g and 500 g jars,
   weight tolerance ±5% printed on every label" and two launch articles print "250 g". None of it
   exists in `site.ts` or `AI-FACTS.yml`, and round 2's brief lists jar size among facts that do not
   exist. Round 3 neither repeated nor contradicted the claim and rewrote nothing — deleting a
   possibly-true published fact is as much a decision as inventing one (D26).
2. **The Netlify twin.** `suburhoney.netlify.app` still serves a duplicate of the whole site with no
   canonical and no robots.txt, and now duplicates 18 more URLs. Outside the repo, open since round 1.

A third, smaller one: `llms.txt`'s Benefits index line still reads "fertility, stamina, male
vitality", which sits closer to the ceiling than anything this round shipped. Pre-existing and
already flagged to the owner in an earlier pass; not changed here.
