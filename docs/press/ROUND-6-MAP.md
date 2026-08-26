# Round 6 — keyword → article map

6 topics × 3 languages = 18 articles, each a three-language hreflang group. Same constraint as
every prior round: no paid keyword tool, no GSC quota this session — demand from live
SERP/autocomplete/PAA inspection plus the sources verified in `round-6/FACTS-VERIFIED.md`.

## G53 — vitamins, minerals and antioxidants in honey

| | slug | focus keyword |
|---|---|---|
| en | `honey-vitamins-and-minerals` | vitamins and minerals in honey |
| ms | `vitamin-dan-mineral-dalam-madu` | vitamin dalam madu |
| ar | `al-fitaminat-wal-maadin-fi-al-asal` | الفيتامينات والمعادن في العسل |

Distinct from round 5's `honey-calories-and-sugar-content` (macros — calories/carbs/sugar) —
this is micronutrients (potassium, trace vitamins, antioxidants). Links to the calorie article
both directions.

## G54 — is honey halal

| | slug | focus keyword |
|---|---|---|
| en | `is-honey-halal` | is honey halal |
| ms | `adakah-madu-halal` | adakah madu halal |
| ar | `hal-al-asal-halal` | هل العسل حلال |

Must mirror, not exceed or contradict, the site's already-live `llms*.txt` FAQ position on SUBUR
specifically: composition stated (honey, comb, nuts, spices, no alcohol, no animal ingredient
beyond the honey), no certificate number published, certification questions routed to Berkat
Madinah on WhatsApp. General JAKIM/MS1500 explainer content is new; the SUBUR-specific paragraph
is not — see D37 precedent on fabrication by denial.

## G55 — honey before/after exercise

| | slug | focus keyword |
|---|---|---|
| en | `honey-before-and-after-exercise` | honey before exercise |
| ms | `madu-sebelum-selepas-bersenam` | madu sebelum bersenam |
| ar | `tanawul-al-asal-qabl-wa-baad-al-riyada` | تناول العسل قبل وبعد الرياضة |

Distinct from round 5's `honey-during-ramadan-suhoor` (fasting-specific energy timing) — this is
general exercise/training timing, no fasting context. Reports the glucose+fructose dual-pathway
mechanism and a balancing null-result study (football training, no measured performance gain) —
no unproven performance claim.

## G56 — bulk / corporate honey gifts for events

| | slug | focus keyword |
|---|---|---|
| en | `bulk-honey-gifts-for-events` | bulk honey gifts malaysia |
| ms | `madu-pukal-untuk-hadiah-korporat` | madu pukal hadiah korporat |
| ar | `al-asal-bil-jumla-lihadaya-al-sharikat` | العسل بالجملة لهدايا الشركات |

Distinct from the five existing personal-occasion gift articles (Raya, Eid, wedding hantaran/
doorgift, gift-for-family) — this is B2B/bulk framing. Built entirely on the site's own published
wholesale-enquiry fact (D37); no price, MOQ or lead time stated or invented.

## G57 — how much honey for a toddler / young child

| | slug | focus keyword |
|---|---|---|
| en | `how-much-honey-for-a-toddler` | how much honey for a toddler |
| ms | `berapa-banyak-madu-untuk-kanak-kanak` | berapa banyak madu untuk kanak-kanak |
| ar | `kam-min-al-asal-liltifl-al-sagheer` | كم من العسل للطفل الصغير |

Distinct age band from the live `can-babies-have-honey` (under-12-months absolute ban, different
mechanism) and round 5's `how-much-honey-is-safe-per-day` (adult WHO figure). AHA's independent
children's ceiling (25g/6 tsp, ages 2-18) happens to match WHO's adult conditional figure —
stated explicitly as coincidence, not contradiction, to pre-empt a cross-language reviewer flag.

## G58 — honey and dental health (cavities)

| | slug | focus keyword |
|---|---|---|
| en | `is-honey-bad-for-your-teeth` | is honey bad for teeth |
| ms | `adakah-madu-buruk-untuk-gigi` | adakah madu buruk untuk gigi |
| ar | `hal-yudirru-al-asal-bil-asnan` | هل يضر العسل بالأسنان |

Uses WHO's own dental-caries evidence base (the actual justification for the free-sugars
guideline round 5 already cites) from a new angle. One honey-specific lab study reported
narrowly as one study, not a consensus — no claim that honey is better for teeth than sugar.

## Cannibalisation check

All six focus keywords and their secondary arrays checked against all 97 live
`primaryKeyword`/`keywords[]` entries (full grep, all three languages) — no collision. Checked
against the other 17 articles in this round — no collision; six distinct intents (nutrition-
facts, certification, fitness, B2B buying, pediatric safety, dental safety).

Verified NOT duplicates of adjacent live topics:
- G53 vs `honey-calories-and-sugar-content` (macros vs micros — different keyword, different
  nutrient class)
- G55 vs `honey-during-ramadan-suhoor` (general exercise vs fasting-specific)
- G56 vs the five occasion-gift articles (B2B/bulk vs personal/festival)
- G57 vs `can-babies-have-honey` and `how-much-honey-is-safe-per-day` (toddler band vs infant
  ban vs adult ceiling — three distinct populations)
- G58 vs `honey-and-diabetes`/`honey-vs-sugar-which-is-healthier` (dental mechanism vs metabolic
  mechanism — different disease pathway entirely)

Explicitly checked and rejected as cannibalisation: a "how to spot fake honey at home" idea
overlaps the live `how-to-identify-pure-honey`/`cara-kenal-madu-asli`/`kayfa-tamiz-al-asal-al-asli`
trio almost exactly (those three already debunk the water/flame/thumb home tests in detail) —
dropped before writing anything.
