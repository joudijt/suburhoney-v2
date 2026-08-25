#!/bin/bash
BASE="https://suburhoney.com"
declare -a paths=(
  "en/blog/honey-with-nuts-malaysia/"
  "en/blog/honeycomb-hantaran-gift-idea/"
  "en/blog/is-honey-safe-during-pregnancy/"
  "en/blog/honey-allergy-symptoms/"
  "en/blog/honey-vs-gula-melaka/"
  "en/blog/is-honey-vegan/"
  "ms/blog/beli-madu-online-atau-kedai-fizikal/"
  "ms/blog/hadiah-madu-untuk-raya/"
  "ms/blog/madu-manuka-vs-madu-tempatan-malaysia/"
  "ms/blog/doorgift-madu-kahwin/"
  "ms/blog/resepi-sarapan-guna-madu/"
  "ms/blog/madu-untuk-masakan/"
  "ar/blog/limatha-yatfu-al-shama-fawq-al-asal/"
  "ar/blog/al-farq-bayn-asal-manuka-wal-asal-al-malizi/"
  "ar/blog/mukawwinat-khaltat-al-asal-bil-aashab/"
  "ar/blog/hal-al-asal-masmuh-lil-atfal-aqal-min-sana/"
  "ar/blog/shiraa-al-asal-online-fi-malizia/"
  "ar/blog/hadiyat-al-asal-lil-eid/"
)
mismatch=0
for p in "${paths[@]}"; do
  local_file="dist/$p" 
  local_file="${local_file}index.html"
  local_size=$(stat -c%s "$local_file" 2>/dev/null)
  remote_size=$(curl -s -o /dev/null -w "%{size_download}" "$BASE/$p")
  http_code=$(curl -s -o /dev/null -w "%{http_code}" "$BASE/$p")
  status="OK"
  if [ "$local_size" != "$remote_size" ]; then status="MISMATCH"; mismatch=$((mismatch+1)); fi
  printf "%-6s %-4s local=%-8s remote=%-8s %s\n" "$status" "$http_code" "$local_size" "$remote_size" "$p"
done
echo "mismatches: $mismatch"
