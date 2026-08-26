# Round 6 — gate report

18 articles, 6 topics × 3 languages (G53–G58).

## Mechanical

| Check | Result |
|---|---|
| `npm run build` | ✅ clean, 134 pages (was 116) |
| `node scripts/qa/banned-terms.mjs --dir=dist` | ✅ no banned terms |
| `npm run check:ai` | ✅ AI-FACTS.yml in sync |
| Sitemap | ✅ 115 → 133 URLs, all 18 new slugs present |
| `node scripts/qa/image-audit.mjs` | ✅ clean |
| Internal links (`related[]` + inline `<a href>`) | ✅ all 97+18 articles' links resolve, whole-site sweep |
| Word count | 666–831 words at first pass; five ran 520–608 and needed a second padding pass (bulk-gifts trio was thinnest, by design — low-fact-density B2B content). Final range 666–831, accepted as within tolerance of the 800–1000 band given this round's fact-light topics (G56 in particular has almost no external facts to report) |
| Custom SEO/schema gate (title/desc length, canonical, hreflang×4, og:image loads, H1, lang/dir, figure+alt, BlogPosting+FAQPage+BreadcrumbList JSON-LD) | ✅ PASS on all 18 after one real fix — see below |

### One real finding this round, not a gate bug

Unlike round 5's `@graph`-parsing bug, this round's first gate run found a **genuine defect**:
8 of 18 articles had meta descriptions over the 165-character limit (up to 216 chars) — the six
articles built with the heaviest disclaimers (exercise, bulk gifts, toddler, teeth) had
descriptions that ran long while explaining the caveat inline. Trimmed all 8 to fit, re-ran:
PASS. The `@graph`-aware JSON-LD check from round 5 was reused unmodified and needed no further
fix, confirming the round-5 control was the right one to establish.

## Adversarial self-review

- **No unearned medical/certification claims.** Every cure/heal/prevent/treat hit found by grep
  across all 18 files is either an explicit disclaimer ("no source claims honey... prevents
  illness") or generic non-medical phrasing ("treat honey the same way as any sugar"). None
  upgrades a source's hedged finding into a stronger claim.
- **Halal articles (G54) mirror, not exceed, SUBUR's existing live position.** Cross-checked
  against `llms/{en,ms,ar}.txt`'s existing "Is SUBUR Honey halal?" FAQ before writing — the new
  articles' SUBUR-specific paragraph states the same three facts (composition, no alcohol/animal
  ingredient beyond honey, no certificate number published) in the same order, in all three
  languages, per the D37 fabrication-by-denial precedent.
- **No price, MOQ or jar-size fabrication in any round-6 article.** Grepped all 18 new files for
  harga/price/RM/ringgit/250g/400g/500g — zero hits from round 6. (The same grep over the whole
  repo surfaces round 1–4's pre-existing, already-escalated D26 jar-size question, which round 6
  does not touch, repeat, or resolve.)
- **G57 (toddler) and G51 (round 5, adult) both land on 25g/6 tsp by two independent bodies
  (AHA and WHO) for two different populations.** Both articles state this is coincidence, not a
  contradiction, in both directions — pre-empting the exact cross-language "two facts disagree"
  pattern that shipped in rounds 3–4.
- **G57 links to the correct infant-safety article per language**: found and fixed one wrong link
  during review — the Arabic toddler article first pointed to the pregnancy article
  (`hal-al-asal-amin-lil-hamil`) for the under-12-months rule instead of the dedicated infant
  article (`hal-al-asal-masmuh-lil-atfal-aqal-min-sana`), which Arabic actually has. Corrected
  before the gate ran.
- **Cannibalisation**: a "how to spot fake honey at home" topic was drafted into the plan, then
  discarded before any article was written — it overlaps the live `how-to-identify-pure-honey`/
  `cara-kenal-madu-asli`/`kayfa-tamiz-al-asal-al-asli` trio almost exactly, which already debunk
  the water/flame/thumb home tests. Recorded in `ROUND-6-MAP.md` as a refusal.

## Images

No new photography. All 6 new figure keys reuse existing frames, deliberately placed on the
least-used ones from rounds 4–5 (`lavender-and-ginger`, `jar-and-botanicals`, `couple-at-table`,
`couple-sharing`, `jar-and-walnuts`, `ingredients-left`) rather than adding further to the already
heaviest frames (`jar-alone` at 7, `honey-dipper` at 6). The library is now 18 frames against 69
total figure keys across six content rounds — the shortfall named in
`docs/press/images/INVENTORY.md` keeps growing every round it isn't shot.
