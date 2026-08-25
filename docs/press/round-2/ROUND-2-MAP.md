# PRESS Round 2 — the map

18 articles: 6 English, 6 Bahasa Malaysia, 6 Arabic. Topics come from three independent demand
passes run 2026-08-25 (`demand-en.md`, `demand-ms.md`, `demand-ar.md`), each explicitly researching
against a **different intent** than Round 1 (which was category/comparison in English,
post-purchase anxiety in Malay, and store-practical in Arabic). Round 2's angle per language:

- **English**: product-composition trust questions (what's actually in the jar), safety/trust
  questions with zero Malaysian coverage (pregnancy, allergy), and honest sweetener comparisons.
- **Malay**: gifting and occasion demand (Raya, weddings, parents) plus channel-choice and everyday
  cooking use — a hard pivot away from Round 1's crystallisation/foam/blend anxieties.
- **Arabic**: product-trust physics (why comb and nuts float), a Manuka comparison the Arabic site
  never had, ingredient/label literacy, infant safety, online-channel mechanics, and Eid gifting.

**No search-volume figures appear anywhere in this map** — same constraint as Round 1 (D19):
Cogny/Search Console free quota is exhausted (confirmed again 2026-08-25), no paid keyword tool is
on this machine. Demand is evidenced by SERP composition, competitor thinness/strength (reported
honestly both ways — two candidates this round have a *strong* existing competitor, not a thin
one, and are flagged as such), and observed question phrasings, each with its source URL in the
three demand files.

## Cannibalisation check

**Against the 30 live focus keywords** (9 pre-Round-1 + 21 Round-1, listed in full in
`BRIEF-COMMON.md` §Existing articles): checked one by one against all 18 rows below. No collision.
The nearest-adjacent pairs, and how the boundary is kept, are documented in each row's "Ceiling
watch" line and were re-verified by the researchers against the live map before being shortlisted.

**Within Round 2** (18 against each other): 18 unique focus keywords, checked as a set. The closest
internal pairs are en2 hantaran (wedding gift-tray, pre-wedding, couple-to-couple) vs ms4 doorgift
(wedding guest favours, event logistics) — different recipients and different occasions in Malay
wedding custom, not a duplicate; and ms3/ar2 (see grouping below) which are deliberately the *same*
underlying comparison in two languages, which is what a cross-language group is for, not
cannibalisation.

## Cross-language grouping

One new group this round, added to the site's existing `ARTICLE_GROUPS`:

| Group | en | ms | ar |
|---|---|---|---|
| G6 — Manuka vs local/SUBUR | `manuka-honey-vs-local-honey` (Round 1) | `madu-manuka-vs-madu-tempatan-malaysia` | `al-farq-bayn-asal-manuka-wal-asal-al-malizi` |

All three researched independently (the English piece already lived; the Malay and Arabic pieces
are Round 2's own demand findings, not translations of it) but they answer the same core question
— what an MGO/UMF grade actually measures, and that SUBUR carries no such grade because it isn't a
Manuka product — so they earn hreflang as a real cluster. The Malay and Arabic articles share the
Round-1 English article's lead image (`article-manuka-honey-vs-local-honey.webp`, two generic honey
jars side by side, no text) via `getAssetKey()` — the site's existing convention for grouped
articles, and no new image is generated for either.

**Considered and rejected**: grouping `ms2` (`hadiah madu untuk raya`, Malay Hari Raya hamper
culture) with `ar6` (`hadiyat al-asal lil-eid`, Arabic single-jar Eid gift). Same underlying
festival, but the competitive and cultural framing genuinely diverge — hamper-of-many-items vs
one-jar-is-enough — closer to two different articles that happen to share a season than one page
in two languages. Left ungrouped rather than claim a cluster that overstates how alike they are.

## Discarded or downgraded to reserve (with reason)

| Candidate | Why it's not one of the 18 |
|---|---|
| EN `why does honey taste different` | Ranked #7 of 7 by its own researcher; live risk of restating the authenticity article's "variation ≠ fake" line on a topic (taste) that article doesn't own. Reserve for a future round with a sharper boundary. |
| EN `honey face mask malaysia` | Flagged by its own researcher as needing a dedicated legal read of cosmetic-claim rules, separate from the food-ceiling review this round has. Not commissioned. |
| EN `corporate honey gift malaysia` | Highest fabrication risk in the EN file — SUBUR has no published bulk/MOQ pathway; the article would either invent one or dead-end into "contact us." |
| MS `madu untuk hadiah korporat` | Same fabrication risk as the EN corporate-gift candidate — no published bulk pathway. Dropped in favour of the two gifting angles that don't need one (Raya, doorgift). |
| MS `hadiah madu untuk ibu bapa` | Ranked #8 of 10; weaker SERP gap than the top 6, and closest in shape to the Raya-gift piece already taken. |
| MS `gula melaka vs madu` | The one MS candidate with a **strong**, not thin, existing competitor (gulamelaka.my, ~3,500 words) and the highest legal-risk profile in the file (source SERP leans hard on glycaemic-index framing). EN already ships the safer version of this comparison shape (`honey vs gula melaka`, e5) with a cleaner single-competitor gap; taking both languages' sweetener comparison in one round was judged unnecessary risk for the MS side specifically given the strong incumbent. |
| MS `madu semasa berbuka puasa` | The researcher's own strong recommendation: drop or fold into a subsection. Every existing source is a health-claim page; no safe 800–1,000-word version was found. |
| AR `استبدال السكر بالعسل` (sugar substitution) / `عسل بالمكسرات فطور` (breakfast timing) | Ranked #7–8 of 8; both carry real claim risk (glycaemic framing, "energy/vitamin E" language) and overlap partially with the ingredient-literacy piece already taken (a3). Reserves for a future round. |

---

## English

### en1 — `honey with nuts malaysia`
- **Slug:** `honey-with-nuts-malaysia` · **Evidence:** demand-en #1 · **Icon:** `/icons/ingrediant_04.webp`
- **Intent:** product / usage — buyer orienting on what a nut-and-honey jar actually is
- **Angle:** the Malaysian SERP is marketplace listings or "superfood pairing" blogs leaning on
  immune/blood-sugar/cognitive claims. Nobody explains that SUBUR's walnut and almond are **ground
  into** the blend, not whole pieces — every competitor photo shows whole nut halves, so a reader
  will assume SUBUR's jar looks the same unless told otherwise. Purely descriptive: texture, spoon
  behaviour, how to eat it. No nutrient or health claim for the nuts.
- **Related:** *product* honey with nuts, mixed nut honey, nut and honey blend, spiced honey with
  nuts, honeycomb with nuts · *usage* how to eat honey with nuts, honey nut spread, honey nuts on
  toast, honey nuts texture · *buying* honey with nuts malaysia, honey nuts jar, buy honey with
  almonds malaysia · *comparison* whole nuts in honey vs ground nuts in honey, chunky vs smooth
  honey blend · *trust* what's actually in a honey blend, are the nuts whole or ground
- **Links out:** `/en/benefits/`, `/en/retail/`, `/en/blog/can-you-eat-honeycomb-wax/`, `/en/blog/honeycomb-honey-malaysia/`
- **Related articles:** `can-you-eat-honeycomb-wax`, `honeycomb-honey-malaysia`
- **Image key:** `honey-with-nuts-malaysia` (generate — still life, honey jar with visible ground nut
  texture, no whole nut halves so the composition matches the article's own point)
- **Ceiling watch:** the dominant "superfood pairing" framing (immune system, cognitive function,
  blood-sugar regulation) is a direct ceiling violation — do not echo it even loosely. Texture and
  composition only.

### en2 — `honeycomb hantaran gift idea`
- **Slug:** `honeycomb-hantaran-gift-idea` · **Evidence:** demand-en #2 · **Icon:** `/icons/ingrediant_08.webp`
- **Intent:** commercial / gifting, pre-wedding
- **Angle:** hantaran is a large, visual query space (Pinterest boards in the hundreds of pins) with
  **zero long-form editorial** — nobody has written how or why to use a honey jar as hantaran, how
  it presents on a dulang, or what it pairs with. SUBUR's jar (comb, nuts, spices already inside) is
  closer to the "edible gift, not just decoration" trend the sources describe than a plain bottle.
  No claim the gift brings luck; presentation and practicality only.
- **Related:** *product* honeycomb jar, honey and nuts gift jar, spiced honey jar · *usage* hantaran
  ideas, dulang gift ideas, wedding tray gift · *buying* honeycomb hantaran gift idea, honey wedding
  favour malaysia, edible hantaran gift, honey jar wedding favour · *comparison* honey vs chocolate
  hantaran, edible vs decorative hantaran items · *trust* what makes a good hantaran gift,
  ingredient label on a gift jar
- **Links out:** `/en/retail/`, `/en/#ingredients`, `/en/blog/honeycomb-honey-malaysia/`, `/en/blog/honey-for-couples-malaysia/`
- **Related articles:** `honeycomb-honey-malaysia`, `honey-for-couples-malaysia`
- **Image key:** `honeycomb-hantaran-gift-idea` (generate — honey jar staged as a gift on a
  presentation tray/cloth, no text, no ribbon-brand claim)
- **Ceiling watch:** no price, no jar size, no "comes gift-wrapped" — none of that is published.
  No symbolic claim about hantaran meaning (luck, blessing) asserted on the product's behalf.
  Boundary vs `honey-for-couples-malaysia` (marriage/intimacy) stays narrowly pre-wedding
  gift-tray, not general occasion gifting.

### en3 — `is honey safe during pregnancy`
- **Slug:** `is-honey-safe-during-pregnancy` · **Evidence:** demand-en #6 · **Icon:** `/icons/ingrediant_08.webp`
- **Intent:** informational / trust — safety question, no Malaysian page exists
- **Angle:** report the medical consensus plainly (NHS / American Pregnancy Association / RCOG all
  confirm honey is safe in pregnancy — the infant-botulism risk applies to babies under one, not
  pregnant adults, because the toxin doesn't readily cross the placenta and an adult gut handles the
  spores). Correct the common confusion where a searcher half-remembers "no honey for babies" and
  wrongly extends it to pregnancy. This is public-health information, not a product claim.
- **Related:** *product* raw honey, honeycomb honey · *usage* honey while pregnant, honey in
  pregnancy diet, eating honey trimester · *comparison* honey vs raw egg pregnancy safety,
  pasteurised vs raw honey pregnancy · *trust* is honey safe during pregnancy, can pregnant women
  eat honey, honey and gestational diabetes, why babies can't have honey but adults can
- **Links out:** `/en/blog/can-you-eat-honeycomb-wax/`, `/en/retail/`, `/en/contact/`
- **Related articles:** `can-you-eat-honeycomb-wax`, `honey-allergy-symptoms` (en4)
- **Image key:** `is-honey-safe-during-pregnancy` (generate — plain honey jar and spoon still life,
  neutral kitchen setting, no people, no medical props)
- **Ceiling watch:** the gestational-diabetes caveat is reported as existing public-health advice
  ("talk to your own doctor if diagnosed"), never rewritten as SUBUR advising on a medical
  condition. No claim honey benefits pregnancy — this article answers a safety question, it does
  not promote consumption. Cite health bodies by name generically; no invented Malaysian statistic.

### en4 — `honey allergy symptoms`
- **Slug:** `honey-allergy-symptoms` · **Evidence:** demand-en #7 · **Icon:** `/icons/ingrediant_04.webp`
- **Intent:** informational / trust — safety, pre-purchase caution
- **Angle:** true honey allergy is rare (well under 1% of the population per the sourced clinical
  literature) — mild hives to rare anaphylaxis, plus pollen cross-reactivity for people sensitised
  to weed/daisy-family pollen. No Malaysian page exists, and no honey seller's page tells a buyer
  plainly what to watch for. A comb-and-nut blend adds a second, more common allergen (tree nuts) on
  top of the honey question — purely cautionary, the kind of content a responsible seller publishes.
- **Related:** *product* raw honey, honeycomb, bee pollen, honey with nuts · *comparison* honey
  allergy vs pollen allergy, honey allergy vs bee sting allergy · *trust* honey allergy symptoms,
  can you be allergic to honey, is honey allergy common, honey and nut allergy, honey and pollen
  allergy
- **Links out:** `/en/blog/honey-with-nuts-malaysia/`, `/en/retail/`, `/en/contact/`
- **Related articles:** `honey-with-nuts-malaysia` (en1), `is-honey-safe-during-pregnancy` (en3)
- **Image key:** `honey-allergy-symptoms` (generate — honey jar with a small dish of almonds/walnuts
  beside it, plain surface, no people, no medical imagery)
- **Ceiling watch:** the one Malaysian research source found is a treatment-claim study (honey *for*
  allergic rhinitis) — excluded entirely, not softened. Anaphylaxis is described plainly as "seek
  medical attention," never minimised. No therapeutic framing in either direction.

### en5 — `honey vs gula melaka`
- **Slug:** `honey-vs-gula-melaka` · **Evidence:** demand-en #3 · **Icon:** `/icons/ingrediant_08.webp`
- **Intent:** comparison — culinary use, not health
- **Angle:** exactly one dedicated comparison exists online and it's written by the palm-sugar
  seller itself (gulamelaka.my), arguing its own case on a glycaemic-index number. No honey seller
  has published the other half. SUBUR has nothing to gain from the outcome, matching Round 1's
  disinterested Manuka strategy — flavour (floral vs caramel/smoky), texture, what each is actually
  made from (bee nectar vs coconut-palm sap), which Malaysian dishes call for which.
- **Related:** *product* raw honey, gula melaka, palm sugar, coconut sugar · *usage* honey vs gula
  melaka for drinks, honey vs gula melaka for baking, when to use gula melaka instead of honey ·
  *comparison* honey vs gula melaka, honey vs palm sugar, honey vs brown sugar malaysia · *trust* is
  gula melaka healthier than honey, what is gula melaka made from
- **Links out:** `/en/benefits/`, `/en/blog/types-of-honey-in-malaysia/`, `/en/retail/`
- **Related articles:** `types-of-honey-in-malaysia`, `honey-with-nuts-malaysia` (en1)
- **Image key:** `honey-vs-gula-melaka` (generate — honey jar beside a block/bowl of dark palm sugar,
  plain kitchen surface, no text)
- **Ceiling watch:** the only existing competitor page leads with a glycaemic-index number (35 vs
  55) framed as a health verdict — strip that framing entirely. Taste, texture and traditional use
  only; a GI figure repeated even without commentary still reads as a health claim by association.

### en6 — `is honey vegan`
- **Slug:** `is-honey-vegan` · **Evidence:** demand-en #5 · **Icon:** `/icons/ingrediant_08.webp`
- **Intent:** informational / trust — dietary-identity searcher, decision before purchase
- **Angle:** a large, stable, entirely foreign SERP answers the plain fact (no, by the common
  definition — it's an animal product) but zero Malaysian or Southeast Asian page exists. Written
  for a Malaysian reader asking for different reasons than a Western vegan — halal-adjacent
  curiosity, a vegan friend, the plant-based trend in KL. One honest fact, no hedging needed.
- **Related:** *product* raw honey, bee product, animal-derived sweetener · *usage* vegan
  alternatives to honey, what to use instead of honey · *comparison* honey vs agave vegan, honey vs
  maple syrup vegan, vegan sweeteners malaysia · *trust* is honey vegan, why don't vegans eat honey,
  is honey an animal product, is honeycomb vegan
- **Links out:** `/en/blog/honeycomb-honey-malaysia/`, `/en/benefits/`, `/en/retail/`
- **Related articles:** `honeycomb-honey-malaysia`, `honey-vs-gula-melaka` (en5)
- **Image key:** `is-honey-vegan` (generate — plain honey jar and dipper on a light surface, simple,
  no props implying an argument either way)
- **Ceiling watch:** state the definitional fact and stop — do not moralise either direction. Do not
  claim SUBUR is produced any particular way (humane, sustainable); the site publishes nothing about
  sourcing practices, so none is claimed.

---

## Bahasa Malaysia

### ms1 — `beli madu online atau kedai fizikal`
- **Slug:** `beli-madu-online-atau-kedai-fizikal` · **Evidence:** demand-ms #5 · **Icon:** `/icons/ingrediant_08.webp`
- **Intent:** channel decision, pre-location — different from Round 1's `kedai madu asli selangor`
  (which already knows it wants a physical shop and needs the address)
- **Angle:** generic e-commerce-vs-shop comparison articles dominate the SERP with zero food/honey
  specificity. SUBUR is the one seller in the researched set that can answer this honestly from both
  sides — real shops (Ampang Jaya, Batu Caves) **and** its own Shopee/TikTok Shop storefronts. What
  you can check in person (comb in the jar, smell, texture) vs the convenience of online ordering,
  without picking a side.
- **Related:** *produk* madu sarang, madu berempah · *penggunaan* semak madu sebelum beli ·
  *pembelian* beli madu online, beli madu kedai fizikal, shopee madu, tiktok shop madu ·
  *perbandingan* beli online vs kedai fizikal, kelebihan beli madu bersemuka · *kepercayaan* pastikan
  madu asli sebelum beli online
- **Links out:** `/ms/retail/`, `/ms/blog/kedai-madu-asli-selangor/`, `/ms/contact/`
- **Related articles:** `kedai-madu-asli-selangor`, `cara-kenal-madu-asli`
- **Image key:** `beli-madu-online-atau-kedai-fizikal` (generate — honey jar beside a phone showing a
  generic shopping-cart icon shape, no real app UI/logo rendered, kept abstract)
- **Ceiling watch:** never claim SUBUR's online delivery is "faster" or "cheaper" — no figure is
  published for either. Boundary: this article decides the **channel**; it links to, and does not
  repeat, the Selangor shop-address article.

### ms2 — `hadiah madu untuk raya`
- **Slug:** `hadiah-madu-untuk-raya` · **Evidence:** demand-ms #1 · **Icon:** `/icons/ingrediant_02.webp`
- **Intent:** seasonal gifting (Hari Raya)
- **Angle:** hamper sites (giftr.my, bloomthis.co) dominate the SERP with big generic catalogues,
  never honey-specific; no Malaysian honey brand publishes its own Raya gift guide. A spiced
  honeycomb jar looks distinctive without a health promise — comb and spices visible, not a
  nutrition label doing the selling. Cover jar-as-gift presentation, labelling a name on it, and why
  it doesn't go stale the way kuih does.
- **Related:** *produk* madu berempah untuk hadiah, madu sarang dalam balang, saiz balang madu
  hadiah · *penggunaan* bungkus hadiah madu, label nama hadiah madu · *pembelian* hadiah raya madu,
  hamper raya madu, beli madu untuk hadiah · *musim* hadiah aidilfitri, hamper raya 2026 ·
  *perbandingan* madu vs kuih raya sebagai hadiah · *kepercayaan* hadiah makanan sunnah, hadiah tahan
  lama
- **Links out:** `/ms/retail/`, `/ms/#ingredients`, `/ms/contact/`
- **Related articles:** `madu-suami-isteri`, `doorgift-madu-kahwin` (ms4)
- **Image key:** `hadiah-madu-untuk-raya` (generate — honey jar styled with festive but generic
  presentation — woven tray or cloth, no green/gold Raya branding text, no logos)
- **Ceiling watch:** no direct health claim ("hadiah sihat" must stay descriptive, never functional).
  No price. CTA to WhatsApp/shop, same pattern as Round 1's Selangor shop article. No overlap with
  the 10 live keywords.

### ms3 — `madu manuka vs madu tempatan malaysia` (G6)
- **Slug:** `madu-manuka-vs-madu-tempatan-malaysia` · **Evidence:** demand-ms #6 · **Icon:** `/icons/ingrediant_02.webp`
- **Intent:** comparison / trust
- **Angle:** the Malay SERP for Manuka pricing is dominated by Indonesian e-commerce; the one
  Malaysian comparison source (baizigui.com) misquotes UMF grades as "recommended dosage to treat
  disease" — a claim this site cannot echo. The site's own English Manuka article already proved the
  honest angle works: MGO/UMF are lab grades on one plant, not a universal quality scale, and SUBUR
  sells no Manuka at all. Written fresh for Malay with its own examples and FAQ — not a translation.
- **Related:** *produk* madu manuka malaysia, gred mgo, gred umf, madu tempatan · *penggunaan* madu
  manuka untuk apa · *pembelian* harga madu manuka malaysia, beli madu manuka di malaysia ·
  *perbandingan* madu manuka vs madu tempatan, madu manuka vs madu tualang, gred mgo vs umf ·
  *kepercayaan* madu manuka tulen ke, kenapa madu manuka mahal
- **Links out:** `/ms/benefits/`, `/ms/blog/cara-kenal-madu-asli/`, `/ms/retail/`
- **Related articles:** `cara-kenal-madu-asli`, `beza-madu-tulen-dan-madu-campuran`
- **Image key:** `manuka-honey-vs-local-honey` (**reuse** — shared with en's Round-1 article and ar2
  via the G6 group's English canonical slug; two generic honey jars, no text)
- **Ceiling watch:** MGO grading is not New Zealand-exclusive (Australia also sells MGO-graded
  Manuka; UMF is the NZ-specific scheme) — do not conflate. Never quote a UMF number as a "treatment
  dose." Do not claim local honey is "better" than Manuka — state what the grade actually measures.
  No overlap with `beza-madu-tulen-dan-madu-campuran` (that's single-source vs blended vs
  syrup-adulterated; this is import grading/certification vs local, a different axis entirely).

### ms4 — `doorgift madu kahwin`
- **Slug:** `doorgift-madu-kahwin` · **Evidence:** demand-ms #2 · **Icon:** `/icons/ingrediant_08.webp`
- **Intent:** bulk/event purchase — wedding guest favours, not the couple's own gift
- **Angle:** the product category already sells on Lazada with zero buyer guidance — what bottle
  size suits a doorgift, how far ahead to order, how it survives being carried home without
  spilling. Genuine advantages (doesn't stale like kuih, a recognisably "real" food gift) and honest
  limits (a glass jar is heavier to carry than a light packet; large quantities need lead time and
  must be confirmed with the shop, never promised by the article).
- **Related:** *produk* madu botol kecil, madu untuk doorgift, madu makanan sunnah · *penggunaan*
  bungkus doorgift madu, label doorgift madu · *pembelian* doorgift madu kahwin, tempah madu pukal,
  madu untuk majlis · *perbandingan* doorgift madu vs doorgift kuih · *kepercayaan* doorgift tahan
  lama, doorgift bermakna
- **Links out:** `/ms/retail/`, `/ms/contact/`, `/ms/blog/hadiah-madu-untuk-raya/`
- **Related articles:** `hadiah-madu-untuk-raya` (ms2), `madu-suami-isteri`
- **Image key:** `doorgift-madu-kahwin` (generate — small honey jars in a row, plain neutral surface,
  event-favour framing, no text/ribbon branding)
- **Ceiling watch:** never confirm a quantity or turnaround time the article can't verify — every
  bulk-order sentence stops at "confirm with the shop." Boundary vs `madu-suami-isteri`: this
  article never touches the couple/marriage-routine framing, stays entirely on guest-logistics.

### ms5 — `resepi sarapan guna madu`
- **Slug:** `resepi-sarapan-guna-madu` · **Evidence:** demand-ms #9 (bekal sekolah folded in) · **Icon:** `/icons/ingrediant_06.webp`
- **Intent:** everyday family use — recipes, not a health claim
- **Angle:** demand exists (Cookpad, Lemon8) but is entirely scattered user-generated content, no
  structured brand guide. Practical recipe ideas using the spiced blend for breakfast (oats, toast,
  fruit) and school lunchboxes (a light glaze) — usage, not benefit. States plainly that a spiced
  adult blend like SUBUR isn't for a child under one, referencing the existing safety line rather
  than re-arguing it, and stops there.
- **Related:** *produk* madu berempah untuk resepi, madu untuk sarapan · *penggunaan* resepi guna
  madu, bekal sekolah guna madu, madu untuk oat, madu untuk roti · *pembelian* madu sesuai untuk
  keluarga · *perbandingan* madu vs perasa manis lain untuk bekal · *kepercayaan* resepi mudah dan
  cepat guna madu
- **Links out:** `/ms/#ingredients`, `/ms/blog/madu-untuk-masakan/`, `/ms/retail/`
- **Related articles:** `madu-untuk-masakan` (ms6), `waktu-terbaik-makan-madu`
- **Image key:** `resepi-sarapan-guna-madu` (generate — honey drizzled over oats/toast on a breakfast
  table, no branding, no children in frame)
- **Ceiling watch:** no nutrition/energy/growth claim for children — recipe and usage only. Does not
  rewrite the "one spoon in the morning" routine already owned by `waktu-terbaik-makan-madu`.

### ms6 — `madu untuk masakan`
- **Slug:** `madu-untuk-masakan` · **Evidence:** demand-ms #8 · **Icon:** `/icons/ingrediant_06.webp`
- **Intent:** everyday use — baking/marinating, distinct from Round 1's hot-drink mechanism article
- **Angle:** the entire SERP for this intent is Indonesian and frames honey-in-cooking as "healthier"
  — no Malaysian page exists. SUBUR-specific angle nothing else can copy: comb and nuts float rather
  than sink (lower density than the honey around them), so a spoon from different depths of the jar
  gives a different nut/spice ratio — genuinely useful for a cook, and it links to (without
  repeating) the heat-mechanism explainer already owned by `madu-campur-air-panas`.
- **Related:** *produk* madu berempah untuk masak, madu bersarang untuk masak · *penggunaan* madu
  untuk marinat, madu untuk glaze ayam, madu untuk bakeri, sudu madu untuk masakan · *pembelian*
  madu sesuai untuk dapur · *perbandingan* madu cair vs madu bersarang untuk masakan ·
  *kepercayaan* madu rosak bila dimasak
- **Links out:** `/ms/blog/madu-campur-air-panas/`, `/ms/#ingredients`, `/ms/retail/`
- **Related articles:** `madu-campur-air-panas`, `resepi-sarapan-guna-madu` (ms5)
- **Image key:** `madu-untuk-masakan` (generate — honey being drizzled into a mixing bowl/marinade,
  kitchen setting, no text)
- **Ceiling watch:** never claim cooking "keeps all the goodness" or the reverse "destroys all the
  goodness" — only flavour/texture change is verifiable. Does not repeat the heat-mechanism
  explanation already owned by `madu-campur-air-panas`; links to it instead.

---

## Arabic

### ar1 — `لماذا يطفو الشمع فوق العسل`
- **Slug:** `limatha-yatfu-al-shama-fawq-al-asal` · **Evidence:** demand-ar #2 · **Icon:** `/icons/ingrediant_08.webp`
- **Intent:** trust — a buyer holding a jar with a floating solid layer wonders if that's normal
- **Angle:** every competing Arabic page treats flotation itself as an **authenticity test**
  ("if it floats, it's natural") — a claim the site cannot echo, because it isn't reliably true
  (a manufactured wax can be made close enough in density to float too). The honest, unique angle:
  wax (~0.95 g/cm³) and nuts (~1.0) are simply lighter than honey (~1.4) and float in an unstirred
  jar as ordinary physics — not a purity test, not a defect.
- **Related:** *المنتج* عسل بشمعه، عسل شمعي خام، خليط عسل بالمكسرات · *الاستخدام* تقليب مرطبان
  العسل، طبقة صلبة فوق العسل · *المقارنة* كثافة الشمع والعسل، طفو أم غرق في العسل · *الثقة* لماذا
  يطفو الشمع فوق العسل، هل طفو الشمع دليل نقاء، المكسرات تطفو في العسل، هل هذا طبيعي في مرطبان
  العسل
- **Links out:** `/ar/blog/tariqat-akl-al-asal-bil-shama/`, `/ar/benefits/`, `/ar/retail/`
- **Related articles:** `tariqat-akl-al-asal-bil-shama`, `kayfa-tamiz-al-asal-al-asli`
- **Image key:** `limatha-yatfu-al-shama-fawq-al-asal` (generate — honey jar with a visible pale layer
  near the top of the jar, plain background, no text)
- **Ceiling watch:** never imply flotation "proves" SUBUR is authentic — the density explanation is
  descriptive, not a purity certificate. Does not touch crystallisation (that boundary belongs to
  `kayfa-tamiz-al-asal-al-asli`) — a different phenomenon (solid bodies floating vs the honey itself
  changing texture) and not re-argued here.

### ar2 — `الفرق بين عسل مانوكا وعسل ماليزي` (G6)
- **Slug:** `al-farq-bayn-asal-manuka-wal-asal-al-malizi` · **Evidence:** demand-ar #1 · **Icon:** `/icons/ingrediant_02.webp`
- **Intent:** comparison / trust
- **Angle:** the Arabic SERP conflates "Manuka" and "Malaysian" in marketing copy despite Manuka not
  growing commercially in Malaysia at all, and every ranking Manuka-grade explainer is written by a
  UMF-licensed seller with a stake in the answer. A teardown page, not a sales page: Manuka is a
  New Zealand/Australian single-flora honey graded by a lab number (MGO/UMF); SUBUR is a different
  category entirely — raw honeycomb blended with ten named ingredients, carrying no such grade
  because it was never a Manuka product to begin with. Same site-wide honesty as the English Round-1
  article and the new Malay one — written fresh, own examples and FAQ.
- **Related:** *المنتج* عسل مانوكا، عسل خليط بالأعشاب، عسل مصنّف MGO · *الشراء* شراء عسل مانوكا في
  ماليزيا، أين أشتري خليط عسل بالأعشاب · *المقارنة* الفرق بين عسل مانوكا وعسل ماليزي، الفرق بين
  MGO و UMF، عسل مانوكا أسترالي أم نيوزيلندي، عسل بتصنيف أم عسل بمكوّنات · *الثقة* هل عسل مانوكا
  يُزرع في ماليزيا، تصنيف عسل بدون رقم
- **Links out:** `/ar/benefits/`, `/ar/blog/al-asal-al-malizi/`, `/ar/retail/`
- **Related articles:** `al-asal-al-malizi`, `kayfa-tamiz-al-asal-al-asli`
- **Image key:** `manuka-honey-vs-local-honey` (**reuse** — shared with en's Round-1 article and ms3
  via the G6 group's English canonical slug; two generic honey jars, no text)
- **Ceiling watch:** MGO is not New Zealand-exclusive (Australia sells MGO-graded Manuka too; UMF is
  the NZ-specific scheme) — state this correction plainly. Never link an MGO/UMF number to an
  antibacterial or therapeutic claim, for Manuka or for SUBUR. Does not re-mention "royal honey" —
  that stays entirely inside `al-asal-al-malizi`'s existing scope.

### ar3 — `مكونات خلطة العسل بالأعشاب`
- **Slug:** `mukawwinat-khaltat-al-asal-bil-aashab` · **Evidence:** demand-ar #3 · **Icon:** `/icons/ingrediant_01.webp`
- **Intent:** trust / product — what a buyer is actually getting before they open the jar
- **Angle:** competing pages list "secrets" of an herb-honey blend and attach a claimed benefit to
  every herb (anti-depressant, treats anaemia). Nobody explains *why* an ingredient list is ordered
  the way it is on a label, or flags what actually matters to a buyer: nuts are a common allergen,
  and knowing there are ten named ingredients is itself something worth knowing before paying, not
  after. A "read the label" page turns the site's absence of certification/ratings into a feature —
  everything you need to know is written down, nothing hidden.
- **Related:** *المنتج* مكونات خلطة العسل، عسل بشمع النحل والأعشاب، عسل خام غير مصفى، عسل بحبة
  البركة والزعفران · *الاستخدام* قراءة ملصق خلطة العسل، ترتيب المكونات على العلبة · *الشراء* خلطة
  عسل جاهزة ماليزيا · *المقارنة* عسل صافٍ أم خلطة، عسل خام أم عسل مصفى · *الثقة* مكونات معلنة على
  العلبة، حساسية المكسرات، عدد مكونات خلطة العسل
- **Links out:** `/ar/#ingredients`, `/ar/blog/asal-bil-zafaran/`, `/ar/retail/`
- **Related articles:** `asal-bil-zafaran`, `hal-al-asal-masmuh-lil-atfal-aqal-min-sana` (ar4)
- **Image key:** `mukawwinat-khaltat-al-asal-bil-aashab` (generate — honey jar surrounded by a few
  whole spices — star anise, cinnamon stick, walnut — laid out on a plain surface, no text)
- **Ceiling watch:** every herb name invites a reflexive benefit claim (ginger for immunity, cinnamon
  for diabetes) — describe sensory/label function only, never a bodily effect. No ingredient ratio
  or percentage is stated; none is published. Does not restate the taste description already owned
  by `asal-bil-zafaran` — that piece is sensory ("what does it taste like"), this one is
  label-literacy ("what's written and why, raw vs filtered").

### ar4 — `هل العسل مسموح للأطفال أقل من سنة`
- **Slug:** `hal-al-asal-masmuh-lil-atfal-aqal-min-sana` · **Evidence:** demand-ar #4 · **Icon:** `/icons/ingrediant_04.webp`
- **Intent:** trust / safety
- **Angle:** the infant-botulism rule is well-covered generally (mainstream press twice, a religious
  consultation, medical sources) but no seller's page connects it to a product that **also** carries
  nuts — a second, more common allergen, ground in and impossible to pick out. A short, direct
  safety page: not for a child under one (documented medical risk), not for a nut allergy (ground
  into the blend, cannot be separated), and anyone on prescribed medication should ask their doctor.
  A warning, not a promise — the strongest maturity signal a seller with no ratings or certificates
  can offer.
- **Related:** *المنتج* عسل بالمكسرات، عسل بالجوز واللوز، خليط عسل شمعي · *الاستخدام* متى يبدأ
  الطفل بالعسل، العسل بعد عمر سنة · *المقارنة* عسل للأطفال أم للكبار، عسل صافٍ أم خليط مكسرات
  للأطفال · *الثقة* هل العسل مسموح للأطفال أقل من سنة، تحذير العسل للرضع، حساسية المكسرات، حساسية
  اللوز والجوز، العسل مع الأدوية
- **Links out:** `/ar/blog/mukawwinat-khaltat-al-asal-bil-aashab/`, `/ar/contact/`, `/ar/retail/`
- **Related articles:** `mukawwinat-khaltat-al-asal-bil-aashab` (ar3), `tariqat-akl-al-asal-bil-shama`
- **Image key:** `hal-al-asal-masmuh-lil-atfal-aqal-min-sana` (generate — plain honey jar on a kitchen
  counter, no children or medical imagery in frame, neutral cautionary tone)
- **Ceiling watch:** the warning must never flip into an implied promise ("perfectly safe for
  everyone else") — phrase as "this product is not intended for…", never "this product is safe
  for…". No symptom or condition named beyond what's medically documented (infant botulism) and the
  allergens on the label.

### ar5 — `شراء عسل أونلاين في ماليزيا`
- **Slug:** `shiraa-al-asal-online-fi-malizia` · **Evidence:** demand-ar #5 · **Icon:** `/icons/ingrediant_08.webp`
- **Intent:** purchase / channel mechanics — how, not where (the "where" belongs to Round 1's
  `ayna-ashtari-asal-fi-kuala-lumpur`)
- **Angle:** Arabic-language TikTok "discover" pages about ordering from Malaysia exist with **no
  article behind them** — people are searching for how to order from inside Malaysia in Arabic and
  finding only discovery-page stubs. The honest, practical difference between three channels of the
  *same* seller: Shopee (tracked order), TikTok Shop (in-app browsing purchase), WhatsApp
  (ask-before-you-buy or arrange pickup from a branch) — stated explicitly as one seller's three
  channels, not three different sellers, and no delivery time or minimum order figure invented.
- **Related:** *المنتج* عسل بشمع النحل، خليط عسل ماليزيا · *الشراء* شراء عسل أونلاين ماليزيا،
  شوبي ماليزيا عربي، تيك توك شوب ماليزيا، طلب عبر واتساب ماليزيا، استلام من الفرع سيلانجور، توصيل
  خارج كوالالمبور · *المقارنة* شوبي أم تيك توك شوب، الطلب أونلاين أم من الفرع · *الثقة* متجر عربي
  موثوق في ماليزيا، نفس البائع على شوبي وتيك توك
- **Links out:** `/ar/blog/ayna-ashtari-asal-fi-kuala-lumpur/`, `/ar/retail/`, `/ar/contact/`
- **Related articles:** `ayna-ashtari-asal-fi-kuala-lumpur`, `hal-al-asal-masmuh-lil-atfal-aqal-min-sana` (ar4)
- **Image key:** `shiraa-al-asal-online-fi-malizia` (generate — honey jar beside a generic parcel/box,
  no real marketplace logos or UI, kept abstract)
- **Ceiling watch:** no delivery time, no minimum order, no inter-state shipping duration — none is
  published or confirmable; the article stops at "ask the shop." Boundary vs
  `ayna-ashtari-asal-fi-kuala-lumpur`: that article owns the two branch addresses in full; this one
  links to it rather than repeating them.

### ar6 — `هدية عسل للعيد`
- **Slug:** `hadiyat-al-asal-lil-eid` · **Evidence:** demand-ar #6 · **Icon:** `/icons/ingrediant_02.webp`
- **Intent:** purchase / gifting, local occasion (distinct from the Round-1 reserve about travel
  souvenirs, and left ungrouped from `hadiah-madu-untuk-raya` — see grouping note above)
- **Angle:** existing Arabic gift-guide content is about assembling a **composite** gift box (dates,
  saffron, rosewater, honey together); nothing addresses a reader who wants one jar to be enough.
  SUBUR sells no gift boxes or special wrapping — the honest page is why **one jar** already reads
  as a complete, distinctive gift (visible comb and named ingredients doing the work a nutrition
  label can't), not a claim that a box or wrapping service exists.
- **Related:** *المنتج* عسل هدية، مرطبان عسل بشمعه · *الشراء* هدية عسل للعيد، شراء عسل كهدية
  ماليزيا، هدية عربية في ماليزيا · *المقارنة* هدية عسل أم هدية تمر، هدية بسيطة أم صندوق متكامل ·
  *الثقة* عسل هدية بمكونات معلنة
- **Links out:** `/ar/retail/`, `/ar/#ingredients`, `/ar/contact/`
- **Related articles:** `asal-al-zawjayn`, `mukawwinat-khaltat-al-asal-bil-aashab` (ar3)
- **Image key:** `hadiyat-al-asal-lil-eid` (generate — single honey jar staged simply as a gift, plain
  cloth or tray, no text, no composite gift-box props implying a service that doesn't exist)
- **Ceiling watch:** never state or imply SUBUR sells gift boxes, special packaging, or takes
  corporate/bulk orders — none of that is confirmed. No "healthy gift" medical framing; presentation
  and ingredients only.
