#!/usr/bin/env python
"""
PRESS round 4 — Stage 5 wiring.

Same discipline as round 3's script: every edit guarded separately so a re-run
is a no-op, anchors are terminators rather than the previous round's last line,
and inserted array elements carry their own trailing comma.

Round 4 adds one thing round 3 did not have to handle:

  **A new English article joining a LIVE Arabic one changes that Arabic
  article's asset key.** `getAssetKey()` resolves a grouped article to its
  group's English slug, so the moment G13/G14/G15 exist, three live Arabic
  pages stop resolving to their own image key. Unless the new English key is
  registered pointing at the EXISTING Arabic image file, three live pages
  silently lose the picture they already ship. That is why `img` is explicit in
  the manifest rather than derived from the slug.

Usage:  python docs/press/round-4/wire.py [--check]
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


def wire_index(m):
    s = read(INDEX)
    imports_added = entries_added = 0

    anchor = "/** Newest first"
    for lang in ("en", "ms", "ar"):
        arts = [a for a in m["articles"] if a["lang"] == lang]
        if not arts:
            continue
        if f'as {arts[0]["ident"]} }}' in s:
            continue
        block = "\n// Round 4 (2026-08-26).\n" + "".join(
            f'import {{ article as {a["ident"]} }} from "./{lang}/{a["slug"]}";\n' for a in arts
        )
        idx = s.index(anchor)
        s = s[:idx] + block + s[idx:]
        imports_added += len(arts)

    for lang in ("en", "ms", "ar"):
        arts = [a for a in m["articles"] if a["lang"] == lang]
        if not arts:
            continue
        open_marker = f"  {lang}: [\n"
        arr_start = s.index(open_marker) + len(open_marker)
        arr_end = s.index("  ],\n", arr_start)
        if f'    {arts[0]["ident"]},\n' in s[arr_start:arr_end]:
            continue
        block = "".join(f'    {a["ident"]},\n' for a in arts)
        s = s[:arr_start] + block + s[arr_start:]
        entries_added += len(arts)

    write(INDEX, s)
    LOG.append(f"  index.ts: +{imports_added} imports, +{entries_added} ARTICLES entries")


def wire_groups(m):
    """Extend G10 in place, then append the five new PARTIAL_GROUPS entries."""
    s = read(INDEX)
    changed = False

    # G10 gains Arabic and becomes the site's first three-language group.
    for edit in m.get("groupEdits", []):
        if edit.get("action") != "extend" or not edit.get("addLocale"):
            continue
        pat = re.compile(
            r'(\{[^}]*' + re.escape(edit["match"]) + r'[^}]*\})'
        )
        mm = pat.search(s)
        if not mm:
            LOG.append(f'  !! {edit["id"]}: entry containing {edit["match"]} not found')
            continue
        entry = mm.group(1)
        if f'{edit["addLocale"]}:' in entry:
            LOG.append(f'  {edit["id"]}: already extended')
            continue
        new_entry = entry[:-1].rstrip().rstrip(",") + \
            f', {edit["addLocale"]}: "{edit["addSlug"]}" }}'
        s = s[:mm.start(1)] + new_entry + s[mm.end(1):]
        LOG.append(f'  {edit["id"]}: extended with {edit["addLocale"]} -> three-language group')
        changed = True

    anchor = "] as Partial<Record<Locale, string>>[];"
    tail = s.split("const PARTIAL_GROUPS")[-1]
    entries = []
    for g in m.get("newGroups", []):
        first = next(iter(g["members"].values()))
        if f'"{first}"' in tail:
            continue
        pairs = ", ".join(f'{k}: "{v}"' for k, v in g["members"].items())
        entries.append(f"  {{ {pairs} }}, // {g['id']}\n")
    if entries:
        idx = s.index(anchor)
        s = s[:idx] + "".join(entries) + s[idx:]
        LOG.append(f"  index.ts groups: +{len(entries)} PARTIAL_GROUPS entries")
        changed = True

    if changed:
        write(INDEX, s)
    else:
        LOG.append("  index.ts groups: nothing to add")


def wire_figures(m):
    """Register a figure for every asset key that needs one.

    `img` comes from the manifest, NOT from the slug, because three keys point
    at an existing Arabic image file so the live article keeps its picture.
    `img: null` means the key is already registered (the group's English member
    is a live article), so there is nothing to add.
    """
    s = read(FIGURES)
    seen, entries = set(), []
    for a in m["articles"]:
        key, img = a["assetKey"], a.get("img")
        if img is None or key in seen or f'"{key}": {{' in s:
            continue
        seen.add(key)
        entries.append(
            f'  "{key}": {{\n'
            f'    src: "{img}",\n'
            f'    width: {a["imgW"]},\n'
            f'    height: {a["imgH"]},\n'
            f"  }},\n"
        )
    if not entries:
        LOG.append("  articleFigures.ts: nothing to add")
        return
    header = (
        "\n  // Round 4 (2026-08-26). All 886x665.\n"
        "  // Three of these keys point at an image file that already existed: a new\n"
        "  // English article joining a live Arabic one takes over the group's asset\n"
        "  // key, so the key must resolve to the Arabic article's own picture or the\n"
        "  // live page silently loses the frame it already ships.\n"
    )
    idx = s.rindex("};\n")
    s = s[:idx] + header + "".join(entries) + s[idx:]
    write(FIGURES, s)
    LOG.append(f"  articleFigures.ts: +{len(entries)} figures")


RELATED_RE = re.compile(r"related: \[([^\]]*)\]")


def related_of(path):
    mm = RELATED_RE.search(read(path))
    return re.findall(r'"([^"]+)"', mm.group(1)) if mm else []


def inbound_counts(lang):
    d = ROOT / "src" / "content" / "articles" / lang
    counts = {}
    for f in sorted(d.glob("*.ts")):
        for slug in related_of(f):
            counts[slug] = counts.get(slug, 0) + 1
    return counts


def wire_inbound(m):
    """One inbound link per new article, with the freed slug computed, not fixed."""
    changed = skipped = 0
    for lang in ("en", "ms", "ar"):
        counts = inbound_counts(lang)
        for a in [x for x in m["articles"] if x["lang"] == lang]:
            link = a.get("inboundFrom")
            if not link:
                continue
            p = ROOT / "src" / "content" / "articles" / lang / f'{link["article"]}.ts'
            if not p.exists():
                LOG.append(f"  !! {p.name}: parent missing — inbound NOT wired")
                continue
            s = read(p)
            if f'"{a["slug"]}"' in s:
                skipped += 1
                continue
            current = related_of(p)
            safe = [c for c in current if counts.get(c, 0) > 1]
            if not safe:
                LOG.append(
                    f'  !! {p.name}: neither related slug ({", ".join(current)}) can be '
                    f"freed without orphaning it — inbound NOT wired"
                )
                continue
            victim = max(safe, key=lambda c: counts.get(c, 0))
            head, sep, tail = s.rpartition("related: [")
            tail = tail.replace(f'"{victim}"', f'"{a["slug"]}"', 1)
            write(p, head + sep + tail)
            counts[victim] = counts.get(victim, 1) - 1
            counts[a["slug"]] = counts.get(a["slug"], 0) + 1
            LOG.append(f'  {p.name}: related {victim} -> {a["slug"]}')
            changed += 1
    LOG.append(f"  inbound links: {changed} repointed, {skipped} already wired")


def main():
    m = json.loads(read(MANIFEST))
    LOG.append(f"round 4 wiring — {len(m['articles'])} articles"
               + (" [CHECK ONLY]" if CHECK else ""))
    wire_index(m)
    wire_groups(m)
    wire_figures(m)
    wire_inbound(m)
    print("\n".join(LOG))
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
