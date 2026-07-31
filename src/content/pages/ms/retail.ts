import type { Article } from "../../articles/types";
import { BRAND_SELLER_URL, SHOPEE_URL, TIKTOK_SHOP_URL } from "../../../config/site";

export const page: Article = {
  slug: "retail",
  title: "Di Mana Beli Madu Subur di Malaysia | Runcit",
  heading: "Di Mana Beli Madu Subur (Runcit)",
  description:
    "Beli Madu Subur secara runcit di Malaysia melalui Shopee, TikTok Shop atau Berkat Madinah Store. Tersedia dalam balang 250g, 400g dan 500g. Lihat setiap saluran yang disahkan di sini.",
  primaryKeyword: "beli madu subur",
  keywords: [
    "beli madu subur",
    "beli madu subur online",
    "madu subur shopee",
    "madu subur tiktok shop",
    "harga madu subur",
    "Berkat Madinah Store madu",
  ],
  published: "2026-07-24",
  updated: "2026-07-24",
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
        "Madu Subur dijual secara runcit melalui tiga saluran yang disahkan: kedai rasmi Shopee kami, TikTok Shop rasmi kami, dan pembekal rasmi kami Berkat Madinah Store. Balang tersedia dalam saiz 250g, 400g dan 500g (±5%). Pembelian melalui penyenaraian selain tiga ini tidak dapat kami sahkan atau sokong.",
    },
    {
      type: "paragraph",
      text: "Runcit adalah untuk sesiapa yang membeli satu atau beberapa balang untuk diri sendiri, keluarga atau kawan. Jika anda pemilik kedai, farmasi atau peruncit yang ingin menstok Madu Subur dalam kuantiti besar, lihat <a href=\"/ms/#wholesale\">program borong kami</a> - harga dan prosesnya berbeza.",
    },
    {
      type: "heading",
      text: "Platform mana yang menjual Madu Subur?",
      id: "where-to-buy",
    },
    {
      type: "table",
      caption: "Saluran runcit yang disahkan",
      columns: ["Saluran", "Sesuai untuk", "Pautan"],
      rows: [
        ["Shopee (kedai rasmi)", "Checkout terpantas, baucar Shopee dan perlindungan pembeli", "Lawati kedai Shopee kami"],
        ["TikTok Shop (kedai rasmi)", "Membeli terus daripada video atau siaran langsung TikTok", "Lawati TikTok Shop kami"],
        ["Berkat Madinah Store", "Pembekal rasmi kami, dengan kedai di seluruh Malaysia", "Lawati Berkat Madinah Store"],
      ],
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
      text: "Adakah Madu Subur tersedia di luar Malaysia?",
      id: "outside-malaysia",
    },
    {
      type: "paragraph",
      text: "Buat masa ini, Madu Subur dihantar dalam Malaysia sahaja melalui saluran di atas. Jika anda berada di luar Malaysia, cara terpantas untuk menyemak pilihan penghantaran semasa adalah terus melalui <a href=\"" + SHOPEE_URL + "\" target=\"_blank\" rel=\"noopener noreferrer\">kedai Shopee</a> atau <a href=\"" + TIKTOK_SHOP_URL + "\" target=\"_blank\" rel=\"noopener noreferrer\">TikTok Shop</a> kami, kerana zon penghantaran diuruskan oleh platform tersebut.",
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
      a: `Madu Subur tersedia melalui tiga saluran runcit yang disahkan: kedai rasmi Shopee kami, TikTok Shop rasmi kami, dan pembekal rasmi kami <a href="${BRAND_SELLER_URL}" target="_blank" rel="noopener noreferrer">Berkat Madinah Store</a>.`,
    },
    {
      q: "Apakah saiz yang tersedia?",
      a: "Madu Subur tersedia dalam balang 250g, 400g dan 500g, setiap satu dengan toleransi berat ±5%, tercetak pada label.",
    },
    {
      q: "Adakah perbezaan antara harga runcit dan borong?",
      a: "Ya. Runcit adalah harga sebalang untuk pembeli individu melalui Shopee, TikTok Shop atau Berkat Madinah Store. Perniagaan yang membeli dalam kuantiti besar perlu menggunakan borang pertanyaan borong kami, yang mempunyai harga pukal berasingan.",
    },
    {
      q: "Bagaimana saya tahu penyenaraian Madu Subur adalah tulen?",
      a: "Beli hanya melalui kedai rasmi Shopee kami, TikTok Shop rasmi kami, atau Berkat Madinah Store. Kami tidak dapat mengesahkan ketulenan balang yang dijual melalui penyenaraian atau penjual lain.",
    },
    {
      q: "Adakah Madu Subur dihantar ke luar Malaysia?",
      a: "Zon penghantaran diuruskan oleh platform jualan. Semak pilihan penghantaran semasa terus di penyenaraian Shopee atau TikTok Shop kami sebelum membuat pesanan.",
    },
  ],
  related: [],
};
