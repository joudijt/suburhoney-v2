# Round 6 — verified facts

Six topics × 3 languages = 18 articles. Cannibalisation checked against all 97 live articles'
`primaryKeyword`/`keywords[]` (grepped in full, not sampled) before any topic was locked.

## G53 — vitamins, minerals and antioxidants in honey

- **USDA / Colorado State Food Source Information**: honey carries low quantities of potassium,
  sodium, phosphorus, calcium and vitamin C, plus trace riboflavin, niacin, vitamin B6, iron and
  zinc. Potassium specifically runs roughly **11-55 mg per tablespoon** depending on the honey.
  Source: <https://www.chhs.colostate.edu/fsi/food-articles/complex-food/honey/>
- **Antioxidants**: honey's two predominant polyphenol classes are flavonoids and phenolic
  acids; the amount and type vary by floral source. Darker, multifloral honeys generally test
  higher in total polyphenol content than pale monofloral honeys.
  Source: <https://www.ncbi.nlm.nih.gov/pmc/articles/PMC8065985/>
- **What this does NOT establish**: none of the sources reviewed translate these trace amounts
  into a stated health outcome (e.g. "prevents X", "boosts immunity") — a tablespoon's 11-55 mg
  of potassium is a small fraction of an adult's ~3,500-4,700 mg daily requirement, and no source
  claims honey is a meaningful vitamin or mineral source on its own. This article reports
  composition, not a nutritional recommendation.
- No SUBUR-specific micronutrient panel exists or is invented; the added nuts (walnut, almond)
  carry their own separate, real nutrient profiles not attributed here to the honey itself.

## G54 — is honey halal (JAKIM / MS1500)

- **JAKIM** (Jabatan Kemajuan Islam Malaysia) is the sole issuer of halal certificates in
  Malaysia. The benchmark standard is **MS 1500:2019** ("Halal Food — General Requirements",
  Department of Standards Malaysia), which a certification audit checks against: ingredient
  sourcing (no non-halal cross-contamination), and processing/hygiene/premises controls.
  Source: <https://halalcodecheck.com/blog/malaysia-halal-certification-guide/>,
  <https://www.equatorbiz.com/guides/halal-certification-malaysia>
- **Honey itself**: a bee product, not derived from an animal in the sense the standard is
  concerned with (no slaughter, no animal-derived processing aid inherent to honey extraction).
  This is a description of the substance, not a certification claim for any specific jar.
- **SUBUR's own established position**, already live in all three `llms*.txt` FAQs: the site
  states its ingredients (honey, honeycomb, nuts, spices — all named on the label), states it
  contains no alcohol and no animal-derived ingredient other than the honey itself, and
  explicitly **does not publish a certificate number it cannot show**, directing certification
  questions to Berkat Madinah on WhatsApp. This article must repeat that exact position — not a
  stronger claim, not a denial — per the site's standing rule that fabrication by denial is as
  false as fabrication by invention (round 3, D37).

## G55 — honey before/after exercise

- **Mechanism** (physiology, not brand-specific): honey contains glucose and fructose together,
  which are absorbed via different intestinal transporters; consuming both simultaneously can
  increase total carbohydrate absorption compared to glucose alone, a mechanism used generally in
  sports-nutrition carbohydrate mixes, not unique to honey.
- **Practical framing** reported by sports-nutrition sources (National Honey Board, a US honey
  industry body — flagged as industry-sourced, not independent research): roughly one to one and
  a half tablespoons before training has been described as topping up liver glycogen, particularly
  relevant after an overnight fast.
  Source: <https://honey.com/blog/fuel-your-favorite-activities-with-honey>
- **Post-exercise**: carbohydrate paired with protein after exercise is standard sports-nutrition
  advice for glycogen restoration and recovery; honey is one carbohydrate source usable in that
  pairing, not a required or superior one.
- **Balancing fact, not omitted**: at least one controlled study found honey consumed before and
  during 75 minutes of football training did **not** measurably improve performance. This article
  reports the mechanism and the practical use case without claiming a proven performance benefit —
  the same "may help, not proven to enhance" register as the cough article in round 5.

## G56 — bulk / corporate honey gifts for events

- **No new external fact required.** This is a buying-guide article built entirely on what the
  site itself already publishes: a wholesale enquiry form rendered on every locale's homepage
  (`src/components/sections/Wholesale.astro`), linked from `/{lang}/contact/` and
  `/{lang}/retail/`, and an FAQ across all three `llms*.txt` files confirming bulk/wholesale
  enquiries are handled (verified live in round 3, D37 — the same fact a round-3 Arabic article
  once wrongly denied).
- **What is NOT published and is NOT invented here**: a minimum order quantity, a bulk price, a
  lead time, or a maximum order size. The article names the enquiry channel and stops there.

## G57 — how much honey for a toddler / young child (over 1)

- **AHA (American Heart Association)**: children under 2 should have **no added sugar at all**;
  children aged 2-18 should have no more than **6 teaspoons (about 25g)** of added sugar per day
  — the same absolute figure as WHO's adult 5% conditional ceiling, arrived at independently for
  a pediatric population with lower total energy needs.
  Source: <https://publications.aap.org/aapnews/news/7400/AHA-Limit-children-s-sugar-consumption-to-6>
- **This is a different age band from two existing site facts**, and the article must say so
  explicitly to avoid contradicting either: the **under-12-months honey ban** (infant botulism —
  entirely different mechanism, an absolute prohibition regardless of sugar content) and the
  **adult 25g/6-teaspoon WHO figure** already published in round 5's `how-much-honey-is-safe-per-day`
  (same number, different population, arrived at by a different body for a different reason —
  coincidence, not a contradiction, and the article states this plainly).
- No SUBUR-specific serving size for a child is stated or implied; the comb-and-nut ingredient
  list (including tree nuts, a declared allergen) is flagged as a separate reason to check with
  a pediatrician before giving a child this specific blend, mirroring the pregnancy/allergy
  articles' pattern.

## G58 — honey and dental health (cavities)

- **WHO's dental-caries evidence base** is the actual foundation of the free-sugars guideline
  already cited in round 5: WHO's May 2025 technical note states dental caries is the most common
  NCD worldwide (2.5 billion people affected), and free-sugar consumption is its most common risk
  factor. Source: <https://iris.who.int/server/api/core/bitstreams/3a21b73f-c388-4bc0-8ac6-c16f334dc0d9/content>
- **Honey specifically**: one laboratory study (enamel demineralization depth, not a population
  study) found honey produced **less** demineralization than pure glucose or fructose solutions
  under test conditions, and honey carries some antibacterial properties independent of its sugar
  content. This is reported as **one study's finding**, not a consensus, and not translated into
  "honey doesn't cause cavities" — the underlying free-sugar mechanism (sugar feeding plaque
  bacteria, producing acid) applies to honey exactly as it does to any other sugar.
- **No claim that honey is good, neutral, or better for teeth than sugar** is made as this site's
  own position — only that one study measured a difference, reported honestly with its
  limitations (lab conditions, not a clinical trial).
