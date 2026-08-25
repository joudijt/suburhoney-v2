const ROWS = [
  ["en","honey-with-nuts-malaysia"],["en","honeycomb-hantaran-gift-idea"],
  ["en","is-honey-safe-during-pregnancy"],["en","honey-allergy-symptoms"],
  ["en","honey-vs-gula-melaka"],["en","is-honey-vegan"],
  ["ms","beli-madu-online-atau-kedai-fizikal"],["ms","hadiah-madu-untuk-raya"],
  ["ms","madu-manuka-vs-madu-tempatan-malaysia"],["ms","doorgift-madu-kahwin"],
  ["ms","resepi-sarapan-guna-madu"],["ms","madu-untuk-masakan"],
  ["ar","limatha-yatfu-al-shama-fawq-al-asal"],["ar","al-farq-bayn-asal-manuka-wal-asal-al-malizi"],
  ["ar","mukawwinat-khaltat-al-asal-bil-aashab"],["ar","hal-al-asal-masmuh-lil-atfal-aqal-min-sana"],
  ["ar","shiraa-al-asal-online-fi-malizia"],["ar","hadiyat-al-asal-lil-eid"],
];
const wc = s => (s.replace(/<[^>]+>/g," ").match(/\S+/g)||[]).length;
function blockWords(b) {
  let t = "";
  if (b.type === "answer") t = b.question + " " + b.answer;
  else if (b.type === "heading") t = b.text;
  else if (b.type === "paragraph") t = b.text;
  else if (b.type === "list") t = (b.title||"") + " " + b.items.map(i=>(i.term||"")+" "+i.text).join(" ");
  else if (b.type === "steps") t = (b.title||"") + " " + b.steps.map(s=>s.title+" "+s.text).join(" ");
  else if (b.type === "table") t = (b.caption||"") + " " + b.columns.join(" ") + " " + b.rows.flat().join(" ");
  else if (b.type === "callout") t = b.title + " " + b.text;
  else if (b.type === "ingredients") t = (b.title||"") + " " + b.items.map(i=>i.name+" "+i.text).join(" ");
  else if (b.type === "quote") t = b.text + " " + (b.attribution||"");
  else if (b.type === "cta") t = b.heading + " " + b.text + " " + b.label;
  return wc(t);
}
for (const [lang, slug] of ROWS) {
  const mod = await import(new URL(`../../../src/content/articles/${lang}/${slug}.ts`, import.meta.url).href);
  const a = mod.article;
  const body = a.blocks.reduce((sum,b) => sum + blockWords(b), 0);
  const faqWords = a.faqs.reduce((sum,f) => sum + wc(f.a), 0);
  console.log(`${lang}/${slug}\tbody=${body}\tfaqs=${faqWords}\ttotal=${body+faqWords}`);
}
