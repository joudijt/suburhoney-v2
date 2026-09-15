import type { Article } from "../types";
import { BRAND_SELLER } from "../../../config/site";

export const article: Article = {
  slug: "madu-kampung-vs-madu-berjenama",
  title: "Madu Kampung vs Madu Berjenama: Apa Yang Anda Dapat",
  heading: "Madu kampung atau madu berjenama?",
  description:
    "Madu kampung tiada takrif rasmi di Malaysia. Ini apa yang anda dapat dan tidak dapat apabila membeli madu curah berbanding balang berlabel.",
  primaryKeyword: "madu kampung",
  keywords: [
    "madu kampung",
    "madu kampung vs madu berjenama",
    "madu curah",
    "beli madu di kampung",
    "madu tanpa label",
    "label makanan wajib",
    "madu apis cerana",
    "kebolehkesanan madu",
    "madu pasar tani",
  ],
  published: "2026-09-10",
  updated: "2026-09-10",
  readingMinutes: 5,
  icon: "/icons/ingrediant_01.webp",
  figureAlt:
    "Sebalang madu SUBUR berdiri sendiri di hadapan latar krim yang kosong.",
  category: "Comparison",
  blocks: [
    {
      type: "answer",
      question: "Apa itu madu kampung?",
      answer:
        "Madu kampung ialah istilah pasaran, bukan istilah undang-undang. Ia tidak ditakrifkan dalam Peraturan-Peraturan Makanan 1985, dalam MS 2782 mahupun MS 2683, dan tidak ada dalam mana-mana dokumen KKM atau Jabatan Pertanian. Lazimnya ia merujuk kepada madu tempatan yang dijual tanpa label penuh.",
    },
    {
      type: "paragraph",
      text: "Ketiadaan takrif itu sendiri ialah jawapan kepada kebanyakan soalan tentangnya. Apabila satu istilah tidak ditakrifkan, tiada apa-apa yang boleh dilanggar — dan tiada apa-apa yang boleh disemak.",
    },
    {
      type: "heading",
      text: "Kenapa istilah ini tidak ditakrifkan?",
      id: "kenapa-tiada-takrif",
    },
    {
      type: "paragraph",
      text: "Kerana ia menerangkan cara jualan, bukan produk. \"Kampung\" memberitahu anda sesuatu tentang di mana dan bagaimana sesuatu balang dibeli — daripada penternak, di pasar tani, dalam botol yang dikitar semula — bukan tentang spesies lebah, sumber bunga atau komposisi. Peraturan mentakrifkan produk, bukan tempat.",
    },
    {
      type: "paragraph",
      text: "Dalam penggunaan biasa, ia paling kerap dikaitkan dengan lebah <em>Apis cerana</em>, lebah tempatan. Tetapi kaitan itu tabiat pasaran, bukan peraturan, dan tiada apa-apa yang menghalang istilah itu daripada digunakan untuk madu lain.",
    },
    {
      type: "heading",
      text: "Apa yang anda dapat daripada madu berjenama?",
      id: "apa-yang-berjenama-beri",
    },
    {
      type: "paragraph",
      text: "Sebuah label yang tertakluk kepada peraturan. Peraturan-Peraturan Makanan 1985 menetapkan butiran yang perlu ada pada label makanan berbungkus, mengehadkan perkataan yang boleh dicetak padanya, dan melarang dakwaan tentang mencegah, meringankan, merawat atau menyembuhkan sesuatu keadaan. Balang tanpa label tidak membawa satu pun daripadanya.",
    },
    {
      type: "table",
      caption: "Apa yang setiap satu benar-benar tawarkan",
      columns: ["", "Madu kampung / curah", "Balang berlabel"],
      rows: [
        ["Takrif rasmi", "Tiada", "Produk tertakluk kepada takrif madu dalam peraturan"],
        ["Senarai ramuan", "Selalunya tiada", "Wajib pada makanan berbungkus"],
        ["Logo pensijilan", "Jarang", "Boleh membawa Autentik, MeSTI, GMP atau HACCP"],
        ["Kebolehkesanan", "Bergantung sepenuhnya pada penjual yang anda kenal", "Nama pengeluar dan alamat pada label"],
        ["Kelebihan sebenar", "Rantaian pendek, penjual boleh ditemui semula", "Boleh disemak tanpa mengenali sesiapa"],
      ],
    },
    {
      type: "heading",
      text: "Adakah madu kampung lebih tulen?",
      id: "adakah-lebih-tulen",
    },
    {
      type: "paragraph",
      text: "Tiada bukti yang menyokong andaian itu. Data pemantauan Kementerian Kesihatan tidak memecahkan keputusan mengikut saluran jualan, jadi tiada sesiapa boleh mendakwa madu curah lebih atau kurang mematuhi piawaian berbanding madu berjenama. Kami menghuraikan data itu dalam <a href=\"/ms/blog/90-peratus-madu-palsu/\">artikel dakwaan 90 peratus madu palsu</a>.",
    },
    {
      type: "callout",
      tone: "warning",
      title: "Ujian rumah tidak menyelesaikannya",
      text: "Apabila tiada label, ramai pembeli beralih kepada ujian air, ujian ibu jari atau ujian bakar. Tiada satu pun daripadanya berfungsi, dan <a href=\"/ms/blog/cara-kenal-madu-asli/\">panduan kami tentang mengenal madu asli</a> menerangkan sebabnya satu demi satu. Ketiadaan label tidak boleh digantikan dengan ujian di dapur.",
    },
    {
      type: "heading",
      text: "Bila madu kampung masuk akal?",
      id: "bila-masuk-akal",
    },
    {
      type: "paragraph",
      text: "Apabila anda mengenali penternaknya. Rantaian sependek itu ialah kelebihan sebenar madu kampung: tiada pengedar, tiada pembungkus semula, dan seseorang yang boleh anda tanya secara langsung. Kelebihan itu hilang sepenuhnya apabila balang yang sama dijual semula oleh pihak ketiga yang anda tidak kenal.",
    },
    {
      type: "paragraph",
      text: "Balang berlabel menawarkan perkara sebaliknya: anda tidak perlu mengenali sesiapa. Maklumat yang anda perlukan tercetak di situ, dan skim pensijilan seperti Autentik memberi lapisan tambahan — dijelaskan dalam <a href=\"/ms/blog/logo-autentik-kkm-madu/\">artikel logo Autentik KKM</a>.",
    },
    {
      type: "heading",
      text: "Apa yang patut saya tanya penjual?",
      id: "soalan-kepada-penjual",
    },
    {
      type: "list",
      title: "Empat soalan yang murah ditanya",
      items: [
        { term: "Lebah apa?", text: "Apis atau kelulut. Penternak sebenar akan menjawab tanpa teragak-agak." },
        { term: "Dari kawasan mana?", text: "Sumber bunga terikat kepada tempat, dan jawapan yang khusus lebih bermakna daripada jawapan yang umum." },
        { term: "Bila dituai?", text: "Madu tidak rosak dengan cepat, tetapi penternak yang tahu tarikhnya tahu balangnya." },
        { term: "Boleh saya datang semula?", text: "Penjual yang boleh ditemui semula ialah satu-satunya jaminan yang ditawarkan oleh madu tanpa label." },
      ],
    },
    {
      type: "paragraph",
      text: `Madu SUBUR berada di hujung berlabel: ia campuran dengan sepuluh bahan yang dinamakan, dan dijual hanya melalui ${BRAND_SELLER} — dua cawangan di Selangor serta kedai Shopee dan TikTok Shop milik kedai itu sendiri. Keempat-empat saluran itu tersenarai di <a href="/ms/retail/">halaman runcit</a>, dan <a href="/ms/blog/kedai-madu-asli-selangor/">panduan kedai madu di Selangor</a> meliputi pilihan lain.`,
    },
    {
      type: "cta",
      heading: "Label yang boleh dibaca sepenuhnya",
      text: "Lihat kesepuluh bahan yang dinamakan, dan keempat-empat saluran belian yang sah untuk balang ini.",
      label: "Lihat saluran belian",
    },
  ],
  faqs: [
    {
      q: "Adakah madu kampung istilah rasmi?",
      a: "Tidak. Ia tidak ditakrifkan dalam Peraturan-Peraturan Makanan 1985, dalam MS 2782:2025, dalam MS 2683:2025, atau dalam mana-mana dokumen Kementerian Kesihatan atau Jabatan Pertanian. Ia istilah pasaran yang menerangkan cara sesuatu madu dijual, bukan apa kandungannya.",
    },
    {
      q: "Lebah apa yang biasanya dikaitkan dengan madu kampung?",
      a: "Dalam penggunaan biasa ia sering dikaitkan dengan Apis cerana, lebah tempatan. Kaitan itu ialah tabiat pasaran dan bukan peraturan, jadi tiada apa-apa yang menghalang istilah itu daripada digunakan untuk madu daripada spesies lain.",
    },
    {
      q: "Adakah madu curah lebih tulen daripada madu berjenama?",
      a: "Tiada data yang menyokong kesimpulan itu. Pemantauan Kementerian Kesihatan tidak memecahkan keputusan mengikut saluran jualan, jadi tiada perbandingan rasmi antara madu curah dan madu berjenama wujud untuk dirujuk oleh sesiapa.",
    },
    {
      q: "Apa yang hilang apabila madu dijual tanpa label?",
      a: "Senarai ramuan, nama pengeluar, dan sebarang logo pensijilan seperti Autentik, MeSTI, GMP atau HACCP. Peraturan pelabelan makanan terpakai kepada makanan berbungkus; balang tanpa label tidak membawa maklumat yang boleh anda semak tanpa mengenali penjualnya.",
    },
    {
      q: "Bolehkah ujian rumah menggantikan label?",
      a: "Tidak. Ujian air, ujian ibu jari, ujian kertas tisu dan ujian bakar semuanya beredar luas di Malaysia dan tiada satu pun daripadanya membezakan madu yang mematuhi piawaian daripada yang tidak. Ketiadaan label ialah maklumat yang hilang, bukan masalah yang boleh diuji.",
    },
    {
      q: "Bila madu kampung pilihan yang munasabah?",
      a: "Apabila anda membeli daripada penternak yang anda kenal dan boleh temui semula. Rantaian bekalan yang sangat pendek ialah kelebihan sebenarnya. Kelebihan itu hilang apabila balang yang sama dijual semula oleh pihak ketiga yang anda tidak kenal.",
    },
    {
      q: "Adakah Madu SUBUR dijual sebagai madu kampung?",
      a: "Tidak. Ia produk berlabel dengan sepuluh bahan yang dinamakan, dijual hanya melalui satu peruncit melalui empat saluran: dua cawangan di Selangor, dan kedai Shopee serta TikTok Shop milik kedai itu sendiri.",
    },
  ],
  related: ["kedai-madu-asli-selangor", "apa-itu-madu-asli"],
};
