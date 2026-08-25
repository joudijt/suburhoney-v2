# Round 3 — common brief (read this before writing a single line)

Applies to every article in this round, all three languages.

**Read, in this order, before you start:**

1. `docs/press/round-3/FACTS-COMMON.md` — the product facts and the legal ceiling.
2. `docs/press/round-3/FACTS-VERIFIED.md` — **every externally checkable number this round may
   use.** If a fact is not in that file, it is not established. Do not take a figure from a demand
   file: round 1 had a writer fetch a source PDF and correctly refuse two numbers its own research
   file had asserted, and this file exists so that cannot happen again.
3. Your candidate section in your language's demand file (`demand-en.md` / `demand-ms.md` /
   `demand-ar.md`) — that is your fact sheet, with the SERP evidence and the competitor gap.
4. Your row and your fence in `ROUND-3-MAP.md`.
5. One live example article in your own language, to copy the exact code shape from.

---

## 1. What SUBUR Honey is — the only facts you may state

| Fact | Value |
|---|---|
| Product | A raw honeycomb blend of ten named ingredients, sold in Malaysia |
| The ten ingredients | Raw honeycomb · black seed (habbatus sauda) · saffron · ginseng root · fresh ginger · cinnamon · star anise · nutmeg · walnuts · almonds |
| Walnuts / almonds | **Ground/blended into** the honey — never biteable, separable pieces |
| Not in it | Dates (kurma). Say so plainly if the topic invites the Sunnah trio |
| Retailer | Berkat Madinah Store — the **only** seller. Two Selangor branches (Ampang Jaya, Batu Caves) plus its own Shopee storefront and its own TikTok Shop. Not in supermarkets or pharmacies |
| Contact | One WhatsApp line, for enquiries — link to `/{lang}/contact/`, never type the number |

**Facts that do not exist. Inventing any of them fails the round:**
price · **jar size, net weight, weight tolerance or how long a jar lasts (see §2)** · rating or
review count · customer count · JAKIM/KKM/HACCP or any certification · founding year · harvest
location or country of origin of the honey · shelf life · opening hours · delivery times · email
address · nutritional values · any percentage, quantity or dosage · gift-box, wrapping or bulk-order
service · a "map" feature (none exists anywhere on the site).

If your topic needs one of those to be answerable, tell the reader how to find it — ask the shop on
WhatsApp, read the label — and do not fill the gap with a plausible number.

## 2. Jar size and weight: do not mention them at all

Not to assert, and **not to say the site does not publish them either**. Skip the subject.

`llms.txt` publishes jar sizes and a ±5% tolerance in all three languages; `site.ts` and
`AI-FACTS.yml` contain neither. Which is right is an owner determination, logged as D26. Round 3
neither repeats the claim nor contradicts it.

**One narrow exception, for en5/ar4 only:** you may state that a Malaysian label is *required to
carry* a net weight declaration — that is a fact about labels in general, listed in
`FACTS-VERIFIED.md`. You may never state SUBUR's.

## 3. Physics and product facts you must not invert

- **Crystallisation is normal** for raw honey and does **not by itself** prove authenticity.
- **Honeycomb wax (~0.95 g/cm³) and nut kernels (~1.0 g/cm³) are lighter than honey (~1.4 g/cm³)
  and float** — never say comb or nuts sink or settle.
- **MGO grading is not New Zealand-exclusive.** UMF is the NZ scheme; Australia sells MGO-graded
  manuka. Keep this consistent with the sidr articles' "a floral source is not a country" line.
- Honey is a bee product — **never** call it vegan.
- **The under-12-months infant rule is a warning.** It is never invertible into "so it is safe for
  everyone else". Round 2 caught exactly that inversion in a Malay draft.

## 4. The legal ceiling — Malaysia

Malaysia's food rules prohibit a food product **and its advertising** from claiming to prevent,
reduce, treat or cure any condition. Fertility, diabetes, cough, cholesterol, blood pressure,
immunity-as-protection, skin conditions — all off limits as claims.

- **Allowed:** describing what an ingredient is, how it is used, what people search for, what a
  seller may and may not legally say, how to judge quality, and reporting what recognised
  public-health bodies actually said — attributed, generic ("health authorities"), never an invented
  statistic.
- **Not allowed:** "helps you conceive", "boosts immunity", "lowers sugar", "cures", "treats",
  "prevents", "clinically proven", a glycaemic-index number presented as a verdict, or a study
  result presented as a product effect. **Attributing a health claim does not launder it** — on a
  food seller's own domain it is still that food's advertising.
- **No statute numbers or penalties in body copy.** Say "Malaysia's food rules prohibit…" and stop.
  **The one exception is Regulation 130**, for the en1 family only, exactly as
  `FACTS-VERIFIED.md` permits it.
- **Nothing sexual, aphrodisiac or performance-framed**, however much demand exists for it. There is
  a lot; it is documented in `demand-en.md` §0.1 and it is not ours to serve.

Every legal risk in this round is the same risk, and the Arabic researcher put it best: the honey
corpus online **converts a descriptive question into a body claim within one paragraph, every time,
across every publisher.** Your candidate section names the specific claim phrases found in your own
SERP. Refuse those specific phrases, not a vague instruction to be careful.

## 5. Banned words — the build gate fails on these

`traditional` · `traditionally` · `tradition` · `traditions` · `Middle East` · `Middle-East` ·
`for generations` · `generational` · `studied standards`
`tradisional` · `tradisi` · `timur tengah` · `turun-temurun` · `piawaian dikaji`
`تقليدي` · `تقليديّ` · `تقاليد` · `تقليد` · `الشرق الأوسط` · `شرق أوسط` · `عبر الأجيال` · `معايير مدروسة`

The **underlying claim** is banned, not only the exact string — round 2 found Arabic `شرق أوسطية`
used as an adjective and had to rewrite it. Three articles this round sit in subjects that pull hard
toward this list — **ms2** (wild-harvest and heritage framing), **ms3** (the category's own listing
copy uses `Timur Tengah`) and **ar6** (one competitor domain is literally `taqaled.com`). If you are
writing one of those, check your draft against the list before you finish.

Also banned by the earlier cleanup, do not reintroduce: any aggregate rating, "trusted by N
customers", "official supplier", "stores across Malaysia".

## 6. Article shape

**800–1,000 words of body copy. Aim near 950.** Body copy = the `answer` block, the opening
paragraph, headings, paragraphs, lists, steps, tables, callouts and the cta. **FAQs are excluded
from this count** — but they are real content, they ship as `FAQPage` schema, and they are not
filler.

Order:

1. `answer` block **first, always**. `question` = the query a reader typed. `answer` = **40–60
   words**, self-contained, quotable with nothing around it. This is the passage AI engines lift.
2. An opening `paragraph` that earns the read.
3. **5–7 `heading` blocks**, each phrased as a question a real person asks, each with a kebab-case
   ASCII `id`, unique within the article.
4. **Directly under every heading: one 40–70 word answer paragraph that stands alone.** Then depth —
   supporting paragraphs, a `list`, a `steps` block, an example.
5. **At least one `table`** — answer engines lift tables preferentially. 3 columns, 3–5 rows.
6. At least one `callout` (`note` / `warning` / `origin`).
7. A closing section that tells the reader what to do, not what they just read.
8. One `cta` block near the end.
9. `faqs`: **6–10 questions, each answered in 40–70 words.** Real questions from your demand
   research, not invented ones. These become `FAQPage` schema verbatim — write them as final copy.

**The answer-paragraph test:** copy any answer out of the page and read it cold. If it needs the
sentence before it, rewrite it.

## 7. Voice

Concrete beats abstract. A real process step, a real comparison, a real thing you can see on a shelf
or read on a label. No unprovable superlatives. No filler adjectives. Do not sell — the article earns
trust by being useful and honest about limits, and the CTA does the rest.

**Several articles this round earn their place by refusing something**, and that refusal is the
value, not a hedge to bury in paragraph nine: en3 rules SUBUR out of the tea use case, en2/ar1 say
SUBUR is not sidr, ms2 says SUBUR is neither kelulut nor tualang, ms4 ends at "ask your clinic".
Put the refusal where a reader will see it.

**Write in your language, not into it.** Nothing here is a translation. Even the six grouped pairs
were researched independently and landed on the same question by themselves — they compare the same
things from their own evidence, with their own examples and their own FAQs. **Structurally parallel
FAQ blocks across languages are the tell**, and round 2 caught a Malay draft mirroring the English
Manuka article's list, table and FAQ order with the facts merely reworded. Do not do that.

## 8. Internal links — required

Inside `paragraph` and `list` text you may use inline `<a href="…">` and `<strong>`.

Each article carries **3–5 outbound internal links** with descriptive anchor text — never "click
here", never a bare URL.

| Target | Path |
|---|---|
| Home | `/{lang}/` |
| Benefits — the ten ingredients | `/{lang}/benefits/` |
| Retail — where to buy | `/{lang}/retail/` |
| Why Us | `/{lang}/why-us/` |
| Contact | `/{lang}/contact/` |
| Guides index | `/{lang}/blog/` |
| Sibling articles | `/{lang}/blog/<slug>/` |

`{lang}` is your own locale. **Never link across locales.** Never invent a slug.

Several articles are explicitly *hand-off points* rather than topics to re-argue — link to them
instead of restating them. In Arabic those are `kayfa-tamiz-al-asal-al-asli`,
`hal-lil-asal-tarikh-salahiya` and `hifz-al-asal-fi-al-jaw-al-ratb`; in English
`how-to-identify-pure-honey`; in Malay `cara-kenal-madu-asli`.

### Live slugs you may link to (all 48 are published)

- **en (16):** `honey-for-couples-malaysia`, `black-seed-honey-benefits`, `how-to-identify-pure-honey`, `honeycomb-honey-malaysia`, `can-you-eat-honeycomb-wax`, `where-to-buy-raw-honey-kuala-lumpur`, `types-of-honey-in-malaysia`, `how-to-store-honey-malaysia`, `manuka-honey-vs-local-honey`, `is-malaysian-honey-local-or-imported`, `honey-with-nuts-malaysia`, `honeycomb-hantaran-gift-idea`, `is-honey-safe-during-pregnancy`, `honey-allergy-symptoms`, `honey-vs-gula-melaka`, `is-honey-vegan`
- **ms (16):** `madu-suami-isteri`, `habbatus-sauda-dan-madu`, `cara-kenal-madu-asli`, `sarang-madu-boleh-dimakan`, `madu-beku-dalam-peti-sejuk`, `beza-madu-tulen-dan-madu-campuran`, `madu-berbuih`, `waktu-terbaik-makan-madu`, `madu-campur-air-panas`, `kedai-madu-asli-selangor`, `beli-madu-online-atau-kedai-fizikal`, `hadiah-madu-untuk-raya`, `madu-manuka-vs-madu-tempatan-malaysia`, `doorgift-madu-kahwin`, `resepi-sarapan-guna-madu`, `madu-untuk-masakan`
- **ar (16):** `asal-al-zawjayn`, `habbat-al-barakah-wal-asal`, `kayfa-tamiz-al-asal-al-asli`, `ayna-ashtari-asal-fi-kuala-lumpur`, `tariqat-akl-al-asal-bil-shama`, `hifz-al-asal-fi-al-jaw-al-ratb`, `al-asal-al-malizi`, `hal-lil-asal-tarikh-salahiya`, `al-ma-al-sakhin-wal-asal`, `asal-bil-zafaran`, `limatha-yatfu-al-shama-fawq-al-asal`, `al-farq-bayn-asal-manuka-wal-asal-al-malizi`, `mukawwinat-khaltat-al-asal-bil-aashab`, `hal-al-asal-masmuh-lil-atfal-aqal-min-sana`, `shiraa-al-asal-online-fi-malizia`, `hadiyat-al-asal-lil-eid`

### Round-3 sibling slugs (being written in parallel — safe to link)

- **en:** `is-honey-in-malaysia-fake`, `what-is-sidr-honey`, `honey-in-hot-drinks-malaysia`, `baking-with-honey-malaysia`, `how-to-read-a-honey-label-malaysia`, `why-is-honey-dark-or-light`
- **ms:** `tarikh-luput-madu`, `madu-kelulut-vs-madu-tualang`, `madu-khalta`, `madu-untuk-ibu-mengandung`, `kenapa-madu-jadi-gelap`, `madu-saffron`
- **ar:** `al-farq-bayn-asal-al-sidr-wal-asal-al-malizi`, `naql-al-asal-fi-al-taira`, `al-farq-bayn-al-asal-al-kham-wal-musaffa`, `qiraat-mulsaq-al-asal-fi-malizia`, `tariqat-amal-asal-bil-mukassarat`, `hadiya-min-malizia-lil-ahl`

## 9. Focus keyword placement, and the cannibalisation check that is stricter this round

The focus keyword appears in `title`, `description`, `heading` (H1), the `answer` block, one
`heading` block, `figureAlt` if it fits naturally, and the first 100 words. That is placement, not
density.

**Before you write, grep the live articles' *secondary* `keywords` arrays in your language, not just
their focus keywords.** This is stricter than rounds 1 and 2 and it caught real collisions: the
Arabic researcher found `الفرق بين العسل بالشمع والعسل السائل` already registered on the live
`tariqat-akl-al-asal-bil-shama`, and the Malay researcher killed two candidates because
`madu berempah`, `simpan madu suhu bilik` and `madu campur air panas` were already secondary
keywords on live articles.

```bash
grep -n "keywords" -A 14 src/content/articles/<your-lang>/*.ts
```

If a term you were going to claim is already someone else's secondary keyword, pick a different one
and say so in your handback.

## 10. The file you write

One TypeScript module, exactly the shape in `src/content/articles/types.ts`. Copy the structure of a
live example first:

- en: `src/content/articles/en/how-to-store-honey-malaysia.ts`
- ms: `src/content/articles/ms/madu-berbuih.ts`
- ar: `src/content/articles/ar/al-ma-al-sakhin-wal-asal.ts`

```ts
import type { Article } from "../types";

export const article: Article = {
  slug: "…",               // exactly the slug in your map row
  title: "…",              // <= 60 chars, focus keyword near the front, unique site-wide
  heading: "…",            // the H1 — may be punchier than title
  description: "…",        // <= 155 chars, contains the focus keyword, written to earn a click
  primaryKeyword: "…",     // exactly the focus keyword from your map row
  keywords: [ … ],         // 8–12, grouped by intent, from your demand research
  published: "2026-08-25",
  updated: "2026-08-25",
  readingMinutes: N,       // body words / 200, rounded
  icon: "…",               // exactly the icon path in your map row
  figureAlt: "…",          // describes the lead photo for someone who cannot see it
  category: "…",           // short label in your language
  blocks: [ … ],
  faqs: [ … ],
  related: ["slug-a", "slug-b"],   // exactly 2, same locale, real slugs
};
```

**Write only to `src/content/articles/{lang}/{slug}.ts`.**

Do not touch any other file. Do not edit the registry (`index.ts`), the map, `articleFigures.ts`, or
another writer's article — the wiring pass does all of that centrally after all 18 files exist, so
that eighteen agents cannot collide on one shared registry.

## 11. Image

You do not generate or place the image. Your job is `figureAlt` — alt text in your language
describing the lead photo, with the focus keyword once if it fits honestly. Do not keyword-stuff it,
and do not describe something the image will not contain.

**Note for the six grouped articles:** where your row shows a group, your article may share its lead
image with its partner. That is deliberate and the wiring pass handles it — nothing extra for you to
do, but write `figureAlt` for a photograph that has to serve both articles, so keep it descriptive
of the frame rather than of your article's argument.
