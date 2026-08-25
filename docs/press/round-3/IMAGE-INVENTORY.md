# PRESS round 3 — image inventory

Stage 4a. **Reuse before generating** is the rule. This file records what the repo actually holds,
what is already spoken for, and therefore what round 3 has to generate. Assignment table is
appended at 4e, after the topics are fixed.

## Round payload ceiling — set before Stage 4 begins

**2.2 MB** for the whole round. The site's entire deployed payload is ~4.5 MB and its ranking
depends on staying fast; 18 lead images at the site's ≤110 KB per-image budget is a worst case of
~2.0 MB. Measured against this ceiling in GATE.md.

## What the repo holds

### Article lead images — 33 files, all already spoken for

`public/images/article-*.webp`, one per article key, assigned across the launch nine, round 1 and
round 2. **An image already carrying an article's hero stays with that article** — none of these
are available to round 3.

### Supplied photography — 3 frames, all already assigned

| File | Real pixels | What is actually in the frame | Assigned to |
|---|---|---|---|
| `public/images/article-couples.webp` | 1252×939 | the SUBUR jar styled as a couple's gift | `honey-for-couples-malaysia` (launch) |
| `public/images/article-black-seed.webp` | 800×600 | black seed / habbatus sauda with honey | `black-seed-honey-benefits` (launch) |
| `public/images/article-pure-honey.webp` | 1536×1152 | honey pour, purity/authenticity framing | `how-to-identify-pure-honey` (launch) |

These are the only true photographs of the product on the site. All three are heroes of live
articles, so 4b's "an image already carrying an earlier round's hero stays with that article"
applies to every one of them.

### Product shots — same jar, four crops of one photograph

| File | Real pixels | Frame |
|---|---|---|
| `public/jar.webp` | 400×639 | the jar, portrait, no cap |
| `public/jarncap.webp` | 400×639 | the jar with cap — also the sitewide OG image |
| `public/jarncap.png` | 400×639 | PNG twin of the above, kept for social crawlers |
| `public/images/honey-sticker.webp` | 418×320 | cut-out sticker treatment |

**400 px wide is the hard limit here.** A 4:3 article lead renders in a card frame far wider than
that, and the pipeline never upscales. These cannot honestly become article leads.

### Page and background art — not article-usable

`page-benefits.webp` (1536×1024), `page-benefits-square.webp` (1024×1024), `page-retail.webp`
(1536×864), `page-why-us.webp` (1536×864) are the three money pages' own hero figures — taking one
for a blog article would strip a page that is already using it.

`hero-bg-*` (10 files) and `ritual-bg-*` (4 files) are **locale-specific background plates**, built
per aspect ratio for the homepage hero and ritual sections. They are backgrounds, not subjects: put
one in a 4:3 article card and it reads as an empty texture. `bee-cursor.webp` (96×74),
`honey-jar-sticker.webp` (127×144) and `logo-8.webp` (171×80) are UI chrome.

## Honest conclusion: the pool cannot serve this round

The reusable photograph pool is **three frames, all three already heroes**. There is no fourth
distinct subject anywhere in the repo. Round 3 needs 18 leads, so **18 must be generated** — the
same position round 2 was in, and it is not something a different crop box can solve. This is worth
saying plainly rather than shifting crops by a few per cent and calling it reuse.

Recording it as a standing item for the owner: **a photo shoot is the only thing that changes this**
for round 4.

## Generation capability — measured this round, not assumed

`python bin/imgen.py --probe`, 2026-08-25:

- **`zimage` dead** — HTTP 401, expired ModelScope token. Third round in a row.
- **`pollinations` ok** — 0.3 s.

Two real control generations were run, not just the probe:

| Requested | Returned |
|---|---|
| `-W 1200 -H 900` | **886×665** |
| `-W 1600 -H 1200` | **886×665** |

The free tier hard-caps at 886×665 (~0.59 MP) whatever is asked for, exactly as round 2 found. So:

- every round-3 lead is **886×665**, ratio 1.332, which is inside `scripts/qa/image-audit.mjs`'s
  4:3 requirement
- `src/config/articleFigures.ts` must declare **886×665**, the real size, never the requested one
- do not "fix" this by upscaling to 1200×900 — that ships a blurred lie and the audit would still
  pass

The second control also confirmed the generator's hit rate is not 100%: a prompt for a raw comb
slab on slate came back as a glossy gelatinous block with malformed cells. Every generated file
gets looked at before it ships, and a miss gets a rewritten prompt — not a rewritten alt text that
describes an image the page is not showing.


---

## 4e. Assignment and provenance — what shipped

14 files generated, 4 articles carrying no new file. Every image is **886x665** and declared at that
real size in `src/config/articleFigures.ts`.

| Article | Asset key | Image | Reused or generated |
|---|---|---|---|
| en1 `is-honey-in-malaysia-fake` | own slug | `article-is-honey-in-malaysia-fake.webp` | generated |
| en2 `what-is-sidr-honey` + ar1 | `what-is-sidr-honey` | shared | generated (3 attempts) |
| en3 `honey-in-hot-drinks-malaysia` | own slug | own file | generated |
| en4 `baking-with-honey-malaysia` | own slug | own file | generated (3 attempts) |
| en5 `how-to-read-a-honey-label-malaysia` + ar4 | `how-to-read-a-honey-label-malaysia` | shared | generated (2 attempts) |
| en6 `why-is-honey-dark-or-light` + ms5 | `why-is-honey-dark-or-light` | shared | generated (2 attempts) |
| ms1 `tarikh-luput-madu` | own slug | own file | generated |
| ms2 `madu-kelulut-vs-madu-tualang` | own slug | own file | generated (2 attempts) |
| ms3 `madu-khalta` | own slug | own file | generated |
| **ms4 `madu-untuk-ibu-mengandung`** | `is-honey-safe-during-pregnancy` | **round-2 file** | **REUSED — no new file** |
| ms6 `madu-saffron` | own slug | own file | generated (3 attempts) |
| ar2 `naql-al-asal-fi-al-taira` | own slug | own file | generated (3 attempts) |
| ar3 `al-farq-bayn-al-asal-al-kham-wal-musaffa` | own slug | own file | generated (2 attempts) |
| ar5 `tariqat-amal-asal-bil-mukassarat` | own slug | own file | generated |
| ar6 `hadiya-min-malizia-lil-ahl` | own slug | own file | generated |

**Payload: ~0.3 MB against a 2.2 MB ceiling.**

## What the generator actually did — 8 of the first 14 were unusable

Worse than this provider's usual one-in-three, and the cause was the prompt, not luck. Two
reproducible failure modes, both worth carrying into future rounds:

1. **"photographic still life, natural daylight" produces soft, painterly, out-of-focus frames.**
   A shop shelf came back as a corked bottle with no label. Kelulut-vs-tualang came back as two jars
   of greenish liquid with a plant growing out of one, reading as olive oil. A honeycomb slab came
   back as a glossy gelatinous block with malformed cells. Replacing that suffix with **"crisp
   product photograph, everything in sharp focus edge to edge, clean studio lighting"** fixed the
   blur immediately.
2. **A graded range never once worked.** "Five jars from light gold to near black" returned five
   identical jars. "Three jars pale, amber, almost black" returned three identical jars. **The
   generator will not hold a gradient across repeated objects.** Two objects with one stated
   contrast does work — but only sometimes, and it still failed on kelulut-vs-tualang twice.

**A simple single subject has by far the best hit rate.** Every first-attempt success was one —
jars on a shelf, a cup of tea, a spiced jar, saffron threads on a dish, nuts beside a jar.

## The catch worth keeping: an image can contradict a published fact

One regenerated sidr frame showed **nut pieces settled at the bottom of the jars**. The site
publishes in three languages that comb and ground nuts are lighter than honey and **rise**. Shipping
it would have put a visual contradiction of the site's own physics on the page — the same class as
round 2's image of whole nut chunks against the "ground in, never whole" fact, in a different shape.
Nuts were removed from that prompt entirely. **Look at every generated file against the site's
facts, not just against the brief.**

## The alt-text reconciliation, and why it is mandatory

`figureAlt` is written before the image exists. Writers were briefed to describe the frame rather
than their argument and did — but nobody can describe a file that has not been generated. **17 of 18
alts had to be reconciled afterwards**, in both directions:

- **Image regenerated to match the alt** where the writers' frame was better. Both authors of the
  sidr pair and both authors of the dark-vs-light pair independently wrote "two jars side by side",
  which is a better comparison frame than the single jar and the three-jar gradient first prompted.
- **Alt rewritten to match the image** where the frame could not be made honestly. Two articles
  asked for a legible ingredient list and allergen line, and one for honey "weighed in grams on a
  kitchen scale" — a generator garbles text and numbers, so those images cannot exist. An alt
  describing readable text on an image that has none is exactly the defect this step prevents.

Neither direction is the default. The test is which of the two can be made true.

**Standing item for round 4, unchanged from 4a:** the repo still holds three real photographs, all
three already heroes. A photo shoot is the only thing that changes that.
