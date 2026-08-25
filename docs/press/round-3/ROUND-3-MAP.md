# PRESS Round 3 — the map

18 articles: 6 English, 6 Malay, 6 Arabic. Written 2026-08-25 from three independent demand files
(`demand-en.md`, `demand-ms.md`, `demand-ar.md`), each researched natively and none translated from
another.

Shared facts: `FACTS-COMMON.md`. Externally verified numbers: `FACTS-VERIFIED.md` — **writers quote
from that file, never from a demand file.** Round 1 had a writer fetch a source PDF and correctly
refuse two figures its own research file had asserted; the verified file exists so that cannot
happen twice.

---

## What Search Console changed about this round

Rounds 1 and 2 ran with no Search Console data at all. Round 3 has it (D25), and the single most
useful thing it produced was a hole rather than a keyword.

`madinah.com.my` — same retailer, same Malaysian Arab/Malay/English audience — shows
**`yemeni honey` at 1,935 impressions and `yemeni sidr honey` at 1,801**, sitting at average
positions 11.5 and 14.4. The Arabic researcher then grepped all sixteen live Arabic articles for
`السدر` / `اليمني` / `يمني` and found **zero occurrences**. The largest measured demand cluster this
audience produces has no page on the site in any language.

That is the origin of `en2` and `ar1`, and it is the only topic in three rounds that arrived from
measurement rather than from SERP inspection.

Two demand clusters were refused rather than dropped quietly, and both are itemised in the demand
files: roughly **1,700 impressions of sexual / aphrodisiac / marriage-outcome demand** (including
`aphrodisiac honey near me` at position **1.3**), which Malaysia's food rules forbid this site from
answering; and **every price query** (`black seed honey price` 574, `sidr honey price` 111), which
the site cannot answer because it publishes no price.

---

## The 18

### English

| id | Focus keyword | Slug | Group | Icon |
|---|---|---|---|---|
| en1 | `is honey in malaysia fake` | `is-honey-in-malaysia-fake` | — | `ingrediant_08` |
| en2 | `what is sidr honey` | `what-is-sidr-honey` | **G7** (en+ar) | `ingrediant_08` |
| en3 | `can you put honey in hot tea` | `honey-in-hot-drinks-malaysia` | — | `ingrediant_03` |
| en4 | `baking with honey instead of sugar` | `baking-with-honey-malaysia` | — | `ingrediant_06` |
| en5 | `how to read a honey label` | `how-to-read-a-honey-label-malaysia` | **G12** (en+ar) | `ingrediant_09` |
| en6 | `why is my honey dark` | `why-is-honey-dark-or-light` | **G8** (en+ms) | `ingrediant_02` |

### Malay

| id | Focus keyword | Slug | Group | Icon |
|---|---|---|---|---|
| ms1 | `tarikh luput madu` | `tarikh-luput-madu` | **G9** (ms+ar) | `ingrediant_08` |
| ms2 | `madu kelulut vs madu tualang` | `madu-kelulut-vs-madu-tualang` | — | `ingrediant_01` |
| ms3 | `madu khalta` | `madu-khalta` | — | `ingrediant_07` |
| ms4 | `madu untuk ibu mengandung` | `madu-untuk-ibu-mengandung` | **G10** (en+ms) | `ingrediant_05` |
| ms5 | `kenapa madu jadi gelap` | `kenapa-madu-jadi-gelap` | **G8** (en+ms) | `ingrediant_02` |
| ms6 | `madu saffron` | `madu-saffron` | **G11** (ms+ar) | `ingrediant_02` |

### Arabic

Slugs are **transliterated Latin script**, matching all sixteen live Arabic files. Not an oversight
— the site's established convention.

| id | Focus keyword | Slug | Group | Icon |
|---|---|---|---|---|
| ar1 | `الفرق بين عسل السدر والعسل الماليزي` | `al-farq-bayn-asal-al-sidr-wal-asal-al-malizi` | **G7** (en+ar) | `ingrediant_08` |
| ar2 | `هل يسمح بنقل العسل في الطائرة` | `naql-al-asal-fi-al-taira` | — | `ingrediant_04` |
| ar3 | `الفرق بين العسل الخام والعسل المصفى` | `al-farq-bayn-al-asal-al-kham-wal-musaffa` | — | `ingrediant_08` |
| ar4 | `قراءة ملصق العسل في ماليزيا` | `qiraat-mulsaq-al-asal-fi-malizia` | **G12** (en+ar) | `ingrediant_09` |
| ar5 | `طريقة عمل عسل بالمكسرات` | `tariqat-amal-asal-bil-mukassarat` | — | `ingrediant_04` |
| ar6 | `هدية من ماليزيا للأهل` | `hadiya-min-malizia-lil-ahl` | — | `ingrediant_10` |

---

## Groups — six of them, and why each one is a claim I can defend

A group is an assertion that two URLs are the same page in different languages. Round 1 deliberately
left most articles ungrouped. The bar applied here: **both sides had to arrive at the same core
question independently**, from their own demand research, without seeing the other's file.

| Group | Members | Why it qualifies |
|---|---|---|
| **G7** | en2 `what-is-sidr-honey` + ar1 `al-farq-bayn-asal-al-sidr-wal-asal-al-malizi` | Both researchers, working separately, ranked the sidr/Yemeni cluster as the largest legal demand in their file, and both landed on the same core question: what sidr is, and whether it is what you are holding in Malaysia. Independent arrival, same question |
| **G8** | en6 `why-is-honey-dark-or-light` + ms5 `kenapa-madu-jadi-gelap` | Both independently proposed "why is my honey dark", both found the mirror myth in their own SERP (English: dark = higher grade; Malay: *darker = purer*), both wrote the same corrective |
| **G9** | ms1 `tarikh-luput-madu` + **live** ar `hal-lil-asal-tarikh-salahiya` | Retroactive group, same shape as round 2's G6. The Malay researcher proposed it and named the Arabic partner unprompted. Same question: does honey expire |
| **G10** | ms4 `madu-untuk-ibu-mengandung` + **live** en `is-honey-safe-during-pregnancy` | Retroactive. Same question, and the Malay research found the Indonesian corpus contradicting itself on exactly the point the English article settles |
| **G11** | ms6 `madu-saffron` + **live** ar `asal-bil-zafaran` | Retroactive. Same ingredient, same "what am I paying for and can I check it" question |
| **G12** | en5 `how-to-read-a-honey-label-malaysia` + ar4 `qiraat-mulsaq-al-asal-fi-malizia` | Both independently found that every ranking result addresses the person *printing* the label, not the person reading it. The Arabic reader has an extra problem — the jar is in Malay — but it is the same page's job |

**Groups with no English member get no `x-default`.** G9 and G11 are Malay+Arabic; naming one of the
two as the fallback for every other language would be a claim the round cannot support. This is
`SEO.astro`'s existing behaviour (D14) and it is correct.

**Deliberately NOT grouped**, and each refusal is a decision:

- **ar5 `tariqat-amal-asal-bil-mukassarat` is explicitly ungrouped from the live en
  `honey-with-nuts-malaysia`.** The Arabic demand is DIY-shaped — *how do I make honey with nuts at
  home* — and the English article is a product-category piece. The Arabic researcher flagged this
  as its own highest cannibalisation risk and made the recommendation conditional. See the fence
  below.
- **ms3 `madu-khalta` is not grouped with the live ar `mukawwinat-khaltat-al-asal-bil-aashab`.** The
  Arabic article reads *SUBUR's own label*, ten names in order. The Malay article explains what
  *khalta* means as a category on any Arab honey shelf. Adjacent, not identical.
- **en1 `is-honey-in-malaysia-fake` ships single-language.** Malay already owns the verification job
  through the live `cara-kenal-madu-asli`, and the Arabic researcher discarded the equivalent
  (Al Shifa) cluster on cannibalisation and competitor-naming grounds. Grouping would be inventing a
  cluster to fill a table.

---

## Per-article fences

Following D11, the per-article fact sheet **is** the candidate section in the language's demand file
plus its row here. What follows is only what the demand files could not know — the cross-article
boundaries, which exist because eighteen writers work in parallel and cannot see each other.

| id | The fence |
|---|---|
| **en1** | **No home-test section at all.** The live `how-to-identify-pure-honey` owns that and this article links to it instead. This piece evaluates a *statistic*, not a jar. Every figure exactly as `FACTS-VERIFIED.md` states it — 769 samples, 45 non-compliant, 5.85%, Regulation 130 — attributed to MOH and to Dr Zulkifli Mustafa by name. No derived arithmetic, no "so buy from a trusted seller", no implication SUBUR was tested |
| **en2 / ar1** | **Say plainly that SUBUR is not sidr honey.** No bloom-duration figure (sources contradict), no price figure, no grading claim, no health claim. Keep the "sidr is a floral source, not a country" line consistent with the site's existing UMF-vs-MGO explanation. The retailer's Yemeni stock lives on a different site and must not be blurred into this one |
| **en3** | Ends by ruling SUBUR *out* of the use case — a comb blend is a spoon product. That refusal is the article. No temperature at which honey "loses its benefits": that is a health claim wearing a number. Boundary against the live `madu-campur-air-panas` / `al-ma-al-sakhin-wal-asal` pair — those answer whether hot water spoils honey; this answers what to do about tea |
| **en4** | Metric and Celsius throughout — the whole gap is that every incumbent is in cups and Fahrenheit. Positive close (drizzle over, don't bake in) so it is not purely negative. No glycaemic framing, no "healthier than sugar" |
| **en5 / ar4** | May state what a Malaysian label is **required** to carry (see `FACTS-VERIFIED.md`). May **not** state SUBUR's net weight — D26. No certification claim of any kind. Do not restate the live ar `mukawwinat-khaltat-al-asal-bil-aashab` ten-name walkthrough; that article reads SUBUR's label, this one teaches reading *any* jar. The allergen rule is the payoff: walnut and almond are tree nuts, and naming them is checkable |
| **en6 / ms5** | Hard split from ms1: **this article is about colour, ms1 is about dates.** Neither may drift into "has my honey gone bad". The one discriminator worth giving a reader is colour that changed *after* purchase. Refuse the antioxidant payoff every incumbent builds toward. A spiced comb blend is dark from day one because of what is in it |
| **ms1** | Hard split from ms5 as above. Do **not** assert a legal duty for honey to carry a best-before date — `FACTS-VERIFIED.md` establishes the rule only as "for foods that require one". Work from what jars actually show. The ranking Malaysian answer publishes the myth that *a date means additives*; correcting that is the article. No shelf-life figure |
| **ms2** | The four-naming-logics paragraph in `FACTS-VERIFIED.md` is the spine — do not waste it. No health, nutrient or antioxidant comparison, not even attributed. No price figures. Heavy watch on `tradisional` / `turun-temurun`, which this subject attracts hard. SUBUR is neither kelulut nor tualang and says so. Check the live `types-of-honey-in-malaysia` before writing and do not converge on its list |
| **ms3** | The three-line fence, non-negotiable: **no origin claim, no certification claim, no effect claim.** The category's own listing copy uses `Timur Tengah` (banned), sells on hormones and energy, and shouts a halal certification SUBUR does not have. Hard boundary against the live `madu-suami-isteri` |
| **ms4** | Ends at "ask your clinic", never at "so it's safe". Separates the under-12-months infant rule from a general raw-honey question — that is the whole service. No health claim, no dosage. The infant rule is a warning and is never invertible into an endorsement (round 2 caught exactly that inversion in a Malay draft) |
| **ms6** | Discipline is entirely negative: no dosage, no memory or mood claim, and above all **no quantity** — the site publishes ingredient names, not amounts. Reuses the shape that worked for `habbatus-sauda-dan-madu` |
| **ar2** | The lowest-risk article in the round: no health surface at all. The gap is a **glass jar of solid comb** leaving KLIA, which the generic liquids guides do not address. Do not invent an airline rule, a millilitre allowance or a customs limit — where the answer depends on the carrier or the destination, say so and tell the reader to check |
| **ar3** | Ship only if the boundary against the live `mukawwinat-khaltat-al-asal-bil-aashab` holds: that article reads SUBUR's label; this one explains the raw-vs-filtered *process* and the honest line no seller in its SERP will print — **`خام` is not a regulated word**. All six ranking publishers convert the process question into a health claim inside a paragraph; refuse it explicitly |
| **ar5** | **Conditional commission.** It is a how-to about making honey with nuts at home. The ground-vs-whole-nuts point is a consequence *inside* the recipe, never the thesis — if the outline turns into "SUBUR grinds its nuts", it has become the live English `honey-with-nuts-malaysia` in Arabic and must be dropped. No claim that a home version equals or beats the product |
| **ar6** | Highest fabrication discipline in the round: **no price, no gift box, no wrapping service, no bulk pathway** — none of those exist. Worst banned-terms exposure in the round too (one competitor domain is literally `taqaled.com`, from `تقاليد`). Boundary against the live `hadiyat-al-asal-lil-eid`: that is an Eid gift, this is a resident taking something home to family |

---

## Cannibalisation — checked three ways

1. **Against all 48 live focus keywords.** Each researcher had their own language's 16 as an
   explicit off-limits list. No round-3 focus keyword duplicates or near-paraphrases one.
2. **Against the live articles' *secondary* keyword arrays** — which is a stricter check than rounds
   1 and 2 ran, and it caught real collisions the focus-keyword check missed. The Arabic researcher
   found `الفرق بين العسل بالشمع والعسل السائل` already registered on the live
   `tariqat-akl-al-asal-bil-shama` and dropped it. The Malay researcher killed two candidates
   outright the same way: `madu berempah` is already a keyword on
   `beza-madu-tulen-dan-madu-campuran`, `simpan madu suhu bilik` on `madu-beku-dalam-peti-sejuk`,
   and `madu campur air panas` on `madu-suami-isteri`. **Writers get the same instruction: grep the
   secondary arrays, not just the focus keywords.**
3. **Within the round itself.** All 18 focus keywords are distinct. The three pairs that come
   closest are fenced above: en1 vs the live authenticity article, ms1 vs ms5 (dates vs colour), and
   ar5 vs the live `honey-with-nuts-malaysia`.

---

## Discarded and reserve

Each demand file carries its own full table with reasons. The ones that matter across the round:

| Candidate | Status | Reason |
|---|---|---|
| Entire sexual / aphrodisiac / marriage-outcome cluster (~1,700 impressions, itemised in `demand-en.md` §0.1) | **Disqualified — legal** | Illegal under Malaysia's food rules, not merely aggressive. Documented rather than silently dropped |
| Every price query (`black seed honey price` 574 imp, `sidr honey price` 111, `yemeni honey price` 93) | **Disqualified — fabrication** | No price published anywhere on the site |
| Al Shifa brand-verification cluster (30+ GSC rows, `al shifa honey is pure or not` at 262 imp) | **Discard** | The live `kayfa-tamiz-al-asal-al-asli` already debunks the exact water and burn tests the brand's own blog ranks on. Naming a competitor in a verification headline buys nothing and costs exposure. Correct response is internal linking, not a new page |
| `supermarket honey vs raw honey` (2,700+ imp) | **Discard** | Triple cannibalisation, plus auditing a named competitor with no lab data of our own |
| `is honey halal` / `هل العسل يحتاج شهادة حلال` | **Disqualified — fabrication** | SUBUR publishes no certification. The article would imply one or dead-end |
| Jar size / weight queries | **Disqualified** | See D26. `site.ts` publishes no weight at all |
| Ramadan / suhoor / `madu semasa berbuka puasa` | **Reserve, reason unchanged** | 6 of 6 ranking pages are health-claim pages in both languages. Same call round 2 made |
| `honey for cough` / `honey for sore throat` | **Disqualified — legal** | On a honey seller's domain this *is* the food's advertising. Defensible science does not make it legal here |
| `corporate honey gift` (EN + MS), `honey face mask malaysia`, `how much honey per day` | **Still discarded, round 1–2 carry-overs** | Re-checked 2026-08-25. **No reason has changed** — nothing published since creates a bulk pathway, and no cosmetic-claim legal read has been commissioned |
| `saffron honey` (EN) | **Reserve** | Genuine gap, but 100% of the ranking corpus is health claims, and the product tie-in needs someone to physically check whether saffron threads are visible in the jar. Revisit after a photography pass. **Note:** the Malay `madu-saffron` ships because it takes the label-literacy angle instead |
| `gula melaka vs madu` (MS, round-2 reserve) | **Reason no longer applies; not claimed** | The English `baking-with-honey-malaysia` occupies adjacent ground with neither the strong incumbent nor the glycaemic SERP. Recorded so round 4 knows the substitution framing clears a bar the comparison framing did not |
| `عسل الكلولوت` (AR) | **Reserve** | One relevant result, no GSC row. Folded into ms2 instead of spending a slot |
| `bawa madu naik kapal terbang` (MS) | **Reserve** | No demand evidence at all in Malay — but the Arabic equivalent (`ar2`) has six publishers competing. Kept in Arabic only, which is what demand-led means |

---

## Evidence integrity

**No search-volume figure appears anywhere in this map or in any demand file.** No keyword tool
exists on this machine and none was invented. Every number quoted is either a Search Console
impression/position from `gsc-demand.md` (a labelled sibling-property proxy) or a measured competitor
word count, and each carries its pull date of 2026-08-25.

Two collection failures are recorded rather than papered over: **Google MY SERP fetch was blocked**
for the Malay researcher, so that file contains **no autocomplete or "Soalan lazim" evidence at all**
and says so; and **Malay Mail returns HTTP 403** to automated fetch, so its two articles are
confirmed through three independent syndications instead.
