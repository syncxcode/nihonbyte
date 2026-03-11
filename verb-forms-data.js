(function initVerbFormsData() {
  const LEVEL_ORDER = ["N5", "N4", "N3", "N2", "N1"];

  // =========================================================================
  // DATA KALIMAT NATURAL - TAHAP 1: VF-01
  // =========================================================================
  const manualForms = [
    {
      id: "vf-01",
      level: "N5",
      order: 1,
      title: "~る • Bentuk Kamus (Present/Future Plain)",
      summary: "Bentuk dasar kata kerja, digunakan untuk kalimat santai (plain) masa kini atau masa depan.",
      formulas: [
        { group: "Godan", rule: "Berakhiran vokal 'u' (u, ku, su, tsu, nu, mu, ru, gu, bu)." },
        { group: "Ichidan", rule: "Berakhiran -iru atau -eru." },
        { group: "Irregular", rule: "Hanya dua kata: する (suru) dan 来る (kuru)." }
      ],
      groups: [
        {
          name: "Godan",
          examples: [{
            base: "飲む", transformed: "飲む", kana: "のむ → のむ", romaji: "nomu → nomu", meaning: "minum",
            sentences: [
              { jp: "毎朝、冷たい水を飲む。", kana: "まいあさ、 つめたい みず を のむ。", romaji: "Maiasa, tsumetai mizu o nomu.", meaning: "Setiap pagi, saya minum air dingin." },
              { jp: "週末に友達とお酒を飲む。", kana: "しゅうまつ に ともだち と おさけ を のむ。", romaji: "Shuumatsu ni tomodachi to osake o nomu.", meaning: "Di akhir pekan, saya minum sake bersama teman." },
              { jp: "風邪だから、薬を飲む。", kana: "かぜ だから、 くすり を のむ。", romaji: "Kaze dakara, kusuri o nomu.", meaning: "Karena masuk angin, saya minum obat." },
              { jp: "カフェで熱いコーヒーを飲む。", kana: "かふぇ で あつい こーひー を のむ。", romaji: "Kafe de atsui koohii o nomu.", meaning: "Saya minum kopi panas di kafe." },
              { jp: "寝る前に、温かいミルクを飲む。", kana: "ねる まえ に、 あたたかい みるく を のむ。", romaji: "Neru mae ni, atatakai miruku o nomu.", meaning: "Sebelum tidur, saya minum susu hangat." },
              { jp: "暑いから、冷たいお茶を飲む。", kana: "あつい から、 つめたい おちゃ を のむ。", romaji: "Atsui kara, tsumetai ocha o nomu.", meaning: "Karena panas, saya minum teh dingin." },
              { jp: "毎日二リットルの水を飲む。", kana: "まいにち に りっとる の みず を のむ。", romaji: "Mainichi ni-rittoru no mizu o nomu.", meaning: "Saya minum dua liter air setiap hari." },
              { jp: "仕事の後にビールを飲む。", kana: "しごと の あと に びーる を のむ。", romaji: "Shigoto no ato ni biiru o nomu.", meaning: "Setelah bekerja, saya minum bir." },
              { jp: "甘いジュースをたくさん飲む。", kana: "あまい じゅーす を たくさん のむ。", romaji: "Amai juusu o takusan nomu.", meaning: "Saya banyak minum jus manis." },
              { jp: "朝ごはんと一緒にスープを飲む。", kana: "あさごはん と いっしょ に すーぷ を のむ。", romaji: "Asagohan to issho ni suupu o nomu.", meaning: "Saya minum sup bersama dengan sarapan." }
            ]
          }]
        },
        {
          name: "Ichidan",
          examples: [{
            base: "見る", transformed: "見る", kana: "みる → みる", romaji: "miru → miru", meaning: "melihat / menonton",
            sentences: [
              { jp: "今夜、面白い映画を見る。", kana: "こんや、 おもしろい えいが を みる。", romaji: "Kon'ya, omoshiroi eiga o miru.", meaning: "Nanti malam, saya akan menonton film yang menarik." },
              { jp: "毎晩、日本のアニメを見る。", kana: "まいばん、 にほん の あにめ を みる。", romaji: "Maiban, Nihon no anime o miru.", meaning: "Setiap malam saya menonton anime Jepang." },
              { jp: "スマホでよくニュースを見る。", kana: "すまほ で よく にゅーす を みる。", romaji: "Sumaho de yoku nyuusu o miru.", meaning: "Saya sering melihat berita di HP." },
              { jp: "窓からきれいな海を見る。", kana: "まど から きれいな うみ を みる。", romaji: "Mado kara kireina umi o miru.", meaning: "Saya melihat laut yang indah dari jendela." },
              { jp: "休みの日にYouTubeを見る。", kana: "やすみ の ひ に ゆーちゅーぶ を みる。", romaji: "Yasumi no hi ni yuuchuubu o miru.", meaning: "Di hari libur, saya menonton YouTube." },
              { jp: "試合を見るためにスタジアムへ行く。", kana: "しあい を みる ため に すたじあむ へ いく。", romaji: "Shiai o miru tame ni sutajiamu e iku.", meaning: "Saya pergi ke stadion untuk menonton pertandingan." },
              { jp: "夜はきれいな星を見る。", kana: "よる は きれいな ほし を みる。", romaji: "Yoru wa kireina hoshi o miru.", meaning: "Malam hari saya melihat bintang yang indah." },
              { jp: "毎朝、天気予報を見る。", kana: "まいあさ、 てんきよほう を みる。", romaji: "Maiasa, tenki yohou o miru.", meaning: "Setiap pagi saya melihat ramalan cuaca." },
              { jp: "友達の新しい写真を見る。", kana: "ともだち の あたらしい しゃしん を みる。", romaji: "Tomodachi no atarashii shashin o miru.", meaning: "Saya melihat foto baru milik teman." },
              { jp: "自分の顔を鏡で見る。", kana: "じぶん の かお を かがみ で みる。", romaji: "Jibun no kao o kagami de miru.", meaning: "Saya melihat wajah sendiri di cermin." }
            ]
          }]
        },
        {
          name: "Irregular",
          examples: [{
            base: "勉強する", transformed: "勉強する", kana: "べんきょうする → べんきょうする", romaji: "benkyou suru → benkyou suru", meaning: "belajar",
            sentences: [
              { jp: "図書館で日本語を勉強する。", kana: "としょかん で にほんご を べんきょうする。", romaji: "Toshokan de nihongo o benkyou suru.", meaning: "Saya belajar bahasa Jepang di perpustakaan." },
              { jp: "毎日三時間くらい勉強する。", kana: "まいにち さんじかん くらい べんきょうする。", romaji: "Mainichi san-jikan kurai benkyou suru.", meaning: "Saya belajar sekitar 3 jam setiap hari." },
              { jp: "日本へ留学するために勉強する。", kana: "にほん へ りゅうがく する ため に べんきょうする。", romaji: "Nihon e ryuugaku suru tame ni benkyou suru.", meaning: "Saya belajar demi kuliah ke Jepang." },
              { jp: "明日はテストだから、今夜は勉強する。", kana: "あした は てすと だから、 こんや は べんきょうする。", romaji: "Ashita wa tesuto dakara, kon'ya wa benkyou suru.", meaning: "Karena besok ujian, nanti malam saya belajar." },
              { jp: "週末はカフェで英語を勉強する。", kana: "しゅうまつ は かふぇ で えいご を べんきょうする。", romaji: "Shuumatsu wa kafe de eigo o benkyou suru.", meaning: "Akhir pekan saya belajar bahasa Inggris di kafe." },
              { jp: "将来のために、もっと勉強する。", kana: "しょうらい の ため に、 もっと べんきょうする。", romaji: "Shourai no tame ni, motto benkyou suru.", meaning: "Saya belajar lebih banyak demi masa depan." },
              { jp: "友達と一緒に数学を勉強する。", kana: "ともだち と いっしょ に すうがく を べんきょうする。", romaji: "Tomodachi to issho ni suugaku o benkyou suru.", meaning: "Saya belajar matematika bersama teman." },
              { jp: "新しい漢字を毎日勉強する。", kana: "あたらしい かんじ を まいにち べんきょうする。", romaji: "Atarashii kanji o mainichi benkyou suru.", meaning: "Saya belajar kanji baru setiap hari." },
              { jp: "仕事の後にプログラミングを勉強する。", kana: "しごと の あと に ぷろぐらみんぐ を べんきょうする。", romaji: "Shigoto no ato ni puroguramingu o benkyou suru.", meaning: "Setelah bekerja, saya belajar programming." },
              { jp: "先生の部屋で少し勉強する。", kana: "せんせい の へや で すこし べんきょうする。", romaji: "Sensei no heya de sukoshi benkyou suru.", meaning: "Saya belajar sebentar di ruangan guru." }
            ]
          }]
        }
      ]
    },
	{
      id: "vf-02",
      level: "N5",
      order: 2,
      title: "~ない • Bentuk Negatif Plain",
      summary: "Bentuk negatif santai (tidak melakukan), sering dipakai dalam percakapan santai.",
      formulas: [
        { group: "Godan", rule: "Ubah vokal 'u' terakhir menjadi 'a', lalu tambah ない. (Pengecualian: 'u' berubah jadi 'wa')." },
        { group: "Ichidan", rule: "Hapus 'ru' di akhir, ganti dengan ない." },
        { group: "Irregular", rule: "する (suru) jadi しない (shinai). 来る (kuru) jadi こない (konai)." }
      ],
      groups: [
        {
          name: "Godan",
          examples: [{
            base: "行く", transformed: "行かない", kana: "いく → いかない", romaji: "iku → ikanai", meaning: "tidak pergi",
            sentences: [
              { jp: "明日は日曜日だから、学校に行かない。", kana: "あした は にちようび だから、 がっこう に いかない。", romaji: "Ashita wa nichiyoubi dakara, gakkou ni ikanai.", meaning: "Karena besok hari Minggu, saya tidak pergi ke sekolah." },
              { jp: "今日は疲れたから、どこへも行かない。", kana: "きょう は つかれた から、 どこ へ も いかない。", romaji: "Kyou wa tsukareta kara, doko e mo ikanai.", meaning: "Karena hari ini lelah, saya tidak pergi ke mana pun." },
              { jp: "雨が降っているから、外に行かない。", kana: "あめ が ふっている から、 そと に いかない。", romaji: "Ame ga futte iru kara, soto ni ikanai.", meaning: "Karena hujan turun, saya tidak pergi ke luar." },
              { jp: "あの店は高いから、行かない。", kana: "あの みせ は たかい から、 いかない。", romaji: "Ano mise wa takai kara, ikanai.", meaning: "Toko itu mahal, jadi saya tidak pergi ke sana." },
              { jp: "今年の夏は海に行かない。", kana: "ことし の なつ は うみ に いかない。", romaji: "Kotoshi no natsu wa umi ni ikanai.", meaning: "Musim panas tahun ini saya tidak pergi ke laut." },
              { jp: "お金がないから、旅行に行かない。", kana: "おかね が ない から、 りょこう に いかない。", romaji: "Okane ga nai kara, ryokou ni ikanai.", meaning: "Karena tidak ada uang, saya tidak pergi liburan." },
              { jp: "暗いから、一人で行かない。", kana: "くらい から、 ひとり で いかない。", romaji: "Kurai kara, hitori de ikanai.", meaning: "Karena gelap, saya tidak pergi sendirian." },
              { jp: "明日の会議には行かない。", kana: "あした の かいぎ に は いかない。", romaji: "Ashita no kaigi ni wa ikanai.", meaning: "Saya tidak pergi ke rapat besok." },
              { jp: "遠いから、歩いて行かない。", kana: "とおい から、 あるいて いかない。", romaji: "Tooi kara, aruite ikanai.", meaning: "Karena jauh, saya tidak pergi dengan berjalan kaki." },
              { jp: "興味がないから、そのイベントに行かない。", kana: "きょうみ が ない から、 その いべんと に いかない。", romaji: "Kyoumi ga nai kara, sono ibento ni ikanai.", meaning: "Karena tidak tertarik, saya tidak pergi ke acara itu." }
            ]
          }]
        },
        {
          name: "Ichidan",
          examples: [{
            base: "食べる", transformed: "食べない", kana: "たべる → たべない", romaji: "taberu → tabenai", meaning: "tidak makan",
            sentences: [
              { jp: "私は豚肉を食べない。", kana: "わたし は ぶたにく を たべない。", romaji: "Watashi wa butaniku o tabenai.", meaning: "Saya tidak makan daging babi." },
              { jp: "時間がないから、朝ごはんは食べない。", kana: "じかん が ない から、 あさごはん は たべない。", romaji: "Jikan ga nai kara, asagohan wa tabenai.", meaning: "Karena tidak ada waktu, saya tidak sarapan." },
              { jp: "辛いものはあまり食べない。", kana: "からい もの は あまり たべない。", romaji: "Karai mono wa amari tabenai.", meaning: "Saya jarang makan makanan pedas." },
              { jp: "ダイエット中だから、甘いものを食べない。", kana: "だいえっと ちゅう だから、 あまい もの を たべない。", romaji: "Daietto chuu dakara, amai mono o tabenai.", meaning: "Karena sedang diet, saya tidak makan yang manis-manis." },
              { jp: "夜遅くには何も食べない。", kana: "よる おそく に は なにも たべない。", romaji: "Yoru osoku ni wa nanimo tabenai.", meaning: "Saya tidak makan apa pun saat larut malam." },
              { jp: "アレルギーがあるから、卵を食べない。", kana: "あれるぎー が ある から、 たまご を たべない。", romaji: "Arerugii ga aru kara, tamago o tabenai.", meaning: "Karena alergi, saya tidak makan telur." },
              { jp: "お腹がいっぱいだから、もう食べない。", kana: "おなか が いっぱい だから、 もう たべない。", romaji: "Onaka ga ippai dakara, mou tabenai.", meaning: "Karena sudah kenyang, saya tidak makan lagi." },
              { jp: "嫌いだから、野菜を食べない。", kana: "きらい だから、 やさい を たべない。", romaji: "Kirai dakara, yasai o tabenai.", meaning: "Karena tidak suka, saya tidak makan sayuran." },
              { jp: "そのケーキは美味しくないから、食べない。", kana: "その けーき は おいしく ない から、 たべない。", romaji: "Sono keeki wa oishikunai kara, tabenai.", meaning: "Kue itu tidak enak, jadi saya tidak memakannya." },
              { jp: "今日の晩ごはんは家で食べない。", kana: "きょう の ばんごはん は いえ で たべない。", romaji: "Kyou no bangohan wa ie de tabenai.", meaning: "Makan malam hari ini saya tidak makan di rumah." }
            ]
          }]
        },
        {
          name: "Irregular",
          examples: [{
            base: "する", transformed: "しない", kana: "する → しない", romaji: "suru → shinai", meaning: "tidak melakukan",
            sentences: [
              { jp: "明日は休みだから、仕事をしない。", kana: "あした は やすみ だから、 しごと を しない。", romaji: "Ashita wa yasumi dakara, shigoto o shinai.", meaning: "Karena besok libur, saya tidak bekerja." },
              { jp: "雨の日は運動しない。", kana: "あめ の ひ は うんどうしない。", romaji: "Ame no hi wa undou shinai.", meaning: "Di hari hujan, saya tidak berolahraga." },
              { jp: "私はそんなひどい事はしない。", kana: "わたし は そんな ひどい こと は しない。", romaji: "Watashi wa sonna hidoi koto wa shinai.", meaning: "Saya tidak melakukan hal kejam seperti itu." },
              { jp: "今日は日曜日だから、勉強しない。", kana: "きょう は にちようび だから、 べんきょうしない。", romaji: "Kyou wa nichiyoubi dakara, benkyou shinai.", meaning: "Hari ini hari Minggu, jadi saya tidak belajar." },
              { jp: "週末は部屋の掃除をしない。", kana: "しゅうまつ は へや の そうじ を しない。", romaji: "Shuumatsu wa heya no souji o shinai.", meaning: "Akhir pekan saya tidak membersihkan kamar." },
              { jp: "疲れたから、今日は残業しない。", kana: "つかれた から、 きょう は ざんぎょう しない。", romaji: "Tsukareta kara, kyou wa zangyou shinai.", meaning: "Karena lelah, hari ini saya tidak lembur." },
              { jp: "彼は決して無理をしない。", kana: "かれ は けっして むり を しない。", romaji: "Kare wa kesshite muri o shinai.", meaning: "Dia sama sekali tidak pernah memaksakan diri." },
              { jp: "料理が下手だから、料理をしない。", kana: "りょうり が へた だから、 りょうり を しない。", romaji: "Ryouri ga heta dakara, ryouri o shinai.", meaning: "Karena tidak pandai memasak, saya tidak memasak." },
              { jp: "危ないから、一人で運転しない。", kana: "あぶない から、 ひとり で うんてん しない。", romaji: "Abunai kara, hitori de unten shinai.", meaning: "Karena berbahaya, saya tidak menyetir sendirian." },
              { jp: "休みの日は何もしない。", kana: "やすみ の ひ は なにも しない。", romaji: "Yasumi no hi wa nanimo shinai.", meaning: "Di hari libur, saya tidak melakukan apa-apa." }
            ]
          }]
        }
      ]
    },
	{
      id: "vf-03",
      level: "N5",
      order: 3,
      title: "~ます • Bentuk Sopan Present/Future",
      summary: "Bentuk sopan formal (polite) untuk kebiasaan masa kini atau rencana di masa depan.",
      formulas: [
        { group: "Godan", rule: "Ubah vokal 'u' terakhir menjadi 'i', lalu tambahkan ます (Contoh: 行く → 行きます)." },
        { group: "Ichidan", rule: "Hapus 'ru' di akhir kata, lalu ganti dengan ます (Contoh: 起きる → 起きます)." },
        { group: "Irregular", rule: "する (suru) berubah menjadi します (shimasu). 来る (kuru) berubah menjadi きます (kimasu)." }
      ],
      groups: [
        {
          name: "Godan",
          examples: [{
            base: "行く", transformed: "行きます", kana: "いく → いきます", romaji: "iku → ikimasu", meaning: "pergi (sopan)",
            sentences: [
              { jp: "毎日、電車で学校へ行きます。", kana: "まいにち、 でんしゃ で がっこう へ いきます。", romaji: "Mainichi, densha de gakkou e ikimasu.", meaning: "Setiap hari, saya pergi ke sekolah dengan kereta." },
              { jp: "明日、東京へ行きます。", kana: "あした、 とうきょう へ いきます。", romaji: "Ashita, Toukyou e ikimasu.", meaning: "Besok, saya akan pergi ke Tokyo." },
              { jp: "週末に家族と海へ行きます。", kana: "しゅうまつ に かぞく と うみ へ いきます。", romaji: "Shuumatsu ni kazoku to umi e ikimasu.", meaning: "Di akhir pekan, saya pergi ke laut bersama keluarga." },
              { jp: "来年、日本へ行きます。", kana: "らいねん、 にほん へ いきます。", romaji: "Rainen, Nihon e ikimasu.", meaning: "Tahun depan, saya akan pergi ke Jepang." },
              { jp: "友達と一緒に買い物に行きます。", kana: "ともだち と いっしょ に かいもの に いきます。", romaji: "Tomodachi to issho ni kaimono ni ikimasu.", meaning: "Saya pergi berbelanja bersama teman." },
              { jp: "夏休みに旅行に行きます。", kana: "なつやすみ に りょこう に いきます。", romaji: "Natsuyasumi ni ryokou ni ikimasu.", meaning: "Saya akan pergi liburan pada liburan musim panas." },
              { jp: "晩ごはんはレストランに行きます。", kana: "ばんごはん は れすとらん に いきます。", romaji: "Bangohan wa resutoran ni ikimasu.", meaning: "Untuk makan malam, saya akan pergi ke restoran." },
              { jp: "これから病院に行きます。", kana: "これ から びょういん に いきます。", romaji: "Kore kara byouin ni ikimasu.", meaning: "Setelah ini saya akan pergi ke rumah sakit." },
              { jp: "日曜日によく教会に行きます。", kana: "にちようび に よく きょうかい に いきます。", romaji: "Nichiyoubi ni yoku kyoukai ni ikimasu.", meaning: "Pada hari Minggu saya sering pergi ke gereja." },
              { jp: "今から郵便局へ行きます。", kana: "いま から ゆうびんきょく へ いきます。", romaji: "Ima kara yuubinkyoku e ikimasu.", meaning: "Saya akan pergi ke kantor pos dari sekarang." }
            ]
          }]
        },
        {
          name: "Ichidan",
          examples: [{
            base: "起きる", transformed: "起きます", kana: "おきる → おきます", romaji: "okiru → okimasu", meaning: "bangun (sopan)",
            sentences: [
              { jp: "毎朝、６時に起きます。", kana: "まいあさ、 ろくじ に おきます。", romaji: "Maiasa, roku-ji ni okimasu.", meaning: "Setiap pagi, saya bangun jam 6." },
              { jp: "明日は早いので、５時に起きます。", kana: "あした は はやい ので、 ごじ に おきます。", romaji: "Ashita wa hayai node, go-ji ni okimasu.", meaning: "Karena besok harus pagi-pagi, saya akan bangun jam 5." },
              { jp: "休みの日は遅く起きます。", kana: "やすみ の ひ は おそく おきます。", romaji: "Yasumi no hi wa osoku okimasu.", meaning: "Pada hari libur, saya bangun terlambat." },
              { jp: "毎朝、母と同じ時間に起きます。", kana: "まいあさ、 はは と おなじ じかん に おきます。", romaji: "Maiasa, haha to onaji jikan ni okimasu.", meaning: "Setiap pagi, saya bangun di waktu yang sama dengan ibu." },
              { jp: "アラームの音ですぐに起きます。", kana: "あらーむ の おと で すぐ に おきます。", romaji: "Araamu no oto de sugu ni okimasu.", meaning: "Saya langsung bangun oleh suara alarm." },
              { jp: "明日はテストだから、早く起きます。", kana: "あした は てすと だから、 はやく おきます。", romaji: "Ashita wa tesuto dakara, hayaku okimasu.", meaning: "Karena besok ujian, saya akan bangun lebih awal." },
              { jp: "毎日、鳥の声で起きます。", kana: "まいにち、 とり の こえ で おきます。", romaji: "Mainichi, tori no koe de okimasu.", meaning: "Setiap hari, saya bangun oleh suara burung." },
              { jp: "日曜日は７時半に起きます。", kana: "にちようび は しちじ はん に おきます。", romaji: "Nichiyoubi wa shichi-ji han ni okimasu.", meaning: "Hari Minggu saya bangun jam setengah delapan." },
              { jp: "夜中に何度も起きます。", kana: "よなか に なんど も おきます。", romaji: "Yonaka ni nando mo okimasu.", meaning: "Saya terbangun berkali-kali di tengah malam." },
              { jp: "家族の中で私が一番早く起きます。", kana: "かぞく の なか で わたし が いちばん はやく おきます。", romaji: "Kazoku no naka de watashi ga ichiban hayaku okimasu.", meaning: "Di keluarga, saya yang paling cepat bangun." }
            ]
          }]
        },
        {
          name: "Irregular",
          examples: [{
            base: "来る", transformed: "来ます", kana: "くる → きます", romaji: "kuru → kimasu", meaning: "datang (sopan)",
            sentences: [
              { jp: "明日、友達が家に来ます。", kana: "あした、 ともだち が いえ に きます。", romaji: "Ashita, tomodachi ga ie ni kimasu.", meaning: "Besok, teman saya akan datang ke rumah." },
              { jp: "先生はもうすぐ来ます。", kana: "せんせい は もうすぐ きます。", romaji: "Sensei wa mousugu kimasu.", meaning: "Guru akan segera datang." },
              { jp: "毎日、たくさんの人がここに来ます。", kana: "まいにち、 たくさん の ひと が ここ に きます。", romaji: "Mainichi, takusan no hito ga koko ni kimasu.", meaning: "Setiap hari, banyak orang datang ke sini." },
              { jp: "明日のパーティーに誰が来ますか。", kana: "あした の ぱーてぃー に だれ が きます か。", romaji: "Ashita no paatii ni dare ga kimasu ka.", meaning: "Siapa yang akan datang ke pesta besok?" },
              { jp: "来週、両親が日本に来ます。", kana: "らいしゅう、 りょうしん が にほん に きます。", romaji: "Raishuu, ryoushin ga Nihon ni kimasu.", meaning: "Minggu depan, orang tua saya akan datang ke Jepang." },
              { jp: "電車はあと５分で来ます。", kana: "でんしゃ は あと ごふん で きます。", romaji: "Densha wa ato go-fun de kimasu.", meaning: "Kereta akan datang dalam 5 menit lagi." },
              { jp: "もうすぐ春が来ます。", kana: "もうすぐ はる が きます。", romaji: "Mousugu haru ga kimasu.", meaning: "Musim semi akan segera tiba." },
              { jp: "お客さんが来ますから、部屋を掃除します。", kana: "おきゃくさん が きます から、 へや を そうじ します。", romaji: "Okyakusan ga kimasu kara, heya o souji shimasu.", meaning: "Karena tamu akan datang, saya membersihkan kamar." },
              { jp: "彼はいつも遅れて来ます。", kana: "かれ は いつも おくれて きます。", romaji: "Kare wa itsumo okurete kimasu.", meaning: "Dia selalu datang terlambat." },
              { jp: "明日の会議に社長も来ます。", kana: "あした の かいぎ に しゃちょう も きます。", romaji: "Ashita no kaigi ni shachou mo kimasu.", meaning: "Presiden direktur juga akan datang ke rapat besok." }
            ]
          }]
        }
      ]
    },
	{
      id: "vf-04",
      level: "N5",
      order: 4,
      title: "~ません • Bentuk Sopan Negatif",
      summary: "Bentuk sopan formal (polite) untuk menyatakan tidak melakukan sesuatu.",
      formulas: [
        { group: "Godan", rule: "Ubah vokal 'u' terakhir menjadi 'i', lalu tambahkan ません (Contoh: 飲む → 飲みません)." },
        { group: "Ichidan", rule: "Hapus 'ru' di akhir kata, lalu ganti dengan ません (Contoh: 食べる → 食べません)." },
        { group: "Irregular", rule: "する (suru) berubah menjadi しません (shimasen). 来る (kuru) berubah menjadi きません (kimasen)." }
      ],
      groups: [
        {
          name: "Godan",
          examples: [{
            base: "飲む", transformed: "飲みません", kana: "のむ → のみません", romaji: "nomu → nomimasen", meaning: "tidak minum (sopan)",
            sentences: [
              { jp: "すみません、私はお酒を飲みません。", kana: "すみません、 わたし は おさけ を のみません。", romaji: "Sumimasen, watashi wa osake o nomimasen.", meaning: "Maaf, saya tidak minum alkohol." },
              { jp: "朝はコーヒーを飲みません。", kana: "あさ は こーひー を のみません。", romaji: "Asa wa koohii o nomimasen.", meaning: "Pagi hari saya tidak minum kopi." },
              { jp: "甘いジュースはあまり飲みません。", kana: "あまい じゅーす は あまり のみません。", romaji: "Amai juusu wa amari nomimasen.", meaning: "Saya jarang minum jus yang manis." },
              { jp: "お腹が痛いので、冷たい水は飲みません。", kana: "おなか が いたい ので、 つめたい みず は のみません。", romaji: "Onaka ga itai node, tsumetai mizu wa nomimasen.", meaning: "Karena sakit perut, saya tidak minum air dingin." },
              { jp: "運転しますから、今日はビールを飲みません。", kana: "うんてん します から、 きょう は びーる を のみません。", romaji: "Unten shimasu kara, kyou wa biiru o nomimasen.", meaning: "Karena saya menyetir, hari ini saya tidak minum bir." },
              { jp: "夜遅くにはお茶を飲みません。", kana: "よる おそく に は おちゃ を のみません。", romaji: "Yoru osoku ni wa ocha o nomimasen.", meaning: "Saya tidak minum teh saat larut malam." },
              { jp: "彼は決して牛乳を飲みません。", kana: "かれ は けっして ぎゅうにゅう を のみません。", romaji: "Kare wa kesshite gyuunyuu o nomimasen.", meaning: "Dia sama sekali tidak minum susu." },
              { jp: "ダイエット中なので、コーラは飲みません。", kana: "だいえっと ちゅう なので、 こーら は のみません。", romaji: "Daietto chuu nanode, koora wa nomimasen.", meaning: "Karena sedang diet, saya tidak minum kola." },
              { jp: "食事の前に薬は飲みません。", kana: "しょくじ の まえ に くすり は のみません。", romaji: "Shokuji no mae ni kusuri wa nomimasen.", meaning: "Saya tidak minum obat sebelum makan." },
              { jp: "苦いから、この薬は飲みません。", kana: "にがい から、 この くすり は のみません。", romaji: "Nigai kara, kono kusuri wa nomimasen.", meaning: "Karena pahit, saya tidak akan meminum obat ini." }
            ]
          }]
        },
        {
          name: "Ichidan",
          examples: [{
            base: "食べる", transformed: "食べません", kana: "たべる → たべません", romaji: "taberu → tabemasen", meaning: "tidak makan (sopan)",
            sentences: [
              { jp: "私は豚肉を食べません。", kana: "わたし は ぶたにく を たべません。", romaji: "Watashi wa butaniku o tabemasen.", meaning: "Saya tidak makan daging babi." },
              { jp: "朝ごはんはいつも食べません。", kana: "あさごはん は いつも たべません。", romaji: "Asagohan wa itsumo tabemasen.", meaning: "Saya selalu tidak makan sarapan." },
              { jp: "辛い料理はあまり食べません。", kana: "からい りょうり は あまり たべません。", romaji: "Karai ryouri wa amari tabemasen.", meaning: "Saya jarang makan masakan pedas." },
              { jp: "お腹がいっぱいなので、もう食べません。", kana: "おなか が いっぱい なので、 もう たべません。", romaji: "Onaka ga ippai nanode, mou tabemasen.", meaning: "Karena sudah kenyang, saya tidak makan lagi." },
              { jp: "生の魚は食べません。", kana: "なま の さかな は たべません。", romaji: "Nama no sakana wa tabemasen.", meaning: "Saya tidak makan ikan mentah." },
              { jp: "アレルギーがあるので、卵を食べません。", kana: "あれるぎー が ある ので、 たまご を たべません。", romaji: "Arerugii ga aru node, tamago o tabemasen.", meaning: "Karena alergi, saya tidak makan telur." },
              { jp: "夜８時以降は何も食べません。", kana: "よる はちじ いこう は なにも たべません。", romaji: "Yoru hachi-ji ikou wa nanimo tabemasen.", meaning: "Setelah jam 8 malam saya tidak makan apa-apa." },
              { jp: "嫌いだから、ピーマンは食べません。", kana: "きらい だから、 ぴーまん は たべません。", romaji: "Kirai dakara, piiman wa tabemasen.", meaning: "Karena tidak suka, saya tidak makan paprika." },
              { jp: "ダイエット中だから、甘いお菓子は食べません。", kana: "だいえっと ちゅう だから、 あまい おかし は たべません。", romaji: "Daietto chuu dakara, amai okashi wa tabemasen.", meaning: "Karena sedang diet, saya tidak makan camilan manis." },
              { jp: "今日の晩ごはんは家で食べません。", kana: "きょう の ばんごはん は いえ で たべません。", romaji: "Kyou no bangohan wa ie de tabemasen.", meaning: "Makan malam hari ini saya tidak makan di rumah." }
            ]
          }]
        },
        {
          name: "Irregular",
          examples: [{
            base: "する", transformed: "しません", kana: "する → しません", romaji: "suru → shimasen", meaning: "tidak melakukan (sopan)",
            sentences: [
              { jp: "明日は日曜日ですから、仕事をしません。", kana: "あした は にちようび です から、 しごと を しません。", romaji: "Ashita wa nichiyoubi desu kara, shigoto o shimasen.", meaning: "Karena besok hari Minggu, saya tidak bekerja." },
              { jp: "疲れた時は、無理をしません。", kana: "つかれた とき は、 むり を しません。", romaji: "Tsukareta toki wa, muri o shimasen.", meaning: "Saat lelah, saya tidak memaksakan diri." },
              { jp: "私はそんな悪いことはしません。", kana: "わたし は そんな わるい こと は しません。", romaji: "Watashi wa sonna warui koto wa shimasen.", meaning: "Saya tidak melakukan hal buruk seperti itu." },
              { jp: "雨の日は外で運動しません。", kana: "あめ の ひ は そと で うんどう しません。", romaji: "Ame no hi wa soto de undou shimasen.", meaning: "Pada hari hujan, saya tidak berolahraga di luar." },
              { jp: "週末は部屋の掃除をしません。", kana: "しゅうまつ は へや の そうじ を しません。", romaji: "Shuumatsu wa heya no souji o shimasen.", meaning: "Akhir pekan saya tidak membersihkan kamar." },
              { jp: "忙しいので、今日は料理をしません。", kana: "いそがしい ので、 きょう は りょうり を しません。", romaji: "Isogashii node, kyou wa ryouri o shimasen.", meaning: "Karena sibuk, hari ini saya tidak memasak." },
              { jp: "私は決してそんな約束はしません。", kana: "わたし は けっして そんな やくそく は しません。", romaji: "Watashi wa kesshite sonna yakusoku wa shimasen.", meaning: "Saya sama sekali tidak membuat janji seperti itu." },
              { jp: "お金がないから、買い物はしません。", kana: "おかね が ない から、 かいもの は しません。", romaji: "Okane ga nai kara, kaimono wa shimasen.", meaning: "Karena tidak ada uang, saya tidak pergi berbelanja." },
              { jp: "危ないですから、一人で旅行しません。", kana: "あぶない です から、 ひとり で りょこう しません。", romaji: "Abunai desu kara, hitori de ryokou shimasen.", meaning: "Karena berbahaya, saya tidak bepergian sendirian." },
              { jp: "彼はあまり私の話をしません。", kana: "かれ は あまり わたし の はなし を しません。", romaji: "Kare wa amari watashi no hanashi o shimasen.", meaning: "Dia jarang membicarakan tentang saya." }
            ]
          }]
        }
      ]
    },
	{
      id: "vf-05",
      level: "N5",
      order: 5,
      title: "~た • Bentuk Lampau Plain",
      summary: "Bentuk santai untuk kejadian di masa lalu (sudah dilakukan/terjadi).",
      formulas: [
        { group: "Godan", rule: "Aturan khusus: u/tsu/ru -> tta, nu/mu/bu -> nda, ku -> ita, gu -> ida, su -> shita." },
        { group: "Ichidan", rule: "Hapus 'ru' di akhir, ganti dengan た (ta)." },
        { group: "Irregular", rule: "する (suru) jadi した (shita). 来る (kuru) jadi きた (kita). 行く (iku) pengecualian jadi 行った (itta)." }
      ],
      groups: [
        {
          name: "Godan",
          examples: [{
            base: "買う", transformed: "買った", kana: "かう → かった", romaji: "kau → katta", meaning: "sudah membeli",
            sentences: [
              { jp: "昨日、新しいスマホを買った。", kana: "きのう、 あたらしい すまほ を かった。", romaji: "Kinou, atarashii sumaho o katta.", meaning: "Kemarin, saya membeli smartphone baru." },
              { jp: "スーパーでパンと牛乳を買った。", kana: "すーぱー で ぱん と ぎゅうにゅう を かった。", romaji: "Suupaa de pan to gyuunyuu o katta.", meaning: "Saya membeli roti dan susu di supermarket." },
              { jp: "欲しかったゲームをついに買った。", kana: "ほしかった げーむ を ついに かった。", romaji: "Hoshikatta geemu o tsuini katta.", meaning: "Akhirnya saya membeli game yang saya inginkan." },
              { jp: "帰りにコンビニで弁当を買った。", kana: "かえり に こんびに で べんとう を かった。", romaji: "Kaeri ni konbini de bentou o katta.", meaning: "Saat pulang, saya membeli bento di minimarket." },
              { jp: "誕生日に高いカバンを買った。", kana: "たんじょうび に たかい かばん を かった。", romaji: "Tanjoubi ni takai kaban o katta.", meaning: "Saya membeli tas mahal di hari ulang tahun." },
              { jp: "本屋で日本語の辞書を買った。", kana: "ほんや で にほんご の じしょ を かった。", romaji: "Hon'ya de nihongo no jisho o katta.", meaning: "Saya membeli kamus bahasa Jepang di toko buku." },
              { jp: "セールで安い靴を買った。", kana: "せーる で やすい くつ を かった。", romaji: "Seeru de yasui kutsu o katta.", meaning: "Saya membeli sepatu murah saat diskon." },
              { jp: "彼女にきれいな花を買った。", kana: "かのじょ に きれいな はな を かった。", romaji: "Kanojo ni kireina hana o katta.", meaning: "Saya membelikan bunga yang indah untuk pacar saya." },
              { jp: "旅行のお土産をたくさん買った。", kana: "りょこう の おみやげ を たくさん かった。", romaji: "Ryokou no omiyage o takusan katta.", meaning: "Saya membeli banyak oleh-oleh liburan." },
              { jp: "喉が渇いたので、ジュースを買った。", kana: "のど が かわいた ので、 じゅーす を かった。", romaji: "Nodo ga kawaita node, juusu o katta.", meaning: "Karena haus, saya membeli jus." }
            ]
          }]
        },
        {
          name: "Ichidan",
          examples: [{
            base: "寝る", transformed: "寝た", kana: "ねる → ねた", romaji: "neru → neta", meaning: "sudah tidur",
            sentences: [
              { jp: "昨日の夜は１１時に寝た。", kana: "きのう の よる は じゅういちじ に ねた。", romaji: "Kinou no yoru wa juu-ichi ji ni neta.", meaning: "Tadi malam saya tidur jam 11." },
              { jp: "疲れていたので、すぐに寝た。", kana: "つかれて いた ので、 すぐ に ねた。", romaji: "Tsukarete ita node, sugu ni neta.", meaning: "Karena lelah, saya langsung tertidur." },
              { jp: "授業中に少し寝た。", kana: "じゅぎょう ちゅう に すこし ねた。", romaji: "Jugyou chuu ni sukoshi neta.", meaning: "Saya tidur sedikit saat pelajaran." },
              { jp: "今日は休みだから、昼まで寝た。", kana: "きょう は やすみ だから、 ひる まで ねた。", romaji: "Kyou wa yasumi dakara, hiru made neta.", meaning: "Hari ini libur, jadi saya tidur sampai siang." },
              { jp: "赤ちゃんがやっと寝た。", kana: "あかちゃん が やっと ねた。", romaji: "Akachan ga yatto neta.", meaning: "Bayinya akhirnya tidur." },
              { jp: "昨日はとてもよく寝た。", kana: "きのう は とても よく ねた。", romaji: "Kinou wa totemo yoku neta.", meaning: "Kemarin saya tidur dengan sangat nyenyak." },
              { jp: "テレビを見ながら寝た。", kana: "てれび を み ながら ねた。", romaji: "Terebi o minagara neta.", meaning: "Saya tertidur sambil menonton TV." },
              { jp: "薬を飲んで、早く寝た。", kana: "くすり を のんで、 はやく ねた。", romaji: "Kusuri o nonde, hayaku neta.", meaning: "Saya minum obat, lalu tidur lebih awal." },
              { jp: "電車の中で立って寝た。", kana: "でんしゃ の なか で たって ねた。", romaji: "Densha no naka de tatte neta.", meaning: "Saya tertidur sambil berdiri di dalam kereta." },
              { jp: "昨夜は遅く寝た。", kana: "さくや は おそく ねた。", romaji: "Sakuya wa osoku neta.", meaning: "Tadi malam saya tidur larut." }
            ]
          }]
        },
        {
          name: "Irregular",
          examples: [{
            base: "する", transformed: "した", kana: "する → した", romaji: "suru → shita", meaning: "sudah melakukan",
            sentences: [
              { jp: "ねえ、もう宿題をした？", kana: "ねえ、 もう しゅくだい を した？", romaji: "Nee, mou shukudai o shita?", meaning: "Hei, apakah kamu sudah mengerjakan PR?" },
              { jp: "週末は家で部屋の掃除をした。", kana: "しゅうまつ は いえ で へや の そうじ を した。", romaji: "Shuumatsu wa ie de heya no souji o shita.", meaning: "Akhir pekan saya membersihkan kamar di rumah." },
              { jp: "昨日は一日中ゲームをした。", kana: "きのう は いちにちじゅう げーむ を した。", romaji: "Kinou wa ichinichijuu geemu o shita.", meaning: "Kemarin saya bermain game seharian penuh." },
              { jp: "テストのためにたくさん勉強した。", kana: "てすと の ため に たくさん べんきょう した。", romaji: "Tesuto no tame ni takusan benkyou shita.", meaning: "Saya belajar banyak untuk ujian." },
              { jp: "公園で友達とテニスをした。", kana: "こうえん で ともだち と てにす を した。", romaji: "Kouen de tomodachi to tenisu o shita.", meaning: "Saya bermain tenis dengan teman di taman." },
              { jp: "晩ごはんは私が料理をした。", kana: "ばんごはん は わたし が りょうり を した。", romaji: "Bangohan wa watashi ga ryouri o shita.", meaning: "Saya yang memasak untuk makan malam." },
              { jp: "母の誕生日に電話をした。", kana: "はは の たんじょうび に でんわ を した。", romaji: "Haha no tanjoubi ni denwa o shita.", meaning: "Saya menelepon ibu di hari ulang tahunnya." },
              { jp: "休みの日、一人で買い物した。", kana: "やすみ の ひ、 ひとり で かいもの した。", romaji: "Yasumi no hi, hitori de kaimono shita.", meaning: "Pada hari libur, saya berbelanja sendirian." },
              { jp: "今日は少しだけ仕事をした。", kana: "きょう は すこし だけ しごと を した。", romaji: "Kyou wa sukoshi dake shigoto o shita.", meaning: "Hari ini saya hanya bekerja sedikit." },
              { jp: "朝早く起きて、運動をした。", kana: "あさ はやく おきて、 うんどう を した。", romaji: "Asa hayaku okite, undou o shita.", meaning: "Saya bangun pagi-pagi dan berolahraga." }
            ]
          }]
        }
      ]
    },
	{
      id: "vf-06",
      level: "N5",
      order: 6,
      title: "~なかった • Bentuk Lampau Negatif Plain",
      summary: "Bentuk santai untuk menyatakan kejadian atau tindakan yang TIDAK dilakukan di masa lalu.",
      formulas: [
        { group: "Godan", rule: "Ubah bentuk negatif (~ない) menjadi ~なかった. (Contoh: 行かない → 行かなかった)" },
        { group: "Ichidan", rule: "Hapus 'nai' pada bentuk negatif, ganti dengan なかった. (Contoh: 食べない → 食べなかった)" },
        { group: "Irregular", rule: "しない (shinai) berubah menjadi しなかった (shinakatta). こない (konai) berubah menjadi こなかった (konakatta)." }
      ],
      groups: [
        {
          name: "Godan",
          examples: [{
            base: "行く", transformed: "行かなかった", kana: "いく → いかなかった", romaji: "iku → ikanakatta", meaning: "tidak pergi (lampau)",
            sentences: [
              { jp: "昨日、雨が降ったから、学校に行かなかった。", kana: "きのう、 あめ が ふった から、 がっこう に いかなかった。", romaji: "Kinou, ame ga futta kara, gakkou ni ikanakatta.", meaning: "Kemarin karena hujan, saya tidak pergi ke sekolah." },
              { jp: "疲れていたので、パーティーに行かなかった。", kana: "つかれて いた ので、 ぱーてぃー に いかなかった。", romaji: "Tsukarete ita node, paatii ni ikanakatta.", meaning: "Karena lelah, saya tidak pergi ke pesta." },
              { jp: "お金がなかったから、旅行に行かなかった。", kana: "おかね が なかった から、 りょこう に いかなかった。", romaji: "Okane ga nakatta kara, ryokou ni ikanakatta.", meaning: "Karena tidak ada uang, saya tidak pergi liburan." },
              { jp: "日曜日、どこへも行かなかった。", kana: "にちようび、 どこ へ も いかなかった。", romaji: "Nichiyoubi, doko e mo ikanakatta.", meaning: "Hari Minggu, saya tidak pergi ke mana pun." },
              { jp: "時間がなくて、病院に行かなかった。", kana: "じかん が なくて、 びょういん に いかなかった。", romaji: "Jikan ga nakute, byouin ni ikanakatta.", meaning: "Karena tidak ada waktu, saya tidak pergi ke rumah sakit." },
              { jp: "約束を忘れて、友達の家に行かなかった。", kana: "やくそく を わすれて、 ともだち の いえ に いかなかった。", romaji: "Yakusoku o wasurete, tomodachi no ie ni ikanakatta.", meaning: "Saya lupa janji dan tidak pergi ke rumah teman." },
              { jp: "道がわからなくて、レストランに行かなかった。", kana: "みち が わからなくて、 れすとらん に いかなかった。", romaji: "Michi ga wakaranakute, resutoran ni ikanakatta.", meaning: "Karena tidak tahu jalan, saya tidak pergi ke restoran." },
              { jp: "気分が悪かったので、映画館に行かなかった。", kana: "きぶん が わるかった ので、 えいがかん に いかなかった。", romaji: "Kibun ga warukatta node, eigakan ni ikanakatta.", meaning: "Karena merasa tidak enak badan, saya tidak pergi ke bioskop." },
              { jp: "遠かったから、歩いて行かなかった。", kana: "とおかった から、 あるいて いかなかった。", romaji: "Tookatta kara, aruite ikanakatta.", meaning: "Karena jauh, saya tidak pergi berjalan kaki." },
              { jp: "誰もいなかったから、公園に行かなかった。", kana: "だれ も いなかった から、 こうえん に いかなかった。", romaji: "Dare mo inakatta kara, kouen ni ikanakatta.", meaning: "Karena tidak ada siapa-siapa, saya tidak pergi ke taman." }
            ]
          }]
        },
        {
          name: "Ichidan",
          examples: [{
            base: "食べる", transformed: "食べなかった", kana: "たべる → たべなかった", romaji: "taberu → tabenakatta", meaning: "tidak makan (lampau)",
            sentences: [
              { jp: "今朝、忙しくて朝ごはんを食べなかった。", kana: "けさ、 いそがしくて あさごはん を たべなかった。", romaji: "Kesa, isogashikute asagohan o tabenakatta.", meaning: "Pagi ini karena sibuk, saya tidak sarapan." },
              { jp: "お腹が痛かったから、何も食べなかった。", kana: "おなか が いたかった から、 なにも たべなかった。", romaji: "Onaka ga itakatta kara, nanimo tabenakatta.", meaning: "Karena sakit perut, saya tidak makan apa-apa." },
              { jp: "そのケーキは甘すぎて、全部食べなかった。", kana: "その けーき は あますぎて、 ぜんぶ たべなかった。", romaji: "Sono keeki wa amasugite, zenbu tabenakatta.", meaning: "Kue itu terlalu manis, jadi saya tidak memakan semuanya." },
              { jp: "ダイエット中だから、夜食を食べなかった。", kana: "だいえっと ちゅう だから、 やしょく を たべなかった。", romaji: "Daietto chuu dakara, yashoku o tabenakatta.", meaning: "Karena sedang diet, saya tidak makan camilan malam." },
              { jp: "嫌いだったから、野菜は食べなかった。", kana: "きらい だった から、 やさい は たべなかった。", romaji: "Kirai datta kara, yasai wa tabenakatta.", meaning: "Karena tidak suka, saya tidak memakan sayurannya." },
              { jp: "昨日の晩ごはんは、家で食べなかった。", kana: "きのう の ばんごはん は、 いえ で たべなかった。", romaji: "Kinou no bangohan wa, ie de tabenakatta.", meaning: "Makan malam kemarin, saya tidak makan di rumah." },
              { jp: "美味しくなかったので、半分しか食べなかった。", kana: "おいしく なかった ので、 はんぶん しか たべなかった。", romaji: "Oishikunai katta node, hanbun shika tabenakatta.", meaning: "Karena tidak enak, saya hanya makan setengahnya." },
              { jp: "熱があったから、昨日から何も食べなかった。", kana: "ねつ が あった から、 きのう から なにも たべなかった。", romaji: "Netsu ga atta kara, kinou kara nanimo tabenakatta.", meaning: "Karena demam, saya tidak makan apa-apa sejak kemarin." },
              { jp: "お金がもったいないから、外で食べなかった。", kana: "おかね が もったいない から、 そと で たべなかった。", romaji: "Okane ga mottainai kara, soto de tabenakatta.", meaning: "Karena sayang uangnya, saya tidak makan di luar." },
              { jp: "友達が来るまで、一人で食べなかった。", kana: "ともだち が くる まで、 ひとり で たべなかった。", romaji: "Tomodachi ga kuru made, hitori de tabenakatta.", meaning: "Sampai teman datang, saya tidak makan sendirian." }
            ]
          }]
        },
        {
          name: "Irregular",
          examples: [{
            base: "する", transformed: "しなかった", kana: "する → しなかった", romaji: "suru → shinakatta", meaning: "tidak melakukan (lampau)",
            sentences: [
              { jp: "昨日は日曜日だから、勉強しなかった。", kana: "きのう は にちようび だから、 べんきょう しなかった。", romaji: "Kinou wa nichiyoubi dakara, benkyou shinakatta.", meaning: "Kemarin hari Minggu, jadi saya tidak belajar." },
              { jp: "疲れたから、部屋の掃除をしなかった。", kana: "つかれた から、 へや の そうじ を しなかった。", romaji: "Tsukareta kara, heya no souji o shinakatta.", meaning: "Karena lelah, saya tidak membersihkan kamar." },
              { jp: "時間がなくて、宿題をしなかった。", kana: "じかん が なくて、 しゅくだい を しなかった。", romaji: "Jikan ga nakute, shukudai o shinakatta.", meaning: "Karena tidak ada waktu, saya tidak mengerjakan PR." },
              { jp: "雨が降ったから、運動しなかった。", kana: "あめ が ふった から、 うんどう しなかった。", romaji: "Ame ga futta kara, undou shinakatta.", meaning: "Karena turun hujan, saya tidak berolahraga." },
              { jp: "電話が壊れていたから、連絡しなかった。", kana: "でんわ が こわれて いた から、 れんらく しなかった。", romaji: "Denwa ga kowarete ita kara, renraku shinakatta.", meaning: "Karena telepon rusak, saya tidak menghubunginya." },
              { jp: "怒っていたから、彼と話をしなかった。", kana: "おこって いた から、 かれ と はなし を しなかった。", romaji: "Okotte ita kara, kare to hanashi o shinakatta.", meaning: "Karena marah, saya tidak berbicara dengannya." },
              { jp: "約束の時間を忘れて、準備をしなかった。", kana: "やくそく の じかん を わすれて、 じゅんび を しなかった。", romaji: "Yakusoku no jikan o wasurete, junbi o shinakatta.", meaning: "Saya lupa waktu janjian, jadi tidak bersiap-siap." },
              { jp: "体の調子が悪くて、無理をしなかった。", kana: "からだ の ちょうし が わるくて、 むり を しなかった。", romaji: "Karada no choushi ga warukute, muri o shinakatta.", meaning: "Karena kondisi badan buruk, saya tidak memaksakan diri." },
              { jp: "面倒くさくて、料理しなかった。", kana: "めんどうくさくて、 りょうり しなかった。", romaji: "Mendoukusakute, ryouri shinakatta.", meaning: "Karena merepotkan, saya tidak memasak." },
              { jp: "道が混んでいたから、運転しなかった。", kana: "みち が こんでいた から、 うんてん しなかった。", romaji: "Michi ga konde ita kara, unten shinakatta.", meaning: "Karena jalanan macet, saya tidak menyetir." }
            ]
          }]
        }
      ]
    },
	{
      id: "vf-07",
      level: "N5",
      order: 7,
      title: "~ました • Bentuk Lampau Sopan",
      summary: "Bentuk lampau sopan (polite past) untuk menyatakan tindakan yang sudah selesai dilakukan.",
      formulas: [
        { group: "Godan", rule: "Ubah vokal 'u' terakhir menjadi 'i', lalu tambahkan ました (Contoh: 読む → 読みました)." },
        { group: "Ichidan", rule: "Hapus 'ru' di akhir kata, lalu ganti dengan ました (Contoh: 起きる → 起きました)." },
        { group: "Irregular", rule: "する (suru) menjadi しました (shimashita). 来る (kuru) menjadi きました (kimashita)." }
      ],
      groups: [
        {
          name: "Godan",
          examples: [{
            base: "読む", transformed: "読みました", kana: "よむ → よみました", romaji: "yomu → yomimashita", meaning: "sudah membaca (sopan)",
            sentences: [
              { jp: "昨日の夜、日本語の本を読みました。", kana: "きのう の よる、 にほんご の ほん を よみました。", romaji: "Kinou no yoru, nihongo no hon o yomimashita.", meaning: "Tadi malam saya sudah membaca buku bahasa Jepang." },
              { jp: "今朝、新聞を読みました。", kana: "けさ、 しんぶん を よみました。", romaji: "Kesa, shinbun o yomimashita.", meaning: "Tadi pagi saya membaca koran." },
              { jp: "通勤の電車でニュースを読みました。", kana: "つうきん の でんしゃ で にゅーす を よみました。", romaji: "Tsuukin no densha de nyuusu o yomimashita.", meaning: "Saya membaca berita di kereta saat berangkat kerja." },
              { jp: "寝る前に、友達の手紙を読みました。", kana: "ねる まえ に、 ともだち の てがみ を よみました。", romaji: "Neru mae ni, tomodachi no tegami o yomimashita.", meaning: "Sebelum tidur, saya membaca surat dari teman." },
              { jp: "さっき、この資料を読みました。", kana: "さっき、 この しりょう を よみました。", romaji: "Sakki, kono shiryou o yomimashita.", meaning: "Tadi saya sudah membaca dokumen ini." },
              { jp: "図書館で面白い雑誌を読みました。", kana: "としょかん で おもしろい ざっし を よみました。", romaji: "Toshokan de omoshiroi zasshi o yomimashita.", meaning: "Saya sudah membaca majalah menarik di perpustakaan." },
              { jp: "先生が書いたメモを読みました。", kana: "せんせい が かいた めも を よみました。", romaji: "Sensei ga kaita memo o yomimashita.", meaning: "Saya sudah membaca memo yang ditulis oleh guru." },
              { jp: "お昼休みにマンガを読みました。", kana: "おひるやすみ に まんが を よみました。", romaji: "Ohiru-yasumi ni manga o yomimashita.", meaning: "Saya membaca komik saat istirahat siang." },
              { jp: "昨日、長い小説を読みました。", kana: "きのう、 ながい しょうせつ を よみました。", romaji: "Kinou, nagai shousetsu o yomimashita.", meaning: "Kemarin saya membaca novel yang panjang." },
              { jp: "メールの内容を全部読みました。", kana: "めーる の ないよう を ぜんぶ よみました。", romaji: "Meeru no naiyou o zenbu yomimashita.", meaning: "Saya sudah membaca seluruh isi emailnya." }
            ]
          }]
        },
        {
          name: "Ichidan",
          examples: [{
            base: "起きる", transformed: "起きました", kana: "おきる → おきました", romaji: "okiru → okimashita", meaning: "sudah bangun (sopan)",
            sentences: [
              { jp: "今朝は６時に起きました。", kana: "けさ は ろくじ に おきました。", romaji: "Kesa wa roku-ji ni okimashita.", meaning: "Tadi pagi saya sudah bangun jam 6." },
              { jp: "昨日は遅く起きました。", kana: "きのう は おそく おきました。", romaji: "Kinou wa osoku okimashita.", meaning: "Kemarin saya bangun kesiangan." },
              { jp: "アラームの音で起きました。", kana: "あらーむ の おと で おきました。", romaji: "Araamu no oto de okimashita.", meaning: "Saya bangun karena suara alarm." },
              { jp: "今日は仕事がないので、１０時に起きました。", kana: "きょう は しごと が ない ので、 じゅうじ に おきました。", romaji: "Kyou wa shigoto ga nai node, juu-ji ni okimashita.", meaning: "Karena hari ini tidak ada kerjaan, saya bangun jam 10." },
              { jp: "今朝は鳥の声で起きました。", kana: "けさ は とり の こえ で おきました。", romaji: "Kesa wa tori no koe de okimashita.", meaning: "Tadi pagi saya bangun oleh suara burung." },
              { jp: "赤ちゃんの泣き声で起きました。", kana: "あかちゃん の なきごえ で おきました。", romaji: "Akachan no nakigoe de okimashita.", meaning: "Saya bangun karena suara tangisan bayi." },
              { jp: "昨夜は何度も起きました。", kana: "さくや は なんど も おきました。", romaji: "Sakuya wa nando mo okimashita.", meaning: "Tadi malam saya terbangun berkali-kali." },
              { jp: "早く起きましたから、朝ごはんをゆっくり食べました。", kana: "はやく おきました から、 あさごはん を ゆっくり たべました。", romaji: "Hayaku okimashita kara, asagohan o yukkuri tabemashita.", meaning: "Karena bangun pagi-pagi, saya makan sarapan dengan santai." },
              { jp: "地震の揺れで起きました。", kana: "じしん の ゆれ で おきました。", romaji: "Jishin no yure de okimashita.", meaning: "Saya terbangun karena getaran gempa." },
              { jp: "日曜日はお昼まで起きました。", kana: "にちようび は おひる まで おきました。", romaji: "Nichiyoubi wa ohiru made okimashita.", meaning: "Hari Minggu saya baru bangun sampai siang." }
            ]
          }]
        },
        {
          name: "Irregular",
          examples: [{
            base: "散歩する", transformed: "散歩しました", kana: "さんぽする → さんぽしました", romaji: "sanpo suru → sanpo shimashita", meaning: "sudah jalan-jalan (sopan)",
            sentences: [
              { jp: "今朝、公園を散歩しました。", kana: "けさ、 こうえン を さんぽ しました。", romaji: "Kesa, kouen o sanpo shimashita.", meaning: "Tadi pagi saya sudah jalan-jalan di taman." },
              { jp: "昨日の夕方、川の近くを散歩しました。", kana: "きのう の ゆうがた、 かわ の ちかく を さんぽ しました。", romaji: "Kinou no yuugata, kawa no chikaku o sanpo shimashita.", meaning: "Kemarin sore saya jalan-jalan di dekat sungai." },
              { jp: "犬と一緒に散歩しました。", kana: "いぬ と いっしょ に さんぽ しました。", romaji: "Inu to issho ni sanpo shimashita.", meaning: "Saya sudah jalan-jalan bersama anjing." },
              { jp: "涼しかったので、少し散歩しました。", kana: "すずしかった ので、 すこし さんぽ しました。", romaji: "Karena sejuk, saya jalan-jalan sebentar." },
              { jp: "週末に海辺を散歩しました。", kana: "しゅうまつ に うみべ を さんぽ しました。", romaji: "Shuumatsu ni umibe o sanpo shimashita.", meaning: "Di akhir pekan saya jalan-jalan di tepi laut." },
              { jp: "友達とおしゃべりしながら散歩しました。", kana: "ともだち と おしゃべり しながら さんぽ しました。", romaji: "Tomodachi to oshaberi shinagara sanpo shimashita.", meaning: "Saya jalan-jalan sambil mengobrol dengan teman." },
              { jp: "朝早く起きて、一人で散歩しました。", kana: "あさ はやく おきて、 ひとり で さんぽ しました。", romaji: "Asa hayaku okite, hitori de sanpo shimashita.", meaning: "Bangun pagi-pagi lalu saya jalan-jalan sendirian." },
              { jp: "綺麗な景色を見ながら散歩しました。", kana: "きれいな けしき を み ながら さんぽ しました。", romaji: "Kireina keshiki o mi nagara sanpo shimashita.", meaning: "Saya jalan-jalan sambil melihat pemandangan indah." },
              { jp: "運動のために、毎日散歩しました。", kana: "うんどう の ため に、 まいにち さんぽ しました。", romaji: "Undou no tame ni, mainichi sanpo shimashita.", meaning: "Demi olahraga, saya jalan-jalan setiap hari." },
              { jp: "昨日は１時間くらい散歩しました。", kana: "きのう は いちじかん くらい さんぽ しました。", romaji: "Kinou wa ichi-jikan kurai sanpo shimashita.", meaning: "Kemarin saya jalan-jalan sekitar 1 jam." }
            ]
          }]
        }
      ]
    },
	{
      id: "vf-08",
      level: "N5",
      order: 8,
      title: "~ませんでした • Bentuk Lampau Negatif Sopan",
      summary: "Bentuk lampau negatif sopan (polite past negative) untuk menyatakan bahwa suatu tindakan tidak dilakukan di masa lalu.",
      formulas: [
        { group: "Godan", rule: "Ubah vokal 'u' terakhir menjadi 'i', lalu tambahkan ませんでした (Contoh: 買う → 買いませんでした)." },
        { group: "Ichidan", rule: "Hapus 'ru' di akhir kata, lalu ganti dengan ませんでした (Contoh: 食べる → 食べませんでした)." },
        { group: "Irregular", rule: "する (suru) menjadi しませんでした (shimasen deshita). 来る (kuru) menjadi きませんでした (kimasen deshita)." }
      ],
      groups: [
        {
          name: "Godan",
          examples: [{
            base: "買う", transformed: "買いませんでした", kana: "かう → かいませんでした", romaji: "kau → kaimasen deshita", meaning: "tidak membeli (sopan/lampau)",
            sentences: [
              { jp: "昨日は何も買いませんでした。", kana: "きのう は なにも かいませんでした。", romaji: "Kinou wa nanimo kaimasen deshita.", meaning: "Kemarin saya tidak membeli apa-apa." },
              { jp: "高かったですから、あの服は買いませんでした。", kana: "たかかったです から、 あの ふく は かいませんでした。", romaji: "Takakatta desu kara, ano fuku wa kaimasen deshita.", meaning: "Karena mahal, saya tidak membeli baju itu." },
              { jp: "チケットがなかったので、買いませんでした。", kana: "ちけっと が なかった ので、 かいませんでした。", romaji: "Chiketto ga nakatta node, kaimasen deshita.", meaning: "Karena tidak ada tiket, saya tidak membelinya." },
              { jp: "今朝はコーヒーを買いませんでした。", kana: "けさ は こーひー を かいませんでした。", romaji: "Kesa wa koohii o kaimasen deshita.", meaning: "Tadi pagi saya tidak membeli kopi." },
              { jp: "友達にお土産を買いませんでした。", kana: "ともだち に おみやげ を かいませんでした。", romaji: "Tomodachi ni omiyage o kaimasen deshita.", meaning: "Saya tidak membeli oleh-oleh untuk teman." },
              { jp: "冷蔵庫に野菜がありましたから、買いませんでした。", kana: "れいぞうこ に やさい が ありました から、 かいませんでした。", romaji: "Reizouko ni yasai ga arimashita kara, kaimasen deshita.", meaning: "Karena ada sayuran di kulkas, saya tidak membelinya." },
              { jp: "まだ使えますから、新しいスマホは買いませんでした。", kana: "まだ つかえます から、 あたらしい すまほ は かいませんでした。", romaji: "Mada tsukaemasu kara, atarashii sumaho wa kaimasen deshita.", meaning: "Karena masih bisa dipakai, saya tidak membeli smartphone baru." },
              { jp: "雨が降っていましたが、傘を買いませんでした。", kana: "あめ が ふって いました が、 かさ を かいませんでした。", romaji: "Ame ga futte imashita ga, kasa o kaimasen deshita.", meaning: "Meskipun hujan, saya tidak membeli payung." },
              { jp: "高すぎるので、あの辞書は買いませんでした。", kana: "たかすぎる ので、 あの じしょ は かいませんでした。", romaji: "Takasugiru node, ano jisho wa kaimasen deshita.", meaning: "Karena terlalu mahal, saya tidak membeli kamus itu." },
              { jp: "昨日の夜、コンビニで弁当を買いませんでした。", kana: "きのう の よる、 こんびに で べんとう を かいませんでした。", romaji: "Kinou no yoru, konbini de bentou o kaimasen deshita.", meaning: "Tadi malam saya tidak membeli bento di minimarket." }
            ]
          }]
        },
        {
          name: "Ichidan",
          examples: [{
            base: "食べる", transformed: "食べませんでした", kana: "たべる → たべませんでした", romaji: "taberu → tabemasen deshita", meaning: "tidak makan (sopan/lampau)",
            sentences: [
              { jp: "今朝、忙しくて朝ごはんを食べませんでした。", kana: "けさ、 いそがしくて あさごはん を たべませんでした。", romaji: "Kesa, isogashikute asagohan o tabemasen deshita.", meaning: "Tadi pagi karena sibuk, saya tidak sarapan." },
              { jp: "お腹が痛かったので、昼ごはんを食べませんでした。", kana: "おなか が いたかった ので、 ひるごはん を たべませんでした。", romaji: "Onaka ga itakatta node, hirugohan o tabemasen deshita.", meaning: "Karena sakit perut, saya tidak makan siang." },
              { jp: "昨日の晩、お肉を食べませんでした。", kana: "きのう の ばん、 おにく を たべませんでした。", romaji: "Kinou no ban, oniku o tabemasen deshita.", meaning: "Tadi malam saya tidak makan daging." },
              { jp: "甘すぎましたから、あのケーキは食べませんでした。", kana: "あますぎました から、 あの けーき は たべませんでした。", romaji: "Amasugimashita kara, ano keeki wa tabemasen deshita.", meaning: "Karena terlalu manis, saya tidak makan kue itu." },
              { jp: "昨日は外で晩ごはんを食べませんでした。", kana: "きのう は そと で ばんごはん を たべませんでした。", romaji: "Kinou wa soto de bangohan o tabemasen deshita.", meaning: "Kemarin saya tidak makan malam di luar." },
              { jp: "時間がありませんでしたから、食べませんでした。", kana: "じかん が ありませんでした から、 たべませんでした。", romaji: "Jikan ga arimasen deshita kara, tabemasen deshita.", meaning: "Karena tidak ada waktu, saya tidak makan." },
              { jp: "さっき、レストランで刺身を食べませんでした。", kana: "さっき、 れすとらん で さしみ を たべませんでした。", romaji: "Sakki, resutoran de sashimi o tabemasen deshita.", meaning: "Tadi saya tidak makan sashimi di restoran." },
              { jp: "昨夜は寝る前に何も食べませんでした。", kana: "さくや は ねる まえ に なにも たべませんでした。", romaji: "Sakuya wa neru mae ni nanimo tabemasen deshita.", meaning: "Tadi malam saya tidak makan apa-apa sebelum tidur." },
              { jp: "酸っぱかったですから、あのオレンジは食べませんでした。", kana: "すっぱかったです から、 あの おれんじ は たべませんでした。", romaji: "Suppakatta desu kara, ano orenji wa tabemasen deshita.", meaning: "Karena asam, saya tidak makan jeruk itu." },
              { jp: "ダイエット中ですから、昨日はご飯を食べませんでした。", kana: "だいえっと ちゅう です から、 きのう は ごはん を たべませんでした。", romaji: "Daietto chuu desu kara, kinou wa gohan o tabemasen deshita.", meaning: "Karena sedang diet, kemarin saya tidak makan nasi." }
            ]
          }]
        },
        {
          name: "Irregular",
          examples: [{
            base: "掃除する", transformed: "掃除しませんでした", kana: "そうじする → そうじしませんでした", romaji: "souji suru → souji shimasen deshita", meaning: "tidak membersihkan (sopan/lampau)",
            sentences: [
              { jp: "先週末、部屋を掃除しませんでした。", kana: "せんしゅうまつ、 へや を そうじ しませんでした。", romaji: "Senshuumatsu, heya o souji shimasen deshita.", meaning: "Akhir pekan lalu saya tidak membersihkan kamar." },
              { jp: "昨日は疲れていましたから、掃除しませんでした。", kana: "きのう は つかれて いました から、 そうじ しませんでした。", romaji: "Kinou wa tsukarete imashita kara, souji shimasen deshita.", meaning: "Karena kemarin lelah, saya tidak bersih-bersih." },
              { jp: "今朝、台所を掃除しませんでした。", kana: "けさ、 だいどころ を そうじ しませんでした。", romaji: "Kesa, daidokoro o souji shimasen deshita.", meaning: "Tadi pagi saya tidak membersihkan dapur." },
              { jp: "昨日は休みでしたが、掃除しませんでした。", kana: "きのう は やすみ でした が、 そうじ しませんでした。", romaji: "Kinou wa yasumi deshita ga, souji shimasen deshita.", meaning: "Kemarin hari libur, tapi saya tidak bersih-bersih." },
              { jp: "雨でしたから、庭を掃除しませんでした。", kana: "あめ でした から、 にわ を そうじ しませんでした。", romaji: "Ame deshita kara, niwa o souji shimasen deshita.", meaning: "Karena hujan, saya tidak membersihkan halaman." },
              { jp: "昨日は忙しくて窓を掃除しませんでした。", kana: "きのう は いそがしくて まど を そうじ しませんでした。", romaji: "Kinou wa isogashikute mado o souji shimasen deshita.", meaning: "Kemarin karena sibuk, saya tidak membersihkan jendela." },
              { jp: "昨夜はお風呂を掃除しませんでした。", kana: "さくや は おふろ を そうじ しませんでした。", romaji: "Sakuya wa ofuro o souji shimasen deshita.", meaning: "Tadi malam saya tidak membersihkan kamar mandi." },
              { jp: "食事の後、テーブルを掃除しませんでした。", kana: "しょくじ の あと、 てーぶる を そうじ しませんでした。", romaji: "Shokuji no ato, teeburu o souji shimasen deshita.", meaning: "Setelah makan, saya tidak membersihkan meja." },
              { jp: "誰も来ませんでしたから、客間を掃除しませんでした。", kana: "だれ も きませんでした から、 きゃくま を そうじ しませんでした。", romaji: "Dare mo kimasen deshita kara, kyakuma o souji shimasen deshita.", meaning: "Karena tidak ada yang datang, saya tidak membersihkan ruang tamu." },
              { jp: "先週、車を掃除しませんでした。", kana: "せんしゅう、 くるま を そうじ しませんでした。", romaji: "Senshuu, kuruma o souji shimasen deshita.", meaning: "Minggu lalu saya tidak membersihkan mobil." }
            ]
          }]
        }
      ]
    },
	{
      id: "vf-09",
      level: "N4",
      order: 9,
      title: "~るでしょう • Dugaan Sopan (Mungkin…)",
      summary: "Dugaan Sopan (Mungkin…) (N4). Bentuk ini dipakai buat prediksi atau opini ringan dengan nada sopan & lembut. Mirip 'kayaknya...', 'mungkin...', 'rasanya akan...'. Sangat natural di percakapan sehari-hari, ramalan cuaca, rencana akhir pekan, atau ngobrol santai sama teman/kolega.",
      formulas: [
        { group: "Godan", rule: "Bentuk kamus + でしょう (langsung tambah ke akhir kata kerja Godan)." },
        { group: "Ichidan", rule: "Bentuk kamus + でしょう (langsung tambah ke akhir kata kerja Ichidan)." },
        { group: "Irregular", rule: "Bentuk kamus + でしょう (する → するでしょう, kata majemuk seperti 旅行する → 旅行するでしょう)." }
      ],
      groups: [
        {
          name: "Godan",
          examples: [{
            base: "歌う",
            transformed: "歌うでしょう",
            kana: "うたう → うたうでしょう",
            romaji: "utau → utau deshou",
            meaning: "mungkin bernyanyi (dugaan sopan)",
            sentences: [
              { jp: "今夜のカラオケ大会でたくさん歌うでしょう。", kana: "こんや の からおけ たいかい で たくさん うたうでしょう。", romaji: "Kon'ya no karaoke taikai de takusan utau deshou.", meaning: "Malam ini di acara karaoke, mungkin nyanyi banyak banget." },
              { jp: "ライブに行ったら、ファンと一緒に歌うでしょう。", kana: "らいぶ に いったら、 ふぁん と いっしょ に うたうでしょう。", romaji: "Raibu ni ittara, fan to issho ni utau deshou.", meaning: "Kalau pergi konser, mungkin nyanyi bareng fans." },
              { jp: "お風呂の中で毎日歌うでしょう。", kana: "おふろ の なか で まいにち うたうでしょう。", romaji: "Ofuro no naka de mainichi utau deshou.", meaning: "Setiap hari di kamar mandi mungkin nyanyi sendirian." },
              { jp: "友達の結婚式でサプライズで歌うでしょう。", kana: "ともだち の けっこんしき で さぷらいず で うたうでしょう。", romaji: "Tomodachi no kekkonshiki de sapuraizu de utau deshou.", meaning: "Di pernikahan teman, mungkin nyanyi surprise." },
              { jp: "ストレス溜まった時は、音楽かけながら大声で歌うでしょう。", kana: "すとれす たまった とき は、 おんがく かけながら おおごえ で うたうでしょう。", romaji: "Sutoresu tamatta toki wa, ongaku kakenagara oogoe de utau deshou.", meaning: "Kalau lagi stres, mungkin nyanyi keras sambil denger musik." },
              { jp: "子供の頃みたいに思いっきり歌うでしょう。", kana: "こどもの ころ みたい に おもいっきり うたうでしょう。", romaji: "Kodomo no koro mitai ni omoikkiri utau deshou.", meaning: "Seperti waktu kecil dulu, mungkin nyanyi sepuasnya." },
              { jp: "新しい歌を覚えたら、すぐに歌うでしょう。", kana: "あたらしい うた を おぼえたら、 すぐに うたうでしょう。", romaji: "Atarashii uta o oboetara, sugu ni utau deshou.", meaning: "Kalau sudah hafal lagu baru, mungkin langsung nyanyi." },
              { jp: "パーティーの余興で歌うでしょう、きっと。", kana: "ぱーてぃー の よきょう で うたうでしょう、 きっと。", romaji: "Paati no yokyou de utau deshou, kitto.", meaning: "Di pesta nanti, mungkin nyanyi sebagai hiburan." },
              { jp: "来年のコンサートではプロみたいに歌うでしょう。", kana: "らいねん の こんさーと で は ぷろ みたい に うたうでしょう。", romaji: "Rainen no konsaato de wa puro mitai ni utau deshou.", meaning: "Tahun depan di konser, mungkin nyanyi kayak artis pro." },
              { jp: "家族の前でももう恥ずかしがらずに歌うでしょう。", kana: "かぞく の まえ で も もう はずかしがらず に うたうでしょう。", romaji: "Kazoku no mae de mo mou hazukashigarazu ni utau deshou.", meaning: "Di depan keluarga pun, mungkin sudah nggak malu lagi nyanyi." }
            ]
          }]
        },
        {
          name: "Ichidan",
          examples: [{
            base: "始める",
            transformed: "始めるでしょう",
            kana: "はじめる → はじめるでしょう",
            romaji: "hajimeru → hajimeru deshou",
            meaning: "mungkin mulai (dugaan sopan)",
            sentences: [
              { jp: "来月から新しいダイエットを始めるでしょう。", kana: "らいげつ から あたらしい だいえっと を はじめるでしょう。", romaji: "Raigetsu kara atarashii daietto o hajimeru deshou.", meaning: "Mulai bulan depan, mungkin mulai diet baru." },
              { jp: "明日からジムに通い始めるでしょう。", kana: "あした から じむ に かよい はじめるでしょう。", romaji: "Ashita kara jimu ni kayoi hajimeru deshou.", meaning: "Mulai besok, mungkin mulai rutin ke gym." },
              { jp: "来年から副業を始めるでしょう。", kana: "らいねん から ふくぎょう を はじめるでしょう。", romaji: "Rainen kara fukugyou o hajimeru deshou.", meaning: "Mulai tahun depan, mungkin mulai side hustle." },
              { jp: "春になったらガーデニングを始めるでしょう。", kana: "はる に なったら がーでにんぐ を はじめるでしょう。", romaji: "Haru ni nattara gaadeningu o hajimeru deshou.", meaning: "Pas musim semi, mungkin mulai berkebun." },
              { jp: "試験が終わったら、新しい趣味を始めるでしょう。", kana: "しけん が おわったら、 あたらしい しゅみ を はじめるでしょう。", romaji: "Shiken ga owattara, atarashii shumi o hajimeru deshou.", meaning: "Setelah ujian selesai, mungkin mulai hobi baru." },
              { jp: "お金が貯まったら、投資を始めるでしょう。", kana: "おかね が たまったら、 とうし を はじめるでしょう。", romaji: "Okane ga tamattara, toushi o hajimeru deshou.", meaning: "Kalau tabungan sudah cukup, mungkin mulai investasi." },
              { jp: "日本語の勉強を本格的に始めるでしょう。", kana: "にほんご の べんきょう を ほんかく てき に はじめるでしょう。", romaji: "Nihongo no benkyou o honkaku teki ni hajimeru deshou.", meaning: "Mungkin mulai belajar bahasa Jepang secara serius." },
              { jp: "退屈な毎日を変えるために、何か新しいことを始めるでしょう。", kana: "たいくつ な まいにち を かえる ために、 なにか あたらしい こと を はじめるでしょう。", romaji: "Taikutsu na mainichi o kaeru tame ni, nanika atarashii koto o hajimeru deshou.", meaning: "Biar hari-hari nggak bosen, mungkin mulai sesuatu yang baru." },
              { jp: "会社で新しいプロジェクトを始めるでしょう。", kana: "かいしゃ で あたらしい ぷろじぇくと を はじめるでしょう。", romaji: "Kaisha de atarashii purojekuto o hajimeru deshou.", meaning: "Di kantor, mungkin mulai proyek baru." },
              { jp: "来週から早起きを始めるでしょう、きっと。", kana: "らいしゅう から はやおき を はじめるでしょう、 きっと。", romaji: "Raishuu kara hayaoki o hajimeru deshou, kitto.", meaning: "Mulai minggu depan, mungkin mulai bangun pagi." }
            ]
          }]
        },
        {
          name: "Irregular",
          examples: [{
            base: "旅行する",
            transformed: "旅行するでしょう",
            kana: "りょこうする → りょこうするでしょう",
            romaji: "ryokou suru → ryokou suru deshou",
            meaning: "mungkin bepergian / liburan (dugaan sopan)",
            sentences: [
              { jp: "夏休みは海外に旅行するでしょう。", kana: "なつやすみ は かいがい に りょこうするでしょう。", romaji: "Natsuyasumi wa kaigai ni ryokou suru deshou.", meaning: "Libur musim panas mungkin traveling ke luar negeri." },
              { jp: "ゴールデンウィークに京都へ旅行するでしょう。", kana: "ごーるでんうぃーく に きょうと へ りょこうするでしょう。", romaji: "Gooruden wiiku ni Kyouto e ryokou suru deshou.", meaning: "Di Golden Week, mungkin liburan ke Kyoto." },
              { jp: "お金が貯まったら、ヨーロッパに旅行するでしょう。", kana: "おかね が たまったら、 よーろっぱ に りょこうするでしょう。", romaji: "Okane ga tamattara, yooroppa ni ryokou suru deshou.", meaning: "Kalau duit sudah terkumpul, mungkin liburan ke Eropa." },
              { jp: "友達と一緒に温泉旅行するでしょう。", kana: "ともだち と いっしょ に おんせん りょこうするでしょう。", romaji: "Tomodachi to issho ni onsen ryokou suru deshou.", meaning: "Bersama teman mungkin liburan ke onsen." },
              { jp: "来年は日本一周旅行するでしょう。", kana: "らいねん は にほんいっしゅう りょこうするでしょう。", romaji: "Rainen wa Nihon isshuu ryokou suru deshou.", meaning: "Tahun depan mungkin keliling Jepang." },
              { jp: "飛行機のチケットが安くなったら、すぐに旅行するでしょう。", kana: "ひこうき の ちけっと が やすくなったら、 すぐに りょこうするでしょう。", romaji: "Hikouki no chiketto ga yasuku nattara, sugu ni ryokou suru deshou.", meaning: "Kalau tiket pesawat lagi murah, mungkin langsung booking trip." },
              { jp: "桜の季節に東京へ旅行するでしょう。", kana: "さくら の きせつ に とうきょう へ りょこうするでしょう。", romaji: "Sakura no kisetsu ni Toukyou e ryokou suru deshou.", meaning: "Musim sakura nanti, mungkin traveling ke Tokyo." },
              { jp: "彼氏とロマンチックな旅行するでしょう。", kana: "かれし と ろまんちっく な りょこうするでしょう。", romaji: "Kareshi to romanchikku na ryokou suru deshou.", meaning: "Bersama pacar mungkin liburan romantis." },
              { jp: "退職したら、世界中を旅行するでしょう。", kana: "たいしょく したら、 せかいじゅう を りょこうするでしょう。", romaji: "Taishoku shitara, sekaijuu o ryokou suru deshou.", meaning: "Setelah pensiun, mungkin keliling dunia." },
              { jp: "いい天気なら、週末に日帰り旅行するでしょう。", kana: "いい てんき なら、 しゅうまつ に ひがえり りょこうするでしょう。", romaji: "Ii tenki nara, shuumatsu ni higaeri ryokou suru deshou.", meaning: "Kalau cuaca bagus, akhir pekan mungkin jalan-jalan sehari." }
            ]
          }]
        }
      ]
    },
	    {
      id: "vf-10",
      level: "N4",
      order: 10,
      title: "~ないでしょう • Dugaan Negatif Sopan",
      summary: "Dugaan Negatif Sopan (Mungkin tidak… / Kayaknya nggak akan…) (N4). Bentuk ini dipakai buat prediksi negatif dengan nada sopan & lembut. Mirip 'kayaknya tidak...', 'mungkin tidak...', 'rasanya tidak akan...'. Cocok banget buat ngomong rencana yang batal, opini ringan, atau ramalan cuaca buruk.",
      formulas: [
        { group: "Godan", rule: "Bentuk negatif plain (ubah u jadi a + ない) + でしょう." },
        { group: "Ichidan", rule: "Bentuk negatif plain (hapus ru + ない) + でしょう." },
        { group: "Irregular", rule: "する → しないでしょう, 来る → こないでしょう." }
      ],
      groups: [
        {
          name: "Godan",
          examples: [{
            base: "踊る",
            transformed: "踊らないでしょう",
            kana: "おどる → おどらないでしょう",
            romaji: "odoru → odoranai deshou",
            meaning: "mungkin tidak akan menari (dugaan negatif sopan)",
            sentences: [
              { jp: "今日は疲れてるから、クラブで踊らないでしょう。", kana: "きょう は つかれてる から、 くらぶ で おどらないでしょう。", romaji: "Kyou wa tsukareteru kara, kurabu de odoranai deshou.", meaning: "Hari ini capek, jadi mungkin tidak akan menari di klub." },
              { jp: "あの人、恥ずかしがり屋だからステージで踊らないでしょう。", kana: "あの ひと、 はずかしがりや だから すてーじ で おどらないでしょう。", romaji: "Ano hito, hazukashigariya dakara suteeji de odoranai deshou.", meaning: "Orang itu pemalu, jadi mungkin tidak akan menari di panggung." },
              { jp: "雨が降ったら、屋外のダンスイベントで踊らないでしょう。", kana: "あめ が ふったら、 おくがい の だんす いべんと で おどらないでしょう。", romaji: "Ame ga futtara, okugai no dansu ibento de odoranai deshou.", meaning: "Kalau hujan, mungkin tidak akan menari di acara outdoor." },
              { jp: "結婚式でそんなに派手に踊らないでしょう。", kana: "けっこんしき で そんな に はで に おどらないでしょう。", romaji: "Kekkonshiki de sonna ni hade ni odoranai deshou.", meaning: "Di pesta pernikahan mungkin tidak akan menari terlalu heboh." },
              { jp: "年取ったら、もう夜中まで踊らないでしょう。", kana: "とし とったら、 もう よなか まで おどらないでしょう。", romaji: "Toshi tottara, mou yonaka made odoranai deshou.", meaning: "Kalau sudah tua, mungkin tidak akan menari sampai tengah malam lagi." },
              { jp: "足が痛い時は絶対に踊らないでしょう。", kana: "あし が いたい とき は ぜったい に おどらないでしょう。", romaji: "Ashi ga itai toki wa zettai ni odoranai deshou.", meaning: "Kalau kaki sakit, pasti tidak akan menari." },
              { jp: "新しいダンスが難しすぎて、すぐ踊らないでしょう。", kana: "あたらしい だんす が むずかしすぎて、 すぐ おどらないでしょう。", romaji: "Atarashii dansu ga muzukashisugite, sugu odoranai deshou.", meaning: "Tari baru terlalu susah, mungkin tidak akan langsung menari." },
              { jp: "友達が誘っても、明日は早いから踊らないでしょう。", kana: "ともだち が さそっても、 あした は はやい から おどらないでしょう。", romaji: "Tomodachi ga sasottemo, ashita wa hayai kara odoranai deshou.", meaning: "Meski teman mengajak, besok harus bangun pagi jadi mungkin tidak akan menari." },
              { jp: "この曲、テンポが遅いからあんまり踊らないでしょう。", kana: "この きょく、 てんぽ が おそい から あんまり おどらないでしょう。", romaji: "Kono kyoku, tenpo ga osoi kara anmari odoranai deshou.", meaning: "Lagu ini temponya lambat, jadi mungkin tidak akan terlalu menari." },
              { jp: "彼女は人前で一人で踊らないでしょう。", kana: "かのじょ は ひとまえ で ひとり で おどらないでしょう。", romaji: "Kanojo wa hitomae de hitori de odoranai deshou.", meaning: "Dia mungkin tidak akan menari sendirian di depan orang." }
            ]
          }]
        },
        {
          name: "Ichidan",
          examples: [{
            base: "続ける",
            transformed: "続けないでしょう",
            kana: "つづける → つづけないでしょう",
            romaji: "tsuzukeru → tsuzukenai deshou",
            meaning: "mungkin tidak akan melanjutkan (dugaan negatif sopan)",
            sentences: [
              { jp: "このドラマ、つまらないから第2話は続けないでしょう。", kana: "この どらま、 つまらない から だい2わ は つづけないでしょう。", romaji: "Kono dorama, tsumaranai kara dai ni wa wa tsuzukenai deshou.", meaning: "Drama ini kurang menarik, jadi mungkin tidak akan melanjutkan episode kedua." },
              { jp: "ダイエット、3日で続けないでしょう。", kana: "だいえっと、 みっか で つづけないでしょう。", romaji: "Daitto, mikka de tsuzukenai deshou.", meaning: "Dietnya mungkin hanya bertahan tiga hari saja." },
              { jp: "彼、仕事がきついからその会社を続けないでしょう。", kana: "かれ、 しごと が きつい から その かいしゃ を つづけないでしょう。", romaji: "Kare, shigoto ga kitsui kara sono kaisha o tsuzukenai deshou.", meaning: "Pekerjaannya berat, jadi mungkin tidak akan melanjutkan di perusahaan itu." },
              { jp: "英語の勉強、忙しくなったら続けないでしょう。", kana: "えいご の べんきょう、 いそがしく なったら つづけないでしょう。", romaji: "Eigo no benkyou, isogashiku nattara tsuzukenai deshou.", meaning: "Kalau mulai sibuk, mungkin tidak akan melanjutkan belajar bahasa Inggris." },
              { jp: "このゲーム、難しすぎて最後まで続けないでしょう。", kana: "この げーむ、 むずかしすぎて さいご まで つづけないでしょう。", romaji: "Kono geemu, muzukashisugite saigo made tsuzukenai deshou.", meaning: "Game ini terlalu sulit, mungkin tidak akan sampai akhir." },
              { jp: "ジム通い、冬になったら続けないでしょう。", kana: "じむ かよい、 ふゆ に なったら つづけないでしょう。", romaji: "Jimu kayoi, fuyu ni nattara tsuzukenai deshou.", meaning: "Musim dingin nanti mungkin tidak akan melanjutkan ke gym." },
              { jp: "彼女との関係、喧嘩ばっかりだから続けないでしょう。", kana: "かのじょ と の かんけい、 けんか ばっかり だから つづけないでしょう。", romaji: "Kanojo to no kankei, kenka bakkari dakara tsuzukenai deshou.", meaning: "Hubungannya sering bertengkar, jadi mungkin tidak akan dilanjutkan." },
              { jp: "このプロジェクト、予算が足りなかったら続けないでしょう。", kana: "この ぷろじぇくと、 よさん が たりなかったら つづけないでしょう。", romaji: "Kono purojekuto, yosan ga tarinakattara tsuzukenai deshou.", meaning: "Kalau anggaran kurang, mungkin tidak akan melanjutkan proyek ini." },
              { jp: "ピアノの練習、受験シーズンになったら続けないでしょう。", kana: "ぴあの の れんしゅう、 じゅけん しーずん に なったら つづけないでしょう。", romaji: "Piano no renshuu, juken shiizun ni nattara tsuzukenai deshou.", meaning: "Musim ujian nanti mungkin tidak akan melanjutkan latihan piano." },
              { jp: "副業、疲れたらすぐ続けないでしょう。", kana: "ふくぎょう、 つかれたら すぐ つづけないでしょう。", romaji: "Fukugyou, tsukaretara sugu tsuzukenai deshou.", meaning: "Kalau sudah lelah, pekerjaan sampingan mungkin langsung dihentikan." }
            ]
          }]
        },
        {
          name: "Irregular",
          examples: [{
            base: "結婚する",
            transformed: "結婚しないでしょう",
            kana: "けっこんする → けっこんしないでしょう",
            romaji: "kekkon suru → kekkon shinai deshou",
            meaning: "mungkin tidak akan menikah (dugaan negatif sopan)",
            sentences: [
              { jp: "まだ20代だから、すぐ結婚しないでしょう。", kana: "まだ にじゅうだい だから、 すぐ けっこんしないでしょう。", romaji: "Mada nijuudai dakara, sugu kekkon shinai deshou.", meaning: "Masih berusia 20-an, jadi mungkin tidak akan langsung menikah." },
              { jp: "仕事が忙しすぎて、来年も結婚しないでしょう。", kana: "しごと が いそがしすぎて、 らいねん も けっこんしないでしょう。", romaji: "Shigoto ga isogashisugite, rainen mo kekkon shinai deshou.", meaning: "Pekerjaan terlalu sibuk, tahun depan pun mungkin tidak akan menikah." },
              { jp: "彼氏と喧嘩が多いから、結婚しないでしょう。", kana: "かれし と けんか が おおい から、 けっこんしないでしょう。", romaji: "Kareshi to kenka ga ooi kara, kekkon shinai deshou.", meaning: "Sering bertengkar dengan pacar, jadi mungkin tidak akan menikah." },
              { jp: "お金が貯まらない限り、結婚しないでしょう。", kana: "おかね が たまらない かぎり、 けっこんしないでしょう。", romaji: "Okane ga tamaranai kagiri, kekkon shinai deshou.", meaning: "Selama uang belum terkumpul, mungkin tidak akan menikah." },
              { jp: "親が反対してるから、すぐには結婚しないでしょう。", kana: "おや が はんたい してる から、 すぐ に は けっこんしないでしょう。", romaji: "Oya ga hantai shiteru kara, sugu ni wa kekkon shinai deshou.", meaning: "Orang tua masih menolak, jadi mungkin tidak akan menikah dulu." },
              { jp: "自由が好きだから、30歳までは結婚しないでしょう。", kana: "じゆう が すき だから、 さんじゅっさい まで は けっこんしないでしょう。", romaji: "Jiyuu ga suki dakara, sanjussai made wa kekkon shinai deshou.", meaning: "Suka kebebasan, jadi sampai usia 30 tahun mungkin tidak akan menikah." },
              { jp: "彼女がまだキャリアを優先してるから、結婚しないでしょう。", kana: "かのじょ が まだ きゃりあ を ゆうせん してる から、 けっこんしないでしょう。", romaji: "Kanojo ga mada kyaria o yuusen shiteru kara, kekkon shinai deshou.", meaning: "Dia masih memprioritaskan karier, jadi mungkin tidak akan menikah dulu." },
              { jp: "コロナの影響で式を挙げられないなら、結婚しないでしょう。", kana: "ころな の えいきょう で しき を あげられない なら、 けっこんしないでしょう。", romaji: "Korona no eikyou de shiki o agerarenai nara, kekkon shinai deshou.", meaning: "Kalau karena Corona tidak bisa mengadakan pesta, mungkin tidak akan menikah." },
              { jp: "いい出会いがなかったら、一生結婚しないでしょう。", kana: "いい であい が なかったら、 いっしょう けっこんしないでしょう。", romaji: "Ii deai ga nakattara, isshou kekkon shinai deshou.", meaning: "Kalau tidak bertemu jodoh yang tepat, mungkin seumur hidup tidak akan menikah." },
              { jp: "今は一人でいたいから、今年は結婚しないでしょう。", kana: "いま は ひとり で いたい から、 ことし は けっこんしないでしょう。", romaji: "Ima wa hitori de itai kara, kotoshi wa kekkon shinai deshou.", meaning: "Saat ini ingin sendiri, jadi tahun ini mungkin tidak akan menikah." }
            ]
          }]
        }
      ]
    },
    {
      id: "vf-11",
      level: "N5",
      order: 11,
      title: "~るよ • Present Casual (Penekanan)",
      summary: "Present Casual dengan penekanan よ (N5). Bentuk santai untuk menyatakan sesuatu yang akan dilakukan atau prediksi dengan nada tegas tapi ramah. Mirip 'saya akan...', 'pasti...', 'akan...' dalam percakapan sehari-hari dengan teman atau keluarga.",
      formulas: [
        { group: "Godan", rule: "Bentuk kamus + よ" },
        { group: "Ichidan", rule: "Bentuk kamus + よ" },
        { group: "Irregular", rule: "Bentuk kamus + よ (する → するよ, 来る → 来るよ)" }
      ],
      groups: [
        {
          name: "Godan",
          examples: [{
            base: "遊ぶ",
            transformed: "遊ぶよ",
            kana: "あそぶ → あそぶよ",
            romaji: "asobu → asobu yo",
            meaning: "akan bermain / hangout (penekanan casual)",
            sentences: [
              { jp: "土曜日は友達とゲームセンターで遊ぶよ。", kana: "どようび は ともだち と げーむせんたー で あそぶよ。", romaji: "Doyoubi wa tomodachi to geemusentaa de asobu yo.", meaning: "Hari Sabtu nanti saya akan bermain ke game center bersama teman." },
              { jp: "仕事終わったらすぐカラオケに遊ぶよ。", kana: "しごと おわったら すぐ からおけ に あそぶよ。", romaji: "Shigoto owattara sugu karaoke ni asobu yo.", meaning: "Setelah kerja selesai, saya akan langsung ke karaoke untuk bersenang-senang." },
              { jp: "夏休みは海でいっぱい遊ぶよ。", kana: "なつやすみ は うみ で いっぱい あそぶよ。", romaji: "Natsuyasumi wa umi de ippai asobu yo.", meaning: "Libur musim panas saya akan bermain banyak di pantai." },
              { jp: "新しいボードゲーム買ったから、今週末遊ぶよ。", kana: "あたらしい ぼーどげーむ かった から、 こんしゅうまつ あそぶよ。", romaji: "Atarashii boodogeemu katta kara, konshuumatsu asobu yo.", meaning: "Saya baru membeli board game, akhir pekan ini pasti akan main." },
              { jp: "子供たちと一緒に公園で遊ぶよ。", kana: "こども たち と いっしょ に こうえん で あそぶよ。", romaji: "Kodomo tachi to issho ni kouen de asobu yo.", meaning: "Saya akan bermain di taman bersama anak-anak." },
              { jp: "雨が止んだら、外で遊ぶよ。", kana: "あめ が やんだら、 そと で あそぶよ。", romaji: "Ame ga yandara, soto de asobu yo.", meaning: "Begitu hujan berhenti, saya akan langsung bermain di luar." },
              { jp: "久しぶりに昔の友達と遊ぶよ。", kana: "ひさしぶり に むかし の ともだち と あそぶよ。", romaji: "Hisashiburi ni mukashi no tomodachi to asobu yo.", meaning: "Sudah lama tidak bertemu, saya akan bermain bersama teman lama." },
              { jp: "夜はオンラインで友達と遊ぶよ。", kana: "よる は おんらいん で ともだち と あそぶよ。", romaji: "Yoru wa onrain de tomodachi to asobu yo.", meaning: "Malam ini saya akan bermain online bersama teman." },
              { jp: "誕生日には絶対に遊ぶよ、約束！", kana: "たんじょうび に は ぜったい に あそぶよ、 やくそく！", romaji: "Tanjoubi ni wa zettai ni asobu yo, yakusoku!", meaning: "Di hari ulang tahun saya pasti akan bermain bersama, janji!" },
              { jp: "ストレス発散に今週たくさん遊ぶよ。", kana: "すとれす はっさん に こんしゅう たくさん あそぶよ。", romaji: "Sutoresu hassan ni konshuu takusan asobu yo.", meaning: "Untuk melepaskan stres, minggu ini saya akan bermain banyak." }
            ]
          }]
        },
        {
          name: "Ichidan",
          examples: [{
            base: "変える",
            transformed: "変えるよ",
            kana: "かえる → かえるよ",
            romaji: "kaeru → kaeru yo",
            meaning: "akan mengubah (penekanan casual)",
            sentences: [
              { jp: "来月から髪型を変えるよ。", kana: "らいげつ から かみがた を かえるよ。", romaji: "Raigetsu kara kamigata o kaeru yo.", meaning: "Bulan depan saya akan mengubah gaya rambut." },
              { jp: "ダイエット失敗したから、メニューを変えるよ。", kana: "だいえっと しっぱい した から、 めにゅー を かえるよ。", romaji: "Daitto shippai shita kara, menyu o kaeru yo.", meaning: "Diet gagal, jadi saya akan mengubah menu makannya." },
              { jp: "部屋のレイアウトを変えるよ、気分転換に。", kana: "へや の れいあうと を かえるよ、 きぶんてんかん に。", romaji: "Heya no reiauto o kaeru yo, kibun tenkan ni.", meaning: "Saya akan mengubah tata letak kamar untuk menyegarkan suasana." },
              { jp: "今年の目標を変えるよ、もっと現実的に。", kana: "ことし の もくひょう を かえるよ、 もっと げんじつてき に。", romaji: "Kotoshi no mokuhyou o kaeru yo, motto genjitsuteki ni.", meaning: "Tahun ini saya akan mengubah targetnya agar lebih realistis." },
              { jp: "スマホの壁紙を変えるよ、毎日新しいのに。", kana: "すまほ の かべがみ を かえるよ、 まいにち あたらしい の に。", romaji: "Sumaho no kabegami o kaeru yo, mainichi atarashii no ni.", meaning: "Saya akan mengganti wallpaper ponsel setiap hari agar selalu segar." },
              { jp: "通勤ルートを変えるよ、渋滞避けるために。", kana: "つうきん るーと を かえるよ、 じゅうたい さける ために。", romaji: "Tsuukin ruuto o kaeru yo, juutai sakeru tame ni.", meaning: "Saya akan mengubah rute perjalanan ke kantor agar menghindari macet." },
              { jp: "考え方をちょっと変えるよ、前向きに。", kana: "かんがえかた を ちょっと かえるよ、 まえむき に。", romaji: "Kangaekata o chotto kaeru yo, maemuki ni.", meaning: "Saya akan sedikit mengubah cara berpikir agar lebih positif." },
              { jp: "来年から勉強法を変えるよ。", kana: "らいねん から べんきょうほう を かえるよ。", romaji: "Rainen kara benkyouhou o kaeru yo.", meaning: "Mulai tahun depan saya akan mengubah cara belajar." },
              { jp: "恋愛観を変えるよ、もう傷つかないように。", kana: "れんあいかん を かえるよ、 もう きずつかない ように。", romaji: "Ren'aikan o kaeru yo, mou kizutsukanai you ni.", meaning: "Saya akan mengubah pandangan tentang cinta agar tidak terluka lagi." },
              { jp: "明日の予定を変えるよ、雨みたいだから。", kana: "あした の よてい を かえるよ、 あめ みたい だから。", romaji: "Ashita no yotei o kaeru yo, ame mitai dakara.", meaning: "Rencana besok saya akan ubah karena sepertinya akan hujan." }
            ]
          }]
        },
        {
          name: "Irregular",
          examples: [{
            base: "参加する",
            transformed: "参加するよ",
            kana: "さんかする → さんかするよ",
            romaji: "sanka suru → sanka suru yo",
            meaning: "akan ikut / berpartisipasi (penekanan casual)",
            sentences: [
              { jp: "明日のオフ会に絶対参加するよ。", kana: "あした の おふかい に ぜったい さんかするよ。", romaji: "Ashita no ofukai ni zettai sanka suru yo.", meaning: "Off-meeting besok saya pasti akan ikut!" },
              { jp: "今年のマラソンに初めて参加するよ。", kana: "ことし の まらそん に はじめて さんかするよ。", romaji: "Kotoshi no marason ni hajimete sanka suru yo.", meaning: "Tahun ini saya akan ikut maraton untuk pertama kalinya." },
              { jp: "オンラインセミナーに参加するよ、勉強になるから。", kana: "おんらいん せみなー に さんかするよ、 べんきょう に なる から。", romaji: "Onrain seminaa ni sanka suru yo, benkyou ni naru kara.", meaning: "Saya akan ikut seminar online karena banyak ilmunya." },
              { jp: "友達の誕生日パーティーに参加するよ。", kana: "ともだち の たんじょうび ぱーてぃー に さんかするよ。", romaji: "Tomodachi no tanjoubi paatii ni sanka suru yo.", meaning: "Saya akan ikut pesta ulang tahun teman." },
              { jp: "来週のボランティア活動に参加するよ。", kana: "らいしゅう の ぼらんてぃあ かつどう に さんかするよ。", romaji: "Raishuu no borantia katsudou ni sanka suru yo.", meaning: "Minggu depan saya akan ikut kegiatan sukarela." },
              { jp: "新しくできたサークルに参加するよ。", kana: "あたらしく できた さーくる に さんかするよ。", romaji: "Atarashiku dekita saakuru ni sanka suru yo.", meaning: "Ada lingkaran baru, saya akan ikut." },
              { jp: "会社の忘年会に参加するよ、今年は。", kana: "かいしゃ の ぼうねんかい に さんかするよ、 ことし は。", romaji: "Kaisha no bounenkai ni sanka suru yo, kotoshi wa.", meaning: "Tahun ini saya akan ikut acara tahun baru perusahaan." },
              { jp: "無料の英語イベントに参加するよ。", kana: "むりょう の えいご いべんと に さんかするよ。", romaji: "Muryou no eigo ibento ni sanka suru yo.", meaning: "Saya akan ikut acara bahasa Inggris gratis." },
              { jp: "家族旅行の計画会議に参加するよ。", kana: "かぞく りょこう の けいかく かいぎ に さんかするよ。", romaji: "Kazoku ryokou no keikaku kaigi ni sanka suru yo.", meaning: "Saya akan ikut rapat perencanaan liburan keluarga." },
              { jp: "次のライブに絶対参加するよ、チケット取った！", kana: "つぎ の らいぶ に ぜったい さんかするよ、 ちけっと とった！", romaji: "Tsugi no raibu ni zettai sanka suru yo, chiketto totta!", meaning: "Konser berikutnya saya pasti akan ikut, tiket sudah didapat!" }
            ]
          }]
        }
      ]
    },
	    {
      id: "vf-12",
      level: "N5",
      order: 12,
      title: "~ないよ • Negatif Casual (Penekanan)",
      summary: "Negatif Casual dengan penekanan よ (N5). Bentuk santai untuk menyatakan 'tidak akan' atau 'tidak melakukan' dengan nada tegas tapi ramah. Mirip 'saya tidak akan...', 'nggak kok...', 'pasti tidak...' dalam percakapan sehari-hari dengan teman atau keluarga.",
      formulas: [
        { group: "Godan", rule: "Bentuk negatif plain (ubah u jadi a + ない) + よ" },
        { group: "Ichidan", rule: "Bentuk negatif plain (hapus ru + ない) + よ" },
        { group: "Irregular", rule: "Bentuk negatif plain + よ (する → しないよ)" }
      ],
      groups: [
        {
          name: "Godan",
          examples: [{
            base: "走る",
            transformed: "走らないよ",
            kana: "はしる → はしらないよ",
            romaji: "hashiru → hashiranai yo",
            meaning: "tidak akan lari (penekanan casual)",
            sentences: [
              { jp: "今日は雨だからジョギング走らないよ。", kana: "きょう は あめ だから じょぎんぐ はしらないよ。", romaji: "Kyou wa ame dakara jogingu hashiranai yo.", meaning: "Hari ini hujan, jadi saya tidak akan lari jogging." },
              { jp: "足が痛いからもう走らないよ。", kana: "あし が いたい から もう はしらないよ。", romaji: "Ashi ga itai kara mou hashiranai yo.", meaning: "Kaki saya sakit, jadi saya tidak akan lari lagi." },
              { jp: "夜遅いから一人で走らないよ。", kana: "よる おそい から ひとり で はしらないよ。", romaji: "Yoru osoi kara hitori de hashiranai yo.", meaning: "Sudah malam, saya tidak akan lari sendirian." },
              { jp: "マラソン大会には今年走らないよ。", kana: "まらそん たいかい に は ことし はしらないよ。", romaji: "Marason taikai ni wa kotoshi hashiranai yo.", meaning: "Tahun ini saya tidak akan ikut lari maraton." },
              { jp: "疲れてる時は絶対走らないよ。", kana: "つかれてる とき は ぜったい はしらないよ。", romaji: "Tsukareteru toki wa zettai hashiranai yo.", meaning: "Kalau lagi capek, saya pasti tidak akan lari." },
              { jp: "新しいシューズが届くまで走らないよ。", kana: "あたらしい しゅーず が とどく まで はしらないよ。", romaji: "Atarashii shuuzu ga todoku made hashiranai yo.", meaning: "Sampai sepatu baru datang, saya tidak akan lari dulu." },
              { jp: "坂道が多いからあんまり走らないよ。", kana: "さかみち が おおい から あんまり はしらないよ。", romaji: "Sakamichi ga ooi kara anmari hashiranai yo.", meaning: "Banyak tanjakan, jadi saya tidak akan lari terlalu banyak." },
              { jp: "冬は寒いから外で走らないよ。", kana: "ふゆ は さむい から そと で はしらないよ。", romaji: "Fuyu wa samui kara soto de hashiranai yo.", meaning: "Musim dingin dingin sekali, saya tidak akan lari di luar." },
              { jp: "怪我したらもう走らないよ。", kana: "けが したら もう はしらないよ。", romaji: "Kega shitara mou hashiranai yo.", meaning: "Kalau cedera, saya tidak akan lari lagi." },
              { jp: "明日は大事な会議があるから走らないよ。", kana: "あした は だいじな かいぎ が ある から はしらないよ。", romaji: "Ashita wa daijina kaigi ga aru kara hashiranai yo.", meaning: "Besok ada rapat penting, jadi saya tidak akan lari." }
            ]
          }]
        },
        {
          name: "Ichidan",
          examples: [{
            base: "教える",
            transformed: "教えないよ",
            kana: "おしえる → おしえないよ",
            romaji: "oshieru → oshienai yo",
            meaning: "tidak akan mengajarkan (penekanan casual)",
            sentences: [
              { jp: "この秘密は絶対に誰にも教えないよ。", kana: "この ひみつ は ぜったい に だれ に も おしえないよ。", romaji: "Kono himitsu wa zettai ni dare ni mo oshienai yo.", meaning: "Rahasia ini saya tidak akan ajarkan ke siapa pun." },
              { jp: "まだ上手にできないから教えないよ。", kana: "まだ じょうず に できない から おしえないよ。", romaji: "Mada jouzu ni dekinai kara oshienai yo.", meaning: "Saya belum bisa dengan baik, jadi tidak akan mengajarkan dulu." },
              { jp: "忙しい時は友達に教えたいことも教えないよ。", kana: "いそがしい とき は ともだち に おしえたい こと も おしえないよ。", romaji: "Isogashii toki wa tomodachi ni oshietai koto mo oshienai yo.", meaning: "Kalau lagi sibuk, saya tidak akan mengajarkan hal yang sebenarnya ingin saya ajarkan." },
              { jp: "試験の答えは教えないよ、自分で考えなさい。", kana: "しけん の こたえ は おしえないよ、 じぶん で かんがえなさい。", romaji: "Shiken no kotae wa oshienai yo, jibun de kangaenasai.", meaning: "Jawaban ujian saya tidak akan kasih, pikirkan sendiri." },
              { jp: "このゲームの攻略法はまだ教えないよ。", kana: "この げーむ の こうりゃくほう は まだ おしえないよ。", romaji: "Kono geemu no kouryaku hou wa mada oshienai yo.", meaning: "Cara main game ini saya belum akan ajarkan." },
              { jp: "日本語の文法はもう少し勉強してから教えないよ。", kana: "にほんご の ぶんぽう は もう すこし べんきょう してから おしえないよ。", romaji: "Nihongo no bunpou wa mou sukoshi benkyou shite kara oshienai yo.", meaning: "Tata bahasa Jepang saya akan ajarkan setelah saya belajar lebih dulu." },
              { jp: "料理のレシピは特別な人にしか教えないよ。", kana: "りょうり の れしぴ は とくべつ な ひと に しか おしえないよ。", romaji: "Ryouri no reshipi wa tokubetsu na hito ni shika oshienai yo.", meaning: "Resep masakan saya hanya ajarkan ke orang spesial." },
              { jp: "ピアノのコツは今は教えないよ、練習してからね。", kana: "ぴあの の こつ は いま は おしえないよ、 れんしゅう してから ね。", romaji: "Piano no kotsu wa ima wa oshienai yo, renshuu shite kara ne.", meaning: "Trik main piano sekarang saya tidak akan ajarkan, latihan dulu ya." },
              { jp: "このアプリの使い方は動画見ながら教えないよ。", kana: "この あぷり の つかいかた は どうが みながら おしえないよ。", romaji: "Kono apuri no tsukaikata wa douga minagara oshienai yo.", meaning: "Cara pakai aplikasi ini saya tidak akan ajarkan sambil nonton video." },
              { jp: "明日は試験だから何も教えないよ。", kana: "あした は しけん だから なにも おしえないよ。", romaji: "Ashita wa shiken dakara nanimo oshienai yo.", meaning: "Besok ujian, jadi saya tidak akan mengajarkan apa pun." }
            ]
          }]
        },
        {
          name: "Irregular",
          examples: [{
            base: "予約する",
            transformed: "予約しないよ",
            kana: "よやくする → よやくしないよ",
            romaji: "yoyaku suru → yoyaku shinai yo",
            meaning: "tidak akan memesan (penekanan casual)",
            sentences: [
              { jp: "今日はもう遅いからレストラン予約しないよ。", kana: "きょう は もう おそい から れすとらん よやくしないよ。", romaji: "Kyou wa mou osoi kara resutoran yoyaku shinai yo.", meaning: "Sudah malam, saya tidak akan pesan restoran hari ini." },
              { jp: "値段が高すぎるから飛行機予約しないよ。", kana: "ねだん が たかすぎる から ひこうき よやくしないよ。", romaji: "Nedan ga takasugiru kara hikouki yoyaku shinai yo.", meaning: "Harganya terlalu mahal, saya tidak akan pesan tiket pesawat." },
              { jp: "まだ予定が決まってないからホテル予約しないよ。", kana: "まだ よてい が きまってない から ほてる よやくしないよ。", romaji: "Mada yotei ga kimattenai kara hoteru yoyaku shinai yo.", meaning: "Rencana belum pasti, jadi saya tidak akan pesan hotel dulu." },
              { jp: "友達が誘ってくれないから映画予約しないよ。", kana: "ともだち が さそってくれない から えいが よやくしないよ。", romaji: "Tomodachi ga sasotte kurenai kara eiga yoyaku shinai yo.", meaning: "Teman tidak mengajak, jadi saya tidak akan pesan tiket film." },
              { jp: "キャンセル料がかかるから今は予約しないよ。", kana: "きゃんせるりょう が かかる から いま は よやくしないよ。", romaji: "Kyanseru ryou ga kakaru kara ima wa yoyaku shinai yo.", meaning: "Ada biaya pembatalan, jadi sekarang saya tidak akan pesan." },
              { jp: "もっと安くなるまで温泉予約しないよ。", kana: "もっと やすくなる まで おんせん よやくしないよ。", romaji: "Motto yasuku naru made onsen yoyaku shinai yo.", meaning: "Sampai harganya lebih murah, saya tidak akan pesan onsen." },
              { jp: "一人で行くのは寂しいから予約しないよ。", kana: "ひとり で いく の は さびしい から よやくしないよ。", romaji: "Hitori de iku no wa sabishii kara yoyaku shinai yo.", meaning: "Pergi sendiri terasa sepi, jadi saya tidak akan pesan." },
              { jp: "来週の予定を見てから予約しないよ。", kana: "らいしゅう の よてい を みて から よやくしないよ。", romaji: "Raishuu no yotei o mite kara yoyaku shinai yo.", meaning: "Saya akan lihat jadwal minggu depan dulu baru pesan." },
              { jp: "アプリがバグってるから今は予約しないよ。", kana: "あぷり が ばぐってる から いま は よやくしないよ。", romaji: "Apuri ga bagutteru kara ima wa yoyaku shinai yo.", meaning: "Aplikasinya lagi error, jadi sekarang tidak akan pesan." },
              { jp: "気分が乗らないから旅行予約しないよ。", kana: "きぶん が のらない から りょこう よやくしないよ。", romaji: "Kibun ga noranai kara ryokou yoyaku shinai yo.", meaning: "Lagi tidak mood, jadi saya tidak akan pesan perjalanan." }
            ]
          }]
        }
      ]
    },
    {
      id: "vf-13",
      level: "N4",
      order: 13,
      title: "~れば • Bentuk Syarat (Kalau…)",
      summary: "Bentuk Syarat (Kalau…) (N4). Digunakan untuk menyatakan 'kalau… maka…'. Sangat natural untuk bicara syarat, kemungkinan, atau nasihat ringan dalam percakapan sehari-hari.",
      formulas: [
        { group: "Godan", rule: "Ubah huruf akhir u menjadi e + ば" },
        { group: "Ichidan", rule: "Hapus ru + れば" },
        { group: "Irregular", rule: "する → すれば, 来る → 来れば" }
      ],
      groups: [
        {
          name: "Godan",
          examples: [{
            base: "書く",
            transformed: "書けば",
            kana: "かく → かけば",
            romaji: "kaku → kakeba",
            meaning: "kalau menulis",
            sentences: [
              { jp: "毎日日記を書けば上達するよ。", kana: "まいにち にっき を かけば じょうたつ するよ。", romaji: "Mainichi nikki o kakeba joutatsu suru yo.", meaning: "Kalau menulis diary setiap hari, kemampuan akan meningkat." },
              { jp: "手紙を書けば気持ちが伝わるはずだ。", kana: "てがみ を かけば きもち が つたわる はず だ。", romaji: "Tegami o kakeba kimochi ga tsutawaru hazu da.", meaning: "Kalau menulis surat, perasaan pasti tersampaikan." },
              { jp: "レポートを書けば先生が褒めてくれる。", kana: "れぽーと を かけば せんせい が ほめてくれる。", romaji: "Repooto o kakeba sensei ga homete kureru.", meaning: "Kalau menulis laporan, guru pasti memuji." },
              { jp: "小説を書けば夢が叶うかもしれない。", kana: "しょうせつ を かけば ゆめ が かなう かもしれない。", romaji: "Shousetsu o kakeba yume ga kanau kamoshirenai.", meaning: "Kalau menulis novel, mimpi mungkin terwujud." },
              { jp: "漢字をたくさん書けば覚えられる。", kana: "かんじ を たくさん かけば おぼえられる。", romaji: "Kanji o takusan kakeba oboerareru.", meaning: "Kalau menulis banyak kanji, pasti bisa diingat." },
              { jp: "メールを書けばすぐに返事が来るよ。", kana: "めーる を かけば すぐに へんじ が くるよ。", romaji: "Meeru o kakeba sugu ni henji ga kuru yo.", meaning: "Kalau menulis email, balasan pasti cepat datang." },
              { jp: "詩を書けば心が落ち着く。", kana: "し を かけば こころ が おちつく。", romaji: "Shi o kakeba kokoro ga ochitsuku.", meaning: "Kalau menulis puisi, hati akan tenang." },
              { jp: "計画を書けば失敗が減る。", kana: "けいかく を かけば しっぱい が へる。", romaji: "Keikaku o kakeba shippai ga heru.", meaning: "Kalau menulis rencana, kegagalan akan berkurang." },
              { jp: "名前を書けば忘れられない。", kana: "なまえ を かけば わすれられない。", romaji: "Namae o kakeba wasurerarenai.", meaning: "Kalau menulis nama, pasti tidak akan lupa." },
              { jp: "ブログを書けばたくさんの人と繋がれる。", kana: "ぶろぐ を かけば たくさん の ひと と つながれる。", romaji: "Burogu o kakeba takusan no hito to tsunagareru.", meaning: "Kalau menulis blog, bisa terhubung dengan banyak orang." }
            ]
          }]
        },
        {
          name: "Ichidan",
          examples: [{
            base: "起きる",
            transformed: "起きれば",
            kana: "おきる → おきれば",
            romaji: "okiru → okireba",
            meaning: "kalau bangun",
            sentences: [
              { jp: "早く起きれば電車に間に合うよ。", kana: "はやく おきれば でんしゃ に まにあうよ。", romaji: "Hayaku okireba densha ni maniau yo.", meaning: "Kalau bangun pagi, pasti kejar kereta." },
              { jp: "7時に起きれば朝ごはんが食べられる。", kana: "しちじ に おきれば あさごはん が たべられる。", romaji: "Shichiji ni okireba asagohan ga taberareru.", meaning: "Kalau bangun jam 7, bisa sarapan." },
              { jp: "毎日同じ時間に起きれば体調が良くなる。", kana: "まいにち おなじ じかん に おきれば たいちょう が よくなる。", romaji: "Mainichi onaji jikan ni okireba taichou ga yoku naru.", meaning: "Kalau bangun di jam yang sama setiap hari, kondisi tubuh akan lebih baik." },
              { jp: "休みの日に遅く起きればゆっくりできる。", kana: "やすみ の ひ に おそく おきれば ゆっくり できる。", romaji: "Yasumi no hi ni osoku okireba yukkuri dekiru.", meaning: "Kalau bangun siang di hari libur, bisa santai." },
              { jp: "アラームをかけ忘れなければ起きられる。", kana: "あらーむ を かけ わすれなければ おきられる。", romaji: "Araamu o kake wasurenakereba okirareru.", meaning: "Kalau tidak lupa pasang alarm, pasti bisa bangun." },
              { jp: "日光を浴びれば自然に起きられる。", kana: "にっこう を あびれば しぜん に おきられる。", romaji: "Nikkou o abireba shizen ni okirareru.", meaning: "Kalau kena sinar matahari, bangun jadi lebih mudah." },
              { jp: "いい夢を見れば気持ちよく起きられる。", kana: "いい ゆめ を みれば きもちよく おきられる。", romaji: "Ii yume o mireba kimochiyoku okirareru.", meaning: "Kalau mimpi indah, bangunnya jadi enak." },
              { jp: "コーヒーを飲めばすぐに起きられる。", kana: "こーひー を のめば すぐに おきられる。", romaji: "Koohii o nomeba sugu ni okirareru.", meaning: "Kalau minum kopi, langsung bisa bangun." },
              { jp: "試験の前日に早く起きれば復習できる。", kana: "しけん の ぜんじつ に はやく おきれば ふくしゅう できる。", romaji: "Shiken no zenjitsu ni hayaku okireba fukushuu dekiru.", meaning: "Kalau bangun pagi sehari sebelum ujian, bisa review." },
              { jp: "冬は暖かい布団から出られれば起きられる。", kana: "ふゆ は あたたかい ふとん から でられれば おきられる。", romaji: "Fuyu wa atatakai futon kara derarereba okirareru.", meaning: "Di musim dingin, kalau bisa keluar dari selimut hangat, pasti bangun." }
            ]
          }]
        },
        {
          name: "Irregular",
          examples: [{
            base: "練習する",
            transformed: "練習すれば",
            kana: "れんしゅうする → れんしゅうすれば",
            romaji: "renshuu suru → renshuu sureba",
            meaning: "kalau berlatih",
            sentences: [
              { jp: "毎日練習すれば上手になるよ。", kana: "まいにち れんしゅうすれば じょうず に なるよ。", romaji: "Mainichi renshuu sureba jouzu ni naru yo.", meaning: "Kalau berlatih setiap hari, pasti jadi mahir." },
              { jp: "もっと練習すれば試合に勝てる。", kana: "もっと れんしゅうすれば しあい に かてる。", romaji: "Motto renshuu sureba shiai ni kateru.", meaning: "Kalau berlatih lebih banyak, pasti bisa menang pertandingan." },
              { jp: "朝練習すれば集中力が高まる。", kana: "あさ れんしゅうすれば しゅうちゅうりょく が たかまる。", romaji: "Asa renshuu sureba shuuchuu ryoku ga takamaru.", meaning: "Kalau berlatih pagi, konsentrasi akan meningkat." },
              { jp: "一緒に練習すれば楽しく続けられる。", kana: "いっしょ に れんしゅうすれば たのしく つづけられる。", romaji: "Issho ni renshuu sureba tanoshiku tsuzukerareru.", meaning: "Kalau berlatih bersama, jadi lebih menyenangkan dan bisa terus." },
              { jp: "録音して練習すれば発音が良くなる。", kana: "ろくおん して れんしゅうすれば はつおん が よくなる。", romaji: "Rokuon shite renshuu sureba hatsuon ga yoku naru.", meaning: "Kalau rekam dan latihan, pengucapan akan lebih baik." },
              { jp: "休まず練習すれば結果が出る。", kana: "やすまず れんしゅうすれば けっか が でる。", romaji: "Yasumanai renshuu sureba kekka ga deru.", meaning: "Kalau latihan tanpa libur, hasil pasti keluar." },
              { jp: "先生と練習すれば間違いが減る。", kana: "せんせい と れんしゅうすれば まちがい が へる。", romaji: "Sensei to renshuu sureba machigai ga heru.", meaning: "Kalau latihan dengan guru, kesalahan akan berkurang." },
              { jp: "ゲーム感覚で練習すれば続けたくなる。", kana: "げーむ かんかく で れんしゅうすれば つづけたくなる。", romaji: "Geemu kankaku de renshuu sureba tsuzuketaku naru.", meaning: "Kalau latihan seperti main game, jadi ingin terus melakukannya." },
              { jp: "目標を決めて練習すれば達成しやすい。", kana: "もくひょう を きめて れんしゅうすれば たっせい しやすい。", romaji: "Mokuhyou o kimete renshuu sureba tassei shiyasui.", meaning: "Kalau latihan dengan target jelas, lebih mudah tercapai." },
              { jp: "楽しんで練習すれば上達が早い。", kana: "たのしんで れんしゅうすれば じょうたつ が はやい。", romaji: "Tanoshinde renshuu sureba joutatsu ga hayai.", meaning: "Kalau berlatih dengan senang hati, kemajuan akan lebih cepat." }
            ]
          }]
        }
      ]
    },
    {
      id: "vf-14",
      level: "N4",
      order: 14,
      title: "~なければ • Bentuk Syarat Negatif",
      summary: "Bentuk Syarat Negatif (Kalau tidak…) (N4). Digunakan untuk menyatakan 'kalau tidak… maka…'. Cocok untuk nasihat, syarat wajib, atau konsekuensi negatif dalam percakapan sehari-hari.",
      formulas: [
        { group: "Godan", rule: "Bentuk negatif plain (ubah u jadi a + ない) + ければ" },
        { group: "Ichidan", rule: "Bentuk negatif plain (hapus ru + ない) + ければ" },
        { group: "Irregular", rule: "しないければ (する), 来なければ (来る)" }
      ],
      groups: [
        {
          name: "Godan",
          examples: [{
            base: "急ぐ",
            transformed: "急がなければ",
            kana: "いそぐ → いそがなければ",
            romaji: "isogu → isoganakereba",
            meaning: "kalau tidak buru-buru",
            sentences: [
              { jp: "今急がなければ電車に遅れるよ。", kana: "いま いそがなければ でんしゃ に おくれるよ。", romaji: "Ima isoganakereba densha ni okureru yo.", meaning: "Kalau tidak buru-buru sekarang, akan ketinggalan kereta." },
              { jp: "宿題を急がなければ夜中までかかる。", kana: "しゅくだい を いそがなければ よなか まで かかる。", romaji: "Shukudai o isoganakereba yonaka made kakaru.", meaning: "Kalau tidak buru-buru mengerjakan PR, sampai tengah malam baru selesai." },
              { jp: "準備を急がなければ時間がない。", kana: "じゅんび を いそがなければ じかん が ない。", romaji: "Junbi o isoganakereba jikan ga nai.", meaning: "Kalau tidak buru-buru mempersiapkan, tidak ada waktu." },
              { jp: "雨が降る前に急がなければ濡れる。", kana: "あめ が ふる まえ に いそがなければ ぬれる。", romaji: "Ame ga furu mae ni isoganakereba nureru.", meaning: "Kalau tidak buru-buru sebelum hujan, pasti basah." },
              { jp: "予約を急がなければ席がなくなる。", kana: "よやく を いそがなければ せき が なくなる。", romaji: "Yoyaku o isoganakereba seki ga nakunaru.", meaning: "Kalau tidak buru-buru memesan, kursi akan habis." },
              { jp: "体調が悪い時は無理に急がなければいい。", kana: "たいちょう が わるい とき は むり に いそがなければ いい。", romaji: "Taichou ga warui toki wa muri ni isoganakereba ii.", meaning: "Kalau sedang tidak enak badan, tidak usah buru-buru." },
              { jp: "締め切りが近いから今急がなければ間に合わない。", kana: "しめきり が ちかい から いま いそがなければ まにあわない。", romaji: "Shimekiri ga chikai kara ima isoganakereba maniawanai.", meaning: "Deadline sudah dekat, kalau tidak buru-buru sekarang tidak akan keburu." },
              { jp: "友達を待たせないように急がなければ。", kana: "ともだち を またせない ように いそがなければ。", romaji: "Tomodachi o matasenai you ni isoganakereba.", meaning: "Agar tidak membuat teman menunggu, harus buru-buru." },
              { jp: "荷物を急がなければ飛行機に乗り遅れる。", kana: "にもつ を いそがなければ ひこうき に のりおくれる。", romaji: "Nimotsu o isoganakereba hikouki ni noriokureru.", meaning: "Kalau tidak buru-buru bawa barang, akan ketinggalan pesawat." },
              { jp: "チャンスを逃さないために急がなければ。", kana: "ちゃんす を のがさない ために いそがなければ。", romaji: "Chansu o nogasanai tame ni isoganakereba.", meaning: "Agar tidak kehilangan kesempatan, harus buru-buru." }
            ]
          }]
        },
        {
          name: "Ichidan",
          examples: [{
            base: "決める",
            transformed: "決めなければ",
            kana: "きめる → きめなければ",
            romaji: "kimeru → kimenakereba",
            meaning: "kalau tidak memutuskan",
            sentences: [
              { jp: "今日決めなければ明日も迷うよ。", kana: "きょう きめなければ あした も まようよ。", romaji: "Kyou kimenakereba ashita mo mayou yo.", meaning: "Kalau tidak memutuskan hari ini, besok masih bingung." },
              { jp: "大学を決めなければ進路が決まらない。", kana: "だいがく を きめなければ しんろ が きまらない。", romaji: "Daigaku o kimenakereba shinro ga kimaranai.", meaning: "Kalau tidak memutuskan universitas, jalur karier tidak jelas." },
              { jp: "メニューを決めなければ時間がかかる。", kana: "めにゅー を きめなければ じかん が かかる。", romaji: "Menyuu o kimenakereba jikan ga kakaru.", meaning: "Kalau tidak memutuskan menu, makanannya lama datang." },
              { jp: "計画を決めなければ何も進まない。", kana: "けいかく を きめなければ なにも すすまない。", romaji: "Keikaku o kimenakereba nanimo susumanai.", meaning: "Kalau tidak memutuskan rencana, tidak ada yang maju." },
              { jp: "服を決めなければ遅刻する。", kana: "ふく を きめなければ ちこく する。", romaji: "Fuku o kimenakereba chikoku suru.", meaning: "Kalau tidak memutuskan baju, akan terlambat." },
              { jp: "将来の夢を決めなければ後悔するかも。", kana: "しょうらい の ゆめ を きめなければ こうかい する かも。", romaji: "Shourai no yume o kimenakereba koukai suru kamo.", meaning: "Kalau tidak memutuskan mimpi masa depan, mungkin menyesal." },
              { jp: "ルールを決めなければみんな混乱する。", kana: "るーる を きめなければ みんな こんらん する。", romaji: "Ruuru o kimenakereba minna konran suru.", meaning: "Kalau tidak memutuskan aturan, semua akan bingung." },
              { jp: "プレゼントを決めなければ間に合わない。", kana: "ぷれぜんと を きめなければ まにあわない。", romaji: "Purezento o kimenakereba maniawanai.", meaning: "Kalau tidak memutuskan hadiah, tidak akan keburu." },
              { jp: "行く場所を決めなければ無駄になる。", kana: "いく ばしょ を きめなければ むだ に なる。", romaji: "Iku basho o kimenakereba muda ni naru.", meaning: "Kalau tidak memutuskan tempat tujuan, semuanya sia-sia." },
              { jp: "早く決めなければチャンスを逃すよ。", kana: "はやく きめなければ ちゃんす を のがすよ。", romaji: "Hayaku kimenakereba chansu o nogasu yo.", meaning: "Kalau tidak cepat memutuskan, kesempatan akan hilang." }
            ]
          }]
        },
        {
          name: "Irregular",
          examples: [{
            base: "連絡する",
            transformed: "連絡しなければ",
            kana: "れんらくする → れんらくしなければ",
            romaji: "renraku suru → renraku shinakereba",
            meaning: "kalau tidak menghubungi",
            sentences: [
              { jp: "今連絡しなければ心配されるよ。", kana: "いま れんらくしなければ しんぱい されるよ。", romaji: "Ima renraku shinakereba shinpai sareru yo.", meaning: "Kalau tidak menghubungi sekarang, orang akan khawatir." },
              { jp: "遅れる時は必ず連絡しなければ。", kana: "おくれる とき は かならず れんらくしなければ。", romaji: "Okureru toki wa kanarazu renraku shinakereba.", meaning: "Kalau terlambat, harus menghubungi." },
              { jp: "連絡しなければ約束がキャンセルになる。", kana: "れんらくしなければ やくそく が きゃんせる に なる。", romaji: "Renraku shinakereba yakusoku ga kyanseru ni naru.", meaning: "Kalau tidak menghubungi, janji akan dibatalkan." },
              { jp: "家族に連絡しなければ何も知らないまま。", kana: "かぞく に れんらくしなければ なにも しらない まま。", romaji: "Kazoku ni renraku shinakereba nanimo shiranai mama.", meaning: "Kalau tidak menghubungi keluarga, mereka tidak tahu apa-apa." },
              { jp: "メールで連絡しなければ返事が遅くなる。", kana: "めーる で れんらくしなければ へんじ が おそくなる。", romaji: "Meeru de renraku shinakereba henji ga osoku naru.", meaning: "Kalau tidak menghubungi lewat email, balasannya akan lambat." },
              { jp: "緊急時はすぐに連絡しなければ。", kana: "きんきゅうじ とき は すぐに れんらくしなければ。", romaji: "Kinkyuu ji toki wa sugu ni renraku shinakereba.", meaning: "Saat darurat, harus segera menghubungi." },
              { jp: "連絡しなければ友達が怒るかも。", kana: "れんらくしなければ ともだち が おこる かも。", romaji: "Renraku shinakereba tomodachi ga okoru kamo.", meaning: "Kalau tidak menghubungi, teman mungkin marah." },
              { jp: "仕事の進捗を連絡しなければ上司が心配する。", kana: "しごと の しんちょく を れんらくしなければ じょうし が しんぱい する。", romaji: "Shigoto no shinchoku o renraku shinakereba joushi ga shinpai suru.", meaning: "Kalau tidak menghubungi perkembangan kerja, atasan akan khawatir." },
              { jp: "旅行前に連絡しなければ予約が無駄になる。", kana: "りょこう まえ に れんらくしなければ よやく が むだ に なる。", romaji: "Ryokou mae ni renraku shinakereba yoyaku ga muda ni naru.", meaning: "Kalau tidak menghubungi sebelum pergi, reservasi jadi sia-sia." },
              { jp: "連絡しなければみんな待ってるよ。", kana: "れんらくしなければ みんな まってるよ。", romaji: "Renraku shinakereba minna matteru yo.", meaning: "Kalau tidak menghubungi, semua orang sedang menunggu." }
            ]
          }]
        }
      ]
    },
    {
      id: "vf-15",
      level: "N5",
      order: 15,
      title: "~て • Bentuk Te-form (Sambung / Sedang / Permintaan)",
      summary: "Bentuk Te-form (Sambung / Sedang / Permintaan) (N5). Bentuk paling serbaguna! Dipakai untuk menghubungkan kalimat, menyatakan sedang berlangsung, meminta tolong, dan masih banyak lagi. Sangat penting untuk percakapan alami.",
      formulas: [
        { group: "Godan", rule: "Aturan khusus: u/tsu/ru → tte, nu/mu/bu → nde, ku → ite, gu → ide, su → shite" },
        { group: "Ichidan", rule: "Hapus ru + て" },
        { group: "Irregular", rule: "する → して, 来る → 来て" }
      ],
      groups: [
        {
          name: "Godan",
          examples: [{
            base: "泳ぐ",
            transformed: "泳いで",
            kana: "およぐ → およいで",
            romaji: "oyogu → oyoide",
            meaning: "berenang (te-form)",
            sentences: [
              { jp: "毎日プールで泳いで健康を保っています。", kana: "まいにち ぷーる で およいで けんこう を たもっています。", romaji: "Mainichi puuru de oyoide kenkou o tamotte imasu.", meaning: "Setiap hari berenang di kolam renang untuk menjaga kesehatan." },
              { jp: "夏休みに海で泳いで遊びました。", kana: "なつやすみ に うみ で およいで あそびました。", romaji: "Natsuyasumi ni umi de oyoide asobimashita.", meaning: "Libur musim panas saya berenang dan bermain di laut." },
              { jp: "朝早く起きて泳いでから仕事に行きます。", kana: "あさ はやく おきて およいで から しごと に いきます。", romaji: "Asa hayaku okite oyoide kara shigoto ni ikimasu.", meaning: "Bangun pagi, berenang dulu, baru berangkat kerja." },
              { jp: "泳いでいる時に友達に会いました。", kana: "およいで いる とき に ともだち に あいました。", romaji: "Oyoide iru toki ni tomodachi ni aimashita.", meaning: "Saat sedang berenang, saya bertemu teman." },
              { jp: "泳いで疲れたので少し休みます。", kana: "およいで つかれた ので すこし やすみます。", romaji: "Oyoide tsukareta node sukoshi yasumimasu.", meaning: "Setelah berenang capek, jadi saya istirahat sebentar." },
              { jp: "子供と一緒に泳いで楽しい時間を過ごしました。", kana: "こども と いっしょ に およいで たのしい じかん を すごしました。", romaji: "Kodomo to issho ni oyoide tanoshii jikan o sugoshimashita.", meaning: "Berenang bersama anak-anak, kami habiskan waktu yang menyenangkan." },
              { jp: "泳いでからシャワーを浴びます。", kana: "およいで から しゃわー を あびます。", romaji: "Oyoide kara shawaa o abimasu.", meaning: "Setelah berenang, saya mandi." },
              { jp: "泳いでいる姿を写真に撮りました。", kana: "およいで いる すがた を しゃしん に とりました。", romaji: "Oyoide iru sugata o shashin ni torimashita.", meaning: "Saya memotret saat sedang berenang." },
              { jp: "泳いでリラックスしたいです。", kana: "およいで りらっくす したいです。", romaji: "Oyoide rirakkusu shitai desu.", meaning: "Saya ingin berenang untuk relaks." },
              { jp: "泳いでいる最中に携帯が鳴りました。", kana: "およいで いる さいちゅう に けいたい が なりました。", romaji: "Oyoide iru saichuu ni keitai ga narimashita.", meaning: "Saat sedang berenang, HP saya berdering." }
            ]
          }]
        },
        {
          name: "Ichidan",
          examples: [{
            base: "集める",
            transformed: "集めて",
            kana: "あつめる → あつめて",
            romaji: "atsumeru → atsumete",
            meaning: "mengumpulkan (te-form)",
            sentences: [
              { jp: "切手を集めてアルバムを作っています。", kana: "きって を あつめて あるばむ を つくっています。", romaji: "Kitte o atsumete arubamu o tsukutte imasu.", meaning: "Saya mengumpulkan prangko dan membuat album." },
              { jp: "友達を集めてパーティーを開きました。", kana: "ともだち を あつめて ぱーてぃー を ひらきました。", romaji: "Tomodachi o atsumete paatii o hirakimashita.", meaning: "Saya mengumpulkan teman dan mengadakan pesta." },
              { jp: "情報を集めてから決めます。", kana: "じょうほう を あつめて から きめます。", romaji: "Jouhou o atsumete kara kimemasu.", meaning: "Saya akan mengumpulkan informasi dulu baru memutuskan." },
              { jp: "おもちゃを集めて部屋がいっぱいです。", kana: "おもちゃ を あつめて へや が いっぱいです。", romaji: "Omocha o atsumete heya ga ippai desu.", meaning: "Saya mengumpulkan mainan sampai kamar penuh." },
              { jp: "みんなを集めて写真を撮りましょう。", kana: "みんな を あつめて しゃしん を とりましょう。", romaji: "Minna o atsumete shashin o torimashou.", meaning: "Mari kita kumpulkan semua orang dan foto bersama." },
              { jp: "データを集めてレポートを書きました。", kana: "でーた を あつめて れぽーと を かきました。", romaji: "Deeta o atsumete repooto o kakimashita.", meaning: "Saya mengumpulkan data lalu menulis laporan." },
              { jp: "ポイントを集めて景品をもらいました。", kana: "ぽいんと を あつめて けいひん を もらいました。", romaji: "Pointo o atsumete keihin o moraimashita.", meaning: "Saya mengumpulkan poin dan mendapatkan hadiah." },
              { jp: "花を集めてブーケを作りました。", kana: "はな を あつめて ぶーけ を つくりました。", romaji: "Hana o atsumete buuke o tsukurimashita.", meaning: "Saya mengumpulkan bunga dan membuat buket." },
              { jp: "集めて並べるときれいですね。", kana: "あつめて ならべると きれいですね。", romaji: "Atsumete naraberu to kirei desu ne.", meaning: "Kalau dikumpulkan dan dirapikan, cantik sekali ya." },
              { jp: "お金を集めて旅行に行きます。", kana: "おかね を あつめて りょこう に いきます。", romaji: "Okane o atsumete ryokou ni ikimasu.", meaning: "Saya mengumpulkan uang untuk pergi liburan." }
            ]
          }]
        },
        {
          name: "Irregular",
          examples: [{
            base: "掃除する",
            transformed: "掃除して",
            kana: "そうじする → そうじして",
            romaji: "souji suru → souji shite",
            meaning: "membersihkan (te-form)",
            sentences: [
              { jp: "毎朝部屋を掃除して気持ちよく過ごします。", kana: "まいあさ へや を そうじして きもちよく すごします。", romaji: "Maiasa heya o souji shite kimochiyoku sugoshimasu.", meaning: "Setiap pagi membersihkan kamar agar hari terasa nyaman." },
              { jp: "掃除してゴミをたくさん出しました。", kana: "そうじして ごみ を たくさん だしました。", romaji: "Souji shite gomi o takusan dashimashita.", meaning: "Setelah membersihkan, banyak sekali sampah yang keluar." },
              { jp: "友達が来る前に掃除して準備しました。", kana: "ともだち が くる まえ に そうじして じゅんび しました。", romaji: "Tomodachi ga kuru mae ni souji shite junbi shimashita.", meaning: "Sebelum teman datang, saya membersihkan dan mempersiapkan." },
              { jp: "掃除している時に古い写真を見つけました。", kana: "そうじして いる とき に ふるい しゃしん を みつけました。", romaji: "Souji shite iru toki ni furui shashin o mitsukemashita.", meaning: "Saat sedang membersihkan, saya menemukan foto lama." },
              { jp: "週末に家全体を掃除してスッキリしました。", kana: "しゅうまつ に いえ ぜんたい を そうじして すっきり しました。", romaji: "Shuumatsu ni ie zentai o souji shite sukkiri shimashita.", meaning: "Akhir pekan membersihkan seluruh rumah, sekarang terasa lega." },
              { jp: "掃除してからゆっくりお茶を飲みます。", kana: "そうじして から ゆっくり おちゃ を のみます。", romaji: "Souji shite kara yukkuri ocha o nomimasu.", meaning: "Setelah membersihkan, saya minum teh dengan santai." },
              { jp: "母と一緒に掃除して助け合いました。", kana: "はは と いっしょ に そうじして たすけあいました。", romaji: "Haha to issho ni souji shite tasukeaimashita.", meaning: "Saya membersihkan bersama ibu dan saling membantu." },
              { jp: "掃除して部屋が明るくなりました。", kana: "そうじして へや が あかるく なりました。", romaji: "Souji shite heya ga akaruku narimashita.", meaning: "Setelah membersihkan, kamar jadi lebih terang." },
              { jp: "掃除して不要な物を捨てました。", kana: "そうじして ふよう な もの を すてました。", romaji: "Souji shite fuyou na mono o sutemashita.", meaning: "Setelah membersihkan, saya buang barang yang tidak perlu." },
              { jp: "毎日少しずつ掃除してきれいを保っています。", kana: "まいにち すこしずつ そうじして きれい を たもっています。", romaji: "Mainichi sukoshizutsu souji shite kirei o tamotte imasu.", meaning: "Setiap hari membersihkan sedikit demi sedikit untuk menjaga kebersihan." }
            ]
          }]
        }
      ]
    },
	    {
      id: "vf-16",
      level: "N5",
      order: 16,
      title: "~ないで • Bentuk Negatif Te",
      summary: "Bentuk Negatif Te (N5). Digunakan untuk menyatakan 'tanpa melakukan...' atau 'jangan lakukan dulu...' saat menghubungkan kalimat. Sangat berguna untuk instruksi, nasihat, atau cerita sehari-hari.",
      formulas: [
        { group: "Godan", rule: "Bentuk negatif plain (ubah u menjadi a + ない) lalu tambah で. Contoh: 話す → 話さないで, 飲む → 飲まないで." },
        { group: "Ichidan", rule: "Hapus ru di akhir lalu tambah ないで. Contoh: 食べる → 食べないで, 起きる → 起きないで." },
        { group: "Irregular", rule: "する → しないで, 来る → 来ないで." }
      ],
      groups: [
        {
          name: "Godan",
          examples: [{
            base: "笑う",
            transformed: "笑わないで",
            kana: "わらう → わらわないで",
            romaji: "warau → warawanai de",
            meaning: "tanpa tertawa / jangan tertawa",
            sentences: [
              { jp: "今は真面目な話だから笑わないで聞いて。", kana: "いま は まじめ な はなし だから わらわないで きいて。", romaji: "Ima wa majime na hanashi dakara warawanai de kiite.", meaning: "Ini pembicaraan serius, jadi tolong dengar tanpa tertawa." },
              { jp: "映画のラストシーンで笑わないで泣いてしまいました。", kana: "えいが の らすとしーん で わらわないで ないて しまいました。", romaji: "Eiga no rasuto shiin de warawanai de naite shimaimashita.", meaning: "Di adegan akhir film, tanpa tertawa saya malah menangis." },
              { jp: "そんなに面白い顔しないで笑わないでください。", kana: "そんな に おもしろい かお しないで わらわないでください。", romaji: "Sonna ni omoshiroi kao shinaide warawanai de kudasai.", meaning: "Jangan buat muka lucu, tolong jangan tertawa." },
              { jp: "試験中は絶対に笑わないで集中してください。", kana: "しけん ちゅう は ぜったい に わらわないで しゅうちゅう してください。", romaji: "Shiken chuu wa zettai ni warawanai de shuuchuu shite kudasai.", meaning: "Saat ujian, tolong fokus tanpa tertawa sama sekali." },
              { jp: "友達の失敗談を聞いて笑わないで我慢しました。", kana: "ともだち の しっぱいだん を きいて わらわないで がまん しました。", romaji: "Tomodachi no shippai dan o kiite warawanai de gaman shimashita.", meaning: "Mendengar cerita kegagalan teman, saya tahan tanpa tertawa." },
              { jp: "緊張している時は笑わないで深呼吸しましょう。", kana: "きんちょう して いる とき は わらわないで しんこきゅう しましょう。", romaji: "Kinchou shite iru toki wa warawanai de shinkokyuu shimashou.", meaning: "Saat tegang, tarik napas dalam tanpa tertawa dulu." },
              { jp: "お葬式では笑わないで静かにしてください。", kana: "おそうしき で は わらわないで しずか に してください。", romaji: "Osoushiki de wa warawanai de shizuka ni shite kudasai.", meaning: "Di pemakaman, tolong diam tanpa tertawa." },
              { jp: "子供が寝ているから笑わないでそっと歩いて。", kana: "こども が ねて いる から わらわないで そっと あるいて。", romaji: "Kodomo ga nete iru kara warawanai de sotto aruite.", meaning: "Anak sedang tidur, jalan pelan tanpa tertawa ya." },
              { jp: "こんな時に笑わないで本気で考えて。", kana: "こんな とき に わらわないで ほんき で かんがえて。", romaji: "Konna toki ni warawanai de honki de kangaete.", meaning: "Di saat seperti ini, pikirkan serius tanpa tertawa." },
              { jp: "写真撮る時は笑わないで真顔でお願いします。", kana: "しゃしん とる とき は わらわないで まがお で おねがいします。", romaji: "Shashin toru toki wa warawanai de magao de onegai shimasu.", meaning: "Saat foto, tolong ekspresi serius tanpa tertawa." }
            ]
          }]
        },
        {
          name: "Ichidan",
          examples: [{
            base: "忘れる",
            transformed: "忘れないで",
            kana: "わすれる → わすれないで",
            romaji: "wasureru → wasurenai de",
            meaning: "tanpa lupa / jangan lupa",
            sentences: [
              { jp: "鍵を忘れないで持ってきてね。", kana: "かぎ を わすれないで もってきて ね。", romaji: "Kagi o wasurenai de motte kite ne.", meaning: "Jangan lupa bawa kunci ya." },
              { jp: "約束を忘れないで必ず来てください。", kana: "やくそく を わすれないで かならず きてください。", romaji: "Yakusoku o wasurenai de kanarazu kite kudasai.", meaning: "Jangan lupa janji, tolong datang pasti." },
              { jp: "充電器を忘れないで旅行に行きました。", kana: "じゅうでんき を わすれないで りょこう に いきました。", romaji: "Juudenki o wasurenai de ryokou ni ikimashita.", meaning: "Saya pergi liburan tanpa lupa charger." },
              { jp: "薬を忘れないで毎日飲んでください。", kana: "くすり を わすれないで まいにち のんでください。", romaji: "Kusuri o wasurenai de mainichi nonde kudasai.", meaning: "Jangan lupa minum obat setiap hari." },
              { jp: "宿題を忘れないで学校に持っていきましょう。", kana: "しゅくだい を わすれないで がっこう に もっていきましょう。", romaji: "Shukudai o wasurenai de gakkou ni motte ikimashou.", meaning: "Jangan lupa bawa PR ke sekolah." },
              { jp: "誕生日を忘れないでプレゼントを用意しました。", kana: "たんじょうび を わすれないで ぷれぜんと を ようい しました。", romaji: "Tanjoubi o wasurenai de purezento o youi shimashita.", meaning: "Saya siapkan hadiah tanpa lupa ulang tahunnya." },
              { jp: "パスポートを忘れないで空港に行ってください。", kana: "ぱすぽーと を わすれないで くうこう に いってください。", romaji: "Pasupooto o wasurenai de kuukou ni itte kudasai.", meaning: "Jangan lupa paspor saat ke bandara." },
              { jp: "大切なファイルを忘れないでバックアップを取って。", kana: "たいせつ な ふぁいる を わすれないで ばっくあっぷ を とって。", romaji: "Taisetsu na fairu o wasurenai de bakkuappu o totte.", meaning: "Jangan lupa backup file penting." },
              { jp: "雨が降りそうだから傘を忘れないで。", kana: "あめ が ふりそう だから かさ を わすれないで。", romaji: "Ame ga furisou dakara kasa o wasurenai de.", meaning: "Kayaknya akan hujan, jangan lupa bawa payung." },
              { jp: "連絡先を忘れないでメモに書いておきました。", kana: "れんらくさき を わすれないで めも に かいておきました。", romaji: "Renrakusaki o wasurenai de memo ni kaite okimashita.", meaning: "Saya catat nomor kontak supaya tidak lupa." }
            ]
          }]
        },
        {
          name: "Irregular",
          examples: [{
            base: "心配する",
            transformed: "心配しないで",
            kana: "しんぱいする → しんぱいしないで",
            romaji: "shinpai suru → shinpai shinai de",
            meaning: "tanpa khawatir / jangan khawatir",
            sentences: [
              { jp: "心配しないで、全部大丈夫だよ。", kana: "しんぱいしないで、 ぜんぶ だいじょうぶ だよ。", romaji: "Shinpai shinai de, zenbu daijoubu da yo.", meaning: "Jangan khawatir, semuanya baik-baik saja." },
              { jp: "一人で行くから心配しないで待ってて。", kana: "ひとり で いく から しんぱいしないで まってて。", romaji: "Hitori de iku kara shinpai shinai de mattete.", meaning: "Saya pergi sendiri, jadi tunggu tanpa khawatir ya." },
              { jp: "結果が出るまで心配しないで勉強を続けましょう。", kana: "けっか が でる まで しんぱいしないで べんきょう を つづけましょう。", romaji: "Kekka ga deru made shinpai shinai de benkyou o tsuzukemashou.", meaning: "Sampai hasil keluar, lanjut belajar tanpa khawatir." },
              { jp: "遅くなっても心配しないで連絡します。", kana: "おそく なっても しんぱいしないで れんらく します。", romaji: "Osoku nattemo shinpai shinai de renraku shimasu.", meaning: "Meski pulang malam, saya akan kabari tanpa perlu khawatir." },
              { jp: "試験のことは心配しないでリラックスしてください。", kana: "しけん の こと は しんぱいしないで りらっくす してください。", romaji: "Shiken no koto wa shinpai shinai de rirakkusu shite kudasai.", meaning: "Soal ujian tolong rileks tanpa khawatir." }
            ]
          }]
        }
      ]
    },
        {
      id: "vf-17",
      level: "N5",
      order: 17,
      title: "~てください • Permintaan Sopan (Tolong…)",
      summary: "Permintaan Sopan (Tolong…) (N5). Bentuk paling sopan untuk meminta tolong. Mirip 'tolong...', 'mohon...', 'silakan...' dalam situasi formal atau dengan orang yang dihormati.",
      formulas: [
        { group: "Godan", rule: "Te-form + ください. Contoh: 待つ → 待ってください, 書く → 書いてください." },
        { group: "Ichidan", rule: "Hapus ru lalu tambah て + ください. Contoh: 食べる → 食べてください, 見る → 見てください." },
        { group: "Irregular", rule: "する → してください, 来る → 来てください." }
      ],
      groups: [
        {
          name: "Godan",
          examples: [{
            base: "貸す",
            transformed: "貸してください",
            kana: "かす → かしてください",
            romaji: "kasu → kashite kudasai",
            meaning: "tolong pinjamkan",
            sentences: [
              { jp: "ペンを貸してください、すぐ返します。", kana: "ぺん を かしてください、 すぐ かえします。", romaji: "Pen o kashite kudasai, sugu kaeshimasu.", meaning: "Tolong pinjamkan pulpen, saya kembalikan segera." },
              { jp: "傘を貸してください、雨が降りそうです。", kana: "かさ を かしてください、 あめ が ふりそうです。", romaji: "Kasa o kashite kudasai, ame ga furisou desu.", meaning: "Tolong pinjamkan payung, sepertinya akan hujan." },
              { jp: "力を貸してください、一緒に頑張りましょう。", kana: "ちから を かしてください、 いっしょ に がんばりましょう。", romaji: "Chikara o kashite kudasai, issho ni ganbarimashou.", meaning: "Tolong bantu saya, mari kita berusaha bersama." },
              { jp: "自転車を貸してください、駅まで行きたいです。", kana: "じてんしゃ を かしてください、 えき まで いきたいです。", romaji: "Jitensha o kashite kudasai, eki made ikitai desu.", meaning: "Tolong pinjamkan sepeda, saya mau ke stasiun." },
              { jp: "お金を少し貸してください、来月必ず返します。", kana: "おかね を すこし かしてください、 らいげつ かならず かえします。", romaji: "Okane o sukoshi kashite kudasai, raigetsu kanarazu kaeshimasu.", meaning: "Tolong pinjamkan sedikit uang, bulan depan pasti saya kembalikan." },
              { jp: "ノートを貸してください、メモしたいんです。", kana: "のーと を かしてください、 めも したいんです。", romaji: "Nooto o kashite kudasai, memo shitai n desu.", meaning: "Tolong pinjamkan buku catatan, saya mau mencatat." },
              { jp: "充電器を貸してください、スマホが死にそうです。", kana: "じゅうでんき を かしてください、 すまほ が しにそうです。", romaji: "Juudenki o kashite kudasai, sumaho ga shinisou desu.", meaning: "Tolong pinjamkan charger, HP saya hampir mati." },
              { jp: "地図を貸してください、道がわかりません。", kana: "ちず を かしてください、 みち が わかりません。", romaji: "Chizu o kashite kudasai, michi ga wakarimasen.", meaning: "Tolong pinjamkan peta, saya tidak tahu jalannya." },
              { jp: "椅子を一つ貸してください、座りたいです。", kana: "いす を ひとつ かしてください、 すわりたいです。", romaji: "Isu o hitotsu kashite kudasai, suwaritai desu.", meaning: "Tolong pinjamkan satu kursi, saya mau duduk." },
              { jp: "Wi-Fiのパスワードを貸してください。", kana: "わいふぁい の ぱすわーど を かしてください。", romaji: "Waifai no pasuwaado o kashite kudasai.", meaning: "Tolong kasih password Wi-Fi." }
            ]
          }]
        },
        {
          name: "Ichidan",
          examples: [{
            base: "教える",
            transformed: "教えてください",
            kana: "おしえる → おしえてください",
            romaji: "oshieru → oshiete kudasai",
            meaning: "tolong ajarkan",
            sentences: [
              { jp: "この漢字の読み方を教えてください。", kana: "この かんじ の よみかた を おしえてください。", romaji: "Kono kanji no yomikata o oshiete kudasai.", meaning: "Tolong ajarkan cara baca kanji ini." },
              { jp: "道を教えてください、初めて来たんです。", kana: "みち を おしえてください、 はじめて きたんです。", romaji: "Michi o oshiete kudasai, hajimete kita n desu.", meaning: "Tolong tunjukkan jalan, saya baru pertama kali ke sini." },
              { jp: "このアプリの使い方を教えてください。", kana: "この あぷり の つかいかた を おしえてください。", romaji: "Kono apuri no tsukaikata o oshiete kudasai.", meaning: "Tolong ajarkan cara pakai aplikasi ini." },
              { jp: "簡単な料理の作り方を教えてください。", kana: "かんたん な りょうり の つくりかた を おしえてください。", romaji: "Kantan na ryouri no tsukurikata o oshiete kudasai.", meaning: "Tolong ajarkan resep masakan yang mudah." },
              { jp: "正しい発音を教えてください。", kana: "ただしい はつおん を おしえてください。", romaji: "Tadashii hatsuon o oshiete kudasai.", meaning: "Tolong ajarkan pengucapan yang benar." },
              { jp: "電車の乗り換え方を教えてください。", kana: "でんしゃ の のりかえかた を おしえてください。", romaji: "Densha no norikaekata o oshiete kudasai.", meaning: "Tolong ajarkan cara ganti kereta." },
              { jp: "この問題の解き方を教えてください。", kana: "この もんだい の ときかた を おしえてください。", romaji: "Kono mondai no tokikata o oshiete kudasai.", meaning: "Tolong ajarkan cara menyelesaikan soal ini." },
              { jp: "ギターの弾き方を教えてください。", kana: "ぎたー の ひきかた を おしえてください。", romaji: "Gitaa no hikikata o oshiete kudasai.", meaning: "Tolong ajarkan cara main gitar." },
              { jp: "正しい姿勢を教えてください。", kana: "ただしい しせい を おしえてください。", romaji: "Tadashii shisei o oshiete kudasai.", meaning: "Tolong ajarkan postur yang benar." },
              { jp: "この単語の意味を教えてください。", kana: "この たんご の いみ を おしえてください。", romaji: "Kono tango no imi o oshiete kudasai.", meaning: "Tolong ajarkan arti kata ini." }
            ]
          }]
        },
        {
          name: "Irregular",
          examples: [{
            base: "準備する",
            transformed: "準備してください",
            kana: "じゅんびする → じゅんびしてください",
            romaji: "junbi suru → junbi shite kudasai",
            meaning: "tolong siapkan",
            sentences: [
              { jp: "資料を準備してください、会議が始まります。", kana: "しりょう を じゅんびしてください、 かいぎ が はじまります。", romaji: "Shiryou o junbi shite kudasai, kaigi ga hajimarimasu.", meaning: "Tolong siapkan bahan, rapat akan mulai." },
              { jp: "お部屋を準備してください、お客様が来ます。", kana: "おへや を じゅんびしてください、 おきゃくさま が きます。", romaji: "Oheya o junbi shite kudasai, okyakusama ga kimasu.", meaning: "Tolong siapkan kamar, tamu akan datang." },
              { jp: "お弁当を準備してください、明日遠足です。", kana: "おべんとう を じゅんびしてください、 あした えんそく です。", romaji: "Obentou o junbi shite kudasai, ashita ensoku desu.", meaning: "Tolong siapkan bekal, besok ada acara piknik." },
              { jp: "プレゼントを準備してください、誕生日は明後日です。", kana: "ぷれぜんと を じゅんびしてください、 たんじょうび は あさって です。", romaji: "Purezento o junbi shite kudasai, tanjoubi wa asatte desu.", meaning: "Tolong siapkan hadiah, ulang tahun lusa." },
              { jp: "機材を準備してください、ライブが始まります。", kana: "きざい を じゅんびしてください、 らいぶ が はじまります。", romaji: "Kizai o junbi shite kudasai, raibu ga hajimarimasu.", meaning: "Tolong siapkan peralatan, konser akan mulai." },
              { jp: "書類を準備してください、面接で必要です。", kana: "しょるい を じゅんびしてください、 めんせつ で ひつよう です。", romaji: "Shorui o junbi shite kudasai, mensetsu de hitsuyou desu.", meaning: "Tolong siapkan dokumen, dibutuhkan untuk wawancara." },
              { jp: "お茶を準備してください、お客様がお待ちです。", kana: "おちゃ を じゅんびしてください、 おきゃくさま が おまち です。", romaji: "Ocha o junbi shite kudasai, okyakusama ga omachi desu.", meaning: "Tolong siapkan teh, tamu sudah menunggu." },
              { jp: "スライドを準備してください、発表の時間です。", kana: "すらいど を じゅんびしてください、 はっぴょう の じかん です。", romaji: "Suraido o junbi shite kudasai, happyou no jikan desu.", meaning: "Tolong siapkan slide, waktu presentasi sudah tiba." },
              { jp: "荷物を準備してください、明日出発します。", kana: "にもつ を じゅんびしてください、 あした しゅっぱつ します。", romaji: "Nimotsu o junbi shite kudasai, ashita shuppatsu shimasu.", meaning: "Tolong siapkan barang, besok kita berangkat." },
              { jp: "夕食を準備してください、家族が帰ってきます。", kana: "ゆうしょく を じゅんびしてください、 かぞく が かえってきます。", romaji: "Yuushoku o junbi shite kudasai, kazoku ga kaette kimasu.", meaning: "Tolong siapkan makan malam, keluarga sebentar lagi pulang." }
            ]
          }]
        }
      ]
    },
	    {
      id: "vf-18",
      level: "N5",
      order: 18,
      title: "~ないでください • Larangan Sopan (Tolong Jangan…)",
      summary: "Larangan Sopan (Tolong Jangan…) (N5). Bentuk sopan untuk melarang atau meminta agar tidak melakukan sesuatu. Mirip 'tolong jangan...', 'mohon tidak...' dalam situasi formal atau dengan orang yang dihormati.",
      formulas: [
        { group: "Godan", rule: "Bentuk negatif plain (ubah u menjadi a + ない) lalu tambah でください. Contoh: 話す → 話さないでください, 触る → 触らないでください." },
        { group: "Ichidan", rule: "Hapus ru di akhir lalu tambah ないでください. Contoh: 食べる → 食べないでください, 開ける → 開けないでください." },
        { group: "Irregular", rule: "する → しないでください, 来る → 来ないでください." }
      ],
      groups: [
        {
          name: "Godan",
          examples: [{
            base: "触る",
            transformed: "触らないでください",
            kana: "さわる → さわらないでください",
            romaji: "sawaru → sawaranai de kudasai",
            meaning: "tolong jangan sentuh",
            sentences: [
              { jp: "熱いので触らないでください。", kana: "あつい ので さわらないでください。", romaji: "Atsui node sawaranai de kudasai.", meaning: "Panas sekali, tolong jangan disentuh." },
              { jp: "大切なものですから触らないでください。", kana: "たいせつ な もの ですから さわらないでください。", romaji: "Taisetsu na mono desu kara sawaranai de kudasai.", meaning: "Ini barang berharga, tolong jangan disentuh." },
              { jp: "展示品には触らないでください。", kana: "てんじひん に は さわらないでください。", romaji: "Tenjihin ni wa sawaranai de kudasai.", meaning: "Tolong jangan menyentuh barang pajangan." },
              { jp: "傷つきやすいので触らないでください。", kana: "きずつきやすい ので さわらないでください。", romaji: "Kizutsukiyasui node sawaranai de kudasai.", meaning: "Mudah rusak, tolong jangan disentuh." },
              { jp: "猫が怖がるので触らないでください。", kana: "ねこ が こわがる ので さわらないでください。", romaji: "Neko ga kowagaru node sawaranai de kudasai.", meaning: "Kucingnya takut, tolong jangan disentuh." },
              { jp: "指紋がつくので触らないでください。", kana: "しもん が つく ので さわらないでください。", romaji: "Shimon ga tsuku node sawaranai de kudasai.", meaning: "Nanti ada sidik jari, tolong jangan disentuh." },
              { jp: "美術品なので触らないでください。", kana: "びじゅつひん なので さわらないでください。", romaji: "Bijutsuhin na node sawaranai de kudasai.", meaning: "Ini karya seni, tolong jangan disentuh." },
              { jp: "まだ乾いていないので触らないでください。", kana: "まだ かわいて いない ので さわらないでください。", romaji: "Mada kawaite inai node sawaranai de kudasai.", meaning: "Masih basah, tolong jangan disentuh dulu." },
              { jp: "危ないので触らないでください。", kana: "あぶない ので さわらないでください。", romaji: "Abunai node sawaranai de kudasai.", meaning: "Berbahaya, tolong jangan disentuh." },
              { jp: "他の人も見たいので触らないでください。", kana: "ほかの ひと も みたい ので さわらないでください。", romaji: "Hoka no hito mo mitai node sawaranai de kudasai.", meaning: "Orang lain juga ingin melihat, tolong jangan disentuh." }
            ]
          }]
        },
        {
          name: "Ichidan",
          examples: [{
            base: "開ける",
            transformed: "開けないでください",
            kana: "あける → あけないでください",
            romaji: "akeru → akenai de kudasai",
            meaning: "tolong jangan buka",
            sentences: [
              { jp: "まだ時間じゃないのでドアを開けないでください。", kana: "まだ じかん じゃない ので どあ を あけないでください。", romaji: "Mada jikan ja nai node doa o akenai de kudasai.", meaning: "Belum waktunya, tolong jangan buka pintu." },
              { jp: "エアコンが効いているので窓を開けないでください。", kana: "えあこん が きいて いる ので まど を あけないでください。", romaji: "Eakon ga kiite iru node mado o akenai de kudasai.", meaning: "AC sedang nyala, tolong jangan buka jendela." },
              { jp: "秘密のファイルなので開けないでください。", kana: "ひみつ の ふぁいる なので あけないでください。", romaji: "Himitsu no fairu na node akenai de kudasai.", meaning: "Ini file rahasia, tolong jangan dibuka." },
              { jp: "箱を開けないでください、中身が壊れます。", kana: "はこ を あけないでください、 なかみ が こわれます。", romaji: "Hako o akenai de kudasai, nakami ga kowaremasu.", meaning: "Tolong jangan buka kotaknya, isinya bisa rusak." },
              { jp: "冷蔵庫を開けないでください、電気代がもったいないです。", kana: "れいぞうこ を あけないでください、 でんきだい が もったいないです。", romaji: "Reizouko o akenai de kudasai, denkidai ga mottainai desu.", meaning: "Tolong jangan buka kulkas, nanti listrik boros." },
              { jp: "プレゼントの箱は開けないでください、明日までサプライズです。", kana: "ぷれぜんと の はこ は あけないでください、 あした まで さぷらいず です。", romaji: "Purezento no hako wa akenai de kudasai, ashita made sapuraizu desu.", meaning: "Tolong jangan buka kotak hadiah, sampai besok surprise." },
              { jp: "このドアは非常口なので開けないでください。", kana: "この どあ は ひじょうぐち なので あけないでください。", romaji: "Kono doa wa hijou guchi na node akenai de kudasai.", meaning: "Ini pintu darurat, tolong jangan dibuka." },
              { jp: "まだ熱いのでオーブンを開けないでください。", kana: "まだ あつい ので おーぶん を あけないでください。", romaji: "Mada atsui node oobun o akenai de kudasai.", meaning: "Masih panas, tolong jangan buka oven." },
              { jp: "会議中はノートを開けないでください。", kana: "かいぎ ちゅう は のーと を あけないでください。", romaji: "Kaigi chuu wa nooto o akenai de kudasai.", meaning: "Saat rapat, tolong jangan buka buku catatan." },
              { jp: "このメールは開けないでください、ウイルスかもしれません。", kana: "この めーる は あけないでください、 ういるす かもしれません。", romaji: "Kono meeru wa akenai de kudasai, uirusu kamoshiremasen.", meaning: "Tolong jangan buka email ini, mungkin ada virus." }
            ]
          }]
        },
        {
          name: "Irregular",
          examples: [{
            base: "遅刻する",
            transformed: "遅刻しないでください",
            kana: "ちこくする → ちこくしないでください",
            romaji: "chikoku suru → chikoku shinai de kudasai",
            meaning: "tolong jangan terlambat",
            sentences: [
              { jp: "明日の会議に遅刻しないでください。", kana: "あした の かいぎ に ちこくしないでください。", romaji: "Ashita no kaigi ni chikoku shinai de kudasai.", meaning: "Tolong jangan terlambat ke rapat besok." },
              { jp: "授業に遅刻しないでください、先生が怒ります。", kana: "じゅぎょう に ちこくしないでください、 せんせい が おこります。", romaji: "Jugyou ni chikoku shinai de kudasai, sensei ga okorimasu.", meaning: "Tolong jangan terlambat ke kelas, guru akan marah." },
              { jp: "デートに遅刻しないでくださいね。", kana: "でーと に ちこくしないでください ね。", romaji: "Deeto ni chikoku shinai de kudasai ne.", meaning: "Tolong jangan terlambat ke kencan ya." },
              { jp: "飛行機に遅刻しないでください、チケットが無駄になります。", kana: "ひこうき に ちこくしないでください、 ちけっと が むだ に なります。", romaji: "Hikouki ni chikoku shinai de kudasai, chiketto ga muda ni narimasu.", meaning: "Tolong jangan terlambat ke pesawat, nanti tiket sia-sia." },
              { jp: "面接に遅刻しないでください、印象が悪くなります。", kana: "めんせつ に ちこくしないでください、 いんしょう が わるく なります。", romaji: "Mensetsu ni chikoku shinai de kudasai, inshou ga waruku narimasu.", meaning: "Tolong jangan terlambat ke wawancara, kesan buruk nanti." },
              { jp: "パーティーに遅刻しないでください、みんな待っています。", kana: "ぱーてぃー に ちこくしないでください、 みんな まって います。", romaji: "Paatii ni chikoku shinai de kudasai, minna matte imasu.", meaning: "Tolong jangan terlambat ke pesta, semua orang sudah menunggu." },
              { jp: "病院の予約に遅刻しないでください。", kana: "びょういん の よやく に ちこくしないでください。", romaji: "Byouin no yoyaku ni chikoku shinai de kudasai.", meaning: "Tolong jangan terlambat ke janji dokter." },
              { jp: "新幹線に遅刻しないでください、指定席が無駄に。", kana: "しんかんせん に ちこくしないでください、 していせき が むだ に。", romaji: "Shinkansen ni chikoku shinai de kudasai, shiteiseki ga muda ni.", meaning: "Tolong jangan terlambat ke shinkansen, kursi spesial jadi sia-sia." },
              { jp: "結婚式に遅刻しないでください、大切な日です。", kana: "けっこんしき に ちこくしないでください、 たいせつ な ひ です。", romaji: "Kekkonshiki ni chikoku shinai de kudasai, taisetsu na hi desu.", meaning: "Tolong jangan terlambat ke pernikahan, ini hari spesial." },
              { jp: "アルバイトに遅刻しないでください、クビになりますよ。", kana: "あるばいと に ちこくしないでください、 くび に なりますよ。", romaji: "Arubaito ni chikoku shinai de kudasai, kubi ni narimasu yo.", meaning: "Tolong jangan terlambat ke kerja paruh waktu, nanti dipecat." }
            ]
          }]
        }
      ]
    },
	    {
      id: "vf-19",
      level: "N5",
      order: 19,
      title: "~ろ • Perintah Kasar (Imperatif)",
      summary: "Perintah Kasar (Imperatif) (N5). Bentuk kasar untuk memerintah dengan tegas. Biasanya digunakan cowok ke teman dekat, adik, atau anak kecil. Mirip 'lakukan!', 'cepat!', 'ayo!' dalam situasi santai tapi tegas.",
      formulas: [
        { group: "Godan", rule: "Ubah huruf u menjadi e lalu tambah ろ. Contoh: 行く → 行け, 飲む → 飲め, 帰る → 帰れ." },
        { group: "Ichidan", rule: "Hapus ru di akhir lalu tambah ろ. Contoh: 食べる → 食べろ, 見る → 見ろ, 寝る → 寝ろ." },
        { group: "Irregular", rule: "する → しろ, 来る → 来い." }
      ],
      groups: [
        {
          name: "Godan",
          examples: [{
            base: "飲む",
            transformed: "飲め",
            kana: "のむ → のめ",
            romaji: "nomu → nome",
            meaning: "minumlah (kasar)",
            sentences: [
              { jp: "もう一杯飲め、今日は俺がおごるぞ。", kana: "もう いっぱい のめ、 きょう は おれ が おごるぞ。", romaji: "Mou ippai nome, kyou wa ore ga ogoru zo.", meaning: "Minum satu gelas lagi, hari ini aku traktir!" },
              { jp: "熱いけど一気に飲め、風邪引くぞ。", kana: "あつい けど いっき に のめ、 かぜ ひくぞ。", romaji: "Atsui kedo ikki ni nome, kaze hiku zo.", meaning: "Panas sih, tapi minum sekaligus, nanti masuk angin!" },
              { jp: "薬飲め、早く良くなるから。", kana: "くすり のめ、 はやく よくなる から。", romaji: "Kusuri nome, hayaku yoku naru kara.", meaning: "Minum obatnya, biar cepat sembuh." },
              { jp: "水飲め、汗だくじゃん。", kana: "みず のめ、 あせだく じゃん。", romaji: "Mizu nome, asedaku jan.", meaning: "Minum air, kamu banjir keringat!" },
              { jp: "ビール飲め、乾杯だぞ。", kana: "びーる のめ、 かんぱい だぞ。", romaji: "Biiru nome, kanpai da zo.", meaning: "Minum birnya, ayo tos!" },
              { jp: "牛乳飲め、骨が強くなるぞ。", kana: "ぎゅうにゅう のめ、 ほね が つよくなるぞ。", romaji: "Gyuunyuu nome, hone ga tsuyoku naru zo.", meaning: "Minum susu, tulangmu jadi kuat!" },
              { jp: "お茶飲め、喉乾いてるだろ。", kana: "おちゃ のめ、 のど かわいてる だろ。", romaji: "Ocha nome, nodo kawaiteru daro.", meaning: "Minum teh, kamu haus kan?" },
              { jp: "ジュース飲め、甘くてうまいぞ。", kana: "じゅーす のめ、 あまくて うまいぞ。", romaji: "Juusu nome, amakute umai zo.", meaning: "Minum jus, manis enak banget!" },
              { jp: "早くコーヒー飲め、目が覚めるぞ。", kana: "はやく こーひー のめ、 め が さめるぞ。", romaji: "Hayaku koohii nome, me ga sameru zo.", meaning: "Cepat minum kopi, biar melek!" },
              { jp: "酒飲め、今日は祝杯だ。", kana: "さけ のめ、 きょう は しゅくはい だ。", romaji: "Sake nome, kyou wa shukuhai da.", meaning: "Minum sake, hari ini kita rayain!" }
            ]
          }]
        },
        {
          name: "Ichidan",
          examples: [{
            base: "寝る",
            transformed: "寝ろ",
            kana: "ねる → ねろ",
            romaji: "neru → nero",
            meaning: "tidurlah (kasar)",
            sentences: [
              { jp: "もう遅いから早く寝ろ。", kana: "もう おそい から はやく ねろ。", romaji: "Mou osoi kara hayaku nero.", meaning: "Sudah malam, cepat tidur!" },
              { jp: "試験前だから今すぐ寝ろ。", kana: "しけん まえ だから いま すぐ ねろ。", romaji: "Shiken mae dakara ima sugu nero.", meaning: "Besok ujian, tidur sekarang juga!" },
              { jp: "疲れてる顔してるぞ、寝ろ。", kana: "つかれてる かお してるぞ、 ねろ。", romaji: "Tsukareteru kao shiteru zo, nero.", meaning: "Mukamu capek banget, tidur sana!" },
              { jp: "明日早いんだから寝ろよ。", kana: "あした はやい んだ から ねろよ。", romaji: "Ashita hayai n da kara nero yo.", meaning: "Besok pagi bangun, tidur sekarang!" },
              { jp: "ゲームは後でいいから寝ろ。", kana: "げーむ は あと で いい から ねろ。", romaji: "Geemu wa ato de ii kara nero.", meaning: "Main game nanti saja, tidur dulu!" },
              { jp: "風邪引くぞ、早く布団に入って寝ろ。", kana: "かぜ ひくぞ、 はやく ふとん に はいって ねろ。", romaji: "Kaze hiku zo, hayaku futon ni haitte nero.", meaning: "Nanti masuk angin, masuk selimut tidur sekarang!" },
              { jp: "目が赤いぞ、寝ろ。", kana: "め が あかいぞ、 ねろ。", romaji: "Me ga akai zo, nero.", meaning: "Matamu merah, tidur!" },
              { jp: "明日旅行だから今夜は早く寝ろ。", kana: "あした りょこう だから こんや は はやく ねろ。", romaji: "Ashita ryokou dakara kon'ya wa hayaku nero.", meaning: "Besok traveling, malam ini tidur cepat!" },
              { jp: "テレビ消して寝ろ。", kana: "てれび けして ねろ。", romaji: "Terebi keshite nero.", meaning: "Matikan TV, tidur!" },
              { jp: "ぐずぐずするな、寝ろ！", kana: "ぐずぐず するな、 ねろ！", romaji: "Guzuguzu suruna, nero!", meaning: "Jangan lama-lama, tidur sekarang!" }
            ]
          }]
        },
        {
          name: "Irregular",
          examples: [{
            base: "勉強する",
            transformed: "勉強しろ",
            kana: "べんきょうする → べんきょうしろ",
            romaji: "benkyou suru → benkyou shiro",
            meaning: "belajarlah (kasar)",
            sentences: [
              { jp: "試験が近いんだから勉強しろ。", kana: "しけん が ちかい んだ から べんきょうしろ。", romaji: "Shiken ga chikai n da kara benkyou shiro.", meaning: "Ujian sudah dekat, belajar sekarang!" },
              { jp: "ゲームばっかりするな、勉強しろ。", kana: "げーむ ばっかり するな、 べんきょうしろ。", romaji: "Geemu bakkari suruna, benkyou shiro.", meaning: "Jangan main game mulu, belajar!" },
              { jp: "明日テストだぞ、勉強しろ。", kana: "あした てすと だぞ、 べんきょうしろ。", romaji: "Ashita tesuto da zo, benkyou shiro.", meaning: "Besok tes, belajar!" },
              { jp: "夜更かしする前に勉強しろ。", kana: "よふかし する まえ に べんきょうしろ。", romaji: "Yofukashi suru mae ni benkyou shiro.", meaning: "Sebelum begadang, belajar dulu!" },
              { jp: "英語が弱いんだから勉強しろ。", kana: "えいご が よわい んだ から べんきょうしろ。", romaji: "Eigo ga yowai n da kara benkyou shiro.", meaning: "Bahasa Inggrismu lemah, belajar!" },
              { jp: "親がうるさいぞ、勉強しろ。", kana: "おや が うるさいぞ、 べんきょうしろ。", romaji: "Oya ga urusai zo, benkyou shiro.", meaning: "Orang tua ngomel, belajar sana!" },
              { jp: "合格したいなら勉強しろ。", kana: "ごうかく したい なら べんきょうしろ。", romaji: "Goukaku shitai nara benkyou shiro.", meaning: "Mau lulus? Belajar!" },
              { jp: "スマホ置いて勉強しろ。", kana: "すまほ おいて べんきょうしろ。", romaji: "Sumaho oite benkyou shiro.", meaning: "Taruh HP, belajar!" },
              { jp: "今のうちに勉強しろ、後で後悔するぞ。", kana: "いま の うち に べんきょうしろ、 あと で こうかい するぞ。", romaji: "Ima no uchi ni benkyou shiro, ato de koukai suru zo.", meaning: "Belajar sekarang, nanti nyesel!" },
              { jp: "集中して勉強しろ、邪魔すんな。", kana: "しゅうちゅう して べんきょうしろ、 じゃま すんな。", romaji: "Shuuchuu shite benkyou shiro, jama sunna.", meaning: "Fokus belajar, jangan ganggu!" }
            ]
          }]
        }
      ]
    },
	    {
      id: "vf-20",
      level: "N5",
      order: 20,
      title: "~るな • Larangan Kasar",
      summary: "Larangan Kasar (N5). Bentuk kasar untuk melarang dengan tegas. Biasanya digunakan antar teman dekat, kakak ke adik, atau orang tua ke anak. Mirip 'jangan!', 'nggak boleh!', 'stop!' dalam obrolan santai tapi tegas.",
      formulas: [
        { group: "Godan", rule: "Bentuk kamus (dictionary form) + な. Contoh: 行く → 行くな, 飲む → 飲むな." },
        { group: "Ichidan", rule: "Bentuk kamus + な. Contoh: 食べる → 食べるな, 見る → 見るな." },
        { group: "Irregular", rule: "する → するな. Contoh: 無理する → 無理するな." }
      ],
      groups: [
        {
          name: "Godan",
          examples: [{
            base: "買う",
            transformed: "買うな",
            kana: "かう → かうな",
            romaji: "kau → kauna",
            meaning: "jangan beli (larangan kasar)",
            sentences: [
              { jp: "そんな高いもの買うなよ、無駄だぞ。", kana: "そんな たかい もの かうなよ、 むだ だぞ。", romaji: "Sonna takai mono kauna yo, muda da zo.", meaning: "Jangan beli barang mahal itu, buang-buang uang!" },
              { jp: "またゲーム買うな、勉強しろ。", kana: "また げーむ かうな、 べんきょうしろ。", romaji: "Mata geemu kauna, benkyou shiro.", meaning: "Jangan beli game lagi, belajar sana!" },
              { jp: "新しい服買うな、もうクローゼットいっぱいだろ。", kana: "あたらしい ふく かうな、 もう くろーぜっと いっぱい だろ。", romaji: "Atarashii fuku kauna, mou kuroozetto ippai daro.", meaning: "Jangan beli baju baru, lemari udah penuh!" },
              { jp: "お菓子買うな、太るぞ。", kana: "おかし かうな、 ふとるぞ。", romaji: "Okashi kauna, futoru zo.", meaning: "Jangan beli camilan, nanti gemuk!" },
              { jp: "株買うな、損するだけだ。", kana: "かぶ かうな、 そん する だけ だ。", romaji: "Kabu kauna, son suru dake da.", meaning: "Jangan beli saham, cuma rugi doang." },
              { jp: "そんなに本買うな、読まないくせに。", kana: "そんな に ほん かうな、 よまない くせ に。", romaji: "Sonna ni hon kauna, yomanai kuse ni.", meaning: "Jangan beli buku sebanyak itu, kamu nggak baca juga." },
              { jp: "高いスニーカー買うな、すぐ汚れるぞ。", kana: "たかい すにーかー かうな、 すぐ よごれるぞ。", romaji: "Takai suniikaa kauna, sugu yogoreru zo.", meaning: "Jangan beli sneakers mahal, cepat kotor!" },
              { jp: "またアイス買うな、冷蔵庫いっぱいだ。", kana: "また あいす かうな、 れいぞうこ いっぱい だ。", romaji: "Mata aisu kauna, reizouko ippai da.", meaning: "Jangan beli es krim lagi, kulkas udah penuh." },
              { jp: "無駄なもの買うな、金貯めろ。", kana: "むだ な もの かうな、 かね ためろ。", romaji: "Muda na mono kauna, kane tamero.", meaning: "Jangan beli barang sia-sia, nabung sana!" },
              { jp: "ブランド物買うな、偽物が多いぞ。", kana: "ぶらんどもの かうな、 にせもの が おおいぞ。", romaji: "Burando mono kauna, nisemono ga ooi zo.", meaning: "Jangan beli barang branded, banyak palsunya!" }
            ]
          }]
        },
        {
          name: "Ichidan",
          examples: [{
            base: "見る",
            transformed: "見るな",
            kana: "みる → みるな",
            romaji: "miru → miruna",
            meaning: "jangan lihat (larangan kasar)",
            sentences: [
              { jp: "そんなにスマホ見るな、目が悪くなるぞ。", kana: "そんな に すまほ みるな、 め が わるくなるぞ。", romaji: "Sonna ni sumaho miruna, me ga waruku naru zo.", meaning: "Jangan liat HP terus, matamu rusak nanti!" },
              { jp: "後ろ見るな、前向いて歩け。", kana: "うしろ みるな、 まえ むいて あるけ。", romaji: "Ushiro miruna, mae muite aruke.", meaning: "Jangan liat ke belakang, lihat depan!" },
              { jp: "人のスマホ見るな、プライバシーだろ。", kana: "ひと の すまほ みるな、 ぷらいばしー だろ。", romaji: "Hito no sumaho miruna, puraibashii daro.", meaning: "Jangan liat HP orang, itu privasi!" },
              { jp: "怖い映画見るな、寝れなくなるぞ。", kana: "こわい えいが みるな、 ねれなくなるぞ。", romaji: "Kowai eiga miruna, nerenaku naru zo.", meaning: "Jangan nonton film horor, nanti susah tidur!" },
              { jp: "試験の答え見るな、自分で考えろ。", kana: "しけん の こたえ みるな、 じぶん で かんがえろ。", romaji: "Shiken no kotae miruna, jibun de kangaero.", meaning: "Jangan liat jawaban orang, pikir sendiri!" },
              { jp: "変な動画見るな、時間無駄だぞ。", kana: "へんな どうが みるな、 じかん むだ だぞ。", romaji: "Hen na douga miruna, jikan muda da zo.", meaning: "Jangan nonton video aneh-aneh, buang waktu!" },
              { jp: "鏡見るな、早く支度しろ。", kana: "かがみ みるな、 はやく したくしろ。", romaji: "Kagami miruna, hayaku shitaku shiro.", meaning: "Jangan cermin mulu, cepat siap-siap!" },
              { jp: "人のノート見るな、集中しろ。", kana: "ひと の のーと みるな、 しゅうちゅうしろ。", romaji: "Hito no nooto miruna, shuuchuu shiro.", meaning: "Jangan liat catatan orang, fokus sendiri!" },
              { jp: "暗いところで本見るな、目が疲れるぞ。", kana: "くらい ところで ほん みるな、 め が つかれるぞ。", romaji: "Kurai tokoro de hon miruna, me ga tsukareru zo.", meaning: "Jangan baca buku di tempat gelap, matamu capek!" },
              { jp: "そんなに女の子見るな、変態かよ。", kana: "そんな に おんなのこ みるな、 へんたい かよ。", romaji: "Sonna ni onna no ko miruna, hentai kayo.", meaning: "Jangan liat cewek terus, mesum banget!" }
            ]
          }]
        },
        {
          name: "Irregular",
          examples: [{
            base: "無理する",
            transformed: "無理するな",
            kana: "むりする → むりするな",
            romaji: "muri suru → muri suruna",
            meaning: "jangan memaksakan diri (larangan kasar)",
            sentences: [
              { jp: "無理するな、体壊すぞ。", kana: "むりするな、 からだ こわすぞ。", romaji: "Muri suruna, karada kowasu zo.", meaning: "Jangan memaksakan diri, nanti sakit!" },
              { jp: "徹夜なんて無理するな、ちゃんと寝ろ。", kana: "てつや なんて むりするな、 ちゃんと ねろ。", romaji: "Tetsuya nante muri suruna, chanto nero.", meaning: "Jangan begadang, tidur yang bener!" },
              { jp: "一人で全部やろうとするな、手伝うよ。", kana: "ひとり で ぜんぶ やろうとするな、 てつだうよ。", romaji: "Hitori de zenbu yarou to suruna, tetsudau yo.", meaning: "Jangan lakuin semua sendiri, aku bantu." },
              { jp: "無理するなよ、休みたい時は休め。", kana: "むりするなよ、 やすみたい とき は やすめ。", romaji: "Muri suruna yo, yasumitai toki wa yasume.", meaning: "Jangan maksa diri, kalau capek istirahat aja." },
              { jp: "仕事で無理するな、会社より体大事だぞ。", kana: "しごと で むりするな、 かいしゃ より からだ だいじ だぞ。", romaji: "Shigoto de muri suruna, kaisha yori karada daiji da zo.", meaning: "Jangan over di kerja, tubuh lebih penting daripada kantor." },
              { jp: "ダイエットで無理するな、ゆっくりやれ。", kana: "だいえっと で むりするな、 ゆっくり やれ。", romaji: "Daitto de muri suruna, yukkuri yare.", meaning: "Jangan maksa diet, lakuin pelan-pelan." },
              { jp: "そんなに走るな、無理するなよ。", kana: "そんな に はしるな、 むりするなよ。", romaji: "Sonna ni hashiruna, muri suruna yo.", meaning: "Jangan lari terlalu kencang, jangan maksa!" },
              { jp: "無理するな、俺が代わりにやるよ。", kana: "むりするな、 おれ が かわりに やるよ。", romaji: "Muri suruna, ore ga kawari ni yaru yo.", meaning: "Jangan maksa, biar aku yang gantiin." },
              { jp: "試験前だからって無理するな、体調崩すぞ。", kana: "しけん まえ だからって むりするな、 たいちょう くずすぞ。", romaji: "Shiken mae dakaratte muri suruna, taichou kuzusu zo.", meaning: "Meski mau ujian, jangan maksa diri, nanti sakit." },
              { jp: "もう限界だろ、無理するなよ。", kana: "もう げんかい だろ、 むりするなよ。", romaji: "Mou genkai daro, muri suruna yo.", meaning: "Udah capek banget, jangan maksa lagi ya." }
            ]
          }]
        }
      ]
    },
	{
      id: "vf-21",
      level: "N5",
      order: 21,
      title: "~ろよ / ~えよ • Perintah Kasar Santai",
      summary: "Perintah Kasar Santai (N5). Bentuk imperatif (perintah) yang ditambahkan partikel 'よ' (yo) agar terdengar lebih akrab, atau memberi dorongan/penekanan. Sering digunakan antar teman pria, senior ke junior, atau untuk menyemangati (mirip 'Ayo dong!', 'Lakukanlah!', 'Sana!').",
      formulas: [
        { group: "Godan", rule: "Ubah huruf vokal terakhir 'u' menjadi deretan 'e', lalu tambah よ. Contoh: 行く → 行けよ, 頑張る → 頑張れよ." },
        { group: "Ichidan", rule: "Hilangkan 'る' (ru) di akhir, ganti dengan 'ろよ'. Contoh: 起きる → 起きろよ, 食べる → 食べろよ." },
        { group: "Irregular", rule: "する → しろよ, 来る (くる) → 来いよ (こいよ). Contoh: 勉強する → 勉強しろよ." }
      ],
      groups: [
        {
          name: "Godan",
          examples: [{
            base: "頑張る",
            transformed: "頑張れよ",
            kana: "がんばる → がんばれよ",
            romaji: "ganbaru → ganbare yo",
            meaning: "semangat ya / berusahalah (perintah santai)",
            sentences: [
              { jp: "明日の試験、頑張れよ。", kana: "あした の しけん、 がんばれよ。", romaji: "Ashita no shiken, ganbare yo.", meaning: "Ujian besok, semangat ya!" },
              { jp: "諦めるな、頑張れよ。", kana: "あきらめるな、 がんばれよ。", romaji: "Akirameru na, ganbare yo.", meaning: "Jangan menyerah, semangat dong!" },
              { jp: "明日の試合、頑張れよ。", kana: "あした の しあい、 がんばれよ。", romaji: "Ashita no shiai, ganbare yo.", meaning: "Pertandingan besok, semangat ya!" },
              { jp: "新しい仕事、頑張れよ。", kana: "あたらしい しごと、 がんばれよ。", romaji: "Atarashii shigoto, ganbare yo.", meaning: "Kerjaan barunya, semangat ya." },
              { jp: "もう少しだ、頑張れよ。", kana: "もう すこし だ、 がんばれよ。", romaji: "Mou sukoshi da, ganbare yo.", meaning: "Tinggal sedikit lagi, semangat dong!" },
              { jp: "お前ならできる、頑張れよ。", kana: "おまえ なら できる、 がんばれよ。", romaji: "Omae nara dekiru, ganbare yo.", meaning: "Kamu pasti bisa, semangat!" },
              { jp: "大変だけど、頑張れよ。", kana: "たいへん だけど、 がんばれよ。", romaji: "Taihen dakedo, ganbare yo.", meaning: "Meskipun susah, semangat ya." },
              { jp: "負けるな、頑張れよ。", kana: "まけるな、 がんばれよ。", romaji: "Makeruna, ganbare yo.", meaning: "Jangan kalah, semangat dong!" },
              { jp: "応援してるから、頑張れよ。", kana: "おうえん してる から、 がんばれよ。", romaji: "Ouen shiteru kara, ganbare yo.", meaning: "Aku selalu dukung kok, semangat ya!" },
              { jp: "受験勉強、頑張れよ。", kana: "じゅけん べんきょう、 がんばれよ。", romaji: "Juken benkyou, ganbare yo.", meaning: "Belajar buat ujiannya, semangat ya!" }
            ]
          }]
        },
        {
          name: "Ichidan",
          examples: [{
            base: "起きる",
            transformed: "起きろよ",
            kana: "おきる → おきろよ",
            romaji: "okiru → okiro yo",
            meaning: "bangun dong / bangunlah",
            sentences: [
              { jp: "おい、朝だぞ、起きろよ。", kana: "おい、 あさ だぞ、 おきろよ。", romaji: "Oi, asa da zo, okiro yo.", meaning: "Woi, udah pagi nih, bangun dong!" },
              { jp: "もう８時だ、早く起きろよ。", kana: "もう はちじ だ、 はやく おきろよ。", romaji: "Mou hachiji da, hayaku okiro yo.", meaning: "Udah jam 8 nih, cepetan bangun woi!" },
              { jp: "遅刻するぞ、起きろよ。", kana: "ちこく するぞ、 おきろよ。", romaji: "Chikoku suru zo, okiro yo.", meaning: "Nanti telat loh, bangun!" },
              { jp: "いつまで寝てるんだ、起きろよ。", kana: "いつまで ねてるんだ、 おきろよ。", romaji: "Itsu made neterun da, okiro yo.", meaning: "Mau tidur sampai kapan, bangun dong!" },
              { jp: "早く起きろよ、出かけるんだろ。", kana: "はやく おきろよ、 でかけるんだろ。", romaji: "Hayaku okiro yo, dekakerun daro.", meaning: "Cepat bangun dong, katanya mau pergi." },
              { jp: "起きろよ、朝飯できてるぞ。", kana: "おきろよ、 あさめし できてるぞ。", romaji: "Okiro yo, asameshi dekiteru zo.", meaning: "Bangun woi, sarapan udah siap." },
              { jp: "ジョギングするって言ってたろ、起きろよ。", kana: "じょぎんぐ する って いってたろ、 おきろよ。", romaji: "Jogingu surutte ittetaro, okiro yo.", meaning: "Katanya mau jogging, bangun dong!" },
              { jp: "昼だぞ、いい加減に起きろよ。", kana: "ひる だぞ、 いいかげん に おきろよ。", romaji: "Hiru da zo, ii kagen ni okiro yo.", meaning: "Udah siang nih, buruan bangun!" },
              { jp: "起きろよ、掃除手伝ってくれ。", kana: "おきろよ、 そうじ てつだってくれ。", romaji: "Okiro yo, souji tetsudatte kure.", meaning: "Bangun dong, bantuin aku bersih-bersih." },
              { jp: "怠けるな、起きろよ。", kana: "なまけるな、 おきろよ。", romaji: "Namakeruna, okiro yo.", meaning: "Jangan malas, bangun dong!" }
            ]
          }]
        },
        {
          name: "Irregular",
          examples: [{
            base: "しっかりする",
            transformed: "しっかりしろよ",
            kana: "しっかりする → しっかりしろよ",
            romaji: "shikkari suru → shikkari shiro yo",
            meaning: "sadar dong / yang bener dong (bersikaplah yang benar)",
            sentences: [
              { jp: "しっかりしろよ、リーダーだろ。", kana: "しっかりしろよ、 りーだー だろ。", romaji: "Shikkari shiro yo, riidaa daro.", meaning: "Yang bener dong, kamu kan ketuanya." },
              { jp: "泣くな、しっかりしろよ。", kana: "なくな、 しっかりしろよ。", romaji: "Nakuna, shikkari shiro yo.", meaning: "Jangan nangis, yang tegar dong!" },
              { jp: "もう大人なんだから、しっかりしろよ。", kana: "もう おとな なんだから、 しっかりしろよ。", romaji: "Mou otona nan dakara, shikkari shiro yo.", meaning: "Kamu udah dewasa, sikapnya yang bener dong!" },
              { jp: "明日はプレゼンだぞ、しっかりしろよ。", kana: "あした は ぷれぜん だぞ、 しっかりしろよ。", romaji: "Ashita wa purezen da zo, shikkari shiro yo.", meaning: "Besok kan presentasi, fokus dong!" },
              { jp: "ぼーっとするな、しっかりしろよ。", kana: "ぼーっと するな、 しっかりしろよ。", romaji: "Bootto suruna, shikkari shiro yo.", meaning: "Jangan ngelamun terus, sadar woi!" },
              { jp: "男だろ、しっかりしろよ。", kana: "おとこ だろ、 しっかりしろよ。", romaji: "Otoko daro, shikkari shiro yo.", meaning: "Kamu laki-laki kan, yang tegar dong!" },
              { jp: "深呼吸して、しっかりしろよ。", kana: "しんこきゅう して、 しっかりしろよ。", romaji: "Shinkokyuu shite, shikkari shiro yo.", meaning: "Tarik napas, tenang, dan sadar dong!" },
              { jp: "試験近いんだから、しっかりしろよ。", kana: "しけん ちかいんだから、 しっかりしろよ。", romaji: "Shiken chikai n dakara, shikkari shiro yo.", meaning: "Ujian udah dekat, belajarnya yang bener dong!" },
              { jp: "酔っ払うな、しっかりしろよ。", kana: "よっぱらうな、 しっかりしろよ。", romaji: "Yopparau na, shikkari shiro yo.", meaning: "Jangan mabuk gitu, sadar dong!" },
              { jp: "頼りにしてるんだから、しっかりしろよ。", kana: "たより に してるんだから、 しっかりしろよ。", romaji: "Tayori ni shiterun dakara, shikkari shiro yo.", meaning: "Aku ngandelin kamu loh, kerjanya yang bener dong!" }
            ]
          }]
        }
      ]
    },
	{
      id: "vf-22",
      level: "N5",
      order: 22,
      title: "~るなよ • Larangan Kasar Santai",
      summary: "Larangan Kasar Santai (N5). Merupakan gabungan dari larangan kasar (~るな) dan partikel 'よ'. Penambahan 'よ' membuat larangan ini terdengar sedikit lebih bersahabat, mengingatkan, atau memohon dengan akrab. Sering diartikan 'Jangan ... ya' atau 'Jangan ... dong' antar teman.",
      formulas: [
        { group: "Godan", rule: "Bentuk kamus + なよ. Contoh: 言う → 言うなよ, 行く → 行くなよ." },
        { group: "Ichidan", rule: "Bentuk kamus + なよ. Contoh: 忘れる → 忘れるなよ, 食べる → 食べるなよ." },
        { group: "Irregular", rule: "する → するなよ, 来る → 来るなよ. Contoh: 心配する → 心配するなよ." }
      ],
      groups: [
        {
          name: "Godan",
          examples: [{
            base: "言う",
            transformed: "言うなよ",
            kana: "いう → いうなよ",
            romaji: "iu → iu na yo",
            meaning: "jangan bilang-bilang ya / jangan ngomong gitu dong",
            sentences: [
              { jp: "これは秘密だから、誰にも言うなよ。", kana: "これ は ひみつ だから、 だれ に も いうなよ。", romaji: "Kore wa himitsu dakara, dare ni mo iu na yo.", meaning: "Ini rahasia lho, jangan bilang siapa-siapa ya." },
              { jp: "そんな悲しいこと言うなよ。", kana: "そんな かなしい こと いうなよ。", romaji: "Sonna kanashii koto iu na yo.", meaning: "Jangan ngomong hal yang sedih gitu dong." },
              { jp: "嘘を言うなよ、本当のことを話せ。", kana: "うそ を いうなよ、 ほんとう の こと を はなせ。", romaji: "Uso o iu na yo, hontou no koto o hanase.", meaning: "Jangan bohong dong, ceritakan yang sebenarnya." },
              { jp: "冗談言うなよ、本気にするだろ。", kana: "じょうだん いうなよ、 ほんき に する だろ。", romaji: "Joudan iu na yo, honki ni suru daro.", meaning: "Jangan bercanda dong, nanti aku anggap serius lho." },
              { jp: "文句ばかり言うなよ、自分でやれ。", kana: "もんく ばかり いうなよ、 じぶん で やれ。", romaji: "Monku bakari iu na yo, jibun de yare.", meaning: "Jangan ngeluh aja dong, kerjain sendiri sana." },
              { jp: "人の悪口を言うなよ。", kana: "ひと の わるぐち を いうなよ。", romaji: "Hito no waruguchi o iu na yo.", meaning: "Jangan jelek-jelekin orang dong." },
              { jp: "無理だなんて言うなよ、やってみないと分からないだろ。", kana: "むり だ なんて いうなよ、 やってみない と わからない だろ。", romaji: "Muri da nante iu na yo, yatte minai to wakaranai daro.", meaning: "Jangan bilang mustahil dong, kan belum dicoba." },
              { jp: "泣き言を言うなよ、男だろ。", kana: "なきごと を いうなよ、 おとこ だろ。", romaji: "Nakigoto o iu na yo, otoko daro.", meaning: "Jangan cengeng dong, kamu kan laki-laki." },
              { jp: "負けた言い訳を言うなよ。", kana: "まけた いいわけ を いうなよ。", romaji: "Maketa iiwake o iu na yo.", meaning: "Jangan cari-cari alasan karena kalah dong." },
              { jp: "わがまま言うなよ、みんな我慢してるんだから。", kana: "わがまま いうなよ、 みんな がまん してるんだから。", romaji: "Wagamama iu na yo, minna gaman shiterun dakara.", meaning: "Jangan egois dong, yang lain juga pada sabar kok." }
            ]
          }]
        },
        {
          name: "Ichidan",
          examples: [{
            base: "忘れる",
            transformed: "忘れるなよ",
            kana: "わすれる → わすれるなよ",
            romaji: "wasureru → wasureru na yo",
            meaning: "jangan lupa ya",
            sentences: [
              { jp: "明日の約束、絶対に忘れるなよ。", kana: "あした の やくそく、 ぜったい に わすれるなよ。", romaji: "Ashita no yakusoku, zettai ni wasureru na yo.", meaning: "Janji besok, awas jangan sampai lupa ya." },
              { jp: "宿題、忘れるなよ。", kana: "しゅくだい、 わすれるなよ。", romaji: "Shukudai, wasureru na yo.", meaning: "PR-nya jangan lupa lho." },
              { jp: "雨が降るかもしれないから、傘を忘れるなよ。", kana: "あめ が ふる かもしれない から、 かさ を わすれるなよ。", romaji: "Ame ga furu kamo shirenai kara, kasa o wasureru na yo.", meaning: "Kayaknya bakal hujan, jangan lupa bawa payung ya." },
              { jp: "俺の顔、忘れるなよ。", kana: "おれ の かお、 わすれるなよ。", romaji: "Ore no kao, wasureru na yo.", meaning: "Jangan lupain wajahku ya. (Jangan lupain aku ya.)" },
              { jp: "会議の時間を忘れるなよ。", kana: "かいぎ の じかん を わすれるなよ。", romaji: "Kaigi no jikan o wasureru na yo.", meaning: "Waktu rapatnya jangan lupa ya." },
              { jp: "弁当、忘れるなよ。テーブルの上にあるぞ。", kana: "べんとう、 わすれるなよ。 てーぶる の うえ に あるぞ。", romaji: "Bentou, wasureru na yo. Teeburu no ue ni aru zo.", meaning: "Bekalnya jangan lupa ya. Ada di atas meja tuh." },
              { jp: "飛行機のチケット、忘れるなよ。", kana: "ひこうき の ちけっと、 わすれるなよ。", romaji: "Hikouki no chiketto, wasureru na yo.", meaning: "Tiket pesawatnya jangan lupa lho." },
              { jp: "出かける時、鍵をかけるの忘れるなよ。", kana: "でかける とき、 かぎ を かける の わすれるなよ。", romaji: "Dekakeru toki, kagi o kakeru no wasureru na yo.", meaning: "Pas mau pergi, jangan lupa kunci pintu ya." },
              { jp: "俺が言ったアドバイス、忘れるなよ。", kana: "おれ が いった あどばいす、 わすれるなよ。", romaji: "Ore ga itta adobaisu, wasureru na yo.", meaning: "Nasihat yang aku kasih, jangan lupa ya." },
              { jp: "いつでも感謝の気持ちを忘れるなよ。", kana: "いつ で も かんしゃ の きもち を わすれるなよ。", romaji: "Itsu demo kansha no kimochi o wasureru na yo.", meaning: "Kapan pun, jangan pernah lupa rasa bersyukur ya." }
            ]
          }]
        },
        {
          name: "Irregular",
          examples: [{
            base: "心配する",
            transformed: "心配するなよ",
            kana: "しんぱいする → しんぱいするなよ",
            romaji: "shinpai suru → shinpai suru na yo",
            meaning: "jangan khawatir ya",
            sentences: [
              { jp: "俺なら大丈夫だから、心配するなよ。", kana: "おれ なら だいじょうぶ だから、 しんぱいするなよ。", romaji: "Ore nara daijoubu dakara, shinpai suru na yo.", meaning: "Aku baik-baik aja kok, jangan khawatir ya." },
              { jp: "テストの点数なんて心配するなよ、次頑張ればいい。", kana: "てすと の てんすう なんて しんぱいするなよ、 つぎ がんばれば いい。", romaji: "Tesuto no tensuu nante shinpai suru na yo, tsugi ganbareba ii.", meaning: "Nilai ujian gitu nggak usah dikhawatirin, ujian depan berjuang lagi." },
              { jp: "すぐ帰るから、心配するなよ。", kana: "すぐ かえる から、 しんぱいするなよ。", romaji: "Sugu kaeru kara, shinpai suru na yo.", meaning: "Aku bakal cepet pulang kok, jangan khawatir ya." },
              { jp: "お金のことなら心配するなよ、俺が貸すから。", kana: "おかね の こと なら しんぱいするなよ、 おれ が かす から。", romaji: "Okane no koto nara shinpai suru na yo, ore ga kasu kara.", meaning: "Kalau soal uang, nggak usah khawatir, nanti aku pinjamin." },
              { jp: "そんな小さなこと、心配するなよ。", kana: "そんな ちいさな こと、 しんぱいするなよ。", romaji: "Sonna chiisana koto, shinpai suru na yo.", meaning: "Hal kecil kayak gitu nggak usah dikhawatirin lho." },
              { jp: "病気はすぐ治るから、心配するなよ。", kana: "びょうき は すぐ なおる から、 しんぱいするなよ。", romaji: "Byouki wa sugu naoru kara, shinpai suru na yo.", meaning: "Sakitnya bakal cepet sembuh kok, jangan khawatir ya." },
              { jp: "俺がついてるから、心配するなよ。", kana: "おれ が ついてる から、 しんぱいするなよ。", romaji: "Ore ga tsuiteru kara, shinpai suru na yo.", meaning: "Ada aku di sini kok, jangan khawatir ya." },
              { jp: "親に、心配するなよって伝えてくれ。", kana: "おや に、 しんぱいするなよ って つたえてくれ。", romaji: "Oya ni, shinpai suru na yotte tsutaete kure.", meaning: "Tolong bilangin ke ortu, nggak usah khawatir ya." },
              { jp: "結果は気にしなくていい、心配するなよ。", kana: "けっか は き に しなくて いい、 しんぱいするなよ。", romaji: "Kekka wa ki ni shinakute ii, shinpai suru na yo.", meaning: "Nggak usah mikirin hasilnya, jangan khawatir ya." },
              { jp: "未来のことなんて、まだ心配するなよ。", kana: "みらい の こと なんて、 まだ しんぱいするなよ。", romaji: "Mirai no koto nante, mada shinpai suru na yo.", meaning: "Soal masa depan mah, belum usah dikhawatirin sekarang." }
            ]
          }]
        }
      ]
    },
	{
      id: "vf-23",
      level: "N4",
      order: 23,
      title: "~てしまう • Selesai Total / Menyesal",
      summary: "Selesai Total atau Menyesal (N4). Digunakan untuk menunjukkan bahwa suatu tindakan telah selesai sepenuhnya sampai tuntas, ATAU menunjukkan bahwa sesuatu terjadi secara tidak sengaja, terlanjur, dan sering kali disertai rasa penyesalan.",
      formulas: [
        { group: "Godan", rule: "Ubah kata kerja ke bentuk Te (て/で), lalu tambah しまう. Contoh: 飲む → 飲んでしまう, 行く → 行ってしまう." },
        { group: "Ichidan", rule: "Ubah kata kerja ke bentuk Te (て), lalu tambah しまう. Contoh: 忘れる → 忘れてしまう, 食べる → 食べてしまう." },
        { group: "Irregular", rule: "する → してしまう, 来る (くる) → 来てしまう (きてしまう). Contoh: 遅刻する → 遅刻してしまう." }
      ],
      groups: [
        {
          name: "Godan",
          examples: [{
            base: "飲む",
            transformed: "飲んでしまう",
            kana: "のむ → のんでしまう",
            romaji: "nomu → nonde shimau",
            meaning: "terlanjur minum / minum sampai habis",
            sentences: [
              { jp: "喉が渇いて、ペットボトルの水を全部飲んでしまう。", kana: "のど が かわいて、 ぺっとぼとる の みず を ぜんぶ のんでしまう。", romaji: "Nodo ga kawaite, pettobotoru no mizu o zenbu nonde shimau.", meaning: "Karena haus, aku meminum habis semua air di botol." },
              { jp: "間違えて彼のコーヒーを飲んでしまう。", kana: "まちがえて かれ の こーひー を のんでしまう。", romaji: "Machigaete kare no koohii o nonde shimau.", meaning: "Nggak sengaja terminum kopinya dia." },
              { jp: "ストレスで、ついお酒をたくさん飲んでしまう。", kana: "すとれす で、 つい おさけ を たくさん のんでしまう。", romaji: "Sutoresu de, tsui osake o takusan nonde shimau.", meaning: "Karena stres, tanpa sadar terlanjur minum banyak alkohol." },
              { jp: "賞味期限切れの牛乳を飲んでしまう。", kana: "しょうみきげんぎれ の ぎゅうにゅう を のんでしまう。", romaji: "Shoumikigengire no gyuunyuu o nonde shimau.", meaning: "Nggak sengaja minum susu yang sudah kedaluwarsa." },
              { jp: "甘いものがあると、いつもお茶を飲んでしまう。", kana: "あまい もの が ある と、 いつも おちゃ を のんでしまう。", romaji: "Amai mono ga aru to, itsumo ocha o nonde shimau.", meaning: "Kalau ada makanan manis, akhirnya selalu (kebablasan) minum teh." },
              { jp: "薬を飲んでしまうと、眠くなる。", kana: "くすり を のんでしまう と、 ねむくなる。", romaji: "Kusuri o nonde shimau to, nemuku naru.", meaning: "Kalau terlanjur minum obatnya, bakal jadi ngantuk." },
              { jp: "冷たいジュースを全部飲んでしまう。", kana: "つめたい じゅーす を ぜんぶ のんでしまう。", romaji: "Tsumetai juusu o zenbu nonde shimau.", meaning: "Menghabiskan semua jus dinginnya." },
              { jp: "気づかないうちに、友達の水を飲んでしまう。", kana: "きづかない うち に、 ともだち の みず を のんでしまう。", romaji: "Kizukanai uchi ni, tomodachi no mizu o nonde shimau.", meaning: "Tanpa sadar, malah terminum air milik teman." },
              { jp: "毎晩、寝る前にホットミルクを飲んでしまう。", kana: "まいばん、 ねる まえ に ほっと みるく を のんでしまう。", romaji: "Maiban, neru mae ni hotto miruku o nonde shimau.", meaning: "Setiap malam, pada akhirnya selalu minum susu hangat sebelum tidur." },
              { jp: "ダイエット中なのに、甘いジュースを飲んでしまう。", kana: "だいえっとちゅう なのに、 あまい じゅーす を のんでしまう。", romaji: "Daiettochuu nanoni, amai juusu o nonde shimau.", meaning: "Padahal lagi diet, tapi malah terlanjur minum jus manis." }
            ]
          }]
        },
        {
          name: "Ichidan",
          examples: [{
            base: "忘れる",
            transformed: "忘れてしまう",
            kana: "わすれる → わすれてしまう",
            romaji: "wasureru → wasurete shimau",
            meaning: "benar-benar lupa / terlupa",
            sentences: [
              { jp: "忙しいと、つい約束を忘れてしまう。", kana: "いそがしい と、 つい やくそく を わすれてしまう。", romaji: "Isogashii to, tsui yakusoku o wasurete shimau.", meaning: "Kalau sibuk, tanpa sadar jadi kelupaan janji." },
              { jp: "彼の名前を完全に忘れてしまう。", kana: "かれ の なまえ を かんぜん に わすれてしまう。", romaji: "Kare no namae o kanzen ni wasurete shimau.", meaning: "Benar-benar lupa sama namanya dia." },
              { jp: "電車に傘を忘れてしまう。", kana: "でんしゃ に かさ を わすれてしまう。", romaji: "Densha ni kasa o wasurete shimau.", meaning: "Nggak sengaja ketinggalan payung di kereta." },
              { jp: "宿題を家に忘れてしまう。", kana: "しゅくだい を いえ に わすれてしまう。", romaji: "Shukudai o ie ni wasurete shimau.", meaning: "PR-nya nggak sengaja ketinggalan di rumah." },
              { jp: "パスワードをよく忘れてしまう。", kana: "ぱすわーど を よく わすれてしまう。", romaji: "Pasuwaado o yoku wasurete shimau.", meaning: "Sering banget lupa kata sandi." },
              { jp: "時間が経つと、嫌なことも忘れてしまう。", kana: "じかん が たつ と、 いや な こと も わすれてしまう。", romaji: "Jikan ga tatsu to, iya na koto mo wasurete shimau.", meaning: "Seiring berjalannya waktu, hal yang menyebalkan pun akan terlupakan." },
              { jp: "買うべきものをいつも忘れてしまう。", kana: "かう べき もの を いつも わすれてしまう。", romaji: "Kau beki mono o itsumo wasurete shimau.", meaning: "Selalu aja lupa barang yang seharusnya dibeli." },
              { jp: "緊張して、セリフを忘れてしまう。", kana: "きんちょう して、 せりふ を わすれてしまう。", romaji: "Kinchou shite, serifu o wasurete shimau.", meaning: "Karena gugup, jadinya lupa dialognya deh." },
              { jp: "日本語の単語をすぐに忘れてしまう。", kana: "にほんご の たんご を すぐ に わすれてしまう。", romaji: "Nihongo no tango o sugu ni wasurete shimau.", meaning: "Cepat banget lupa kosakata bahasa Jepang." },
              { jp: "鍵をどこに置いたか忘れてしまう。", kana: "かぎ を どこ に おいた か わすれてしまう。", romaji: "Kagi o doko ni oita ka wasurete shimau.", meaning: "Lupa naruh kunci di mana." }
            ]
          }]
        },
        {
          name: "Irregular",
          examples: [{
            base: "遅刻する",
            transformed: "遅刻してしまう",
            kana: "ちこくする → ちこくしてしまう",
            romaji: "chikoku suru → chikoku shite shimau",
            meaning: "akhirnya terlambat / terlanjur telat",
            sentences: [
              { jp: "寝坊して、学校に遅刻してしまう。", kana: "ねぼう して、 がっこう に ちこくしてしまう。", romaji: "Nebou shite, gakkou ni chikoku shite shimau.", meaning: "Karena kesiangan, jadinya terlambat ke sekolah." },
              { jp: "渋滞のせいで、会議に遅刻してしまう。", kana: "じゅうたい の せい で、 かいぎ に ちこくしてしまう。", romaji: "Juutai no sei de, kaigi ni chikoku shite shimau.", meaning: "Gara-gara macet, akhirnya terlambat ikut rapat." },
              { jp: "電車が遅れて、会社に遅刻してしまう。", kana: "でんしゃ が おくれて、 かいしゃ に ちこくしてしまう。", romaji: "Densha ga okurete, kaisha ni chikoku shite shimau.", meaning: "Keretanya telat, jadinya terlambat ke kantor." },
              { jp: "道に迷って、待ち合わせに遅刻してしまう。", kana: "みち に まよって、 まちあわせ に ちこくしてしまう。", romaji: "Michi ni mayotte, machiawase ni chikoku shite shimau.", meaning: "Karena nyasar, akhirnya telat ke tempat janjian." },
              { jp: "目覚まし時計が鳴らなくて、遅刻してしまう。", kana: "めざましどけい が ならなくて、 ちこくしてしまう。", romaji: "Mezamashidokei ga naranakute, chikoku shite shimau.", meaning: "Alarmnya nggak bunyi, jadinya telat deh." },
              { jp: "準備に時間がかかって、遅刻してしまう。", kana: "じゅんび に じかん が かかって、 ちこくしてしまう。", romaji: "Junbi ni jikan ga kakatte, chikoku shite shimau.", meaning: "Persiapannya makan waktu, jadinya telat." },
              { jp: "雨が降ると、いつもバスが遅れて遅刻してしまう。", kana: "あめ が ふる と、 いつも ばす が おくれて ちこくしてしまう。", romaji: "Ame ga furu to, itsumo basu ga okurete chikoku shite shimau.", meaning: "Kalau hujan, busnya selalu datang terlambat dan bikin telat." },
              { jp: "大事な面接なのに、遅刻してしまう。", kana: "だいじ な めんせつ なのに、 ちこくしてしまう。", romaji: "Daiji na mensetsu nanoni, chikoku shite shimau.", meaning: "Padahal wawancara penting, malah jadinya terlambat." },
              { jp: "友達と話していて、授業に遅刻してしまう。", kana: "ともだち と はなして いて、 じゅぎょう に ちこくしてしまう。", romaji: "Tomodachi to hanashite ite, jugyou ni chikoku shite shimau.", meaning: "Keasyikan ngobrol sama teman, jadinya telat masuk kelas." },
              { jp: "夜更かしすると、次の日遅刻してしまう。", kana: "よふかし する と、 つぎ の ひ ちこくしてしまう。", romaji: "Yofukashi suru to, tsugi no hi chikoku shite shimau.", meaning: "Kalau begadang, besoknya pasti bakal terlambat." }
            ]
          }]
        }
      ]
    },
	{
      id: "vf-24",
      level: "N4",
      order: 24,
      title: "~てしまいます • Selesai Total Sopan",
      summary: "Selesai Total atau Menyesal Sopan (N4). Ini adalah bentuk formal dari '~てしまう'. Digunakan untuk menyatakan tindakan yang telah selesai sepenuhnya, atau sesuatu yang terjadi tanpa disengaja (terlanjur/kebablasan) dengan nuansa menyesal, diucapkan dalam situasi yang membutuhkan kesopanan.",
      formulas: [
        { group: "Godan", rule: "Ubah kata kerja ke bentuk Te (て/で), lalu tambah しまいます. Contoh: 買う → 買ってしまいます." },
        { group: "Ichidan", rule: "Ubah kata kerja ke bentuk Te (て), lalu tambah しまいます. Contoh: 寝る → 寝てしまいます." },
        { group: "Irregular", rule: "する → してしまいます, 来る (くる) → 来てしまいます (きてしまいます). Contoh: 失敗する → 失敗してしまいます." }
      ],
      groups: [
        {
          name: "Godan",
          examples: [{
            base: "買う",
            transformed: "買ってしまいます",
            kana: "かう → かってしまいます",
            romaji: "kau → katte shimaimasu",
            meaning: "terlanjur membeli / tanpa sadar membeli",
            sentences: [
			  { jp: "お腹が空いていると、ついコンビニでたくさん買ってしまいます。", kana: "おなか が すいている と、 つい こんびに で たくさん かってしまいます。", romaji: "Onaka ga suite iru to, tsui konbini de takusan katte shimaimasu.", meaning: "Kalau sedang lapar, tanpa sadar saya membeli terlalu banyak makanan di minimarket." },
              { jp: "まだ読んでいない本があるのに、また新しい本を買ってしまいます。", kana: "まだ よんでいない ほん が ある のに、 また あたらしい ほん を かってしまいます。", romaji: "Mada yonde inai hon ga aru noni, mata atarashii hon o katte shimaimasu.", meaning: "Padahal masih ada buku yang belum dibaca, tapi saya terlanjur membeli buku baru lagi." },
              { jp: "夜中にネットを見ていると、つい無駄なものを買ってしまいます。", kana: "よなか に ねっと を みている と、 つい むだ な もの を かってしまいます。", romaji: "Yonaka ni netto o mite iru to, tsui muda na mono o katte shimaimasu.", meaning: "Kalau melihat internet tengah malam, tanpa sadar saya membeli barang yang sia-sia." },
              { jp: "「限定品」と書いてあると、つい買ってしまいます。", kana: "「げんていひん」 と かいて ある と、 つい かってしまいます。", romaji: "'Genteihin' to kaite aru to, tsui katte shimaimasu.", meaning: "Kalau ada tulisan 'barang terbatas', tanpa sadar saya langsung membelinya." },
              { jp: "ダイエット中なのに、美味しそうなケーキを買ってしまいます。", kana: "だいえっとちゅう なのに、 おいしそう な けーき を かってしまいます。", romaji: "Daiettochuu nanoni, oishisou na keeki o katte shimaimasu.", meaning: "Padahal sedang diet, tapi saya terlanjur membeli kue yang kelihatannya enak." },
              { jp: "セールで安いと、着ない服まで買ってしまいます。", kana: "せーる で やすい と、 きない ふく まで かってしまいます。", romaji: "Seeru de yasui to, kinai fuku made katte shimaimasu.", meaning: "Karena murah saat diskon, baju yang tidak akan dipakai pun terlanjur saya beli." },
              { jp: "毎朝カフェで、つい高いコーヒーを買ってしまいます。", kana: "まいあさ かふぇ で、 つい たかい こーひー を かってしまいます。", romaji: "Maiasa kafe de, tsui takai koohii o katte shimaimasu.", meaning: "Setiap pagi di kafe, tanpa sadar saya membeli kopi yang mahal." },
              { jp: "新しいゲームが出ると、テスト前でも買ってしまいます。", kana: "あたらしい げーむ が でる と、 てすと まえ でも かってしまいます。", romaji: "Atarashii geemu ga deru to, tesuto mae demo katte shimaimasu.", meaning: "Kalau ada game baru keluar, meskipun sebelum ujian saya tetap terlanjur membelinya." },
              { jp: "スーパーに行くと、いつもお菓子を買ってしまいます。", kana: "すーぱー に いく と、 いつも おかし を かってしまいます。", romaji: "Suupaa ni iku to, itsumo okashi o katte shimaimasu.", meaning: "Kalau pergi ke supermarket, saya selalu kebablasan membeli camilan." },
              { jp: "面白そうな漫画を見つけると、つい全巻買ってしまいます。", kana: "おもしろそう な まんが を みつける と、 つい ぜんかん かってしまいます。", romaji: "Omoshirosou na manga o mitsukeru to, tsui zenkan katte shimaimasu.", meaning: "Kalau menemukan komik yang seru, tanpa sadar saya membeli seluruh volumenya." }
            ]
          }]
        },
        {
          name: "Ichidan",
          examples: [{
            base: "寝る",
            transformed: "寝てしまいます",
            kana: "ねる → ねてしまいます",
            romaji: "neru → nete shimaimasu",
            meaning: "ketiduran / tanpa sadar tidur",
            sentences: [
              { jp: "疲れていると、電車の中で寝てしまいます。", kana: "つかれている と、 でんしゃ の なか で ねてしまいます。", romaji: "Tsukarete iru to, densha no naka de nete shimaimasu.", meaning: "Kalau sedang lelah, saya ketiduran di dalam kereta." },
              { jp: "テレビを見ながら寝てしまいます。", kana: "てれび を みながら ねてしまいます。", romaji: "Terebi o minagara nete shimaimasu.", meaning: "Saya ketiduran sambil menonton televisi." },
              { jp: "授業が退屈で、つい寝てしまいます。", kana: "じゅぎょう が たいくつ で、 つい ねてしまいます。", romaji: "Jugyou ga taikutsu de, tsui nete shimaimasu.", meaning: "Karena kelasnya membosankan, tanpa sadar saya ketiduran." },
              { jp: "本を読んでいると、いつの間にか寝てしまいます。", kana: "ほん を よんでいる と、 いつのまにか ねてしまいます。", romaji: "Hon o yonde iru to, itsunomanika nete shimaimasu.", meaning: "Saat sedang membaca buku, tahu-tahu saya ketiduran." },
              { jp: "暖房をつけると、暖かくて寝てしまいます。", kana: "だんぼう を つける と、 あたたかくて ねてしまいます。", romaji: "Danbou o tsukeru to, atatakakute nete shimaimasu.", meaning: "Kalau menyalakan pemanas, karena hangat saya jadi ketiduran." },
              { jp: "映画館が暗いので、いつも寝てしまいます。", kana: "えいがかん が くらい ので、 いつも ねてしまいます。", romaji: "Eigakan ga kurai node, itsumo nete shimaimasu.", meaning: "Karena bioskop gelap, saya selalu ketiduran." },
              { jp: "ご飯を食べた後は、眠くて寝てしまいます。", kana: "ごはん を たべた あと は、 ねむくて ねてしまいます。", romaji: "Gohan o tabeta ato wa, nemukute nete shimaimasu.", meaning: "Setelah makan, saya mengantuk dan ketiduran." },
              { jp: "ソファに横になると、すぐに寝てしまいます。", kana: "そふぁ に よこ に なる と、 すぐ に ねてしまいます。", romaji: "Sofa ni yoko ni naru to, sugu ni nete shimaimasu.", meaning: "Kalau berbaring di sofa, saya langsung ketiduran." },
              { jp: "静かな音楽を聴くと、リラックスして寝てしまいます。", kana: "しずかな おんがく を きく と、 りらっくす して ねてしまいます。", romaji: "Shizukana ongaku o kiku to, rirakkusu shite nete shimaimasu.", meaning: "Kalau mendengarkan musik yang tenang, saya merasa santai lalu ketiduran." },
              { jp: "毎晩、スマホを見ながら寝てしまいます。", kana: "まいばん、 すまほ を みながら ねてしまいます。", romaji: "Maiban, sumaho o minagara nete shimaimasu.", meaning: "Setiap malam, saya ketiduran sambil melihat ponsel." }
            ]
          }]
        },
        {
          name: "Irregular",
          examples: [{
            base: "失敗する",
            transformed: "失敗してしまいます",
            kana: "しっぱいする → しっぱいしてしまいます",
            romaji: "shippai suru → shippai shite shimaimasu",
            meaning: "melakukan kesalahan / berujung gagal",
            sentences: [
              { jp: "緊張すると、面接で失敗してしまいます。", kana: "きんちょう する と、 めんせつ で しっぱいしてしまいます。", romaji: "Kinchou suru to, mensetsu de shippai shite shimaimasu.", meaning: "Kalau gugup, saya akhirnya melakukan kesalahan saat wawancara." },
              { jp: "急ぐと、いつも料理に失敗してしまいます。", kana: "いそぐ と、 いつも りょうり に しっぱいしてしまいます。", romaji: "Isogu to, itsumo ryouri ni shippai shite shimaimasu.", meaning: "Kalau terburu-buru, saya selalu gagal dalam memasak." },
              { jp: "確認しないと、テストで失敗してしまいます。", kana: "かくにん しない と、 てすと で しっぱいしてしまいます。", romaji: "Kakunin shinai to, tesuto de shippai shite shimaimasu.", meaning: "Kalau tidak diperiksa lagi, saya akan melakukan kesalahan di ujian." },
              { jp: "難しいケーキを作ると、よく失敗してしまいます。", kana: "むずかしい けーき を つくる と、 よく しっぱいしてしまいます。", romaji: "Muzukashii keeki o tsukuru to, yoku shippai shite shimaimasu.", meaning: "Kalau membuat kue yang sulit, saya sering gagal." },
              { jp: "準備が足りないと、プレゼンで失敗してしまいます。", kana: "じゅんび が たりない と、 ぷれぜん で しっぱいしてしまいます。", romaji: "Junbi ga tarinai to, purezen de shippai shite shimaimasu.", meaning: "Kalau persiapannya kurang, saya akan berujung gagal saat presentasi." },
              { jp: "人の意見を聞かないと、仕事で失敗してしまいます。", kana: "ひと の いけん を きかない と、 しごと で しっぱいしてしまいます。", romaji: "Hito no iken o kikanai to, shigoto de shippai shite shimaimasu.", meaning: "Kalau tidak mendengarkan pendapat orang lain, saya akan melakukan kesalahan dalam pekerjaan." },
              { jp: "焦ると、大切なところで失敗してしまいます。", kana: "あせる と、 たいせつ な ところ で しっぱいしてしまいます。", romaji: "Aseru to, taisetsu na tokoro de shippai shite shimaimasu.", meaning: "Kalau panik, saya jadi melakukan kesalahan di bagian yang penting." },
              { jp: "初めてのことは、どうしても失敗してしまいます。", kana: "はじめて の こと は、 どうしても しっぱいしてしまいます。", romaji: "Hajimete no koto wa, doushitemo shippai shite shimaimasu.", meaning: "Kalau hal yang baru pertama kali, mau bagaimana lagi akhirnya saya gagal juga." },
              { jp: "注意力がないと、簡単な計算でも失敗してしまいます。", kana: "ちゅういりょく が ない と、 かんたんな けいさん で も しっぱいしてしまいます。", romaji: "Chuuiryoku ga nai to, kantan na keisan demo shippai shite shimaimasu.", meaning: "Kalau kurang fokus, perhitungan yang mudah pun saya jadi salah." },
              { jp: "疲れているときは、細かい作業で失敗してしまいます。", kana: "つかれている とき は、 こまかい さぎょう で しっぱいしてしまいます。", romaji: "Tsukarete iru toki wa, komakai sagyou de shippai shite shimaimasu.", meaning: "Saat sedang lelah, saya suka melakukan kesalahan pada pekerjaan yang butuh ketelitian." }
            ]
          }]
        }
      ]
    },
	{
      id: "vf-25",
      level: "N4",
      order: 25,
      title: "~てしまった • Lampau Selesai/Menyesal",
      summary: "Lampau Selesai / Menyesal (N4). Digunakan untuk menyatakan kejadian di masa lalu yang sudah terlanjur terjadi, dilakukan tanpa sengaja, atau menyisakan rasa penyesalan. Ini adalah bentuk biasa (plain) yang sering digunakan saat berbicara dengan teman atau bergumam sendiri.",
      formulas: [
        { group: "Godan", rule: "Ubah kata kerja ke bentuk Te (て/で), lalu tambah しまった. Contoh: こぼす → こぼしてしまった." },
        { group: "Ichidan", rule: "Ubah kata kerja ke bentuk Te (て), lalu tambah しまった. Contoh: 食べる → 食べてしまった." },
        { group: "Irregular", rule: "する → してしまった, 来る (くる) → 来てしまった (きてしまった). Contoh: 寝坊する → 寝坊してしまった." }
      ],
      groups: [
        {
          name: "Godan",
          examples: [{
            base: "こぼす",
            transformed: "こぼしてしまった",
            kana: "こぼす → こぼしてしまった",
            romaji: "kobosu → koboshite shimatta",
            meaning: "nggak sengaja menumpahkan",
            sentences: [
              { jp: "パソコンにコーヒーをこぼしてしまった。", kana: "ぱそこん に こーひー を こぼしてしまった。", romaji: "Pasokon ni koohii o koboshite shimatta.", meaning: "Aku nggak sengaja numpahin kopi ke laptop." },
              { jp: "お気に入りの服にジュースをこぼしてしまった。", kana: "おきにいり の ふく に じゅーす を こぼしてしまった。", romaji: "Okiniiri no fuku ni juusu o koboshite shimatta.", meaning: "Aku nggak sengaja numpahin jus ke baju kesayanganku." },
              { jp: "車の中でアイスをこぼしてしまった。", kana: "くるま の なか で あいす を こぼしてしまった。", romaji: "Kuruma no naka de aisu o koboshite shimatta.", meaning: "Aku nggak sengaja numpahin es krim di dalam mobil." },
              { jp: "ベッドに水をこぼしてしまった。", kana: "べっど に みず を こぼしてしまった。", romaji: "Beddo ni mizu o koboshite shimatta.", meaning: "Airnya nggak sengaja tumpah ke kasur." },
              { jp: "ソファに醤油をこぼしてしまった。", kana: "そふぁ に しょうゆ を こぼしてしまった。", romaji: "Sofa ni shouyu o koboshite shimatta.", meaning: "Aku nggak sengaja numpahin kecap ke sofa." },
              { jp: "カーペットにワインをこぼしてしまった。", kana: "かーぺっと に わいん を こぼしてしまった。", romaji: "Kaapetto ni wain o koboshite shimatta.", meaning: "Aku nggak sengaja numpahin wine ke karpet." },
              { jp: "緊張してお茶をこぼしてしまった。", kana: "きんちょう して おちゃ を こぼしてしまった。", romaji: "Kinchou shite ocha o koboshite shimatta.", meaning: "Karena gugup, aku malah numpahin teh." },
              { jp: "買ったばかりの弁当を落として、中身をこぼしてしまった。", kana: "かった ばかり の べんとう を おとして、 なかみ を こぼしてしまった。", romaji: "Katta bakari no bentou o otoshite, nakami o koboshite shimatta.", meaning: "Bento yang baru dibeli jatuh, isinya tumpah berantakan deh." },
              { jp: "カバンの中で水筒の水をこぼしてしまった。", kana: "かばん の なか で すいとう の みず を こぼしてしまった。", romaji: "Kaban no naka de suitou no mizu o koboshite shimatta.", meaning: "Air dari botol minum tumpah di dalam tas." },
              { jp: "スマホの上にスープをこぼしてしまった。", kana: "すまほ の うえ に すーぷ を こぼしてしまった。", romaji: "Sumaho no ue ni suupu o koboshite shimatta.", meaning: "Aku nggak sengaja numpahin sup ke atas HP." }
            ]
          }]
        },
        {
          name: "Ichidan",
          examples: [{
            base: "食べる",
            transformed: "食べてしまった",
            kana: "たべる → たべてしまった",
            romaji: "taberu → tabete shimatta",
            meaning: "terlanjur makan / habis dimakan",
            sentences: [
              { jp: "弟のプリンを勝手に食べてしまった。", kana: "おとうと の ぷりん を かって に たべてしまった。", romaji: "Otouto no purin o katte ni tabete shimatta.", meaning: "Aku terlanjur makan puding punya adik tanpa izin." },
              { jp: "ダイエット中なのに、夜中にラーメンを食べてしまった。", kana: "だいえっとちゅう なのに、 よなか に らーめん を たべてしまった。", romaji: "Daiettochuu nanoni, yonaka ni raamen o tabete shimatta.", meaning: "Padahal lagi diet, tapi malah terlanjur makan ramen tengah malam." },
              { jp: "お腹が空いて、お弁当を全部食べてしまった。", kana: "おなか が すいて、 おべんとう を ぜんぶ たべてしまった。", romaji: "Onaka ga suite, obentou o zenbu tabete shimatta.", meaning: "Karena lapar, aku makan habis semua bentonya." },
              { jp: "美味しかったので、友達の分まで食べてしまった。", kana: "おいしかった ので、 ともだち の ぶん まで たべてしまった。", romaji: "Oishikatta node, tomodachi no bun made tabete shimatta.", meaning: "Karena enak, porsi temanku pun terlanjur kumakan." },
              { jp: "賞味期限が切れたパンを食べてしまった。", kana: "しょうみきげん が きれた ぱん を たべてしまった。", romaji: "Shoumikigen ga kireta pan o tabete shimatta.", meaning: "Aku nggak sengaja makan roti yang udah kedaluwarsa." },
              { jp: "ストレスで、甘いものをたくさん食べてしまった。", kana: "すとれす で、 あまい もの を たくさん たべてしまった。", romaji: "Sutoresu de, amai mono o takusan tabete shimatta.", meaning: "Karena stres, aku pelampiasan makan banyak makanan manis." },
              { jp: "晩ご飯の前にお菓子を食べてしまった。", kana: "ばんごはん の まえ に おかし を たべてしまった。", romaji: "Bangohan no mae ni okashi o tabete shimatta.", meaning: "Aku malah terlanjur ngemil sebelum makan malam." },
              { jp: "辛いと知らずに、そのカレーを食べてしまった。", kana: "からい と しらず に、 その かれー を たべてしまった。", romaji: "Karai to shirazu ni, sono karee o tabete shimatta.", meaning: "Tanpa tahu itu pedas, aku terlanjur memakan kari itu." },
              { jp: "昨日買ったアイスをもう食べてしまった。", kana: "きのう かった あいす を もう たべてしまった。", romaji: "Kinou katta aisu o mou tabete shimatta.", meaning: "Es krim yang dibeli kemarin udah keburu kumakan habis." },
              { jp: "映画を見ながら、ポップコーンを全部食べてしまった。", kana: "えいが を みながら、 ぽっぷこーん を ぜんぶ たべてしまった。", romaji: "Eiga o minagara, poppukoon o zenbu tabete shimatta.", meaning: "Asyik nonton film, tahu-tahu popcorn-nya udah habis kumakan." }
            ]
          }]
        },
        {
          name: "Irregular",
          examples: [{
            base: "寝坊する",
            transformed: "寝坊してしまった",
            kana: "ねぼうする → ねぼうしてしまった",
            romaji: "nebou suru → nebou shite shimatta",
            meaning: "kesiangan / ketiduran (kebablasan)",
            sentences: [
              { jp: "アラームをかけ忘れて、寝坊してしまった。", kana: "あらーむ を かけわすれて、 ねぼうしてしまった。", romaji: "Araamu o kakewasurete, nebou shite shimatta.", meaning: "Aku lupa pasang alarm, jadinya kesiangan deh." },
              { jp: "大事な会議の日に寝坊してしまった。", kana: "だいじ な かいぎ の ひ に ねぼうしてしまった。", romaji: "Daiji na kaigi no hi ni nebou shite shimatta.", meaning: "Malah kesiangan di hari rapat penting." },
              { jp: "昨日遅くまでゲームをしていて、寝坊してしまった。", kana: "きのう おそく まで げーむ を していて、 ねぼうしてしまった。", romaji: "Kinou osoku made geemu o shite ite, nebou shite shimatta.", meaning: "Gara-gara main game sampai larut kemarin, jadinya kesiangan." },
              { jp: "疲れていたのか、昼まで寝坊してしまった。", kana: "つかれていた の か、 ひる まで ねぼうしてしまった。", romaji: "Tsukarete ita no ka, hiru made nebou shite shimatta.", meaning: "Mungkin karena kecapekan, aku ketiduran sampai siang." },
              { jp: "デートの約束があったのに、寝坊してしまった。", kana: "でーと の やくそく が あった のに、 ねぼうしてしまった。", romaji: "Deeto no yakusoku ga atta noni, nebou shite shimatta.", meaning: "Padahal ada janji kencan, malah kesiangan." },
              { jp: "目覚ましを止めて、また寝坊してしまった。", kana: "めざまし を とめて、 また ねぼうしてしまった。", romaji: "Mezamashi o tomete, mata nebou shite shimatta.", meaning: "Matiin alarm terus ketiduran lagi deh." },
              { jp: "テストの日に寝坊してしまった。", kana: "てすと の ひ に ねぼうしてしまった。", romaji: "Tesuto no hi ni nebou shite shimatta.", meaning: "Sial, aku kesiangan di hari ujian." },
              { jp: "休みの日だと思って、寝坊してしまった。", kana: "やすみ の ひ だ と おもって、 ねぼうしてしまった。", romaji: "Yasumi no hi da to omotte, nebou shite shimatta.", meaning: "Kirain hari libur, jadinya aku tidur kebablasan." },
              { jp: "冬は寒くて布団から出られず、つい寝坊してしまった。", kana: "ふゆ は さむくて ふとん から でられず、 つい ねぼうしてしまった。", romaji: "Fuyu wa samukute futon kara derarezu, tsui nebou shite shimatta.", meaning: "Musim dingin itu dingin banget bikin malas keluar selimut, tanpa sadar jadi kesiangan." },
              { jp: "飛行機の時間に寝坊してしまった。", kana: "ひこうき の じかん に ねぼうしてしまった。", romaji: "Hikouki no jikan ni nebou shite shimatta.", meaning: "Aku kesiangan pas jadwal penerbangan pesawat." }
            ]
          }]
        }
      ]
    },
	{
      id: "vf-26",
      level: "N4",
      order: 26,
      title: "~てしまいました • Lampau Selesai Sopan",
      summary: "Lampau Selesai Sopan (N4). Ini adalah bentuk formal dari '~てしまった'. Digunakan untuk melaporkan kejadian di masa lalu yang sudah terlanjur terjadi, dilakukan tanpa sengaja, atau menyisakan rasa penyesalan. Sangat umum digunakan saat meminta maaf atau melapor kepada atasan, guru, atau orang yang belum akrab.",
      formulas: [
        { group: "Godan", rule: "Ubah kata kerja ke bentuk Te (て/で), lalu tambah しまいました. Contoh: 落とす → 落としてしまいました." },
        { group: "Ichidan", rule: "Ubah kata kerja ke bentuk Te (て), lalu tambah しまいました. Contoh: 忘れる → 忘れてしまいました." },
        { group: "Irregular", rule: "する → してしまいました, 来る (くる) → 来てしまいました (きてしまいました). Contoh: 遅刻する → 遅刻してしまいました." }
      ],
      groups: [
        {
          name: "Godan",
          examples: [{
            base: "落とす",
            transformed: "落としてしまいました",
            kana: "おとす → おとしてしまいました",
            romaji: "otosu → otoshite shimaimashita",
            meaning: "tidak sengaja menjatuhkan / kehilangan",
            sentences: [
              { jp: "すみません、財布をどこかに落としてしまいました。", kana: "すみません、 さいふ を どこか に おとしてしまいました。", romaji: "Sumimasen, saifu o dokoka ni otoshite shimaimashita.", meaning: "Maaf, dompet saya sepertinya jatuh entah di mana." },
              { jp: "電車の中でスマホを落としてしまいました。", kana: "でんしゃ の なか で すまほ を おとしてしまいました。", romaji: "Densha no naka de sumaho o otoshite shimaimashita.", meaning: "Saya menjatuhkan HP di dalam kereta." },
              { jp: "大切な鍵を落としてしまいました。", kana: "たいせつ な かぎ を おとしてしまいました。", romaji: "Taisetsu na kagi o otoshite shimaimashita.", meaning: "Saya menjatuhkan kunci yang penting." },
              { jp: "道でクレジットカードを落としてしまいました。", kana: "みち で くれじっとかーど を おとしてしまいました。", romaji: "Michi de kurejitto kaado o otoshite shimaimashita.", meaning: "Saya tidak sengaja menjatuhkan kartu kredit di jalan." },
              { jp: "走っていたら、カバンからペンを落としてしまいました。", kana: "はしっていたら、 かばん から ぺん を おとしてしまいました。", romaji: "Hashitte itara, kaban kara pen o otoshite shimaimashita.", meaning: "Saat berlari, pulpen saya jatuh dari tas." },
              { jp: "駅で切符を落としてしまいました。", kana: "えき で きっぷ を おとしてしまいました。", romaji: "Eki de kippu o otoshite shimaimashita.", meaning: "Saya menjatuhkan tiket di stasiun." },
              { jp: "ポケットから小銭を落としてしまいました。", kana: "ぽけっと から こぜに を おとしてしまいました。", romaji: "Poketto kara kozeni o otoshite shimaimashita.", meaning: "Uang receh saya jatuh dari saku." },
              { jp: "海に指輪を落としてしまいました。", kana: "うみ に ゆびわ を おとしてしまいました。", romaji: "Umi ni yubiwa o otoshite shimaimashita.", meaning: "Saya tidak sengaja menjatuhkan cincin ke laut." },
              { jp: "水たまりにハンカチを落としてしまいました。", kana: "みずたまり に はんかち を おとしてしまいました。", romaji: "Mizutamari ni hankachi o otoshite shimaimashita.", meaning: "Saya menjatuhkan saputangan ke genangan air." },
              { jp: "会社の前で社員証を落としてしまいました。", kana: "かいしゃ の まえ で しゃいんしょう を おとしてしまいました。", romaji: "Kaisha no mae de shainshou o otoshite shimaimashita.", meaning: "Saya menjatuhkan kartu ID pegawai di depan kantor." }
            ]
          }]
        },
        {
          name: "Ichidan",
          examples: [{
            base: "忘れる",
            transformed: "忘れてしまいました",
            kana: "わすれる → わすれてしまいました",
            romaji: "wasureru → wasurete shimaimashita",
            meaning: "benar-benar lupa / kelupaan",
            sentences: [
              { jp: "先生、宿題を家に忘れてしまいました。", kana: "せんせい、 しゅくだい を いえ に わすれてしまいました。", romaji: "Sensei, shukudai o ie ni wasurete shimaimashita.", meaning: "Guru, saya lupa membawa PR dari rumah (tertinggal)." },
              { jp: "彼の名前を完全に忘れてしまいました。", kana: "かれ の なまえ を かんぜん に わすれてしまいました。", romaji: "Kare no namae o kanzen ni wasurete shimaimashita.", meaning: "Saya benar-benar lupa siapa namanya." },
              { jp: "会議の時間を忘れてしまいました。", kana: "かいぎ の じかん を わすれてしまいました。", romaji: "Kaigi no jikan o wasurete shimaimashita.", meaning: "Saya lupa waktu rapatnya." },
              { jp: "約束をすっかり忘れてしまいました。", kana: "やくそく を すっかり わすれてしまいました。", romaji: "Yakusoku o sukkari wasurete shimaimashita.", meaning: "Saya benar-benar lupa tentang janji itu." },
              { jp: "パソコンのパスワードを忘れてしまいました。", kana: "ぱそこん の ぱすわーど を わすれてしまいました。", romaji: "Pasokon no pasuwaado o wasurete shimaimashita.", meaning: "Saya lupa kata sandi komputernya." },
              { jp: "電車の中に傘を忘れてしまいました。", kana: "でんしゃ の なか に かさ を わすれてしまいました。", romaji: "Densha no naka ni kasa o wasurete shimaimashita.", meaning: "Saya kelupaan payung di dalam kereta." },
              { jp: "スーパーで買うべきものを忘れてしまいました。", kana: "すーぱー で かう べき もの を わすれてしまいました。", romaji: "Suupaa de kau beki mono o wasurete shimaimashita.", meaning: "Saya lupa barang apa yang harusnya dibeli di supermarket." },
              { jp: "急いでいて、財布を忘れてしまいました。", kana: "いそいで いて、 さいふ を わすれてしまいました。", romaji: "Isoide ite, saifu o wasurete shimaimashita.", meaning: "Karena buru-buru, saya lupa membawa dompet." },
              { jp: "大切な記念日を忘れてしまいました。", kana: "たいせつ な きねんび を わすれてしまいました。", romaji: "Taisetsu na kinenbi o wasurete shimaimashita.", meaning: "Saya melupakan hari jadi yang penting itu." },
              { jp: "先生に言われたことを忘れてしまいました。", kana: "せんせい に いわれた こと を わすれてしまいました。", romaji: "Sensei ni iwareta koto o wasurete shimaimashita.", meaning: "Saya lupa apa yang dikatakan oleh guru tadi." }
            ]
          }]
        },
        {
          name: "Irregular",
          examples: [{
            base: "遅刻する",
            transformed: "遅刻してしまいました",
            kana: "ちこくする → ちこくしてしまいました",
            romaji: "chikoku suru → chikoku shite shimaimashita",
            meaning: "telah terlambat / terlanjur telat",
            sentences: [
              { jp: "寝坊して、学校に遅刻してしまいました。", kana: "ねぼう して、 がっこう に ちこくしてしまいました。", romaji: "Nebou shite, gakkou ni chikoku shite shimaimashita.", meaning: "Karena kesiangan, saya terlambat ke sekolah." },
              { jp: "電車が遅れて、会社に遅刻してしまいました。", kana: "でんしゃ が おくれて、 かいしゃ に ちこくしてしまいました。", romaji: "Densha ga okurete, kaisha ni chikoku shite shimaimashita.", meaning: "Karena kereta terlambat, saya jadi telat ke kantor." },
              { jp: "渋滞のせいで、会議に遅刻してしまいました。", kana: "じゅうたい の せい で、 かいぎ に ちこくしてしまいました。", romaji: "Juutai no sei de, kaigi ni chikoku shite shimaimashita.", meaning: "Gara-gara macet, saya terlambat ikut rapat." },
              { jp: "道に迷って、面接に遅刻してしまいました。", kana: "みち に まよって、 めんせつ に ちこくしてしまいました。", romaji: "Michi ni mayotte, mensetsu ni chikoku shite shimaimashita.", meaning: "Karena tersesat, saya terlambat datang wawancara." },
              { jp: "アラームが鳴らなくて、遅刻してしまいました。", kana: "あらーむ が ならなくて、 ちこくしてしまいました。", romaji: "Araamu ga naranakute, chikoku shite shimaimashita.", meaning: "Alarmnya tidak berbunyi, sehingga saya jadi terlambat." },
              { jp: "準備に時間がかかって、遅刻してしまいました。", kana: "じゅんび に じかん が かかって、 ちこくしてしまいました。", romaji: "Junbi ni jikan ga kakatte, chikoku shite shimaimashita.", meaning: "Persiapannya memakan waktu, jadi saya terlambat." },
              { jp: "大雪でバスが来なくて、遅刻してしまいました。", kana: "おおゆき で ばす が こなくて、 ちこくしてしまいました。", romaji: "Ooyuki de basu ga konakute, chikoku shite shimaimashita.", meaning: "Karena salju lebat busnya tidak datang, jadi saya telat." },
              { jp: "約束の時間に10分遅刻してしまいました。", kana: "やくそく の じかん に じゅっぷん ちこくしてしまいました。", romaji: "Yakusoku no jikan ni juppun chikoku shite shimaimashita.", meaning: "Saya terlambat 10 menit dari waktu yang dijanjikan." },
              { jp: "すみません、寝坊で遅刻してしまいました。", kana: "すみません、 ねぼう で ちこくしてしまいました。", romaji: "Sumimasen, nebou de chikoku shite shimaimashita.", meaning: "Maaf, saya kesiangan jadi terlambat." },
              { jp: "事故の影響で、少し遅刻してしまいました。", kana: "じこ の えいきょう で、 すこし ちこくしてしまいました。", romaji: "Jiko no eikyou de, sukoshi chikoku shite shimaimashita.", meaning: "Karena dampak kecelakaan, saya terlambat sedikit." }
            ]
          }]
        }
      ]
    },
	{
      id: "vf-27",
      level: "N4",
      order: 27,
      title: "~ちゃう / ~じゃう • Versi Santai Shimau",
      summary: "Versi Santai Shimau (N4). Ini adalah singkatan kasual dari '~てしまう' yang sangat sering dipakai dalam percakapan sehari-hari. Nuansanya sama: menunjukkan sesuatu yang terlanjur terjadi, selesai total, atau dilakukan tanpa sengaja (kebablasan).",
      formulas: [
        { group: "Godan", rule: "Jika bentuk Te berakhiran 'て', ganti dengan 'ちゃう' (例: 買って → 買っちゃう). Jika berakhiran 'で', ganti dengan 'じゃう' (例: 飲んで → 飲んじゃう)." },
        { group: "Ichidan", rule: "Ubah bentuk Te (て), ganti dengan ちゃう. Contoh: 見て → 見ちゃう, 食べて → 食べちゃう." },
        { group: "Irregular", rule: "して → しちゃう, きて → きちゃう. Contoh: 心配して → 心配しちゃう." }
      ],
      groups: [
        {
          name: "Godan",
          examples: [{
            base: "使う",
            transformed: "使っちゃう",
            kana: "つかう → つかっちゃう",
            romaji: "tsukau → tsukacchau",
            meaning: "terlanjur pakai / kebablasan menghabiskan",
            sentences: [
              { jp: "給料が入ると、すぐ全部使っちゃう。", kana: "きゅうりょう が はいる と、 すぐ ぜんぶ つかっちゃう。", romaji: "Kyuuryou ga hairu to, sugu zenbu tsukacchau.", meaning: "Kalau gajian cair, langsung habis terpakai semua deh." },
              { jp: "ゲームに課金して、お小遣いを使っちゃう。", kana: "げーむ に かきん して、 おこづかい を つかっちゃう。", romaji: "Geemu ni kakin shite, okozukai o tsukacchau.", meaning: "Uang jajanku habis terpakai buat top-up game." },
              { jp: "休みの日、ついダラダラして時間を使っちゃう。", kana: "やすみ の ひ、 つい だらだら して じかん を つかっちゃう。", romaji: "Yasumi no hi, tsui daradara shite jikan o tsukacchau.", meaning: "Pas hari libur, tahu-tahu waktunya habis terpakai buat bermalas-malasan." },
              { jp: "動画ばかり見て、スマホのデータを使っちゃう。", kana: "どうが ばかり みて、 すまほ の でーた を つかっちゃう。", romaji: "Douga bakari mite, sumaho no deeta o tsukacchau.", meaning: "Karena nonton video terus, kuota HP-ku kebablasan habis." },
              { jp: "料理を作りすぎて、食材を全部使っちゃう。", kana: "りょうり を つくりすぎて、 しょくざい を ぜんぶ つかっちゃう。", romaji: "Ryouri o tsukurisugite, shokuzai o zenbu tsukacchau.", meaning: "Karena masak terlalu banyak, bahan makanannya terpakai habis." },
              { jp: "ストレスがたまると、ネットでお金を使っちゃう。", kana: "すとれす が たまる と、 ねっと で おかね を つかっちゃう。", romaji: "Sutoresu ga tamaru to, netto de okane o tsukacchau.", meaning: "Kalau lagi stres, aku kebablasan ngabisin uang di internet." },
              { jp: "もったいないけど、タクシーを使っちゃう。", kana: "もったいない けど、 たくしー を つかっちゃう。", romaji: "Mottainai kedo, takushii o tsukacchau.", meaning: "Sayang uangnya sih, tapi aku terlanjur milih pakai taksi." },
              { jp: "体力がなくて、すぐ全部のエネルギーを使っちゃう。", kana: "たいりょく が なくて、 すぐ ぜんぶ の えねるぎー を つかっちゃう。", romaji: "Tairyoku ga nakute, sugu zenbu no enerugii o tsukacchau.", meaning: "Karena staminaku jelek, energiku cepat habis terpakai." },
              { jp: "新しいペンを買うと、すぐ使っちゃう。", kana: "あたらしい ぺん を かう と、 すぐ つかっちゃう。", romaji: "Atarashii pen o kau to, sugu tsukacchau.", meaning: "Kalau beli pulpen baru, bawaannya pengen langsung kupakai." },
              { jp: "今月の予算をもう使っちゃう。", kana: "こんげつ の よさん を もう つかっちゃう。", romaji: "Kongetsu no yosan o mou tsukacchau.", meaning: "Anggaran bulan ini udah kebablasan kepakai semua." }
            ]
          }]
        },
        {
          name: "Ichidan",
          examples: [{
            base: "見る",
            transformed: "見ちゃう",
            kana: "みる → みちゃう",
            romaji: "miru → michau",
            meaning: "kebablasan nonton / nggak sengaja lihat",
            sentences: [
              { jp: "面白いアニメがあると、夜遅くまで見ちゃう。", kana: "おもしろい あにめ が ある と、 よる おそく まで みちゃう。", romaji: "Omoshiroi anime ga aru to, yoru osoku made michau.", meaning: "Kalau ada anime seru, kebablasan nonton sampai larut malam." },
              { jp: "テスト前なのに、ついYouTubeを見ちゃう。", kana: "てすと まえ なのに、 つい ゆーちゅーぶ を みちゃう。", romaji: "Tesuto mae nanoni, tsui yuuchuubu o michau.", meaning: "Padahal mau ujian, tapi malah kebablasan nonton YouTube." },
              { jp: "スマホが鳴ると、すぐ画面を見ちゃう。", kana: "すまほ が なる と、 すぐ がめん を みちゃう。", romaji: "Sumaho ga naru to, sugu gamen o michau.", meaning: "Kalau HP bunyi, tanpa sadar langsung ngelihat layarnya." },
              { jp: "可愛い猫の動画をずっと見ちゃう。", kana: "かわいい ねこ の どうが を ずっと みちゃう。", romaji: "Kawaii neko no douga o zutto michau.", meaning: "Kebablasan nonton video kucing lucu terus-terusan." },
              { jp: "人のスマホの画面を、つい見ちゃう。", kana: "ひと の すまほ の がめん を、 つい みちゃう。", romaji: "Hito no sumaho no gamen o, tsui michau.", meaning: "Tanpa sadar aku nggak sengaja lihat layar HP orang lain." },
              { jp: "怖い話は苦手なのに、つい見ちゃう。", kana: "こわい はなし は にがて なのに、 つい みちゃう。", romaji: "Kowai hanashi wa nigate nanoni, tsui michau.", meaning: "Padahal nggak suka cerita seram, tapi malah kebablasan ngelihat." },
              { jp: "好きな人のSNSを毎日見ちゃう。", kana: "すきな ひと の えすえぬえす を まいにち みちゃう。", romaji: "Sukina hito no esuenuesu o mainichi michau.", meaning: "Bawaannya pengen lihat medsos orang yang disuka setiap hari deh." },
              { jp: "鏡があると、つい自分の髪型を見ちゃう。", kana: "かがみ が ある と、 つい じぶん の かみがた を みちゃう。", romaji: "Kagami ga aru to, tsui jibun no kamigata o michau.", meaning: "Kalau ada cermin, tanpa sadar selalu ngelihatin gaya rambut sendiri." },
              { jp: "昔の写真を見つけると、懐かしくて見ちゃう。", kana: "むかし の しゃしん を みつける と、 なつかしくて みちゃう。", romaji: "Mukashi no shashin o mitsukeru to, natsukashikute michau.", meaning: "Kalau nemu foto lama, karena kangen jadi keasyikan ngelihatin." },
              { jp: "事故があると、気になって見ちゃう。", kana: "じこ が ある と、 き に なって みちゃう。", romaji: "Jiko ga aru to, ki ni natte michau.", meaning: "Kalau ada kecelakaan, karena penasaran jadinya ngelihatin." }
            ]
          }]
        },
        {
          name: "Irregular",
          examples: [{
            base: "心配する",
            transformed: "心配しちゃう",
            kana: "しんぱいする → しんぱいしちゃう",
            romaji: "shinpai suru → shinpai shichau",
            meaning: "terlanjur khawatir / jadi kepikiran",
            sentences: [
              { jp: "彼氏から連絡がないと、心配しちゃう。", kana: "かれし から れんらく が ない と、 しんぱいしちゃう。", romaji: "Kareshi kara renraku ga nai to, shinpai shichau.", meaning: "Kalau nggak ada kabar dari pacar, aku jadi khawatir deh." },
              { jp: "子供が遅く帰ると、親は心配しちゃうよ。", kana: "こども が おそく かえる と、 おや は しんぱいしちゃう よ。", romaji: "Kodomo ga osoku kaeru to, oya wa shinpai shichau yo.", meaning: "Kalau anak pulang telat, orang tua pasti jadi kepikiran lho." },
              { jp: "友達が元気ないと、つい心配しちゃう。", kana: "ともだち が げんき ない と、 つい しんぱいしちゃう。", romaji: "Tomodachi ga genki nai to, tsui shinpai shichau.", meaning: "Kalau teman kelihatan murung, tanpa sadar aku jadi khawatir." },
              { jp: "初めての海外旅行だから、色々と心配しちゃう。", kana: "はじめて の かいがい りょこう だから、 いろいろ と しんぱいしちゃう。", romaji: "Hajimete no kaigai ryokou dakara, iroiro to shinpai shichau.", meaning: "Karena ini liburan ke luar negeri pertama, aku jadi kepikiran macam-macam." },
              { jp: "明日のプレゼン、うまくいくか心配しちゃう。", kana: "あした の ぷれぜん、 うまく いく か しんぱいしちゃう。", romaji: "Ashita no purezen, umaku iku ka shinpai shichau.", meaning: "Aku jadi kepikiran presentasi besok bakal lancar atau nggak." },
              { jp: "ニュースを見ると、将来のことが心配しちゃう。", kana: "にゅーす を みる と、 しょうらい の こと が しんぱいしちゃう。", romaji: "Nyuusu o miru to, shourai no koto ga shinpai shichau.", meaning: "Kalau nonton berita, aku jadi khawatir memikirkan masa depan." },
              { jp: "少しお腹が痛いだけで、重い病気じゃないかと心配しちゃう。", kana: "すこし おなか が いたい だけ で、 おもい びょうき じゃない か と しんぱいしちゃう。", romaji: "Sukoshi onaka ga itai dake de, omoi byouki janai ka to shinpai shichau.", meaning: "Sakit perut dikit aja, aku langsung parno (khawatir) jangan-jangan penyakit berat." },
              { jp: "ペットがご飯を食べないと、心配しちゃう。", kana: "ぺっと が ごはん を たべない と、 しんぱいしちゃう。", romaji: "Petto ga gohan o tabenai to, shinpai shichau.", meaning: "Kalau peliharaan nggak mau makan, aku jadi khawatir deh." },
              { jp: "テストの結果がどうなるか心配しちゃう。", kana: "てすと の けっか が どう なる か しんぱいしちゃう。", romaji: "Tesuto no kekka ga dou naru ka shinpai shichau.", meaning: "Aku jadi kepikiran bakal gimana ya hasil ujiannya nanti." },
              { jp: "親が年を取っていくと、健康を心配しちゃう。", kana: "おや が とし を とって いく と、 けんこう を しんぱいしちゃう。", romaji: "Oya ga toshi o totte iku to, kenkou o shinpai shichau.", meaning: "Seiring bertambahnya usia orang tua, aku jadi mengkhawatirkan kesehatan mereka." }
            ]
          }]
        }
      ]
    },
    {
      id: "vf-28",
      level: "N4",
      order: 28,
      title: "~ちゃいます / ~じゃいます • Versi Santai Sopan Shimau",
      summary: "Versi Santai Sopan Shimau (N4). Bentuk formal-santai dari '~てしまいます'. Digunakan saat berbicara dengan rekan kerja atau orang yang tidak terlalu dekat, tapi suasananya kasual/tidak kaku. Nuansanya tetap sama: sesuatu yang terlanjur terjadi atau kebablasan.",
      formulas: [
        { group: "Godan", rule: "Jika bentuk Te berakhiran 'て', ganti dengan 'ちゃいます'. Jika berakhiran 'で', ganti dengan 'じゃいます' (例: 飲んで → 飲んじゃいます)." },
        { group: "Ichidan", rule: "Ubah bentuk Te (て), ganti dengan ちゃいます. Contoh: 寝て → 寝ちゃいます." },
        { group: "Irregular", rule: "して → しちゃいます, きて → きちゃいます. Contoh: 緊張して → 緊張しちゃいます." }
      ],
      groups: [
        {
          name: "Godan",
          examples: [{
            base: "笑う",
            transformed: "笑っちゃいます",
            kana: "わらう → わらっちゃいます",
            romaji: "warau → waracchaimasu",
            meaning: "nggak sadar tertawa / ketawa deh",
            sentences: [
              { jp: "その話、面白くてつい笑っちゃいます。", kana: "その はなし、 おもしろくて つい わらっちゃいます。", romaji: "Sono hanashi, omoshirokute tsui waracchaimasu.", meaning: "Ceritanya lucu, saya tanpa sadar jadi ketawa deh." },
              { jp: "彼の冗談を聞くと、いつも笑っちゃいます。", kana: "かれ の じょうだん を きく と、 いつも わらっちゃいます。", romaji: "Kare no joudan o kiku to, itsumo waracchaimasu.", meaning: "Kalau dengar candaannya dia, saya selalu kebablasan ketawa." },
              { jp: "赤ちゃんの顔を見ると、可愛くて笑っちゃいます。", kana: "あかちゃん の かお を みる と、 かわいくて わらっちゃいます。", romaji: "Akachan no kao o miru to, kawaikute waracchaimasu.", meaning: "Melihat wajah bayi itu lucu banget, saya jadi tertawa sendiri." },
              { jp: "昔の自分の写真を見ると、変で笑っちゃいます。", kana: "むかし の じぶん の しゃしん を みる と、 へん で わらっちゃいます。", romaji: "Mukashi no jibun no shashin o miru to, hen de waracchaimasu.", meaning: "Kalau lihat foto jadul saya sendiri, rasanya aneh dan bikin ketawa." },
              { jp: "コメディ映画を見ると、大声で笑っちゃいます。", kana: "こめでぃ えいが を みる と、 おおごえ で わらっちゃいます。", romaji: "Komedi eiga o miru to, oogoe de waracchaimasu.", meaning: "Kalau nonton film komedi, saya pasti ketawa ngakak deh." },
              { jp: "あの二人の会話を聞いていると、笑っちゃいます。", kana: "あの ふたり の かいわ を きいて いる と、 わらっちゃいます。", romaji: "Ano futari no kaiwa o kiite iru to, waracchaimasu.", meaning: "Mendengar obrolan mereka berdua, bikin saya ketawa." },
              { jp: "失敗したときは、恥ずかしくて笑っちゃいます。", kana: "しっぱい した とき は、 はずかしくて わらっちゃいます。", romaji: "Shippai shita toki wa, hazukashikute waracchaimasu.", meaning: "Saat melakukan kesalahan, karena malu rasanya malah pengen ketawa." },
              { jp: "ペットの猫の行動が面白くて、笑っちゃいます。", kana: "ぺっと の ねこ の こうどう が おもしろくて、 わらっちゃいます。", romaji: "Petto no neko no koudou ga omoshirokute, waracchaimasu.", meaning: "Tingkah laku kucing peliharaan saya lucu, bikin saya ketawa." },
              { jp: "先生のモノマネが似すぎていて、笑っちゃいます。", kana: "せんせい の ものまね が にすぎて いて、 わらっちゃいます。", romaji: "Sensei no monomane ga nisugite ite, waracchaimasu.", meaning: "Tiruan gayanya guru itu mirip banget, saya sampai ketawa deh." },
              { jp: "思い出し笑いをして、一人で笑っちゃいます。", kana: "おもいだしわらい を して、 ひとり で わらっちゃいます。", romaji: "Omoidashiwarai o shite, hitori de waracchaimasu.", meaning: "Teringat hal lucu, saya jadi senyum-senyum ketawa sendiri." }
            ]
          }]
        },
        {
          name: "Ichidan",
          examples: [{
            base: "寝る",
            transformed: "寝ちゃいます",
            kana: "ねる → ねちゃいます",
            romaji: "neru → nechaimasu",
            meaning: "ketiduran deh",
            sentences: [
              { jp: "疲れていると、帰りの電車で寝ちゃいます。", kana: "つかれている と、 かえり の でんしゃ で ねちゃいます。", romaji: "Tsukarete iru to, kaeri no densha de nechaimasu.", meaning: "Kalau sedang capek, saya sering ketiduran di kereta pas pulang." },
              { jp: "お腹がいっぱいになると、すぐ寝ちゃいます。", kana: "おなか が いっぱい に なる と、 すぐ ねちゃいます。", romaji: "Onaka ga ippai ni naru to, sugu nechaimasu.", meaning: "Kalau perut sudah kenyang, saya gampang ketiduran deh." },
              { jp: "テレビを見ながら、よくソファで寝ちゃいます。", kana: "てれび を みながら、 よく そふぁ で ねちゃいます。", romaji: "Terebi o minagara, yoku sofa de nechaimasu.", meaning: "Sambil nonton TV, saya sering ketiduran di sofa." },
              { jp: "本を読んでいると、いつの間にか寝ちゃいます。", kana: "ほん を よんでいる と、 いつのまにか ねちゃいます。", romaji: "Hon o yonde iru to, itsunomanika nechaimasu.", meaning: "Pas lagi baca buku, tahu-tahu saya sudah ketiduran." },
              { jp: "会議が長いと、退屈で寝ちゃいます。", kana: "かいぎ が ながい と、 たいくつ で ねちゃいます。", romaji: "Kaigi ga nagai to, taikutsu de nechaimasu.", meaning: "Kalau rapatnya panjang, karena bosan rasanya mau ketiduran." },
              { jp: "静かなクラシックを聴くと、リラックスして寝ちゃいます。", kana: "しずかな くらしっく を きく と、 りらっくす して ねちゃいます。", romaji: "Shizukana kurashikku o kiku to, rirakkusu shite nechaimasu.", meaning: "Kalau dengar musik klasik yang tenang, saya rileks dan ketiduran." },
              { jp: "マッサージを受けると、気持ちよくて寝ちゃいます。", kana: "まっさーじ を うける と、 きもちよくて ねちゃいます。", romaji: "Massaaji o ukeru to, kimochiyokute nechaimasu.", meaning: "Dipijat itu rasanya enak banget sampai saya ketiduran." },
              { jp: "雨の音を聞いていると、つい寝ちゃいます。", kana: "あめ の おと を きいて いる と、 つい ねちゃいます。", romaji: "Ame no oto o kiite iru to, tsui nechaimasu.", meaning: "Mendengar suara hujan, tanpa sadar saya malah ketiduran." },
              { jp: "休みの日は、お昼まで寝ちゃいます。", kana: "やすみ の ひ は、 おひる まで ねちゃいます。", romaji: "Yasumi no hi wa, ohiru made nechaimasu.", meaning: "Kalau hari libur, saya ketiduran (bablas) sampai siang." },
              { jp: "スマホをいじりながら寝ちゃいます。", kana: "すまほ を いじりながら ねちゃいます。", romaji: "Sumaho o ijirinagara nechaimasu.", meaning: "Saya sering ketiduran sambil main HP." }
            ]
          }]
        },
        {
          name: "Irregular",
          examples: [{
            base: "緊張する",
            transformed: "緊張しちゃいます",
            kana: "きんちょうする → きんちょうしちゃいます",
            romaji: "kinchou suru → kinchou shichaimasu",
            meaning: "jadi gugup deh",
            sentences: [
              { jp: "大勢の人の前で話すのは、緊張しちゃいます。", kana: "おおぜい の ひと の まえ で はなす の は、 きんちょうしちゃいます。", romaji: "Oozei no hito no mae de hanasu no wa, kinchou shichaimasu.", meaning: "Berbicara di depan banyak orang itu bikin saya jadi gugup deh." },
              { jp: "好きな人と話すときは、いつも緊張しちゃいます。", kana: "すきな ひと と はなす とき は、 いつも きんちょうしちゃいます。", romaji: "Sukina hito to hanasu toki wa, itsumo kinchou shichaimasu.", meaning: "Kalau ngobrol sama orang yang disuka, saya selalu jadi gugup." },
              { jp: "面接の前は、どうしても緊張しちゃいます。", kana: "めんせつ の まえ は、 どうしても きんちょうしちゃいます。", romaji: "Mensetsu no mae wa, doushitemo kinchou shichaimasu.", meaning: "Sebelum wawancara, mau bagaimana pun saya pasti jadi gugup." },
              { jp: "初めての場所に行くと、少し緊張しちゃいます。", kana: "はじめて の ばしょ に いく と、 すこし きんちょうしちゃいます。", romaji: "Hajimete no basho ni iku to, sukoshi kinchou shichaimasu.", meaning: "Kalau pergi ke tempat yang baru pertama kali, saya sedikit gugup." },
              { jp: "テストが始まるとき、とても緊張しちゃいます。", kana: "てすと が はじまる とき、 とても きんちょうしちゃいます。", romaji: "Tesuto ga hajimaru toki, totemo kinchou shichaimasu.", meaning: "Saat ujian mulai, saya jadi deg-degan dan gugup banget." },
              { jp: "社長と話すときは、やっぱり緊張しちゃいます。", kana: "しゃちょう と はなす とき は、 やっぱり きんちょうしちゃいます。", romaji: "Shachou to hanasu toki wa, yappari kinchou shichaimasu.", meaning: "Ngobrol sama direktur, bagaimanapun juga tetap bikin gugup deh." },
              { jp: "カメラを向けられると、緊張しちゃいます。", kana: "かめら を むけられる と、 きんちょうしちゃいます。", romaji: "Kamera o mukerareru to, kinchou shichaimasu.", meaning: "Kalau diarahkan kamera, saya jadi gugup." },
              { jp: "知らない人に話しかけられると、緊張しちゃいます。", kana: "しらない ひと に はなしかけられる と、 きんちょうしちゃいます。", romaji: "Shiranai hito ni hanashikakerareru to, kinchou shichaimasu.", meaning: "Kalau diajak ngobrol sama orang tidak dikenal, saya jadi gugup." },
              { jp: "英語で道を聞かれて、緊張しちゃいます。", kana: "えいご で みち を きかれて、 きんちょうしちゃいます。", romaji: "Eigo de michi o kikarete, kinchou shichaimasu.", meaning: "Ditanya jalan pakai bahasa Inggris, saya jadi gugup deh." },
              { jp: "発表の順番が近づくと、だんだん緊張しちゃいます。", kana: "はっぴょう の じゅんばん が ちかづく と、 だんだん きんちょうしちゃいます。", romaji: "Happyou no junban ga chikazuku to, dandan kinchou shichaimasu.", meaning: "Makin dekat giliran presentasi, saya makin merasa gugup." }
            ]
          }]
        }
      ]
    },
	{
      id: "vf-29",
      level: "N4",
      order: 29,
      title: "~ちゃった / ~じゃった • Lampau Santai Shimau",
      summary: "Lampau Santai Shimau (N4). Ini adalah bentuk lampau dari '~ちゃう'. Sangat sering digunakan antar teman untuk menceritakan sesuatu yang sudah terlanjur terjadi, dilakukan tanpa sengaja, atau sebuah penyesalan (Contoh: 'Yah, ketiduran deh', 'Keceplosan nih').",
      formulas: [
        { group: "Godan", rule: "Jika bentuk Te berakhiran 'て', ganti dengan 'ちゃった'. Jika berakhiran 'で', ganti dengan 'じゃった' (例: 飲んで → 飲んじゃった)." },
        { group: "Ichidan", rule: "Ubah bentuk Te (て), ganti dengan ちゃった. Contoh: 忘れて → 忘れちゃった." },
        { group: "Irregular", rule: "して → しちゃった, きて → きちゃった. Contoh: 遅刻して → 遅刻しちゃった." }
      ],
      groups: [
        {
          name: "Godan",
          examples: [{
            base: "言う",
            transformed: "言っちゃった",
            kana: "いう → いっっちゃった",
            romaji: "iu → icchatta",
            meaning: "keceplosan ngomong / terlanjur bilang",
            sentences: [
              { jp: "あ、ごめん、秘密を言っちゃった。", kana: "あ、 ごめん、 ひみつ を いっっちゃった。", romaji: "A, gomen, himitsu o icchatta.", meaning: "Ah, maaf, aku keceplosan bilang rahasianya." },
              { jp: "怒って、つい余計なことを言っちゃった。", kana: "おこって、 つい よけい な こと を いっっちゃった。", romaji: "Okotte, tsui yokei na koto o icchatta.", meaning: "Karena marah, aku tanpa sadar terlanjur ngomong yang nggak perlu." },
              { jp: "本人に直接、文句を言っちゃった。", kana: "ほんにん に ちょくせつ、 もんく を いっっちゃった。", romaji: "Honnin ni chokusetsu, monku o icchatta.", meaning: "Aku terlanjur ngomong keluhannya langsung ke orangnya." },
              { jp: "嘘を言っちゃったけど、どうしよう。", kana: "うそ を いっっちゃった けど、 どう しよう。", romaji: "Uso o icchatta kedo, dou shiyou.", meaning: "Aku terlanjur bohong nih, gimana dong?" },
              { jp: "親にひどいことを言っちゃった。", kana: "おや に ひどい こと を いっっちゃった。", romaji: "Oya ni hidoi koto o icchatta.", meaning: "Aku keceplosan ngomong kasar ke orang tua." },
              { jp: "友達の悪口を言っちゃって、後悔してる。", kana: "ともだち の わるぐち を いっっちゃって、 こうかい してる。", romaji: "Tomodachi no waruguchi o icchate, koukai shiteru.", meaning: "Aku nyesel udah terlanjur jelek-jelekin teman." },
              { jp: "サプライズなのに、うっかり言っちゃった。", kana: "さぷらいず なのに、 うっかり いっっちゃった。", romaji: "Sapuraizu nanoni, ukkari icchatta.", meaning: "Padahal kejutan, tapi aku malah nggak sengaja keceplosan." },
              { jp: "本当の理由を言っちゃった。", kana: "ほんとう の りゆう を いっっちゃった。", romaji: "Hontou no riyuu o icchatta.", meaning: "Aku udah terlanjur bilang alasan yang sebenarnya." },
              { jp: "「嫌い」って言っちゃったけど、本心じゃないよ。", kana: "「きらい」 って いっっちゃった けど、 ほんしん じゃない よ。", romaji: "'Kirai' tte icchatta kedo, honshin janai yo.", meaning: "Aku memang terlanjur bilang 'benci', tapi itu bukan dari hati kok." },
              { jp: "絶対内緒って言われたのに、言っちゃった。", kana: "ぜったい ないしょ って いわれた のに、 いっっちゃった。", romaji: "Zettai naisho tte iwareta noni, icchatta.", meaning: "Padahal dibilangin rahasia mutlak, tapi aku malah keceplosan." }
            ]
          }]
        },
        {
          name: "Ichidan",
          examples: [{
            base: "捨てる",
            transformed: "捨てちゃった",
            kana: "すてる → すてちゃった",
            romaji: "suteru → sutechatta",
            meaning: "nggak sengaja buang / terlanjur dibuang",
            sentences: [
              { jp: "間違えて大事な手紙を捨てちゃった。", kana: "まちがえて だいじ な てがみ を すてちゃった。", romaji: "Machigaete daiji na tegami o sutechatta.", meaning: "Aku nggak sengaja ngebuang surat penting itu." },
              { jp: "まだ使えるのに、古いスマホを捨てちゃった。", kana: "まだ つかえる のに、 ふるい すまほ を すてちゃった。", romaji: "Mada tsukaeru noni, furui sumaho o sutechatta.", meaning: "Padahal masih bisa dipakai, tapi HP lamanya udah terlanjur kubuang." },
              { jp: "必要なレシートを捨てちゃった。", kana: "ひつよう な れしーと を すてちゃった。", romaji: "Hitsuyou na reshiito o sutechatta.", meaning: "Struk yang penting malah nggak sengaja kebuang." },
              { jp: "元カレの写真を全部捨てちゃった。", kana: "もとかれ の しゃしん を ぜんぶ すてちゃった。", romaji: "Motokare no shashin o zenbu sutechatta.", meaning: "Foto mantan udah terlanjur kubuang semua deh." },
              { jp: "期限切れの薬を捨てちゃった。", kana: "きげんぎれ の くすり を すてちゃった。", romaji: "Kigengire no kusuri o sutechatta.", meaning: "Obat yang kedaluwarsa udah aku buang." },
              { jp: "説明書を読まずに捨てちゃった。", kana: "せつめいしょ を よまず に すてちゃった。", romaji: "Setsumeisho o yomazu ni sutechatta.", meaning: "Buku panduannya terlanjur kubuang tanpa dibaca dulu." },
              { jp: "お気に入りだったシャツ、汚れがひどくて捨てちゃった。", kana: "おきにいり だった しゃつ、 よごれ が ひどくて すてちゃった。", romaji: "Okiniiri datta shatsu, yogore ga hidokute sutechatta.", meaning: "Kemeja kesayanganku karena kotor banget akhirnya terlanjur kubuang." },
              { jp: "箱を捨てちゃったから、返品できない。", kana: "はこ を すてちゃった から、 へんぴん できない。", romaji: "Hako o sutechatta kara, henpin dekinai.", meaning: "Karena kardusnya udah terlanjur dibuang, jadinya nggak bisa dikembalikan." },
              { jp: "賞味期限が昨日までだったから、お弁当捨てちゃった。", kana: "しょうみきげん が きのう まで だった から、 おべんとう すてちゃった。", romaji: "Shoumikigen ga kinou made datta kara, obentou sutechatta.", meaning: "Karena masa kedaluwarsanya sampai kemarin, bentonya terlanjur kubuang." },
              { jp: "彼の連絡先、怒った勢いで捨てちゃった。", kana: "かれ の れんらくさき、 おこった いきおい で すてちゃった。", romaji: "Kare no renrakusaki, okotta ikioi de sutechatta.", meaning: "Kontaknya dia terlanjur kuhapus (buang) pas lagi emosi." }
            ]
          }]
        },
        {
          name: "Irregular",
          examples: [{
            base: "喧嘩する",
            transformed: "喧嘩しちゃった",
            kana: "けんかする → けんかしちゃった",
            romaji: "kenka suru → kenka shichatta",
            meaning: "malah berantem / terlanjur berantem",
            sentences: [
              { jp: "昨日、親と喧嘩しちゃった。", kana: "きのう、 おや と けんかしちゃった。", romaji: "Kinou, oya to kenka shichatta.", meaning: "Kemarin aku malah berantem sama orang tua." },
              { jp: "些細なことで友達と喧嘩しちゃった。", kana: "ささい な こと で ともだち と けんかしちゃった。", romaji: "Sasai na koto de tomodachi to kenka shichatta.", meaning: "Malah berantem sama teman gara-gara hal sepele." },
              { jp: "彼氏と喧嘩しちゃって、気まずい。", kana: "かれし と けんかしちゃって、 きまずい。", romaji: "Kareshi to kenka shichatte, kimazui.", meaning: "Aku terlanjur berantem sama pacar, rasanya canggung deh." },
              { jp: "お酒を飲んで、知らない人と喧嘩しちゃった。", kana: "おさけ を のんで、 しらない ひと と けんかしちゃった。", romaji: "Osake o nonde, shiranai hito to kenka shichatta.", meaning: "Habis minum alkohol, aku malah berantem sama orang nggak dikenal." },
              { jp: "ゲームのことで弟と喧嘩しちゃった。", kana: "げーむ の こと で おとうと と けんかしちゃった。", romaji: "Geemu no koto de otouto to kenka shichatta.", meaning: "Aku malah berantem sama adik cowokku gara-gara game." },
              { jp: "言い過ぎて、同僚と喧嘩しちゃった。", kana: "いいすぎて、 どうりょう と けんかしちゃった。", romaji: "Iisugite, douryou to kenka shichatta.", meaning: "Karena ngomongnya kelewatan, aku jadi berantem sama rekan kerja." },
              { jp: "旅行中なのに、彼女と喧嘩しちゃった。", kana: "りょこうちゅう なのに、 かのじょ と けんかしちゃった。", romaji: "Ryokouchuu nanoni, kanojo to kenka shichatta.", meaning: "Padahal lagi liburan, malah berantem sama pacar." },
              { jp: "意見が合わなくて、チームのメンバーと喧嘩しちゃった。", kana: "いけん が あわなくて、 ちーむ の めんばー と けんかしちゃった。", romaji: "Iken ga awanakute, chiimu no menbaa to kenka shichatta.", meaning: "Karena beda pendapat, malah berantem sama anggota tim." },
              { jp: "仲直りしたかったのに、また喧嘩しちゃった。", kana: "なかなおり したかった のに、 また けんかしちゃった。", romaji: "Nakanaori shitakatta noni, mata kenka shichatta.", meaning: "Padahal pengen baikan, tapi malah berantem lagi deh." },
              { jp: "お金のことで家族と喧嘩しちゃった。", kana: "おかね の こと で かぞく と けんかしちゃった。", romaji: "Okane no koto de kazoku to kenka shichatta.", meaning: "Malah berantem sama keluarga gara-gara urusan uang." }
            ]
          }]
        }
      ]
    },
    {
      id: "vf-30",
      level: "N4",
      order: 30,
      title: "~ちゃいました / ~じゃいました • Lampau Santai Sopan Shimau",
      summary: "Lampau Santai Sopan Shimau (N4). Bentuk lampau dari '~ちゃいます'. Digunakan saat melaporkan kesalahan, kelalaian, atau sesuatu yang sudah terlanjur terjadi dengan nuansa sopan tapi tidak kaku (misalnya dengan senior di kampus atau rekan kerja).",
      formulas: [
        { group: "Godan", rule: "Jika bentuk Te berakhiran 'て', ganti dengan 'ちゃいました'. Jika berakhiran 'で', ganti dengan 'じゃいました' (例: 飲んで → 飲んじゃいました)." },
        { group: "Ichidan", rule: "Ubah bentuk Te (て), ganti dengan ちゃいました. Contoh: 間違えて → 間違えちゃいました." },
        { group: "Irregular", rule: "して → しちゃいました, きて → きちゃいました. Contoh: 削除して → 削除しちゃいました." }
      ],
      groups: [
        {
          name: "Godan",
          examples: [{
            base: "飲む",
            transformed: "飲んじゃいました",
            kana: "のむ → のんじゃいました",
            romaji: "nomu → nonjaimashita",
            meaning: "habis saya minum / nggak sengaja terminum",
            sentences: [
              { jp: "すみません、先輩のジュースを飲んじゃいました。", kana: "すみません、 せんぱい の じゅーす を のんじゃいました。", romaji: "Sumimasen, senpai no juusu o nonjaimashita.", meaning: "Maaf, jusnya senior nggak sengaja terminum oleh saya." },
              { jp: "喉が渇いていて、水を全部飲んじゃいました。", kana: "のど が かわいて いて、 みず を ぜんぶ のんじゃいました。", romaji: "Nodo ga kawaite ite, mizu o zenbu nonjaimashita.", meaning: "Karena haus, airnya saya minum habis semua deh." },
              { jp: "昨日は楽しくて、ついお酒をたくさん飲んじゃいました。", kana: "きのう は たのしくて、 つい おさけ を たくさん のんじゃいました。", romaji: "Kinou wa tanoshikute, tsui osake o takusan nonjaimashita.", meaning: "Kemarin karena seru, tanpa sadar saya malah minum alkohol terlalu banyak." },
              { jp: "冷蔵庫にあった牛乳、私が飲んじゃいました。", kana: "れいぞうこ に あった ぎゅうにゅう、 わたし が のんじゃいました。", romaji: "Reizouko ni atta gyuunyuu, watashi ga nonjaimashita.", meaning: "Susu yang ada di kulkas, udah terlanjur saya minum habis." },
              { jp: "甘いコーヒーが好きで、一日で３杯も飲んじゃいました。", kana: "あまい こーひー が すき で、 いちにち で さんばい も のんじゃいました。", romaji: "Amai koohii ga suki de, ichinichi de sanbai mo nonjaimashita.", meaning: "Karena suka kopi manis, saya bablas meminum sampai 3 gelas dalam sehari." },
              { jp: "風邪薬と一緒に、お茶を飲んじゃいました。", kana: "かぜぐすり と いっしょ に、 おちゃ を のんじゃいました。", romaji: "Kazegusuri to issho ni, ocha o nonjaimashita.", meaning: "Saya malah nggak sengaja minum teh bareng obat flu." },
              { jp: "賞味期限が切れていると知らずに飲んじゃいました。", kana: "しょうみきげん が きれている と しらず に のんじゃいました。", romaji: "Shoumikigen ga kirete iru to shirazu ni nonjaimashita.", meaning: "Saya terlanjur meminumnya tanpa tahu kalau itu sudah kedaluwarsa." },
              { jp: "夜中にエナジードリンクを飲んじゃいました。", kana: "よなか に えなじーどりんく を のんじゃいました。", romaji: "Yonaka ni enajii dorinku o nonjaimashita.", meaning: "Tengah malam saya malah kebablasan minum minuman berenergi." },
              { jp: "美味しいスープだったので、最後まで飲んじゃいました。", kana: "おいしい すーぷ だった ので、 さいご まで のんじゃいました。", romaji: "Oishii suupu datta node, saigo made nonjaimashita.", meaning: "Karena supnya enak, saya minum habis sampai tetes terakhir." },
              { jp: "自分のグラスと間違えて、他の人のを飲んじゃいました。", kana: "じぶん の ぐらす と まちがえて、 ほか の ひと の を のんじゃいました。", romaji: "Jibun no gurasu to machigaete, hoka no hito no o nonjaimashita.", meaning: "Salah kira itu gelas saya, saya malah nggak sengaja terminum milik orang lain." }
            ]
          }]
        },
        {
          name: "Ichidan",
          examples: [{
            base: "間違える",
            transformed: "間違えちゃいました",
            kana: "まちがえる → まちがえちゃいました",
            romaji: "machigaeru → machigaechaimashita",
            meaning: "nggak sengaja keliru / salah deh",
            sentences: [
              { jp: "すみません、宛先を間違えちゃいました。", kana: "すみません、 あてさき を まちがえちゃいました。", romaji: "Sumimasen, atesaki o machigaechaimashita.", meaning: "Maaf, saya tidak sengaja salah menulis alamat tujuannya." },
              { jp: "乗る電車を間違えちゃいました。", kana: "のる でんしゃ を まちがえちゃいました。", romaji: "Noru densha o machigaechaimashita.", meaning: "Saya salah naik kereta deh." },
              { jp: "テストの答えをひとつ間違えちゃいました。", kana: "てすと の こたえ を ひとつ まちがえちゃいました。", romaji: "Tesuto no kotae o hitotsu machigaechaimashita.", meaning: "Saya melakukan kesalahan di satu jawaban ujian deh." },
              { jp: "約束の時間を1時間間違えちゃいました。", kana: "やくそく の じかん を いちじかん まちがえちゃいました。", romaji: "Yakusoku no jikan o ichijikan machigaechaimashita.", meaning: "Saya keliru waktu janjiannya 1 jam deh." },
              { jp: "違うファイルを開いて、間違えちゃいました。", kana: "ちがう ふぁいる を ひらいて、 まちがえちゃいました。", romaji: "Chigau fairu o hiraite, machigaechaimashita.", meaning: "Saya membuka file yang salah, malah jadi keliru deh." },
              { jp: "塩と砂糖を間違えちゃいました。", kana: "しお と さとう を まちがえちゃいました。", romaji: "Shio to satou o machigaechaimashita.", meaning: "Saya nggak sengaja salah memasukkan garam dan gula." },
              { jp: "人の名前を間違えちゃいました。", kana: "ひと の なまえ を まちがえちゃいました。", romaji: "Hito no namae o machigaechaimashita.", meaning: "Saya tidak sengaja salah memanggil nama orang." },
              { jp: "買うサイズを間違えちゃいました。", kana: "かう さいず を まちがえちゃいました。", romaji: "Kau saizu o machigaechaimashita.", meaning: "Saya salah ukuran waktu beli deh." },
              { jp: "メールを送る相手を間違えちゃいました。", kana: "めーる を おくる あいて を まちがえちゃいました。", romaji: "Meeru o okuru aite o machigaechaimashita.", meaning: "Saya tidak sengaja salah orang saat mengirim email." },
              { jp: "道に迷って、曲がる角を間違えちゃいました。", kana: "みち に まよって、 まがる かど を まちがえちゃいました。", romaji: "Michi ni mayotte, magaru kado o machigaechaimashita.", meaning: "Karena tersesat, saya salah belokan deh." }
            ]
          }]
        },
        {
          name: "Irregular",
          examples: [{
            base: "削除する",
            transformed: "削除しちゃいました",
            kana: "さくじょする → さくじょしちゃいました",
            romaji: "sakujo suru → sakujo shichaimashita",
            meaning: "nggak sengaja menghapus",
            sentences: [
              { jp: "間違えて大切なメールを削除しちゃいました。", kana: "まちがえて たいせつ な めーる を さくじょしちゃいました。", romaji: "Machigaete taisetsu na meeru o sakujo shichaimashita.", meaning: "Saya tidak sengaja menghapus email yang penting." },
              { jp: "会議の資料をうっかり削除しちゃいました。", kana: "かいぎ の しりょう を うっかり さくじょしちゃいました。", romaji: "Kaigi no shiryou o ukkari sakujo shichaimashita.", meaning: "Saya tanpa sadar tidak sengaja menghapus dokumen rapatnya." },
              { jp: "昔の写真を全部削除しちゃいました。", kana: "むかし の しゃしん を ぜんぶ さくじょしちゃいました。", romaji: "Mukashi no shashin o zenbu sakujo shichaimashita.", meaning: "Foto-foto lama udah terlanjur saya hapus semua." },
              { jp: "連絡先を消すつもりじゃなかったのに、削除しちゃいました。", kana: "れんらくさき を けす つもり じゃなかった のに、 さくじょしちゃいました。", romaji: "Renrakusaki o kesu tsumori janakatta noni, sakujo shichaimashita.", meaning: "Padahal nggak niat hapus kontak, tapi malah nggak sengaja terhapus deh." },
              { jp: "アプリのデータを間違って削除しちゃいました。", kana: "あぷり の でーた を まちがって さくじょしちゃいました。", romaji: "Apuri no deeta o machigatte sakujo shichaimashita.", meaning: "Saya tidak sengaja menghapus data aplikasinya." },
              { jp: "スマホの容量がなくて、ゲームを削除しちゃいました。", kana: "すまほ の ようりょう が なくて、 げーむ を さくじょしちゃいました。", romaji: "Sumaho no youryou ga nakute, geemu o sakujo shichaimashita.", meaning: "Karena memori HP penuh, saya terlanjur menghapus game-nya." },
              { jp: "書いていたブログの記事を削除しちゃいました。", kana: "かいていた ぶろぐ の きじ を さくじょしちゃいました。", romaji: "Kaite ita burogu no kiji o sakujo shichaimashita.", meaning: "Artikel blog yang lagi ditulis nggak sengaja terhapus." },
              { jp: "お客様の情報を削除しちゃいました、どうしましょう。", kana: "おきゃくさま の じょうほう を さくじょしちゃいました、 どう しましょう。", romaji: "Okyakusama no jouhou o sakujo shichaimashita, dou shimashou.", meaning: "Saya tidak sengaja menghapus informasi pelanggan, bagaimana ini?" },
              { jp: "共有フォルダのファイルを削除しちゃいました。", kana: "きょうゆう ふぉるだ の ふぁいる を さくじょしちゃいました。", romaji: "Kyouyuu foruda no fairu o sakujo shichaimashita.", meaning: "Saya tidak sengaja menghapus file di folder bersama." },
              { jp: "パスワードのメモを削除しちゃいました。", kana: "ぱすわーど の めも を さくじょしちゃいました。", romaji: "Pasuwaado no memo o sakujo shichaimashita.", meaning: "Catatan berisi password nggak sengaja saya hapus deh." }
            ]
          }]
        }
      ]
    },
	{
      id: "vf-31",
      level: "N4",
      order: 31,
      title: "~てもいい • Boleh / Diizinkan",
      summary: "Boleh / Diizinkan (N4). Digunakan untuk memberikan izin kepada seseorang, atau meminta izin jika diakhiri dengan tanda tanya (〜てもいいですか / 〜てもいい？). Sangat umum dipakai sehari-hari.",
      formulas: [
        { group: "Godan", rule: "Ubah kata kerja ke bentuk Te (て/で), lalu tambah もいい. Contoh: 飲む → 飲んでもいい." },
        { group: "Ichidan", rule: "Ubah kata kerja ke bentuk Te (て), lalu tambah もいい. Contoh: 見る → 見てもいい." },
        { group: "Irregular", rule: "する → してもいい, 来る (くる) → 来てもいい (きてもいい). Contoh: 質問する → 質問してもいい." }
      ],
      groups: [
        {
          name: "Godan",
          examples: [{
            base: "休む",
            transformed: "休んでもいい",
            kana: "やすむ → やすんでもいい",
            romaji: "yasumu → yasunde mo ii",
            meaning: "boleh istirahat / boleh libur",
            sentences: [
              { jp: "疲れたら、少し休んでもいいよ。", kana: "つかれたら、 すこし やすんでもいい よ。", romaji: "Tsukaretara, sukoshi yasunde mo ii yo.", meaning: "Kalau capek, boleh istirahat sebentar kok." },
              { jp: "明日は仕事がないから、休んでもいい。", kana: "あした は しごと が ない から、 やすんでもいい。", romaji: "Ashita wa shigoto ga nai kara, yasunde mo ii.", meaning: "Besok karena nggak ada kerjaan, boleh libur." },
              { jp: "気分が悪いなら、休んでもいいですか？", kana: "きぶん が わるい なら、 やすんでもいい です か？", romaji: "Kibun ga warui nara, yasunde mo ii desu ka?", meaning: "Kalau merasa tidak enak badan, apakah saya boleh istirahat?" },
              { jp: "ここは涼しいから、ここで休んでもいいよ。", kana: "ここ は すずしい から、 ここ で やすんでもいい よ。", romaji: "Koko wa suzushii kara, koko de yasunde mo ii yo.", meaning: "Di sini sejuk, jadi boleh istirahat di sini lho." },
              { jp: "風邪を引いたので、学校を休んでもいいですか？", kana: "かぜ を ひいた ので、 がっこう を やすんでもいい です か？", romaji: "Kaze o hiita node, gakkou o yasunde mo ii desu ka?", meaning: "Karena saya kena flu, bolehkah saya izin libur sekolah?" },
              { jp: "お昼までゆっくり休んでもいいよ。", kana: "おひる まで ゆっくり やすんでもいい よ。", romaji: "Ohiru made yukkuri yasunde mo ii yo.", meaning: "Boleh istirahat santai sampai siang kok." },
              { jp: "終わったら、休んでもいいですか？", kana: "おわったら、 やすんでもいい です か？", romaji: "Owattara, yasunde mo ii desu ka?", meaning: "Kalau sudah selesai, bolehkah saya istirahat?" },
              { jp: "無理しないで、今日は休んでもいいよ。", kana: "むり しないで、 きょう は やすんでもいい よ。", romaji: "Muri shinaide, kyou wa yasunde mo ii yo.", meaning: "Jangan memaksakan diri, hari ini kamu boleh istirahat kok." },
              { jp: "もう遅いから、休んでもいいよ。", kana: "もう おそい から、 やすんでもいい よ。", romaji: "Mou osoi kara, yasunde mo ii yo.", meaning: "Karena sudah larut, boleh istirahat kok." },
              { jp: "少しだけ、このベンチで休んでもいいですか？", kana: "すこし だけ、 この べんち で やすんでもいい です か？", romaji: "Sukoshi dake, kono benchi de yasunde mo ii desu ka?", meaning: "Bolehkah saya istirahat sebentar di bangku ini?" }
            ]
          }]
        },
        {
          name: "Ichidan",
          examples: [{
            base: "開ける",
            transformed: "開けてもいい",
            kana: "あける → あけてもいい",
            romaji: "akeru → akete mo ii",
            meaning: "boleh membuka",
            sentences: [
              { jp: "暑いから、窓を開けてもいいですか？", kana: "あつい から、 まど を あけてもいい です か？", romaji: "Atsui kara, mado o akete mo ii desu ka?", meaning: "Karena panas, bolehkah saya membuka jendela?" },
              { jp: "このプレゼント、今開けてもいい？", kana: "この ぷれぜんと、 いま あけてもいい？", romaji: "Kono purezento, ima akete mo ii?", meaning: "Kado ini, boleh kubuka sekarang nggak?" },
              { jp: "ドアを開けてもいいよ。", kana: "どあ を あけてもいい よ。", romaji: "Doa o akete mo ii yo.", meaning: "Boleh buka pintunya kok." },
              { jp: "空気を入れたいから、開けてもいいですか？", kana: "くうき を いれたい から、 あけてもいい です か？", romaji: "Kuuki o iretai kara, akete mo ii desu ka?", meaning: "Saya ingin sirkulasi udara masuk, boleh dibuka nggak?" },
              { jp: "この箱、開けてもいいですか？", kana: "この はこ、 あけてもいい です か？", romaji: "Kono hako, akete mo ii desu ka?", meaning: "Kotak ini, boleh saya buka?" },
              { jp: "中を見たいから、開けてもいい？", kana: "なか を みたい から、 あけてもいい？", romaji: "Naka o mitai kara, akete mo ii?", meaning: "Karena mau lihat isinya, boleh dibuka nggak?" },
              { jp: "少しだけ窓を開けてもいいですか？", kana: "すこし だけ まど を あけてもいい です か？", romaji: "Sukoshi dake mado o akete mo ii desu ka?", meaning: "Bolehkah saya buka jendelanya sedikit saja?" },
              { jp: "カーテンを開けてもいいよ、明るくなるから。", kana: "かーてん を あけてもいい よ、 あかるく なる から。", romaji: "Kaaten o akete mo ii yo, akaruku naru kara.", meaning: "Boleh buka tirainya kok, biar terang." },
              { jp: "匂いが強いから、ドアを開けてもいいですか？", kana: "におい が つよい から、 どあ を あけてもいい です か？", romaji: "Nioi ga tsuyoi kara, doa o akete mo ii desu ka?", meaning: "Baunya menyengat, bolehkah saya buka pintunya?" },
              { jp: "鍵を開けてもいいよ、中に入って。", kana: "かぎ を あけてもいい よ、 なか に はいって。", romaji: "Kagi o akete mo ii yo, naka ni haitte.", meaning: "Boleh buka kuncinya kok, masuklah ke dalam." }
            ]
          }]
        },
        {
          name: "Irregular",
          examples: [{
            base: "質問する",
            transformed: "質問してもいい",
            kana: "しつもんする → しつもんしてもいい",
            romaji: "shitsumon suru → shitsumon shite mo ii",
            meaning: "boleh bertanya",
            sentences: [
              { jp: "先生、一つ質問してもいいですか？", kana: "せんせい、 ひとつ しつもんしてもいい です か？", romaji: "Sensei, hitotsu shitsumon shite mo ii desu ka?", meaning: "Guru, bolehkah saya bertanya satu hal?" },
              { jp: "分からないところがあれば、質問してもいいよ。", kana: "わからない ところ が あれば、 しつもんしてもいい よ。", romaji: "Wakaranai tokoro ga areba, shitsumon shite mo ii yo.", meaning: "Kalau ada bagian yang tidak dimengerti, boleh bertanya kok." },
              { jp: "個人的なことを質問してもいいですか？", kana: "こじんてき な こと を しつもんしてもいい です か？", romaji: "Kojinteki na koto o shitsumon shite mo ii desu ka?", meaning: "Bolehkah saya menanyakan hal yang bersifat pribadi?" },
              { jp: "いつでも質問してもいいからね。", kana: "いつ でも しつもんしてもいい から ね。", romaji: "Itsu demo shitsumon shite mo ii kara ne.", meaning: "Kapan pun kamu boleh bertanya kok." },
              { jp: "ちょっと質問してもいい？", kana: "ちょっと しつもんしてもいい？", romaji: "Chotto shitsumon shite mo ii?", meaning: "Boleh nanya sebentar nggak?" },
              { jp: "会議の最後に質問してもいいですか？", kana: "かいぎ の さいご に しつもんしてもいい です か？", romaji: "Kaigi no saigo ni shitsumon shite mo ii desu ka?", meaning: "Bolehkah saya bertanya di akhir rapat nanti?" },
              { jp: "メールで質問してもいいですか？", kana: "めーる で しつもんしてもいい です か？", romaji: "Meeru de shitsumon shite mo ii desu ka?", meaning: "Bolehkah saya bertanya lewat email?" },
              { jp: "遠慮しないで、どんどん質問してもいいよ。", kana: "えんりょ しないで、 どんどん しつもんしてもいい よ。", romaji: "Enryo shinaide, dondon shitsumon shite mo ii yo.", meaning: "Jangan sungkan, boleh banyak bertanya kok." },
              { jp: "給料について質問してもいいですか？", kana: "きゅうりょう に ついて しつもんしてもいい です か？", romaji: "Kyuuryou ni tsuite shitsumon shite mo ii desu ka?", meaning: "Bolehkah saya bertanya mengenai gaji?" },
              { jp: "後でまた質問してもいいですか？", kana: "あと で また しつもんしてもいい です か？", romaji: "Ato de mata shitsumon shite mo ii desu ka?", meaning: "Bolehkah saya bertanya lagi nanti?" }
            ]
          }]
        }
      ]
    },
    {
      id: "vf-32",
      level: "N4",
      order: 32,
      title: "~なくてもいい • Tidak Perlu / Boleh Tidak",
      summary: "Tidak Perlu / Boleh Tidak (N4). Digunakan untuk menyatakan bahwa suatu tindakan tidak wajib, atau memberi kelonggaran kepada seseorang bahwa dia tidak usah melakukan hal tersebut.",
      formulas: [
        { group: "Godan", rule: "Ubah kata kerja ke bentuk Nai (ない), ganti 'ない' dengan 'なくてもいい'. Contoh: 行く → 行かない → 行かなくてもいい." },
        { group: "Ichidan", rule: "Ubah kata kerja ke bentuk Nai (ない), ganti 'ない' dengan 'なくてもいい'. Contoh: 食べる → 食べない → 食べなくてもいい." },
        { group: "Irregular", rule: "する → しなくてもいい, 来る (くる) → 来なくてもいい (こなくてもいい)." }
      ],
      groups: [
        {
          name: "Godan",
          examples: [{
            base: "急ぐ",
            transformed: "急がなくてもいい",
            kana: "いそぐ → いそがなくてもいい",
            romaji: "isogu → isoganakute mo ii",
            meaning: "tidak perlu buru-buru",
            sentences: [
              { jp: "時間はまだあるから、急がなくてもいいよ。", kana: "じかん は まだ ある から、 いそがなくてもいい よ。", romaji: "Jikan wa mada aru kara, isoganakute mo ii yo.", meaning: "Waktunya masih ada kok, jadi nggak perlu buru-buru." },
              { jp: "ゆっくりでいいから、急がなくてもいいですよ。", kana: "ゆっくり で いい から、 いそがなくてもいい です よ。", romaji: "Yukkuri de ii kara, isoganakute mo ii desu yo.", meaning: "Pelan-pelan saja tidak apa-apa, tidak usah buru-buru." },
              { jp: "明日までなので、今日急がなくてもいい。", kana: "あした まで なので、 きょう いそがなくてもいい。", romaji: "Ashita made nanode, kyou isoganakute mo ii.", meaning: "Karena batasnya sampai besok, hari ini nggak usah buru-buru." },
              { jp: "危ないから、そんなに急がなくてもいいよ。", kana: "あぶない から、 そんな に いそがなくてもいい よ。", romaji: "Abunai kara, sonna ni isoganakute mo ii yo.", meaning: "Karena bahaya, nggak usah terlalu buru-buru." },
              { jp: "走ると疲れるから、急がなくてもいい。", kana: "はしる と つかれる から、 いそがなくてもいい。", romaji: "Hashiru to tsukareru kara, isoganakute mo ii.", meaning: "Kalau lari nanti capek, jadi nggak usah buru-buru." },
              { jp: "誰も待っていないから、急がなくてもいい。", kana: "だれ も まっていない から、 いそがなくてもいい。", romaji: "Dare mo matte inai kara, isoganakute mo ii.", meaning: "Nggak ada yang nungguin kok, nggak usah buru-buru." },
              { jp: "急がなくてもいいから、間違えないようにね。", kana: "いそがなくてもいい から、 まちがえない よう に ね。", romaji: "Isoganakute mo ii kara, machigaenai you ni ne.", meaning: "Nggak perlu buru-buru, yang penting jangan sampai salah ya." },
              { jp: "仕事は終わったし、急がなくてもいいよ。", kana: "しごと は おわった し、 いそがなくてもいい よ。", romaji: "Shigoto wa owatta shi, isoganakute mo ii yo.", meaning: "Kerjaan kan udah beres, nggak usah buru-buru deh." },
              { jp: "道が混んでるし、急がなくてもいいよ。", kana: "みち が こんでる し、 いそがなくてもいい よ。", romaji: "Michi ga konderu shi, isoganakute mo ii yo.", meaning: "Jalannya juga lagi macet, nggak usah buru-buru." },
              { jp: "返事は明日でもいいので、急がなくてもいいです。", kana: "へんじ は あした でも いい ので、 いそがなくてもいい です。", romaji: "Henji wa ashita demo ii node, isoganakute mo ii desu.", meaning: "Balasannya besok juga tidak apa-apa, jadi tidak usah terburu-buru." }
            ]
          }]
        },
        {
          name: "Ichidan",
          examples: [{
            base: "食べる",
            transformed: "食べなくてもいい",
            kana: "たべる → たべなくてもいい",
            romaji: "taberu → tabenakute mo ii",
            meaning: "tidak usah makan / tidak perlu makan",
            sentences: [
              { jp: "お腹がいっぱいなら、全部食べなくてもいいよ。", kana: "おなか が いっぱい なら、 ぜんぶ たべなくてもいい よ。", romaji: "Onaka ga ippai nara, zenbu tabenakute mo ii yo.", meaning: "Kalau sudah kenyang, nggak usah makan semuanya kok." },
              { jp: "嫌いな野菜は食べなくてもいいよ。", kana: "きらいな やさい は たべなくてもいい よ。", romaji: "Kiraina yasai wa tabenakute mo ii yo.", meaning: "Sayuran yang kamu nggak suka tidak usah dimakan." },
              { jp: "朝ごはん、無理して食べなくてもいいよ。", kana: "あさごはん、 むり して たべなくてもいい よ。", romaji: "Asagohan, muri shite tabenakute mo ii yo.", meaning: "Sarapan pagi nggak usah dimakan kalau memaksakan diri." },
              { jp: "ダイエット中なら、デザートは食べなくてもいいんじゃない？", kana: "だいえっとちゅう なら、 でざーと は たべなくてもいい んじゃない？", romaji: "Daiettochuu nara, dezaato wa tabenakute mo iin janai?", meaning: "Kalau lagi diet, bukannya nggak usah makan pencuci mulut aja?" },
              { jp: "美味しくなかったら、食べなくてもいいです。", kana: "おいしくなかったら、 たべなくてもいい です。", romaji: "Oishikunakattara, tabenakute mo ii desu.", meaning: "Kalau rasanya tidak enak, tidak usah dimakan." },
              { jp: "夜遅いから、今は食べなくてもいい。", kana: "よる おそい から、 いま は たべなくてもいい。", romaji: "Yoru osoi kara, ima wa tabenakute mo ii.", meaning: "Karena sudah larut malam, sekarang nggak usah makan deh." },
              { jp: "みんなと同じものを食べなくてもいいよ。", kana: "みんな と おなじ もの を たべなくてもいい よ。", romaji: "Minna to onaji mono o tabenakute mo ii yo.", meaning: "Kamu nggak harus makan barang yang sama dengan yang lain kok." },
              { jp: "お弁当があるから、外で食べなくてもいい。", kana: "おべんとう が ある から、 そと で たべなくてもいい。", romaji: "Obentou ga aru kara, soto de tabenakute mo ii.", meaning: "Karena udah bawa bekal, jadi nggak perlu makan di luar." },
              { jp: "辛いのが苦手なら、食べなくてもいいよ。", kana: "からい の が にがて なら、 たべなくてもいい よ。", romaji: "Karai no ga nigate nara, tabenakute mo ii yo.", meaning: "Kalau nggak kuat pedas, nggak usah dimakan lho." },
              { jp: "気分が悪いときは、無理に食べなくてもいい。", kana: "きぶん が わるい とき は、 むり に たべなくてもいい。", romaji: "Kibun ga warui toki wa, muri ni tabenakute mo ii.", meaning: "Saat merasa tidak enak badan, tidak perlu memaksakan diri untuk makan." }
            ]
          }]
        },
        {
          name: "Irregular",
          examples: [{
            base: "無理する",
            transformed: "無理しなくてもいい",
            kana: "むりする → むりしなくてもいい",
            romaji: "muri suru → muri shinakute mo ii",
            meaning: "tidak perlu memaksakan diri",
            sentences: [
              { jp: "疲れているなら、無理しなくてもいいよ。", kana: "つかれている なら、 むりしなくてもいい よ。", romaji: "Tsukarete iru nara, muri shinakute mo ii yo.", meaning: "Kalau capek, nggak usah memaksakan diri ya." },
              { jp: "出来ないことは、無理しなくてもいい。", kana: "できない こと は、 むりしなくてもいい。", romaji: "Dekinai koto wa, muri shinakute mo ii.", meaning: "Hal yang tidak bisa dilakukan, tidak perlu dipaksakan." },
              { jp: "私がやるから、無理しなくてもいいよ。", kana: "わたし が やる から、 むりしなくてもいい よ。", romaji: "Watashi ga yaru kara, muri shinakute mo ii yo.", meaning: "Biar aku yang kerjakan, kamu nggak usah maksa diri." },
              { jp: "熱があるんだから、仕事は無理しなくてもいい。", kana: "ねつ が ある ん だから、 しごと は むりしなくてもいい。", romaji: "Netsu ga arun dakara, shigoto wa muri shinakute mo ii.", meaning: "Kamu kan lagi demam, kerjaannya nggak usah dipaksain." },
              { jp: "お金がない時は、無理しなくてもいい。", kana: "おかね が ない とき は、 むりしなくてもいい。", romaji: "Okane ga nai toki wa, muri shinakute mo ii.", meaning: "Saat sedang tidak ada uang, tidak perlu memaksakan diri." },
              { jp: "一人で全部やろうと無理しなくてもいいよ。", kana: "ひとり で ぜんぶ やろう と むりしなくてもいい よ。", romaji: "Hitori de zenbu yarou to muri shinakute mo ii yo.", meaning: "Nggak usah maksa diri lakuin semuanya sendirian kok." },
              { jp: "行きたくないなら、無理しなくてもいいよ。", kana: "いきたくない なら、 むりしなくてもいい よ。", romaji: "Ikitakunai nara, muri shinakute mo ii yo.", meaning: "Kalau nggak mau pergi, nggak usah dipaksa." },
              { jp: "自分のペースでいいから、無理しなくてもいい。", kana: "じぶん の ぺーす で いい から、 むりしなくてもいい。", romaji: "Jibun no peesu de ii kara, muri shinakute mo ii.", meaning: "Pakai kecepatanmu sendiri aja, nggak perlu dipaksakan." },
              { jp: "早く起きようと無理しなくてもいいよ。", kana: "はやく おきよう と むりしなくてもいい よ。", romaji: "Hayaku okiyou to muri shinakute mo ii yo.", meaning: "Nggak usah maksa diri buat bangun cepat." },
              { jp: "体調が一番だから、無理しなくてもいいですよ。", kana: "たいちょう が いちばん だから、 むりしなくてもいい です よ。", romaji: "Taichou ga ichiban dakara, muri shinakute mo ii desu yo.", meaning: "Kondisi badan itu yang utama, jadi tidak usah memaksakan diri." }
            ]
          }]
        }
      ]
    },
    {
      id: "vf-33",
      level: "N4",
      order: 33,
      title: "~ないといけない • Harus / Wajib",
      summary: "Harus / Wajib (N4). Digunakan untuk menyatakan kewajiban atau keharusan. Ini adalah versi kasual namun umum digunakan dari bentuk '~なければなりません' (harus). Sangat natural dipakai dalam obrolan harian.",
      formulas: [
        { group: "Godan", rule: "Ubah kata kerja ke bentuk Nai (ない), lalu tambah といけない. Contoh: 行く → 行かないといけない." },
        { group: "Ichidan", rule: "Ubah kata kerja ke bentuk Nai (ない), lalu tambah といけない. Contoh: 寝る → 寝ないといけない." },
        { group: "Irregular", rule: "する → しないといけない, 来る (くる) → 来ないといけない (こないといけない)." }
      ],
      groups: [
        {
          name: "Godan",
          examples: [{
            base: "帰る",
            transformed: "帰らないといけない",
            kana: "かえる → かえらないといけない",
            romaji: "kaeru → kaeranai to ikenai",
            meaning: "harus pulang",
            sentences: [
              { jp: "もう遅いから、帰らないといけない。", kana: "もう おそい から、 かえらないといけない。", romaji: "Mou osoi kara, kaeranai to ikenai.", meaning: "Karena sudah malam, aku harus pulang." },
              { jp: "明日は早いから、そろそろ帰らないといけない。", kana: "あした は はやい から、 そろそろ かえらないといけない。", romaji: "Ashita wa hayai kara, sorosoro kaeranai to ikenai.", meaning: "Karena besok aku harus bangun pagi, kayaknya aku harus segera pulang." },
              { jp: "親が待っているから、早く帰らないといけない。", kana: "おや が まっている から、 はやく かえらないといけない。", romaji: "Oya ga matte iru kara, hayaku kaeranai to ikenai.", meaning: "Karena orang tua nungguin, aku harus cepat pulang." },
              { jp: "門限があるので、夜10時までに帰らないといけない。", kana: "もんげん が ある ので、 よる じゅうじ まで に かえらないといけない。", romaji: "Mongen ga aru node, yoru juuji made ni kaeranai to ikenai.", meaning: "Karena ada jam malam, aku harus pulang sebelum jam 10 malam." },
              { jp: "終電の時間だから、もう帰らないといけない。", kana: "しゅうでん の じかん だから、 もう かえらないといけない。", romaji: "Shuuden no jikan dakara, mou kaeranai to ikenai.", meaning: "Karena udah jam kereta terakhir, aku harus pulang sekarang." },
              { jp: "ペットにご飯をあげるために、帰らないといけない。", kana: "ぺっと に ごはん を あげる ため に、 かえらないといけない。", romaji: "Petto ni gohan o ageru tame ni, kaeranai to ikenai.", meaning: "Demi ngasih makan peliharaan, aku harus pulang." },
              { jp: "忘れ物をしたので、一度家に帰らないといけない。", kana: "わすれもの を した ので、 いちど いえ に かえらないといけない。", romaji: "Wasuremono o shita node, ichido ie ni kaeranai to ikenai.", meaning: "Karena ada barang tertinggal, aku harus pulang ke rumah dulu." },
              { jp: "急用ができたから、今すぐ帰らないといけない。", kana: "きゅうよう が できた から、 いま すぐ かえらないといけない。", romaji: "Kyuuyou ga dekita kara, ima sugu kaeranai to ikenai.", meaning: "Karena ada urusan mendadak, aku harus pulang sekarang juga." },
              { jp: "今日は家族の誕生日だから、早く帰らないといけない。", kana: "きょう は かぞく の たんじょうび だから、 はやく かえらないといけない。", romaji: "Kyou wa kazoku no tanjoubi dakara, hayaku kaeranai to ikenai.", meaning: "Karena hari ini ulang tahun keluarga, aku harus pulang cepat." },
              { jp: "ごめん、そろそろ帰らないといけないんだ。", kana: "ごめん、 そろそろ かえらないといけない ん だ。", romaji: "Gomen, sorosoro kaeranai to ikenai n da.", meaning: "Maaf ya, aku harus segera pulang nih." }
            ]
          }]
        },
        {
          name: "Ichidan",
          examples: [{
            base: "寝る",
            transformed: "寝ないといけない",
            kana: "ねる → ねないといけない",
            romaji: "neru → nenai to ikenai",
            meaning: "harus tidur",
            sentences: [
              { jp: "明日はテストだから、早く寝ないといけない。", kana: "あした は てすと だから、 はやく ねないといけない。", romaji: "Ashita wa tesuto dakara, hayaku nenai to ikenai.", meaning: "Karena besok ujian, aku harus tidur cepat." },
              { jp: "もう12時だ、寝ないといけない。", kana: "もう じゅうにじ だ、 ねないといけない。", romaji: "Mou juuniji da, nenai to ikenai.", meaning: "Udah jam 12, aku harus tidur nih." },
              { jp: "風邪を治すために、たくさん寝ないといけない。", kana: "かぜ を なおす ため に、 たくさん ねないといけない。", romaji: "Kaze o naosu tame ni, takusan nenai to ikenai.", meaning: "Untuk menyembuhkan flu, aku harus banyak tidur." },
              { jp: "健康のために、毎日8時間は寝ないといけない。", kana: "けんこう の ため に、 まいにち はちじかん は ねないといけない。", romaji: "Kenkou no tame ni, mainichi hachijikan wa nenai to ikenai.", meaning: "Demi kesehatan, harus tidur 8 jam setiap hari." },
              { jp: "子供は早く寝ないといけないよ。", kana: "こども は はやく ねないといけない よ。", romaji: "Kodomo wa hayaku nenai to ikenai yo.", meaning: "Anak kecil itu harus cepat tidur lho." },
              { jp: "寝不足だから、今日は早く寝ないといけない。", kana: "ねぶそく だから、 きょう は はやく ねないといけない。", romaji: "Nebusoku dakara, kyou wa hayaku nenai to ikenai.", meaning: "Karena kurang tidur, hari ini aku harus tidur lebih awal." },
              { jp: "試合の前日は、しっかり寝ないといけない。", kana: "しあい の ぜんじつ は、 しっかり ねないといけない。", romaji: "Shiai no zenjitsu wa, shikkari nenai to ikenai.", meaning: "Di hari sebelum pertandingan, harus tidur dengan cukup." },
              { jp: "疲れているなら、すぐに寝ないといけないよ。", kana: "つかれている なら、 すぐ に ねないといけない よ。", romaji: "Tsukarete iru nara, sugu ni nenai to ikenai yo.", meaning: "Kalau capek, kamu harus segera tidur lho." },
              { jp: "明日から旅行だから、早く寝ないといけない。", kana: "あした から りょこう だから、 はやく ねないといけない。", romaji: "Ashita kara ryokou dakara, hayaku nenai to ikenai.", meaning: "Karena besok mau liburan, harus tidur cepat." },
              { jp: "肌に悪いから、夜更かししないで寝ないといけない。", kana: "はだ に わるい から、 よふかし しないで ねないといけない。", romaji: "Hada ni warui kara, yofukashi shinaide nenai to ikenai.", meaning: "Karena buruk untuk kulit, nggak boleh begadang dan harus tidur." }
            ]
          }]
        },
        {
          name: "Irregular",
          examples: [{
            base: "勉強する",
            transformed: "勉強しないといけない",
            kana: "べんきょうする → べんきょうしないといけない",
            romaji: "benkyou suru → benkyou shinai to ikenai",
            meaning: "harus belajar",
            sentences: [
              { jp: "試験が近いから、もっと勉強しないといけない。", kana: "しけん が ちかい から、 もっと べんきょうしないといけない。", romaji: "Shiken ga chikai kara, motto benkyou shinai to ikenai.", meaning: "Karena ujian sudah dekat, aku harus belajar lebih banyak lagi." },
              { jp: "日本語が上手になるために、毎日勉強しないといけない。", kana: "にほんご が じょうず に なる ため に、 まいにち べんきょうしないといけない。", romaji: "Nihongo ga jouzu ni naru tame ni, mainichi benkyou shinai to ikenai.", meaning: "Agar pintar bahasa Jepang, aku harus belajar setiap hari." },
              { jp: "将来のために、今勉強しないといけない。", kana: "しょうらい の ため に、 いま べんきょうしないといけない。", romaji: "Shourai no tame ni, ima benkyou shinai to ikenai.", meaning: "Demi masa depan, aku harus belajar sekarang." },
              { jp: "親に怒られたから、勉強しないといけない。", kana: "おや に おこられた から、 べんきょうしないといけない。", romaji: "Oya ni okorareta kara, benkyou shinai to ikenai.", meaning: "Karena dimarahi orang tua, aku harus belajar." },
              { jp: "留学したいなら、もっと英語を勉強しないといけないよ。", kana: "りゅうがく したい なら、 もっと えいご を べんきょうしないといけない よ。", romaji: "Ryuugaku shitai nara, motto eigo o benkyou shinai to ikenai yo.", meaning: "Kalau mau sekolah ke luar negeri, kamu harus lebih rajin belajar bahasa Inggris lho." },
              { jp: "資格を取るために、勉強しないといけない。", kana: "しかく を とる ため に、 べんきょうしないといけない。", romaji: "Shikaku o toru tame ni, benkyou shinai to ikenai.", meaning: "Demi mendapatkan sertifikasi, aku harus belajar." },
              { jp: "宿題がたくさんあるから、勉強しないといけない。", kana: "しゅくだい が たくさん ある から、 べんきょうしないといけない。", romaji: "Shukudai ga takusan aru kara, benkyou shinai to ikenai.", meaning: "Karena PR banyak, aku harus belajar." },
              { jp: "遊んでばかりいないで、少しは勉強しないといけない。", kana: "あそんで ばかり いないで、 すこし は べんきょうしないといけない。", romaji: "Asonde bakari inaide, sukoshi wa benkyou shinai to ikenai.", meaning: "Jangan main terus, setidaknya harus belajar sedikit." },
              { jp: "授業についていくために、予習をして勉強しないといけない。", kana: "じゅぎょう に ついていく ため に、 よしゅう を して べんきょうしないといけない。", romaji: "Jugyou ni tsuite iku tame ni, yoshuu o shite benkyou shinai to ikenai.", meaning: "Agar bisa mengikuti pelajaran, harus persiapan dan belajar sebelumnya." },
              { jp: "大人になっても、ずっと勉強しないといけないんだよ。", kana: "おとな に なっても、 ずっと べんきょうしないといけない ん だ よ。", romaji: "Otona ni nattemo, zutto benkyou shinai to ikenai n da yo.", meaning: "Bahkan setelah dewasa pun, kita harus terus belajar lho." }
            ]
          }]
        }
      ]
    },
	{
      id: "vf-34",
      level: "N4",
      order: 34,
      title: "~てはいけない • Tidak Boleh",
      summary: "Tidak Boleh (N4). Digunakan untuk memberikan larangan atau menyatakan aturan bahwa suatu tindakan dilarang. Biasanya diucapkan oleh orang yang posisinya lebih tinggi (guru/orang tua/bos) kepada bawahannya, atau tertulis di rambu peringatan.",
      formulas: [
        { group: "Godan", rule: "Ubah kata kerja ke bentuk Te (て/で), lalu tambah はいけない. Contoh: 入る → 入ってはいけない." },
        { group: "Ichidan", rule: "Ubah kata kerja ke bentuk Te (て), lalu tambah はいけない. Contoh: 負ける → 負けてはいけない." },
        { group: "Irregular", rule: "する → してはいけない, 来る (くる) → 来てはいけない (きてはいけない). Contoh: 遅刻する → 遅刻してはいけない." }
      ],
      groups: [
        {
          name: "Godan",
          examples: [{
            base: "入る",
            transformed: "入ってはいけない",
            kana: "はいる → はいってはいけない",
            romaji: "hairu → haitte wa ikenai",
            meaning: "tidak boleh masuk",
            sentences: [
              { jp: "ここから先は、入ってはいけない。", kana: "ここ から さき は、 はいってはいけない。", romaji: "Koko kara saki wa, haitte wa ikenai.", meaning: "Dari sini ke depan, tidak boleh masuk." },
              { jp: "芝生の中に入ってはいけない。", kana: "しばふ の なか に はいってはいけない。", romaji: "Shibafu no naka ni haitte wa ikenai.", meaning: "Tidak boleh masuk ke area rumput." },
              { jp: "関係者以外、この部屋に入ってはいけない。", kana: "かんけいしゃ いがい、 この へや に はいってはいけない。", romaji: "Kankeisha igai, kono heya ni haitte wa ikenai.", meaning: "Selain staf, tidak boleh masuk ke ruangan ini." },
              { jp: "危ないから、工事現場に入ってはいけない。", kana: "あぶない から、 こうじげんば に はいってはいけない。", romaji: "Abunai kara, koujigenba ni haitte wa ikenai.", meaning: "Karena berbahaya, tidak boleh masuk ke lokasi konstruksi." },
              { jp: "靴を履いたまま、家の中に入ってはいけない。", kana: "くつ を はいた まま、 いえ の なか に はいってはいけない。", romaji: "Kutsu o haita mama, ie no naka ni haitte wa ikenai.", meaning: "Tidak boleh masuk ke dalam rumah dengan tetap memakai sepatu." },
              { jp: "子供は夜の店に入ってはいけない。", kana: "こども は よる の みせ に はいってはいけない。", romaji: "Kodomo wa yoru no mise ni haitte wa ikenai.", meaning: "Anak-anak tidak boleh masuk ke kelab/toko malam." },
              { jp: "先生の許可なく、職員室に入ってはいけない。", kana: "せんせい の きょか なく、 しょくいんしつ に はいってはいけない。", romaji: "Sensei no kyoka naku, shokuinshitsu ni haitte wa ikenai.", meaning: "Tanpa izin guru, tidak boleh masuk ke ruang guru." },
              { jp: "そのドアからは入ってはいけない。", kana: "その どあ から は はいってはいけない。", romaji: "Sono doa kara wa haitte wa ikenai.", meaning: "Tidak boleh masuk dari pintu yang itu." },
              { jp: "犬を連れて公園に入ってはいけない。", kana: "いぬ を つれて こうえん に はいってはいけない。", romaji: "Inu o tsurete kouen ni haitte wa ikenai.", meaning: "Tidak boleh masuk ke taman membawa anjing." },
              { jp: "風邪を引いている人は、プールに入ってはいけない。", kana: "かぜ を ひいて いる ひと は、 ぷーる に はいってはいけない。", romaji: "Kaze o hiite iru hito wa, puuru ni haitte wa ikenai.", meaning: "Orang yang sedang flu tidak boleh masuk ke kolam renang." }
            ]
          }]
        },
        {
          name: "Ichidan",
          examples: [{
            base: "諦める",
            transformed: "諦めてはいけない",
            kana: "あきらめる → あきらめてはいけない",
            romaji: "akirameru → akiramete wa ikenai",
            meaning: "tidak boleh menyerah",
            sentences: [
              { jp: "最後まで諦めてはいけない。", kana: "さいご まで あきらめてはいけない。", romaji: "Saigo made akiramete wa ikenai.", meaning: "Tidak boleh menyerah sampai akhir." },
              { jp: "夢を簡単に諦めてはいけない。", kana: "ゆめ を かんたん に あきらめてはいけない。", romaji: "Yume o kantan ni akiramete wa ikenai.", meaning: "Tidak boleh menyerah pada impian dengan mudah." },
              { jp: "失敗しても、諦めてはいけないよ。", kana: "しっぱい しても、 あきらめてはいけない よ。", romaji: "Shippai shitemo, akiramete wa ikenai yo.", meaning: "Walaupun gagal, tidak boleh menyerah lho." },
              { jp: "試合が終わるまで、絶対に諦めてはいけない。", kana: "しあい が おわる まで、 ぜったい に あきらめてはいけない。", romaji: "Shiai ga owaru made, zettai ni akiramete wa ikenai.", meaning: "Sampai pertandingan berakhir, mutlak tidak boleh menyerah." },
              { jp: "どんなに辛くても、諦めてはいけない。", kana: "どんな に つらくても、 あきらめてはいけない。", romaji: "Donna ni tsurakutemo, akiramete wa ikenai.", meaning: "Sesulit apapun itu, tidak boleh menyerah." },
              { jp: "自分の可能性を諦めてはいけない。", kana: "じぶん の かのうせい を あきらめてはいけない。", romaji: "Jibun no kanousei o akiramete wa ikenai.", meaning: "Tidak boleh menyerah pada potensimu sendiri." },
              { jp: "まだ時間はあるから、諦めてはいけない。", kana: "まだ じかん は ある から、 あきらめてはいけない。", romaji: "Mada jikan wa aru kara, akiramete wa ikenai.", meaning: "Karena masih ada waktu, kamu tidak boleh menyerah." },
              { jp: "負けそうになっても、諦めてはいけない。", kana: "まけそう に なっても、 あきらめてはいけない。", romaji: "Makesou ni nattemo, akiramete wa ikenai.", meaning: "Walaupun rasanya akan kalah, tidak boleh menyerah." },
              { jp: "一度のミスで諦めてはいけない。", kana: "いちど の みす で あきらめてはいけない。", romaji: "Ichido no misu de akiramete wa ikenai.", meaning: "Tidak boleh menyerah hanya karena satu kali kesalahan." },
              { jp: "希望を諦めてはいけない。", kana: "きぼう を あきらめてはいけない。", romaji: "Kibou o akiramete wa ikenai.", meaning: "Tidak boleh menyerah pada harapan." }
            ]
          }]
        },
        {
          name: "Irregular",
          examples: [{
            base: "遅刻する",
            transformed: "遅刻してはいけない",
            kana: "ちこくする → ちこくしてはいけない",
            romaji: "chikoku suru → chikoku shite wa ikenai",
            meaning: "tidak boleh terlambat",
            sentences: [
              { jp: "明日の面接に、絶対に遅刻してはいけない。", kana: "あした の めんせつ に、 ぜったい に ちこくしてはいけない。", romaji: "Ashita no mensetsu ni, zettai ni chikoku shite wa ikenai.", meaning: "Wawancara besok, mutlak tidak boleh terlambat." },
              { jp: "学校に遅刻してはいけない。", kana: "がっこう に ちこくしてはいけない。", romaji: "Gakkou ni chikoku shite wa ikenai.", meaning: "Tidak boleh terlambat ke sekolah." },
              { jp: "大事な会議なので、遅刻してはいけない。", kana: "だいじ な かいぎ なので、 ちこくしてはいけない。", romaji: "Daiji na kaigi nanode, chikoku shite wa ikenai.", meaning: "Karena ini rapat penting, tidak boleh terlambat." },
              { jp: "社会人は時間に遅刻してはいけない。", kana: "しゃかいじん は じかん に ちこくしてはいけない。", romaji: "Shakaijin wa jikan ni chikoku shite wa ikenai.", meaning: "Orang dewasa (pekerja) tidak boleh terlambat soal waktu." },
              { jp: "テストの日には、遅刻してはいけないよ。", kana: "てすと の ひ に は、 ちこくしてはいけない よ。", romaji: "Tesuto no hi ni wa, chikoku shite wa ikenai yo.", meaning: "Di hari ujian, tidak boleh terlambat lho." },
              { jp: "初デートで遅刻してはいけない。", kana: "はつ でーと で ちこくしてはいけない。", romaji: "Hatsu deeto de chikoku shite wa ikenai.", meaning: "Di kencan pertama tidak boleh terlambat." },
              { jp: "飛行機の時間に遅刻してはいけない。", kana: "ひこうき の じかん に ちこくしてはいけない。", romaji: "Hikouki no jikan ni chikoku shite wa ikenai.", meaning: "Tidak boleh terlambat untuk waktu penerbangan pesawat." },
              { jp: "アルバイトに遅刻してはいけない。", kana: "あるばいと に ちこくしてはいけない。", romaji: "Arubaito ni chikoku shite wa ikenai.", meaning: "Tidak boleh terlambat ke tempat kerja sambilan." },
              { jp: "どんな理由があっても、無断で遅刻してはいけない。", kana: "どんな りゆう が あっても、 むだん で ちこくしてはいけない。", romaji: "Donna riyuu ga attemo, mudan de chikoku shite wa ikenai.", meaning: "Alasan apapun itu, tidak boleh terlambat tanpa kabar." },
              { jp: "約束の時間には遅刻してはいけない。", kana: "やくそく の じかん に は ちこくしてはいけない。", romaji: "Yakusoku no jikan ni wa chikoku shite wa ikenai.", meaning: "Tidak boleh terlambat di waktu yang dijanjikan." }
            ]
          }]
        }
      ]
    },
    {
      id: "vf-35",
      level: "N4",
      order: 35,
      title: "~たい • Keinginan (Ingin…)",
      summary: "Keinginan (N4). Digunakan untuk menyatakan keinginan diri sendiri untuk melakukan suatu tindakan. Bentuk ini berkonjugasi sama seperti kata sifat-i (i-adjective). Perlu diingat, bentuk ini umumnya tidak sopan jika digunakan langsung untuk menanyakan keinginan orang yang lebih tua/atasan.",
      formulas: [
        { group: "Godan", rule: "Ubah vokal akhir deretan 'u' menjadi deretan 'i', lalu tambah たい. Contoh: 行く → 行き → 行きたい." },
        { group: "Ichidan", rule: "Hilangkan 'る' (ru) di akhir, ganti dengan たい. Contoh: 食べる → 食べたい." },
        { group: "Irregular", rule: "する → したい, 来る (くる) → 来たい (きたい). Contoh: 結婚する → 結婚したい." }
      ],
      groups: [
        {
          name: "Godan",
          examples: [{
            base: "行く",
            transformed: "行きたい",
            kana: "いく → いきたい",
            romaji: "iku → ikitai",
            meaning: "ingin pergi",
            sentences: [
              { jp: "来年、絶対に日本へ行きたい。", kana: "らいねん、 ぜったい に にほん へ いきたい。", romaji: "Rainen, zettai ni Nihon e ikitai.", meaning: "Tahun depan, aku mutlak ingin pergi ke Jepang." },
              { jp: "疲れたから、早く家に帰って寝たい。 (行く diganti 帰る, tapi maknanya selaras)", kana: "つかれた から、 はやく いえ に かえって ねたい。", romaji: "Tsukareta kara, hayaku ie ni kaette netai.", meaning: "Karena capek, aku ingin cepat pulang ke rumah dan tidur." },
              { jp: "夏休みは、友達と海に行きたい。", kana: "なつやすみ は、 ともだち と うみ に いきたい。", romaji: "Natsuyasumi wa, tomodachi to umi ni ikitai.", meaning: "Libur musim panas nanti, aku ingin pergi ke laut bareng teman." },
              { jp: "新しいカフェができたから、行きたい。", kana: "あたらしい かふぇ が できた から、 いきたい。", romaji: "Atarashii kafe ga dekita kara, ikitai.", meaning: "Karena ada kafe baru buka, aku ingin pergi ke sana." },
              { jp: "死ぬまでに一度は宇宙に行きたい。", kana: "しぬ まで に いちど は うちゅう に いきたい。", romaji: "Shinu made ni ichido wa uchuu ni ikitai.", meaning: "Sebelum meninggal, minimal sekali aku ingin pergi ke luar angkasa." },
              { jp: "温泉に行って、ゆっくり休みたい。", kana: "おんせん に いって、 ゆっくり やすみたい。", romaji: "Onsen ni itte, yukkuri yasumitai.", meaning: "Aku ingin pergi ke pemandian air panas dan beristirahat santai." },
              { jp: "君と一緒に行きたい。", kana: "きみ と いっしょ に いきたい。", romaji: "Kimi to issho ni ikitai.", meaning: "Aku ingin pergi bersamamu." },
              { jp: "週末はどこか遠くへ行きたい。", kana: "しゅうまつ は どこか とおく へ いきたい。", romaji: "Shuumatsu wa dokoka tooku e ikitai.", meaning: "Akhir pekan aku ingin pergi ke suatu tempat yang jauh." },
              { jp: "あの有名なレストランに行きたい。", kana: "あの ゆうめい な れすとらん に いきたい。", romaji: "Ano yuumei na resutoran ni ikitai.", meaning: "Aku ingin pergi ke restoran terkenal itu." },
              { jp: "世界中を旅行して回りたい。(回る)", kana: "せかいじゅう を りょこう して まわりたい。", romaji: "Sekaijuu o ryokou shite mawaritai.", meaning: "Aku ingin pergi keliling dunia." }
            ]
          }]
        },
        {
          name: "Ichidan",
          examples: [{
            base: "見る",
            transformed: "見たい",
            kana: "みる → みたい",
            romaji: "miru → mitai",
            meaning: "ingin melihat / ingin menonton",
            sentences: [
              { jp: "今夜、新しい映画を見たい。", kana: "こんや、 あたらしい えいが を みたい。", romaji: "Konya, atarashii eiga o mitai.", meaning: "Malam ini, aku ingin menonton film baru." },
              { jp: "早くアニメの続きが見たい。", kana: "はやく あにめ の つづき が みたい。", romaji: "Hayaku anime no tsuzuki ga mitai.", meaning: "Aku ingin cepat-cepat menonton kelanjutan animenya." },
              { jp: "君の笑顔がもっと見たい。", kana: "きみ の えがお が もっと みたい。", romaji: "Kimi no egao ga motto mitai.", meaning: "Aku ingin melihat senyummu lebih banyak lagi." },
              { jp: "富士山を自分の目で見たい。", kana: "ふじさん を じぶん の め で みたい。", romaji: "Fujisan o jibun no me de mitai.", meaning: "Aku ingin melihat Gunung Fuji dengan mataku sendiri." },
              { jp: "その写真、私にも見せて。見たい！", kana: "その しゃしん、 わたし に も みせて。 みたい！", romaji: "Sono shashin, watashi ni mo misete. Mitai!", meaning: "Coba tunjukkan foto itu ke aku juga. Aku ingin lihat!" },
              { jp: "桜が満開のところを見たい。", kana: "さくら が まんかい の ところ を みたい。", romaji: "Sakura ga mankai no tokoro o mitai.", meaning: "Aku ingin melihat tempat sakura mekar penuh." },
              { jp: "好きなバンドのライブが見たい。", kana: "すきな ばんど の らいぶ が みたい。", romaji: "Sukina bando no raibu ga mitai.", meaning: "Aku ingin menonton konser band kesukaanku." },
              { jp: "将来、オーロラを見たい。", kana: "しょうらい、 おーろら を みたい。", romaji: "Shourai, oarora o mitai.", meaning: "Di masa depan, aku ingin melihat aurora." },
              { jp: "メニューを見たいのですが。", kana: "めにゅー を みたい の です が。", romaji: "Menyuu o mitai no desu ga.", meaning: "Permisi, saya ingin melihat menunya." },
              { jp: "彼の驚く顔が見たい。", kana: "かれ の おどろく かお が みたい。", romaji: "Kare no odoroku kao ga mitai.", meaning: "Aku ingin melihat wajah kagetnya dia." }
            ]
          }]
        },
        {
          name: "Irregular",
          examples: [{
            base: "結婚する",
            transformed: "結婚したい",
            kana: "けっこんする → けっこんしたい",
            romaji: "kekkon suru → kekkon shitai",
            meaning: "ingin menikah",
            sentences: [
              { jp: "好きな人と結婚したい。", kana: "すきな ひと と けっこんしたい。", romaji: "Sukina hito to kekkon shitai.", meaning: "Aku ingin menikah dengan orang yang aku cintai." },
              { jp: "30歳までに結婚したい。", kana: "さんじゅっさい まで に けっこんしたい。", romaji: "Sanjussai made ni kekkon shitai.", meaning: "Aku ingin menikah sebelum umur 30 tahun." },
              { jp: "優しくて面白い人と結婚したい。", kana: "やさしくて おもしろい ひと と けっこんしたい。", romaji: "Yasashikute omoshiroi hito to kekkon shitai.", meaning: "Aku ingin menikah dengan orang yang baik hati dan lucu." },
              { jp: "お金持ちと結婚したい。", kana: "おかねもち と けっこんしたい。", romaji: "Okanemochi to kekkon shitai.", meaning: "Aku ingin menikah dengan orang kaya." },
              { jp: "早く結婚して、子供が欲しい。", kana: "はやく けっこん して、 こども が ほしい。", romaji: "Hayaku kekkon shite, kodomo ga hoshii.", meaning: "Aku ingin cepat menikah, dan memiliki anak." },
              { jp: "海外で結婚したい。", kana: "かいがい で けっこんしたい。", romaji: "Kaigai de kekkon shitai.", meaning: "Aku ingin menikah (mengadakan pesta) di luar negeri." },
              { jp: "今はまだ結婚したくないけど、いつかは結婚したい。", kana: "いま は まだ けっこんしたくない けど、 いつか は けっこんしたい。", romaji: "Ima wa mada kekkon shitakunai kedo, itsuka wa kekkon shitai.", meaning: "Sekarang memang belum ingin menikah, tapi suatu saat nanti ingin menikah." },
              { jp: "価値観が合う人と結婚したい。", kana: "かちかん が あう ひと と けっこんしたい。", romaji: "Kachikan ga au hito to kekkon shitai.", meaning: "Aku ingin menikah dengan orang yang punya nilai/pandangan hidup yang sejalan." },
              { jp: "料理が上手な人と結婚したい。", kana: "りょうり が じょうず な ひと と けっこんしたい。", romaji: "Ryouri ga jouzu na hito to kekkon shitai.", meaning: "Aku ingin menikah dengan orang yang pintar masak." },
              { jp: "プロポーズされて、早く結婚したい。", kana: "ぷろぽーず されて、 はやく けっこんしたい。", romaji: "Puropoozu sarete, hayaku kekkon shitai.", meaning: "Aku ingin cepat dilamar lalu menikah." }
            ]
          }]
        }
      ]
    },
    {
      id: "vf-36",
      level: "N4",
      order: 36,
      title: "~たくない • Tidak Ingin",
      summary: "Tidak Ingin (N4). Ini adalah bentuk negatif dari '~たい'. Digunakan untuk menyatakan keengganan atau penolakan melakukan sesuatu karena tidak ada keinginan di hati. Karena berasal dari '~たい' (yang berkonjugasi seperti kata sifat-i), negatifnya menjadi '~たくない'.",
      formulas: [
        { group: "Godan", rule: "Dari bentuk '~たい', ubah akhiran 'い' (i) menjadi 'くない' (kunai). Contoh: 行きたい → 行きたくない." },
        { group: "Ichidan", rule: "Dari bentuk '~たい', ubah akhiran 'い' (i) menjadi 'くない' (kunai). Contoh: 食べたい → 食べたくない." },
        { group: "Irregular", rule: "したい → したくない, 来たい (きたい) → 来たくない (きたくない). Contoh: 失敗したい → 失敗したくない." }
      ],
      groups: [
        {
          name: "Godan",
          examples: [{
            base: "働く",
            transformed: "働きたくない",
            kana: "はたらく → はたらきたくない",
            romaji: "hataraku → hatarakitakunai",
            meaning: "tidak ingin bekerja",
            sentences: [
              { jp: "今日は疲れたから、働きたくない。", kana: "きょう は つかれた から、 はたらきたくない。", romaji: "Kyou wa tsukareta kara, hatarakitakunai.", meaning: "Karena hari ini capek, aku tidak ingin bekerja." },
              { jp: "雨の日は会社に行って働きたくない。", kana: "あめ の ひ は かいしゃ に いって はたらきたくない。", romaji: "Ame no hi wa kaisha ni itte hatarakitakunai.", meaning: "Di hari hujan, aku tidak ingin pergi ke kantor dan bekerja." },
              { jp: "一生働きたくない、ずっと遊んでいたい。", kana: "いっしょう はたらきたくない、 ずっと あそんで いたい。", romaji: "Isshou hatarakitakunai, zutto asonde itai.", meaning: "Aku tidak ingin bekerja seumur hidup, inginnya main terus." },
              { jp: "ブラック企業では絶対に働きたくない。", kana: "ぶらっく きぎょう で は ぜったい に はたらきたくない。", romaji: "Burakku kigyou de wa zettai ni hatarakitakunai.", meaning: "Aku mutlak tidak ingin bekerja di perusahaan yang eksploitatif (black company)." },
              { jp: "休みの日にまで働きたくない。", kana: "やすみ の ひ に まで はたらきたくない。", romaji: "Yasumi no hi ni made hatarakitakunai.", meaning: "Bahkan sampai hari libur pun aku tidak ingin bekerja." },
              { jp: "給料が安い仕事は働きたくない。", kana: "きゅうりょう が やすい しごと は はたらきたくない。", romaji: "Kyuuryou ga yasui shigoto wa hatarakitakunai.", meaning: "Aku tidak ingin melakukan pekerjaan yang gajinya murah." },
              { jp: "嫌いな上司の下で働きたくない。", kana: "きらいな じょうし の した で はたらきたくない。", romaji: "Kiraina joushi no shita de hatarakitakunai.", meaning: "Aku tidak ingin bekerja di bawah bos yang aku benci." },
              { jp: "もうこれ以上、残業して働きたくない。", kana: "もう これいじょう、 ざんぎょう して はたらきたくない。", romaji: "Mou kore ijou, zangyou shite hatarakitakunai.", meaning: "Aku sudah tidak ingin bekerja lembur lebih dari ini." },
              { jp: "人と関わる仕事では働きたくない。", kana: "ひと と かかわる しごと で は はたらきたくない。", romaji: "Hito to kakawaru shigoto de wa hatarakitakunai.", meaning: "Aku tidak ingin bekerja di pekerjaan yang (terus) berhubungan dengan orang." },
              { jp: "できるなら、一生家で寝て働きたくない。", kana: "できる なら、 いっしょう いえ で ねて はたらきたくない。", romaji: "Dekiru nara, isshou ie de nete hatarakitakunai.", meaning: "Kalau bisa, aku tidak ingin bekerja dan rebahan aja di rumah seumur hidup." }
            ]
          }]
        },
        {
          name: "Ichidan",
          examples: [{
            base: "起きる",
            transformed: "起きたくない",
            kana: "おきる → おきたくない",
            romaji: "okiru → okitakunai",
            meaning: "tidak ingin bangun",
            sentences: [
              { jp: "寒い朝は、ベッドから起きたくない。", kana: "さむい あさ は、 べっど から おきたくない。", romaji: "Samui asa wa, beddo kara okitakunai.", meaning: "Di pagi yang dingin, aku tidak ingin bangun dari kasur." },
              { jp: "休日はお昼まで起きたくない。", kana: "きゅうじつ は おひる まで おきたくない。", romaji: "Kyuujitsu wa ohiru made okitakunai.", meaning: "Di hari libur, aku tidak ingin bangun sampai siang." },
              { jp: "まだ眠いから、起きたくない。", kana: "まだ ねむい から、 おきたくない。", romaji: "Mada nemui kara, okitakunai.", meaning: "Karena masih ngantuk, aku tidak ingin bangun." },
              { jp: "月曜日の朝は一番起きたくない。", kana: "げつようび の あさ は いちばん おきたくない。", romaji: "Getsuyoubi no asa wa ichiban okitakunai.", meaning: "Pagi hari Senin adalah saat aku paling tidak ingin bangun." },
              { jp: "学校に行きたくないから、起きたくない。", kana: "がっこう に いきたくない から、 おきたくない。", romaji: "Gakkou ni ikitakunai kara, okitakunai.", meaning: "Karena tidak ingin ke sekolah, aku jadi tidak ingin bangun." },
              { jp: "アラームが鳴っても、起きたくない。", kana: "あらーむ が なっても、 おきたくない。", romaji: "Araamu ga nattemo, okitakunai.", meaning: "Walaupun alarm bunyi, aku tidak ingin bangun." },
              { jp: "ずっとこの布団の中で起きたくない。", kana: "ずっと この ふとん の なか で おきたくない。", romaji: "Zutto kono futon no naka de okitakunai.", meaning: "Aku tidak ingin bangun dan mau terus di dalam selimut ini." },
              { jp: "昨日は夜更かししたから、今日は早く起きたくない。", kana: "きのう は よふかし した から、 きょう は はやく おきたくない。", romaji: "Kinou wa yofukashi shita kara, kyou wa hayaku okitakunai.", meaning: "Karena kemarin begadang, hari ini aku tidak ingin bangun cepat." },
              { jp: "雨の音がすると、起きたくない。", kana: "あめ の おと が する と、 おきたくない。", romaji: "Ame no oto ga suru to, okitakunai.", meaning: "Kalau terdengar suara hujan, bawaannya tidak ingin bangun." },
              { jp: "嫌な夢を見たから、もう起きたくない。", kana: "いやな ゆめ を みた から、 もう おきたくない。", romaji: "Iyana yume o mita kara, mou okitakunai.", meaning: "Karena habis mimpi buruk, rasanya aku jadi tidak ingin bangun lagi." }
            ]
          }]
        },
        {
          name: "Irregular",
          examples: [{
            base: "失敗する",
            transformed: "失敗したくない",
            kana: "しっぱいする → しっぱいしたくない",
            romaji: "shippai suru → shippai shitakunai",
            meaning: "tidak ingin gagal / berbuat salah",
            sentences: [
              { jp: "大切な試験だから、絶対に失敗したくない。", kana: "たいせつ な しけん だから、 ぜったい に しっぱいしたくない。", romaji: "Taisetsu na shiken dakara, zettai ni shippai shitakunai.", meaning: "Karena ini ujian penting, mutlak tidak ingin gagal." },
              { jp: "初めてのデートで失敗したくない。", kana: "はじめて の でーと で しっぱいしたくない。", romaji: "Hajimete no deeto de shippai shitakunai.", meaning: "Aku tidak ingin melakukan kesalahan di kencan pertama." },
              { jp: "仕事でミスをして、失敗したくない。", kana: "しごと で みす を して、 しっぱいしたくない。", romaji: "Shigoto de misu o shite, shippai shitakunai.", meaning: "Aku tidak ingin gagal dengan melakukan kesalahan di pekerjaan." },
              { jp: "誰も失敗したくないと思っている。", kana: "だれ も しっぱいしたくない と おもっている。", romaji: "Dare mo shippai shitakunai to omotte iru.", meaning: "Semua orang juga berpikir tidak ingin gagal." },
              { jp: "人生で失敗したくないから、慎重に選ぶ。", kana: "じんせい で しっぱいしたくない から、 しんちょう に えらぶ。", romaji: "Jinsei de shippai shitakunai kara, shinchou ni erabu.", meaning: "Karena tidak ingin gagal dalam hidup, aku memilih dengan hati-hati." },
              { jp: "プレゼンで失敗したくないので、たくさん練習する。", kana: "ぷれぜん で しっぱいしたくない ので、 たくさん れんしゅう する。", romaji: "Purezen de shippai shitakunai node, takusan renshuu suru.", meaning: "Karena tidak ingin gagal saat presentasi, aku banyak berlatih." },
              { jp: "同じことで二度も失敗したくない。", kana: "おなじ こと で にど も しっぱいしたくない。", romaji: "Onaji koto de nido mo shippai shitakunai.", meaning: "Aku tidak ingin gagal dua kali karena hal yang sama." },
              { jp: "後悔するような失敗したくない。", kana: "こうかい する ような しっぱいしたくない。", romaji: "Koukai suru youna shippai shitakunai.", meaning: "Aku tidak ingin melakukan kegagalan yang bakal bikin aku menyesal." },
              { jp: "高い買い物だから、失敗したくない。", kana: "たかい かいもの だから、 しっぱいしたくない。", romaji: "Takai kaimono dakara, shippai shitakunai.", meaning: "Karena ini barang mahal, aku tidak ingin salah pilih (gagal)." },
              { jp: "料理で失敗したくないから、レシピをちゃんと見る。", kana: "りょうり で しっぱいしたくない から、 れしぴ を ちゃんと みる。", romaji: "Ryouri de shippai shitakunai kara, reshipi o chanto miru.", meaning: "Karena tidak ingin gagal dalam memasak, aku lihat resepnya baik-baik." }
            ]
          }]
        }
      ]
    },
	{
      id: "vf-37",
      level: "N4",
      order: 37,
      title: "~たいです • Keinginan Sopan",
      summary: "Keinginan Sopan (N4). Bentuk formal dari '~たい'. Digunakan untuk menyatakan keinginan diri sendiri dengan sopan kepada orang yang belum akrab, guru, atau atasan.",
      formulas: [
        { group: "Godan", rule: "Ubah vokal akhir deretan 'u' menjadi 'i', lalu tambah たいです. Contoh: 飲む → 飲み → 飲みたいです." },
        { group: "Ichidan", rule: "Hilangkan 'る' (ru) di akhir, ganti dengan たいです. Contoh: 食べる → 食べたいです." },
        { group: "Irregular", rule: "する → したいです, 来る (くる) → 来たいです (きたいです). Contoh: 勉強する → 勉強したいです." }
      ],
      groups: [
        {
          name: "Godan",
          examples: [{
            base: "飲む",
            transformed: "飲みたいです",
            kana: "のむ → のみたいです",
            romaji: "nomu → nomitai desu",
            meaning: "ingin minum (sopan)",
            sentences: [
              { jp: "暑いので、冷たいジュースが飲みたいです。", kana: "あつい ので、 つめたい じゅーす が のみたいです。", romaji: "Atsui node, tsumetai juusu ga nomitai desu.", meaning: "Karena panas, saya ingin minum jus dingin." },
              { jp: "食後に温かいお茶を飲みたいです。", kana: "しょくご に あたたかい おちゃ を のみたいです。", romaji: "Shokugo ni atatakai ocha o nomitai desu.", meaning: "Setelah makan, saya ingin minum teh hangat." },
              { jp: "タピオカミルクティーが飲みたいです。", kana: "たぴおか みるくてぃー が のみたいです。", romaji: "Tapioka miruku tii ga nomitai desu.", meaning: "Saya ingin minum boba milk tea." },
              { jp: "疲れたので、甘いコーヒーを飲みたいです。", kana: "つかれた ので、 あまい こーひー を のみたいです。", romaji: "Tsukareta node, amai koohii o nomitai desu.", meaning: "Karena lelah, saya ingin minum kopi manis." },
              { jp: "日本の美味しいお酒を飲みたいです。", kana: "にほん の おいしい おさけ を のみたいです。", romaji: "Nihon no oishii osake o nomitai desu.", meaning: "Saya ingin minum sake Jepang yang enak." },
              { jp: "喉が渇いたので、早く水を飲みたいです。", kana: "のど が かわいた ので、 はやく みず を のみたいです。", romaji: "Nodo ga kawaita node, hayaku mizu o nomitai desu.", meaning: "Karena haus, saya ingin cepat minum air." },
              { jp: "カフェで抹茶ラテが飲みたいです。", kana: "かふぇ で まっちゃ らて が のみたいです。", romaji: "Kafe de maccha rate ga nomitai desu.", meaning: "Saya ingin minum matcha latte di kafe." },
              { jp: "あの新しいお店のスープを飲みたいです。", kana: "あの あたらしい おみせ の すーぷ を のみたいです。", romaji: "Ano atarashii omise no suupu o nomitai desu.", meaning: "Saya ingin minum sup dari toko baru itu." },
              { jp: "仕事の後に、ビールを飲みたいです。", kana: "しごと の あと に、 びーる を のみたいです。", romaji: "Shigoto no ato ni, biiru o nomitai desu.", meaning: "Setelah bekerja, saya ingin minum bir." },
              { jp: "朝起きたら、まず牛乳を飲みたいです。", kana: "あさ おきたら、 まず ぎゅうにゅう を のみたいです。", romaji: "Asa okitara, mazu gyuunyuu o nomitai desu.", meaning: "Saat bangun pagi, pertama-tama saya ingin minum susu." }
            ]
          }]
        },
        {
          name: "Ichidan",
          examples: [{
            base: "食べる",
            transformed: "食べたいです",
            kana: "たべる → たべたいです",
            romaji: "taberu → tabetai desu",
            meaning: "ingin makan (sopan)",
            sentences: [
              { jp: "日本に行ったら、お寿司を食べたいです。", kana: "にほん に いったら、 おすし を たべたいです。", romaji: "Nihon ni ittara, osushi o tabetai desu.", meaning: "Kalau pergi ke Jepang, saya ingin makan sushi." },
              { jp: "今日はラーメンが食べたいです。", kana: "きょう は らーめん が たべたいです。", romaji: "Kyou wa raamen ga tabetai desu.", meaning: "Hari ini saya ingin makan ramen." },
              { jp: "甘いケーキを食べたいです。", kana: "あまい けーき を たべたいです。", romaji: "Amai keeki o tabetai desu.", meaning: "Saya ingin makan kue yang manis." },
              { jp: "お腹が空いたので、たくさん食べたいです。", kana: "おなか が すいた ので、 たくさん たべたいです。", romaji: "Onaka ga suita node, takusan tabetai desu.", meaning: "Karena lapar, saya ingin makan yang banyak." },
              { jp: "有名なレストランで食事を食べたいです。", kana: "ゆうめい な れすとらん で しょくじ を たべたいです。", romaji: "Yuumei na resutoran de shokuji o tabetai desu.", meaning: "Saya ingin makan hidangan di restoran terkenal." },
              { jp: "母が作った料理を食べたいです。", kana: "はは が つくった りょうり を たべたいです。", romaji: "Haha ga tsukutta ryouri o tabetai desu.", meaning: "Saya ingin makan masakan buatan ibu." },
              { jp: "辛いものが食べたいです。", kana: "からい もの が たべたいです。", romaji: "Karai mono ga tabetai desu.", meaning: "Saya ingin makan makanan pedas." },
              { jp: "ダイエット中ですが、お菓子を食べたいです。", kana: "だいえっとちゅう です が、 おかし を たべたいです。", romaji: "Daiettochuu desu ga, okashi o tabetai desu.", meaning: "Walaupun sedang diet, saya ingin makan camilan." },
              { jp: "新鮮な魚を食べたいです。", kana: "しんせんな さかな を たべたいです。", romaji: "Shinsenna sakana o tabetai desu.", meaning: "Saya ingin makan ikan yang segar." },
              { jp: "お祭りでたこ焼きを食べたいです。", kana: "おまつり で たこやき を たべたいです。", romaji: "Omatsuri de takoyaki o tabetai desu.", meaning: "Saya ingin makan takoyaki di festival." }
            ]
          }]
        },
        {
          name: "Irregular",
          examples: [{
            base: "勉強する",
            transformed: "勉強したいです",
            kana: "べんきょうする → べんきょうしたいです",
            romaji: "benkyou suru → benkyou shitai desu",
            meaning: "ingin belajar (sopan)",
            sentences: [
              { jp: "もっと日本語を勉強したいです。", kana: "もっと にほんご を べんきょうしたいです。", romaji: "Motto nihongo o benkyou shitai desu.", meaning: "Saya ingin belajar bahasa Jepang lebih banyak lagi." },
              { jp: "大学で経済を勉強したいです。", kana: "だいがく で けいざい を べんきょうしたいです。", romaji: "Daigaku de keizai o benkyou shitai desu.", meaning: "Saya ingin belajar ekonomi di universitas." },
              { jp: "将来のために、英語を勉強したいです。", kana: "しょうらい の ため に、 えいご を べんきょうしたいです。", romaji: "Shourai no tame ni, eigo o benkyou shitai desu.", meaning: "Demi masa depan, saya ingin belajar bahasa Inggris." },
              { jp: "プログラミングを勉強したいです。", kana: "ぷろぐらみんぐ を べんきょうしたいです。", romaji: "Puroguramingu o benkyou shitai desu.", meaning: "Saya ingin belajar pemrograman." },
              { jp: "日本の文化について勉強したいです。", kana: "にほん の ぶんか に ついて べんきょうしたいです。", romaji: "Nihon no bunka ni tsuite benkyou shitai desu.", meaning: "Saya ingin belajar tentang budaya Jepang." },
              { jp: "静かな図書館で勉強したいです。", kana: "しずかな としょかん で べんきょうしたいです。", romaji: "Shizukana toshokan de benkyou shitai desu.", meaning: "Saya ingin belajar di perpustakaan yang tenang." },
              { jp: "新しいスキルを勉強したいです。", kana: "あたらしい すきる を べんきょうしたいです。", romaji: "Atarashii sukiru o benkyou shitai desu.", meaning: "Saya ingin belajar keterampilan baru." },
              { jp: "先生から直接勉強したいです。", kana: "せんせい から ちょくせつ べんきょうしたいです。", romaji: "Sensei kara chokusetsu benkyou shitai desu.", meaning: "Saya ingin belajar langsung dari guru." },
              { jp: "留学して、海外で勉強したいです。", kana: "りゅうがく して、 かいがい で べんきょうしたいです。", romaji: "Ryuugaku shite, kaigai de benkyou shitai desu.", meaning: "Saya ingin bersekolah ke luar negeri dan belajar di sana." },
              { jp: "休日は自分のために勉強したいです。", kana: "きゅうじつ は じぶん の ため に べんきょうしたいです。", romaji: "Kyuujitsu wa jibun no tame ni benkyou shitai desu.", meaning: "Di hari libur, saya ingin belajar untuk diri saya sendiri." }
            ]
          }]
        }
      ]
    },
    {
      id: "vf-38",
      level: "N4",
      order: 38,
      title: "~たくないです • Tidak Ingin Sopan",
      summary: "Tidak Ingin Sopan (N4). Bentuk negatif formal dari '~たいです'. Digunakan untuk menyatakan keengganan atau penolakan dengan sopan. Sering dipakai di lingkungan kerja atau dengan orang yang belum terlalu dekat.",
      formulas: [
        { group: "Godan", rule: "Dari bentuk '~たい', ubah akhiran 'い' (i) menjadi 'くないです'. Contoh: 行きたい → 行きたくないです." },
        { group: "Ichidan", rule: "Ubah 'い' menjadi 'くないです'. Contoh: 負けたい → 負けたくないです." },
        { group: "Irregular", rule: "したい → したくないです, 来たい → 来たくないです. Contoh: 残業したい → 残業したくないです." }
      ],
      groups: [
        {
          name: "Godan",
          examples: [{
            base: "行く",
            transformed: "行きたくないです",
            kana: "いく → いきたくないです",
            romaji: "iku → ikitakunai desu",
            meaning: "tidak ingin pergi (sopan)",
            sentences: [
              { jp: "今日は疲れているので、どこにも行きたくないです。", kana: "きょう は つかれている ので、 どこ に も いきたくないです。", romaji: "Kyou wa tsukarete iru node, doko ni mo ikitakunai desu.", meaning: "Karena hari ini lelah, saya tidak ingin pergi ke mana pun." },
              { jp: "明日の飲み会には行きたくないです。", kana: "あした の のみかい に は いきたくないです。", romaji: "Ashita no nomikai ni wa ikitakunai desu.", meaning: "Saya tidak ingin pergi ke acara minum-minum besok." },
              { jp: "雨が降っているので、外へ行きたくないです。", kana: "あめ が ふって いる ので、 そと へ いきたくないです。", romaji: "Ame ga futte iru node, soto e ikitakunai desu.", meaning: "Karena sedang hujan, saya tidak ingin pergi ke luar." },
              { jp: "あの場所には二度と行きたくないです。", kana: "あの ばしょ に は にど と いきたくないです。", romaji: "Ano basho ni wa nido to ikitakunai desu.", meaning: "Saya tidak ingin pergi ke tempat itu untuk kedua kalinya." },
              { jp: "人が多いところへは行きたくないです。", kana: "ひと が おおい ところ へ は いきたくないです。", romaji: "Hito ga ooi tokoro e wa ikitakunai desu.", meaning: "Saya tidak ingin pergi ke tempat yang banyak orangnya." },
              { jp: "危険な国には行きたくないです。", kana: "きけんな くに に は いきたくないです。", romaji: "Kikenna kuni ni wa ikitakunai desu.", meaning: "Saya tidak ingin pergi ke negara yang berbahaya." },
              { jp: "一人では行きたくないです。", kana: "ひとり で は いきたくないです。", romaji: "Hitori de wa ikitakunai desu.", meaning: "Saya tidak ingin pergi sendirian." },
              { jp: "遠いので、あまり行きたくないです。", kana: "とおい ので、 あまり いきたくないです。", romaji: "Tooi node, amari ikitakunai desu.", meaning: "Karena jauh, saya tidak terlalu ingin pergi." },
              { jp: "日曜日は会社に行きたくないです。", kana: "にちようび は かいしゃ に いきたくないです。", romaji: "Nichiyoubi wa kaisha ni ikitakunai desu.", meaning: "Di hari Minggu saya tidak ingin pergi ke kantor." },
              { jp: "誘われましたが、本当は行きたくないです。", kana: "さそわれました が、 ほんとう は いきたくないです。", romaji: "Sasowaremashita ga, hontou wa ikitakunai desu.", meaning: "Saya memang diajak, tapi sebenarnya saya tidak ingin pergi." }
            ]
          }]
        },
        {
          name: "Ichidan",
          examples: [{
            base: "負ける",
            transformed: "負けたくないです",
            kana: "まける → まけたくないです",
            romaji: "makeru → maketakunai desu",
            meaning: "tidak ingin kalah (sopan)",
            sentences: [
              { jp: "明日の試合、絶対に負けたくないです。", kana: "あした の しあい、 ぜったい に まけたくないです。", romaji: "Ashita no shiai, zettai ni maketakunai desu.", meaning: "Pertandingan besok, saya mutlak tidak ingin kalah." },
              { jp: "ライバルには負けたくないです。", kana: "らいばる に は まけたくないです。", romaji: "Raibaru ni wa maketakunai desu.", meaning: "Saya tidak ingin kalah dari saingan saya." },
              { jp: "自分自身に負けたくないです。", kana: "じぶん じしん に まけたくないです。", romaji: "Jibun jishin ni maketakunai desu.", meaning: "Saya tidak ingin kalah dari diri saya sendiri." },
              { jp: "これだけ練習したから、負けたくないです。", kana: "これだけ れんしゅう した から、 まけたくないです。", romaji: "Koredake renshuu shita kara, maketakunai desu.", meaning: "Karena sudah berlatih sejauh ini, saya tidak ingin kalah." },
              { jp: "あのチームには、どうしても負けたくないです。", kana: "あの ちーむ に は、 どうしても まけたくないです。", romaji: "Ano chiimu ni wa, doushitemo maketakunai desu.", meaning: "Dengan tim itu, mau bagaimana pun saya tidak ingin kalah." },
              { jp: "ゲームでも負けたくないです。", kana: "げーむ で も まけたくないです。", romaji: "Geemu demo maketakunai desu.", meaning: "Dalam permainan pun saya tidak ingin kalah." },
              { jp: "テストの点数で友達に負けたくないです。", kana: "てすと の てんすう で ともだち に まけたくないです。", romaji: "Tesuto no tensuu de tomodachi ni maketakunai desu.", meaning: "Saya tidak ingin kalah dari teman dalam hal nilai ujian." },
              { jp: "最後まで負けたくないです。", kana: "さいご まで まけたくないです。", romaji: "Saigo made maketakunai desu.", meaning: "Saya tidak ingin kalah sampai akhir." },
              { jp: "どんな勝負でも負けたくないです。", kana: "どんな しょうぶ でも まけたくないです。", romaji: "Donna shoubu demo maketakunai desu.", meaning: "Dalam pertandingan macam apa pun saya tidak ingin kalah." },
              { jp: "後輩には負けたくないです。", kana: "こうはい に は まけたくないです。", romaji: "Kouhai ni wa maketakunai desu.", meaning: "Saya tidak ingin kalah dari junior." }
            ]
          }]
        },
        {
          name: "Irregular",
          examples: [{
            base: "残業する",
            transformed: "残業したくないです",
            kana: "ざんぎょうする → ざんぎょうしたくないです",
            romaji: "zangyou suru → zangyou shitakunai desu",
            meaning: "tidak ingin lembur (sopan)",
            sentences: [
              { jp: "今日は金曜日なので、残業したくないです。", kana: "きょう は きんようび なので、 ざんぎょうしたくないです。", romaji: "Kyou wa kinyoubi nanode, zangyou shitakunai desu.", meaning: "Karena hari ini Jumat, saya tidak ingin lembur." },
              { jp: "毎日遅くまで残業したくないです。", kana: "まいにち おそく まで ざんぎょうしたくないです。", romaji: "Mainichi osoku made zangyou shitakunai desu.", meaning: "Saya tidak ingin lembur sampai malam setiap hari." },
              { jp: "約束があるので、今日は絶対に残業したくないです。", kana: "やくそく が ある ので、 きょう は ぜったい に ざんぎょうしたくないです。", romaji: "Yakusoku ga aru node, kyou wa zettai ni zangyou shitakunai desu.", meaning: "Karena ada janji, hari ini saya mutlak tidak ingin lembur." },
              { jp: "疲れている時は、無理して残業したくないです。", kana: "つかれている とき は、 むり して ざんぎょうしたくないです。", romaji: "Tsukarete iru toki wa, muri shite zangyou shitakunai desu.", meaning: "Saat sedang lelah, saya tidak ingin memaksakan diri untuk lembur." },
              { jp: "休みの前日は残業したくないです。", kana: "やすみ の ぜんじつ は ざんぎょうしたくないです。", romaji: "Yasumi no zenjitsu wa zangyou shitakunai desu.", meaning: "Saya tidak ingin lembur di hari sebelum hari libur." },
              { jp: "給料が出ないなら、残業したくないです。", kana: "きゅうりょう が でない なら、 ざんぎょうしたくないです。", romaji: "Kyuuryou ga denai nara, zangyou shitakunai desu.", meaning: "Kalau tidak digaji, saya tidak ingin lembur." },
              { jp: "自分の時間を大切にしたいので、残業したくないです。", kana: "じぶん の じかん を たいせつ に したい ので、 ざんぎょうしたくないです。", romaji: "Jibun no jikan o taisetsu ni shitai node, zangyou shitakunai desu.", meaning: "Karena ingin menghargai waktu pribadi, saya tidak ingin lembur." },
              { jp: "できるだけ残業したくないです。", kana: "できるだけ ざんぎょうしたくないです。", romaji: "Dekirudake zangyou shitakunai desu.", meaning: "Sebisa mungkin saya tidak ingin lembur." },
              { jp: "体調が悪いので、残業したくないです。", kana: "たいちょう が わるい ので、 ざんぎょうしたくないです。", romaji: "Taichou ga warui node, zangyou shitakunai desu.", meaning: "Karena kondisi badan sedang buruk, saya tidak ingin lembur." },
              { jp: "早く家に帰りたいので、残業したくないです。", kana: "はやく いえ に かえりたい ので、 ざんぎょうしたくないです。", romaji: "Hayaku ie ni kaeritai node, zangyou shitakunai desu.", meaning: "Karena ingin cepat pulang ke rumah, saya tidak ingin lembur." }
            ]
          }]
        }
      ]
    },
    {
      id: "vf-39",
      level: "N4",
      order: 39,
      title: "~たかった • Keinginan Lampau",
      summary: "Keinginan Lampau (N4). Digunakan untuk menyatakan sesuatu yang tadinya kita inginkan di masa lalu, terlepas dari apakah hal itu akhirnya terwujud atau tidak. Ini adalah bentuk kasual yang sering dipakai mengobrol dengan teman.",
      formulas: [
        { group: "Godan", rule: "Dari bentuk '~たい', ubah akhiran 'い' (i) menjadi 'かった'. Contoh: 買いたい → 買いたかった." },
        { group: "Ichidan", rule: "Dari bentuk '~たい', ubah akhiran 'い' (i) menjadi 'かった'. Contoh: 見たい → 見たかった." },
        { group: "Irregular", rule: "したい → したかった, 来たい → 来たかった. Contoh: 参加したい → 参加したかった." }
      ],
      groups: [
        {
          name: "Godan",
          examples: [{
            base: "買う",
            transformed: "買いたかった",
            kana: "かう → かいたかった",
            romaji: "kau → kaitakatta",
            meaning: "tadinya ingin membeli",
            sentences: [
              { jp: "あの限定の靴、買いたかったなあ。", kana: "あの げんてい の くつ、 かいたかった なあ。", romaji: "Ano gentei no kutsu, kaitakatta naa.", meaning: "Sepatu edisi terbatas itu, tadinya aku pengen beli." },
              { jp: "セールでこのバッグを買いたかったけど、売り切れだった。", kana: "せーる で この ばっぐ を かいたかった けど、 うりきれ だった。", romaji: "Seeru de kono baggu o kaitakatta kedo, urikire datta.", meaning: "Tadinya pengen beli tas ini pas diskon, tapi udah kehabisan." },
              { jp: "本当は別のパソコンを買いたかった。", kana: "ほんとう は べつ の ぱそこん を かいたかった。", romaji: "Hontou wa betsu no pasokon o kaitakatta.", meaning: "Sebenarnya aku tadinya ingin beli komputer yang lain." },
              { jp: "子どもの頃、このおもちゃがずっと買いたかった。", kana: "こども の ころ、 この おもちゃ が ずっと かいたかった。", romaji: "Kodomo no koro, kono omocha ga zutto kaitakatta.", meaning: "Waktu kecil, aku terus-terusan ingin beli mainan ini." },
              { jp: "お金がなくて買えなかったけど、本当は買いたかった。", kana: "おかね が なくて かえなかった けど、 ほんとう は かいたかった。", romaji: "Okane ga nakute kaenakatta kedo, hontou wa kaitakatta.", meaning: "Walaupun nggak bisa beli karena nggak ada uang, sebenarnya aku tadinya pengen beli." },
              { jp: "昨日のケーキ、もっとたくさん買いたかった。", kana: "きのう の けーき、 もっと たくさん かいたかった。", romaji: "Kinou no keeki, motto takusan kaitakatta.", meaning: "Kue kemarin, tadinya aku ingin beli lebih banyak." },
              { jp: "ずっと前からこの車を買いたかったんだ。", kana: "ずっと まえ から この くるま を かいたかった ん だ。", romaji: "Zutto mae kara kono kuruma o kaitakatta n da.", meaning: "Aku tadinya udah pengen beli mobil ini sejak lama lho." },
              { jp: "新しいスマホを買いたかったのに、落として壊したから修理代になっちゃった。", kana: "あたらしい すまほ を かいたかった のに、 おとして こわした から しゅうりだい に なっちゃった。", romaji: "Atarashii sumaho o kaitakatta noni, otoshite kowashita kara shuuridai ni nacchatta.", meaning: "Padahal tadinya pengen beli HP baru, karena jatuh dan rusak uangnya malah kepakai buat biaya servis deh." },
              { jp: "お土産にあのクッキーを買いたかったな。", kana: "おみやげ に あの くっきー を かいたかった な。", romaji: "Omiyage ni ano kukkii o kaitakatta na.", meaning: "Tadinya pengen beli kue kering itu buat oleh-oleh." },
              { jp: "もっと早く買いたかった。", kana: "もっと はやく かいたかった。", romaji: "Motto hayaku kaitakatta.", meaning: "Tadinya aku ingin beli lebih cepat." }
            ]
          }]
        },
        {
          name: "Ichidan",
          examples: [{
            base: "見る",
            transformed: "見たかった",
            kana: "みる → みたかった",
            romaji: "miru → mitakatta",
            meaning: "tadinya ingin melihat/menonton",
            sentences: [
              { jp: "昨日のドラマ、最後まで見たかった。", kana: "きのう の どらま、 さいご まで みたかった。", romaji: "Kinou no dorama, saigo made mitakatta.", meaning: "Drama kemarin, tadinya pengen kunonton sampai akhir." },
              { jp: "あの映画、映画館で見たかったな。", kana: "あの えいが、 えいがかん で みたかった な。", romaji: "Ano eiga, eigakan de mitakatta na.", meaning: "Film itu, tadinya pengen nonton di bioskop." },
              { jp: "桜が満開の時を見たかった。", kana: "さくら が まんかい の とき を みたかった。", romaji: "Sakura ga mankai no toki o mitakatta.", meaning: "Tadinya aku ingin melihat saat sakura sedang mekar penuh." },
              { jp: "君のドレス姿を見たかったよ。", kana: "きみ の どれす すがた を みたかった よ。", romaji: "Kimi no doresu sugata o mitakatta yo.", meaning: "Tadinya aku ingin melihat penampilanmu memakai gaun lho." },
              { jp: "本当はそのライブ、私も見たかった。", kana: "ほんとう は その らいぶ、 わたし も みたかった。", romaji: "Hontou wa sono raibu, watashi mo mitakatta.", meaning: "Sebenarnya aku juga tadinya ingin nonton konser itu." },
              { jp: "あの珍しい鳥を見たかったのに、逃げられた。", kana: "あの めずらしい とり を みたかった のに、 にげられた。", romaji: "Ano mezurashii tori o mitakatta noni, nigerareta.", meaning: "Padahal tadinya ingin melihat burung langka itu, tapi malah kabur." },
              { jp: "花火、もっと近くで見たかったな。", kana: "はなび、 もっと ちかく で みたかった な。", romaji: "Hanabi, motto chikaku de mitakatta na.", meaning: "Kembang apinya, tadinya pengen lihat dari lebih dekat." },
              { jp: "先生の若い頃の写真、見たかった。", kana: "せんせい の わかい ころ の しゃしん、 みたかった。", romaji: "Sensei no wakai koro no shashin, mitakatta.", meaning: "Tadinya aku ingin melihat foto guru sewaktu masih muda." },
              { jp: "試合に勝つ瞬間を見たかった。", kana: "しあい に かつ しゅんかん を みたかった。", romaji: "Shiai ni katsu shunkan o mitakatta.", meaning: "Tadinya aku ingin melihat momen saat menang pertandingannya." },
              { jp: "もっと早くそのニュースを見たかった。", kana: "もっと はやく その にゅーす を みたかった。", romaji: "Motto hayaku sono nyuusu o mitakatta.", meaning: "Tadinya aku ingin melihat berita itu lebih cepat." }
            ]
          }]
        },
        {
          name: "Irregular",
          examples: [{
            base: "参加する",
            transformed: "参加したかった",
            kana: "さんかする → さんかしたかった",
            romaji: "sanka suru → sanka shitakatta",
            meaning: "tadinya ingin ikut/berpartisipasi",
            sentences: [
              { jp: "昨日のパーティー、私も参加したかった。", kana: "きのう の ぱーてぃー、 わたし も さんかしたかった。", romaji: "Kinou no paatii, watashi mo sanka shitakatta.", meaning: "Pesta kemarin, aku juga tadinya pengen ikutan." },
              { jp: "風邪で行けなかったけど、本当は旅行に参加したかった。", kana: "かぜ で いけなかった けど、 ほんとう は りょこう に さんかしたかった。", romaji: "Kaze de ikenakatta kedo, hontou wa ryokou ni sanka shitakatta.", meaning: "Meskipun nggak bisa pergi karena flu, sebenarnya aku tadinya ingin ikut liburannya." },
              { jp: "時間があれば、そのイベントに参加したかった。", kana: "じかん が あれば、 その いべんと に さんかしたかった。", romaji: "Jikan ga areba, sono ibento ni sanka shitakatta.", meaning: "Kalau ada waktu, aku tadinya ingin ikut acara itu." },
              { jp: "大会に参加したかったのに、怪我をしてしまった。", kana: "たいかい に さんかしたかった のに、 けが を して しまった。", romaji: "Taikai ni sanka shitakatta noni, kega o shite shimatta.", meaning: "Padahal tadinya ingin berpartisipasi di turnamen, tapi malah terluka." },
              { jp: "もっと早く知っていれば、ボランティアに参加したかった。", kana: "もっと はやく しって いれば、 ぼらんてぃあ に さんかしたかった。", romaji: "Motto hayaku shitte ireba, borantia ni sanka shitakatta.", meaning: "Kalau aku tahu lebih awal, tadinya aku ingin ikut acara relawannya." },
              { jp: "コンテストに参加したかったけど、自信がなかった。", kana: "こんてすと に さんかしたかった けど、 じしん が なかった。", romaji: "Kontesuto ni sanka shitakatta kedo, jishin ga nakatta.", meaning: "Tadinya ingin ikut kontesnya, tapi aku nggak punya rasa percaya diri." },
              { jp: "学生時代に、留学プログラムに参加したかった。", kana: "がくせい じだい に、 りゅうがく ぷろぐらむ に さんかしたかった。", romaji: "Gakusei jidai ni, ryuugaku puroguramu ni sanka shitakatta.", meaning: "Sewaktu masa sekolah, tadinya aku ingin ikut program pertukaran pelajar." },
              { jp: "その会議に私も参加したかったです。(Bentuk sopan: ~したかったです)", kana: "その かいぎ に わたし も さんかしたかったです。", romaji: "Sono kaigi ni watashi mo sanka shitakatta desu.", meaning: "Di rapat itu, saya juga tadinya ingin ikut serta. (Sopan)" },
              { jp: "オンラインじゃなくて、直接参加したかった。", kana: "おんらいん じゃなくて、 ちょくせつ さんかしたかった。", romaji: "Onrain janakute, chokusetsu sanka shitakatta.", meaning: "Bukan secara online, tadinya aku ingin berpartisipasi langsung." },
              { jp: "みんなと一緒にプロジェクトに参加したかったな。", kana: "みんな と いっしょ に ぷろじぇくと に さんかしたかった な。", romaji: "Minna to issho ni purojekuto ni sanka shitakatta na.", meaning: "Tadinya aku pengen ikut proyeknya bareng-bareng sama yang lain." }
            ]
          }]
        }
      ]
    },
    {
      id: "vf-40",
      level: "N4",
      order: 40,
      title: "~たくなかった • Tidak Ingin Lampau",
      summary: "Tidak Ingin Lampau (N4). Digunakan untuk menceritakan sesuatu yang 'sebenarnya tidak kita inginkan' di masa lalu, tetapi biasanya hal itu terlanjur atau terpaksa terjadi. Sering mengandung nuansa penyesalan atau ketidakrelaan.",
      formulas: [
        { group: "Godan", rule: "Dari bentuk '~たくない', ubah akhiran 'い' (i) menjadi 'かった'. Contoh: 言いたくない → 言いたくなかった." },
        { group: "Ichidan", rule: "Dari bentuk '~たくない', ubah akhiran 'い' (i) menjadi 'かった'. Contoh: 別れたくない → 別れたくなかった." },
        { group: "Irregular", rule: "したくない → したくなかった, 来たくない → 来たくなかった. Contoh: 喧嘩したくない → 喧嘩したくなかった." }
      ],
      groups: [
        {
          name: "Godan",
          examples: [{
            base: "言う",
            transformed: "言いたくなかった",
            kana: "いう → いいたくなかった",
            romaji: "iu → iitakunakatta",
            meaning: "sebenarnya tidak ingin bilang",
            sentences: [
              { jp: "本当は、この秘密を言いたくなかった。", kana: "ほんとう は、 この ひみつ を いいたくなかった。", romaji: "Hontou wa, kono himitsu o iitakunakatta.", meaning: "Sebenarnya, aku tidak ingin mengatakan rahasia ini." },
              { jp: "君を傷つけるようなこと、言いたくなかったんだ。", kana: "きみ を きずつける ような こと、 いいたくなかった ん だ。", romaji: "Kimi o kizutsukeru youna koto, iitakunakatta n da.", meaning: "Hal yang menyakitimu itu, sebenarnya aku tidak ingin mengatakannya lho." },
              { jp: "親に嘘は言いたくなかったけど、仕方なかった。", kana: "おや に うそ は いいたくなかった けど、 しかた なかった。", romaji: "Oya ni uso wa iitakunakatta kedo, shikata nakatta.", meaning: "Aku sebenarnya tidak ingin berbohong pada orang tua, tapi mau bagaimana lagi." },
              { jp: "あんなひどい言葉、言いたくなかった。", kana: "あんな ひどい ことば、 いいたくなかった。", romaji: "Anna hidoi kotoba, iitakunakatta.", meaning: "Kata-kata kasar seperti itu, sebenarnya tidak ingin aku ucapkan." },
              { jp: "文句を言いたくなかったけど、我慢できなかった。", kana: "もんく を いいたくなかった けど、 がまん できなかった。", romaji: "Monku o iitakunakatta kedo, gaman dekinakatta.", meaning: "Sebenarnya tidak ingin mengeluh, tapi aku tidak bisa menahannya." },
              { jp: "先生には言いたくなかった。", kana: "せんせい に は いいたくなかった。", romaji: "Sensei ni wa iitakunakatta.", meaning: "Tadinya aku tidak ingin bilang pada guru." },
              { jp: "別れようって、本当は言いたくなかった。", kana: "わかれよう って、 ほんとう は いいたくなかった。", romaji: "Wakareyou tte, hontou wa iitakunakatta.", meaning: "Ngomong 'ayo putus' itu, sebenarnya tidak ingin aku katakan." },
              { jp: "言い訳は言いたくなかった。", kana: "いいわけ は いいたくなかった。", romaji: "Iiwake wa iitakunakatta.", meaning: "Sebenarnya aku tidak ingin mencari-cari alasan (ngomong alasan)." },
              { jp: "みんなの前で弱音を言いたくなかった。", kana: "みんな の まえ で よわね を いいたくなかった。", romaji: "Minna no mae de yowane o iitakunakatta.", meaning: "Sebenarnya aku tidak ingin mengucapkan keluhan/rasa nyerah di depan semua orang." },
              { jp: "こんな結果になるなら、何も言いたくなかった。", kana: "こんな けっか に なる なら、 なにも いいたくなかった。", romaji: "Konna kekka ni naru nara, nanimo iitakunakatta.", meaning: "Kalau hasilnya bakal begini, sebenarnya aku tidak ingin ngomong apa-apa." }
            ]
          }]
        },
        {
          name: "Ichidan",
          examples: [{
            base: "別れる",
            transformed: "別れたくなかった",
            kana: "わかれる → わかれたくなかった",
            romaji: "wakareru → wakaretakunakatta",
            meaning: "sebenarnya tidak ingin berpisah/putus",
            sentences: [
              { jp: "本当は、君と別れたくなかった。", kana: "ほんとう は、 きみ と わかれたくなかった。", romaji: "Hontou wa, kimi to wakaretakunakatta.", meaning: "Sebenarnya, aku tidak ingin putus darimu." },
              { jp: "あの時は怒っていたけど、別れたくなかったんだ。", kana: "あの とき は おこって いた けど、 わかれたくなかった ん だ。", romaji: "Ano toki wa okotte ita kedo, wakaretakunakatta n da.", meaning: "Waktu itu aku memang marah, tapi sebenarnya aku tidak ingin putus lho." },
              { jp: "ずっと一緒にいたかったから、別れたくなかった。", kana: "ずっと いっしょ に いたかった から、 わかれたくなかった。", romaji: "Zutto issho ni itakatta kara, wakaretakunakatta.", meaning: "Karena aku ingin terus bersamamu, sebenarnya aku tidak ingin berpisah." },
              { jp: "友達と別れたくなかったから、泣いてしまった。", kana: "ともだち と わかれたくなかった から、 ないて しまった。", romaji: "Tomodachi to wakaretakunakatta kara, naite shimatta.", meaning: "Karena tidak ingin berpisah dari teman-teman, aku jadi menangis." },
              { jp: "卒業式の日、みんなと別れたくなかった。", kana: "そつぎょうしき の ひ、 みんな と わかれたくなかった。", romaji: "Sotsugyoushiki no hi, minna to wakaretakunakatta.", meaning: "Di hari kelulusan, aku sebenarnya tidak ingin berpisah dengan semuanya." },
              { jp: "遠距離になるから別れたけど、本当は別れたくなかった。", kana: "えんきょり に なる から わかれた けど、 ほんとう は わかれたくなかった。", romaji: "Enkyori ni naru kara wakareta kedo, hontou wa wakaretakunakatta.", meaning: "Kita putus karena bakal LDR, tapi sebenarnya aku tidak ingin putus." },
              { jp: "好きだったから、絶対に別れたくなかった。", kana: "すき だった から、 ぜったい に わかれたくなかった。", romaji: "Suki datta kara, zettai ni wakaretakunakatta.", meaning: "Karena aku menyukainya, mutlak tidak ingin putus." },
              { jp: "ペットが死んだとき、別れたくなかったと強く思った。", kana: "ぺっと が しんだ とき、 わかれたくなかった と つよく おもった。", romaji: "Petto ga shinda toki, wakaretakunakatta to tsuyoku omotta.", meaning: "Saat peliharaanku mati, aku sangat merasa tidak ingin berpisah." },
              { jp: "親元から離れて暮らすのは、別れたくなかったから寂しかった。", kana: "おやもと から はなれて くらす の は、 わかれたくなかった から さびしかった。", romaji: "Oyamoto kara hanarete kurasu no wa, wakaretakunakatta kara sabishikatta.", meaning: "Hidup berpisah dari orang tua itu, bikin kesepian karena tadinya aku tidak ingin berpisah." },
              { jp: "喧嘩別れなんて、したくなかった。(別れたくなかった)", kana: "けんかわかれ なんて、 したくなかった。(わかれたくなかった)", romaji: "Kenkawakare nante, shitakunakatta. (wakaretakunakatta)", meaning: "Putus karena berantem, aku sebenarnya tidak ingin berpisah seperti itu." }
            ]
          }]
        },
        {
          name: "Irregular",
          examples: [{
            base: "喧嘩する",
            transformed: "喧嘩したくなかった",
            kana: "けんかする → けんかしたくなかった",
            romaji: "kenka suru → kenka shitakunakatta",
            meaning: "sebenarnya tidak ingin bertengkar",
            sentences: [
              { jp: "本当は、君と喧嘩したくなかったんだ。", kana: "ほんとう は、 きみ と けんかしたくなかった ん だ。", romaji: "Hontou wa, kimi to kenka shitakunakatta n da.", meaning: "Sebenarnya, aku tidak ingin bertengkar denganmu lho." },
              { jp: "つまらないことで親と喧嘩したくなかった。", kana: "つまらない こと で おや と けんかしたくなかった。", romaji: "Tsumaranai koto de oya to kenka shitakunakatta.", meaning: "Aku sebenarnya tidak ingin bertengkar dengan orang tua karena hal sepele." },
              { jp: "仲良くしたかったから、喧嘩したくなかった。", kana: "なかよく したかった から、 けんかしたくなかった。", romaji: "Nakayoku shitakatta kara, kenka shitakunakatta.", meaning: "Karena tadinya ingin akur, aku sebenarnya tidak ingin berantem." },
              { jp: "楽しい旅行中に喧嘩したくなかった。", kana: "たのしい りょこうちゅう に けんかしたくなかった。", romaji: "Tanoshii ryokouchuu ni kenka shitakunakatta.", meaning: "Di tengah liburan yang menyenangkan, tadinya aku tidak ingin bertengkar." },
              { jp: "みんなの前で彼と喧嘩したくなかった。", kana: "みんな の まえ で かれ と けんかしたくなかった。", romaji: "Minna no mae de kare to kenka shitakunakatta.", meaning: "Tadinya aku tidak ingin bertengkar dengan dia di depan semua orang." },
              { jp: "お金の問題で家族と喧嘩したくなかった。", kana: "おかね の もんだい で かぞく と けんかしたくなかった。", romaji: "Okane no mondai de kazoku to kenka shitakunakatta.", meaning: "Sebenarnya tidak ingin bertengkar dengan keluarga karena masalah uang." },
              { jp: "昨日は疲れていて、誰とも喧嘩したくなかった。", kana: "きのう は つかれて いて、 だれ と も けんかしたくなかった。", romaji: "Kinou wa tsukarete ite, dare to mo kenka shitakunakatta.", meaning: "Karena kemarin sedang lelah, sebenarnya aku tidak ingin bertengkar dengan siapa pun." },
              { jp: "意見は違っても、喧嘩したくなかった。", kana: "いけん は ちがっても、 けんかしたくなかった。", romaji: "Iken wa chigattemo, kenka shitakunakatta.", meaning: "Meskipun pendapat kita berbeda, tadinya aku tidak ingin bertengkar." },
              { jp: "最後に喧嘩したくなかったのに、嫌な雰囲気になった。", kana: "さいご に けんかしたくなかった のに、 いやな ふんいき に なった。", romaji: "Saigo ni kenka shitakunakatta noni, iyana funiki ni natta.", meaning: "Padahal tadinya tidak ingin bertengkar di akhir, tapi suasananya malah jadi tidak enak." },
              { jp: "謝って済むなら、最初から喧嘩したくなかった。", kana: "あやまって すむ なら、 さいしょ から けんかしたくなかった。", romaji: "Ayamatte sumu nara, saisho kara kenka shitakunakatta.", meaning: "Kalau minta maaf aja cukup, dari awal juga sebenarnya aku nggak pengen berantem." }
            ]
          }]
        }
      ]
    },
	{
      id: "vf-41",
      level: "N4",
      order: 41,
      title: "~たかったです • Keinginan Lampau Sopan",
      summary: "Keinginan Lampau Sopan (N4). Bentuk formal dari '~たかった'. Digunakan untuk menyatakan keinginan di masa lalu dengan sopan kepada orang yang lebih tua, atasan, atau yang belum akrab. Sering dipakai untuk menyatakan rasa penyesalan secara sopan.",
      formulas: [
        { group: "Godan", rule: "Dari bentuk '~たい', ubah akhiran 'い' (i) menjadi 'かったです'. Contoh: 会いたい → 会いたかったです." },
        { group: "Ichidan", rule: "Dari bentuk '~たい', ubah akhiran 'い' (i) menjadi 'かったです'. Contoh: 食べたい → 食べたかったです." },
        { group: "Irregular", rule: "したい → したかったです, 来たい → 来たかったです. Contoh: 参加したい → 参加したかったです." }
      ],
      groups: [
        {
          name: "Godan",
          examples: [{
            base: "会う",
            transformed: "会いたかったです",
            kana: "あう → あいたかったです",
            romaji: "au → aitakatta desu",
            meaning: "tadinya ingin bertemu (sopan)",
            sentences: [
              { jp: "ずっと前から、先生に会いたかったです。", kana: "ずっと まえ から、 せんせい に あいたかったです。", romaji: "Zutto mae kara, sensei ni aitakatta desu.", meaning: "Sudah sejak lama, saya tadinya ingin bertemu dengan Anda (Guru)." },
              { jp: "今日は本当にあなたに会いたかったです。", kana: "きょう は ほんとう に あなた に あいたかったです。", romaji: "Kyou wa hontou ni anata ni aitakatta desu.", meaning: "Hari ini saya benar-benar ingin bertemu dengan Anda." },
              { jp: "おじいちゃんにもう一度会いたかったです。", kana: "おじいちゃん に もう いちど あいたかったです。", romaji: "Ojiichan ni mou ichido aitakatta desu.", meaning: "Saya tadinya ingin bertemu kakek sekali lagi." },
              { jp: "あの有名な俳優に会いたかったです。", kana: "あの ゆうめい な はいゆう に あいたかったです。", romaji: "Ano yuumei na haiyuu ni aitakatta desu.", meaning: "Saya tadinya ingin bertemu dengan aktor terkenal itu." },
              { jp: "昔の友達に会いたかったです。", kana: "むかし の ともだち に あいたかったです。", romaji: "Mukashi no tomodachi ni aitakatta desu.", meaning: "Saya tadinya ingin bertemu dengan teman lama." },
              { jp: "帰国する前に、みんなに会いたかったです。", kana: "きこく する まえ に、 みんな に あいたかったです。", romaji: "Kikoku suru mae ni, minna ni aitakatta desu.", meaning: "Sebelum pulang ke negara asal, tadinya saya ingin bertemu dengan semuanya." },
              { jp: "社長に直接お会いしたかったです。(Sopan/Humble)", kana: "しゃちょう に ちょくせつ おあいしたかったです。", romaji: "Shachou ni chokusetsu oai shitakatta desu.", meaning: "Tadinya saya ingin bertemu langsung dengan Bapak Direktur." },
              { jp: "時間がなくて残念ですが、本当は会いたかったです。", kana: "じかん が なくて ざんねん です が、 ほんとう は あいたかったです。", romaji: "Jikan ga nakute zannen desu ga, hontou wa aitakatta desu.", meaning: "Sayang sekali tidak ada waktu, tapi sebenarnya saya tadinya ingin bertemu." },
              { jp: "元気な姿の彼に会いたかったです。", kana: "げんき な すがた の かれ に あいたかったです。", romaji: "Genki na sugata no kare ni aitakatta desu.", meaning: "Saya tadinya ingin melihat (bertemu) dia dalam keadaan sehat." },
              { jp: "もっと早く、あなたに会いたかったです。", kana: "もっと はやく、 あなた に あいたかったです。", romaji: "Motto hayaku, anata ni aitakatta desu.", meaning: "Saya tadinya ingin bertemu dengan Anda lebih cepat." }
            ]
          }]
        },
        {
          name: "Ichidan",
          examples: [{
            base: "食べる",
            transformed: "食べたかったです",
            kana: "たべる → たべたかったです",
            romaji: "taberu → tabetakatta desu",
            meaning: "tadinya ingin makan (sopan)",
            sentences: [
              { jp: "あのレストランの料理、私も食べたかったです。", kana: "あの れすとらん の りょうり、 わたし も たべたかったです。", romaji: "Ano resutoran no ryouri, watashi mo tabetakatta desu.", meaning: "Masakan restoran itu, tadinya saya juga ingin memakannya." },
              { jp: "売り切れで残念です。本当に食べたかったです。", kana: "うりきれ で ざんねん です。 ほんとう に たべたかったです。", romaji: "Urikire de zannen desu. Hontou ni tabetakatta desu.", meaning: "Sayang sekali habis terjual. Sebenarnya saya tadinya ingin makan itu." },
              { jp: "お腹がいっぱいで食べられませんでしたが、食べたかったです。", kana: "おなか が いっぱい で たべられません でした が、 たべたかったです。", romaji: "Onaka ga ippai de taberaremasen deshita ga, tabetakatta desu.", meaning: "Karena kenyang saya tidak bisa makan, tapi tadinya saya ingin memakannya." },
              { jp: "日本にいる間に、もっとお寿司を食べたかったです。", kana: "にほん に いる あいだ に、 もっと おすし を たべたかったです。", romaji: "Nihon ni iru aida ni, motto osushi o tabetakatta desu.", meaning: "Selama berada di Jepang, tadinya saya ingin makan sushi lebih banyak lagi." },
              { jp: "母の作ったケーキを食べたかったです。", kana: "はは の つくった けーき を たべたかったです。", romaji: "Haha no tsukutta keeki o tabetakatta desu.", meaning: "Saya tadinya ingin makan kue buatan ibu." },
              { jp: "ダイエット中じゃなければ、食べたかったです。", kana: "だいえっとちゅう じゃなければ、 たべたかったです。", romaji: "Daiettochuu janakereba, tabetakatta desu.", meaning: "Kalau saja tidak sedang diet, tadinya saya ingin makan." },
              { jp: "昨日テレビで見たラーメンを食べたかったです。", kana: "きのう てれび で みた らーめん を たべたかったです。", romaji: "Kinou terebi de mita raamen o tabetakatta desu.", meaning: "Saya tadinya ingin makan ramen yang saya lihat di TV kemarin." },
              { jp: "もっと美味しいものを食べたかったです。", kana: "もっと おいしい もの を たべたかったです。", romaji: "Motto oishii mono o tabetakatta desu.", meaning: "Saya tadinya ingin makan sesuatu yang lebih enak." },
              { jp: "お弁当、自分で作ったものを食べたかったです。", kana: "おべんとう、 じぶん で つくった もの を たべたかったです。", romaji: "Obentou, jibun de tsukutta mono o tabetakatta desu.", meaning: "Bekal itu, tadinya saya ingin memakan yang saya buat sendiri." },
              { jp: "熱があったので無理でしたが、本当は食べたかったです。", kana: "ねつ が あった ので むり でした が、 ほんとう は たべたかったです。", romaji: "Netsu ga atta node muri deshita ga, hontou wa tabetakatta desu.", meaning: "Karena demam jadinya tidak bisa, tapi sebenarnya tadinya saya ingin makan." }
            ]
          }]
        },
        {
          name: "Irregular",
          examples: [{
            base: "参加する",
            transformed: "参加したかったです",
            kana: "さんかする → さんかしたかったです",
            romaji: "sanka suru → sanka shitakatta desu",
            meaning: "tadinya ingin ikut/hadir (sopan)",
            sentences: [
              { jp: "昨日の会議、私も参加したかったです。", kana: "きのう の かいぎ、 わたし も さんかしたかったです。", romaji: "Kinou no kaigi, watashi mo sanka shitakatta desu.", meaning: "Rapat kemarin, saya juga tadinya ingin ikut." },
              { jp: "用事があって行けませんでしたが、参加したかったです。", kana: "ようじ が あって いけません でした が、 さんかしたかったです。", romaji: "Youji ga atte ikemasen deshita ga, sanka shitakatta desu.", meaning: "Karena ada urusan saya tidak bisa pergi, tapi tadinya saya ingin berpartisipasi." },
              { jp: "そのプロジェクトに、ぜひ参加したかったです。", kana: "その ぷろじぇくと に、 ぜひ さんかしたかったです。", romaji: "Sono purojekuto ni, zehi sanka shitakatta desu.", meaning: "Di proyek itu, saya tadinya benar-benar ingin ikut serta." },
              { jp: "コンテストに参加したかったですが、間に合いませんでした。", kana: "こんてすと に さんかしたかった です が、 まにあいません でした。", romaji: "Kontesuto ni sanka shitakatta desu ga, maniaimasen deshita.", meaning: "Tadinya saya ingin ikut kontesnya, tapi tidak keburu." },
              { jp: "もっと早く知っていれば、ボランティアに参加したかったです。", kana: "もっと はやく しって いれば、 ぼらんてぃあ に さんかしたかったです。", romaji: "Motto hayaku shitte ireba, borantia ni sanka shitakatta desu.", meaning: "Kalau saya tahu lebih awal, tadinya saya ingin ikut acara relawannya." },
              { jp: "会社の飲み会に参加したかったですが、体調が悪くて休ませていただきました。", kana: "かいしゃ の のみかい に さんかしたかった です が、 たいちょう が わるくて やすませて いただきました。", romaji: "Kaisha no nomikai ni sanka shitakatta desu ga, taichou ga warukute yasumasete itadakimashita.", meaning: "Tadinya saya ingin ikut acara minum kantor, tapi karena tidak enak badan saya mohon izin libur." },
              { jp: "学生時代に留学プログラムに参加したかったです。", kana: "がくせい じだい に りゅうがく ぷろぐらむ に さんかしたかったです。", romaji: "Gakusei jidai ni ryuugaku puroguramu ni sanka shitakatta desu.", meaning: "Sewaktu masa sekolah, tadinya saya ingin berpartisipasi dalam program pertukaran pelajar." },
              { jp: "セミナーに参加したかったのですが、定員オーバーでした。", kana: "せみなー に さんかしたかった の です が、 ていいん おーばー でした。", romaji: "Seminaa ni sanka shitakatta no desu ga, teiin oobaa deshita.", meaning: "Tadinya saya ingin ikut seminarnya, tapi kapasitasnya sudah penuh." },
              { jp: "最後まで打ち上げに参加したかったです。", kana: "さいご まで うちあげ に さんかしたかったです。", romaji: "Saigo made uchiage ni sanka shitakatta desu.", meaning: "Tadinya saya ingin ikut pesta perayaannya sampai akhir." },
              { jp: "皆さんと一緒に研修に参加したかったです。", kana: "みなさん と いっしょ に けんしゅう に さんかしたかったです。", romaji: "Minasan to issho ni kenshuu ni sanka shitakatta desu.", meaning: "Tadinya saya ingin ikut pelatihan bersama dengan semuanya." }
            ]
          }]
        }
      ]
    },
    {
      id: "vf-42",
      level: "N4",
      order: 42,
      title: "~たくなかったです • Tidak Ingin Lampau Sopan",
      summary: "Tidak Ingin Lampau Sopan (N4). Bentuk formal dari '~たくなかった'. Digunakan untuk menceritakan sesuatu yang 'sebenarnya tidak kita inginkan' di masa lalu secara sopan. Sangat umum digunakan saat menjelaskan alasan atau menyesali sesuatu kepada orang yang lebih tua.",
      formulas: [
        { group: "Godan", rule: "Dari bentuk '~たくない', ubah akhiran 'い' (i) menjadi 'かったです'. Contoh: 行きたくない → 行きたくなかったです." },
        { group: "Ichidan", rule: "Dari bentuk '~たくない', ubah akhiran 'い' (i) menjadi 'かったです'. Contoh: 辞めたくない → 辞めたくなかったです." },
        { group: "Irregular", rule: "したくない → したくなかったです, 来たくない → 来たくなかったです. Contoh: 失敗したくない → 失敗したくなかったです." }
      ],
      groups: [
        {
          name: "Godan",
          examples: [{
            base: "行く",
            transformed: "行きたくなかったです",
            kana: "いく → いきたくなかったです",
            romaji: "iku → ikitakunakatta desu",
            meaning: "sebenarnya tidak ingin pergi (sopan)",
            sentences: [
              { jp: "本当は、昨日の飲み会に行きたくなかったです。", kana: "ほんとう は、 きのう の のみかい に いきたくなかったです。", romaji: "Hontou wa, kinou no nomikai ni ikitakunakatta desu.", meaning: "Sebenarnya, saya tadinya tidak ingin pergi ke acara minum kemarin." },
              { jp: "雨が降っていたので、外へ行きたくなかったです。", kana: "あめ が ふって いた ので、 そと へ いきたくなかったです。", romaji: "Ame ga futte ita node, soto e ikitakunakatta desu.", meaning: "Karena hujan, saya tadinya tidak ingin pergi ke luar." },
              { jp: "疲れていたので、どこにも行きたくなかったです。", kana: "つかれて いた ので、 どこ に も いきたくなかったです。", romaji: "Tsukarete ita node, doko ni mo ikitakunakatta desu.", meaning: "Karena lelah, saya tadinya tidak ingin pergi ke mana pun." },
              { jp: "あんな遠い場所には行きたくなかったです。", kana: "あんな とおい ばしょ に は いきたくなかったです。", romaji: "Anna tooi basho ni wa ikitakunakatta desu.", meaning: "Saya tadinya tidak ingin pergi ke tempat sejauh itu." },
              { jp: "一人では行きたくなかったですが、仕方ありませんでした。", kana: "ひとり で は いきたくなかった です が、 しかた ありません でした。", romaji: "Hitori de wa ikitakunakatta desu ga, shikata arimasen deshita.", meaning: "Saya sebenarnya tidak ingin pergi sendirian, tapi mau bagaimana lagi." },
              { jp: "道が混むとわかっていたので、行きたくなかったです。", kana: "みち が こむ と わかって いた ので、 いきたくなかったです。", romaji: "Michi ga komu to wakatte ita node, ikitakunakatta desu.", meaning: "Karena sudah tahu jalannya akan macet, tadinya saya tidak ingin pergi." },
              { jp: "嫌な予感がしたので、本当は行きたくなかったです。", kana: "いやな よかん が した ので、 ほんとう は いきたくなかったです。", romaji: "Iyana yokan ga shita node, hontou wa ikitakunakatta desu.", meaning: "Karena ada firasat buruk, sebenarnya saya tidak ingin pergi." },
              { jp: "準備ができていなかったので、まだ行きたくなかったです。", kana: "じゅんび が できて いなかった ので、 まだ いきたくなかったです。", romaji: "Junbi ga dekite inakatta node, mada ikitakunakatta desu.", meaning: "Karena persiapannya belum selesai, tadinya saya belum ingin pergi." },
              { jp: "お金がなかったので、旅行には行きたくなかったです。", kana: "おかね が なかった ので、 りょこう に は いきたくなかったです。", romaji: "Okane ga nakatta node, ryokou ni wa ikitakunakatta desu.", meaning: "Karena tidak ada uang, sebenarnya saya tidak ingin pergi liburan." },
              { jp: "こんな結果になるなら、行きたくなかったです。", kana: "こんな けっか に なる なら、 いきたくなかったです。", romaji: "Konna kekka ni naru nara, ikitakunakatta desu.", meaning: "Kalau hasilnya bakal begini, sebenarnya saya tidak ingin pergi." }
            ]
          }]
        },
        {
          name: "Ichidan",
          examples: [{
            base: "辞める",
            transformed: "辞めたくなかったです",
            kana: "やめる → やめたくなかったです",
            romaji: "yameru → yametakunakatta desu",
            meaning: "sebenarnya tidak ingin berhenti/resign (sopan)",
            sentences: [
              { jp: "本当は、この会社を辞めたくなかったです。", kana: "ほんとう は、 この かいしゃ を やめたくなかったです。", romaji: "Hontou wa, kono kaisha o yametakunakatta desu.", meaning: "Sebenarnya, saya tadinya tidak ingin berhenti dari perusahaan ini." },
              { jp: "好きだった仕事なので、辞めたくなかったです。", kana: "すき だった しごと なので、 やめたくなかったです。", romaji: "Suki datta shigoto nanode, yametakunakatta desu.", meaning: "Karena itu pekerjaan yang saya sukai, sebenarnya saya tidak ingin berhenti." },
              { jp: "人間関係は良かったので、辞めたくなかったです。", kana: "にんげん かんけい は よかった ので、 やめたくなかったです。", romaji: "Ningen kankei wa yokatta node, yametakunakatta desu.", meaning: "Karena hubungan antar rekannya baik, sebenarnya saya tidak ingin berhenti." },
              { jp: "病気にならなければ、部活を辞めたくなかったです。", kana: "びょうき に ならなければ、 ぶかつ を やめたくなかったです。", romaji: "Byouki ni naranakereba, bukatsu o yametakunakatta desu.", meaning: "Kalau saja tidak sakit, tadinya saya tidak ingin berhenti dari klub." },
              { jp: "途中で諦めて辞めたくなかったです。", kana: "とちゅう で あきらめて やめたくなかったです。", romaji: "Tochuu de akiramete yametakunakatta desu.", meaning: "Saya tadinya tidak ingin menyerah dan berhenti di tengah jalan." },
              { jp: "もっと続けたかったので、辞めたくなかったです。", kana: "もっと つづけたかった ので、 やめたくなかったです。", romaji: "Motto tsuzuketakatta node, yametakunakatta desu.", meaning: "Karena tadinya ingin terus lanjut, saya sebenarnya tidak ingin berhenti." },
              { jp: "プロジェクトが終わるまでは辞めたくなかったです。", kana: "ぷろじぇくと が おわる まで は やめたくなかったです。", romaji: "Purojekuto ga owaru made wa yametakunakatta desu.", meaning: "Sampai proyeknya selesai, tadinya saya tidak ingin berhenti." },
              { jp: "先生に教えてもらえるなら、辞めたくなかったです。", kana: "せんせい に おしえて もらえる なら、 やめたくなかったです。", romaji: "Sensei ni oshiete moraeru nara, yametakunakatta desu.", meaning: "Kalau masih bisa diajari oleh Guru, tadinya saya tidak ingin berhenti." },
              { jp: "引越しのせいで、本当は辞めたくなかったです。", kana: "ひっこし の せいで、 ほんとう は やめたくなかったです。", romaji: "Hikkoshi no seide, hontou wa yametakunakatta desu.", meaning: "Gara-gara pindah rumah (saya berhenti), tapi sebenarnya saya tidak ingin berhenti." },
              { jp: "自分から辞めたくなかったですが、仕方がありません。", kana: "じぶん から やめたくなかった です が、 しかた が ありません。", romaji: "Jibun kara yametakunakatta desu ga, shikata ga arimasen.", meaning: "Sebenarnya saya tidak ingin berhenti atas kemauan sendiri, tapi mau bagaimana lagi." }
            ]
          }]
        },
        {
          name: "Irregular",
          examples: [{
            base: "失敗する",
            transformed: "失敗したくなかったです",
            kana: "しっぱいする → しっぱいしたくなかったです",
            romaji: "shippai suru → shippai shitakunakatta desu",
            meaning: "sebenarnya tidak ingin gagal (sopan)",
            sentences: [
              { jp: "大切な試験だったので、絶対に失敗したくなかったです。", kana: "たいせつ な しけん だった ので、 ぜったい に しっぱいしたくなかったです。", romaji: "Taisetsu na shiken datta node, zettai ni shippai shitakunakatta desu.", meaning: "Karena itu ujian penting, saya mutlak tidak ingin gagal." },
              { jp: "準備をたくさんしたので、失敗したくなかったです。", kana: "じゅんび を たくさん した ので、 しっぱいしたくなかったです。", romaji: "Junbi o takusan shita node, shippai shitakunakatta desu.", meaning: "Karena sudah banyak persiapan, tadinya saya tidak ingin gagal." },
              { jp: "皆の期待を裏切るような失敗したくなかったです。", kana: "みな の きたい を うらぎる ような しっぱいしたくなかったです。", romaji: "Mina no kitai o uragiru youna shippai shitakunakatta desu.", meaning: "Saya tadinya tidak ingin melakukan kegagalan yang mengkhianati ekspektasi semua orang." },
              { jp: "初めてのプレゼンで、失敗したくなかったです。", kana: "はじめて の ぷれぜん で、 しっぱいしたくなかったです。", romaji: "Hajimete no purezen de, shippai shitakunakatta desu.", meaning: "Di presentasi pertama, saya tadinya tidak ingin gagal." },
              { jp: "同じミスで二度も失敗したくなかったです。", kana: "おなじ みす で にど も しっぱいしたくなかったです。", romaji: "Onaji misu de nido mo shippai shitakunakatta desu.", meaning: "Saya tadinya tidak ingin gagal dua kali karena kesalahan yang sama." },
              { jp: "仕事で失敗したくなかったですが、焦ってしまいました。", kana: "しごと で しっぱいしたくなかった です が、 あせって しまいました。", romaji: "Shigoto de shippai shitakunakatta desu ga, asette shimaimashita.", meaning: "Saya sebenarnya tidak ingin berbuat salah di pekerjaan, tapi saya terlanjur panik." },
              { jp: "自分の人生で、こんな失敗したくなかったです。", kana: "じぶん の じんせい で、 こんな しっぱいしたくなかったです。", romaji: "Jibun no jinsei de, konna shippai shitakunakatta desu.", meaning: "Dalam hidup saya, tadinya saya tidak ingin gagal seperti ini." },
              { jp: "チームに迷惑をかけるので、失敗したくなかったです。", kana: "ちーむ に めいわく を かける ので、 しっぱいしたくなかったです。", romaji: "Chiimu ni meiwaku o kakeru node, shippai shitakunakatta desu.", meaning: "Karena akan merepotkan tim, tadinya saya tidak ingin gagal." },
              { jp: "後悔するような失敗したくなかったです。", kana: "こうかい する ような しっぱいしたくなかったです。", romaji: "Koukai suru youna shippai shitakunakatta desu.", meaning: "Saya tadinya tidak ingin melakukan kegagalan yang membuat saya menyesal." },
              { jp: "高いお金を払ったので、失敗したくなかったです。", kana: "たかい おかね を はらった ので、 しっぱいしたくなかったです。", romaji: "Takai okane o haratta node, shippai shitakunakatta desu.", meaning: "Karena sudah membayar mahal, tadinya saya tidak ingin gagal." }
            ]
          }]
        }
      ]
    },
    {
      id: "vf-43",
      level: "N4",
      order: 43,
      title: "~てほしい • Harap Orang Lain Melakukan",
      summary: "Harap Orang Lain Melakukan (N4). Digunakan untuk menyatakan keinginan/harapan agar ORANG LAIN melakukan sesuatu untuk kita. (Berbeda dengan '~たい' yang berarti kita sendiri yang ingin melakukan). Sering diartikan 'Aku ingin kamu...', atau 'Tolong...'.",
      formulas: [
        { group: "Godan", rule: "Ubah kata kerja ke bentuk Te (て/で), lalu tambah ほしい. Contoh: 手伝う → 手伝ってほしい." },
        { group: "Ichidan", rule: "Ubah kata kerja ke bentuk Te (て), lalu tambah ほしい. Contoh: 教える → 教えてほしい." },
        { group: "Irregular", rule: "する → してほしい, 来る (くる) → 来てほしい (きてほしい). Contoh: 連絡する → 連絡してほしい." }
      ],
      groups: [
        {
          name: "Godan",
          examples: [{
            base: "手伝う",
            transformed: "手伝ってほしい",
            kana: "てつだう → てつだってほしい",
            romaji: "tetsudau → tetsudatte hoshii",
            meaning: "harap (kamu) membantu / ingin dibantu",
            sentences: [
              { jp: "仕事が忙しいから、手伝ってほしい。", kana: "しごと が いそがしい から、 てつだってほしい。", romaji: "Shigoto ga isogashii kara, tetsudatte hoshii.", meaning: "Karena kerjaan sibuk, aku ingin kamu membantu." },
              { jp: "部屋の掃除を手伝ってほしい。", kana: "へや の そうじ を てつだってほしい。", romaji: "Heya no souji o tetsudatte hoshii.", meaning: "Aku ingin kamu membantuku membersihkan kamar." },
              { jp: "一人では無理だから、手伝ってほしいんだ。", kana: "ひとり で は むり だから、 てつだってほしい ん だ。", romaji: "Hitori de wa muri dakara, tetsudatte hoshii n da.", meaning: "Karena nggak bisa kalau sendirian, aku ingin kamu membantu lho." },
              { jp: "ちょっと荷物を運ぶのを手伝ってほしい。", kana: "ちょっと にもつ を はこぶ の を てつだってほしい。", romaji: "Chotto nimotsu o hakobu no o tetsudatte hoshii.", meaning: "Aku ingin kamu sedikit membantuku membawa barang bawaan ini." },
              { jp: "明日、引越しを手伝ってほしいんだけど、空いてる？", kana: "あした、 ひっこし を てつだってほしい ん だ けど、 あいてる？", romaji: "Ashita, hikkoshi o tetsudatte hoshiin da kedo, aiteru?", meaning: "Besok aku pengen kamu bantu aku pindahan nih, kamu luang nggak?" },
              { jp: "宿題が分からないから、手伝ってほしいな。", kana: "しゅくだい が わからない から、 てつだってほしい な。", romaji: "Shukudai ga wakaranai kara, tetsudatte hoshii na.", meaning: "Karena aku nggak ngerti PR-nya, aku harap kamu bantu aku." },
              { jp: "悪いけど、少しだけ手伝ってほしい。", kana: "わるい けど、 すこし だけ てつだってほしい。", romaji: "Warui kedo, sukoshi dake tetsudatte hoshii.", meaning: "Maaf merepotkan, tapi aku ingin kamu membantuku sedikit saja." },
              { jp: "料理を手伝ってほしいな。", kana: "りょうり を てつだってほしい な。", romaji: "Ryouri o tetsudatte hoshii na.", meaning: "Aku pengen kamu bantu aku masak." },
              { jp: "みんなにも手伝ってほしい。", kana: "みんな に も てつだってほしい。", romaji: "Minna ni mo tetsudatte hoshii.", meaning: "Aku ingin semuanya juga ikut membantu." },
              { jp: "準備を手伝ってほしいって、彼が言ってたよ。", kana: "じゅんび を てつだってほしい って、 かれ が いってた よ。", romaji: "Junbi o tetsudatte hoshii tte, kare ga itteta yo.", meaning: "Dia bilang dia ingin dibantu persiapannya lho." }
            ]
          }]
        },
        {
          name: "Ichidan",
          examples: [{
            base: "教える",
            transformed: "教えてほしい",
            kana: "おしえる → おしえてほしい",
            romaji: "oshieru → oshiete hoshii",
            meaning: "harap (kamu) memberitahu / ingin diajari",
            sentences: [
              { jp: "この問題の答えを教えてほしい。", kana: "この もんだい の こたえ を おしえてほしい。", romaji: "Kono mondai no kotae o oshiete hoshii.", meaning: "Aku ingin kamu memberitahu jawaban soal ini." },
              { jp: "君の電話番号を教えてほしいな。", kana: "きみ の でんわばんごう を おしえてほしい な。", romaji: "Kimi no denwabangou o oshiete hoshii na.", meaning: "Aku harap kamu mau memberitahu nomor teleponmu." },
              { jp: "日本語の勉強の仕方を教えてほしい。", kana: "にほんご の べんきょう の しかた を おしえてほしい。", romaji: "Nihongo no benkyou no shikata o oshiete hoshii.", meaning: "Aku ingin kamu mengajariku cara belajar bahasa Jepang." },
              { jp: "本当のことを教えてほしい。", kana: "ほんとう の こと を おしえてほしい。", romaji: "Hontou no koto o oshiete hoshii.", meaning: "Aku ingin kamu memberitahu hal yang sebenarnya." },
              { jp: "あの美味しいレストランの場所を教えてほしい。", kana: "あの おいしい れすとらん の ばしょ を おしえてほしい。", romaji: "Ano oishii resutoran no basho o oshiete hoshii.", meaning: "Aku ingin kamu memberitahu lokasi restoran enak itu." },
              { jp: "パソコンの使い方が分からないから、教えてほしい。", kana: "ぱそこん の つかいかた が わからない から、 おしえてほしい。", romaji: "Pasokon no tsukaikata ga wakaranai kara, oshiete hoshii.", meaning: "Karena aku nggak paham cara pakai komputer, aku ingin kamu mengajariku." },
              { jp: "秘密のレシピを教えてほしい。", kana: "ひみつ の れしぴ を おしえてほしい。", romaji: "Himitsu no reshipi o oshiete hoshii.", meaning: "Aku ingin kamu memberitahu resep rahasiamu." },
              { jp: "どうやったら上手にできるか、教えてほしい。", kana: "どう やったら じょうず に できる か、 おしえてほしい。", romaji: "Dou yattara jouzu ni dekiru ka, oshiete hoshii.", meaning: "Gimana caranya biar bisa jago, aku ingin kamu memberitahuku." },
              { jp: "道の行き方を教えてほしいんだけど。", kana: "みち の いきかた を おしえてほしい ん だ けど。", romaji: "Michi no ikikata o oshiete hoshiin da kedo.", meaning: "Aku pengen diajarin jalan ke sana sih." },
              { jp: "理由を教えてほしい。", kana: "りゆう を おしえてほしい。", romaji: "Riyuu o oshiete hoshii.", meaning: "Aku ingin kamu memberitahu alasannya." }
            ]
          }]
        },
        {
          name: "Irregular",
          examples: [{
            base: "来る",
            transformed: "来てほしい",
            kana: "くる → きてほしい",
            romaji: "kuru → kite hoshii",
            meaning: "harap (kamu) datang / ingin kamu datang",
            sentences: [
              { jp: "明日のパーティーに、君も来てほしい。", kana: "あした の ぱーてぃー に、 きみ も きてほしい。", romaji: "Ashita no paatii ni, kimi mo kite hoshii.", meaning: "Ke pesta besok, aku ingin kamu juga datang." },
              { jp: "一人だと寂しいから、早く来てほしい。", kana: "ひとり だ と さびしい から、 はやく きてほしい。", romaji: "Hitori da to sabishii kara, hayaku kite hoshii.", meaning: "Karena kesepian kalau sendirian, aku ingin kamu cepat datang." },
              { jp: "私の誕生日に、家に来てほしいな。", kana: "わたし の たんじょうび に、 いえ に きてほしい な。", romaji: "Watashi no tanjoubi ni, ie ni kite hoshii na.", meaning: "Di hari ulang tahunku, aku harap kamu datang ke rumah." },
              { jp: "大事な話があるから、ちょっとここに来てほしい。", kana: "だいじ な はなし が ある から、 ちょっと ここ に きてほしい。", romaji: "Daiji na hanashi ga aru kara, chotto koko ni kite hoshii.", meaning: "Karena ada pembicaraan penting, aku ingin kamu ke sini sebentar." },
              { jp: "彼にも会議に来てほしいと伝えて。", kana: "かれ に も かいぎ に きてほしい と つたえて。", romaji: "Kare ni mo kaigi ni kite hoshii to tsutaete.", meaning: "Tolong sampaikan padanya bahwa aku ingin dia juga datang ke rapat." },
              { jp: "もっと早く助けに来てほしかった。(Lampau)", kana: "もっと はやく たすけ に きてほしかった。", romaji: "Motto hayaku tasuke ni kite hoshikatta.", meaning: "Aku tadinya ingin kamu datang membantuku lebih cepat." },
              { jp: "私の結婚式には、絶対に親友に来てほしい。", kana: "わたし の けっこんしき に は、 ぜったい に しんゆう に きてほしい。", romaji: "Watashi no kekkonshiki ni wa, zettai ni shinyuu ni kite hoshii.", meaning: "Di pernikahanku, aku mutlak ingin sahabatku datang." },
              { jp: "困っているので、すぐ来てほしいです。(Sopan: てほしいです)", kana: "こまって いる ので、 すぐ きてほしい です。", romaji: "Komatte iru node, sugu kite hoshii desu.", meaning: "Karena sedang kesusahan, saya ingin Anda segera datang." },
              { jp: "週末、遊びに来てほしいな。", kana: "しゅうまつ、 あそび に きてほしい な。", romaji: "Shuumatsu, asobi ni kite hoshii na.", meaning: "Akhir pekan nanti, aku ingin kamu datang main ke sini." },
              { jp: "あの有名な歌手に、私たちの町に来てほしい。", kana: "あの ゆうめい な かしゅ に、 わたし たち の まち に きてほしい。", romaji: "Ano yuumei na kashu ni, watashi tachi no machi ni kite hoshii.", meaning: "Aku berharap penyanyi terkenal itu mau datang ke kota kita." }
            ]
          }]
        }
      ]
    },
	{
      id: "vf-44",
      level: "N4",
      order: 44,
      title: "~てほしくない • Tidak Harap Orang Lain Melakukan",
      summary: "Tidak Harap Orang Lain Melakukan (N4). Digunakan ketika kita tidak ingin orang lain melakukan suatu hal. Bisa diartikan 'Aku harap kamu tidak...', 'Aku tidak ingin kamu...', atau 'Tolong jangan...'.",
      formulas: [
        { group: "Godan", rule: "Ubah kata kerja ke bentuk Te (て/で), lalu tambah ほしくない. Contoh: 泣く → 泣いてほしくない." },
        { group: "Ichidan", rule: "Ubah kata kerja ke bentuk Te (て), lalu tambah ほしくない. Contoh: 見る → 見てほしくない." },
        { group: "Irregular", rule: "する → してほしくない, 来る (くる) → 来てほしくない (きてほしくない). Contoh: 邪魔する → 邪魔してほしくない." }
      ],
      groups: [
        {
          name: "Godan",
          examples: [{
            base: "言う",
            transformed: "言ってほしくない",
            kana: "いう → いってほしくない",
            romaji: "iu → itte hoshikunai",
            meaning: "tidak ingin (kamu/dia) bilang",
            sentences: [
              { jp: "これは秘密だから、誰にも言ってほしくない。", kana: "これ は ひみつ だから、 だれ に も いってほしくない。", romaji: "Kore wa himitsu dakara, dare ni mo itte hoshikunai.", meaning: "Karena ini rahasia, aku tidak ingin kamu bilang ke siapa pun." },
              { jp: "私の悪口を言ってほしくない。", kana: "わたし の わるぐち を いってほしくない。", romaji: "Watashi no waruguchi o itte hoshikunai.", meaning: "Aku tidak ingin (kamu/mereka) menjelek-jelekkan aku." },
              { jp: "そんな悲しいことを言ってほしくない。", kana: "そんな かなしい こと を いってほしくない。", romaji: "Sonna kanashii koto o itte hoshikunai.", meaning: "Aku tidak ingin kamu mengatakan hal sedih seperti itu." },
              { jp: "簡単に「無理だ」と言ってほしくない。", kana: "かんたん に 「むりだ」 と いってほしくない。", romaji: "Kantan ni 'muri da' to itte hoshikunai.", meaning: "Aku tidak ingin kamu dengan mudahnya bilang 'mustahil'." },
              { jp: "親には、このことを言ってほしくない。", kana: "おや に は、 この こと を いってほしくない。", romaji: "Oya ni wa, kono koto o itte hoshikunai.", meaning: "Aku tidak ingin kamu menceritakan hal ini kepada orang tua." },
              { jp: "嘘は言ってほしくない。", kana: "うそ は いってほしくない。", romaji: "Uso wa itte hoshikunai.", meaning: "Aku tidak ingin kamu mengatakan kebohongan." },
              { jp: "他の人の前で、私の失敗を言ってほしくない。", kana: "ほか の ひと の まえ で、 わたし の しっぱい を いってほしくない。", romaji: "Hoka no hito no mae de, watashi no shippai o itte hoshikunai.", meaning: "Aku tidak ingin kamu menceritakan kegagalanku di depan orang lain." },
              { jp: "仕事を辞めるなんて言ってほしくない。", kana: "しごと を やめる なんて いってほしくない。", romaji: "Shigoto o yameru nante itte hoshikunai.", meaning: "Aku tidak ingin kamu bilang mau berhenti kerja." },
              { jp: "言い訳ばかり言ってほしくない。", kana: "いいわけ ばかり いってほしくない。", romaji: "Iiwake bakari itte hoshikunai.", meaning: "Aku tidak ingin kamu terus-terusan mengucap alasan." },
              { jp: "先生には言ってほしくないです。(Sopan)", kana: "せんせい に は いってほしくない です。", romaji: "Sensei ni wa itte hoshikunai desu.", meaning: "Saya tidak ingin Anda memberitahu guru." }
            ]
          }]
        },
        {
          name: "Ichidan",
          examples: [{
            base: "見る",
            transformed: "見てほしくない",
            kana: "みる → みてほしくない",
            romaji: "miru → mite hoshikunai",
            meaning: "tidak ingin (kamu/dia) melihat",
            sentences: [
              { jp: "私のスマホを見てほしくない。", kana: "わたし の すまほ を みてほしくない。", romaji: "Watashi no sumaho o mite hoshikunai.", meaning: "Aku tidak ingin kamu melihat HP-ku." },
              { jp: "部屋が汚いから、今は見てほしくない。", kana: "へや が きたない から、 いま は みてほしくない。", romaji: "Heya ga kitanai kara, ima wa mite hoshikunai.", meaning: "Karena kamarku berantakan, aku tidak ingin kamu melihatnya sekarang." },
              { jp: "このテストの点数は、誰にも見てほしくない。", kana: "この てすと の てんすう は、 だれ に も みてほしくない。", romaji: "Kono tesuto no tensuu wa, dare ni mo mite hoshikunai.", meaning: "Nilai ujian ini, aku tidak ingin dilihat oleh siapa pun." },
              { jp: "泣いている顔を、彼に見てほしくない。", kana: "ないて いる かお を、 かれ に みてほしくない。", romaji: "Naite iru kao o, kare ni mite hoshikunai.", meaning: "Aku tidak ingin dia melihat wajahku yang sedang menangis." },
              { jp: "すっぴんを見てほしくない。", kana: "すっぴん を みてほしくない。", romaji: "Suppin o mite hoshikunai.", meaning: "Aku tidak ingin (kamu) melihat wajahku tanpa makeup." },
              { jp: "昔の恥ずかしい写真を見てほしくない。", kana: "むかし の はずかしい しゃしん を みてほしくない。", romaji: "Mukashi no hazukashii shashin o mite hoshikunai.", meaning: "Aku tidak ingin kamu melihat foto memalukan di masa lalu." },
              { jp: "日記を勝手に見てほしくない。", kana: "にっき を かって に みてほしくない。", romaji: "Nikki o katte ni mite hoshikunai.", meaning: "Aku tidak ingin kamu melihat buku harianku sembarangan." },
              { jp: "失敗しているところを見てほしくなかった。(Lampau)", kana: "しっぱい して いる ところ を みてほしくなかった。", romaji: "Shippai shite iru tokoro o mite hoshikunatta.", meaning: "Tadinya aku tidak ingin kamu melihat saat aku sedang gagal." },
              { jp: "あの映画は怖いから、子供には見てほしくない。", kana: "あの えいが は こわい から、 こども に は みてほしくない。", romaji: "Ano eiga wa kowai kara, kodomo ni wa mite hoshikunai.", meaning: "Karena film itu seram, aku tidak ingin anak-anak menontonnya." },
              { jp: "私のパソコンの画面を見てほしくない。", kana: "わたし の ぱそこん の がめん を みてほしくない。", romaji: "Watashi no pasokon no gamen o mite hoshikunai.", meaning: "Aku tidak ingin kamu melihat layar komputerku." }
            ]
          }]
        },
        {
          name: "Irregular",
          examples: [{
            base: "無理する",
            transformed: "無理してほしくない",
            kana: "むりする → むりしてほしくない",
            romaji: "muri suru → muri shite hoshikunai",
            meaning: "tidak ingin (kamu) memaksakan diri",
            sentences: [
              { jp: "体調が悪いなら、無理してほしくない。", kana: "たいちょう が わるい なら、 むりしてほしくない。", romaji: "Taichou ga warui nara, muri shite hoshikunai.", meaning: "Kalau kondisi badanmu sedang buruk, aku tidak ingin kamu memaksakan diri." },
              { jp: "仕事でそんなに無理してほしくないよ。", kana: "しごと で そんな に むりしてほしくない よ。", romaji: "Shigoto de sonna ni muri shite hoshikunai yo.", meaning: "Aku tidak ingin kamu memaksakan diri sampai segitunya di pekerjaan." },
              { jp: "親には、私のために無理してほしくない。", kana: "おや に は、 わたし の ため に むりしてほしくない。", romaji: "Oya ni wa, watashi no tame ni muri shite hoshikunai.", meaning: "Aku tidak ingin orang tua memaksakan diri demi aku." },
              { jp: "お金がないのに、無理してほしくない。", kana: "おかね が ない のに、 むりしてほしくない。", romaji: "Okane ga nai noni, muri shite hoshikunai.", meaning: "Padahal sedang tidak ada uang, aku tidak ingin kamu memaksakan diri (keluar uang)." },
              { jp: "彼氏には、無理してほしくないんだ。", kana: "かれし に は、 むりしてほしくない ん だ。", romaji: "Kareshi ni wa, muri shite hoshikunai n da.", meaning: "Ke pacarku, aku tidak ingin dia memaksakan diri." },
              { jp: "一人で抱え込んで、無理してほしくない。", kana: "ひとり で かかえこんで、 むりしてほしくない。", romaji: "Hitori de kakaekonde, muri shite hoshikunai.", meaning: "Aku tidak ingin kamu memendam semuanya sendiri dan memaksakan diri." },
              { jp: "できないことは、無理してほしくない。", kana: "できない こと は、 むりしてほしくない。", romaji: "Dekinai koto wa, muri shite hoshikunai.", meaning: "Hal yang tidak bisa dilakukan, aku tidak ingin kamu memaksakannya." },
              { jp: "ダイエットで体を壊すほど無理してほしくない。", kana: "だいえっと で からだ を こわす ほど むりしてほしくない。", romaji: "Daietto de karada o kowasu hodo muri shite hoshikunai.", meaning: "Aku tidak ingin kamu memaksakan diet sampai merusak tubuh." },
              { jp: "君には、もうこれ以上無理してほしくない。", kana: "きみ に は、 もう これいじょう むりしてほしくない。", romaji: "Kimi ni wa, mou kore ijou muri shite hoshikunai.", meaning: "Aku tidak ingin kamu memaksakan diri lebih dari ini lagi." },
              { jp: "笑顔を作るために無理してほしくない。", kana: "えがお を つくる ため に むりしてほしくない。", romaji: "Egao o tsukuru tame ni muri shite hoshikunai.", meaning: "Aku tidak ingin kamu memaksakan diri hanya untuk tersenyum." }
            ]
          }]
        }
      ]
    },
    {
      id: "vf-45",
      level: "N4",
      order: 45,
      title: "~てほしかった • Harap Orang Lain (Dulu)",
      summary: "Harap Orang Lain (Dulu) (N4). Digunakan untuk menyatakan bahwa di masa lalu, kita 'berharap orang lain melakukan sesuatu' (tapi kenyataannya mungkin tidak). Sangat sering dipakai untuk mengutarakan rasa kecewa, penyesalan, atau sekadar harapan di masa lalu ('Tadinya aku ingin kamu...').",
      formulas: [
        { group: "Godan", rule: "Ubah kata kerja ke bentuk Te (て/で), lalu tambah ほしかった. Contoh: 待つ → 待ってほしかった." },
        { group: "Ichidan", rule: "Ubah kata kerja ke bentuk Te (て), lalu tambah ほしかった. Contoh: 教える → 教えてほしかった." },
        { group: "Irregular", rule: "する → してほしかった, 来る (くる) → 来てほしかった (きてほしかった). Contoh: 相談する → 相談してほしかった." }
      ],
      groups: [
        {
          name: "Godan",
          examples: [{
            base: "待つ",
            transformed: "待ってほしかった",
            kana: "まつ → まってほしかった",
            romaji: "matsu → matte hoshikatta",
            meaning: "tadinya harap (kamu) menunggu",
            sentences: [
              { jp: "もう少しだけ、待ってほしかった。", kana: "もう すこし だけ、 まってほしかった。", romaji: "Mou sukoshi dake, matte hoshikatta.", meaning: "Tadinya aku ingin kamu menunggu sedikit lebih lama lagi." },
              { jp: "一人で帰らないで、私を待ってほしかった。", kana: "ひとり で かえらないで、 わたし を まってほしかった。", romaji: "Hitori de kaeranaide, watashi o matte hoshikatta.", meaning: "Jangan pulang sendirian, tadinya aku ingin kamu menungguku." },
              { jp: "ご飯を食べる前に、待ってほしかったな。", kana: "ごはん を たべる まえ に、 まってほしかった な。", romaji: "Gohan o taberu mae ni, matte hoshikatta na.", meaning: "Sebelum makan, tadinya aku pengen kamu nungguin aku." },
              { jp: "駅で待ってほしかったのに、先に行っちゃったの？", kana: "えき で まってほしかった のに、 さき に いっっちゃった の？", romaji: "Eki de matte hoshikatta noni, saki ni icchatta no?", meaning: "Padahal tadinya aku ingin kamu nunggu di stasiun, kamu malah pergi duluan?" },
              { jp: "雨が止むまで待ってほしかった。", kana: "あめ が やむ まで まってほしかった。", romaji: "Ame ga yamu made matte hoshikatta.", meaning: "Tadinya aku ingin kamu menunggu sampai hujannya reda." },
              { jp: "私が説明するまで待ってほしかった。", kana: "わたし が せつめい する まで まってほしかった。", romaji: "Watashi ga setsumei suru made matte hoshikatta.", meaning: "Tadinya aku ingin kamu menunggu sampai aku menjelaskannya." },
              { jp: "怒る前に、少し待ってほしかった。", kana: "おこる まえ に、 すこし まってほしかった。", romaji: "Okoru mae ni, sukoshi matte hoshikatta.", meaning: "Sebelum marah, tadinya aku ingin kamu sabar (menunggu) sebentar." },
              { jp: "結果が出るまで待ってほしかった。", kana: "けっか が でる まで まってほしかった。", romaji: "Kekka ga deru made matte hoshikatta.", meaning: "Tadinya aku ingin kamu menunggu sampai hasilnya keluar." },
              { jp: "電話を切らずに待ってほしかった。", kana: "でんわ を きらず に まってほしかった。", romaji: "Denwa o kirazu ni matte hoshikatta.", meaning: "Tadinya aku ingin kamu menunggunya tanpa mematikan telepon." },
              { jp: "決める前に、私を待ってほしかった。", kana: "きめる まえ に、 わたし を まってほしかった。", romaji: "Kimeru mae ni, watashi o matte hoshikatta.", meaning: "Sebelum memutuskan, tadinya aku ingin kamu menungguku." }
            ]
          }]
        },
        {
          name: "Ichidan",
          examples: [{
            base: "教える",
            transformed: "教えてほしかった",
            kana: "おしえる → おしえてほしかった",
            romaji: "oshieru → oshiete hoshikatta",
            meaning: "tadinya harap (kamu) memberitahu",
            sentences: [
              { jp: "本当のことを、もっと早く教えてほしかった。", kana: "ほんとう の こと を、 もっと はやく おしえてほしかった。", romaji: "Hontou no koto o, motto hayaku oshiete hoshikatta.", meaning: "Tadinya aku ingin kamu memberitahu kebenarannya lebih cepat." },
              { jp: "結婚するなら、私にも教えてほしかったよ。", kana: "けっこん する なら、 わたし に も おしえてほしかった よ。", romaji: "Kekkon suru nara, watashi ni mo oshiete hoshikatta yo.", meaning: "Kalau mau menikah, tadinya aku pengen kamu kasih tahu aku juga lho." },
              { jp: "道が分からないなら、教えてほしかった。", kana: "みち が わからない なら、 おしえてほしかった。", romaji: "Michi ga wakaranai nara, oshiete hoshikatta.", meaning: "Kalau tidak tahu jalannya, tadinya aku ingin kamu memberitahuku." },
              { jp: "悩んでいるなら、教えてほしかったな。", kana: "なやんで いる なら、 おしえてほしかった な。", romaji: "Nayande iru nara, oshiete hoshikatta na.", meaning: "Kalau sedang banyak pikiran/galau, tadinya aku ingin kamu ngasih tahu." },
              { jp: "パスワードが変わったなら、教えてほしかった。", kana: "ぱすわーど が かわった なら、 おしえてほしかった。", romaji: "Pasuwaado ga kawatta nara, oshiete hoshikatta.", meaning: "Kalau password-nya berubah, tadinya aku ingin kamu beritahu." },
              { jp: "美味しいお店があるなら、教えてほしかった。", kana: "おいしい おみせ が ある なら、 おしえてほしかった。", romaji: "Oishii omise ga aru nara, oshiete hoshikatta.", meaning: "Kalau ada restoran enak, tadinya aku ingin kamu kasih tahu." },
              { jp: "休むなら、事前に教えてほしかった。", kana: "やすむ なら、 じぜん に おしえてほしかった。", romaji: "Yasumu nara, jizen ni oshiete hoshikatta.", meaning: "Kalau mau libur/absen, tadinya aku ingin kamu memberitahu sebelumnya." },
              { jp: "やり方が違うなら、教えてほしかった。", kana: "やりかた が ちがう なら、 おしえてほしかった。", romaji: "Yarikata ga chigau nara, oshiete hoshikatta.", meaning: "Kalau cara kerjanya salah/beda, tadinya aku ingin kamu ngasih tahu." },
              { jp: "お金が足りないなら、教えてほしかった。", kana: "おかね が たりない なら、 おしえてほしかった。", romaji: "Okane ga tarinai nara, oshiete hoshikatta.", meaning: "Kalau uangnya kurang, tadinya aku ingin kamu memberitahuku." },
              { jp: "先生、その文法をもう一度教えてほしかったです。(Sopan)", kana: "せんせい、 その ぶんぽう を もう いちど おしえてほしかった です。", romaji: "Sensei, sono bunpou o mou ichido oshiete hoshikatta desu.", meaning: "Guru, tadinya saya ingin Anda mengajarkan tata bahasa itu sekali lagi." }
            ]
          }]
        },
        {
          name: "Irregular",
          examples: [{
            base: "相談する",
            transformed: "相談してほしかった",
            kana: "そうだんする → そうだんしてほしかった",
            romaji: "soudan suru → soudan shite hoshikatta",
            meaning: "tadinya harap (kamu) berdikusi/konsultasi",
            sentences: [
              { jp: "勝手に決めないで、私に相談してほしかった。", kana: "かって に きめないで、 わたし に そうだんしてほしかった。", romaji: "Katte ni kimenaide, watashi ni soudan shite hoshikatta.", meaning: "Jangan memutuskan sendiri, tadinya aku ingin kamu mendiskusikannya denganku." },
              { jp: "仕事辞める前に、相談してほしかったな。", kana: "しごと やめる まえ に、 そうだんしてほしかった な。", romaji: "Shigoto yameru mae ni, soudan shite hoshikatta na.", meaning: "Sebelum resign dari kerja, aku harap tadinya kamu cerita/konsultasi dulu." },
              { jp: "困っているなら、親に相談してほしかった。", kana: "こまって いる なら、 おや に そうだんしてほしかった。", romaji: "Komatte iru nara, oya ni soudan shite hoshikatta.", meaning: "Kalau sedang kesulitan, tadinya aku ingin kamu cerita ke orang tua." },
              { jp: "高価なものを買うときは、相談してほしかった。", kana: "こうか な もの を かう とき は、 そうだんしてほしかった。", romaji: "Kouka na mono o kau toki wa, soudan shite hoshikatta.", meaning: "Saat membeli barang mahal, tadinya aku ingin kamu merundingkannya denganku." },
              { jp: "悩む前に、いつでも相談してほしかった。", kana: "なやむ まえ に、 いつでも そうだんしてほしかった。", romaji: "Nayamu mae ni, itsudemo soudan shite hoshikatta.", meaning: "Sebelum jadi pikiran, aku ingin kamu kapan pun berkonsultasi padaku." },
              { jp: "そんなに辛いなら、相談してほしかったよ。", kana: "そんな に つらい なら、 そうだんしてほしかった よ。", romaji: "Sonna ni tsurai nara, soudan shite hoshikatta yo.", meaning: "Kalau sesulit itu, tadinya aku ingin kamu berdiskusi/cerita padaku lho." },
              { jp: "一人で抱え込まずに、チームに相談してほしかった。", kana: "ひとり で かかえこまず に、 ちーむ に そうだんしてほしかった。", romaji: "Hitori de kakaekomazu ni, chiimu ni soudan shite hoshikatta.", meaning: "Tadinya aku ingin kamu tidak menanggungnya sendiri dan berdiskusi dengan tim." },
              { jp: "スケジュールを変えるなら、相談してほしかった。", kana: "すけじゅーる を かえる なら、 そうだんしてほしかった。", romaji: "Sukejuuru o kaeru nara, soudan shite hoshikatta.", meaning: "Kalau mengubah jadwal, tadinya aku ingin kamu berdiskusi denganku." },
              { jp: "引っ越す前に、相談してほしかった。", kana: "ひっこす まえ に、 そうだんしてほしかった。", romaji: "Hikkosu mae ni, soudan shite hoshikatta.", meaning: "Sebelum pindah rumah, tadinya aku ingin kamu mendiskusikannya." },
              { jp: "先生に一度相談してほしかったです。(Sopan)", kana: "せんせい に いちど そうだんしてほしかった です。", romaji: "Sensei ni ichido soudan shite hoshikatta desu.", meaning: "Tadinya saya berharap kamu mau berkonsultasi sekali dengan Guru." }
            ]
          }]
        }
      ]
    },
	{
      id: "vf-46",
      level: "N4",
      order: 46,
      title: "~てほしくなかった • Tidak Harap Orang Lain (Dulu)",
      summary: "Tidak Harap Orang Lain Melakukan di Masa Lalu (N4). Digunakan untuk menyatakan bahwa di masa lalu, kita 'sebenarnya tidak ingin orang lain melakukan sesuatu' (tetapi kenyataannya orang itu melakukannya). Sering bermakna penyesalan atau kekecewaan kecil.",
      formulas: [
        { group: "Godan", rule: "Ubah kata kerja ke bentuk Te (て/で), lalu tambah ほしくなかった. Contoh: 言う → 言ってほしくなかった." },
        { group: "Ichidan", rule: "Ubah kata kerja ke bentuk Te (て), lalu tambah ほしくなかった. Contoh: 見る → 見てほしくなかった." },
        { group: "Irregular", rule: "する → してほしくなかった, 来る (くる) → 来てほしくなかった (きてほしくなかった). Contoh: 心配する → 心配してほしくなかった." }
      ],
      groups: [
        {
          name: "Godan",
          examples: [{
            base: "泣く",
            transformed: "泣いてほしくなかった",
            kana: "なく → ないてほしくなかった",
            romaji: "naku → naite hoshikunatta",
            meaning: "tadinya tidak ingin (kamu/dia) menangis",
            sentences: [
              { jp: "最後の日だから、泣いてほしくなかった。", kana: "さいご の ひ だから、 ないてほしくなかった。", romaji: "Saigo no hi dakara, naite hoshikunatta.", meaning: "Karena ini hari terakhir, tadinya aku tidak ingin kamu menangis." },
              { jp: "君には泣いてほしくなかったんだ。", kana: "きみ に は ないてほしくなかった ん だ。", romaji: "Kimi ni wa naite hoshikunatta n da.", meaning: "Tadinya aku tidak ingin kamu menangis lho." },
              { jp: "私のせいで泣いてほしくなかった。", kana: "わたし の せい で ないてほしくなかった。", romaji: "Watashi no sei de naite hoshikunatta.", meaning: "Tadinya aku tidak ingin kamu menangis gara-gara aku." },
              { jp: "笑顔で別れたかったから、泣いてほしくなかった。", kana: "えがお で わかれたかった から、 ないてほしくなかった。", romaji: "Egao de wakaretakatta kara, naite hoshikunatta.", meaning: "Karena ingin berpisah dengan senyuman, tadinya aku tidak ingin (kamu) menangis." },
              { jp: "子供には悲しいニュースを見て泣いてほしくなかった。", kana: "こども に は かなしい にゅーす を みて ないてほしくなかった。", romaji: "Kodomo ni wa kanashii nyuusu o mite naite hoshikunatta.", meaning: "Tadinya aku tidak ingin anak-anak menangis melihat berita sedih itu." },
              { jp: "誕生日なのに、彼女に泣いてほしくなかった。", kana: "たんじょうび なのに、 かのじょ に ないてほしくなかった。", romaji: "Tanjoubi nanoni, kanojo ni naite hoshikunatta.", meaning: "Padahal hari ulang tahun, tadinya aku tidak ingin pacarku menangis." },
              { jp: "映画の結末で、みんなに泣いてほしくなかった。", kana: "えいが の けつまつ で、 みんな に ないてほしくなかった。", romaji: "Eiga no ketsumatsu de, minna ni naite hoshikunatta.", meaning: "Di akhir film, tadinya aku tidak ingin semuanya menangis." },
              { jp: "辛い思いをして泣いてほしくなかった。", kana: "つらい おもい を して ないてほしくなかった。", romaji: "Tsurai omoi o shite naite hoshikunatta.", meaning: "Tadinya aku tidak ingin kamu merasa menderita dan menangis." },
              { jp: "そんなことで泣いてほしくなかった。", kana: "そんな こと で ないてほしくなかった。", romaji: "Sonna koto de naite hoshikunatta.", meaning: "Tadinya aku tidak ingin kamu menangis hanya karena hal semacam itu." },
              { jp: "ずっと笑っていてほしかったから、泣いてほしくなかった。", kana: "ずっと わらって いて ほしかった から、 ないてほしくなかった。", romaji: "Zutto waratte ite hoshikatta kara, naite hoshikunatta.", meaning: "Karena aku ingin kamu tersenyum terus, tadinya aku tidak ingin kamu menangis." }
            ]
          }]
        },
        {
          name: "Ichidan",
          examples: [{
            base: "忘れる",
            transformed: "忘れてほしくなかった",
            kana: "わすれる → わすれてほしくなかった",
            romaji: "wasureru → wasurete hoshikunatta",
            meaning: "tadinya tidak ingin (kamu) melupakan",
            sentences: [
              { jp: "あの約束、忘れてほしくなかった。", kana: "あの やくそく、 わすれてほしくなかった。", romaji: "Ano yakusoku, wasurete hoshikunatta.", meaning: "Janji itu, tadinya aku tidak ingin kamu melupakannya." },
              { jp: "私の誕生日を忘れてほしくなかったな。", kana: "わたし の たんじょうび を わすれてほしくなかった な。", romaji: "Watashi no tanjoubi o wasurete hoshikunatta na.", meaning: "Tadinya aku tidak ingin kamu melupakan ulang tahunku lho." },
              { jp: "一緒に過ごした時間を忘れてほしくなかった。", kana: "いっしょ に すごした じかん を わすれてほしくなかった。", romaji: "Issho ni sugoshita jikan o wasurete hoshikunatta.", meaning: "Waktu yang kita habiskan bersama, tadinya aku tidak ingin kamu lupakan." },
              { jp: "大事な記念日を忘れてほしくなかった。", kana: "だいじ な きねんび を わすれてほしくなかった。", romaji: "Daiji na kinenbi o wasurete hoshikunatta.", meaning: "Hari jadi yang penting, tadinya aku tidak ingin kamu melupakannya." },
              { jp: "私の名前を忘れてほしくなかった。", kana: "わたし の なまえ を わすれてほしくなかった。", romaji: "Watashi no namae o wasurete hoshikunatta.", meaning: "Tadinya aku tidak ingin kamu melupakan namaku." },
              { jp: "教えてあげたこと、忘れてほしくなかったよ。", kana: "おしえて あげた こと、 わすれてほしくなかった よ。", romaji: "Oshiete ageta koto, wasurete hoshikunatta yo.", meaning: "Hal yang sudah aku ajarkan, tadinya aku tidak ingin kamu melupakannya lho." },
              { jp: "初心を忘れてほしくなかった。", kana: "しょしん を わすれてほしくなかった。", romaji: "Shoshin o wasurete hoshikunatta.", meaning: "Tadinya aku tidak ingin kamu melupakan niat/semangat awalmu." },
              { jp: "持ってくるように言ったのに、忘れてほしくなかった。", kana: "もって くる よう に いった のに、 わすれてほしくなかった。", romaji: "Motte kuru you ni itta noni, wasurete hoshikunatta.", meaning: "Padahal sudah kubilang bawa, tadinya aku tidak ingin kamu kelupaan." },
              { jp: "あの時の感謝の気持ちを忘れてほしくなかった。", kana: "あの とき の かんしゃ の きもち を わすれてほしくなかった。", romaji: "Ano toki no kansha no kimochi o wasurete hoshikunatta.", meaning: "Perasaan bersyukur waktu itu, tadinya aku tidak ingin kamu lupakan." },
              { jp: "先生には、私たちのことを忘れてほしくなかったです。(Sopan)", kana: "せんせい に は、 わたし たち の こと を わすれてほしくなかった です。", romaji: "Sensei ni wa, watashi tachi no koto o wasurete hoshikunatta desu.", meaning: "Tadinya kami tidak ingin Anda (Guru) melupakan tentang kami." }
            ]
          }]
        },
        {
          name: "Irregular",
          examples: [{
            base: "心配する",
            transformed: "心配してほしくなかった",
            kana: "しんぱいする → しんぱいしてほしくなかった",
            romaji: "shinpai suru → shinpai shite hoshikunatta",
            meaning: "tadinya tidak ingin (kamu) khawatir",
            sentences: [
              { jp: "親に心配してほしくなかったから、言わなかった。", kana: "おや に しんぱいしてほしくなかった から、 いわなかった。", romaji: "Oya ni shinpai shite hoshikunatta kara, iwanakatta.", meaning: "Karena tadinya tidak ingin membuat orang tua khawatir, aku tidak bilang." },
              { jp: "君には心配してほしくなかったんだ。", kana: "きみ に は しんぱいしてほしくなかった ん だ。", romaji: "Kimi ni wa shinpai shite hoshikunatta n da.", meaning: "Tadinya aku tidak ingin membuatmu khawatir lho." },
              { jp: "病気のことを隠していたのは、心配してほしくなかったからです。", kana: "びょうき の こと を かくして いた の は、 しんぱいしてほしくなかった から です。", romaji: "Byouki no koto o kakushite ita no wa, shinpai shite hoshikunatta kara desu.", meaning: "Alasan saya menyembunyikan soal penyakit ini adalah karena tadinya tidak ingin Anda khawatir." },
              { jp: "友達に余計な心配してほしくなかった。", kana: "ともだち に よけい な しんぱいしてほしくなかった。", romaji: "Tomodachi ni yokei na shinpai shite hoshikunatta.", meaning: "Tadinya aku tidak ingin teman-teman jadi khawatir berlebihan." },
              { jp: "すぐ治るから、心配してほしくなかったのに。", kana: "すぐ なおる から、 しんぱいしてほしくなかった のに。", romaji: "Sugu naoru kara, shinpai shite hoshikunatta noni.", meaning: "Padahal bakal cepat sembuh, tadinya aku tidak ingin kamu khawatir." },
              { jp: "遠くで暮らす家族に、心配してほしくなかった。", kana: "とおく で くらす かぞく に、 しんぱいしてほしくなかった。", romaji: "Tooku de kurasu kazoku ni, shinpai shite hoshikunatta.", meaning: "Tadinya aku tidak ingin keluarga yang tinggal jauh menjadi khawatir." },
              { jp: "一人で解決できるから、心配してほしくなかった。", kana: "ひとり で かいけつ できる から、 しんぱいしてほしくなかった。", romaji: "Hitori de kaiketsu dekiru kara, shinpai shite hoshikunatta.", meaning: "Karena bisa kuselesaikan sendiri, tadinya aku tidak ingin kamu khawatir." },
              { jp: "仕事のことで妻に心配してほしくなかった。", kana: "しごと の こと で つま に しんぱいしてほしくなかった。", romaji: "Shigoto no koto de tsuma ni shinpai shite hoshikunatta.", meaning: "Tadinya aku tidak ingin istriku khawatir soal pekerjaanku." },
              { jp: "怪我したことを知って、心配してほしくなかった。", kana: "けが した こと を しって、 しんぱいしてほしくなかった。", romaji: "Kega shita koto o shitte, shinpai shite hoshikunatta.", meaning: "Tadinya aku tidak ingin kamu tahu kalau aku terluka lalu jadi khawatir." },
              { jp: "なるべく誰にも心配してほしくなかった。", kana: "なるべく だれ に も しんぱいしてほしくなかった。", romaji: "Narubeku dare ni mo shinpai shite hoshikunatta.", meaning: "Sebisa mungkin tadinya aku tidak ingin siapapun menjadi khawatir." }
            ]
          }]
        }
      ]
    },
    {
      id: "vf-47",
      level: "N3",
      order: 47,
      title: "~るべきだ • Seharusnya / Sebaiknya",
      summary: "Seharusnya / Sebaiknya (N3). Digunakan untuk menyatakan sesuatu yang 'sudah sewajarnya' atau 'sangat disarankan' untuk dilakukan. Berasal dari pendapat umum, moral, atau pandangan kuat pembicara. Ini adalah bentuk biasa (plain).",
      formulas: [
        { group: "Godan", rule: "Bentuk kamus (dictionary form) + べきだ. Contoh: 謝る → 謝るべきだ." },
        { group: "Ichidan", rule: "Bentuk kamus + べきだ. Contoh: 見る → 見るべきだ." },
        { group: "Irregular", rule: "する → するべきだ (atau すべきだ). 来る → 来るべきだ (くるべきだ). Contoh: 勉強する → 勉強するべきだ." }
      ],
      groups: [
        {
          name: "Godan",
          examples: [{
            base: "謝る",
            transformed: "謝るべきだ",
            kana: "あやまる → あやまるべきだ",
            romaji: "ayamaru → ayamaru beki da",
            meaning: "seharusnya minta maaf",
            sentences: [
              { jp: "自分が間違ったなら、素直に謝るべきだ。", kana: "じぶん が まちがった なら、 すなお に あやまるべきだ。", romaji: "Jibun ga machigatta nara, sunao ni ayamaru beki da.", meaning: "Kalau diri sendiri yang salah, seharusnya minta maaf dengan jujur." },
              { jp: "彼を傷つけたのだから、君は謝るべきだ。", kana: "かれ を きずつけた の だから、 きみ は あやまるべきだ。", romaji: "Kare o kizutsuketa no dakara, kimi wa ayamaru beki da.", meaning: "Karena sudah menyakitinya, kamu seharusnya minta maaf." },
              { jp: "嘘をついたなら、すぐに謝るべきだ。", kana: "うそ を ついた なら、 すぐ に あやまるべきだ。", romaji: "Uso o tsuita nara, sugu ni ayamaru beki da.", meaning: "Kalau berbohong, seharusnya segera minta maaf." },
              { jp: "どんな理由があっても、遅刻したら謝るべきだ。", kana: "どんな りゆう が あっても、 ちこく したら あやまるべきだ。", romaji: "Donna riyuu ga attemo, chikoku shitara ayamaru beki da.", meaning: "Apa pun alasannya, kalau terlambat seharusnya minta maaf." },
              { jp: "親にひどいことを言ったなら、謝るべきだ。", kana: "おや に ひどい こと を いった なら、 あやまるべきだ。", romaji: "Oya ni hidoi koto o itta nara, ayamaru beki da.", meaning: "Kalau mengatakan hal kasar pada orang tua, seharusnya minta maaf." },
              { jp: "ミスをしたら、言い訳せずに謝るべきだ。", kana: "みす を したら、 いいわけ せず に あやまるべきだ。", romaji: "Misu o shitara, iiwake sezu ni ayamaru beki da.", meaning: "Kalau berbuat salah, seharusnya minta maaf tanpa mencari alasan." },
              { jp: "後悔する前に、早く謝るべきだ。", kana: "こうかい する まえ に、 はやく あやまるべきだ。", romaji: "Koukai suru mae ni, hayaku ayamaru beki da.", meaning: "Sebelum menyesal, seharusnya cepat minta maaf." },
              { jp: "約束を破ったのだから、まずは謝るべきだ。", kana: "やくそく を やぶった の だから、 まず は あやまるべきだ。", romaji: "Yakusoku o yabutta no dakara, mazu wa ayamaru beki da.", meaning: "Karena sudah melanggar janji, pertama-tama seharusnya minta maaf." },
              { jp: "たとえ相手も悪くても、自分から謝るべきだ。", kana: "たとえ あいて も わるくても、 じぶん から あやまるべきだ。", romaji: "Tatoe aite mo warukutemo, jibun kara ayamaru beki da.", meaning: "Meskipun pihak lawan juga salah, seharusnya kita yang minta maaf duluan." },
              { jp: "お客様には丁寧に謝るべきだ。", kana: "おきゃくさま に は ていねい に あやまるべきだ。", romaji: "Okyakusama ni wa teinei ni ayamaru beki da.", meaning: "Kepada pelanggan, kita seharusnya meminta maaf dengan sopan." }
            ]
          }]
        },
        {
          name: "Ichidan",
          examples: [{
            base: "見る",
            transformed: "見るべきだ",
            kana: "みる → みるべきだ",
            romaji: "miru → miru beki da",
            meaning: "seharusnya melihat/menonton",
            sentences: [
              { jp: "あの映画は名作だから、絶対に一度は見るべきだ。", kana: "あの えいが は めいさく だから、 ぜったい に いちど は みるべきだ。", romaji: "Ano eiga wa meisaku dakara, zettai ni ichido wa miru beki da.", meaning: "Karena film itu adalah mahakarya, mutlak seharusnya ditonton sekali." },
              { jp: "日本に行ったら、京都の桜は見るべきだ。", kana: "にほん に いったら、 きょうと の さくら は みるべきだ。", romaji: "Nihon ni ittara, Kyouto no sakura wa miru beki da.", meaning: "Kalau pergi ke Jepang, bunga sakura di Kyoto itu seharusnya dilihat." },
              { jp: "この本は、若い時にこそ見るべきだ。(読むべきだ is more common for books, but 見る works for visual books/materials)", kana: "この ほん は、 わかい とき に こそ みるべきだ。", romaji: "Kono hon wa, wakai toki ni koso miru beki da.", meaning: "Buku (visual/materi) ini, justru seharusnya dilihat saat masih muda." },
              { jp: "現実をしっかりと見るべきだ。", kana: "げんじつ を しっかり と みるべきだ。", romaji: "Genjitsu o shikkari to miru beki da.", meaning: "Kita seharusnya melihat kenyataan dengan jelas." },
              { jp: "契約書にサインする前に、内容をよく見るべきだ。", kana: "けいやくしょ に さいん する まえ に、 ないよう を よく みるべきだ。", romaji: "Keiyakusho ni sain suru mae ni, naiyou o yoku miru beki da.", meaning: "Sebelum tanda tangan kontrak, seharusnya melihat isinya dengan baik." },
              { jp: "彼の努力をもう少し見るべきだ。", kana: "かれ の どりょく を もう すこし みるべきだ。", romaji: "Kare no doryoku o mou sukoshi miru beki da.", meaning: "Seharusnya kita melihat (memperhatikan) usahanya sedikit lebih banyak." },
              { jp: "ニュースを見て、世界で何が起きているか見るべきだ。", kana: "にゅーす を みて、 せかい で なに が おきている か みるべきだ。", romaji: "Nyuusu o mite, sekai de nani ga okite iru ka miru beki da.", meaning: "Seharusnya kita melihat berita dan melihat apa yang terjadi di dunia." },
              { jp: "この素晴らしい景色は、自分の目で見るべきだ。", kana: "この すばらしい けしき は、 じぶん の め で みるべきだ。", romaji: "Kono subarashii keshiki wa, jibun no me de miru beki da.", meaning: "Pemandangan luar biasa ini, seharusnya dilihat dengan mata sendiri." },
              { jp: "失敗の原因を客観的に見るべきだ。", kana: "しっぱい の げんいん を きゃっかんてき に みるべきだ。", romaji: "Shippai no genin o kyakkanteki ni miru beki da.", meaning: "Seharusnya kita melihat penyebab kegagalan secara objektif." },
              { jp: "その美術展は、終わる前に見るべきだ。", kana: "その びじゅつてん は、 おわる まえ に みるべきだ。", romaji: "Sono bijutsuten wa, owaru mae ni miru beki da.", meaning: "Pameran seni itu, seharusnya dilihat sebelum berakhir." }
            ]
          }]
        },
        {
          name: "Irregular",
          examples: [{
            base: "勉強する",
            transformed: "勉強するべきだ",
            kana: "べんきょうする → べんきょうするべきだ",
            romaji: "benkyou suru → benkyou suru beki da",
            meaning: "seharusnya belajar",
            sentences: [
              { jp: "学生は遊んでばかりいないで、勉強するべきだ。", kana: "がくせい は あそんで ばかり いないで、 べんきょうするべきだ。", romaji: "Gakusei wa asonde bakari inaide, benkyou suru beki da.", meaning: "Pelajar jangan cuma main terus, seharusnya belajar." },
              { jp: "若いうちに、もっと色々なことを勉強するべきだ。", kana: "わかいうち に、 もっと いろいろ な こと を べんきょうするべきだ。", romaji: "Wakai uchi ni, motto iroiro na koto o benkyou suru beki da.", meaning: "Selagi masih muda, seharusnya mempelajari lebih banyak hal." },
              { jp: "社会人になっても、常に勉強するべきだ。", kana: "しゃかいじん に なっても、 つねに べんきょうするべきだ。", romaji: "Shakaijin ni nattemo, tsuneni benkyou suru beki da.", meaning: "Meskipun sudah jadi pekerja, seharusnya selalu belajar." },
              { jp: "外国へ行くなら、少しはその国の言葉を勉強するべきだ。", kana: "がいこく へ いく なら、 すこし は その くに の ことば を べんきょうするべきだ。", romaji: "Gaikoku e iku nara, sukoshi wa sono kuni no kotoba o benkyou suru beki da.", meaning: "Kalau pergi ke luar negeri, setidaknya seharusnya belajar sedikit bahasa negara tersebut." },
              { jp: "将来のために、お金について勉強するべきだ。", kana: "しょうらい の ため に、 おかね に ついて べんきょうするべきだ。", romaji: "Shourai no tame ni, okane ni tsuite benkyou suru beki da.", meaning: "Demi masa depan, seharusnya belajar tentang keuangan." },
              { jp: "テストの前日は、徹夜せずに集中して勉強するべきだ。", kana: "てすと の ぜんじつ は、 てつや せず に しゅうちゅう して べんきょうするべきだ。", romaji: "Tesuto no zenjitsu wa, tetsuya sezu ni shuuchuu shite benkyou suru beki da.", meaning: "Sehari sebelum ujian, seharusnya belajar dengan fokus tanpa begadang." },
              { jp: "歴史をしっかり勉強するべきだ。", kana: "れきし を しっかり べんきょうするべきだ。", romaji: "Rekishi o shikkari benkyou suru beki da.", meaning: "Kita seharusnya belajar sejarah dengan benar." },
              { jp: "自分の興味がある分野を深く勉強するべきだ。", kana: "じぶん の きょうみ が ある ぶんや を ふかく べんきょうするべきだ。", romaji: "Jibun no kyoumi ga aru bunya o fukaku benkyou suru beki da.", meaning: "Seharusnya kita belajar secara mendalam pada bidang yang kita minati." },
              { jp: "分からないことがあれば、自分で勉強するべきだ。", kana: "わからない こと が あれば、 じぶん で べんきょうするべきだ。", romaji: "Wakaranai koto ga areba, jibun de benkyou suru beki da.", meaning: "Kalau ada hal yang tidak dimengerti, seharusnya belajar sendiri." },
              { jp: "失敗から多くを勉強するべきだ。(学ぶべきだ is also very common)", kana: "しっぱい から おおく を べんきょうするべきだ。", romaji: "Shippai kara ooku o benkyou suru beki da.", meaning: "Kita seharusnya banyak belajar dari kegagalan." }
            ]
          }]
        }
      ]
    },
    {
      id: "vf-48",
      level: "N3",
      order: 48,
      title: "~るべきです • Seharusnya (Sopan)",
      summary: "Seharusnya (Sopan) (N3). Bentuk formal dari '~るべきだ'. Digunakan untuk memberikan saran kuat, menyatakan kewajiban moral, atau memberi tahu apa yang 'seharusnya' dilakukan kepada orang yang belum akrab, rekan kerja, atau dalam situasi formal.",
      formulas: [
        { group: "Godan", rule: "Bentuk kamus (dictionary form) + べきです. Contoh: 行く → 行くべきです." },
        { group: "Ichidan", rule: "Bentuk kamus + べきです. Contoh: 食べる → 食べるべきです." },
        { group: "Irregular", rule: "する → するべきです (atau すべきです). 来る → 来るべきです. Contoh: 報告する → 報告するべきです." }
      ],
      groups: [
        {
          name: "Godan",
          examples: [{
            base: "行く",
            transformed: "行くべきです",
            kana: "いく → いくべきです",
            romaji: "iku → iku beki desu",
            meaning: "seharusnya pergi",
            sentences: [
              { jp: "熱が下がらないなら、すぐに病院に行くべきです。", kana: "ねつ が さがらない なら、 すぐ に びょういん に いくべきです。", romaji: "Netsu ga sagaranai nara, sugu ni byouin ni iku beki desu.", meaning: "Kalau demamnya tidak turun, Anda seharusnya segera pergi ke rumah sakit." },
              { jp: "そのイベントは素晴らしいので、絶対に行くべきです。", kana: "その いべんと は すばらしい ので、 ぜったい に いくべきです。", romaji: "Sono ibento wa subarashii node, zettai ni iku beki desu.", meaning: "Karena acara itu luar biasa, Anda mutlak seharusnya pergi." },
              { jp: "直接会って、謝りに行くべきです。", kana: "ちょくせつ あって、 あやまり に いくべきです。", romaji: "Chokusetsu atte, ayamari ni iku beki desu.", meaning: "Anda seharusnya pergi untuk meminta maaf secara langsung." },
              { jp: "若い時は、色々な国へ行くべきです。", kana: "わかい とき は、 いろいろ な くに へ いくべきです。", romaji: "Wakai toki wa, iroiro na kuni e iku beki desu.", meaning: "Saat masih muda, Anda seharusnya pergi ke berbagai negara." },
              { jp: "会議には遅れずに、早めに行くべきです。", kana: "かいぎ に は おくれず に、 はやめ に いくべきです。", romaji: "Kaigi ni wa okurezu ni, hayame ni iku beki desu.", meaning: "Untuk rapat jangan sampai terlambat, seharusnya pergi lebih awal." },
              { jp: "道が混むので、今すぐ行くべきです。", kana: "みち が こむ ので、 いま すぐ いくべきです。", romaji: "Michi ga komu node, ima sugu iku beki desu.", meaning: "Karena jalanan akan macet, Anda seharusnya pergi sekarang juga." },
              { jp: "一度は彼のライブに行くべきですよ。", kana: "いちど は かれ の らいぶ に いくべきです よ。", romaji: "Ichido wa kare no raibu ni iku beki desu yo.", meaning: "Anda seharusnya pergi ke konser dia minimal sekali lho." },
              { jp: "わからないなら、専門家のところへ聞きに行くべきです。", kana: "わからない なら、 せんもんか の ところ へ きき に いくべきです。", romaji: "Wakaranai nara, senmonka no tokoro e kiki ni iku beki desu.", meaning: "Kalau tidak paham, seharusnya pergi bertanya ke ahlinya." },
              { jp: "危険な場所には、夜一人で行くべきではありません。(Negatif)", kana: "きけんな ばしょ に は、 よる ひとり で いくべきでは ありません。", romaji: "Kikenna basho ni wa, yoru hitori de iku beki dewa arimasen.", meaning: "Ke tempat berbahaya, Anda seharusnya tidak pergi sendirian di malam hari." },
              { jp: "チャンスがあるなら、海外留学に行くべきです。", kana: "ちゃんす が ある なら、 かいがい りゅうがく に いくべきです。", romaji: "Chansu ga aru nara, kaigai ryuugaku ni iku beki desu.", meaning: "Kalau ada kesempatan, Anda seharusnya pergi sekolah ke luar negeri." }
            ]
          }]
        },
        {
          name: "Ichidan",
          examples: [{
            base: "食べる",
            transformed: "食べるべきです",
            kana: "たべる → たべるべきです",
            romaji: "taberu → taberu beki desu",
            meaning: "seharusnya makan",
            sentences: [
              { jp: "健康のために、野菜をたくさん食べるべきです。", kana: "けんこう の ため に、 やさい を たくさん たべるべきです。", romaji: "Kenkou no tame ni, yasai o takusan taberu beki desu.", meaning: "Demi kesehatan, Anda seharusnya makan banyak sayuran." },
              { jp: "朝ごはんは、毎日しっかり食べるべきです。", kana: "あさごはん は、 まいにち しっかり たべるべきです。", romaji: "Asagohan wa, mainichi shikkari taberu beki desu.", meaning: "Sarapan itu, seharusnya dimakan dengan benar setiap hari." },
              { jp: "北海道に行ったら、海鮮を食べるべきです。", kana: "ほっかいどう に いったら、 かいせん を たべるべきです。", romaji: "Hokkaidou ni ittara, kaisen o taberu beki desu.", meaning: "Kalau pergi ke Hokkaido, Anda seharusnya makan hidangan laut." },
              { jp: "薬を飲む前に、何か食べるべきです。", kana: "くすり を のむ まえ に、 なにか たべるべきです。", romaji: "Kusuri o nomu mae ni, nanika taberu beki desu.", meaning: "Sebelum meminum obat, Anda seharusnya makan sesuatu." },
              { jp: "夜遅くに甘いものを食べるべきではありません。(Negatif)", kana: "よる おそく に あまい もの を たべるべきでは ありません。", romaji: "Yoru osoku ni amai mono o taberu beki dewa arimasen.", meaning: "Larut malam Anda seharusnya tidak makan makanan manis." },
              { jp: "この店のケーキは美味しいので、絶対に食べるべきです。", kana: "この みせ の けーき は おいしい ので、 ぜったい に たべるべきです。", romaji: "Kono mise no keeki wa oishii node, zettai ni taberu beki desu.", meaning: "Kue di toko ini enak, jadi Anda mutlak seharusnya memakannya." },
              { jp: "バランスよく食事を食べるべきです。", kana: "ばらんす よく しょくじ を たべるべきです。", romaji: "Baransu yoku shokuji o taberu beki desu.", meaning: "Anda seharusnya makan makanan dengan gizi yang seimbang." },
              { jp: "疲れたときは、お肉を食べるべきです。", kana: "つかれた とき は、 おにく を たべるべきです。", romaji: "Tsukareta toki wa, oniku o taberu beki desu.", meaning: "Saat kelelahan, Anda seharusnya makan daging." },
              { jp: "賞味期限が切れる前に食べるべきです。", kana: "しょうみきげん が きれる まえ に たべるべきです。", romaji: "Shoumikigen ga kireru mae ni taberu beki desu.", meaning: "Seharusnya dimakan sebelum tanggal kedaluwarsanya habis." },
              { jp: "食事中は、スマホを見ないで食べるべきです。", kana: "しょくじちゅう は、 すまほ を みないで たべるべきです。", romaji: "Shokujichuu wa, sumaho o minaide taberu beki desu.", meaning: "Saat sedang makan, seharusnya makan tanpa melihat HP." }
            ]
          }]
        },
        {
          name: "Irregular",
          examples: [{
            base: "報告する",
            transformed: "報告するべきです",
            kana: "ほうこくする → ほうこくするべきです",
            romaji: "houkoku suru → houkoku suru beki desu",
            meaning: "seharusnya melapor / melaporkan",
            sentences: [
              { jp: "仕事でミスをしたら、すぐに上司に報告するべきです。", kana: "しごと で みす を したら、 すぐ に じょうし に ほうこくするべきです。", romaji: "Shigoto de misu o shitara, sugu ni joushi ni houkoku suru beki desu.", meaning: "Kalau berbuat salah di pekerjaan, Anda seharusnya segera melapor kepada atasan." },
              { jp: "問題が起きたら、隠さずに報告するべきです。", kana: "もんだい が おきたら、 かくさず に ほうこくするべきです。", romaji: "Mondai ga okitara, kakusazu ni houkoku suru beki desu.", meaning: "Kalau terjadi masalah, seharusnya melaporkan tanpa menyembunyikannya." },
              { jp: "プロジェクトの進捗は、定期的に報告するべきです。", kana: "ぷろじぇくと の しんちょく は、 ていきてき に ほうこくするべきです。", romaji: "Purojekuto no shinchoku wa, teikiteki ni houkoku suru beki desu.", meaning: "Progres proyek seharusnya dilaporkan secara berkala." },
              { jp: "遅刻しそうな時は、必ず電話で報告するべきです。", kana: "ちこく しそう な とき は、 かならず でんわ で ほうこくするべきです。", romaji: "Chikoku shisou na toki wa, kanarazu denwa de houkoku suru beki desu.", meaning: "Saat sepertinya akan terlambat, Anda seharusnya selalu melapor lewat telepon." },
              { jp: "お客様からのクレームは、すぐに報告するべきです。", kana: "おきゃくさま から の くれーむ は、 すぐ に ほうこくするべきです。", romaji: "Okyakusama kara no kureemu wa, sugu ni houkoku suru beki desu.", meaning: "Komplain dari pelanggan seharusnya segera dilaporkan." },
              { jp: "些細なことでも、不安な点は報告するべきです。", kana: "ささい な こと で も、 ふあんな てん は ほうこくするべきです。", romaji: "Sasai na koto demo, fuanna ten wa houkoku suru beki desu.", meaning: "Bahkan hal sepele sekalipun, poin yang dirasa mengkhawatirkan seharusnya dilaporkan." },
              { jp: "結果だけでなく、過程も報告するべきです。", kana: "けっか だけでなく、 かてい も ほうこくするべきです。", romaji: "Kekka dake denaku, katei mo houkoku suru beki desu.", meaning: "Bukan hanya hasilnya, prosesnya pun seharusnya dilaporkan." },
              { jp: "事故があった場合は、警察に報告するべきです。", kana: "じこ が あった ばあい は、 けいさつ に ほうこくするべきです。", romaji: "Jiko ga atta baai wa, keisatsu ni houkoku suru beki desu.", meaning: "Apabila ada kecelakaan, seharusnya melapor kepada polisi." },
              { jp: "嘘の情報を報告するべきではありません。", kana: "うそ の じょうほう を ほうこくするべきでは ありません。", romaji: "Uso no jouhou o houkoku suru beki dewa arimasen.", meaning: "Anda seharusnya tidak melaporkan informasi bohong." },
              { jp: "変更があったら、関係者全員に報告するべきです。", kana: "へんこう が あったら、 かんけいしゃ ぜんいん に ほうこくするべきです。", romaji: "Henkou ga attara, kankeisha zenin ni houkoku suru beki desu.", meaning: "Kalau ada perubahan, seharusnya melapor ke semua staf yang bersangkutan." }
            ]
          }]
        }
      ]
    },
	{
      id: "vf-49",
      level: "N3",
      order: 49,
      title: "~るべきでしょう • Mungkin Sebaiknya",
      summary: "Mungkin Sebaiknya / Seharusnya (N3). Bentuk yang lebih halus dari '~るべきです'. Digunakan untuk memberikan saran secara tidak langsung atau mengungkapkan dugaan tentang apa yang seharusnya dilakukan agar terdengar lebih lembut dan tidak terlalu menggurui.",
      formulas: [
        { group: "Godan", rule: "Bentuk kamus (dictionary form) + べきでしょう. Contoh: 断る → 断るべきでしょう." },
        { group: "Ichidan", rule: "Bentuk kamus + べきでしょう. Contoh: 確かめる → 確かめるべきでしょう." },
        { group: "Irregular", rule: "する → するべきでしょう (atau すべきでしょう). 来る → 来るべきでしょう. Contoh: 我慢する → 我慢するべきでしょう." }
      ],
      groups: [
        {
          name: "Godan",
          examples: [{
            base: "断る",
            transformed: "断るべきでしょう",
            kana: "ことわる → ことわるべきでしょう",
            romaji: "kotowaru → kotowaru beki deshou",
            meaning: "mungkin sebaiknya ditolak",
            sentences: [
              { jp: "その怪しい誘いは、はっきりと断るべきでしょう。", kana: "その あやしい さそい は、 はっきり と ことわるべきでしょう。", romaji: "Sono ayashii sasoi wa, hakkiri to kotowaru beki deshou.", meaning: "Ajakan mencurigakan itu, mungkin sebaiknya ditolak dengan tegas." },
              { jp: "無理な仕事なら、断るべきでしょう。", kana: "むり な しごと なら、 ことわるべきでしょう。", romaji: "Muri na shigoto nara, kotowaru beki deshou.", meaning: "Kalau pekerjaannya mustahil, mungkin sebaiknya ditolak." },
              { jp: "気に入らないなら、遠慮せずに断るべきでしょう。", kana: "き に いらない なら、 えんりょ せず に ことわるべきでしょう。", romaji: "Ki ni iranai nara, enryo sezu ni kotowaru beki deshou.", meaning: "Kalau tidak suka, mungkin sebaiknya ditolak tanpa sungkan." },
              { jp: "気が進まないなら、今回は断るべきでしょう。", kana: "き が すすまない なら、 こんかい は ことわるべきでしょう。", romaji: "Ki ga susumanai nara, konkai wa kotowaru beki deshou.", meaning: "Kalau tidak tertarik, kali ini mungkin sebaiknya ditolak." },
              { jp: "高すぎる要求は、断るべきでしょう。", kana: "たかすぎる ようきゅう は、 ことわるべきでしょう。", romaji: "Takasugiru youkyuu wa, kotowaru beki deshou.", meaning: "Tuntutan yang terlalu tinggi, mungkin sebaiknya ditolak." },
              { jp: "スケジュールが合わないなら、早めに断るべきでしょう。", kana: "すけじゅーる が あわない なら、 はやめ に ことわるべきでしょう。", romaji: "Sukejuuru ga awanai nara, hayame ni kotowaru beki deshou.", meaning: "Kalau jadwalnya tidak pas, mungkin sebaiknya segera ditolak." },
              { jp: "お酒が飲めないなら、最初から断るべきでしょう。", kana: "おさけ が のめない なら、 さいしょ から ことわるべきでしょう。", romaji: "Osake ga nomenai nara, saisho kara kotowaru beki deshou.", meaning: "Kalau tidak bisa minum alkohol, mungkin sebaiknya ditolak dari awal." },
              { jp: "友達でも、お金の貸し借りは断るべきでしょう。", kana: "ともだち でも、 おかね の かしかり は ことわるべきでしょう。", romaji: "Tomodachi demo, okane no kashikari wa kotowaru beki deshou.", meaning: "Meskipun teman, pinjam-meminjam uang mungkin sebaiknya ditolak." },
              { jp: "嘘をついてまで引き受けるより、断るべきでしょう。", kana: "うそ を ついて まで ひきうける より、 ことわるべきでしょう。", romaji: "Uso o tsuite made hikiukeru yori, kotowaru beki deshou.", meaning: "Daripada menerima sampai harus berbohong, mungkin sebaiknya ditolak." },
              { jp: "条件が悪い契約は、断るべきでしょう。", kana: "じょうけん が わるい けいやく は、 ことわるべきでしょう。", romaji: "Jouken ga warui keiyaku wa, kotowaru beki deshou.", meaning: "Kontrak dengan syarat yang buruk, mungkin sebaiknya ditolak." }
            ]
          }]
        },
        {
          name: "Ichidan",
          examples: [{
            base: "確かめる",
            transformed: "確かめるべきでしょう",
            kana: "たしかめる → たしかめるべきでしょう",
            romaji: "tashikameru → tashikameru beki deshou",
            meaning: "mungkin sebaiknya dipastikan",
            sentences: [
              { jp: "サインする前に、契約書の内容を確かめるべきでしょう。", kana: "さいん する まえ に、 けいやくしょ の ないよう を たしかめるべきでしょう。", romaji: "Sain suru mae ni, keiyakusho no naiyou o tashikameru beki deshou.", meaning: "Sebelum tanda tangan, mungkin sebaiknya dipastikan isi kontraknya." },
              { jp: "本当かどうか、自分で確かめるべきでしょう。", kana: "ほんとう か どう か、 じぶん で たしかめるべきでしょう。", romaji: "Hontou ka dou ka, jibun de tashikameru beki deshou.", meaning: "Benar atau tidaknya, mungkin sebaiknya dipastikan sendiri." },
              { jp: "出発する前に、持ち物をもう一度確かめるべきでしょう。", kana: "しゅっぱつ する まえ に、 もちもの を もう いちど たしかめるべきでしょう。", romaji: "Shuppatsu suru mae ni, mochimono o mou ichido tashikameru beki deshou.", meaning: "Sebelum berangkat, mungkin sebaiknya barang bawaan dipastikan sekali lagi." },
              { jp: "うわさを信じる前に、事実を確かめるべきでしょう。", kana: "うわさ を しんじる まえ に、 じじつ を たしかめるべきでしょう。", romaji: "Uwasa o shinjiru mae ni, jijitsu o tashikameru beki deshou.", meaning: "Sebelum percaya rumor, mungkin sebaiknya dipastikan faktanya." },
              { jp: "お金を払う前に、商品の状態を確かめるべきでしょう。", kana: "おかね を はらう まえ に、 しょうひん の じょうたい を たしかめるべきでしょう。", romaji: "Okane o harau mae ni, shouhin no joutai o tashikameru beki deshou.", meaning: "Sebelum membayar, mungkin sebaiknya dipastikan kondisi barangnya." },
              { jp: "予約ができているか、電話で確かめるべきでしょう。", kana: "よやく が できている か、 でんわ で たしかめるべきでしょう。", romaji: "Yoyaku ga dekite iru ka, denwa de tashikameru beki deshou.", meaning: "Apakah reservasinya sudah berhasil, mungkin sebaiknya dipastikan lewat telepon." },
              { jp: "迷う前に、地図で場所を確かめるべきでしょう。", kana: "まよう まえ に、 ちず で ばしょ を たしかめるべきでしょう。", romaji: "Mayou mae ni, chizu de basho o tashikameru beki deshou.", meaning: "Sebelum tersesat, mungkin sebaiknya tempatnya dipastikan di peta." },
              { jp: "安全かどうか、先に確かめるべきでしょう。", kana: "あんぜん か どう か、 さき に たしかめるべきでしょう。", romaji: "Anzen ka dou ka, saki ni tashikameru beki deshou.", meaning: "Aman atau tidaknya, mungkin sebaiknya dipastikan lebih dulu." },
              { jp: "相手の気持ちを、直接確かめるべきでしょう。", kana: "あいて の きもち を、 ちょくせつ たしかめるべきでしょう。", romaji: "Aite no kimochi o, chokusetsu tashikameru beki deshou.", meaning: "Perasaan lawan bicara, mungkin sebaiknya dipastikan secara langsung." },
              { jp: "ミスがないか、最後に確かめるべきでしょう。", kana: "みす が ない か、 さいご に たしかめるべきでしょう。", romaji: "Misu ga nai ka, saigo ni tashikameru beki deshou.", meaning: "Apakah ada kesalahan, mungkin sebaiknya dipastikan di akhir." }
            ]
          }]
        },
        {
          name: "Irregular",
          examples: [{
            base: "我慢する",
            transformed: "我慢するべきでしょう",
            kana: "がまんする → がまんするべきでしょう",
            romaji: "gaman suru → gaman suru beki deshou",
            meaning: "mungkin sebaiknya bersabar/ditahan",
            sentences: [
              { jp: "今は怒りたい気持ちを我慢するべきでしょう。", kana: "いま は おこりたい きもち を がまんするべきでしょう。", romaji: "Ima wa okoritai kimochi o gaman suru beki deshou.", meaning: "Sekarang mungkin sebaiknya bersabar menahan rasa ingin marah." },
              { jp: "目標のために、少しは我慢するべきでしょう。", kana: "もくひょう の ため に、 すこし は がまんするべきでしょう。", romaji: "Mokuhyou no tame ni, sukoshi wa gaman suru beki deshou.", meaning: "Demi tujuan, mungkin sebaiknya bersabar sedikit." },
              { jp: "ダイエット中なら、甘いものは我慢するべきでしょう。", kana: "だいえっとちゅう なら、 あまい もの は がまんするべきでしょう。", romaji: "Daiettochuu nara, amai mono wa gaman suru beki deshou.", meaning: "Kalau sedang diet, mungkin sebaiknya menahan diri dari makanan manis." },
              { jp: "給料日前だから、無駄遣いは我慢するべきでしょう。", kana: "きゅうりょうび まえ だから、 むだづかい は がまんするべきでしょう。", romaji: "Kyuuryoubi mae dakara, mudazukai wa gaman suru beki deshou.", meaning: "Karena belum gajian, mungkin sebaiknya menahan diri dari pemborosan." },
              { jp: "会議中は、眠くても我慢するべきでしょう。", kana: "かいぎちゅう は、 ねむくても がまんするべきでしょう。", romaji: "Kaigichuu wa, nemukutemo gaman suru beki deshou.", meaning: "Saat rapat, walaupun mengantuk mungkin sebaiknya ditahan." },
              { jp: "相手が先輩なら、ここは我慢するべきでしょう。", kana: "あいて が せんぱい なら、 ここ は がまんするべきでしょう。", romaji: "Aite ga senpai nara, koko wa gaman suru beki deshou.", meaning: "Kalau lawannya senior, untuk saat ini mungkin sebaiknya bersabar." },
              { jp: "治るまでは、スポーツを我慢するべきでしょう。", kana: "なおる まで は、 すぽーつ を がまんするべきでしょう。", romaji: "Naoru made wa, supootsu o gaman suru beki deshou.", meaning: "Sampai sembuh, mungkin sebaiknya menahan diri dari olahraga." },
              { jp: "欲しいものがあっても、今は我慢するべきでしょう。", kana: "ほしい もの が あっても、 いま は がまんするべきでしょう。", romaji: "Hoshii mono ga attemo, ima wa gaman suru beki deshou.", meaning: "Walau ada barang yang diinginkan, sekarang mungkin sebaiknya menahan diri." },
              { jp: "ここで文句を言うのは我慢するべきでしょう。", kana: "ここ で もんく を いう の は がまんするべきでしょう。", romaji: "Koko de monku o iu no wa gaman suru beki deshou.", meaning: "Mengeluh di sini mungkin sebaiknya ditahan/bersabar dulu." },
              { jp: "チャンスが来るまで、じっと我慢するべきでしょう。", kana: "ちゃんす が くる まで、 じっと がまんするべきでしょう。", romaji: "Chansu ga kuru made, jitto gaman suru beki deshou.", meaning: "Sampai kesempatan datang, mungkin sebaiknya bersabar dengan tenang." }
            ]
          }]
        }
      ]
    },
    {
      id: "vf-50",
      level: "N4",
      order: 50,
      title: "~たほうがいい • Lebih Baik Melakukan",
      summary: "Lebih Baik Melakukan (N4). Digunakan untuk memberikan saran atau nasihat yang kuat, yang mengandung nuansa 'jika tidak dilakukan, maka akan berakibat buruk'. Rumusnya menggunakan kata kerja bentuk Lampau Plain (Ta-form).",
      formulas: [
        { group: "Godan", rule: "Ubah kata kerja ke bentuk Ta (た/だ), lalu tambah ほうがいい. Contoh: 聞く → 聞いた → 聞いたほうがいい." },
        { group: "Ichidan", rule: "Ubah kata kerja ke bentuk Ta (た), lalu tambah ほうがいい. Contoh: 片付ける → 片付けた → 片付けたほうがいい." },
        { group: "Irregular", rule: "する → したほうがいい, 来る (くる) → 来たほうがいい (きたほうがいい). Contoh: 貯金する → 貯金したほうがいい." }
      ],
      groups: [
        {
          name: "Godan",
          examples: [{
            base: "聞く",
            transformed: "聞いたほうがいい",
            kana: "きく → きいたほうがいい",
            romaji: "kiku → kiita hou ga ii",
            meaning: "lebih baik bertanya/mendengar",
            sentences: [
              { jp: "分からないことは、すぐに先生に聞いたほうがいいよ。", kana: "わからない こと は、 すぐ に せんせい に きいたほうがいい よ。", romaji: "Wakaranai koto wa, sugu ni sensei ni kiita hou ga ii yo.", meaning: "Hal yang tidak dimengerti, lebih baik segera ditanyakan pada guru lho." },
              { jp: "迷っているなら、先輩のアドバイスを聞いたほうがいい。", kana: "まよっている なら、 せんぱい の あどばいす を きいたほうがいい。", romaji: "Mayotte iru nara, senpai no adobaisu o kiita hou ga ii.", meaning: "Kalau bimbang, lebih baik mendengarkan saran senior." },
              { jp: "勝手に決めないで、彼女の意見も聞いたほうがいいよ。", kana: "かって に きめないで、 かのじょ の いけん も きいたほうがいい よ。", romaji: "Katte ni kimenaide, kanojo no iken mo kiita hou ga ii yo.", meaning: "Jangan memutuskan sendiri, lebih baik dengar pendapat dia juga lho." },
              { jp: "この道で合っているか、誰かに聞いたほうがいい。", kana: "この みち で あっている か、 だれか に きいたほうがいい。", romaji: "Kono michi de atte iru ka, dareka ni kiita hou ga ii.", meaning: "Apakah jalan ini benar, lebih baik bertanya pada seseorang." },
              { jp: "体の調子が悪いなら、医者の言うことを聞いたほうがいい。", kana: "からだ の ちょうし が わるい なら、 いしゃ の いう こと を きいたほうがいい。", romaji: "Karada no choushi ga warui nara, isha no iu koto o kiita hou ga ii.", meaning: "Kalau kondisi badan buruk, lebih baik dengarkan kata dokter." },
              { jp: "買う前に、店員さんに詳しい説明を聞いたほうがいい。", kana: "かう まえ に、 てんいんさん に くわしい せつめい を きいたほうがいい。", romaji: "Kau mae ni, teninsan ni kuwashii setsumei o kiita hou ga ii.", meaning: "Sebelum membeli, lebih baik tanyakan penjelasan detail pada pegawai toko." },
              { jp: "親の忠告は、素直に聞いたほうがいい。", kana: "おや の ちゅうこく は、 すなお に きいたほうがいい。", romaji: "Oya no chuukoku wa, sunao ni kiita hou ga ii.", meaning: "Nasihat orang tua itu, lebih baik didengarkan dengan patuh." },
              { jp: "経験者の話を一度聞いたほうがいいですよ。", kana: "けいけんしゃ の はなし を いちど きいたほうがいい です よ。", romaji: "Keikensha no hanashi o ichido kiita hou ga ii desu yo.", meaning: "Lebih baik dengarkan cerita orang yang berpengalaman minimal sekali." },
              { jp: "どうすればいいか、直接彼に聞いたほうがいい。", kana: "どう すれば いい か、 ちょくせつ かれ に きいたほうがいい。", romaji: "Dou sureba ii ka, chokusetsu kare ni kiita hou ga ii.", meaning: "Bagaimana baiknya, lebih baik tanyakan langsung padanya." },
              { jp: "トラブルになる前に、事情を聞いたほうがいい。", kana: "とらぶる に なる まえ に、 じじょう を きいたほうがいい。", romaji: "Toraburu ni naru mae ni, jijou o kiita hou ga ii.", meaning: "Sebelum jadi masalah, lebih baik tanyakan situasinya." }
            ]
          }]
        },
        {
          name: "Ichidan",
          examples: [{
            base: "片付ける",
            transformed: "片付けたほうがいい",
            kana: "かたづける → かたづけたほうがいい",
            romaji: "katadukeru → kataduketa hou ga ii",
            meaning: "lebih baik membereskan",
            sentences: [
              { jp: "お客さんが来るから、部屋を片付けたほうがいいよ。", kana: "おきゃくさん が くる から、 へや を かたづけたほうがいい よ。", romaji: "Okyakusan ga kuru kara, heya o kataduketa hou ga ii yo.", meaning: "Karena tamu mau datang, lebih baik kamarnya dibereskan lho." },
              { jp: "忘れないうちに、終わった仕事を片付けたほうがいい。", kana: "わすれない うち に、 おわった しごと を かたづけたほうがいい。", romaji: "Wasurenai uchi ni, owatta shigoto o kataduketa hou ga ii.", meaning: "Mumpung belum lupa, lebih baik bereskan pekerjaan yang sudah selesai." },
              { jp: "机の上くらいは、綺麗に片付けたほうがいい。", kana: "つくえ の うえ くらい は、 きれい に かたづけたほうがいい。", romaji: "Tsukue no ue kurai wa, kirei ni kataduketa hou ga ii.", meaning: "Setidaknya atas meja itu, lebih baik dibereskan dengan rapi." },
              { jp: "いらない服は、早めに片付けたほうがいい。", kana: "いらない ふく は、 はやめ に かたづけたほうがいい。", romaji: "Iranai fuku wa, hayame ni kataduketa hou ga ii.", meaning: "Baju yang tidak perlu, lebih baik segera dibereskan/disingkirkan." },
              { jp: "心のモヤモヤも、一度片付けたほうがいい。", kana: "こころ の もやもや も、 いちど かたづけたほうがいい。", romaji: "Kokoro no moyamoya mo, ichido kataduketa hou ga ii.", meaning: "Kegalauan di hati juga, lebih baik dibereskan dulu." },
              { jp: "ご飯を食べる前に、テーブルを片付けたほうがいい。", kana: "ごはん を たべる まえ に、 てーぶる を かたづけたほうがいい。", romaji: "Gohan o taberu mae ni, teeburu o kataduketa hou ga ii.", meaning: "Sebelum makan, lebih baik bereskan mejanya." },
              { jp: "使った道具は、すぐに片付けたほうがいい。", kana: "つかった どうぐ は、 すぐ に かたづけたほうがいい。", romaji: "Tsukatta dougu wa, sugu ni kataduketa hou ga ii.", meaning: "Alat yang habis dipakai, lebih baik segera dibereskan." },
              { jp: "散らかっていると集中できないから、片付けたほうがいい。", kana: "ちらかって いる と しゅうちゅう できない から、 かたづけたほうがいい。", romaji: "Chirakatte iru to shuuchuu dekinai kara, kataduketa hou ga ii.", meaning: "Karena tidak bisa fokus kalau berantakan, lebih baik dibereskan." },
              { jp: "年末になる前に、少しずつ片付けたほうがいい。", kana: "ねんまつ に なる まえ に、 すこしずつ かたづけたほうがいい。", romaji: "Nenmatsu ni naru mae ni, sukoshizutsu kataduketa hou ga ii.", meaning: "Sebelum akhir tahun, lebih baik dibereskan sedikit demi sedikit." },
              { jp: "邪魔になるから、その箱は片付けたほうがいい。", kana: "じゃま に なる から、 その はこ は かたづけたほうがいい。", romaji: "Jama ni naru kara, sono hako wa kataduketa hou ga ii.", meaning: "Karena bakal menghalangi, kardus itu lebih baik dibereskan." }
            ]
          }]
        },
        {
          name: "Irregular",
          examples: [{
            base: "貯金する",
            transformed: "貯金したほうがいい",
            kana: "ちょきんする → ちょきんしたほうがいい",
            romaji: "chokin suru → chokin shita hou ga ii",
            meaning: "lebih baik menabung",
            sentences: [
              { jp: "将来のために、今から貯金したほうがいいよ。", kana: "しょうらい の ため に、 いま から ちょきんしたほうがいい よ。", romaji: "Shourai no tame ni, ima kara chokin shita hou ga ii yo.", meaning: "Demi masa depan, lebih baik menabung dari sekarang lho." },
              { jp: "車を買いたいなら、毎月少しずつ貯金したほうがいい。", kana: "くるま を かいたい なら、 まいつき すこしずつ ちょきんしたほうがいい。", romaji: "Kuruma o kaitai nara, maitsuki sukoshizutsu chokin shita hou ga ii.", meaning: "Kalau mau beli mobil, lebih baik menabung sedikit-sedikit tiap bulan." },
              { jp: "無駄遣いを減らして、貯金したほうがいい。", kana: "むだづかい を へらして、 ちょきんしたほうがいい。", romaji: "Mudazukai o herashite, chokin shita hou ga ii.", meaning: "Lebih baik kurangi pemborosan dan mulai menabung." },
              { jp: "もしもの時のために、お金は貯金したほうがいいです。", kana: "もしも の とき の ため に、 おかね は ちょきんしたほうがいい です。", romaji: "Moshimo no toki no tame ni, okane wa chokin shita hou ga ii desu.", meaning: "Untuk persiapan jika terjadi sesuatu, uangnya lebih baik ditabung." },
              { jp: "ボーナスが出たら、全部使わずに貯金したほうがいい。", kana: "ぼーなす が でたら、 ぜんぶ つかわず に ちょきんしたほうがいい。", romaji: "Boonasu ga detara, zenbu tsukawazu ni chokin shita hou ga ii.", meaning: "Kalau bonus cair, lebih baik ditabung dan tidak dihabiskan semua." },
              { jp: "結婚したいなら、今のうちに貯金したほうがいい。", kana: "けっこん したい なら、 いま の うち に ちょきんしたほうがいい。", romaji: "Kekkon shitai nara, ima no uchi ni chokin shita hou ga ii.", meaning: "Kalau ingin menikah, mumpung sekarang lebih baik menabung." },
              { jp: "旅行に行くために、しっかり貯金したほうがいい。", kana: "りょこう に いく ため に、 しっかり ちょきんしたほうがいい。", romaji: "Ryokou ni iku tame ni, shikkari chokin shita hou ga ii.", meaning: "Untuk pergi liburan, lebih baik menabung dengan disiplin." },
              { jp: "老後のために、計画的に貯金したほうがいい。", kana: "ろうご の ため に、 けいかくてき に ちょきんしたほうがいい。", romaji: "Rougo no tame ni, keikakuteki ni chokin shita hou ga ii.", meaning: "Demi masa tua, lebih baik menabung secara terencana." },
              { jp: "若いうちから、少しでも貯金したほうがいい。", kana: "わかい うち から、 すこし でも ちょきんしたほうがいい。", romaji: "Wakai uchi kara, sukoshi demo chokin shita hou ga ii.", meaning: "Meskipun masih muda, lebih baik menabung walau sedikit." },
              { jp: "アルバイトの給料は、半分くらい貯金したほうがいいよ。", kana: "あるばいと の きゅうりょう は、 はんぶん くらい ちょきんしたほうがいい よ。", romaji: "Arubaito no kyuuryou wa, hanbun kurai chokin shita hou ga ii yo.", meaning: "Gaji kerja sambilan itu, lebih baik ditabung sekitar setengahnya lho." }
            ]
          }]
        }
      ]
    },
    {
      id: "vf-51",
      level: "N4",
      order: 51,
      title: "~ないほうがいい • Lebih Baik Tidak Melakukan",
      summary: "Lebih Baik Tidak Melakukan (N4). Ini adalah bentuk negatif dari '~たほうがいい'. Digunakan untuk memberikan peringatan keras atau melarang sesuatu demi kebaikan orang tersebut. Rumusnya menggunakan kata kerja bentuk Negatif Plain (Nai-form).",
      formulas: [
        { group: "Godan", rule: "Ubah kata kerja ke bentuk Nai (ない), lalu tambah ほうがいい. Contoh: 触る → 触らない → 触らないほうがいい." },
        { group: "Ichidan", rule: "Ubah kata kerja ke bentuk Nai (ない), lalu tambah ほうがいい. Contoh: 信じる → 信じない → 信じないほうがいい." },
        { group: "Irregular", rule: "する → しないほうがいい, 来る (くる) → 来ないほうがいい (こないほうがいい). Contoh: 期待する → 期待しないほうがいい." }
      ],
      groups: [
        {
          name: "Godan",
          examples: [{
            base: "触る",
            transformed: "触らないほうがいい",
            kana: "さわる → さわらないほうがいい",
            romaji: "sawaru → sawaranai hou ga ii",
            meaning: "lebih baik tidak menyentuh",
            sentences: [
              { jp: "その機械は壊れているから、触らないほうがいいよ。", kana: "その きかい は こわれている から、 さわらないほうがいい よ。", romaji: "Sono kikai wa kowarete iru kara, sawaranai hou ga ii yo.", meaning: "Mesin itu sedang rusak, jadi lebih baik jangan disentuh lho." },
              { jp: "彼は今怒っているから、触らないほうがいい。", kana: "かれ は いま おこって いる から、 さわらないほうがいい。", romaji: "Kare wa ima okotte iru kara, sawaranai hou ga ii.", meaning: "Dia sekarang sedang marah, lebih baik jangan disenggol/disentuh." },
              { jp: "熱いかもしれないから、鍋に触らないほうがいい。", kana: "あつい かもしれない から、 なべ に さわらないほうがいい。", romaji: "Atsui kamoshirenai kara, nabe ni sawaranai hou ga ii.", meaning: "Karena mungkin panas, lebih baik jangan sentuh pancinya." },
              { jp: "美術館の作品には、絶対に触らないほうがいい。", kana: "びじゅつかん の さくひん に は、 ぜったい に さわらないほうがいい。", romaji: "Bijutsukan no sakuhin ni wa, zettai ni sawaranai hou ga ii.", meaning: "Karya seni di museum, mutlak lebih baik jangan disentuh." },
              { jp: "汚い手で、顔を触らないほうがいいですよ。", kana: "きたない て で、 かお を さわらないほうがいい です よ。", romaji: "Kitanai te de, kao o sawaranai hou ga ii desu yo.", meaning: "Dengan tangan kotor, lebih baik jangan sentuh wajah lho." },
              { jp: "毒があるかもしれないから、その虫には触らないほうがいい。", kana: "どく が ある かもしれない から、 その むし に は さわらないほうがいい。", romaji: "Doku ga aru kamoshirenai kara, sono mushi ni wa sawaranai hou ga ii.", meaning: "Karena mungkin beracun, lebih baik jangan sentuh serangga itu." },
              { jp: "人のスマホは、勝手に触らないほうがいい。", kana: "ひと の すまほ は、 かって に さわらないほうがいい。", romaji: "Hito no sumaho wa, katte ni sawaranai hou ga ii.", meaning: "HP orang lain, lebih baik jangan disentuh sembarangan." },
              { jp: "傷口はばい菌が入るから、触らないほうがいい。", kana: "きずぐち は ばいきん が はいる から、 さわらないほうがいい。", romaji: "Kizuguchi wa baikin ga hairu kara, sawaranai hou ga ii.", meaning: "Karena bakteri bisa masuk, luka itu lebih baik jangan disentuh." },
              { jp: "他の人のパソコンには、触らないほうがいいです。", kana: "ほか の ひと の ぱそこん に は、 さわらないほうがいい です。", romaji: "Hoka no hito no pasokon ni wa, sawaranai hou ga ii desu.", meaning: "Komputer orang lain, lebih baik jangan disentuh." },
              { jp: "危ない犬だから、触らないほうがいいよ。", kana: "あぶない いぬ だから、 さわらないほうがいい よ。", romaji: "Abunai inu dakara, sawaranai hou ga ii yo.", meaning: "Karena itu anjing yang berbahaya, lebih baik jangan disentuh lho." }
            ]
          }]
        },
        {
          name: "Ichidan",
          examples: [{
            base: "信じる",
            transformed: "信じないほうがいい",
            kana: "しんじる → しんじないほうがいい",
            romaji: "shinjiru → shinjinai hou ga ii",
            meaning: "lebih baik tidak percaya",
            sentences: [
              { jp: "ネットの怪しい情報を、簡単に信じないほうがいいよ。", kana: "ねっと の あやしい じょうほう を、 かんたん に しんじないほうがいい よ。", romaji: "Netto no ayashii jouhou o, kantan ni shinjinai hou ga ii yo.", meaning: "Informasi mencurigakan di internet, lebih baik jangan mudah dipercaya lho." },
              { jp: "あの人の言うことは、あまり信じないほうがいい。", kana: "あの ひと の いう こと は、 あまり しんじないほうがいい。", romaji: "Ano hito no iu koto wa, amari shinjinai hou ga ii.", meaning: "Perkataan orang itu, lebih baik jangan terlalu dipercaya." },
              { jp: "うまい話には裏があるから、信じないほうがいい。", kana: "うまい はなし に は うら が ある から、 しんじないほうがいい。", romaji: "Umai hanashi ni wa ura ga aru kara, shinjinai hou ga ii.", meaning: "Tawaran yang terlalu manis biasanya ada udang di balik batu, jadi lebih baik jangan dipercaya." },
              { jp: "占いの結果を、すべて信じないほうがいい。", kana: "うらない の けっか を、 すべて しんじないほうがいい。", romaji: "Uranai no kekka o, subete shinjinai hou ga ii.", meaning: "Hasil ramalan, lebih baik jangan dipercaya semuanya." },
              { jp: "根拠のないうわさは、信じないほうがいい。", kana: "こんきょ の ない うわさ は、 しんじないほうがいい。", romaji: "Konkyo no nai uwasa wa, shinjinai hou ga ii.", meaning: "Rumor tanpa bukti yang jelas, lebih baik jangan dipercaya." },
              { jp: "「絶対に儲かる」という言葉は、信じないほうがいい。", kana: "「ぜったい に もうかる」 という ことば は、 しんじないほうがいい。", romaji: "'Zettai ni moukaru' to iu kotoba wa, shinjinai hou ga ii.", meaning: "Kata-kata 'Pasti untung', lebih baik jangan dipercaya." },
              { jp: "嘘つきの言葉は、二度と信じないほうがいい。", kana: "うそつき の ことば は、 にど と しんじないほうがいい。", romaji: "Usotsuki no kotoba wa, nido to shinjinai hou ga ii.", meaning: "Perkataan pembohong, lebih baik jangan dipercaya untuk kedua kalinya." },
              { jp: "自分の目で見ない限り、信じないほうがいい。", kana: "じぶん の め で みない かぎり、 しんじないほうがいい。", romaji: "Jibun no me de minai kagiri, shinjinai hou ga ii.", meaning: "Selama belum melihat dengan mata kepala sendiri, lebih baik jangan dipercaya." },
              { jp: "調子がいいだけの人は、信じないほうがいい。", kana: "ちょうし が いい だけ の ひと は、 しんじないほうがいい。", romaji: "Choushi ga ii dake no hito wa, shinjinai hou ga ii.", meaning: "Orang yang cuma manis di bibir saja, lebih baik jangan dipercaya." },
              { jp: "フェイクニュースが多いから、すぐに信じないほうがいい。", kana: "ふぇいく にゅーす が おおい から、 すぐ に しんじないほうがいい。", romaji: "Feiku nyuusu ga ooi kara, sugu ni shinjinai hou ga ii.", meaning: "Karena banyak berita palsu, lebih baik jangan langsung percaya." }
            ]
          }]
        },
        {
          name: "Irregular",
          examples: [{
            base: "期待する",
            transformed: "期待しないほうがいい",
            kana: "きたいする → きたいしないほうがいい",
            romaji: "kitai suru → kitai shinai hou ga ii",
            meaning: "lebih baik tidak berharap",
            sentences: [
              { jp: "あの映画、あまり期待しないほうがいいよ。", kana: "あの えいが、 あまり きたいしないほうがいい よ。", romaji: "Ano eiga, amari kitai shinai hou ga ii yo.", meaning: "Film itu, lebih baik jangan terlalu berharap tinggi lho." },
              { jp: "彼が手伝ってくれると期待しないほうがいい。", kana: "かれ が てつだって くれる と きたいしないほうがいい。", romaji: "Kare ga tetsudatte kureru to kitai shinai hou ga ii.", meaning: "Lebih baik jangan berharap dia akan membantumu." },
              { jp: "宝くじに当たるなんて、期待しないほうがいい。", kana: "たからくじ に あたる なんて、 きたいしないほうがいい。", romaji: "Takarakuji ni ataru nante, kitai shinai hou ga ii.", meaning: "Menang lotre itu, lebih baik jangan terlalu diharapkan." },
              { jp: "他人に期待しないほうが、人生は楽になる。", kana: "たにん に きたいしないほうが、 じんせい は らく に なる。", romaji: "Tanin ni kitai shinai hou ga, jinsei wa raku ni naru.", meaning: "Lebih baik tidak berharap pada orang lain, hidup akan jadi lebih mudah." },
              { jp: "今回のボーナスは、期待しないほうがいいみたいだ。", kana: "こんかい の ぼーなす は、 きたいしないほうがいい みたい だ。", romaji: "Konkai no boonasu wa, kitai shinai hou ga ii mitai da.", meaning: "Bonus kali ini, sepertinya lebih baik jangan terlalu diharapkan." },
              { jp: "最初から完璧を期待しないほうがいい。", kana: "さいしょ から かんぺき を きたいしないほうがいい。", romaji: "Saisho kara kanpeki o kitai shinai hou ga ii.", meaning: "Dari awal, lebih baik jangan mengharapkan kesempurnaan." },
              { jp: "返事がすぐに来るなんて、期待しないほうがいい。", kana: "へんじ が すぐ に くる なんて、 きたいしないほうがいい。", romaji: "Henji ga sugu ni kuru nante, kitai shinai hou ga ii.", meaning: "Balasan akan datang cepat, lebih baik jangan diharapkan." },
              { jp: "奇跡を期待しないほうがいい、自分で努力するべきだ。", kana: "きせき を きたいしないほうがいい、 じぶん で どりょく する べき だ。", romaji: "Kiseki o kitai shinai hou ga ii, jibun de doryoku suru beki da.", meaning: "Lebih baik jangan mengharapkan keajaiban, seharusnya berusaha sendiri." },
              { jp: "大きな見返りを期待しないほうがいい。", kana: "おおきな みかえり を きたいしないほうがいい。", romaji: "Ookina mikaeri o kitai shinai hou ga ii.", meaning: "Lebih baik jangan mengharapkan imbalan yang besar." },
              { jp: "約束を守るとは限らないから、期待しないほうがいい。", kana: "やくそく を まもる と は かぎらない から、 きたいしないほうがいい。", romaji: "Yakusoku o mamoru to wa kagiranai kara, kitai shinai hou ga ii.", meaning: "Belum tentu dia menepati janji, jadi lebih baik jangan terlalu berharap." }
            ]
          }]
        }
      ]
    },
	{
      id: "vf-52",
      level: "N4",
      order: 52,
      title: "~ましょう • Ajakan Sopan",
      summary: "Ajakan Sopan (N4). Digunakan untuk mengajak seseorang melakukan sesuatu bersama-sama dengan cara yang sopan. Artinya 'Mari kita...'. Sering digunakan dalam situasi formal, di kantor, atau saat berbicara dengan orang yang tidak terlalu akrab.",
      formulas: [
        { group: "Godan", rule: "Ubah vokal akhir deretan 'u' menjadi 'i', lalu tambah ましょう. Contoh: 探す → 探し → 探しましょう." },
        { group: "Ichidan", rule: "Hilangkan 'る' (ru) di akhir, ganti dengan ましょう. Contoh: 始める → 始めましょう." },
        { group: "Irregular", rule: "する → しましょう, 来る (くる) → 来ましょう (きましょう). Contoh: 準備する → 準備しましょう." }
      ],
      groups: [
        {
          name: "Godan",
          examples: [{
            base: "探す",
            transformed: "探しましょう",
            kana: "さがす → さがしましょう",
            romaji: "sagasu → sagashimashou",
            meaning: "mari kita cari",
            sentences: [
              { jp: "なくした鍵を、一緒に探しましょう。", kana: "なくした かぎ を、 いっしょ に さがしましょう。", romaji: "Nakushita kagi o, issho ni sagashimashou.", meaning: "Mari kita cari kunci yang hilang itu bersama-sama." },
              { jp: "もっと良い方法を探しましょう。", kana: "もっと よい ほうほう を さがしましょう。", romaji: "Motto yoi houhou o sagashimashou.", meaning: "Mari kita cari cara yang lebih baik." },
              { jp: "お昼ご飯を食べるお店を探しましょう。", kana: "おひるごはん を たべる おみせ を さがしましょう。", romaji: "Ohirugohan o taberu omise o sagashimashou.", meaning: "Mari kita cari restoran untuk makan siang." },
              { jp: "迷子になった子供を探しましょう。", kana: "まいご に なった こども を さがしましょう。", romaji: "Maigo ni natta kodomo o sagashimashou.", meaning: "Mari kita cari anak yang tersesat itu." },
              { jp: "ネットで安いホテルを探しましょう。", kana: "ねっと で やすい ほてる を さがしましょう。", romaji: "Netto de yasui hoteru o sagashimashou.", meaning: "Mari kita cari hotel murah di internet." },
              { jp: "トラブルの原因を探しましょう。", kana: "とらぶる の げんいん を さがしましょう。", romaji: "Toraburu no genin o sagashimashou.", meaning: "Mari kita cari penyebab dari masalah ini." },
              { jp: "雨が降ってきたので、雨宿りできる場所を探しましょう。", kana: "あめ が ふってきた ので、 あまやどり できる ばしょ を さがしましょう。", romaji: "Ame ga futte kita node, amayadori dekiru basho o sagashimashou.", meaning: "Karena mulai hujan, mari kita cari tempat berteduh." },
              { jp: "会議のための資料を探しましょう。", kana: "かいぎ の ため の しりょう を さがしましょう。", romaji: "Kaigi no tame no shiryou o sagashimashou.", meaning: "Mari kita cari dokumen untuk rapat." },
              { jp: "新しい仕事を探しましょう。", kana: "あたらしい しごと を さがしましょう。", romaji: "Atarashii shigoto o sagashimashou.", meaning: "Mari kita cari pekerjaan baru." },
              { jp: "休みの日に遊べる場所を探しましょう。", kana: "やすみ の ひ に あそべる ばしょ を さがしましょう。", romaji: "Yasumi no hi ni asoberu basho o sagashimashou.", meaning: "Mari kita cari tempat bermain untuk hari libur." }
            ]
          }]
        },
        {
          name: "Ichidan",
          examples: [{
            base: "始める",
            transformed: "始めましょう",
            kana: "はじめる → はじめましょう",
            romaji: "hajimeru → hajimemashou",
            meaning: "mari kita mulai",
            sentences: [
              { jp: "時間になりましたので、会議を始めましょう。", kana: "じかん に なりました ので、 かいぎ を はじめましょう。", romaji: "Jikan ni narimashita node, kaigi o hajimemashou.", meaning: "Karena sudah waktunya, mari kita mulai rapatnya." },
              { jp: "さあ、今日の授業を始めましょう。", kana: "さあ、 きょう の じゅぎょう を はじめましょう。", romaji: "Saa, kyou no jugyou o hajimemashou.", meaning: "Nah, mari kita mulai pelajaran hari ini." },
              { jp: "新しいプロジェクトを始めましょう。", kana: "あたらしい ぷろじぇくと を はじめましょう。", romaji: "Atarashii purojekuto o hajimemashou.", meaning: "Mari kita mulai proyek baru." },
              { jp: "まずは、自己紹介から始めましょう。", kana: "まず は、 じこしょうかい から はじめましょう。", romaji: "Mazu wa, jikoshoukai kara hajimemashou.", meaning: "Pertama-tama, mari kita mulai dari perkenalan diri." },
              { jp: "みんな集まったので、パーティーを始めましょう。", kana: "みんな あつまった ので、 ぱーてぃー を はじめましょう。", romaji: "Minna atsumatta node, paatii o hajimemashou.", meaning: "Karena semua sudah berkumpul, mari kita mulai pestanya." },
              { jp: "健康のために、ジョギングを始めましょう。", kana: "けんこう の ため に、 じょぎんぐ を はじめましょう。", romaji: "Kenkou no tame ni, jogingu o hajimemashou.", meaning: "Demi kesehatan, mari kita mulai (rutin) lari santai." },
              { jp: "できるところから片付けを始めましょう。", kana: "できる ところ から かたづけ を はじめましょう。", romaji: "Dekiru tokoro kara kataduke o hajimemashou.", meaning: "Mari kita mulai beres-beres dari tempat yang bisa dikerjakan." },
              { jp: "準備ができた人から始めましょう。", kana: "じゅんび が できた ひと から はじめましょう。", romaji: "Junbi ga dekita hito kara hajimemashou.", meaning: "Mari kita mulai dari orang yang sudah siap." },
              { jp: "将来のために、貯金を始めましょう。", kana: "しょうらい の ため に、 ちょきん を はじめましょう。", romaji: "Shourai no tame ni, chokin o hajimemashou.", meaning: "Demi masa depan, mari kita mulai menabung." },
              { jp: "明日からダイエットを始めましょう。", kana: "あした から だいえっと を はじめましょう。", romaji: "Ashita kara daietto o hajimemashou.", meaning: "Mulai besok mari kita mulai diet." }
            ]
          }]
        },
        {
          name: "Irregular",
          examples: [{
            base: "準備する",
            transformed: "準備しましょう",
            kana: "じゅんびする → じゅんびしましょう",
            romaji: "junbi suru → junbi shimashou",
            meaning: "mari kita bersiap / mempersiapkan",
            sentences: [
              { jp: "明日の旅行のために、荷物を準備しましょう。", kana: "あした の りょこう の ため に、 にもつ を じゅんびしましょう。", romaji: "Ashita no ryokou no tame ni, nimotsu o junbi shimashou.", meaning: "Untuk liburan besok, mari kita siapkan barang bawaannya." },
              { jp: "プレゼンの資料を準備しましょう。", kana: "ぷれぜん の しりょう を じゅんびしましょう。", romaji: "Purezen no shiryou o junbi shimashou.", meaning: "Mari kita siapkan dokumen untuk presentasi." },
              { jp: "お客さんが来る前に、お茶を準備しましょう。", kana: "おきゃくさん が くる まえ に、 おちゃ を じゅんびしましょう。", romaji: "Okyakusan ga kuru mae ni, ocha o junbi shimashou.", meaning: "Sebelum tamu datang, mari kita siapkan teh." },
              { jp: "冬になる前に、暖かい服を準備しましょう。", kana: "ふゆ に なる まえ に、 あたたかい ふく を じゅんびしましょう。", romaji: "Fuyu ni naru mae ni, atatakai fuku o junbi shimashou.", meaning: "Sebelum musim dingin tiba, mari kita siapkan pakaian hangat." },
              { jp: "パーティーの飾り付けを準備しましょう。", kana: "ぱーてぃー の かざりつけ を じゅんびしましょう。", romaji: "Paatii no kazaritsuke o junbi shimashou.", meaning: "Mari kita siapkan dekorasi untuk pestanya." },
              { jp: "面接の前に、答える内容を準備しましょう。", kana: "めんせつ の まえ に、 こたえる ないよう を じゅんびしましょう。", romaji: "Mensetsu no mae ni, kotaeru naiyou o junbi shimashou.", meaning: "Sebelum wawancara, mari kita siapkan jawaban yang akan disampaikan." },
              { jp: "急な雨のために、傘を準備しましょう。", kana: "きゅうな あめ の ため に、 かさ を じゅんびしましょう。", romaji: "Kyuuna ame no tame ni, kasa o junbi shimashou.", meaning: "Untuk berjaga-jaga hujan tiba-tiba, mari kita siapkan payung." },
              { jp: "テストに向けて、しっかり復習を準備しましょう。", kana: "てすと に むけて、 しっかり ふくしゅう を じゅんびしましょう。", romaji: "Tesuto ni mukete, shikkari fukushuu o junbi shimashou.", meaning: "Menjelang ujian, mari persiapkan materi ulasan dengan baik." },
              { jp: "もしもの時に備えて、お金を準備しましょう。", kana: "もしも の とき に そなえて、 おかね を じゅんびしましょう。", romaji: "Moshimo no toki ni sonaete, okane o junbi shimashou.", meaning: "Untuk bersiap jika terjadi sesuatu, mari kita siapkan uang." },
              { jp: "早起きして、朝ごはんを準備しましょう。", kana: "はやおき して、 あさごはん を じゅんびしましょう。", romaji: "Hayaoki shite, asagohan o junbi shimashou.", meaning: "Mari bangun pagi dan siapkan sarapan." }
            ]
          }]
        }
      ]
    },
    {
      id: "vf-53",
      level: "N3",
      order: 53,
      title: "~ようとする • Berniat / Mencoba Melakukan",
      summary: "Berniat / Mencoba Melakukan (N3). Digunakan ketika seseorang 'sedang mencoba' atau 'hendak' melakukan suatu tindakan. Sering dipakai untuk kejadian yang terinterupsi, gagal, atau menunjukkan usaha keras untuk melakukan sesuatu.",
      formulas: [
        { group: "Godan", rule: "Ubah vokal akhir ke deretan 'o', lalu tambah うとする. Contoh: 思い出す → 思い出そうとする." },
        { group: "Ichidan", rule: "Hilangkan 'る' (ru) di akhir, ganti dengan ようとする. Contoh: 逃げる → 逃げようとする." },
        { group: "Irregular", rule: "する → しようとする, 来る (くる) → 来ようとする (こようとする). Contoh: 集中する → 集中しようとする." }
      ],
      groups: [
        {
          name: "Godan",
          examples: [{
            base: "思い出す",
            transformed: "思い出そうとする",
            kana: "おもいだす → おもいだそうとする",
            romaji: "omoidasu → omoidasou to suru",
            meaning: "mencoba mengingat kembali",
            sentences: [
              { jp: "彼の名前を思い出そうとするが、出てこない。", kana: "かれ の なまえ を おもいだそうとする が、 でて こない。", romaji: "Kare no namae o omoidasou to suru ga, dete konai.", meaning: "Aku mencoba mengingat namanya, tapi tidak ingat juga." },
              { jp: "パスワードを一生懸命思い出そうとした。(Lampau)", kana: "ぱすわーど を いっしょうけんめい おもいだそうとした。", romaji: "Pasuwaado o isshoukenmei omoidasou to shita.", meaning: "Aku tadinya berusaha keras mencoba mengingat kata sandi." },
              { jp: "昨日の夢を思い出そうとしている。(Sedang berlangsung)", kana: "きのう の ゆめ を おもいだそうとしている。", romaji: "Kinou no yume o omoidasou to shite iru.", meaning: "Aku sedang mencoba mengingat kembali mimpi kemarin." },
              { jp: "あの映画のタイトルを思い出そうとする。", kana: "あの えいが の たいとる を おもいだそうとする。", romaji: "Ano eiga no taitoru o omoidasou to suru.", meaning: "Aku mencoba mengingat kembali judul film itu." },
              { jp: "財布をどこに置いたか思い出そうとする。", kana: "さいふ を どこ に おいた か おもいだそうとする。", romaji: "Saifu o doko ni oita ka omoidasou to suru.", meaning: "Aku mencoba mengingat di mana tadi meletakkan dompet." },
              { jp: "昔の記憶を思い出そうとすると、頭が痛くなる。", kana: "むかし の きおく を おもいだそうとする と、 あたま が いたく なる。", romaji: "Mukashi no kioku o omoidasou to suru to, atama ga itaku naru.", meaning: "Kalau aku mencoba mengingat kenangan lama, kepalaku jadi sakit." },
              { jp: "先生が言ったことを思い出そうとする。", kana: "せんせい が いった こと を おもいだそうとする。", romaji: "Sensei ga itta koto o omoidasou to suru.", meaning: "Aku mencoba mengingat hal yang dikatakan oleh guru." },
              { jp: "子供の頃の出来事を思い出そうとする。", kana: "こども の ころ の できごと を おもいだそうとする。", romaji: "Kodomo no koro no dekigoto o omoidasou to suru.", meaning: "Aku mencoba mengingat kejadian saat masih kecil." },
              { jp: "英語の単語を思い出そうとしたが、忘れてしまった。", kana: "えいご の たんご を おもいだそうとした が、 わすれて しまった。", romaji: "Eigo no tango o omoidasou to shita ga, wasurete shimatta.", meaning: "Tadinya aku mencoba mengingat kosakata bahasa Inggris, tapi terlanjur lupa." },
              { jp: "曲のメロディーを思い出そうとする。", kana: "きょく の めろでぃー を おもいだそうとする。", romaji: "Kyoku no merodii o omoidasou to suru.", meaning: "Aku mencoba mengingat melodi lagunya." }
            ]
          }]
        },
        {
          name: "Ichidan",
          examples: [{
            base: "逃げる",
            transformed: "逃げようとする",
            kana: "にげる → にげようとする",
            romaji: "nigeru → nigeyou to suru",
            meaning: "berniat/mencoba kabur",
            sentences: [
              { jp: "泥棒が窓から逃げようとした。", kana: "どろぼう が まど から にげようとした。", romaji: "Dorobou ga mado kara nigeyou to shita.", meaning: "Pencuri itu mencoba melarikan diri dari jendela." },
              { jp: "猫が風呂から逃げようとする。", kana: "ねこ が ふろ から にげようとする。", romaji: "Neko ga furo kara nigeyou to suru.", meaning: "Kucing itu mencoba kabur dari bak mandi." },
              { jp: "彼は嫌な現実から逃げようとしている。", kana: "かれ は いやな げんじつ から にげようとしている。", romaji: "Kare wa iyana genjitsu kara nigeyou to shite iru.", meaning: "Dia sedang mencoba melarikan diri dari kenyataan yang menyebalkan." },
              { jp: "犯人が警察から逃げようとしたが、捕まった。", kana: "はんにん が けいさつ から にげようとした が、 つかまった。", romaji: "Hannin ga keisatsu kara nigeyou to shita ga, tsukamatta.", meaning: "Pelakunya mencoba melarikan diri dari polisi, tapi tertangkap." },
              { jp: "責任から逃げようとするのはよくない。", kana: "せきにん から にげようとする の は よく ない。", romaji: "Sekinin kara nigeyou to suru no wa yoku nai.", meaning: "Mencoba lari dari tanggung jawab itu tidak baik." },
              { jp: "虫が部屋から逃げようとしている。", kana: "むし が へや から にげようとしている。", romaji: "Mushi ga heya kara nigeyou to shite iru.", meaning: "Serangga itu sedang berusaha kabur dari kamar." },
              { jp: "ピンチになると、彼はいつも逃げようとする。", kana: "ぴんち に なる と、 かれ は いつも にげようとする。", romaji: "Pinchi ni naru to, kare wa itsumo nigeyou to suru.", meaning: "Kalau sedang dalam krisis, dia selalu mencoba kabur." },
              { jp: "犬が家から逃げようとするので、ドアを閉めた。", kana: "いぬ が いえ から にげようとする ので、 どあ を しめた。", romaji: "Inu ga ie kara nigeyou to suru node, doa o shimeta.", meaning: "Karena anjingnya mencoba kabur dari rumah, aku menutup pintu." },
              { jp: "面倒な仕事から逃げようとするな。", kana: "めんどう な しごと から にげようとする な。", romaji: "Mendou na shigoto kara nigeyou to suru na.", meaning: "Jangan mencoba lari dari pekerjaan yang merepotkan." },
              { jp: "彼は言い訳をして、逃げようとした。", kana: "かれ は いいわけ を して、 にげようとした。", romaji: "Kare wa iiwake o shite, nigeyou to shita.", meaning: "Dia beralasan dan mencoba melarikan diri." }
            ]
          }]
        },
        {
          name: "Irregular",
          examples: [{
            base: "集中する",
            transformed: "集中しようとする",
            kana: "しゅうちゅうする → しゅうちゅうしようとする",
            romaji: "shuuchuu suru → shuuchuu shiyou to suru",
            meaning: "mencoba fokus/konsentrasi",
            sentences: [
              { jp: "勉強に集中しようとするが、周りがうるさい。", kana: "べんきょう に しゅうちゅうしようとする が、 まわり が うるさい。", romaji: "Benkyou ni shuuchuu shiyou to suru ga, mawari ga urusai.", meaning: "Aku mencoba fokus belajar, tapi sekitarnya berisik." },
              { jp: "仕事に集中しようとしたが、眠くてできなかった。", kana: "しごと に しゅうちゅうしようとした が、 ねむくて できなかった。", romaji: "Shigoto ni shuuchuu shiyou to shita ga, nemukute dekinakatta.", meaning: "Tadinya aku mencoba fokus pada pekerjaan, tapi tidak bisa karena ngantuk." },
              { jp: "深呼吸をして、試合に集中しようとする。", kana: "しんこきゅう を して、 しあい に しゅうちゅうしようとする。", romaji: "Shinkokyuu o shite, shiai ni shuuchuu shiyou to suru.", meaning: "Mengambil napas dalam, dan mencoba fokus pada pertandingan." },
              { jp: "本を読むことに集中しようとしている。", kana: "ほん を よむ こと に しゅうちゅうしようとしている。", romaji: "Hon o yomu koto ni shuuchuu shiyou to shite iru.", meaning: "Aku sedang mencoba fokus untuk membaca buku." },
              { jp: "会議の話に集中しようとするが、別のことを考えてしまう。", kana: "かいぎ の はなし に しゅうちゅうしようとする が、 べつ の こと を かんがえて しまう。", romaji: "Kaigi no hanashi ni shuuchuu shiyou to suru ga, betsu no koto o kangaete shimau.", meaning: "Mencoba fokus pada obrolan rapat, tapi malah terlanjur memikirkan hal lain." },
              { jp: "パソコンの画面に集中しようとする。", kana: "ぱそこん の がめん に しゅうちゅうしようとする。", romaji: "Pasokon no gamen ni shuuchuu shiyou to suru.", meaning: "Mencoba fokus pada layar komputer." },
              { jp: "運転に集中しようとする。", kana: "うんてん に しゅうちゅうしようとする。", romaji: "Unten ni shuuchuu shiyou to suru.", meaning: "Mencoba fokus pada mengemudi." },
              { jp: "音楽を聴きながら、作業に集中しようとした。", kana: "おんがく を ききながら、 さぎょう に しゅうちゅうしようとした。", romaji: "Ongaku o kikinagara, sagyou ni shuuchuu shiyou to shita.", meaning: "Tadinya mencoba fokus pada pekerjaan sambil mendengarkan musik." },
              { jp: "痛みを忘れるために、他のことに集中しようとする。", kana: "いたみ を わすれる ため に、 ほか の こと に しゅうちゅうしようとする。", romaji: "Itami o wasureru tame ni, hoka no koto ni shuuchuu shiyou to suru.", meaning: "Demi melupakan rasa sakit, mencoba fokus pada hal lain." },
              { jp: "カメラのレンズを見て、集中しようとする。", kana: "かめら の れんず を みて、 しゅうちゅうしようとする。", romaji: "Kamera no renzu o mite, shuuchuu shiyou to suru.", meaning: "Melihat lensa kamera dan mencoba fokus." }
            ]
          }]
        }
      ]
    },
    {
      id: "vf-54",
      level: "N4",
      order: 54,
      title: "~やすい • Mudah Dilakukan",
      summary: "Mudah Dilakukan (N4). Digunakan untuk menyatakan bahwa suatu tindakan itu mudah dilakukan, atau benda tersebut memiliki sifat yang membuat tindakan itu gampang terjadi. Berkonjugasi seperti kata sifat-i.",
      formulas: [
        { group: "Godan", rule: "Ubah vokal akhir deretan 'u' menjadi 'i', lalu tambah やすい. Contoh: 歩く → 歩き → 歩きやすい." },
        { group: "Ichidan", rule: "Hilangkan 'る' (ru) di akhir, ganti dengan やすい. Contoh: 覚える → 覚えやすい." },
        { group: "Irregular", rule: "する → しやすい, 来る (くる) → 来やすい (きやすい). Contoh: 理解する → 理解しやすい." }
      ],
      groups: [
        {
          name: "Godan",
          examples: [{
            base: "歩く",
            transformed: "歩きやすい",
            kana: "あるく → あるきやすい",
            romaji: "aruku → arukiyasui",
            meaning: "mudah/nyaman berjalan",
            sentences: [
              { jp: "このスニーカーは、とても歩きやすいです。", kana: "この すにーかー は、 とても あるきやすい です。", romaji: "Kono suniikaa wa, totemo arukiyasui desu.", meaning: "Sneakers ini, sangat nyaman (mudah) untuk berjalan." },
              { jp: "この道は平らなので、歩きやすい。", kana: "この みち は たいら なので、 あるきやすい。", romaji: "Kono michi wa taira nanode, arukiyasui.", meaning: "Karena jalan ini rata, jadi mudah untuk berjalan." },
              { jp: "ヒールが低い靴のほうが、歩きやすいよ。", kana: "ひーる が ひくい くつ の ほう が、 あるきやすい よ。", romaji: "Hiiru ga hikui kutsu no hou ga, arukiyasui yo.", meaning: "Sepatu yang haknya rendah itu lebih enak untuk berjalan lho." },
              { jp: "ここは歩道が広いから、歩きやすい。", kana: "ここ は ほどう が ひろい から、 あるきやすい。", romaji: "Koko wa hodou ga hiroi kara, arukiyasui.", meaning: "Karena trotoar di sini lebar, jadi nyaman buat pejalan kaki." },
              { jp: "雪が降った後は、道が滑って歩きにくい。(Sebaliknya: 歩きやすい)", kana: "ゆき が ふった あと は、 みち が すべって あるきにくい。(あるきやすい)", romaji: "Yuki ga futta ato wa, michi ga subette arukinikui. (arukiyasui)", meaning: "Setelah turun salju, jalanan licin dan susah berjalan. (Sebaliknya: mudah berjalan)" },
              { jp: "新しい靴はまだ硬くて、歩きやすくない。", kana: "あたらしい くつ は まだ かたくて、 あるきやすくない。", romaji: "Atarashii kutsu wa mada katakute, arukiyasukunai.", meaning: "Sepatu baru masih keras, jadi tidak nyaman untuk berjalan." },
              { jp: "歩きやすい靴で来てください。", kana: "あるきやすい くつ で きて ください。", romaji: "Arukiyasui kutsu de kite kudasai.", meaning: "Tolong datang dengan sepatu yang nyaman untuk berjalan." },
              { jp: "この公園は、散歩するのに歩きやすい。", kana: "この こうえん は、 さんぽ する の に あるきやすい。", romaji: "Kono kouen wa, sanpo suru no ni arukiyasui.", meaning: "Taman ini sangat enak/mudah buat jalan-jalan (jogging)." },
              { jp: "荷物が少ないと、歩きやすいですね。", kana: "にもつ が すくない と、 あるきやすい です ね。", romaji: "Nimotsu ga sukunai to, arukiyasui desu ne.", meaning: "Kalau barang bawaannya sedikit, jadi mudah untuk berjalan ya." },
              { jp: "サンダルより靴のほうが歩きやすい。", kana: "さんだる より くつ の ほう が あるきやすい。", romaji: "Sandaru yori kutsu no hou ga arukiyasui.", meaning: "Daripada sandal, sepatu lebih nyaman dipakai berjalan." }
            ]
          }]
        },
        {
          name: "Ichidan",
          examples: [{
            base: "覚える",
            transformed: "覚えやすい",
            kana: "おぼえる → おぼえやすい",
            romaji: "oboeru → oboeyasui",
            meaning: "mudah diingat / gampang dihafal",
            sentences: [
              { jp: "この曲はメロディーがシンプルで、覚えやすい。", kana: "この きょく は めろでぃー が しんぷる で、 おぼえやすい。", romaji: "Kono kyoku wa merodii ga shinpuru de, oboeyasui.", meaning: "Lagu ini melodinya simpel, jadi mudah dihafal." },
              { jp: "彼の名前は短くて覚えやすいです。", kana: "かれ の なまえ は みじかくて おぼえやすい です。", romaji: "Kare no namae wa mijikakute oboeyasui desu.", meaning: "Namanya pendek jadi mudah diingat." },
              { jp: "この単語帳は、絵がついていて覚えやすい。", kana: "この たんごちょう は、 え が ついて いて おぼえやすい。", romaji: "Kono tangochou wa, e ga tsuite ite oboeyasui.", meaning: "Buku kosakata ini ada gambarnya jadi mudah dihafal." },
              { jp: "覚えやすいパスワードは、危険です。", kana: "おぼえやすい ぱすわーど は、 きけん です。", romaji: "Oboeyasui pasuwaado wa, kiken desu.", meaning: "Kata sandi yang mudah diingat itu berbahaya." },
              { jp: "電話番号が「1234」で、とても覚えやすい。", kana: "でんわばんごう が いちにさんよん で、 とても おぼえやすい。", romaji: "Denwabangou ga ichi-ni-san-yon de, totemo oboeyasui.", meaning: "Nomor teleponnya 1234, jadi sangat mudah diingat." },
              { jp: "ルールが簡単で、覚えやすいゲームだ。", kana: "るーる が かんたん で、 おぼえやすい げーむ だ。", romaji: "Ruuru ga kantan de, oboeyasui geemu da.", meaning: "Ini adalah game yang aturannya gampang dan mudah dihafal." },
              { jp: "この文法は、覚えやすくて便利ですね。", kana: "この ぶんぽう は、 おぼえやすくて べんり です ね。", romaji: "Kono bunpou wa, oboeyasukute benri desu ne.", meaning: "Tata bahasa ini mudah dihafal dan praktis ya." },
              { jp: "顔に特徴がある人は、覚えやすいです。", kana: "かお に とくちょう が ある ひと は、 おぼえやすい です。", romaji: "Kao ni tokuchou ga aru hito wa, oboeyasui desu.", meaning: "Orang yang wajahnya punya ciri khas itu mudah diingat." },
              { jp: "もっと覚えやすい方法はありませんか？", kana: "もっと おぼえやすい ほうほう は ありません か？", romaji: "Motto oboeyasui houhou wa arimasen ka?", meaning: "Apakah tidak ada cara yang lebih mudah untuk menghafalnya?" },
              { jp: "語呂合わせを作ると、歴史の年号が覚えやすい。", kana: "ごろあわせ を つくる と、 れきし の ねんごう が おぼえやすい。", romaji: "Goroawase o tsukuru to, rekishi no nengou ga oboeyasui.", meaning: "Kalau bikin pelesetan kata, tahun sejarah jadi gampang dihafal." }
            ]
          }]
        },
        {
          name: "Irregular",
          examples: [{
            base: "理解する",
            transformed: "理解しやすい",
            kana: "りかいする → りかいしやすい",
            romaji: "rikai suru → rikai shiyasui",
            meaning: "mudah dipahami",
            sentences: [
              { jp: "先生の説明は、とても理解しやすいです。", kana: "せんせい の せつめい は、 とても りかいしやすい です。", romaji: "Sensei no setsumei wa, totemo rikai shiyasui desu.", meaning: "Penjelasan guru sangat mudah dipahami." },
              { jp: "この本は図が多くて、初心者に理解しやすい。", kana: "この ほん は ず が おおくて、 しょしんしゃ に りかいしやすい。", romaji: "Kono hon wa zu ga ookute, shoshinsha ni rikai shiyasui.", meaning: "Buku ini banyak gambarnya, jadi mudah dipahami untuk pemula." },
              { jp: "理解しやすい言葉で説明してください。", kana: "りかいしやすい ことば で せつめい して ください。", romaji: "Rikai shiyasui kotoba de setsumei shite kudasai.", meaning: "Tolong jelaskan dengan kata-kata yang mudah dipahami." },
              { jp: "あのニュースの解説は、とても理解しやすかった。", kana: "あの にゅーす の かいせつ は、 とても りかいしやすかった。", romaji: "Ano nyuusu no kaisetsu wa, totemo rikai shiyasukatta.", meaning: "Ulasan berita itu tadi sangat mudah dipahami." },
              { jp: "グラフを使うと、データが理解しやすくなる。", kana: "ぐらふ を つかう と、 でーた が りかいしやすくなる。", romaji: "Gurafu o tsukau to, deeta ga rikai shiyasuku naru.", meaning: "Kalau menggunakan grafik, datanya jadi mudah dipahami." },
              { jp: "外国の人にも理解しやすい日本語を使いましょう。", kana: "がいこく の ひと に も りかいしやすい にほんご を つかいましょう。", romaji: "Gaikoku no hito ni mo rikai shiyasui nihongo o tsukaimashou.", meaning: "Mari gunakan bahasa Jepang yang mudah dipahami juga oleh orang asing." },
              { jp: "このマニュアルは、少し理解しにくい。(Sebaliknya: 理解しやすい)", kana: "この まにゅある は、 すこし りかいしにくい。(りかいしやすい)", romaji: "Kono manyuaru wa, sukoshi rikai shinikui. (rikai shiyasui)", meaning: "Buku panduan ini agak sulit dipahami. (Sebaliknya: mudah dipahami)" },
              { jp: "例え話があると、複雑な問題も理解しやすい。", kana: "たとえばなし が ある と、 ふくざつ な もんだい も りかいしやすい。", romaji: "Tatoebanashi ga aru to, fukuzatsu na mondai mo rikai shiyasui.", meaning: "Kalau ada perumpamaan, masalah yang rumit pun jadi mudah dipahami." },
              { jp: "彼のプレゼンは、要点がまとまっていて理解しやすい。", kana: "かれ の ぷれぜん は、 ようてん が まとまって いて りかいしやすい。", romaji: "Kare no purezen wa, youten ga matomatte ite rikai shiyasui.", meaning: "Presentasinya dia poin-poinnya rapi sehingga mudah dipahami." },
              { jp: "誰にでも理解しやすいデザインを目指しています。", kana: "だれ に でも りかいしやすい でざいん を めざして います。", romaji: "Dare ni demo rikai shiyasui dezain o mezashite imasu.", meaning: "Saya menargetkan desain yang mudah dipahami oleh siapa saja." }
            ]
          }]
        }
      ]
    },
	{
      id: "vf-55",
      level: "N4",
      order: 55,
      title: "~にくい • Sulit Dilakukan",
      summary: "Sulit Dilakukan (N4). Kebalikan dari '~やすい'. Digunakan untuk menyatakan bahwa suatu tindakan itu sulit atau tidak nyaman untuk dilakukan karena sifat dari benda atau situasinya. Berkonjugasi seperti kata sifat-i.",
      formulas: [
        { group: "Godan", rule: "Ubah vokal akhir deretan 'u' menjadi 'i' (bentuk masu), lalu tambah にくい. Contoh: 使う → 使い → 使いにくい." },
        { group: "Ichidan", rule: "Hilangkan 'る' (ru) di akhir, ganti dengan にくい. Contoh: 信じる → 信じにくい." },
        { group: "Irregular", rule: "する → しにくい, 来る (くる) → 来にくい (きにくい). Contoh: 運転する → 運転しにくい." }
      ],
      groups: [
        {
          name: "Godan",
          examples: [{
            base: "使う",
            transformed: "使いにくい",
            kana: "つかう → つかいにくい",
            romaji: "tsukau → tsukainikui",
            meaning: "sulit/tidak nyaman digunakan",
            sentences: [
              { jp: "この新しいアプリは、少し使いにくいです。", kana: "この あたらしい あぷり は、 すこし つかいにくい です。", romaji: "Kono atarashii apuri wa, sukoshi tsukainikui desu.", meaning: "Aplikasi baru ini agak sulit digunakan." },
              { jp: "デザインはおしゃれだけど、このペンは使いにくい。", kana: "でざいん は おしゃれ だけど、 この ぺん は つかいにくい。", romaji: "Dezain wa oshare dakedo, kono pen wa tsukainikui.", meaning: "Desainnya sih modis, tapi pulpen ini tidak nyaman digunakan." },
              { jp: "外国のお箸は、長くて使いにくいです。", kana: "がいこく の おはし は、 ながくて つかいにくい です。", romaji: "Gaikoku no ohashi wa, nagakute tsukainikui desu.", meaning: "Sumpit luar negeri itu panjang jadi sulit digunakan." },
              { jp: "ボタンが小さすぎて、このパソコンは使いにくい。", kana: "ぼたん が ちいさすぎて、 この ぱそこん は つかいにくい。", romaji: "Botan ga chiisasugite, kono pasokon wa tsukainikui.", meaning: "Karena tombolnya terlalu kecil, komputer ini sulit digunakan." },
              { jp: "左利きの人にとって、このハサミは使いにくい。", kana: "ひだりきき の ひと に とって、 この はさみ は つかいにくい。", romaji: "Hidarikiki no hito ni totte, kono hasami wa tsukainikui.", meaning: "Bagi orang kidal, gunting ini sulit digunakan." },
              { jp: "画面が割れているスマホは使いにくいよ。", kana: "がめん が われている すまほ は つかいにくい よ。", romaji: "Gamen ga warete iru sumaho wa tsukainikui yo.", meaning: "HP yang layarnya retak itu susah digunakan lho." },
              { jp: "この道具は、重くて使いにくい。", kana: "この どうぐ は、 おもくて つかいにくい。", romaji: "Kono dougu wa, omokute tsukainikui.", meaning: "Alat ini berat dan sulit digunakan." },
              { jp: "説明書が外国語だと、とても使いにくいです。", kana: "せつめいしょ が がいこくご だ と、 とても つかいにくい です。", romaji: "Setsumeisho ga gaikokugo da to, totemo tsukainikui desu.", meaning: "Kalau buku panduannya bahasa asing, sangat sulit untuk menggunakannya." },
              { jp: "古い機械は、すぐ止まるから使いにくい。", kana: "ふるい きかい は、 すぐ とまる から つかいにくい。", romaji: "Furui kikai wa, sugu tomaru kara tsukainikui.", meaning: "Mesin lama itu cepat mati/berhenti, jadinya sulit digunakan." },
              { jp: "この財布はお札が出しにくくて、使いにくい。", kana: "この さいふ は おさつ が だしにくくて、 つかいにくい。", romaji: "Kono saifu wa osatsu ga dashinikukute, tsukainikui.", meaning: "Dompet ini susah untuk mengeluarkan uang kertas, jadi tidak nyaman digunakan." }
            ]
          }]
        },
        {
          name: "Ichidan",
          examples: [{
            base: "信じる",
            transformed: "信じにくい",
            kana: "しんじる → しんじにくい",
            romaji: "shinjiru → shinjinikui",
            meaning: "sulit dipercaya",
            sentences: [
              { jp: "彼の話は、いつも大げさで信じにくい。", kana: "かれ の はなし は、 いつも おおげさ で しんじにくい。", romaji: "Kare no hanashi wa, itsumo oogesa de shinjinikui.", meaning: "Ceritanya dia itu selalu berlebihan jadi sulit dipercaya." },
              { jp: "ネットの噂は嘘が多いから、信じにくいです。", kana: "ねっと の うわさ は うそ が おおい から、 しんじにくい です。", romaji: "Netto no uwasa wa uso ga ooi kara, shinjinikui desu.", meaning: "Rumor di internet banyak bohongnya, jadi sulit dipercaya." },
              { jp: "昨日まで元気だったのに、亡くなったなんて信じにくい。", kana: "きのう まで げんき だった のに、 なくなった なんて しんじにくい。", romaji: "Kinou made genki datta noni, nakunatta nante shinjinikui.", meaning: "Padahal sampai kemarin masih sehat, sulit dipercaya kalau dia sudah meninggal." },
              { jp: "あの真面目な人が遅刻するなんて、信じにくい。", kana: "あの まじめ な ひと が ちこく する なんて、 しんじにくい。", romaji: "Ano majime na hito ga chikoku suru nante, shinjinikui.", meaning: "Orang yang rajin/serius itu terlambat, rasanya sulit dipercaya." },
              { jp: "映画のような本当の話で、ちょっと信じにくいです。", kana: "えいが の ような ほんとう の はなし で、 ちょっと しんじにくい です。", romaji: "Eiga no youna hontou no hanashi de, chotto shinjinikui desu.", meaning: "Kisah nyata yang seperti film, jadinya agak sulit dipercaya." },
              { jp: "宝くじで一億円当たったなんて、信じにくい。", kana: "たからくじ で いちおくえん あたった なんて、 しんじにくい。", romaji: "Takarakuji de ichiokuen atatta nante, shinjinikui.", meaning: "Menang lotre 100 juta yen itu, sulit dipercaya." },
              { jp: "証拠がないと、その話は信じにくいですよ。", kana: "しょうこ が ない と、 その はなし は しんじにくい です よ。", romaji: "Shouko ga nai to, sono hanashi wa shinjinikui desu yo.", meaning: "Tanpa adanya bukti, cerita itu sulit dipercaya lho." },
              { jp: "UFOを見たという彼の言葉は、信じにくい。", kana: "ゆーふぉー を みた という かれ の ことば は、 しんじにくい。", romaji: "Yuufoo o mita to iu kare no kotoba wa, shinjinikui.", meaning: "Perkataannya yang bilang melihat UFO itu sulit dipercaya." },
              { jp: "そんなにうまい話があるなんて、信じにくい。", kana: "そんな に うまい はなし が ある なんて、 しんじにくい。", romaji: "Sonna ni umai hanashi ga aru nante, shinjinikui.", meaning: "Sulit dipercaya kalau ada tawaran yang semanis itu." },
              { jp: "あまりにも完璧すぎて、逆に信じにくい。", kana: "あまり に も かんぺき すぎて、 ぎゃく に しんじにくい。", romaji: "Amari ni mo kanpeki sugite, gyaku ni shinjinikui.", meaning: "Karena terlalu sempurna, malah kebalikannya jadi sulit dipercaya." }
            ]
          }]
        },
        {
          name: "Irregular",
          examples: [{
            base: "運転する",
            transformed: "運転しにくい",
            kana: "うんてんする → うんてんしにくい",
            romaji: "unten suru → unten shinikui",
            meaning: "sulit dikemudikan / susah disetir",
            sentences: [
              { jp: "大雨の日は前が見えないので、運転しにくいです。", kana: "おおあめ の ひ は まえ が みえない ので、 うんてんしにくい です。", romaji: "Ooame no hi wa mae ga mienai node, unten shinikui desu.", meaning: "Karena depan tidak terlihat saat hujan deras, jadi sulit mengemudi." },
              { jp: "この車は大きすぎて、細い道では運転しにくい。", kana: "この くるま は おおきすぎて、 ほそい みち で は うんてんしにくい。", romaji: "Kono kuruma wa ookisugite, hosoi michi de wa unten shinikui.", meaning: "Mobil ini terlalu besar, di jalan sempit jadi sulit dikemudikan." },
              { jp: "雪道は滑るので、とても運転しにくい。", kana: "ゆきみち は すべる ので、 とても うんてんしにくい。", romaji: "Yukimichi wa suberu node, totemo unten shinikui.", meaning: "Jalanan bersalju itu licin, jadi sangat sulit dikemudikan." },
              { jp: "初めて乗る人の車は、慣れていないから運転しにくい。", kana: "はじめて のる ひと の くるま は、 なれていない から うんてんしにくい。", romaji: "Hajimete noru hito no kuruma wa, narete inai kara unten shinikui.", meaning: "Mobil orang yang baru pertama kali dinaiki, sulit dikemudikan karena belum terbiasa." },
              { jp: "夜の山道は暗くて運転しにくい。", kana: "よる の やまみち は くらくて うんてんしにくい。", romaji: "Yoru no yamamichi wa kurakute unten shinikui.", meaning: "Jalan pegunungan di malam hari itu gelap dan sulit dikemudikan." },
              { jp: "ハンドルが重くて、このトラックは運転しにくい。", kana: "はんどる が おもくて、 この とらっく は うんてんしにくい。", romaji: "Handoru ga omokute, kono torakku wa unten shinikui.", meaning: "Setirnya berat, truk ini jadi sulit dikemudikan." },
              { jp: "人が多い街の中は、運転しにくいですね。", kana: "ひと が おおい まち の なか は、 うんてんしにくい です ね。", romaji: "Hito ga ooi machi no naka wa, unten shinikui desu ne.", meaning: "Di dalam kota yang banyak orangnya, sulit mengemudi ya." },
              { jp: "マニュアル車は、渋滞の時に運転しにくい。", kana: "まにゅあるしゃ は、 じゅうたい の とき に うんてんしにくい。", romaji: "Manyuarusha wa, juutai no toki ni unten shinikui.", meaning: "Mobil manual itu sulit dikemudikan saat macet." },
              { jp: "ヒールの高い靴を履いていると、運転しにくいよ。", kana: "ひーる の たかい くつ を はいて いる と、 うんてんしにくい よ。", romaji: "Hiiru no takai kutsu o haite iru to, unten shinikui yo.", meaning: "Kalau memakai sepatu hak tinggi, jadi susah mengemudi lho." },
              { jp: "このバイクはシートが高くて、運転しにくい。", kana: "この ばいく は しーと が たかくて、 うんてんしにくい。", romaji: "Kono baiku wa shiito ga takakute, unten shinikui.", meaning: "Motor ini joknya tinggi, jadi sulit dikemudikan." }
            ]
          }]
        }
      ]
    },
    {
      id: "vf-56",
      level: "N4",
      order: 56,
      title: "~させる • Menyuruh / Membiarkan",
      summary: "Kausatif / Causative Form (N4). Digunakan untuk menunjukkan bahwa subjek 'menyuruh' atau 'membiarkan/mengizinkan' orang lain melakukan sesuatu. Jika orang lain itu dipaksa, artinya 'menyuruh'. Jika diberi izin, artinya 'membiarkan'. Ini adalah bentuk biasa (plain).",
      formulas: [
        { group: "Godan", rule: "Ubah vokal akhir deretan 'u' menjadi 'a', lalu tambah せる. Contoh: 待つ → 待た → 待たせる." },
        { group: "Ichidan", rule: "Hilangkan 'る' (ru) di akhir, ganti dengan させる. Contoh: 着る → 着させる." },
        { group: "Irregular", rule: "する → させる, 来る (くる) → 来させる (こさせる). Contoh: 勉強する → 勉強させる." }
      ],
      groups: [
        {
          name: "Godan",
          examples: [{
            base: "待つ",
            transformed: "待たせる",
            kana: "まつ → またせる",
            romaji: "matsu → mataseru",
            meaning: "membuat menunggu / menyuruh menunggu",
            sentences: [
              { jp: "外で友達を待たせる。", kana: "そと で ともだち を またせる。", romaji: "Soto de tomodachi o mataseru.", meaning: "Membuat teman menunggu di luar." },
              { jp: "彼女をデートで一時間も待たせるなんて、ひどい。", kana: "かのじょ を でーと で いちじかん も またせる なんて、 ひどい。", romaji: "Kanojo o deeto de ichijikan mo mataseru nante, hidoi.", meaning: "Membuat pacar menunggu sampai satu jam di kencan, itu jahat banget." },
              { jp: "お客さんを待たせるのは失礼だ。", kana: "おきゃくさん を またせる の は しつれい だ。", romaji: "Okyakusan o mataseru no wa shitsurei da.", meaning: "Membuat tamu/pelanggan menunggu itu tidak sopan." },
              { jp: "社長が社員を会議室で待たせる。", kana: "しゃちょう が しゃいん を かいぎしつ で またせる。", romaji: "Shachou ga shain o kaigishitsu de mataseru.", meaning: "Direktur menyuruh pegawai menunggu di ruang rapat." },
              { jp: "いつも私を待たせるね。", kana: "いつも わたし を またせる ね。", romaji: "Itsumo watashi o mataseru ne.", meaning: "Kamu selalu membuatku menunggu ya." },
              { jp: "犬に「待て」と言って、ご飯の前で待たせる。", kana: "いぬ に 「まて」 と いって、 ごはん の まえ で またせる。", romaji: "Inu ni 'mate' to itte, gohan no mae de mataseru.", meaning: "Bilang 'tunggu' ke anjing, lalu membiarkannya menunggu di depan makanan." },
              { jp: "彼を雨の中で待たせるわけにはいかない。", kana: "かれ を あめ の なか で またせる わけ に は いかない。", romaji: "Kare o ame no naka de mataseru wake ni wa ikanai.", meaning: "Aku tidak boleh membuat dia menunggu di tengah hujan." },
              { jp: "子供を車の中で待たせるのは危険だ。", kana: "こども を くるま の なか で またせる の は きけん だ。", romaji: "Kodomo o kuruma no naka de mataseru no wa kiken da.", meaning: "Membiarkan anak menunggu di dalam mobil itu berbahaya." },
              { jp: "準備ができるまで、ロビーで待たせる。", kana: "じゅんび が できる まで、 ろびー で またせる。", romaji: "Junbi ga dekiru made, robii de mataseru.", meaning: "Menyuruh menunggu di lobi sampai persiapannya selesai." },
              { jp: "人を待たせるのが大嫌いなんだ。", kana: "ひと を またせる の が だいきらい なんだ。", romaji: "Hito o mataseru no ga daikirai nanda.", meaning: "Aku sangat benci membuat orang menunggu." }
            ]
          }]
        },
        {
          name: "Ichidan",
          examples: [{
            base: "着る",
            transformed: "着させる",
            kana: "きる → きさせる",
            romaji: "kiru → kisaseru",
            meaning: "menyuruh memakai (baju) / memakaikan",
            sentences: [
              { jp: "寒いから、子供に厚いコートを着させる。", kana: "さむい から、 こども に あつい こーと を きさせる。", romaji: "Samui kara, kodomo ni atsui kooto o kisaseru.", meaning: "Karena dingin, (saya) memakaikan mantel tebal ke anak." },
              { jp: "学校に行く前に、息子に制服を着させる。", kana: "がっこう に いく まえ に、 むすこ に せいふく を きさせる。", romaji: "Gakkou ni iku mae ni, musuko ni seifuku o kisaseru.", meaning: "Sebelum pergi ke sekolah, (saya) menyuruh anak laki-lakiku memakai seragam." },
              { jp: "雨が降ってきたから、犬にレインコートを着させる。", kana: "あめ が ふってきた から、 いぬ に れいんこーと を きさせる。", romaji: "Ame ga futte kita kara, inu ni reinkooto o kisaseru.", meaning: "Karena hujan mulai turun, (saya) memakaikan jas hujan ke anjing." },
              { jp: "お祭りの日に、娘に浴衣を着させる。", kana: "おまつり の ひ に、 むすめ に ゆかた を きさせる。", romaji: "Omatsuri no hi ni, musume ni yukata o kisaseru.", meaning: "Di hari festival, (saya) memakaikan yukata pada anak perempuan." },
              { jp: "嫌がる赤ちゃんに無理やり服を着させる。", kana: "いやがる あかちゃん に むりやり ふく を きさせる。", romaji: "Iyagaru akachan ni muriyari fuku o kisaseru.", meaning: "Memakaikan baju secara paksa pada bayi yang tidak mau." },
              { jp: "劇の練習で、生徒に衣装を着させる。", kana: "げき の れんしゅう で、 せいと に いしょう を きさせる。", romaji: "Geki no renshuu de, seito ni ishou o kisaseru.", meaning: "Di latihan drama, menyuruh murid memakai kostum." },
              { jp: "モデルに新しいブランドの服を着させる。", kana: "もでる に あたらしい ぶらんど の ふく を きさせる。", romaji: "Moderuni atarashii burando no fuku o kisaseru.", meaning: "Menyuruh model memakai pakaian merek baru." },
              { jp: "風邪を引かないように、寝る時にパジャマを着させる。", kana: "かぜ を ひかない よう に、 ねる とき に ぱじゃま を きさせる。", romaji: "Kaze o hikanai you ni, neru toki ni pajama o kisaseru.", meaning: "Agar tidak masuk angin, memakaikan piyama saat dia mau tidur." },
              { jp: "汚れてもいい服を子供に着させる。", kana: "よごれて も いい ふく を こども に きさせる。", romaji: "Yogorete mo ii fuku o kodomo ni kisaseru.", meaning: "Memakaikan baju yang boleh kotor pada anak." },
              { jp: "写真を撮るために、特別なドレスを着させる。", kana: "しゃしん を とる ため に、 とくべつ な どれす を きさせる。", romaji: "Shashin o toru tame ni, tokubetsu na doresu o kisaseru.", meaning: "Demi berfoto, memakaikan gaun yang spesial kepadanya." }
            ]
          }]
        },
        {
          name: "Irregular",
          examples: [{
            base: "勉強する",
            transformed: "勉強させる",
            kana: "べんきょうする → べんきょうさせる",
            romaji: "benkyou suru → benkyou saseru",
            meaning: "menyuruh belajar",
            sentences: [
              { jp: "テストの前だから、親が子供を無理やり勉強させる。", kana: "てすと の まえ だから、 おや が こども を むりやり べんきょうさせる。", romaji: "Tesuto no mae dakara, oya ga kodomo o muriyari benkyou saseru.", meaning: "Karena sebelum ujian, orang tua memaksa anak untuk belajar." },
              { jp: "毎日３時間は英語を勉強させる。", kana: "まいにち さんじかん は えいご を べんきょうさせる。", romaji: "Mainichi sanjikan wa eigo o benkyou saseru.", meaning: "Menyuruh (dia) belajar bahasa Inggris 3 jam setiap hari." },
              { jp: "弟がゲームばかりしているので、母が勉強させる。", kana: "おとうと が げーむ ばかり している ので、 はは が べんきょうさせる。", romaji: "Otouto ga geemu bakari shite iru node, haha ga benkyou saseru.", meaning: "Karena adik laki-laki main game terus, ibu menyuruhnya belajar." },
              { jp: "塾の先生は、生徒にたくさん勉強させる。", kana: "じゅく の せんせい は、 せいと に たくさん べんきょうさせる。", romaji: "Juku no sensei wa, seito ni takusan benkyou saseru.", meaning: "Guru bimbel menyuruh murid-muridnya banyak belajar." },
              { jp: "もっと数学を勉強させるべきだ。", kana: "もっと すうがく を べんきょうさせる べき だ。", romaji: "Motto suugaku o benkyou saseru beki da.", meaning: "Seharusnya menyuruh (dia) belajar matematika lebih banyak lagi." },
              { jp: "子供の頃、親にピアノを勉強させられた。(Pasif-Kausatif: disuruh belajar)", kana: "こども の ころ、 おや に ぴあの を べんきょうさせられた。", romaji: "Kodomo no koro, oya ni piano o benkyou saserareta.", meaning: "Waktu kecil, aku disuruh belajar (les) piano oleh orang tua." },
              { jp: "社長は新入社員に会社のルールを勉強させる。", kana: "しゃちょう は しんにゅう しゃいん に かいしゃ の るーる を べんきょうさせる。", romaji: "Shachou wa shinnyuu shain ni kaisha no ruuru o benkyou saseru.", meaning: "Direktur menyuruh pegawai baru mempelajari aturan perusahaan." },
              { jp: "嫌がる子供を勉強させるのは大変だ。", kana: "いやがる こども を べんきょうさせる の は たいへん だ。", romaji: "Iyagaru kodomo o benkyou saseru no wa taihen da.", meaning: "Menyuruh belajar anak yang tidak mau itu sangat repot." },
              { jp: "将来のために、色々なことを勉強させるつもりだ。", kana: "しょうらい の ため に、 いろいろ な こと を べんきょうさせる つもり だ。", romaji: "Shourai no tame ni, iroiro na koto o benkyou saseru tsumori da.", meaning: "Demi masa depannya, saya berniat menyuruhnya mempelajari berbagai hal." },
              { jp: "夏休みの間、海外で語学を勉強させる。", kana: "なつやすみ の あいだ、 かいがい で ごがく を べんきょうさせる。", romaji: "Natsuyasumi no aida, kaigai de gogaku o benkyou saseru.", meaning: "Selama libur musim panas, (saya) menyuruh/membiarkannya belajar bahasa di luar negeri." }
            ]
          }]
        }
      ]
    },
    {
      id: "vf-57",
      level: "N4",
      order: 57,
      title: "~させます • Menyuruh / Membiarkan (Sopan)",
      summary: "Kausatif Sopan (N4). Bentuk formal dari '~させる'. Digunakan untuk menyatakan bahwa subjek menyuruh atau mengizinkan orang lain melakukan sesuatu secara sopan, sering digunakan saat berbicara kepada orang lain tentang tindakan kita ke bawahan atau anak kita.",
      formulas: [
        { group: "Godan", rule: "Ubah vokal akhir deretan 'u' menjadi 'a', lalu tambah せます. Contoh: 笑う → 笑わ → 笑わせます." },
        { group: "Ichidan", rule: "Hilangkan 'る' (ru) di akhir, ganti dengan させます. Contoh: 考える → 考えさせます." },
        { group: "Irregular", rule: "する → させます, 来る (くる) → 来させます (こさせます). Contoh: 説明する → 説明させます." }
      ],
      groups: [
        {
          name: "Godan",
          examples: [{
            base: "笑う",
            transformed: "笑わせます",
            kana: "わらう → わらわせます",
            romaji: "warau → warawasemasu",
            meaning: "membuat (orang lain) tertawa",
            sentences: [
              { jp: "あの芸人は、いつもお客さんを笑わせます。", kana: "あの げいにん は、 いつも おきゃくさん を わらわせます。", romaji: "Ano geinin wa, itsumo okyakusan o warawasemasu.", meaning: "Komedian itu selalu membuat penonton tertawa." },
              { jp: "彼は面白い冗談でみんなを笑わせます。", kana: "かれ は おもしろい じょうだん で みんな を わらわせます。", romaji: "Kare wa omoshiroi joudan de minna o warawasemasu.", meaning: "Dia membuat semuanya tertawa dengan candaan yang lucu." },
              { jp: "落ち込んでいる友達を、私が笑わせます。", kana: "おちこんで いる ともだち を、 わたし が わらわせます。", romaji: "Ochikonde iru tomodachi o, watashi ga warawasemasu.", meaning: "Teman yang sedang murung, akan saya buat tertawa." },
              { jp: "この映画は、最初から最後まで観客を笑わせます。", kana: "この えいが は、 さいしょ から さいご まで かんきゃく を わらわせます。", romaji: "Kono eiga wa, saisho kara saigo made kankyaku o warawasemasu.", meaning: "Film ini membuat penonton tertawa dari awal sampai akhir." },
              { jp: "赤ちゃんを変な顔をして笑わせます。", kana: "あかちゃん を へんな かお を して わらわせます。", romaji: "Akachan o henna kao o shite warawasemasu.", meaning: "Saya membuat bayi tertawa dengan memasang wajah aneh." },
              { jp: "彼は人を笑わせるのが得意です。(Kata benda: 笑わせるの)", kana: "かれ は ひと を わらわせる の が とくい です。", romaji: "Kare wa hito o warawaseru no ga tokui desu.", meaning: "Dia pandai membuat orang tertawa." },
              { jp: "先生はたまにジョークを言って、生徒を笑わせます。", kana: "せんせい は たまに じょーく を いって、 せいと を わらわせます。", romaji: "Sensei wa tamani jooku o itte, seito o warawasemasu.", meaning: "Guru terkadang melontarkan lelucon dan membuat murid-murid tertawa." },
              { jp: "泣いている子供を、おもちゃで笑わせます。", kana: "ないて いる こども を、 おもちゃ で わらわせます。", romaji: "Naite iru kodomo o, omocha de warawasemasu.", meaning: "Anak yang sedang menangis, saya buat tertawa dengan mainan." },
              { jp: "手品でパーティーのゲストを笑わせます。", kana: "てじな で ぱーてぃー の げすと を わらわせます。", romaji: "Tejina de paatii no gesuto o warawasemasu.", meaning: "Saya membuat tamu pesta tertawa dengan sulap." },
              { jp: "人を笑わせますのは、素晴らしい才能だと思います。", kana: "ひと を わらわせます の は、 すばらしい さいのう だ と おもいます。", romaji: "Hito o warawasemasu no wa, subarashii sainou da to omoimasu.", meaning: "Saya pikir membuat orang tertawa adalah bakat yang luar biasa." }
            ]
          }]
        },
        {
          name: "Ichidan",
          examples: [{
            base: "考える",
            transformed: "考えさせます",
            kana: "かんがえる → かんがえさせます",
            romaji: "kangaeru → kangaesasemasu",
            meaning: "membuat berpikir / menyuruh merenung",
            sentences: [
              { jp: "この映画の結末は、私たちに色々なことを考えさせます。", kana: "この えいが の けつまつ は、 わたし たち に いろいろ な こと を かんがえさせます。", romaji: "Kono eiga no ketsumatsu wa, watashi tachi ni iroiro na koto o kangaesasemasu.", meaning: "Akhir dari film ini, membuat kita memikirkan banyak hal." },
              { jp: "先生は、生徒に自分で答えを考えさせます。", kana: "せんせい は、 せいと に じぶん で こたえ を かんがえさせます。", romaji: "Sensei wa, seito ni jibun de kotae o kangaesasemasu.", meaning: "Guru menyuruh/membiarkan murid memikirkan jawabannya sendiri." },
              { jp: "失敗の原因を、部下に深く考えさせます。", kana: "しっぱい の げんいん を、 ぶか に ふかく かんがえさせます。", romaji: "Shippai no genin o, buka ni fukaku kangaesasemasu.", meaning: "Saya menyuruh bawahan saya memikirkan dalam-dalam penyebab kegagalan tersebut." },
              { jp: "そのニュースは、平和について考えさせます。", kana: "その にゅーす は、 へいわ に ついて かんがえさせます。", romaji: "Sono nyuusu wa, heiwa ni tsuite kangaesasemasu.", meaning: "Berita itu membuat kita berpikir tentang perdamaian." },
              { jp: "すぐに答えを教えず、まずは子供に考えさせます。", kana: "すぐ に こたえ を おしえず、 まず は こども に かんがえさせます。", romaji: "Sugu ni kotae o oshiezu, mazu wa kodomo ni kangaesasemasu.", meaning: "Tanpa langsung memberitahu jawabannya, pertama-tama saya membiarkan anak berpikir." },
              { jp: "人生の意味を考えさせますね。", kana: "じんせい の いみ を かんがえさせます ね。", romaji: "Jinsei no imi o kangaesasemasu ne.", meaning: "Itu membuat kita memikirkan makna hidup ya." },
              { jp: "新しいアイデアを、チーム全員で考えさせます。", kana: "あたらしい あいであ を、 ちーむ ぜんいん で かんがえさせます。", romaji: "Atarashii aidea o, chiimu zenin de kangaesasemasu.", meaning: "Saya menyuruh seluruh tim untuk memikirkan ide baru." },
              { jp: "彼の言葉は、いつも私を考えさせます。", kana: "かれ の ことば は、 いつも わたし を かんがえさせます。", romaji: "Kare no kotoba wa, itsumo watashi o kangaesasemasu.", meaning: "Perkataannya, selalu membuat saya berpikir." },
              { jp: "環境問題について、学生に考えさせます。", kana: "かんきょう もんだい に ついて、 がくせい に かんがえさせます。", romaji: "Kankyou mondai ni tsuite, gakusei ni kangaesasemasu.", meaning: "Saya menyuruh/membuat mahasiswa berpikir tentang masalah lingkungan." },
              { jp: "将来の夢を、もう一度考えさせます。", kana: "しょうらい の ゆめ を、 もう いちど かんがえさせます。", romaji: "Shourai no yume o, mou ichido kangaesasemasu.", meaning: "Saya menyuruhnya memikirkan kembali mimpi masa depannya sekali lagi." }
            ]
          }]
        },
        {
          name: "Irregular",
          examples: [{
            base: "説明する",
            transformed: "説明させます",
            kana: "せつめいする → せつめいさせます",
            romaji: "setsumei suru → setsumei sasemasu",
            meaning: "menyuruh menjelaskan",
            sentences: [
              { jp: "遅刻の理由を、後で彼に説明させます。", kana: "ちこく の りゆう を、 あと で かれ に せつめいさせます。", romaji: "Chikoku no riyuu o, ato de kare ni setsumei sasemasu.", meaning: "Nanti saya akan menyuruh dia menjelaskan alasan keterlambatannya." },
              { jp: "部下に、新しいプロジェクトの概要を説明させます。", kana: "ぶか に、 あたらしい ぷろじぇくと の がいよう を せつめいさせます。", romaji: "Buka ni, atarashii purojekuto no gaiyou o setsumei sasemasu.", meaning: "Saya menyuruh bawahan saya menjelaskan ringkasan proyek baru tersebut." },
              { jp: "どうして失敗したのか、担当者に説明させます。", kana: "どうして しっぱい した の か、 たんとうしゃ に せつめいさせます。", romaji: "Doushite shippai shita no ka, tantousha ni setsumei sasemasu.", meaning: "Kenapa bisa gagal, saya akan menyuruh penanggung jawabnya menjelaskannya." },
              { jp: "お客様には、マネージャーから丁寧に説明させます。", kana: "おきゃくさま に は、 まねーじゃー から ていねい に せつめいさせます。", romaji: "Okyakusama ni wa, maneejaa kara teinei ni setsumei sasemasu.", meaning: "Kepada pelanggan, saya akan menyuruh manajer menjelaskannya dengan sopan." },
              { jp: "商品の使い方を、スタッフに説明させます。", kana: "しょうひん の つかいかた を、 すたっふ に せつめいさせます。", romaji: "Shouhin no tsukaikata o, sutaffu ni setsumei sasemasu.", meaning: "Saya menyuruh staf menjelaskan cara penggunaan produknya." },
              { jp: "明日の会議で、彼女に結果を説明させます。", kana: "あした の かいぎ で、 かのじょ に けっか を せつめいさせます。", romaji: "Ashita no kaigi de, kanojo ni kekka o setsumei sasemasu.", meaning: "Di rapat besok, saya akan menyuruh dia menjelaskan hasilnya." },
              { jp: "ルール違反について、本人に詳しく説明させます。", kana: "るーる いはん に ついて、 ほんにん に くわしく せつめいさせます。", romaji: "Ruuru ihan ni tsuite, honnin ni kuwashiku setsumei sasemasu.", meaning: "Terkait pelanggaran aturan, saya akan menyuruh orang yang bersangkutan menjelaskannya secara rinci." },
              { jp: "詳しいことは、専門家に説明させます。", kana: "くわしい こと は、 せんもんか に せつめいさせます。", romaji: "Kuwashii koto wa, senmonka ni setsumei sasemasu.", meaning: "Mengenai detailnya, saya akan meminta (menyuruh) ahlinya menjelaskannya." },
              { jp: "このデータが何を意味するのか、学生に説明させます。", kana: "この でーた が なに を いみ する の か、 がくせい に せつめいさせます。", romaji: "Kono deeta ga nani o imi suru no ka, gakusei ni setsumei sasemasu.", meaning: "Apa arti dari data ini, saya menyuruh mahasiswa menjelaskannya." },
              { jp: "トラブルの状況を、現場のリーダーに説明させます。", kana: "とらぶる の じょうきょう を、 げんば の りーだー に せつめいさせます。", romaji: "Toraburu no joukyou o, genba no riidaa ni setsumei sasemasu.", meaning: "Kondisi masalahnya, saya akan menyuruh pemimpin lapangan menjelaskannya." }
            ]
          }]
        }
      ]
    },
    {
      id: "vf-58",
      level: "N4",
      order: 58,
      title: "~させた • Sudah Menyuruh / Membiarkan",
      summary: "Kausatif Lampau Plain (N4). Digunakan untuk menceritakan kejadian di masa lalu di mana kita telah menyuruh, memaksa, atau membiarkan seseorang melakukan sesuatu. Sangat natural digunakan dalam percakapan kasual (seperti curhat dengan teman).",
      formulas: [
        { group: "Godan", rule: "Ubah vokal akhir deretan 'u' menjadi 'a', lalu tambah せた. Contoh: 泣く → 泣か → 泣かせた." },
        { group: "Ichidan", rule: "Hilangkan 'る' (ru) di akhir, ganti dengan させた. Contoh: 辞める → 辞めさせた." },
        { group: "Irregular", rule: "する → させた, 来る (くる) → 来させた (こさせた). Contoh: 心配する → 心配させた." }
      ],
      groups: [
        {
          name: "Godan",
          examples: [{
            base: "泣く",
            transformed: "泣かせた",
            kana: "なく → なかせた",
            romaji: "naku → nakaseta",
            meaning: "membuat menangis (lampau)",
            sentences: [
              { jp: "ひどいことを言って、彼女を泣かせた。", kana: "ひどい こと を いって、 かのじょ を なかせた。", romaji: "Hidoi koto o itte, kanojo o nakaseta.", meaning: "Aku mengucapkan kata yang jahat dan membuat pacarku menangis." },
              { jp: "弟のおもちゃを取って、泣かせた。", kana: "おとうと の おもちゃ を とって、 なかせた。", romaji: "Otouto no omocha o totte, nakaseta.", meaning: "Aku mengambil mainan adikku dan membuatnya menangis." },
              { jp: "あの映画は、観客全員を泣かせた。", kana: "あの えいが は、 かんきゃく ぜんいん を なかせた。", romaji: "Ano eiga wa, kankyaku zenin o nakaseta.", meaning: "Film itu membuat seluruh penonton menangis." },
              { jp: "サプライズで母を感動して泣かせた。", kana: "さぷらいず で はは を かんどう して なかせた。", romaji: "Sapuraizu de haha o kandou shite nakaseta.", meaning: "Aku membuat ibuku menangis terharu dengan kejutan." },
              { jp: "約束を破って、子供を泣かせた。", kana: "やくそく を やぶって、 こども を なかせた。", romaji: "Yakusoku o yabutte, kodomo o nakaseta.", meaning: "Aku melanggar janji dan membuat anakku menangis." },
              { jp: "彼は歌声で多くの人を泣かせた。", kana: "かれ は うたごえ で おおく の ひと を なかせた。", romaji: "Kare wa utagoe de ooku no hito o nakaseta.", meaning: "Dia membuat banyak orang menangis dengan suara nyanyiannya." },
              { jp: "わざと意地悪をして、友達を泣かせた。", kana: "わざと いじわる を して、 ともだち を なかせた。", romaji: "Wazato ijiwaru o shite, tomodachi o nakaseta.", meaning: "Aku sengaja berbuat iseng dan membuat temanku menangis." },
              { jp: "玉ねぎを切って、自分を泣かせた。", kana: "たまねぎ を きって、 じぶん を なかせた。", romaji: "Tamanegi o kitte, jibun o nakaseta.", meaning: "Aku memotong bawang bombai dan membuat diriku sendiri menangis." },
              { jp: "彼の優しい言葉が、私を泣かせた。", kana: "かれ の やさしい ことば が、 わたし を なかせた。", romaji: "Kare no yasashii kotoba ga, watashi o nakaseta.", meaning: "Perkataannya yang lembut membuatku menangis." },
              { jp: "もう二度と、君を泣かせたくない。(Kata turunan: 泣かせたくない)", kana: "もう にど と、 きみ を なかせたくない。", romaji: "Mou nido to, kimi o nakasetakunai.", meaning: "Aku tidak ingin membuatmu menangis untuk kedua kalinya." }
            ]
          }]
        },
        {
          name: "Ichidan",
          examples: [{
            base: "辞める",
            transformed: "辞めさせた",
            kana: "やめる → やめさせた",
            romaji: "yameru → yamesaseta",
            meaning: "memaksa berhenti / memecat / menyuruh resign",
            sentences: [
              { jp: "ルールを破った社員を、会社が辞めさせた。", kana: "るーる を やぶった しゃいん を、 かいしゃ が やめさせた。", romaji: "Ruuru o yabutta shain o, kaisha ga yamesaseta.", meaning: "Perusahaan memecat (menyuruh berhenti) karyawan yang melanggar aturan." },
              { jp: "健康のために、父にタバコを辞めさせた。", kana: "けんこう の ため に、 ちち に たばこ を やめさせた。", romaji: "Kenkou no tame ni, chichi ni tabako o yamesaseta.", meaning: "Demi kesehatan, aku memaksa (menyuruh) ayah berhenti merokok." },
              { jp: "成績が下がったので、息子にアルバイトを辞めさせた。", kana: "せいせき が さがった ので、 むすこ に あるばいと を やめさせた。", romaji: "Seiseki ga sagatta node, musuko ni arubaito o yamesaseta.", meaning: "Karena nilainya turun, aku menyuruh anak laki-lakiku berhenti kerja paruh waktu." },
              { jp: "彼にギャンブルを辞めさせたのは、彼女の言葉だった。", kana: "かれ に ぎゃんぶる を やめさせた の は、 かのじょ の ことば だった。", romaji: "Kare ni gyanburu o yamesaseta no wa, kanojo no kotoba datta.", meaning: "Yang membuatnya berhenti berjudi adalah perkataan pacarnya." },
              { jp: "部長が、部下を無理やり辞めさせたらしい。", kana: "ぶちょう が、 ぶか を むりやり やめさせた らしい。", romaji: "Buchou ga, buka o muriyari yamesaseta rashii.", meaning: "Katanya kepala bagian memaksa bawahannya berhenti (resign)." },
              { jp: "ゲームばかりしているので、塾を辞めさせた。", kana: "げーむ ばかり している ので、 じゅく を やめさせた。", romaji: "Geemu bakari shite iru node, juku o yamesaseta.", meaning: "Karena dia main game terus, aku menyuruhnya berhenti dari bimbel." },
              { jp: "遅刻が多い選手を、チームから辞めさせた。", kana: "ちこく が おおい せんしゅ を、 ちーむ から やめさせた。", romaji: "Chikoku ga ooi senshu o, chiimu kara yamesaseta.", meaning: "Aku memecat pemain yang sering terlambat dari tim." },
              { jp: "無駄遣いを辞めさせた。", kana: "むだづかい を やめさせた。", romaji: "Mudazukai o yamesaseta.", meaning: "Aku menyuruhnya (atau membuat diriku) berhenti melakukan pemborosan." },
              { jp: "あのコーチは、厳しい練習で多くの生徒を辞めさせた。", kana: "あの こーち は、 きびしい れんしゅう で おおく の せいと を やめさせた。", romaji: "Ano koochi wa, kibishii renshuu de ooku no seito o yamesaseta.", meaning: "Pelatih itu membuat banyak murid berhenti karena latihannya yang keras." },
              { jp: "親に、夢を諦めて仕事を辞めさせられた。(Bentuk pasif kausatif)", kana: "おや に、 ゆめ を あきらめて しごと を やめさせられた。", romaji: "Oya ni, yume o akiramete shigoto o yamesaserareta.", meaning: "Aku disuruh/dipaksa oleh orang tua untuk menyerah pada mimpiku dan berhenti dari pekerjaan." }
            ]
          }]
        },
        {
          name: "Irregular",
          examples: [{
            base: "心配する",
            transformed: "心配させた",
            kana: "しんぱいする → しんぱいさせた",
            romaji: "shinpai suru → shinpai saseta",
            meaning: "membuat (orang) khawatir (lampau)",
            sentences: [
              { jp: "帰りが遅くなって、親を心配させた。", kana: "かえり が おそく なって、 おや を しんぱいさせた。", romaji: "Kaeri ga osoku natte, oya o shinpai saseta.", meaning: "Karena pulang malam, aku membuat orang tua khawatir." },
              { jp: "病気になって、家族をたくさん心配させた。", kana: "びょうき に なって、 かぞく を たくさん しんぱいさせた。", romaji: "Byouki ni natte, kazoku o takusan shinpai saseta.", meaning: "Karena jatuh sakit, aku membuat keluarga sangat khawatir." },
              { jp: "連絡をしなくて、友達を心配させた。", kana: "れんらく を しなくて、 ともだち を しんぱいさせた。", romaji: "Renraku o shinakute, tomodachi o shinpai saseta.", meaning: "Karena tidak mengabari, aku membuat teman-teman khawatir." },
              { jp: "急に倒れて、周りの人を心配させた。", kana: "きゅう に たおれて、 まわり の ひと を しんぱいさせた。", romaji: "Kyuu ni taorete, mawari no hito o shinpai saseta.", meaning: "Tiba-tiba pingsan, aku membuat orang-orang di sekitar khawatir." },
              { jp: "無断欠勤して、会社のみんなを心配させた。", kana: "むだん けっきん して、 かいしゃ の みんな を しんぱいさせた。", romaji: "Mudan kekkin shite, kaisha no minna o shinpai saseta.", meaning: "Karena bolos tanpa kabar, aku membuat semua orang di kantor khawatir." },
              { jp: "テストの点数が悪くて、先生を心配させた。", kana: "てすと の てんすう が わるくて、 せんせい を しんぱいさせた。", romaji: "Tesuto no tensuu ga warukute, sensei o shinpai saseta.", meaning: "Karena nilai ujianku jelek, aku membuat guru khawatir." },
              { jp: "彼をずいぶん心配させたらしい。", kana: "かれ を ずいぶん しんぱいさせた らしい。", romaji: "Kare o zuibun shinpai saseta rashii.", meaning: "Sepertinya aku telah membuat dia sangat khawatir." },
              { jp: "事故に遭って、彼女を泣くほど心配させた。", kana: "じこ に あって、 かのじょ を なく ほど しんぱいさせた。", romaji: "Jiko ni atte, kanojo o naku hodo shinpai saseta.", meaning: "Mengalami kecelakaan, aku membuat pacarku khawatir sampai menangis." },
              { jp: "もう誰のことも心配させたくない。(Kata turunan)", kana: "もう だれ の こと も しんぱいさせたくない。", romaji: "Mou dare no koto mo shinpai sasetakunai.", meaning: "Aku tidak ingin membuat siapa pun khawatir lagi." },
              { jp: "若い頃は、親に迷惑をかけて心配させた。", kana: "わかい ころ は、 おや に めいわく を かけて しんぱいさせた。", romaji: "Wakai koro wa, oya ni meiwaku o kakete shinpai saseta.", meaning: "Waktu masih muda, aku merepotkan dan membuat orang tua khawatir." }
            ]
          }]
        }
      ]
    },
	{
      id: "vf-59",
      level: "N4",
      order: 59,
      title: "~させました • Sudah Menyuruh (Sopan)",
      summary: "Kausatif Lampau Sopan (N4). Digunakan untuk melaporkan atau menceritakan kepada orang yang dihormati bahwa kita 'telah menyuruh' atau 'mengizinkan' bawahan/anak melakukan sesuatu. Sangat umum dalam pelaporan kerja.",
      formulas: [
        { group: "Godan", rule: "Ubah vokal akhir deretan 'u' menjadi 'a', lalu tambah せました. Contoh: 働く → 働か → 働かせました." },
        { group: "Ichidan", rule: "Hilangkan 'る' (ru) di akhir, ganti dengan させました. Contoh: 調べる → 調べさせました." },
        { group: "Irregular", rule: "する → させました, 来る (くる) → 来させました (こさせました). Contoh: 残業する → 残業させました." }
      ],
      groups: [
        {
          name: "Godan",
          examples: [{
            base: "働く",
            transformed: "働かせました",
            kana: "はたらく → はたらかせました",
            romaji: "hataraku → hatarakasemashita",
            meaning: "menyuruh bekerja / mempekerjakan",
            sentences: [
              { jp: "忙しかったので、スタッフを夜遅くまで働かせました。", kana: "いそがしかった ので、 すたっふ を よる おそく まで はたらかせました。", romaji: "Isogashikatta node, sutaffu o yoru osoku made hatarakasemashita.", meaning: "Karena sibuk, saya menyuruh staf bekerja sampai larut malam." },
              { jp: "休みの日も部下を働かせました。", kana: "やすみ の ひ も ぶか を はたらかせました。", romaji: "Yasumi no hi mo buka o hatarakasemashita.", meaning: "Di hari libur pun saya menyuruh bawahan bekerja." },
              { jp: "あの会社は、社員をロボットのように働かせました。", kana: "あの かいしゃ は、 しゃいん を ろぼっと の よう に はたらかせました。", romaji: "Ano kaisha wa, shain o robotto no you ni hatarakasemashita.", meaning: "Perusahaan itu mempekerjakan karyawannya seperti robot." },
              { jp: "学生時代は、親に店で働かせられました。(Pasif-Kausatif)", kana: "がくせい じだい は、 おや に みせ で はたらかせられました。", romaji: "Gakusei jidai wa, oya ni mise de hatarakaseraremashita.", meaning: "Sewaktu sekolah, saya disuruh bekerja di toko oleh orang tua." },
              { jp: "経験を積むために、息子を現場で働かせました。", kana: "けいけん を つむ ため に、 むすこ を げんば で はたらかせました。", romaji: "Keiken o tsumu tame ni, musuko o genba de hatarakasemashita.", meaning: "Demi menambah pengalaman, saya menyuruh anak saya bekerja di lapangan." },
              { jp: "アルバイトを急に働かせました、すみません。", kana: "あるばいと を きゅう に はたらかせました、 すみません。", romaji: "Arubaito o kyuu ni hatarakasemashita, sumimasen.", meaning: "Saya menyuruh pekerja paruh waktu bekerja mendadak, mohon maaf." },
              { jp: "無理やり働かせたわけではありません。", kana: "むりやり はたらかせた わけ で は ありません。", romaji: "Muriyari hatarakaseta wake dewa arimasen.", meaning: "Bukan berarti saya menyuruhnya bekerja secara paksa." },
              { jp: "彼に責任者として働かせました。", kana: "かれ に せきにんしゃ として はたらかせました。", romaji: "Kare ni sekininsha toshite hatarakasemashita.", meaning: "Saya mempekerjakan dia sebagai penanggung jawab." },
              { jp: "新しい機械を試験的に働かせました。(Mengoperasikan mesin)", kana: "あたらしい きかい を しけんてき に はたらかせました。", romaji: "Atarashii kikai o shikenteki ni hatarakasemashita.", meaning: "Saya mempekerjakan (mengoperasikan) mesin baru itu sebagai uji coba." },
              { jp: "プロジェクトのために、チーム全員を全力で働かせました。", kana: "ぷろじぇくと の ため に、 ちーむ ぜんいん を ぜんりょく で はたらかせました。", romaji: "Purojekuto no tame ni, chiimu zenin o zenryoku de hatarakasemashita.", meaning: "Demi proyek, saya menyuruh seluruh tim bekerja dengan kekuatan penuh." }
            ]
          }]
        },
        {
          name: "Ichidan",
          examples: [{
            base: "調べる",
            transformed: "調べさせました",
            kana: "しらべる → しらべさせました",
            romaji: "shiraberu → shirabesasemashita",
            meaning: "menyuruh memeriksa / mencari tahu",
            sentences: [
              { jp: "その件については、担当者に詳しく調べさせました。", kana: "その けん に ついて は、 たんとうしゃ に くわしく しらべさせました。", romaji: "Sono ken ni tsuite wa, tantousha ni kuwashiku shirabesasemashita.", meaning: "Mengenai hal itu, saya sudah menyuruh penanggung jawab untuk memeriksanya secara detail." },
              { jp: "原因をすぐに部下に調べさせました。", kana: "げんいん を すぐ に ぶか に しらべさせました。", romaji: "Genin o sugu ni buka ni shirabesasemashita.", meaning: "Saya segera menyuruh bawahan saya mencari tahu penyebabnya." },
              { jp: "学生に、日本の歴史について調べさせました。", kana: "がくせい に、 にほん の れきし に ついて しらべさせました。", romaji: "Gakusei ni, Nihon no rekishi ni tsuite shirabesasemashita.", meaning: "Saya menyuruh siswa mencari tahu tentang sejarah Jepang." },
              { jp: "データの間違いを、システムチームに調べさせました。", kana: "でーた の まちがい を、 しすてむ ちーむ に しらべさせました。", romaji: "Deeta no machigai o, shisutemu chiimu ni shirabesasemashita.", meaning: "Kesalahan data itu, saya sudah menyuruh tim sistem untuk memeriksanya." },
              { jp: "会議の前に、市場の動向を調べさせました。", kana: "かいぎ の まえ に、 しじょう の どうこう を しらべさせました。", romaji: "Kaigi no mae ni, shijou no doukou o shirabesasemashita.", meaning: "Sebelum rapat, saya menyuruh mereka meneliti tren pasar." },
              { jp: "新しい会社の評判を調べさせました。", kana: "あたらしい かいしゃ の ひょうばん を しらべさせました。", romaji: "Atarashii kaisha no hyouban o shirabesasemashita.", meaning: "Saya menyuruh mencari tahu reputasi perusahaan baru itu." },
              { jp: "専門家にパソコンのウイルスを調べさせました。", kana: "せんもんか に ぱそこん の ういるす を しらべさせました。", romaji: "Senmonka ni pasokon no uirusu o shirabesasemashita.", meaning: "Saya menyuruh pakar untuk memeriksa virus di komputer saya." },
              { jp: "料金がいくらかかるか、後輩に調べさせました。", kana: "りょうきん が いくら かかる か、 こうはい に しらべさせました。", romaji: "Ryoukin ga ikura kakaru ka, kouhai ni shirabesasemashita.", meaning: "Berapa biayanya, saya menyuruh junior untuk mencari tahu." },
              { jp: "事実を警察に調べさせました。", kana: "じじつ を けいさつ に しらべさせました。", romaji: "Jijitsu o keisatsu ni shirabesasemashita.", meaning: "Saya menyuruh polisi untuk menyelidiki faktanya." },
              { jp: "彼にスケジュールの空きを調べさせました。", kana: "かれ に すけじゅーる の あき を しらべさせました。", romaji: "Kare ni sukejuuru no aki o shirabesasemashita.", meaning: "Saya menyuruhnya mengecek (mencari tahu) kekosongan jadwal." }
            ]
          }]
        },
        {
          name: "Irregular",
          examples: [{
            base: "残業する",
            transformed: "残業させました",
            kana: "ざんぎょうする → ざんぎょうさせました",
            romaji: "zangyou suru → zangyou sasemashita",
            meaning: "menyuruh lembur",
            sentences: [
              { jp: "納期が近かったので、チーム全員を残業させました。", kana: "のうき が ちかかった ので、 ちーむ ぜんいん を ざんぎょうさせました。", romaji: "Nouki ga chikakatta node, chiimu zenin o zangyou sasemashita.", meaning: "Karena tenggat waktu sudah dekat, saya menyuruh seluruh anggota tim lembur." },
              { jp: "昨日はトラブルがあったため、彼を夜まで残業させました。", kana: "きのう は とらぶる が あった ため、 かれ を よる まで ざんぎょうさせました。", romaji: "Kinou wa toraburu ga atta tame, kare o yoru made zangyou sasemashita.", meaning: "Karena ada masalah kemarin, saya menyuruhnya lembur sampai malam." },
              { jp: "新入社員を初日から残業させました。", kana: "しんにゅう しゃいん を しょにち から ざんぎょうさせました。", romaji: "Shinnyuu shain o shonichi kara zangyou sasemashita.", meaning: "Saya menyuruh karyawan baru lembur sejak hari pertamanya." },
              { jp: "無理やり残業させたわけではありません。", kana: "むりやり ざんぎょうさせた わけ で は ありません。", romaji: "Muriyari zangyou saseta wake dewa arimasen.", meaning: "Bukan berarti saya menyuruh mereka lembur secara paksa." },
              { jp: "会議が長引いて、スタッフを残業させました。", kana: "かいぎ が ながびいて、 すたっふ を ざんぎょうさせました。", romaji: "Kaigi ga nagabiite, sutaffu o zangyou sasemashita.", meaning: "Karena rapatnya molor, saya membuat staf jadi lembur." },
              { jp: "仕事が終わらなかったので、部下を残業させました。", kana: "しごと が おわらなかった ので、 ぶか を ざんぎょうさせました。", romaji: "Shigoto ga owaranakatta node, buka o zangyou sasemashita.", meaning: "Karena pekerjaannya belum selesai, saya menyuruh bawahan saya lembur." },
              { jp: "休日前に残業させました、申し訳ありません。", kana: "きゅうじつ まえ に ざんぎょうさせました、 もうしわけ ありません。", romaji: "Kyuujitsu mae ni zangyou sasemashita, moushiwake arimasen.", meaning: "Saya menyuruh (kalian) lembur sebelum hari libur, saya mohon maaf." },
              { jp: "店長がアルバイトを残業させました。", kana: "てんちょう が あるばいと を ざんぎょうさせました。", romaji: "Tenchou ga arubaito o zangyou sasemashita.", meaning: "Manajer toko menyuruh pekerja paruh waktu lembur." },
              { jp: "急ぎのデータ入力のため、彼女を残業させました。", kana: "いそぎ の でーた にゅうりょく の ため、 かのじょ を ざんぎょうさせました。", romaji: "Isogi no deeta nyuuryoku no tame, kanojo o zangyou sasemashita.", meaning: "Demi memasukkan data yang mendesak, saya menyuruhnya lembur." },
              { jp: "毎日遅くまで残業させられました。(Pasif-Kausatif)", kana: "まいにち おそく まで ざんぎょうさせられました。", romaji: "Mainichi osoku made zangyou saseraremashita.", meaning: "Saya disuruh/dipaksa lembur sampai larut setiap hari." }
            ]
          }]
        }
      ]
    },
    {
      id: "vf-60",
      level: "N4",
      order: 60,
      title: "~すぎる • Terlalu Banyak",
      summary: "Terlalu Banyak / Melebihi Batas (N4). Digunakan ketika suatu tindakan atau kondisi melewati batas kewajaran (too much). Biasanya berkonotasi negatif karena menunjukkan keadaan yang berlebihan.",
      formulas: [
        { group: "Godan", rule: "Ubah vokal akhir deretan 'u' menjadi 'i' (bentuk masu), lalu tambah すぎる. Contoh: 買う → 買い → 買いすぎる." },
        { group: "Ichidan", rule: "Hilangkan 'る' (ru) di akhir, ganti dengan すぎる. Contoh: 考える → 考えすぎる." },
        { group: "Irregular", rule: "する → しすぎる, 来る (くる) → 来すぎる (きすぎる). Contoh: 心配する → 心配しすぎる." }
      ],
      groups: [
        {
          name: "Godan",
          examples: [{
            base: "買う",
            transformed: "買いすぎる",
            kana: "かう → かいすぎる",
            romaji: "kau → kaisugiru",
            meaning: "terlalu banyak membeli / kalap belanja",
            sentences: [
              { jp: "給料日には、いつも服を買いすぎる。", kana: "きゅうりょうび に は、 いつも ふく を かいすぎる。", romaji: "Kyuuryoubi ni wa, itsumo fuku o kaisugiru.", meaning: "Saat hari gajian, aku selalu kalap belanja baju." },
              { jp: "セールに行くと、いらないものまで買いすぎる。", kana: "せーる に いく と、 いらない もの まで かいすぎる。", romaji: "Seeru ni iku to, iranai mono made kaisugiru.", meaning: "Kalau pergi ke diskonan, aku membeli terlalu banyak sampai ke barang yang tidak perlu." },
              { jp: "お腹が空いている時にスーパーに行くと、買いすぎる。", kana: "おなか が すいている とき に すーぱー に いく と、 かいすぎる。", romaji: "Onaka ga suite iru toki ni suupaa ni iku to, kaisugiru.", meaning: "Kalau pergi ke supermarket saat sedang lapar, aku sering kalap." },
              { jp: "ネットショッピングで、つい本を買いすぎる。", kana: "ねっと しょっぴんぐ で、 つい ほん を かいすぎる。", romaji: "Netto shoppingu de, tsui hon o kaisugiru.", meaning: "Di belanja online, aku tanpa sadar membeli buku terlalu banyak." },
              { jp: "ストレスがたまると、靴を買いすぎる傾向がある。", kana: "すとれす が たまる と、 くつ を かいすぎる けいこう が ある。", romaji: "Sutoresu ga tamaru to, kutsu o kaisugiru keikou ga aru.", meaning: "Saat stres menumpuk, aku punya kecenderungan untuk membeli sepatu terlalu banyak." },
              { jp: "美味しいパンがあると、いつも買いすぎる。", kana: "おいしい ぱん が ある と、 いつも かいすぎる。", romaji: "Oishii pan ga aru to, itsumo kaisugiru.", meaning: "Kalau ada roti yang enak, aku selalu membelinya terlalu banyak." },
              { jp: "ゲームに課金アイテムを買いすぎる。", kana: "げーむ に かきん あいてむ を かいすぎる。", romaji: "Geemu ni kakin aitemu o kaisugiru.", meaning: "Aku membeli item top-up terlalu banyak di game." },
              { jp: "旅行に行くと、お土産を買いすぎる。", kana: "りょこう に いく と、 おみやげ を かいすぎる。", romaji: "Ryokou ni iku to, omiyage o kaisugiru.", meaning: "Kalau pergi liburan, aku membeli oleh-oleh terlalu banyak." },
              { jp: "推しのグッズは、どうしても買いすぎる。", kana: "おし の ぐっず は、 どうしても かいすぎる。", romaji: "Oshi no guzzu wa, doushitemo kaisugiru.", meaning: "Kalau pernak-pernik idola (bias), mau bagaimana juga pasti belinya kalap." },
              { jp: "まとめ買いはお得だけど、たまに買いすぎる。", kana: "まとめがい は おとく だけど、 たまに かいすぎる。", romaji: "Matomegai wa otoku dakedo, tamani kaisugiru.", meaning: "Beli grosiran itu menguntungkan, tapi kadang malah beli terlalu banyak." }
            ]
          }]
        },
        {
          name: "Ichidan",
          examples: [{
            base: "考える",
            transformed: "考えすぎる",
            kana: "かんがえる → かんがえすぎる",
            romaji: "kangaeru → kangaesugiru",
            meaning: "terlalu banyak berpikir / overthinking",
            sentences: [
              { jp: "君はいつも、先のことを考えすぎるよ。", kana: "きみ は いつも、 さき の こと を かんがえすぎる よ。", romaji: "Kimi wa itsumo, saki no koto o kangaesugiru yo.", meaning: "Kamu itu selalu memikirkan hal di masa depan terlalu berlebihan (overthinking) lho." },
              { jp: "失敗を恐れて、少し考えすぎる癖がある。", kana: "しっぱい を おそれて、 すこし かんがえすぎる くせ が ある。", romaji: "Shippai o osorete, sukoshi kangaesugiru kuse ga aru.", meaning: "Karena takut gagal, aku punya kebiasaan sedikit overthinking." },
              { jp: "人間関係について、考えすぎるのはよくない。", kana: "にんげん かんけい に ついて、 かんがえすぎる の は よく ない。", romaji: "Ningen kankei ni tsuite, kangaesugiru no wa yoku nai.", meaning: "Terlalu memikirkan tentang hubungan antar manusia itu tidak baik." },
              { jp: "夜になると、ネガティブに考えすぎる。", kana: "よる に なる と、 ねがてぃぶ に かんがえすぎる。", romaji: "Yoru ni naru to, negatibu ni kangaesugiru.", meaning: "Kalau sudah malam, aku jadi terlalu memikirkan hal negatif." },
              { jp: "考えすぎるより、まずは行動してみよう。", kana: "かんがえすぎる より、 まず は こうどう して みよう。", romaji: "Kangaesugiru yori, mazu wa koudou shite miyou.", meaning: "Daripada mikir kejauhan, pertama mari kita coba bertindak." },
              { jp: "あの人の言葉を深く考えすぎる。", kana: "あの ひと の ことば を ふかく かんがえすぎる。", romaji: "Ano hito no kotoba o fukaku kangaesugiru.", meaning: "Aku memikirkan perkataan orang itu terlalu dalam." },
              { jp: "複雑に考えすぎるから、答えが出ないんだ。", kana: "ふくざつ に かんがえすぎる から、 こたえ が でない ん だ。", romaji: "Fukuzatsu ni kangaesugiru kara, kotae ga denain da.", meaning: "Karena kamu mikirnya terlalu rumit, makanya jawabannya tidak ketemu." },
              { jp: "未来のことを考えすぎるな。", kana: "みらい の こと を かんがえすぎる な。", romaji: "Mirai no koto o kangaesugiru na.", meaning: "Jangan terlalu overthinking soal masa depan." },
              { jp: "周りの目を考えすぎる性格を直したい。", kana: "まわり の め を かんがえすぎる せいかく を なおしたい。", romaji: "Mawari no me o kangaesugiru seikaku o naoshitai.", meaning: "Aku ingin memperbaiki sifatku yang terlalu memikirkan pandangan orang lain." },
              { jp: "意味を考えすぎるのは、時間の無駄だ。", kana: "いみ を かんがえすぎる の は、 じかん の むだ だ。", romaji: "Imi o kangaesugiru no wa, jikan no muda da.", meaning: "Terlalu memikirkan maknanya adalah buang-buang waktu." }
            ]
          }]
        },
        {
          name: "Irregular",
          examples: [{
            base: "心配する",
            transformed: "心配しすぎる",
            kana: "しんぱいする → しんぱいしすぎる",
            romaji: "shinpai suru → shinpai shisugiru",
            meaning: "terlalu khawatir",
            sentences: [
              { jp: "親はいつも、子供のことを心配しすぎる。", kana: "おや は いつも、 こども の こと を しんぱいしすぎる。", romaji: "Oya wa itsumo, kodomo no koto o shinpai shisugiru.", meaning: "Orang tua itu selalu terlalu mengkhawatirkan anak-anaknya." },
              { jp: "テストの結果を心配しすぎるのはやめなさい。", kana: "てすと の けっか を しんぱいしすぎる の は やめなさい。", romaji: "Tesuto no kekka o shinpai shisugiru no wa yamenasai.", meaning: "Berhentilah terlalu mengkhawatirkan hasil ujian." },
              { jp: "小さな怪我なのに、彼は心配しすぎる。", kana: "ちいさな けが なのに、 かれ は しんぱいしすぎる。", romaji: "Chiisana kega nanoni, kare wa shinpai shisugiru.", meaning: "Padahal lukanya kecil, dia terlalu khawatir." },
              { jp: "将来のお金を心配しすぎる人が多い。", kana: "しょうらい の おかね を しんぱいしすぎる ひと が おおい。", romaji: "Shourai no okane o shinpai shisugiru hito ga ooi.", meaning: "Banyak orang yang terlalu mengkhawatirkan uang untuk masa depan." },
              { jp: "心配しすぎるから、ストレスがたまるんだよ。", kana: "しんぱいしすぎる から、 すとれす が たまる ん だ よ。", romaji: "Shinpai shisugiru kara, sutoresu ga tamarun da yo.", meaning: "Karena kamu terlalu cemas, makanya stresmu menumpuk lho." },
              { jp: "安全を心配しすぎるのも、問題かもしれない。", kana: "あんぜん を しんぱいしすぎる の も、 もんだい かもしれない。", romaji: "Anzen o shinpai shisugiru no mo, mondai kamoshirenai.", meaning: "Terlalu mencemaskan keamanan juga mungkin adalah sebuah masalah." },
              { jp: "他人のことまで心配しすぎる。", kana: "たにん の こと まで しんぱいしすぎる。", romaji: "Tanin no koto made shinpai shisugiru.", meaning: "Sampai urusan orang lain pun terlalu dikhawatirkan." },
              { jp: "病気にならないか、いつも心配しすぎる。", kana: "びょうき に ならない か、 いつも しんぱいしすぎる。", romaji: "Byouki ni naranai ka, itsumo shinpai shisugiru.", meaning: "Selalu terlalu khawatir apakah nanti akan jatuh sakit atau tidak." },
              { jp: "周りの人は、私のことを少し心配しすぎる。", kana: "まわり の ひと は、 わたし の こと を すこし しんぱいしすぎる。", romaji: "Mawari no hito wa, watashi no koto o sukoshi shinpai shisugiru.", meaning: "Orang-orang di sekitar itu sedikit terlalu mengkhawatirkanku." },
              { jp: "まだ起きていない問題を心配しすぎるな。", kana: "まだ おきていない もんだい を しんぱいしすぎる な。", romaji: "Mada okite inai mondai o shinpai shisugiru na.", meaning: "Jangan terlalu mengkhawatirkan masalah yang belum terjadi." }
            ]
          }]
        }
      ]
    },
    {
      id: "vf-61",
      level: "N4",
      order: 61,
      title: "~すぎた • Sudah Terlalu Banyak",
      summary: "Sudah Terlalu Banyak (N4). Bentuk lampau dari '~すぎる'. Digunakan untuk menceritakan penyesalan bahwa di masa lalu kita telah melakukan sesuatu secara berlebihan, dan biasanya membawa dampak buruk setelahnya.",
      formulas: [
        { group: "Godan", rule: "Ubah vokal akhir deretan 'u' menjadi 'i', lalu tambah すぎた. Contoh: 言う → 言い → 言いすぎた." },
        { group: "Ichidan", rule: "Hilangkan 'る' (ru) di akhir, ganti dengan すぎた. Contoh: 食べる → 食べすぎた." },
        { group: "Irregular", rule: "する → しすぎた, 来る (くる) → 来すぎた (きすぎた). Contoh: 無理する → 無理しすぎた." }
      ],
      groups: [
        {
          name: "Godan",
          examples: [{
            base: "言う",
            transformed: "言いすぎた",
            kana: "いう → いいすぎた",
            romaji: "iu → iisugita",
            meaning: "bicaranya kelewatan / terlalu banyak omong",
            sentences: [
              { jp: "怒って、友達に少し言いすぎた。", kana: "おこって、 ともだち に すこし いいすぎた。", romaji: "Okotte, tomodachi ni sukoshi iisugita.", meaning: "Karena marah, bicaraku sedikit kelewatan pada teman." },
              { jp: "あの時は、私が言いすぎたよ。ごめんね。", kana: "あの とき は、 わたし が いいすぎた よ。 ごめん ね。", romaji: "Ano toki wa, watashi ga iisugita yo. Gomen ne.", meaning: "Waktu itu, bicaraku memang keterlaluan lho. Maaf ya." },
              { jp: "冗談のつもりだったが、言いすぎたようだ。", kana: "じょうだん の つもり だった が、 いいすぎた ようだ。", romaji: "Joudan no tsumori datta ga, iisugita youda.", meaning: "Niatnya sih bercanda, tapi sepertinya omonganku kelewatan." },
              { jp: "部下を厳しく叱り、言いすぎたと反省している。", kana: "ぶか を きびしく しかり、 いいすぎた と はんせい している。", romaji: "Buka o kibishiku shikari, iisugita to hansei shite iru.", meaning: "Aku memarahi bawahan dengan keras, dan aku merenungi bahwa omonganku kelewatan." },
              { jp: "秘密をペラペラと言いすぎた。", kana: "ひみつ を ぺらぺら と いいすぎた。", romaji: "Himitsu o perapera to iisugita.", meaning: "Aku bicara panjang lebar dan membocorkan terlalu banyak rahasia." },
              { jp: "文句を言いすぎたせいで、雰囲気が悪くなった。", kana: "もんく を いいすぎた せいで、 ふんいき が わるく なった。", romaji: "Monku o iisugita seide, funiki ga waruku natta.", meaning: "Gara-gara aku mengeluh terlalu banyak, suasananya jadi buruk." },
              { jp: "彼の悪口をみんなの前で言いすぎた。", kana: "かれ の わるぐち を みんな の まえ で いいすぎた。", romaji: "Kare no waruguchi o minna no mae de iisugita.", meaning: "Aku terlalu banyak menjelekkan dia di depan semua orang." },
              { jp: "昨日はお酒に酔って、少し言いすぎました。(Sopan)", kana: "きのう は おさけ に よって、 すこし いいすぎました。", romaji: "Kinou wa osake ni yotte, sukoshi iisugimashita.", meaning: "Kemarin saya mabuk dan bicara agak kelewatan." },
              { jp: "心配だからって、子供に小言を言いすぎた。", kana: "しんぱい だからって、 こども に こごと を いいすぎた。", romaji: "Shinpai dakaratte, kodomo ni kogoto o iisugita.", meaning: "Meskipun karena khawatir, omelanku terlalu berlebihan pada anak." },
              { jp: "本当のことを言いすぎたかもしれない。", kana: "ほんとう の こと を いいすぎた かもしれない。", romaji: "Hontou no koto o iisugita kamoshirenai.", meaning: "Mungkin aku sudah berbicara tentang kebenarannya terlalu berlebihan." }
            ]
          }]
        },
        {
          name: "Ichidan",
          examples: [{
            base: "食べる",
            transformed: "食べすぎた",
            kana: "たべる → たべすぎた",
            romaji: "taberu → tabesugita",
            meaning: "makan terlalu banyak / kekenyangan",
            sentences: [
              { jp: "バイキングで美味しいものを食べすぎた。", kana: "ばいきんぐ で おいしい もの を たべすぎた。", romaji: "Baikingu de oishii mono o tabesugita.", meaning: "Di restoran all-you-can-eat, aku makan makanan enak terlalu banyak." },
              { jp: "昨日の夜、ラーメンを食べすぎたせいで胃が痛い。", kana: "きのう の よる、 らーめん を たべすぎた せいで い が いたい。", romaji: "Kinou no yoru, raamen o tabesugita seide i ga itai.", meaning: "Tadi malam gara-gara terlalu banyak makan ramen, perut(lambung)ku sakit." },
              { jp: "お正月はお餅を食べすぎた。", kana: "おしょうがつ は おもち を たべすぎた。", romaji: "Oshougatsu wa omochi o tabesugita.", meaning: "Saat tahun baru, aku makan mochi terlalu banyak." },
              { jp: "甘いものを食べすぎたから、運動しないと。", kana: "あまい もの を たべすぎた から、 うんどう しない と。", romaji: "Amai mono o tabesugita kara, undou shinai to.", meaning: "Karena sudah kebanyakan makan manis, aku harus berolahraga." },
              { jp: "お腹が空いていたので、お弁当を2つも食べすぎた。", kana: "おなか が すいていた ので、 おべんとう を ふたつ も たべすぎた。", romaji: "Onaka ga suite ita node, obentou o futatsu mo tabesugita.", meaning: "Karena sangat lapar, aku makan bento terlalu banyak sampai 2 buah." },
              { jp: "美味しくて、つい食べすぎました。(Sopan)", kana: "おいしくて、 つい たべすぎました。", romaji: "Oishikute, tsui tabesugimashita.", meaning: "Karena enak, tanpa sadar saya makan terlalu banyak." },
              { jp: "夕食を食べすぎたから、眠くなってきた。", kana: "ゆうしょく を たべすぎた から、 ねむく なってきた。", romaji: "Yuushoku o tabesugita kara, nemuku natte kita.", meaning: "Karena makan malam terlalu kenyang, mataku jadi mulai mengantuk." },
              { jp: "旅行先で名物を食べすぎた。", kana: "りょこうさき で めいぶつ を たべすぎた。", romaji: "Ryokousaki de meibutsu o tabesugita.", meaning: "Di tempat liburan aku kebanyakan makan hidangan khas sana." },
              { jp: "スナック菓子を食べすぎた。", kana: "すなっくがし を たべすぎた。", romaji: "Sunakkugashi o tabesugita.", meaning: "Aku terlalu banyak makan camilan ringan." },
              { jp: "肉を食べすぎたので、今日は野菜が欲しい。", kana: "にく を たべすぎた ので、 きょう は やさい が ほしい。", romaji: "Niku o tabesugita node, kyou wa yasai ga hoshii.", meaning: "Karena sudah terlalu banyak makan daging, hari ini aku ingin sayuran." }
            ]
          }]
        },
        {
          name: "Irregular",
          examples: [{
            base: "無理する",
            transformed: "無理しすぎた",
            kana: "むりする → むりしすぎた",
            romaji: "muri suru → muri shisugita",
            meaning: "terlalu memaksakan diri (di masa lalu)",
            sentences: [
              { jp: "先週は仕事で無理しすぎたので、熱が出た。", kana: "せんしゅう は しごと で むりしすぎた ので、 ねつ が でた。", romaji: "Senshuu wa shigoto de muri shisugita node, netsu ga deta.", meaning: "Karena minggu lalu terlalu memaksakan diri di pekerjaan, aku jadi demam." },
              { jp: "徹夜で勉強して、無理しすぎた。", kana: "てつや で べんきょう して、 むりしすぎた。", romaji: "Tetsuya de benkyou shite, muri shisugita.", meaning: "Belajar semalaman dengan begadang, aku terlalu memaksakan diri." },
              { jp: "ダイエットで無理しすぎたせいで、倒れてしまった。", kana: "だいえっと で むりしすぎた せいで、 たおれて しまった。", romaji: "Daietto de muri shisugita seide, taorete shimatta.", meaning: "Gara-gara terlalu memaksakan diri dalam diet, aku sampai tumbang (pingsan)." },
              { jp: "走るペースが速くて、無理しすぎた。", kana: "はしる ぺーす が はやくて、 むりしすぎた。", romaji: "Hashiru peesu ga hayakute, muri shisugita.", meaning: "Tempo lariku cepat, aku memaksakannya terlalu keras." },
              { jp: "一人で全部抱え込んで、無理しすぎたんだよ。", kana: "ひとり で ぜんぶ かかえこんで、 むりしすぎた ん だ よ。", romaji: "Hitori de zenbu kakaekonde, muri shisugita n da yo.", meaning: "Menanggung semuanya sendirian, kamu itu terlalu memaksakan diri lho." },
              { jp: "若いうちに無理しすぎたから、腰が痛い。", kana: "わかい うち に むりしすぎた から、 こし が いたい。", romaji: "Wakai uchi ni muri shisugita kara, koshi ga itai.", meaning: "Karena waktu muda terlalu diforsir, pinggangku jadi sakit sekarang." },
              { jp: "お金を稼ぐために、無理しすぎた。", kana: "おかね を かせぐ ため に、 むりしすぎた。", romaji: "Okane o kasegu tame ni, muri shisugita.", meaning: "Demi mencari uang, aku terlalu memaksakan diri." },
              { jp: "彼の期待に応えようとして、無理しすぎた。", kana: "かれ の きたい に こたえよう と して、 むりしすぎた。", romaji: "Kare no kitai ni kotaeyou to shite, muri shisugita.", meaning: "Berusaha memenuhi ekspektasinya, aku terlalu memaksakan diri." },
              { jp: "昨日はお酒を飲んで、少し無理しすぎました。(Sopan)", kana: "きのう は おさけ を のんで、 すこし むりしすぎました。", romaji: "Kinou wa osake o nonde, sukoshi muri shisugimashita.", meaning: "Kemarin saya minum alkohol, dan sedikit memaksakan batasku." },
              { jp: "人に気を使いすぎて、無理しすぎた。", kana: "ひと に き を つかいすぎて、 むりしすぎた。", romaji: "Hito ni ki o tsukaisugite, muri shisugita.", meaning: "Terlalu menjaga perasaan orang, aku jadinya terlalu memaksakan diri." }
            ]
          }]
        }
      ]
    },
    {
      id: "vf-62",
      level: "N4",
      order: 62,
      title: "~てもらう • Minta Orang Lain Melakukan / Dibantu",
      summary: "Dibantu / Minta Orang Melakukan (N4). Digunakan ketika kita menerima suatu perlakuan, pertolongan, atau bantuan dari orang lain. Sering diterjemahkan sebagai 'Aku minta/dibantu oleh...' (Subjeknya selalu pihak yang menerima bantuan).",
      formulas: [
        { group: "Godan", rule: "Ubah kata kerja ke bentuk Te (て/で), lalu tambah もらう. Contoh: 直す → 直してもらう." },
        { group: "Ichidan", rule: "Ubah kata kerja ke bentuk Te (て), lalu tambah もらう. Contoh: 教える → 教えてもらう." },
        { group: "Irregular", rule: "する → してもらう, 来る (くる) → 来てもらう (きてもらう). Contoh: 紹介する → 紹介してもらう." }
      ],
      groups: [
        {
          name: "Godan",
          examples: [{
            base: "直す",
            transformed: "直してもらう",
            kana: "なおす → なおしてもらう",
            romaji: "naosu → naoshite morau",
            meaning: "minta diperbaiki / dibantu memperbaiki",
            sentences: [
              { jp: "壊れたパソコンを、友達に直してもらう。", kana: "こわれた ぱそこん を、 ともだち に なおしてもらう。", romaji: "Kowareta pasokon o, tomodachi ni naoshite morau.", meaning: "Komputer yang rusak, aku minta diperbaiki oleh teman." },
              { jp: "父に自転車を直してもらいました。(Lampau Sopan)", kana: "ちち に じてんしゃ を なおしてもらいました。", romaji: "Chichi ni jitensha o naoshite moraimashita.", meaning: "Saya telah dibantu ayah memperbaiki sepeda." },
              { jp: "服の破れたところを、母に直してもらう。", kana: "ふく の やぶれた ところ を、 はは に なおしてもらう。", romaji: "Fuku no yabureta tokoro o, haha ni naoshite morau.", meaning: "Bagian baju yang robek, aku minta ibu memperbaikinya." },
              { jp: "この文章の日本語を、先生に直してもらいたい。(+たい = Ingin)", kana: "この ぶんしょう の にほんご を、 せんせい に なおしてもらいたい。", romaji: "Kono bunshou no nihongo o, sensei ni naoshite moraitai.", meaning: "Aku ingin dibantu guru mengoreksi (memperbaiki) bahasa Jepang di tulisan ini." },
              { jp: "時計を店で直してもらうと、お金がかかる。", kana: "とけい を みせ で なおしてもらう と、 おかね が かかる。", romaji: "Tokei o mise de naoshite morau to, okane ga kakaru.", meaning: "Kalau minta diperbaiki di toko, jam tangan itu butuh biaya." },
              { jp: "お兄ちゃんにゲーム機を直してもらった。", kana: "おにいちゃん に げーむき を なおしてもらった。", romaji: "Oniichan ni geemuki o naoshite moratta.", meaning: "Aku minta tolong kakak laki-laki memperbaiki konsol game-nya." },
              { jp: "ミスがあったら、すぐに直してもらう。", kana: "みす が あったら、 すぐ に なおしてもらう。", romaji: "Misu ga attara, sugu ni naoshite morau.", meaning: "Kalau ada kesalahan, aku akan meminta mereka segera memperbaikinya." },
              { jp: "彼に髪型を直してもらう。", kana: "かれ に かみがた を なおしてもらう。", romaji: "Kare ni kamigata o naoshite morau.", meaning: "Aku minta tolong dia merapikan (memperbaiki) gaya rambutku." },
              { jp: "写真の明るさをプロに直してもらう。", kana: "しゃしん の あかるさ を ぷろ に なおしてもらう。", romaji: "Shashin no akarusa o puro ni naoshite morau.", meaning: "Aku meminta profesional untuk memperbaiki kecerahan fotonya." },
              { jp: "彼氏にネックレスを直してもらった。", kana: "かれし に ねっくれす を なおしてもらった。", romaji: "Kareshi ni nekkuresu o naoshite moratta.", meaning: "Aku dibantu pacarku membetulkan kalungku." }
            ]
          }]
        },
        {
          name: "Ichidan",
          examples: [{
            base: "教える",
            transformed: "教えてもらう",
            kana: "おしえる → おしえてもらう",
            romaji: "oshieru → oshiete morau",
            meaning: "diajari / minta diajarkan",
            sentences: [
              { jp: "山田さんに日本語を教えてもらう。", kana: "やまださん に にほんご を おしえてもらう。", romaji: "Yamada-san ni nihongo o oshiete morau.", meaning: "Aku diajari bahasa Jepang oleh Yamada-san." },
              { jp: "先輩に仕事のやり方を教えてもらいました。(Sopan)", kana: "せんぱい に しごと の やりかた を おしえてもらいました。", romaji: "Senpai ni shigoto no yarikata o oshiete moraimashita.", meaning: "Saya minta tolong diajari cara kerjanya oleh senior." },
              { jp: "美味しいレストランを教えてもらう。", kana: "おいしい れすとらん を おしえてもらう。", romaji: "Oishii resutoran o oshiete morau.", meaning: "Aku diberitahu (diajari) restoran yang enak." },
              { jp: "道に迷って、警察に道を教えてもらった。", kana: "みち に まよって、 けいさつ に みち を おしえてもらった。", romaji: "Michi ni mayotte, keisatsu ni michi o oshiete moratta.", meaning: "Karena tersesat, aku diajari arah jalannya oleh polisi." },
              { jp: "母に料理のレシピを教えてもらう。", kana: "はは に りょうり の れしぴ を おしえてもらう。", romaji: "Haha ni ryouri no reshipi o oshiete morau.", meaning: "Aku minta diajarkan resep masakan oleh ibu." },
              { jp: "分からないところは、友達に教えてもらう。", kana: "わからない ところ は、 ともだち に おしえてもらう。", romaji: "Wakaranai tokoro wa, tomodachi ni oshiete morau.", meaning: "Bagian yang tidak ngerti, aku minta diajarin oleh teman." },
              { jp: "プロにギターの弾き方を教えてもらいたい。", kana: "ぷろ に ぎたー の ひきかた を おしえてもらいたい。", romaji: "Puro ni gitaa no hikikata o oshiete moraitai.", meaning: "Aku ingin diajari cara main gitar oleh profesional." },
              { jp: "そのニュースは、彼に教えてもらった。", kana: "その にゅーす は、 かれ に おしえてもらった。", romaji: "Sono nyuusu wa, kare ni oshiete moratta.", meaning: "Berita itu, aku dikasih tahu oleh dia." },
              { jp: "使い方を教えてもらうまで、待っています。", kana: "つかいかた を おしえてもらう まで、 まって います。", romaji: "Tsukaikata o oshiete morau made, matte imasu.", meaning: "Saya menunggu sampai diajarkan cara menggunakannya." },
              { jp: "先生に正しい発音を教えてもらった。", kana: "せんせい に ただしい はつおん を おしえてもらった。", romaji: "Sensei ni tadashii hatsuon o oshiete moratta.", meaning: "Aku diajarkan pelafalan yang benar oleh guru." }
            ]
          }]
        },
        {
          name: "Irregular",
          examples: [{
            base: "紹介する",
            transformed: "紹介してもらう",
            kana: "しょうかいする → しょうかいしてもらう",
            romaji: "shoukai suru → shoukai shite morau",
            meaning: "dikenalkan / minta dikenalkan",
            sentences: [
              { jp: "友達に、いいアルバイトを紹介してもらう。", kana: "ともだち に、 いい あるばいと を しょうかいしてもらう。", romaji: "Tomodachi ni, ii arubaito o shoukai shite morau.", meaning: "Aku minta tolong dikenalkan pekerjaan paruh waktu yang bagus pada teman." },
              { jp: "今の彼女は、先輩に紹介してもらいました。(Sopan)", kana: "いま の かのじょ は、 せんぱい に しょうかいしてもらいました。", romaji: "Ima no kanojo wa, senpai ni shoukai shite moraimashita.", meaning: "Pacarku yang sekarang, aku dikenalkan oleh senior." },
              { jp: "先生に、お勧めの本を紹介してもらう。", kana: "せんせい に、 おすすめ の ほん を しょうかいしてもらう。", romaji: "Sensei ni, osusume no hon o shoukai shite morau.", meaning: "Aku minta tolong dikenalkan (direkomendasikan) buku pada guru." },
              { jp: "誰かいい人を紹介してもらえませんか？(Potensial/Bisa)", kana: "だれ か いい ひと を しょうかいしてもらえません か？", romaji: "Dare ka ii hito o shoukai shite moraemasen ka?", meaning: "Bisakah kamu memperkenalkan aku pada orang yang baik?" },
              { jp: "社長に、有名なデザイナーを紹介してもらった。", kana: "しゃちょう に、 ゆうめい な でざいなー を しょうかいしてもらった。", romaji: "Shachou ni, yuumei na dezainaa o shoukai shite moratta.", meaning: "Aku dikenalkan dengan desainer terkenal oleh bapak direktur." },
              { jp: "親戚に不動産屋を紹介してもらう。", kana: "しんせき に ふどうさんや を しょうかいしてもらう。", romaji: "Shinseki ni fudousanya o shoukai shite morau.", meaning: "Aku minta dikenalkan agen perumahan oleh kerabat." },
              { jp: "安いホテルを、旅行会社に紹介してもらう。", kana: "やすい ほてる を、 りょこう がいしゃ に しょうかいしてもらう。", romaji: "Yasui hoteru o, ryokou gaisha ni shoukai shite morau.", meaning: "Aku minta dikenalkan (direkomendasikan) hotel murah oleh agen travel." },
              { jp: "新しいお客様を紹介してもらいたい。", kana: "あたらしい おきゃくさま を しょうかいしてもらいたい。", romaji: "Atarashii okyakusama o shoukai shite moraitai.", meaning: "Saya ingin dibantu dikenalkan dengan klien yang baru." },
              { jp: "その曲は、兄に紹介してもらって好きになった。", kana: "その きょく は、 あに に しょうかいしてもらって すき に なった。", romaji: "Sono kyoku wa, ani ni shoukai shite moratte suki ni natta.", meaning: "Lagu itu, aku jadi suka setelah diperkenalkan oleh kakak laki-lakiku." },
              { jp: "彼に美味しい店を紹介してもらった。", kana: "かれ に おいしい みせ を しょうかいしてもらった。", romaji: "Kare ni oishii mise o shoukai shite moratta.", meaning: "Aku direkomendasikan toko yang enak olehnya." }
            ]
          }]
        }
      ]
,
    {
      id: "vf-63",
      level: "N4",
      order: 63,
      title: "~える/られる • Bentuk Potensial (Bisa/Dapat)",
      summary: "Menyatakan kemampuan atau kesanggupan melakukan sesuatu. Godan: ubah vokal akhir u → e + る. Ichidan: hapus る, tambahkan られる. Irregular: する → できる.",
      formulas: [
        { group: "Godan", rule: "Ubah vokal akhir ~u menjadi ~e lalu tambahkan る. Contoh: 泳ぐ → 泳げる, 書く → 書ける, 話す → 話せる." },
        { group: "Ichidan", rule: "Hapus る di akhir, tambahkan られる. Contoh: 起きる → 起きられる, 見る → 見られる." },
        { group: "Irregular", rule: "する → できる (khusus). 来る → 来られる." }
      ],
      groups: [
        {
          name: "Godan",
          examples: [{
            base: "泳ぐ", transformed: "泳げる", kana: "およぐ → およげる", romaji: "oyogu → oyogeru", meaning: "berenang → bisa berenang",
            sentences: [
              { jp: "子どもの頃は全然泳げなかったけど、今は海でも泳げる。", kana: "こども の ころ は ぜんぜん およげなかった けど、 いま は うみ でも およげる。", romaji: "Kodomo no koro wa zenzen oyogenakatta kedo, ima wa umi demo oyogeru.", meaning: "Waktu kecil sama sekali tidak bisa berenang, tapi sekarang di laut pun bisa." },
              { jp: "背泳ぎだけは今でもうまく泳げない。", kana: "せおよぎ だけ は いまでも うまく およげない。", romaji: "Seooyogi dake wa ima demo umaku oyogenai.", meaning: "Hanya gaya punggung yang sampai sekarang masih belum bisa." },
              { jp: "練習を重ねたら、やっと25メートル泳げるようになった。", kana: "れんしゅう を かさねたら、 やっと にじゅうごめーとる およげる ように なった。", romaji: "Renshuu o kasanetara, yatto nijuugo meetoru oyogeru you ni natta.", meaning: "Setelah terus berlatih, akhirnya bisa berenang 25 meter." },
              { jp: "このプールは水深が浅いから、子どもでも安心して泳げる。", kana: "この ぷーる は すいしん が あさい から、 こども でも あんしん して およげる。", romaji: "Kono puuru wa suishin ga asai kara, kodomo demo anshin shite oyogeru.", meaning: "Kolam renang ini dangkal, jadi anak-anak pun bisa berenang dengan tenang." },
              { jp: "波が高すぎて、今日は海で泳げなかった。", kana: "なみ が たかすぎて、 きょう は うみ で およげなかった。", romaji: "Nami ga takasugite, kyou wa umi de oyogenakatta.", meaning: "Ombak terlalu tinggi, hari ini tidak bisa berenang di laut." },
              { jp: "毎朝1キロ泳げるくらい、だいぶ体力がついた。", kana: "まいあさ いちきろ およげる くらい、 だいぶ たいりょく が ついた。", romaji: "Maiasa ichi-kiro oyogeru kurai, daibu tairyoku ga tsuita.", meaning: "Stamina sudah meningkat sampai bisa berenang 1 km tiap pagi." },
              { jp: "水が怖くて、深いところではどうしても泳げない。", kana: "みず が こわくて、 ふかい ところ では どうしても およげない。", romaji: "Mizu ga kowakute, fukai tokoro de wa doushitemo oyogenai.", meaning: "Takut air, di tempat dalam bagaimanapun tidak bisa berenang." },
              { jp: "肩を痛めてしまって、しばらく泳げない状態が続いた。", kana: "かた を いためて しまって、 しばらく およげない じょうたい が つづいた。", romaji: "Kata o itamete shimatte, shibaraku oyogenai joutai ga tsuzuita.", meaning: "Karena bahu cedera, kondisi tidak bisa berenang berlanjut cukup lama." },
              { jp: "あの選手は海峡を泳げるほどの実力がある。", kana: "あの せんしゅ は かいきょう を およげる ほど の じつりょく が ある。", romaji: "Ano senshu wa kaikyou o oyogeru hodo no jitsuryoku ga aru.", meaning: "Atlet itu punya kemampuan yang cukup untuk berenang menyeberangi selat." },
              { jp: "クロールと平泳ぎは泳げるけど、バタフライはまだ無理だ。", kana: "くろーる と ひらおよぎ は およげる けど、 ばたふらい は まだ むり だ。", romaji: "Kurooru to hiraoyogi wa oyogeru kedo, batafurai wa mada muri da.", meaning: "Gaya bebas dan gaya dada sudah bisa, tapi gaya kupu-kupu masih belum mampu." }
            ]
          }]
        },
        {
          name: "Ichidan",
          examples: [{
            base: "起きる", transformed: "起きられる", kana: "おきる → おきられる", romaji: "okiru → okirareru", meaning: "bangun → bisa bangun",
            sentences: [
              { jp: "目覚まし3つかけても、朝6時に起きられない日がある。", kana: "めざまし みっつ かけても、 あさ ろくじ に おきられない ひ が ある。", romaji: "Mezamashi mittsu kakete mo, asa roku-ji ni okirare nai hi ga aru.", meaning: "Meski pasang 3 alarm, ada hari-hari yang tidak bisa bangun jam 6 pagi." },
              { jp: "大事なプレゼンがある朝は、緊張して早く起きられる。", kana: "だいじ な ぷれぜん が ある あさ は、 きんちょう して はやく おきられる。", romaji: "Daiji na purezen ga aru asa wa, kinchou shite hayaku okirareru.", meaning: "Pagi hari ada presentasi penting, karena nervous malah bisa bangun lebih awal." },
              { jp: "夜勤明けは疲れ果てて、昼まで起きられなかった。", kana: "やきん あけ は つかれはてて、 ひる まで おきられなかった。", romaji: "Yakin ake wa tsukare hatete, hiru made okirare nakatta.", meaning: "Habis shift malam kelelahan total, sampai siang tidak bisa bangun." },
              { jp: "最近、8時間寝ても疲れが取れなくて、すっきり起きられない。", kana: "さいきん、 はちじかん ねても つかれ が とれなくて、 すっきり おきられない。", romaji: "Saikin, hachi-jikan nete mo tsukare ga torenakute, sukkiri okirare nai.", meaning: "Belakangan ini tidur 8 jam pun kelelahan tidak hilang, susah bangun dengan segar." },
              { jp: "週末くらいは誰にも起こされずに自分で起きられたい。", kana: "しゅうまつ くらい は だれ にも おこされず に じぶん で おきられたい。", romaji: "Shuumatsu kurai wa dare ni mo okosare zu ni jibun de okirare tai.", meaning: "Setidaknya di akhir pekan, ingin bisa bangun sendiri tanpa dibangunkan siapapun." },
              { jp: "地震の揺れで真夜中に突然起きられた。", kana: "じしん の ゆれ で まよなか に とつぜん おきられた。", romaji: "Jishin no yure de mayonaka ni totsuzen okirare ta.", meaning: "Karena guncangan gempa, tiba-tiba terbangun di tengah malam." },
              { jp: "体調が悪くて、今朝はベッドからなかなか起きられなかった。", kana: "たいちょう が わるくて、 けさ は べっど から なかなか おきられなかった。", romaji: "Taichou ga warukute, kesa wa beddo kara nakanaka okirare nakatta.", meaning: "Badan tidak enak, pagi ini susah sekali bangkit dari tempat tidur." },
              { jp: "慣れてきたら、アラームなしでも自然に起きられるようになった。", kana: "なれてきたら、 あらーむ なし でも しぜん に おきられる ように なった。", romaji: "Narete kitara, araaamu nashi demo shizen ni okirareru you ni natta.", meaning: "Setelah terbiasa, bisa bangun secara alami tanpa alarm." },
              { jp: "ストレスが続くと、夜中に何度も起きられてしまう。", kana: "すとれす が つづく と、 よなか に なんど も おきられて しまう。", romaji: "Sutoresu ga tsuzuku to, yonaka ni nando mo okirare te shimau.", meaning: "Kalau stress terus, bisa terbangun berkali-kali di tengah malam." },
              { jp: "旅行の前日はワクワクして、なかなか早く起きられなかった。", kana: "りょこう の ぜんじつ は わくわく して、 なかなか はやく おきられなかった。", romaji: "Ryokou no zenjitsu wa wakuwaku shite, nakanaka hayaku okirare nakatta.", meaning: "Malam sebelum traveling, karena excited justru susah bangun pagi." }
            ]
          }]
        },
        {
          name: "Irregular",
          examples: [{
            base: "運転する", transformed: "運転できる", kana: "うんてんする → うんてんできる", romaji: "unten suru → unten dekiru", meaning: "mengemudi → bisa mengemudi",
            sentences: [
              { jp: "免許を取ったばかりで、まだ高速道路は運転できない。", kana: "めんきょ を とった ばかり で、 まだ こうそくどうろ は うんてん できない。", romaji: "Menkyo o totta bakari de, mada kousoku douro wa unten dekinai.", meaning: "Baru dapat SIM, belum bisa mengemudi di jalan tol." },
              { jp: "眼鏡をかければ、夜でも安全に運転できる。", kana: "めがね を かければ、 よる でも あんぜん に うんてん できる。", romaji: "Megane o kakereba, yoru demo anzen ni unten dekiru.", meaning: "Kalau pakai kacamata, bisa mengemudi dengan aman bahkan di malam hari." },
              { jp: "左ハンドルは慣れてないから、うまく運転できなかった。", kana: "ひだり はんどる は なれてない から、 うまく うんてん できなかった。", romaji: "Hidari handoru wa narete nai kara, umaku unten dekinakatta.", meaning: "Karena tidak terbiasa setir kiri, tidak bisa mengemudi dengan baik." },
              { jp: "お酒を一杯でも飲んだら、絶対に運転できない。", kana: "おさけ を いっぱい でも のんだら、 ぜったい に うんてん できない。", romaji: "Osake o ippai demo nondara, zettai ni unten dekinai.", meaning: "Meski hanya minum satu gelas saja, sama sekali tidak boleh mengemudi." },
              { jp: "視界が悪い大雨の日は、怖くて運転できない。", kana: "しかい が わるい おおあめ の ひ は、 こわくて うんてん できない。", romaji: "Shikai ga warui ooame no hi wa, kowakute unten dekinai.", meaning: "Hari hujan deras dengan jarak pandang buruk, takut untuk mengemudi." },
              { jp: "半年の練習を経て、やっとスムーズに運転できるようになった。", kana: "はんとし の れんしゅう を へて、 やっと すむーず に うんてん できる ように なった。", romaji: "Hantoshi no renshuu o hete, yatto sumuuzu ni unten dekiru you ni natta.", meaning: "Setelah latihan setengah tahun, akhirnya bisa mengemudi dengan lancar." },
              { jp: "腕を骨折している間は、運転できなくて本当に不便だった。", kana: "うで を こっせつ している あいだ は、 うんてん できなくて ほんとう に ふべん だった。", romaji: "Ude o kossetsu shite iru aida wa, unten dekinakute hontou ni fuben datta.", meaning: "Selama lengan patah, tidak bisa mengemudi dan sungguh merepotkan." },
              { jp: "慣れた道なら、会話しながらでも普通に運転できる。", kana: "なれた みち なら、 かいわ しながら でも ふつう に うんてん できる。", romaji: "Nareta michi nara, kaiwa shinagara demo futsuu ni unten dekiru.", meaning: "Kalau jalan yang sudah hafal, bisa mengemudi normal sambil ngobrol." },
              { jp: "ナビさえあれば、知らない場所でも問題なく運転できる。", kana: "なび さえ あれば、 しらない ばしょ でも もんだいなく うんてん できる。", romaji: "Nabi sae areba, shiranai basho demo mondai naku unten dekiru.", meaning: "Kalau ada navigasi, bisa mengemudi tanpa masalah meski ke tempat yang belum dikenal." },
              { jp: "子どもの頃から車が好きで、早く運転できる年齢になりたかった。", kana: "こども の ころ から くるま が すきで、 はやく うんてん できる ねんれい に なりたかった。", romaji: "Kodomo no koro kara kuruma ga sukide, hayaku unten dekiru nenrei ni naritakatta.", meaning: "Dari kecil suka mobil, dulu selalu ingin cepat mencapai usia yang boleh mengemudi." }
            ]
          }]
        }
      ]
    },
    {
      id: "vf-64",
      level: "N4",
      order: 64,
      title: "~られる • Bentuk Pasif (Di-/Ter-)",
      summary: "Menyatakan kalimat pasif — subjek menerima tindakan dari orang lain. Sering mengandung nuansa kerugian atau kekecewaan. Godan: ubah vokal akhir u → a + れる. Ichidan: hapus る, tambahkan られる. Irregular: する → される, 来る → 来られる.",
      formulas: [
        { group: "Godan", rule: "Ubah vokal akhir ~u menjadi ~a lalu tambahkan れる. Contoh: 叱る(shikaru) → 叱られる(shikarareru), 呼ぶ → 呼ばれる, 盗む → 盗まれる." },
        { group: "Ichidan", rule: "Hapus る di akhir, tambahkan られる. Contoh: 褒める(homeru) → 褒められる(homerareru), 食べる → 食べられる." },
        { group: "Irregular", rule: "する → される. 来る(kuru) → 来られる(korareru)." }
      ],
      groups: [
        {
          name: "Godan",
          examples: [{
            base: "叱る", transformed: "叱られる", kana: "しかる → しかられる", romaji: "shikaru → shikarareru", meaning: "memarahi → dimarahi",
            sentences: [
              { jp: "遅刻したせいで、上司にひどく叱られた。", kana: "ちこく した せいで、 じょうし に ひどく しかられた。", romaji: "Chikoku shita sei de, joushi ni hidoku shikarareta.", meaning: "Gara-gara telat, dimarahi habis-habisan sama atasan." },
              { jp: "授業中にスマホをいじって、先生に叱られてしまった。", kana: "じゅぎょうちゅう に すまほ を いじって、 せんせい に しかられて しまった。", romaji: "Jugyouchuu ni sumaho o ijitte, sensei ni shikararete shimatta.", meaning: "Pegang HP saat pelajaran, berakhir dimarahi guru." },
              { jp: "小さい頃は兄のものを勝手に使って、よく親に叱られた。", kana: "ちいさい ころ は あに の もの を かって に つかって、 よく おや に しかられた。", romaji: "Chiisai koro wa ani no mono o katte ni tsukatte, yoku oya ni shikarareta.", meaning: "Waktu kecil sering dimarahi orang tua karena pakai barang kakak tanpa izin." },
              { jp: "報告が遅すぎて、部長に叱られるのは目に見えていた。", kana: "ほうこく が おそすぎて、 ぶちょう に しかられる の は め に みえていた。", romaji: "Houkoku ga osasugite, buchou ni shikarareru no wa me ni miete ita.", meaning: "Laporan terlalu telat, sudah kebayang pasti bakal dimarahi manajer." },
              { jp: "近所の畑を踏み荒らして、おじさんに叱られた。", kana: "きんじょ の はたけ を ふみあらして、 おじさん に しかられた。", romaji: "Kinjo no hatake o fumiara shite, ojisan ni shikarareta.", meaning: "Menginjak-injak ladang tetangga, dimarahi bapak-bapak setempat." },
              { jp: "何度も同じミスをして、さすがに今日は強く叱られた。", kana: "なんど も おなじ みす を して、 さすが に きょう は つよく しかられた。", romaji: "Nando mo onaji misu o shite, sasuga ni kyou wa tsuyoku shikarareta.", meaning: "Berkali-kali melakukan kesalahan yang sama, hari ini akhirnya dimarahi keras." },
              { jp: "図書館で大声を出して、司書さんに叱られた。", kana: "としょかん で おおごえ を だして、 ししょ さん に しかられた。", romaji: "Toshokan de oogoe o dashite, shisho-san ni shikarareta.", meaning: "Bersuara keras di perpustakaan, ditegur oleh pustakawan." },
              { jp: "親に叱られるのが嫌で、失敗を隠していた時期があった。", kana: "おや に しかられる の が いやで、 しっぱい を かくしていた じき が あった。", romaji: "Oya ni shikarareru no ga iya de, shippai o kakushite ita jiki ga atta.", meaning: "Pernah ada masa menyembunyikan kegagalan karena tidak mau dimarahi orang tua." },
              { jp: "提出期限を過ぎた課題を出したら、担任に叱られた。", kana: "ていしゅつきげん を すぎた かだい を だしたら、 たんにん に しかられた。", romaji: "Teishutsu kigen o sugita kadai o dashitara, tannin ni shikarareta.", meaning: "Mengumpulkan tugas melewati deadline, dimarahi wali kelas." },
              { jp: "飲み会で羽目を外しすぎて、翌日先輩に叱られた。", kana: "のみかい で はめ を はずしすぎて、 よくじつ せんぱい に しかられた。", romaji: "Nomikai de hame o hazushi sugite, yokujitsu senpai ni shikarareta.", meaning: "Terlalu lepas kendali saat pesta minum, keesokan harinya dimarahi senior." }
            ]
          }]
        },
        {
          name: "Ichidan",
          examples: [{
            base: "褒める", transformed: "褒められる", kana: "ほめる → ほめられる", romaji: "homeru → homerareru", meaning: "memuji → dipuji",
            sentences: [
              { jp: "プレゼンが終わったあと、上司に珍しく褒められた。", kana: "ぷれぜん が おわった あと、 じょうし に めずらしく ほめられた。", romaji: "Purezen ga owatta ato, joushi ni mezurashiku homerareta.", meaning: "Setelah presentasi selesai, tidak biasanya dipuji oleh atasan." },
              { jp: "料理を振る舞ったら、みんなに口々に褒められて照れた。", kana: "りょうり を ふるまったら、 みんな に くちぐち に ほめられて てれた。", romaji: "Ryouri o furumat tara, minna ni kuchiguchi ni homerarete tereta.", meaning: "Setelah sajikan masakan, dipuji oleh semua orang sampai salah tingkah." },
              { jp: "絵のセンスがあると先生に褒められて、自信がついた。", kana: "え の せんす が ある と せんせい に ほめられて、 じしん が ついた。", romaji: "E no sensu ga aru to sensei ni homerarete, jishin ga tsuita.", meaning: "Dipuji guru katanya punya bakat melukis, jadi percaya diri." },
              { jp: "なかなか褒められない親に褒められた日は、一日中嬉しかった。", kana: "なかなか ほめられない おや に ほめられた ひ は、 いちにちじゅう うれしかった。", romaji: "Nakanaka homerarenai oya ni homerareta hi wa, ichinichijuu ureshikatta.", meaning: "Hari saat dipuji orang tua yang jarang memuji, senangnya seharian penuh." },
              { jp: "頑張りを認めて褒められると、次への意欲が全然違う。", kana: "がんばり を みとめて ほめられると、 つぎ へ の いよく が ぜんぜん ちがう。", romaji: "Ganbari o mitomete homerareru to, tsugi e no iyoku ga zenzen chigau.", meaning: "Kalau usaha diakui dan dipuji, semangat untuk selanjutnya jadi beda banget." },
              { jp: "クライアントに直接褒められた時は、疲れが吹き飛んだ。", kana: "くらいあんと に ちょくせつ ほめられた とき は、 つかれ が ふきとんだ。", romaji: "Kuraianto ni chokusetsu homerareta toki wa, tsukare ga fukitonda.", meaning: "Waktu dipuji langsung oleh klien, semua kelelahan langsung hilang." },
              { jp: "SNSに投稿した写真が思ったより褒められて驚いた。", kana: "えすえぬえす に とうこう した しゃしん が おもった より ほめられて おどろいた。", romaji: "SNS ni toukou shita shashin ga omotta yori homerarete odoroita.", meaning: "Foto yang diposting di SNS dipuji lebih dari yang diperkirakan, jadi kaget." },
              { jp: "初めて作ったにしては上手だと褒められて、もっとやる気が出た。", kana: "はじめて つくった に しては じょうず だと ほめられて、 もっと やるき が でた。", romaji: "Hajimete tsukutta ni shite wa jouzu da to homerarete, motto yaruki ga deta.", meaning: "Dipuji 'lumayan untuk pertama kali', makin termotivasi untuk terus buat." },
              { jp: "同僚に仕事が速いと褒められたけど、正直まだ自信がない。", kana: "どうりょう に しごと が はやい と ほめられた けど、 しょうじき まだ じしん が ない。", romaji: "Douryou ni shigoto ga hayai to homerareta kedo, shoujiki mada jishin ga nai.", meaning: "Dipuji teman kerja katanya cepat, tapi jujurnya belum merasa percaya diri." },
              { jp: "子どもに褒められると、大げさかもしれないけど本当に嬉しい。", kana: "こども に ほめられると、 おおげさ かも しれない けど ほんとう に うれしい。", romaji: "Kodomo ni homerareru to, oogesa kamo shirenai kedo hontou ni ureshii.", meaning: "Kalau dipuji anak kecil, mungkin lebay tapi sungguh senang rasanya." }
            ]
          }]
        },
        {
          name: "Irregular",
          examples: [{
            base: "紹介する", transformed: "紹介される", kana: "しょうかいする → しょうかいされる", romaji: "shoukai suru → shoukai sareru", meaning: "memperkenalkan → diperkenalkan",
            sentences: [
              { jp: "初出勤の日、チーム全員に紹介されてすごく緊張した。", kana: "はつしゅっきん の ひ、 ちーむ ぜんいん に しょうかいされて すごく きんちょう した。", romaji: "Hatsu-shukkin no hi, chiimu zen'in ni shoukai sarete sugoku kinchou shita.", meaning: "Hari pertama kerja, diperkenalkan ke seluruh anggota tim dan sangat gugup." },
              { jp: "友人の結婚式で素敵な人に紹介されて、連絡先を交換した。", kana: "ゆうじん の けっこんしき で すてき な ひと に しょうかいされて、 れんらくさき を こうかん した。", romaji: "Yuujin no kekkonshiki de suteki na hito ni shoukai sarete, renrakusaki o koukan shita.", meaning: "Di pernikahan teman, diperkenalkan dengan seseorang yang menarik dan tukar kontak." },
              { jp: "社長に直々に紹介されたことで、社内での立場が変わった。", kana: "しゃちょう に じきじき に しょうかいされた こと で、 しゃない での たちば が かわった。", romaji: "Shachou ni jikijiki ni shoukai sareta koto de, shanai de no tachiba ga kawatta.", meaning: "Setelah diperkenalkan langsung oleh direktur, posisi di kantor jadi berubah." },
              { jp: "このカフェ、インフルエンサーに紹介されてから急に混むようになった。", kana: "この かふぇ、 いんふるえんさー に しょうかいされて から きゅうに こむ ように なった。", romaji: "Kono kafe, infuruensaa ni shoukai sarete kara kyuuni komu you ni natta.", meaning: "Kafe ini, sejak diperkenalkan oleh influencer tiba-tiba jadi ramai." },
              { jp: "転職エージェントに複数の企業に紹介されて、どこにするか迷っている。", kana: "てんしょく えーじぇんと に ふくすう の きぎょう に しょうかいされて、 どこ に するか まよっている。", romaji: "Tenshoku eejento ni fukusuu no kigyou ni shoukai sarete, doko ni suru ka mayotte iru.", meaning: "Diperkenalkan ke beberapa perusahaan oleh agen rekrutmen, bingung mau pilih yang mana." },
              { jp: "SNSで海外のフォロワーに紹介されて、急にアカウントが伸びた。", kana: "えすえぬえす で かいがい の ふぉろわー に しょうかいされて、 きゅうに あかうんと が のびた。", romaji: "SNS de kaigai no forowaa ni shoukai sarete, kyuuni akaunto ga nobita.", meaning: "Diperkenalkan oleh followers luar negeri di SNS, tiba-tiba akunnya berkembang pesat." },
              { jp: "先輩に取引先の担当者に紹介されて、初めてひとりで商談を任された。", kana: "せんぱい に とりひきさき の たんとうしゃ に しょうかいされて、 はじめて ひとりで しょうだん を まかされた。", romaji: "Senpai ni torihikisaki no tantousha ni shoukai sarete, hajimete hitori de shoudan o makasareta.", meaning: "Diperkenalkan ke penanggung jawab mitra oleh senior, pertama kali dipercaya negosiasi sendiri." },
              { jp: "この仕事、知人に紹介されたんだけど、想像以上にきつかった。", kana: "この しごと、 ちじん に しょうかいされた んだけど、 そうぞう いじょう に きつかった。", romaji: "Kono shigoto, chijin ni shoukai sareta n dakedo, souzou ijou ni kitsukatta.", meaning: "Pekerjaan ini diperkenalkan oleh kenalan, tapi ternyata lebih berat dari bayangan." },
              { jp: "地元の名産品として全国のメディアに紹介されて、注文が殺到した。", kana: "じもと の めいさんひん として ぜんこく の めでぃあ に しょうかいされて、 ちゅうもん が さっとう した。", romaji: "Jimoto no meisanhin toshite zenkoku no media ni shoukai sarete, chuumon ga sattou shita.", meaning: "Diperkenalkan ke media nasional sebagai produk khas daerah, pesanan langsung membludak." },
              { jp: "パーティーで著名な作家に紹介されたが、緊張して何も話せなかった。", kana: "ぱーてぃー で ちょめい な さっか に しょうかいされた が、 きんちょう して なにも はなせなかった。", romaji: "Paatii de chomei na sakka ni shoukai sareta ga, kinchou shite nani mo hanasenakatta.", meaning: "Di pesta diperkenalkan kepada penulis terkenal, tapi gugup sampai tidak bisa bicara apapun." }
            ]
          }]
        }
      ]
    },
    {
      id: "vf-65",
      level: "N4",
      order: 65,
      title: "~させられる • Bentuk Kausatif-Pasif (Dipaksa/Terpaksa)",
      summary: "Menyatakan bahwa subjek dipaksa atau terpaksa melakukan sesuatu oleh orang lain. Sering mengandung nuansa ketidaksenangan atau keterpaksaan. Godan: ubah vokal ~u → ~a + せられる (atau ~される). Ichidan: hapus る, tambahkan させられる.",
      formulas: [
        { group: "Godan", rule: "Ubah vokal akhir ~u menjadi ~a lalu tambahkan せられる. Bentuk pendek: ~される. Contoh: 待つ(matsu) → 待たせられる(matasera reru)/待たされる(matasareru)." },
        { group: "Ichidan", rule: "Hapus る di akhir, tambahkan させられる. Contoh: 着替える(kigaeru) → 着替えさせられる(kigaesaserare ru)." },
        { group: "Irregular", rule: "する → させられる. 来る → 来させられる(kosaserareru)." }
      ],
      groups: [
        {
          name: "Godan",
          examples: [{
            base: "待つ", transformed: "待たされる", kana: "まつ → またされる", romaji: "matsu → matasareru", meaning: "menunggu → dipaksa menunggu / dibiarkan menunggu",
            sentences: [
              { jp: "アポがあったのに、1時間も待たされて正直イライラした。", kana: "あぽ が あった のに、 いちじかん も またされて しょうじき いらいら した。", romaji: "Apo ga atta noni, ichi-jikan mo matasarete shoujiki iraira shita.", meaning: "Sudah ada janji tapi dibiarkan menunggu 1 jam, jujurnya kesal banget." },
              { jp: "人気レストランで2時間待たされたけど、料理は本当においしかった。", kana: "にんき れすとらん で にじかん またされた けど、 りょうり は ほんとう に おいしかった。", romaji: "Ninki resutoran de ni-jikan matasareta kedo, ryouri wa hontou ni oishikatta.", meaning: "Dibiarkan menunggu 2 jam di restoran populer, tapi masakannya memang benar-benar enak." },
              { jp: "電話口でずっと待たされて、結局担当者に繋いでもらえなかった。", kana: "でんわぐち で ずっと またされて、 けっきょく たんとうしゃ に つないで もらえなかった。", romaji: "Denwaguchi de zutto matasarete, kekkyoku tantousha ni tsunaide moraenakatta.", meaning: "Terus-terusan dibiarkan menunggu di telepon, ujung-ujungnya tidak dihubungkan ke yang bersangkutan." },
              { jp: "面接で30分も待たされたのに、結果は不採用だった。", kana: "めんせつ で さんじゅっぷん も またされた のに、 けっか は ふさいよう だった。", romaji: "Mensetsu de sanjuppun mo matasareta noni, kekka wa fusaiyou datta.", meaning: "Sudah disuruh menunggu 30 menit untuk wawancara, hasilnya malah tidak diterima." },
              { jp: "彼女を怒らせてしまって、玄関の外で1時間待たされた。", kana: "かのじょ を おこらせて しまって、 げんかん の そと で いちじかん またされた。", romaji: "Kanojo o okorasete shimatte, genkan no soto de ichi-jikan matasareta.", meaning: "Karena bikin pacar marah, dipaksa menunggu di luar pintu selama 1 jam." },
              { jp: "行列に並んで待たされること自体は嫌いじゃないけど、無駄な待ちは嫌だ。", kana: "ぎょうれつ に ならんで またされる こと じたい は きらい じゃ ない けど、 むだ な まち は いやだ。", romaji: "Gyouretsu ni narande matasareru koto jitai wa kirai ja nai kedo, muda na machi wa iya da.", meaning: "Menunggu dalam antrian itu sendiri tidak masalah, tapi menunggu sia-sia itu menyebalkan." },
              { jp: "病院でいつも長く待たされるから、本を持っていくようにしている。", kana: "びょういん で いつも ながく またされる から、 ほん を もっていく ように している。", romaji: "Byouin de itsumo nagaku matasareru kara, hon o motte iku you ni shite iru.", meaning: "Karena di rumah sakit selalu disuruh menunggu lama, sekarang selalu bawa buku." },
              { jp: "上司の気分次第で会議の開始時間が変わって、毎回待たされる。", kana: "じょうし の きぶん しだい で かいぎ の かいしじかん が かわって、 まいかい またされる。", romaji: "Joushi no kibun shidai de kaigi no kaishi jikan ga kawatte, maikai matasareru.", meaning: "Waktu mulai rapat berubah-ubah tergantung mood atasan, setiap kali selalu disuruh menunggu." },
              { jp: "搭乗ゲートで1時間待たされた後、フライトがキャンセルになった。", kana: "とうじょう げーと で いちじかん またされた あと、 ふらいと が きゃんせる に なった。", romaji: "Toujou geeto de ichi-jikan matasareta ato, furaito ga kyanseru ni natta.", meaning: "Setelah dibiarkan menunggu 1 jam di gate, penerbangannya malah dibatalkan." },
              { jp: "彼は約束の時間に来たことがなくて、いつも待たされてばかりだ。", kana: "かれ は やくそく の じかん に きた こと が なくて、 いつも またされてばかり だ。", romaji: "Kare wa yakusoku no jikan ni kita koto ga nakute, itsumo matasarete bakari da.", meaning: "Dia tidak pernah datang tepat waktu, selalu melulu disuruh menunggu." }
            ]
          }]
        },
        {
          name: "Ichidan",
          examples: [{
            base: "着替える", transformed: "着替えさせられる", kana: "きがえる → きがえさせられる", romaji: "kigaeru → kigaesaserareru", meaning: "ganti baju → dipaksa ganti baju",
            sentences: [
              { jp: "舞台の本番直前に衣装を着替えさせられて、バタバタだった。", kana: "ぶたい の ほんばん ちょくぜん に いしょう を きがえさせられて、 ばたばた だった。", romaji: "Butai no honban chokuzen ni ishou o kigaesaserarete, batabata datta.", meaning: "Tepat sebelum penampilan di panggung dipaksa ganti kostum, jadi kalang kabut." },
              { jp: "子どもの頃、出かける直前に親に何度も着替えさせられた。", kana: "こども の ころ、 でかける ちょくぜん に おや に なんど も きがえさせられた。", romaji: "Kodomo no koro, dekakeru chokuzen ni oya ni nando mo kigaesaserareta.", meaning: "Waktu kecil, berkali-kali dipaksa ganti baju oleh orang tua tepat sebelum keluar." },
              { jp: "撮影現場で何度も着替えさせられて、体力を消耗した。", kana: "さつえい げんば で なんど も きがえさせられて、 たいりょく を しょうもう した。", romaji: "Satsuei genba de nando mo kigaesaserarete, tairyoku o shoumou shita.", meaning: "Di lokasi syuting berkali-kali disuruh ganti baju, menguras tenaga." },
              { jp: "入院中に病院のルールで毎朝病衣に着替えさせられるのが嫌だった。", kana: "にゅういんちゅう に びょういん の るーる で まいあさ びょうい に きがえさせられる の が いやだった。", romaji: "Nyuuin-chuu ni byouin no ruuru de maiasa byoui ni kigaesaserareru no ga iya datta.", meaning: "Selama dirawat inap, setiap pagi dipaksa ganti baju pasien sesuai aturan rumah sakit, tidak suka." },
              { jp: "ドッキリ企画で急に着替えさせられて、状況が把握できなかった。", kana: "どっきり きかく で きゅうに きがえさせられて、 じょうきょう が はあく できなかった。", romaji: "Dokkiri kikaku de kyuuni kigaesaserarete, joukyou ga haaku dekinakatta.", meaning: "Di acara prank tiba-tiba dipaksa ganti baju, tidak bisa memahami situasi." },
              { jp: "試着室で次々と服を着替えさせられて、正直疲れた。", kana: "しちゃくしつ で つぎつぎ と ふく を きがえさせられて、 しょうじき つかれた。", romaji: "Shichakushitsu de tsugitsugi to fuku o kigaesaserarete, shoujiki tsukareta.", meaning: "Di ruang pas disuruh ganti baju terus-terusan, jujurnya lelah." },
              { jp: "新しい制服を支給されて、その場で着替えさせられた。", kana: "あたらしい せいふく を しきゅうされて、 その ば で きがえさせられた。", romaji: "Atarashii seifuku o shikyuu sarete, sono ba de kigaesaserareta.", meaning: "Seragam baru diberikan dan langsung disuruh ganti pakaian di tempat itu." },
              { jp: "舞台俳優は公演中に何度も着替えさせられることがある。", kana: "ぶたい はいゆう は こうえん ちゅう に なんど も きがえさせられる こと が ある。", romaji: "Butai haiyuu wa kouen-chuu ni nando mo kigaesaserareru koto ga aru.", meaning: "Aktor panggung kadang harus ganti kostum berkali-kali selama pertunjukan." },
              { jp: "急に取引先との会食が決まって、スーツに着替えさせられた。", kana: "きゅうに とりひきさき と の かいしょく が きまって、 すーつ に きがえさせられた。", romaji: "Kyuuni torihikisaki to no kaishoku ga kimatte, suutsu ni kigaesaserareta.", meaning: "Tiba-tiba ada makan malam dengan mitra kerja, terpaksa disuruh ganti ke setelan jas." },
              { jp: "子どもに泥だらけにされて、帰宅後すぐ着替えさせられた。", kana: "こども に どろだらけ に されて、 きたく ご すぐ きがえさせられた。", romaji: "Kodomo ni dorodarake ni sarete, kitaku go sugu kigaesaserareta.", meaning: "Dikotori lumpur oleh anak, begitu sampai rumah langsung disuruh ganti baju." }
            ]
          }]
        },
        {
          name: "Irregular",
          examples: [{
            base: "残業する", transformed: "残業させられる", kana: "ざんぎょうする → ざんぎょうさせられる", romaji: "zangyou suru → zangyou saserareru", meaning: "lembur → dipaksa lembur",
            sentences: [
              { jp: "締め切り前になると、毎回深夜まで残業させられる。", kana: "しめきり まえ に なると、 まいかい しんや まで ざんぎょう させられる。", romaji: "Shimekiri mae ni naru to, maikai shinya made zangyou saserareru.", meaning: "Setiap kali mendekati deadline, selalu dipaksa lembur sampai tengah malam." },
              { jp: "人手不足で自分だけ毎日残業させられて、体が限界だ。", kana: "ひとで ぶそく で じぶん だけ まいにち ざんぎょう させられて、 からだ が げんかい だ。", romaji: "Hitode busoku de jibun dake mainichi zangyou saserarete, karada ga genkai da.", meaning: "Karena kurang tenaga kerja, hanya diri sendiri yang dipaksa lembur tiap hari, badan sudah di batas." },
              { jp: "急な仕様変更で週末も残業させられて、予定が全部崩れた。", kana: "きゅうな しよう へんこう で しゅうまつ も ざんぎょう させられて、 よてい が ぜんぶ くずれた。", romaji: "Kyuuna shiyou henkou de shuumatsu mo zangyou saserarete, yotei ga zenbu kuzureta.", meaning: "Karena perubahan spesifikasi mendadak, dipaksa lembur di akhir pekan juga, semua rencana berantakan." },
              { jp: "上司の仕事が遅いせいで、部下全員が毎晩残業させられている。", kana: "じょうし の しごと が おそい せいで、 ぶか ぜんいん が まいばん ざんぎょう させられている。", romaji: "Joushi no shigoto ga osoi sei de, buka zen'in ga maiban zangyou saserarete iru.", meaning: "Gara-gara kerja atasan lambat, semua bawahan dipaksa lembur setiap malam." },
              { jp: "引き継ぎ期間中は前任者のミスの後始末で散々残業させられた。", kana: "ひきつぎ きかん ちゅう は ぜんにんしゃ の みす の あとしまつ で さんざん ざんぎょう させられた。", romaji: "Hikitsugi kikan chuu wa zenninsha no misu no atoshimatsu de sanzan zangyou saserareta.", meaning: "Selama masa serah terima, dipaksa lembur habis-habisan untuk membereskan kesalahan pendahulu." },
              { jp: "残業させられる会社だと分かっていたら、最初から応募しなかった。", kana: "ざんぎょう させられる かいしゃ だと わかっていたら、 さいしょ から おうぼ しなかった。", romaji: "Zangyou saserareru kaisha da to wakatte itara, saisho kara oubo shinakatta.", meaning: "Kalau tahu perusahaan ini suka paksa lembur, dari awal tidak akan melamar." },
              { jp: "繁忙期は断れない雰囲気で毎週残業させられるのが辛い。", kana: "はんぼうき は ことわれない ふんいき で まいしゅう ざんぎょう させられる の が つらい。", romaji: "Hanbou-ki wa kotowarenai fun'iki de maishuu zangyou saserareru no ga tsurai.", meaning: "Di musim sibuk, suasana tidak memungkinkan untuk menolak sehingga terpaksa lembur tiap minggu, itu menyiksa." },
              { jp: "会社の飲み会の幹事を押しつけられた上に、準備で残業させられた。", kana: "かいしゃ の のみかい の かんじ を おしつけられた うえに、 じゅんび で ざんぎょう させられた。", romaji: "Kaisha no nomikai no kanji o oshitsukerareta ue ni, junbi de zangyou saserareta.", meaning: "Sudah dipaksa jadi panitia pesta kantor, di atas itu masih dipaksa lembur untuk persiapannya." },
              { jp: "ノー残業デーのはずなのに、今日も結局残業させられた。", kana: "のー ざんぎょう でー の はず なのに、 きょう も けっきょく ざんぎょう させられた。", romaji: "Noo zangyou dee no hazu na noni, kyou mo kekkyoku zangyou saserareta.", meaning: "Harusnya hari bebas lembur, tapi hari ini pun ujung-ujungnya dipaksa lembur juga." },
              { jp: "転職を決意したのは、毎月100時間以上残業させられたのが限界だったから。", kana: "てんしょく を けつい した の は、 まいつき ひゃくじかん いじょう ざんぎょう させられた の が げんかい だった から。", romaji: "Tenshoku o ketsui shita no wa, maitsuki hyaku-jikan ijou zangyou saserareta no ga genkai datta kara.", meaning: "Alasan memutuskan pindah kerja adalah karena sudah tidak tahan dipaksa lembur lebih dari 100 jam tiap bulan." }
            ]
          }]
        }
      ]
    },
    {
      id: "vf-66",
      level: "N4",
      order: 66,
      title: "~よう/おう • Bentuk Kehendak / Volitional (Ayo/Mau)",
      summary: "Menyatakan ajakan, niat diri sendiri, atau tekad. Godan: ubah vokal akhir ~u menjadi ~ou. Ichidan: hapus る, tambahkan よう. Irregular: する → しよう, 来る → 来よう(koyou).",
      formulas: [
        { group: "Godan", rule: "Ubah vokal akhir ~u menjadi ~ou. Contoh: 走る(hashiru) → 走ろう(hashirou), 飲む → 飲もう, 書く → 書こう." },
        { group: "Ichidan", rule: "Hapus る di akhir, tambahkan よう. Contoh: 調べる(shiraberu) → 調べよう(shirabeyou), 起きる → 起きよう." },
        { group: "Irregular", rule: "する → しよう. 来る(kuru) → 来よう(koyou)." }
      ],
      groups: [
        {
          name: "Godan",
          examples: [{
            base: "走る", transformed: "走ろう", kana: "はしる → はしろう", romaji: "hashiru → hashirou", meaning: "berlari → ayo berlari / mau berlari",
            sentences: [
              { jp: "来年のマラソン大会に向けて、毎朝走ろうと決めた。", kana: "らいねん の まらそん たいかい に むけて、 まいあさ はしろう と きめた。", romaji: "Rainen no marason taikai ni mukete, maiasa hashirou to kimeta.", meaning: "Demi lomba maraton tahun depan, memutuskan untuk berlari setiap pagi." },
              { jp: "終電を逃しそうだ、急いで駅まで走ろう！", kana: "しゅうでん を のがしそう だ、 いそいで えき まで はしろう！", romaji: "Shuuden o nogashi sou da, isoide eki made hashirou!", meaning: "Sepertinya ketinggalan kereta terakhir, ayo lari cepat ke stasiun!" },
              { jp: "ダイエットのためだけじゃなく、気分転換にも走ろうと思っている。", kana: "だいえっと の ため だけ じゃなく、 きぶんてんかん に も はしろう と おもっている。", romaji: "Daietto no tame dake ja naku, kibun tenkan ni mo hashirou to omotte iru.", meaning: "Bukan cuma untuk diet, tapi mau mulai berlari juga untuk penyegaran pikiran." },
              { jp: "雨が上がったら、久しぶりに公園を走ろう。", kana: "あめ が あがったら、 ひさしぶり に こうえん を はしろう。", romaji: "Ame ga agattara, hisashiburi ni kouen o hashirou.", meaning: "Kalau hujan sudah reda, mau berlari di taman setelah sekian lama tidak." },
              { jp: "体力テストで1位を取るために、今日から本気で走ろう。", kana: "たいりょくてすと で いちい を とる ため に、 きょう から ほんき で はしろう。", romaji: "Tairyoku tesuto de ichi-i o toru tame ni, kyou kara honki de hashirou.", meaning: "Untuk juara di tes kebugaran, mulai hari ini mau berlari dengan serius." },
              { jp: "二人で走ろうと誘ったら、意外と快諾してくれた。", kana: "ふたり で はしろう と さそったら、 いがい と かいだく して くれた。", romaji: "Futari de hashirou to sasottara, igai to kaidaku shite kureta.", meaning: "Mengajak berlari berdua, ternyata dengan senang hati mau." },
              { jp: "健康診断の結果が悪くて、さすがに走ろうという気になった。", kana: "けんこうしんだん の けっか が わるくて、 さすが に はしろう という き に なった。", romaji: "Kenkou shindan no kekka ga warukute, sasuga ni hashirou to iu ki ni natta.", meaning: "Hasil cek kesehatan buruk, akhirnya baru termotivasi mau mulai berlari." },
              { jp: "仕事でやらかした日は、頭を空っぽにして夜に走ろうとしている。", kana: "しごと で やらかした ひ は、 あたま を からっぽ に して よる に はしろう と している。", romaji: "Shigoto de yarakashita hi wa, atama o karappo ni shite yoru ni hashirou to shite iru.", meaning: "Di hari bikin kesalahan kerja, berusaha berlari malam untuk mengosongkan pikiran." },
              { jp: "友達に誘われたからといって、準備なしでフルマラソンを走ろうとするのは無謀だ。", kana: "ともだち に さそわれた から と いって、 じゅんび なし で ふるまらそん を はしろう と する の は むぼう だ。", romaji: "Tomodachi ni sasowareta kara to itte, junbi nashi de furu marason o hashirou to suru no wa mubou da.", meaning: "Hanya karena diajak teman, mau ikut maraton penuh tanpa persiapan itu nekat namanya." },
              { jp: "走ろうと靴紐を結んだところで雨が降り出した。", kana: "はしろう と くつひも を むすんだ ところ で あめ が ふりだした。", romaji: "Hashirou to kutsuhimo o musunda tokoro de ame ga furidashita.", meaning: "Baru saja ikat tali sepatu mau berlari, tiba-tiba hujan turun." }
            ]
          }]
        },
        {
          name: "Ichidan",
          examples: [{
            base: "調べる", transformed: "調べよう", kana: "しらべる → しらべよう", romaji: "shiraberu → shirabeyou", meaning: "mencari tahu → ayo cari tahu / mau cari tahu",
            sentences: [
              { jp: "気になることがあったら、すぐ自分で調べようとするタイプだ。", kana: "きになる こと が あったら、 すぐ じぶん で しらべよう と する たいぷ だ。", romaji: "Ki ni naru koto ga attara, sugu jibun de shirabeyou to suru taipu da.", meaning: "Tipe orang yang kalau ada yang penasaran, langsung mau cari tahu sendiri." },
              { jp: "旅行前にちゃんとその土地の文化を調べようと思っている。", kana: "りょこう まえ に ちゃんと その とち の ぶんか を しらべよう と おもっている。", romaji: "Ryokou mae ni chanto sono tochi no bunka o shirabeyou to omotte iru.", meaning: "Sebelum traveling, berniat mencari tahu dengan benar soal budaya daerah tersebut." },
              { jp: "どうせやるなら、競合他社のことも徹底的に調べよう。", kana: "どうせ やる なら、 きょうごう たしゃ の こと も てっていてき に しらべよう。", romaji: "Douse yaru nara, kyougou tasha no koto mo tetteiteki ni shirabeyou.", meaning: "Kalau memang mau dikerjakan, mending cari tahu juga soal kompetitor secara menyeluruh." },
              { jp: "噂で判断するのをやめて、自分でちゃんと調べようと決めた。", kana: "うわさ で はんだん する の を やめて、 じぶん で ちゃんと しらべよう と きめた。", romaji: "Uwasa de handan suru no o yamete, jibun de chanto shirabeyou to kimeta.", meaning: "Berhenti menilai dari gosip, memutuskan untuk cari tahu sendiri dengan benar." },
              { jp: "副作用が心配だから、薬を飲む前にしっかり調べよう。", kana: "ふくさよう が しんぱい だから、 くすり を のむ まえ に しっかり しらべよう。", romaji: "Fukusayou ga shinpai dakara, kusuri o nomu mae ni shikkari shirabeyou.", meaning: "Khawatir efek samping, mau cari tahu dengan teliti sebelum minum obat." },
              { jp: "このエラー、原因を調べようとしたらまた別のバグが出てきた。", kana: "この えらー、 げんいん を しらべよう と したら また べつ の ばぐ が でてきた。", romaji: "Kono eraa, gen'in o shirabeyou to shitara mata betsu no bagu ga detekita.", meaning: "Waktu mau cari tahu penyebab error ini, muncul lagi bug yang lain." },
              { jp: "転職を考えているから、業界の平均給与を調べよう。", kana: "てんしょく を かんがえている から、 ぎょうかい の へいきん きゅうよ を しらべよう。", romaji: "Tenshoku o kangaete iru kara, gyoukai no heikin kyuuyo o shirabeyou.", meaning: "Lagi pikirin pindah kerja, mau cari tahu rata-rata gaji di industri itu." },
              { jp: "信じる前に一度ちゃんとファクトチェックして調べよう。", kana: "しんじる まえ に いちど ちゃんと ふぁくとちぇっく して しらべよう。", romaji: "Shinjiru mae ni ichido chanto fakutochekku shite shirabeyou.", meaning: "Sebelum percaya, mau cek faktanya dulu dengan benar sekali." },
              { jp: "新しいスマホを買う前に、レビューを調べようとしたらキリがなかった。", kana: "あたらしい すまほ を かう まえ に、 れびゅー を しらべよう と したら きり が なかった。", romaji: "Atarashii sumaho o kau mae ni, rebyuu o shirabeyou to shitara kiri ga nakatta.", meaning: "Sebelum beli HP baru, mau cari reviewnya tapi tidak ada habis-habisnya." },
              { jp: "社会問題に関心を持つなら、一次情報を自分で調べよう。", kana: "しゃかい もんだい に かんしん を もつ なら、 いちじ じょうほう を じぶん で しらべよう。", romaji: "Shakai mondai ni kanshin o motsu nara, ichiji jouhou o jibun de shirabeyou.", meaning: "Kalau tertarik dengan isu sosial, cari tahu sendiri dari sumber primer." }
            ]
          }]
        },
        {
          name: "Irregular",
          examples: [{
            base: "旅行する", transformed: "旅行しよう", kana: "りょこうする → りょこうしよう", romaji: "ryokou suru → ryokou shiyou", meaning: "traveling → ayo traveling / mau traveling",
            sentences: [
              { jp: "給料が入ったら、ずっと行きたかった京都に旅行しよう。", kana: "きゅうりょう が はいったら、 ずっと いきたかった きょうと に りょこう しよう。", romaji: "Kyuuryou ga haittara, zutto ikitakatta kyouto ni ryokou shiyou.", meaning: "Kalau gaji sudah masuk, mau traveling ke Kyoto yang sudah lama ingin dikunjungi." },
              { jp: "仕事を辞めたら、しばらく一人で旅行しようと決めていた。", kana: "しごと を やめたら、 しばらく ひとり で りょこう しよう と きめていた。", romaji: "Shigoto o yametara, shibaraku hitori de ryokou shiyou to kimete ita.", meaning: "Sudah memutuskan bahwa kalau berhenti kerja, mau traveling sendiri untuk sementara." },
              { jp: "今年の夏は節約して、冬に思い切って海外旅行しようと計画している。", kana: "ことし の なつ は せつやく して、 ふゆ に おもいきって かいがい りょこう しよう と けいかく している。", romaji: "Kotoshi no natsu wa setsuyaku shite, fuyu ni omoikitte kaigai ryokou shiyou to keikaku shite iru.", meaning: "Musim panas tahun ini hemat-hemat, rencananya musim dingin mau nekat traveling ke luar negeri." },
              { jp: "定年退職したら、妻と二人でゆっくり旅行しようねと約束した。", kana: "ていねん たいしょく したら、 つま と ふたり で ゆっくり りょこう しよう ね と やくそく した。", romaji: "Teinen taishoku shitara, tsuma to futari de yukkuri ryokou shiyou ne to yakusoku shita.", meaning: "Berjanji dengan istri, kalau sudah pensiun mau traveling berdua dengan santai." },
              { jp: "せっかくの連休なんだから、どこかに旅行しようよ！", kana: "せっかく の れんきゅう なん だから、 どこか に りょこう しよう よ！", romaji: "Sekkaku no renkyuu nan dakara, doko ka ni ryokou shiyou yo!", meaning: "Sayang kalau libur panjang cuma di rumah, ayo traveling ke suatu tempat!" },
              { jp: "友達と旅行しようとしたら、全員の予定が合わなくて断念した。", kana: "ともだち と りょこう しよう と したら、 ぜんいん の よてい が あわなくて だんねん した。", romaji: "Tomodachi to ryokou shiyou to shitara, zen'in no yotei ga awanakute dannen shita.", meaning: "Mau traveling bareng teman-teman, tapi jadwal semua orang tidak cocok dan terpaksa dibatalkan." },
              { jp: "お金を貯めて、いつかアイスランドに旅行しようと夢見ている。", kana: "おかね を ためて、 いつか あいすらんど に りょこう しよう と ゆめみている。", romaji: "Okane o tamete, itsuka Aisurando ni ryokou shiyou to yumemite iru.", meaning: "Menabung dan bermimpi untuk suatu saat traveling ke Iceland." },
              { jp: "体が元気なうちに、行けるところはなるべく旅行しようと思っている。", kana: "からだ が げんき な うち に、 いける ところ は なるべく りょこう しよう と おもっている。", romaji: "Karada ga genki na uchi ni, ikeru tokoro wa narubeku ryokou shiyou to omotte iru.", meaning: "Selagi badan masih sehat, berniat traveling ke sebanyak mungkin tempat yang bisa dikunjungi." },
              { jp: "彼女の誕生日サプライズに、二人で温泉旅行しようと計画している。", kana: "かのじょ の たんじょうび さぷらいず に、 ふたり で おんせん りょこう しよう と けいかく している。", romaji: "Kanojo no tanjoubi sapuraizu ni, futari de onsen ryokou shiyou to keikaku shite iru.", meaning: "Untuk kejutan ulang tahun pacar, sedang merencanakan pergi ke pemandian air panas berdua." },
              { jp: "リモートワークを活かして、働きながら旅行しようとワーケーションを試みた。", kana: "りもーとわーく を いかして、 はたらきながら りょこう しよう と わーけーしょん を こころみた。", romaji: "Rimooto waaku o ikashite, hatarakinagara ryokou shiyou to waakeeshon o kokoromi ta.", meaning: "Memanfaatkan remote work, mencoba workation — traveling sambil tetap bekerja." }
            ]
          }]
        }
      ]
    }
  ];

  // =========================================================================
  // WADAH KOSONG SEMENTARA UNTUK FORM 1 HINGGA 62
  // Biar web lu tetep bisa jalan dan gak error ngebaca menu lainnya.
  // =========================================================================
  const remainingDefs = [
	["1", "~る", "Bentuk Kamus (Present/Future Plain)", "N5"],
    ["2", "~ない", "Bentuk Negatif Plain", "N5"],
    ["3", "~ます", "Bentuk Sopan Present/Future", "N5"],
    ["4", "~ません", "Bentuk Sopan Negatif", "N5"],
    ["5", "~た", "Bentuk Lampau Plain", "N5"],
    ["6", "~なかった", "Bentuk Lampau Negatif Plain", "N5"],
    ["7", "~ました", "Bentuk Lampau Sopan", "N5"],
    ["8", "~ませんでした", "Bentuk Lampau Negatif Sopan", "N5"],
    ["9", "~るでしょう", "Dugaan Sopan (Mungkin…)", "N4"],
    ["10", "~ないでしょう", "Dugaan Negatif Sopan", "N4"],
    ["11", "~るよ", "Present Casual (Penekanan)", "N5"],
    ["12", "~ないよ", "Negatif Casual (Penekanan)", "N5"],
    ["13", "~れば", "Bentuk Syarat (Kalau…)", "N4"],
    ["14", "~なければ", "Bentuk Syarat Negatif", "N4"],
    ["15", "~て", "Bentuk Te-form (Sambung / Sedang / Permintaan)", "N5"],
    ["16", "~ないで", "Bentuk Negatif Te", "N5"],
    ["17", "~てください", "Permintaan Sopan (Tolong…)", "N5"],
    ["18", "~ないでください", "Larangan Sopan (Tolong Jangan…)", "N5"],
    ["19", "~ろ", "Perintah Kasar (Imperatif)", "N5"],
    ["20", "~るな", "Larangan Kasar", "N5"],
    ["21", "~ろよ", "Perintah Kasar Santai", "N5"],
    ["22", "~るなよ", "Larangan Kasar Santai", "N5"],
    ["23", "~てしまう", "Selesai Total / Menyesal (Shimau)", "N4"],
    ["24", "~てしまいます", "Selesai Total Sopan", "N4"],
    ["25", "~てしまった", "Lampau Selesai/Menyesal", "N4"],
    ["26", "~てしまいました", "Lampau Selesai Sopan", "N4"],
    ["27", "~ちゃう", "Versi Santai Shimau", "N4"],
    ["28", "~ちゃいます", "Versi Santai Sopan Shimau", "N4"],
    ["29", "~ちゃった", "Lampau Santai Shimau", "N4"],
    ["30", "~ちゃいました", "Lampau Santai Sopan Shimau", "N4"],
    ["31", "~てもいい", "Boleh / Diizinkan", "N4"],
    ["32", "~なくてもいい", "Tidak Perlu / Boleh Tidak", "N4"],
    ["33", "~ないといけない", "Harus / Wajib", "N4"],
    ["34", "~てはいけない", "Tidak Boleh", "N4"],
    ["35", "~たい", "Keinginan (Ingin…)", "N4"],
    ["36", "~たくない", "Tidak Ingin", "N4"],
    ["37", "~たいです", "Keinginan Sopan", "N4"],
    ["38", "~たくないです", "Tidak Ingin Sopan", "N4"],
    ["39", "~たかった", "Keinginan Lampau", "N4"],
    ["40", "~たくなかった", "Tidak Ingin Lampau", "N4"],
    ["41", "~たかったです", "Keinginan Lampau Sopan", "N4"],
    ["42", "~たくなかったです", "Tidak Ingin Lampau Sopan", "N4"],
    ["43", "~てほしい", "Harap Orang Lain Melakukan", "N4"],
    ["44", "~てほしくない", "Tidak Harap Orang Lain Melakukan", "N4"],
    ["45", "~てほしかった", "Harap Orang Lain (Dulu)", "N4"],
    ["46", "~てほしくなかった", "Tidak Harap Orang Lain (Dulu)", "N4"],
    ["47", "~るべきだ", "Seharusnya / Sebaiknya", "N3"],
    ["48", "~るべきです", "Seharusnya (Sopan)", "N3"],
    ["49", "~るべきでしょう", "Mungkin Sebaiknya", "N3"],
    ["50", "~たほうがいい", "Lebih Baik Melakukan", "N4"],
    ["51", "~ないほうがいい", "Lebih Baik Tidak Melakukan", "N4"],
    ["52", "~ましょう", "Ajakan Sopan (Mari Kita…)", "N4"],
    ["53", "~ようとする", "Berniat / Mencoba Melakukan", "N3"],
    ["54", "~やすい", "Mudah Dilakukan", "N4"],
    ["55", "~にくい", "Sulit Dilakukan", "N4"],
    ["56", "~させる", "Menyuruh (Causative)", "N4"],
    ["57", "~させます", "Menyuruh (Sopan)", "N4"],
    ["58", "~させた", "Sudah Menyuruh", "N4"],
    ["59", "~させました", "Sudah Menyuruh (Sopan)", "N4"],
    ["60", "~すぎる", "Terlalu Banyak", "N4"],
    ["61", "~すぎた", "Sudah Terlalu Banyak", "N4"],
    ["62", "~てもらう", "Minta Orang Lain Melakukan / Dibantu", "N4"],
    ["63", "~える/られる", "Bentuk Potensial (Bisa/Dapat)", "N4"],
    ["64", "~られる", "Bentuk Pasif (Di-/Ter-)", "N4"],
    ["65", "~させられる", "Bentuk Kausatif-Pasif (Dipaksa/Terpaksa)", "N4"],
    ["66", "~よう/おう", "Bentuk Kehendak/Volitional (Ayo/Mau)", "N4"]
  ];

  const manualIds = new Set(manualForms.map((form) => form.id));

  const generatedRemaining = remainingDefs
  .filter((def) => !manualIds.has(`vf-${String(def[0]).padStart(2, "0")}`))
  .map(def => ({
    id: `vf-${String(def[0]).padStart(2, "0")}`,
    level: def[3],
    order: Number(def[0]),
    title: `${def[1]} • ${def[2]}`,
    summary: `${def[2]} (${def[3]}).`,
    formulas: [
      { group: "Godan", rule: "Data sedang dalam proses penyusunan..." },
      { group: "Ichidan", rule: "Data sedang dalam proses penyusunan..." },
      { group: "Irregular", rule: "Data sedang dalam proses penyusunan..." }
    ],
    groups: []
  }));

  window.verbFormsData = [...manualForms, ...generatedRemaining].sort((a, b) => a.order - b.order);
  window.verbFormsLevels = LEVEL_ORDER;
})();
