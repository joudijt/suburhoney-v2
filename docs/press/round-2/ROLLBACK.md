# Round 2 — rollback

Pre-round state captured before Stage 5 touches anything.

- Branch at start: `master`
- HEAD at start: `b13c44b6dbb8ddfbf2e2242d2db0b89656a21304` (round 1's merge commit)
- Working tree at start: clean, in sync with `origin/master`
- All round-2 work happens on branch `press/round-2`
- One pre-Stage-5 change already landed on this branch: `scripts/ai/facts-sync.mjs` had banned
  positioning terms (`tradisional`, `Timur Tengah`, `تقليدي`, `الشرق الأوسط`) hardcoded into the
  Malay/Arabic `definition`/`category`/`audience` strings it writes to `AI-FACTS.yml`. Confirmed
  this does **not** ship live (about.md/faq.md/AGENTS.md only consume the English `site.definition`
  key — checked `scripts/ai/build.mjs`), so it is a repo-hygiene fix, not a live-content revert.
  See DECISIONS.md D17.

## Revert, repo

```sh
cd E:/suburhoney-v2
git checkout master            # round branch is untouched history; nothing to unwind
git branch -D press/round-2    # only if the round is abandoned outright
```

## Revert, live site

```sh
git checkout master
npm run build
SUBUR_FTP_PASS=... python scripts/ftp-deploy.py --clean
```

`--clean` deletes remote files with no local counterpart, which removes round 2's article
directories and images. Live URL list before round 2 (48 sitemap locs — the 27 pre-round-1 + 21
round-1 URLs) is in `docs/press/round-2/pre-round-urls.txt`.
