# PRESS Round 3 — facts every article shares

Single source of truth for all 18 round-3 articles. Per-article specifics live in `ROUND-3-MAP.md`.
Carried forward from round 2 and re-verified against the repo on 2026-08-25, with one new hard
constraint at the end that did not exist in rounds 1 or 2.

## Product facts (from `src/config/site.ts` — cite the file, never retype numbers into prose)

- **Seller**: Berkat Madinah Store (`متجر بركة المدينة` in Arabic), the only place SUBUR is sold.
- **Two physical branches**, both Selangor: Ampang Jaya (Taman Putra Sulaiman) and Batu Caves
  (Prima Seri Gombak). Full addresses live in `BRANCHES` — link to `/{lang}/retail/`, never retype
  a shortened or "tidied" address into prose.
- **Online**: the store's own Shopee storefront (`arabianvillagemalaysia`) and its own TikTok Shop.
  Both are the *same seller's* channels, not third-party resellers.
- **WhatsApp** is a contact line, not a purchase channel — link to `/{lang}/contact/`, never type
  the number.
- **Ten named ingredients**, exactly: Raw Honeycomb, Star Anise, Saffron, Fresh Ginger, Walnuts,
  Nutmeg, Cinnamon, Black Seed (Habbatus Sauda), Almonds, Ginseng Root. Walnuts and almonds are
  **ground/blended into** the honey — never biteable, separable pieces.
- **Not in it**: dates (kurma). Say so plainly if a topic invites the Sunnah trio.
- **No price** is published anywhere. Do not invent one, and do not gesture at one with
  "affordable" or "premium-priced" as though a figure existed.
- **No reviews, no star ratings, no customer counts, no certifications** (no JAKIM, no KKM, no
  HACCP). All deliberately blank after a fabricated-data cleanup on the live site. Do not add any of
  it back, not even as a vague "loved by many".
- **No map feature exists anywhere on the site.** Never promise, describe or link one.
- **CORRECTION, made during round 3's adversarial review — a wholesale pathway DOES exist.**
  Round 2's brief listed "gift-box/bulk-order service" among the facts that do not exist, and
  round 3 inherited that line. It is wrong. `src/components/sections/Wholesale.astro` renders a
  **wholesale enquiry form on the homepage**; `/{lang}/contact/` and `/{lang}/retail/` both point
  at it; and `llms/{en,ms,ar}.txt` carry a whole wholesale section plus an FAQ answering **yes**.
  What does **not** exist is a published **price, MOQ or lead time** — quantity orders are arranged
  through that form. An article may say the form exists and link it; it may not invent terms.
  **Shipping outside Malaysia is likewise published, not absent:** `/{lang}/retail/` says delivery
  zones are managed on the store's Shopee and TikTok Shop and tells the reader to check there.
  And the purchase channels are **four** (two branches, Shopee, TikTok Shop) — `llms` states
  "four, and no fifth". Do not write three.
- **Not sold in supermarkets or pharmacies.**

## Physics / product facts that MUST stay consistent (rounds 1 and 2 corrected these; do not re-invert)

- **Crystallisation is normal** for raw honey and does **not by itself** prove authenticity — a
  syrup-heavy blend granulates too. Never use crystallisation alone as a purity test.
- **Density**: honeycomb wax (~0.95 g/cm³) and nut kernels (~1.0 g/cm³) are *lighter* than honey
  (~1.4 g/cm³) and **rise**. Never say comb or nuts sink or settle at the bottom.
- **MGO is not New Zealand-exclusive.** UMF is the New Zealand licensing scheme; Australia also
  sells MGO-graded manuka. Do not conflate them.
- Honey is a bee product — **never** call it or describe it as vegan.
- **Under-12-months infant safety** is a warning, never invertible into a safety endorsement for
  anyone else. Round 2 caught exactly that inversion in a Malay draft.

## NEW HARD CONSTRAINT FOR ROUND 3 — jar size and weight are OFF LIMITS ENTIRELY

Do not mention jar sizes, net weights, weight tolerances, or how long a jar lasts. Not to assert
them, and **not to say the site does not publish them either**. Skip the subject.

The reason is a live contradiction this round found and did not create:

| Surface | What it says |
|---|---|
| `src/content/llms/en.txt`, `ms.txt`, `ar.txt` | "250g, 400g and 500g jars, weight tolerance ±5% printed on every label" — stated in all three languages, in the summary line, in the buying advice, and again in the FAQs |
| `src/config/site.ts` (the declared single source of truth) | no jar size, no weight, no tolerance |
| `AI-FACTS.yml` (generated from `site.ts`, gated by `check:ai`) | neither |
| `docs/press/round-2/FACTS-COMMON.md` | lists **"jar size in ml/g"** among the facts that do not exist, and says inventing one fails the round |
| `src/content/articles/en/honey-for-couples-malaysia.ts` + `ms/madu-suami-isteri.ts` | print "250g" and "lasts a couple roughly three to four weeks" |

So the site's writers' brief forbids exactly what the site's own machine-readable brief publishes,
and two launch articles side with the machine brief. Both cannot be right.

**This is an owner decision, not a writer's.** Either the label genuinely carries those sizes and
that tolerance — in which case they belong in `site.ts` so every surface imports them — or they are
residue from before the fabricated-data cleanup and must come out of three `llms` files and two
live articles. Nobody on this round can determine which, so round 3 **neither repeats the claim nor
contradicts it**. Logged as an open item in `GATE.md` and `DECISIONS.md`.

## Legal ceiling — Malaysia Food Regulations 1985

Food and its advertising may **not** claim to prevent, treat, reduce or cure any condition.
Fertility is a condition, so fertility *promises* are illegal, not merely aggressive marketing.

- **Allowed**: describing what an ingredient is, how it is used, what people search for, what a
  seller may and may not legally say, how to judge quality, and reporting what recognised
  public-health bodies say — cited generically ("health authorities", "medical sources"), never as
  an invented Malaysian statistic.
- **Not allowed**: "helps you conceive", "boosts immunity", "lowers sugar", "cures", "treats",
  "prevents", "clinically proven", a glycaemic-index number presented as a health verdict, or a
  study result presented as a product effect.
- **No statute numbers or penalty figures in body copy.** Say "Malaysia's food rules prohibit…" and
  stop. Round 1's llms files cited sub-reg 18(6) wrongly and the Malay one invented an RM10,000
  penalty; do not cite any of it.
- **Anything sexual, aphrodisiac or performance-framed is out.** The Search Console evidence in
  `gsc-demand.md` contains real demand for it (`yemeni honey sexual benefits`, `aphrodisiac honey
  near me`, `honey pack for men`). That demand is real and this site still may not serve it.

## SUBUR is not sidr honey, not manuka, not single-origin

The Search Console data is dominated by `yemeni honey` and `yemeni sidr honey` — that is the
retailer's *other* stock on `madinah.com.my`, not SUBUR. SUBUR is a ten-ingredient raw honeycomb
blend. Any article touching that space must be honest explainer or comparison content that never
implies SUBUR is a sidr or a single-origin honey.

## Banned terms (mechanical gate — `scripts/qa/banned-terms.mjs`, src **and** `--dir=dist`)

English: `traditional`, `traditionally`, `tradition(s)`, `Middle East`/`middle-east`,
`for generations`, `generational`, `studied standards`.
Malay: `tradisional`, `tradisi`, `timur tengah`, `turun-temurun`, `piawaian dikaji`.
Arabic: `تقليدي`, `تقليديّ`, `تقاليد`, `تقليد`, `الشرق الأوسط`, `شرق أوسط`, `عبر الأجيال`,
`معايير مدروسة`.

Treat the **underlying claim** as banned, not only the exact string — round 2 found Arabic
`شرق أوسطية` used as an adjective in a generated surface and had to rewrite it.

## Article mechanics (site convention, not the generic PRESS default)

- **One lead image per article**, 4:3 WebP, ≤ 110 KB — not hero + inline + OG. Filename
  `article-<asset-key>.webp` in `public/images/`, registered in `src/config/articleFigures.ts`,
  resolved through `getAssetKey()` (the group's English slug when grouped, else the article's own
  slug).
- **Round-3 images are 886×665**, the free generator's hard cap, and `articleFigures.ts` declares
  that real size. See `IMAGE-INVENTORY.md`.
- Word count band: **800–1,000 words** of body copy — the `answer` block, headings, paragraphs,
  lists, steps, tables, callouts and the cta. **FAQs are excluded from this count** but are still
  real content and still shipped as `FAQPage` schema. Aim near 950; the live articles are long-form
  and a thin round reads as a quality drop across the section.
- Exact `Article` TypeScript shape: `src/content/articles/types.ts`.
- `related`: exactly 2 slugs, same locale, real existing or same-round slugs.
- Body-copy internal links go to real routes only: `/{lang}/`, `/{lang}/benefits/`,
  `/{lang}/retail/`, `/{lang}/why-us/`, `/{lang}/contact/`, `/{lang}/blog/`, or
  `/{lang}/blog/<real-slug>/`. Never link across locales. Never invent a slug.
- Malaysia market only. The Arabic audience is Arabic speakers **inside Malaysia**, not the Gulf.

## Icon keys (the `icon:` field) — they are the ten ingredient icons

`ingrediant_01` star anise · `_02` saffron · `_03` fresh ginger · `_04` walnuts · `_05` nutmeg ·
`_06` cinnamon · `_07` black seed · `_08` raw honeycomb · `_09` almonds · `_10` ginseng root.
Path form: `/icons/ingrediant_08.webp`.
