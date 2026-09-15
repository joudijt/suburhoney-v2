# PRESS Round 9 — Keyword map

Off `master` @ `484a9d6` (round 8 merge), branch `press-round-9`. 2026-09-15.

## Stage 1 finding: GSC has real signal now, but no new topic

Round 7's internal-linking fix (D66) is finally showing: `sc-domain:suburhoney.com` now returns
**33 query rows / 28 pages with impressions**, up from round 8's single row 5 days ago — genuine
indexing progress. But every query with real volume is a variant of a keyword already explicitly
claimed by a live `primaryKeyword`/`keywords[]` (verified, not assumed): the calorie-per-tablespoon
cluster (12 variants) → `honey-calories-and-sugar-content` already owns `"honey calories per
tablespoon"`; the diabetes cluster (7 variants) → `honey-and-diabetes` already owns `"can diabetics
eat honey"` and `"type 2 diabetes honey"`; pregnancy, kelulut-vs-tualang, expiry, "best time to eat
honey" — all already live and now simply being found. **This is evidence the site is ranking
better, not a content gap.** No new GSC topic survives a second round running. Broadened to Keyword
Planner again, same recovery as round 8 (owner already approved this pattern).

## Keyword Planner research (Malaysia geo `2458`)

Checked every candidate against `primaryKeyword:` (strict grep, not body text — round 8's two
misses both came from grepping body text instead of the field that actually matters) across all
138 live articles before shortlisting.

| Cluster | Head term | Vol/mo | Comp | Tail | Live coverage |
|---|---|---|---|---|---|
| MS — honey + garlic | `khasiat bawang putih dan madu` | 140 | MED | `cara makan madu dan bawang putih` 70, `kebaikan bawang putih dan madu` 20, `kebaikan madu dan bawang putih` 20 — biggest single cluster this project has found | **None** |
| MS — honey + star anise | `kebaikan bunga lawang` | 40 | LOW | thin but clean | **None**. Bunga lawang is one of SUBUR's ten named ingredients |
| MS — honey + nutmeg | `khasiat air buah pala` | 30 | LOW | `kegunaan buah pala dalam masakan` 20, `khasiat buah pala untuk kesihatan` 10 | **None**. Buah pala is one of SUBUR's ten named ingredients |
| EN — honey + coffee | `honey and coffee` | 110 | MED | — | **None**. `honey-in-hot-drinks-malaysia` covers tea, not coffee specifically |
| EN — honey + garlic | `honey and garlic benefits` | 210 | MED | biggest EN number this project has found | **None** |

**Rejected/excluded within the chosen clusters, not whole topics:**
- **`bawang putih dan madu untuk tahan lama`** (garlic+honey "to last longer") and **`khasiat
  bawang putih untuk lelaki`**-style variants — stamina/sexual-performance framing, same ceiling
  the `tenaga batin` cluster already excludes. The garlic article covers immune/cholesterol/blood-
  pressure folk claims only, never endurance or performance.
- **`madu dan bawang putih untuk batuk`** — cough-specific framing already owned by
  `madu-untuk-batuk-dan-selesema` (round 5). The garlic article does not lead with or emphasise
  cough; it may note garlic's general folk reputation without repeating the cough claim as its own.
- **`khasiat buah pala untuk lelaki`** (nutmeg "for men") — same stamina-adjacent framing, excluded
  from the nutmeg article.
- **Apple cider vinegar + honey** — real volume (`khasiat cuka epal campur madu` 40, `cuka epal dan
  madu` 20) but almost entirely HIGH competition with no clean LOW-competition tail, unlike the five
  chosen clusters. Weakest of the candidates found; dropped.
- **Nutmeg carries a real safety fact, not just a folk claim**: nutmeg contains myristicin, toxic in
  quantity (large doses cause nausea, hallucination, tachycardia). The article states this plainly —
  a small amount as a spice is fine, whole-nutmeg overdosing is a real and documented risk, not a
  fabricated caution.
- **Garlic-honey EN vs MS are NOT the same article in two languages.** MS is folk-remedy/immune
  literacy for a Malaysian home audience (the "khasiat" framing). EN is the fermented honey-garlic
  jar — a real, distinct English-language recipe/pantry trend (raw garlic cloves submerged in honey,
  left to ferment) — different content shape, different sourcing, never translated from the other.

## Round-9 lineup — 5 articles, all single-language, no hreflang group

| # | Lang | Slug | Primary keyword | Angle |
|---|---|---|---|---|
| 1 | ms | `madu-dan-bawang-putih` | `madu dan bawang putih` | Regulatory/label literacy for garlic+honey — immune/cholesterol/blood-pressure folk claims vs. what's verifiable, explicitly never a stamina or cough-cure claim |
| 2 | ms | `madu-dan-bunga-lawang` | `madu dan bunga lawang` | Star-anise ingredient literacy — SUBUR's own labelled ingredient, culinary use, minimal claim surface |
| 3 | ms | `madu-dan-buah-pala` | `madu dan buah pala` | Nutmeg ingredient literacy — culinary use plus a real excess-consumption safety caution (myristicin) |
| 4 | en | `honey-and-coffee` | `honey and coffee` | Purely culinary/practical — honey as a coffee sweetener, near-zero ceiling risk |
| 5 | en | `honey-and-garlic` | `honey and garlic` | The fermented honey-garlic jar — DIY pantry/recipe trend, distinct angle and sourcing from the MS article, no translation |

## Legal ceiling — load-bearing on 3 of 5

Same standing ceiling. Garlic and nutmeg both carry real folk-health claims (garlic: immunity,
cholesterol, blood pressure; nutmeg: sleep, digestion) — both articles report what's commonly
claimed vs. what's actually verifiable, never assert or imply SUBUR treats/cures/prevents anything,
no statute numbers in body copy. Star anise and both EN topics are low-risk culinary content.

## Facts

Same source of truth as every round: `src/config/site.ts` + the ten-ingredient list (garlic is
NOT a SUBUR ingredient — general education, same footing as round 8's lemon; star anise and nutmeg
ARE both named SUBUR ingredients, same footing as round 8's ginger).

## Images — reuse-only

Assigned in Stage 4 from the existing 18-frame library.

## Lessons carried from round 8, applied to this round's writer briefs

1. **Target 800-950 rendered words, not 900-1050** — round 8's briefed band produced 1100-1342
   rendered, needing 2-4 trim cycles per article. Aiming lower on the first draft removes that.
2. **State plainly: do not restate the same fact in three places.** Every round-8 overage traced to
   a "how to use it" section, a dosage FAQ and a closing paragraph all repeating store locations,
   serving size and the same disclaimer in different words.
3. **FAQ answers 40-55 words, not up to 70** — six FAQs at the top of the band alone is 300-420
   words before the body even starts.
