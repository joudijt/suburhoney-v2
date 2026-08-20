# Round 1 — rollback

Pre-round state captured before Stage 5 touched anything.

- Branch at start: `master`
- HEAD at start: `23452bc0e8c91e0eed3fd9aaa3851d26b7e54a51` ("Add the AI-visibility layer, and give the Arabic brief a charset")
- Working tree at start: clean, in sync with `origin/master`
- All round work happens on branch `press-round-1`

## Revert, repo

```sh
cd E:/suburhoney-v2
git checkout master            # round branch is untouched history; nothing to unwind
git branch -D press-round-1    # only if the round is abandoned outright
```

## Revert, live site

The live site is whatever `master` builds. If a round deploy needs undoing:

```sh
git checkout master
npm run build
SUBUR_FTP_PASS=... python scripts/ftp-deploy.py --clean
```

`--clean` deletes remote files with no local counterpart, which removes the round's article
directories and images. Live URL list before the round (27 sitemap locs) is in
`docs/press/round-1/pre-round-urls.txt`.
