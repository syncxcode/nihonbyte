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
    ["62", "~てもらう", "Minta Orang Lain Melakukan / Dibantu", "N4"]
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

