# PRESS round 3 — rollback

Recorded **before** Stage 5 touched a single repo file, per PRESS round-safety.

## Pre-round state

| Item | Value |
|---|---|
| Branch | `master` |
| HEAD before the round | `420b3e0fe554a1a540236950903625711e94c38c` |
| Working tree | clean and in sync with `origin/master` (verified with `git status -sb`) |
| Live articles | 48 — 16 English, 16 Malay, 16 Arabic |
| Sitemap locs | 66 |
| `node scripts/ai/facts-sync.mjs --check` | **green** (was red before this round; the CRLF-vs-LF fix is the one pre-Stage-5 change and is itself part of the round) |
| `node scripts/qa/banned-terms.mjs` | green |
| `node scripts/qa/banned-terms.mjs --dir=dist` | run at Stage 6 against the fresh build |

## To roll the code back

```bash
cd E:/suburhoney-v2
git reset --hard 420b3e0fe554a1a540236950903625711e94c38c          # discards every round-3 commit and edit
git clean -fd public/images src/content/articles docs/press/round-3
```

## To roll the *live site* back

The code revert alone changes nothing on the server. After resetting:

```bash
npm run build
SUBUR_FTP_PASS=... python scripts/ftp-deploy.py --clean
```

`--clean` is what removes the round-3 article directories and images from the docroot; without it
the old files stay and keep serving. Then re-check `https://suburhoney.com/sitemap.xml` shows 66
locs again, not 84.

Google will already have been told about the new URLs via IndexNow at that point, so a rollback
also means letting those URLs 404 and drop out naturally. That is the normal outcome; do not
robots-block them, which prevents the drop rather than causing it.
