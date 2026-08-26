# Round 4 — defects found before the round started

Things round 4's Stage 1 turned up that are **already live**. Recorded here so they are fixed in
this round's Stage 5 rather than rediscovered in a later one.

---

## 1. BLOCKER — the site contradicts itself across languages about the 90% fake-honey figure

Found by the Malay demand researcher, 2026-08-26. **Round 3 created this.**

| Surface | What it says |
|---|---|
| `src/content/articles/ms/beza-madu-tulen-dan-madu-campuran.ts` (live since round 1) | "Angka besar yang kerap dilontarkan tentang berapa banyak madu di pasaran ini palsu pula **tidak dapat kami sahkan, jadi kami tidak mengulanginya**" — *we cannot verify it, so we do not repeat it* |
| `src/content/articles/en/is-honey-in-malaysia-fake.ts` (live since round 3) | Titled **"Is Honey in Malaysia Fake? Checking the 90% Claim"**, states the figure in the `answer` block, attributes it to Dr Zulkifli Mustafa, and contrasts it with the ministry's 769-sample result |

The English article is a *fact-check*, not a repetition — it never asserts the number as true. But the
Malay sentence makes a flat promise about the brand's own conduct ("we do not repeat it") that the
English page visibly breaks. An engine reading both gets a conflict, and a bilingual reader gets a
worse one.

**Fix, in this round's Stage 5:** ship the Malay `90 peratus madu palsu` article (round-4 pick ms1)
and rewrite that Malay paragraph to the settled position — the figure exists, it is attributed to a
named researcher, the ministry's own monitoring measured something different, and the site explains
both — linking the new Malay article. **If ms1 does not ship, the sentence must still be fixed**, so
that it no longer promises silence the site does not keep.

### Why round 3's review did not catch it — and the flow change it implies

Round 3 ran three adversarial reviewers, **one per language**, each given its own language's live
corpus and `llms` file. A contradiction between a **new article in one language** and a **live
article in another** was therefore structurally invisible to all three.

**Every future round needs one cross-language consistency pass** over the round's factual spine — the
claims that are the same claim in any language (physics, statistics, what the brand will and will
not say, what is and is not published). Per-language reviewers cannot see it by construction.

---

## 2. The corporate/bulk reserve: the recorded reason was wrong, and the topic still fails

Rounds 2 and 3 discarded corporate/bulk gifting because "no published bulk pathway exists." That was
false — the wholesale enquiry form is real and round 3's `FACTS-COMMON.md` correction records it.

But the Malay researcher checked the topic on its merits anyway and it **still fails**, for entirely
different reasons: the Malay `borong madu` SERP is a **price-list ecosystem** (measured tiers, MOQ by
carton) that SUBUR cannot compete in without publishing a price band or MOQ; `tempah madu pukal` is
already a **live secondary keyword** on `doorgift-madu-kahwin`; and corporate gifting is a
hamper-**service** market for which SUBUR has no service.

**One owner decision flips it:** publishing a price band or a minimum order quantity. Until then the
topic is correctly closed — but closed for an honest reason, not the wrong one that was on file.

---

## 3. Two reserves are now closed rather than pending

- **`madu untuk bayi bawah 1 tahun`** — the secondary-keyword grep shows round 3's
  `madu-untuk-ibu-mengandung` already took `madu bayi bawah satu tahun`, `botulisme bayi dan madu`
  and `peraturan madu bawah 12 bulan`. Closed, not reserved.
- **`gula melaka vs madu`** — round 3 noted the substitution framing cleared the bar the comparison
  framing had not; the English `honey-vs-gula-melaka` and the round-3 baking article now own that
  ground. The Malay *substitution arithmetic* survives as its own candidate, but the comparison does
  not.

---

## 4. Collection failures to state rather than paper over

- **Google MY SERP fetch is still blocked** (retried 2026-08-26 with `gl=my&hl=ms`, Google error
  page). The Malay demand file therefore contains **no autocomplete or "Soalan lazim" evidence**, and
  none was invented. Same as round 3.
- `malaysiagazette.com` returns 403; `borongmadu.my` timed out.
- **Unverified dependency:** the Malay pick `logo autentik kkm` rests on BKKM's *Skim Pensijilan
  Makanan Autentik* covering honey and publishing a holders list (PDF dated 23 Jul 2025). **The
  researcher did not open that PDF.** It must be fetched and read before any article is commissioned
  on it — a scheme's scope and its holders list are exactly the kind of checkable fact this project
  has been burned by before.
