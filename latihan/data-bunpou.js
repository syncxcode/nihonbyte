// ============================================================
// BANK SOAL BUNPOU — window.latihanBunpouReal
// ============================================================
// Struktur per soal:
//   question    : string  — kalimat soal (boleh pakai ___ untuk titik kosong)
//   options     : array   — 4 pilihan jawaban ["A", "B", "C", "D"]
//   answer      : number  — index jawaban benar (0 = A, 1 = B, 2 = C, 3 = D)
//   translation : string  — terjemahan / penjelasan soal
//
// Sesi per level:
//   bunpou-form        → Tata Bahasa Kalimat 1 (Memilih bentuk tata bahasa)
//   bunpou-composition → Tata Bahasa Kalimat 2 (Komposisi Kalimat)
//   bunpou-text        → Tata Bahasa Teks
//
// Jumlah soal minimum yang dibutuhkan per sesi (agar acak tetap optimal):
//   N5 : min 12 soal/sesi  (diambil 6)
//   N4 : min 16 soal/sesi  (diambil 8)
//   N3 : min 20 soal/sesi  (diambil 10)
//   N2 : min 24 soal/sesi  (diambil 12)
//   N1 : min 26 soal/sesi  (diambil 13)
// ============================================================
window.latihanBunpouReal = {
    "N5": {
        "bunpou-form": [{
                question: "わたし ______ 山田です。はじめまして。",
                options: ["は", "が", "を", "に"],
                answer: "は",
                translation: "Saya adalah Yamada. Salam kenal."
            }, {
                question: "つくえの うえ ______ 本が あります。",
                options: ["に", "を", "へ", "が"],
                answer: "に",
                translation: "Di atas meja ada buku."
            }, {
                question: "デパートへ かいもの ______ 行きます。",
                options: ["に", "を", "は", "が"],
                answer: "に",
                translation: "Pergi ke departemen store untuk berbelanja."
            }, {
                question: "きのう、どこ ______ 行きませんでした。",
                options: ["も", "へ", "に", "を"],
                answer: "も",
                translation: "Kemarin, tidak pergi ke mana pun."
            }, {
                question: "いっしょに コーヒーを ______ か。",
                options: ["のみましょう", "のみます", "のみました", "のんで"],
                answer: "のみましょう",
                translation: "Maukah minum kopi bersama?"
            }, {
                question: "ここは ______ 静かな 所ですね。",
                options: ["とても", "あまり", "ぜんぜん", "すこし"],
                answer: "とても",
                translation: "Sini adalah tempat yang sangat tenang ya."
            }, {
                question: "テレビを ______ ください。",
                options: ["消して", "消す", "消した", "消さない"],
                answer: "消して",
                translation: "Tolong matikan TV."
            }, {
                question: "田中さんは いま 電話を ______ います。",
                options: ["かけて", "かける", "かけた", "かけない"],
                answer: "かけて",
                translation: "Tanaka-san sekarang sedang menelepon."
            }, {
                question: "日本語は むずかしいですが、______ です。",
                options: ["おもしろい", "おもしろくない", "おもしろかった", "おもしろくて"],
                answer: "おもしろい",
                translation: "Bahasa Jepang sulit, tetapi menarik."
            }, {
                question: "あの レストランは ______ おいしいです。",
                options: ["安くて", "安いで", "安くに", "安く"],
                answer: "安くて",
                translation: "Restoran itu murah dan enak."
            }, {
                question: "この 公園は ______ きれいです。",
                options: ["広くて", "広いで", "広くに", "広く"],
                answer: "広くて",
                translation: "Taman ini luas dan bersih."
            }, {
                question: "わたしの 部屋は ______ ありません。",
                options: ["広く", "広くて", "広いで", "広い"],
                answer: "広く",
                translation: "Kamar saya tidak luas."
            }, {
                question: "きのうは 暑かったですが、きょうは ______ です。",
                options: ["涼しい", "涼しくない", "涼しかった", "涼しくて"],
                answer: "涼しい",
                translation: "Kemarin panas, tetapi hari ini sejuk."
            }, {
                question: "あの 店は ______ 有名です。",
                options: ["静かで", "静かて", "静かに", "静かな"],
                answer: "静かで",
                translation: "Toko itu tenang dan terkenal."
            }, {
                question: "パーティーは にぎやか ______ 。",
                options: ["でした", "かった", "でしたか", "ました"],
                answer: "でした",
                translation: "Pestanya (dulu) ramai."
            }, {
                question: "あした、いっしょに 映画を ______ 行きませんか。",
                options: ["見に", "見て", "見る", "見"],
                answer: "見に",
                translation: "Besok, maukah pergi menonton film bersama?"
            }, {
                question: "すみませんが、ゆっくり ______ ください。",
                options: ["話して", "話す", "話し", "話した"],
                answer: "話して",
                translation: "Maaf, tolong bicara dengan pelan."
            }, {
                question: "さとうを ______ 入れました。",
                options: ["たくさん", "あまり", "ぜんぜん", "ちょっと"],
                answer: "たくさん",
                translation: "Saya memasukkan banyak gula."
            }, {
                question: "教室に 学生が 5人 ______ 。",
                options: ["います", "あります", "なります", "します"],
                answer: "います",
                translation: "Di kelas ada 5 orang siswa."
            }, {
                question: "かばんの中に なに ______ ありますか。",
                options: ["が", "を", "に", "は"],
                answer: "が",
                translation: "Di dalam tas ada apa?"
            }, {
                question: "月曜日から 金曜日 ______ 働きます。",
                options: ["まで", "から", "に", "を"],
                answer: "まで",
                translation: "Bekerja dari hari Senin sampai Jumat."
            }, {
                question: "はし ______ 食べます。",
                options: ["で", "に", "を", "が"],
                answer: "で",
                translation: "Makan dengan sumpit."
            }, {
                question: "1週間に 1回 ______ 映画を見ます。",
                options: ["ぐらい", "ごろ", "しか", "まで"],
                answer: "ぐらい",
                translation: "Menonton film sekitar 1 kali dalam seminggu."
            }, {
                question: "テニス ______ 好きです。",
                options: ["が", "を", "に", "は"],
                answer: "が",
                translation: "Suka tenis."
            }, {
                question: "パン ______ 卵を 食べました。",
                options: ["と", "に", "を", "が"],
                answer: "と",
                translation: "Makan roti dan telur."
            }, {
                question: "この りんごは 5個 ______ 500円です。",
                options: ["で", "に", "を", "が"],
                answer: "で",
                translation: "Apel ini 5 buah seharga 500 yen."
            }, {
                question: "山田さんは どこ ______ いますか。",
                options: ["に", "を", "へ", "が"],
                answer: "に",
                translation: "Yamada-san ada di mana?"
            }, {
                question: "あした、日本 ______ 行きます。",
                options: ["へ", "を", "が", "で"],
                answer: "へ",
                translation: "Besok pergi ke Jepang."
            }, {
                question: "きょうは 10時 ______ 寝ます。",
                options: ["に", "を", "で", "が"],
                answer: "に",
                translation: "Hari ini tidur pada jam 10."
            }, {
                question: "バス ______ 会社へ 行きます。",
                options: ["で", "に", "を", "へ"],
                answer: "で",
                translation: "Pergi ke kantor dengan bus."
            }, {
                question: "これは 山田さん ______ かばんです。",
                options: ["の", "に", "を", "が"],
                answer: "の",
                translation: "Ini adalah tas milik Yamada-san."
            }, {
                question: "おなかが すきました。なにか ______ です。",
                options: ["食べたい", "食べる", "食べない", "食べた"],
                answer: "食べたい",
                translation: "Perut lapar. Ingin makan sesuatu."
            }, {
                question: "ちょっと まって ______ 。",
                options: ["ください", "ます", "ました", "する"],
                answer: "ください",
                translation: "Tolong tunggu sebentar."
            }, {
                question: "もう ごはんを ______ か。",
                options: ["食べました", "食べます", "食べる", "食べて"],
                answer: "食べました",
                translation: "Apakah sudah makan?"
            }, {
                question: "コーヒー ______ 紅茶、どちらが 好きですか。",
                options: ["と", "に", "を", "が"],
                answer: "と",
                translation: "Kopi dan teh, yang mana yang kamu suka?"
            }, {
                question: "きのうの テストは ______ ありませんでした。",
                options: ["むずかしく", "むずかしい", "むずかしくて", "むずかしいで"],
                answer: "むずかしく",
                translation: "Ujian kemarin tidak sulit."
            }, {
                question: "田中さんは ______ 先生です。",
                options: ["親切な", "親切に", "親切で", "親切だ"],
                answer: "親切な",
                translation: "Tanaka-san adalah guru yang ramah."
            }, {
                question: "ここは ______ 部屋ですね。",
                options: ["きれいな", "きれいに", "きれいで", "きれいだ"],
                answer: "きれいな",
                translation: "Ini kamar yang bersih/cantik ya."
            }, {
                question: "毎朝 散歩を ______ 。",
                options: ["します", "あります", "います", "なります"],
                answer: "します",
                translation: "Setiap pagi melakukan jalan-santai."
            }, {
                question: "きのうは 雨 ______ 。",
                options: ["でした", "かった", "ました", "あります"],
                answer: "でした",
                translation: "Kemarin (adalah) hujan."
            }, {
                question: "父は 銀行 ______ 働いています。",
                options: ["で", "に", "を", "へ"],
                answer: "で",
                translation: "Ayah bekerja di bank."
            }, {
                question: "あそこに ______ ありますか。",
                options: ["なにが", "だれが", "どこが", "いつが"],
                answer: "なにが",
                translation: "Di sana ada apa?"
            }, {
                question: "この 料理は あまり ______ 。",
                options: ["おいしくないです", "おいしいです", "おいしかったです", "おいしくて"],
                answer: "おいしくないです",
                translation: "Masakan ini tidak begitu enak."
            }, {
                question: "わたしの 趣味は ______ を きくことです。",
                options: ["おんがく", "おんがくに", "おんがくを", "おんがくが"],
                answer: "おんがく",
                translation: "Hobi saya adalah mendengarkan musik."
            }, {
                question: "田中さんは 日本語 ______ じょうずです。",
                options: ["が", "を", "に", "へ"],
                answer: "が",
                translation: "Tanaka-san pandai bahasa Jepang."
            }, {
                question: "駅まで 10分 ______ 行けます。",
                options: ["で", "に", "を", "が"],
                answer: "で",
                translation: "Bisa pergi (sampai) ke stasiun dalam waktu 10 menit."
            }, {
                question: "かばんは 机の ______ に あります。",
                options: ["した", "うえに", "なかに", "よこに"],
                answer: "した",
                translation: "Tas ada di bawah meja."
            }, {
                question: "この 辞書は ______ ですか。",
                options: ["だれの", "だれを", "だれが", "だれに"],
                answer: "だれの",
                translation: "Kamus ini milik siapa?"
            }, {
                question: "あしたは ______ です。休みです。",
                options: ["日曜日", "月曜日", "火曜日", "水曜日"],
                answer: "日曜日",
                translation: "Besok adalah hari Minggu. Libur."
            }, {
                question: "パーティーに だれ ______ 来ませんでした。",
                options: ["も", "に", "を", "が"],
                answer: "も",
                translation: "Tidak ada siapa pun yang datang ke pesta."
            }, {
                question: "きのう、公園へ 行きました。 ______ とても 楽しかったです。",
                options: ["そして", "しかし", "でも", "だから"],
                answer: "そして",
                translation: "Kemarin saya pergi ke taman. Kemudian, sangat menyenangkan."
            }, {
                question: "部屋は ______ ありません。",
                options: ["きれいでは", "きれいに", "きれいで", "きれいな"],
                answer: "きれいでは",
                translation: "Kamarnya tidak bersih."
            }, {
                question: "田中さんは ______ 背が 高いです。",
                options: ["若くて", "若いで", "若くに", "若く"],
                answer: "若くて",
                translation: "Tanaka-san muda dan tinggi badannya."
            }, {
                question: "この カレーは ______ からいです。",
                options: ["あかくて", "あかいで", "あかくに", "あかく"],
                answer: "あかくて",
                translation: "Kari ini merah dan pedas."
            }, {
                question: "あした、いっしょに 散歩 ______ しませんか。",
                options: ["を", "に", "が", "は"],
                answer: "を",
                translation: "Besok, maukah jalan-santai bersama?"
            }, {
                question: "おなかが いたいですから、なにも ______ です。",
                options: ["食べたくない", "食べたい", "食べる", "食べた"],
                answer: "食べたくない",
                translation: "Karena perut sakit, tidak ingin makan apa pun."
            }, {
                question: "すみませんが、まどを ______ ください。",
                options: ["開けて", "開ける", "開けた", "開けない"],
                answer: "開けて",
                translation: "Maaf, tolong buka jendelanya."
            }, {
                question: "テレビを ______ から、寝ます。",
                options: ["消して", "消す", "消した", "消さない"],
                answer: "消して",
                translation: "Setelah mematikan TV, saya akan tidur."
            }, {
                question: "日本語の 本を 3さつ ______ 。",
                options: ["持っています", "ありますあります", "います", "します"],
                answer: "持っています",
                translation: "Saya punya 3 buah buku bahasa Jepang."
            }, {
                question: "山田さんは テニス ______ 上手です。",
                options: ["が", "を", "に", "へ"],
                answer: "が",
                translation: "Yamada-san pandai bermain tenis."
            }, {
                question: "田中さんは どこ ______ 来ましたか。",
                options: ["から", "まで", "に", "を"],
                answer: "から",
                translation: "Tanaka-san datang dari mana?"
            }, {
                question: "学校 ______ 10時まで 勉強しました。",
                options: ["で", "に", "を", "が"],
                answer: "で",
                translation: "Belajar di sekolah sampai jam 10."
            }, {
                question: "この くだものは 3つ ______ 600円です。",
                options: ["で", "に", "を", "が"],
                answer: "で",
                translation: "Buah ini 3 buah seharga 600 yen."
            }, {
                question: "あそこに ______ いますか。田中さんです。",
                options: ["だれが", "なにが", "どこが", "いつが"],
                answer: "だれが",
                translation: "Di sana ada siapa? Itu Tanaka-san."
            }, {
                question: "きょうは ______ 天気ですね。",
                options: ["いい", "よくて", "よく", "よい"],
                answer: "いい",
                translation: "Hari ini cuaca yang bagus ya."
            }, {
                question: "あの 店は 安くて ______ です。",
                options: ["便利", "便利に", "便利だ", "便利な"],
                answer: "便利",
                translation: "Toko itu murah dan praktis."
            }, {
                question: "この 料理は あまり ______ ありません。",
                options: ["おいしく", "おいしい", "おいしくて", "おいしいで"],
                answer: "おいしく",
                translation: "Masakan ini tidak begitu enak."
            }, {
                question: "わたしは スポーツ ______ 好きです。",
                options: ["が", "を", "に", "へ"],
                answer: "が",
                translation: "Saya suka olahraga."
            }, {
                question: "きのうは 仕事 ______ ありませんでした。",
                options: ["が", "を", "に", "へ"],
                answer: "が",
                translation: "Kemarin tidak ada pekerjaan."
            }, {
                question: "田中さんは ______ 歌を うたいます。",
                options: ["上手に", "上手な", "上手だ", "上手で"],
                answer: "上手に",
                translation: "Tanaka-san menyanyi dengan pandai."
            }, {
                question: "部屋を ______ してください。",
                options: ["きれいに", "きれいな", "きれいで", "きれいだ"],
                answer: "きれいに",
                translation: "Tolong buat kamarnya menjadi bersih."
            }, {
                question: "この りんごは ______ おいしいです。",
                options: ["甘くて", "甘いで", "甘くに", "甘く"],
                answer: "甘くて",
                translation: "Apel ini manis dan enak."
            }, {
                question: "あした、日本へ 行く ______ 。",
                options: ["つもりです", "ことになります", "たいです", "ます"],
                answer: "つもりです",
                translation: "Besok saya berencana pergi ke Jepang."
            }, {
                question: "ここで 写真を ______ ください。",
                options: ["撮らないで", "撮る", "撮った", "撮らない"],
                answer: "撮らないで",
                translation: "Tolong jangan ambil foto di sini."
            }, {
                question: "田中さんは まだ ______ いません。",
                options: ["来て", "来る", "来た", "来ない"],
                answer: "来て",
                translation: "Tanaka-san masih belum datang."
            }, {
                question: "テレビを ______ ながら、ごはんを 食べます。",
                options: ["見", "見て", "見る", "見ない"],
                answer: "見",
                translation: "Makan nasi sambil menonton TV."
            }, {
                question: "この ケーキは ______ です。",
                options: ["おいしそう", "おいしいそう", "おいしくてそう", "おいしくそう"],
                answer: "おいしそう",
                translation: "Kue ini kelihatannya enak."
            }, {
                question: "田中さんは 日本語が ______ なりました。",
                options: ["上手に", "上手な", "上手で", "上手だ"],
                answer: "上手に",
                translation: "Tanaka-san telah menjadi mahir bahasa Jepang."
            }, {
                question: "あした、雨が ______ でしょう。",
                options: ["ふる", "ふって", "ふった", "ふります"],
                answer: "ふる",
                translation: "Besok mungkin akan turun hujan."
            }, {
                question: "すみませんが、もういちど ______ ください。",
                options: ["言って", "言う", "言った", "言わない"],
                answer: "言って",
                translation: "Maaf, tolong katakan sekali lagi."
            }, {
                question: "わたしは 毎日 コーヒーを ______ ことに しています。",
                options: ["飲む", "飲んで", "飲んだ", "飲みます"],
                answer: "飲む",
                translation: "Saya memutuskan untuk minum kopi setiap hari."
            }, {
                question: "きのう、どこへ ______ 行きませんでした。",
                options: ["も", "に", "を", "が"],
                answer: "も",
                translation: "Kemarin saya tidak pergi ke mana pun."
            }, {
                question: "田中さんに ______ 会いましたか。いいえ、会いませんでした。",
                options: ["だれか", "だれに", "だれも", "だれが"],
                answer: "だれか",
                translation: "Apakah bertemu seseorang? Tidak, tidak bertemu."
            }, {
                question: "田中さんは いま 教室 ______ います。",
                options: ["に", "を", "へ", "で"],
                answer: "に",
                translation: "Tanaka-san sekarang ada di kelas."
            }, {
                question: "つくえの 上に 本 ______ ノートが あります。",
                options: ["や", "に", "を", "が"],
                answer: "や",
                translation: "Di atas meja ada buku, catatan, dll."
            }, {
                question: "きのう、デパートで 靴 ______ 買いました。",
                options: ["を", "に", "が", "は"],
                answer: "を",
                translation: "Kemarin membeli sepatu di departemen store."
            }, {
                question: "田中さんは 背 ______ 高いです。",
                options: ["が", "を", "に", "は"],
                answer: "が",
                translation: "Tanaka-san (badannya) tinggi."
            }, {
                question: "学校は 8時 ______ 始まります。",
                options: ["に", "を", "で", "が"],
                answer: "に",
                translation: "Sekolah dimulai pada jam 8."
            }, {
                question: "田中さんは バス ______ 来ました。",
                options: ["で", "に", "を", "へ"],
                answer: "で",
                translation: "Tanaka-san datang dengan bus."
            }, {
                question: "あした、いっしょに 映画を 見 ______ 行きませんか。",
                options: ["に", "を", "へ", "で"],
                answer: "に",
                translation: "Besok, maukah pergi untuk menonton film bersama?"
            }, {
                question: "山田さんは どこ ______ 住んでいますか。",
                options: ["に", "を", "へ", "で"],
                answer: "に",
                translation: "Yamada-san tinggal di mana?"
            }, {
                question: "田中さんは テニス ______ 上手ではありません。",
                options: ["が", "を", "に", "は"],
                answer: "が",
                translation: "Tanaka-san tidak pandai bermain tenis."
            }, {
                question: "つくえの 下に 猫 ______ います。",
                options: ["が", "を", "に", "は"],
                answer: "が",
                translation: "Di bawah meja ada kucing."
            }, {
                question: "田中さんは 毎日 6時 ______ 起きます。",
                options: ["に", "を", "で", "が"],
                answer: "に",
                translation: "Tanaka-san setiap hari bangun jam 6."
            }, {
                question: "田中さんは ______ 歌を うたいますか。いいえ、うたいません。",
                options: ["よく", "あまり", "ぜんぜん", "すこし"],
                answer: "よく",
                translation: "Apakah Tanaka-san sering menyanyi? Tidak, tidak sering."
            }, {
                question: "きのう、だれ ______ 会いましたか。",
                options: ["に", "を", "が", "は"],
                answer: "に",
                translation: "Kemarin bertemu dengan siapa?"
            }, {
                question: "田中さんは 日本語 ______ 勉強しています。",
                options: ["を", "に", "が", "は"],
                answer: "を",
                translation: "Tanaka-san sedang belajar bahasa Jepang."
            }, {
                question: "あした、どこ ______ 行きますか。",
                options: ["へ", "を", "が", "に"],
                answer: "へ",
                translation: "Besok mau pergi ke mana?"
            }, {
                question: "田中さんは ______ 先生ですね。",
                options: ["いい", "よくて", "よく", "よい"],
                answer: "いい",
                translation: "Tanaka-san guru yang baik ya."
            }, {
                question: "あした、パーティー ______ あります。",
                options: ["が", "を", "に", "は"],
                answer: "が",
                translation: "Besok ada pesta."
            }
        ],
        "bunpou-composition": [{
                question: "私は ______ ______ __★__ ______ 勉強して います。",
                options: ["を", "毎日", "日本語", "3時間"],
                answer: "3時間",
                correctOrder: [2, 3, 4, 1], // 毎日 日本語 3時間 を
                translation: "Saya belajar bahasa Jepang selama 3 jam setiap hari."
            }, {
                question: "あそこに ______ ______ __★__ ______ あります。",
                options: ["が", "大きな", "一つ", "箱"],
                answer: "が",
                correctOrder: [2, 4, 1, 3], // 大きな 箱 が 一つ
                translation: "Di sana ada sebuah kotak besar."
            }, {
                question: "きのう ______ ______ __★__ ______ 行きました。",
                options: ["へ", "友だち", "映画を", "と"],
                answer: "映画を",
                correctOrder: [2, 4, 3, 1], // 友だち と 映画を へ
                translation: "Kemarin saya pergi menonton film bersama teman."
            }, {
                question: "テーブルの ______ ______ __★__ ______ あります。",
                options: ["に", "が", "本", "上"],
                answer: "本",
                correctOrder: [4, 1, 3, 2], // 上 に 本 が
                translation: "Di atas meja ada buku."
            }, {
                question: "この りんごは ______ ______ __★__ ______ 安いです。",
                options: ["で", "5個", "500円", "とても"],
                answer: "とても",
                correctOrder: [2, 1, 3, 4], // 5個 で 500円 とても
                translation: "Apel ini 5 buah seharga 500 yen, sangat murah."
            }, {
                question: "田中さんは ______ ______ __★__ ______ 来ました。",
                options: ["で", "会社", "バス", "から"],
                answer: "バス",
                correctOrder: [2, 4, 3, 1], // 会社 から バス で
                translation: "Tanaka-san datang dari kantor menggunakan bus."
            }, {
                question: "いっしょに ______ ______ __★__ ______ 行きませんか。",
                options: ["に", "見", "映画", "を"],
                answer: "見",
                correctOrder: [3, 4, 2, 1], // 映画 を 見 に
                translation: "Maukah pergi untuk melihat film bersama?"
            }, {
                question: "あの ______ ______ __★__ ______ 先生です。",
                options: ["人は", "高い", "とても", "親切な"],
                answer: "とても",
                correctOrder: [2, 1, 3, 4], // 高い 人は とても 親切な
                translation: "Orang yang tinggi itu sangat ramah."
            }, {
                question: "すみませんが ______ ______ __★__ ______ ください。",
                options: ["を", "開けて", "まど", "少し"],
                answer: "まど",
                correctOrder: [4, 3, 1, 2], // 少し まど を 開けて
                translation: "Maaf, tolong buka sedikit jendelanya."
            }, {
                question: "私は ______ ______ __★__ ______ います。",
                options: ["に", "住んで", "京都", "いま"],
                answer: "に",
                correctOrder: [4, 3, 1, 2], // いま 京都 に 住んで
                translation: "Saya sekarang tinggal di Kyoto."
            }, {
                question: "きのう ______ ______ __★__ ______ 寝ました。",
                options: ["まで", "仕事で", "11時", "夜"],
                answer: "11時",
                correctOrder: [4, 2, 3, 1], // 夜 仕事で 11時 まで
                translation: "Kemarin karena pekerjaan saya tidur sampai jam 11 malam."
            }, {
                question: "つくえの ______ ______ __★__ ______ あります。",
                options: ["と", "本", "ノート", "上に"],
                answer: "本",
                correctOrder: [4, 2, 1, 3], // 上に 本 と ノート
                translation: "Di atas meja ada buku dan catatan."
            }, {
                question: "田中さんは ______ ______ __★__ ______ 話します。",
                options: ["を", "ゆっくり", "日本語", "とても"],
                answer: "日本語",
                correctOrder: [4, 2, 3, 1], // とても ゆっくり 日本語 を
                translation: "Tanaka-san berbicara bahasa Jepang dengan sangat pelan."
            }, {
                question: "この ______ ______ __★__ ______ おいしいです。",
                options: ["は", "料理", "安くて", "とても"],
                answer: "とても",
                correctOrder: [3, 2, 1, 4], // 安くて 料理 は とても
                translation: "Masakan ini murah dan sangat enak."
            }, {
                question: "あした ______ ______ __★__ ______ 行きます。",
                options: ["へ", "病院", "母", "と"],
                answer: "母",
                correctOrder: [3, 4, 2, 1], // 母 と 病院 へ
                translation: "Besok saya pergi ke rumah sakit bersama ibu."
            }, {
                question: "公園 ______ ______ __★__ ______ あります。",
                options: ["が", "木", "たくさん", "には"],
                answer: "木",
                correctOrder: [4, 3, 2, 1], // には たくさん 木 が
                translation: "Di taman ada banyak pohon."
            }, {
                question: "田中さんは ______ ______ __★__ ______ います。",
                options: ["を", "いま", "読んで", "本"],
                answer: "読んで",
                correctOrder: [2, 4, 1, 3], // いま 本 を 読んで
                translation: "Tanaka-san sekarang sedang membaca buku."
            }, {
                question: "パーティー ______ ______ __★__ ______ ですか。",
                options: ["に", "人は", "何人", "来ましたか"],
                answer: "何人",
                correctOrder: [1, 2, 3, 4], // に 人は 何人 来ましたか
                translation: "Ada berapa orang yang datang ke pesta?"
            }, {
                question: "私の ______ ______ __★__ ______ です。",
                options: ["こと", "歌を", "趣味は", "うたう"],
                answer: "うたう",
                correctOrder: [3, 2, 4, 1], // 趣味は 歌を うたう こと
                translation: "Hobi saya adalah bernyanyi lagu."
            }, {
                question: "部屋 ______ ______ __★__ ______ ください。",
                options: ["には", "まだ", "入らないで", "だれも"],
                answer: "入らないで",
                correctOrder: [1, 2, 4, 3], // には まだ だれも 入らないで
                translation: "Ke dalam ruangan, masih jangan ada siapa pun yang masuk."
            }, {
                question: "昨日 ______ ______ __★__ ______ 飲みました。",
                options: ["を", "家で", "コーヒー", "ひとりで"],
                answer: "コーヒー",
                correctOrder: [2, 4, 3, 1], // 家で ひとりで コーヒー を
                translation: "Kemarin saya minum kopi sendirian di rumah."
            }, {
                question: "その ______ ______ __★__ ______ ですか。",
                options: ["は", "だれの", "かばん", "赤い"],
                answer: "は",
                correctOrder: [4, 3, 1, 2], // 赤い かばん は だれの
                translation: "Tas merah itu milik siapa?"
            }, {
                question: "田中さんは ______ ______ __★__ ______ 来ませんでした。",
                options: ["に", "パーティー", "昨日の", "も"],
                answer: "パーティー",
                correctOrder: [3, 2, 1, 4], // 昨日の パーティー に も
                translation: "Tanaka-san juga tidak datang ke pesta kemarin."
            }, {
                question: "私は ______ ______ __★__ ______ あります。",
                options: ["青い", "が", "車", "一台"],
                answer: "が",
                correctOrder: [1, 3, 2, 4], // 青い 車 が 一台
                translation: "Saya punya sebuah mobil biru."
            }, {
                question: "毎日 ______ ______ __★__ ______ します。",
                options: ["を", "日本語", "30分", "勉強"],
                answer: "30分",
                correctOrder: [2, 1, 3, 4], // 日本語 を 30分 勉強
                translation: "Setiap hari saya belajar bahasa Jepang selama 30 menit."
            }, {
                question: "そこ ______ ______ __★__ ______ 曲がって ください。",
                options: ["に", "右", "を", "角"],
                answer: "を",
                correctOrder: [4, 3, 2, 1], // 角 を 右 に
                translation: "Tolong belok ke kanan di pojokan itu."
            }, {
                question: "銀行 ______ ______ __★__ ______ あります。",
                options: ["に", "となり", "郵便局が", "の"],
                answer: "郵便局が",
                correctOrder: [4, 2, 1, 3], // の となり に 郵便局が
                translation: "Di sebelah bank ada kantor pos."
            }, {
                question: "田中さんは ______ ______ __★__ ______ います。",
                options: ["を", "いま", "洗って", "顔"],
                answer: "洗って",
                correctOrder: [2, 4, 1, 3], // いま 顔 を 洗って
                translation: "Tanaka-san sekarang sedang mencuci muka."
            }, {
                question: "コーヒー ______ ______ __★__ ______ ください。",
                options: ["に", "を", "入れないで", "砂糖"],
                answer: "入れないで",
                correctOrder: [4, 2, 1, 3], // 砂糖 を に 入れなで
                translation: "Tolong jangan masukkan gula ke dalam kopi."
            }, {
                question: "今日は ______ ______ __★__ ______ ですね。",
                options: ["とても", "いい", "天気", "ですね"],
                answer: "天気",
                correctOrder: [1, 2, 3, 4], // とても いい 天気 ですね
                translation: "Hari ini cuacanya sangat bagus ya."
            }, {
                question: "学校 ______ ______ __★__ ______ ありません。",
                options: ["は", "今日は", "授業", "が"],
                answer: "授業",
                correctOrder: [2, 1, 3, 4], // 今日は は 授業 が
                translation: "Hari ini di sekolah tidak ada pelajaran."
            }, {
                question: "私は ______ ______ __★__ ______ 行きたいです。",
                options: ["へ", "来年", "日本", "ぜひ"],
                answer: "日本",
                correctOrder: [2, 4, 3, 1], // 来年 ぜひ 日本 へ
                translation: "Tahun depan saya sangat ingin pergi ke Jepang."
            }, {
                question: "この ______ ______ __★__ ______ ください。",
                options: ["を", "名前", "ここに", "書いて"],
                answer: "名前",
                correctOrder: [3, 2, 1, 4], // ここに 名前 を 書いて
                translation: "Tolong tuliskan nama di sini."
            }, {
                question: "田中さんは ______ ______ __★__ ______ います。",
                options: ["を", "待って", "友だち", "駅で"],
                answer: "待って",
                correctOrder: [4, 3, 1, 2], // 駅で 友だち を 待って
                translation: "Tanaka-san sedang menunggu teman di stasiun."
            }, {
                question: "昨日は ______ ______ __★__ ______ ありませんでした。",
                options: ["あまり", "天気は", "よく", "なかったです"],
                answer: "よく",
                correctOrder: [2, 1, 3, 4], // 天気は あまり よく なかったです
                translation: "Cuaca kemarin tidak begitu bagus."
            }, {
                question: "この ______ ______ __★__ ______ ありません。",
                options: ["は", "部屋", "きれいでは", "あまり"],
                answer: "きれいでは",
                correctOrder: [2, 1, 4, 3], // 部屋 は あまり きれいでは
                translation: "Kamar ini tidak begitu bersih."
            }, {
                question: "1週間に ______ ______ __★__ ______ します。",
                options: ["買い物", "2回", "を", "スーパーで"],
                answer: "2回",
                correctOrder: [4, 2, 1, 3], // スーパーで 2回 買い物 を
                translation: "Berbelanja di supermarket 2 kali dalam seminggu."
            }, {
                question: "私は ______ ______ __★__ ______ 好きです。",
                options: ["が", "料理を", "作る", "こと"],
                answer: "こと",
                correctOrder: [2, 3, 4, 1], // 料理を 作る こと が
                translation: "Saya suka membuat masakan."
            }, {
                question: "窓 ______ ______ __★__ ______ ください。",
                options: ["を", "閉めて", "寒いから", "少し"],
                answer: "少し",
                correctOrder: [3, 4, 1, 2], // 寒いから 少し を 閉めて
                translation: "Karena dingin, tolong tutup jendelanya sedikit."
            }, {
                question: "駅まで ______ ______ __★__ ______ 行けますか。",
                options: ["何分", "歩いて", "ぐらいで", "行けますか"],
                answer: "ぐらいで",
                correctOrder: [2, 1, 3, 4], // 歩いて 何分 ぐらいで 行けますか
                translation: "Berapa menit bisa sampai ke stasiun dengan berjalan kaki?"
            }, {
                question: "田中さんの ______ ______ __★__ ______ ですか。",
                options: ["は", "どちら", "国", "ですか"],
                answer: "国",
                correctOrder: [3, 1, 2, 4], // 国 は どちら ですか
                translation: "Negara (asal) Tanaka-san di sebelah mana?"
            }, {
                question: "この 辞書 ______ ______ __★__ ______ ですか。",
                options: ["は", "だれの", "もの", "使いやすい"],
                answer: "もの",
                correctOrder: [4, 1, 2, 3], // 使いやすい は だれの もの
                translation: "(Kamus) yang mudah digunakan ini milik siapa?"
            }, {
                question: "毎日 ______ ______ __★__ ______ 飲みます。",
                options: ["を", "寝る", "水", "前に"],
                answer: "水",
                correctOrder: [2, 4, 3, 1], // 寝る 前に 水 を
                translation: "Setiap hari minum air sebelum tidur."
            }, {
                question: "その ______ ______ __★__ ______ です。",
                options: ["は", "とても", "有名", "古い寺"],
                answer: "有名",
                correctOrder: [4, 1, 2, 3], // 古い寺 は とても 有名
                translation: "Kuil tua itu sangat terkenal."
            }, {
                question: "明日 ______ ______ __★__ ______ か。",
                options: ["は", "何時", "学校", "からですか"],
                answer: "何時",
                correctOrder: [3, 1, 2, 4], // 学校 は 何時 からですか
                translation: "Besok sekolah mulai dari jam berapa?"
            }, {
                question: "山田さんは ______ ______ __★__ ______ います。",
                options: ["を", "脱いで", "玄関で", "靴"],
                answer: "靴",
                correctOrder: [3, 4, 1, 2], // 玄関で 靴 を 脱いで
                translation: "Yamada-san melepas sepatu di pintu masuk (genkan)."
            }, {
                question: "冷蔵庫 ______ ______ __★__ ______ あります。",
                options: ["が", "果物", "の中に", "たくさん"],
                answer: "果物",
                correctOrder: [3, 4, 2, 1], // の中に たくさん 果物 が
                translation: "Di dalam kulkas ada banyak buah-buahan."
            }, {
                question: "田中さんは ______ ______ __★__ ______ ですね。",
                options: ["は", "料理", "作るのが", "上手"],
                answer: "上手",
                correctOrder: [2, 1, 3, 4], // 料理 は 作るのが 上手
                translation: "Tanaka-san pandai membuat masakan ya."
            }, {
                question: "昨日 ______ ______ __★__ ______ です。",
                options: ["悪い", "天気で", "あまり", "なかったです"],
                answer: "あまり",
                correctOrder: [2, 3, 1, 4], // 天気で あまり 悪い なかったです
                translation: "Kemarin cuacanya tidak begitu bagus."
            }, {
                question: "この 部屋 ______ ______ __★__ ______ ください。",
                options: ["に", "ノックして", "前に", "入る"],
                answer: "前に",
                correctOrder: [4, 3, 1, 2], // 入る 前に に ノックして
                translation: "Tolong ketuk pintu sebelum masuk ke kamar ini."
            }, {
                question: "あした ______ ______ __★__ ______ 買います。",
                options: ["切手を", "郵便局で", "5枚", "はがきと"],
                answer: "切手を",
                correctOrder: [2, 4, 1, 3], // 郵便局で はがきと 切手を 5枚
                translation: "Besok saya akan membeli prangko 5 lembar dan kartu pos di kantor pos."
            }, {
                question: "昨日は ______ ______ __★__ ______ 寝ました。",
                options: ["遅くまで", "あったので", "寝ました", "仕事が"],
                answer: "遅くまで",
                correctOrder: [4, 2, 1, 3], // 仕事が あったので 遅くまで
                translation: "Kemarin karena ada pekerjaan, saya tidur sampai larut."
            }, {
                question: "私の ______ ______ __★__ ______ 5人です。",
                options: ["は", "全部で", "家族", "兄弟を 入れて"],
                answer: "全部で",
                correctOrder: [3, 1, 4, 2], // 家族 は 兄弟を 入れて 全部で
                translation: "Keluarga saya semuanya ada 5 orang termasuk saudara."
            }, {
                question: "田中さんは ______ ______ __★__ ______ 飲みません。",
                options: ["お酒を", "あまり", "好きでは ないので", "飲みません"],
                answer: "あまり",
                correctOrder: [3, 1, 2, 4], // 好きでは ないので お酒を あまり
                translation: "Karena tidak suka, saya tidak begitu banyak minum minuman keras."
            }, {
                question: "この パソコン ______ ______ __★__ ______ 使います。",
                options: ["を", "仕事に", "毎日", "家で"],
                answer: "毎日",
                correctOrder: [4, 3, 1, 2], // 家で 毎日 を 仕事に
                translation: "Saya menggunakan laptop ini setiap hari di rumah untuk pekerjaan."
            }, {
                question: "あそこに ______ ______ __★__ ______ います。",
                options: ["猫が", "白い", "一匹", "テーブルの下に"],
                answer: "一匹",
                correctOrder: [4, 2, 1, 3], // テーブルの下に 白い 猫が 一匹
                translation: "Di bawah meja ada seekor kucing putih."
            }, {
                question: "図書館で ______ ______ __★__ ______ 読みました。",
                options: ["2時間", "雑誌を", "ぐらい", "日本語の"],
                answer: "2時間",
                correctOrder: [4, 2, 1, 3], // 日本語の 雑誌を 2時間 ぐらい
                translation: "Saya membaca majalah bahasa Jepang sekitar 2 jam di perpustakaan."
            }, {
                question: "おなかが ______ ______ __★__ ______ 食べたいです。",
                options: ["何か", "すいたので", "温かい", "ものを"],
                answer: "温かい",
                correctOrder: [2, 1, 3, 4], // すいたので 何か 温かい ものを
                translation: "Karena lapar, saya ingin makan sesuatu yang hangat."
            }, {
                question: "朝 ______ ______ __★__ ______ 飲みます。",
                options: ["コーヒー", "パンを", "食べてから", "を"],
                answer: "を",
                correctOrder: [2, 3, 1, 4], // パンを 食べてから コーヒー を
                translation: "Pagi hari, setelah makan roti saya minum kopi."
            }, {
                question: "山田さんは ______ ______ __★__ ______ います。",
                options: ["に", "いま", "住んで", "東京"],
                answer: "東京",
                correctOrder: [2, 4, 1, 3], // いま 東京 に 住んで
                translation: "Yamada-san sekarang tinggal di Tokyo."
            }, {
                question: "この ______ ______ __★__ ______ 高いですね。",
                options: ["は", "レストラン", "とても", "料理が"],
                answer: "とても",
                correctOrder: [2, 1, 4, 3], // レストラン は 料理が とても
                translation: "Masakan di restoran ini sangat mahal ya."
            }, {
                question: "あした ______ ______ __★__ ______ 出かけます。",
                options: ["と", "映画館へ", "友だち", "いっしょに"],
                answer: "映画館へ",
                correctOrder: [3, 1, 4, 2], // 友だち と いっしょに 映画館へ
                translation: "Besok saya akan pergi ke bioskop bersama teman."
            }, {
                question: "教室で ______ ______ __★__ ______ ください。",
                options: ["で", "大きな", "話さないで", "声"],
                answer: "大きな",
                correctOrder: [2, 4, 1, 3], // 大きな 声 で 話さないで
                translation: "Tolong jangan bicara dengan suara keras di dalam kelas."
            }, {
                question: "昨日 ______ ______ __★__ ______ 買いませんでした。",
                options: ["デパートへ", "行きましたが", "何も", "買いませんでした"],
                answer: "何も",
                correctOrder: [1, 2, 3, 4], // デパートへ 行きましたが 何も 買いませんでした
                translation: "Kemarin saya pergi ke departemen store tapi tidak membeli apa pun."
            }, {
                question: "田中さんは ______ ______ __★__ ______ います。",
                options: ["を", "いま", "待って", "タクシー"],
                answer: "タクシー",
                correctOrder: [2, 4, 1, 3], // いま タクシー を 待って
                translation: "Tanaka-san sekarang sedang menunggu taksi."
            }, {
                question: "この ______ ______ __★__ ______ 便利です。",
                options: ["は", "辞書", "引くのに", "とても"],
                answer: "とても",
                correctOrder: [2, 1, 3, 4], // 辞書 は 引くのに とても
                translation: "Kamus ini sangat praktis untuk mencari (kata)."
            }, {
                question: "朝 ______ ______ __★__ ______ 読みます。",
                options: ["を", "新聞", "顔を", "洗ってから"],
                answer: "新聞",
                correctOrder: [3, 4, 2, 1], // 顔を 洗ってから 新聞 を
                translation: "Pagi hari, setelah mencuci muka saya membaca koran."
            }, {
                question: "公園に ______ ______ __★__ ______ います。",
                options: ["が", "子ども", "たくさん", "遊んで"],
                answer: "たくさん",
                correctOrder: [2, 1, 3, 4], // 子ども が たくさん 遊んで
                translation: "Di taman ada banyak anak-anak yang sedang bermain."
            }, {
                question: "昨日の ______ ______ __★__ ______ 難しかったです。",
                options: ["は", "漢字の", "テスト", "とても"],
                answer: "テスト",
                correctOrder: [2, 3, 1, 4], // 漢字の テスト は とても
                translation: "Ujian kanji kemarin sangat sulit."
            }, {
                question: "田中さんの ______ ______ __★__ ______ ですか。",
                options: ["は", "どんな", "人", "先生"],
                answer: "人",
                correctOrder: [4, 1, 2, 3], // 先生 は どんな 人
                translation: "Guru Tanaka itu orang yang seperti apa?"
            }, {
                question: "お風呂に ______ ______ __★__ ______ 寝ます。",
                options: ["から", "入って", "ゆっくり", "いつも"],
                answer: "入って",
                correctOrder: [4, 3, 2, 1], // いつも ゆっくり 入って から
                translation: "Setelah selalu mandi dengan santai, saya tidur."
            }, {
                question: "学校 ______ ______ __★__ ______ 歩きます。",
                options: ["から", "まで", "20分", "歩きます"],
                answer: "20分",
                correctOrder: [1, 2, 3, 4], // から まで 20分 歩きます (Target: "Jalan 20 menit dari...ke...")
                translation: "Setiap hari saya berjalan kaki selama 20 menit dari sekolah ke rumah."
            }, {
                question: "この ______ ______ __★__ ______ 美味しいです。",
                options: ["は", "料理", "辛いですが", "とても"],
                answer: "とても",
                correctOrder: [3, 2, 1, 4], // 辛いですが 料理 は とても
                translation: "Masakan ini pedas tapi sangat enak."
            }, {
                question: "山田さんは ______ ______ __★__ ______ 話せます。",
                options: ["が", "少し", "英語", "上手で"],
                answer: "英語",
                correctOrder: [4, 3, 1, 2], // 上手で 英語 が 少し
                translation: "Yamada-san pandai dan bisa (bicara) bahasa Inggris sedikit."
            }, {
                question: "明日は ______ ______ __★__ ______ 出かけましょう。",
                options: ["天気", "いい", "から", "散歩に"],
                answer: "から",
                correctOrder: [2, 1, 3, 4], // いい 天気 から 散歩に
                translation: "Besok karena cuacanya bagus, ayo pergi jalan-santai."
            }, {
                question: "駅の ______ ______ __★__ ______ あります。",
                options: ["に", "交番", "すぐ前", "が"],
                answer: "すぐ前",
                correctOrder: [3, 1, 2, 4], // すぐ前 に 交番 が
                translation: "Tepat di depan stasiun ada pos polisi (koban)."
            }, {
                question: "この ______ ______ __★__ ______ 綺麗です。",
                options: ["とても", "花は", "色が", "珍しい"],
                answer: "色が",
                correctOrder: [1, 4, 2, 3], // とても 珍しい 花は 色が
                translation: "Bunga yang sangat langka ini warnanya cantik."
            }, {
                question: "テレビを ______ ______ __★__ ______ ください。",
                options: ["消して", "寝る", "前に", "必ず"],
                answer: "消して",
                correctOrder: [4, 2, 3, 1], // 必ず 寝る 前に 消して
                translation: "Tolong pastikan matikan TV sebelum tidur."
            }, {
                question: "この ______ ______ __★__ ______ 便利です。",
                options: ["は", "地下鉄", "どこへ行くのにも", "とても"],
                answer: "とても",
                correctOrder: [2, 1, 3, 4], // 地下鉄 は どこへ行くのにも とても
                translation: "Kereta bawah tanah ini sangat praktis untuk pergi ke mana pun."
            }, {
                question: "昨日は ______ ______ __★__ ______ 疲れました。",
                options: ["たくさん", "歩いたので", "足が", "とても"],
                answer: "足が",
                correctOrder: [1, 2, 3, 4], // たくさん 歩いたので 足が とても
                translation: "Kemarin karena banyak berjalan, kaki saya sangat lelah."
            }, {
                question: "冷たい ______ ______ __★__ ______ 飲みませんか。",
                options: ["一緒に", "ジュース", "を", "飲みませんか"],
                answer: "を",
                correctOrder: [1, 2, 3, 4], // 一緒に ジュース を 飲みませんか
                translation: "Maukah minum jus dingin bersama-sama?"
            }, {
                question: "田中さんは ______ ______ __★__ ______ 先生です。",
                options: ["背が", "若くて", "高い", "素敵な"],
                answer: "高い",
                correctOrder: [2, 4, 1, 3], // 若くて 素敵な 背が 高い
                translation: "Tanaka-san adalah guru yang muda, keren, dan bertubuh tinggi."
            }, {
                question: "この ______ ______ __★__ ______ かけてください。",
                options: ["に", "椅子", "どうぞ", "座って"],
                answer: "椅子",
                correctOrder: [3, 2, 1, 4], // どうぞ 椅子 に 座って
                translation: "Silakan duduk di kursi ini."
            }, {
                question: "窓を ______ ______ __★__ ______ ください。",
                options: ["開けないで", "寒いから", "絶対に", "を"],
                answer: "を",
                correctOrder: [2, 3, 4, 1], // 寒いから 絶対に を 開けないで
                translation: "Karena dingin, tolong jangan buka jendelanya sama sekali."
            }, {
                question: "1日 ______ ______ __★__ ______ 飲みます。",
                options: ["3回", "薬を", "に", "ご飯の後に"],
                answer: "薬を",
                correctOrder: [4, 3, 1, 2], // ご飯の後に に 3回 薬を
                translation: "Meminum obat 3 kali sehari setelah makan."
            }, {
                question: "山田さんは ______ ______ __★__ ______ 来ました。",
                options: ["走って", "ここまで", "急いで", "来ました"],
                answer: "ここまで",
                correctOrder: [3, 1, 2, 4], // 急いで 走って ここまで 来ました
                translation: "Yamada-san datang sampai sini dengan berlari terburu-buru."
            }, {
                question: "私の ______ ______ __★__ ______ です。",
                options: ["こと", "作る", "趣味は", "料理を"],
                answer: "作る",
                correctOrder: [3, 4, 2, 1], // 趣味は 料理を 作る こと
                translation: "Hobi saya adalah membuat masakan."
            }, {
                question: "空が ______ ______ __★__ ______ なりました。",
                options: ["夕方になって", "だんだん", "暗く", "なりました"],
                answer: "暗く",
                correctOrder: [1, 2, 3, 4], // 夕方になって だんだん 暗く なりました
                translation: "Hari sudah sore dan langit perlahan menjadi gelap."
            }, {
                question: "この ______ ______ __★__ ______ 重いです。",
                options: ["は", "中身が", "箱", "とても"],
                answer: "とても",
                correctOrder: [3, 1, 2, 4], // 箱 は 中身が とても
                translation: "Kotak ini isinya sangat berat."
            }, {
                question: "あした ______ ______ __★__ ______ 行きますか。",
                options: ["だれ", "パーティー", "に", "と"],
                answer: "に",
                correctOrder: [2, 3, 1, 4], // パーティー に だれ と
                translation: "Besok pergi ke pesta bersama siapa?"
            }, {
                question: "昨日は ______ ______ __★__ ______ 寝ました。",
                options: ["仕事が", "終わってから", "すぐに", "疲れて"],
                answer: "すぐに",
                correctOrder: [1, 2, 4, 3], // 仕事が 終わってから 疲れて すぐに
                translation: "Kemarin setelah pekerjaan selesai, karena lelah saya langsung tidur."
            }, {
                question: "この ______ ______ __★__ ______ 綺麗ですね。",
                options: ["は", "公園", "掃除されて", "いつも"],
                answer: "掃除されて",
                correctOrder: [2, 1, 4, 3], // 公園 は いつも 掃除されて
                translation: "Taman ini selalu dibersihkan dan cantik ya."
            }, {
                question: "田中さんは ______ ______ __★__ ______ います。",
                options: ["を", "いま", "磨いて", "歯"],
                answer: "磨いて",
                correctOrder: [2, 4, 1, 3], // いま 歯 を 磨いて
                translation: "Tanaka-san sekarang sedang menggosok gigi."
            }, {
                question: "お茶 ______ ______ __★__ ______ ください。",
                options: ["お茶を", "熱い", "もう一杯", "いかがですか"],
                answer: "もう一杯",
                correctOrder: [2, 1, 3, 4], // 熱い お茶を もう一杯 いかがですか
                translation: "Bagaimana kalau satu cangkir teh panas lagi?"
            }, {
                question: "駅まで ______ ______ __★__ ______ 行きます。",
                options: ["自転車で", "いつも", "20分ぐらい", "かけて"],
                answer: "20分ぐらい",
                correctOrder: [2, 1, 3, 4], // いつm 自転車で 20分ぐらい かけて
                translation: "Selalu memakan waktu sekitar 20 menit dengan sepeda sampai stasiun."
            }, {
                question: "明日は ______ ______ __★__ ______ です。",
                options: ["月曜日だから", "学校は", "お休み", "ですね"],
                answer: "お休み",
                correctOrder: [1, 2, 3, 4], // 月曜日だから 学校は お休み ですね
                translation: "Karena hari Senin, sekolah libur ya."
            }, {
                question: "田中さんは ______ ______ __★__ ______ います。",
                options: ["を", "カメラ", "新しい", "探して"],
                answer: "探して",
                correctOrder: [3, 2, 1, 4], // 新しい カメラ を 探して
                translation: "Tanaka-san sedang mencari kamera baru."
            }, {
                question: "この ______ ______ __★__ ______ 高いですね。",
                options: ["は", "果物", "とても", "値段が"],
                answer: "とても",
                correctOrder: [2, 1, 4, 3], // 果物 は 値段が とても
                translation: "Buah ini harganya sangat mahal ya."
            }, {
                question: "あした ______ ______ __★__ ______ ましょう。",
                options: ["に", "公園", "10時", "会い"],
                answer: "10時",
                correctOrder: [2, 1, 3, 4], // 公園 に 10時 会い
                translation: "Mari bertemu di taman jam 10 besok."
            }, {
                question: "この ______ ______ __★__ ______ 読んでください。",
                options: ["を", "注意して", "よく", "規則"],
                answer: "よく",
                correctOrder: [4, 1, 3, 2], // 規則 を よく 注意して
                translation: "Tolong baca peraturan ini baik-baik dengan saksama."
            }
        ],
        "bunpou-text": [
            // TEKS 1: 田中さんの あさ (Pagi Hari Tanaka-san)
            {
                passage: "田中さんは 毎朝 6時に おきます。 [ 1 ] 、顔を あらいます。それから 朝ごはんを [ 2 ] 。家を 7時半 [ 3 ] 出ます。会社まで 電車 [ 4 ] 行きます。仕事は 9時から 5時 [ 5 ] です。",
                questionId: "1",
                options: ["そして", "しかし", "それから", "だから"],
                answer: "それから",
                translation: "Menghubungkan urutan kegiatan: 'Setelah itu' cuci muka."
            }, {
                passage: "田中さんは 毎朝 6時に おきます。 [ 1 ] 、顔を あらいます。それから 朝ごはんを [ 2 ] 。家を 7時半 [ 3 ] 出ます。会社まで 電車 [ 4 ] 行きます。仕事は 9時から 5時 [ 5 ] です。",
                questionId: "2",
                options: ["食べます", "飲みます", "します", "きます"],
                answer: "食べます",
                translation: "Dia makan sarapan pagi."
            }, {
                passage: "田中さんは 毎朝 6時に おきます。 [ 1 ] 、顔を あらいます。それから 朝ごはんを [ 2 ] 。家を 7時半 [ 3 ] 出ます。会社まで 電車 [ 4 ] 行きます。仕事は 9時から 5時 [ 5 ] です。",
                questionId: "3",
                options: ["に", "を", "へ", "が"],
                answer: "に",
                translation: "Partikel waktu spesifik untuk menunjukkan jam keluar rumah."
            }, {
                passage: "田中さんは 毎朝 6時に おきます。 [ 1 ] 、顔を あらいます。それから 朝ごはんを [ 2 ] 。家を 7時半 [ 3 ] 出ます。会社まで 電車 [ 4 ] 行きます。仕事は 9時から 5時 [ 5 ] です。",
                questionId: "4",
                options: ["で", "に", "を", "へ"],
                answer: "で",
                translation: "Partikel 'de' menunjukkan sarana/kendaraan (dengan kereta)."
            }, {
                passage: "田中さんは 毎朝 6時に おきます。 [ 1 ] 、顔を あらいます。それから 朝ごはんを [ 2 ] 。家を 7時半 [ 3 ] 出ます。会社まで 電車 [ 4 ] 行きます。仕事は 9時から 5時 [ 5 ] です。",
                questionId: "5",
                options: ["まで", "から", "に", "を"],
                answer: "まで",
                translation: "Menunjukkan batas waktu akhir (sampai jam 5)."
            },

            // TEKS 2: 新しい 留学生 (Siswa Asing Baru)
            {
                passage: "今日、学校に 新しい 学生が 来ました。 [ 6 ] 名前は マリアさんです。マリアさんは ブラジルから 来ました。背が [ 7 ] 、とても 親切な 人です。日本語を 少し [ 8 ] ことができます。日本の 音楽 [ 9 ] 好きです。みなさん、マリアさん [ 10 ] たくさん 話して ください。",
                questionId: "6",
                options: ["彼女の", "私の", "あなたの", "彼らの"],
                answer: "彼女の",
                translation: "Menunjukkan kepemilikan subjek perempuan (Namanya)."
            }, {
                passage: "今日、学校に 新しい 学生が 来ました。 [ 6 ] 名前は マリアさんです。マリアさんは ブラジルから 来ました。背が [ 7 ] 、とても 親切な 人です。日本語を 少し [ 8 ] ことができます。日本の 音楽 [ 9 ] 好きです。みなさん、マリアさん [ 10 ] たくさん 話して ください。",
                questionId: "7",
                options: ["高くて", "高いで", "高くに", "高く"],
                answer: "高くて",
                translation: "Penyambung kata sifat-i (Te-form): Bertubuh tinggi dan..."
            }, {
                passage: "今日、学校に 新しい 学生が 来ました。 [ 6 ] 名前は マリアさんです。マリアさんは ブラジルから 来ました。背が [ 7 ] 、とても 親切な 人です。日本語を 少し [ 8 ] ことができます。日本の 音楽 [ 9 ] 好きです。みなさん、マリアさん [ 10 ] たくさん 話して ください。",
                questionId: "8",
                options: ["話す", "話して", "話し", "話した"],
                answer: "話す",
                translation: "Pola ~koto ga dekimasu menggunakan kata kerja bentuk kamus."
            }, {
                passage: "今日、学校に 新しい 学生が 来ました。 [ 6 ] 名前は マリアさんです。マリアさんは ブラジルから 来ました。背が [ 7 ] 、とても 親切な 人です。日本語を 少し [ 8 ] ことができます。日本の 音楽 [ 9 ] 好きです。みなさん、マリアさん [ 10 ] たくさん 話して ください。",
                questionId: "9",
                options: ["が", "を", "に", "は"],
                answer: "が",
                translation: "Partikel 'ga' digunakan untuk menyatakan kesukaan (Suki)."
            }, {
                passage: "今日、学校に 新しい 学生が 来ました。 [ 6 ] 名前は マリアさんです。マリアさんは ブラジルから 来ました。背が [ 7 ] 、とても 親切な 人です。日本語を 少し [ 8 ] ことができます。日本の 音楽 [ 9 ] 好きです。みなさん、マリアさん [ 10 ] たくさん 話して ください。",
                questionId: "10",
                options: ["と", "に", "を", "へ"],
                answer: "と",
                translation: "Partikel 'to' untuk menunjukkan lawan bicara (bersama/dengan Maria)."
            },

            // TEKS 3: スーパーで 買い物 (Belanja di Supermarket)
            {
                passage: "昨日、私は スーパーへ 行きました。りんご [ 11 ] 100円でした。私は 5つ [ 12 ] 。スーパーには 人が たくさん [ 13 ] 。とても [ 14 ] でした。パンと 牛乳 [ 15 ] 買いました。",
                questionId: "11",
                options: ["は", "が", "を", "に"],
                answer: "は",
                translation: "Menunjukkan topik (Mengenai apel, harganya...)."
            }, {
                passage: "昨日、私は スーパーへ 行きました。りんご [ 11 ] 100円でした。私は 5つ [ 12 ] 。スーパーには 人が たくさん [ 13 ] 。とても [ 14 ] でした。パンと 牛乳 [ 15 ] 買いました。",
                questionId: "12",
                options: ["買いました", "食べました", "ありました", "見ました"],
                answer: "買いました",
                translation: "Sesuai konteks belanja: Membeli 5 buah."
            }, {
                passage: "昨日、私は スーパーへ 行きました。りんご [ 11 ] 100円でした。私は 5つ [ 12 ] 。スーパーには 人が たくさん [ 13 ] 。とても [ 14 ] でした。パンと 牛乳 [ 15 ] 買いました。",
                questionId: "13",
                options: ["いました", "ありました", "します", "きます"],
                answer: "いました",
                translation: "Keberadaan benda hidup (orang) dalam bentuk lampau."
            }, {
                passage: "昨日、私は スーパーへ 行きました。りんご [ 11 ] 100円でした。私は 5つ [ 12 ] 。スーパーには 人が たくさん [ 13 ] 。とても [ 14 ] でした。パンと 牛乳 [ 15 ] 買いました。",
                questionId: "14",
                options: ["にぎやか", "しずか", "きれい", "ひま"],
                answer: "にぎやか",
                translation: "Banyak orang di supermarket, sangat ramai."
            }, {
                passage: "昨日、私は スーパーへ 行きました。りんご [ 11 ] 100円でした。私は 5つ [ 12 ] 。スーパーには 人が たくさん [ 13 ] 。とても [ 14 ] でした。パンと 牛乳 [ 15 ] 買いました。",
                questionId: "15",
                options: ["も", "に", "へ", "を"],
                answer: "も",
                translation: "Partikel 'mo' untuk menyatakan 'juga' (Membeli roti dan susu juga)."
            },

            // TEKS 4: 私の 家族 (Keluarga Saya)
            {
                passage: "私の 家族は 4人です。父と 母と 妹 [ 16 ] 私です。父は 銀行で 働いて います。 [ 17 ] 母は 先生です。母は 毎日 忙しいですが、いつも [ 18 ] です。夜は 家族で いっしょに ごはんを [ 19 ] 。私の 家族は とても [ 20 ] です。",
                questionId: "16",
                options: ["と", "に", "を", "が"],
                answer: "と",
                translation: "Partikel penyambung kata benda yang setara (dan)."
            }, {
                passage: "私の 家族は 4人です。父と 母と 妹 [ 16 ] 私です。父は 銀行で 働いて います。 [ 17 ] 母は 先生です。母は 毎日 忙しいですが、いつも [ 18 ] です。夜は 家族で いっしょに ごはんを [ 19 ] 。私の 家族は とても [ 20 ] です。",
                questionId: "17",
                options: ["そして", "しかし", "だから", "でも"],
                answer: "そして",
                translation: "Kata sambung untuk menambahkan informasi baru (Dan/Lalu)."
            }, {
                passage: "私の 家族は 4人です。父と 母と 妹 [ 16 ] 私です。父は 銀行で 働いて います。 [ 17 ] 母は 先生です。母は 毎日 忙しいですが、いつも [ 18 ] です。夜は 家族で いっしょに ごはんを [ 19 ] 。私の 家族は とても [ 20 ] です。",
                questionId: "18",
                options: ["元気", "静か", "ひま", "下手"],
                answer: "元気",
                translation: "Meskipun sibuk, ibunya selalu bersemangat/sehat."
            }, {
                passage: "私の 家族は 4人です。父と 母と 妹 [ 16 ] 私です。父は 銀行で 働いて います。 [ 17 ] 母は 先生です。母は 毎日 忙しいですが、いつも [ 18 ] です。夜は 家族で いっしょに ごはんを [ 19 ] 。私の 家族は とても [ 20 ] です。",
                questionId: "19",
                options: ["食べます", "飲みます", "します", "行きます"],
                answer: "食べます",
                translation: "Dia makan nasi."
            }, {
                passage: "私の 家族は 4人です。父と 母と 妹 [ 16 ] 私です。父は 銀行で 働いて います。 [ 17 ] 母は 先生です。母は 毎日 忙しいですが、いつも [ 18 ] です。夜は 家族で いっしょに ごはんを [ 19 ] 。私の 家族は とても [ 20 ] です。",
                questionId: "20",
                options: ["仲がいい", "明るい", "高い", "広い"],
                answer: "明るい",
                translation: "Mendeskripsikan suasana keluarga yang positif (Ceria)."
            },

            // TEKS 5: 週末の 旅行 (Perjalanan Akhir Pekan)
            {
                passage: "先週、私は 京都へ 行きました。天気は [ 21 ] よかったです。景色が とても [ 22 ] でした。写真を たくさん [ 23 ] 。食べ物も 美味しかったです。少し [ 24 ] ですが、また [ 25 ] 行きたいです。",
                questionId: "21",
                options: ["とても", "あまり", "ぜんぜん", "すこし"],
                answer: "とても",
                translation: "Mendeskripsikan cuaca yang sangat bagus."
            }, {
                passage: "先週、私は 京都へ 行きました。天気は [ 21 ] よかったです。景色が とても [ 22 ] でした。写真を たくさん [ 23 ] 。食べ物も 美味しかったです。少し [ 24 ] ですが、また [ 25 ] 行きたいです。",
                questionId: "22",
                options: ["きれい", "にぎやか", "しずか", "ひま"],
                answer: "きれい",
                translation: "Mendeskripsikan pemandangan (景色) yang indah."
            }, {
                passage: "先週、私は 京都へ 行きました。天気は [ 21 ] よかったです。景色が とても [ 22 ] でした。写真を たくさん [ 23 ] 。食べ物も 美味しかったです。少し [ 24 ] ですが、また [ 25 ] 行きたいです。",
                questionId: "23",
                options: ["撮りました", "見ました", "しました", "聞きました"],
                answer: "撮りました",
                translation: "Kata kerja spesifik untuk foto (shashin wo toru)."
            }, {
                passage: "先週、私は 京都へ 行きました。天気は [ 21 ] よかったです。景色が とても [ 22 ] でした。写真を たくさん [ 23 ] 。食べ物も 美味しかったです。少し [ 24 ] ですが、また [ 25 ] 行きたいです。",
                questionId: "24",
                options: ["高かった", "安かった", "広かった", "近かった"],
                answer: "高かった",
                translation: "Menunjukkan pertentangan: 'Sedikit mahal, tapi...'."
            }, {
                passage: "先週、私は 京都へ 行きました。天気は [ 21 ] よかったです。景色が とても [ 22 ] でした。写真を たくさん [ 23 ] 。食べ物も 美味しかったです。少し [ 24 ] ですが、また [ 25 ] 行きたいです。",
                questionId: "25",
                options: ["いつか", "どこか", "だれか", "なにか"],
                answer: "いつか",
                translation: "Menyatakan keinginan di masa depan: 'Kapan-kapan ingin pergi lagi'."
            },

            // TEKS 6: 日本の 四季 (Empat Musim di Jepang)
            {
                passage: "日本には 四つの 季節が あります。春、夏、秋 [ 26 ] 冬です。夏は とても 暑いです。私は 暑いのが [ 27 ] 好きでは ありません。 [ 28 ] 、冬は とても 寒いです。私は [ 29 ] が 一番 好きです。涼しくて [ 30 ] ですから。",
                questionId: "26",
                options: ["と", "に", "を", "が"],
                answer: "と",
                translation: "Partikel penghubung daftar terakhir."
            }, {
                passage: "日本には 四つの 季節が あります。春、夏、秋 [ 26 ] 冬です。夏は とても 暑いです。私は 暑いのが [ 27 ] 好きでは ありません。 [ 28 ] 、冬は とても 寒いです。私は [ 29 ] が 一番 好きです。涼しくて [ 30 ] ですから。",
                questionId: "27",
                options: ["あまり", "とても", "かなり", "いつも"],
                answer: "あまり",
                translation: "Digunakan dengan bentuk negatif untuk menyatakan 'tidak begitu'."
            }, {
                passage: "日本には 四つの 季節が あります。春、夏、秋 [ 26 ] 冬です。夏は とても 暑いです。私は 暑いのが [ 27 ] 好きでは ありません。 [ 28 ] 、冬は とても 寒いです。私は [ 29 ] が 一番 好きです。涼しくて [ 30 ] ですから。",
                questionId: "28",
                options: ["でも", "そして", "だから", "それから"],
                answer: "でも",
                translation: "Kata sambung pertentangan (Tetapi)."
            }, {
                passage: "日本には 四つの 季節が あります。春、夏、秋 [ 26 ] 冬です。夏は とても 暑いです。私は 暑いのが [ 27 ] 好きでは ありません。 [ 28 ] 、冬は とても 寒いです。私は [ 29 ] が 一番 好きです。涼しくて [ 30 ] ですから。",
                questionId: "29",
                options: ["秋", "春", "夏", "冬"],
                answer: "秋",
                translation: "Sesuai dengan deskripsi '涼しくて' (Sejuk) di kalimat berikutnya."
            }, {
                passage: "日本には 四つの 季節が あります。春、夏、秋 [ 26 ] 冬です。夏は とても 暑いです。私は 暑いのが [ 27 ] 好きでは ありません。 [ 28 ] 、冬は とても 寒いです。私は [ 29 ] が 一番 好きです。涼しくて [ 30 ] ですから。",
                questionId: "30",
                options: ["気持ちがいい", "おもしろい", "忙しい", "難しい"],
                answer: "気持ちがいい",
                translation: "Mendeskripsikan kenyamanan cuaca (Terasa nyaman)."
            },

            // TEKS 7: 図書館の 使い方 (Cara Menggunakan Perpustakaan)
            {
                passage: "ここは 図書館です。図書館では [ 31 ] して ください。食べ物を [ 32 ] で ください。本を 借りる [ 33 ] が できます。借りた 本は 2週間以内に [ 34 ] ください。大きな 声で [ 35 ] で ください。",
                questionId: "31",
                options: ["静かに", "きれいに", "元気に", "賑やかに"],
                answer: "静かに",
                translation: "Aturan perpustakaan: Harap tenang."
            }, {
                passage: "ここは 図書館です。図書館では [ 31 ] して ください。食べ物を [ 32 ] で ください。本を 借りる [ 33 ] が できます。借りた 本は 2週間以内に [ 34 ] ください。大きな 声で [ 35 ] で ください。",
                questionId: "32",
                options: ["食べない", "食べて", "食べ", "食べた"],
                answer: "食べない",
                translation: "Tolong jangan makan di sini."
            }, {
                passage: "ここは 図書館です。図書館では [ 31 ] して ください。食べ物を [ 32 ] で ください。本を 借りる [ 33 ] が できます。借りた 本は 2週間以内に [ 34 ] ください。大きな 声で [ 35 ] で ください。",
                questionId: "33",
                options: ["こと", "もの", "とき", "ひと"],
                answer: "こと",
                translation: "Pola menyatakan kemampuan (koto ga dekimasu)."
            }, {
                passage: "ここは 図書館です。図書館では [ 31 ] して ください。食べ物を [ 32 ] で ください。本を 借りる [ 33 ] が できます。借りた 本は 2週間以内に [ 34 ] ください。大きな 声で [ 35 ] で ください。",
                questionId: "34",
                options: ["返して", "返さない", "返す", "返した"],
                answer: "返して",
                translation: "Permintaan (te-kudasai): Tolong kembalikan."
            }, {
                passage: "ここは 図書館です。図書館では [ 31 ] して ください。食べ物を [ 32 ] で ください。本を 借りる [ 33 ] が できます。借りた 本は 2週間以内に [ 34 ] ください。大きな 声で [ 35 ] で ください。",
                questionId: "35",
                options: ["騒がない", "騒いで", "騒ぎ", "騒ぐ"],
                answer: "騒がない",
                translation: "Di perpustakaan, tolong jangan berisik."
            },

            // TEKS 8: 学校の パーティー (Pesta Sekolah)
            {
                passage: "明日、学校で パーティーが あります。 [ 36 ] が 来ますか。先生も 学生も みんな [ 37 ] 。私は お菓子を [ 38 ] 行きます。いっしょに 歌を [ 39 ] 。きっと [ 40 ] でしょう。",
                questionId: "36",
                options: ["だれ", "なに", "どこ", "いつ"],
                answer: "だれ",
                translation: "Menanyakan orang (Siapa yang akan datang?)."
            }, {
                passage: "明日、学校で パーティーが あります。 [ 36 ] が 来ますか。先生も 学生も みんな [ 37 ] 。私は お菓子を [ 38 ] 行きます。いっしょに 歌を [ 39 ] 。きっと [ 40 ] でしょう。",
                questionId: "37",
                options: ["来ます", "行きます", "します", "寝ます"],
                answer: "来ます",
                translation: "Semuanya sudah datang."
            }, {
                passage: "明日、学校で パーティーが あります。 [ 36 ] が 来ますか。先生も 学生も みんな [ 37 ] 。私は お菓子を [ 38 ] 行きます。いっしょに 歌を [ 39 ] 。きっと [ 40 ] でしょう。",
                questionId: "38",
                options: ["持って", "持ってきて", "持って行って", "持たないで"],
                answer: "持って",
                translation: "Menghubungkan dua kata kerja (motte iku): Membawa makanan pergi."
            }, {
                passage: "明日、学校で パーティーが あります。 [ 36 ] が 来ますか。先生も 学生も みんな [ 37 ] 。私は お菓子を [ 38 ] 行きます。いっしょに 歌を [ 39 ] 。きっと [ 40 ] でしょう。",
                questionId: "39",
                options: ["歌いましょう", "歌いませんか", "歌いたい", "歌う"],
                answer: "歌いましょう",
                translation: "Ajakan (mashou): Ayo menyanyi bersama."
            }, {
                passage: "明日、学校で パーティーが あります。 [ 36 ] が 来ますか。先生も 学生も みんな [ 37 ] 。私は お菓子を [ 38 ] 行きます。いっしょに 歌を [ 39 ] 。きっと [ 40 ] でしょう。",
                questionId: "40",
                options: ["楽しい", "楽しかった", "楽しくない", "楽しさ"],
                answer: "楽しい",
                translation: "Menyatakan prediksi (tanoshii deshou): Pasti akan menyenangkan."
            },

            // TEKS 9: レストラン (Di Restoran)
            {
                passage: "昨日、私は レストランへ 行きました。メニューは とても [ 41 ] わかりやすかったです。私は ピザを [ 42 ] 。ピザは [ 43 ] 美味しかったです。友達は コーヒーを [ 44 ] 。私たちは 2時間 [ 45 ] 話しました。",
                questionId: "41",
                options: ["簡単で", "難しいで", "きれいで", "静かで"],
                answer: "簡単で",
                translation: "Kata sifat-na (te-form): Sederhana dan mudah dimengerti."
            }, {
                passage: "昨日、私は レストランへ 行きました。メニューは とても [ 41 ] わかりやすかったです。私は ピザを [ 42 ] 。ピザは [ 43 ] 美味しかったです。友達は コーヒーを [ 44 ] 。私たちは 2時間 [ 45 ] 話しました。",
                questionId: "42",
                options: ["注文しました", "買いました", "作りました", "見ました"],
                answer: "注文しました",
                translation: "Dia memesan pizza di restoran."
            }, {
                passage: "昨日、私は レストランへ 行きました。メニューは とても [ 41 ] わかりやすかったです。私は ピザを [ 42 ] 。ピザは [ 43 ] 美味しかったです。友達は コーヒーを [ 44 ] 。私たちは 2時間 [ 45 ] 話しました。",
                questionId: "43",
                options: ["安くて", "高くて", "広くて", "近くて"],
                answer: "安くて",
                translation: "Kata sifat-i (te-form): Murah dan enak."
            }, {
                passage: "昨日、私は レストランへ 行きました。メニューは とても [ 41 ] わかりやすかったです。私は ピザを [ 42 ] 。ピザは [ 43 ] 美味しかったです。友達は コーヒーを [ 44 ] 。私たちは 2時間 [ 45 ] 話しました。",
                questionId: "44",
                options: ["飲みました", "食べました", "しました", "来ました"],
                answer: "飲みました",
                translation: "Dia meminum kopi."
            }, {
                passage: "昨日、私は レストランへ 行きました。メニューは とても [ 41 ] わかりやすかったです。私は ピザを [ 42 ] 。ピザは [ 43 ] 美味しかったです。友達は コーヒーを [ 44 ] 。私たちは 2時間 [ 45 ] 話しました。",
                questionId: "45",
                options: ["ぐらい", "ごろ", "まで", "から"],
                answer: "ぐらい",
                translation: "Menunjukkan durasi/jangka waktu (sekitar 2 jam)."
            },

            // TEKS 10: メール (Email)
            {
                passage: "田中さんへ。お元気ですか。私は とても [ 46 ] です。来週、私の 家で パーティーを [ 47 ] 。田中さんも [ 48 ] か。時間を [ 49 ] ください。 [ 50 ] います。マリアより。",
                questionId: "46",
                options: ["元気", "忙しい", "ひま", "下手"],
                answer: "元気",
                translation: "Jawaban sapaan dalam email: Saya sangat sehat."
            }, {
                passage: "田中さんへ。お元気ですか。私は とても [ 46 ] です。来週、私の 家で パーティーを [ 47 ] 。田中さんも [ 48 ] か。時間を [ 49 ] ください。 [ 50 ] います。マリアより。",
                questionId: "47",
                options: ["します", "あります", "きます", "寝ます"],
                answer: "します",
                translation: "Minggu depan kami akan mengadakan pesta."
            }, {
                passage: "田中さんへ。お元気ですか。私は とても [ 46 ] です。来週、私の 家で パーティーを [ 47 ] 。田中さんも [ 48 ] か。時間を [ 49 ] ください。 [ 50 ] います。マリアより。",
                questionId: "48",
                options: ["来ません", "来ます", "来ない", "来たい"],
                answer: "来ません",
                translation: "Bentuk ajakan sopan (~masenka): Maukah Anda datang?"
            }, {
                passage: "田中さんへ。お元気ですか。私は とても [ 46 ] です。来週、私の 家で パーティーを [ 47 ] 。田中さんも [ 48 ] か。時間を [ 49 ] ください。 [ 50 ] います。マリアより。",
                questionId: "49",
                options: ["教えて", "話して", "読んで", "書いて"],
                answer: "教えて",
                translation: "Permintaan informasi: Tolong beritahu (ajarkan) waktunya."
            }, {
                passage: "田中さんへ。お元気ですか。私は とても [ 46 ] です。来週、私の 家で パーティーを [ 47 ] 。田中さんも [ 48 ] か。時間を [ 49 ] ください。 [ 50 ] います。マリアより。",
                questionId: "50",
                options: ["待って", "会って", "話して", "遊んで"],
                answer: "待って",
                translation: "Kalimat penutup email: Saya menunggu Anda (matte imasu)."
            }, {
                passage: "夏休み、私は 家族と 海へ 行きました。海は とても [ 51 ] 綺麗でした。私たちは 海で [ 52 ] 。それから、美味しい 魚を [ 53 ] 。海は 少し 遠い [ 54 ] 、車で 3時間 かかりました。来年も また [ 55 ] 行きたいです。",
                questionId: "51",
                options: ["広くて", "広いで", "広くに", "広い"],
                answer: "広くて",
                translation: "Penyambung kata sifat-i: Luas dan cantik."
            }, {
                passage: "夏休み、私は 家族と 海へ 行きました。海は とても [ 51 ] 綺麗でした。私たちは 海で [ 52 ] 。それから、美味しい 魚を [ 53 ] 。海は 少し 遠い [ 54 ] 、車で 3時間 かかりました。来年も また [ 55 ] 行きたいです。",
                questionId: "52",
                options: ["泳ぎました", "泳ぎます", "泳いで", "泳ぐ"],
                answer: "泳ぎました",
                translation: "Bentuk lampau: Kami telah berenang."
            }, {
                passage: "夏休み、私は 家族と 海へ 行きました。海は とても [ 51 ] 綺麗でした。私たちは 海で [ 52 ] 。それから、美味しい 魚を [ 53 ] 。海は 少し 遠い [ 54 ] 、車で 3時間 かかりました。来年も また [ 55 ] 行きたいです。",
                questionId: "53",
                options: ["食べました", "飲みました", "しました", "見ました"],
                answer: "食べました",
                translation: "Kami makan ikan yang sangat lezat."
            }, {
                passage: "夏休み、私は 家族と 海へ 行きました。海は とても [ 51 ] 綺麗でした。私たちは 海で [ 52 ] 。それから、美味しい 魚を [ 53 ] 。海は 少し 遠い [ 54 ] 、車で 3時間 かかりました。来年も また [ 55 ] 行きたいです。",
                questionId: "54",
                options: ["ので", "から", "に", "を"],
                answer: "ので",
                translation: "Menunjukkan alasan: Karena sedikit jauh."
            }, {
                passage: "夏休み、私は 家族と 海へ 行きました。海は とても [ 51 ] 綺麗でした。私たちは 海で [ 52 ] 。それから、美味しい 魚を [ 53 ] 。海は 少し 遠い [ 54 ] 、車で 3時間 かかりました。来年も また [ 55 ] 行きたいです。",
                questionId: "55",
                options: ["家族で", "一人で", "だれかと", "どこかへ"],
                answer: "家族で",
                translation: "Sesuai konteks awal: Ingin pergi lagi bersama keluarga."
            },

            // TEKS 12: 料理の 趣味 (Hobi Memasak)
            {
                passage: "私は 料理を 作る [ 56 ] が 好きです。毎週末、スーパーで 野菜や 肉を [ 57 ] 。台所で ナイフを使って 野菜を [ 58 ] 。私の 料理は [ 59 ] 美味しいです。いつか レストランを [ 60 ] つもりです。",
                questionId: "56",
                options: ["こと", "もの", "とき", "ひと"],
                answer: "こと",
                translation: "Pembendaan kata kerja: Suka membuat masakan."
            }, {
                passage: "私は 料理を 作る [ 56 ] が 好きです。毎週末、スーパーで 野菜や 肉を [ 57 ] 。台所で ナイフを使って 野菜を [ 58 ] 。私の 料理は [ 59 ] 美味しいです。いつか レストランを [ 60 ] つもりです。",
                questionId: "57",
                options: ["買います", "売ります", "あげます", "もらいます"],
                answer: "買います",
                translation: "Dia membeli sayur dan daging di toko."
            }, {
                passage: "私は 料理を 作る [ 56 ] が 好きです。毎週末、スーパーで 野菜や 肉を [ 57 ] 。台所で ナイフを使って 野菜を [ 58 ] 。私の 料理は [ 59 ] 美味しいです。いつか レストランを [ 60 ] つもりです。",
                questionId: "58",
                options: ["切ります", "洗います", "磨きます", "撮ります"],
                answer: "切ります",
                translation: "Dia memotong sayuran menggunakan pisau."
            }, {
                passage: "私は 料理を 作る [ 56 ] が 好きです。毎週末、スーパーで 野菜や 肉を [ 57 ] 。台所で ナイフを使って 野菜を [ 58 ] 。私の 料理は [ 59 ] 美味しいです。いつか レストランを [ 60 ] つもりです。",
                questionId: "59",
                options: ["とても", "あまり", "ぜんぜん", "すこし"],
                answer: "とても",
                translation: "Makanan itu sangat lezat."
            }, {
                passage: "私は 料理を 作る [ 56 ] が 好きです。毎週末、スーパーで 野菜や 肉を [ 57 ] 。台所で ナイフを使って 野菜を [ 58 ] 。私の 料理は [ 59 ] 美味しいです。いつか レストランを [ 60 ] つもりです。",
                questionId: "60",
                options: ["開く", "開ける", "作る", "やる"],
                answer: "開く",
                translation: "Rencana masa depan: Berencana membuka (bisnis) restoran."
            },

            // TEKS 13: 友達の 誕生日 (Ulang Tahun Teman)
            {
                passage: "明日は 友達の 誕生日です。私は プレゼント [ 61 ] 買いました。明日、友達の 家へ [ 62 ] 行きます。プレゼントを [ 63 ] とき、「おめでとう」と 言います。友達は きっと [ 64 ] でしょう。一緒に ケーキを [ 65 ] 。",
                questionId: "61",
                options: ["を", "が", "に", "は"],
                answer: "を",
                translation: "Partikel objek: Membeli hadiah."
            }, {
                passage: "明日は 友達の 誕生日です。私は プレゼント [ 61 ] 買いました。明日、友達の 家へ [ 62 ] 行きます。プレゼントを [ 63 ] とき、「おめでとう」と 言います。友達は きっと [ 64 ] でしょう。一緒に ケーキを [ 65 ] 。",
                questionId: "62",
                options: ["遊びに", "遊んで", "遊ぶ", "遊び"],
                answer: "遊びに",
                translation: "Tujuan pergi: Pergi untuk bermain."
            }, {
                passage: "明日は 友達の 誕生日です。私は プレゼント [ 61 ] 買いました。明日、友達の 家へ [ 62 ] 行きます。プレゼントを [ 63 ] とき、「おめでとう」と 言います。友達は きっと [ 64 ] でしょう。一緒に ケーキを [ 65 ] 。",
                questionId: "63",
                options: ["あげる", "もらう", "くれる", "やる"],
                answer: "あげる",
                translation: "Memberi kepada orang lain: Saat memberi hadiah."
            }, {
                passage: "明日は 友達の 誕生日です。私は プレゼント [ 61 ] 買いました。明日、友達の 家へ [ 62 ] 行きます。プレゼントを [ 63 ] とき、「おめでとう」と 言います。友達は きっと [ 64 ] でしょう。一緒に ケーキを [ 65 ] 。",
                questionId: "64",
                options: ["喜ぶ", "怒る", "悲しむ", "驚く"],
                answer: "喜ぶ",
                translation: "Prediksi perasaan: Pasti akan senang."
            }, {
                passage: "明日は 友達の 誕生日です。私は プレゼント [ 61 ] 買いました。明日、友達の 家へ [ 62 ] 行きます。プレゼントを [ 63 ] とき、「おめでとう」と 言います。友達は きっと [ 64 ] でしょう。一緒に ケーキを [ 65 ] 。",
                questionId: "65",
                options: ["食べましょう", "食べません", "食べないで", "食べたい"],
                answer: "食べましょう",
                translation: "Ajakan: Ayo makan kue bersama."
            },

            // TEKS 14: 私の 部屋 (Kamar Saya)
            {
                passage: "私の 部屋は あまり [ 66 ] ありませんが、とても 綺麗です。机の 上に 本が [ 67 ] あります。机の [ 68 ] に 椅子が あります。私は 毎日 ここで 勉強を [ 69 ] 。窓が 大きい [ 70 ] 、とても 明るい 部屋です。",
                questionId: "66",
                options: ["広く", "広くて", "広いで", "広い"],
                answer: "広く",
                translation: "Bentuk negatif kata sifat-i: Tidak luas."
            }, {
                passage: "私の 部屋は あまり [ 66 ] ありませんが、とても 綺麗です。机の 上に 本が [ 67 ] あります。机の [ 68 ] に 椅子が あります。私は 毎日 ここで 勉強を [ 69 ] 。窓が 大きい [ 70 ] 、とても 明るい 部屋です。",
                questionId: "67",
                options: ["たくさん", "あまり", "ぜんぜん", "すこし"],
                answer: "たくさん",
                translation: "Di perpustakaan ada banyak buku."
            }, {
                passage: "私の 部屋は あまり [ 66 ] ありませんが、とても 綺麗です。机の 上に 本が [ 67 ] あります。机の [ 68 ] に 椅子が あります。私は 毎日 ここで 勉強を [ 69 ] 。窓が 大きい [ 70 ] 、とても 明るい 部屋です。",
                questionId: "68",
                options: ["下", "上", "中", "前"],
                answer: "下",
                translation: "Posisi kursi biasanya di bawah meja."
            }, {
                passage: "私の 部屋は あまり [ 66 ] ありませんが、とても 綺麗です。机の 上に 本が [ 67 ] あります。机の [ 68 ] に 椅子が あります。私は 毎日 ここで 勉強を [ 69 ] 。窓が 大きい [ 70 ] 、とても 明るい 部屋です。",
                questionId: "69",
                options: ["します", "あります", "います", "なります"],
                answer: "します",
                translation: "Setiap hari dia belajar bahasa Jepang."
            }, {
                passage: "私の 部屋は あまり [ 66 ] ありませんが、とても 綺麗です。机の 上に 本が [ 67 ] あります。机の [ 68 ] に 椅子が あります。私は 毎日 ここで 勉強を [ 69 ] 。窓が 大きい [ 70 ] 、とても 明るい 部屋です。",
                questionId: "70",
                options: ["ので", "から", "に", "を"],
                answer: "ので",
                translation: "Alasan objektif: Karena jendelanya besar."
            },

            // TEKS 15: 犬の 散歩 (Jalan-jalan dengan Anjing)
            {
                passage: "私は 犬を 一匹 [ 71 ] います。名前は ポチです。ポチは とても [ 72 ] です。毎朝、私は ポチと 公園へ 散歩に [ 73 ] 。公園には 他の 犬も [ 74 ] 。ポチは 走るのが 大好きです。散歩の 後で、ポチに 水を [ 75 ] 。",
                questionId: "71",
                options: ["飼って", "持って", "知って", "住んで"],
                answer: "飼って",
                translation: "Kata kerja untuk memelihara hewan (kau)."
            }, {
                passage: "私は 犬を 一匹 [ 71 ] います。名前は ポチです。ポチは とても [ 72 ] です。毎朝、私は ポチと 公園へ 散歩に [ 73 ] 。公園には 他の 犬も [ 74 ] 。ポチは 走るのが 大好きです。散歩の 後で、ポチに 水を [ 75 ] 。",
                questionId: "72",
                options: ["元気", "静か", "下手", "有名"],
                answer: "元気",
                translation: "Sifat anjing yang lincah: Bersemangat/Sehat."
            }, {
                passage: "私は 犬を 一匹 [ 71 ] います。名前は ポチです。ポチは とても [ 72 ] です。毎朝、私は ポチと 公園へ 散歩に [ 73 ] 。公園には 他の 犬も [ 74 ] 。ポチは 走るのが 大好きです。散歩の 後で、ポチに 水を [ 75 ] 。",
                questionId: "73",
                options: ["行きます", "来ます", "帰ります", "出ます"],
                answer: "行きます",
                translation: "Pergi untuk jalan-santai."
            }, {
                passage: "私は 犬を 一匹 [ 71 ] います。名前は ポチです。ポチは とても [ 72 ] です。毎朝、私は ポチと 公園へ 散歩に [ 73 ] 。公園には 他の 犬も [ 74 ] 。ポチは 走るのが 大好きです。散歩の 後で、ポチに 水を [ 75 ] 。",
                questionId: "74",
                options: ["います", "あります", "します", "きます"],
                answer: "います",
                translation: "Keberadaan benda hidup (anjing lain)."
            }, {
                passage: "私は 犬を 一匹 [ 71 ] います。名前は ポチです。ポチは とても [ 72 ] です。毎朝、私は ポチと 公園へ 散歩に [ 73 ] 。公園には 他の 犬も [ 74 ] 。ポチは 走るのが 大好きです。散歩の 後で、ポチに 水を [ 75 ] 。",
                questionId: "75",
                options: ["あげます", "もらいます", "くれます", "飲みます"],
                answer: "あげます",
                translation: "Memberikan (air) kepada hewan."
            },

            // TEKS 16: 日本語の 勉強 (Belajar Bahasa Jepang)
            {
                passage: "私は 3ヶ月前から 日本語を 勉強 [ 76 ] います。平仮名と 片仮名は [ 77 ] 覚えましたが、漢字は まだ 難しいです。先生は とても [ 78 ] 教えてくれます。毎日、CDを [ 79 ] 練習します。早く 上手に [ 80 ] です。",
                questionId: "76",
                options: ["して", "しに", "する", "した"],
                answer: "して",
                translation: "Bentuk ~te iru: Sedang melakukan (belajar)."
            }, {
                passage: "私は 3ヶ月前から 日本語を 勉強 [ 76 ] います。平仮名と 片仮名は [ 77 ] 覚えましたが、漢字は まだ 難しいです。先生は とても [ 78 ] 教えてくれます。毎日、CDを [ 79 ] 練習します。早く 上手に [ 80 ] です。",
                questionId: "77",
                options: ["全部", "あまり", "ぜんぜん", "すこし"],
                answer: "全部",
                translation: "Sudah hafal 'Semuanya' (Hiragana & Katakana)."
            }, {
                passage: "私は 3ヶ月前から 日本語を 勉強 [ 76 ] います。平仮名と 片仮名は [ 77 ] 覚えましたが、漢字は まだ 難しいです。先生は とても [ 78 ] 教えてくれます。毎日、CDを [ 79 ] 練習します。早く 上手に [ 80 ] です。",
                questionId: "78",
                options: ["丁寧に", "丁寧にな", "丁寧で", "丁寧だ"],
                answer: "丁寧に",
                translation: "Kata keterangan sifat-na: Mengajar dengan sopan/teliti."
            }, {
                passage: "私は 3ヶ月前から 日本語を 勉強 [ 76 ] います。平仮名と 片仮名は [ 77 ] 覚えましたが、漢字は まだ 難しいです。先生は とても [ 78 ] 教えてくれます。毎日、CDを [ 79 ] 練習します。早く 上手に [ 80 ] です。",
                questionId: "79",
                options: ["聞いて", "見て", "書いて", "読んで"],
                answer: "聞いて",
                translation: "Dia mendengarkan musik dari CD."
            }, {
                passage: "私は 3ヶ月前から 日本語を 勉強 [ 76 ] います。平仮名と 片仮名は [ 77 ] 覚えましたが、漢字は まだ 難しいです。先生は とても [ 78 ] 教えてくれます。毎日、CDを [ 79 ] 練習します。早く 上手に [ 80 ] です。",
                questionId: "80",
                options: ["なりたい", "なって", "なる", "なります"],
                answer: "なりたい",
                translation: "Keinginan: Ingin menjadi mahir."
            },

            // TEKS 17: 電車で 会社へ (Ke Kantor dengan Kereta)
            {
                passage: "私の 会社は 東京に あります。毎日、電車に 1時間 [ 81 ] 会社へ 行きます。朝の 電車は とても [ 82 ] います。駅の 前で 新聞を [ 83 ] 。電車の中で 本を [ 84 ] 。仕事は 大変ですが、[ 85 ] です。",
                questionId: "81",
                options: ["乗って", "降りて", "乗り換えて", "歩いて"],
                answer: "乗って",
                translation: "Naik kereta selama 1 jam."
            }, {
                passage: "私の 会社は 東京に あります。毎日、電車に 1時間 [ 81 ] 会社へ 行きます。朝の 電車は とても [ 82 ] います。駅の 前で 新聞を [ 83 ] 。電車の中で 本を [ 84 ] 。仕事は 大変ですが、[ 85 ] です。",
                questionId: "82",
                options: ["込んで", "空いて", "止まって", "動いて"],
                answer: "込んで",
                translation: "Kondisi kereta pagi: Sedang padat/penuh."
            }, {
                passage: "私の 会社は 東京に あります。毎日、電車に 1時間 [ 81 ] 会社へ 行きます。朝の 電車は とても [ 82 ] います。駅の 前で 新聞を [ 83 ] 。電車の中で 本を [ 84 ] 。仕事は 大変ですが、[ 85 ] です。",
                questionId: "83",
                options: ["買います", "売ります", "読みます", "書きます"],
                answer: "買います",
                translation: "Membeli koran di depan stasiun."
            }, {
                passage: "私の 会社は 東京に あります。毎日、電車に 1時間 [ 81 ] 会社へ 行きます。朝の 電車は とても [ 82 ] います。駅の 前で 新聞を [ 83 ] 。電車の中で 本を [ 84 ] 。仕事は 大変ですが、[ 85 ] です。",
                questionId: "84",
                options: ["読みます", "見ます", "聞きます", "書きます"],
                answer: "読みます",
                translation: "Membaca buku di dalam kereta."
            }, {
                passage: "私の 会社は 東京に あります。毎日、電車に 1時間 [ 81 ] 会社へ 行きます。朝の 電車は とても [ 82 ] います。駅の 前で 新聞を [ 83 ] 。電車の中で 本を [ 84 ] 。仕事は 大変ですが、[ 85 ] です。",
                questionId: "85",
                options: ["おもしろい", "つまらない", "むずかしい", "やさしい"],
                answer: "おもしろい",
                translation: "Pertentangan: Sulit tapi menarik."
            },

            // TEKS 18: スポーツを しましょう (Ayo Berolahraga)
            {
                passage: "田中さんは スポーツが 大好きです。特に テニスが [ 86 ] です。今週の 土曜日、一緒に テニスを [ 87 ] か。私は あまり 上手 [ 88 ] ありませんが、頑張ります。テニスの 後で、何か [ 89 ] に 行きましょう。楽しみに して [ 90 ] 。",
                questionId: "86",
                options: ["得意", "下手", "有名", "静か"],
                answer: "得意",
                translation: "Kemampuan: Sangat jago/mahir (Tokui)."
            }, {
                passage: "田中さんは スポーツが 大好きです。特に テニスが [ 86 ] です。今週の 土曜日、一緒に テニスを [ 87 ] か。私は あまり 上手 [ 88 ] ありませんが、頑張ります。テニスの 後で、何か [ 89 ] に 行きましょう。楽しみに して [ 90 ] 。",
                questionId: "87",
                options: ["しません", "しましょう", "する", "した"],
                answer: "しません",
                translation: "Bentuk ajakan sopan (~masenka): Maukah melakukannya?"
            }, {
                passage: "田中さんは スポーツが 大好きです。特に テニスが [ 86 ] です。今週ของ 土曜日、一緒に テニスを [ 87 ] か。私は あまり 上手 [ 88 ] ありませんが、頑張ります。テニスの 後で、何か [ 89 ] に 行きましょう。楽しみに して [ 90 ] 。",
                questionId: "88",
                options: ["では", "に", "を", "が"],
                answer: "では",
                translation: "Negatif kata sifat-na: Tidak pandai."
            }, {
                passage: "田中さんは スポーツが 大好きです。特に テニスが [ 86 ] です。今週の 土曜日、一緒に テニスを [ 87 ] か。私は あまり 上手 [ 88 ] ありませんが、頑張ります。テニスの 後で、何か [ 89 ] に 行きましょう。楽しみに して [ 90 ] 。",
                questionId: "89",
                options: ["食べ", "食べて", "食べる", "食べた"],
                answer: "食べ",
                translation: "Tujuan pergi (masu-stem + ni iku): Pergi untuk makan."
            }, {
                passage: "田中さんは スポーツが 大好きです。特に テニスが [ 86 ] です。今週の 土曜日、一緒に テニスを [ 87 ] か。私は あまり 上手 [ 88 ] ありませんが、頑張ります。テニスの 後で、何か [ 89 ] に 行きましょう。楽しみに して [ 90 ] 。",
                questionId: "90",
                options: ["います", "あります", "なります", "します"],
                answer: "います",
                translation: "Kondisi berkelanjutan: Sedang menantikan (tanoshimi ni shite imasu)."
            },

            // TEKS 19: 忙しい 週末 (Akhir Pekan yang Sibuk)
            {
                passage: "今週の 土曜日は とても 忙しかったです。朝、部屋を [ 91 ] しました。それから、服を [ 92 ] しました。昼ご飯を 食べてから、デパートへ 買い物に [ 93 ] 。夜は 友達と レストランで 会いました。たくさん 話して [ 94 ] です。明日は ゆっくり [ 95 ] です。",
                questionId: "91",
                options: ["掃除", "洗濯", "料理", "散歩"],
                answer: "掃除",
                translation: "Tolong bersihkan kamar Anda."
            }, {
                passage: "今週の 土曜日は とても 忙しかったです。朝、部屋を [ 91 ] しました。それから、服を [ 92 ] しました。昼ご飯を 食べてから、デパートへ 買い物に [ 93 ] 。夜は 友達と レストランで 会いました。たくさん 話して [ 94 ] です。明日は ゆっくり [ 95 ] です。",
                questionId: "92",
                options: ["洗濯", "掃除", "料理", "仕事"],
                answer: "洗濯",
                translation: "Hari ini saya mencuci pakaian."
            }, {
                passage: "今週の 土曜日は とても 忙しかったです。朝、部屋を [ 91 ] しました。それから、服を [ 92 ] しました。昼ご飯を 食べてから、デパートへ 買い物に [ 93 ] 。夜は 友達と レストランで 会いました。たくさん 話して [ 94 ] です。明日は ゆっくり [ 95 ] です。",
                questionId: "93",
                options: ["行きました", "来ました", "帰りました", "出ました"],
                answer: "行きました",
                translation: "Pergi belanja ke departemen store."
            }, {
                passage: "今週の 土曜日は とても 忙しかったです。朝、部屋を [ 91 ] しました。それから、服を [ 92 ] しました。昼ご飯を 食べてから、デパートへ 買い物に [ 93 ] 。夜は 友達と レストランで 会いました。たくさん 話して [ 94 ] です。明日は ゆっくり [ 95 ] です。",
                questionId: "94",
                options: ["楽しかっ", "楽しい", "楽しんで", "楽しく"],
                answer: "楽しかっ",
                translation: "Bentuk lampau: Menyenangkan."
            }, {
                passage: "今週の 土曜日は とても 忙しかったです。朝、部屋を [ 91 ] しました。それから、服を [ 92 ] しました。昼ご飯を 食べてから、デパートへ 買い物に [ 93 ] 。夜は 友達と レストランで 会いました。たくさん 話して [ 94 ] です。明日は ゆっくり [ 95 ] です。",
                questionId: "95",
                options: ["休みたい", "休みます", "休む", "休んだ"],
                answer: "休みたい",
                translation: "Keinginan: Ingin beristirahat santai."
            },

            // TEKS 20: 病院へ (Pergi ke Rumah Sakit)
            {
                passage: "昨日から 少し 熱が あります。喉も [ 96 ] です。今日は 学校を [ 97 ] 病院へ 行きました。先生に「風邪ですね」と 言われました。薬を [ 98 ] 早く 寝て ください。今日は お風呂に [ 99 ] で ください。明日は [ 100 ] に なるでしょう。",
                questionId: "96",
                options: ["痛い", "赤い", "白い", "長い"],
                answer: "痛い",
                translation: "Kondisi sakit: Tenggorokan sakit."
            }, {
                passage: "昨日から 少し 熱が あります。喉も [ 96 ] です。今日は 学校を [ 97 ] 病院へ 行きました。先生に「風邪ですね」と 言われました。薬を [ 98 ] 早く 寝て ください。今日は お風呂に [ 99 ] で ください。明日は [ 100 ] に なるでしょう。",
                questionId: "97",
                options: ["休んで", "休み", "休む", "休んだ"],
                answer: "休んで",
                translation: "Sebab-akibat (~te): Meliburkan sekolah lalu pergi ke RS."
            }, {
                passage: "昨日から 少し 熱が あります。喉も [ 96 ] です。今日は 学校を [ 97 ] 病院へ 行きました。先生に「風邪ですね」と 言われました。薬を [ 98 ] 早く 寝て ください。今日は お風呂に [ 99 ] で ください。明日は [ 100 ] に なるでしょう。",
                questionId: "98",
                options: ["飲んで", "食べて", "して", "磨いて"],
                answer: "飲んで",
                translation: "Dokter menyarankan untuk minum obat ini."
            }, {
                passage: "昨日から 少し 熱が あります。喉も [ 96 ] です。今日は 学校を [ 97 ] 病院へ 行きました。先生に「風邪ですね」と 言われました。薬を [ 98 ] 早く 寝て ください。今日は お風呂に [ 99 ] で ください。明日は [ 100 ] に なるでしょう。",
                questionId: "99",
                options: ["入らない", "入って", "入り", "入る"],
                answer: "入らない",
                translation: "Hari ini jangan mandi berendam."
            }, {
                passage: "昨日から 少し 熱が あります。喉も [ 96 ] です。今日は 学校を [ 97 ] 病院へ 行きました。先生に「風邪ですね」と 言われました。薬を [ 98 ] 早く 寝て ください。今日は お風呂に [ 99 ] で ください。明日は [ 100 ] に なるでしょう。",
                questionId: "100",
                options: ["元気", "静か", "下手", "有名"],
                answer: "元気",
                translation: "Harapan pemulihan: Besok mungkin akan sehat kembali."
            }
        ]
    },

    "N4": {
        "bunpou-form": [{
                question: "雨が ______ ので、テニスは しませんでした。",
                options: ["ふった", "ふって", "ふり", "ふれば"],
                answer: "ふった",
                translation: "Karena (sudah) turun hujan, saya tidak bermain tenis. (~node menggunakan bentuk biasa/plain form)."
            }, {
                question: "一生懸命 勉強した ______、テストの 点が 悪かったです。",
                options: ["のに", "ので", "から", "けれど"],
                answer: "のに",
                translation: "Padahal sudah belajar mati-matian, nilai ujiannya buruk. (~noni menunjukkan pertentangan/kekecewaan)."
            }, {
                question: "先生は さっき 部屋を ______ ました。",
                options: ["出られ", "出させ", "出させられ", "出られさせ"],
                answer: "出られ",
                translation: "Guru baru saja keluar ruangan. (Menggunakan bentuk hormat Sonkeigo ~rareru)."
            }, {
                question: "母に 買い物に ______ ました。",
                options: ["行かされ", "行かせ", "行かれ", "行け"],
                answer: "行かされ",
                translation: "Saya dipaksa pergi berbelanja oleh ibu. (Kausatif-Pasif ~saserareru/asaseru)."
            }, {
                question: "明日 晴れ ______ 、ピクニックに 行きましょう。",
                options: ["なら", "だら", "だったら", "ならで"],
                answer: "だったら",
                translation: "Jika besok cerah, ayo pergi piknik. (Pengandaian ~tara untuk kata benda/sifat-na)."
            }, {
                question: "安く ______ 、この パソコンを 買いたいです。",
                options: ["なれば", "なったら", "なら", "なると"],
                answer: "なれば",
                translation: "Kalau murah, saya ingin beli laptop ini. (Bentuk pengandaian ~ba)."
            }, {
                question: "田中さんは 私に お土産を ______ ました。",
                options: ["ください", "さしあげ", "いただき", "やり"],
                answer: "ください",
                translation: "Tanaka-san memberikan oleh-oleh kepada saya. (Kudasaru digunakan untuk orang lain memberi kepada pembicara)."
            }, {
                question: "私は 先生に 本を ______ ました。",
                options: ["さしあげ", "ください", "いただき", "もらい"],
                answer: "さしあげ",
                translation: "Saya memberikan buku kepada guru. (Sashiageru adalah bentuk hormat dari ageru)."
            }, {
                question: "昨日 買った 本を もう 読んで ______ ました。",
                options: ["しまい", "おき", "み", "あり"],
                answer: "しまい",
                translation: "Saya sudah selesai membaca buku yang dibeli kemarin. (~te shimau menunjukkan tindakan selesai sempurna)."
            }, {
                question: "日本へ 行く ______ 、カメラを 買いました。",
                options: ["まえに", "あとで", "ときに", "から"],
                answer: "まえに",
                translation: "Sebelum pergi ke Jepang, saya membeli kamera."
            }, {
                question: "この 漢字は ______ やすいです。",
                options: ["書き", "書く", "書いて", "書か"],
                answer: "書き",
                translation: "Kanji ini mudah ditulis. (~yasui menggunakan stem-masu)."
            }, {
                question: "あの 先生の 話は ______ にくいです。",
                options: ["聞き", "聞く", "聞いて", "聞か"],
                answer: "聞き",
                translation: "Pembicaraan guru itu sulit didengar/dimengerti. (~nikui menggunakan stem-masu)."
            }, {
                question: "部屋に 花が 飾って ______ 。",
                options: ["あります", "います", "おきます", "みます"],
                answer: "あります",
                translation: "Di kamar ada bunga yang dipajang. (~te aru menunjukkan kondisi hasil tindakan seseorang)."
            }, {
                question: "明日 テストが あるので、今晩 勉強して ______ ます。",
                options: ["おき", "あり", "しまい", "み"],
                answer: "おき",
                translation: "Karena besok ada ujian, malam ini saya akan belajar dulu. (~te oku menunjukkan persiapan)."
            }, {
                question: "空が 暗く なりました。雨が ______ そうです。",
                options: ["降り", "降る", "降って", "降ら"],
                answer: "降り",
                translation: "Langit menjadi gelap. Sepertinya akan turun hujan. (~sou da untuk perkiraan/tanda-tanda)."
            }, {
                question: "この ケーキは ______ そうですね。",
                options: ["おいし", "おいしい", "おいしく", "おいしくて"],
                answer: "おいし",
                translation: "Kue ini kelihatannya enak ya. (Bentuk sou untuk kata sifat-i membuang 'i')."
            }, {
                question: "あそこに 山田さんが いる ______ です。",
                options: ["よう", "そう", "みたい", "らしい"],
                answer: "よう",
                translation: "Sepertinya Yamada-san ada di sana. (Berdasarkan penglihatan/bukti)."
            }, {
                question: "田中さんは 日本語が 上手な ______ です。",
                options: ["はず", "こと", "つもり", "よう"],
                answer: "はず",
                translation: "Tanaka-san seharusnya pandai bahasa Jepang. (Menunjukkan keyakinan kuat)."
            }, {
                question: "日本へ 留学する ______ です。",
                options: ["つもり", "はず", "こと", "よう"],
                answer: "つもり",
                translation: "Saya berencana (berniat) sekolah ke Jepang."
            }, {
                question: "先生、何と ______ ましたか。",
                options: ["おっしゃい", "おっしゃり", "申し", "申され"],
                answer: "おっしゃい",
                translation: "Guru, tadi bicara apa? (Osharu adalah Sonkeigo dari iu)."
            }, {
                question: "明日 10時に 伺い ______ 。",
                options: ["ます", "し", "なさい", "られ"],
                answer: "ます",
                translation: "Besok saya akan berkunjung jam 10. (Ukagau adalah Kenjougo dari iku/kuru)."
            }, {
                question: "社長は もう ______ ました。",
                options: ["お帰りになり", "お帰りし", "帰られ", "お帰り"],
                answer: "お帰りになり",
                translation: "Presiden direktur sudah pulang. (Pola hormat o + stem-masu + ni naru)."
            }, {
                question: "これは 私が ______ 書類です。",
                options: ["お作りした", "お作りになった", "作られた", "作らされた"],
                answer: "お作りした",
                translation: "Ini adalah dokumen yang saya buat (untuk Anda). (Pola rendah hati o + stem-masu + suru)."
            }, {
                question: "もっと 野菜を 食べる ______ して ください。",
                options: ["ように", "ことに", "ために", "ので"],
                answer: "ように",
                translation: "Tolong usahakan untuk lebih banyak makan sayur."
            }, {
                question: "来月 結婚する ______ に なりました。",
                options: ["こと", "よう", "はず", "つもり"],
                answer: "こと",
                translation: "Sudah diputuskan bahwa saya akan menikah bulan depan."
            }, {
                question: "この 本は 読み ______ ました。",
                options: ["終わり", "切り", "出し", "続き"],
                answer: "終わり",
                translation: "Saya sudah selesai membaca buku ini."
            }, {
                question: "急に 雨が 降り ______ ました。",
                options: ["出し", "始め", "終わり", "続け"],
                answer: "出し",
                translation: "Tiba-tiba hujan mulai turun. (~dasu untuk kejadian tiba-tiba)."
            }, {
                question: "3時間も 走り ______ ました。",
                options: ["続け", "始め", "終わり", "出し"],
                answer: "続け",
                translation: "Saya terus berlari selama 3 jam."
            }, {
                question: "風邪を ひかない ______ 、セーターを 着ます。",
                options: ["ように", "ために", "ので", "から"],
                answer: "ように",
                translation: "Agar tidak masuk angin, saya memakai sweter. (Youni untuk tujuan negatif/keadaan)."
            }, {
                question: "家を 買う ______ 、貯金して います。",
                options: ["ために", "ように", "ので", "から"],
                answer: "ために",
                translation: "Demi membeli rumah, saya menabung. (Tameni untuk tujuan keinginan/tindakan sengaja)."
            }, {
                question: "毎日 漢字を 練習する ______ しました。",
                options: ["ことに", "ように", "ために", "ので"],
                answer: "ことに",
                translation: "Saya memutuskan untuk berlatih kanji setiap hari."
            }, {
                question: "弟に ケーキを ______ しまいました。",
                options: ["食べられて", "食べさせて", "食べさせられて", "食べられ"],
                answer: "食べられて",
                translation: "Kue saya (tak sengaja) dimakan oleh adik. (Pasif penderitaan)."
            }, {
                question: "先生は 学生に 宿題を ______ ました。",
                options: ["させ", "られ", "させられ", "させさせ"],
                answer: "させ",
                translation: "Guru menyuruh siswa mengerjakan PR. (Bentuk Kausatif)."
            }, {
                question: "すみません、ここで 待たせて ______ ください。",
                options: ["いただけませんか", "あげませんか", "やりませんか", "さしあげませんか"],
                answer: "いただけませんか",
                translation: "Mohon maaf, bolehkah saya minta izin menunggu di sini? (Kausatif + itadakimasen ka)."
            }, {
                question: "この 料理は 少し ______ すぎます。",
                options: ["辛", "辛い", "辛く", "辛くて"],
                answer: "辛",
                translation: "Masakan ini terlalu pedas. (~sugiru menggunakan stem untuk i-adj)."
            }, {
                question: "テレビを 見 ______ 宿題を します。",
                options: ["ながら", "あいだ", "うちに", "まえに"],
                answer: "ながら",
                translation: "Mengerjakan PR sambil menonton TV."
            }, {
                question: "日本に いる ______ 一度 富士山に 行きたいです。",
                options: ["うちに", "あいだに", "ながら", "ときから"],
                answer: "うちに",
                translation: "Selagi berada di Jepang, saya ingin pergi ke Gunung Fuji sekali saja."
            }, {
                question: "掃除を して いる ______ 、電話が 鳴りました。",
                options: ["間に", "間にわ", "うちは", "うちに"],
                answer: "間に",
                translation: "Saat sedang membersihkan (kamar), telepon berdering."
            }, {
                question: "あの 人は ______ らしいです。",
                options: ["日本人", "日本人の", "日本人な", "日本人に"],
                answer: "日本人",
                translation: "Orang itu sepertinya orang Jepang. (Rashii langsung nempel ke kata benda)."
            }, {
                question: "あそこに 警察官が いますね。何か 事故が あった ______ です。",
                options: ["みたい", "よう", "そう", "らしい"],
                answer: "みたい",
                translation: "Ada polisi di sana ya. Sepertinya telah terjadi kecelakaan. (Penyimpulan kasual)."
            }, {
                question: "疲れた ______ 、早く 寝ましょう。",
                options: ["から", "ので", "のに", "でも"],
                answer: "から",
                translation: "Karena lelah, ayo cepat tidur. (Kara lebih cocok untuk ajakan/mashou)."
            }, {
                question: "この 靴は ______ 、歩きにくいです。",
                options: ["大きすぎて", "大きすぎで", "大きすぎる", "大きすぎるに"],
                answer: "大きすぎて",
                translation: "Sepatu ini terlalu besar, sehingga sulit untuk berjalan."
            }, {
                question: "山田さんは どこへ 行った ______ 教えて ください。",
                options: ["か", "を", "が", "は"],
                answer: "か",
                translation: "Tolong beri tahu (apakah) Yamada-san pergi ke mana. (Kalimat tanya dalam kalimat)."
            }, {
                question: "行くか 行かない ______ 、わかりません。",
                options: ["か", "を", "が", "は"],
                answer: "か",
                translation: "Pergi atau tidaknya, saya tidak tahu."
            }, {
                question: "もっと 練習 ______ 、上手になりますよ。",
                options: ["すれば", "すると", "したなら", "したら"],
                answer: "すれば",
                translation: "Kalau lebih banyak berlatih, kamu akan jadi mahir lho."
            }, {
                question: "勉強 ______ 、すぐ 忘れて しまいます。",
                options: ["しても", "すれば", "したら", "すると"],
                answer: "しても",
                translation: "Biarpun belajar, langsung lupa lagi. (Bentuk konsesif ~temo)."
            }, {
                question: "先生が ______ とおりに、書いて ください。",
                options: ["言った", "言う", "言え", "言われる"],
                answer: "言った",
                translation: "Tolong tulis sesuai dengan yang dikatakan guru."
            }, {
                question: "駅に つく ______ 、電車が 出て しまいました。",
                options: ["と", "なら", "ば", "たら"],
                answer: "と",
                translation: "Begitu sampai stasiun, keretanya sudah berangkat."
            }, {
                question: "明日 晴れ ______ 、海へ 行きましょう。",
                options: ["たら", "ば", "と", "なら"],
                answer: "たら",
                translation: "Kalau besok cerah, mari pergi ke laut."
            }, {
                question: "この 仕事が ______ 、帰りましょう。",
                options: ["終わったら", "終われば", "終わると", "終わるなら"],
                answer: "終わったら",
                translation: "Kalau pekerjaan ini sudah selesai, mari kita pulang."
            }, {
                question: "会議の 時間を 間違えない ______ 、メモを して おきます。",
                options: ["ように", "ために", "ので", "から"],
                answer: "ように",
                translation: "Agar tidak salah waktu rapat, saya akan mencatatnya. (Youni digunakan untuk tujuan yang berupa keadaan/negatif)."
            }, {
                question: "将来、自分の 店を 持つ ______ 、貯金して います。",
                options: ["ために", "ように", "のに", "ので"],
                answer: "ために",
                translation: "Demi memiliki toko sendiri di masa depan, saya sedang menabung. (Tameni untuk tujuan berupa tindakan sengaja)."
            }, {
                question: "電気が ついて います。田中さんが 部屋に いる ______ ですね。",
                options: ["よう", "そう", "みたい", "らしい"],
                answer: "よう",
                translation: "Lampunya menyala. Sepertinya Tanaka-san ada di kamar ya. (Penyimpulan berdasarkan bukti fisik)."
            }, {
                question: "この 仕事は 一人では 終わらない ______ です。",
                options: ["はず", "こと", "つもり", "よう"],
                answer: "はず",
                translation: "Pekerjaan ini seharusnya tidak akan selesai sendirian. (Menunjukkan keyakinan/ekspektasi logis)."
            }, {
                question: "すみませんが、窓を ______ いただけませんか。",
                options: ["開けて", "開ける", "開け", "開けた"],
                answer: "開けて",
                translation: "Maaf, bolehkah saya minta tolong Anda bukakan jendela? (Te-itadakemasenka adalah permintaan sopan)."
            }, {
                question: "部長、あしたの 会議に ______ か。",
                options: ["出席されます", "出席します", "出席いたしましす", "出席にならせます"],
                answer: "出席されます",
                translation: "Kepala bagian, apakah besok akan hadir di rapat? (Bentuk pasif digunakan sebagai Sonkeigo/hormat)."
            }, {
                question: "私が 社長に この ニュースを ______ します。",
                options: ["お伝え", "お伝えになり", "お伝えられ", "お伝えさせ"],
                answer: "お伝え",
                translation: "Saya yang akan menyampaikan berita ini kepada Direktur. (O + stem + suru adalah bentuk Kenjougo/rendah hati)."
            }, {
                question: "あまり お酒を ______ ほうが いいですよ。",
                options: ["飲まない", "飲む", "飲んだ", "飲めば"],
                answer: "飲まない",
                translation: "Lebih baik jangan terlalu banyak minum alkohol."
            }, {
                question: "毎日 漢字を 練習する ______ して います。",
                options: ["ように", "ことに", "ために", "ので"],
                answer: "ように",
                translation: "Saya mengusahakan untuk berlatih kanji setiap hari. (Youni shite iru menunjukkan upaya)."
            }, {
                question: "大学を 卒業した ______ 、会社を 作りたいです。",
                options: ["あとで", "まえに", "うちに", "ながら"],
                answer: "あとで",
                translation: "Setelah lulus universitas, saya ingin mendirikan perusahaan."
            }, {
                question: "道が 込んで いますね。約束の 時間に ______ そうです。",
                options: ["遅れ", "遅れる", "遅れて", "遅れた"],
                answer: "遅れ",
                translation: "Jalannya macet ya. Sepertinya akan terlambat dari waktu yang dijanjikan. (Sou da untuk tanda-tanda kejadian)."
            }, {
                question: "あの 人は ケーキを 10個も 食べた ______ です。",
                options: ["らしい", "よう", "そう", "みたい"],
                answer: "らしい",
                translation: "Katanya orang itu makan sampai 10 buah kue. (Rashii untuk informasi dari sumber lain)."
            }, {
                question: "そんなに 食べ ______ 、おなかが 痛くなりますよ。",
                options: ["すぎると", "すぎれば", "すぎたら", "すぎても"],
                answer: "すぎると",
                translation: "Kalau makan terlalu banyak seperti itu, perutmu bakal sakit lho. (To untuk hasil yang pasti terjadi)."
            }, {
                question: "先生、お荷物を ______ しましょうか。",
                options: ["お持ち", "お持ちになり", "持たれ", "持たせ"],
                answer: "お持ち",
                translation: "Guru, bolehkah saya bawakan barang bawaan Anda? (Kenjougo untuk menawarkan bantuan)."
            }, {
                question: "この ペンは とても 書き ______ です。",
                options: ["やすい", "にくい", "すぎる", "かた"],
                answer: "やすい",
                translation: "Pena ini sangat mudah digunakan untuk menulis."
            }, {
                question: "昨日、財布を 盗まれて ______ ました。",
                options: ["しまい", "おき", "み", "あり"],
                answer: "しまい",
                translation: "Kemarin, dompet saya tercuri (dan saya menyesal/sedih). (~te shimau untuk kejadian yang tidak diinginkan)."
            }, {
                question: "窓を 開けると、涼しい 風が 入って ______ ました。",
                options: ["き", "いき", "み", "おき"],
                answer: "き",
                translation: "Begitu jendela dibuka, angin sejuk masuk (menuju ke arah pembicara)."
            }, {
                question: "これからも 日本語の 勉強を 続けて ______ つもりです。",
                options: ["いき", "き", "み", "おき"],
                answer: "いき",
                translation: "Mulai sekarang pun saya berniat untuk terus melanjutkan belajar bahasa Jepang. (~te iku untuk masa depan)."
            }, {
                question: "電気が 消えて います。だれも 部屋に ______ ようです。",
                options: ["いない", "いないの", "いないだ", "いないな"],
                answer: "いない",
                translation: "Lampunya mati. Sepertinya tidak ada siapa pun di kamar."
            }, {
                question: "レポートを 書く ______ 、3時間も かかりました。",
                options: ["のに", "ので", "ために", "ように"],
                answer: "のに",
                translation: "Untuk menulis laporan saja memakan waktu sampai 3 jam. (No ni menunjukkan penggunaan sumber daya/waktu)."
            }, {
                question: "お金を 払った ______ 、商品が 届きません。",
                options: ["のに", "ので", "から", "けれど"],
                answer: "のに",
                translation: "Padahal sudah bayar uangnya, tapi barangnya tidak sampai."
            }, {
                question: "社長は もう ______ ました。",
                options: ["お休みになり", "お休みし", "休まれ", "休ませ"],
                answer: "お休みになり",
                translation: "Presiden Direktur sudah beristirahat/tidur. (Sonkeigo o + stem + ni naru)."
            }, {
                question: "この 料理は 砂糖が たくさん 入って いる ______ 甘いです。",
                options: ["ので", "のに", "から", "でも"],
                answer: "ので",
                translation: "Karena masakan ini banyak gulanya, rasanya manis."
            }, {
                question: "試験が 始まる ______ 、静かに して ください。",
                options: ["まえに", "あとで", "うちに", "ながら"],
                answer: "まえに",
                translation: "Tolong tenang sebelum ujian dimulai."
            }, {
                question: "あそこに 山田さんが ______ います。",
                options: ["立って", "立てて", "立たせて", "立たられ"],
                answer: "立って",
                translation: "Yamada-san sedang berdiri di sana. (Tatsu adalah kata kerja intransitif)."
            }, {
                question: "花瓶を 机の 上に ______ ました。",
                options: ["置いて", "置いてあり", "置いておき", "置いてしまい"],
                answer: "置いて",
                translation: "Saya meletakkan vas bunga di atas meja. (Oku adalah kata kerja transitif)."
            }, {
                question: "明日、雨が ______ 、ピクニックには 行きません。",
                options: ["ふったら", "ふれば", "ふると", "ふるなら"],
                answer: "ふったら",
                translation: "Kalau besok hujan, saya tidak akan pergi piknik."
            }, {
                question: "田中さんは 私に 日本語を 教えて ______ ました。",
                options: ["くれ", "あげ", "もらい", "やり"],
                answer: "くれ",
                translation: "Tanaka-san mengajari saya bahasa Jepang. (Kureru jika orang lain melakukan sesuatu untuk pembicara)."
            }, {
                question: "私は 田中さんに 料理を 作って ______ ました。",
                options: ["あげ", "くれ", "さしあげ", "やり"],
                answer: "あげ",
                translation: "Saya memasakkan makanan untuk Tanaka-san."
            }, {
                question: "日本へ 来てから、納豆が 食べられる ______ ました。",
                options: ["ように なり", "ことに なり", "ように し", "ことに し"],
                answer: "ように なり",
                translation: "Semenjak datang ke Jepang, saya menjadi bisa makan Natto. (Perubahan kemampuan)."
            }, {
                question: "健康の ために、毎日 走る ______ して います。",
                options: ["ことに", "ように", "ために", "ので"],
                answer: "ことに",
                translation: "Saya memutuskan (sebagai kebiasaan) untuk lari setiap hari."
            }, {
                question: "そんなに 難しければ、無理に しなくても ______ ですよ。",
                options: ["いい", "だめ", "いけない", "ならない"],
                answer: "いい",
                translation: "Kalau sesulit itu, tidak dilakukan dengan paksa pun tidak apa-apa kok."
            }, {
                question: "教室では 辞書を ______ は いけません。",
                options: ["使って", "使う", "使わ", "使え"],
                answer: "使って",
                translation: "Di kelas tidak boleh menggunakan kamus. (Te wa ikemasen untuk larangan)."
            }, {
                question: "日曜日は 買い物を したり、映画を ______ します。",
                options: ["見たり", "見て", "見", "見たら"],
                answer: "見たり",
                translation: "Hari Minggu saya melakukan hal-hal seperti belanja dan menonton film."
            }, {
                question: "ラジオを ______ ながら 勉強します。",
                options: ["聞き", "聞く", "聞いて", "聞か"],
                answer: "聞き",
                translation: "Belajar sambil mendengarkan radio."
            }, {
                question: "この 部屋は 狭くて ______ です。",
                options: ["使いにくい", "使いやすい", "使いすぎ", "使いかた"],
                answer: "使いにくい",
                translation: "Kamar ini sempit sehingga sulit digunakan."
            }, {
                question: "甘い ものを 食べ ______ て、太って しまいました。",
                options: ["すぎ", "はじめ", "おわり", "つづけ"],
                answer: "すぎ",
                translation: "Karena terlalu banyak makan makanan manis, saya jadi gemuk."
            }, {
                question: "漢字を 書き ______ ました。全部で 100個です。",
                options: ["終わり", "出し", "始め", "続け"],
                answer: "終わり",
                translation: "Saya sudah selesai menulis kanji. Totalnya 100 buah."
            }, {
                question: "赤ちゃんが 急に 泣き ______ ました。",
                options: ["出し", "始め", "終わり", "続け"],
                answer: "出し",
                translation: "Bayi tiba-tiba mulai menangis. (Dasu untuk aksi tiba-tiba)."
            }, {
                question: "雨が 降って います ______ 、傘を 貸して ください。",
                options: ["から", "ので", "のに", "でも"],
                answer: "から",
                translation: "Karena sedang hujan, tolong pinjamkan payung. (Kara cocok untuk permintaan personal)."
            }, {
                question: "冷めない ______ 早く 食べて ください。",
                options: ["うちに", "あいだに", "ながら", "までに"],
                answer: "うちに",
                translation: "Tolong segera dimakan selagi belum dingin."
            }, {
                question: "彼が 日本人 ______ ことを 知りませんでした。",
                options: ["だという", "という", "なという", "である"],
                answer: "だという",
                translation: "Saya tidak tahu bahwa dia adalah orang Jepang."
            }, {
                question: "田中さんに 私の 部屋を 掃除 ______ ました。",
                options: ["させられ", "させ", "られ", "させさせ"],
                answer: "させられ",
                translation: "Saya dipaksa membersihkan kamar oleh Tanaka-san. (Kausatif-Pasif)."
            }, {
                question: "すみません、ここで 本を 読ませて ______ か。",
                options: ["いただけません", "あげません", "やりません", "くださいません"],
                answer: "いただけません",
                translation: "Mohon maaf, bolehkah saya minta izin membaca buku di sini?"
            }, {
                question: "もし 時間が ______ 、手伝って ください。",
                options: ["あったら", "あれば", "あると", "あるなら"],
                answer: "あったら",
                translation: "Jika ada waktu, tolong bantu saya."
            }, {
                question: "いくら 練習 ______ 、上手になりません。",
                options: ["しても", "すれば", "したら", "すると"],
                answer: "しても",
                translation: "Berapa kali pun berlatih, tetap tidak jadi mahir."
            }, {
                question: "日本へ 行く ______ 、着物を 買いたいです。",
                options: ["なら", "たら", "ば", "と"],
                answer: "なら",
                translation: "Kalau soal pergi ke Jepang, saya ingin beli Kimono. (Nara untuk saran/topik)."
            }, {
                question: "この ボタンを 押す ______ 、切符が 出ます。",
                options: ["と", "なら", "ば", "たら"],
                answer: "と",
                translation: "Begitu menekan tombol ini, tiketnya akan keluar. (To untuk hasil mekanis)."
            }, {
                question: "もっと 勉強 ______ 、合格できますよ。",
                options: ["すれば", "すると", "したなら", "したら"],
                answer: "すれば",
                translation: "Kalau lebih banyak belajar, kamu pasti bisa lulus lho."
            }, {
                question: "もう 10時 ______ 、早く 寝なさい。",
                options: ["だから", "なので", "なのに", "から"],
                answer: "だから",
                translation: "Karena sudah jam 10, cepatlah tidur! (Dakara untuk instruksi kuat)."
            }
        ],
        "bunpou-composition": [{
                question: "雨が ______ ______ __★__ ______ ませんでした。",
                options: ["ので", "降った", "テニスは", "し"],
                answer: "テニスは",
                correctOrder: [2, 1, 3, 4], // 降った ので テニスは し
                translation: "Karena sudah turun hujan, saya tidak bermain tenis."
            }, {
                question: "一生懸命 ______ ______ __★__ ______ 悪かったです。",
                options: ["のに", "テストの", "勉強した", "点が"],
                answer: "点が",
                correctOrder: [3, 1, 2, 4], // 勉強した のに テストの 点が
                translation: "Padahal sudah belajar mati-matian, nilai ujiannya buruk."
            }, {
                question: "駅に ______ ______ __★__ ______ 行って しまいました。",
                options: ["電車が", "すぐ", "つくと", "もう"],
                answer: "もう",
                correctOrder: [3, 2, 4, 1], // つくと すぐ もう 電車が
                translation: "Begitu sampai di stasiun, keretanya sudah langsung berangkat."
            }, {
                question: "日本へ ______ ______ __★__ ______ 買いました。",
                options: ["カメラを", "行く", "まえに", "新しい"],
                answer: "カメラを",
                correctOrder: [2, 3, 4, 1], // 行く まえに 新しい カメラを
                translation: "Sebelum pergi ke Jepang, saya membeli kamera baru."
            }, {
                question: "母に ______ ______ __★__ ______ ました。",
                options: ["買い物に", "行かされ", "無理やり", "外へ"],
                answer: "行かされ",
                correctOrder: [3, 4, 1, 2], // 無理やり 外へ 買い物に 行かされ
                translation: "Saya dipaksa pergi keluar berbelanja oleh ibu."
            }, {
                question: "将来 ______ ______ __★__ ______ います。",
                options: ["ために", "貯金して", "家を", "買う"],
                answer: "家を",
                correctOrder: [4, 1, 3, 2], // 買う ために 家を 貯金して
                translation: "Demi membeli rumah di masa depan, saya sedang menabung."
            }, {
                question: "先生は ______ ______ __★__ ______ おっしゃいました。",
                options: ["と", "さっき", "会議に", "出られない"],
                answer: "出られない",
                correctOrder: [2, 3, 1, 4], // さっき 会議に 出られない と
                translation: "Guru tadi berkata bahwa beliau tidak bisa hadir di rapat."
            }, {
                question: "もっと ______ ______ __★__ ______ なりますよ。",
                options: ["すれば", "上手に", "練習を", "もっと"],
                answer: "上手に",
                correctOrder: [4, 3, 1, 2], // もっと 練習を すれば 上手に
                translation: "Kalau lebih banyak berlatih, kamu akan jadi mahir lho."
            }, {
                question: "この 本は ______ ______ __★__ ______ です。",
                options: ["とても", "読み", "にくい", "難しいので"],
                answer: "にくい",
                correctOrder: [4, 1, 2, 3], // 難しいので とても 読み にくい
                translation: "Karena sulit, buku ini sangat susah dibaca."
            }, {
                question: "財布を ______ ______ __★__ ______ ました。",
                options: ["盗まれて", "電車の中で", "だれかに", "しまい"],
                answer: "しまい",
                correctOrder: [2, 3, 1, 4], // 電車の中で だれかに 盗まれて しまい
                translation: "Dompet saya (tak sengaja) tercuri oleh seseorang di dalam kereta."
            }, {
                question: "昨日 ______ ______ __★__ ______ ます。",
                options: ["読んで", "買った", "おき", "本を"],
                answer: "おき",
                correctOrder: [2, 4, 1, 3], // 買った 本を 読んで おき
                translation: "Saya akan membaca dulu buku yang saya beli kemarin."
            }, {
                question: "田中さんは ______ ______ __★__ ______ そうです。",
                options: ["仕事が", "忙しい", "来る", "らしく"],
                answer: "らしく",
                correctOrder: [1, 2, 4, 3], // 仕事が 忙しい らしく 来る
                translation: "Sepertinya Tanaka-san sibuk dengan pekerjaan sehingga tidak datang."
            }, {
                question: "風邪を ______ ______ __★__ ______ います。",
                options: ["セーターを", "ひかない", "着て", "ように"],
                answer: "着て",
                correctOrder: [2, 4, 1, 3], // ひかない ように セーターを 着て
                translation: "Saya memakai sweter agar tidak masuk angin."
            }, {
                question: "空が ______ ______ __★__ ______ そうです。",
                options: ["暗く", "雨が", "降り", "なったので"],
                answer: "降り",
                correctOrder: [1, 4, 2, 3], // 暗く なったので 雨が 降り
                translation: "Karena sudah menjadi gelap, sepertinya akan turun hujan."
            }, {
                question: "社長は ______ ______ __★__ ______ ました。",
                options: ["もう", "お帰りに", "会議室を", "なり"],
                answer: "なり",
                correctOrder: [3, 1, 2, 4], // 会議室を もう お帰りに なり
                translation: "Presiden direktur sudah meninggalkan (pulang dari) ruang rapat."
            }, {
                question: "すみませんが ______ ______ __★__ ______ いただけませんか。",
                options: ["を", "教えて", "使いかた", "この辞書の"],
                answer: "を",
                correctOrder: [4, 3, 1, 2], // この辞書の 使いかた を 教えて
                translation: "Maaf, bolehkah Anda ajarkan cara menggunakan kamus ini?"
            }, {
                question: "甘い ______ ______ __★__ ______ しまいました。",
                options: ["食べ", "すぎて", "ものを", "太って"],
                answer: "太って",
                correctOrder: [3, 1, 2, 4], // ものを 食べ すぎて 太って
                translation: "Karena terlalu banyak makan makanan manis, saya jadi gemuk."
            }, {
                question: "先生が ______ ______ __★__ ______ ください。",
                options: ["通りに", "書いて", "言った", "そのまま"],
                answer: "そのまま",
                correctOrder: [3, 1, 4, 2], // 言った 通りに そのまま 書いて
                translation: "Tolong tuliskan persis sesuai dengan yang dikatakan guru."
            }, {
                question: "この ボタンを ______ ______ __★__ ______ 出ます。",
                options: ["お釣りが", "押すと", "すぐに", "強く"],
                answer: "すぐに",
                correctOrder: [4, 2, 3, 1], // 強く 押すと すぐに お釣りが
                translation: "Begitu menekan tombolnya dengan kuat, uang kembalian akan segera keluar."
            }, {
                question: "いくら ______ ______ __★__ ______ なりません。",
                options: ["練習", "しても", "上手に", "なかなか"],
                answer: "なかなか",
                correctOrder: [1, 2, 4, 3], // 練習 しても なかなか 上手に
                translation: "Berapa kali pun berlatih, tetap saja tidak kunjung mahir."
            }, {
                question: "明日 ______ ______ __★__ ______ 行きましょう。",
                options: ["海へ", "晴れたら", "いっしょに", "いい天気で"],
                answer: "いっしょに",
                correctOrder: [4, 2, 1, 3], // いい天気で 晴れたら 海へ いっしょに
                translation: "Kalau besok cuacanya bagus dan cerah, mari pergi ke laut bersama-sama."
            }, {
                question: "田中さんは ______ ______ __★__ ______ です。",
                options: ["はず", "いない", "いま", "家には"],
                answer: "いない",
                correctOrder: [3, 4, 2, 1], // いま 家には いない はず
                translation: "Tanaka-san seharusnya tidak ada di rumah sekarang."
            }, {
                question: "日本に ______ ______ __★__ ______ 住みたいです。",
                options: ["京都に", "うちに", "いる", "ぜひ"],
                answer: "京都に",
                correctOrder: [3, 2, 4, 1], // いる うちに ぜひ 京都に
                translation: "Selagi berada di Jepang, saya sangat ingin tinggal di Kyoto."
            }, {
                question: "窓が ______ ______ __★__ ______ います。",
                options: ["風を", "入れるために", "開けて", "あります"],
                answer: "開けて",
                correctOrder: [1, 2, 3, 4], // 風を 入れるために 開けて あります
                translation: "Jendela dibiarkan terbuka agar angin bisa masuk."
            }, {
                question: "先生に ______ ______ __★__ ______ ました。",
                options: ["褒められて", "とても", "嬉しかった", "テストを"],
                answer: "嬉しかった",
                correctOrder: [4, 1, 2, 3], // テストを 褒められて とても 嬉しかった
                translation: "Saya sangat senang karena dipuji ujiannya oleh guru."
            }, {
                question: "部屋を ______ ______ __★__ ______ ください。",
                options: ["掃除して", "前に", "だれかが", "来る"],
                answer: "掃除して",
                correctOrder: [3, 4, 2, 1], // だれかが 来る 前に 掃除して
                translation: "Tolong bersihkan kamar sebelum seseorang datang."
            }, {
                question: "この 料理は ______ ______ __★__ ______ あります。",
                options: ["たくさん", "砂糖が", "入れて", "あります"],
                answer: "入れて",
                correctOrder: [1, 2, 3, 4], // たkさん 砂糖が 入れて あります
                translation: "Masakan ini sudah dimasukkan banyak gula."
            }, {
                question: "昨日 ______ ______ __★__ ______ 忘れました。",
                options: ["すっかり", "ことを", "宿題を", "出す"],
                answer: "ことを",
                correctOrder: [3, 4, 2, 1], // 宿題を 出す ことを すっかり
                translation: "Saya benar-benar lupa mengumpulkan PR kemarin."
            }, {
                question: "田中さんは ______ ______ __★__ ______ います。",
                options: ["見ながら", "新聞を", "テレビを", "読んで"],
                answer: "読んで",
                correctOrder: [3, 1, 2, 4], // テレビを 見ながら 新聞を 読んで
                translation: "Tanaka-san sedang membaca koran sambil menonton TV."
            }, {
                question: "日本へ ______ ______ __★__ ______ します。",
                options: ["ことに", "行く", "留学に", "しました"],
                answer: "ことに",
                correctOrder: [3, 2, 1, 4], // 留学に 行く ことに しました
                translation: "Saya sudah memutuskan untuk pergi sekolah ke Jepang."
            }, {
                question: "道が ______ ______ __★__ ______ ました。",
                options: ["事故が", "あって", "遅れて", "込んで"],
                answer: "遅れて",
                correctOrder: [1, 2, 4, 3], // 事故が あって 込んで 遅れて
                translation: "Karena terjadi kecelakaan dan macet, saya jadi terlambat."
            }, {
                question: "大学へ ______ ______ __★__ ______ ました。",
                options: ["合格する", "ことが", "でき", "ました"],
                answer: "でき",
                correctOrder: [1, 2, 3, 4], // 合格する ことが でき ました
                translation: "Saya berhasil lulus masuk universitas."
            }, {
                question: "先生、何と ______ ______ __★__ ______ か。",
                options: ["か", "もう一度", "おっしゃい", "ました"],
                answer: "おっしゃい",
                correctOrder: [2, 3, 4, 1], // もう一度 おっしゃい ました か
                translation: "Guru, tadi bicara apa? Bisakah diulangi sekali lagi?"
            }, {
                question: "明日 ______ ______ __★__ ______ ます。",
                options: ["伺い", "宅へ", "10時に", "お"],
                answer: "お",
                correctOrder: [3, 2, 4, 1], // 10時に 宅へ お 伺い
                translation: "Besok saya akan berkunjung ke rumah (Anda) jam 10."
            }, {
                question: "仕事が ______ ______ __★__ ______ 帰りましょう。",
                options: ["終わったら", "すぐに", "みんなで", "いっしょに"],
                answer: "いっしょに",
                correctOrder: [1, 2, 3, 4], // 終わったら すぐに みんなで いっしょに
                translation: "Kalau pekerjaan sudah selesai, mari kita semua segera pulang bersama."
            }, {
                question: "あの 人は ______ ______ __★__ ______ みたいです。",
                options: ["日本に", "長く", "住んで", "いる"],
                answer: "住んで",
                correctOrder: [1, 2, 3, 4], // 日本に 長く 住んで いる
                translation: "Orang itu sepertinya sudah lama tinggal di Jepang."
            }, {
                question: "雨が ______ ______ __★__ ______ ください。",
                options: ["傘を", "持って", "降って", "いるから"],
                answer: "持って",
                correctOrder: [3, 4, 1, 2], // 降って いるから 傘を 持って
                translation: "Karena sedang turun hujan, tolong bawa payung."
            }, {
                question: "お酒を ______ ______ __★__ ______ します。",
                options: ["飲まない", "ことに", "決めて", "います"],
                answer: "ことに",
                correctOrder: [3, 1, 2, 4], // 健康のために 飲まない ことに 決めて
                translation: "Saya memutuskan untuk tidak minum alkohol demi kesehatan."
            }, {
                question: "電車が ______ ______ __★__ ______ です。",
                options: ["故障で", "止まって", "いる", "らしい"],
                answer: "いる",
                correctOrder: [1, 2, 3, 4], // 故障で 止まって いる らしい
                translation: "Katanya kereta berhenti karena kerusakan."
            }, {
                question: "漢字を ______ ______ __★__ ______ ました。",
                options: ["全部", "書き", "終わって", "しまい"],
                answer: "終わって",
                correctOrder: [1, 2, 3, 4], // 全部 書き 終わって しまい
                translation: "Saya benar-benar sudah selesai menulis semua kanji."
            }, {
                question: "赤ちゃんが ______ ______ __★__ ______ ました。",
                options: ["やっと", "眠り", "始め", "静かに"],
                answer: "始め",
                correctOrder: [4, 1, 2, 3], // 静かに やっと 眠り 始め
                translation: "Bayi akhirnya mulai tertidur dengan tenang."
            }, {
                question: "喉が ______ ______ __★__ ______ 飲みましょう。",
                options: ["何か", "渇いたので", "冷たい", "ものを"],
                answer: "冷たい",
                correctOrder: [2, 1, 3, 4], // 渇いたので 何か 冷たい ものを
                translation: "Karena haus, ayo minum sesuatu yang dingin."
            }, {
                question: "ここから ______ ______ __★__ ______ 見えます。",
                options: ["海が", "とても", "綺麗に", "はっきり"],
                answer: "綺麗に",
                correctOrder: [1, 2, 3, 4], // 海が とても 綺麗に はっきり
                translation: "Laut terlihat dengan sangat cantik dan jelas."
            }, {
                question: "田中さんは ______ ______ __★__ ______ います。",
                options: ["を", "探して", "新しい", "辞書"],
                answer: "新しい",
                correctOrder: [3, 4, 1, 2], // 新しい 辞書 を 探して
                translation: "Tanaka-san sedang mencari kamus baru."
            }, {
                question: "この 料理は ______ ______ __★__ ______ ですね。",
                options: ["砂糖が", "たくさん", "入っている", "みたい"],
                answer: "入っている",
                correctOrder: [1, 2, 3, 4], // 砂糖が たくさん 入っている みたい
                translation: "Masakan ini rasanya seperti ada banyak gulanya ya."
            }, {
                question: "明日の ______ ______ __★__ ______ ました。",
                options: ["会議は", "10時から", "ことに", "なりました"],
                answer: "ことに",
                correctOrder: [1, 2, 3, 4], // 会議は 10時から ことに なりました
                translation: "Sudah diputuskan bahwa rapat besok dimulai dari jam 10."
            }, {
                question: "母に ______ ______ __★__ ______ ました。",
                options: ["部屋を", "掃除", "させられ", "無理やり"],
                answer: "させられ",
                correctOrder: [4, 1, 2, 3], // 無理やり 部屋を 掃除 させられ
                translation: "Saya dipaksa membersihkan kamar oleh ibu."
            }, {
                question: "窓を ______ ______ __★__ ______ います。",
                options: ["風が", "涼しかった", "ので", "開けました"],
                answer: "ので",
                correctOrder: [1, 2, 3, 4], // 風が 涼しかった ので 開けました
                translation: "Karena anginnya sejuk, saya membuka jendelanya."
            }, {
                question: "一生懸命 ______ ______ __★__ ______ です。",
                options: ["はず", "合格する", "練習したので", "絶対に"],
                answer: "合格する",
                correctOrder: [3, 4, 2, 1], // 練習したので 絶対に 合格する はず
                translation: "Karena sudah berlatih mati-matian, pasti (seharusnya) lulus."
            }, {
                question: "日本へ ______ ______ __★__ ______ ました。",
                options: ["ことに", "行く", "決めて", "いました"],
                answer: "ことに",
                correctOrder: [2, 1, 3, 4], // 行く ことに 決めて いました
                translation: "Saya sudah memutuskan untuk pergi ke Jepang."
            }, {
                question: "昨日は ______ ______ __★__ ______ ありませんでした。",
                options: ["忙しかった", "ので", "どこへも", "行く時間が"],
                answer: "どこへも",
                correctOrder: [1, 2, 4, 3], // 忙しかった ので 行く時間が どこへも
                translation: "Karena kemarin sibuk, tidak ada waktu untuk pergi ke mana pun."
            }, {
                question: "先生に ______ ______ __★__ ______ 行きました。",
                options: ["お会いしに", "さっき", "研究室へ", "一人で"],
                answer: "研究室へ",
                correctOrder: [2, 4, 1, 3], // さっき 一人で お会いしに 研究室へ
                translation: "Tadi saya pergi sendirian ke ruang penelitian untuk bertemu guru."
            }, {
                question: "テレビを ______ ______ __★__ ______ ください。",
                options: ["前に", "消して", "寝る", "必ず"],
                answer: "消して",
                correctOrder: [4, 3, 1, 2], // 必ず 寝る 前に 消して
                translation: "Tolong pastikan matikan TV sebelum tidur."
            }, {
                question: "この 本は ______ ______ __★__ ______ かったです。",
                options: ["字が", "読み", "小さくて", "にく"],
                answer: "読み",
                correctOrder: [1, 3, 2, 4], // 字が 小さくて 読み にく
                translation: "Buku ini sulit dibaca karena hurufnya kecil."
            }, {
                question: "雨が ______ ______ __★__ ______ 行きましょう。",
                options: ["降って", "いても", "持って", "出かけましょう"],
                answer: "持って",
                correctOrder: [1, 2, 3, 4], // 降って いても 持って 出かけましょう
                translation: "Meskipun sedang hujan, mari keluar dengan membawa (payung)."
            }, {
                question: "田中さんは ______ ______ __★__ ______ います。",
                options: ["毎日", "練習して", "ピアノを", "3時間"],
                answer: "3時間",
                correctOrder: [1, 3, 4, 2], // 毎日 ピアノを 3時間 練習して
                translation: "Tanaka-san berlatih piano selama 3 jam setiap hari."
            }, {
                question: "危ないから ______ ______ __★__ ______ ください。",
                options: ["に", "触らない", "機械", "ようにして"],
                answer: "ようにして",
                correctOrder: [3, 1, 2, 4], // 機械 に 触らない ようにして
                translation: "Karena berbahaya, tolong usahakan untuk tidak menyentuh mesin."
            }, {
                question: "弟に ______ ______ __★__ ______ ました。",
                options: ["大切な", "壊されて", "辞書を", "しまい"],
                answer: "辞書を",
                correctOrder: [1, 3, 2, 4], // 大切な 辞書を 壊されて しまい
                translation: "Kamus berharga saya (tak sengaja) dirusak oleh adik."
            }, {
                question: "社長は ______ ______ __★__ ______ ました。",
                options: ["もう", "お辞めに", "仕事を", "なり"],
                answer: "なり",
                correctOrder: [3, 1, 2, 4], // 仕事を もう お辞めに なり
                translation: "Presiden direktur sudah (memutuskan untuk) berhenti dari pekerjaannya."
            }, {
                question: "日本に ______ ______ __★__ ______ 思って います。",
                options: ["つもりだと", "留学する", "ずっと", "前から"],
                answer: "つもりだと",
                correctOrder: [4, 3, 2, 1], // 前から ずっと 留学する つもりだと
                translation: "Sejak dulu saya sudah berniat untuk sekolah ke Jepang."
            }, {
                question: "道が ______ ______ __★__ ______ です。",
                options: ["らしい", "事故が", "あった", "込んでいたのは"],
                answer: "あった",
                correctOrder: [4, 2, 3, 1], // 込んでいたのは 事故が あった らしい
                translation: "Katanya (jalanan) macet tadi karena ada kecelakaan."
            }, {
                question: "もっと ______ ______ __★__ ______ なりますよ。",
                options: ["野菜を", "ようにすれば", "食べる", "健康に"],
                answer: "ようにすれば",
                correctOrder: [1, 3, 2, 4], // 野菜を 食べる ようにすれば 健康に
                translation: "Kalau kamu membiasakan makan lebih banyak sayur, kamu akan jadi sehat lho."
            }, {
                question: "先生に ______ ______ __★__ ______ ました。",
                options: ["褒められて", "テストを", "とても", "嬉しかった"],
                answer: "嬉しかった",
                correctOrder: [2, 1, 3, 4], // テストを 褒められて とても 嬉しかった
                translation: "Saya sangat senang karena dipuji ujiannya oleh guru."
            }, {
                question: "会議室に ______ ______ __★__ ______ おいて ください。",
                options: ["資料を", "椅子と", "並べて", "きちんと"],
                answer: "並べて",
                correctOrder: [2, 1, 4, 3], // 椅子と 資料を きちんと 並べて
                translation: "Tolong susun kursi dan dokumen dengan rapi di ruang rapat."
            }, {
                question: "喉が ______ ______ __★__ ______ 飲みましょう。",
                options: ["何か", "冷たい", "渇いたので", "ものを"],
                answer: "冷たい",
                correctOrder: [3, 1, 2, 4], // 渇いたので 何か 冷たい ものを
                translation: "Karena haus, ayo minum sesuatu yang dingin."
            }, {
                question: "窓を ______ ______ __★__ ______ ください。",
                options: ["開けない", "寒いから", "絶対に", "ように"],
                answer: "絶対に",
                correctOrder: [2, 3, 1, 4], // 寒いから 絶対に 開けない ように
                translation: "Karena dingin, pastikan (tolong) jangan buka jendelanya."
            }, {
                question: "田中さんは ______ ______ __★__ ______ います。",
                options: ["探して", "を", "新しい", "カメラ"],
                answer: "新しい",
                correctOrder: [3, 4, 2, 1], // 新しい カメラ を 探して
                translation: "Tanaka-san sedang mencari kamera baru."
            }, {
                question: "昨日 ______ ______ __★__ ______ ました。",
                options: ["ことに", "学校を", "休む", "なり"],
                answer: "なり",
                correctOrder: [2, 3, 1, 4], // 学校を 休む ことに なり
                translation: "Kemarin diputuskan bahwa saya meliburkan diri dari sekolah."
            }, {
                question: "あまり ______ ______ __★__ ______ ほうが いいですよ。",
                options: ["いない", "夜", "遅くまで", "起きて"],
                answer: "遅くまで",
                correctOrder: [2, 3, 4, 1], // 夜 遅くまで 起きて いない
                translation: "Lebih baik jangan terjaga sampai larut malam."
            }, {
                question: "この 料理は ______ ______ __★__ ______ 美味しいです。",
                options: ["安くて", "量も", "多いし", "とても"],
                answer: "とても",
                correctOrder: [1, 2, 3, 4], // 安くて 量も 多いし とても
                translation: "Masakan ini murah, porsinya banyak, dan sangat enak."
            }, {
                question: "田中さんに ______ ______ __★__ ______ ました。",
                options: ["案内して", "駅まで", "道を", "もらい"],
                answer: "道を",
                correctOrder: [2, 3, 1, 4], // 駅まで 道を 案内して もらい
                translation: "Saya minta tolong ditunjukkan jalan sampai stasiun oleh Tanaka-san."
            }, {
                question: "家へ ______ ______ __★__ ______ 降って きました。",
                options: ["途中で", "帰る", "雨が", "急に"],
                answer: "雨が",
                correctOrder: [2, 1, 4, 3], // 帰る 途中で 急に 雨が
                translation: "Di tengah jalan pulang, tiba-tiba hujan turun."
            }, {
                question: "日本語を ______ ______ __★__ ______ 思います。",
                options: ["なりたいと", "使って", "通訳に", "将来"],
                answer: "通訳に",
                correctOrder: [4, 2, 3, 1], // 将来 使って 通訳に なりたいと
                translation: "Saya berpikir ingin menjadi penerjemah dengan menggunakan (bahasa Jepang) di masa depan."
            }, {
                question: "この 電車は ______ ______ __★__ ______ です。",
                options: ["止まらない", "急行ですから", "駅には", "小さい"],
                answer: "駅には",
                correctOrder: [2, 4, 3, 1], // 急行ですから 小さい 駅には 止まらない
                translation: "Karena ini kereta cepat, tidak berhenti di stasiun kecil."
            }, {
                question: "すみませんが ______ ______ __★__ ______ いただけませんか。",
                options: ["を", "写真", "撮って", "一枚"],
                answer: "撮って",
                correctOrder: [2, 4, 1, 3], // 写真 一枚 を 撮って
                translation: "Maaf, bolehkah saya minta tolong Anda ambilkan satu foto?"
            }, {
                question: "先生、______ ______ __★__ ______ か。",
                options: ["おっしゃい", "何と", "さっき", "ました"],
                answer: "おっしゃい",
                correctOrder: [3, 2, 1, 4], // さっき 何と おっしゃい ました
                translation: "Guru, tadi bicara apa?"
            }, {
                question: "明日 ______ ______ __★__ ______ ます。",
                options: ["伺い", "宅へ", "10時に", "お"],
                answer: "お",
                correctOrder: [3, 2, 4, 1], // 10時に 宅へ お 伺い
                translation: "Besok saya akan berkunjung ke rumah (Anda) jam 10."
            }, {
                question: "仕事が ______ ______ __★__ ______ 疲れました。",
                options: ["忙しすぎて", "最近", "少し", "とても"],
                answer: "とても",
                correctOrder: [2, 3, 1, 4], // 最近 少し 忙しすぎて とても
                translation: "Akhir-akhir ini saya sangat lelah karena sedikit terlalu sibuk bekerja."
            }, {
                question: "冷めない ______ ______ __★__ ______ ください。",
                options: ["うちに", "早く", "温かい", "食べて"],
                answer: "温かい",
                correctOrder: [3, 1, 2, 4], // 温かい うちに 早く 食べて
                translation: "Tolong segera dimakan selagi masih hangat."
            }, {
                question: "田中さんは ______ ______ __★__ ______ です。",
                options: ["いない", "独身", "はず", "なので"],
                answer: "独身",
                correctOrder: [2, 4, 1, 3], // 独身 なので いない はず
                translation: "Karena masih lajang, seharusnya tidak (ada pasangan/menikah)."
            }, {
                question: "いくら ______ ______ __★__ ______ なりません。",
                options: ["練習", "しても", "上手には", "なかなか"],
                answer: "なかなか",
                correctOrder: [1, 2, 4, 3], // 練習 しても なかなか 上手には
                translation: "Berapa kali pun berlatih, tetap saja tidak kunjung mahir."
            }, {
                question: "毎日 ______ ______ __★__ ______ しています。",
                options: ["練習する", "ように", "忘れない", "10個ずつ"],
                answer: "ように",
                correctOrder: [3, 4, 1, 2], // 忘れない 10個ずつ 練習する ように
                translation: "Saya membiasakan berlatih 10 kanji setiap hari agar tidak lupa."
            }, {
                question: "母に ______ ______ __★__ ______ ました。",
                options: ["無理やり", "掃除", "させられ", "部屋を"],
                answer: "させられ",
                correctOrder: [1, 4, 2, 3], // 無理やり 部屋を 掃除 させられ
                translation: "Saya dipaksa membersihkan kamar oleh ibu."
            }, {
                question: "雨が ______ ______ __★__ ______ 出かけましょう。",
                options: ["止んだら", "いっしょに", "すぐに", "買い物へ"],
                answer: "すぐに",
                correctOrder: [1, 3, 2, 4], // 止んだら すぐに いっしょに 買い物へ
                translation: "Begitu hujan berhenti, mari segera pergi belanja bersama."
            }, {
                question: "この ボタンを ______ ______ __★__ ______ 出ます。",
                options: ["お釣りが", "押すと", "すぐに", "ここから"],
                answer: "すぐに",
                correctOrder: [2, 3, 4, 1], // 押すと すぐに ここから お釣りが
                translation: "Begitu menekan tombolnya, uang kembalian akan segera keluar dari sini."
            }, {
                question: "日本へ ______ ______ __★__ ______ です。",
                options: ["つもり", "留学する", "ずっと", "考えていた"],
                answer: "留学する",
                correctOrder: [3, 4, 2, 1], // ずっと 考えていた 留学する つもり
                translation: "Saya berniat sekolah ke Jepang, hal yang sudah lama saya pikirkan."
            }, {
                question: "空が ______ ______ __★__ ______ そうです。",
                options: ["暗く", "雨が", "降り", "なったので"],
                answer: "降り",
                correctOrder: [1, 4, 2, 3], // 暗く なったので 雨が 降り
                translation: "Karena sudah menjadi gelap, sepertinya akan turun hujan."
            }, {
                question: "道が ______ ______ __★__ ______ ました。",
                options: ["込んで", "事故で", "遅れて", "いたので"],
                answer: "遅れて",
                correctOrder: [2, 1, 4, 3], // 事故で 込んで いたので 遅れて
                translation: "Karena macet akibat kecelakaan, saya jadi terlambat."
            }, {
                question: "先生が ______ ______ __★__ ______ ください。",
                options: ["通りに", "書いて", "言った", "そのまま"],
                answer: "そのまま",
                correctOrder: [3, 1, 4, 2], // 言った 通りに そのまま 書いて
                translation: "Tolong tuliskan persis sesuai dengan yang dikatakan guru."
            }, {
                question: "喉が ______ ______ __★__ ______ です。",
                options: ["渇いたので", "冷たい", "飲みたい", "ものを"],
                answer: "飲みたい",
                correctOrder: [1, 2, 4, 3], // 渇いたので 冷たい ものを 飲みたい
                translation: "Karena haus, saya ingin minum sesuatu yang dingin."
            }, {
                question: "部屋を ______ ______ __★__ ______ ください。",
                options: ["掃除して", "前に", "だれかが", "来る"],
                answer: "掃除して",
                correctOrder: [3, 4, 2, 1], // だれかが 来る 前に 掃除して
                translation: "Tolong bersihkan kamar sebelum seseorang datang."
            }, {
                question: "田中さんは ______ ______ __★__ ______ います。",
                options: ["を", "探して", "新しい", "辞書"],
                answer: "新しい",
                correctOrder: [3, 4, 1, 2], // 新しい 辞書 を 探して
                translation: "Tanaka-san sedang mencari kamus baru."
            }, {
                question: "1週間に ______ ______ __★__ ______ します。",
                options: ["を", "テニス", "2回ほど", "公園で"],
                answer: "テニス",
                correctOrder: [4, 3, 2, 1], // 公園で 2回ほど テニス を
                translation: "Bermain tenis sekitar 2 kali dalam seminggu di taman."
            }, {
                question: "この 料理は ______ ______ __★__ ______ あります。",
                options: ["たくさん", "砂糖が", "入れて", "あります"],
                answer: "入れて",
                correctOrder: [1, 2, 3, 4], // たくさん 砂糖が 入れて あります
                translation: "Masakan ini sudah dimasukkan banyak gula."
            }, {
                question: "昨日は ______ ______ __★__ ______ ました。",
                options: ["ことに", "学校を", "休む", "なり"],
                answer: "なり",
                correctOrder: [2, 3, 1, 4], // 学校を 休む ことに なり
                translation: "Kemarin diputuskan bahwa saya meliburkan diri dari sekolah."
            }, {
                question: "先生に ______ ______ __★__ ______ ました。",
                options: ["褒められて", "とても", "嬉しかった", "テストを"],
                answer: "嬉しかった",
                correctOrder: [4, 1, 2, 3], // テストを 褒められて とても 嬉しかった
                translation: "Saya sangat senang karena dipuji ujiannya oleh guru."
            }, {
                question: "日本語を ______ ______ __★__ ______ います。",
                options: ["勉強", "毎日", "3時間", "して"],
                answer: "3時間",
                correctOrder: [2, 3, 1, 4], // 毎日 3時間 勉強 して
                translation: "Saya belajar bahasa Jepang selama 3 jam setiap hari."
            }, {
                question: "駅から ______ ______ __★__ ______ かかります。",
                options: ["家まで", "歩いて", "分", "15"],
                answer: "15",
                correctOrder: [1, 2, 4, 3], // 家まで 歩いて 15 分
                translation: "Memakan waktu 15 menit berjalan kaki dari stasiun sampai ke rumah."
            }, {
                question: "この ______ ______ __★__ ______ 綺麗ですね。",
                options: ["は", "いつも", "公園", "掃除されて"],
                answer: "掃除されて",
                correctOrder: [3, 1, 2, 4], // 公園 は いつも 掃除されて
                translation: "Taman ini selalu dibersihkan dan cantik ya."
            }, {
                question: "田中さんは ______ ______ __★__ ______ います。",
                options: ["を", "磨いて", "いま", "歯"],
                answer: "磨いて",
                correctOrder: [3, 4, 1, 2], // いま 歯 を 磨いて
                translation: "Tanaka-san sekarang sedang menggosok gigi."
            }
        ],
        "bunpou-text": [
            // TEKS 1: コンビニの アルバイト (Kerja Paruh Waktu di Konbini)
            {
                passage: "私は 去年から コンビニで アルバイトを [ 1 ] います。最初は 日本語が わからなくて 大変でしたが、最近は [ 2 ] ました。お客さんに 敬語を [ 3 ] ければなりません。仕事は 忙しい [ 4 ] 、いろいろな 人に 会えるので [ 5 ] です。",
                questionId: "1",
                options: ["して", "しに", "する", "した"],
                answer: "して",
                translation: "Bentuk ~te iru untuk menyatakan pekerjaan yang masih berlangsung."
            }, {
                passage: "私は 去年から コンビニで アルバイトを [ 1 ] います。最初は 日本語が わからなくて 大変でしたが、最近は [ 2 ] ました。お客さんに 敬語を [ 3 ] ければなりません。仕事は 忙しい [ 4 ] 、いろいろな 人に 会えるので [ 5 ] です。",
                questionId: "2",
                options: ["慣れ", "慣れて", "慣れる", "慣れた"],
                answer: "慣れ",
                translation: "Bentuk lampau (nare-mashita): Sudah terbiasa."
            }, {
                passage: "私は 去年から コンビニ dengan アルバイトを [ 1 ] います。最初は 日本語が わからなくて 大変でしたが、最近は [ 2 ] ました。お客さんに 敬語を [ 3 ] ければなりません。仕事は 忙しい [ 4 ] 、いろいろな 人に 会えるので [ 5 ] です。",
                questionId: "3",
                options: ["話さな", "話して", "話し", "話す"],
                answer: "話さな",
                translation: "Pola ~nakereba narimasen (harus): Harus berbicara (keigo)."
            }, {
                passage: "私は 去年から コンビニで アルバイトを [ 1 ] います。最初は 日本語が わからなくて 大変でしたが、最近は [ 2 ] ました。お客さんに 敬語を [ 3 ] ければなりません。仕事は 忙しい [ 4 ] 、いろいろな 人に 会えるので [ 5 ] です。",
                questionId: "4",
                options: ["ですが", "ので", "から", "のに"],
                answer: "ですが",
                translation: "Kata sambung pertentangan: (Sibuk) tetapi..."
            }, {
                passage: "私は 去年から コンビニで アルバイトを [ 1 ] います。最初は 日本語が わからなくて 大変でしたが、最近は [ 2 ] ました。お客さんに 敬語を [ 3 ] ければなりません。仕事は 忙しい [ 4 ] 、いろいろな 人に 会えるので [ 5 ] です。",
                questionId: "5",
                options: ["楽しい", "楽しかった", "楽しくて", "楽しみ"],
                answer: "楽しい",
                translation: "Mendeskripsikan perasaan saat ini: Menyenangkan."
            },

            // TEKS 2: 環境に ついて (Tentang Lingkungan)
            {
                passage: "最近、ゴミの 問題が [ 6 ] なって います。私たちは ゴミを [ 7 ] ように しなければなりません。スーパーへ 行く ときは、自分の バッグを [ 8 ] 行きましょう。一人ひとりが 気を [ 9 ] 、世界は もっと [ 10 ] なるはずです。",
                questionId: "6",
                options: ["大変に", "大切に", "自由に", "上手に"],
                answer: "大変に",
                translation: "Menunjukkan kondisi yang menjadi serius/sulit."
            }, {
                passage: "最近、ゴミの 問題が [ 6 ] なって います。私たちは ゴミを [ 7 ] ように しなければなりません。スーパーへ 行く ときは、自分の バッグを [ 8 ] 行きましょう。一人ひとりが 気を [ 9 ] 、世界は もっと [ 10 ] なるはずです。",
                questionId: "7",
                options: ["減らす", "減らした", "減らさない", "減らせ"],
                answer: "減らす",
                translation: "Pola ~youni suru (berusaha untuk): Berusaha mengurangi sampah."
            }, {
                passage: "最近、ゴミの 問題が [ 6 ] なって います。私たちは ゴミを [ 7 ] ように しなければなりません。スーパーへ 行く ときは、自分の バッグを [ 8 ] 行きましょう。一人ひとりが 気を [ 9 ] 、世界は もっと [ 10 ] なるはずです。",
                questionId: "8",
                options: ["持って", "持たせて", "持たれて", "持たず"],
                answer: "持って",
                translation: "Menghubungkan dua aksi: Membawa tas lalu pergi."
            }, {
                passage: "最近、ゴミの 問題が [ 6 ] なって います。私たちは ゴミを [ 7 ] ように しなければなりません。スーパーへ 行く ときは、自分の バッグを [ 8 ] 行きましょう。一人ひとりが 気を [ 9 ] 、世界は もっと [ 10 ] なるはずです。",
                questionId: "9",
                options: ["つければ", "つけると", "つけたら", "つけるなら"],
                answer: "つければ",
                translation: "Bentuk pengandaian ~ba: Jika setiap orang berhati-hati."
            }, {
                passage: "最近、ゴミの 問題が [ 6 ] なって います。私たちは ゴミを [ 7 ] ように しなければなりません。スーパーへ 行く ときは、自分の バッグを [ 8 ] 行きましょう。一人ひとりが 気を [ 9 ] 、世界は もっと [ 10 ] なるはずです。",
                questionId: "10",
                options: ["綺麗に", "綺麗な", "綺麗で", "綺麗だ"],
                answer: "綺麗に",
                translation: "Hasil perubahan (~naru): Menjadi bersih."
            },

            // TEKS 3: 健康の ために (Demi Kesehatan)
            {
                passage: "健康の ために、毎日 30分 [ 11 ] 走る ことに して います。あまり 忙しい ときは 走りませんが、[ 12 ] 続けようと 思って います。また、夜は 甘い ものを [ 13 ] ように 注意して います。体が [ 14 ] なると、仕事も [ 15 ] やすく なります。",
                questionId: "11",
                options: ["ぐらい", "ごろ", "しか", "まで"],
                answer: "ぐらい",
                translation: "Menunjukkan durasi/jangka waktu: Sekitar 30 menit."
            }, {
                passage: "健康の ために、毎日 30分 [ 11 ] 走る ことに して います。あまり 忙しい ときは 走りませんが、[ 12 ] 続けようと 思って います。また、夜は 甘い ものを [ 13 ] ように 注意して います。体が [ 14 ] なると、仕事も [ 15 ] やすく なります。",
                questionId: "12",
                options: ["できるだけ", "なかなか", "ぜんぜん", "すっかり"],
                answer: "できるだけ",
                translation: "Dia terus melakukan sebisa mungkin."
            }, {
                passage: "健康の ために、毎日 30分 [ 11 ] 走る ことに して います。あまり 忙しい ときは 走りませんが、[ 12 ] 続けようと 思って います。また、夜は 甘い ものを [ 13 ] ように 注意して います。体が [ 14 ] なると、仕事も [ 15 ] やすく なります。",
                questionId: "13",
                options: ["食べない", "食べて", "食べ", "食べた"],
                answer: "食べない",
                translation: "Pola ~youni chuui suru (hati-hati agar tidak): Tidak makan yang manis."
            }, {
                passage: "健康の ために、毎日 30分 [ 11 ] 走る ことに して います。あまり 忙しい ときは 走りませんが、[ 12 ] 続けようと 思って います。また、夜は 甘い ものを [ 13 ] ように 注意して います。体が [ 14 ] なると、仕事も [ 15 ] やすく なります。",
                questionId: "14",
                options: ["丈夫に", "丈夫な", "丈夫で", "丈夫だ"],
                answer: "丈夫に",
                translation: "Hasil perubahan: Tubuh menjadi kuat/sehat."
            }, {
                passage: "健康の ために、毎日 30分 [ 11 ] 走る ことに して います。あまり 忙しい ときは 走りませんが、[ 12 ] 続けようと 思って います。また、夜は 甘い ものを [ 13 ] ように 注意して います。体が [ 14 ] なると、仕事も [ 15 ] やすく なります。",
                questionId: "15",
                options: ["し", "する", "して", "した"],
                answer: "し",
                translation: "Pola ~yasui (mudah dilakukan): Mudah untuk bekerja."
            },

            // TEKS 4: インターネット (Internet)
            {
                passage: "今は インターネットで 何でも [ 16 ] 時代です。わからない ことが あれば、[ 17 ] 調べる ことが できます。とても 便利 [ 18 ] 、悪い 点も あります。嘘の ニュースも [ 19 ] ので、どれが 正しいか [ 20 ] なければなりません。",
                questionId: "16",
                options: ["調べられる", "調べさせる", "調べさせられる", "調べることができる"],
                answer: "調べられる",
                translation: "Bentuk potensial (kanoukei): Era di mana segalanya bisa dicari tahu."
            }, {
                passage: "今は インターネットで 何でも [ 16 ] 時代です。わからない ことが あれば、[ 17 ] 調べる ことが できます。とても 便利 [ 18 ] 、悪い 点も あります。嘘の ニュースも [ 19 ] ので、どれが 正しいか [ 20 ] なければなりません。",
                questionId: "17",
                options: ["すぐに", "ゆっくり", "やっと", "そろそろ"],
                answer: "すぐに",
                translation: "Sekarang bisa segera mencari tahu menggunakan internet."
            }, {
                passage: "今は インターネットで 何でも [ 16 ] 時代です。わからない ことが あれば、[ 17 ] 調べる ことが できます。とても 便利 [ 18 ] 、悪い 点も あります。嘘の ニュースも [ 19 ] ので、どれが 正しいか [ 20 ] なければなりません。",
                questionId: "18",
                options: ["ですが", "ので", "から", "のに"],
                answer: "ですが",
                translation: "Pertentangan: Praktis, tetapi..."
            }, {
                passage: "今は インターネットで 何でも [ 16 ] 時代です。わからない ことが あれば、[ 17 ] 調べる ことが できます。とても 便利 [ 18 ] 、悪い 点も あります。嘘の ニュースも [ 19 ] ので、どれが 正しいか [ 20 ] なければなりません。",
                questionId: "19",
                options: ["ある", "あるの", "あるだ", "あるな"],
                answer: "ある",
                translation: "Menghubungkan alasan (~node): Karena ada (berita bohong)."
            }, {
                passage: "今は インターネットで 何でも [ 16 ] 時代です。わからない ことが あれば、[ 17 ] 調べる ことが できます。とても 便利 [ 18 ] 、悪い 点も あります。嘘の ニュースも [ 19 ] ので、どれが 正しいか [ 20 ] なければなりません。",
                questionId: "20",
                options: ["考え", "考えて", "考える", "考えた"],
                answer: "考え",
                translation: "Pola ~nakereba narimasen (harus): Harus memikirkan/mempertimbangkan."
            },

            // TEKS 5: 友達への 手紙 (Surat untuk Teman)
            {
                passage: "お元気ですか。私は 今、新しい 会社で [ 21 ] います。仕事は 難しいですが、先輩が 親切に [ 22 ] くれるので 頑張って います。田中さんも 忙しい [ 23 ] 思いますが、無理を [ 24 ] ください。また いつか [ 25 ] ましょう。",
                questionId: "21",
                options: ["働いて", "働かせて", "働かれ", "働け"],
                answer: "働いて",
                translation: "Kondisi saat ini: Sedang bekerja."
            }, {
                passage: "お元気ですか。私は 今、新しい 会社で [ 21 ] います。仕事は 難しいですが、先輩が 親切に [ 22 ] くれるので 頑張って います。田中さんも 忙しい [ 23 ] 思いますが、無理を [ 24 ] ください。また いつか [ 25 ] ましょう。",
                questionId: "22",
                options: ["教えて", "教える", "教え", "教えた"],
                answer: "教えて",
                translation: "Pola ~te kureru (orang lain melakukan kebaikan): Memberitahu/mengajari saya."
            }, {
                passage: "お元気ですか。私は 今、新しい 会社で [ 21 ] います。仕事は 難しいですが、先輩が 親切に [ 22 ] くれるので 頑張って います。田中さんも 忙しい [ 23 ] 思いますが、無理を [ 24 ] ください。また いつか [ 25 ] ましょう。",
                questionId: "23",
                options: ["だろうと", "はずだと", "つもりだと", "ようだという"],
                answer: "だろうと",
                translation: "Pola perkiraan (~darou to omou): Saya pikir (Anda) mungkin sibuk."
            }, {
                passage: "お元気ですか。私は 今、新しい 会社で [ 21 ] います。仕事は 難しいですが、先輩が 親切に [ 22 ] くれるので 頑張って います。田中さんも 忙しい [ 23 ] 思いますが、無理を [ 24 ] ください。また いつか [ 25 ] ましょう。",
                questionId: "24",
                options: ["しないで", "しないでください", "しなかった", "しなくて"],
                answer: "しないで",
                translation: "Permintaan negatif (~naide kudasai): Tolong jangan memaksakan diri."
            }, {
                passage: "お元気ですか。私は 今、新しい 会社で [ 21 ] います。仕事は 難しいですが、先輩が 親切に [ 22 ] くれるので 頑張って います。田中さんも 忙しい [ 23 ] 思いますが、無理を [ 24 ] ください。また いつか [ 25 ] ましょう。",
                questionId: "25",
                options: ["会い", "会って", "会う", "会った"],
                answer: "会い",
                translation: "Bentuk ajakan (~mashou): Mari bertemu lagi kapan-kapan."
            },

            // TEKS 6: 引っ越し (Pindah Rumah)
            {
                passage: "来週、新しい 家に [ 26 ] ことに なりました。今の 家は 駅から 遠くて [ 27 ] でしたが、新しい 家は 駅から 歩いて 5分です。荷物が たくさん あるので、友達に [ 28 ] もらいます。引っ越しが [ 29 ] 、遊びに [ 30 ] ください。",
                questionId: "26",
                options: ["引っ越す", "引っ越した", "引っ越して", "引っ越さない"],
                answer: "引っ越す",
                translation: "Pola ~koto ni naru (diputuskan): Sudah diputuskan akan pindah."
            }, {
                passage: "来週、新しい 家に [ 26 ] ことに なりました。今の 家は 駅から 遠くて [ 27 ] でしたが、新しい 家は 駅から 歩いて 5分です。荷物が たくさん あるので、友達に [ 28 ] もらいます。引っ越しが [ 29 ] 、遊びに [ 30 ] ください。",
                questionId: "27",
                options: ["不便", "便利", "賑やか", "静か"],
                answer: "不便",
                translation: "Rumahnya jauh dari stasiun, jadi tidak praktis."
            }, {
                passage: "来週、新しい 家に [ 26 ] ことに なりました。今の 家は 駅から 遠くて [ 27 ] でしたが、新しい 家は 駅から 歩いて 5分です。荷物が たくさん あるので、友達に [ 28 ] もらいます。引っ越しが [ 29 ] 、遊びに [ 30 ] ください。",
                questionId: "28",
                options: ["手伝って", "手伝わせて", "手伝われ", "手伝い"],
                answer: "手伝って",
                translation: "Pola ~te morau (menerima bantuan): Meminta bantuan teman."
            }, {
                passage: "来週、新しい 家に [ 26 ] ことに なりました。今の 家は 駅から 遠くて [ 27 ] でしたが、新しい 家は 駅から 歩いて 5分です。荷物が たくさん あるので、友達に [ 28 ] もらいます。引っ越しが [ 29 ] 、遊びに [ 30 ] ください。",
                questionId: "29",
                options: ["終わったら", "終われば", "終わると", "終わるなら"],
                answer: "終わったら",
                translation: "Pengandaian waktu (~tara): Jika sudah selesai pindah."
            }, {
                passage: "来週、新しい 家に [ 26 ] ことに なりました。今の 家は 駅から 遠くて [ 27 ] でしたが、新しい 家は 駅から 歩いて 5分です。荷物が たくさん あるので、友達に [ 28 ] もらいます。引っ越しが [ 29 ] 、遊びに [ 30 ] ください。",
                questionId: "30",
                options: ["来て", "来ていて", "来られて", "きなさい"],
                answer: "来て",
                translation: "Permintaan (te-kudasai): Tolong datanglah bermain."
            },

            // TEKS 7: 料理の 失敗 (Kegagalan Memasak)
            {
                passage: "昨日、初めて ケーキを [ 31 ] みました。作りかたを [ 32 ] 調べましたが、砂糖を 入れ [ 33 ] しまいました。とても 甘くなって、[ 34 ] 食べられませんでした。次は 間違えない [ 35 ] 気を つけます。",
                questionId: "31",
                options: ["作って", "作り", "作る", "作った"],
                answer: "作って",
                translation: "Pola ~te miru (mencoba melakukan): Mencoba membuat kue."
            }, {
                passage: "昨日、初めて ケーキを [ 31 ] みました。作りかたを [ 32 ] 調べましたが、砂糖を 入れ [ 33 ] しまいました。とても 甘くなって、[ 34 ] 食べられませんでした。次は 間違えない [ 35 ] 気を つけます。",
                questionId: "32",
                options: ["よく", "ずっと", "やっと", "かなり"],
                answer: "よく",
                translation: "Dia mencari tahu dengan teliti sebelum membeli."
            }, {
                passage: "昨日、初めて ケーキを [ 31 ] みました。作りかたを [ 32 ] 調べましたが、砂糖を 入れ [ 33 ] しまいました。とても 甘くなって、[ 34 ] 食べられませんでした。次は 間違えない [ 35 ] 気を つけます。",
                questionId: "33",
                options: ["すぎて", "すぎ", "すぎた", "すぎに"],
                answer: "すぎて",
                translation: "Pola ~sugiru (terlalu banyak): Terlalu banyak memasukkan gula."
            }, {
                passage: "昨日、初めて ケーキを [ 31 ] みました。作りかたを [ 32 ] 調べましたが、砂糖を 入れ [ 33 ] しまいました。とても 甘くなって、[ 34 ] 食べられませんでした。次は 間違えない [ 35 ] 気を つけます。",
                questionId: "34",
                options: ["全然", "あまり", "とても", "少し"],
                answer: "全然",
                translation: "Digunakan dengan negatif untuk menyatakan 'sama sekali tidak'."
            }, {
                passage: "昨日、初めて ケーキを [ 31 ] みました。作りかたを [ 32 ] 調べましたが、砂糖を 入れ [ 33 ] しまいました。とても 甘くなって、[ 34 ] 食べられませんでした。次は 間違えない [ 35 ] 気を つけます。",
                questionId: "35",
                options: ["ように", "ために", "ので", "から"],
                answer: "ように",
                translation: "Pola ~youni ki wo tsukeru: Berhati-hati agar tidak (salah)."
            },

            // TEKS 8: 日本の 習慣 (Kebiasaan Jepang)
            {
                passage: "日本の 家に 入る とき、靴を [ 36 ] なければなりません。これは 部屋を [ 37 ] ためです。また、友達の 家へ 行く ときは [ 38 ] を 持って 行く 習慣が あります。渡す ときは「つまらない ものですが」と [ 39 ] ことも [ 40 ] 。",
                questionId: "36",
                options: ["脱が", "脱いで", "脱ぎ", "脱いだ"],
                answer: "脱が",
                translation: "Pola ~nakereba narimasen: Harus melepas (sepatu)."
            }, {
                passage: "日本の 家に 入る とき、靴を [ 36 ] なければなりません。これは 部屋を [ 37 ] ためです。また、友達の 家へ 行く ときは [ 38 ] を 持って 行く 習慣が あります。渡す ときは「つまらない ものですが」と [ 39 ] ことも [ 40 ] 。",
                questionId: "37",
                options: ["汚さない", "汚して", "汚し", "汚した"],
                answer: "汚さない",
                translation: "Tujuan negatif (~nai tameni): Demi agar tidak mengotori."
            }, {
                passage: "日本の 家に 入る とき、靴を [ 36 ] なければなりません。これは 部屋を [ 37 ] ためです。また、友達の 家へ 行く ときは [ 38 ] を 持って 行く 習慣が あります。渡す ときは「つまらない ものですが」と [ 39 ] ことも [ 40 ] 。",
                questionId: "38",
                options: ["お土産", "お釣り", "お見舞い", "お祝い"],
                answer: "お土産",
                translation: "Saat berkunjung, dia membawa oleh-oleh."
            }, {
                passage: "日本の 家に 入る とき、靴を [ 36 ] なければなりません。これは 部屋を [ 37 ] ためです。また、友達の 家へ 行く ときは [ 38 ] を 持って 行く 習慣が あります。渡す ときは「つまらない ものですが」と [ 39 ] ことも [ 40 ] 。",
                questionId: "39",
                options: ["言う", "言って", "言い", "言った"],
                answer: "言う",
                translation: "Menghubungkan kata kerja dengan koto (mengatakan...)."
            }, {
                passage: "日本の 家に 入る とき、靴を [ 36 ] なければなりません。これは 部屋を [ 37 ] ためです。また、友達の 家へ 行く ときは [ 38 ] を 持って 行く 習慣が あります。渡す ときは「つまらない ものですが」と [ 39 ] ことも [ 40 ] 。",
                questionId: "40",
                options: ["あります", "います", "なります", "します"],
                answer: "あります",
                translation: "Pola ~koto mo aru: Ada kalanya (terkadang dilakukan)."
            },

            // TEKS 9: 将来の 夢 (Mimpi Masa Depan)
            {
                passage: "私の 夢は 世界中を 旅行 [ 41 ] ことです。色々な 国の 文化を [ 42 ] と 思って います。その ために、今は 外国語を 一生懸命 [ 43 ] います。お金が [ 44 ] 、すぐ 出発したいです。たくさんの 人に 会えるのを 楽しみに [ 45 ] います。",
                questionId: "41",
                options: ["する", "して", "した", "しなさい"],
                answer: "する",
                translation: "Pembendaan (koto): Perjalanan keliling dunia."
            }, {
                passage: "私の 夢は 世界中を 旅行 [ 41 ] ことです。色々な 国の 文化を [ 42 ] と 思って います。その ために、今は 外国語を 一生懸命 [ 43 ] います。お金が [ 44 ] 、すぐ 出発したいです。たくさんの 人に 会えるのを 楽しみに [ 45 ] います。",
                questionId: "42",
                options: ["知りたい", "知らせたい", "知らされたい", "知らせる"],
                answer: "知りたい",
                translation: "Keinginan subjek: Ingin mengetahui (budaya)."
            }, {
                passage: "私の 夢は 世界中を 旅行 [ 41 ] ことです。色々な 国の 文化を [ 42 ] と 思って います。その ために、今は 外国語を 一生懸命 [ 43 ] います。お金が [ 44 ] 、すぐ 出発したいです。たくさんの 人に 会えるのを 楽しみに [ 45 ] います。",
                questionId: "43",
                options: ["勉強して", "勉強しに", "勉強する", "勉強した"],
                answer: "勉強して",
                translation: "Kondisi berkelanjutan: Sedang belajar mati-matian."
            }, {
                passage: "私の 夢は 世界中を 旅行 [ 41 ] ことです。色々な 国の 文化を [ 42 ] と 思って います。その ために、今は 外国語を 一生懸命 [ 43 ] います。お金が [ 44 ] 、すぐ 出発したいです。たくさんの 人に 会えるのを 楽しみに [ 45 ] います。",
                questionId: "44",
                options: ["貯まったら", "貯まれば", "貯まると", "貯まるなら"],
                answer: "貯まったら",
                translation: "Pengandaian syarat (~tara): Jika uang sudah terkumpul."
            }, {
                passage: "私の 夢は 世界中を 旅行 [ 41 ] ことです。色々な 国の 文化を [ 42 ] と 思って います。その ために、今は 外国語を 一生懸命 [ 43 ] います。お金が [ 44 ] 、すぐ 出発したいです。たくさんの 人に 会えるのを 楽しみに [ 45 ] います。",
                questionId: "45",
                options: ["して", "しに", "する", "した"],
                answer: "して",
                translation: "Pola tanoshimi ni shite iru: Menantikan."
            },

            // TEKS 10: 敬語の 使い方 (Penggunaan Keigo)
            {
                passage: "先生、お忙しい ところ [ 46 ] ありがとうございます。昨日 [ 47 ] 本、読み終わりました。とても 勉強に なりました。来週、先生の 部屋へ [ 48 ] と 思って いますが、お時間は [ 49 ] か。お返事を [ 50 ] います。",
                questionId: "46",
                options: ["すみません", "おめでとう", "さようなら", "はじめまして"],
                answer: "すみません",
                translation: "Ungkapan maaf mengganggu waktu: Maaf mengganggu saat sibuk."
            }, {
                passage: "先生、お忙しい ところ [ 46 ] ありがとうございます。昨日 [ 47 ] 本、読み終わりました。とても 勉強に なりました。来週、先生の 部屋へ [ 48 ] と 思って いますが、お時間は [ 49 ] か。お返事を [ 50 ] います。",
                questionId: "47",
                options: ["いただいた", "くださった", "さしあげた", "もらった"],
                answer: "いただいた",
                translation: "Bentuk rendah hati (itadaku) untuk menerima dari atasan/guru."
            }, {
                passage: "先生、お忙しい ところ [ 46 ] ありがとうございます。昨日 [ 47 ] 本、読み終わりました。とても 勉強に なりました。来週、先生の 部屋へ [ 48 ] と 思って いますが、お時間は [ 49 ] か。お返事を [ 50 ] います。",
                questionId: "48",
                options: ["伺おう", "行こう", "いらっしゃろう", "おいでになろう"],
                answer: "伺おう",
                translation: "Bentuk Kenjougo (ukagau) untuk mengunjungi orang yang dihormati."
            }, {
                passage: "先生、お忙しい ところ [ 46 ] ありがとうございます。昨日 [ 47 ] 本、読み終わりました。とても 勉強に なりました。来週、先生の 部屋へ [ 48 ] と 思って いますが、お時間は [ 49 ] か。お返事を [ 50 ] います。",
                questionId: "49",
                options: ["ありますか", "いらっしゃいますか", "おありですか", "ございますか"],
                answer: "ありますか",
                translation: "Menanyakan ketersediaan waktu secara sopan."
            }, {
                passage: "先生、お忙しい ところ [ 46 ] ありがとうございます。昨日 [ 47 ] 本、読み終わりました。とても 勉強に なりました。来週、先生의 部屋へ [ 48 ] と 思って いますが、お時間は [ 49 ] か。お返事を [ 50 ] います。",
                questionId: "50",
                options: ["待って", "お待ちして", "待たれて", "待たせて"],
                answer: "お待ちして",
                translation: "Bentuk rendah hati (omachi shite iru): Saya menantikan jawaban."
            },
            // TEKS 11: 面接 (Wawancara Kerja)
            {
                passage: "昨日、新しい 会社の 面接に [ 51 ] 。社長は とても 丁寧に [ 52 ] くださいました。私は 将来、この 会社で 日本語を [ 53 ] 通訳に なりたいと [ 54 ] ました。結果は 来週の 月曜日までに [ 55 ] そうです。",
                questionId: "51",
                options: ["行かせていただきました", "行かれました", "行かせられました", "行きました"],
                answer: "行かせていただきました",
                translation: "Menggunakan bentuk merendah diri yang sangat sopan (izinkan saya pergi/hadir)."
            }, {
                passage: "昨日、新しい 会社の 面接に [ 51 ] 。社長は とても 丁寧に [ 52 ] くださいました。私は 将来、この 会社で 日本語を [ 53 ] 通訳に なりたいと [ 54 ] ました。結果は 来週の 月曜日までに [ 55 ] そうです。",
                questionId: "52",
                options: ["お話しに なって", "お話しに して", "話されて", "話させて"],
                answer: "お話しに なって",
                translation: "Bentuk Sonkeigo (hormat) untuk tindakan subjek yang dihormati (Presiden Direktur)."
            }, {
                passage: "昨日、新しい 会社の 面接に [ 51 ] 。社長は とても 丁寧に [ 52 ] くださいました。私は 将来、この 会社で 日本語を [ 53 ] 通訳に なりたいと [ 54 ] ました。結果は 来週の 月曜日までに [ 55 ] そうです。",
                questionId: "53",
                options: ["使った", "使って", "使う", "使えば"],
                answer: "使った",
                translation: "Modifikasi kata benda: Menjadi penerjemah yang menggunakan (bahasa Jepang)."
            }, {
                passage: "昨日、新しい 会社の 面接に [ 51 ] 。社長は とても 丁寧に [ 52 ] くださいました。私は 将来、この 会社で 日本語を [ 53 ] 通訳に なりたいと [ 54 ] ました。結果は 来週の 月曜日までに [ 55 ] そうです。",
                questionId: "54",
                options: ["伝え", "伝えられ", "伝えさせ", "伝えられさせ"],
                answer: "伝え",
                translation: "Dia menyampaikan keinginannya kepada atasan."
            }, {
                passage: "昨日、新しい 会社の 面接に [ 51 ] 。社長は とても 丁寧に [ 52 ] くださいました。私は 将来、この 会社で 日本語を [ 53 ] 通訳に なりたいと [ 54 ] ました。結果は 来週の 月曜日までに [ 55 ] そうです。",
                questionId: "55",
                options: ["知らせる", "知らせられる", "知らせさせる", "知らせて"],
                answer: "知らせる",
                translation: "Menunjukkan kabar/pengumuman: (Katanya) akan memberi tahu hasilnya."
            },

            // TEKS 12: 天気と 生活 (Cuaca dan Kehidupan)
            {
                passage: "最近、急に 寒く [ 56 ] ました。冬が 近づいて いる [ 57 ] です。明日は 雪が 降る [ 58 ] なので、暖かい 服を 着て 出かけた ほうが いいでしょう。風邪を [ 59 ] ように、しっかり [ 60 ] ください。",
                questionId: "56",
                options: ["なり", "なって", "なる", "なった"],
                answer: "なり",
                translation: "Hasil perubahan (~naru) dalam bentuk lampau."
            }, {
                passage: "最近、急に 寒く [ 56 ] ました。冬が 近づいて いる [ 57 ] です。明日は 雪が 降る [ 58 ] なので、暖かい 服を 着て 出かけた ほうが いいでしょう。風邪を [ 59 ] ように、しっかり [ 60 ] ください。",
                questionId: "57",
                options: ["よう", "そう", "みたい", "らしい"],
                answer: "よう",
                translation: "Penyimpulan subjektif berdasarkan perasaan/tanda (Sepertinya...)."
            }, {
                passage: "最近、急に 寒く [ 56 ] ました。冬が 近づいて いる [ 57 ] です。明日は 雪が 降る [ 58 ] なので、暖かい 服を 着て 出かけた ほうが いいでしょう。風邪を [ 59 ] ように、しっかり [ 60 ] ください。",
                questionId: "58",
                options: ["はず", "こと", "つもり", "そう"],
                answer: "はず",
                translation: "Keyakinan logis (Harusnya besok turun salju)."
            }, {
                passage: "最近、急に 寒く [ 56 ] ました。冬が 近づいて いる [ 57 ] です。明日は 雪が 降る [ 58 ] なので、暖かい 服を 着て 出かけた ほうが いいでしょう。風邪を [ 59 ] ように、しっかり [ 60 ] ください。",
                questionId: "59",
                options: ["ひかない", "ひいて", "ひき", "ひいた"],
                answer: "ひかない",
                translation: "Pola ~youni (agar tidak): Agar tidak masuk angin."
            }, {
                passage: "最近、急に 寒く [ 56 ] ました。冬が 近づいて いる [ 57 ] です。明日は 雪が 降る [ 58 ] なので、暖かい 服を 着て 出かけた ほうが いいでしょう。風邪を [ 59 ] ように、しっかり [ 60 ] ください。",
                questionId: "60",
                options: ["休んで", "休み", "休む", "休んだ"],
                answer: "休んで",
                translation: "Instruksi/Permintaan: Tolong istirahat dengan cukup."
            },

            // TEKS 13: 忘れ物 (Barang Ketinggalan)
            {
                passage: "電車の中に 傘を 忘れて [ 61 ] ました。雨が 降って いた [ 62 ] 、とても 困りました。駅員さんに [ 63 ] みましたが、まだ 見つかりません。もっと 注意して [ 64 ] ければ ならないと [ 65 ] ました。",
                questionId: "61",
                options: ["しまい", "おき", "み", "あり"],
                answer: "しまい",
                translation: "Kejadian yang tidak diinginkan/penyesalan (~te shimau)."
            }, {
                passage: "電車の中に 傘を 忘れて [ 61 ] ました。雨が 降って いた [ 62 ] 、とても 困りました。駅員さんに [ 63 ] みましたが、まだ 見つかりません。もっと 注意して [ 64 ] ければ ならないと [ 65 ] ました。",
                questionId: "62",
                options: ["ので", "のに", "から", "でも"],
                answer: "ので",
                translation: "Menjelaskan alasan yang objektif."
            }, {
                passage: "電車の中に 傘を 忘れて [ 61 ] ました。雨が 降って いた [ 62 ] 、とても 困りました。駅員さんに [ 63 ] みましたが、まだ 見つかりません。もっと 注意して [ 64 ] ければ ならないと [ 65 ] ました。",
                questionId: "63",
                options: ["聞いて", "聞かせて", "聞かれ", "聞か"],
                answer: "聞いて",
                translation: "Pola ~te miru (mencoba melakukan): Mencoba bertanya ke petugas."
            }, {
                passage: "電車の中に 傘を 忘れて [ 61 ] ました。雨が 降って いた [ 62 ] 、とても 困りました。駅員さんに [ 63 ] みましたが、まだ 見つかりません。もっと 注意して [ 64 ] ければ ならないと [ 65 ] ました。",
                questionId: "64",
                options: ["おかな", "おき", "おいて", "おく"],
                answer: "おかな",
                translation: "Pola ~nakereba naranai: Harus (memperhatikan) sebelumnya."
            }, {
                passage: "電車の中に 傘を 忘れて [ 61 ] ました。雨が 降って いた [ 62 ] 、とても 困りました。駅員さんに [ 63 ] みましたが、まだ 見つかりません。もっと 注意して [ 64 ] ければ ならないと [ 65 ] ました。",
                questionId: "65",
                options: ["反省し", "安心し", "びっくりし", "がっかりし"],
                answer: "反省し",
                translation: "Merefleksikan kesalahan diri (Hansei shimashita)."
            },

            // TEKS 14: 留学の 準備 (Persiapan Studi ke Luar Negeri)
            {
                passage: "来月から 日本に 留学する [ 66 ] なりました。その ために、今 パスポートを [ 67 ] います。日本に 行く [ 68 ] 、一度 富士山を 見て みたいです。向こうでの 生活が 楽しみ [ 69 ] 、少し 不安 [ 70 ] あります。",
                questionId: "66",
                options: ["ことに", "ように", "ために", "ので"],
                answer: "ことに",
                translation: "Keputusan yang sudah ditetapkan (~koto ni naru)."
            }, {
                passage: "来月から 日本に 留学する [ 66 ] なりました。その ために、今 パスポートを [ 67 ] います。日本に 行く [ 68 ] 、一度 富士山を 見て みたいです。向こうでの 生活が 楽しみ [ 69 ] 、少し 不安 [ 70 ] あります。",
                questionId: "67",
                options: ["作って", "作らせて", "作られて", "作ってあり"],
                answer: "作って",
                translation: "Tindakan yang sedang berlangsung (sedang membuat paspor)."
            }, {
                passage: "来月から 日本に 留学する [ 66 ] なりました。その ために、今 パスポートを [ 67 ] います。日本に 行く [ 68 ] 、一度 富士山を 見て みたいです。向こうでの 生活が 楽しみ [ 69 ] 、少し 不安 [ 70 ] あります。",
                questionId: "68",
                options: ["なら", "たら", "ば", "と"],
                answer: "なら",
                translation: "Mengajukan topik/pengandaian (Jika soal pergi ke Jepang...)."
            }, {
                passage: "来月から 日本に 留学する [ 66 ] なりました。その ために、今 パスポートを [ 67 ] います。日本に 行く [ 68 ] 、一度 富士山を 見て みたいです。向こうでの 生活が 楽しみ [ 69 ] 、少し 不安 [ 70 ] あります。",
                questionId: "69",
                options: ["ですが", "ので", "から", "のに"],
                answer: "ですが",
                translation: "Pertentangan: Dinantikan, tetapi..."
            }, {
                passage: "来月から 日本に 留学する [ 66 ] なりました。その ために、今 パスポートを [ 67 ] います。日本に 行く [ 68 ] 、一度 富士山を 見て みたいです。向こうでの 生活が 楽しみ [ 69 ] 、少し 不安 [ 70 ] あります。",
                questionId: "70",
                options: ["でも", "も", "に", "を"],
                answer: "でも",
                translation: "Menunjukkan adanya sedikit perasaan (cemas pun ada)."
            },

            // TEKS 15: 会社の 旅行 (Perjalanan Kantor)
            {
                passage: "来週、会社の 旅行が あります。部長は「全員 [ 71 ] ください」と おっしゃいました。場所は 温泉が 有名な ところ [ 72 ] 、とても 楽しみです。私は 温泉に 入る [ 73 ] が 大好きです。ゆっくり [ 74 ] ことが できる [ 75 ] です。",
                questionId: "71",
                options: ["出席して", "出席させて", "出席されて", "出席しなさい"],
                answer: "出席して",
                translation: "Permintaan sopan dari atasan (Harap hadir)."
            }, {
                passage: "来週、会社の 旅行が あります。部長は「全員 [ 71 ] ください」と おっしゃいました。場所は 温泉が 有名な ところ [ 72 ] 、とても 楽しみです。私は 温泉に 入る [ 73 ] が 大好きです。ゆっくり [ 74 ] ことが できる [ 75 ] です。",
                questionId: "72",
                options: ["なので", "なのに", "から", "けれど"],
                answer: "なので",
                translation: "Alasan untuk perasaan senang."
            }, {
                passage: "来週、会社の 旅行が あります。部長は「全員 [ 71 ] ください」と おっしゃいました。場所は 温泉が 有名な ところ [ 72 ] 、とても 楽しみです。私は 温泉に 入る [ 73 ] が 大好きです。ゆっくり [ 74 ] ことが できる [ 75 ] です。",
                questionId: "73",
                options: ["こと", "もの", "とき", "ひと"],
                answer: "こと",
                translation: "Pembendaan kata kerja (Hal masuk ke onsen)."
            }, {
                passage: "来週、会社の 旅行が あります。部長は「全員 [ 71 ] ください」と おっしゃいました。場所は 温泉が 有名な ところ [ 72 ] 、とても 楽しみです。私は 温泉に 入る [ 73 ] が 大好きです。ゆっくり [ 74 ] ことが できる [ 75 ] です。",
                questionId: "74",
                options: ["休む", "休んで", "休み", "休んだ"],
                answer: "休む",
                translation: "Bentuk kamus sebelum koto ga dekiru."
            }, {
                passage: "来週、会社の 旅行が あります。部長は「全員 [ 71 ] ください」と おっしゃいました。場所は 温泉が 有名な ところ [ 72 ] 、とても 楽しみです。私は 温泉に 入る [ 73 ] が 大好きです。ゆっくり [ 74 ] ことが できる [ 75 ] です。",
                questionId: "75",
                options: ["はず", "つもり", "こと", "よう"],
                answer: "はず",
                translation: "Ekspektasi logis (Seharusnya bisa istirahat santai)."
            },

            // TEKS 16: 新しい 技術 (Teknologi Baru)
            {
                passage: "最近、AIの 技術が [ 76 ] 進んで います。私たちの 生活は これから もっと [ 77 ] なるでしょう。しかし、AIに 仕事を [ 78 ] しまう かもしれないと [ 79 ] 人も います。技術を どう 使うか [ 80 ] なければ なりません。",
                questionId: "76",
                options: ["どんどん", "やっと", "そろそろ", "ぐっすり"],
                answer: "どんどん",
                translation: "Menunjukkan perubahan yang cepat/pesat."
            }, {
                passage: "最近、AIの 技術が [ 76 ] 進んで います。私たちの 生活は これから もっと [ 77 ] なるでしょう。しかし、AIに 仕事を [ 78 ] しまう かもしれないと [ 79 ] 人も います。技術を どう 使うか [ 80 ] なければ なりません。",
                questionId: "77",
                options: ["便利に", "便利な", "便利で", "便利だ"],
                answer: "便利に",
                translation: "Hasil perubahan menjadi praktis."
            }, {
                passage: "最近、AIの 技術が [ 76 ] 進んで います。私たちの 生活は これから もっと [ 77 ] なるでしょう。しかし、AIに 仕事を [ 78 ] しまう かもしれないと [ 79 ] 人も います。技術を どう 使うか [ 80 ] なければ なりません。",
                questionId: "78",
                options: ["取られて", "取らせて", "取られさせて", "取って"],
                answer: "取られて",
                translation: "Bentuk pasif penderitaan (Diambil/Direbut pekerjaannya)."
            }, {
                passage: "最近、AIの 技術が [ 76 ] 進んで います。私たちの 生活は これから もっと [ 77 ] なるでしょう。しかし、AIに 仕事を [ 78 ] しまう かもしれないと [ 79 ] 人も います。技術 को どう 使うか [ 80 ] なければ なりません。",
                questionId: "79",
                options: ["心配して いる", "安心して いる", "びっくりして いる", "喜んで いる"],
                answer: "心配して いる",
                translation: "Menunjukkan kekhawatiran orang-orang."
            }, {
                passage: "最近、AIの 技術が [ 76 ] 進んで います。私たちの 生活は これから もっと [ 77 ] なるでしょう。しかし、AIに 仕事を [ 78 ] しまう かもしれないと [ 79 ] 人も います。技術を どう 使うか [ 80 ] なければ なりません。",
                questionId: "80",
                options: ["考え", "考えて", "考える", "考えた"],
                answer: "考え",
                translation: "Pola harus (~nakereba naranai)."
            },

            // TEKS 17: お礼の メール (Email Ucapan Terima Kasih)
            {
                passage: "山田部長へ。昨日は 美味しい 料理を [ 81 ] ありがとうございました。部長が [ 82 ] お話は とても 勉強に なりました。また、奥様にも よろしく [ 83 ] ください。今度は 私が 部長を [ 84 ] と 思って います。お返事を [ 85 ] います。",
                questionId: "81",
                options: ["ごちそうに なり", "召し上がり", "食べさせられ", "食べて"],
                answer: "ごちそうに なり",
                translation: "Bentuk sopan saat ditraktir makan oleh atasan."
            }, {
                passage: "山田部長へ。昨日は 美味しい 料理を [ 81 ] ありがとうございました。部長が [ 82 ] お話は とても 勉強に なりました。また、奥様にも よろしく [ 83 ] ください。今度は 私が 部長を [ 84 ] と 思って います。お返事を [ 85 ] います。",
                questionId: "82",
                options: ["おっしゃった", "申した", "言われた", "言わせた"],
                answer: "おっしゃった",
                translation: "Bentuk Sonkeigo (hormat) untuk perkataan atasan."
            }, {
                passage: "山田部長へ。昨日は 美味しい 料理を [ 81 ] ありがとうございました。部長が [ 82 ] お話は とても 勉強に なりました。また、奥様にも よろしく [ 83 ] ください。今度は 私が 部長を [ 84 ] と 思って います。お返事を [ 85 ] います。",
                questionId: "83",
                options: ["お伝え", "おっしゃって", "知らせて", "話して"],
                answer: "お伝え",
                translation: "Bentuk sopan menyampaikan salam (O-tsutae kudasai)."
            }, {
                passage: "山田部長へ。昨日は 美味しい 料理を [ 81 ] ありがとうございました。部長が [ 82 ] お話は とても 勉強に なりました。また、奥様にも よろしく [ 83 ] ください。今度は 私が 部長を [ 84 ] と 思って います。お返事を [ 85 ] います。",
                questionId: "84",
                options: ["ご招待しよう", "ご招待になりたい", "ご招待されよう", "ご招待させよう"],
                answer: "ご招待しよう",
                translation: "Bentuk ajakan/niat (Ikoukei) untuk mengundang."
            }, {
                passage: "山田部長へ。昨日は 美味しい 料理を [ 81 ] ありがとうございました。部長が [ 82 ] お話は とても 勉強に なりました。また、奥様にも よろしく [ 83 ] ください。今度は 私が 部長を [ 84 ] と 思って います。お返事を [ 85 ] います。",
                questionId: "85",
                options: ["お待ちして", "お待たせして", "待たれて", "待って"],
                answer: "お待ちして",
                translation: "Bentuk rendah hati (Kenjougo) menunggu jawaban."
            },

            // TEKS 18: 子供の 教育 (Pendidikan Anak)
            {
                passage: "最近、子供に 習い事を [ 86 ] 親が 増えて います。ピアノや 英語など、色々 [ 87 ] させて います。子供が 好きな ことを [ 88 ] のは 良い ことですが、無理に [ 89 ] は よく ありません。子供の 気持ちを 一番に [ 90 ] べきです。",
                questionId: "86",
                options: ["させる", "られる", "させられる", "する"],
                answer: "させる",
                translation: "Bentuk Kausatif: Orang tua yang 'membuat' (menyuruh) anak kursus."
            }, {
                passage: "最近、子供に 習い事を [ 86 ] 親が 増えて います。ピアノや 英語など、色々 [ 87 ] させて います。子供が 好きな ことを [ 88 ] のは 良い ことですが、無理に [ 89 ] は よく ありません。子供の 気持ちを 一番に [ 90 ] べきです。",
                questionId: "87",
                options: ["経験", "練習", "勉強", "仕事"],
                answer: "経験",
                translation: "Membuat (anak) merasakan berbagai pengalaman."
            }, {
                passage: "最近、子供に 習い事を [ 86 ] 親が 増えて います。ピアノや 英語など、色々 [ 87 ] させて います。子供が 好きな ことを [ 88 ] のは 良い ことですが、無理に [ 89 ] は よく ありません。子供の 気持ちを 一番に [ 90 ] べきです。",
                questionId: "88",
                options: ["応援する", "注意する", "叱る", "手伝う"],
                answer: "応援する",
                translation: "Mendukung hal yang disukai anak."
            }, {
                passage: "最近、子供に 習い事を [ 86 ] 親が 増えて います。ピアノや 英語など、色々 [ 87 ] させて います。子供が 好きな ことを [ 88 ] のは 良い ことですが、無理に [ 89 ] は よく ありません。子供の 気持ちを 一番に [ 90 ] べきです。",
                questionId: "89",
                options: ["やらせるの", "やられるの", "やってみるの", "やらせられるの"],
                answer: "やらせるの",
                translation: "Memaksa (menyuruh) melakukan."
            }, {
                passage: "最近、子供に 習い事を [ 86 ] 親が 増えて います。ピアノや 英語など、色々 [ 87 ] させて います。子供が 好きな ことを [ 88 ] のは 良い ことですが、無理に [ 89 ] は よく ありません。子供の 気持ちを 一番に [ 90 ] べきです。",
                questionId: "90",
                options: ["考える", "考えて", "考え", "考えた"],
                answer: "考える",
                translation: "Pola ~beki da (seharusnya): Seharusnya memikirkan perasaan anak."
            },

            // TEKS 19: 日本の 祭り (Festival Jepang)
            {
                passage: "夏に なると、日本各地で 祭りが [ 91 ] ます。祭りの 日は、たくさんの 人が 浴衣を [ 92 ] 集まります。屋台で 食べ物を 買ったり、踊ったり して [ 93 ] 。賑やかな 雰囲気を [ 94 ] ために、ぜひ 一度 [ 95 ] ください。",
                questionId: "91",
                options: ["行われ", "行わせ", "行われさせ", "行い"],
                answer: "行われ",
                translation: "Bentuk pasif untuk kejadian umum (diadakan)."
            }, {
                passage: "夏に なると、日本各地で 祭りが [ 91 ] ます。祭りの 日は、たくさんの 人が 浴衣を [ 92 ] 集まります。屋台で 食べ物を 買ったり、踊ったり して [ 93 ] 。賑やかな 雰囲気を [ 94 ] ために、ぜひ 一度 [ 95 ] ください。",
                questionId: "92",
                options: ["着て", "履いて", "被って", "して"],
                answer: "着て",
                translation: "Kata kerja memakai pakaian (yukata)."
            }, {
                passage: "夏に なると、日本各地で 祭りが [ 91 ] ます。祭りの 日は、たくさんの 人が 浴衣を [ 92 ] 集まります。屋台で 食べ物を 買ったり、踊ったり して [ 93 ] 。賑やかな 雰囲気を [ 94 ] ために、ぜひ 一度 [ 95 ] ください。",
                questionId: "93",
                options: ["楽しみます", "休みます", "困ります", "怒ります"],
                answer: "楽しみます",
                translation: "Menikmati (kegiatan festival)."
            }, {
                passage: "夏に なると、日本各地で 祭りが [ 91 ] ます。祭りの 日は、たくさんの 人が 浴衣を [ 92 ] 集まります。屋台で 食べ物を 買ったり、踊ったり して [ 93 ] 。賑やかな 雰囲気を [ 94 ] ために、ぜひ 一度 [ 95 ] ください。",
                questionId: "94",
                options: ["味わう", "味見する", "食べる", "飲む"],
                answer: "味わう",
                translation: "Menikmati suasana (Ajiwau)."
            }, {
                passage: "夏に なると、日本各地で 祭りが [ 91 ] ます。祭りの 日は、たくさんの 人が 浴衣を [ 92 ] 集まります。屋台で 食べ物を 買ったり、踊ったり して [ 93 ] 。賑やかな 雰囲気を [ 94 ] ために、ぜひ 一度 [ 95 ] ください。",
                questionId: "95",
                options: ["行ってみて", "行かせて", "行かれて", "行きなさい"],
                answer: "行ってみて",
                translation: "Permintaan mencoba (te-mite kudasai): Cobalah untuk pergi."
            },

            // TEKS 20: まとめ (Penutup)
            {
                passage: "これで N4の 勉強が [ 96 ] ました。皆さんは これまで [ 97 ] 勉強して きた はずです。試験の 日は [ 98 ] 頑張って ください。合格した [ 99 ] 、一緒に お祝いを [ 100 ] 。",
                questionId: "96",
                options: ["終わり", "始まり", "続き", "出し"],
                answer: "終わり",
                translation: "Penutup: Pembelajaran N4 berakhir."
            }, {
                passage: "これで N4の 勉強が [ 96 ] ました。皆さんは これまで [ 97 ] 勉強して きた はずです。試験の 日は [ 98 ] 頑張って ください。合格した [ 99 ] 、一緒に お祝いを [ 100 ] 。",
                questionId: "97",
                options: ["一生懸命", "適当に", "いい加減に", "のんびり"],
                answer: "一生懸命",
                translation: "Menunjukkan usaha keras (Mati-matian)."
            }, {
                passage: "これで N4の 勉強が [ 96 ] ました。皆さんは これまで [ 97 ] 勉強して きた はずです。試験の 日は [ 98 ] 頑張って ください。合格した [ 99 ] 、一緒に お祝いを [ 100 ] 。",
                questionId: "98",
                options: ["落ち着いて", "慌てて", "怒って", "泣いて"],
                answer: "落ち着いて",
                translation: "Saran saat ujian: Kerjakan dengan tenang."
            }, {
                passage: "これで N4の 勉強가 [ 96 ] ました。皆さんは これまで [ 97 ] 勉強して きた はずです。試験の 日は [ 98 ] 頑張って ください。合格した [ 99 ] 、一緒に お祝いを [ 100 ] 。",
                questionId: "99",
                options: ["ら", "なら", "ば", "と"],
                answer: "ら",
                translation: "Pengandaian setelah hasil keluar (Jika sudah lulus...)."
            }, {
                passage: "これで N4の 勉強が [ 96 ] ました。皆さんは これまで [ 97 ] 勉強して きた はずです。試験の 日は [ 98 ] 頑張って ください。合格した [ 99 ] 、一緒に お祝いを [ 100 ] 。",
                questionId: "100",
                options: ["しましょう", "します", "したい", "して"],
                answer: "しましょう",
                translation: "Ajakan (mashou): Ayo kita rayakan!"
            }
        ]
    },

    "N3": {
        "bunpou-form": [{
                "question": "日本に 来てから、納豆が 食べられる ______ ました。",
                "options": [
                    "ように なり",
                    "ことに なり",
                    "ように し",
                    "ことに し"
                ],
                "answer": "ように なり",
                "translation": "Sejak datang ke Jepang, saya jadi bisa makan natto."
            }, {
                "question": "毎日 練習したので、敬語が 少し 使える ______ ました。",
                "options": [
                    "ように なり",
                    "ことに なり",
                    "ように し",
                    "ことに し"
                ],
                "answer": "ように なり",
                "translation": "Karena berlatih setiap hari, saya jadi sedikit bisa memakai keigo."
            }, {
                "question": "引っ越してから、朝 6時に 起きられる ______ ました。",
                "options": [
                    "ように なり",
                    "ことに なり",
                    "ように し",
                    "ことに し"
                ],
                "answer": "ように なり",
                "translation": "Sejak pindah rumah, saya jadi bisa bangun jam 6 pagi."
            }, {
                "question": "最近、ニュースを 聞いて だいたい 内容が わかる ______ ました。",
                "options": [
                    "ように なり",
                    "ことに なり",
                    "ように し",
                    "ことに し"
                ],
                "answer": "ように なり",
                "translation": "Belakangan ini, saya jadi bisa memahami garis besar isi berita."
            }, {
                "question": "健康の ために、毎朝 階段を 使う ______ ています。",
                "options": [
                    "ことに し",
                    "ように し",
                    "ことに なり",
                    "ように なり"
                ],
                "answer": "ことに し",
                "translation": "Demi kesehatan, saya membiasakan diri memakai tangga setiap hari."
            }, {
                "question": "寝る 前は、スマホを 見ない ______ ています。",
                "options": [
                    "ことに し",
                    "ように し",
                    "ことに なり",
                    "ように なり"
                ],
                "answer": "ことに し",
                "translation": "Sebelum tidur, saya membiasakan diri untuk tidak melihat ponsel."
            }, {
                "question": "日本語の 日記を 毎晩 書く ______ ています。",
                "options": [
                    "ことに し",
                    "ように し",
                    "ことに なり",
                    "ように なり"
                ],
                "answer": "ことに し",
                "translation": "Saya membiasakan diri menulis diary bahasa Jepang setiap malam."
            }, {
                "question": "忙しくても、朝ご飯を ぬかない ______ ています。",
                "options": [
                    "ことに し",
                    "ように し",
                    "ことに なり",
                    "ように なり"
                ],
                "answer": "ことに し",
                "translation": "Meski sibuk, saya membiasakan diri tidak melewatkan sarapan."
            }, {
                "question": "来月から、大阪支社で 働く ______ ました。",
                "options": [
                    "ことに なり",
                    "ように なり",
                    "ことに し",
                    "ように し"
                ],
                "answer": "ことに なり",
                "translation": "Mulai bulan depan, diputuskan saya bekerja di cabang Osaka."
            }, {
                "question": "会議は 来週に 延期する ______ ました。",
                "options": [
                    "ことに なり",
                    "ように なり",
                    "ことに し",
                    "ように し"
                ],
                "answer": "ことに なり",
                "translation": "Rapat diputuskan ditunda ke minggu depan."
            }, {
                "question": "駅前の 店は、今月末で 閉店する ______ ました。",
                "options": [
                    "ことに なり",
                    "ように なり",
                    "ことに し",
                    "ように し"
                ],
                "answer": "ことに なり",
                "translation": "Toko di depan stasiun diputuskan tutup akhir bulan ini."
            }, {
                "question": "今年の 研修は、オンラインで 行う ______ ました。",
                "options": [
                    "ことに なり",
                    "ように なり",
                    "ことに し",
                    "ように し"
                ],
                "answer": "ことに なり",
                "translation": "Pelatihan tahun ini diputuskan dilaksanakan secara online."
            }, {
                "question": "大事な メールを 間違えて 消し ______ ました。",
                "options": [
                    "て しまい",
                    "て おき",
                    "て み",
                    "て あり"
                ],
                "answer": "て しまい",
                "translation": "Saya tidak sengaja menghapus email penting."
            }, {
                "question": "終電で うっかり 寝 ______ 、新宿まで 行ってしまいました。",
                "options": [
                    "て しまい",
                    "て おき",
                    "て み",
                    "て あり"
                ],
                "answer": "て しまい",
                "translation": "Saya ketiduran di kereta terakhir dan malah sampai Shinjuku."
            }, {
                "question": "予約の 日を すっかり 忘れ ______ ました。",
                "options": [
                    "て しまい",
                    "て おき",
                    "て み",
                    "て あり"
                ],
                "answer": "て しまい",
                "translation": "Saya benar-benar lupa hari reservasinya."
            }, {
                "question": "コピーした 書類を 会議室に 置い ______ ました。",
                "options": [
                    "て しまい",
                    "て おき",
                    "て み",
                    "て あり"
                ],
                "answer": "て しまい",
                "translation": "Saya meninggalkan dokumen fotokopian di ruang rapat."
            }, {
                "question": "来週の 発表の ために、資料を 先に 印刷し ______ ます。",
                "options": [
                    "て おき",
                    "て み",
                    "て しまい",
                    "て あり"
                ],
                "answer": "て おき",
                "translation": "Untuk presentasi minggu depan, saya akan mencetak materi lebih dulu."
            }, {
                "question": "混む 前に、レストランを 予約して ______ ほうが いいです。",
                "options": [
                    "て おき",
                    "て み",
                    "て しまい",
                    "て あり"
                ],
                "answer": "て おき",
                "translation": "Sebaiknya reservasi restoran lebih dulu sebelum ramai."
            }, {
                "question": "あとで 困らないように、住所を メモして ______ ください。",
                "options": [
                    "て おき",
                    "て み",
                    "て しまい",
                    "て あり"
                ],
                "answer": "て おき",
                "translation": "Tolong catat alamatnya dulu agar nanti tidak repot."
            }, {
                "question": "会議の 前に、プロジェクターが 使えるか 確認して ______ ます。",
                "options": [
                    "て おき",
                    "て み",
                    "て しまい",
                    "て あり"
                ],
                "answer": "て おき",
                "translation": "Sebelum rapat, saya akan cek dulu apakah proyektor bisa dipakai."
            }, {
                "question": "この ソース、少し 辛いけど 一口 食べ ______ ませんか。",
                "options": [
                    "て み",
                    "て おき",
                    "て しまい",
                    "て あり"
                ],
                "answer": "て み",
                "translation": "Saus ini agak pedas, tapi mau coba makan sedikit?"
            }, {
                "question": "その アプリは 便利そうだから、一度 使って ______ つもりです。",
                "options": [
                    "て み",
                    "て おき",
                    "て しまい",
                    "て あり"
                ],
                "answer": "て み",
                "translation": "Aplikasinya kelihatannya praktis, jadi saya berniat mencobanya sekali."
            }, {
                "question": "わからなかったら、まず 自分で 調べて ______ ください。",
                "options": [
                    "て み",
                    "て おき",
                    "て しまい",
                    "て あり"
                ],
                "answer": "て み",
                "translation": "Kalau tidak paham, coba cari tahu sendiri dulu."
            }, {
                "question": "新しい カフェが できたので、帰りに 行って ______ たいです。",
                "options": [
                    "て み",
                    "て おき",
                    "て しまい",
                    "て あり"
                ],
                "answer": "て み",
                "translation": "Karena ada kafe baru, saya ingin mampir dan mencobanya sepulang kerja."
            }, {
                "question": "イヤホンで 音楽を 聞き ______ 、レポートを 書いて いました。",
                "options": [
                    "ながら",
                    "のに",
                    "けれど",
                    "ので"
                ],
                "answer": "ながら",
                "translation": "Saya menulis laporan sambil mendengarkan musik."
            }, {
                "question": "スマホで 地図を 見 ______ 、駅まで 歩きました。",
                "options": [
                    "ながら",
                    "のに",
                    "けれど",
                    "ので"
                ],
                "answer": "ながら",
                "translation": "Saya berjalan sampai stasiun sambil melihat peta di ponsel."
            }, {
                "question": "彼は アルバイトを し ______ 、専門学校に 通って います。",
                "options": [
                    "ながら",
                    "のに",
                    "けれど",
                    "ので"
                ],
                "answer": "ながら",
                "translation": "Dia kuliah di sekolah kejuruan sambil kerja part-time."
            }, {
                "question": "母は テレビを 見 ______ 、よく うたを 口ずさみます。",
                "options": [
                    "ながら",
                    "のに",
                    "けれど",
                    "ので"
                ],
                "answer": "ながら",
                "translation": "Ibu sering bersenandung sambil menonton TV."
            }, {
                "question": "さっき 着い ______ なのに、もう 帰るんですか。",
                "options": [
                    "た ばかり",
                    "て ばかり",
                    "る ばかり",
                    "た ところ"
                ],
                "answer": "た ばかり",
                "translation": "Padahal baru saja sampai, masa sudah mau pulang?"
            }, {
                "question": "この パンは 焼い ______ で、まだ 温かいです。",
                "options": [
                    "た ばかり",
                    "て ばかり",
                    "る ばかり",
                    "た ところ"
                ],
                "answer": "た ばかり",
                "translation": "Roti ini baru saja dipanggang, jadi masih hangat."
            }, {
                "question": "入社し ______ の 社員に、いきなり 一人で 任せるのは 難しいです。",
                "options": [
                    "た ばかり",
                    "て ばかり",
                    "る ばかり",
                    "た ところ"
                ],
                "answer": "た ばかり",
                "translation": "Sulit langsung menyerahkan semuanya kepada pegawai yang baru saja masuk."
            }, {
                "question": "会議が 終わっ ______ で、みんな まだ 部屋に います。",
                "options": [
                    "た ばかり",
                    "て ばかり",
                    "る ばかり",
                    "た ところ"
                ],
                "answer": "た ばかり",
                "translation": "Rapat baru saja selesai, jadi semua masih berada di ruangan."
            }, {
                "question": "今 ちょうど 出かける ______ なので、あとで 電話します。",
                "options": [
                    "ところ",
                    "ばかり",
                    "あいだ",
                    "うち"
                ],
                "answer": "ところ",
                "translation": "Sekarang saya tepat akan berangkat, jadi nanti saya telepon."
            }, {
                "question": "これから 社長に 相談する ______ です。",
                "options": [
                    "ところ",
                    "ばかり",
                    "あいだ",
                    "うち"
                ],
                "answer": "ところ",
                "translation": "Saya sekarang tepat akan berkonsultasi dengan direktur."
            }, {
                "question": "昼ご飯を 食べる ______ だったのに、急に 客が 来ました。",
                "options": [
                    "ところ",
                    "ばかり",
                    "あいだ",
                    "うち"
                ],
                "answer": "ところ",
                "translation": "Padahal saya tepat akan makan siang, tiba-tiba tamu datang."
            }, {
                "question": "ちょうど バスに 乗る ______ で、連絡が 遅れました。",
                "options": [
                    "ところ",
                    "ばかり",
                    "あいだ",
                    "うち"
                ],
                "answer": "ところ",
                "translation": "Saya tepat akan naik bus, jadi terlambat menghubungi."
            }, {
                "question": "駅に 着いた ______ で、先輩から メッセージが 来ました。",
                "options": [
                    "ところ",
                    "ばかり",
                    "あいだ",
                    "うち"
                ],
                "answer": "ところ",
                "translation": "Begitu sampai di stasiun, saya mendapat pesan dari senior."
            }, {
                "question": "今、会議が 終わった ______ です。",
                "options": [
                    "ところ",
                    "ばかり",
                    "あいだ",
                    "うち"
                ],
                "answer": "ところ",
                "translation": "Rapat baru saja selesai sekarang."
            }, {
                "question": "さっき 店を 出た ______ なのに、もう 忘れ物に 気づきました。",
                "options": [
                    "ところ",
                    "ばかり",
                    "あいだ",
                    "うち"
                ],
                "answer": "ところ",
                "translation": "Padahal baru saja keluar dari toko, saya sudah sadar ada barang tertinggal."
            }, {
                "question": "電話を 切った ______ で、また 相手から かかってきました。",
                "options": [
                    "ところ",
                    "ばかり",
                    "あいだ",
                    "うち"
                ],
                "answer": "ところ",
                "translation": "Baru saja menutup telepon, orang itu menelepon lagi."
            }, {
                "question": "いま 重要な 書類を 確認して いる ______ なので、少し 待ってください。",
                "options": [
                    "ところ",
                    "ばかり",
                    "あいだ",
                    "うち"
                ],
                "answer": "ところ",
                "translation": "Saya sedang mengecek dokumen penting, jadi tolong tunggu sebentar."
            }, {
                "question": "ちょうど 電車を 待って いる ______ です。",
                "options": [
                    "ところ",
                    "ばかり",
                    "あいだ",
                    "うち"
                ],
                "answer": "ところ",
                "translation": "Saya tepat sedang menunggu kereta."
            }, {
                "question": "いま お客さんと 話して いる ______ ですから、あとで 折り返します。",
                "options": [
                    "ところ",
                    "ばかり",
                    "あいだ",
                    "うち"
                ],
                "answer": "ところ",
                "translation": "Sekarang saya sedang bicara dengan pelanggan, jadi nanti saya hubungi balik."
            }, {
                "question": "夕食を 作って いる ______ だったので、インターホンに 気づきませんでした。",
                "options": [
                    "ところ",
                    "ばかり",
                    "あいだ",
                    "うち"
                ],
                "answer": "ところ",
                "translation": "Karena saya sedang memasak makan malam, saya tidak sadar ada interkom."
            }, {
                "question": "来週の 金曜日に、部署の 歓迎会を 開く ______ です。",
                "options": [
                    "予定",
                    "つもり",
                    "こと",
                    "はず"
                ],
                "answer": "予定",
                "translation": "Rencananya Jumat depan akan diadakan pesta penyambutan divisi."
            }, {
                "question": "この 書類は 今日中に 提出する ______ です。",
                "options": [
                    "予定",
                    "つもり",
                    "こと",
                    "はず"
                ],
                "answer": "予定",
                "translation": "Dokumen ini rencananya diserahkan hari ini."
            }, {
                "question": "来月、京都へ 出張する ______ が あります。",
                "options": [
                    "予定",
                    "つもり",
                    "こと",
                    "はず"
                ],
                "answer": "予定",
                "translation": "Ada rencana dinas ke Kyoto bulan depan."
            }, {
                "question": "今年の 夏は、日本海側を 旅行する ______ です。",
                "options": [
                    "予定",
                    "つもり",
                    "こと",
                    "はず"
                ],
                "answer": "予定",
                "translation": "Musim panas tahun ini rencananya saya berwisata ke pesisir Laut Jepang."
            }, {
                "question": "田中さんは さっき 受付を 通ったから、もう 会議室に いる ______ です。",
                "options": [
                    "はず",
                    "つもり",
                    "予定",
                    "わけ"
                ],
                "answer": "はず",
                "translation": "Karena Tanaka tadi lewat resepsionis, seharusnya dia sudah ada di ruang rapat."
            }, {
                "question": "この 番線なら、次に 来るのは 新大阪行きの ______ です。",
                "options": [
                    "はず",
                    "つもり",
                    "予定",
                    "わけ"
                ],
                "answer": "はず",
                "translation": "Kalau di peron ini, seharusnya kereta berikutnya tujuan Shin-Osaka."
            }, {
                "question": "締め切りは 明日だから、今日は まだ 受付して いる ______ です。",
                "options": [
                    "はず",
                    "つもり",
                    "予定",
                    "わけ"
                ],
                "answer": "はず",
                "translation": "Karena tenggatnya besok, hari ini seharusnya pendaftaran masih buka."
            }, {
                "question": "先輩も 参加すると 言っていたので、もう 近くまで 来ている ______ です。",
                "options": [
                    "はず",
                    "つもり",
                    "予定",
                    "わけ"
                ],
                "answer": "はず",
                "translation": "Karena senior bilang akan ikut, seharusnya dia sudah dekat."
            }, {
                "question": "忘れないように、予定は その場で 手帳に 書く ______ ています。",
                "options": [
                    "ように し",
                    "ことに し",
                    "ように なり",
                    "ことに なり"
                ],
                "answer": "ように し",
                "translation": "Agar tidak lupa, saya berusaha langsung menulis jadwal ke agenda."
            }, {
                "question": "風邪を ひかないように、外から 帰ったら すぐ 手を 洗う ______ います。",
                "options": [
                    "ように し",
                    "ことに し",
                    "ように なり",
                    "ことに なり"
                ],
                "answer": "ように し",
                "translation": "Agar tidak masuk angin, saya berusaha langsung cuci tangan setelah pulang."
            }, {
                "question": "発音を 良くするために、毎日 声に 出して 読む ______ います。",
                "options": [
                    "ように し",
                    "ことに し",
                    "ように なり",
                    "ことに なり"
                ],
                "answer": "ように し",
                "translation": "Untuk memperbaiki pelafalan, saya berusaha membaca dengan suara keras setiap hari."
            }, {
                "question": "遅刻しないように、前の 夜に 服を 準備しておく ______ います。",
                "options": [
                    "ように し",
                    "ことに し",
                    "ように なり",
                    "ことに なり"
                ],
                "answer": "ように し",
                "translation": "Agar tidak telat, saya berusaha menyiapkan pakaian malam sebelumnya."
            }, {
                "question": "留学する ______ 、今から お金を 貯めて います。",
                "options": [
                    "ために",
                    "ように",
                    "ので",
                    "のに"
                ],
                "answer": "ために",
                "translation": "Demi studi ke luar negeri, saya menabung dari sekarang."
            }, {
                "question": "健康の ______ 、駅まで 歩く ことに しました。",
                "options": [
                    "ために",
                    "ように",
                    "ので",
                    "のに"
                ],
                "answer": "ために",
                "translation": "Demi kesehatan, saya memutuskan berjalan sampai stasiun."
            }, {
                "question": "試験に 合格する ______ 、毎日 三時間 ずつ 勉強して います。",
                "options": [
                    "ために",
                    "ように",
                    "ので",
                    "のに"
                ],
                "answer": "ために",
                "translation": "Demi lulus ujian, saya belajar tiga jam setiap hari."
            }, {
                "question": "新しい 仕事に 慣れる ______ 、メモを よく 取って います。",
                "options": [
                    "ために",
                    "ように",
                    "ので",
                    "のに"
                ],
                "answer": "ために",
                "translation": "Agar terbiasa dengan pekerjaan baru, saya sering mencatat."
            }, {
                "question": "忘れない ______ 、スマホで アラームを 設定しました。",
                "options": [
                    "ように",
                    "ために",
                    "ので",
                    "のに"
                ],
                "answer": "ように",
                "translation": "Agar tidak lupa, saya mengatur alarm di ponsel."
            }, {
                "question": "子どもでも 読める ______ 、ルビを 付けて あります。",
                "options": [
                    "ように",
                    "ために",
                    "ので",
                    "のに"
                ],
                "answer": "ように",
                "translation": "Agar bisa dibaca anak-anak juga, sudah diberi furigana."
            }, {
                "question": "だれでも 使える ______ 、説明を やさしく しました。",
                "options": [
                    "ように",
                    "ために",
                    "ので",
                    "のに"
                ],
                "answer": "ように",
                "translation": "Agar siapa pun bisa memakai, penjelasannya dibuat mudah."
            }, {
                "question": "迷わない ______ 、地図を 先に 送っておきます。",
                "options": [
                    "ように",
                    "ために",
                    "ので",
                    "のに"
                ],
                "answer": "ように",
                "translation": "Agar tidak tersesat, saya kirimkan peta lebih dulu."
            }, {
                "question": "財布に 千円 ______ 入って いなかったので、ATMを 探しました。",
                "options": [
                    "しか",
                    "だけ",
                    "ほど",
                    "ばかり"
                ],
                "answer": "しか",
                "translation": "Karena di dompet hanya ada seribu yen, saya mencari ATM."
            }, {
                "question": "今日は 一時間 ______ 勉強できませんでした。",
                "options": [
                    "しか",
                    "だけ",
                    "ほど",
                    "ばかり"
                ],
                "answer": "しか",
                "translation": "Hari ini saya hanya bisa belajar satu jam."
            }, {
                "question": "この 店は 日曜日 ______ 開いて いません。",
                "options": [
                    "しか",
                    "だけ",
                    "ほど",
                    "ばかり"
                ],
                "answer": "しか",
                "translation": "Toko ini hanya buka pada hari Minggu."
            }, {
                "question": "会議室には 部長と 私 ______ いませんでした。",
                "options": [
                    "しか",
                    "だけ",
                    "ほど",
                    "ばかり"
                ],
                "answer": "しか",
                "translation": "Di ruang rapat hanya ada kepala divisi dan saya."
            }, {
                "question": "最近 忙しくて、コンビニの おにぎり ______ 食べて います。",
                "options": [
                    "ばかり",
                    "しか",
                    "だけ",
                    "ほど"
                ],
                "answer": "ばかり",
                "translation": "Akhir-akhir ini sibuk, jadi saya makan onigiri konbini terus."
            }, {
                "question": "彼は 人の 話を 聞かないで、自分の 意見 ______ 言って いる。",
                "options": [
                    "ばかり",
                    "しか",
                    "だけ",
                    "ほど"
                ],
                "answer": "ばかり",
                "translation": "Dia tidak mendengarkan orang lain dan hanya mengatakan pendapatnya sendiri."
            }, {
                "question": "スマホを 見て ______ いないで、少し 休んだら どう？",
                "options": [
                    "ばかり",
                    "しか",
                    "だけ",
                    "ほど"
                ],
                "answer": "ばかり",
                "translation": "Jangan terus-terusan melihat ponsel; bagaimana kalau istirahat sedikit?"
            }, {
                "question": "雨の日が 続いて、洗濯物が たまる ______ です。",
                "options": [
                    "ばかり",
                    "しか",
                    "だけ",
                    "ほど"
                ],
                "answer": "ばかり",
                "translation": "Karena hari hujan berlanjut, cucian jadi menumpuk terus."
            }, {
                "question": "時間が あれ ______ 、駅前の 新しい 本屋に 行きませんか。",
                "options": [
                    "ば",
                    "と",
                    "たら",
                    "なら"
                ],
                "answer": "ば",
                "translation": "Kalau ada waktu, mau ke toko buku baru di depan stasiun?"
            }, {
                "question": "この ボタンを 押せ ______ 、受付番号が 出ます。",
                "options": [
                    "ば",
                    "と",
                    "たら",
                    "なら"
                ],
                "answer": "ば",
                "translation": "Kalau tombol ini ditekan, nomor antrean akan keluar."
            }, {
                "question": "もう 少し 安けれ ______ 、この かばんを 買いたいです。",
                "options": [
                    "ば",
                    "と",
                    "たら",
                    "なら"
                ],
                "answer": "ば",
                "translation": "Kalau sedikit lebih murah, saya ingin beli tas ini."
            }, {
                "question": "駅から 近けれ ______ 、毎日でも 通いたいです。",
                "options": [
                    "ば",
                    "と",
                    "たら",
                    "なら"
                ],
                "answer": "ば",
                "translation": "Kalau dekat dari stasiun, saya ingin datang setiap hari pun."
            }, {
                "question": "ちゃんと 地図を 見た ______ 、出口を 間違えました。",
                "options": [
                    "のに",
                    "ので",
                    "から",
                    "けれど"
                ],
                "answer": "のに",
                "translation": "Padahal sudah melihat peta dengan benar, saya salah pintu keluar."
            }, {
                "question": "日曜日な ______ 、会社から 電話が 来ました。",
                "options": [
                    "のに",
                    "ので",
                    "から",
                    "けれど"
                ],
                "answer": "のに",
                "translation": "Padahal hari Minggu, saya mendapat telepon dari kantor."
            }, {
                "question": "約束の 時間に 間に合った ______ 、相手は もう 帰って いました。",
                "options": [
                    "のに",
                    "ので",
                    "から",
                    "けれど"
                ],
                "answer": "のに",
                "translation": "Padahal saya sempat tiba tepat waktu, lawan bicara sudah pulang."
            }, {
                "question": "この 店は 有名な ______ 、思ったより 並びませんでした。",
                "options": [
                    "のに",
                    "ので",
                    "から",
                    "けれど"
                ],
                "answer": "のに",
                "translation": "Padahal toko ini terkenal, antreannya tidak separah yang saya kira."
            }, {
                "question": "この アプリは 操作が 簡単で、初めてでも 使い ______ です。",
                "options": [
                    "やすい",
                    "にくい",
                    "すぎる",
                    "そうだ"
                ],
                "answer": "やすい",
                "translation": "Aplikasi ini mudah digunakan bahkan untuk pertama kali."
            }, {
                "question": "この ペンは 軽くて 書き ______ です。",
                "options": [
                    "やすい",
                    "にくい",
                    "すぎる",
                    "そうだ"
                ],
                "answer": "やすい",
                "translation": "Pulpen ini ringan dan mudah dipakai menulis."
            }, {
                "question": "この 教科書は 例が 多いので、理解し ______ です。",
                "options": [
                    "やすい",
                    "にくい",
                    "すぎる",
                    "そうだ"
                ],
                "answer": "やすい",
                "translation": "Karena contoh di buku teks ini banyak, jadi mudah dipahami."
            }, {
                "question": "その 説明は 順番が はっきりしていて、覚え ______ です。",
                "options": [
                    "やすい",
                    "にくい",
                    "すぎる",
                    "そうだ"
                ],
                "answer": "やすい",
                "translation": "Penjelasannya runtut, jadi mudah diingat."
            }, {
                "question": "この マスクは 厚くて、少し 息が し ______ です。",
                "options": [
                    "にくい",
                    "やすい",
                    "すぎる",
                    "そうだ"
                ],
                "answer": "にくい",
                "translation": "Masker ini tebal sehingga agak sulit bernapas."
            }, {
                "question": "この 漢字は 形が 似ていて、覚え ______ です。",
                "options": [
                    "にくい",
                    "やすい",
                    "すぎる",
                    "そうだ"
                ],
                "answer": "にくい",
                "translation": "Kanji ini bentuknya mirip, jadi sulit diingat."
            }, {
                "question": "あの 先生は 声が 小さくて、聞き ______ です。",
                "options": [
                    "にくい",
                    "やすい",
                    "すぎる",
                    "そうだ"
                ],
                "answer": "にくい",
                "translation": "Suara guru itu kecil sehingga sulit didengar."
            }, {
                "question": "駅前は 人が 多すぎて、歩き ______ です。",
                "options": [
                    "にくい",
                    "やすい",
                    "すぎる",
                    "そうだ"
                ],
                "answer": "にくい",
                "translation": "Di depan stasiun terlalu ramai sehingga sulit berjalan."
            }, {
                "question": "今日は 疲れて いるのに、コーヒーを 飲み ______ て 眠れません。",
                "options": [
                    "すぎ",
                    "はじめ",
                    "おわり",
                    "つづけ"
                ],
                "answer": "すぎ",
                "translation": "Padahal saya lelah, tapi terlalu banyak minum kopi hingga tidak bisa tidur."
            }, {
                "question": "昼ご飯を 食べ ______ て、午後 ずっと 眠かったです。",
                "options": [
                    "すぎ",
                    "はじめ",
                    "おわり",
                    "つづけ"
                ],
                "answer": "すぎ",
                "translation": "Saya terlalu banyak makan siang sehingga mengantuk sepanjang sore."
            }, {
                "question": "この かばんは 荷物を 入れ ______ て、重く なりました。",
                "options": [
                    "すぎ",
                    "はじめ",
                    "おわり",
                    "つづけ"
                ],
                "answer": "すぎ",
                "translation": "Tas ini terlalu banyak diisi barang sehingga menjadi berat."
            }, {
                "question": "週末に お金を 使い ______ て、月末が ちょっと 不安です。",
                "options": [
                    "すぎ",
                    "はじめ",
                    "おわり",
                    "つづけ"
                ],
                "answer": "すぎ",
                "translation": "Saya terlalu banyak menghabiskan uang saat akhir pekan sehingga agak cemas menjelang akhir bulan."
            }, {
                "question": "天気予報に よると、今夜は 雪に なる ______。",
                "options": [
                    "そうだ",
                    "ようだ",
                    "らしい",
                    "みたいだ"
                ],
                "answer": "そうだ",
                "translation": "Menurut ramalan cuaca, malam ini katanya akan turun salju."
            }, {
                "question": "山田さんは もう 会社を 出た ______ よ。",
                "options": [
                    "そうだ",
                    "ようだ",
                    "らしい",
                    "みたいだ"
                ],
                "answer": "そうだ",
                "translation": "Katanya Yamada-san sudah keluar dari kantor."
            }, {
                "question": "この 近くに おいしい ラーメン屋が できた ______ から、今度 行こう。",
                "options": [
                    "そうだ",
                    "ようだ",
                    "らしい",
                    "みたいだ"
                ],
                "answer": "そうだ",
                "translation": "Katanya ada kedai ramen enak buka dekat sini, jadi lain kali ayo pergi."
            }, {
                "question": "部長は 来週から 二週間 出張する ______。",
                "options": [
                    "そうだ",
                    "ようだ",
                    "らしい",
                    "みたいだ"
                ],
                "answer": "そうだ",
                "translation": "Katanya kepala divisi akan dinas luar kota dua minggu mulai minggu depan."
            }, {
                "question": "鈴木さんは 風邪を ひいた ______ ので、今日は 休みです。",
                "options": [
                    "らしい",
                    "そうだ",
                    "ようだ",
                    "みたいだ"
                ],
                "answer": "らしい",
                "translation": "Sepertinya Suzuki sakit flu, jadi hari ini dia libur."
            }, {
                "question": "彼は まだ 学生なのに、考え方が 大人 ______。",
                "options": [
                    "らしい",
                    "そうだ",
                    "ようだ",
                    "みたいだ"
                ],
                "answer": "らしい",
                "translation": "Dia masih mahasiswa, tapi cara berpikirnya sangat dewasa."
            }, {
                "question": "この 店の ケーキは 地元でも 有名 ______。",
                "options": [
                    "らしい",
                    "そうだ",
                    "ようだ",
                    "みたいだ"
                ],
                "answer": "らしい",
                "translation": "Kue di toko ini katanya terkenal bahkan di daerah sini."
            }, {
                "question": "その かばん、値段の わりに ずいぶん 丈夫 ______ ね。",
                "options": [
                    "らしい",
                    "そうだ",
                    "ようだ",
                    "みたいだ"
                ],
                "answer": "らしい",
                "translation": "Tas itu kelihatannya benar-benar kokoh untuk harganya."
            }
        ],
        "bunpou-composition": [{
                "question": "______ ______ __★__ ______。",
                "options": [
                    "病院の 予約が",
                    "一人でも",
                    "できるように なった",
                    "日本に 来てから"
                ],
                "answer": "病院の 予約が",
                "correctOrder": [
                    4,
                    2,
                    1,
                    3
                ],
                "translation": "Sejak datang ke Jepang, saya jadi bisa membuat reservasi rumah sakit sendiri."
            }, {
                "question": "______ ______ __★__ ______。",
                "options": [
                    "使えるように なった",
                    "自然に 敬語が",
                    "練習を 続けて",
                    "前より"
                ],
                "answer": "自然に 敬語が",
                "correctOrder": [
                    3,
                    4,
                    2,
                    1
                ],
                "translation": "Setelah terus berlatih, saya jadi bisa memakai keigo lebih alami."
            }, {
                "question": "______ ______ __★__ ______。",
                "options": [
                    "朝も",
                    "ように なった",
                    "すっきり 起きられる",
                    "毎日 早く 寝たので"
                ],
                "answer": "すっきり 起きられる",
                "correctOrder": [
                    4,
                    1,
                    3,
                    2
                ],
                "translation": "Karena tidur cepat setiap hari, saya jadi bisa bangun dengan segar."
            }, {
                "question": "______ ______ __★__ ______。",
                "options": [
                    "もう",
                    "迷わずに 行ける",
                    "駅まで 何度も 歩いて",
                    "ように なった"
                ],
                "answer": "迷わずに 行ける",
                "correctOrder": [
                    3,
                    1,
                    2,
                    4
                ],
                "translation": "Setelah beberapa kali berjalan ke stasiun, sekarang saya bisa pergi tanpa tersesat."
            }, {
                "question": "______ ______ __★__ ______。",
                "options": [
                    "毎朝",
                    "野菜を 食べる",
                    "ように している",
                    "健康の ために"
                ],
                "answer": "野菜を 食べる",
                "correctOrder": [
                    4,
                    1,
                    2,
                    3
                ],
                "translation": "Demi kesehatan, saya berusaha makan sayur setiap pagi."
            }, {
                "question": "______ ______ __★__ ______。",
                "options": [
                    "予定は",
                    "ように している",
                    "その場で メモする",
                    "忘れないように"
                ],
                "answer": "その場で メモする",
                "correctOrder": [
                    4,
                    1,
                    3,
                    2
                ],
                "translation": "Agar tidak lupa, saya berusaha mencatat jadwal saat itu juga."
            }, {
                "question": "______ ______ __★__ ______。",
                "options": [
                    "歩く 時間を 作る",
                    "できるだけ",
                    "雨の日でも",
                    "ように している"
                ],
                "answer": "歩く 時間を 作る",
                "correctOrder": [
                    3,
                    2,
                    1,
                    4
                ],
                "translation": "Bahkan saat hujan, saya berusaha meluangkan waktu untuk berjalan kaki."
            }, {
                "question": "______ ______ __★__ ______。",
                "options": [
                    "送信前に",
                    "ように している",
                    "ミスを 減らすために",
                    "もう一度 読み返す"
                ],
                "answer": "もう一度 読み返す",
                "correctOrder": [
                    3,
                    1,
                    4,
                    2
                ],
                "translation": "Untuk mengurangi kesalahan, saya berusaha membaca ulang sebelum mengirim."
            }, {
                "question": "______ ______ __★__ ______。",
                "options": [
                    "会議の 前に",
                    "コピーして",
                    "必要な 資料を",
                    "おいて ください"
                ],
                "answer": "コピーして",
                "correctOrder": [
                    1,
                    3,
                    2,
                    4
                ],
                "translation": "Tolong fotokopi materi yang diperlukan sebelum rapat."
            }, {
                "question": "______ ______ __★__ ______。",
                "options": [
                    "予約して",
                    "おきました",
                    "混む 前に",
                    "レストランを"
                ],
                "answer": "予約して",
                "correctOrder": [
                    3,
                    4,
                    1,
                    2
                ],
                "translation": "Saya sudah reservasi restoran sebelum ramai."
            }, {
                "question": "______ ______ __★__ ______。",
                "options": [
                    "メモして",
                    "パスワードを",
                    "おいた ほうが いい",
                    "あとで 困らないように"
                ],
                "answer": "メモして",
                "correctOrder": [
                    4,
                    2,
                    1,
                    3
                ],
                "translation": "Sebaiknya password dicatat dulu agar nanti tidak repot."
            }, {
                "question": "______ ______ __★__ ______。",
                "options": [
                    "おきます",
                    "調べて",
                    "乗り換え案内を",
                    "出張の 前に"
                ],
                "answer": "調べて",
                "correctOrder": [
                    4,
                    3,
                    2,
                    1
                ],
                "translation": "Sebelum dinas, saya akan cek rute transit terlebih dahulu."
            }, {
                "question": "______ ______ __★__ ______。",
                "options": [
                    "書いて いました",
                    "音楽を 聞きながら",
                    "カフェで",
                    "レポートを"
                ],
                "answer": "レポートを",
                "correctOrder": [
                    3,
                    2,
                    4,
                    1
                ],
                "translation": "Saya menulis laporan di kafe sambil mendengarkan musik."
            }, {
                "question": "______ ______ __★__ ______。",
                "options": [
                    "駅まで",
                    "歩いて いた",
                    "スマホで 地図を 見ながら",
                    "彼は"
                ],
                "answer": "駅まで",
                "correctOrder": [
                    4,
                    3,
                    1,
                    2
                ],
                "translation": "Dia berjalan sampai stasiun sambil melihat peta di ponsel."
            }, {
                "question": "______ ______ __★__ ______。",
                "options": [
                    "母は",
                    "テレビを 見ながら",
                    "して いる",
                    "よく 夕食の 準備を"
                ],
                "answer": "よく 夕食の 準備を",
                "correctOrder": [
                    1,
                    2,
                    4,
                    3
                ],
                "translation": "Ibu sering menyiapkan makan malam sambil menonton TV."
            }, {
                "question": "______ ______ __★__ ______。",
                "options": [
                    "して いた",
                    "弟は",
                    "部屋の 掃除を",
                    "歌を 口ずさみながら"
                ],
                "answer": "部屋の 掃除を",
                "correctOrder": [
                    2,
                    4,
                    3,
                    1
                ],
                "translation": "Adik saya membersihkan kamar sambil bersenandung."
            }, {
                "question": "______ ______ __★__ ______。",
                "options": [
                    "初めて",
                    "飲んでみた",
                    "抹茶ラテを",
                    "店員に すすめられて"
                ],
                "answer": "抹茶ラテを",
                "correctOrder": [
                    4,
                    1,
                    3,
                    2
                ],
                "translation": "Atas rekomendasi pegawai toko, saya mencoba matcha latte untuk pertama kali."
            }, {
                "question": "______ ______ __★__ ______。",
                "options": [
                    "自分で",
                    "変えてみた",
                    "使い方が わからなかったので",
                    "設定を"
                ],
                "answer": "設定を",
                "correctOrder": [
                    3,
                    1,
                    4,
                    2
                ],
                "translation": "Karena tidak tahu cara pakainya, saya coba mengubah pengaturannya sendiri."
            }, {
                "question": "______ ______ __★__ ______。",
                "options": [
                    "みる ことにした",
                    "応募して",
                    "まずは",
                    "難しそうだったが"
                ],
                "answer": "応募して",
                "correctOrder": [
                    4,
                    3,
                    2,
                    1
                ],
                "translation": "Walau kelihatannya sulit, saya memutuskan mencoba melamar dulu."
            }, {
                "question": "______ ______ __★__ ______。",
                "options": [
                    "新しい 教科書なので",
                    "最初から",
                    "声に 出して",
                    "読んでみた"
                ],
                "answer": "声に 出して",
                "correctOrder": [
                    1,
                    2,
                    3,
                    4
                ],
                "translation": "Karena ini buku teks baru, saya coba membacanya keras-keras dari awal."
            }, {
                "question": "______ ______ __★__ ______。",
                "options": [
                    "急いで いたので",
                    "傘を 忘れて",
                    "しまった",
                    "駅に"
                ],
                "answer": "傘を 忘れて",
                "correctOrder": [
                    1,
                    4,
                    2,
                    3
                ],
                "translation": "Karena terburu-buru, saya malah meninggalkan payung di stasiun."
            }, {
                "question": "______ ______ __★__ ______。",
                "options": [
                    "疲れて いて",
                    "しまった",
                    "寝過ごして",
                    "電車で"
                ],
                "answer": "寝過ごして",
                "correctOrder": [
                    1,
                    4,
                    3,
                    2
                ],
                "translation": "Karena lelah, saya ketiduran dan kelewatan stasiun di kereta."
            }, {
                "question": "______ ______ __★__ ______。",
                "options": [
                    "うっかり",
                    "しまった",
                    "消して",
                    "大事な メールを"
                ],
                "answer": "消して",
                "correctOrder": [
                    4,
                    1,
                    3,
                    2
                ],
                "translation": "Saya tidak sengaja menghapus email penting."
            }, {
                "question": "______ ______ __★__ ______。",
                "options": [
                    "送信して",
                    "しまった",
                    "説明を よく 聞かずに",
                    "先に"
                ],
                "answer": "送信して",
                "correctOrder": [
                    3,
                    4,
                    1,
                    2
                ],
                "translation": "Tanpa mendengarkan penjelasan baik-baik, saya malah terlanjur mengirim."
            }, {
                "question": "______ ______ __★__ ______。",
                "options": [
                    "まだ この 町に",
                    "引っ越した",
                    "ばかりで",
                    "慣れて いない"
                ],
                "answer": "まだ この 町に",
                "correctOrder": [
                    2,
                    3,
                    1,
                    4
                ],
                "translation": "Karena baru pindah, saya masih belum terbiasa dengan kota ini."
            }, {
                "question": "______ ______ __★__ ______。",
                "options": [
                    "ばかりの",
                    "道を 聞かれた",
                    "日本に 来た",
                    "留学生に"
                ],
                "answer": "留学生に",
                "correctOrder": [
                    3,
                    1,
                    4,
                    2
                ],
                "translation": "Saya ditanya arah oleh siswa asing yang baru datang ke Jepang."
            }, {
                "question": "______ ______ __★__ ______。",
                "options": [
                    "店頭に 並んだ",
                    "パンが",
                    "ばかりの",
                    "焼いた"
                ],
                "answer": "パンが",
                "correctOrder": [
                    4,
                    3,
                    2,
                    1
                ],
                "translation": "Roti yang baru dipanggang dipajang di etalase."
            }, {
                "question": "______ ______ __★__ ______。",
                "options": [
                    "ばかりなのに",
                    "戦力に なっている",
                    "入社した",
                    "彼は もう"
                ],
                "answer": "彼は もう",
                "correctOrder": [
                    3,
                    1,
                    4,
                    2
                ],
                "translation": "Padahal baru masuk kerja, dia sudah menjadi tenaga andalan."
            }, {
                "question": "______ ______ __★__ ______。",
                "options": [
                    "寝る つもりだ",
                    "今夜は",
                    "明日は 早いので",
                    "11時までに"
                ],
                "answer": "11時までに",
                "correctOrder": [
                    3,
                    2,
                    4,
                    1
                ],
                "translation": "Karena besok harus bangun pagi, malam ini saya berniat tidur sebelum jam 11."
            }, {
                "question": "______ ______ __★__ ______。",
                "options": [
                    "来月から",
                    "新しい 店で",
                    "アルバイトを",
                    "始める 予定だ"
                ],
                "answer": "アルバイトを",
                "correctOrder": [
                    1,
                    2,
                    3,
                    4
                ],
                "translation": "Mulai bulan depan saya punya rencana mulai kerja part-time di toko baru."
            }, {
                "question": "______ ______ __★__ ______。",
                "options": [
                    "ゆっくり",
                    "夏休みには",
                    "回る つもりだ",
                    "京都と 奈良を"
                ],
                "answer": "ゆっくり",
                "correctOrder": [
                    2,
                    4,
                    1,
                    3
                ],
                "translation": "Saat liburan musim panas saya berniat berkeliling Kyoto dan Nara dengan santai."
            }, {
                "question": "______ ______ __★__ ______。",
                "options": [
                    "会議が 終わったら",
                    "送る 予定です",
                    "議事録を",
                    "すぐに"
                ],
                "answer": "議事録を",
                "correctOrder": [
                    1,
                    4,
                    3,
                    2
                ],
                "translation": "Setelah rapat selesai, saya berencana segera mengirim notulen."
            }, {
                "question": "______ ______ __★__ ______。",
                "options": [
                    "留学する ために",
                    "今から",
                    "生活費を",
                    "貯めて いる"
                ],
                "answer": "生活費を",
                "correctOrder": [
                    1,
                    2,
                    3,
                    4
                ],
                "translation": "Demi studi ke luar negeri, saya sedang menabung biaya hidup dari sekarang."
            }, {
                "question": "______ ______ __★__ ______。",
                "options": [
                    "今は",
                    "上げたい",
                    "日本で 働く ために",
                    "会話力を"
                ],
                "answer": "会話力を",
                "correctOrder": [
                    3,
                    1,
                    4,
                    2
                ],
                "translation": "Untuk bekerja di Jepang, sekarang saya ingin meningkatkan kemampuan percakapan."
            }, {
                "question": "______ ______ __★__ ______。",
                "options": [
                    "毎日",
                    "ストレッチを",
                    "健康を 保つ ために",
                    "して いる"
                ],
                "answer": "ストレッチを",
                "correctOrder": [
                    3,
                    1,
                    2,
                    4
                ],
                "translation": "Untuk menjaga kesehatan, saya melakukan stretching setiap hari."
            }, {
                "question": "______ ______ __★__ ______。",
                "options": [
                    "難しい 漢字に",
                    "ルビを",
                    "付けて ある",
                    "子どもでも 読めるように"
                ],
                "answer": "ルビを",
                "correctOrder": [
                    4,
                    1,
                    2,
                    3
                ],
                "translation": "Agar anak-anak pun bisa membaca, kanji sulit sudah diberi furigana."
            }, {
                "question": "______ ______ __★__ ______。",
                "options": [
                    "スマホに",
                    "忘れないように",
                    "アラームを",
                    "設定した"
                ],
                "answer": "アラームを",
                "correctOrder": [
                    2,
                    1,
                    3,
                    4
                ],
                "translation": "Agar tidak lupa, saya memasang alarm di ponsel."
            }, {
                "question": "______ ______ __★__ ______。",
                "options": [
                    "だれでも 使えるように",
                    "できるだけ",
                    "説明を",
                    "やさしくした"
                ],
                "answer": "できるだけ",
                "correctOrder": [
                    1,
                    3,
                    2,
                    4
                ],
                "translation": "Agar siapa pun bisa memakai, penjelasannya dibuat semudah mungkin."
            }, {
                "question": "______ ______ __★__ ______。",
                "options": [
                    "前の 夜から",
                    "遅刻しないように",
                    "用意しておく",
                    "服と 資料を"
                ],
                "answer": "服と 資料を",
                "correctOrder": [
                    2,
                    1,
                    4,
                    3
                ],
                "translation": "Agar tidak telat, saya menyiapkan pakaian dan materi sejak malam sebelumnya."
            }, {
                "question": "______ ______ __★__ ______。",
                "options": [
                    "送っておきます",
                    "集合場所の 地図を",
                    "先に",
                    "迷わないように"
                ],
                "answer": "先に",
                "correctOrder": [
                    4,
                    2,
                    3,
                    1
                ],
                "translation": "Agar tidak tersesat, saya akan kirim peta lokasi kumpul lebih dulu."
            }, {
                "question": "______ ______ __★__ ______。",
                "options": [
                    "寄りたい",
                    "帰りに",
                    "時間が あれば",
                    "図書館へ"
                ],
                "answer": "図書館へ",
                "correctOrder": [
                    3,
                    2,
                    4,
                    1
                ],
                "translation": "Kalau ada waktu, saya ingin mampir ke perpustakaan saat pulang."
            }, {
                "question": "______ ______ __★__ ______。",
                "options": [
                    "買いたい",
                    "この パソコンを",
                    "少し 安ければ",
                    "くらいだ"
                ],
                "answer": "買いたい",
                "correctOrder": [
                    3,
                    2,
                    1,
                    4
                ],
                "translation": "Kalau sedikit lebih murah, saya sampai ingin membeli laptop ini."
            }, {
                "question": "______ ______ __★__ ______。",
                "options": [
                    "思う",
                    "毎日でも",
                    "通いたいと",
                    "駅から 近ければ"
                ],
                "answer": "通いたいと",
                "correctOrder": [
                    4,
                    2,
                    3,
                    1
                ],
                "translation": "Kalau dekat dari stasiun, saya merasa ingin datang setiap hari."
            }, {
                "question": "______ ______ __★__ ______。",
                "options": [
                    "散歩したい",
                    "晴れれば",
                    "川沿いを",
                    "週末は"
                ],
                "answer": "川沿いを",
                "correctOrder": [
                    2,
                    4,
                    3,
                    1
                ],
                "translation": "Kalau cuaca cerah, akhir pekan saya ingin berjalan-jalan di tepi sungai."
            }, {
                "question": "______ ______ __★__ ______。",
                "options": [
                    "出口を",
                    "地図を 見たのに",
                    "しまった",
                    "間違えて"
                ],
                "answer": "間違えて",
                "correctOrder": [
                    2,
                    1,
                    4,
                    3
                ],
                "translation": "Padahal sudah melihat peta, saya malah salah pintu keluar."
            }, {
                "question": "______ ______ __★__ ______。",
                "options": [
                    "電話が",
                    "日曜日なのに",
                    "かかってきた",
                    "会社から"
                ],
                "answer": "電話が",
                "correctOrder": [
                    2,
                    4,
                    1,
                    3
                ],
                "translation": "Padahal hari Minggu, saya malah ditelepon kantor."
            }, {
                "question": "______ ______ __★__ ______。",
                "options": [
                    "帰っていた",
                    "間に合ったのに",
                    "相手は もう",
                    "約束の 時間に"
                ],
                "answer": "相手は もう",
                "correctOrder": [
                    4,
                    2,
                    3,
                    1
                ],
                "translation": "Padahal saya sempat tepat waktu, lawan bicara sudah pulang."
            }, {
                "question": "______ ______ __★__ ______。",
                "options": [
                    "思ったより",
                    "並ばずに",
                    "有名な 店なのに",
                    "入れた"
                ],
                "answer": "並ばずに",
                "correctOrder": [
                    3,
                    1,
                    2,
                    4
                ],
                "translation": "Padahal toko terkenal, ternyata bisa masuk tanpa antre terlalu lama."
            }, {
                "question": "______ ______ __★__ ______。",
                "options": [
                    "いなかった",
                    "財布の 中には",
                    "千円しか",
                    "入って"
                ],
                "answer": "入って",
                "correctOrder": [
                    2,
                    3,
                    4,
                    1
                ],
                "translation": "Di dalam dompet hanya ada seribu yen."
            }, {
                "question": "______ ______ __★__ ______。",
                "options": [
                    "一時間しか",
                    "勉強でき",
                    "なかった",
                    "今日は"
                ],
                "answer": "勉強でき",
                "correctOrder": [
                    4,
                    1,
                    2,
                    3
                ],
                "translation": "Hari ini saya hanya bisa belajar satu jam."
            }, {
                "question": "______ ______ __★__ ______。",
                "options": [
                    "いなかった",
                    "部長と 私しか",
                    "残って",
                    "会議室には"
                ],
                "answer": "残って",
                "correctOrder": [
                    4,
                    2,
                    3,
                    1
                ],
                "translation": "Di ruang rapat tinggal kepala divisi dan saya saja."
            }, {
                "question": "______ ______ __★__ ______。",
                "options": [
                    "各駅停車しか",
                    "そうだ",
                    "止まらない",
                    "この 路線は"
                ],
                "answer": "止まらない",
                "correctOrder": [
                    4,
                    1,
                    3,
                    2
                ],
                "translation": "Katanya di jalur ini hanya kereta lokal yang berhenti."
            }, {
                "question": "______ ______ __★__ ______。",
                "options": [
                    "最近は 忙しくて",
                    "いる",
                    "食べて",
                    "コンビニの おにぎりばかり"
                ],
                "answer": "食べて",
                "correctOrder": [
                    1,
                    4,
                    3,
                    2
                ],
                "translation": "Belakangan ini sibuk, jadi saya makan onigiri konbini terus."
            }, {
                "question": "______ ______ __★__ ______。",
                "options": [
                    "彼は",
                    "していて",
                    "人の 話を 聞かない",
                    "自分の 話ばかり"
                ],
                "answer": "していて",
                "correctOrder": [
                    1,
                    4,
                    2,
                    3
                ],
                "translation": "Dia hanya bicara tentang dirinya sendiri dan tidak mendengarkan orang lain."
            }, {
                "question": "______ ______ __★__ ______。",
                "options": [
                    "たまっている",
                    "休日に 雨ばかり",
                    "洗濯物が",
                    "続いて"
                ],
                "answer": "洗濯物が",
                "correctOrder": [
                    2,
                    4,
                    3,
                    1
                ],
                "translation": "Karena hari libur terus hujan, cucian menumpuk."
            }, {
                "question": "______ ______ __★__ ______。",
                "options": [
                    "スマホばかり",
                    "休んだら どう",
                    "見ていないで",
                    "少し"
                ],
                "answer": "少し",
                "correctOrder": [
                    1,
                    3,
                    4,
                    2
                ],
                "translation": "Jangan terus melihat ponsel, bagaimana kalau istirahat sedikit?"
            }, {
                "question": "______ ______ __★__ ______。",
                "options": [
                    "週末は",
                    "家で ゆっくり",
                    "映画を 見たり",
                    "料理を したりする"
                ],
                "answer": "映画を 見たり",
                "correctOrder": [
                    1,
                    2,
                    3,
                    4
                ],
                "translation": "Saat akhir pekan saya santai di rumah dengan menonton film dan memasak."
            }, {
                "question": "______ ______ __★__ ______。",
                "options": [
                    "公園を 散歩したり",
                    "カフェで 本を",
                    "読んだり します",
                    "休みの 日は"
                ],
                "answer": "カフェで 本を",
                "correctOrder": [
                    4,
                    1,
                    2,
                    3
                ],
                "translation": "Saat libur saya jalan-jalan di taman dan membaca buku di kafe."
            }, {
                "question": "______ ______ __★__ ______。",
                "options": [
                    "友だちと 旅行したり",
                    "します",
                    "実家に 帰ったり",
                    "長い 休みには"
                ],
                "answer": "友だちと 旅行したり",
                "correctOrder": [
                    4,
                    3,
                    1,
                    2
                ],
                "translation": "Saat liburan panjang saya pulang kampung atau bepergian dengan teman."
            }, {
                "question": "______ ______ __★__ ______。",
                "options": [
                    "過ごす ことが 多い",
                    "彼は",
                    "動画を 見たりして",
                    "家で ギターを 弾いたり"
                ],
                "answer": "動画を 見たりして",
                "correctOrder": [
                    2,
                    4,
                    3,
                    1
                ],
                "translation": "Dia sering menghabiskan waktu di rumah dengan main gitar atau menonton video."
            }, {
                "question": "______ ______ __★__ ______。",
                "options": [
                    "画面が 見やすくて",
                    "初めてでも",
                    "使いやすい",
                    "この アプリは"
                ],
                "answer": "初めてでも",
                "correctOrder": [
                    4,
                    1,
                    2,
                    3
                ],
                "translation": "Aplikasi ini layarnya mudah dilihat sehingga mudah digunakan bahkan untuk pemula."
            }, {
                "question": "______ ______ __★__ ______。",
                "options": [
                    "歩きやすい",
                    "長い 時間でも",
                    "この くつは",
                    "軽いので"
                ],
                "answer": "長い 時間でも",
                "correctOrder": [
                    3,
                    4,
                    2,
                    1
                ],
                "translation": "Sepatu ini ringan, jadi mudah dipakai berjalan lama."
            }, {
                "question": "______ ______ __★__ ______。",
                "options": [
                    "少し 速くて",
                    "聞きにくい",
                    "あの 先生の 説明は",
                    "初めての 人には"
                ],
                "answer": "初めての 人には",
                "correctOrder": [
                    3,
                    1,
                    4,
                    2
                ],
                "translation": "Penjelasan guru itu agak cepat, jadi sulit didengar untuk orang yang baru pertama."
            }, {
                "question": "______ ______ __★__ ______。",
                "options": [
                    "この 漢字は",
                    "形が 似ていて",
                    "部類だ",
                    "覚えにくい"
                ],
                "answer": "覚えにくい",
                "correctOrder": [
                    1,
                    2,
                    4,
                    3
                ],
                "translation": "Kanji ini bentuknya mirip, jadi termasuk sulit diingat."
            }, {
                "question": "______ ______ __★__ ______。",
                "options": [
                    "眠れなかった",
                    "今日は 忙しくて",
                    "夜に",
                    "コーヒーを 飲みすぎて"
                ],
                "answer": "夜に",
                "correctOrder": [
                    2,
                    4,
                    3,
                    1
                ],
                "translation": "Hari ini karena sibuk saya minum kopi terlalu banyak sehingga malamnya tidak bisa tidur."
            }, {
                "question": "______ ______ __★__ ______。",
                "options": [
                    "午後は",
                    "食べすぎて",
                    "昼ご飯を",
                    "ずっと 眠かった"
                ],
                "answer": "午後は",
                "correctOrder": [
                    3,
                    2,
                    1,
                    4
                ],
                "translation": "Saya makan siang terlalu banyak sehingga sepanjang sore mengantuk."
            }, {
                "question": "______ ______ __★__ ______。",
                "options": [
                    "入れすぎて",
                    "かばんが",
                    "荷物を",
                    "重く なった"
                ],
                "answer": "かばんが",
                "correctOrder": [
                    3,
                    1,
                    2,
                    4
                ],
                "translation": "Karena memasukkan barang terlalu banyak, tas menjadi berat."
            }, {
                "question": "______ ______ __★__ ______。",
                "options": [
                    "少し 不安だ",
                    "お金を 使いすぎて",
                    "月末が",
                    "先週は"
                ],
                "answer": "月末が",
                "correctOrder": [
                    4,
                    2,
                    3,
                    1
                ],
                "translation": "Minggu lalu saya terlalu banyak menghabiskan uang, jadi agak cemas menjelang akhir bulan."
            }, {
                "question": "______ ______ __★__ ______。",
                "options": [
                    "日本人の 友だちが",
                    "くれた",
                    "履歴書を",
                    "チェックして"
                ],
                "answer": "チェックして",
                "correctOrder": [
                    1,
                    3,
                    4,
                    2
                ],
                "translation": "Teman Jepang saya mengecek CV saya."
            }, {
                "question": "______ ______ __★__ ______。",
                "options": [
                    "先生に",
                    "わからない ところを",
                    "説明して",
                    "もらった"
                ],
                "answer": "説明して",
                "correctOrder": [
                    2,
                    1,
                    3,
                    4
                ],
                "translation": "Saya mendapat penjelasan dari guru tentang bagian yang tidak saya pahami."
            }, {
                "question": "______ ______ __★__ ______。",
                "options": [
                    "付き合って",
                    "面接の 練習に",
                    "くれた",
                    "先輩が"
                ],
                "answer": "付き合って",
                "correctOrder": [
                    4,
                    2,
                    1,
                    3
                ],
                "translation": "Senior menemani saya latihan wawancara."
            }, {
                "question": "______ ______ __★__ ______。",
                "options": [
                    "店員さんに",
                    "もらいました",
                    "駅までの 行き方を",
                    "教えて"
                ],
                "answer": "教えて",
                "correctOrder": [
                    3,
                    1,
                    4,
                    2
                ],
                "translation": "Saya diberi tahu oleh pegawai toko cara menuju stasiun."
            }, {
                "question": "______ ______ __★__ ______。",
                "options": [
                    "異動する",
                    "ことに なった",
                    "来月から",
                    "大阪支社へ"
                ],
                "answer": "異動する",
                "correctOrder": [
                    3,
                    4,
                    1,
                    2
                ],
                "translation": "Mulai bulan depan saya diputuskan pindah ke cabang Osaka."
            }, {
                "question": "______ ______ __★__ ______。",
                "options": [
                    "行う",
                    "来週の 会議は",
                    "ことに なった",
                    "オンラインで"
                ],
                "answer": "行う",
                "correctOrder": [
                    2,
                    4,
                    1,
                    3
                ],
                "translation": "Rapat minggu depan diputuskan dilakukan secara online."
            }, {
                "question": "______ ______ __★__ ______。",
                "options": [
                    "ことに なった",
                    "駅前の 店は",
                    "今月末で",
                    "閉店する"
                ],
                "answer": "閉店する",
                "correctOrder": [
                    2,
                    3,
                    4,
                    1
                ],
                "translation": "Toko di depan stasiun diputuskan tutup akhir bulan ini."
            }, {
                "question": "______ ______ __★__ ______。",
                "options": [
                    "実施する",
                    "ことに なった",
                    "会費を 下げて",
                    "今年の 交流会は"
                ],
                "answer": "実施する",
                "correctOrder": [
                    4,
                    3,
                    1,
                    2
                ],
                "translation": "Pertemuan tahun ini diputuskan tetap diadakan dengan menurunkan biaya."
            }, {
                "question": "______ ______ __★__ ______。",
                "options": [
                    "今夜は",
                    "しれない",
                    "雪に なるかも",
                    "天気予報では"
                ],
                "answer": "雪に なるかも",
                "correctOrder": [
                    4,
                    1,
                    3,
                    2
                ],
                "translation": "Menurut ramalan cuaca, malam ini mungkin akan turun salju."
            }, {
                "question": "______ ______ __★__ ______。",
                "options": [
                    "新しい パン屋が",
                    "できた",
                    "らしい",
                    "駅前に"
                ],
                "answer": "できた",
                "correctOrder": [
                    4,
                    1,
                    2,
                    3
                ],
                "translation": "Katanya ada toko roti baru di depan stasiun."
            }, {
                "question": "______ ______ __★__ ______。",
                "options": [
                    "この スープは",
                    "かなり 辛そう",
                    "見た目より",
                    "ですね"
                ],
                "answer": "かなり 辛そう",
                "correctOrder": [
                    1,
                    3,
                    2,
                    4
                ],
                "translation": "Sup ini kelihatannya lebih pedas daripada tampilannya."
            }, {
                "question": "______ ______ __★__ ______。",
                "options": [
                    "出た",
                    "部長は",
                    "そうです",
                    "もう 会社を"
                ],
                "answer": "出た",
                "correctOrder": [
                    2,
                    4,
                    1,
                    3
                ],
                "translation": "Katanya kepala divisi sudah keluar dari kantor."
            }, {
                "question": "______ ______ __★__ ______。",
                "options": [
                    "北海道へ",
                    "日本に いる うちに",
                    "行ってみたい",
                    "一度は"
                ],
                "answer": "北海道へ",
                "correctOrder": [
                    2,
                    4,
                    1,
                    3
                ],
                "translation": "Selagi tinggal di Jepang, saya ingin setidaknya sekali pergi ke Hokkaido."
            }, {
                "question": "______ ______ __★__ ______。",
                "options": [
                    "雨が 降らない うちに",
                    "取り込んで",
                    "洗濯物を",
                    "おこう"
                ],
                "answer": "取り込んで",
                "correctOrder": [
                    1,
                    3,
                    2,
                    4
                ],
                "translation": "Sebelum hujan turun, sebaiknya angkat dulu cuciannya."
            }, {
                "question": "______ ______ __★__ ______。",
                "options": [
                    "会議の 間に",
                    "やめて ください",
                    "飲み物を",
                    "取りに 行くのは"
                ],
                "answer": "取りに 行くのは",
                "correctOrder": [
                    1,
                    3,
                    4,
                    2
                ],
                "translation": "Tolong jangan pergi mengambil minuman saat rapat berlangsung."
            }, {
                "question": "______ ______ __★__ ______。",
                "options": [
                    "もう一度",
                    "確認した",
                    "電車を 待っている 間に",
                    "今日の 予定を"
                ],
                "answer": "もう一度",
                "correctOrder": [
                    3,
                    4,
                    1,
                    2
                ],
                "translation": "Saat menunggu kereta, saya mengecek lagi jadwal hari ini."
            }, {
                "question": "______ ______ __★__ ______。",
                "options": [
                    "過ごす ことにした",
                    "近場で",
                    "今年の 夏は",
                    "遠くへは 行かず"
                ],
                "answer": "近場で",
                "correctOrder": [
                    3,
                    4,
                    2,
                    1
                ],
                "translation": "Musim panas tahun ini saya memutuskan tidak pergi jauh dan menghabiskan waktu di sekitar saja."
            }, {
                "question": "______ ______ __★__ ______。",
                "options": [
                    "残業せずに",
                    "帰る ことにした",
                    "今日は 疲れたので",
                    "まっすぐ"
                ],
                "answer": "まっすぐ",
                "correctOrder": [
                    3,
                    1,
                    4,
                    2
                ],
                "translation": "Karena lelah hari ini, saya memutuskan pulang langsung tanpa lembur."
            }, {
                "question": "______ ______ __★__ ______。",
                "options": [
                    "この パソコンを",
                    "迷った けれど",
                    "買う",
                    "ことにした"
                ],
                "answer": "買う",
                "correctOrder": [
                    2,
                    1,
                    3,
                    4
                ],
                "translation": "Walau sempat ragu, saya memutuskan membeli laptop ini."
            }, {
                "question": "______ ______ __★__ ______。",
                "options": [
                    "別の 店で",
                    "食べる ことにした",
                    "昼ご飯を",
                    "駅前は 混んでいたので"
                ],
                "answer": "昼ご飯を",
                "correctOrder": [
                    4,
                    1,
                    3,
                    2
                ],
                "translation": "Karena depan stasiun ramai, saya memutuskan makan siang di toko lain."
            }, {
                "question": "______ ______ __★__ ______。",
                "options": [
                    "ください",
                    "撮らないで",
                    "ここでは",
                    "写真を"
                ],
                "answer": "撮らないで",
                "correctOrder": [
                    3,
                    4,
                    2,
                    1
                ],
                "translation": "Tolong jangan ambil foto di sini."
            }, {
                "question": "______ ______ __★__ ______。",
                "options": [
                    "無理を しなくても",
                    "疲れたなら",
                    "いいですよ",
                    "今日は"
                ],
                "answer": "無理を しなくても",
                "correctOrder": [
                    2,
                    4,
                    1,
                    3
                ],
                "translation": "Kalau capek, hari ini tidak usah memaksakan diri."
            }, {
                "question": "______ ______ __★__ ______。",
                "options": [
                    "ください",
                    "まだ 熱が あるなら",
                    "入らないで",
                    "お風呂に"
                ],
                "answer": "入らないで",
                "correctOrder": [
                    2,
                    4,
                    3,
                    1
                ],
                "translation": "Kalau masih demam, tolong jangan berendam."
            }, {
                "question": "______ ______ __★__ ______。",
                "options": [
                    "休んでも いいです",
                    "今夜は",
                    "大丈夫ですから",
                    "提出は 明日でも"
                ],
                "answer": "今夜は",
                "correctOrder": [
                    4,
                    3,
                    2,
                    1
                ],
                "translation": "Karena dikumpulkan besok pun tak apa, malam ini kamu boleh istirahat."
            }, {
                "question": "______ ______ __★__ ______。",
                "options": [
                    "ところだ",
                    "ちょうど",
                    "いま",
                    "昼ご飯を 食べている"
                ],
                "answer": "昼ご飯を 食べている",
                "correctOrder": [
                    3,
                    2,
                    4,
                    1
                ],
                "translation": "Sekarang saya tepat sedang makan siang."
            }, {
                "question": "______ ______ __★__ ______。",
                "options": [
                    "さっき",
                    "着いた",
                    "ところです",
                    "駅に"
                ],
                "answer": "着いた",
                "correctOrder": [
                    1,
                    4,
                    2,
                    3
                ],
                "translation": "Saya baru saja sampai di stasiun."
            }, {
                "question": "______ ______ __★__ ______。",
                "options": [
                    "これから",
                    "ところです",
                    "電話を かける",
                    "お客さんに"
                ],
                "answer": "電話を かける",
                "correctOrder": [
                    1,
                    4,
                    3,
                    2
                ],
                "translation": "Saya sekarang tepat akan menelepon pelanggan."
            }, {
                "question": "______ ______ __★__ ______。",
                "options": [
                    "ところで",
                    "会議が",
                    "終わった",
                    "少し 休みましょう"
                ],
                "answer": "ところで",
                "correctOrder": [
                    2,
                    3,
                    1,
                    4
                ],
                "translation": "Karena rapat baru saja selesai, mari istirahat sebentar."
            }, {
                "question": "______ ______ __★__ ______。",
                "options": [
                    "ずいぶん",
                    "増えてきた",
                    "駅前に 新しい 店が",
                    "最近は"
                ],
                "answer": "ずいぶん",
                "correctOrder": [
                    4,
                    3,
                    1,
                    2
                ],
                "translation": "Belakangan toko baru di depan stasiun bertambah sangat banyak."
            }, {
                "question": "______ ______ __★__ ______。",
                "options": [
                    "例文が 多くて",
                    "わかりやすい",
                    "初級の 学習者にも",
                    "この 教科書は"
                ],
                "answer": "初級の 学習者にも",
                "correctOrder": [
                    4,
                    1,
                    3,
                    2
                ],
                "translation": "Buku teks ini punya banyak contoh kalimat dan mudah dipahami pelajar pemula."
            }, {
                "question": "______ ______ __★__ ______。",
                "options": [
                    "準備しておいた",
                    "前日から",
                    "遅刻しないように",
                    "服と 資料を"
                ],
                "answer": "服と 資料を",
                "correctOrder": [
                    3,
                    2,
                    4,
                    1
                ],
                "translation": "Agar tidak telat, saya sudah menyiapkan pakaian dan materi sejak sehari sebelumnya."
            }, {
                "question": "______ ______ __★__ ______。",
                "options": [
                    "いい 部屋を",
                    "相談してみたら",
                    "紹介してもらえた",
                    "留学生センターで"
                ],
                "answer": "いい 部屋を",
                "correctOrder": [
                    4,
                    2,
                    1,
                    3
                ],
                "translation": "Setelah coba berkonsultasi di pusat mahasiswa asing, saya diperkenalkan ke kamar yang bagus."
            }
        ],
        "bunpou-text": [{
                "passage": "地域センターの 掲示板には、次の ように 書かれていた。 日本に 来てから、納豆が 食べられる ______ ました。 生活の 中で よく 目に する 表現だ。",
                "questionId": "1",
                "options": [
                    "ように なり",
                    "ことに なり",
                    "ように し",
                    "ことに し"
                ],
                "answer": "ように なり",
                "translation": "Sejak datang ke Jepang, saya jadi bisa makan natto."
            }, {
                "passage": "アルバイト先の 先輩は、休けい時間に こう 話していた。 毎日 練習したので、敬語が 少し 使える ______ ました。 文の 流れに 合う 形を 選びたい。",
                "questionId": "2",
                "options": [
                    "ように なり",
                    "ことに なり",
                    "ように し",
                    "ことに し"
                ],
                "answer": "ように なり",
                "translation": "Karena berlatih setiap hari, saya jadi sedikit bisa memakai keigo."
            }, {
                "passage": "学校からの お知らせを 読むと、次の 一文が あった。 引っ越してから、朝 6時に 起きられる ______ ました。 自然な 日本語に なるように 考えよう。",
                "questionId": "3",
                "options": [
                    "ように なり",
                    "ことに なり",
                    "ように し",
                    "ことに し"
                ],
                "answer": "ように なり",
                "translation": "Sejak pindah rumah, saya jadi bisa bangun jam 6 pagi."
            }, {
                "passage": "留学生向けの ガイドブックには、こんな 説明が あった。 最近、ニュースを 聞いて だいたい 内容が わかる ______ ました。 場面を 想像すると、答えが 見えやすい。",
                "questionId": "4",
                "options": [
                    "ように なり",
                    "ことに なり",
                    "ように し",
                    "ことに し"
                ],
                "answer": "ように なり",
                "translation": "Belakangan ini, saya jadi bisa memahami garis besar isi berita."
            }, {
                "passage": "駅前の カフェで 友だちと 話している とき、こんな 文を 見つけた。 健康の ために、毎朝 階段を 使う ______ ています。 生活の 中で よく 目に する 表現だ。",
                "questionId": "5",
                "options": [
                    "ことに し",
                    "ように し",
                    "ことに なり",
                    "ように なり"
                ],
                "answer": "ことに し",
                "translation": "Demi kesehatan, saya membiasakan diri memakai tangga setiap hari."
            }, {
                "passage": "町内会の 回覧板には、次の 内容が のっていた。 寝る 前は、スマホを 見ない ______ ています。 文の 流れに 合う 形を 選びたい。",
                "questionId": "6",
                "options": [
                    "ことに し",
                    "ように し",
                    "ことに なり",
                    "ように なり"
                ],
                "answer": "ことに し",
                "translation": "Sebelum tidur, saya membiasakan diri untuk tidak melihat ponsel."
            }, {
                "passage": "授業で 配られた プリントには、次の 文が ある。 日本語の 日記を 毎晩 書く ______ ています。 自然な 日本語に なるように 考えよう。",
                "questionId": "7",
                "options": [
                    "ことに し",
                    "ように し",
                    "ことに なり",
                    "ように なり"
                ],
                "answer": "ことに し",
                "translation": "Saya membiasakan diri menulis diary bahasa Jepang setiap malam."
            }, {
                "passage": "シェアハウスの ルール説明には、こう 書いてあった。 忙しくても、朝ご飯を ぬかない ______ ています。 場面を 想像すると、答えが 見えやすい。",
                "questionId": "8",
                "options": [
                    "ことに し",
                    "ように し",
                    "ことに なり",
                    "ように なり"
                ],
                "answer": "ことに し",
                "translation": "Meski sibuk, saya membiasakan diri tidak melewatkan sarapan."
            }, {
                "passage": "地域センターの 掲示板には、次の ように 書かれていた。 来月から、大阪支社で 働く ______ ました。 生活の 中で よく 目に する 表現だ。",
                "questionId": "9",
                "options": [
                    "ことに なり",
                    "ように なり",
                    "ことに し",
                    "ように し"
                ],
                "answer": "ことに なり",
                "translation": "Mulai bulan depan, diputuskan saya bekerja di cabang Osaka."
            }, {
                "passage": "アルバイト先の 先輩は、休けい時間に こう 話していた。 会議は 来週に 延期する ______ ました。 文の 流れに 合う 形を 選びたい。",
                "questionId": "10",
                "options": [
                    "ことに なり",
                    "ように なり",
                    "ことに し",
                    "ように し"
                ],
                "answer": "ことに なり",
                "translation": "Rapat diputuskan ditunda ke minggu depan."
            }, {
                "passage": "学校からの お知らせを 読むと、次の 一文が あった。 駅前の 店は、今月末で 閉店する ______ ました。 自然な 日本語に なるように 考えよう。",
                "questionId": "11",
                "options": [
                    "ことに なり",
                    "ように なり",
                    "ことに し",
                    "ように し"
                ],
                "answer": "ことに なり",
                "translation": "Toko di depan stasiun diputuskan tutup akhir bulan ini."
            }, {
                "passage": "留学生向けの ガイドブックには、こんな 説明が あった。 今年の 研修は、オンラインで 行う ______ ました。 場面を 想像すると、答えが 見えやすい。",
                "questionId": "12",
                "options": [
                    "ことに なり",
                    "ように なり",
                    "ことに し",
                    "ように し"
                ],
                "answer": "ことに なり",
                "translation": "Pelatihan tahun ini diputuskan dilaksanakan secara online."
            }, {
                "passage": "駅前の カフェで 友だちと 話している とき、こんな 文を 見つけた。 大事な メールを 間違えて 消し ______ ました。 生活の 中で よく 目に する 表現だ。",
                "questionId": "13",
                "options": [
                    "て しまい",
                    "て おき",
                    "て み",
                    "て あり"
                ],
                "answer": "て しまい",
                "translation": "Saya tidak sengaja menghapus email penting."
            }, {
                "passage": "町内会の 回覧板には、次の 内容が のっていた。 終電で うっかり 寝 ______ 、新宿まで 行ってしまいました。 文の 流れに 合う 形を 選びたい。",
                "questionId": "14",
                "options": [
                    "て しまい",
                    "て おき",
                    "て み",
                    "て あり"
                ],
                "answer": "て しまい",
                "translation": "Saya ketiduran di kereta terakhir dan malah sampai Shinjuku."
            }, {
                "passage": "授業で 配られた プリントには、次の 文が ある。 予約の 日を すっかり 忘れ ______ ました。 自然な 日本語に なるように 考えよう。",
                "questionId": "15",
                "options": [
                    "て しまい",
                    "て おき",
                    "て み",
                    "て あり"
                ],
                "answer": "て しまい",
                "translation": "Saya benar-benar lupa hari reservasinya."
            }, {
                "passage": "シェアハウスの ルール説明には、こう 書いてあった。 コピーした 書類を 会議室に 置い ______ ました。 場面を 想像すると、答えが 見えやすい。",
                "questionId": "16",
                "options": [
                    "て しまい",
                    "て おき",
                    "て み",
                    "て あり"
                ],
                "answer": "て しまい",
                "translation": "Saya meninggalkan dokumen fotokopian di ruang rapat."
            }, {
                "passage": "地域センターの 掲示板には、次の ように 書かれていた。 来週の 発表の ために、資料を 先に 印刷し ______ ます。 生活の 中で よく 目に する 表現だ。",
                "questionId": "17",
                "options": [
                    "て おき",
                    "て み",
                    "て しまい",
                    "て あり"
                ],
                "answer": "て おき",
                "translation": "Untuk presentasi minggu depan, saya akan mencetak materi lebih dulu."
            }, {
                "passage": "アルバイト先の 先輩は、休けい時間に こう 話していた。 混む 前に、レストランを 予約して ______ ほうが いいです。 文の 流れに 合う 形を 選びたい。",
                "questionId": "18",
                "options": [
                    "て おき",
                    "て み",
                    "て しまい",
                    "て あり"
                ],
                "answer": "て おき",
                "translation": "Sebaiknya reservasi restoran lebih dulu sebelum ramai."
            }, {
                "passage": "学校からの お知らせを 読むと、次の 一文が あった。 あとで 困らないように、住所を メモして ______ ください。 自然な 日本語に なるように 考えよう。",
                "questionId": "19",
                "options": [
                    "て おき",
                    "て み",
                    "て しまい",
                    "て あり"
                ],
                "answer": "て おき",
                "translation": "Tolong catat alamatnya dulu agar nanti tidak repot."
            }, {
                "passage": "留学生向けの ガイドブックには、こんな 説明が あった。 会議の 前に、プロジェクターが 使えるか 確認して ______ ます。 場面を 想像すると、答えが 見えやすい。",
                "questionId": "20",
                "options": [
                    "て おき",
                    "て み",
                    "て しまい",
                    "て あり"
                ],
                "answer": "て おき",
                "translation": "Sebelum rapat, saya akan cek dulu apakah proyektor bisa dipakai."
            }, {
                "passage": "駅前の カフェで 友だちと 話している とき、こんな 文を 見つけた。 この ソース、少し 辛いけど 一口 食べ ______ ませんか。 生活の 中で よく 目に する 表現だ。",
                "questionId": "21",
                "options": [
                    "て み",
                    "て おき",
                    "て しまい",
                    "て あり"
                ],
                "answer": "て み",
                "translation": "Saus ini agak pedas, tapi mau coba makan sedikit?"
            }, {
                "passage": "町内会の 回覧板には、次の 内容が のっていた。 その アプリは 便利そうだから、一度 使って ______ つもりです。 文の 流れに 合う 形を 選びたい。",
                "questionId": "22",
                "options": [
                    "て み",
                    "て おき",
                    "て しまい",
                    "て あり"
                ],
                "answer": "て み",
                "translation": "Aplikasinya kelihatannya praktis, jadi saya berniat mencobanya sekali."
            }, {
                "passage": "授業で 配られた プリントには、次の 文が ある。 わからなかったら、まず 自分で 調べて ______ ください。 自然な 日本語に なるように 考えよう。",
                "questionId": "23",
                "options": [
                    "て み",
                    "て おき",
                    "て しまい",
                    "て あり"
                ],
                "answer": "て み",
                "translation": "Kalau tidak paham, coba cari tahu sendiri dulu."
            }, {
                "passage": "シェアハウスの ルール説明には、こう 書いてあった。 新しい カフェが できたので、帰りに 行って ______ たいです。 場面を 想像すると、答えが 見えやすい。",
                "questionId": "24",
                "options": [
                    "て み",
                    "て おき",
                    "て しまい",
                    "て あり"
                ],
                "answer": "て み",
                "translation": "Karena ada kafe baru, saya ingin mampir dan mencobanya sepulang kerja."
            }, {
                "passage": "地域センターの 掲示板には、次の ように 書かれていた。 イヤホンで 音楽を 聞き ______ 、レポートを 書いて いました。 生活の 中で よく 目に する 表現だ。",
                "questionId": "25",
                "options": [
                    "ながら",
                    "のに",
                    "けれど",
                    "ので"
                ],
                "answer": "ながら",
                "translation": "Saya menulis laporan sambil mendengarkan musik."
            }, {
                "passage": "アルバイト先の 先輩は、休けい時間に こう 話していた。 スマホで 地図を 見 ______ 、駅まで 歩きました。 文の 流れに 合う 形を 選びたい。",
                "questionId": "26",
                "options": [
                    "ながら",
                    "のに",
                    "けれど",
                    "ので"
                ],
                "answer": "ながら",
                "translation": "Saya berjalan sampai stasiun sambil melihat peta di ponsel."
            }, {
                "passage": "学校からの お知らせを 読むと、次の 一文が あった。 彼は アルバイトを し ______ 、専門学校に 通って います。 自然な 日本語に なるように 考えよう。",
                "questionId": "27",
                "options": [
                    "ながら",
                    "のに",
                    "けれど",
                    "ので"
                ],
                "answer": "ながら",
                "translation": "Dia kuliah di sekolah kejuruan sambil kerja part-time."
            }, {
                "passage": "留学生向けの ガイドブックには、こんな 説明が あった。 母は テレビを 見 ______ 、よく うたを 口ずさみます。 場面を 想像すると、答えが 見えやすい。",
                "questionId": "28",
                "options": [
                    "ながら",
                    "のに",
                    "けれど",
                    "ので"
                ],
                "answer": "ながら",
                "translation": "Ibu sering bersenandung sambil menonton TV."
            }, {
                "passage": "駅前の カフェで 友だちと 話している とき、こんな 文を 見つけた。 さっき 着い ______ なのに、もう 帰るんですか。 生活の 中で よく 目に する 表現だ。",
                "questionId": "29",
                "options": [
                    "た ばかり",
                    "て ばかり",
                    "る ばかり",
                    "た ところ"
                ],
                "answer": "た ばかり",
                "translation": "Padahal baru saja sampai, masa sudah mau pulang?"
            }, {
                "passage": "町内会の 回覧板には、次の 内容が のっていた。 この パンは 焼い ______ で、まだ 温かいです。 文の 流れに 合う 形を 選びたい。",
                "questionId": "30",
                "options": [
                    "た ばかり",
                    "て ばかり",
                    "る ばかり",
                    "た ところ"
                ],
                "answer": "た ばかり",
                "translation": "Roti ini baru saja dipanggang, jadi masih hangat."
            }, {
                "passage": "授業で 配られた プリントには、次の 文が ある。 入社し ______ の 社員に、いきなり 一人で 任せるのは 難しいです。 自然な 日本語に なるように 考えよう。",
                "questionId": "31",
                "options": [
                    "た ばかり",
                    "て ばかり",
                    "る ばかり",
                    "た ところ"
                ],
                "answer": "た ばかり",
                "translation": "Sulit langsung menyerahkan semuanya kepada pegawai yang baru saja masuk."
            }, {
                "passage": "シェアハウスの ルール説明には、こう 書いてあった。 会議が 終わっ ______ で、みんな まだ 部屋に います。 場面を 想像すると、答えが 見えやすい。",
                "questionId": "32",
                "options": [
                    "た ばかり",
                    "て ばかり",
                    "る ばかり",
                    "た ところ"
                ],
                "answer": "た ばかり",
                "translation": "Rapat baru saja selesai, jadi semua masih berada di ruangan."
            }, {
                "passage": "地域センターの 掲示板には、次の ように 書かれていた。 今 ちょうど 出かける ______ なので、あとで 電話します。 生活の 中で よく 目に する 表現だ。",
                "questionId": "33",
                "options": [
                    "ところ",
                    "ばかり",
                    "あいだ",
                    "うち"
                ],
                "answer": "ところ",
                "translation": "Sekarang saya tepat akan berangkat, jadi nanti saya telepon."
            }, {
                "passage": "アルバイト先の 先輩は、休けい時間に こう 話していた。 これから 社長に 相談する ______ です。 文の 流れに 合う 形を 選びたい。",
                "questionId": "34",
                "options": [
                    "ところ",
                    "ばかり",
                    "あいだ",
                    "うち"
                ],
                "answer": "ところ",
                "translation": "Saya sekarang tepat akan berkonsultasi dengan direktur."
            }, {
                "passage": "学校からの お知らせを 読むと、次の 一文が あった。 昼ご飯を 食べる ______ だったのに、急に 客が 来ました。 自然な 日本語に なるように 考えよう。",
                "questionId": "35",
                "options": [
                    "ところ",
                    "ばかり",
                    "あいだ",
                    "うち"
                ],
                "answer": "ところ",
                "translation": "Padahal saya tepat akan makan siang, tiba-tiba tamu datang."
            }, {
                "passage": "留学生向けの ガイドブックには、こんな 説明が あった。 ちょうど バスに 乗る ______ で、連絡が 遅れました。 場面を 想像すると、答えが 見えやすい。",
                "questionId": "36",
                "options": [
                    "ところ",
                    "ばかり",
                    "あいだ",
                    "うち"
                ],
                "answer": "ところ",
                "translation": "Saya tepat akan naik bus, jadi terlambat menghubungi."
            }, {
                "passage": "駅前の カフェで 友だちと 話している とき、こんな 文を 見つけた。 駅に 着いた ______ で、先輩から メッセージが 来ました。 生活の 中で よく 目に する 表現だ。",
                "questionId": "37",
                "options": [
                    "ところ",
                    "ばかり",
                    "あいだ",
                    "うち"
                ],
                "answer": "ところ",
                "translation": "Begitu sampai di stasiun, saya mendapat pesan dari senior."
            }, {
                "passage": "町内会の 回覧板には、次の 内容が のっていた。 今、会議が 終わった ______ です。 文の 流れに 合う 形を 選びたい。",
                "questionId": "38",
                "options": [
                    "ところ",
                    "ばかり",
                    "あいだ",
                    "うち"
                ],
                "answer": "ところ",
                "translation": "Rapat baru saja selesai sekarang."
            }, {
                "passage": "授業で 配られた プリントには、次の 文が ある。 さっき 店を 出た ______ なのに、もう 忘れ物に 気づきました。 自然な 日本語に なるように 考えよう。",
                "questionId": "39",
                "options": [
                    "ところ",
                    "ばかり",
                    "あいだ",
                    "うち"
                ],
                "answer": "ところ",
                "translation": "Padahal baru saja keluar dari toko, saya sudah sadar ada barang tertinggal."
            }, {
                "passage": "シェアハウスの ルール説明には、こう 書いてあった。 電話を 切った ______ で、また 相手から かかってきました。 場面を 想像すると、答えが 見えやすい。",
                "questionId": "40",
                "options": [
                    "ところ",
                    "ばかり",
                    "あいだ",
                    "うち"
                ],
                "answer": "ところ",
                "translation": "Baru saja menutup telepon, orang itu menelepon lagi."
            }, {
                "passage": "地域センターの 掲示板には、次の ように 書かれていた。 いま 重要な 書類を 確認して いる ______ なので、少し 待ってください。 生活の 中で よく 目に する 表現だ。",
                "questionId": "41",
                "options": [
                    "ところ",
                    "ばかり",
                    "あいだ",
                    "うち"
                ],
                "answer": "ところ",
                "translation": "Saya sedang mengecek dokumen penting, jadi tolong tunggu sebentar."
            }, {
                "passage": "アルバイト先の 先輩は、休けい時間に こう 話していた。 ちょうど 電車を 待って いる ______ です。 文の 流れに 合う 形を 選びたい。",
                "questionId": "42",
                "options": [
                    "ところ",
                    "ばかり",
                    "あいだ",
                    "うち"
                ],
                "answer": "ところ",
                "translation": "Saya tepat sedang menunggu kereta."
            }, {
                "passage": "学校からの お知らせを 読むと、次の 一文が あった。 いま お客さんと 話して いる ______ ですから、あとで 折り返します。 自然な 日本語に なるように 考えよう。",
                "questionId": "43",
                "options": [
                    "ところ",
                    "ばかり",
                    "あいだ",
                    "うち"
                ],
                "answer": "ところ",
                "translation": "Sekarang saya sedang bicara dengan pelanggan, jadi nanti saya hubungi balik."
            }, {
                "passage": "留学生向けの ガイドブックには、こんな 説明が あった。 夕食を 作って いる ______ だったので、インターホンに 気づきませんでした。 場面を 想像すると、答えが 見えやすい。",
                "questionId": "44",
                "options": [
                    "ところ",
                    "ばかり",
                    "あいだ",
                    "うち"
                ],
                "answer": "ところ",
                "translation": "Karena saya sedang memasak makan malam, saya tidak sadar ada interkom."
            }, {
                "passage": "駅前の カフェで 友だちと 話している とき、こんな 文を 見つけた。 来週の 金曜日に、部署の 歓迎会を 開く ______ です。 生活の 中で よく 目に する 表現だ。",
                "questionId": "45",
                "options": [
                    "予定",
                    "つもり",
                    "こと",
                    "はず"
                ],
                "answer": "予定",
                "translation": "Rencananya Jumat depan akan diadakan pesta penyambutan divisi."
            }, {
                "passage": "町内会の 回覧板には、次の 内容が のっていた。 この 書類は 今日中に 提出する ______ です。 文の 流れに 合う 形を 選びたい。",
                "questionId": "46",
                "options": [
                    "予定",
                    "つもり",
                    "こと",
                    "はず"
                ],
                "answer": "予定",
                "translation": "Dokumen ini rencananya diserahkan hari ini."
            }, {
                "passage": "授業で 配られた プリントには、次の 文が ある。 来月、京都へ 出張する ______ が あります。 自然な 日本語に なるように 考えよう。",
                "questionId": "47",
                "options": [
                    "予定",
                    "つもり",
                    "こと",
                    "はず"
                ],
                "answer": "予定",
                "translation": "Ada rencana dinas ke Kyoto bulan depan."
            }, {
                "passage": "シェアハウスの ルール説明には、こう 書いてあった。 今年の 夏は、日本海側を 旅行する ______ です。 場面を 想像すると、答えが 見えやすい。",
                "questionId": "48",
                "options": [
                    "予定",
                    "つもり",
                    "こと",
                    "はず"
                ],
                "answer": "予定",
                "translation": "Musim panas tahun ini rencananya saya berwisata ke pesisir Laut Jepang."
            }, {
                "passage": "地域センターの 掲示板には、次の ように 書かれていた。 田中さんは さっき 受付を 通ったから、もう 会議室に いる ______ です。 生活の 中で よく 目に する 表現だ。",
                "questionId": "49",
                "options": [
                    "はず",
                    "つもり",
                    "予定",
                    "わけ"
                ],
                "answer": "はず",
                "translation": "Karena Tanaka tadi lewat resepsionis, seharusnya dia sudah ada di ruang rapat."
            }, {
                "passage": "アルバイト先の 先輩は、休けい時間に こう 話していた。 この 番線なら、次に 来るのは 新大阪行きの ______ です。 文の 流れに 合う 形を 選びたい。",
                "questionId": "50",
                "options": [
                    "はず",
                    "つもり",
                    "予定",
                    "わけ"
                ],
                "answer": "はず",
                "translation": "Kalau di peron ini, seharusnya kereta berikutnya tujuan Shin-Osaka."
            }, {
                "passage": "学校からの お知らせを 読むと、次の 一文が あった。 締め切りは 明日だから、今日は まだ 受付して いる ______ です。 自然な 日本語に なるように 考えよう。",
                "questionId": "51",
                "options": [
                    "はず",
                    "つもり",
                    "予定",
                    "わけ"
                ],
                "answer": "はず",
                "translation": "Karena tenggatnya besok, hari ini seharusnya pendaftaran masih buka."
            }, {
                "passage": "留学生向けの ガイドブックには、こんな 説明が あった。 先輩も 参加すると 言っていたので、もう 近くまで 来ている ______ です。 場面を 想像すると、答えが 見えやすい。",
                "questionId": "52",
                "options": [
                    "はず",
                    "つもり",
                    "予定",
                    "わけ"
                ],
                "answer": "はず",
                "translation": "Karena senior bilang akan ikut, seharusnya dia sudah dekat."
            }, {
                "passage": "駅前の カフェで 友だちと 話している とき、こんな 文を 見つけた。 忘れないように、予定は その場で 手帳に 書く ______ ています。 生活の 中で よく 目に する 表現だ。",
                "questionId": "53",
                "options": [
                    "ように し",
                    "ことに し",
                    "ように なり",
                    "ことに なり"
                ],
                "answer": "ように し",
                "translation": "Agar tidak lupa, saya berusaha langsung menulis jadwal ke agenda."
            }, {
                "passage": "町内会の 回覧板には、次の 内容が のっていた。 風邪を ひかないように、外から 帰ったら すぐ 手を 洗う ______ います。 文の 流れに 合う 形を 選びたい。",
                "questionId": "54",
                "options": [
                    "ように し",
                    "ことに し",
                    "ように なり",
                    "ことに なり"
                ],
                "answer": "ように し",
                "translation": "Agar tidak masuk angin, saya berusaha langsung cuci tangan setelah pulang."
            }, {
                "passage": "授業で 配られた プリントには、次の 文が ある。 発音を 良くするために、毎日 声に 出して 読む ______ います。 自然な 日本語に なるように 考えよう。",
                "questionId": "55",
                "options": [
                    "ように し",
                    "ことに し",
                    "ように なり",
                    "ことに なり"
                ],
                "answer": "ように し",
                "translation": "Untuk memperbaiki pelafalan, saya berusaha membaca dengan suara keras setiap hari."
            }, {
                "passage": "シェアハウスの ルール説明には、こう 書いてあった。 遅刻しないように、前の 夜に 服を 準備しておく ______ います。 場面を 想像すると、答えが 見えやすい。",
                "questionId": "56",
                "options": [
                    "ように し",
                    "ことに し",
                    "ように なり",
                    "ことに なり"
                ],
                "answer": "ように し",
                "translation": "Agar tidak telat, saya berusaha menyiapkan pakaian malam sebelumnya."
            }, {
                "passage": "地域センターの 掲示板には、次の ように 書かれていた。 留学する ______ 、今から お金を 貯めて います。 生活の 中で よく 目に する 表現だ。",
                "questionId": "57",
                "options": [
                    "ために",
                    "ように",
                    "ので",
                    "のに"
                ],
                "answer": "ために",
                "translation": "Demi studi ke luar negeri, saya menabung dari sekarang."
            }, {
                "passage": "アルバイト先の 先輩は、休けい時間に こう 話していた。 健康の ______ 、駅まで 歩く ことに しました。 文の 流れに 合う 形を 選びたい。",
                "questionId": "58",
                "options": [
                    "ために",
                    "ように",
                    "ので",
                    "のに"
                ],
                "answer": "ために",
                "translation": "Demi kesehatan, saya memutuskan berjalan sampai stasiun."
            }, {
                "passage": "学校からの お知らせを 読むと、次の 一文が あった。 試験に 合格する ______ 、毎日 三時間 ずつ 勉強して います。 自然な 日本語に なるように 考えよう。",
                "questionId": "59",
                "options": [
                    "ために",
                    "ように",
                    "ので",
                    "のに"
                ],
                "answer": "ために",
                "translation": "Demi lulus ujian, saya belajar tiga jam setiap hari."
            }, {
                "passage": "留学生向けの ガイドブックには、こんな 説明が あった。 新しい 仕事に 慣れる ______ 、メモを よく 取って います。 場面を 想像すると、答えが 見えやすい。",
                "questionId": "60",
                "options": [
                    "ために",
                    "ように",
                    "ので",
                    "のに"
                ],
                "answer": "ために",
                "translation": "Agar terbiasa dengan pekerjaan baru, saya sering mencatat."
            }, {
                "passage": "駅前の カフェで 友だちと 話している とき、こんな 文を 見つけた。 忘れない ______ 、スマホで アラームを 設定しました。 生活の 中で よく 目に する 表現だ。",
                "questionId": "61",
                "options": [
                    "ように",
                    "ために",
                    "ので",
                    "のに"
                ],
                "answer": "ように",
                "translation": "Agar tidak lupa, saya mengatur alarm di ponsel."
            }, {
                "passage": "町内会の 回覧板には、次の 内容が のっていた。 子どもでも 読める ______ 、ルビを 付けて あります。 文の 流れに 合う 形を 選びたい。",
                "questionId": "62",
                "options": [
                    "ように",
                    "ために",
                    "ので",
                    "のに"
                ],
                "answer": "ように",
                "translation": "Agar bisa dibaca anak-anak juga, sudah diberi furigana."
            }, {
                "passage": "授業で 配られた プリントには、次の 文が ある。 だれでも 使える ______ 、説明を やさしく しました。 自然な 日本語に なるように 考えよう。",
                "questionId": "63",
                "options": [
                    "ように",
                    "ために",
                    "ので",
                    "のに"
                ],
                "answer": "ように",
                "translation": "Agar siapa pun bisa memakai, penjelasannya dibuat mudah."
            }, {
                "passage": "シェアハウスの ルール説明には、こう 書いてあった。 迷わない ______ 、地図を 先に 送っておきます。 場面を 想像すると、答えが 見えやすい。",
                "questionId": "64",
                "options": [
                    "ように",
                    "ために",
                    "ので",
                    "のに"
                ],
                "answer": "ように",
                "translation": "Agar tidak tersesat, saya kirimkan peta lebih dulu."
            }, {
                "passage": "地域センターの 掲示板には、次の ように 書かれていた。 財布に 千円 ______ 入って いなかったので、ATMを 探しました。 生活の 中で よく 目に する 表現だ。",
                "questionId": "65",
                "options": [
                    "しか",
                    "だけ",
                    "ほど",
                    "ばかり"
                ],
                "answer": "しか",
                "translation": "Karena di dompet hanya ada seribu yen, saya mencari ATM."
            }, {
                "passage": "アルバイト先の 先輩は、休けい時間に こう 話していた。 今日は 一時間 ______ 勉強できませんでした。 文の 流れに 合う 形を 選びたい。",
                "questionId": "66",
                "options": [
                    "しか",
                    "だけ",
                    "ほど",
                    "ばかり"
                ],
                "answer": "しか",
                "translation": "Hari ini saya hanya bisa belajar satu jam."
            }, {
                "passage": "学校からの お知らせを 読むと、次の 一文が あった。 この 店は 日曜日 ______ 開いて いません。 自然な 日本語に なるように 考えよう。",
                "questionId": "67",
                "options": [
                    "しか",
                    "だけ",
                    "ほど",
                    "ばかり"
                ],
                "answer": "しか",
                "translation": "Toko ini hanya buka pada hari Minggu."
            }, {
                "passage": "留学生向けの ガイドブックには、こんな 説明が あった。 会議室には 部長と 私 ______ いませんでした。 場面を 想像すると、答えが 見えやすい。",
                "questionId": "68",
                "options": [
                    "しか",
                    "だけ",
                    "ほど",
                    "ばかり"
                ],
                "answer": "しか",
                "translation": "Di ruang rapat hanya ada kepala divisi dan saya."
            }, {
                "passage": "駅前の カフェで 友だちと 話している とき、こんな 文を 見つけた。 最近 忙しくて、コンビニの おにぎり ______ 食べて います。 生活の 中で よく 目に する 表現だ。",
                "questionId": "69",
                "options": [
                    "ばかり",
                    "しか",
                    "だけ",
                    "ほど"
                ],
                "answer": "ばかり",
                "translation": "Akhir-akhir ini sibuk, jadi saya makan onigiri konbini terus."
            }, {
                "passage": "町内会の 回覧板には、次の 内容が のっていた。 彼は 人の 話を 聞かないで、自分の 意見 ______ 言って いる。 文の 流れに 合う 形を 選びたい。",
                "questionId": "70",
                "options": [
                    "ばかり",
                    "しか",
                    "だけ",
                    "ほど"
                ],
                "answer": "ばかり",
                "translation": "Dia tidak mendengarkan orang lain dan hanya mengatakan pendapatnya sendiri."
            }, {
                "passage": "授業で 配られた プリントには、次の 文が ある。 スマホを 見て ______ いないで、少し 休んだら どう？ 自然な 日本語に なるように 考えよう。",
                "questionId": "71",
                "options": [
                    "ばかり",
                    "しか",
                    "だけ",
                    "ほど"
                ],
                "answer": "ばかり",
                "translation": "Jangan terus-terusan melihat ponsel; bagaimana kalau istirahat sedikit?"
            }, {
                "passage": "シェアハウスの ルール説明には、こう 書いてあった。 雨の日が 続いて、洗濯物が たまる ______ です。 場面を 想像すると、答えが 見えやすい。",
                "questionId": "72",
                "options": [
                    "ばかり",
                    "しか",
                    "だけ",
                    "ほど"
                ],
                "answer": "ばかり",
                "translation": "Karena hari hujan berlanjut, cucian jadi menumpuk terus."
            }, {
                "passage": "地域センターの 掲示板には、次の ように 書かれていた。 時間が あれ ______ 、駅前の 新しい 本屋に 行きませんか。 生活の 中で よく 目に する 表現だ。",
                "questionId": "73",
                "options": [
                    "ば",
                    "と",
                    "たら",
                    "なら"
                ],
                "answer": "ば",
                "translation": "Kalau ada waktu, mau ke toko buku baru di depan stasiun?"
            }, {
                "passage": "アルバイト先の 先輩は、休けい時間に こう 話していた。 この ボタンを 押せ ______ 、受付番号が 出ます。 文の 流れに 合う 形を 選びたい。",
                "questionId": "74",
                "options": [
                    "ば",
                    "と",
                    "たら",
                    "なら"
                ],
                "answer": "ば",
                "translation": "Kalau tombol ini ditekan, nomor antrean akan keluar."
            }, {
                "passage": "学校からの お知らせを 読むと、次の 一文が あった。 もう 少し 安けれ ______ 、この かばんを 買いたいです。 自然な 日本語に なるように 考えよう。",
                "questionId": "75",
                "options": [
                    "ば",
                    "と",
                    "たら",
                    "なら"
                ],
                "answer": "ば",
                "translation": "Kalau sedikit lebih murah, saya ingin beli tas ini."
            }, {
                "passage": "留学生向けの ガイドブックには、こんな 説明が あった。 駅から 近けれ ______ 、毎日でも 通いたいです。 場面を 想像すると、答えが 見えやすい。",
                "questionId": "76",
                "options": [
                    "ば",
                    "と",
                    "たら",
                    "なら"
                ],
                "answer": "ば",
                "translation": "Kalau dekat dari stasiun, saya ingin datang setiap hari pun."
            }, {
                "passage": "駅前の カフェで 友だちと 話している とき、こんな 文を 見つけた。 ちゃんと 地図を 見た ______ 、出口を 間違えました。 生活の 中で よく 目に する 表現だ。",
                "questionId": "77",
                "options": [
                    "のに",
                    "ので",
                    "から",
                    "けれど"
                ],
                "answer": "のに",
                "translation": "Padahal sudah melihat peta dengan benar, saya salah pintu keluar."
            }, {
                "passage": "町内会の 回覧板には、次の 内容が のっていた。 日曜日な ______ 、会社から 電話が 来ました。 文の 流れに 合う 形を 選びたい。",
                "questionId": "78",
                "options": [
                    "のに",
                    "ので",
                    "から",
                    "けれど"
                ],
                "answer": "のに",
                "translation": "Padahal hari Minggu, saya mendapat telepon dari kantor."
            }, {
                "passage": "授業で 配られた プリントには、次の 文が ある。 約束の 時間に 間に合った ______ 、相手は もう 帰って いました。 自然な 日本語に なるように 考えよう。",
                "questionId": "79",
                "options": [
                    "のに",
                    "ので",
                    "から",
                    "けれど"
                ],
                "answer": "のに",
                "translation": "Padahal saya sempat tiba tepat waktu, lawan bicara sudah pulang."
            }, {
                "passage": "シェアハウスの ルール説明には、こう 書いてあった。 この 店は 有名な ______ 、思ったより 並びませんでした。 場面を 想像すると、答えが 見えやすい。",
                "questionId": "80",
                "options": [
                    "のに",
                    "ので",
                    "から",
                    "けれど"
                ],
                "answer": "のに",
                "translation": "Padahal toko ini terkenal, antreannya tidak separah yang saya kira."
            }, {
                "passage": "地域センターの 掲示板には、次の ように 書かれていた。 この アプリは 操作が 簡単で、初めてでも 使い ______ です。 生活の 中で よく 目に する 表現だ。",
                "questionId": "81",
                "options": [
                    "やすい",
                    "にくい",
                    "すぎる",
                    "そうだ"
                ],
                "answer": "やすい",
                "translation": "Aplikasi ini mudah digunakan bahkan untuk pertama kali."
            }, {
                "passage": "アルバイト先の 先輩は、休けい時間に こう 話していた。 この ペンは 軽くて 書き ______ です。 文の 流れに 合う 形を 選びたい。",
                "questionId": "82",
                "options": [
                    "やすい",
                    "にくい",
                    "すぎる",
                    "そうだ"
                ],
                "answer": "やすい",
                "translation": "Pulpen ini ringan dan mudah dipakai menulis."
            }, {
                "passage": "学校からの お知らせを 読むと、次の 一文が あった。 この 教科書は 例が 多いので、理解し ______ です。 自然な 日本語に なるように 考えよう。",
                "questionId": "83",
                "options": [
                    "やすい",
                    "にくい",
                    "すぎる",
                    "そうだ"
                ],
                "answer": "やすい",
                "translation": "Karena contoh di buku teks ini banyak, jadi mudah dipahami."
            }, {
                "passage": "留学生向けの ガイドブックには、こんな 説明が あった。 その 説明は 順番が はっきりしていて、覚え ______ です。 場面を 想像すると、答えが 見えやすい。",
                "questionId": "84",
                "options": [
                    "やすい",
                    "にくい",
                    "すぎる",
                    "そうだ"
                ],
                "answer": "やすい",
                "translation": "Penjelasannya runtut, jadi mudah diingat."
            }, {
                "passage": "駅前の カフェで 友だちと 話している とき、こんな 文を 見つけた。 この マスクは 厚くて、少し 息が し ______ です。 生活の 中で よく 目に する 表現だ。",
                "questionId": "85",
                "options": [
                    "にくい",
                    "やすい",
                    "すぎる",
                    "そうだ"
                ],
                "answer": "にくい",
                "translation": "Masker ini tebal sehingga agak sulit bernapas."
            }, {
                "passage": "町内会の 回覧板には、次の 内容が のっていた。 この 漢字は 形が 似ていて、覚え ______ です。 文の 流れに 合う 形を 選びたい。",
                "questionId": "86",
                "options": [
                    "にくい",
                    "やすい",
                    "すぎる",
                    "そうだ"
                ],
                "answer": "にくい",
                "translation": "Kanji ini bentuknya mirip, jadi sulit diingat."
            }, {
                "passage": "授業で 配られた プリントには、次の 文が ある。 あの 先生は 声が 小さくて、聞き ______ です。 自然な 日本語に なるように 考えよう。",
                "questionId": "87",
                "options": [
                    "にくい",
                    "やすい",
                    "すぎる",
                    "そうだ"
                ],
                "answer": "にくい",
                "translation": "Suara guru itu kecil sehingga sulit didengar."
            }, {
                "passage": "シェアハウスの ルール説明には、こう 書いてあった。 駅前は 人が 多すぎて、歩き ______ です。 場面を 想像すると、答えが 見えやすい。",
                "questionId": "88",
                "options": [
                    "にくい",
                    "やすい",
                    "すぎる",
                    "そうだ"
                ],
                "answer": "にくい",
                "translation": "Di depan stasiun terlalu ramai sehingga sulit berjalan."
            }, {
                "passage": "地域センターの 掲示板には、次の ように 書かれていた。 今日は 疲れて いるのに、コーヒーを 飲み ______ て 眠れません。 生活の 中で よく 目に する 表現だ。",
                "questionId": "89",
                "options": [
                    "すぎ",
                    "はじめ",
                    "おわり",
                    "つづけ"
                ],
                "answer": "すぎ",
                "translation": "Padahal saya lelah, tapi terlalu banyak minum kopi hingga tidak bisa tidur."
            }, {
                "passage": "アルバイト先の 先輩は、休けい時間に こう 話していた。 昼ご飯を 食べ ______ て、午後 ずっと 眠かったです。 文の 流れに 合う 形を 選びたい。",
                "questionId": "90",
                "options": [
                    "すぎ",
                    "はじめ",
                    "おわり",
                    "つづけ"
                ],
                "answer": "すぎ",
                "translation": "Saya terlalu banyak makan siang sehingga mengantuk sepanjang sore."
            }, {
                "passage": "学校からの お知らせを 読むと、次の 一文が あった。 この かばんは 荷物を 入れ ______ て、重く なりました。 自然な 日本語に なるように 考えよう。",
                "questionId": "91",
                "options": [
                    "すぎ",
                    "はじめ",
                    "おわり",
                    "つづけ"
                ],
                "answer": "すぎ",
                "translation": "Tas ini terlalu banyak diisi barang sehingga menjadi berat."
            }, {
                "passage": "留学生向けの ガイドブックには、こんな 説明が あった。 週末に お金を 使い ______ て、月末が ちょっと 不安です。 場面を 想像すると、答えが 見えやすい。",
                "questionId": "92",
                "options": [
                    "すぎ",
                    "はじめ",
                    "おわり",
                    "つづけ"
                ],
                "answer": "すぎ",
                "translation": "Saya terlalu banyak menghabiskan uang saat akhir pekan sehingga agak cemas menjelang akhir bulan."
            }, {
                "passage": "駅前の カフェで 友だちと 話している とき、こんな 文を 見つけた。 天気予報に よると、今夜は 雪に なる ______。 生活の 中で よく 目に する 表現だ。",
                "questionId": "93",
                "options": [
                    "そうだ",
                    "ようだ",
                    "らしい",
                    "みたいだ"
                ],
                "answer": "そうだ",
                "translation": "Menurut ramalan cuaca, malam ini katanya akan turun salju."
            }, {
                "passage": "町内会の 回覧板には、次の 内容が のっていた。 山田さんは もう 会社を 出た ______ よ。 文の 流れに 合う 形を 選びたい。",
                "questionId": "94",
                "options": [
                    "そうだ",
                    "ようだ",
                    "らしい",
                    "みたいだ"
                ],
                "answer": "そうだ",
                "translation": "Katanya Yamada-san sudah keluar dari kantor."
            }, {
                "passage": "授業で 配られた プリントには、次の 文が ある。 この 近くに おいしい ラーメン屋が できた ______ から、今度 行こう。 自然な 日本語に なるように 考えよう。",
                "questionId": "95",
                "options": [
                    "そうだ",
                    "ようだ",
                    "らしい",
                    "みたいだ"
                ],
                "answer": "そうだ",
                "translation": "Katanya ada kedai ramen enak buka dekat sini, jadi lain kali ayo pergi."
            }, {
                "passage": "シェアハウスの ルール説明には、こう 書いてあった。 部長は 来週から 二週間 出張する ______。 場面を 想像すると、答えが 見えやすい。",
                "questionId": "96",
                "options": [
                    "そうだ",
                    "ようだ",
                    "らしい",
                    "みたいだ"
                ],
                "answer": "そうだ",
                "translation": "Katanya kepala divisi akan dinas luar kota dua minggu mulai minggu depan."
            }, {
                "passage": "地域センターの 掲示板には、次の ように 書かれていた。 鈴木さんは 風邪を ひいた ______ ので、今日は 休みです。 生活の 中で よく 目に する 表現だ。",
                "questionId": "97",
                "options": [
                    "らしい",
                    "そうだ",
                    "ようだ",
                    "みたいだ"
                ],
                "answer": "らしい",
                "translation": "Sepertinya Suzuki sakit flu, jadi hari ini dia libur."
            }, {
                "passage": "アルバイト先の 先輩は、休けい時間に こう 話していた。 彼は まだ 学生なのに、考え方が 大人 ______。 文の 流れに 合う 形を 選びたい。",
                "questionId": "98",
                "options": [
                    "らしい",
                    "そうだ",
                    "ようだ",
                    "みたいだ"
                ],
                "answer": "らしい",
                "translation": "Dia masih mahasiswa, tapi cara berpikirnya sangat dewasa."
            }, {
                "passage": "学校からの お知らせを 読むと、次の 一文が あった。 この 店の ケーキは 地元でも 有名 ______。 自然な 日本語に なるように 考えよう。",
                "questionId": "99",
                "options": [
                    "らしい",
                    "そうだ",
                    "ようだ",
                    "みたいだ"
                ],
                "answer": "らしい",
                "translation": "Kue di toko ini katanya terkenal bahkan di daerah sini."
            }, {
                "passage": "留学生向けの ガイドブックには、こんな 説明が あった。 その かばん、値段の わりに ずいぶん 丈夫 ______ ね。 場面を 想像すると、答えが 見えやすい。",
                "questionId": "100",
                "options": [
                    "らしい",
                    "そうだ",
                    "ようだ",
                    "みたいだ"
                ],
                "answer": "らしい",
                "translation": "Tas itu kelihatannya benar-benar kokoh untuk harganya."
            }
        ]
    },

    "N2": {
        "bunpou-form": [{
                "question": "和食が 好きですが、毎日 すしを 食べたい ______。",
                "options": [
                    "わけでは ない",
                    "わけには いかない",
                    "ことは ない",
                    "に すぎない"
                ],
                "answer": "わけでは ない",
                "translation": "Saya suka masakan Jepang, tetapi bukan berarti saya ingin makan sushi setiap hari."
            }, {
                "question": "彼の 意見に 反対したからといって、人格まで 否定している ______。",
                "options": [
                    "わけでは ない",
                    "わけには いかない",
                    "ことは ない",
                    "に すぎない"
                ],
                "answer": "わけでは ない",
                "translation": "Hanya karena saya menentang pendapatnya, bukan berarti saya juga menolak pribadinya."
            }, {
                "question": "この 会社は 大きいですが、だれでも 簡単に 入れる ______。",
                "options": [
                    "わけでは ない",
                    "わけには いかない",
                    "ことは ない",
                    "に すぎない"
                ],
                "answer": "わけでは ない",
                "translation": "Perusahaan ini besar, tetapi bukan berarti siapa pun bisa masuk dengan mudah."
            }, {
                "question": "日本に 住んで いるからといって、敬語が 完璧に 使える ______。",
                "options": [
                    "わけでは ない",
                    "わけには いかない",
                    "ことは ない",
                    "に すぎない"
                ],
                "answer": "わけでは ない",
                "translation": "Hanya karena tinggal di Jepang, bukan berarti saya bisa memakai keigo dengan sempurna."
            }, {
                "question": "この まま 雨が 続くと、川が あふれる ______。",
                "options": [
                    "おそれが ある",
                    "に ちがいない",
                    "に きまっている",
                    "かねない"
                ],
                "answer": "おそれが ある",
                "translation": "Kalau hujan terus begini, ada risiko sungai meluap."
            }, {
                "question": "個人情報が もれる ______ ので、共有フォルダの 設定を 見直してください。",
                "options": [
                    "おそれが ある",
                    "に ちがいない",
                    "に きまっている",
                    "かねない"
                ],
                "answer": "おそれが ある",
                "translation": "Ada risiko data pribadi bocor, jadi tolong cek ulang pengaturan folder bersama."
            }, {
                "question": "納期が 延びれば、取引先に 迷惑を かける ______。",
                "options": [
                    "おそれが ある",
                    "に ちがいない",
                    "に きまっている",
                    "かねない"
                ],
                "answer": "おそれが ある",
                "translation": "Jika tenggat molor, ada risiko merepotkan klien."
            }, {
                "question": "この 薬は 強いので、人によっては 副作用が 出る ______。",
                "options": [
                    "おそれが ある",
                    "に ちがいない",
                    "に きまっている",
                    "かねない"
                ],
                "answer": "おそれが ある",
                "translation": "Obat ini kuat, jadi pada beberapa orang ada risiko timbul efek samping."
            }, {
                "question": "そんな 言い方では、相手を 傷つけ ______。",
                "options": [
                    "かねない",
                    "おそれが ある",
                    "ことは ない",
                    "わけでは ない"
                ],
                "answer": "かねない",
                "translation": "Kalau bicara seperti itu, bisa-bisa melukai lawan bicara."
            }, {
                "question": "確認しないで 送信すると、重大な ミスに なり ______。",
                "options": [
                    "かねない",
                    "おそれが ある",
                    "ことは ない",
                    "わけでは ない"
                ],
                "answer": "かねない",
                "translation": "Kalau kirim tanpa mengecek, bisa-bisa jadi kesalahan besar."
            }, {
                "question": "睡眠不足が 続くと、仕事中に 倒れ ______。",
                "options": [
                    "かねない",
                    "おそれが ある",
                    "ことは ない",
                    "わけでは ない"
                ],
                "answer": "かねない",
                "translation": "Kalau terus kurang tidur, bisa-bisa ambruk saat bekerja."
            }, {
                "question": "誤った 情報を 広めると、会社の 信用を 失い ______。",
                "options": [
                    "かねない",
                    "おそれが ある",
                    "ことは ない",
                    "わけでは ない"
                ],
                "answer": "かねない",
                "translation": "Kalau menyebarkan info yang salah, bisa-bisa perusahaan kehilangan kepercayaan."
            }, {
                "question": "あの 店は いつも 行列だから、今日も かなり 混んでいる ______。",
                "options": [
                    "に ちがいない",
                    "に きまっている",
                    "に すぎない",
                    "わけだ"
                ],
                "answer": "に ちがいない",
                "translation": "Toko itu selalu antre, jadi hari ini pasti sangat ramai."
            }, {
                "question": "あれほど 練習したのだから、彼は 合格する ______。",
                "options": [
                    "に ちがいない",
                    "に きまっている",
                    "に すぎない",
                    "わけだ"
                ],
                "answer": "に ちがいない",
                "translation": "Dia berlatih sebanyak itu, jadi pasti lulus."
            }, {
                "question": "窓が 全部 開いている。だれかが 先に 来た ______。",
                "options": [
                    "に ちがいない",
                    "に きまっている",
                    "に すぎない",
                    "わけだ"
                ],
                "answer": "に ちがいない",
                "translation": "Semua jendela terbuka. Pasti ada orang yang datang lebih dulu."
            }, {
                "question": "社長が 直接 連絡してきたのだから、かなり 重要な 話 ______。",
                "options": [
                    "に ちがいない",
                    "に きまっている",
                    "に すぎない",
                    "わけだ"
                ],
                "answer": "に ちがいない",
                "translation": "Karena direktur sendiri yang menghubungi, pasti ini urusan penting."
            }, {
                "question": "こんな に 荷物が 多いのだから、タクシーで 行く ______。",
                "options": [
                    "に きまっている",
                    "に ちがいない",
                    "はずだ",
                    "かもしれない"
                ],
                "answer": "に きまっている",
                "translation": "Barangnya sebanyak ini, sudah pasti perginya naik taksi."
            }, {
                "question": "毎日 終電まで 働いて いるのだから、疲れて いる ______。",
                "options": [
                    "に きまっている",
                    "に ちがいない",
                    "はずだ",
                    "かもしれない"
                ],
                "answer": "に きまっている",
                "translation": "Dia bekerja sampai kereta terakhir tiap hari, pasti capek."
            }, {
                "question": "あの 人が 遅刻したのは、寝坊したから ______。",
                "options": [
                    "に きまっている",
                    "に ちがいない",
                    "はずだ",
                    "かもしれない"
                ],
                "answer": "に きまっている",
                "translation": "Dia telat itu pasti karena ketiduran."
            }, {
                "question": "ここまで そろって いれば、会議は 延長に なる ______。",
                "options": [
                    "に きまっている",
                    "に ちがいない",
                    "はずだ",
                    "かもしれない"
                ],
                "answer": "に きまっている",
                "translation": "Kalau situasinya begini, rapat pasti diperpanjang."
            }, {
                "question": "その うわさは 一部の SNSで 広まった 情報 ______。",
                "options": [
                    "に すぎない",
                    "だけだ",
                    "ばかりだ",
                    "わけだ"
                ],
                "answer": "に すぎない",
                "translation": "Rumor itu tidak lebih dari informasi yang tersebar di sebagian SNS."
            }, {
                "question": "彼の 発言は 個人的な 意見 ______ から、会社の 方針では ありません。",
                "options": [
                    "に すぎない",
                    "だけだ",
                    "ばかりだ",
                    "わけだ"
                ],
                "answer": "に すぎない",
                "translation": "Ucapannya tidak lebih dari pendapat pribadi, jadi bukan kebijakan perusahaan."
            }, {
                "question": "今回の 変更は 日程を 少し 調整した ______。",
                "options": [
                    "に すぎない",
                    "だけだ",
                    "ばかりだ",
                    "わけだ"
                ],
                "answer": "に すぎない",
                "translation": "Perubahan kali ini tidak lebih dari sedikit penyesuaian jadwal."
            }, {
                "question": "この 結果は 途中経過 ______ ので、まだ 判断は できません。",
                "options": [
                    "に すぎない",
                    "だけだ",
                    "ばかりだ",
                    "わけだ"
                ],
                "answer": "に すぎない",
                "translation": "Hasil ini tidak lebih dari perkembangan sementara, jadi belum bisa diputuskan."
            }, {
                "question": "申請は 済ませた ______、まだ 許可は 下りて いません。",
                "options": [
                    "ものの",
                    "けれども",
                    "ので",
                    "のに"
                ],
                "answer": "ものの",
                "translation": "Meskipun pengajuan sudah dilakukan, izinnya masih belum turun."
            }, {
                "question": "説明を 聞いた ______、実際に できるか どうかは 別問題です。",
                "options": [
                    "ものの",
                    "けれども",
                    "ので",
                    "のに"
                ],
                "answer": "ものの",
                "translation": "Walau sudah mendengar penjelasan, apakah bisa melakukannya itu soal lain."
            }, {
                "question": "新製品は 発売された ______、売れ行きは まだ わかりません。",
                "options": [
                    "ものの",
                    "けれども",
                    "ので",
                    "のに"
                ],
                "answer": "ものの",
                "translation": "Meskipun produk baru sudah dirilis, penjualannya masih belum diketahui."
            }, {
                "question": "会場には 着いた ______、受付が 始まるまで まだ 時間が ありました。",
                "options": [
                    "ものの",
                    "けれども",
                    "ので",
                    "のに"
                ],
                "answer": "ものの",
                "translation": "Walau sudah sampai di lokasi, masih ada waktu sebelum registrasi dibuka."
            }, {
                "question": "新しい 部署は 忙しい ______、昼休みも ちゃんと 取れません。",
                "options": [
                    "どころか",
                    "ばかりか",
                    "ものの",
                    "うえに"
                ],
                "answer": "どころか",
                "translation": "Divisi baru bukan cuma sibuk, makan siang pun tidak sempat."
            }, {
                "question": "今年は 涼しい ______、連日 真夏日が 続いています。",
                "options": [
                    "どころか",
                    "ばかりか",
                    "ものの",
                    "うえに"
                ],
                "answer": "どころか",
                "translation": "Tahun ini bukannya sejuk, justru hari-hari panas terus."
            }, {
                "question": "彼は 日本語を 話せない ______、漢字まで すらすら 読めます。",
                "options": [
                    "どころか",
                    "ばかりか",
                    "ものの",
                    "うえに"
                ],
                "answer": "どころか",
                "translation": "Dia bukan cuma bisa bicara bahasa Jepang, kanji pun lancar."
            }, {
                "question": "手伝う ______、かえって 作業を 増やして しまいました。",
                "options": [
                    "どころか",
                    "ばかりか",
                    "ものの",
                    "うえに"
                ],
                "answer": "どころか",
                "translation": "Bukan membantu, malah menambah pekerjaan."
            }, {
                "question": "この 施設は 観光客 ______、地元の 人にも 利用されて います。",
                "options": [
                    "のみならず",
                    "ばかりか",
                    "どころか",
                    "うえに"
                ],
                "answer": "のみならず",
                "translation": "Fasilitas ini tidak hanya digunakan wisatawan, tetapi juga penduduk lokal."
            }, {
                "question": "彼は 営業 ______、企画まで 一人で 担当して いる。",
                "options": [
                    "のみならず",
                    "ばかりか",
                    "どころか",
                    "うえに"
                ],
                "answer": "のみならず",
                "translation": "Dia tidak hanya menangani sales, tetapi juga perencanaan seorang diri."
            }, {
                "question": "新制度は 社員 ______、取引先にも 影響を 与える。",
                "options": [
                    "のみならず",
                    "ばかりか",
                    "どころか",
                    "うえに"
                ],
                "answer": "のみならず",
                "translation": "Sistem baru ini berdampak bukan hanya pada pegawai, tapi juga klien."
            }, {
                "question": "その 先生は 文法 ______、発音指導にも 定評が ある。",
                "options": [
                    "のみならず",
                    "ばかりか",
                    "どころか",
                    "うえに"
                ],
                "answer": "のみならず",
                "translation": "Guru itu tidak hanya kuat di tata bahasa, tetapi juga terkenal dalam pengajaran pelafalan."
            }, {
                "question": "経験年数 ______、担当する 仕事の 範囲も 広がる。",
                "options": [
                    "に 応じて",
                    "に つれて",
                    "に 伴って",
                    "に 比べて"
                ],
                "answer": "に 応じて",
                "translation": "Sesuai lamanya pengalaman, cakupan pekerjaan yang ditangani juga meluas."
            }, {
                "question": "参加者の レベル ______、教材を 変える 予定です。",
                "options": [
                    "に 応じて",
                    "に つれて",
                    "に 伴って",
                    "に 比べて"
                ],
                "answer": "に 応じて",
                "translation": "Sesuai level peserta, materi akan diubah."
            }, {
                "question": "問い合わせの 内容 ______、担当部署に おつなぎ します。",
                "options": [
                    "に 応じて",
                    "に つれて",
                    "に 伴って",
                    "に 比べて"
                ],
                "answer": "に 応じて",
                "translation": "Sesuai isi pertanyaan, kami akan sambungkan ke departemen terkait."
            }, {
                "question": "予算 ______、実施できる 企画も 変わってくる。",
                "options": [
                    "に 応じて",
                    "に つれて",
                    "に 伴って",
                    "に 比べて"
                ],
                "answer": "に 応じて",
                "translation": "Sesuai anggaran, proyek yang bisa dijalankan juga akan berubah."
            }, {
                "question": "年齢 ______、応募できる 制度に なって います。",
                "options": [
                    "に かかわらず",
                    "に もかかわらず",
                    "に 応じて",
                    "に 対して"
                ],
                "answer": "に かかわらず",
                "translation": "Terlepas dari usia, sistem ini tetap bisa dilamar."
            }, {
                "question": "天候 ______、イベントは 予定どおり 行います。",
                "options": [
                    "に かかわらず",
                    "に もかかわらず",
                    "に 応じて",
                    "に 対して"
                ],
                "answer": "に かかわらず",
                "translation": "Terlepas dari cuaca, acara dilaksanakan sesuai rencana."
            }, {
                "question": "経験の 有無 ______、まずは 研修から 始めます。",
                "options": [
                    "に かかわらず",
                    "に もかかわらず",
                    "に 応じて",
                    "に 対して"
                ],
                "answer": "に かかわらず",
                "translation": "Terlepas dari ada tidaknya pengalaman, semuanya dimulai dari pelatihan."
            }, {
                "question": "国籍 ______、同じ 条件で 審査されます。",
                "options": [
                    "に かかわらず",
                    "に もかかわらず",
                    "に 応じて",
                    "に 対して"
                ],
                "answer": "に かかわらず",
                "translation": "Terlepas dari kewarganegaraan, semuanya dinilai dengan syarat yang sama."
            }, {
                "question": "制度の 改正 ______、申請方法も 変更された。",
                "options": [
                    "に 伴って",
                    "に つれて",
                    "に 応じて",
                    "に 比べて"
                ],
                "answer": "に 伴って",
                "translation": "Seiring revisi sistem, cara pengajuan juga berubah."
            }, {
                "question": "人口の 増加 ______、保育施設の 需要も 高まっている。",
                "options": [
                    "に 伴って",
                    "に つれて",
                    "に 応じて",
                    "に 比べて"
                ],
                "answer": "に 伴って",
                "translation": "Seiring bertambahnya populasi, kebutuhan fasilitas penitipan anak juga naik."
            }, {
                "question": "円安 ______、輸入品の 価格が 上がって きた。",
                "options": [
                    "に 伴って",
                    "に つれて",
                    "に 応じて",
                    "に 比べて"
                ],
                "answer": "に 伴って",
                "translation": "Seiring pelemahan yen, harga barang impor mulai naik."
            }, {
                "question": "事業の 拡大 ______、本社も 移転する ことに なった。",
                "options": [
                    "に 伴って",
                    "に つれて",
                    "に 応じて",
                    "に 比べて"
                ],
                "answer": "に 伴って",
                "translation": "Seiring ekspansi usaha, kantor pusat juga diputuskan pindah."
            }, {
                "question": "試験が 近づく ______、緊張も 強く なって きた。",
                "options": [
                    "に つれて",
                    "に 伴って",
                    "に 応じて",
                    "に 比べて"
                ],
                "answer": "に つれて",
                "translation": "Semakin dekat ujian, semakin kuat rasa tegang."
            }, {
                "question": "日本語に 慣れる ______、ニュースも 楽しく なってきた。",
                "options": [
                    "に つれて",
                    "に 伴って",
                    "に 応じて",
                    "に 比べて"
                ],
                "answer": "に つれて",
                "translation": "Semakin terbiasa dengan bahasa Jepang, berita juga jadi lebih menarik."
            }, {
                "question": "日が 暮れる ______、駅前の イルミネーションが 目立ってくる。",
                "options": [
                    "に つれて",
                    "に 伴って",
                    "に 応じて",
                    "に 比べて"
                ],
                "answer": "に つれて",
                "translation": "Semakin sore, iluminasi di depan stasiun makin terlihat."
            }, {
                "question": "気温が 下がる ______、体調を 崩す 人も 増えている。",
                "options": [
                    "に つれて",
                    "に 伴って",
                    "に 応じて",
                    "に 比べて"
                ],
                "answer": "に つれて",
                "translation": "Semakin suhu turun, makin banyak orang jatuh sakit."
            }, {
                "question": "原材料の 値段は 上がる ______ で、経営が 厳しい。",
                "options": [
                    "一方だ",
                    "ばかりだ",
                    "だけだ",
                    "に すぎない"
                ],
                "answer": "一方だ",
                "translation": "Harga bahan baku terus naik saja, sehingga usaha makin berat."
            }, {
                "question": "最近は 利用者が 減る ______ で、商店街が 心配して いる。",
                "options": [
                    "一方だ",
                    "ばかりだ",
                    "だけだ",
                    "に すぎない"
                ],
                "answer": "一方だ",
                "translation": "Belakangan pengunjung hanya terus berkurang, jadi pusat pertokoan khawatir."
            }, {
                "question": "忙しくなる と、部屋は 散らかる ______。",
                "options": [
                    "一方だ",
                    "ばかりだ",
                    "だけだ",
                    "に すぎない"
                ],
                "answer": "一方だ",
                "translation": "Kalau makin sibuk, kamar hanya makin berantakan saja."
            }, {
                "question": "その 会社の 評判は 悪くなる ______ だった。",
                "options": [
                    "一方だ",
                    "ばかりだ",
                    "だけだ",
                    "に すぎない"
                ],
                "answer": "一方だ",
                "translation": "Reputasi perusahaan itu hanya semakin memburuk."
            }, {
                "question": "長い 話し合いの ______、両社は ようやく 合意した。",
                "options": [
                    "末に",
                    "あげく",
                    "うえで",
                    "かわりに"
                ],
                "answer": "末に",
                "translation": "Setelah pembahasan panjang, kedua perusahaan akhirnya sepakat."
            }, {
                "question": "何度も 検討した ______、今回は 見送る ことにした。",
                "options": [
                    "末に",
                    "あげく",
                    "うえで",
                    "かわりに"
                ],
                "answer": "末に",
                "translation": "Setelah dipertimbangkan berkali-kali, kali ini diputuskan ditunda."
            }, {
                "question": "家族と 相談した ______、留学を 決めました。",
                "options": [
                    "末に",
                    "あげく",
                    "うえで",
                    "かわりに"
                ],
                "answer": "末に",
                "translation": "Setelah berdiskusi dengan keluarga, saya memutuskan studi ke luar negeri."
            }, {
                "question": "悩んだ ______、今の 会社に 残る ことにしました。",
                "options": [
                    "末に",
                    "あげく",
                    "うえで",
                    "かわりに"
                ],
                "answer": "末に",
                "translation": "Setelah bimbang, saya memutuskan tetap di perusahaan sekarang."
            }, {
                "question": "資料を よく 読んだ ______、ご応募 ください。",
                "options": [
                    "うえで",
                    "あとで",
                    "まえに",
                    "ところで"
                ],
                "answer": "うえで",
                "translation": "Silakan melamar setelah membaca materi dengan baik."
            }, {
                "question": "担当者と 相談した ______、正式に 決める つもりです。",
                "options": [
                    "うえで",
                    "あとで",
                    "まえに",
                    "ところで"
                ],
                "answer": "うえで",
                "translation": "Saya akan memutuskan resmi setelah berkonsultasi dengan penanggung jawab."
            }, {
                "question": "契約内容を 確認した ______、サインを お願いします。",
                "options": [
                    "うえで",
                    "あとで",
                    "まえに",
                    "ところで"
                ],
                "answer": "うえで",
                "translation": "Mohon tanda tangan setelah memeriksa isi kontrak."
            }, {
                "question": "実際に 使ってみた ______、導入するか 判断します。",
                "options": [
                    "うえで",
                    "あとで",
                    "まえに",
                    "ところで"
                ],
                "answer": "うえで",
                "translation": "Setelah benar-benar mencobanya, kami akan menilai apakah akan mengadopsinya."
            }, {
                "question": "彼は 文句を 言う ______、最後まで 仕事を やりとげた。",
                "options": [
                    "ことなく",
                    "ないで",
                    "なくて",
                    "ずに"
                ],
                "answer": "ことなく",
                "translation": "Dia menyelesaikan pekerjaan sampai akhir tanpa mengeluh."
            }, {
                "question": "その 記事は 感情に 流される ______、事実だけを 冷静に 述べている。",
                "options": [
                    "ことなく",
                    "ないで",
                    "なくて",
                    "ずに"
                ],
                "answer": "ことなく",
                "translation": "Artikel itu menyampaikan fakta secara tenang tanpa terbawa emosi."
            }, {
                "question": "だれにも 知られる ______、ひっそりと 準備を 進めた。",
                "options": [
                    "ことなく",
                    "ないで",
                    "なくて",
                    "ずに"
                ],
                "answer": "ことなく",
                "translation": "Persiapan dilakukan diam-diam tanpa diketahui siapa pun."
            }, {
                "question": "彼女は 表情を 変える ______、ただ 黙って うなずいた。",
                "options": [
                    "ことなく",
                    "ないで",
                    "なくて",
                    "ずに"
                ],
                "answer": "ことなく",
                "translation": "Dia hanya mengangguk tanpa mengubah ekspresi."
            }, {
                "question": "準備が でき ______、すぐに 発送いたします。",
                "options": [
                    "次第",
                    "しだいで",
                    "だけで",
                    "ばかりで"
                ],
                "answer": "次第",
                "translation": "Begitu persiapan selesai, kami akan segera mengirim."
            }, {
                "question": "結果が わかり ______、ご連絡 します。",
                "options": [
                    "次第",
                    "しだいで",
                    "だけで",
                    "ばかりで"
                ],
                "answer": "次第",
                "translation": "Begitu hasil diketahui, kami akan menghubungi."
            }, {
                "question": "部長が 戻り ______、会議を 始めます。",
                "options": [
                    "次第",
                    "しだいで",
                    "だけで",
                    "ばかりで"
                ],
                "answer": "次第",
                "translation": "Begitu kepala divisi kembali, rapat akan dimulai."
            }, {
                "question": "確認が 取れ ______、受付を 再開します。",
                "options": [
                    "次第",
                    "しだいで",
                    "だけで",
                    "ばかりで"
                ],
                "answer": "次第",
                "translation": "Begitu konfirmasi didapat, penerimaan akan dibuka kembali."
            }, {
                "question": "急な 欠員が 出たので、私が 対応せ ______ 状況に なった。",
                "options": [
                    "ざるを 得ない",
                    "ない わけには いかない",
                    "ことに なる",
                    "に すぎない"
                ],
                "answer": "ざるを 得ない",
                "translation": "Karena ada kekurangan staf mendadak, saya terpaksa menanganinya."
            }, {
                "question": "予算が 削減された以上、計画を 見直さ ______。",
                "options": [
                    "ざるを 得ない",
                    "ない わけには いかない",
                    "ことに なる",
                    "に すぎない"
                ],
                "answer": "ざるを 得ない",
                "translation": "Karena anggarannya dipotong, kami terpaksa meninjau ulang rencana."
            }, {
                "question": "証拠が あるからには、事実を 認め ______。",
                "options": [
                    "ざるを 得ない",
                    "ない わけには いかない",
                    "ことに なる",
                    "に すぎない"
                ],
                "answer": "ざるを 得ない",
                "translation": "Karena ada bukti, kami tak punya pilihan selain mengakui fakta."
            }, {
                "question": "電車が 止まったので、会議に 遅れると 連絡せ ______。",
                "options": [
                    "ざるを 得ない",
                    "ない わけには いかない",
                    "ことに なる",
                    "に すぎない"
                ],
                "answer": "ざるを 得ない",
                "translation": "Karena kereta berhenti, saya terpaksa mengabari akan terlambat ke rapat."
            }, {
                "question": "その 映画は 最後まで 見ると、泣か ______。",
                "options": [
                    "ずには いられない",
                    "ないでは いられない",
                    "ざるを 得ない",
                    "かねない"
                ],
                "answer": "ずには いられない",
                "translation": "Film itu kalau ditonton sampai akhir, membuat orang tak bisa menahan tangis."
            }, {
                "question": "彼の 話を 聞いて、応援せ ______ 気持ちに なった。",
                "options": [
                    "ずには いられない",
                    "ないでは いられない",
                    "ざるを 得ない",
                    "かねない"
                ],
                "answer": "ずには いられない",
                "translation": "Setelah mendengar ceritanya, saya merasa tak bisa tidak mendukungnya."
            }, {
                "question": "こんなに おいしそうな 匂いが すると、食べ ______。",
                "options": [
                    "ずには いられない",
                    "ないでは いられない",
                    "ざるを 得ない",
                    "かねない"
                ],
                "answer": "ずには いられない",
                "translation": "Kalau baunya seenak ini, tak bisa menahan untuk tidak makan."
            }, {
                "question": "理不尽な 対応を されて、文句を 言わ ______。",
                "options": [
                    "ずには いられない",
                    "ないでは いられない",
                    "ざるを 得ない",
                    "かねない"
                ],
                "answer": "ずには いられない",
                "translation": "Karena diperlakukan tak masuk akal, saya tak bisa tidak protes."
            }, {
                "question": "熱は ありますが、大事な 会議なので 休む ______。",
                "options": [
                    "わけには いかない",
                    "わけでは ない",
                    "ことは ない",
                    "わけだ"
                ],
                "answer": "わけには いかない",
                "translation": "Saya demam, tetapi karena rapat penting, saya tak bisa begitu saja libur."
            }, {
                "question": "約束した 以上、途中で やめる ______。",
                "options": [
                    "わけには いかない",
                    "わけでは ない",
                    "ことは ない",
                    "わけだ"
                ],
                "answer": "わけには いかない",
                "translation": "Karena sudah berjanji, saya tidak bisa berhenti di tengah jalan."
            }, {
                "question": "お客様の 前では、私情を 出す ______。",
                "options": [
                    "わけには いかない",
                    "わけでは ない",
                    "ことは ない",
                    "わけだ"
                ],
                "answer": "わけには いかない",
                "translation": "Di depan pelanggan, saya tak bisa menunjukkan urusan pribadi."
            }, {
                "question": "試験前なので、遊んで ばかりいる ______。",
                "options": [
                    "わけには いかない",
                    "わけでは ない",
                    "ことは ない",
                    "わけだ"
                ],
                "answer": "わけには いかない",
                "translation": "Karena sebelum ujian, saya tak bisa hanya bermain."
            }, {
                "question": "そんなに 心配する ______ よ。まだ 時間は あります。",
                "options": [
                    "ことは ない",
                    "わけでは ない",
                    "わけには いかない",
                    "に すぎない"
                ],
                "answer": "ことは ない",
                "translation": "Tidak perlu khawatir sebegitunya; waktunya masih ada."
            }, {
                "question": "急がなくても いいので、無理を する ______。",
                "options": [
                    "ことは ない",
                    "わけでは ない",
                    "わけには いかない",
                    "に すぎない"
                ],
                "answer": "ことは ない",
                "translation": "Tidak perlu memaksakan diri, karena tidak harus buru-buru."
            }, {
                "question": "まだ 経験が 少ないのだから、一人で 全部 抱え込む ______。",
                "options": [
                    "ことは ない",
                    "わけでは ない",
                    "わけには いかない",
                    "に すぎない"
                ],
                "answer": "ことは ない",
                "translation": "Karena pengalamanmu masih sedikit, tak perlu menanggung semuanya sendirian."
            }, {
                "question": "その ミスは だれにでも ある。そんなに 落ち込む ______。",
                "options": [
                    "ことは ない",
                    "わけでは ない",
                    "わけには いかない",
                    "に すぎない"
                ],
                "answer": "ことは ない",
                "translation": "Kesalahan seperti itu bisa dialami siapa saja. Tak perlu terlalu sedih."
            }, {
                "question": "個人情報が 含まれているため、その 資料は 公開し ______。",
                "options": [
                    "かねる",
                    "かねない",
                    "わけでは ない",
                    "ことは ない"
                ],
                "answer": "かねる",
                "translation": "Karena berisi data pribadi, kami tidak dapat memublikasikan materi itu."
            }, {
                "question": "社内で まだ 決まって いない ことには、お答えし ______。",
                "options": [
                    "かねる",
                    "かねない",
                    "わけでは ない",
                    "ことは ない"
                ],
                "answer": "かねる",
                "translation": "Soal yang belum diputuskan internal, kami sulit memberi jawaban."
            }, {
                "question": "ただいま 担当者が 不在のため、すぐには 判断し ______。",
                "options": [
                    "かねる",
                    "かねない",
                    "わけでは ない",
                    "ことは ない"
                ],
                "answer": "かねる",
                "translation": "Karena penanggung jawab sedang tidak ada, kami sulit segera memutuskan."
            }, {
                "question": "その 件については 事実確認中ですので、今 コメントし ______。",
                "options": [
                    "かねる",
                    "かねない",
                    "わけでは ない",
                    "ことは ない"
                ],
                "answer": "かねる",
                "translation": "Karena masih verifikasi fakta, saat ini kami tidak dapat berkomentar."
            }, {
                "question": "その 店は 味 ______、接客まで すばらしい。",
                "options": [
                    "ばかりか",
                    "どころか",
                    "のみならず",
                    "ものの"
                ],
                "answer": "ばかりか",
                "translation": "Toko itu bukan hanya rasanya, pelayanannya pun luar biasa."
            }, {
                "question": "彼は 日本語 ______、中国語まで 仕事で 使っている。",
                "options": [
                    "ばかりか",
                    "どころか",
                    "のみならず",
                    "ものの"
                ],
                "answer": "ばかりか",
                "translation": "Dia bukan hanya bahasa Jepang, bahasa Mandarin pun dipakai untuk bekerja."
            }, {
                "question": "会費 ______、交通費まで 自分で 負担する ことに なった。",
                "options": [
                    "ばかりか",
                    "どころか",
                    "のみならず",
                    "ものの"
                ],
                "answer": "ばかりか",
                "translation": "Bukan hanya biaya keanggotaan, ongkos transport pun akhirnya ditanggung sendiri."
            }, {
                "question": "その 計画は 時間 ______、予算まで 大きく 見直された。",
                "options": [
                    "ばかりか",
                    "どころか",
                    "のみならず",
                    "ものの"
                ],
                "answer": "ばかりか",
                "translation": "Bukan hanya waktunya, bahkan anggarannya juga ditinjau besar-besaran."
            }, {
                "question": "春に なった ______、朝晩は まだ 冷え込みます。",
                "options": [
                    "とはいえ",
                    "ものの",
                    "どころか",
                    "にしては"
                ],
                "answer": "とはいえ",
                "translation": "Meskipun sudah masuk musim semi, pagi dan malam masih dingin."
            }, {
                "question": "便利だ ______、使いすぎるのは よくない。",
                "options": [
                    "とはいえ",
                    "ものの",
                    "どころか",
                    "にしては"
                ],
                "answer": "とはいえ",
                "translation": "Walaupun praktis, memakainya berlebihan tidak baik."
            }, {
                "question": "経験者だ ______、この 仕事は そんなに 簡単では ない。",
                "options": [
                    "とはいえ",
                    "ものの",
                    "どころか",
                    "にしては"
                ],
                "answer": "とはいえ",
                "translation": "Meskipun berpengalaman, pekerjaan ini tidak semudah itu."
            }, {
                "question": "ネットで 予約できる ______、最終確認は 電話の ほうが 安心です。",
                "options": [
                    "とはいえ",
                    "ものの",
                    "どころか",
                    "にしては"
                ],
                "answer": "とはいえ",
                "translation": "Walaupun bisa reservasi lewat internet, konfirmasi akhir lewat telepon lebih aman."
            }
        ],
        "bunpou-composition": [{
                "question": "______ ______ __★__ ______。",
                "options": [
                    "和食は 好きだが",
                    "毎日",
                    "わけでは ない",
                    "寿司を 食べたい"
                ],
                "answer": "寿司を 食べたい",
                "correctOrder": [
                    1,
                    2,
                    4,
                    3
                ],
                "translation": "Saya suka washoku, tetapi bukan berarti saya ingin makan sushi setiap hari."
            }, {
                "question": "______ ______ __★__ ______。",
                "options": [
                    "完璧に 使える",
                    "敬語が",
                    "わけでは ない",
                    "東京に 住んでいるからといって"
                ],
                "answer": "完璧に 使える",
                "correctOrder": [
                    4,
                    2,
                    1,
                    3
                ],
                "translation": "Hanya karena tinggal di Tokyo, bukan berarti saya bisa memakai keigo dengan sempurna."
            }, {
                "question": "______ ______ __★__ ______。",
                "options": [
                    "わけでは ない",
                    "管理職を 任せられる",
                    "経験者だからといって",
                    "すぐに"
                ],
                "answer": "管理職を 任せられる",
                "correctOrder": [
                    3,
                    4,
                    2,
                    1
                ],
                "translation": "Hanya karena berpengalaman, bukan berarti langsung bisa diberi jabatan manajer."
            }, {
                "question": "______ ______ __★__ ______。",
                "options": [
                    "だれでも",
                    "簡単に 入れる",
                    "わけでは ない",
                    "大企業だからといって"
                ],
                "answer": "簡単に 入れる",
                "correctOrder": [
                    4,
                    1,
                    2,
                    3
                ],
                "translation": "Hanya karena perusahaan besar, bukan berarti siapa pun bisa masuk dengan mudah."
            }, {
                "question": "______ ______ __★__ ______。",
                "options": [
                    "川が",
                    "このまま 雨が 続くと",
                    "あふれる",
                    "おそれが ある"
                ],
                "answer": "あふれる",
                "correctOrder": [
                    2,
                    1,
                    3,
                    4
                ],
                "translation": "Kalau hujan terus begini, ada risiko sungai meluap."
            }, {
                "question": "______ ______ __★__ ______。",
                "options": [
                    "広がる",
                    "確認せずに 公開すると",
                    "誤情報が",
                    "おそれが ある"
                ],
                "answer": "広がる",
                "correctOrder": [
                    2,
                    3,
                    1,
                    4
                ],
                "translation": "Kalau dipublikasikan tanpa verifikasi, ada risiko informasi salah menyebar."
            }, {
                "question": "______ ______ __★__ ______。",
                "options": [
                    "睡眠不足が 続けば",
                    "崩す",
                    "体調を",
                    "おそれが ある"
                ],
                "answer": "崩す",
                "correctOrder": [
                    1,
                    3,
                    2,
                    4
                ],
                "translation": "Kalau kurang tidur terus, ada risiko jatuh sakit."
            }, {
                "question": "______ ______ __★__ ______。",
                "options": [
                    "おそれが ある",
                    "もれる",
                    "設定を 誤ると",
                    "個人情報が"
                ],
                "answer": "もれる",
                "correctOrder": [
                    3,
                    4,
                    2,
                    1
                ],
                "translation": "Kalau pengaturannya salah, ada risiko data pribadi bocor."
            }, {
                "question": "______ ______ __★__ ______。",
                "options": [
                    "傷つけ",
                    "かねない",
                    "相手を",
                    "そんな 言い方では"
                ],
                "answer": "傷つけ",
                "correctOrder": [
                    4,
                    3,
                    1,
                    2
                ],
                "translation": "Kalau bicara seperti itu, bisa-bisa melukai lawan bicara."
            }, {
                "question": "______ ______ __★__ ______。",
                "options": [
                    "このまま 放置すると",
                    "なりかねない",
                    "大きな 事故に",
                    "小さな 問題が"
                ],
                "answer": "大きな 事故に",
                "correctOrder": [
                    1,
                    4,
                    3,
                    2
                ],
                "translation": "Kalau dibiarkan, masalah kecil ini bisa-bisa menjadi kecelakaan besar."
            }, {
                "question": "______ ______ __★__ ______。",
                "options": [
                    "取引先の 信用を",
                    "かねない",
                    "失い",
                    "確認せずに 送信すると"
                ],
                "answer": "失い",
                "correctOrder": [
                    4,
                    1,
                    3,
                    2
                ],
                "translation": "Kalau kirim tanpa cek, bisa-bisa kehilangan kepercayaan klien."
            }, {
                "question": "______ ______ __★__ ______。",
                "options": [
                    "影響が 出",
                    "かねない",
                    "明日の 試合に",
                    "深夜まで 働き続ければ"
                ],
                "answer": "影響が 出",
                "correctOrder": [
                    4,
                    3,
                    1,
                    2
                ],
                "translation": "Kalau terus bekerja sampai larut, bisa-bisa memengaruhi pertandingan besok."
            }, {
                "question": "______ ______ __★__ ______。",
                "options": [
                    "これだけ 準備したのだから",
                    "彼は",
                    "合格するに",
                    "違いない"
                ],
                "answer": "合格するに",
                "correctOrder": [
                    1,
                    2,
                    3,
                    4
                ],
                "translation": "Setelah persiapan sebanyak ini, dia pasti lulus."
            }, {
                "question": "______ ______ __★__ ______。",
                "options": [
                    "窓が 開いていたから",
                    "だれかが",
                    "先に 来たに",
                    "違いない"
                ],
                "answer": "先に 来たに",
                "correctOrder": [
                    1,
                    2,
                    3,
                    4
                ],
                "translation": "Karena jendelanya terbuka, pasti ada yang datang lebih dulu."
            }, {
                "question": "______ ______ __★__ ______。",
                "options": [
                    "重要な 用件に",
                    "かなり",
                    "社長が 直接 呼ぶのだから",
                    "違いない"
                ],
                "answer": "重要な 用件に",
                "correctOrder": [
                    3,
                    2,
                    1,
                    4
                ],
                "translation": "Karena direktur memanggil langsung, pasti ini urusan penting."
            }, {
                "question": "______ ______ __★__ ______。",
                "options": [
                    "味は いいに",
                    "あの 店に 行列が できているから",
                    "今日も",
                    "違いない"
                ],
                "answer": "味は いいに",
                "correctOrder": [
                    2,
                    3,
                    1,
                    4
                ],
                "translation": "Karena ada antrean di toko itu, rasanya pasti enak lagi hari ini."
            }, {
                "question": "______ ______ __★__ ______。",
                "options": [
                    "彼の 発言は",
                    "個人的な",
                    "すぎない",
                    "感想に"
                ],
                "answer": "感想に",
                "correctOrder": [
                    1,
                    2,
                    4,
                    3
                ],
                "translation": "Ucapannya tidak lebih dari kesan pribadi."
            }, {
                "question": "______ ______ __★__ ______。",
                "options": [
                    "今回の 変更は",
                    "だけに",
                    "すぎない",
                    "日程を 少し 調整した"
                ],
                "answer": "だけに",
                "correctOrder": [
                    1,
                    4,
                    2,
                    3
                ],
                "translation": "Perubahan kali ini tidak lebih dari sedikit penyesuaian jadwal."
            }, {
                "question": "______ ______ __★__ ______。",
                "options": [
                    "すぎない",
                    "途中段階の",
                    "結果に",
                    "その 数字は"
                ],
                "answer": "結果に",
                "correctOrder": [
                    4,
                    2,
                    3,
                    1
                ],
                "translation": "Angka itu tidak lebih dari hasil sementara."
            }, {
                "question": "______ ______ __★__ ______。",
                "options": [
                    "この 説明は",
                    "例に",
                    "すぎない",
                    "一般的な"
                ],
                "answer": "例に",
                "correctOrder": [
                    1,
                    4,
                    2,
                    3
                ],
                "translation": "Penjelasan ini tidak lebih dari contoh umum."
            }, {
                "question": "______ ______ __★__ ______。",
                "options": [
                    "ものの",
                    "申請は 済ませた",
                    "下りて いない",
                    "許可は まだ"
                ],
                "answer": "許可は まだ",
                "correctOrder": [
                    2,
                    1,
                    4,
                    3
                ],
                "translation": "Meskipun pengajuan sudah dilakukan, izin masih belum turun."
            }, {
                "question": "______ ______ __★__ ______。",
                "options": [
                    "まだ わからない",
                    "実際に できるかは",
                    "説明を 聞いた",
                    "ものの"
                ],
                "answer": "実際に できるかは",
                "correctOrder": [
                    3,
                    4,
                    2,
                    1
                ],
                "translation": "Walau sudah dengar penjelasan, belum tentu bisa melakukannya."
            }, {
                "question": "______ ______ __★__ ______。",
                "options": [
                    "ものの",
                    "会場には 着いた",
                    "受付開始まで",
                    "まだ 時間が あった"
                ],
                "answer": "受付開始まで",
                "correctOrder": [
                    2,
                    1,
                    3,
                    4
                ],
                "translation": "Meskipun sudah tiba di lokasi, masih ada waktu sampai registrasi dibuka."
            }, {
                "question": "______ ______ __★__ ______。",
                "options": [
                    "売れ行きは",
                    "まだ 不明だ",
                    "新商品は 発売された",
                    "ものの"
                ],
                "answer": "売れ行きは",
                "correctOrder": [
                    3,
                    4,
                    1,
                    2
                ],
                "translation": "Walau produk baru telah diluncurkan, penjualannya masih belum jelas."
            }, {
                "question": "______ ______ __★__ ______。",
                "options": [
                    "その 店は",
                    "接客まで",
                    "味どころか",
                    "すばらしいと 評判だ"
                ],
                "answer": "接客まで",
                "correctOrder": [
                    1,
                    3,
                    2,
                    4
                ],
                "translation": "Toko itu bukan cuma rasanya, pelayanannya pun dipuji."
            }, {
                "question": "______ ______ __★__ ______。",
                "options": [
                    "連日",
                    "真夏日が",
                    "今年は 涼しいどころか",
                    "続いている"
                ],
                "answer": "真夏日が",
                "correctOrder": [
                    3,
                    1,
                    2,
                    4
                ],
                "translation": "Tahun ini bukannya sejuk, justru hari-hari panas terus."
            }, {
                "question": "______ ______ __★__ ______。",
                "options": [
                    "仕事を 増やして",
                    "手伝うどころか",
                    "かえって",
                    "しまった"
                ],
                "answer": "仕事を 増やして",
                "correctOrder": [
                    2,
                    3,
                    1,
                    4
                ],
                "translation": "Bukannya membantu, malah menambah pekerjaan."
            }, {
                "question": "______ ______ __★__ ______。",
                "options": [
                    "すらすら",
                    "彼は 話せないどころか",
                    "難しい 漢字まで",
                    "読める"
                ],
                "answer": "すらすら",
                "correctOrder": [
                    2,
                    3,
                    1,
                    4
                ],
                "translation": "Dia bukan tidak bisa bicara, justru bahkan bisa membaca kanji sulit dengan lancar."
            }, {
                "question": "______ ______ __★__ ______。",
                "options": [
                    "この 施設は",
                    "利用されて いる",
                    "観光客のみならず",
                    "地元の 人にも"
                ],
                "answer": "地元の 人にも",
                "correctOrder": [
                    1,
                    3,
                    4,
                    2
                ],
                "translation": "Fasilitas ini digunakan bukan hanya wisatawan, tetapi juga warga setempat."
            }, {
                "question": "______ ______ __★__ ______。",
                "options": [
                    "営業のみならず",
                    "彼は",
                    "企画まで",
                    "担当して いる"
                ],
                "answer": "企画まで",
                "correctOrder": [
                    2,
                    1,
                    3,
                    4
                ],
                "translation": "Dia menangani bukan hanya sales, tetapi juga perencanaan."
            }, {
                "question": "______ ______ __★__ ______。",
                "options": [
                    "取引先にも",
                    "社員のみならず",
                    "その 新制度は",
                    "影響を 与える"
                ],
                "answer": "取引先にも",
                "correctOrder": [
                    3,
                    2,
                    1,
                    4
                ],
                "translation": "Sistem baru itu berdampak bukan hanya pada pegawai, tetapi juga klien."
            }, {
                "question": "______ ______ __★__ ______。",
                "options": [
                    "発音指導にも",
                    "この 先生は",
                    "文法のみならず",
                    "定評が ある"
                ],
                "answer": "発音指導にも",
                "correctOrder": [
                    2,
                    3,
                    1,
                    4
                ],
                "translation": "Guru ini tidak hanya bagus di tata bahasa, tetapi juga dikenal baik dalam pelafalan."
            }, {
                "question": "______ ______ __★__ ______。",
                "options": [
                    "参加者の レベルに 応じて",
                    "難しさを",
                    "教材の",
                    "変える"
                ],
                "answer": "難しさを",
                "correctOrder": [
                    1,
                    3,
                    2,
                    4
                ],
                "translation": "Sesuai level peserta, tingkat kesulitan materi diubah."
            }, {
                "question": "______ ______ __★__ ______。",
                "options": [
                    "おつなぎ",
                    "問い合わせの 内容に 応じて",
                    "します",
                    "担当部署へ"
                ],
                "answer": "おつなぎ",
                "correctOrder": [
                    2,
                    4,
                    1,
                    3
                ],
                "translation": "Sesuai isi pertanyaan, akan disambungkan ke departemen terkait."
            }, {
                "question": "______ ______ __★__ ______。",
                "options": [
                    "企画も",
                    "変わってくる",
                    "実施できる",
                    "予算に 応じて"
                ],
                "answer": "企画も",
                "correctOrder": [
                    4,
                    3,
                    1,
                    2
                ],
                "translation": "Sesuai anggaran, proyek yang bisa dijalankan juga berubah."
            }, {
                "question": "______ ______ __★__ ______。",
                "options": [
                    "増えていく",
                    "任される",
                    "役割が",
                    "経験に 応じて"
                ],
                "answer": "役割が",
                "correctOrder": [
                    4,
                    2,
                    3,
                    1
                ],
                "translation": "Sesuai pengalaman, peran yang ditanggung bertambah."
            }, {
                "question": "______ ______ __★__ ______。",
                "options": [
                    "予定どおり",
                    "天候に かかわらず",
                    "行います",
                    "イベントは"
                ],
                "answer": "予定どおり",
                "correctOrder": [
                    2,
                    4,
                    1,
                    3
                ],
                "translation": "Terlepas dari cuaca, acara akan dilaksanakan sesuai rencana."
            }, {
                "question": "______ ______ __★__ ______。",
                "options": [
                    "なっている",
                    "制度に",
                    "応募できる",
                    "年齢に かかわらず"
                ],
                "answer": "制度に",
                "correctOrder": [
                    4,
                    3,
                    2,
                    1
                ],
                "translation": "Terlepas dari usia, ini adalah sistem yang bisa dilamar siapa saja."
            }, {
                "question": "______ ______ __★__ ______。",
                "options": [
                    "始めます",
                    "まずは",
                    "経験の 有無に かかわらず",
                    "研修から"
                ],
                "answer": "研修から",
                "correctOrder": [
                    3,
                    2,
                    4,
                    1
                ],
                "translation": "Terlepas dari pengalaman, semuanya mulai dari pelatihan."
            }, {
                "question": "______ ______ __★__ ______。",
                "options": [
                    "国籍に かかわらず",
                    "行われる",
                    "同じ 条件で",
                    "審査が"
                ],
                "answer": "審査が",
                "correctOrder": [
                    1,
                    3,
                    4,
                    2
                ],
                "translation": "Terlepas dari kewarganegaraan, penilaian dilakukan dengan syarat yang sama."
            }, {
                "question": "______ ______ __★__ ______。",
                "options": [
                    "制度の 改正に 伴って",
                    "された",
                    "申請方法も",
                    "変更"
                ],
                "answer": "変更",
                "correctOrder": [
                    1,
                    3,
                    4,
                    2
                ],
                "translation": "Seiring revisi sistem, cara pengajuan juga berubah."
            }, {
                "question": "______ ______ __★__ ______。",
                "options": [
                    "高まって",
                    "いる",
                    "保育施設の 需要も",
                    "人口の 増加に 伴って"
                ],
                "answer": "高まって",
                "correctOrder": [
                    4,
                    3,
                    1,
                    2
                ],
                "translation": "Seiring pertumbuhan populasi, kebutuhan fasilitas penitipan anak juga meningkat."
            }, {
                "question": "______ ______ __★__ ______。",
                "options": [
                    "見直される",
                    "ことに なった",
                    "本社の 役割も",
                    "事業の 拡大に 伴って"
                ],
                "answer": "見直される",
                "correctOrder": [
                    4,
                    3,
                    1,
                    2
                ],
                "translation": "Seiring ekspansi usaha, peran kantor pusat juga diputuskan untuk ditinjau."
            }, {
                "question": "______ ______ __★__ ______。",
                "options": [
                    "輸入品の 価格が",
                    "きた",
                    "上がって",
                    "円安に 伴って"
                ],
                "answer": "上がって",
                "correctOrder": [
                    4,
                    1,
                    3,
                    2
                ],
                "translation": "Seiring pelemahan yen, harga barang impor mulai naik."
            }, {
                "question": "______ ______ __★__ ______。",
                "options": [
                    "緊張も",
                    "強く",
                    "なってきた",
                    "試験が 近づくに つれて"
                ],
                "answer": "強く",
                "correctOrder": [
                    4,
                    1,
                    2,
                    3
                ],
                "translation": "Semakin dekat ujian, semakin kuat rasa tegang."
            }, {
                "question": "______ ______ __★__ ______。",
                "options": [
                    "ニュースも",
                    "なってきた",
                    "面白く",
                    "日本語に 慣れるに つれて"
                ],
                "answer": "面白く",
                "correctOrder": [
                    4,
                    1,
                    3,
                    2
                ],
                "translation": "Semakin terbiasa dengan bahasa Jepang, berita pun jadi semakin menarik."
            }, {
                "question": "______ ______ __★__ ______。",
                "options": [
                    "目立つ",
                    "ように なった",
                    "日が 暮れるに つれて",
                    "駅前の イルミネーションが"
                ],
                "answer": "目立つ",
                "correctOrder": [
                    3,
                    4,
                    1,
                    2
                ],
                "translation": "Semakin sore, iluminasi di depan stasiun makin mencolok."
            }, {
                "question": "______ ______ __★__ ______。",
                "options": [
                    "体調を 崩す 人も",
                    "いる",
                    "増えて",
                    "気温が 下がるに つれて"
                ],
                "answer": "増えて",
                "correctOrder": [
                    4,
                    1,
                    3,
                    2
                ],
                "translation": "Semakin suhu turun, semakin banyak orang jatuh sakit."
            }, {
                "question": "______ ______ __★__ ______。",
                "options": [
                    "原材料の 値段は",
                    "上がる",
                    "一方で",
                    "利益は 減っている"
                ],
                "answer": "一方で",
                "correctOrder": [
                    1,
                    2,
                    3,
                    4
                ],
                "translation": "Harga bahan baku hanya terus naik, sementara keuntungan menurun."
            }, {
                "question": "______ ______ __★__ ______。",
                "options": [
                    "減る",
                    "維持費は かかる",
                    "利用者は",
                    "一方で"
                ],
                "answer": "一方で",
                "correctOrder": [
                    3,
                    1,
                    4,
                    2
                ],
                "translation": "Pengguna hanya terus berkurang, sementara biaya pemeliharaan tetap besar."
            }, {
                "question": "______ ______ __★__ ______。",
                "options": [
                    "一方で",
                    "最近は",
                    "休みが 取れない",
                    "忙しくなる"
                ],
                "answer": "一方で",
                "correctOrder": [
                    2,
                    4,
                    1,
                    3
                ],
                "translation": "Belakangan pekerjaan hanya makin sibuk, sementara cuti tak bisa diambil."
            }, {
                "question": "______ ______ __★__ ______。",
                "options": [
                    "と言われている",
                    "一方だった",
                    "悪くなる",
                    "その 会社の 評判は"
                ],
                "answer": "一方だった",
                "correctOrder": [
                    4,
                    3,
                    2,
                    1
                ],
                "translation": "Reputasi perusahaan itu dikatakan hanya makin memburuk."
            }, {
                "question": "______ ______ __★__ ______。",
                "options": [
                    "両社は",
                    "長い 話し合いの 末に",
                    "ようやく 合意に",
                    "達した"
                ],
                "answer": "ようやく 合意に",
                "correctOrder": [
                    2,
                    1,
                    3,
                    4
                ],
                "translation": "Setelah diskusi panjang, kedua pihak akhirnya mencapai kesepakatan."
            }, {
                "question": "______ ______ __★__ ______。",
                "options": [
                    "留学を",
                    "した",
                    "決心",
                    "家族と 相談した 末に"
                ],
                "answer": "決心",
                "correctOrder": [
                    4,
                    1,
                    3,
                    2
                ],
                "translation": "Setelah berdiskusi dengan keluarga, saya memutuskan studi ke luar negeri."
            }, {
                "question": "______ ______ __★__ ______。",
                "options": [
                    "ことに した",
                    "今の 会社に",
                    "残る",
                    "悩んだ 末に"
                ],
                "answer": "残る",
                "correctOrder": [
                    4,
                    2,
                    3,
                    1
                ],
                "translation": "Setelah banyak bimbang, saya memutuskan tetap di perusahaan sekarang."
            }, {
                "question": "______ ______ __★__ ______。",
                "options": [
                    "今回は",
                    "ことに した",
                    "見送る",
                    "何度も 検討した 末に"
                ],
                "answer": "見送る",
                "correctOrder": [
                    4,
                    1,
                    3,
                    2
                ],
                "translation": "Setelah dipertimbangkan berkali-kali, kali ini diputuskan ditunda."
            }, {
                "question": "______ ______ __★__ ______。",
                "options": [
                    "資料を よく 読んだ うえで",
                    "ご応募",
                    "ませ",
                    "ください"
                ],
                "answer": "ください",
                "correctOrder": [
                    1,
                    2,
                    4,
                    3
                ],
                "translation": "Silakan melamar setelah membaca materi dengan saksama."
            }, {
                "question": "______ ______ __★__ ______。",
                "options": [
                    "予定だ",
                    "正式に",
                    "担当者と 相談した うえで",
                    "決定する"
                ],
                "answer": "決定する",
                "correctOrder": [
                    3,
                    2,
                    4,
                    1
                ],
                "translation": "Setelah berkonsultasi dengan penanggung jawab, akan diputuskan secara resmi."
            }, {
                "question": "______ ______ __★__ ______。",
                "options": [
                    "ね",
                    "お願いします",
                    "サインを",
                    "契約内容を 確認した うえで"
                ],
                "answer": "お願いします",
                "correctOrder": [
                    4,
                    3,
                    2,
                    1
                ],
                "translation": "Mohon tanda tangan setelah memeriksa isi kontrak."
            }, {
                "question": "______ ______ __★__ ______。",
                "options": [
                    "します",
                    "判断",
                    "導入するか",
                    "実際に 使ってみた うえで"
                ],
                "answer": "判断",
                "correctOrder": [
                    4,
                    3,
                    2,
                    1
                ],
                "translation": "Setelah benar-benar mencoba, kami akan menilai apakah akan menerapkannya."
            }, {
                "question": "______ ______ __★__ ______。",
                "options": [
                    "最後まで",
                    "彼は 文句を 言う ことなく",
                    "仕事を",
                    "やりとげた"
                ],
                "answer": "仕事を",
                "correctOrder": [
                    2,
                    1,
                    3,
                    4
                ],
                "translation": "Dia menyelesaikan pekerjaan sampai akhir tanpa mengeluh."
            }, {
                "question": "______ ______ __★__ ______。",
                "options": [
                    "静かに",
                    "準備は",
                    "だれにも 知られる ことなく",
                    "進められた"
                ],
                "answer": "静かに",
                "correctOrder": [
                    3,
                    2,
                    1,
                    4
                ],
                "translation": "Tanpa diketahui siapa pun, persiapan dilakukan diam-diam."
            }, {
                "question": "______ ______ __★__ ______。",
                "options": [
                    "彼女は 表情を 変える ことなく",
                    "静かに",
                    "ただ",
                    "うなずいた"
                ],
                "answer": "静かに",
                "correctOrder": [
                    1,
                    3,
                    2,
                    4
                ],
                "translation": "Tanpa mengubah ekspresi, dia hanya mengangguk tenang."
            }, {
                "question": "______ ______ __★__ ______。",
                "options": [
                    "述べていた",
                    "感情に 流される ことなく",
                    "事実だけを",
                    "淡々と"
                ],
                "answer": "淡々と",
                "correctOrder": [
                    2,
                    3,
                    4,
                    1
                ],
                "translation": "Tanpa terbawa emosi, dia menyampaikan fakta saja dengan tenang."
            }, {
                "question": "______ ______ __★__ ______。",
                "options": [
                    "いたします",
                    "発送",
                    "商品を",
                    "準備が でき次第"
                ],
                "answer": "発送",
                "correctOrder": [
                    4,
                    3,
                    2,
                    1
                ],
                "translation": "Begitu persiapan selesai, kami akan mengirim barang."
            }, {
                "question": "______ ______ __★__ ______。",
                "options": [
                    "結果が わかり次第",
                    "ご連絡",
                    "します",
                    "すぐに"
                ],
                "answer": "ご連絡",
                "correctOrder": [
                    1,
                    4,
                    2,
                    3
                ],
                "translation": "Begitu hasil diketahui, kami akan segera menghubungi."
            }, {
                "question": "______ ______ __★__ ______。",
                "options": [
                    "します",
                    "受付を",
                    "確認が 取れ次第",
                    "再開"
                ],
                "answer": "再開",
                "correctOrder": [
                    3,
                    2,
                    4,
                    1
                ],
                "translation": "Begitu konfirmasi diperoleh, penerimaan akan dibuka lagi."
            }, {
                "question": "______ ______ __★__ ______。",
                "options": [
                    "予定です",
                    "会議を",
                    "部長が 戻り次第",
                    "始める"
                ],
                "answer": "始める",
                "correctOrder": [
                    3,
                    2,
                    4,
                    1
                ],
                "translation": "Begitu kepala divisi kembali, rapat akan dimulai."
            }, {
                "question": "______ ______ __★__ ______。",
                "options": [
                    "急な 欠員が 出たので",
                    "対応せざるを",
                    "得なかった",
                    "私が"
                ],
                "answer": "対応せざるを",
                "correctOrder": [
                    1,
                    4,
                    2,
                    3
                ],
                "translation": "Karena ada kekurangan staf mendadak, saya terpaksa menanganinya."
            }, {
                "question": "______ ______ __★__ ______。",
                "options": [
                    "証拠が ある以上",
                    "得ない",
                    "事実を",
                    "認めざるを"
                ],
                "answer": "認めざるを",
                "correctOrder": [
                    1,
                    3,
                    4,
                    2
                ],
                "translation": "Karena ada bukti, tidak ada pilihan selain mengakui fakta."
            }, {
                "question": "______ ______ __★__ ______。",
                "options": [
                    "計画を",
                    "得なくなった",
                    "見直さざるを",
                    "予算が 削減されたため"
                ],
                "answer": "見直さざるを",
                "correctOrder": [
                    4,
                    1,
                    3,
                    2
                ],
                "translation": "Karena anggaran dikurangi, kami terpaksa meninjau ulang rencana."
            }, {
                "question": "______ ______ __★__ ______。",
                "options": [
                    "伝えざるを",
                    "遅刻することを",
                    "得なかった",
                    "電車が 止まったので"
                ],
                "answer": "伝えざるを",
                "correctOrder": [
                    4,
                    2,
                    1,
                    3
                ],
                "translation": "Karena kereta berhenti, saya terpaksa mengabari akan terlambat."
            }, {
                "question": "______ ______ __★__ ______。",
                "options": [
                    "最後まで 見ると",
                    "その 映画は",
                    "泣かずには",
                    "いられない"
                ],
                "answer": "泣かずには",
                "correctOrder": [
                    2,
                    1,
                    3,
                    4
                ],
                "translation": "Kalau menonton film itu sampai akhir, tak bisa menahan tangis."
            }, {
                "question": "______ ______ __★__ ______。",
                "options": [
                    "彼の 話を 聞くと",
                    "応援せずには",
                    "いられない",
                    "気持ちに なる"
                ],
                "answer": "いられない",
                "correctOrder": [
                    1,
                    2,
                    3,
                    4
                ],
                "translation": "Setelah mendengar ceritanya, timbul perasaan tak bisa tidak mendukung."
            }, {
                "question": "______ ______ __★__ ______。",
                "options": [
                    "食べずには",
                    "いられない",
                    "そんなに いい 匂いが すると",
                    "ものだ"
                ],
                "answer": "いられない",
                "correctOrder": [
                    3,
                    1,
                    2,
                    4
                ],
                "translation": "Kalau aromanya seenak itu, tak bisa menahan untuk tidak makan."
            }, {
                "question": "______ ______ __★__ ______。",
                "options": [
                    "のだ",
                    "文句を 言わずには",
                    "理不尽な 対応を されて",
                    "いられなかった"
                ],
                "answer": "いられなかった",
                "correctOrder": [
                    3,
                    2,
                    4,
                    1
                ],
                "translation": "Karena diperlakukan tak masuk akal, saya tak bisa menahan untuk tidak protes."
            }, {
                "question": "______ ______ __★__ ______。",
                "options": [
                    "熱は あるが",
                    "休む",
                    "わけには いかない",
                    "大事な 会議なので"
                ],
                "answer": "休む",
                "correctOrder": [
                    1,
                    4,
                    2,
                    3
                ],
                "translation": "Saya demam, tetapi karena rapat penting, saya tak bisa begitu saja libur."
            }, {
                "question": "______ ______ __★__ ______。",
                "options": [
                    "約束した 以上",
                    "途中で",
                    "やめる",
                    "わけには いかない"
                ],
                "answer": "やめる",
                "correctOrder": [
                    1,
                    2,
                    3,
                    4
                ],
                "translation": "Karena sudah berjanji, saya tak bisa berhenti di tengah jalan."
            }, {
                "question": "______ ______ __★__ ______。",
                "options": [
                    "お客様の 前では",
                    "私情を",
                    "出す",
                    "わけには いかない"
                ],
                "answer": "出す",
                "correctOrder": [
                    1,
                    2,
                    3,
                    4
                ],
                "translation": "Di depan pelanggan, saya tak bisa menunjukkan urusan pribadi."
            }, {
                "question": "______ ______ __★__ ______。",
                "options": [
                    "試験前なので",
                    "遊んで ばかりいる",
                    "のです",
                    "わけには いかない"
                ],
                "answer": "わけには いかない",
                "correctOrder": [
                    1,
                    2,
                    4,
                    3
                ],
                "translation": "Karena sebelum ujian, saya tak bisa hanya bermain."
            }, {
                "question": "______ ______ __★__ ______。",
                "options": [
                    "そんなに 心配する",
                    "ですよ",
                    "ことは",
                    "ない"
                ],
                "answer": "ない",
                "correctOrder": [
                    1,
                    3,
                    4,
                    2
                ],
                "translation": "Tidak perlu khawatir sebegitunya."
            }, {
                "question": "______ ______ __★__ ______。",
                "options": [
                    "ない",
                    "ことは",
                    "まだ 時間は あるから",
                    "無理を する"
                ],
                "answer": "ことは",
                "correctOrder": [
                    3,
                    4,
                    2,
                    1
                ],
                "translation": "Karena waktunya masih ada, tak perlu memaksakan diri."
            }, {
                "question": "______ ______ __★__ ______。",
                "options": [
                    "全部 一人で 抱え込む",
                    "ない",
                    "経験が 少ないのだから",
                    "ことは"
                ],
                "answer": "ことは",
                "correctOrder": [
                    3,
                    1,
                    4,
                    2
                ],
                "translation": "Karena pengalamanmu masih sedikit, tak perlu menanggung semuanya sendirian."
            }, {
                "question": "______ ______ __★__ ______。",
                "options": [
                    "ことは",
                    "ない",
                    "だれにでも ある 失敗だ",
                    "そんなに 落ち込む"
                ],
                "answer": "ことは",
                "correctOrder": [
                    3,
                    4,
                    1,
                    2
                ],
                "translation": "Itu kegagalan yang bisa dialami siapa saja, jadi tak perlu terlalu sedih."
            }, {
                "question": "______ ______ __★__ ______。",
                "options": [
                    "個人情報が 含まれているため",
                    "その 資料は",
                    "かねます",
                    "公開し"
                ],
                "answer": "公開し",
                "correctOrder": [
                    1,
                    2,
                    4,
                    3
                ],
                "translation": "Karena memuat data pribadi, materi itu tidak bisa kami publikasikan."
            }, {
                "question": "______ ______ __★__ ______。",
                "options": [
                    "判断し",
                    "今すぐ",
                    "かねます",
                    "担当者が 不在のため"
                ],
                "answer": "判断し",
                "correctOrder": [
                    4,
                    2,
                    1,
                    3
                ],
                "translation": "Karena penanggung jawab tidak ada, saat ini kami belum bisa memutuskan."
            }, {
                "question": "______ ______ __★__ ______。",
                "options": [
                    "コメントし",
                    "事実確認中ですので",
                    "かねます",
                    "現時点で"
                ],
                "answer": "コメントし",
                "correctOrder": [
                    2,
                    4,
                    1,
                    3
                ],
                "translation": "Karena masih cek fakta, saat ini kami tidak dapat berkomentar."
            }, {
                "question": "______ ______ __★__ ______。",
                "options": [
                    "その 件には",
                    "かねます",
                    "社内で 決定していない ため",
                    "お答えし"
                ],
                "answer": "お答えし",
                "correctOrder": [
                    3,
                    1,
                    4,
                    2
                ],
                "translation": "Karena belum diputuskan internal, kami tidak dapat menjawab soal itu."
            }, {
                "question": "______ ______ __★__ ______。",
                "options": [
                    "味ばかりか",
                    "すばらしい",
                    "その 店は",
                    "接客まで"
                ],
                "answer": "接客まで",
                "correctOrder": [
                    3,
                    1,
                    4,
                    2
                ],
                "translation": "Toko itu bukan hanya rasanya, pelayanannya pun luar biasa."
            }, {
                "question": "______ ______ __★__ ______。",
                "options": [
                    "日本語ばかりか",
                    "彼は",
                    "仕事で 使う",
                    "中国語まで"
                ],
                "answer": "中国語まで",
                "correctOrder": [
                    2,
                    1,
                    4,
                    3
                ],
                "translation": "Dia tidak hanya bahasa Jepang, bahkan memakai Mandarin untuk bekerja."
            }, {
                "question": "______ ______ __★__ ______。",
                "options": [
                    "交通費まで",
                    "自分で",
                    "会費ばかりか",
                    "負担する ことに なった"
                ],
                "answer": "自分で",
                "correctOrder": [
                    3,
                    1,
                    2,
                    4
                ],
                "translation": "Bukan hanya biaya keanggotaan, ongkos transport pun akhirnya harus ditanggung sendiri."
            }, {
                "question": "______ ______ __★__ ______。",
                "options": [
                    "その 計画は",
                    "大きく 見直された",
                    "時間ばかりか",
                    "予算まで"
                ],
                "answer": "予算まで",
                "correctOrder": [
                    1,
                    3,
                    4,
                    2
                ],
                "translation": "Rencana itu bukan hanya waktunya, bahkan anggarannya juga ditinjau besar-besaran."
            }, {
                "question": "______ ______ __★__ ______。",
                "options": [
                    "体に",
                    "便利だとはいえ",
                    "使いすぎるのは",
                    "よくない"
                ],
                "answer": "体に",
                "correctOrder": [
                    2,
                    3,
                    1,
                    4
                ],
                "translation": "Meskipun praktis, memakainya terlalu banyak tidak baik bagi tubuh."
            }, {
                "question": "______ ______ __★__ ______。",
                "options": [
                    "冷え込む",
                    "まだ",
                    "朝晩は",
                    "春になったとはいえ"
                ],
                "answer": "まだ",
                "correctOrder": [
                    4,
                    3,
                    2,
                    1
                ],
                "translation": "Meskipun sudah musim semi, pagi dan malam masih dingin."
            }, {
                "question": "______ ______ __★__ ______。",
                "options": [
                    "そんなに",
                    "この 仕事は",
                    "簡単では ない",
                    "経験者だとはいえ"
                ],
                "answer": "そんなに",
                "correctOrder": [
                    4,
                    2,
                    1,
                    3
                ],
                "translation": "Meskipun berpengalaman, pekerjaan ini tidak semudah itu."
            }, {
                "question": "______ ______ __★__ ______。",
                "options": [
                    "最終確認は",
                    "電話の ほうが",
                    "予約できるとはいえ",
                    "安心だ"
                ],
                "answer": "電話の ほうが",
                "correctOrder": [
                    3,
                    1,
                    2,
                    4
                ],
                "translation": "Walaupun bisa reservasi, konfirmasi akhir lewat telepon lebih menenangkan."
            }, {
                "question": "______ ______ __★__ ______。",
                "options": [
                    "苦労したか",
                    "わからない",
                    "この 計画を まとめるのに",
                    "どれほど"
                ],
                "answer": "苦労したか",
                "correctOrder": [
                    3,
                    4,
                    1,
                    2
                ],
                "translation": "Tak terbayang betapa susahnya menyusun rencana ini."
            }, {
                "question": "______ ______ __★__ ______。",
                "options": [
                    "思った 以上に",
                    "時間が",
                    "かかった",
                    "会場まで 行くのに"
                ],
                "answer": "時間が",
                "correctOrder": [
                    4,
                    1,
                    2,
                    3
                ],
                "translation": "Untuk pergi ke lokasi, ternyata butuh waktu lebih lama dari perkiraan."
            }, {
                "question": "______ ______ __★__ ______。",
                "options": [
                    "辞書だけでは",
                    "この 文章を 理解するのに",
                    "足りない",
                    "ことも ある"
                ],
                "answer": "足りない",
                "correctOrder": [
                    2,
                    1,
                    3,
                    4
                ],
                "translation": "Untuk memahami teks ini, ada kalanya kamus saja tidak cukup."
            }, {
                "question": "______ ______ __★__ ______。",
                "options": [
                    "資料を 読むのに",
                    "かかって",
                    "三時間も",
                    "しまった"
                ],
                "answer": "かかって",
                "correctOrder": [
                    1,
                    3,
                    2,
                    4
                ],
                "translation": "Hanya untuk membaca materi saja sampai memakan tiga jam."
            }
        ],
        "bunpou-text": [{
                "passage": "社内メールには、次の 一文が 含まれていた。 和食が 好きですが、毎日 すしを 食べたい ______。 文脈に 合う ものを 選ぶ 必要が ある。",
                "questionId": "1",
                "options": [
                    "わけでは ない",
                    "わけには いかない",
                    "ことは ない",
                    "に すぎない"
                ],
                "answer": "わけでは ない",
                "translation": "Saya suka masakan Jepang, tetapi bukan berarti saya ingin makan sushi setiap hari."
            }, {
                "passage": "市の 広報紙を 読むと、次の ような 表現が 出てきた。 彼の 意見に 反対したからといって、人格まで 否定している ______。 前後の 論理関係に 注意したい。",
                "questionId": "2",
                "options": [
                    "わけでは ない",
                    "わけには いかない",
                    "ことは ない",
                    "に すぎない"
                ],
                "answer": "わけでは ない",
                "translation": "Hanya karena saya menentang pendapatnya, bukan berarti saya juga menolak pribadinya."
            }, {
                "passage": "会議で 部長が 説明した 内容を メモすると、こう なっていた。 この 会社は 大きいですが、だれでも 簡単に 入れる ______。 書き手の 意図も ふまえて 判断しよう。",
                "questionId": "3",
                "options": [
                    "わけでは ない",
                    "わけには いかない",
                    "ことは ない",
                    "に すぎない"
                ],
                "answer": "わけでは ない",
                "translation": "Perusahaan ini besar, tetapi bukan berarti siapa pun bisa masuk dengan mudah."
            }, {
                "passage": "新聞の 生活面には、次の 一文が あった。 日本に 住んで いるからといって、敬語が 完璧に 使える ______。 文法だけでなく 含意も 見たい。",
                "questionId": "4",
                "options": [
                    "わけでは ない",
                    "わけには いかない",
                    "ことは ない",
                    "に すぎない"
                ],
                "answer": "わけでは ない",
                "translation": "Hanya karena tinggal di Jepang, bukan berarti saya bisa memakai keigo dengan sempurna."
            }, {
                "passage": "研修資料を 読み進めると、次の 文が 目に 入った。 この まま 雨が 続くと、川が あふれる ______。 文脈に 合う ものを 選ぶ 必要が ある。",
                "questionId": "5",
                "options": [
                    "おそれが ある",
                    "に ちがいない",
                    "に きまっている",
                    "かねない"
                ],
                "answer": "おそれが ある",
                "translation": "Kalau hujan terus begini, ada risiko sungai meluap."
            }, {
                "passage": "取引先への 連絡文として、次の 表現が 使われていた。 個人情報が もれる ______ ので、共有フォルダの 設定を 見直してください。 前後の 論理関係に 注意したい。",
                "questionId": "6",
                "options": [
                    "おそれが ある",
                    "に ちがいない",
                    "に きまっている",
                    "かねない"
                ],
                "answer": "おそれが ある",
                "translation": "Ada risiko data pribadi bocor, jadi tolong cek ulang pengaturan folder bersama."
            }, {
                "passage": "大学の 説明会で 配られた 文書には、こう 書かれていた。 納期が 延びれば、取引先に 迷惑を かける ______。 書き手の 意図も ふまえて 判断しよう。",
                "questionId": "7",
                "options": [
                    "おそれが ある",
                    "に ちがいない",
                    "に きまっている",
                    "かねない"
                ],
                "answer": "おそれが ある",
                "translation": "Jika tenggat molor, ada risiko merepotkan klien."
            }, {
                "passage": "地域の 課題を 扱う コラムには、次の 一節が あった。 この 薬は 強いので、人によっては 副作用が 出る ______。 文法だけでなく 含意も 見たい。",
                "questionId": "8",
                "options": [
                    "おそれが ある",
                    "に ちがいない",
                    "に きまっている",
                    "かねない"
                ],
                "answer": "おそれが ある",
                "translation": "Obat ini kuat, jadi pada beberapa orang ada risiko timbul efek samping."
            }, {
                "passage": "社内メールには、次の 一文が 含まれていた。 そんな 言い方では、相手を 傷つけ ______。 文脈に 合う ものを 選ぶ 必要が ある。",
                "questionId": "9",
                "options": [
                    "かねない",
                    "おそれが ある",
                    "ことは ない",
                    "わけでは ない"
                ],
                "answer": "かねない",
                "translation": "Kalau bicara seperti itu, bisa-bisa melukai lawan bicara."
            }, {
                "passage": "市の 広報紙を 読むと、次の ような 表現が 出てきた。 確認しないで 送信すると、重大な ミスに なり ______。 前後の 論理関係に 注意したい。",
                "questionId": "10",
                "options": [
                    "かねない",
                    "おそれが ある",
                    "ことは ない",
                    "わけでは ない"
                ],
                "answer": "かねない",
                "translation": "Kalau kirim tanpa mengecek, bisa-bisa jadi kesalahan besar."
            }, {
                "passage": "会議で 部長が 説明した 内容を メモすると、こう なっていた。 睡眠不足が 続くと、仕事中に 倒れ ______。 書き手の 意図も ふまえて 判断しよう。",
                "questionId": "11",
                "options": [
                    "かねない",
                    "おそれが ある",
                    "ことは ない",
                    "わけでは ない"
                ],
                "answer": "かねない",
                "translation": "Kalau terus kurang tidur, bisa-bisa ambruk saat bekerja."
            }, {
                "passage": "新聞の 生活面には、次の 一文が あった。 誤った 情報を 広めると、会社の 信用を 失い ______。 文法だけでなく 含意も 見たい。",
                "questionId": "12",
                "options": [
                    "かねない",
                    "おそれが ある",
                    "ことは ない",
                    "わけでは ない"
                ],
                "answer": "かねない",
                "translation": "Kalau menyebarkan info yang salah, bisa-bisa perusahaan kehilangan kepercayaan."
            }, {
                "passage": "研修資料を 読み進めると、次の 文が 目に 入った。 あの 店は いつも 行列だから、今日も かなり 混んでいる ______。 文脈に 合う ものを 選ぶ 必要が ある。",
                "questionId": "13",
                "options": [
                    "に ちがいない",
                    "に きまっている",
                    "に すぎない",
                    "わけだ"
                ],
                "answer": "に ちがいない",
                "translation": "Toko itu selalu antre, jadi hari ini pasti sangat ramai."
            }, {
                "passage": "取引先への 連絡文として、次の 表現が 使われていた。 あれほど 練習したのだから、彼は 合格する ______。 前後の 論理関係に 注意したい。",
                "questionId": "14",
                "options": [
                    "に ちがいない",
                    "に きまっている",
                    "に すぎない",
                    "わけだ"
                ],
                "answer": "に ちがいない",
                "translation": "Dia berlatih sebanyak itu, jadi pasti lulus."
            }, {
                "passage": "大学の 説明会で 配られた 文書には、こう 書かれていた。 窓が 全部 開いている。だれかが 先に 来た ______。 書き手の 意図も ふまえて 判断しよう。",
                "questionId": "15",
                "options": [
                    "に ちがいない",
                    "に きまっている",
                    "に すぎない",
                    "わけだ"
                ],
                "answer": "に ちがいない",
                "translation": "Semua jendela terbuka. Pasti ada orang yang datang lebih dulu."
            }, {
                "passage": "地域の 課題を 扱う コラムには、次の 一節が あった。 社長が 直接 連絡してきたのだから、かなり 重要な 話 ______。 文法だけでなく 含意も 見たい。",
                "questionId": "16",
                "options": [
                    "に ちがいない",
                    "に きまっている",
                    "に すぎない",
                    "わけだ"
                ],
                "answer": "に ちがいない",
                "translation": "Karena direktur sendiri yang menghubungi, pasti ini urusan penting."
            }, {
                "passage": "社内メールには、次の 一文が 含まれていた。 こんな に 荷物が 多いのだから、タクシーで 行く ______。 文脈に 合う ものを 選ぶ 必要が ある。",
                "questionId": "17",
                "options": [
                    "に きまっている",
                    "に ちがいない",
                    "はずだ",
                    "かもしれない"
                ],
                "answer": "に きまっている",
                "translation": "Barangnya sebanyak ini, sudah pasti perginya naik taksi."
            }, {
                "passage": "市の 広報紙を 読むと、次の ような 表現が 出てきた。 毎日 終電まで 働いて いるのだから、疲れて いる ______。 前後の 論理関係に 注意したい。",
                "questionId": "18",
                "options": [
                    "に きまっている",
                    "に ちがいない",
                    "はずだ",
                    "かもしれない"
                ],
                "answer": "に きまっている",
                "translation": "Dia bekerja sampai kereta terakhir tiap hari, pasti capek."
            }, {
                "passage": "会議で 部長が 説明した 内容を メモすると、こう なっていた。 あの 人が 遅刻したのは、寝坊したから ______。 書き手の 意図も ふまえて 判断しよう。",
                "questionId": "19",
                "options": [
                    "に きまっている",
                    "に ちがいない",
                    "はずだ",
                    "かもしれない"
                ],
                "answer": "に きまっている",
                "translation": "Dia telat itu pasti karena ketiduran."
            }, {
                "passage": "新聞の 生活面には、次の 一文が あった。 ここまで そろって いれば、会議は 延長に なる ______。 文法だけでなく 含意も 見たい。",
                "questionId": "20",
                "options": [
                    "に きまっている",
                    "に ちがいない",
                    "はずだ",
                    "かもしれない"
                ],
                "answer": "に きまっている",
                "translation": "Kalau situasinya begini, rapat pasti diperpanjang."
            }, {
                "passage": "研修資料を 読み進めると、次の 文が 目に 入った。 その うわさは 一部の SNSで 広まった 情報 ______。 文脈に 合う ものを 選ぶ 必要が ある。",
                "questionId": "21",
                "options": [
                    "に すぎない",
                    "だけだ",
                    "ばかりだ",
                    "わけだ"
                ],
                "answer": "に すぎない",
                "translation": "Rumor itu tidak lebih dari informasi yang tersebar di sebagian SNS."
            }, {
                "passage": "取引先への 連絡文として、次の 表現が 使われていた。 彼の 発言は 個人的な 意見 ______ から、会社の 方針では ありません。 前後の 論理関係に 注意したい。",
                "questionId": "22",
                "options": [
                    "に すぎない",
                    "だけだ",
                    "ばかりだ",
                    "わけだ"
                ],
                "answer": "に すぎない",
                "translation": "Ucapannya tidak lebih dari pendapat pribadi, jadi bukan kebijakan perusahaan."
            }, {
                "passage": "大学の 説明会で 配られた 文書には、こう 書かれていた。 今回の 変更は 日程を 少し 調整した ______。 書き手の 意図も ふまえて 判断しよう。",
                "questionId": "23",
                "options": [
                    "に すぎない",
                    "だけだ",
                    "ばかりだ",
                    "わけだ"
                ],
                "answer": "に すぎない",
                "translation": "Perubahan kali ini tidak lebih dari sedikit penyesuaian jadwal."
            }, {
                "passage": "地域の 課題を 扱う コラムには、次の 一節が あった。 この 結果は 途中経過 ______ ので、まだ 判断は できません。 文法だけでなく 含意も 見たい。",
                "questionId": "24",
                "options": [
                    "に すぎない",
                    "だけだ",
                    "ばかりだ",
                    "わけだ"
                ],
                "answer": "に すぎない",
                "translation": "Hasil ini tidak lebih dari perkembangan sementara, jadi belum bisa diputuskan."
            }, {
                "passage": "社内メールには、次の 一文が 含まれていた。 申請は 済ませた ______、まだ 許可は 下りて いません。 文脈に 合う ものを 選ぶ 必要が ある。",
                "questionId": "25",
                "options": [
                    "ものの",
                    "けれども",
                    "ので",
                    "のに"
                ],
                "answer": "ものの",
                "translation": "Meskipun pengajuan sudah dilakukan, izinnya masih belum turun."
            }, {
                "passage": "市の 広報紙を 読むと、次の ような 表現が 出てきた。 説明を 聞いた ______、実際に できるか どうかは 別問題です。 前後の 論理関係に 注意したい。",
                "questionId": "26",
                "options": [
                    "ものの",
                    "けれども",
                    "ので",
                    "のに"
                ],
                "answer": "ものの",
                "translation": "Walau sudah mendengar penjelasan, apakah bisa melakukannya itu soal lain."
            }, {
                "passage": "会議で 部長が 説明した 内容を メモすると、こう なっていた。 新製品は 発売された ______、売れ行きは まだ わかりません。 書き手の 意図も ふまえて 判断しよう。",
                "questionId": "27",
                "options": [
                    "ものの",
                    "けれども",
                    "ので",
                    "のに"
                ],
                "answer": "ものの",
                "translation": "Meskipun produk baru sudah dirilis, penjualannya masih belum diketahui."
            }, {
                "passage": "新聞の 生活面には、次の 一文が あった。 会場には 着いた ______、受付が 始まるまで まだ 時間が ありました。 文法だけでなく 含意も 見たい。",
                "questionId": "28",
                "options": [
                    "ものの",
                    "けれども",
                    "ので",
                    "のに"
                ],
                "answer": "ものの",
                "translation": "Walau sudah sampai di lokasi, masih ada waktu sebelum registrasi dibuka."
            }, {
                "passage": "研修資料を 読み進めると、次の 文が 目に 入った。 新しい 部署は 忙しい ______、昼休みも ちゃんと 取れません。 文脈に 合う ものを 選ぶ 必要が ある。",
                "questionId": "29",
                "options": [
                    "どころか",
                    "ばかりか",
                    "ものの",
                    "うえに"
                ],
                "answer": "どころか",
                "translation": "Divisi baru bukan cuma sibuk, makan siang pun tidak sempat."
            }, {
                "passage": "取引先への 連絡文として、次の 表現が 使われていた。 今年は 涼しい ______、連日 真夏日が 続いています。 前後の 論理関係に 注意したい。",
                "questionId": "30",
                "options": [
                    "どころか",
                    "ばかりか",
                    "ものの",
                    "うえに"
                ],
                "answer": "どころか",
                "translation": "Tahun ini bukannya sejuk, justru hari-hari panas terus."
            }, {
                "passage": "大学の 説明会で 配られた 文書には、こう 書かれていた。 彼は 日本語を 話せない ______、漢字まで すらすら 読めます。 書き手の 意図も ふまえて 判断しよう。",
                "questionId": "31",
                "options": [
                    "どころか",
                    "ばかりか",
                    "ものの",
                    "うえに"
                ],
                "answer": "どころか",
                "translation": "Dia bukan cuma bisa bicara bahasa Jepang, kanji pun lancar."
            }, {
                "passage": "地域の 課題を 扱う コラムには、次の 一節が あった。 手伝う ______、かえって 作業を 増やして しまいました。 文法だけでなく 含意も 見たい。",
                "questionId": "32",
                "options": [
                    "どころか",
                    "ばかりか",
                    "ものの",
                    "うえに"
                ],
                "answer": "どころか",
                "translation": "Bukan membantu, malah menambah pekerjaan."
            }, {
                "passage": "社内メールには、次の 一文が 含まれていた。 この 施設は 観光客 ______、地元の 人にも 利用されて います。 文脈に 合う ものを 選ぶ 必要が ある。",
                "questionId": "33",
                "options": [
                    "のみならず",
                    "ばかりか",
                    "どころか",
                    "うえに"
                ],
                "answer": "のみならず",
                "translation": "Fasilitas ini tidak hanya digunakan wisatawan, tetapi juga penduduk lokal."
            }, {
                "passage": "市の 広報紙を 読むと、次の ような 表現が 出てきた。 彼は 営業 ______、企画まで 一人で 担当して いる。 前後の 論理関係に 注意したい。",
                "questionId": "34",
                "options": [
                    "のみならず",
                    "ばかりか",
                    "どころか",
                    "うえに"
                ],
                "answer": "のみならず",
                "translation": "Dia tidak hanya menangani sales, tetapi juga perencanaan seorang diri."
            }, {
                "passage": "会議で 部長が 説明した 内容を メモすると、こう なっていた。 新制度は 社員 ______、取引先にも 影響を 与える。 書き手の 意図も ふまえて 判断しよう。",
                "questionId": "35",
                "options": [
                    "のみならず",
                    "ばかりか",
                    "どころか",
                    "うえに"
                ],
                "answer": "のみならず",
                "translation": "Sistem baru ini berdampak bukan hanya pada pegawai, tapi juga klien."
            }, {
                "passage": "新聞の 生活面には、次の 一文が あった。 その 先生は 文法 ______、発音指導にも 定評が ある。 文法だけでなく 含意も 見たい。",
                "questionId": "36",
                "options": [
                    "のみならず",
                    "ばかりか",
                    "どころか",
                    "うえに"
                ],
                "answer": "のみならず",
                "translation": "Guru itu tidak hanya kuat di tata bahasa, tetapi juga terkenal dalam pengajaran pelafalan."
            }, {
                "passage": "研修資料を 読み進めると、次の 文が 目に 入った。 経験年数 ______、担当する 仕事の 範囲も 広がる。 文脈に 合う ものを 選ぶ 必要が ある。",
                "questionId": "37",
                "options": [
                    "に 応じて",
                    "に つれて",
                    "に 伴って",
                    "に 比べて"
                ],
                "answer": "に 応じて",
                "translation": "Sesuai lamanya pengalaman, cakupan pekerjaan yang ditangani juga meluas."
            }, {
                "passage": "取引先への 連絡文として、次の 表現が 使われていた。 参加者の レベル ______、教材を 変える 予定です。 前後の 論理関係に 注意したい。",
                "questionId": "38",
                "options": [
                    "に 応じて",
                    "に つれて",
                    "に 伴って",
                    "に 比べて"
                ],
                "answer": "に 応じて",
                "translation": "Sesuai level peserta, materi akan diubah."
            }, {
                "passage": "大学の 説明会で 配られた 文書には、こう 書かれていた。 問い合わせの 内容 ______、担当部署に おつなぎ します。 書き手の 意図も ふまえて 判断しよう。",
                "questionId": "39",
                "options": [
                    "に 応じて",
                    "に つれて",
                    "に 伴って",
                    "に 比べて"
                ],
                "answer": "に 応じて",
                "translation": "Sesuai isi pertanyaan, kami akan sambungkan ke departemen terkait."
            }, {
                "passage": "地域の 課題を 扱う コラムには、次の 一節が あった。 予算 ______、実施できる 企画も 変わってくる。 文法だけでなく 含意も 見たい。",
                "questionId": "40",
                "options": [
                    "に 応じて",
                    "に つれて",
                    "に 伴って",
                    "に 比べて"
                ],
                "answer": "に 応じて",
                "translation": "Sesuai anggaran, proyek yang bisa dijalankan juga akan berubah."
            }, {
                "passage": "社内メールには、次の 一文が 含まれていた。 年齢 ______、応募できる 制度に なって います。 文脈に 合う ものを 選ぶ 必要が ある。",
                "questionId": "41",
                "options": [
                    "に かかわらず",
                    "に もかかわらず",
                    "に 応じて",
                    "に 対して"
                ],
                "answer": "に かかわらず",
                "translation": "Terlepas dari usia, sistem ini tetap bisa dilamar."
            }, {
                "passage": "市の 広報紙を 読むと、次の ような 表現が 出てきた。 天候 ______、イベントは 予定どおり 行います。 前後の 論理関係に 注意したい。",
                "questionId": "42",
                "options": [
                    "に かかわらず",
                    "に もかかわらず",
                    "に 応じて",
                    "に 対して"
                ],
                "answer": "に かかわらず",
                "translation": "Terlepas dari cuaca, acara dilaksanakan sesuai rencana."
            }, {
                "passage": "会議で 部長が 説明した 内容を メモすると、こう なっていた。 経験の 有無 ______、まずは 研修から 始めます。 書き手の 意図も ふまえて 判断しよう。",
                "questionId": "43",
                "options": [
                    "に かかわらず",
                    "に もかかわらず",
                    "に 応じて",
                    "に 対して"
                ],
                "answer": "に かかわらず",
                "translation": "Terlepas dari ada tidaknya pengalaman, semuanya dimulai dari pelatihan."
            }, {
                "passage": "新聞の 生活面には、次の 一文が あった。 国籍 ______、同じ 条件で 審査されます。 文法だけでなく 含意も 見たい。",
                "questionId": "44",
                "options": [
                    "に かかわらず",
                    "に もかかわらず",
                    "に 応じて",
                    "に 対して"
                ],
                "answer": "に かかわらず",
                "translation": "Terlepas dari kewarganegaraan, semuanya dinilai dengan syarat yang sama."
            }, {
                "passage": "研修資料を 読み進めると、次の 文が 目に 入った。 制度の 改正 ______、申請方法も 変更された。 文脈に 合う ものを 選ぶ 必要が ある。",
                "questionId": "45",
                "options": [
                    "に 伴って",
                    "に つれて",
                    "に 応じて",
                    "に 比べて"
                ],
                "answer": "に 伴って",
                "translation": "Seiring revisi sistem, cara pengajuan juga berubah."
            }, {
                "passage": "取引先への 連絡文として、次の 表現が 使われていた。 人口の 増加 ______、保育施設の 需要も 高まっている。 前後の 論理関係に 注意したい。",
                "questionId": "46",
                "options": [
                    "に 伴って",
                    "に つれて",
                    "に 応じて",
                    "に 比べて"
                ],
                "answer": "に 伴って",
                "translation": "Seiring bertambahnya populasi, kebutuhan fasilitas penitipan anak juga naik."
            }, {
                "passage": "大学の 説明会で 配られた 文書には、こう 書かれていた。 円安 ______、輸入品の 価格が 上がって きた。 書き手の 意図も ふまえて 判断しよう。",
                "questionId": "47",
                "options": [
                    "に 伴って",
                    "に つれて",
                    "に 応じて",
                    "に 比べて"
                ],
                "answer": "に 伴って",
                "translation": "Seiring pelemahan yen, harga barang impor mulai naik."
            }, {
                "passage": "地域の 課題を 扱う コラムには、次の 一節が あった。 事業の 拡大 ______、本社も 移転する ことに なった。 文法だけでなく 含意も 見たい。",
                "questionId": "48",
                "options": [
                    "に 伴って",
                    "に つれて",
                    "に 応じて",
                    "に 比べて"
                ],
                "answer": "に 伴って",
                "translation": "Seiring ekspansi usaha, kantor pusat juga diputuskan pindah."
            }, {
                "passage": "社内メールには、次の 一文が 含まれていた。 試験が 近づく ______、緊張も 強く なって きた。 文脈に 合う ものを 選ぶ 必要が ある。",
                "questionId": "49",
                "options": [
                    "に つれて",
                    "に 伴って",
                    "に 応じて",
                    "に 比べて"
                ],
                "answer": "に つれて",
                "translation": "Semakin dekat ujian, semakin kuat rasa tegang."
            }, {
                "passage": "市の 広報紙を 読むと、次の ような 表現が 出てきた。 日本語に 慣れる ______、ニュースも 楽しく なってきた。 前後の 論理関係に 注意したい。",
                "questionId": "50",
                "options": [
                    "に つれて",
                    "に 伴って",
                    "に 応じて",
                    "に 比べて"
                ],
                "answer": "に つれて",
                "translation": "Semakin terbiasa dengan bahasa Jepang, berita juga jadi lebih menarik."
            }, {
                "passage": "会議で 部長が 説明した 内容を メモすると、こう なっていた。 日が 暮れる ______、駅前の イルミネーションが 目立ってくる。 書き手の 意図も ふまえて 判断しよう。",
                "questionId": "51",
                "options": [
                    "に つれて",
                    "に 伴って",
                    "に 応じて",
                    "に 比べて"
                ],
                "answer": "に つれて",
                "translation": "Semakin sore, iluminasi di depan stasiun makin terlihat."
            }, {
                "passage": "新聞の 生活面には、次の 一文が あった。 気温が 下がる ______、体調を 崩す 人も 増えている。 文法だけでなく 含意も 見たい。",
                "questionId": "52",
                "options": [
                    "に つれて",
                    "に 伴って",
                    "に 応じて",
                    "に 比べて"
                ],
                "answer": "に つれて",
                "translation": "Semakin suhu turun, makin banyak orang jatuh sakit."
            }, {
                "passage": "研修資料を 読み進めると、次の 文が 目に 入った。 原材料の 値段は 上がる ______ で、経営が 厳しい。 文脈に 合う ものを 選ぶ 必要が ある。",
                "questionId": "53",
                "options": [
                    "一方だ",
                    "ばかりだ",
                    "だけだ",
                    "に すぎない"
                ],
                "answer": "一方だ",
                "translation": "Harga bahan baku terus naik saja, sehingga usaha makin berat."
            }, {
                "passage": "取引先への 連絡文として、次の 表現が 使われていた。 最近は 利用者が 減る ______ で、商店街が 心配して いる。 前後の 論理関係に 注意したい。",
                "questionId": "54",
                "options": [
                    "一方だ",
                    "ばかりだ",
                    "だけだ",
                    "に すぎない"
                ],
                "answer": "一方だ",
                "translation": "Belakangan pengunjung hanya terus berkurang, jadi pusat pertokoan khawatir."
            }, {
                "passage": "大学の 説明会で 配られた 文書には、こう 書かれていた。 忙しくなる と、部屋は 散らかる ______。 書き手の 意図も ふまえて 判断しよう。",
                "questionId": "55",
                "options": [
                    "一方だ",
                    "ばかりだ",
                    "だけだ",
                    "に すぎない"
                ],
                "answer": "一方だ",
                "translation": "Kalau makin sibuk, kamar hanya makin berantakan saja."
            }, {
                "passage": "地域の 課題を 扱う コラムには、次の 一節が あった。 その 会社の 評判は 悪くなる ______ だった。 文法だけでなく 含意も 見たい。",
                "questionId": "56",
                "options": [
                    "一方だ",
                    "ばかりだ",
                    "だけだ",
                    "に すぎない"
                ],
                "answer": "一方だ",
                "translation": "Reputasi perusahaan itu hanya semakin memburuk."
            }, {
                "passage": "社内メールには、次の 一文が 含まれていた。 長い 話し合いの ______、両社は ようやく 合意した。 文脈に 合う ものを 選ぶ 必要が ある。",
                "questionId": "57",
                "options": [
                    "末に",
                    "あげく",
                    "うえで",
                    "かわりに"
                ],
                "answer": "末に",
                "translation": "Setelah pembahasan panjang, kedua perusahaan akhirnya sepakat."
            }, {
                "passage": "市の 広報紙を 読むと、次の ような 表現が 出てきた。 何度も 検討した ______、今回は 見送る ことにした。 前後の 論理関係に 注意したい。",
                "questionId": "58",
                "options": [
                    "末に",
                    "あげく",
                    "うえで",
                    "かわりに"
                ],
                "answer": "末に",
                "translation": "Setelah dipertimbangkan berkali-kali, kali ini diputuskan ditunda."
            }, {
                "passage": "会議で 部長が 説明した 内容を メモすると、こう なっていた。 家族と 相談した ______、留学を 決めました。 書き手の 意図も ふまえて 判断しよう。",
                "questionId": "59",
                "options": [
                    "末に",
                    "あげく",
                    "うえで",
                    "かわりに"
                ],
                "answer": "末に",
                "translation": "Setelah berdiskusi dengan keluarga, saya memutuskan studi ke luar negeri."
            }, {
                "passage": "新聞の 生活面には、次の 一文が あった。 悩んだ ______、今の 会社に 残る ことにしました。 文法だけでなく 含意も 見たい。",
                "questionId": "60",
                "options": [
                    "末に",
                    "あげく",
                    "うえで",
                    "かわりに"
                ],
                "answer": "末に",
                "translation": "Setelah bimbang, saya memutuskan tetap di perusahaan sekarang."
            }, {
                "passage": "研修資料を 読み進めると、次の 文が 目に 入った。 資料を よく 読んだ ______、ご応募 ください。 文脈に 合う ものを 選ぶ 必要が ある。",
                "questionId": "61",
                "options": [
                    "うえで",
                    "あとで",
                    "まえに",
                    "ところで"
                ],
                "answer": "うえで",
                "translation": "Silakan melamar setelah membaca materi dengan baik."
            }, {
                "passage": "取引先への 連絡文として、次の 表現が 使われていた。 担当者と 相談した ______、正式に 決める つもりです。 前後の 論理関係に 注意したい。",
                "questionId": "62",
                "options": [
                    "うえで",
                    "あとで",
                    "まえに",
                    "ところで"
                ],
                "answer": "うえで",
                "translation": "Saya akan memutuskan resmi setelah berkonsultasi dengan penanggung jawab."
            }, {
                "passage": "大学の 説明会で 配られた 文書には、こう 書かれていた。 契約内容を 確認した ______、サインを お願いします。 書き手の 意図も ふまえて 判断しよう。",
                "questionId": "63",
                "options": [
                    "うえで",
                    "あとで",
                    "まえに",
                    "ところで"
                ],
                "answer": "うえで",
                "translation": "Mohon tanda tangan setelah memeriksa isi kontrak."
            }, {
                "passage": "地域の 課題を 扱う コラムには、次の 一節が あった。 実際に 使ってみた ______、導入するか 判断します。 文法だけでなく 含意も 見たい。",
                "questionId": "64",
                "options": [
                    "うえで",
                    "あとで",
                    "まえに",
                    "ところで"
                ],
                "answer": "うえで",
                "translation": "Setelah benar-benar mencobanya, kami akan menilai apakah akan mengadopsinya."
            }, {
                "passage": "社内メールには、次の 一文が 含まれていた。 彼は 文句を 言う ______、最後まで 仕事を やりとげた。 文脈に 合う ものを 選ぶ 必要が ある。",
                "questionId": "65",
                "options": [
                    "ことなく",
                    "ないで",
                    "なくて",
                    "ずに"
                ],
                "answer": "ことなく",
                "translation": "Dia menyelesaikan pekerjaan sampai akhir tanpa mengeluh."
            }, {
                "passage": "市の 広報紙を 読むと、次の ような 表現が 出てきた。 その 記事は 感情に 流される ______、事実だけを 冷静に 述べている。 前後の 論理関係に 注意したい。",
                "questionId": "66",
                "options": [
                    "ことなく",
                    "ないで",
                    "なくて",
                    "ずに"
                ],
                "answer": "ことなく",
                "translation": "Artikel itu menyampaikan fakta secara tenang tanpa terbawa emosi."
            }, {
                "passage": "会議で 部長が 説明した 内容を メモすると、こう なっていた。 だれにも 知られる ______、ひっそりと 準備を 進めた。 書き手の 意図も ふまえて 判断しよう。",
                "questionId": "67",
                "options": [
                    "ことなく",
                    "ないで",
                    "なくて",
                    "ずに"
                ],
                "answer": "ことなく",
                "translation": "Persiapan dilakukan diam-diam tanpa diketahui siapa pun."
            }, {
                "passage": "新聞の 生活面には、次の 一文が あった。 彼女は 表情を 変える ______、ただ 黙って うなずいた。 文法だけでなく 含意も 見たい。",
                "questionId": "68",
                "options": [
                    "ことなく",
                    "ないで",
                    "なくて",
                    "ずに"
                ],
                "answer": "ことなく",
                "translation": "Dia hanya mengangguk tanpa mengubah ekspresi."
            }, {
                "passage": "研修資料を 読み進めると、次の 文が 目に 入った。 準備が でき ______、すぐに 発送いたします。 文脈に 合う ものを 選ぶ 必要が ある。",
                "questionId": "69",
                "options": [
                    "次第",
                    "しだいで",
                    "だけで",
                    "ばかりで"
                ],
                "answer": "次第",
                "translation": "Begitu persiapan selesai, kami akan segera mengirim."
            }, {
                "passage": "取引先への 連絡文として、次の 表現が 使われていた。 結果が わかり ______、ご連絡 します。 前後の 論理関係に 注意したい。",
                "questionId": "70",
                "options": [
                    "次第",
                    "しだいで",
                    "だけで",
                    "ばかりで"
                ],
                "answer": "次第",
                "translation": "Begitu hasil diketahui, kami akan menghubungi."
            }, {
                "passage": "大学の 説明会で 配られた 文書には、こう 書かれていた。 部長が 戻り ______、会議を 始めます。 書き手の 意図も ふまえて 判断しよう。",
                "questionId": "71",
                "options": [
                    "次第",
                    "しだいで",
                    "だけで",
                    "ばかりで"
                ],
                "answer": "次第",
                "translation": "Begitu kepala divisi kembali, rapat akan dimulai."
            }, {
                "passage": "地域の 課題を 扱う コラムには、次の 一節が あった。 確認が 取れ ______、受付を 再開します。 文法だけでなく 含意も 見たい。",
                "questionId": "72",
                "options": [
                    "次第",
                    "しだいで",
                    "だけで",
                    "ばかりで"
                ],
                "answer": "次第",
                "translation": "Begitu konfirmasi didapat, penerimaan akan dibuka kembali."
            }, {
                "passage": "社内メールには、次の 一文が 含まれていた。 急な 欠員が 出たので、私が 対応せ ______ 状況に なった。 文脈に 合う ものを 選ぶ 必要が ある。",
                "questionId": "73",
                "options": [
                    "ざるを 得ない",
                    "ない わけには いかない",
                    "ことに なる",
                    "に すぎない"
                ],
                "answer": "ざるを 得ない",
                "translation": "Karena ada kekurangan staf mendadak, saya terpaksa menanganinya."
            }, {
                "passage": "市の 広報紙を 読むと、次の ような 表現が 出てきた。 予算が 削減された以上、計画を 見直さ ______。 前後の 論理関係に 注意したい。",
                "questionId": "74",
                "options": [
                    "ざるを 得ない",
                    "ない わけには いかない",
                    "ことに なる",
                    "に すぎない"
                ],
                "answer": "ざるを 得ない",
                "translation": "Karena anggarannya dipotong, kami terpaksa meninjau ulang rencana."
            }, {
                "passage": "会議で 部長が 説明した 内容を メモすると、こう なっていた。 証拠が あるからには、事実を 認め ______。 書き手の 意図も ふまえて 判断しよう。",
                "questionId": "75",
                "options": [
                    "ざるを 得ない",
                    "ない わけには いかない",
                    "ことに なる",
                    "に すぎない"
                ],
                "answer": "ざるを 得ない",
                "translation": "Karena ada bukti, kami tak punya pilihan selain mengakui fakta."
            }, {
                "passage": "新聞の 生活面には、次の 一文が あった。 電車が 止まったので、会議に 遅れると 連絡せ ______。 文法だけでなく 含意も 見たい。",
                "questionId": "76",
                "options": [
                    "ざるを 得ない",
                    "ない わけには いかない",
                    "ことに なる",
                    "に すぎない"
                ],
                "answer": "ざるを 得ない",
                "translation": "Karena kereta berhenti, saya terpaksa mengabari akan terlambat ke rapat."
            }, {
                "passage": "研修資料を 読み進めると、次の 文が 目に 入った。 その 映画は 最後まで 見ると、泣か ______。 文脈に 合う ものを 選ぶ 必要が ある。",
                "questionId": "77",
                "options": [
                    "ずには いられない",
                    "ないでは いられない",
                    "ざるを 得ない",
                    "かねない"
                ],
                "answer": "ずには いられない",
                "translation": "Film itu kalau ditonton sampai akhir, membuat orang tak bisa menahan tangis."
            }, {
                "passage": "取引先への 連絡文として、次の 表現が 使われていた。 彼の 話を 聞いて、応援せ ______ 気持ちに なった。 前後の 論理関係に 注意したい。",
                "questionId": "78",
                "options": [
                    "ずには いられない",
                    "ないでは いられない",
                    "ざるを 得ない",
                    "かねない"
                ],
                "answer": "ずには いられない",
                "translation": "Setelah mendengar ceritanya, saya merasa tak bisa tidak mendukungnya."
            }, {
                "passage": "大学の 説明会で 配られた 文書には、こう 書かれていた。 こんなに おいしそうな 匂いが すると、食べ ______。 書き手の 意図も ふまえて 判断しよう。",
                "questionId": "79",
                "options": [
                    "ずには いられない",
                    "ないでは いられない",
                    "ざるを 得ない",
                    "かねない"
                ],
                "answer": "ずには いられない",
                "translation": "Kalau baunya seenak ini, tak bisa menahan untuk tidak makan."
            }, {
                "passage": "地域の 課題を 扱う コラムには、次の 一節が あった。 理不尽な 対応を されて、文句を 言わ ______。 文法だけでなく 含意も 見たい。",
                "questionId": "80",
                "options": [
                    "ずには いられない",
                    "ないでは いられない",
                    "ざるを 得ない",
                    "かねない"
                ],
                "answer": "ずには いられない",
                "translation": "Karena diperlakukan tak masuk akal, saya tak bisa tidak protes."
            }, {
                "passage": "社内メールには、次の 一文が 含まれていた。 熱は ありますが、大事な 会議なので 休む ______。 文脈に 合う ものを 選ぶ 必要が ある。",
                "questionId": "81",
                "options": [
                    "わけには いかない",
                    "わけでは ない",
                    "ことは ない",
                    "わけだ"
                ],
                "answer": "わけには いかない",
                "translation": "Saya demam, tetapi karena rapat penting, saya tak bisa begitu saja libur."
            }, {
                "passage": "市の 広報紙を 読むと、次の ような 表現が 出てきた。 約束した 以上、途中で やめる ______。 前後の 論理関係に 注意したい。",
                "questionId": "82",
                "options": [
                    "わけには いかない",
                    "わけでは ない",
                    "ことは ない",
                    "わけだ"
                ],
                "answer": "わけには いかない",
                "translation": "Karena sudah berjanji, saya tidak bisa berhenti di tengah jalan."
            }, {
                "passage": "会議で 部長が 説明した 内容を メモすると、こう なっていた。 お客様の 前では、私情を 出す ______。 書き手の 意図も ふまえて 判断しよう。",
                "questionId": "83",
                "options": [
                    "わけには いかない",
                    "わけでは ない",
                    "ことは ない",
                    "わけだ"
                ],
                "answer": "わけには いかない",
                "translation": "Di depan pelanggan, saya tak bisa menunjukkan urusan pribadi."
            }, {
                "passage": "新聞の 生活面には、次の 一文が あった。 試験前なので、遊んで ばかりいる ______。 文法だけでなく 含意も 見たい。",
                "questionId": "84",
                "options": [
                    "わけには いかない",
                    "わけでは ない",
                    "ことは ない",
                    "わけだ"
                ],
                "answer": "わけには いかない",
                "translation": "Karena sebelum ujian, saya tak bisa hanya bermain."
            }, {
                "passage": "研修資料を 読み進めると、次の 文が 目に 入った。 そんなに 心配する ______ よ。まだ 時間は あります。 文脈に 合う ものを 選ぶ 必要が ある。",
                "questionId": "85",
                "options": [
                    "ことは ない",
                    "わけでは ない",
                    "わけには いかない",
                    "に すぎない"
                ],
                "answer": "ことは ない",
                "translation": "Tidak perlu khawatir sebegitunya; waktunya masih ada."
            }, {
                "passage": "取引先への 連絡文として、次の 表現が 使われていた。 急がなくても いいので、無理を する ______。 前後の 論理関係に 注意したい。",
                "questionId": "86",
                "options": [
                    "ことは ない",
                    "わけでは ない",
                    "わけには いかない",
                    "に すぎない"
                ],
                "answer": "ことは ない",
                "translation": "Tidak perlu memaksakan diri, karena tidak harus buru-buru."
            }, {
                "passage": "大学の 説明会で 配られた 文書には、こう 書かれていた。 まだ 経験が 少ないのだから、一人で 全部 抱え込む ______。 書き手の 意図も ふまえて 判断しよう。",
                "questionId": "87",
                "options": [
                    "ことは ない",
                    "わけでは ない",
                    "わけには いかない",
                    "に すぎない"
                ],
                "answer": "ことは ない",
                "translation": "Karena pengalamanmu masih sedikit, tak perlu menanggung semuanya sendirian."
            }, {
                "passage": "地域の 課題を 扱う コラムには、次の 一節が あった。 その ミスは だれにでも ある。そんなに 落ち込む ______。 文法だけでなく 含意も 見たい。",
                "questionId": "88",
                "options": [
                    "ことは ない",
                    "わけでは ない",
                    "わけには いかない",
                    "に すぎない"
                ],
                "answer": "ことは ない",
                "translation": "Kesalahan seperti itu bisa dialami siapa saja. Tak perlu terlalu sedih."
            }, {
                "passage": "社内メールには、次の 一文が 含まれていた。 個人情報が 含まれているため、その 資料は 公開し ______。 文脈に 合う ものを 選ぶ 必要が ある。",
                "questionId": "89",
                "options": [
                    "かねる",
                    "かねない",
                    "わけでは ない",
                    "ことは ない"
                ],
                "answer": "かねる",
                "translation": "Karena berisi data pribadi, kami tidak dapat memublikasikan materi itu."
            }, {
                "passage": "市の 広報紙を 読むと、次の ような 表現が 出てきた。 社内で まだ 決まって いない ことには、お答えし ______。 前後の 論理関係に 注意したい。",
                "questionId": "90",
                "options": [
                    "かねる",
                    "かねない",
                    "わけでは ない",
                    "ことは ない"
                ],
                "answer": "かねる",
                "translation": "Soal yang belum diputuskan internal, kami sulit memberi jawaban."
            }, {
                "passage": "会議で 部長が 説明した 内容を メモすると、こう なっていた。 ただいま 担当者が 不在のため、すぐには 判断し ______。 書き手の 意図も ふまえて 判断しよう。",
                "questionId": "91",
                "options": [
                    "かねる",
                    "かねない",
                    "わけでは ない",
                    "ことは ない"
                ],
                "answer": "かねる",
                "translation": "Karena penanggung jawab sedang tidak ada, kami sulit segera memutuskan."
            }, {
                "passage": "新聞の 生活面には、次の 一文が あった。 その 件については 事実確認中ですので、今 コメントし ______。 文法だけでなく 含意も 見たい。",
                "questionId": "92",
                "options": [
                    "かねる",
                    "かねない",
                    "わけでは ない",
                    "ことは ない"
                ],
                "answer": "かねる",
                "translation": "Karena masih verifikasi fakta, saat ini kami tidak dapat berkomentar."
            }, {
                "passage": "研修資料を 読み進めると、次の 文が 目に 入った。 その 店は 味 ______、接客まで すばらしい。 文脈に 合う ものを 選ぶ 必要が ある。",
                "questionId": "93",
                "options": [
                    "ばかりか",
                    "どころか",
                    "のみならず",
                    "ものの"
                ],
                "answer": "ばかりか",
                "translation": "Toko itu bukan hanya rasanya, pelayanannya pun luar biasa."
            }, {
                "passage": "取引先への 連絡文として、次の 表現が 使われていた。 彼は 日本語 ______、中国語まで 仕事で 使っている。 前後の 論理関係に 注意したい。",
                "questionId": "94",
                "options": [
                    "ばかりか",
                    "どころか",
                    "のみならず",
                    "ものの"
                ],
                "answer": "ばかりか",
                "translation": "Dia bukan hanya bahasa Jepang, bahasa Mandarin pun dipakai untuk bekerja."
            }, {
                "passage": "大学の 説明会で 配られた 文書には、こう 書かれていた。 会費 ______、交通費まで 自分で 負担する ことに なった。 書き手の 意図も ふまえて 判断しよう。",
                "questionId": "95",
                "options": [
                    "ばかりか",
                    "どころか",
                    "のみならず",
                    "ものの"
                ],
                "answer": "ばかりか",
                "translation": "Bukan hanya biaya keanggotaan, ongkos transport pun akhirnya ditanggung sendiri."
            }, {
                "passage": "地域の 課題を 扱う コラムには、次の 一節が あった。 その 計画は 時間 ______、予算まで 大きく 見直された。 文法だけでなく 含意も 見たい。",
                "questionId": "96",
                "options": [
                    "ばかりか",
                    "どころか",
                    "のみならず",
                    "ものの"
                ],
                "answer": "ばかりか",
                "translation": "Bukan hanya waktunya, bahkan anggarannya juga ditinjau besar-besaran."
            }, {
                "passage": "社内メールには、次の 一文が 含まれていた。 春に なった ______、朝晩は まだ 冷え込みます。 文脈に 合う ものを 選ぶ 必要が ある。",
                "questionId": "97",
                "options": [
                    "とはいえ",
                    "ものの",
                    "どころか",
                    "にしては"
                ],
                "answer": "とはいえ",
                "translation": "Meskipun sudah masuk musim semi, pagi dan malam masih dingin."
            }, {
                "passage": "市の 広報紙を 読むと、次の ような 表現が 出てきた。 便利だ ______、使いすぎるのは よくない。 前後の 論理関係に 注意したい。",
                "questionId": "98",
                "options": [
                    "とはいえ",
                    "ものの",
                    "どころか",
                    "にしては"
                ],
                "answer": "とはいえ",
                "translation": "Walaupun praktis, memakainya berlebihan tidak baik."
            }, {
                "passage": "会議で 部長が 説明した 内容を メモすると、こう なっていた。 経験者だ ______、この 仕事は そんなに 簡単では ない。 書き手の 意図も ふまえて 判断しよう。",
                "questionId": "99",
                "options": [
                    "とはいえ",
                    "ものの",
                    "どころか",
                    "にしては"
                ],
                "answer": "とはいえ",
                "translation": "Meskipun berpengalaman, pekerjaan ini tidak semudah itu."
            }, {
                "passage": "新聞の 生活面には、次の 一文が あった。 ネットで 予約できる ______、最終確認は 電話の ほうが 安心です。 文法だけでなく 含意も 見たい。",
                "questionId": "100",
                "options": [
                    "とはいえ",
                    "ものの",
                    "どころか",
                    "にしては"
                ],
                "answer": "とはいえ",
                "translation": "Walaupun bisa reservasi lewat internet, konfirmasi akhir lewat telepon lebih aman."
            }
        ]
    },

    "N1": {
        "bunpou-form": [{
                "question": "この 地域の 祭りは、準備から 後片づけ ______ 地元の 人が 支えている。",
                "options": [
                    "に 至るまで",
                    "に 至って",
                    "に かけて",
                    "を もって"
                ],
                "answer": "に 至るまで",
                "translation": "Festival di daerah ini didukung warga lokal mulai dari persiapan sampai beres-beres."
            }, {
                "question": "社長は 新人研修の 内容から 配布資料 ______ 自ら 目を 通した。",
                "options": [
                    "に 至るまで",
                    "に 至って",
                    "に かけて",
                    "を もって"
                ],
                "answer": "に 至るまで",
                "translation": "Direktur sendiri memeriksa semuanya, mulai isi pelatihan pegawai baru sampai materi yang dibagikan."
            }, {
                "question": "被害は 建物だけでなく、周辺の 交通網 ______ 及んだ。",
                "options": [
                    "に 至るまで",
                    "に 至って",
                    "に かけて",
                    "を もって"
                ],
                "answer": "に 至るまで",
                "translation": "Dampak kerusakan tidak hanya pada gedung, tetapi sampai jaringan transportasi sekitar."
            }, {
                "question": "その 作家は 表紙の 色づかいから 注釈の 文体 ______ 細部に こだわっていた。",
                "options": [
                    "に 至るまで",
                    "に 至って",
                    "に かけて",
                    "を もって"
                ],
                "answer": "に 至るまで",
                "translation": "Penulis itu sangat memperhatikan detail, mulai warna sampul sampai gaya bahasa catatan."
            }, {
                "question": "問題が 表面化して ______、ようやく 対策会議が 開かれた。",
                "options": [
                    "に 至って",
                    "に 至るまで",
                    "に して",
                    "に 伴って"
                ],
                "answer": "に 至って",
                "translation": "Baru setelah masalah muncul ke permukaan, rapat penanganan akhirnya digelar."
            }, {
                "question": "最終面接の 段階に ______、応募書類の 不備が 見つかった。",
                "options": [
                    "に 至って",
                    "に 至るまで",
                    "に して",
                    "に 伴って"
                ],
                "answer": "に 至って",
                "translation": "Baru pada tahap wawancara akhir ditemukan kekurangan pada berkas lamaran."
            }, {
                "question": "閉店が 決まるに ______、常連客から 惜しむ 声が 相次いだ。",
                "options": [
                    "に 至って",
                    "に 至るまで",
                    "に して",
                    "に 伴って"
                ],
                "answer": "に 至って",
                "translation": "Begitu penutupan toko diputuskan, suara penyesalan dari pelanggan setia berdatangan."
            }, {
                "question": "いまに ______、なお 事実を 認めないのは 不自然だ。",
                "options": [
                    "に 至って",
                    "に 至るまで",
                    "に して",
                    "に 伴って"
                ],
                "answer": "に 至って",
                "translation": "Pada tahap seperti sekarang pun tetap tidak mengakui fakta itu terasa tidak wajar."
            }, {
                "question": "ベルが 鳴る ______、学生たちは いっせいに 教室を 飛び出した。",
                "options": [
                    "や 否や",
                    "が 早いか",
                    "とたん",
                    "そばから"
                ],
                "answer": "や 否や",
                "translation": "Begitu bel berbunyi, para siswa serentak berlari keluar kelas."
            }, {
                "question": "彼は 席に 着く ______、ノートPCを 開いて 作業を 始めた。",
                "options": [
                    "や 否や",
                    "が 早いか",
                    "とたん",
                    "そばから"
                ],
                "answer": "や 否や",
                "translation": "Begitu duduk, dia langsung membuka laptop dan mulai bekerja."
            }, {
                "question": "部長は 会議室に 入る ______、本題に 入った。",
                "options": [
                    "や 否や",
                    "が 早いか",
                    "とたん",
                    "そばから"
                ],
                "answer": "や 否や",
                "translation": "Begitu masuk ruang rapat, kepala divisi langsung masuk ke pokok pembicaraan."
            }, {
                "question": "電車の ドアが 開く ______、乗客が なだれ込んだ。",
                "options": [
                    "や 否や",
                    "が 早いか",
                    "とたん",
                    "そばから"
                ],
                "answer": "や 否や",
                "translation": "Begitu pintu kereta terbuka, penumpang langsung berdesakan masuk."
            }, {
                "question": "着席する ______、司会者は 開会を 宣言した。",
                "options": [
                    "が 早いか",
                    "や 否や",
                    "そばから",
                    "とたん"
                ],
                "answer": "が 早いか",
                "translation": "Begitu semua duduk, pembawa acara langsung mengumumkan pembukaan."
            }, {
                "question": "家に 帰る ______、弟は 冷蔵庫を 開けていた。",
                "options": [
                    "が 早いか",
                    "や 否や",
                    "そばから",
                    "とたん"
                ],
                "answer": "が 早いか",
                "translation": "Begitu pulang ke rumah, adik langsung membuka kulkas."
            }, {
                "question": "スマホの 通知を 見る ______、彼は 表情を 変えた。",
                "options": [
                    "が 早いか",
                    "や 否や",
                    "そばから",
                    "とたん"
                ],
                "answer": "が 早いか",
                "translation": "Begitu melihat notifikasi ponsel, ekspresinya langsung berubah."
            }, {
                "question": "開始の 合図が 出る ______、選手たちは 一斉に 走り出した。",
                "options": [
                    "が 早いか",
                    "や 否や",
                    "そばから",
                    "とたん"
                ],
                "answer": "が 早いか",
                "translation": "Begitu sinyal start diberikan, para atlet serentak berlari."
            }, {
                "question": "片づけた ______、子どもが また おもちゃを 広げてしまう。",
                "options": [
                    "そばから",
                    "や 否や",
                    "が 早いか",
                    "たびに"
                ],
                "answer": "そばから",
                "translation": "Baru saja dirapikan, anak itu kembali mengeluarkan mainannya."
            }, {
                "question": "説明した ______、同じ 質問を される。",
                "options": [
                    "そばから",
                    "や 否や",
                    "が 早いか",
                    "たびに"
                ],
                "answer": "そばから",
                "translation": "Baru saja dijelaskan, pertanyaan yang sama muncul lagi."
            }, {
                "question": "雪を どけた ______、また すぐに 積もってしまう。",
                "options": [
                    "そばから",
                    "や 否や",
                    "が 早いか",
                    "たびに"
                ],
                "answer": "そばから",
                "translation": "Baru saja menyingkirkan salju, langsung menumpuk lagi."
            }, {
                "question": "メモした ______、うっかり 忘れてしまう ことが ある。",
                "options": [
                    "そばから",
                    "や 否や",
                    "が 早いか",
                    "たびに"
                ],
                "answer": "そばから",
                "translation": "Baru saja dicatat, kadang malah langsung terlupa."
            }, {
                "question": "三連休の 初日 ______、空港は 朝から 混雑していた。",
                "options": [
                    "と あって",
                    "と あれば",
                    "と きたら",
                    "からして"
                ],
                "answer": "と あって",
                "translation": "Karena hari pertama libur tiga hari, bandara sudah padat sejak pagi."
            }, {
                "question": "人気作家の 新刊発売日 ______、書店には 長い 列が できていた。",
                "options": [
                    "と あって",
                    "と あれば",
                    "と きたら",
                    "からして"
                ],
                "answer": "と あって",
                "translation": "Karena hari rilis buku baru penulis populer, antrean panjang terbentuk di toko buku."
            }, {
                "question": "全国大会の 決勝 ______、会場の 熱気は 相当な ものだった。",
                "options": [
                    "と あって",
                    "と あれば",
                    "と きたら",
                    "からして"
                ],
                "answer": "と あって",
                "translation": "Karena ini final kejuaraan nasional, semangat di lokasi luar biasa."
            }, {
                "question": "駅前再開発の 説明会 ______、地元住民の 関心も 高かった。",
                "options": [
                    "と あって",
                    "と あれば",
                    "と きたら",
                    "からして"
                ],
                "answer": "と あって",
                "translation": "Karena ini sesi penjelasan pembangunan ulang depan stasiun, minat warga lokal pun tinggi."
            }, {
                "question": "子ども ______、何でも 人に やってもらおうと するのは よくない。",
                "options": [
                    "では あるまいし",
                    "わけでは あるまいし",
                    "ことは あるまいし",
                    "とは いうものの"
                ],
                "answer": "では あるまいし",
                "translation": "Kamu bukan anak kecil, jadi tidak baik selalu minta orang lain mengerjakan semuanya."
            }, {
                "question": "初対面 ______、そこまで 遠慮する 必要は ありません。",
                "options": [
                    "では あるまいし",
                    "わけでは あるまいし",
                    "ことは あるまいし",
                    "とは いうものの"
                ],
                "answer": "では あるまいし",
                "translation": "Ini bukan pertama kalinya bertemu, jadi tidak perlu sungkan sebegitunya."
            }, {
                "question": "学生 ______、連絡も なしに 遅刻するのは 困る。",
                "options": [
                    "では あるまいし",
                    "わけでは あるまいし",
                    "ことは あるまいし",
                    "とは いうものの"
                ],
                "answer": "では あるまいし",
                "translation": "Kamu bukan siswa lagi, jadi telat tanpa kabar itu bermasalah."
            }, {
                "question": "観光客 ______、地図も 見ずに 歩き回るのは 無謀だ。",
                "options": [
                    "では あるまいし",
                    "わけでは あるまいし",
                    "ことは あるまいし",
                    "とは いうものの"
                ],
                "answer": "では あるまいし",
                "translation": "Kamu bukan wisatawan yang tersesat, jadi berjalan tanpa lihat peta itu gegabah."
            }, {
                "question": "名誉を 守ら ______、彼は 最後まで 真実を 語らなかった。",
                "options": [
                    "んが ため",
                    "ために",
                    "ように",
                    "べく"
                ],
                "answer": "んが ため",
                "translation": "Demi menjaga kehormatan, dia tidak mengungkapkan kebenaran sampai akhir."
            }, {
                "question": "家族を 養わ ______、彼は 二つの 仕事を 掛け持ちしている。",
                "options": [
                    "んが ため",
                    "ために",
                    "ように",
                    "べく"
                ],
                "answer": "んが ため",
                "translation": "Demi menafkahi keluarga, dia merangkap dua pekerjaan."
            }, {
                "question": "成功を つかま ______、彼女は 海外へ 渡った。",
                "options": [
                    "んが ため",
                    "ために",
                    "ように",
                    "べく"
                ],
                "answer": "んが ため",
                "translation": "Demi meraih keberhasilan, dia pergi ke luar negeri."
            }, {
                "question": "信念を 貫か ______、彼は 孤立を も いとわなかった。",
                "options": [
                    "んが ため",
                    "ために",
                    "ように",
                    "べく"
                ],
                "answer": "んが ため",
                "translation": "Demi mempertahankan keyakinannya, dia bahkan tak gentar pada keterasingan."
            }, {
                "question": "今年の 春は うれしいこと ______ の 新生活だった。",
                "options": [
                    "ずくめ",
                    "まみれ",
                    "だらけ",
                    "ばかり"
                ],
                "answer": "ずくめ",
                "translation": "Musim semi tahun ini adalah awal hidup baru yang penuh hal menyenangkan."
            }, {
                "question": "式典の日、会場は 黒 ______ の 服装で 統一されていた。",
                "options": [
                    "ずくめ",
                    "まみれ",
                    "だらけ",
                    "ばかり"
                ],
                "answer": "ずくめ",
                "translation": "Pada hari seremoni, aula dipenuhi pakaian serba hitam."
            }, {
                "question": "彼の 説明は 反省と 感謝 ______ で、聞く者の 心を 打った。",
                "options": [
                    "ずくめ",
                    "まみれ",
                    "だらけ",
                    "ばかり"
                ],
                "answer": "ずくめ",
                "translation": "Penjelasannya penuh penyesalan dan rasa syukur, menyentuh hati pendengar."
            }, {
                "question": "その 一日は 朝から 晩まで 緊張 ______ だった。",
                "options": [
                    "ずくめ",
                    "まみれ",
                    "だらけ",
                    "ばかり"
                ],
                "answer": "ずくめ",
                "translation": "Hari itu sejak pagi sampai malam penuh ketegangan."
            }, {
                "question": "うちの 上司 ______、締め切りの 前日に 仕様を 変えるんだから。",
                "options": [
                    "と きたら",
                    "といえば",
                    "にしては",
                    "からして"
                ],
                "answer": "と きたら",
                "translation": "Atasan saya itu, justru mengubah spesifikasi sehari sebelum tenggat."
            }, {
                "question": "最近の 天気 ______、予報が まったく 当てに ならない。",
                "options": [
                    "と きたら",
                    "といえば",
                    "にしては",
                    "からして"
                ],
                "answer": "と きたら",
                "translation": "Cuaca belakangan ini benar-benar tidak bisa diandalkan ramalannya."
            }, {
                "question": "あの 店の 接客 ______、混んでいても いつも 丁寧だ。",
                "options": [
                    "と きたら",
                    "といえば",
                    "にしては",
                    "からして"
                ],
                "answer": "と きたら",
                "translation": "Kalau soal pelayanan toko itu, meski ramai selalu sopan."
            }, {
                "question": "彼の 忘れ物 ______、いくら 注意しても 直らない。",
                "options": [
                    "と きたら",
                    "といえば",
                    "にしては",
                    "からして"
                ],
                "answer": "と きたら",
                "translation": "Kebiasaan lupanya itu, sudah diingatkan berkali-kali tetap tak berubah."
            }, {
                "question": "円安 ______、原料不足も 価格上昇に 拍車を かけている。",
                "options": [
                    "と 相まって",
                    "に 伴って",
                    "につれて",
                    "ばかりか"
                ],
                "answer": "と 相まって",
                "translation": "Bersamaan dengan lemahnya yen, kekurangan bahan baku turut mempercepat kenaikan harga."
            }, {
                "question": "豊富な 経験 ______、彼の 冷静な 判断が チームを 救った。",
                "options": [
                    "と 相まって",
                    "に 伴って",
                    "につれて",
                    "ばかりか"
                ],
                "answer": "と 相まって",
                "translation": "Dipadukan dengan pengalaman melimpah, penilaiannya yang tenang menyelamatkan tim."
            }, {
                "question": "駅近という 利便性 ______、家賃の 安さも 人気の 理由だ。",
                "options": [
                    "と 相まって",
                    "に 伴って",
                    "につれて",
                    "ばかりか"
                ],
                "answer": "と 相まって",
                "translation": "Dipadukan dengan lokasi dekat stasiun, harga sewa murah juga jadi alasan populer."
            }, {
                "question": "SNSでの 拡散 ______、テレビ報道まで 入って 一気に 知名度が 上がった。",
                "options": [
                    "と 相まって",
                    "に 伴って",
                    "につれて",
                    "ばかりか"
                ],
                "answer": "と 相まって",
                "translation": "Bersamaan dengan penyebaran di SNS, liputan TV pun masuk dan popularitas naik pesat."
            }, {
                "question": "基本的な あいさつも できない ______、接客の 仕事は 任せられない。",
                "options": [
                    "ようでは",
                    "ようなら",
                    "ようで",
                    "ように"
                ],
                "answer": "ようでは",
                "translation": "Kalau sampai salam dasar pun tidak bisa, pekerjaan layanan pelanggan tak bisa diserahkan."
            }, {
                "question": "締め切りを 毎回 守れない ______、信頼を 失っても 仕方がない。",
                "options": [
                    "ようでは",
                    "ようなら",
                    "ようで",
                    "ように"
                ],
                "answer": "ようでは",
                "translation": "Kalau sampai selalu gagal memenuhi tenggat, wajar jika kehilangan kepercayaan."
            }, {
                "question": "説明を 読んでも 操作できない ______、導入は 難しい。",
                "options": [
                    "ようでは",
                    "ようなら",
                    "ようで",
                    "ように"
                ],
                "answer": "ようでは",
                "translation": "Kalau sampai setelah membaca penjelasan pun tak bisa mengoperasikan, penerapan akan sulit."
            }, {
                "question": "自分の ミスを 認めない ______、成長は 望めない。",
                "options": [
                    "ようでは",
                    "ようなら",
                    "ようで",
                    "ように"
                ],
                "answer": "ようでは",
                "translation": "Kalau sampai tidak mau mengakui kesalahan sendiri, perkembangan tak bisa diharapkan."
            }, {
                "question": "現場の 協力 ______、この 計画は 成立しなかった。",
                "options": [
                    "なくしては",
                    "なしには",
                    "ないでは",
                    "ずには"
                ],
                "answer": "なくしては",
                "translation": "Tanpa kerja sama lapangan, rencana ini tak akan terwujud."
            }, {
                "question": "日々の 努力 ______、今の 成果は あり得ない。",
                "options": [
                    "なくしては",
                    "なしには",
                    "ないでは",
                    "ずには"
                ],
                "answer": "なくしては",
                "translation": "Tanpa usaha harian, hasil seperti sekarang mustahil ada."
            }, {
                "question": "地域住民の 理解 ______、再開発は 前に 進まない。",
                "options": [
                    "なくしては",
                    "なしには",
                    "ないでは",
                    "ずには"
                ],
                "answer": "なくしては",
                "translation": "Tanpa pemahaman warga setempat, pembangunan ulang tak akan maju."
            }, {
                "question": "信頼関係 ______、長期的な 取引は 成り立たない。",
                "options": [
                    "なくしては",
                    "なしには",
                    "ないでは",
                    "ずには"
                ],
                "answer": "なくしては",
                "translation": "Tanpa hubungan saling percaya, transaksi jangka panjang tak akan berjalan."
            }, {
                "question": "老舗旅館 ______ の 細やかな もてなしに 感動した。",
                "options": [
                    "ならでは",
                    "だけの",
                    "らしい",
                    "向きの"
                ],
                "answer": "ならでは",
                "translation": "Saya terkesan oleh pelayanan rinci yang khas ryokan lama."
            }, {
                "question": "職人 ______ の 手仕事が 光る 一品だ。",
                "options": [
                    "ならでは",
                    "だけの",
                    "らしい",
                    "向きの"
                ],
                "answer": "ならでは",
                "translation": "Ini adalah karya yang menonjolkan keterampilan tangan khas perajin."
            }, {
                "question": "地方都市 ______ の 落ち着いた 雰囲気が 残っている。",
                "options": [
                    "ならでは",
                    "だけの",
                    "らしい",
                    "向きの"
                ],
                "answer": "ならでは",
                "translation": "Masih tersisa suasana tenang yang khas kota daerah."
            }, {
                "question": "長年 研究してきた 彼 ______ の 視点だと 感じた。",
                "options": [
                    "ならでは",
                    "だけの",
                    "らしい",
                    "向きの"
                ],
                "answer": "ならでは",
                "translation": "Saya merasa itu sudut pandang yang khas dia, hasil riset bertahun-tahun."
            }, {
                "question": "被災地の 写真は 見る ______ 痛ましさだった。",
                "options": [
                    "に 堪えない",
                    "ざるを 得ない",
                    "に すぎない",
                    "ことは ない"
                ],
                "answer": "に 堪えない",
                "translation": "Foto daerah bencana begitu memilukan hingga sulit ditonton."
            }, {
                "question": "彼の 誠実な あいさつには 感動を 禁じ ______。",
                "options": [
                    "に 堪えない",
                    "ざるを 得ない",
                    "に すぎない",
                    "ことは ない"
                ],
                "answer": "に 堪えない",
                "translation": "Sapaan tulusnya begitu menyentuh hingga sulit menahan haru."
            }, {
                "question": "その 報告書は 読む ______ 内容だった。",
                "options": [
                    "に 堪えない",
                    "ざるを 得ない",
                    "に すぎない",
                    "ことは ない"
                ],
                "answer": "に 堪えない",
                "translation": "Laporan itu berisi hal-hal yang sungguh tak tertahankan untuk dibaca."
            }, {
                "question": "長年の 努力が 実った 瞬間は、喜びに 堪え ______ ものだった。",
                "options": [
                    "に 堪えない",
                    "ざるを 得ない",
                    "に すぎない",
                    "ことは ない"
                ],
                "answer": "に 堪えない",
                "translation": "Momen ketika usaha bertahun-tahun membuahkan hasil adalah sesuatu yang sulit menahan sukacita."
            }, {
                "question": "突然の 豪雨で、イベントの 中止 ______ た。",
                "options": [
                    "を 余儀なくされ",
                    "を ものともせず",
                    "を 禁じ得ず",
                    "に 足る"
                ],
                "answer": "を 余儀なくされ",
                "translation": "Karena hujan deras mendadak, acara terpaksa dibatalkan."
            }, {
                "question": "原材料の 不足により、生産計画の 見直し ______ た。",
                "options": [
                    "を 余儀なくされ",
                    "を ものともせず",
                    "を 禁じ得ず",
                    "に 足る"
                ],
                "answer": "を 余儀なくされ",
                "translation": "Akibat kekurangan bahan baku, peninjauan ulang rencana produksi terpaksa dilakukan."
            }, {
                "question": "感染拡大を 受け、会議は オンライン開催 ______ た。",
                "options": [
                    "を 余儀なくされ",
                    "を ものともせず",
                    "を 禁じ得ず",
                    "に 足る"
                ],
                "answer": "を 余儀なくされ",
                "translation": "Karena penyebaran infeksi, rapat terpaksa diadakan secara online."
            }, {
                "question": "設備の 老朽化で、長期休業 ______ た。",
                "options": [
                    "を 余儀なくされ",
                    "を ものともせず",
                    "を 禁じ得ず",
                    "に 足る"
                ],
                "answer": "を 余儀なくされ",
                "translation": "Karena fasilitas menua, penutupan jangka panjang terpaksa dilakukan."
            }, {
                "question": "彼は 激しい 反対 ______、計画を 最後まで 押し通した。",
                "options": [
                    "を ものともせず",
                    "を 余儀なくされ",
                    "に 堪えず",
                    "に 足る"
                ],
                "answer": "を ものともせず",
                "translation": "Dia tetap memaksakan rencana sampai akhir tanpa gentar pada tentangan keras."
            }, {
                "question": "選手たちは 悪天候 ______、自己ベストを 更新した。",
                "options": [
                    "を ものともせず",
                    "を 余儀なくされ",
                    "に 堪えず",
                    "に 足る"
                ],
                "answer": "を ものともせず",
                "translation": "Para atlet memecahkan rekor pribadi tanpa menghiraukan cuaca buruk."
            }, {
                "question": "彼女は 周囲の 批判 ______、自分の 道を 選んだ。",
                "options": [
                    "を ものともせず",
                    "を 余儀なくされ",
                    "に 堪えず",
                    "に 足る"
                ],
                "answer": "を ものともせず",
                "translation": "Dia memilih jalannya sendiri tanpa gentar pada kritik sekitar."
            }, {
                "question": "消防隊は 燃えさかる 炎 ______、建物の 中へ 入っていった。",
                "options": [
                    "を ものともせず",
                    "を 余儀なくされ",
                    "に 堪えず",
                    "に 足る"
                ],
                "answer": "を ものともせず",
                "translation": "Tim pemadam masuk ke dalam bangunan tanpa gentar pada kobaran api."
            }, {
                "question": "子ども ______、してよいことと 悪いことの 区別は つく。",
                "options": [
                    "と いえども",
                    "とはいえ",
                    "にしても",
                    "にしては"
                ],
                "answer": "と いえども",
                "translation": "Sekalipun anak-anak, mereka tetap bisa membedakan yang baik dan buruk."
            }, {
                "question": "専門家 ______、すべてを 予測できる わけでは ない。",
                "options": [
                    "と いえども",
                    "とはいえ",
                    "にしても",
                    "にしては"
                ],
                "answer": "と いえども",
                "translation": "Sekalipun ahli, bukan berarti bisa memprediksi segalanya."
            }, {
                "question": "どんな 名店 ______、ミスが まったく ないとは 限らない。",
                "options": [
                    "と いえども",
                    "とはいえ",
                    "にしても",
                    "にしては"
                ],
                "answer": "と いえども",
                "translation": "Sekalipun toko terkenal, tidak berarti sama sekali tak punya kesalahan."
            }, {
                "question": "一度の 失敗 ______、努力全体を 否定する 理由には ならない。",
                "options": [
                    "と いえども",
                    "とはいえ",
                    "にしても",
                    "にしては"
                ],
                "answer": "と いえども",
                "translation": "Sekalipun hanya satu kegagalan, itu bukan alasan menolak semua usaha."
            }, {
                "question": "年度末 ______、どの 部署も 一気に 忙しくなる。",
                "options": [
                    "ともなると",
                    "となると",
                    "に なると",
                    "に して"
                ],
                "answer": "ともなると",
                "translation": "Begitu memasuki akhir tahun fiskal, semua divisi mendadak sibuk."
            }, {
                "question": "東京の 中心部で 新築 ______、家賃は 相当 高い。",
                "options": [
                    "ともなると",
                    "となると",
                    "に なると",
                    "に して"
                ],
                "answer": "ともなると",
                "translation": "Kalau sudah bicara bangunan baru di pusat Tokyo, sewa tentu sangat mahal."
            }, {
                "question": "責任者 ______、軽々しく 発言は できない。",
                "options": [
                    "ともなると",
                    "となると",
                    "に なると",
                    "に して"
                ],
                "answer": "ともなると",
                "translation": "Kalau sudah jadi penanggung jawab, tidak bisa bicara sembarangan."
            }, {
                "question": "プロの 試合 ______、一つの ミスが 致命的に なる。",
                "options": [
                    "ともなると",
                    "となると",
                    "に なると",
                    "に して"
                ],
                "answer": "ともなると",
                "translation": "Kalau sudah pertandingan profesional, satu kesalahan bisa fatal."
            }, {
                "question": "締め切りまで 一日 ______ 無駄には できない。",
                "options": [
                    "たりとも",
                    "さえ",
                    "ほど",
                    "まで"
                ],
                "answer": "たりとも",
                "translation": "Sampai tenggat, bahkan satu hari pun tak bisa disia-siakan."
            }, {
                "question": "この 企画では 一円 ______ 無駄に したくない。",
                "options": [
                    "たりとも",
                    "さえ",
                    "ほど",
                    "まで"
                ],
                "answer": "たりとも",
                "translation": "Dalam proyek ini, bahkan satu yen pun tak ingin saya sia-siakan."
            }, {
                "question": "安全確認を 一瞬 ______ おろそかに しては ならない。",
                "options": [
                    "たりとも",
                    "さえ",
                    "ほど",
                    "まで"
                ],
                "answer": "たりとも",
                "translation": "Pemeriksaan keselamatan tak boleh diabaikan bahkan sedetik pun."
            }, {
                "question": "彼は 一言 ______ 不満を 口に しなかった。",
                "options": [
                    "たりとも",
                    "さえ",
                    "ほど",
                    "まで"
                ],
                "answer": "たりとも",
                "translation": "Dia tak mengeluh bahkan satu kata pun."
            }, {
                "question": "彼の 提案は 再検討に ______ 内容だ。",
                "options": [
                    "に 足る",
                    "に 堪える",
                    "に 即した",
                    "に 反した"
                ],
                "answer": "に 足る",
                "translation": "Usulan itu layak untuk dipertimbangkan ulang."
            }, {
                "question": "この 資料は 参考に ______ ものだと 思う。",
                "options": [
                    "に 足る",
                    "に 堪える",
                    "に 即した",
                    "に 反した"
                ],
                "answer": "に 足る",
                "translation": "Saya pikir materi ini layak dijadikan referensi."
            }, {
                "question": "彼の 行動は 十分に 評価に ______。",
                "options": [
                    "に 足る",
                    "に 堪える",
                    "に 即した",
                    "に 反した"
                ],
                "answer": "に 足る",
                "translation": "Tindakannya cukup layak mendapat penilaian."
            }, {
                "question": "その 研究は 学術的にも 注目に ______。",
                "options": [
                    "に 足る",
                    "に 堪える",
                    "に 即した",
                    "に 反した"
                ],
                "answer": "に 足る",
                "translation": "Penelitian itu juga layak mendapat perhatian akademis."
            }, {
                "question": "長年 続いた 店が 閉まると 聞き、寂しさ ______。",
                "options": [
                    "を 禁じ得ない",
                    "に 堪えない",
                    "を 余儀なくされる",
                    "を ものともせず"
                ],
                "answer": "を 禁じ得ない",
                "translation": "Mendengar toko yang berjalan lama itu tutup, saya tak bisa menahan rasa sedih."
            }, {
                "question": "被災地の 現状を 前に、言葉を 失うと 同時に 驚き ______。",
                "options": [
                    "を 禁じ得ない",
                    "に 堪えない",
                    "を 余儀なくされる",
                    "を ものともせず"
                ],
                "answer": "を 禁じ得ない",
                "translation": "Di hadapan keadaan daerah bencana, saya sekaligus tak bisa menahan keterkejutan."
            }, {
                "question": "彼の 成長ぶりを 見て、感動 ______。",
                "options": [
                    "を 禁じ得ない",
                    "に 堪えない",
                    "を 余儀なくされる",
                    "を ものともせず"
                ],
                "answer": "を 禁じ得ない",
                "translation": "Melihat perkembangannya, saya tak bisa menahan haru."
            }, {
                "question": "その 判決の 重さに、怒り ______ 市民も 多かった。",
                "options": [
                    "を 禁じ得ない",
                    "に 堪えない",
                    "を 余儀なくされる",
                    "を ものともせず"
                ],
                "answer": "を 禁じ得ない",
                "translation": "Banyak warga yang tak bisa menahan amarah pada beratnya putusan itu."
            }, {
                "question": "関係者以外、立ち入る ______。",
                "options": [
                    "べからず",
                    "べきではない",
                    "てはならない",
                    "にすぎない"
                ],
                "answer": "べからず",
                "translation": "Selain pihak terkait, dilarang masuk."
            }, {
                "question": "試験中、私語する ______。",
                "options": [
                    "べからず",
                    "べきではない",
                    "てはならない",
                    "にすぎない"
                ],
                "answer": "べからず",
                "translation": "Saat ujian, dilarang berbicara."
            }, {
                "question": "資料の 無断転載、厳に 行う ______。",
                "options": [
                    "べからず",
                    "べきではない",
                    "てはならない",
                    "にすぎない"
                ],
                "answer": "べからず",
                "translation": "Dilarang keras mereproduksi materi tanpa izin."
            }, {
                "question": "館内にて 飲食する ______。",
                "options": [
                    "べからず",
                    "べきではない",
                    "てはならない",
                    "にすぎない"
                ],
                "answer": "べからず",
                "translation": "Di dalam gedung, dilarang makan dan minum."
            }, {
                "question": "結局、先輩には 最後まで 謝れ ______ だった。",
                "options": [
                    "ずじまい",
                    "ばかりだ",
                    "きりだ",
                    "まみれ"
                ],
                "answer": "ずじまい",
                "translation": "Akhirnya saya berakhir tanpa sempat meminta maaf pada senior."
            }, {
                "question": "忙しくて、気になっていた 展覧会にも 行け ______ だった。",
                "options": [
                    "ずじまい",
                    "ばかりだ",
                    "きりだ",
                    "まみれ"
                ],
                "answer": "ずじまい",
                "translation": "Karena sibuk, saya berakhir tanpa sempat pergi ke pameran yang membuat penasaran."
            }, {
                "question": "その 件は 確認しようと 思いながら、連絡し ______ だった。",
                "options": [
                    "ずじまい",
                    "ばかりだ",
                    "きりだ",
                    "まみれ"
                ],
                "answer": "ずじまい",
                "translation": "Meski berniat mengecek, saya berakhir tanpa menghubungi soal itu."
            }, {
                "question": "せっかく 招待されたのに、予定が 合わず 参加でき ______ だった。",
                "options": [
                    "ずじまい",
                    "ばかりだ",
                    "きりだ",
                    "まみれ"
                ],
                "answer": "ずじまい",
                "translation": "Padahal sudah diundang, saya berakhir tak bisa ikut karena jadwal tak cocok."
            }, {
                "question": "先生の 早い 回復を 願っ ______。",
                "options": [
                    "て やまない",
                    "て たまらない",
                    "ずには いられない",
                    "に ちがいない"
                ],
                "answer": "て やまない",
                "translation": "Saya terus mendoakan kesembuhan cepat guru itu."
            }, {
                "question": "地域の 復興を 祈っ ______ 人は 多い。",
                "options": [
                    "て やまない",
                    "て たまらない",
                    "ずには いられない",
                    "に ちがいない"
                ],
                "answer": "て やまない",
                "translation": "Banyak orang terus mendoakan pemulihan daerah itu."
            }, {
                "question": "彼女の 今後の 活躍を 期待し ______。",
                "options": [
                    "て やまない",
                    "て たまらない",
                    "ずには いられない",
                    "に ちがいない"
                ],
                "answer": "て やまない",
                "translation": "Saya terus menaruh harapan pada kiprah dia ke depan."
            }, {
                "question": "その 取り組みが 広く 社会に 伝わることを 願っ ______。",
                "options": [
                    "て やまない",
                    "て たまらない",
                    "ずには いられない",
                    "に ちがいない"
                ],
                "answer": "て やまない",
                "translation": "Saya terus berharap upaya itu tersebar luas ke masyarakat."
            }
        ],
        "bunpou-composition": [{
                "question": "______ ______ __★__ ______。",
                "options": [
                    "この 地域の 祭りは",
                    "準備から 後片づけに",
                    "住民が 支えている",
                    "至るまで"
                ],
                "answer": "至るまで",
                "correctOrder": [
                    1,
                    2,
                    4,
                    3
                ],
                "translation": "Festival di daerah ini didukung warga, mulai dari persiapan hingga beres-beres."
            }, {
                "question": "______ ______ __★__ ______。",
                "options": [
                    "周辺の 交通網に",
                    "被害は 建物だけでなく",
                    "及んだ",
                    "至るまで"
                ],
                "answer": "至るまで",
                "correctOrder": [
                    2,
                    1,
                    4,
                    3
                ],
                "translation": "Dampaknya menjalar hingga jaringan transportasi sekitar."
            }, {
                "question": "______ ______ __★__ ______。",
                "options": [
                    "配布資料に",
                    "至るまで",
                    "自ら 確認した",
                    "社長は 企画の 骨子から"
                ],
                "answer": "至るまで",
                "correctOrder": [
                    4,
                    1,
                    2,
                    3
                ],
                "translation": "Direktur sendiri memeriksa semuanya, mulai dari kerangka hingga materi yang dibagikan."
            }, {
                "question": "______ ______ __★__ ______。",
                "options": [
                    "注釈の 文体に",
                    "彼は 表紙の 色づかいから",
                    "細部に こだわった",
                    "至るまで"
                ],
                "answer": "至るまで",
                "correctOrder": [
                    2,
                    1,
                    4,
                    3
                ],
                "translation": "Dia memperhatikan detail, mulai warna sampul hingga gaya bahasa catatan."
            }, {
                "question": "______ ______ __★__ ______。",
                "options": [
                    "調査が 始まった",
                    "ようやく 本格的な",
                    "問題が 表面化するに",
                    "至って"
                ],
                "answer": "ようやく 本格的な",
                "correctOrder": [
                    3,
                    4,
                    2,
                    1
                ],
                "translation": "Baru setelah masalah tampak di permukaan, investigasi serius dimulai."
            }, {
                "question": "______ ______ __★__ ______。",
                "options": [
                    "至って",
                    "応募書類の 不備が",
                    "見つかった",
                    "最終面接の 段階に"
                ],
                "answer": "応募書類の 不備が",
                "correctOrder": [
                    4,
                    1,
                    2,
                    3
                ],
                "translation": "Baru di tahap wawancara akhir ditemukan kekurangan berkas."
            }, {
                "question": "______ ______ __★__ ______。",
                "options": [
                    "閉店が 決まるに",
                    "常連客から 惜しむ 声が",
                    "至って",
                    "相次いだ"
                ],
                "answer": "常連客から 惜しむ 声が",
                "correctOrder": [
                    1,
                    3,
                    2,
                    4
                ],
                "translation": "Begitu penutupan toko diputuskan, suara penyesalan dari pelanggan berdatangan."
            }, {
                "question": "______ ______ __★__ ______。",
                "options": [
                    "至って",
                    "不自然だ",
                    "ここに",
                    "なお 事実を 認めないのは"
                ],
                "answer": "なお 事実を 認めないのは",
                "correctOrder": [
                    3,
                    1,
                    4,
                    2
                ],
                "translation": "Pada tahap seperti sekarang pun tetap tidak mengakui fakta terasa tidak wajar."
            }, {
                "question": "______ ______ __★__ ______。",
                "options": [
                    "ベルが 鳴るや",
                    "否や",
                    "教室を 飛び出した",
                    "学生たちは いっせいに"
                ],
                "answer": "学生たちは いっせいに",
                "correctOrder": [
                    1,
                    2,
                    4,
                    3
                ],
                "translation": "Begitu bel berbunyi, para siswa serentak berlari keluar kelas."
            }, {
                "question": "______ ______ __★__ ______。",
                "options": [
                    "否や",
                    "すぐに",
                    "部長は 会議室に 入るや",
                    "本題に 入った"
                ],
                "answer": "すぐに",
                "correctOrder": [
                    3,
                    1,
                    2,
                    4
                ],
                "translation": "Begitu masuk ruang rapat, kepala divisi langsung masuk ke inti pembicaraan."
            }, {
                "question": "______ ______ __★__ ______。",
                "options": [
                    "否や",
                    "電車の ドアが 開くや",
                    "なだれ込んだ",
                    "乗客が"
                ],
                "answer": "乗客が",
                "correctOrder": [
                    2,
                    1,
                    4,
                    3
                ],
                "translation": "Begitu pintu kereta terbuka, penumpang langsung berdesakan masuk."
            }, {
                "question": "______ ______ __★__ ______。",
                "options": [
                    "否や",
                    "ノートPCを 開いて",
                    "彼は 席に 着くや",
                    "作業を 始めた"
                ],
                "answer": "ノートPCを 開いて",
                "correctOrder": [
                    3,
                    1,
                    2,
                    4
                ],
                "translation": "Begitu duduk, dia langsung membuka laptop dan mulai bekerja."
            }, {
                "question": "______ ______ __★__ ______。",
                "options": [
                    "選手たちは",
                    "開始の 合図が 出るが",
                    "走り出した",
                    "早いか"
                ],
                "answer": "選手たちは",
                "correctOrder": [
                    2,
                    4,
                    1,
                    3
                ],
                "translation": "Begitu aba-aba dimulai, para atlet langsung berlari."
            }, {
                "question": "______ ______ __★__ ______。",
                "options": [
                    "早いか",
                    "弟は",
                    "冷蔵庫を 開けた",
                    "家に 帰るが"
                ],
                "answer": "弟は",
                "correctOrder": [
                    4,
                    1,
                    2,
                    3
                ],
                "translation": "Begitu pulang, adik langsung membuka kulkas."
            }, {
                "question": "______ ______ __★__ ______。",
                "options": [
                    "スマホの 通知を 見るが",
                    "早いか",
                    "表情を 変えた",
                    "彼は"
                ],
                "answer": "彼は",
                "correctOrder": [
                    1,
                    2,
                    4,
                    3
                ],
                "translation": "Begitu melihat notifikasi, ekspresinya langsung berubah."
            }, {
                "question": "______ ______ __★__ ______。",
                "options": [
                    "司会者は",
                    "早いか",
                    "着席するが",
                    "開会を 宣言した"
                ],
                "answer": "司会者は",
                "correctOrder": [
                    3,
                    2,
                    1,
                    4
                ],
                "translation": "Begitu duduk, pembawa acara langsung mengumumkan pembukaan."
            }, {
                "question": "______ ______ __★__ ______。",
                "options": [
                    "片づけた",
                    "そばから",
                    "おもちゃを 広げる",
                    "子どもが また"
                ],
                "answer": "子どもが また",
                "correctOrder": [
                    1,
                    2,
                    4,
                    3
                ],
                "translation": "Baru saja dirapikan, anak itu kembali mengeluarkan mainannya."
            }, {
                "question": "______ ______ __★__ ______。",
                "options": [
                    "説明した",
                    "そばから",
                    "される",
                    "同じ 質問を"
                ],
                "answer": "同じ 質問を",
                "correctOrder": [
                    1,
                    2,
                    4,
                    3
                ],
                "translation": "Baru saja dijelaskan, pertanyaan yang sama muncul lagi."
            }, {
                "question": "______ ______ __★__ ______。",
                "options": [
                    "そばから",
                    "また すぐに",
                    "雪を どけた",
                    "積もってしまう"
                ],
                "answer": "また すぐに",
                "correctOrder": [
                    3,
                    1,
                    2,
                    4
                ],
                "translation": "Baru saja menyingkirkan salju, langsung menumpuk lagi."
            }, {
                "question": "______ ______ __★__ ______。",
                "options": [
                    "メモした",
                    "そばから",
                    "うっかり",
                    "忘れてしまう"
                ],
                "answer": "うっかり",
                "correctOrder": [
                    1,
                    2,
                    3,
                    4
                ],
                "translation": "Baru saja dicatat, malah langsung terlupa."
            }, {
                "question": "______ ______ __★__ ______。",
                "options": [
                    "あって",
                    "大混雑だった",
                    "三連休の 初日と",
                    "空港は 朝から"
                ],
                "answer": "空港は 朝から",
                "correctOrder": [
                    3,
                    1,
                    4,
                    2
                ],
                "translation": "Karena hari pertama libur tiga hari, bandara padat sejak pagi."
            }, {
                "question": "______ ______ __★__ ______。",
                "options": [
                    "長い 列が できていた",
                    "人気作家の 新刊発売日と",
                    "書店には",
                    "あって"
                ],
                "answer": "書店には",
                "correctOrder": [
                    2,
                    4,
                    3,
                    1
                ],
                "translation": "Karena hari rilis buku baru penulis populer, antrean panjang muncul."
            }, {
                "question": "______ ______ __★__ ______。",
                "options": [
                    "あって",
                    "全国大会の 決勝と",
                    "相当な ものだった",
                    "会場の 熱気は"
                ],
                "answer": "会場の 熱気は",
                "correctOrder": [
                    2,
                    1,
                    4,
                    3
                ],
                "translation": "Karena ini final kejuaraan nasional, semangat di lokasi luar biasa."
            }, {
                "question": "______ ______ __★__ ______。",
                "options": [
                    "駅前再開発の 説明会と",
                    "住民の 関心も",
                    "高かった",
                    "あって"
                ],
                "answer": "住民の 関心も",
                "correctOrder": [
                    1,
                    4,
                    2,
                    3
                ],
                "translation": "Karena ini penjelasan pembangunan ulang depan stasiun, minat warga juga tinggi."
            }, {
                "question": "______ ______ __★__ ______。",
                "options": [
                    "やってもらうな",
                    "あるまいし",
                    "子どもでは",
                    "何でも 人に"
                ],
                "answer": "何でも 人に",
                "correctOrder": [
                    3,
                    2,
                    4,
                    1
                ],
                "translation": "Kamu bukan anak kecil, jadi jangan selalu minta orang lain mengerjakan semuanya."
            }, {
                "question": "______ ______ __★__ ______。",
                "options": [
                    "そこまで",
                    "あるまいし",
                    "初対面では",
                    "遠慮する 必要は ない"
                ],
                "answer": "そこまで",
                "correctOrder": [
                    3,
                    2,
                    1,
                    4
                ],
                "translation": "Ini bukan pertama kali bertemu, jadi tidak perlu sungkan sebegitunya."
            }, {
                "question": "______ ______ __★__ ______。",
                "options": [
                    "学生では",
                    "遅刻するな",
                    "あるまいし",
                    "連絡も なしに"
                ],
                "answer": "連絡も なしに",
                "correctOrder": [
                    1,
                    3,
                    4,
                    2
                ],
                "translation": "Kamu bukan siswa lagi, jadi jangan telat tanpa kabar."
            }, {
                "question": "______ ______ __★__ ______。",
                "options": [
                    "あるまいし",
                    "観光客では",
                    "歩き回るな",
                    "地図も 見ずに"
                ],
                "answer": "地図も 見ずに",
                "correctOrder": [
                    2,
                    1,
                    4,
                    3
                ],
                "translation": "Kamu bukan turis tersesat, jadi jangan jalan tanpa lihat peta."
            }, {
                "question": "______ ______ __★__ ______。",
                "options": [
                    "家族を 養わんが",
                    "彼は 二つの 仕事を",
                    "掛け持ちしている",
                    "ために"
                ],
                "answer": "彼は 二つの 仕事を",
                "correctOrder": [
                    1,
                    4,
                    2,
                    3
                ],
                "translation": "Demi menafkahi keluarga, dia merangkap dua pekerjaan."
            }, {
                "question": "______ ______ __★__ ______。",
                "options": [
                    "名誉を 守らんが",
                    "彼は 最後まで",
                    "ために",
                    "真実を 語らなかった"
                ],
                "answer": "彼は 最後まで",
                "correctOrder": [
                    1,
                    3,
                    2,
                    4
                ],
                "translation": "Demi menjaga kehormatan, dia tak mengungkapkan kebenaran sampai akhir."
            }, {
                "question": "______ ______ __★__ ______。",
                "options": [
                    "彼女は",
                    "海外へ 渡った",
                    "ために",
                    "成功を つかまんが"
                ],
                "answer": "彼女は",
                "correctOrder": [
                    4,
                    3,
                    1,
                    2
                ],
                "translation": "Demi meraih keberhasilan, dia pergi ke luar negeri."
            }, {
                "question": "______ ______ __★__ ______。",
                "options": [
                    "信念を 貫かんが",
                    "いとわなかった",
                    "ために",
                    "彼は 孤立をも"
                ],
                "answer": "彼は 孤立をも",
                "correctOrder": [
                    1,
                    3,
                    4,
                    2
                ],
                "translation": "Demi mempertahankan keyakinannya, dia bahkan tak gentar pada keterasingan."
            }, {
                "question": "______ ______ __★__ ______。",
                "options": [
                    "黒ずくめの 服装で",
                    "統一されていた",
                    "会場は",
                    "式典の日"
                ],
                "answer": "黒ずくめの 服装で",
                "correctOrder": [
                    4,
                    3,
                    1,
                    2
                ],
                "translation": "Pada hari seremoni, aula dipenuhi pakaian serba hitam."
            }, {
                "question": "______ ______ __★__ ______。",
                "options": [
                    "ずくめの",
                    "今年の 春は",
                    "うれしいこと",
                    "新生活だった"
                ],
                "answer": "ずくめの",
                "correctOrder": [
                    2,
                    3,
                    1,
                    4
                ],
                "translation": "Musim semi tahun ini adalah awal hidup baru yang penuh hal menyenangkan."
            }, {
                "question": "______ ______ __★__ ______。",
                "options": [
                    "その 一日は",
                    "だった",
                    "緊張ずくめ",
                    "朝から 晩まで"
                ],
                "answer": "緊張ずくめ",
                "correctOrder": [
                    1,
                    4,
                    3,
                    2
                ],
                "translation": "Hari itu dari pagi sampai malam penuh ketegangan."
            }, {
                "question": "______ ______ __★__ ______。",
                "options": [
                    "彼の 説明は",
                    "反省と 感謝",
                    "ずくめで",
                    "胸を 打った"
                ],
                "answer": "ずくめで",
                "correctOrder": [
                    1,
                    2,
                    3,
                    4
                ],
                "translation": "Penjelasannya penuh penyesalan dan rasa syukur sehingga menyentuh hati."
            }, {
                "question": "______ ______ __★__ ______。",
                "options": [
                    "締め切り前日に 仕様を",
                    "きたら",
                    "変えるんだから",
                    "うちの 上司と"
                ],
                "answer": "締め切り前日に 仕様を",
                "correctOrder": [
                    4,
                    2,
                    1,
                    3
                ],
                "translation": "Kalau atasan saya itu, justru mengubah spesifikasi sehari sebelum tenggat."
            }, {
                "question": "______ ______ __★__ ______。",
                "options": [
                    "最近の 天気と",
                    "予報が まったく",
                    "当てに ならない",
                    "きたら"
                ],
                "answer": "予報が まったく",
                "correctOrder": [
                    1,
                    4,
                    2,
                    3
                ],
                "translation": "Kalau cuaca belakangan ini, ramalannya benar-benar tak bisa diandalkan."
            }, {
                "question": "______ ______ __★__ ______。",
                "options": [
                    "きたら",
                    "いくら 注意しても",
                    "彼の 忘れ物と",
                    "直らない"
                ],
                "answer": "いくら 注意しても",
                "correctOrder": [
                    3,
                    1,
                    2,
                    4
                ],
                "translation": "Kalau soal kebiasaan lupanya, sudah diingatkan berkali-kali tetap tak berubah."
            }, {
                "question": "______ ______ __★__ ______。",
                "options": [
                    "丁寧だ",
                    "あの 店の 接客と",
                    "混んでいても いつも",
                    "きたら"
                ],
                "answer": "混んでいても いつも",
                "correctOrder": [
                    2,
                    4,
                    3,
                    1
                ],
                "translation": "Kalau pelayanan toko itu, meski ramai selalu sopan."
            }, {
                "question": "______ ______ __★__ ______。",
                "options": [
                    "相まって",
                    "円安と",
                    "拍車を かけた",
                    "原料不足も 価格上昇に"
                ],
                "answer": "原料不足も 価格上昇に",
                "correctOrder": [
                    2,
                    1,
                    4,
                    3
                ],
                "translation": "Bersamaan dengan lemahnya yen, kekurangan bahan baku ikut mempercepat kenaikan harga."
            }, {
                "question": "______ ______ __★__ ______。",
                "options": [
                    "相まって",
                    "彼の 冷静な 判断が",
                    "豊富な 経験と",
                    "チームを 救った"
                ],
                "answer": "彼の 冷静な 判断が",
                "correctOrder": [
                    3,
                    1,
                    2,
                    4
                ],
                "translation": "Dipadukan dengan pengalaman melimpah, penilaiannya yang tenang menyelamatkan tim."
            }, {
                "question": "______ ______ __★__ ______。",
                "options": [
                    "家賃の 安さも",
                    "人気の 理由だ",
                    "相まって",
                    "駅近という 利便性と"
                ],
                "answer": "家賃の 安さも",
                "correctOrder": [
                    4,
                    3,
                    1,
                    2
                ],
                "translation": "Dipadukan dengan lokasi dekat stasiun, sewa yang murah jadi alasan populer."
            }, {
                "question": "______ ______ __★__ ______。",
                "options": [
                    "SNSでの 拡散と",
                    "テレビ報道まで 入り",
                    "知名度が 一気に 上がった",
                    "相まって"
                ],
                "answer": "テレビ報道まで 入り",
                "correctOrder": [
                    1,
                    4,
                    2,
                    3
                ],
                "translation": "Bersamaan dengan penyebaran di SNS, liputan TV pun masuk dan popularitas melonjak."
            }, {
                "question": "______ ______ __★__ ______。",
                "options": [
                    "基本的な あいさつも できない",
                    "任せられない",
                    "ようでは",
                    "接客の 仕事は"
                ],
                "answer": "接客の 仕事は",
                "correctOrder": [
                    1,
                    3,
                    4,
                    2
                ],
                "translation": "Kalau sampai salam dasar pun tak bisa, pekerjaan layanan tak bisa diserahkan."
            }, {
                "question": "______ ______ __★__ ______。",
                "options": [
                    "信頼を 失っても",
                    "ようでは",
                    "締め切りを 毎回 守れない",
                    "仕方がない"
                ],
                "answer": "信頼を 失っても",
                "correctOrder": [
                    3,
                    2,
                    1,
                    4
                ],
                "translation": "Kalau terus tak bisa memenuhi tenggat, wajar jika kehilangan kepercayaan."
            }, {
                "question": "______ ______ __★__ ______。",
                "options": [
                    "成長は",
                    "自分の ミスを 認めない",
                    "望めない",
                    "ようでは"
                ],
                "answer": "成長は",
                "correctOrder": [
                    2,
                    4,
                    1,
                    3
                ],
                "translation": "Kalau tak mau mengakui kesalahan sendiri, perkembangan tak bisa diharapkan."
            }, {
                "question": "______ ______ __★__ ______。",
                "options": [
                    "導入は",
                    "難しい",
                    "説明を 読んでも 操作できない",
                    "ようでは"
                ],
                "answer": "導入は",
                "correctOrder": [
                    3,
                    4,
                    1,
                    2
                ],
                "translation": "Kalau sampai setelah membaca penjelasan pun tak bisa mengoperasikan, penerapan akan sulit."
            }, {
                "question": "______ ______ __★__ ______。",
                "options": [
                    "現場の 協力",
                    "この 計画は",
                    "なくしては",
                    "成立しなかった"
                ],
                "answer": "この 計画は",
                "correctOrder": [
                    1,
                    3,
                    2,
                    4
                ],
                "translation": "Tanpa kerja sama lapangan, rencana ini tak akan terwujud."
            }, {
                "question": "______ ______ __★__ ______。",
                "options": [
                    "あり得ない",
                    "今の 成果は",
                    "なくしては",
                    "日々の 努力"
                ],
                "answer": "今の 成果は",
                "correctOrder": [
                    4,
                    3,
                    2,
                    1
                ],
                "translation": "Tanpa usaha harian, hasil sekarang mustahil ada."
            }, {
                "question": "______ ______ __★__ ______。",
                "options": [
                    "再開発は",
                    "なくしては",
                    "住民の 理解",
                    "前に 進まない"
                ],
                "answer": "再開発は",
                "correctOrder": [
                    3,
                    2,
                    1,
                    4
                ],
                "translation": "Tanpa pemahaman warga, pembangunan ulang tak akan maju."
            }, {
                "question": "______ ______ __★__ ______。",
                "options": [
                    "信頼関係",
                    "長期的な 取引は",
                    "なくしては",
                    "成り立たない"
                ],
                "answer": "長期的な 取引は",
                "correctOrder": [
                    1,
                    3,
                    2,
                    4
                ],
                "translation": "Tanpa hubungan saling percaya, transaksi jangka panjang tak akan berjalan."
            }, {
                "question": "______ ______ __★__ ______。",
                "options": [
                    "老舗旅館",
                    "細やかな もてなしに",
                    "ならではの",
                    "感動した"
                ],
                "answer": "細やかな もてなしに",
                "correctOrder": [
                    1,
                    3,
                    2,
                    4
                ],
                "translation": "Saya terkesan oleh pelayanan rinci khas ryokan lama."
            }, {
                "question": "______ ______ __★__ ______。",
                "options": [
                    "一品だ",
                    "職人",
                    "手仕事が 光る",
                    "ならではの"
                ],
                "answer": "手仕事が 光る",
                "correctOrder": [
                    2,
                    4,
                    3,
                    1
                ],
                "translation": "Ini adalah karya yang menonjolkan sentuhan khas perajin."
            }, {
                "question": "______ ______ __★__ ______。",
                "options": [
                    "落ち着いた 雰囲気が",
                    "ならではの",
                    "地方都市",
                    "残っている"
                ],
                "answer": "落ち着いた 雰囲気が",
                "correctOrder": [
                    3,
                    2,
                    1,
                    4
                ],
                "translation": "Masih tersisa suasana tenang yang khas kota daerah."
            }, {
                "question": "______ ______ __★__ ______。",
                "options": [
                    "感じた",
                    "視点だと",
                    "ならではの",
                    "長年 研究してきた 彼"
                ],
                "answer": "視点だと",
                "correctOrder": [
                    4,
                    3,
                    2,
                    1
                ],
                "translation": "Saya merasa itu sudut pandang yang khas dia, hasil riset bertahun-tahun."
            }, {
                "question": "______ ______ __★__ ______。",
                "options": [
                    "堪えない",
                    "被災地の 写真は",
                    "見るに",
                    "痛ましさだった"
                ],
                "answer": "堪えない",
                "correctOrder": [
                    2,
                    3,
                    1,
                    4
                ],
                "translation": "Foto daerah bencana begitu memilukan hingga sulit ditonton."
            }, {
                "question": "______ ______ __★__ ______。",
                "options": [
                    "喜びに",
                    "堪えない",
                    "長年の 努力が 実った 瞬間は",
                    "ものだった"
                ],
                "answer": "堪えない",
                "correctOrder": [
                    3,
                    1,
                    2,
                    4
                ],
                "translation": "Momen ketika usaha bertahun-tahun berhasil adalah sesuatu yang sulit menahan sukacita."
            }, {
                "question": "______ ______ __★__ ______。",
                "options": [
                    "内容だった",
                    "読むに",
                    "その 報告書は",
                    "堪えない"
                ],
                "answer": "堪えない",
                "correctOrder": [
                    3,
                    2,
                    4,
                    1
                ],
                "translation": "Laporan itu berisi hal-hal yang sungguh tak tertahankan untuk dibaca."
            }, {
                "question": "______ ______ __★__ ______。",
                "options": [
                    "ものが あった",
                    "感動を",
                    "禁じ得ない",
                    "彼の 誠実な あいさつには"
                ],
                "answer": "禁じ得ない",
                "correctOrder": [
                    4,
                    2,
                    3,
                    1
                ],
                "translation": "Sapaan tulusnya membuat orang sulit menahan haru."
            }, {
                "question": "______ ______ __★__ ______。",
                "options": [
                    "イベントの 中止を",
                    "された",
                    "余儀なく",
                    "突然の 豪雨で"
                ],
                "answer": "余儀なく",
                "correctOrder": [
                    4,
                    1,
                    3,
                    2
                ],
                "translation": "Karena hujan deras mendadak, acara terpaksa dibatalkan."
            }, {
                "question": "______ ______ __★__ ______。",
                "options": [
                    "生産計画の 見直しを",
                    "原材料の 不足により",
                    "余儀なく",
                    "された"
                ],
                "answer": "余儀なく",
                "correctOrder": [
                    2,
                    1,
                    3,
                    4
                ],
                "translation": "Karena kekurangan bahan baku, peninjauan ulang rencana produksi terpaksa dilakukan."
            }, {
                "question": "______ ______ __★__ ______。",
                "options": [
                    "された",
                    "余儀なく",
                    "オンライン開催を",
                    "感染拡大を 受け"
                ],
                "answer": "余儀なく",
                "correctOrder": [
                    4,
                    3,
                    2,
                    1
                ],
                "translation": "Karena penyebaran infeksi, acara terpaksa diadakan online."
            }, {
                "question": "______ ______ __★__ ______。",
                "options": [
                    "設備の 老朽化で",
                    "長期休業を",
                    "された",
                    "余儀なく"
                ],
                "answer": "余儀なく",
                "correctOrder": [
                    1,
                    2,
                    4,
                    3
                ],
                "translation": "Karena fasilitas menua, penutupan jangka panjang terpaksa dilakukan."
            }, {
                "question": "______ ______ __★__ ______。",
                "options": [
                    "押し通した",
                    "計画を 最後まで",
                    "ものともせず",
                    "彼は 激しい 反対を"
                ],
                "answer": "計画を 最後まで",
                "correctOrder": [
                    4,
                    3,
                    2,
                    1
                ],
                "translation": "Dia tetap memaksakan rencana sampai akhir tanpa gentar pada tentangan keras."
            }, {
                "question": "______ ______ __★__ ______。",
                "options": [
                    "選手たちは 悪天候を",
                    "ものともせず",
                    "更新した",
                    "自己ベストを"
                ],
                "answer": "自己ベストを",
                "correctOrder": [
                    1,
                    2,
                    4,
                    3
                ],
                "translation": "Para atlet memecahkan rekor pribadi tanpa menghiraukan cuaca buruk."
            }, {
                "question": "______ ______ __★__ ______。",
                "options": [
                    "ものともせず",
                    "選んだ",
                    "自分の 道を",
                    "彼女は 周囲の 批判を"
                ],
                "answer": "自分の 道を",
                "correctOrder": [
                    4,
                    1,
                    3,
                    2
                ],
                "translation": "Dia memilih jalannya sendiri tanpa gentar pada kritik sekitar."
            }, {
                "question": "______ ______ __★__ ______。",
                "options": [
                    "消防隊は 燃えさかる 炎を",
                    "入っていった",
                    "建物の 中へ",
                    "ものともせず"
                ],
                "answer": "建物の 中へ",
                "correctOrder": [
                    1,
                    4,
                    3,
                    2
                ],
                "translation": "Tim pemadam masuk ke bangunan tanpa gentar pada kobaran api."
            }, {
                "question": "______ ______ __★__ ______。",
                "options": [
                    "区別は つく",
                    "子どもと",
                    "してよいことと 悪いことの",
                    "いえども"
                ],
                "answer": "してよいことと 悪いことの",
                "correctOrder": [
                    2,
                    4,
                    3,
                    1
                ],
                "translation": "Sekalipun anak-anak, mereka tetap bisa membedakan yang baik dan buruk."
            }, {
                "question": "______ ______ __★__ ______。",
                "options": [
                    "いえども",
                    "すべてを 予測できる",
                    "専門家と",
                    "わけでは ない"
                ],
                "answer": "すべてを 予測できる",
                "correctOrder": [
                    3,
                    1,
                    2,
                    4
                ],
                "translation": "Sekalipun ahli, bukan berarti bisa memprediksi segalanya."
            }, {
                "question": "______ ______ __★__ ______。",
                "options": [
                    "努力全体を 否定する",
                    "いえども",
                    "一度の 失敗と",
                    "理由には ならない"
                ],
                "answer": "努力全体を 否定する",
                "correctOrder": [
                    3,
                    2,
                    1,
                    4
                ],
                "translation": "Sekalipun satu kegagalan, itu bukan alasan menolak semua usaha."
            }, {
                "question": "______ ______ __★__ ______。",
                "options": [
                    "ミスが まったく ないとは",
                    "いえども",
                    "限らない",
                    "どんな 名店と"
                ],
                "answer": "ミスが まったく ないとは",
                "correctOrder": [
                    4,
                    2,
                    1,
                    3
                ],
                "translation": "Sekalipun toko ternama, bukan berarti sama sekali tak pernah salah."
            }, {
                "question": "______ ______ __★__ ______。",
                "options": [
                    "忙しくなる",
                    "どの 部署も 一気に",
                    "なると",
                    "年度末とも"
                ],
                "answer": "どの 部署も 一気に",
                "correctOrder": [
                    4,
                    3,
                    2,
                    1
                ],
                "translation": "Begitu masuk akhir tahun fiskal, semua divisi mendadak sibuk."
            }, {
                "question": "______ ______ __★__ ______。",
                "options": [
                    "できない",
                    "責任者とも",
                    "なると",
                    "軽々しく 発言は"
                ],
                "answer": "軽々しく 発言は",
                "correctOrder": [
                    2,
                    3,
                    4,
                    1
                ],
                "translation": "Kalau sudah jadi penanggung jawab, tidak bisa bicara sembarangan."
            }, {
                "question": "______ ______ __★__ ______。",
                "options": [
                    "プロの 試合とも",
                    "致命的に なる",
                    "一つの ミスが",
                    "なると"
                ],
                "answer": "一つの ミスが",
                "correctOrder": [
                    1,
                    4,
                    3,
                    2
                ],
                "translation": "Kalau sudah pertandingan profesional, satu kesalahan bisa fatal."
            }, {
                "question": "______ ______ __★__ ______。",
                "options": [
                    "相当 高い",
                    "家賃は",
                    "東京の 中心部で 新築とも",
                    "なると"
                ],
                "answer": "家賃は",
                "correctOrder": [
                    3,
                    4,
                    2,
                    1
                ],
                "translation": "Kalau sudah bicara bangunan baru di pusat Tokyo, sewanya tentu sangat mahal."
            }, {
                "question": "______ ______ __★__ ______。",
                "options": [
                    "できない",
                    "一日たりとも",
                    "無駄には",
                    "締め切りまで"
                ],
                "answer": "無駄には",
                "correctOrder": [
                    4,
                    2,
                    3,
                    1
                ],
                "translation": "Menjelang tenggat, bahkan satu hari pun tak bisa disia-siakan."
            }, {
                "question": "______ ______ __★__ ______。",
                "options": [
                    "無駄に したく",
                    "この 企画では",
                    "ない",
                    "一円たりとも"
                ],
                "answer": "無駄に したく",
                "correctOrder": [
                    2,
                    4,
                    1,
                    3
                ],
                "translation": "Dalam proyek ini, bahkan satu yen pun tak ingin disia-siakan."
            }, {
                "question": "______ ______ __★__ ______。",
                "options": [
                    "安全確認を",
                    "おろそかに しては",
                    "ならない",
                    "一瞬たりとも"
                ],
                "answer": "おろそかに しては",
                "correctOrder": [
                    1,
                    4,
                    2,
                    3
                ],
                "translation": "Pemeriksaan keselamatan tak boleh diabaikan bahkan sedetik pun."
            }, {
                "question": "______ ______ __★__ ______。",
                "options": [
                    "不満を 口に",
                    "彼は",
                    "一言たりとも",
                    "しなかった"
                ],
                "answer": "不満を 口に",
                "correctOrder": [
                    2,
                    3,
                    1,
                    4
                ],
                "translation": "Dia tidak mengeluh bahkan satu kata pun."
            }, {
                "question": "______ ______ __★__ ______。",
                "options": [
                    "彼の 提案は",
                    "再検討に",
                    "内容だ",
                    "足る"
                ],
                "answer": "足る",
                "correctOrder": [
                    1,
                    2,
                    4,
                    3
                ],
                "translation": "Usulan itu layak untuk dipertimbangkan ulang."
            }, {
                "question": "______ ______ __★__ ______。",
                "options": [
                    "この 資料は",
                    "ものだ",
                    "参考に",
                    "足る"
                ],
                "answer": "足る",
                "correctOrder": [
                    1,
                    3,
                    4,
                    2
                ],
                "translation": "Materi ini layak dijadikan referensi."
            }, {
                "question": "______ ______ __★__ ______。",
                "options": [
                    "彼の 行動は",
                    "評価に 足る",
                    "ものだ",
                    "十分に"
                ],
                "answer": "評価に 足る",
                "correctOrder": [
                    1,
                    4,
                    2,
                    3
                ],
                "translation": "Tindakannya cukup layak mendapat penilaian."
            }, {
                "question": "______ ______ __★__ ______。",
                "options": [
                    "注目に 足る",
                    "学術的にも",
                    "成果を 含んでいる",
                    "その 研究は"
                ],
                "answer": "注目に 足る",
                "correctOrder": [
                    4,
                    2,
                    1,
                    3
                ],
                "translation": "Penelitian itu memuat hasil yang layak mendapat perhatian."
            }, {
                "question": "______ ______ __★__ ______。",
                "options": [
                    "長年 続いた 店が 閉まると 聞き",
                    "寂しさを",
                    "人も 多い",
                    "禁じ得なかった"
                ],
                "answer": "禁じ得なかった",
                "correctOrder": [
                    1,
                    2,
                    4,
                    3
                ],
                "translation": "Mendengar toko yang berjalan lama itu tutup, banyak orang tak bisa menahan rasa sedih."
            }, {
                "question": "______ ______ __★__ ______。",
                "options": [
                    "のだ",
                    "感動を",
                    "彼の 成長ぶりを 見て",
                    "禁じ得なかった"
                ],
                "answer": "禁じ得なかった",
                "correctOrder": [
                    3,
                    2,
                    4,
                    1
                ],
                "translation": "Melihat perkembangannya, saya tak bisa menahan haru."
            }, {
                "question": "______ ______ __★__ ______。",
                "options": [
                    "怒りを",
                    "市民も いた",
                    "その 判決の 重さに",
                    "禁じ得なかった"
                ],
                "answer": "禁じ得なかった",
                "correctOrder": [
                    3,
                    1,
                    4,
                    2
                ],
                "translation": "Ada warga yang tak bisa menahan amarah pada beratnya putusan itu."
            }, {
                "question": "______ ______ __★__ ______。",
                "options": [
                    "禁じ得なかった",
                    "被災地の 現状を 前に",
                    "驚きを",
                    "記者は 多かった"
                ],
                "answer": "禁じ得なかった",
                "correctOrder": [
                    2,
                    3,
                    1,
                    4
                ],
                "translation": "Banyak wartawan yang tak bisa menahan keterkejutan di hadapan kondisi daerah bencana."
            }, {
                "question": "______ ______ __★__ ______。",
                "options": [
                    "立ち入る",
                    "と 書いてある",
                    "関係者以外",
                    "べからず"
                ],
                "answer": "べからず",
                "correctOrder": [
                    3,
                    1,
                    4,
                    2
                ],
                "translation": "Tertulis: selain pihak terkait, dilarang masuk."
            }, {
                "question": "______ ______ __★__ ______。",
                "options": [
                    "私語する",
                    "試験中",
                    "と 注意された",
                    "べからず"
                ],
                "answer": "べからず",
                "correctOrder": [
                    2,
                    1,
                    4,
                    3
                ],
                "translation": "Ada peringatan: saat ujian, dilarang berbicara."
            }, {
                "question": "______ ______ __★__ ______。",
                "options": [
                    "行う",
                    "と 明記されている",
                    "べからず",
                    "資料の 無断転載"
                ],
                "answer": "べからず",
                "correctOrder": [
                    4,
                    1,
                    3,
                    2
                ],
                "translation": "Tercantum jelas: dilarang mereproduksi materi tanpa izin."
            }, {
                "question": "______ ______ __★__ ______。",
                "options": [
                    "の 掲示が ある",
                    "館内にて",
                    "飲食する",
                    "べからず"
                ],
                "answer": "べからず",
                "correctOrder": [
                    2,
                    3,
                    4,
                    1
                ],
                "translation": "Ada pengumuman: di dalam gedung dilarang makan dan minum."
            }, {
                "question": "______ ______ __★__ ______。",
                "options": [
                    "先輩には",
                    "結局",
                    "じまいだった",
                    "最後まで 謝れず"
                ],
                "answer": "最後まで 謝れず",
                "correctOrder": [
                    2,
                    1,
                    4,
                    3
                ],
                "translation": "Akhirnya saya berakhir tanpa sempat meminta maaf pada senior."
            }, {
                "question": "______ ______ __★__ ______。",
                "options": [
                    "じまいだった",
                    "行けず",
                    "気になっていた 展覧会にも",
                    "忙しくて"
                ],
                "answer": "行けず",
                "correctOrder": [
                    4,
                    3,
                    2,
                    1
                ],
                "translation": "Karena sibuk, saya berakhir tanpa sempat pergi ke pameran yang ingin saya lihat."
            }, {
                "question": "______ ______ __★__ ______。",
                "options": [
                    "その 件には",
                    "連絡できず",
                    "確認しようと 思いながら",
                    "じまいだった"
                ],
                "answer": "連絡できず",
                "correctOrder": [
                    3,
                    1,
                    2,
                    4
                ],
                "translation": "Meski berniat mengecek, akhirnya saya tidak sempat menghubungi soal itu."
            }, {
                "question": "______ ______ __★__ ______。",
                "options": [
                    "せっかく 招待されたのに",
                    "じまいだった",
                    "参加できず",
                    "予定が 合わず"
                ],
                "answer": "参加できず",
                "correctOrder": [
                    1,
                    4,
                    3,
                    2
                ],
                "translation": "Padahal sudah diundang, akhirnya saya tidak sempat ikut karena jadwal tak cocok."
            }, {
                "question": "______ ______ __★__ ______。",
                "options": [
                    "やみません",
                    "心から",
                    "先生の 早い 回復を",
                    "願って"
                ],
                "answer": "願って",
                "correctOrder": [
                    3,
                    2,
                    4,
                    1
                ],
                "translation": "Saya terus mendoakan kesembuhan cepat guru itu."
            }, {
                "question": "______ ______ __★__ ______。",
                "options": [
                    "地域の 復興を",
                    "祈って",
                    "ひたすら",
                    "やまない 人は 多い"
                ],
                "answer": "祈って",
                "correctOrder": [
                    1,
                    3,
                    2,
                    4
                ],
                "translation": "Banyak orang terus mendoakan pemulihan daerah itu."
            }, {
                "question": "______ ______ __★__ ______。",
                "options": [
                    "期待して",
                    "やまない",
                    "大いに",
                    "彼女の 今後の 活躍を"
                ],
                "answer": "期待して",
                "correctOrder": [
                    4,
                    3,
                    1,
                    2
                ],
                "translation": "Saya terus menaruh harapan besar pada kiprah dia ke depan."
            }, {
                "question": "______ ______ __★__ ______。",
                "options": [
                    "願って",
                    "やまない と 述べた",
                    "その 取り組みが 広く 社会に 伝わることを",
                    "心から"
                ],
                "answer": "願って",
                "correctOrder": [
                    3,
                    4,
                    1,
                    2
                ],
                "translation": "Dia mengatakan dengan tulus bahwa dirinya terus berharap upaya itu tersebar luas ke masyarakat."
            }
        ],
        "bunpou-text": [{
                "passage": "社説の 一節には、次の ような 表現が 用いられていた。 この 地域の 祭りは、準備から 後片づけ ______ 地元の 人が 支えている。 前後の 論理だけでなく、文体の 格も 問われる。",
                "questionId": "1",
                "options": [
                    "に 至るまで",
                    "に 至って",
                    "に かけて",
                    "を もって"
                ],
                "answer": "に 至るまで",
                "translation": "Festival di daerah ini didukung warga lokal mulai dari persiapan sampai beres-beres."
            }, {
                "passage": "政策提言の 文書を 読むと、次の 一文が 目を 引いた。 社長は 新人研修の 内容から 配布資料 ______ 自ら 目を 通した。 微妙な 含意の 違いまで 見抜きたい。",
                "questionId": "2",
                "options": [
                    "に 至るまで",
                    "に 至って",
                    "に かけて",
                    "を もって"
                ],
                "answer": "に 至るまで",
                "translation": "Direktur sendiri memeriksa semuanya, mulai isi pelatihan pegawai baru sampai materi yang dibagikan."
            }, {
                "passage": "文化論の エッセイには、こうした 言い回しが あった。 被害は 建物だけでなく、周辺の 交通網 ______ 及んだ。 文脈と レジスターの 両方を 手がかりに 選ぶ 問題だ。",
                "questionId": "3",
                "options": [
                    "に 至るまで",
                    "に 至って",
                    "に かけて",
                    "を もって"
                ],
                "answer": "に 至るまで",
                "translation": "Dampak kerusakan tidak hanya pada gedung, tetapi sampai jaringan transportasi sekitar."
            }, {
                "passage": "専門家の 講演録には、次の 一節が 含まれていた。 その 作家は 表紙の 色づかいから 注釈の 文体 ______ 細部に こだわっていた。 語感の 厳密さまで 求められる。",
                "questionId": "4",
                "options": [
                    "に 至るまで",
                    "に 至って",
                    "に かけて",
                    "を もって"
                ],
                "answer": "に 至るまで",
                "translation": "Penulis itu sangat memperhatikan detail, mulai warna sampul sampai gaya bahasa catatan."
            }, {
                "passage": "長期的な 社会変化を 論じた 文章には、こう 書かれていた。 問題が 表面化して ______、ようやく 対策会議が 開かれた。 前後の 論理だけでなく、文体の 格も 問われる。",
                "questionId": "5",
                "options": [
                    "に 至って",
                    "に 至るまで",
                    "に して",
                    "に 伴って"
                ],
                "answer": "に 至って",
                "translation": "Baru setelah masalah muncul ke permukaan, rapat penanganan akhirnya digelar."
            }, {
                "passage": "調査報告書の 総括部分には、次の 表現が 見られた。 最終面接の 段階に ______、応募書類の 不備が 見つかった。 微妙な 含意の 違いまで 見抜きたい。",
                "questionId": "6",
                "options": [
                    "に 至って",
                    "に 至るまで",
                    "に して",
                    "に 伴って"
                ],
                "answer": "に 至って",
                "translation": "Baru pada tahap wawancara akhir ditemukan kekurangan pada berkas lamaran."
            }, {
                "passage": "書評欄の 文章には、次の ような 一文が あった。 閉店が 決まるに ______、常連客から 惜しむ 声が 相次いだ。 文脈と レジスターの 両方を 手がかりに 選ぶ 問題だ。",
                "questionId": "7",
                "options": [
                    "に 至って",
                    "に 至るまで",
                    "に して",
                    "に 伴って"
                ],
                "answer": "に 至って",
                "translation": "Begitu penutupan toko diputuskan, suara penyesalan dari pelanggan setia berdatangan."
            }, {
                "passage": "論壇記事の 文末には、こう 締めくくられていた。 いまに ______、なお 事実を 認めないのは 不自然だ。 語感の 厳密さまで 求められる。",
                "questionId": "8",
                "options": [
                    "に 至って",
                    "に 至るまで",
                    "に して",
                    "に 伴って"
                ],
                "answer": "に 至って",
                "translation": "Pada tahap seperti sekarang pun tetap tidak mengakui fakta itu terasa tidak wajar."
            }, {
                "passage": "社説の 一節には、次の ような 表現が 用いられていた。 ベルが 鳴る ______、学生たちは いっせいに 教室を 飛び出した。 前後の 論理だけでなく、文体の 格も 問われる。",
                "questionId": "9",
                "options": [
                    "や 否や",
                    "が 早いか",
                    "とたん",
                    "そばから"
                ],
                "answer": "や 否や",
                "translation": "Begitu bel berbunyi, para siswa serentak berlari keluar kelas."
            }, {
                "passage": "政策提言の 文書を 読むと、次の 一文が 目を 引いた。 彼は 席に 着く ______、ノートPCを 開いて 作業を 始めた。 微妙な 含意の 違いまで 見抜きたい。",
                "questionId": "10",
                "options": [
                    "や 否や",
                    "が 早いか",
                    "とたん",
                    "そばから"
                ],
                "answer": "や 否や",
                "translation": "Begitu duduk, dia langsung membuka laptop dan mulai bekerja."
            }, {
                "passage": "文化論の エッセイには、こうした 言い回しが あった。 部長は 会議室に 入る ______、本題に 入った。 文脈と レジスターの 両方を 手がかりに 選ぶ 問題だ。",
                "questionId": "11",
                "options": [
                    "や 否や",
                    "が 早いか",
                    "とたん",
                    "そばから"
                ],
                "answer": "や 否や",
                "translation": "Begitu masuk ruang rapat, kepala divisi langsung masuk ke pokok pembicaraan."
            }, {
                "passage": "専門家の 講演録には、次の 一節が 含まれていた。 電車の ドアが 開く ______、乗客が なだれ込んだ。 語感の 厳密さまで 求められる。",
                "questionId": "12",
                "options": [
                    "や 否や",
                    "が 早いか",
                    "とたん",
                    "そばから"
                ],
                "answer": "や 否や",
                "translation": "Begitu pintu kereta terbuka, penumpang langsung berdesakan masuk."
            }, {
                "passage": "長期的な 社会変化を 論じた 文章には、こう 書かれていた。 着席する ______、司会者は 開会を 宣言した。 前後の 論理だけでなく、文体の 格も 問われる。",
                "questionId": "13",
                "options": [
                    "が 早いか",
                    "や 否や",
                    "そばから",
                    "とたん"
                ],
                "answer": "が 早いか",
                "translation": "Begitu semua duduk, pembawa acara langsung mengumumkan pembukaan."
            }, {
                "passage": "調査報告書の 総括部分には、次の 表現が 見られた。 家に 帰る ______、弟は 冷蔵庫を 開けていた。 微妙な 含意の 違いまで 見抜きたい。",
                "questionId": "14",
                "options": [
                    "が 早いか",
                    "や 否や",
                    "そばから",
                    "とたん"
                ],
                "answer": "が 早いか",
                "translation": "Begitu pulang ke rumah, adik langsung membuka kulkas."
            }, {
                "passage": "書評欄の 文章には、次の ような 一文が あった。 スマホの 通知を 見る ______、彼は 表情を 変えた。 文脈と レジスターの 両方を 手がかりに 選ぶ 問題だ。",
                "questionId": "15",
                "options": [
                    "が 早いか",
                    "や 否や",
                    "そばから",
                    "とたん"
                ],
                "answer": "が 早いか",
                "translation": "Begitu melihat notifikasi ponsel, ekspresinya langsung berubah."
            }, {
                "passage": "論壇記事の 文末には、こう 締めくくられていた。 開始の 合図が 出る ______、選手たちは 一斉に 走り出した。 語感の 厳密さまで 求められる。",
                "questionId": "16",
                "options": [
                    "が 早いか",
                    "や 否や",
                    "そばから",
                    "とたん"
                ],
                "answer": "が 早いか",
                "translation": "Begitu sinyal start diberikan, para atlet serentak berlari."
            }, {
                "passage": "社説の 一節には、次の ような 表現が 用いられていた。 片づけた ______、子どもが また おもちゃを 広げてしまう。 前後の 論理だけでなく、文体の 格も 問われる。",
                "questionId": "17",
                "options": [
                    "そばから",
                    "や 否や",
                    "が 早いか",
                    "たびに"
                ],
                "answer": "そばから",
                "translation": "Baru saja dirapikan, anak itu kembali mengeluarkan mainannya."
            }, {
                "passage": "政策提言の 文書を 読むと、次の 一文が 目を 引いた。 説明した ______、同じ 質問を される。 微妙な 含意の 違いまで 見抜きたい。",
                "questionId": "18",
                "options": [
                    "そばから",
                    "や 否や",
                    "が 早いか",
                    "たびに"
                ],
                "answer": "そばから",
                "translation": "Baru saja dijelaskan, pertanyaan yang sama muncul lagi."
            }, {
                "passage": "文化論の エッセイには、こうした 言い回しが あった。 雪を どけた ______、また すぐに 積もってしまう。 文脈と レジスターの 両方を 手がかりに 選ぶ 問題だ。",
                "questionId": "19",
                "options": [
                    "そばから",
                    "や 否や",
                    "が 早いか",
                    "たびに"
                ],
                "answer": "そばから",
                "translation": "Baru saja menyingkirkan salju, langsung menumpuk lagi."
            }, {
                "passage": "専門家の 講演録には、次の 一節が 含まれていた。 メモした ______、うっかり 忘れてしまう ことが ある。 語感の 厳密さまで 求められる。",
                "questionId": "20",
                "options": [
                    "そばから",
                    "や 否や",
                    "が 早いか",
                    "たびに"
                ],
                "answer": "そばから",
                "translation": "Baru saja dicatat, kadang malah langsung terlupa."
            }, {
                "passage": "長期的な 社会変化を 論じた 文章には、こう 書かれていた。 三連休の 初日 ______、空港は 朝から 混雑していた。 前後の 論理だけでなく、文体の 格も 問われる。",
                "questionId": "21",
                "options": [
                    "と あって",
                    "と あれば",
                    "と きたら",
                    "からして"
                ],
                "answer": "と あって",
                "translation": "Karena hari pertama libur tiga hari, bandara sudah padat sejak pagi."
            }, {
                "passage": "調査報告書の 総括部分には、次の 表現が 見られた。 人気作家の 新刊発売日 ______、書店には 長い 列が できていた。 微妙な 含意の 違いまで 見抜きたい。",
                "questionId": "22",
                "options": [
                    "と あって",
                    "と あれば",
                    "と きたら",
                    "からして"
                ],
                "answer": "と あって",
                "translation": "Karena hari rilis buku baru penulis populer, antrean panjang terbentuk di toko buku."
            }, {
                "passage": "書評欄の 文章には、次の ような 一文が あった。 全国大会の 決勝 ______、会場の 熱気は 相当な ものだった。 文脈と レジスターの 両方を 手がかりに 選ぶ 問題だ。",
                "questionId": "23",
                "options": [
                    "と あって",
                    "と あれば",
                    "と きたら",
                    "からして"
                ],
                "answer": "と あって",
                "translation": "Karena ini final kejuaraan nasional, semangat di lokasi luar biasa."
            }, {
                "passage": "論壇記事の 文末には、こう 締めくくられていた。 駅前再開発の 説明会 ______、地元住民の 関心も 高かった。 語感の 厳密さまで 求められる。",
                "questionId": "24",
                "options": [
                    "と あって",
                    "と あれば",
                    "と きたら",
                    "からして"
                ],
                "answer": "と あって",
                "translation": "Karena ini sesi penjelasan pembangunan ulang depan stasiun, minat warga lokal pun tinggi."
            }, {
                "passage": "社説の 一節には、次の ような 表現が 用いられていた。 子ども ______、何でも 人に やってもらおうと するのは よくない。 前後の 論理だけでなく、文体の 格も 問われる。",
                "questionId": "25",
                "options": [
                    "では あるまいし",
                    "わけでは あるまいし",
                    "ことは あるまいし",
                    "とは いうものの"
                ],
                "answer": "では あるまいし",
                "translation": "Kamu bukan anak kecil, jadi tidak baik selalu minta orang lain mengerjakan semuanya."
            }, {
                "passage": "政策提言の 文書を 読むと、次の 一文が 目を 引いた。 初対面 ______、そこまで 遠慮する 必要は ありません。 微妙な 含意の 違いまで 見抜きたい。",
                "questionId": "26",
                "options": [
                    "では あるまいし",
                    "わけでは あるまいし",
                    "ことは あるまいし",
                    "とは いうものの"
                ],
                "answer": "では あるまいし",
                "translation": "Ini bukan pertama kalinya bertemu, jadi tidak perlu sungkan sebegitunya."
            }, {
                "passage": "文化論の エッセイには、こうした 言い回しが あった。 学生 ______、連絡も なしに 遅刻するのは 困る。 文脈と レジスターの 両方を 手がかりに 選ぶ 問題だ。",
                "questionId": "27",
                "options": [
                    "では あるまいし",
                    "わけでは あるまいし",
                    "ことは あるまいし",
                    "とは いうものの"
                ],
                "answer": "では あるまいし",
                "translation": "Kamu bukan siswa lagi, jadi telat tanpa kabar itu bermasalah."
            }, {
                "passage": "専門家の 講演録には、次の 一節が 含まれていた。 観光客 ______、地図も 見ずに 歩き回るのは 無謀だ。 語感の 厳密さまで 求められる。",
                "questionId": "28",
                "options": [
                    "では あるまいし",
                    "わけでは あるまいし",
                    "ことは あるまいし",
                    "とは いうものの"
                ],
                "answer": "では あるまいし",
                "translation": "Kamu bukan wisatawan yang tersesat, jadi berjalan tanpa lihat peta itu gegabah."
            }, {
                "passage": "長期的な 社会変化を 論じた 文章には、こう 書かれていた。 名誉を 守ら ______、彼は 最後まで 真実を 語らなかった。 前後の 論理だけでなく、文体の 格も 問われる。",
                "questionId": "29",
                "options": [
                    "んが ため",
                    "ために",
                    "ように",
                    "べく"
                ],
                "answer": "んが ため",
                "translation": "Demi menjaga kehormatan, dia tidak mengungkapkan kebenaran sampai akhir."
            }, {
                "passage": "調査報告書の 総括部分には、次の 表現が 見られた。 家族を 養わ ______、彼は 二つの 仕事を 掛け持ちしている。 微妙な 含意の 違いまで 見抜きたい。",
                "questionId": "30",
                "options": [
                    "んが ため",
                    "ために",
                    "ように",
                    "べく"
                ],
                "answer": "んが ため",
                "translation": "Demi menafkahi keluarga, dia merangkap dua pekerjaan."
            }, {
                "passage": "書評欄の 文章には、次の ような 一文が あった。 成功を つかま ______、彼女は 海外へ 渡った。 文脈と レジスターの 両方を 手がかりに 選ぶ 問題だ。",
                "questionId": "31",
                "options": [
                    "んが ため",
                    "ために",
                    "ように",
                    "べく"
                ],
                "answer": "んが ため",
                "translation": "Demi meraih keberhasilan, dia pergi ke luar negeri."
            }, {
                "passage": "論壇記事の 文末には、こう 締めくくられていた。 信念を 貫か ______、彼は 孤立を も いとわなかった。 語感の 厳密さまで 求められる。",
                "questionId": "32",
                "options": [
                    "んが ため",
                    "ために",
                    "ように",
                    "べく"
                ],
                "answer": "んが ため",
                "translation": "Demi mempertahankan keyakinannya, dia bahkan tak gentar pada keterasingan."
            }, {
                "passage": "社説の 一節には、次の ような 表現が 用いられていた。 今年の 春は うれしいこと ______ の 新生活だった。 前後の 論理だけでなく、文体の 格も 問われる。",
                "questionId": "33",
                "options": [
                    "ずくめ",
                    "まみれ",
                    "だらけ",
                    "ばかり"
                ],
                "answer": "ずくめ",
                "translation": "Musim semi tahun ini adalah awal hidup baru yang penuh hal menyenangkan."
            }, {
                "passage": "政策提言の 文書を 読むと、次の 一文が 目を 引いた。 式典の日、会場は 黒 ______ の 服装で 統一されていた。 微妙な 含意の 違いまで 見抜きたい。",
                "questionId": "34",
                "options": [
                    "ずくめ",
                    "まみれ",
                    "だらけ",
                    "ばかり"
                ],
                "answer": "ずくめ",
                "translation": "Pada hari seremoni, aula dipenuhi pakaian serba hitam."
            }, {
                "passage": "文化論の エッセイには、こうした 言い回しが あった。 彼の 説明は 反省と 感謝 ______ で、聞く者の 心を 打った。 文脈と レジスターの 両方を 手がかりに 選ぶ 問題だ。",
                "questionId": "35",
                "options": [
                    "ずくめ",
                    "まみれ",
                    "だらけ",
                    "ばかり"
                ],
                "answer": "ずくめ",
                "translation": "Penjelasannya penuh penyesalan dan rasa syukur, menyentuh hati pendengar."
            }, {
                "passage": "専門家の 講演録には、次の 一節が 含まれていた。 その 一日は 朝から 晩まで 緊張 ______ だった。 語感の 厳密さまで 求められる。",
                "questionId": "36",
                "options": [
                    "ずくめ",
                    "まみれ",
                    "だらけ",
                    "ばかり"
                ],
                "answer": "ずくめ",
                "translation": "Hari itu sejak pagi sampai malam penuh ketegangan."
            }, {
                "passage": "長期的な 社会変化を 論じた 文章には、こう 書かれていた。 うちの 上司 ______、締め切りの 前日に 仕様を 変えるんだから。 前後の 論理だけでなく、文体の 格も 問われる。",
                "questionId": "37",
                "options": [
                    "と きたら",
                    "といえば",
                    "にしては",
                    "からして"
                ],
                "answer": "と きたら",
                "translation": "Atasan saya itu, justru mengubah spesifikasi sehari sebelum tenggat."
            }, {
                "passage": "調査報告書の 総括部分には、次の 表現が 見られた。 最近の 天気 ______、予報が まったく 当てに ならない。 微妙な 含意の 違いまで 見抜きたい。",
                "questionId": "38",
                "options": [
                    "と きたら",
                    "といえば",
                    "にしては",
                    "からして"
                ],
                "answer": "と きたら",
                "translation": "Cuaca belakangan ini benar-benar tidak bisa diandalkan ramalannya."
            }, {
                "passage": "書評欄の 文章には、次の ような 一文が あった。 あの 店の 接客 ______、混んでいても いつも 丁寧だ。 文脈と レジスターの 両方を 手がかりに 選ぶ 問題だ。",
                "questionId": "39",
                "options": [
                    "と きたら",
                    "といえば",
                    "にしては",
                    "からして"
                ],
                "answer": "と きたら",
                "translation": "Kalau soal pelayanan toko itu, meski ramai selalu sopan."
            }, {
                "passage": "論壇記事の 文末には、こう 締めくくられていた。 彼の 忘れ物 ______、いくら 注意しても 直らない。 語感の 厳密さまで 求められる。",
                "questionId": "40",
                "options": [
                    "と きたら",
                    "といえば",
                    "にしては",
                    "からして"
                ],
                "answer": "と きたら",
                "translation": "Kebiasaan lupanya itu, sudah diingatkan berkali-kali tetap tak berubah."
            }, {
                "passage": "社説の 一節には、次の ような 表現が 用いられていた。 円安 ______、原料不足も 価格上昇に 拍車を かけている。 前後の 論理だけでなく、文体の 格も 問われる。",
                "questionId": "41",
                "options": [
                    "と 相まって",
                    "に 伴って",
                    "につれて",
                    "ばかりか"
                ],
                "answer": "と 相まって",
                "translation": "Bersamaan dengan lemahnya yen, kekurangan bahan baku turut mempercepat kenaikan harga."
            }, {
                "passage": "政策提言の 文書を 読むと、次の 一文が 目を 引いた。 豊富な 経験 ______、彼の 冷静な 判断が チームを 救った。 微妙な 含意の 違いまで 見抜きたい。",
                "questionId": "42",
                "options": [
                    "と 相まって",
                    "に 伴って",
                    "につれて",
                    "ばかりか"
                ],
                "answer": "と 相まって",
                "translation": "Dipadukan dengan pengalaman melimpah, penilaiannya yang tenang menyelamatkan tim."
            }, {
                "passage": "文化論の エッセイには、こうした 言い回しが あった。 駅近という 利便性 ______、家賃の 安さも 人気の 理由だ。 文脈と レジスターの 両方を 手がかりに 選ぶ 問題だ。",
                "questionId": "43",
                "options": [
                    "と 相まって",
                    "に 伴って",
                    "につれて",
                    "ばかりか"
                ],
                "answer": "と 相まって",
                "translation": "Dipadukan dengan lokasi dekat stasiun, harga sewa murah juga jadi alasan populer."
            }, {
                "passage": "専門家の 講演録には、次の 一節が 含まれていた。 SNSでの 拡散 ______、テレビ報道まで 入って 一気に 知名度が 上がった。 語感の 厳密さまで 求められる。",
                "questionId": "44",
                "options": [
                    "と 相まって",
                    "に 伴って",
                    "につれて",
                    "ばかりか"
                ],
                "answer": "と 相まって",
                "translation": "Bersamaan dengan penyebaran di SNS, liputan TV pun masuk dan popularitas naik pesat."
            }, {
                "passage": "長期的な 社会変化を 論じた 文章には、こう 書かれていた。 基本的な あいさつも できない ______、接客の 仕事は 任せられない。 前後の 論理だけでなく、文体の 格も 問われる。",
                "questionId": "45",
                "options": [
                    "ようでは",
                    "ようなら",
                    "ようで",
                    "ように"
                ],
                "answer": "ようでは",
                "translation": "Kalau sampai salam dasar pun tidak bisa, pekerjaan layanan pelanggan tak bisa diserahkan."
            }, {
                "passage": "調査報告書の 総括部分には、次の 表現が 見られた。 締め切りを 毎回 守れない ______、信頼を 失っても 仕方がない。 微妙な 含意の 違いまで 見抜きたい。",
                "questionId": "46",
                "options": [
                    "ようでは",
                    "ようなら",
                    "ようで",
                    "ように"
                ],
                "answer": "ようでは",
                "translation": "Kalau sampai selalu gagal memenuhi tenggat, wajar jika kehilangan kepercayaan."
            }, {
                "passage": "書評欄の 文章には、次の ような 一文が あった。 説明を 読んでも 操作できない ______、導入は 難しい。 文脈と レジスターの 両方を 手がかりに 選ぶ 問題だ。",
                "questionId": "47",
                "options": [
                    "ようでは",
                    "ようなら",
                    "ようで",
                    "ように"
                ],
                "answer": "ようでは",
                "translation": "Kalau sampai setelah membaca penjelasan pun tak bisa mengoperasikan, penerapan akan sulit."
            }, {
                "passage": "論壇記事の 文末には、こう 締めくくられていた。 自分の ミスを 認めない ______、成長は 望めない。 語感の 厳密さまで 求められる。",
                "questionId": "48",
                "options": [
                    "ようでは",
                    "ようなら",
                    "ようで",
                    "ように"
                ],
                "answer": "ようでは",
                "translation": "Kalau sampai tidak mau mengakui kesalahan sendiri, perkembangan tak bisa diharapkan."
            }, {
                "passage": "社説の 一節には、次の ような 表現が 用いられていた。 現場の 協力 ______、この 計画は 成立しなかった。 前後の 論理だけでなく、文体の 格も 問われる。",
                "questionId": "49",
                "options": [
                    "なくしては",
                    "なしには",
                    "ないでは",
                    "ずには"
                ],
                "answer": "なくしては",
                "translation": "Tanpa kerja sama lapangan, rencana ini tak akan terwujud."
            }, {
                "passage": "政策提言の 文書を 読むと、次の 一文が 目を 引いた。 日々の 努力 ______、今の 成果は あり得ない。 微妙な 含意の 違いまで 見抜きたい。",
                "questionId": "50",
                "options": [
                    "なくしては",
                    "なしには",
                    "ないでは",
                    "ずには"
                ],
                "answer": "なくしては",
                "translation": "Tanpa usaha harian, hasil seperti sekarang mustahil ada."
            }, {
                "passage": "文化論の エッセイには、こうした 言い回しが あった。 地域住民の 理解 ______、再開発は 前に 進まない。 文脈と レジスターの 両方を 手がかりに 選ぶ 問題だ。",
                "questionId": "51",
                "options": [
                    "なくしては",
                    "なしには",
                    "ないでは",
                    "ずには"
                ],
                "answer": "なくしては",
                "translation": "Tanpa pemahaman warga setempat, pembangunan ulang tak akan maju."
            }, {
                "passage": "専門家の 講演録には、次の 一節が 含まれていた。 信頼関係 ______、長期的な 取引は 成り立たない。 語感の 厳密さまで 求められる。",
                "questionId": "52",
                "options": [
                    "なくしては",
                    "なしには",
                    "ないでは",
                    "ずには"
                ],
                "answer": "なくしては",
                "translation": "Tanpa hubungan saling percaya, transaksi jangka panjang tak akan berjalan."
            }, {
                "passage": "長期的な 社会変化を 論じた 文章には、こう 書かれていた。 老舗旅館 ______ の 細やかな もてなしに 感動した。 前後の 論理だけでなく、文体の 格も 問われる。",
                "questionId": "53",
                "options": [
                    "ならでは",
                    "だけの",
                    "らしい",
                    "向きの"
                ],
                "answer": "ならでは",
                "translation": "Saya terkesan oleh pelayanan rinci yang khas ryokan lama."
            }, {
                "passage": "調査報告書の 総括部分には、次の 表現が 見られた。 職人 ______ の 手仕事が 光る 一品だ。 微妙な 含意の 違いまで 見抜きたい。",
                "questionId": "54",
                "options": [
                    "ならでは",
                    "だけの",
                    "らしい",
                    "向きの"
                ],
                "answer": "ならでは",
                "translation": "Ini adalah karya yang menonjolkan keterampilan tangan khas perajin."
            }, {
                "passage": "書評欄の 文章には、次の ような 一文が あった。 地方都市 ______ の 落ち着いた 雰囲気が 残っている。 文脈と レジスターの 両方を 手がかりに 選ぶ 問題だ。",
                "questionId": "55",
                "options": [
                    "ならでは",
                    "だけの",
                    "らしい",
                    "向きの"
                ],
                "answer": "ならでは",
                "translation": "Masih tersisa suasana tenang yang khas kota daerah."
            }, {
                "passage": "論壇記事の 文末には、こう 締めくくられていた。 長年 研究してきた 彼 ______ の 視点だと 感じた。 語感の 厳密さまで 求められる。",
                "questionId": "56",
                "options": [
                    "ならでは",
                    "だけの",
                    "らしい",
                    "向きの"
                ],
                "answer": "ならでは",
                "translation": "Saya merasa itu sudut pandang yang khas dia, hasil riset bertahun-tahun."
            }, {
                "passage": "社説の 一節には、次の ような 表現が 用いられていた。 被災地の 写真は 見る ______ 痛ましさだった。 前後の 論理だけでなく、文体の 格も 問われる。",
                "questionId": "57",
                "options": [
                    "に 堪えない",
                    "ざるを 得ない",
                    "に すぎない",
                    "ことは ない"
                ],
                "answer": "に 堪えない",
                "translation": "Foto daerah bencana begitu memilukan hingga sulit ditonton."
            }, {
                "passage": "政策提言の 文書を 読むと、次の 一文が 目を 引いた。 彼の 誠実な あいさつには 感動を 禁じ ______。 微妙な 含意の 違いまで 見抜きたい。",
                "questionId": "58",
                "options": [
                    "に 堪えない",
                    "ざるを 得ない",
                    "に すぎない",
                    "ことは ない"
                ],
                "answer": "に 堪えない",
                "translation": "Sapaan tulusnya begitu menyentuh hingga sulit menahan haru."
            }, {
                "passage": "文化論の エッセイには、こうした 言い回しが あった。 その 報告書は 読む ______ 内容だった。 文脈と レジスターの 両方を 手がかりに 選ぶ 問題だ。",
                "questionId": "59",
                "options": [
                    "に 堪えない",
                    "ざるを 得ない",
                    "に すぎない",
                    "ことは ない"
                ],
                "answer": "に 堪えない",
                "translation": "Laporan itu berisi hal-hal yang sungguh tak tertahankan untuk dibaca."
            }, {
                "passage": "専門家の 講演録には、次の 一節が 含まれていた。 長年の 努力が 実った 瞬間は、喜びに 堪え ______ ものだった。 語感の 厳密さまで 求められる。",
                "questionId": "60",
                "options": [
                    "に 堪えない",
                    "ざるを 得ない",
                    "に すぎない",
                    "ことは ない"
                ],
                "answer": "に 堪えない",
                "translation": "Momen ketika usaha bertahun-tahun membuahkan hasil adalah sesuatu yang sulit menahan sukacita."
            }, {
                "passage": "長期的な 社会変化を 論じた 文章には、こう 書かれていた。 突然の 豪雨で、イベントの 中止 ______ た。 前後の 論理だけでなく、文体の 格も 問われる。",
                "questionId": "61",
                "options": [
                    "を 余儀なくされ",
                    "を ものともせず",
                    "を 禁じ得ず",
                    "に 足る"
                ],
                "answer": "を 余儀なくされ",
                "translation": "Karena hujan deras mendadak, acara terpaksa dibatalkan."
            }, {
                "passage": "調査報告書の 総括部分には、次の 表現が 見られた。 原材料の 不足により、生産計画の 見直し ______ た。 微妙な 含意の 違いまで 見抜きたい。",
                "questionId": "62",
                "options": [
                    "を 余儀なくされ",
                    "を ものともせず",
                    "を 禁じ得ず",
                    "に 足る"
                ],
                "answer": "を 余儀なくされ",
                "translation": "Akibat kekurangan bahan baku, peninjauan ulang rencana produksi terpaksa dilakukan."
            }, {
                "passage": "書評欄の 文章には、次の ような 一文が あった。 感染拡大を 受け、会議は オンライン開催 ______ た。 文脈と レジスターの 両方を 手がかりに 選ぶ 問題だ。",
                "questionId": "63",
                "options": [
                    "を 余儀なくされ",
                    "を ものともせず",
                    "を 禁じ得ず",
                    "に 足る"
                ],
                "answer": "を 余儀なくされ",
                "translation": "Karena penyebaran infeksi, rapat terpaksa diadakan secara online."
            }, {
                "passage": "論壇記事の 文末には、こう 締めくくられていた。 設備の 老朽化で、長期休業 ______ た。 語感の 厳密さまで 求められる。",
                "questionId": "64",
                "options": [
                    "を 余儀なくされ",
                    "を ものともせず",
                    "を 禁じ得ず",
                    "に 足る"
                ],
                "answer": "を 余儀なくされ",
                "translation": "Karena fasilitas menua, penutupan jangka panjang terpaksa dilakukan."
            }, {
                "passage": "社説の 一節には、次の ような 表現が 用いられていた。 彼は 激しい 反対 ______、計画を 最後まで 押し通した。 前後の 論理だけでなく、文体の 格も 問われる。",
                "questionId": "65",
                "options": [
                    "を ものともせず",
                    "を 余儀なくされ",
                    "に 堪えず",
                    "に 足る"
                ],
                "answer": "を ものともせず",
                "translation": "Dia tetap memaksakan rencana sampai akhir tanpa gentar pada tentangan keras."
            }, {
                "passage": "政策提言の 文書を 読むと、次の 一文が 目を 引いた。 選手たちは 悪天候 ______、自己ベストを 更新した。 微妙な 含意の 違いまで 見抜きたい。",
                "questionId": "66",
                "options": [
                    "を ものともせず",
                    "を 余儀なくされ",
                    "に 堪えず",
                    "に 足る"
                ],
                "answer": "を ものともせず",
                "translation": "Para atlet memecahkan rekor pribadi tanpa menghiraukan cuaca buruk."
            }, {
                "passage": "文化論の エッセイには、こうした 言い回しが あった。 彼女は 周囲の 批判 ______、自分の 道を 選んだ。 文脈と レジスターの 両方を 手がかりに 選ぶ 問題だ。",
                "questionId": "67",
                "options": [
                    "を ものともせず",
                    "を 余儀なくされ",
                    "に 堪えず",
                    "に 足る"
                ],
                "answer": "を ものともせず",
                "translation": "Dia memilih jalannya sendiri tanpa gentar pada kritik sekitar."
            }, {
                "passage": "専門家の 講演録には、次の 一節が 含まれていた。 消防隊は 燃えさかる 炎 ______、建物の 中へ 入っていった。 語感の 厳密さまで 求められる。",
                "questionId": "68",
                "options": [
                    "を ものともせず",
                    "を 余儀なくされ",
                    "に 堪えず",
                    "に 足る"
                ],
                "answer": "を ものともせず",
                "translation": "Tim pemadam masuk ke dalam bangunan tanpa gentar pada kobaran api."
            }, {
                "passage": "長期的な 社会変化を 論じた 文章には、こう 書かれていた。 子ども ______、してよいことと 悪いことの 区別は つく。 前後の 論理だけでなく、文体の 格も 問われる。",
                "questionId": "69",
                "options": [
                    "と いえども",
                    "とはいえ",
                    "にしても",
                    "にしては"
                ],
                "answer": "と いえども",
                "translation": "Sekalipun anak-anak, mereka tetap bisa membedakan yang baik dan buruk."
            }, {
                "passage": "調査報告書の 総括部分には、次の 表現が 見られた。 専門家 ______、すべてを 予測できる わけでは ない。 微妙な 含意の 違いまで 見抜きたい。",
                "questionId": "70",
                "options": [
                    "と いえども",
                    "とはいえ",
                    "にしても",
                    "にしては"
                ],
                "answer": "と いえども",
                "translation": "Sekalipun ahli, bukan berarti bisa memprediksi segalanya."
            }, {
                "passage": "書評欄の 文章には、次の ような 一文が あった。 どんな 名店 ______、ミスが まったく ないとは 限らない。 文脈と レジスターの 両方を 手がかりに 選ぶ 問題だ。",
                "questionId": "71",
                "options": [
                    "と いえども",
                    "とはいえ",
                    "にしても",
                    "にしては"
                ],
                "answer": "と いえども",
                "translation": "Sekalipun toko terkenal, tidak berarti sama sekali tak punya kesalahan."
            }, {
                "passage": "論壇記事の 文末には、こう 締めくくられていた。 一度の 失敗 ______、努力全体を 否定する 理由には ならない。 語感の 厳密さまで 求められる。",
                "questionId": "72",
                "options": [
                    "と いえども",
                    "とはいえ",
                    "にしても",
                    "にしては"
                ],
                "answer": "と いえども",
                "translation": "Sekalipun hanya satu kegagalan, itu bukan alasan menolak semua usaha."
            }, {
                "passage": "社説の 一節には、次の ような 表現が 用いられていた。 年度末 ______、どの 部署も 一気に 忙しくなる。 前後の 論理だけでなく、文体の 格も 問われる。",
                "questionId": "73",
                "options": [
                    "ともなると",
                    "となると",
                    "に なると",
                    "に して"
                ],
                "answer": "ともなると",
                "translation": "Begitu memasuki akhir tahun fiskal, semua divisi mendadak sibuk."
            }, {
                "passage": "政策提言の 文書を 読むと、次の 一文が 目を 引いた。 東京の 中心部で 新築 ______、家賃は 相当 高い。 微妙な 含意の 違いまで 見抜きたい。",
                "questionId": "74",
                "options": [
                    "ともなると",
                    "となると",
                    "に なると",
                    "に して"
                ],
                "answer": "ともなると",
                "translation": "Kalau sudah bicara bangunan baru di pusat Tokyo, sewa tentu sangat mahal."
            }, {
                "passage": "文化論の エッセイには、こうした 言い回しが あった。 責任者 ______、軽々しく 発言は できない。 文脈と レジスターの 両方を 手がかりに 選ぶ 問題だ。",
                "questionId": "75",
                "options": [
                    "ともなると",
                    "となると",
                    "に なると",
                    "に して"
                ],
                "answer": "ともなると",
                "translation": "Kalau sudah jadi penanggung jawab, tidak bisa bicara sembarangan."
            }, {
                "passage": "専門家の 講演録には、次の 一節が 含まれていた。 プロの 試合 ______、一つの ミスが 致命的に なる。 語感の 厳密さまで 求められる。",
                "questionId": "76",
                "options": [
                    "ともなると",
                    "となると",
                    "に なると",
                    "に して"
                ],
                "answer": "ともなると",
                "translation": "Kalau sudah pertandingan profesional, satu kesalahan bisa fatal."
            }, {
                "passage": "長期的な 社会変化を 論じた 文章には、こう 書かれていた。 締め切りまで 一日 ______ 無駄には できない。 前後の 論理だけでなく、文体の 格も 問われる。",
                "questionId": "77",
                "options": [
                    "たりとも",
                    "さえ",
                    "ほど",
                    "まで"
                ],
                "answer": "たりとも",
                "translation": "Sampai tenggat, bahkan satu hari pun tak bisa disia-siakan."
            }, {
                "passage": "調査報告書の 総括部分には、次の 表現が 見られた。 この 企画では 一円 ______ 無駄に したくない。 微妙な 含意の 違いまで 見抜きたい。",
                "questionId": "78",
                "options": [
                    "たりとも",
                    "さえ",
                    "ほど",
                    "まで"
                ],
                "answer": "たりとも",
                "translation": "Dalam proyek ini, bahkan satu yen pun tak ingin saya sia-siakan."
            }, {
                "passage": "書評欄の 文章には、次の ような 一文が あった。 安全確認を 一瞬 ______ おろそかに しては ならない。 文脈と レジスターの 両方を 手がかりに 選ぶ 問題だ。",
                "questionId": "79",
                "options": [
                    "たりとも",
                    "さえ",
                    "ほど",
                    "まで"
                ],
                "answer": "たりとも",
                "translation": "Pemeriksaan keselamatan tak boleh diabaikan bahkan sedetik pun."
            }, {
                "passage": "論壇記事の 文末には、こう 締めくくられていた。 彼は 一言 ______ 不満を 口に しなかった。 語感の 厳密さまで 求められる。",
                "questionId": "80",
                "options": [
                    "たりとも",
                    "さえ",
                    "ほど",
                    "まで"
                ],
                "answer": "たりとも",
                "translation": "Dia tak mengeluh bahkan satu kata pun."
            }, {
                "passage": "社説の 一節には、次の ような 表現が 用いられていた。 彼の 提案は 再検討に ______ 内容だ。 前後の 論理だけでなく、文体の 格も 問われる。",
                "questionId": "81",
                "options": [
                    "に 足る",
                    "に 堪える",
                    "に 即した",
                    "に 反した"
                ],
                "answer": "に 足る",
                "translation": "Usulan itu layak untuk dipertimbangkan ulang."
            }, {
                "passage": "政策提言の 文書を 読むと、次の 一文が 目を 引いた。 この 資料は 参考に ______ ものだと 思う。 微妙な 含意の 違いまで 見抜きたい。",
                "questionId": "82",
                "options": [
                    "に 足る",
                    "に 堪える",
                    "に 即した",
                    "に 反した"
                ],
                "answer": "に 足る",
                "translation": "Saya pikir materi ini layak dijadikan referensi."
            }, {
                "passage": "文化論の エッセイには、こうした 言い回しが あった。 彼の 行動は 十分に 評価に ______。 文脈と レジスターの 両方を 手がかりに 選ぶ 問題だ。",
                "questionId": "83",
                "options": [
                    "に 足る",
                    "に 堪える",
                    "に 即した",
                    "に 反した"
                ],
                "answer": "に 足る",
                "translation": "Tindakannya cukup layak mendapat penilaian."
            }, {
                "passage": "専門家の 講演録には、次の 一節が 含まれていた。 その 研究は 学術的にも 注目に ______。 語感の 厳密さまで 求められる。",
                "questionId": "84",
                "options": [
                    "に 足る",
                    "に 堪える",
                    "に 即した",
                    "に 反した"
                ],
                "answer": "に 足る",
                "translation": "Penelitian itu juga layak mendapat perhatian akademis."
            }, {
                "passage": "長期的な 社会変化を 論じた 文章には、こう 書かれていた。 長年 続いた 店が 閉まると 聞き、寂しさ ______。 前後の 論理だけでなく、文体の 格も 問われる。",
                "questionId": "85",
                "options": [
                    "を 禁じ得ない",
                    "に 堪えない",
                    "を 余儀なくされる",
                    "を ものともせず"
                ],
                "answer": "を 禁じ得ない",
                "translation": "Mendengar toko yang berjalan lama itu tutup, saya tak bisa menahan rasa sedih."
            }, {
                "passage": "調査報告書の 総括部分には、次の 表現が 見られた。 被災地の 現状を 前に、言葉を 失うと 同時に 驚き ______。 微妙な 含意の 違いまで 見抜きたい。",
                "questionId": "86",
                "options": [
                    "を 禁じ得ない",
                    "に 堪えない",
                    "を 余儀なくされる",
                    "を ものともせず"
                ],
                "answer": "を 禁じ得ない",
                "translation": "Di hadapan keadaan daerah bencana, saya sekaligus tak bisa menahan keterkejutan."
            }, {
                "passage": "書評欄の 文章には、次の ような 一文が あった。 彼の 成長ぶりを 見て、感動 ______。 文脈と レジスターの 両方を 手がかりに 選ぶ 問題だ。",
                "questionId": "87",
                "options": [
                    "を 禁じ得ない",
                    "に 堪えない",
                    "を 余儀なくされる",
                    "を ものともせず"
                ],
                "answer": "を 禁じ得ない",
                "translation": "Melihat perkembangannya, saya tak bisa menahan haru."
            }, {
                "passage": "論壇記事の 文末には、こう 締めくくられていた。 その 判決の 重さに、怒り ______ 市民も 多かった。 語感の 厳密さまで 求められる。",
                "questionId": "88",
                "options": [
                    "を 禁じ得ない",
                    "に 堪えない",
                    "を 余儀なくされる",
                    "を ものともせず"
                ],
                "answer": "を 禁じ得ない",
                "translation": "Banyak warga yang tak bisa menahan amarah pada beratnya putusan itu."
            }, {
                "passage": "社説の 一節には、次の ような 表現が 用いられていた。 関係者以外、立ち入る ______。 前後の 論理だけでなく、文体の 格も 問われる。",
                "questionId": "89",
                "options": [
                    "べからず",
                    "べきではない",
                    "てはならない",
                    "にすぎない"
                ],
                "answer": "べからず",
                "translation": "Selain pihak terkait, dilarang masuk."
            }, {
                "passage": "政策提言の 文書を 読むと、次の 一文が 目を 引いた。 試験中、私語する ______。 微妙な 含意の 違いまで 見抜きたい。",
                "questionId": "90",
                "options": [
                    "べからず",
                    "べきではない",
                    "てはならない",
                    "にすぎない"
                ],
                "answer": "べからず",
                "translation": "Saat ujian, dilarang berbicara."
            }, {
                "passage": "文化論の エッセイには、こうした 言い回しが あった。 資料の 無断転載、厳に 行う ______。 文脈と レジスターの 両方を 手がかりに 選ぶ 問題だ。",
                "questionId": "91",
                "options": [
                    "べからず",
                    "べきではない",
                    "てはならない",
                    "にすぎない"
                ],
                "answer": "べからず",
                "translation": "Dilarang keras mereproduksi materi tanpa izin."
            }, {
                "passage": "専門家の 講演録には、次の 一節が 含まれていた。 館内にて 飲食する ______。 語感の 厳密さまで 求められる。",
                "questionId": "92",
                "options": [
                    "べからず",
                    "べきではない",
                    "てはならない",
                    "にすぎない"
                ],
                "answer": "べからず",
                "translation": "Di dalam gedung, dilarang makan dan minum."
            }, {
                "passage": "長期的な 社会変化を 論じた 文章には、こう 書かれていた。 結局、先輩には 最後まで 謝れ ______ だった。 前後の 論理だけでなく、文体の 格も 問われる。",
                "questionId": "93",
                "options": [
                    "ずじまい",
                    "ばかりだ",
                    "きりだ",
                    "まみれ"
                ],
                "answer": "ずじまい",
                "translation": "Akhirnya saya berakhir tanpa sempat meminta maaf pada senior."
            }, {
                "passage": "調査報告書の 総括部分には、次の 表現が 見られた。 忙しくて、気になっていた 展覧会にも 行け ______ だった。 微妙な 含意の 違いまで 見抜きたい。",
                "questionId": "94",
                "options": [
                    "ずじまい",
                    "ばかりだ",
                    "きりだ",
                    "まみれ"
                ],
                "answer": "ずじまい",
                "translation": "Karena sibuk, saya berakhir tanpa sempat pergi ke pameran yang membuat penasaran."
            }, {
                "passage": "書評欄の 文章には、次の ような 一文が あった。 その 件は 確認しようと 思いながら、連絡し ______ だった。 文脈と レジスターの 両方を 手がかりに 選ぶ 問題だ。",
                "questionId": "95",
                "options": [
                    "ずじまい",
                    "ばかりだ",
                    "きりだ",
                    "まみれ"
                ],
                "answer": "ずじまい",
                "translation": "Meski berniat mengecek, saya berakhir tanpa menghubungi soal itu."
            }, {
                "passage": "論壇記事の 文末には、こう 締めくくられていた。 せっかく 招待されたのに、予定が 合わず 参加でき ______ だった。 語感の 厳密さまで 求められる。",
                "questionId": "96",
                "options": [
                    "ずじまい",
                    "ばかりだ",
                    "きりだ",
                    "まみれ"
                ],
                "answer": "ずじまい",
                "translation": "Padahal sudah diundang, saya berakhir tak bisa ikut karena jadwal tak cocok."
            }, {
                "passage": "社説の 一節には、次の ような 表現が 用いられていた。 先生の 早い 回復を 願っ ______。 前後の 論理だけでなく、文体の 格も 問われる。",
                "questionId": "97",
                "options": [
                    "て やまない",
                    "て たまらない",
                    "ずには いられない",
                    "に ちがいない"
                ],
                "answer": "て やまない",
                "translation": "Saya terus mendoakan kesembuhan cepat guru itu."
            }, {
                "passage": "政策提言の 文書を 読むと、次の 一文が 目を 引いた。 地域の 復興を 祈っ ______ 人は 多い。 微妙な 含意の 違いまで 見抜きたい。",
                "questionId": "98",
                "options": [
                    "て やまない",
                    "て たまらない",
                    "ずには いられない",
                    "に ちがいない"
                ],
                "answer": "て やまない",
                "translation": "Banyak orang terus mendoakan pemulihan daerah itu."
            }, {
                "passage": "文化論の エッセイには、こうした 言い回しが あった。 彼女の 今後の 活躍を 期待し ______。 文脈と レジスターの 両方を 手がかりに 選ぶ 問題だ。",
                "questionId": "99",
                "options": [
                    "て やまない",
                    "て たまらない",
                    "ずには いられない",
                    "に ちがいない"
                ],
                "answer": "て やまない",
                "translation": "Saya terus menaruh harapan pada kiprah dia ke depan."
            }, {
                "passage": "専門家の 講演録には、次の 一節が 含まれていた。 その 取り組みが 広く 社会に 伝わることを 願っ ______。 語感の 厳密さまで 求められる。",
                "questionId": "100",
                "options": [
                    "て やまない",
                    "て たまらない",
                    "ずには いられない",
                    "に ちがいない"
                ],
                "answer": "て やまない",
                "translation": "Saya terus berharap upaya itu tersebar luas ke masyarakat."
            }
        ]
    }
};