import type { Article } from "../../articles/types";
import { BRANCHES, BRAND_SELLER, BRAND_SELLER_URL } from "../../../config/site";

export const page: Article = {
  slug: "why-us",
  title: "Kenapa Pilih Madu Subur | Sepuluh Ramuan Bernama, Sarang Madu Tulen, Tiada Yang Disembunyikan",
  heading: "Kenapa Pilih Madu Subur",
  description:
    "Apa yang membezakan Madu Subur: sepuluh ramuan bernama, asas sarang madu tulen, tiada bahan tambahan tiruan, dan campuran untuk pasangan suami isteri - dijual eksklusif melalui Berkat Madinah Store, kedai yang sudah dikenali keluarga di Lembah Klang.",
  primaryKeyword: "kenapa pilih madu subur",
  keywords: [
    "kenapa pilih madu subur",
    "madu subur berbanding madu biasa",
    "jenama madu tulen Malaysia",
    "jenama madu jujur Malaysia",
    "madu asli berbanding madu tulen",
    "madu untuk pasangan suami isteri Malaysia",
  ],
  published: "2026-07-24",
  updated: "2026-08-14",
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
        "Madu Subur menyatakan kesemua sepuluh ramuannya pada label, menggunakan sarang madu tulen dan bukan sirap terproses, tiada warna atau perisa tiruan, dan dibuat untuk pasangan suami isteri yang mengambilnya setiap hari. Ia dijual eksklusif melalui Berkat Madinah Store, kedai barangan Arab yang sudah menjadi tempat keluarga Lembah Klang berbelanja.",
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
        ["Senarai ramuan", "Kesemua sepuluh dinamakan pada label", "Selalunya campuran yang tidak didedahkan"],
        ["Bahan tambahan", "Tiada yang tiruan", "Kerap mengandungi perisa atau warna tiruan"],
        ["Penghabluran", "Dijangka - tanda madu tulen", "Selalunya dielakkan melalui pemprosesan"],
      ],
    },
    {
      type: "heading",
      text: "Adakah Madu Subur semula jadi, dan adakah ia vegan?",
      id: "natural-vegan",
    },
    {
      type: "list",
      items: [
        { term: "Semula jadi sepenuhnya", text: "Setiap ramuan - sarang madu, habbatus sauda, saffron, ginseng, halia, kayu manis, bunga lawang, buah pala, walnut dan badam - adalah ramuan semula jadi yang utuh." },
        { term: "Bukan vegan", text: "Madu ialah hasil lebah, dan piawaian vegan yang ketat tidak menerimanya, jadi kami tidak melabel Subur sebagai vegan. Selain madu, setiap ramuan lain berasaskan tumbuhan - tiada daging, susu, telur atau gelatin di dalam balang." },
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
      text: `Madu Subur dijual di Malaysia secara eksklusif melalui <a href="${BRAND_SELLER_URL}" target="_blank" rel="noopener noreferrer">${BRAND_SELLER}</a> - sebuah kedai barangan Arab yang lengkap dengan dua cawangan di Selangor, ${BRANCHES[0].area} dan ${BRANCHES[1].area}. Kedai Shopee dan TikTok Shopnya pula ialah kedai yang sama berniaga dalam talian, bukan penjual lain, dan Subur tidak dijual di pasar raya mahupun farmasi. Lihat <a href="/ms/retail/">semua saluran runcit kami</a> sebelum membeli, dan <a href="/ms/#wholesale">program borong kami</a> jika anda seorang peniaga - bekalan pukal turut disalurkan melalui kedai yang sama.`,
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
      text: "Madu Subur adalah makanan harian, bukan ubat. Undang-undang makanan Malaysia melarang mana-mana makanan diiklankan sebagai mencegah, merawat atau menyembuhkan sesuatu keadaan, dan kami berpegang teguh pada prinsip ini di setiap halaman laman ini - bukan hanya di mana undang-undang mewajibkannya.",
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
      a: "Subur menyatakan kesemua sepuluh ramuan pada label, menggunakan sarang madu tulen dan bukan sirap terproses, tiada warna atau perisa tiruan, dan memberitahu anda campuran penuh dan bukan menyembunyikannya di sebalik formula yang tidak didedahkan.",
    },
    {
      q: "Adakah Madu Subur vegan?",
      a: "Tidak. Madu ialah hasil lebah dan piawaian vegan yang ketat tidak menerimanya, jadi kami tidak melabelnya sebagai vegan. Ramuan lain semuanya berasaskan tumbuhan - tiada daging, susu, telur atau gelatin - dan tiada warna, perisa atau bahan pengisi tiruan.",
    },
    {
      q: "Adakah Madu Subur jenama yang dikenali di Malaysia?",
      a: `Ia terjual sebalang demi sebalang melalui kedai yang memang sudah dipercayai orang: ${BRAND_SELLER}, kedai barangan Arab yang menjadi tempat keluarga Lembah Klang kembali berbelanja. Setiap balang sampai kepada anda daripada satu penjual itu sahaja - cawangan ${BRANCHES[0].area}, cawangan ${BRANCHES[1].area}, kedai Shopee miliknya atau TikTok Shop miliknya.`,
    },
    {
      q: "Kenapa Madu Subur berhablur dalam balang?",
      a: "Penghabluran dijangka berlaku pada madu tulen yang kurang diproses dan ia bukan kecacatan - tetapi dengan sendirinya ia bukan bukti ketulenan. Ia boleh dilembutkan dengan merendam balang dalam air suam - bukan air mendidih.",
    },
    {
      q: "Adakah Madu Subur merawat atau menyembuhkan sebarang keadaan perubatan?",
      a: "Tidak. Madu Subur adalah makanan harian, bukan ubat, dan undang-undang makanan Malaysia melarang mana-mana makanan dipasarkan sebagai penawar atau rawatan. Jumpa doktor untuk sebarang masalah kesihatan.",
    },
  ],
  related: [],
};
