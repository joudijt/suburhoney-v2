# PRESS Round 4 — the map

**13 articles: 5 English, 4 Malay, 4 Arabic.** Not 18, and that is the finding, not a shortfall.

Shared facts: `docs/press/round-3/FACTS-COMMON.md` (including its wholesale CORRECTION block).
Verified figures: `docs/press/round-3/FACTS-VERIFIED.md` **and** `docs/press/round-4/FACTS-VERIFIED.md`.
Defects carried in: `FINDINGS-CARRIED-IN.md`.

---

## Why 13 and not 18

Each researcher was told explicitly that a short honest list beats six padded ones, and asked to say
so if fewer cleared the bar. **All three did, independently:** English found 5 firm plus one it
called the owner's call, Malay found 3 plus a conditional, Arabic found 4.

This is the fourth round against **66 live articles**. Rounds 1–3 took the obvious ground in every
language, and cannibalisation now has to clear the live *secondary* keyword arrays as well as the 66
focus keywords — which killed a long list of otherwise reasonable candidates this round
(`madu untuk bayi bawah 1 tahun`, `عسل كيلولوت`, `beza madu mentah dan madu proses`, `does honey
expire`, `honey in coffee`, `why is honey expensive`, the ant test, breakfast timing).

Padding to 18 would mean publishing six pieces that cannibalise live ones. That is the failure this
flow exists to prevent, so the round ships 13.

### The bulk/corporate reserve: rejected by all three, on three different grounds

I told every researcher this reserve had reopened — rounds 2 and 3 discarded it on a reason that
turned out to be false (the wholesale enquiry form is real). All three checked it properly and
**still declined**, and none of them repeated the old reason:

- **Malay:** the `borong madu` SERP is a price-list ecosystem — measured RM tiers, MOQ by carton —
  which SUBUR cannot enter without publishing a price band or MOQ. `tempah madu pukal` is also
  already a live secondary keyword on `doorgift-madu-kahwin`.
- **Arabic:** round 3 **already published the honest answer** as an FAQ in the live
  `hadiya-min-malizia-lil-ahl` — it links the form and states that no price, MOQ or lead time is
  published. And the demand is not there: `شراء عسل بالجملة في ماليزيا` returns five of six results
  about **honeymoon packages** (`شهر عسل`).
- **English:** trade supply survives only as a weak conditional (zero GSC rows in 222 queries, and
  its head SERP is drums and IBCs — a different product class). Corporate gifting fails because
  seven of eight ranking pages sell **personalisation** SUBUR does not offer, and every one answers a
  per-recipient **jar-size** question that D26 blocks outright.

Three independent rejections on three distinct grounds is a decisive answer. **The blocker to lift
is an owner decision — publish a price band or an MOQ — not an article.**

---

## The 13

### English (5)

| id | Focus keyword | Slug | Group | Image |
|---|---|---|---|---|
| en1 | `kelulut honey standard malaysia` | `kelulut-honey-standard-malaysia` | — | **new** |
| en2 | `what does raw honey mean` | `what-does-raw-honey-mean` | **G13** (en+ar) | reuse ar raw/filtered frame |
| en3 | `can you bring honey on a plane malaysia` | `bringing-honey-on-a-plane-malaysia` | **G14** (en+ar) | reuse ar flight frame |
| en4 | `what is arabic honey` | `what-is-arabic-honey` | — | **new** |
| en5 | `can babies have honey` | `can-babies-have-honey` | **G15** (en+ar) | reuse ar infant frame |

### Malay (4)

| id | Focus keyword | Slug | Group | Image |
|---|---|---|---|---|
| ms1 | `90 peratus madu palsu` | `90-peratus-madu-palsu` | **G17** (en+ms) | reuse en fake-honey frame |
| ms2 | `logo autentik kkm` | `logo-autentik-kkm-madu` | — | **new** |
| ms3 | `tukar sukatan gula kepada madu` | `tukar-sukatan-gula-kepada-madu` | **G16** (en+ms+ar) | reuse en baking frame |
| ms4 | `madu berasing dua lapisan` | `madu-berasing-dua-lapisan` | — | **new** |

### Arabic (4)

Transliterated Latin slugs, matching all 22 live Arabic files.

| id | Focus keyword | Slug | Group | Image |
|---|---|---|---|---|
| ar1 | `هل العسل آمن للحامل` | `hal-al-asal-amin-lil-hamil` | **G10** (en+ms+ar) | reuse en pregnancy frame |
| ar2 | `العسل العضوي` | `al-asal-al-udwi-fi-malizia` | — | **new** |
| ar3 | `استبدال السكر بالعسل في الخبز` | `istibdal-al-sukkar-bil-asal` | **G16** (en+ms+ar) | reuse en baking frame |
| ar4 | `إدخال العسل إلى ماليزيا` | `idkhal-al-asal-ila-malizia` | — | **new** |

**Six new images for thirteen articles.** Seven articles share a frame with a partner — and because
most partners are *live* articles, six of those shares reuse a file that already exists. That is the
natural shape of a mature site, and a real improvement on round 3's fourteen generated files.

---

## Groups — two of them three-language, a first for this site

| Group | Members | Why it qualifies |
|---|---|---|
| **G10** *(extended)* | en `is-honey-safe-during-pregnancy` (live) + ms `madu-untuk-ibu-mengandung` (live) + **ar1** | Arabic reached the same question independently and found zero Arabic coverage. Becomes this site's first **three-language** group |
| **G13** | **en2** + ar `al-farq-bayn-al-asal-al-kham-wal-musaffa` (live) | Identical thesis, arrived at separately: *raw* is not a regulated word. English found `raw honey` is a secondary keyword on six live articles and defined on none |
| **G14** | **en3** + ar `naql-al-asal-fi-al-taira` (live) | Same question — carrying a jar of honey through an airport |
| **G15** | **en5** + ar `hal-al-asal-masmuh-lil-atfal-aqal-min-sana` (live) | Same question, the under-12-months rule |
| **G16** | **ms3** + **ar3** + en `baking-with-honey-malaysia` (live) | Malay and Arabic independently landed on sugar-substitution arithmetic, and English shipped the baking piece in round 3. Second **three-language** group |
| **G17** | **ms1** + en `is-honey-in-malaysia-fake` (live) | Malay is the *source* language for this story — Berita Harian broke it and KKM replied in Malay |

**Watch the asset-key side effect.** Adding a live, previously ungrouped article to a group changes
its `getAssetKey()` result to the group's English slug. Where that happens (G13, G14, G15), the new
English key must be registered in `articleFigures.ts` **pointing at the existing Arabic image file**,
so the live article keeps the frame it already ships and no orphan is created. This is wiring, not
content, but it will silently break a live page if missed.

---

## Per-article fences

| id | The fence |
|---|---|
| **en1** | **In force since 1 March 2026 — present tense.** SUBUR is **not** kelulut honey and 130A does not apply to it; say so. **No numeric threshold from 130A** — the categories are verified, the values are not. Trehalulose may be named and explained; **no health, nutritional or glycaemic claim** about it. The payoff is that kelulut was measured against a rule written for a different insect, and Malaysia has now written the right one — which completes the live `is-honey-in-malaysia-fake` story rather than repeating it |
| **en2** | The thesis is that **`raw` is not a regulated word** — keep it consistent with the live Arabic partner, which says exactly that about `خام`. Do not restate the round-3 raw-vs-filtered *process* walkthrough; this defines a term and explains what it does and does not promise a buyer |
| **en3** | Malaysian departure, not TSA. **Invent no rule** — no millilitre allowance, no airline policy, no customs figure. Where it depends on carrier or destination, say so. The live Arabic partner already solved this; match its discipline and do not contradict it. **No jar size** (D26) even though cabin limits are volumetric |
| **en4** | Highest banned-terms exposure in the round: **`Middle East` fails the build**, and the whole topic pulls toward it. Name countries individually. Also the highest potency-adjacency risk — nothing sexual, nothing vitality-framed. Define the category honestly: a shelf term, not an origin guarantee. Keep consistent with the sidr article's "a floral source is not a country" |
| **en5** | The under-12-months rule is a **warning and is never invertible**. Ends at the caregiver's own clinician. The one thing no competitor addresses is the **ground walnut and almond** — a declared tree-nut allergen — which is a fact about a published list. **Drop the colliding secondary keyword** `why babies can't have honey but adults can` from the live pregnancy article in the same pass |
| **ms1** | This is the article that **fixes a live contradiction** — see `FINDINGS-CARRIED-IN.md` §1. Malay is the source language: Berita Harian 13 Feb 2024, KKM's Malay reply 14 Feb. Figures exactly as `round-3/FACTS-VERIFIED.md` states them. **In the same pass, rewrite the sentence in the live `beza-madu-tulen-dan-madu-campuran`** that promises the site does not repeat the figure, and link this article from it |
| **ms2** | Everything from `round-4/FACTS-VERIFIED.md` §2. **The scheme is voluntary** — its absence proves nothing, and saying otherwise would smear every honest small producer. **Do not count the holders.** **SUBUR is not on the list and publishes no certification** — state the site's standing position plainly rather than drawing attention to it or hiding it. Do not confuse Autentik with MeSTI, GMP or HACCP |
| **ms3** | Use the worked arithmetic in `round-3/FACTS-VERIFIED.md` — 340 g/cup honey, 200 g/cup sugar, **≈128 g per 100 g**. The ranking Malay page converts ¼ cup and ⅓ cup of sugar to the *same* 3 tablespoons of honey and justifies it with a sweetness claim about a volume rule: that is the error to correct, and correcting it is the article. Metric throughout. No glycaemic framing, no "healthier" |
| **ms4** | Completes the observable-anxiety series (foam → hardening → colour → dates → **separation**). Physics only: comb (~0.95) and ground nuts (~1.0) are lighter than honey (~1.4) and **rise**; the heavier spice grains work down. Separation is **not** a purity test in either direction — keep consistent with the crystallisation position. Honest about its own case: this is product physics, not measured SERP demand |
| **ar1** | Round 3's `ms4` fence transfers unchanged: report the generic public-health consensus, **do not clear the food for the reader**, end at the clinic. The under-12-months rule stays a non-invertible warning. **Do not contradict either live partner** — read both before writing. It joins a three-language group, so structural parallelism is the thing to avoid hardest |
| **ar2** | Everything from `round-4/FACTS-VERIFIED.md` §3. The thesis mirrors the live `al-farq-bayn-al-asal-al-kham-wal-musaffa`: **`عضوي` is regulated, but not for honey in Malaysia**. Name no brand. No purity or health claim. Do not state SUBUR's status beyond the site's standing position that it publishes no certification |
| **ar3** | Same arithmetic and same refusals as ms3, but written from Arabic research — the Arabic SERP contradicts itself (¾ cup vs ½ cup) and states honey is 20% water when it is ~17%. Correcting that is its own angle. Three-language group: **no structural mirroring of ms3** |
| **ar4** | **Inbound** customs, which the live outbound flight article explicitly declines to cover — quote its boundary and stay on the other side of it. `جمارك المنتجات النحلية` is a **registered secondary keyword** on that live article: pick different terms. **Invent no rule**, cite no statute number, and where the answer depends on the traveller's origin or declaration, say so |

---

## Cannibalisation — checked three ways, and it did most of the cutting this round

1. **Against all 66 live focus keywords.**
2. **Against the live *secondary* `keywords` arrays** — which is what killed most candidates. This is
   now the binding constraint on a mature site, not the focus-keyword list.
3. **Against body copy.** The Arabic researcher killed an ant-repellent candidate this way: the live
   `hifz-al-asal-fi-al-jaw-al-ratb` has a whole H2 on it that no keyword array mentions.

**In-round:** all 13 focus keywords are distinct. The two sugar-substitution articles (ms3, ar3) sit
in one group and must not mirror each other structurally.

---

## Flagged to the owner, not written

- **Nutmeg.** A declared SUBUR ingredient whose entire Arabic corpus is fatwa material with a
  majority-prohibition view. The Arabic researcher refused to write it because it cannot be closed
  honestly, and that is the right call. Owner's decision whether the site ever addresses it.
- **ms2 publishes that SUBUR is not on a government authenticity list.** It is consistent with
  everything the site already says — it publishes no certification of any kind — and the article's
  job is to teach a reader to check any jar. But it is a commercial judgement, so it is named here.
- **D26 is still live, and it is four times larger than this map first said.** The cross-language
  review found the jar sizes and the ±5% tolerance published in **all three** machine briefs —
  `llms/en.txt`, `ms.txt` and `ar.txt` — **and** in article body copy in all three languages
  (`en/honey-for-couples-malaysia`, `ms/madu-suami-isteri`, `ar/asal-al-zawjayn`, each printing
  "250g"). `ms.txt` additionally offers the net weight and its tolerance as an **authenticity
  check**. None of it exists in `site.ts`. Because it is stated consistently across languages it
  is not a seam contradiction — but a fix aimed only at the Arabic file would miss five of the
  six surfaces. Still an owner decision, unchanged since round 3.

## Evidence integrity

No search-volume figure appears anywhere. **Google MY SERP fetch is still blocked** (retried
2026-08-26), so the Malay file again carries no autocomplete or PAA evidence and says so. WebSearch
is US-localised, which is recorded rather than worked around. Arabic has **almost no GSC support** —
the only two Arabic-script rows in all 222 belong to the closed Al Shifa cluster — so all four Arabic
picks rest on SERP evidence and are labelled "no GSC row".
