import type { Article } from "../../articles/types";
import { BRAND_SELLER_URL } from "../../../config/site";

export const page: Article = {
  slug: "why-us",
  title: "Kenapa Pilih Madu Subur | Resipi Tradisional, Ramuan Telus",
  heading: "Kenapa Pilih Madu Subur",
  description:
    "Apa yang membezakan Madu Subur: sepuluh ramuan bernama, asas sarang madu tulen, tiada bahan tambahan tiruan, dan resipi tradisional Timur Tengah untuk pasangan suami isteri yang dipercayai lebih 5,000 rumah tangga Malaysia.",
  primaryKeyword: "kenapa pilih madu subur",
  keywords: [
    "kenapa pilih madu subur",
    "madu subur berbanding madu biasa",
    "jenama madu tulen Malaysia",
    "madu tradisional dipercayai",
    "madu asli berbanding madu tulen",
    "madu untuk pasangan suami isteri malaysia",
  ],
  published: "2026-07-24",
  updated: "2026-07-24",
  readingMinutes: 5,
  icon: "/images/honey-sticker.webp",
  figureAlt:
    "Balang Subur Honey dikelilingi sepuluh bahan dalam adunannya, termasuk bunga lawang, saffron, kayu manis, habbatus sauda dan sarang lebah mentah.",
  category: "Kisah Kami",
  blocks: [
    {
      type: "answer",
      question: "Kenapa pilih Madu Subur berbanding balang lain di rak?",
      answer:
        "Madu Subur menyatakan kesemua sepuluh ramuannya pada label, menggunakan sarang madu tulen dan bukan sirap terproses, tiada warna atau perisa tiruan, dan mengikut resipi Timur Tengah untuk pasangan suami isteri yang dibina atas penggunaan tradisional turun-temurun, bukan trend pemasaran. Ia dipercayai oleh lebih 5,000 pelanggan di seluruh Malaysia.",
    },
    {
      type: "paragraph",
      text: "Rak-rak di Malaysia penuh dengan campuran madu yang menjanjikan banyak tetapi mendedahkan sedikit. Subur dibina dengan cara sebaliknya: kurangkan kata, tunjukkan lebih banyak. Setiap ramuan dinamakan, setiap dakwaan adalah sesuatu yang kami boleh pertahankan di bawah undang-undang makanan Malaysia, dan asasnya adalah sarang madu tulen dan bukan sirap tapisan yang hanya kelihatan seperti madu.",
    },
    {
      type: "heading",
      text: "Apa yang membezakan Madu Subur daripada madu biasa?",
      id: "different-from-regular",
    },
    {
      type: "table",
      caption: "Madu Subur berbanding campuran madu terproses biasa",
      columns: ["", "Madu Subur", "Campuran terproses biasa"],
      rows: [
        ["Asas", "Sarang madu tulen", "Sirap yang ditapis dan dirawat haba"],
        ["Ramuan", "10, semuanya dinamakan pada label", "Selalunya \"campuran eksklusif\" tanpa senarai"],
        ["Bahan tambahan", "Tiada yang tiruan", "Kerap mengandungi perisa atau warna tiruan"],
        ["Asal resipi", "Tradisional Timur Tengah", "Selalunya tidak didedahkan"],
        ["Penghabluran", "Dijangka - tanda madu tulen", "Selalunya dielakkan melalui pemprosesan"],
      ],
    },
    {
      type: "heading",
      text: "Adakah Madu Subur semula jadi dan vegan?",
      id: "natural-vegan",
    },
    {
      type: "list",
      items: [
        { term: "Semula jadi sepenuhnya", text: "Setiap ramuan - sarang madu, habbatus sauda, saffron, ginseng, halia, kayu manis, bunga lawang, buah pala, walnut dan badam - adalah ramuan semula jadi yang utuh." },
        { term: "Vegan", text: "Subur tidak mengandungi ramuan berasaskan haiwan selain madu itu sendiri." },
        { term: "Tiada bahan tambahan tiruan", text: "Tiada warna tiruan, tiada perisa tiruan, tiada bahan pengisi." },
      ],
    },
    {
      type: "heading",
      text: "Siapa di sebalik Madu Subur?",
      id: "who-is-behind-it",
    },
    {
      type: "paragraph",
      text: `Madu Subur diniagakan secara runcit di Malaysia melalui <a href="${BRAND_SELLER_URL}" target="_blank" rel="noopener noreferrer">Berkat Madinah Store</a>, di samping saluran rasmi Shopee dan TikTok Shop kami sendiri. Lihat <a href="/ms/retail/">semua saluran runcit kami</a> sebelum membeli, dan <a href="/ms/#wholesale">program borong kami</a> jika anda seorang peniaga.`,
    },
    {
      type: "quote",
      text: "Kurangkan kata, tunjukkan lebih banyak. Setiap ramuan dinamakan, setiap balang resipi yang sama.",
      attribution: "Idea asas Subur",
    },
    {
      type: "callout",
      tone: "warning",
      title: "Apa yang kami tidak dakwa",
      text: "Madu Subur adalah makanan harian tradisional, bukan ubat. Undang-undang makanan Malaysia melarang mana-mana makanan diiklankan sebagai mencegah, merawat atau menyembuhkan sesuatu keadaan, dan kami berpegang teguh pada prinsip ini di setiap halaman laman ini - bukan hanya di mana undang-undang mewajibkannya.",
    },
    {
      type: "cta",
      heading: "Lihat apa yang ada di dalam balang",
      text: "Sepuluh ramuan, setiap satu dinamakan dan diterangkan.",
      label: "Lihat ramuan",
    },
  ],
  faqs: [
    {
      q: "Apa yang membezakan Madu Subur daripada jenama madu lain di Malaysia?",
      a: "Subur menyatakan kesemua sepuluh ramuan pada label, menggunakan sarang madu tulen dan bukan sirap terproses, tiada warna atau perisa tiruan, dan dibina atas resipi tradisional Timur Tengah dan bukan formula yang tidak didedahkan.",
    },
    {
      q: "Adakah Madu Subur benar-benar semula jadi dan vegan?",
      a: "Madu Subur diperbuat sepenuhnya daripada ramuan semula jadi tanpa tambahan berasaskan haiwan selain madu itu sendiri, dan tidak mengandungi warna, perisa atau bahan pengisi tiruan.",
    },
    {
      q: "Berapa ramai pelanggan mempercayai Madu Subur?",
      a: "Madu Subur dipercayai oleh lebih 5,000 pelanggan di seluruh Malaysia, dijual melalui saluran rasmi Shopee dan TikTok Shop kami serta pembekal rasmi kami Berkat Madinah Store.",
    },
    {
      q: "Kenapa Madu Subur berhablur dalam balang?",
      a: "Penghabluran dijangka berlaku pada madu tulen yang kurang diproses dan merupakan tanda ketulenan, bukan kecacatan. Ia boleh dilembutkan dengan merendam balang dalam air suam - bukan air mendidih.",
    },
    {
      q: "Adakah Madu Subur merawat atau menyembuhkan sebarang keadaan perubatan?",
      a: "Tidak. Madu Subur adalah makanan harian tradisional, bukan ubat, dan undang-undang makanan Malaysia melarang mana-mana makanan dipasarkan sebagai penawar atau rawatan. Jumpa doktor untuk sebarang masalah kesihatan.",
    },
  ],
  related: [],
};
