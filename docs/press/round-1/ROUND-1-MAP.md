# PRESS Round 1 — the map

21 articles: 7 English, 7 Bahasa Malaysia, 7 Arabic. Topics come from three independent demand
passes (`demand-en.md`, `demand-ms.md`, `demand-ar.md`, all pulled 2026-08-20), not from one topic
list translated three ways.

**No search-volume figures appear anywhere in this map.** No keyword tool is available on this
machine and Search Console is out of quota (D8). Demand is evidenced by what the SERP actually
looks like — who ranks, how thin they are, and the verbatim question phrasings observed. Every
piece of evidence sits in the three demand files with its URL.

## Language mix

The site's three locales all carry real, *different* demand, so the 7/7/7 split holds — but the
topics diverge sharply, which is the finding:

- **English** demand is category-level and comparison-level (what comb honey is, what the honey
  types are, whether Manuka is worth it, where the shelf's honey comes from).
- **Malay** demand is overwhelmingly **post-purchase anxiety**: crystallised, foamy, blended,
  hot water, what time to take it. Malaysians are already holding a jar and asking if they were
  cheated. Five of seven Malay articles answer that fear.
- **Arabic** demand inside Malaysia is **store-led and practical**: where to physically buy, what
  to do with the wax, how to store a jar in this climate, and what the phrase "Malaysian honey"
  even refers to — a query currently dominated by sachet products that carry official regulatory
  alerts.

## Cross-language grouping

Five topics have genuine demand in more than one language, so they become `ARTICLE_GROUPS` entries
and earn hreflang. **They are not translations** — each is written from its own language's
research, with its own angle, examples and FAQs. The other nine articles exist in one language
only, because only one language's searchers ask for them.

| Group | en | ms | ar |
|---|---|---|---|
| G1 comb and wax | `can-you-eat-honeycomb-wax` | `sarang-madu-boleh-dimakan` | `tariqat-akl-al-asal-bil-shama` |
| G2 buying in person | `where-to-buy-raw-honey-kuala-lumpur` | `kedai-madu-asli-selangor` | `ayna-ashtari-asal-fi-kuala-lumpur` |
| G3 honey and hot water | — | `madu-campur-air-panas` | `al-ma-al-sakhin-wal-asal` |
| G4 storage in this climate | `how-to-store-honey-malaysia` | — | `hifz-al-asal-fi-al-jaw-al-ratb` |
| G5 what Malaysian honey is | `types-of-honey-in-malaysia` | — | `al-asal-al-malizi` |

Single-language: `honeycomb-honey-malaysia`, `manuka-honey-vs-local-honey`,
`is-malaysian-honey-local-or-imported` (en); `madu-beku-dalam-peti-sejuk`,
`beza-madu-tulen-dan-madu-campuran`, `madu-berbuih`, `waktu-terbaik-makan-madu` (ms);
`hal-lil-asal-tarikh-salahiya`, `asal-bil-zafaran` (ar).

## Cannibalisation

**Against live pages.** The nine live articles own: `madu suami isteri` / `honey for couples
malaysia`, `habbatus sauda madu` / `black seed honey`, `cara kenal madu asli` / `how to identify
pure honey` / `كيف تميز العسل الأصلي`. No row below targets any of them.

Three rows sit adjacent to the live "real vs fake honey" article and carry an explicit boundary:

| Row | Adjacency | Boundary enforced in the brief |
|---|---|---|
| ms3 `beza madu tulen dan madu campuran` | Live article covers *fake vs real*; this covers *single-source vs labelled blend vs syrup-adulterated* | May not re-run home tests. Must link to the live article for detection, and stay on definitions and labelling |
| ms2 `madu beku dalam peti sejuk` | Live article says crystallisation is not proof of authenticity | Treated purely as storage and texture. Must not re-argue authenticity, must not contradict the live line |
| en5 `how to store honey malaysia` | Same | Same — storage and texture only, link across for authenticity |

**Within the round.** Every focus keyword below is unique across all 21 rows, checked as a set.
The two comb rows in English are deliberately split by intent: `honeycomb honey malaysia` is a
category/buying page, `can you eat honeycomb wax` is a post-purchase usage page. They cross-link
rather than compete.

## Discarded despite demand

- **`is honey halal` / halal certification** — real demand, but competitors rank on published JAKIM
  certificates and this site publishes none. The topic invites the one question the site cannot
  answer.
- **`how much honey per day`** — the most claim-adjacent candidate in the whole set. Any
  quantity-plus-outcome sentence breaches the ceiling. Folded into ms5 as *practice*, never dosage.
- **Honey for children / babies** — the under-one-year rule is a safety fact, not a product topic;
  it appears as a caveat inside the comb articles instead of as its own page.
- **Royal-honey sachet demand (Arabic)** — very high volume, and named products carry official
  regulatory alerts. Addressed only as a *disclosure* distinction inside ar4, never as a
  substitution claim.
- **Kelulut/Tualang therapeutic literature** — the academic corpus is written in the language of
  treatment effect. Cited nowhere; en4 stays on taste, texture, production and cost.

---

# The rows

Every row: id · language · focus keyword · slug · intent · related keywords (grouped) · internal
links · image key. Full evidence for each is in the language's demand file, under the numbered
candidate named in the row.

## English

### en1 — `honeycomb honey malaysia`
- **Slug:** `honeycomb-honey-malaysia` · **Evidence:** demand-en #1 · **Icon:** `/icons/ingrediant_08.webp`
- **Intent:** commercial/informational — buyer orienting before purchase
- **Angle:** the Malaysian SERP is marketplace listings only; no page tells a local buyer what to
  look for in a comb jar, why comb weight includes wax, or what changes when comb is the base of a
  blend rather than the whole product. Descriptive throughout.
- **Related:** *product* honeycomb honey, madu sarang, comb honey, raw honeycomb, capped comb ·
  *usage* how to eat honeycomb · *buying* buy honeycomb kl · *comparison* honeycomb vs liquid
  honey, comb honey vs jar honey · *trust* is honeycomb real honey, why is honeycomb expensive
- **Links out:** `/en/benefits/`, `/en/retail/`, `/en/blog/can-you-eat-honeycomb-wax/`, `/en/blog/types-of-honey-in-malaysia/`
- **Related articles:** `can-you-eat-honeycomb-wax`, `types-of-honey-in-malaysia`
- **Image key:** `honeycomb-honey-malaysia`
- **Ceiling watch:** "more nutritious than filtered honey" is the standard foreign-blog line and is
  a claim here. Say *less processing*, never *more benefit*. No price, no gram weight.

### en2 — `can you eat honeycomb wax` (G1)
- **Slug:** `can-you-eat-honeycomb-wax` · **Evidence:** demand-en #2 · **Icon:** `/icons/ingrediant_08.webp`
- **Intent:** informational, post-purchase
- **Angle:** the question is answered densely by US/UK sellers and by nobody in Malaysia. Written
  for a jar where comb sits in a spiced blend rather than in a clean square — how wax behaves in a
  kitchen without air-conditioning, what chewing it is actually like, and that swallowing or
  discarding it is preference, not rule.
- **Related:** *product* beeswax, cappings wax, comb honey texture · *usage* how to eat honeycomb,
  chew honeycomb, honeycomb in tea, honeycomb on toast · *buying* honeycomb honey malaysia ·
  *comparison* honeycomb vs honey texture · *trust* is beeswax safe to swallow
- **Links out:** `/en/blog/honeycomb-honey-malaysia/`, `/en/benefits/`, `/en/retail/`, `/en/blog/how-to-store-honey-malaysia/`
- **Related articles:** `honeycomb-honey-malaysia`, `how-to-store-honey-malaysia`
- **Image key:** `can-you-eat-honeycomb-wax`
- **Ceiling watch:** the under-one-year-old rule is stated as the standing infant-safety rule, not
  as a product warning implying the product is otherwise remedial. Allergy: describe, do not advise.

### en3 — `where to buy raw honey in kuala lumpur` (G2)
- **Slug:** `where-to-buy-raw-honey-kuala-lumpur` · **Evidence:** demand-en #3 · **Icon:** `/icons/ingrediant_06.webp`
- **Intent:** commercial/navigational
- **Angle:** every ranking result is a seller ranking for itself, or a brand listicle with no
  addresses; the incumbent informational result was returning HTTP 502 during research. The page
  nobody has written is *how to buy honey in person in the Klang Valley and what to ask at the
  counter* — which ends where SUBUR happens to be.
- **Related:** *product* raw honey, honeycomb honey, kelulut honey · *buying* raw honey selangor,
  honey shop ampang, honey shop batu caves, buy honey klang valley · *comparison* buying honey
  online vs in store, supermarket honey vs specialist shop · *trust* what to ask a honey seller
- **Links out:** `/en/retail/`, `/en/contact/`, `/en/why-us/`, `/en/blog/honeycomb-honey-malaysia/`
- **Related articles:** `honeycomb-honey-malaysia`, `is-malaysian-honey-local-or-imported`
- **Image key:** `where-to-buy-raw-honey-kuala-lumpur`
- **Ceiling watch:** no price, no opening hours, no delivery time, no "official supplier", no store
  count beyond the two real branches. Addresses are linked from the retail page, never retyped.

### en4 — `types of honey in malaysia` (G5)
- **Slug:** `types-of-honey-in-malaysia` · **Evidence:** demand-en #4 · **Icon:** `/icons/ingrediant_08.webp`
- **Intent:** informational/comparison, pillar-shaped
- **Angle:** the SERP splits between journals and single-brand blogs; nobody maps the whole shelf,
  and nobody explains where a *blend* sits relative to single-source honey. Includes the sentence
  most sellers avoid: a spiced comb blend is not competing with kelulut or tualang, it is a
  different product class.
- **Related:** *product* kelulut honey, tualang honey, gelam honey, wild honey, multifloral honey,
  blended honey · *usage* which honey for tea · *buying* best honey malaysia · *comparison* kelulut
  vs tualang, single origin vs blended honey · *trust* what is madu hutan, why kelulut costs more
- **Links out:** `/en/benefits/`, `/en/blog/honeycomb-honey-malaysia/`, `/en/blog/manuka-honey-vs-local-honey/`, `/en/retail/`
- **Related articles:** `manuka-honey-vs-local-honey`, `honeycomb-honey-malaysia`
- **Image key:** `types-of-honey-in-malaysia`
- **Ceiling watch:** the academic literature on these honeys is written in therapeutic language.
  Stay on taste, texture, moisture, colour, production and cost. Do not imply SUBUR's honey is any
  named Malaysian varietal — the site publishes no origin.

### en5 — `how to store honey malaysia` (G4)
- **Slug:** `how-to-store-honey-malaysia` · **Evidence:** demand-en #5 · **Icon:** `/icons/ingrediant_01.webp`
- **Intent:** informational, post-purchase retention
- **Angle:** the one regional page that ranks is written for Singapore. Malaysia's version: no
  air-conditioning, a kettle on the same counter, ants as a daily fact, humidity that makes an
  unsealed jar draw water. The fridge answer — don't, and here's the ants fix instead — is the hook.
  A comb-plus-nuts blend genuinely behaves differently: it separates, comb sits, nuts settle.
- **Related:** *usage* can you refrigerate honey, how to keep ants out of honey, how to soften
  crystallised honey · *comparison* fridge vs cupboard, glass vs plastic jar · *trust* does honey
  expire, why is my honey foamy, is crystallised honey still good, honey separated in the jar
- **Links out:** `/en/blog/how-to-identify-pure-honey/`, `/en/blog/can-you-eat-honeycomb-wax/`, `/en/benefits/`, `/en/retail/`
- **Related articles:** `can-you-eat-honeycomb-wax`, `how-to-identify-pure-honey`
- **Image key:** `how-to-store-honey-malaysia`
- **Ceiling watch:** storage and texture only — crystallisation is not re-argued as an authenticity
  test, that belongs to the live article. No shelf life stated for SUBUR's jar.

### en6 — `manuka honey vs local honey`
- **Slug:** `manuka-honey-vs-local-honey` · **Evidence:** demand-en #6 · **Icon:** `/icons/ingrediant_02.webp`
- **Intent:** comparison, pre-purchase
- **Angle:** the SERP is Manuka sellers marking their own homework. SUBUR does not sell Manuka and
  does not need Manuka to lose — so it can explain what the grading number measures and what it
  costs, and say plainly that a spiced comb blend is bought for a different reason entirely.
- **Related:** *product* manuka honey, MGO grading, UMF grading, raw local honey · *buying* manuka
  honey malaysia, is manuka worth it · *comparison* manuka vs local honey, manuka vs tualang,
  imported vs local honey · *trust* what does MGO mean, what does UMF mean
- **Links out:** `/en/blog/types-of-honey-in-malaysia/`, `/en/why-us/`, `/en/benefits/`, `/en/blog/is-malaysian-honey-local-or-imported/`
- **Related articles:** `types-of-honey-in-malaysia`, `is-malaysian-honey-local-or-imported`
- **Image key:** `manuka-honey-vs-local-honey`
- **Ceiling watch:** every source frames the comparison in antibacterial terms. Convert all of it
  into *what the number measures and what it costs*. No SUBUR grading number may be implied.

### en7 — `is honey in malaysia local or imported`
- **Slug:** `is-malaysian-honey-local-or-imported` · **Evidence:** demand-en #7 · **Icon:** `/icons/ingrediant_03.webp`
- **Intent:** informational/trust
- **Angle:** answered today only by journals, trade-data portals and a content farm. Explain the
  market structure, why local product carries a premium, and what a buyer can fairly ask a seller
  about origin — then say that SUBUR publishes no origin either, and why asking is fair. Stronger
  than a vague provenance claim.
- **Related:** *product* local honey, imported honey, kelulut honey · *buying* honey country of
  origin label, local honey malaysia · *comparison* imported vs local honey, why is local honey
  more expensive · *trust* where does malaysian honey come from, can a seller tell you the origin
- **Links out:** `/en/blog/types-of-honey-in-malaysia/`, `/en/blog/where-to-buy-raw-honey-kuala-lumpur/`, `/en/why-us/`, `/en/retail/`
- **Related articles:** `types-of-honey-in-malaysia`, `where-to-buy-raw-honey-kuala-lumpur`
- **Image key:** `is-malaysian-honey-local-or-imported`
- **Ceiling watch:** production and trade figures come from named studies with specific reference
  years — attribute them as "a review of Malaysian beekeeping recorded…" with the year, never as
  current-year fact. Do not state or imply where SUBUR's honey comes from.

## Bahasa Malaysia

### ms1 — `sarang madu boleh dimakan` (G1)
- **Slug:** `sarang-madu-boleh-dimakan` · **Evidence:** demand-ms #1 · **Icon:** `/icons/ingrediant_08.webp`
- **Intent:** trust / pre-purchase verification
- **Angle:** a page-1 Malaysian article asserts that real comb *cannot* be chewed and that chewable
  comb is machine-printed. Nothing in Malay corrects it. This article explains what beeswax
  physically is, why young comb and old comb differ in texture, and what actually happens when you
  chew comb — correcting the claim, never attacking the person who made it.
- **Related:** *produk* sarang madu mentah, madu bersarang, comb honey, lilin lebah · *penggunaan*
  cara makan sarang madu, sarang madu kunyah atau telan · *pembelian* beli madu bersarang ·
  *kepercayaan* sarang madu tiruan, sarang madu cetak mesin
- **Links out:** `/ms/blog/cara-kenal-madu-asli/`, `/ms/benefits/`, `/ms/retail/`, `/ms/blog/kedai-madu-asli-selangor/`
- **Related articles:** `cara-kenal-madu-asli`, `kedai-madu-asli-selangor`
- **Image key:** `can-you-eat-honeycomb-wax` (shared with G1)
- **Ceiling watch:** no beeswax health benefits (the Indonesian sources link it to liver and cough —
  that is treatment language). Do not repeat the "80% of honey is fake" figure as our own.

### ms2 — `madu beku dalam peti sejuk`
- **Slug:** `madu-beku-dalam-peti-sejuk` · **Evidence:** demand-ms #2 · **Icon:** `/icons/ingrediant_09.webp`
- **Intent:** post-purchase panic / trust
- **Angle:** the densest Malaysian page-1 in the whole research — a UTM academic blog, two separate
  doctor-blog posts, a MARDI tag, live Threads discussion — and they contradict each other. Nobody
  explains the mechanism (glucose-to-fructose ratio, water content, temperature) in plain Malay, and
  nobody tells the reader what to do with the hardened jar in their hand right now.
- **Related:** *produk* madu mengkristal, madu berhablur, madu pekat · *penggunaan* cara cairkan
  madu beku, simpan madu suhu bilik · *pembelian* madu beku boleh makan lagi ·
  *kepercayaan* madu beku tanda palsu, madu dalam peti ais
- **Links out:** `/ms/blog/cara-kenal-madu-asli/`, `/ms/blog/madu-campur-air-panas/`, `/ms/benefits/`, `/ms/retail/`
- **Related articles:** `madu-campur-air-panas`, `cara-kenal-madu-asli`
- **Image key:** `madu-beku-dalam-peti-sejuk`
- **Ceiling watch:** crystallisation is **not** proof of authenticity — the live article already
  says so. Align, do not contradict.

### ms3 — `beza madu tulen dan madu campuran`
- **Slug:** `beza-madu-tulen-dan-madu-campuran` · **Evidence:** demand-ms #3 · **Icon:** `/icons/ingrediant_07.webp`
- **Intent:** comparison / trust — this is SUBUR's own category question
- **Angle:** competitors selling single-source honey lump "madu campuran" together with syrup and
  fake imports in one sentence — while selling herbal blends themselves. Nobody defines the terms.
  This article separates three things: single-source honey, honey blended with foods that are named
  on the label, and honey cut with syrup in secret. The honesty test is whether the label says
  what is inside.
- **Related:** *produk* madu herba, madu campuran, madu berempah, madu satu sumber ·
  *pembelian* madu campuran berbaloi ke · *perbandingan* madu campuran vs madu asli, beza madu
  herba dan madu tualang · *kepercayaan* madu dicampur sirap, madu berlabel bahan
- **Links out:** `/ms/blog/cara-kenal-madu-asli/`, `/ms/benefits/`, `/ms/why-us/`, `/ms/blog/madu-berbuih/`
- **Related articles:** `cara-kenal-madu-asli`, `sarang-madu-boleh-dimakan`
- **Image key:** `beza-madu-tulen-dan-madu-campuran`
- **Ceiling watch:** never claim a blend is *more beneficial* — stay on definitions and labelling.
  Do not name a competitor brand as fake. Do not quote the "60%" or "90%" figures.

### ms4 — `madu berbuih`
- **Slug:** `madu-berbuih` · **Evidence:** demand-ms #4 · **Icon:** `/icons/ingrediant_05.webp`
- **Intent:** post-purchase trust
- **Angle:** three or four Malaysian brand pages exist and all end at "this proves quality, buy from
  us". None says what to *do* — open slowly, open over the sink, don't fill a jar to the brim — and
  none is honest about when foam means the honey has taken on water and started fermenting.
- **Related:** *produk* madu bergas, madu berbuih putih, madu mentah · *penggunaan* cara buka botol
  madu bergas · *pembelian* madu berbuih boleh makan lagi · *kepercayaan* madu berbuih tanda palsu,
  madu berfermentasi
- **Links out:** `/ms/blog/madu-beku-dalam-peti-sejuk/`, `/ms/blog/cara-kenal-madu-asli/`, `/ms/retail/`, `/ms/benefits/`
- **Related articles:** `madu-beku-dalam-peti-sejuk`, `beza-madu-tulen-dan-madu-campuran`
- **Image key:** `madu-berbuih`
- **Ceiling watch:** foam does not prove quality. Write nothing about alcohol and religious rulings —
  that is a separate debate this site is not qualified to settle.

### ms5 — `waktu terbaik makan madu`
- **Slug:** `waktu-terbaik-makan-madu` · **Evidence:** demand-ms #5 · **Icon:** `/icons/ingrediant_03.webp`
- **Intent:** usage
- **Angle:** page 1 is entirely Indonesian — one publisher has four separate articles on the same
  question — and all of them promise health outcomes, which a Malaysian site may not copy. Win on
  language and context instead: the routine as a *practice* (a small spoon in the morning, wait,
  then breakfast, every day), plus what nobody covers — how a spiced comb blend tastes and feels
  taken straight versus stirred into a drink.
- **Related:** *produk* madu berempah, madu sarang · *penggunaan* cara makan madu, madu pagi perut
  kosong, madu sebelum tidur, amalan madu setiap pagi, sudu kecil madu · *perbandingan* madu pagi
  atau malam · *kepercayaan* madu perut kosong
- **Links out:** `/ms/blog/madu-campur-air-panas/`, `/ms/benefits/`, `/ms/blog/madu-suami-isteri/`, `/ms/retail/`
- **Related articles:** `madu-campur-air-panas`, `madu-suami-isteri`
- **Image key:** `waktu-terbaik-makan-madu`
- **Ceiling watch:** the easiest row in the round to fail. No "untuk tenaga", "untuk imun", "untuk
  penghadaman" — those are function claims. No dose in ml or g; "satu sudu kecil" as a practice.
  Stomach discomfort is not managed here — that would be medical advice.

### ms6 — `madu campur air panas` (G3)
- **Slug:** `madu-campur-air-panas` · **Evidence:** demand-ms #6 · **Icon:** `/icons/ingrediant_06.webp`
- **Intent:** usage + fear of ruining something expensive
- **Angle:** page 1 is Indonesian again, the temperature numbers contradict each other (60°C vs
  40°C), and the scariest headline says honey becomes poison. The clean Malay answer: what actually
  changes when honey is heated — taste, colour, texture — and the practical order of operations:
  brew, let it cool to warm, then add honey.
- **Related:** *produk* madu mentah, madu tidak dipanaskan · *penggunaan* madu air suam, madu dalam
  teh panas, madu untuk masakan, madu dalam kopi · *perbandingan* air suam atau air sejuk untuk
  madu · *kepercayaan* madu air panas jadi racun, madu panas hilang khasiat
- **Links out:** `/ms/blog/madu-beku-dalam-peti-sejuk/`, `/ms/blog/waktu-terbaik-makan-madu/`, `/ms/benefits/`, `/ms/retail/`
- **Related articles:** `waktu-terbaik-makan-madu`, `madu-beku-dalam-peti-sejuk`
- **Image key:** `madu-campur-air-panas` (shared with G3)
- **Ceiling watch:** do not confirm the poison myth and do not refute it with medical vocabulary.
  Do not list enzymes with health functions. Prefer "air suam, bukan air mendidih" over a
  temperature number that cannot be sourced.

### ms7 — `kedai madu asli selangor` (G2)
- **Slug:** `kedai-madu-asli-selangor` · **Evidence:** demand-ms #7 · **Icon:** `/icons/ingrediant_02.webp`
- **Intent:** local purchase — the closest to transaction in the Malay set
- **Angle:** page 1 is Facebook and Instagram profiles plus an old directory; no indexable web page
  is qualified for this intent. The buyer's guide to purchasing honey face to face: you can see the
  comb in the jar, you can ask what is in it, you can bring the jar back and show someone.
- **Related:** *produk* madu sarang, madu berempah · *penggunaan* madu untuk hadiah · *pembelian*
  kedai madu ampang jaya, kedai madu batu caves, beli madu selangor, pembekal madu selangor,
  whatsapp beli madu · *perbandingan* beli madu di kedai atau online · *kepercayaan* pilih penjual
  madu, tengok madu sebelum beli
- **Links out:** `/ms/retail/`, `/ms/contact/`, `/ms/why-us/`, `/ms/blog/sarang-madu-boleh-dimakan/`
- **Related articles:** `sarang-madu-boleh-dimakan`, `beza-madu-tulen-dan-madu-campuran`
- **Image key:** `where-to-buy-raw-honey-kuala-lumpur` (shared with G2)
- **Ceiling watch:** no price, no rating, no customer count, no certification, no opening hours, no
  stock promise, no "satu-satunya" or "terbaik".

## Arabic

### ar1 — `أين أشتري عسل في كوالالمبور` (G2)
- **Slug:** `ayna-ashtari-asal-fi-kuala-lumpur` · **Evidence:** demand-ar #1 · **Icon:** `/icons/ingrediant_10.webp`
- **Intent:** buying / local navigation
- **Angle:** the Arabic SERP returns **zero** pages answering this — Saudi and Egyptian shops that
  do not ship inside Malaysia, plus honeymoon tourism packages. Meanwhile Arab shopping in KL is a
  documented, active interest. The only Arabic page that answers "where, inside Selangor", with the
  walk-in versus order-in distinction for people living outside the valley.
- **Related:** *المنتج* عسل بشمع النحل ماليزيا، عسل مخلوط بالأعشاب · *الشراء* محل عسل في سيلانجور،
  بقالة عربية في كوالالمبور، متجر عربي أمبانج، عسل باتو كيفز، طلب عسل واتساب ماليزيا ·
  *المقارنة* أفضل مكان لشراء العسل في ماليزيا · *الثقة* متجر عسل موثوق كوالالمبور
- **Links out:** `/ar/retail/`, `/ar/contact/`, `/ar/why-us/`, `/ar/blog/tariqat-akl-al-asal-bil-shama/`
- **Related articles:** `tariqat-akl-al-asal-bil-shama`, `al-asal-al-malizi`
- **Image key:** `where-to-buy-raw-honey-kuala-lumpur` (shared with G2)
- **Ceiling watch:** no "cheapest" or "best price" — no price is published. Only the two branches in
  `site.ts`; external sources listing other branches are not our facts.

### ar2 — `طريقة أكل العسل بالشمع` (G1)
- **Slug:** `tariqat-akl-al-asal-bil-shama` · **Evidence:** demand-ar #2 · **Icon:** `/icons/ingrediant_08.webp`
- **Intent:** usage — the reader is already holding the jar
- **Angle:** three separate Gulf shops carry the question in their titles, and they answer with
  benefit lists, not instructions; the highest-authority page has five headings and none of them
  explains chewing, texture, or what to do with the residue. The practical guide nobody wrote:
  spooning from a jar that holds raw comb, spice grains and nuts, what happens in the mouth minute
  by minute, why the wax stays chewable, and why a dry spoon matters.
- **Related:** *المنتج* عسل بشمعه، قرص العسل، شمع عسل خام · *الاستخدام* هل يؤكل شمع العسل، هل أبلع
  شمع العسل، مضغ شمع العسل · *الشراء* عسل بالشمع ماليزيا · *المقارنة* الفرق بين العسل بالشمع
  والعسل السائل · *الثقة* هل الشمع في العسل طبيعي
- **Links out:** `/ar/benefits/`, `/ar/blog/hifz-al-asal-fi-al-jaw-al-ratb/`, `/ar/retail/`, `/ar/blog/ayna-ashtari-asal-fi-kuala-lumpur/`
- **Related articles:** `hifz-al-asal-fi-al-jaw-al-ratb`, `ayna-ashtari-asal-fi-kuala-lumpur`
- **Image key:** `can-you-eat-honeycomb-wax` (shared with G1)
- **Ceiling watch:** competitors tie chewing to gums, teeth and bacteria — all prohibited here.
  Sensory and practical only. No daily quantity phrased as a dose.

### ar3 — `طريقة حفظ العسل في الجو الرطب` (G4)
- **Slug:** `hifz-al-asal-fi-al-jaw-al-ratb` · **Evidence:** demand-ar #3 · **Icon:** `/icons/ingrediant_01.webp`
- **Intent:** usage, post-purchase, genuine anxiety in a tropical climate
- **Angle:** eight dedicated Arabic storage pages, every one of them recommending 18–24 °C — advice
  that is unusable in an ordinary Malaysian kitchen with no air-conditioning, and not one mentions a
  tropical climate. Rewritten for someone who actually lives here: where the jar goes in a KL flat,
  why a tight lid matters more than temperature, why a wet spoon is the real enemy, and why a jar
  holding wax and nuts needs more care than clear liquid honey.
- **Related:** *المنتج* عسل خام، مرطبان زجاجي للعسل · *الاستخدام* هل يوضع العسل في الثلاجة، تخزين
  العسل بعد فتحه، ملعقة العسل · *الشراء* شراء عسل في ماليزيا · *المقارنة* زجاج أم بلاستيك ·
  *الثقة* تخمر العسل رغوة، فقاعات في مرطبان العسل
- **Links out:** `/ar/blog/hal-lil-asal-tarikh-salahiya/`, `/ar/blog/tariqat-akl-al-asal-bil-shama/`, `/ar/benefits/`, `/ar/retail/`
- **Related articles:** `hal-lil-asal-tarikh-salahiya`, `tariqat-akl-al-asal-bil-shama`
- **Image key:** `how-to-store-honey-malaysia` (shared with G4)
- **Ceiling watch:** "honey never spoils" is common on the Arabic web, inaccurate in this climate,
  and contradicts the date on the jar. Storage preserves *taste and texture*, never "the benefits".

### ar4 — `عسل ماليزي` (G5)
- **Slug:** `al-asal-al-malizi` · **Evidence:** demand-ar #4 · **Icon:** `/icons/ingrediant_10.webp`
- **Intent:** comparison / trust
- **Angle:** eight of nine results for Arabic "Malaysian honey" queries point at one sachet product
  category, several named members of which carry published official alerts for undeclared
  pharmaceutical ingredients. No neutral Arabic page tells the searcher the phrase refers to three
  different things: honeys actually produced in Malaysia, sachets marketed under the name, and food
  blends sold with their ingredients written down. The distinction is **disclosure**, not efficacy.
- **Related:** *المنتج* عسل كيلولوت، عسل الغابة الماليزي، خلطة عسل بالأعشاب · *الشراء* شراء عسل من
  ماليزيا · *المقارنة* أنواع العسل الماليزي، عسل بأظرف أم مرطبان · *الثقة* مكونات معلنة على العلبة،
  تنبيهات رسمية على منتجات العسل
- **Links out:** `/ar/why-us/`, `/ar/benefits/`, `/ar/blog/ayna-ashtari-asal-fi-kuala-lumpur/`, `/ar/blog/asal-bil-zafaran/`
- **Related articles:** `ayna-ashtari-asal-fi-kuala-lumpur`, `asal-bil-zafaran`
- **Image key:** `types-of-honey-in-malaysia` (shared with G5)
- **Ceiling watch:** highest-risk row in the round. Never state what the sachet products do, and
  never imply SUBUR substitutes for them — that would import the very claim we avoid. Regulatory
  alerts are described as "official alerts were issued about named products", with the source
  linked, never generalised to unnamed products. SUBUR is not "tested" or "approved" — no
  certification is published.

### ar5 — `هل للعسل تاريخ صلاحية`
- **Slug:** `hal-lil-asal-tarikh-salahiya` · **Evidence:** demand-ar #5 · **Icon:** `/icons/ingrediant_04.webp`
- **Intent:** trust — the reader is turning the jar over and doubting the printed date
- **Angle:** two large news outlets, four shops and a religious-advice site all carry the question,
  and the ranking answers say honey has no real expiry — one explains the printed date by implying
  the product is not proper honey, which plants doubt about every legally-labelled jar. The
  reconciling page: a date is a packaging obligation; raw honey is judged by change, not spoilage
  (crystallising, fermenting when moisture enters, darkening); and a jar holding nuts and wax has an
  extra consideration, because nuts change in taste over time in a way honey does not.
- **Related:** *المنتج* عسل خام معبأ، عسل بالمكسرات · *الاستخدام* كم يبقى العسل بعد فتحه ·
  *المقارنة* تاريخ الإنتاج وتاريخ الانتهاء · *الثقة* هل ينتهي العسل، تاريخ على علبة العسل، علامات
  تغيّر العسل
- **Links out:** `/ar/blog/hifz-al-asal-fi-al-jaw-al-ratb/`, `/ar/blog/kayfa-tamiz-al-asal-al-asli/`, `/ar/benefits/`, `/ar/retail/`
- **Related articles:** `hifz-al-asal-fi-al-jaw-al-ratb`, `kayfa-tamiz-al-asal-al-asli`
- **Image key:** `hal-lil-asal-tarikh-salahiya`
- **Ceiling watch:** no regulation number, no fixed shelf-life figure, no "good forever", and no
  scare framing in the other direction.

### ar6 — `هل الماء الساخن يفسد العسل` (G3)
- **Slug:** `al-ma-al-sakhin-wal-asal` · **Evidence:** demand-ar #6 · **Icon:** `/icons/ingrediant_06.webp`
- **Intent:** usage — a daily question for anyone sweetening a drink
- **Angle:** dense, poor-quality competition: contradictory temperature figures (42°, 40–50°, 140°)
  and "toxic compound" headlines on general-content sites. The practical rule instead of a contested
  number: let the drink cool before the honey goes in, because heat changes taste, aroma and
  texture — reason enough without discussing benefits at all. Plus the angle nobody has: what
  happens to the wax when it meets hot liquid, and how to loosen a hardened jar without wrecking it.
- **Related:** *المنتج* عسل خام، عسل بشمعه · *الاستخدام* العسل مع الشاي، تحلية المشروبات بالعسل،
  إذابة العسل المتبلور، تسخين العسل · *المقارنة* العسل أم السكر لتحلية المشروبات · *الثقة* خرافات
  عن العسل، درجة الحرارة التي تؤثر على العسل
- **Links out:** `/ar/blog/hifz-al-asal-fi-al-jaw-al-ratb/`, `/ar/blog/tariqat-akl-al-asal-bil-shama/`, `/ar/benefits/`, `/ar/retail/`
- **Related articles:** `hifz-al-asal-fi-al-jaw-al-ratb`, `al-asal-al-malizi`
- **Image key:** `madu-campur-air-panas` (shared with G3)
- **Ceiling watch:** a magnet for claims — "loses its benefits", "becomes toxic", "boosts immunity".
  Stay entirely on taste, texture and aroma. No temperature figure lifted from an unsourced page.

### ar7 — `عسل بالزعفران`
- **Slug:** `asal-bil-zafaran` · **Evidence:** demand-ar #7 · **Icon:** `/icons/ingrediant_02.webp`
- **Intent:** product, clear buying intent
- **Angle:** page 1 is product listings, not articles, and the strongest editorial page lists
  claimed cures while telling the buyer nothing about **taste**. The page that answers what it
  actually tastes like: saffron gives colour and aroma before flavour, ginseng is earthy and bitter
  against the sweetness, star anise, nutmeg, cinnamon and ginger build the warmth, walnuts and
  almonds turn liquid into something you chew. Plus a search-useful fact: there are no dates in it.
- **Related:** *المنتج* عسل بالجينسنغ، عسل بالمكسرات، عسل بالقرفة والزنجبيل، خلطة عسل بالأعشاب ·
  *الاستخدام* طريقة استعمال العسل بالزعفران · *الشراء* شراء عسل بالزعفران ماليزيا ·
  *المقارنة* عسل صافٍ أم خلطة، عسل بالتمر أم بدون · *الثقة* مكونات خلطة العسل، عسل بمكونات معلنة
- **Links out:** `/ar/benefits/`, `/ar/blog/habbat-al-barakah-wal-asal/`, `/ar/retail/`, `/ar/blog/al-asal-al-malizi/`
- **Related articles:** `al-asal-al-malizi`, `habbat-al-barakah-wal-asal`
- **Image key:** `asal-bil-zafaran`
- **Ceiling watch:** saffron and ginseng attract claims in Arabic content — carry none of them
  across. Never state ingredient proportions; they are not published, and inventing one invents a
  fact.

---

## Images — 14 files for 21 articles

Grouped articles share one image (the site keys article figures by canonical English slug, so a
group already resolves to one file). Singles get their own.

| Image key | Used by |
|---|---|
| `honeycomb-honey-malaysia` | en1 |
| `can-you-eat-honeycomb-wax` | en2, ms1, ar2 |
| `where-to-buy-raw-honey-kuala-lumpur` | en3, ms7, ar1 |
| `types-of-honey-in-malaysia` | en4, ar4 |
| `how-to-store-honey-malaysia` | en5, ar3 |
| `manuka-honey-vs-local-honey` | en6 |
| `is-malaysian-honey-local-or-imported` | en7 |
| `madu-beku-dalam-peti-sejuk` | ms2 |
| `beza-madu-tulen-dan-madu-campuran` | ms3 |
| `madu-berbuih` | ms4 |
| `waktu-terbaik-makan-madu` | ms5 |
| `madu-campur-air-panas` | ms6, ar6 |
| `hal-lil-asal-tarikh-salahiya` | ar5 |
| `asal-bil-zafaran` | ar7 |

All 4:3 (1200×900), WebP, ≤110 KB, written to `public/images/article-<key>.webp`. 4:3 is not
cosmetic: `scripts/qa/image-audit.mjs` fails any content image rendered at a ratio other than its
natural one, and the blog cards are a fixed 4:3 frame.
