# Round 5 — keyword → article map

6 topics × 3 languages = 18 articles, each topic a three-language hreflang group. Demand evidence
is live SERP/autocomplete/PAA inspection plus the WHO/Cochrane/USDA/ADA/MOH sources verified in
`round-5/FACTS-VERIFIED.md` — no paid keyword tool, no GSC quota available for this session
(unchanged from D8/D25). Every focus keyword checked against the 79 live slugs before writing;
none collide with an existing focus or secondary keyword array.

## G47 — honey and diabetes

| | slug | focus keyword |
|---|---|---|
| en | `honey-and-diabetes` | can diabetics eat honey |
| ms | `madu-untuk-pesakit-kencing-manis` | madu untuk pesakit kencing manis |
| ar | `hal-yastatie-marda-al-sukkari-tanawul-al-asal` | هل يستطيع مرضى السكري تناول العسل |

Intent: safety/informational. Internal links: G49 (calories), G50 (honey vs sugar), G51 (daily
amount), `honey-allergy-symptoms` (en) / `sarang-madu-boleh-dimakan`-family safety pieces.

## G48 — honey for cough and cold

| | slug | focus keyword |
|---|---|---|
| en | `honey-for-cough-and-cold` | honey for cough |
| ms | `madu-untuk-batuk-dan-selesema` | madu untuk batuk |
| ar | `al-asal-lil-suaal-wal-zukam` | العسل للسعال والزكام |

Intent: safety/informational. Must restate the under-12-months rule in full, not by reference only
— it is the one fact in this group that cannot be assumed read. Links to `can-babies-have-honey`
(en) / `hal-al-asal-masmuh-lil-atfal-aqal-min-sana` (ar) / infant-safety pieces (ms has none yet —
ms links to `madu-untuk-ibu-mengandung` instead, the nearest live safety article).

## G49 — calories and sugar in honey

| | slug | focus keyword |
|---|---|---|
| en | `honey-calories-and-sugar-content` | honey calories per tablespoon |
| ms | `kalori-dan-gula-dalam-madu` | kalori madu satu senduk |
| ar | `al-suqrat-al-hararia-wal-sukkar-fi-al-asal` | السعرات الحرارية في العسل |

Intent: informational/nutrition-facts. Table-heavy (USDA numbers). Links to G50, G51,
`baking-with-honey-malaysia` (en) / `tukar-sukatan-gula-kepada-madu` (ms).

## G50 — honey vs white sugar

| | slug | focus keyword |
|---|---|---|
| en | `honey-vs-sugar-which-is-healthier` | honey vs sugar |
| ms | `madu-atau-gula-mana-lebih-sihat` | madu atau gula mana lebih baik |
| ar | `al-asal-am-al-sukkar-ayyuhuma-afdal` | العسل أم السكر أيهما أفضل |

Intent: comparison. **Not** a duplicate of the live `honey-vs-gula-melaka` (en) — that compares
honey to palm sugar (gula melaka/coconut sugar) as two Malaysian cooking ingredients; this compares
honey to refined white/table sugar as a health question. Different focus keyword, different intent,
verified distinct on read-through of the live article. Links to G47, G49.

## G51 — how much honey is safe per day

| | slug | focus keyword |
|---|---|---|
| en | `how-much-honey-is-safe-per-day` | how much honey per day |
| ms | `berapa-banyak-madu-selamat-sehari` | berapa sudu madu sehari |
| ar | `kam-malaqat-asal-yawmian-amina` | كم ملعقة عسل يمكن تناولها يوميا |

Intent: informational/safety. Anchors on WHO's 5%/25 g/6-teaspoon **total added-sugar** figure —
explicit in every language that this is a whole-diet ceiling, not a honey-specific or SUBUR-specific
dose. Links to G47, G49, G50.

## G52 — honey at suhoor (Ramadan)

| | slug | focus keyword |
|---|---|---|
| en | `honey-during-ramadan-suhoor` | honey suhoor |
| ms | `madu-untuk-sahur-bulan-puasa` | madu untuk sahur |
| ar | `al-asal-fi-suhoor-ramadan` | العسل في سحور رمضان |

Intent: seasonal/informational. Nutrition-mechanics framing only (fast sugar + protein/fibre
pairing, hydration spread across non-fasting hours) — no religious-practice or "tradition" language
(banned sitewide). Links: en → `honey-in-hot-drinks-malaysia`, `baking-with-honey-malaysia`; ms →
`resepi-sarapan-guna-madu`, `hadiah-madu-untuk-raya`; ar → `hadiyat-al-asal-lil-eid`,
`tariqat-akl-al-asal-bil-shama`.

## Cannibalisation check

Every focus keyword above checked against all 79 live articles' `primaryKeyword` and `keywords[]`
arrays (grepped, not sampled) — no collision. Checked against the other 17 articles in this same
round — no collision; the six groups sit far enough apart in intent (safety × 2, nutrition-facts,
comparison, dosage, seasonal) that no pair competes for the same query.

## Refused

- **Honey pricing** (`harga madu` / "how much does honey cost") — no source for a defensible RM
  figure without inventing one; SUBUR itself publishes no price. Dropped rather than filled with an
  invented number, per D-series precedent on price queries (round 3, D30).
- **Weight-loss framing** ("does honey help you lose weight") — every source reviewed for G1/G3/G4
  treats honey as calorically equivalent to sugar; a weight-loss angle would require inventing a
  benefit no source supports. G3/G4 answer the underlying calorie question honestly instead.
