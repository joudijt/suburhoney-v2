# Round 4 — common brief (delta on round 3)

**Round 3's brief still governs**: `docs/press/round-3/BRIEF-COMMON.md`. Read it in full — the
article shape, the answer-first rule, the meta limits, the linking rules, the voice and the ban list
are unchanged. This file records only what is different in round 4, plus the two things that bit
round 3 and must not bite again.

## Read, in this order

1. `docs/press/round-3/BRIEF-COMMON.md` — the binding rules.
2. `docs/press/round-3/FACTS-COMMON.md` — product facts, ceiling, banned terms.
   **Note its CORRECTION block: a wholesale enquiry pathway DOES exist**; what is not published is a
   price, MOQ or lead time.
3. `docs/press/round-3/FACTS-VERIFIED.md` — the 90%/MOH figures, the sidr fence, kelulut/tualang
   naming logic, Malaysian label law, **and the honey-to-sugar baking arithmetic**.
4. `docs/press/round-4/FACTS-VERIFIED.md` — **new this round**: Regulation 130A, the KKM Autentik
   holders list, and the organic-honey position.
5. `docs/press/round-4/ROUND-4-MAP.md` — your row and your fence.
6. Your language's `demand-*.md` candidate section — that is your fact sheet.

## What is different this round

**The round is 13 articles, not 18** — 5 EN, 4 MS, 4 AR. All three researchers independently found
fewer than six defensible topics against 66 live articles. Nothing is padded, so no article here is
filler and every one has a real gap behind it.

**Most articles pair with a LIVE article, not a new one.** Six of the seven grouped articles have a
partner that is already published. **Read your partner before you write.** You are not translating
it and it is not translating you — but you must not contradict it, and you must not mirror its
structure. Two groups are **three-language** (G10 pregnancy, G16 sugar substitution), which is a
first for this site and makes structural parallelism the single easiest way to fail.

**Word band.** Target the same place round 3 landed: **1,300–1,500 words in the rendered article
region** (which includes the FAQ block). In draft terms that is roughly 950–1,000 words of body copy
excluding FAQs. Round 3 was written at the very top of the band and every fix pass pushed articles
over it, costing three extra trim rounds — **leave yourself headroom.**

## The two round-3 failures you must not repeat

**1. Fabrication by denial.** Round 3 shipped an article that *denied* three things the site
publishes — a bulk pathway, shipping guidance, and the number of purchase channels. It invented
nothing; it denied. **A denial is exactly as false as an invention.** Before you write "the site does
not publish X", grep for X in `src/content/llms/*.txt`, `src/content/pages/`, `src/components/` and
`src/config/site.ts`. The purchase channels are **four** (two Selangor branches, Shopee, TikTok
Shop) — never three.

**2. Cross-language contradiction.** Round 3's English fact-check repeats and attributes the 90%
fake-honey figure, while a live Malay article promises the site *does not repeat* that figure. Three
reviewers, one per language, and none could see it. If your article touches a claim that is the same
claim in any language — a statistic, a physical fact, or a statement about what the brand will or
will not say — **check the other two languages before writing it.**

## Facts that are new and quotable this round

From `docs/press/round-4/FACTS-VERIFIED.md` only:

- **Regulation 130A** — Malaysia's kelulut-specific honey standard, **in force since 1 March 2026**.
  Present tense. Categories verified (moisture, ash, trehalulose/fructose/glucose/sucrose, HMF, pH,
  microbiological limits, mandatory "Kelulut Honey" labelling). **No numeric threshold may be
  published** — the values were not verified. **SUBUR is not kelulut honey**, so 130A does not apply
  to it.
- **The KKM Autentik holders list** — real, public, dated 23 July 2025, specifically the honey list,
  with company names, certificate serials and expiry dates. **The scheme is voluntary**, so absence
  proves nothing. **Do not count the holders.** SUBUR is not on it and publishes no certification.
- **Organic honey** — myOrganic covers crops, livestock and aquaculture, **not honey or beekeeping**;
  MS 1529 is plant-based; the EU requires roughly a 3 km forage radius; the USDA NOP has no
  apiculture standard.

## Standing bans, unchanged

No price · **no jar size, net weight, tolerance or "how long a jar lasts"** (D26 — not even to deny
it) · no ratings, reviews or customer counts · no certification claim for SUBUR · no map feature ·
no health claim, and **attributing one does not launder it** · nothing sexual, aphrodisiac or
fertility-framed · no statute numbers **except** those `FACTS-VERIFIED` explicitly permits · comb
(~0.95) and ground nuts (~1.0) are lighter than honey (~1.4) and **rise** · crystallisation is
normal and proves nothing about authenticity · the under-12-months infant rule is a warning and is
**never** invertible.

## Before you write

```bash
grep -n "keywords" -A 14 src/content/articles/<your-lang>/*.ts
```

Check the live **secondary** keyword arrays, not just the 22 focus keywords in your language. On a
site this size that is the binding constraint, and it killed most of round 4's candidates. If a term
you planned is taken, choose another and say so in your handback.

## Your output

One TypeScript module at `src/content/articles/{lang}/{slug}.ts`, exactly the shape in
`src/content/articles/types.ts`. **Touch nothing else** — not `index.ts`, not `articleFigures.ts`,
not another writer's file. The wiring pass does all of that centrally once every file exists.

`published` and `updated` are **"2026-08-26"**.
