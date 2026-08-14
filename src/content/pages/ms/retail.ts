import type { Article } from "../../articles/types";
import { BRANCHES, BRAND_SELLER, BRAND_SELLER_URL, SHOPEE_URL, TIKTOK_SHOP_URL, WHATSAPP_URL } from "../../../config/site";

export const page: Article = {
  slug: "retail",
  title: "Di Mana Beli Madu Subur di Malaysia | Runcit",
  heading: "Di Mana Beli Madu Subur (Runcit)",
  description:
    "Madu Subur dijual eksklusif melalui Berkat Madinah Store - dua cawangannya di Selangor, kedai Shopee dan TikTok Shop miliknya. Tersedia dalam balang 250g, 400g dan 500g.",
  primaryKeyword: "beli madu subur",
  keywords: [
    "beli madu subur",
    "beli madu subur online",
    "madu subur shopee",
    "madu subur tiktok shop",
    "harga madu subur",
    "Berkat Madinah Store madu",
    "kedai arab Ampang",
    "kedai arab Batu Caves",
    "kedai barangan Arab Selangor",
  ],
  published: "2026-07-24",
  updated: "2026-08-14",
  readingMinutes: 4,
  icon: "/jarncap.webp",
  figureAlt:
    "Balang Subur Honey yang bertutup dengan latar krim yang bersih.",
  category: "Runcit",
  blocks: [
    {
      type: "answer",
      question: "Di mana saya boleh membeli Madu Subur secara runcit?",
      answer:
        `Madu Subur dijual eksklusif melalui ${BRAND_SELLER}. Anda boleh membelinya secara bersemuka di mana-mana daripada dua cawangannya di Selangor - Ampang Jaya dan Batu Caves - atau dalam talian di kedai Shopee dan TikTok Shop milik kedai itu sendiri. Balang tersedia dalam saiz 250g, 400g dan 500g (±5%). Ia tidak dijual di pasar raya mahupun farmasi.`,
    },
    {
      type: "paragraph",
      text: `Satu penjual, empat cara untuk sampai kepadanya. ${BRAND_SELLER} ialah kedai barangan Arab yang lengkap, bukan sekadar satu rak di pasar raya, dan ia satu-satunya peruncit Madu Subur. Empat cara itu ialah cawangan ${BRANCHES[0].area}, cawangan ${BRANCHES[1].area}, kedai Shopee miliknya dan TikTok Shop miliknya. Kedua-dua kedai dalam talian itu ialah kedai yang sama berniaga dalam talian - bukan penjual lain, dan tiada cara kelima untuk membelinya. WhatsApp pula ialah talian untuk bertanya tentang stok, bukan saluran pembelian.`,
    },
    {
      type: "heading",
      text: "Di mana cawangan Berkat Madinah?",
      id: "branches",
    },
    {
      type: "table",
      caption: `${BRAND_SELLER} - kedua-dua cawangan`,
      columns: ["Cawangan", "Alamat"],
      rows: BRANCHES.map((branch) => [branch.area, branch.full]),
    },
    {
      type: "paragraph",
      text: `Kedua-dua cawangan berada di Selangor, dalam Lembah Klang. Untuk menyemak stok sebelum anda bergerak ke sana, hubungi kedai melalui <a href="${WHATSAPP_URL}" target="_blank" rel="noopener noreferrer">WhatsApp</a>.`,
    },
    {
      type: "heading",
      text: "Bagaimana hendak membeli Madu Subur dalam talian?",
      id: "where-to-buy",
    },
    {
      type: "table",
      caption: `Empat cara membeli daripada ${BRAND_SELLER}`,
      columns: ["Saluran", "Sesuai untuk", "Di mana"],
      rows: [
        [`Di kedai - ${BRANCHES[0].area}`, "Membeli secara bersemuka dan melihat balang sebelum membayar", BRANCHES[0].full],
        [`Di kedai - ${BRANCHES[1].area}`, "Membeli secara bersemuka dan melihat balang sebelum membayar", BRANCHES[1].full],
        ["Shopee (kedai milik Berkat Madinah)", "Checkout terpantas, baucar Shopee dan perlindungan pembeli", "Lawati kedai Shopee"],
        ["TikTok Shop (kedai milik Berkat Madinah)", "Membeli terus daripada video atau siaran langsung TikTok", "Lawati TikTok Shop"],
      ],
    },
    {
      type: "callout",
      tone: "note",
      title: "Kenapa kedai Shopee itu bernama \"arabianvillagemalaysia\"?",
      text: `Itulah nama dagangan ${BRAND_SELLER} di platform marketplace - kedai yang sama, disenaraikan dengan nama yang digunakannya untuk menjual barangan Arabnya. Membeli di situ bermakna membeli daripada kedai itu sendiri, bukan daripada penjual semula.`,
    },
    {
      type: "heading",
      text: "Apakah saiz yang tersedia untuk Madu Subur?",
      id: "sizes",
    },
    {
      type: "list",
      items: [
        { term: "250g", text: "Balang permulaan, sesuai untuk mencuba amalan harian sebelum memilih saiz lebih besar." },
        { term: "400g", text: "Saiz paling popular untuk rutin camca harian seorang individu." },
        { term: "500g", text: "Nilai terbaik setiap gram, sesuai untuk pasangan yang mengambilnya bersama atau isi rumah yang cepat menghabiskan sebalang." },
      ],
    },
    {
      type: "callout",
      tone: "note",
      title: "Berat adalah ±5%",
      text: "Seperti yang tercetak pada setiap label, berat balang boleh berbeza sehingga 5% - normal untuk produk madu tulen yang diisi secara manual dan bukan kesilapan pembungkusan.",
    },
    {
      type: "heading",
      text: "Bagaimana jika saya mahu membeli dalam kuantiti besar?",
      id: "wholesale-supply",
    },
    {
      type: "paragraph",
      text: `Runcit adalah untuk sesiapa yang membeli satu atau beberapa balang untuk diri sendiri, keluarga atau kawan. Kedai dan peruncit yang ingin menjual Madu Subur turut dibekalkan melalui ${BRAND_SELLER} - eksklusiviti itu tidak berhenti di kaunter. Mulakan dengan <a href="/ms/#wholesale">pertanyaan borong kami</a> dan ia akan disalurkan kepada kedai tersebut, yang menguruskan harga pukal dan stok.`,
    },
    {
      type: "heading",
      text: "Adakah Madu Subur tersedia di luar Malaysia?",
      id: "outside-malaysia",
    },
    {
      type: "paragraph",
      text: "Buat masa ini, Madu Subur dihantar dalam Malaysia sahaja melalui saluran di atas. Jika anda berada di luar Malaysia, cara terpantas untuk menyemak pilihan penghantaran semasa adalah terus melalui <a href=\"" + SHOPEE_URL + "\" target=\"_blank\" rel=\"noopener noreferrer\">kedai Shopee</a> atau <a href=\"" + TIKTOK_SHOP_URL + "\" target=\"_blank\" rel=\"noopener noreferrer\">TikTok Shop</a> kedai tersebut, kerana zon penghantaran diuruskan oleh platform.",
    },
    {
      type: "cta",
      heading: "Tidak pasti balang mana yang sesuai untuk anda?",
      text: "Lihat apa yang ada di dalam setiap balang dan sebabnya.",
      label: "Lihat khasiat",
    },
  ],
  faqs: [
    {
      q: "Di mana saya boleh membeli Madu Subur di Malaysia?",
      a: `Madu Subur dijual eksklusif melalui <a href="${BRAND_SELLER_URL}" target="_blank" rel="noopener noreferrer">${BRAND_SELLER}</a> - secara bersemuka di ${BRANCHES[0].full}, atau di ${BRANCHES[1].full}, atau dalam talian di kedai Shopee dan TikTok Shop milik kedai itu sendiri.`,
    },
    {
      q: "Berapa banyak cawangan Berkat Madinah?",
      a: `Dua, kedua-duanya di Selangor: ${BRANCHES[0].area} (${BRANCHES[0].full}) dan ${BRANCHES[1].area} (${BRANCHES[1].full}).`,
    },
    {
      q: "Adakah Madu Subur dijual di pasar raya atau farmasi?",
      a: `Tidak. ${BRAND_SELLER} ialah peruncit eksklusif, jadi ia hanya boleh dibeli di dua cawangan tersebut atau di kedai Shopee dan TikTok Shop milik kedai itu sendiri.`,
    },
    {
      q: "Adakah kedai Shopee dan TikTok Shop itu dikendalikan orang lain?",
      a: `Tidak. Kedua-duanya milik ${BRAND_SELLER} - "arabianvillagemalaysia" ialah nama dagangan kedai itu di platform marketplace, bukan penjual berasingan.`,
    },
    {
      q: "Apakah saiz yang tersedia?",
      a: "Madu Subur tersedia dalam balang 250g, 400g dan 500g, setiap satu dengan toleransi berat ±5%, tercetak pada label.",
    },
    {
      q: "Adakah perbezaan antara harga runcit dan borong?",
      a: `Ya. Runcit adalah harga sebalang, sama ada anda membeli di cawangan atau di kedai Shopee dan TikTok Shop milik kedai itu. Perniagaan yang membeli dalam kuantiti besar perlu menggunakan borang pertanyaan borong kami, dan bekalannya disalurkan melalui ${BRAND_SELLER} dengan harga pukal berasingan.`,
    },
    {
      q: "Bagaimana saya tahu penyenaraian Madu Subur adalah tulen?",
      a: `Beli daripada ${BRAND_SELLER} sendiri - di mana-mana cawangan, di kedai Shopee atau TikTok Shop miliknya. Kami tidak dapat mengesahkan ketulenan balang yang ditawarkan oleh penyenaraian atau penjual lain.`,
    },
    {
      q: "Adakah Madu Subur dihantar ke luar Malaysia?",
      a: "Zon penghantaran diuruskan oleh platform jualan. Semak pilihan penghantaran semasa terus di penyenaraian Shopee atau TikTok Shop kedai tersebut sebelum membuat pesanan.",
    },
  ],
  related: [],
};
