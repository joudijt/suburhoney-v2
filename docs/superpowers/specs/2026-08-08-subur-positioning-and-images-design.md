# Subur Honey: positioning rewrite and site-wide image framing

Date: 2026-08-08
Status: approved
Repo: `D:\suburhoney-v2` (branch `master`)

## Problem

Three separate problems, reported together.

1. **The positioning is false.** The site describes Subur as "a traditional Middle Eastern
   honey blend ... built on generations of knowledge". The product is not a traditional
   Middle Eastern honey. This claim is currently the site's `<title>`, its hero heading, its
   meta description, its JSON-LD `Product` description, and roughly 250 sentences besides.
2. **"Studied standards" must go.** Commit `c402496` replaced the earlier "traditional
   recipe" wording with "secret recipe, precisely studied standards" (AR: "معايير مدروسة
   بدقة", MS: "piawaian dikaji dengan teliti"). That phrase is also rejected.
3. **Images are cropped and clipped.** Measured at 1440x900 and 390x844:

   | Image | Desktop crop | Mobile crop | Other |
   |---|---|---|---|
   | `hero-bg-{latin,ar}` | 6% | **69%** | top 80px sits under the fixed header |
   | `ritual-bg-{latin,ar}` | 11% (ar 17%) | 33% | |
   | blog card figures | 23% | 31% | |
   | `page-benefits` | 0% | 33% | via the `mobileCrop` CSS rule |

   The hero is the worst case: a 3:2 studio photo rendered into a 0.462 portrait box, so on
   a phone the jar and its label are sliced apart, and the honey dipper at the top of the
   frame is cut by the translucent navbar on every viewport.

## Decisions taken

Confirmed by the user before this spec was written:

- **Positioning**: a quality-blend / craft angle, neutral on geography, written in plain
  words a customer understands without effort.
- **Word policy**: remove "traditional" everywhere, including the blog articles — not only
  the marketing surfaces.
- **Hero on mobile**: generate real portrait crops rather than tuning `object-position`.

## Part 1 - Positioning

### The frame

An honest, well-made honey blend for married couples in Malaysia. No country of origin, no
heritage, no lineage, no standards language.

Every claim must be one the site can already support:

- ten ingredients, all named on the label
- a raw honeycomb base rather than a processed syrup
- no artificial colours or flavours
- vegan, all natural
- made for married couples (this is printed on the physical label)
- trusted by more than 5,000 customers in Malaysia
- sold through Shopee, TikTok Shop and Berkat Madinah Store

### Language rules

- Short words, short sentences. Aim for what an ordinary shopper reads without slowing down.
- Banned as tone words: "meticulously", "heritage", "time-honoured", "curated", "artisanal",
  "generations", "legacy", "ancient".
- **Do not write "small batch", "hand made", "lab tested", "cold pressed" or any other
  production claim.** Nothing in the project verifies them. The craft tone must come from
  concrete facts only. This continues the rule established by the 2026-07-25 certification
  sweep: no claim the brand cannot stand behind.
- The existing no-medical-claims rule is unchanged and still binding.

### Sample copy (English; Arabic and Malay are written natively, never translated literally)

| Slot | Current | New |
|---|---|---|
| Hero heading / accent | "Nature's secret recipe, precisely studied standards," / "Perfected through generations." | "Real honey. Ten real ingredients." / "Made for married couples." |
| Hero description | "A traditional Middle Eastern honey blend made for married couples across Malaysia, built on generations of knowledge for fertility, vitality, and strength." | "A honey blend made for married couples in Malaysia. Raw honeycomb, nuts, spices and roots - all ten named on the label." |
| Hero badges | ALL NATURAL / SECRET RECIPE, STUDIED STANDARDS / REAL HONEY / FOR MARRIED COUPLES / VEGAN | ALL NATURAL / 10 NAMED INGREDIENTS / RAW HONEYCOMB / FOR MARRIED COUPLES / VEGAN |
| Footer copyright | "Subur Honey. Secret Recipe, Studied Standards. Generational Knowledge." | "Subur Honey. Ten ingredients. All named. Nothing hidden." |
| why-us page title | "Why Choose Subur Honey \| Secret Recipe, Studied Standards, Transparent Ingredients" | "Why Choose Subur Honey \| Ten Named Ingredients, Raw Honeycomb, Nothing Hidden" |

These are the anchors. Every other sentence is rewritten to sit consistently beside them.

### Known conflict, accepted

The jar photograph (`public/jarncap.webp`, and every hero and ritual photo containing the
jar) carries a small round seal on its label that appears to read "Traditional Recipe". The
word ban applies to site text only. Baked-in label pixels are a physical product asset and
are out of scope. This was flagged to the user before approval.

## Part 2 - The sweep

### Terms removed

English: `traditional`, `tradition`, `traditionally`, `Middle East`, `Middle Eastern`,
`for generations`, `generational`, `studied standards`.

Arabic: `تقليدي`, `تقليد`, `تقاليد`, `الشرق الأوسط`, `شرق أوسط`, `عبر الأجيال`,
`معايير مدروسة`.

Malay: `tradisi`, `tradisional`, `Timur Tengah`, `turun-temurun`, `piawaian dikaji`.

### Surfaces

24 files carry hits:

- `src/i18n/locales/{en,ar,ms}/common.json` (27/26/26 hits) - SEO title and description, hero,
  benefits, ingredients alt text and descriptions, wholesale, FAQ, final CTA, footer
- `src/content/pages/{en,ar,ms}/{benefits,why-us,contact,retail}.ts`
- `src/content/articles/{en,ar,ms}/*.ts` - 9 articles; heaviest are the couples article
  (16 hits per locale) and the black-seed article (12-13)
- `src/content/llms/{en,ar,ms}.txt`
- `src/pages/llms.txt.ts`, `src/content/articles/types.ts`,
  `src/components/article/Blocks.astro` - one hit each, check whether it is user-facing text
  or an identifier before touching

### Method

- **Not a find-and-replace.** Each occurrence is rewritten in the context of its own
  sentence, in its own language. A mechanical swap produces broken Arabic and Malay.
- Arabic and Malay are rewritten natively to say the same thing, not translated word by word
  from the new English.
- Alt text follows: "Star anise, a traditional spice used in the Subur Honey blend" becomes
  "Star anise, one of the ten ingredients in the Subur Honey blend".
- Blog articles keep their ingredient-history passages, reworded away from the banned terms.
  "Nigella sativa is genuinely well studied compared with most traditional ingredients"
  becomes a sentence about the ingredient itself with no heritage framing.
- **URLs and slugs do not change.** No redirects, no sitemap churn.
- The `why-us` comparison table row `["Recipe origin", "Traditional Middle Eastern", ...]`
  is replaced with a row that compares something true, e.g. ingredient disclosure.
- JSON-LD strings are generated from the same locale JSON and content files, so they follow
  automatically. Verify in built HTML rather than assuming.

## Part 3 - Images

### The rule

**A fixed-ratio box gets a real asset cropped to that ratio. CSS `object-cover` may never
crop more than about 5% of a frame.**

Art direction happens in the image pipeline, not in `object-position` guesswork. This
extends the pattern already used by `scripts/optimize-images.mjs` and
`scripts/make-page-figures.mjs`.

### Changes

1. **Hero photo clears the navbar.** The photo layer in `src/components/sections/Hero.astro`
   moves from `absolute inset-0 -z-20` to `absolute inset-x-0 bottom-0 top-20 -z-20`, so its
   top edge is the header's bottom edge (the header is `fixed` and `h-20`). Section
   `min-h-[100svh]` and the existing `pt-20` on content are unchanged.

2. **Hero gets portrait crops for mobile.** New `hero-bg-latin-portrait` and
   `hero-bg-ar-portrait` at 3:4, cropped from the existing sources so the jar and its label
   are whole, produced by a committed script and registered in the `TARGETS` table of
   `scripts/optimize-images.mjs`. Served with `<picture>` and
   `media="(max-width: 1023px)"`, the wide file staying as the `<img>` fallback.
   `hero-bg-ar`'s source is 1264x843, so its 3:4 crop is about 630px wide - adequate for a
   390px viewport at roughly 1.6x, and recorded here rather than discovered later.

3. **Ritual mobile card renders at native ratio.** The card's `aspect-square sm:aspect-[4/3]`
   becomes `aspect-[3/2]`, matching the source photos exactly, so the 33% mobile crop goes to
   zero. The desktop background layer keeps `object-cover` (unavoidable for a full-bleed
   section) and its `object-position` is verified against where the subject actually lands.

4. **Blog cards match their figures.** The listing card image band in
   `src/pages/[lang]/blog/index.astro` moves from a fixed `h-44 md:h-52` to `aspect-[4/3]`.
   All three article figures are already 4:3, so crop goes to zero and the cards stay uniform.

5. **`page-benefits` gets a real square derivative.** The `mobileCrop` CSS rule in
   `src/config/pageFigures.ts` is replaced by a genuine square crop of the photo framed on
   the man and the jar, served the same way as the hero portraits. The desktop overlay
   treatment is unchanged.

6. **Any other image found cropping beyond the 5% threshold during verification is fixed the
   same way** - a real derivative if the box ratio is fixed, otherwise a box that matches the
   asset.

## Verification

A Playwright pass, run from inside the project directory, over every page in all three
locales at 390, 430, 768, 1024 and 1440.

For every visible `<img>`:

- `naturalWidth > 0` and the element is actually displayed
- rendered ratio is within 0.02 of natural ratio, unless the image is a declared
  art-directed derivative for that breakpoint
- for hero background layers, `img.getBoundingClientRect().top >= header.getBoundingClientRect().bottom`

Per page: no horizontal overflow, zero console errors, zero responses >= 400.

Then:

- grep the whole of `src/` and `dist/` for every banned term; the only permitted survivors
  are non-user-facing identifiers, each listed explicitly in the final report
- `npm run build` clean, and the built `dist/{en,ar,ms}/index.html` checked for the new
  `<title>`, meta description and JSON-LD `Product` description
- screenshots looked at, not only measured

## Out of scope

- The jar label artwork and any other baked-in pixels
- URL, slug or sitemap structure
- Any new page or section
- The `robots.txt` / `sitemap.xml` / prerendering debt already recorded for this project
