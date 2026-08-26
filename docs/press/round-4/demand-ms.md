# PRESS Round 4 — Malay (Bahasa Malaysia) demand research

Researcher pass, Stage 1. Pull date for every live-web observation in this file: **2026-08-26**.
No writing, no repo edits beyond this file.

**Headline finding, stated up front so nobody reads six recommendations into a file that does not
contain them: I found three candidates that clear the bar cleanly, and one conditional fourth.
I did not find six.** This is the fourth round on a site that already publishes 22 Malay articles,
and the obvious Malay topics are gone. Two thirds of this file is rejection, and the rejections are
the useful part — three of them overturn or correct a reason a previous round wrote down.

---

## 0. How evidence was obtained, and what I could not obtain

### 0.1 The Google MY SERP block — attempted again, still blocked

Round 3 recorded that `WebFetch` on `google.com/search?...&gl=my&hl=ms` returned Google's block page.
**I attempted it again on 2026-08-26** with a Malay query (`borong madu untuk dijual semula`,
`gl=my&hl=ms`) and got the same result: a Google error/troubleshooting page in Malay with a retry
link, no organic results, no PAA box, no related searches.

**Therefore this file contains no autocomplete evidence and no "Soalan lazim" / People Also Ask
evidence, and none has been invented.** Where I describe what readers ask, it comes from competitor
page headings, from news headlines, or from Search Console query strings, and I name the source at
the point of use. This is the second consecutive round in which that collection channel failed;
a future round should stop planning around it until a different access route exists.

### 0.2 What is real, measured demand

`docs/press/round-4/gsc-demand.md` — Search Console for `sc-domain:madinah.com.my`, the sibling
retailer, 16-month window, 222 honey queries. **`suburhoney.com` itself still shows zero queries,
and that zero means nothing**: round 3's 18 articles went live 2026-08-25, one day before the pull.
No first-party harvest is possible yet, and none is claimed below.

**I re-read all 222 sibling rows for Malay-language demand and the honest result is that it offers
this round nothing new.** The Malay-language rows are:

| query | clicks | impressions | avg position | status for round 4 |
|---|---|---|---|---|
| `kedai madu arab near me` | 5 | 197 | 3.8 | **taken** — `kedai madu arab` is a live secondary on `madu-khalta`; `kedai-madu-asli-selangor` is live |
| `madu madinah` | 3 | 155 | 2.2 | retailer brand name, not a topic |
| `madu al shifa palsu` | 1 | 30 | 1.5 | competitor brand verification — round 3 discard, reason unchanged (§5) |
| `perbedaan madu al shifa asli dan palsu` | 3 | 18 | 2.1 | same |
| `madu al shifa asli dan palsu` | 1 | 9 | 1.7 | same |
| `madu yaman strong honey` | 1 | 8 | 2.6 | sexual/performance framing — permanently disqualified |
| `alshifa madu` / `al shifa madu` / `al syifa madu` | 0 | 6 / 2 / 1 | — | brand strings |
| `bolehkah cuka apel dicampur madu` | 0 | 1 | 1.0 | Indonesian phrasing, health corpus |
| `ayam madu near me` | 0 | 2 | 17.5 | restaurant intent; `madu-untuk-masakan` is adjacent and live |
| `asal buah kismis` | 0 | 1 | 8.0 | noise |

**That is the whole Malay surface of the sibling property, and every row is already answered,
already refused, or noise.** No round-4 Malay candidate below is justified by a new GSC row, and
none pretends to be. Where a candidate borrows GSC evidence it borrows the *behaviour* the table
shows — this audience checks whether the jar it owns is genuine — and says so explicitly.

### 0.3 What is SERP composition, not volume

Every "what currently ranks" section comes from `WebSearch` with a Malay query, plus `WebFetch` on
individual pages to measure real depth. The index is US-based, so it reads *which pages exist and
how deep they are* well and *Malaysian ranking order* poorly. I did not treat it as a ranking
snapshot anywhere.

**No search-volume figure of any kind appears in this file**, and none should be added downstream.
No Keyword Planner, no Ahrefs, no Semrush on this machine.

### 0.4 The structural finding from round 3 still holds, with one exception

Round 3 found that Malay honey SERPs are majority Indonesian, framed as `manfaat`/`khasiat`/dosage.
That held again in six of the eight searches I ran. **The exception is the one that produced this
round's two strongest candidates:** the February 2024 counterfeit-honey story is a *Malaysian*
story, broke in *Malay*, and its whole corpus — Berita Harian, Sinar Harian, Kosmo, Bernama, USM's
own newsroom, Malaysia Gazette, The Rakyat Post BM, Majoriti — is Malaysian and Malay-language.
It is the only subject I found where Malay is the *native* language of the source material rather
than the translated one.

---

## 1. Constraint check applied to every candidate

### 1.1 Cannibalisation — 22 live Malay focus keywords, off limits including near-paraphrases

`beli madu online atau kedai fizikal` · `beza madu tulen dan madu campuran` · `cara kenal madu asli` ·
`doorgift madu kahwin` · `habbatus sauda madu` · `hadiah madu untuk raya` · `kedai madu asli selangor` ·
`kenapa madu jadi gelap` · `madu beku dalam peti sejuk` · `madu berbuih` · `madu campur air panas` ·
`madu kelulut vs madu tualang` · `madu khalta` · `madu manuka vs madu tempatan malaysia` · `madu saffron` ·
`madu suami isteri` · `madu untuk ibu mengandung` · `madu untuk masakan` · `resepi sarapan guna madu` ·
`sarang madu boleh dimakan` · `tarikh luput madu` · `waktu terbaik makan madu`

### 1.2 The secondary-keyword grep — it killed three candidates outright

I extracted the `keywords` array from all 22 live Malay articles
(`sed -n '/^  keywords: \[/,/^  \],/p' src/content/articles/ms/*.ts`). Round 3 warned that this is
where the real collisions hide; it was right again. Findings that changed my shortlist, and that a
downstream writer needs:

- **`madu bayi bawah satu tahun`, `botulisme bayi dan madu`, `peraturan madu bawah 12 bulan` and
  `alahan kekacang dalam madu` are ALL live secondaries on `madu-untuk-ibu-mengandung`.** Round 3
  held `madu untuk bayi bawah 1 tahun` as "first in line if a pick is dropped". **It is no longer a
  reserve; it is cannibalised.** Three of its four load-bearing sub-questions were registered on the
  article that shipped instead of it. Correcting that carry-over is one of this file's results.
- **`tempah madu pukal` is a live secondary on `doorgift-madu-kahwin`.** That is the closest phrase
  in Malay to the bulk-order query, and it is taken. Any bulk/wholesale candidate has to route
  around it (see C5).
- **`madu untuk hadiah` (on `kedai-madu-asli-selangor`) and `beli madu untuk hadiah` (on
  `hadiah-madu-untuk-raya`)** both narrow the gifting space further than round 3 recorded.
- **`madu mentah` (on `madu-campur-air-panas`) and `madu mentah tidak dipasteur` (on `madu-berbuih`)**
  close the Malay raw-vs-processed angle that Arabic shipped as `al-farq-bayn-al-asal-al-kham-wal-musaffa`.
- **`madu berempah` (on `beza-madu-tulen-dan-madu-campuran`), `simpan madu suhu bilik` (on
  `madu-beku-dalam-peti-sejuk`), `madu campuran herba` (on `madu-suami-isteri`)** — round 3's kills,
  re-confirmed still live.
- **`shopee madu` and `tiktok shop madu` (on `beli-madu-online-atau-kedai-fizikal`)** close any
  marketplace-authenticity angle.
- **`harga madu manuka malaysia`, `kenapa madu manuka mahal` (on `madu-manuka-vs-...`) and
  `kenapa madu kelulut mahal` (on `madu-kelulut-vs-madu-tualang`)** close a general "kenapa madu
  asli mahal" candidate before it starts.

### 1.3 A body-copy grep, not only a keyword grep — and it found the round's biggest hazard

`cara-kenal-madu-asli.ts` line 47 already carries an **"Ujian semut"** table row
("Semut tertarik kepada gula dalam apa jua bentuk"). The ant-test myth is answered. Dead.

And the single most important line in this file:

> `src/content/articles/ms/beza-madu-tulen-dan-madu-campuran.ts:140` —
> *"Angka besar yang kerap dilontarkan tentang berapa banyak madu di pasaran ini palsu pula **tidak
> dapat kami sahkan, jadi kami tidak mengulanginya**."*

**A live Malay article states, in the site's own voice, that the site cannot verify the big
counterfeit-honey figure and therefore does not repeat it.** Round 3 then verified that entire story
in `FACTS-VERIFIED.md` and shipped `is-honey-in-malaysia-fake` in English, which repeats and
attributes it in detail. **The Malay page and the English page are already out of step.** C1 below
resolves that — but only if that one Malay sentence is edited in the same round. Shipping C1 and
leaving line 140 alone would publish a page that its own sibling article says the site refuses to
publish. This is an owner decision, flagged here so it is made deliberately.

### 1.4 Legal ceiling — Peraturan-Peraturan Makanan 1985

No prevent / treat / reduce / cure. No statute number and **no penalty figure** in body copy — note
that the Sinar Harian piece I measured for C1 carries a penalty figure (a fine and an imprisonment
term), and round 1 already invented a penalty once in Malay. **It must not be lifted.** The one
narrow, already-granted exception is Regulation 130 as a *composition* standard, exactly as
`FACTS-VERIFIED.md` licenses it. Every candidate below is scored on whether it survives with
`khasiat` / `manfaat` / dosage framing removed.

### 1.5 Banned terms

`tradisional` · `tradisi` · `timur tengah` · `turun-temurun` · `piawaian dikaji`, and the underlying
claim, not only the string. Flagged per candidate. Two candidates sit on subjects whose competitor
copy uses `tradisi` as the default descriptor and are called out.

### 1.6 Fabrication

SUBUR publishes **no price, no reviews, no ratings, no customer count, no certification of any kind,
no map, no MOQ, no lead time**, and **jar size and net weight are off limits entirely this round —
not to assert, and not to say the site omits them either**. Note that `/ms/retail/` FAQ and
`llms/ms.txt` both still print `250g, 400g dan 500g ... toleransi ±5%`, which is the unresolved
contradiction logged in `FACTS-COMMON.md`. **Nothing in round 4 goes near it.** Each candidate names
which fabrication it would be tempted into.

### 1.7 Not a translation of the English round

Checked against all 22 live English articles. Two are directly relevant and are dealt with head-on:
`is-honey-in-malaysia-fake.ts` (C1's English sibling) and `baking-with-honey-malaysia.ts` +
`honey-vs-gula-melaka.ts` (C3's). Neither Malay candidate is a translation, and §2 says exactly what
each one carries that its English counterpart does not.

---

## 2. Candidates

### C1 — `90 peratus madu palsu`

- **Slug:** `90-peratus-madu-palsu`
- **Intent:** Informational / market anxiety. "I keep seeing that 90% of honey in Malaysia is fake.
  Is that true, and what did the ministry actually say?"

**Demand evidence**

- GSC: **no row.** Stated plainly — the sibling retailer's log is Arab-honey shaped and carries no
  Malaysian-market query. What GSC *does* establish is the behaviour: this audience's most-evidenced
  honey activity across 16 months is checking whether a jar is genuine (`al shifa honey is pure or
  not` — 5 clicks, **262 impressions**, position **3.0**; `is al shifa honey pure` — **101
  impressions**; `madu al shifa palsu` — **30 impressions** at position **1.5**;
  `perbedaan madu al shifa asli dan palsu` — **18 impressions** at position **2.1**). The 90% figure
  is the market-level version of that same anxiety.
- Live SERP, pulled 2026-08-26 — and this is the densest, most authoritative Malay result set I have
  seen in two rounds of research on this site:
  - `news.kk.usm.my` — **USM's own newsroom**, two separate clippings:
    "90 peratus madu di pasaran adalah produk tiruan" and "90 peratus madu tiruan di pasaran, jadi
    cabaran besar kepada industri madu"
  - `mrem.bernama.com/mrembm/viewsm.php?idm=17899` — **KKM's own media statement**, 14 Feb 2024
  - `sinarharian.com.my/article/649472/...` — "Lambakan madu tiruan di pasaran: KKM sentiasa
    jalankan pemantauan"
  - `kosmo.com.my/2024/02/15/madu-asli-belum-tentu-berkualiti/`
  - `malaysiagazette.com/2024/02/14/hanya-7-syarikat-peroleh-pensijilan-autentik-produk-madu-dari-kkm/`
    (returns **HTTP 403** to automated fetch; its substance is confirmed by the Bernama statement)
  - `therakyatpost.com/trpbm/viral/2024/02/15/...` — BM edition, viral framing
  - `majoriti.com.my/berita/2025/01/14/...` — **republished 11 months later, January 2025.** The
    story did not die with the news cycle.
  - `mediamadani.com/2024/02/14/...`
  - **No volume figure obtained; "dense" is a count of publishers, not of searches.**

**What currently ranks, and how deep**

| Source | Depth (measured) | Character |
|---|---|---|
| `sinarharian.com.my` | **~380 words** (fetched and counted 2026-08-26) | News format. Carries both figures — the 90% claim and KKM's 45-of-769 / 5.85% — and **does not explain why they differ.** Mentions the Autentik / MeSTI / GMP / HACCP logos in passing. Carries a penalty figure. Reads as institutional rebuttal, not consumer explainer |
| `mrem.bernama.com` (KKM statement) | primary source, statement length | The origin of every figure downstream. Names the Berita Harian article it answers |
| `news.kk.usm.my` ×2 | press clippings | The claim side only — no ministry reply |
| `majoriti.com.my` (2025) | news | Republishes the 90% as live context for a local-entrepreneur story, **without the ministry reply at all** |
| `kosmo.com.my` | news | Pivots to "asli belum tentu berkualiti" — a different argument |

**The specific gap.** Every Malay page carries one number or both numbers and **not one of them
explains why two numbers that far apart can both be on the public record.** The Malaysian reader is
left choosing which authority to believe. The honest resolution — that MOH measured *compositional
compliance* on 769 samples it drew, while the 90% is a researcher's characterisation of a market on
a broader and undefined reading of the word "tiruan" — exists in `FACTS-VERIFIED.md` and exists in
English on this site. **It does not exist in Malay anywhere.** The longest Malay page in the set is
under 400 words and is a ministry press release rewritten.

**The angle, and why it is not the English article in Malay.** The English `is-honey-in-malaysia-fake`
is written for a reader who encountered a statistic in English-language media. The Malay reader
encountered it in *Berita Harian*, in the original, and has since seen it republished
(`majoriti.com.my`, Jan 2025) **without the ministry's reply attached**. So the Malay job is
different in a way I can point at: the claim has outlived its correction in Malay-language media
specifically, and the Malay article's spine is the pairing, not the debunk. Second, and this is the
part English does not have at all: the Malay corpus attaches a **Malaysian answer** to the question —
the KKM `Autentik` scheme (C2). C1 names it and hands off; C2 explains it.

**Risk register**

- *Legal ceiling:* **Low-medium.** No health surface. The Regulation 130 exception in
  `FACTS-VERIFIED.md` covers naming the standard and its three thresholds as reporting. **Two hard
  stops:** (a) the Sinar Harian source carries a **fine and imprisonment figure** — it must not be
  lifted, per the round-wide ban and round 1's precedent; (b) no sentence may tell the reader what
  the law permits *them* to do.
- *Fabrication:* **Medium, and specific.** Every figure exactly as `FACTS-VERIFIED.md` states it —
  769 samples, 45 non-compliant, 5.85%, from 2016, Regulation 130 — attributed to KKM and to
  **Dr Zulkifli Mustafa of USM's Neuroscience Department** by name, every time. **No derived
  arithmetic** ("jadi 94% selamat" is a calculation the ministry did not publish). **No implication
  that SUBUR was sampled, tested, or would pass.** No claim the 90% was retracted — as of this pull
  it is disputed, not withdrawn.
- *Cannibalisation:* **The live-article contradiction in §1.3 is the real risk, not keyword
  overlap.** Keyword-wise it is clean: `madu palsu Malaysia` is a live secondary on
  `cara-kenal-madu-asli`, so the focus keyword must be the numeric one (`90 peratus madu palsu`),
  never the generic one. Hard fence: **no home-test section at all** — `cara-kenal-madu-asli` owns
  the water / thumb / burn / ant tests and this article links to it. This piece evaluates a
  *statistic*, not a jar. Same fence the English article ships under.
- *Banned terms:* clean, but watch the industry-heritage register that "madu tempatan" reporting
  attracts.
- *Advertising trap:* **do not convert the fact-check into "so buy from a trusted seller like us".**
  That turns reporting into a claim about other people's products.

**Cross-language:** **English already ships it** (`is-honey-in-malaysia-fake`, live). Arabic does
not, and the Arabic researcher discarded the adjacent Al Shifa cluster on competitor-naming grounds,
so Arabic is unlikely to want it. **Recommend grouping MS with the live EN article** — same core
question — *provided* the Malay article's Autentik hand-off does not make it a materially different
page. If the writer finds it has, ship ungrouped and say so.

---

### C2 — `logo autentik kkm`

- **Slug:** `logo-autentik-kkm-madu`
- **Intent:** Label literacy / verification. "There is an 'Autentik' seal on this honey jar. Is that
  a real government mark, and can I check it?"

**Demand evidence**

- GSC: **no row.** Honest, and it is the reason this is #2 and not #1.
- Live SERP, 2026-08-26:
  - `hq.moh.gov.my/fsq/autentik` — **BKKM's own scheme page** (fetched 2026-08-26). It publishes two
    documents: *Garis Panduan Skim Pensijilan Makanan Autentik* (PDF, uploaded 18 April 2023) and
    ***Senarai Pemegang Sijil Makanan Autentik Kementerian Kesihatan Malaysia* (PDF, updated
    23 July 2025)**. The page itself carries no scope, criteria or validity detail — all of it sits
    inside the guideline PDF.
  - `mrem.bernama.com` (KKM statement, 14 Feb 2024) — "Skim Pensijilan Makanan Autentik ... bertujuan
    memberikan pengiktirafan ke atas produk makanan yang disahkan autentik/tulen", covering **madu,
    daging, kopi dan sarang burung walit**, and **7 companies held Autentik certification for honey
    products as at that date**.
  - `malaysiagazette.com` — "Hanya 7 syarikat peroleh Pensijilan Autentik produk madu dari KKM"
    (**403** to automated fetch; substance confirmed via Bernama).
  - `mediamadani.com/2024/02/14/pensijilan-autentik-diberikan-ke-atas-produk-makanan-tulen-seperti-madu-kkm/`
  - `olivehouse.my/2023/07/26/kepentingan-pensijilan-autentik-kkm/` — a **seller's** blog post, the
    only editorial Malay explainer in the set, and it is a certificate-holder marketing its own mark.
  - **Live consumer confusion, in the wild, dated to the pull:** a Threads exchange
    (`threads.com/@meta.ai/post/DaviD08iLxv/`) about a honey brand claiming an Autentik seal, which
    asserts *"senarai 7 syarikat tu tak dinyatakan dalam sumber awam, jadi kita tak boleh sahkan"* —
    and a second Threads post (`threads.com/@alseromi/post/DUpRNPektQQ/`) listing honey products it
    says hold the certificate. **Both are people trying and failing to verify a seal.**
  - **No volume figure obtained.**

**What currently ranks, and the specific gap**

There is **no Malay consumer explainer of this scheme anywhere in the result set.** There is the
ministry's own page (a document shelf, not an explanation), a ministry press statement, news
coverage that mentions the logo in one clause, one certificate-holder's marketing post, and two
social posts of people guessing.

**And the gap has a hard, checkable payoff that nobody has published:** the Threads claim that the
holder list is not public **appears to be wrong** — BKKM's own page carries a
*Senarai Pemegang Sijil Makanan Autentik* PDF dated **23 July 2025**. If that PDF does list honey
certificate holders, then a Malaysian shopper can verify an Autentik claim against a
government-published list, and **no Malay page tells them so.** That is a genuine consumer service,
it costs nothing legally, and it is exactly the move the site already makes for manuka —
`madu-manuka-vs-madu-tempatan-malaysia` tells readers to check a UMF licence mark at the grading
body rather than trust a printed number. This is the Malaysian counterpart of that logic.

**The angle.** What the scheme is and which foods it covers (madu, daging, kopi, sarang burung
walit); that it is a *product authenticity* certification and not a safety, halal or quality grade;
where the holder list lives and how to read a seal against it; and the honest limits — a scheme
covering four food categories is not a market-wide guarantee, and an absent logo is not evidence of
adulteration.

**Risk register**

- *Legal ceiling:* **Lowest in this file.** No health surface at all. **No penalty figure** — the
  news sources carry one.
- *Fabrication — this is the candidate's defining risk and it is severe.* The article names a
  government authenticity certification on the domain of a product that **publishes no certification
  of any kind**. Three absolute rules: (1) **no statement, implication or hint that SUBUR holds an
  Autentik certificate**, or a halal, MeSTI, GMP or HACCP one; (2) **the "7 syarikat" figure is a
  14 February 2024 figure and must never be published as a current count** — the holder list has been
  updated since (23 July 2025), so either attribute the number to its date and its statement, or omit
  it and point at the list; (3) **the writer must open the BKKM holders PDF and confirm it actually
  lists honey holders before a single sentence describes it.** I could not open the PDF in this pass
  and I am not asserting its contents. If it turns out not to list honey, the article's payoff
  collapses and the candidate drops to reserve.
- *Editorial judgement the owner must make, not the writer:* a page explaining Malaysia's official
  honey-authenticity mark, published by a honey seller that does not hold it, ends on "and this site
  publishes no certificate number". That is either the strongest trust signal the site can send or a
  self-inflicted wound, and it is a brand call. It is consistent with what the site already does —
  `llms/ms.txt` says *"laman ini tidak menyiarkan nombor sijil yang tidak dapat ditunjukkan"* and
  `cara-kenal-madu-asli` tells readers to ask the retailer directly about halal status. **I recommend
  it on the grounds of that consistency, and I am flagging the call rather than making it.**
- *Cannibalisation:* clean on focus and secondary keywords. Two fences: against
  `cara-kenal-madu-asli`, which owns home tests and carries one clause about "sebarang dokumen KKM
  atau makmal yang penjual boleh tunjukkan" — this article expands that clause and must not restage
  the test table; and against **C1**, below.
- *C1/C2 fence, written explicitly because they come from one news cycle:* **C1 evaluates a number.
  C2 explains a mark.** C1 may name the Autentik scheme in one sentence and link out; it may not
  describe the holder list or how to check a seal. C2 may state that the scheme drew attention during
  a 2024 dispute over counterfeit honey; it may not restate the 90% / 5.85% pairing. Same shape as
  round 3's ms1-vs-ms5 split (dates vs colour), which held.
- *Banned terms:* clean.

**Cross-language:** English's `how-to-read-a-honey-label-malaysia` is live and covers what a
Malaysian label must legally carry — a **different** subject (mandatory particulars vs a voluntary
certification scheme), and it does not mention Autentik. Arabic's `qiraat-mulsaq-al-asal-fi-malizia`
likewise. **Ship ungrouped**; a scheme run in Malay by a Malaysian ministry is most naturally a Malay
page, and neither sibling asks the same question.

---

### C3 — `tukar sukatan gula kepada madu`

- **Slug:** `tukar-sukatan-gula-kepada-madu`
- **Intent:** Utility / conversion. "My recipe says 1 cup of sugar. How much honey do I use instead?"

**This is the round-2 reserve `gula melaka vs madu`, and the brief is right that its reason changed —
but it changed into a different topic, not into the same one unblocked.** The comparison framing
(`gula melaka vs madu`) still fails: the strong incumbent and the glycaemic-heavy SERP are unchanged,
and **English now owns it outright** with `honey-vs-gula-melaka` live. What survives is the
*substitution-arithmetic* framing, and it survives because it has a **Malay incumbent that is
measurably wrong**, which is the site's proven strongest position.

**Demand evidence**

- GSC: **no row.**
- Live SERP, 2026-08-26, and it is genuinely Malaysian rather than Indonesian:
  - `myresipi.com/sukatan-gula-dalam-cawan-kepada-madu/` — "Cara Mudah Tukar Sukatan Gula Kepada Madu
    Dalam Setiap Resipi, Tetap Sedap & Sihat!"
  - `lemon8-app.com/@syushalala/7380735678000579088?region=my` — "Cara Kira Sukatan Gula ke Madu
    (Siap Jadual & Tip Mudah)" — a Malaysian creator publishing a **conversion table** as a card
  - `hellodoktor.com/pemakanan/fakta-nutrisi/gula-merah-untuk-kuih/` — occupies the adjacent
    gula-merah/gula-melaka ground, health-framed
  - Indonesian/Threads material (`alodokter`, `@reisabrotoasmoro`) fills the rest
  - **No volume figure obtained.** Two independent Malaysian publishers building the same *table* is
    the existence signal, and it is weaker evidence than C1's news corpus.

**What currently ranks, and how deep**

| Source | Depth (measured) | What it says |
|---|---|---|
| `myresipi.com` | **~280 words** (fetched and counted 2026-08-26) | A five-row conversion table, a sweetness justification, no temperature advice, no liquid advice, and health claims |
| `lemon8-app.com` | social card | "Siap Jadual & Tip Mudah" — a table in card form, no indexable depth |
| `hellodoktor.com` | health-media explainer | Different question (gula merah vs gula melaka for kuih) |

**The specific gap, with the arithmetic shown.** `myresipi.com`'s table, quoted verbatim from the
fetch:

| Its row | Correct at the ¾-cup consensus ratio | Verdict |
|---|---|---|
| `1/4 cawan gula = 3 sudu makan madu` | 0.75 × ¼ cup = 3/16 cup = **3 tbsp** | ✅ correct |
| `1/3 cawan gula = 3 sudu makan madu` | 0.75 × ⅓ cup = ¼ cup = **4 tbsp** | ❌ short by 25% |
| `1/2 cawan gula = 1/3 cawan madu` | 0.75 × ½ cup = 3/8 cup = **6 tbsp**; ⅓ cup = 5⅓ tbsp | ❌ short by ~11% |
| `1 cawan gula = 3/4 cawan madu` | **¾ cup** | ✅ correct |
| `2 cawan gula = 1.5 cawan madu` | **1.5 cups** | ✅ correct |

**Rows two and three map two different sugar quantities (¼ cup and ⅓ cup) to the same 3 tablespoons
of honey, which is internally impossible.** The page is not merely thin, it is arithmetically
self-contradicting, and it is the ranking Malay answer.

It also reproduces exactly the trap `FACTS-VERIFIED.md` was written to prevent: it justifies using
less honey with *"Rasa manis semula jadi yang ada pada madu lebih kuat dan pekat berbanding gula"* —
a **sweetness** claim used to explain a **volume** rule. Honey is about 17% water and by weight is
not sweeter than sugar; the charts call for less honey by volume because honey is far denser. And
neither Malaysian page gives the two instructions that actually make the substitution work: **reduce
another liquid, and drop the oven temperature.**

**The angle.** A corrected Malay conversion table, in Malaysian kitchen units (`cawan`, `sudu besar`)
with the metric equivalents worked out and shown, plus the two missing instructions, plus one honest
negative: a spiced comb blend is a spoon-and-drizzle product, not a bulk baking sweetener.

**Risk register**

- *Legal ceiling:* **Medium.** Every incumbent frames this as the *healthy* swap. **No glycaemic
  framing, no "lebih sihat daripada gula", no antioxidant or cough language** — `myresipi.com` runs
  all three. Strip the health argument entirely and the article is a measurement utility, which is
  legal and useful.
- *Fabrication:* **Medium-high, and arithmetic-shaped.** `FACTS-VERIFIED.md` §"Baking" is binding and
  non-negotiable: 1 US cup honey = 340 g, 1 cup sugar = 200 g, ¾ cup honey = 255 g, ≈128 g honey per
  100 g sugar, 25°F ≈ 14°C. **A ratio taken from a source in cups may never be published in grams
  without the cup masses and the division written out.** The volume ratio is 0.81 and the mass ratio
  is 1.28; carrying one across unchanged is precisely how the English round's first draft went wrong.
  Also: no jar size, no weight, no "one jar makes N batches".
- *Cannibalisation:* **The highest in this file, and the reason it ranks #3.** The live
  `madu-untuk-masakan` already tells readers *"Kalau anda ganti sebahagian gula biasa, kurangkan
  sedikit cecair lain dalam resipi itu"* and warns against replacing sugar entirely in baking. So the
  liquid-reduction advice is **already published in Malay**. The fence must be: `madu-untuk-masakan`
  owns *how honey behaves when heated* (browning, scorching, moisture, marinades, glazes); this
  article owns *the arithmetic of the swap* and nothing else. If the outline drifts into how honey
  behaves in the oven, it has become the live article and must be dropped. Also fence against
  `resepi-sarapan-guna-madu` (no recipes) and note `madu untuk bakeri` and `sudu madu untuk masakan`
  are live secondaries — the focus keyword must be the measurement one.
- *Translation risk:* **the file's highest.** English ships both `baking-with-honey-malaysia` and
  `honey-vs-gula-melaka`. The defence is that this is demand-led from a specific, measured, wrong
  Malay page, and its content is the correction of that page's table — not the English article's
  argument restated. **If the writer cannot build the piece around the Malay table, it is a
  translation and should be dropped.**
- *Banned terms:* clean.

**Cross-language:** English owns the ground already; Arabic reserved a sugar-substitution candidate
in round 2 (`استبدال السكر بالعسل`) and never shipped it. **Ship ungrouped** — grouping with
`baking-with-honey-malaysia` would assert these are one page, and if they were one page this
candidate would be a translation.

---

### C4 — `madu berasing dua lapisan` *(conditional)*

- **Slug:** `madu-berasing-dua-lapisan`
- **Intent:** Post-purchase anxiety. "My honey has separated into two layers. Is it spoiled, or was
  it mixed with something?"

**Demand evidence — and I am labelling this candidate's basis honestly, because it is not SERP
demand.**

- GSC: **no row.**
- Live SERP, 2026-08-26: **entirely Indonesian, in Indonesian phrasing.** `detik.com`
  ("9 Cara Mengenali Madu Murni atau Campuran"), `halodoc.com` ×2 (both about `madu berbusa`),
  a YouTube Short ("Tanda Madu Murni yang Malah Sering Dikira Basi"), `tekpan.unimus.ac.id`,
  `globalsolusiingredia.com`. **I found no Malaysian page and no Malay-Malaysian phrasing.** The
  Indonesian answers conflate separation with **mould and fermentation** and advise readers not to eat
  it. **No volume figure obtained.**
- **The actual case for this candidate is product-observability, not measured demand**, and it should
  only be commissioned on that basis: SUBUR is a raw honeycomb blend with ground nuts and spices in
  it. Comb wax (~0.95 g/cm³) and nut kernels (~1.0 g/cm³) are lighter than honey (~1.4 g/cm³) and
  **rise**. Separation is therefore not a myth this reader might encounter — it is what this
  product physically does in the jar, and the ranking answer online tells them it means spoilage.
  The site's own `beza-madu-tulen-dan-madu-campuran` FAQ already concedes blends *"berasing dengan
  masa"* in a single clause and never explains it.

**The specific gap.** The observable-anxiety series is the site's most proven Malay format — foam
(`madu-berbuih`), hardening (`madu-beku-dalam-peti-sejuk`), colour (`kenapa-madu-jadi-gelap`), date
(`tarikh-luput-madu`). **Layering is the fifth observable and the only one unowned**, and it is the
one where the site holds a physical fact its competitors get backwards.

**Risk register**

- *Legal ceiling:* **none.** No health surface whatsoever.
- *Fabrication:* **near zero** — the density facts are in `FACTS-COMMON.md`. Two stops: no jar size or
  weight, and **no timeline** ("after two weeks you will see…") because none is published.
- *Cannibalisation:* three fences, all manageable but all needed. `madu-berbuih` owns fermentation and
  gas — separation gets no fermentation section, one sentence and a link. `madu-beku-dalam-peti-sejuk`
  owns crystallisation, which is a *different* layering (granules settle, comb floats) and the article
  must distinguish rather than merge them. `beza-madu-tulen-dan-madu-campuran` owns the "campuran is
  not fake" argument and this article must not restate it. Keyword arrays are clean — no live article
  claims `berasing` or `berlapis`.
- *Banned terms:* clean.
- **Why it is conditional:** its demand case is inference from the product, not evidence from the
  market, and round 3 rejected `madu dan sudu besi` on exactly that ground (all-Indonesian SERP, no
  Malay-Malaysian phrasing). I am proposing this one anyway because, unlike a metal spoon, layering is
  something **a SUBUR jar actually does** — but I am not going to pretend the SERP supports it.
  **Commission only if the round wants a fourth article and accepts that basis.**

**Cross-language:** English has `how-to-store-honey-malaysia` and `honey-with-nuts-malaysia`, neither
of which addresses layering; Arabic has `tariqat-akl-al-asal-bil-shama`, which owns comb-vs-liquid and
**already holds `الفرق بين العسل بالشمع والعسل السائل` as a secondary** — so an Arabic sibling is
blocked. Ship ungrouped.

---

### C5 — `borong madu untuk kedai` *(examined at the brief's request; rejected)*

- **Slug considered:** `borong-madu-untuk-kedai`
- **Intent:** Transactional / B2B. "I want to stock or resell honey. What are the terms?"

**The brief is right that the recorded reason was wrong, and I am recording the correction.**
Rounds 2 and 3 discarded corporate/bulk gifting because "no published bulk pathway exists". That is
false. Verified in the repo 2026-08-26:

- `src/components/sections/Wholesale.astro` renders a wholesale enquiry form, rendered from
  `src/pages/[lang]/index.astro` — **on every locale's homepage**, anchored `#wholesale`.
- `src/content/pages/ms/retail.ts` carries a `wholesale-supply` section stating that shops and
  retailers wanting to sell SUBUR are supplied through Berkat Madinah and linking `/ms/#wholesale`.
- `src/content/llms/ms.txt` §"Borong" states bulk orders are supplied through the exclusive seller,
  that **"Harga pukal disebut mengikut jumlah, bukan disiarkan, kerana ia bergantung pada kuantiti"**,
  and its FAQ answers **yes** to whether a wholesale option exists. It also registers the search
  intents `borong madu subur`, `harga borong madu`, `agen madu subur`, `stokis madu malaysia`.

**So the pathway is published. The topic still fails, for a different reason, and this is the finding.**

- Live SERP, 2026-08-26. The Malay `borong madu` corpus is a **price-list ecosystem**, not an
  editorial one, and every ranking answer resolves the query with numbers this site cannot publish:
  - `madutualangasli.com.my/product/madu-tualang-asli-borong/` (fetched 2026-08-26) publishes
    **RM550–RM900**, 5 kg and 10 kg options, and *"Jika anda ingin borong madu tualang lebih daripada
    10 kilogram diminta hubungi kami melalui WhatsApp"*
  - `maduborongmurah.wordpress.com` — supplier listings
  - `borongmadu.my` — a whole domain built on the query (**connection timed out on fetch
    2026-08-26; existence confirmed via search result only, depth not measured**)
  - `usahawan.tudungsicomel.com` — the genre template: published wholesale/mini-stokis price tiers
  - Threads/Instagram/Telegram posts advertising `harga borong` and stokis entry terms
  - **No volume figure obtained.**
- **The query's core is price and MOQ.** SUBUR publishes neither, and jar sizes are off limits this
  round, so the article could not even describe what a mixed order contains. A page ranking for
  `borong madu` that answers "the price is quoted by quantity, please use the form" frustrates the
  search rather than serving it — the same failure round 3 identified for `harga madu asli Malaysia`.
- **And the nearest Malay phrase is already taken:** `tempah madu pukal` is a live secondary on
  `doorgift-madu-kahwin`, which — correctly — already says quantity orders are arranged by contacting
  the store and that no MOQ or lead time is published. **A new article would restate that live
  article's own honest position at greater length.**
- Corporate *gifting* specifically fails on a third ground. Its SERP (`baizigui.com` ×3,
  `floweradvisor.com.my`, `maukerja.my`, Lemon8, Threads hamper vendors, all pulled 2026-08-26) is a
  **hamper-assembly services** market: logo printing on packaging, budget-tiered contents, greeting
  cards, nationwide delivery. **SUBUR has no gift box, no wrapping service, no logo printing and no
  delivery of its own** — round 3's `ar6` fence says exactly this. A wholesale *supply* form is not a
  gifting *service*, and conflating them is how the article would end up inventing one.

**Verdict: reserve, on a corrected reason.** The old reason ("no bulk pathway") is retired. The
standing reason is: *the query is transactional, every ranking answer resolves it with a price and an
MOQ, SUBUR publishes neither, and the honest version of the answer is already live on
`doorgift-madu-kahwin`.* If a price band or MOQ is ever published, this becomes a strong candidate
immediately — it is the only topic in this file that is one owner decision away from clearing.

---

### C6 — `madu untuk bayi bawah 1 tahun` *(round-3 reserve — now cannibalised, not reserved)*

- **Status: closed, and the reason has changed for the worse.**
- Round 3 held this as "first in line if a pick is dropped". **It is no longer available.** The
  secondary-keyword grep shows `madu-untuk-ibu-mengandung` (shipped in round 3, live) registered
  **`madu bayi bawah satu tahun`**, **`botulisme bayi dan madu`** and **`peraturan madu bawah 12
  bulan`** — three of the four sub-questions this article exists to answer. Arabic ships
  `hal-al-asal-masmuh-lil-atfal-aqal-min-sana`.
- SERP, 2026-08-26: Malaysian incumbents exist and are strong — `my.theasianparent.com`,
  `doctoroncall.com.my`, `hellodoktor.com`, `majalahpama.my`, `mstar.com.my`, `junglehouse.com.my`.
  But the demand that is *not* already answered on this site sits in the over-one bracket, and there
  the entire Malay corpus is `manfaat`-framed and dosage-prescribing — "Tingkatkan Kesihatan Dan Imun
  Si Kecil", "Makanan Untuk Otak & Tubuh Anak", "4 manfaatnya", "½ hingga 1 sudu sehari". **There is
  no legal Malay article in the over-one bracket**, and the under-one bracket is taken. Closed on
  both halves.

---

### C7 — `simpan madu dalam balang kaca atau plastik`

- **Slug considered:** `balang-kaca-atau-plastik-untuk-madu`
- SERP, 2026-08-26, and this is the most unusual result set in the file: it is **almost entirely
  machine-translated foreign packaging-supplier content served on `/ms/` paths** —
  `antpackaging.com/ms/news/...`, `ms.xzbltglass.com`, `my.ejuicebottle.com`,
  `growbed.decorexpro.com/ms/...` ×2, `clean-ms.decorexpro.com/...`. One genuinely Malaysian page:
  `maduquadasli.com/cara-simpan-madu-dengan-betul/`. **No volume figure obtained.**
- The gap is real — the corpus is translation spam — but three things stop it. (1) **Demand is
  unevidenced in Malay**, and a result set made of translated supplier pages is evidence that
  *nobody Malaysian is writing about it*, not that anybody Malaysian is searching it. (2) The honest
  answer is contested and partly a **materials-safety claim** ("plastik melepaskan bahan berbahaya"),
  which is not a claim this site can make or verify. (3) The territory is partly claimed —
  `simpan madu suhu bilik` is a live secondary on `madu-beku-dalam-peti-sejuk`, and container advice
  without temperature advice is an odd half-page.
- **Reserve.** Better as a paragraph inside a future storage piece than as a page — the same call
  round 3 made for `madu dan sudu besi`, and for the same reason.

---

### C8 — `madu ginseng`

- **Disqualified — legal ceiling, and product-effect implication.**
- SERP, 2026-08-26: `jpnn.com` ("10 Khasiat Luar Biasa Ginseng Campur Madu"), `alodokter.com`,
  `nutrisius.co.id` ("Antara Imunitas dan Penambah Energi"), `hemaviton.com` ("Usir Lelah"),
  `k24klik.com` (a pasak-bumi tonic listing), `suaramerdeka.com`, `deleehoney.com`
  ("Temui Faedah Kesihatan Madu Ginseng"), TikTok. **Every single result is vitality, energy,
  immunity or stamina framing, and most are Indonesian.**
- On paper this looked like the natural third ingredient-literacy piece after `madu-saffron` and
  `habbatus-sauda-dan-madu` — ginseng root is ingredient #10. **It is not.** Saffron and black seed
  have a *label-literacy* question attached (what am I paying for, can I see it, where does it sit in
  the ingredient order). Ginseng's entire Malay/Indonesian corpus is an **effect** question, and a
  page titled `madu ginseng` **on the domain of a honey that contains ginseng** reads as a product
  claim no matter how carefully the body is written. It also sits one inch from `madu-suami-isteri`
  and from the ~1,700 impressions of sexual/performance demand this site is permanently barred from
  serving. Not a reserve — a disqualification.

---

### C9 — `hantaran madu`

- **Reserve, and English already holds the ground.**
- `src/content/articles/en/honeycomb-hantaran-gift-idea.ts` is **live in English**, so the site has
  already decided hantaran is a topic — which is odd, because hantaran is a Malay-language custom and
  Malay is its native register.
- But I could not find the demand. SERP, 2026-08-26 (`ppsignature.com` ×2, `habibjewels.com`,
  `ideahantaranbynh` on Facebook, Pinterest boards, a Threads discussion): the dulang-hantaran corpus
  is about **trays, themes, jewellery and odd numbers**, and **no result connects honey to hantaran at
  all**. The one search I ran that named both returned nothing honey-specific.
- Two further problems: the incumbent corpus is saturated with `tradisi` / `adat` / heritage framing —
  the **worst banned-terms exposure of any candidate in this file** — and the gifting cluster is
  already three articles deep in Malay (`doorgift-madu-kahwin`, `hadiah-madu-untuk-raya`,
  `kedai-madu-asli-selangor` holding `madu untuk hadiah`).
- **Reserve.** If a future round wants it, the honest route is to check whether the live English
  article earns anything before adding a fourth Malay gifting page.

---

### C10 — `madu subur tiruan` / unauthorised-reseller verification

- **Discard — already answered in body copy.**
- This is the shape with the *strongest* GSC signal in Malay (`madu al shifa palsu`, 30 impressions at
  position **1.5**) — a buyer verifying that the branded jar in front of them is the real one.
- But `beli-madu-online-atau-kedai-fizikal` already publishes, in body copy, *"pastikan anda membeli
  daripada storefront rasmi Berkat Madinah Store di Shopee atau TikTok Shop, **bukan penjual semula
  yang menyalin gambar produk**"*, and holds `shopee madu`, `tiktok shop madu` and
  `pastikan madu asli sebelum beli online` as secondaries. `kedai-madu-asli-selangor` covers the
  physical half.
- Doing it as a brand page would also mean naming a competitor brand in a verification headline —
  round 3's stated reason for discarding the Al Shifa cluster, **unchanged**. **Discard.** The correct
  response is internal linking, not a new page.

---

## 3. Ranked table

Ranking weights, in order: quality and size of the SERP gap (since no candidate has a GSC row of its
own) > legal-ceiling survivability with health framing removed > strength of the demand evidence
actually obtained > product relevance > fabrication and cannibalisation risk.

| # | Focus keyword (MS) | Slug | Intent | Demand evidence strength | Gap | Ceiling risk | Fabrication risk | Cannibalisation | Verdict |
|---|---|---|---|---|---|---|---|---|---|
| 1 | `90 peratus madu palsu` | `90-peratus-madu-palsu` | market anxiety | **Strongest in file** — 8+ Malay publishers incl. KKM + USM, still republished Jan 2025 | **Large** — deepest Malay page ~380 words and explains nothing | Low-med | Medium (figures, penalty) | **Must edit live line 140** of `beza-madu-tulen` | **PICK** |
| 2 | `logo autentik kkm` | `logo-autentik-kkm-madu` | label literacy | Ministry page + statement + news + live social confusion | **Largest** — zero Malay consumer explainers exist | **Lowest** | **High** (certification) | Clean; fence vs C1 | **PICK** |
| 3 | `tukar sukatan gula kepada madu` | `tukar-sukatan-gula-kepada-madu` | utility | Two Malaysian publishers building the same table | **Large** — ranking table is arithmetically self-contradicting | Medium | Med-high (ratios) | **Tight** vs `madu-untuk-masakan` | **PICK, fenced** |
| 4 | `madu berasing dua lapisan` | `madu-berasing-dua-lapisan` | post-purchase | **None in Malay** — case is product-observability | Medium-large | **None** | **Near zero** | 3 manageable fences | **Conditional** |
| 5 | `borong madu untuk kedai` | `borong-madu-untuk-kedai` | B2B transactional | Real Malay commercial ecosystem | Real but unservable | Low | **Disqualifying** (price/MOQ) | `tempah madu pukal` live | Reserve, reason corrected |
| 6 | `madu untuk bayi bawah 1 tahun` | — | safety | Malaysian incumbents exist | — | Med | Low | **Cannibalised — 3 secondaries live** | **Closed** |
| 7 | `simpan madu balang kaca atau plastik` | — | storage | **None** — SERP is translated supplier spam | Real but unevidenced | Low-med | Medium | Partly `madu-beku` | Reserve / fold in |
| 8 | `madu ginseng` | — | ingredient | Indonesian, 100% effect-framed | — | **Fails** | High | Near `madu-suami-isteri` | **Disqualified** |
| 9 | `hantaran madu` | — | gifting | **None honey-specific** | — | Low | Medium | 3 live gifting articles | Reserve |
| 10 | `madu subur tiruan` | — | brand verification | **Best GSC shape** (pos 1.5) | **None** — already in body copy | Low | Low | Direct | **Discard** |

---

## 4. Recommended — three firm, one conditional. Not six.

**1 — `90 peratus madu palsu` → `/ms/blog/90-peratus-madu-palsu/`**

The only subject I found in two rounds where **Malay is the source language of the material rather
than the translated one**. The claim broke in Berita Harian on 13 February 2024, the ministry
answered in Malay the next day, USM's own newsroom clipped it twice, and `majoriti.com.my` was still
republishing the 90% figure — **without the ministry's reply attached** — in January 2025. Eight Malay
publishers carry one number or both, and the deepest of them (`sinarharian.com.my`, ~380 words,
fetched 2026-08-26) **does not explain why the two numbers differ**. The explanation exists on this
site in English and nowhere in Malay. Ships with the English article's own fence: **no home-test
section**, `cara-kenal-madu-asli` owns that; this piece evaluates a statistic, not a jar.

**Its commissioning condition is not negotiable:** `beza-madu-tulen-dan-madu-campuran.ts:140`
currently says in Malay that the site cannot verify the big figure and therefore does not repeat it.
**That sentence must be edited in the same round, or C1 must not ship.** A site that publishes a
verified account of a figure while another of its own Malay pages says it refuses to repeat it has
published a contradiction against itself — which is the exact failure class the round-3 review was
built to catch.

**2 — `logo autentik kkm` → `/ms/blog/logo-autentik-kkm-madu/`**

The largest genuinely empty gap in the file. Malaysia has a government authenticity certification
scheme for honey — *Skim Pensijilan Makanan Autentik*, run by BKKM, covering madu, daging, kopi and
sarang burung walit — and **not one Malay consumer explainer of it exists.** What exists is a
ministry document shelf, a press statement, news coverage that names the logo in one clause, one
certificate-holder's marketing post, and people on Threads openly failing to verify a seal. BKKM's
own page publishes a *Senarai Pemegang Sijil Makanan Autentik* PDF updated **23 July 2025**, which
appears to contradict the widely repeated claim that the holder list is not public — and if it does,
a Malaysian shopper can check a seal against a government list and nobody has told them. It is the
Malaysian counterpart of the UMF-verification logic `madu-manuka-vs-madu-tempatan-malaysia` already
publishes, so the house position is consistent.

**Two conditions.** (a) The writer must **open the BKKM holders PDF and confirm it lists honey
holders** before describing it; I did not open it and am not asserting its contents. If it does not,
the payoff collapses and this drops to reserve. (b) The **"7 syarikat" figure is dated 14 February
2024 and must never appear as a current count.** And the ordinary discipline: no statement, hint or
implication that SUBUR holds Autentik, halal, MeSTI, GMP or HACCP certification of any kind.

**3 — `tukar sukatan gula kepada madu` → `/ms/blog/tukar-sukatan-gula-kepada-madu/`**

The round-2 reserve `gula melaka vs madu` does **not** survive as a comparison — the strong incumbent
is unchanged, the glycaemic SERP is unchanged, and English now owns it outright with
`honey-vs-gula-melaka` live. What survives is the substitution *arithmetic*, and it survives on its
own evidence: the ranking Malay answer (`myresipi.com`, ~280 words, fetched 2026-08-26) publishes a
table in which **¼ cup of sugar and ⅓ cup of sugar both convert to 3 tablespoons of honey**, which
cannot both be true, and it justifies the ratio with a sweetness claim about a volume rule — the
exact confusion `FACTS-VERIFIED.md` exists to prevent. Neither Malaysian page tells the reader to
reduce another liquid or lower the oven.

**Ranked third because it carries the file's highest cannibalisation and translation risk**, and the
fence must be written before the brief goes out: `madu-untuk-masakan` owns how honey *behaves* when
heated and already publishes the liquid-reduction line; this article owns the *arithmetic of the
swap* and nothing else. If the outline drifts into oven behaviour, it has become the live article. If
it cannot be built around the Malay table, it is a translation of the English round and should be
dropped.

**4 — `madu berasing dua lapisan` → `/ms/blog/madu-berasing-dua-lapisan/` — conditional**

Recommended **only if the round wants a fourth Malay article**, and only on a basis I want stated in
the brief rather than buried: **its case is product-observability, not measured demand.** The SERP is
entirely Indonesian in Indonesian phrasing, which is the ground round 3 used to reject `madu dan sudu
besi`. What makes this different is that layering is not a foreign myth — it is what a raw comb blend
with ground nuts physically does, comb and kernels being lighter than honey and rising, and the
ranking answers online misdiagnose it as mould or spoilage. It is the fifth and last unowned
observable in the site's most proven Malay format (foam → hardening → colour → date → layering), it
carries **zero legal risk and near-zero fabrication risk**, and the site's own
`beza-madu-tulen-dan-madu-campuran` concedes the phenomenon in one clause and never explains it.

**I found three articles worth writing without qualification, and a fourth worth writing if the round
wants four. I did not find six, and I am not going to pad to six.** Round 4 opens on 22 live Malay
articles that already own post-purchase anxiety, gifting, comparison and label literacy. A short round
that publishes the Malay half of the counterfeit-honey story and the only Malay explainer of a
Malaysian government mark is worth more than six pages, three of which would be reserves promoted
without their reasons having changed.

**Grouping recommendations (each needs a confirming check, not an assumption):**

| Pick | Group with | Confidence |
|---|---|---|
| `90-peratus-madu-palsu` | **EN** `is-honey-in-malaysia-fake` (live) | **High, conditional** — same question. If the Malay Autentik hand-off makes it a materially different page, ship ungrouped and say so |
| `logo-autentik-kkm-madu` | none | Standalone. EN `how-to-read-a-honey-label-malaysia` and AR `qiraat-mulsaq-al-asal-fi-malizia` answer a different question (mandatory particulars, not a voluntary scheme) |
| `tukar-sukatan-gula-kepada-madu` | none | **Deliberately ungrouped.** Grouping with EN `baking-with-honey-malaysia` would assert they are one page — and if they were, this is a translation |
| `madu-berasing-dua-lapisan` | none | AR sibling blocked: `tariqat-akl-al-asal-bil-shama` already holds `الفرق بين العسل بالشمع والعسل السائل` as a secondary |

---

## 5. Discarded and reserve

| Candidate | Status | Reason (and whether it changed) |
|---|---|---|
| `madu untuk hadiah korporat` / `pesanan pukal` / `borong madu untuk kedai` | **Reserve — REASON CORRECTED** | Rounds 2 and 3 said "no published bulk pathway exists". **That was wrong**: `Wholesale.astro` renders an enquiry form on every locale homepage, `/ms/retail/` and `/ms/contact/` point at it, and `llms/ms.txt` carries a wholesale section and an FAQ answering yes. **The topic still fails, on three new grounds:** (1) the Malay `borong madu` SERP is a price-list ecosystem — every incumbent resolves the query with RM figures and an MOQ, and SUBUR publishes neither; (2) `tempah madu pukal` is a live secondary on `doorgift-madu-kahwin`, which already states honestly that no MOQ or lead time is published; (3) corporate *gifting* specifically is a hamper-assembly services market (logo printing, tiered contents, delivery) and SUBUR has no box, no wrapping and no delivery of its own. **One owner decision — publishing a price band or MOQ — flips this to a strong candidate.** |
| `gula melaka vs madu` (comparison framing) | **Remains reserved — reason UNCHANGED, and now also taken** | The strong incumbent has not weakened and the glycaemic-heavy SERP is unchanged. **English now ships `honey-vs-gula-melaka`**, so the comparison is owned. Only the substitution-arithmetic framing survives, and it is C3 above under a different name — a different article, not this one unblocked. |
| `madu untuk bayi bawah 1 tahun` | **CLOSED — status downgraded from round 3's "first in line"** | No longer a reserve. `madu-untuk-ibu-mengandung` (shipped round 3) holds **`madu bayi bawah satu tahun`, `botulisme bayi dan madu`, `peraturan madu bawah 12 bulan`** as live secondaries, and Arabic ships the article. The remaining over-one bracket is 100% `manfaat`/dosage-framed in Malay and cannot be written legally. |
| `madu semasa berbuka puasa` | **Remains reserved — reason CONFIRMED, not re-litigated** | Round 3 re-checked it in 2026-08-25 and found every result `manfaat`-framed or dosage-prescribing. I did not re-run it because nothing about a Ramadan health corpus changes in twelve months, and spending a search re-confirming a settled call is worse than saying so. **If a future round wants it overturned, it needs a legal read, not another SERP pull.** |
| `bawa madu naik kapal terbang` | **Remains reserved — reason UNCHANGED** | Round 3 found no Malay demand of any kind and shipped the Arabic equivalent (`ar2`) instead, which is what demand-led means. Nothing in this round's research surfaced a Malay signal. The second objection also stands: the page would be built on airline and security rules the site does not control and cannot keep current. |
| `alahan madu` | **Reserve — needs legal read, unchanged** | The honest answer requires naming medical conditions. Note the additional block found this round: **`alahan kekacang dalam madu` is now a live secondary on `madu-untuk-ibu-mengandung`.** |
| `madu ginseng` | **Disqualified — new** | Entire Malay/Indonesian corpus is vitality, energy, immunity and stamina framing. Ginseng root is ingredient #10, so a `madu ginseng` page on this domain reads as a product-effect claim however the body is written, and it sits one inch from `madu-suami-isteri` and from the ~1,700 impressions of performance demand this site is barred from serving. |
| `simpan madu dalam balang kaca atau plastik` | **Reserve / fold in — new** | Gap is real (SERP is machine-translated foreign supplier content on `/ms/` paths) but demand is unevidenced, the honest answer is a contested materials-safety claim, and `simpan madu suhu bilik` is already live on `madu-beku-dalam-peti-sejuk`. |
| `hantaran madu` | **Reserve — new** | No honey-specific Malay demand found; the dulang-hantaran corpus is trays, themes and jewellery. Worst banned-terms exposure in the file (`tradisi` / `adat` saturation). English already ships `honeycomb-hantaran-gift-idea`, and Malay gifting is already three articles deep. |
| `madu subur tiruan` / unauthorised resellers | **Discard — new** | Strongest GSC *shape* in Malay (`madu al shifa palsu`, position 1.5) but already answered in body copy on `beli-madu-online-atau-kedai-fizikal` ("bukan penjual semula yang menyalin gambar produk"), and doing it as a brand page means naming a competitor in a verification headline — round 3's discard reason, unchanged. |
| `madu dan sudu besi` | **Reserve — unchanged** | Round 3's read stands: perfect voice fit, zero risk, all-Indonesian SERP in Indonesian phrasing. Better as a paragraph. |
| `madu asli mahal kenapa` / `harga madu asli Malaysia` | **Disqualified** | No price published, and the explanatory half is already taken twice over — `kenapa madu kelulut mahal` and `kenapa madu manuka mahal` are both live secondaries. |
| `beza madu mentah dan madu proses` | **Discarded — new** | Arabic shipped `al-farq-bayn-al-asal-al-kham-wal-musaffa`. In Malay it is cannibalised: **`madu mentah`** is a live secondary on `madu-campur-air-panas` and **`madu mentah tidak dipasteur`** on `madu-berbuih`. |
| `ujian semut` / `madu asli tak dikerumuni semut` | **Discarded — new** | `cara-kenal-madu-asli.ts:47` already carries an **"Ujian semut"** row. Body-copy grep, not keyword grep, is what caught it. |
| `khasiat madu` / `madu untuk kencing manis` / `madu untuk sakit tekak` / `madu untuk imun anak` | **Disqualified — permanent** | Cannot be satisfied without a prevent/treat/cure claim about a named condition. The highest-demand Malay honey queries that exist and permanently out of reach. Named again so a fifth round does not rediscover them as opportunities. |
| Sexual / aphrodisiac / marriage-outcome cluster (incl. `madu yaman strong honey`, 8 imp @ 2.6) | **Disqualified — legal, permanent** | Illegal under Malaysia's food rules, not merely aggressive. |
| Jar size / net weight / how long a jar lasts | **Disqualified — round-wide** | Off limits entirely this round, per `FACTS-COMMON.md`, including saying the site does not publish them. Note `/ms/retail/` FAQ and `llms/ms.txt` **still print `250g, 400g dan 500g ... ±5%`** — the unresolved contradiction. Round 4 goes nowhere near it. |

---

## 6. Evidence integrity

**No search-volume figure appears anywhere in this file.** Every number is either a Search Console
impression/position quoted verbatim from `docs/press/round-4/gsc-demand.md`, a measured competitor
word count, a figure quoted from a named primary source with its own date, or arithmetic shown in
full. Pull date for every live-web observation: **2026-08-26**.

**Three collection failures, recorded rather than papered over:**

1. **Google MY SERP fetch is still blocked** (attempted 2026-08-26, `gl=my&hl=ms`, returned Google's
   error page). This file therefore contains **no autocomplete and no "Soalan lazim" / PAA evidence**,
   and none was invented. Second consecutive round.
2. **`malaysiagazette.com` returns HTTP 403** to automated fetch. Its substance — the Autentik scheme
   and the seven honey certificate holders — is confirmed from **KKM's own media statement** on
   `mrem.bernama.com`, which is the better source anyway.
3. **`borongmadu.my` timed out** (`getaddrinfo ETIMEOUT`, 2026-08-26). Its existence is recorded from
   the search result; **its depth was not measured** and no claim about its content is made.

**One thing I asserted that a writer must verify before using it:** the BKKM Autentik page lists a
*Senarai Pemegang Sijil Makanan Autentik* PDF dated 23 July 2025. **I did not open that PDF.** C2's
payoff depends on it listing honey certificate holders. Confirm first, write second — round 1's
precedent is a writer who fetched a source PDF and correctly refused two figures his own research
file had asserted.

**Two facts in this file come from primary government sources and should be re-verified into
`FACTS-VERIFIED.md` before any writer quotes them:** the Autentik scheme's scope (madu, daging, kopi,
sarang burung walit) and the seven-holder count with its 14 February 2024 date. Neither is currently
in `FACTS-VERIFIED.md`; the English round-3 article does not mention Autentik at all.

**Sources fetched and read on 2026-08-26**

- `https://hq.moh.gov.my/fsq/autentik` — BKKM, Skim Pensijilan Makanan Autentik (scheme page,
  guideline PDF 2023-04-18, holders list PDF 2025-07-23)
- `https://mrem.bernama.com/mrembm/viewsm.php?idm=17899` — KKM media statement, 14 February 2024
  (Berita Harian article title and date, 769 / 45 / 5.85%, Regulation 130 thresholds, Autentik scheme,
  seven honey certificate holders)
- `https://www.sinarharian.com.my/article/649472/berita/semasa/lambakan-madu-tiruan-di-pasaran-kkm-sentiasa-jalankan-pemantauan`
  — ~380 words, measured
- `https://myresipi.com/sukatan-gula-dalam-cawan-kepada-madu/` — ~280 words, five-row table, measured
- `https://www.madutualangasli.com.my/product/madu-tualang-asli-borong/` — wholesale terms, measured
- `https://www.google.com/search?q=borong+madu+untuk+dijual+semula&gl=my&hl=ms` — **blocked**
- `https://malaysiagazette.com/2024/02/14/hanya-7-syarikat-peroleh-pensijilan-autentik-produk-madu-dari-kkm/` — **403**
- `https://borongmadu.my/` — **timed out**
