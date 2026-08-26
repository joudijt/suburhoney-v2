# PRESS round 4 — gate report

13 articles: 5 English, 4 Malay, 4 Arabic. Recorded 2026-08-26.

**Reporting rule observed:** every check says pass, fail, or *why it could not run*.

---

## The headline: a new reviewer role found three defects the old design could not see

Round 3 ran three adversarial reviewers, one per language, each scoped to its own corpus. A new
article in one language contradicting a live article in another was **structurally invisible to all
three** — which is exactly how the 90%-claim contradiction shipped.

Round 4 added a **cross-language consistency reviewer** whose only job is the seam. It found three
blockers on its first run, none of which any per-language reviewer could have reached:

1. **The live English pregnancy article issued a safety verdict** — "Yes.", a yes/no table, a CTA
   reading *"Honey stays on the table during pregnancy"* — while **both** its hreflang partners and
   **all three** machine briefs say the site never clears a food for a reader. Round 4's own new
   infant article, which links to it, says *"this article clears no food for any child."*
2. **A second live Malay article still carried the round-3-class promise**: a callout titled
   *"Angka yang tidak kami ulang"* saying the fake-honey figure's source cannot be verified — thirty
   lines from the file round 4 had just fixed, and in the same language as a new article that names
   that source precisely.
3. **`llms/ar.txt` line 9 made crystallisation proof of authenticity**, contradicting `en.txt`,
   `ms.txt` **and its own lines 102 and 252** — in the file an AI engine actually reads.

All three fixed. The role is permanent.

## The second structural finding: nobody had ever reviewed the money pages

Three rounds of reviewer briefs named articles and `llms*.txt`. None named `src/content/pages/`. So
round 1's crystallisation correction — recorded at the time as *"applied to all 9 surfaces"* — had
quietly failed in four more places: `benefits.ts` in all three languages asserting crystallisation
*"is a sign of a genuine raw blend"*, plus a Malay `why-us` table cell reading *"Dijangka - tanda
madu tulen"*.

It surfaced only because a new round-4 article links to `/en/benefits/` twice and would have sent
readers straight to the sentence it had just refuted. **A claim can live on a money page for four
rounds precisely because nobody is assigned to read it.** All four corrected; future briefs name the
directory.

## The third: a source-of-truth file was inconsistent with itself

`round-3/FACTS-VERIFIED.md` stated the baking rule as **¾ cup**, computed `0.75 × 340 = 255 g`, then
asserted **"The volume ratio is 0.81"** — a stale figure from a reading abandoned mid-round-3. The
Malay article published 0.81 faithfully, next to its own correct 0.75 derivation, on the one page
whose premise is that competing conversion tables contradict themselves. Both corrected.

---

## Mechanical checks — 19/19 pass

`bin/press_gate.py --min-words 740 --max-words 1560` over **13 new articles plus the 6 live ones
this round edited** → **exit 0, 0 failures.**

A **control** ran first, on two live round-3 articles: both passed clean, so the gate's verdicts are
trustworthy this round.

One genuine defect the gate caught before review: `can-babies-have-honey` had an H2 followed
directly by a list with no standalone answer paragraph. Fixed, re-gated.

Warnings are the two deliberate design choices carried from round 3 — single-language pages
declaring no hreflang, and `image-dimensions` — both shared by the control articles.

## Project gates

| Gate | Result |
|---|---|
| `npm run build` | PASS — **98 pages** (was 85) |
| Sitemap | **84 → 97 locs**, all 13 new URLs with real `lastmod` |
| `node scripts/ai/facts-sync.mjs --check` | PASS |
| `node scripts/qa/banned-terms.mjs` (src) | PASS |
| `node scripts/qa/banned-terms.mjs --dir=dist` | PASS |
| `npx tsc` | **COULD NOT RUN** — no TypeScript in this project's `node_modules`; `@astrojs/check` not installed. Type safety rests on the Astro build plus per-file runtime shape validation. Stated, not skipped |

### The asset-key trap, checked explicitly

Adding a new English article to a group containing a **live** Arabic one changes that Arabic
article's `getAssetKey()` result. Three live pages (G13, G14, G15) would have silently lost their
images. The new English keys were registered pointing at the **existing** Arabic files, and the
build confirms the live Arabic raw-vs-filtered page still renders its own frame.

---

## Adversarial review — 4 reviewers, 17 blockers, all fixed

Per-language reviewers found: **English 3**, **Malay 6**, **Arabic 5**. Cross-language found **3**.

Recurring shapes worth carrying forward:

- **`figureAlt` describing frames that do not exist — six of them**, including one *translated from a
  defective English alt* rather than written to the image, which the Malay partner's correct alt
  exposed. Alt text is written before the image exists; the reconciliation pass is mandatory.
- **Unverified claims that reached a draft**: an Arabic import-permit rule its own research file
  forbade quoting in writing, and a Malay market-share statistic ("most honey comes from small
  producers") with no source anywhere. Both cut.
- **Two live Malay articles contradicting new ones on physics and on baking** — the live cooking
  article said the spices *rise* and that you can bake with the blend; four other live articles and
  `FACTS-COMMON` say the opposite. The live file was the outlier and was corrected.

## What the writers refused, unprompted

Recorded because it is the round's best evidence that specific fences work: **no numeric threshold
from Regulation 130A** (categories verified, values not) with the refusal made visible on the page;
**ten** separately listed refusals to state a travel rule; a cut claim that separation proves the
labelled solids are present, because it would smuggle a purity test back in; and one writer that
**fetched and read the Food Regulations 1985 text** to close a fabrication gate, found the article's
best argument in it, and *still* declined to print a threshold when it spotted an apparent mismatch
with a live article. I checked that one: Regulation 130's values are correct as published, and the
consolidated PDF the writer read predates an amendment. Right to stop, wrong to guess.

---

## Round payload

| Item | Value |
|---|---|
| New images | **6**, all 886×665 |
| Articles sharing an existing frame | **7** — six of them reusing a file that already existed |
| Total added | well under the 2.2 MB ceiling |

Image generation took three passes on two frames and still landed short: the kelulut frame came back
as glossy blobs reading as egg yolks, and the layer-separation jar never showed two bands. Stopped at
three attempts per round-3's diminishing-returns finding and reconciled the alt text instead.

---

## Open items for the owner — unchanged, and one is larger than previously recorded

1. **Jar size and the ±5% tolerance (D26).** Round 3 recorded this as an Arabic-surface issue. The
   cross-language review found it in **all three** machine briefs *and* in article body copy in all
   three languages, with `ms.txt` additionally offering the net weight and tolerance as an
   **authenticity check**. None of it exists in `site.ts`. Six surfaces, not one. Still the owner's
   call; round 4 neither repeated nor contradicted it.
2. **The Netlify twin** still duplicates the whole site with no canonical and no robots.txt, and now
   duplicates 13 more URLs. Open since round 1.
3. **Nutmeg** — a declared ingredient whose Arabic corpus is almost entirely fatwa material with a
   majority-prohibition view. The Arabic researcher declined to write it because it cannot be closed
   honestly. Owner's decision whether the site ever addresses it.
4. **The bulk/corporate topic** was rejected by all three researchers on three different grounds. The
   blocker to lift is a published price band or MOQ — a business decision, not an article.

---

## Two findings from the final gate pass, both worth recording

### A blunt `sed` broke a slug, and only the gate caught it

Fixing a house-spelling drift (`saffron` → `safron`) in a live Malay article with
`sed 's/saffron/safron/g'` also rewrote `related: ["madu-saffron", …]` into `["madu-safron", …]` —
a reference to a real article, silently broken. The build does not fail on it; the related card
would simply have stopped resolving.

Caught because the gate run afterwards showed a diff that included the `related` line. Repaired:
prose spelling corrected, slug restored, and `grep` confirms no other file was hit.

**A global replace over a content file will hit slugs, ids and keyword arrays as well as prose.**
Anchor the replacement, or check the diff before trusting it — this is the same class as the
round-2 lesson about patch scripts anchored on the wrong text.

### The launch-era articles carry pre-existing gate failures, and they are out of round 4's scope

`ms/habbatus-sauda-dan-madu` — a launch-era article, not part of this round — fails three checks:
`answer-first` on three headings, a 65-character meta title, and a 169-character meta description.

**These predate round 4 and were recorded in round 1**, which noted that the nine launch articles
fail answer-first and that six titles and four descriptions are over length. They were confirmed
pre-existing here: the only round-4 edit to that file was a two-character spelling change, which can
only shorten a string.

Not fixed, deliberately: it affects **nine** articles, not one, and repairing a single arbitrary
member of that set in a content round would be worse than leaving the set consistent. It is a
standing backlog item, not a round-4 defect — and it should be a round of its own.
