import type { Article } from "../../articles/types";
import { BRANCHES, BRAND_SELLER, BRAND_SELLER_URL, SHOPEE_URL, TIKTOK_SHOP_URL, WHATSAPP_URL } from "../../../config/site";

export const page: Article = {
  slug: "contact",
  title: "Hubungi Madu Subur | Madu untuk Pasangan Suami Isteri di Malaysia",
  heading: "Hubungi Madu Subur",
  description:
    "Cara menghubungi Madu Subur, campuran madu untuk pasangan suami isteri di Malaysia: WhatsApp, dua cawangan Berkat Madinah Store di Selangor, kedai Shopee dan TikTok Shop miliknya, dan borang dalam talian kami untuk pertanyaan borong.",
  primaryKeyword: "hubungi madu subur",
  keywords: [
    "hubungi madu subur",
    "pertanyaan borong madu subur",
    "hubungi madu subur malaysia",
    "khidmat pelanggan madu subur",
    "cawangan Berkat Madinah Store",
    "madu untuk pasangan suami isteri malaysia",
  ],
  published: "2026-07-24",
  updated: "2026-08-14",
  readingMinutes: 3,
  icon: "/logo-8.webp",
  category: "Hubungi",
  blocks: [
    {
      type: "answer",
      question: "Bagaimana saya boleh menghubungi Madu Subur?",
      answer:
        "Madu Subur dijual eksklusif melalui Berkat Madinah Store, jadi semua jalan sampai kepada penjual yang sama: WhatsApp, mana-mana daripada dua cawangannya di Selangor, kedai Shopee miliknya dan TikTok Shop miliknya. Gunakan saluran itu untuk soalan pesanan dan produk, dan borang dalam talian kami untuk pertanyaan borong.",
    },
    {
      type: "heading",
      text: "Di mana saya boleh berkunjung sendiri?",
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
      text: `Kedua-dua cawangan berada di Selangor, dalam Lembah Klang. ${BRAND_SELLER} ialah peruncit eksklusif Madu Subur: <a href="${SHOPEE_URL}" target="_blank" rel="noopener noreferrer">kedai Shopee</a> dan <a href="${TIKTOK_SHOP_URL}" target="_blank" rel="noopener noreferrer">TikTok Shop</a> miliknya ialah kedai yang sama berniaga dalam talian, bukan penjual berasingan, dan Subur tidak dijual di pasar raya mahupun farmasi. Untuk menyemak stok sebelum anda bergerak ke sana, hubungi kedai melalui <a href="${WHATSAPP_URL}" target="_blank" rel="noopener noreferrer">WhatsApp</a>.`,
    },
    {
      type: "heading",
      text: "Saya menjalankan perniagaan dan ingin menstok Madu Subur - apa langkah seterusnya?",
      id: "wholesale-enquiries",
    },
    {
      type: "paragraph",
      text: `Pertanyaan borong menggunakan borang khusus, bukan hubungan umum - ia meminta butiran yang diperlukan untuk memberi sebut harga yang tepat pada kali pertama, tanpa berulang-alik. Dapatkannya di <a href="/ms/#wholesale">bahagian borong di laman utama kami</a>. Pesanan pukal turut dibekalkan melalui ${BRAND_SELLER}, yang menguruskan harga pukal dan stok.`,
    },
    {
      type: "heading",
      text: "Lihat gambaran penuh dahulu",
      id: "see-more",
    },
    {
      type: "list",
      items: [
        { text: "Tidak pasti saiz balang mana untuk dibeli? Lihat <a href=\"/ms/retail/\">di mana dan bagaimana untuk membeli secara runcit</a>." },
        { text: "Ingin tahu apa sebenarnya dalam campuran ini? Lihat <a href=\"/ms/benefits/\">senarai penuh khasiat</a>." },
        { text: "Mahu tahu kisah jenama dahulu? Lihat <a href=\"/ms/why-us/\">kenapa pelanggan memilih Subur</a>." },
      ],
    },
  ],
  faqs: [
    {
      q: "Bagaimana saya boleh menghubungi Madu Subur sekarang?",
      a: `Hantar mesej kepada <a href="${BRAND_SELLER_URL}" target="_blank" rel="noopener noreferrer">${BRAND_SELLER}</a> melalui <a href="${WHATSAPP_URL}" target="_blank" rel="noopener noreferrer">WhatsApp</a>, atau melalui kedai Shopee atau TikTok Shop miliknya, untuk soalan pesanan dan produk. Ia peruncit eksklusif Madu Subur, jadi kesemuanya sampai kepada pihak yang sama. Untuk pesanan perniagaan, gunakan borang pertanyaan borong di laman utama.`,
    },
    {
      q: "Di mana cawangan Berkat Madinah Store?",
      a: `Ada dua, kedua-duanya di Selangor: ${BRANCHES[0].area} (${BRANCHES[0].full}) dan ${BRANCHES[1].area} (${BRANCHES[1].full}).`,
    },
    {
      q: "Adakah nombor telefon atau e-mel untuk Madu Subur?",
      a: `<a href="${WHATSAPP_URL}" target="_blank" rel="noopener noreferrer">WhatsApp</a> ialah talian terus kepada kedai. Saluran telefon dan e-mel khusus sedang disediakan; sementara itu WhatsApp, chat Shopee, mesej TikTok Shop, borang borong, atau sekadar berkunjung ke mana-mana cawangan adalah cara terpantas untuk menghubungi kami.`,
    },
    {
      q: "Bagaimana saya bertanya tentang pesanan borong atau pukal?",
      a: `Gunakan borang pertanyaan borong di bahagian borong laman utama kami. Ia dibina khusus untuk pesanan perniagaan, dan bekalannya disalurkan melalui ${BRAND_SELLER} yang menguruskan harga pukal.`,
    },
    {
      q: "Bolehkah saya bertanya soalan produk sebelum membeli?",
      a: `Boleh - hantar mesej kepada ${BRAND_SELLER} melalui WhatsApp, atau melalui kedai Shopee atau TikTok Shop miliknya. Pekerja di mana-mana cawangan juga boleh menjawab secara bersemuka.`,
    },
  ],
  related: [],
};
