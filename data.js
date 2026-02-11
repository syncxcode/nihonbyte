const vocabularyData = [
{
  kanji: "魚",
  kana: "さかな",
  meaning: "Ikan",
  type: "noun",
  level: "N5"
},
{
  kanji: "肉",
  kana: "にく",
  meaning: "Daging",
  type: "noun",
  level: "N5"
},
{
  kanji: "卵",
  kana: "たまご",
  meaning: "Telur",
  type: "noun",
  level: "N5"
},
{
  kanji: "水",
  kana: "みず",
  meaning: "Air",
  type: "noun",
  level: "N5"
},
{
  kanji: "食べます",
  kana: "たべます",
  meaning: "Makan",
  type: "verb-ru",
  level: "N5"
},
{
  kanji: "飲みます",
  kana: "のみます",
  meaning: "Minum",
  type: "verb-godan",
  level: "N5"
},
{
  kanji: "大きい",
  kana: "おおきい",
  meaning: "Besar",
  type: "adj-i",
  level: "N5"
},
{
  kanji: "小さい",
  kana: "ちいさい",
  meaning: "Kecil",
  type: "adj-i",
  level: "N5"
},
{
  kanji: "新しい",
  kana: "あたらしい",
  meaning: "Baru",
  type: "adj-i",
  level: "N5"
},
{
  kanji: "古い",
  kana: "ふるい",
  meaning: "Lama / Tua",
  type: "adj-i",
  level: "N5"
},
{
  kanji: "時",
  kana: "じ",
  meaning: "Jam (waktu)",
  type: "counter",
  level: "N5"
},
{
  kanji: "分",
  kana: "ふん/ぷん",
  meaning: "Menit",
  type: "counter",
  level: "N5"
},
{
  kanji: "半",
  kana: "はん",
  meaning: "Setengah",
  type: "noun",
  level: "N5"
},
{
  kanji: "月",
  kana: "げつ",
  meaning: "Bulan (Senin dalam hari)",
  type: "noun",
  level: "N5"
},
{
  kanji: "火",
  kana: "か",
  meaning: "Api (Selasa dalam hari)",
  type: "noun",
  level: "N5"
},
{
  kanji: "水",
  kana: "すい",
  meaning: "Air (Rabu dalam hari)",
  type: "noun",
  level: "N5"
},
{
  kanji: "木",
  kana: "もく",
  meaning: "Pohon (Kamis dalam hari)",
  type: "noun",
  level: "N5"
},
{
  kanji: "金",
  kana: "きん",
  meaning: "Emas (Jumat dalam hari)",
  type: "noun",
  level: "N5"
},
{
  kanji: "土",
  kana: "ど",
  meaning: "Tanah (Sabtu dalam hari)",
  type: "noun",
  level: "N5"
},
{
  kanji: "日",
  kana: "にち",
  meaning: "Hari / Matahari",
  type: "noun",
  level: "N5"
},
{
  kanji: "よう日",
  kana: "ようび",
  meaning: "Hari (dalam minggu)",
  type: "suffix",
  level: "N5"
},
{
  kanji: "言います",
  kana: "いいます",
  meaning: "Mengatakan",
  type: "verb-godan",
  level: "N5"
},
{
  kanji: "話します",
  kana: "はなします",
  meaning: "Berbicara",
  type: "verb-godan",
  level: "N5"
},
{
  kanji: "読みます",
  kana: "よみます",
  meaning: "Membaca",
  type: "verb-godan",
  level: "N5"
},
{
  kanji: "見ます",
  kana: "みます",
  meaning: "Melihat",
  type: "verb-ru",
  level: "N5"
},
{
  kanji: "聞きます",
  kana: "ききます",
  meaning: "Mendengar",
  type: "verb-godan",
  level: "N5"
},
{
  kanji: "書きます",
  kana: "かきます",
  meaning: "Menulis",
  type: "verb-godan",
  level: "N5"
},
{
  kanji: "一",
  kana: "いち",
  meaning: "Satu",
  type: "number",
  level: "N5"
},
{
  kanji: "二",
  kana: "に",
  meaning: "Dua",
  type: "number",
  level: "N5"
},
{
  kanji: "三",
  kana: "さん",
  meaning: "Tiga",
  type: "number",
  level: "N5"
},
{
  kanji: "四",
  kana: "よん/し",
  meaning: "Empat",
  type: "number",
  level: "N5"
},
{
  kanji: "五",
  kana: "ご",
  meaning: "Lima",
  type: "number",
  level: "N5"
},
{
  kanji: "六",
  kana: "ろく",
  meaning: "Enam",
  type: "number",
  level: "N5"
},
{
  kanji: "七",
  kana: "なな/しち",
  meaning: "Tujuh",
  type: "number",
  level: "N5"
},
{
  kanji: "八",
  kana: "はち",
  meaning: "Delapan",
  type: "number",
  level: "N5"
},
{
  kanji: "九",
  kana: "きゅう",
  meaning: "Sembilan",
  type: "number",
  level: "N5"
},
{
  kanji: "十",
  kana: "じゅう",
  meaning: "Sepuluh",
  type: "number",
  level: "N5"
},
{
  kanji: "～年",
  kana: "~ねん",
  meaning: "Tahun (counter)",
  type: "suffix",
  level: "N5"
},
{
  kanji: "～月",
  kana: "~がつ",
  meaning: "Bulan (counter)",
  type: "suffix",
  level: "N5"
},
{
  kanji: "～日",
  kana: "~にち",
  meaning: "Tanggal (counter)",
  type: "suffix",
  level: "N5"
},
{
  kanji: "東",
  kana: "ひがし",
  meaning: "Timur",
  type: "noun",
  level: "N5"
},
{
  kanji: "西",
  kana: "にし",
  meaning: "Barat",
  type: "noun",
  level: "N5"
},
{
  kanji: "南",
  kana: "みなみ",
  meaning: "Selatan",
  type: "noun",
  level: "N5"
},
{
  kanji: "北",
  kana: "きた",
  meaning: "Utara",
  type: "noun",
  level: "N5"
},
{
  kanji: "口",
  kana: "ぐち",
  meaning: "Pintu keluar / Mulut (sebagai akhiran)",
  type: "suffix",
  level: "N5"
},
{
  kanji: "東口",
  kana: "ひがしぐち",
  meaning: "Pintu keluar timur",
  type: "noun",
  level: "N5"
},
{
  kanji: "西口",
  kana: "にしぐち",
  meaning: "Pintu keluar barat",
  type: "noun",
  level: "N5"
},
{
  kanji: "南口",
  kana: "みなみぐち",
  meaning: "Pintu keluar selatan",
  type: "noun",
  level: "N5"
},
{
  kanji: "北口",
  kana: "きたぐち",
  meaning: "Pintu keluar utara",
  type: "noun",
  level: "N5"
},
{
  kanji: "買います",
  kana: "かいます",
  meaning: "Membeli",
  type: "verb-godan",
  level: "N5"
},
{
  kanji: "買いもの",
  kana: "かいもの",
  meaning: "Belanja",
  type: "noun",
  level: "N5"
},
{
  kanji: "お金",
  kana: "おかね",
  meaning: "Uang",
  type: "noun",
  level: "N5"
},
{
  kanji: "～円",
  kana: "~えん",
  meaning: "Yen (mata uang Jepang)",
  type: "suffix",
  level: "N5"
},
{
  kanji: "百",
  kana: "ひゃく",
  meaning: "Seratus",
  type: "number",
  level: "N5"
},
{
  kanji: "千",
  kana: "せん",
  meaning: "Seribu",
  type: "number",
  level: "N5"
},
{
  kanji: "万",
  kana: "まん",
  meaning: "Sepuluh ribu",
  type: "number",
  level: "N5"
},
{
  kanji: "百円",
  kana: "ひゃくえん",
  meaning: "Seratus yen",
  type: "noun",
  level: "N5"
},
{
  kanji: "千円",
  kana: "せんえん",
  meaning: "Seribu yen",
  type: "noun",
  level: "N5"
},
{
  kanji: "一万円",
  kana: "いちまんえん",
  meaning: "Sepuluh ribu yen",
  type: "noun",
  level: "N5"
},
{
  kanji: "行きます",
  kana: "いきます",
  meaning: "Pergi",
  type: "verb-godan",
  level: "N5"
},
{
  kanji: "来ます",
  kana: "きます",
  meaning: "Datang",
  type: "verb-irregular",
  level: "N5"
},
{
  kanji: "会います",
  kana: "あいます",
  meaning: "Bertemu",
  type: "verb-godan",
  level: "N5"
},
{
  kanji: "休みます",
  kana: "やすみます",
  meaning: "Istirahat / Libur",
  type: "verb-godan",
  level: "N5"
},
{
  kanji: "日本",
  kana: "にほん/にっぽん",
  meaning: "Jepang",
  type: "noun",
  level: "N5"
},
{
  kanji: "東京",
  kana: "とうきょう",
  meaning: "Tokyo",
  type: "noun",
  level: "N5"
},
{
  kanji: "私",
  kana: "わたし",
  meaning: "Saya",
  type: "pronoun",
  level: "N5"
},
{
  kanji: "父",
  kana: "ちち",
  meaning: "Ayah (sendiri)",
  type: "noun",
  level: "N5"
},
{
  kanji: "母",
  kana: "はは",
  meaning: "Ibu (sendiri)",
  type: "noun",
  level: "N5"
},
{
  kanji: "子ども",
  kana: "こども",
  meaning: "Anak",
  type: "noun",
  level: "N5"
},
{
  kanji: "男",
  kana: "おとこ",
  meaning: "Laki-laki",
  type: "noun",
  level: "N5"
},
{
  kanji: "女",
  kana: "おんな",
  meaning: "Perempuan",
  type: "noun",
  level: "N5"
},
{
  kanji: "人",
  kana: "ひと",
  meaning: "Orang",
  type: "noun",
  level: "N5"
},
{
  kanji: "お父さん",
  kana: "おとうさん",
  meaning: "Ayah (orang lain)",
  type: "noun",
  level: "N5"
},
{
  kanji: "お母さん",
  kana: "おかあさん",
  meaning: "Ibu (orang lain)",
  type: "noun",
  level: "N5"
},
{
  kanji: "何人",
  kana: "なんにん",
  meaning: "Berapa orang",
  type: "expression",
  level: "N5"
},
{
  kanji: "国",
  kana: "くに",
  meaning: "Negara",
  type: "noun",
  level: "N5"
},
{
  kanji: "外国",
  kana: "がいこく",
  meaning: "Luar negeri",
  type: "noun",
  level: "N5"
},
{
  kanji: "～語",
  kana: "~ご",
  meaning: "Bahasa (akhiran)",
  type: "suffix",
  level: "N5"
},
{
  kanji: "日本語",
  kana: "にほんご",
  meaning: "Bahasa Jepang",
  type: "noun",
  level: "N5"
},
{
  kanji: "英語",
  kana: "えいご",
  meaning: "Bahasa Inggris",
  type: "noun",
  level: "N5"
},
{
  kanji: "中国語",
  kana: "ちゅうごくご",
  meaning: "Bahasa Mandarin",
  type: "noun",
  level: "N5"
},
{
  kanji: "～人",
  kana: "~じん",
  meaning: "Orang (kebangsaan)",
  type: "suffix",
  level: "N5"
},
{
  kanji: "日本人",
  kana: "にほんじん",
  meaning: "Orang Jepang",
  type: "noun",
  level: "N5"
},
{
  kanji: "好き",
  kana: "すき",
  meaning: "Suka",
  type: "adj-na",
  level: "N5"
},
{
  kanji: "本",
  kana: "ほん",
  meaning: "Buku",
  type: "noun",
  level: "N5"
},
{
  kanji: "読書",
  kana: "どくしょ",
  meaning: "Membaca buku",
  type: "noun",
  level: "N5"
},
{
  kanji: "何",
  kana: "なに",
  meaning: "Apa",
  type: "pronoun",
  level: "N5"
},
{
  kanji: "春",
  kana: "はる",
  meaning: "Musim semi",
  type: "noun",
  level: "N5"
},
{
  kanji: "夏",
  kana: "なつ",
  meaning: "Musim panas",
  type: "noun",
  level: "N5"
},
{
  kanji: "秋",
  kana: "あき",
  meaning: "Musim gugur",
  type: "noun",
  level: "N5"
},
{
  kanji: "冬",
  kana: "ふゆ",
  meaning: "Musim dingin",
  type: "noun",
  level: "N5"
}
{
  kanji: "今",
  kana: "いま",
  meaning: "Sekarang",
  type: "noun",
  level: "N5"
},
{
  kanji: "花",
  kana: "はな",
  meaning: "Bunga",
  type: "noun",
  level: "N5"
},
{
  kanji: "海",
  kana: "うみ",
  meaning: "Laut",
  type: "noun",
  level: "N5"
},
{
  kanji: "山",
  kana: "やま",
  meaning: "Gunung",
  type: "noun",
  level: "N5"
},
{
  kanji: "川",
  kana: "かわ",
  meaning: "Sungai",
  type: "noun",
  level: "N5"
},
{
  kanji: "今日",
  kana: "きょう",
  meaning: "Hari ini",
  type: "noun",
  level: "N5"
},
{
  kanji: "天気",
  kana: "てんき",
  meaning: "Cuaca",
  type: "noun",
  level: "N5"
},
{
  kanji: "晴れ",
  kana: "はれ",
  meaning: "Cerah",
  type: "noun",
  level: "N5"
},
{
  kanji: "雨",
  kana: "あめ",
  meaning: "Hujan",
  type: "noun",
  level: "N5"
},
{
  kanji: "雪",
  kana: "ゆき",
  meaning: "Salju",
  type: "noun",
  level: "N5"
},
{
  kanji: "雲",
  kana: "くも",
  meaning: "Awan",
  type: "noun",
  level: "N5"
},
{
  kanji: "風",
  kana: "かぜ",
  meaning: "Angin",
  type: "noun",
  level: "N5"
},
{
  kanji: "空",
  kana: "そら",
  meaning: "Langit",
  type: "noun",
  level: "N5"
},
{
  kanji: "町",
  kana: "まち",
  meaning: "Kota kecil",
  type: "noun",
  level: "N5"
},
{
  kanji: "店",
  kana: "みせ",
  meaning: "Toko",
  type: "noun",
  level: "N5"
},
{
  kanji: "人気",
  kana: "にんき",
  meaning: "Populer",
  type: "adj-na",
  level: "N5"
},
{
  kanji: "多い",
  kana: "おおい",
  meaning: "Banyak",
  type: "adj-i",
  level: "N5"
},
{
  kanji: "少ない",
  kana: "すくない",
  meaning: "Sedikit",
  type: "adj-i",
  level: "N5"
},
{
  kanji: "高い",
  kana: "たかい",
  meaning: "Tinggi / Mahal",
  type: "adj-i",
  level: "N5"
},
{
  kanji: "安い",
  kana: "やすい",
  meaning: "Murah",
  type: "adj-i",
  level: "N5"
},
{
  kanji: "広い",
  kana: "ひろい",
  meaning: "Luas",
  type: "adj-i",
  level: "N5"
},
{
  kanji: "道",
  kana: "みち",
  meaning: "Jalan",
  type: "noun",
  level: "N5"
},
{
  kanji: "通り",
  kana: "とおり",
  meaning: "Jalan / Gang",
  type: "noun",
  level: "N5"
},
{
  kanji: "右",
  kana: "みぎ",
  meaning: "Kanan",
  type: "noun",
  level: "N5"
},
{
  kanji: "左",
  kana: "ひだり",
  meaning: "Kiri",
  type: "noun",
  level: "N5"
},
{
  kanji: "一つ",
  kana: "ひとつ",
  meaning: "Satu (benda)",
  type: "number",
  level: "N5"
},
{
  kanji: "二つ",
  kana: "ふたつ",
  meaning: "Dua (benda)",
  type: "number",
  level: "N5"
},
{
  kanji: "赤い",
  kana: "あかい",
  meaning: "Merah",
  type: "adj-i",
  level: "N5"
},
{
  kanji: "青い",
  kana: "あおい",
  meaning: "Biru",
  type: "adj-i",
  level: "N5"
},
{
  kanji: "黒い",
  kana: "くろい",
  meaning: "Hitam",
  type: "adj-i",
  level: "N5"
},
{
  kanji: "白い",
  kana: "しろい",
  meaning: "Putih",
  type: "adj-i",
  level: "N5"
},
{
  kanji: "時間",
  kana: "じかん",
  meaning: "Waktu",
  type: "noun",
  level: "N5"
},
{
  kanji: "場所",
  kana: "ばしょ",
  meaning: "Tempat",
  type: "noun",
  level: "N5"
},
{
  kanji: "駅",
  kana: "えき",
  meaning: "Stasiun",
  type: "noun",
  level: "N5"
},
{
  kanji: "日",
  kana: "ひ",
  meaning: "Hari / Matahari",
  type: "noun",
  level: "N5"
},
{
  kanji: "出かけます",
  kana: "でかけます",
  meaning: "Pergi keluar",
  type: "verb-ru",
  level: "N5"
},
{
  kanji: "待ちます",
  kana: "まちます",
  meaning: "Menunggu",
  type: "verb-godan",
  level: "N5"
},
{
  kanji: "止まります",
  kana: "とまります",
  meaning: "Berhenti",
  type: "verb-godan",
  level: "N5"
},
{
  kanji: "食事",
  kana: "しょくじ",
  meaning: "Makan (kegiatan)",
  type: "noun",
  level: "N5"
},
{
  kanji: "仕事",
  kana: "しごと",
  meaning: "Pekerjaan",
  type: "noun",
  level: "N5"
},
{
  kanji: "前",
  kana: "まえ",
  meaning: "Depan / Sebelum",
  type: "noun",
  level: "N5"
},
{
  kanji: "後",
  kana: "あと",
  meaning: "Sesudah / Nanti",
  type: "noun",
  level: "N5"
},
{
  kanji: "朝",
  kana: "あさ",
  meaning: "Pagi",
  type: "noun",
  level: "N5"
},
{
  kanji: "昼",
  kana: "ひる",
  meaning: "Siang",
  type: "noun",
  level: "N5"
},
{
  kanji: "夜",
  kana: "よる",
  meaning: "Malam",
  type: "noun",
  level: "N5"
}
{
  kanji: "乗ります",
  kana: "のります",
  meaning: "Naik (kendaraan)",
  type: "verb-godan",
  level: "N5"
},
{
  kanji: "学校",
  kana: "がっこう",
  meaning: "Sekolah",
  type: "noun",
  level: "N5"
},
{
  kanji: "小学校",
  kana: "しょうがっこう",
  meaning: "Sekolah dasar",
  type: "noun",
  level: "N5"
},
{
  kanji: "中学校",
  kana: "ちゅうがっこう",
  meaning: "Sekolah menengah pertama",
  type: "noun",
  level: "N5"
},
{
  kanji: "高校",
  kana: "こうこう",
  meaning: "Sekolah menengah atas",
  type: "noun",
  level: "N5"
},
{
  kanji: "大学",
  kana: "だいがく",
  meaning: "Universitas",
  type: "noun",
  level: "N5"
},
{
  kanji: "先生",
  kana: "せんせい",
  meaning: "Guru",
  type: "noun",
  level: "N5"
},
{
  kanji: "漢字",
  kana: "かんじ",
  meaning: "Kanji",
  type: "noun",
  level: "N5"
},
{
  kanji: "読み方",
  kana: "よみかた",
  meaning: "Cara membaca",
  type: "noun",
  level: "N5"
},
{
  kanji: "学生",
  kana: "がくせい",
  meaning: "Pelajar / Mahasiswa",
  type: "noun",
  level: "N5"
},
{
  kanji: "～年生",
  kana: "~ねんせい (いちねんせい)",
  meaning: "Siswa kelas ~",
  type: "suffix",
  level: "N5"
},
{
  kanji: "勉強",
  kana: "べんきょう",
  meaning: "Belajar",
  type: "noun",
  level: "N5"
},
{
  kanji: "文化",
  kana: "ぶんか",
  meaning: "Budaya",
  type: "noun",
  level: "N5"
},
{
  kanji: "音楽",
  kana: "おんがく",
  meaning: "Musik",
  type: "noun",
  level: "N5"
},
{
  kanji: "旅行",
  kana: "りょこう",
  meaning: "Perjalanan / Wisata",
  type: "noun",
  level: "N5"
},
{
  kanji: "留学",
  kana: "りゅうがく",
  meaning: "Belajar di luar negeri",
  type: "noun",
  level: "N5"
},
{
  kanji: "友だち",
  kana: "ともだち",
  meaning: "Teman",
  type: "noun",
  level: "N5"
},
{
  kanji: "楽しい",
  kana: "たのしい",
  meaning: "Menyenangkan",
  type: "adj-i",
  level: "N5"
},
{
  kanji: "週",
  kana: "しゅう",
  meaning: "Minggu",
  type: "counter",
  level: "N5"
},
{
  kanji: "～回",
  kana: "~かい (にかい)",
  meaning: "Kali (frekuensi)",
  type: "counter",
  level: "N5"
},
{
  kanji: "食べ物",
  kana: "たべもの",
  meaning: "Makanan",
  type: "noun",
  level: "N5"
},
{
  kanji: "飲み物",
  kana: "のみもの",
  meaning: "Minuman",
  type: "noun",
  level: "N5"
},
{
  kanji: "お茶",
  kana: "おちゃ",
  meaning: "Teh",
  type: "noun",
  level: "N5"
},
{
  kanji: "お酒",
  kana: "おさけ",
  meaning: "Minuman beralkohol",
  type: "noun",
  level: "N5"
},
{
  kanji: "作ります",
  kana: "つくります",
  meaning: "Membuat",
  type: "verb-godan",
  level: "N5"
},
{
  kanji: "持っていきます",
  kana: "もっていきます",
  meaning: "Membawa (pergi)",
  type: "verb-godan",
  level: "N5"
},
{
  kanji: "お願いします",
  kana: "おねがいします",
  meaning: "Tolong / Mohon",
  type: "expression",
  level: "N5"
},
{
  kanji: "料理",
  kana: "りょうり",
  meaning: "Masakan / Memasak",
  type: "noun",
  level: "N5"
},
{
  kanji: "味",
  kana: "あじ",
  meaning: "Rasa",
  type: "noun",
  level: "N5"
},
{
  kanji: "色",
  kana: "いろ",
  meaning: "Warna",
  type: "noun",
  level: "N5"
},
{
  kanji: "野菜",
  kana: "やさい",
  meaning: "Sayuran",
  type: "noun",
  level: "N5"
},
{
  kanji: "少し",
  kana: "すこし",
  meaning: "Sedikit",
  type: "adverb",
  level: "N5"
},
{
  kanji: "中",
  kana: "なか",
  meaning: "Dalam",
  type: "noun",
  level: "N5"
},
{
  kanji: "入っています",
  kana: "はいっています",
  meaning: "Masuk / Berada di dalam",
  type: "verb-godan",
  level: "N5"
},
{
  kanji: "会社",
  kana: "かいしゃ",
  meaning: "Perusahaan",
  type: "noun",
  level: "N5"
},
{
  kanji: "本社",
  kana: "ほんしゃ",
  meaning: "Kantor pusat",
  type: "noun",
  level: "N5"
},
{
  kanji: "支社",
  kana: "ししゃ",
  meaning: "Cabang perusahaan",
  type: "noun",
  level: "N5"
},
{
  kanji: "出張",
  kana: "しゅっちょう",
  meaning: "Perjalanan dinas",
  type: "noun",
  level: "N5"
},
{
  kanji: "空港",
  kana: "くうこう",
  meaning: "Bandara",
  type: "noun",
  level: "N5"
},
{
  kanji: "出発",
  kana: "しゅっぱつ",
  meaning: "Keberangkatan",
  type: "noun",
  level: "N5"
},
{
  kanji: "到着",
  kana: "とうちゃく",
  meaning: "Kedatangan",
  type: "noun",
  level: "N5"
},
{
  kanji: "午前",
  kana: "ごぜん",
  meaning: "AM / Pagi hari",
  type: "noun",
  level: "N5"
},
{
  kanji: "午後",
  kana: "ごご",
  meaning: "PM / Siang hari",
  type: "noun",
  level: "N5"
},
{
  kanji: "自分",
  kana: "じぶん",
  meaning: "Diri sendiri",
  type: "noun",
  level: "N5"
},
{
  kanji: "電話",
  kana: "でんわ",
  meaning: "Telepon",
  type: "noun",
  level: "N5"
},
{
  kanji: "電気",
  kana: "でんき",
  meaning: "Listrik",
  type: "noun",
  level: "N5"
},
{
  kanji: "電車",
  kana: "でんしゃ",
  meaning: "Kereta listrik",
  type: "noun",
  level: "N5"
},
{
  kanji: "車",
  kana: "くるま",
  meaning: "Mobil",
  type: "noun",
  level: "N5"
},
{
  kanji: "送ります",
  kana: "おくります",
  meaning: "Mengirim",
  type: "verb-godan",
  level: "N5"
},
{
  kanji: "使います",
  kana: "つかいます",
  meaning: "Menggunakan",
  type: "verb-godan",
  level: "N5"
},
{
  kanji: "借ります",
  kana: "かります",
  meaning: "Meminjam",
  type: "verb-ru",
  level: "N5"
},
{
  kanji: "体",
  kana: "からだ",
  meaning: "Tubuh",
  type: "noun",
  level: "N5"
},
{
  kanji: "頭",
  kana: "あたま",
  meaning: "Kepala",
  type: "noun",
  level: "N5"
},
{
  kanji: "目",
  kana: "め",
  meaning: "Mata",
  type: "noun",
  level: "N5"
},
{
  kanji: "口",
  kana: "くち",
  meaning: "Mulut",
  type: "noun",
  level: "N5"
},
{
  kanji: "耳",
  kana: "みみ",
  meaning: "Telinga",
  type: "noun",
  level: "N5"
},
{
  kanji: "手",
  kana: "て",
  meaning: "Tangan",
  type: "noun",
  level: "N5"
},
{
  kanji: "足",
  kana: "あし",
  meaning: "Kaki",
  type: "noun",
  level: "N5"
},
{
  kanji: "上",
  kana: "うえ",
  meaning: "Atas",
  type: "noun",
  level: "N5"
},
{
  kanji: "下",
  kana: "した",
  meaning: "Bawah",
  type: "noun",
  level: "N5"
}
{
  kanji: "毎～",
  kana: "まい~",
  meaning: "Setiap (awalan)",
  type: "prefix",
  level: "N5"
},
{
  kanji: "毎朝",
  kana: "まいあさ",
  meaning: "Setiap pagi",
  type: "noun",
  level: "N5"
},
{
  kanji: "毎日",
  kana: "まいにち",
  meaning: "Setiap hari",
  type: "noun",
  level: "N5"
},
{
  kanji: "週末",
  kana: "しゅうまつ",
  meaning: "Akhir pekan",
  type: "noun",
  level: "N5"
},
{
  kanji: "元気",
  kana: "げんき",
  meaning: "Sehat / Bersemangat",
  type: "adj-na",
  level: "N5"
},
{
  kanji: "外",
  kana: "そと",
  meaning: "Luar",
  type: "noun",
  level: "N5"
},
{
  kanji: "起きます",
  kana: "おきます",
  meaning: "Bangun",
  type: "verb-ru",
  level: "N5"
},
{
  kanji: "歩きます",
  kana: "あるきます",
  meaning: "Berjalan kaki",
  type: "verb-godan",
  level: "N5"
},
{
  kanji: "走ります",
  kana: "はしります",
  meaning: "Berlari",
  type: "verb-godan",
  level: "N5"
},
{
  kanji: "泳ぎます",
  kana: "およぎます",
  meaning: "Berenang",
  type: "verb-godan",
  level: "N5"
},
{
  kanji: "お祝い",
  kana: "おいわい",
  meaning: "Perayaan",
  type: "noun",
  level: "N5"
},
{
  kanji: "誕生日",
  kana: "たんじょうび",
  meaning: "Ulang tahun",
  type: "noun",
  level: "N5"
},
{
  kanji: "結婚",
  kana: "けっこん",
  meaning: "Pernikahan",
  type: "noun",
  level: "N5"
},
{
  kanji: "絵",
  kana: "え",
  meaning: "Gambar / Lukisan",
  type: "noun",
  level: "N5"
},
{
  kanji: "写真",
  kana: "しゃしん",
  meaning: "Foto",
  type: "noun",
  level: "N5"
},
{
  kanji: "時計",
  kana: "とけい",
  meaning: "Jam (alat)",
  type: "noun",
  level: "N5"
},
{
  kanji: "着ます",
  kana: "きます",
  meaning: "Memakai (pakaian atas)",
  type: "verb-ru",
  level: "N5"
},
{
  kanji: "先～",
  kana: "せん~",
  meaning: "Sebelumnya (awalan)",
  type: "prefix",
  level: "N5"
},
{
  kanji: "先週",
  kana: "せんしゅう",
  meaning: "Minggu lalu",
  type: "noun",
  level: "N5"
},
{
  kanji: "今～",
  kana: "こん~",
  meaning: "Sekarang / Bulan ini (awalan)",
  type: "prefix",
  level: "N5"
},
{
  kanji: "今月",
  kana: "こんげつ",
  meaning: "Bulan ini",
  type: "noun",
  level: "N5"
},
{
  kanji: "来～",
  kana: "らい~",
  meaning: "Berikutnya (awalan)",
  type: "prefix",
  level: "N5"
},
{
  kanji: "来年",
  kana: "らいねん",
  meaning: "Tahun depan",
  type: "noun",
  level: "N5"
},
{
  kanji: "今年",
  kana: "ことし",
  meaning: "Tahun ini",
  type: "noun",
  level: "N5"
},
{
  kanji: "去年",
  kana: "きょねん",
  meaning: "Tahun lalu",
  type: "noun",
  level: "N5"
},
{
  kanji: "家",
  kana: "いえ",
  meaning: "Rumah",
  type: "noun",
  level: "N5"
},
{
  kanji: "思います",
  kana: "おもいます",
  meaning: "Berpikir",
  type: "verb-godan",
  level: "N5"
},
{
  kanji: "自己紹介",
  kana: "じこしょうかい",
  meaning: "Perkenalan diri",
  type: "noun",
  level: "N5"
},
{
  kanji: "名前",
  kana: "なまえ",
  meaning: "Nama",
  type: "noun",
  level: "N5"
},
{
  kanji: "意味",
  kana: "いみ",
  meaning: "Arti / Makna",
  type: "noun",
  level: "N5"
},
{
  kanji: "本屋",
  kana: "ほんや",
  meaning: "Toko buku",
  type: "noun",
  level: "N5"
},
{
  kanji: "近く",
  kana: "ちかく",
  meaning: "Dekat",
  type: "noun",
  level: "N5"
},
{
  kanji: "住みます",
  kana: "すみます",
  meaning: "Tinggal / Menetap",
  type: "verb-godan",
  level: "N5"
},
{
  kanji: "働きます",
  kana: "はたらきます",
  meaning: "Bekerja",
  type: "verb-godan",
  level: "N5"
},
{
  kanji: "～番目",
  kana: "~ばんめ (いちばんめ)",
  meaning: "Ke- (urutan)",
  type: "suffix",
  level: "N5"
},
{
  kanji: "兄",
  kana: "あに",
  meaning: "Kakak laki-laki (sendiri)",
  type: "noun",
  level: "N5"
},
{
  kanji: "お兄さん",
  kana: "おにいさん",
  meaning: "Kakak laki-laki (orang lain)",
  type: "noun",
  level: "N5"
},
{
  kanji: "姉",
  kana: "あね",
  meaning: "Kakak perempuan (sendiri)",
  type: "noun",
  level: "N5"
},
{
  kanji: "お姉さん",
  kana: "おねえさん",
  meaning: "Kakak perempuan (orang lain)",
  type: "noun",
  level: "N5"
},
{
  kanji: "弟",
  kana: "おとうと",
  meaning: "Adik laki-laki",
  type: "noun",
  level: "N5"
},
{
  kanji: "妹",
  kana: "いもうと",
  meaning: "Adik perempuan",
  type: "noun",
  level: "N5"
},
{
  kanji: "家族",
  kana: "かぞく",
  meaning: "Keluarga",
  type: "noun",
  level: "N5"
},
{
  kanji: "長い",
  kana: "ながい",
  meaning: "Panjang",
  type: "adj-i",
  level: "N5"
},
{
  kanji: "短い",
  kana: "みじかい",
  meaning: "Pendek",
  type: "adj-i",
  level: "N5"
},
{
  kanji: "低い",
  kana: "ひくい",
  meaning: "Rendah",
  type: "adj-i",
  level: "N5"
},
{
  kanji: "上手",
  kana: "じょうず",
  meaning: "Pandai",
  type: "adj-na",
  level: "N5"
},
{
  kanji: "歌",
  kana: "うた",
  meaning: "Lagu",
  type: "noun",
  level: "N5"
},
{
  kanji: "歌います",
  kana: "うたいます",
  meaning: "Bernyanyi",
  type: "verb-godan",
  level: "N5"
},
{
  kanji: "客",
  kana: "きゃく",
  meaning: "Tamu / Pelanggan",
  type: "noun",
  level: "N5"
},
{
  kanji: "注文",
  kana: "ちゅうもん",
  meaning: "Pesanan",
  type: "noun",
  level: "N5"
}
{
  kanji: "洋食",
  kana: "ようしょく",
  meaning: "Masakan Barat",
  type: "noun",
  level: "N5"
},
{
  kanji: "和食",
  kana: "わしょく",
  meaning: "Masakan Jepang",
  type: "noun",
  level: "N5"
},
{
  kanji: "牛肉",
  kana: "ぎゅうにく",
  meaning: "Daging sapi",
  type: "noun",
  level: "N5"
},
{
  kanji: "地方",
  kana: "ちほう",
  meaning: "Daerah",
  type: "noun",
  level: "N5"
},
{
  kanji: "有名",
  kana: "ゆうめい",
  meaning: "Terkenal",
  type: "adj-na",
  level: "N5"
},
{
  kanji: "生",
  kana: "なま",
  meaning: "Mentah",
  type: "noun",
  level: "N5"
},
{
  kanji: "冷たい",
  kana: "つめたい",
  meaning: "Dingin (sentuhan/minuman)",
  type: "adj-i",
  level: "N5"
},
{
  kanji: "ご飯",
  kana: "ごはん",
  meaning: "Nasi / Makan",
  type: "noun",
  level: "N5"
},
{
  kanji: "塩",
  kana: "しお",
  meaning: "Garam",
  type: "noun",
  level: "N5"
},
{
  kanji: "全部",
  kana: "ぜんぶ",
  meaning: "Semua",
  type: "noun",
  level: "N5"
},
{
  kanji: "～方",
  kana: "~かた",
  meaning: "Cara (melakukan)",
  type: "suffix",
  level: "N5"
},
{
  kanji: "食べ方",
  kana: "たべかた",
  meaning: "Cara makan",
  type: "noun",
  level: "N5"
},
{
  kanji: "熱い",
  kana: "あつい",
  meaning: "Panas (benda/makanan)",
  type: "adj-i",
  level: "N5"
},
{
  kanji: "苦手",
  kana: "にがて",
  meaning: "Tidak pandai / Tidak suka",
  type: "adj-na",
  level: "N5"
},
{
  kanji: "入れます",
  kana: "いれます",
  meaning: "Memasukkan",
  type: "verb-ru",
  level: "N5"
},
{
  kanji: "木",
  kana: "き",
  meaning: "Pohon",
  type: "noun",
  level: "N5"
},
{
  kanji: "森",
  kana: "もり",
  meaning: "Hutan",
  type: "noun",
  level: "N5"
},
{
  kanji: "島",
  kana: "しま",
  meaning: "Pulau",
  type: "noun",
  level: "N5"
},
{
  kanji: "自然",
  kana: "しぜん",
  meaning: "Alam",
  type: "noun",
  level: "N5"
},
{
  kanji: "船",
  kana: "ふね",
  meaning: "Kapal",
  type: "noun",
  level: "N5"
},
{
  kanji: "暑い",
  kana: "あつい",
  meaning: "Panas (cuaca)",
  type: "adj-i",
  level: "N5"
},
{
  kanji: "帰ります",
  kana: "かえります",
  meaning: "Pulang",
  type: "verb-godan",
  level: "N5"
},
{
  kanji: "予約します",
  kana: "よやくします",
  meaning: "Memesan / Reservasi",
  type: "verb-irregular",
  level: "N5"
},
{
  kanji: "運転します",
  kana: "うんてんします",
  meaning: "Mengemudi",
  type: "verb-irregular",
  level: "N5"
},
{
  kanji: "～中",
  kana: "~ちゅう",
  meaning: "Sedang (dalam proses)",
  type: "suffix",
  level: "N5"
},
{
  kanji: "旅行中",
  kana: "りょこうちゅう",
  meaning: "Sedang dalam perjalanan",
  type: "noun",
  level: "N5"
},
{
  kanji: "観光地",
  kana: "かんこうち",
  meaning: "Tempat wisata",
  type: "noun",
  level: "N5"
},
{
  kanji: "女性",
  kana: "じょせい",
  meaning: "Perempuan (formal)",
  type: "noun",
  level: "N5"
},
{
  kanji: "男性",
  kana: "だんせい",
  meaning: "Laki-laki (formal)",
  type: "noun",
  level: "N5"
},
{
  kanji: "動物",
  kana: "どうぶつ",
  meaning: "Hewan",
  type: "noun",
  level: "N5"
},
{
  kanji: "空気",
  kana: "くうき",
  meaning: "Udara",
  type: "noun",
  level: "N5"
},
{
  kanji: "料金",
  kana: "りょうきん",
  meaning: "Biaya",
  type: "noun",
  level: "N5"
},
{
  kanji: "無料",
  kana: "むりょう",
  meaning: "Gratis",
  type: "adj-na",
  level: "N5"
},
{
  kanji: "明るい",
  kana: "あかるい",
  meaning: "Terang",
  type: "adj-i",
  level: "N5"
},
{
  kanji: "便利",
  kana: "べんり",
  meaning: "Praktis / Nyaman",
  type: "adj-na",
  level: "N5"
},
{
  kanji: "～中",
  kana: "~じゅう",
  meaning: "Sepanjang / Seluruh",
  type: "suffix",
  level: "N5"
},
{
  kanji: "一年中",
  kana: "いちねんじゅう",
  meaning: "Sepanjang tahun",
  type: "noun",
  level: "N5"
},
{
  kanji: "受付",
  kana: "うけつけ",
  meaning: "Resepsionis / Penerimaan",
  type: "noun",
  level: "N5"
},
{
  kanji: "広場",
  kana: "ひろば",
  meaning: "Lapangan / Alun-alun",
  type: "noun",
  level: "N5"
},
{
  kanji: "問題",
  kana: "もんだい",
  meaning: "Masalah",
  type: "noun",
  level: "N5"
},
{
  kanji: "同じ",
  kana: "おなじ",
  meaning: "Sama",
  type: "adj-na",
  level: "N5"
},
{
  kanji: "集まります",
  kana: "あつまります",
  meaning: "Berkumpul",
  type: "verb-godan",
  level: "N5"
},
{
  kanji: "始まります",
  kana: "はじまります",
  meaning: "Mulai (intransitif)",
  type: "verb-godan",
  level: "N5"
},
{
  kanji: "終わります",
  kana: "おわります",
  meaning: "Selesai",
  type: "verb-godan",
  level: "N5"
},
{
  kanji: "中止します",
  kana: "ちゅうしします",
  meaning: "Membatalkan",
  type: "verb-irregular",
  level: "N5"
},
{
  kanji: "教えます",
  kana: "おしえます",
  meaning: "Mengajar / Memberi tahu",
  type: "verb-ru",
  level: "N5"
},
{
  kanji: "祭り",
  kana: "まつり",
  meaning: "Festival",
  type: "noun",
  level: "N5"
},
{
  kanji: "日本祭",
  kana: "にほんまつり",
  meaning: "Festival Jepang",
  type: "noun",
  level: "N5"
},
{
  kanji: "会場",
  kana: "かいじょう",
  meaning: "Tempat acara",
  type: "noun",
  level: "N5"
},
{
  kanji: "入場料",
  kana: "にゅうじょうりょう",
  meaning: "Tiket masuk",
  type: "noun",
  level: "N5"
},
{
  kanji: "参加者",
  kana: "さんかしゃ",
  meaning: "Peserta",
  type: "noun",
  level: "N5"
},
{
  kanji: "急ぎます",
  kana: "いそぎます",
  meaning: "Bergegas",
  type: "verb-godan",
  level: "N5"
},
{
  kanji: "決めます",
  kana: "きめます",
  meaning: "Memutuskan",
  type: "verb-ru",
  level: "N5"
},
{
  kanji: "知ります",
  kana: "しります",
  meaning: "Mengetahui",
  type: "verb-godan",
  level: "N5"
}
{
  kanji: "正月",
  kana: "しょうがつ",
  meaning: "Tahun baru (Jepang)",
  type: "noun",
  level: "N4"
},
{
  kanji: "年末",
  kana: "ねんまつ",
  meaning: "Akhir tahun",
  type: "noun",
  level: "N4"
},
{
  kanji: "年始",
  kana: "ねんし",
  meaning: "Awal tahun",
  type: "noun",
  level: "N4"
},
{
  kanji: "親",
  kana: "おや",
  meaning: "Orang tua",
  type: "noun",
  level: "N5"
},
{
  kanji: "忙しい",
  kana: "いそがしい",
  meaning: "Sibuk",
  type: "adj-i",
  level: "N5"
},
{
  kanji: "特別",
  kana: "とくべつ",
  meaning: "Khusus / Spesial",
  type: "adj-na",
  level: "N4"
},
{
  kanji: "帰国",
  kana: "きこく",
  meaning: "Pulang ke negara asal",
  type: "noun",
  level: "N4"
},
{
  kanji: "喜びます",
  kana: "よろこびます",
  meaning: "Bergembira",
  type: "verb-godan",
  level: "N4"
},
{
  kanji: "幸せ",
  kana: "しあわせ",
  meaning: "Bahagia",
  type: "adj-na",
  level: "N5"
},
{
  kanji: "長生き",
  kana: "ながいき",
  meaning: "Panjang umur",
  type: "noun",
  level: "N4"
},
{
  kanji: "合格",
  kana: "ごうかく",
  meaning: "Lulus",
  type: "noun",
  level: "N4"
},
{
  kanji: "試験",
  kana: "しけん",
  meaning: "Ujian",
  type: "noun",
  level: "N4"
},
{
  kanji: "大人",
  kana: "おとな",
  meaning: "Orang dewasa",
  type: "noun",
  level: "N5"
},
{
  kanji: "～式",
  kana: "~しき",
  meaning: "Upacara",
  type: "suffix",
  level: "N4"
},
{
  kanji: "～市",
  kana: "~し",
  meaning: "Kota (akhiran)",
  type: "suffix",
  level: "N5"
},
{
  kanji: "店員",
  kana: "てんいん",
  meaning: "Pegawai toko",
  type: "noun",
  level: "N4"
},
{
  kanji: "調子",
  kana: "ちょうし",
  meaning: "Kondisi",
  type: "noun",
  level: "N4"
},
{
  kanji: "悪い",
  kana: "わるい",
  meaning: "Buruk",
  type: "adj-i",
  level: "N5"
},
{
  kanji: "動きます",
  kana: "うごきます",
  meaning: "Bergerak",
  type: "verb-godan",
  level: "N4"
},
{
  kanji: "考えます",
  kana: "かんがえます",
  meaning: "Berpikir",
  type: "verb-ru",
  level: "N4"
},
{
  kanji: "音",
  kana: "おと",
  meaning: "Suara",
  type: "noun",
  level: "N5"
},
{
  kanji: "出ます",
  kana: "でます",
  meaning: "Keluar",
  type: "verb-ru",
  level: "N5"
},
{
  kanji: "重い",
  kana: "おもい",
  meaning: "Berat",
  type: "adj-i",
  level: "N5"
},
{
  kanji: "軽い",
  kana: "かるい",
  meaning: "Ringan",
  type: "adj-i",
  level: "N5"
},
{
  kanji: "静か",
  kana: "しずか",
  meaning: "Tenang",
  type: "adj-na",
  level: "N5"
},
{
  kanji: "早く",
  kana: "はやく",
  meaning: "Cepat (adverb)",
  type: "adverb",
  level: "N5"
},
{
  kanji: "方",
  kana: "ほう",
  meaning: "Arah / Cara",
  type: "noun",
  level: "N5"
},
{
  kanji: "洗います",
  kana: "あらいます",
  meaning: "Mencuci",
  type: "verb-godan",
  level: "N5"
},
{
  kanji: "満足します",
  kana: "まんぞくします",
  meaning: "Puas",
  type: "verb-irregular",
  level: "N4"
},
{
  kanji: "京都",
  kana: "きょうと",
  meaning: "Kyoto",
  type: "noun",
  level: "N5"
},
{
  kanji: "神社",
  kana: "じんじゃ",
  meaning: "Kuil Shinto",
  type: "noun",
  level: "N4"
},
{
  kanji: "お寺",
  kana: "おてら",
  meaning: "Kuil Buddha",
  type: "noun",
  level: "N5"
},
{
  kanji: "歴史",
  kana: "れきし",
  meaning: "Sejarah",
  type: "noun",
  level: "N4"
},
{
  kanji: "世界",
  kana: "せかい",
  meaning: "Dunia",
  type: "noun",
  level: "N5"
},
{
  kanji: "禁止",
  kana: "きんし",
  meaning: "Larangan",
  type: "noun",
  level: "N4"
},
{
  kanji: "説明",
  kana: "せつめい",
  meaning: "Penjelasan",
  type: "noun",
  level: "N4"
},
{
  kanji: "道具",
  kana: "どうぐ",
  meaning: "Alat",
  type: "noun",
  level: "N4"
}
{
  kanji: "博物館",
  kana: "はくぶつかん",
  meaning: "Museum",
  type: "noun",
  level: "N4"
},
{
  kanji: "必要",
  kana: "ひつよう",
  meaning: "Perlu",
  type: "adj-na",
  level: "N4"
},
{
  kanji: "～階",
  kana: "~かい (にかい)",
  meaning: "Lantai (bangunan)",
  type: "counter",
  level: "N5"
},
{
  kanji: "油",
  kana: "あぶら",
  meaning: "Minyak",
  type: "noun",
  level: "N4"
},
{
  kanji: "紙",
  kana: "かみ",
  meaning: "Kertas",
  type: "noun",
  level: "N5"
},
{
  kanji: "寒い",
  kana: "さむい",
  meaning: "Dingin (cuaca)",
  type: "adj-i",
  level: "N5"
},
{
  kanji: "出します",
  kana: "だします",
  meaning: "Mengeluarkan",
  type: "verb-godan",
  level: "N4"
},
{
  kanji: "～度",
  kana: "~ど",
  meaning: "Derajat",
  type: "counter",
  level: "N5"
},
{
  kanji: "～点",
  kana: "~てん",
  meaning: "Poin / Nilai",
  type: "counter",
  level: "N4"
},
{
  kanji: "服",
  kana: "ふく",
  meaning: "Pakaian",
  type: "noun",
  level: "N5"
},
{
  kanji: "自転車",
  kana: "じてんしゃ",
  meaning: "Sepeda",
  type: "noun",
  level: "N5"
},
{
  kanji: "自動車",
  kana: "じどうしゃ",
  meaning: "Mobil",
  type: "noun",
  level: "N4"
},
{
  kanji: "売ります",
  kana: "うります",
  meaning: "Menjual",
  type: "verb-godan",
  level: "N5"
},
{
  kanji: "貸します",
  kana: "かします",
  meaning: "Meminjamkan",
  type: "verb-godan",
  level: "N5"
},
{
  kanji: "返します",
  kana: "かえします",
  meaning: "Mengembalikan",
  type: "verb-godan",
  level: "N5"
},
{
  kanji: "変わります",
  kana: "かわります",
  meaning: "Berubah",
  type: "verb-godan",
  level: "N4"
},
{
  kanji: "～用",
  kana: "~よう",
  meaning: "Untuk (kegunaan)",
  type: "suffix",
  level: "N4"
},
{
  kanji: "子ども用",
  kana: "こどもよう",
  meaning: "Untuk anak-anak",
  type: "noun",
  level: "N4"
},
{
  kanji: "歌手",
  kana: "かしゅ",
  meaning: "Penyanyi",
  type: "noun",
  level: "N4"
},
{
  kanji: "選手",
  kana: "せんしゅ",
  meaning: "Atlet",
  type: "noun",
  level: "N4"
},
{
  kanji: "入学",
  kana: "にゅうがく",
  meaning: "Masuk sekolah",
  type: "noun",
  level: "N4"
},
{
  kanji: "卒業",
  kana: "そつぎょう",
  meaning: "Lulus",
  type: "noun",
  level: "N4"
},
{
  kanji: "病気",
  kana: "びょうき",
  meaning: "Sakit",
  type: "noun",
  level: "N5"
},
{
  kanji: "若い",
  kana: "わかい",
  meaning: "Muda",
  type: "adj-i",
  level: "N5"
},
{
  kanji: "生まれます",
  kana: "うまれます",
  meaning: "Lahir",
  type: "verb-ru",
  level: "N5"
},
{
  kanji: "生活",
  kana: "せいかつ",
  meaning: "Kehidupan",
  type: "noun",
  level: "N4"
},
{
  kanji: "映画",
  kana: "えいが",
  meaning: "Film",
  type: "noun",
  level: "N5"
},
{
  kanji: "夫",
  kana: "おっと",
  meaning: "Suami (sendiri)",
  type: "noun",
  level: "N4"
},
{
  kanji: "妻",
  kana: "つま",
  meaning: "Istri (sendiri)",
  type: "noun",
  level: "N4"
},
{
  kanji: "両親",
  kana: "りょうしん",
  meaning: "Kedua orang tua",
  type: "noun",
  level: "N4"
},
{
  kanji: "不便",
  kana: "ふべん",
  meaning: "Tidak praktis",
  type: "adj-na",
  level: "N4"
},
{
  kanji: "選びます",
  kana: "えらびます",
  meaning: "Memilih",
  type: "verb-godan",
  level: "N4"
},
{
  kanji: "寝ます",
  kana: "ねます",
  meaning: "Tidur",
  type: "verb-ru",
  level: "N5"
},
{
  kanji: "サッカー場",
  kana: "サッカーじょう",
  meaning: "Lapangan sepak bola",
  type: "noun",
  level: "N4"
},
{
  kanji: "試合",
  kana: "しあい",
  meaning: "Pertandingan",
  type: "noun",
  level: "N4"
},
{
  kanji: "日曜日",
  kana: "にちようび",
  meaning: "Hari Minggu",
  type: "noun",
  level: "N5"
},
{
  kanji: "強い",
  kana: "つよい",
  meaning: "Kuat",
  type: "adj-i",
  level: "N5"
},
{
  kanji: "弱い",
  kana: "よわい",
  meaning: "Lemah",
  type: "adj-i",
  level: "N5"
},
{
  kanji: "勝つ",
  kana: "かつ",
  meaning: "Menang",
  type: "verb-godan",
  level: "N4"
},
{
  kanji: "負ける",
  kana: "まける",
  meaning: "Kalah",
  type: "verb-ru",
  level: "N4"
},
{
  kanji: "～対～",
  kana: "~たい~",
  meaning: "Lawan (skor)",
  type: "expression",
  level: "N4"
},
{
  kanji: "庭",
  kana: "にわ",
  meaning: "Halaman",
  type: "noun",
  level: "N5"
}
{
  kanji: "公園",
  kana: "こうえん",
  meaning: "Taman",
  type: "noun",
  level: "N5"
},
{
  kanji: "病院",
  kana: "びょういん",
  meaning: "Rumah sakit",
  type: "noun",
  level: "N5"
},
{
  kanji: "交通",
  kana: "こうつう",
  meaning: "Transportasi / Lalu lintas",
  type: "noun",
  level: "N4"
},
{
  kanji: "安全",
  kana: "あんぜん",
  meaning: "Aman",
  type: "adj-na",
  level: "N4"
},
{
  kanji: "危ない",
  kana: "あぶない",
  meaning: "Berbahaya",
  type: "adj-i",
  level: "N5"
},
{
  kanji: "遠い",
  kana: "とおい",
  meaning: "Jauh",
  type: "adj-i",
  level: "N5"
},
{
  kanji: "勤める",
  kana: "つとめる",
  meaning: "Bekerja (di perusahaan)",
  type: "verb-ru",
  level: "N4"
},
{
  kanji: "海外",
  kana: "かいがい",
  meaning: "Luar negeri",
  type: "noun",
  level: "N4"
},
{
  kanji: "健康",
  kana: "けんこう",
  meaning: "Kesehatan",
  type: "noun",
  level: "N4"
},
{
  kanji: "米",
  kana: "こめ",
  meaning: "Beras",
  type: "noun",
  level: "N5"
},
{
  kanji: "朝食",
  kana: "ちょうしょく",
  meaning: "Sarapan",
  type: "noun",
  level: "N5"
},
{
  kanji: "昼食",
  kana: "ちゅうしょく",
  meaning: "Makan siang",
  type: "noun",
  level: "N5"
},
{
  kanji: "夕食",
  kana: "ゆうしょく",
  meaning: "Makan malam",
  type: "noun",
  level: "N5"
},
{
  kanji: "住所",
  kana: "じゅうしょ",
  meaning: "Alamat",
  type: "noun",
  level: "N4"
},
{
  kanji: "経験",
  kana: "けいけん",
  meaning: "Pengalaman",
  type: "noun",
  level: "N4"
},
{
  kanji: "最高",
  kana: "さいこう",
  meaning: "Terbaik",
  type: "adj-na",
  level: "N4"
},
{
  kanji: "出席",
  kana: "しゅっせき",
  meaning: "Hadir",
  type: "noun",
  level: "N4"
},
{
  kanji: "社会人",
  kana: "しゃかいじん",
  meaning: "Orang yang bekerja (dewasa pekerja)",
  type: "noun",
  level: "N4"
},
{
  kanji: "給料",
  kana: "きゅうりょう",
  meaning: "Gaji",
  type: "noun",
  level: "N4"
},
{
  kanji: "心",
  kana: "こころ",
  meaning: "Hati / Perasaan",
  type: "noun",
  level: "N4"
},
{
  kanji: "心配",
  kana: "しんぱい",
  meaning: "Khawatir",
  type: "noun",
  level: "N4"
},
{
  kanji: "飛行機",
  kana: "ひこうき",
  meaning: "Pesawat",
  type: "noun",
  level: "N5"
},
{
  kanji: "予定",
  kana: "よてい",
  meaning: "Rencana",
  type: "noun",
  level: "N4"
},
{
  kanji: "忘れ物",
  kana: "わすれもの",
  meaning: "Barang tertinggal",
  type: "noun",
  level: "N4"
},
{
  kanji: "助ける",
  kana: "たすける",
  meaning: "Menolong",
  type: "verb-ru",
  level: "N5"
}
{
  kanji: "会話",
  kana: "かいわ",
  meaning: "Percakapan",
  type: "noun",
  level: "N5"
},
{
  kanji: "形",
  kana: "かたち",
  meaning: "Bentuk",
  type: "noun",
  level: "N5"
},
{
  kanji: "漢字",
  kana: "かんじ",
  meaning: "Kanji",
  type: "noun",
  level: "N5"
},
{
  kanji: "答え",
  kana: "こたえ",
  meaning: "Jawaban",
  type: "noun",
  level: "N5"
},
{
  kanji: "質問",
  kana: "しつもん",
  meaning: "Pertanyaan",
  type: "noun",
  level: "N5"
},
{
  kanji: "正しい",
  kana: "ただしい",
  meaning: "Benar",
  type: "adj-i",
  level: "N5"
},
{
  kanji: "文",
  kana: "ぶん",
  meaning: "Kalimat",
  type: "noun",
  level: "N5"
},
{
  kanji: "文法",
  kana: "ぶんぽう",
  meaning: "Tata bahasa",
  type: "noun",
  level: "N5"
},
{
  kanji: "もう一度",
  kana: "もういちど",
  meaning: "Sekali lagi",
  type: "adverb",
  level: "N5"
},
{
  kanji: "例",
  kana: "れい",
  meaning: "Contoh",
  type: "noun",
  level: "N5"
},
{
  kanji: "練習",
  kana: "れんしゅう",
  meaning: "Latihan",
  type: "noun",
  level: "N5"
},
{
  kanji: "親切",
  kana: "しんせつ",
  meaning: "Baik hati",
  type: "adj-na",
  level: "N5"
},
{
  kanji: "座る",
  kana: "すわる",
  meaning: "Duduk",
  type: "verb-godan",
  level: "N5"
},
{
  kanji: "立つ",
  kana: "たつ",
  meaning: "Berdiri",
  type: "verb-godan",
  level: "N5"
}
{
  kanji: "約～",
  kana: "やく~",
  meaning: "Sekitar / Kira-kira",
  type: "prefix",
  level: "N4"
}
{
  kanji: "自信",
  kana: "じしん",
  meaning: "Percaya diri",
  type: "noun",
  level: "N4"
},
{
  kanji: "難しい",
  kana: "むずかしい",
  meaning: "Sulit",
  type: "adj-i",
  level: "N5"
},
{
  kanji: "習う",
  kana: "ならう",
  meaning: "Belajar (dari orang)",
  type: "verb-godan",
  level: "N5"
},
{
  kanji: "～級",
  kana: "~きゅう",
  meaning: "Tingkat / Level",
  type: "suffix",
  level: "N4"
},
{
  kanji: "初級",
  kana: "しょきゅう",
  meaning: "Level pemula",
  type: "noun",
  level: "N4"
},
{
  kanji: "中級",
  kana: "ちゅうきゅう",
  meaning: "Level menengah",
  type: "noun",
  level: "N4"
},
{
  kanji: "上級",
  kana: "じょうきゅう",
  meaning: "Level lanjutan",
  type: "noun",
  level: "N4"
},
{
  kanji: "気持ち",
  kana: "きもち",
  meaning: "Perasaan",
  type: "noun",
  level: "N5"
},
{
  kanji: "恋人",
  kana: "こいびと",
  meaning: "Pacar",
  type: "noun",
  level: "N4"
},
{
  kanji: "最近",
  kana: "さいきん",
  meaning: "Baru-baru ini",
  type: "adverb",
  level: "N4"
}
];
