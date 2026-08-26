# PRESS Round 4 — Arabic demand research

**Audience:** Arabic speakers **living inside Malaysia** — Klang Valley residents, students, expatriate
families. Not Gulf shoppers.
**Researched:** 2026-08-26. Every SERP URL below carries that pull date.
**Scope:** Stage 1 research only. No article was written and no repo file was touched except this one.

---

## 0. Read this before the candidates — three findings that shape the whole file

### 0.1 Search Console gives Arabic almost nothing this round, and what it gives is off limits

`docs/press/round-4/gsc-demand.md` carries 222 honey-related queries from `madinah.com.my`. **Exactly
two of them are written in Arabic script:**

| query | clicks | impressions | avg position |
|---|---|---|---|
| `هل عسل الشفاء طبيعي` | 1 | 23 | 2.6 |
| `عسل الشفاء هل هو طبيعي` | 1 | 17 | 2.4 |

Both belong to the **Al Shifa brand-verification cluster**, which round 3 closed and which stays
closed — the live `kayfa-tamiz-al-asal-al-asli` already owns that intent, and naming a competitor in
a headline buys nothing. So the single measured Arabic demand signal available to this round is a
topic the round may not write.

The rest of the Arabic-audience signal in that file is **transliterated or English**, and it confirms
the *audience* rather than any topic: `kedai madu arab near me` (5 clicks / 197 impressions / pos
3.8), `arabic honey` (1 / 37 / 14.2), `arab honey` (0 / 27 / 14.2). Those are people in Malaysia
looking for an Arab grocery — which is the live `ayna-ashtari-asal-fi-kuala-lumpur`'s job, already
done.

**Consequence, stated plainly:** every candidate below is evidenced by **live Arabic SERP composition
plus the live corpus gap**, not by a Search Console row. Where a candidate has no GSC row I say so
rather than borrowing an adjacent one. No search-volume figure appears anywhere in this file; no
keyword tool exists on this machine and none was invented.

### 0.2 The reserve whose reason changed — bulk / quantity orders — still fails, on new grounds

The brief is right that round 3's Arabic gift article originally denied any bulk pathway and that
this was a fabrication. But the correction was **already applied during round 3**. The live
`hadiya-min-malizia-lil-ahl.ts` (line 180) ships this FAQ:

> **q:** `هل هناك طلبات بالجملة لعدة بيوت؟`
> **a:** `نعم، للكميات مسار معلن: نموذج استفسار الجملة في الصفحة الرئيسية، أو سؤال المتجر مباشرة. لكن لا سعر جملة منشوراً ولا حدّ أدنى للكمية ولا مدة تجهيز معلنة؛ هذه تُطلب في الاستفسار نفسه.`

That is the complete honest answer, it links the form, and it is already published in Arabic. The
question a round-4 article would have to answer is therefore already answered — and everything else
an article could add (price, MOQ, lead time, terms) is exactly what does not exist.

The demand side fails independently. See candidate **AR-C8** for the SERP evidence: the Arabic
`عسل + ماليزيا + جملة` query space is occupied by honeymoon travel packages (`شهر عسل`), Gulf honey
wholesalers with no Malaysian presence, and the Royal Honey / Vital Honey / Etumax sachet category —
which is the sexual-enhancement cluster this site is legally barred from serving.

**Verdict: reason updated, candidate still discarded.** Documented in full rather than dropped
quietly, so round 5 does not re-open it a third time.

### 0.3 Open item carried forward — D26 is still live in the Arabic surface

`src/content/llms/ar.txt` line 113 still publishes `والأحجام الثلاثة نفسها متاحة: 250 و400 و500 غرام`.
`src/config/site.ts` publishes no jar size at all. This is the same unresolved contradiction
`FACTS-COMMON.md` logged for round 3 — it is an owner decision, not a writer's, and it is flagged
here only because it sits in the Arabic file specifically. **Round 4 must continue to neither repeat
nor contradict it.** No candidate below touches jar size.

---

## 1. Cannibalisation baseline — what I checked against

**All 22 live Arabic focus keywords** (the off-limits list in the brief), **plus every live Arabic
`keywords` array**, extracted with:

```
for f in src/content/articles/ar/*.ts; do sed -n '/^  keywords: \[/,/^  \],/p' "$f" | grep -o '"[^"]*"'; done
```

That secondary sweep killed three candidates before they reached the shortlist and forced a keyword
rewrite on a fourth. The specific registered secondaries that did the damage:

| Registered secondary | On | Kills |
|---|---|---|
| `عسل كيلولوت` | `al-asal-al-malizi` | the round-3 kelulut reserve, outright |
| `عسل صافٍ أم خلطة` | `asal-bil-zafaran` **and** `mukawwinat-khaltat-al-asal-bil-aashab` | a "is a blend legally honey" label piece — registered twice |
| `حساسية المكسرات` / `حساسية اللوز والجوز` | `hal-al-asal-masmuh-lil-atfal…` + `mukawwinat…` | any nut-allergy angle |
| `تخمّر العسل` / `تخمر العسل رغوة` | `hal-lil-asal-tarikh-salahiya` + `hifz-al-asal…` | a "does fresh ginger ferment in honey" piece |
| `العسل أم السكر لتحلية المشروبات` | `al-ma-al-sakhin-wal-asal` | forced AR-C3's focus keyword to carry an explicit baking qualifier |
| `جمارك المنتجات النحلية` | `naql-al-asal-fi-al-taira` | the top risk on AR-C4 — see its risk register |
| `العسل مع الأدوية` | `hal-al-asal-masmuh-lil-atfal…` | any interaction angle |
| `العسل في السوق الحرة بالمطار` | `naql-al-asal-fi-al-taira` | duty-free angles |
| `شعار الحلال على العلبة` | `qiraat-mulsaq-al-asal-fi-malizia` | halal-logo angles (already disqualified anyway) |
| `عسل بأظرف أم مرطبان` | `al-asal-al-malizi` | a "Malaysian honey sachets vs jars" piece — and the sachet category is the disqualified cluster |

**Body-copy sweep too**, because a registered keyword is not the only way to collide:

- **Ants are fully owned.** `hifz-al-asal-fi-al-jaw-al-ratb` carries a dedicated H2 —
  `كيف أُبعد النمل عن مرطبان العسل؟` — plus a list item, an FAQ and a line explaining that ants, not
  heat, are why Malaysians reach for the fridge. Six occurrences of `نمل` in one article. A dedicated
  ant article would restate it.
- **Morning-spoon timing is published twice.** Both `asal-al-zawjayn` and `habbat-al-barakah-wal-asal`
  ship a `steps` block reading `ملعقة صغيرة صباحاً على معدة فارغة` → `انتظر نحو خمس عشرة دقيقة` →
  `يومياً لا متفرقاً`. That closes the round-2 `عسل بالمكسرات فطور` reserve on evidence rather than on
  caution.
- **`عضوي` appears zero times across all 22 Arabic articles.** That is the one uncontested word left
  on the label, and it is candidate AR-C2.

---

## 2. Candidates

Ten candidates, ranked. Four are recommended. Six are not, and each says why.

---

### AR-C1 — `هل العسل آمن للحامل` ✅ RECOMMEND (rank 1)

- **Slug:** `hal-al-asal-amin-lil-hamil`
- **Intent:** informational / safety. A pre-purchase or mid-pregnancy anxiety check, not a benefits hunt.
- **Proposed group:** joins **G10** as its third language — live `en/is-honey-safe-during-pregnancy`
  + live `ms/madu-untuk-ibu-mengandung`. Both sides already exist and settle the same question; the
  Arabic reader has been left out of a group the site already runs.

**Demand evidence**

- **GSC: no row.** Stated plainly. The nearest rows in the 222 are `benefits of honey for women`
  (0 clicks / 2 impressions / pos 3.0) and `black seed and honey benefits for female` (0 / 1 / 3.0) —
  both benefits-shaped, neither a safety query, and neither offered as evidence for this candidate.
- **Live Arabic SERP, pulled 2026-08-26** for `هل العسل مسموح للحامل ماليزيا` — seven results, and the
  composition is the whole argument:
  - `https://rashof.com/blogs/العسل-للحامل` — seller blog, "كنز طبيعي"
  - `https://bashasaray.com/honey-for-pregnant-women/` — seller blog
  - `https://ivfegypt.org/فوائد-العسل-للحامل-وتأثيره-على-الجنين/` — **an IVF clinic**, benefits framing
  - `https://jovnaoil.com/pages/العسل-للحامل-في-الشهور-الاولى` — oil seller
  - `https://aslmossa.com/ar/blog/فوائد-العسل-للحامل/` — honey seller
  - `https://salammedical.com/articles/العسل-للحامل/` — medical portal
  - `https://www.elconsolto.com/parenting/pregnancy/details/2023/2/7/2367425/…` — `هل العسل يجهض الحمل؟`
- **What they actually say** (paraphrased from the same pull): "يقوي مناعة الحامل… لغناه بفيتامين أ",
  "دفعة سريعة ومستدامة للطاقة", and on the other side an abortifacient scare framing
  (`هل العسل يجهض الحمل`).

**What ranks, and the gap for an Arabic speaker in Malaysia**

Every ranking page is either selling something or promising something. **Not one gives the plain
answer a worried reader wants**, which is: honey is not the infant rule; the infant rule is
under-twelve-months; you are not an infant. The Arabic corpus never separates those two facts, so a
reader who half-remembers "لا عسل للرضّع" carries it into pregnancy and has nowhere to check.

The Malaysia-resident layer the Gulf corpus cannot supply: the reader is likely under a Malaysian
antenatal clinic, may not read Malay well enough to ask confidently, and is holding a **spiced
comb-and-nut blend** rather than a plain honey — which raises a second, separable question (ground
walnut and almond are declared tree nuts) that the Gulf pages never encounter.

**Angle vs the 22 live Arabic articles**

`hal-al-asal-masmuh-lil-atfal-aqal-min-sana` answers the **infant** question and registers
`متى يبدأ الطفل بالعسل`, `العسل بعد عمر سنة`, `تحذير العسل للرضع`. It never mentions pregnancy —
`حامل`/`الحمل` appears in the Arabic corpus only inside `asal-al-zawjayn`'s legal-ceiling warning
(fertility promises are illegal) and once in `hadiya-min-malizia-lil-ahl`. **The pregnancy question
is genuinely unanswered in Arabic on this site.** This article's whole service is separating the
infant rule from the adult question and refusing to invert either.

**Risk register**

| Risk | Handling |
|---|---|
| **Ceiling — the corpus converts safety into benefit within one paragraph.** Every ranking page does it. | The article answers a **safety** question and never promotes consumption. No immunity, no energy, no vitamin claim, not even attributed. Attribution does not launder a health claim on a food seller's domain. |
| **Inversion of the infant rule** — round 2 caught exactly this in a Malay draft. | The under-12-months warning is stated as a warning and never rewritten as "so it's safe for everyone else". |
| **Gestational diabetes.** | Report only that public-health advice exists and says talk to your own clinician. Never a glycaemic number, never a dosage. |
| **Ending.** | Ends at "ask your clinic", never at "so it's safe" — the exact fence round 3 put on `ms4`. |
| Named-source discipline | Cite recognised public-health bodies generically, as `FACTS-COMMON.md` requires. No invented Malaysian statistic. |
| Nut sub-question | May state that walnut and almond are ground in and are declared tree nuts — that is a fact about the published ingredient list. May not give allergy advice; link `hal-al-asal-masmuh-lil-atfal-aqal-min-sana`. |

**Shared demand?** **Yes, and already served** — EN and MS both ship it. Arabic is the missing third,
which is why this is a group join rather than a new cluster.

---

### AR-C2 — `العسل العضوي` ✅ RECOMMEND (rank 2)

- **Slug:** `al-asal-al-udwi-fi-malizia`
- **Intent:** label literacy / pre-purchase. "This jar says عضوي and costs more — does that word mean anything?"
- **Group:** none. Ships single-language. No EN or MS equivalent exists and none is proposed.

**Demand evidence**

- **GSC: no row.** No organic query appears anywhere in the 222.
- **Live Arabic SERP, pulled 2026-08-26** for `معنى عسل عضوي هل يوجد عسل عضوي حقاً شهادة` — nine
  results, **nine Gulf honey sellers, zero Malaysian pages, zero regulators**:
  - `https://alnahalaljwal.com.sa/blog/العسل-العضوي/a-323593482`
  - `https://balqees.com/ar/blogs/stories/is-raw-honey-the-same-as-organic-honey` — the raw/organic confusion, named
  - `https://www.thoubhoney.com/ar/blogs/thoub-blog/العسل-العضوي`
  - `https://nasimalasal.com/blog/Organic-honey/a-1133613379`
  - `https://honey-elite.com/ar/blog/ما-هو-العسل-العضوي/a-1190965296`
  - `https://binhazmi.com/الفرق-بين-العسل-الطبيعي-و-غير-الطبيعي-و-الصناعي/page-57076357`
  - `https://wadideem.com/العسل-العضوي/`
  - `https://jawavah.com/ar/blog/العسل-العضوي-أفضل-انواعه-وفوائده/a-589872403`
  - `https://trybioly.com/pages/organic/41193`
- **What they say:** organic honey exists, is rare, mostly comes from Brazil, and is certified "خاصة
  الصادرة من بلدان الاتحاد الأوروبي". Then every one of them pivots to buy-from-a-certified-supplier.
  None names a scheme, a standard number, or a scope.

**External facts, verified 2026-08-26 — this is what makes the article possible**

| Fact | Source, fetched 2026-08-26 |
|---|---|
| **EU organic beekeeping requires the apiary to be sited so that, within a 3 km radius, nectar and pollen sources are essentially organic or spontaneous vegetation.** A real, substantive, checkable requirement. | `https://honestbeeltd.com/faqs/what-are-the-environmental-and-management-requirements-for-honey-to-be-classified-as-organic` · corroborated by `https://www.foxhoundbeecompany.com/blogs/honey/the-truth-about-organic-honey` |
| **The USDA National Organic Program has no apiculture-specific standards.** US "organic" honey is certified against generic livestock rules that never address forage radius, foundation wax, queen sourcing or supplementary feed. An NOSB recommendation exists and was never finalised. | `https://www.organicproducenetwork.com/regulatory/usda-national-organic-program-continues-to-lack-apiculture-specific-standards` · NOSB recommendation PDF: `https://www.ams.usda.gov/sites/default/files/media/NOP%20Livestock%20Final%20Rec%20Apiculture.pdf` |
| **Malaysia's national scheme is myOrganic**, run by the Department of Agriculture under the Ministry of Agriculture and Food Security, introduced 2003 as SOM and rebranded myOrganic in 2015. Its **published scope names three subsectors: crops (tanaman), livestock (ternakan), aquaculture (akuakultur)**. **The scheme page names no honey, bee or beekeeping commodity.** | `https://www.kpkm.gov.my/en/incentive-and-grant/malaysian-organic-certification-scheme-myorganic` — **fetched and read 2026-08-26** |
| Malaysian organic certification rests on **MS 1529**, the Malaysian Standard for *plant-based* organically produced foods (aquaculture uses MS 2463:2012). | Same page; corroborated `http://www.agricmelaka.gov.my/index.php?option=com_content&view=article&id=69` |

**The gap, and why it is the best unclaimed article left in Arabic**

A word on the jar means three different things in three places, and **nobody has told an Arabic
reader in Malaysia which one applies to the jar in their hand**. In the EU it means a 3 km forage
rule. In the US it means the certifier had no honey-specific rule to apply. In Malaysia the national
scheme's published scope does not name honey at all. Meanwhile bees fly kilometres and nobody fences
a forage range — which is *why* the EU wrote a radius and the USDA never finished the job.

That is a genuinely useful, entirely descriptive, zero-health-claim answer, and it is checkable line
by line against government pages.

**Angle vs the 22 live Arabic articles**

`al-farq-bayn-al-asal-al-kham-wal-musaffa` (ar3) established that **`خام` is not a regulated word**
and registers `معنى كلمة خام على الملصق`. This article is its mirror and its correction: **`عضوي`
*is* a regulated word — in some jurisdictions, against standards that differ, under a Malaysian
scheme whose published scope does not name honey.** Same shelf, opposite finding. `عضوي` appears
zero times in the entire Arabic corpus, so there is nothing to restate.

**Risk register**

| Risk | Handling |
|---|---|
| **Absence-of-evidence overreach.** The myOrganic page not naming honey is not proof the scheme excludes it. | Write exactly what was read: "the scheme's published scope names crops, livestock and aquaculture; it does not name honey or beekeeping." Never "honey cannot be certified organic in Malaysia." Tell the reader to ask the certifier for the certificate and its scope. |
| **Statute numbers.** `FACTS-COMMON.md` bans them; only Regulation 130 was excepted, and only for the fake-honey family. | Name **MS 1529** and **myOrganic** as scheme identifiers, which is what a shopper checks a logo against — but no Malaysian sub-regulation, no Act, no penalty. The EU 3 km figure is given as the substance of a foreign standard with **no article or regulation number attached**. If the reviewer reads MS 1529 as a statute number, drop the number and keep "the Malaysian Standard for plant-based organic food". |
| **Implying SUBUR is or could be organic.** | Absolute. SUBUR publishes **no certification of any kind**, organic included, and the article says so plainly in its own voice. That refusal is the article's credibility, not a hedge. |
| **Health drift** — the corpus equates organic with "أنقى وأصح". | No purity, residue, pesticide-safety or nutrition claim in either direction. The article is about what a word certifies, not about what honey does. |
| **Banned terms.** | Low exposure, but the organic corpus reaches for heritage framing. Watch `تقليدي` / `عبر الأجيال` and the underlying claim, not just the string. |
| Country drift | Malaysia-first. EU and US appear only to show that the word's meaning is jurisdictional. |

**Shared demand?** **Weakly.** An English `is organic honey a real thing malaysia` is plausible and
the myOrganic evidence is language-neutral, so the EN researcher may independently reach it. Malay is
the strongest untested case — `madu organik` and the myOrganic logo are a Malaysian-shopper question
and a Malay writer would have the DOA sources in their own language. **Flag to the EN and MS
researchers; do not group unless they arrive at it independently**, per round 3's group bar.

---

### AR-C3 — `استبدال السكر بالعسل في الخبز` ✅ RECOMMEND (rank 3)

- **Slug:** `istibdal-al-sukkar-bil-asal`
- **Intent:** how-to / kitchen. Someone with a recipe open and a jar in hand.
- **Proposed group:** with live `en/baking-with-honey-malaysia`. Same question, same verified
  arithmetic, and both sides face a cups-and-Fahrenheit incumbent corpus.
- **Status:** this is the **round-2 Arabic reserve `استبدال السكر بالعسل`**, whose blocker was
  glycaemic framing. **The blocker has changed.**

**Why the reason no longer holds**

Two things happened in round 3. `FACTS-VERIFIED.md` acquired a fully worked, externally checked
conversion — 1 US cup honey = 340 g, 1 cup sugar = 200 g, ¾ cup honey = 255 g, **≈128 g honey per
100 g of sugar**, 25 °F ≈ 14 °C — written out with the division shown, precisely because the English
draft got it wrong without it. And `en/baking-with-honey-malaysia` shipped, proving the
glycaemic-free version of this article exists and passes review. The reserve's blocker was that no
safe version had been found. One now has, in a sibling language, and its numbers are verified.

**Demand evidence**

- **GSC: no row.** No baking or sugar-substitution query appears in the 222.
- **Live Arabic SERP, pulled 2026-08-26** for `استبدال السكر بالعسل في الكيك كم ملعقة عسل بدل كوب سكر`
  — six results:
  - `https://spice.alibaba.com/ar/spice-basics/honey-in-cake`
  - `https://www.supermama.me/posts/بديل-السكر-في-الكيك`
  - `https://kitchen.sayidaty.net/node/21534/بدائل-السكر-في-الكيك/نصائح-الشيف`
  - `https://erzem-troia.com/zhk-k82573zr9/كيك-بالعسل-بدل-السكر.html`
  - `https://fannaltahy.com/h/ما-هو-بديل-السكر-في-الكيك`
  - `https://www.atyabtabkha.com/article/بديل-السكر-في-الكيك-1922925`

**What ranks — and the three concrete errors that are the article**

1. **The corpus contradicts itself on the ratio.** From the same pull: one set of sources says
   `استبدلي ¾ كوب عسل بدل كل كوب سكر`; `erzem-troia.com` says
   `استبدلي كل كوب سكر بنصف كوبٍ من العسل`. **¾ and ½ are not a rounding difference.** A reader
   following the second halves the sweetening and gets a flat bake.
2. **The water figure is wrong.** The corpus states honey is `نحو 20% من الماء`. `FACTS-VERIFIED.md`
   establishes **about 17%** — and that number is load-bearing, because it is the reason honey is
   not sweeter than sugar by weight.
3. **Everything is in cups, and nobody converts.** An Arabic home kitchen in Kuala Lumpur weighs in
   grams and bakes in Celsius. Not one ranking page gives a gram figure or a Celsius adjustment.

**The gap for an Arabic speaker in Malaysia**

The volume ratio is 0.81 and the mass ratio is 1.28 — they point in **opposite directions**, and
carrying one across unchanged is exactly the trap `FACTS-VERIFIED.md` was written to prevent. An
Arabic-language article that says **≈128 g of honey per 100 g of sugar, with the cup masses and the
division printed**, and **180 °C → about 165 °C**, is the only one in its SERP that a reader with a
kitchen scale can actually use. That is a real service and it is unglamorous enough to be credible.

**Angle vs the 22 live Arabic articles**

`al-ma-al-sakhin-wal-asal` answers whether hot water spoils honey and registers
`العسل أم السكر لتحلية المشروبات`. That is **sweetening a drink**. This is a **baking ratio** — a
different physical problem with a different answer. The boundary is kept two ways: the focus keyword
carries the baking qualifier (`في الخبز`), and the article **links out** to `al-ma-al-sakhin-wal-asal`
for the drinks case rather than re-answering it. It also does not re-litigate what heat does to
honey — that page owns it.

**Risk register**

| Risk | Handling |
|---|---|
| **Cannibalisation with the registered `العسل أم السكر لتحلية المشروبات`.** The single largest risk on this candidate. | Focus keyword must keep an explicit baking qualifier. No section on sweetening tea, coffee or warm drinks — one sentence and a link. If the outline drifts into drinks, drop the candidate. |
| **Ceiling — glycaemic framing.** This was the original blocker and the SERP still leans "بدائل صحية". | No GI number, no "أصح من السكر", no diabetes mention in any direction. A GI figure quoted without commentary still reads as a health verdict by association — round 2 made exactly this call on the EN gula melaka piece. |
| **Carrying a cup ratio into grams unchanged.** | Forbidden. `FACTS-VERIFIED.md`: a ratio taken from a source in cups may never be published in grams without the cup masses and the division written out. Quote from that file, never from this one. |
| **Contradicting the source corpus without showing the work.** | The ½-vs-¾ disagreement is reported honestly as a disagreement, with the mass arithmetic given so the reader can see which survives. Do not silently pick one. |
| **Product tie-in.** SUBUR is a spiced comb-and-nut blend, not a baking honey. | Same refusal `en3` made about tea: the article should rule SUBUR **out** of the mixing bowl and close positively on drizzling over the finished bake. The refusal is the credibility. |
| Banned terms | Recipe writing pulls hard toward `تقليدي` and `عبر الأجيال`. Watch both. |

**Shared demand?** **Yes for English — already shipped.** Malay is plausible (`gantikan gula dengan
madu`) and untested here; the round-3 map notes the substitution framing clears a bar the `gula
melaka` comparison framing did not. Flag to the MS researcher.

---

### AR-C4 — `إدخال العسل إلى ماليزيا` ⚠️ RECOMMEND — CONDITIONAL (rank 4)

- **Slug:** `idkhal-al-asal-ila-malizia`
- **Intent:** logistics / regulatory. A student or family arriving from home with honey in the case,
  or expecting a parcel of it from their mother.
- **Group:** none.

**Why this is the mirror of a live article rather than a duplicate of it**

`naql-al-asal-fi-al-taira` (ar2, round 3) is comprehensively **outbound from Malaysia**, and it
**explicitly declines** the inbound direction. Line 76 of that file draws the boundary itself:

> `["الدخول عند الوصول", "جمارك بلد الوجهة وحدها، لا ماليزيا", "قواعد استيراد الأغذية، والإفصاح في بطاقة الوصول"]`

and its FAQ `هل يُسمح بإدخال العسل إلى بلدي عند الوصول؟` answers
`هذا سؤال لا يستطيع هذا الموقع الإجابة عنه`. That refusal was correct for a destination this site
cannot know. **Malaysia is the one destination it can.**

**Demand evidence**

- **GSC: no row.** The audience is evidenced instead: `kedai madu arab near me` — 5 clicks / 197
  impressions / **pos 3.8** — is a person already in Malaysia looking for Arab-grocery honey.
- **Live Arabic SERP, pulled 2026-08-26** for
  `هل يمكن إدخال العسل إلى ماليزيا في الحقيبة ممنوعات دخول ماليزيا طعام` — the ranking set is Arab
  travel agencies and airline help pages, not one of which mentions Malaysian food-import control:
  - `https://sirbtrips.com/سياحة-سفر/497/ماذا-يتطلب-السفر-لى-ماليزيا-وشروط-الدخول-ليها-دليل-المسافر-العربي-2025`
  - `https://sirbtrips.com/سياحة-سفر/423/متطلبات-السفر-إلى-ماليزيا-شروط-دخول-ماليزيا`
  - `https://hojuzaty.net/الممنوع-في-مطارات-ماليزيا/` — "دليلك الشامل … لعام 2025"
  - `https://applyformalaysia.com/travel-to-malaysia/`
  - `https://fantastic-tours.net/posts/Malaysia-entry-requirements-for-Saudis`
  - `https://www.etihad.com/en-us/help/baggage-information/prohibited-items` · `https://help.flyadeal.com/hc/en-us/articles/360022607814-What-am-I-allowed-to-carry-in-my-cabin-baggage`
- **They are wrong in a specific, correctable way.** From that pull, the ranking guidance conflates
  the **cabin-liquids rule** with the **import rule** — e.g. `السوائل والمواد الهلامية أكثر من 100 ملغ
  في حقيبة اليد` presented as though it governed what may enter Malaysia. It does not. A 100 ml cabin
  limit and a quarantine import control are different regimes administered by different bodies, and
  no Arabic page distinguishes them.

**External facts, verified 2026-08-26**

| Fact | Source |
|---|---|
| Malaysia's food and agricultural import control at the border is **MAQIS** — Malaysian Quarantine and Inspection Services, the agency that inspects and permits imported food and animal products. | `https://www.maqis.gov.my/` · FAQ `http://www.maqis.gov.my/en_US/soalan-lazim` |
| **Importing animal-based products without a valid permit is an offence** under Malaysia's quarantine and inspection law. Bee products are animal-based. | `https://dnelogistics.com.my/import-permit-malaysia-miti-sirim-maqis.html` |
| **Commercial honey imports require a Certificate of Health and a Certificate of Analysis** (veterinary drug residue, chloramphenicol) from the exporting country's competent authority, per consignment. | `https://export.business.gov.au/laws-and-regulations/export-rules-finder/product-requirements/0403/mys/product-documents/rg_i_maqis` |
| A missing import permit really does stop food at the Malaysian border — a Penang seizure of imported product for exactly that reason was reported by Malay Mail, 30 Sep 2024. | `https://www.malaymail.com/news/malaysia/2024/09/30/penang-quarantine-and-inspection-dept-rm355874-worth-of-ice-cream-from-taiwan-returned-due-to-missing-import-permit/152087` (Malay Mail returns 403 to automated fetch — surfaced via search result, **not fetched**; treat as unverified until a syndication is read) |
| **Not established:** the personal-baggage position. No source found states an allowance, a threshold, or an exemption for honey carried by an arriving traveller. | — |

**The article's honest shape**

The same shape `naql-al-asal-fi-al-taira` already proved works: **name who decides which stage**, give
what is documented, and refuse what is not. Here: MAQIS governs what enters, Customs governs
declaration, the airline governs how it travelled. The commercial rule is documented and shows the
category is controlled rather than free. **The personal-baggage position is not published in a form
this site can quote, so the article says so and tells the reader to ask MAQIS before they pack** —
rather than doing what all seven ranking pages do, which is guess. The commercial close writes
itself and needs no claim: if a parcel from home cannot be relied on, the jar is sold here.

**Risk register**

| Risk | Handling |
|---|---|
| **`جمارك المنتجات النحلية` is a registered secondary on `naql-al-asal-fi-al-taira`.** This is the candidate's top risk and the reason it is conditional. | The direction is opposite and the live article explicitly declines the inbound question — but the concept collides. **Condition: the writer must add an internal link both ways and must not restate the outbound article's three-authorities table, its packing steps, or its cabin-liquids explanation.** If the outline reproduces any of them, drop the candidate. |
| **Statute numbers are banned** and the tempting citation here is a section of an Act. | Name **MAQIS** as an agency and describe what it does. **No Act name, no year, no section number, no penalty figure**, notwithstanding that the search result supplies them. Round 1 cited a sub-regulation wrongly and round 3 invented nothing only because it wrote the rule out. |
| **Inventing a personal allowance.** The single fabrication risk. | Absolutely not. There is no verified figure. The article states that the personal position is not published and names who to ask. Same discipline `ar2` used for airline and destination rules. |
| **Telling the reader what the law permits *them* to do.** | Forbidden by `FACTS-VERIFIED.md`. Report what the agency controls; never advise on compliance. |
| **Malay Mail 403.** | The Penang seizure is illustrative only. Either confirm it via a syndication before use, as round 3 did for the fake-honey story, or leave it out. It is not load-bearing. |
| **Scope creep into "so buy ours".** | The commercial close is one CTA, not a thesis, and it makes no claim about anyone else's honey. |

**Shared demand?** **No.** This is the most audience-specific candidate in the file — arriving with
food from home is an expatriate and student problem, not a Malay-speaking-citizen one, and the
English-speaking expatriate cohort is a different set of origin countries. Single-language by
design.

---

### AR-C5 — `هل العسل الغامق أفضل من الفاتح` ⛔ RESERVE (rank 5)

- **Slug (if ever taken):** `hal-al-asal-al-ghamiq-afdal`
- **Would join:** G8 — live `en/why-is-honey-dark-or-light` + `ms/kenapa-madu-jadi-gelap`.

Round 3 shipped this in English and Malay because **both** researchers independently found the same
myth ranking in their own SERP: dark = higher grade in English, *darker = purer* in Malay. It looked
like the obvious Arabic third.

**It is not, and the SERP is why.** Pulled 2026-08-26 for
`هل العسل الغامق أفضل من الفاتح لون العسل دليل على الجودة`, nine results, and **the Arabic corpus
already gets it right**:

- `https://wadideem.com/ألوان-العسل-عسل-فاتح-غامق/` — `لماذا يختلف لون العسل بين الفاتح والغامق؟`
- `https://manahil-alzahrani2.com/blog/أنواع-العسل-والوانه/a-2034909758`
- `https://aslmossa.com/blog/الوان-العسل-الطبيعي/a-1728512042`
- `https://www.bloghoneyalmunahil.com/2021/07/blog-post_15.html`
- `https://hulwalrahiq.com/ar/blog/لون-العسل-الاصلي/a-520635618`
- `https://bee.ahla-3alam.com/لون-العسل/`
- `https://www.youtube.com/watch?v=RTlToF6LmFY`

The consensus in that pull is `لا ينبغي ربط لون العسل بالجودة` and `الألوان القاتمة ليست شرطاً على
جودة العسل`. **The corrective this article would deliver is already the ranking answer.** There is no
myth to break, only a crowded field to join.

**Second reason: internal restatement.** Darkening is already asserted in at least three live Arabic
articles — `kayfa-tamiz-al-asal-al-asli` (`العسل الخام يتبلور وينفصل ويغمق مع الوقت`),
`asal-al-zawjayn`'s storage callout (`ويغمق لونها مع الوقت`), and `hal-lil-asal-tarikh-salahiya`
(`علامات تغيّر العسل`) — and `ar1` registers `لون عسل السدر وطعمه`.

**Reserve, with a defined trigger:** revisit only if a future Arabic pull shows the dark-equals-premium
myth actually ranking, which for this audience would most plausibly arrive through the sidr
comparison rather than through generic colour content.

**Shared demand?** Already served in EN and MS. Arabic is the one language that does not need it.

---

### AR-C6 — `أسماء العسل على الرفوف العربية` (جبلي / سمر / مراعي / زهور برية) ⛔ RESERVE (rank 6)

The intuition is good: an Arabic buyer in a Klang Valley Arab grocery faces jars labelled
`عسل جبلي`, `عسل سمر`, `عسل مراعي`, `عسل زهور برية` — none of which is a regulated term, all of which
read as grades. The "not a regulated word" spine is the site's house move.

**Three reasons it does not clear the bar.**

1. **The SERP is 5-of-5 health claims, and severe ones.** Pulled 2026-08-26 for
   `الفرق بين عسل جبلي وعسل مراعي وعسل سمر وزهور برية أسماء العسل`:
   `https://abounayefhoney.com/en/blog/…/a-1915004321` · `https://aslmossa.com/blog/ايهما-أفضل-عسل-السدر-ام-السمر/a-1055506429` ·
   `https://wadideem.com/عسل-السدر-الجبلي/` · `https://store.alshifahoney.com/ar/blog/ايهما-افضل-عسل-السدر-او-الجبلي/a-2109258350` ·
   `https://nasimalasal.com/ar/blog/الفرق-بين-العسل-الجبلي-وعسل-السدر/a-1524283124`.
   From that pull, `عسل السمر` is described as `يُستخدم غالبًا لعلاج أمراض الكبد، وتنقية الدم` and
   sidr as `لتعزيز جهاز المناعة`. Writing into this space means refusing a therapeutic claim in every
   single paragraph, and the SERP's own framing question is `أيهما أفضل` — which invites exactly the
   grading verdict the site must not give.
2. **Heavy overlap with `ar1`.** `al-farq-bayn-asal-al-sidr-wal-asal-al-malizi` already registers
   `عسل أحادي المصدر`, `درجات عسل السدر`, `لماذا عسل السدر غالي`, `ادعاء المنشأ على علبة العسل` and
   `ما هو عسل السدر`. Four of the five names this article would explain are inside that article's
   registered territory.
3. **Two articles, one spine.** `ar3` already carries "this word is not regulated". Running it again
   on a different word set makes the section look like it has one idea.

**Reserve.** Revisit only if the Arabic-grocery shelf angle can be evidenced with something the sidr
article does not already own — and only after someone has actually photographed a Klang Valley
Arab-grocery shelf, so the article describes real labels rather than a Gulf blog's list.

**Shared demand?** No. Arabic-only shelf vocabulary.

---

### AR-C7 — `لماذا يختلف طعم العسل` ⛔ RESERVE (rank 7)

The resident-shaped version of the round-2 English reserve `why does honey taste different`: an
Arabic family's first Malaysian jar does not taste like the honey they grew up on, and they wonder
whether they have been sold something wrong.

**Demand is real but thin and already answered once.** Pulled 2026-08-26 for
`لماذا طعم العسل يختلف من مرطبان لآخر اختلاف طعم العسل`, seven results, of which **one** is dedicated
to the question — `https://altasneemhoney.com/لماذا-يختلف-طعم-العسل-الطبيعي-من-برطما/` — and it answers
it adequately (`السر يبدأ من الزهرة`). The rest are `أنواع العسل وفوائده` listicles:
`https://mawdoo3.com/أنواع_العسل_وفوائده` · `https://magltk.com/الفرق-بين-أنواع-العسل-لاختيار-الأفضل/` ·
`https://aryyaf-sa.com/blog/أنواع-العسل/a-731020889` · `https://www.raheba.com/2021/01/kinds-of-honey.html`.
No Malaysian angle exists in any of them, which is the gap — but it is a thin one.

**The blocking reason is internal.** The article's necessary payoff is *variation is not evidence of
fake*, and `kayfa-tamiz-al-asal-al-asli` already owns that line, in its own voice, with a dedicated
callout (`التبلور علامة جيدة لا عيب`) and a "سلوك طبيعي داخل المرطبان" checklist item. Round 2 killed
the English version for this exact reason and nothing has changed it.

**Reserve, same reason as round 2, restated with Arabic evidence.**

**Shared demand?** EN reserve exists with the identical blocker. If it is ever taken, take it in one
language only.

---

### AR-C8 — `شراء العسل بكميات في ماليزيا` (bulk / wholesale) ⛔ DISCARD — reason updated (rank 8)

**The reserve's reason has genuinely changed and the candidate still fails.** Both halves matter.

**What changed.** A wholesale pathway does exist and is published:
`src/components/sections/Wholesale.astro` renders an enquiry form on every locale's homepage;
`/ar/contact/` and `/ar/retail/` point at it; and `src/content/llms/ar.txt` carries a
`## البيع بالجملة` section stating that quantity pricing is requested directly and not published.
Round 2's "no bulk pathway exists" line was wrong and `FACTS-COMMON.md` has already corrected it.

**Why it still fails — three independent reasons.**

1. **The article is already written, as an FAQ.** The live `hadiya-min-malizia-lil-ahl` ships
   `هل هناك طلبات بالجملة لعدة بيوت؟` with the complete honest answer, the link to the form, and the
   explicit statement that no price, MOQ or lead time is published (quoted in §0.2 above). A
   dedicated article would have that FAQ as its thesis and nothing verified to add.
2. **There is nothing else that may be said.** No price, no minimum, no lead time, no terms, no jar
   size (D26), no packaging service. An 800–1,000-word article built on "a form exists, ask" is a
   dead end, and padding it means inventing exactly the four facts that do not exist.
3. **The demand is not there in Arabic, and the SERP evidence is unusually clear.** Two pulls,
   2026-08-26:
   - `شراء عسل بالجملة في ماليزيا كمية` → **five of six results are honeymoon travel packages.**
     `شهر عسل` swallows the query space:
     `https://ar.harpersbazaararabia.com/الثقافة/السفر/تكلفة-شهر-العسل-في-ماليزيا` ·
     `https://www.asiaheavens.com/شهر-عسل-10-ايام-مسبح-خاص-ماليزيا/` ·
     `https://www.globalservicesmalaysia.com/product/برنامج-شهر-عسل-14-ليلة-15-يوم-مميز/` ·
     `https://arabian-traveler.com/عروض-شهر-العسل-ماليزيا/` · `https://travel-night.com/packages/kualaroyal/`.
     The one honey result is a **Saudi** wholesaler: `https://honey-binmisfer.com/categories/921488/قسم-الجملة`.
   - `"عسل" جملة موزع ماليزيا "طلب كمية" متجر` → Gulf wholesalers
     (`https://alhawwaj.com/`, `https://solstores.com/ar/sub-category/عسل/106`,
     `https://honey-binmisfer.com/categories/921488/قسم-الجملة`) **plus the Royal Honey / Vital Honey /
     Etumax sachet category** (`https://pazarnaa.com/product/عسل-ملكي-ماليزي-12-ظرف-من-royal-honey/`,
     `https://www.wow-sa.com/product/العسل-الملكي-الماليزى-الأصلي-الأكثر-م/`,
     `https://3arabtrend.com/product/العسل-الملكي-etumax-الماليزي-12-ظرف-10-جرام-من-اي/`).
     That second group is the **sexual-enhancement cluster** `FACTS-COMMON.md` disqualifies, and it is
     what "Malaysian honey in quantity" means to the Arabic internet. Nothing in either pull is a
     Malaysia-resident buying honey in quantity for a shop, an event or several households.

**Verdict: discard, reason recorded.** Round 5 should not re-open it unless the site publishes a
price, a minimum or a lead time — at which point the article becomes possible for a reason that has
nothing to do with search demand.

---

### AR-C9 — `عسل الكلولوت` ⛔ DISCARD — reserve closed on a new ground (rank 9)

Round 3 held this as a reserve — "one relevant result, no GSC row" — and folded a gloss into `ms2`
instead of spending a slot.

**The secondary-keyword sweep closes it properly.** `عسل كيلولوت` is a **registered secondary keyword
on the live `al-asal-al-malizi`**. Under the brief's own rule — near-paraphrases of registered
secondaries are off limits — the topic is not available in Arabic regardless of demand. The
substance is also covered twice over: `types-of-honey-in-malaysia` (EN) draws the product-class line
and `madu-kelulut-vs-madu-tualang` (MS) goes deep on it.

**Discard, permanently.** Record the registered-keyword reason so it is not re-litigated as a demand
question.

---

### AR-C10 — `عسل بالمكسرات فطور` (breakfast timing) ⛔ DISCARD — reserve closed on evidence (rank 10)

The round-2 reserve. Its stated blocker was "energy / vitamin E" claim risk plus partial overlap
with the ingredient-literacy piece.

**A body-copy sweep closes it on stronger grounds: the site already publishes the answer, twice.**
Both `asal-al-zawjayn` and `habbat-al-barakah-wal-asal` ship a `steps` block giving the full routine
— `ملعقة صغيرة صباحاً` on an empty stomach, `انتظر نحو خمس عشرة دقيقة`, then breakfast as usual,
`يومياً لا متفرقاً`. A dedicated timing article would restate two live articles' step blocks and
would have to reach for a benefit claim to justify its own existence.

**Discard.** Any future refinement belongs as an edit to those two articles, not as a new URL.

---

## 3. Ranked table

| # | Arabic focus keyword | Slug | Intent | Group | Verdict |
|---|---|---|---|---|---|
| 1 | `هل العسل آمن للحامل` | `hal-al-asal-amin-lil-hamil` | safety / informational | joins **G10** (en + ms) | ✅ **Recommend** |
| 2 | `العسل العضوي` | `al-asal-al-udwi-fi-malizia` | label literacy | none | ✅ **Recommend** |
| 3 | `استبدال السكر بالعسل في الخبز` | `istibdal-al-sukkar-bil-asal` | how-to / kitchen | with live `en/baking-with-honey-malaysia` | ✅ **Recommend** |
| 4 | `إدخال العسل إلى ماليزيا` | `idkhal-al-asal-ila-malizia` | logistics / regulatory | none | ⚠️ **Recommend — conditional** |
| 5 | `هل العسل الغامق أفضل من الفاتح` | `hal-al-asal-al-ghamiq-afdal` | myth correction | would join G8 | ⛔ Reserve — no myth to break |
| 6 | `أسماء العسل على الرفوف العربية` | `asma-al-asal-ala-al-rufuf` | shelf literacy | none | ⛔ Reserve — SERP is health claims, overlaps ar1 |
| 7 | `لماذا يختلف طعم العسل` | `limatha-yakhtalif-taam-al-asal` | reassurance | none | ⛔ Reserve — `kayfa-tamiz` owns the payoff |
| 8 | `شراء العسل بكميات في ماليزيا` | — | commercial | — | ⛔ Discard — reason updated, still fails |
| 9 | `عسل الكلولوت` | — | category | — | ⛔ Discard — registered live secondary |
| 10 | `عسل بالمكسرات فطور` | — | usage / timing | — | ⛔ Discard — already published twice in body copy |

---

## 4. Recommendation — four, not six

**I recommend four Arabic articles for round 4, and I am not padding to six.**

Rounds 1–3 took the obvious Arabic ground thoroughly: store-led buying, comb handling, humid-climate
storage, expiry, infant safety, manuka, sidr, ingredient and label literacy, flight logistics, two
gifting angles and a DIY recipe. Twenty-two live articles is dense coverage of a single product's
question space in one language, and the secondary-keyword sweep shows how dense — ten separate
collisions, several of which killed candidates that looked clean against the focus-keyword list
alone.

Six would mean shipping AR-C5 and AR-C6, and I can state precisely what each would cost. AR-C5 would
publish a corrective into an Arabic SERP that **already agrees with us** — nine ranking pages saying
`اللون ليس دليل جودة` — while restating a darkening line three live Arabic articles already carry.
AR-C6 would put the site into a SERP whose framing question is `أيهما أفضل` and whose ranking pages
prescribe honey `لعلاج أمراض الكبد`, on territory `ar1` already registers five keywords across. Both
are section-quality risks, not just wasted slots.

| # | Why it ships |
|---|---|
| **AR-C1 pregnancy** | The clearest gap in the file. The site answers this in English and Malay and leaves its Arabic readers with a SERP of seller blogs, an IVF clinic and an abortifacient scare. The safe shape is proven — round 3's `ms4` fence transfers unchanged — and the group is a real one, not invented to fill a table. |
| **AR-C2 organic** | The only genuinely uncontested word left on the label: `عضوي` appears **zero times** in all 22 Arabic articles. It has verified government-source backing (myOrganic scope, MS 1529, EU 3 km forage rule, USDA's missing apiculture standards) fetched and read on 2026-08-26, and its honest conclusion — that this site claims no certification — is the house position rather than a hedge. It is also the exact mirror of `ar3`: `خام` is unregulated, `عضوي` is regulated but not everywhere and not obviously for honey. |
| **AR-C3 baking substitution** | A round-2 reserve whose blocker has genuinely lifted: `FACTS-VERIFIED.md` now holds worked, checked arithmetic and the English sibling shipped a glycaemic-free version. The Arabic SERP hands us the article — it contradicts itself ¾ cup versus ½ cup, misstates honey's water content as 20%, and gives nothing in grams or Celsius to a reader with a Malaysian kitchen scale. |
| **AR-C4 inbound to Malaysia** | The mirror of a live article that explicitly declines this direction, for the most audience-specific question in the file. Seven ranking Arabic travel pages conflate a cabin-liquids limit with an import control; MAQIS is documented; the personal-baggage position is not, and saying so is the article rather than a gap in it. **Conditional** on the writer keeping hard off `naql-al-asal-fi-al-taira`'s three-authorities table and packing steps, and on naming no Act, section or penalty. |

**If the round needs a fifth Arabic slot**, take it from another language rather than from AR-C5 or
AR-C6. Two of the four above are plausible in Malay on independent grounds — `madu organik` with the
myOrganic logo is a Malaysian-shopper question in Malay before it is one in Arabic, and
`gantikan gula dengan madu` sits on the ground the round-3 map already recorded as clear.

---

## 5. Discard and reserve table

Everything assessed this round, including topics killed before they reached the candidate list.

| Candidate | Status | Reason, checked 2026-08-26 |
|---|---|---|
| `هل العسل الغامق أفضل من الفاتح` | **Reserve** | Arabic SERP already publishes the correct answer (9/9 say colour ≠ quality). Darkening asserted in 3 live Arabic articles; `لون عسل السدر وطعمه` registered on ar1 |
| `أسماء العسل على الرفوف العربية` (جبلي/سمر/مراعي/زهور برية) | **Reserve** | 5/5 ranking pages are therapeutic claims (`لعلاج أمراض الكبد`); framing question is `أيهما أفضل`; ar1 registers 5 overlapping keywords. Needs a real shelf photograph before it is writable |
| `لماذا يختلف طعم العسل` | **Reserve, unchanged from round 2** | The payoff (*variation ≠ fake*) is owned by `kayfa-tamiz-al-asal-al-asli`. One adequate incumbent exists; no Malaysian angle in any ranking page |
| **Bulk / quantity orders** | **Discard — reason UPDATED** | Pathway now confirmed to exist, and the honest answer is **already published** as an FAQ in the live `hadiya-min-malizia-lil-ahl`. No price/MOQ/lead time exists to add. Demand absent: `شهر عسل` travel packages take 5/6 of the SERP; the rest is Gulf wholesalers and the Royal Honey sachet category |
| `عسل الكلولوت` | **Discard — reserve closed** | `عسل كيلولوت` is a **registered secondary on the live `al-asal-al-malizi`**. Off limits by the round's own rule, independent of demand |
| `عسل بالمكسرات فطور` (breakfast timing) | **Discard — reserve closed** | The routine is already published as a `steps` block in **two** live Arabic articles (`asal-al-zawjayn`, `habbat-al-barakah-wal-asal`). Would restate them and would need a benefit claim to justify itself |
| **Ants in the honey jar** (`النمل في مرطبان العسل`) | **Discard** | Looked like an ideal claim-free Malaysian-household piece — real demand exists (Facebook food groups twice, hawaaworld, `ar.quora.com`, pulled 2026-08-26). **But `hifz-al-asal-fi-al-jaw-al-ratb` already carries a dedicated H2 `كيف أُبعد النمل عن مرطبان العسل؟`, a list item and an FAQ.** Killed by a body-copy sweep, not a keyword sweep |
| **Nutmeg** (`حكم جوزة الطيب` / intoxicant question) | **Discard — hard** | A declared SUBUR ingredient with genuine consumer demand, but the entire ranking corpus is fatwa material (`islamweb.net` ×2, `mawdoo3.com`, `albayan.ae`, individual scholars) with real disagreement including a **majority-prohibition** position. Answering means issuing or summarising a religious ruling, on our own ingredient, on our own domain. Cannot be closed honestly. **Flagged to the owner as a question a reader may raise, not as a topic to write** |
| **Other bee products** (غذاء ملكات النحل / حبوب اللقاح / العكبر) | **Discard** | SUBUR contains none of them, so there is no product tie — and the Arabic corpus frames propolis as `الدواء` and `مضاد حيوي طبيعي` and royal jelly as containing `هرمونات`. Maximum ceiling exposure for zero relevance. `حبوب اللقاح في العسل` is also registered on ar3 |
| **`العسل الأبيض` vs `العسل الأسود`** | **Discard** | Genuine dialect confusion (Egyptian/Levantine `أسود` = molasses, not honey), but the corpus is antioxidant-and-energy claims throughout, and the Malaysian shelf equivalent is gula melaka — which `en/honey-vs-gula-melaka` already owns |
| **"Is a blend legally honey?"** (Reg 130 composition vs a spiced blend) | **Discard** | Conceptually strong, but `عسل صافٍ أم خلطة` is a **registered secondary on two live articles** (`asal-bil-zafaran`, `mukawwinat-khaltat-al-asal-bil-aashab`), and `FACTS-VERIFIED.md` grants the Regulation 130 citation exception to the fake-honey family **only** |
| **Fresh ginger / moisture and fermentation** | **Discard** | `تخمّر العسل` and `تخمر العسل رغوة` are registered on `hal-lil-asal-tarikh-salahiya` and `hifz-al-asal-fi-al-jaw-al-ratb` |
| **Saffron verification** (`كيف أتأكد أن الزعفران موجود`) | **Reserve, unchanged** | Same blocker as the round-3 EN saffron reserve: needs someone to physically check whether saffron threads are visible in the jar. No photography pass has happened. The live `asal-bil-zafaran` also registers `عسل بالزعفران` and `طريقة استعمال العسل بالزعفران` |
| **Al Shifa brand-verification cluster** | **Discard — confirmed closed** | The only two Arabic-script GSC rows in the 222 (`هل عسل الشفاء طبيعي` 23 imp / pos 2.6; `عسل الشفاء هل هو طبيعي` 17 imp / pos 2.4) live here. `kayfa-tamiz-al-asal-al-asli` owns the intent; naming a competitor buys nothing |
| **Malaysian honey sachets** (`العسل الملكي` / Royal Honey / Etumax) | **Disqualified — legal** | The loudest Arabic association with "Malaysian honey", and it is the sexual-enhancement cluster. Also already fenced: `عسل بأظرف أم مرطبان` is registered on `al-asal-al-malizi` |
| Ramadan / suhoor · halal certification · jar sizes · price · the sexual/aphrodisiac cluster | **Confirmed closed, per brief** | Re-checked. No reason has changed. Nothing published since round 3 creates a certification, a price or a size |

---

## 6. Evidence integrity

- **No search-volume figure appears anywhere in this file.** No keyword tool exists on this machine
  and none was invented. Every quantitative claim is either a Search Console impression/position from
  `gsc-demand.md` — a labelled **sibling-property proxy**, never presented as suburhoney.com's own —
  or a counted SERP composition, each with its pull date of **2026-08-26**.
- **Where a candidate has no GSC row I say so** rather than borrowing an adjacent one. Three of the
  four recommendations have no GSC row at all. That is stated in each.
- **`suburhoney.com`'s own zero is read as the brief instructs:** round 3 went live 2026-08-25, one
  day before the pull. It is not evidence of anything and no candidate here is justified or refused
  on it.
- **Collection limits, recorded rather than papered over.** `WebSearch` from this machine is US-served,
  so **no Malaysian-localised Google SERP, no Arabic autocomplete and no "مزيد من الأسئلة" (People Also
  Ask) evidence appears in this file** — the same class of limitation the round-3 Malay researcher
  recorded. The SERP compositions above are Arabic-language global results, which is the right
  corpus for an Arabic reader's competition but understates any Malaysia-local Arabic result.
  **Malay Mail returns HTTP 403** to automated fetch; the Penang seizure item under AR-C4 was surfaced
  via search result only, **was not fetched**, and is marked unverified.
- **Two facts were fetched and read in full, not taken from a search summary:** the myOrganic scheme
  page at `kpkm.gov.my` (scope wording), and the USDA/EU apiculture position via the sources named in
  AR-C2. The MAQIS commercial-import requirements under AR-C4 come from search results and a trade
  reference; **the personal-baggage position was searched for and not found**, and that absence is
  recorded as an absence rather than filled in.
- **Nothing in this file may be quoted by a writer as an established fact.** Per `FACTS-VERIFIED.md`'s
  own rule: a research file is not a source. Anything from AR-C2 or AR-C4 that reaches an article must
  first be re-verified into `FACTS-VERIFIED.md` for round 4.
