# PRESS Round 4 — English demand research

Pulled **2026-08-26**. Stage 1 only: no writing, no repo edits beyond this file.

Round 4 is the hardest English round so far. **66 articles are live, 22 of them English**, and rounds
1–3 took every obvious topic. This file proposes **10 candidates**, recommends **5 firmly plus a
conditional 6th**, and discards more than it proposes — which is the honest shape of a fourth round.

---

## 0. How this file was built, and what it could not obtain

### 0.1 Evidence rules kept

- **No search-volume figure appears anywhere in this file.** No keyword tool exists on this machine
  and none was invented. Every number is either a Search Console impression/position from
  `gsc-demand.md` (a labelled **sibling-property proxy**, `madinah.com.my`, never SUBUR's own data)
  or an observed SERP composition with the URL and the pull date of **2026-08-26**.
- The Search Console zero on `suburhoney.com` is read as `gsc-demand.md` instructs: round 3 shipped
  **one day** before the pull, so the zero says nothing. Round 4 is demand-led from SERP research,
  same as rounds 1–3.
- Cannibalisation was checked **twice**: against the 22 live English focus keywords, and against
  every live English article's **secondary `keywords` array**
  (`grep -n "keywords" -A 14 src/content/articles/en/*.ts`). The secondary check killed four
  candidates outright and demoted two. Each is named in §4.

### 0.2 Collection failures — recorded, not papered over

| What failed | Consequence |
|---|---|
| `WebSearch` is **US-localised**. No geo-localised Malaysian SERP could be obtained. | Malaysian intent was probed by adding `malaysia` to queries. SERP composition claims below are therefore about the **English-language corpus**, not a verified `google.com.my` result page. Same class of limitation round 3 hit from the other direction (its Google MY fetch was blocked). |
| `foodcomplianceinternational.com/.../5065-new-standard-on-kelulut-stingless-bee-honey` returns **HTTP 403** to automated fetch. | The Regulation 130A detail in candidate **E1** is corroborated across **three independent snippets** but has **not** been read against a primary instrument. See the hard verification gate on E1. |
| `tridge.com/news/malaysia-revises-the-food-regulations-1985-t-lpjzoy` returns **navigation chrome only** to automated fetch. | Same as above. |
| `airports.malaysiaairports.com.my/en/klia1/air-travel/lag-restricted-items` returned **header/nav only**, not the policy body. | The KLIA LAG page **exists and is the right primary source**, but its wording was not captured. Candidate **E3** must not publish a millilitre figure until a writer reads that page directly. |

### 0.3 Demand this round refuses to serve — documented, not silently dropped

`FACTS-COMMON.md` requires the refusal to be written down rather than dropped. It is repeated here
because the demand is real and measurable and the answer is still no.

| Cluster | Evidence (GSC, `madinah.com.my`, 16-month window) | Why refused |
|---|---|---|
| Sexual / aphrodisiac / marriage-outcome | `honey for married couple` 954 imp · `yemeni honey for married couple` 277 imp @ **pos 1.9** · `honey remedy for relationship` 118 · `honey for married man` 107 · `honey pack for men` 87 @ **pos 1.8** · `honey remedies for relationship` 87 · `yemeni honey sexual benefits` 59 · `couples honey` 47 · `yemeni honey for men` 37 · `honey pack sex` 35 · `aphrodisiac honey near me` 3 @ **pos 1.3** · plus `arabic honey for men`, `does honey make a woman sweet` | **Illegal.** Malaysia's Food Regulations 1985 forbid a food being presented as preventing, treating, reducing or curing a condition. Fertility and sexual function are conditions. Attribution does not launder it on a seller's domain. Roughly **1,700+ impressions** of real demand this site may not answer. Unchanged from round 3. |
| Every price query | `black seed honey price` 568 imp @ pos 74.4 · `sidr honey price` 111 · `yemeni honey price` 93 · `al shifa honey price` 7 · `alshifa honey price` 4 · `al shifa honey 500g price` 1 | **Fabrication.** No price is published anywhere on the site, and `FACTS-COMMON.md` forbids even gesturing at one ("affordable", "premium-priced"). |
| Jar size / weight queries | `alshifa honey 1kg` 15 · `alshifa natural honey 1kg` 11 · `al shifa honey 1kg` 8 · `250gm honey` 5 · `7kg natural honey container` 1 | **Disqualified outright.** `FACTS-COMMON.md`'s round-3 hard constraint: jar size and weight are off limits *entirely* — not to assert, and not to say the site does not publish them. This constraint also **kills a candidate below** (E10, corporate gifting), because every ranking page in that SERP answers a size question. |
| Named-competitor verification (Al Shifa) | 30+ rows, `al shifa honey is pure or not` 262 imp @ pos 3.0 · `is al shifa honey pure` 101 · `madu al shifa palsu` 30 | **Discard, reason unchanged from round 3.** Naming a competitor in a verification headline buys nothing and costs exposure. Live `how-to-identify-pure-honey` already debunks the same tests. Correct response is internal linking. |
| Dosage / regimen | `how much honey per day`, `benefits of eating honey at night`, `benefits of eating honey at morning`, `honey on empty stomach` | **Banned.** Dosage guidance on a food seller's domain. Reason unchanged since round 1. |
| Condition-named honey | `honey for cough`, `honey for sore throat`, `is honey good for diabetics`, `benefits of drinking honey water` (GSC rows exist for the last two shapes) | **Illegal.** Defensible science does not make it legal on this domain. |

### 0.4 One live demand row that has real English pull and is *not* refused

`arabic honey` **37 impressions @ avg position 14.2** and `arab honey` **27 impressions @ avg
position 14.2** — 64 impressions, both stuck on page two of the sibling's results, and (per §E4
below) **no page on the open web actually answers the question**. This is the only English-language
GSC row in the file that is legal, unclaimed, and unanswered. It became candidate **E4**.

---

## 1. The reserve the brief flagged — assessed properly, and split in two

The brief is **correct** that rounds 2 and 3 discarded corporate/bulk gifting on a reason that is
now factually obsolete. Verified in the repo on 2026-08-26:

- `src/components/sections/Wholesale.astro` renders a wholesale enquiry form, mounted at
  `#wholesale` on **every** locale homepage via `src/pages/[lang]/index.astro:55`.
- `src/pages/[lang]/contact/index.astro:146` links `/${lang}/#wholesale`.
- `src/i18n/locales/en/common.json` publishes the section's real content: **"Volume orders are
  supplied through Berkat Madinah Store"**, three named features (**"Bulk Pricing Available"**,
  **"Nationwide Delivery — Peninsular and East Malaysia"**, **"Dedicated Sales Team"**), a business
  type list (**Retail Shop / Online Seller / Distributor / Pharmacy or Health Store / Other**) and a
  monthly volume selector with two brackets (**10–50 units**, **50+ units**).
- `src/content/llms/en.txt` §Wholesale and its FAQ answer **yes**, and state plainly that **"bulk
  pricing is quoted rather than published"**.

So "the article would invent a pathway or dead-end" is dead as a reason. **But the reason splits the
candidate in two, and the two do not survive equally.**

- **Trade supply / bulk purchase** → survives as candidate **E6**, with a caveat about demand, not
  about fabrication.
- **Corporate gifting specifically** → still discarded, on a **new and stronger** reason. See **E10**.
  In short: the corporate-gift SERP's entrance fee is **personalisation, logo cards, custom
  packaging and a size-per-recipient recommendation**. SUBUR publishes none of the first three, and
  the fourth is blocked outright by the round-3 jar-size ban. The pathway objection died; a format
  objection replaced it.

**One trap the writer of E6 must not walk into:** `llms/en.txt` §Wholesale itself says *"the same
jars in the same three sizes"* and its FAQ says *"the 500g jar is the size most couples buy"*. Those
are exactly the sentences the round-3 jar-size constraint quarantines. **E6 may cite the wholesale
pathway from `llms/en.txt` but must not carry that clause across.**

---

## 2. Other reserves, re-checked with fresh eyes

| Reserve | Round it was parked | Has the reason changed? |
|---|---|---|
| `why does honey taste different` | R2 (#7 of 7, risk of restating "variation ≠ fake") | **Changed, but both ways.** `why-is-honey-dark-or-light` shipped, which *removes* room (the "sensory trait ≠ quality" corrective is now published once) and *sharpens* the boundary (colour is taken, so taste must carry its own thesis). Net: still a reserve, but for a better-defined reason. Proposed as **E8** so the argument is on the record, not recommended. |
| `saffron honey` (EN) | R3 (needs a physical check of whether saffron threads are visible in the jar) | **Unchanged.** No photography pass has happened. SERP re-pulled 2026-08-26: the general answer is that threads *are* visible in a thin infusion (`goldensaffron.com/blog/Saffron/saffron-honey`, `dorreensaffron.com/products/saffron-honey`) — which does **not** transfer to a thick comb-and-nut blend, so the open question is untouched. Worse, the ranking set includes `healthywithhoney.com/what-is-saffron-honey-one-tasty-honey-good-for-sex-life-and-so-much-more/` — the SERP's dominant frame is the illegal one. **Stays reserve.** Malay `madu-saffron` already holds the label-literacy angle. |
| `honey face mask malaysia` | R2/R3 (needs a cosmetic-claim legal read) | **Unchanged.** No such read has been commissioned. Not a writer's call. **Stays discarded.** |
| `how much honey per day` | R1–R3 (dosage) | **Unchanged and permanent.** Dosage. |
| `corporate honey gift malaysia` | R2/R3 ("no bulk pathway") | **Reason is obsolete — and a new reason replaces it.** See §1 and **E10**. |
| `gula melaka vs madu` (MS note carried into R4) | R3 recorded the reason no longer applies | Not an English candidate; the English `honey vs gula melaka` is live. No action. |
| Ramadan / suhoor | R2/R3 | **Unchanged.** Ranking corpus is health-claim throughout. |

---

## 3. The 10 candidates

Ranked. Recommendations in §6.

---

### E1 — `kelulut honey standard malaysia` ⭐ strongest topic in the round

- **Proposed slug:** `kelulut-honey-new-rules-malaysia`
- **Intent:** informational / news-explainer. A Malaysian buyer or seller asking what the new
  kelulut rule is and whether the jar in their hand now has to say something it did not before.
- **Icon:** `ingrediant_08` (raw honeycomb)

**Demand evidence.** No GSC row on the sibling names the regulation — nobody knows it exists yet, and
that is the opportunity rather than a hole. Kelulut is however the honey category the live corpus
already treats as high-salience: `is-honey-in-malaysia-fake` carries `is kelulut honey fake` as a
secondary keyword and its own body copy says the 90% claim **"explicitly included"** kelulut;
`types-of-honey-in-malaysia` carries `kelulut honey` and `stingless bee honey`;
`is-malaysian-honey-local-or-imported` carries `kelulut honey`. Three live English articles already
route readers toward kelulut and none of them can answer the question a 2026 buyer now has.

**SERP pulled 2026-08-26** (`kelulut honey new malaysia regulation 2026 consumer what it means label`):

| # | URL | What it is |
|---|---|---|
| 1 | `https://www.tridge.com/news/malaysia-revises-the-food-regulations-1985-t-lpjzoy` | B2B trade-intelligence newsletter. Nav-only to automated fetch |
| 2 | `https://foodcomplianceinternational.com/industry-insight/news/5065-new-standard-on-kelulut-stingless-bee-honey` | Regulatory-compliance trade press. **HTTP 403** |
| 3 | `https://www.linkedin.com/posts/ts-nor-hamizah-md-non-17463078_regulatory-update-kelulut-stingless-bee-activity-7367179393867120641-TSgV` | A regulatory-affairs professional's LinkedIn post |
| 4 | `https://www.brizy.cloud/customfile/7512f96ecef15ae5d649ccb4015712b9.pdf` | MS 2683:2017, the older voluntary Malaysian Standard, as a loose PDF |
| 5–8 | `beeshop.com.my`, `dinokelulut.com`, `malaysianfoodie.com` | Kelulut sellers and one unrelated trend piece |

**The gap, stated precisely.** Every result is either **paywalled or blocked trade-compliance press
written for manufacturers**, or a **seller**. There is **no consumer-facing page in any language**
explaining a Malaysian food regulation that has been in force since **1 March 2026** to the person
who buys the honey. That is the widest gap found anywhere in this round.

**What the three snippets consistently say** (corroborating, not verified — see the gate below):
the Ministry of Health issued **Food Regulations (No. 2) (Amendment) 2025** on **27 August 2025**,
effective **1 March 2026**; it inserts a new **Regulation 130A** setting product standards for
kelulut honey; it adds kelulut requirements to the microbiological standards schedule; the
controlled parameters are named as **moisture, ash, trehalulose, fructose, glucose, sucrose, HMF and
pH**; and **packaging must state "Kelulut Honey"**. One snippet adds that Malaysian law now
distinguishes *madu* (from *Apis dorsata*) from *kelulut honey* (from stingless bees) by producing
species.

**The angle, and why it is genuinely new.** The reason kelulut needed its *own* regulation is a
compositional fact, not a marketing one: stingless bee honey's dominant reducing sugar is
**trehalulose**, a sucrose isomer, which is why stingless bee honeys **fail the Codex honey standard
on moisture, free acidity and total fructose-plus-glucose** — established in *Scientific Reports*
(`https://www.nature.com/articles/s41598-020-68940-0`, pulled 2026-08-26) and argued explicitly in
*Food Chemistry* (`https://www.sciencedirect.com/science/article/abs/pii/S0308814621025723`). In
other words: kelulut was never non-compliant because it was fake — it was non-compliant because the
rule had been written for a different insect. That reframes the 2024 "90% fake" episode in a way no
live article can, and it does it **without touching a health claim**.

**Distinct from the 22 live articles because:** `is-honey-in-malaysia-fake` evaluates a **2024
statistic**; this explains a **2026 rule**. `types-of-honey-in-malaysia` lists categories by taste
and production; this explains what one of them must now legally be. Neither can be updated to carry
this without becoming a different article.

**Risk register.**

- **Fabrication — the round's single largest.** Two primary sources failed to fetch. **Hard gate: no
  numeric threshold from Regulation 130A may be published.** The article may state *which parameters
  are now controlled* and *that the words "Kelulut Honey" must appear on the pack* — the shape of
  the rule, not its numbers — unless a writer reads the gazetted P.U.(A) directly and books the
  figures into `FACTS-VERIFIED.md` first. The instrument name, both dates and the "130A" designation
  must also be confirmed there before they are typed into body copy.
- **Legal.** `FACTS-VERIFIED.md` grants a **narrow, deliberate exception** to the statute-citation
  ban, scoped to "this article family only" (the Reg 130 / fake-honey family). E1 is arguably the
  same family but **the extension is a decision, not an assumption** — log it in `DECISIONS.md`
  before writing. Independently: the entire trehalulose literature is health-claim material (the
  *Scientific Reports* paper's own title ends "**with health benefits**"). Trehalulose may be
  explained **only** as an authenticity marker and a compositional fact. No glycaemic framing, no
  "better sugar", not even attributed.
- **Cannibalisation.** Real and manageable. `is kelulut honey fake`, `regulation 130 food
  regulations 1985` and `honey composition standard malaysia` are live secondary keywords on
  `is-honey-in-malaysia-fake`. **Fence: E1 gets one sentence and one link on the 2024 episode and
  never restates the 90% / 5.85% / 769 / 45 material.**
- **Banned terms.** Low exposure, but the kelulut and wild-harvest corpus pulls hard toward
  `traditional`. Watch it.
- **Product honesty.** **SUBUR is not kelulut.** Same non-negotiable rule the sidr family carries.
  The article must not imply SUBUR is covered by, certified under, or tested against 130A — it is a
  blend, and nothing about its testing status is published anywhere.

**Malay / Arabic share the demand?** **Malay: strongly yes** — kelulut is a domestic Malaysian
product and `madu kelulut` is native Malay vocabulary; the live `madu-kelulut-vs-madu-tualang` (R3)
would be its natural sibling and a **cross-language group is plausible**. **Arabic: no** — kelulut is
not part of the Arabic-speaking audience's shelf, and the R3 Arabic file folded kelulut into Malay
for exactly that reason.

---

### E2 — `what does raw honey mean`

- **Proposed slug:** `what-does-raw-honey-mean`
- **Intent:** informational / trust. Someone holding a jar labelled "raw" asking whether the word
  means anything.
- **Icon:** `ingrediant_08`

**Demand evidence.** No dedicated GSC row — the sibling's honey queries are brand- and origin-shaped
— but the token is the most-repeated supporting keyword across the site's own live corpus: `raw
honey` appears as a secondary keyword on **six** live English articles
(`honey-allergy-symptoms`, `honey-vs-gula-melaka`, `is-honey-vegan`, `is-honey-safe-during-pregnancy`,
`how-to-store-honey-malaysia`, `manuka-honey-vs-local-honey`) and inside the focus keyword of a
seventh (`where to buy raw honey in kuala lumpur`). **The site has leaned on the word for 22 articles
without ever defining it.**

**SERP pulled 2026-08-26** (`"raw honey" vs "pasteurized honey" what does raw mean unregulated label`):

| # | URL | Origin | Frame |
|---|---|---|---|
| 1 | `https://www.clubhouse.ca/en-ca/articles/pasteurized-vs-unpasteurized-honey` | Canada | brand content |
| 2 | `https://www.medicalnewstoday.com/articles/324966` | US | **"Benefits, risks and uses"** — health-claim lead |
| 3 | `https://drbee.ca/blogs/news/understanding-the-differences-raw-pure-unpasteurized-pasteurized-and-unfiltered-honey` | Canada | seller |
| 4 | `https://wendellestate.ca/blog/pasteurized-unpasteurized-honey/` | Canada | seller |
| 5 | `https://kashmiril.com/blogs/journal/raw-vs-pasteurized-honey` | India | **"What FSSAI Labels Really Hide"** — India's regulator |
| 6 | `https://www.countrybeehoney.ca/honey-raw-unpasteurized-and-pasteurized/` | Canada | seller |
| 7 | `https://purerawbrands.com/blogs/news/honey-is-raw-unfiltered-or-pasteurized` | US | seller |

**The gap.** **Seven results, zero Malaysian, and the only one that engages a regulator engages
India's.** The corpus already concedes the sharpest point — *"there's no official, legal definition
of raw honey"*, with *40 °C / 104 °F* circulating as an industry convention rather than a rule — but
nobody applies it to a Malaysian jar, where **Regulation 130 sets a composition standard (reducing
sugars, sucrose, HMF) and says nothing whatever about the word "raw"**.

**Angle.** The honest line no seller in that SERP will print, localised: *"raw" is a marketing word
here, not a regulated one; what Malaysian law actually controls is composition, and the one
parameter that touches heat is* **HMF**, *a heat-and-age marker with a maximum written into the
standard.* `FACTS-VERIFIED.md` already establishes the HMF logic **and its absolute limit**: the
category logic may be explained, and no SUBUR jar has a published HMF figure or any published test
result. Explaining a standard is not claiming to meet it.

**Distinct from the live 22 because:** `how-to-identify-pure-honey` tests a **jar**;
`how-to-read-a-honey-label-malaysia` reads a **label's required particulars**; this defines a
**word**. `honeycomb-honey-malaysia` compares comb against liquid, not raw against heat-treated.

**Cross-language.** The Arabic `al-farq-bayn-al-asal-al-kham-wal-musaffa` (R3, ar3) landed on
**exactly this thesis** — its fence in `ROUND-3-MAP.md` reads *"`خام` is not a regulated word"*. E2
arrives at the same core question from independent English SERP evidence, which is the site's stated
bar for a group. **A retroactive group with ar3 is defensible** — same pattern as G9 and G10.

**Risk register.**

- **Legal.** Medium. The corpus's payoff is always "raw honey retains enzymes and antioxidants" — a
  health claim. **Refuse it explicitly.** No temperature presented as the point at which honey
  "loses its benefits": that is a health claim wearing a number.
- **Fabrication.** Do not assert that Malaysian law is silent on "raw" until a writer greps the Food
  Regulations 1985 text directly (`https://faolex.fao.org/docs/pdf/mal27305.pdf`) — this file could
  not confirm it, only fail to find it. **A negative claim about a statute needs a positive read of
  the statute.**
- **Cannibalisation.** Medium. `pasteurised vs raw honey pregnancy` is a live secondary keyword on
  `is-honey-safe-during-pregnancy` — a narrow sub-case: fence and link rather than repeat. No live
  array contains `what does raw honey mean`, `raw vs pasteurised`, or anything about `raw` being
  unregulated.
- **Banned terms.** Low.

**Malay / Arabic?** **Arabic: already shipped** (ar3) — this is the group partner, not a duplicate.
**Malay: plausible** (`madu mentah`), but lower priority; the Malay corpus's equivalent anxiety is
already served by `beza-madu-tulen-dan-madu-campuran`.

---

### E3 — `can you bring honey on a plane malaysia`

- **Proposed slug:** `travelling-with-honey-from-malaysia`
- **Intent:** informational / practical, pre-departure. Highest urgency-per-searcher in the round.
- **Icon:** `ingrediant_04`

**Demand evidence.** No sibling GSC row — this is a traveller query, not a shop query. Demand is
evidenced by SERP competition: the query is contested by **honey brands that have chosen to write
it**, which is itself the signal. New Zealand Honey Co and Manukora both maintain dedicated pages,
and round 3 recorded **six publishers competing** for the Arabic equivalent, which is why `ar2`
shipped.

**SERP pulled 2026-08-26:**

| # | URL | Problem for a Malaysian reader |
|---|---|---|
| 1 | `https://www.traveloka.com/en-en/explore/destination/items-not-allowed-in-hand-luggage-trp/360334` | Generic prohibited-items list, honey not addressed |
| 2 | `https://newzealandhoneyco.com/blogs/honey-articles/can-i-bring-honey-on-a-plane` | **TSA** — US rules |
| 3 | `https://airports.malaysiaairports.com.my/en/klia1/air-travel/lag-restricted-items` | **The correct primary source** — but a rules page, not an answer about honey |
| 4 | `https://www.klia2.info/airlines/malaysia-airlines-hand-baggage-info/` | Baggage weights, not liquids |
| 5 | `https://manukora.com/blogs/honey-guide/can-you-take-honey-on-a-plane-the-simple-yes-plus-sizes-amp-tips` | **TSA** — US rules |
| 6–7 | `https://klia.info/passenger_guides/baggage_guide.htm`, `https://www.klm.com.my/information/baggage/restricted-items-hand-baggage` | Generic |

**The gap.** The two pages that actually answer "honey" answer it under **TSA**, an American
authority irrelevant to someone departing KLIA. The one Malaysian authority
(`airports.malaysiaairports.com.my`) publishes a liquids/aerosols/gels rule but never says the word
honey. **Nobody has joined the two**, and nobody at all addresses the specific object this site
sells: **solid comb in a glass jar**, where "is it even a liquid?" is a real question and "will the
jar survive the hold?" is a second one.

**Distinct from the live 22:** nothing in any live English keyword array touches travel, customs,
baggage or airports. **Cleanest cannibalisation profile in the round.**

**Cross-language.** Arabic `naql-al-asal-fi-al-taira` (R3, ar2) is the same article in another
language — its keyword array includes `السفر بالعسل من ماليزيا` (travelling with honey **from
Malaysia**) and `كسر مرطبان العسل في الحقيبة` (the jar breaking in the bag). **A retroactive group
with ar2 is the strongest grouping case in this file.**

**Risk register.**

- **Fabrication.** **The top risk, and it is a hard gate.** The container-volume and one-litre-bag
  figures circulating in search snippets were **not** confirmed by a successful read of the KLIA page
  (§0.2). The writer must fetch that page directly and book the wording into `FACTS-VERIFIED.md`. Do
  not invent an airline rule, a customs allowance or a destination limit — where the answer depends
  on the carrier or the arriving country, **say so and tell the reader to check**, exactly as ar2's
  fence requires.
- **The jar-size collision, and how ar2 already solved it.** A carry-on volume rule is inherently
  about container size, and `FACTS-COMMON.md` bans mentioning SUBUR's. **The rule is stated
  generically — check the volume declared on your own container against the limit — and SUBUR's is
  never named.** This is not a theoretical fix: `ar2` shipped under the identical constraint on
  2026-08-25, so the precedent exists and is inspectable at
  `src/content/articles/ar/naql-al-asal-fi-al-taira.ts`.
- **Legal.** Effectively nil. No health surface at all. Round 3 called ar2 the lowest-risk article of
  its round; the English twin inherits that.
- **Cannibalisation.** Lowest in the round.
- **Banned terms.** Low.

**Malay?** R3 checked and found **no Malay demand evidence at all**, and deliberately kept the topic
Arabic-only. That finding is one day old in project terms and nothing has changed. English + Arabic.

---

### E4 — `what is arabic honey`

- **Proposed slug:** `what-is-arabic-honey`
- **Intent:** informational / category orientation. Someone who has heard the phrase, or walked past
  an Arab honey shop, asking what the category actually is.
- **Icon:** `ingrediant_02` (saffron) or `ingrediant_08`

**Demand evidence — the best GSC-backed English row in the file.**

> | query | clicks | impressions | avg position |
> |---|---|---|---|
> | `arabic honey` | 1 | 37 | 14.2 |
> | `arab honey` | 0 | 27 | 14.2 |
> | `kedai madu arab near me` | 5 | 197 | 3.8 |

64 impressions on the two head terms, both pinned at **position 14.2** — the sibling is being shown
for them and losing. `kedai madu arab near me` at 197 impressions and **position 3.8** confirms that
this audience uses "Arab honey" as a live shopping category in Malaysia. `llms/en.txt` also lists
`Arabic honey Malaysia` among the site's own declared search intents.

**SERP pulled 2026-08-26** (`"arabic honey" malaysia where to buy what it is`):

| # | URL | What it is |
|---|---|---|
| 1 | `https://thekindhelper.com/malaysia/health/honey-in-malaysia/` | "11 Honey In Malaysia" listicle — does not contain the category |
| 2 | `https://originalmadhoney.com/mad-honey-in-malaysia/` | Himalayan mad honey seller |
| 3 | `https://apislux.com/collections/tualang-honey` | Tualang seller |
| 4 | `https://us.royalhoneyhouse.com/collections/malaysian-royal-honey` | **"Royal honey" — potency product** |
| 5 | `https://malaysiahoney.my/` | Seller |
| 6 | `https://elmarasi.com/en/product/royal-malaysian-honey-for-men-12-sachets-20-gr-made-for-america` | **"For Men" sachets — potency product** |

**The gap, stated plainly.** **Not one result defines the term.** The query returns a Malaysian honey
listicle that omits the category entirely, plus five product pages, two of which are male-potency
sachets. A reader typing `arabic honey` in Malaysia today gets nothing that answers them — which is
precisely why the sibling sits at position 14 for it.

**Angle.** The useful, honest answer is a **refusal of the premise**: there is no single "Arabic
honey". It is a shelf shorthand covering unrelated products judged on completely different grounds —
a monofloral (**sidr**), a compounded blend (**khalta**), comb, and country-of-origin claims (Yemeni,
Saudi). That is a category-literacy article, and it is the exact shape this site is good at:
`manuka-honey-vs-local-honey` already teaches that a grade is not a scale every honey sits on;
`types-of-honey-in-malaysia` already teaches that the Malaysian shelf is not one pool. E4 does the
same job for the Arab shelf, which no live English article touches.

**Risk register — highest-risk of the recommended set.**

- **Legal.** **High.** Two of six ranking results are male-potency products, and the English `khalta`
  corpus is worse still. A parallel pull on `what is arabic honey khalta blend explained`
  (2026-08-26) returned `https://www.amazon.com/Seven-Khalta-Energy-Support-Men/dp/B0F45LVSXW`,
  `https://habibihoneyuae.com/product/khalta-honey/` ("best honey for men in Dubai") and — Malaysian
  — `https://www.mahnazfood.com/products/mahnaz-food-khalta-honey-nuts-extra-energy-for-married-people-madu-khas-suami-isteri-lebih-bertenaga-1`.
  The article must define the category and **never** carry a single line of that framing. Not
  attributed, not quoted, not "some sellers claim".
- **Banned terms.** **Highest exposure in the round.** `Middle East` / `middle-east` is banned and
  this topic pulls toward it in every second sentence; `traditional` sits in the definitional copy of
  every khalta seller. Treat the underlying claim as banned, not only the string — round 2's Arabic
  adjective lesson applies directly.
- **Cannibalisation.** Medium-high, and it requires an explicit fence. `what-is-sidr-honey` carries
  `yemeni honey`, `sidr honey malaysia`, `monofloral honey` and `sidr honey vs honey blend`;
  `types-of-honey-in-malaysia` carries `blended honey` and `single origin vs blended honey`; the
  Malay `madu-khalta` (R3) owns khalta as a category. **Fence: E4 is a map, not a monograph.** Each
  sub-category gets a defining sentence and a link out; the moment it explains sidr at length it has
  become `what-is-sidr-honey` again and must be cut.
- **Fabrication.** Low, provided no origin claim is made about SUBUR's own ingredients and the
  retailer's separate Yemeni stock on `madinah.com.my` is not blurred into this domain.

**Malay / Arabic?** **Arabic: no** — an Arabic-speaking reader does not ask what Arabic honey is.
**Malay: partly taken** by `madu-khalta`. E4 ships single-language, like `is-honey-in-malaysia-fake`.

---

### E5 — `can babies have honey`

- **Proposed slug:** `can-babies-have-honey-malaysia`
- **Intent:** informational / safety. A parent checking before feeding.
- **Icon:** `ingrediant_08`

**Demand evidence.** No sibling GSC row. Demand is evidenced by corpus depth: the question sustains
dedicated pages at **Cleveland Clinic (twice)**, **Nemours KidsHealth (twice)**, the **Singapore Food
Agency**, **UC Master Food Preserver** and a **PMC** case report. Institutions do not maintain
duplicate pages on a question nobody asks.

**SERP pulled 2026-08-26:**

| # | URL | Origin |
|---|---|---|
| 1 | `https://www.sfa.gov.sg/food-safety-tips/food-risk-concerns/risk-at-a-glance/honey-and-infant-botulism` | **Singapore Food Agency** — the closest thing to a regional authority, and citable |
| 2 | `https://kidshealth.org/en/parents/botulism.html` | US |
| 3 | `https://health.clevelandclinic.org/when-is-it-safe-to-give-honey-to-my-baby` | US |
| 4 | `https://my.clevelandclinic.org/health/diseases/infant-botulism` | US |
| 5 | `https://kidshealth.org/en/parents/honey-botulism.html` | US |
| 6 | `https://www.blueberrypediatrics.com/health-tips/why-cant-babies-have-honey` | US |
| 7 | `https://ucanr.edu/program/uc-master-food-preserver-program/article/whats-buzz-infants-and-honey-september-2025` | US |
| 8 | `https://pmc.ncbi.nlm.nih.gov/articles/PMC3448763/` | Journal |

**The gap.** Eight results, **one Southeast Asian, zero Malaysian**, and — more usefully — **not one
of them is a honey seller**. Every page answers the honey half and none answers the *jar in front of
the parent*: a blend carrying **ground walnut and almond** raises a second, independent
child-safety question that no paediatric page can address, because it does not know what is in this
jar.

**Angle.** The live Arabic `hal-al-asal-masmuh-lil-atfal-aqal-min-sana` (pre-round-1) already found
the right shape and its answer block is the model — **two warnings, no endorsement**: no honey of any
kind under twelve months, and separately, the walnut and almond are ground in and cannot be
separated, so a nut allergy implicates the whole jar rather than part of it. Ending on a double
warning is what keeps this legal and honest on a seller's domain.

**Distinct because:** it would be the only English article that treats the jar as unsuitable for a
specific reader and says so as its conclusion.

**Cross-language.** **Retroactive group with the live Arabic article** — same pattern as G9/G10.

**Risk register.**

- **Cannibalisation — this candidate's real problem.** `is-honey-safe-during-pregnancy` carries
  **`why babies can't have honey but adults can`** in its secondary array. Round 3's own rule ("grep
  the secondary arrays, not just the focus keywords") killed candidates on exactly this kind of hit.
  It is defensible only with a stated fence — the pregnancy article uses the infant rule as a
  **one-line contrast device** to correct a misapplied memory, whereas E5 *is* the infant question —
  but **the fence is a decision, and someone has to take it.** This is why E5 ranks fifth rather than
  second.
- **Legal.** Manageable but exacting. `FACTS-COMMON.md`: the under-12-months rule is a **warning and
  is never invertible** into a safety endorsement for anyone else — round 2 caught precisely that
  inversion in a Malay draft. Report public-health consensus generically. **No age at which this
  product becomes suitable for a child may be asserted**, because no age guidance is published
  anywhere for it.
- **Fabrication.** Do not invent a Malaysian MOH position on infant honey; none was found. Cite SFA
  and the paediatric bodies as what they are.
- **Banned terms.** Low.

**Malay / Arabic?** **Arabic: live already** (the group partner). **Malay: strong** —
`bolehkah bayi makan madu` is a real Malay query shape, and `madu-untuk-ibu-mengandung` (R3) is its
natural neighbour. Worth a Malay slot in this or a later round.

---

### E6 — `buy honey in bulk malaysia` (trade supply) — the reserve that changed

- **Proposed slug:** `buying-honey-in-bulk-malaysia`
- **Intent:** commercial / trade. A shop, pharmacy, online seller or distributor asking whether they
  can stock this and how.
- **Icon:** `ingrediant_10`

**Publication basis — the part that genuinely changed.** All of §1 above, verified in the repo on
2026-08-26. Nothing in this article needs to be invented: the form exists, the routing exists, the
business-type and volume selectors are real published UI strings, delivery coverage is published,
and the *"quoted rather than published"* framing is already in `llms/en.txt`.

**SERP pulled 2026-08-26** (`wholesale honey supplier malaysia bulk order`):

| # | URL | What it sells |
|---|---|---|
| 1–2, 4 | `https://www.alibaba.com/malaysia-honey-supplier-suppliers.html` and two further Alibaba showrooms | Commodity sourcing, MOQ quoted at **1 MT** |
| 3 | `https://honeyland.com.my/raw-honey-wholesale-supplier-in-malaysia/` | **5 kg / 10 kg / 20 kg / 25 kg drums** |
| 5 | `https://stevehoney.com/product/wholesale-honey-for-repack/` | **75 kg drums, minimum 4 drums per pallet** |
| 6 | `https://deleehoney.com/seamless-bulk-honey-packaging-malaysia/` | **Drums, IBC, customised packs** |
| 7 | `https://www.go4worldbusiness.com/suppliers/malaysia/honey.html` | Export directory, **USD per kg** |
| 8–9 | `https://www.thehoneyhearts.com/`, `https://malaysiahoney.my/wholesale/` | Foodservice and retail supply |

**The gap — and the honest limit on it.** Every ranking result answers a **commodity** question:
drums, IBC totes, price per kilogram, repacking. **Nobody answers the finished-product question** —
*"I run a shop and want to stock this brand; what do I do?"* A second pull
(`how to stock a honey brand in my shop malaysia reseller enquiry`, 2026-08-26) confirmed it:
the results were brand listicles (`https://says.com/my/makan/pure-honey-brands-malaysia`,
`https://www.bellobello.my/blog/honey-brands-malaysia/`) and the same wholesalers again. The gap is
real.

**But state the weakness plainly.** The pathway objection is dead; **a demand objection replaces it,
and it is not resolved.** There is **no GSC row** for any wholesale or bulk query on the sibling —
not one of 222 honey queries. The head keyword's SERP is served by a different product class
entirely, so ranking for it would deliver the wrong visitor. The intent E6 can actually serve is
narrower and thinner than the keyword it is named after.

**Why it may still be worth a slot.** Value per visit is the highest in the round — a retailer is
worth many jars — the fabrication risk is now genuinely zero, and `llms/en.txt` already carries the
wholesale FAQ with **no URL behind it**, so this is as much an **AEO / citation** play as an SEO one.
That is a defensible reason to ship it and a defensible reason to skip it. **It is the round's
judgement call and it should be taken by the owner, not assumed by a researcher.**

**Risk register.**

- **Fabrication.** Now low, but three landmines remain: **no MOQ**, **no price**, **no lead time**.
  The article says terms are quoted on enquiry and stops. It may describe the form's own fields
  (business type, the two monthly-volume brackets) as *what the form asks*, never as *what the terms
  are*.
- **Jar size.** **`llms/en.txt`'s own wholesale paragraph is contaminated** — "the same jars in the
  same three sizes", and its FAQ's "the 500g jar". Quarantined by the round-3 constraint. **Do not
  carry it across; do not contradict it either. Skip the subject.**
- **Cannibalisation.** Low. `where-to-buy-raw-honey-kuala-lumpur` covers **consumer** buying,
  including `buying honey online vs in store`. Fence E6 to trade and link across.
- **Legal.** Nil.
- **Banned terms.** Low.

**Malay / Arabic?** **Malay: plausible** (`borong madu`, which `llms/en.txt` itself lists as an
intent), and the natural language for a Malaysian shopkeeper. **Arabic: weak.**

---

### E7 — `how do bees make honeycomb`

- **Proposed slug:** `how-bees-make-honeycomb`
- **Intent:** informational / curiosity, upper funnel.
- **Icon:** `ingrediant_08`

**SERP pulled 2026-08-26:** `https://askdruniverse.wsu.edu/2015/11/02/why-do-bees-make-hexagons/` ·
`https://www.nature.com/articles/srep28341` (and its PMC mirror) ·
`https://www.discovermagazine.com/planet-earth/scientists-explain-the-amazing-process-by-which-bees-make-hexagonal-honeycombs` ·
`https://www.honeybeesuite.com/how-honey-bees-make-hexagons/` ·
`https://www.sciencefriday.com/educational-resources/why-do-bees-build-hexagonal-honeycomb-cells/` ·
`https://www.amesfarm.com/blogs/honeycomb/what-exactly-is-honeycomb-and-how-bees-make-it` ·
`https://www.beepods.com/the-science-and-beauty-behind-hexagons/`

**Assessment.** Excellent, well-sourced corpus — wax secreted by young workers from abdominal glands,
cells begun round and pulled hexagonal by body heat (*Scientific Reports* srep28341), the
minimum-material geometry. **The corpus is strong, not thin**, and it is US and academic rather than
Malaysian — which is a *weaker* gap than E1–E5, because a physics answer does not need localising the
way a regulation or an airport rule does.

**Why it is not recommended.** Two live English articles already occupy the comb:
`honeycomb-honey-malaysia` (secondary: `capped comb`, `is honeycomb real honey`, `why is honeycomb
expensive`) and `can-you-eat-honeycomb-wax` (secondary: `comb honey texture`, `cappings wax`). E7
would be the third comb article and the first with **no commercial intent at all**. Lowest legal risk
in the round and the best fallback if a recommended candidate is vetoed — but it is filler, and round
4's brief is explicitly against padding. **Reserve.**

**Malay / Arabic?** Both plausible, neither urgent.

---

### E8 — `why does honey taste different` (round-2 reserve, re-argued)

- **Proposed slug:** `why-does-honey-taste-different`

**SERP pulled 2026-08-26:**
`https://spice.alibaba.com/spice-basics/honey-taste-explained--flavor-science-and-culinary-truths` ·
`https://www.mannlakeltd.com/blog/why-honeys-have-different-tastes/` ·
`https://manukora.com/blogs/honey-guide/why-each-manuka-honey-batch-is-unique` ·
`https://honeyandspice.in/blogs/raw-honey-blog/why-honey-never-tastes-the-same` ·
`https://www.smileyhoney.com/blogs/honey-school/hive-honey-flavor-and-location` ·
`https://crystalsrawhoney.com/blogs/news/reasons-why-honey-can-vary-in-taste` ·
`https://www.adagiobees.com/blog/91/why_do_different_honeys_taste_different` ·
`https://pahadisource.com/blogs/news/why-your-honey-tastes-different-every-time-and-why-thats-a-good-thing` ·
`https://devbhumi.com/why-does-honey-vary-in-taste-smell-and-color/`

**Has the reason changed? Yes — in both directions, and it nets to "still reserve".**

- **Room removed.** Every one of those nine pages resolves to the same payoff: *variation is a sign
  of purity; consistent taste means heavy processing.* That is the line `how-to-identify-pure-honey`
  already owns ("variation ≠ fake"), and `why-is-honey-dark-or-light` shipped the same corrective for
  a second sensory trait on 2026-08-25. Publishing it a third time is the definition of a thin round.
- **Boundary sharpened.** Because colour is now taken, the only thesis left to E8 is genuinely its
  own: **in a spiced blend, taste is driven by the added ingredients, not the floral source** — so
  the entire nine-page corpus, all of it about monofloral and wildflower honey, does not describe
  this product class at all. That is a real and distinct point, and round 2 did not have it.
- **Why it still fails.** That point is one or two paragraphs, not 800–1,000 words, and the rest
  would have to be filled with material two live articles already own. And the corpus's payoff
  sentence ("consistent taste means heavy processing") is an **unverified seller claim** that E8
  would have to either adopt (fabrication) or spend space refusing.

**Verdict: reserve again, with a better-defined reason than round 2 had.** Revisit only if a future
round wants a blend-specific sensory article that can carry itself on the ingredient thesis alone.

---

### E9 — `cooking with honey` / honey glaze and marinade

- **Proposed slug:** `cooking-with-honey-malaysia`

**SERP pulled 2026-08-26:** `https://spice.alibaba.com/spice-basics/honey-glaze-recipe` ·
`https://www.yahoo.com/lifestyle/prevent-chickens-honey-glaze-burning-193047501.html` ·
`https://hucklebeefarms.com/blogs/buzzing-from-the-hive/honey-for-marinades` ·
`https://hucklebeefarms.com/blogs/buzzing-from-the-hive/can-you-cook-with-honey` ·
`https://localhivehoney.com/blogs/blog/tips-on-grilling-with-honey` ·
`https://norcalnectar.com/blog/raw-honey-marinades` ·
`https://www.americastestkitchen.com/recipes/1462-honey-mustard-glaze-for-salmon` ·
`https://www.aol.com/articles/heres-grilling-secret-using-honey-120000463.html`

**Assessment.** There is a Malaysian hook — `ayam madu near me` appears in the sibling GSC log (2
impressions, pos 17.5) and honey-glazed chicken is a staple — and the corpus is entirely Fahrenheit
and American, which is the same geographic gap `baking-with-honey-malaysia` was commissioned to
close.

**Why it is not recommended.**

1. **Cannibalisation.** `baking-with-honey-malaysia` already carries `oven temperature when baking
   with honey` and `does honey make cakes brown faster`. The
   sugars-scorch-before-the-protein-cooks mechanism **is the same physics already published**, and
   E9 would restate it in a pan.
2. **Pattern fatigue.** E9's honest conclusion is that a comb-and-nut blend is a spoon product that
   does not belong in a marinade — the identical closing move as `honey-in-hot-drinks-malaysia`
   ("ends by ruling SUBUR *out* of the use case"). One self-exclusion article is a strong editorial
   signal; a third in consecutive rounds reads as a formula.
3. **Recipe SERP.** America's Test Kitchen plus a beekeeper-recipe corpus is a strong incumbent
   field, not a thin one.

**Verdict: reserve.**

---

### E10 — `corporate honey gift malaysia` — the brief's framing, assessed and still declined

- **Proposed slug (if commissioned):** `corporate-honey-gift-malaysia`

**The brief is right on the facts and I am accepting the correction.** The round-2/3 reason — "SUBUR
has no published bulk pathway, so the article would invent one or dead-end" — is **factually wrong**,
and §1 documents exactly why. A researcher repeating it in round 4 would be repeating an error, and
I am not repeating it.

**But a different objection replaces it, and it is stronger than the one it replaces.**

**SERP pulled 2026-08-26** (`corporate honey gift malaysia bulk gifting`):

| # | URL | What the page's offer actually is |
|---|---|---|
| 1 | `https://giftr.my/collections/corporate-gifts-bulk-purchase` | Customised gift sets, hampers, annual-dinner door gifts |
| 2 | `https://junglehouse.com.my/collections/honey-gift` and `https://junglehouse.com.my/pages/gifting` | **Customised logo cards on orders above 30 sets** |
| 3 | `https://alittlething.co/product/corporate-sweet-honey-jar/` | **Personalisation from 20 units; special pricing from 200 units** |
| 4 | `https://giftandfavor.com/product/personalized-honey-jars/` | **Customisable cloth and hanging tags to the event's theme and colours** |
| 5 | `https://www.notohoneyhouse.com/honey-door-gift-20ml-with-pouch-bag-and-label` | **20 ml door gift, pouch bag, custom label** |
| 6 | `https://take.app/honeyimhome` | **50 g door-gift jars, bulk pricing, custom packaging** |
| 7 | `https://giftsdepot.my/` | Corporate gift supplier, **instant bulk pricing** |
| 8 | `https://manukaandrosenskyhoney.com/product/rosensky-honey-premium-trio-honey-gift-pack/` | Multi-jar gift pack |

**The objection, in one line: the entrance fee to this SERP is customisation and a size decision, and
SUBUR can offer neither.**

1. **Personalisation is the product.** Logo cards, custom labels, themed tags, pouches, hampers —
   seven of eight results lead with it. SUBUR publishes **no gift box, no wrapping, no
   personalisation, no hamper**. Round 3's `ar6` fence says exactly this and nothing has changed.
2. **Every ranking page answers a size question, and this round may not.** 20 ml, 50 g, trio packs,
   per-recipient formats. The round-3 constraint bans jar size and weight **entirely — not even to
   say the site does not publish them**. An article that cannot engage the format question at all
   cannot compete in a SERP where format *is* the query.
3. **The published pathway is a trade form, not a gifting one.** Its business types are Retail Shop,
   Online Seller, Distributor, Pharmacy/Health Store, Other. A company buying jars for staff is not
   any of the first four. The pathway exists — it is simply not pointed at this reader.
4. **What would be left** is an article whose every paragraph is a negative, published against
   competitors holding catalogues and instant pricing.

**Verdict: discard — new reason, properly argued.** The gifting *intent* is better served by the live
`honeycomb-hantaran-gift-idea` and the Arabic `hadiya-min-malizia-lil-ahl`, and the *bulk* intent by
E6 if it is commissioned. **If the owner wants corporate gifting, the blocker to lift first is the
jar-size decision logged in `FACTS-COMMON.md` and `DECISIONS.md` (D26) — not this article.**

---

## 4. Killed by the secondary-keyword grep

Recorded because round 3's map instructs it, and because these are the candidates a reader of this
file would otherwise ask about.

| Candidate | Killed by |
|---|---|
| `why is honey expensive in malaysia` — a price *explainer* that never states a price, aimed at the ~800 impressions of price-shaped GSC demand | **Triple hit.** `why is honeycomb expensive` (`honeycomb-honey-malaysia`), `why is local honey more expensive` (`is-malaysian-honey-local-or-imported`), `why is sidr honey expensive` (`what-is-sidr-honey`). Already answered three times |
| `does honey expire` / shelf life (EN) | `does honey expire` is a live secondary on `how-to-store-honey-malaysia`; Malay `tarikh-luput-madu` and the live Arabic own the topic |
| `honey in coffee` | `adding honey to kopi` is a live secondary on `honey-in-hot-drinks-malaysia` |
| `what does "blend" mean on a honey label` | **Triple hit:** `madu asli vs madu campur` (`how-to-identify-pure-honey`), `blended honey` + `single origin vs blended honey` (`types-of-honey-in-malaysia`), `chunky vs smooth honey blend` (`honey-with-nuts-malaysia`) |
| `honey vs maple syrup` / honey substitutes | `vegan alternatives to honey`, `what to use instead of honey`, `honey vs maple syrup vegan` — all live on `is-honey-vegan` |
| `can you refrigerate honey` / crystallisation | `can you refrigerate honey`, `how to soften crystallised honey`, `is crystallised honey still good` — all live on `how-to-store-honey-malaysia` |
| A second `black seed honey` article (the sibling's largest *legal* cluster: `black seed honey` 515 imp + `black seed honey price` 568 + `black seed honey benefits` 140 + ~30 long-tail rows) | The live `black-seed-honey-benefits` holds the topic — **but with only five keywords, the thinnest array on the site.** **Recommendation without an article: widen that array** to absorb `black seed honey`, `black seed flower honey`, `honey with black seed`, `black cumin honey`, `black seed infused honey`. A keyword-array edit, not a round-4 slot |
| `ginseng honey` | Not a keyword collision but a **legal** one. SERP pulled 2026-08-26 (`ginseng honey what is ginseng root in honey blend`) returned eight retail listings — `https://www.amazon.com/ONEROOT-Organic-Ginseng-Honey-300g/dp/B07RB7NSD9`, `https://www.amazon.com/Korean-Ginseng-Root-Mixed-Honey/dp/B0G48ZZSFD`, `https://balqees.co.uk/products/raw-honey-and-ginseng-fusion` and similar — with **zero editorial**, and a corpus uniformly framed as `traditional Chinese medicine` / `vitality` / `reduce fatigue`. Both the banned-term list and the legal ceiling sit on the only payoff the topic has. **Discard** |
| `is honey halal` / certification | **Fabrication.** SUBUR publishes no certification of any kind. Unchanged since round 1 |

---

## 5. Ranked table

| # | Focus keyword | Slug | Demand evidence | Gap | Legal risk | Fabrication risk | Cannibalisation | Verdict |
|---|---|---|---|---|---|---|---|---|
| 1 | `kelulut honey standard malaysia` | `kelulut-honey-new-rules-malaysia` | Rule live since 1 Mar 2026; 3 live EN articles route to kelulut and none can answer | **Widest in round** — consumer SERP empty, only blocked trade press and sellers | Low, with a scoped statute decision | **High — hard gate, no numbers without a primary read** | Medium, fenced | **RECOMMEND** |
| 2 | `what does raw honey mean` | `what-does-raw-honey-mean` | `raw honey` is a secondary keyword on 6 live articles and undefined in all of them | 7 results, 0 Malaysian, only India's regulator engaged | Medium — refuse the enzyme payoff | Medium — verify the statute silence | Medium, fenced | **RECOMMEND** |
| 3 | `can you bring honey on a plane malaysia` | `travelling-with-honey-from-malaysia` | 6 publishers competing in Arabic (R3); two honey brands maintain dedicated pages | TSA answers vs a Malaysian rules page nobody has joined | **Nil** | Medium — KLIA page must be read directly | **Lowest in round** | **RECOMMEND** |
| 4 | `what is arabic honey` | `what-is-arabic-honey` | **GSC: 37 + 27 imp, both @ pos 14.2**; `kedai madu arab near me` 197 imp @ 3.8 | **No page defines the term at all** | **High — potency adjacency** | Low | Medium-high, fenced | **RECOMMEND** |
| 5 | `can babies have honey` | `can-babies-have-honey-malaysia` | 8 institutional pages incl. SFA; two institutions run duplicates | 1 SEA source, 0 Malaysian, 0 sellers, nobody addresses ground nuts | Medium — never invertible | Low | **High — needs an explicit fence decision** | **RECOMMEND (5th)** |
| 6 | `buy honey in bulk malaysia` | `buying-honey-in-bulk-malaysia` | **Publication-side only — no GSC row in 222 queries** | Real: 9 results all commodity drums/IBC, none finished-product | Nil | Now low (was the old blocker) | Low | **CONDITIONAL 6th** |
| 7 | `how do bees make honeycomb` | `how-bees-make-honeycomb` | Strong corpus — but strong means competitive | Weak — physics needs no localising | **Lowest in round** | Low | Medium — 3rd comb article | Reserve |
| 8 | `why does honey taste different` | `why-does-honey-taste-different` | Nine-page corpus | Thesis exists but is 2 paragraphs, not 950 words | Low | Medium — corpus payoff unverified | High vs 2 live articles | Reserve (re-argued) |
| 9 | `cooking with honey` | `cooking-with-honey-malaysia` | `ayam madu near me` 2 imp | Real, but the same physics as the live baking article | Low | Low | High | Reserve |
| 10 | `corporate honey gift malaysia` | — | Vendor-dense SERP | Entrance fee is customisation + a size answer | Low | **Blocked by the jar-size ban, not by the pathway** | Medium | **Discard — new reason** |

---

## 6. Recommendations

**I found five I will defend without qualification, and a sixth that is a judgement call. I did not
find six of equal strength, and this file will not pretend otherwise.**

### Recommended without reservation

1. **E1 `kelulut honey standard malaysia`.** The best topic found in four rounds of English research
   on this site. A Malaysian food regulation has been in force since 1 March 2026 and **no
   consumer-facing page anywhere explains it** — the only coverage sits behind a 403 and a B2B
   paywall. It reframes the 2024 "90% fake" episode with a compositional fact instead of a health
   claim, it is checkable, and it is genuinely new information rather than a better-written version
   of something that already exists. **Ship it first, and gate it on a primary read.**

2. **E2 `what does raw honey mean`.** The site has used "raw" as a supporting keyword on six articles
   and defined it on none. The corpus concedes the sharp point ("no official, legal definition") but
   localises it to Canada, the US and India. The Arabic twin already proved the thesis lands. A
   structural gap in the site's own vocabulary.

3. **E3 `can you bring honey on a plane malaysia`.** Cleanest cannibalisation profile, effectively
   zero legal surface, a genuine geographic gap (TSA answers for a KLIA departure), and a ready-made
   retroactive group with `ar2` — which also means the hardest constraint (container volume against
   the jar-size ban) has already been solved once in production and can be copied rather than
   re-litigated.

4. **E4 `what is arabic honey`.** The only legal, unclaimed, English-language GSC row in the file: 64
   impressions across two head terms, both stuck at position 14.2, against a SERP where **not one
   result defines the term**. Highest legal and banned-terms exposure of the recommended set, so it
   needs the tightest fences — but the demand here is *measured*, not inferred, which is rare in this
   round.

5. **E5 `can babies have honey`.** Real safety service, an institutional corpus with no Malaysian and
   no seller entry in it, and a live Arabic partner whose double-warning structure is the right
   model. **Recommended conditionally on one decision being taken and written down**: the pregnancy
   article's secondary keyword `why babies can't have honey but adults can` is a genuine hit, and
   somebody has to rule that a one-line contrast device inside a pregnancy article does not own the
   infant question. If that ruling is refused, drop E5 and promote E7.

### The sixth — a decision, not a recommendation

6. **E6 `buy honey in bulk malaysia`.** The brief's correction is accepted in full: the wholesale
   pathway is published, the old reason was wrong, and the article can now be written without
   inventing anything. **What it cannot show is demand** — zero rows in 222 sibling queries, and a
   head-keyword SERP serving a different product class. Its case rests on commercial value per visit
   and on giving the wholesale FAQ in `llms/en.txt` a URL it currently does not have. **Ship it if
   round 4 wants six; ship five and fix the site section instead if it wants only strong articles.**
   Round 4's own brief says it would rather ship four strong than six padded, and E6 is the exact
   article that test was written for.

### If a slot opens

Promote **E7 `how do bees make honeycomb`** — the safest article available, and honestly labelled as
filler rather than dressed up as a gap.

### Non-article recommendation

Widen the keyword array on the live `black-seed-honey-benefits` from five entries to absorb the
sibling's largest legal cluster (~1,200 impressions across `black seed honey`, `black seed flower
honey`, `honey with black seed`, `black cumin honey`, `black seed infused honey`). That is an edit,
not a slot, and it captures more measured demand than E6 or E7 would.

---

## 7. Discard and reserve table

| Candidate | Status | Reason, and whether it changed |
|---|---|---|
| `corporate honey gift malaysia` | **Discard — new reason** | Old reason ("no bulk pathway") is **obsolete and wrong**; §1 documents the published pathway. Replaced by: the SERP's entrance fee is personalisation and a per-recipient **size** answer, and the round-3 jar-size ban blocks the second outright. The blocker to lift is D26, not this article |
| `why does honey taste different` | **Reserve — reason re-argued** | Changed both ways: `why-is-honey-dark-or-light` shipping removed room and sharpened the boundary. The remaining thesis (a blend's taste is its ingredients, not its floral source) is two paragraphs, not an article |
| `saffron honey` (EN) | **Reserve — unchanged** | No photography pass has happened; the general "threads are visible" answer does not transfer to a thick comb blend. SERP re-pull 2026-08-26 still ranks an explicit sexual-benefit page. Malay `madu-saffron` holds the safe angle |
| `honey face mask malaysia` | **Discard — unchanged** | Still needs a cosmetic-claim legal read. Still not commissioned. Not a writer's call |
| `how much honey per day` | **Disqualified — permanent** | Dosage |
| Sexual / aphrodisiac / marriage-outcome cluster (~1,700 imp, itemised §0.3) | **Disqualified — legal** | Illegal under the Food Regulations 1985. Attribution does not launder it |
| All price queries (~800 imp) | **Disqualified — fabrication** | No price published anywhere |
| Jar size / weight queries | **Disqualified** | Round-3 hard constraint; D26 still open |
| Al Shifa brand-verification cluster (30+ rows) | **Discard — unchanged** | Competitor naming buys nothing; `how-to-identify-pure-honey` already debunks the same tests. Internal linking, not a page |
| `is honey halal` / certification | **Disqualified — fabrication** | No certification of any kind is published |
| `honey for cough` / `sore throat` / `diabetes` | **Disqualified — legal** | Condition-named. Defensible science does not make it legal here |
| `ginseng honey` | **Discard — legal + thin** | Eight retail listings, zero editorial, corpus uniformly vitality-framed. The only payoff the topic has sits on both the banned list and the legal ceiling |
| `why is honey expensive in malaysia` | **Discard — cannibalisation** | Answered three times already in live secondary arrays |
| `does honey expire`, `honey in coffee`, `what "blend" means`, `honey substitutes`, `refrigerating honey` | **Discard — cannibalisation** | Each is a live secondary keyword; see §4 |
| `cooking with honey` / marinades | **Reserve** | Same browning physics as the live baking article, plus a third consecutive self-exclusion ending |
| `how do bees make honeycomb` | **Reserve — promote if a slot opens** | Strong corpus, weak gap, third comb article, no commercial intent. Honest filler |
| Ramadan / suhoor | **Reserve — unchanged** | Ranking corpus is health-claim throughout |
| A second `black seed honey` article | **Discard — handled by an edit** | Widen the live article's five-keyword array instead |

---

## 8. Evidence integrity

- **No search-volume figure appears anywhere in this file.**
- Every SERP claim carries its URL and the pull date **2026-08-26**.
- Every GSC figure is quoted from `gsc-demand.md` and is labelled as a **sibling-property proxy**
  (`madinah.com.my`), never as SUBUR's own data. `suburhoney.com` has **0 queries with impressions**,
  and that zero is treated as uninformative, per that file's own instruction.
- **Three fetch failures and one tool limitation are recorded in §0.2 rather than papered over**, and
  two of them are converted into hard verification gates on candidates **E1** and **E3** rather than
  into published assertions.
- Nothing in this file is a fact sheet. Per D11, the per-article fact sheet is the candidate section
  above plus its row in the round map. **Any external number a writer wants to publish from here —
  the 130A parameters, the KLIA volume rule, the trehalulose figures — must first be verified into
  `FACTS-VERIFIED.md`. A demand file is not a source.**
