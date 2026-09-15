# Round 7 — keyword → article map

**15 articles: 8 English, 7 Malay, 0 Arabic.** Branch `press-round-gsc` off `master` @ `e1c633e`.

This round is different from rounds 1–6 in three ways, and each is a deliberate reversal that is
recorded rather than assumed.

## 1. The keywords were supplied, not derived

Rounds 1–6 had no keyword tool and built demand evidence from live SERP/PAA inspection. This round
was handed five keywords pulled this session from **live Google Search Console + Google Keyword
Planner**. They are not re-derived here, and no figure below is estimated.

| Keyword | Vol/mo | Competition | Language | Source |
|---|---|---|---|---|
| royal honey malaysia | 170 | HIGH | EN/MS | Keyword Planner, 2026-09-10 |
| tenaga batin | 140 | LOW | MS | Keyword Planner, 2026-09-10 |
| honeycomb malaysia | 110 | MEDIUM | EN | Keyword Planner, 2026-09-10 |
| madu asli | 1,000 | HIGH | MS | Keyword Planner, 2026-09-10 |
| honey malaysia | 880 | HIGH | EN | Keyword Planner, 2026-09-10 |

**The product's own niche has no search demand.** Verified in Keyword Planner the same session:
`madu kesuburan` 10/mo · `madu untuk suami isteri` 0 · `madu tenaga batin lelaki` 0 ·
`supplement kesuburan` 10 · `petua cepat hamil` 40. That is why the list above is category and
competitor terms. It is not to be "corrected" back to fertility terms in a later round.

## 2. Arabic gets nothing this round

Every keyword supplied is English or Malay. Stage 1's rule is that the language mix comes from the
demand data, not from the site's locale list, so the whole budget moves to EN and MS. Arabic keeps
its 38 live articles and gets the next round when Arabic demand data exists. **Recorded, not
silently skipped.**

## 3. Every article ships single-language, in no hreflang group

Five of the fifteen could plausibly have been paired EN↔MS. None are. Two reasons:

- D29 only allows a group where both languages arrived at the same question from their own
  research. Here one keyword row was handed to both languages at once, which is the exact condition
  that produced D39's translation-mirroring (8 FAQs vs 8, three FAQ answers clause-for-clause).
- D14 already settled that a single-language article gets no hreflang and no `x-default`, and
  `sitemap.xml.ts` has enumerated `ARTICLES` rather than `ARTICLE_GROUPS` since D6. Nothing is lost
  by leaving them ungrouped, and the mirroring failure mode is removed entirely.

Consequence for the gate: hreflang check 15 will WARN, not FAIL, on all fifteen. That is the
design, per `gates.md`.

---

## The indexing problem this round is actually built around

133 URLs are live. **Two have ever received a single impression in 90 days.** That is not a
word-count problem, and fifteen more articles hung off the same hub will not fix it.

Stage 0 found the mechanical cause:

- `src/pages/[lang]/retail/index.astro`, `benefits/`, `why-us/`, `contact/` **do not render
  `article.related` at all**. The field exists on every money page and is `[]` on all twelve.
- The homepage links to the blog **only from the footer**.
- Therefore every one of the 115 articles is reachable from exactly one internal hub,
  `/{lang}/blog/`, which is a flat undifferentiated list of 38–39 links with no topical grouping.

So the round's linking plan is not decoration. It is the deliverable:

1. Each new article carries **3–5 outbound** links: at least one money page, at least two siblings.
2. Each new article gets **inbound links from pages that already exist** — the money pages and,
   for the two cluster hubs, the homepage FAQ.
3. Clusters are built hub-and-spoke rather than five parallel head-term pages, so link equity
   concentrates instead of splitting.
4. Where a head term is **already held by a live page**, this round builds the supporting cluster
   around it and links into it, rather than publishing a competitor to it (Stage 1 rule 5).

---

## K1 — royal honey malaysia (170/mo, HIGH) — 3 articles, 2 EN + 1 MS

The direct competitor category: Etumax, Black Horse and the "vital honey" / "VIP royal honey"
sachets. Zero occurrences of `royal honey`, `vital honey` or `etumax` anywhere in `src/content/`
today, so nothing is cannibalised.

**⛔ This cluster is the reason the round needs a written ceiling policy.** In round 3 the
~1,700 impressions of aphrodisiac/marriage-outcome demand were **refused** (D30), including
`aphrodisiac honey near me` at position 1.3. The user has now explicitly directed this round to
target the competitor category. That is a reversal of D30 and is logged as **D61**. The reversal is
of the *keyword*, not of the ceiling: the ceiling is unchanged, and the articles are written around
the claim.

The angle that makes this legal, useful and citable is **regulatory literacy**, which D39 already
established is permitted — the ceiling forbids a *product* claim, and explicitly permits reporting
what a public-health body has said. So these articles report what regulators have published about
the category and teach a Malaysian reader to check a product on the national register. They make no
statement whatever about what any honey does to a body, SUBUR's included.

| | slug | focus keyword |
|---|---|---|
| en | `royal-honey-in-malaysia-explained` | royal honey malaysia |
| en | `is-royal-honey-safe` | is royal honey safe |
| ms | `royal-honey-vs-madu-biasa` | royal honey malaysia |

- **`royal-honey-in-malaysia-explained`** — hub. What the sachet category is, how it is sold, what a
  Malaysian buyer is actually looking at, and how to check a product's registration status. Names a
  brand **only** where a named regulator notice names it, quoting the regulator. Otherwise describes
  the category generically.
- **`is-royal-honey-safe`** — the PAA question. Answer: it depends entirely on the specific product,
  and here is the public evidence and the public tool. No general verdict on the category, no
  verdict on any product a regulator has not named.
- **`royal-honey-vs-madu-biasa`** — Malay, comparison intent. Deliberately a different intent from
  the English hub so the two are not each other's translation. What separates a sachet product from
  a jar of honey: ingredient list, registration status, what the label must carry.

⛔ Writers' hard limits for this cluster: no statement that any product improves, restores or
affects vitality, stamina, potency or fertility — including by implication or by contrast
("unlike X, SUBUR…"). No penalty figures. No sub-regulation numbers. No claim or implication that
SUBUR was tested, is registered with NPRA, or would pass anything. SUBUR is a **food**, not a
registered traditional product, and the articles must not blur that.

## K2 — tenaga batin (140/mo, LOW) — 3 articles, all MS

The only low-competition term matching the product promise, and the single highest-risk term in the
round. Zero occurrences of `tenaga batin` or `batin` in `src/content/` today.

**Written entirely around the claim.** The searcher's phrase is treated as *what people type*, never
as *what the product does*. The three articles are consumer-literacy pieces about the claims made on
products in this category and how Malaysian rules treat them.

| | slug | focus keyword |
|---|---|---|
| ms | `dakwaan-tenaga-batin-pada-produk` | tenaga batin |
| ms | `cara-semak-produk-berdaftar-kkm` | produk tenaga batin |
| ms | `kandungan-produk-tenaga-batin` | kandungan produk tenaga batin |

- **`dakwaan-tenaga-batin-pada-produk`** — hub. What the phrase means as a search term, why a food
  sold in Malaysia may not promise an outcome, and what a reader should read instead of the claim.
- **`cara-semak-produk-berdaftar-kkm`** — the practical piece: food vs registered traditional
  product, what a MAL number is and is not, and the public register lookup. Genuinely useful, links
  well.
- **`kandungan-produk-tenaga-batin`** — what is actually inside blends in this category and how the
  law lets each ingredient be described. Ingredient-literacy, not efficacy.

⛔ **The live site already says something here and the articles must not contradict it.** The
homepage FAQ (`src/i18n/locales/en/common.json`, `faq.items[3]`) reads *"The blend includes
ingredients valued for supporting overall wellbeing and fertility."* No article in this cluster may
issue a verdict that implies the site's own copy is non-compliant, and none may repeat or extend
that phrasing either. D35's finding was that almost every blocker was a new article disagreeing
with the site's own published copy. The line itself is escalated to the owner in `GATE.md` as a
money-page finding — it is reported, not silently rewritten, because homepage marketing copy is the
owner's call.

## K3 — honeycomb malaysia (110/mo, MEDIUM) — 3 articles, all EN

**The head term is already held, and this round does not compete with it.** `en/honeycomb-honey-malaysia`
targets `honeycomb honey malaysia` and already carries an H2 *"Where do you buy honeycomb honey in
Malaysia?"* and another on why comb is priced above liquid honey. `en/can-you-eat-honeycomb-wax`
covers eating, chewing, swallowing and wax in a hot kitchen, and holds the secondary
`honeycomb vs honey texture`.

A fourth near-duplicate would split the term. Stage 1 rule 5 says improve the page that holds it, so
the three new articles are the **cluster that page has never had**, each on a question the site has
never answered, all three linking into it, plus a new inbound link from `/en/retail/` — which is
where the site's only GSC query, *"honey comb for sale near me"*, already draws its 15 impressions.

| | slug | focus keyword |
|---|---|---|
| en | `how-is-honeycomb-made` | how is honeycomb made |
| en | `honeycomb-vs-beeswax-and-other-bee-products` | honeycomb vs beeswax |
| en | `how-to-serve-honeycomb` | how to serve honeycomb |

Verified absent from all 1,063 live focus + secondary terms. `honeycomb vs beeswax` is distinct from
the live secondary `honeycomb vs honey texture` (bee-product glossary vs mouthfeel).

## K4 — madu asli (1,000/mo, HIGH) — 3 articles, all MS

The category head. Four live Malay articles sit near it — `cara-kenal-madu-asli` (home tests),
`kedai-madu-asli-selangor` (where to buy), `beza-madu-tulen-dan-madu-campuran` (pure vs blended),
`90-peratus-madu-palsu` — but **none takes `madu asli` itself as its focus**, and none defines the
term.

| | slug | focus keyword |
|---|---|---|
| ms | `apa-itu-madu-asli` | madu asli |
| ms | `madu-asli-import-atau-tempatan` | madu asli import |
| ms | `madu-kampung-vs-madu-berjenama` | madu kampung |

- **`apa-itu-madu-asli`** — hub, and the piece the site is missing: what the word means, what a
  standard actually defines, and whether "asli" is a legal term on a Malaysian label or marketing
  language. Explicitly **not** a how-to-test article — it links to `cara-kenal-madu-asli` for that,
  and that article links back. Both facts must be stated in the map so a later round does not merge
  them.
- **`madu-asli-import-atau-tempatan`** — a real gap: the English `is-malaysian-honey-local-or-imported`
  has no Malay counterpart, and this is researched from Malay demand rather than translated from it.
- **`madu-kampung-vs-madu-berjenama`** — `madu kampung` appears nowhere on the site. Loose/unbranded
  honey vs a labelled jar: what each does and does not tell a buyer.

⛔ Do not target `madu kelulut` (3,600/mo) or `madu tualang` (2,400/mo). SUBUR sells neither;
ranking for them buys traffic that bounces. They may be mentioned comparatively, never as a title
promise or a claim. `ms/madu-kelulut-vs-madu-tualang` already exists and is the link target.

## K5 — honey malaysia (880/mo, HIGH) — 3 articles, all EN

The head term is **not** taken as a focus by any live page. Four articles sit under it —
`types-of-honey-in-malaysia` (varieties), `is-malaysian-honey-local-or-imported` (provenance),
`is-honey-in-malaysia-fake` (authenticity), `where-to-buy-raw-honey-kuala-lumpur` (buying) — which
is exactly the spoke set a hub needs.

| | slug | focus keyword |
|---|---|---|
| en | `buying-honey-in-malaysia-guide` | honey malaysia |
| en | `honey-brands-in-malaysia` | honey brands malaysia |
| en | `what-is-a-honey-blend` | honey blend malaysia |

- **`buying-honey-in-malaysia-guide`** — hub for the whole English side of the site. About the
  **market** — what is sold, through what channels, what the label carries, what is regulated — not
  about varieties, which is what `types-of-honey-in-malaysia` is for. Links to all four spokes.
- **`honey-brands-in-malaysia`** — no counterpart in any language. How to compare brands: what a
  label must carry, what a registration status means, what a claim on a jar is worth. Names no brand
  it cannot source, and makes no comparative quality claim about any named brand.
- **`what-is-a-honey-blend`** — a genuine English gap and the product's own category. `ms/madu-khalta`
  and `ar/mukawwinat-khaltat-al-asal-bil-aashab` exist; **English does not**. Writer does not read
  either — the angle is the labelling question ("when honey has other things in it, what is it
  called and what must the label say"), researched from English demand. Overlaps the live secondary
  `authentic honey blend malaysia`; distinct intent (definition vs authenticity) and stated here so
  the reviewer checks it.

---

## Cannibalisation check

All fifteen focus keywords were compared programmatically against **1,063 distinct
`primaryKeyword` + `keywords[]` values** extracted from all 115 live articles and all 12 money
pages, in all three languages. **Zero exact collisions.** Substring overlaps found and adjudicated:

| New focus | Live term it brushes | Verdict |
|---|---|---|
| `honeycomb vs beeswax` | `honeycomb vs honey texture` (en/can-you-eat-honeycomb-wax) | distinct — bee-product glossary vs mouthfeel |
| `honey blend malaysia` | `authentic honey blend malaysia` (en/how-to-identify-pure-honey family) | distinct — definition vs authenticity test |
| `madu asli` | `cara kenal madu asli`, `ujian madu asli`, `kedai madu asli selangor`, `madu asli vs madu campur`, `madu asli vs madu tulen` | distinct — definition/standard vs test, shop, comparison. Hub links to all of them |
| `honey malaysia` | `honeycomb honey malaysia`, `fake honey malaysia`, `local honey malaysia`, `halal honey malaysia`, `manuka honey malaysia`, `how to store honey malaysia` | distinct — all six are qualified long-tails; the bare head is unheld. Hub links to their articles |

**Intra-round:** fifteen focus keywords, fifteen distinct strings. `royal honey malaysia` appears
twice — once EN, once MS — which is one per language and therefore compliant.

**Refused, and why:**

- A fourth honeycomb article on `honeycomb malaysia` / `honey comb for sale near me` — would split
  the term with the live `honeycomb-honey-malaysia`. Handled with inbound links instead.
- Anything on honey **price** — the site publishes no price and D30/D49 dropped the whole price
  cluster rather than filling it. Two obvious article ideas (`how much does honeycomb cost`,
  `honey prices malaysia`) were killed here, not written and then stripped.
- An English `organic honey malaysia` piece — `ar/al-asal-al-udwi-fi-malizia` exists and the English
  version would have been a translation in all but name.
- `madu asli vs madu proses` — that is `ms/beza-madu-tulen-dan-madu-campuran`.

---

## Internal linking plan

### Outbound, from each new article (3–5 links, descriptive anchors)

| Cluster | Money page | Sibling articles |
|---|---|---|
| K1 royal honey | `/{lang}/retail/`, `/{lang}/why-us/` | each other + `is-honey-in-malaysia-fake` / `90-peratus-madu-palsu` |
| K2 tenaga batin | `/ms/why-us/`, `/ms/benefits/` | each other + `madu-khalta`, `logo-autentik-kkm-madu` |
| K3 honeycomb | `/en/retail/` | **`honeycomb-honey-malaysia`** (hub) + `can-you-eat-honeycomb-wax` |
| K4 madu asli | `/ms/retail/`, `/ms/why-us/` | `cara-kenal-madu-asli`, `beza-madu-tulen-dan-madu-campuran`, `madu-kelulut-vs-madu-tualang` |
| K5 honey malaysia | `/en/retail/`, `/en/benefits/` | `types-of-honey-in-malaysia`, `is-malaysian-honey-local-or-imported`, `is-honey-in-malaysia-fake` |

### Inbound, from pages that already exist — this is the part that fixes the orphaning

| Existing page | Gains a link to |
|---|---|
| `/en/retail/` | `honeycomb-honey-malaysia` (live hub), `how-to-serve-honeycomb`, `buying-honey-in-malaysia-guide` |
| `/en/benefits/` | `what-is-a-honey-blend`, `honey-brands-in-malaysia` |
| `/en/why-us/` | `royal-honey-in-malaysia-explained`, `is-royal-honey-safe` |
| `/ms/retail/` | `apa-itu-madu-asli`, `madu-kampung-vs-madu-berjenama` |
| `/ms/benefits/` | `kandungan-produk-tenaga-batin` |
| `/ms/why-us/` | `dakwaan-tenaga-batin-pada-produk`, `cara-semak-produk-berdaftar-kkm`, `royal-honey-vs-madu-biasa` |
| `/{en,ms}/` homepage FAQ | the two cluster hubs, `buying-honey-in-malaysia-guide` and `apa-itu-madu-asli` |
| live sibling articles | one `related` slug swapped per D16 — grid stays at exactly two |

Links go into existing paragraph and FAQ copy as inline anchors. Money-page paragraph blocks and
FAQ answers already render trusted HTML (`Blocks.astro`, and `set:html` on the FAQ in
`retail/index.astro`), so no template change is required and no layout moves.

---

## Round constraints carried in from earlier rounds

| | |
|---|---|
| Words | **800–1,000, written to the middle of the band** (D2, D41) |
| Images | **Reuse only.** No generation, no new crops. 15 new keys onto the existing 18-frame library (D52/D60) |
| Payload | Ceiling 2.2 MB (D28). Expected delta this round: **0 bytes of new image data** |
| Facts | Central `round-7/FACTS-VERIFIED.md`; writers quote from it, never from a demand file (D31/D45) |
| Forbidden | Price, email, rating, customer count, certificate number, MOQ, lead time, jar size / net weight / weight tolerance (D26 — both to assert and to deny), statute numbers, penalties, SUBUR-specific dose |
| Must not deny | The wholesale enquiry form (it exists, D37); four purchase routes; platform-managed overseas delivery |
| Branch | `press-round-gsc` off `master` @ `e1c633e`. Rollback: `git checkout master` |
