# Round 7 — shared writer brief

Every writer in this round reads this file, `FACTS-VERIFIED.md`, and its own row in
`../ROUND-7-MAP.md`. Nothing else. You own exactly one file. Do not open another writer's file.

---

## 1. What you are producing

A TypeScript module at `src/content/articles/{lang}/{slug}.ts` exporting one `Article` object.
The shape is `src/content/articles/types.ts`. **Read a live article first** — use
`src/content/articles/en/is-honey-halal.ts` (811 words) as your structural model. Copy its shape,
never its content.

Do **not** touch `src/content/articles/index.ts`. Registration is done centrally after all fifteen
land, so parallel writers cannot collide on one file.

### Required fields

| Field | Rule |
|---|---|
| `slug` | Exactly the slug in your map row. Do not invent a variant |
| `title` | **≤ 60 characters.** Focus keyword near the front. Unique site-wide |
| `heading` | The H1. Shorter/punchier than `title`. Contains the focus keyword, reads like a human wrote it |
| `description` | **≤ 155 characters.** Contains the focus keyword. Written to earn a click. Round 6 shipped eight over 165 and had to re-trim — count yours |
| `primaryKeyword` | Exactly the focus keyword in your map row. One per article |
| `keywords` | 8–12 real queries, grouped by intent in the order you list them (category → usage → buying → comparison → trust). No flat dump, no term you did not use naturally in the body |
| `published` / `updated` | Both `"2026-09-10"` |
| `readingMinutes` | Computed from your final word count at ~200 wpm, rounded. Not guessed |
| `icon` | One of `/icons/ingrediant_01.webp` … `/icons/ingrediant_10.webp`, or `/jarncap.webp` |
| `figureAlt` | Write a plausible one-liner. **It will be overwritten** by `scripts/assign-article-figures.mjs` from the crop table, so do not agonise — but do not leave it empty |
| `category` | Reuse an existing one: `Buying guide`, `Ingredients`, `Storage`, `Comparison`, `Safety`, `Gifting`, `Nutrition`, `Retail` |
| `blocks` | See §2 |
| `faqs` | 6–10 items, each answer 40–70 words |
| `related` | Exactly the sibling slugs listed in your map row. **They must exist** — check the file is on disk before you name it |

---

## 2. Body shape

**Length: 800–1,000 words, written to the MIDDLE of the band — aim 880–920.** Every fix pass adds
words; a round written at 1,000 lands over. Live articles from rounds 5–6 measure 743–840 by the
project's own counter, so you are in company at 880.

Block order:

1. **`answer`** — first block, always. A 40–60 word direct answer to the question a reader typed.
   It must survive being quoted alone, with no surrounding context, by an answer engine. No "as
   mentioned above", no "this article explains". Put the real answer in it.
2. **`paragraph`** — one or two sentences setting up why the question is asked the way it is.
3. Then **5–7 `heading` blocks**, each phrased as the question a real person asks, each with an
   `id` (kebab-case, unique in the file). **Directly under every heading: a 40–70 word paragraph
   that stands alone.** Same test as the answer block — copy it out, read it cold.
4. **At least one `table` or a `list` with `term`+`text` items.** Answer engines lift these
   preferentially. `table` renders as cards below `sm`, so keep to 2–3 columns and short cells.
5. One `callout` where a real caveat belongs (`tone: "note" | "warning" | "origin"`).
6. A **`cta`** block last. A decision for the reader, not a summary.

Inline HTML allowed in `paragraph.text`, `list.items[].text` and `callout.text`: `<strong>` and
`<a href>` only. **FAQ answers may also carry `<a href>`** — the article route now renders them as
HTML (it did not before this round; that is fixed).

---

## 3. Linking — this is the point of the round, not decoration

133 pages are live and two have ever had an impression. Your links are load-bearing.

- **3–5 outbound internal links.** At least one money page (`/{lang}/`, `/{lang}/retail/`,
  `/{lang}/benefits/`, `/{lang}/why-us/`, `/{lang}/contact/`) and at least two sibling articles.
  Your map row names them. Use **descriptive anchor text** — never "click here", "read more", or a
  bare URL. The anchor should say what the reader will find.
- Articles link with an absolute path including the trailing slash: `/en/blog/what-is-a-honey-blend/`.
  **The trailing slash is mandatory** — Apache 301s a slashless URL and the hop wastes crawl budget.
- **0–2 external links**, only where a claim genuinely needs a source, and only to the sources named
  in `FACTS-VERIFIED.md`. Never to a competitor's shop.
- Do not link to an article that is not yet on disk. If a sibling in your row is another round-7
  article, link it anyway — every one of the fifteen ships in the same commit.

---

## 4. The ceiling — read this twice

The market is **Malaysia**. A food and its advertising **may not claim to prevent, reduce, treat or
cure any condition.** Infertility is a condition.

This site already has a written doctrine for exactly this, in `src/content/llms/en.txt`, and your
article must be consistent with it rather than inventing its own position:

> Fertility vocabulary appears here because it is what people search for; it is not a claim about
> the product.

> A sentence about how a spice is used in a kitchen is a sentence about a kitchen. It is not a
> statement about what will happen to the person eating it.

**Absolute bans, all languages:**

1. **No health, fertility, potency, vitality, stamina or medical claim** about any product,
   SUBUR's included — explicit *or implied*, including by contrast ("unlike X, SUBUR…").
2. **No statute numbers, no sub-regulation numbers, no penalty figures, no RM amounts.** Name a law
   or a regulator in words only. Three earlier rounds got a sub-regulation number wrong and one
   invented an RM figure.
3. **No price, in any currency, ever.** The site publishes none.
4. **No jar size, net weight, weight tolerance, or how long a jar lasts** — off limits both to
   assert *and to deny*. That question is still with the owner.
5. **No certificate number, rating, review count, customer count, lab result, MOQ or lead time.**
6. **No invented checkable fact.** If `FACTS-VERIFIED.md` does not carry it, you do not have it.
   A number nobody stated gets quoted back as fact forever.
7. **No unprovable superlative** — "the best", "#1", "the purest", "the only real X".
8. **No claim or implication that SUBUR was tested, is NPRA-registered, or would pass anything.**
   SUBUR is a **food**. It is not a registered traditional product and has no MAL number. Do not
   blur the two, in either direction.

**Banned positioning terms — these fail `scripts/qa/banned-terms.mjs` and break the build:**
`traditional`, `traditionally`, `tradition`, `traditions`, `middle east`, `middle-eastern`,
`for generations`, `generational`, `studied standards`, `tradisional`, `tradisi`, `timur tengah`,
`turun-temurun`, `piawaian dikaji`, `تقليدي`, `تقاليد`, `الشرق الأوسط`, `عبر الأجيال`,
`معايير مدروسة`. Paraphrases that mean the same thing are also out.

### Fabrication by denial is as bad as fabrication

A previous round shipped an article that invented nothing and instead **denied three true things**.
These all EXIST and must never be denied or omitted in a way that implies they do not:

- a **wholesale / bulk enquiry form on every locale's homepage** (`/{lang}/#wholesale`)
- **four** ways to buy: the Ampang Jaya branch, the Batu Caves branch, the store's own Shopee
  storefront, the store's own TikTok Shop. **WhatsApp is a contact line, not a fifth channel.**
- overseas delivery is **platform-managed**, not refused

### Settled positions you must not contradict

- Crystallisation is **not** proof that honey is genuine, and **not** a fault.
- The site **never clears a food** as safe for an individual. Route health questions to a doctor.
- Slow darkening over time is normal.
- Shopee and TikTok Shop are the store's **own** storefronts, not third-party sellers.

---

## 5. Facts

Every externally checkable number, name, standard or regulator statement comes from
`FACTS-VERIFIED.md` — **not from your own memory, not from a web search you run yourself, and not
from the map file.** A research file is not a source.

If `FACTS-VERIFIED.md` marks something UNKNOWN, **omit it**. Do not write around it with a hedge
that implies you know; do not assert the opposite either.

Facts about SUBUR and the store — addresses, WhatsApp, storefront URLs, the seller's name — live in
`src/config/site.ts` and are **imported**, never retyped:

```ts
import { BRANCHES, BRAND_SELLER, WHATSAPP_URL, SHOPEE_URL } from "../../../config/site";
// then inside a template literal:
text: `Both branches are in Selangor: ${BRANCHES[0].full} and ${BRANCHES[1].full}.`,
```

Retyping an address into prose is how the JSON-LD and the copy drift apart. Look at
`src/content/pages/en/retail.ts` for the pattern.

---

## 6. Write in the language, not into it

Your article is **not** a translation and must not read like one. If you are writing Malay, you are
writing for someone who typed Malay into Google, and their question is not the English question
with the words swapped. Different angle, different examples, different FAQs.

A previous round shipped a Malay article that mirrored its Arabic partner — eight FAQs against
eight, seven H2s against seven, three FAQ answers clause-for-clause. **Structural parallelism across
languages is the tell**, and it is a blocker even when every sentence is independently correct.

For Malay: write natural Malaysian Malay, not Indonesian. Use the vocabulary a Malaysian shopper
uses (`balang`, `kedai`, `peruncit`, `bahan`, `label`, `berdaftar`).

---

## 7. Before you hand back

- [ ] Word count 800–1,000 by `python <scratch>/wc_article.py <yourfile>`, ideally 880–920
- [ ] `title` ≤ 60 chars — counted, not estimated
- [ ] `description` ≤ 155 chars — counted
- [ ] `answer` block is 40–60 words and survives being read cold
- [ ] Every H2 answer paragraph survives being read cold
- [ ] 5–7 headings, every `id` unique
- [ ] At least one `table` or `term` list
- [ ] 6–10 FAQs, each 40–70 words
- [ ] 3–5 internal links, descriptive anchors, trailing slashes, every target exists
- [ ] Every `related` slug exists on disk
- [ ] Zero banned terms — grep your own file
- [ ] Zero facts that are not in `FACTS-VERIFIED.md` or imported from `site.ts`
- [ ] `npx tsc --noEmit` is not run by you; just make sure the object is syntactically valid TS

Report back: the file you wrote, its word count, its title and description character counts, the
internal links you placed, and **anything you wanted to say but could not because the facts file
did not support it.** That last one is the most useful thing you can tell me.
