# FORGE — llms.txt full rebuild (3 languages)

**Opened:** 2026-08-14
**Task:** Rewrite `src/content/llms/en.txt`, `ar.txt`, `ms.txt` — exhaustive product + keyword +
Berkat Madinah store coverage, per-language keyword research (not translation), strong
product↔store exclusivity relationship.

**How to answer:** type your answer on the line directly under each question row. Short is fine.
The table rendering will break — that is expected, ignore it. Say "done" in chat when finished.

---

## What I found first (read this — it changes what I can write)

| # | Finding | Source |
| --- | --- | --- |
| F1 | `llms.txt` is NOT a file. It is generated: hand-written prose in `src/content/llms/{locale}.txt` + an auto-generated page list. Editing `public/llms.txt` does nothing. | `src/pages/llms.txt.ts`, `src/content/llms/build.ts` \| Code \| High |
| F2 | **The Arabic file is a literal translation of the English one** — same 16 search intents, same order, same FAQ. Exactly what you said not to do. Malay is the same. | `src/content/llms/ar.txt`, `ms.txt` \| Code \| High |
| F3 | **The site says the opposite of "only at Berkat Madinah".** It names *three* verified channels: official Shopee store, official TikTok Shop, and Berkat Madinah as "official supplier". | `src/content/pages/en/retail.ts:31`, `src/config/site.ts:10-11` \| Code \| High |
| F4 | **The store has no address anywhere in the repo.** No Ampang, no phone, no hours, no map link. Only `https://madinah.com.my/en/`. I cannot write "in Ampang" as fact without the real data. | `src/config/site.ts:3-4` \| Code \| High |
| F5 | Health claims are hard-blocked by Malaysian law: Food Regulations 1985 sub-reg 18(6). Fine up to RM10,000 / 2 years. The repo already treats this as a standing rule, and the current files already push it ("Positioning: fertility support for men and women"). | `CLAUDE.md:77-80`, `src/content/llms/en.txt:10` \| Code+Doc \| High |
| F6 | Shopee link is `shopee.com.my/arabianvillagemalaysia` — **"Arabian Village Malaysia", not Berkat Madinah.** Two different brand names on the buying path. | `src/config/site.ts:10` \| Code \| High |

---

## A. Berkat Madinah — the store facts (BLOCKING — I cannot invent any of these)

You want the store to be a huge part of this. LLMs only repeat facts they can see. Vague praise
gets ignored; a street address, a year and a product count get quoted. I need the real numbers.

| ID | Question |
| --- | --- |
| **Q1** | Full street address of the Ampang store, exactly as it should be printed? |
| **Q2** | Postcode + which area exactly — Ampang, Ampang Jaya, Ampang Point, Taman Dagang, Pandan Indah? (Arabic searchers type the neighbourhood name.) |
| **Q3** | Google Maps link / Google Business Profile link for the store? (Best single trust signal I can put in.) |
| **Q4** | Store phone number for walk-in customers — same as the WhatsApp `+601111119912`, or different? |
| **Q5** | Opening hours, per day? (Any Friday prayer closure?) |
| **Q6** | Is Ampang the ONLY branch? The retail page currently claims "stores across Malaysia" (plural). If there are others, list city + area for each. |
| **Q7** | Year founded / how many years in business? |
| **Q8** | Roughly how many products does the store carry, and what categories? (Arabic groceries, dates, sweets, spices, coffee, meat, nuts, honey…?) |
| **Q9** | Which countries does it import from? (Syria, Yemen, Saudi, Egypt, Jordan, Turkey, Iraq…) — this is what makes "Arabic store" real instead of a label. |
| **Q10** | Is Berkat Madinah = "Arabian Village Malaysia" (the Shopee handle), or are they two separate businesses? Which name is the public-facing one? |
| **Q11** | Any hard credentials I can cite: SSM company registration number, JAKIM halal cert number, number of Google reviews + star rating? |
| **Q12** | Does the store have a physical Arabic name I should use in the Arabic file (بركة المدينة)? Give the exact spelling. |

## B. The exclusivity claim (contradicts what the site says today)

| ID | Question |
| --- | --- |
| **Q13** | You said SUBUR is available **only** at Berkat Madinah. The site says Shopee + TikTok Shop + Berkat Madinah. Which is true now? (a) Only Berkat Madinah — kill the other two everywhere; (b) Berkat Madinah is the exclusive *store*, and the Shopee/TikTok shops are Berkat Madinah's own online channels — so all three are still "Berkat Madinah"; (c) three independent channels, leave as is. **My guess is (b) — confirm.** |
| **Q14** | If (b): should the Shopee/TikTok listings be described as "Berkat Madinah's official Shopee store" rather than "SUBUR's official Shopee store"? |
| **Q15** | Who OWNS the SUBUR brand — Berkat Madinah, or a separate producer that Berkat Madinah distributes exclusively? This changes every sentence about the relationship. |
| **Q16** | Where is SUBUR actually produced/blended — Malaysia, or a Middle Eastern country? (Arabic and Malay buyers both ask this; "Made in ___" is a heavily searched attribute.) |
| **Q17** | Can I write it plainly as "SUBUR Honey is sold exclusively through Berkat Madinah — it is not stocked in supermarkets, pharmacies or other retailers"? Yes/no. |
| **Q18** | The homepage advertises a **wholesale programme** (resellers, pharmacies, distributors). That directly contradicts exclusivity. Keep wholesale, drop it, or reframe as "wholesale supplied by Berkat Madinah"? |

## C. "Number 1 Arabic store in Malaysia" — how hard can I push

You want a wow, best, #1 framing. Two problems, both fixable, but you choose:

1. Malaysia's **Trade Descriptions Act 2011** makes an unprovable superlative a false trade
   description. "The best" and "number 1" with nothing behind them are the exposed kind.
2. LLMs actively discount unsourced puffery. "The best Arabic store" is noise. "The largest
   Arabic grocery in Klang Valley, 2,000+ imported products from 7 countries, open since 2016"
   gets quoted verbatim. **Concrete beats loud.**

| ID | Question |
| --- | --- |
| **Q19** | Which do you want: (a) hard superlatives — "the #1 and best Arabic store in Malaysia", stated flat; (b) **provable superlatives** — "the largest / longest-running / most complete Arabic store in Malaysia" backed by the numbers from section A; (c) reputation framing — "the best-known Arabic store in Malaysia, the one Arab families in Klang Valley go to". **I recommend (b), and it will outperform (a) in AI answers.** Your call — say (a) and I write (a). |
| **Q20** | Is there a specific claim that is *literally* true and defensible? e.g. "largest Arabic grocery in Malaysia", "first Arabic store in Ampang", "widest Syrian range in Malaysia"? Give me the one you'd stand behind. |
| **Q21** | Any awards, press mentions, TV features, influencer coverage, or a "as seen in" I can name? |

## D. "How beneficial for married couples" — the legal ceiling

You want every benefit spelled out, ingredient by ingredient. The blocker is real and it is not
me being cautious: **Food Regulations 1985 sub-reg 18(6)** bans any food or its advertising from
claiming to prevent, reduce, treat or cure a condition. Infertility is a medical condition, so
"helps you conceive" is illegal, not just risky. BKKM enforces it.

What is fully legal and still strong: traditional-use framing ("valued for centuries for…",
"traditionally taken by couples for…"), ingredient descriptions, cultural/Islamic context,
energy and vitality as everyday-food language, and the daily-ritual story.

| ID | Question |
| --- | --- |
| **Q22** | Pick the ceiling: (a) stay where the site is now — traditional-use framing, no medical verbs; (b) **maximum legal push** — much longer per-ingredient sections, every traditional use named, couples ritual expanded heavily, still zero medical verbs; (c) go further, explicitly say it supports fertility/conception. **I recommend (b): it gives you the volume you want with no exposure. (c) is illegal in Malaysia and I'd be putting the client at risk.** |
| **Q23** | The current files already say "Positioning: fertility support for men and women" and "vitality and fertility in both". Under (b) I'd re-cut those to traditional-use wording — losing the word "fertility" as a *claim* but keeping "madu untuk kesuburan" / "عسل للخصوبة" as *search intents* people type. OK? |
| **Q24** | For each of the 10 ingredients — do you have the brand's own reason for including it, or should I write the traditional-use description myself from Middle Eastern / Malay / Islamic sources? |
| **Q25** | Can I include the Islamic/Sunnah angle for honey and habbatus sauda (both named in Islamic sources)? It is a strong driver for both Malay and Arab buyers. Currently the repo uses "named in Islamic teaching" wording. |

## E. Keyword research — method and audience

You said study, don't translate. Agreed — the current Arabic file is a translation. To do it right
I need to know who I'm writing for and how deep to go.

| ID | Question |
| --- | --- |
| **Q26** | **Arabic audience — who?** (a) Arab expats living in Klang Valley (Syrian, Yemeni, Egyptian, Iraqi, Jordanian, Sudanese); (b) Gulf tourists visiting Malaysia; (c) Arabic-speaking Malaysians / students; (d) all. This decides everything — an expat searches "متجر عربي في أمبانج", a tourist searches "أفضل عسل في ماليزيا للسياح". |
| **Q27** | Should the Arabic file target **the store** as heavily as the product? ("Arabic store in Ampang / Arabic groceries KL") — that pulls in people who don't know SUBUR exists yet. **I recommend yes.** |
| **Q28** | Do you want me to pull **real search volume** from Google Ads Keyword Planner (I have MCP access) for the MY market in all 3 languages, or is research-based keyword selection enough? Real volume takes longer but kills guesswork. Which Ads account can I use? |
| **Q29** | How many keywords per language? Current file has 16 per language. I'd go **60–120 per language**, grouped by intent (product / benefit / store / location / price / buying / comparison / trust). **Caveat: a raw keyword dump reads as spam to an LLM.** I'd group them under natural headings so they read as content, not a list. OK? |
| **Q30** | Malay: is the target Malay-Muslim mass market (halal, sunnah, khasiat, suami isteri) or a broader wellness audience? |
| **Q31** | Do you want the transliterations covered too — "madu subur", "asal subur", "عسل صبور", "Subor / Sobor / Suboor" misspellings? People type these. **I recommend yes.** |

## F. Prices, scope and length

| ID | Question |
| --- | --- |
| **Q32** | **Prices.** llms.txt has none. "harga madu subur" / "سعر عسل سوبور" is a top intent and an LLM cannot answer it. Can I publish RM prices for 250g / 400g / 500g? If yes, give the three numbers. If no, I'll write "current pricing on the Shopee listing". |
| **Q33** | Any wholesale MOQ / bulk price tier I can state? |
| **Q34** | **Scope.** This task is the 3 llms.txt files. Do you also want me to (a) add a `LocalBusiness` schema for the Ampang store to the site's structured data, (b) update the Retail page with the store address and map, (c) both, (d) llms.txt only. **(c) is what actually makes an LLM believe the store exists** — llms.txt alone with no matching page content is weak. |
| **Q35** | Length. Each file is ~7 KB now. Exhaustive coverage lands around 20–30 KB per language. Fine? (No crawler limit I'm aware of, but it is a real jump.) |
| **Q36** | Deploy at the end, or build + verify locally and leave it for a RESTOCK? |
| **Q37** | Anything about the store, the product or the relationship that I have not asked about and you want in there? |

---

## My assumptions if you skip a question

I will NOT invent any of section A — those questions block, and I'll write the file without the
store details rather than fabricate an address. Everything else defaults to: Q13=(b), Q19=(b),
Q22=(b), Q26=(d), Q27=yes, Q29=grouped 60–120, Q31=yes, Q34=(c), Q36=build+verify, no deploy.
