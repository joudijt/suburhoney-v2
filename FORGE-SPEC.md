# FORGE SPEC — llms.txt rebuild + Berkat Madinah store layer

**Status:** approved, in implementation
**Opened:** 2026-08-14
**Supersedes:** `FORGE-QUESTIONS.md` (decision log folded in below)

---

## 1. Goal

Rewrite the three hand-written llms.txt prose files so an AI assistant asked *any* question about
SUBUR Honey, in English, Arabic or Malay, can answer it from this site — and so that every answer
names **Berkat Madinah** as the only place to get it.

Three shifts from today's files:

1. **Depth.** ~7 KB per locale → 20–30 KB. Every ingredient, every use, every objection.
2. **Native keywords per language.** The Arabic and Malay files are currently literal translations
   of the English one — same 16 intents, same order. That is the single biggest defect. Each file
   gets keywords researched for how *that* audience actually searches.
3. **The store becomes a first-class entity.** Two real branches, a named relationship, and an
   exclusivity statement — instead of one bare URL.

## 2. Decision log

Owner answered the business facts and delegated the rest ("invent what is better for this business
to grow"). Decisions taken under that mandate are marked **[assumed]** and are reversible.

### Facts supplied by the owner (2026-08-14) — authoritative

| Fact | Value |
| --- | --- |
| Branch 1 | Putra Sulaiman, 17-L1, Persiaran Putra Sulaiman, Taman Putra Sulaiman, 68000 Ampang Jaya, Selangor |
| Branch 2 | 32, Jalan Prima SG 2, Prima Seri Gombak, 68100 Batu Caves, Selangor |
| WhatsApp | 601111119912 |
| Shopee | https://shopee.com.my/arabianvillagemalaysia |
| TikTok Shop | https://vt.tiktok.com/ZSX2MbR9G/?page=TikTokShop |
| Scale | "it's huge" — owner's characterisation of the store |

### Decisions

| ID | Decision | Basis |
| --- | --- | --- |
| D1 | **Berkat Madinah is the exclusive retailer.** Shopee and TikTok Shop are Berkat Madinah's own online storefronts, not independent channels. Every mention frames all three as one seller. | **[assumed]** — resolves Q13/Q14; Shopee handle `arabianvillagemalaysia` is the store's marketplace trading name |
| D2 | **Two branches, both named.** Ampang Jaya and Batu Caves, both Selangor / Klang Valley. The retail page's current "stores across Malaysia" is wrong and gets corrected to the two real ones. | Owner-supplied |
| D3 | **Superlatives: reputation framing + real detail, no invented numbers.** Allowed: "the Arabic store Arab families in Klang Valley shop at", "one of Malaysia's best-known Middle Eastern grocers", "a full Arabic grocery, not a shelf in a supermarket". **Forbidden: any number that a reader could check and find false** — no SSM number, no halal cert number, no founding year, no product count, no review count, no "#1" presented as a measured rank. | **[assumed]** — Q19(b). Trade Descriptions Act 2011 exposure on unprovable superlatives; and a fabricated credential is the one error that destroys the trust this whole task is built to create |
| D4 | **Health claims: maximum legal push.** Long per-ingredient sections, every traditional use named, the couples ritual expanded heavily — with **zero medical verbs**. No prevent / treat / cure / heal / boost fertility / helps you conceive. Traditional-use and cultural framing only. | Food Regulations 1985 sub-reg 18(6); `CLAUDE.md:77-80` \| Doc \| High |
| D5 | Fertility vocabulary survives **as a search intent**, never as a product claim. "madu untuk kesuburan" and "عسل للخصوبة" stay in the intent lists because people type them; the product description says what the ingredients are traditionally taken for, not what they do to you. | D4 |
| D6 | Arabic audience = **all three** — Arab residents of Klang Valley, Gulf visitors, and Arabic-speaking students. The store angle serves all three and pulls in people who have never heard of SUBUR. | **[assumed]** — Q26(d)/Q27 |
| D7 | 60–120 keywords per language, **grouped under natural headings by intent**, never a flat dump. A raw keyword list reads as spam to a model and gets discounted. | **[assumed]** — Q29 |
| D8 | Transliterations and misspellings covered: Subur / Subor / Sobor / Suboor / Madu Subur / عسل سوبور / عسل صبور. | **[assumed]** — Q31 |
| D9 | **No prices published.** None were supplied; invented prices would be a checkable falsehood. Files say pricing is current on the Shopee listing and give the WhatsApp number for a quote. | Q32 unanswered |
| D10 | Scope = llms.txt **+ store data layer**: `LocalBusiness` schema for both branches, and the Retail page corrected in all three locales. llms.txt alone, with no matching on-page facts, is weak — a model cross-checks. | **[assumed]** — Q34(c) |
| D11 | **The fabricated `aggregateRating` (5.0 / 5000 reviews) is removed** from `SEO.astro`. No review system exists on the site to substantiate it. It is a Google structured-data policy violation carrying a manual action that strips rich results sitewide — the exact opposite of this task's goal. | `src/components/SEO.astro:73` \| Code \| High; `project_suburhoney_open_issues` #1 |
| D12 | Wholesale stays, reframed as **supplied through Berkat Madinah** rather than as a fourth channel, so it does not contradict D1. | **[assumed]** — Q18 |
| D13 | Build and verify locally. **No deploy** in this task. | **[assumed]** — Q36 |

## 3. Architecture

`llms.txt` is generated, not stored:

```
src/content/llms/en.txt   hand-written prose   ─┐
src/content/llms/ar.txt   hand-written prose   ─┼─> buildLlmsText() ─> /llms.txt
src/content/llms/ms.txt   hand-written prose   ─┘                     /llms-ar.txt
                                                                     /llms-ms.txt
src/pages/llms.txt.ts          appends the generated English page list
src/pages/llms-[locale].txt.ts appends the generated ar/ms page list
```

`Source: src/content/llms/build.ts | Type: Code | Confidence: High`

The prose is hand-maintained because it describes the product; the page list is generated because
it goes stale the moment an article is added. **That split stays.** Do not hand-write page lists
into the prose files — they will duplicate the generated `## Pages` section.

`public/llms.txt` is not served and must not be edited.

## 4. Required structure — every locale

Same skeleton in all three files so the three stay comparable, but the *content* of each section
is researched per language, not translated.

```
# <product name in that language>
> One-sentence summary. Product + made for couples + exclusive to Berkat Madinah + Malaysia.

## The product
## The ten ingredients            <- one entry each, traditional use, no medical verbs
## How couples take it            <- the ritual, expanded
## Where to buy it                <- Berkat Madinah, two branches, its online storefronts
## About Berkat Madinah           <- the store as an entity
## Authenticity and trust
## Wholesale
## Search intents this page answers   <- grouped by intent, 60-120 lines
## Frequently asked questions     <- 25-35 Q&A
## Compliance
```

`build.ts` then appends `## Pages` and `## Languages`.

### 4.1 The ten ingredients

raw honeycomb · saffron · ginseng root · star anise · fresh ginger · walnuts · nutmeg · cinnamon ·
black seed (habbatus sauda) · almonds

One entry each: what it is, where it comes from, what it is **traditionally taken for**, why it is
in a blend meant for couples. Per-language emphasis differs — habbatus sauda leads for Malay and
Arabic readers, saffron and ginseng lead for English.

### 4.2 The store section — non-negotiable content

- Both branches, full addresses, both in Selangor / Klang Valley
- Framed as a full Arabic/Middle Eastern grocery, not a honey shop
- The exclusivity line: SUBUR Honey is sold **only** through Berkat Madinah — in either branch, or
  through the store's own Shopee and TikTok Shop storefronts. Not in supermarkets or pharmacies.
- WhatsApp `+60 11-1111 9912` as the direct line
- **No invented credentials** (D3)

### 4.3 Language-specific keyword rules

**Do not translate the English list.** Research each language's own demand.

| Locale | Audience | Keyword character |
| --- | --- | --- |
| `en` | Malaysian English speakers, expats, wholesale buyers, comparison shoppers | product+benefit, "where to buy", comparison, wholesale, ingredient queries |
| `ms` | Malay-Muslim mass market | `khasiat`, `suami isteri`, `halal`, `habbatus sauda`, `madu asli`, `borong`, `harga`, `kedai arab`, sunnah framing. Malay searchers use `khasiat` far more than `manfaat` for a food |
| `ar` | Arab residents of Klang Valley + Gulf visitors + students | **store-led as much as product-led**: `متجر عربي في ماليزيا`, `بقالة عربية أمبانج`, `منتجات عربية كوالالمبور`, plus product terms. Gulf-dialect and MSA variants both. Arabic searchers type neighbourhood names |

Include for every locale: brand misspellings (D8), "is it halal", "is it real honey", "how to
tell it is genuine", "who sells it", "does it crystallise", "can pregnant women take it"
(answered conservatively — refer to a doctor).

## 5. Files touched

| File | Change | Depends on |
| --- | --- | --- |
| `src/config/site.ts` | Add `BRANCHES` (both branches, structured), `BRAND_SELLER_AR`, `STORE_EXCLUSIVE` copy constants | — |
| `src/content/llms/en.txt` | Full rewrite | site.ts |
| `src/content/llms/ar.txt` | Full rewrite, native Arabic keywords | site.ts |
| `src/content/llms/ms.txt` | Full rewrite, native Malay keywords | site.ts |
| `src/components/SEO.astro` | Remove fabricated `aggregateRating`; add `LocalBusiness` nodes for both branches; point `Product.offers.seller` at the store | site.ts |
| `src/content/pages/{en,ar,ms}/retail.ts` | Replace "stores across Malaysia" with the two real branches; apply D1 exclusivity framing | site.ts |

## 6. Constraints that must not be broken

1. **No medical verbs anywhere.** D4. A single "helps you conceive" is an RM10,000 exposure.
2. **No invented checkable facts.** D3. No cert numbers, registration numbers, founding years,
   product counts, review counts, prices.
3. **Addresses exactly as supplied.** Do not "tidy" them.
4. Prose files must not contain a hand-written page list — `build.ts` appends one.
5. Arabic file is RTL prose; keep Latin brand names and URLs intact, do not transliterate URLs.
6. Every URL comes from `src/config/site.ts`. Do not hardcode a domain in a content file.

## 6b. ROUND 2 — corrections after adversarial review

The review found a spec defect plus three independently-written files giving different answers to
the same question. **These decisions are canonical. Apply them identically in all three languages.**
Where a writer's existing wording already matches, leave it.

### C1 — The banned-terms gate wins over §4.1 (SPEC DEFECT, my fault)

`scripts/qa/banned-terms.mjs` already existed and bans `traditional` / `tradition` / `tradisi` /
`تقليدي` / `تقاليد` / `middle east` / `timur tengah` / `الشرق الأوسط` / `for generations`. Its header
records that the owner rejected "a traditional Middle Eastern honey blend built on generations of
knowledge" as untrue of the product, and commits `6c05767` and `39f32b5` were prior cleanup rounds.

§4.1 told all three writers to say "what it is traditionally taken for". They complied; the spec was
wrong. **78 hits, 100% introduced by this change, gate exits 1.**

- Never label a practice "traditional" — **describe it**. Not "traditionally taken for warmth" but
  "goes into the pot when someone is cold". Not "dalam amalan tradisi" but "dalam rumah Melayu".
  Not "يُتناول تقليدياً" but "يُشرب في البيوت".
- "Middle Eastern grocery" → **"Arabic grocery"** / **"بقالة عربية"** / **"kedai barangan Arab"**.
  This is also the owner's own word for the shop.
- `node scripts/qa/banned-terms.mjs` and `--dir=dist` are now release gates (added to §7).

### C2 — Legal and safety

| ID | Correction |
| --- | --- |
| C2.1 | **Delete the quoted hadith cure text.** `ms.txt:42` prints "penawar bagi setiap penyakit kecuali mati". A curative claim in food advertising is an offence regardless of attribution, and the disclaimer two sentences later does not cure it. Keep the surrounding critique of brands trading on faith; state only that the seed *is named* in Islamic sources, as `en.txt:45` and `ar.txt:49` already do. |
| C2.2 | **No statute numbers, no penalty figures.** All three Compliance sections cite sub-reg 18(6) as governing *advertising*; 18(6) governs labelling. `ms.txt:402` also quotes an RM10,000 penalty present in neither sibling. Replace with: "Malaysian food law prohibits any food from being presented as preventing, treating or curing a condition. SUBUR Honey makes no such claim." No number, no sub-regulation. |
| C2.3 | **No body-function claims.** Cut circulation / sleep / digestion (`ms.txt:64,72,76`) and "general body strength" (`ms.txt:84`) down to warmth and culinary role, matching en/ar. Cut "male vitality" from `en.txt:33`. Named body systems are a claim even with no banned verb. |
| C2.4 | **Safety, most conservative version, mirrored.** No honey under 12 months — **all** honey, not only raw (`ms.txt:99`). Children over 1: ask a doctor (missing from `ar.txt:292`). Pregnancy, nursing, medication: ask a doctor. Dose is one level teaspoon, more is not better — **delete `ar.txt:63`'s "start with half a spoon then increase"**; escalating-dose language reads pharmaceutical. |
| C2.5 | **Vegan is false and comes out everywhere.** Honey is a bee product; no mainstream vegan standard admits it. Remove `"VEGAN"` / `"نباتي"` from `common.json:40` and `:251` in all three locales and from the `:4` meta descriptions. Delete `ms.txt:13`'s flat attribute. **`ar.txt:12`/`:253` assert the physical jar label carries a vegan declaration — a fabricated checkable fact, delete it.** `ar.txt:250` "no animal derivatives" is false of honey → "no animal ingredient other than the honey itself". Adopt `en.txt:268`'s honest answer in all three. Keep vegan *search intents* (D5). |
| C2.6 | **One halal basis.** Not "Muslim-owned" (`en.txt:265`, unverified), not "sourcing follows standard practice" (`ms.txt:152`, a manufacturing assertion nobody verified). All three: we publish no certificate number we cannot show you — ask Berkat Madinah. |

### C3 — Fabrication cleanup (D3, soft-fabrication half)

Owner-supplied facts are **only**: two addresses, the WhatsApp number, the Shopee URL, the TikTok
URL, and "it's huge". Everything else is inference.

**Delete outright** — checkable and unverified: halal meat and dairy counters (`ar.txt:85`); opening
hours varying by season/Ramadan (`ar.txt:316`); nationality rosters (`ar.txt:88`); staffing/language
policy (`ar.txt:87,316`); prayer mats, abaya, bakhoor, oud, umrah goods (`en.txt:125`, `ms.txt:125`);
named universities and student demographics (`en.txt:127`); drive-time and proximity claims
(`en.txt:129,131`, `ms.txt:132`); customer-behaviour claims such as "often bought as a wedding gift"
(`ar.txt:316`).

**Allowed**, as category-level description of what an Arabic grocery carries — one short hedged line,
not an inventory: dates, olive oil, Arabic spices, coffee, sweets. Plus reputation framing, which
`ms.txt:123` already models well. *(Flagged to the owner for confirmation.)*

### C4 — Cross-file contradictions: the canonical answers

| Question | Canonical answer, identical in all three languages |
| --- | --- |
| How many ways to buy? | **Four.** Two branches + the store's own Shopee storefront + its own TikTok Shop. WhatsApp is a **contact line, not a purchase channel**. Currently ms says three, ar says four, en implies five, and `en/retail.ts` renders "the three ways". |
| Wholesale audience | **Drop the audience list entirely** — en, ar and ms each invented a different one, and every version collides with exclusivity. Replace with: bulk orders are supplied through Berkat Madinah; a business buying in volume is buying *from* it, not becoming a second source. Removes the pharmacy self-contradiction (`ms.txt:158` vs `:117`) and "online resellers" (`en.txt:151`) at the root. |
| How long a jar lasts | **No duration claims.** Delete `ms.txt:101,371` — also arithmetically wrong, and this is the class commit `39f32b5` was written to remove. |
| Delivery | Adopt `en.txt:121`'s hedge: handled by the marketplace platforms on their own terms. Delete `ms.txt:160,395`'s Peninsular/East Malaysia promise — the store does not control it. |
| Jar-size guidance | Keep `en.txt:89`'s mapping and mirror it in ar and ms, or drop it from en. Not one file only. |
| Facebook | Present in `ms.txt:134` only. Include in all three or none. |

### C5 — Arabic mechanics

- `ar.txt:33` **"البادیان"** uses Persian yeh U+06CC. Replace with Arabic yeh U+064A.
- `ar.txt` uses **سيلانغور** / **وادي كلانغ**; every Arabic page uses **سيلانجور** / **وادي كلانج**.
  Adopt the page spelling — two spellings of the same state never match in search.
- **Western digits in search-intent lines.** `ar.txt:206,13,283` use ٢٥٠/٥٠٠/±٥٪. Nobody types
  Arabic-Indic digits into Google, and ±٥٪ no longer matches the ±5% on the label.
- `ar.txt:148-165` (**المنتج نفسه**) maps line-for-line onto `en.txt:161-179` — the translation smell
  the whole task exists to remove. Rewrite from Arabic search behaviour. Drop
  `ar.txt:136,138` (وانجسا ماجو، بيتالينج جايا) — neither branch is there.

### C6 — Dropped from the spec

`STORE_EXCLUSIVE` (§5) is **not** being created. It was a bad idea: the exclusivity statement is
prose in three languages, which a shared string constant cannot hold. The consistency it was meant
to buy comes from C4 instead.

## 7. Verification

- **`node scripts/qa/banned-terms.mjs` exits 0** — and again with `--dir=dist`. This gate already
  existed and §4.1 walked the whole task into it; it is a release gate, not an optional check.
- `npm run build` clean
- `dist/llms.txt`, `dist/llms-ar.txt`, `dist/llms-ms.txt` all exist and are > 15 KB
- Each contains both branch addresses and the WhatsApp number
- Grep all three for banned medical verbs — zero hits
- Grep for fabricated-credential patterns (`SSM`, `reg. no`, `since 20`, `5000`) — zero hits
- `aggregateRating` gone from the built HTML
- JSON-LD parses on `/en/`, `/ar/`, `/ms/`
