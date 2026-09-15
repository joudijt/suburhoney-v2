import type { Article } from "../types";

export const article: Article = {
  slug: "cara-semak-produk-berdaftar-kkm",
  title: "Cara Semak Produk Berdaftar KKM Sebelum Anda Beli",
  heading: "Cara semak sama ada produk tenaga batin itu berdaftar",
  description:
    "Cara menyemak produk tenaga batin dan suplemen di QUEST3+, apa maksud nombor MAL, dan kenapa makanan memang tidak sepatutnya ada nombor itu.",
  primaryKeyword: "produk tenaga batin",
  keywords: [
    "produk tenaga batin",
    "cara semak produk berdaftar KKM",
    "nombor MAL",
    "QUEST3+ carian produk",
    "produk herba berdaftar npra",
    "hologram FarmaTag",
    "senarai produk diharamkan KKM",
    "NPRA Malaysia",
    "beza makanan dan ubat berdaftar",
  ],
  published: "2026-09-10",
  updated: "2026-09-10",
  readingMinutes: 5,
  icon: "/icons/ingrediant_07.webp",
  figureAlt:
    "Penyendok kayu mengangkat madu di atas balang kaca terbuka, dengan sarang madu di belakangnya.",
  category: "Buying guide",
  blocks: [
    {
      type: "answer",
      question: "Bagaimana saya semak sama ada sesuatu produk berdaftar dengan KKM?",
      answer:
        "Cari nombor MAL pada bungkusan — huruf MAL diikuti lapan angka dan satu kod huruf — kemudian masukkannya ke dalam Carian Produk Berdaftar NPRA, QUEST3+, di quest3plus.bpfk.gov.my. Jika nombor itu tiada dalam pangkalan data, produk itu tidak berdaftar sebagai ubat herba atau suplemen.",
    },
    {
      type: "paragraph",
      text: "Semakan ini mengambil masa kurang seminit dan boleh dibuat sambil berdiri di kedai. Yang lebih penting ialah memahami apa yang ia sebenarnya beritahu anda — dan apa yang ia langsung tidak beritahu.",
    },
    {
      type: "heading",
      text: "Di mana nombor MAL berada, dan apa bentuknya?",
      id: "bentuk-nombor-mal",
    },
    {
      type: "paragraph",
      text: "Ia dicetak pada bungkusan, biasanya berhampiran senarai ramuan atau tarikh luput. Mengikut penerangan Kementerian Kesihatan sendiri, nombor pendaftaran MAL bermula dengan huruf <strong>MAL</strong>, diikuti lapan angka, dan diakhiri dengan satu kod produk. Bentuknya kelihatan seperti MAL12345678T.",
    },
    {
      type: "table",
      caption: "Kod huruf di hujung nombor MAL",
      columns: ["Kod", "Maksud"],
      rows: [
        ["A", "Ubat terkawal, iaitu ubat preskripsi"],
        ["X", "Ubat terkawal tanpa preskripsi, atau ubat over-the-counter"],
        ["T", "Ubat herba berdaftar dengan NPRA"],
        ["N", "Suplemen kesihatan"],
      ],
    },
    {
      type: "paragraph",
      text: "Kebanyakan produk yang dipasarkan untuk kekuatan atau tenaga jatuh di bawah kod T atau N. Produk berdaftar juga membawa hologram <strong>FarmaTag</strong>, yang boleh disemak dengan aplikasi percuma FarmaTag Checker.",
    },
    {
      type: "heading",
      text: "Bagaimana saya buat semakan itu?",
      id: "langkah-semakan",
    },
    {
      type: "steps",
      title: "Tiga langkah di kaunter kedai",
      steps: [
        {
          title: "Cari nombor pada bungkusan",
          text: "Jika tiada nombor MAL langsung, jangan terus anggap produk itu haram — baca bahagian seterusnya dahulu.",
        },
        {
          title: "Buka QUEST3+",
          text: "Carian Produk Berdaftar dan Bernotifikasi NPRA di quest3plus.bpfk.gov.my. Masukkan nombor itu, atau nama produk.",
        },
        {
          title: "Padankan apa yang keluar",
          text: "Nama produk, pemegang pendaftaran dan status mesti sepadan dengan bungkusan di tangan anda. Nombor sah pada produk yang salah tetap bermakna sesuatu tidak kena.",
        },
      ],
    },
    {
      type: "heading",
      text: "Kalau tiada nombor MAL, adakah produk itu tidak sah?",
      id: "tiada-nombor-mal",
    },
    {
      type: "paragraph",
      text: "Belum tentu, dan ini yang paling kerap disalahfahamkan. Kementerian Kesihatan menyatakan dengan jelas bahawa produk makanan dan minuman tidak perlu berdaftar dengan KKM. Sebuah makanan memang tidak sepatutnya membawa nombor MAL langsung — ketiadaannya bukan kecacatan, dan kehadirannya pada sebuah makanan barulah pelik.",
    },
    {
      type: "list",
      title: "Siapa mengawal selia apa",
      items: [
        { term: "Bahagian Keselamatan dan Kualiti Makanan", text: "Makanan: ramuan makanan sepenuhnya, produk dalam bentuk makanan biasa, herba dan rempah dalam bentuk mentah tanpa dakwaan perubatan. Tiada nombor MAL." },
        { term: "NPRA", text: "Produk yang mempunyai bahan aktif, bentuk dos farmaseutikal seperti kapsul, gel lembut atau tablet, atau yang membuat dakwaan perubatan. Membawa nombor MAL." },
        { term: "Food-Drug Interphase", text: "Istilah NPRA sendiri bagi produk yang menggabungkan ramuan makanan dengan bahan aktif untuk diambil secara oral — kategori yang menentukan pihak mana mengawal selianya." },
      ],
    },
    {
      type: "heading",
      text: "Apa beza nombor KKLIU pada iklan?",
      id: "nombor-kkliu",
    },
    {
      type: "paragraph",
      text: "Nombor KKLIU ialah kelulusan <strong>iklan</strong>, bukan kelulusan produk. Ia bermula dengan KKLIU, diikuti empat angka nombor siri, dan diakhiri dengan tahun — contohnya KKLIU 1234/2018. Hanya suplemen kesihatan, ubat herba berdaftar dan ubat OTC memerlukan kelulusan Lembaga Iklan Ubat. Melihat KKLIU tidak memberitahu anda apa-apa tentang kandungan produk.",
    },
    {
      type: "heading",
      text: "Di mana saya semak produk yang sudah diharamkan?",
      id: "senarai-diharamkan",
    },
    {
      type: "paragraph",
      text: "Kementerian Kesihatan menerbitkan senarai awam produk yang dikesan mengandungi bahan terlarang, dan Bahagian Penguatkuasa Farmasi menyenaraikan produk yang diharamkan. Semua produk dalam senarai pertama itu, mengikut kenyataan KKM, telah dibatalkan pendaftaran atau memang tidak berdaftar, dan tidak dibenarkan dijual.",
    },
    {
      type: "callout",
      tone: "note",
      title: "Senarai ini rekod, bukan tapisan",
      text: "Kedua-dua senarai menunjukkan apa yang sudah ditemui selepas sesuatu produk berada di pasaran. Produk yang tiada dalam senarai bukan bermakna ia sudah diperiksa dan diluluskan — ia hanya bermakna ia belum ditemui bermasalah.",
    },
    {
      type: "heading",
      text: "Apa yang semakan ini tidak beritahu saya?",
      id: "had-semakan",
    },
    {
      type: "paragraph",
      text: "Ia tidak memberitahu anda sama ada dakwaan pada bungkusan itu benar. Pendaftaran ialah status kawal selia, bukan pengesahan hasil. Untuk memahami dakwaan itu sendiri, baca <a href=\"/ms/blog/dakwaan-tenaga-batin-pada-produk/\">apa yang undang-undang benarkan sesuatu produk kata</a> — dan untuk sisi madu, <a href=\"/ms/blog/logo-autentik-kkm-madu/\">logo Autentik KKM untuk produk madu</a> ialah skim yang berasingan sama sekali.",
    },
    {
      type: "paragraph",
      text: "Madu SUBUR ialah makanan. Ia tiada nombor MAL, tidak sepatutnya ada, dan laman ini tidak mendakwa ia pernah diuji atau diluluskan oleh mana-mana pihak berkuasa. Apa yang diterbitkan ialah <a href=\"/ms/why-us/\">senarai ramuan penuh dan cara ia dijual</a>.",
    },
    {
      type: "cta",
      heading: "Semak dahulu, baru beli",
      text: "Jika anda mahu tahu di mana sesuatu balang dijual dan oleh siapa, halaman runcit kami menyenaraikan setiap saluran belian yang sah.",
      label: "Lihat saluran belian",
    },
  ],
  faqs: [
    {
      q: "Apakah QUEST3+ dan siapa mengendalikannya?",
      a: "QUEST3+ ialah sistem Carian Produk Berdaftar dan Bernotifikasi milik Agensi Regulatori Farmasi Negara, NPRA. Ia terbuka kepada orang awam di quest3plus.bpfk.gov.my dan membenarkan sesiapa menyemak sama ada sesuatu produk atau nombor MAL benar-benar wujud dalam pangkalan data pendaftaran.",
    },
    {
      q: "Bagaimana rupa nombor MAL yang sah?",
      a: "Mengikut penerangan Kementerian Kesihatan, ia bermula dengan huruf MAL, diikuti lapan angka, dan diakhiri dengan satu kod produk. Kod itu ialah A untuk ubat preskripsi, X untuk ubat OTC, T untuk ubat herba berdaftar, dan N untuk suplemen kesihatan.",
    },
    {
      q: "Adakah semua produk kesihatan perlu ada nombor MAL?",
      a: "Tidak. Kementerian Kesihatan menyatakan produk makanan dan minuman tidak perlu berdaftar dengan KKM. Nombor MAL diperlukan bagi produk yang berada di bawah bidang kuasa NPRA, iaitu yang mempunyai bahan aktif, bentuk dos farmaseutikal, atau dakwaan perubatan.",
    },
    {
      q: "Apa itu hologram FarmaTag?",
      a: "FarmaTag ialah hologram keselamatan yang dibawa oleh produk berdaftar di Malaysia. Kementerian Kesihatan menyediakan aplikasi percuma bernama FarmaTag Checker yang membolehkan pengguna menyemak hologram itu terus daripada telefon di kaunter kedai.",
    },
    {
      q: "Adakah nombor KKLIU bermakna produk itu diluluskan?",
      a: "Tidak. KKLIU ialah nombor kelulusan iklan yang dikeluarkan oleh Lembaga Iklan Ubat, dan ia merujuk kepada bahan iklan itu sahaja. Nombor MAL merujuk kepada produk. Sesuatu iklan boleh membawa KKLIU tanpa memberitahu anda apa-apa tentang kandungan produk.",
    },
    {
      q: "Kalau produk tiada dalam senarai diharamkan, adakah ia selamat?",
      a: "Tidak semestinya. Senarai KKM ialah rekod produk yang sudah ditemui bermasalah selepas ia berada di pasaran, bukan senarai kelulusan. Produk yang tiada dalam senarai hanya bermakna ia belum ditemui bermasalah setakat ini.",
    },
    {
      q: "Adakah Madu SUBUR mempunyai nombor MAL?",
      a: "Tidak. Madu SUBUR ialah makanan, dan Kementerian Kesihatan menyatakan produk makanan tidak perlu berdaftar dengan KKM. Ketiadaan nombor MAL pada sebuah makanan ialah perkara biasa dan bukan kecacatan. Laman ini tidak mendakwa produk ini pernah diuji atau diluluskan.",
    },
  ],
  related: ["dakwaan-tenaga-batin-pada-produk", "logo-autentik-kkm-madu"],
};
