# PRESS Round 2 — facts every article shares

Single source of truth for all 18 round-2 articles. Per-article specifics live in
`ROUND-2-MAP.md`; this file is the common ground every writer agent is briefed against so no fact
gets retyped-and-drifted eighteen times.

## Product facts (from `src/config/site.ts` — cite the file, never retype numbers into prose)

- **Seller**: Berkat Madinah Store (`متجر بركة المدينة` in Arabic), the only place SUBUR is sold.
- **Two physical branches**, both Selangor: Ampang Jaya (Taman Putra Sulaiman) and Batu Caves
  (Prima Seri Gombak). Full addresses in `BRANCHES` — never retype a shortened or "tidied" form.
- **Online**: the store's own Shopee storefront (`arabianvillagemalaysia`) and TikTok Shop. Both
  are the *same seller's* channels, not third parties.
- **WhatsApp** `+60 11-1111 9912` is a contact line, not a purchase channel.
- **Ten named ingredients**, exactly: Raw Honeycomb, Star Anise, Saffron, Fresh Ginger, Walnuts,
  Nutmeg, Cinnamon, Black Seed (Habbatus Sauda), Almonds, Ginseng Root. Walnuts and almonds are
  **ground/blended into** the honey — never describe them as biteable, separable pieces a buyer
  bites into or picks out.
- **No price** is published anywhere. Do not invent one, do not say "affordable" or "premium-priced"
  as if a figure exists.
- **No reviews, no star ratings, no customer counts, no certifications.** All deliberately blank —
  this was a fabricated-data cleanup on the live site. Do not add any of it back, even as a vague
  "loved by many" gesture.
- **No map feature exists anywhere on the site.** Never promise, describe or link one. Retail
  location info is text addresses on `/retail/` only.

## Physics / product facts that MUST stay consistent (round 1 corrected these; do not re-invert them)

- **Crystallisation is normal** for raw honey and does **not by itself** prove authenticity — a
  syrup-heavy blend can granulate too. Never use crystallisation as a purity test on its own.
- **Density**: honeycomb wax (~0.95 g/cm³) and nuts (~1.0 g/cm³) are *lighter* than honey
  (~1.4 g/cm³) and **rise** / float. Never say comb or nuts sink or settle at the bottom.
- **MGO is not New Zealand-exclusive.** UMF is the New Zealand-specific licensing scheme; Australia
  also sells MGO-graded manuka. Do not conflate the two schemes or imply MGO is a NZ mark.
- Honey is a bee product — **never call it or describe it as vegan.**

## Legal ceiling — Malaysia Food Regulations 1985

Food and its advertising may **not** claim to prevent, treat, reduce or cure any condition.
Fertility is a condition — fertility *promises* are illegal, not just aggressive marketing.
Traditional-use framing is fine as a *cultural/usage* note; medical verbs, dosage-as-treatment
claims, and any cause→cure sentence structure are not. No statute numbers or regulation citations
belong in body copy (round 1 got sub-reg 18(6) wrong once already — don't cite it at all).

Discarded-topic list carried over from round 1 (still correct, still off-limits as direct claims):
halal certification (site publishes none), explicit honey-per-day dosage framing, honey for
infants/toddlers as a standalone topic (the under-1-year rule is a safety caveat, not a page),
royal-honey-sachet-style named-product claims.

## Banned terms (mechanical gate — `scripts/qa/banned-terms.mjs`)

English: `traditional`, `traditionally`, `tradition(s)`, `Middle East`/`middle-east`,
`for generations`, `generational`, `studied standards`.
Malay: `tradisional`, `tradisi`, `timur tengah`, `turun-temurun`, `piawaian dikaji`.
Arabic: `تقليدي`, `تقليديّ`, `تقاليد`, `تقليد`, `الشرق الأوسط`, `شرق أوسط`, `عبر الأجيال`,
`معايير مدروسة`.
These fail the build gate in **both** src and `--dir=dist` modes. Do not use any of them or an
obvious paraphrase that keeps the same claim (e.g. Arabic "شرق أوسطية" as an adjective was found
live in a generated surface during round 2 Stage 0 and was rewritten — treat the underlying claim,
not just the exact string, as banned).

## Article mechanics (site convention, not the generic PRESS default)

- **One lead image per article**, 4:3 WebP, ≤ 110 KB, matching round 1's convention — not hero +
  inline + OG. Filename `article-<canonical-slug>.webp` in `public/images/`, registered in
  `src/config/articleFigures.ts`, keyed via `getAssetKey()` (group's English slug if grouped,
  else the article's own slug).
- Word count band: **800–1,000 words** of body copy (answer + headings + paragraphs + lists/
  steps/table/callouts/cta — FAQs excluded from this count, but FAQs are still real content).
  Sits at the top of the band, matching the site's existing long-form articles.
- Exact `Article` TypeScript shape: `src/content/articles/types.ts`. Study a live example before
  writing: `src/content/articles/en/how-to-store-honey-malaysia.ts` (full shape reference).
- `related`: 2 slugs, same locale, real existing or round-2 article slugs.
- Internal links inside body copy (`<a href="/{lang}/blog/{slug}/">`) go to real routes only —
  never invent a slug. 3–5 outbound total including the `related` array links don't count toward
  this; body-copy anchors are separate and must point at real pages (money pages `/en/benefits/`,
  `/en/retail/`, `/en/why-us/`, `/en/#ingredients`, or sibling articles).
- Malaysia market only. Arabic audience is Arabic speakers **inside Malaysia**, not the Gulf.
