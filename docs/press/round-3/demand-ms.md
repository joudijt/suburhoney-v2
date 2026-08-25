# PRESS Round 3 — Malay (Bahasa Malaysia) demand research

Researcher pass, Stage 1. Pull date for every live-web observation in this file: **2026-08-25**.
No writing, no repo edits beyond this file.

---

## 0. How evidence was obtained, and what I could not obtain

Read this before trusting any line below.

**What is real, measured demand:**
`docs/press/round-3/gsc-demand.md` — Search Console rows for `sc-domain:madinah.com.my`, the same
retailer (Berkat Madinah Store), same Malaysian audience, 16-month window. Impressions and average
positions in this file are quoted verbatim from that table. `suburhoney.com` itself has **zero**
query rows, so there is no first-party harvest; every SUBUR-side judgement is still demand-led from
SERP research, as in rounds 1 and 2.

**What is SERP composition, not volume:**
Every "what currently ranks" section comes from `WebSearch` run with a Malay-language query, plus
`WebFetch` on individual competitor pages to measure their actual depth. The search index is
US-based, so the result set is a reasonable read of *which pages exist and how deep they are*, and
a poor read of Malaysian ranking order. I did not treat it as a ranking snapshot anywhere.

**What I could not get, stated plainly:**

- **No search-volume figures of any kind.** No Keyword Planner, no Ahrefs/Semrush on this machine,
  Cogny quota still exhausted. **There is not one volume number in this file, and none should be
  added downstream.** Where I say "strong demand" I mean a GSC impression count, and I name it.
- **No live Malaysian SERP.** `WebFetch` on `google.com/search?...&gl=my&hl=ms` returned Google's
  block page, not results (attempted 2026-08-25). So **no genuine "Soalan lazim" / PAA box was
  captured**, and I have not invented any. Where I describe reader questions, they come from
  competitor page headings and from GSC query strings — both named at the point of use.
- **No autocomplete.** Same block. Nothing in this file is presented as autocomplete evidence.

**One structural finding about Malay honey SERPs that shapes every recommendation below:**
in eight of the nine Malay searches I ran, the results were **majority Indonesian**
(halodoc, alodokter, hellosehat, kompas, detik, tempo, CNN Indonesia, klikdokter, popmama). The
Malaysian entries were typically a blog post on a honey seller's own domain, a Facebook or TikTok
post, or a Lemon8 card. This means two things: (a) a competently written Malaysian page has an
unusually clear run at these queries, and (b) the incumbent framing is Indonesian health-media
framing — `manfaat`, `khasiat`, dosage in spoons — which is precisely the framing the Malaysian
food ceiling forbids us. Every candidate below is scored on whether it survives with that framing
removed.

---

## 1. Constraint check applied to every candidate

**Cannibalisation.** The 16 live Malay focus keywords, checked one at a time against all 10
candidates: `beli madu online atau kedai fizikal`, `beza madu tulen dan madu campuran`,
`cara kenal madu asli`, `doorgift madu kahwin`, `habbatus sauda madu`, `hadiah madu untuk raya`,
`kedai madu asli selangor`, `madu beku dalam peti sejuk`, `madu berbuih`, `madu campur air panas`,
`madu manuka vs madu tempatan malaysia`, `madu suami isteri`, `madu untuk masakan`,
`resepi sarapan guna madu`, `sarang madu boleh dimakan`, `waktu terbaik makan madu`.

I also read the **secondary keyword arrays** of the six nearest live articles rather than only their
focus keywords, because that is where the real collisions were hiding. Three findings that changed
my shortlist, and that a downstream writer needs:

- `madu berempah` is **already claimed** as a keyword inside `beza-madu-tulen-dan-madu-campuran`.
- `simpan madu suhu bilik` is **already claimed** inside `madu-beku-dalam-peti-sejuk` — which is why
  a generic `cara simpan madu` candidate is discarded below rather than shortlisted.
- `madu campuran herba` is **already claimed** inside `madu-suami-isteri`.

**Legal ceiling (Peraturan-Peraturan Makanan 1985).** Food and its advertising may not claim to
prevent, treat, reduce or cure any condition. No statute number, sub-regulation or penalty figure
appears in this file or may appear in any article. Candidates whose only satisfying answer is a
health claim are discarded, and I name them.

**Banned terms.** `tradisional` / `tradisi` / `timur tengah` / `turun-temurun` / `piawaian dikaji`.
Flagged per candidate where the source SERP uses them — two candidates below sit on topics where
competitor copy uses `Timur Tengah` as the default descriptor, and that is called out.

**Fabrication.** SUBUR publishes **no price, no reviews, no ratings, no customer count, no halal
certification, no bulk/corporate pathway, no map, no country of origin**. Each candidate names which
of these it would be tempted to invent.

**Not a translation of the English round.** Round 1 found five of seven Malay topics were
post-purchase anxiety rather than category browsing. That pattern held again this round: the two
strongest candidates below (#1, #5) are both "the jar changed and I don't know if I've been cheated",
which is the Malay reader's native mode. Candidates that are essentially the English article in
Malay are discarded in §5 and named as such.

---

## 2. Candidates

### C1 — `tarikh luput madu`

- **Slug:** `tarikh-luput-madu`
- **Intent:** Informational / post-purchase reassurance. "There's a date printed on my jar and I was
  told real honey has no expiry — so is mine fake, or is it about to go off?"

**Demand evidence**

- GSC, `madinah.com.my`: no exact Malay row for expiry (this is a gap in the sibling's coverage, not
  proof of absence). The nearest same-shape rows are the **authenticity-doubt cluster**, which is the
  emotional twin of this query: `madu al shifa palsu` — 1 click, **30 impressions**, avg position
  **1.5**; `perbedaan madu al shifa asli dan palsu` — 3 clicks, **18 impressions**, position **2.1**;
  `madu al shifa asli dan palsu` — 1 click, **9 impressions**, position **1.7**; and on the English
  side `al shifa honey is pure or not` — 5 clicks, **262 impressions**, position **3.0**, plus
  `is al shifa honey pure` — **101 impressions**. This audience's dominant honey behaviour is
  *checking whether the jar it already owns is genuine*. Expiry is one of the three physical triggers
  for that check; the site already owns the other two (foam, fridge-hardening) and does not own this
  one.
- Live SERP, pulled 2026-08-25: a dense Malay/Malaysian result set exists for this exact question —
  `siakapkeli.my` ("Boleh Tahan Ribuan Tahun, Ini Sebab Madu Tulen Tiada Tarikh Luput"),
  `kuali.com` ("Madu boleh tahan bertahun-tahun, kalau cepat rosak petanda bukan asli",
  dated 2025-12-03), `urutbekamjb.com` ("4 Mitos Tentang Madu"), plus two Lemon8 cards on
  `lemon8-app.com` from `@mrheepharmacist` and `@fatenaqeela` both framed as
  "Adakah madu asli ada tarikh luput?". Malaysian sources, Malaysian phrasing, multiple
  independent publishers — that is the strongest existence-of-demand signal of any candidate here.
  **No volume figure obtained; do not infer one from "dense".**

**What currently ranks, and how deep**

| Source | Depth (measured) | What it says |
|---|---|---|
| `kuali.com` | **~350–400 words** (fetched and counted 2026-08-25) | "If honey spoils quickly it is a sign it is not authentic", and — the load-bearing error — *"Jika ada tarikh luput, biasanya itu kerana madu dicampur bahan tambahan atau tarikh tersebut merujuk kepada jangka hayat pembungkusan."* |
| `siakapkeli.my` | short news-format piece | "Pure honey has no expiry date", thousand-year-old-tomb-honey framing |
| `lemon8-app.com` ×2 | social cards, a few hundred words each | bundles expiry with "5 ujian mudah" purity tests |
| `urutbekamjb.com` | listicle | myth-format, no label discussion |

**The specific gap.** Every one of these treats *the presence of a printed date* as evidence of
adulteration. Not one explains what a durability date on a packaged food jar actually is, or that a
correctly labelled blend carries one as a matter of course. The result is a live, widely republished
Malaysian myth that **actively penalises a properly labelled product like SUBUR** and rewards an
unlabelled bottle sold from a Facebook post. No page corrects it. The longest page in the set is
under 400 words.

**The angle.** The site already has two articles built on exactly this move — `madu berbuih`
("buih tidak membuktikan madu itu tulen, dan ia juga tidak membuktikan madu itu palsu") and
`madu beku dalam peti sejuk` ("bukan tanda madu rosak"). This is the third observable in the same
series and the only one still unowned: *a date is not a verdict*. Content is: what a printed date on
a jar is and is not; why honey resists spoiling (sugar concentration and low water, described as
physics, not as a benefit); the one condition under which a jar genuinely does change (it takes up
water — one sentence, then hand off to `madu berbuih`); and what to actually check instead. Voice
match is exact: correction of a specific sentence a reader has read elsewhere.

**Risk register**

- *Legal ceiling:* **Low, the lowest in this file.** Shelf life is a food-safety and labelling
  subject, not a health-benefit subject. The one trap is the antibacterial/enzyme explanation the
  Indonesian sources use ("glucose oxidase kills bacteria") — that must stay a description of why
  the *jar* is stable, and must never be turned toward the reader's body. **Do not cite any
  regulation, sub-regulation or penalty.** Round 1 already got a sub-regulation number wrong once.
- *Fabrication:* Real risk, and it is specific. The writer will want to state what date SUBUR's jar
  carries, or how long the jar keeps. **SUBUR publishes no shelf-life figure.** No months, no years,
  no "best within". Point the reader at their own label and at the counter.
- *Cannibalisation:* Nearest neighbours are `madu berbuih` (which owns `madu berfermentasi`) and
  `madu beku dalam peti sejuk` (which owns `simpan madu suhu bilik`). Boundary to hold: this article
  is about **the printed date and shelf life**; fermentation gets at most one sentence plus a link,
  and storage-temperature advice is deliberately not developed here.
- *Banned terms:* clean. Nothing in this topic pulls toward any of the five.

**Cross-language:** English plausibly shares it and there is a near-adjacent live English article
(`how-to-store-honey-malaysia`) — but "does honey expire" is a *different question* from "how do I
store it", so this is a candidate for a **future** EN sibling, not an automatic group. Arabic already
ships `hal-lil-asal-tarikh-salahiya` ("does honey have an expiry date"), which is the **same
question**. **Recommend grouping MS with the existing AR article** — a real cluster, not an
overstated one.

---

### C2 — `madu kelulut vs madu tualang`

- **Slug:** `madu-kelulut-vs-madu-tualang`
- **Intent:** Commercial-investigational / category orientation. "These are the two honeys everyone
  in Malaysia talks about — which do I buy, and where does the jar in front of me fit?"

**Demand evidence**

- GSC, `madinah.com.my`: **no rows** for kelulut or tualang. Stated honestly — the sibling retailer
  sells Arab-style honey and does not stock Malaysian forest honey, so its query log is silent here
  by construction. **This candidate has no first-party demand evidence.** Its case rests entirely on
  SERP composition below, and it is ranked accordingly (#2, not #1).
- Live SERP, 2026-08-25: the comparison exists as a named, recurring content format across
  independent Malaysian publishers and creators —
  `madusafiyyah.blogspot.com` ("Beza Madu Tualang & Madu Kelulut"),
  `rabbbeez.com` ("Perbezaan Lebah Madu dan Lebah Kelulut"),
  `urutbekamjb.com` ("Madu Tualang vs Madu Biasa"),
  `ococ.my` ("9 Jenis Madu Yang Berkhasiat"),
  a Facebook post from `mydoaHQ` and a second from `MyDOAPontian` both titled
  "Madu Kelulut vs Madu Lebah Biasa: Apa Perbezaannya?",
  TikTok videos from `@dr1share` and `@fadli.maliki`, and a Threads post from `@mrafizk` opening
  *"Ramai masih keliru beza madu Kelulut dengan madu Tualang"*. When sellers, a bekam clinic, two
  doctors-on-TikTok and a beekeeping site all publish the same comparison unprompted, the question is
  being asked. **No volume figure obtained.**

**What currently ranks, and how deep**

| Source | Depth (measured) | Character |
|---|---|---|
| `rabbbeez.com` | **~1,200 words** (fetched and counted 2026-08-25) | Beekeeping-side piece: species taxonomy, hive structure, castes, propolis, yield. Compares *bees*, not honeys a shopper chooses between. Carries an unsupported absorption-rate claim ("half an hour vs one hour"). |
| `madusafiyyah.blogspot.com` | 2016 blog post, short | seller-side, khasiat framing |
| `urutbekamjb.com` | listicle | compares tualang to "madu biasa", not to kelulut |
| `ococ.my` | listicle of 9 types | `berkhasiat` framing throughout, thin per type |
| Facebook / TikTok / Threads | social, no indexable depth | all khasiat-led |

**The specific gap — and it is unusually clean.** The deepest page in the set (1,200 words) answers
a *beekeeper's* question, and explicitly does **not** compare kelulut honey with tualang honey as
products. Everyone else answers with a health league table (`mengelakkan penyakit kencing manis`,
`mengubati batuk`, `meningkatkan stamina`) — which is both illegal for us and useless to the shopper.
Nobody writes the buyer's version: they taste different, they pour differently, they cost different
amounts, and **neither of them is the only shape honey comes in.**

**The angle.** Two moves the live 16 don't make. First, the honest refusal: there is no "better"
honey here, and the khasiat ranking a reader has seen is a marketing device, not a finding —
the same structural move `cara kenal madu asli` makes about the thumb/water/burn tests. Second, and
this is what makes it a SUBUR page rather than a general-interest one: **SUBUR is neither.** A raw
comb blend is a third category, and a reader who has spent a week deciding between kelulut and
tualang has been choosing inside a menu that doesn't contain the jar in front of them. Descriptive
only — species, water content, pour, sourness, why the price bands differ.

**Risk register**

- *Legal ceiling:* **High, and it is the reason this is #2 and not #1.** The entire source corpus is
  health claims, several of them naming conditions outright (`kencing manis`, `batuk`,
  `demam selesema`). A writer skim-reading these sources will drift within two paragraphs. Mitigation
  the brief must carry: **no antioxidant, no probiotic, no absorption-rate, no immunity language, and
  no naming of any condition, not even to deny it.** Taste, texture, water content, colour, price
  band, availability. That is the whole permitted surface.
- *Fabrication:* Price bands are the trap. Discuss *relative* cost as a market observation only
  (kelulut is harvested in smaller volumes and sells higher) and **never attach a figure to SUBUR** —
  no price is published. Do not state SUBUR's origin, which is also unpublished.
- *Cannibalisation:* Check against `madu manuka vs madu tempatan malaysia` (live). That article is
  about **grading schemes** — what an MGO/UMF number measures and that SUBUR carries none. This one
  is about **Malaysian honey types** and carries no grading discussion at all. Different axis;
  boundary is defensible but must be stated in the brief and one cross-link placed. Also check
  `beza madu tulen dan madu campuran` (live): that is pure-vs-adulterated, this is
  species-vs-species. Do not restate the adulteration ladder here.
- *Banned terms:* real exposure. Malay writing about tualang reaches for `tradisional` and
  `turun-temurun` almost reflexively (forest harvesting, rope-climbing honey hunters). Flag hard.

**Cross-language:** English shares the demand and there is a live English article
(`types-of-honey-in-malaysia`) that covers adjacent ground — so this should be checked against it
for overlap, and grouping is **not** recommended without that check. Arabic does **not** share it:
the Malaysian-Arabic reader is not shopping kelulut. Keep MS standalone unless the EN check says
otherwise.

---

### C3 — `madu khalta`

- **Slug:** `madu-khalta`
- **Intent:** Category / label literacy. "Every Arab honey listing says *khalta*. What is that word
  actually telling me about what's in the jar?"

**Demand evidence — the strongest first-party evidence in this file**

- GSC, `madinah.com.my`, the Arab-honey cluster this word names:
  `yemeni honey` — **1,935 impressions**, position 11.5;
  `yemeni sidr honey` — **1,801 impressions**, position 14.4;
  `kedai madu arab near me` — 5 clicks, **197 impressions**, position **3.8**;
  `sidr honey madinah` — **194 impressions**;
  `madu madinah` — 3 clicks, **155 impressions**, position **2.2**;
  `arabic honey` — 37 impressions; `arab honey` — 27; `madu yaman strong honey` — 8 impressions,
  position 2.6; `yaman honey` — 22. This is by a wide margin the largest coherent demand cluster in
  the sibling's 222 honey rows, and `kedai madu arab near me` and `madu madinah` prove Malay-side
  searchers are inside it, not only English-side ones.
- Live SERP, 2026-08-25: `madu khalta` is a **transacted retail category** in Malaysia with its own
  marketplace taxonomy — `lazada.com.my/tag/madu-khalta/` and
  `lazada.com.my/tag/khalta-madu-yaman/` are auto-generated tag pages, which Lazada only creates
  where query traffic exists; plus `pgmall.my`, a TikTok Shop MY PDP
  ("Khalta Yemeni Madu Dengan Camburan kacang"), `habibyasalam.com` (two SKUs), `mahnazfood.com`,
  and a TikTok from `@muhajirinlegacy` defining it in one line:
  *"Madu khaltah adalah madu sidr campuran kekacang dan rempah arab."* **No volume figure obtained;
  the Lazada tag pages are evidence of a category, not of a number.**

**What currently ranks, and how deep**

Marketplace listings and brand product pages, top to bottom. **There is no editorial page at all** —
not a thin one, not a bad one. The only definition in the entire result set is the one-line TikTok
caption quoted above. The nearest thing to explanatory content is `lemon8-app.com`
("Rahsia 'Madu Khalta Al Malak' dan Khasiatnya dalam Penjagaan Kulit") and brand copy such as
Habib Ya Salam's Khalta Queen page, which sells on `menstabilkan hormon` and
`melancarkan peredaran darah`, and Khalta Energy Booster, described as imported
"dari Republik Yaman, **Timur Tengah** Semenanjung Arab".

**The specific gap.** A shopper meets the word `khalta` on a listing and has nowhere to find out
what it means. The word denotes *a mixture* — that is all. It is not a grade, not an origin
guarantee, and not a formula: two jars both labelled khalta can share almost nothing. The only thing
that tells a buyer what is in a khalta jar is its **ingredient list** — which is exactly what SUBUR
publishes (ten named ingredients) and exactly what most of this category does not.

**The angle.** This is the site's label-literacy move applied to a word that currently does the
opposite of informing. It is *not* an "is it real honey" article (`cara kenal madu asli` owns that)
and *not* a pure-vs-blended article (`beza madu tulen dan madu campuran` owns that). It is: here is a
word you keep seeing; here is what it does and does not commit the seller to; here is how to read the
jar. It converts a category term into a checklist.

**Risk register — the highest-risk candidate here, and it must ship with an explicit fence**

- *Legal ceiling:* **High.** Practically every commercial khalta page in Malaysia sells on
  `energy booster`, `untuk kesihatan lelaki`, `menstabilkan hormon`, `melancarkan peredaran darah`.
  All of it is out. The article must describe **composition**, never effect.
- *Banned terms:* **Direct, demonstrated exposure.** `Timur Tengah` appears in competitor copy for
  this exact product category (Lazada/PGMall listing text, quoted above), and `tradisional` /
  `makanan sunnah` framing surrounds it. Round 2 Stage 0 already caught an Arabic paraphrase of this
  same banned claim on a generated surface. If the writer cannot describe this category without
  reaching for a regional descriptor, the topic fails — say so in the brief, not after.
- *Fabrication:* Two distinct traps. **(a) Origin.** The category is defined in the market as Yemeni.
  SUBUR publishes no country of origin, and the live English article
  `is-malaysian-honey-local-or-imported` already sets the site's handling: *"SUBUR publishes no
  country of origin for its honey, and this article will not imply one."* That exact stance must be
  restated here, in Malay. **(b) Halal.** Every competitor listing shouts `100% HALAL`. SUBUR
  publishes no certification. Do not match, do not gesture at it.
- *Cannibalisation:* the tightest in this file, and it needs a decision before writing.
  `madu campuran herba` is already a keyword on `madu-suami-isteri`, and `madu berempah` is already a
  keyword on `beza-madu-tulen-dan-madu-campuran`. Worse, the khalta SERP is saturated with
  married-couple framing (`madu khas suami isteri` on mahnazfood, `madumalampegantin` as a TikTok
  tag), so the article will be *pulled* toward a live article's territory by its own sources.
  Boundary that must hold: this piece is about **the word on the label and the ingredient list behind
  it**. It must not discuss who the blend is for. One link to `madu-suami-isteri` and move on.

**Cross-language:** Arabic shares this demand most naturally of all — the reader for whom `خلطة` is
an ordinary word — but Arabic already ships `mukawwinat-khaltat-al-asal-bil-aashab`, which is the
ingredient-literacy version of this page. **Recommend checking that article before commissioning; if
it covers the same ground, group rather than duplicate.** English also plausibly shares it
(GSC's `yemeni honey` at 1,935 impressions is an English-language row), and an EN sibling is worth a
future round.

---

### C4 — `madu untuk ibu mengandung`

- **Slug:** `madu-untuk-ibu-mengandung`
- **Intent:** Safety / permission. "I'm pregnant, I've been told raw honey is a risk. Is it, or is
  that the baby rule I'm remembering wrong?"

**Demand evidence**

- GSC, `madinah.com.my`: **no pregnancy rows in either language.** Honest read — the sibling's
  catalogue skews to the married-couple and black-seed clusters and it has no pregnancy content to
  earn impressions with, so absence here is weak evidence either way. The adjacent
  `benefits of honey for women` row exists at only 2 impressions. **This candidate's case is the
  SERP gap, not the query log.**
- Live SERP, 2026-08-25: a large, actively published corpus exists — `alodokter.com`
  ("Madu untuk Ibu Hamil, Inilah Fakta dan Cara Aman Mengonsumsinya"), `halodoc.com` (three separate
  articles, including a trimester-1 piece), `hellosehat.com` (two, one a brand-recommendation
  listicle), `ciputrahospital.com` ("11 Manfaat Madu untuk Ibu Hamil"), `haibunda.com`, and an
  Indonesian public-health-clinic page. **Every single result is Indonesian.** I found no Malaysian
  page on this question at all.

**What currently ranks, and how deep**

Indonesian health-media, well-resourced, medically reviewed, 800–1,500 words each — these are
**strong incumbents**, and I am reporting that honestly rather than calling the SERP thin. But they
are strong at answering a *different* question than the one a Malaysian reader with a raw comb jar
is asking, and they contradict each other on the point that matters. `alodokter` and `hellosehat`
both state that pregnant women **should not** consume raw, unpasteurised honey. `halodoc` states
honey is safe in the first trimester. Several then explain that infant botulism cannot cross the
placenta — which undercuts the raw-honey warning they just gave. A reader following the top three
results gets three answers.

**The specific gap.** Two, and they compound. (1) **Zero Malaysian coverage** — no local page, no
local context, and a Malaysian reader is being served Indonesian-market brand listicles.
(2) **The raw-honey contradiction is unresolved anywhere**, and it is the only part of this that is
product-relevant: SUBUR is raw comb honey. A reader who has just bought one and then read
`hellosehat` has a real, unanswered question.

**The angle.** Resolve the contradiction by separating the two things being confused: the under-one
infant rule (a real, specific caution) from a general raw-honey-in-pregnancy rule (which the same
sources' own botulism explanation argues against). Then stop, and say the thing none of the
incumbents say: this is a question for the reader's own doctor or clinic, and here is what to bring
to that conversation — the ingredient list. No benefits, no spoons, no trimesters.

**Risk register**

- *Legal ceiling:* **Medium-high, and it inverts the usual risk.** The danger here is not only the
  `11 Manfaat` framing (which is straightforwardly out) but also the opposite move: telling a
  pregnant reader that honey **is** safe is dietary advice about a physiological state, and the
  corpus reaches for dosage instantly (`3–5 tablespoons`, `180–200 calories` — both quoted from the
  fetched sources). Neither direction is ours. The permitted shape is: here is what the confusion is,
  here is what each rule actually refers to, ask your clinic. **No condition may be named as
  something honey affects** — and note that the sources drag in `diabetes gestasional`, which is a
  named condition and is completely out of bounds.
- *Fabrication:* Do not state a pasteurisation status for SUBUR beyond what the site publishes.
  The live `madu berbuih` article already describes the product as raw and unpasteurised
  (`madu mentah tidak dipasteur` is one of its keywords) — that is the ceiling of what may be said,
  and it should be sourced from the existing article rather than freshly asserted.
- *Cannibalisation:* clean against all 16 live Malay focus keywords. No live Malay article touches
  pregnancy or any safety-population topic.
- *Banned terms:* clean.

**Cross-language:** English **already ships this exact article** —
`is-honey-safe-during-pregnancy`, commissioned in round 2 on its own independently-researched demand.
**Strong recommendation to group MS with it for hreflang.** Arabic does not currently have it and is
a candidate for a future round; do not group speculatively.

---

### C5 — `kenapa madu jadi gelap`

- **Slug:** `kenapa-madu-jadi-gelap`
- **Intent:** Post-purchase anxiety. "The jar was golden when I bought it and it's brown now."

**Demand evidence**

- GSC, `madinah.com.my`: no exact row. Same authenticity-doubt cluster as C1 applies as shape
  evidence (`madu al shifa palsu`, 30 impressions, position 1.5; `al shifa honey is pure or not`,
  262 impressions) — colour change is a third trigger for the same check. Stated as inference, not
  as a measured row.
- Live SERP, 2026-08-25: the question has a dedicated Malaysian page —
  `maduquadasli.com` ("Warna Madu Tualang Semakin Gelap? Ini Penjelasan Penuh") — plus Indonesian
  coverage (`mbriofood.com` on organoleptic quality decline, `globalsolusiingredia.com`
  "7 Tanda Madu Kedaluwarsa", `nibble.id`), an academic paper on honey's physical and chemical
  properties in `jurnal.ugm.ac.id`, and a Facebook post on the same theme. **No volume figure
  obtained.**

**What currently ranks, and how deep**

`maduquadasli.com` is a seller's own blog and is the only substantial Malaysian answer. It publishes
the mirror-image myth to C1's: *"jika madu semakin gelap dari minggu ke minggu, ketahuilah bahawa itu
petanda ia adalah madu tulen tanpa sebarang campuran"* — darkening as proof of purity. The
Indonesian sources give the correct mechanism (Maillard browning and caramelisation accelerate with
heat and time; natural oxidation) but frame it inside "signs your honey has expired". So the reader
gets either a purity myth or a spoilage scare, and the two answers point in opposite directions.

**The specific gap.** Nobody says the accurate and boring thing: colour tells you about **floral
source, added ingredients, storage heat and elapsed time** — four things — and it is not a purity
test in either direction. For SUBUR specifically there is a fifth reason no competitor can have:
the jar contains saffron, cinnamon, star anise and ground nuts, and a spiced comb blend is simply
**darker than a single-source honey from day one**. A reader comparing SUBUR's jar to a supermarket
photo of pale golden honey has a question the whole category is failing to answer.

**The angle.** Completes the site's observable-anxiety series — `madu berbuih` (foam),
`madu beku dalam peti sejuk` (hardening), and now colour. Same structural move each time: the
observable is real, the mechanism is ordinary, and it proves nothing about authenticity. This one
adds the blend-specific note, which is genuinely unavailable elsewhere.

**Risk register**

- *Legal ceiling:* **Low.** Colour is physics. The only drift risk is the antioxidant framing the
  Indonesian sources attach to darker honeys — cut entirely.
- *Fabrication:* Do not describe SUBUR's jar colour as a fixed shade or promise consistency between
  jars. Do not claim a shelf life. Describe the *reasons* a spiced comb blend runs darker.
- *Cannibalisation:* Two live neighbours and one candidate in this same file. Against
  `madu beku dalam peti sejuk` — that owns crystallisation and appearance-when-hardened; colour is a
  separate observable but a lazy writer will merge them. Against **C1 (`tarikh luput madu`)** —
  this is the sharper concern: both can slide into "has my honey gone bad". **If both ship, the split
  must be written into both briefs:** C1 = the printed date and shelf life; C5 = what colour does and
  does not indicate. Each links to the other once.
- *Banned terms:* clean.

**Cross-language:** Arabic plausibly shares it and has the closest existing sibling in
`limatha-yatfu-al-shama-fawq-al-asal` (a different observable, same "why does my jar look like this"
family) — a future AR sibling is reasonable, grouping now is not. English plausibly shares it but
the live English round already discarded `why does honey taste different` on a near-identical
"variation ≠ fake" overlap concern; that precedent applies here too and should be checked before any
EN sibling is commissioned.

---

### C6 — `madu saffron`

- **Slug:** `madu-saffron`
- **Intent:** Ingredient literacy / purchase justification. "Why is there saffron in this honey, and
  what is it actually doing?"

**Demand evidence**

- GSC, `madinah.com.my`: no saffron rows. Reported honestly — the sibling has no saffron product.
  The adjacent evidence is that SUBUR itself lists **Saffron as ingredient #3 of 10**, and the
  Arabic side of this site already found enough demand to commission `asal-bil-zafaran`.
- Live SERP, 2026-08-25: Malay-language saffron content exists and is old and scattered —
  `syams-gold.blogspot.com`, `ayiee69.blogspot.com`, `khasiatzaafaran.blogspot.com` (all
  blogspot-era), `guruyaya.com` ("MAMPUKAH Madu Saffron Iran Mempertajamkan Fikiran Manusia"),
  `ecentral.my` ("Kebaikan Saffron Untuk Lelaki & Perempuan"), `mahnazfood.com`
  ("Saffron untuk Kesihatan: Khasiat, Kelebihan & Cara Minum"), and a Facebook page for a saffron
  honey brand. **No volume figure obtained. This is the thinnest demand case of the six I recommend,
  and it is ranked last for that reason.**

**What currently ranks, and how deep**

Thin, dated, and uniformly khasiat-led: memory and brain-cell claims, a prescription of
"two spoonfuls daily", price-per-kilogram figures for raw saffron (RM1,700–RM23,000/kg on
`ecentral.my`). Half the set is a decade-old blogspot. Nothing describes what saffron does **to a jar
of honey** — only what it allegedly does to a person.

**The specific gap.** A reader looking at SUBUR's ingredient list wants to know why an expensive
spice is in a honey jar and whether it is a real inclusion or a label flourish. Nobody has written
the descriptive version: saffron is the stigma of *Crocus sativus*, three threads per flower, which
is why it is priced the way it is; in honey it contributes colour and aroma rather than sweetness;
and a very small quantity is doing the work, so its presence on a label is not the same as a large
inclusion. That last point is the honest, slightly unflattering note that makes it a SUBUR page and
not brand copy.

**The angle.** Ingredient literacy with the "and here is what it isn't" register the site uses well.
Pairs naturally with the live `habbatus-sauda-dan-madu` article, which does the same job for black
seed — that is the proven template.

**Risk register**

- *Legal ceiling:* **Medium.** The entire Malay saffron corpus is memory/mood/energy claims plus a
  daily dosage. All out. Description only: colour, aroma, botany, why it costs what it costs.
  **No dosage sentence of any kind.**
- *Fabrication:* Sharp and specific. **Do not state how much saffron is in SUBUR's blend** — no
  weight, no percentage, no "generous". SUBUR publishes ingredient *names*, not quantities. Do not
  state saffron's country of origin for SUBUR's blend. Do not attach any of the RM/kg figures to
  SUBUR's product.
- *Cannibalisation:* clean against all 16 live Malay focus keywords. Nearest is
  `habbatus-sauda-dan-madu` — same template, different ingredient, no overlap in substance.
- *Banned terms:* moderate exposure. Saffron writing in Malay reaches for `tradisional` and for
  regional descriptors constantly. Flag.

**Cross-language:** Arabic **already ships** `asal-bil-zafaran`. **Recommend grouping MS with it.**
English does not have it and plausibly shares the demand — future round.

---

### C7 — `madu untuk bayi bawah 1 tahun`

- **Slug:** `madu-untuk-bayi-bawah-satu-tahun`
- **Intent:** Safety / prohibition.

**Reserve status and why it is being reconsidered.** Round 1 discarded "honey for infants/toddlers as
a standalone topic" on the reasoning that "the under-1-year rule is a safety caveat, not a page"
(carried into `FACTS-COMMON.md`). **That reason no longer holds as stated**: round 2 commissioned
exactly this article in Arabic — `hal-al-asal-masmuh-lil-atfal-aqal-min-sana` — which is live in
`src/content/articles/ar/`. The site has therefore already decided, in practice, that this is a page.
The remaining question is language coverage, not whether the topic qualifies.

**Demand evidence.** GSC: no rows (sibling has no infant content). SERP, 2026-08-25: unlike most
Malay honey queries, this one **does** have Malaysian coverage — `my.theasianparent.com`
("Madu Untuk Bayi Bawah Satu Tahun Bahaya, Risiko Botulisme"), `doctoroncall.com.my`
("Kebaikan Madu Untuk Bayi"), `majalahpama.my` ("Boleh Bawa Maut") — alongside the usual Indonesian
set (`nutriclub.co.id`, `halodoc.com` ×2). **No volume figure obtained.**

**Why it is #7 and not in the top 6.** Three reasons, in order of weight. (1) It shares its entire
factual spine — infant botulism — with **C4**, and shipping both in one Malay round would produce two
articles making the same core point to two audiences. C4 has the bigger gap. (2) It is the one
candidate here with **genuine Malaysian incumbents**, including a medically-positioned one
(`doctoroncall.com.my`); the gap is real but smaller than C1's or C3's. (3) It is a pure
"do not buy this for this person" page with no purchase path — legitimate, but it earns least.

**Risks if promoted.** Legal ceiling is manageable (a prohibition is not a treatment claim) *but*
`doctoroncall.com.my` runs a `Kebaikan Madu Untuk Bayi` framing and the Indonesian set prescribes
"½ to 1 teaspoon per day" for over-ones — a dosage sentence, straight out. Fabrication risk is low.
Cannibalisation clean. Banned terms clean. **Groups with the live Arabic article** if promoted.

---

### C8 — `alahan madu`

- **Slug:** `alahan-madu`
- **Intent:** Safety / self-exclusion. "Can I be allergic to honey, and who shouldn't take it?"

**Demand evidence.** GSC: none. SERP, 2026-08-25: `cnnindonesia.com` (two separate articles),
`tempo.co`, `halodoc.com` (two), `alodokter.com`, `cnbcindonesia.com`, and one Malaysian result —
`myresipi.com` ("Pantang Larang Minum Madu"). **Effectively 100% Indonesian**, which is a real gap.
**No volume figure obtained.**

**Why it is a reserve and not a pick.** The gap is real but the incumbent framing is the problem, not
the opportunity. Every source answers "who shouldn't take honey" with a **list of medical
conditions** — diabetes, weakened immunity, cancer patients on chemotherapy, transplant recipients,
HIV/AIDS, people on anticoagulants. There is no honest 800–1,000-word Malay version of this page that
does not name conditions, and naming conditions is exactly what the ceiling forbids. The one part
that *is* safely writable — bee pollen in raw honey, and what an allergic reaction looks like — is a
few hundred words at most, and reads as a caveat rather than a page. Same failure mode the round-2
researcher identified for `madu semasa berbuka puasa`.

**If a future round wants it**, it needs a legal read first, the way the English round handled
`honey face mask malaysia`. English already ships `honey-allergy-symptoms`, so a grouped MS sibling
is the natural vehicle — but only after that read.

---

### C9 — `madu dan sudu besi`

- **Slug:** `madu-dan-sudu-besi`
- **Intent:** Myth-check. "Is it true you can't scoop honey with a metal spoon?"

**Demand evidence.** GSC: none. SERP, 2026-08-25: `kompas.com` (two articles),
`rri.co.id/cek-fakta`, `bobo.grid.id`, `sajiansedap.grid.id`, `popmama.com`, `oriyanutricia.com`,
plus an Instagram card. **Every result is Indonesian and uses the Indonesian phrasing
`sendok logam`/`sendok besi`.** I found no Malaysian page and no Malay-Malaysian phrasing in the
result set. **No volume figure obtained.**

**Why it is a reserve.** It is a perfect voice fit — a myth with a clean factual answer (the
contact time is seconds; the real caution is long-term *storage* in metal containers, which is a
genuine and useful note) and **zero legal and zero fabrication risk**, the only candidate here with
both. But I could not find evidence that Malaysians search it in Malay rather than reading the
Indonesian answer, and the honest read of an all-Indonesian result set with Indonesian phrasing is
that the demand may sit across the border. **Better as a section inside a storage or care article
than as its own page** — and note that the storage territory it would live in is already partly
claimed by `madu-beku-dalam-peti-sejuk`.

---

### C10 — `bawa madu naik kapal terbang`

- **Slug:** `bawa-madu-naik-kapal-terbang`
- **Intent:** Practical / logistics. "Can I take a honey jar home as a gift, in the cabin or the
  hold?"

**Demand evidence.** GSC: none. SERP, 2026-08-25: no honey-specific page exists. The results are
generic prohibited-items pages — `malaysiaairlines.com`, `support.airasia.com`,
`encikhotel.com` ("Barang Larangan Naik Flight"), `libur.com.my`, a Lemon8 travel card — from which
a reader must work out that honey counts as a liquid and falls under the 100 ml cabin limit.
**No volume figure obtained.**

**Why it is a reserve.** The gap is real (nobody answers it for honey specifically) and it plugs
into the site's gifting cluster — `doorgift-madu-kahwin` and `hadiah-madu-untuk-raya` are both live
and both create exactly this reader. But two problems. (1) **Demand is unevidenced** — an absent SERP
is as consistent with nobody asking as with nobody answering, and I have nothing to separate those.
(2) **The article would be built entirely on rules we do not control** — airline and security limits
change, and a page that states a millilitre limit is a page that goes wrong silently. That is the
same class of problem as the round-2 finding about publishing figures we cannot maintain. If it is
ever written, it must point at the airline's own page for the number rather than restate it.

---

## 3. Ranked table

Ranking weights, in order: measured GSC demand for the query's cluster > size and quality of the
SERP gap > legal-ceiling survivability once health framing is removed > product relevance to SUBUR >
fabrication and cannibalisation risk.

| # | Focus keyword (MS) | Slug | Intent | Demand evidence strength | Gap | Ceiling risk | Fabrication risk | Cannibalisation | Verdict |
|---|---|---|---|---|---|---|---|---|---|
| 1 | `tarikh luput madu` | `tarikh-luput-madu` | post-purchase / trust | GSC cluster (262 + 30 + 18 imp) + dense Malaysian SERP | **Large** — longest incumbent ~380 words, and it is wrong | **Low** | Medium (shelf-life figure) | Manage vs `madu berbuih` | **PICK** |
| 2 | `madu kelulut vs madu tualang` | `madu-kelulut-vs-madu-tualang` | category / comparison | No GSC rows; broad multi-publisher SERP | **Large** — deepest page answers a beekeeper, not a buyer | **High** | Medium (price, origin) | Manage vs `madu manuka vs...` | **PICK** |
| 3 | `madu khalta` | `madu-khalta` | label literacy | **Strongest GSC** (1,935 + 1,801 + 197 + 155 imp) | **Largest** — zero editorial pages exist | **High** | High (origin, halal) | Tight vs `madu suami isteri` | **PICK** |
| 4 | `madu untuk ibu mengandung` | `madu-untuk-ibu-mengandung` | safety | No GSC rows; large Indonesian-only SERP | **Large** — zero Malaysian pages, incumbents contradict each other | Medium-high | Low-medium | Clean | **PICK** |
| 5 | `kenapa madu jadi gelap` | `kenapa-madu-jadi-gelap` | post-purchase / trust | No GSC rows; one Malaysian page carrying a purity myth | Medium-large | **Low** | Low | Manage vs C1 + `madu beku` | **PICK** |
| 6 | `madu saffron` | `madu-saffron` | ingredient literacy | Weakest of the six; thin dated SERP | Medium | Medium | Medium (quantity, origin) | Clean | **PICK** |
| 7 | `madu untuk bayi bawah 1 tahun` | `madu-untuk-bayi-bawah-satu-tahun` | safety | No GSC rows; **real Malaysian incumbents** | Medium | Medium | Low | Overlaps C4's spine | Reserve |
| 8 | `alahan madu` | `alahan-madu` | safety | No GSC rows; Indonesian-only SERP | Medium | **Fails** — answer requires naming conditions | Low | Clean | Reserve, needs legal read |
| 9 | `madu dan sudu besi` | `madu-dan-sudu-besi` | myth-check | No GSC rows; Indonesian-only, Indonesian phrasing | Medium | **None** | **None** | Partly `madu beku` | Reserve / fold in |
| 10 | `bawa madu naik kapal terbang` | `bawa-madu-naik-kapal-terbang` | logistics | **No demand evidence at all** | Unmeasurable | None | Low | Clean | Reserve |

---

## 4. Recommended top 6

**1 — `tarikh luput madu` → `/ms/blog/tarikh-luput-madu/`**
The only candidate where measured demand, a wrong incumbent, and near-zero legal risk line up at
once. The audience's single most-evidenced honey behaviour in 16 months of GSC data is checking
whether a jar they own is genuine (`al shifa honey is pure or not`, 262 impressions;
`madu al shifa palsu`, 30 impressions at position 1.5). The site already owns two of the three
physical triggers for that check and does not own this one. And the ranking Malaysian answer
(`kuali.com`, ~380 words, fetched 2026-08-25) publishes a myth that punishes exactly the kind of
properly labelled jar SUBUR sells. Highest confidence pick in the file.

**2 — `madu kelulut vs madu tualang` → `/ms/blog/madu-kelulut-vs-madu-tualang/`**
The largest genuinely Malaysian category question the site has never answered, and the one place
where "SUBUR is neither of these" is a useful thing to tell a reader rather than a hedge. The gap is
unusually clean: the deepest incumbent (`rabbbeez.com`, ~1,200 words, fetched 2026-08-25) compares
*bees*, not honeys, and everyone else answers with a health league table we cannot and should not
write. Commissioned only with a hard fence — no antioxidant, no absorption rate, no named condition,
and heavy watch on `tradisional`/`turun-temurun`, which this subject attracts.

**3 — `madu khalta` → `/ms/blog/madu-khalta/`**
Backed by the biggest demand cluster in the entire GSC table (`yemeni honey` 1,935 impressions,
`yemeni sidr honey` 1,801, `kedai madu arab near me` 197 at position 3.8, `madu madinah` 155 at
position 2.2) against a SERP with **no editorial page whatsoever** — only marketplace listings and
brand copy. It is also the highest-risk pick here and I am not softening that: the category's own
listing text uses `Timur Tengah`, sells on hormones and energy, and shouts halal certification SUBUR
does not have. It ships only with an explicit three-line fence in the brief — no origin, no
certification, no effect claims — and a hard boundary against `madu-suami-isteri`. If that fence
cannot be written, drop it to reserve rather than dilute it.

**4 — `madu untuk ibu mengandung` → `/ms/blog/madu-untuk-ibu-mengandung/`**
Zero Malaysian pages against an actively published Indonesian corpus that **contradicts itself** on
the one point that matters for a raw comb product. Resolving that contradiction — separating the
infant rule from a general raw-honey rule — is a real service and is writable without a single
health claim, provided the article ends at "ask your clinic" instead of at "so it's safe". Groups
with the live English `is-honey-safe-during-pregnancy` for hreflang.

**5 — `kenapa madu jadi gelap` → `/ms/blog/kenapa-madu-jadi-gelap/`**
Completes the site's observable-anxiety series (foam → hardening → colour) with the lowest legal risk
of any candidate that also has a real gap. It carries a note nobody else can write: a spiced comb
blend with saffron and cinnamon is darker than a single-source honey from day one, so a reader
comparing SUBUR to a supermarket photo is not looking at a defect. Ships with an explicit written
split against pick #1.

**6 — `madu saffron` → `/ms/blog/madu-saffron/`**
The weakest demand case of the six and I rank it last for exactly that reason — but it is the only
pick that explains an ingredient the reader is paying for and cannot evaluate, it reuses the proven
`habbatus-sauda-dan-madu` template, and it groups with the live Arabic `asal-bil-zafaran`. Its
discipline is entirely negative: no dosage, no memory claims, and above all **no quantity** — SUBUR
publishes ingredient names, not amounts.

**Grouping recommendations for the map (each needs a confirming check, not an assumption):**

| Pick | Group with | Confidence |
|---|---|---|
| `tarikh-luput-madu` | AR `hal-lil-asal-tarikh-salahiya` | High — same question |
| `madu-untuk-ibu-mengandung` | EN `is-honey-safe-during-pregnancy` | High — same question |
| `madu-saffron` | AR `asal-bil-zafaran` | High — same ingredient |
| `madu-khalta` | AR `mukawwinat-khaltat-al-asal-bil-aashab` | **Check first** — may already cover it |
| `madu-kelulut-vs-madu-tualang` | EN `types-of-honey-in-malaysia` | **Check first** — may overlap |
| `kenapa-madu-jadi-gelap` | none | Standalone this round |

---

## 5. Discarded and reserve

| Candidate | Status | Reason |
|---|---|---|
| `madu untuk bayi bawah 1 tahun` | **Reserve, promoted from round-1 discard** | Round 1's reason ("a safety caveat, not a page") **no longer applies** — round 2 shipped it in Arabic and it is live. Held back this round only because it shares its factual spine with pick #4 and has real Malaysian incumbents. First in line if a pick is dropped. |
| `alahan madu` | Reserve, needs legal read | The honest answer requires naming conditions (diabetes, immunosuppression, anticoagulants). No safe 800–1,000-word version found. Treat like `honey face mask malaysia` — legal read before commissioning. |
| `madu dan sudu besi` | Reserve / fold in | Zero legal and zero fabrication risk, perfect voice fit, but the entire result set is Indonesian in Indonesian phrasing. No evidence Malaysians search it in Malay. Better as a paragraph than a page. |
| `bawa madu naik kapal terbang` | Reserve | No demand evidence of any kind, and the page would be built on airline rules we do not control and cannot keep current. |
| `cara simpan madu` (generic storage) | **Discarded** | `simpan madu suhu bilik` is already a live keyword on `madu-beku-dalam-peti-sejuk`. Direct cannibalisation. The salvageable part (humidity) is already covered by `madu berbuih`'s fermentation section. |
| `madu berempah` | **Discarded** | Two independent failures: the term is already a live keyword on `beza-madu-tulen-dan-madu-campuran`, and the SERP is contaminated by cooking intent (`Ayam Madu Berempah` recipes) which `madu-untuk-masakan` already owns. `madu khalta` is the correct vehicle for this ground. |
| `madu tempatan vs madu import` | **Discarded** | Overlaps `madu manuka vs madu tempatan malaysia` (live) on the local-vs-imported-premium axis, and is essentially the live English `is-malaysian-honey-local-or-imported` in Malay — which the brief forbids. |
| `harga madu asli Malaysia` | **Disqualified** | Transactional intent that cannot be satisfied: **SUBUR publishes no price.** The article would either invent one or dead-end. Same failure as the round-2 corporate-gift candidates. |
| `khasiat madu` / `madu untuk kencing manis` / `madu untuk sakit tekak` | **Disqualified** | Cannot be satisfied without a prevent/treat/cure claim about a named condition. These are the highest-traffic Malay honey queries that exist and they are permanently out of reach. Naming them here so a future round does not rediscover them as "opportunities". |
| `gula melaka vs madu` | **Remains reserved** | Round 2's reasons re-checked 2026-08-25 and both still hold: the strong incumbent has not weakened, and the glycaemic-index framing that made it the highest-legal-risk MS candidate is unchanged. No new evidence to overturn. |
| `madu semasa berbuka puasa` | **Remains reserved** | Re-checked 2026-08-25. Every result is still `manfaat`-framed or dosage-prescribing (`dua sendok saat sahur`, `tidak lebih dari 1 sendok makan per hari`) or adab-of-drinking content. Round 2's finding — no safe 800–1,000-word version exists — is confirmed, not overturned. |
| `madu untuk hadiah korporat` | **Remains disqualified** | No published bulk/corporate pathway. Unchanged from round 2. |
