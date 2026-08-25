#!/usr/bin/env python
"""
PRESS round 3 — Stage 5 wiring.

Reads `manifest.json` (written once the map is final) and registers every
round-3 article in the three places the site needs it:

  1. `src/content/articles/index.ts` — the import line and the ARTICLES entry
  2. `src/config/articleFigures.ts`  — the lead figure, at its REAL pixel size
  3. the `related` array of one existing article per new article, so nothing
     ships as an orphan

Three things this script does deliberately, each of them a lesson from an
earlier round:

  * **Every edit is guarded separately.** Each insert checks whether it has
    already been applied and skips if so, so a re-run cannot half-apply or
    double-apply. A round-numbered script that only works once is the classic
    round-2 failure mode.
  * **Anchors are terminators, not the previous round's last line.** Inserting
    before `};` or before a stable comment survives any number of future
    rounds; anchoring on "whatever round 2 happened to leave last" works exactly
    once.
  * **Trailing commas are handled.** Inserting before the closing bracket of an
    array whose last element already ends in `,` produced `},,` and a TS2322 on
    a previous project. Elements are emitted with their own trailing comma and
    inserted *after* an existing element line, never spliced against a bracket.

Usage:  python docs/press/round-3/wire.py [--check]
        --check reports what it would do and writes nothing.
"""

import io
import json
import re
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parents[3]
MANIFEST = Path(__file__).with_name("manifest.json")
INDEX = ROOT / "src" / "content" / "articles" / "index.ts"
FIGURES = ROOT / "src" / "config" / "articleFigures.ts"

CHECK = "--check" in sys.argv
LOG = []


def read(p):
    return io.open(p, encoding="utf-8").read()


def write(p, s):
    if CHECK:
        LOG.append(f"  WOULD WRITE {p.relative_to(ROOT)}")
        return
    io.open(p, "w", encoding="utf-8", newline="").write(s)
    LOG.append(f"  wrote {p.relative_to(ROOT)}")


def insert_before(text, anchor, block, guard):
    """Insert `block` immediately before the first `anchor`, unless `guard` is present."""
    if guard in text:
        return text, False
    idx = text.index(anchor)
    return text[:idx] + block + text[idx:], True


def wire_index(m):
    s = read(INDEX)
    added_imports = 0
    added_entries = 0

    # 1. Import lines. Anchor: the blank line before the ARTICLES export comment,
    #    which has been stable since the file was created.
    anchor = "/** Newest first"
    for lang in ("en", "ms", "ar"):
        arts = [a for a in m["articles"] if a["lang"] == lang]
        if not arts:
            continue
        lines = [f'import {{ article as {a["ident"]} }} from "./{lang}/{a["slug"]}";\n' for a in arts]
        header = f"\n// Round 3 (2026-08-25).\n"
        block = header + "".join(lines)
        # Guard on the first identifier of this language's round-3 set.
        s, did = insert_before(s, anchor, block, f'as {arts[0]["ident"]} }}')
        if did:
            added_imports += len(arts)

    # 2. ARTICLES entries, newest first — inserted at the head of each locale array.
    for lang in ("en", "ms", "ar"):
        arts = [a for a in m["articles"] if a["lang"] == lang]
        if not arts:
            continue
        open_marker = f"  {lang}: [\n"
        block = "".join(f"    {a['ident']},\n" for a in arts)
        first_ident = arts[0]["ident"]
        # Guard: is this ident already inside the ARTICLES map (not just imported)?
        arr_start = s.index(open_marker) + len(open_marker)
        arr_end = s.index("  ],\n", arr_start)
        if f"    {first_ident},\n" in s[arr_start:arr_end]:
            continue
        s = s[:arr_start] + block + s[arr_start:]
        added_entries += len(arts)

    write(INDEX, s)
    LOG.append(f"  index.ts: +{added_imports} imports, +{added_entries} ARTICLES entries")


def wire_figures(m):
    s = read(FIGURES)
    entries = []
    # Six articles this round share a lead image with their hreflang partner, so
    # several map to the SAME assetKey. Without this seen-set the object would
    # get the same key twice and TypeScript would silently keep the last one -
    # a duplicate-key bug that a build does not fail on.
    seen = set()
    for a in m["articles"]:
        key = a.get("assetKey") or a["slug"]
        if key in seen or f'"{key}": {{' in s:
            continue
        seen.add(key)
        entries.append(
            f'  "{key}": {{\n'
            f'    src: "/images/article-{key}.webp",\n'
            f'    width: {a["imgW"]},\n'
            f'    height: {a["imgH"]},\n'
            f"  }},\n"
        )
    if not entries:
        LOG.append("  articleFigures.ts: nothing to add")
        return
    header = (
        "\n  // Round 3 (2026-08-25). 886x665 - the free generator's hard cap,\n"
        "  // confirmed by two control runs that both returned 886x665 whatever\n"
        "  // size was requested. Declared at its REAL size: the pipeline never\n"
        "  // upscales, and a template that claims 1200x900 for a 886x665 file\n"
        "  // ships a lie the image audit cannot see.\n"
    )
    # Anchor on the object terminator, which survives every future round.
    anchor = "};\n"
    idx = s.rindex(anchor)
    s = s[:idx] + header + "".join(entries) + s[idx:]
    write(FIGURES, s)
    LOG.append(f"  articleFigures.ts: +{len(entries)} figures")


RELATED_RE = re.compile(r'related: \[([^\]]*)\]')


def related_of(path):
    m = RELATED_RE.search(read(path))
    return re.findall(r'"([^"]+)"', m.group(1)) if m else []


def inbound_counts(lang):
    """How many other articles in this locale link to each slug via `related`."""
    d = ROOT / "src" / "content" / "articles" / lang
    counts = {}
    for f in sorted(d.glob("*.ts")):
        for slug in related_of(f):
            counts[slug] = counts.get(slug, 0) + 1
    return counts


def wire_inbound(m):
    """Give every new article one inbound link from an existing article.

    Each new article names the parent that should point at it. **Which of the
    parent's two `related` slugs gets replaced is computed, not hardcoded**:
    take whichever currently has the most inbound links elsewhere, and refuse
    the swap if that would drop it to zero. Otherwise a round that fixes its own
    orphans creates new ones somewhere else.

    Replacing rather than appending keeps the count at two, because the related
    grid is `sm:grid-cols-2` and a third card breaks the row.
    """
    changed, skipped = 0, 0
    for lang in ("en", "ms", "ar"):
        counts = inbound_counts(lang)
        # Provisionally credit each new article, so two new articles in the same
        # locale cannot both strip the same parent's only remaining link.
        for a in [x for x in m["articles"] if x["lang"] == lang]:
            link = a.get("inboundFrom")
            if not link:
                continue
            p = ROOT / "src" / "content" / "articles" / lang / f'{link["article"]}.ts'
            if not p.exists():
                LOG.append(f"  !! {p.name}: parent not found — inbound link NOT wired")
                continue
            s = read(p)
            if f'"{a["slug"]}"' in s:
                skipped += 1
                continue  # already wired, re-run is a no-op

            current = related_of(p)
            # Candidates that stay linked elsewhere after losing this one.
            safe = [c for c in current if counts.get(c, 0) > 1]
            if not safe:
                LOG.append(
                    f'  !! {p.name}: neither related slug ({", ".join(current)}) '
                    f"can be freed without orphaning it — inbound link NOT wired"
                )
                continue
            victim = max(safe, key=lambda c: counts.get(c, 0))

            head, sep, tail = s.rpartition("related: [")
            if not sep:
                LOG.append(f"  !! {p.name}: no related array")
                continue
            tail = tail.replace(f'"{victim}"', f'"{a["slug"]}"', 1)
            write(p, head + sep + tail)
            counts[victim] = counts.get(victim, 1) - 1
            counts[a["slug"]] = counts.get(a["slug"], 0) + 1
            LOG.append(f'  {p.name}: related {victim} -> {a["slug"]}')
            changed += 1
    LOG.append(f"  inbound links: {changed} repointed, {skipped} already wired")


def wire_groups(m):
    """Add this round's hreflang groups to PARTIAL_GROUPS in index.ts.

    All six round-3 groups are two-language, so they all belong in
    PARTIAL_GROUPS rather than ARTICLE_GROUPS - which is `Record<Locale, string>`
    and would demand all three locales. G9 and G11 have no English member and so
    get no x-default; that is `SEO.astro`'s existing behaviour, not something
    wired here.

    Anchored on the array terminator so it survives any number of future rounds,
    and each entry is guarded individually so a re-run is a no-op.
    """
    s = read(INDEX)
    entries = []
    for g in m.get("groups", []):
        members = g["members"]
        first = next(iter(members.values()))
        if f'"{first}"' in s.split("const PARTIAL_GROUPS")[-1]:
            continue
        pairs = ", ".join(f'{k}: "{v}"' for k, v in members.items())
        entries.append(f"  {{ {pairs} }}, // {g['id']}\n")
    if not entries:
        LOG.append("  index.ts groups: nothing to add")
        return
    anchor = "] as Partial<Record<Locale, string>>[];"
    idx = s.index(anchor)
    s = s[:idx] + "".join(entries) + s[idx:]
    write(INDEX, s)
    LOG.append(f"  index.ts groups: +{len(entries)} PARTIAL_GROUPS entries")


def main():
    if not MANIFEST.exists():
        print(f"manifest not found: {MANIFEST}")
        return 1
    m = json.loads(read(MANIFEST))
    LOG.append(f"round 3 wiring — {len(m['articles'])} articles" + (" [CHECK ONLY]" if CHECK else ""))
    wire_index(m)
    wire_groups(m)
    wire_figures(m)
    wire_inbound(m)
    print("\n".join(LOG))
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
