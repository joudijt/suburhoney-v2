#!/bin/bash
set -uo pipefail
cd /e/suburhoney-v2
IMGEN="python /c/Users/tarek/.claude/skills/press/bin/imgen.py"
OUT=public/images
LOG=docs/press/round-2/image-gen.log
: > "$LOG"

gen() {
  local slug="$1"; shift
  local prompt="$1"; shift
  local f="$OUT/article-$slug.webp"
  if [ -f "$f" ]; then
    echo "SKIP (exists) $f" | tee -a "$LOG"
    return
  fi
  echo "=== $slug ===" | tee -a "$LOG"
  $IMGEN "$prompt" -o "$f" -W 1200 -H 900 --max-kb 110 2>&1 | tee -a "$LOG"
  if [ -f "$f" ]; then
    echo "OK $f $(stat -c%s "$f" 2>/dev/null || stat -f%z "$f") bytes" | tee -a "$LOG"
  else
    echo "FAIL $slug" | tee -a "$LOG"
  fi
}

gen "honey-with-nuts-malaysia" "a glass jar of honey with visible ground nut texture blended throughout, no whole nut halves visible, on a plain wooden kitchen counter, natural light, sharp focus on the subject, subject fills the frame"

gen "honeycomb-hantaran-gift-idea" "a glass honey jar with visible honeycomb inside, staged on a woven presentation tray with plain cloth, natural light, sharp focus on the subject, subject fills the frame"

gen "is-honey-safe-during-pregnancy" "a glass jar of honey with a wooden honey dipper resting beside it on a plain kitchen counter, soft natural light, sharp focus on the subject, subject fills the frame"

gen "honey-allergy-symptoms" "a glass jar of honey beside a small white dish of whole almonds and walnuts, plain kitchen counter, natural light, sharp focus on the subject, subject fills the frame"

gen "honey-vs-gula-melaka" "a glass jar of honey beside a bowl of dark brown palm sugar blocks, plain wooden kitchen counter, natural light, sharp focus on the subject, subject fills the frame"

gen "is-honey-vegan" "a glass jar of honey with a wooden dipper, on a plain light colored kitchen counter, minimal simple composition, natural light, sharp focus on the subject, subject fills the frame"

gen "beli-madu-online-atau-kedai-fizikal" "a glass jar of honey beside a smartphone with a blank plain screen, on a plain wooden table, natural light, sharp focus on the subject, subject fills the frame"

gen "hadiah-madu-untuk-raya" "a glass jar of honey on a woven rattan tray with plain green cloth, simple festive presentation, natural light, sharp focus on the subject, subject fills the frame"

gen "doorgift-madu-kahwin" "a row of three small glass honey jars lined up on a plain table, simple wedding favor presentation, natural light, sharp focus on the subject, subject fills the frame"

gen "resepi-sarapan-guna-madu" "honey being drizzled from a wooden dipper onto a bowl of oats and sliced fruit on a breakfast table, natural light, sharp focus on the subject, subject fills the frame"

gen "madu-untuk-masakan" "honey being poured from a jar into a glass mixing bowl on a kitchen counter, cooking preparation scene, natural light, sharp focus on the subject, subject fills the frame"

gen "limatha-yatfu-al-shama-fawq-al-asal" "a glass jar of honey with a pale golden waxy layer floating near the top of the jar, visible against the honey below, plain background, natural light, sharp focus on the subject, subject fills the frame"

gen "mukawwinat-khaltat-al-asal-bil-aashab" "a glass jar of honey surrounded by whole spices, star anise, a cinnamon stick, a walnut, arranged on a plain wooden surface, natural light, sharp focus on the subject, subject fills the frame"

gen "hal-al-asal-masmuh-lil-atfal-aqal-min-sana" "a glass jar of honey sitting on a plain kitchen counter, simple neutral still life, natural light, sharp focus on the subject, subject fills the frame"

gen "shiraa-al-asal-online-fi-malizia" "a glass jar of honey beside a plain brown cardboard parcel box with no labels, on a plain table, natural light, sharp focus on the subject, subject fills the frame"

gen "hadiyat-al-asal-lil-eid" "a single glass honey jar staged simply as a gift on a plain decorative cloth, elegant simple presentation, natural light, sharp focus on the subject, subject fills the frame"

echo "DONE ALL" | tee -a "$LOG"
