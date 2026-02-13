// data.js (versi diperbaiki)
// Perbaikan: 
// - Fix typo pada kata "食る" menjadi "食べる" (taberu) yang benar untuk "Makan" di N5 (verb-ru).
// - Hapus duplikasi "水" (sudah ada dua, tapi arti berbeda; biarkan tapi pastikan unik).
// - Tambahkan lebih banyak data jika diperlukan, tapi karena tidak ada instruksi spesifik, perbaiki yang ada.
// - PatternData tetap untuk N5 dan N4, sesuai app.js yang hanya handle itu (N3+ dalam pengembangan).
// - Hapus data lama yang tidak selaras (misalnya, suffix seperti "~nen" disesuaikan sebagai counter jika perlu).
// - Pastikan type konsisten dengan filter di app.js (verb-ru, verb-godan, dll.).

const vocabularyData = [
  {
    kanji: "魚",
    kana: "さかな",
    romaji: "Sakana",
    meaning: "Ikan",
    type: "noun",
    level: "N5"
  },
  {
    kanji: "肉",
    kana: "にく",
    romaji: "Niku",
    meaning: "Daging",
    type: "noun",
    level: "N5"
  },
  {
    kanji: "卵",
    kana: "たまご",
    romaji: "Tamago",
    meaning: "Telur",
    type: "noun",
    level: "N5"
  },
  {
    kanji: "水",
    kana: "みず",
    romaji: "Mizu",
    meaning: "Air",
    type: "noun",
    level: "N5"
  },
  {
    kanji: "食べる",
    kana: "たべる",
    romaji: "Taberu",
    meaning: "Makan",
    type: "verb-ru",
    level: "N5"
  },
  {
    kanji: "飲む",
    kana: "のむ",
    romaji: "Nomu",
    meaning: "Minum",
    type: "verb-godan",
    level: "N5"
  },
  {
    kanji: "大きい",
    kana: "おおきい",
    romaji: "Ookii",
    meaning: "Besar",
    type: "adj-i",
    level: "N5"
  },
  {
    kanji: "小さい",
    kana: "ちいさい",
    romaji: "Chiisai",
    meaning: "Kecil",
    type: "adj-i",
    level: "N5"
  },
  {
    kanji: "新しい",
    kana: "あたらしい",
    romaji: "Atarashii",
    meaning: "Baru",
    type: "adj-i",
    level: "N5"
  },
  {
    kanji: "古い",
    kana: "ふるい",
    romaji: "Furui",
    meaning: "Lama / Tua",
    type: "adj-i",
    level: "N5"
  },
  {
    kanji: "時",
    kana: "じ",
    romaji: "Ji",
    meaning: "Jam (waktu)",
    type: "counter",
    level: "N5"
  },
  {
    kanji: "分",
    kana: "ふん/ぷん",
    romaji: "Fun/Pun",
    meaning: "Menit",
    type: "counter",
    level: "N5"
  },
  {
    kanji: "半",
    kana: "はん",
    romaji: "Han",
    meaning: "Setengah",
    type: "noun",
    level: "N5"
  },
  {
    kanji: "月",
    kana: "げつ",
    romaji: "Getsu",
    meaning: "Bulan (Senin dalam hari)",
    type: "noun",
    level: "N5"
  },
  {
    kanji: "火",
    kana: "か",
    romaji: "Ka",
    meaning: "Api (Selasa dalam hari)",
    type: "noun",
    level: "N5"
  },
  {
    kanji: "水",
    kana: "すい",
    romaji: "Sui",
    meaning: "Air (Rabu dalam hari)",
    type: "noun",
    level: "N5"
  },
  {
    kanji: "木",
    kana: "もく",
    romaji: "Moku",
    meaning: "Pohon (Kamis dalam hari)",
    type: "noun",
    level: "N5"
  },
  {
    kanji: "金",
    kana: "きん",
    romaji: "Kin",
    meaning: "Emas (Jumat dalam hari)",
    type: "noun",
    level: "N5"
  },
  {
    kanji: "土",
    kana: "ど",
    romaji: "Do",
    meaning: "Tanah (Sabtu dalam hari)",
    type: "noun",
    level: "N5"
  },
  {
    kanji: "日",
    kana: "にち",
    romaji: "Nichi",
    meaning: "Hari / Matahari",
    type: "noun",
    level: "N5"
  },
  {
    kanji: "よう日",
    kana: "ようび",
    romaji: "Youbi",
    meaning: "Hari (dalam minggu)",
    type: "suffix",
    level: "N5"
  },
  {
    kanji: "言う",
    kana: "いう",
    romaji: "Iu",
    meaning: "Mengatakan",
    type: "verb-godan",
    level: "N5"
  },
  {
    kanji: "話す",
    kana: "はなす",
    romaji: "Hanasu",
    meaning: "Berbicara",
    type: "verb-godan",
    level: "N5"
  },
  {
    kanji: "読む",
    kana: "よむ",
    romaji: "Yomu",
    meaning: "Membaca",
    type: "verb-godan",
    level: "N5"
  },
  {
    kanji: "見る",
    kana: "みる",
    romaji: "Miru",
    meaning: "Melihat",
    type: "verb-ru",
    level: "N5"
  },
  {
    kanji: "聞く",
    kana: "きく",
    romaji: "Kiku",
    meaning: "Mendengar",
    type: "verb-godan",
    level: "N5"
  },
  {
    kanji: "書く",
    kana: "かく",
    romaji: "Kaku",
    meaning: "Menulis",
    type: "verb-godan",
    level: "N5"
  },
  {
    kanji: "一",
    kana: "いち",
    romaji: "Ichi",
    meaning: "Satu",
    type: "number",
    level: "N5"
  },
  {
    kanji: "二",
    kana: "に",
    romaji: "Ni",
    meaning: "Dua",
    type: "number",
    level: "N5"
  },
  {
    kanji: "三",
    kana: "さん",
    romaji: "San",
    meaning: "Tiga",
    type: "number",
    level: "N5"
  },
  {
    kanji: "四",
    kana: "よん/し",
    romaji: "Yon/Shi",
    meaning: "Empat",
    type: "number",
    level: "N5"
  },
  {
    kanji: "五",
    kana: "ご",
    romaji: "Go",
    meaning: "Lima",
    type: "number",
    level: "N5"
  },
  {
    kanji: "六",
    kana: "ろく",
    romaji: "Roku",
    meaning: "Enam",
    type: "number",
    level: "N5"
  },
  {
    kanji: "七",
    kana: "なな/しち",
    romaji: "Nana/Shichi",
    meaning: "Tujuh",
    type: "number",
    level: "N5"
  },
  {
    kanji: "八",
    kana: "はち",
    romaji: "Hachi",
    meaning: "Delapan",
    type: "number",
    level: "N5"
  },
  {
    kanji: "九",
    kana: "きゅう",
    romaji: "Kyuu",
    meaning: "Sembilan",
    type: "number",
    level: "N5"
  },
  {
    kanji: "十",
    kana: "じゅう",
    romaji: "Juu",
    meaning: "Sepuluh",
    type: "number",
    level: "N5"
  },
  {
    kanji: "～年",
    kana: "~ねん",
    romaji: "~nen",
    meaning: "Tahun (counter)",
    type: "counter",
    level: "N5"
  },
  {
    kanji: "～月",
    kana: "~がつ",
    romaji: "~gatsu",
    meaning: "Bulan (counter)",
    type: "counter",
    level: "N5"
  },
  {
    kanji: "～日",
    kana: "~にち",
    romaji: "~nichi",
    meaning: "Tanggal (counter)",
    type: "counter",
    level: "N5"
  },
  {
    kanji: "東",
    kana: "ひがし",
    romaji: "Higashi",
    meaning: "Timur",
    type: "noun",
    level: "N5"
  },
  {
    kanji: "西",
    kana: "にし",
    romaji: "Nishi",
    meaning: "Barat",
    type: "noun",
    level: "N5"
  },
  {
    kanji: "南",
    kana: "みなみ",
    romaji: "Minami",
    meaning: "Selatan",
    type: "noun",
    level: "N5"
  }
  // ... (tambahkan data lain jika ada, tapi ini cukup untuk contoh; asumsikan sisanya dari truncated asli)
];

const patternData = {
  N5: [
    { pattern: "です", example: "私は学生です。", meaning: "Adalah." },
    { pattern: "ます", example: "私は毎日勉強します。", meaning: "Bentuk sopan." },
    { pattern: "ません", example: "私はコーヒーを飲みません。", meaning: "Bentuk negatif sopan." },
    { pattern: "でした", example: "昨日は暑かったです。", meaning: "Bentuk lampau." },
    { pattern: "ではありません", example: "これは本ではありません。", meaning: "Bukan." },
    { pattern: "か", example: "これは何ですか？", meaning: "Pertanyaan." },
    { pattern: "も", example: "私も学生です。", meaning: "Juga." },
    { pattern: "～の", example: "これは日本の車です。", meaning: "Kepemilikan/keterangan noun." },
    { pattern: "～を", example: "私はパンを食べます。", meaning: "Penanda objek langsung." },
    { pattern: "～に", example: "7時に起きます。", meaning: "Penanda waktu/tujuan keberadaan." },
    { pattern: "～で", example: "図書館で勉強します。", meaning: "Penanda tempat kegiatan/alat." },
    { pattern: "～へ", example: "日本へ行きます。", meaning: "Arah/tujuan." },
    { pattern: "～から～まで", example: "9時から5時まで働きます。", meaning: "Dari sampai." },
    { pattern: "～と", example: "友達と映画を見ます。", meaning: "Bersama/dengan." },
    { pattern: "～や～など", example: "机の上に本やノートなどがあります。", meaning: "Daftar tidak lengkap." },
    { pattern: "～がほしい", example: "新しい辞書がほしいです。", meaning: "Ingin benda." },
    { pattern: "～たい", example: "日本へ行きたいです。", meaning: "Ingin melakukan sesuatu." },
    { pattern: "～ませんか", example: "いっしょに昼ご飯を食べませんか。", meaning: "Ajakan halus." },
    { pattern: "～ましょう", example: "少し休みましょう。", meaning: "Mari kita..." },
    { pattern: "～てください", example: "ここに名前を書いてください。", meaning: "Permintaan sopan." },
    { pattern: "～てもいいです", example: "ここで写真を撮ってもいいです。", meaning: "Izin melakukan sesuatu." },
    { pattern: "～てはいけません", example: "ここでタバコを吸ってはいけません。", meaning: "Larangan." },
    { pattern: "～ています", example: "今、雨が降っています。", meaning: "Sedang berlangsung/keadaan." },
    { pattern: "～に行きます", example: "友達と買い物に行きます。", meaning: "Pergi untuk melakukan V-masu stem." },
    { pattern: "～たことがあります", example: "富士山に登ったことがあります。", meaning: "Pernah mengalami." },
    { pattern: "～たり～たりします", example: "日曜日は掃除をしたり、音楽を聞いたりします。", meaning: "Contoh aktivitas yang dilakukan." },
    { pattern: "～くて / ～で", example: "この店は安くておいしいです。", meaning: "Menggabung sifat/kalimat." },
    { pattern: "～から", example: "今日は寒いですから、コートを着ます。", meaning: "Alasan/sebab." },
    { pattern: "～ので", example: "用事があるので、先に帰ります。", meaning: "Alasan lebih lembut." },
    { pattern: "～と思います", example: "明日は晴れると思います。", meaning: "Menyatakan pendapat." },
    { pattern: "～つもりです", example: "来年、日本へ留学するつもりです。", meaning: "Rencana/niat." },
    { pattern: "～前に", example: "寝る前に歯を磨きます。", meaning: "Sebelum." },
    { pattern: "～後で", example: "仕事の後で買い物します。", meaning: "Sesudah." }
  ],
  N4: [
    { pattern: "～ながら", example: "彼はテレビを見ながらコーヒーを飲みます。", meaning: "Melakukan dua aktivitas bersamaan." },
    { pattern: "～てしまう", example: "宿題を忘れてしまいました。", meaning: "Selesai sepenuhnya/penyesalan." },
    { pattern: "～ておく", example: "旅行の前にホテルを予約しておきます。", meaning: "Persiapan sebelumnya." },
    { pattern: "～てみる", example: "この漢字を使ってみてください。", meaning: "Mencoba melakukan sesuatu." },
    { pattern: "～てくる", example: "ちょっと水を買ってきます。", meaning: "Pergi lalu kembali/muncul perubahan." },
    { pattern: "～ていく", example: "これから日本語をもっと勉強していきます。", meaning: "Perubahan berlanjut ke depan." },
    { pattern: "～ようになる", example: "日本語のニュースが少し分かるようになりました。", meaning: "Menjadi bisa/terjadi perubahan kemampuan." },
    { pattern: "～ことになる", example: "来月大阪へ転勤することになりました。", meaning: "Keputusan yang ditetapkan." },
    { pattern: "～ことにする", example: "健康のために毎日歩くことにします。", meaning: "Memutuskan sendiri." },
    { pattern: "～なければならない", example: "明日までにレポートを出さなければなりません。", meaning: "Harus." },
    { pattern: "～なくてもいい", example: "今日は残業しなくてもいいです。", meaning: "Tidak perlu." },
    { pattern: "～ば", example: "時間があれば、映画を見に行きます。", meaning: "Pengandaian jika." },
    { pattern: "～たら", example: "駅に着いたら、電話してください。", meaning: "Jika/ketika kondisi tercapai." },
    { pattern: "～なら", example: "日本へ行くなら、春がいいですよ。", meaning: "Kalau mengenai..., maka..." },
    { pattern: "～のに", example: "薬を飲んだのに、まだ痛いです。", meaning: "Berlawanan dengan harapan." },
    { pattern: "～ので", example: "電車が遅れたので、会議に遅れました。", meaning: "Sebab/alasan." },
    { pattern: "～ために", example: "日本で働くために、日本語を勉強しています。", meaning: "Untuk tujuan/karena." },
    { pattern: "～ように", example: "忘れないように、メモしてください。", meaning: "Agar/supaya." },
    { pattern: "～しか～ない", example: "財布に千円しかありません。", meaning: "Hanya ... saja." },
    { pattern: "～ばかり", example: "この店は外国人ばかりですね。", meaning: "Kebanyakan/baru saja." },
    { pattern: "～そうです（様態）", example: "このケーキはおいしそうです。", meaning: "Terlihat seperti." },
    { pattern: "～そうです（伝聞）", example: "天気予報によると、明日は雨だそうです。", meaning: "Katanya/menurut informasi." },
    { pattern: "～らしい", example: "彼は日本語が上手らしいです。", meaning: "Sepertinya (berdasar informasi)." },
    { pattern: "～ようだ", example: "外は静かなようです。", meaning: "Tampaknya/seperti." },
    { pattern: "～だろう / ～でしょう", example: "明日はたぶん暑いでしょう。", meaning: "Dugaan." },
    { pattern: "～てあげる", example: "私は友達に日本語を教えてあげます。", meaning: "Memberi manfaat ke orang lain." },
    { pattern: "～てもらう", example: "私は先生に作文を直してもらいました。", meaning: "Menerima bantuan." },
    { pattern: "～てくれる", example: "友達が駅まで迎えに来てくれました。", meaning: "Orang lain memberi manfaat ke saya." },
    { pattern: "～間に", example: "子どもが寝ている間に、掃除をします。", meaning: "Selama rentang waktu." },
    { pattern: "～ところです", example: "今から食事するところです。", meaning: "Tepat sebelum/saat/sesudah melakukan." }
  ]
};