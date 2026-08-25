# Round 2 — common brief (read this before writing a single line)

Applies to every article in this round, all three languages. Your own article row lives in
`ROUND-2-MAP.md`; the shared facts and legal ceiling are in `FACTS-COMMON.md`. Read both before you
start, plus one live example article in your own language (named below) to copy the exact code
shape from.

## 1. What SUBUR Honey is — the only facts you may state

Everything is imported from `src/config/site.ts` or `src/i18n/locales/*/common.json`.
**Do not retype an address, a phone number or a URL into prose** — link to the page that holds it.

| Fact | Value |
|---|---|
| Product | A raw honeycomb blend of ten named ingredients, sold in Malaysia |
| The ten ingredients | Raw honeycomb · black seed (habbatus sauda) · saffron · ginseng root · fresh ginger · cinnamon · star anise · nutmeg · walnuts · almonds |
| Walnuts / almonds | **Ground/blended into** the honey — never biteable, separable pieces |
| Not in it | Dates (kurma). Say so plainly if the topic invites the Sunnah trio |
| Retailer | Berkat Madinah Store — the **only** seller. Two Selangor branches (Ampang Jaya, Batu Caves) plus its own Shopee storefront and its own TikTok Shop. Not in supermarkets or pharmacies |
| Contact | One WhatsApp line, used for enquiries — link to `/{lang}/contact/`, never type the number |

**Facts that do not exist. Inventing any of these fails the round:**
price · jar size in ml/g · rating or review count · customer count · JAKIM/KKM/HACCP certification ·
founding year · harvest location or country of origin of the honey · shelf life · opening hours ·
delivery times · email address · nutritional values · any percentage or dosage · gift-box/bulk-order
service · a "map" feature (none exists anywhere on the site).

If your topic needs one of those to be answerable, say what a reader should do to find it
(ask the shop on WhatsApp, check the label) — do not fill the gap with a plausible number.

## 2. Physics/product facts you must not invert (Round 1 corrected these once already)

- **Crystallisation is normal** for raw honey and does **not by itself** prove authenticity.
- **Honeycomb wax (~0.95 g/cm³) and nuts (~1.0 g/cm³) are lighter than honey (~1.4 g/cm³) and
  float/rise** — never say they sink or settle at the bottom.
- **MGO grading is not New Zealand-exclusive.** UMF is the NZ-specific scheme; Australia also sells
  MGO-graded Manuka.
- Honey is a bee product — **never** call it or describe it as vegan (except the one article whose
  entire job is answering that exact question factually, en6).

## 3. The legal ceiling — Malaysia

Malaysia's Food Regulations 1985 prohibit a food product **and its advertising** from claiming to
prevent, reduce, treat or cure any condition. Infertility, diabetes, cough, cholesterol, blood
pressure, immunity-as-protection, acne/skin conditions — all off limits as claims.

- Allowed: describing what an ingredient is, how it is used, what people search for, what a seller
  may and may not legally say, how to judge quality, and citing what recognised public-health bodies
  say (for the two safety articles — pregnancy, allergy — cite generically: "health authorities",
  "medical sources", not an invented Malaysian statistic).
- Not allowed: "helps you conceive", "boosts immunity", "lowers sugar", "cures", "treats",
  "prevents", "clinically proven", a glycaemic-index number presented as a health verdict, or a
  study result presented as a product effect.
- **Do not cite statute numbers or penalties in body copy.** Say "Malaysia's food rules prohibit…"
  and stop.
- Two articles this round sit closer to the line than anything Round 1 shipped and need extra care:
  **en3 (pregnancy)** — report consensus, do not advise, no product-benefit claim; **en4 / ar4**
  (allergy / infant safety) — warning language only ("not intended for…"), never inverted into an
  implied safety promise for anyone else.

## 4. Banned words — the build gate fails on these

`traditional` · `traditionally` · `tradition` · `traditions` · `Middle East` · `Middle-East` ·
`for generations` · `generational` · `studied standards`
`tradisional` · `tradisi` · `timur tengah` · `turun-temurun` · `piawaian dikaji`
`تقليدي` · `تقليديّ` · `تقاليد` · `تقليد` · `الشرق الأوسط` · `شرق أوسط` · `عبر الأجيال` · `معايير مدروسة`

Also banned by the earlier cleanup, do not reintroduce: `vegan` (as a claim about SUBUR — en6 states
the *category* fact that honey is not vegan, which is different from claiming SUBUR "is vegan"),
any aggregate rating, "trusted by N customers", "official supplier", "stores across Malaysia".

## 5. Article shape

800–1,000 words of body copy. Aim 950 — the live articles are long-form and a thin round reads as a
quality drop.

Order:
1. `answer` block **first, always**. `question` = the query a reader typed. `answer` = 40–60 words,
   self-contained, quotable with nothing around it. This is the passage AI engines lift.
2. An opening `paragraph` that earns the read.
3. **5–7 `heading` blocks**, each phrased as a question a real person asks, each with an `id`
   (kebab-case, ASCII, unique in the article — it is the anchor the table of contents jumps to).
4. **Directly under every heading: one 40–70 word answer paragraph that stands alone.** Then depth
   — supporting paragraphs, a `list`, a `steps` block, an example.
5. **At least one `table`** — answer engines lift tables preferentially. 3 columns, 3–5 rows.
6. At least one `callout` (`note` / `warning` / `origin`).
7. A closing section that tells the reader what to do, not what they just read.
8. One `cta` block near the end.
9. `faqs`: **6–10 questions**, each answered in 40–70 words. Real questions from the demand
   research (your map row's related-keyword list and the demand file section it cites), not
   invented ones. These generate `FAQPage` schema verbatim — write them as final copy.

The answer-paragraph test: copy any answer out of the page and read it cold. If it needs the
sentence before it, rewrite it.

## 6. Voice

Concrete beats abstract. A real process step, a real comparison, a real thing you can see on a
shelf or read on a label. No unprovable superlatives ("the best", "#1", "the finest"). No filler
adjectives. Do not sell — the article earns trust by being useful and honest about limits, and the
CTA does the rest.

**Write in your language, not into it.** Nothing in this round is a translation. Different angle,
different examples, different FAQs, because different people searched differently — this applies
even to the three G6 Manuka articles, which compare the same two categories but from independent
research with their own examples.

## 7. Internal links — required

Inside `paragraph` / `list` text you may use inline `<a href="…">` and `<strong>`.

Each article carries **3–5 outbound internal links** with descriptive anchor text (never "click
here", never a bare URL) — your map row's "Links out" list is the starting set; you may swap in a
sibling article link where it reads more naturally.

| Target | Path |
|---|---|
| Home | `/{lang}/` |
| Benefits — the ten ingredients | `/{lang}/benefits/` |
| Retail — where to buy | `/{lang}/retail/` |
| Why Us | `/{lang}/why-us/` |
| Contact | `/{lang}/contact/` |
| Guides index | `/{lang}/blog/` |
| Sibling articles | `/{lang}/blog/<slug>/` — existing and new, see your map row |

`{lang}` is your own locale. Never link across locales.

### Existing article slugs you can link to (all 30 are live)

- **en (10):** `honey-for-couples-malaysia`, `black-seed-honey-benefits`, `how-to-identify-pure-honey`, `honeycomb-honey-malaysia`, `can-you-eat-honeycomb-wax`, `where-to-buy-raw-honey-kuala-lumpur`, `types-of-honey-in-malaysia`, `how-to-store-honey-malaysia`, `manuka-honey-vs-local-honey`, `is-malaysian-honey-local-or-imported`
- **ms (10):** `madu-suami-isteri`, `habbatus-sauda-dan-madu`, `cara-kenal-madu-asli`, `sarang-madu-boleh-dimakan`, `madu-beku-dalam-peti-sejuk`, `beza-madu-tulen-dan-madu-campuran`, `madu-berbuih`, `waktu-terbaik-makan-madu`, `madu-campur-air-panas`, `kedai-madu-asli-selangor`
- **ar (10):** `asal-al-zawjayn`, `habbat-al-barakah-wal-asal`, `kayfa-tamiz-al-asal-al-asli`, `ayna-ashtari-asal-fi-kuala-lumpur`, `tariqat-akl-al-asal-bil-shama`, `hifz-al-asal-fi-al-jaw-al-ratb`, `al-asal-al-malizi`, `hal-lil-asal-tarikh-salahiya`, `al-ma-al-sakhin-wal-asal`, `asal-bil-zafaran`

### Round 2 sibling slugs (your own language's other 5, all being written in parallel — safe to link)

- **en:** `honey-with-nuts-malaysia`, `honeycomb-hantaran-gift-idea`, `is-honey-safe-during-pregnancy`, `honey-allergy-symptoms`, `honey-vs-gula-melaka`, `is-honey-vegan`
- **ms:** `beli-madu-online-atau-kedai-fizikal`, `hadiah-madu-untuk-raya`, `madu-manuka-vs-madu-tempatan-malaysia`, `doorgift-madu-kahwin`, `resepi-sarapan-guna-madu`, `madu-untuk-masakan`
- **ar:** `limatha-yatfu-al-shama-fawq-al-asal`, `al-farq-bayn-asal-manuka-wal-asal-al-malizi`, `mukawwinat-khaltat-al-asal-bil-aashab`, `hal-al-asal-masmuh-lil-atfal-aqal-min-sana`, `shiraa-al-asal-online-fi-malizia`, `hadiyat-al-asal-lil-eid`

## 8. The file you write

One TypeScript module, exactly the shape of `src/content/articles/types.ts`. Copy the structure of
a **live example** before you start:

- en: `src/content/articles/en/how-to-store-honey-malaysia.ts`
- ms: `src/content/articles/ms/madu-berbuih.ts`
- ar: `src/content/articles/ar/al-ma-al-sakhin-wal-asal.ts`

```ts
import type { Article } from "../types";

export const article: Article = {
  slug: "…",               // exactly the slug given in your map row
  title: "…",              // ≤60 chars, focus keyword near the front, unique site-wide
  heading: "…",            // the H1 — may be punchier/shorter than title
  description: "…",        // ≤155 chars, contains the focus keyword, written to earn a click
  primaryKeyword: "…",     // exactly the focus keyword from your map row
  keywords: [ … ],         // 8–12, the related set from your map row
  published: "2026-08-25",
  updated: "2026-08-25",
  readingMinutes: N,       // computed: body words ÷ 200, rounded
  icon: "…",                // exactly the icon path given in your map row
  figureAlt: "…",          // describes the lead photo for someone who cannot see it, focus keyword only if it fits honestly
  category: "…",           // short label in your language
  blocks: [ … ],
  faqs: [ … ],
  related: ["slug-a", "slug-b"],   // exactly the 2 slugs given in your map row's "Related articles"
};
```

**Write your file to exactly this path** (your own language and slug):
`src/content/articles/{lang}/{slug}.ts`

Do not touch any other file. Do not edit the registry (`index.ts`), the map, `articleFigures.ts`, or
another writer's article — the wiring pass does that centrally, after all 18 files exist, to avoid
eighteen agents colliding on one shared registry file.

## 9. Focus keyword placement

The focus keyword appears in: `title`, `description`, `heading` (H1), the `answer` block, one
`heading` block, `figureAlt` if it fits naturally, and the first 100 words. That is placement, not
density. If a human would notice the repetition, it is too much.

**Every focus keyword already owned — do not target any of these or a near-duplicate:**

30 live keywords — `madu suami isteri` · `habbatus sauda madu` · `cara kenal madu asli` ·
`honeycomb honey malaysia` · `can you eat honeycomb wax` · `where to buy raw honey in kuala lumpur` ·
`types of honey in malaysia` · `how to store honey malaysia` · `manuka honey vs local honey` ·
`is honey in malaysia local or imported` · `sarang madu boleh dimakan` · `madu beku dalam peti sejuk` ·
`beza madu tulen dan madu campuran` · `madu berbuih` · `waktu terbaik makan madu` ·
`madu campur air panas` · `kedai madu asli selangor` · `عسل الزوجين` · `الحبة السوداء والعسل` ·
`كيف تميز العسل الأصلي` · `أين أشتري عسل في كوالالمبور` · `طريقة أكل العسل بالشمع` ·
`طريقة حفظ العسل في الجو الرطب` · `عسل ماليزي` · `هل للعسل تاريخ صلاحية` ·
`هل الماء الساخن يفسد العسل` · `عسل بالزعفران`

Plus the other 17 focus keywords in this round's own map (listed in full in `ROUND-2-MAP.md`) — no
two of the 18 target the same term.

## 10. Image

You do not generate or place the image. Your job is `figureAlt` (translated alt text describing the
lead photo, focus keyword once if it fits) and, if your row's "Image key" differs from your slug
(only the two G6 Manuka articles, ms3 and ar2 — both reuse the Round-1 English image), nothing extra
to do — the wiring pass wires the figure lookup centrally via `getAssetKey()`.
