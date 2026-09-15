# PRESS Round 8 — Keyword map

Off `master` @ `2513465` (round 7 merge), branch `press-round-8`. 2026-09-15.

## Stage 1 finding: GSC alone is dry

**suburhoney.com's own GSC** (direct OAuth token, `sc-domain:suburhoney.com`, 16-month window):
one query total — `honey comb for sale near me`, 1 impression. Same single query round 7 already
found and built the honeycomb cluster + internal-linking fix around, 5 days ago — too soon to show
movement. Zero new signal.

**`sc-domain:madinah.com.my` proxy** (sibling retailer, same audience, round 3/7 precedent): pulled
1,000 rows, honey-relevant terms filtered out. Every one over ~20 impressions falls into one of
three buckets: already claimed by a live article (`yemeni honey`, `sidr honey`, `black seed honey`,
`arabic honey`, `kedai madu arab`/store-locator — covered since rounds 1–3), off the legal ceiling
(`honey remedy for relationship`, `aphrodisiac honey near me`, `honey for married couple/men` —
marriage-outcome/aphrodisiac, refused since D30/D61), or off scope (`al shifa honey`, `marai honey`,
`sumur honey` — a competitor's Yemeni-honey brand/region names, not SUBUR). **Zero clean topics
survive against 133 live articles.** Reported to the owner; approved broadening to Keyword Planner
demand, same recovery round 5 used (D-round-5, "seed the dishes, rituals and occasions").

## Keyword Planner research (Malaysia geo `2458`, this session)

Seeded honey + a use-case/occasion/pairing per the round-5 lesson, checked every candidate against
all 130 live articles' `primaryKeyword` + `keywords[]` arrays and slugs before shortlisting.

| Cluster | Head term | Vol/mo | Comp | Aggregate tail | Live coverage |
|---|---|---|---|---|---|
| MS — honey + lemon | `madu lemon` | 260 | HIGH | ~15 variants, mostly LOW/MED, ~150/mo combined (`khasiat madu dan lemon` 30, `kebaikan lemon madu` 30, `khasiat lemon madu` 90, `campuran madu dan lemon` 10…) | **None.** `lemon` does not appear in any article |
| MS — honey + ginger | `halia madu` | 260 | HIGH | ~20 variants, mostly LOW/MED, ~150/mo combined (`khasiat halia dan madu` 30, `khasiat air halia campur madu` 40, `cara buat halia madu` 40…) | **None.** `halia`/`ginger` does not appear in any article |
| MS — honey for cough | `madu kelulut untuk batuk` | 70 | HIGH | ~10 variants, ~250/mo combined (`madu habbatussauda untuk batuk` 90, `madu hilangkan batuk` 40, `madu boleh hilangkan batuk` 20, `cara minum madu kelulut untuk batuk` 30…) | **None.** No cough/batuk article exists |
| EN — honey as an energy source | `honey and energy` | 30 | HIGH | `honey as energy booster` 20, `honey gives you energy` 10 — ~60/mo combined | **None.** Distinct from the `tenaga batin` (sexual-vitality) cluster, which is a different claim entirely |
| EN — honey in breakfast/porridge | `honey and oats recipe` | 10 | MED | `porridge with honey` 10, `breakfast honey` 10, `honey toasted oats recipe` 10 — ~40/mo combined | **None.** `honey-during-ramadan-suhoor` is a different, dawn-specific occasion |

**Rejected candidates, recorded:**
- **Turmeric+honey** (`madu kunyit`) — the volume that exists is either skincare (`kunyit madu untuk
  muka`, off-scope per round-4 precedent) or womb/fertility-adjacent (`khasiat kunyit hidup untuk
  rahim`, off ceiling). What's left has no honey-specific angle strong enough to stand alone.
- **Honey-roasted nuts recipe** — real Keyword Planner volume (`spicy honey roasted almonds` etc.)
  but too close to the live `honey-with-nuts-malaysia` (already covers eating SUBUR's nuts, texture,
  toast). A recipe angle would read as the same article split in two.
- **Cinnamon+honey** — every variant with real volume (`madu kayu manis` 10, `kulit kayu manis dan
  madu` 10) is HIGH competition with almost no LOW-competition tail, unlike lemon/ginger/cough which
  each carry a real long tail. Weakest of the six candidates found; dropped for the stronger four.
- **Competitor product names** (`hurix madu`, `vitamax royal honey`, `al shifa honey`) — real
  volume, not SUBUR's own demand. Naming a competitor's product to rank for it is out of scope for
  a brand's own content.
- **Honey-lemon / honey-ginger as EN companions to the MS articles** — both have standalone English
  volume (`honey lemon water` 30, `honey ginger tea` 90) but pairing one keyword row across two
  languages at once is exactly the D39 translation-mirroring condition. Each language's articles in
  this round ship from its own demand only; no cross-language grouping.

## Round-8 lineup — 5 articles, all single-language, no hreflang group (same as D64)

**Two topics were caught and swapped mid-round, both real cannibalization misses in the initial
grep pass — recorded here rather than silently corrected.**

1. **`madu untuk batuk` (honey for cough) was already live.** `src/content/articles/ms/madu-untuk-batuk-dan-selesema.ts`
   has carried exactly this `primaryKeyword` since round 5 (2026-08-26), Cochrane-cited, infant
   warning included — everything the round-8 brief asked for, already shipped. Missed because the
   original corpus check grepped `porridge|oats|breakfast|bubur` and never `batuk|cough` on its own.
   **Swapped to `madu dan kayu manis`** (honey + cinnamon) — real but thinner Keyword Planner demand
   (`madu kayu manis` 10/mo HIGH, `kulit kayu manis dan madu` 10/mo HIGH, `khasiat serbuk kayu manis
   campur madu` 10/mo LOW), no live coverage, and cinnamon is one of SUBUR's own ten named
   ingredients — same regulatory-literacy treatment, explicitly naming and debunking the viral
   "Copenhagen University" cinnamon-honey myth rather than repeating it.
2. **`honey-in-your-morning-routine` (oats/porridge/toast) was one language away from a live
   translation-equivalent.** `src/content/articles/ms/resepi-sarapan-guna-madu.ts` (round 2) already
   owns oats, bread and school-lunchbox honey recipes in Malay — an English article on the same
   shape would have read as a same-content mirror even without a formal hreflang group, the weaker
   form of the D39 defect. **Swapped to `honey-and-yogurt`** — real EN demand (`honey greek yogurt`
   cluster 170/mo HIGH, `honey and yogurt` 50/mo MEDIUM), a genuinely different food category
   (dairy, not bread/oats), zero ceiling risk (purely culinary).

| # | Lang | Slug | Primary keyword | Angle |
|---|---|---|---|---|
| 1 | ms | `madu-dan-lemon` | `madu dan lemon` | Regulatory/label literacy: what the honey-lemon-water folk claim actually is, what's verifiable (vitamin C from lemon, simple hydration), what SUBUR does not claim |
| 2 | ms | `madu-dan-halia` | `madu dan halia` | Same pattern for ginger: gingerol/warming folk use vs. what's verified, a two-ingredient recipe, no disease claim |
| 3 | ms | `madu-dan-kayu-manis` | `madu dan kayu manis` | Regulatory/label literacy for cinnamon, incl. naming the fake "Copenhagen University" viral myth as a myth |
| 4 | en | `honey-as-an-energy-source` | `honey as an energy source` | Simple-carbohydrate/glycemic science — fast fuel, not stamina or vitality. Explicit non-overlap statement with the `tenaga batin` cluster |
| 5 | en | `honey-and-yogurt` | `honey and yogurt` | Practical/culinary, near-zero ceiling risk — a yogurt-bowl/parfait use case, distinct food category from the live Malay oats/bread recipe article |

## Legal ceiling — unchanged, load-bearing on 3 of 5

Market is Malaysia; food and its advertising may not claim to prevent, treat, reduce or cure any
condition. Cough, energy and the lemon/ginger "khasiat" framing all sit close enough to a folk
health claim that every one of the three MS articles and the EN energy article needs the same
regulatory-literacy treatment already established for `royal-honey-in-malaysia-explained` and
`dakwaan-tenaga-batin-pada-produk` (D61): report what is commonly claimed and what a real source
verifies, never assert or imply SUBUR treats, prevents or cures anything. No statute number,
sub-regulation or penalty figure in body copy. The cough article in particular must carry a
"see a doctor if it doesn't resolve" caveat and never claim symptom relief as a SUBUR product effect.

## Facts available

Same source of truth as every prior round: `src/config/site.ts` (two Selangor branches, WhatsApp,
Shopee, TikTok Shop, ingredient list — no price, no email, no rating, no customer count, no
certification). None of the five new topics needs a fact beyond the ingredient list and the standing
ceiling; no new verified-facts file is needed beyond citing WHO/Cochrane honey-and-cough evidence
(same sources round 5 verified on avoliveoil: WHO 2015 free-sugars guideline is NOT used here since
this round makes no sugar-quantity claim).

## Images — reuse-only, per standing ruling

Assigned in Stage 4 from the existing library (18 frames / 138 figure keys after this round). No
generation.
