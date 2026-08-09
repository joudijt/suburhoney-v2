import type { Article } from "../../articles/types";
import { BRAND_SELLER_URL } from "../../../config/site";

export const page: Article = {
  slug: "contact",
  title: "Hubungi Madu Subur | Madu untuk Pasangan Suami Isteri di Malaysia",
  heading: "Hubungi Madu Subur",
  description:
    "Cara menghubungi Madu Subur, campuran madu untuk pasangan suami isteri di seluruh Malaysia: pertanyaan runcit melalui Shopee dan TikTok Shop, pertanyaan borong melalui borang dalam talian kami, dan sokongan melalui pembekal rasmi kami Berkat Madinah Store.",
  primaryKeyword: "hubungi madu subur",
  keywords: [
    "hubungi madu subur",
    "pertanyaan borong madu subur",
    "hubungi madu subur malaysia",
    "khidmat pelanggan madu subur",
    "madu untuk pasangan suami isteri malaysia",
  ],
  published: "2026-07-24",
  updated: "2026-07-24",
  readingMinutes: 3,
  icon: "/logo-8.webp",
  category: "Hubungi",
  blocks: [
    {
      type: "answer",
      question: "Bagaimana saya boleh menghubungi Madu Subur?",
      answer:
        "Madu Subur ialah campuran madu untuk pasangan suami isteri di seluruh Malaysia. Cara terpantas untuk menghubungi kami adalah melalui saluran rasmi Shopee dan TikTok Shop kami untuk soalan pesanan dan produk, borang dalam talian kami untuk pertanyaan borong, dan pembekal rasmi kami Berkat Madinah Store. Anda juga boleh menghantar mesej terus kepada kami di WhatsApp.",
    },
    {
      type: "heading",
      text: "Saya menjalankan perniagaan dan ingin menstok Madu Subur - apa langkah seterusnya?",
      id: "wholesale-enquiries",
    },
    {
      type: "paragraph",
      text: "Pertanyaan borong menggunakan borang khusus, bukan hubungan umum - ia meminta butiran yang diperlukan oleh pasukan kami untuk memberi sebut harga yang tepat pada kali pertama, tanpa berulang-alik. Dapatkannya di <a href=\"/ms/#wholesale\">bahagian borong di laman utama kami</a>.",
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
      a: `Hantar mesej kepada kami melalui Shopee atau TikTok Shop rasmi untuk soalan pesanan dan produk, gunakan borang pertanyaan borong di laman utama untuk pesanan perniagaan, atau hubungi pembekal rasmi kami <a href="${BRAND_SELLER_URL}" target="_blank" rel="noopener noreferrer">Berkat Madinah Store</a> terus.`,
    },
    {
      q: "Adakah nombor telefon atau e-mel untuk Madu Subur?",
      a: "Saluran hubungan telefon dan e-mel khusus sedang disediakan. Sementara itu, chat Shopee, mesej TikTok Shop, borang borong dan Berkat Madinah Store adalah cara terpantas untuk menghubungi kami.",
    },
    {
      q: "Bagaimana saya bertanya tentang pesanan borong atau pukal?",
      a: "Gunakan borang pertanyaan borong di bahagian borong laman utama kami. Ia dibina khusus untuk pesanan perniagaan supaya pasukan kami boleh memberi sebut harga yang tepat.",
    },
    {
      q: "Bolehkah saya bertanya soalan produk sebelum membeli?",
      a: "Boleh - hantar mesej kepada kedai rasmi Shopee atau TikTok Shop kami, atau hubungi pembekal rasmi kami Berkat Madinah Store.",
    },
  ],
  related: [],
};
