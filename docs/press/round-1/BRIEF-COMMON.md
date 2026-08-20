# Round 1 — common brief (read this before writing a single line)

Applies to every article in this round, all three languages. Your own article row lives in
`ROUND-1-MAP.md`; your fact sheet is `facts-<id>.md`.

## 1. What SUBUR Honey is — the only facts you may state

Everything below is imported from `src/config/site.ts` or `src/i18n/locales/*/common.json`.
**Do not retype an address, a phone number or a URL into prose** — link to the page that holds it.

| Fact | Value |
|---|---|
| Product | A honey blend built on raw honeycomb, sold in Malaysia |
| The ten ingredients | Raw honeycomb · black seed (habbatus sauda) · saffron · ginseng root · fresh ginger · cinnamon · star anise · nutmeg · walnuts · almonds |
| Not in it | Dates (kurma). Say so plainly if the topic invites the Sunnah trio |
| Retailer | Berkat Madinah Store — the **only** seller. Two Selangor branches (Ampang Jaya, Batu Caves) plus its own Shopee storefront and its own TikTok Shop. Not in supermarkets or pharmacies |
| Contact | One WhatsApp line, used for enquiries — link to `/{lang}/contact/`, never type the number |

**Facts that do not exist. Inventing any of these fails the round:**
price · jar size in ml/g · rating or review count · customer count · JAKIM/KKM/HACCP certification ·
founding year · harvest location or country of origin of the honey · shelf life · opening hours ·
delivery times · email address · nutritional values · any percentage or dosage.

If your topic needs one of those to be answerable, say what a reader should do to find it
(ask the shop on WhatsApp, check the label) — do not fill the gap with a plausible number.

## 2. The legal ceiling — Malaysia

Malaysia's Food Regulations 1985 prohibit a food product **and its advertising** from claiming to
prevent, reduce, treat or cure any condition. Infertility, diabetes, cough, cholesterol, blood
pressure, immunity-as-protection — all off limits as claims.

- Allowed: describing what an ingredient is, how it is used, what people search for, what a seller
  may and may not legally say, and how to judge quality.
- Not allowed: "helps you conceive", "boosts immunity", "lowers sugar", "cures", "treats",
  "prevents", "clinically proven", or a study result presented as a product effect.
- **Do not cite statute numbers or penalties in body copy.** Say "Malaysia's food rules prohibit…"
  and stop. Previous versions of this site cited the wrong sub-regulation in three languages and
  invented an RM10,000 penalty figure.
- Hadith and religious material: may be quoted as *why an ingredient is honoured*, never as a
  product promise, and any quote must be followed by a line making that distinction.

## 3. Banned words — the build gate fails on these

`traditional` · `traditionally` · `tradition` · `traditions` · `Middle East` · `Middle-East` ·
`for generations` · `generational` · `studied standards`
`tradisional` · `tradisi` · `timur tengah` · `turun-temurun` · `piawaian dikaji`
`تقليدي` · `تقليديّ` · `تقاليد` · `تقليد` · `الشرق الأوسط` · `شرق أوسط` · `عبر الأجيال` · `معايير مدروسة`

Also banned by the earlier cleanup, do not reintroduce: `vegan`, any aggregate rating, "trusted by
N customers", "official supplier", "stores across Malaysia".

## 4. Article shape

800–1,000 words of body copy. Aim 950 — the nine live articles are long-form and a thin round
reads as a quality drop.

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
   research, not invented ones. These generate `FAQPage` schema verbatim — write them as final copy.

The answer-paragraph test: copy any answer out of the page and read it cold. If it needs the
sentence before it, rewrite it.

## 5. Voice

Concrete beats abstract. A real process step, a real comparison, a real thing you can see on a
shelf. No unprovable superlatives ("the best", "#1", "the finest"). No filler adjectives. Do not
sell — the article earns trust by being useful and honest about limits, and the CTA does the rest.

**Write in your language, not into it.** Nothing in this round is a translation. Different angle,
different examples, different FAQs, because different people searched differently.

## 6. Internal links — required

Inside `paragraph` / `list` text you may use inline `<a href="…">` and `<strong>`.

Each article carries **3–5 outbound internal links** with descriptive anchor text (never "click
here", never a bare URL), taken from:

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

Existing article slugs you can link to:
- en: `honey-for-couples-malaysia`, `black-seed-honey-benefits`, `how-to-identify-pure-honey`
- ms: `madu-suami-isteri`, `habbatus-sauda-dan-madu`, `cara-kenal-madu-asli`
- ar: `asal-al-zawjayn`, `habbat-al-barakah-wal-asal`, `kayfa-tamiz-al-asal-al-asli`

## 7. The file you write

One TypeScript module, exactly the shape of `src/content/articles/types.ts`. Copy the structure of
an existing article in your language before you start — e.g.
`src/content/articles/en/black-seed-honey-benefits.ts`.

```ts
import type { Article } from "../types";

export const article: Article = {
  slug: "…",               // native script for your language, lowercase, hyphenated
  title: "…",              // ≤60 chars, focus keyword near the front, unique site-wide
  heading: "…",            // the H1 — may be punchier/shorter than title
  description: "…",        // ≤155 chars, contains the focus keyword, written to earn a click
  primaryKeyword: "…",     // exactly the focus keyword from your map row
  keywords: [ … ],         // 8–12, the related set from your map row
  published: "2026-08-20",
  updated: "2026-08-20",
  readingMinutes: N,       // computed: body words ÷ 200, rounded
  icon: "/icons/ingrediant_NN.webp",   // 01 star anise · 02 saffron · 03 ginger · 04 walnuts · 05 nutmeg · 06 cinnamon · 07 black seed · 08 raw honeycomb · 09 almonds · 10 ginseng
  figureAlt: "…",          // describes the lead photo for someone who cannot see it, focus keyword only if it fits honestly
  category: "…",           // short label in your language
  blocks: [ … ],
  faqs: [ … ],
  related: ["slug-a", "slug-b"],   // 2 real slugs in YOUR locale
};
```

Do not touch any other file. Do not edit the registry, the map, or another writer's article — the
wiring pass does that.

## 8. Focus keyword placement

The focus keyword appears in: `title`, `description`, `heading` (H1), the `answer` block, one
`heading` block, `figureAlt` if it fits naturally, and the first 100 words. That is placement, not
density. If a human would notice the repetition, it is too much.

Focus keywords already owned by live articles — do not target them or a near-duplicate:
`madu suami isteri` · `habbatus sauda madu` · `cara kenal madu asli` ·
`عسل الزوجين` · `الحبة السوداء والعسل` · `كيف تميز العسل الأصلي` ·
`honey for couples malaysia` · `black seed honey` · `how to identify pure honey`
