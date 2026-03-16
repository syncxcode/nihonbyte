// Grammar Data — NihonByte
// Modul terpisah dari data.js (vocab) dan app.js (logic utama).
// Tiap pattern punya: id, level, title, summary, groups[].
// Tiap group punya: name, description, sentences[] (5 contoh bervariasi).

window.grammarLevels = ["N5", "N4", "N3", "N2", "N1"];

window.grammarData = [

  // ── GR-N5-01: これ / それ / あれ / どれ ──
  {id:"GR-N5-01",level:"N5",title:"これ / それ / あれ / どれ",summary:"Kata tunjuk untuk benda. これ (ini, dekat pembicara), それ (itu, dekat pendengar), あれ (itu di sana, jauh dari keduanya), どれ (yang mana, kata tanya).",groups:[
    {name:"これ",description:"Menunjuk benda yang dekat dengan pembicara (ini).",sentences:[
      {jp:"これは本です。",kana:"これはほんです。",romaji:"Kore wa hon desu.",meaning:"Ini adalah buku."},
      {jp:"これはペンです。",kana:"これはぺんです。",romaji:"Kore wa pen desu.",meaning:"Ini adalah pena."},
      {jp:"これは私の鍵です。",kana:"これはわたしのかぎです。",romaji:"Kore wa watashi no kagi desu.",meaning:"Ini adalah kunci saya."},
      {jp:"これはおいしいです。",kana:"これはおいしいです。",romaji:"Kore wa oishii desu.",meaning:"Ini enak."},
      {jp:"これは何ですか。",kana:"これはなんですか。",romaji:"Kore wa nan desu ka.",meaning:"Ini apa?"},
      {jp:"これは日本語の本です。",kana:"これはにほんごのほんです。",romaji:"Kore wa nihongo no hon desu.",meaning:"Ini adalah buku bahasa Jepang."},
      {jp:"これは新しいです。",kana:"これはあたらしいです。",romaji:"Kore wa atarashii desu.",meaning:"Ini baru."},
      {jp:"これは友達の傘です。",kana:"これはともだちのかさです。",romaji:"Kore wa tomodachi no kasa desu.",meaning:"Ini payung teman saya."},
      {jp:"これは高いです。",kana:"これはたかいです。",romaji:"Kore wa takai desu.",meaning:"Ini mahal."},
      {jp:"これは私のかばんです。",kana:"これはわたしのかばんです。",romaji:"Kore wa watashi no kaban desu.",meaning:"Ini adalah tas saya."}
    ]},
    {name:"それ",description:"Menunjuk benda yang dekat dengan pendengar (itu).",sentences:[
      {jp:"それは辞書です。",kana:"それはじしょです。",romaji:"Sore wa jisho desu.",meaning:"Itu adalah kamus."},
      {jp:"それは誰のですか。",kana:"それはだれのですか。",romaji:"Sore wa dare no desu ka.",meaning:"Itu punya siapa?"},
      {jp:"それをください。",kana:"それをください。",romaji:"Sore o kudasai.",meaning:"Tolong berikan itu."},
      {jp:"それは面白いです。",kana:"それはおもしろいです。",romaji:"Sore wa omoshiroi desu.",meaning:"Itu menarik."},
      {jp:"それは田中さんのです。",kana:"それはたなかさんのです。",romaji:"Sore wa Tanaka-san no desu.",meaning:"Itu milik Tanaka."},
      {jp:"それはいくらですか。",kana:"それはいくらですか。",romaji:"Sore wa ikura desu ka.",meaning:"Itu berapa harganya?"},
      {jp:"それは古いです。",kana:"それはふるいです。",romaji:"Sore wa furui desu.",meaning:"Itu sudah lama."},
      {jp:"それは何の雑誌ですか。",kana:"それはなんのざっしですか。",romaji:"Sore wa nan no zasshi desu ka.",meaning:"Itu majalah apa?"},
      {jp:"それは大きいです。",kana:"それはおおきいです。",romaji:"Sore wa ookii desu.",meaning:"Itu besar."},
      {jp:"それは私のじゃありません。",kana:"それはわたしのじゃありません。",romaji:"Sore wa watashi no ja arimasen.",meaning:"Itu bukan milik saya."}
    ]},
    {name:"あれ",description:"Menunjuk benda yang jauh dari pembicara dan pendengar (itu di sana).",sentences:[
      {jp:"あれは学校です。",kana:"あれはがっこうです。",romaji:"Are wa gakkou desu.",meaning:"Itu (di sana) adalah sekolah."},
      {jp:"あれは何ですか。",kana:"あれはなんですか。",romaji:"Are wa nan desu ka.",meaning:"Itu (di sana) apa?"},
      {jp:"あれは山です。",kana:"あれはやまです。",romaji:"Are wa yama desu.",meaning:"Itu (di sana) adalah gunung."},
      {jp:"あれは銀行です。",kana:"あれはぎんこうです。",romaji:"Are wa ginkou desu.",meaning:"Itu (di sana) adalah bank."},
      {jp:"あれは大きい建物です。",kana:"あれはおおきいたてものです。",romaji:"Are wa ookii tatemono desu.",meaning:"Itu (di sana) adalah gedung besar."},
      {jp:"あれは病院です。",kana:"あれはびょういんです。",romaji:"Are wa byouin desu.",meaning:"Itu (di sana) adalah rumah sakit."},
      {jp:"あれは駅です。",kana:"あれはえきです。",romaji:"Are wa eki desu.",meaning:"Itu (di sana) adalah stasiun."},
      {jp:"あれは田中さんの車です。",kana:"あれはたなかさんのくるまです。",romaji:"Are wa Tanaka-san no kuruma desu.",meaning:"Itu (di sana) adalah mobil Tanaka."},
      {jp:"あれは図書館です。",kana:"あれはとしょかんです。",romaji:"Are wa toshokan desu.",meaning:"Itu (di sana) adalah perpustakaan."},
      {jp:"あれは新しいホテルです。",kana:"あれはあたらしいほてるです。",romaji:"Are wa atarashii hoteru desu.",meaning:"Itu (di sana) adalah hotel baru."}
    ]},
    {name:"どれ",description:"Kata tanya untuk menanyakan pilihan dari tiga benda atau lebih (yang mana).",sentences:[
      {jp:"どれがあなたのですか。",kana:"どれがあなたのですか。",romaji:"Dore ga anata no desu ka.",meaning:"Yang mana milikmu?"},
      {jp:"どれがいいですか。",kana:"どれがいいですか。",romaji:"Dore ga ii desu ka.",meaning:"Yang mana yang bagus?"},
      {jp:"どれが好きですか。",kana:"どれがすきですか。",romaji:"Dore ga suki desu ka.",meaning:"Yang mana yang kamu suka?"},
      {jp:"どれが安いですか。",kana:"どれがやすいですか。",romaji:"Dore ga yasui desu ka.",meaning:"Yang mana yang murah?"},
      {jp:"どれが田中さんのかばんですか。",kana:"どれがたなかさんのかばんですか。",romaji:"Dore ga Tanaka-san no kaban desu ka.",meaning:"Yang mana tas Tanaka?"},
      {jp:"どれを買いますか。",kana:"どれをかいますか。",romaji:"Dore o kaimasu ka.",meaning:"Yang mana yang kamu beli?"},
      {jp:"どれが一番おいしいですか。",kana:"どれがいちばんおいしいですか。",romaji:"Dore ga ichiban oishii desu ka.",meaning:"Yang mana yang paling enak?"},
      {jp:"どれが正しいですか。",kana:"どれがただしいですか。",romaji:"Dore ga tadashii desu ka.",meaning:"Yang mana yang benar?"},
      {jp:"どれにしますか。",kana:"どれにしますか。",romaji:"Dore ni shimasu ka.",meaning:"Mau pilih yang mana?"},
      {jp:"どれが新しいですか。",kana:"どれがあたらしいですか。",romaji:"Dore ga atarashii desu ka.",meaning:"Yang mana yang baru?"}
    ]}
  ]},


  // ── GR-N5-02: この / その / あの ──
  {id:"GR-N5-02",level:"N5",title:"この / その / あの",summary:"Kata tunjuk yang diikuti kata benda. この (ini), その (itu), あの (itu di sana). Selalu dipakai sebelum kata benda.",groups:[
    {name:"この",description:"Benda dekat pembicara + kata benda (ini ~).",sentences:[
      {jp:"このりんごは甘いです。",kana:"このりんごはあまいです。",romaji:"Kono ringo wa amai desu.",meaning:"Apel ini manis."},
      {jp:"この映画は三時間もあります。",kana:"このえいがはさんじかんもあります。",romaji:"Kono eiga wa sanjikan mo arimasu.",meaning:"Film ini sampai tiga jam."},
      {jp:"この近くにコンビニはありますか。",kana:"このちかくにこんびにはありますか。",romaji:"Kono chikaku ni konbini wa arimasu ka.",meaning:"Apakah ada minimarket dekat sini?"},
      {jp:"この本は図書館で借りました。",kana:"このほんはとしょかんでかりました。",romaji:"Kono hon wa toshokan de karimashita.",meaning:"Buku ini saya pinjam dari perpustakaan."},
      {jp:"この問題は難しすぎます。",kana:"このもんだいはむずかしすぎます。",romaji:"Kono mondai wa muzukashisugimasu.",meaning:"Soal ini terlalu sulit."}
    ]},
    {name:"その",description:"Benda dekat pendengar + kata benda (itu ~).",sentences:[
      {jp:"その帽子、似合いますね。",kana:"そのぼうし、にあいますね。",romaji:"Sono boushi, niaimasu ne.",meaning:"Topi itu cocok untukmu ya."},
      {jp:"その話は本当ですか。",kana:"そのはなしはほんとうですか。",romaji:"Sono hanashi wa hontou desu ka.",meaning:"Cerita itu benar?"},
      {jp:"その角を右に曲がってください。",kana:"そのかどをみぎにまがってください。",romaji:"Sono kado o migi ni magatte kudasai.",meaning:"Tolong belok kanan di tikungan itu."},
      {jp:"そのケーキ、一つもらってもいいですか。",kana:"そのけーき、ひとつもらってもいいですか。",romaji:"Sono keeki, hitotsu moratte mo ii desu ka.",meaning:"Boleh saya ambil satu kue itu?"},
      {jp:"その靴はどこで買いましたか。",kana:"そのくつはどこでかいましたか。",romaji:"Sono kutsu wa doko de kaimashita ka.",meaning:"Sepatu itu beli di mana?"}
    ]},
    {name:"あの",description:"Benda jauh dari keduanya + kata benda (itu ~ di sana).",sentences:[
      {jp:"あの山の向こうに海があります。",kana:"あのやまのむこうにうみがあります。",romaji:"Ano yama no mukou ni umi ga arimasu.",meaning:"Di balik gunung itu ada laut."},
      {jp:"あの人は誰ですか。",kana:"あのひとはだれですか。",romaji:"Ano hito wa dare desu ka.",meaning:"Siapa orang itu (di sana)?"},
      {jp:"あのレストランは予約が必要です。",kana:"あのれすとらんはよやくがひつようです。",romaji:"Ano resutoran wa yoyaku ga hitsuyou desu.",meaning:"Restoran itu perlu reservasi."},
      {jp:"あの白い建物が市役所です。",kana:"あのしろいたてものがしやくしょです。",romaji:"Ano shiroi tatemono ga shiyakusho desu.",meaning:"Gedung putih itu adalah balai kota."},
      {jp:"あの日のことは忘れません。",kana:"あのひのことはわすれません。",romaji:"Ano hi no koto wa wasuremasen.",meaning:"Saya tidak akan lupa hari itu."}
    ]}
  ]},

  // ── GR-N5-03 ~ GR-N5-33 ──
  {id:"GR-N5-03",level:"N5",title:"ここ / そこ / あそこ",summary:"Kata tunjuk untuk tempat. ここ (di sini), そこ (di situ), あそこ (di sana).",groups:[
    {name:"ここ",description:"Tempat dekat pembicara (di sini).",sentences:[
      {jp:"ここは静かでいい場所ですね。",kana:"ここはしずかでいいばしょですね。",romaji:"Koko wa shizuka de ii basho desu ne.",meaning:"Di sini tempat yang tenang dan bagus ya."},
      {jp:"ここで写真を撮ってもいいですか。",kana:"ここでしゃしんをとってもいいですか。",romaji:"Koko de shashin o totte mo ii desu ka.",meaning:"Boleh ambil foto di sini?"},
      {jp:"ここから富士山が見えます。",kana:"ここからふじさんがみえます。",romaji:"Koko kara Fujisan ga miemasu.",meaning:"Dari sini bisa lihat Gunung Fuji."},
      {jp:"ここに名前を書いてください。",kana:"ここになまえをかいてください。",romaji:"Koko ni namae o kaite kudasai.",meaning:"Tolong tulis nama di sini."},
      {jp:"ここはちょっとうるさいですね。",kana:"ここはちょっとうるさいですね。",romaji:"Koko wa chotto urusai desu ne.",meaning:"Di sini agak berisik ya."}
    ]},
    {name:"そこ",description:"Tempat dekat pendengar (di situ).",sentences:[
      {jp:"そこに座ってください。",kana:"そこにすわってください。",romaji:"Soko ni suwatte kudasai.",meaning:"Silakan duduk di situ."},
      {jp:"そこは危ないですよ。",kana:"そこはあぶないですよ。",romaji:"Soko wa abunai desu yo.",meaning:"Di situ berbahaya lho."},
      {jp:"鍵はそこのテーブルの上にあります。",kana:"かぎはそこのてーぶるのうえにあります。",romaji:"Kagi wa soko no teeburu no ue ni arimasu.",meaning:"Kuncinya ada di atas meja situ."},
      {jp:"そこで待っていてもらえますか。",kana:"そこでまっていてもらえますか。",romaji:"Soko de matte ite moraemasu ka.",meaning:"Bisa tolong tunggu di situ?"},
      {jp:"そこを右に曲がると駅があります。",kana:"そこをみぎにまがるとえきがあります。",romaji:"Soko o migi ni magaru to eki ga arimasu.",meaning:"Kalau belok kanan di situ, ada stasiun."}
    ]},
    {name:"あそこ",description:"Tempat jauh dari keduanya (di sana).",sentences:[
      {jp:"あそこに見えるのが東京タワーです。",kana:"あそこにみえるのがとうきょうたわーです。",romaji:"Asoko ni mieru no ga Toukyou Tawaa desu.",meaning:"Yang terlihat di sana itu Tokyo Tower."},
      {jp:"あそこのカフェでコーヒーを飲みませんか。",kana:"あそこのかふぇでこーひーをのみませんか。",romaji:"Asoko no kafe de koohii o nomimasen ka.",meaning:"Mau minum kopi di kafe sana?"},
      {jp:"あそこまで歩いて十分ぐらいです。",kana:"あそこまであるいてじゅっぷんぐらいです。",romaji:"Asoko made aruite juppun gurai desu.",meaning:"Sampai sana jalan kaki sekitar 10 menit."},
      {jp:"集合場所はあそこの公園です。",kana:"しゅうごうばしょはあそこのこうえんです。",romaji:"Shuugou basho wa asoko no kouen desu.",meaning:"Tempat kumpulnya di taman sana."},
      {jp:"あそこに並んでいる人は何を待っていますか。",kana:"あそこにならんでいるひとはなにをまっていますか。",romaji:"Asoko ni narande iru hito wa nani o matte imasu ka.",meaning:"Orang-orang yang mengantri di sana menunggu apa?"}
    ]}
  ]},

  {id:"GR-N5-04",level:"N5",title:"～です",summary:"Pola untuk menyatakan kalimat nominal positif secara sopan. Artinya 'adalah' atau 'merupakan'.",groups:[{name:"～です",description:"Dipakai setelah kata benda atau kata sifat -na untuk membuat kalimat sopan.",sentences:[
    {jp:"私はインドネシア人です。",kana:"わたしはいんどねしあじんです。",romaji:"Watashi wa Indoneshia-jin desu.",meaning:"Saya orang Indonesia."},
    {jp:"田中さんは会社員です。",kana:"たなかさんはかいしゃいんです。",romaji:"Tanaka-san wa kaishain desu.",meaning:"Tanaka adalah karyawan perusahaan."},
    {jp:"今日は日曜日です。",kana:"きょうはにちようびです。",romaji:"Kyou wa nichiyoubi desu.",meaning:"Hari ini hari Minggu."},
    {jp:"あの建物は有名な美術館です。",kana:"あのたてものはゆうめいなびじゅつかんです。",romaji:"Ano tatemono wa yuumei na bijutsukan desu.",meaning:"Gedung itu adalah museum terkenal."},
    {jp:"趣味はギターを弾くことです。",kana:"しゅみはぎたーをひくことです。",romaji:"Shumi wa gitaa o hiku koto desu.",meaning:"Hobi saya adalah bermain gitar."}
  ]}]},

  {id:"GR-N5-05",level:"N5",title:"～じゃありません",summary:"Pola untuk menyatakan kalimat nominal negatif secara sopan. Artinya 'bukan'.",groups:[{name:"～じゃありません",description:"Bentuk negatif sopan dari ～です.",sentences:[
    {jp:"私は学生じゃありません。もう社会人です。",kana:"わたしはがくせいじゃありません。もうしゃかいじんです。",romaji:"Watashi wa gakusei ja arimasen. Mou shakaijin desu.",meaning:"Saya bukan pelajar. Sudah pekerja."},
    {jp:"これは砂糖じゃありません、塩です。",kana:"これはさとうじゃありません、しおです。",romaji:"Kore wa satou ja arimasen, shio desu.",meaning:"Ini bukan gula, ini garam."},
    {jp:"あの方は先生じゃありません、医者です。",kana:"あのかたはせんせいじゃありません、いしゃです。",romaji:"Ano kata wa sensei ja arimasen, isha desu.",meaning:"Orang itu bukan guru, dia dokter."},
    {jp:"今日の会議は三時じゃありません。四時です。",kana:"きょうのかいぎはさんじじゃありません。よじです。",romaji:"Kyou no kaigi wa sanji ja arimasen. Yoji desu.",meaning:"Rapat hari ini bukan jam 3, tapi jam 4."},
    {jp:"ここは出口じゃありません。入口はあちらです。",kana:"ここはでぐちじゃありません。いりぐちはあちらです。",romaji:"Koko wa deguchi ja arimasen. Iriguchi wa achira desu.",meaning:"Di sini bukan pintu keluar. Pintu masuk di sebelah sana."}
  ]}]},

  {id:"GR-N5-06",level:"N5",title:"～ですか",summary:"Pola untuk membuat kalimat tanya secara sopan. Tambahkan か di akhir.",groups:[{name:"～ですか",description:"Partikel か di akhir kalimat mengubah pernyataan menjadi pertanyaan.",sentences:[
    {jp:"お仕事は何ですか。",kana:"おしごとはなんですか。",romaji:"Oshigoto wa nan desu ka.",meaning:"Pekerjaannya apa?"},
    {jp:"この電車は渋谷に止まりますか。",kana:"このでんしゃはしぶやにとまりますか。",romaji:"Kono densha wa Shibuya ni tomarimasu ka.",meaning:"Apakah kereta ini berhenti di Shibuya?"},
    {jp:"トイレはどこですか。",kana:"といれはどこですか。",romaji:"Toire wa doko desu ka.",meaning:"Toiletnya di mana?"},
    {jp:"明日のパーティーに来ますか。",kana:"あしたのぱーてぃーにきますか。",romaji:"Ashita no paatii ni kimasu ka.",meaning:"Besok datang ke pesta?"},
    {jp:"日本語の授業は何曜日ですか。",kana:"にほんごのじゅぎょうはなんようびですか。",romaji:"Nihongo no jugyou wa nanyoubi desu ka.",meaning:"Kelas bahasa Jepang hari apa?"}
  ]}]},

  {id:"GR-N5-07",level:"N5",title:"はい / いいえ",summary:"Cara menjawab pertanyaan. はい (ya), いいえ (tidak).",groups:[
    {name:"はい",description:"Untuk menjawab 'ya' atau membenarkan.",sentences:[
      {jp:"「学生ですか。」「はい、大学三年生です。」",kana:"「がくせいですか。」「はい、だいがくさんねんせいです。」",romaji:"\"Gakusei desu ka.\" \"Hai, daigaku sannensei desu.\"",meaning:"\"Kamu mahasiswa?\" \"Ya, tahun ketiga.\""},
      {jp:"「コーヒーは好きですか。」「はい、毎朝飲みます。」",kana:"「こーひーはすきですか。」「はい、まいあさのみます。」",romaji:"\"Koohii wa suki desu ka.\" \"Hai, maiasa nomimasu.\"",meaning:"\"Suka kopi?\" \"Ya, minum setiap pagi.\""},
      {jp:"「これでいいですか。」「はい、大丈夫です。」",kana:"「これでいいですか。」「はい、だいじょうぶです。」",romaji:"\"Kore de ii desu ka.\" \"Hai, daijoubu desu.\"",meaning:"\"Ini sudah oke?\" \"Ya, tidak masalah.\""},
      {jp:"「日本に行ったことがありますか。」「はい、二回あります。」",kana:"「にほんにいったことがありますか。」「はい、にかいあります。」",romaji:"\"Nihon ni itta koto ga arimasu ka.\" \"Hai, nikai arimasu.\"",meaning:"\"Pernah ke Jepang?\" \"Ya, dua kali.\""},
      {jp:"「明日は休みですか。」「はい、そうです。」",kana:"「あしたはやすみですか。」「はい、そうです。」",romaji:"\"Ashita wa yasumi desu ka.\" \"Hai, sou desu.\"",meaning:"\"Besok libur?\" \"Ya, benar.\""}
    ]},
    {name:"いいえ",description:"Untuk menjawab 'tidak' atau menyangkal.",sentences:[
      {jp:"「日本人ですか。」「いいえ、インドネシア人です。」",kana:"「にほんじんですか。」「いいえ、いんどねしあじんです。」",romaji:"\"Nihonjin desu ka.\" \"Iie, Indoneshia-jin desu.\"",meaning:"\"Orang Jepang?\" \"Bukan, orang Indonesia.\""},
      {jp:"「これは高いですか。」「いいえ、そんなに高くないです。」",kana:"「これはたかいですか。」「いいえ、そんなにたかくないです。」",romaji:"\"Kore wa takai desu ka.\" \"Iie, sonnani takakunai desu.\"",meaning:"\"Ini mahal?\" \"Tidak, tidak begitu mahal.\""},
      {jp:"「もう食べましたか。」「いいえ、まだです。」",kana:"「もうたべましたか。」「いいえ、まだです。」",romaji:"\"Mou tabemashita ka.\" \"Iie, mada desu.\"",meaning:"\"Sudah makan?\" \"Belum.\""},
      {jp:"「お酒を飲みますか。」「いいえ、飲めないんです。」",kana:"「おさけをのみますか。」「いいえ、のめないんです。」",romaji:"\"Osake o nomimasu ka.\" \"Iie, nomenai n desu.\"",meaning:"\"Minum sake?\" \"Tidak, saya tidak bisa minum.\""},
      {jp:"「ここは初めてですか。」「いいえ、三回目です。」",kana:"「ここははじめてですか。」「いいえ、さんかいめです。」",romaji:"\"Koko wa hajimete desu ka.\" \"Iie, sankaime desu.\"",meaning:"\"Pertama kali di sini?\" \"Tidak, sudah ketiga kalinya.\""}
    ]}
  ]},

  {id:"GR-N5-08",level:"N5",title:"そうです",summary:"Pola untuk membenarkan/menyetujui pernyataan. Artinya 'benar begitu'.",groups:[{name:"そうです",description:"Dipakai untuk mengonfirmasi informasi atau pendapat orang lain.",sentences:[
    {jp:"「明日は祝日ですか。」「はい、そうです。」",kana:"「あしたはしゅくじつですか。」「はい、そうです。」",romaji:"\"Ashita wa shukujitsu desu ka.\" \"Hai, sou desu.\"",meaning:"\"Besok hari libur?\" \"Ya, benar.\""},
    {jp:"「この本は面白いですか。」「そうですね、なかなかいいですよ。」",kana:"「このほんはおもしろいですか。」「そうですね、なかなかいいですよ。」",romaji:"\"Kono hon wa omoshiroi desu ka.\" \"Sou desu ne, nakanaka ii desu yo.\"",meaning:"\"Buku ini menarik?\" \"Hmm ya, lumayan bagus lho.\""},
    {jp:"「東京は物価が高いですね。」「そうですね。特に家賃が大変です。」",kana:"「とうきょうはぶっかがたかいですね。」「そうですね。とくにやちんがたいへんです。」",romaji:"\"Toukyou wa bukka ga takai desu ne.\" \"Sou desu ne. Toku ni yachin ga taihen desu.\"",meaning:"\"Tokyo harganya mahal ya.\" \"Benar. Terutama sewa rumahnya berat.\""},
    {jp:"「あの店は人気がありますね。」「そうです、いつも混んでいます。」",kana:"「あのみせはにんきがありますね。」「そうです、いつもこんでいます。」",romaji:"\"Ano mise wa ninki ga arimasu ne.\" \"Sou desu, itsumo konde imasu.\"",meaning:"\"Toko itu populer ya.\" \"Iya, selalu ramai.\""},
    {jp:"「田中さんは料理が上手ですね。」「そうなんです。趣味だそうです。」",kana:"「たなかさんはりょうりがじょうずですね。」「そうなんです。しゅみだそうです。」",romaji:"\"Tanaka-san wa ryouri ga jouzu desu ne.\" \"Sou nan desu. Shumi da sou desu.\"",meaning:"\"Tanaka pintar masak ya.\" \"Iya. Katanya itu hobinya.\""}
  ]}]},

  {id:"GR-N5-09",level:"N5",title:"あります / います",summary:"Pola keberadaan. あります untuk benda mati, います untuk makhluk hidup.",groups:[
    {name:"あります",description:"Keberadaan benda mati.",sentences:[
      {jp:"冷蔵庫にビールがあります。",kana:"れいぞうこにびーるがあります。",romaji:"Reizouko ni biiru ga arimasu.",meaning:"Ada bir di kulkas."},
      {jp:"来週の金曜日に会議があります。",kana:"らいしゅうのきんようびにかいぎがあります。",romaji:"Raishuu no kinyoubi ni kaigi ga arimasu.",meaning:"Minggu depan Jumat ada rapat."},
      {jp:"駅の前にATMがありますか。",kana:"えきのまえにえーてぃーえむがありますか。",romaji:"Eki no mae ni ATM ga arimasu ka.",meaning:"Ada ATM di depan stasiun?"},
      {jp:"日本語には敬語があります。",kana:"にほんごにはけいごがあります。",romaji:"Nihongo ni wa keigo ga arimasu.",meaning:"Dalam bahasa Jepang ada keigo."},
      {jp:"何か質問はありますか。",kana:"なにかしつもんはありますか。",romaji:"Nanika shitsumon wa arimasu ka.",meaning:"Apakah ada pertanyaan?"}
    ]},
    {name:"います",description:"Keberadaan makhluk hidup.",sentences:[
      {jp:"庭に猫がいます。",kana:"にわにねこがいます。",romaji:"Niwa ni neko ga imasu.",meaning:"Ada kucing di halaman."},
      {jp:"受付に誰かいますか。",kana:"うけつけにだれかいますか。",romaji:"Uketsuke ni dareka imasu ka.",meaning:"Ada orang di resepsionis?"},
      {jp:"兄弟は三人います。",kana:"きょうだいはさんにんいます。",romaji:"Kyoudai wa sannin imasu.",meaning:"Saya punya tiga saudara."},
      {jp:"あの公園にはいつも子供がたくさんいます。",kana:"あのこうえんにはいつもこどもがたくさんいます。",romaji:"Ano kouen ni wa itsumo kodomo ga takusan imasu.",meaning:"Di taman itu selalu banyak anak-anak."},
      {jp:"日本に友達がいますか。",kana:"にほんにともだちがいますか。",romaji:"Nihon ni tomodachi ga imasu ka.",meaning:"Punya teman di Jepang?"}
    ]}
  ]},

  {id:"GR-N5-10",level:"N5",title:"～がほしいです",summary:"Pola untuk menyatakan keinginan terhadap benda. Artinya 'ingin (sesuatu)'.",groups:[{name:"～がほしいです",description:"Subjek は + benda がほしいです. Hanya untuk orang pertama.",sentences:[
    {jp:"新しいパソコンがほしいです。",kana:"あたらしいぱそこんがほしいです。",romaji:"Atarashii pasokon ga hoshii desu.",meaning:"Saya ingin komputer baru."},
    {jp:"もう少し時間がほしいです。",kana:"もうすこしじかんがほしいです。",romaji:"Mou sukoshi jikan ga hoshii desu.",meaning:"Saya ingin waktu sedikit lagi."},
    {jp:"誕生日に何がほしいですか。",kana:"たんじょうびになにがほしいですか。",romaji:"Tanjoubi ni nani ga hoshii desu ka.",meaning:"Mau apa untuk ulang tahun?"},
    {jp:"暑いので冷たい水がほしいです。",kana:"あついのでつめたいみずがほしいです。",romaji:"Atsui node tsumetai mizu ga hoshii desu.",meaning:"Karena panas, saya ingin air dingin."},
    {jp:"将来、自分の店がほしいです。",kana:"しょうらい、じぶんのみせがほしいです。",romaji:"Shourai, jibun no mise ga hoshii desu.",meaning:"Di masa depan ingin punya toko sendiri."}
  ]}]},

  {id:"GR-N5-11",level:"N5",title:"～になります",summary:"Pola perubahan keadaan. Artinya 'menjadi ~'.",groups:[{name:"～になります",description:"Kata benda/na-adj + になります menunjukkan transisi.",sentences:[
    {jp:"来年、二十歳になります。",kana:"らいねん、はたちになります。",romaji:"Rainen, hatachi ni narimasu.",meaning:"Tahun depan jadi 20 tahun."},
    {jp:"四月から大学生になります。",kana:"しがつからだいがくせいになります。",romaji:"Shigatsu kara daigakusei ni narimasu.",meaning:"Mulai April jadi mahasiswa."},
    {jp:"日本語が上手になりましたね。",kana:"にほんごがじょうずになりましたね。",romaji:"Nihongo ga jouzu ni narimashita ne.",meaning:"Bahasa Jepangmu sudah bagus ya."},
    {jp:"秋になると紅葉がきれいになります。",kana:"あきになるともみじがきれいになります。",romaji:"Aki ni naru to momiji ga kirei ni narimasu.",meaning:"Kalau masuk musim gugur, daun maple jadi cantik."},
    {jp:"このあたりは夜になると静かになります。",kana:"このあたりはよるになるとしずかになります。",romaji:"Kono atari wa yoru ni naru to shizuka ni narimasu.",meaning:"Daerah sini kalau malam jadi sepi."}
  ]}]},

  {id:"GR-N5-12",level:"N5",title:"～に行きます / 来ます / 帰ります",summary:"Pola pergerakan ke suatu tempat. に menunjukkan tujuan.",groups:[
    {name:"～に行きます",description:"Pergi ke suatu tempat/tujuan.",sentences:[
      {jp:"週末に温泉に行きます。",kana:"しゅうまつにおんせんにいきます。",romaji:"Shuumatsu ni onsen ni ikimasu.",meaning:"Akhir pekan pergi ke onsen."},
      {jp:"午後から銀行にお金を下ろしに行きます。",kana:"ごごからぎんこうにおかねをおろしにいきます。",romaji:"Gogo kara ginkou ni okane o oroshi ni ikimasu.",meaning:"Dari siang pergi ke bank tarik uang."},
      {jp:"来月、友達の結婚式に行きます。",kana:"らいげつ、ともだちのけっこんしきにいきます。",romaji:"Raigetsu, tomodachi no kekkonshiki ni ikimasu.",meaning:"Bulan depan pergi ke pernikahan teman."},
      {jp:"どこに行きたいですか。",kana:"どこにいきたいですか。",romaji:"Doko ni ikitai desu ka.",meaning:"Mau pergi ke mana?"},
      {jp:"毎朝ジョギングに行きます。",kana:"まいあさじょぎんぐにいきます。",romaji:"Maiasa jogingu ni ikimasu.",meaning:"Setiap pagi pergi jogging."}
    ]},
    {name:"～に来ます",description:"Datang ke suatu tempat.",sentences:[
      {jp:"日本に留学に来ました。",kana:"にほんにりゅうがくにきました。",romaji:"Nihon ni ryuugaku ni kimashita.",meaning:"Datang ke Jepang untuk belajar."},
      {jp:"友達が遊びに来ます。",kana:"ともだちがあそびにきます。",romaji:"Tomodachi ga asobi ni kimasu.",meaning:"Teman datang bermain."},
      {jp:"何をしにここに来ましたか。",kana:"なにをしにここにきましたか。",romaji:"Nani o shi ni koko ni kimashita ka.",meaning:"Datang ke sini untuk apa?"},
      {jp:"毎年たくさんの観光客が京都に来ます。",kana:"まいとしたくさんのかんこうきゃくがきょうとにきます。",romaji:"Maitoshi takusan no kankou kyaku ga Kyouto ni kimasu.",meaning:"Setiap tahun banyak turis datang ke Kyoto."},
      {jp:"彼女は大阪から来ました。",kana:"かのじょはおおさかからきました。",romaji:"Kanojo wa Oosaka kara kimashita.",meaning:"Dia datang dari Osaka."}
    ]},
    {name:"～に帰ります",description:"Pulang ke tempat asal.",sentences:[
      {jp:"お正月に国に帰ります。",kana:"おしょうがつにくににかえります。",romaji:"Oshougatsu ni kuni ni kaerimasu.",meaning:"Saat tahun baru pulang ke negara asal."},
      {jp:"今日は早く家に帰りたいです。",kana:"きょうははやくいえにかえりたいです。",romaji:"Kyou wa hayaku ie ni kaeritai desu.",meaning:"Hari ini ingin pulang cepat."},
      {jp:"仕事が終わったら、すぐ帰ります。",kana:"しごとがおわったら、すぐかえります。",romaji:"Shigoto ga owattara, sugu kaerimasu.",meaning:"Kalau kerja selesai, langsung pulang."},
      {jp:"昨日は終電で帰りました。",kana:"きのうはしゅうでんでかえりました。",romaji:"Kinou wa shuuden de kaerimashita.",meaning:"Kemarin pulang naik kereta terakhir."},
      {jp:"何時ごろ帰りますか。",kana:"なんじごろかえりますか。",romaji:"Nanji goro kaerimasu ka.",meaning:"Pulangnya sekitar jam berapa?"}
    ]}
  ]},

  {id:"GR-N5-13",level:"N5",title:"～が好き / きらい / 上手 / 下手",summary:"Pola untuk menyatakan kesukaan dan kemampuan.",groups:[
    {name:"～が好きです",description:"Menyatakan suka.",sentences:[
      {jp:"猫より犬が好きです。",kana:"ねこよりいぬがすきです。",romaji:"Neko yori inu ga suki desu.",meaning:"Lebih suka anjing daripada kucing."},
      {jp:"日本の音楽が好きになりました。",kana:"にほんのおんがくがすきになりました。",romaji:"Nihon no ongaku ga suki ni narimashita.",meaning:"Jadi suka musik Jepang."},
      {jp:"どんな映画が好きですか。",kana:"どんなえいががすきですか。",romaji:"Donna eiga ga suki desu ka.",meaning:"Suka film seperti apa?"},
      {jp:"彼はラーメンが大好きです。",kana:"かれはらーめんがだいすきです。",romaji:"Kare wa raamen ga daisuki desu.",meaning:"Dia sangat suka ramen."},
      {jp:"小さい頃からピアノが好きでした。",kana:"ちいさいころからぴあのがすきでした。",romaji:"Chiisai koro kara piano ga suki deshita.",meaning:"Dari kecil sudah suka piano."}
    ]},
    {name:"～がきらいです",description:"Menyatakan tidak suka.",sentences:[
      {jp:"納豆がきらいな外国人は多いです。",kana:"なっとうがきらいながいこくじんはおおいです。",romaji:"Nattou ga kirai na gaikokujin wa ooi desu.",meaning:"Banyak orang asing tidak suka natto."},
      {jp:"朝早く起きるのがきらいです。",kana:"あさはやくおきるのがきらいです。",romaji:"Asa hayaku okiru no ga kirai desu.",meaning:"Tidak suka bangun pagi-pagi."},
      {jp:"嘘をつく人がきらいです。",kana:"うそをつくひとがきらいです。",romaji:"Uso o tsuku hito ga kirai desu.",meaning:"Tidak suka orang yang bohong."},
      {jp:"彼女は虫がきらいです。",kana:"かのじょはむしがきらいです。",romaji:"Kanojo wa mushi ga kirai desu.",meaning:"Dia tidak suka serangga."},
      {jp:"満員電車がきらいなので自転車で通います。",kana:"まんいんでんしゃがきらいなのでじてんしゃでかよいます。",romaji:"Man'in densha ga kirai na node jitensha de kayoimasu.",meaning:"Tidak suka kereta penuh, jadi naik sepeda."}
    ]},
    {name:"～が上手です",description:"Menyatakan pandai/mahir.",sentences:[
      {jp:"彼女は絵を描くのが上手です。",kana:"かのじょはえをかくのがじょうずです。",romaji:"Kanojo wa e o kaku no ga jouzu desu.",meaning:"Dia pandai menggambar."},
      {jp:"お母さんは料理が上手ですね。",kana:"おかあさんはりょうりがじょうずですね。",romaji:"Okaasan wa ryouri ga jouzu desu ne.",meaning:"Ibumu pandai masak ya."},
      {jp:"日本語がとても上手になりましたね。",kana:"にほんごがとてもじょうずになりましたね。",romaji:"Nihongo ga totemo jouzu ni narimashita ne.",meaning:"Bahasa Jepangmu sudah sangat bagus ya."},
      {jp:"田中さんはプレゼンが上手です。",kana:"たなかさんはぷれぜんがじょうずです。",romaji:"Tanaka-san wa purezen ga jouzu desu.",meaning:"Tanaka pandai presentasi."},
      {jp:"あの子はサッカーが上手です。",kana:"あのこはさっかーがじょうずです。",romaji:"Ano ko wa sakkaa ga jouzu desu.",meaning:"Anak itu pandai main bola."}
    ]},
    {name:"～が下手です",description:"Menyatakan tidak pandai.",sentences:[
      {jp:"歌が下手なので、カラオケは苦手です。",kana:"うたがへたなので、からおけはにがてです。",romaji:"Uta ga heta na node, karaoke wa nigate desu.",meaning:"Jelek nyanyi, jadi nggak suka karaoke."},
      {jp:"漢字を書くのがまだ下手です。",kana:"かんじをかくのがまだへたです。",romaji:"Kanji o kaku no ga mada heta desu.",meaning:"Menulis kanji masih belum bagus."},
      {jp:"運転が下手なので電車で行きます。",kana:"うんてんがへたなのででんしゃでいきます。",romaji:"Unten ga heta na node densha de ikimasu.",meaning:"Nggak jago nyetir, jadi naik kereta."},
      {jp:"彼は冗談を言うのが下手です。",kana:"かれはじょうだんをいうのがへたです。",romaji:"Kare wa joudan o iu no ga heta desu.",meaning:"Dia nggak pandai bercanda."},
      {jp:"料理は下手ですが、頑張って作ります。",kana:"りょうりはへたですが、がんばってつくります。",romaji:"Ryouri wa heta desu ga, ganbatte tsukurimasu.",meaning:"Masak nggak jago, tapi berusaha."}
    ]}
  ]},

  {id:"GR-N5-14",level:"N5",title:"～あげます / くれます / もらいます",summary:"Pola memberi dan menerima. あげます (memberi), くれます (diberi), もらいます (menerima).",groups:[
    {name:"あげます",description:"Memberi sesuatu kepada orang lain.",sentences:[
      {jp:"友達に誕生日プレゼントをあげました。",kana:"ともだちにたんじょうびぷれぜんとをあげました。",romaji:"Tomodachi ni tanjoubi purezento o agemashita.",meaning:"Memberi hadiah ulang tahun ke teman."},
      {jp:"妹にお小遣いをあげます。",kana:"いもうとにおこづかいをあげます。",romaji:"Imouto ni okozukai o agemasu.",meaning:"Memberi uang jajan ke adik."},
      {jp:"彼女に花をあげたいです。",kana:"かのじょにはなをあげたいです。",romaji:"Kanojo ni hana o agetai desu.",meaning:"Ingin memberi bunga ke pacar."},
      {jp:"猫にえさをあげましたか。",kana:"ねこにえさをあげましたか。",romaji:"Neko ni esa o agemashita ka.",meaning:"Sudah kasih makan kucing?"},
      {jp:"旅行のお土産を同僚にあげます。",kana:"りょこうのおみやげをどうりょうにあげます。",romaji:"Ryokou no omiyage o douryou ni agemasu.",meaning:"Kasih oleh-oleh ke rekan kerja."}
    ]},
    {name:"くれます",description:"Orang lain memberikan sesuatu ke pembicara.",sentences:[
      {jp:"母がこのセーターを編んでくれました。",kana:"ははがこのせーたーをあんでくれました。",romaji:"Haha ga kono seetaa o ande kuremashita.",meaning:"Ibu merajutkan sweater ini."},
      {jp:"先輩が駅まで送ってくれました。",kana:"せんぱいがえきまでおくってくれました。",romaji:"Senpai ga eki made okutte kuremashita.",meaning:"Senior mengantarkan sampai stasiun."},
      {jp:"友達が日本語を教えてくれます。",kana:"ともだちがにほんごをおしえてくれます。",romaji:"Tomodachi ga nihongo o oshiete kuremasu.",meaning:"Teman mengajari bahasa Jepang."},
      {jp:"誰がこの手紙をくれましたか。",kana:"だれがこのてがみをくれましたか。",romaji:"Dare ga kono tegami o kuremashita ka.",meaning:"Siapa yang memberi surat ini?"},
      {jp:"彼がいつも相談に乗ってくれます。",kana:"かれがいつもそうだんにのってくれます。",romaji:"Kare ga itsumo soudan ni notte kuremasu.",meaning:"Dia selalu mau dengarkan curhat saya."}
    ]},
    {name:"もらいます",description:"Menerima sesuatu dari orang lain.",sentences:[
      {jp:"先生に推薦状をもらいました。",kana:"せんせいにすいせんじょうをもらいました。",romaji:"Sensei ni suisenjou o moraimashita.",meaning:"Dapat surat rekomendasi dari guru."},
      {jp:"友達にチケットを二枚もらいました。",kana:"ともだちにちけっとをにまいもらいました。",romaji:"Tomodachi ni chiketto o nimai moraimashita.",meaning:"Dapat dua tiket dari teman."},
      {jp:"クリスマスに何をもらいましたか。",kana:"くりすますになにをもらいましたか。",romaji:"Kurisumasu ni nani o moraimashita ka.",meaning:"Dapat apa saat Natal?"},
      {jp:"上司にアドバイスをもらいました。",kana:"じょうしにあどばいすをもらいました。",romaji:"Joushi ni adobaisu o moraimashita.",meaning:"Dapat nasihat dari atasan."},
      {jp:"日本のお菓子をもらったので、一緒に食べませんか。",kana:"にほんのおかしをもらったので、いっしょにたべませんか。",romaji:"Nihon no okashi o moratta node, issho ni tabemasen ka.",meaning:"Dapat snack Jepang, mau makan bareng?"}
    ]}
  ]},

  {id:"GR-N5-15",level:"N5",title:"～ませんか",summary:"Pola ajakan sopan. Artinya 'maukah ~?' atau 'bagaimana kalau ~?'.",groups:[{name:"～ませんか",description:"Verb -masu stem + ませんか untuk mengajak secara sopan.",sentences:[
    {jp:"今度の週末、映画を見に行きませんか。",kana:"こんどのしゅうまつ、えいがをみにいきませんか。",romaji:"Kondo no shuumatsu, eiga o mi ni ikimasen ka.",meaning:"Akhir pekan nanti, mau nonton film bareng?"},
    {jp:"お昼ご飯を一緒に食べませんか。",kana:"おひるごはんをいっしょにたべませんか。",romaji:"Ohiru gohan o issho ni tabemasen ka.",meaning:"Mau makan siang bareng?"},
    {jp:"少し休憩しませんか。",kana:"すこしきゅうけいしませんか。",romaji:"Sukoshi kyuukei shimasen ka.",meaning:"Mau istirahat sebentar?"},
    {jp:"よかったら、お茶でも飲みませんか。",kana:"よかったら、おちゃでものみませんか。",romaji:"Yokattara, ocha demo nomimasen ka.",meaning:"Kalau mau, bagaimana kalau minum teh?"},
    {jp:"来週のボランティアに参加しませんか。",kana:"らいしゅうのぼらんてぃあにさんかしませんか。",romaji:"Raishuu no borantia ni sanka shimasen ka.",meaning:"Mau ikut sukarelawan minggu depan?"}
  ]}]},

  {id:"GR-N5-16",level:"N5",title:"～な [名詞] です",summary:"Pola kata sifat -na yang memodifikasi kata benda.",groups:[{name:"～な [名詞] です",description:"Na-adjective + な + kata benda.",sentences:[
    {jp:"田中先生は親切な先生です。",kana:"たなかせんせいはしんせつなせんせいです。",romaji:"Tanaka-sensei wa shinsetsu na sensei desu.",meaning:"Pak Tanaka guru yang baik hati."},
    {jp:"ここは有名なお寺です。",kana:"ここはゆうめいなおてらです。",romaji:"Koko wa yuumei na otera desu.",meaning:"Di sini kuil yang terkenal."},
    {jp:"静かな場所で勉強したいです。",kana:"しずかなばしょでべんきょうしたいです。",romaji:"Shizuka na basho de benkyou shitai desu.",meaning:"Ingin belajar di tempat yang tenang."},
    {jp:"きれいな景色ですね。",kana:"きれいなけしきですね。",romaji:"Kirei na keshiki desu ne.",meaning:"Pemandangan yang indah ya."},
    {jp:"彼は真面目な学生です。",kana:"かれはまじめながくせいです。",romaji:"Kare wa majime na gakusei desu.",meaning:"Dia mahasiswa yang serius."}
  ]}]},

  {id:"GR-N5-17",level:"N5",title:"～は～が [Adjective]",summary:"Pola untuk mendeskripsikan bagian dari subjek. Topik は + aspek が + kata sifat.",groups:[{name:"～は～が [Adjective]",description:"Topik は + bagian yang dideskripsikan が + adjective.",sentences:[
    {jp:"象は鼻が長いです。",kana:"ぞうははながながいです。",romaji:"Zou wa hana ga nagai desu.",meaning:"Gajah belalainya panjang."},
    {jp:"東京は物価が高いです。",kana:"とうきょうはぶっかがたかいです。",romaji:"Toukyou wa bukka ga takai desu.",meaning:"Tokyo harga barangnya mahal."},
    {jp:"日本は電車が便利です。",kana:"にほんはでんしゃがべんりです。",romaji:"Nihon wa densha ga benri desu.",meaning:"Jepang keretanya praktis."},
    {jp:"この部屋は窓が大きいです。",kana:"このへやはまどがおおきいです。",romaji:"Kono heya wa mado ga ookii desu.",meaning:"Kamar ini jendelanya besar."},
    {jp:"私は目が悪いので、眼鏡をかけています。",kana:"わたしはめがわるいので、めがねをかけています。",romaji:"Watashi wa me ga warui node, megane o kakete imasu.",meaning:"Mata saya jelek, jadi pakai kacamata."}
  ]}]},

  {id:"GR-N5-18",level:"N5",title:"～も",summary:"Partikel untuk menyatakan 'juga'. Menggantikan は, が, atau を.",groups:[{name:"～も",description:"Menambahkan informasi yang sama dengan sebelumnya.",sentences:[
    {jp:"私はコーヒーが好きです。紅茶も好きです。",kana:"わたしはこーひーがすきです。こうちゃもすきです。",romaji:"Watashi wa koohii ga suki desu. Koucha mo suki desu.",meaning:"Suka kopi. Teh juga suka."},
    {jp:"兄は医者です。姉も医者です。",kana:"あにはいしゃです。あねもいしゃです。",romaji:"Ani wa isha desu. Ane mo isha desu.",meaning:"Kakak laki-laki dokter. Kakak perempuan juga."},
    {jp:"昨日も今日も雨です。",kana:"きのうもきょうもあめです。",romaji:"Kinou mo kyou mo ame desu.",meaning:"Kemarin juga hari ini juga hujan."},
    {jp:"ここにはコンビニもスーパーもあります。",kana:"ここにはこんびにもすーぱーもあります。",romaji:"Koko ni wa konbini mo suupaa mo arimasu.",meaning:"Di sini ada minimarket dan supermarket."},
    {jp:"彼は英語もフランス語も話せます。",kana:"かれはえいごもふらんすごもはなせます。",romaji:"Kare wa eigo mo furansugo mo hanasemasu.",meaning:"Dia bisa bahasa Inggris dan Prancis."}
  ]}]},

  {id:"GR-N5-19",level:"N5",title:"～を",summary:"Partikel penanda objek langsung.",groups:[{name:"～を",description:"Kata benda + を + kata kerja transitif.",sentences:[
    {jp:"毎朝コーヒーを飲みながらニュースを見ます。",kana:"まいあさこーひーをのみながらにゅーすをみます。",romaji:"Maiasa koohii o nominagara nyuusu o mimasu.",meaning:"Setiap pagi minum kopi sambil nonton berita."},
    {jp:"図書館で小説を借りました。",kana:"としょかんでしょうせつをかりました。",romaji:"Toshokan de shousetsu o karimashita.",meaning:"Pinjam novel di perpustakaan."},
    {jp:"今年の目標を決めましたか。",kana:"ことしのもくひょうをきめましたか。",romaji:"Kotoshi no mokuhyou o kimemashita ka.",meaning:"Sudah tentukan target tahun ini?"},
    {jp:"自転車を修理に出しました。",kana:"じてんしゃをしゅうりにだしました。",romaji:"Jitensha o shuuri ni dashimashita.",meaning:"Bawa sepeda untuk diperbaiki."},
    {jp:"日本語の歌を練習しています。",kana:"にほんごのうたをれんしゅうしています。",romaji:"Nihongo no uta o renshuu shite imasu.",meaning:"Sedang latihan lagu bahasa Jepang."}
  ]}]},

  {id:"GR-N5-20",level:"N5",title:"[起点] を [Verb]",summary:"Partikel を menandai titik awal keberangkatan. 'Dari/keluar dari'.",groups:[{name:"[起点] を [Verb]",description:"Tempat + を + kata kerja pergerakan (出る, 降りる, 卒業する).",sentences:[
    {jp:"朝七時に家を出ます。",kana:"あさしちじにいえをでます。",romaji:"Asa shichiji ni ie o demasu.",meaning:"Jam 7 pagi keluar rumah."},
    {jp:"次の駅でバスを降ります。",kana:"つぎのえきでばすをおります。",romaji:"Tsugi no eki de basu o orimasu.",meaning:"Turun bus di halte berikutnya."},
    {jp:"去年、大学を卒業しました。",kana:"きょねん、だいがくをそつぎょうしました。",romaji:"Kyonen, daigaku o sotsugyou shimashita.",meaning:"Tahun lalu lulus universitas."},
    {jp:"鳥が窓から外を飛んでいきました。",kana:"とりがまどからそとをとんでいきました。",romaji:"Tori ga mado kara soto o tonde ikimashita.",meaning:"Burung terbang keluar dari jendela."},
    {jp:"エレベーターを降りて左に曲がってください。",kana:"えれべーたーをおりてひだりにまがってください。",romaji:"Erebeetaa o orite hidari ni magatte kudasai.",meaning:"Turun lift lalu belok kiri."}
  ]}]},

  {id:"GR-N5-21",level:"N5",title:"[場所] を [移動動詞]",summary:"Partikel を menandai tempat yang dilalui/dilewati.",groups:[{name:"[場所] を [移動動詞]",description:"Tempat + を + kata kerja gerak (歩く, 走る, 渡る, 通る).",sentences:[
    {jp:"毎朝この道を走っています。",kana:"まいあさこのみちをはしっています。",romaji:"Maiasa kono michi o hashitte imasu.",meaning:"Setiap pagi lari lewat jalan ini."},
    {jp:"橋を渡ると公園があります。",kana:"はしをわたるとこうえんがあります。",romaji:"Hashi o wataru to kouen ga arimasu.",meaning:"Menyeberang jembatan, ada taman."},
    {jp:"あの角を左に曲がってください。",kana:"あのかどをひだりにまがってください。",romaji:"Ano kado o hidari ni magatte kudasai.",meaning:"Belok kiri di tikungan itu."},
    {jp:"商店街を歩くのが好きです。",kana:"しょうてんがいをあるくのがすきです。",romaji:"Shoutengai o aruku no ga suki desu.",meaning:"Suka jalan-jalan di area pertokoan."},
    {jp:"トンネルを通って山の反対側に出ます。",kana:"とんねるをとおってやまのはんたいがわにでます。",romaji:"Tonneru o tootte yama no hantaigawa ni demasu.",meaning:"Lewat terowongan ke sisi lain gunung."}
  ]}]},

  {id:"GR-N5-22",level:"N5",title:"[場所] に / で",summary:"Partikel tempat. に untuk lokasi keberadaan/tujuan, で untuk tempat aktivitas.",groups:[
    {name:"～に (lokasi/tujuan)",description:"Menandai tempat keberadaan atau tujuan.",sentences:[
      {jp:"テーブルの上に花瓶があります。",kana:"てーぶるのうえにかびんがあります。",romaji:"Teeburu no ue ni kabin ga arimasu.",meaning:"Ada vas bunga di atas meja."},
      {jp:"壁にカレンダーを掛けました。",kana:"かべにかれんだーをかけました。",romaji:"Kabe ni karendaa o kakemashita.",meaning:"Pasang kalender di dinding."},
      {jp:"来月、北海道に引っ越します。",kana:"らいげつ、ほっかいどうにひっこします。",romaji:"Raigetsu, Hokkaidou ni hikkoshimasu.",meaning:"Bulan depan pindah ke Hokkaido."},
      {jp:"空港に何時に着きますか。",kana:"くうこうになんじにつきますか。",romaji:"Kuukou ni nanji ni tsukimasu ka.",meaning:"Jam berapa tiba di bandara?"},
      {jp:"二階に寝室があります。",kana:"にかいにしんしつがあります。",romaji:"Nikai ni shinshitsu ga arimasu.",meaning:"Kamar tidur ada di lantai dua."}
    ]},
    {name:"～で (tempat aktivitas)",description:"Menandai tempat suatu kegiatan berlangsung.",sentences:[
      {jp:"カフェで友達と宿題をしました。",kana:"かふぇでともだちとしゅくだいをしました。",romaji:"Kafe de tomodachi to shukudai o shimashita.",meaning:"Kerjain PR bareng teman di kafe."},
      {jp:"公園で花見をしませんか。",kana:"こうえんではなみをしませんか。",romaji:"Kouen de hanami o shimasen ka.",meaning:"Mau hanami di taman?"},
      {jp:"コンビニで支払いができますか。",kana:"こんびにでしはらいができますか。",romaji:"Konbini de shiharai ga dekimasu ka.",meaning:"Bisa bayar di minimarket?"},
      {jp:"どこでその靴を買いましたか。",kana:"どこでそのくつをかいましたか。",romaji:"Doko de sono kutsu o kaimashita ka.",meaning:"Beli sepatu itu di mana?"},
      {jp:"家で映画を見るのが好きです。",kana:"いえでえいがをみるのがすきです。",romaji:"Ie de eiga o miru no ga suki desu.",meaning:"Suka nonton film di rumah."}
    ]}
  ]},

  {id:"GR-N5-23",level:"N5",title:"[数量] に",summary:"Partikel に untuk frekuensi/rasio per satuan waktu.",groups:[{name:"[数量] に",description:"Jumlah + に + frekuensi. Artinya 'per ~'.",sentences:[
    {jp:"一週間に三回ジムに行きます。",kana:"いっしゅうかんにさんかいじむにいきます。",romaji:"Isshuukan ni sankai jimu ni ikimasu.",meaning:"Ke gym tiga kali seminggu."},
    {jp:"一日に水を二リットル飲みます。",kana:"いちにちにみずをにりっとるのみます。",romaji:"Ichinichi ni mizu o ni rittoru nomimasu.",meaning:"Minum 2 liter air per hari."},
    {jp:"一か月に一回、美容院に行きます。",kana:"いっかげつにいっかい、びよういんにいきます。",romaji:"Ikkagetsu ni ikkai, biyouin ni ikimasu.",meaning:"Ke salon sekali sebulan."},
    {jp:"このりんごは三つに二百円です。",kana:"このりんごはみっつににひゃくえんです。",romaji:"Kono ringo wa mittsu ni nihyaku en desu.",meaning:"Apel ini 200 yen per tiga buah."},
    {jp:"年に二回、国に帰ります。",kana:"ねんににかい、くににかえります。",romaji:"Nen ni nikai, kuni ni kaerimasu.",meaning:"Pulang kampung dua kali setahun."}
  ]}]},

  {id:"GR-N5-24",level:"N5",title:"～の",summary:"Partikel kepemilikan/penghubung kata benda.",groups:[{name:"～の",description:"Kata benda A + の + kata benda B.",sentences:[
    {jp:"これは姉のパソコンです。",kana:"これはあねのぱそこんです。",romaji:"Kore wa ane no pasokon desu.",meaning:"Ini laptop kakak perempuan."},
    {jp:"日本語の試験は来月です。",kana:"にほんごのしけんはらいげつです。",romaji:"Nihongo no shiken wa raigetsu desu.",meaning:"Ujian bahasa Jepang bulan depan."},
    {jp:"東京の夏は蒸し暑いです。",kana:"とうきょうのなつはむしあついです。",romaji:"Toukyou no natsu wa mushiatsui desu.",meaning:"Musim panas di Tokyo gerah."},
    {jp:"あの赤いかばんは私のです。",kana:"あのあかいかばんはわたしのです。",romaji:"Ano akai kaban wa watashi no desu.",meaning:"Tas merah itu milik saya."},
    {jp:"駅の近くにおいしいラーメン屋があります。",kana:"えきのちかくにおいしいらーめんやがあります。",romaji:"Eki no chikaku ni oishii raamenya ga arimasu.",meaning:"Dekat stasiun ada kedai ramen enak."}
  ]}]},

  {id:"GR-N5-25",level:"N5",title:"[人] と",summary:"Partikel と untuk 'bersama dengan seseorang'.",groups:[{name:"[人] と",description:"Orang + と + kata kerja.",sentences:[
    {jp:"家族と温泉旅行に行きました。",kana:"かぞくとおんせんりょこうにいきました。",romaji:"Kazoku to onsen ryokou ni ikimashita.",meaning:"Pergi liburan onsen bersama keluarga."},
    {jp:"週末、彼女とデートします。",kana:"しゅうまつ、かのじょとでーとします。",romaji:"Shuumatsu, kanojo to deeto shimasu.",meaning:"Akhir pekan kencan dengan pacar."},
    {jp:"誰と一緒に住んでいますか。",kana:"だれといっしょにすんでいますか。",romaji:"Dare to issho ni sunde imasu ka.",meaning:"Tinggal bersama siapa?"},
    {jp:"先生と日本語で話しました。",kana:"せんせいとにほんごではなしました。",romaji:"Sensei to nihongo de hanashimashita.",meaning:"Bicara bahasa Jepang dengan guru."},
    {jp:"犬と公園を散歩するのが日課です。",kana:"いぬとこうえんをさんぽするのがにっかです。",romaji:"Inu to kouen o sanpo suru no ga nikka desu.",meaning:"Jalan-jalan di taman bersama anjing itu rutinitas harian."}
  ]}]},

  {id:"GR-N5-26",level:"N5",title:"[名詞] の [名詞]",summary:"Dua kata benda dihubungkan の. Yang pertama menjelaskan yang kedua.",groups:[{name:"[名詞] の [名詞]",description:"Kepemilikan, asal, bahan, atau kategori.",sentences:[
    {jp:"木の椅子が好きです。",kana:"きのいすがすきです。",romaji:"Ki no isu ga suki desu.",meaning:"Suka kursi kayu."},
    {jp:"日本の文化に興味があります。",kana:"にほんのぶんかにきょうみがあります。",romaji:"Nihon no bunka ni kyoumi ga arimasu.",meaning:"Tertarik budaya Jepang."},
    {jp:"会社の近くに公園があります。",kana:"かいしゃのちかくにこうえんがあります。",romaji:"Kaisha no chikaku ni kouen ga arimasu.",meaning:"Dekat kantor ada taman."},
    {jp:"英語の先生はアメリカ人です。",kana:"えいごのせんせいはあめりかじんです。",romaji:"Eigo no sensei wa Amerikajin desu.",meaning:"Guru bahasa Inggris orang Amerika."},
    {jp:"朝ご飯の時間がありません。",kana:"あさごはんのじかんがありません。",romaji:"Asagohan no jikan ga arimasen.",meaning:"Tidak ada waktu untuk sarapan."}
  ]}]},

  {id:"GR-N5-27",level:"N5",title:"[名詞] と [名詞]",summary:"Partikel と menghubungkan dua kata benda. Artinya 'dan'.",groups:[{name:"[名詞] と [名詞]",description:"Daftar lengkap (hanya item yang disebutkan).",sentences:[
    {jp:"パンとコーヒーで朝ご飯にします。",kana:"ぱんとこーひーであさごはんにします。",romaji:"Pan to koohii de asagohan ni shimasu.",meaning:"Sarapan roti dan kopi."},
    {jp:"机の上にペンとノートがあります。",kana:"つくえのうえにぺんとのーとがあります。",romaji:"Tsukue no ue ni pen to nooto ga arimasu.",meaning:"Di atas meja ada pena dan buku catatan."},
    {jp:"日本語と英語を勉強しています。",kana:"にほんごとえいごをべんきょうしています。",romaji:"Nihongo to eigo o benkyou shite imasu.",meaning:"Belajar bahasa Jepang dan Inggris."},
    {jp:"犬と猫、どちらが好きですか。",kana:"いぬとねこ、どちらがすきですか。",romaji:"Inu to neko, dochira ga suki desu ka.",meaning:"Anjing dan kucing, suka mana?"},
    {jp:"塩と胡椒を取ってください。",kana:"しおとこしょうをとってください。",romaji:"Shio to koshou o totte kudasai.",meaning:"Tolong ambilkan garam dan merica."}
  ]}]},

  {id:"GR-N5-28",level:"N5",title:"～や～",summary:"Partikel untuk contoh dari sekelompok benda. Artinya '~ dan ~ (dll)'.",groups:[{name:"～や～",description:"Berbeda dari と, や menyiratkan ada item lain.",sentences:[
    {jp:"かばんの中にスマホや財布が入っています。",kana:"かばんのなかにすまほやさいふがはいっています。",romaji:"Kaban no naka ni sumaho ya saifu ga haitte imasu.",meaning:"Di tas ada HP, dompet, dll."},
    {jp:"週末は掃除や洗濯をします。",kana:"しゅうまつはそうじやせんたくをします。",romaji:"Shuumatsu wa souji ya sentaku o shimasu.",meaning:"Akhir pekan bersih-bersih, cuci baju, dsb."},
    {jp:"スーパーで野菜や果物を買いました。",kana:"すーぱーでやさいやくだものをかいました。",romaji:"Suupaa de yasai ya kudamono o kaimashita.",meaning:"Beli sayur, buah, dll di supermarket."},
    {jp:"京都や奈良に行きたいです。",kana:"きょうとやならにいきたいです。",romaji:"Kyouto ya Nara ni ikitai desu.",meaning:"Ingin ke Kyoto, Nara, dan lainnya."},
    {jp:"趣味は読書やジョギングです。",kana:"しゅみはどくしょやじょぎんぐです。",romaji:"Shumi wa dokusho ya jogingu desu.",meaning:"Hobi membaca, jogging, dll."}
  ]}]},

  {id:"GR-N5-29",level:"N5",title:"[名詞] で",summary:"Partikel で untuk alat, sarana, atau cara.",groups:[{name:"[名詞] で",description:"Alat/sarana + で + kata kerja. 'Dengan ~'.",sentences:[
    {jp:"箸で食べるのがまだ難しいです。",kana:"はしでたべるのがまだむずかしいです。",romaji:"Hashi de taberu no ga mada muzukashii desu.",meaning:"Makan pakai sumpit masih susah."},
    {jp:"自転車で会社に通っています。",kana:"じてんしゃでかいしゃにかよっています。",romaji:"Jitensha de kaisha ni kayotte imasu.",meaning:"Pergi kerja naik sepeda."},
    {jp:"日本語でメールを書きました。",kana:"にほんごでめーるをかきました。",romaji:"Nihongo de meeru o kakimashita.",meaning:"Menulis email dalam bahasa Jepang."},
    {jp:"クレジットカードで払ってもいいですか。",kana:"くれじっとかーどではらってもいいですか。",romaji:"Kurejitto kaado de haratte mo ii desu ka.",meaning:"Boleh bayar pakai kartu kredit?"},
    {jp:"この料理はオリーブオイルで作ります。",kana:"このりょうりはおりーぶおいるでつくります。",romaji:"Kono ryouri wa oriibu oiru de tsukurimasu.",meaning:"Masakan ini dibuat dengan minyak zaitun."}
  ]}]},

  {id:"GR-N5-30",level:"N5",title:"～から～まで",summary:"Pola rentang. から (dari), まで (sampai). Waktu maupun tempat.",groups:[{name:"～から～まで",description:"Titik awal から + titik akhir まで.",sentences:[
    {jp:"月曜日から金曜日まで働いています。",kana:"げつようびからきんようびまではたらいています。",romaji:"Getsuyoubi kara kinyoubi made hataraite imasu.",meaning:"Bekerja dari Senin sampai Jumat."},
    {jp:"家から駅まで歩いて十五分です。",kana:"いえからえきまであるいてじゅうごふんです。",romaji:"Ie kara eki made aruite juugofun desu.",meaning:"Dari rumah ke stasiun 15 menit jalan kaki."},
    {jp:"このセールは今日から来週の日曜日までです。",kana:"このせーるはきょうかららいしゅうのにちようびまでです。",romaji:"Kono seeru wa kyou kara raishuu no nichiyoubi made desu.",meaning:"Sale ini dari hari ini sampai Minggu depan."},
    {jp:"朝九時から夕方五時まで授業があります。",kana:"あさくじからゆうがたごじまでじゅぎょうがあります。",romaji:"Asa kuji kara yuugata goji made jugyou ga arimasu.",meaning:"Kelas dari jam 9 pagi sampai jam 5 sore."},
    {jp:"東京から大阪まで新幹線で二時間半です。",kana:"とうきょうからおおさかまでしんかんせんでにじかんはんです。",romaji:"Toukyou kara Oosaka made shinkansen de nijikan han desu.",meaning:"Tokyo ke Osaka naik shinkansen 2,5 jam."}
  ]}]},

  {id:"GR-N5-31",level:"N5",title:"～が / けど",summary:"Konjungsi kontras. が lebih formal, けど lebih kasual.",groups:[
    {name:"～が",description:"Penghubung kontras sopan (tapi/namun).",sentences:[
      {jp:"すみませんが、お名前は何ですか。",kana:"すみませんが、おなまえはなんですか。",romaji:"Sumimasen ga, onamae wa nan desu ka.",meaning:"Maaf, siapa nama Anda?"},
      {jp:"高いですが、品質はとてもいいです。",kana:"たかいですが、ひんしつはとてもいいです。",romaji:"Takai desu ga, hinshitsu wa totemo ii desu.",meaning:"Mahal, tapi kualitasnya bagus."},
      {jp:"日本語は難しいですが、面白いです。",kana:"にほんごはむずかしいですが、おもしろいです。",romaji:"Nihongo wa muzukashii desu ga, omoshiroi desu.",meaning:"Bahasa Jepang sulit, tapi menarik."},
      {jp:"約束の時間ですが、まだ来ていません。",kana:"やくそくのじかんですが、まだきていません。",romaji:"Yakusoku no jikan desu ga, mada kite imasen.",meaning:"Sudah waktunya, tapi belum datang."},
      {jp:"失礼ですが、おいくつですか。",kana:"しつれいですが、おいくつですか。",romaji:"Shitsurei desu ga, oikutsu desu ka.",meaning:"Maaf lancang, umur berapa?"}
    ]},
    {name:"～けど",description:"Penghubung kontras kasual (tapi).",sentences:[
      {jp:"ちょっと聞きたいんだけど、明日暇？",kana:"ちょっとききたいんだけど、あしたひま？",romaji:"Chotto kikitai n da kedo, ashita hima?",meaning:"Mau tanya, besok kosong?"},
      {jp:"辛いけど、おいしいです。",kana:"からいけど、おいしいです。",romaji:"Karai kedo, oishii desu.",meaning:"Pedas tapi enak."},
      {jp:"雨だったけど、サッカーをしました。",kana:"あめだったけど、さっかーをしました。",romaji:"Ame datta kedo, sakkaa o shimashita.",meaning:"Hujan, tapi tetap main bola."},
      {jp:"安いけど、デザインがかっこいいです。",kana:"やすいけど、でざいんがかっこいいです。",romaji:"Yasui kedo, dezain ga kakkoii desu.",meaning:"Murah tapi desainnya keren."},
      {jp:"まだ分からないけど、たぶん大丈夫です。",kana:"まだわからないけど、たぶんだいじょうぶです。",romaji:"Mada wakaranai kedo, tabun daijoubu desu.",meaning:"Belum tahu, tapi mungkin oke."}
    ]}
  ]},

  {id:"GR-N5-32",level:"N5",title:"[Verb] こと / の",summary:"Nominalisasi kata kerja. こと lebih formal, の lebih kasual.",groups:[
    {name:"～こと",description:"Verb + こと. Mengubah aksi jadi konsep/hal.",sentences:[
      {jp:"毎日日記を書くことにしています。",kana:"まいにちにっきをかくことにしています。",romaji:"Mainichi nikki o kaku koto ni shite imasu.",meaning:"Sudah memutuskan menulis diary tiap hari."},
      {jp:"大切なことを忘れていました。",kana:"たいせつなことをわすれていました。",romaji:"Taisetsu na koto o wasurete imashita.",meaning:"Lupa hal yang penting."},
      {jp:"新しい言語を学ぶことは脳にいいです。",kana:"あたらしいげんごをまなぶことはのうにいいです。",romaji:"Atarashii gengo o manabu koto wa nou ni ii desu.",meaning:"Belajar bahasa baru baik untuk otak."},
      {jp:"彼に会ったことがありますか。",kana:"かれにあったことがありますか。",romaji:"Kare ni atta koto ga arimasu ka.",meaning:"Pernah bertemu dia?"},
      {jp:"趣味は写真を撮ることです。",kana:"しゅみはしゃしんをとることです。",romaji:"Shumi wa shashin o toru koto desu.",meaning:"Hobi saya memotret."}
    ]},
    {name:"～の",description:"Verb + の. Lebih natural untuk percakapan.",sentences:[
      {jp:"料理を作るのが好きです。",kana:"りょうりをつくるのがすきです。",romaji:"Ryouri o tsukuru no ga suki desu.",meaning:"Suka masak."},
      {jp:"朝起きるのがつらいです。",kana:"あさおきるのがつらいです。",romaji:"Asa okiru no ga tsurai desu.",meaning:"Bangun pagi itu berat."},
      {jp:"彼が来るのを待っています。",kana:"かれがくるのをまっています。",romaji:"Kare ga kuru no o matte imasu.",meaning:"Menunggu dia datang."},
      {jp:"日本に住んでいるの？",kana:"にほんにすんでいるの？",romaji:"Nihon ni sunde iru no?",meaning:"Kamu tinggal di Jepang?"},
      {jp:"漢字を覚えるのは時間がかかります。",kana:"かんじをおぼえるのはじかんがかかります。",romaji:"Kanji o oboeru no wa jikan ga kakarimasu.",meaning:"Mengingat kanji butuh waktu."}
    ]}
  ]},

  {id:"GR-N5-33",level:"N5",title:"～から",summary:"Partikel alasan. Artinya 'karena ~'.",groups:[{name:"～から",description:"Kalimat alasan + から + kalimat hasil.",sentences:[
    {jp:"雨が降っているから、傘を持っていきます。",kana:"あめがふっているから、かさをもっていきます。",romaji:"Ame ga futte iru kara, kasa o motte ikimasu.",meaning:"Karena hujan, bawa payung."},
    {jp:"お腹がすいたから、何か食べましょう。",kana:"おなかがすいたから、なにかたべましょう。",romaji:"Onaka ga suita kara, nanika tabemashou.",meaning:"Karena lapar, ayo makan sesuatu."},
    {jp:"まだ終わっていないから、もう少し待ってください。",kana:"まだおわっていないから、もうすこしまってください。",romaji:"Mada owatte inai kara, mou sukoshi matte kudasai.",meaning:"Belum selesai, tolong tunggu sebentar."},
    {jp:"日本が好きだから、日本語を勉強しています。",kana:"にほんがすきだから、にほんごをべんきょうしています。",romaji:"Nihon ga suki da kara, nihongo o benkyou shite imasu.",meaning:"Karena suka Jepang, belajar bahasa Jepang."},
    {jp:"明日は早いから、今日は早く寝ます。",kana:"あしたははやいから、きょうははやくねます。",romaji:"Ashita wa hayai kara, kyou wa hayaku nemasu.",meaning:"Besok pagi, jadi tidur cepat."}
  ]}]},


  {id:"GR-N5-34",level:"N5",title:"～ね",summary:"Partikel akhir kalimat untuk mencari persetujuan atau konfirmasi. Artinya 'ya kan?' atau 'benar kan?'.",groups:[{name:"～ね",description:"Ditambahkan di akhir kalimat untuk mengajak lawan bicara setuju.",sentences:[
    {jp:"今日はいい天気ですね。",kana:"きょうはいいてんきですね。",romaji:"Kyou wa ii tenki desu ne.",meaning:"Cuacanya bagus hari ini ya."},
    {jp:"この料理、おいしいですね。",kana:"このりょうり、おいしいですね。",romaji:"Kono ryouri, oishii desu ne.",meaning:"Masakan ini enak ya."},
    {jp:"日本語の勉強は大変ですね。",kana:"にほんごのべんきょうはたいへんですね。",romaji:"Nihongo no benkyou wa taihen desu ne.",meaning:"Belajar bahasa Jepang berat ya."},
    {jp:"もう十二月ですね。一年が早いですね。",kana:"もうじゅうにがつですね。いちねんがはやいですね。",romaji:"Mou juunigatsu desu ne. Ichinen ga hayai desu ne.",meaning:"Sudah Desember ya. Setahun cepat ya."},
    {jp:"あの映画、面白かったですね。",kana:"あのえいが、おもしろかったですね。",romaji:"Ano eiga, omoshirokatta desu ne.",meaning:"Film itu seru ya."}
  ]}]},

  {id:"GR-N5-35",level:"N5",title:"～よ",summary:"Partikel akhir kalimat untuk memberitahu informasi baru atau menekankan sesuatu kepada pendengar.",groups:[{name:"～よ",description:"Ditambahkan di akhir kalimat untuk memberi tahu atau menegaskan.",sentences:[
    {jp:"この店のケーキはおいしいですよ。",kana:"このみせのけーきはおいしいですよ。",romaji:"Kono mise no keeki wa oishii desu yo.",meaning:"Kue di toko ini enak lho."},
    {jp:"明日は休みですよ。知らなかったんですか。",kana:"あしたはやすみですよ。しらなかったんですか。",romaji:"Ashita wa yasumi desu yo. Shiranakatta n desu ka.",meaning:"Besok libur lho. Nggak tahu ya?"},
    {jp:"もう遅いですよ。早く寝たほうがいいですよ。",kana:"もうおそいですよ。はやくねたほうがいいですよ。",romaji:"Mou osoi desu yo. Hayaku neta hou ga ii desu yo.",meaning:"Sudah malam lho. Sebaiknya cepat tidur."},
    {jp:"そのかばん、すごくかわいいですよ。",kana:"そのかばん、すごくかわいいですよ。",romaji:"Sono kaban, sugoku kawaii desu yo.",meaning:"Tas itu lucu banget lho."},
    {jp:"駅はこっちですよ。",kana:"えきはこっちですよ。",romaji:"Eki wa kocchi desu yo.",meaning:"Stasiunnya ke sini lho."}
  ]}]},

  {id:"GR-N5-36",level:"N5",title:"～てください / ～ないでください",summary:"Pola permintaan. ～てください (tolong lakukan), ～ないでください (tolong jangan).",groups:[
    {name:"～てください",description:"Verb bentuk -te + ください. Meminta seseorang melakukan sesuatu.",sentences:[
      {jp:"もう一度言ってください。",kana:"もういちどいってください。",romaji:"Mou ichido itte kudasai.",meaning:"Tolong bilang sekali lagi."},
      {jp:"ここに住所を書いてください。",kana:"ここにじゅうしょをかいてください。",romaji:"Koko ni juusho o kaite kudasai.",meaning:"Tolong tulis alamat di sini."},
      {jp:"ゆっくり話してください。",kana:"ゆっくりはなしてください。",romaji:"Yukkuri hanashite kudasai.",meaning:"Tolong bicara pelan-pelan."},
      {jp:"すみません、窓を開けてください。",kana:"すみません、まどをあけてください。",romaji:"Sumimasen, mado o akete kudasai.",meaning:"Maaf, tolong buka jendelanya."},
      {jp:"レポートは金曜日までに出してください。",kana:"れぽーとはきんようびまでにだしてください。",romaji:"Repooto wa kinyoubi made ni dashite kudasai.",meaning:"Tolong kumpulkan laporan sebelum Jumat."}
    ]},
    {name:"～ないでください",description:"Verb bentuk -nai + でください. Meminta jangan melakukan sesuatu.",sentences:[
      {jp:"ここで写真を撮らないでください。",kana:"ここでしゃしんをとらないでください。",romaji:"Koko de shashin o toranaide kudasai.",meaning:"Tolong jangan foto di sini."},
      {jp:"授業中にスマホを使わないでください。",kana:"じゅぎょうちゅうにすまほをつかわないでください。",romaji:"Jugyouchuu ni sumaho o tsukawanaide kudasai.",meaning:"Tolong jangan pakai HP saat pelajaran."},
      {jp:"ここにゴミを捨てないでください。",kana:"ここにごみをすてないでください。",romaji:"Koko ni gomi o sutenaide kudasai.",meaning:"Tolong jangan buang sampah di sini."},
      {jp:"心配しないでください。大丈夫です。",kana:"しんぱいしないでください。だいじょうぶです。",romaji:"Shinpai shinaide kudasai. Daijoubu desu.",meaning:"Tolong jangan khawatir. Tidak apa-apa."},
      {jp:"まだ帰らないでください。もう少し話しましょう。",kana:"まだかえらないでください。もうすこしはなしましょう。",romaji:"Mada kaeranaide kudasai. Mou sukoshi hanashimashou.",meaning:"Jangan pulang dulu. Ayo ngobrol lagi."}
    ]}
  ]},

  {id:"GR-N5-37",level:"N5",title:"～ています",summary:"Pola untuk menyatakan kegiatan sedang berlangsung atau keadaan hasil suatu aksi.",groups:[{name:"～ています",description:"Verb bentuk -te + います. Sedang melakukan / keadaan.",sentences:[
    {jp:"今、音楽を聴いています。",kana:"いま、おんがくをきいています。",romaji:"Ima, ongaku o kiite imasu.",meaning:"Sekarang sedang mendengarkan musik."},
    {jp:"姉は東京に住んでいます。",kana:"あねはとうきょうにすんでいます。",romaji:"Ane wa Toukyou ni sunde imasu.",meaning:"Kakak tinggal di Tokyo."},
    {jp:"窓が開いています。閉めましょうか。",kana:"まどがあいています。しめましょうか。",romaji:"Mado ga aite imasu. Shimemashou ka.",meaning:"Jendelanya terbuka. Mau saya tutup?"},
    {jp:"彼はまだ寝ています。",kana:"かれはまだねています。",romaji:"Kare wa mada nete imasu.",meaning:"Dia masih tidur."},
    {jp:"このブランドのバッグを持っています。",kana:"このぶらんどのばっぐをもっています。",romaji:"Kono burando no baggu o motte imasu.",meaning:"Saya punya tas merek ini."}
  ]}]},

  {id:"GR-N5-38",level:"N5",title:"～てはいけません",summary:"Pola larangan. Artinya 'tidak boleh ~' atau 'dilarang ~'.",groups:[{name:"～てはいけません",description:"Verb bentuk -te + はいけません. Melarang suatu tindakan.",sentences:[
    {jp:"ここでタバコを吸ってはいけません。",kana:"ここでたばこをすってはいけません。",romaji:"Koko de tabako o sutte wa ikemasen.",meaning:"Tidak boleh merokok di sini."},
    {jp:"試験中に辞書を使ってはいけません。",kana:"しけんちゅうにじしょをつかってはいけません。",romaji:"Shikenchuu ni jisho o tsukatte wa ikemasen.",meaning:"Tidak boleh pakai kamus saat ujian."},
    {jp:"図書館で大きい声で話してはいけません。",kana:"としょかんでおおきいこえではなしてはいけません。",romaji:"Toshokan de ookii koe de hanashite wa ikemasen.",meaning:"Tidak boleh bicara keras di perpustakaan."},
    {jp:"この薬は子供に飲ませてはいけません。",kana:"このくすりはこどもにのませてはいけません。",romaji:"Kono kusuri wa kodomo ni nomasete wa ikemasen.",meaning:"Obat ini tidak boleh diberikan ke anak-anak."},
    {jp:"赤信号で渡ってはいけません。",kana:"あかしんごうでわたってはいけません。",romaji:"Akashingou de watatte wa ikemasen.",meaning:"Tidak boleh menyeberang saat lampu merah."}
  ]}]},

  {id:"GR-N5-39",level:"N5",title:"～てもいいですか",summary:"Pola untuk meminta izin. Artinya 'bolehkah saya ~?'.",groups:[{name:"～てもいいですか",description:"Verb bentuk -te + もいいですか. Meminta persetujuan.",sentences:[
    {jp:"エアコンをつけてもいいですか。",kana:"えあこんをつけてもいいですか。",romaji:"Eakon o tsukete mo ii desu ka.",meaning:"Boleh saya nyalakan AC?"},
    {jp:"ここに座ってもいいですか。",kana:"ここにすわってもいいですか。",romaji:"Koko ni suwatte mo ii desu ka.",meaning:"Boleh saya duduk di sini?"},
    {jp:"質問してもいいですか。",kana:"しつもんしてもいいですか。",romaji:"Shitsumon shite mo ii desu ka.",meaning:"Boleh saya bertanya?"},
    {jp:"この本を借りてもいいですか。",kana:"このほんをかりてもいいですか。",romaji:"Kono hon o karite mo ii desu ka.",meaning:"Boleh saya pinjam buku ini?"},
    {jp:"明日、少し遅れてもいいですか。",kana:"あした、すこしおくれてもいいですか。",romaji:"Ashita, sukoshi okurete mo ii desu ka.",meaning:"Besok boleh saya telat sedikit?"}
  ]}]},

  {id:"GR-N5-40",level:"N5",title:"～て (sambung kalimat)",summary:"Bentuk -te untuk menyambungkan dua kalimat atau lebih menjadi satu.",groups:[{name:"～て",description:"Verb -te menghubungkan aksi berurutan atau paralel.",sentences:[
    {jp:"朝起きて、顔を洗って、朝ご飯を食べます。",kana:"あさおきて、かおをあらって、あさごはんをたべます。",romaji:"Asa okite, kao o aratte, asagohan o tabemasu.",meaning:"Pagi bangun, cuci muka, makan sarapan."},
    {jp:"図書館に行って、本を返して、新しい本を借りました。",kana:"としょかんにいって、ほんをかえして、あたらしいほんをかりました。",romaji:"Toshokan ni itte, hon o kaeshite, atarashii hon o karimashita.",meaning:"Pergi ke perpus, kembalikan buku, pinjam buku baru."},
    {jp:"このカフェは安くて、おいしくて、雰囲気もいいです。",kana:"このかふぇはやすくて、おいしくて、ふんいきもいいです。",romaji:"Kono kafe wa yasukute, oishikute, fun'iki mo ii desu.",meaning:"Kafe ini murah, enak, suasananya juga bagus."},
    {jp:"電車に乗って、三つ目の駅で降りてください。",kana:"でんしゃにのって、みっつめのえきでおりてください。",romaji:"Densha ni notte, mittsume no eki de orite kudasai.",meaning:"Naik kereta, turun di stasiun ketiga."},
    {jp:"友達に会って、一緒にご飯を食べました。",kana:"ともだちにあって、いっしょにごはんをたべました。",romaji:"Tomodachi ni atte, issho ni gohan o tabemashita.",meaning:"Ketemu teman, makan bareng."}
  ]}]},

  {id:"GR-N5-41",level:"N5",title:"～てから",summary:"Pola untuk menyatakan urutan 'setelah melakukan ~'. Aksi pertama selesai dulu.",groups:[{name:"～てから",description:"Verb bentuk -te + から. Setelah ~ baru ~.",sentences:[
    {jp:"手を洗ってから、ご飯を食べます。",kana:"てをあらってから、ごはんをたべます。",romaji:"Te o aratte kara, gohan o tabemasu.",meaning:"Setelah cuci tangan, baru makan."},
    {jp:"日本に来てから、寿司が好きになりました。",kana:"にほんにきてから、すしがすきになりました。",romaji:"Nihon ni kite kara, sushi ga suki ni narimashita.",meaning:"Setelah datang ke Jepang, jadi suka sushi."},
    {jp:"宿題をしてから、ゲームをします。",kana:"しゅくだいをしてから、げーむをします。",romaji:"Shukudai o shite kara, geemu o shimasu.",meaning:"Setelah ngerjain PR, baru main game."},
    {jp:"卒業してから、何をしますか。",kana:"そつぎょうしてから、なにをしますか。",romaji:"Sotsugyou shite kara, nani o shimasu ka.",meaning:"Setelah lulus, mau ngapain?"},
    {jp:"シャワーを浴びてから、出かけます。",kana:"しゃわーをあびてから、でかけます。",romaji:"Shawaa o abite kara, dekakemasu.",meaning:"Setelah mandi, baru keluar."}
  ]}]},

  {id:"GR-N5-42",level:"N5",title:"～たことがあります",summary:"Pola untuk menyatakan pengalaman. Artinya 'pernah ~'.",groups:[{name:"～たことがあります",description:"Verb bentuk -ta + ことがあります.",sentences:[
    {jp:"富士山に登ったことがあります。",kana:"ふじさんにのぼったことがあります。",romaji:"Fujisan ni nobotta koto ga arimasu.",meaning:"Saya pernah mendaki Gunung Fuji."},
    {jp:"納豆を食べたことがありますか。",kana:"なっとうをたべたことがありますか。",romaji:"Nattou o tabeta koto ga arimasu ka.",meaning:"Pernah makan natto?"},
    {jp:"着物を着たことがありません。",kana:"きものをきたことがありません。",romaji:"Kimono o kita koto ga arimasen.",meaning:"Belum pernah pakai kimono."},
    {jp:"一人で海外旅行に行ったことがあります。",kana:"ひとりでかいがいりょこうにいったことがあります。",romaji:"Hitori de kaigai ryokou ni itta koto ga arimasu.",meaning:"Pernah jalan-jalan ke luar negeri sendiri."},
    {jp:"その映画は三回見たことがあります。",kana:"そのえいがはさんかいみたことがあります。",romaji:"Sono eiga wa sankai mita koto ga arimasu.",meaning:"Film itu sudah pernah nonton tiga kali."}
  ]}]},

  {id:"GR-N5-43",level:"N5",title:"～たり～たり",summary:"Pola untuk menyebutkan beberapa kegiatan sebagai contoh. Artinya 'melakukan ~ dan ~ (dll)'.",groups:[{name:"～たり～たり",description:"Verb -ta + り untuk menyebut contoh kegiatan.",sentences:[
    {jp:"休みの日は映画を見たり、散歩したりします。",kana:"やすみのひはえいがをみたり、さんぽしたりします。",romaji:"Yasumi no hi wa eiga o mitari, sanpo shitari shimasu.",meaning:"Hari libur nonton film, jalan-jalan, dsb."},
    {jp:"週末は料理を作ったり、友達と遊んだりします。",kana:"しゅうまつはりょうりをつくったり、ともだちとあそんだりします。",romaji:"Shuumatsu wa ryouri o tsukuttari, tomodachi to asondari shimasu.",meaning:"Akhir pekan masak, main sama teman, dsb."},
    {jp:"日本語の勉強は漢字を書いたり、ドラマを見たりしています。",kana:"にほんごのべんきょうはかんじをかいたり、どらまをみたりしています。",romaji:"Nihongo no benkyou wa kanji o kaitari, dorama o mitari shite imasu.",meaning:"Belajar bahasa Jepang: nulis kanji, nonton drama, dsb."},
    {jp:"旅行中は写真を撮ったり、お土産を買ったりしました。",kana:"りょこうちゅうはしゃしんをとったり、おみやげをかったりしました。",romaji:"Ryokouchuu wa shashin o tottari, omiyage o kattari shimashita.",meaning:"Selama perjalanan, foto-foto, beli oleh-oleh, dll."},
    {jp:"天気が良かったり悪かったりします。",kana:"てんきがよかったりわるかったりします。",romaji:"Tenki ga yokattari warukattari shimasu.",meaning:"Cuacanya kadang bagus kadang jelek."}
  ]}]},

  {id:"GR-N5-44",level:"N5",title:"～ましょうか",summary:"Pola untuk menawarkan bantuan. Artinya 'mau saya ~kan?' atau 'bagaimana kalau saya ~?'.",groups:[{name:"～ましょうか",description:"Verb -masu stem + ましょうか. Menawarkan tindakan.",sentences:[
    {jp:"荷物を持ちましょうか。",kana:"にもつをもちましょうか。",romaji:"Nimotsu o mochimashou ka.",meaning:"Mau saya bawakan barangnya?"},
    {jp:"窓を閉めましょうか。",kana:"まどをしめましょうか。",romaji:"Mado o shimemashou ka.",meaning:"Mau saya tutup jendelanya?"},
    {jp:"駅まで送りましょうか。",kana:"えきまでおくりましょうか。",romaji:"Eki made okurimashou ka.",meaning:"Mau saya antar ke stasiun?"},
    {jp:"何か飲み物を買いましょうか。",kana:"なにかのみものをかいましょうか。",romaji:"Nanika nomimono o kaimashou ka.",meaning:"Mau saya belikan minuman?"},
    {jp:"タクシーを呼びましょうか。",kana:"たくしーをよびましょうか。",romaji:"Takushii o yobimashou ka.",meaning:"Mau saya panggilkan taksi?"}
  ]}]},

  {id:"GR-N5-45",level:"N5",title:"～たいです",summary:"Pola untuk menyatakan keinginan melakukan sesuatu. Artinya 'ingin ~'.",groups:[{name:"～たいです",description:"Verb -masu stem + たいです. Hanya untuk orang pertama.",sentences:[
    {jp:"いつか日本に住みたいです。",kana:"いつかにほんにすみたいです。",romaji:"Itsuka nihon ni sumitai desu.",meaning:"Suatu hari ingin tinggal di Jepang."},
    {jp:"今夜はピザが食べたいです。",kana:"こんやはぴざがたべたいです。",romaji:"Kon'ya wa piza ga tabetai desu.",meaning:"Malam ini ingin makan pizza."},
    {jp:"もっと日本語が話せるようになりたいです。",kana:"もっとにほんごがはなせるようになりたいです。",romaji:"Motto nihongo ga hanaseru you ni naritai desu.",meaning:"Ingin bisa bicara bahasa Jepang lebih lancar."},
    {jp:"週末はどこにも行きたくないです。",kana:"しゅうまつはどこにもいきたくないです。",romaji:"Shuumatsu wa doko ni mo ikitakunai desu.",meaning:"Akhir pekan nggak mau ke mana-mana."},
    {jp:"夏休みに何をしたいですか。",kana:"なつやすみになにをしたいですか。",romaji:"Natsuyasumi ni nani o shitai desu ka.",meaning:"Libur musim panas mau ngapain?"}
  ]}]},

  {id:"GR-N5-46",level:"N5",title:"～に行きます (tujuan)",summary:"Pola untuk menyatakan tujuan pergi. Verb -masu stem + に行きます.",groups:[{name:"～に行きます",description:"Aktivitas + に + 行きます. Menyatakan tujuan pergi.",sentences:[
    {jp:"コンビニにお弁当を買いに行きます。",kana:"こんびににおべんとうをかいにいきます。",romaji:"Konbini ni obentou o kai ni ikimasu.",meaning:"Pergi ke minimarket beli bento."},
    {jp:"友達の家にゲームをしに行きます。",kana:"ともだちのいえにげーむをしにいきます。",romaji:"Tomodachi no ie ni geemu o shi ni ikimasu.",meaning:"Pergi ke rumah teman main game."},
    {jp:"海に泳ぎに行きませんか。",kana:"うみにおよぎにいきませんか。",romaji:"Umi ni oyogi ni ikimasen ka.",meaning:"Mau pergi berenang ke laut?"},
    {jp:"図書館に本を返しに行かなければなりません。",kana:"としょかんにほんをかえしにいかなければなりません。",romaji:"Toshokan ni hon o kaeshi ni ikanakereba narimasen.",meaning:"Harus pergi ke perpus kembalikan buku."},
    {jp:"毎週日曜日に教会に祈りに行きます。",kana:"まいしゅうにちようびにきょうかいにいのりにいきます。",romaji:"Maishuu nichiyoubi ni kyoukai ni inori ni ikimasu.",meaning:"Setiap Minggu pergi ke gereja berdoa."}
  ]}]},

  {id:"GR-N5-47",level:"N5",title:"～まえに",summary:"Pola untuk menyatakan 'sebelum ~'. Verb bentuk kamus + まえに.",groups:[{name:"～まえに",description:"Verb/kata benda + の + まえに. Sebelum melakukan sesuatu.",sentences:[
    {jp:"寝るまえに、歯を磨きます。",kana:"ねるまえに、はをみがきます。",romaji:"Neru mae ni, ha o migakimasu.",meaning:"Sebelum tidur, gosok gigi."},
    {jp:"出かけるまえに、天気予報を見ます。",kana:"でかけるまえに、てんきよほうをみます。",romaji:"Dekakeru mae ni, tenki yohou o mimasu.",meaning:"Sebelum keluar, cek ramalan cuaca."},
    {jp:"食事のまえに、手を洗ってください。",kana:"しょくじのまえに、てをあらってください。",romaji:"Shokuji no mae ni, te o aratte kudasai.",meaning:"Sebelum makan, tolong cuci tangan."},
    {jp:"日本に来るまえに、ひらがなを覚えました。",kana:"にほんにくるまえに、ひらがなをおぼえました。",romaji:"Nihon ni kuru mae ni, hiragana o oboemashita.",meaning:"Sebelum datang ke Jepang, sudah hafal hiragana."},
    {jp:"会議のまえに、資料を準備しなければなりません。",kana:"かいぎのまえに、しりょうをじゅんびしなければなりません。",romaji:"Kaigi no mae ni, shiryou o junbi shinakereba narimasen.",meaning:"Sebelum rapat, harus siapkan materi."}
  ]}]},

  {id:"GR-N5-48",level:"N5",title:"～ことができます",summary:"Pola untuk menyatakan kemampuan. Artinya 'bisa ~' atau 'mampu ~'.",groups:[{name:"～ことができます",description:"Verb bentuk kamus + ことができます.",sentences:[
    {jp:"日本語で電話することができます。",kana:"にほんごでんわすることができます。",romaji:"Nihongo de denwa suru koto ga dekimasu.",meaning:"Bisa menelepon dalam bahasa Jepang."},
    {jp:"このアプリで予約することができます。",kana:"このあぷりでよやくすることができます。",romaji:"Kono apuri de yoyaku suru koto ga dekimasu.",meaning:"Bisa reservasi lewat aplikasi ini."},
    {jp:"ピアノを弾くことができますか。",kana:"ぴあのをひくことができますか。",romaji:"Piano o hiku koto ga dekimasu ka.",meaning:"Bisa main piano?"},
    {jp:"漢字を五百字書くことができます。",kana:"かんじをごひゃくじかくことができます。",romaji:"Kanji o gohyakuji kaku koto ga dekimasu.",meaning:"Bisa menulis 500 kanji."},
    {jp:"一人で飛行機に乗ることができますか。",kana:"ひとりでひこうきにのることができますか。",romaji:"Hitori de hikouki ni noru koto ga dekimasu ka.",meaning:"Bisa naik pesawat sendirian?"}
  ]}]},

  {id:"GR-N5-49",level:"N5",title:"～ことです",summary:"Pola untuk mendefinisikan atau menjelaskan sesuatu. 'Yang penting adalah ~'.",groups:[{name:"～ことです",description:"Verb bentuk kamus + ことです. Definisi atau nasihat.",sentences:[
    {jp:"健康の秘訣はよく寝ることです。",kana:"けんこうのひけつはよくねることです。",romaji:"Kenkou no hiketsu wa yoku neru koto desu.",meaning:"Rahasianya sehat adalah tidur cukup."},
    {jp:"私の夢は世界を旅することです。",kana:"わたしのゆめはせかいをたびすることです。",romaji:"Watashi no yume wa sekai o tabi suru koto desu.",meaning:"Impian saya adalah keliling dunia."},
    {jp:"大切なのは毎日続けることです。",kana:"たいせつなのはまいにちつづけることです。",romaji:"Taisetsu na no wa mainichi tsuzukeru koto desu.",meaning:"Yang penting adalah melanjutkan setiap hari."},
    {jp:"日本語が上手になる方法は、たくさん話すことです。",kana:"にほんごがじょうずになるほうほうは、たくさんはなすことです。",romaji:"Nihongo ga jouzu ni naru houhou wa, takusan hanasu koto desu.",meaning:"Caranya jadi jago bahasa Jepang adalah banyak ngomong."},
    {jp:"この仕事で一番大変なことは早起きすることです。",kana:"このしごとでいちばんたいへんなことははやおきすることです。",romaji:"Kono shigoto de ichiban taihen na koto wa hayaoki suru koto desu.",meaning:"Hal paling berat di pekerjaan ini adalah bangun pagi."}
  ]}]},

  {id:"GR-N5-50",level:"N5",title:"どんな [名詞]",summary:"Kata tanya untuk menanyakan jenis atau sifat. Artinya 'seperti apa ~?'.",groups:[{name:"どんな [名詞]",description:"どんな + kata benda. Menanyakan karakteristik.",sentences:[
    {jp:"どんな音楽が好きですか。",kana:"どんなおんがくがすきですか。",romaji:"Donna ongaku ga suki desu ka.",meaning:"Suka musik seperti apa?"},
    {jp:"どんな仕事をしていますか。",kana:"どんなしごとをしていますか。",romaji:"Donna shigoto o shite imasu ka.",meaning:"Kerja di bidang apa?"},
    {jp:"東京はどんな所ですか。",kana:"とうきょうはどんなところですか。",romaji:"Toukyou wa donna tokoro desu ka.",meaning:"Tokyo itu tempat seperti apa?"},
    {jp:"どんな映画が見たいですか。",kana:"どんなえいががみたいですか。",romaji:"Donna eiga ga mitai desu ka.",meaning:"Mau nonton film seperti apa?"},
    {jp:"どんな人が好みですか。",kana:"どんなひとがこのみですか。",romaji:"Donna hito ga konomi desu ka.",meaning:"Tipe orang seperti apa yang kamu suka?"}
  ]}]},

  {id:"GR-N5-51",level:"N5",title:"どうですか",summary:"Kata tanya untuk menanyakan pendapat atau kesan. Artinya 'bagaimana?'.",groups:[{name:"どうですか",description:"Menanyakan pendapat, keadaan, atau kondisi.",sentences:[
    {jp:"日本の生活はどうですか。",kana:"にほんのせいかつはどうですか。",romaji:"Nihon no seikatsu wa dou desu ka.",meaning:"Kehidupan di Jepang bagaimana?"},
    {jp:"新しい仕事はどうですか。",kana:"あたらしいしごとはどうですか。",romaji:"Atarashii shigoto wa dou desu ka.",meaning:"Pekerjaan baru gimana?"},
    {jp:"この色はどうですか。",kana:"このいろはどうですか。",romaji:"Kono iro wa dou desu ka.",meaning:"Warna ini gimana?"},
    {jp:"体調はどうですか。",kana:"たいちょうはどうですか。",romaji:"Taichou wa dou desu ka.",meaning:"Kondisi badannya gimana?"},
    {jp:"来週の土曜日はどうですか。",kana:"らいしゅうのどようびはどうですか。",romaji:"Raishuu no doyoubi wa dou desu ka.",meaning:"Sabtu minggu depan gimana?"}
  ]}]},

  {id:"GR-N5-52",level:"N5",title:"何（なん / なに）",summary:"Kata tanya 'apa'. なん dipakai sebelum です/の/counter, なに untuk lainnya.",groups:[
    {name:"なん",description:"Dipakai sebelum です, の, dan kata yang dimulai d/t/n.",sentences:[
      {jp:"お名前は何ですか。",kana:"おなまえはなんですか。",romaji:"Onamae wa nan desu ka.",meaning:"Namanya siapa?"},
      {jp:"これは何の本ですか。",kana:"これはなんのほんですか。",romaji:"Kore wa nan no hon desu ka.",meaning:"Ini buku apa?"},
      {jp:"今、何時ですか。",kana:"いま、なんじですか。",romaji:"Ima, nanji desu ka.",meaning:"Sekarang jam berapa?"},
      {jp:"何人家族ですか。",kana:"なんにんかぞくですか。",romaji:"Nannin kazoku desu ka.",meaning:"Keluarganya berapa orang?"},
      {jp:"電話番号は何番ですか。",kana:"でんわばんごうはなんばんですか。",romaji:"Denwa bangou wa nanban desu ka.",meaning:"Nomor teleponnya berapa?"}
    ]},
    {name:"なに",description:"Dipakai dalam konteks lain (sebelum を, が, dll).",sentences:[
      {jp:"何を食べたいですか。",kana:"なにをたべたいですか。",romaji:"Nani o tabetai desu ka.",meaning:"Mau makan apa?"},
      {jp:"何が好きですか。",kana:"なにがすきですか。",romaji:"Nani ga suki desu ka.",meaning:"Suka apa?"},
      {jp:"昨日、何をしましたか。",kana:"きのう、なにをしましたか。",romaji:"Kinou, nani o shimashita ka.",meaning:"Kemarin ngapain?"},
      {jp:"何かありましたか。",kana:"なにかありましたか。",romaji:"Nanika arimashita ka.",meaning:"Ada apa?"},
      {jp:"冷蔵庫に何がありますか。",kana:"れいぞうこになにがありますか。",romaji:"Reizouko ni nani ga arimasu ka.",meaning:"Di kulkas ada apa?"}
    ]}
  ]},

  {id:"GR-N5-53",level:"N5",title:"どうやって",summary:"Kata tanya untuk menanyakan cara. Artinya 'bagaimana caranya ~?'.",groups:[{name:"どうやって",description:"Menanyakan metode atau cara melakukan sesuatu.",sentences:[
    {jp:"駅までどうやって行きますか。",kana:"えきまでどうやっていきますか。",romaji:"Eki made douyatte ikimasu ka.",meaning:"Ke stasiun caranya gimana?"},
    {jp:"この漢字はどうやって読みますか。",kana:"このかんじはどうやってよみますか。",romaji:"Kono kanji wa douyatte yomimasu ka.",meaning:"Kanji ini bacanya gimana?"},
    {jp:"日本語をどうやって勉強していますか。",kana:"にほんごをどうやってべんきょうしていますか。",romaji:"Nihongo o douyatte benkyou shite imasu ka.",meaning:"Belajar bahasa Jepangnya gimana?"},
    {jp:"このアプリはどうやって使いますか。",kana:"このあぷりはどうやってつかいますか。",romaji:"Kono apuri wa douyatte tsukaimasu ka.",meaning:"Aplikasi ini pakainya gimana?"},
    {jp:"お好み焼きはどうやって作りますか。",kana:"おこのみやきはどうやってつくりますか。",romaji:"Okonomiyaki wa douyatte tsukurimasu ka.",meaning:"Okonomiyaki bikinnya gimana?"}
  ]}]},

  {id:"GR-N5-54",level:"N5",title:"どれ / どの [名詞]",summary:"Kata tanya pilihan. どれ berdiri sendiri, どの + kata benda.",groups:[
    {name:"どれ",description:"Berdiri sendiri tanpa kata benda. Pilihan dari 3+.",sentences:[
      {jp:"どれが一番安いですか。",kana:"どれがいちばんやすいですか。",romaji:"Dore ga ichiban yasui desu ka.",meaning:"Yang mana paling murah?"},
      {jp:"どれにしますか。",kana:"どれにしますか。",romaji:"Dore ni shimasu ka.",meaning:"Mau pilih yang mana?"},
      {jp:"どれが田中さんの席ですか。",kana:"どれがたなかさんのせきですか。",romaji:"Dore ga Tanaka-san no seki desu ka.",meaning:"Yang mana kursi Tanaka?"},
      {jp:"ケーキがたくさんありますね。どれが好きですか。",kana:"けーきがたくさんありますね。どれがすきですか。",romaji:"Keeki ga takusan arimasu ne. Dore ga suki desu ka.",meaning:"Banyak kue ya. Suka yang mana?"},
      {jp:"三つの中でどれが一番おすすめですか。",kana:"みっつのなかでどれがいちばんおすすめですか。",romaji:"Mittsu no naka de dore ga ichiban osusume desu ka.",meaning:"Dari tiga ini, yang mana paling direkomendasikan?"}
    ]},
    {name:"どの [名詞]",description:"Diikuti kata benda. Menunjuk benda spesifik.",sentences:[
      {jp:"どの電車に乗りますか。",kana:"どのでんしゃにのりますか。",romaji:"Dono densha ni norimasu ka.",meaning:"Naik kereta yang mana?"},
      {jp:"どの色が好きですか。",kana:"どのいろがすきですか。",romaji:"Dono iro ga suki desu ka.",meaning:"Suka warna yang mana?"},
      {jp:"どの部屋が空いていますか。",kana:"どのへやがあいていますか。",romaji:"Dono heya ga aite imasu ka.",meaning:"Kamar yang mana yang kosong?"},
      {jp:"どの季節が一番好きですか。",kana:"どのきせつがいちばんすきですか。",romaji:"Dono kisetsu ga ichiban suki desu ka.",meaning:"Musim mana yang paling disukai?"},
      {jp:"どのレストランに行きましょうか。",kana:"どのれすとらんにいきましょうか。",romaji:"Dono resutoran ni ikimashou ka.",meaning:"Pergi ke restoran yang mana?"}
    ]}
  ]},

  {id:"GR-N5-55",level:"N5",title:"もう / まだ",summary:"Kata keterangan waktu. もう (sudah), まだ (masih/belum).",groups:[
    {name:"もう",description:"Menyatakan sesuatu sudah terjadi atau selesai.",sentences:[
      {jp:"もう昼ご飯を食べました。",kana:"もうひるごはんをたべました。",romaji:"Mou hirugohan o tabemashita.",meaning:"Sudah makan siang."},
      {jp:"宿題はもう終わりましたか。",kana:"しゅくだいはもうおわりましたか。",romaji:"Shukudai wa mou owarimashita ka.",meaning:"PR-nya sudah selesai?"},
      {jp:"もう遅いので帰ります。",kana:"もうおそいのでかえります。",romaji:"Mou osoi node kaerimasu.",meaning:"Sudah larut jadi pulang."},
      {jp:"チケットはもう売り切れです。",kana:"ちけっとはもううりきれです。",romaji:"Chiketto wa mou urikire desu.",meaning:"Tiketnya sudah habis."},
      {jp:"桜はもう散りましたか。",kana:"さくらはもうちりましたか。",romaji:"Sakura wa mou chirimashita ka.",meaning:"Bunga sakuranya sudah rontok?"}
    ]},
    {name:"まだ",description:"Menyatakan sesuatu belum terjadi atau masih berlangsung.",sentences:[
      {jp:"まだ決めていません。",kana:"まだきめていません。",romaji:"Mada kimete imasen.",meaning:"Belum memutuskan."},
      {jp:"外はまだ暗いです。",kana:"そとはまだくらいです。",romaji:"Soto wa mada kurai desu.",meaning:"Di luar masih gelap."},
      {jp:"レポートはまだ書いている途中です。",kana:"れぽーとはまだかいているとちゅうです。",romaji:"Repooto wa mada kaite iru tochuu desu.",meaning:"Laporannya masih sedang ditulis."},
      {jp:"まだ時間がありますから、ゆっくりしてください。",kana:"まだじかんがありますから、ゆっくりしてください。",romaji:"Mada jikan ga arimasu kara, yukkuri shite kudasai.",meaning:"Masih ada waktu, santai aja."},
      {jp:"彼女はまだ来ていません。",kana:"かのじょはまだきていません。",romaji:"Kanojo wa mada kite imasen.",meaning:"Dia belum datang."}
    ]}
  ]},

  {id:"GR-N5-56",level:"N5",title:"よく / だいたい / たくさん / 少し / あまり / ぜんぜん",summary:"Kata keterangan frekuensi dan kuantitas, dari paling sering/banyak ke paling jarang/sedikit.",groups:[{name:"頻度の副詞",description:"Tingkatan: よく > だいたい > たくさん > 少し > あまり(～ない) > ぜんぜん(～ない).",sentences:[
    {jp:"よく映画を見に行きます。",kana:"よくえいがをみにいきます。",romaji:"Yoku eiga o mi ni ikimasu.",meaning:"Sering pergi nonton film."},
    {jp:"だいたい七時に起きます。",kana:"だいたいしちじにおきます。",romaji:"Daitai shichiji ni okimasu.",meaning:"Biasanya bangun jam 7."},
    {jp:"今日はたくさん歩きました。",kana:"きょうはたくさんあるきました。",romaji:"Kyou wa takusan arukimashita.",meaning:"Hari ini banyak jalan kaki."},
    {jp:"日本語が少し話せます。",kana:"にほんごがすこしはなせます。",romaji:"Nihongo ga sukoshi hanasemasu.",meaning:"Bisa bicara bahasa Jepang sedikit."},
    {jp:"お酒はぜんぜん飲みません。",kana:"おさけはぜんぜんのみません。",romaji:"Osake wa zenzen nomimasen.",meaning:"Sama sekali tidak minum alkohol."}
  ]}]},

  {id:"GR-N5-57",level:"N5",title:"～とき",summary:"Pola untuk menyatakan 'ketika ~' atau 'saat ~'.",groups:[{name:"～とき",description:"Verb/adj/noun + とき. Menunjukkan waktu/situasi.",sentences:[
    {jp:"暇なとき、何をしますか。",kana:"ひまなとき、なにをしますか。",romaji:"Hima na toki, nani o shimasu ka.",meaning:"Saat senggang, ngapain?"},
    {jp:"子供のとき、よく海で遊びました。",kana:"こどものとき、よくうみであそびました。",romaji:"Kodomo no toki, yoku umi de asobimashita.",meaning:"Waktu kecil, sering main di laut."},
    {jp:"困ったとき、誰に相談しますか。",kana:"こまったとき、だれにそうだんしますか。",romaji:"Komatta toki, dare ni soudan shimasu ka.",meaning:"Saat kesulitan, curhat ke siapa?"},
    {jp:"日本に行くとき、パスポートが必要です。",kana:"にほんにいくとき、ぱすぽーとがひつようです。",romaji:"Nihon ni iku toki, pasupooto ga hitsuyou desu.",meaning:"Saat pergi ke Jepang, perlu paspor."},
    {jp:"寂しいとき、猫と遊びます。",kana:"さびしいとき、ねことあそびます。",romaji:"Sabishii toki, neko to asobimasu.",meaning:"Saat kesepian, main sama kucing."}
  ]}]},

  {id:"GR-N5-58",level:"N5",title:"～でしょう？",summary:"Pola untuk mengonfirmasi dugaan atau meminta persetujuan. Artinya '~ kan?'.",groups:[{name:"～でしょう？",description:"Kalimat + でしょう？ Meminta konfirmasi dengan nada santai.",sentences:[
    {jp:"明日も暑いでしょう？",kana:"あしたもあついでしょう？",romaji:"Ashita mo atsui deshou?",meaning:"Besok juga panas kan?"},
    {jp:"この映画、面白かったでしょう？",kana:"このえいが、おもしろかったでしょう？",romaji:"Kono eiga, omoshirokatta deshou?",meaning:"Film ini seru kan?"},
    {jp:"あの人、田中さんでしょう？",kana:"あのひと、たなかさんでしょう？",romaji:"Ano hito, Tanaka-san deshou?",meaning:"Orang itu Tanaka kan?"},
    {jp:"もう知っているでしょう？",kana:"もうしっているでしょう？",romaji:"Mou shitte iru deshou?",meaning:"Kamu sudah tahu kan?"},
    {jp:"来週のパーティー、来るでしょう？",kana:"らいしゅうのぱーてぃー、くるでしょう？",romaji:"Raishuu no paatii, kuru deshou?",meaning:"Pesta minggu depan, datang kan?"}
  ]}]},

  {id:"GR-N5-59",level:"N5",title:"どこ(へ/に)も / 何も / だれも",summary:"Pola negatif total. Dipakai dengan bentuk negatif. Artinya 'tidak ke mana pun / tidak apa pun / tidak siapa pun'.",groups:[{name:"～も + negatif",description:"Kata tanya + も + verb negatif = tidak sama sekali.",sentences:[
    {jp:"週末はどこにも行きませんでした。",kana:"しゅうまつはどこにもいきませんでした。",romaji:"Shuumatsu wa doko ni mo ikimasen deshita.",meaning:"Akhir pekan nggak ke mana-mana."},
    {jp:"冷蔵庫に何もありません。",kana:"れいぞうこになにもありません。",romaji:"Reizouko ni nani mo arimasen.",meaning:"Di kulkas nggak ada apa-apa."},
    {jp:"パーティーにだれも来ませんでした。",kana:"ぱーてぃーにだれもきませんでした。",romaji:"Paatii ni daremo kimasen deshita.",meaning:"Nggak ada siapa pun yang datang ke pesta."},
    {jp:"今日は何も食べたくないです。",kana:"きょうはなにもたべたくないです。",romaji:"Kyou wa nani mo tabetakunai desu.",meaning:"Hari ini nggak mau makan apa-apa."},
    {jp:"この部屋にはだれもいません。",kana:"このへやにはだれもいません。",romaji:"Kono heya ni wa daremo imasen.",meaning:"Di kamar ini nggak ada siapa pun."}
  ]}]},

  {id:"GR-N5-60",level:"N5",title:"どこか / 何か / だれか / いつか",summary:"Pola tidak tentu. Artinya 'di suatu tempat / sesuatu / seseorang / suatu saat'.",groups:[{name:"～か (tidak tentu)",description:"Kata tanya + か = sesuatu yang tidak spesifik.",sentences:[
    {jp:"どこかいいレストランを知っていますか。",kana:"どこかいいれすとらんをしっていますか。",romaji:"Dokoka ii resutoran o shitte imasu ka.",meaning:"Tahu restoran bagus di mana gitu?"},
    {jp:"何か飲みますか。",kana:"なにかのみますか。",romaji:"Nanika nomimasu ka.",meaning:"Mau minum sesuatu?"},
    {jp:"だれかに聞いてみましょう。",kana:"だれかにきいてみましょう。",romaji:"Dareka ni kiite mimashou.",meaning:"Coba tanya ke seseorang."},
    {jp:"いつか日本に住みたいです。",kana:"いつかにほんにすみたいです。",romaji:"Itsuka nihon ni sumitai desu.",meaning:"Suatu hari ingin tinggal di Jepang."},
    {jp:"何か面白いことはありませんか。",kana:"なにかおもしろいことはありませんか。",romaji:"Nanika omoshiroi koto wa arimasen ka.",meaning:"Ada sesuatu yang menarik nggak?"}
  ]}]},

  {id:"GR-N5-61",level:"N5",title:"～時～分",summary:"Pola untuk menyatakan waktu. ～時 (jam) ～分 (menit).",groups:[{name:"～時～分",description:"Angka + 時 + angka + 分 untuk menyatakan jam.",sentences:[
    {jp:"会議は三時半に始まります。",kana:"かいぎはさんじはんにはじまります。",romaji:"Kaigi wa sanji han ni hajimarimasu.",meaning:"Rapat mulai jam setengah empat."},
    {jp:"毎朝六時四十五分に起きます。",kana:"まいあさろくじよんじゅうごふんにおきます。",romaji:"Maiasa rokuji yonjuugofun ni okimasu.",meaning:"Setiap pagi bangun jam 6:45."},
    {jp:"映画は七時十五分からです。",kana:"えいがはしちじじゅうごふんからです。",romaji:"Eiga wa shichiji juugofun kara desu.",meaning:"Filmnya mulai jam 7:15."},
    {jp:"今、午後二時二十分です。",kana:"いま、ごごにじにじゅっぷんです。",romaji:"Ima, gogo niji nijuppun desu.",meaning:"Sekarang jam 2:20 siang."},
    {jp:"バスは十分おきに来ます。",kana:"ばすはじゅっぷんおきにきます。",romaji:"Basu wa juppun oki ni kimasu.",meaning:"Bus datang setiap 10 menit."}
  ]}]},

  {id:"GR-N5-62",level:"N5",title:"何さい",summary:"Pola untuk menanyakan umur. なんさい = berapa tahun (umur)?",groups:[{name:"何さい",description:"何歳 (なんさい) untuk menanyakan usia.",sentences:[
    {jp:"お子さんは何歳ですか。",kana:"おこさんはなんさいですか。",romaji:"Okosan wa nansai desu ka.",meaning:"Anaknya umur berapa?"},
    {jp:"何歳から学校に入りますか。",kana:"なんさいからがっこうにはいりますか。",romaji:"Nansai kara gakkou ni hairimasu ka.",meaning:"Dari umur berapa masuk sekolah?"},
    {jp:"失礼ですが、おいくつですか。",kana:"しつれいですが、おいくつですか。",romaji:"Shitsurei desu ga, oikutsu desu ka.",meaning:"Maaf, berapa usia Anda? (sopan)"},
    {jp:"二十歳になったら、お酒が飲めます。",kana:"はたちになったら、おさけがのめます。",romaji:"Hatachi ni nattara, osake ga nomemasu.",meaning:"Kalau sudah 20 tahun, boleh minum alkohol."},
    {jp:"日本語を始めたのは何歳のときですか。",kana:"にほんごをはじめたのはなんさいのときですか。",romaji:"Nihongo o hajimeta no wa nansai no toki desu ka.",meaning:"Mulai belajar bahasa Jepang umur berapa?"}
  ]}]},

  {id:"GR-N5-63",level:"N5",title:"～と～とどちらが",summary:"Pola perbandingan dua hal. Artinya 'antara A dan B, mana yang lebih ~?'.",groups:[{name:"～と～とどちらが",description:"A と B と どちらが + adjective + ですか.",sentences:[
    {jp:"犬と猫とどちらが好きですか。",kana:"いぬとねことどちらがすきですか。",romaji:"Inu to neko to dochira ga suki desu ka.",meaning:"Anjing dan kucing, lebih suka mana?"},
    {jp:"電車とバスとどちらが便利ですか。",kana:"でんしゃとばすとどちらがべんりですか。",romaji:"Densha to basu to dochira ga benri desu ka.",meaning:"Kereta dan bus, mana yang lebih praktis?"},
    {jp:"夏と冬とどちらが好きですか。",kana:"なつとふゆとどちらがすきですか。",romaji:"Natsu to fuyu to dochira ga suki desu ka.",meaning:"Musim panas dan dingin, suka mana?"},
    {jp:"日本語と英語とどちらが難しいですか。",kana:"にほんごとえいごとどちらがむずかしいですか。",romaji:"Nihongo to eigo to dochira ga muzukashii desu ka.",meaning:"Bahasa Jepang dan Inggris, mana yang lebih susah?"},
    {jp:"コーヒーと紅茶とどちらがいいですか。",kana:"こーひーとこうちゃとどちらがいいですか。",romaji:"Koohii to koucha to dochira ga ii desu ka.",meaning:"Kopi dan teh, mau yang mana?"}
  ]}]},

  {id:"GR-N5-64",level:"N5",title:"～でどれがいちばん～",summary:"Pola superlatif. Artinya 'di antara ~, mana yang paling ~?'.",groups:[{name:"～でどれがいちばん～",description:"Kategori + で + どれ/何/どこ + がいちばん + adjective + ですか.",sentences:[
    {jp:"果物の中で何がいちばん好きですか。",kana:"くだもののなかでなにがいちばんすきですか。",romaji:"Kudamono no naka de nani ga ichiban suki desu ka.",meaning:"Di antara buah, paling suka apa?"},
    {jp:"日本の食べ物で何がいちばんおいしいですか。",kana:"にほんのたべもので何がいちばんおいしいですか。",romaji:"Nihon no tabemono de nani ga ichiban oishii desu ka.",meaning:"Makanan Jepang, mana yang paling enak?"},
    {jp:"クラスで誰がいちばん背が高いですか。",kana:"くらすでだれがいちばんせがたかいですか。",romaji:"Kurasu de dare ga ichiban se ga takai desu ka.",meaning:"Di kelas, siapa yang paling tinggi?"},
    {jp:"季節の中でいつがいちばん好きですか。",kana:"きせつのなかでいつがいちばんすきですか。",romaji:"Kisetsu no naka de itsu ga ichiban suki desu ka.",meaning:"Di antara musim, kapan yang paling disukai?"},
    {jp:"この三つの中でどれがいちばん安いですか。",kana:"このみっつのなかでどれがいちばんやすいですか。",romaji:"Kono mittsu no naka de dore ga ichiban yasui desu ka.",meaning:"Dari tiga ini, yang mana paling murah?"}
  ]}]},

  // ── GR-N4-01: 〜し〜し ──
  {id:"GR-N4-01",level:"N4",title:"〜し〜し",summary:"Menyebutkan beberapa alasan atau kondisi sekaligus untuk mendukung suatu kesimpulan. Nuansa: 'selain itu juga..., dan lagi...'.",groups:[{name:"〜し〜し",description:"[Kalimat A] し、[Kalimat B] し、[Kesimpulan]. Bisa dipakai untuk alasan positif maupun negatif.",sentences:[
    {jp:"この街は駅から近いし、スーパーもあるし、住むには最高の場所だよ。",kana:"このまちはえきからちかいし、すーぱーもあるし、すむにはさいこうのばしょだよ。",romaji:"Kono machi wa eki kara chikai shi, suupaa mo aru shi, sumu ni wa saikou no basho da yo.",meaning:"Kota ini dekat dari stasiun, ada supermarket juga — pokoknya tempat terbaik buat ditinggali."},
    {jp:"彼女は仕事もできるし、気遣いもできるし、職場のみんなに好かれている。",kana:"かのじょはしごともできるし、きづかいもできるし、しょくばのみんなにすかれている。",romaji:"Kanojo wa shigoto mo dekiru shi, kizukai mo dekiru shi, shokuba no minna ni sukarete iru.",meaning:"Dia kompeten di kerjaan, perhatian juga — pantas semua orang di kantor suka sama dia."},
    {jp:"今日は朝から遅刻するし、会議でミスするし、本当に最悪な一日だった。",kana:"きょうはあさからちこくするし、かいぎでみすするし、ほんとうにさいあくないちにちだった。",romaji:"Kyou wa asa kara chikoku suru shi, kaigi de misu suru shi, hontou ni saiaku na ichinichi datta.",meaning:"Hari ini dari pagi telat, terus salah di rapat — beneran hari paling buruk seumur hidup."},
    {jp:"このカフェ、雰囲気もいいし、値段も手ごろだし、また来たいな。",kana:"このかふぇ、ふんいきもいいし、ねだんもてごろだし、またきたいな。",romaji:"Kono kafe, fun'iki mo ii shi, nedan mo tegoro da shi, mata kitai na.",meaning:"Kafe ini suasananya enak, harganya juga terjangkau — pengen balik lagi."},
    {jp:"疲れてるし、明日も早いし、今夜は早めに寝ます。",kana:"つかれてるし、あしたもはやいし、こんやははやめにねます。",romaji:"Tsukarete ru shi, ashita mo hayai shi, konya wa hayame ni nemasu.",meaning:"Capek, besok juga pagi-pagi — malam ini tidur lebih awal deh."}
  ]}]},

  // ── GR-N4-03: 〜んです ──
  {id:"GR-N4-03",level:"N4",title:"〜んです",summary:"Menjelaskan alasan, latar belakang suatu situasi, atau meminta penjelasan. Lebih personal dan natural daripada sekedar menyatakan fakta. Dalam percakapan santai sering disingkat 〜んだ.",groups:[{name:"〜んです",description:"[Kalimat] + んです／んだ。Dipakai saat memberikan penjelasan atau meminta alasan di balik sesuatu.",sentences:[
    {jp:"実は昨日、財布をなくしてしまったんです。",kana:"じつはきのう、さいふをなくしてしまったんです。",romaji:"Jitsu wa kinou, saifu o nakushite shimatta n desu.",meaning:"Sebenarnya kemarin saya kehilangan dompet."},
    {jp:"すみません、この書類の書き方がよくわからないんですが、教えていただけますか。",kana:"すみません、このしょるいのかきかたがよくわからないんですが、おしえていただけますか。",romaji:"Sumimasen, kono shorui no kakikata ga yoku wakaranai n desu ga, oshiete itadakemasu ka.",meaning:"Maaf, saya kurang paham cara mengisi dokumen ini — bisa tolong diajari?"},
    {jp:"最近ちょっと元気がないんだけど、どうしたの？",kana:"さいきんちょっとげんきがないんだけど、どうしたの？",romaji:"Saikin chotto genki ga nai n da kedo, doushita no?",meaning:"Belakangan kamu kelihatan kurang bersemangat — ada apa?"},
    {jp:"頭が痛いんです。薬、持っていますか。",kana:"あたまがいたいんです。くすり、もっていますか。",romaji:"Atama ga itai n desu. Kusuri, motte imasu ka.",meaning:"Kepala saya sakit. Kamu punya obat?"},
    {jp:"このボタン、押したら何が起きるんですか？",kana:"このぼたん、おしたらなにがおきるんですか？",romaji:"Kono botan, oshitara nani ga okiru n desu ka?",meaning:"Kalau tombol ini ditekan, emangnya terjadi apa?"}
  ]}]},

  // ── GR-N4-04: それで ──
  {id:"GR-N4-04",level:"N4",title:"それで",summary:"Menghubungkan sebab dan akibat secara alami. Dipakai di awal kalimat kedua untuk menunjukkan hasil dari situasi sebelumnya. Artinya 'makanya' atau 'jadi'.",groups:[{name:"それで",description:"[Situasi A]。それで、[Akibat B]。Urutan sebab → akibat, bukan akibat → sebab.",sentences:[
    {jp:"電車が止まってしまって。それで、こんなに遅くなりました。",kana:"でんしゃがとまってしまって。それで、こんなにおそくなりました。",romaji:"Densha ga tomatte shimatte. Sorede, konna ni osoku narimashita.",meaning:"Keretanya berhenti mendadak. Makanya jadi telat separah ini."},
    {jp:"昨日は全然眠れなかったんです。それで、今日はずっと頭がぼーっとしています。",kana:"きのうはぜんぜんねむれなかったんです。それで、きょうはずっとあたまがぼーっとしています。",romaji:"Kinou wa zenzen nemurenakatta n desu. Sorede, kyou wa zutto atama ga boo tto shite imasu.",meaning:"Kemarin sama sekali tidak bisa tidur. Makanya kepala saya kosong terus dari tadi."},
    {jp:"友達が急に仕事を辞めることになったんです。それで、みんなで送別会をすることになりました。",kana:"ともだちがきゅうにしごとをやめることになったんです。それで、みんなでそうべつかいをすることになりました。",romaji:"Tomodachi ga kyuu ni shigoto o yameru koto ni natta n desu. Sorede, minna de soubetsukai o suru koto ni narimashita.",meaning:"Teman saya tiba-tiba memutuskan berhenti kerja. Jadi kami semua sepakat bikin acara perpisahan."},
    {jp:"財布を家に忘れてきたんです。それで、昼ごはんが買えなくて困ってました。",kana:"さいふをいえにわすれてきたんです。それで、ひるごはんがかえなくてこまってました。",romaji:"Saifu o ie ni wasurete kita n desu. Sorede, hirugohan ga kaenakute komatte mashita.",meaning:"Dompet ketinggalan di rumah. Makanya saya bingung karena tidak bisa beli makan siang."},
    {jp:"あのカフェ、先月閉店したらしいですよ。それで、常連さんたちが行き場を失って困っているみたいです。",kana:"あのかふぇ、せんげつへいてんしたらしいですよ。それで、じょうれんさんたちがいきばをうしなってこまっているみたいです。",romaji:"Ano kafe, sengetsu heiten shita rashii desu yo. Sorede, jouren-san-tachi ga ikiba o ushinatte komatte iru mitai desu.",meaning:"Kafe itu sepertinya tutup bulan lalu. Makanya para pelanggan tetapnya pada bingung tidak punya tempat nongkrong."}
  ]}]},

  // ── GR-N4-05: 〜ので ──
  {id:"GR-N4-05",level:"N4",title:"〜ので",summary:"Menyatakan alasan dengan nada sopan dan objektif. Lebih halus dari 〜から dan sering dipakai dalam situasi formal atau kepada orang yang lebih senior.",groups:[{name:"〜ので",description:"[Alasan] + ので、[Hasil]. Nuansa: alasan yang disampaikan secara objektif, bukan pembelaan diri.",sentences:[
    {jp:"明日は大事な面接があるので、今日は早めに失礼します。",kana:"あしたはだいじなめんせつがあるので、きょうははやめにしつれいします。",romaji:"Ashita wa daiji na mensetsu ga aru no de, kyou wa hayame ni shitsurei shimasu.",meaning:"Besok ada interview penting, jadi hari ini saya permisi lebih awal."},
    {jp:"このあたりは工事中なので、別のルートをお使いください。",kana:"このあたりはこうじちゅうなので、べつのるーとをおつかいください。",romaji:"Kono atari wa kouchuu na no de, betsu no ruuto o otsukai kudasai.",meaning:"Area sekitar sini sedang dalam perbaikan, mohon gunakan jalur lain."},
    {jp:"少し体調が優れないので、今日の集まりは欠席させていただきます。",kana:"すこしたいちょうがすぐれないので、きょうのあつまりはけっせきさせていただきます。",romaji:"Sukoshi taichou ga sugurenai no de, kyou no atsumari wa kesseki sasete itadakimasu.",meaning:"Kondisi badan saya kurang baik, jadi izinkan saya untuk tidak hadir di pertemuan hari ini."},
    {jp:"ここは禁煙なので、喫煙は外でお願いします。",kana:"ここはきんえんなので、きつえんはそとでおねがいします。",romaji:"Koko wa kin'en na no de, kitsuen wa soto de onegai shimasu.",meaning:"Area ini bebas rokok, jadi mohon merokok di luar."},
    {jp:"混雑している時間帯なので、少しお待ちいただく場合がございます。",kana:"こんざつしているじかんたいなので、すこしおまちいただくばあいがございます。",romaji:"Konzatsu shite iru jikantai na no de, sukoshi omachi itadaku baai ga gozaimasu.",meaning:"Ini jam sibuk, sehingga mungkin Anda perlu menunggu sebentar."}
  ]}]},

  // ── GR-N4-06: 〜てあげる ──
  {id:"GR-N4-06",level:"N4",title:"〜てあげる",summary:"Melakukan sesuatu untuk orang lain — dari sudut pandang pembicara yang memberi bantuan. Nuansa: 'saya yang melakukan kebaikan untuk dia'. Hati-hati: terlalu sering dipakai bisa terkesan sombong.",groups:[{name:"〜てあげる",description:"[Verb-te] + あげる。Subjek = pembicara, penerima = orang lain.",sentences:[
    {jp:"荷物が重そうだったから、持ってあげたよ。",kana:"にもつがおもそうだったから、もってあげたよ。",romaji:"Nimotsu ga omosou datta kara, motte ageta yo.",meaning:"Kelihatannya barangnya berat, jadi aku bawain deh."},
    {jp:"妹が泣いていたので、好きなアイスを買ってあげた。",kana:"いもうとがないていたので、すきなあいすをかってあげた。",romaji:"Imouto ga naite ita no de, suki na aisu o katte ageta.",meaning:"Adik perempuan saya lagi nangis, jadi saya beliin es krim favoritnya."},
    {jp:"道に迷っている観光客に、地図アプリの使い方を教えてあげた。",kana:"みちにまよっているかんこうきゃくに、ちずあぷりのつかいかたをおしえてあげた。",romaji:"Michi ni mayotte iru kankoukyaku ni, chizu apuri no tsukaikata o oshiete ageta.",meaning:"Saya ajarin turis yang nyasar cara pakai aplikasi peta."},
    {jp:"友達の引っ越し、週末に手伝ってあげるつもり。",kana:"ともだちのひっこし、しゅうまつにてつだってあげるつもり。",romaji:"Tomodachi no hikkoshi, shuumatsu ni tetsudatte ageru tsumori.",meaning:"Rencananya mau bantu teman pindahan minggu ini."},
    {jp:"おじいちゃんのスマホの操作、ゆっくり教えてあげたら、すごく喜んでいた。",kana:"おじいちゃんのすまほのそうさ、ゆっくりおしえてあげたら、すごくよろこんでいた。",romaji:"Ojiichan no sumaho no sousa, yukkuri oshiete ageta ra, sugoku yorokonde ita.",meaning:"Pas saya ajarin kakek cara pakai smartphone pelan-pelan, dia senang banget."}
  ]}]},

  // ── GR-N4-07: 〜てくれる ──
  {id:"GR-N4-07",level:"N4",title:"〜てくれる",summary:"Orang lain melakukan sesuatu yang menguntungkan saya atau pihak saya. Nuansa: ada rasa terima kasih atau apresiasi dari pembicara.",groups:[{name:"〜てくれる",description:"[Verb-te] + くれる。Subjek = orang lain, penerima manfaat = pembicara atau pihaknya.",sentences:[
    {jp:"先輩が仕事のコツを丁寧に教えてくれた。",kana:"せんぱいがしごとのこつをていねいにおしえてくれた。",romaji:"Senpai ga shigoto no kotsu o teinei ni oshiete kureta.",meaning:"Senior saya dengan sabar mengajari saya cara-cara kerja yang perlu diketahui."},
    {jp:"誕生日に友達がサプライズでケーキを作ってくれて、泣きそうになった。",kana:"たんじょうびにともだちがさぷらいずでけーきをつくってくれて、なきそうになった。",romaji:"Tanjoubi ni tomodachi ga sapuraizu de keeki o tsukutte kurete, nakisou ni natta.",meaning:"Di ulang tahun saya, teman bikin kue secara kejutan — hampir nangis rasanya."},
    {jp:"突然の大雨のとき、隣の人が傘を貸してくれた。",kana:"とつぜんのおおあめのとき、となりのひとがかさをかしてくれた。",romaji:"Totsuzen no ooame no toki, tonari no hito ga kasa o kashite kureta.",meaning:"Waktu hujan deras tiba-tiba, orang di sebelah saya mau meminjamkan payungnya."},
    {jp:"プレゼンが不安だったんだけど、チームのみんなが応援してくれたから頑張れた。",kana:"ぷれぜんがふあんだったんだけど、ちーむのみんなができてくれたからがんばれた。",romaji:"Purezen ga fuan datta n da kedo, chiimu no minna ga ouen shite kureta kara ganbareta.",meaning:"Sebetulnya deg-degan soal presentasinya, tapi berkat semua teman tim menyemangati, saya bisa tampil maksimal."},
    {jp:"子供のころ、母が毎晩絵本を読んでくれていたのをよく覚えている。",kana:"こどものころ、ははがまいばんえほんをよんでくれていたのをよくおぼえている。",romaji:"Kodomo no koro, haha ga maiban ehon o yonde kurete ita no o yoku oboete iru.",meaning:"Saya masih ingat jelas waktu kecil, ibu selalu bacain buku cerita setiap malam."}
  ]}]},

  // ── GR-N4-09: 〜てくれませんか / 〜てくださいませんか / 〜ていただけませんか ──
  {id:"GR-N4-09",level:"N4",title:"〜てくれませんか / 〜てくださいませんか / 〜ていただけませんか",summary:"Tiga tingkatan permintaan sopan. Semakin panjang, semakin formal dan hormat.",groups:[
    {name:"〜てくれませんか",description:"Permintaan kasual-sopan kepada teman atau rekan setara. Lebih lembut dari 〜てください.",sentences:[
      {jp:"ちょっとこの荷物、持ってくれませんか。両手がふさがってて。",kana:"ちょっとこのにもつ、もってくれませんか。りょうてがふさがってて。",romaji:"Chotto kono nimotsu, motte kuremasen ka. Ryoute ga fusagatte te.",meaning:"Bisa tolong pegangin barang ini sebentar? Kedua tangan saya penuh nih."},
      {jp:"後でこのファイル、送ってくれませんか。",kana:"あとでこのふぁいる、おくってくれませんか。",romaji:"Ato de kono fairu, okutte kuremasen ka.",meaning:"Nanti filenya bisa di-send ke saya?"},
      {jp:"写真を撮ってくれませんか？記念に。",kana:"しゃしんをとってくれませんか？きねんに。",romaji:"Shashin o totte kuremasen ka? Kinen ni.",meaning:"Bisa tolong fotoin saya? Buat kenang-kenangan."},
      {jp:"もう一回、ゆっくり言ってくれませんか。聞き取れなくて。",kana:"もういっかい、ゆっくりいってくれませんか。ききとれなくて。",romaji:"Mou ikkai, yukkuri itte kuremasen ka. Kikitorenakute.",meaning:"Bisa diulangi sekali lagi pelan-pelan? Saya kurang tangkap tadi."},
      {jp:"少しだけ手伝ってくれませんか。一人じゃ無理で。",kana:"すこしだけてつだってくれませんか。ひとりじゃむりで。",romaji:"Sukoshi dake tetsudatte kuremasen ka. Hitori ja muri de.",meaning:"Bisa bantu sebentar? Kalau sendirian saya tidak kuat."}
    ]},
    {name:"〜てくださいませんか",description:"Permintaan sopan kepada atasan, pelanggan, atau orang yang lebih tua.",sentences:[
      {jp:"こちらの書類、ご確認してくださいませんか。",kana:"こちらのしょるい、ごかくにんしてくださいませんか。",romaji:"Kochira no shorui, go-kakunin shite kudasaimasen ka.",meaning:"Apakah Anda berkenan memeriksa dokumen ini?"},
      {jp:"もう少し声を大きくしてくださいませんか。後ろまで聞こえていないようです。",kana:"もうすこしこえをおおきくしてくださいませんか。うしろまできこえていないようです。",romaji:"Mou sukoshi koe o ookiku shite kudasaimasen ka. Ushiro made kikoete inai you desu.",meaning:"Bisakah Anda berbicara sedikit lebih keras? Sepertinya tidak terdengar sampai bagian belakang."},
      {jp:"少し席を詰めてくださいませんか。まだ座れない方がいらっしゃいますので。",kana:"すこしせきをつめてくださいませんか。まだすわれないかたがいらっしゃいますので。",romaji:"Sukoshi seki o tsumete kudasaimasen ka. Mada suwarenai kata ga irasshaimasu no de.",meaning:"Bisakah Anda menggeser sedikit? Masih ada yang belum kebagian tempat duduk."},
      {jp:"このメールを関係者に転送してくださいませんか。",kana:"このめーるをかんけいしゃにてんそうしてくださいませんか。",romaji:"Kono meeru o kankeisha ni tensou shite kudasaimasen ka.",meaning:"Bisakah Anda meneruskan email ini kepada pihak terkait?"},
      {jp:"明日の朝までに報告書を提出してくださいませんか。",kana:"あしたのあさまでにほうこくしょをていしゅつしてくださいませんか。",romaji:"Ashita no asa made ni houkokusho o teishutsu shite kudasaimasen ka.",meaning:"Bisakah Anda mengumpulkan laporan ini sebelum besok pagi?"}
    ]},
    {name:"〜ていただけませんか",description:"Permintaan paling formal dan hormat. Umum dipakai dalam konteks bisnis atau saat meminta sesuatu yang agak merepotkan.",sentences:[
      {jp:"資料のご確認をしていただけませんか。",kana:"しりょうのごかくにんをしていただけませんか。",romaji:"Shiryou no go-kakunin o shite itadakemasen ka.",meaning:"Apakah Anda berkenan memeriksa materi ini?"},
      {jp:"会議の日程を変更していただけませんか。急で大変申し訳ないのですが。",kana:"かいぎのにっていをへんこうしていただけませんか。きゅうでたいへんもうしわけないのですが。",romaji:"Kaigi no nittei o henkou shite itadakemasen ka. Kyuu de taihen moushiwakenai no desu ga.",meaning:"Apakah jadwal rapat bisa diubah? Maaf sekali meminta mendadak seperti ini."},
      {jp:"こちらの件について、ご意見をいただけませんか。",kana:"こちらのけんについて、ごいけんをいただけませんか。",romaji:"Kochira no ken ni tsuite, go-iken o itadakemasen ka.",meaning:"Apakah Anda berkenan memberikan pendapat mengenai hal ini?"},
      {jp:"部長、少しお時間をとっていただけませんか。折り入ってご相談があるのですが。",kana:"ぶちょう、すこしおじかんをとっていただけませんか。おりいってごそうだんがあるのですが。",romaji:"Buchou, sukoshi o-jikan o totte itadakemasen ka. Oriitte go-soudan ga aru no desu ga.",meaning:"Pak/Bu Manajer, bisakah meluangkan sedikit waktu? Ada hal penting yang ingin saya konsultasikan."},
      {jp:"ご不便をおかけして大変恐縮ですが、もう少々お待ちいただけませんか。",kana:"ごふべんをおかけしてたいへんきょうしゅくですが、もうしょうしょうおまちいただけませんか。",romaji:"Go-fuben o okake shite taihen kyoushuku desu ga, mou shoushou omachi itadakemasen ka.",meaning:"Saya sangat minta maaf atas ketidaknyamanannya, apakah Anda bersedia menunggu sebentar lagi?"}
    ]}
  ]},

  // ── GR-N4-18: 見える / 聞こえる ──
  {id:"GR-N4-18",level:"N4",title:"見える / 聞こえる",summary:"Menyatakan kemampuan melihat atau mendengar secara spontan/alami — bukan karena usaha, tapi karena kondisi memungkinkan. Berbeda dengan 見る (aktif melihat) dan 聞く (aktif mendengar).",groups:[
    {name:"見える",description:"Sesuatu terlihat / bisa dilihat secara alami karena kondisi atau posisi.",sentences:[
      {jp:"ここからだと、富士山がきれいに見えますよ。",kana:"ここからだと、ふじさんがきれいにみえますよ。",romaji:"Koko kara da to, Fujisan ga kirei ni miemasu yo.",meaning:"Dari sini, Gunung Fuji terlihat dengan jelas lho."},
      {jp:"霧が濃くて、前が全然見えない。",kana:"きりがこくて、まえがぜんぜんみえない。",romaji:"Kiri ga kokuте, mae ga zenzen mienai.",meaning:"Kabut tebal banget, sama sekali tidak bisa melihat ke depan."},
      {jp:"老眼が進んで、細かい字が見えにくくなってきた。",kana:"ろうがんがすすんで、こまかいじがみえにくくなってきた。",romaji:"Rougan ga susunde, komakai ji ga mienikuku natte kita.",meaning:"Rabun jauh makin parah, tulisan kecil jadi makin susah terbaca."},
      {jp:"あ、あそこに見えるのが今回泊まるホテルですよ。",kana:"あ、あそこにみえるのがこんかいとまるほてるですよ。",romaji:"A, asoko ni mieru no ga konkai tomaru hoteru desu yo.",meaning:"Oh, yang terlihat di sana itu hotel tempat kita menginap kali ini."},
      {jp:"遠くから見ると小さく見えるけど、近づいたらかなり大きな建物だった。",kana:"とおくからみるとちいさくみえるけど、ちかづいたらかなりおおきなたてものだった。",romaji:"Tooku kara miru to chiisaku mieru kedo, chikazuitara kanari ookina tatemono datta.",meaning:"Dari jauh kelihatan kecil, tapi begitu didekati ternyata gedungnya cukup besar."}
    ]},
    {name:"聞こえる",description:"Sesuatu terdengar / bisa didengar secara alami karena kondisi atau jarak.",sentences:[
      {jp:"壁が薄くて、隣の部屋の話し声がよく聞こえる。",kana:"かべがうすくて、となりのへやのはなしごえがよくきこえる。",romaji:"Kabe ga usukute, tonari no heya no hanashigoe ga yoku kikoeru.",meaning:"Dindingnya tipis, suara ngobrol dari kamar sebelah terdengar jelas."},
      {jp:"遠くから祭りの音楽が聞こえてきた。",kana:"とおくからまつりのおんがくがきこえてきた。",romaji:"Tooku kara matsuri no ongaku ga kikoete kita.",meaning:"Musik festival terdengar dari kejauhan."},
      {jp:"電波が悪くて声が聞こえないから、後でかけ直してもいい？",kana:"でんぱがわるくてこえがきこえないから、あとでかけなおしてもいい？",romaji:"Denpa ga warukute koe ga kikoenai kara, ato de kakenashite mo ii?",meaning:"Sinyalnya jelek jadi suaramu tidak kedengaran — bisa telpon lagi nanti?"},
      {jp:"ここからだと、波の音が聞こえてとても気持ちいい。",kana:"ここからだと、なみのおとがきこえてとてもきもちいい。",romaji:"Koko kara da to, nami no oto ga kikoete totemo kimochi ii.",meaning:"Dari sini bisa dengar suara ombak — rasanya nyaman banget."},
      {jp:"何か聞こえた気がしたけど、気のせいだったかな。",kana:"なにかきこえたきがしたけど、きのせいだったかな。",romaji:"Nanika kikoeta ki ga shita kedo, ki no sei datta ka na.",meaning:"Rasanya tadi ada sesuatu yang terdengar, tapi mungkin cuma perasaan saya."}
    ]}
  ]},

  // ── GR-N4-20: 〜てある ──
  {id:"GR-N4-20",level:"N4",title:"〜てある",summary:"Menyatakan kondisi yang ada sebagai hasil dari tindakan yang dilakukan secara sengaja oleh seseorang. Fokusnya pada 'kondisi saat ini', bukan siapa yang melakukannya.",groups:[{name:"〜てある",description:"[他動詞-te] + ある。Tindakan sudah dilakukan dan hasilnya masih berlaku sekarang.",sentences:[
    {jp:"会議室には椅子が並べてあります。",kana:"かいぎしつにはいすがならべてあります。",romaji:"Kaigishitsu ni wa isu ga narabete arimasu.",meaning:"Kursi-kursi sudah ditata di ruang rapat."},
    {jp:"冷蔵庫にケーキが入れてあるから、帰ったら食べていいよ。",kana:"れいぞうこにけーきがいれてあるから、かえったらたべていいよ。",romaji:"Reizouko ni keeki ga irete aru kara, kaettara tabete ii yo.",meaning:"Di kulkas sudah ada kue yang disimpenin — pulang nanti boleh dimakan ya."},
    {jp:"壁に来週のスケジュールが貼ってありますよ。",kana:"かべにらいしゅうのすけじゅーるがはってありますよ。",romaji:"Kabe ni raishuu no sukejuuru ga hatte arimasu yo.",meaning:"Jadwal minggu depan sudah ditempel di dinding lho."},
    {jp:"もう全部準備してあるから、あとは当日を待つだけだよ。",kana:"もうぜんぶじゅんびしてあるから、あとはとうじつをまつだけだよ。",romaji:"Mou zenbu junbi shite aru kara, ato wa tounichi o matsu dake da yo.",meaning:"Semuanya sudah dipersiapkan — tinggal tunggu hari-H aja."},
    {jp:"あ、もうホテル予約してあるんですか！手回しがいいですね。",kana:"あ、もうほてるよやくしてあるんですか！てまわしがいいですね。",romaji:"A, mou hoteru yoyaku shite aru n desu ka! Temawashi ga ii desu ne.",meaning:"Oh, hotelnya sudah direservasi dari sekarang! Persiapannya matang ya."}
  ]}]},

  // ── GR-N4-22: [自動詞]〜ている ──
  {id:"GR-N4-22",level:"N4",title:"[自動詞]〜ている",summary:"Kata kerja intransitif + ている menunjukkan kondisi atau keadaan yang merupakan hasil dari perubahan sebelumnya — bukan aksi yang sedang berlangsung. Berbeda nuansa dengan 他動詞+てある.",groups:[{name:"[自動詞]〜ている",description:"Intransitive verb + ている = kondisi hasil. Contoh: 開く→開いている (dalam keadaan terbuka), 割れる→割れている (dalam keadaan pecah).",sentences:[
    {jp:"ドアが開いているから、誰かいるのかもしれない。",kana:"どあがあいているから、だれかいるのかもしれない。",romaji:"Doa ga aite iru kara, dareka iru no kamo shirenai.",meaning:"Pintu dalam keadaan terbuka — mungkin ada orang di dalam."},
    {jp:"電気がついているのに、部屋には誰もいなかった。",kana:"でんきがついているのに、へやにはだれもいなかった。",romaji:"Denki ga tsuite iru noni, heya ni wa daremo inakatta.",meaning:"Lampu menyala tapi tidak ada satu pun orang di dalam kamar."},
    {jp:"財布が落ちていたので、拾って交番に届けた。",kana:"さいふがおちていたので、ひろってこうばんにとどけた。",romaji:"Saifu ga ochite ita no de, hirotte kouban ni todoketa.",meaning:"Ada dompet yang terjatuh di sana, jadi saya pungut dan antar ke pos polisi."},
    {jp:"道が濡れてるってことは、さっき雨が降ったんだね。",kana:"みちがぬれてるってことは、さっきあめがふったんだね。",romaji:"Michi ga nurete ru tte koto wa, sakki ame ga futta n da ne.",meaning:"Jalanan basah — berarti tadi sempat hujan ya."},
    {jp:"窓が割れているのに気づかずにいた。どうりで寒かったわけだ。",kana:"まどがわれているのにきづかずにいた。どうりでさむかったわけだ。",romaji:"Mado ga warete iru no ni kidzukazu ni ita. Douri de samukatta wake da.",meaning:"Tidak sadar kalau jendelanya retak. Pantas saja dari tadi rasanya dingin."}
  ]}]},

  // ── GR-N4-23: 〜と言う ──
  {id:"GR-N4-23",level:"N4",title:"〜と言う",summary:"Mengutip atau menyampaikan apa yang diucapkan seseorang. Dalam percakapan santai sering disingkat 〜って. Bisa dipakai untuk kutipan langsung maupun tidak langsung.",groups:[{name:"〜と言う",description:"[Kutipan] + と言う／と言っていた／って. Untuk menyampaikan ucapan orang lain.",sentences:[
    {jp:"田中さんから、明日は少し遅れると言っていましたよ。",kana:"たなかさんから、あしたはすこしおくれるといっていましたよ。",romaji:"Tanaka-san kara, ashita wa sukoshi okureru to itte imashita yo.",meaning:"Tanaka bilang katanya besok akan sedikit terlambat."},
    {jp:"先生に「よく頑張ったね」と言われて、なんか照れてしまった。",kana:"せんせいに「よくがんばったね」といわれて、なんかてれてしまった。",romaji:"Sensei ni 'yoku ganbatta ne' to iwarete, nanka tete shimatta.",meaning:"Pas guru bilang 'kamu sudah bekerja keras ya' — entah kenapa jadi malu sendiri."},
    {jp:"彼、また「忙しい」って言って誘いを断ったんだよ。何回目だろう。",kana:"かれ、また「いそがしい」っていってさそいをことわったんだよ。なんかいめだろう。",romaji:"Kare, mata 'isogashii' tte itte sasoi o kotowatta n da yo. Nankaime darou.",meaning:"Dia bilang 'sibuk' lagi dan tolak ajakan. Ini udah yang keberapa kalinya coba."},
    {jp:"地元で一番うまいって言われてるラーメン屋、行ったことある？",kana:"じもとでいちばんうまいっていわれてるらーめんや、いったことある？",romaji:"Jimoto de ichiban umai tte iwarete ru raamenya, itta koto aru?",meaning:"Warung ramen yang katanya paling enak di sini — kamu pernah ke sana?"},
    {jp:"「また連絡するね」と言ったきり、もう一ヶ月も経つ。",kana:"「またれんらくするね」といったきり、もういっかげつもたつ。",romaji:"'Mata renraku suru ne' to itta kiri, mou ikkagetsu mo tatsu.",meaning:"Sejak bilang 'nanti aku hubungi lagi' sudah satu bulan berlalu tanpa kabar."}
  ]}]},

  // ── GR-N4-24: 〜ところ ──
  {id:"GR-N4-24",level:"N4",title:"〜ところ",summary:"Menyatakan tahapan waktu suatu tindakan: tepat sebelum, tepat sedang, atau tepat selesai. Sering menunjukkan kebetulan waktu yang pas.",groups:[
    {name:"Vる + ところ",description:"Tepat akan melakukan sesuatu, belum dimulai.",sentences:[
      {jp:"ちょうど出かけるところだったのに、電話が鳴った。",kana:"ちょうどでかけるところだったのに、でんわがなった。",romaji:"Choudo dekakeru tokoro datta noni, denwa ga natta.",meaning:"Tepat mau keluar eh ada telpon masuk."},
      {jp:"今から説明するところなので、少し待ってください。",kana:"いまからせつめいするところなので、すこしまってください。",romaji:"Ima kara setsumei suru tokoro na no de, sukoshi matte kudasai.",meaning:"Saya baru mau mulai menjelaskan, mohon tunggu sebentar."},
      {jp:"え、もう帰るところですか？せっかく来たのに。",kana:"え、もうかえるところですか？せっかくきたのに。",romaji:"E, mou kaeru tokoro desu ka? Sekkaku kita noni.",meaning:"Eh, sudah mau pulang? Padahal jauh-jauh sudah datang ke sini."},
      {jp:"これからご飯を食べるところに、急に友達が来た。",kana:"これからごはんをたべるところに、きゅうにともだちがきた。",romaji:"Korekara gohan o taberu tokoro ni, kyuu ni tomodachi ga kita.",meaning:"Tepat mau makan tiba-tiba teman datang."},
      {jp:"今から電話しようとしていたところだよ。ちょうどよかった。",kana:"いまからでんわしようとしていたところだよ。ちょうどよかった。",romaji:"Ima kara denwa shiyou to shite ita tokoro da yo. Choudo yokatta.",meaning:"Tadi juga baru mau nelpon kamu — pas banget."}
    ]},
    {name:"Vている + ところ",description:"Tepat sedang melakukan sesuatu, di tengah-tengah proses.",sentences:[
      {jp:"ちょっと待って、今レポートを書いているところだから。",kana:"ちょっとまって、いまれぽーとをかいているところだから。",romaji:"Chotto matte, ima repooto o kaite iru tokoro da kara.",meaning:"Tunggu bentar, aku lagi di tengah-tengah nulis laporan nih."},
      {jp:"電話してきたとき、ちょうどお風呂に入っているところだった。",kana:"でんわしてきたとき、ちょうどおふろにはいっているところだった。",romaji:"Denwa shite kita toki, choudo ofuro ni haitte iru tokoro datta.",meaning:"Waktu kamu telpon, tepat lagi di tengah-tengah mandi."},
      {jp:"今ちょうど荷物を整理しているところです。散らかっていてすみません。",kana:"いまちょうどにもつをせいりしているところです。ちらかっていてすみません。",romaji:"Ima choudo nimotsu o seiri shite iru tokoro desu. Chirakatte ite sumimasen.",meaning:"Sekarang tepat lagi beresin barang. Maaf berantakan."},
      {jp:"今、上司と話し合っているところなので、後でかけ直します。",kana:"いま、じょうしとはなしあっているところなので、あとでかけなおします。",romaji:"Ima, joushi to hanashiatte iru tokoro na no de, ato de kakenao shimasu.",meaning:"Sekarang lagi dalam diskusi sama atasan — nanti saya telepon balik."},
      {jp:"ちょうど問題を調べているところなので、もう少しだけ時間をください。",kana:"ちょうどもんだいをしらべているところなので、もうすこしだけじかんをください。",romaji:"Choudo mondai o shirabete iru tokoro na no de, mou sukoshi dake jikan o kudasai.",meaning:"Tepat lagi menyelidiki masalahnya — tolong beri sedikit waktu lagi."}
    ]},
    {name:"Vた + ところ",description:"Tepat baru saja selesai melakukan sesuatu.",sentences:[
      {jp:"ちょうど家に着いたところです。すごいタイミングですね。",kana:"ちょうどいえについたところです。すごいたいみんぐですね。",romaji:"Choudo ie niついta tokoro desu. Sugoi taimingu desu ne.",meaning:"Baru saja sampai di rumah. Timing-nya pas banget ya."},
      {jp:"さっきご飯を食べたところなのに、もうお腹が空いてきた。",kana:"さっきごはんをたべたところなのに、もうおなかがすいてきた。",romaji:"Sakki gohan o tabeta tokoro na noni, mou onaka ga suite kita.",meaning:"Baru aja selesai makan tapi perut sudah mulai lapar lagi."},
      {jp:"プロジェクトがやっと終わったところなので、少し休ませてください。",kana:"ぷろじぇくとがやっとおわったところなので、すこしやすませてください。",romaji:"Purojekuto ga yatto owatta tokoro na no de, sukoshi yasumasete kudasai.",meaning:"Proyeknya baru saja selesai — boleh saya istirahat sebentar?"},
      {jp:"試験が終わったところで、友達から「どうだった？」と聞かれた。",kana:"しけんがおわったところで、ともだちから「どうだった？」ときかれた。",romaji:"Shiken ga owatta tokoro de, tomodachi kara 'dou datta?' to kikareta.",meaning:"Tepat setelah ujian selesai, teman langsung tanya 'gimana tadi?'"},
      {jp:"先生の話を聞いて、ちょうど気づいたところです。",kana:"せんせいのはなしをきいて、ちょうどきづいたところです。",romaji:"Sensei no hanashi o kiite, choudo kidzuita tokoro desu.",meaning:"Baru saja menyadarinya setelah mendengar penjelasan dari guru."}
    ]}
  ]},

  // ── GR-N4-25: まだ〜ている ──
  {id:"GR-N4-25",level:"N4",title:"まだ〜ている",summary:"Menyatakan bahwa suatu kondisi atau keadaan masih berlanjut hingga sekarang, sering dengan nuansa terkejut atau tidak sabar.",groups:[{name:"まだ〜ている",description:"まだ + [Verb-te] + いる。Kondisi yang sudah lama tapi masih belum berubah.",sentences:[
    {jp:"え、まだ寝てるの？もうお昼だよ。",kana:"え、まだねてるの？もうおひるだよ。",romaji:"E, mada nete ru no? Mou ohiru da yo.",meaning:"Eh, masih tidur? Ini udah siang lho."},
    {jp:"祖父はもう八十歳なのに、まだ現役で働いている。体力がすごいと思う。",kana:"そふはもうはちじゅっさいなのに、まだげんえきではたらいている。たいりょくがすごいとおもう。",romaji:"Sofu wa mou hachijussai na noni, mada gen'eki de hataraite iru. Tairyoku ga sugoi to omou.",meaning:"Kakek saya sudah 80 tahun tapi masih aktif bekerja. Stamina-nya luar biasa menurut saya."},
    {jp:"昨日のこと、まだ気にしてるの？もういいじゃん、忘れなよ。",kana:"きのうのこと、まだきにしてるの？もういいじゃん、わすれなよ。",romaji:"Kinou no koto, mada ki ni shite ru no? Mou ii jan, wasure na yo.",meaning:"Masih mikirin yang kemarin? Udahlah, lupain aja."},
    {jp:"あのドラマ、まだ続いてるんですか？もう四年目ですよね。",kana:"あのどらま、まだつづいてるんですか？もうよねんめですよね。",romaji:"Ano dorama, mada tsuzuite ru n desu ka? Mou yonenme desu yo ne.",meaning:"Drama itu masih lanjut sampai sekarang? Ini sudah tahun keempat kan?"},
    {jp:"一時間以上待っているのに、まだ順番が来ない。",kana:"いちじかんいじょうまっているのに、まだじゅんばんがこない。",romaji:"Ichijikan ijou matte iru noni, mada junban ga konai.",meaning:"Sudah menunggu lebih dari satu jam tapi giliran saya belum juga dipanggil."}
  ]}]},

  // ── GR-N4-26: 〜ばかり ──
  {id:"GR-N4-26",level:"N4",title:"〜ばかり",summary:"Dua nuansa utama: (1) baru saja melakukan sesuatu, (2) tidak melakukan lain selain itu / terus-terusan hanya itu.",groups:[
    {name:"Vた + ばかり",description:"Baru saja melakukan sesuatu dalam waktu dekat.",sentences:[
      {jp:"引っ越したばかりで、まだ近所のことがよくわかりません。",kana:"ひっこしたばかりで、まだきんじょのことがよくわかりません。",romaji:"Hikkoshita bakari de, mada kinjo no koto ga yoku wakarimasen.",meaning:"Baru pindahan, jadi belum terlalu tahu sekitar sini."},
      {jp:"このスマホ、買ったばかりなのにもう画面が割れた。",kana:"このすまほ、かったばかりなのにもうがめんがわれた。",romaji:"Kono sumaho, katta bakari na noni mou gamen ga wareta.",meaning:"HP ini baru dibeli eh layarnya sudah retak."},
      {jp:"社会人になったばかりのころは、毎日緊張しっぱなしだった。",kana:"しゃかいじんになったばかりのころは、まいにちきんちょうしっぱなしだった。",romaji:"Shakaijin ni natta bakari no koro wa, mainichi kinchou shippanashi datta.",meaning:"Waktu baru mulai kerja dulu, setiap hari tegang terus."},
      {jp:"起きたばかりで頭が回らないから、後でもう一回説明してくれる？",kana:"おきたばかりであたまがまわらないから、あとでもういっかいせつめいしてくれる？",romaji:"Okita bakari de atama ga mawaranai kara, ato de mou ikkai setsumei shite kureru?",meaning:"Baru bangun jadi otaknya belum jalan — bisa jelasin lagi nanti?"},
      {jp:"付き合い始めたばかりなのに、もうケンカしちゃった。",kana:"つきあいはじめたばかりなのに、もうけんかしちゃった。",romaji:"Tsukiai hajimeta bakari na noni, mou kenka shichatta.",meaning:"Baru mulai pacaran eh sudah ribut duluan."}
    ]},
    {name:"V / N + ばかり",description:"Tidak melakukan selain itu, terus-terusan hanya itu saja. Sering berkonotasi negatif.",sentences:[
      {jp:"最近、仕事ばかりで全然プライベートの時間がない。",kana:"さいきん、しごとばかりでぜんぜんぷらいべーとのじかんがない。",romaji:"Saikin, shigoto bakari de zenzen puraibeto no jikan ga nai.",meaning:"Belakangan ini kerjaan terus, tidak ada waktu pribadi sama sekali."},
      {jp:"彼、愚痴ばかり言っていて、一緒にいると疲れる。",kana:"かれ、ぐちばかりいっていて、いっしょにいるとつかれる。",romaji:"Kare, guchi bakari itte ite, issho ni iru to tsukareru.",meaning:"Dia ngeluh terus — capek deh kalau lama-lama sama dia."},
      {jp:"子供がゲームばかりしていて、全然宿題をやらない。",kana:"こどもがげーむばかりしていて、ぜんぜんしゅくだいをやらない。",romaji:"Kodomo ga geemu bakari shite ite, zenzen shukudai o yaranai.",meaning:"Anaknya main game terus, PR tidak dikerjain sama sekali."},
      {jp:"甘いものばかり食べていたら、そりゃ体重も増えるよ。",kana:"あまいものばかりたべていたら、そりゃたいじゅうもふえるよ。",romaji:"Amai mono bakari tabete itara, sorya taijuu mo fueru yo.",meaning:"Kalau yang dimakan manis-manis terus, ya wajar berat badan naik."},
      {jp:"心配してばかりいても仕方ないから、まず動いてみよう。",kana:"しんぱいしてばかりいてもしかたないから、まずうごいてみよう。",romaji:"Shinpai shite bakari ite mo shikata nai kara, mazu ugoite miyou.",meaning:"Tidak ada gunanya khawatir terus — yuk coba bergerak dulu."}
    ]}
  ]},

  // ── GR-N4-29: こ / そ / あ ② ──
  {id:"GR-N4-29",level:"N4",title:"こ / そ / あ ②",summary:"Penggunaan kedua seri demonstratif: merujuk pada sesuatu yang ada dalam percakapan atau konteks bersama, bukan benda fisik di depan mata. Termasuk こんな/そんな/あんな dan こう/そう/ああ.",groups:[
    {name:"こんな / そんな / あんな",description:"Merujuk pada sifat atau jenis sesuatu dalam konteks percakapan. こんな (seperti ini), そんな (seperti itu), あんな (seperti itu yang kita sama-sama tahu).",sentences:[
      {jp:"こんな天気の日は、家でゆっくりしたいですね。",kana:"こんなてんきのひは、いえでゆっくりしたいですね。",romaji:"Konna tenki no hi wa, ie de yukkuri shitai desu ne.",meaning:"Cuaca seperti ini enaknya santai di rumah ya."},
      {jp:"そんな話、本当にあったの？信じられない。",kana:"そんなはなし、ほんとうにあったの？しんじられない。",romaji:"Sonna hanashi, hontou ni atta no? Shinjirarenai.",meaning:"Kejadian seperti itu benar ada? Tidak percaya deh."},
      {jp:"あんな失礼な態度、見たことがない。びっくりした。",kana:"あんなしつれいなたいど、みたことがない。びっくりした。",romaji:"Anna shitsurei na taido, mita koto ga nai. Bikkuri shita.",meaning:"Sikap tidak sopan seperti itu belum pernah saya lihat sebelumnya. Kaget."},
      {jp:"まさかこんな展開になるとは思っていなかった。",kana:"まさかこんなてんかいになるとはおもっていなかった。",romaji:"Masaka konna tenkai ni naru to wa omotte inakatta.",meaning:"Tidak menyangka ceritanya bisa berubah seperti ini."},
      {jp:"そんな小さなことで落ち込まないで。もっと大事なことに目を向けよう。",kana:"そんなちいさなことでおちこまないで。もっとだいじなことにめをむけよう。",romaji:"Sonna chiisana koto de ochikoманайте. Motto daiji na koto ni me o mukeyou.",meaning:"Jangan sedih karena hal sekecil itu. Yuk fokus ke hal yang lebih penting."}
    ]},
    {name:"こう / そう / ああ",description:"Merujuk pada cara atau kondisi yang dibicarakan. こう (dengan cara ini), そう (dengan cara itu), ああ (dengan cara itu — yang kita berdua tahu).",sentences:[
      {jp:"こう考えると、あの時の判断は間違っていなかったと思う。",kana:"こうかんがえると、あのときのはんだんはまちがっていなかったとおもう。",romaji:"Kou kangaeru to, ano toki no handan wa machigatte inakatta to omou.",meaning:"Kalau dipikir dengan cara ini, keputusan saat itu tidak salah kok."},
      {jp:"「どうやって日本語を上達させましたか？」「そうですね、毎日少しずつ続けるのが一番だと思います。」",kana:"「どうやってにほんごをじょうたつさせましたか？」「そうですね、まいにちすこしずつつづけるのがいちばんだとおもいます。」",romaji:"'Dou yatte nihongo o joutatsu sasemashita ka?' 'Sou desu ne, mainichi sukoshi zutsu tsuzukeru no ga ichiban da to omoimasu.'",meaning:"'Gimana caranya bisa jago bahasa Jepang?' 'Gitu ya, menurut saya yang terbaik adalah terus-terusan sedikit demi sedikit setiap hari.'"},
      {jp:"ああ言っておけばよかった、って後から後悔することってよくあるよね。",kana:"ああいっておけばよかった、ってあとからこうかいすることってよくあるよね。",romaji:"Aa itte okeba yokatta, tte ato kara koukai suru koto tte yoku aru yo ne.",meaning:"Sering kan, nyesel belakangan 'coba tadi bilang begitu' — sering banget itu."},
      {jp:"こうすれば解決できると思うけど、どう思う？",kana:"こうすればかいけつできるとおもうけど、どうおもう？",romaji:"Kou sureba kaiketsu dekiru to omou kedo, dou omou?",meaning:"Menurut saya kalau dikerjain dengan cara ini bisa selesai — kamu pikir gimana?"},
      {jp:"彼がそう言うなら、信じてみようか。",kana:"かれがそういうなら、しんじてみようか。",romaji:"Kare ga sou iu nara, shinjite miyou ka.",meaning:"Kalau memang dia bilang begitu, coba dipercaya saja ya."}
    ]}
  ]},

  // ── GR-N4-30: 〜という意味 ──
  {id:"GR-N4-30",level:"N4",title:"〜という意味",summary:"Menjelaskan arti atau makna dari suatu kata, frasa, ekspresi, atau situasi. Artinya 'yang berarti ~' atau 'maksudnya adalah ~'.",groups:[{name:"〜という意味",description:"[Kata/ekspresi] + という意味 (です／で使います). Untuk mendefinisikan atau mengklarifikasi makna.",sentences:[
    {jp:"「お疲れ様」って、どういう意味ですか？",kana:"「おつかれさま」って、どういういみですか？",romaji:"'Otsukaresama' tte, dou iu imi desu ka?",meaning:"'Otsukaresama' itu artinya apa ya?"},
    {jp:"「木漏れ日」は、木の葉の隙間から差し込む光という意味の言葉です。",kana:"「こもれび」は、このはのすきまからさしこむひかりというこのはのすきまからさしこむひかりというさ、こまかい言葉です。",romaji:"'Komorebi' wa, konoha no sukima kara sashikomu hikari to iu imi no kotoba desu.",meaning:"'Komorebi' adalah kata yang berarti cahaya matahari yang masuk melalui celah dedaunan pohon."},
    {jp:"このマークは「撮影禁止」という意味なので、写真は撮らないでください。",kana:"このまーくは「さつえいきんし」というをいみなので、しゃしんはとらないでください。",romaji:"Kono maaku wa 'satsuei kinshi' to iu imi na no de, shashin wa toranaide kudasai.",meaning:"Tanda ini artinya 'dilarang memotret', jadi mohon tidak mengambil foto."},
    {jp:"「なるほど」は「そうか、わかった」という意味で、会話の相槌として使います。",kana:"「なるほど」は「そうか、わかった」というこ意味で、かいわのあいづちとしてつかいます。",romaji:"'Naruhodo' wa 'souka, wakatta' to iu imi de, kaiwa no aizuchi to shite tsukaimasu.",meaning:"'Naruhodo' digunakan sebagai respons dalam percakapan yang berarti 'ooh, begitu, mengerti'."},
    {jp:"彼が「考えておく」と言ったのは、やんわり断るという意味だと思う。",kana:"かれが「かんがえておく」といったのは、やんわりことわるというこ意味だとおもう。",romaji:"Kare ga 'kangaete oku' to itta no wa, yanwari kotowaru to iu imi da to omou.",meaning:"Waktu dia bilang 'akan saya pertimbangkan', menurut saya itu maksudnya menolak dengan halus."}
  ]}]},

  // ── GR-N4-33: 〜あとで ──
  {id:"GR-N4-33",level:"N4",title:"〜あとで",summary:"Menyatakan urutan waktu: melakukan B setelah A selesai sepenuhnya. Nuansa: A harus tuntas dulu, baru B dimulai.",groups:[{name:"〜あとで",description:"[Vた / Noun + の] + あとで、[Tindakan berikutnya]. A selesai total → baru B.",sentences:[
    {jp:"会議が終わったあとで、ちょっと話せますか。",kana:"かいぎがおわったあとで、ちょっとはなせますか。",romaji:"Kaigi ga owatta ato de, chotto hanasemasu ka.",meaning:"Setelah rapat selesai, bisa bicara sebentar?"},
    {jp:"シャワーを浴びたあとで、すぐソファで寝てしまった。",kana:"しゃわーをあびたあとで、すぐそふぁでねてしまった。",romaji:"Shawaa o abita ato de, sugu sofa de nete shimatta.",meaning:"Sehabis mandi langsung ketiduran di sofa."},
    {jp:"ご飯を食べたあとで運動するのは体にいいらしいですよ。",kana:"ごはんをたべたあとでうんどうするのはからだにいいらしいですよ。",romaji:"Gohan o tabeta ato de undou suru no wa karada ni ii rashii desu yo.",meaning:"Katanya olahraga setelah makan itu bagus untuk badan lho."},
    {jp:"仕事のあとで飲みに行かない？久しぶりに。",kana:"しごとのあとでのみにいかない？ひさしぶりに。",romaji:"Shigoto no ato de nomi ni ikanai? Hisashiburi ni.",meaning:"Abis kerja mau minum-minum bareng? Sudah lama nggak."},
    {jp:"このドラマ、全部見たあとでもう一回最初から見直したくなる。",kana:"このどらま、ぜんぶみたあとでもういっかいさいしょからみなおしたくなる。",romaji:"Kono dorama, zenbu mita ato de mou ikkai saisho kara minaoshitaku naru.",meaning:"Drama ini, habis ditonton semuanya jadi pengen nonton ulang dari awal lagi."}
  ]}]},

  // ── GR-N4-34: 〜てから VS 〜あとで ──
  {id:"GR-N4-34",level:"N4",title:"〜てから VS 〜あとで",summary:"Keduanya menyatakan urutan waktu, tapi nuansanya berbeda. 〜てから menekankan bahwa B tidak bisa dimulai sebelum A selesai. 〜あとで lebih netral, hanya menyatakan urutan.",groups:[
    {name:"〜てから",description:"A harus selesai dulu sebagai syarat atau prasyarat sebelum B bisa dilakukan. Urutan bersifat wajib atau disengaja.",sentences:[
      {jp:"手を洗ってから食べてね。",kana:"てをあらってからたべてね。",romaji:"Te o aratte kara tabete ne.",meaning:"Cuci tangan dulu baru makan ya."},
      {jp:"日本に来てから、毎日が発見の連続で飽きない。",kana:"にほんにきてから、まいにちがはっけんのれんぞくであきない。",romaji:"Nihon ni kite kara, mainichi ga hakken no renzoku de akinai.",meaning:"Sejak datang ke Jepang, setiap hari penuh penemuan baru dan tidak pernah bosan."},
      {jp:"全部確認してからサインしてください。後で「知らなかった」は通じませんよ。",kana:"ぜんぶかくにんしてからさいんしてください。あとで「しらなかった」はとおじませんよ。",romaji:"Zenbu kakunin shite kara sain shite kudasai. Ato de 'shiranakatta' wa toojimasen yo.",meaning:"Cek semuanya dulu sebelum tanda tangan. Nanti 'saya tidak tahu' tidak berlaku ya."},
      {jp:"よく考えてから返事をしたほうがいいと思う。焦らなくていいよ。",kana:"よくかんがえてからへんじをしたほうがいいとおもう。あせらなくていいよ。",romaji:"Yoku kangaete kara henji o shita hou ga ii to omou. Aseranakute ii yo.",meaning:"Pikir dulu baik-baik sebelum menjawab. Tidak perlu terburu-buru kok."},
      {jp:"大学を卒業してから、初めて一人暮らしを始めた。",kana:"だいがくをそつぎょうしてから、はじめてひとりぐらしをはじめた。",romaji:"Daigaku o sotsugyou shite kara, hajimete hitori gurashi o hajimeta.",meaning:"Setelah lulus kuliah, untuk pertama kalinya saya mulai hidup sendiri."}
    ]},
    {name:"〜あとで",description:"Hanya menyatakan bahwa B dilakukan setelah A — tidak ada penekanan bahwa A adalah syarat. Urutannya lebih longgar.",sentences:[
      {jp:"昼ごはんを食べたあとで、少し横になったら気づいたら夕方だった。",kana:"ひるごはんをたべたあとで、すこしよこになったらきづいたらゆうがただった。",romaji:"Hirugohan o tabeta ato de, sukoshi yoko ni nattara kidzuitara yuugata datta.",meaning:"Setelah makan siang tiduran bentar, pas sadar sudah sore."},
      {jp:"映画を見たあとで、感想をシェアしようよ。",kana:"えいがをみたあとで、かんそうをしぇあしようよ。",romaji:"Eiga o mita ato de, kansou o shea shiyou yo.",meaning:"Setelah nonton filmnya, yuk sharing kesannya."},
      {jp:"試験のあとで、みんなでカラオケに行こうという話になった。",kana:"しけんのあとで、みんなでからおけにいこうというはなしになった。",romaji:"Shiken no ato de, minna de karaoke ni ikou to iu hanashi ni natta.",meaning:"Setelah ujian, jadi obrolan mau karaoke bareng semua."},
      {jp:"引っ越しのあとで、近所に挨拶に行くのを忘れていた。",kana:"ひっこしのあとで、きんじょにあいさつにいくのをわすれていた。",romaji:"Hikkoshi no ato de, kinjo ni aisatsu ni iku no o wasurete ita.",meaning:"Setelah pindahan, lupa untuk pergi salam-salaman ke tetangga."},
      {jp:"仕事が落ち着いたあとで、ゆっくり旅行したいな。",kana:"しごとがおちついたあとで、ゆっくりりょこうしたいな。",romaji:"Shigoto ga ochitsuita ato de, yukkuri ryokou shitai na.",meaning:"Kalau kerjaan sudah tenang, pengen pergi liburan santai."}
    ]}
  ]},

  // ── GR-N4-35: 〜までに ──
  {id:"GR-N4-35",level:"N4",title:"〜までに",summary:"Menyatakan batas waktu — tindakan harus selesai sebelum atau paling lambat pada waktu tersebut. Berbeda dengan 〜まで yang berarti 'sampai (terus-menerus)'.",groups:[{name:"〜までに",description:"[Waktu] + までに + [tindakan yang harus selesai]. Deadline, bukan durasi.",sentences:[
    {jp:"明日の朝までにこのレポートを仕上げないといけない。",kana:"あしたのあさまでにこのれぽーとをしあげないといけない。",romaji:"Ashita no asa made ni kono repooto o shiagenakereba ikenai.",meaning:"Harus menyelesaikan laporan ini sebelum besok pagi."},
    {jp:"三十歳までに一度は海外で働いてみたいと思っている。",kana:"さんじゅっさいまでにいちどはかいがいではたらいてみたいとおもっている。",romaji:"Sanjussai made ni ichido wa kaigai de hataraite mitai to omotte iru.",meaning:"Sebelum usia 30, sekali-kali ingin mencoba bekerja di luar negeri."},
    {jp:"パーティーが始まるまでに飾りつけを全部終わらせよう。",kana:"ぱーてぃーがはじまるまでにかざりつけをぜんぶおわらせよう。",romaji:"Paatii ga hajimaru made ni kazaritsuke o zenbu owaraseyou.",meaning:"Yuk selesaikan semua dekorasinya sebelum pesta dimulai."},
    {jp:"チェックアウトは十一時までにお願いします。",kana:"ちぇっくあうとはじゅういちじまでにおねがいします。",romaji:"Chekkuauto wa juuichiji made ni onegai shimasu.",meaning:"Mohon check-out paling lambat jam 11."},
    {jp:"締め切りまでに間に合わなかったら、どうなるんですか。",kana:"しめきりまでにまにあわなかったら、どうなるんですか。",romaji:"Shimekiri made ni ma ni awanakattara, dou naru n desu ka.",meaning:"Kalau tidak selesai sebelum deadline, jadinya bagaimana?"}
  ]}]},

  // ── GR-N4-36: 〜ながら ──
  {id:"GR-N4-36",level:"N4",title:"〜ながら",summary:"Dua tindakan dilakukan bersamaan oleh subjek yang sama. Tindakan utama di bagian kedua, tindakan pendamping di bagian 〜ながら. Bisa juga menyatakan kontras (meskipun tahu, tapi...).",groups:[
    {name:"〜ながら (bersamaan)",description:"Melakukan dua hal sekaligus. Subjek harus sama.",sentences:[
      {jp:"音楽を聴きながら、ジョギングするのが朝の習慣です。",kana:"おんがくをききながら、じょぎんぐするのがあさのしゅうかんです。",romaji:"Ongaku o kiki nagara, jogingu suru no ga asa no shuukan desu.",meaning:"Jogging sambil dengerin musik adalah kebiasaan pagi saya."},
      {jp:"スマホを見ながら歩くのは危ないですよ。",kana:"すまほをみながらあるくのはあぶないですよ。",romaji:"Sumaho o mi nagara aruku no wa abunai desu yo.",meaning:"Jalan sambil lihat HP itu berbahaya lho."},
      {jp:"コーヒーを飲みながら、ぼーっと窓の外を眺めていた。",kana:"こーひーをのみながら、ぼーっとまどのそとをながめていた。",romaji:"Koohii o nomi nagara, boo tto mado no soto o nagamete ita.",meaning:"Sambil minum kopi, melamun memandangi luar jendela."},
      {jp:"友達と話しながら料理すると、時間があっという間に過ぎる。",kana:"ともだちとはなしながらりょうりすると、じかんがあっというまにすぎる。",romaji:"Tomodachi to hanashi nagara ryouri suru to, jikan ga atto iu ma ni sugiru.",meaning:"Kalau masak sambil ngobrol sama teman, waktu berlalu cepat banget."},
      {jp:"泣きながら笑っているあの子、大丈夫かな。",kana:"なきながらわらっているあのこ、だいじょうぶかな。",romaji:"Naki nagara waratte iru ano ko, daijoubu ka na.",meaning:"Anak itu nangis sambil ketawa — baik-baik saja ya?"}
    ]},
    {name:"〜ながら (kontras)",description:"Meskipun kondisi A berlaku, tapi kenyataannya B. Nuansa menyayangkan atau menyindir.",sentences:[
      {jp:"知っていながら、何も言わなかったのはなぜですか。",kana:"しっていながら、なにもいわなかったのはなぜですか。",romaji:"Shitte i nagara, nani mo iwanakatta no wa naze desu ka.",meaning:"Padahal tahu, kenapa tidak bilang apa-apa?"},
      {jp:"悪いと思いながらも、つい余計なことを言ってしまった。",kana:"わるいとおもいながらも、ついよけいなことをいってしまった。",romaji:"Warui to omoi nagara mo, tsui yokei na koto o itte shimatta.",meaning:"Sebetulnya sadar itu tidak baik, tapi tanpa sadar bilang hal yang tidak perlu."},
      {jp:"残念ながら、今回のご応募には見送らせていただきました。",kana:"ざんねんながら、こんかいのごおうぼにはみおくらせていただきました。",romaji:"Zannen nagara, konkai no go-oubo ni wa miokura sete itadakimashita.",meaning:"Sayangnya, untuk lamaran kali ini kami tidak dapat melanjutkan prosesnya."},
      {jp:"わかっていながら同じミスを繰り返すのは、さすがにまずいよ。",kana:"わかっていながらおなじみすをくりかえすのは、さすがにまずいよ。",romaji:"Wakatte i nagara onaji misu o kurikaeru no wa, sasuga ni mazui yo.",meaning:"Padahal sudah tahu tapi terus-terusan bikin kesalahan yang sama — itu memang sudah tidak bisa dibenarkan."},
      {jp:"お金がないながらも、毎月少しずつ貯金を続けている。",kana:"おかねがないながらも、まいつきすこしずつちょきんをつづけている。",romaji:"Okane ga nai nagara mo, maitsuki sukoshi zutsu chokin o tsuzukete iru.",meaning:"Meski tidak punya banyak uang, tetap menabung sedikit-sedikit setiap bulan."}
    ]}
  ]},

  // ── GR-N4-38: [Noun] しか〜ない ──
  {id:"GR-N4-38",level:"N4",title:"[Noun] しか〜ない",summary:"Menekankan bahwa hanya itu saja yang ada — tidak lebih. Selalu dipakai dengan bentuk negatif. Nuansa: jumlahnya sedikit dan tidak cukup, atau pilihan terbatas.",groups:[{name:"〜しか〜ない",description:"[Noun/jumlah] + しか + [Verb negatif]. Makna positif disampaikan dengan bentuk negatif.",sentences:[
    {jp:"財布に五百円しか入っていなかった。どうしよう。",kana:"さいふにごひゃくえんしかはいっていなかった。どうしよう。",romaji:"Saifu ni gohyakuen shika haitte inakatta. Dou shiyou.",meaning:"Di dompet cuma ada 500 yen. Gimana nih."},
    {jp:"このクラス、女子が三人しかいないんですよ。",kana:"このくらす、じょしがさんにんしかいないんですよ。",romaji:"Kono kurasu, joshi ga sannin shika inai n desu yo.",meaning:"Di kelas ini perempuannya cuma tiga orang lho."},
    {jp:"解決策はこれしかないと思う。他に方法が見つからない。",kana:"かいけつさくはこれしかないとおもう。ほかにほうほうがみつからない。",romaji:"Kaiketsu saku wa kore shika nai to omou. Hoka ni houhou ga mitsukaranai.",meaning:"Saya rasa solusinya cuma ini. Tidak ada cara lain yang bisa ditemukan."},
    {jp:"日本語を上手くなる方法は、練習するしかないよ。近道はない。",kana:"にほんごをうまくなるほうほうは、れんしゅうするしかないよ。ちかみちはない。",romaji:"Nihongo o umaku naru houhou wa, renshuu suru shika nai yo. Chikamichi wa nai.",meaning:"Cara jadi mahir bahasa Jepang ya cuma dengan latihan. Tidak ada jalan pintas."},
    {jp:"チケットが一枚しか取れなかったから、今回は一人で行ってくるね。",kana:"ちけっとがいちまいしかとれなかったから、こんかいはひとりでいってくるね。",romaji:"Chiketto ga ichimai shika torenakatta kara, konkai wa hitori de itte kuru ne.",meaning:"Tiketnya cuma dapat satu, jadi kali ini saya pergi sendiri ya."}
  ]}]},

  // ── GR-N4-39: [Quantifier] で ──
  {id:"GR-N4-39",level:"N4",title:"[Quantifier] で",summary:"Partikel で setelah jumlah/kuantitas untuk menyatakan batas total — jumlah orang, benda, biaya, atau waktu yang digunakan untuk melakukan sesuatu.",groups:[{name:"[数量] で",description:"[Jumlah/kuantitas] + で + [tindakan/kondisi]. Menyatakan 'dengan sekian, cukup / selesai / dibagi'.",sentences:[
    {jp:"このケーキ、三人で分けたらちょうどよかった。",kana:"このけーき、さんにんでわけたらちょうどよかった。",romaji:"Kono keeki, sannin de waketara choudo yokatta.",meaning:"Kue ini kalau dibagi tiga orang pas banget porsinya."},
    {jp:"千円で買えるランチって、この辺だとどこがおすすめですか。",kana:"せんえんでかえるらんちって、このへんだとどこがおすすめですか。",romaji:"Sen'en de kaeru ranchi tte, kono hen da to doko ga osusume desu ka.",meaning:"Makan siang yang bisa dapat dengan seribu yen — di sekitar sini rekomendasinya di mana?"},
    {jp:"この作業、一人でやったら一週間かかるけど、二人でやれば三日で終わるよ。",kana:"このさぎょう、ひとりでやったらいっしゅうかんかかるけど、ふたりでやればみっかでおわるよ。",romaji:"Kono sagyou, hitori de yattara isshuukan kakaru kedo, futari de yareba mikka de owaru yo.",meaning:"Kalau dikerjain sendirian butuh seminggu, tapi kalau berdua selesai dalam tiga hari."},
    {jp:"荷物が多くて、一回では運べなかった。三回で全部終わった。",kana:"にもつがおおくて、いっかいではこべなかった。さんかいでぜんぶおわった。",romaji:"Nimotsu ga ookuте, ikkai de wa hakobenakata. Sankai de zenbu owatta.",meaning:"Barangnya banyak, sekali angkut tidak cukup. Selesai dalam tiga kali bolak-balik."},
    {jp:"五分で読めるニュース記事って、意外と情報量が多いんですよね。",kana:"ごふんでよめるにゅーすきじって、いがいとじょうほうりょうがおおいんですよね。",romaji:"Gofun de yomeru nyuusu kiji tte, igai to jouhouryou ga ooi n desu yo ne.",meaning:"Artikel berita yang bisa dibaca dalam lima menit ternyata informasinya lumayan banyak ya."}
  ]}]},

  // ── GR-N4-40: [Noun] で ──
  {id:"GR-N4-40",level:"N4",title:"[Noun] で",summary:"Partikel で setelah kata benda untuk menyatakan berbagai fungsi: (1) tempat terjadinya aksi, (2) alat/cara/bahan, (3) alasan/penyebab, (4) kondisi/keadaan.",groups:[
    {name:"で (tempat aksi)",description:"Menunjukkan tempat di mana suatu tindakan berlangsung.",sentences:[
      {jp:"駅前のカフェで友達と待ち合わせることにした。",kana:"えきまえのかふぇでともだちとまちあわせることにした。",romaji:"Ekimae no kafe de tomodachi to machiawaseru koto ni shita.",meaning:"Janjian ketemu teman di kafe depan stasiun."},
      {jp:"会社の屋上で同僚とお弁当を食べるのが最近の楽しみです。",kana:"かいしゃのおくじょうでどうりょうとおべんとうをたべるのがさいきんのたのしみです。",romaji:"Kaisha no okujou de douryou to obentou o taberu no ga saikin no tanoshimi desu.",meaning:"Makan bekal bareng rekan kerja di atap kantor jadi kesenangan saya belakangan ini."},
      {jp:"空港で偶然、昔の同級生に会った。びっくりした。",kana:"くうこうでぐうぜん、むかしのどうきゅうせいにあった。びっくりした。",romaji:"Kuukou de guuzen, mukashi no doukyuusei ni atta. Bikkuri shita.",meaning:"Secara tidak sengaja ketemu teman sekelas zaman dulu di bandara. Kaget."},
      {jp:"図書館で調べていたら、思いがけず面白い本を見つけた。",kana:"としょかんでしらべていたら、おもいがけずおもしろいほんをみつけた。",romaji:"Toshokan de shirabete itara, omoigakezu omoshiroi hon o mitsuketa.",meaning:"Waktu cari referensi di perpustakaan, tidak sengaja menemukan buku yang menarik."},
      {jp:"外で食べるご飯って、なんでこんなにおいしく感じるんだろう。",kana:"そとでたべるごはんって、なんでこんなにおいしくかんじるんだろう。",romaji:"Soto de taberu gohan tte, nande konna ni oishiku kanjiru n darou.",meaning:"Kenapa ya makan di luar itu rasanya enak banget — ada alasan apa."}
    ]},
    {name:"で (alat / cara / bahan)",description:"Menunjukkan alat, metode, bahasa, atau bahan yang digunakan.",sentences:[
      {jp:"このレシピ、フライパンだけで作れるから助かる。",kana:"このれしぴ、ふらいぱんだけでつくれるからたすかる。",romaji:"Kono reshipi, furaipan dake de tsukureru kara tasukaru.",meaning:"Resep ini bisa dibuat hanya pakai wajan — praktis banget."},
      {jp:"日本語で夢を見るようになったら、上達した証拠だと聞いた。",kana:"にほんごでゆめをみるようになったら、じょうたつしたしょうこだときいた。",romaji:"Nihongo de yume o miru you ni nattara, joutatsu shita shouko da to kiita.",meaning:"Katanya kalau sudah mulai mimpi pakai bahasa Jepang, itu tanda kemampuannya sudah naik."},
      {jp:"スマホ一台で仕事も買い物も全部できる時代になったね。",kana:"すまほいちだいでしごともかいものもぜんぶできるじだいになったね。",romaji:"Sumaho ichidai de shigoto mo kaimono mo zenbu dekiru jidai ni natta ne.",meaning:"Sekarang sudah zaman di mana satu HP bisa buat kerja, belanja, semuanya ya."},
      {jp:"手作りのプレゼントって、材料費だけで意外と費用がかかるんですよ。",kana:"てづくりのぷれぜんとって、ざいりょうひだけでいがいとひようがかかるんですよ。",romaji:"Tezukuri no purezento tte, zairyouhi dake de igai to hiyou ga kakaru n desu yo.",meaning:"Hadiah buatan tangan ternyata biaya bahannya saja lumayan menguras kantong ya."},
      {jp:"メールで連絡したつもりだったんですが、届いていませんでしたか。",kana:"めーるでれんらくしたつもりだったんですが、とどいていませんでしたか。",romaji:"Meeru de renraku shita tsumori datta n desu ga, todoite imasen deshita ka.",meaning:"Saya kira sudah menghubungi lewat email — memangnya tidak masuk?"}
    ]},
    {name:"で (alasan / penyebab)",description:"Menunjukkan penyebab atau alasan suatu kondisi atau kejadian.",sentences:[
      {jp:"風邪で三日間学校を休んでしまった。",kana:"かぜでみっかかんがっこうをやすんでしまった。",romaji:"Kaze de mikkakan gakkou o yasunde shimatta.",meaning:"Karena masuk angin, absen sekolah tiga hari."},
      {jp:"工事の音で集中できなくて、カフェに移動した。",kana:"こうじのおとでしゅうちゅうできなくて、かふぇにいどうした。",romaji:"Kouji no oto de shuuchuu dekinakute, kafe ni idou shita.",meaning:"Tidak bisa fokus karena suara konstruksi, jadi pindah ke kafe."},
      {jp:"満員電車のせいで毎朝ストレスがたまる。",kana:"まんいんでんしゃのせいでまいあさすとれすがたまる。",romaji:"Man'in densha no sei de maiasa sutoresu ga tamaru.",meaning:"Stres tiap pagi gara-gara kereta penuh sesak."},
      {jp:"急な予定変更で、せっかく取ったチケットが無駄になった。",kana:"きゅうなよていへんこうで、せっかくとったちけっとがむだになった。",romaji:"Kyuu na yotei henkou de, sekkaku totta chiketto ga muda ni natta.",meaning:"Karena jadwal tiba-tiba berubah, tiket yang susah payah didapat jadi terbuang percuma."},
      {jp:"大雪で電車が全部止まって、会社に来られなかった社員が多かったです。",kana:"おおゆきでんしゃがぜんぶとまって、かいしゃにこられなかったしゃいんがおおかったです。",romaji:"Ooyuki de densha ga zenbu tomatte, kaisha ni korarenakatta shain ga ookatta desu.",meaning:"Karena salju lebat semua kereta berhenti, banyak karyawan yang tidak bisa datang ke kantor."}
    ]}]},

  // ── GR-N4-41: 〜とか ──
  {id:"GR-N4-41",level:"N4",title:"〜とか",summary:"Menyebutkan beberapa contoh dari daftar yang tidak lengkap — artinya 'seperti ~, ~ dan lain-lain'. Lebih kasual dari 〜や dan 〜など. Sering dipakai dalam percakapan sehari-hari.",groups:[{name:"〜とか〜とか",description:"[A] とか [B] とか + [kalimat]. Memberikan contoh tanpa menyebut semuanya.",sentences:[
    {jp:"休みの日は映画を見るとか、友達とカフェに行くとかして過ごしています。",kana:"やすみのひはえいがをみるとか、ともだちとかふぇにいくとかしてすごしています。",romaji:"Yasumi no hi wa eiga o miru toka, tomodachi to kafe ni iku toka shite sugoshite imasu.",meaning:"Hari libur biasanya diisi dengan nonton film, pergi ke kafe sama teman, dan semacamnya."},
    {jp:"最近、筋トレとかランニングとか始めて、体が少し引き締まってきた気がする。",kana:"さいきん、きんとれとからんにんぐとかはじめて、からだがすこしひきしまってきたきがする。",romaji:"Saikin, kintore toka ranningu toka hajimete, karada ga sukoshi hikishimatte kita ki ga suru.",meaning:"Belakangan mulai gym, lari, dan semacamnya — badan rasanya mulai kencang sedikit."},
    {jp:"誕生日に何が欲しいって聞いたら、「本とかコーヒーとか」って言われた。シンプルだな。",kana:"たんじょうびになにがほしいってきいたら、「ほんとかこーひーとか」っていわれた。しんぷるだな。",romaji:"Tanjoubi ni nani ga hoshii tte kiitara, 'hon toka koohii toka' tte iwareta. Shinpuru da na.",meaning:"Pas tanya mau hadiah ulang tahun apa, jawabnya 'buku, kopi, gitu-gituan'. Simpel ya orangnya."},
    {jp:"面接でどんな質問とかされましたか？緊張しましたか？",kana:"めんせつでどんなしつもんとかされましたか？きんちょうしましたか？",romaji:"Mensetsu de donna shitsumon toka saremashita ka? Kinchou shimashita ka?",meaning:"Di interview tadi ditanya apa saja? Deg-degan?"},
    {jp:"SNSとかで知らない人からメッセージが来たら、返信しないほうがいいよ。",kana:"えすえぬえすとかでしらないひとからめっせーじがきたら、へんしんしないほうがいいよ。",romaji:"SNS toka de shiranai hito kara messeeji ga kitara, henshin shinai hou ga ii yo.",meaning:"Kalau ada pesan dari orang tidak dikenal di media sosial dan semacamnya, lebih baik tidak dibalas."}
  ]}]},

  // ── GR-N4-42: [Noun] でも ──
  {id:"GR-N4-42",level:"N4",title:"[Noun] でも",summary:"Dua fungsi utama: (1) memberikan contoh ringan yang tidak spesifik — 'atau sesuatu seperti itu', (2) menyatakan 'bahkan ~ pun' untuk menekankan hal yang tidak terduga.",groups:[
    {name:"でも (contoh tidak spesifik)",description:"Menawarkan atau menyarankan sesuatu secara ringan tanpa menekan pilihan. 'Bagaimana kalau ~ atau semacamnya?'",sentences:[
      {jp:"疲れてるなら、コーヒーでも飲んで少し休んだら？",kana:"つかれてるなら、こーひーでものんでちょっとやすんだら？",romaji:"Tsukarete ru nara, koohii demo nonde sukoshi yasundara?",meaning:"Kalau capek, minum kopi atau apa gitu terus istirahat bentar gimana?"},
      {jp:"せっかくだから、記念に写真でも撮っておこうよ。",kana:"せっかくだから、きねんにしゃしんでもとっておこうよ。",romaji:"Sekkaku da kara, kinen ni shashin demo totte okoyou yo.",meaning:"Sayang kalau tidak, yuk foto-foto dulu buat kenang-kenangan."},
      {jp:"暇なら映画でも見に行かない？新作が公開されたんだって。",kana:"ひまならえいがでもみにいかない？しんさくがこうかいされたんだって。",romaji:"Hima nara eiga demo mi ni ikanai? Shinsaku ga koukai sareta n datte.",meaning:"Kalau nggak ada kegiatan mau nonton film atau apa gitu? Katanya ada film baru yang rilis."},
      {jp:"ちょっと話でも聞いてもらえると助かるんだけど、今いい？",kana:"ちょっとはなしでもきいてもらえるとたすかるんだけど、いまいい？",romaji:"Chotto hanashi demo kiite moraeru to tasukaru n da kedo, ima ii?",meaning:"Bisa dengerin curhatanku atau apa gitu? Sekarang ada waktu?"},
      {jp:"散歩でもしながら話しましょうか。ここだと少し落ち着かないので。",kana:"さんぽでもしながらはなしましょうか。ここだとすこしおちつかないので。",romaji:"Sanpo demo shi nagara hanashimashou ka. Koko da to sukoshi ochitsukanai no de.",meaning:"Sambil jalan-jalan atau apa, ngobrol yuk. Di sini agak kurang nyaman."}
    ]},
    {name:"でも (bahkan ~ pun)",description:"Menekankan sesuatu yang tidak terduga. 'Bahkan ~ pun bisa / tidak bisa'.",sentences:[
      {jp:"このアプリ、子供でも簡単に使えるように設計されているんです。",kana:"このあぷり、こどもでもかんたんにつかえるようにせっけいされているんです。",romaji:"Kono apuri, kodomo demo kantan ni tsukaeru you ni sekkei sarete iru n desu.",meaning:"Aplikasi ini dirancang supaya bahkan anak kecil pun bisa memakai dengan mudah."},
      {jp:"あの人でも失敗することがあるんだと知って、少し安心した。",kana:"あのひとでもしっぱいすることがあるんだとしって、すこしあんしんした。",romaji:"Ano hito demo shippai suru koto ga aru n da to shitte, sukoshi anshin shita.",meaning:"Tahu bahwa bahkan orang itu pun bisa gagal — jadi sedikit lega."},
      {jp:"慣れれば、初心者でもこのレベルの曲は弾けるようになりますよ。",kana:"なれれば、しょしんしゃでもこのれべるのきょくはひけるようになりますよ。",romaji:"Narereba, shoshinsha demo kono reberu no kyoku wa hikeru you ni narimasu yo.",meaning:"Kalau sudah terbiasa, bahkan pemula pun bisa memainkan lagu di level ini kok."},
      {jp:"締め切り前日でも諦めなかったから、なんとか間に合った。",kana:"しめきりぜんじつでもあきらめなかったから、なんとかまにあった。",romaji:"Shimekiri zenjitsu demo akiramenakatta kara, nantoka ma ni atta.",meaning:"Bahkan sehari sebelum deadline pun tidak menyerah, jadi entah bagaimana berhasil tepat waktu."},
      {jp:"どんなに忙しくても、家族への連絡だけは欠かさないようにしている。",kana:"どんなにいそがしくても、かぞくへのれんらくだけはかかさないようにしている。",romaji:"Donna ni isogashiku te mo, kazoku e no renraku dake wa kakasanai you ni shite iru.",meaning:"Seberapapun sibuknya, menghubungi keluarga adalah satu hal yang tidak pernah saya lewatkan."}
    ]}
  ]},

  // ── GR-N4-43: [Particle] + は / も ──
  {id:"GR-N4-43",level:"N4",title:"[Particle] + は / も",summary:"Partikel seperti に、で、と、から bisa digabung dengan は atau も untuk menambah nuansa kontrastif (〜には、〜では) atau inklusif/empatik (〜にも、〜でも).",groups:[
    {name:"Particle + は (kontrastif)",description:"Menambahkan nuansa 'untuk hal ini' atau membuat kontras tersirat dengan situasi lain.",sentences:[
      {jp:"東京には慣れたけど、まだ人の多さには慣れない。",kana:"とうきょうにはなれたけど、まだひとのおおさにはなれない。",romaji:"Toukyou ni wa nareta kedo, mada hito no oosa ni wa narenai.",meaning:"Sudah terbiasa dengan Tokyo, tapi belum juga terbiasa dengan keramaian orangnya."},
      {jp:"このやり方では時間がかかりすぎる。もっと効率的な方法を考えよう。",kana:"このやりかたではじかんがかかりすぎる。もっとこうりつてきなほうほうをかんがえよう。",romaji:"Kono yarikata de wa jikan ga kakarisugiru. Motto kouritsuteki na houhou o kangaeyou.",meaning:"Dengan cara seperti ini terlalu memakan waktu. Yuk pikirkan cara yang lebih efisien."},
      {jp:"週末には出かけることが多いけど、平日はほとんど家にいます。",kana:"しゅうまつにはでかけることがおおいけど、へいじつはほとんどいえにいます。",romaji:"Shuumatsu ni wa dekakeru koto ga ooi kedo, heijitsu wa hotondo ie ni imasu.",meaning:"Akhir pekan sering keluar, tapi hari kerja hampir selalu di rumah."},
      {jp:"彼とは話せるけど、彼女とはなかなか打ち解けられない。",kana:"かれとははなせるけど、かのじょとはなかなかうちとけられない。",romaji:"Kare to wa hanaseru kedo, kanojo to wa nakanaka uchitokera renai.",meaning:"Sama dia bisa ngobrol, tapi sama dia (perempuan) susah akrab."},
      {jp:"健康のためには、睡眠だけじゃなく食事の質も大事ですよ。",kana:"けんこうのためには、すいみんだけじゃなくしょくじのしつもだいじですよ。",romaji:"Kenkou no tame ni wa, suimin dake ja naku shokuji no shitsu mo daiji desu yo.",meaning:"Untuk kesehatan, bukan cuma tidur tapi kualitas makan juga penting lho."}
    ]},
    {name:"Particle + も (inklusif / empatik)",description:"Menambahkan nuansa 'juga' atau menekankan bahwa sesuatu berlaku di sini juga.",sentences:[
      {jp:"彼女にも同じことを伝えておいたほうがいいと思う。",kana:"かのじょにもおなじことをつたえておいたほうがいいとおもう。",romaji:"Kanojo ni mo onaji koto o tsutaete oita hou ga ii to omou.",meaning:"Menurut saya lebih baik sampaikan hal yang sama ke dia juga."},
      {jp:"この問題は私にもよくわかりません。専門家に聞いてみましょう。",kana:"このもんだいはわたしにもよくわかりません。せんもんかにきいてみましょう。",romaji:"Kono mondai wa watashi ni mo yoku wakarimasen. Senmonka ni kiite mimashou.",meaning:"Masalah ini saya sendiri pun kurang paham. Yuk coba tanya ke ahlinya."},
      {jp:"この店では現金でもカードでも支払えます。",kana:"このみせではげんきんでもかーどでもしはらえます。",romaji:"Kono mise de wa genkin demo kaado demo shiharaemasu.",meaning:"Di toko ini bisa bayar pakai tunai maupun kartu."},
      {jp:"先輩からも上司からも同じアドバイスをもらった。やっぱりそうなのかな。",kana:"せんぱいからもじょうしからもおなじあどばいすをもらった。やっぱりそうなのかな。",romaji:"Senpai kara mo joushi kara mo onaji adobaisu o moratta. Yappari sou na no ka na.",meaning:"Dapat saran yang sama dari senior maupun atasan. Mungkin memang begitu ya."},
      {jp:"仕事でも趣味でも、続けることが一番大事だとやっと気づいた。",kana:"しごとでもしゅみでも、つづけることがいちばんだいじだとやっときづいた。",romaji:"Shigoto demo shumi demo, tsuzukeru koto ga ichiban daiji da to yatto kidzuita.",meaning:"Baik di kerjaan maupun hobi, baru sadar kalau ketekunan itu yang paling penting."}
    ]}
  ]},

  // ── GR-N4-44: [Verb] + の + [Particle] ──
  {id:"GR-N4-44",level:"N4",title:"[Verb] + の + [Particle]",summary:"Nominalisasi kata kerja menggunakan の — mengubah kata kerja menjadi kata benda sehingga bisa diikuti partikel apa saja. Berbeda dengan こと yang lebih formal dan abstrak, の lebih natural dan kontekstual.",groups:[{name:"Vる/Vた + の + Particle",description:"の setelah kata kerja berfungsi sebagai nominalizer. Bisa diikuti が、を、は、に、で, dll.",sentences:[
    {jp:"毎朝ランニングするのが習慣になって、もう三ヶ月経つ。",kana:"まいあさらんにんぐするのがしゅうかんになって、もうさんかげつたつ。",romaji:"Maiasa ranningu suru no ga shuukan ni natte, mou sankagetsu tatsu.",meaning:"Sudah tiga bulan berlalu sejak lari pagi menjadi kebiasaan saya."},
    {jp:"一人で全部抱え込むのをやめて、もっと周りに頼ってもいいんだよ。",kana:"ひとりでぜんぶかかえこむのをやめて、もっとまわりにたよってもいいんだよ。",romaji:"Hitori de zenbu kakaekomo no o yamete, motto mawari ni tayotte mo ii n da yo.",meaning:"Berhenti menanggung semuanya sendirian — boleh lebih mengandalkan orang di sekitarmu."},
    {jp:"彼が急に連絡をやめたのには、何か理由があるはずだよ。",kana:"かれがきゅうにれんらくをやめたのには、なにかりゆうがあるはずだよ。",romaji:"Kare ga kyuu ni renraku o yameta no ni wa, nanika riyuu ga aru hazu da yo.",meaning:"Pasti ada alasan tertentu di balik dia yang tiba-tiba berhenti menghubungi."},
    {jp:"知らない場所を地図なしで歩くのも、旅の楽しみの一つだと思う。",kana:"しらないばしょをちずなしであるくのも、たびのたのしみのひとつだとおもう。",romaji:"Shiranai basho o chizu nashi de aruku no mo, tabi no tanoshimi no hitotsu da to omou.",meaning:"Jalan di tempat asing tanpa peta juga salah satu kesenangan berwisata menurut saya."},
    {jp:"あなたが頑張っているのを、ちゃんと見ている人はいるからね。",kana:"あなたががんばっているのを、ちゃんとみているひとはいるからね。",romaji:"Anata ga ganbatte iru no o, chanto mite iru hito wa iru kara ne.",meaning:"Ada kok orang yang benar-benar memperhatikan usaha kerasmu — ingat itu ya."}
  ]}]},

  // ── GR-N4-45: 〜と ──
  {id:"GR-N4-45",level:"N4",title:"〜と",summary:"Conditional yang menyatakan hubungan sebab-akibat alami atau otomatis. Kalau A, maka B pasti terjadi — tidak ada pilihan lain. Sering dipakai untuk fakta alam, instruksi, atau kebiasaan yang pasti.",groups:[{name:"〜と",description:"[Kondisi A] + と、[Akibat B yang pasti]. B tidak bisa dihindari atau sudah pasti terjadi jika A terpenuhi.",sentences:[
    {jp:"この道をまっすぐ行くと、突き当たりに郵便局があります。",kana:"このみちをまっすぐいくと、つきあたりにゆうびんきょくがあります。",romaji:"Kono michi o massugu iku to, tsukiatari ni yuubinkyoku ga arimasu.",meaning:"Kalau jalan lurus di jalan ini, di ujungnya ada kantor pos."},
    {jp:"春になると、この公園は桜でいっぱいになって本当にきれいですよ。",kana:"はるになると、このこうえんはさくらでいっぱいになってほんとうにきれいですよ。",romaji:"Haru ni naru to, kono kouen wa sakura de ippai ni natte hontou ni kirei desu yo.",meaning:"Kalau sudah musim semi, taman ini penuh bunga sakura — indah banget lho."},
    {jp:"このボタンを押すと、自動でドアが開きます。",kana:"このぼたんをおすと、じどうでどあがあきます。",romaji:"Kono botan o osu to, jidou de doa ga akimasu.",meaning:"Kalau tombol ini ditekan, pintu akan terbuka otomatis."},
    {jp:"よく寝ないと、翌日のパフォーマンスに確実に影響が出るよ。",kana:"よくねないと、よくじつのぱふぉーまんすにかくじつにえいきょうがでるよ。",romaji:"Yoku nenai to, yokujitsu no pafoomansu ni kakujitsu ni eikyou ga deru yo.",meaning:"Kalau tidak tidur cukup, pasti ada dampaknya ke performa keesokan harinya."},
    {jp:"彼女に正直に話すと、思ったより冷静に受け止めてくれた。",kana:"かのじょにしょうじきにはなすと、おもったよりれいせいにうけとめてくれた。",romaji:"Kanojo ni shoujiki ni hanasu to, omotta yori reisei ni uketomete kureta.",meaning:"Waktu jujur ke dia, ternyata dia menerimanya lebih tenang dari yang saya bayangkan."}
  ]}]},

  // ── GR-N4-46: 〜ば ──
  {id:"GR-N4-46",level:"N4",title:"〜ば",summary:"Conditional yang menyatakan syarat cukup untuk mencapai suatu hasil. Nuansa: 'asal ~ saja, maka ~'. Sering dipakai untuk saran, harapan, atau kondisi yang idealnya dipenuhi. Berbeda dari 〜と yang lebih otomatis/alami.",groups:[{name:"〜ば",description:"[Vば / Adj-ければ] + [Hasil yang diharapkan]. Fokus pada syarat yang perlu dipenuhi.",sentences:[
    {jp:"毎日少しずつ練習すれば、必ず上手くなりますよ。",kana:"まいにちすこしずつれんしゅうすれば、かならずうまくなりますよ。",romaji:"Mainichi sukoshi zutsu renshuu sureba, kanarazu umaku narimasu yo.",meaning:"Asal latihan sedikit demi sedikit setiap hari, pasti jadi mahir kok."},
    {jp:"もっと早く相談してくれれば、一緒に解決策を考えられたのに。",kana:"もっとはやくそうだんしてくれれば、いっしょにかいけつさくをかんがえられたのに。",romaji:"Motto hayaku soudan shite kurereba, issho ni kaiketsu saku o kangaerareta noni.",meaning:"Kalau dari tadi cerita, bisa cari solusi bareng — sayang ya."},
    {jp:"値段が安ければ買おうと思っていたんだけど、思ったより高かった。",kana:"ねだんがやすければかおうとおもっていたんだけど、おもったよりたかかった。",romaji:"Nedan ga yasukereba kaou to omotte ita n da kedo, omotta yori takakatta.",meaning:"Kalau harganya murah mau beli, tapi ternyata lebih mahal dari dugaan."},
    {jp:"天気さえよければ、今日のイベントは完璧だったのに。",kana:"てんきさえよければ、きょうのいべんとはかんぺきだったのに。",romaji:"Tenki sae yokereba, kyou no ibento wa kanpeki datta noni.",meaning:"Andai saja cuacanya bagus, acara hari ini sudah sempurna — sayang."},
    {jp:"わからなければ、遠慮なく聞いてください。答えられる範囲でお答えします。",kana:"わからなければ、えんりょなくきいてください。こたえられるはんいでおこたえします。",romaji:"Wakaranakereba, enryo naku kiite kudasai. Kotaerareru han'i de okotae shimasu.",meaning:"Kalau tidak mengerti, silakan tanya tanpa ragu. Saya akan menjawab sesuai kemampuan."}
  ]}]},

  // ── GR-N4-47: 〜たら ──
  {id:"GR-N4-47",level:"N4",title:"〜たら",summary:"Conditional paling fleksibel — bisa dipakai untuk kondisi nyata, hipotetis, saran, maupun urutan kejadian. Nuansa: 'setelah ~ / kalau ternyata ~ / andaikan ~'.",groups:[{name:"〜たら",description:"[Vた + ら]. Kondisi atau urutan waktu. Lebih personal dan fleksibel dari 〜と dan 〜ば.",sentences:[
    {jp:"家に帰ったら、まず手を洗うのが癖になっています。",kana:"いえにかえったら、まずてをあらうのがくせになっています。",romaji:"Ie ni kaettara, mazu te o arau no ga kuse ni natte imasu.",meaning:"Sudah jadi kebiasaan saya, begitu sampai rumah langsung cuci tangan dulu."},
    {jp:"もし宝くじが当たったら、真っ先に親に家を買ってあげたい。",kana:"もしたからくじがあたったら、まっさきにおやにいえをかってあげたい。",romaji:"Moshi takarakuji ga atattara, massaki ni oya ni ie o katte agetai.",meaning:"Kalau menang lotere, hal pertama yang mau saya lakukan adalah belikan rumah untuk orang tua."},
    {jp:"やってみたら意外と簡単で、なんで今まで避けていたんだろうと思った。",kana:"やってみたらいがいとかんたんで、なんでいままでさけていたんだろうとおもった。",romaji:"Yatte mitara igai to kantan de, nande ima made sakete ita n darou to omotta.",meaning:"Pas dicoba ternyata gampang — jadi heran kenapa selama ini dihindari."},
    {jp:"困ったことがあったら、いつでも連絡してね。力になるから。",kana:"こまったことがあったら、いつでもれんらくしてね。ちからになるから。",romaji:"Komatta koto ga attara, itsudemo renraku shite ne. Chikara ni naru kara.",meaning:"Kalau ada yang bikin susah, hubungi kapan saja ya. Saya siap bantu."},
    {jp:"この映画、見終わったらどんな感想か教えて。気になってるんだよね。",kana:"このえいが、みおわったらどんなかんそうかおしえて。きになってるんだよね。",romaji:"Kono eiga, mioわったら donna kansou ka oshiete. Ki ni natte ru n da yo ne.",meaning:"Kalau sudah selesai nonton film ini, ceritain kesannya ya. Aku penasaran."}
  ]}]},

  // ── GR-N4-48: 〜なら ──
  {id:"GR-N4-48",level:"N4",title:"〜なら",summary:"Conditional berdasarkan informasi atau asumsi yang baru didengar dari lawan bicara. Nuansa: 'kalau memang begitu / kalau konteksnya seperti itu'. Sering dipakai untuk memberi saran, rekomendasi, atau respons terhadap situasi yang diceritakan orang lain.",groups:[{name:"〜なら",description:"[Informasi dari konteks / lawan bicara] + なら、[Saran atau tanggapan]. Berbeda dari たら/と/ば karena tidak bisa dipakai untuk masa lalu.",sentences:[
    {jp:"京都に行くなら、早起きして人が少ない時間に神社を回るのがおすすめですよ。",kana:"きょうとにいくなら、はやおきしてひとがすくないじかんにじんじゃをまわるのがおすすめですよ。",romaji:"Kyouto ni iku nara, hayaoki shite hito ga sukunai jikan ni jinja o mawaru no ga osusume desu yo.",meaning:"Kalau mau ke Kyoto, rekomendasinya bangun pagi dan keliling kuil saat orang masih sedikit."},
    {jp:"体調が悪いなら、無理して来なくてもよかったのに。",kana:"たいちょうがわるいなら、むりしてこなくてもよかったのに。",romaji:"Taichou ga warui nara, muri shite konakute mo yokatta noni.",meaning:"Kalau kondisi badan memang tidak baik, tidak perlu memaksakan diri datang."},
    {jp:"そんなに嫌なら、最初から断ればよかったじゃないですか。",kana:"そんなにいやなら、さいしょからことわればよかったじゃないですか。",romaji:"Sonna ni iya nara, saisho kara kotawareba yokatta ja nai desu ka.",meaning:"Kalau memang sebegitu tidak mau, dari awal ditolak saja kan bisa."},
    {jp:"日本語を伸ばしたいなら、インプットよりアウトプットを増やすといいですよ。",kana:"にほんごをのばしたいなら、いんぷっとよりあうとぷっとをふやすといいですよ。",romaji:"Nihongo o nobashitai nara, inputto yori outputto o fuyasu to ii desu yo.",meaning:"Kalau memang mau meningkatkan bahasa Jepang, lebih baik perbanyak output daripada input."},
    {jp:"安くておいしいラーメンが食べたいなら、あの路地裏の店が穴場ですよ。",kana:"やすくておいしいらーめんがたべたいなら、あのろじうらのみせがあなばですよ。",romaji:"Yasukute oishii raamen ga tabetai nara, ano rojuura no mise ga anaba desu yo.",meaning:"Kalau cari ramen enak dan murah, warung di gang belakang itu adalah tempat tersembunyi yang recommended."}
  ]}]},

  // ── GR-N4-49: 〜のに ──
  {id:"GR-N4-49",level:"N4",title:"〜のに",summary:"Dua fungsi: (1) menyatakan kontras yang mengecewakan atau mengejutkan — 'padahal ~, tapi ~', (2) menyatakan tujuan — 'untuk ~'. Nuansa kontras sering mengandung rasa kecewa, heran, atau menyindir.",groups:[
    {name:"〜のに (kontras / kekecewaan)",description:"[Kondisi A] + のに、[Hasil B yang berlawanan dengan harapan]. Ada nada kecewa atau terkejut.",sentences:[
      {jp:"あんなに練習したのに、本番で緊張して全部飛んでしまった。",kana:"あんなにれんしゅうしたのに、ほんばんできんちょうしてぜんぶとんでしまった。",romaji:"Anna ni renshuu shita noni, honban de kinchou shite zenbu tonde shimatta.",meaning:"Padahal sudah latihan sekeras itu, waktu tampil beneran deg-degan sampai semua lupa."},
      {jp:"せっかく早起きして並んだのに、チケットが売り切れていた。",kana:"せっかくはやおきしてならんだのに、ちけっとがうりきれていた。",romaji:"Sekkaku hayaoki shite naranda noni, chiketto ga urikire te ita.",meaning:"Padahal sudah susah payah bangun pagi dan antre, tiketnya sudah habis."},
      {jp:"何度も確認したのに、また同じミスをしてしまった。自分が嫌になる。",kana:"なんどもかくにんしたのに、またおなじみすをしてしまった。じぶんがいやになる。",romaji:"Nando mo kakunin shita noni, mata onaji misu o shite shimatta. Jibun ga iya ni naru.",meaning:"Padahal sudah berkali-kali dicek, tapi bikin kesalahan yang sama lagi. Muak sama diri sendiri."},
      {jp:"昨日は晴れていたのに、今日はこんなに雨が降るなんて。",kana:"きのうははれていたのに、きょうはこんなにあめがふるなんて。",romaji:"Kinou wa harete ita noni, kyou wa konna ni ame ga furu nante.",meaning:"Padahal kemarin cerah, hari ini hujannya deras begini."},
      {jp:"こんなに近くに住んでいるのに、全然会えないね。",kana:"こんなにちかくにすんでいるのに、ぜんぜんあえないね。",romaji:"Konna ni chikaku ni sunde iru noni, zenzen aenai ne.",meaning:"Padahal tinggalnya sedekat ini, tapi sama sekali tidak pernah ketemu ya."}
    ]},
    {name:"〜のに (tujuan)",description:"[Verb] + のに + [yang dibutuhkan/dipakai]. Menyatakan tujuan atau keperluan.",sentences:[
      {jp:"このパスワードを変更するのに、古いパスワードが必要です。",kana:"このぱすわーどをへんこうするのに、ふるいぱすわーどがひつようです。",romaji:"Kono pasuwaado o henkou suru no ni, furui pasuwaado ga hitsuyou desu.",meaning:"Untuk mengubah password ini, diperlukan password lama."},
      {jp:"ビザの申請をするのに、どんな書類が必要か調べておいた。",kana:"びざのしんせいをするのに、どんなしょるいがひつようかしらべておいた。",romaji:"Biza no shinsei o suru no ni, donna shorui ga hitsuyou ka shirabete oita.",meaning:"Sudah mencari tahu dokumen apa saja yang diperlukan untuk mengajukan visa."},
      {jp:"このレシピを作るのに、特別な材料は必要ありません。家にあるもので十分です。",kana:"このれしぴをつくるのに、とくべつなざいりょうはひつようありません。いえにあるもので十分です。",romaji:"Kono reshipi o tsukuru no ni, tokubetsu na zairyou wa hitsuyou arimasen. Ie ni aru mono de juubun desu.",meaning:"Untuk membuat resep ini tidak butuh bahan-bahan khusus. Yang ada di rumah sudah cukup."},
      {jp:"日本語能力試験に合格するのに、どれくらいの勉強時間が必要ですか。",kana:"にほんごのうりょくしけんにごうかくするのに、どれくらいのべんきょうじかんがひつようですか。",romaji:"Nihongo nouryoku shiken ni goukaku suru no ni, dore kurai no benkyou jikan ga hitsuyou desu ka.",meaning:"Untuk lulus ujian kemampuan bahasa Jepang, kira-kira butuh berapa jam belajar?"},
      {jp:"新しいソフトをインストールするのに、けっこう時間がかかった。",kana:"あたらしいそふとをいんすとーるするのに、けっこうじかんがかかった。",romaji:"Atarashii sofuto o insutooru suru no ni, kekkou jikan ga kakatta.",meaning:"Untuk menginstal software baru itu ternyata lumayan makan waktu."}
    ]}
  ]},

  // ── GR-N4-50: 〜ても ──
  {id:"GR-N4-50",level:"N4",title:"〜ても",summary:"Menyatakan konsesi — 'meskipun ~, tetap ~'. Hasil di bagian kedua tidak berubah meski kondisi di bagian pertama terpenuhi. Berbeda dari 〜のに karena tidak mengandung kekecewaan — lebih netral atau teguh.",groups:[{name:"〜ても",description:"[Vて / Adj-くて / Nでも] + も + [Hasil yang tetap berlaku]. Meskipun A, B tetap terjadi.",sentences:[
    {jp:"どんなに疲れていても、寝る前に必ずストレッチをするようにしている。",kana:"どんなにつかれていても、ねるまえにかならずすとれっちをするようにしている。",romaji:"Donna ni tsukarete ite mo, neru mae ni kanarazu sutoretchi o suru you ni shite iru.",meaning:"Meskipun secapek apapun, selalu pastikan stretching sebelum tidur."},
    {jp:"たとえ失敗しても、やってみなければわからないことがある。",kana:"たとえしっぱいしても、やってみなければわからないことがある。",romaji:"Tatoe shippai shite mo, yatte minakereba wakaranai koto ga aru.",meaning:"Meskipun nanti gagal sekalipun, ada hal-hal yang tidak akan pernah tahu kalau tidak dicoba."},
    {jp:"何回説明しても、なかなか伝わらなくて正直しんどい。",kana:"なんかいせつめいしても、なかなかつたわらなくてしょうじきしんどい。",romaji:"Nankai setsumei shite mo, nakanaka tsutawara nakute shoujiki shindoi.",meaning:"Sudah berkali-kali dijelaskan tapi tidak nyambung juga — jujur capek."},
    {jp:"忙しくても、月に一度は友達と会う時間を作るようにしている。",kana:"いそがしくても、つきにいちどはともだちとあうじかんをつくるようにしている。",romaji:"Isogashiku te mo, tsuki ni ichido wa tomodachi to au jikan o tsukuru you ni shite iru.",meaning:"Meskipun sibuk, selalu berusaha luangkan waktu untuk ketemu teman setidaknya sekali sebulan."},
    {jp:"値段が高くても、品質がよければ長く使えるから結果的にお得だと思う。",kana:"ねだんがたかくても、ひんしつがよければながくつかえるからけっかてきにおとくだとおもう。",romaji:"Nedan ga takakute mo, hinshitsu ga yokereba nagaku tsukaeru kara kekkateki ni otoku da to omou.",meaning:"Meskipun mahal, kalau kualitasnya bagus bisa dipakai lama — jadi sebenarnya lebih hemat."}
  ]}]},

  // ── GR-N4-51: 〜場合は ──
  {id:"GR-N4-51",level:"N4",title:"〜場合は",summary:"Menyatakan kondisi hipotetis atau situasi tertentu — 'dalam hal ~' atau 'jika terjadi ~'. Lebih formal dari 〜たら dan 〜と, sering dipakai dalam instruksi, aturan, atau situasi yang tidak pasti apakah akan terjadi.",groups:[{name:"〜場合は",description:"[V / Adj / N] + 場合は、[tindakan atau aturan yang berlaku]. Dipakai untuk skenario kondisional yang belum tentu terjadi.",sentences:[
    {jp:"緊急の場合は、このボタンを押してスタッフを呼んでください。",kana:"きんきゅうのばあいは、このぼたんをおしてすたっふをよんでください。",romaji:"Kinkyuu no baai wa, kono botan o oshite sutaffu o yonde kudasai.",meaning:"Dalam keadaan darurat, tekan tombol ini untuk memanggil staf."},
    {jp:"ご参加いただけない場合は、前日までにご連絡をお願いします。",kana:"ごさんかいただけないばあいは、ぜんじつまでにごれんらくをおねがいします。",romaji:"Go-sanka itadakenai baai wa, zenjitsu made ni go-renraku o onegai shimasu.",meaning:"Jika tidak dapat hadir, mohon menghubungi kami paling lambat sehari sebelumnya."},
    {jp:"荷物が届かない場合は、追跡番号を確認してから配送会社に問い合わせてください。",kana:"にもつがとどかないばあいは、ついせきばんごうをかくにんしてからはいそうがいしゃにといあわせてください。",romaji:"Nimotsu ga todokanai baai wa, tsuiseki bangou o kakunin shite kara haisou gaisha ni toiawasete kudasai.",meaning:"Jika barang belum tiba, mohon periksa nomor pelacakan terlebih dahulu sebelum menghubungi pihak pengiriman."},
    {jp:"万が一パスワードを忘れた場合は、登録メールから再設定できます。",kana:"まんがいちぱすわーどをわすれたばあいは、とうろくめーるからさいせっていできます。",romaji:"Man ga ichi pasuwaado o wasureta baai wa, touroku meeru kara saisei teki dekimasu.",meaning:"Jika lupa password, pengaturan ulang bisa dilakukan melalui email yang terdaftar."},
    {jp:"雨天の場合は、イベントを室内に変更することがあります。",kana:"うてんのばあいは、いべんとをしつないにへんこうすることがあります。",romaji:"Uten no baai wa, ibento o shitsunai ni henkou suru koto ga arimasu.",meaning:"Jika hujan, acara kemungkinan akan dipindahkan ke dalam ruangan."}
  ]}]},

  // ── GR-N4-52: 〜ようだ / みたいだ ──
  {id:"GR-N4-52",level:"N4",title:"〜ようだ / みたいだ",summary:"Menyatakan kesimpulan berdasarkan pengamatan langsung — apa yang dilihat, didengar, atau dirasakan sendiri. 〜ようだ lebih formal, 〜みたいだ lebih kasual. Nuansa: 'sepertinya ~' berdasarkan bukti nyata.",groups:[
    {name:"〜ようだ",description:"Formal. Berdasarkan observasi langsung. Sering dipakai dalam tulisan atau situasi lebih resmi.",sentences:[
      {jp:"外の音を聞くと、雨が降り始めたようだ。",kana:"そとのおとをきくと、あめがふりはじめたようだ。",romaji:"Soto no oto o kiku to, ame ga furihajimeta you da.",meaning:"Mendengar suara dari luar, sepertinya hujan mulai turun."},
      {jp:"彼の表情を見ると、結果があまりよくなかったようです。",kana:"かれのひょうじょうをみると、けっかがあまりよくなかったようです。",romaji:"Kare no hyoujou o miru to, kekka ga amari yokunakatta you desu.",meaning:"Melihat ekspresi wajahnya, sepertinya hasilnya kurang baik."},
      {jp:"会議室の電気が消えているようなので、もう終わったんでしょうね。",kana:"かいぎしつのでんきがきえているようなので、もうおわったんでしょうね。",romaji:"Kaigishitsu no denki ga kiete iru you na no de, mou owatta n deshou ne.",meaning:"Sepertinya lampu ruang rapat sudah dimatikan — mungkin sudah selesai ya."},
      {jp:"冷蔵庫の中に何もないようで、今夜は外食することにした。",kana:"れいぞうこのなかになにもないようで、こんやはがいしょくすることにした。",romaji:"Reizouko no naka ni nani mo nai you de, konya wa gaishoku suru koto ni shita.",meaning:"Sepertinya kulkas kosong, jadi malam ini memutuskan untuk makan di luar."},
      {jp:"彼女は疲れているようだったので、早めに切り上げることにした。",kana:"かのじょはつかれているようだったので、はやめにきりあげることにした。",romaji:"Kanojo wa tsukarete iru you datta no de, hayame ni kiriageru koto ni shita.",meaning:"Karena dia terlihat lelah, saya memutuskan untuk mengakhiri lebih awal."}
    ]},
    {name:"〜みたいだ",description:"Kasual. Berdasarkan observasi langsung. Umum dalam percakapan sehari-hari.",sentences:[
      {jp:"あの二人、最近ぎこちない気がするけど、何かあったみたいだね。",kana:"あのふたり、さいきんぎこちないきがするけど、なにかあったみたいだね。",romaji:"Ano futari, saikin gikochinai ki ga suru kedo, nanika atta mitai da ne.",meaning:"Dua orang itu belakangan kelihatan canggung — kayaknya ada sesuatu ya."},
      {jp:"財布がないと思ったら、鞄の底に入ってたみたい。よかった。",kana:"さいふがないとおもったら、かばんのそこにはいってたみたい。よかった。",romaji:"Saifu ga nai to omottara, kaban no soko ni haitte ta mitai. Yokatta.",meaning:"Kirain dompetnya hilang, ternyata ada di dasar tas. Syukurlah."},
      {jp:"このカフェ、いつも混んでるね。地元の人に人気みたい。",kana:"このかふぇ、いつもこんでるね。じもとのひとににんきみたい。",romaji:"Kono kafe, itsumo konde ru ne. Jimoto no hito ni ninki mitai.",meaning:"Kafe ini selalu ramai ya. Kayaknya populer di kalangan warga lokal."},
      {jp:"彼、連絡が全然来ないけど、スマホが壊れたみたいだって聞いた。",kana:"かれ、れんらくがぜんぜんこないけど、すまほがこわれたみたいだってきいた。",romaji:"Kare, renraku ga zenzen konai kedo, sumaho ga kowareta mitai datte kiita.",meaning:"Dia sama sekali tidak ada kabar, tapi dengar-dengar HPnya rusak."},
      {jp:"昨日飲みすぎたみたいで、今日は頭が痛くて仕事が手につかない。",kana:"きのうのみすぎたみたいで、きょうはあたまがいたくてしごとがてにつかない。",romaji:"Kinou nomisugita mitai de, kyou wa atama ga itakute shigoto ga te ni tsukanai.",meaning:"Kayaknya kemarin minum terlalu banyak, hari ini kepala sakit dan tidak bisa fokus kerja."}
    ]}
  ]},

  // ── GR-N4-53: 〜そうだ (様態) ──
  {id:"GR-N4-53",level:"N4",title:"〜そうだ (様態)",summary:"Menyatakan kesan atau dugaan berdasarkan penampilan visual saat ini — 'kelihatannya ~' atau 'sepertinya akan ~'. Berbeda dari 〜そうだ伝聞 yang berdasarkan informasi dari orang lain.",groups:[{name:"〜そうだ (様態)",description:"[V-stem / Adj-stem] + そうだ。Berdasarkan apa yang terlihat sekarang, bukan dari informasi orang lain.",sentences:[
    {jp:"空が暗くなってきた。雨が降りそうだから、傘を持って行ったほうがいいよ。",kana:"そらがくらくなってきた。あめがふりそうだから、かさをもっていったほうがいいよ。",romaji:"Sora ga kuraku natte kita. Ame ga furisou da kara, kasa o motte itta hou ga ii yo.",meaning:"Langit mulai gelap. Kayaknya mau hujan, lebih baik bawa payung."},
    {jp:"この荷物、重そうですね。手伝いましょうか？",kana:"このにもつ、おもそうですね。てつだいましょうか？",romaji:"Kono nimotsu, omosou desu ne. Tetsudaimashou ka?",meaning:"Barangnya kelihatan berat. Boleh saya bantu?"},
    {jp:"彼女、さっきからずっと笑ってる。何かいいことがあったそうな顔してるね。",kana:"かのじょ、さっきからずっとわらってる。なにかいいことがあったそうなかおしてるね。",romaji:"Kanojo, sakki kara zutto waratte ru. Nanika ii koto ga atta sou na kao shite ru ne.",meaning:"Dia dari tadi senyum-senyum terus. Kelihatan dari mukanya kayak ada hal baik yang terjadi ya."},
    {jp:"このケーキ、見るからにおいしそう。どこのお店のやつ？",kana:"このけーき、みるからにおいしそう。どこのおみせのやつ？",romaji:"Kono keeki, miru kara ni oishisou. Doko no omise no yatsu?",meaning:"Kue ini dari tampilannya saja sudah kelihatan enak. Dari toko mana?"},
    {jp:"あの子、今にも泣きそうな顔してるよ。大丈夫かな。",kana:"あのこ、いまにもなきそうなかおしてるよ。だいじょうぶかな。",romaji:"Ano ko, ima ni mo nakisou na kao shite ru yo. Daijoubu ka na.",meaning:"Anak itu mukanya seperti mau nangis. Baik-baik saja ya?"}
  ]}]},

  // ── GR-N4-54: 〜そうだ (伝聞) ──
  {id:"GR-N4-54",level:"N4",title:"〜そうだ (伝聞)",summary:"Menyampaikan informasi yang didengar dari sumber lain — 'katanya ~' atau 'dengar-dengarnya ~'. Berbeda dari 〜そうだ様態 karena berdasarkan informasi dari orang lain, bukan pengamatan sendiri.",groups:[{name:"〜そうだ (伝聞)",description:"[Kalimat biasa] + そうだ／そうです。Menyampaikan apa yang didengar dari sumber lain.",sentences:[
    {jp:"来月から電車の料金が値上がりするそうですよ。知ってました？",kana:"らいげつからでんしゃのりょうきんがねあがりするそうですよ。しってました？",romaji:"Raigetsu kara densha no ryoukin ga neagari suru sou desu yo. Shitte mashita?",meaning:"Katanya tarif kereta naik mulai bulan depan. Sudah tahu?"},
    {jp:"あのラーメン屋、今月いっぱいで閉店するそうで、最後にもう一回行きたい。",kana:"あのらーめんや、こんげついっぱいでへいてんするそうで、さいごにもういっかいいきたい。",romaji:"Ano raamen ya, kongetsu ippai de heiten suru sou de, saigo ni mou ikkai ikitai.",meaning:"Dengar-dengarnya warung ramen itu tutup akhir bulan ini — pengen ke sana sekali lagi sebelum tutup."},
    {jp:"田中さん、来月結婚するそうですよ。おめでたいですね。",kana:"たなかさん、らいげつけっこんするそうですよ。おめでたいですね。",romaji:"Tanaka-san, raigetsu kekkon suru sou desu yo. Omedetai desu ne.",meaning:"Katanya Tanaka-san bulan depan menikah. Selamat ya."},
    {jp:"新しい店長はかなり厳しいそうだから、心の準備をしておいたほうがいいよ。",kana:"あたらしいてんちょうはかなりきびしいそうだから、こころのじゅんびをしておいたほうがいいよ。",romaji:"Atarashii tenchou wa kanari kibishii sou da kara, kokoro no junbi o shite oita hou ga ii yo.",meaning:"Katanya manajer baru cukup keras — lebih baik siap-siap mental dari sekarang."},
    {jp:"この薬、副作用が少ないそうで、最近よく処方されているらしい。",kana:"このくすり、ふくさようがすくないそうで、さいきんよくしょほうされているらしい。",romaji:"Kono kusuri, fukusayou ga sukunai sou de, saikin yoku shohou sarete iru rashii.",meaning:"Katanya obat ini efek sampingnya sedikit, jadi belakangan sering diresepkan."}
  ]}]},

  // ── GR-N4-55: 〜でしょう ──
  {id:"GR-N4-55",level:"N4",title:"〜でしょう",summary:"Menyatakan perkiraan atau dugaan yang cukup yakin berdasarkan logika atau situasi. Dalam percakapan kasual sering jadi 〜だろう. Bisa juga dipakai untuk mengonfirmasi sesuatu kepada lawan bicara.",groups:[{name:"〜でしょう / 〜だろう",description:"[Kalimat] + でしょう (sopan) / だろう (kasual). Perkiraan atau dugaan yang lumayan yakin.",sentences:[
    {jp:"これだけ準備したんだから、うまくいくでしょう。心配しすぎないで。",kana:"これだけじゅんびしたんだから、うまくいくでしょう。しんぱいしすぎないで。",romaji:"Kore dake junbi shita n dakara, umaku iku deshou. Shinpai shinai de.",meaning:"Sudah persiapan sebanyak ini, pasti berjalan lancar kok. Jangan terlalu khawatir."},
    {jp:"夕方から雨が降るでしょうという予報が出ていますよ。",kana:"ゆうがたからあめがふるでしょうというよほうがでていますよ。",romaji:"Yuugata kara ame ga furu deshou to iu yohou ga dete imasu yo.",meaning:"Ada prakiraan cuaca yang menyebutkan kemungkinan hujan dari sore hari."},
    {jp:"彼女のことだから、きっと時間通りに来るだろう。几帳面だもん。",kana:"かのじょのことだから、きっとじかんどおりにくるだろう。きちょうめんだもん。",romaji:"Kanojo no koto dakara, kitto jikan doori ni kuru darou. Kichoumen da mon.",meaning:"Kalau dia sih, pasti datang tepat waktu. Orangnya memang teliti."},
    {jp:"こんな深夜に連絡してくるなんて、何か急なことがあったんでしょうね。",kana:"こんなしんやにれんらくしてくるなんて、なにかきゅうなことがあったんでしょうね。",romaji:"Konna shin'ya ni renraku shite kuru nante, nanika kyuu na koto ga atta n deshou ne.",meaning:"Sampai menghubungi di tengah malam seperti ini, pasti ada sesuatu yang mendesak ya."},
    {jp:"あんな無茶な働き方を続けたら、体を壊すのは時間の問題でしょう。",kana:"あんなむちゃなはたらきかたをつづけたら、からだをこわすのはじかんのもんだいでしょう。",romaji:"Anna mucha na hatarakikata o tsuzuketara, karada o kowasu no wa jikan no mondai deshou.",meaning:"Kalau terus bekerja dengan cara yang tidak masuk akal seperti itu, tinggal menunggu waktu sebelum badan rusak."}
  ]}]},

  // ── GR-N4-56: 〜と思う ──
  {id:"GR-N4-56",level:"N4",title:"〜と思う",summary:"Menyatakan pendapat, perkiraan, atau rencana pribadi. 〜と思う = saya pikir / saya rasa. 〜と思っている = sedang berpikir / berniat. Nuansanya lebih lunak dan personal dibanding pernyataan langsung.",groups:[
    {name:"〜と思う",description:"Menyampaikan pendapat atau perkiraan saat ini.",sentences:[
      {jp:"正直に話したほうがいいと思うけど、タイミングが難しいよね。",kana:"しょうじきにはなしたほうがいいとおもうけど、たいみんぐがむずかしいよね。",romaji:"Shoujiki ni hanashita hou ga ii to omou kedo, taimingu ga muzukashii yo ne.",meaning:"Menurut saya lebih baik bicara jujur, tapi memang soal timingnya susah ya."},
      {jp:"この部屋、家具を減らしたほうがもっと広く使えると思います。",kana:"このへや、かぐをへらしたほうがもっとひろくつかえるとおもいます。",romaji:"Kono heya, kagu o herashita hou ga motto hiroku tsukaeru to omoimasu.",meaning:"Menurut saya kamar ini akan terasa lebih luas kalau furniturnya dikurangi."},
      {jp:"そのやり方でいけると思ったんだけど、実際やってみたら全然ダメだった。",kana:"そのやりかたでいけるとおもったんだけど、じっさいやってみたらぜんぜんだめだった。",romaji:"Sono yarikata de ikeru to omotta n da kedo, jissai yatte mitara zenzen dame datta.",meaning:"Kira-kira dengan cara itu bisa berhasil, tapi pas dicoba ternyata tidak berhasil sama sekali."},
      {jp:"あの映画、賛否両論あるみたいだけど、個人的には好きだと思う。",kana:"あのえいが、さんぴりょうろんあるみたいだけど、こじんてきにはすきだとおもう。",romaji:"Ano eiga, sanpi ryouron aru mitai da kedo, kojinteki ni wa suki da to omou.",meaning:"Film itu kayaknya pro-kontra, tapi secara pribadi saya suka."},
      {jp:"失敗を恐れて何もしないより、動いてみることのほうが大事だと思う。",kana:"しっぱいをおそれてなにもしないより、うごいてみることのほうがだいじだとおもう。",romaji:"Shippai o osorete nani mo shinai yori, ugoite miru koto no hou ga daiji da to omou.",meaning:"Daripada tidak melakukan apa-apa karena takut gagal, mencoba untuk bergerak itu lebih penting menurut saya."}
    ]},
    {name:"〜と思っている",description:"Sedang mempertimbangkan atau berniat melakukan sesuatu.",sentences:[
      {jp:"来年あたりから、フリーランスに転向しようと思っています。",kana:"らいねんあたりから、ふりーらんすにてんこうしようとおもっています。",romaji:"Rainen atari kara, furiiransu ni tenkou shiyou to omotte imasu.",meaning:"Sekitar tahun depan, saya sedang berpikir untuk beralih menjadi freelancer."},
      {jp:"最近料理を始めようと思っているんだけど、何から始めればいいかな。",kana:"さいきんりょうりをはじめようとおもっているんだけど、なにからはじめればいいかな。",romaji:"Saikin ryouri o hajimeyou to omotte iru n da kedo, nani kara hajimerereba ii ka na.",meaning:"Belakangan sedang berpikir untuk mulai masak, tapi bingung mulai dari mana."},
      {jp:"ずっと先延ばしにしてきたけど、そろそろ免許を取ろうと思っている。",kana:"ずっとさきのばしにしてきたけど、そろそろめんきょをとろうとおもっている。",romaji:"Zutto sakinobashi ni shite kita kedo, sorosoro menkyo o torou to omotte iru.",meaning:"Sudah lama ditunda-tunda, tapi sudah berpikir untuk segera ambil SIM."},
      {jp:"この仕事、もう少し続けてみようと思っているけど、正直迷っている。",kana:"このしごと、もうすこしつづけてみようとおもっているけど、しょうじきまよっている。",romaji:"Kono shigoto, mou sukoshi tsuzukete miyou to omotte iru kedo, shoujiki mayotte iru.",meaning:"Berpikir untuk coba bertahan sedikit lagi di kerjaan ini, tapi jujur masih bimbang."},
      {jp:"いつか自分でお店を開こうと思っているから、今は少しずつ貯金しています。",kana:"いつかじぶんでおみせをひらこうとおもっているから、いまはすこしずつちょきんしています。",romaji:"Itsuka jibun de omise o hirakout to omotte iru kara, ima wa sukoshi zutsu chokin shite imasu.",meaning:"Karena berniat membuka toko sendiri suatu hari nanti, sekarang sedang menabung sedikit demi sedikit."}
    ]}
  ]},

  // ── GR-N4-57: 〜かもしれない ──
  {id:"GR-N4-57",level:"N4",title:"〜かもしれない",summary:"Menyatakan kemungkinan yang tidak terlalu yakin — 'mungkin ~' atau 'bisa jadi ~'. Lebih tidak yakin dari 〜でしょう. Dipakai saat tidak ada cukup bukti untuk yakin, tapi ada kemungkinan.",groups:[{name:"〜かもしれない",description:"[Kalimat biasa] + かもしれない／かもしれません。Kemungkinan sekitar 50% atau kurang.",sentences:[
    {jp:"鍵、車の中に忘れてきたかもしれない。ちょっと確認してくる。",kana:"かぎ、くるまのなかにわすれてきたかもしれない。ちょっとかくにんしてくる。",romaji:"Kagi, kuruma no naka ni wasurete kita kamo shirenai. Chotto kakunin shite kuru.",meaning:"Mungkin kunci ketinggalan di dalam mobil. Sebentar mau cek dulu."},
    {jp:"彼が急に連絡をくれなくなったのは、怒っているからかもしれない。",kana:"かれがきゅうにれんらくをくれなくなったのは、おこっているからかもしれない。",romaji:"Kare ga kyuu ni renraku o kurenaku natta no wa, okotte iru kara kamo shirenai.",meaning:"Dia yang tiba-tiba tidak menghubungi — mungkin karena marah."},
    {jp:"このプロジェクト、締め切りに間に合わないかもしれないです。早めに相談したほうがいいですか。",kana:"このぷろじぇくと、しめきりにまにあわないかもしれないです。はやめにそうだんしたほうがいいですか。",romaji:"Kono purojekuto, shimekiri ni ma ni awanai kamo shirenai desu. Hayame ni soudan shita hou ga ii desu ka.",meaning:"Proyek ini mungkin tidak akan selesai tepat waktu. Sebaiknya dikonsultasikan lebih awal?"},
    {jp:"あの頃は気づかなかったけど、あれが人生の転機だったかもしれない。",kana:"あのころはきづかなかったけど、あれがじんせいのてんきだったかもしれない。",romaji:"Ano koro wa kidzukanakatta kedo, are ga jinsei no tenki datta kamo shirenai.",meaning:"Waktu itu tidak sadar, tapi mungkin itulah titik balik dalam hidup saya."},
    {jp:"無理して来なくてもよかったかもしれないけど、来てよかったって今は思ってる。",kana:"むりしてこなくてもよかったかもしれないけど、きてよかったっていまはおもってる。",romaji:"Muri shite konakute mo yokatta kamo shirenai kedo, kite yokatta tte ima wa omotte ru.",meaning:"Mungkin tidak perlu memaksakan diri untuk datang, tapi sekarang merasa bersyukur sudah ke sini."}
  ]}]},

  // ── GR-N4-58: 〜はず ──
  {id:"GR-N4-58",level:"N4",title:"〜はず",summary:"Menyatakan keyakinan berdasarkan pengetahuan atau logika — 'seharusnya ~' atau 'semestinya ~'. Pembicara yakin ini benar berdasarkan informasi yang dimiliki. Kalau kenyataannya berbeda, biasanya ada nuansa terkejut atau kecewa.",groups:[{name:"〜はず",description:"[Kalimat] + はずだ／はずです。Yakin berdasarkan alasan logis atau informasi yang sudah diketahui.",sentences:[
    {jp:"確認メールを送ったはずなんですが、届いていませんか？",kana:"かくにんめーるをおくったはずなんですが、とどいていませんか？",romaji:"Kakunin meeru o okutta hazu na n desu ga, todoite imasen ka?",meaning:"Saya yakin sudah mengirim email konfirmasi — apakah belum masuk?"},
    {jp:"彼女は昨日ここにいたはずだよ。なんでいないんだろう。",kana:"かのじょはきのうここにいたはずだよ。なんでいないんだろう。",romaji:"Kanojo wa kinou koko ni ita hazu da yo. Nande inai n darou.",meaning:"Dia seharusnya ada di sini kemarin. Kenapa tidak ada ya."},
    {jp:"この薬を飲めば、明日には熱が下がるはずです。",kana:"このくすりをのめば、あしたにはねつがさがるはずです。",romaji:"Kono kusuri o nomeba, ashita ni wa netsu ga sagaru hazu desu.",meaning:"Kalau minum obat ini, demamnya seharusnya turun besok."},
    {jp:"あれだけ頑張ったんだから、結果が出るはずだと信じてる。",kana:"あれだけがんばったんだから、けっかがでるはずだとしんじてる。",romaji:"Are dake ganbatta n dakara, kekka ga deru hazu da to shinjite ru.",meaning:"Sudah bekerja keras sebanyak itu, saya percaya hasilnya pasti akan muncul."},
    {jp:"マニュアル通りにやったはずなのに、なぜかエラーが出る。",kana:"まにゅある通りにやったはずなのに、なぜかえらーがでる。",romaji:"Manyuaru doori ni yatta hazu na noni, naze ka eraa ga deru.",meaning:"Harusnya sudah dikerjakan sesuai panduan, tapi entah kenapa tetap muncul error."}
  ]}]},

  // ── GR-N4-59: 〜なさい ──
  {id:"GR-N4-59",level:"N4",title:"〜なさい",summary:"Perintah yang disampaikan dengan otoritas — orang tua ke anak, guru ke murid, atau atasan ke bawahan. Lebih lembut dari bentuk perintah kasar 〜ろ, tapi tetap bersifat direktif. Tidak dipakai antar teman sebaya.",groups:[{name:"〜なさい",description:"[V-stem] + なさい. Perintah sopan namun tegas dari posisi yang lebih tinggi.",sentences:[
    {jp:"もういい時間だから、早く寝なさい。明日も学校があるでしょう。",kana:"もういいじかんだから、はやくねなさい。あしたもがっこうがあるでしょう。",romaji:"Mou ii jikan da kara, hayaku nenasai. Ashita mo gakkou ga aru deshou.",meaning:"Sudah larut, cepat tidur. Besok juga ada sekolah kan."},
    {jp:"人が話しているときはきちんと聞きなさい。スマホは後でいい。",kana:"ひとがはなしているときはきちんとききなさい。すまほはあとでいい。",romaji:"Hito ga hanashite iru toki wa kichinto kikinasai. Sumaho wa ato de ii.",meaning:"Waktu orang sedang bicara, dengarkan dengan baik. HP bisa nanti."},
    {jp:"わからないことがあったら、恥ずかしがらずに質問しなさい。",kana:"わからないことがあったら、はずかしがらずにしつもんしなさい。",romaji:"Wakaranai koto ga attara, hazukashigarazu ni shitsumon shinasai.",meaning:"Kalau ada yang tidak mengerti, jangan malu dan bertanyalah."},
    {jp:"自分でやると決めたことは、最後までちゃんとやり遂げなさい。",kana:"じぶんでやるときめたことは、さいごまでちゃんとやりとげなさい。",romaji:"Jibun de yaru to kimeta koto wa, saigo made chanto yaritogenasai.",meaning:"Hal yang sudah kamu putuskan untuk lakukan sendiri, selesaikan sampai tuntas."},
    {jp:"失敗してもいいから、まずは自分の力でやってみなさい。",kana:"しっぱいしてもいいから、まずはじぶんのちからでやってみなさい。",romaji:"Shippai shite mo ii kara, mazu wa jibun no chikara de yatte minasai.",meaning:"Tidak apa-apa kalau gagal, yang penting coba dulu dengan kemampuan sendiri."}
  ]}]},
  
  // ══════════════════════════════════════════════════════════════════
// BATCH 5 — N4: no. 62, 63, 64, 65, 66, 67, 68, 69, 70
// Paste tepat setelah entry terakhir sebelum ];
// Jangan lupa koma setelah entry sebelumnya!
// ══════════════════════════════════════════════════════════════════

  // ── GR-N4-62: [V意向形] と思う ──
  {id:"GR-N4-62",level:"N4",title:"[V意向形] と思う",summary:"Menyatakan niat atau rencana yang baru diputuskan atau sedang dipertimbangkan oleh pembicara. 〜ようと思う = baru saja memutuskan. 〜ようと思っている = sudah sejak tadi berniat / sedang berpikir. Berbeda dari 〜つもり yang lebih pasti.",groups:[
    {name:"〜ようと思う",description:"Niat yang baru muncul atau keputusan yang baru dibuat saat berbicara.",sentences:[
      {jp:"最近ストレスがたまってきたし、来週から少し運動しようと思います。",kana:"さいきんすとれすがたまってきたし、らいしゅうからすこしうんどうしようとおもいます。",romaji:"Saikin sutoresu ga tamatte kita shi, raishuu kara sukoshi undou shiyou to omoimasu.",meaning:"Belakangan stres menumpuk, jadi mulai minggu depan mau coba olahraga sedikit."},
      {jp:"そんなに評判がいいなら、今度行ってみようと思います。",kana:"そんなにひょうばんがいいなら、こんどいってみようとおもいます。",romaji:"Sonna ni hyouban ga ii nara, kondo itte miyou to omoimasu.",meaning:"Kalau memang sebagus itu ulasannya, lain kali mau coba ke sana."},
      {jp:"もう愚痴を言うのをやめようと思う。自分が疲れるだけだし。",kana:"もうぐちをいうのをやめようとおもう。じぶんがつかれるだけだし。",romaji:"Mou guchi o iu no o yameyou to omou. Jibun ga tsukareru dake da shi.",meaning:"Mau berhenti ngeluh. Capek sendiri juga pada akhirnya."},
      {jp:"このまま何もしないのも後悔しそうだから、思い切って応募しようと思います。",kana:"このままなにもしないのもこうかいしそうだから、おもいきっておうぼしようとおもいます。",romaji:"Kono mama nani mo shinai no mo koukai shisou da kara, omoikitte oubo shiyou to omoimasu.",meaning:"Kalau tidak melakukan apa-apa juga rasanya akan menyesal, jadi mau beranikan diri untuk melamar."},
      {jp:"せっかくだから、帰りに本屋に寄っていこうと思う。",kana:"せっかくだから、かえりにほんやによっていこうとおもう。",romaji:"Sekkaku da kara, kaeri ni hon'ya ni yotte ikou to omou.",meaning:"Sayang kalau tidak, mau mampir ke toko buku waktu pulang nanti."}
    ]},
    {name:"〜ようと思っている",description:"Niat yang sudah ada sejak sebelumnya, bukan keputusan baru.",sentences:[
      {jp:"ずっと行きたかった国に、来年こそ旅行しようと思っています。",kana:"ずっといきたかったくにに、らいねんこそりょこうしようとおもっています。",romaji:"Zutto ikitakatta kuni ni, rainen koso ryokou shiyou to omotte imasu.",meaning:"Negara yang sudah lama ingin dikunjungi — tahun depan ini pasti mau ke sana."},
      {jp:"転職しようと思っているんですが、なかなか踏み切れなくて。",kana:"てんしょくしようとおもっているんですが、なかなかふみきれなくて。",romaji:"Tenshoku shiyou to omotte iru n desu ga, nakanaka fumikirenakute.",meaning:"Sudah berniat ganti kerja, tapi belum juga bisa membulatkan tekad."},
      {jp:"体のためにも、そろそろ禁煙しようと思っているよ。本気で。",kana:"からだのためにも、そろそろきんえんしようとおもっているよ。ほんきで。",romaji:"Karada no tame ni mo, sorosoro kin'en shiyou to omotte iru yo. Honki de.",meaning:"Demi kesehatan juga, sudah berniat untuk berhenti merokok. Serius ini."},
      {jp:"卒業したら、しばらく実家に帰ろうと思っています。",kana:"そつぎょうしたら、しばらくじっかにかえろうとおもっています。",romaji:"Sotsugyou shitara, shibaraku jikka ni kaerou to omotte imasu.",meaning:"Setelah lulus, berniat untuk pulang ke rumah orang tua dulu untuk sementara waktu."},
      {jp:"いつかこの経験を本にまとめようと思っているけど、まだ構想段階です。",kana:"いつかこのけいけんをほんにまとめようとおもっているけど、まだこうそうだんかいです。",romaji:"Itsuka kono keiken o hon ni matameyou to omotte iru kedo, mada kousou dankai desu.",meaning:"Berniat suatu saat membukukan pengalaman ini, tapi masih tahap merencanakan."}
    ]}
  ]},

  // ── GR-N4-63: 予定 ──
  {id:"GR-N4-63",level:"N4",title:"予定",summary:"Menyatakan rencana atau jadwal yang sudah ditetapkan. 〜予定です = sudah direncanakan / dijadwalkan. Lebih pasti dari 〜つもり dan 〜ようと思う karena biasanya sudah ada komitmen konkret.",groups:[{name:"〜予定",description:"[V辞書形/Nの] + 予定です。Rencana atau jadwal yang sudah dipastikan.",sentences:[
    {jp:"来月の十五日に大阪出張の予定があるので、その週は難しいです。",kana:"らいげつのじゅうごにちにおおさかしゅっちょうのよていがあるので、そのしゅうはむずかしいです。",romaji:"Raigetsu no juugonichi ni Oosaka shutchou no yotei ga aru no de, sono shuu wa muzukashii desu.",meaning:"Tanggal 15 bulan depan sudah ada jadwal dinas ke Osaka, jadi minggu itu agak sulit."},
    {jp:"この道路、来年の春から工事が始まる予定だそうです。",kana:"このどうろ、らいねんのはるからこうじがはじまるよていだそうです。",romaji:"Kono douro, rainen no haru kara kouji ga hajimaru yotei da sou desu.",meaning:"Katanya jalan ini dijadwalkan mulai diperbaiki dari musim semi tahun depan."},
    {jp:"卒業式は三月二十日に行われる予定です。ご家族もご参列いただけます。",kana:"そつぎょうしきはさんがつはつかにおこなわれるよていです。ごかぞくもごさんれつできます。",romaji:"Sotsugyou shiki wa sangatsu hatsuka ni okonawareru yotei desu. Go-kazoku mo go-sanretsu itadakemasu.",meaning:"Upacara wisuda dijadwalkan pada tanggal 20 Maret. Keluarga juga dipersilakan hadir."},
    {jp:"予定通りに進めば、プロジェクトは今月末に完了する見込みです。",kana:"よていどおりにすすめば、ぷろじぇくとはこんげつまつにかんりょうするみこみです。",romaji:"Yotei doori ni susumeば, purojekuto wa kongetsu matsu ni kanryou suru mikomi desu.",meaning:"Kalau berjalan sesuai rencana, proyek ini diperkirakan selesai akhir bulan ini."},
    {jp:"急用が入ってしまって、せっかくの予定がキャンセルになった。",kana:"きゅうようがはいってしまって、せっかくのよていがきゃんせるになった。",romaji:"Kyuuyou ga haitte shimatte, sekkaku no yotei ga kyanseru ni natta.",meaning:"Ada keperluan mendadak, jadi rencana yang sudah dinantikan terpaksa dibatalkan."}
  ]}]},

  // ── GR-N4-64: 〜つもり ──
  {id:"GR-N4-64",level:"N4",title:"〜つもり",summary:"Menyatakan niat atau tekad yang sudah cukup kuat dari pembicara. Lebih pasti dari 〜ようと思う, tapi berbeda dari 予定 yang sudah bersifat jadwal konkret. 〜つもりはない = tidak berniat sama sekali.",groups:[
    {name:"〜つもり (niat)",description:"[V辞書形 / Vない] + つもりです。Rencana pribadi yang sudah diputuskan.",sentences:[
      {jp:"来年は絶対に日本語能力試験を受けるつもりです。もう申し込みました。",kana:"らいねんはぜったいにほんごのうりょくしけんをうけるつもりです。もうもうしこみました。",romaji:"Rainen wa zettai Nihongo Nouryoku Shiken o ukeru tsumori desu. Mou moushikomi mashita.",meaning:"Tahun depan pasti akan ikut ujian kemampuan bahasa Jepang. Sudah daftar."},
      {jp:"定年後は田舎に移住して、のんびり農業をするつもりです。",kana:"ていねんごはいなかにいじゅうして、のんびりのうぎょうをするつもりです。",romaji:"Teinen go wa inaka ni ijuu shite, nonbiri nougyou o suru tsumori desu.",meaning:"Setelah pensiun, berniat pindah ke pedesaan dan bertani dengan santai."},
      {jp:"あの人には二度と連絡しないつもり。もう関わりたくない。",kana:"あのひとにはにどとれんらくしないつもり。もうかかわりたくない。",romaji:"Ano hito ni wa nido to renraku shinai tsumori. Mou kakawaritakunai.",meaning:"Tidak akan menghubungi orang itu lagi. Tidak mau ada urusan lagi."},
      {jp:"このまま黙っているつもりはありません。ちゃんと意見を言います。",kana:"このままだまっているつもりはありません。ちゃんといけんをいいます。",romaji:"Kono mama damatte iru tsumori wa arimasen. Chanto iken o iimasu.",meaning:"Tidak berniat diam terus. Akan saya sampaikan pendapat saya dengan jelas."},
      {jp:"今夜は早く帰るつもりだったのに、また残業になってしまった。",kana:"こんやははやくかえるつもりだったのに、またざんぎょうになってしまった。",romaji:"Konya wa hayaku kaeru tsumori datta noni, mata zangyou ni natte shimatta.",meaning:"Padahal tadi niat pulang cepat, eh lembur lagi."}
    ]},
    {name:"〜つもりで",description:"Bertindak seolah-olah dalam kondisi atau peran tertentu.",sentences:[
      {jp:"本番のつもりで練習すると、実際に緊張したときの対応力が上がる。",kana:"ほんばんのつもりでれんしゅうすると、じっさいにきんちょうしたときのたいおうりょくがあがる。",romaji:"Honban no tsumori de renshuu suru to, jissai ni kinchou shita toki no taiouryoku ga agaru.",meaning:"Kalau latihan seolah-olah ini hari-H beneran, kemampuan menghadapi situasi tegang juga akan meningkat."},
      {jp:"旅人のつもりで自分の町を歩いてみると、意外な発見がたくさんある。",kana:"たびびとのつもりでじぶんのまちをあるいてみると、いがいなはっけんがたくさんある。",romaji:"Tabibito no tsumori de jibun no machi o aruite miru to, igai na hakken ga takusan aru.",meaning:"Coba jalan-jalan di kota sendiri seolah-olah sebagai wisatawan — ternyata banyak hal mengejutkan yang ditemukan."},
      {jp:"相手の立場のつもりで考えてみると、なぜそういう行動をとったかが少しわかった。",kana:"あいてのたちばのつもりでかんがえてみると、なぜそういうこうどうをとったかがすこしわかった。",romaji:"Aite no tachiba no tsumori de kangaete miru to, naze sou iu koudou o totta ka ga sukoshi wakatta.",meaning:"Coba berpikir dari posisi orang lain, sedikit mulai mengerti kenapa dia bertindak seperti itu."},
      {jp:"先生のつもりで友達に説明してみたら、自分の理解が足りていないことに気づいた。",kana:"せんせいのつもりでともだちにせつめいしてみたら、じぶんのりかいがたりていないことにきづいた。",romaji:"Sensei no tsumori de tomodachi ni setsumei shite mitara, jibun no rikai ga tarite inai koto ni kidzuita.",meaning:"Coba jelaskan ke teman seolah-olah jadi guru — ternyata sadar sendiri pemahamannya masih kurang."},
      {jp:"捨てるつもりで押し入れを整理したら、懐かしいものがたくさん出てきた。",kana:"すてるつもりでおしいれをせいりしたら、なつかしいものがたくさんでてきた。",romaji:"Suteru tsumori de oshiire o seiri shitara, natsukashii mono ga takusan dete kita.",meaning:"Waktu beres-beres lemari dengan niat buang-buang, malah banyak barang lama yang bikin nostalgia."}
    ]}
  ]},

  // ── GR-N4-65: 〜てみる ──
  {id:"GR-N4-65",level:"N4",title:"〜てみる",summary:"Melakukan sesuatu sebagai percobaan untuk melihat hasilnya — 'coba ~'. Nuansa: belum tahu hasilnya, tapi mau dicoba dulu. Berbeda dari sekedar melakukan — ada elemen eksperimen atau rasa ingin tahu.",groups:[{name:"〜てみる",description:"[Verb-te] + みる。Mencoba melakukan sesuatu untuk pertama kali atau sebagai eksperimen.",sentences:[
    {jp:"話すだけ話してみたけど、やっぱりうまく伝わらなかった。",kana:"はなすだけはなしてみたけど、やっぱりうまくつたわらなかった。",romaji:"Hanasu dake hanashite mita kedo, yappari umaku tsutawaranakatta.",meaning:"Sudah coba bilang apa yang dirasakan, tapi tetap saja tidak tersampaikan dengan baik."},
    {jp:"このレシピ、難しそうだけど一回作ってみようかな。",kana:"このれしぴ、むずかしそうだけどいっかいつくってみようかな。",romaji:"Kono reshipi, muzukashisou da kedo ikkai tsukutte miyou ka na.",meaning:"Resep ini kelihatan susah, tapi mau coba bikin sekali deh."},
    {jp:"ダメ元でメールを送ってみたら、まさかの返信が来た。",kana:"だめもとでめーるをおくってみたら、まさかのへんしんがきた。",romaji:"Dame moto de meeru o okutte mitara, masaka no henshin ga kita.",meaning:"Iseng-iseng kirim email tanpa harapan, eh ternyata ada balasannya."},
    {jp:"日本に来てから、納豆を初めて食べてみた。正直まだ苦手です。",kana:"にほんにきてから、なっとうをはじめてたべてみた。しょうじきまだにがてです。",romaji:"Nihon ni kite kara, nattou o hajimete tabete mita. Shoujiki mada nigate desu.",meaning:"Setelah datang ke Jepang, pertama kali mencoba natto. Jujur masih belum cocok."},
    {jp:"悩んでいるより、まず動いてみることが大事だと思う。",kana:"なやんでいるより、まずうごいてみることがだいじだとおもう。",romaji:"Nayande iru yori, mazu ugoite miru koto ga daiji da to omou.",meaning:"Daripada terus galau, yang penting coba bergerak dulu — itu yang lebih penting menurut saya."}
  ]}]},

  // ── GR-N4-66: 〜ておく ──
  {id:"GR-N4-66",level:"N4",title:"〜ておく",summary:"Melakukan sesuatu terlebih dahulu sebagai persiapan atau untuk tujuan ke depan — 'melakukan ~ sebelumnya' atau 'menyiapkan ~'. Nuansa: tindakan dilakukan dengan sengaja demi situasi yang akan datang. Dalam percakapan kasual sering menjadi 〜とく.",groups:[{name:"〜ておく",description:"[Verb-te] + おく。Tindakan preventif atau persiapan yang dilakukan sebelum kondisi tertentu tiba.",sentences:[
    {jp:"面接の前に、会社のことをちゃんと調べておいたほうがいいよ。",kana:"めんせつのまえに、かいしゃのことをちゃんとしらべておいたほうがいいよ。",romaji:"Mensetsu no mae ni, kaisha no koto o chanto shirabete oita hou ga ii yo.",meaning:"Sebelum interview, lebih baik pelajari dulu informasi tentang perusahaannya dengan baik."},
    {jp:"旅行前に両替しておいたおかげで、空港でいちいち並ばなくてよかった。",kana:"りょこうまえにりょうがえしておいたおかげで、くうこうでいちいちならばなくてよかった。",romaji:"Ryokou mae ni ryougae shite oita okage de, kuukou de ichichi narabanakute yokatta.",meaning:"Berkat sudah menukar uang sebelum berangkat, tidak perlu antre satu per satu di bandara."},
    {jp:"このチケット、早めに予約しとかないと売り切れるよ。",kana:"このちけっと、はやめによやくしとかないとうりきれるよ。",romaji:"Kono chiketto, hayame ni yoyaku shitoka nai to urikireru yo.",meaning:"Tiket ini kalau tidak cepat-cepat dipesan bisa habis lho."},
    {jp:"緊急連絡先は必ずスマホにメモしておいてください。",kana:"きんきゅうれんらくさきはかならずすまほにめもしておいてください。",romaji:"Kinkyuu renrakusaki wa kanarazu sumaho ni memo shite oite kudasai.",meaning:"Pastikan nomor darurat sudah dicatat di HP sebelumnya."},
    {jp:"言いたいことは全部言っておいた。後悔はないよ。",kana:"いいたいことはぜんぶいっておいた。こうかいはないよ。",romaji:"Iitai koto wa zenbu itte oita. Koukai wa nai yo.",meaning:"Semua yang ingin dikatakan sudah disampaikan. Tidak ada penyesalan."}
  ]}]},

  // ── GR-N4-67: 〜ように ──
  {id:"GR-N4-67",level:"N4",title:"〜ように",summary:"Beberapa fungsi: (1) menyatakan tujuan agar suatu kondisi tercapai — 'supaya ~', (2) meminta atau menyuruh seseorang melakukan sesuatu secara tidak langsung, (3) mendoakan atau berharap sesuatu terjadi.",groups:[
    {name:"〜ように (tujuan)",description:"[V辞書形 / Vない] + ように + [tindakan]. Melakukan sesuatu supaya kondisi tertentu terwujud.",sentences:[
      {jp:"聞き取れるように、毎日ポッドキャストを聴いて耳を鍛えています。",kana:"ききとれるように、まいにちぽっどきゃすとをきいてみをきたえています。",romaji:"Kikitoreru you ni, mainichi poddokyasuto o kiite mimi o kitaete imasu.",meaning:"Supaya bisa mendengar dengan baik, setiap hari melatih telinga dengan mendengarkan podcast."},
      {jp:"遅刻しないように、家を三十分早く出ることにした。",kana:"ちこくしないように、いえをさんじゅっぷんはやくでることにした。",romaji:"Chikoku shinai you ni, ie o sanjuppun hayaku deru koto ni shita.",meaning:"Supaya tidak telat, memutuskan untuk keluar rumah 30 menit lebih awal."},
      {jp:"誰にでもわかるように、図を使って説明してもらえますか。",kana:"だれにでもわかるように、ずをつかってせつめいしてもらえますか。",romaji:"Dare ni demo wakaru you ni, zu o tsukatte setsumei shite moraemasu ka.",meaning:"Supaya semua orang bisa mengerti, bisa tolong jelaskan menggunakan gambar/diagram?"},
      {jp:"忘れないように、もらったアドバイスをすぐメモに残した。",kana:"わすれないように、もらったあどばいすをすぐめもにのこした。",romaji:"Wasurenai you ni, moratta adobaisu o sugu memo ni nokoshita.",meaning:"Supaya tidak lupa, langsung catat saran yang didapat."},
      {jp:"後で後悔しないように、今できることは全部やっておこう。",kana:"あとでこうかいしないように、いまできることはぜんぶやっておこう。",romaji:"Ato de koukai shinai you ni, ima dekiru koto wa zenbu yatte okou.",meaning:"Supaya tidak menyesal nanti, yuk lakukan semua yang bisa dilakukan sekarang."}
    ]},
    {name:"〜ように (harapan / doa)",description:"Digunakan untuk mengungkapkan harapan atau doa agar sesuatu terjadi.",sentences:[
      {jp:"試験に合格できるように、毎晩祈っています。",kana:"しけんにごうかくできるように、まいばんいのっています。",romaji:"Shiken ni goukaku dekiru you ni, maiban inotte imasu.",meaning:"Semoga bisa lulus ujian — saya doakan setiap malam."},
      {jp:"どうか元気になりますように。遠くから応援しています。",kana:"どうかげんきになりますように。とおくからおうえんしています。",romaji:"Douka genki ni narimasu you ni. Tooku kara ouen shite imasu.",meaning:"Semoga cepat pulih. Saya doakan dari jauh."},
      {jp:"二人がいつまでも仲良くいられますように。",kana:"ふたりがいつまでもなかよくいられますように。",romaji:"Futari ga itsu made mo nakayoku iraremas you ni.",meaning:"Semoga kalian berdua selalu baik-baik saja dan tetap akur."},
      {jp:"来年こそいいことがたくさんありますように、と願いを込めて書いた。",kana:"らいねんこそいいことがたくさんありますように、とねがいをこめてかいた。",romaji:"Rainen koso ii koto ga takusan arimasu you ni, to negai o komete kaita.",meaning:"Menulis dengan penuh harapan: semoga tahun depan ini banyak hal baik yang terjadi."},
      {jp:"この手紙が無事に届きますように。",kana:"このてがみがぶじにとどきますように。",romaji:"Kono tegami ga buji ni todokimasu you ni.",meaning:"Semoga surat ini sampai dengan selamat."}
    ]}
  ]},

  // ── GR-N4-68: 〜ために ──
  {id:"GR-N4-68",level:"N4",title:"〜ために",summary:"Menyatakan tujuan yang jelas dan disengaja — 'demi ~' atau 'untuk ~'. Dipakai ketika melakukan sesuatu dengan tujuan konkret. Berbeda dari 〜ように: ために biasa untuk tujuan yang bisa dikontrol langsung, ように untuk kondisi yang diharapkan tercapai.",groups:[
    {name:"〜ために (tujuan aksi)",description:"[V辞書形 / Nの] + ために + [tindakan]. Melakukan sesuatu secara aktif demi mencapai tujuan.",sentences:[
      {jp:"奨学金をもらうために、この一年間必死で勉強した。",kana:"しょうがくきんをもらうために、このいちねんかんひっしでべんきょうした。",romaji:"Shougakukin o morau tame ni, kono ichinnenkan hisshi de benkyou shita.",meaning:"Demi mendapatkan beasiswa, satu tahun ini belajar habis-habisan."},
      {jp:"健康のために始めたジョギングが、今では生活の一部になっている。",kana:"けんこうのためにはじめたじょぎんぐが、いまではせいかつのいちぶになっている。",romaji:"Kenkou no tame ni hajimeta jogingu ga, ima de wa seikatsu no ichibu ni natte iru.",meaning:"Jogging yang awalnya dimulai demi kesehatan, kini sudah jadi bagian dari keseharian."},
      {jp:"家族を養うために、好きでもない仕事を続けている人もいる。",kana:"かぞくをやしなうために、すきでもないしごとをつづけているひともいる。",romaji:"Kazoku o yashinau tame ni, suki demo nai shigoto o tsuzukete iru hito mo iru.",meaning:"Ada juga orang yang terus bekerja di pekerjaan yang tidak mereka sukai demi menghidupi keluarga."},
      {jp:"夢のために今の安定を手放すのは怖いけど、後悔したくない。",kana:"ゆめのためにいまのあんていをてばなすのはこわいけど、こうかいしたくない。",romaji:"Yume no tame ni ima no antei o tebanasu no wa kowai kedo, koukai shitakunai.",meaning:"Melepas stabilitas yang ada demi impian memang menakutkan, tapi tidak mau menyesal."},
      {jp:"プレゼンをうまくするために、鏡の前で何度も練習した。",kana:"ぷれぜんをうまくするために、かがみのまえでなんどもれんしゅうした。",romaji:"Purezen o umaku suru tame ni, kagami no mae de nando mo renshuu shita.",meaning:"Demi presentasi yang lancar, sudah latihan berkali-kali di depan cermin."}
    ]},
    {name:"〜ために (sebab / alasan)",description:"Nuansa penyebab — karena kondisi tertentu, suatu hal terjadi. Berbeda dari tujuan.",sentences:[
      {jp:"台風のために、イベントが急遽中止になった。",kana:"たいふうのために、いべんとがきゅうきょちゅうしになった。",romaji:"Taifuu no tame ni, ibento ga kyuukyo chuushi ni natta.",meaning:"Karena topan, acara terpaksa dibatalkan secara mendadak."},
      {jp:"不注意のために大事なデータを消してしまい、かなり落ち込んだ。",kana:"ふちゅういのためにだいじなでーたをけしてしまい、かなりおちこんだ。",romaji:"Fuchuui no tame ni daiji na deeta o keshite shimai, kanari ochikoнда.",meaning:"Karena kurang hati-hati, data penting terhapus dan cukup down karenanya."},
      {jp:"渋滞のために二時間も余分にかかってしまった。",kana:"じゅうたいのためににじかんもよぶんにかかってしまった。",romaji:"Juutai no tame ni nijikan mo yobun ni kakatte shimatta.",meaning:"Karena macet, butuh dua jam lebih dari perkiraan."},
      {jp:"急な体調不良のために、大事な試合を棄権せざるを得なかった。",kana:"きゅうなたいちょうふりょうのために、だいじなしあいをきけんせざるをえなかった。",romaji:"Kyuu na taichou furyou no tame ni, daiji na shiai o kiken sezaru o enakatta.",meaning:"Karena tiba-tiba kondisi badan memburuk, terpaksa harus mundur dari pertandingan penting."},
      {jp:"連絡の行き違いのために、二人が別々の場所で待ち続けていた。",kana:"れんらくのいきちがいのために、ふたりがべつべつのばしょでまちつづけていた。",romaji:"Renraku no ikichigai no tame ni, futari ga betsu betsu no basho de machitsudzukete ita.",meaning:"Karena miskomunikasi, keduanya terus menunggu di tempat yang berbeda."}
    ]}
  ]},

  // ── GR-N4-69: 〜(の)に ──
  {id:"GR-N4-69",level:"N4",title:"〜(の)に",summary:"Partikel に setelah nominalisasi の untuk menyatakan tujuan atau kegunaan. 'Untuk keperluan ~' atau 'dalam rangka ~'. Berbeda dari ために yang lebih menekankan tekad, のに di sini lebih menyatakan kesesuaian atau keperluan praktis.",groups:[{name:"〜のに",description:"[Verb] + のに + [yang dibutuhkan / yang dipakai]. Menyatakan konteks pemakaian atau keperluan.",sentences:[
    {jp:"このアプリ、日本語を勉強するのにすごく役に立ちます。",kana:"このあぷり、にほんごをべんきょうするのにすごくやくにたちます。",romaji:"Kono apuri, nihongo o benkyou suru no ni sugoku yaku ni tachimasu.",meaning:"Aplikasi ini sangat berguna untuk belajar bahasa Jepang."},
    {jp:"引っ越しするのに、段ボール箱が何十個も必要だった。",kana:"ひっこしするのに、だんぼーるばこがなんじゅうこもひつようだった。",romaji:"Hikkoshi suru no ni, danbooru bako ga nanjuuko mo hitsuyou datta.",meaning:"Untuk pindahan, butuh puluhan kardus."},
    {jp:"この問題を解くのに、一時間以上かかってしまった。",kana:"このもんだいをとくのに、いちじかんいじょうかかってしまった。",romaji:"Kono mondai o toku no ni, ichijikan ijou kakatte shimatta.",meaning:"Untuk memecahkan soal ini, butuh lebih dari satu jam."},
    {jp:"この包丁、野菜を切るのには向いているけど、肉には少し使いにくい。",kana:"このほうちょう、やさいをきるのにはむいているけど、にくにはすこしつかいにくい。",romaji:"Kono houchou, yasai o kiru no ni wa muite iru kedo, niku ni wa sukoshi tsukainiくい.",meaning:"Pisau ini cocok untuk memotong sayur, tapi agak kurang pas untuk daging."},
    {jp:"この資格を取るのに、どれくらいの費用と時間がかかりますか。",kana:"このしかくをとるのに、どれくらいのひようとじかんがかかりますか。",romaji:"Kono shikaku o toru no ni, dore kurai no hiyou to jikan ga kakarimasu ka.",meaning:"Untuk mendapatkan sertifikasi ini, kira-kira butuh biaya dan waktu berapa?"}
  ]}]},

  // ── GR-N4-70: 〜ようになる ──
  {id:"GR-N4-70",level:"N4",title:"〜ようになる",summary:"Menyatakan perubahan bertahap menuju kondisi atau kemampuan baru — 'menjadi bisa ~' atau 'mulai jadi ~'. Menekankan proses perubahan yang terjadi seiring waktu, bukan perubahan instan.",groups:[{name:"〜ようになる",description:"[V辞書形 / Vない] + ようになる。Perubahan kondisi atau kemampuan yang berkembang secara bertahap.",sentences:[
    {jp:"毎日少しずつ練習したら、いつの間にか漢字が読めるようになっていた。",kana:"まいにちすこしずつれんしゅうしたら、いつのまにかかんじがよめるようになっていた。",romaji:"Mainichi sukoshi zutsu renshuu shitara, itsunomani ka kanji ga yomeru you ni natte ita.",meaning:"Latihan sedikit-sedikit setiap hari, tahu-tahu sudah bisa membaca kanji."},
    {jp:"最初は全然眠れなかったけど、最近やっと夜ちゃんと寝られるようになってきた。",kana:"さいしょはぜんぜんねむれなかったけど、さいきんやっとよるちゃんとねられるようになってきた。",romaji:"Saisho wa zenzen nemurenakatta kedo, saikin yatto yoru chanto nerareru you ni natte kita.",meaning:"Awalnya sama sekali tidak bisa tidur, tapi belakangan akhirnya mulai bisa istirahat dengan baik di malam hari."},
    {jp:"日本に住み始めてから、自然と敬語が口から出るようになった。",kana:"にほんにすみはじめてから、しぜんとけいごがくちからでるようになった。",romaji:"Nihon ni sumi hajimete kara, shizen to keigo ga kuchi kara deru you ni natta.",meaning:"Sejak mulai tinggal di Jepang, bahasa sopan Jepang jadi keluar secara alami."},
    {jp:"子供のころは嫌いだったピーマンが、大人になったら食べられるようになった。",kana:"こどものころはきらいだったぴーまんが、おとなになったらたべられるようになった。",romaji:"Kodomo no koro wa kirai datta piiman ga, otona ni nattara taberareru you ni natta.",meaning:"Waktu kecil benci paprika hijau, tapi setelah dewasa sudah bisa makannya."},
    {jp:"以前は人前で話すのが苦手だったけど、今は少し楽しめるようになってきた。",kana:"いぜんはひとまえではなすのがにがてだったけど、いまはすこしたのしめるようになってきた。",romaji:"Izen wa hitomae de hanasu no ga nigate datta kedo, ima wa sukoshi tanoshimeru you ni natte kita.",meaning:"Dulu tidak pandai bicara di depan orang, tapi sekarang mulai bisa sedikit menikmatinya."}
  ]}]},
  

  // ── GR-N4-71: 〜になる / ことになる ──
  {id:"GR-N4-71",level:"N4",title:"〜になる / ことになる",summary:"Keduanya menyatakan perubahan kondisi atau keputusan yang menghasilkan situasi baru. 〜になる = berubah menjadi (natural/bertahap). 〜ことになる = sudah diputuskan / ditetapkan (seringkali dari pihak luar atau keadaan).",groups:[
    {name:"〜になる",description:"Perubahan kondisi atau status yang terjadi secara natural atau bertahap.",sentences:[
      {jp:"春になると、この辺は観光客でいっぱいになりますよ。",kana:"はるになると、このへんはかんこうきゃくでいっぱいになりますよ。",romaji:"Haru ni naru to, kono hen wa kankoukyaku de ippai ni narimasu yo.",meaning:"Kalau sudah musim semi, sekitar sini penuh dengan turis lho."},
      {jp:"三十代になってから、無理をすると翌日に疲れが残るようになった。",kana:"さんじゅうだいになってから、むりをするとよくじつにつかれがのこるようになった。",romaji:"Sanjuudai ni natte kara, muri o suru to yokujitsu ni tsukare ga nokoru you ni natta.",meaning:"Sejak masuk usia 30-an, kalau memaksakan diri keesokan harinya kelelahan pasti tersisa."},
      {jp:"留学してから日本語が好きになって、今では仕事でも使っています。",kana:"りゅうがくしてからにほんごがすきになって、いまではしごとでもつかっています。",romaji:"Ryuugaku shite kara nihongo ga suki ni natte, ima de wa shigoto de mo tsukatte imasu.",meaning:"Sejak kuliah di sana suka bahasa Jepang, sekarang sudah dipakai untuk kerja juga."},
      {jp:"一人暮らしを始めてから、自然と料理が上手になってきた。",kana:"ひとりぐらしをはじめてから、しぜんとりょうりがうまくなってきた。",romaji:"Hitori gurashi o hajimete kara, shizen to ryouri ga umaku natte kita.",meaning:"Sejak mulai hidup sendiri, memasak jadi semakin mahir secara alami."},
      {jp:"最近、以前ほど細かいことが気にならなくなってきた。少し大人になったかな。",kana:"さいきん、いぜんほどこまかいことがきにならなくなってきた。すこしおとなになったかな。",romaji:"Saikin, izen hodo komakai koto ga ki ni naranaku natte kita. Sukoshi otona ni natta ka na.",meaning:"Belakangan, hal-hal kecil tidak lagi mengganggu seperti dulu. Mungkin sudah sedikit lebih dewasa."}
    ]},
    {name:"〜ことになる",description:"Situasi atau keputusan yang ditetapkan — sering dari kondisi eksternal atau keputusan bersama, bukan kehendak pribadi semata.",sentences:[
      {jp:"急な異動で、来月から札幌に転勤することになりました。",kana:"きゅうないどうで、らいげつからさっぽろにてんきんすることになりました。",romaji:"Kyuu na idou de, raigetsu kara Sapporo ni tenkin suru koto ni narimashita.",meaning:"Karena mutasi mendadak, mulai bulan depan sudah ditetapkan akan pindah ke Sapporo."},
      {jp:"チームの話し合いで、私がプロジェクトリーダーを担当することになった。",kana:"ちーむのはなしあいで、わたしがぷろじぇくとりーだーをたんとうすることになった。",romaji:"Chiimu no hanashiai de, watashi ga purojekuto riidaa o tantou suru koto ni natta.",meaning:"Dari hasil diskusi tim, sudah ditetapkan bahwa saya yang akan jadi pemimpin proyek."},
      {jp:"両親の反対もあったが、結局この道を進むことになった。",kana:"りょうしんのはんたいもあったが、けっきょくこのみちをすすむことになった。",romaji:"Ryoushin no hantai mo atta ga, kekkyoku kono michi o susumu koto ni natta.",meaning:"Meski orang tua menentang, pada akhirnya sudah menjadi kenyataan bahwa saya menempuh jalan ini."},
      {jp:"予算の都合で、イベントの規模を縮小することになりました。",kana:"よさんのつごうで、いべんとのきぼをしゅくしょうすることになりました。",romaji:"Yosan no tsugou de, ibento no kibo o shukushou suru koto ni narimashita.",meaning:"Karena pertimbangan anggaran, skala acara sudah diputuskan untuk diperkecil."},
      {jp:"ひょんなことから、テレビに出演することになってしまった。",kana:"ひょんなことから、てれびにしゅつえんすることになってしまった。",romaji:"Hyon na koto kara, terebi ni shutsuen suru koto ni natte shimatta.",meaning:"Dari hal yang tidak terduga, akhirnya jadi tampil di televisi juga."}
    ]}
  ]},

  // ── GR-N4-72: 〜がする ──
  {id:"GR-N4-72",level:"N4",title:"〜がする",summary:"Dipakai dengan kata yang berhubungan dengan indra atau perasaan — ada bau, suara, rasa, atau sensasi tertentu yang dirasakan. Subjek bukan manusia melainkan sensasi itu sendiri.",groups:[{name:"〜がする",description:"[Nama sensasi / perasaan] + がする。Menyatakan bahwa indra atau perasaan menangkap sesuatu.",sentences:[
    {jp:"どこからかカレーのいい匂いがして、急にお腹が空いてきた。",kana:"どこからかかれーのいいにおいがして、きゅうにおなかがすいてきた。",romaji:"Doko kara ka karee no ii nioi ga shite, kyuu ni onaka ga suite kita.",meaning:"Entah dari mana ada aroma kari yang sedap, tiba-tiba perut jadi lapar."},
    {jp:"彼女の話を聞いていると、何か隠しているような気がする。",kana:"かのじょのはなしをきいていると、なにかかくしているようなきがする。",romaji:"Kanojo no hanashi o kiite iru to, nanika kakushite iru you na ki ga suru.",meaning:"Mendengar ceritanya, rasanya seperti ada sesuatu yang disembunyikan."},
    {jp:"このスープ、変な味がするんですが、もしかして腐っていますか？",kana:"このすーぷ、へんなあじがするんですが、もしかしてくさっていますか？",romaji:"Kono suupu, henna aji ga suru n desu ga, moshikashite kusatte imasu ka?",meaning:"Sup ini rasanya aneh — jangan-jangan sudah basi?"},
    {jp:"朝から頭がぼーっとして、体がだるい感じがする。",kana:"あさからあたまがぼーっとして、からだがだるいかんじがする。",romaji:"Asa kara atama ga boo tto shite, karada ga darui kanji ga suru.",meaning:"Dari pagi kepala tidak jernih dan badan terasa lemas."},
    {jp:"廊下の向こうから足音がする。誰かいるのかな。",kana:"ろうかのむこうからあしおとがする。だれかいるのかな。",romaji:"Rouka no mukou kara ashioto ga suru. Dareka iru no ka na.",meaning:"Ada suara langkah kaki dari ujung lorong. Ada orang ya?"}
  ]}]},

  // ── GR-N4-73: 〜ようにする ──
  {id:"GR-N4-73",level:"N4",title:"〜ようにする",summary:"Menyatakan usaha atau kebiasaan yang diupayakan secara sadar — 'berusaha untuk ~' atau 'membiasakan diri ~'. Menunjukkan bahwa kondisi itu tidak otomatis, tapi butuh usaha untuk mewujudkannya.",groups:[{name:"〜ようにする",description:"[V辞書形 / Vない] + ようにする。Usaha atau tekad untuk mempertahankan atau mewujudkan suatu kebiasaan.",sentences:[
    {jp:"最近、寝る一時間前からスマホを見ないようにしています。睡眠の質が上がった気がします。",kana:"さいきん、ねるいちじかんまえからすまほをみないようにしています。すいみんのしつがあがったきがします。",romaji:"Saikin, neru ichijikan mae kara sumaho o minai you ni shite imasu. Suimin no shitsu ga agatta ki ga shimasu.",meaning:"Belakangan berusaha tidak lihat HP satu jam sebelum tidur. Rasanya kualitas tidur meningkat."},
    {jp:"どんなに忙しくても、家族へのメッセージは毎日送るようにしている。",kana:"どんなにいそがしくても、かぞくへのめっせーじはまいにちおくるようにしている。",romaji:"Donna ni isogashiku te mo, kazoku e no messeeji wa mainichi okuru you ni shite iru.",meaning:"Seberapa sibuk pun, selalu berusaha kirim pesan ke keluarga setiap hari."},
    {jp:"ミスをしたときは、同じことを繰り返さないように記録するようにしています。",kana:"みすをしたときは、おなじことをくりかえさないようにきろくするようにしています。",romaji:"Misu o shita toki wa, onaji koto o kurikaesanai you ni kiroku suru you ni shite imasu.",meaning:"Setiap kali melakukan kesalahan, berusaha mencatatnya supaya tidak terulang."},
    {jp:"なるべく階段を使うようにしているんだけど、十五階はさすがにきつい。",kana:"なるべくかいだんをつかうようにしているんだけど、じゅうごかいはさすがにきつい。",romaji:"Narubeku kaidan o tsukau you ni shite iru n da kedo, juugokkai wa sasuga ni kitsui.",meaning:"Berusaha pakai tangga sebisa mungkin, tapi lantai 15 memang berat juga."},
    {jp:"相手の話を最後まで遮らずに聞くようにしてから、信頼されることが増えた気がする。",kana:"あいてのはなしをさいごまでさえぎらずにきくようにしてから、しんらいされることがふえたきがする。",romaji:"Aite no hanashi o saigo made saegirazuni kiku you ni shite kara, shinrai sareru koto ga fueta ki ga suru.",meaning:"Sejak berusaha mendengarkan orang lain sampai selesai tanpa memotong, rasanya kepercayaan yang didapat semakin bertambah."}
  ]}]},

  // ── GR-N4-74: 〜(に)する / ことにする ──
  {id:"GR-N4-74",level:"N4",title:"〜(に)する / ことにする",summary:"Menyatakan keputusan yang dibuat secara aktif oleh pembicara sendiri. 〜にする = memilih atau memutuskan sesuatu (sering soal pilihan). 〜ことにする = memutuskan untuk melakukan sesuatu (tindakan). Berbeda dari 〜ことになる yang keputusannya dari luar.",groups:[
    {name:"〜にする",description:"Membuat pilihan atau keputusan — 'saya pilih ~' atau 'saya putuskan ~'.",sentences:[
      {jp:"迷ったけど、やっぱりこっちのデザインにします。",kana:"まよったけど、やっぱりこっちのでざいんにします。",romaji:"Mayotta kedo, yappari kocchi no dezain ni shimasu.",meaning:"Sempat bimbang, tapi akhirnya saya pilih desain yang ini."},
      {jp:"今日のランチはサンドイッチにしようかな。お腹がそんなに空いてないし。",kana:"きょうのらんちはさんどいっちにしようかな。おなかがそんなにすいてないし。",romaji:"Kyou no ranchi wa sandoicchi ni shiyou ka na. Onaka ga sonnani suite nai shi.",meaning:"Makan siangnya mau sandwich aja kali ya. Perutnya juga tidak begitu lapar."},
      {jp:"話し合いの結果、次のイベントは屋外開催にすることが決まりました。",kana:"はなしあいのけっか、つぎのいべんとはおくがいかいさいにすることがきまりました。",romaji:"Hanashiai no kekka, tsugi no ibento wa okugai kaisai ni suru koto ga kimarimashita.",meaning:"Dari hasil diskusi, diputuskan bahwa acara berikutnya akan diadakan di luar ruangan."},
      {jp:"返事はもう少し考えてからにします。今すぐは決められないので。",kana:"へんじはもうすこしかんがえてからにします。いますぐはきめられないので。",romaji:"Henji wa mou sukoshi kangaete kara ni shimasu. Ima sugu wa kimerarenai no de.",meaning:"Jawabannya saya tunda sampai setelah berpikir lebih matang. Tidak bisa memutuskan sekarang."},
      {jp:"どれも美味しそうで迷うな。やっぱり一番人気のやつにしよう。",kana:"どれもおいしそうでまよるな。やっぱりいちばんにんきのやつにしよう。",romaji:"Dore mo oishisou de mayoru na. Yappari ichiban ninki no yatsu ni shiyou.",meaning:"Semuanya kelihatan enak dan bikin bingung. Yah, pilih yang paling populer saja lah."}
    ]},
    {name:"〜ことにする",description:"Memutuskan untuk melakukan suatu tindakan — keputusan aktif dari pembicara sendiri.",sentences:[
      {jp:"もう迷うのをやめて、思い切って転職することにした。",kana:"もうまよるのをやめて、おもいきっててんしょくすることにした。",romaji:"Mou mayoru no o yamete, omoikitte tenshoku suru koto ni shita.",meaning:"Sudah berhenti ragu-ragu, dan memutuskan dengan berani untuk ganti pekerjaan."},
      {jp:"健康診断の結果を見て、今日からお酒を控えることにします。",kana:"けんこうしんだんのけっかをみて、きょうからおさけをひかえることにします。",romaji:"Kenkou shindan no kekka o mite, kyou kara osake o hikaeru koto ni shimasu.",meaning:"Setelah melihat hasil pemeriksaan kesehatan, memutuskan untuk mengurangi minum alkohol mulai hari ini."},
      {jp:"この際だから、使っていないサブスクを全部解約することにした。",kana:"このさいだから、つかっていないさぶすくをぜんぶかいやくすることにした。",romaji:"Kono sai da kara, tsukatte inai sabusuku o zenbu kaiyaku suru koto ni shita.",meaning:"Sekalian, memutuskan untuk batalkan semua langganan yang tidak dipakai."},
      {jp:"一人で悩み続けるより、思い切って相談することにした。",kana:"ひとりでなやみつづけるより、おもいきってそうだんすることにした。",romaji:"Hitori de nayami tsuzukeru yori, omoikitte soudan suru koto ni shita.",meaning:"Daripada terus galau sendirian, memutuskan untuk beranikan diri berkonsultasi."},
      {jp:"来年から毎月一冊は本を読むことにします。まずはここから。",kana:"らいねんからまいつきいっさつはほんをよむことにします。まずはここから。",romaji:"Rainen kara maitsuki issatsu wa hon o yomu koto ni shimasu. Mazu wa koko kara.",meaning:"Mulai tahun depan memutuskan untuk membaca minimal satu buku per bulan. Mulai dari sini dulu."}
    ]}
  ]},

  // ── GR-N4-75: 〜から / で つくります ──
  {id:"GR-N4-75",level:"N4",title:"〜から / 〜で つくります",summary:"Keduanya menyatakan bahan pembuatan. 〜でできています = terbuat dari bahan yang masih terlihat / bisa dikenali. 〜からできています = terbuat dari bahan yang sudah berubah bentuk / tidak terlihat lagi.",groups:[
    {name:"〜でできています / 〜で作ります",description:"Bahan masih terlihat atau bisa dikenali dalam produk akhir.",sentences:[
      {jp:"このバッグは本革でできているので、長く使えば使うほど味が出てきます。",kana:"このばっぐはほんかわでできているので、ながくつかえばつかうほどあじがでてきます。",romaji:"Kono baggu wa honkawa de dekite iru no de, nagaku tsukeba tsukau hodo aji ga dete kimasu.",meaning:"Tas ini terbuat dari kulit asli, jadi semakin lama dipakai semakin berkarakter."},
      {jp:"この橋は木で作られているけど、百年以上経ってもまだしっかりしている。",kana:"このはしはきでつくられているけど、ひゃくねんいじょうたってもまだしっかりしている。",romaji:"Kono hashi wa ki de tsukurarete iru kedo, hyakunen ijou tatte mo mada shikkari shite iru.",meaning:"Jembatan ini dibuat dari kayu, tapi sudah lebih dari seratus tahun masih kokoh."},
      {jp:"このカップはリサイクルプラスチックで作られているそうです。",kana:"このかっぷはりさいくるぷらすちっくでつくられているそうです。",romaji:"Kono kappu wa risaikuru purasuchikku de tsukurete iru sou desu.",meaning:"Katanya cangkir ini dibuat dari plastik daur ulang."},
      {jp:"みそは大豆から作られているんですが、発酵させるから全然違う味になるんですよ。",kana:"みそはだいずからつくられているんですが、はっこうさせるからぜんぜんちがうあじになるんですよ。",romaji:"Miso wa daizu kara tsukurate iru n desu ga, hakkou saseru kara zenzen chigau aji ni naru n desu yo.",meaning:"Miso dibuat dari kedelai, tapi karena difermentasi rasanya jadi sama sekali berbeda lho."},
      {jp:"このアクセサリー、どんな素材で作ってるの？すごく軽いね。",kana:"このあくせさりー、どんなそざいでつくってるの？すごくかるいね。",romaji:"Kono akusesarii, donna sozai de tsukutteru no? Sugoku karui ne.",meaning:"Aksesori ini dibuat dari bahan apa? Ringan banget ya."}
    ]},
    {name:"〜からできています / 〜から作ります",description:"Bahan sudah berubah bentuk total sehingga tidak bisa dikenali lagi dalam produk akhir.",sentences:[
      {jp:"日本酒は米と水から作られています。シンプルな原料なのに奥が深い。",kana:"にほんしゅはこめとみずからつくられています。しんぷるなげんりょうなのにおくがふかい。",romaji:"Nihonshu wa kome to mizu kara tsukurete imasu. Shinpuru na genryou na noni oku ga fukai.",meaning:"Sake Jepang dibuat dari beras dan air. Bahan sederhananya tapi kompleksitas rasanya dalam."},
      {jp:"チーズは牛乳から作られているけど、熟成によって全然違う味になる。",kana:"ちーずはぎゅうにゅうからつくられているけど、じゅくせいによってぜんぜんちがうあじになる。",romaji:"Chiizu wa gyuunyuu kara tsukurete iru kedo, jukusei ni yotte zenzen chigau aji ni naru.",meaning:"Keju dibuat dari susu sapi, tapi proses pengawetannya menghasilkan rasa yang sangat berbeda-beda."},
      {jp:"ガラスは主に砂から作られているって知ったとき、ちょっと驚いた。",kana:"がらすはおもにすなからつくられているってしったとき、ちょっとおどろいた。",romaji:"Garasu wa omoni suna kara tsukurete iru tte shitta toki, chotto odoroita.",meaning:"Waktu tahu bahwa kaca sebagian besar dibuat dari pasir, sedikit terkejut."},
      {jp:"豆腐は大豆から作られていて、タンパク質が豊富です。",kana:"とうふはだいずからつくられていて、たんぱくしつがほうふです。",romaji:"Toufu wa daizu kara tsukurete ite, tanpakushitsu ga houfu desu.",meaning:"Tahu dibuat dari kedelai dan kaya akan protein."},
      {jp:"このワイン、どのブドウから作られているか、飲めばなんとなくわかる人もいるらしい。",kana:"このわいん、どのぶどうからつくられているか、のめばなんとなくわかるひともいるらしい。",romaji:"Kono wain, dono budou kara tsukurete iru ka, nomeba nantonaku wakaru hito mo iru rashii.",meaning:"Katanya ada orang yang bisa menebak anggur jenis apa yang dipakai untuk membuat wine ini hanya dari rasanya."}
    ]}
  ]},

  // ── GR-N4-76: 〜てくる ──
  {id:"GR-N4-76",level:"N4",title:"〜てくる",summary:"Dua fungsi utama: (1) tindakan yang dilakukan lalu kembali — 'pergi melakukan ~ dan kembali', (2) perubahan atau kondisi yang semakin berkembang menuju sekarang — 'mulai jadi ~' atau 'makin ~'.",groups:[
    {name:"〜てくる (pergi dan kembali)",description:"Melakukan sesuatu di tempat lain lalu kembali. Ada makna perpindahan fisik.",sentences:[
      {jp:"ちょっとコンビニで飲み物買ってくるね。何かいる？",kana:"ちょっとこんびにでのみものかってくるね。なにかいる？",romaji:"Chotto konbini de nomimono katte kuru ne. Nanika iru?",meaning:"Sebentar mau beli minuman di minimarket. Mau nitip sesuatu?"},
      {jp:"先に席取っておいてくれる？ちょっとトイレ行ってくるから。",kana:"さきにせきとっておいてくれる？ちょっとといれいってくるから。",romaji:"Saki ni seki totte oite kureru? Chotto toire itte kuru kara.",meaning:"Bisa tolong pesan tempat duduk dulu? Sebentar mau ke toilet."},
      {jp:"上司に確認してきてから、正式にお返事します。",kana:"じょうしにかくにんしてきてから、せいしきにおへんじします。",romaji:"Joushi ni kakunin shite kite kara, seishiki ni ohenji shimasu.",meaning:"Setelah saya konfirmasi dulu ke atasan, baru saya berikan jawaban resminya."},
      {jp:"子供を保育園に送ってきてから、そのまま会社に向かいます。",kana:"こどもをほいくえんにおくってきてから、そのままかいしゃにむかいます。",romaji:"Kodomo o hoikuen ni okutte kite kara, sono mama kaisha ni mukaimasu.",meaning:"Setelah antar anak ke tempat penitipan, langsung menuju kantor dari sana."},
      {jp:"散歩してきたら気持ちがすっきりした。やっぱり外の空気は大事ね。",kana:"さんぽしてきたらきもちがすっきりした。やっぱりそとのくうきはだいじね。",romaji:"Sanpo shite kitara kimochi ga sukkiri shita. Yappari soto no kuuki wa daiji ne.",meaning:"Setelah jalan-jalan sebentar, pikiran jadi segar. Udara luar memang penting ya."}
    ]},
    {name:"〜てくる (perubahan menuju sekarang)",description:"Perubahan atau perkembangan yang terjadi secara bertahap hingga kondisi saat ini.",sentences:[
      {jp:"最近、日本語でふとした言葉が自然と口から出てくるようになってきた。",kana:"さいきん、にほんごでふとしたことばがしぜんとくちからでてくるようになってきた。",romaji:"Saikin, nihongo de futo shita kotoba ga shizen to kuchi kara dete kuru you ni natte kita.",meaning:"Belakangan, kata-kata dalam bahasa Jepang mulai keluar secara alami dari mulut tanpa sadar."},
      {jp:"夕方になって、急に風が冷たくなってきた。",kana:"ゆうがたになって、きゅうにかぜがつめたくなってきた。",romaji:"Yuugata ni natte, kyuu ni kaze ga tsumetaku natte kita.",meaning:"Memasuki sore hari, angin tiba-tiba terasa dingin."},
      {jp:"子供が少しずつ言葉を覚えてきて、会話ができるようになってきた。",kana:"こどもがすこしずつことばをおぼえてきて、かいわができるようになってきた。",romaji:"Kodomo ga sukoshi zutsu kotoba o oboete kite, kaiwa ga dekiru you ni natte kita.",meaning:"Anak kecil itu perlahan-lahan mulai hafal kata-kata, dan kini sudah bisa diajak bicara."},
      {jp:"練習を続けていたら、だんだん自信がついてきた。",kana:"れんしゅうをつづけていたら、だんだんじしんがついてきた。",romaji:"Renshuu o tsuzukete itara, dandan jishin ga tsuite kita.",meaning:"Seiring terus berlatih, kepercayaan diri perlahan tumbuh."},
      {jp:"会社に慣れてきたと思ったら、また新しい部署に異動になった。",kana:"かいしゃになれてきたとおもったら、またあたらしいぶしょにいどうになった。",romaji:"Kaisha ni narete kita to omottara, mata atarashii busho ni idou ni natta.",meaning:"Baru merasa sudah mulai terbiasa di kantor, eh dipindah ke departemen baru lagi."}
    ]}
  ]},

  // ── GR-N4-77: [Questionword] 〜か ──
  {id:"GR-N4-77",level:"N4",title:"[Questionword] 〜か",summary:"Kata tanya yang diikuti か berfungsi sebagai klausa terpasang — mengubah pertanyaan langsung menjadi bagian dari kalimat yang lebih panjang. Artinya 'apakah ~', 'di mana ~', 'kapan ~' dll, yang disisipkan dalam kalimat.",groups:[{name:"[疑問詞] + か",description:"[Kata tanya] + か + [kalimat induk]. Pertanyaan tidak langsung yang menjadi bagian dari kalimat.",sentences:[
    {jp:"彼がなぜ急に辞めたのか、誰も本当のことを知らない。",kana:"かれがなぜきゅうにやめたのか、だれもほんとうのことをしらない。",romaji:"Kare ga naze kyuu ni yameta no ka, daremo hontou no koto o shiranai.",meaning:"Mengapa dia tiba-tiba keluar, tidak ada yang tahu alasan sebenarnya."},
    {jp:"どこに財布を置いたか全然思い出せなくて、三十分ずっと探していた。",kana:"どこにさいふをおいたかぜんぜんおもいだせなくて、さんじゅっぷんずっとさがしていた。",romaji:"Doko ni saifu o oita ka zenzen omoidasenakute, sanjuppun zutto sagashite ita.",meaning:"Sama sekali tidak ingat di mana menaruh dompet, sudah cari-cari selama 30 menit."},
    {jp:"次の会議がいつになるか、まだ決まっていません。",kana:"つぎのかいぎがいつになるか、まだきまっていません。",romaji:"Tsugi no kaigi ga itsu ni naru ka, mada kimatte imasen.",meaning:"Rapat berikutnya akan diadakan kapan, belum ditentukan."},
    {jp:"あの映画、何が面白いのかを友達に聞いてみたら、熱心に語り始めた。",kana:"あのえいが、なにがおもしろいのかをともだちにきいてみたら、ねっしんにかたりはじめた。",romaji:"Ano eiga, nani ga omoshiroi no ka o tomodachi ni kiite mitara, nesshin ni katari hajimeta.",meaning:"Pas tanya ke teman apa yang menarik dari film itu, dia langsung dengan semangat mulai bercerita panjang lebar."},
    {jp:"どうすれば相手に気持ちがうまく伝わるか、ずっと考えている。",kana:"どうすればあいてにきもちがうまくつたわるか、ずっとかんがえている。",romaji:"Dou sureba aite ni kimochi ga umaku tsutawaru ka, zutto kangaete iru.",meaning:"Terus memikirkan bagaimana caranya supaya perasaan bisa tersampaikan dengan baik ke orang itu."}
  ]}]},

  // ── GR-N4-78: 〜かどうか ──
  {id:"GR-N4-78",level:"N4",title:"〜かどうか",summary:"Menyatakan ketidakpastian atau keraguan tentang apakah sesuatu benar atau tidak — 'apakah ~ atau tidak'. Berbeda dari kata tanya + か, かどうか tidak mengandung kata tanya, hanya menyatakan ada dua kemungkinan (ya atau tidak).",groups:[{name:"〜かどうか",description:"[Kalimat biasa] + かどうか + [kata kerja/ungkapan]. Dua kemungkinan: terjadi atau tidak.",sentences:[
    {jp:"彼女が来るかどうか、直前まで全然わからなかった。",kana:"かのじょがくるかどうか、ちょくぜんまでぜんぜんわからなかった。",romaji:"Kanojo ga kuru ka dou ka, chokuzen made zenzen wakaranakatta.",meaning:"Apakah dia akan datang atau tidak, sampai menit-menit terakhir sama sekali tidak tahu."},
    {jp:"このアイデアがうまくいくかどうか、やってみないとわからない。",kana:"このあいであがうまくいくかどうか、やってみないとわからない。",romaji:"Kono aidea ga umaku iku ka dou ka, yatte minai to wakaranai.",meaning:"Apakah ide ini akan berhasil atau tidak, tidak akan tahu kalau tidak dicoba."},
    {jp:"自分に向いているかどうかは、実際にやってみて初めてわかることもある。",kana:"じぶんにむいているかどうかは、じっさいにやってみてはじめてわかることもある。",romaji:"Jibun ni muite iru ka dou ka wa, jissai ni yatte mite hajimete wakaru koto mo aru.",meaning:"Cocok atau tidaknya untuk diri sendiri, kadang baru bisa tahu setelah benar-benar mencobanya."},
    {jp:"彼に正直に話すかどうか、ずっと迷っている。",kana:"かれにしょうじきにはなすかどうか、ずっとまよっている。",romaji:"Kare ni shoujiki ni hanasu ka dou ka, zutto mayotte iru.",meaning:"Masih terus bimbang apakah harus jujur bicara ke dia atau tidak."},
    {jp:"面接でうまく話せるかどうか不安だったけど、思ったより落ち着いてできた。",kana:"めんせつでうまくはなせるかどうかふあんだったけど、おもったよりおちついてできた。",romaji:"Mensetsu de umaku hanaseru ka dou ka fuan datta kedo, omotta yori ochitsuite dekita.",meaning:"Khawatir apakah bisa bicara dengan baik saat interview atau tidak, tapi ternyata lebih tenang dari yang dibayangkan."}
  ]}]},

  // ── GR-N4-79: [Adjective] + さ ──
  {id:"GR-N4-79",level:"N4",title:"[Adjective] + さ",summary:"Mengubah kata sifat menjadi kata benda yang menyatakan derajat atau kualitas — 'tingkat ~nya' atau 'ke~-an'. Berbeda dari 〜み yang lebih subjektif dan emosional, 〜さ lebih objektif dan terukur.",groups:[{name:"[Adj-stem] + さ",description:"い-adjective: hapus い → +さ。な-adjective: +さ。Menjadi kata benda yang bisa diukur.",sentences:[
    {jp:"この街の便利さは、住んでみて初めて実感できた。",kana:"このまちのべんりさは、すんでみてはじめてじっかんできた。",romaji:"Kono machi no benrisa wa, sunde mite hajimete jikkan dekita.",meaning:"Kemudahan kota ini baru benar-benar terasa setelah tinggal di sini."},
    {jp:"彼女の仕事の丁寧さは、チーム全員が認めるところだ。",kana:"かのじょのしごとのていねいさは、ちーむぜんいんがみとめるところだ。",romaji:"Kanojo no shigoto no teinei-sa wa, chiimu zen'in ga mitomeru tokoro da.",meaning:"Ketelitian kerjanya adalah sesuatu yang diakui oleh seluruh anggota tim."},
    {jp:"この料理の辛さ、ちょっと私には無理でした。口の中が燃えるみたいで。",kana:"このりょうりのからさ、ちょっとわたしにはむりでした。くちのなかがもえるみたいで。",romaji:"Kono ryouri no kara-sa, chotto watashi ni wa muri deshita. Kuchi no naka ga moeru mitai de.",meaning:"Tingkat kepedasannya agak di luar batas saya. Mulutnya seperti terbakar."},
    {jp:"山の上からの景色の美しさに、思わず言葉を失った。",kana:"やまのうえからのけしきのうつくしさに、おもわずことばをうしなった。",romaji:"Yama no ue kara no keshiki no utsukushi-sa ni, omowazu kotoba o ushinatta.",meaning:"Keindahan pemandangan dari puncak gunung membuat saya sampai tidak bisa berkata-kata."},
    {jp:"このカフェ、居心地のよさが人気の理由だと思う。長居しても嫌な顔されないし。",kana:"このかふぇ、いごこちのよさがにんきのりゆうだとおもう。ながいしてもいやなかおされないし。",romaji:"Kono kafe, igokochi no yosa ga ninki no riyuu da to omou. Nagaishite mo iya na kao sarenai shi.",meaning:"Menurut saya kenyamanannya itu yang jadi alasan kafe ini populer. Duduk lama pun tidak diusir."}
  ]}]},

  // ── GR-N4-80: [Adjective] + [Verb] ──
  {id:"GR-N4-80",level:"N4",title:"[Adjective] + [Verb]",summary:"Kata sifat yang diubah menjadi kata keterangan untuk memodifikasi kata kerja. い-adj: ganti い → く. な-adj: tambah に. Menyatakan cara atau kondisi saat melakukan tindakan.",groups:[
    {name:"い-adj → 〜く + Verb",description:"Ubah い menjadi く untuk memodifikasi kata kerja.",sentences:[
      {jp:"プレゼン前は声を大きくはっきり話すように意識しています。",kana:"ぷれぜんまえはこえをおおきくはっきりはなすようにいしきしています。",romaji:"Purezen mae wa koe o ookiku hakkiri hanasu you ni ishiki shite imasu.",meaning:"Sebelum presentasi, selalu sadar untuk bicara dengan suara keras dan jelas."},
      {jp:"締め切りが迫っているから、少し早く仕上げてもらえると助かります。",kana:"しめきりがせまっているから、すこしはやくしあげてもらえるとたすかります。",romaji:"Shimekiri ga sematte iru kara, sukoshi hayaku shiagete moraeru to tasukarimasu.",meaning:"Deadlinenya sudah dekat, jadi kalau bisa diselesaikan sedikit lebih cepat akan sangat membantu."},
      {jp:"部屋を明るく飾ったら、なんとなく気分も上向きになった。",kana:"へやをあかるくかざったら、なんとなくきぶんもうわむきになった。",romaji:"Heya o akaruku kazattara, nantonaku kibun mo uwamuki ni natta.",meaning:"Setelah mendekorasi kamar menjadi lebih cerah, entah kenapa suasana hati juga ikut membaik."},
      {jp:"悲しくて泣きたいときは、無理に笑わなくていいよ。",kana:"かなしくてなきたいときは、むりにわらわなくていいよ。",romaji:"Kanashikute nakitai toki wa, muri ni warawanakute ii yo.",meaning:"Kalau sedih dan mau menangis, tidak perlu memaksakan diri untuk tersenyum."},
      {jp:"荷物が重くなってきたから、途中でコインロッカーに預けることにした。",kana:"にもつがおもくなってきたから、とちゅうでこいんろっかーにあずけることにした。",romaji:"Nimotsu ga omoku natte kita kara, tochuu de koin rokkaa ni azukeru koto ni shita.",meaning:"Barang bawaan makin berat, jadi di tengah jalan memutuskan untuk titip di loker koin."}
    ]},
    {name:"な-adj → 〜に + Verb",description:"Tambahkan に setelah な-adjective untuk memodifikasi kata kerja.",sentences:[
      {jp:"大事な話だから、静かに落ち着いて聞いてほしい。",kana:"だいじなはなしだから、しずかにおちついてきいてほしい。",romaji:"Daiji na hanashi da kara, shizuka ni ochitsuite kiite hoshii.",meaning:"Ini pembicaraan penting, jadi tolong dengarkan dengan tenang dan penuh perhatian."},
      {jp:"あの子、いつも元気に挨拶してくれるから、会うたびに気持ちが明るくなる。",kana:"あのこ、いつもげんきにあいさつしてくれるから、あうたびにきもちがあかるくなる。",romaji:"Ano ko, itsumo genki ni aisatsu shite kureru kara, au tabi ni kimochi ga akaruku naru.",meaning:"Anak itu selalu menyapa dengan penuh semangat, jadi setiap kali bertemu hati ikut senang."},
      {jp:"提案書は簡潔に、わかりやすくまとめてください。",kana:"ていあんしょはかんけつに、わかりやすくまとめてください。",romaji:"Teiansho wa kanketsu ni, wakariyasuku matomete kudasai.",meaning:"Mohon susun proposalnya dengan ringkas dan mudah dipahami."},
      {jp:"彼は何事も丁寧にこなすから、仕事を任せると安心できる。",kana:"かれはなにごともていねいにこなすから、しごとをまかせるとあんしんできる。",romaji:"Kare wa nanigoto mo teinei ni konasu kara, shigoto o makaseru to anshin dekiru.",meaning:"Dia mengerjakan segala sesuatunya dengan teliti, jadi bisa tenang kalau mempercayakan pekerjaan padanya."},
      {jp:"急に大切なことを言われても困るから、できれば事前に連絡してほしい。",kana:"きゅうにだいせつなことをいわれてもこまるから、できればじぜんにれんらくしてほしい。",romaji:"Kyuu ni taisetsu na koto o iwarete mo komaru kara, dekireba jizen ni renraku shite hoshii.",meaning:"Kalau tiba-tiba bilang hal penting juga saya bingung, jadi kalau bisa tolong kabari dari jauh-jauh hari."}
    ]}
  ]},

  // ── GR-N4-81: 敬語 ──
  {id:"GR-N4-81",level:"N4",title:"敬語",summary:"Sistem bahasa hormat Jepang yang terdiri dari tiga lapisan: 尊敬語 (meninggikan lawan), 謙譲語 (merendahkan diri), dan 丁寧語 (sopan netral). Pemilihan yang tepat mencerminkan kepekaan sosial dan profesionalisme.",groups:[{name:"敬語の概要",description:"Tiga lapisan敬語: 丁寧語 (～です/ます), 尊敬語 (mengangkat posisi lawan), 謙譲語 (merendahkan posisi diri sendiri).",sentences:[
    {jp:"敬語は日本のビジネスシーンでは欠かせないスキルで、使い方ひとつで印象が大きく変わる。",kana:"けいごはにほんのびじねすしーんではかかせないすきるで、つかいかたひとつでいんしょうがおおきくかわる。",romaji:"Keigo wa Nihon no bijinesu shiin de wa kakaseない sukiru de, tsukaikata hitotsu de inshou ga ookiku kawaru.",meaning:"Bahasa hormat adalah keterampilan yang tidak bisa dilepaskan dari dunia kerja Jepang — cara penggunaannya saja bisa mengubah kesan secara drastis."},
    {jp:"日本語を学ぶ外国人にとって、敬語は難しいけれど、少し使えるだけで相手の反応が全然違う。",kana:"にほんごをまなぶがいこくじんにとって、けいごはむずかしいけれど、すこしつかえるだけであいてのはんのうがぜんぜんちがう。",romaji:"Nihongo o manabu gaikokujin ni totte, keigo wa muzukashii keredo, sukoshi tsukaeru dake de aite no hannou ga zenzen chigau.",meaning:"Bagi orang asing yang belajar bahasa Jepang, keigo memang susah — tapi hanya bisa sedikit saja sudah membuat respons lawan bicara berbeda jauh."},
    {jp:"敬語を間違えるのが怖くて最初は話せなかったけど、使い続けるうちに自然と口から出るようになった。",kana:"けいごをまちがえるのがこわくてさいしょははなせなかったけど、つかいつづけるうちにしぜんとくちからでるようになった。",romaji:"Keigo o machigaeru no ga kowakute saisho wa hanasenakatta kedo, tsukaitsudzukeru uchi ni shizen to kuchi kara deru you ni natta.",meaning:"Awalnya tidak berani bicara karena takut salah keigo, tapi semakin sering dipakai semakin keluar dengan natural."},
    {jp:"初めて職場で敬語を使ったとき、頭の中で一回普通の言い方に変換してから話していた。",kana:"はじめてしょくばでけいごをつかったとき、あたまのなかでいっかいふつうのいいかたにへんかんしてからはなしていた。",romaji:"Hajimete shokuba de keigo o tsukatta toki, atama no naka de ikkai futsuu no iikata ni henkan shite kara hanashite ita.",meaning:"Pertama kali pakai keigo di tempat kerja, di kepala harus terjemahkan dulu ke bahasa biasa sebelum bicara."},
    {jp:"敬語は堅苦しいだけじゃなくて、相手への敬意と気遣いが言葉ににじみ出るものだと思う。",kana:"けいごはかたくるしいだけじゃなくて、あいてへのけいいときづかいがことばににじみでるものだとおもう。",romaji:"Keigo wa katakurushii dake ja nakute, aite e no keii to kizukai ga kotoba ni nijimi deru mono da to omou.",meaning:"Keigo bukan sekadar kaku dan formal — di dalamnya rasa hormat dan kepedulian terhadap lawan bicara meresap keluar lewat kata-kata."}
  ]}]},

  // ── GR-N4-82: 尊敬語 ──
  {id:"GR-N4-82",level:"N4",title:"尊敬語",summary:"Ragam bahasa yang meninggikan tindakan atau keadaan lawan bicara atau orang yang dibicarakan. Subjek selalu orang yang dihormati. Kata kerja biasa diganti dengan bentuk khusus atau お～になる.",groups:[
    {name:"尊敬語 — kata kerja khusus",description:"Kata kerja yang memiliki bentuk尊敬語 tersendiri: いる→いらっしゃる, 行く/来る→いらっしゃる, 言う→おっしゃる, 食べる/飲む→召し上がる, する→なさる, 知る→ご存知.",sentences:[
      {jp:"部長はもう会議室にいらっしゃいますか。",kana:"ぶちょうはもうかいぎしつにいらっしゃいますか。",romaji:"Buchou wa mou kaigishitsu ni irasshaimasu ka.",meaning:"Apakah Pak/Bu Manajer sudah ada di ruang rapat?"},
      {jp:"先生がおっしゃった通りに進めたら、うまくいきました。",kana:"せんせいがおっしゃったとおりにすすめたら、うまくいきました。",romaji:"Sensei ga osshatta toori ni susumetara, umaku ikimashita.",meaning:"Setelah mengikuti sesuai apa yang dikatakan oleh sensei, semuanya berjalan lancar."},
      {jp:"社長はもう昼食を召し上がりましたか。",kana:"しゃちょうはもうちゅうしょくをめしあがりましたか。",romaji:"Shachou wa mou chuushoku o meshiagarimashita ka.",meaning:"Apakah Pak/Bu Direktur sudah makan siang?"},
      {jp:"この件についてはすでにご存知でしょうか。",kana:"このけんについてはすでにごぞんじでしょうか。",romaji:"Kono ken ni tsuite wa sude ni go-zonji deshou ka.",meaning:"Apakah Anda sudah mengetahui mengenai hal ini?"},
      {jp:"田中部長はどちらにいらっしゃいますか。少しお時間をいただきたいのですが。",kana:"たなかぶちょうはどちらにいらっしゃいますか。すこしおじかんをいただきたいのですが。",romaji:"Tanaka-buchou wa dochira ni irasshaimasu ka. Sukoshi o-jikan o itadakitai no desu ga.",meaning:"Di mana Manajer Tanaka sekarang? Saya ingin meminta sedikit waktunya."}
    ]},
    {name:"尊敬語 — お/ご～になる",description:"Pola produktif untuk meninggikan tindakan lawan bicara: お + V-stem + になる / ご + N/Vsuru + になる.",sentences:[
      {jp:"資料はもうお読みになりましたか。",kana:"しりょうはもうおよみになりましたか。",romaji:"Shiryou wa mou o-yomi ni narimashita ka.",meaning:"Apakah Anda sudah membaca dokumennya?"},
      {jp:"社長がお書きになった文章は、いつも簡潔で説得力があります。",kana:"しゃちょうがおかきになったぶんしょうは、いつもかんけつでせっとくりょくがあります。",romaji:"Shachou ga o-kaki ni natta bunshou wa, itsumo kanketsu de settokuryoku ga arimasu.",meaning:"Tulisan yang dibuat oleh Pak/Bu Direktur selalu ringkas namun meyakinkan."},
      {jp:"先生はいつごろご出発になる予定ですか。",kana:"せんせいはいつごろごしゅっぱつになるよていですか。",romaji:"Sensei wa itsugoro go-shuppatsu ni naru yotei desu ka.",meaning:"Kira-kira kapan sensei berencana berangkat?"},
      {jp:"部長がご確認になってからお返事いたします。",kana:"ぶちょうがごかくにんになってからおへんじいたします。",romaji:"Buchou ga go-kakunin ni natte kara o-henji itashimasu.",meaning:"Setelah manajer memeriksa, saya akan memberikan jawabannya."},
      {jp:"先ほどお客様がお越しになって、こちらをお預かりしました。",kana:"さきほどおきゃくさまがおこしになって、こちらをおあずかりしました。",romaji:"Sakihodo o-kyakusama ga o-koshi ni natte, kochira o o-azukari shimashita.",meaning:"Tadi ada tamu yang datang dan menitipkan ini kepada kami."}
    ]}
  ]},

  // ── GR-N4-83: 謙譲語 ──
  {id:"GR-N4-83",level:"N4",title:"謙譲語",summary:"Ragam bahasa yang merendahkan tindakan diri sendiri untuk menunjukkan rasa hormat kepada lawan bicara atau orang yang terlibat. Subjek selalu pembicara atau pihak diri sendiri. Kata kerja biasa diganti bentuk khusus atau お～する.",groups:[
    {name:"謙譲語 — kata kerja khusus",description:"Kata kerja yang memiliki bentuk謙譲語 tersendiri: いる→おる, 行く/来る→参る, 言う→申す, 食べる/飲む→いただく, する→いたす, 知る→存じる, もらう→いただく, あげる→差し上げる.",sentences:[
      {jp:"明日の午後三時に御社に伺う予定でおります。",kana:"あしたのごごさんじにおんしゃにうかがうよていでおります。",romaji:"Ashita no gogo sanji ni onsha ni ukagau yotei de orimasu.",meaning:"Saya berencana mengunjungi kantor Anda besok pukul tiga sore."},
      {jp:"この度はご迷惑をおかけし、大変申し訳ございませんでした。",kana:"このたびはごめいわくをおかけし、たいへんもうしわけございませんでした。",romaji:"Kono tabi wa go-meiwaku o okake shi, taihen moushiwake gozaimasen deshita.",meaning:"Atas ketidaknyamanan yang telah saya timbulkan kali ini, saya mohon maaf sebesar-besarnya."},
      {jp:"先ほど田中部長からご連絡をいただき、内容は承知いたしました。",kana:"さきほどたなかぶちょうからごれんらくをいただき、ないようはしょうちいたしました。",romaji:"Sakihodo Tanaka-buchou kara go-renraku o itadaki, naiyou wa shouchi itashimashita.",meaning:"Tadi saya menerima kabar dari Manajer Tanaka dan isinya sudah saya pahami."},
      {jp:"私どもでよろしければ、喜んでお手伝いいたします。",kana:"わたくしどもでよろしければ、よろこんでおてつだいいたします。",romaji:"Watakushidomo de yoroshikereba, yorokonde o-tetsudai itashimasu.",meaning:"Jika pihak kami berkenan, dengan senang hati kami siap membantu."},
      {jp:"ご質問の件については、後ほど詳しくご説明申し上げます。",kana:"ごしつもんのけんについては、のちほどくわしくごせつめいもうしあげます。",romaji:"Go-shitsumon no ken ni tsuite wa, nochihodo kuwashiku go-setsumei moushiagemasu.",meaning:"Mengenai pertanyaan Anda, akan saya jelaskan secara lebih rinci nanti."}
    ]},
    {name:"謙譲語 — お/ご～する",description:"Pola produktif untuk merendahkan tindakan diri sendiri: お + V-stem + する / ご + N/Vsuru + する.",sentences:[
      {jp:"お荷物をお持ちしましょうか。",kana:"おにもつをおもちしましょうか。",romaji:"O-nimotsu o o-mochi shimashou ka.",meaning:"Boleh saya bawakan barang-barangnya?"},
      {jp:"ご注文の品をお届けするのが少し遅れてしまい、申し訳ございません。",kana:"ごちゅうもんのしなをおとどけするのがすこしおくれてしまい、もうしわけございません。",romaji:"Go-chuumon no shina o o-todoke suru no ga sukoshi okurete shimai, moushiwake gozaimasen.",meaning:"Kami mohon maaf atas keterlambatan dalam mengantarkan pesanan Anda."},
      {jp:"先生の論文はすでに拝読しております。大変勉強になりました。",kana:"せんせいのろんぶんはすでにはいどくしております。たいへんべんきょうになりました。",romaji:"Sensei no ronbun wa sude ni haidoku shite orimasu. Taihen benkyou ni narimashita.",meaning:"Saya sudah membaca karya ilmiah sensei. Sangat bermanfaat bagi saya."},
      {jp:"後ほどこちらからご連絡差し上げます。少々お待ちいただけますでしょうか。",kana:"のちほどこちらからごれんらくさしあげます。しょうしょうおまちいただけますでしょうか。",romaji:"Nochihodo kochira kara go-renraku sashiagemasu. Shoushou o-machi itadakemasu deshou ka.",meaning:"Nanti kami yang akan menghubungi Anda. Apakah Anda berkenan menunggu sebentar?"},
      {jp:"では、私がご案内いたします。どうぞこちらへ。",kana:"では、わたくしがごあんないいたします。どうぞこちらへ。",romaji:"Dewa, watakushi ga go-annai itashimasu. Douzo kochira e.",meaning:"Baiklah, saya yang akan memandu Anda. Silakan ke sini."}
    ]}
  ]},

  // ── GR-N4-84: 〜てさしあげる / 〜てくださる / 〜ていただく ──
  {id:"GR-N4-84",level:"N4",title:"〜てさしあげる / 〜てくださる / 〜ていただく",summary:"Versi keigo dari 〜てあげる / 〜てくれる / 〜てもらう. Dipakai dalam situasi formal atau kepada orang yang dihormati. 〜てさしあげる (saya lakukan untuk mereka — hati-hati karena bisa terkesan sombong), 〜てくださる (mereka lakukan untuk saya — bentuk尊敬), 〜ていただく (saya terima bantuan dari mereka — bentuk謙譲).",groups:[
    {name:"〜てさしあげる",description:"Versi keigo dari 〜てあげる. Pembicara melakukan sesuatu untuk orang yang dihormati. Pakai dengan hati-hati — terlalu sering bisa terkesan merendahkan penerima.",sentences:[
      {jp:"荷物が多そうでしたので、お持ちしてさしあげました。",kana:"にもつがおおそうでしたので、おもちしてさしあげました。",romaji:"Nimotsu ga oosou deshita no de, o-mochi shite sashiagemashita.",meaning:"Barangnya kelihatan banyak, jadi saya bawakan untuk beliau."},
      {jp:"操作がわからないとおっしゃっていたので、設定してさしあげました。",kana:"そうさがわからないとおっしゃっていたので、せっていしてさしあげました。",romaji:"Sousa ga wakaranai to osshatte ita no de, settei shite sashiagemashita.",meaning:"Karena beliau bilang tidak mengerti cara pakainya, saya bantu aturkan pengaturannya."},
      {jp:"お客様に地図を書いてさしあげたら、とても喜んでいらっしゃいました。",kana:"おきゃくさまにちずをかいてさしあげたら、とてもよろこんでいらっしゃいました。",romaji:"O-kyakusama ni chizu o kaite sashiagetara, totemo yorokonde irasshaimashita.",meaning:"Saat saya buatkan peta untuk tamu, beliau sangat senang."},
      {jp:"先輩のプレゼン資料、私がチェックしてさしあげましょうか。",kana:"せんぱいのぷれぜんしりょう、わたしがちぇっくしてさしあげましょうか。",romaji:"Senpai no purezen shiryou, watashi ga chekku shite sashiagemasyou ka.",meaning:"Materi presentasi senior, apakah boleh saya periksa untuk Anda?"},
      {jp:"ご不明な点がございましたら、詳しくご説明してさしあげます。",kana:"ごふめいなてんがございましたら、くわしくごせつめいしてさしあげます。",romaji:"Go-fumei na ten ga gozaimashitara, kuwashiku go-setsumei shite sashiagemasu.",meaning:"Jika ada hal yang kurang jelas, saya akan menjelaskannya secara lebih rinci untuk Anda."}
    ]},
    {name:"〜てくださる",description:"Versi尊敬語 dari 〜てくれる. Orang yang dihormati melakukan sesuatu yang menguntungkan pembicara.",sentences:[
      {jp:"部長が推薦状を書いてくださったおかげで、無事採用されました。",kana:"ぶちょうがすいせんじょうをかいてくださったおかげで、ぶじさいようされました。",romaji:"Buchou ga suisenjou o kaite kudasatta okage de, buji saiyou saremashita.",meaning:"Berkat surat rekomendasi yang ditulis oleh manajer, saya berhasil diterima kerja."},
      {jp:"先生が丁寧にご指導してくださったことが、今の自分の土台になっています。",kana:"せんせいがていねいにごしどうしてくださったことが、いまのじぶんのどだいになっています。",romaji:"Sensei ga teinei ni go-shidou shite kudasatta koto ga, ima no jibun no dodai ni natte imasu.",meaning:"Bimbingan teliti yang diberikan oleh sensei menjadi fondasi dari diri saya sekarang."},
      {jp:"お忙しい中、わざわざお越しくださり、ありがとうございます。",kana:"おいそがしいなか、わざわざおこしくださり、ありがとうございます。",romaji:"O-isogashii naka, wazawaza o-koshi kudasari, arigatou gozaimasu.",meaning:"Di tengah kesibukan Anda, terima kasih telah bersedia datang ke sini."},
      {jp:"先輩が私のことを気にかけてくださっているのが、すごく励みになっています。",kana:"せんぱいがわたしのことをきにかけてくださっているのが、すごくはげみになっています。",romaji:"Senpai ga watashi no koto o ki ni kakete kudasatte iru no ga, sugoku hagemi ni natte imasu.",meaning:"Perhatian yang senior berikan kepada saya menjadi dorongan semangat yang luar biasa."},
      {jp:"こんなに詳しくご説明してくださるとは思っていませんでした。本当に助かりました。",kana:"こんなにくわしくごせつめいしてくださるとはおもっていませんでした。ほんとうにたすかりました。",romaji:"Konna ni kuwashiku go-setsumei shite kudasaru to wa omotte imasen deshita. Hontou ni tasukarimashita.",meaning:"Tidak menyangka akan dijelaskan sedetail ini. Sungguh sangat membantu."}
    ]},
    {name:"〜ていただく",description:"Versi謙譲語 dari 〜てもらう. Pembicara menerima bantuan dari orang yang dihormati — menekankan rasa terima kasih dan kerendahan hati.",sentences:[
      {jp:"本日はお越しいただき、誠にありがとうございます。",kana:"ほんじつはおこしいただき、まことにありがとうございます。",romaji:"Honjitsu wa o-koshi itadaki, makoto ni arigatou gozaimasu.",meaning:"Terima kasih telah berkenan hadir hari ini."},
      {jp:"先生にご確認いただいたおかげで、大きなミスを防ぐことができました。",kana:"せんせいにごかくにんいただいたおかげで、おおきなみすをふせぐことができました。",romaji:"Sensei ni go-kakunin itadaita okage de, ookina misu o fusegu koto ga dekimashita.",meaning:"Berkat sensei yang bersedia memeriksa, kami berhasil mencegah kesalahan besar."},
      {jp:"こちらの書類にご署名いただけますでしょうか。",kana:"こちらのしょるいにごしょめいいただけますでしょうか。",romaji:"Kochira no shorui ni go-shomei itadakemasu deshou ka.",meaning:"Apakah Anda berkenan menandatangani dokumen ini?"},
      {jp:"貴重なご意見をいただき、今後の改善に役立てたいと思います。",kana:"きちょうなごいけんをいただき、こんごのかいぜんにやくだてたいとおもいます。",romaji:"Kichou na go-iken o itadaki, kongo no kaizen ni yakudatetai to omoimasu.",meaning:"Atas masukan berharga yang telah Anda berikan, kami akan manfaatkan untuk perbaikan ke depan."},
      {jp:"お忙しい中、対応していただき、本当にありがとうございました。",kana:"おいそがしいなか、たいおうしていただき、ほんとうにありがとうございました。",romaji:"O-isogashii naka, taiou shite itadaki, hontou ni arigatou gozaimashita.",meaning:"Di tengah kesibukan Anda yang berkenan menangani ini, saya sungguh berterima kasih."}
    ]}
  ]},

  // ── GR-N4-85: [使役形] ていただけませんか ──
  {id:"GR-N4-85",level:"N4",title:"[使役形] ていただけませんか",summary:"Permintaan izin yang sangat sopan dan formal — 'bolehkah saya ~?' atau 'perkenankanlah saya ~'. Strukturnya: [V使役形] + ていただけませんか. Dipakai saat meminta izin kepada atasan, klien, atau dalam situasi bisnis formal.",groups:[{name:"[V使役形] ていただけませんか",description:"[Vsasete] + いただけませんか。Meminta izin secara sangat sopan untuk melakukan sesuatu.",sentences:[
    {jp:"本日はお時間をいただき、ありがとうございます。早速ですが、提案内容をご説明させていただけませんか。",kana:"ほんじつはおじかんをいただき、ありがとうございます。さっそくですが、ていあんないようをごせつめいさせていただけませんか。",romaji:"Honjitsu wa o-jikan o itadaki, arigatou gozaimasu. Sassoku desu ga, teian naiyou o go-setsumei sasete itadakemasu deshou ka.",meaning:"Terima kasih atas waktunya hari ini. Langsung saja, bolehkah saya menjelaskan isi proposalnya?"},
    {jp:"先生、少しよろしいでしょうか。論文の方向性について相談させていただけませんか。",kana:"せんせい、すこしよろしいでしょうか。ろんぶんのほうこうせいについてそうだんさせていただけませんか。",romaji:"Sensei, sukoshi yoroshii deshou ka. Ronbun no houkou-sei ni tsuite soudan sasete itadakemasu deshou ka.",meaning:"Sensei, maaf apakah ada waktu sebentar? Bolehkah saya berkonsultasi mengenai arah penelitian tesis saya?"},
    {jp:"誠に恐れ入りますが、締め切りを一週間延長させていただけませんか。",kana:"まことにおそれいりますが、しめきりをいっしゅうかんえんちょうさせていただけませんか。",romaji:"Makoto ni osore irimasu ga, shimekiri o isshuukan enchou sasete itadakemasu deshou ka.",meaning:"Saya sangat meminta maaf, tapi bolehkah saya memohon perpanjangan deadline selama satu minggu?"},
    {jp:"この度の件について、改めて詳しくご説明させていただけませんか。誤解が生じてしまったようで。",kana:"このたびのけんについて、あらためてくわしくごせつめいさせていただけませんか。ごかいがしょうじてしまったようで。",romaji:"Kono tabi no ken ni tsuite, あらためて kuwashiku go-setsumei sasete itadakemasu deshou ka. Gokai ga shoujite shimatta you de.",meaning:"Mengenai hal ini, bolehkah saya menjelaskan kembali secara lebih rinci? Sepertinya telah terjadi kesalahpahaman."},
    {jp:"お客様のご要望をもう少し詳しくお聞かせいただき、最適なプランをご提案させていただけませんか。",kana:"おきゃくさまのごようぼうをもうすこしくわしくおきかせいただき、さいてきなぷらんをごていあんさせていただけませんか。",romaji:"O-kyakusama no go-youbou o mou sukoshi kuwashiku o-kikase itadaki, saiteki na puran o go-teian sasete itadakemasu deshou ka.",meaning:"Bolehkah saya mendengarkan lebih detail mengenai kebutuhan Anda, lalu mengusulkan rencana yang paling sesuai?"}
  ]}]},

// ── GR-N3-01: 〜おかげで ──
  {id:"GR-N3-01",level:"N3",title:"〜おかげで",summary:"Pola 〜おかげで untuk level N3, dengan contoh penggunaan dalam konteks sekolah, kantor, layanan publik, dan kehidupan sehari-hari di Jepang.",groups:[
    {name:"〜おかげで",description:"Contoh penggunaan 〜おかげで dalam konteks alami sehari-hari di Jepang.",sentences:[
      {jp:"先輩が地図を送ってくれたおかげで、区役所に迷わず行けた。",kana:"せんぱいがちずをおくってくれたおかげで、くやくしょにまよわずいけた。",romaji:"Senpai ga chizu wo okutsu tekureta okagede, kuyakusho ni mayowa zu ike ta.",meaning:"Senpai mengirim peta, jadi saya bisa pergi ke balai kota tanpa tersesat."},
      {jp:"店長がシフトを調整してくれたおかげで、面接の時間に間に合った。",kana:"てんちょうがしふとをちょうせいしてくれたおかげで、めんせつのじかんにまにあった。",romaji:"Tenchou ga shifuto wo chousei shitekureta okagede, mensetsu no jikan ni maniatsu ta.",meaning:"Manajer menyesuaikan jadwal shift, jadi saya sempat datang ke wawancara tepat waktu."},
      {jp:"近所の人がごみ出しのルールを教えてくれたおかげで、引っ越したばかりでも困らなかった。",kana:"きんじょのにんがごみだしのるーるをおしえてくれたおかげで、ひっこしたばかりでもこまらなかった。",romaji:"Kinjo no nin gagomi dashi no ruuru wo oshie tekureta okagede, hikkoshi tabakaridemo komara nakatta.",meaning:"Tetangga menjelaskan aturan buang sampah, jadi walau baru pindah saya tidak kebingungan."},
      {jp:"先生が発表の順番を早めてくれたおかげで、午後のバイトに遅れずに済んだ。",kana:"せんせいがはっぴょうのじゅんばんをはやめてくれたおかげで、ごごのばいとにおくれずにすんだ。",romaji:"Sensei ga happyou no junban wo hayame tekureta okagede, gogo no baito ni okure zuni sun da.",meaning:"Sensei memajukan giliran presentasi, jadi saya tidak terlambat ke kerja part-time sore."},
      {jp:"駅前に新しい案内板ができたおかげで、初めて来た留学生でも建物を見つけやすくなった。",kana:"えきまえにあたらしいあんないばんができたおかげで、はじめてきたりゅうがくせいでもたてものをみつけやすくなった。",romaji:"Ekimae ni atarashii annaiban gadekita okagede, hajimete kita ryuugakusei demo tatemono wo mitsu keyasukunatta.",meaning:"Karena ada papan petunjuk baru di depan stasiun, mahasiswa asing yang baru datang pun lebih mudah menemukan gedungnya."}
    ]}
  ]},

  // ── GR-N3-02: 〜せいで ──
  {id:"GR-N3-02",level:"N3",title:"〜せいで",summary:"Pola 〜せいで untuk level N3, dengan contoh penggunaan dalam konteks sekolah, kantor, layanan publik, dan kehidupan sehari-hari di Jepang.",groups:[
    {name:"〜せいで",description:"Contoh penggunaan 〜せいで dalam konteks alami sehari-hari di Jepang.",sentences:[
      {jp:"朝から電車が止まっていたせいで、説明会の開始に間に合わなかった。",kana:"あさからでんしゃがとまっていたせいで、せつめいかいのかいしにまにあわなかった。",romaji:"Asa kara densha ga toma tteita seide, setsumeikai no kaishi ni maniawa nakatta.",meaning:"Karena kereta berhenti sejak pagi, saya tidak sempat datang tepat waktu ke sesi penjelasan."},
      {jp:"必要書類を一枚忘れてしまったせいで、その日に手続きが終わらなかった。",kana:"ひつようしょるいをいちまいわすれてしまったせいで、そのにちにてつづきがおわらなかった。",romaji:"Hitsuyoushorui wo ichimai wasure teshimatta seide, sono nichi ni tetsuzuki ga owa ranakatta.",meaning:"Karena saya lupa satu lembar dokumen, prosesnya tidak selesai hari itu."},
      {jp:"夜中まで課題をしていたせいで、午前の授業で集中できなかった。",kana:"よなかまでかだいをしていたせいで、ごぜんのじゅぎょうでしゅうちゅうできなかった。",romaji:"Yonaka made kadai woshiteita seide, gozen no jugyou de shuuchuu dekinakatta.",meaning:"Karena mengerjakan tugas sampai larut malam, saya tidak bisa fokus di kelas pagi."},
      {jp:"店の前で工事が続いていたせいで、昼の時間帯でも客足が少なかった。",kana:"みせのまえでこうじがつづいていたせいで、ひるのじかんたいでもきゃくあしがすくなかった。",romaji:"Mise no mae de kouji ga tsuzui teita seide, hiru no jikantai demo kyakuashi ga sukunaka tta.",meaning:"Karena ada konstruksi terus di depan toko, pelanggan tetap sedikit bahkan saat jam makan siang."},
      {jp:"思ったより雨が強かったせいで、商店街のイベントは途中で中止になった。",kana:"おもったよりあめがつよかったせいで、しょうてんがいのいべんとはとちゅうでちゅうしになった。",romaji:"Omotta yori ame ga tsuyoka tta seide, shoutengai no ibento ha tochuu de chuushi ninatta.",meaning:"Karena hujan lebih deras daripada dugaan, acara di area pertokoan dihentikan di tengah jalan."}
    ]}
  ]},

  // ── GR-N3-03: 〜からこそ ──
  {id:"GR-N3-03",level:"N3",title:"〜からこそ",summary:"Pola 〜からこそ untuk level N3, dengan contoh penggunaan dalam konteks sekolah, kantor, layanan publik, dan kehidupan sehari-hari di Jepang.",groups:[
    {name:"〜からこそ",description:"Contoh penggunaan 〜からこそ dalam konteks alami sehari-hari di Jepang.",sentences:[
      {jp:"先輩が地図を送ってくれたからこそ、区役所に迷わず行けた。",kana:"せんぱいがちずをおくってくれたからこそ、くやくしょにまよわずいけた。",romaji:"Senpai ga chizu wo okutsu tekureta karakoso, kuyakusho ni mayowa zu ike ta.",meaning:"Senpai mengirim peta, jadi saya bisa pergi ke balai kota tanpa tersesat."},
      {jp:"店長がシフトを調整してくれたからこそ、面接の時間に間に合った。",kana:"てんちょうがしふとをちょうせいしてくれたからこそ、めんせつのじかんにまにあった。",romaji:"Tenchou ga shifuto wo chousei shitekureta karakoso, mensetsu no jikan ni maniatsu ta.",meaning:"Manajer menyesuaikan jadwal shift, jadi saya sempat datang ke wawancara tepat waktu."},
      {jp:"近所の人がごみ出しのルールを教えてくれたからこそ、引っ越したばかりでも困らなかった。",kana:"きんじょのにんがごみだしのるーるをおしえてくれたからこそ、ひっこしたばかりでもこまらなかった。",romaji:"Kinjo no nin gagomi dashi no ruuru wo oshie tekureta karakoso, hikkoshi tabakaridemo komara nakatta.",meaning:"Tetangga menjelaskan aturan buang sampah, jadi walau baru pindah saya tidak kebingungan."},
      {jp:"先生が発表の順番を早めてくれたからこそ、午後のバイトに遅れずに済んだ。",kana:"せんせいがはっぴょうのじゅんばんをはやめてくれたからこそ、ごごのばいとにおくれずにすんだ。",romaji:"Sensei ga happyou no junban wo hayame tekureta karakoso, gogo no baito ni okure zuni sun da.",meaning:"Sensei memajukan giliran presentasi, jadi saya tidak terlambat ke kerja part-time sore."},
      {jp:"駅前に新しい案内板ができたからこそ、初めて来た留学生でも建物を見つけやすくなった。",kana:"えきまえにあたらしいあんないばんができたからこそ、はじめてきたりゅうがくせいでもたてものをみつけやすくなった。",romaji:"Ekimae ni atarashii annaiban gadekita karakoso, hajimete kita ryuugakusei demo tatemono wo mitsu keyasukunatta.",meaning:"Karena ada papan petunjuk baru di depan stasiun, mahasiswa asing yang baru datang pun lebih mudah menemukan gedungnya."}
    ]}
  ]},

  // ── GR-N3-04: 〜によって① ──
  {id:"GR-N3-04",level:"N3",title:"〜によって①",summary:"Pola 〜によって① untuk level N3, dengan contoh penggunaan dalam konteks sekolah, kantor, layanan publik, dan kehidupan sehari-hari di Jepang.",groups:[
    {name:"〜によって①",description:"Contoh penggunaan 〜によって① dalam konteks alami sehari-hari di Jepang.",sentences:[
      {jp:"留学生によって説明会が、大学のホールで開かれた。",kana:"りゅうがくせいによってせつめいかいが、だいがくのほーるでひらかれた。",romaji:"Ryuugakusei niyotte setsumeikai ga, daigaku no hooru de hiraka reta.",meaning:"Sesi penjelasan untuk mahasiswa asing diadakan di aula universitas."},
      {jp:"駅前の再開発によって住民向けの案内が配られた。",kana:"えきまえのさいかいはつによってじゅうみんむけのあんないがくばられた。",romaji:"Ekimae no saikaihatsu niyotte juumin muke no annai ga kubara reta.",meaning:"Pemberitahuan bagi warga terkait pembangunan ulang area depan stasiun dibagikan."},
      {jp:"この制度によって質問があれば、区役所の窓口で確認できる。",kana:"このせいどによってしつもんがあれば、くやくしょのまどぐちでかくにんできる。",romaji:"Kono seido niyotte shitsumon gaareba, kuyakusho no madoguchi de kakunin dekiru.",meaning:"Kalau ada pertanyaan terkait sistem ini, bisa ditanyakan di loket balai kota."},
      {jp:"外国人スタッフによって研修も、来月から始まる予定だ。",kana:"がいこくじんすたっふによってけんしゅうも、らいげつからはじまるよていだ。",romaji:"Gaikokujin sutaffu niyotte kenshuu mo, raigetsu kara hajima ru yotei da.",meaning:"Pelatihan untuk staf asing juga dijadwalkan mulai bulan depan."},
      {jp:"今回の変更点によって詳しい資料は、受付で受け取れる。",kana:"こんかいのへんこうてんによってくわしいしりょうは、うけつけでうけとれる。",romaji:"Konkai no henkouten niyotte kuwashii shiryou ha, uketsuke de uketore ru.",meaning:"Materi rinci terkait perubahan kali ini bisa diambil di meja penerima tamu."}
    ]}
  ]},

  // ── GR-N3-05: 〜(んだ)もの / もん ──
  {id:"GR-N3-05",level:"N3",title:"〜(んだ)もの / もん",summary:"Pola 〜(んだ)もの / もん untuk level N3, dengan contoh penggunaan dalam konteks sekolah, kantor, layanan publik, dan kehidupan sehari-hari di Jepang.",groups:[
    {name:"〜(んだ)もの / もん",description:"Contoh penggunaan 〜(んだ)もの / もん dalam konteks alami sehari-hari di Jepang.",sentences:[
      {jp:"この前の説明会では、ものという表現も実際の場面で使われていた。",kana:"このまえのせつめいかいでは、ものというひょうげんもじっさいのばめんでつかわれていた。",romaji:"Kono mae no setsumeikai deha, monotoiu hyougen mo jissai no bamen de tsukawa reteita.",meaning:"Pada sesi penjelasan sebelumnya, ungkapan ini juga dipakai dalam situasi nyata."},
      {jp:"区役所や学校でも、もののような言い方を見かけることがある。",kana:"くやくしょやがっこうでも、もののようないいかたをみかけることがある。",romaji:"Kuyakusho ya gakkou demo, mononoyouna iikata wo mikake rukotogaaru.",meaning:"Di balai kota maupun sekolah, kadang terlihat cara ungkap seperti ini."},
      {jp:"職場の会話では、ものを使うと少し自然な言い方になる。",kana:"しょくばのかいわでは、ものをつかうとすこししぜんないいかたになる。",romaji:"Shokuba no kaiwa deha, monowo tsukau to sukoshi shizen na iikata ninaru.",meaning:"Dalam percakapan kerja, memakai pola ini bisa membuat ungkapan terdengar lebih alami."},
      {jp:"駅前の店で店員さんが話しているのを聞いて、ものの使い方がよく分かった。",kana:"えきまえのみせでてんいんさんがはなしているのをきいて、もののつかいかたがよくわかった。",romaji:"Ekimae no mise de ten'in sanga hanashi teirunowo kii te, monono tsukaikata gayoku waka tta.",meaning:"Saat mendengar staf toko di depan stasiun berbicara, saya jadi lebih paham cara pakai pola ini."},
      {jp:"授業だけでなく、日常の場面でもものは意外とよく出てくる。",kana:"じゅぎょうだけでなく、にちじょうのばめんでもものはいがいとよくでてくる。",romaji:"Jugyou dakedenaku, nichijou no bamen demomonoha igai toyoku dete kuru.",meaning:"Bukan hanya di kelas, pola ini ternyata cukup sering muncul dalam keseharian."}
    ]}
  ]},

  // ── GR-N3-06: 〜ことはない ──
  {id:"GR-N3-06",level:"N3",title:"〜ことはない",summary:"Pola 〜ことはない untuk level N3, dengan contoh penggunaan dalam konteks sekolah, kantor, layanan publik, dan kehidupan sehari-hari di Jepang.",groups:[
    {name:"〜ことはない",description:"Contoh penggunaan 〜ことはない dalam konteks alami sehari-hari di Jepang.",sentences:[
      {jp:"この前の説明会では、ことはないという表現も実際の場面で使われていた。",kana:"このまえのせつめいかいでは、ことはないというひょうげんもじっさいのばめんでつかわれていた。",romaji:"Kono mae no setsumeikai deha, kotohanaitoiu hyougen mo jissai no bamen de tsukawa reteita.",meaning:"Pada sesi penjelasan sebelumnya, ungkapan ini juga dipakai dalam situasi nyata."},
      {jp:"区役所や学校でも、ことはないのような言い方を見かけることがある。",kana:"くやくしょやがっこうでも、ことはないのようないいかたをみかけることがある。",romaji:"Kuyakusho ya gakkou demo, kotohanainoyouna iikata wo mikake rukotogaaru.",meaning:"Di balai kota maupun sekolah, kadang terlihat cara ungkap seperti ini."},
      {jp:"職場の会話では、ことはないを使うと少し自然な言い方になる。",kana:"しょくばのかいわでは、ことはないをつかうとすこししぜんないいかたになる。",romaji:"Shokuba no kaiwa deha, kotohanaiwo tsukau to sukoshi shizen na iikata ninaru.",meaning:"Dalam percakapan kerja, memakai pola ini bisa membuat ungkapan terdengar lebih alami."},
      {jp:"駅前の店で店員さんが話しているのを聞いて、ことはないの使い方がよく分かった。",kana:"えきまえのみせでてんいんさんがはなしているのをきいて、ことはないのつかいかたがよくわかった。",romaji:"Ekimae no mise de ten'in sanga hanashi teirunowo kii te, kotohanaino tsukaikata gayoku waka tta.",meaning:"Saat mendengar staf toko di depan stasiun berbicara, saya jadi lebih paham cara pakai pola ini."},
      {jp:"授業だけでなく、日常の場面でもことはないは意外とよく出てくる。",kana:"じゅぎょうだけでなく、にちじょうのばめんでもことはないはいがいとよくでてくる。",romaji:"Jugyou dakedenaku, nichijou no bamen demokotohanaiha igai toyoku dete kuru.",meaning:"Bukan hanya di kelas, pola ini ternyata cukup sering muncul dalam keseharian."}
    ]}
  ]},

  // ── GR-N3-07: 〜べきだ ──
  {id:"GR-N3-07",level:"N3",title:"〜べきだ",summary:"Pola 〜べきだ untuk level N3, dengan contoh penggunaan dalam konteks sekolah, kantor, layanan publik, dan kehidupan sehari-hari di Jepang.",groups:[
    {name:"〜べきだ",description:"Contoh penggunaan 〜べきだ dalam konteks alami sehari-hari di Jepang.",sentences:[
      {jp:"この前の説明会では、べきだという表現も実際の場面で使われていた。",kana:"このまえのせつめいかいでは、べきだというひょうげんもじっさいのばめんでつかわれていた。",romaji:"Kono mae no setsumeikai deha, bekidatoiu hyougen mo jissai no bamen de tsukawa reteita.",meaning:"Pada sesi penjelasan sebelumnya, ungkapan ini juga dipakai dalam situasi nyata."},
      {jp:"区役所や学校でも、べきだのような言い方を見かけることがある。",kana:"くやくしょやがっこうでも、べきだのようないいかたをみかけることがある。",romaji:"Kuyakusho ya gakkou demo, bekidanoyouna iikata wo mikake rukotogaaru.",meaning:"Di balai kota maupun sekolah, kadang terlihat cara ungkap seperti ini."},
      {jp:"職場の会話では、べきだを使うと少し自然な言い方になる。",kana:"しょくばのかいわでは、べきだをつかうとすこししぜんないいかたになる。",romaji:"Shokuba no kaiwa deha, bekidawo tsukau to sukoshi shizen na iikata ninaru.",meaning:"Dalam percakapan kerja, memakai pola ini bisa membuat ungkapan terdengar lebih alami."},
      {jp:"駅前の店で店員さんが話しているのを聞いて、べきだの使い方がよく分かった。",kana:"えきまえのみせでてんいんさんがはなしているのをきいて、べきだのつかいかたがよくわかった。",romaji:"Ekimae no mise de ten'in sanga hanashi teirunowo kii te, bekidano tsukaikata gayoku waka tta.",meaning:"Saat mendengar staf toko di depan stasiun berbicara, saya jadi lebih paham cara pakai pola ini."},
      {jp:"授業だけでなく、日常の場面でもべきだは意外とよく出てくる。",kana:"じゅぎょうだけでなく、にちじょうのばめんでもべきだはいがいとよくでてくる。",romaji:"Jugyou dakedenaku, nichijou no bamen demobekidaha igai toyoku dete kuru.",meaning:"Bukan hanya di kelas, pola ini ternyata cukup sering muncul dalam keseharian."}
    ]}
  ]},

  // ── GR-N3-08: 〜ように ──
  {id:"GR-N3-08",level:"N3",title:"〜ように",summary:"Pola 〜ように untuk level N3, dengan contoh penggunaan dalam konteks sekolah, kantor, layanan publik, dan kehidupan sehari-hari di Jepang.",groups:[
    {name:"〜ように",description:"Contoh penggunaan 〜ように dalam konteks alami sehari-hari di Jepang.",sentences:[
      {jp:"この前の説明会では、ようにという表現も実際の場面で使われていた。",kana:"このまえのせつめいかいでは、ようにというひょうげんもじっさいのばめんでつかわれていた。",romaji:"Kono mae no setsumeikai deha, younitoiu hyougen mo jissai no bamen de tsukawa reteita.",meaning:"Pada sesi penjelasan sebelumnya, ungkapan ini juga dipakai dalam situasi nyata."},
      {jp:"区役所や学校でも、ようにのような言い方を見かけることがある。",kana:"くやくしょやがっこうでも、ようにのようないいかたをみかけることがある。",romaji:"Kuyakusho ya gakkou demo, youninoyouna iikata wo mikake rukotogaaru.",meaning:"Di balai kota maupun sekolah, kadang terlihat cara ungkap seperti ini."},
      {jp:"職場の会話では、ようにを使うと少し自然な言い方になる。",kana:"しょくばのかいわでは、ようにをつかうとすこししぜんないいかたになる。",romaji:"Shokuba no kaiwa deha, youniwo tsukau to sukoshi shizen na iikata ninaru.",meaning:"Dalam percakapan kerja, memakai pola ini bisa membuat ungkapan terdengar lebih alami."},
      {jp:"駅前の店で店員さんが話しているのを聞いて、ようにの使い方がよく分かった。",kana:"えきまえのみせでてんいんさんがはなしているのをきいて、ようにのつかいかたがよくわかった。",romaji:"Ekimae no mise de ten'in sanga hanashi teirunowo kii te, younino tsukaikata gayoku waka tta.",meaning:"Saat mendengar staf toko di depan stasiun berbicara, saya jadi lebih paham cara pakai pola ini."},
      {jp:"授業だけでなく、日常の場面でもようには意外とよく出てくる。",kana:"じゅぎょうだけでなく、にちじょうのばめんでもようにはいがいとよくでてくる。",romaji:"Jugyou dakedenaku, nichijou no bamen demoyouniha igai toyoku dete kuru.",meaning:"Bukan hanya di kelas, pola ini ternyata cukup sering muncul dalam keseharian."}
    ]}
  ]},

  // ── GR-N3-09: 〜こと ──
  {id:"GR-N3-09",level:"N3",title:"〜こと",summary:"Pola 〜こと untuk level N3, dengan contoh penggunaan dalam konteks sekolah, kantor, layanan publik, dan kehidupan sehari-hari di Jepang.",groups:[
    {name:"〜こと",description:"Contoh penggunaan 〜こと dalam konteks alami sehari-hari di Jepang.",sentences:[
      {jp:"この前の説明会では、ことという表現も実際の場面で使われていた。",kana:"このまえのせつめいかいでは、ことというひょうげんもじっさいのばめんでつかわれていた。",romaji:"Kono mae no setsumeikai deha, kototoiu hyougen mo jissai no bamen de tsukawa reteita.",meaning:"Pada sesi penjelasan sebelumnya, ungkapan ini juga dipakai dalam situasi nyata."},
      {jp:"区役所や学校でも、ことのような言い方を見かけることがある。",kana:"くやくしょやがっこうでも、ことのようないいかたをみかけることがある。",romaji:"Kuyakusho ya gakkou demo, kotonoyouna iikata wo mikake rukotogaaru.",meaning:"Di balai kota maupun sekolah, kadang terlihat cara ungkap seperti ini."},
      {jp:"職場の会話では、ことを使うと少し自然な言い方になる。",kana:"しょくばのかいわでは、ことをつかうとすこししぜんないいかたになる。",romaji:"Shokuba no kaiwa deha, kotowo tsukau to sukoshi shizen na iikata ninaru.",meaning:"Dalam percakapan kerja, memakai pola ini bisa membuat ungkapan terdengar lebih alami."},
      {jp:"駅前の店で店員さんが話しているのを聞いて、ことの使い方がよく分かった。",kana:"えきまえのみせでてんいんさんがはなしているのをきいて、ことのつかいかたがよくわかった。",romaji:"Ekimae no mise de ten'in sanga hanashi teirunowo kii te, kotono tsukaikata gayoku waka tta.",meaning:"Saat mendengar staf toko di depan stasiun berbicara, saya jadi lebih paham cara pakai pola ini."},
      {jp:"授業だけでなく、日常の場面でもことは意外とよく出てくる。",kana:"じゅぎょうだけでなく、にちじょうのばめんでもことはいがいとよくでてくる。",romaji:"Jugyou dakedenaku, nichijou no bamen demokotoha igai toyoku dete kuru.",meaning:"Bukan hanya di kelas, pola ini ternyata cukup sering muncul dalam keseharian."}
    ]}
  ]},

  // ── GR-N3-10: 〜によって② ──
  {id:"GR-N3-10",level:"N3",title:"〜によって②",summary:"Pola 〜によって② untuk level N3, dengan contoh penggunaan dalam konteks sekolah, kantor, layanan publik, dan kehidupan sehari-hari di Jepang.",groups:[
    {name:"〜によって②",description:"Contoh penggunaan 〜によって② dalam konteks alami sehari-hari di Jepang.",sentences:[
      {jp:"留学生によって説明会が、大学のホールで開かれた。",kana:"りゅうがくせいによってせつめいかいが、だいがくのほーるでひらかれた。",romaji:"Ryuugakusei niyotte setsumeikai ga, daigaku no hooru de hiraka reta.",meaning:"Sesi penjelasan untuk mahasiswa asing diadakan di aula universitas."},
      {jp:"駅前の再開発によって住民向けの案内が配られた。",kana:"えきまえのさいかいはつによってじゅうみんむけのあんないがくばられた。",romaji:"Ekimae no saikaihatsu niyotte juumin muke no annai ga kubara reta.",meaning:"Pemberitahuan bagi warga terkait pembangunan ulang area depan stasiun dibagikan."},
      {jp:"この制度によって質問があれば、区役所の窓口で確認できる。",kana:"このせいどによってしつもんがあれば、くやくしょのまどぐちでかくにんできる。",romaji:"Kono seido niyotte shitsumon gaareba, kuyakusho no madoguchi de kakunin dekiru.",meaning:"Kalau ada pertanyaan terkait sistem ini, bisa ditanyakan di loket balai kota."},
      {jp:"外国人スタッフによって研修も、来月から始まる予定だ。",kana:"がいこくじんすたっふによってけんしゅうも、らいげつからはじまるよていだ。",romaji:"Gaikokujin sutaffu niyotte kenshuu mo, raigetsu kara hajima ru yotei da.",meaning:"Pelatihan untuk staf asing juga dijadwalkan mulai bulan depan."},
      {jp:"今回の変更点によって詳しい資料は、受付で受け取れる。",kana:"こんかいのへんこうてんによってくわしいしりょうは、うけつけでうけとれる。",romaji:"Konkai no henkouten niyotte kuwashii shiryou ha, uketsuke de uketore ru.",meaning:"Materi rinci terkait perubahan kali ini bisa diambil di meja penerima tamu."}
    ]}
  ]},

  // ── GR-N3-11: 〜によれば / 〜によると ──
  {id:"GR-N3-11",level:"N3",title:"〜によれば / 〜によると",summary:"Pola 〜によれば / 〜によると untuk level N3, dengan contoh penggunaan dalam konteks sekolah, kantor, layanan publik, dan kehidupan sehari-hari di Jepang.",groups:[
    {name:"〜によれば / 〜によると",description:"Contoh penggunaan 〜によれば / 〜によると dalam konteks alami sehari-hari di Jepang.",sentences:[
      {jp:"天気予報によれば、午後から風がかなり強くなるらしい。",kana:"てんきよほうによれば、ごごからかぜがかなりつよくなるらしい。",romaji:"Tenkiyohou niyoreba, gogo kara kaze gakanari tsuyoku narurashii.",meaning:"Menurut ramalan cuaca, angin akan menjadi cukup kencang mulai sore."},
      {jp:"市の案内によれば、来月から申請方法が一部変わるそうだ。",kana:"しのあんないによれば、らいげつからしんせいほうほうがいちぶかわるそうだ。",romaji:"Shi no annai niyoreba, raigetsu kara shinsei houhou ga ichibu kawa rusouda.",meaning:"Menurut pengumuman kota, mulai bulan depan sebagian prosedur pengajuan akan berubah."},
      {jp:"先輩の話によれば、このゼミは発表の準備がかなり大変だという。",kana:"せんぱいのはなしによれば、このぜみははっぴょうのじゅんびがかなりたいへんだという。",romaji:"Senpai no hanashi niyoreba, kono zemi ha happyou no junbi gakanari taihen datoiu.",meaning:"Menurut cerita senior, persiapan presentasi di seminar ini cukup berat."},
      {jp:"駅員さんの説明によれば、今日は終電も少し遅れるようだ。",kana:"えきいんさんのせつめいによれば、こんにちはしゅうでんもすこしおくれるようだ。",romaji:"Ekiin sanno setsumei niyoreba, konnichiha shuuden mo sukoshi okure ruyouda.",meaning:"Menurut penjelasan petugas stasiun, kereta terakhir hari ini juga akan sedikit terlambat."},
      {jp:"先生によれば、レポートは形式より内容の明確さが大事とのことだった。",kana:"せんせいによれば、れぽーとはけいしきよりないようのめいかくさがだいじとのことだった。",romaji:"Sensei niyoreba, repooto ha keishiki yori naiyou no meikaku saga daiji tonokotodatta.",meaning:"Menurut sensei, kejelasan isi lebih penting daripada format laporan."}
    ]}
  ]},

  // ── GR-N3-12: 〜を通して / 通じて① ──
  {id:"GR-N3-12",level:"N3",title:"〜を通して / 通じて①",summary:"Pola 〜を通して / 通じて① untuk level N3, dengan contoh penggunaan dalam konteks sekolah, kantor, layanan publik, dan kehidupan sehari-hari di Jepang.",groups:[
    {name:"〜を通して / 通じて①",description:"Contoh penggunaan 〜を通して / 通じて① dalam konteks alami sehari-hari di Jepang.",sentences:[
      {jp:"地域のイベントを通して、近所の人と少しずつ顔見知りになった。",kana:"ちいきのいべんとをとうして、きんじょのにんとすこしずつかおみしりになった。",romaji:"Chiiki no ibento wo toushi te, kinjo no nin to sukoshi zutsu kaomishiri ninatta.",meaning:"Melalui acara lingkungan, saya perlahan mulai mengenal orang-orang sekitar."},
      {jp:"先輩との会話を通して、就職活動の流れが具体的に見えてきた。",kana:"せんぱいとのかいわをとうして、しゅうしょくかつどうのながれがぐたいてきにみえてきた。",romaji:"Senpai tono kaiwa wo toushi te, shuushokukatsudou no nagare ga gutaiteki ni mie tekita.",meaning:"Melalui percakapan dengan senior, alur mencari kerja jadi terasa lebih jelas."},
      {jp:"実習を通して、教室では分からなかった課題にも気づいた。",kana:"じっしゅうをとうして、きょうしつではわからなかったかだいにもきづいた。",romaji:"Jisshuu wo toushi te, kyoushitsu deha waka ranakatta kadai nimo kizu ita.",meaning:"Melalui praktik lapangan, saya menyadari tantangan yang tidak terlihat di kelas."},
      {jp:"この資料を通して、学校側の考え方を理解してほしい。",kana:"このしりょうをとうして、がっこうがわのかんがえかたをりかいしてほしい。",romaji:"Kono shiryou wo toushi te, gakkougawa no kangaekata wo rikai shitehoshii.",meaning:"Melalui materi ini, saya ingin Anda memahami cara pandang pihak sekolah."},
      {jp:"商店街の取り組みを通して、地域全体の雰囲気も変わってきた。",kana:"しょうてんがいのとりくみをとうして、ちいきぜんたいのふんいきもかわってきた。",romaji:"Shoutengai no torikumi wo toushi te, chiiki zentai no fun'iki mo kawa ttekita.",meaning:"Melalui upaya area pertokoan, suasana seluruh lingkungan juga mulai berubah."}
    ]}
  ]},

  // ── GR-N3-13: 〜から〜にかけて ──
  {id:"GR-N3-13",level:"N3",title:"〜から〜にかけて",summary:"Pola 〜から〜にかけて untuk level N3, dengan contoh penggunaan dalam konteks sekolah, kantor, layanan publik, dan kehidupan sehari-hari di Jepang.",groups:[
    {name:"〜から〜にかけて",description:"Contoh penggunaan 〜から〜にかけて dalam konteks alami sehari-hari di Jepang.",sentences:[
      {jp:"六月から七月にかけて、駅前で大きな工事が行われる。",kana:"ろくがつからしちがつにかけて、えきまえでおおきなこうじがおこなわれる。",romaji:"Rokugatsu kara shichigatsu nikakete, ekimae de ooki na kouji ga okonawa reru.",meaning:"Sekitar Juni sampai Juli, akan ada proyek besar di depan stasiun."},
      {jp:"朝九時から十時にかけて、窓口が特に混みやすい。",kana:"あさくじからとときにかけて、まどぐちがとくにこみやすい。",romaji:"Asa kuji kara totoki nikakete, madoguchi ga tokuni komi yasui.",meaning:"Sekitar pukul sembilan sampai sepuluh pagi, loket biasanya sangat ramai."},
      {jp:"春から初夏にかけて、この公園は散歩する人が増える。",kana:"はるからしょかにかけて、このこうえんはさんぽするにんがふえる。",romaji:"Haru kara shoka nikakete, kono kouen ha sanpo suru nin ga fue ru.",meaning:"Sekitar musim semi sampai awal musim panas, taman ini dipenuhi lebih banyak orang yang berjalan-jalan."},
      {jp:"入学式の時期からゴールデンウィークにかけて、新生活の相談が多い。",kana:"にゅうがくしきのじきからごーるでんうぃーくにかけて、しんせいかつのそうだんがおおい。",romaji:"Nyuugakushiki no jiki kara gooruden'uiiku nikakete, shinseikatsu no soudan ga ooi.",meaning:"Sekitar masa masuk sekolah hingga Golden Week, banyak konsultasi tentang kehidupan baru."},
      {jp:"年末から正月にかけて、コンビニの品ぞろえも少し変わる。",kana:"ねんまつからしょうがつにかけて、こんびにのひんぞろえもすこしかわる。",romaji:"Nenmatsu kara shougatsu nikakete, konbini no hin zoroemo sukoshi kawa ru.",meaning:"Sekitar akhir tahun sampai tahun baru, pilihan barang di konbini juga sedikit berubah."}
    ]}
  ]},

  // ── GR-N3-14: 〜を中心に ──
  {id:"GR-N3-14",level:"N3",title:"〜を中心に",summary:"Pola 〜を中心に untuk level N3, dengan contoh penggunaan dalam konteks sekolah, kantor, layanan publik, dan kehidupan sehari-hari di Jepang.",groups:[
    {name:"〜を中心に",description:"Contoh penggunaan 〜を中心に dalam konteks alami sehari-hari di Jepang.",sentences:[
      {jp:"この説明会は、留学生を中心に行われる。",kana:"このせつめいかいは、りゅうがくせいをちゅうしんにおこなわれる。",romaji:"Kono setsumeikai ha, ryuugakusei wo chuushin ni okonawa reru.",meaning:"Sesi penjelasan ini diadakan dengan fokus utama pada mahasiswa asing."},
      {jp:"商店街では子ども向けの催しを中心に週末の企画を考えている。",kana:"しょうてんがいではこどもむけのもよおしをちゅうしんにしゅうまつのきかくをかんがえている。",romaji:"Shoutengai deha kodomo muke no moyooshi wo chuushin ni shuumatsu no kikaku wo kangae teiru.",meaning:"Di area pertokoan, acara akhir pekan sedang dirancang dengan fokus pada kegiatan untuk anak-anak."},
      {jp:"今回の会議は安全対策を中心に話し合われた。",kana:"こんかいのかいぎはあんぜんたいさくをちゅうしんにはなしあわれた。",romaji:"Konkai no kaigi ha anzentaisaku wo chuushin ni hanashiawa reta.",meaning:"Rapat kali ini dibahas dengan fokus pada langkah-langkah keamanan."},
      {jp:"この施設は地域交流を中心に作られた場所だ。",kana:"このしせつはちいきこうりゅうをちゅうしんにつくられたばしょだ。",romaji:"Kono shisetsu ha chiiki kouryuu wo chuushin ni tsukura reta basho da.",meaning:"Fasilitas ini dibuat dengan pusat perhatian pada interaksi warga sekitar."},
      {jp:"今年の学園祭は環境問題を中心に展示が多かった。",kana:"こんねんのがくえんさいはかんきょうもんだいをちゅうしんにてんじがおおかった。",romaji:"Konnen no gakuensai ha kankyoumondai wo chuushin ni tenji ga ooka tta.",meaning:"Festival kampus tahun ini memiliki banyak pameran yang berpusat pada isu lingkungan."}
    ]}
  ]},

  // ── GR-N3-15: 〜を通して / 通じて② ──
  {id:"GR-N3-15",level:"N3",title:"〜を通して / 通じて②",summary:"Pola 〜を通して / 通じて② untuk level N3, dengan contoh penggunaan dalam konteks sekolah, kantor, layanan publik, dan kehidupan sehari-hari di Jepang.",groups:[
    {name:"〜を通して / 通じて②",description:"Contoh penggunaan 〜を通して / 通じて② dalam konteks alami sehari-hari di Jepang.",sentences:[
      {jp:"地域のイベントを通して、近所の人と少しずつ顔見知りになった。",kana:"ちいきのいべんとをとうして、きんじょのにんとすこしずつかおみしりになった。",romaji:"Chiiki no ibento wo toushi te, kinjo no nin to sukoshi zutsu kaomishiri ninatta.",meaning:"Melalui acara lingkungan, saya perlahan mulai mengenal orang-orang sekitar."},
      {jp:"先輩との会話を通して、就職活動の流れが具体的に見えてきた。",kana:"せんぱいとのかいわをとうして、しゅうしょくかつどうのながれがぐたいてきにみえてきた。",romaji:"Senpai tono kaiwa wo toushi te, shuushokukatsudou no nagare ga gutaiteki ni mie tekita.",meaning:"Melalui percakapan dengan senior, alur mencari kerja jadi terasa lebih jelas."},
      {jp:"実習を通して、教室では分からなかった課題にも気づいた。",kana:"じっしゅうをとうして、きょうしつではわからなかったかだいにもきづいた。",romaji:"Jisshuu wo toushi te, kyoushitsu deha waka ranakatta kadai nimo kizu ita.",meaning:"Melalui praktik lapangan, saya menyadari tantangan yang tidak terlihat di kelas."},
      {jp:"この資料を通して、学校側の考え方を理解してほしい。",kana:"このしりょうをとうして、がっこうがわのかんがえかたをりかいしてほしい。",romaji:"Kono shiryou wo toushi te, gakkougawa no kangaekata wo rikai shitehoshii.",meaning:"Melalui materi ini, saya ingin Anda memahami cara pandang pihak sekolah."},
      {jp:"商店街の取り組みを通して、地域全体の雰囲気も変わってきた。",kana:"しょうてんがいのとりくみをとうして、ちいきぜんたいのふんいきもかわってきた。",romaji:"Shoutengai no torikumi wo toushi te, chiiki zentai no fun'iki mo kawa ttekita.",meaning:"Melalui upaya area pertokoan, suasana seluruh lingkungan juga mulai berubah."}
    ]}
  ]},

  // ── GR-N3-18: 〜ないと / なきゃ / なくちゃ ──
  {id:"GR-N3-18",level:"N3",title:"〜ないと / なきゃ / なくちゃ",summary:"Pola 〜ないと / なきゃ / なくちゃ untuk level N3, dengan contoh penggunaan dalam konteks sekolah, kantor, layanan publik, dan kehidupan sehari-hari di Jepang.",groups:[
    {name:"〜ないと / なきゃ / なくちゃ",description:"Contoh penggunaan 〜ないと / なきゃ / なくちゃ dalam konteks alami sehari-hari di Jepang.",sentences:[
      {jp:"この前の説明会では、ないとという表現も実際の場面で使われていた。",kana:"このまえのせつめいかいでは、ないとというひょうげんもじっさいのばめんでつかわれていた。",romaji:"Kono mae no setsumeikai deha, naitotoiu hyougen mo jissai no bamen de tsukawa reteita.",meaning:"Pada sesi penjelasan sebelumnya, ungkapan ini juga dipakai dalam situasi nyata."},
      {jp:"区役所や学校でも、ないとのような言い方を見かけることがある。",kana:"くやくしょやがっこうでも、ないとのようないいかたをみかけることがある。",romaji:"Kuyakusho ya gakkou demo, naitonoyouna iikata wo mikake rukotogaaru.",meaning:"Di balai kota maupun sekolah, kadang terlihat cara ungkap seperti ini."},
      {jp:"職場の会話では、ないとを使うと少し自然な言い方になる。",kana:"しょくばのかいわでは、ないとをつかうとすこししぜんないいかたになる。",romaji:"Shokuba no kaiwa deha, naitowo tsukau to sukoshi shizen na iikata ninaru.",meaning:"Dalam percakapan kerja, memakai pola ini bisa membuat ungkapan terdengar lebih alami."},
      {jp:"駅前の店で店員さんが話しているのを聞いて、ないとの使い方がよく分かった。",kana:"えきまえのみせでてんいんさんがはなしているのをきいて、ないとのつかいかたがよくわかった。",romaji:"Ekimae no mise de ten'in sanga hanashi teirunowo kii te, naitono tsukaikata gayoku waka tta.",meaning:"Saat mendengar staf toko di depan stasiun berbicara, saya jadi lebih paham cara pakai pola ini."},
      {jp:"授業だけでなく、日常の場面でもないとは意外とよく出てくる。",kana:"じゅぎょうだけでなく、にちじょうのばめんでもないとはいがいとよくでてくる。",romaji:"Jugyou dakedenaku, nichijou no bamen demonaitoha igai toyoku dete kuru.",meaning:"Bukan hanya di kelas, pola ini ternyata cukup sering muncul dalam keseharian."}
    ]}
  ]},

  // ── GR-N3-19: 〜たって ──
  {id:"GR-N3-19",level:"N3",title:"〜たって",summary:"Pola 〜たって untuk level N3, dengan contoh penggunaan dalam konteks sekolah, kantor, layanan publik, dan kehidupan sehari-hari di Jepang.",groups:[
    {name:"〜たって",description:"Contoh penggunaan 〜たって dalam konteks alami sehari-hari di Jepang.",sentences:[
      {jp:"書類を出したって, 受付番号を受け取った。",kana:"しょるいをだしたって, うけつけばんごうをうけとった。",romaji:"Shorui wo dashi tatte,   uketsukebangou wo uketotsu ta.",meaning:"Setelah menyerahkan dokumen itu, saya menerima nomor antrean."},
      {jp:"部屋を見たって, その日のうちに申し込む人も多い。",kana:"へやをみたって, そのにちのうちにもうしこむにんもおおい。",romaji:"Heya wo mita tte,   sono nichi nouchini moushikomu nin mo ooi.",meaning:"Setelah melihat kamar itu, banyak orang langsung mendaftar pada hari yang sama."},
      {jp:"電車を降りたって, 風の強さに驚いた。",kana:"でんしゃをおりたって, かぜのつよさにおどろいた。",romaji:"Densha wo ori tatte,   kaze no tsuyosa ni odoroi ta.",meaning:"Begitu turun dari kereta, saya terkejut oleh kencangnya angin."},
      {jp:"先生に会ったって, 少し安心した。",kana:"せんせいにあったって, すこしあんしんした。",romaji:"Sensei ni atsu tatte,   sukoshi anshinshi ta.",meaning:"Setelah bertemu sensei, saya merasa sedikit lega."},
      {jp:"店に入ったって, だしのいい香りが広がっていた。",kana:"みせにいっったって, だしのいいかおりがひろがっていた。",romaji:"Mise ni itsutsu tatte,   dashinoii kaori ga hiroga tteita.",meaning:"Begitu masuk toko, aroma kaldu yang sedap langsung terasa."}
    ]}
  ]},

  // ── GR-N3-20: 〜っけ ──
  {id:"GR-N3-20",level:"N3",title:"〜っけ",summary:"Pola 〜っけ untuk level N3, dengan contoh penggunaan dalam konteks sekolah, kantor, layanan publik, dan kehidupan sehari-hari di Jepang.",groups:[
    {name:"〜っけ",description:"Contoh penggunaan 〜っけ dalam konteks alami sehari-hari di Jepang.",sentences:[
      {jp:"この前の説明会では、っけという表現も実際の場面で使われていた。",kana:"このまえのせつめいかいでは、っけというひょうげんもじっさいのばめんでつかわれていた。",romaji:"Kono mae no setsumeikai deha, kketoiu hyougen mo jissai no bamen de tsukawa reteita.",meaning:"Pada sesi penjelasan sebelumnya, ungkapan ini juga dipakai dalam situasi nyata."},
      {jp:"区役所や学校でも、っけのような言い方を見かけることがある。",kana:"くやくしょやがっこうでも、っけのようないいかたをみかけることがある。",romaji:"Kuyakusho ya gakkou demo, kkenoyouna iikata wo mikake rukotogaaru.",meaning:"Di balai kota maupun sekolah, kadang terlihat cara ungkap seperti ini."},
      {jp:"職場の会話では、っけを使うと少し自然な言い方になる。",kana:"しょくばのかいわでは、っけをつかうとすこししぜんないいかたになる。",romaji:"Shokuba no kaiwa deha, kkewo tsukau to sukoshi shizen na iikata ninaru.",meaning:"Dalam percakapan kerja, memakai pola ini bisa membuat ungkapan terdengar lebih alami."},
      {jp:"駅前の店で店員さんが話しているのを聞いて、っけの使い方がよく分かった。",kana:"えきまえのみせでてんいんさんがはなしているのをきいて、っけのつかいかたがよくわかった。",romaji:"Ekimae no mise de ten'in sanga hanashi teirunowo kii te, kkeno tsukaikata gayoku waka tta.",meaning:"Saat mendengar staf toko di depan stasiun berbicara, saya jadi lebih paham cara pakai pola ini."},
      {jp:"授業だけでなく、日常の場面でもっけは意外とよく出てくる。",kana:"じゅぎょうだけでなく、にちじょうのばめんでもっけはいがいとよくでてくる。",romaji:"Jugyou dakedenaku, nichijou no bamen demokkeha igai toyoku dete kuru.",meaning:"Bukan hanya di kelas, pola ini ternyata cukup sering muncul dalam keseharian."}
    ]}
  ]},

  // ── GR-N3-21: 〜と / 〜た / 〜たら / 〜た ──
  {id:"GR-N3-21",level:"N3",title:"〜と / 〜た / 〜たら / 〜た",summary:"Pola 〜と / 〜た / 〜たら / 〜た untuk level N3, dengan contoh penggunaan dalam konteks sekolah, kantor, layanan publik, dan kehidupan sehari-hari di Jepang.",groups:[
    {name:"〜と / 〜た / 〜たら / 〜た",description:"Contoh penggunaan 〜と / 〜た / 〜たら / 〜た dalam konteks alami sehari-hari di Jepang.",sentences:[
      {jp:"駅に着くと、ちょうど案内放送が始まった。",kana:"えきにつくと、ちょうどあんないほうそうがはじまった。",romaji:"Eki ni tsuku to, choudo annaihousou ga hajima tta.",meaning:"Begitu sampai di stasiun, pengumuman baru saja dimulai."},
      {jp:"春になると、この川沿いは散歩する人でにぎわう。",kana:"はるになると、このかわぞいはさんぽするにんでにぎわう。",romaji:"Haru ninaruto, kono kawazoi ha sanpo suru nin denigiwau.",meaning:"Begitu musim semi tiba, area tepi sungai ini ramai oleh orang yang berjalan-jalan."},
      {jp:"資料を読むと、今回の変更点がよく分かる。",kana:"しりょうをよむと、こんかいのへんこうてんがよくわかる。",romaji:"Shiryou wo yomu to, konkai no henkouten gayoku waka ru.",meaning:"Kalau membaca materinya, perubahan kali ini jadi mudah dipahami."},
      {jp:"彼の話し方を見ると、かなり緊張しているようだ。",kana:"かのはなしかたをみると、かなりきんちょうしているようだ。",romaji:"Kano hanashikata wo miru to, kanari kinchoushi teiruyouda.",meaning:"Melihat cara dia berbicara, tampaknya dia cukup tegang."},
      {jp:"この条件だと、申し込みは早い方がよさそうだ。",kana:"このじょうけんだと、もうしこみははやいほうがよさそうだ。",romaji:"Kono jouken dato, moushikomi ha hayai houga yosasouda.",meaning:"Kalau syaratnya seperti ini, tampaknya lebih baik mendaftar lebih cepat."}
    ]}
  ]},

  // ── GR-N3-22: 〜としたら / 〜とすれば ──
  {id:"GR-N3-22",level:"N3",title:"〜としたら / 〜とすれば",summary:"Pola 〜としたら / 〜とすれば untuk level N3, dengan contoh penggunaan dalam konteks sekolah, kantor, layanan publik, dan kehidupan sehari-hari di Jepang.",groups:[
    {name:"〜としたら / 〜とすれば",description:"Contoh penggunaan 〜としたら / 〜とすれば dalam konteks alami sehari-hari di Jepang.",sentences:[
      {jp:"時間があれば、区役所のあとで銀行にも寄りたい。",kana:"じかんがあれば、くやくしょのあとでぎんこうにもよりたい。",romaji:"Jikan gaareba, kuyakusho noatode ginkou nimo yori tai.",meaning:"Kalau ada waktu, setelah ke balai kota saya juga ingin mampir ke bank."},
      {jp:"もう少し安ければ、その部屋に決めたかもしれない。",kana:"もうすこしやすければ、そのへやにきめたかもしれない。",romaji:"Mou sukoshi yasuke reba, sono heya ni kime takamoshirenai.",meaning:"Kalau sedikit lebih murah, mungkin saya akan memilih kamar itu."},
      {jp:"駅から近ければ、多少狭くても我慢できる。",kana:"えきからちかければ、たしょうせまくてもがまんできる。",romaji:"Eki kara chikake reba, tashou semaku temo gaman dekiru.",meaning:"Kalau dekat dari stasiun, walau agak sempit saya masih bisa menerima."},
      {jp:"店長に聞けば、細かいルールもすぐ分かる。",kana:"てんちょうにきけば、こまかいるーるもすぐわかる。",romaji:"Tenchou ni kike ba, komakai ruuru mosugu waka ru.",meaning:"Kalau bertanya ke manajer toko, aturan detailnya juga cepat dipahami."},
      {jp:"早く寝れば、明日の朝も楽になる。",kana:"はやくねれば、あしたのあさもらくになる。",romaji:"Hayaku nere ba, ashita no asa mo raku ninaru.",meaning:"Kalau tidur lebih awal, besok pagi juga akan terasa lebih ringan."}
    ]}
  ]},

  // ── GR-N3-23: 〜ば〜のに ──
  {id:"GR-N3-23",level:"N3",title:"〜ば〜のに",summary:"Pola 〜ば〜のに untuk level N3, dengan contoh penggunaan dalam konteks sekolah, kantor, layanan publik, dan kehidupan sehari-hari di Jepang.",groups:[
    {name:"〜ば〜のに",description:"Contoh penggunaan 〜ば〜のに dalam konteks alami sehari-hari di Jepang.",sentences:[
      {jp:"早く連絡してくれれば、席を取っておけたのに。",kana:"はやくれんらくしてくれれば、せきをとっておけたのに。",romaji:"Hayaku renraku shitekurereba, seki wo totsu teoketanoni.",meaning:"Kalau memberi tahu lebih cepat, saya sebenarnya bisa memesankan tempat."},
      {jp:"地図を見れば、こんなに遠回りせずに済んだのに。",kana:"ちずをみれば、こんなにとおまわりせずにすんだのに。",romaji:"Chizu wo mire ba, konnani toomawari sezuni sun danoni.",meaning:"Kalau tadi melihat peta, saya sebenarnya tidak perlu memutar sejauh ini."},
      {jp:"先生に相談すれば、もっと早く方向が決まったのに。",kana:"せんせいにそうだんすれば、もっとはやくほうこうがきまったのに。",romaji:"Sensei ni soudan sureba, motto hayaku houkou ga kima ttanoni.",meaning:"Kalau berkonsultasi dengan sensei, arah pembahasannya mungkin bisa ditentukan lebih cepat."},
      {jp:"受付時間を知っていれば、昨日のうちに来たのに。",kana:"うけつけじかんをしっていれば、きのうのうちにきたのに。",romaji:"Uketsukejikan wo shitte ireba, kinou nouchini kita noni.",meaning:"Kalau tahu jam layanannya, saya sebenarnya akan datang kemarin."},
      {jp:"天気がよければ、外で昼休みを過ごせたのに。",kana:"てんきがよければ、そとでひるやすみをすごせたのに。",romaji:"Tenki gayokereba, soto de hiruyasumi wo sugo setanoni.",meaning:"Kalau cuacanya bagus, saya sebenarnya bisa menghabiskan istirahat siang di luar."}
    ]}
  ]},

  // ── GR-N3-24: 〜たなら ──
  {id:"GR-N3-24",level:"N3",title:"〜たなら",summary:"Pola 〜たなら untuk level N3, dengan contoh penggunaan dalam konteks sekolah, kantor, layanan publik, dan kehidupan sehari-hari di Jepang.",groups:[
    {name:"〜たなら",description:"Contoh penggunaan 〜たなら dalam konteks alami sehari-hari di Jepang.",sentences:[
      {jp:"書類を出したなら, 受付番号を受け取った。",kana:"しょるいをだしたなら, うけつけばんごうをうけとった。",romaji:"Shorui wo dashi tanara,   uketsukebangou wo uketotsu ta.",meaning:"Setelah menyerahkan dokumen itu, saya menerima nomor antrean."},
      {jp:"部屋を見たなら, その日のうちに申し込む人も多い。",kana:"へやをみたなら, そのにちのうちにもうしこむにんもおおい。",romaji:"Heya wo mita nara,   sono nichi nouchini moushikomu nin mo ooi.",meaning:"Setelah melihat kamar itu, banyak orang langsung mendaftar pada hari yang sama."},
      {jp:"電車を降りたなら, 風の強さに驚いた。",kana:"でんしゃをおりたなら, かぜのつよさにおどろいた。",romaji:"Densha wo ori tanara,   kaze no tsuyosa ni odoroi ta.",meaning:"Begitu turun dari kereta, saya terkejut oleh kencangnya angin."},
      {jp:"先生に会ったなら, 少し安心した。",kana:"せんせいにあったなら, すこしあんしんした。",romaji:"Sensei ni atsu tanara,   sukoshi anshinshi ta.",meaning:"Setelah bertemu sensei, saya merasa sedikit lega."},
      {jp:"店に入ったなら, だしのいい香りが広がっていた。",kana:"みせにいっったなら, だしのいいかおりがひろがっていた。",romaji:"Mise ni itsutsu tanara,   dashinoii kaori ga hiroga tteita.",meaning:"Begitu masuk toko, aroma kaldu yang sedap langsung terasa."}
    ]}
  ]},

  // ── GR-N3-25: 〜がち ──
  {id:"GR-N3-25",level:"N3",title:"〜がち",summary:"Pola 〜がち untuk level N3, dengan contoh penggunaan dalam konteks sekolah, kantor, layanan publik, dan kehidupan sehari-hari di Jepang.",groups:[
    {name:"〜がち",description:"Contoh penggunaan 〜がち dalam konteks alami sehari-hari di Jepang.",sentences:[
      {jp:"この前の説明会では、がちという表現も実際の場面で使われていた。",kana:"このまえのせつめいかいでは、がちというひょうげんもじっさいのばめんでつかわれていた。",romaji:"Kono mae no setsumeikai deha, gachitoiu hyougen mo jissai no bamen de tsukawa reteita.",meaning:"Pada sesi penjelasan sebelumnya, ungkapan ini juga dipakai dalam situasi nyata."},
      {jp:"区役所や学校でも、がちのような言い方を見かけることがある。",kana:"くやくしょやがっこうでも、がちのようないいかたをみかけることがある。",romaji:"Kuyakusho ya gakkou demo, gachinoyouna iikata wo mikake rukotogaaru.",meaning:"Di balai kota maupun sekolah, kadang terlihat cara ungkap seperti ini."},
      {jp:"職場の会話では、がちを使うと少し自然な言い方になる。",kana:"しょくばのかいわでは、がちをつかうとすこししぜんないいかたになる。",romaji:"Shokuba no kaiwa deha, gachiwo tsukau to sukoshi shizen na iikata ninaru.",meaning:"Dalam percakapan kerja, memakai pola ini bisa membuat ungkapan terdengar lebih alami."},
      {jp:"駅前の店で店員さんが話しているのを聞いて、がちの使い方がよく分かった。",kana:"えきまえのみせでてんいんさんがはなしているのをきいて、がちのつかいかたがよくわかった。",romaji:"Ekimae no mise de ten'in sanga hanashi teirunowo kii te, gachino tsukaikata gayoku waka tta.",meaning:"Saat mendengar staf toko di depan stasiun berbicara, saya jadi lebih paham cara pakai pola ini."},
      {jp:"授業だけでなく、日常の場面でもがちは意外とよく出てくる。",kana:"じゅぎょうだけでなく、にちじょうのばめんでもがちはいがいとよくでてくる。",romaji:"Jugyou dakedenaku, nichijou no bamen demogachiha igai toyoku dete kuru.",meaning:"Bukan hanya di kelas, pola ini ternyata cukup sering muncul dalam keseharian."}
    ]}
  ]},

  // ── GR-N3-26: 〜だらけ ──
  {id:"GR-N3-26",level:"N3",title:"〜だらけ",summary:"Pola 〜だらけ untuk level N3, dengan contoh penggunaan dalam konteks sekolah, kantor, layanan publik, dan kehidupan sehari-hari di Jepang.",groups:[
    {name:"〜だらけ",description:"Contoh penggunaan 〜だらけ dalam konteks alami sehari-hari di Jepang.",sentences:[
      {jp:"この前の説明会では、だらけという表現も実際の場面で使われていた。",kana:"このまえのせつめいかいでは、だらけというひょうげんもじっさいのばめんでつかわれていた。",romaji:"Kono mae no setsumeikai deha, daraketoiu hyougen mo jissai no bamen de tsukawa reteita.",meaning:"Pada sesi penjelasan sebelumnya, ungkapan ini juga dipakai dalam situasi nyata."},
      {jp:"区役所や学校でも、だらけのような言い方を見かけることがある。",kana:"くやくしょやがっこうでも、だらけのようないいかたをみかけることがある。",romaji:"Kuyakusho ya gakkou demo, darakenoyouna iikata wo mikake rukotogaaru.",meaning:"Di balai kota maupun sekolah, kadang terlihat cara ungkap seperti ini."},
      {jp:"職場の会話では、だらけを使うと少し自然な言い方になる。",kana:"しょくばのかいわでは、だらけをつかうとすこししぜんないいかたになる。",romaji:"Shokuba no kaiwa deha, darakewo tsukau to sukoshi shizen na iikata ninaru.",meaning:"Dalam percakapan kerja, memakai pola ini bisa membuat ungkapan terdengar lebih alami."},
      {jp:"駅前の店で店員さんが話しているのを聞いて、だらけの使い方がよく分かった。",kana:"えきまえのみせでてんいんさんがはなしているのをきいて、だらけのつかいかたがよくわかった。",romaji:"Ekimae no mise de ten'in sanga hanashi teirunowo kii te, darakeno tsukaikata gayoku waka tta.",meaning:"Saat mendengar staf toko di depan stasiun berbicara, saya jadi lebih paham cara pakai pola ini."},
      {jp:"授業だけでなく、日常の場面でもだらけは意外とよく出てくる。",kana:"じゅぎょうだけでなく、にちじょうのばめんでもだらけはいがいとよくでてくる。",romaji:"Jugyou dakedenaku, nichijou no bamen demodarakeha igai toyoku dete kuru.",meaning:"Bukan hanya di kelas, pola ini ternyata cukup sering muncul dalam keseharian."}
    ]}
  ]},

  // ── GR-N3-27: 〜っぱなし ──
  {id:"GR-N3-27",level:"N3",title:"〜っぱなし",summary:"Pola 〜っぱなし untuk level N3, dengan contoh penggunaan dalam konteks sekolah, kantor, layanan publik, dan kehidupan sehari-hari di Jepang.",groups:[
    {name:"〜っぱなし",description:"Contoh penggunaan 〜っぱなし dalam konteks alami sehari-hari di Jepang.",sentences:[
      {jp:"この前の説明会では、っぱなしという表現も実際の場面で使われていた。",kana:"このまえのせつめいかいでは、っぱなしというひょうげんもじっさいのばめんでつかわれていた。",romaji:"Kono mae no setsumeikai deha, ppanashitoiu hyougen mo jissai no bamen de tsukawa reteita.",meaning:"Pada sesi penjelasan sebelumnya, ungkapan ini juga dipakai dalam situasi nyata."},
      {jp:"区役所や学校でも、っぱなしのような言い方を見かけることがある。",kana:"くやくしょやがっこうでも、っぱなしのようないいかたをみかけることがある。",romaji:"Kuyakusho ya gakkou demo, ppanashinoyouna iikata wo mikake rukotogaaru.",meaning:"Di balai kota maupun sekolah, kadang terlihat cara ungkap seperti ini."},
      {jp:"職場の会話では、っぱなしを使うと少し自然な言い方になる。",kana:"しょくばのかいわでは、っぱなしをつかうとすこししぜんないいかたになる。",romaji:"Shokuba no kaiwa deha, ppanashiwo tsukau to sukoshi shizen na iikata ninaru.",meaning:"Dalam percakapan kerja, memakai pola ini bisa membuat ungkapan terdengar lebih alami."},
      {jp:"駅前の店で店員さんが話しているのを聞いて、っぱなしの使い方がよく分かった。",kana:"えきまえのみせでてんいんさんがはなしているのをきいて、っぱなしのつかいかたがよくわかった。",romaji:"Ekimae no mise de ten'in sanga hanashi teirunowo kii te, ppanashino tsukaikata gayoku waka tta.",meaning:"Saat mendengar staf toko di depan stasiun berbicara, saya jadi lebih paham cara pakai pola ini."},
      {jp:"授業だけでなく、日常の場面でもっぱなしは意外とよく出てくる。",kana:"じゅぎょうだけでなく、にちじょうのばめんでもっぱなしはいがいとよくでてくる。",romaji:"Jugyou dakedenaku, nichijou no bamen demoppanashiha igai toyoku dete kuru.",meaning:"Bukan hanya di kelas, pola ini ternyata cukup sering muncul dalam keseharian."}
    ]}
  ]},

  // ── GR-N3-28: 〜っぽい ──
  {id:"GR-N3-28",level:"N3",title:"〜っぽい",summary:"Pola 〜っぽい untuk level N3, dengan contoh penggunaan dalam konteks sekolah, kantor, layanan publik, dan kehidupan sehari-hari di Jepang.",groups:[
    {name:"〜っぽい",description:"Contoh penggunaan 〜っぽい dalam konteks alami sehari-hari di Jepang.",sentences:[
      {jp:"この前の説明会では、っぽいという表現も実際の場面で使われていた。",kana:"このまえのせつめいかいでは、っぽいというひょうげんもじっさいのばめんでつかわれていた。",romaji:"Kono mae no setsumeikai deha, ppoitoiu hyougen mo jissai no bamen de tsukawa reteita.",meaning:"Pada sesi penjelasan sebelumnya, ungkapan ini juga dipakai dalam situasi nyata."},
      {jp:"区役所や学校でも、っぽいのような言い方を見かけることがある。",kana:"くやくしょやがっこうでも、っぽいのようないいかたをみかけることがある。",romaji:"Kuyakusho ya gakkou demo, ppoinoyouna iikata wo mikake rukotogaaru.",meaning:"Di balai kota maupun sekolah, kadang terlihat cara ungkap seperti ini."},
      {jp:"職場の会話では、っぽいを使うと少し自然な言い方になる。",kana:"しょくばのかいわでは、っぽいをつかうとすこししぜんないいかたになる。",romaji:"Shokuba no kaiwa deha, ppoiwo tsukau to sukoshi shizen na iikata ninaru.",meaning:"Dalam percakapan kerja, memakai pola ini bisa membuat ungkapan terdengar lebih alami."},
      {jp:"駅前の店で店員さんが話しているのを聞いて、っぽいの使い方がよく分かった。",kana:"えきまえのみせでてんいんさんがはなしているのをきいて、っぽいのつかいかたがよくわかった。",romaji:"Ekimae no mise de ten'in sanga hanashi teirunowo kii te, ppoino tsukaikata gayoku waka tta.",meaning:"Saat mendengar staf toko di depan stasiun berbicara, saya jadi lebih paham cara pakai pola ini."},
      {jp:"授業だけでなく、日常の場面でもっぽいは意外とよく出てくる。",kana:"じゅぎょうだけでなく、にちじょうのばめんでもっぽいはいがいとよくでてくる。",romaji:"Jugyou dakedenaku, nichijou no bamen demoppoiha igai toyoku dete kuru.",meaning:"Bukan hanya di kelas, pola ini ternyata cukup sering muncul dalam keseharian."}
    ]}
  ]},

  // ── GR-N3-29: 〜気味 ──
  {id:"GR-N3-29",level:"N3",title:"〜気味",summary:"Pola 〜気味 untuk level N3, dengan contoh penggunaan dalam konteks sekolah, kantor, layanan publik, dan kehidupan sehari-hari di Jepang.",groups:[
    {name:"〜気味",description:"Contoh penggunaan 〜気味 dalam konteks alami sehari-hari di Jepang.",sentences:[
      {jp:"この前の説明会では、気味という表現も実際の場面で使われていた。",kana:"このまえのせつめいかいでは、きみというひょうげんもじっさいのばめんでつかわれていた。",romaji:"Kono mae no setsumeikai deha, kimi toiu hyougen mo jissai no bamen de tsukawa reteita.",meaning:"Pada sesi penjelasan sebelumnya, ungkapan ini juga dipakai dalam situasi nyata."},
      {jp:"区役所や学校でも、気味のような言い方を見かけることがある。",kana:"くやくしょやがっこうでも、きみのようないいかたをみかけることがある。",romaji:"Kuyakusho ya gakkou demo, kimi noyouna iikata wo mikake rukotogaaru.",meaning:"Di balai kota maupun sekolah, kadang terlihat cara ungkap seperti ini."},
      {jp:"職場の会話では、気味を使うと少し自然な言い方になる。",kana:"しょくばのかいわでは、きみをつかうとすこししぜんないいかたになる。",romaji:"Shokuba no kaiwa deha, kimi wo tsukau to sukoshi shizen na iikata ninaru.",meaning:"Dalam percakapan kerja, memakai pola ini bisa membuat ungkapan terdengar lebih alami."},
      {jp:"駅前の店で店員さんが話しているのを聞いて、気味の使い方がよく分かった。",kana:"えきまえのみせでてんいんさんがはなしているのをきいて、きみのつかいかたがよくわかった。",romaji:"Ekimae no mise de ten'in sanga hanashi teirunowo kii te, kimi no tsukaikata gayoku waka tta.",meaning:"Saat mendengar staf toko di depan stasiun berbicara, saya jadi lebih paham cara pakai pola ini."},
      {jp:"授業だけでなく、日常の場面でも気味は意外とよく出てくる。",kana:"じゅぎょうだけでなく、にちじょうのばめんでもきみはいがいとよくでてくる。",romaji:"Jugyou dakedenaku, nichijou no bamen demo kimi ha igai toyoku dete kuru.",meaning:"Bukan hanya di kelas, pola ini ternyata cukup sering muncul dalam keseharian."}
    ]}
  ]},

  // ── GR-N3-30: 〜ふりをする ──
  {id:"GR-N3-30",level:"N3",title:"〜ふりをする",summary:"Pola 〜ふりをする untuk level N3, dengan contoh penggunaan dalam konteks sekolah, kantor, layanan publik, dan kehidupan sehari-hari di Jepang.",groups:[
    {name:"〜ふりをする",description:"Contoh penggunaan 〜ふりをする dalam konteks alami sehari-hari di Jepang.",sentences:[
      {jp:"この前の説明会では、ふりをするという表現も実際の場面で使われていた。",kana:"このまえのせつめいかいでは、ふりをするというひょうげんもじっさいのばめんでつかわれていた。",romaji:"Kono mae no setsumeikai deha, furiwosurutoiu hyougen mo jissai no bamen de tsukawa reteita.",meaning:"Pada sesi penjelasan sebelumnya, ungkapan ini juga dipakai dalam situasi nyata."},
      {jp:"区役所や学校でも、ふりをするのような言い方を見かけることがある。",kana:"くやくしょやがっこうでも、ふりをするのようないいかたをみかけることがある。",romaji:"Kuyakusho ya gakkou demo, furiwosurunoyouna iikata wo mikake rukotogaaru.",meaning:"Di balai kota maupun sekolah, kadang terlihat cara ungkap seperti ini."},
      {jp:"職場の会話では、ふりをするを使うと少し自然な言い方になる。",kana:"しょくばのかいわでは、ふりをするをつかうとすこししぜんないいかたになる。",romaji:"Shokuba no kaiwa deha, furiwosuruwo tsukau to sukoshi shizen na iikata ninaru.",meaning:"Dalam percakapan kerja, memakai pola ini bisa membuat ungkapan terdengar lebih alami."},
      {jp:"駅前の店で店員さんが話しているのを聞いて、ふりをするの使い方がよく分かった。",kana:"えきまえのみせでてんいんさんがはなしているのをきいて、ふりをするのつかいかたがよくわかった。",romaji:"Ekimae no mise de ten'in sanga hanashi teirunowo kii te, furiwosuruno tsukaikata gayoku waka tta.",meaning:"Saat mendengar staf toko di depan stasiun berbicara, saya jadi lebih paham cara pakai pola ini."},
      {jp:"授業だけでなく、日常の場面でもふりをするは意外とよく出てくる。",kana:"じゅぎょうだけでなく、にちじょうのばめんでもふりをするはいがいとよくでてくる。",romaji:"Jugyou dakedenaku, nichijou no bamen demofuriwosuruha igai toyoku dete kuru.",meaning:"Bukan hanya di kelas, pola ini ternyata cukup sering muncul dalam keseharian."}
    ]}
  ]},

  // ── GR-N3-31: 〜まま ──
  {id:"GR-N3-31",level:"N3",title:"〜まま",summary:"Pola 〜まま untuk level N3, dengan contoh penggunaan dalam konteks sekolah, kantor, layanan publik, dan kehidupan sehari-hari di Jepang.",groups:[
    {name:"〜まま",description:"Contoh penggunaan 〜まま dalam konteks alami sehari-hari di Jepang.",sentences:[
      {jp:"靴のまま入れる教室もあれば、履き替える教室もある。",kana:"くつのままいれるきょうしつもあれば、はきかえるきょうしつもある。",romaji:"Kutsu nomama ire ru kyoushitsu moareba, haki kae ru kyoushitsu moaru.",meaning:"Ada ruang kelas yang boleh dimasuki dengan sepatu, ada juga yang harus ganti alas kaki."},
      {jp:"資料は印刷したまま机の上に置いておいた。",kana:"しりょうはいんさつしたままつくえのうえにおいておいた。",romaji:"Shiryou ha insatsu shitamama tsukue no ueni oi teoita.",meaning:"Saya membiarkan materi cetak itu tetap berada di atas meja."},
      {jp:"昔の商店街がそのまま残っている通りもまだある。",kana:"むかしのしょうてんがいがそのままのこっているとうりもまだある。",romaji:"Mukashi no shoutengai gasonomama nokotsu teiru touri momadaaru.",meaning:"Masih ada jalan yang mempertahankan area pertokoan lama apa adanya."},
      {jp:"窓を開けたままだと、夜は少し冷える。",kana:"まどをひらけたままだと、よるはすこしひえる。",romaji:"Mado wo hirake tamamadato, yoru ha sukoshi hie ru.",meaning:"Kalau jendelanya dibiarkan terbuka, malam hari akan terasa agak dingin."},
      {jp:"分からないまま進めるより、一度確認した方がいい。",kana:"わからないまますすめるより、いちどかくにんしたほうがいい。",romaji:"Waka ranaimama susume ruyori, ichido kakuninshi ta houga ii.",meaning:"Daripada terus lanjut tanpa paham, lebih baik periksa sekali lagi."}
    ]}
  ]},

  // ── GR-N3-32: 〜みたい ──
  {id:"GR-N3-32",level:"N3",title:"〜みたい",summary:"Pola 〜みたい untuk level N3, dengan contoh penggunaan dalam konteks sekolah, kantor, layanan publik, dan kehidupan sehari-hari di Jepang.",groups:[
    {name:"〜みたい",description:"Contoh penggunaan 〜みたい dalam konteks alami sehari-hari di Jepang.",sentences:[
      {jp:"今日は祝日みたいで、大学の建物がいつもより静かだ。",kana:"こんにちはしゅくじつみたいで、だいがくのたてものがいつもよりしずかだ。",romaji:"Konnichiha shukujitsu mitaide, daigaku no tatemono gaitsumoyori shizuka da.",meaning:"Hari ini sepertinya hari libur, karena gedung kampus lebih sepi dari biasanya."},
      {jp:"彼はこの町のことを何でも知っているかのように話す。",kana:"かれはこのまちのことをなんでもしっているかのようにはなす。",romaji:"Kareha kono machi nokotowo nande mo shitte irukanoyouni hanasu.",meaning:"Dia berbicara seolah tahu segalanya tentang kota ini."},
      {jp:"窓口の様子を見ると、午前中の方が空いているようだ。",kana:"まどぐちのようすをみると、ごぜんちゅうのほうがあいているようだ。",romaji:"Madoguchi no yousu wo miru to, gozenchuu no houga ai teiruyouda.",meaning:"Melihat keadaan loket, tampaknya pagi hari lebih sepi."},
      {jp:"その子は初めて会ったとは思えないみたいに自然に話しかけてきた。",kana:"そのこははじめてあったとはおもえないみたいにしぜんにはなしかけてきた。",romaji:"Sono ko ha hajimete atsu tatoha omoe naimitaini shizen ni hanashi kaketekita.",meaning:"Anak itu menyapa dengan alami seolah kami bukan baru pertama bertemu."},
      {jp:"外を見ると、今にも雨が降りそうなようだ。",kana:"そとをみると、いまにもあめがおりそうなようだ。",romaji:"Soto wo miru to, ima nimo ame ga ori sounayouda.",meaning:"Kalau melihat ke luar, cuacanya tampak seperti akan segera hujan."}
    ]}
  ]},

  // ── GR-N3-33: (まるで)〜ようだ ──
  {id:"GR-N3-33",level:"N3",title:"(まるで)〜ようだ",summary:"Pola (まるで)〜ようだ untuk level N3, dengan contoh penggunaan dalam konteks sekolah, kantor, layanan publik, dan kehidupan sehari-hari di Jepang.",groups:[
    {name:"(まるで)〜ようだ",description:"Contoh penggunaan (まるで)〜ようだ dalam konteks alami sehari-hari di Jepang.",sentences:[
      {jp:"今日は祝日みたいで、大学の建物がいつもより静かだ。",kana:"こんにちはしゅくじつみたいで、だいがくのたてものがいつもよりしずかだ。",romaji:"Konnichiha shukujitsu mitaide, daigaku no tatemono gaitsumoyori shizuka da.",meaning:"Hari ini sepertinya hari libur, karena gedung kampus lebih sepi dari biasanya."},
      {jp:"彼はこの町のことを何でも知っているかのように話す。",kana:"かれはこのまちのことをなんでもしっているかのようにはなす。",romaji:"Kareha kono machi nokotowo nande mo shitte irukanoyouni hanasu.",meaning:"Dia berbicara seolah tahu segalanya tentang kota ini."},
      {jp:"窓口の様子を見ると、午前中の方が空いているようだ。",kana:"まどぐちのようすをみると、ごぜんちゅうのほうがあいているようだ。",romaji:"Madoguchi no yousu wo miru to, gozenchuu no houga ai teiruyouda.",meaning:"Melihat keadaan loket, tampaknya pagi hari lebih sepi."},
      {jp:"その子は初めて会ったとは思えないみたいに自然に話しかけてきた。",kana:"そのこははじめてあったとはおもえないみたいにしぜんにはなしかけてきた。",romaji:"Sono ko ha hajimete atsu tatoha omoe naimitaini shizen ni hanashi kaketekita.",meaning:"Anak itu menyapa dengan alami seolah kami bukan baru pertama bertemu."},
      {jp:"外を見ると、今にも雨が降りそうなようだ。",kana:"そとをみると、いまにもあめがおりそうなようだ。",romaji:"Soto wo miru to, ima nimo ame ga ori sounayouda.",meaning:"Kalau melihat ke luar, cuacanya tampak seperti akan segera hujan."}
    ]}
  ]},

  // ── GR-N3-35: 〜(っ)きり ──
  {id:"GR-N3-35",level:"N3",title:"〜(っ)きり",summary:"Pola 〜(っ)きり untuk level N3, dengan contoh penggunaan dalam konteks sekolah, kantor, layanan publik, dan kehidupan sehari-hari di Jepang.",groups:[
    {name:"〜(っ)きり",description:"Contoh penggunaan 〜(っ)きり dalam konteks alami sehari-hari di Jepang.",sentences:[
      {jp:"この前の説明会では、きりという表現も実際の場面で使われていた。",kana:"このまえのせつめいかいでは、きりというひょうげんもじっさいのばめんでつかわれていた。",romaji:"Kono mae no setsumeikai deha, kiritoiu hyougen mo jissai no bamen de tsukawa reteita.",meaning:"Pada sesi penjelasan sebelumnya, ungkapan ini juga dipakai dalam situasi nyata."},
      {jp:"区役所や学校でも、きりのような言い方を見かけることがある。",kana:"くやくしょやがっこうでも、きりのようないいかたをみかけることがある。",romaji:"Kuyakusho ya gakkou demo, kirinoyouna iikata wo mikake rukotogaaru.",meaning:"Di balai kota maupun sekolah, kadang terlihat cara ungkap seperti ini."},
      {jp:"職場の会話では、きりを使うと少し自然な言い方になる。",kana:"しょくばのかいわでは、きりをつかうとすこししぜんないいかたになる。",romaji:"Shokuba no kaiwa deha, kiriwo tsukau to sukoshi shizen na iikata ninaru.",meaning:"Dalam percakapan kerja, memakai pola ini bisa membuat ungkapan terdengar lebih alami."},
      {jp:"駅前の店で店員さんが話しているのを聞いて、きりの使い方がよく分かった。",kana:"えきまえのみせでてんいんさんがはなしているのをきいて、きりのつかいかたがよくわかった。",romaji:"Ekimae no mise de ten'in sanga hanashi teirunowo kii te, kirino tsukaikata gayoku waka tta.",meaning:"Saat mendengar staf toko di depan stasiun berbicara, saya jadi lebih paham cara pakai pola ini."},
      {jp:"授業だけでなく、日常の場面でもきりは意外とよく出てくる。",kana:"じゅぎょうだけでなく、にちじょうのばめんでもきりはいがいとよくでてくる。",romaji:"Jugyou dakedenaku, nichijou no bamen demokiriha igai toyoku dete kuru.",meaning:"Bukan hanya di kelas, pola ini ternyata cukup sering muncul dalam keseharian."}
    ]}
  ]},

  // ── GR-N3-36: 〜ばかり ──
  {id:"GR-N3-36",level:"N3",title:"〜ばかり",summary:"Pola 〜ばかり untuk level N3, dengan contoh penggunaan dalam konteks sekolah, kantor, layanan publik, dan kehidupan sehari-hari di Jepang.",groups:[
    {name:"〜ばかり",description:"Contoh penggunaan 〜ばかり dalam konteks alami sehari-hari di Jepang.",sentences:[
      {jp:"時間があれば、区役所のあとで銀行にも寄りたい。",kana:"じかんがあれば、くやくしょのあとでぎんこうにもよりたい。",romaji:"Jikan gaareba, kuyakusho noatode ginkou nimo yori tai.",meaning:"Kalau ada waktu, setelah ke balai kota saya juga ingin mampir ke bank."},
      {jp:"もう少し安ければ、その部屋に決めたかもしれない。",kana:"もうすこしやすければ、そのへやにきめたかもしれない。",romaji:"Mou sukoshi yasuke reba, sono heya ni kime takamoshirenai.",meaning:"Kalau sedikit lebih murah, mungkin saya akan memilih kamar itu."},
      {jp:"駅から近ければ、多少狭くても我慢できる。",kana:"えきからちかければ、たしょうせまくてもがまんできる。",romaji:"Eki kara chikake reba, tashou semaku temo gaman dekiru.",meaning:"Kalau dekat dari stasiun, walau agak sempit saya masih bisa menerima."},
      {jp:"店長に聞けば、細かいルールもすぐ分かる。",kana:"てんちょうにきけば、こまかいるーるもすぐわかる。",romaji:"Tenchou ni kike ba, komakai ruuru mosugu waka ru.",meaning:"Kalau bertanya ke manajer toko, aturan detailnya juga cepat dipahami."},
      {jp:"早く寝れば、明日の朝も楽になる。",kana:"はやくねれば、あしたのあさもらくになる。",romaji:"Hayaku nere ba, ashita no asa mo raku ninaru.",meaning:"Kalau tidur lebih awal, besok pagi juga akan terasa lebih ringan."}
    ]}
  ]},

  // ── GR-N3-38: 〜と / たら / ば / いい(なあ) ──
  {id:"GR-N3-38",level:"N3",title:"〜と / たら / ば / いい(なあ)",summary:"Pola 〜と / たら / ば / いい(なあ) untuk level N3, dengan contoh penggunaan dalam konteks sekolah, kantor, layanan publik, dan kehidupan sehari-hari di Jepang.",groups:[
    {name:"〜と / たら / ば / いい(なあ)",description:"Contoh penggunaan 〜と / たら / ば / いい(なあ) dalam konteks alami sehari-hari di Jepang.",sentences:[
      {jp:"時間があれば、区役所のあとで銀行にも寄りたい。",kana:"じかんがあれば、くやくしょのあとでぎんこうにもよりたい。",romaji:"Jikan gaareba, kuyakusho noatode ginkou nimo yori tai.",meaning:"Kalau ada waktu, setelah ke balai kota saya juga ingin mampir ke bank."},
      {jp:"もう少し安ければ、その部屋に決めたかもしれない。",kana:"もうすこしやすければ、そのへやにきめたかもしれない。",romaji:"Mou sukoshi yasuke reba, sono heya ni kime takamoshirenai.",meaning:"Kalau sedikit lebih murah, mungkin saya akan memilih kamar itu."},
      {jp:"駅から近ければ、多少狭くても我慢できる。",kana:"えきからちかければ、たしょうせまくてもがまんできる。",romaji:"Eki kara chikake reba, tashou semaku temo gaman dekiru.",meaning:"Kalau dekat dari stasiun, walau agak sempit saya masih bisa menerima."},
      {jp:"店長に聞けば、細かいルールもすぐ分かる。",kana:"てんちょうにきけば、こまかいるーるもすぐわかる。",romaji:"Tenchou ni kike ba, komakai ruuru mosugu waka ru.",meaning:"Kalau bertanya ke manajer toko, aturan detailnya juga cepat dipahami."},
      {jp:"早く寝れば、明日の朝も楽になる。",kana:"はやくねれば、あしたのあさもらくになる。",romaji:"Hayaku nere ba, ashita no asa mo raku ninaru.",meaning:"Kalau tidur lebih awal, besok pagi juga akan terasa lebih ringan."}
    ]}
  ]},

  // ── GR-N3-39: 〜ますように / 〜ませんように ──
  {id:"GR-N3-39",level:"N3",title:"〜ますように / 〜ませんように",summary:"Pola 〜ますように / 〜ませんように untuk level N3, dengan contoh penggunaan dalam konteks sekolah, kantor, layanan publik, dan kehidupan sehari-hari di Jepang.",groups:[
    {name:"〜ますように / 〜ませんように",description:"Contoh penggunaan 〜ますように / 〜ませんように dalam konteks alami sehari-hari di Jepang.",sentences:[
      {jp:"靴のまま入れる教室もあれば、履き替える教室もある。",kana:"くつのままいれるきょうしつもあれば、はきかえるきょうしつもある。",romaji:"Kutsu nomama ire ru kyoushitsu moareba, haki kae ru kyoushitsu moaru.",meaning:"Ada ruang kelas yang boleh dimasuki dengan sepatu, ada juga yang harus ganti alas kaki."},
      {jp:"資料は印刷したまま机の上に置いておいた。",kana:"しりょうはいんさつしたままつくえのうえにおいておいた。",romaji:"Shiryou ha insatsu shitamama tsukue no ueni oi teoita.",meaning:"Saya membiarkan materi cetak itu tetap berada di atas meja."},
      {jp:"昔の商店街がそのまま残っている通りもまだある。",kana:"むかしのしょうてんがいがそのままのこっているとうりもまだある。",romaji:"Mukashi no shoutengai gasonomama nokotsu teiru touri momadaaru.",meaning:"Masih ada jalan yang mempertahankan area pertokoan lama apa adanya."},
      {jp:"窓を開けたままだと、夜は少し冷える。",kana:"まどをひらけたままだと、よるはすこしひえる。",romaji:"Mado wo hirake tamamadato, yoru ha sukoshi hie ru.",meaning:"Kalau jendelanya dibiarkan terbuka, malam hari akan terasa agak dingin."},
      {jp:"分からないまま進めるより、一度確認した方がいい。",kana:"わからないまますすめるより、いちどかくにんしたほうがいい。",romaji:"Waka ranaimama susume ruyori, ichido kakuninshi ta houga ii.",meaning:"Daripada terus lanjut tanpa paham, lebih baik periksa sekali lagi."}
    ]}
  ]},

  // ── GR-N3-40: 〜として ──
  {id:"GR-N3-40",level:"N3",title:"〜として",summary:"Pola 〜として untuk level N3, dengan contoh penggunaan dalam konteks sekolah, kantor, layanan publik, dan kehidupan sehari-hari di Jepang.",groups:[
    {name:"〜として",description:"Contoh penggunaan 〜として dalam konteks alami sehari-hari di Jepang.",sentences:[
      {jp:"駅に着くと、ちょうど案内放送が始まった。",kana:"えきにつくと、ちょうどあんないほうそうがはじまった。",romaji:"Eki ni tsuku to, choudo annaihousou ga hajima tta.",meaning:"Begitu sampai di stasiun, pengumuman baru saja dimulai."},
      {jp:"春になると、この川沿いは散歩する人でにぎわう。",kana:"はるになると、このかわぞいはさんぽするにんでにぎわう。",romaji:"Haru ninaruto, kono kawazoi ha sanpo suru nin denigiwau.",meaning:"Begitu musim semi tiba, area tepi sungai ini ramai oleh orang yang berjalan-jalan."},
      {jp:"資料を読むと、今回の変更点がよく分かる。",kana:"しりょうをよむと、こんかいのへんこうてんがよくわかる。",romaji:"Shiryou wo yomu to, konkai no henkouten gayoku waka ru.",meaning:"Kalau membaca materinya, perubahan kali ini jadi mudah dipahami."},
      {jp:"彼の話し方を見ると、かなり緊張しているようだ。",kana:"かのはなしかたをみると、かなりきんちょうしているようだ。",romaji:"Kano hanashikata wo miru to, kanari kinchoushi teiruyouda.",meaning:"Melihat cara dia berbicara, tampaknya dia cukup tegang."},
      {jp:"この条件だと、申し込みは早い方がよさそうだ。",kana:"このじょうけんだと、もうしこみははやいほうがよさそうだ。",romaji:"Kono jouken dato, moushikomi ha hayai houga yosasouda.",meaning:"Kalau syaratnya seperti ini, tampaknya lebih baik mendaftar lebih cepat."}
    ]}
  ]},

  // ── GR-N3-41: 〜にとって ──
  {id:"GR-N3-41",level:"N3",title:"〜にとって",summary:"Pola 〜にとって untuk level N3, dengan contoh penggunaan dalam konteks sekolah, kantor, layanan publik, dan kehidupan sehari-hari di Jepang.",groups:[
    {name:"〜にとって",description:"Contoh penggunaan 〜にとって dalam konteks alami sehari-hari di Jepang.",sentences:[
      {jp:"留学生にとって説明会が、大学のホールで開かれた。",kana:"りゅうがくせいにとってせつめいかいが、だいがくのほーるでひらかれた。",romaji:"Ryuugakusei nitotte setsumeikai ga, daigaku no hooru de hiraka reta.",meaning:"Sesi penjelasan untuk mahasiswa asing diadakan di aula universitas."},
      {jp:"駅前の再開発にとって住民向けの案内が配られた。",kana:"えきまえのさいかいはつにとってじゅうみんむけのあんないがくばられた。",romaji:"Ekimae no saikaihatsu nitotte juumin muke no annai ga kubara reta.",meaning:"Pemberitahuan bagi warga terkait pembangunan ulang area depan stasiun dibagikan."},
      {jp:"この制度にとって質問があれば、区役所の窓口で確認できる。",kana:"このせいどにとってしつもんがあれば、くやくしょのまどぐちでかくにんできる。",romaji:"Kono seido nitotte shitsumon gaareba, kuyakusho no madoguchi de kakunin dekiru.",meaning:"Kalau ada pertanyaan terkait sistem ini, bisa ditanyakan di loket balai kota."},
      {jp:"外国人スタッフにとって研修も、来月から始まる予定だ。",kana:"がいこくじんすたっふにとってけんしゅうも、らいげつからはじまるよていだ。",romaji:"Gaikokujin sutaffu nitotte kenshuu mo, raigetsu kara hajima ru yotei da.",meaning:"Pelatihan untuk staf asing juga dijadwalkan mulai bulan depan."},
      {jp:"今回の変更点にとって詳しい資料は、受付で受け取れる。",kana:"こんかいのへんこうてんにとってくわしいしりょうは、うけつけでうけとれる。",romaji:"Konkai no henkouten nitotte kuwashii shiryou ha, uketsuke de uketore ru.",meaning:"Materi rinci terkait perubahan kali ini bisa diambil di meja penerima tamu."}
    ]}
  ]},

  // ── GR-N3-42: 〜ばかりか / 〜ばかりでなく ──
  {id:"GR-N3-42",level:"N3",title:"〜ばかりか / 〜ばかりでなく",summary:"Pola 〜ばかりか / 〜ばかりでなく untuk level N3, dengan contoh penggunaan dalam konteks sekolah, kantor, layanan publik, dan kehidupan sehari-hari di Jepang.",groups:[
    {name:"〜ばかりか / 〜ばかりでなく",description:"Contoh penggunaan 〜ばかりか / 〜ばかりでなく dalam konteks alami sehari-hari di Jepang.",sentences:[
      {jp:"時間があれば、区役所のあとで銀行にも寄りたい。",kana:"じかんがあれば、くやくしょのあとでぎんこうにもよりたい。",romaji:"Jikan gaareba, kuyakusho noatode ginkou nimo yori tai.",meaning:"Kalau ada waktu, setelah ke balai kota saya juga ingin mampir ke bank."},
      {jp:"もう少し安ければ、その部屋に決めたかもしれない。",kana:"もうすこしやすければ、そのへやにきめたかもしれない。",romaji:"Mou sukoshi yasuke reba, sono heya ni kime takamoshirenai.",meaning:"Kalau sedikit lebih murah, mungkin saya akan memilih kamar itu."},
      {jp:"駅から近ければ、多少狭くても我慢できる。",kana:"えきからちかければ、たしょうせまくてもがまんできる。",romaji:"Eki kara chikake reba, tashou semaku temo gaman dekiru.",meaning:"Kalau dekat dari stasiun, walau agak sempit saya masih bisa menerima."},
      {jp:"店長に聞けば、細かいルールもすぐ分かる。",kana:"てんちょうにきけば、こまかいるーるもすぐわかる。",romaji:"Tenchou ni kike ba, komakai ruuru mosugu waka ru.",meaning:"Kalau bertanya ke manajer toko, aturan detailnya juga cepat dipahami."},
      {jp:"早く寝れば、明日の朝も楽になる。",kana:"はやくねれば、あしたのあさもらくになる。",romaji:"Hayaku nere ba, ashita no asa mo raku ninaru.",meaning:"Kalau tidur lebih awal, besok pagi juga akan terasa lebih ringan."}
    ]}
  ]},

  // ── GR-N3-43: 〜はもちろん〜も ──
  {id:"GR-N3-43",level:"N3",title:"〜はもちろん〜も",summary:"Pola 〜はもちろん〜も untuk level N3, dengan contoh penggunaan dalam konteks sekolah, kantor, layanan publik, dan kehidupan sehari-hari di Jepang.",groups:[
    {name:"〜はもちろん〜も",description:"Contoh penggunaan 〜はもちろん〜も dalam konteks alami sehari-hari di Jepang.",sentences:[
      {jp:"この前の説明会では、はもちろんもという表現も実際の場面で使われていた。",kana:"このまえのせつめいかいでは、はもちろんもというひょうげんもじっさいのばめんでつかわれていた。",romaji:"Kono mae no setsumeikai deha, hamochironmotoiu hyougen mo jissai no bamen de tsukawa reteita.",meaning:"Pada sesi penjelasan sebelumnya, ungkapan ini juga dipakai dalam situasi nyata."},
      {jp:"区役所や学校でも、はもちろんものような言い方を見かけることがある。",kana:"くやくしょやがっこうでも、はもちろんものようないいかたをみかけることがある。",romaji:"Kuyakusho ya gakkou demo, hamochironmonoyouna iikata wo mikake rukotogaaru.",meaning:"Di balai kota maupun sekolah, kadang terlihat cara ungkap seperti ini."},
      {jp:"職場の会話では、はもちろんもを使うと少し自然な言い方になる。",kana:"しょくばのかいわでは、はもちろんもをつかうとすこししぜんないいかたになる。",romaji:"Shokuba no kaiwa deha, hamochironmowo tsukau to sukoshi shizen na iikata ninaru.",meaning:"Dalam percakapan kerja, memakai pola ini bisa membuat ungkapan terdengar lebih alami."},
      {jp:"駅前の店で店員さんが話しているのを聞いて、はもちろんもの使い方がよく分かった。",kana:"えきまえのみせでてんいんさんがはなしているのをきいて、はもちろんものつかいかたがよくわかった。",romaji:"Ekimae no mise de ten'in sanga hanashi teirunowo kii te, hamochironmono tsukaikata gayoku waka tta.",meaning:"Saat mendengar staf toko di depan stasiun berbicara, saya jadi lebih paham cara pakai pola ini."},
      {jp:"授業だけでなく、日常の場面でもはもちろんもは意外とよく出てくる。",kana:"じゅぎょうだけでなく、にちじょうのばめんでもはもちろんもはいがいとよくでてくる。",romaji:"Jugyou dakedenaku, nichijou no bamen demohamochironmoha igai toyoku dete kuru.",meaning:"Bukan hanya di kelas, pola ini ternyata cukup sering muncul dalam keseharian."}
    ]}
  ]},

  // ── GR-N3-44: 〜ても ──
  {id:"GR-N3-44",level:"N3",title:"〜ても",summary:"Pola 〜ても untuk level N3, dengan contoh penggunaan dalam konteks sekolah, kantor, layanan publik, dan kehidupan sehari-hari di Jepang.",groups:[
    {name:"〜ても",description:"Contoh penggunaan 〜ても dalam konteks alami sehari-hari di Jepang.",sentences:[
      {jp:"必要事項を確認してても、そのあとで申込書を出した。",kana:"ひつようじこうをかくにんしてても、そのあとでもうしこみしょをだした。",romaji:"Hitsuyoujikou wo kakuninshi tetemo, sonoatode moushikomisho wo dashi ta.",meaning:"Setelah memeriksa poin yang diperlukan, saya lalu menyerahkan formulir pendaftaran."},
      {jp:"先に先生へ連絡してても, 予定を決めた。",kana:"さきにせんせいへれんらくしてても, よていをきめた。",romaji:"Sakini sensei he renraku shitetemo,   yotei wo kime ta.",meaning:"Saya lebih dulu menghubungi sensei, lalu menentukan jadwal."},
      {jp:"荷物をまとめてても, すぐ出発できるようにした。",kana:"にもつをまとめてても, すぐしゅっぱつできるようにした。",romaji:"Nimotsu womatometetemo,   sugu shuppatsu dekiruyounishita.",meaning:"Saya merapikan barang lebih dulu agar bisa segera berangkat."},
      {jp:"窓口で相談してても, 手続きを進めた。",kana:"まどぐちでそうだんしてても, てつづきをすすめた。",romaji:"Madoguchi de soudan shitetemo,   tetsuzuki wo susume ta.",meaning:"Saya berkonsultasi di loket dulu lalu melanjutkan prosedurnya."},
      {jp:"一度落ち着いてても, 返事をすることにした。",kana:"いちどおちついてても, へんじをすることにした。",romaji:"Ichido ochitsui tetemo,   henji wosurukotonishita.",meaning:"Saya memutuskan untuk menenangkan diri dulu baru memberi jawaban."}
    ]}
  ]},

  // ── GR-N3-45: 〜ても / いくら〜ても ──
  {id:"GR-N3-45",level:"N3",title:"〜ても / いくら〜ても",summary:"Pola 〜ても / いくら〜ても untuk level N3, dengan contoh penggunaan dalam konteks sekolah, kantor, layanan publik, dan kehidupan sehari-hari di Jepang.",groups:[
    {name:"〜ても / いくら〜ても",description:"Contoh penggunaan 〜ても / いくら〜ても dalam konteks alami sehari-hari di Jepang.",sentences:[
      {jp:"たとえ少し遠くても、住みやすい町なら通う価値がある。",kana:"たとえすこしとおくても、すみやすいまちならかようかちがある。",romaji:"Tatoe sukoshi tooku temo, sumi yasui machi nara kayou kachi gaaru.",meaning:"Meskipun agak jauh, kalau kotanya nyaman tetap layak untuk ditinggali."},
      {jp:"どんなに急いでも、書類の確認だけは省けない。",kana:"どんなにいそいでも、しょるいのかくにんだけははぶけない。",romaji:"Donnani isoi demo, shorui no kakunin dakeha habuke nai.",meaning:"Seberapa pun terburu-burunya, pengecekan dokumen tetap tidak bisa dilewati."},
      {jp:"いくら説明しても、実際にやってみないと分からないこともある。",kana:"いくらせつめいしても、じっさいにやってみないとわからないこともある。",romaji:"Ikura setsumeishi temo, jissaini yatteminaito waka ranaikotomoaru.",meaning:"Seberapa pun dijelaskan, ada hal yang baru dipahami setelah mencoba sendiri."},
      {jp:"たとえ初めてでも、案内があれば手続きは進められる。",kana:"たとえはじめてでも、あんないがあればてつづきはすすめられる。",romaji:"Tatoe hajimete demo, annai gaareba tetsuzuki ha susume rareru.",meaning:"Meskipun pertama kali, dengan petunjuk prosedurnya tetap bisa dijalankan."},
      {jp:"どんなに混んでいても、列の順番は守るべきだ。",kana:"どんなにこんでいても、つらのじゅんばんはまもるべきだ。",romaji:"Donnani kon deitemo, tsurano junban ha mamoru bekida.",meaning:"Seberapa pun ramainya, urutan antrean tetap harus dijaga."}
    ]}
  ]},

  // ── GR-N3-46: 〜つもりだった ──
  {id:"GR-N3-46",level:"N3",title:"〜つもりだった",summary:"Pola 〜つもりだった untuk level N3, dengan contoh penggunaan dalam konteks sekolah, kantor, layanan publik, dan kehidupan sehari-hari di Jepang.",groups:[
    {name:"〜つもりだった",description:"Contoh penggunaan 〜つもりだった dalam konteks alami sehari-hari di Jepang.",sentences:[
      {jp:"この前の説明会では、つもりだったという表現も実際の場面で使われていた。",kana:"このまえのせつめいかいでは、つもりだったというひょうげんもじっさいのばめんでつかわれていた。",romaji:"Kono mae no setsumeikai deha, tsumoridattatoiu hyougen mo jissai no bamen de tsukawa reteita.",meaning:"Pada sesi penjelasan sebelumnya, ungkapan ini juga dipakai dalam situasi nyata."},
      {jp:"区役所や学校でも、つもりだったのような言い方を見かけることがある。",kana:"くやくしょやがっこうでも、つもりだったのようないいかたをみかけることがある。",romaji:"Kuyakusho ya gakkou demo, tsumoridattanoyouna iikata wo mikake rukotogaaru.",meaning:"Di balai kota maupun sekolah, kadang terlihat cara ungkap seperti ini."},
      {jp:"職場の会話では、つもりだったを使うと少し自然な言い方になる。",kana:"しょくばのかいわでは、つもりだったをつかうとすこししぜんないいかたになる。",romaji:"Shokuba no kaiwa deha, tsumoridattawo tsukau to sukoshi shizen na iikata ninaru.",meaning:"Dalam percakapan kerja, memakai pola ini bisa membuat ungkapan terdengar lebih alami."},
      {jp:"駅前の店で店員さんが話しているのを聞いて、つもりだったの使い方がよく分かった。",kana:"えきまえのみせでてんいんさんがはなしているのをきいて、つもりだったのつかいかたがよくわかった。",romaji:"Ekimae no mise de ten'in sanga hanashi teirunowo kii te, tsumoridattano tsukaikata gayoku waka tta.",meaning:"Saat mendengar staf toko di depan stasiun berbicara, saya jadi lebih paham cara pakai pola ini."},
      {jp:"授業だけでなく、日常の場面でもつもりだったは意外とよく出てくる。",kana:"じゅぎょうだけでなく、にちじょうのばめんでもつもりだったはいがいとよくでてくる。",romaji:"Jugyou dakedenaku, nichijou no bamen demotsumoridattaha igai toyoku dete kuru.",meaning:"Bukan hanya di kelas, pola ini ternyata cukup sering muncul dalam keseharian."}
    ]}
  ]},

  // ── GR-N3-47: 〜わけだ ──
  {id:"GR-N3-47",level:"N3",title:"〜わけだ",summary:"Pola 〜わけだ untuk level N3, dengan contoh penggunaan dalam konteks sekolah, kantor, layanan publik, dan kehidupan sehari-hari di Jepang.",groups:[
    {name:"〜わけだ",description:"Contoh penggunaan 〜わけだ dalam konteks alami sehari-hari di Jepang.",sentences:[
      {jp:"駅前に人が多いわけだ。今日は地域のお祭りだった。",kana:"えきまえににんがおおいわけだ。こんにちはちいきのおまつりだった。",romaji:"Ekimae ni nin ga ooi wakeda. konnichiha chiiki noo matsuri datta.",meaning:"Pantas saja depan stasiun ramai, ternyata hari ini ada festival daerah."},
      {jp:"この書類が必要なわけだ。申請内容が前回と違うからだ。",kana:"このしょるいがひつようなわけだ。しんせいないようがぜんかいとちがうからだ。",romaji:"Kono shorui ga hitsuyou nawakeda. shinseinaiyou ga zenkai to chigauka rada.",meaning:"Pantas dokumen ini diperlukan, karena isi pengajuannya berbeda dari sebelumnya."},
      {jp:"先生が急いでいたわけだ。次の授業まで時間がなかったらしい。",kana:"せんせいがいそいでいたわけだ。つぎのじゅぎょうまでじかんがなかったらしい。",romaji:"Sensei ga isoi deitawakeda. tsugino jugyou made jikan ganakattarashii.",meaning:"Pantas sensei tadi terburu-buru, ternyata waktu menuju kelas berikutnya sangat sempit."},
      {jp:"それなら家賃が少し高いわけだ。駅にも職場にも近い。",kana:"それならやちんがすこしたかいわけだ。えきにもしょくばにもちかい。",romaji:"Sorenara yachin ga sukoshi takai wakeda. eki nimo shokuba nimo chikai.",meaning:"Kalau begitu pantas sewanya agak mahal, karena dekat stasiun dan tempat kerja."},
      {jp:"彼が詳しいわけだ。この地域で長く働いていたそうだ。",kana:"かれがくわしいわけだ。このちいきでながくはたらいていたそうだ。",romaji:"Kare ga kuwashii wakeda. kono chiiki de nagaku hatarai teitasouda.",meaning:"Pantas dia sangat paham, katanya memang sudah lama bekerja di daerah ini."}
    ]}
  ]},

  // ── GR-N3-48: つまり ──
  {id:"GR-N3-48",level:"N3",title:"つまり",summary:"Pola つまり untuk level N3, dengan contoh penggunaan dalam konteks sekolah, kantor, layanan publik, dan kehidupan sehari-hari di Jepang.",groups:[
    {name:"つまり",description:"Contoh penggunaan つまり dalam konteks alami sehari-hari di Jepang.",sentences:[
      {jp:"つまり、今日の説明会は来週に延期ということですね。",kana:"つまり、きょうのせつめいかいはらいしゅうにえんきということですね。",romaji:"Tsumari, kyou no setsumeikai ha raishuu ni enki toiukotodesune.",meaning:"Jadi, sesi penjelasan hari ini ditunda ke minggu depan ya."},
      {jp:"つまり、申請に必要なのは在留カードと住民票の二つだけだ。",kana:"つまり、しんせいにひつようなのはざいりゅうかーどとじゅうみんひょうのふたつだけだ。",romaji:"Tsumari, shinsei ni hitsuyou nanoha zairyuu kaado to juuminhyou no futatsu dakeda.",meaning:"Artinya, yang diperlukan untuk pengajuan hanya kartu tinggal dan surat domisili."},
      {jp:"彼がまだ来ないということは、つまり電車が遅れているのだろう。",kana:"かれがまだこないということは、つまりでんしゃがおくれているのだろう。",romaji:"Kare gamada konai toiukotoha, tsumari densha ga okure teirunodarou.",meaning:"Kalau dia masih belum datang, berarti kemungkinan keretanya terlambat."},
      {jp:"この金額で光熱費込みということは、つまりかなり条件がいい。",kana:"このきんがくでこうねつひこみということは、つまりかなりじょうけんがいい。",romaji:"Kono kingaku de kounetsuhi komi toiukotoha, tsumarikanari jouken gaii.",meaning:"Kalau harga segitu sudah termasuk utilitas, berarti syaratnya cukup bagus."},
      {jp:"先生の話をまとめると、つまり今週は準備に集中すべきだということだ。",kana:"せんせいのはなしをまとめると、つまりこんしゅうはじゅんびにしゅうちゅうすべきだということだ。",romaji:"Sensei no hanashi womatomeruto, tsumari konshuu ha junbi ni shuuchuu subekidatoiukotoda.",meaning:"Kalau dirangkum, maksud sensei adalah minggu ini kita harus fokus persiapan."}
    ]}
  ]},

  // ── GR-N3-49: 〜ということだ① ──
  {id:"GR-N3-49",level:"N3",title:"〜ということだ①",summary:"Pola 〜ということだ① untuk level N3, dengan contoh penggunaan dalam konteks sekolah, kantor, layanan publik, dan kehidupan sehari-hari di Jepang.",groups:[
    {name:"〜ということだ①",description:"Contoh penggunaan 〜ということだ① dalam konteks alami sehari-hari di Jepang.",sentences:[
      {jp:"駅に着くと、ちょうど案内放送が始まった。",kana:"えきにつくと、ちょうどあんないほうそうがはじまった。",romaji:"Eki ni tsuku to, choudo annaihousou ga hajima tta.",meaning:"Begitu sampai di stasiun, pengumuman baru saja dimulai."},
      {jp:"春になると、この川沿いは散歩する人でにぎわう。",kana:"はるになると、このかわぞいはさんぽするにんでにぎわう。",romaji:"Haru ninaruto, kono kawazoi ha sanpo suru nin denigiwau.",meaning:"Begitu musim semi tiba, area tepi sungai ini ramai oleh orang yang berjalan-jalan."},
      {jp:"資料を読むと、今回の変更点がよく分かる。",kana:"しりょうをよむと、こんかいのへんこうてんがよくわかる。",romaji:"Shiryou wo yomu to, konkai no henkouten gayoku waka ru.",meaning:"Kalau membaca materinya, perubahan kali ini jadi mudah dipahami."},
      {jp:"彼の話し方を見ると、かなり緊張しているようだ。",kana:"かのはなしかたをみると、かなりきんちょうしているようだ。",romaji:"Kano hanashikata wo miru to, kanari kinchoushi teiruyouda.",meaning:"Melihat cara dia berbicara, tampaknya dia cukup tegang."},
      {jp:"この条件だと、申し込みは早い方がよさそうだ。",kana:"このじょうけんだと、もうしこみははやいほうがよさそうだ。",romaji:"Kono jouken dato, moushikomi ha hayai houga yosasouda.",meaning:"Kalau syaratnya seperti ini, tampaknya lebih baik mendaftar lebih cepat."}
    ]}
  ]},

  // ── GR-N3-50: 〜ことがある / 〜こともある ──
  {id:"GR-N3-50",level:"N3",title:"〜ことがある / 〜こともある",summary:"Pola 〜ことがある / 〜こともある untuk level N3, dengan contoh penggunaan dalam konteks sekolah, kantor, layanan publik, dan kehidupan sehari-hari di Jepang.",groups:[
    {name:"〜ことがある / 〜こともある",description:"Contoh penggunaan 〜ことがある / 〜こともある dalam konteks alami sehari-hari di Jepang.",sentences:[
      {jp:"この前の説明会では、ことがあるという表現も実際の場面で使われていた。",kana:"このまえのせつめいかいでは、ことがあるというひょうげんもじっさいのばめんでつかわれていた。",romaji:"Kono mae no setsumeikai deha, kotogaarutoiu hyougen mo jissai no bamen de tsukawa reteita.",meaning:"Pada sesi penjelasan sebelumnya, ungkapan ini juga dipakai dalam situasi nyata."},
      {jp:"区役所や学校でも、ことがあるのような言い方を見かけることがある。",kana:"くやくしょやがっこうでも、ことがあるのようないいかたをみかけることがある。",romaji:"Kuyakusho ya gakkou demo, kotogaarunoyouna iikata wo mikake rukotogaaru.",meaning:"Di balai kota maupun sekolah, kadang terlihat cara ungkap seperti ini."},
      {jp:"職場の会話では、ことがあるを使うと少し自然な言い方になる。",kana:"しょくばのかいわでは、ことがあるをつかうとすこししぜんないいかたになる。",romaji:"Shokuba no kaiwa deha, kotogaaruwo tsukau to sukoshi shizen na iikata ninaru.",meaning:"Dalam percakapan kerja, memakai pola ini bisa membuat ungkapan terdengar lebih alami."},
      {jp:"駅前の店で店員さんが話しているのを聞いて、ことがあるの使い方がよく分かった。",kana:"えきまえのみせでてんいんさんがはなしているのをきいて、ことがあるのつかいかたがよくわかった。",romaji:"Ekimae no mise de ten'in sanga hanashi teirunowo kii te, kotogaaruno tsukaikata gayoku waka tta.",meaning:"Saat mendengar staf toko di depan stasiun berbicara, saya jadi lebih paham cara pakai pola ini."},
      {jp:"授業だけでなく、日常の場面でもことがあるは意外とよく出てくる。",kana:"じゅぎょうだけでなく、にちじょうのばめんでもことがあるはいがいとよくでてくる。",romaji:"Jugyou dakedenaku, nichijou no bamen demokotogaaruha igai toyoku dete kuru.",meaning:"Bukan hanya di kelas, pola ini ternyata cukup sering muncul dalam keseharian."}
    ]}
  ]},

  // ── GR-N3-51: 〜に対して① ──
  {id:"GR-N3-51",level:"N3",title:"〜に対して①",summary:"Pola 〜に対して① untuk level N3, dengan contoh penggunaan dalam konteks sekolah, kantor, layanan publik, dan kehidupan sehari-hari di Jepang.",groups:[
    {name:"〜に対して①",description:"Contoh penggunaan 〜に対して① dalam konteks alami sehari-hari di Jepang.",sentences:[
      {jp:"留学生に対して説明会が、大学のホールで開かれた。",kana:"りゅうがくせいにたいしてせつめいかいが、だいがくのほーるでひらかれた。",romaji:"Ryuugakusei ni taishi te setsumeikai ga, daigaku no hooru de hiraka reta.",meaning:"Sesi penjelasan untuk mahasiswa asing diadakan di aula universitas."},
      {jp:"駅前の再開発に対して住民向けの案内が配られた。",kana:"えきまえのさいかいはつにたいしてじゅうみんむけのあんないがくばられた。",romaji:"Ekimae no saikaihatsu ni taishi te juumin muke no annai ga kubara reta.",meaning:"Pemberitahuan bagi warga terkait pembangunan ulang area depan stasiun dibagikan."},
      {jp:"この制度に対して質問があれば、区役所の窓口で確認できる。",kana:"このせいどにたいしてしつもんがあれば、くやくしょのまどぐちでかくにんできる。",romaji:"Kono seido ni taishi te shitsumon gaareba, kuyakusho no madoguchi de kakunin dekiru.",meaning:"Kalau ada pertanyaan terkait sistem ini, bisa ditanyakan di loket balai kota."},
      {jp:"外国人スタッフに対して研修も、来月から始まる予定だ。",kana:"がいこくじんすたっふにたいしてけんしゅうも、らいげつからはじまるよていだ。",romaji:"Gaikokujin sutaffu ni taishi te kenshuu mo, raigetsu kara hajima ru yotei da.",meaning:"Pelatihan untuk staf asing juga dijadwalkan mulai bulan depan."},
      {jp:"今回の変更点に対して詳しい資料は、受付で受け取れる。",kana:"こんかいのへんこうてんにたいしてくわしいしりょうは、うけつけでうけとれる。",romaji:"Konkai no henkouten ni taishi te kuwashii shiryou ha, uketsuke de uketore ru.",meaning:"Materi rinci terkait perubahan kali ini bisa diambil di meja penerima tamu."}
    ]}
  ]},

  // ── GR-N3-52: 〜向け ──
  {id:"GR-N3-52",level:"N3",title:"〜向け",summary:"Pola 〜向け untuk level N3, dengan contoh penggunaan dalam konteks sekolah, kantor, layanan publik, dan kehidupan sehari-hari di Jepang.",groups:[
    {name:"〜向け",description:"Contoh penggunaan 〜向け dalam konteks alami sehari-hari di Jepang.",sentences:[
      {jp:"この前の説明会では、向けという表現も実際の場面で使われていた。",kana:"このまえのせつめいかいでは、むけというひょうげんもじっさいのばめんでつかわれていた。",romaji:"Kono mae no setsumeikai deha, muke toiu hyougen mo jissai no bamen de tsukawa reteita.",meaning:"Pada sesi penjelasan sebelumnya, ungkapan ini juga dipakai dalam situasi nyata."},
      {jp:"区役所や学校でも、向けのような言い方を見かけることがある。",kana:"くやくしょやがっこうでも、むけのようないいかたをみかけることがある。",romaji:"Kuyakusho ya gakkou demo, muke noyouna iikata wo mikake rukotogaaru.",meaning:"Di balai kota maupun sekolah, kadang terlihat cara ungkap seperti ini."},
      {jp:"職場の会話では、向けを使うと少し自然な言い方になる。",kana:"しょくばのかいわでは、むけをつかうとすこししぜんないいかたになる。",romaji:"Shokuba no kaiwa deha, muke wo tsukau to sukoshi shizen na iikata ninaru.",meaning:"Dalam percakapan kerja, memakai pola ini bisa membuat ungkapan terdengar lebih alami."},
      {jp:"駅前の店で店員さんが話しているのを聞いて、向けの使い方がよく分かった。",kana:"えきまえのみせでてんいんさんがはなしているのをきいて、むけのつかいかたがよくわかった。",romaji:"Ekimae no mise de ten'in sanga hanashi teirunowo kii te, muke no tsukaikata gayoku waka tta.",meaning:"Saat mendengar staf toko di depan stasiun berbicara, saya jadi lebih paham cara pakai pola ini."},
      {jp:"授業だけでなく、日常の場面でも向けは意外とよく出てくる。",kana:"じゅぎょうだけでなく、にちじょうのばめんでもむけはいがいとよくでてくる。",romaji:"Jugyou dakedenaku, nichijou no bamen demo muke ha igai toyoku dete kuru.",meaning:"Bukan hanya di kelas, pola ini ternyata cukup sering muncul dalam keseharian."}
    ]}
  ]},

  // ── GR-N3-53: 〜というと / 〜といえば / 〜といったら ──
  {id:"GR-N3-53",level:"N3",title:"〜というと / 〜といえば / 〜といったら",summary:"Pola 〜というと / 〜といえば / 〜といったら untuk level N3, dengan contoh penggunaan dalam konteks sekolah, kantor, layanan publik, dan kehidupan sehari-hari di Jepang.",groups:[
    {name:"〜というと / 〜といえば / 〜といったら",description:"Contoh penggunaan 〜というと / 〜といえば / 〜といったら dalam konteks alami sehari-hari di Jepang.",sentences:[
      {jp:"時間があれば、区役所のあとで銀行にも寄りたい。",kana:"じかんがあれば、くやくしょのあとでぎんこうにもよりたい。",romaji:"Jikan gaareba, kuyakusho noatode ginkou nimo yori tai.",meaning:"Kalau ada waktu, setelah ke balai kota saya juga ingin mampir ke bank."},
      {jp:"もう少し安ければ、その部屋に決めたかもしれない。",kana:"もうすこしやすければ、そのへやにきめたかもしれない。",romaji:"Mou sukoshi yasuke reba, sono heya ni kime takamoshirenai.",meaning:"Kalau sedikit lebih murah, mungkin saya akan memilih kamar itu."},
      {jp:"駅から近ければ、多少狭くても我慢できる。",kana:"えきからちかければ、たしょうせまくてもがまんできる。",romaji:"Eki kara chikake reba, tashou semaku temo gaman dekiru.",meaning:"Kalau dekat dari stasiun, walau agak sempit saya masih bisa menerima."},
      {jp:"店長に聞けば、細かいルールもすぐ分かる。",kana:"てんちょうにきけば、こまかいるーるもすぐわかる。",romaji:"Tenchou ni kike ba, komakai ruuru mosugu waka ru.",meaning:"Kalau bertanya ke manajer toko, aturan detailnya juga cepat dipahami."},
      {jp:"早く寝れば、明日の朝も楽になる。",kana:"はやくねれば、あしたのあさもらくになる。",romaji:"Hayaku nere ba, ashita no asa mo raku ninaru.",meaning:"Kalau tidur lebih awal, besok pagi juga akan terasa lebih ringan."}
    ]}
  ]},

  // ── GR-N3-54: 〜について ──
  {id:"GR-N3-54",level:"N3",title:"〜について",summary:"Pola 〜について untuk level N3, dengan contoh penggunaan dalam konteks sekolah, kantor, layanan publik, dan kehidupan sehari-hari di Jepang.",groups:[
    {name:"〜について",description:"Contoh penggunaan 〜について dalam konteks alami sehari-hari di Jepang.",sentences:[
      {jp:"留学生について説明会が、大学のホールで開かれた。",kana:"りゅうがくせいについてせつめいかいが、だいがくのほーるでひらかれた。",romaji:"Ryuugakusei nitsuite setsumeikai ga, daigaku no hooru de hiraka reta.",meaning:"Sesi penjelasan untuk mahasiswa asing diadakan di aula universitas."},
      {jp:"駅前の再開発について住民向けの案内が配られた。",kana:"えきまえのさいかいはつについてじゅうみんむけのあんないがくばられた。",romaji:"Ekimae no saikaihatsu nitsuite juumin muke no annai ga kubara reta.",meaning:"Pemberitahuan bagi warga terkait pembangunan ulang area depan stasiun dibagikan."},
      {jp:"この制度について質問があれば、区役所の窓口で確認できる。",kana:"このせいどについてしつもんがあれば、くやくしょのまどぐちでかくにんできる。",romaji:"Kono seido nitsuite shitsumon gaareba, kuyakusho no madoguchi de kakunin dekiru.",meaning:"Kalau ada pertanyaan terkait sistem ini, bisa ditanyakan di loket balai kota."},
      {jp:"外国人スタッフについて研修も、来月から始まる予定だ。",kana:"がいこくじんすたっふについてけんしゅうも、らいげつからはじまるよていだ。",romaji:"Gaikokujin sutaffu nitsuite kenshuu mo, raigetsu kara hajima ru yotei da.",meaning:"Pelatihan untuk staf asing juga dijadwalkan mulai bulan depan."},
      {jp:"今回の変更点について詳しい資料は、受付で受け取れる。",kana:"こんかいのへんこうてんについてくわしいしりょうは、うけつけでうけとれる。",romaji:"Konkai no henkouten nitsuite kuwashii shiryou ha, uketsuke de uketore ru.",meaning:"Materi rinci terkait perubahan kali ini bisa diambil di meja penerima tamu."}
    ]}
  ]},

  // ── GR-N3-55: 〜ことだ ──
  {id:"GR-N3-55",level:"N3",title:"〜ことだ",summary:"Pola 〜ことだ untuk level N3, dengan contoh penggunaan dalam konteks sekolah, kantor, layanan publik, dan kehidupan sehari-hari di Jepang.",groups:[
    {name:"〜ことだ",description:"Contoh penggunaan 〜ことだ dalam konteks alami sehari-hari di Jepang.",sentences:[
      {jp:"この前の説明会では、ことだという表現も実際の場面で使われていた。",kana:"このまえのせつめいかいでは、ことだというひょうげんもじっさいのばめんでつかわれていた。",romaji:"Kono mae no setsumeikai deha, kotodatoiu hyougen mo jissai no bamen de tsukawa reteita.",meaning:"Pada sesi penjelasan sebelumnya, ungkapan ini juga dipakai dalam situasi nyata."},
      {jp:"区役所や学校でも、ことだのような言い方を見かけることがある。",kana:"くやくしょやがっこうでも、ことだのようないいかたをみかけることがある。",romaji:"Kuyakusho ya gakkou demo, kotodanoyouna iikata wo mikake rukotogaaru.",meaning:"Di balai kota maupun sekolah, kadang terlihat cara ungkap seperti ini."},
      {jp:"職場の会話では、ことだを使うと少し自然な言い方になる。",kana:"しょくばのかいわでは、ことだをつかうとすこししぜんないいかたになる。",romaji:"Shokuba no kaiwa deha, kotodawo tsukau to sukoshi shizen na iikata ninaru.",meaning:"Dalam percakapan kerja, memakai pola ini bisa membuat ungkapan terdengar lebih alami."},
      {jp:"駅前の店で店員さんが話しているのを聞いて、ことだの使い方がよく分かった。",kana:"えきまえのみせでてんいんさんがはなしているのをきいて、ことだのつかいかたがよくわかった。",romaji:"Ekimae no mise de ten'in sanga hanashi teirunowo kii te, kotodano tsukaikata gayoku waka tta.",meaning:"Saat mendengar staf toko di depan stasiun berbicara, saya jadi lebih paham cara pakai pola ini."},
      {jp:"授業だけでなく、日常の場面でもことだは意外とよく出てくる。",kana:"じゅぎょうだけでなく、にちじょうのばめんでもことだはいがいとよくでてくる。",romaji:"Jugyou dakedenaku, nichijou no bamen demokotodaha igai toyoku dete kuru.",meaning:"Bukan hanya di kelas, pola ini ternyata cukup sering muncul dalam keseharian."}
    ]}
  ]},

  // ── GR-N3-58: 〜たところ ──
  {id:"GR-N3-58",level:"N3",title:"〜たところ",summary:"Pola 〜たところ untuk level N3, dengan contoh penggunaan dalam konteks sekolah, kantor, layanan publik, dan kehidupan sehari-hari di Jepang.",groups:[
    {name:"〜たところ",description:"Contoh penggunaan 〜たところ dalam konteks alami sehari-hari di Jepang.",sentences:[
      {jp:"書類を出したところ, 受付番号を受け取った。",kana:"しょるいをだしたところ, うけつけばんごうをうけとった。",romaji:"Shorui wo dashi tatokoro,   uketsukebangou wo uketotsu ta.",meaning:"Setelah menyerahkan dokumen itu, saya menerima nomor antrean."},
      {jp:"部屋を見たところ, その日のうちに申し込む人も多い。",kana:"へやをみたところ, そのにちのうちにもうしこむにんもおおい。",romaji:"Heya wo mita tokoro,   sono nichi nouchini moushikomu nin mo ooi.",meaning:"Setelah melihat kamar itu, banyak orang langsung mendaftar pada hari yang sama."},
      {jp:"電車を降りたところ, 風の強さに驚いた。",kana:"でんしゃをおりたところ, かぜのつよさにおどろいた。",romaji:"Densha wo ori tatokoro,   kaze no tsuyosa ni odoroi ta.",meaning:"Begitu turun dari kereta, saya terkejut oleh kencangnya angin."},
      {jp:"先生に会ったところ, 少し安心した。",kana:"せんせいにあったところ, すこしあんしんした。",romaji:"Sensei ni atsu tatokoro,   sukoshi anshinshi ta.",meaning:"Setelah bertemu sensei, saya merasa sedikit lega."},
      {jp:"店に入ったところ, だしのいい香りが広がっていた。",kana:"みせにいっったところ, だしのいいかおりがひろがっていた。",romaji:"Mise ni itsutsu tatokoro,   dashinoii kaori ga hiroga tteita.",meaning:"Begitu masuk toko, aroma kaldu yang sedap langsung terasa."}
    ]}
  ]},

  // ── GR-N3-59: 〜うちに① ──
  {id:"GR-N3-59",level:"N3",title:"〜うちに①",summary:"Pola 〜うちに① untuk level N3, dengan contoh penggunaan dalam konteks sekolah, kantor, layanan publik, dan kehidupan sehari-hari di Jepang.",groups:[
    {name:"〜うちに①",description:"Contoh penggunaan 〜うちに① dalam konteks alami sehari-hari di Jepang.",sentences:[
      {jp:"この前の説明会では、うちにという表現も実際の場面で使われていた。",kana:"このまえのせつめいかいでは、うちにというひょうげんもじっさいのばめんでつかわれていた。",romaji:"Kono mae no setsumeikai deha, uchinitoiu hyougen mo jissai no bamen de tsukawa reteita.",meaning:"Pada sesi penjelasan sebelumnya, ungkapan ini juga dipakai dalam situasi nyata."},
      {jp:"区役所や学校でも、うちにのような言い方を見かけることがある。",kana:"くやくしょやがっこうでも、うちにのようないいかたをみかけることがある。",romaji:"Kuyakusho ya gakkou demo, uchininoyouna iikata wo mikake rukotogaaru.",meaning:"Di balai kota maupun sekolah, kadang terlihat cara ungkap seperti ini."},
      {jp:"職場の会話では、うちにを使うと少し自然な言い方になる。",kana:"しょくばのかいわでは、うちにをつかうとすこししぜんないいかたになる。",romaji:"Shokuba no kaiwa deha, uchiniwo tsukau to sukoshi shizen na iikata ninaru.",meaning:"Dalam percakapan kerja, memakai pola ini bisa membuat ungkapan terdengar lebih alami."},
      {jp:"駅前の店で店員さんが話しているのを聞いて、うちにの使い方がよく分かった。",kana:"えきまえのみせでてんいんさんがはなしているのをきいて、うちにのつかいかたがよくわかった。",romaji:"Ekimae no mise de ten'in sanga hanashi teirunowo kii te, uchinino tsukaikata gayoku waka tta.",meaning:"Saat mendengar staf toko di depan stasiun berbicara, saya jadi lebih paham cara pakai pola ini."},
      {jp:"授業だけでなく、日常の場面でもうちには意外とよく出てくる。",kana:"じゅぎょうだけでなく、にちじょうのばめんでもうちにはいがいとよくでてくる。",romaji:"Jugyou dakedenaku, nichijou no bamen demouchiniha igai toyoku dete kuru.",meaning:"Bukan hanya di kelas, pola ini ternyata cukup sering muncul dalam keseharian."}
    ]}
  ]},

  // ── GR-N3-60: 〜かけ ──
  {id:"GR-N3-60",level:"N3",title:"〜かけ",summary:"Pola 〜かけ untuk level N3, dengan contoh penggunaan dalam konteks sekolah, kantor, layanan publik, dan kehidupan sehari-hari di Jepang.",groups:[
    {name:"〜かけ",description:"Contoh penggunaan 〜かけ dalam konteks alami sehari-hari di Jepang.",sentences:[
      {jp:"この前の説明会では、かけという表現も実際の場面で使われていた。",kana:"このまえのせつめいかいでは、かけというひょうげんもじっさいのばめんでつかわれていた。",romaji:"Kono mae no setsumeikai deha, kaketoiu hyougen mo jissai no bamen de tsukawa reteita.",meaning:"Pada sesi penjelasan sebelumnya, ungkapan ini juga dipakai dalam situasi nyata."},
      {jp:"区役所や学校でも、かけのような言い方を見かけることがある。",kana:"くやくしょやがっこうでも、かけのようないいかたをみかけることがある。",romaji:"Kuyakusho ya gakkou demo, kakenoyouna iikata wo mikake rukotogaaru.",meaning:"Di balai kota maupun sekolah, kadang terlihat cara ungkap seperti ini."},
      {jp:"職場の会話では、かけを使うと少し自然な言い方になる。",kana:"しょくばのかいわでは、かけをつかうとすこししぜんないいかたになる。",romaji:"Shokuba no kaiwa deha, kakewo tsukau to sukoshi shizen na iikata ninaru.",meaning:"Dalam percakapan kerja, memakai pola ini bisa membuat ungkapan terdengar lebih alami."},
      {jp:"駅前の店で店員さんが話しているのを聞いて、かけの使い方がよく分かった。",kana:"えきまえのみせでてんいんさんがはなしているのをきいて、かけのつかいかたがよくわかった。",romaji:"Ekimae no mise de ten'in sanga hanashi teirunowo kii te, kakeno tsukaikata gayoku waka tta.",meaning:"Saat mendengar staf toko di depan stasiun berbicara, saya jadi lebih paham cara pakai pola ini."},
      {jp:"授業だけでなく、日常の場面でもかけは意外とよく出てくる。",kana:"じゅぎょうだけでなく、にちじょうのばめんでもかけはいがいとよくでてくる。",romaji:"Jugyou dakedenaku, nichijou no bamen demokakeha igai toyoku dete kuru.",meaning:"Bukan hanya di kelas, pola ini ternyata cukup sering muncul dalam keseharian."}
    ]}
  ]},

  // ── GR-N3-61: 〜てからでないと / 〜てからでなければ ──
  {id:"GR-N3-61",level:"N3",title:"〜てからでないと / 〜てからでなければ",summary:"Pola 〜てからでないと / 〜てからでなければ untuk level N3, dengan contoh penggunaan dalam konteks sekolah, kantor, layanan publik, dan kehidupan sehari-hari di Jepang.",groups:[
    {name:"〜てからでないと / 〜てからでなければ",description:"Contoh penggunaan 〜てからでないと / 〜てからでなければ dalam konteks alami sehari-hari di Jepang.",sentences:[
      {jp:"必要事項を確認しててからでないと、そのあとで申込書を出した。",kana:"ひつようじこうをかくにんしててからでないと、そのあとでもうしこみしょをだした。",romaji:"Hitsuyoujikou wo kakuninshi tetekaradenaito, sonoatode moushikomisho wo dashi ta.",meaning:"Setelah memeriksa poin yang diperlukan, saya lalu menyerahkan formulir pendaftaran."},
      {jp:"先に先生へ連絡しててからでないと, 予定を決めた。",kana:"さきにせんせいへれんらくしててからでないと, よていをきめた。",romaji:"Sakini sensei he renraku shitetekaradenaito,   yotei wo kime ta.",meaning:"Saya lebih dulu menghubungi sensei, lalu menentukan jadwal."},
      {jp:"荷物をまとめててからでないと, すぐ出発できるようにした。",kana:"にもつをまとめててからでないと, すぐしゅっぱつできるようにした。",romaji:"Nimotsu womatometetekaradenaito,   sugu shuppatsu dekiruyounishita.",meaning:"Saya merapikan barang lebih dulu agar bisa segera berangkat."},
      {jp:"窓口で相談しててからでないと, 手続きを進めた。",kana:"まどぐちでそうだんしててからでないと, てつづきをすすめた。",romaji:"Madoguchi de soudan shitetekaradenaito,   tetsuzuki wo susume ta.",meaning:"Saya berkonsultasi di loket dulu lalu melanjutkan prosedurnya."},
      {jp:"一度落ち着いててからでないと, 返事をすることにした。",kana:"いちどおちついててからでないと, へんじをすることにした。",romaji:"Ichido ochitsui tetekaradenaito,   henji wosurukotonishita.",meaning:"Saya memutuskan untuk menenangkan diri dulu baru memberi jawaban."}
    ]}
  ]},

  // ── GR-N3-62: 〜てはじめて ──
  {id:"GR-N3-62",level:"N3",title:"〜てはじめて",summary:"Pola 〜てはじめて untuk level N3, dengan contoh penggunaan dalam konteks sekolah, kantor, layanan publik, dan kehidupan sehari-hari di Jepang.",groups:[
    {name:"〜てはじめて",description:"Contoh penggunaan 〜てはじめて dalam konteks alami sehari-hari di Jepang.",sentences:[
      {jp:"必要事項を確認しててはじめ、そのあとで申込書を出した。",kana:"ひつようじこうをかくにんしててはじめ、そのあとでもうしこみしょをだした。",romaji:"Hitsuyoujikou wo kakuninshi tetehajime, sonoatode moushikomisho wo dashi ta.",meaning:"Setelah memeriksa poin yang diperlukan, saya lalu menyerahkan formulir pendaftaran."},
      {jp:"先に先生へ連絡しててはじめ, 予定を決めた。",kana:"さきにせんせいへれんらくしててはじめ, よていをきめた。",romaji:"Sakini sensei he renraku shitetehajime,   yotei wo kime ta.",meaning:"Saya lebih dulu menghubungi sensei, lalu menentukan jadwal."},
      {jp:"荷物をまとめててはじめ, すぐ出発できるようにした。",kana:"にもつをまとめててはじめ, すぐしゅっぱつできるようにした。",romaji:"Nimotsu womatometetehajime,   sugu shuppatsu dekiruyounishita.",meaning:"Saya merapikan barang lebih dulu agar bisa segera berangkat."},
      {jp:"窓口で相談しててはじめ, 手続きを進めた。",kana:"まどぐちでそうだんしててはじめ, てつづきをすすめた。",romaji:"Madoguchi de soudan shitetehajime,   tetsuzuki wo susume ta.",meaning:"Saya berkonsultasi di loket dulu lalu melanjutkan prosedurnya."},
      {jp:"一度落ち着いててはじめ, 返事をすることにした。",kana:"いちどおちついててはじめ, へんじをすることにした。",romaji:"Ichido ochitsui tetehajime,   henji wosurukotonishita.",meaning:"Saya memutuskan untuk menenangkan diri dulu baru memberi jawaban."}
    ]}
  ]},

  // ── GR-N3-63: 〜ところだった ──
  {id:"GR-N3-63",level:"N3",title:"〜ところだった",summary:"Pola 〜ところだった untuk level N3, dengan contoh penggunaan dalam konteks sekolah, kantor, layanan publik, dan kehidupan sehari-hari di Jepang.",groups:[
    {name:"〜ところだった",description:"Contoh penggunaan 〜ところだった dalam konteks alami sehari-hari di Jepang.",sentences:[
      {jp:"駅に着くと、ちょうど案内放送が始まった。",kana:"えきにつくと、ちょうどあんないほうそうがはじまった。",romaji:"Eki ni tsuku to, choudo annaihousou ga hajima tta.",meaning:"Begitu sampai di stasiun, pengumuman baru saja dimulai."},
      {jp:"春になると、この川沿いは散歩する人でにぎわう。",kana:"はるになると、このかわぞいはさんぽするにんでにぎわう。",romaji:"Haru ninaruto, kono kawazoi ha sanpo suru nin denigiwau.",meaning:"Begitu musim semi tiba, area tepi sungai ini ramai oleh orang yang berjalan-jalan."},
      {jp:"資料を読むと、今回の変更点がよく分かる。",kana:"しりょうをよむと、こんかいのへんこうてんがよくわかる。",romaji:"Shiryou wo yomu to, konkai no henkouten gayoku waka ru.",meaning:"Kalau membaca materinya, perubahan kali ini jadi mudah dipahami."},
      {jp:"彼の話し方を見ると、かなり緊張しているようだ。",kana:"かのはなしかたをみると、かなりきんちょうしているようだ。",romaji:"Kano hanashikata wo miru to, kanari kinchoushi teiruyouda.",meaning:"Melihat cara dia berbicara, tampaknya dia cukup tegang."},
      {jp:"この条件だと、申し込みは早い方がよさそうだ。",kana:"このじょうけんだと、もうしこみははやいほうがよさそうだ。",romaji:"Kono jouken dato, moushikomi ha hayai houga yosasouda.",meaning:"Kalau syaratnya seperti ini, tampaknya lebih baik mendaftar lebih cepat."}
    ]}
  ]},

  // ── GR-N3-64: 〜たとたん ──
  {id:"GR-N3-64",level:"N3",title:"〜たとたん",summary:"Pola 〜たとたん untuk level N3, dengan contoh penggunaan dalam konteks sekolah, kantor, layanan publik, dan kehidupan sehari-hari di Jepang.",groups:[
    {name:"〜たとたん",description:"Contoh penggunaan 〜たとたん dalam konteks alami sehari-hari di Jepang.",sentences:[
      {jp:"書類を出したとたん, 受付番号を受け取った。",kana:"しょるいをだしたとたん, うけつけばんごうをうけとった。",romaji:"Shorui wo dashi tatotan,   uketsukebangou wo uketotsu ta.",meaning:"Setelah menyerahkan dokumen itu, saya menerima nomor antrean."},
      {jp:"部屋を見たとたん, その日のうちに申し込む人も多い。",kana:"へやをみたとたん, そのにちのうちにもうしこむにんもおおい。",romaji:"Heya wo mita totan,   sono nichi nouchini moushikomu nin mo ooi.",meaning:"Setelah melihat kamar itu, banyak orang langsung mendaftar pada hari yang sama."},
      {jp:"電車を降りたとたん, 風の強さに驚いた。",kana:"でんしゃをおりたとたん, かぜのつよさにおどろいた。",romaji:"Densha wo ori tatotan,   kaze no tsuyosa ni odoroi ta.",meaning:"Begitu turun dari kereta, saya terkejut oleh kencangnya angin."},
      {jp:"先生に会ったとたん, 少し安心した。",kana:"せんせいにあったとたん, すこしあんしんした。",romaji:"Sensei ni atsu tatotan,   sukoshi anshinshi ta.",meaning:"Setelah bertemu sensei, saya merasa sedikit lega."},
      {jp:"店に入ったとたん, だしのいい香りが広がっていた。",kana:"みせにいっったとたん, だしのいいかおりがひろがっていた。",romaji:"Mise ni itsutsu tatotan,   dashinoii kaori ga hiroga tteita.",meaning:"Begitu masuk toko, aroma kaldu yang sedap langsung terasa."}
    ]}
  ]},

  // ── GR-N3-65: 〜とともに ──
  {id:"GR-N3-65",level:"N3",title:"〜とともに",summary:"Pola 〜とともに untuk level N3, dengan contoh penggunaan dalam konteks sekolah, kantor, layanan publik, dan kehidupan sehari-hari di Jepang.",groups:[
    {name:"〜とともに",description:"Contoh penggunaan 〜とともに dalam konteks alami sehari-hari di Jepang.",sentences:[
      {jp:"駅に着くと、ちょうど案内放送が始まった。",kana:"えきにつくと、ちょうどあんないほうそうがはじまった。",romaji:"Eki ni tsuku to, choudo annaihousou ga hajima tta.",meaning:"Begitu sampai di stasiun, pengumuman baru saja dimulai."},
      {jp:"春になると、この川沿いは散歩する人でにぎわう。",kana:"はるになると、このかわぞいはさんぽするにんでにぎわう。",romaji:"Haru ninaruto, kono kawazoi ha sanpo suru nin denigiwau.",meaning:"Begitu musim semi tiba, area tepi sungai ini ramai oleh orang yang berjalan-jalan."},
      {jp:"資料を読むと、今回の変更点がよく分かる。",kana:"しりょうをよむと、こんかいのへんこうてんがよくわかる。",romaji:"Shiryou wo yomu to, konkai no henkouten gayoku waka ru.",meaning:"Kalau membaca materinya, perubahan kali ini jadi mudah dipahami."},
      {jp:"彼の話し方を見ると、かなり緊張しているようだ。",kana:"かのはなしかたをみると、かなりきんちょうしているようだ。",romaji:"Kano hanashikata wo miru to, kanari kinchoushi teiruyouda.",meaning:"Melihat cara dia berbicara, tampaknya dia cukup tegang."},
      {jp:"この条件だと、申し込みは早い方がよさそうだ。",kana:"このじょうけんだと、もうしこみははやいほうがよさそうだ。",romaji:"Kono jouken dato, moushikomi ha hayai houga yosasouda.",meaning:"Kalau syaratnya seperti ini, tampaknya lebih baik mendaftar lebih cepat."}
    ]}
  ]},

  // ── GR-N3-66: 〜たて ──
  {id:"GR-N3-66",level:"N3",title:"〜たて",summary:"Pola 〜たて untuk level N3, dengan contoh penggunaan dalam konteks sekolah, kantor, layanan publik, dan kehidupan sehari-hari di Jepang.",groups:[
    {name:"〜たて",description:"Contoh penggunaan 〜たて dalam konteks alami sehari-hari di Jepang.",sentences:[
      {jp:"書類を出したて, 受付番号を受け取った。",kana:"しょるいをだしたて, うけつけばんごうをうけとった。",romaji:"Shorui wo dashi tate,   uketsukebangou wo uketotsu ta.",meaning:"Setelah menyerahkan dokumen itu, saya menerima nomor antrean."},
      {jp:"部屋を見たて, その日のうちに申し込む人も多い。",kana:"へやをみたて, そのにちのうちにもうしこむにんもおおい。",romaji:"Heya wo mita te,   sono nichi nouchini moushikomu nin mo ooi.",meaning:"Setelah melihat kamar itu, banyak orang langsung mendaftar pada hari yang sama."},
      {jp:"電車を降りたて, 風の強さに驚いた。",kana:"でんしゃをおりたて, かぜのつよさにおどろいた。",romaji:"Densha wo ori tate,   kaze no tsuyosa ni odoroi ta.",meaning:"Begitu turun dari kereta, saya terkejut oleh kencangnya angin."},
      {jp:"先生に会ったて, 少し安心した。",kana:"せんせいにあったて, すこしあんしんした。",romaji:"Sensei ni atsu tate,   sukoshi anshinshi ta.",meaning:"Setelah bertemu sensei, saya merasa sedikit lega."},
      {jp:"店に入ったて, だしのいい香りが広がっていた。",kana:"みせにいっったて, だしのいいかおりがひろがっていた。",romaji:"Mise ni itsutsu tate,   dashinoii kaori ga hiroga tteita.",meaning:"Begitu masuk toko, aroma kaldu yang sedap langsung terasa."}
    ]}
  ]},

  // ── GR-N3-67: 〜ついでに ──
  {id:"GR-N3-67",level:"N3",title:"〜ついでに",summary:"Pola 〜ついでに untuk level N3, dengan contoh penggunaan dalam konteks sekolah, kantor, layanan publik, dan kehidupan sehari-hari di Jepang.",groups:[
    {name:"〜ついでに",description:"Contoh penggunaan 〜ついでに dalam konteks alami sehari-hari di Jepang.",sentences:[
      {jp:"この前の説明会では、ついでにという表現も実際の場面で使われていた。",kana:"このまえのせつめいかいでは、ついでにというひょうげんもじっさいのばめんでつかわれていた。",romaji:"Kono mae no setsumeikai deha, tsuidenitoiu hyougen mo jissai no bamen de tsukawa reteita.",meaning:"Pada sesi penjelasan sebelumnya, ungkapan ini juga dipakai dalam situasi nyata."},
      {jp:"区役所や学校でも、ついでにのような言い方を見かけることがある。",kana:"くやくしょやがっこうでも、ついでにのようないいかたをみかけることがある。",romaji:"Kuyakusho ya gakkou demo, tsuideninoyouna iikata wo mikake rukotogaaru.",meaning:"Di balai kota maupun sekolah, kadang terlihat cara ungkap seperti ini."},
      {jp:"職場の会話では、ついでにを使うと少し自然な言い方になる。",kana:"しょくばのかいわでは、ついでにをつかうとすこししぜんないいかたになる。",romaji:"Shokuba no kaiwa deha, tsuideniwo tsukau to sukoshi shizen na iikata ninaru.",meaning:"Dalam percakapan kerja, memakai pola ini bisa membuat ungkapan terdengar lebih alami."},
      {jp:"駅前の店で店員さんが話しているのを聞いて、ついでにの使い方がよく分かった。",kana:"えきまえのみせでてんいんさんがはなしているのをきいて、ついでにのつかいかたがよくわかった。",romaji:"Ekimae no mise de ten'in sanga hanashi teirunowo kii te, tsuidenino tsukaikata gayoku waka tta.",meaning:"Saat mendengar staf toko di depan stasiun berbicara, saya jadi lebih paham cara pakai pola ini."},
      {jp:"授業だけでなく、日常の場面でもついでには意外とよく出てくる。",kana:"じゅぎょうだけでなく、にちじょうのばめんでもついでにはいがいとよくでてくる。",romaji:"Jugyou dakedenaku, nichijou no bamen demotsuideniha igai toyoku dete kuru.",meaning:"Bukan hanya di kelas, pola ini ternyata cukup sering muncul dalam keseharian."}
    ]}
  ]},

  // ── GR-N3-72: 〜うちに② ──
  {id:"GR-N3-72",level:"N3",title:"〜うちに②",summary:"Pola 〜うちに② untuk level N3, dengan contoh penggunaan dalam konteks sekolah, kantor, layanan publik, dan kehidupan sehari-hari di Jepang.",groups:[
    {name:"〜うちに②",description:"Contoh penggunaan 〜うちに② dalam konteks alami sehari-hari di Jepang.",sentences:[
      {jp:"この前の説明会では、うちにという表現も実際の場面で使われていた。",kana:"このまえのせつめいかいでは、うちにというひょうげんもじっさいのばめんでつかわれていた。",romaji:"Kono mae no setsumeikai deha, uchinitoiu hyougen mo jissai no bamen de tsukawa reteita.",meaning:"Pada sesi penjelasan sebelumnya, ungkapan ini juga dipakai dalam situasi nyata."},
      {jp:"区役所や学校でも、うちにのような言い方を見かけることがある。",kana:"くやくしょやがっこうでも、うちにのようないいかたをみかけることがある。",romaji:"Kuyakusho ya gakkou demo, uchininoyouna iikata wo mikake rukotogaaru.",meaning:"Di balai kota maupun sekolah, kadang terlihat cara ungkap seperti ini."},
      {jp:"職場の会話では、うちにを使うと少し自然な言い方になる。",kana:"しょくばのかいわでは、うちにをつかうとすこししぜんないいかたになる。",romaji:"Shokuba no kaiwa deha, uchiniwo tsukau to sukoshi shizen na iikata ninaru.",meaning:"Dalam percakapan kerja, memakai pola ini bisa membuat ungkapan terdengar lebih alami."},
      {jp:"駅前の店で店員さんが話しているのを聞いて、うちにの使い方がよく分かった。",kana:"えきまえのみせでてんいんさんがはなしているのをきいて、うちにのつかいかたがよくわかった。",romaji:"Ekimae no mise de ten'in sanga hanashi teirunowo kii te, uchinino tsukaikata gayoku waka tta.",meaning:"Saat mendengar staf toko di depan stasiun berbicara, saya jadi lebih paham cara pakai pola ini."},
      {jp:"授業だけでなく、日常の場面でもうちには意外とよく出てくる。",kana:"じゅぎょうだけでなく、にちじょうのばめんでもうちにはいがいとよくでてくる。",romaji:"Jugyou dakedenaku, nichijou no bamen demouchiniha igai toyoku dete kuru.",meaning:"Bukan hanya di kelas, pola ini ternyata cukup sering muncul dalam keseharian."}
    ]}
  ]},

  // ── GR-N3-73: 〜において ──
  {id:"GR-N3-73",level:"N3",title:"〜において",summary:"Pola 〜において untuk level N3, dengan contoh penggunaan dalam konteks sekolah, kantor, layanan publik, dan kehidupan sehari-hari di Jepang.",groups:[
    {name:"〜において",description:"Contoh penggunaan 〜において dalam konteks alami sehari-hari di Jepang.",sentences:[
      {jp:"留学生において説明会が、大学のホールで開かれた。",kana:"りゅうがくせいにおいてせつめいかいが、だいがくのほーるでひらかれた。",romaji:"Ryuugakusei nioite setsumeikai ga, daigaku no hooru de hiraka reta.",meaning:"Sesi penjelasan untuk mahasiswa asing diadakan di aula universitas."},
      {jp:"駅前の再開発において住民向けの案内が配られた。",kana:"えきまえのさいかいはつにおいてじゅうみんむけのあんないがくばられた。",romaji:"Ekimae no saikaihatsu nioite juumin muke no annai ga kubara reta.",meaning:"Pemberitahuan bagi warga terkait pembangunan ulang area depan stasiun dibagikan."},
      {jp:"この制度において質問があれば、区役所の窓口で確認できる。",kana:"このせいどにおいてしつもんがあれば、くやくしょのまどぐちでかくにんできる。",romaji:"Kono seido nioite shitsumon gaareba, kuyakusho no madoguchi de kakunin dekiru.",meaning:"Kalau ada pertanyaan terkait sistem ini, bisa ditanyakan di loket balai kota."},
      {jp:"外国人スタッフにおいて研修も、来月から始まる予定だ。",kana:"がいこくじんすたっふにおいてけんしゅうも、らいげつからはじまるよていだ。",romaji:"Gaikokujin sutaffu nioite kenshuu mo, raigetsu kara hajima ru yotei da.",meaning:"Pelatihan untuk staf asing juga dijadwalkan mulai bulan depan."},
      {jp:"今回の変更点において詳しい資料は、受付で受け取れる。",kana:"こんかいのへんこうてんにおいてくわしいしりょうは、うけつけでうけとれる。",romaji:"Konkai no henkouten nioite kuwashii shiryou ha, uketsuke de uketore ru.",meaning:"Materi rinci terkait perubahan kali ini bisa diambil di meja penerima tamu."}
    ]}
  ]},

  // ── GR-N3-74: 〜最中に ──
  {id:"GR-N3-74",level:"N3",title:"〜最中に",summary:"Pola 〜最中に untuk level N3, dengan contoh penggunaan dalam konteks sekolah, kantor, layanan publik, dan kehidupan sehari-hari di Jepang.",groups:[
    {name:"〜最中に",description:"Contoh penggunaan 〜最中に dalam konteks alami sehari-hari di Jepang.",sentences:[
      {jp:"この前の説明会では、最中にという表現も実際の場面で使われていた。",kana:"このまえのせつめいかいでは、さいちゅうにというひょうげんもじっさいのばめんでつかわれていた。",romaji:"Kono mae no setsumeikai deha, saichuu nitoiu hyougen mo jissai no bamen de tsukawa reteita.",meaning:"Pada sesi penjelasan sebelumnya, ungkapan ini juga dipakai dalam situasi nyata."},
      {jp:"区役所や学校でも、最中にのような言い方を見かけることがある。",kana:"くやくしょやがっこうでも、さいちゅうにのようないいかたをみかけることがある。",romaji:"Kuyakusho ya gakkou demo, saichuu ninoyouna iikata wo mikake rukotogaaru.",meaning:"Di balai kota maupun sekolah, kadang terlihat cara ungkap seperti ini."},
      {jp:"職場の会話では、最中にを使うと少し自然な言い方になる。",kana:"しょくばのかいわでは、さいちゅうにをつかうとすこししぜんないいかたになる。",romaji:"Shokuba no kaiwa deha, saichuu niwo tsukau to sukoshi shizen na iikata ninaru.",meaning:"Dalam percakapan kerja, memakai pola ini bisa membuat ungkapan terdengar lebih alami."},
      {jp:"駅前の店で店員さんが話しているのを聞いて、最中にの使い方がよく分かった。",kana:"えきまえのみせでてんいんさんがはなしているのをきいて、さいちゅうにのつかいかたがよくわかった。",romaji:"Ekimae no mise de ten'in sanga hanashi teirunowo kii te, saichuu nino tsukaikata gayoku waka tta.",meaning:"Saat mendengar staf toko di depan stasiun berbicara, saya jadi lebih paham cara pakai pola ini."},
      {jp:"授業だけでなく、日常の場面でも最中には意外とよく出てくる。",kana:"じゅぎょうだけでなく、にちじょうのばめんでもさいちゅうにはいがいとよくでてくる。",romaji:"Jugyou dakedenaku, nichijou no bamen demo saichuu niha igai toyoku dete kuru.",meaning:"Bukan hanya di kelas, pola ini ternyata cukup sering muncul dalam keseharian."}
    ]}
  ]},

  // ── GR-N3-75: 〜たものだ ──
  {id:"GR-N3-75",level:"N3",title:"〜たものだ",summary:"Pola 〜たものだ untuk level N3, dengan contoh penggunaan dalam konteks sekolah, kantor, layanan publik, dan kehidupan sehari-hari di Jepang.",groups:[
    {name:"〜たものだ",description:"Contoh penggunaan 〜たものだ dalam konteks alami sehari-hari di Jepang.",sentences:[
      {jp:"書類を出したものだ, 受付番号を受け取った。",kana:"しょるいをだしたものだ, うけつけばんごうをうけとった。",romaji:"Shorui wo dashi tamonoda,   uketsukebangou wo uketotsu ta.",meaning:"Setelah menyerahkan dokumen itu, saya menerima nomor antrean."},
      {jp:"部屋を見たものだ, その日のうちに申し込む人も多い。",kana:"へやをみたものだ, そのにちのうちにもうしこむにんもおおい。",romaji:"Heya wo mita monoda,   sono nichi nouchini moushikomu nin mo ooi.",meaning:"Setelah melihat kamar itu, banyak orang langsung mendaftar pada hari yang sama."},
      {jp:"電車を降りたものだ, 風の強さに驚いた。",kana:"でんしゃをおりたものだ, かぜのつよさにおどろいた。",romaji:"Densha wo ori tamonoda,   kaze no tsuyosa ni odoroi ta.",meaning:"Begitu turun dari kereta, saya terkejut oleh kencangnya angin."},
      {jp:"先生に会ったものだ, 少し安心した。",kana:"せんせいにあったものだ, すこしあんしんした。",romaji:"Sensei ni atsu tamonoda,   sukoshi anshinshi ta.",meaning:"Setelah bertemu sensei, saya merasa sedikit lega."},
      {jp:"店に入ったものだ, だしのいい香りが広がっていた。",kana:"みせにいっったものだ, だしのいいかおりがひろがっていた。",romaji:"Mise ni itsutsu tamonoda,   dashinoii kaori ga hiroga tteita.",meaning:"Begitu masuk toko, aroma kaldu yang sedap langsung terasa."}
    ]}
  ]},

  // ── GR-N3-76: 〜ないことはない ──
  {id:"GR-N3-76",level:"N3",title:"〜ないことはない",summary:"Pola 〜ないことはない untuk level N3, dengan contoh penggunaan dalam konteks sekolah, kantor, layanan publik, dan kehidupan sehari-hari di Jepang.",groups:[
    {name:"〜ないことはない",description:"Contoh penggunaan 〜ないことはない dalam konteks alami sehari-hari di Jepang.",sentences:[
      {jp:"この前の説明会では、ないことはないという表現も実際の場面で使われていた。",kana:"このまえのせつめいかいでは、ないことはないというひょうげんもじっさいのばめんでつかわれていた。",romaji:"Kono mae no setsumeikai deha, naikotohanaitoiu hyougen mo jissai no bamen de tsukawa reteita.",meaning:"Pada sesi penjelasan sebelumnya, ungkapan ini juga dipakai dalam situasi nyata."},
      {jp:"区役所や学校でも、ないことはないのような言い方を見かけることがある。",kana:"くやくしょやがっこうでも、ないことはないのようないいかたをみかけることがある。",romaji:"Kuyakusho ya gakkou demo, naikotohanainoyouna iikata wo mikake rukotogaaru.",meaning:"Di balai kota maupun sekolah, kadang terlihat cara ungkap seperti ini."},
      {jp:"職場の会話では、ないことはないを使うと少し自然な言い方になる。",kana:"しょくばのかいわでは、ないことはないをつかうとすこししぜんないいかたになる。",romaji:"Shokuba no kaiwa deha, naikotohanaiwo tsukau to sukoshi shizen na iikata ninaru.",meaning:"Dalam percakapan kerja, memakai pola ini bisa membuat ungkapan terdengar lebih alami."},
      {jp:"駅前の店で店員さんが話しているのを聞いて、ないことはないの使い方がよく分かった。",kana:"えきまえのみせでてんいんさんがはなしているのをきいて、ないことはないのつかいかたがよくわかった。",romaji:"Ekimae no mise de ten'in sanga hanashi teirunowo kii te, naikotohanaino tsukaikata gayoku waka tta.",meaning:"Saat mendengar staf toko di depan stasiun berbicara, saya jadi lebih paham cara pakai pola ini."},
      {jp:"授業だけでなく、日常の場面でもないことはないは意外とよく出てくる。",kana:"じゅぎょうだけでなく、にちじょうのばめんでもないことはないはいがいとよくでてくる。",romaji:"Jugyou dakedenaku, nichijou no bamen demonaikotohanaiha igai toyoku dete kuru.",meaning:"Bukan hanya di kelas, pola ini ternyata cukup sering muncul dalam keseharian."}
    ]}
  ]},

  // ── GR-N3-77: 〜ばよかった ──
  {id:"GR-N3-77",level:"N3",title:"〜ばよかった",summary:"Pola 〜ばよかった untuk level N3, dengan contoh penggunaan dalam konteks sekolah, kantor, layanan publik, dan kehidupan sehari-hari di Jepang.",groups:[
    {name:"〜ばよかった",description:"Contoh penggunaan 〜ばよかった dalam konteks alami sehari-hari di Jepang.",sentences:[
      {jp:"もっと早く家を出ればよかった。",kana:"もっとはやくいえをでればよかった。",romaji:"Motto hayaku ie wo dere bayokatta.",meaning:"Seharusnya saya berangkat dari rumah lebih awal."},
      {jp:"先に先生へ相談すればよかったと、今になって思う。",kana:"さきにせんせいへそうだんすればよかったと、いまになっておもう。",romaji:"Sakini sensei he soudan surebayokattato, ima ninatte omou.",meaning:"Sekarang saya merasa seharusnya tadi berkonsultasi ke sensei lebih dulu."},
      {jp:"雨が降りそうだったから、折りたたみ傘を持ってくればよかった。",kana:"あめがおりそうだったから、おりたたみかさをもってくればよかった。",romaji:"Ame ga ori soudattakara, ori tatami kasa wo motsu tekurebayokatta.",meaning:"Karena tampak akan hujan, seharusnya saya membawa payung lipat."},
      {jp:"この店が人気だと知っていれば、予約しておけばよかった。",kana:"このみせがにんきだとしっていれば、よやくしておけばよかった。",romaji:"Kono mise ga ninki dato shitte ireba, yoyaku shiteokebayokatta.",meaning:"Kalau tahu toko ini populer, seharusnya saya memesannya lebih dulu."},
      {jp:"書類のコピーをもう一部用意しておけばよかった。",kana:"しょるいのこぴーをもういちぶよういしておけばよかった。",romaji:"Shorui no kopii womou ichibu youishi teokebayokatta.",meaning:"Seharusnya saya menyiapkan satu salinan dokumen lagi."}
    ]}
  ]},

  // ── GR-N3-78: 〜ずにはいられない ──
  {id:"GR-N3-78",level:"N3",title:"〜ずにはいられない",summary:"Pola 〜ずにはいられない untuk level N3, dengan contoh penggunaan dalam konteks sekolah, kantor, layanan publik, dan kehidupan sehari-hari di Jepang.",groups:[
    {name:"〜ずにはいられない",description:"Contoh penggunaan 〜ずにはいられない dalam konteks alami sehari-hari di Jepang.",sentences:[
      {jp:"今日は寄り道せずに、まっすぐ家に帰る。",kana:"こんにちはよりみちせずに、まっすぐいえにかえる。",romaji:"Konnichiha yorimichi sezuni, massugu ie ni kaeru.",meaning:"Hari ini saya pulang langsung ke rumah tanpa mampir ke mana-mana."},
      {jp:"大声を出すことなく、落ち着いて案内してくれた。",kana:"おおごえをだすことなく、おちついてあんないしてくれた。",romaji:"Oogoe wo dasu kotonaku, ochitsui te annai shitekureta.",meaning:"Dia memberi arahan dengan tenang tanpa meninggikan suara."},
      {jp:"詳しく説明せずとも、表情を見れば事情は伝わった。",kana:"くわしくせつめいせずとも、ひょうじょうをみればじじょうはつたわった。",romaji:"Kuwashiku setsumeise zutomo, hyoujou wo mire ba jijou ha tsutawa tta.",meaning:"Tanpa penjelasan panjang pun, situasinya tersampaikan hanya dari ekspresi wajah."},
      {jp:"休憩を取らずに働き続けるのは体によくない。",kana:"きゅうけいをとらずにはたらきつづけるのはからだによくない。",romaji:"Kyuukei wo tora zuni hataraki tsuzuke runoha karada niyokunai.",meaning:"Terus bekerja tanpa istirahat tidak baik untuk tubuh."},
      {jp:"無理に訳すことなく、そのまま聞き取る練習も大事だ。",kana:"むりにやくすことなく、そのままききとるれんしゅうもだいじだ。",romaji:"Muri ni yakusu kotonaku, sonomama kiki toru renshuu mo daiji da.",meaning:"Berlatih menangkap makna tanpa langsung menerjemahkan juga penting."}
    ]}
  ]},

  // ── GR-N3-79: 〜てしょうがない / 〜てしかたがない ──
  {id:"GR-N3-79",level:"N3",title:"〜てしょうがない / 〜てしかたがない",summary:"Pola 〜てしょうがない / 〜てしかたがない untuk level N3, dengan contoh penggunaan dalam konteks sekolah, kantor, layanan publik, dan kehidupan sehari-hari di Jepang.",groups:[
    {name:"〜てしょうがない / 〜てしかたがない",description:"Contoh penggunaan 〜てしょうがない / 〜てしかたがない dalam konteks alami sehari-hari di Jepang.",sentences:[
      {jp:"必要事項を確認しててしょうがない、そのあとで申込書を出した。",kana:"ひつようじこうをかくにんしててしょうがない、そのあとでもうしこみしょをだした。",romaji:"Hitsuyoujikou wo kakuninshi teteshouganai, sonoatode moushikomisho wo dashi ta.",meaning:"Setelah memeriksa poin yang diperlukan, saya lalu menyerahkan formulir pendaftaran."},
      {jp:"先に先生へ連絡しててしょうがない, 予定を決めた。",kana:"さきにせんせいへれんらくしててしょうがない, よていをきめた。",romaji:"Sakini sensei he renraku shiteteshouganai,   yotei wo kime ta.",meaning:"Saya lebih dulu menghubungi sensei, lalu menentukan jadwal."},
      {jp:"荷物をまとめててしょうがない, すぐ出発できるようにした。",kana:"にもつをまとめててしょうがない, すぐしゅっぱつできるようにした。",romaji:"Nimotsu womatometeteshouganai,   sugu shuppatsu dekiruyounishita.",meaning:"Saya merapikan barang lebih dulu agar bisa segera berangkat."},
      {jp:"窓口で相談しててしょうがない, 手続きを進めた。",kana:"まどぐちでそうだんしててしょうがない, てつづきをすすめた。",romaji:"Madoguchi de soudan shiteteshouganai,   tetsuzuki wo susume ta.",meaning:"Saya berkonsultasi di loket dulu lalu melanjutkan prosedurnya."},
      {jp:"一度落ち着いててしょうがない, 返事をすることにした。",kana:"いちどおちついててしょうがない, へんじをすることにした。",romaji:"Ichido ochitsui teteshouganai,   henji wosurukotonishita.",meaning:"Saya memutuskan untuk menenangkan diri dulu baru memberi jawaban."}
    ]}
  ]},

  // ── GR-N3-80: 〜わけにはいかない ──
  {id:"GR-N3-80",level:"N3",title:"〜わけにはいかない",summary:"Pola 〜わけにはいかない untuk level N3, dengan contoh penggunaan dalam konteks sekolah, kantor, layanan publik, dan kehidupan sehari-hari di Jepang.",groups:[
    {name:"〜わけにはいかない",description:"Contoh penggunaan 〜わけにはいかない dalam konteks alami sehari-hari di Jepang.",sentences:[
      {jp:"この前の説明会では、わけにはいかないという表現も実際の場面で使われていた。",kana:"このまえのせつめいかいでは、わけにはいかないというひょうげんもじっさいのばめんでつかわれていた。",romaji:"Kono mae no setsumeikai deha, wakenihaikanaitoiu hyougen mo jissai no bamen de tsukawa reteita.",meaning:"Pada sesi penjelasan sebelumnya, ungkapan ini juga dipakai dalam situasi nyata."},
      {jp:"区役所や学校でも、わけにはいかないのような言い方を見かけることがある。",kana:"くやくしょやがっこうでも、わけにはいかないのようないいかたをみかけることがある。",romaji:"Kuyakusho ya gakkou demo, wakenihaikanainoyouna iikata wo mikake rukotogaaru.",meaning:"Di balai kota maupun sekolah, kadang terlihat cara ungkap seperti ini."},
      {jp:"職場の会話では、わけにはいかないを使うと少し自然な言い方になる。",kana:"しょくばのかいわでは、わけにはいかないをつかうとすこししぜんないいかたになる。",romaji:"Shokuba no kaiwa deha, wakenihaikanaiwo tsukau to sukoshi shizen na iikata ninaru.",meaning:"Dalam percakapan kerja, memakai pola ini bisa membuat ungkapan terdengar lebih alami."},
      {jp:"駅前の店で店員さんが話しているのを聞いて、わけにはいかないの使い方がよく分かった。",kana:"えきまえのみせでてんいんさんがはなしているのをきいて、わけにはいかないのつかいかたがよくわかった。",romaji:"Ekimae no mise de ten'in sanga hanashi teirunowo kii te, wakenihaikanaino tsukaikata gayoku waka tta.",meaning:"Saat mendengar staf toko di depan stasiun berbicara, saya jadi lebih paham cara pakai pola ini."},
      {jp:"授業だけでなく、日常の場面でもわけにはいかないは意外とよく出てくる。",kana:"じゅぎょうだけでなく、にちじょうのばめんでもわけにはいかないはいがいとよくでてくる。",romaji:"Jugyou dakedenaku, nichijou no bamen demowakenihaikanaiha igai toyoku dete kuru.",meaning:"Bukan hanya di kelas, pola ini ternyata cukup sering muncul dalam keseharian."}
    ]}
  ]},

  // ── GR-N3-81: 〜たびに ──
  {id:"GR-N3-81",level:"N3",title:"〜たびに",summary:"Pola 〜たびに untuk level N3, dengan contoh penggunaan dalam konteks sekolah, kantor, layanan publik, dan kehidupan sehari-hari di Jepang.",groups:[
    {name:"〜たびに",description:"Contoh penggunaan 〜たびに dalam konteks alami sehari-hari di Jepang.",sentences:[
      {jp:"駅前を通るたびに、新しい店が増えていて驚く。",kana:"えきまえをとうるたびに、あたらしいみせがふえていておどろく。",romaji:"Ekimae wo touru tabini, atarashii mise ga fue teite odoroku.",meaning:"Setiap kali lewat depan stasiun, saya heran karena selalu ada toko baru bertambah."},
      {jp:"季節が変わるたびに、商店街の飾りつけも少しずつ変わる。",kana:"きせつがかわるたびに、しょうてんがいのかざりつけもすこしずつかわる。",romaji:"Kisetsu ga kawa rutabini, shoutengai no kazari tsukemo sukoshi zutsu kawa ru.",meaning:"Setiap pergantian musim, dekorasi area pertokoan juga berubah sedikit demi sedikit."},
      {jp:"先生に会うたびに、研究の視点が少し広がる気がする。",kana:"せんせいにあうたびに、けんきゅうのしてんがすこしひろがるきがする。",romaji:"Sensei ni au tabini, kenkyuu no shiten ga sukoshi hiroga ru kiga suru.",meaning:"Setiap kali bertemu sensei, saya merasa sudut pandang penelitian saya sedikit lebih luas."},
      {jp:"このアプリは更新のたびに使いやすくなっている。",kana:"このあぷりはこうしんのたびにつかいやすくなっている。",romaji:"Kono apuri ha koushin notabini tsukai yasukunatteiru.",meaning:"Aplikasi ini terasa makin mudah dipakai setiap kali diperbarui."},
      {jp:"手続きのたびに同じ書類を出すのは、少し面倒だ。",kana:"てつづきのたびにおなじしょるいをだすのは、すこしめんどうだ。",romaji:"Tetsuzuki notabini onaji shorui wo dasu noha, sukoshi mendou da.",meaning:"Harus menyerahkan dokumen yang sama setiap kali mengurus prosedur terasa agak merepotkan."}
    ]}
  ]},

  // ── GR-N3-82: 〜とおり(に) ──
  {id:"GR-N3-82",level:"N3",title:"〜とおり(に)",summary:"Pola 〜とおり(に) untuk level N3, dengan contoh penggunaan dalam konteks sekolah, kantor, layanan publik, dan kehidupan sehari-hari di Jepang.",groups:[
    {name:"〜とおり(に)",description:"Contoh penggunaan 〜とおり(に) dalam konteks alami sehari-hari di Jepang.",sentences:[
      {jp:"案内に書いてあるとおりに進めば、受付はすぐ見つかる。",kana:"あんないにかいてあるとおりにすすめば、うけつけはすぐみつかる。",romaji:"Annai ni kai tearutoorini susume ba, uketsuke hasugu mitsu karu.",meaning:"Kalau mengikuti petunjuk seperti yang tertulis, meja pendaftaran akan segera ditemukan."},
      {jp:"先生の言ったとおり、朝一番の窓口は思ったより空いていた。",kana:"せんせいのいったとおり、あさいちばんのまどぐちはおもったよりあいていた。",romaji:"Sensei no itta toori, asaichiban no madoguchi ha omotta yori ai teita.",meaning:"Seperti yang sensei katakan, loket pagi-pagi ternyata lebih sepi dari dugaan."},
      {jp:"予定どおりに会議が終われば、夕方には駅前に戻れる。",kana:"よていどおりにかいぎがおわれば、ゆうがたにはえきまえにもどれる。",romaji:"Yotei doorini kaigi ga owa reba, yuugata niha ekimae ni modore ru.",meaning:"Kalau rapat selesai sesuai rencana, sore hari saya bisa kembali ke depan stasiun."},
      {jp:"見本のとおりに書いたつもりだったが、一か所だけ形式が違っていた。",kana:"みほんのとおりにかいたつもりだったが、いちかところだけけいしきがちがっていた。",romaji:"Mihon notoorini kai tatsumoridattaga, ichi ka tokoro dake keishiki ga chigatsu teita.",meaning:"Saya kira sudah menulis sesuai contoh, tapi ternyata ada satu bagian yang formatnya berbeda."},
      {jp:"地図のとおりに歩いたのに、工事中で遠回りになった。",kana:"ちずのとおりにあるいたのに、こうじちゅうでとおまわりになった。",romaji:"Chizu notoorini arui tanoni, koujichuu de toomawari ninatta.",meaning:"Padahal sudah berjalan sesuai peta, tapi karena ada pembangunan saya harus memutar."}
    ]}
  ]},

  // ── GR-N3-83: 〜にしたがって ──
  {id:"GR-N3-83",level:"N3",title:"〜にしたがって",summary:"Pola 〜にしたがって untuk level N3, dengan contoh penggunaan dalam konteks sekolah, kantor, layanan publik, dan kehidupan sehari-hari di Jepang.",groups:[
    {name:"〜にしたがって",description:"Contoh penggunaan 〜にしたがって dalam konteks alami sehari-hari di Jepang.",sentences:[
      {jp:"留学生にしたがって説明会が、大学のホールで開かれた。",kana:"りゅうがくせいにしたがってせつめいかいが、だいがくのほーるでひらかれた。",romaji:"Ryuugakusei nishitagatte setsumeikai ga, daigaku no hooru de hiraka reta.",meaning:"Sesi penjelasan untuk mahasiswa asing diadakan di aula universitas."},
      {jp:"駅前の再開発にしたがって住民向けの案内が配られた。",kana:"えきまえのさいかいはつにしたがってじゅうみんむけのあんないがくばられた。",romaji:"Ekimae no saikaihatsu nishitagatte juumin muke no annai ga kubara reta.",meaning:"Pemberitahuan bagi warga terkait pembangunan ulang area depan stasiun dibagikan."},
      {jp:"この制度にしたがって質問があれば、区役所の窓口で確認できる。",kana:"このせいどにしたがってしつもんがあれば、くやくしょのまどぐちでかくにんできる。",romaji:"Kono seido nishitagatte shitsumon gaareba, kuyakusho no madoguchi de kakunin dekiru.",meaning:"Kalau ada pertanyaan terkait sistem ini, bisa ditanyakan di loket balai kota."},
      {jp:"外国人スタッフにしたがって研修も、来月から始まる予定だ。",kana:"がいこくじんすたっふにしたがってけんしゅうも、らいげつからはじまるよていだ。",romaji:"Gaikokujin sutaffu nishitagatte kenshuu mo, raigetsu kara hajima ru yotei da.",meaning:"Pelatihan untuk staf asing juga dijadwalkan mulai bulan depan."},
      {jp:"今回の変更点にしたがって詳しい資料は、受付で受け取れる。",kana:"こんかいのへんこうてんにしたがってくわしいしりょうは、うけつけでうけとれる。",romaji:"Konkai no henkouten nishitagatte kuwashii shiryou ha, uketsuke de uketore ru.",meaning:"Materi rinci terkait perubahan kali ini bisa diambil di meja penerima tamu."}
    ]}
  ]},

  // ── GR-N3-84: 〜ていく / 〜てくる ──
  {id:"GR-N3-84",level:"N3",title:"〜ていく / 〜てくる",summary:"Pola 〜ていく / 〜てくる untuk level N3, dengan contoh penggunaan dalam konteks sekolah, kantor, layanan publik, dan kehidupan sehari-hari di Jepang.",groups:[
    {name:"〜ていく / 〜てくる",description:"Contoh penggunaan 〜ていく / 〜てくる dalam konteks alami sehari-hari di Jepang.",sentences:[
      {jp:"駅前の景色は、数年で少しずつ変わってきた。",kana:"えきまえのけしきは、すうねんですこしずつかわってきた。",romaji:"Ekimae no keshiki ha, suunen de sukoshi zutsu kawa ttekita.",meaning:"Pemandangan depan stasiun pelan-pelan berubah dalam beberapa tahun terakhir."},
      {jp:"外国人向けの案内も、以前より分かりやすくなっていくと思う。",kana:"がいこくじんむけのあんないも、いぜんよりわかりやすくなっていくとおもう。",romaji:"Gaikokujin muke no annai mo, izen yori waka riyasukunatteikuto omou.",meaning:"Saya rasa petunjuk bagi orang asing juga akan semakin mudah dipahami ke depannya."},
      {jp:"気温が上がるにつれて、川沿いを歩く人が増えてきた。",kana:"きおんがあがるにつれて、かわぞいをあるくにんがふえてきた。",romaji:"Kion ga aga runitsurete, kawazoi wo aruku nin ga fue tekita.",meaning:"Seiring suhu naik, orang yang berjalan di tepi sungai mulai bertambah."},
      {jp:"家賃はこの数年で上がる一方だ。",kana:"やちんはこのすうねんであがるいっぽうだ。",romaji:"Yachin hakono suunen de aga ru ippou da.",meaning:"Harga sewa dalam beberapa tahun ini hanya terus naik."},
      {jp:"締め切りが近づき、準備すべきことは増えるばかりだ。",kana:"しめきりがちかづき、じゅんびすべきことはふえるばかりだ。",romaji:"Shimekiri ga chikazu ki, junbi subekikotoha fue rubakarida.",meaning:"Saat tenggat makin dekat, hal-hal yang harus dipersiapkan justru terus bertambah."}
    ]}
  ]},

  // ── GR-N3-86: 〜ば〜ほど ──
  {id:"GR-N3-86",level:"N3",title:"〜ば〜ほど",summary:"Pola 〜ば〜ほど untuk level N3, dengan contoh penggunaan dalam konteks sekolah, kantor, layanan publik, dan kehidupan sehari-hari di Jepang.",groups:[
    {name:"〜ば〜ほど",description:"Contoh penggunaan 〜ば〜ほど dalam konteks alami sehari-hari di Jepang.",sentences:[
      {jp:"使えば使うほど、この路線の乗り換えにも慣れてくる。",kana:"つかえばつかうほど、このろせんののりかえにもなれてくる。",romaji:"Tsukae ba tsukau hodo, kono rosen no norikae nimo nare tekuru.",meaning:"Semakin sering dipakai, semakin terbiasa juga dengan transit di jalur ini."},
      {jp:"調べれば調べるほど、この町の歴史は面白い。",kana:"しらべればしらべるほど、このまちのれきしはおもしろい。",romaji:"Shirabe reba shirabe ruhodo, kono machi no rekishi ha omoshiroi.",meaning:"Semakin dipelajari, sejarah kota ini semakin menarik."},
      {jp:"話せば話すほど、その先生の説明のうまさが分かる。",kana:"はなせばはなすほど、そのせんせいのせつめいのうまさがわかる。",romaji:"Hanase ba hanasu hodo, sono sensei no setsumei noumasaga waka ru.",meaning:"Semakin banyak berbicara, semakin terasa kepiawaian sensei itu dalam menjelaskan."},
      {jp:"歩けば歩くほど、駅前より裏通りの方が落ち着いていると感じる。",kana:"あるけばあるくほど、えきまえよりうらどおりのほうがおちついているとかんじる。",romaji:"Aruke ba aruku hodo, ekimae yori uradoori no houga ochitsui teiruto kanji ru.",meaning:"Semakin berjalan, semakin terasa kalau gang belakang lebih tenang daripada area depan stasiun."},
      {jp:"考えれば考えるほど、今回は早めに申し込むべきだと思う。",kana:"かんがえればかんがえるほど、こんかいははやめにもうしこむべきだとおもう。",romaji:"Kangae reba kangae ruhodo, konkai ha hayame ni moushikomu bekidato omou.",meaning:"Semakin dipikirkan, saya makin merasa sebaiknya mendaftar lebih awal kali ini."}
    ]}
  ]},

  // ── GR-N3-87: 〜くせに ──
  {id:"GR-N3-87",level:"N3",title:"〜くせに",summary:"Pola 〜くせに untuk level N3, dengan contoh penggunaan dalam konteks sekolah, kantor, layanan publik, dan kehidupan sehari-hari di Jepang.",groups:[
    {name:"〜くせに",description:"Contoh penggunaan 〜くせに dalam konteks alami sehari-hari di Jepang.",sentences:[
      {jp:"この前の説明会では、くせにという表現も実際の場面で使われていた。",kana:"このまえのせつめいかいでは、くせにというひょうげんもじっさいのばめんでつかわれていた。",romaji:"Kono mae no setsumeikai deha, kusenitoiu hyougen mo jissai no bamen de tsukawa reteita.",meaning:"Pada sesi penjelasan sebelumnya, ungkapan ini juga dipakai dalam situasi nyata."},
      {jp:"区役所や学校でも、くせにのような言い方を見かけることがある。",kana:"くやくしょやがっこうでも、くせにのようないいかたをみかけることがある。",romaji:"Kuyakusho ya gakkou demo, kuseninoyouna iikata wo mikake rukotogaaru.",meaning:"Di balai kota maupun sekolah, kadang terlihat cara ungkap seperti ini."},
      {jp:"職場の会話では、くせにを使うと少し自然な言い方になる。",kana:"しょくばのかいわでは、くせにをつかうとすこししぜんないいかたになる。",romaji:"Shokuba no kaiwa deha, kuseniwo tsukau to sukoshi shizen na iikata ninaru.",meaning:"Dalam percakapan kerja, memakai pola ini bisa membuat ungkapan terdengar lebih alami."},
      {jp:"駅前の店で店員さんが話しているのを聞いて、くせにの使い方がよく分かった。",kana:"えきまえのみせでてんいんさんがはなしているのをきいて、くせにのつかいかたがよくわかった。",romaji:"Ekimae no mise de ten'in sanga hanashi teirunowo kii te, kusenino tsukaikata gayoku waka tta.",meaning:"Saat mendengar staf toko di depan stasiun berbicara, saya jadi lebih paham cara pakai pola ini."},
      {jp:"授業だけでなく、日常の場面でもくせには意外とよく出てくる。",kana:"じゅぎょうだけでなく、にちじょうのばめんでもくせにはいがいとよくでてくる。",romaji:"Jugyou dakedenaku, nichijou no bamen demokuseniha igai toyoku dete kuru.",meaning:"Bukan hanya di kelas, pola ini ternyata cukup sering muncul dalam keseharian."}
    ]}
  ]},

  // ── GR-N3-88: 〜くらい / ぐらい / 〜ほど ──
  {id:"GR-N3-88",level:"N3",title:"〜くらい / ぐらい / 〜ほど",summary:"Pola 〜くらい / ぐらい / 〜ほど untuk level N3, dengan contoh penggunaan dalam konteks sekolah, kantor, layanan publik, dan kehidupan sehari-hari di Jepang.",groups:[
    {name:"〜くらい / ぐらい / 〜ほど",description:"Contoh penggunaan 〜くらい / ぐらい / 〜ほど dalam konteks alami sehari-hari di Jepang.",sentences:[
      {jp:"この前の説明会では、くらいという表現も実際の場面で使われていた。",kana:"このまえのせつめいかいでは、くらいというひょうげんもじっさいのばめんでつかわれていた。",romaji:"Kono mae no setsumeikai deha, kuraitoiu hyougen mo jissai no bamen de tsukawa reteita.",meaning:"Pada sesi penjelasan sebelumnya, ungkapan ini juga dipakai dalam situasi nyata."},
      {jp:"区役所や学校でも、くらいのような言い方を見かけることがある。",kana:"くやくしょやがっこうでも、くらいのようないいかたをみかけることがある。",romaji:"Kuyakusho ya gakkou demo, kurainoyouna iikata wo mikake rukotogaaru.",meaning:"Di balai kota maupun sekolah, kadang terlihat cara ungkap seperti ini."},
      {jp:"職場の会話では、くらいを使うと少し自然な言い方になる。",kana:"しょくばのかいわでは、くらいをつかうとすこししぜんないいかたになる。",romaji:"Shokuba no kaiwa deha, kuraiwo tsukau to sukoshi shizen na iikata ninaru.",meaning:"Dalam percakapan kerja, memakai pola ini bisa membuat ungkapan terdengar lebih alami."},
      {jp:"駅前の店で店員さんが話しているのを聞いて、くらいの使い方がよく分かった。",kana:"えきまえのみせでてんいんさんがはなしているのをきいて、くらいのつかいかたがよくわかった。",romaji:"Ekimae no mise de ten'in sanga hanashi teirunowo kii te, kuraino tsukaikata gayoku waka tta.",meaning:"Saat mendengar staf toko di depan stasiun berbicara, saya jadi lebih paham cara pakai pola ini."},
      {jp:"授業だけでなく、日常の場面でもくらいは意外とよく出てくる。",kana:"じゅぎょうだけでなく、にちじょうのばめんでもくらいはいがいとよくでてくる。",romaji:"Jugyou dakedenaku, nichijou no bamen demokuraiha igai toyoku dete kuru.",meaning:"Bukan hanya di kelas, pola ini ternyata cukup sering muncul dalam keseharian."}
    ]}
  ]},

  // ── GR-N3-89: 〜こそ ──
  {id:"GR-N3-89",level:"N3",title:"〜こそ",summary:"Pola 〜こそ untuk level N3, dengan contoh penggunaan dalam konteks sekolah, kantor, layanan publik, dan kehidupan sehari-hari di Jepang.",groups:[
    {name:"〜こそ",description:"Contoh penggunaan 〜こそ dalam konteks alami sehari-hari di Jepang.",sentences:[
      {jp:"この前の説明会では、こそという表現も実際の場面で使われていた。",kana:"このまえのせつめいかいでは、こそというひょうげんもじっさいのばめんでつかわれていた。",romaji:"Kono mae no setsumeikai deha, kosotoiu hyougen mo jissai no bamen de tsukawa reteita.",meaning:"Pada sesi penjelasan sebelumnya, ungkapan ini juga dipakai dalam situasi nyata."},
      {jp:"区役所や学校でも、こそのような言い方を見かけることがある。",kana:"くやくしょやがっこうでも、こそのようないいかたをみかけることがある。",romaji:"Kuyakusho ya gakkou demo, kosonoyouna iikata wo mikake rukotogaaru.",meaning:"Di balai kota maupun sekolah, kadang terlihat cara ungkap seperti ini."},
      {jp:"職場の会話では、こそを使うと少し自然な言い方になる。",kana:"しょくばのかいわでは、こそをつかうとすこししぜんないいかたになる。",romaji:"Shokuba no kaiwa deha, kosowo tsukau to sukoshi shizen na iikata ninaru.",meaning:"Dalam percakapan kerja, memakai pola ini bisa membuat ungkapan terdengar lebih alami."},
      {jp:"駅前の店で店員さんが話しているのを聞いて、こその使い方がよく分かった。",kana:"えきまえのみせでてんいんさんがはなしているのをきいて、こそのつかいかたがよくわかった。",romaji:"Ekimae no mise de ten'in sanga hanashi teirunowo kii te, kosono tsukaikata gayoku waka tta.",meaning:"Saat mendengar staf toko di depan stasiun berbicara, saya jadi lebih paham cara pakai pola ini."},
      {jp:"授業だけでなく、日常の場面でもこそは意外とよく出てくる。",kana:"じゅぎょうだけでなく、にちじょうのばめんでもこそはいがいとよくでてくる。",romaji:"Jugyou dakedenaku, nichijou no bamen demokosoha igai toyoku dete kuru.",meaning:"Bukan hanya di kelas, pola ini ternyata cukup sering muncul dalam keseharian."}
    ]}
  ]},

  // ── GR-N3-90: 〜(で)さえ ──
  {id:"GR-N3-90",level:"N3",title:"〜(で)さえ",summary:"Pola 〜(で)さえ untuk level N3, dengan contoh penggunaan dalam konteks sekolah, kantor, layanan publik, dan kehidupan sehari-hari di Jepang.",groups:[
    {name:"〜(で)さえ",description:"Contoh penggunaan 〜(で)さえ dalam konteks alami sehari-hari di Jepang.",sentences:[
      {jp:"この前の説明会では、さえという表現も実際の場面で使われていた。",kana:"このまえのせつめいかいでは、さえというひょうげんもじっさいのばめんでつかわれていた。",romaji:"Kono mae no setsumeikai deha, saetoiu hyougen mo jissai no bamen de tsukawa reteita.",meaning:"Pada sesi penjelasan sebelumnya, ungkapan ini juga dipakai dalam situasi nyata."},
      {jp:"区役所や学校でも、さえのような言い方を見かけることがある。",kana:"くやくしょやがっこうでも、さえのようないいかたをみかけることがある。",romaji:"Kuyakusho ya gakkou demo, saenoyouna iikata wo mikake rukotogaaru.",meaning:"Di balai kota maupun sekolah, kadang terlihat cara ungkap seperti ini."},
      {jp:"職場の会話では、さえを使うと少し自然な言い方になる。",kana:"しょくばのかいわでは、さえをつかうとすこししぜんないいかたになる。",romaji:"Shokuba no kaiwa deha, saewo tsukau to sukoshi shizen na iikata ninaru.",meaning:"Dalam percakapan kerja, memakai pola ini bisa membuat ungkapan terdengar lebih alami."},
      {jp:"駅前の店で店員さんが話しているのを聞いて、さえの使い方がよく分かった。",kana:"えきまえのみせでてんいんさんがはなしているのをきいて、さえのつかいかたがよくわかった。",romaji:"Ekimae no mise de ten'in sanga hanashi teirunowo kii te, saeno tsukaikata gayoku waka tta.",meaning:"Saat mendengar staf toko di depan stasiun berbicara, saya jadi lebih paham cara pakai pola ini."},
      {jp:"授業だけでなく、日常の場面でもさえは意外とよく出てくる。",kana:"じゅぎょうだけでなく、にちじょうのばめんでもさえはいがいとよくでてくる。",romaji:"Jugyou dakedenaku, nichijou no bamen demosaeha igai toyoku dete kuru.",meaning:"Bukan hanya di kelas, pola ini ternyata cukup sering muncul dalam keseharian."}
    ]}
  ]},

  // ── GR-N3-91: 〜なんか / 〜なんて ──
  {id:"GR-N3-91",level:"N3",title:"〜なんか / 〜なんて",summary:"Pola 〜なんか / 〜なんて untuk level N3, dengan contoh penggunaan dalam konteks sekolah, kantor, layanan publik, dan kehidupan sehari-hari di Jepang.",groups:[
    {name:"〜なんか / 〜なんて",description:"Contoh penggunaan 〜なんか / 〜なんて dalam konteks alami sehari-hari di Jepang.",sentences:[
      {jp:"この前の説明会では、なんかという表現も実際の場面で使われていた。",kana:"このまえのせつめいかいでは、なんかというひょうげんもじっさいのばめんでつかわれていた。",romaji:"Kono mae no setsumeikai deha, nankatoiu hyougen mo jissai no bamen de tsukawa reteita.",meaning:"Pada sesi penjelasan sebelumnya, ungkapan ini juga dipakai dalam situasi nyata."},
      {jp:"区役所や学校でも、なんかのような言い方を見かけることがある。",kana:"くやくしょやがっこうでも、なんかのようないいかたをみかけることがある。",romaji:"Kuyakusho ya gakkou demo, nankanoyouna iikata wo mikake rukotogaaru.",meaning:"Di balai kota maupun sekolah, kadang terlihat cara ungkap seperti ini."},
      {jp:"職場の会話では、なんかを使うと少し自然な言い方になる。",kana:"しょくばのかいわでは、なんかをつかうとすこししぜんないいかたになる。",romaji:"Shokuba no kaiwa deha, nankawo tsukau to sukoshi shizen na iikata ninaru.",meaning:"Dalam percakapan kerja, memakai pola ini bisa membuat ungkapan terdengar lebih alami."},
      {jp:"駅前の店で店員さんが話しているのを聞いて、なんかの使い方がよく分かった。",kana:"えきまえのみせでてんいんさんがはなしているのをきいて、なんかのつかいかたがよくわかった。",romaji:"Ekimae no mise de ten'in sanga hanashi teirunowo kii te, nankano tsukaikata gayoku waka tta.",meaning:"Saat mendengar staf toko di depan stasiun berbicara, saya jadi lebih paham cara pakai pola ini."},
      {jp:"授業だけでなく、日常の場面でもなんかは意外とよく出てくる。",kana:"じゅぎょうだけでなく、にちじょうのばめんでもなんかはいがいとよくでてくる。",romaji:"Jugyou dakedenaku, nichijou no bamen demonankaha igai toyoku dete kuru.",meaning:"Bukan hanya di kelas, pola ini ternyata cukup sering muncul dalam keseharian."}
    ]}
  ]},

  // ── GR-N3-92: 〜まで ──
  {id:"GR-N3-92",level:"N3",title:"〜まで",summary:"Pola 〜まで untuk level N3, dengan contoh penggunaan dalam konteks sekolah, kantor, layanan publik, dan kehidupan sehari-hari di Jepang.",groups:[
    {name:"〜まで",description:"Contoh penggunaan 〜まで dalam konteks alami sehari-hari di Jepang.",sentences:[
      {jp:"靴のまま入れる教室もあれば、履き替える教室もある。",kana:"くつのままいれるきょうしつもあれば、はきかえるきょうしつもある。",romaji:"Kutsu nomama ire ru kyoushitsu moareba, haki kae ru kyoushitsu moaru.",meaning:"Ada ruang kelas yang boleh dimasuki dengan sepatu, ada juga yang harus ganti alas kaki."},
      {jp:"資料は印刷したまま机の上に置いておいた。",kana:"しりょうはいんさつしたままつくえのうえにおいておいた。",romaji:"Shiryou ha insatsu shitamama tsukue no ueni oi teoita.",meaning:"Saya membiarkan materi cetak itu tetap berada di atas meja."},
      {jp:"昔の商店街がそのまま残っている通りもまだある。",kana:"むかしのしょうてんがいがそのままのこっているとうりもまだある。",romaji:"Mukashi no shoutengai gasonomama nokotsu teiru touri momadaaru.",meaning:"Masih ada jalan yang mempertahankan area pertokoan lama apa adanya."},
      {jp:"窓を開けたままだと、夜は少し冷える。",kana:"まどをひらけたままだと、よるはすこしひえる。",romaji:"Mado wo hirake tamamadato, yoru ha sukoshi hie ru.",meaning:"Kalau jendelanya dibiarkan terbuka, malam hari akan terasa agak dingin."},
      {jp:"分からないまま進めるより、一度確認した方がいい。",kana:"わからないまますすめるより、いちどかくにんしたほうがいい。",romaji:"Waka ranaimama susume ruyori, ichido kakuninshi ta houga ii.",meaning:"Daripada terus lanjut tanpa paham, lebih baik periksa sekali lagi."}
    ]}
  ]},

  // ── GR-N3-93: 〜という ──
  {id:"GR-N3-93",level:"N3",title:"〜という",summary:"Pola 〜という untuk level N3, dengan contoh penggunaan dalam konteks sekolah, kantor, layanan publik, dan kehidupan sehari-hari di Jepang.",groups:[
    {name:"〜という",description:"Contoh penggunaan 〜という dalam konteks alami sehari-hari di Jepang.",sentences:[
      {jp:"駅に着くと、ちょうど案内放送が始まった。",kana:"えきにつくと、ちょうどあんないほうそうがはじまった。",romaji:"Eki ni tsuku to, choudo annaihousou ga hajima tta.",meaning:"Begitu sampai di stasiun, pengumuman baru saja dimulai."},
      {jp:"春になると、この川沿いは散歩する人でにぎわう。",kana:"はるになると、このかわぞいはさんぽするにんでにぎわう。",romaji:"Haru ninaruto, kono kawazoi ha sanpo suru nin denigiwau.",meaning:"Begitu musim semi tiba, area tepi sungai ini ramai oleh orang yang berjalan-jalan."},
      {jp:"資料を読むと、今回の変更点がよく分かる。",kana:"しりょうをよむと、こんかいのへんこうてんがよくわかる。",romaji:"Shiryou wo yomu to, konkai no henkouten gayoku waka ru.",meaning:"Kalau membaca materinya, perubahan kali ini jadi mudah dipahami."},
      {jp:"彼の話し方を見ると、かなり緊張しているようだ。",kana:"かのはなしかたをみると、かなりきんちょうしているようだ。",romaji:"Kano hanashikata wo miru to, kanari kinchoushi teiruyouda.",meaning:"Melihat cara dia berbicara, tampaknya dia cukup tegang."},
      {jp:"この条件だと、申し込みは早い方がよさそうだ。",kana:"このじょうけんだと、もうしこみははやいほうがよさそうだ。",romaji:"Kono jouken dato, moushikomi ha hayai houga yosasouda.",meaning:"Kalau syaratnya seperti ini, tampaknya lebih baik mendaftar lebih cepat."}
    ]}
  ]},

  // ── GR-N3-94: 〜ということだ② ──
  {id:"GR-N3-94",level:"N3",title:"〜ということだ②",summary:"Pola 〜ということだ② untuk level N3, dengan contoh penggunaan dalam konteks sekolah, kantor, layanan publik, dan kehidupan sehari-hari di Jepang.",groups:[
    {name:"〜ということだ②",description:"Contoh penggunaan 〜ということだ② dalam konteks alami sehari-hari di Jepang.",sentences:[
      {jp:"駅に着くと、ちょうど案内放送が始まった。",kana:"えきにつくと、ちょうどあんないほうそうがはじまった。",romaji:"Eki ni tsuku to, choudo annaihousou ga hajima tta.",meaning:"Begitu sampai di stasiun, pengumuman baru saja dimulai."},
      {jp:"春になると、この川沿いは散歩する人でにぎわう。",kana:"はるになると、このかわぞいはさんぽするにんでにぎわう。",romaji:"Haru ninaruto, kono kawazoi ha sanpo suru nin denigiwau.",meaning:"Begitu musim semi tiba, area tepi sungai ini ramai oleh orang yang berjalan-jalan."},
      {jp:"資料を読むと、今回の変更点がよく分かる。",kana:"しりょうをよむと、こんかいのへんこうてんがよくわかる。",romaji:"Shiryou wo yomu to, konkai no henkouten gayoku waka ru.",meaning:"Kalau membaca materinya, perubahan kali ini jadi mudah dipahami."},
      {jp:"彼の話し方を見ると、かなり緊張しているようだ。",kana:"かのはなしかたをみると、かなりきんちょうしているようだ。",romaji:"Kano hanashikata wo miru to, kanari kinchoushi teiruyouda.",meaning:"Melihat cara dia berbicara, tampaknya dia cukup tegang."},
      {jp:"この条件だと、申し込みは早い方がよさそうだ。",kana:"このじょうけんだと、もうしこみははやいほうがよさそうだ。",romaji:"Kono jouken dato, moushikomi ha hayai houga yosasouda.",meaning:"Kalau syaratnya seperti ini, tampaknya lebih baik mendaftar lebih cepat."}
    ]}
  ]},

  // ── GR-N3-96: 〜らしい ──
  {id:"GR-N3-96",level:"N3",title:"〜らしい",summary:"Pola 〜らしい untuk level N3, dengan contoh penggunaan dalam konteks sekolah, kantor, layanan publik, dan kehidupan sehari-hari di Jepang.",groups:[
    {name:"〜らしい",description:"Contoh penggunaan 〜らしい dalam konteks alami sehari-hari di Jepang.",sentences:[
      {jp:"この辺りは春になると桜がきれいらしい。",kana:"このあたりははるになるとさくらがきれいらしい。",romaji:"Kono atari ha haru ninaruto sakura gakireirashii.",meaning:"Katanya saat musim semi daerah ini punya bunga sakura yang indah."},
      {jp:"新しくできた食堂は学生に人気らしい。",kana:"あたらしくできたしょくどうはがくせいににんきらしい。",romaji:"Atarashiku dekita shokudou ha gakusei ni ninki rashii.",meaning:"Katanya kantin yang baru dibuka itu populer di kalangan mahasiswa."},
      {jp:"あの人は今年から区役所で働いているらしい。",kana:"あのにんはこんねんからくやくしょではたらいているらしい。",romaji:"Ano nin ha konnen kara kuyakusho de hatarai teirurashii.",meaning:"Katanya orang itu mulai bekerja di balai kota sejak tahun ini."},
      {jp:"明日の説明会は予定より少し短くなるらしい。",kana:"あしたのせつめいかいはよていよりすこしみじかくなるらしい。",romaji:"Ashita no setsumeikai ha yotei yori sukoshi mijikaku narurashii.",meaning:"Katanya sesi penjelasan besok akan sedikit lebih singkat dari rencana."},
      {jp:"このアパートは防音がしっかりしているらしい。",kana:"このあぱーとはぼうおんがしっかりしているらしい。",romaji:"Kono apaato ha bouon gashikkarishiteirurashii.",meaning:"Katanya apartemen ini memiliki peredam suara yang bagus."}
    ]}
  ]},

  // ── GR-N3-97: 〜んだって ──
  {id:"GR-N3-97",level:"N3",title:"〜んだって",summary:"Pola 〜んだって untuk level N3, dengan contoh penggunaan dalam konteks sekolah, kantor, layanan publik, dan kehidupan sehari-hari di Jepang.",groups:[
    {name:"〜んだって",description:"Contoh penggunaan 〜んだって dalam konteks alami sehari-hari di Jepang.",sentences:[
      {jp:"この前の説明会では、んだってという表現も実際の場面で使われていた。",kana:"このまえのせつめいかいでは、んだってというひょうげんもじっさいのばめんでつかわれていた。",romaji:"Kono mae no setsumeikai deha, ndattetoiu hyougen mo jissai no bamen de tsukawa reteita.",meaning:"Pada sesi penjelasan sebelumnya, ungkapan ini juga dipakai dalam situasi nyata."},
      {jp:"区役所や学校でも、んだってのような言い方を見かけることがある。",kana:"くやくしょやがっこうでも、んだってのようないいかたをみかけることがある。",romaji:"Kuyakusho ya gakkou demo, ndattenoyouna iikata wo mikake rukotogaaru.",meaning:"Di balai kota maupun sekolah, kadang terlihat cara ungkap seperti ini."},
      {jp:"職場の会話では、んだってを使うと少し自然な言い方になる。",kana:"しょくばのかいわでは、んだってをつかうとすこししぜんないいかたになる。",romaji:"Shokuba no kaiwa deha, ndattewo tsukau to sukoshi shizen na iikata ninaru.",meaning:"Dalam percakapan kerja, memakai pola ini bisa membuat ungkapan terdengar lebih alami."},
      {jp:"駅前の店で店員さんが話しているのを聞いて、んだっての使い方がよく分かった。",kana:"えきまえのみせでてんいんさんがはなしているのをきいて、んだってのつかいかたがよくわかった。",romaji:"Ekimae no mise de ten'in sanga hanashi teirunowo kii te, ndatteno tsukaikata gayoku waka tta.",meaning:"Saat mendengar staf toko di depan stasiun berbicara, saya jadi lebih paham cara pakai pola ini."},
      {jp:"授業だけでなく、日常の場面でもんだっては意外とよく出てくる。",kana:"じゅぎょうだけでなく、にちじょうのばめんでもんだってはいがいとよくでてくる。",romaji:"Jugyou dakedenaku, nichijou no bamen demondatteha igai toyoku dete kuru.",meaning:"Bukan hanya di kelas, pola ini ternyata cukup sering muncul dalam keseharian."}
    ]}
  ]},

  // ── GR-N3-98: 〜かなあ ──
  {id:"GR-N3-98",level:"N3",title:"〜かなあ",summary:"Pola 〜かなあ untuk level N3, dengan contoh penggunaan dalam konteks sekolah, kantor, layanan publik, dan kehidupan sehari-hari di Jepang.",groups:[
    {name:"〜かなあ",description:"Contoh penggunaan 〜かなあ dalam konteks alami sehari-hari di Jepang.",sentences:[
      {jp:"この時間なら、もう窓口は空いているかなあ。",kana:"このじかんなら、もうまどぐちはあいているかなあ。",romaji:"Kono jikan nara, mou madoguchi ha ai teirukanaa.",meaning:"Kalau jam segini, saya penasaran apakah loketnya sudah sepi ya."},
      {jp:"来週までに部屋探しが終わるかなあ。",kana:"らいしゅうまでにへやさがしがおわるかなあ。",romaji:"Raishuu madeni heya sagashi ga owa rukanaa.",meaning:"Saya bertanya-tanya apakah pencarian kamar bisa selesai sebelum minggu depan."},
      {jp:"先生はこの案をどう思うかなあ。",kana:"せんせいはこのあんをどうおもうかなあ。",romaji:"Sensei hakono an wodou omou kanaa.",meaning:"Saya penasaran sensei akan berpikir apa tentang ide ini."},
      {jp:"今日は雨がやむかなあと思って、傘を持つか迷っている。",kana:"こんにちはあめがやむかなあとおもって、かさをもつかまよっている。",romaji:"Konnichiha ame gayamukanaato omotte, kasa wo motsu ka mayotsu teiru.",meaning:"Saya bertanya-tanya apakah hujannya akan reda hari ini, jadi saya bingung bawa payung atau tidak."},
      {jp:"初めての接客でも、なんとかやれるかなあ。",kana:"はじめてのせっきゃくでも、なんとかやれるかなあ。",romaji:"Hajimete no sekkyaku demo, nantokayarerukanaa.",meaning:"Saya bertanya-tanya apakah saya bisa menangani pelayanan walau ini pertama kalinya."}
    ]}
  ]},

  // ── GR-N3-99: 〜かもしれない ──
  {id:"GR-N3-99",level:"N3",title:"〜かもしれない",summary:"Pola 〜かもしれない untuk level N3, dengan contoh penggunaan dalam konteks sekolah, kantor, layanan publik, dan kehidupan sehari-hari di Jepang.",groups:[
    {name:"〜かもしれない",description:"Contoh penggunaan 〜かもしれない dalam konteks alami sehari-hari di Jepang.",sentences:[
      {jp:"この前の説明会では、かもしれないという表現も実際の場面で使われていた。",kana:"このまえのせつめいかいでは、かもしれないというひょうげんもじっさいのばめんでつかわれていた。",romaji:"Kono mae no setsumeikai deha, kamoshirenaitoiu hyougen mo jissai no bamen de tsukawa reteita.",meaning:"Pada sesi penjelasan sebelumnya, ungkapan ini juga dipakai dalam situasi nyata."},
      {jp:"区役所や学校でも、かもしれないのような言い方を見かけることがある。",kana:"くやくしょやがっこうでも、かもしれないのようないいかたをみかけることがある。",romaji:"Kuyakusho ya gakkou demo, kamoshirenainoyouna iikata wo mikake rukotogaaru.",meaning:"Di balai kota maupun sekolah, kadang terlihat cara ungkap seperti ini."},
      {jp:"職場の会話では、かもしれないを使うと少し自然な言い方になる。",kana:"しょくばのかいわでは、かもしれないをつかうとすこししぜんないいかたになる。",romaji:"Shokuba no kaiwa deha, kamoshirenaiwo tsukau to sukoshi shizen na iikata ninaru.",meaning:"Dalam percakapan kerja, memakai pola ini bisa membuat ungkapan terdengar lebih alami."},
      {jp:"駅前の店で店員さんが話しているのを聞いて、かもしれないの使い方がよく分かった。",kana:"えきまえのみせでてんいんさんがはなしているのをきいて、かもしれないのつかいかたがよくわかった。",romaji:"Ekimae no mise de ten'in sanga hanashi teirunowo kii te, kamoshirenaino tsukaikata gayoku waka tta.",meaning:"Saat mendengar staf toko di depan stasiun berbicara, saya jadi lebih paham cara pakai pola ini."},
      {jp:"授業だけでなく、日常の場面でもかもしれないは意外とよく出てくる。",kana:"じゅぎょうだけでなく、にちじょうのばめんでもかもしれないはいがいとよくでてくる。",romaji:"Jugyou dakedenaku, nichijou no bamen demokamoshirenaiha igai toyoku dete kuru.",meaning:"Bukan hanya di kelas, pola ini ternyata cukup sering muncul dalam keseharian."}
    ]}
  ]},

  // ── GR-N3-100: 〜に違いない ──
  {id:"GR-N3-100",level:"N3",title:"〜に違いない",summary:"Pola 〜に違いない untuk level N3, dengan contoh penggunaan dalam konteks sekolah, kantor, layanan publik, dan kehidupan sehari-hari di Jepang.",groups:[
    {name:"〜に違いない",description:"Contoh penggunaan 〜に違いない dalam konteks alami sehari-hari di Jepang.",sentences:[
      {jp:"留学生に違いない説明会が、大学のホールで開かれた。",kana:"りゅうがくせいにちがいないせつめいかいが、だいがくのほーるでひらかれた。",romaji:"Ryuugakusei ni chigai nai setsumeikai ga, daigaku no hooru de hiraka reta.",meaning:"Sesi penjelasan untuk mahasiswa asing diadakan di aula universitas."},
      {jp:"駅前の再開発に違いない住民向けの案内が配られた。",kana:"えきまえのさいかいはつにちがいないじゅうみんむけのあんないがくばられた。",romaji:"Ekimae no saikaihatsu ni chigai nai juumin muke no annai ga kubara reta.",meaning:"Pemberitahuan bagi warga terkait pembangunan ulang area depan stasiun dibagikan."},
      {jp:"この制度に違いない質問があれば、区役所の窓口で確認できる。",kana:"このせいどにちがいないしつもんがあれば、くやくしょのまどぐちでかくにんできる。",romaji:"Kono seido ni chigai nai shitsumon gaareba, kuyakusho no madoguchi de kakunin dekiru.",meaning:"Kalau ada pertanyaan terkait sistem ini, bisa ditanyakan di loket balai kota."},
      {jp:"外国人スタッフに違いない研修も、来月から始まる予定だ。",kana:"がいこくじんすたっふにちがいないけんしゅうも、らいげつからはじまるよていだ。",romaji:"Gaikokujin sutaffu ni chigai nai kenshuu mo, raigetsu kara hajima ru yotei da.",meaning:"Pelatihan untuk staf asing juga dijadwalkan mulai bulan depan."},
      {jp:"今回の変更点に違いない詳しい資料は、受付で受け取れる。",kana:"こんかいのへんこうてんにちがいないくわしいしりょうは、うけつけでうけとれる。",romaji:"Konkai no henkouten ni chigai nai kuwashii shiryou ha, uketsuke de uketore ru.",meaning:"Materi rinci terkait perubahan kali ini bisa diambil di meja penerima tamu."}
    ]}
  ]},

  // ── GR-N3-101: 〜しかない ──
  {id:"GR-N3-101",level:"N3",title:"〜しかない",summary:"Pola 〜しかない untuk level N3, dengan contoh penggunaan dalam konteks sekolah, kantor, layanan publik, dan kehidupan sehari-hari di Jepang.",groups:[
    {name:"〜しかない",description:"Contoh penggunaan 〜しかない dalam konteks alami sehari-hari di Jepang.",sentences:[
      {jp:"終電がなくなったので、今日はタクシーで帰るしかない。",kana:"しゅうでんがなくなったので、こんにちはたくしーでかえるしかない。",romaji:"Shuuden ganakunattanode, konnichiha takushii de kaeru shikanai.",meaning:"Karena kereta terakhir sudah tidak ada, hari ini saya tidak punya pilihan selain pulang naik taksi."},
      {jp:"必要書類が足りない以上、また来週出直すしかない。",kana:"ひつようしょるいがたりないいじょう、またらいしゅうでなおすしかない。",romaji:"Hitsuyoushorui ga tari nai ijou, mata raishuu denaosu shikanai.",meaning:"Karena dokumen yang dibutuhkan kurang, saya tidak punya pilihan selain datang lagi minggu depan."},
      {jp:"この時間は窓口が混むから、順番を待つしかない。",kana:"このじかんはまどぐちがこむから、じゅんばんをまつしかない。",romaji:"Kono jikan ha madoguchi ga komu kara, junban wo matsu shikanai.",meaning:"Jam segini loket memang ramai, jadi tidak ada pilihan selain menunggu giliran."},
      {jp:"会場までの道が工事中なら、遠回りするしかない。",kana:"かいじょうまでのみちがこうじちゅうなら、とおまわりするしかない。",romaji:"Kaijou madeno michi ga koujichuu nara, toomawari surushikanai.",meaning:"Kalau jalan ke venue sedang dibangun, mau tidak mau harus memutar."},
      {jp:"店長が休みなら、今日は自分が対応するしかない。",kana:"てんちょうがやすみなら、こんにちはじぶんがたいおうするしかない。",romaji:"Tenchou ga yasumi nara, konnichiha jibun ga taiou surushikanai.",meaning:"Kalau manajer toko libur, hari ini saya yang harus menangani semuanya."}
    ]}
  ]},

  // ── GR-N3-102: 〜じゃない ──
  {id:"GR-N3-102",level:"N3",title:"〜じゃない",summary:"Pola 〜じゃない untuk level N3, dengan contoh penggunaan dalam konteks sekolah, kantor, layanan publik, dan kehidupan sehari-hari di Jepang.",groups:[
    {name:"〜じゃない",description:"Contoh penggunaan 〜じゃない dalam konteks alami sehari-hari di Jepang.",sentences:[
      {jp:"この前の説明会では、じゃないという表現も実際の場面で使われていた。",kana:"このまえのせつめいかいでは、じゃないというひょうげんもじっさいのばめんでつかわれていた。",romaji:"Kono mae no setsumeikai deha, janaitoiu hyougen mo jissai no bamen de tsukawa reteita.",meaning:"Pada sesi penjelasan sebelumnya, ungkapan ini juga dipakai dalam situasi nyata."},
      {jp:"区役所や学校でも、じゃないのような言い方を見かけることがある。",kana:"くやくしょやがっこうでも、じゃないのようないいかたをみかけることがある。",romaji:"Kuyakusho ya gakkou demo, janainoyouna iikata wo mikake rukotogaaru.",meaning:"Di balai kota maupun sekolah, kadang terlihat cara ungkap seperti ini."},
      {jp:"職場の会話では、じゃないを使うと少し自然な言い方になる。",kana:"しょくばのかいわでは、じゃないをつかうとすこししぜんないいかたになる。",romaji:"Shokuba no kaiwa deha, janaiwo tsukau to sukoshi shizen na iikata ninaru.",meaning:"Dalam percakapan kerja, memakai pola ini bisa membuat ungkapan terdengar lebih alami."},
      {jp:"駅前の店で店員さんが話しているのを聞いて、じゃないの使い方がよく分かった。",kana:"えきまえのみせでてんいんさんがはなしているのをきいて、じゃないのつかいかたがよくわかった。",romaji:"Ekimae no mise de ten'in sanga hanashi teirunowo kii te, janaino tsukaikata gayoku waka tta.",meaning:"Saat mendengar staf toko di depan stasiun berbicara, saya jadi lebih paham cara pakai pola ini."},
      {jp:"授業だけでなく、日常の場面でもじゃないは意外とよく出てくる。",kana:"じゅぎょうだけでなく、にちじょうのばめんでもじゃないはいがいとよくでてくる。",romaji:"Jugyou dakedenaku, nichijou no bamen demojanaiha igai toyoku dete kuru.",meaning:"Bukan hanya di kelas, pola ini ternyata cukup sering muncul dalam keseharian."}
    ]}
  ]},

  // ── GR-N3-103: 〜ずに ──
  {id:"GR-N3-103",level:"N3",title:"〜ずに",summary:"Pola 〜ずに untuk level N3, dengan contoh penggunaan dalam konteks sekolah, kantor, layanan publik, dan kehidupan sehari-hari di Jepang.",groups:[
    {name:"〜ずに",description:"Contoh penggunaan 〜ずに dalam konteks alami sehari-hari di Jepang.",sentences:[
      {jp:"今日は寄り道せずに、まっすぐ家に帰る。",kana:"こんにちはよりみちせずに、まっすぐいえにかえる。",romaji:"Konnichiha yorimichi sezuni, massugu ie ni kaeru.",meaning:"Hari ini saya pulang langsung ke rumah tanpa mampir ke mana-mana."},
      {jp:"大声を出すことなく、落ち着いて案内してくれた。",kana:"おおごえをだすことなく、おちついてあんないしてくれた。",romaji:"Oogoe wo dasu kotonaku, ochitsui te annai shitekureta.",meaning:"Dia memberi arahan dengan tenang tanpa meninggikan suara."},
      {jp:"詳しく説明せずとも、表情を見れば事情は伝わった。",kana:"くわしくせつめいせずとも、ひょうじょうをみればじじょうはつたわった。",romaji:"Kuwashiku setsumeise zutomo, hyoujou wo mire ba jijou ha tsutawa tta.",meaning:"Tanpa penjelasan panjang pun, situasinya tersampaikan hanya dari ekspresi wajah."},
      {jp:"休憩を取らずに働き続けるのは体によくない。",kana:"きゅうけいをとらずにはたらきつづけるのはからだによくない。",romaji:"Kyuukei wo tora zuni hataraki tsuzuke runoha karada niyokunai.",meaning:"Terus bekerja tanpa istirahat tidak baik untuk tubuh."},
      {jp:"無理に訳すことなく、そのまま聞き取る練習も大事だ。",kana:"むりにやくすことなく、そのままききとるれんしゅうもだいじだ。",romaji:"Muri ni yakusu kotonaku, sonomama kiki toru renshuu mo daiji da.",meaning:"Berlatih menangkap makna tanpa langsung menerjemahkan juga penting."}
    ]}
  ]},

  // ── GR-N3-104: 〜わけではない ──
  {id:"GR-N3-104",level:"N3",title:"〜わけではない",summary:"Pola 〜わけではない untuk level N3, dengan contoh penggunaan dalam konteks sekolah, kantor, layanan publik, dan kehidupan sehari-hari di Jepang.",groups:[
    {name:"〜わけではない",description:"Contoh penggunaan 〜わけではない dalam konteks alami sehari-hari di Jepang.",sentences:[
      {jp:"この前の説明会では、わけではないという表現も実際の場面で使われていた。",kana:"このまえのせつめいかいでは、わけではないというひょうげんもじっさいのばめんでつかわれていた。",romaji:"Kono mae no setsumeikai deha, wakedehanaitoiu hyougen mo jissai no bamen de tsukawa reteita.",meaning:"Pada sesi penjelasan sebelumnya, ungkapan ini juga dipakai dalam situasi nyata."},
      {jp:"区役所や学校でも、わけではないのような言い方を見かけることがある。",kana:"くやくしょやがっこうでも、わけではないのようないいかたをみかけることがある。",romaji:"Kuyakusho ya gakkou demo, wakedehanainoyouna iikata wo mikake rukotogaaru.",meaning:"Di balai kota maupun sekolah, kadang terlihat cara ungkap seperti ini."},
      {jp:"職場の会話では、わけではないを使うと少し自然な言い方になる。",kana:"しょくばのかいわでは、わけではないをつかうとすこししぜんないいかたになる。",romaji:"Shokuba no kaiwa deha, wakedehanaiwo tsukau to sukoshi shizen na iikata ninaru.",meaning:"Dalam percakapan kerja, memakai pola ini bisa membuat ungkapan terdengar lebih alami."},
      {jp:"駅前の店で店員さんが話しているのを聞いて、わけではないの使い方がよく分かった。",kana:"えきまえのみせでてんいんさんがはなしているのをきいて、わけではないのつかいかたがよくわかった。",romaji:"Ekimae no mise de ten'in sanga hanashi teirunowo kii te, wakedehanaino tsukaikata gayoku waka tta.",meaning:"Saat mendengar staf toko di depan stasiun berbicara, saya jadi lebih paham cara pakai pola ini."},
      {jp:"授業だけでなく、日常の場面でもわけではないは意外とよく出てくる。",kana:"じゅぎょうだけでなく、にちじょうのばめんでもわけではないはいがいとよくでてくる。",romaji:"Jugyou dakedenaku, nichijou no bamen demowakedehanaiha igai toyoku dete kuru.",meaning:"Bukan hanya di kelas, pola ini ternyata cukup sering muncul dalam keseharian."}
    ]}
  ]},

  // ── GR-N3-105: 〜ことは〜が ──
  {id:"GR-N3-105",level:"N3",title:"〜ことは〜が",summary:"Pola 〜ことは〜が untuk level N3, dengan contoh penggunaan dalam konteks sekolah, kantor, layanan publik, dan kehidupan sehari-hari di Jepang.",groups:[
    {name:"〜ことは〜が",description:"Contoh penggunaan 〜ことは〜が dalam konteks alami sehari-hari di Jepang.",sentences:[
      {jp:"この前の説明会では、ことはがという表現も実際の場面で使われていた。",kana:"このまえのせつめいかいでは、ことはがというひょうげんもじっさいのばめんでつかわれていた。",romaji:"Kono mae no setsumeikai deha, kotohagatoiu hyougen mo jissai no bamen de tsukawa reteita.",meaning:"Pada sesi penjelasan sebelumnya, ungkapan ini juga dipakai dalam situasi nyata."},
      {jp:"区役所や学校でも、ことはがのような言い方を見かけることがある。",kana:"くやくしょやがっこうでも、ことはがのようないいかたをみかけることがある。",romaji:"Kuyakusho ya gakkou demo, kotohaganoyouna iikata wo mikake rukotogaaru.",meaning:"Di balai kota maupun sekolah, kadang terlihat cara ungkap seperti ini."},
      {jp:"職場の会話では、ことはがを使うと少し自然な言い方になる。",kana:"しょくばのかいわでは、ことはがをつかうとすこししぜんないいかたになる。",romaji:"Shokuba no kaiwa deha, kotohagawo tsukau to sukoshi shizen na iikata ninaru.",meaning:"Dalam percakapan kerja, memakai pola ini bisa membuat ungkapan terdengar lebih alami."},
      {jp:"駅前の店で店員さんが話しているのを聞いて、ことはがの使い方がよく分かった。",kana:"えきまえのみせでてんいんさんがはなしているのをきいて、ことはがのつかいかたがよくわかった。",romaji:"Ekimae no mise de ten'in sanga hanashi teirunowo kii te, kotohagano tsukaikata gayoku waka tta.",meaning:"Saat mendengar staf toko di depan stasiun berbicara, saya jadi lebih paham cara pakai pola ini."},
      {jp:"授業だけでなく、日常の場面でもことはがは意外とよく出てくる。",kana:"じゅぎょうだけでなく、にちじょうのばめんでもことはがはいがいとよくでてくる。",romaji:"Jugyou dakedenaku, nichijou no bamen demokotohagaha igai toyoku dete kuru.",meaning:"Bukan hanya di kelas, pola ini ternyata cukup sering muncul dalam keseharian."}
    ]}
  ]},

  // ── GR-N3-106: 〜ない ──
  {id:"GR-N3-106",level:"N3",title:"〜ない",summary:"Pola 〜ない untuk level N3, dengan contoh penggunaan dalam konteks sekolah, kantor, layanan publik, dan kehidupan sehari-hari di Jepang.",groups:[
    {name:"〜ない",description:"Contoh penggunaan 〜ない dalam konteks alami sehari-hari di Jepang.",sentences:[
      {jp:"この前の説明会では、ないという表現も実際の場面で使われていた。",kana:"このまえのせつめいかいでは、ないというひょうげんもじっさいのばめんでつかわれていた。",romaji:"Kono mae no setsumeikai deha, naitoiu hyougen mo jissai no bamen de tsukawa reteita.",meaning:"Pada sesi penjelasan sebelumnya, ungkapan ini juga dipakai dalam situasi nyata."},
      {jp:"区役所や学校でも、ないのような言い方を見かけることがある。",kana:"くやくしょやがっこうでも、ないのようないいかたをみかけることがある。",romaji:"Kuyakusho ya gakkou demo, nainoyouna iikata wo mikake rukotogaaru.",meaning:"Di balai kota maupun sekolah, kadang terlihat cara ungkap seperti ini."},
      {jp:"職場の会話では、ないを使うと少し自然な言い方になる。",kana:"しょくばのかいわでは、ないをつかうとすこししぜんないいかたになる。",romaji:"Shokuba no kaiwa deha, naiwo tsukau to sukoshi shizen na iikata ninaru.",meaning:"Dalam percakapan kerja, memakai pola ini bisa membuat ungkapan terdengar lebih alami."},
      {jp:"駅前の店で店員さんが話しているのを聞いて、ないの使い方がよく分かった。",kana:"えきまえのみせでてんいんさんがはなしているのをきいて、ないのつかいかたがよくわかった。",romaji:"Ekimae no mise de ten'in sanga hanashi teirunowo kii te, naino tsukaikata gayoku waka tta.",meaning:"Saat mendengar staf toko di depan stasiun berbicara, saya jadi lebih paham cara pakai pola ini."},
      {jp:"授業だけでなく、日常の場面でもないは意外とよく出てくる。",kana:"じゅぎょうだけでなく、にちじょうのばめんでもないはいがいとよくでてくる。",romaji:"Jugyou dakedenaku, nichijou no bamen demonaiha igai toyoku dete kuru.",meaning:"Bukan hanya di kelas, pola ini ternyata cukup sering muncul dalam keseharian."}
    ]}
  ]},

  // ── GR-N3-107: 〜とは限らない ──
  {id:"GR-N3-107",level:"N3",title:"〜とは限らない",summary:"Pola 〜とは限らない untuk level N3, dengan contoh penggunaan dalam konteks sekolah, kantor, layanan publik, dan kehidupan sehari-hari di Jepang.",groups:[
    {name:"〜とは限らない",description:"Contoh penggunaan 〜とは限らない dalam konteks alami sehari-hari di Jepang.",sentences:[
      {jp:"駅に着くと、ちょうど案内放送が始まった。",kana:"えきにつくと、ちょうどあんないほうそうがはじまった。",romaji:"Eki ni tsuku to, choudo annaihousou ga hajima tta.",meaning:"Begitu sampai di stasiun, pengumuman baru saja dimulai."},
      {jp:"春になると、この川沿いは散歩する人でにぎわう。",kana:"はるになると、このかわぞいはさんぽするにんでにぎわう。",romaji:"Haru ninaruto, kono kawazoi ha sanpo suru nin denigiwau.",meaning:"Begitu musim semi tiba, area tepi sungai ini ramai oleh orang yang berjalan-jalan."},
      {jp:"資料を読むと、今回の変更点がよく分かる。",kana:"しりょうをよむと、こんかいのへんこうてんがよくわかる。",romaji:"Shiryou wo yomu to, konkai no henkouten gayoku waka ru.",meaning:"Kalau membaca materinya, perubahan kali ini jadi mudah dipahami."},
      {jp:"彼の話し方を見ると、かなり緊張しているようだ。",kana:"かのはなしかたをみると、かなりきんちょうしているようだ。",romaji:"Kano hanashikata wo miru to, kanari kinchoushi teiruyouda.",meaning:"Melihat cara dia berbicara, tampaknya dia cukup tegang."},
      {jp:"この条件だと、申し込みは早い方がよさそうだ。",kana:"このじょうけんだと、もうしこみははやいほうがよさそうだ。",romaji:"Kono jouken dato, moushikomi ha hayai houga yosasouda.",meaning:"Kalau syaratnya seperti ini, tampaknya lebih baik mendaftar lebih cepat."}
    ]}
  ]},

  // ── GR-N3-108: 〜かわりに ──
  {id:"GR-N3-108",level:"N3",title:"〜かわりに",summary:"Pola 〜かわりに untuk level N3, dengan contoh penggunaan dalam konteks sekolah, kantor, layanan publik, dan kehidupan sehari-hari di Jepang.",groups:[
    {name:"〜かわりに",description:"Contoh penggunaan 〜かわりに dalam konteks alami sehari-hari di Jepang.",sentences:[
      {jp:"この前の説明会では、かわりにという表現も実際の場面で使われていた。",kana:"このまえのせつめいかいでは、かわりにというひょうげんもじっさいのばめんでつかわれていた。",romaji:"Kono mae no setsumeikai deha, kawarinitoiu hyougen mo jissai no bamen de tsukawa reteita.",meaning:"Pada sesi penjelasan sebelumnya, ungkapan ini juga dipakai dalam situasi nyata."},
      {jp:"区役所や学校でも、かわりにのような言い方を見かけることがある。",kana:"くやくしょやがっこうでも、かわりにのようないいかたをみかけることがある。",romaji:"Kuyakusho ya gakkou demo, kawarininoyouna iikata wo mikake rukotogaaru.",meaning:"Di balai kota maupun sekolah, kadang terlihat cara ungkap seperti ini."},
      {jp:"職場の会話では、かわりにを使うと少し自然な言い方になる。",kana:"しょくばのかいわでは、かわりにをつかうとすこししぜんないいかたになる。",romaji:"Shokuba no kaiwa deha, kawariniwo tsukau to sukoshi shizen na iikata ninaru.",meaning:"Dalam percakapan kerja, memakai pola ini bisa membuat ungkapan terdengar lebih alami."},
      {jp:"駅前の店で店員さんが話しているのを聞いて、かわりにの使い方がよく分かった。",kana:"えきまえのみせでてんいんさんがはなしているのをきいて、かわりにのつかいかたがよくわかった。",romaji:"Ekimae no mise de ten'in sanga hanashi teirunowo kii te, kawarinino tsukaikata gayoku waka tta.",meaning:"Saat mendengar staf toko di depan stasiun berbicara, saya jadi lebih paham cara pakai pola ini."},
      {jp:"授業だけでなく、日常の場面でもかわりには意外とよく出てくる。",kana:"じゅぎょうだけでなく、にちじょうのばめんでもかわりにはいがいとよくでてくる。",romaji:"Jugyou dakedenaku, nichijou no bamen demokawariniha igai toyoku dete kuru.",meaning:"Bukan hanya di kelas, pola ini ternyata cukup sering muncul dalam keseharian."}
    ]}
  ]},

  // ── GR-N3-109: 〜というより ──
  {id:"GR-N3-109",level:"N3",title:"〜というより",summary:"Pola 〜というより untuk level N3, dengan contoh penggunaan dalam konteks sekolah, kantor, layanan publik, dan kehidupan sehari-hari di Jepang.",groups:[
    {name:"〜というより",description:"Contoh penggunaan 〜というより dalam konteks alami sehari-hari di Jepang.",sentences:[
      {jp:"駅に着くと、ちょうど案内放送が始まった。",kana:"えきにつくと、ちょうどあんないほうそうがはじまった。",romaji:"Eki ni tsuku to, choudo annaihousou ga hajima tta.",meaning:"Begitu sampai di stasiun, pengumuman baru saja dimulai."},
      {jp:"春になると、この川沿いは散歩する人でにぎわう。",kana:"はるになると、このかわぞいはさんぽするにんでにぎわう。",romaji:"Haru ninaruto, kono kawazoi ha sanpo suru nin denigiwau.",meaning:"Begitu musim semi tiba, area tepi sungai ini ramai oleh orang yang berjalan-jalan."},
      {jp:"資料を読むと、今回の変更点がよく分かる。",kana:"しりょうをよむと、こんかいのへんこうてんがよくわかる。",romaji:"Shiryou wo yomu to, konkai no henkouten gayoku waka ru.",meaning:"Kalau membaca materinya, perubahan kali ini jadi mudah dipahami."},
      {jp:"彼の話し方を見ると、かなり緊張しているようだ。",kana:"かのはなしかたをみると、かなりきんちょうしているようだ。",romaji:"Kano hanashikata wo miru to, kanari kinchoushi teiruyouda.",meaning:"Melihat cara dia berbicara, tampaknya dia cukup tegang."},
      {jp:"この条件だと、申し込みは早い方がよさそうだ。",kana:"このじょうけんだと、もうしこみははやいほうがよさそうだ。",romaji:"Kono jouken dato, moushikomi ha hayai houga yosasouda.",meaning:"Kalau syaratnya seperti ini, tampaknya lebih baik mendaftar lebih cepat."}
    ]}
  ]},

  // ── GR-N3-110: 〜にかわって / 〜にかわり ──
  {id:"GR-N3-110",level:"N3",title:"〜にかわって / 〜にかわり",summary:"Pola 〜にかわって / 〜にかわり untuk level N3, dengan contoh penggunaan dalam konteks sekolah, kantor, layanan publik, dan kehidupan sehari-hari di Jepang.",groups:[
    {name:"〜にかわって / 〜にかわり",description:"Contoh penggunaan 〜にかわって / 〜にかわり dalam konteks alami sehari-hari di Jepang.",sentences:[
      {jp:"留学生にかわって説明会が、大学のホールで開かれた。",kana:"りゅうがくせいにかわってせつめいかいが、だいがくのほーるでひらかれた。",romaji:"Ryuugakusei nikawatte setsumeikai ga, daigaku no hooru de hiraka reta.",meaning:"Sesi penjelasan untuk mahasiswa asing diadakan di aula universitas."},
      {jp:"駅前の再開発にかわって住民向けの案内が配られた。",kana:"えきまえのさいかいはつにかわってじゅうみんむけのあんないがくばられた。",romaji:"Ekimae no saikaihatsu nikawatte juumin muke no annai ga kubara reta.",meaning:"Pemberitahuan bagi warga terkait pembangunan ulang area depan stasiun dibagikan."},
      {jp:"この制度にかわって質問があれば、区役所の窓口で確認できる。",kana:"このせいどにかわってしつもんがあれば、くやくしょのまどぐちでかくにんできる。",romaji:"Kono seido nikawatte shitsumon gaareba, kuyakusho no madoguchi de kakunin dekiru.",meaning:"Kalau ada pertanyaan terkait sistem ini, bisa ditanyakan di loket balai kota."},
      {jp:"外国人スタッフにかわって研修も、来月から始まる予定だ。",kana:"がいこくじんすたっふにかわってけんしゅうも、らいげつからはじまるよていだ。",romaji:"Gaikokujin sutaffu nikawatte kenshuu mo, raigetsu kara hajima ru yotei da.",meaning:"Pelatihan untuk staf asing juga dijadwalkan mulai bulan depan."},
      {jp:"今回の変更点にかわって詳しい資料は、受付で受け取れる。",kana:"こんかいのへんこうてんにかわってくわしいしりょうは、うけつけでうけとれる。",romaji:"Konkai no henkouten nikawatte kuwashii shiryou ha, uketsuke de uketore ru.",meaning:"Materi rinci terkait perubahan kali ini bisa diambil di meja penerima tamu."}
    ]}
  ]},

  // ── GR-N3-111: 〜にしては ──
  {id:"GR-N3-111",level:"N3",title:"〜にしては",summary:"Pola 〜にしては untuk level N3, dengan contoh penggunaan dalam konteks sekolah, kantor, layanan publik, dan kehidupan sehari-hari di Jepang.",groups:[
    {name:"〜にしては",description:"Contoh penggunaan 〜にしては dalam konteks alami sehari-hari di Jepang.",sentences:[
      {jp:"留学生にしては説明会が、大学のホールで開かれた。",kana:"りゅうがくせいにしてはせつめいかいが、だいがくのほーるでひらかれた。",romaji:"Ryuugakusei nishiteha setsumeikai ga, daigaku no hooru de hiraka reta.",meaning:"Sesi penjelasan untuk mahasiswa asing diadakan di aula universitas."},
      {jp:"駅前の再開発にしては住民向けの案内が配られた。",kana:"えきまえのさいかいはつにしてはじゅうみんむけのあんないがくばられた。",romaji:"Ekimae no saikaihatsu nishiteha juumin muke no annai ga kubara reta.",meaning:"Pemberitahuan bagi warga terkait pembangunan ulang area depan stasiun dibagikan."},
      {jp:"この制度にしては質問があれば、区役所の窓口で確認できる。",kana:"このせいどにしてはしつもんがあれば、くやくしょのまどぐちでかくにんできる。",romaji:"Kono seido nishiteha shitsumon gaareba, kuyakusho no madoguchi de kakunin dekiru.",meaning:"Kalau ada pertanyaan terkait sistem ini, bisa ditanyakan di loket balai kota."},
      {jp:"外国人スタッフにしては研修も、来月から始まる予定だ。",kana:"がいこくじんすたっふにしてはけんしゅうも、らいげつからはじまるよていだ。",romaji:"Gaikokujin sutaffu nishiteha kenshuu mo, raigetsu kara hajima ru yotei da.",meaning:"Pelatihan untuk staf asing juga dijadwalkan mulai bulan depan."},
      {jp:"今回の変更点にしては詳しい資料は、受付で受け取れる。",kana:"こんかいのへんこうてんにしてはくわしいしりょうは、うけつけでうけとれる。",romaji:"Konkai no henkouten nishiteha kuwashii shiryou ha, uketsuke de uketore ru.",meaning:"Materi rinci terkait perubahan kali ini bisa diambil di meja penerima tamu."}
    ]}
  ]},

  // ── GR-N3-112: 〜に対して② ──
  {id:"GR-N3-112",level:"N3",title:"〜に対して②",summary:"Pola 〜に対して② untuk level N3, dengan contoh penggunaan dalam konteks sekolah, kantor, layanan publik, dan kehidupan sehari-hari di Jepang.",groups:[
    {name:"〜に対して②",description:"Contoh penggunaan 〜に対して② dalam konteks alami sehari-hari di Jepang.",sentences:[
      {jp:"留学生に対して説明会が、大学のホールで開かれた。",kana:"りゅうがくせいにたいしてせつめいかいが、だいがくのほーるでひらかれた。",romaji:"Ryuugakusei ni taishi te setsumeikai ga, daigaku no hooru de hiraka reta.",meaning:"Sesi penjelasan untuk mahasiswa asing diadakan di aula universitas."},
      {jp:"駅前の再開発に対して住民向けの案内が配られた。",kana:"えきまえのさいかいはつにたいしてじゅうみんむけのあんないがくばられた。",romaji:"Ekimae no saikaihatsu ni taishi te juumin muke no annai ga kubara reta.",meaning:"Pemberitahuan bagi warga terkait pembangunan ulang area depan stasiun dibagikan."},
      {jp:"この制度に対して質問があれば、区役所の窓口で確認できる。",kana:"このせいどにたいしてしつもんがあれば、くやくしょのまどぐちでかくにんできる。",romaji:"Kono seido ni taishi te shitsumon gaareba, kuyakusho no madoguchi de kakunin dekiru.",meaning:"Kalau ada pertanyaan terkait sistem ini, bisa ditanyakan di loket balai kota."},
      {jp:"外国人スタッフに対して研修も、来月から始まる予定だ。",kana:"がいこくじんすたっふにたいしてけんしゅうも、らいげつからはじまるよていだ。",romaji:"Gaikokujin sutaffu ni taishi te kenshuu mo, raigetsu kara hajima ru yotei da.",meaning:"Pelatihan untuk staf asing juga dijadwalkan mulai bulan depan."},
      {jp:"今回の変更点に対して詳しい資料は、受付で受け取れる。",kana:"こんかいのへんこうてんにたいしてくわしいしりょうは、うけつけでうけとれる。",romaji:"Konkai no henkouten ni taishi te kuwashii shiryou ha, uketsuke de uketore ru.",meaning:"Materi rinci terkait perubahan kali ini bisa diambil di meja penerima tamu."}
    ]}
  ]},

  // ── GR-N3-113: 〜に比べて ──
  {id:"GR-N3-113",level:"N3",title:"〜に比べて",summary:"Pola 〜に比べて untuk level N3, dengan contoh penggunaan dalam konteks sekolah, kantor, layanan publik, dan kehidupan sehari-hari di Jepang.",groups:[
    {name:"〜に比べて",description:"Contoh penggunaan 〜に比べて dalam konteks alami sehari-hari di Jepang.",sentences:[
      {jp:"留学生に比べて説明会が、大学のホールで開かれた。",kana:"りゅうがくせいにくらべてせつめいかいが、だいがくのほーるでひらかれた。",romaji:"Ryuugakusei ni kurabe te setsumeikai ga, daigaku no hooru de hiraka reta.",meaning:"Sesi penjelasan untuk mahasiswa asing diadakan di aula universitas."},
      {jp:"駅前の再開発に比べて住民向けの案内が配られた。",kana:"えきまえのさいかいはつにくらべてじゅうみんむけのあんないがくばられた。",romaji:"Ekimae no saikaihatsu ni kurabe te juumin muke no annai ga kubara reta.",meaning:"Pemberitahuan bagi warga terkait pembangunan ulang area depan stasiun dibagikan."},
      {jp:"この制度に比べて質問があれば、区役所の窓口で確認できる。",kana:"このせいどにくらべてしつもんがあれば、くやくしょのまどぐちでかくにんできる。",romaji:"Kono seido ni kurabe te shitsumon gaareba, kuyakusho no madoguchi de kakunin dekiru.",meaning:"Kalau ada pertanyaan terkait sistem ini, bisa ditanyakan di loket balai kota."},
      {jp:"外国人スタッフに比べて研修も、来月から始まる予定だ。",kana:"がいこくじんすたっふにくらべてけんしゅうも、らいげつからはじまるよていだ。",romaji:"Gaikokujin sutaffu ni kurabe te kenshuu mo, raigetsu kara hajima ru yotei da.",meaning:"Pelatihan untuk staf asing juga dijadwalkan mulai bulan depan."},
      {jp:"今回の変更点に比べて詳しい資料は、受付で受け取れる。",kana:"こんかいのへんこうてんにくらべてくわしいしりょうは、うけつけでうけとれる。",romaji:"Konkai no henkouten ni kurabe te kuwashii shiryou ha, uketsuke de uketore ru.",meaning:"Materi rinci terkait perubahan kali ini bisa diambil di meja penerima tamu."}
    ]}
  ]},

  // ── GR-N3-114: 〜ほど…は…ない / 〜くらい…は…ない ──
  {id:"GR-N3-114",level:"N3",title:"〜ほど…は…ない / 〜くらい…は…ない",summary:"Pola 〜ほど…は…ない / 〜くらい…は…ない untuk level N3, dengan contoh penggunaan dalam konteks sekolah, kantor, layanan publik, dan kehidupan sehari-hari di Jepang.",groups:[
    {name:"〜ほど…は…ない / 〜くらい…は…ない",description:"Contoh penggunaan 〜ほど…は…ない / 〜くらい…は…ない dalam konteks alami sehari-hari di Jepang.",sentences:[
      {jp:"この前の説明会では、ほど…は…ないという表現も実際の場面で使われていた。",kana:"このまえのせつめいかいでは、ほど…は…ないというひょうげんもじっさいのばめんでつかわれていた。",romaji:"Kono mae no setsumeikai deha, hodo … ha … naitoiu hyougen mo jissai no bamen de tsukawa reteita.",meaning:"Pada sesi penjelasan sebelumnya, ungkapan ini juga dipakai dalam situasi nyata."},
      {jp:"区役所や学校でも、ほど…は…ないのような言い方を見かけることがある。",kana:"くやくしょやがっこうでも、ほど…は…ないのようないいかたをみかけることがある。",romaji:"Kuyakusho ya gakkou demo, hodo … ha … nainoyouna iikata wo mikake rukotogaaru.",meaning:"Di balai kota maupun sekolah, kadang terlihat cara ungkap seperti ini."},
      {jp:"職場の会話では、ほど…は…ないを使うと少し自然な言い方になる。",kana:"しょくばのかいわでは、ほど…は…ないをつかうとすこししぜんないいかたになる。",romaji:"Shokuba no kaiwa deha, hodo … ha … naiwo tsukau to sukoshi shizen na iikata ninaru.",meaning:"Dalam percakapan kerja, memakai pola ini bisa membuat ungkapan terdengar lebih alami."},
      {jp:"駅前の店で店員さんが話しているのを聞いて、ほど…は…ないの使い方がよく分かった。",kana:"えきまえのみせでてんいんさんがはなしているのをきいて、ほど…は…ないのつかいかたがよくわかった。",romaji:"Ekimae no mise de ten'in sanga hanashi teirunowo kii te, hodo … ha … naino tsukaikata gayoku waka tta.",meaning:"Saat mendengar staf toko di depan stasiun berbicara, saya jadi lebih paham cara pakai pola ini."},
      {jp:"授業だけでなく、日常の場面でもほど…は…ないは意外とよく出てくる。",kana:"じゅぎょうだけでなく、にちじょうのばめんでもほど…は…ないはいがいとよくでてくる。",romaji:"Jugyou dakedenaku, nichijou no bamen demohodo … ha … naiha igai toyoku dete kuru.",meaning:"Bukan hanya di kelas, pola ini ternyata cukup sering muncul dalam keseharian."}
    ]}
  ]},

  // ── GR-N3-115: 〜によって③ ──
  {id:"GR-N3-115",level:"N3",title:"〜によって③",summary:"Pola 〜によって③ untuk level N3, dengan contoh penggunaan dalam konteks sekolah, kantor, layanan publik, dan kehidupan sehari-hari di Jepang.",groups:[
    {name:"〜によって③",description:"Contoh penggunaan 〜によって③ dalam konteks alami sehari-hari di Jepang.",sentences:[
      {jp:"留学生によって説明会が、大学のホールで開かれた。",kana:"りゅうがくせいによってせつめいかいが、だいがくのほーるでひらかれた。",romaji:"Ryuugakusei niyotte setsumeikai ga, daigaku no hooru de hiraka reta.",meaning:"Sesi penjelasan untuk mahasiswa asing diadakan di aula universitas."},
      {jp:"駅前の再開発によって住民向けの案内が配られた。",kana:"えきまえのさいかいはつによってじゅうみんむけのあんないがくばられた。",romaji:"Ekimae no saikaihatsu niyotte juumin muke no annai ga kubara reta.",meaning:"Pemberitahuan bagi warga terkait pembangunan ulang area depan stasiun dibagikan."},
      {jp:"この制度によって質問があれば、区役所の窓口で確認できる。",kana:"このせいどによってしつもんがあれば、くやくしょのまどぐちでかくにんできる。",romaji:"Kono seido niyotte shitsumon gaareba, kuyakusho no madoguchi de kakunin dekiru.",meaning:"Kalau ada pertanyaan terkait sistem ini, bisa ditanyakan di loket balai kota."},
      {jp:"外国人スタッフによって研修も、来月から始まる予定だ。",kana:"がいこくじんすたっふによってけんしゅうも、らいげつからはじまるよていだ。",romaji:"Gaikokujin sutaffu niyotte kenshuu mo, raigetsu kara hajima ru yotei da.",meaning:"Pelatihan untuk staf asing juga dijadwalkan mulai bulan depan."},
      {jp:"今回の変更点によって詳しい資料は、受付で受け取れる。",kana:"こんかいのへんこうてんによってくわしいしりょうは、うけつけでうけとれる。",romaji:"Konkai no henkouten niyotte kuwashii shiryou ha, uketsuke de uketore ru.",meaning:"Materi rinci terkait perubahan kali ini bisa diambil di meja penerima tamu."}
    ]}
  ]},

  // ── GR-N3-116: 〜わりに(は) ──
  {id:"GR-N3-116",level:"N3",title:"〜わりに(は)",summary:"Pola 〜わりに(は) untuk level N3, dengan contoh penggunaan dalam konteks sekolah, kantor, layanan publik, dan kehidupan sehari-hari di Jepang.",groups:[
    {name:"〜わりに(は)",description:"Contoh penggunaan 〜わりに(は) dalam konteks alami sehari-hari di Jepang.",sentences:[
      {jp:"この前の説明会では、わりにという表現も実際の場面で使われていた。",kana:"このまえのせつめいかいでは、わりにというひょうげんもじっさいのばめんでつかわれていた。",romaji:"Kono mae no setsumeikai deha, warinitoiu hyougen mo jissai no bamen de tsukawa reteita.",meaning:"Pada sesi penjelasan sebelumnya, ungkapan ini juga dipakai dalam situasi nyata."},
      {jp:"区役所や学校でも、わりにのような言い方を見かけることがある。",kana:"くやくしょやがっこうでも、わりにのようないいかたをみかけることがある。",romaji:"Kuyakusho ya gakkou demo, warininoyouna iikata wo mikake rukotogaaru.",meaning:"Di balai kota maupun sekolah, kadang terlihat cara ungkap seperti ini."},
      {jp:"職場の会話では、わりにを使うと少し自然な言い方になる。",kana:"しょくばのかいわでは、わりにをつかうとすこししぜんないいかたになる。",romaji:"Shokuba no kaiwa deha, wariniwo tsukau to sukoshi shizen na iikata ninaru.",meaning:"Dalam percakapan kerja, memakai pola ini bisa membuat ungkapan terdengar lebih alami."},
      {jp:"駅前の店で店員さんが話しているのを聞いて、わりにの使い方がよく分かった。",kana:"えきまえのみせでてんいんさんがはなしているのをきいて、わりにのつかいかたがよくわかった。",romaji:"Ekimae no mise de ten'in sanga hanashi teirunowo kii te, warinino tsukaikata gayoku waka tta.",meaning:"Saat mendengar staf toko di depan stasiun berbicara, saya jadi lebih paham cara pakai pola ini."},
      {jp:"授業だけでなく、日常の場面でもわりには意外とよく出てくる。",kana:"じゅぎょうだけでなく、にちじょうのばめんでもわりにはいがいとよくでてくる。",romaji:"Jugyou dakedenaku, nichijou no bamen demowariniha igai toyoku dete kuru.",meaning:"Bukan hanya di kelas, pola ini ternyata cukup sering muncul dalam keseharian."}
    ]}
  ]},

  // ── GR-N3-117: 〜というのは ──
  {id:"GR-N3-117",level:"N3",title:"〜というのは",summary:"Pola 〜というのは untuk level N3, dengan contoh penggunaan dalam konteks sekolah, kantor, layanan publik, dan kehidupan sehari-hari di Jepang.",groups:[
    {name:"〜というのは",description:"Contoh penggunaan 〜というのは dalam konteks alami sehari-hari di Jepang.",sentences:[
      {jp:"駅に着くと、ちょうど案内放送が始まった。",kana:"えきにつくと、ちょうどあんないほうそうがはじまった。",romaji:"Eki ni tsuku to, choudo annaihousou ga hajima tta.",meaning:"Begitu sampai di stasiun, pengumuman baru saja dimulai."},
      {jp:"春になると、この川沿いは散歩する人でにぎわう。",kana:"はるになると、このかわぞいはさんぽするにんでにぎわう。",romaji:"Haru ninaruto, kono kawazoi ha sanpo suru nin denigiwau.",meaning:"Begitu musim semi tiba, area tepi sungai ini ramai oleh orang yang berjalan-jalan."},
      {jp:"資料を読むと、今回の変更点がよく分かる。",kana:"しりょうをよむと、こんかいのへんこうてんがよくわかる。",romaji:"Shiryou wo yomu to, konkai no henkouten gayoku waka ru.",meaning:"Kalau membaca materinya, perubahan kali ini jadi mudah dipahami."},
      {jp:"彼の話し方を見ると、かなり緊張しているようだ。",kana:"かのはなしかたをみると、かなりきんちょうしているようだ。",romaji:"Kano hanashikata wo miru to, kanari kinchoushi teiruyouda.",meaning:"Melihat cara dia berbicara, tampaknya dia cukup tegang."},
      {jp:"この条件だと、申し込みは早い方がよさそうだ。",kana:"このじょうけんだと、もうしこみははやいほうがよさそうだ。",romaji:"Kono jouken dato, moushikomi ha hayai houga yosasouda.",meaning:"Kalau syaratnya seperti ini, tampaknya lebih baik mendaftar lebih cepat."}
    ]}
  ]},

  // ── GR-N3-118: 〜といっても ──
  {id:"GR-N3-118",level:"N3",title:"〜といっても",summary:"Pola 〜といっても untuk level N3, dengan contoh penggunaan dalam konteks sekolah, kantor, layanan publik, dan kehidupan sehari-hari di Jepang.",groups:[
    {name:"〜といっても",description:"Contoh penggunaan 〜といっても dalam konteks alami sehari-hari di Jepang.",sentences:[
      {jp:"駅に着くと、ちょうど案内放送が始まった。",kana:"えきにつくと、ちょうどあんないほうそうがはじまった。",romaji:"Eki ni tsuku to, choudo annaihousou ga hajima tta.",meaning:"Begitu sampai di stasiun, pengumuman baru saja dimulai."},
      {jp:"春になると、この川沿いは散歩する人でにぎわう。",kana:"はるになると、このかわぞいはさんぽするにんでにぎわう。",romaji:"Haru ninaruto, kono kawazoi ha sanpo suru nin denigiwau.",meaning:"Begitu musim semi tiba, area tepi sungai ini ramai oleh orang yang berjalan-jalan."},
      {jp:"資料を読むと、今回の変更点がよく分かる。",kana:"しりょうをよむと、こんかいのへんこうてんがよくわかる。",romaji:"Shiryou wo yomu to, konkai no henkouten gayoku waka ru.",meaning:"Kalau membaca materinya, perubahan kali ini jadi mudah dipahami."},
      {jp:"彼の話し方を見ると、かなり緊張しているようだ。",kana:"かのはなしかたをみると、かなりきんちょうしているようだ。",romaji:"Kano hanashikata wo miru to, kanari kinchoushi teiruyouda.",meaning:"Melihat cara dia berbicara, tampaknya dia cukup tegang."},
      {jp:"この条件だと、申し込みは早い方がよさそうだ。",kana:"このじょうけんだと、もうしこみははやいほうがよさそうだ。",romaji:"Kono jouken dato, moushikomi ha hayai houga yosasouda.",meaning:"Kalau syaratnya seperti ini, tampaknya lebih baik mendaftar lebih cepat."}
    ]}
  ]},

  // ── GR-N3-119: 〜に関して / 関する ──
  {id:"GR-N3-119",level:"N3",title:"〜に関して / 関する",summary:"Pola 〜に関して / 関する untuk level N3, dengan contoh penggunaan dalam konteks sekolah, kantor, layanan publik, dan kehidupan sehari-hari di Jepang.",groups:[
    {name:"〜に関して / 関する",description:"Contoh penggunaan 〜に関して / 関する dalam konteks alami sehari-hari di Jepang.",sentences:[
      {jp:"留学生について説明会が、大学のホールで開かれた。",kana:"りゅうがくせいについてせつめいかいが、だいがくのほーるでひらかれた。",romaji:"Ryuugakusei nitsuite setsumeikai ga, daigaku no hooru de hiraka reta.",meaning:"Sesi penjelasan untuk mahasiswa asing diadakan di aula universitas."},
      {jp:"駅前の再開発について住民向けの案内が配られた。",kana:"えきまえのさいかいはつについてじゅうみんむけのあんないがくばられた。",romaji:"Ekimae no saikaihatsu nitsuite juumin muke no annai ga kubara reta.",meaning:"Pemberitahuan bagi warga terkait pembangunan ulang area depan stasiun dibagikan."},
      {jp:"この制度について質問があれば、区役所の窓口で確認できる。",kana:"このせいどについてしつもんがあれば、くやくしょのまどぐちでかくにんできる。",romaji:"Kono seido nitsuite shitsumon gaareba, kuyakusho no madoguchi de kakunin dekiru.",meaning:"Kalau ada pertanyaan terkait sistem ini, bisa ditanyakan di loket balai kota."},
      {jp:"外国人スタッフについて研修も、来月から始まる予定だ。",kana:"がいこくじんすたっふについてけんしゅうも、らいげつからはじまるよていだ。",romaji:"Gaikokujin sutaffu nitsuite kenshuu mo, raigetsu kara hajima ru yotei da.",meaning:"Pelatihan untuk staf asing juga dijadwalkan mulai bulan depan."},
      {jp:"今回の変更点について詳しい資料は、受付で受け取れる。",kana:"こんかいのへんこうてんについてくわしいしりょうは、うけつけでうけとれる。",romaji:"Konkai no henkouten nitsuite kuwashii shiryou ha, uketsuke de uketore ru.",meaning:"Materi rinci terkait perubahan kali ini bisa diambil di meja penerima tamu."}
    ]}
  ]},

  // ── GR-N2-01: 〜ものの / とはいうものの ──
  {id:"GR-N2-01",level:"N2",title:"〜ものの / とはいうものの",summary:"Pola 〜ものの / とはいうものの untuk level N2, dengan contoh penggunaan dalam konteks sekolah, kantor, layanan publik, dan kehidupan sehari-hari di Jepang.",groups:[
    {name:"〜ものの / とはいうものの",description:"Contoh penggunaan 〜ものの / とはいうものの dalam konteks alami sehari-hari di Jepang.",sentences:[
      {jp:"この前の説明会では、もののという表現も実際の場面で使われていた。",kana:"このまえのせつめいかいでは、もののというひょうげんもじっさいのばめんでつかわれていた。",romaji:"Kono mae no setsumeikai deha, mononotoiu hyougen mo jissai no bamen de tsukawa reteita.",meaning:"Pada sesi penjelasan sebelumnya, ungkapan ini juga dipakai dalam situasi nyata."},
      {jp:"区役所や学校でも、ものののような言い方を見かけることがある。",kana:"くやくしょやがっこうでも、ものののようないいかたをみかけることがある。",romaji:"Kuyakusho ya gakkou demo, monononoyouna iikata wo mikake rukotogaaru.",meaning:"Di balai kota maupun sekolah, kadang terlihat cara ungkap seperti ini."},
      {jp:"職場の会話では、もののを使うと少し自然な言い方になる。",kana:"しょくばのかいわでは、もののをつかうとすこししぜんないいかたになる。",romaji:"Shokuba no kaiwa deha, mononowo tsukau to sukoshi shizen na iikata ninaru.",meaning:"Dalam percakapan kerja, memakai pola ini bisa membuat ungkapan terdengar lebih alami."},
      {jp:"駅前の店で店員さんが話しているのを聞いて、もののの使い方がよく分かった。",kana:"えきまえのみせでてんいんさんがはなしているのをきいて、ものののつかいかたがよくわかった。",romaji:"Ekimae no mise de ten'in sanga hanashi teirunowo kii te, mononono tsukaikata gayoku waka tta.",meaning:"Saat mendengar staf toko di depan stasiun berbicara, saya jadi lebih paham cara pakai pola ini."},
      {jp:"授業だけでなく、日常の場面でももののは意外とよく出てくる。",kana:"じゅぎょうだけでなく、にちじょうのばめんでももののはいがいとよくでてくる。",romaji:"Jugyou dakedenaku, nichijou no bamen demomononoha igai toyoku dete kuru.",meaning:"Bukan hanya di kelas, pola ini ternyata cukup sering muncul dalam keseharian."}
    ]}
  ]},

  // ── GR-N2-02: 〜にもかかわらず ──
  {id:"GR-N2-02",level:"N2",title:"〜にもかかわらず",summary:"Pola 〜にもかかわらず untuk level N2, dengan contoh penggunaan dalam konteks sekolah, kantor, layanan publik, dan kehidupan sehari-hari di Jepang.",groups:[
    {name:"〜にもかかわらず",description:"Contoh penggunaan 〜にもかかわらず dalam konteks alami sehari-hari di Jepang.",sentences:[
      {jp:"留学生にもかかわらず説明会が、大学のホールで開かれた。",kana:"りゅうがくせいにもかかわらずせつめいかいが、だいがくのほーるでひらかれた。",romaji:"Ryuugakusei nimokakawarazu setsumeikai ga, daigaku no hooru de hiraka reta.",meaning:"Sesi penjelasan untuk mahasiswa asing diadakan di aula universitas."},
      {jp:"駅前の再開発にもかかわらず住民向けの案内が配られた。",kana:"えきまえのさいかいはつにもかかわらずじゅうみんむけのあんないがくばられた。",romaji:"Ekimae no saikaihatsu nimokakawarazu juumin muke no annai ga kubara reta.",meaning:"Pemberitahuan bagi warga terkait pembangunan ulang area depan stasiun dibagikan."},
      {jp:"この制度にもかかわらず質問があれば、区役所の窓口で確認できる。",kana:"このせいどにもかかわらずしつもんがあれば、くやくしょのまどぐちでかくにんできる。",romaji:"Kono seido nimokakawarazu shitsumon gaareba, kuyakusho no madoguchi de kakunin dekiru.",meaning:"Kalau ada pertanyaan terkait sistem ini, bisa ditanyakan di loket balai kota."},
      {jp:"外国人スタッフにもかかわらず研修も、来月から始まる予定だ。",kana:"がいこくじんすたっふにもかかわらずけんしゅうも、らいげつからはじまるよていだ。",romaji:"Gaikokujin sutaffu nimokakawarazu kenshuu mo, raigetsu kara hajima ru yotei da.",meaning:"Pelatihan untuk staf asing juga dijadwalkan mulai bulan depan."},
      {jp:"今回の変更点にもかかわらず詳しい資料は、受付で受け取れる。",kana:"こんかいのへんこうてんにもかかわらずくわしいしりょうは、うけつけでうけとれる。",romaji:"Konkai no henkouten nimokakawarazu kuwashii shiryou ha, uketsuke de uketore ru.",meaning:"Materi rinci terkait perubahan kali ini bisa diambil di meja penerima tamu."}
    ]}
  ]},

  // ── GR-N2-03: 〜ながら(も) ──
  {id:"GR-N2-03",level:"N2",title:"〜ながら(も)",summary:"Pola 〜ながら(も) untuk level N2, dengan contoh penggunaan dalam konteks sekolah, kantor, layanan publik, dan kehidupan sehari-hari di Jepang.",groups:[
    {name:"〜ながら(も)",description:"Contoh penggunaan 〜ながら(も) dalam konteks alami sehari-hari di Jepang.",sentences:[
      {jp:"この前の説明会では、ながら(も)という表現も実際の場面で使われていた。",kana:"このまえのせつめいかいでは、ながら(も)というひょうげんもじっさいのばめんでつかわれていた。",romaji:"Kono mae no setsumeikai deha, nagara ( mo ) toiu hyougen mo jissai no bamen de tsukawa reteita.",meaning:"Pada sesi penjelasan sebelumnya, ungkapan ini juga dipakai dalam situasi nyata."},
      {jp:"区役所や学校でも、ながら(も)のような言い方を見かけることがある。",kana:"くやくしょやがっこうでも、ながら(も)のようないいかたをみかけることがある。",romaji:"Kuyakusho ya gakkou demo, nagara ( mo ) noyouna iikata wo mikake rukotogaaru.",meaning:"Di balai kota maupun sekolah, kadang terlihat cara ungkap seperti ini."},
      {jp:"職場の会話では、ながら(も)を使うと少し自然な言い方になる。",kana:"しょくばのかいわでは、ながら(も)をつかうとすこししぜんないいかたになる。",romaji:"Shokuba no kaiwa deha, nagara ( mo ) wo tsukau to sukoshi shizen na iikata ninaru.",meaning:"Dalam percakapan kerja, memakai pola ini bisa membuat ungkapan terdengar lebih alami."},
      {jp:"駅前の店で店員さんが話しているのを聞いて、ながら(も)の使い方がよく分かった。",kana:"えきまえのみせでてんいんさんがはなしているのをきいて、ながら(も)のつかいかたがよくわかった。",romaji:"Ekimae no mise de ten'in sanga hanashi teirunowo kii te, nagara ( mo ) no tsukaikata gayoku waka tta.",meaning:"Saat mendengar staf toko di depan stasiun berbicara, saya jadi lebih paham cara pakai pola ini."},
      {jp:"授業だけでなく、日常の場面でもながら(も)は意外とよく出てくる。",kana:"じゅぎょうだけでなく、にちじょうのばめんでもながら(も)はいがいとよくでてくる。",romaji:"Jugyou dakedenaku, nichijou no bamen demonagara ( mo ) ha igai toyoku dete kuru.",meaning:"Bukan hanya di kelas, pola ini ternyata cukup sering muncul dalam keseharian."}
    ]}
  ]},

  // ── GR-N2-04: 〜つつ(も) ──
  {id:"GR-N2-04",level:"N2",title:"〜つつ(も)",summary:"Pola 〜つつ(も) untuk level N2, dengan contoh penggunaan dalam konteks sekolah, kantor, layanan publik, dan kehidupan sehari-hari di Jepang.",groups:[
    {name:"〜つつ(も)",description:"Contoh penggunaan 〜つつ(も) dalam konteks alami sehari-hari di Jepang.",sentences:[
      {jp:"この前の説明会では、つつ(も)という表現も実際の場面で使われていた。",kana:"このまえのせつめいかいでは、つつ(も)というひょうげんもじっさいのばめんでつかわれていた。",romaji:"Kono mae no setsumeikai deha, tsutsu ( mo ) toiu hyougen mo jissai no bamen de tsukawa reteita.",meaning:"Pada sesi penjelasan sebelumnya, ungkapan ini juga dipakai dalam situasi nyata."},
      {jp:"区役所や学校でも、つつ(も)のような言い方を見かけることがある。",kana:"くやくしょやがっこうでも、つつ(も)のようないいかたをみかけることがある。",romaji:"Kuyakusho ya gakkou demo, tsutsu ( mo ) noyouna iikata wo mikake rukotogaaru.",meaning:"Di balai kota maupun sekolah, kadang terlihat cara ungkap seperti ini."},
      {jp:"職場の会話では、つつ(も)を使うと少し自然な言い方になる。",kana:"しょくばのかいわでは、つつ(も)をつかうとすこししぜんないいかたになる。",romaji:"Shokuba no kaiwa deha, tsutsu ( mo ) wo tsukau to sukoshi shizen na iikata ninaru.",meaning:"Dalam percakapan kerja, memakai pola ini bisa membuat ungkapan terdengar lebih alami."},
      {jp:"駅前の店で店員さんが話しているのを聞いて、つつ(も)の使い方がよく分かった。",kana:"えきまえのみせでてんいんさんがはなしているのをきいて、つつ(も)のつかいかたがよくわかった。",romaji:"Ekimae no mise de ten'in sanga hanashi teirunowo kii te, tsutsu ( mo ) no tsukaikata gayoku waka tta.",meaning:"Saat mendengar staf toko di depan stasiun berbicara, saya jadi lebih paham cara pakai pola ini."},
      {jp:"授業だけでなく、日常の場面でもつつ(も)は意外とよく出てくる。",kana:"じゅぎょうだけでなく、にちじょうのばめんでもつつ(も)はいがいとよくでてくる。",romaji:"Jugyou dakedenaku, nichijou no bamen demotsutsu ( mo ) ha igai toyoku dete kuru.",meaning:"Bukan hanya di kelas, pola ini ternyata cukup sering muncul dalam keseharian."}
    ]}
  ]},

  // ── GR-N2-05: 〜にかかわらず / にかかわりなく ──
  {id:"GR-N2-05",level:"N2",title:"〜にかかわらず / にかかわりなく",summary:"Pola 〜にかかわらず / にかかわりなく untuk level N2, dengan contoh penggunaan dalam konteks sekolah, kantor, layanan publik, dan kehidupan sehari-hari di Jepang.",groups:[
    {name:"〜にかかわらず / にかかわりなく",description:"Contoh penggunaan 〜にかかわらず / にかかわりなく dalam konteks alami sehari-hari di Jepang.",sentences:[
      {jp:"留学生にかかわらず説明会が、大学のホールで開かれた。",kana:"りゅうがくせいにかかわらずせつめいかいが、だいがくのほーるでひらかれた。",romaji:"Ryuugakusei nikakawarazu setsumeikai ga, daigaku no hooru de hiraka reta.",meaning:"Sesi penjelasan untuk mahasiswa asing diadakan di aula universitas."},
      {jp:"駅前の再開発にかかわらず住民向けの案内が配られた。",kana:"えきまえのさいかいはつにかかわらずじゅうみんむけのあんないがくばられた。",romaji:"Ekimae no saikaihatsu nikakawarazu juumin muke no annai ga kubara reta.",meaning:"Pemberitahuan bagi warga terkait pembangunan ulang area depan stasiun dibagikan."},
      {jp:"この制度にかかわらず質問があれば、区役所の窓口で確認できる。",kana:"このせいどにかかわらずしつもんがあれば、くやくしょのまどぐちでかくにんできる。",romaji:"Kono seido nikakawarazu shitsumon gaareba, kuyakusho no madoguchi de kakunin dekiru.",meaning:"Kalau ada pertanyaan terkait sistem ini, bisa ditanyakan di loket balai kota."},
      {jp:"外国人スタッフにかかわらず研修も、来月から始まる予定だ。",kana:"がいこくじんすたっふにかかわらずけんしゅうも、らいげつからはじまるよていだ。",romaji:"Gaikokujin sutaffu nikakawarazu kenshuu mo, raigetsu kara hajima ru yotei da.",meaning:"Pelatihan untuk staf asing juga dijadwalkan mulai bulan depan."},
      {jp:"今回の変更点にかかわらず詳しい資料は、受付で受け取れる。",kana:"こんかいのへんこうてんにかかわらずくわしいしりょうは、うけつけでうけとれる。",romaji:"Konkai no henkouten nikakawarazu kuwashii shiryou ha, uketsuke de uketore ru.",meaning:"Materi rinci terkait perubahan kali ini bisa diambil di meja penerima tamu."}
    ]}
  ]},

  // ── GR-N2-06: 〜からといって / からって ──
  {id:"GR-N2-06",level:"N2",title:"〜からといって / からって",summary:"Pola 〜からといって / からって untuk level N2, dengan contoh penggunaan dalam konteks sekolah, kantor, layanan publik, dan kehidupan sehari-hari di Jepang.",groups:[
    {name:"〜からといって / からって",description:"Contoh penggunaan 〜からといって / からって dalam konteks alami sehari-hari di Jepang.",sentences:[
      {jp:"この前の説明会では、からといってという表現も実際の場面で使われていた。",kana:"このまえのせつめいかいでは、からといってというひょうげんもじっさいのばめんでつかわれていた。",romaji:"Kono mae no setsumeikai deha, karatoittetoiu hyougen mo jissai no bamen de tsukawa reteita.",meaning:"Pada sesi penjelasan sebelumnya, ungkapan ini juga dipakai dalam situasi nyata."},
      {jp:"区役所や学校でも、からといってのような言い方を見かけることがある。",kana:"くやくしょやがっこうでも、からといってのようないいかたをみかけることがある。",romaji:"Kuyakusho ya gakkou demo, karatoittenoyouna iikata wo mikake rukotogaaru.",meaning:"Di balai kota maupun sekolah, kadang terlihat cara ungkap seperti ini."},
      {jp:"職場の会話では、からといってを使うと少し自然な言い方になる。",kana:"しょくばのかいわでは、からといってをつかうとすこししぜんないいかたになる。",romaji:"Shokuba no kaiwa deha, karatoittewo tsukau to sukoshi shizen na iikata ninaru.",meaning:"Dalam percakapan kerja, memakai pola ini bisa membuat ungkapan terdengar lebih alami."},
      {jp:"駅前の店で店員さんが話しているのを聞いて、からといっての使い方がよく分かった。",kana:"えきまえのみせでてんいんさんがはなしているのをきいて、からといってのつかいかたがよくわかった。",romaji:"Ekimae no mise de ten'in sanga hanashi teirunowo kii te, karatoitteno tsukaikata gayoku waka tta.",meaning:"Saat mendengar staf toko di depan stasiun berbicara, saya jadi lebih paham cara pakai pola ini."},
      {jp:"授業だけでなく、日常の場面でもからといっては意外とよく出てくる。",kana:"じゅぎょうだけでなく、にちじょうのばめんでもからといってはいがいとよくでてくる。",romaji:"Jugyou dakedenaku, nichijou no bamen demokaratoitteha igai toyoku dete kuru.",meaning:"Bukan hanya di kelas, pola ini ternyata cukup sering muncul dalam keseharian."}
    ]}
  ]},

  // ── GR-N2-07: 〜にしても / にしろ / にせよ ──
  {id:"GR-N2-07",level:"N2",title:"〜にしても / にしろ / にせよ",summary:"Pola 〜にしても / にしろ / にせよ untuk level N2, dengan contoh penggunaan dalam konteks sekolah, kantor, layanan publik, dan kehidupan sehari-hari di Jepang.",groups:[
    {name:"〜にしても / にしろ / にせよ",description:"Contoh penggunaan 〜にしても / にしろ / にせよ dalam konteks alami sehari-hari di Jepang.",sentences:[
      {jp:"留学生にしても説明会が、大学のホールで開かれた。",kana:"りゅうがくせいにしてもせつめいかいが、だいがくのほーるでひらかれた。",romaji:"Ryuugakusei nishitemo setsumeikai ga, daigaku no hooru de hiraka reta.",meaning:"Sesi penjelasan untuk mahasiswa asing diadakan di aula universitas."},
      {jp:"駅前の再開発にしても住民向けの案内が配られた。",kana:"えきまえのさいかいはつにしてもじゅうみんむけのあんないがくばられた。",romaji:"Ekimae no saikaihatsu nishitemo juumin muke no annai ga kubara reta.",meaning:"Pemberitahuan bagi warga terkait pembangunan ulang area depan stasiun dibagikan."},
      {jp:"この制度にしても質問があれば、区役所の窓口で確認できる。",kana:"このせいどにしてもしつもんがあれば、くやくしょのまどぐちでかくにんできる。",romaji:"Kono seido nishitemo shitsumon gaareba, kuyakusho no madoguchi de kakunin dekiru.",meaning:"Kalau ada pertanyaan terkait sistem ini, bisa ditanyakan di loket balai kota."},
      {jp:"外国人スタッフにしても研修も、来月から始まる予定だ。",kana:"がいこくじんすたっふにしてもけんしゅうも、らいげつからはじまるよていだ。",romaji:"Gaikokujin sutaffu nishitemo kenshuu mo, raigetsu kara hajima ru yotei da.",meaning:"Pelatihan untuk staf asing juga dijadwalkan mulai bulan depan."},
      {jp:"今回の変更点にしても詳しい資料は、受付で受け取れる。",kana:"こんかいのへんこうてんにしてもくわしいしりょうは、うけつけでうけとれる。",romaji:"Konkai no henkouten nishitemo kuwashii shiryou ha, uketsuke de uketore ru.",meaning:"Materi rinci terkait perubahan kali ini bisa diambil di meja penerima tamu."}
    ]}
  ]},

  // ── GR-N2-08: 〜かのようだ / かのように ──
  {id:"GR-N2-08",level:"N2",title:"〜かのようだ / かのように",summary:"Pola 〜かのようだ / かのように untuk level N2, dengan contoh penggunaan dalam konteks sekolah, kantor, layanan publik, dan kehidupan sehari-hari di Jepang.",groups:[
    {name:"〜かのようだ / かのように",description:"Contoh penggunaan 〜かのようだ / かのように dalam konteks alami sehari-hari di Jepang.",sentences:[
      {jp:"今日は祝日みたいで、大学の建物がいつもより静かだ。",kana:"こんにちはしゅくじつみたいで、だいがくのたてものがいつもよりしずかだ。",romaji:"Konnichiha shukujitsu mitaide, daigaku no tatemono gaitsumoyori shizuka da.",meaning:"Hari ini sepertinya hari libur, karena gedung kampus lebih sepi dari biasanya."},
      {jp:"彼はこの町のことを何でも知っているかのように話す。",kana:"かれはこのまちのことをなんでもしっているかのようにはなす。",romaji:"Kareha kono machi nokotowo nande mo shitte irukanoyouni hanasu.",meaning:"Dia berbicara seolah tahu segalanya tentang kota ini."},
      {jp:"窓口の様子を見ると、午前中の方が空いているようだ。",kana:"まどぐちのようすをみると、ごぜんちゅうのほうがあいているようだ。",romaji:"Madoguchi no yousu wo miru to, gozenchuu no houga ai teiruyouda.",meaning:"Melihat keadaan loket, tampaknya pagi hari lebih sepi."},
      {jp:"その子は初めて会ったとは思えないみたいに自然に話しかけてきた。",kana:"そのこははじめてあったとはおもえないみたいにしぜんにはなしかけてきた。",romaji:"Sono ko ha hajimete atsu tatoha omoe naimitaini shizen ni hanashi kaketekita.",meaning:"Anak itu menyapa dengan alami seolah kami bukan baru pertama bertemu."},
      {jp:"外を見ると、今にも雨が降りそうなようだ。",kana:"そとをみると、いまにもあめがおりそうなようだ。",romaji:"Soto wo miru to, ima nimo ame ga ori sounayouda.",meaning:"Kalau melihat ke luar, cuacanya tampak seperti akan segera hujan."}
    ]}
  ]},

  // ── GR-N2-09: 〜げ ──
  {id:"GR-N2-09",level:"N2",title:"〜げ",summary:"Pola 〜げ untuk level N2, dengan contoh penggunaan dalam konteks sekolah, kantor, layanan publik, dan kehidupan sehari-hari di Jepang.",groups:[
    {name:"〜げ",description:"Contoh penggunaan 〜げ dalam konteks alami sehari-hari di Jepang.",sentences:[
      {jp:"この前の説明会では、げという表現も実際の場面で使われていた。",kana:"このまえのせつめいかいでは、げというひょうげんもじっさいのばめんでつかわれていた。",romaji:"Kono mae no setsumeikai deha, getoiu hyougen mo jissai no bamen de tsukawa reteita.",meaning:"Pada sesi penjelasan sebelumnya, ungkapan ini juga dipakai dalam situasi nyata."},
      {jp:"区役所や学校でも、げのような言い方を見かけることがある。",kana:"くやくしょやがっこうでも、げのようないいかたをみかけることがある。",romaji:"Kuyakusho ya gakkou demo, genoyouna iikata wo mikake rukotogaaru.",meaning:"Di balai kota maupun sekolah, kadang terlihat cara ungkap seperti ini."},
      {jp:"職場の会話では、げを使うと少し自然な言い方になる。",kana:"しょくばのかいわでは、げをつかうとすこししぜんないいかたになる。",romaji:"Shokuba no kaiwa deha, gewo tsukau to sukoshi shizen na iikata ninaru.",meaning:"Dalam percakapan kerja, memakai pola ini bisa membuat ungkapan terdengar lebih alami."},
      {jp:"駅前の店で店員さんが話しているのを聞いて、げの使い方がよく分かった。",kana:"えきまえのみせでてんいんさんがはなしているのをきいて、げのつかいかたがよくわかった。",romaji:"Ekimae no mise de ten'in sanga hanashi teirunowo kii te, geno tsukaikata gayoku waka tta.",meaning:"Saat mendengar staf toko di depan stasiun berbicara, saya jadi lebih paham cara pakai pola ini."},
      {jp:"授業だけでなく、日常の場面でもげは意外とよく出てくる。",kana:"じゅぎょうだけでなく、にちじょうのばめんでもげはいがいとよくでてくる。",romaji:"Jugyou dakedenaku, nichijou no bamen demogeha igai toyoku dete kuru.",meaning:"Bukan hanya di kelas, pola ini ternyata cukup sering muncul dalam keseharian."}
    ]}
  ]},

  // ── GR-N2-10: 〜ばかりに ──
  {id:"GR-N2-10",level:"N2",title:"〜ばかりに",summary:"Pola 〜ばかりに untuk level N2, dengan contoh penggunaan dalam konteks sekolah, kantor, layanan publik, dan kehidupan sehari-hari di Jepang.",groups:[
    {name:"〜ばかりに",description:"Contoh penggunaan 〜ばかりに dalam konteks alami sehari-hari di Jepang.",sentences:[
      {jp:"朝から電車が止まっていたばかりに、説明会の開始に間に合わなかった。",kana:"あさからでんしゃがとまっていたばかりに、せつめいかいのかいしにまにあわなかった。",romaji:"Asa kara densha ga toma tteita bakarini, setsumeikai no kaishi ni maniawa nakatta.",meaning:"Karena kereta berhenti sejak pagi, saya tidak sempat datang tepat waktu ke sesi penjelasan."},
      {jp:"必要書類を一枚忘れてしまったばかりに、その日に手続きが終わらなかった。",kana:"ひつようしょるいをいちまいわすれてしまったばかりに、そのにちにてつづきがおわらなかった。",romaji:"Hitsuyoushorui wo ichimai wasure teshimatta bakarini, sono nichi ni tetsuzuki ga owa ranakatta.",meaning:"Karena saya lupa satu lembar dokumen, prosesnya tidak selesai hari itu."},
      {jp:"夜中まで課題をしていたばかりに、午前の授業で集中できなかった。",kana:"よなかまでかだいをしていたばかりに、ごぜんのじゅぎょうでしゅうちゅうできなかった。",romaji:"Yonaka made kadai woshiteita bakarini, gozen no jugyou de shuuchuu dekinakatta.",meaning:"Karena mengerjakan tugas sampai larut malam, saya tidak bisa fokus di kelas pagi."},
      {jp:"店の前で工事が続いていたばかりに、昼の時間帯でも客足が少なかった。",kana:"みせのまえでこうじがつづいていたばかりに、ひるのじかんたいでもきゃくあしがすくなかった。",romaji:"Mise no mae de kouji ga tsuzui teita bakarini, hiru no jikantai demo kyakuashi ga sukunaka tta.",meaning:"Karena ada konstruksi terus di depan toko, pelanggan tetap sedikit bahkan saat jam makan siang."},
      {jp:"思ったより雨が強かったばかりに、商店街のイベントは途中で中止になった。",kana:"おもったよりあめがつよかったばかりに、しょうてんがいのいべんとはとちゅうでちゅうしになった。",romaji:"Omotta yori ame ga tsuyoka tta bakarini, shoutengai no ibento ha tochuu de chuushi ninatta.",meaning:"Karena hujan lebih deras daripada dugaan, acara di area pertokoan dihentikan di tengah jalan."}
    ]}
  ]},

  // ── GR-N2-11: 〜につき ──
  {id:"GR-N2-11",level:"N2",title:"〜につき",summary:"Pola 〜につき untuk level N2, dengan contoh penggunaan dalam konteks sekolah, kantor, layanan publik, dan kehidupan sehari-hari di Jepang.",groups:[
    {name:"〜につき",description:"Contoh penggunaan 〜につき dalam konteks alami sehari-hari di Jepang.",sentences:[
      {jp:"留学生につき説明会が、大学のホールで開かれた。",kana:"りゅうがくせいにつきせつめいかいが、だいがくのほーるでひらかれた。",romaji:"Ryuugakusei nitsuki setsumeikai ga, daigaku no hooru de hiraka reta.",meaning:"Sesi penjelasan untuk mahasiswa asing diadakan di aula universitas."},
      {jp:"駅前の再開発につき住民向けの案内が配られた。",kana:"えきまえのさいかいはつにつきじゅうみんむけのあんないがくばられた。",romaji:"Ekimae no saikaihatsu nitsuki juumin muke no annai ga kubara reta.",meaning:"Pemberitahuan bagi warga terkait pembangunan ulang area depan stasiun dibagikan."},
      {jp:"この制度につき質問があれば、区役所の窓口で確認できる。",kana:"このせいどにつきしつもんがあれば、くやくしょのまどぐちでかくにんできる。",romaji:"Kono seido nitsuki shitsumon gaareba, kuyakusho no madoguchi de kakunin dekiru.",meaning:"Kalau ada pertanyaan terkait sistem ini, bisa ditanyakan di loket balai kota."},
      {jp:"外国人スタッフにつき研修も、来月から始まる予定だ。",kana:"がいこくじんすたっふにつきけんしゅうも、らいげつからはじまるよていだ。",romaji:"Gaikokujin sutaffu nitsuki kenshuu mo, raigetsu kara hajima ru yotei da.",meaning:"Pelatihan untuk staf asing juga dijadwalkan mulai bulan depan."},
      {jp:"今回の変更点につき詳しい資料は、受付で受け取れる。",kana:"こんかいのへんこうてんにつきくわしいしりょうは、うけつけでうけとれる。",romaji:"Konkai no henkouten nitsuki kuwashii shiryou ha, uketsuke de uketore ru.",meaning:"Materi rinci terkait perubahan kali ini bisa diambil di meja penerima tamu."}
    ]}
  ]},

  // ── GR-N2-12: 〜あまり ──
  {id:"GR-N2-12",level:"N2",title:"〜あまり",summary:"Pola 〜あまり untuk level N2, dengan contoh penggunaan dalam konteks sekolah, kantor, layanan publik, dan kehidupan sehari-hari di Jepang.",groups:[
    {name:"〜あまり",description:"Contoh penggunaan 〜あまり dalam konteks alami sehari-hari di Jepang.",sentences:[
      {jp:"この前の説明会では、あまりという表現も実際の場面で使われていた。",kana:"このまえのせつめいかいでは、あまりというひょうげんもじっさいのばめんでつかわれていた。",romaji:"Kono mae no setsumeikai deha, amaritoiu hyougen mo jissai no bamen de tsukawa reteita.",meaning:"Pada sesi penjelasan sebelumnya, ungkapan ini juga dipakai dalam situasi nyata."},
      {jp:"区役所や学校でも、あまりのような言い方を見かけることがある。",kana:"くやくしょやがっこうでも、あまりのようないいかたをみかけることがある。",romaji:"Kuyakusho ya gakkou demo, amarinoyouna iikata wo mikake rukotogaaru.",meaning:"Di balai kota maupun sekolah, kadang terlihat cara ungkap seperti ini."},
      {jp:"職場の会話では、あまりを使うと少し自然な言い方になる。",kana:"しょくばのかいわでは、あまりをつかうとすこししぜんないいかたになる。",romaji:"Shokuba no kaiwa deha, amariwo tsukau to sukoshi shizen na iikata ninaru.",meaning:"Dalam percakapan kerja, memakai pola ini bisa membuat ungkapan terdengar lebih alami."},
      {jp:"駅前の店で店員さんが話しているのを聞いて、あまりの使い方がよく分かった。",kana:"えきまえのみせでてんいんさんがはなしているのをきいて、あまりのつかいかたがよくわかった。",romaji:"Ekimae no mise de ten'in sanga hanashi teirunowo kii te, amarino tsukaikata gayoku waka tta.",meaning:"Saat mendengar staf toko di depan stasiun berbicara, saya jadi lebih paham cara pakai pola ini."},
      {jp:"授業だけでなく、日常の場面でもあまりは意外とよく出てくる。",kana:"じゅぎょうだけでなく、にちじょうのばめんでもあまりはいがいとよくでてくる。",romaji:"Jugyou dakedenaku, nichijou no bamen demoamariha igai toyoku dete kuru.",meaning:"Bukan hanya di kelas, pola ini ternyata cukup sering muncul dalam keseharian."}
    ]}
  ]},

  // ── GR-N2-13: 〜ものだから ──
  {id:"GR-N2-13",level:"N2",title:"〜ものだから",summary:"Pola 〜ものだから untuk level N2, dengan contoh penggunaan dalam konteks sekolah, kantor, layanan publik, dan kehidupan sehari-hari di Jepang.",groups:[
    {name:"〜ものだから",description:"Contoh penggunaan 〜ものだから dalam konteks alami sehari-hari di Jepang.",sentences:[
      {jp:"この前の説明会では、ものだからという表現も実際の場面で使われていた。",kana:"このまえのせつめいかいでは、ものだからというひょうげんもじっさいのばめんでつかわれていた。",romaji:"Kono mae no setsumeikai deha, monodakaratoiu hyougen mo jissai no bamen de tsukawa reteita.",meaning:"Pada sesi penjelasan sebelumnya, ungkapan ini juga dipakai dalam situasi nyata."},
      {jp:"区役所や学校でも、ものだからのような言い方を見かけることがある。",kana:"くやくしょやがっこうでも、ものだからのようないいかたをみかけることがある。",romaji:"Kuyakusho ya gakkou demo, monodakaranoyouna iikata wo mikake rukotogaaru.",meaning:"Di balai kota maupun sekolah, kadang terlihat cara ungkap seperti ini."},
      {jp:"職場の会話では、ものだからを使うと少し自然な言い方になる。",kana:"しょくばのかいわでは、ものだからをつかうとすこししぜんないいかたになる。",romaji:"Shokuba no kaiwa deha, monodakarawo tsukau to sukoshi shizen na iikata ninaru.",meaning:"Dalam percakapan kerja, memakai pola ini bisa membuat ungkapan terdengar lebih alami."},
      {jp:"駅前の店で店員さんが話しているのを聞いて、ものだからの使い方がよく分かった。",kana:"えきまえのみせでてんいんさんがはなしているのをきいて、ものだからのつかいかたがよくわかった。",romaji:"Ekimae no mise de ten'in sanga hanashi teirunowo kii te, monodakarano tsukaikata gayoku waka tta.",meaning:"Saat mendengar staf toko di depan stasiun berbicara, saya jadi lebih paham cara pakai pola ini."},
      {jp:"授業だけでなく、日常の場面でもものだからは意外とよく出てくる。",kana:"じゅぎょうだけでなく、にちじょうのばめんでもものだからはいがいとよくでてくる。",romaji:"Jugyou dakedenaku, nichijou no bamen demomonodakaraha igai toyoku dete kuru.",meaning:"Bukan hanya di kelas, pola ini ternyata cukup sering muncul dalam keseharian."}
    ]}
  ]},

  // ── GR-N2-14: 〜のことだから ──
  {id:"GR-N2-14",level:"N2",title:"〜のことだから",summary:"Pola 〜のことだから untuk level N2, dengan contoh penggunaan dalam konteks sekolah, kantor, layanan publik, dan kehidupan sehari-hari di Jepang.",groups:[
    {name:"〜のことだから",description:"Contoh penggunaan 〜のことだから dalam konteks alami sehari-hari di Jepang.",sentences:[
      {jp:"この前の説明会では、のことだからという表現も実際の場面で使われていた。",kana:"このまえのせつめいかいでは、のことだからというひょうげんもじっさいのばめんでつかわれていた。",romaji:"Kono mae no setsumeikai deha, nokotodakaratoiu hyougen mo jissai no bamen de tsukawa reteita.",meaning:"Pada sesi penjelasan sebelumnya, ungkapan ini juga dipakai dalam situasi nyata."},
      {jp:"区役所や学校でも、のことだからのような言い方を見かけることがある。",kana:"くやくしょやがっこうでも、のことだからのようないいかたをみかけることがある。",romaji:"Kuyakusho ya gakkou demo, nokotodakaranoyouna iikata wo mikake rukotogaaru.",meaning:"Di balai kota maupun sekolah, kadang terlihat cara ungkap seperti ini."},
      {jp:"職場の会話では、のことだからを使うと少し自然な言い方になる。",kana:"しょくばのかいわでは、のことだからをつかうとすこししぜんないいかたになる。",romaji:"Shokuba no kaiwa deha, nokotodakarawo tsukau to sukoshi shizen na iikata ninaru.",meaning:"Dalam percakapan kerja, memakai pola ini bisa membuat ungkapan terdengar lebih alami."},
      {jp:"駅前の店で店員さんが話しているのを聞いて、のことだからの使い方がよく分かった。",kana:"えきまえのみせでてんいんさんがはなしているのをきいて、のことだからのつかいかたがよくわかった。",romaji:"Ekimae no mise de ten'in sanga hanashi teirunowo kii te, nokotodakarano tsukaikata gayoku waka tta.",meaning:"Saat mendengar staf toko di depan stasiun berbicara, saya jadi lebih paham cara pakai pola ini."},
      {jp:"授業だけでなく、日常の場面でものことだからは意外とよく出てくる。",kana:"じゅぎょうだけでなく、にちじょうのばめんでものことだからはいがいとよくでてくる。",romaji:"Jugyou dakedenaku, nichijou no bamen demonokotodakaraha igai toyoku dete kuru.",meaning:"Bukan hanya di kelas, pola ini ternyata cukup sering muncul dalam keseharian."}
    ]}
  ]},

  // ── GR-N2-15: 〜ことから ──
  {id:"GR-N2-15",level:"N2",title:"〜ことから",summary:"Pola 〜ことから untuk level N2, dengan contoh penggunaan dalam konteks sekolah, kantor, layanan publik, dan kehidupan sehari-hari di Jepang.",groups:[
    {name:"〜ことから",description:"Contoh penggunaan 〜ことから dalam konteks alami sehari-hari di Jepang.",sentences:[
      {jp:"この前の説明会では、ことからという表現も実際の場面で使われていた。",kana:"このまえのせつめいかいでは、ことからというひょうげんもじっさいのばめんでつかわれていた。",romaji:"Kono mae no setsumeikai deha, kotokaratoiu hyougen mo jissai no bamen de tsukawa reteita.",meaning:"Pada sesi penjelasan sebelumnya, ungkapan ini juga dipakai dalam situasi nyata."},
      {jp:"区役所や学校でも、ことからのような言い方を見かけることがある。",kana:"くやくしょやがっこうでも、ことからのようないいかたをみかけることがある。",romaji:"Kuyakusho ya gakkou demo, kotokaranoyouna iikata wo mikake rukotogaaru.",meaning:"Di balai kota maupun sekolah, kadang terlihat cara ungkap seperti ini."},
      {jp:"職場の会話では、ことからを使うと少し自然な言い方になる。",kana:"しょくばのかいわでは、ことからをつかうとすこししぜんないいかたになる。",romaji:"Shokuba no kaiwa deha, kotokarawo tsukau to sukoshi shizen na iikata ninaru.",meaning:"Dalam percakapan kerja, memakai pola ini bisa membuat ungkapan terdengar lebih alami."},
      {jp:"駅前の店で店員さんが話しているのを聞いて、ことからの使い方がよく分かった。",kana:"えきまえのみせでてんいんさんがはなしているのをきいて、ことからのつかいかたがよくわかった。",romaji:"Ekimae no mise de ten'in sanga hanashi teirunowo kii te, kotokarano tsukaikata gayoku waka tta.",meaning:"Saat mendengar staf toko di depan stasiun berbicara, saya jadi lebih paham cara pakai pola ini."},
      {jp:"授業だけでなく、日常の場面でもことからは意外とよく出てくる。",kana:"じゅぎょうだけでなく、にちじょうのばめんでもことからはいがいとよくでてくる。",romaji:"Jugyou dakedenaku, nichijou no bamen demokotokaraha igai toyoku dete kuru.",meaning:"Bukan hanya di kelas, pola ini ternyata cukup sering muncul dalam keseharian."}
    ]}
  ]},

  // ── GR-N2-16: 〜からには / からは / 以上は / 上は ──
  {id:"GR-N2-16",level:"N2",title:"〜からには / からは / 以上は / 上は",summary:"Pola 〜からには / からは / 以上は / 上は untuk level N2, dengan contoh penggunaan dalam konteks sekolah, kantor, layanan publik, dan kehidupan sehari-hari di Jepang.",groups:[
    {name:"〜からには / からは / 以上は / 上は",description:"Contoh penggunaan 〜からには / からは / 以上は / 上は dalam konteks alami sehari-hari di Jepang.",sentences:[
      {jp:"この前の説明会では、からにはという表現も実際の場面で使われていた。",kana:"このまえのせつめいかいでは、からにはというひょうげんもじっさいのばめんでつかわれていた。",romaji:"Kono mae no setsumeikai deha, karanihatoiu hyougen mo jissai no bamen de tsukawa reteita.",meaning:"Pada sesi penjelasan sebelumnya, ungkapan ini juga dipakai dalam situasi nyata."},
      {jp:"区役所や学校でも、からにはのような言い方を見かけることがある。",kana:"くやくしょやがっこうでも、からにはのようないいかたをみかけることがある。",romaji:"Kuyakusho ya gakkou demo, karanihanoyouna iikata wo mikake rukotogaaru.",meaning:"Di balai kota maupun sekolah, kadang terlihat cara ungkap seperti ini."},
      {jp:"職場の会話では、からにはを使うと少し自然な言い方になる。",kana:"しょくばのかいわでは、からにはをつかうとすこししぜんないいかたになる。",romaji:"Shokuba no kaiwa deha, karanihawo tsukau to sukoshi shizen na iikata ninaru.",meaning:"Dalam percakapan kerja, memakai pola ini bisa membuat ungkapan terdengar lebih alami."},
      {jp:"駅前の店で店員さんが話しているのを聞いて、からにはの使い方がよく分かった。",kana:"えきまえのみせでてんいんさんがはなしているのをきいて、からにはのつかいかたがよくわかった。",romaji:"Ekimae no mise de ten'in sanga hanashi teirunowo kii te, karanihano tsukaikata gayoku waka tta.",meaning:"Saat mendengar staf toko di depan stasiun berbicara, saya jadi lebih paham cara pakai pola ini."},
      {jp:"授業だけでなく、日常の場面でもからにはは意外とよく出てくる。",kana:"じゅぎょうだけでなく、にちじょうのばめんでもからにははいがいとよくでてくる。",romaji:"Jugyou dakedenaku, nichijou no bamen demokaranihaha igai toyoku dete kuru.",meaning:"Bukan hanya di kelas, pola ini ternyata cukup sering muncul dalam keseharian."}
    ]}
  ]},

  // ── GR-N2-17: 〜ところをみると ──
  {id:"GR-N2-17",level:"N2",title:"〜ところをみると",summary:"Pola 〜ところをみると untuk level N2, dengan contoh penggunaan dalam konteks sekolah, kantor, layanan publik, dan kehidupan sehari-hari di Jepang.",groups:[
    {name:"〜ところをみると",description:"Contoh penggunaan 〜ところをみると dalam konteks alami sehari-hari di Jepang.",sentences:[
      {jp:"駅に着くと、ちょうど案内放送が始まった。",kana:"えきにつくと、ちょうどあんないほうそうがはじまった。",romaji:"Eki ni tsuku to, choudo annaihousou ga hajima tta.",meaning:"Begitu sampai di stasiun, pengumuman baru saja dimulai."},
      {jp:"春になると、この川沿いは散歩する人でにぎわう。",kana:"はるになると、このかわぞいはさんぽするにんでにぎわう。",romaji:"Haru ninaruto, kono kawazoi ha sanpo suru nin denigiwau.",meaning:"Begitu musim semi tiba, area tepi sungai ini ramai oleh orang yang berjalan-jalan."},
      {jp:"資料を読むと、今回の変更点がよく分かる。",kana:"しりょうをよむと、こんかいのへんこうてんがよくわかる。",romaji:"Shiryou wo yomu to, konkai no henkouten gayoku waka ru.",meaning:"Kalau membaca materinya, perubahan kali ini jadi mudah dipahami."},
      {jp:"彼の話し方を見ると、かなり緊張しているようだ。",kana:"かのはなしかたをみると、かなりきんちょうしているようだ。",romaji:"Kano hanashikata wo miru to, kanari kinchoushi teiruyouda.",meaning:"Melihat cara dia berbicara, tampaknya dia cukup tegang."},
      {jp:"この条件だと、申し込みは早い方がよさそうだ。",kana:"このじょうけんだと、もうしこみははやいほうがよさそうだ。",romaji:"Kono jouken dato, moushikomi ha hayai houga yosasouda.",meaning:"Kalau syaratnya seperti ini, tampaknya lebih baik mendaftar lebih cepat."}
    ]}
  ]},

  // ── GR-N2-18: 〜だけに / 〜だけあって ──
  {id:"GR-N2-18",level:"N2",title:"〜だけに / 〜だけあって",summary:"Pola 〜だけに / 〜だけあって untuk level N2, dengan contoh penggunaan dalam konteks sekolah, kantor, layanan publik, dan kehidupan sehari-hari di Jepang.",groups:[
    {name:"〜だけに / 〜だけあって",description:"Contoh penggunaan 〜だけに / 〜だけあって dalam konteks alami sehari-hari di Jepang.",sentences:[
      {jp:"この前の説明会では、だけにという表現も実際の場面で使われていた。",kana:"このまえのせつめいかいでは、だけにというひょうげんもじっさいのばめんでつかわれていた。",romaji:"Kono mae no setsumeikai deha, dakenitoiu hyougen mo jissai no bamen de tsukawa reteita.",meaning:"Pada sesi penjelasan sebelumnya, ungkapan ini juga dipakai dalam situasi nyata."},
      {jp:"区役所や学校でも、だけにのような言い方を見かけることがある。",kana:"くやくしょやがっこうでも、だけにのようないいかたをみかけることがある。",romaji:"Kuyakusho ya gakkou demo, dakeninoyouna iikata wo mikake rukotogaaru.",meaning:"Di balai kota maupun sekolah, kadang terlihat cara ungkap seperti ini."},
      {jp:"職場の会話では、だけにを使うと少し自然な言い方になる。",kana:"しょくばのかいわでは、だけにをつかうとすこししぜんないいかたになる。",romaji:"Shokuba no kaiwa deha, dakeniwo tsukau to sukoshi shizen na iikata ninaru.",meaning:"Dalam percakapan kerja, memakai pola ini bisa membuat ungkapan terdengar lebih alami."},
      {jp:"駅前の店で店員さんが話しているのを聞いて、だけにの使い方がよく分かった。",kana:"えきまえのみせでてんいんさんがはなしているのをきいて、だけにのつかいかたがよくわかった。",romaji:"Ekimae no mise de ten'in sanga hanashi teirunowo kii te, dakenino tsukaikata gayoku waka tta.",meaning:"Saat mendengar staf toko di depan stasiun berbicara, saya jadi lebih paham cara pakai pola ini."},
      {jp:"授業だけでなく、日常の場面でもだけには意外とよく出てくる。",kana:"じゅぎょうだけでなく、にちじょうのばめんでもだけにはいがいとよくでてくる。",romaji:"Jugyou dakedenaku, nichijou no bamen demodakeniha igai toyoku dete kuru.",meaning:"Bukan hanya di kelas, pola ini ternyata cukup sering muncul dalam keseharian."}
    ]}
  ]},

  // ── GR-N2-19: 〜ことだし ──
  {id:"GR-N2-19",level:"N2",title:"〜ことだし",summary:"Pola 〜ことだし untuk level N2, dengan contoh penggunaan dalam konteks sekolah, kantor, layanan publik, dan kehidupan sehari-hari di Jepang.",groups:[
    {name:"〜ことだし",description:"Contoh penggunaan 〜ことだし dalam konteks alami sehari-hari di Jepang.",sentences:[
      {jp:"この前の説明会では、ことだしという表現も実際の場面で使われていた。",kana:"このまえのせつめいかいでは、ことだしというひょうげんもじっさいのばめんでつかわれていた。",romaji:"Kono mae no setsumeikai deha, kotodashitoiu hyougen mo jissai no bamen de tsukawa reteita.",meaning:"Pada sesi penjelasan sebelumnya, ungkapan ini juga dipakai dalam situasi nyata."},
      {jp:"区役所や学校でも、ことだしのような言い方を見かけることがある。",kana:"くやくしょやがっこうでも、ことだしのようないいかたをみかけることがある。",romaji:"Kuyakusho ya gakkou demo, kotodashinoyouna iikata wo mikake rukotogaaru.",meaning:"Di balai kota maupun sekolah, kadang terlihat cara ungkap seperti ini."},
      {jp:"職場の会話では、ことだしを使うと少し自然な言い方になる。",kana:"しょくばのかいわでは、ことだしをつかうとすこししぜんないいかたになる。",romaji:"Shokuba no kaiwa deha, kotodashiwo tsukau to sukoshi shizen na iikata ninaru.",meaning:"Dalam percakapan kerja, memakai pola ini bisa membuat ungkapan terdengar lebih alami."},
      {jp:"駅前の店で店員さんが話しているのを聞いて、ことだしの使い方がよく分かった。",kana:"えきまえのみせでてんいんさんがはなしているのをきいて、ことだしのつかいかたがよくわかった。",romaji:"Ekimae no mise de ten'in sanga hanashi teirunowo kii te, kotodashino tsukaikata gayoku waka tta.",meaning:"Saat mendengar staf toko di depan stasiun berbicara, saya jadi lebih paham cara pakai pola ini."},
      {jp:"授業だけでなく、日常の場面でもことだしは意外とよく出てくる。",kana:"じゅぎょうだけでなく、にちじょうのばめんでもことだしはいがいとよくでてくる。",romaji:"Jugyou dakedenaku, nichijou no bamen demokotodashiha igai toyoku dete kuru.",meaning:"Bukan hanya di kelas, pola ini ternyata cukup sering muncul dalam keseharian."}
    ]}
  ]},

  // ── GR-N2-20: 〜てこそ ──
  {id:"GR-N2-20",level:"N2",title:"〜てこそ",summary:"Pola 〜てこそ untuk level N2, dengan contoh penggunaan dalam konteks sekolah, kantor, layanan publik, dan kehidupan sehari-hari di Jepang.",groups:[
    {name:"〜てこそ",description:"Contoh penggunaan 〜てこそ dalam konteks alami sehari-hari di Jepang.",sentences:[
      {jp:"必要事項を確認しててこそ、そのあとで申込書を出した。",kana:"ひつようじこうをかくにんしててこそ、そのあとでもうしこみしょをだした。",romaji:"Hitsuyoujikou wo kakuninshi tetekoso, sonoatode moushikomisho wo dashi ta.",meaning:"Setelah memeriksa poin yang diperlukan, saya lalu menyerahkan formulir pendaftaran."},
      {jp:"先に先生へ連絡しててこそ, 予定を決めた。",kana:"さきにせんせいへれんらくしててこそ, よていをきめた。",romaji:"Sakini sensei he renraku shitetekoso,   yotei wo kime ta.",meaning:"Saya lebih dulu menghubungi sensei, lalu menentukan jadwal."},
      {jp:"荷物をまとめててこそ, すぐ出発できるようにした。",kana:"にもつをまとめててこそ, すぐしゅっぱつできるようにした。",romaji:"Nimotsu womatometetekoso,   sugu shuppatsu dekiruyounishita.",meaning:"Saya merapikan barang lebih dulu agar bisa segera berangkat."},
      {jp:"窓口で相談しててこそ, 手続きを進めた。",kana:"まどぐちでそうだんしててこそ, てつづきをすすめた。",romaji:"Madoguchi de soudan shitetekoso,   tetsuzuki wo susume ta.",meaning:"Saya berkonsultasi di loket dulu lalu melanjutkan prosedurnya."},
      {jp:"一度落ち着いててこそ, 返事をすることにした。",kana:"いちどおちついててこそ, へんじをすることにした。",romaji:"Ichido ochitsui tetekoso,   henji wosurukotonishita.",meaning:"Saya memutuskan untuk menenangkan diri dulu baru memberi jawaban."}
    ]}
  ]},

  // ── GR-N2-21: 〜に ──
  {id:"GR-N2-21",level:"N2",title:"〜に",summary:"Pola 〜に untuk level N2, dengan contoh penggunaan dalam konteks sekolah, kantor, layanan publik, dan kehidupan sehari-hari di Jepang.",groups:[
    {name:"〜に",description:"Contoh penggunaan 〜に dalam konteks alami sehari-hari di Jepang.",sentences:[
      {jp:"留学生に説明会が、大学のホールで開かれた。",kana:"りゅうがくせいにせつめいかいが、だいがくのほーるでひらかれた。",romaji:"Ryuugakusei ni setsumeikai ga, daigaku no hooru de hiraka reta.",meaning:"Sesi penjelasan untuk mahasiswa asing diadakan di aula universitas."},
      {jp:"駅前の再開発に住民向けの案内が配られた。",kana:"えきまえのさいかいはつにじゅうみんむけのあんないがくばられた。",romaji:"Ekimae no saikaihatsu ni juumin muke no annai ga kubara reta.",meaning:"Pemberitahuan bagi warga terkait pembangunan ulang area depan stasiun dibagikan."},
      {jp:"この制度に質問があれば、区役所の窓口で確認できる。",kana:"このせいどにしつもんがあれば、くやくしょのまどぐちでかくにんできる。",romaji:"Kono seido ni shitsumon gaareba, kuyakusho no madoguchi de kakunin dekiru.",meaning:"Kalau ada pertanyaan terkait sistem ini, bisa ditanyakan di loket balai kota."},
      {jp:"外国人スタッフに研修も、来月から始まる予定だ。",kana:"がいこくじんすたっふにけんしゅうも、らいげつからはじまるよていだ。",romaji:"Gaikokujin sutaffu ni kenshuu mo, raigetsu kara hajima ru yotei da.",meaning:"Pelatihan untuk staf asing juga dijadwalkan mulai bulan depan."},
      {jp:"今回の変更点に詳しい資料は、受付で受け取れる。",kana:"こんかいのへんこうてんにくわしいしりょうは、うけつけでうけとれる。",romaji:"Konkai no henkouten ni kuwashii shiryou ha, uketsuke de uketore ru.",meaning:"Materi rinci terkait perubahan kali ini bisa diambil di meja penerima tamu."}
    ]}
  ]},

  // ── GR-N2-22: 〜ものなら / 〜もんなら ──
  {id:"GR-N2-22",level:"N2",title:"〜ものなら / 〜もんなら",summary:"Pola 〜ものなら / 〜もんなら untuk level N2, dengan contoh penggunaan dalam konteks sekolah, kantor, layanan publik, dan kehidupan sehari-hari di Jepang.",groups:[
    {name:"〜ものなら / 〜もんなら",description:"Contoh penggunaan 〜ものなら / 〜もんなら dalam konteks alami sehari-hari di Jepang.",sentences:[
      {jp:"この前の説明会では、ものならという表現も実際の場面で使われていた。",kana:"このまえのせつめいかいでは、ものならというひょうげんもじっさいのばめんでつかわれていた。",romaji:"Kono mae no setsumeikai deha, mononaratoiu hyougen mo jissai no bamen de tsukawa reteita.",meaning:"Pada sesi penjelasan sebelumnya, ungkapan ini juga dipakai dalam situasi nyata."},
      {jp:"区役所や学校でも、ものならのような言い方を見かけることがある。",kana:"くやくしょやがっこうでも、ものならのようないいかたをみかけることがある。",romaji:"Kuyakusho ya gakkou demo, mononaranoyouna iikata wo mikake rukotogaaru.",meaning:"Di balai kota maupun sekolah, kadang terlihat cara ungkap seperti ini."},
      {jp:"職場の会話では、ものならを使うと少し自然な言い方になる。",kana:"しょくばのかいわでは、ものならをつかうとすこししぜんないいかたになる。",romaji:"Shokuba no kaiwa deha, mononarawo tsukau to sukoshi shizen na iikata ninaru.",meaning:"Dalam percakapan kerja, memakai pola ini bisa membuat ungkapan terdengar lebih alami."},
      {jp:"駅前の店で店員さんが話しているのを聞いて、ものならの使い方がよく分かった。",kana:"えきまえのみせでてんいんさんがはなしているのをきいて、ものならのつかいかたがよくわかった。",romaji:"Ekimae no mise de ten'in sanga hanashi teirunowo kii te, mononarano tsukaikata gayoku waka tta.",meaning:"Saat mendengar staf toko di depan stasiun berbicara, saya jadi lebih paham cara pakai pola ini."},
      {jp:"授業だけでなく、日常の場面でもものならは意外とよく出てくる。",kana:"じゅぎょうだけでなく、にちじょうのばめんでもものならはいがいとよくでてくる。",romaji:"Jugyou dakedenaku, nichijou no bamen demomononaraha igai toyoku dete kuru.",meaning:"Bukan hanya di kelas, pola ini ternyata cukup sering muncul dalam keseharian."}
    ]}
  ]},

  // ── GR-N2-23: 〜ないことには〜ない ──
  {id:"GR-N2-23",level:"N2",title:"〜ないことには〜ない",summary:"Pola 〜ないことには〜ない untuk level N2, dengan contoh penggunaan dalam konteks sekolah, kantor, layanan publik, dan kehidupan sehari-hari di Jepang.",groups:[
    {name:"〜ないことには〜ない",description:"Contoh penggunaan 〜ないことには〜ない dalam konteks alami sehari-hari di Jepang.",sentences:[
      {jp:"この前の説明会では、ないことにはないという表現も実際の場面で使われていた。",kana:"このまえのせつめいかいでは、ないことにはないというひょうげんもじっさいのばめんでつかわれていた。",romaji:"Kono mae no setsumeikai deha, naikotonihanaitoiu hyougen mo jissai no bamen de tsukawa reteita.",meaning:"Pada sesi penjelasan sebelumnya, ungkapan ini juga dipakai dalam situasi nyata."},
      {jp:"区役所や学校でも、ないことにはないのような言い方を見かけることがある。",kana:"くやくしょやがっこうでも、ないことにはないのようないいかたをみかけることがある。",romaji:"Kuyakusho ya gakkou demo, naikotonihanainoyouna iikata wo mikake rukotogaaru.",meaning:"Di balai kota maupun sekolah, kadang terlihat cara ungkap seperti ini."},
      {jp:"職場の会話では、ないことにはないを使うと少し自然な言い方になる。",kana:"しょくばのかいわでは、ないことにはないをつかうとすこししぜんないいかたになる。",romaji:"Shokuba no kaiwa deha, naikotonihanaiwo tsukau to sukoshi shizen na iikata ninaru.",meaning:"Dalam percakapan kerja, memakai pola ini bisa membuat ungkapan terdengar lebih alami."},
      {jp:"駅前の店で店員さんが話しているのを聞いて、ないことにはないの使い方がよく分かった。",kana:"えきまえのみせでてんいんさんがはなしているのをきいて、ないことにはないのつかいかたがよくわかった。",romaji:"Ekimae no mise de ten'in sanga hanashi teirunowo kii te, naikotonihanaino tsukaikata gayoku waka tta.",meaning:"Saat mendengar staf toko di depan stasiun berbicara, saya jadi lebih paham cara pakai pola ini."},
      {jp:"授業だけでなく、日常の場面でもないことにはないは意外とよく出てくる。",kana:"じゅぎょうだけでなく、にちじょうのばめんでもないことにはないはいがいとよくでてくる。",romaji:"Jugyou dakedenaku, nichijou no bamen demonaikotonihanaiha igai toyoku dete kuru.",meaning:"Bukan hanya di kelas, pola ini ternyata cukup sering muncul dalam keseharian."}
    ]}
  ]},

  // ── GR-N2-24: 〜さえ〜ば ──
  {id:"GR-N2-24",level:"N2",title:"〜さえ〜ば",summary:"Pola 〜さえ〜ば untuk level N2, dengan contoh penggunaan dalam konteks sekolah, kantor, layanan publik, dan kehidupan sehari-hari di Jepang.",groups:[
    {name:"〜さえ〜ば",description:"Contoh penggunaan 〜さえ〜ば dalam konteks alami sehari-hari di Jepang.",sentences:[
      {jp:"時間があれば、区役所のあとで銀行にも寄りたい。",kana:"じかんがあれば、くやくしょのあとでぎんこうにもよりたい。",romaji:"Jikan gaareba, kuyakusho noatode ginkou nimo yori tai.",meaning:"Kalau ada waktu, setelah ke balai kota saya juga ingin mampir ke bank."},
      {jp:"もう少し安ければ、その部屋に決めたかもしれない。",kana:"もうすこしやすければ、そのへやにきめたかもしれない。",romaji:"Mou sukoshi yasuke reba, sono heya ni kime takamoshirenai.",meaning:"Kalau sedikit lebih murah, mungkin saya akan memilih kamar itu."},
      {jp:"駅から近ければ、多少狭くても我慢できる。",kana:"えきからちかければ、たしょうせまくてもがまんできる。",romaji:"Eki kara chikake reba, tashou semaku temo gaman dekiru.",meaning:"Kalau dekat dari stasiun, walau agak sempit saya masih bisa menerima."},
      {jp:"店長に聞けば、細かいルールもすぐ分かる。",kana:"てんちょうにきけば、こまかいるーるもすぐわかる。",romaji:"Tenchou ni kike ba, komakai ruuru mosugu waka ru.",meaning:"Kalau bertanya ke manajer toko, aturan detailnya juga cepat dipahami."},
      {jp:"早く寝れば、明日の朝も楽になる。",kana:"はやくねれば、あしたのあさもらくになる。",romaji:"Hayaku nere ba, ashita no asa mo raku ninaru.",meaning:"Kalau tidur lebih awal, besok pagi juga akan terasa lebih ringan."}
    ]}
  ]},

  // ── GR-N2-25: 〜ようものなら ──
  {id:"GR-N2-25",level:"N2",title:"〜ようものなら",summary:"Pola 〜ようものなら untuk level N2, dengan contoh penggunaan dalam konteks sekolah, kantor, layanan publik, dan kehidupan sehari-hari di Jepang.",groups:[
    {name:"〜ようものなら",description:"Contoh penggunaan 〜ようものなら dalam konteks alami sehari-hari di Jepang.",sentences:[
      {jp:"この前の説明会では、ようものならという表現も実際の場面で使われていた。",kana:"このまえのせつめいかいでは、ようものならというひょうげんもじっさいのばめんでつかわれていた。",romaji:"Kono mae no setsumeikai deha, youmononaratoiu hyougen mo jissai no bamen de tsukawa reteita.",meaning:"Pada sesi penjelasan sebelumnya, ungkapan ini juga dipakai dalam situasi nyata."},
      {jp:"区役所や学校でも、ようものならのような言い方を見かけることがある。",kana:"くやくしょやがっこうでも、ようものならのようないいかたをみかけることがある。",romaji:"Kuyakusho ya gakkou demo, youmononaranoyouna iikata wo mikake rukotogaaru.",meaning:"Di balai kota maupun sekolah, kadang terlihat cara ungkap seperti ini."},
      {jp:"職場の会話では、ようものならを使うと少し自然な言い方になる。",kana:"しょくばのかいわでは、ようものならをつかうとすこししぜんないいかたになる。",romaji:"Shokuba no kaiwa deha, youmononarawo tsukau to sukoshi shizen na iikata ninaru.",meaning:"Dalam percakapan kerja, memakai pola ini bisa membuat ungkapan terdengar lebih alami."},
      {jp:"駅前の店で店員さんが話しているのを聞いて、ようものならの使い方がよく分かった。",kana:"えきまえのみせでてんいんさんがはなしているのをきいて、ようものならのつかいかたがよくわかった。",romaji:"Ekimae no mise de ten'in sanga hanashi teirunowo kii te, youmononarano tsukaikata gayoku waka tta.",meaning:"Saat mendengar staf toko di depan stasiun berbicara, saya jadi lebih paham cara pakai pola ini."},
      {jp:"授業だけでなく、日常の場面でもようものならは意外とよく出てくる。",kana:"じゅぎょうだけでなく、にちじょうのばめんでもようものならはいがいとよくでてくる。",romaji:"Jugyou dakedenaku, nichijou no bamen demoyoumononaraha igai toyoku dete kuru.",meaning:"Bukan hanya di kelas, pola ini ternyata cukup sering muncul dalam keseharian."}
    ]}
  ]},

  // ── GR-N2-26: 〜となると ──
  {id:"GR-N2-26",level:"N2",title:"〜となると",summary:"Pola 〜となると untuk level N2, dengan contoh penggunaan dalam konteks sekolah, kantor, layanan publik, dan kehidupan sehari-hari di Jepang.",groups:[
    {name:"〜となると",description:"Contoh penggunaan 〜となると dalam konteks alami sehari-hari di Jepang.",sentences:[
      {jp:"駅に着くと、ちょうど案内放送が始まった。",kana:"えきにつくと、ちょうどあんないほうそうがはじまった。",romaji:"Eki ni tsuku to, choudo annaihousou ga hajima tta.",meaning:"Begitu sampai di stasiun, pengumuman baru saja dimulai."},
      {jp:"春になると、この川沿いは散歩する人でにぎわう。",kana:"はるになると、このかわぞいはさんぽするにんでにぎわう。",romaji:"Haru ninaruto, kono kawazoi ha sanpo suru nin denigiwau.",meaning:"Begitu musim semi tiba, area tepi sungai ini ramai oleh orang yang berjalan-jalan."},
      {jp:"資料を読むと、今回の変更点がよく分かる。",kana:"しりょうをよむと、こんかいのへんこうてんがよくわかる。",romaji:"Shiryou wo yomu to, konkai no henkouten gayoku waka ru.",meaning:"Kalau membaca materinya, perubahan kali ini jadi mudah dipahami."},
      {jp:"彼の話し方を見ると、かなり緊張しているようだ。",kana:"かのはなしかたをみると、かなりきんちょうしているようだ。",romaji:"Kano hanashikata wo miru to, kanari kinchoushi teiruyouda.",meaning:"Melihat cara dia berbicara, tampaknya dia cukup tegang."},
      {jp:"この条件だと、申し込みは早い方がよさそうだ。",kana:"このじょうけんだと、もうしこみははやいほうがよさそうだ。",romaji:"Kono jouken dato, moushikomi ha hayai houga yosasouda.",meaning:"Kalau syaratnya seperti ini, tampaknya lebih baik mendaftar lebih cepat."}
    ]}
  ]},

  // ── GR-N2-27: 〜にしても〜にしても / 〜にしろ〜にしろ / 〜にせよ〜にせよ ──
  {id:"GR-N2-27",level:"N2",title:"〜にしても〜にしても / 〜にしろ〜にしろ / 〜にせよ〜にせよ",summary:"Pola 〜にしても〜にしても / 〜にしろ〜にしろ / 〜にせよ〜にせよ untuk level N2, dengan contoh penggunaan dalam konteks sekolah, kantor, layanan publik, dan kehidupan sehari-hari di Jepang.",groups:[
    {name:"〜にしても〜にしても / 〜にしろ〜にしろ / 〜にせよ〜にせよ",description:"Contoh penggunaan 〜にしても〜にしても / 〜にしろ〜にしろ / 〜にせよ〜にせよ dalam konteks alami sehari-hari di Jepang.",sentences:[
      {jp:"留学生にしてもにしても説明会が、大学のホールで開かれた。",kana:"りゅうがくせいにしてもにしてもせつめいかいが、だいがくのほーるでひらかれた。",romaji:"Ryuugakusei nishitemonishitemo setsumeikai ga, daigaku no hooru de hiraka reta.",meaning:"Sesi penjelasan untuk mahasiswa asing diadakan di aula universitas."},
      {jp:"駅前の再開発にしてもにしても住民向けの案内が配られた。",kana:"えきまえのさいかいはつにしてもにしてもじゅうみんむけのあんないがくばられた。",romaji:"Ekimae no saikaihatsu nishitemonishitemo juumin muke no annai ga kubara reta.",meaning:"Pemberitahuan bagi warga terkait pembangunan ulang area depan stasiun dibagikan."},
      {jp:"この制度にしてもにしても質問があれば、区役所の窓口で確認できる。",kana:"このせいどにしてもにしてもしつもんがあれば、くやくしょのまどぐちでかくにんできる。",romaji:"Kono seido nishitemonishitemo shitsumon gaareba, kuyakusho no madoguchi de kakunin dekiru.",meaning:"Kalau ada pertanyaan terkait sistem ini, bisa ditanyakan di loket balai kota."},
      {jp:"外国人スタッフにしてもにしても研修も、来月から始まる予定だ。",kana:"がいこくじんすたっふにしてもにしてもけんしゅうも、らいげつからはじまるよていだ。",romaji:"Gaikokujin sutaffu nishitemonishitemo kenshuu mo, raigetsu kara hajima ru yotei da.",meaning:"Pelatihan untuk staf asing juga dijadwalkan mulai bulan depan."},
      {jp:"今回の変更点にしてもにしても詳しい資料は、受付で受け取れる。",kana:"こんかいのへんこうてんにしてもにしてもくわしいしりょうは、うけつけでうけとれる。",romaji:"Konkai no henkouten nishitemonishitemo kuwashii shiryou ha, uketsuke de uketore ru.",meaning:"Materi rinci terkait perubahan kali ini bisa diambil di meja penerima tamu."}
    ]}
  ]},

  // ── GR-N2-28: 〜に基づいて / をもとに(して) ──
  {id:"GR-N2-28",level:"N2",title:"〜に基づいて / をもとに(して)",summary:"Pola 〜に基づいて / をもとに(して) untuk level N2, dengan contoh penggunaan dalam konteks sekolah, kantor, layanan publik, dan kehidupan sehari-hari di Jepang.",groups:[
    {name:"〜に基づいて / をもとに(して)",description:"Contoh penggunaan 〜に基づいて / をもとに(して) dalam konteks alami sehari-hari di Jepang.",sentences:[
      {jp:"地域のイベントに基づいて、近所の人と少しずつ顔見知りになった。",kana:"ちいきのいべんとにもとづいて、きんじょのにんとすこしずつかおみしりになった。",romaji:"Chiiki no ibento ni motozu ite, kinjo no nin to sukoshi zutsu kaomishiri ninatta.",meaning:"Melalui acara lingkungan, saya perlahan mulai mengenal orang-orang sekitar."},
      {jp:"先輩との会話に基づいて、就職活動の流れが具体的に見えてきた。",kana:"せんぱいとのかいわにもとづいて、しゅうしょくかつどうのながれがぐたいてきにみえてきた。",romaji:"Senpai tono kaiwa ni motozu ite, shuushokukatsudou no nagare ga gutaiteki ni mie tekita.",meaning:"Melalui percakapan dengan senior, alur mencari kerja jadi terasa lebih jelas."},
      {jp:"実習に基づいて、教室では分からなかった課題にも気づいた。",kana:"じっしゅうにもとづいて、きょうしつではわからなかったかだいにもきづいた。",romaji:"Jisshuu ni motozu ite, kyoushitsu deha waka ranakatta kadai nimo kizu ita.",meaning:"Melalui praktik lapangan, saya menyadari tantangan yang tidak terlihat di kelas."},
      {jp:"この資料に基づいて、学校側の考え方を理解してほしい。",kana:"このしりょうにもとづいて、がっこうがわのかんがえかたをりかいしてほしい。",romaji:"Kono shiryou ni motozu ite, gakkougawa no kangaekata wo rikai shitehoshii.",meaning:"Melalui materi ini, saya ingin Anda memahami cara pandang pihak sekolah."},
      {jp:"商店街の取り組みに基づいて、地域全体の雰囲気も変わってきた。",kana:"しょうてんがいのとりくみにもとづいて、ちいきぜんたいのふんいきもかわってきた。",romaji:"Shoutengai no torikumi ni motozu ite, chiiki zentai no fun'iki mo kawa ttekita.",meaning:"Melalui upaya area pertokoan, suasana seluruh lingkungan juga mulai berubah."}
    ]}
  ]},

  // ── GR-N2-29: 〜のもと(で) ──
  {id:"GR-N2-29",level:"N2",title:"〜のもと(で)",summary:"Pola 〜のもと(で) untuk level N2, dengan contoh penggunaan dalam konteks sekolah, kantor, layanan publik, dan kehidupan sehari-hari di Jepang.",groups:[
    {name:"〜のもと(で)",description:"Contoh penggunaan 〜のもと(で) dalam konteks alami sehari-hari di Jepang.",sentences:[
      {jp:"この前の説明会では、のもとという表現も実際の場面で使われていた。",kana:"このまえのせつめいかいでは、のもとというひょうげんもじっさいのばめんでつかわれていた。",romaji:"Kono mae no setsumeikai deha, nomototoiu hyougen mo jissai no bamen de tsukawa reteita.",meaning:"Pada sesi penjelasan sebelumnya, ungkapan ini juga dipakai dalam situasi nyata."},
      {jp:"区役所や学校でも、のもとのような言い方を見かけることがある。",kana:"くやくしょやがっこうでも、のもとのようないいかたをみかけることがある。",romaji:"Kuyakusho ya gakkou demo, nomotonoyouna iikata wo mikake rukotogaaru.",meaning:"Di balai kota maupun sekolah, kadang terlihat cara ungkap seperti ini."},
      {jp:"職場の会話では、のもとを使うと少し自然な言い方になる。",kana:"しょくばのかいわでは、のもとをつかうとすこししぜんないいかたになる。",romaji:"Shokuba no kaiwa deha, nomotowo tsukau to sukoshi shizen na iikata ninaru.",meaning:"Dalam percakapan kerja, memakai pola ini bisa membuat ungkapan terdengar lebih alami."},
      {jp:"駅前の店で店員さんが話しているのを聞いて、のもとの使い方がよく分かった。",kana:"えきまえのみせでてんいんさんがはなしているのをきいて、のもとのつかいかたがよくわかった。",romaji:"Ekimae no mise de ten'in sanga hanashi teirunowo kii te, nomotono tsukaikata gayoku waka tta.",meaning:"Saat mendengar staf toko di depan stasiun berbicara, saya jadi lebih paham cara pakai pola ini."},
      {jp:"授業だけでなく、日常の場面でものもとは意外とよく出てくる。",kana:"じゅぎょうだけでなく、にちじょうのばめんでものもとはいがいとよくでてくる。",romaji:"Jugyou dakedenaku, nichijou no bamen demonomotoha igai toyoku dete kuru.",meaning:"Bukan hanya di kelas, pola ini ternyata cukup sering muncul dalam keseharian."}
    ]}
  ]},

  // ── GR-N2-30: 〜に沿って ──
  {id:"GR-N2-30",level:"N2",title:"〜に沿って",summary:"Pola 〜に沿って untuk level N2, dengan contoh penggunaan dalam konteks sekolah, kantor, layanan publik, dan kehidupan sehari-hari di Jepang.",groups:[
    {name:"〜に沿って",description:"Contoh penggunaan 〜に沿って dalam konteks alami sehari-hari di Jepang.",sentences:[
      {jp:"地域のイベントに沿って、近所の人と少しずつ顔見知りになった。",kana:"ちいきのいべんとにそって、きんじょのにんとすこしずつかおみしりになった。",romaji:"Chiiki no ibento ni sotte, kinjo no nin to sukoshi zutsu kaomishiri ninatta.",meaning:"Melalui acara lingkungan, saya perlahan mulai mengenal orang-orang sekitar."},
      {jp:"先輩との会話に沿って、就職活動の流れが具体的に見えてきた。",kana:"せんぱいとのかいわにそって、しゅうしょくかつどうのながれがぐたいてきにみえてきた。",romaji:"Senpai tono kaiwa ni sotte, shuushokukatsudou no nagare ga gutaiteki ni mie tekita.",meaning:"Melalui percakapan dengan senior, alur mencari kerja jadi terasa lebih jelas."},
      {jp:"実習に沿って、教室では分からなかった課題にも気づいた。",kana:"じっしゅうにそって、きょうしつではわからなかったかだいにもきづいた。",romaji:"Jisshuu ni sotte, kyoushitsu deha waka ranakatta kadai nimo kizu ita.",meaning:"Melalui praktik lapangan, saya menyadari tantangan yang tidak terlihat di kelas."},
      {jp:"この資料に沿って、学校側の考え方を理解してほしい。",kana:"このしりょうにそって、がっこうがわのかんがえかたをりかいしてほしい。",romaji:"Kono shiryou ni sotte, gakkougawa no kangaekata wo rikai shitehoshii.",meaning:"Melalui materi ini, saya ingin Anda memahami cara pandang pihak sekolah."},
      {jp:"商店街の取り組みに沿って、地域全体の雰囲気も変わってきた。",kana:"しょうてんがいのとりくみにそって、ちいきぜんたいのふんいきもかわってきた。",romaji:"Shoutengai no torikumi ni sotte, chiiki zentai no fun'iki mo kawa ttekita.",meaning:"Melalui upaya area pertokoan, suasana seluruh lingkungan juga mulai berubah."}
    ]}
  ]},

  // ── GR-N2-31: 〜どころか ──
  {id:"GR-N2-31",level:"N2",title:"〜どころか",summary:"Pola 〜どころか untuk level N2, dengan contoh penggunaan dalam konteks sekolah, kantor, layanan publik, dan kehidupan sehari-hari di Jepang.",groups:[
    {name:"〜どころか",description:"Contoh penggunaan 〜どころか dalam konteks alami sehari-hari di Jepang.",sentences:[
      {jp:"この前の説明会では、どころかという表現も実際の場面で使われていた。",kana:"このまえのせつめいかいでは、どころかというひょうげんもじっさいのばめんでつかわれていた。",romaji:"Kono mae no setsumeikai deha, dokorokatoiu hyougen mo jissai no bamen de tsukawa reteita.",meaning:"Pada sesi penjelasan sebelumnya, ungkapan ini juga dipakai dalam situasi nyata."},
      {jp:"区役所や学校でも、どころかのような言い方を見かけることがある。",kana:"くやくしょやがっこうでも、どころかのようないいかたをみかけることがある。",romaji:"Kuyakusho ya gakkou demo, dokorokanoyouna iikata wo mikake rukotogaaru.",meaning:"Di balai kota maupun sekolah, kadang terlihat cara ungkap seperti ini."},
      {jp:"職場の会話では、どころかを使うと少し自然な言い方になる。",kana:"しょくばのかいわでは、どころかをつかうとすこししぜんないいかたになる。",romaji:"Shokuba no kaiwa deha, dokorokawo tsukau to sukoshi shizen na iikata ninaru.",meaning:"Dalam percakapan kerja, memakai pola ini bisa membuat ungkapan terdengar lebih alami."},
      {jp:"駅前の店で店員さんが話しているのを聞いて、どころかの使い方がよく分かった。",kana:"えきまえのみせでてんいんさんがはなしているのをきいて、どころかのつかいかたがよくわかった。",romaji:"Ekimae no mise de ten'in sanga hanashi teirunowo kii te, dokorokano tsukaikata gayoku waka tta.",meaning:"Saat mendengar staf toko di depan stasiun berbicara, saya jadi lebih paham cara pakai pola ini."},
      {jp:"授業だけでなく、日常の場面でもどころかは意外とよく出てくる。",kana:"じゅぎょうだけでなく、にちじょうのばめんでもどころかはいがいとよくでてくる。",romaji:"Jugyou dakedenaku, nichijou no bamen demodokorokaha igai toyoku dete kuru.",meaning:"Bukan hanya di kelas, pola ini ternyata cukup sering muncul dalam keseharian."}
    ]}
  ]},

  // ── GR-N2-32: 〜一方で ──
  {id:"GR-N2-32",level:"N2",title:"〜一方で",summary:"Pola 〜一方で untuk level N2, dengan contoh penggunaan dalam konteks sekolah, kantor, layanan publik, dan kehidupan sehari-hari di Jepang.",groups:[
    {name:"〜一方で",description:"Contoh penggunaan 〜一方で dalam konteks alami sehari-hari di Jepang.",sentences:[
      {jp:"この前の説明会では、一方でという表現も実際の場面で使われていた。",kana:"このまえのせつめいかいでは、いっぽうでというひょうげんもじっさいのばめんでつかわれていた。",romaji:"Kono mae no setsumeikai deha, ippou detoiu hyougen mo jissai no bamen de tsukawa reteita.",meaning:"Pada sesi penjelasan sebelumnya, ungkapan ini juga dipakai dalam situasi nyata."},
      {jp:"区役所や学校でも、一方でのような言い方を見かけることがある。",kana:"くやくしょやがっこうでも、いっぽうでのようないいかたをみかけることがある。",romaji:"Kuyakusho ya gakkou demo, ippou denoyouna iikata wo mikake rukotogaaru.",meaning:"Di balai kota maupun sekolah, kadang terlihat cara ungkap seperti ini."},
      {jp:"職場の会話では、一方でを使うと少し自然な言い方になる。",kana:"しょくばのかいわでは、いっぽうでをつかうとすこししぜんないいかたになる。",romaji:"Shokuba no kaiwa deha, ippou dewo tsukau to sukoshi shizen na iikata ninaru.",meaning:"Dalam percakapan kerja, memakai pola ini bisa membuat ungkapan terdengar lebih alami."},
      {jp:"駅前の店で店員さんが話しているのを聞いて、一方での使い方がよく分かった。",kana:"えきまえのみせでてんいんさんがはなしているのをきいて、いっぽうでのつかいかたがよくわかった。",romaji:"Ekimae no mise de ten'in sanga hanashi teirunowo kii te, ippou deno tsukaikata gayoku waka tta.",meaning:"Saat mendengar staf toko di depan stasiun berbicara, saya jadi lebih paham cara pakai pola ini."},
      {jp:"授業だけでなく、日常の場面でも一方では意外とよく出てくる。",kana:"じゅぎょうだけでなく、にちじょうのばめんでもいっぽうではいがいとよくでてくる。",romaji:"Jugyou dakedenaku, nichijou no bamen demo ippou deha igai toyoku dete kuru.",meaning:"Bukan hanya di kelas, pola ini ternyata cukup sering muncul dalam keseharian."}
    ]}
  ]},

  // ── GR-N2-33: 〜に反して ──
  {id:"GR-N2-33",level:"N2",title:"〜に反して",summary:"Pola 〜に反して untuk level N2, dengan contoh penggunaan dalam konteks sekolah, kantor, layanan publik, dan kehidupan sehari-hari di Jepang.",groups:[
    {name:"〜に反して",description:"Contoh penggunaan 〜に反して dalam konteks alami sehari-hari di Jepang.",sentences:[
      {jp:"留学生に反して説明会が、大学のホールで開かれた。",kana:"りゅうがくせいにはんしてせつめいかいが、だいがくのほーるでひらかれた。",romaji:"Ryuugakusei ni hanshi te setsumeikai ga, daigaku no hooru de hiraka reta.",meaning:"Sesi penjelasan untuk mahasiswa asing diadakan di aula universitas."},
      {jp:"駅前の再開発に反して住民向けの案内が配られた。",kana:"えきまえのさいかいはつにはんしてじゅうみんむけのあんないがくばられた。",romaji:"Ekimae no saikaihatsu ni hanshi te juumin muke no annai ga kubara reta.",meaning:"Pemberitahuan bagi warga terkait pembangunan ulang area depan stasiun dibagikan."},
      {jp:"この制度に反して質問があれば、区役所の窓口で確認できる。",kana:"このせいどにはんしてしつもんがあれば、くやくしょのまどぐちでかくにんできる。",romaji:"Kono seido ni hanshi te shitsumon gaareba, kuyakusho no madoguchi de kakunin dekiru.",meaning:"Kalau ada pertanyaan terkait sistem ini, bisa ditanyakan di loket balai kota."},
      {jp:"外国人スタッフに反して研修も、来月から始まる予定だ。",kana:"がいこくじんすたっふにはんしてけんしゅうも、らいげつからはじまるよていだ。",romaji:"Gaikokujin sutaffu ni hanshi te kenshuu mo, raigetsu kara hajima ru yotei da.",meaning:"Pelatihan untuk staf asing juga dijadwalkan mulai bulan depan."},
      {jp:"今回の変更点に反して詳しい資料は、受付で受け取れる。",kana:"こんかいのへんこうてんにはんしてくわしいしりょうは、うけつけでうけとれる。",romaji:"Konkai no henkouten ni hanshi te kuwashii shiryou ha, uketsuke de uketore ru.",meaning:"Materi rinci terkait perubahan kali ini bisa diambil di meja penerima tamu."}
    ]}
  ]},

  // ── GR-N2-34: 〜というより ──
  {id:"GR-N2-34",level:"N2",title:"〜というより",summary:"Pola 〜というより untuk level N2, dengan contoh penggunaan dalam konteks sekolah, kantor, layanan publik, dan kehidupan sehari-hari di Jepang.",groups:[
    {name:"〜というより",description:"Contoh penggunaan 〜というより dalam konteks alami sehari-hari di Jepang.",sentences:[
      {jp:"駅に着くと、ちょうど案内放送が始まった。",kana:"えきにつくと、ちょうどあんないほうそうがはじまった。",romaji:"Eki ni tsuku to, choudo annaihousou ga hajima tta.",meaning:"Begitu sampai di stasiun, pengumuman baru saja dimulai."},
      {jp:"春になると、この川沿いは散歩する人でにぎわう。",kana:"はるになると、このかわぞいはさんぽするにんでにぎわう。",romaji:"Haru ninaruto, kono kawazoi ha sanpo suru nin denigiwau.",meaning:"Begitu musim semi tiba, area tepi sungai ini ramai oleh orang yang berjalan-jalan."},
      {jp:"資料を読むと、今回の変更点がよく分かる。",kana:"しりょうをよむと、こんかいのへんこうてんがよくわかる。",romaji:"Shiryou wo yomu to, konkai no henkouten gayoku waka ru.",meaning:"Kalau membaca materinya, perubahan kali ini jadi mudah dipahami."},
      {jp:"彼の話し方を見ると、かなり緊張しているようだ。",kana:"かのはなしかたをみると、かなりきんちょうしているようだ。",romaji:"Kano hanashikata wo miru to, kanari kinchoushi teiruyouda.",meaning:"Melihat cara dia berbicara, tampaknya dia cukup tegang."},
      {jp:"この条件だと、申し込みは早い方がよさそうだ。",kana:"このじょうけんだと、もうしこみははやいほうがよさそうだ。",romaji:"Kono jouken dato, moushikomi ha hayai houga yosasouda.",meaning:"Kalau syaratnya seperti ini, tampaknya lebih baik mendaftar lebih cepat."}
    ]}
  ]},

  // ── GR-N2-35: 〜だけまし ──
  {id:"GR-N2-35",level:"N2",title:"〜だけまし",summary:"Pola 〜だけまし untuk level N2, dengan contoh penggunaan dalam konteks sekolah, kantor, layanan publik, dan kehidupan sehari-hari di Jepang.",groups:[
    {name:"〜だけまし",description:"Contoh penggunaan 〜だけまし dalam konteks alami sehari-hari di Jepang.",sentences:[
      {jp:"この前の説明会では、だけましという表現も実際の場面で使われていた。",kana:"このまえのせつめいかいでは、だけましというひょうげんもじっさいのばめんでつかわれていた。",romaji:"Kono mae no setsumeikai deha, dakemashitoiu hyougen mo jissai no bamen de tsukawa reteita.",meaning:"Pada sesi penjelasan sebelumnya, ungkapan ini juga dipakai dalam situasi nyata."},
      {jp:"区役所や学校でも、だけましのような言い方を見かけることがある。",kana:"くやくしょやがっこうでも、だけましのようないいかたをみかけることがある。",romaji:"Kuyakusho ya gakkou demo, dakemashinoyouna iikata wo mikake rukotogaaru.",meaning:"Di balai kota maupun sekolah, kadang terlihat cara ungkap seperti ini."},
      {jp:"職場の会話では、だけましを使うと少し自然な言い方になる。",kana:"しょくばのかいわでは、だけましをつかうとすこししぜんないいかたになる。",romaji:"Shokuba no kaiwa deha, dakemashiwo tsukau to sukoshi shizen na iikata ninaru.",meaning:"Dalam percakapan kerja, memakai pola ini bisa membuat ungkapan terdengar lebih alami."},
      {jp:"駅前の店で店員さんが話しているのを聞いて、だけましの使い方がよく分かった。",kana:"えきまえのみせでてんいんさんがはなしているのをきいて、だけましのつかいかたがよくわかった。",romaji:"Ekimae no mise de ten'in sanga hanashi teirunowo kii te, dakemashino tsukaikata gayoku waka tta.",meaning:"Saat mendengar staf toko di depan stasiun berbicara, saya jadi lebih paham cara pakai pola ini."},
      {jp:"授業だけでなく、日常の場面でもだけましは意外とよく出てくる。",kana:"じゅぎょうだけでなく、にちじょうのばめんでもだけましはいがいとよくでてくる。",romaji:"Jugyou dakedenaku, nichijou no bamen demodakemashiha igai toyoku dete kuru.",meaning:"Bukan hanya di kelas, pola ini ternyata cukup sering muncul dalam keseharian."}
    ]}
  ]},

  // ── GR-N2-36: 〜くらいなら ──
  {id:"GR-N2-36",level:"N2",title:"〜くらいなら",summary:"Pola 〜くらいなら untuk level N2, dengan contoh penggunaan dalam konteks sekolah, kantor, layanan publik, dan kehidupan sehari-hari di Jepang.",groups:[
    {name:"〜くらいなら",description:"Contoh penggunaan 〜くらいなら dalam konteks alami sehari-hari di Jepang.",sentences:[
      {jp:"この前の説明会では、くらいならという表現も実際の場面で使われていた。",kana:"このまえのせつめいかいでは、くらいならというひょうげんもじっさいのばめんでつかわれていた。",romaji:"Kono mae no setsumeikai deha, kurainaratoiu hyougen mo jissai no bamen de tsukawa reteita.",meaning:"Pada sesi penjelasan sebelumnya, ungkapan ini juga dipakai dalam situasi nyata."},
      {jp:"区役所や学校でも、くらいならのような言い方を見かけることがある。",kana:"くやくしょやがっこうでも、くらいならのようないいかたをみかけることがある。",romaji:"Kuyakusho ya gakkou demo, kurainaranoyouna iikata wo mikake rukotogaaru.",meaning:"Di balai kota maupun sekolah, kadang terlihat cara ungkap seperti ini."},
      {jp:"職場の会話では、くらいならを使うと少し自然な言い方になる。",kana:"しょくばのかいわでは、くらいならをつかうとすこししぜんないいかたになる。",romaji:"Shokuba no kaiwa deha, kurainarawo tsukau to sukoshi shizen na iikata ninaru.",meaning:"Dalam percakapan kerja, memakai pola ini bisa membuat ungkapan terdengar lebih alami."},
      {jp:"駅前の店で店員さんが話しているのを聞いて、くらいならの使い方がよく分かった。",kana:"えきまえのみせでてんいんさんがはなしているのをきいて、くらいならのつかいかたがよくわかった。",romaji:"Ekimae no mise de ten'in sanga hanashi teirunowo kii te, kurainarano tsukaikata gayoku waka tta.",meaning:"Saat mendengar staf toko di depan stasiun berbicara, saya jadi lebih paham cara pakai pola ini."},
      {jp:"授業だけでなく、日常の場面でもくらいならは意外とよく出てくる。",kana:"じゅぎょうだけでなく、にちじょうのばめんでもくらいならはいがいとよくでてくる。",romaji:"Jugyou dakedenaku, nichijou no bamen demokurainaraha igai toyoku dete kuru.",meaning:"Bukan hanya di kelas, pola ini ternyata cukup sering muncul dalam keseharian."}
    ]}
  ]},

  // ── GR-N2-37: 〜ざるをえない ──
  {id:"GR-N2-37",level:"N2",title:"〜ざるをえない",summary:"Pola 〜ざるをえない untuk level N2, dengan contoh penggunaan dalam konteks sekolah, kantor, layanan publik, dan kehidupan sehari-hari di Jepang.",groups:[
    {name:"〜ざるをえない",description:"Contoh penggunaan 〜ざるをえない dalam konteks alami sehari-hari di Jepang.",sentences:[
      {jp:"この前の説明会では、ざるをえないという表現も実際の場面で使われていた。",kana:"このまえのせつめいかいでは、ざるをえないというひょうげんもじっさいのばめんでつかわれていた。",romaji:"Kono mae no setsumeikai deha, zaruwoenaitoiu hyougen mo jissai no bamen de tsukawa reteita.",meaning:"Pada sesi penjelasan sebelumnya, ungkapan ini juga dipakai dalam situasi nyata."},
      {jp:"区役所や学校でも、ざるをえないのような言い方を見かけることがある。",kana:"くやくしょやがっこうでも、ざるをえないのようないいかたをみかけることがある。",romaji:"Kuyakusho ya gakkou demo, zaruwoenainoyouna iikata wo mikake rukotogaaru.",meaning:"Di balai kota maupun sekolah, kadang terlihat cara ungkap seperti ini."},
      {jp:"職場の会話では、ざるをえないを使うと少し自然な言い方になる。",kana:"しょくばのかいわでは、ざるをえないをつかうとすこししぜんないいかたになる。",romaji:"Shokuba no kaiwa deha, zaruwoenaiwo tsukau to sukoshi shizen na iikata ninaru.",meaning:"Dalam percakapan kerja, memakai pola ini bisa membuat ungkapan terdengar lebih alami."},
      {jp:"駅前の店で店員さんが話しているのを聞いて、ざるをえないの使い方がよく分かった。",kana:"えきまえのみせでてんいんさんがはなしているのをきいて、ざるをえないのつかいかたがよくわかった。",romaji:"Ekimae no mise de ten'in sanga hanashi teirunowo kii te, zaruwoenaino tsukaikata gayoku waka tta.",meaning:"Saat mendengar staf toko di depan stasiun berbicara, saya jadi lebih paham cara pakai pola ini."},
      {jp:"授業だけでなく、日常の場面でもざるをえないは意外とよく出てくる。",kana:"じゅぎょうだけでなく、にちじょうのばめんでもざるをえないはいがいとよくでてくる。",romaji:"Jugyou dakedenaku, nichijou no bamen demozaruwoenaiha igai toyoku dete kuru.",meaning:"Bukan hanya di kelas, pola ini ternyata cukup sering muncul dalam keseharian."}
    ]}
  ]},

  // ── GR-N2-38: 〜て(は)いられない ──
  {id:"GR-N2-38",level:"N2",title:"〜て(は)いられない",summary:"Pola 〜て(は)いられない untuk level N2, dengan contoh penggunaan dalam konteks sekolah, kantor, layanan publik, dan kehidupan sehari-hari di Jepang.",groups:[
    {name:"〜て(は)いられない",description:"Contoh penggunaan 〜て(は)いられない dalam konteks alami sehari-hari di Jepang.",sentences:[
      {jp:"必要事項を確認してていられない、そのあとで申込書を出した。",kana:"ひつようじこうをかくにんしてていられない、そのあとでもうしこみしょをだした。",romaji:"Hitsuyoujikou wo kakuninshi teteirarenai, sonoatode moushikomisho wo dashi ta.",meaning:"Setelah memeriksa poin yang diperlukan, saya lalu menyerahkan formulir pendaftaran."},
      {jp:"先に先生へ連絡してていられない, 予定を決めた。",kana:"さきにせんせいへれんらくしてていられない, よていをきめた。",romaji:"Sakini sensei he renraku shiteteirarenai,   yotei wo kime ta.",meaning:"Saya lebih dulu menghubungi sensei, lalu menentukan jadwal."},
      {jp:"荷物をまとめてていられない, すぐ出発できるようにした。",kana:"にもつをまとめてていられない, すぐしゅっぱつできるようにした。",romaji:"Nimotsu womatometeteirarenai,   sugu shuppatsu dekiruyounishita.",meaning:"Saya merapikan barang lebih dulu agar bisa segera berangkat."},
      {jp:"窓口で相談してていられない, 手続きを進めた。",kana:"まどぐちでそうだんしてていられない, てつづきをすすめた。",romaji:"Madoguchi de soudan shiteteirarenai,   tetsuzuki wo susume ta.",meaning:"Saya berkonsultasi di loket dulu lalu melanjutkan prosedurnya."},
      {jp:"一度落ち着いてていられない, 返事をすることにした。",kana:"いちどおちついてていられない, へんじをすることにした。",romaji:"Ichido ochitsui teteirarenai,   henji wosurukotonishita.",meaning:"Saya memutuskan untuk menenangkan diri dulu baru memberi jawaban."}
    ]}
  ]},

  // ── GR-N2-39: 〜ないではいられない ──
  {id:"GR-N2-39",level:"N2",title:"〜ないではいられない",summary:"Pola 〜ないではいられない untuk level N2, dengan contoh penggunaan dalam konteks sekolah, kantor, layanan publik, dan kehidupan sehari-hari di Jepang.",groups:[
    {name:"〜ないではいられない",description:"Contoh penggunaan 〜ないではいられない dalam konteks alami sehari-hari di Jepang.",sentences:[
      {jp:"この前の説明会では、ないではいられないという表現も実際の場面で使われていた。",kana:"このまえのせつめいかいでは、ないではいられないというひょうげんもじっさいのばめんでつかわれていた。",romaji:"Kono mae no setsumeikai deha, naidehairarenaitoiu hyougen mo jissai no bamen de tsukawa reteita.",meaning:"Pada sesi penjelasan sebelumnya, ungkapan ini juga dipakai dalam situasi nyata."},
      {jp:"区役所や学校でも、ないではいられないのような言い方を見かけることがある。",kana:"くやくしょやがっこうでも、ないではいられないのようないいかたをみかけることがある。",romaji:"Kuyakusho ya gakkou demo, naidehairarenainoyouna iikata wo mikake rukotogaaru.",meaning:"Di balai kota maupun sekolah, kadang terlihat cara ungkap seperti ini."},
      {jp:"職場の会話では、ないではいられないを使うと少し自然な言い方になる。",kana:"しょくばのかいわでは、ないではいられないをつかうとすこししぜんないいかたになる。",romaji:"Shokuba no kaiwa deha, naidehairarenaiwo tsukau to sukoshi shizen na iikata ninaru.",meaning:"Dalam percakapan kerja, memakai pola ini bisa membuat ungkapan terdengar lebih alami."},
      {jp:"駅前の店で店員さんが話しているのを聞いて、ないではいられないの使い方がよく分かった。",kana:"えきまえのみせでてんいんさんがはなしているのをきいて、ないではいられないのつかいかたがよくわかった。",romaji:"Ekimae no mise de ten'in sanga hanashi teirunowo kii te, naidehairarenaino tsukaikata gayoku waka tta.",meaning:"Saat mendengar staf toko di depan stasiun berbicara, saya jadi lebih paham cara pakai pola ini."},
      {jp:"授業だけでなく、日常の場面でもないではいられないは意外とよく出てくる。",kana:"じゅぎょうだけでなく、にちじょうのばめんでもないではいられないはいがいとよくでてくる。",romaji:"Jugyou dakedenaku, nichijou no bamen demonaidehairarenaiha igai toyoku dete kuru.",meaning:"Bukan hanya di kelas, pola ini ternyata cukup sering muncul dalam keseharian."}
    ]}
  ]},

  // ── GR-N2-40: 〜てならない ──
  {id:"GR-N2-40",level:"N2",title:"〜てならない",summary:"Pola 〜てならない untuk level N2, dengan contoh penggunaan dalam konteks sekolah, kantor, layanan publik, dan kehidupan sehari-hari di Jepang.",groups:[
    {name:"〜てならない",description:"Contoh penggunaan 〜てならない dalam konteks alami sehari-hari di Jepang.",sentences:[
      {jp:"必要事項を確認しててならない、そのあとで申込書を出した。",kana:"ひつようじこうをかくにんしててならない、そのあとでもうしこみしょをだした。",romaji:"Hitsuyoujikou wo kakuninshi tetenaranai, sonoatode moushikomisho wo dashi ta.",meaning:"Setelah memeriksa poin yang diperlukan, saya lalu menyerahkan formulir pendaftaran."},
      {jp:"先に先生へ連絡しててならない, 予定を決めた。",kana:"さきにせんせいへれんらくしててならない, よていをきめた。",romaji:"Sakini sensei he renraku shitetenaranai,   yotei wo kime ta.",meaning:"Saya lebih dulu menghubungi sensei, lalu menentukan jadwal."},
      {jp:"荷物をまとめててならない, すぐ出発できるようにした。",kana:"にもつをまとめててならない, すぐしゅっぱつできるようにした。",romaji:"Nimotsu womatometetenaranai,   sugu shuppatsu dekiruyounishita.",meaning:"Saya merapikan barang lebih dulu agar bisa segera berangkat."},
      {jp:"窓口で相談しててならない, 手続きを進めた。",kana:"まどぐちでそうだんしててならない, てつづきをすすめた。",romaji:"Madoguchi de soudan shitetenaranai,   tetsuzuki wo susume ta.",meaning:"Saya berkonsultasi di loket dulu lalu melanjutkan prosedurnya."},
      {jp:"一度落ち着いててならない, 返事をすることにした。",kana:"いちどおちついててならない, へんじをすることにした。",romaji:"Ichido ochitsui tetenaranai,   henji wosurukotonishita.",meaning:"Saya memutuskan untuk menenangkan diri dulu baru memberi jawaban."}
    ]}
  ]},

  // ── GR-N2-41: 〜にほかならない ──
  {id:"GR-N2-41",level:"N2",title:"〜にほかならない",summary:"Pola 〜にほかならない untuk level N2, dengan contoh penggunaan dalam konteks sekolah, kantor, layanan publik, dan kehidupan sehari-hari di Jepang.",groups:[
    {name:"〜にほかならない",description:"Contoh penggunaan 〜にほかならない dalam konteks alami sehari-hari di Jepang.",sentences:[
      {jp:"留学生にほかならない説明会が、大学のホールで開かれた。",kana:"りゅうがくせいにほかならないせつめいかいが、だいがくのほーるでひらかれた。",romaji:"Ryuugakusei nihokanaranai setsumeikai ga, daigaku no hooru de hiraka reta.",meaning:"Sesi penjelasan untuk mahasiswa asing diadakan di aula universitas."},
      {jp:"駅前の再開発にほかならない住民向けの案内が配られた。",kana:"えきまえのさいかいはつにほかならないじゅうみんむけのあんないがくばられた。",romaji:"Ekimae no saikaihatsu nihokanaranai juumin muke no annai ga kubara reta.",meaning:"Pemberitahuan bagi warga terkait pembangunan ulang area depan stasiun dibagikan."},
      {jp:"この制度にほかならない質問があれば、区役所の窓口で確認できる。",kana:"このせいどにほかならないしつもんがあれば、くやくしょのまどぐちでかくにんできる。",romaji:"Kono seido nihokanaranai shitsumon gaareba, kuyakusho no madoguchi de kakunin dekiru.",meaning:"Kalau ada pertanyaan terkait sistem ini, bisa ditanyakan di loket balai kota."},
      {jp:"外国人スタッフにほかならない研修も、来月から始まる予定だ。",kana:"がいこくじんすたっふにほかならないけんしゅうも、らいげつからはじまるよていだ。",romaji:"Gaikokujin sutaffu nihokanaranai kenshuu mo, raigetsu kara hajima ru yotei da.",meaning:"Pelatihan untuk staf asing juga dijadwalkan mulai bulan depan."},
      {jp:"今回の変更点にほかならない詳しい資料は、受付で受け取れる。",kana:"こんかいのへんこうてんにほかならないくわしいしりょうは、うけつけでうけとれる。",romaji:"Konkai no henkouten nihokanaranai kuwashii shiryou ha, uketsuke de uketore ru.",meaning:"Materi rinci terkait perubahan kali ini bisa diambil di meja penerima tamu."}
    ]}
  ]},

  // ── GR-N2-42: 〜というものだ ──
  {id:"GR-N2-42",level:"N2",title:"〜というものだ",summary:"Pola 〜というものだ untuk level N2, dengan contoh penggunaan dalam konteks sekolah, kantor, layanan publik, dan kehidupan sehari-hari di Jepang.",groups:[
    {name:"〜というものだ",description:"Contoh penggunaan 〜というものだ dalam konteks alami sehari-hari di Jepang.",sentences:[
      {jp:"駅に着くと、ちょうど案内放送が始まった。",kana:"えきにつくと、ちょうどあんないほうそうがはじまった。",romaji:"Eki ni tsuku to, choudo annaihousou ga hajima tta.",meaning:"Begitu sampai di stasiun, pengumuman baru saja dimulai."},
      {jp:"春になると、この川沿いは散歩する人でにぎわう。",kana:"はるになると、このかわぞいはさんぽするにんでにぎわう。",romaji:"Haru ninaruto, kono kawazoi ha sanpo suru nin denigiwau.",meaning:"Begitu musim semi tiba, area tepi sungai ini ramai oleh orang yang berjalan-jalan."},
      {jp:"資料を読むと、今回の変更点がよく分かる。",kana:"しりょうをよむと、こんかいのへんこうてんがよくわかる。",romaji:"Shiryou wo yomu to, konkai no henkouten gayoku waka ru.",meaning:"Kalau membaca materinya, perubahan kali ini jadi mudah dipahami."},
      {jp:"彼の話し方を見ると、かなり緊張しているようだ。",kana:"かのはなしかたをみると、かなりきんちょうしているようだ。",romaji:"Kano hanashikata wo miru to, kanari kinchoushi teiruyouda.",meaning:"Melihat cara dia berbicara, tampaknya dia cukup tegang."},
      {jp:"この条件だと、申し込みは早い方がよさそうだ。",kana:"このじょうけんだと、もうしこみははやいほうがよさそうだ。",romaji:"Kono jouken dato, moushikomi ha hayai houga yosasouda.",meaning:"Kalau syaratnya seperti ini, tampaknya lebih baik mendaftar lebih cepat."}
    ]}
  ]},

  // ── GR-N2-43: 〜にすぎない ──
  {id:"GR-N2-43",level:"N2",title:"〜にすぎない",summary:"Pola 〜にすぎない untuk level N2, dengan contoh penggunaan dalam konteks sekolah, kantor, layanan publik, dan kehidupan sehari-hari di Jepang.",groups:[
    {name:"〜にすぎない",description:"Contoh penggunaan 〜にすぎない dalam konteks alami sehari-hari di Jepang.",sentences:[
      {jp:"留学生にすぎない説明会が、大学のホールで開かれた。",kana:"りゅうがくせいにすぎないせつめいかいが、だいがくのほーるでひらかれた。",romaji:"Ryuugakusei nisuginai setsumeikai ga, daigaku no hooru de hiraka reta.",meaning:"Sesi penjelasan untuk mahasiswa asing diadakan di aula universitas."},
      {jp:"駅前の再開発にすぎない住民向けの案内が配られた。",kana:"えきまえのさいかいはつにすぎないじゅうみんむけのあんないがくばられた。",romaji:"Ekimae no saikaihatsu nisuginai juumin muke no annai ga kubara reta.",meaning:"Pemberitahuan bagi warga terkait pembangunan ulang area depan stasiun dibagikan."},
      {jp:"この制度にすぎない質問があれば、区役所の窓口で確認できる。",kana:"このせいどにすぎないしつもんがあれば、くやくしょのまどぐちでかくにんできる。",romaji:"Kono seido nisuginai shitsumon gaareba, kuyakusho no madoguchi de kakunin dekiru.",meaning:"Kalau ada pertanyaan terkait sistem ini, bisa ditanyakan di loket balai kota."},
      {jp:"外国人スタッフにすぎない研修も、来月から始まる予定だ。",kana:"がいこくじんすたっふにすぎないけんしゅうも、らいげつからはじまるよていだ。",romaji:"Gaikokujin sutaffu nisuginai kenshuu mo, raigetsu kara hajima ru yotei da.",meaning:"Pelatihan untuk staf asing juga dijadwalkan mulai bulan depan."},
      {jp:"今回の変更点にすぎない詳しい資料は、受付で受け取れる。",kana:"こんかいのへんこうてんにすぎないくわしいしりょうは、うけつけでうけとれる。",romaji:"Konkai no henkouten nisuginai kuwashii shiryou ha, uketsuke de uketore ru.",meaning:"Materi rinci terkait perubahan kali ini bisa diambil di meja penerima tamu."}
    ]}
  ]},

  // ── GR-N2-44: 〜(より)ほかない ──
  {id:"GR-N2-44",level:"N2",title:"〜(より)ほかない",summary:"Pola 〜(より)ほかない untuk level N2, dengan contoh penggunaan dalam konteks sekolah, kantor, layanan publik, dan kehidupan sehari-hari di Jepang.",groups:[
    {name:"〜(より)ほかない",description:"Contoh penggunaan 〜(より)ほかない dalam konteks alami sehari-hari di Jepang.",sentences:[
      {jp:"この前の説明会では、ほかないという表現も実際の場面で使われていた。",kana:"このまえのせつめいかいでは、ほかないというひょうげんもじっさいのばめんでつかわれていた。",romaji:"Kono mae no setsumeikai deha, hokanaitoiu hyougen mo jissai no bamen de tsukawa reteita.",meaning:"Pada sesi penjelasan sebelumnya, ungkapan ini juga dipakai dalam situasi nyata."},
      {jp:"区役所や学校でも、ほかないのような言い方を見かけることがある。",kana:"くやくしょやがっこうでも、ほかないのようないいかたをみかけることがある。",romaji:"Kuyakusho ya gakkou demo, hokanainoyouna iikata wo mikake rukotogaaru.",meaning:"Di balai kota maupun sekolah, kadang terlihat cara ungkap seperti ini."},
      {jp:"職場の会話では、ほかないを使うと少し自然な言い方になる。",kana:"しょくばのかいわでは、ほかないをつかうとすこししぜんないいかたになる。",romaji:"Shokuba no kaiwa deha, hokanaiwo tsukau to sukoshi shizen na iikata ninaru.",meaning:"Dalam percakapan kerja, memakai pola ini bisa membuat ungkapan terdengar lebih alami."},
      {jp:"駅前の店で店員さんが話しているのを聞いて、ほかないの使い方がよく分かった。",kana:"えきまえのみせでてんいんさんがはなしているのをきいて、ほかないのつかいかたがよくわかった。",romaji:"Ekimae no mise de ten'in sanga hanashi teirunowo kii te, hokanaino tsukaikata gayoku waka tta.",meaning:"Saat mendengar staf toko di depan stasiun berbicara, saya jadi lebih paham cara pakai pola ini."},
      {jp:"授業だけでなく、日常の場面でもほかないは意外とよく出てくる。",kana:"じゅぎょうだけでなく、にちじょうのばめんでもほかないはいがいとよくでてくる。",romaji:"Jugyou dakedenaku, nichijou no bamen demohokanaiha igai toyoku dete kuru.",meaning:"Bukan hanya di kelas, pola ini ternyata cukup sering muncul dalam keseharian."}
    ]}
  ]},

  // ── GR-N2-45: 〜おそれがある ──
  {id:"GR-N2-45",level:"N2",title:"〜おそれがある",summary:"Pola 〜おそれがある untuk level N2, dengan contoh penggunaan dalam konteks sekolah, kantor, layanan publik, dan kehidupan sehari-hari di Jepang.",groups:[
    {name:"〜おそれがある",description:"Contoh penggunaan 〜おそれがある dalam konteks alami sehari-hari di Jepang.",sentences:[
      {jp:"この前の説明会では、おそれがあるという表現も実際の場面で使われていた。",kana:"このまえのせつめいかいでは、おそれがあるというひょうげんもじっさいのばめんでつかわれていた。",romaji:"Kono mae no setsumeikai deha, osoregaarutoiu hyougen mo jissai no bamen de tsukawa reteita.",meaning:"Pada sesi penjelasan sebelumnya, ungkapan ini juga dipakai dalam situasi nyata."},
      {jp:"区役所や学校でも、おそれがあるのような言い方を見かけることがある。",kana:"くやくしょやがっこうでも、おそれがあるのようないいかたをみかけることがある。",romaji:"Kuyakusho ya gakkou demo, osoregaarunoyouna iikata wo mikake rukotogaaru.",meaning:"Di balai kota maupun sekolah, kadang terlihat cara ungkap seperti ini."},
      {jp:"職場の会話では、おそれがあるを使うと少し自然な言い方になる。",kana:"しょくばのかいわでは、おそれがあるをつかうとすこししぜんないいかたになる。",romaji:"Shokuba no kaiwa deha, osoregaaruwo tsukau to sukoshi shizen na iikata ninaru.",meaning:"Dalam percakapan kerja, memakai pola ini bisa membuat ungkapan terdengar lebih alami."},
      {jp:"駅前の店で店員さんが話しているのを聞いて、おそれがあるの使い方がよく分かった。",kana:"えきまえのみせでてんいんさんがはなしているのをきいて、おそれがあるのつかいかたがよくわかった。",romaji:"Ekimae no mise de ten'in sanga hanashi teirunowo kii te, osoregaaruno tsukaikata gayoku waka tta.",meaning:"Saat mendengar staf toko di depan stasiun berbicara, saya jadi lebih paham cara pakai pola ini."},
      {jp:"授業だけでなく、日常の場面でもおそれがあるは意外とよく出てくる。",kana:"じゅぎょうだけでなく、にちじょうのばめんでもおそれがあるはいがいとよくでてくる。",romaji:"Jugyou dakedenaku, nichijou no bamen demoosoregaaruha igai toyoku dete kuru.",meaning:"Bukan hanya di kelas, pola ini ternyata cukup sering muncul dalam keseharian."}
    ]}
  ]},

  // ── GR-N2-46: 〜かねない ──
  {id:"GR-N2-46",level:"N2",title:"〜かねない",summary:"Pola 〜かねない untuk level N2, dengan contoh penggunaan dalam konteks sekolah, kantor, layanan publik, dan kehidupan sehari-hari di Jepang.",groups:[
    {name:"〜かねない",description:"Contoh penggunaan 〜かねない dalam konteks alami sehari-hari di Jepang.",sentences:[
      {jp:"この前の説明会では、かねないという表現も実際の場面で使われていた。",kana:"このまえのせつめいかいでは、かねないというひょうげんもじっさいのばめんでつかわれていた。",romaji:"Kono mae no setsumeikai deha, kanenaitoiu hyougen mo jissai no bamen de tsukawa reteita.",meaning:"Pada sesi penjelasan sebelumnya, ungkapan ini juga dipakai dalam situasi nyata."},
      {jp:"区役所や学校でも、かねないのような言い方を見かけることがある。",kana:"くやくしょやがっこうでも、かねないのようないいかたをみかけることがある。",romaji:"Kuyakusho ya gakkou demo, kanenainoyouna iikata wo mikake rukotogaaru.",meaning:"Di balai kota maupun sekolah, kadang terlihat cara ungkap seperti ini."},
      {jp:"職場の会話では、かねないを使うと少し自然な言い方になる。",kana:"しょくばのかいわでは、かねないをつかうとすこししぜんないいかたになる。",romaji:"Shokuba no kaiwa deha, kanenaiwo tsukau to sukoshi shizen na iikata ninaru.",meaning:"Dalam percakapan kerja, memakai pola ini bisa membuat ungkapan terdengar lebih alami."},
      {jp:"駅前の店で店員さんが話しているのを聞いて、かねないの使い方がよく分かった。",kana:"えきまえのみせでてんいんさんがはなしているのをきいて、かねないのつかいかたがよくわかった。",romaji:"Ekimae no mise de ten'in sanga hanashi teirunowo kii te, kanenaino tsukaikata gayoku waka tta.",meaning:"Saat mendengar staf toko di depan stasiun berbicara, saya jadi lebih paham cara pakai pola ini."},
      {jp:"授業だけでなく、日常の場面でもかねないは意外とよく出てくる。",kana:"じゅぎょうだけでなく、にちじょうのばめんでもかねないはいがいとよくでてくる。",romaji:"Jugyou dakedenaku, nichijou no bamen demokanenaiha igai toyoku dete kuru.",meaning:"Bukan hanya di kelas, pola ini ternyata cukup sering muncul dalam keseharian."}
    ]}
  ]},

  // ── GR-N2-47: 〜に相違ない ──
  {id:"GR-N2-47",level:"N2",title:"〜に相違ない",summary:"Pola 〜に相違ない untuk level N2, dengan contoh penggunaan dalam konteks sekolah, kantor, layanan publik, dan kehidupan sehari-hari di Jepang.",groups:[
    {name:"〜に相違ない",description:"Contoh penggunaan 〜に相違ない dalam konteks alami sehari-hari di Jepang.",sentences:[
      {jp:"留学生に相違ない説明会が、大学のホールで開かれた。",kana:"りゅうがくせいにそういないせつめいかいが、だいがくのほーるでひらかれた。",romaji:"Ryuugakusei ni soui nai setsumeikai ga, daigaku no hooru de hiraka reta.",meaning:"Sesi penjelasan untuk mahasiswa asing diadakan di aula universitas."},
      {jp:"駅前の再開発に相違ない住民向けの案内が配られた。",kana:"えきまえのさいかいはつにそういないじゅうみんむけのあんないがくばられた。",romaji:"Ekimae no saikaihatsu ni soui nai juumin muke no annai ga kubara reta.",meaning:"Pemberitahuan bagi warga terkait pembangunan ulang area depan stasiun dibagikan."},
      {jp:"この制度に相違ない質問があれば、区役所の窓口で確認できる。",kana:"このせいどにそういないしつもんがあれば、くやくしょのまどぐちでかくにんできる。",romaji:"Kono seido ni soui nai shitsumon gaareba, kuyakusho no madoguchi de kakunin dekiru.",meaning:"Kalau ada pertanyaan terkait sistem ini, bisa ditanyakan di loket balai kota."},
      {jp:"外国人スタッフに相違ない研修も、来月から始まる予定だ。",kana:"がいこくじんすたっふにそういないけんしゅうも、らいげつからはじまるよていだ。",romaji:"Gaikokujin sutaffu ni soui nai kenshuu mo, raigetsu kara hajima ru yotei da.",meaning:"Pelatihan untuk staf asing juga dijadwalkan mulai bulan depan."},
      {jp:"今回の変更点に相違ない詳しい資料は、受付で受け取れる。",kana:"こんかいのへんこうてんにそういないくわしいしりょうは、うけつけでうけとれる。",romaji:"Konkai no henkouten ni soui nai kuwashii shiryou ha, uketsuke de uketore ru.",meaning:"Materi rinci terkait perubahan kali ini bisa diambil di meja penerima tamu."}
    ]}
  ]},

  // ── GR-N2-48: 〜とか ──
  {id:"GR-N2-48",level:"N2",title:"〜とか",summary:"Pola 〜とか untuk level N2, dengan contoh penggunaan dalam konteks sekolah, kantor, layanan publik, dan kehidupan sehari-hari di Jepang.",groups:[
    {name:"〜とか",description:"Contoh penggunaan 〜とか dalam konteks alami sehari-hari di Jepang.",sentences:[
      {jp:"駅に着くと、ちょうど案内放送が始まった。",kana:"えきにつくと、ちょうどあんないほうそうがはじまった。",romaji:"Eki ni tsuku to, choudo annaihousou ga hajima tta.",meaning:"Begitu sampai di stasiun, pengumuman baru saja dimulai."},
      {jp:"春になると、この川沿いは散歩する人でにぎわう。",kana:"はるになると、このかわぞいはさんぽするにんでにぎわう。",romaji:"Haru ninaruto, kono kawazoi ha sanpo suru nin denigiwau.",meaning:"Begitu musim semi tiba, area tepi sungai ini ramai oleh orang yang berjalan-jalan."},
      {jp:"資料を読むと、今回の変更点がよく分かる。",kana:"しりょうをよむと、こんかいのへんこうてんがよくわかる。",romaji:"Shiryou wo yomu to, konkai no henkouten gayoku waka ru.",meaning:"Kalau membaca materinya, perubahan kali ini jadi mudah dipahami."},
      {jp:"彼の話し方を見ると、かなり緊張しているようだ。",kana:"かのはなしかたをみると、かなりきんちょうしているようだ。",romaji:"Kano hanashikata wo miru to, kanari kinchoushi teiruyouda.",meaning:"Melihat cara dia berbicara, tampaknya dia cukup tegang."},
      {jp:"この条件だと、申し込みは早い方がよさそうだ。",kana:"このじょうけんだと、もうしこみははやいほうがよさそうだ。",romaji:"Kono jouken dato, moushikomi ha hayai houga yosasouda.",meaning:"Kalau syaratnya seperti ini, tampaknya lebih baik mendaftar lebih cepat."}
    ]}
  ]},

  // ── GR-N2-49: 〜やら〜やら ──
  {id:"GR-N2-49",level:"N2",title:"〜やら〜やら",summary:"Pola 〜やら〜やら untuk level N2, dengan contoh penggunaan dalam konteks sekolah, kantor, layanan publik, dan kehidupan sehari-hari di Jepang.",groups:[
    {name:"〜やら〜やら",description:"Contoh penggunaan 〜やら〜やら dalam konteks alami sehari-hari di Jepang.",sentences:[
      {jp:"この前の説明会では、やらやらという表現も実際の場面で使われていた。",kana:"このまえのせつめいかいでは、やらやらというひょうげんもじっさいのばめんでつかわれていた。",romaji:"Kono mae no setsumeikai deha, yarayaratoiu hyougen mo jissai no bamen de tsukawa reteita.",meaning:"Pada sesi penjelasan sebelumnya, ungkapan ini juga dipakai dalam situasi nyata."},
      {jp:"区役所や学校でも、やらやらのような言い方を見かけることがある。",kana:"くやくしょやがっこうでも、やらやらのようないいかたをみかけることがある。",romaji:"Kuyakusho ya gakkou demo, yarayaranoyouna iikata wo mikake rukotogaaru.",meaning:"Di balai kota maupun sekolah, kadang terlihat cara ungkap seperti ini."},
      {jp:"職場の会話では、やらやらを使うと少し自然な言い方になる。",kana:"しょくばのかいわでは、やらやらをつかうとすこししぜんないいかたになる。",romaji:"Shokuba no kaiwa deha, yarayarawo tsukau to sukoshi shizen na iikata ninaru.",meaning:"Dalam percakapan kerja, memakai pola ini bisa membuat ungkapan terdengar lebih alami."},
      {jp:"駅前の店で店員さんが話しているのを聞いて、やらやらの使い方がよく分かった。",kana:"えきまえのみせでてんいんさんがはなしているのをきいて、やらやらのつかいかたがよくわかった。",romaji:"Ekimae no mise de ten'in sanga hanashi teirunowo kii te, yarayarano tsukaikata gayoku waka tta.",meaning:"Saat mendengar staf toko di depan stasiun berbicara, saya jadi lebih paham cara pakai pola ini."},
      {jp:"授業だけでなく、日常の場面でもやらやらは意外とよく出てくる。",kana:"じゅぎょうだけでなく、にちじょうのばめんでもやらやらはいがいとよくでてくる。",romaji:"Jugyou dakedenaku, nichijou no bamen demoyarayaraha igai toyoku dete kuru.",meaning:"Bukan hanya di kelas, pola ini ternyata cukup sering muncul dalam keseharian."}
    ]}
  ]},

  // ── GR-N2-50: 〜といった ──
  {id:"GR-N2-50",level:"N2",title:"〜といった",summary:"Pola 〜といった untuk level N2, dengan contoh penggunaan dalam konteks sekolah, kantor, layanan publik, dan kehidupan sehari-hari di Jepang.",groups:[
    {name:"〜といった",description:"Contoh penggunaan 〜といった dalam konteks alami sehari-hari di Jepang.",sentences:[
      {jp:"駅に着くと、ちょうど案内放送が始まった。",kana:"えきにつくと、ちょうどあんないほうそうがはじまった。",romaji:"Eki ni tsuku to, choudo annaihousou ga hajima tta.",meaning:"Begitu sampai di stasiun, pengumuman baru saja dimulai."},
      {jp:"春になると、この川沿いは散歩する人でにぎわう。",kana:"はるになると、このかわぞいはさんぽするにんでにぎわう。",romaji:"Haru ninaruto, kono kawazoi ha sanpo suru nin denigiwau.",meaning:"Begitu musim semi tiba, area tepi sungai ini ramai oleh orang yang berjalan-jalan."},
      {jp:"資料を読むと、今回の変更点がよく分かる。",kana:"しりょうをよむと、こんかいのへんこうてんがよくわかる。",romaji:"Shiryou wo yomu to, konkai no henkouten gayoku waka ru.",meaning:"Kalau membaca materinya, perubahan kali ini jadi mudah dipahami."},
      {jp:"彼の話し方を見ると、かなり緊張しているようだ。",kana:"かのはなしかたをみると、かなりきんちょうしているようだ。",romaji:"Kano hanashikata wo miru to, kanari kinchoushi teiruyouda.",meaning:"Melihat cara dia berbicara, tampaknya dia cukup tegang."},
      {jp:"この条件だと、申し込みは早い方がよさそうだ。",kana:"このじょうけんだと、もうしこみははやいほうがよさそうだ。",romaji:"Kono jouken dato, moushikomi ha hayai houga yosasouda.",meaning:"Kalau syaratnya seperti ini, tampaknya lebih baik mendaftar lebih cepat."}
    ]}
  ]},

  // ── GR-N2-51: 〜というか〜というか ──
  {id:"GR-N2-51",level:"N2",title:"〜というか〜というか",summary:"Pola 〜というか〜というか untuk level N2, dengan contoh penggunaan dalam konteks sekolah, kantor, layanan publik, dan kehidupan sehari-hari di Jepang.",groups:[
    {name:"〜というか〜というか",description:"Contoh penggunaan 〜というか〜というか dalam konteks alami sehari-hari di Jepang.",sentences:[
      {jp:"駅に着くと、ちょうど案内放送が始まった。",kana:"えきにつくと、ちょうどあんないほうそうがはじまった。",romaji:"Eki ni tsuku to, choudo annaihousou ga hajima tta.",meaning:"Begitu sampai di stasiun, pengumuman baru saja dimulai."},
      {jp:"春になると、この川沿いは散歩する人でにぎわう。",kana:"はるになると、このかわぞいはさんぽするにんでにぎわう。",romaji:"Haru ninaruto, kono kawazoi ha sanpo suru nin denigiwau.",meaning:"Begitu musim semi tiba, area tepi sungai ini ramai oleh orang yang berjalan-jalan."},
      {jp:"資料を読むと、今回の変更点がよく分かる。",kana:"しりょうをよむと、こんかいのへんこうてんがよくわかる。",romaji:"Shiryou wo yomu to, konkai no henkouten gayoku waka ru.",meaning:"Kalau membaca materinya, perubahan kali ini jadi mudah dipahami."},
      {jp:"彼の話し方を見ると、かなり緊張しているようだ。",kana:"かのはなしかたをみると、かなりきんちょうしているようだ。",romaji:"Kano hanashikata wo miru to, kanari kinchoushi teiruyouda.",meaning:"Melihat cara dia berbicara, tampaknya dia cukup tegang."},
      {jp:"この条件だと、申し込みは早い方がよさそうだ。",kana:"このじょうけんだと、もうしこみははやいほうがよさそうだ。",romaji:"Kono jouken dato, moushikomi ha hayai houga yosasouda.",meaning:"Kalau syaratnya seperti ini, tampaknya lebih baik mendaftar lebih cepat."}
    ]}
  ]},

  // ── GR-N2-52: 〜抜きで / 〜抜きにして ──
  {id:"GR-N2-52",level:"N2",title:"〜抜きで / 〜抜きにして",summary:"Pola 〜抜きで / 〜抜きにして untuk level N2, dengan contoh penggunaan dalam konteks sekolah, kantor, layanan publik, dan kehidupan sehari-hari di Jepang.",groups:[
    {name:"〜抜きで / 〜抜きにして",description:"Contoh penggunaan 〜抜きで / 〜抜きにして dalam konteks alami sehari-hari di Jepang.",sentences:[
      {jp:"この前の説明会では、抜きでという表現も実際の場面で使われていた。",kana:"このまえのせつめいかいでは、ぬきでというひょうげんもじっさいのばめんでつかわれていた。",romaji:"Kono mae no setsumeikai deha, nuki detoiu hyougen mo jissai no bamen de tsukawa reteita.",meaning:"Pada sesi penjelasan sebelumnya, ungkapan ini juga dipakai dalam situasi nyata."},
      {jp:"区役所や学校でも、抜きでのような言い方を見かけることがある。",kana:"くやくしょやがっこうでも、ぬきでのようないいかたをみかけることがある。",romaji:"Kuyakusho ya gakkou demo, nuki denoyouna iikata wo mikake rukotogaaru.",meaning:"Di balai kota maupun sekolah, kadang terlihat cara ungkap seperti ini."},
      {jp:"職場の会話では、抜きでを使うと少し自然な言い方になる。",kana:"しょくばのかいわでは、ぬきでをつかうとすこししぜんないいかたになる。",romaji:"Shokuba no kaiwa deha, nuki dewo tsukau to sukoshi shizen na iikata ninaru.",meaning:"Dalam percakapan kerja, memakai pola ini bisa membuat ungkapan terdengar lebih alami."},
      {jp:"駅前の店で店員さんが話しているのを聞いて、抜きでの使い方がよく分かった。",kana:"えきまえのみせでてんいんさんがはなしているのをきいて、ぬきでのつかいかたがよくわかった。",romaji:"Ekimae no mise de ten'in sanga hanashi teirunowo kii te, nuki deno tsukaikata gayoku waka tta.",meaning:"Saat mendengar staf toko di depan stasiun berbicara, saya jadi lebih paham cara pakai pola ini."},
      {jp:"授業だけでなく、日常の場面でも抜きでは意外とよく出てくる。",kana:"じゅぎょうだけでなく、にちじょうのばめんでもぬきではいがいとよくでてくる。",romaji:"Jugyou dakedenaku, nichijou no bamen demo nuki deha igai toyoku dete kuru.",meaning:"Bukan hanya di kelas, pola ini ternyata cukup sering muncul dalam keseharian."}
    ]}
  ]},

  // ── GR-N2-53: 〜ことなく ──
  {id:"GR-N2-53",level:"N2",title:"〜ことなく",summary:"Pola 〜ことなく untuk level N2, dengan contoh penggunaan dalam konteks sekolah, kantor, layanan publik, dan kehidupan sehari-hari di Jepang.",groups:[
    {name:"〜ことなく",description:"Contoh penggunaan 〜ことなく dalam konteks alami sehari-hari di Jepang.",sentences:[
      {jp:"今日は寄り道せずに、まっすぐ家に帰る。",kana:"こんにちはよりみちせずに、まっすぐいえにかえる。",romaji:"Konnichiha yorimichi sezuni, massugu ie ni kaeru.",meaning:"Hari ini saya pulang langsung ke rumah tanpa mampir ke mana-mana."},
      {jp:"大声を出すことなく、落ち着いて案内してくれた。",kana:"おおごえをだすことなく、おちついてあんないしてくれた。",romaji:"Oogoe wo dasu kotonaku, ochitsui te annai shitekureta.",meaning:"Dia memberi arahan dengan tenang tanpa meninggikan suara."},
      {jp:"詳しく説明せずとも、表情を見れば事情は伝わった。",kana:"くわしくせつめいせずとも、ひょうじょうをみればじじょうはつたわった。",romaji:"Kuwashiku setsumeise zutomo, hyoujou wo mire ba jijou ha tsutawa tta.",meaning:"Tanpa penjelasan panjang pun, situasinya tersampaikan hanya dari ekspresi wajah."},
      {jp:"休憩を取らずに働き続けるのは体によくない。",kana:"きゅうけいをとらずにはたらきつづけるのはからだによくない。",romaji:"Kyuukei wo tora zuni hataraki tsuzuke runoha karada niyokunai.",meaning:"Terus bekerja tanpa istirahat tidak baik untuk tubuh."},
      {jp:"無理に訳すことなく、そのまま聞き取る練習も大事だ。",kana:"むりにやくすことなく、そのままききとるれんしゅうもだいじだ。",romaji:"Muri ni yakusu kotonaku, sonomama kiki toru renshuu mo daiji da.",meaning:"Berlatih menangkap makna tanpa langsung menerjemahkan juga penting."}
    ]}
  ]},

  // ── GR-N2-54: 〜をこめて ──
  {id:"GR-N2-54",level:"N2",title:"〜をこめて",summary:"Pola 〜をこめて untuk level N2, dengan contoh penggunaan dalam konteks sekolah, kantor, layanan publik, dan kehidupan sehari-hari di Jepang.",groups:[
    {name:"〜をこめて",description:"Contoh penggunaan 〜をこめて dalam konteks alami sehari-hari di Jepang.",sentences:[
      {jp:"地域のイベントをこめて、近所の人と少しずつ顔見知りになった。",kana:"ちいきのいべんとをこめて、きんじょのにんとすこしずつかおみしりになった。",romaji:"Chiiki no ibento wokomete, kinjo no nin to sukoshi zutsu kaomishiri ninatta.",meaning:"Melalui acara lingkungan, saya perlahan mulai mengenal orang-orang sekitar."},
      {jp:"先輩との会話をこめて、就職活動の流れが具体的に見えてきた。",kana:"せんぱいとのかいわをこめて、しゅうしょくかつどうのながれがぐたいてきにみえてきた。",romaji:"Senpai tono kaiwa wokomete, shuushokukatsudou no nagare ga gutaiteki ni mie tekita.",meaning:"Melalui percakapan dengan senior, alur mencari kerja jadi terasa lebih jelas."},
      {jp:"実習をこめて、教室では分からなかった課題にも気づいた。",kana:"じっしゅうをこめて、きょうしつではわからなかったかだいにもきづいた。",romaji:"Jisshuu wokomete, kyoushitsu deha waka ranakatta kadai nimo kizu ita.",meaning:"Melalui praktik lapangan, saya menyadari tantangan yang tidak terlihat di kelas."},
      {jp:"この資料をこめて、学校側の考え方を理解してほしい。",kana:"このしりょうをこめて、がっこうがわのかんがえかたをりかいしてほしい。",romaji:"Kono shiryou wokomete, gakkougawa no kangaekata wo rikai shitehoshii.",meaning:"Melalui materi ini, saya ingin Anda memahami cara pandang pihak sekolah."},
      {jp:"商店街の取り組みをこめて、地域全体の雰囲気も変わってきた。",kana:"しょうてんがいのとりくみをこめて、ちいきぜんたいのふんいきもかわってきた。",romaji:"Shoutengai no torikumi wokomete, chiiki zentai no fun'iki mo kawa ttekita.",meaning:"Melalui upaya area pertokoan, suasana seluruh lingkungan juga mulai berubah."}
    ]}
  ]},

  // ── GR-N2-55: 〜に限り ──
  {id:"GR-N2-55",level:"N2",title:"〜に限り",summary:"Pola 〜に限り untuk level N2, dengan contoh penggunaan dalam konteks sekolah, kantor, layanan publik, dan kehidupan sehari-hari di Jepang.",groups:[
    {name:"〜に限り",description:"Contoh penggunaan 〜に限り dalam konteks alami sehari-hari di Jepang.",sentences:[
      {jp:"留学生に限り説明会が、大学のホールで開かれた。",kana:"りゅうがくせいにかぎりせつめいかいが、だいがくのほーるでひらかれた。",romaji:"Ryuugakusei ni kagiri setsumeikai ga, daigaku no hooru de hiraka reta.",meaning:"Sesi penjelasan untuk mahasiswa asing diadakan di aula universitas."},
      {jp:"駅前の再開発に限り住民向けの案内が配られた。",kana:"えきまえのさいかいはつにかぎりじゅうみんむけのあんないがくばられた。",romaji:"Ekimae no saikaihatsu ni kagiri juumin muke no annai ga kubara reta.",meaning:"Pemberitahuan bagi warga terkait pembangunan ulang area depan stasiun dibagikan."},
      {jp:"この制度に限り質問があれば、区役所の窓口で確認できる。",kana:"このせいどにかぎりしつもんがあれば、くやくしょのまどぐちでかくにんできる。",romaji:"Kono seido ni kagiri shitsumon gaareba, kuyakusho no madoguchi de kakunin dekiru.",meaning:"Kalau ada pertanyaan terkait sistem ini, bisa ditanyakan di loket balai kota."},
      {jp:"外国人スタッフに限り研修も、来月から始まる予定だ。",kana:"がいこくじんすたっふにかぎりけんしゅうも、らいげつからはじまるよていだ。",romaji:"Gaikokujin sutaffu ni kagiri kenshuu mo, raigetsu kara hajima ru yotei da.",meaning:"Pelatihan untuk staf asing juga dijadwalkan mulai bulan depan."},
      {jp:"今回の変更点に限り詳しい資料は、受付で受け取れる。",kana:"こんかいのへんこうてんにかぎりくわしいしりょうは、うけつけでうけとれる。",romaji:"Konkai no henkouten ni kagiri kuwashii shiryou ha, uketsuke de uketore ru.",meaning:"Materi rinci terkait perubahan kali ini bisa diambil di meja penerima tamu."}
    ]}
  ]},

  // ── GR-N2-56: 〜に限って ──
  {id:"GR-N2-56",level:"N2",title:"〜に限って",summary:"Pola 〜に限って untuk level N2, dengan contoh penggunaan dalam konteks sekolah, kantor, layanan publik, dan kehidupan sehari-hari di Jepang.",groups:[
    {name:"〜に限って",description:"Contoh penggunaan 〜に限って dalam konteks alami sehari-hari di Jepang.",sentences:[
      {jp:"留学生に限って説明会が、大学のホールで開かれた。",kana:"りゅうがくせいにかぎってせつめいかいが、だいがくのほーるでひらかれた。",romaji:"Ryuugakusei ni kagitsu te setsumeikai ga, daigaku no hooru de hiraka reta.",meaning:"Sesi penjelasan untuk mahasiswa asing diadakan di aula universitas."},
      {jp:"駅前の再開発に限って住民向けの案内が配られた。",kana:"えきまえのさいかいはつにかぎってじゅうみんむけのあんないがくばられた。",romaji:"Ekimae no saikaihatsu ni kagitsu te juumin muke no annai ga kubara reta.",meaning:"Pemberitahuan bagi warga terkait pembangunan ulang area depan stasiun dibagikan."},
      {jp:"この制度に限って質問があれば、区役所の窓口で確認できる。",kana:"このせいどにかぎってしつもんがあれば、くやくしょのまどぐちでかくにんできる。",romaji:"Kono seido ni kagitsu te shitsumon gaareba, kuyakusho no madoguchi de kakunin dekiru.",meaning:"Kalau ada pertanyaan terkait sistem ini, bisa ditanyakan di loket balai kota."},
      {jp:"外国人スタッフに限って研修も、来月から始まる予定だ。",kana:"がいこくじんすたっふにかぎってけんしゅうも、らいげつからはじまるよていだ。",romaji:"Gaikokujin sutaffu ni kagitsu te kenshuu mo, raigetsu kara hajima ru yotei da.",meaning:"Pelatihan untuk staf asing juga dijadwalkan mulai bulan depan."},
      {jp:"今回の変更点に限って詳しい資料は、受付で受け取れる。",kana:"こんかいのへんこうてんにかぎってくわしいしりょうは、うけつけでうけとれる。",romaji:"Konkai no henkouten ni kagitsu te kuwashii shiryou ha, uketsuke de uketore ru.",meaning:"Materi rinci terkait perubahan kali ini bisa diambil di meja penerima tamu."}
    ]}
  ]},

  // ── GR-N2-57: 〜限り(は) ──
  {id:"GR-N2-57",level:"N2",title:"〜限り(は)",summary:"Pola 〜限り(は) untuk level N2, dengan contoh penggunaan dalam konteks sekolah, kantor, layanan publik, dan kehidupan sehari-hari di Jepang.",groups:[
    {name:"〜限り(は)",description:"Contoh penggunaan 〜限り(は) dalam konteks alami sehari-hari di Jepang.",sentences:[
      {jp:"この前の説明会では、限りという表現も実際の場面で使われていた。",kana:"このまえのせつめいかいでは、かぎりというひょうげんもじっさいのばめんでつかわれていた。",romaji:"Kono mae no setsumeikai deha, kagiri toiu hyougen mo jissai no bamen de tsukawa reteita.",meaning:"Pada sesi penjelasan sebelumnya, ungkapan ini juga dipakai dalam situasi nyata."},
      {jp:"区役所や学校でも、限りのような言い方を見かけることがある。",kana:"くやくしょやがっこうでも、かぎりのようないいかたをみかけることがある。",romaji:"Kuyakusho ya gakkou demo, kagiri noyouna iikata wo mikake rukotogaaru.",meaning:"Di balai kota maupun sekolah, kadang terlihat cara ungkap seperti ini."},
      {jp:"職場の会話では、限りを使うと少し自然な言い方になる。",kana:"しょくばのかいわでは、かぎりをつかうとすこししぜんないいかたになる。",romaji:"Shokuba no kaiwa deha, kagiri wo tsukau to sukoshi shizen na iikata ninaru.",meaning:"Dalam percakapan kerja, memakai pola ini bisa membuat ungkapan terdengar lebih alami."},
      {jp:"駅前の店で店員さんが話しているのを聞いて、限りの使い方がよく分かった。",kana:"えきまえのみせでてんいんさんがはなしているのをきいて、かぎりのつかいかたがよくわかった。",romaji:"Ekimae no mise de ten'in sanga hanashi teirunowo kii te, kagiri no tsukaikata gayoku waka tta.",meaning:"Saat mendengar staf toko di depan stasiun berbicara, saya jadi lebih paham cara pakai pola ini."},
      {jp:"授業だけでなく、日常の場面でも限りは意外とよく出てくる。",kana:"じゅぎょうだけでなく、にちじょうのばめんでもかぎりはいがいとよくでてくる。",romaji:"Jugyou dakedenaku, nichijou no bamen demo kagiri ha igai toyoku dete kuru.",meaning:"Bukan hanya di kelas, pola ini ternyata cukup sering muncul dalam keseharian."}
    ]}
  ]},

  // ── GR-N2-58: 〜限りでは ──
  {id:"GR-N2-58",level:"N2",title:"〜限りでは",summary:"Pola 〜限りでは untuk level N2, dengan contoh penggunaan dalam konteks sekolah, kantor, layanan publik, dan kehidupan sehari-hari di Jepang.",groups:[
    {name:"〜限りでは",description:"Contoh penggunaan 〜限りでは dalam konteks alami sehari-hari di Jepang.",sentences:[
      {jp:"この前の説明会では、限りではという表現も実際の場面で使われていた。",kana:"このまえのせつめいかいでは、かぎりではというひょうげんもじっさいのばめんでつかわれていた。",romaji:"Kono mae no setsumeikai deha, kagiri dehatoiu hyougen mo jissai no bamen de tsukawa reteita.",meaning:"Pada sesi penjelasan sebelumnya, ungkapan ini juga dipakai dalam situasi nyata."},
      {jp:"区役所や学校でも、限りではのような言い方を見かけることがある。",kana:"くやくしょやがっこうでも、かぎりではのようないいかたをみかけることがある。",romaji:"Kuyakusho ya gakkou demo, kagiri dehanoyouna iikata wo mikake rukotogaaru.",meaning:"Di balai kota maupun sekolah, kadang terlihat cara ungkap seperti ini."},
      {jp:"職場の会話では、限りではを使うと少し自然な言い方になる。",kana:"しょくばのかいわでは、かぎりではをつかうとすこししぜんないいかたになる。",romaji:"Shokuba no kaiwa deha, kagiri dehawo tsukau to sukoshi shizen na iikata ninaru.",meaning:"Dalam percakapan kerja, memakai pola ini bisa membuat ungkapan terdengar lebih alami."},
      {jp:"駅前の店で店員さんが話しているのを聞いて、限りではの使い方がよく分かった。",kana:"えきまえのみせでてんいんさんがはなしているのをきいて、かぎりではのつかいかたがよくわかった。",romaji:"Ekimae no mise de ten'in sanga hanashi teirunowo kii te, kagiri dehano tsukaikata gayoku waka tta.",meaning:"Saat mendengar staf toko di depan stasiun berbicara, saya jadi lebih paham cara pakai pola ini."},
      {jp:"授業だけでなく、日常の場面でも限りではは意外とよく出てくる。",kana:"じゅぎょうだけでなく、にちじょうのばめんでもかぎりでははいがいとよくでてくる。",romaji:"Jugyou dakedenaku, nichijou no bamen demo kagiri dehaha igai toyoku dete kuru.",meaning:"Bukan hanya di kelas, pola ini ternyata cukup sering muncul dalam keseharian."}
    ]}
  ]},

  // ── GR-N2-59: 〜どころではない ──
  {id:"GR-N2-59",level:"N2",title:"〜どころではない",summary:"Pola 〜どころではない untuk level N2, dengan contoh penggunaan dalam konteks sekolah, kantor, layanan publik, dan kehidupan sehari-hari di Jepang.",groups:[
    {name:"〜どころではない",description:"Contoh penggunaan 〜どころではない dalam konteks alami sehari-hari di Jepang.",sentences:[
      {jp:"この前の説明会では、どころではないという表現も実際の場面で使われていた。",kana:"このまえのせつめいかいでは、どころではないというひょうげんもじっさいのばめんでつかわれていた。",romaji:"Kono mae no setsumeikai deha, dokorodehanaitoiu hyougen mo jissai no bamen de tsukawa reteita.",meaning:"Pada sesi penjelasan sebelumnya, ungkapan ini juga dipakai dalam situasi nyata."},
      {jp:"区役所や学校でも、どころではないのような言い方を見かけることがある。",kana:"くやくしょやがっこうでも、どころではないのようないいかたをみかけることがある。",romaji:"Kuyakusho ya gakkou demo, dokorodehanainoyouna iikata wo mikake rukotogaaru.",meaning:"Di balai kota maupun sekolah, kadang terlihat cara ungkap seperti ini."},
      {jp:"職場の会話では、どころではないを使うと少し自然な言い方になる。",kana:"しょくばのかいわでは、どころではないをつかうとすこししぜんないいかたになる。",romaji:"Shokuba no kaiwa deha, dokorodehanaiwo tsukau to sukoshi shizen na iikata ninaru.",meaning:"Dalam percakapan kerja, memakai pola ini bisa membuat ungkapan terdengar lebih alami."},
      {jp:"駅前の店で店員さんが話しているのを聞いて、どころではないの使い方がよく分かった。",kana:"えきまえのみせでてんいんさんがはなしているのをきいて、どころではないのつかいかたがよくわかった。",romaji:"Ekimae no mise de ten'in sanga hanashi teirunowo kii te, dokorodehanaino tsukaikata gayoku waka tta.",meaning:"Saat mendengar staf toko di depan stasiun berbicara, saya jadi lebih paham cara pakai pola ini."},
      {jp:"授業だけでなく、日常の場面でもどころではないは意外とよく出てくる。",kana:"じゅぎょうだけでなく、にちじょうのばめんでもどころではないはいがいとよくでてくる。",romaji:"Jugyou dakedenaku, nichijou no bamen demodokorodehanaiha igai toyoku dete kuru.",meaning:"Bukan hanya di kelas, pola ini ternyata cukup sering muncul dalam keseharian."}
    ]}
  ]},

  // ── GR-N2-60: 〜ものか ──
  {id:"GR-N2-60",level:"N2",title:"〜ものか",summary:"Pola 〜ものか untuk level N2, dengan contoh penggunaan dalam konteks sekolah, kantor, layanan publik, dan kehidupan sehari-hari di Jepang.",groups:[
    {name:"〜ものか",description:"Contoh penggunaan 〜ものか dalam konteks alami sehari-hari di Jepang.",sentences:[
      {jp:"この前の説明会では、ものかという表現も実際の場面で使われていた。",kana:"このまえのせつめいかいでは、ものかというひょうげんもじっさいのばめんでつかわれていた。",romaji:"Kono mae no setsumeikai deha, monokatoiu hyougen mo jissai no bamen de tsukawa reteita.",meaning:"Pada sesi penjelasan sebelumnya, ungkapan ini juga dipakai dalam situasi nyata."},
      {jp:"区役所や学校でも、ものかのような言い方を見かけることがある。",kana:"くやくしょやがっこうでも、ものかのようないいかたをみかけることがある。",romaji:"Kuyakusho ya gakkou demo, monokanoyouna iikata wo mikake rukotogaaru.",meaning:"Di balai kota maupun sekolah, kadang terlihat cara ungkap seperti ini."},
      {jp:"職場の会話では、ものかを使うと少し自然な言い方になる。",kana:"しょくばのかいわでは、ものかをつかうとすこししぜんないいかたになる。",romaji:"Shokuba no kaiwa deha, monokawo tsukau to sukoshi shizen na iikata ninaru.",meaning:"Dalam percakapan kerja, memakai pola ini bisa membuat ungkapan terdengar lebih alami."},
      {jp:"駅前の店で店員さんが話しているのを聞いて、ものかの使い方がよく分かった。",kana:"えきまえのみせでてんいんさんがはなしているのをきいて、ものかのつかいかたがよくわかった。",romaji:"Ekimae no mise de ten'in sanga hanashi teirunowo kii te, monokano tsukaikata gayoku waka tta.",meaning:"Saat mendengar staf toko di depan stasiun berbicara, saya jadi lebih paham cara pakai pola ini."},
      {jp:"授業だけでなく、日常の場面でもものかは意外とよく出てくる。",kana:"じゅぎょうだけでなく、にちじょうのばめんでもものかはいがいとよくでてくる。",romaji:"Jugyou dakedenaku, nichijou no bamen demomonokaha igai toyoku dete kuru.",meaning:"Bukan hanya di kelas, pola ini ternyata cukup sering muncul dalam keseharian."}
    ]}
  ]},

  // ── GR-N2-61: 〜っこない ──
  {id:"GR-N2-61",level:"N2",title:"〜っこない",summary:"Pola 〜っこない untuk level N2, dengan contoh penggunaan dalam konteks sekolah, kantor, layanan publik, dan kehidupan sehari-hari di Jepang.",groups:[
    {name:"〜っこない",description:"Contoh penggunaan 〜っこない dalam konteks alami sehari-hari di Jepang.",sentences:[
      {jp:"この前の説明会では、っこないという表現も実際の場面で使われていた。",kana:"このまえのせつめいかいでは、っこないというひょうげんもじっさいのばめんでつかわれていた。",romaji:"Kono mae no setsumeikai deha, kkonaitoiu hyougen mo jissai no bamen de tsukawa reteita.",meaning:"Pada sesi penjelasan sebelumnya, ungkapan ini juga dipakai dalam situasi nyata."},
      {jp:"区役所や学校でも、っこないのような言い方を見かけることがある。",kana:"くやくしょやがっこうでも、っこないのようないいかたをみかけることがある。",romaji:"Kuyakusho ya gakkou demo, kkonainoyouna iikata wo mikake rukotogaaru.",meaning:"Di balai kota maupun sekolah, kadang terlihat cara ungkap seperti ini."},
      {jp:"職場の会話では、っこないを使うと少し自然な言い方になる。",kana:"しょくばのかいわでは、っこないをつかうとすこししぜんないいかたになる。",romaji:"Shokuba no kaiwa deha, kkonaiwo tsukau to sukoshi shizen na iikata ninaru.",meaning:"Dalam percakapan kerja, memakai pola ini bisa membuat ungkapan terdengar lebih alami."},
      {jp:"駅前の店で店員さんが話しているのを聞いて、っこないの使い方がよく分かった。",kana:"えきまえのみせでてんいんさんがはなしているのをきいて、っこないのつかいかたがよくわかった。",romaji:"Ekimae no mise de ten'in sanga hanashi teirunowo kii te, kkonaino tsukaikata gayoku waka tta.",meaning:"Saat mendengar staf toko di depan stasiun berbicara, saya jadi lebih paham cara pakai pola ini."},
      {jp:"授業だけでなく、日常の場面でもっこないは意外とよく出てくる。",kana:"じゅぎょうだけでなく、にちじょうのばめんでもっこないはいがいとよくでてくる。",romaji:"Jugyou dakedenaku, nichijou no bamen demokkonaiha igai toyoku dete kuru.",meaning:"Bukan hanya di kelas, pola ini ternyata cukup sering muncul dalam keseharian."}
    ]}
  ]},

  // ── GR-N2-62: 〜わけがない ──
  {id:"GR-N2-62",level:"N2",title:"〜わけがない",summary:"Pola 〜わけがない untuk level N2, dengan contoh penggunaan dalam konteks sekolah, kantor, layanan publik, dan kehidupan sehari-hari di Jepang.",groups:[
    {name:"〜わけがない",description:"Contoh penggunaan 〜わけがない dalam konteks alami sehari-hari di Jepang.",sentences:[
      {jp:"この前の説明会では、わけがないという表現も実際の場面で使われていた。",kana:"このまえのせつめいかいでは、わけがないというひょうげんもじっさいのばめんでつかわれていた。",romaji:"Kono mae no setsumeikai deha, wakeganaitoiu hyougen mo jissai no bamen de tsukawa reteita.",meaning:"Pada sesi penjelasan sebelumnya, ungkapan ini juga dipakai dalam situasi nyata."},
      {jp:"区役所や学校でも、わけがないのような言い方を見かけることがある。",kana:"くやくしょやがっこうでも、わけがないのようないいかたをみかけることがある。",romaji:"Kuyakusho ya gakkou demo, wakeganainoyouna iikata wo mikake rukotogaaru.",meaning:"Di balai kota maupun sekolah, kadang terlihat cara ungkap seperti ini."},
      {jp:"職場の会話では、わけがないを使うと少し自然な言い方になる。",kana:"しょくばのかいわでは、わけがないをつかうとすこししぜんないいかたになる。",romaji:"Shokuba no kaiwa deha, wakeganaiwo tsukau to sukoshi shizen na iikata ninaru.",meaning:"Dalam percakapan kerja, memakai pola ini bisa membuat ungkapan terdengar lebih alami."},
      {jp:"駅前の店で店員さんが話しているのを聞いて、わけがないの使い方がよく分かった。",kana:"えきまえのみせでてんいんさんがはなしているのをきいて、わけがないのつかいかたがよくわかった。",romaji:"Ekimae no mise de ten'in sanga hanashi teirunowo kii te, wakeganaino tsukaikata gayoku waka tta.",meaning:"Saat mendengar staf toko di depan stasiun berbicara, saya jadi lebih paham cara pakai pola ini."},
      {jp:"授業だけでなく、日常の場面でもわけがないは意外とよく出てくる。",kana:"じゅぎょうだけでなく、にちじょうのばめんでもわけがないはいがいとよくでてくる。",romaji:"Jugyou dakedenaku, nichijou no bamen demowakeganaiha igai toyoku dete kuru.",meaning:"Bukan hanya di kelas, pola ini ternyata cukup sering muncul dalam keseharian."}
    ]}
  ]},

  // ── GR-N2-63: 〜というものではない / 〜というものでもない ──
  {id:"GR-N2-63",level:"N2",title:"〜というものではない / 〜というものでもない",summary:"Pola 〜というものではない / 〜というものでもない untuk level N2, dengan contoh penggunaan dalam konteks sekolah, kantor, layanan publik, dan kehidupan sehari-hari di Jepang.",groups:[
    {name:"〜というものではない / 〜というものでもない",description:"Contoh penggunaan 〜というものではない / 〜というものでもない dalam konteks alami sehari-hari di Jepang.",sentences:[
      {jp:"駅に着くと、ちょうど案内放送が始まった。",kana:"えきにつくと、ちょうどあんないほうそうがはじまった。",romaji:"Eki ni tsuku to, choudo annaihousou ga hajima tta.",meaning:"Begitu sampai di stasiun, pengumuman baru saja dimulai."},
      {jp:"春になると、この川沿いは散歩する人でにぎわう。",kana:"はるになると、このかわぞいはさんぽするにんでにぎわう。",romaji:"Haru ninaruto, kono kawazoi ha sanpo suru nin denigiwau.",meaning:"Begitu musim semi tiba, area tepi sungai ini ramai oleh orang yang berjalan-jalan."},
      {jp:"資料を読むと、今回の変更点がよく分かる。",kana:"しりょうをよむと、こんかいのへんこうてんがよくわかる。",romaji:"Shiryou wo yomu to, konkai no henkouten gayoku waka ru.",meaning:"Kalau membaca materinya, perubahan kali ini jadi mudah dipahami."},
      {jp:"彼の話し方を見ると、かなり緊張しているようだ。",kana:"かのはなしかたをみると、かなりきんちょうしているようだ。",romaji:"Kano hanashikata wo miru to, kanari kinchoushi teiruyouda.",meaning:"Melihat cara dia berbicara, tampaknya dia cukup tegang."},
      {jp:"この条件だと、申し込みは早い方がよさそうだ。",kana:"このじょうけんだと、もうしこみははやいほうがよさそうだ。",romaji:"Kono jouken dato, moushikomi ha hayai houga yosasouda.",meaning:"Kalau syaratnya seperti ini, tampaknya lebih baik mendaftar lebih cepat."}
    ]}
  ]},

  // ── GR-N2-64: 〜のみならず(〜も) ──
  {id:"GR-N2-64",level:"N2",title:"〜のみならず(〜も)",summary:"Pola 〜のみならず(〜も) untuk level N2, dengan contoh penggunaan dalam konteks sekolah, kantor, layanan publik, dan kehidupan sehari-hari di Jepang.",groups:[
    {name:"〜のみならず(〜も)",description:"Contoh penggunaan 〜のみならず(〜も) dalam konteks alami sehari-hari di Jepang.",sentences:[
      {jp:"この前の説明会では、のみならず(も)という表現も実際の場面で使われていた。",kana:"このまえのせつめいかいでは、のみならず(も)というひょうげんもじっさいのばめんでつかわれていた。",romaji:"Kono mae no setsumeikai deha, nominarazu ( mo ) toiu hyougen mo jissai no bamen de tsukawa reteita.",meaning:"Pada sesi penjelasan sebelumnya, ungkapan ini juga dipakai dalam situasi nyata."},
      {jp:"区役所や学校でも、のみならず(も)のような言い方を見かけることがある。",kana:"くやくしょやがっこうでも、のみならず(も)のようないいかたをみかけることがある。",romaji:"Kuyakusho ya gakkou demo, nominarazu ( mo ) noyouna iikata wo mikake rukotogaaru.",meaning:"Di balai kota maupun sekolah, kadang terlihat cara ungkap seperti ini."},
      {jp:"職場の会話では、のみならず(も)を使うと少し自然な言い方になる。",kana:"しょくばのかいわでは、のみならず(も)をつかうとすこししぜんないいかたになる。",romaji:"Shokuba no kaiwa deha, nominarazu ( mo ) wo tsukau to sukoshi shizen na iikata ninaru.",meaning:"Dalam percakapan kerja, memakai pola ini bisa membuat ungkapan terdengar lebih alami."},
      {jp:"駅前の店で店員さんが話しているのを聞いて、のみならず(も)の使い方がよく分かった。",kana:"えきまえのみせでてんいんさんがはなしているのをきいて、のみならず(も)のつかいかたがよくわかった。",romaji:"Ekimae no mise de ten'in sanga hanashi teirunowo kii te, nominarazu ( mo ) no tsukaikata gayoku waka tta.",meaning:"Saat mendengar staf toko di depan stasiun berbicara, saya jadi lebih paham cara pakai pola ini."},
      {jp:"授業だけでなく、日常の場面でものみならず(も)は意外とよく出てくる。",kana:"じゅぎょうだけでなく、にちじょうのばめんでものみならず(も)はいがいとよくでてくる。",romaji:"Jugyou dakedenaku, nichijou no bamen demonominarazu ( mo ) ha igai toyoku dete kuru.",meaning:"Bukan hanya di kelas, pola ini ternyata cukup sering muncul dalam keseharian."}
    ]}
  ]},

  // ── GR-N2-65: 〜に限らず ──
  {id:"GR-N2-65",level:"N2",title:"〜に限らず",summary:"Pola 〜に限らず untuk level N2, dengan contoh penggunaan dalam konteks sekolah, kantor, layanan publik, dan kehidupan sehari-hari di Jepang.",groups:[
    {name:"〜に限らず",description:"Contoh penggunaan 〜に限らず dalam konteks alami sehari-hari di Jepang.",sentences:[
      {jp:"留学生に限らず説明会が、大学のホールで開かれた。",kana:"りゅうがくせいにかぎらずせつめいかいが、だいがくのほーるでひらかれた。",romaji:"Ryuugakusei ni kagira zu setsumeikai ga, daigaku no hooru de hiraka reta.",meaning:"Sesi penjelasan untuk mahasiswa asing diadakan di aula universitas."},
      {jp:"駅前の再開発に限らず住民向けの案内が配られた。",kana:"えきまえのさいかいはつにかぎらずじゅうみんむけのあんないがくばられた。",romaji:"Ekimae no saikaihatsu ni kagira zu juumin muke no annai ga kubara reta.",meaning:"Pemberitahuan bagi warga terkait pembangunan ulang area depan stasiun dibagikan."},
      {jp:"この制度に限らず質問があれば、区役所の窓口で確認できる。",kana:"このせいどにかぎらずしつもんがあれば、くやくしょのまどぐちでかくにんできる。",romaji:"Kono seido ni kagira zu shitsumon gaareba, kuyakusho no madoguchi de kakunin dekiru.",meaning:"Kalau ada pertanyaan terkait sistem ini, bisa ditanyakan di loket balai kota."},
      {jp:"外国人スタッフに限らず研修も、来月から始まる予定だ。",kana:"がいこくじんすたっふにかぎらずけんしゅうも、らいげつからはじまるよていだ。",romaji:"Gaikokujin sutaffu ni kagira zu kenshuu mo, raigetsu kara hajima ru yotei da.",meaning:"Pelatihan untuk staf asing juga dijadwalkan mulai bulan depan."},
      {jp:"今回の変更点に限らず詳しい資料は、受付で受け取れる。",kana:"こんかいのへんこうてんにかぎらずくわしいしりょうは、うけつけでうけとれる。",romaji:"Konkai no henkouten ni kagira zu kuwashii shiryou ha, uketsuke de uketore ru.",meaning:"Materi rinci terkait perubahan kali ini bisa diambil di meja penerima tamu."}
    ]}
  ]},

  // ── GR-N2-66: 〜はもとより(〜も) ──
  {id:"GR-N2-66",level:"N2",title:"〜はもとより(〜も)",summary:"Pola 〜はもとより(〜も) untuk level N2, dengan contoh penggunaan dalam konteks sekolah, kantor, layanan publik, dan kehidupan sehari-hari di Jepang.",groups:[
    {name:"〜はもとより(〜も)",description:"Contoh penggunaan 〜はもとより(〜も) dalam konteks alami sehari-hari di Jepang.",sentences:[
      {jp:"この前の説明会では、はもとより(も)という表現も実際の場面で使われていた。",kana:"このまえのせつめいかいでは、はもとより(も)というひょうげんもじっさいのばめんでつかわれていた。",romaji:"Kono mae no setsumeikai deha, hamotoyori ( mo ) toiu hyougen mo jissai no bamen de tsukawa reteita.",meaning:"Pada sesi penjelasan sebelumnya, ungkapan ini juga dipakai dalam situasi nyata."},
      {jp:"区役所や学校でも、はもとより(も)のような言い方を見かけることがある。",kana:"くやくしょやがっこうでも、はもとより(も)のようないいかたをみかけることがある。",romaji:"Kuyakusho ya gakkou demo, hamotoyori ( mo ) noyouna iikata wo mikake rukotogaaru.",meaning:"Di balai kota maupun sekolah, kadang terlihat cara ungkap seperti ini."},
      {jp:"職場の会話では、はもとより(も)を使うと少し自然な言い方になる。",kana:"しょくばのかいわでは、はもとより(も)をつかうとすこししぜんないいかたになる。",romaji:"Shokuba no kaiwa deha, hamotoyori ( mo ) wo tsukau to sukoshi shizen na iikata ninaru.",meaning:"Dalam percakapan kerja, memakai pola ini bisa membuat ungkapan terdengar lebih alami."},
      {jp:"駅前の店で店員さんが話しているのを聞いて、はもとより(も)の使い方がよく分かった。",kana:"えきまえのみせでてんいんさんがはなしているのをきいて、はもとより(も)のつかいかたがよくわかった。",romaji:"Ekimae no mise de ten'in sanga hanashi teirunowo kii te, hamotoyori ( mo ) no tsukaikata gayoku waka tta.",meaning:"Saat mendengar staf toko di depan stasiun berbicara, saya jadi lebih paham cara pakai pola ini."},
      {jp:"授業だけでなく、日常の場面でもはもとより(も)は意外とよく出てくる。",kana:"じゅぎょうだけでなく、にちじょうのばめんでもはもとより(も)はいがいとよくでてくる。",romaji:"Jugyou dakedenaku, nichijou no bamen demohamotoyori ( mo ) ha igai toyoku dete kuru.",meaning:"Bukan hanya di kelas, pola ini ternyata cukup sering muncul dalam keseharian."}
    ]}
  ]},

  // ── GR-N2-67: 〜うえに ──
  {id:"GR-N2-67",level:"N2",title:"〜うえに",summary:"Pola 〜うえに untuk level N2, dengan contoh penggunaan dalam konteks sekolah, kantor, layanan publik, dan kehidupan sehari-hari di Jepang.",groups:[
    {name:"〜うえに",description:"Contoh penggunaan 〜うえに dalam konteks alami sehari-hari di Jepang.",sentences:[
      {jp:"この前の説明会では、うえにという表現も実際の場面で使われていた。",kana:"このまえのせつめいかいでは、うえにというひょうげんもじっさいのばめんでつかわれていた。",romaji:"Kono mae no setsumeikai deha, uenitoiu hyougen mo jissai no bamen de tsukawa reteita.",meaning:"Pada sesi penjelasan sebelumnya, ungkapan ini juga dipakai dalam situasi nyata."},
      {jp:"区役所や学校でも、うえにのような言い方を見かけることがある。",kana:"くやくしょやがっこうでも、うえにのようないいかたをみかけることがある。",romaji:"Kuyakusho ya gakkou demo, ueninoyouna iikata wo mikake rukotogaaru.",meaning:"Di balai kota maupun sekolah, kadang terlihat cara ungkap seperti ini."},
      {jp:"職場の会話では、うえにを使うと少し自然な言い方になる。",kana:"しょくばのかいわでは、うえにをつかうとすこししぜんないいかたになる。",romaji:"Shokuba no kaiwa deha, ueniwo tsukau to sukoshi shizen na iikata ninaru.",meaning:"Dalam percakapan kerja, memakai pola ini bisa membuat ungkapan terdengar lebih alami."},
      {jp:"駅前の店で店員さんが話しているのを聞いて、うえにの使い方がよく分かった。",kana:"えきまえのみせでてんいんさんがはなしているのをきいて、うえにのつかいかたがよくわかった。",romaji:"Ekimae no mise de ten'in sanga hanashi teirunowo kii te, uenino tsukaikata gayoku waka tta.",meaning:"Saat mendengar staf toko di depan stasiun berbicara, saya jadi lebih paham cara pakai pola ini."},
      {jp:"授業だけでなく、日常の場面でもうえには意外とよく出てくる。",kana:"じゅぎょうだけでなく、にちじょうのばめんでもうえにはいがいとよくでてくる。",romaji:"Jugyou dakedenaku, nichijou no bamen demoueniha igai toyoku dete kuru.",meaning:"Bukan hanya di kelas, pola ini ternyata cukup sering muncul dalam keseharian."}
    ]}
  ]},

  // ── GR-N2-68: 〜も〜ば / 〜も ──
  {id:"GR-N2-68",level:"N2",title:"〜も〜ば / 〜も",summary:"Pola 〜も〜ば / 〜も untuk level N2, dengan contoh penggunaan dalam konteks sekolah, kantor, layanan publik, dan kehidupan sehari-hari di Jepang.",groups:[
    {name:"〜も〜ば / 〜も",description:"Contoh penggunaan 〜も〜ば / 〜も dalam konteks alami sehari-hari di Jepang.",sentences:[
      {jp:"時間があれば、区役所のあとで銀行にも寄りたい。",kana:"じかんがあれば、くやくしょのあとでぎんこうにもよりたい。",romaji:"Jikan gaareba, kuyakusho noatode ginkou nimo yori tai.",meaning:"Kalau ada waktu, setelah ke balai kota saya juga ingin mampir ke bank."},
      {jp:"もう少し安ければ、その部屋に決めたかもしれない。",kana:"もうすこしやすければ、そのへやにきめたかもしれない。",romaji:"Mou sukoshi yasuke reba, sono heya ni kime takamoshirenai.",meaning:"Kalau sedikit lebih murah, mungkin saya akan memilih kamar itu."},
      {jp:"駅から近ければ、多少狭くても我慢できる。",kana:"えきからちかければ、たしょうせまくてもがまんできる。",romaji:"Eki kara chikake reba, tashou semaku temo gaman dekiru.",meaning:"Kalau dekat dari stasiun, walau agak sempit saya masih bisa menerima."},
      {jp:"店長に聞けば、細かいルールもすぐ分かる。",kana:"てんちょうにきけば、こまかいるーるもすぐわかる。",romaji:"Tenchou ni kike ba, komakai ruuru mosugu waka ru.",meaning:"Kalau bertanya ke manajer toko, aturan detailnya juga cepat dipahami."},
      {jp:"早く寝れば、明日の朝も楽になる。",kana:"はやくねれば、あしたのあさもらくになる。",romaji:"Hayaku nere ba, ashita no asa mo raku ninaru.",meaning:"Kalau tidur lebih awal, besok pagi juga akan terasa lebih ringan."}
    ]}
  ]},

  // ── GR-N2-69: 〜を問わず ──
  {id:"GR-N2-69",level:"N2",title:"〜を問わず",summary:"Pola 〜を問わず untuk level N2, dengan contoh penggunaan dalam konteks sekolah, kantor, layanan publik, dan kehidupan sehari-hari di Jepang.",groups:[
    {name:"〜を問わず",description:"Contoh penggunaan 〜を問わず dalam konteks alami sehari-hari di Jepang.",sentences:[
      {jp:"地域のイベントを問わず、近所の人と少しずつ顔見知りになった。",kana:"ちいきのいべんとをとわず、きんじょのにんとすこしずつかおみしりになった。",romaji:"Chiiki no ibento wo towa zu, kinjo no nin to sukoshi zutsu kaomishiri ninatta.",meaning:"Melalui acara lingkungan, saya perlahan mulai mengenal orang-orang sekitar."},
      {jp:"先輩との会話を問わず、就職活動の流れが具体的に見えてきた。",kana:"せんぱいとのかいわをとわず、しゅうしょくかつどうのながれがぐたいてきにみえてきた。",romaji:"Senpai tono kaiwa wo towa zu, shuushokukatsudou no nagare ga gutaiteki ni mie tekita.",meaning:"Melalui percakapan dengan senior, alur mencari kerja jadi terasa lebih jelas."},
      {jp:"実習を問わず、教室では分からなかった課題にも気づいた。",kana:"じっしゅうをとわず、きょうしつではわからなかったかだいにもきづいた。",romaji:"Jisshuu wo towa zu, kyoushitsu deha waka ranakatta kadai nimo kizu ita.",meaning:"Melalui praktik lapangan, saya menyadari tantangan yang tidak terlihat di kelas."},
      {jp:"この資料を問わず、学校側の考え方を理解してほしい。",kana:"このしりょうをとわず、がっこうがわのかんがえかたをりかいしてほしい。",romaji:"Kono shiryou wo towa zu, gakkougawa no kangaekata wo rikai shitehoshii.",meaning:"Melalui materi ini, saya ingin Anda memahami cara pandang pihak sekolah."},
      {jp:"商店街の取り組みを問わず、地域全体の雰囲気も変わってきた。",kana:"しょうてんがいのとりくみをとわず、ちいきぜんたいのふんいきもかわってきた。",romaji:"Shoutengai no torikumi wo towa zu, chiiki zentai no fun'iki mo kawa ttekita.",meaning:"Melalui upaya area pertokoan, suasana seluruh lingkungan juga mulai berubah."}
    ]}
  ]},

  // ── GR-N2-70: 〜もかまわず ──
  {id:"GR-N2-70",level:"N2",title:"〜もかまわず",summary:"Pola 〜もかまわず untuk level N2, dengan contoh penggunaan dalam konteks sekolah, kantor, layanan publik, dan kehidupan sehari-hari di Jepang.",groups:[
    {name:"〜もかまわず",description:"Contoh penggunaan 〜もかまわず dalam konteks alami sehari-hari di Jepang.",sentences:[
      {jp:"この前の説明会では、もかまわずという表現も実際の場面で使われていた。",kana:"このまえのせつめいかいでは、もかまわずというひょうげんもじっさいのばめんでつかわれていた。",romaji:"Kono mae no setsumeikai deha, mokamawazutoiu hyougen mo jissai no bamen de tsukawa reteita.",meaning:"Pada sesi penjelasan sebelumnya, ungkapan ini juga dipakai dalam situasi nyata."},
      {jp:"区役所や学校でも、もかまわずのような言い方を見かけることがある。",kana:"くやくしょやがっこうでも、もかまわずのようないいかたをみかけることがある。",romaji:"Kuyakusho ya gakkou demo, mokamawazunoyouna iikata wo mikake rukotogaaru.",meaning:"Di balai kota maupun sekolah, kadang terlihat cara ungkap seperti ini."},
      {jp:"職場の会話では、もかまわずを使うと少し自然な言い方になる。",kana:"しょくばのかいわでは、もかまわずをつかうとすこししぜんないいかたになる。",romaji:"Shokuba no kaiwa deha, mokamawazuwo tsukau to sukoshi shizen na iikata ninaru.",meaning:"Dalam percakapan kerja, memakai pola ini bisa membuat ungkapan terdengar lebih alami."},
      {jp:"駅前の店で店員さんが話しているのを聞いて、もかまわずの使い方がよく分かった。",kana:"えきまえのみせでてんいんさんがはなしているのをきいて、もかまわずのつかいかたがよくわかった。",romaji:"Ekimae no mise de ten'in sanga hanashi teirunowo kii te, mokamawazuno tsukaikata gayoku waka tta.",meaning:"Saat mendengar staf toko di depan stasiun berbicara, saya jadi lebih paham cara pakai pola ini."},
      {jp:"授業だけでなく、日常の場面でももかまわずは意外とよく出てくる。",kana:"じゅぎょうだけでなく、にちじょうのばめんでももかまわずはいがいとよくでてくる。",romaji:"Jugyou dakedenaku, nichijou no bamen demomokamawazuha igai toyoku dete kuru.",meaning:"Bukan hanya di kelas, pola ini ternyata cukup sering muncul dalam keseharian."}
    ]}
  ]},

  // ── GR-N2-71: 〜はともかく(として) ──
  {id:"GR-N2-71",level:"N2",title:"〜はともかく(として)",summary:"Pola 〜はともかく(として) untuk level N2, dengan contoh penggunaan dalam konteks sekolah, kantor, layanan publik, dan kehidupan sehari-hari di Jepang.",groups:[
    {name:"〜はともかく(として)",description:"Contoh penggunaan 〜はともかく(として) dalam konteks alami sehari-hari di Jepang.",sentences:[
      {jp:"この前の説明会では、はともかくという表現も実際の場面で使われていた。",kana:"このまえのせつめいかいでは、はともかくというひょうげんもじっさいのばめんでつかわれていた。",romaji:"Kono mae no setsumeikai deha, hatomokakutoiu hyougen mo jissai no bamen de tsukawa reteita.",meaning:"Pada sesi penjelasan sebelumnya, ungkapan ini juga dipakai dalam situasi nyata."},
      {jp:"区役所や学校でも、はともかくのような言い方を見かけることがある。",kana:"くやくしょやがっこうでも、はともかくのようないいかたをみかけることがある。",romaji:"Kuyakusho ya gakkou demo, hatomokakunoyouna iikata wo mikake rukotogaaru.",meaning:"Di balai kota maupun sekolah, kadang terlihat cara ungkap seperti ini."},
      {jp:"職場の会話では、はともかくを使うと少し自然な言い方になる。",kana:"しょくばのかいわでは、はともかくをつかうとすこししぜんないいかたになる。",romaji:"Shokuba no kaiwa deha, hatomokakuwo tsukau to sukoshi shizen na iikata ninaru.",meaning:"Dalam percakapan kerja, memakai pola ini bisa membuat ungkapan terdengar lebih alami."},
      {jp:"駅前の店で店員さんが話しているのを聞いて、はともかくの使い方がよく分かった。",kana:"えきまえのみせでてんいんさんがはなしているのをきいて、はともかくのつかいかたがよくわかった。",romaji:"Ekimae no mise de ten'in sanga hanashi teirunowo kii te, hatomokakuno tsukaikata gayoku waka tta.",meaning:"Saat mendengar staf toko di depan stasiun berbicara, saya jadi lebih paham cara pakai pola ini."},
      {jp:"授業だけでなく、日常の場面でもはともかくは意外とよく出てくる。",kana:"じゅぎょうだけでなく、にちじょうのばめんでもはともかくはいがいとよくでてくる。",romaji:"Jugyou dakedenaku, nichijou no bamen demohatomokakuha igai toyoku dete kuru.",meaning:"Bukan hanya di kelas, pola ini ternyata cukup sering muncul dalam keseharian."}
    ]}
  ]},

  // ── GR-N2-72: 〜はさておき ──
  {id:"GR-N2-72",level:"N2",title:"〜はさておき",summary:"Pola 〜はさておき untuk level N2, dengan contoh penggunaan dalam konteks sekolah, kantor, layanan publik, dan kehidupan sehari-hari di Jepang.",groups:[
    {name:"〜はさておき",description:"Contoh penggunaan 〜はさておき dalam konteks alami sehari-hari di Jepang.",sentences:[
      {jp:"この前の説明会では、はさておきという表現も実際の場面で使われていた。",kana:"このまえのせつめいかいでは、はさておきというひょうげんもじっさいのばめんでつかわれていた。",romaji:"Kono mae no setsumeikai deha, hasateokitoiu hyougen mo jissai no bamen de tsukawa reteita.",meaning:"Pada sesi penjelasan sebelumnya, ungkapan ini juga dipakai dalam situasi nyata."},
      {jp:"区役所や学校でも、はさておきのような言い方を見かけることがある。",kana:"くやくしょやがっこうでも、はさておきのようないいかたをみかけることがある。",romaji:"Kuyakusho ya gakkou demo, hasateokinoyouna iikata wo mikake rukotogaaru.",meaning:"Di balai kota maupun sekolah, kadang terlihat cara ungkap seperti ini."},
      {jp:"職場の会話では、はさておきを使うと少し自然な言い方になる。",kana:"しょくばのかいわでは、はさておきをつかうとすこししぜんないいかたになる。",romaji:"Shokuba no kaiwa deha, hasateokiwo tsukau to sukoshi shizen na iikata ninaru.",meaning:"Dalam percakapan kerja, memakai pola ini bisa membuat ungkapan terdengar lebih alami."},
      {jp:"駅前の店で店員さんが話しているのを聞いて、はさておきの使い方がよく分かった。",kana:"えきまえのみせでてんいんさんがはなしているのをきいて、はさておきのつかいかたがよくわかった。",romaji:"Ekimae no mise de ten'in sanga hanashi teirunowo kii te, hasateokino tsukaikata gayoku waka tta.",meaning:"Saat mendengar staf toko di depan stasiun berbicara, saya jadi lebih paham cara pakai pola ini."},
      {jp:"授業だけでなく、日常の場面でもはさておきは意外とよく出てくる。",kana:"じゅぎょうだけでなく、にちじょうのばめんでもはさておきはいがいとよくでてくる。",romaji:"Jugyou dakedenaku, nichijou no bamen demohasateokiha igai toyoku dete kuru.",meaning:"Bukan hanya di kelas, pola ini ternyata cukup sering muncul dalam keseharian."}
    ]}
  ]},

  // ── GR-N2-73: 〜をめぐって ──
  {id:"GR-N2-73",level:"N2",title:"〜をめぐって",summary:"Pola 〜をめぐって untuk level N2, dengan contoh penggunaan dalam konteks sekolah, kantor, layanan publik, dan kehidupan sehari-hari di Jepang.",groups:[
    {name:"〜をめぐって",description:"Contoh penggunaan 〜をめぐって dalam konteks alami sehari-hari di Jepang.",sentences:[
      {jp:"地域のイベントをめぐって、近所の人と少しずつ顔見知りになった。",kana:"ちいきのいべんとをめぐって、きんじょのにんとすこしずつかおみしりになった。",romaji:"Chiiki no ibento womegutte, kinjo no nin to sukoshi zutsu kaomishiri ninatta.",meaning:"Melalui acara lingkungan, saya perlahan mulai mengenal orang-orang sekitar."},
      {jp:"先輩との会話をめぐって、就職活動の流れが具体的に見えてきた。",kana:"せんぱいとのかいわをめぐって、しゅうしょくかつどうのながれがぐたいてきにみえてきた。",romaji:"Senpai tono kaiwa womegutte, shuushokukatsudou no nagare ga gutaiteki ni mie tekita.",meaning:"Melalui percakapan dengan senior, alur mencari kerja jadi terasa lebih jelas."},
      {jp:"実習をめぐって、教室では分からなかった課題にも気づいた。",kana:"じっしゅうをめぐって、きょうしつではわからなかったかだいにもきづいた。",romaji:"Jisshuu womegutte, kyoushitsu deha waka ranakatta kadai nimo kizu ita.",meaning:"Melalui praktik lapangan, saya menyadari tantangan yang tidak terlihat di kelas."},
      {jp:"この資料をめぐって、学校側の考え方を理解してほしい。",kana:"このしりょうをめぐって、がっこうがわのかんがえかたをりかいしてほしい。",romaji:"Kono shiryou womegutte, gakkougawa no kangaekata wo rikai shitehoshii.",meaning:"Melalui materi ini, saya ingin Anda memahami cara pandang pihak sekolah."},
      {jp:"商店街の取り組みをめぐって、地域全体の雰囲気も変わってきた。",kana:"しょうてんがいのとりくみをめぐって、ちいきぜんたいのふんいきもかわってきた。",romaji:"Shoutengai no torikumi womegutte, chiiki zentai no fun'iki mo kawa ttekita.",meaning:"Melalui upaya area pertokoan, suasana seluruh lingkungan juga mulai berubah."}
    ]}
  ]},

  // ── GR-N2-74: 〜に応えて / 〜に応える ──
  {id:"GR-N2-74",level:"N2",title:"〜に応えて / 〜に応える",summary:"Pola 〜に応えて / 〜に応える untuk level N2, dengan contoh penggunaan dalam konteks sekolah, kantor, layanan publik, dan kehidupan sehari-hari di Jepang.",groups:[
    {name:"〜に応えて / 〜に応える",description:"Contoh penggunaan 〜に応えて / 〜に応える dalam konteks alami sehari-hari di Jepang.",sentences:[
      {jp:"留学生に応えて説明会が、大学のホールで開かれた。",kana:"りゅうがくせいにこたえてせつめいかいが、だいがくのほーるでひらかれた。",romaji:"Ryuugakusei ni kotae te setsumeikai ga, daigaku no hooru de hiraka reta.",meaning:"Sesi penjelasan untuk mahasiswa asing diadakan di aula universitas."},
      {jp:"駅前の再開発に応えて住民向けの案内が配られた。",kana:"えきまえのさいかいはつにこたえてじゅうみんむけのあんないがくばられた。",romaji:"Ekimae no saikaihatsu ni kotae te juumin muke no annai ga kubara reta.",meaning:"Pemberitahuan bagi warga terkait pembangunan ulang area depan stasiun dibagikan."},
      {jp:"この制度に応えて質問があれば、区役所の窓口で確認できる。",kana:"このせいどにこたえてしつもんがあれば、くやくしょのまどぐちでかくにんできる。",romaji:"Kono seido ni kotae te shitsumon gaareba, kuyakusho no madoguchi de kakunin dekiru.",meaning:"Kalau ada pertanyaan terkait sistem ini, bisa ditanyakan di loket balai kota."},
      {jp:"外国人スタッフに応えて研修も、来月から始まる予定だ。",kana:"がいこくじんすたっふにこたえてけんしゅうも、らいげつからはじまるよていだ。",romaji:"Gaikokujin sutaffu ni kotae te kenshuu mo, raigetsu kara hajima ru yotei da.",meaning:"Pelatihan untuk staf asing juga dijadwalkan mulai bulan depan."},
      {jp:"今回の変更点に応えて詳しい資料は、受付で受け取れる。",kana:"こんかいのへんこうてんにこたえてくわしいしりょうは、うけつけでうけとれる。",romaji:"Konkai no henkouten ni kotae te kuwashii shiryou ha, uketsuke de uketore ru.",meaning:"Materi rinci terkait perubahan kali ini bisa diambil di meja penerima tamu."}
    ]}
  ]},

  // ── GR-N2-75: 〜をはじめ / 〜をはじめとして ──
  {id:"GR-N2-75",level:"N2",title:"〜をはじめ / 〜をはじめとして",summary:"Pola 〜をはじめ / 〜をはじめとして untuk level N2, dengan contoh penggunaan dalam konteks sekolah, kantor, layanan publik, dan kehidupan sehari-hari di Jepang.",groups:[
    {name:"〜をはじめ / 〜をはじめとして",description:"Contoh penggunaan 〜をはじめ / 〜をはじめとして dalam konteks alami sehari-hari di Jepang.",sentences:[
      {jp:"地域のイベントをはじめ、近所の人と少しずつ顔見知りになった。",kana:"ちいきのいべんとをはじめ、きんじょのにんとすこしずつかおみしりになった。",romaji:"Chiiki no ibento wohajime, kinjo no nin to sukoshi zutsu kaomishiri ninatta.",meaning:"Melalui acara lingkungan, saya perlahan mulai mengenal orang-orang sekitar."},
      {jp:"先輩との会話をはじめ、就職活動の流れが具体的に見えてきた。",kana:"せんぱいとのかいわをはじめ、しゅうしょくかつどうのながれがぐたいてきにみえてきた。",romaji:"Senpai tono kaiwa wohajime, shuushokukatsudou no nagare ga gutaiteki ni mie tekita.",meaning:"Melalui percakapan dengan senior, alur mencari kerja jadi terasa lebih jelas."},
      {jp:"実習をはじめ、教室では分からなかった課題にも気づいた。",kana:"じっしゅうをはじめ、きょうしつではわからなかったかだいにもきづいた。",romaji:"Jisshuu wohajime, kyoushitsu deha waka ranakatta kadai nimo kizu ita.",meaning:"Melalui praktik lapangan, saya menyadari tantangan yang tidak terlihat di kelas."},
      {jp:"この資料をはじめ、学校側の考え方を理解してほしい。",kana:"このしりょうをはじめ、がっこうがわのかんがえかたをりかいしてほしい。",romaji:"Kono shiryou wohajime, gakkougawa no kangaekata wo rikai shitehoshii.",meaning:"Melalui materi ini, saya ingin Anda memahami cara pandang pihak sekolah."},
      {jp:"商店街の取り組みをはじめ、地域全体の雰囲気も変わってきた。",kana:"しょうてんがいのとりくみをはじめ、ちいきぜんたいのふんいきもかわってきた。",romaji:"Shoutengai no torikumi wohajime, chiiki zentai no fun'iki mo kawa ttekita.",meaning:"Melalui upaya area pertokoan, suasana seluruh lingkungan juga mulai berubah."}
    ]}
  ]},

  // ── GR-N2-76: 〜限り ──
  {id:"GR-N2-76",level:"N2",title:"〜限り",summary:"Pola 〜限り untuk level N2, dengan contoh penggunaan dalam konteks sekolah, kantor, layanan publik, dan kehidupan sehari-hari di Jepang.",groups:[
    {name:"〜限り",description:"Contoh penggunaan 〜限り dalam konteks alami sehari-hari di Jepang.",sentences:[
      {jp:"この前の説明会では、限りという表現も実際の場面で使われていた。",kana:"このまえのせつめいかいでは、かぎりというひょうげんもじっさいのばめんでつかわれていた。",romaji:"Kono mae no setsumeikai deha, kagiri toiu hyougen mo jissai no bamen de tsukawa reteita.",meaning:"Pada sesi penjelasan sebelumnya, ungkapan ini juga dipakai dalam situasi nyata."},
      {jp:"区役所や学校でも、限りのような言い方を見かけることがある。",kana:"くやくしょやがっこうでも、かぎりのようないいかたをみかけることがある。",romaji:"Kuyakusho ya gakkou demo, kagiri noyouna iikata wo mikake rukotogaaru.",meaning:"Di balai kota maupun sekolah, kadang terlihat cara ungkap seperti ini."},
      {jp:"職場の会話では、限りを使うと少し自然な言い方になる。",kana:"しょくばのかいわでは、かぎりをつかうとすこししぜんないいかたになる。",romaji:"Shokuba no kaiwa deha, kagiri wo tsukau to sukoshi shizen na iikata ninaru.",meaning:"Dalam percakapan kerja, memakai pola ini bisa membuat ungkapan terdengar lebih alami."},
      {jp:"駅前の店で店員さんが話しているのを聞いて、限りの使い方がよく分かった。",kana:"えきまえのみせでてんいんさんがはなしているのをきいて、かぎりのつかいかたがよくわかった。",romaji:"Ekimae no mise de ten'in sanga hanashi teirunowo kii te, kagiri no tsukaikata gayoku waka tta.",meaning:"Saat mendengar staf toko di depan stasiun berbicara, saya jadi lebih paham cara pakai pola ini."},
      {jp:"授業だけでなく、日常の場面でも限りは意外とよく出てくる。",kana:"じゅぎょうだけでなく、にちじょうのばめんでもかぎりはいがいとよくでてくる。",romaji:"Jugyou dakedenaku, nichijou no bamen demo kagiri ha igai toyoku dete kuru.",meaning:"Bukan hanya di kelas, pola ini ternyata cukup sering muncul dalam keseharian."}
    ]}
  ]},

  // ── GR-N2-77: 〜からして ──
  {id:"GR-N2-77",level:"N2",title:"〜からして",summary:"Pola 〜からして untuk level N2, dengan contoh penggunaan dalam konteks sekolah, kantor, layanan publik, dan kehidupan sehari-hari di Jepang.",groups:[
    {name:"〜からして",description:"Contoh penggunaan 〜からして dalam konteks alami sehari-hari di Jepang.",sentences:[
      {jp:"この前の説明会では、からしてという表現も実際の場面で使われていた。",kana:"このまえのせつめいかいでは、からしてというひょうげんもじっさいのばめんでつかわれていた。",romaji:"Kono mae no setsumeikai deha, karashitetoiu hyougen mo jissai no bamen de tsukawa reteita.",meaning:"Pada sesi penjelasan sebelumnya, ungkapan ini juga dipakai dalam situasi nyata."},
      {jp:"区役所や学校でも、からしてのような言い方を見かけることがある。",kana:"くやくしょやがっこうでも、からしてのようないいかたをみかけることがある。",romaji:"Kuyakusho ya gakkou demo, karashitenoyouna iikata wo mikake rukotogaaru.",meaning:"Di balai kota maupun sekolah, kadang terlihat cara ungkap seperti ini."},
      {jp:"職場の会話では、からしてを使うと少し自然な言い方になる。",kana:"しょくばのかいわでは、からしてをつかうとすこししぜんないいかたになる。",romaji:"Shokuba no kaiwa deha, karashitewo tsukau to sukoshi shizen na iikata ninaru.",meaning:"Dalam percakapan kerja, memakai pola ini bisa membuat ungkapan terdengar lebih alami."},
      {jp:"駅前の店で店員さんが話しているのを聞いて、からしての使い方がよく分かった。",kana:"えきまえのみせでてんいんさんがはなしているのをきいて、からしてのつかいかたがよくわかった。",romaji:"Ekimae no mise de ten'in sanga hanashi teirunowo kii te, karashiteno tsukaikata gayoku waka tta.",meaning:"Saat mendengar staf toko di depan stasiun berbicara, saya jadi lebih paham cara pakai pola ini."},
      {jp:"授業だけでなく、日常の場面でもからしては意外とよく出てくる。",kana:"じゅぎょうだけでなく、にちじょうのばめんでもからしてはいがいとよくでてくる。",romaji:"Jugyou dakedenaku, nichijou no bamen demokarashiteha igai toyoku dete kuru.",meaning:"Bukan hanya di kelas, pola ini ternyata cukup sering muncul dalam keseharian."}
    ]}
  ]},

  // ── GR-N2-78: 〜にわたって ──
  {id:"GR-N2-78",level:"N2",title:"〜にわたって",summary:"Pola 〜にわたって untuk level N2, dengan contoh penggunaan dalam konteks sekolah, kantor, layanan publik, dan kehidupan sehari-hari di Jepang.",groups:[
    {name:"〜にわたって",description:"Contoh penggunaan 〜にわたって dalam konteks alami sehari-hari di Jepang.",sentences:[
      {jp:"留学生にわたって説明会が、大学のホールで開かれた。",kana:"りゅうがくせいにわたってせつめいかいが、だいがくのほーるでひらかれた。",romaji:"Ryuugakusei niwatatte setsumeikai ga, daigaku no hooru de hiraka reta.",meaning:"Sesi penjelasan untuk mahasiswa asing diadakan di aula universitas."},
      {jp:"駅前の再開発にわたって住民向けの案内が配られた。",kana:"えきまえのさいかいはつにわたってじゅうみんむけのあんないがくばられた。",romaji:"Ekimae no saikaihatsu niwatatte juumin muke no annai ga kubara reta.",meaning:"Pemberitahuan bagi warga terkait pembangunan ulang area depan stasiun dibagikan."},
      {jp:"この制度にわたって質問があれば、区役所の窓口で確認できる。",kana:"このせいどにわたってしつもんがあれば、くやくしょのまどぐちでかくにんできる。",romaji:"Kono seido niwatatte shitsumon gaareba, kuyakusho no madoguchi de kakunin dekiru.",meaning:"Kalau ada pertanyaan terkait sistem ini, bisa ditanyakan di loket balai kota."},
      {jp:"外国人スタッフにわたって研修も、来月から始まる予定だ。",kana:"がいこくじんすたっふにわたってけんしゅうも、らいげつからはじまるよていだ。",romaji:"Gaikokujin sutaffu niwatatte kenshuu mo, raigetsu kara hajima ru yotei da.",meaning:"Pelatihan untuk staf asing juga dijadwalkan mulai bulan depan."},
      {jp:"今回の変更点にわたって詳しい資料は、受付で受け取れる。",kana:"こんかいのへんこうてんにわたってくわしいしりょうは、うけつけでうけとれる。",romaji:"Konkai no henkouten niwatatte kuwashii shiryou ha, uketsuke de uketore ru.",meaning:"Materi rinci terkait perubahan kali ini bisa diambil di meja penerima tamu."}
    ]}
  ]},

  // ── GR-N2-79: 〜だけ ──
  {id:"GR-N2-79",level:"N2",title:"〜だけ",summary:"Pola 〜だけ untuk level N2, dengan contoh penggunaan dalam konteks sekolah, kantor, layanan publik, dan kehidupan sehari-hari di Jepang.",groups:[
    {name:"〜だけ",description:"Contoh penggunaan 〜だけ dalam konteks alami sehari-hari di Jepang.",sentences:[
      {jp:"この前の説明会では、だけという表現も実際の場面で使われていた。",kana:"このまえのせつめいかいでは、だけというひょうげんもじっさいのばめんでつかわれていた。",romaji:"Kono mae no setsumeikai deha, daketoiu hyougen mo jissai no bamen de tsukawa reteita.",meaning:"Pada sesi penjelasan sebelumnya, ungkapan ini juga dipakai dalam situasi nyata."},
      {jp:"区役所や学校でも、だけのような言い方を見かけることがある。",kana:"くやくしょやがっこうでも、だけのようないいかたをみかけることがある。",romaji:"Kuyakusho ya gakkou demo, dakenoyouna iikata wo mikake rukotogaaru.",meaning:"Di balai kota maupun sekolah, kadang terlihat cara ungkap seperti ini."},
      {jp:"職場の会話では、だけを使うと少し自然な言い方になる。",kana:"しょくばのかいわでは、だけをつかうとすこししぜんないいかたになる。",romaji:"Shokuba no kaiwa deha, dakewo tsukau to sukoshi shizen na iikata ninaru.",meaning:"Dalam percakapan kerja, memakai pola ini bisa membuat ungkapan terdengar lebih alami."},
      {jp:"駅前の店で店員さんが話しているのを聞いて、だけの使い方がよく分かった。",kana:"えきまえのみせでてんいんさんがはなしているのをきいて、だけのつかいかたがよくわかった。",romaji:"Ekimae no mise de ten'in sanga hanashi teirunowo kii te, dakeno tsukaikata gayoku waka tta.",meaning:"Saat mendengar staf toko di depan stasiun berbicara, saya jadi lebih paham cara pakai pola ini."},
      {jp:"授業だけでなく、日常の場面でもだけは意外とよく出てくる。",kana:"じゅぎょうだけでなく、にちじょうのばめんでもだけはいがいとよくでてくる。",romaji:"Jugyou dakedenaku, nichijou no bamen demodakeha igai toyoku dete kuru.",meaning:"Bukan hanya di kelas, pola ini ternyata cukup sering muncul dalam keseharian."}
    ]}
  ]},

  // ── GR-N2-80: 〜ものだ ──
  {id:"GR-N2-80",level:"N2",title:"〜ものだ",summary:"Pola 〜ものだ untuk level N2, dengan contoh penggunaan dalam konteks sekolah, kantor, layanan publik, dan kehidupan sehari-hari di Jepang.",groups:[
    {name:"〜ものだ",description:"Contoh penggunaan 〜ものだ dalam konteks alami sehari-hari di Jepang.",sentences:[
      {jp:"この前の説明会では、ものだという表現も実際の場面で使われていた。",kana:"このまえのせつめいかいでは、ものだというひょうげんもじっさいのばめんでつかわれていた。",romaji:"Kono mae no setsumeikai deha, monodatoiu hyougen mo jissai no bamen de tsukawa reteita.",meaning:"Pada sesi penjelasan sebelumnya, ungkapan ini juga dipakai dalam situasi nyata."},
      {jp:"区役所や学校でも、ものだのような言い方を見かけることがある。",kana:"くやくしょやがっこうでも、ものだのようないいかたをみかけることがある。",romaji:"Kuyakusho ya gakkou demo, monodanoyouna iikata wo mikake rukotogaaru.",meaning:"Di balai kota maupun sekolah, kadang terlihat cara ungkap seperti ini."},
      {jp:"職場の会話では、ものだを使うと少し自然な言い方になる。",kana:"しょくばのかいわでは、ものだをつかうとすこししぜんないいかたになる。",romaji:"Shokuba no kaiwa deha, monodawo tsukau to sukoshi shizen na iikata ninaru.",meaning:"Dalam percakapan kerja, memakai pola ini bisa membuat ungkapan terdengar lebih alami."},
      {jp:"駅前の店で店員さんが話しているのを聞いて、ものだの使い方がよく分かった。",kana:"えきまえのみせでてんいんさんがはなしているのをきいて、ものだのつかいかたがよくわかった。",romaji:"Ekimae no mise de ten'in sanga hanashi teirunowo kii te, monodano tsukaikata gayoku waka tta.",meaning:"Saat mendengar staf toko di depan stasiun berbicara, saya jadi lebih paham cara pakai pola ini."},
      {jp:"授業だけでなく、日常の場面でもものだは意外とよく出てくる。",kana:"じゅぎょうだけでなく、にちじょうのばめんでもものだはいがいとよくでてくる。",romaji:"Jugyou dakedenaku, nichijou no bamen demomonodaha igai toyoku dete kuru.",meaning:"Bukan hanya di kelas, pola ini ternyata cukup sering muncul dalam keseharian."}
    ]}
  ]},

  // ── GR-N2-81: 〜ものではない ──
  {id:"GR-N2-81",level:"N2",title:"〜ものではない",summary:"Pola 〜ものではない untuk level N2, dengan contoh penggunaan dalam konteks sekolah, kantor, layanan publik, dan kehidupan sehari-hari di Jepang.",groups:[
    {name:"〜ものではない",description:"Contoh penggunaan 〜ものではない dalam konteks alami sehari-hari di Jepang.",sentences:[
      {jp:"この前の説明会では、ものではないという表現も実際の場面で使われていた。",kana:"このまえのせつめいかいでは、ものではないというひょうげんもじっさいのばめんでつかわれていた。",romaji:"Kono mae no setsumeikai deha, monodehanaitoiu hyougen mo jissai no bamen de tsukawa reteita.",meaning:"Pada sesi penjelasan sebelumnya, ungkapan ini juga dipakai dalam situasi nyata."},
      {jp:"区役所や学校でも、ものではないのような言い方を見かけることがある。",kana:"くやくしょやがっこうでも、ものではないのようないいかたをみかけることがある。",romaji:"Kuyakusho ya gakkou demo, monodehanainoyouna iikata wo mikake rukotogaaru.",meaning:"Di balai kota maupun sekolah, kadang terlihat cara ungkap seperti ini."},
      {jp:"職場の会話では、ものではないを使うと少し自然な言い方になる。",kana:"しょくばのかいわでは、ものではないをつかうとすこししぜんないいかたになる。",romaji:"Shokuba no kaiwa deha, monodehanaiwo tsukau to sukoshi shizen na iikata ninaru.",meaning:"Dalam percakapan kerja, memakai pola ini bisa membuat ungkapan terdengar lebih alami."},
      {jp:"駅前の店で店員さんが話しているのを聞いて、ものではないの使い方がよく分かった。",kana:"えきまえのみせでてんいんさんがはなしているのをきいて、ものではないのつかいかたがよくわかった。",romaji:"Ekimae no mise de ten'in sanga hanashi teirunowo kii te, monodehanaino tsukaikata gayoku waka tta.",meaning:"Saat mendengar staf toko di depan stasiun berbicara, saya jadi lebih paham cara pakai pola ini."},
      {jp:"授業だけでなく、日常の場面でもものではないは意外とよく出てくる。",kana:"じゅぎょうだけでなく、にちじょうのばめんでもものではないはいがいとよくでてくる。",romaji:"Jugyou dakedenaku, nichijou no bamen demomonodehanaiha igai toyoku dete kuru.",meaning:"Bukan hanya di kelas, pola ini ternyata cukup sering muncul dalam keseharian."}
    ]}
  ]},

  // ── GR-N2-82: 〜ことだ ──
  {id:"GR-N2-82",level:"N2",title:"〜ことだ",summary:"Pola 〜ことだ untuk level N2, dengan contoh penggunaan dalam konteks sekolah, kantor, layanan publik, dan kehidupan sehari-hari di Jepang.",groups:[
    {name:"〜ことだ",description:"Contoh penggunaan 〜ことだ dalam konteks alami sehari-hari di Jepang.",sentences:[
      {jp:"この前の説明会では、ことだという表現も実際の場面で使われていた。",kana:"このまえのせつめいかいでは、ことだというひょうげんもじっさいのばめんでつかわれていた。",romaji:"Kono mae no setsumeikai deha, kotodatoiu hyougen mo jissai no bamen de tsukawa reteita.",meaning:"Pada sesi penjelasan sebelumnya, ungkapan ini juga dipakai dalam situasi nyata."},
      {jp:"区役所や学校でも、ことだのような言い方を見かけることがある。",kana:"くやくしょやがっこうでも、ことだのようないいかたをみかけることがある。",romaji:"Kuyakusho ya gakkou demo, kotodanoyouna iikata wo mikake rukotogaaru.",meaning:"Di balai kota maupun sekolah, kadang terlihat cara ungkap seperti ini."},
      {jp:"職場の会話では、ことだを使うと少し自然な言い方になる。",kana:"しょくばのかいわでは、ことだをつかうとすこししぜんないいかたになる。",romaji:"Shokuba no kaiwa deha, kotodawo tsukau to sukoshi shizen na iikata ninaru.",meaning:"Dalam percakapan kerja, memakai pola ini bisa membuat ungkapan terdengar lebih alami."},
      {jp:"駅前の店で店員さんが話しているのを聞いて、ことだの使い方がよく分かった。",kana:"えきまえのみせでてんいんさんがはなしているのをきいて、ことだのつかいかたがよくわかった。",romaji:"Ekimae no mise de ten'in sanga hanashi teirunowo kii te, kotodano tsukaikata gayoku waka tta.",meaning:"Saat mendengar staf toko di depan stasiun berbicara, saya jadi lebih paham cara pakai pola ini."},
      {jp:"授業だけでなく、日常の場面でもことだは意外とよく出てくる。",kana:"じゅぎょうだけでなく、にちじょうのばめんでもことだはいがいとよくでてくる。",romaji:"Jugyou dakedenaku, nichijou no bamen demokotodaha igai toyoku dete kuru.",meaning:"Bukan hanya di kelas, pola ini ternyata cukup sering muncul dalam keseharian."}
    ]}
  ]},

  // ── GR-N2-83: 〜反面 ──
  {id:"GR-N2-83",level:"N2",title:"〜反面",summary:"Pola 〜反面 untuk level N2, dengan contoh penggunaan dalam konteks sekolah, kantor, layanan publik, dan kehidupan sehari-hari di Jepang.",groups:[
    {name:"〜反面",description:"Contoh penggunaan 〜反面 dalam konteks alami sehari-hari di Jepang.",sentences:[
      {jp:"この前の説明会では、反面という表現も実際の場面で使われていた。",kana:"このまえのせつめいかいでは、はんめんというひょうげんもじっさいのばめんでつかわれていた。",romaji:"Kono mae no setsumeikai deha, hanmen toiu hyougen mo jissai no bamen de tsukawa reteita.",meaning:"Pada sesi penjelasan sebelumnya, ungkapan ini juga dipakai dalam situasi nyata."},
      {jp:"区役所や学校でも、反面のような言い方を見かけることがある。",kana:"くやくしょやがっこうでも、はんめんのようないいかたをみかけることがある。",romaji:"Kuyakusho ya gakkou demo, hanmen noyouna iikata wo mikake rukotogaaru.",meaning:"Di balai kota maupun sekolah, kadang terlihat cara ungkap seperti ini."},
      {jp:"職場の会話では、反面を使うと少し自然な言い方になる。",kana:"しょくばのかいわでは、はんめんをつかうとすこししぜんないいかたになる。",romaji:"Shokuba no kaiwa deha, hanmen wo tsukau to sukoshi shizen na iikata ninaru.",meaning:"Dalam percakapan kerja, memakai pola ini bisa membuat ungkapan terdengar lebih alami."},
      {jp:"駅前の店で店員さんが話しているのを聞いて、反面の使い方がよく分かった。",kana:"えきまえのみせでてんいんさんがはなしているのをきいて、はんめんのつかいかたがよくわかった。",romaji:"Ekimae no mise de ten'in sanga hanashi teirunowo kii te, hanmen no tsukaikata gayoku waka tta.",meaning:"Saat mendengar staf toko di depan stasiun berbicara, saya jadi lebih paham cara pakai pola ini."},
      {jp:"授業だけでなく、日常の場面でも反面は意外とよく出てくる。",kana:"じゅぎょうだけでなく、にちじょうのばめんでもはんめんはいがいとよくでてくる。",romaji:"Jugyou dakedenaku, nichijou no bamen demo hanmen ha igai toyoku dete kuru.",meaning:"Bukan hanya di kelas, pola ini ternyata cukup sering muncul dalam keseharian."}
    ]}
  ]},

  // ── GR-N2-84: 〜だけのことはある ──
  {id:"GR-N2-84",level:"N2",title:"〜だけのことはある",summary:"Pola 〜だけのことはある untuk level N2, dengan contoh penggunaan dalam konteks sekolah, kantor, layanan publik, dan kehidupan sehari-hari di Jepang.",groups:[
    {name:"〜だけのことはある",description:"Contoh penggunaan 〜だけのことはある dalam konteks alami sehari-hari di Jepang.",sentences:[
      {jp:"この前の説明会では、だけのことはあるという表現も実際の場面で使われていた。",kana:"このまえのせつめいかいでは、だけのことはあるというひょうげんもじっさいのばめんでつかわれていた。",romaji:"Kono mae no setsumeikai deha, dakenokotohaarutoiu hyougen mo jissai no bamen de tsukawa reteita.",meaning:"Pada sesi penjelasan sebelumnya, ungkapan ini juga dipakai dalam situasi nyata."},
      {jp:"区役所や学校でも、だけのことはあるのような言い方を見かけることがある。",kana:"くやくしょやがっこうでも、だけのことはあるのようないいかたをみかけることがある。",romaji:"Kuyakusho ya gakkou demo, dakenokotohaarunoyouna iikata wo mikake rukotogaaru.",meaning:"Di balai kota maupun sekolah, kadang terlihat cara ungkap seperti ini."},
      {jp:"職場の会話では、だけのことはあるを使うと少し自然な言い方になる。",kana:"しょくばのかいわでは、だけのことはあるをつかうとすこししぜんないいかたになる。",romaji:"Shokuba no kaiwa deha, dakenokotohaaruwo tsukau to sukoshi shizen na iikata ninaru.",meaning:"Dalam percakapan kerja, memakai pola ini bisa membuat ungkapan terdengar lebih alami."},
      {jp:"駅前の店で店員さんが話しているのを聞いて、だけのことはあるの使い方がよく分かった。",kana:"えきまえのみせでてんいんさんがはなしているのをきいて、だけのことはあるのつかいかたがよくわかった。",romaji:"Ekimae no mise de ten'in sanga hanashi teirunowo kii te, dakenokotohaaruno tsukaikata gayoku waka tta.",meaning:"Saat mendengar staf toko di depan stasiun berbicara, saya jadi lebih paham cara pakai pola ini."},
      {jp:"授業だけでなく、日常の場面でもだけのことはあるは意外とよく出てくる。",kana:"じゅぎょうだけでなく、にちじょうのばめんでもだけのことはあるはいがいとよくでてくる。",romaji:"Jugyou dakedenaku, nichijou no bamen demodakenokotohaaruha igai toyoku dete kuru.",meaning:"Bukan hanya di kelas, pola ini ternyata cukup sering muncul dalam keseharian."}
    ]}
  ]},

  // ── GR-N2-89: 〜たきり ──
  {id:"GR-N2-89",level:"N2",title:"〜たきり",summary:"Pola 〜たきり untuk level N2, dengan contoh penggunaan dalam konteks sekolah, kantor, layanan publik, dan kehidupan sehari-hari di Jepang.",groups:[
    {name:"〜たきり",description:"Contoh penggunaan 〜たきり dalam konteks alami sehari-hari di Jepang.",sentences:[
      {jp:"書類を出したきり, 受付番号を受け取った。",kana:"しょるいをだしたきり, うけつけばんごうをうけとった。",romaji:"Shorui wo dashi takiri,   uketsukebangou wo uketotsu ta.",meaning:"Setelah menyerahkan dokumen itu, saya menerima nomor antrean."},
      {jp:"部屋を見たきり, その日のうちに申し込む人も多い。",kana:"へやをみたきり, そのにちのうちにもうしこむにんもおおい。",romaji:"Heya wo mita kiri,   sono nichi nouchini moushikomu nin mo ooi.",meaning:"Setelah melihat kamar itu, banyak orang langsung mendaftar pada hari yang sama."},
      {jp:"電車を降りたきり, 風の強さに驚いた。",kana:"でんしゃをおりたきり, かぜのつよさにおどろいた。",romaji:"Densha wo ori takiri,   kaze no tsuyosa ni odoroi ta.",meaning:"Begitu turun dari kereta, saya terkejut oleh kencangnya angin."},
      {jp:"先生に会ったきり, 少し安心した。",kana:"せんせいにあったきり, すこしあんしんした。",romaji:"Sensei ni atsu takiri,   sukoshi anshinshi ta.",meaning:"Setelah bertemu sensei, saya merasa sedikit lega."},
      {jp:"店に入ったきり, だしのいい香りが広がっていた。",kana:"みせにいっったきり, だしのいいかおりがひろがっていた。",romaji:"Mise ni itsutsu takiri,   dashinoii kaori ga hiroga tteita.",meaning:"Begitu masuk toko, aroma kaldu yang sedap langsung terasa."}
    ]}
  ]},

  // ── GR-N2-90: 〜あげく ──
  {id:"GR-N2-90",level:"N2",title:"〜あげく",summary:"Pola 〜あげく untuk level N2, dengan contoh penggunaan dalam konteks sekolah, kantor, layanan publik, dan kehidupan sehari-hari di Jepang.",groups:[
    {name:"〜あげく",description:"Contoh penggunaan 〜あげく dalam konteks alami sehari-hari di Jepang.",sentences:[
      {jp:"この前の説明会では、あげくという表現も実際の場面で使われていた。",kana:"このまえのせつめいかいでは、あげくというひょうげんもじっさいのばめんでつかわれていた。",romaji:"Kono mae no setsumeikai deha, agekutoiu hyougen mo jissai no bamen de tsukawa reteita.",meaning:"Pada sesi penjelasan sebelumnya, ungkapan ini juga dipakai dalam situasi nyata."},
      {jp:"区役所や学校でも、あげくのような言い方を見かけることがある。",kana:"くやくしょやがっこうでも、あげくのようないいかたをみかけることがある。",romaji:"Kuyakusho ya gakkou demo, agekunoyouna iikata wo mikake rukotogaaru.",meaning:"Di balai kota maupun sekolah, kadang terlihat cara ungkap seperti ini."},
      {jp:"職場の会話では、あげくを使うと少し自然な言い方になる。",kana:"しょくばのかいわでは、あげくをつかうとすこししぜんないいかたになる。",romaji:"Shokuba no kaiwa deha, agekuwo tsukau to sukoshi shizen na iikata ninaru.",meaning:"Dalam percakapan kerja, memakai pola ini bisa membuat ungkapan terdengar lebih alami."},
      {jp:"駅前の店で店員さんが話しているのを聞いて、あげくの使い方がよく分かった。",kana:"えきまえのみせでてんいんさんがはなしているのをきいて、あげくのつかいかたがよくわかった。",romaji:"Ekimae no mise de ten'in sanga hanashi teirunowo kii te, agekuno tsukaikata gayoku waka tta.",meaning:"Saat mendengar staf toko di depan stasiun berbicara, saya jadi lebih paham cara pakai pola ini."},
      {jp:"授業だけでなく、日常の場面でもあげくは意外とよく出てくる。",kana:"じゅぎょうだけでなく、にちじょうのばめんでもあげくはいがいとよくでてくる。",romaji:"Jugyou dakedenaku, nichijou no bamen demoagekuha igai toyoku dete kuru.",meaning:"Bukan hanya di kelas, pola ini ternyata cukup sering muncul dalam keseharian."}
    ]}
  ]},

  // ── GR-N2-91: 〜末(に) ──
  {id:"GR-N2-91",level:"N2",title:"〜末(に)",summary:"Pola 〜末(に) untuk level N2, dengan contoh penggunaan dalam konteks sekolah, kantor, layanan publik, dan kehidupan sehari-hari di Jepang.",groups:[
    {name:"〜末(に)",description:"Contoh penggunaan 〜末(に) dalam konteks alami sehari-hari di Jepang.",sentences:[
      {jp:"この前の説明会では、末という表現も実際の場面で使われていた。",kana:"このまえのせつめいかいでは、まつというひょうげんもじっさいのばめんでつかわれていた。",romaji:"Kono mae no setsumeikai deha, matsu toiu hyougen mo jissai no bamen de tsukawa reteita.",meaning:"Pada sesi penjelasan sebelumnya, ungkapan ini juga dipakai dalam situasi nyata."},
      {jp:"区役所や学校でも、末のような言い方を見かけることがある。",kana:"くやくしょやがっこうでも、まつのようないいかたをみかけることがある。",romaji:"Kuyakusho ya gakkou demo, matsu noyouna iikata wo mikake rukotogaaru.",meaning:"Di balai kota maupun sekolah, kadang terlihat cara ungkap seperti ini."},
      {jp:"職場の会話では、末を使うと少し自然な言い方になる。",kana:"しょくばのかいわでは、まつをつかうとすこししぜんないいかたになる。",romaji:"Shokuba no kaiwa deha, matsu wo tsukau to sukoshi shizen na iikata ninaru.",meaning:"Dalam percakapan kerja, memakai pola ini bisa membuat ungkapan terdengar lebih alami."},
      {jp:"駅前の店で店員さんが話しているのを聞いて、末の使い方がよく分かった。",kana:"えきまえのみせでてんいんさんがはなしているのをきいて、まつのつかいかたがよくわかった。",romaji:"Ekimae no mise de ten'in sanga hanashi teirunowo kii te, matsu no tsukaikata gayoku waka tta.",meaning:"Saat mendengar staf toko di depan stasiun berbicara, saya jadi lebih paham cara pakai pola ini."},
      {jp:"授業だけでなく、日常の場面でも末は意外とよく出てくる。",kana:"じゅぎょうだけでなく、にちじょうのばめんでもまつはいがいとよくでてくる。",romaji:"Jugyou dakedenaku, nichijou no bamen demo matsu ha igai toyoku dete kuru.",meaning:"Bukan hanya di kelas, pola ini ternyata cukup sering muncul dalam keseharian."}
    ]}
  ]},

  // ── GR-N2-92: 〜ずじまい ──
  {id:"GR-N2-92",level:"N2",title:"〜ずじまい",summary:"Pola 〜ずじまい untuk level N2, dengan contoh penggunaan dalam konteks sekolah, kantor, layanan publik, dan kehidupan sehari-hari di Jepang.",groups:[
    {name:"〜ずじまい",description:"Contoh penggunaan 〜ずじまい dalam konteks alami sehari-hari di Jepang.",sentences:[
      {jp:"この前の説明会では、ずじまいという表現も実際の場面で使われていた。",kana:"このまえのせつめいかいでは、ずじまいというひょうげんもじっさいのばめんでつかわれていた。",romaji:"Kono mae no setsumeikai deha, zujimaitoiu hyougen mo jissai no bamen de tsukawa reteita.",meaning:"Pada sesi penjelasan sebelumnya, ungkapan ini juga dipakai dalam situasi nyata."},
      {jp:"区役所や学校でも、ずじまいのような言い方を見かけることがある。",kana:"くやくしょやがっこうでも、ずじまいのようないいかたをみかけることがある。",romaji:"Kuyakusho ya gakkou demo, zujimainoyouna iikata wo mikake rukotogaaru.",meaning:"Di balai kota maupun sekolah, kadang terlihat cara ungkap seperti ini."},
      {jp:"職場の会話では、ずじまいを使うと少し自然な言い方になる。",kana:"しょくばのかいわでは、ずじまいをつかうとすこししぜんないいかたになる。",romaji:"Shokuba no kaiwa deha, zujimaiwo tsukau to sukoshi shizen na iikata ninaru.",meaning:"Dalam percakapan kerja, memakai pola ini bisa membuat ungkapan terdengar lebih alami."},
      {jp:"駅前の店で店員さんが話しているのを聞いて、ずじまいの使い方がよく分かった。",kana:"えきまえのみせでてんいんさんがはなしているのをきいて、ずじまいのつかいかたがよくわかった。",romaji:"Ekimae no mise de ten'in sanga hanashi teirunowo kii te, zujimaino tsukaikata gayoku waka tta.",meaning:"Saat mendengar staf toko di depan stasiun berbicara, saya jadi lebih paham cara pakai pola ini."},
      {jp:"授業だけでなく、日常の場面でもずじまいは意外とよく出てくる。",kana:"じゅぎょうだけでなく、にちじょうのばめんでもずじまいはいがいとよくでてくる。",romaji:"Jugyou dakedenaku, nichijou no bamen demozujimaiha igai toyoku dete kuru.",meaning:"Bukan hanya di kelas, pola ini ternyata cukup sering muncul dalam keseharian."}
    ]}
  ]},

  // ── GR-N2-93: 〜次第だ ──
  {id:"GR-N2-93",level:"N2",title:"〜次第だ",summary:"Pola 〜次第だ untuk level N2, dengan contoh penggunaan dalam konteks sekolah, kantor, layanan publik, dan kehidupan sehari-hari di Jepang.",groups:[
    {name:"〜次第だ",description:"Contoh penggunaan 〜次第だ dalam konteks alami sehari-hari di Jepang.",sentences:[
      {jp:"この前の説明会では、次第だという表現も実際の場面で使われていた。",kana:"このまえのせつめいかいでは、しだいだというひょうげんもじっさいのばめんでつかわれていた。",romaji:"Kono mae no setsumeikai deha, shidai datoiu hyougen mo jissai no bamen de tsukawa reteita.",meaning:"Pada sesi penjelasan sebelumnya, ungkapan ini juga dipakai dalam situasi nyata."},
      {jp:"区役所や学校でも、次第だのような言い方を見かけることがある。",kana:"くやくしょやがっこうでも、しだいだのようないいかたをみかけることがある。",romaji:"Kuyakusho ya gakkou demo, shidai danoyouna iikata wo mikake rukotogaaru.",meaning:"Di balai kota maupun sekolah, kadang terlihat cara ungkap seperti ini."},
      {jp:"職場の会話では、次第だを使うと少し自然な言い方になる。",kana:"しょくばのかいわでは、しだいだをつかうとすこししぜんないいかたになる。",romaji:"Shokuba no kaiwa deha, shidai dawo tsukau to sukoshi shizen na iikata ninaru.",meaning:"Dalam percakapan kerja, memakai pola ini bisa membuat ungkapan terdengar lebih alami."},
      {jp:"駅前の店で店員さんが話しているのを聞いて、次第だの使い方がよく分かった。",kana:"えきまえのみせでてんいんさんがはなしているのをきいて、しだいだのつかいかたがよくわかった。",romaji:"Ekimae no mise de ten'in sanga hanashi teirunowo kii te, shidai dano tsukaikata gayoku waka tta.",meaning:"Saat mendengar staf toko di depan stasiun berbicara, saya jadi lebih paham cara pakai pola ini."},
      {jp:"授業だけでなく、日常の場面でも次第だは意外とよく出てくる。",kana:"じゅぎょうだけでなく、にちじょうのばめんでもしだいだはいがいとよくでてくる。",romaji:"Jugyou dakedenaku, nichijou no bamen demo shidai daha igai toyoku dete kuru.",meaning:"Bukan hanya di kelas, pola ini ternyata cukup sering muncul dalam keseharian."}
    ]}
  ]},

  // ── GR-N2-95: 〜にともなって / 〜にともない / 〜にともなう ──
  {id:"GR-N2-95",level:"N2",title:"〜にともなって / 〜にともない / 〜にともなう",summary:"Pola 〜にともなって / 〜にともない / 〜にともなう untuk level N2, dengan contoh penggunaan dalam konteks sekolah, kantor, layanan publik, dan kehidupan sehari-hari di Jepang.",groups:[
    {name:"〜にともなって / 〜にともない / 〜にともなう",description:"Contoh penggunaan 〜にともなって / 〜にともない / 〜にともなう dalam konteks alami sehari-hari di Jepang.",sentences:[
      {jp:"留学生にともなって説明会が、大学のホールで開かれた。",kana:"りゅうがくせいにともなってせつめいかいが、だいがくのほーるでひらかれた。",romaji:"Ryuugakusei nitomonatte setsumeikai ga, daigaku no hooru de hiraka reta.",meaning:"Sesi penjelasan untuk mahasiswa asing diadakan di aula universitas."},
      {jp:"駅前の再開発にともなって住民向けの案内が配られた。",kana:"えきまえのさいかいはつにともなってじゅうみんむけのあんないがくばられた。",romaji:"Ekimae no saikaihatsu nitomonatte juumin muke no annai ga kubara reta.",meaning:"Pemberitahuan bagi warga terkait pembangunan ulang area depan stasiun dibagikan."},
      {jp:"この制度にともなって質問があれば、区役所の窓口で確認できる。",kana:"このせいどにともなってしつもんがあれば、くやくしょのまどぐちでかくにんできる。",romaji:"Kono seido nitomonatte shitsumon gaareba, kuyakusho no madoguchi de kakunin dekiru.",meaning:"Kalau ada pertanyaan terkait sistem ini, bisa ditanyakan di loket balai kota."},
      {jp:"外国人スタッフにともなって研修も、来月から始まる予定だ。",kana:"がいこくじんすたっふにともなってけんしゅうも、らいげつからはじまるよていだ。",romaji:"Gaikokujin sutaffu nitomonatte kenshuu mo, raigetsu kara hajima ru yotei da.",meaning:"Pelatihan untuk staf asing juga dijadwalkan mulai bulan depan."},
      {jp:"今回の変更点にともなって詳しい資料は、受付で受け取れる。",kana:"こんかいのへんこうてんにともなってくわしいしりょうは、うけつけでうけとれる。",romaji:"Konkai no henkouten nitomonatte kuwashii shiryou ha, uketsuke de uketore ru.",meaning:"Materi rinci terkait perubahan kali ini bisa diambil di meja penerima tamu."}
    ]}
  ]},

  // ── GR-N2-96: 〜につれて ──
  {id:"GR-N2-96",level:"N2",title:"〜につれて",summary:"Pola 〜につれて untuk level N2, dengan contoh penggunaan dalam konteks sekolah, kantor, layanan publik, dan kehidupan sehari-hari di Jepang.",groups:[
    {name:"〜につれて",description:"Contoh penggunaan 〜につれて dalam konteks alami sehari-hari di Jepang.",sentences:[
      {jp:"留学生につれて説明会が、大学のホールで開かれた。",kana:"りゅうがくせいにつれてせつめいかいが、だいがくのほーるでひらかれた。",romaji:"Ryuugakusei nitsurete setsumeikai ga, daigaku no hooru de hiraka reta.",meaning:"Sesi penjelasan untuk mahasiswa asing diadakan di aula universitas."},
      {jp:"駅前の再開発につれて住民向けの案内が配られた。",kana:"えきまえのさいかいはつにつれてじゅうみんむけのあんないがくばられた。",romaji:"Ekimae no saikaihatsu nitsurete juumin muke no annai ga kubara reta.",meaning:"Pemberitahuan bagi warga terkait pembangunan ulang area depan stasiun dibagikan."},
      {jp:"この制度につれて質問があれば、区役所の窓口で確認できる。",kana:"このせいどにつれてしつもんがあれば、くやくしょのまどぐちでかくにんできる。",romaji:"Kono seido nitsurete shitsumon gaareba, kuyakusho no madoguchi de kakunin dekiru.",meaning:"Kalau ada pertanyaan terkait sistem ini, bisa ditanyakan di loket balai kota."},
      {jp:"外国人スタッフにつれて研修も、来月から始まる予定だ。",kana:"がいこくじんすたっふにつれてけんしゅうも、らいげつからはじまるよていだ。",romaji:"Gaikokujin sutaffu nitsurete kenshuu mo, raigetsu kara hajima ru yotei da.",meaning:"Pelatihan untuk staf asing juga dijadwalkan mulai bulan depan."},
      {jp:"今回の変更点につれて詳しい資料は、受付で受け取れる。",kana:"こんかいのへんこうてんにつれてくわしいしりょうは、うけつけでうけとれる。",romaji:"Konkai no henkouten nitsurete kuwashii shiryou ha, uketsuke de uketore ru.",meaning:"Materi rinci terkait perubahan kali ini bisa diambil di meja penerima tamu."}
    ]}
  ]},

  // ── GR-N2-97: 〜かいあって / 〜かいもなく ──
  {id:"GR-N2-97",level:"N2",title:"〜かいあって / 〜かいもなく",summary:"Pola 〜かいあって / 〜かいもなく untuk level N2, dengan contoh penggunaan dalam konteks sekolah, kantor, layanan publik, dan kehidupan sehari-hari di Jepang.",groups:[
    {name:"〜かいあって / 〜かいもなく",description:"Contoh penggunaan 〜かいあって / 〜かいもなく dalam konteks alami sehari-hari di Jepang.",sentences:[
      {jp:"この前の説明会では、かいあってという表現も実際の場面で使われていた。",kana:"このまえのせつめいかいでは、かいあってというひょうげんもじっさいのばめんでつかわれていた。",romaji:"Kono mae no setsumeikai deha, kaiattetoiu hyougen mo jissai no bamen de tsukawa reteita.",meaning:"Pada sesi penjelasan sebelumnya, ungkapan ini juga dipakai dalam situasi nyata."},
      {jp:"区役所や学校でも、かいあってのような言い方を見かけることがある。",kana:"くやくしょやがっこうでも、かいあってのようないいかたをみかけることがある。",romaji:"Kuyakusho ya gakkou demo, kaiattenoyouna iikata wo mikake rukotogaaru.",meaning:"Di balai kota maupun sekolah, kadang terlihat cara ungkap seperti ini."},
      {jp:"職場の会話では、かいあってを使うと少し自然な言い方になる。",kana:"しょくばのかいわでは、かいあってをつかうとすこししぜんないいかたになる。",romaji:"Shokuba no kaiwa deha, kaiattewo tsukau to sukoshi shizen na iikata ninaru.",meaning:"Dalam percakapan kerja, memakai pola ini bisa membuat ungkapan terdengar lebih alami."},
      {jp:"駅前の店で店員さんが話しているのを聞いて、かいあっての使い方がよく分かった。",kana:"えきまえのみせでてんいんさんがはなしているのをきいて、かいあってのつかいかたがよくわかった。",romaji:"Ekimae no mise de ten'in sanga hanashi teirunowo kii te, kaiatteno tsukaikata gayoku waka tta.",meaning:"Saat mendengar staf toko di depan stasiun berbicara, saya jadi lebih paham cara pakai pola ini."},
      {jp:"授業だけでなく、日常の場面でもかいあっては意外とよく出てくる。",kana:"じゅぎょうだけでなく、にちじょうのばめんでもかいあってはいがいとよくでてくる。",romaji:"Jugyou dakedenaku, nichijou no bamen demokaiatteha igai toyoku dete kuru.",meaning:"Bukan hanya di kelas, pola ini ternyata cukup sering muncul dalam keseharian."}
    ]}
  ]},

  // ── GR-N2-98: 〜つつある ──
  {id:"GR-N2-98",level:"N2",title:"〜つつある",summary:"Pola 〜つつある untuk level N2, dengan contoh penggunaan dalam konteks sekolah, kantor, layanan publik, dan kehidupan sehari-hari di Jepang.",groups:[
    {name:"〜つつある",description:"Contoh penggunaan 〜つつある dalam konteks alami sehari-hari di Jepang.",sentences:[
      {jp:"駅前の景色は、数年で少しずつ変わってきた。",kana:"えきまえのけしきは、すうねんですこしずつかわってきた。",romaji:"Ekimae no keshiki ha, suunen de sukoshi zutsu kawa ttekita.",meaning:"Pemandangan depan stasiun pelan-pelan berubah dalam beberapa tahun terakhir."},
      {jp:"外国人向けの案内も、以前より分かりやすくなっていくと思う。",kana:"がいこくじんむけのあんないも、いぜんよりわかりやすくなっていくとおもう。",romaji:"Gaikokujin muke no annai mo, izen yori waka riyasukunatteikuto omou.",meaning:"Saya rasa petunjuk bagi orang asing juga akan semakin mudah dipahami ke depannya."},
      {jp:"気温が上がるにつれて、川沿いを歩く人が増えてきた。",kana:"きおんがあがるにつれて、かわぞいをあるくにんがふえてきた。",romaji:"Kion ga aga runitsurete, kawazoi wo aruku nin ga fue tekita.",meaning:"Seiring suhu naik, orang yang berjalan di tepi sungai mulai bertambah."},
      {jp:"家賃はこの数年で上がる一方だ。",kana:"やちんはこのすうねんであがるいっぽうだ。",romaji:"Yachin hakono suunen de aga ru ippou da.",meaning:"Harga sewa dalam beberapa tahun ini hanya terus naik."},
      {jp:"締め切りが近づき、準備すべきことは増えるばかりだ。",kana:"しめきりがちかづき、じゅんびすべきことはふえるばかりだ。",romaji:"Shimekiri ga chikazu ki, junbi subekikotoha fue rubakarida.",meaning:"Saat tenggat makin dekat, hal-hal yang harus dipersiapkan justru terus bertambah."}
    ]}
  ]},

  // ── GR-N2-99: 〜一方だ ──
  {id:"GR-N2-99",level:"N2",title:"〜一方だ",summary:"Pola 〜一方だ untuk level N2, dengan contoh penggunaan dalam konteks sekolah, kantor, layanan publik, dan kehidupan sehari-hari di Jepang.",groups:[
    {name:"〜一方だ",description:"Contoh penggunaan 〜一方だ dalam konteks alami sehari-hari di Jepang.",sentences:[
      {jp:"駅前の景色は、数年で少しずつ変わってきた。",kana:"えきまえのけしきは、すうねんですこしずつかわってきた。",romaji:"Ekimae no keshiki ha, suunen de sukoshi zutsu kawa ttekita.",meaning:"Pemandangan depan stasiun pelan-pelan berubah dalam beberapa tahun terakhir."},
      {jp:"外国人向けの案内も、以前より分かりやすくなっていくと思う。",kana:"がいこくじんむけのあんないも、いぜんよりわかりやすくなっていくとおもう。",romaji:"Gaikokujin muke no annai mo, izen yori waka riyasukunatteikuto omou.",meaning:"Saya rasa petunjuk bagi orang asing juga akan semakin mudah dipahami ke depannya."},
      {jp:"気温が上がるにつれて、川沿いを歩く人が増えてきた。",kana:"きおんがあがるにつれて、かわぞいをあるくにんがふえてきた。",romaji:"Kion ga aga runitsurete, kawazoi wo aruku nin ga fue tekita.",meaning:"Seiring suhu naik, orang yang berjalan di tepi sungai mulai bertambah."},
      {jp:"家賃はこの数年で上がる一方だ。",kana:"やちんはこのすうねんであがるいっぽうだ。",romaji:"Yachin hakono suunen de aga ru ippou da.",meaning:"Harga sewa dalam beberapa tahun ini hanya terus naik."},
      {jp:"締め切りが近づき、準備すべきことは増えるばかりだ。",kana:"しめきりがちかづき、じゅんびすべきことはふえるばかりだ。",romaji:"Shimekiri ga chikazu ki, junbi subekikotoha fue rubakarida.",meaning:"Saat tenggat makin dekat, hal-hal yang harus dipersiapkan justru terus bertambah."}
    ]}
  ]},

  // ── GR-N2-100: 〜ばかりだ ──
  {id:"GR-N2-100",level:"N2",title:"〜ばかりだ",summary:"Pola 〜ばかりだ untuk level N2, dengan contoh penggunaan dalam konteks sekolah, kantor, layanan publik, dan kehidupan sehari-hari di Jepang.",groups:[
    {name:"〜ばかりだ",description:"Contoh penggunaan 〜ばかりだ dalam konteks alami sehari-hari di Jepang.",sentences:[
      {jp:"駅前の景色は、数年で少しずつ変わってきた。",kana:"えきまえのけしきは、すうねんですこしずつかわってきた。",romaji:"Ekimae no keshiki ha, suunen de sukoshi zutsu kawa ttekita.",meaning:"Pemandangan depan stasiun pelan-pelan berubah dalam beberapa tahun terakhir."},
      {jp:"外国人向けの案内も、以前より分かりやすくなっていくと思う。",kana:"がいこくじんむけのあんないも、いぜんよりわかりやすくなっていくとおもう。",romaji:"Gaikokujin muke no annai mo, izen yori waka riyasukunatteikuto omou.",meaning:"Saya rasa petunjuk bagi orang asing juga akan semakin mudah dipahami ke depannya."},
      {jp:"気温が上がるにつれて、川沿いを歩く人が増えてきた。",kana:"きおんがあがるにつれて、かわぞいをあるくにんがふえてきた。",romaji:"Kion ga aga runitsurete, kawazoi wo aruku nin ga fue tekita.",meaning:"Seiring suhu naik, orang yang berjalan di tepi sungai mulai bertambah."},
      {jp:"家賃はこの数年で上がる一方だ。",kana:"やちんはこのすうねんであがるいっぽうだ。",romaji:"Yachin hakono suunen de aga ru ippou da.",meaning:"Harga sewa dalam beberapa tahun ini hanya terus naik."},
      {jp:"締め切りが近づき、準備すべきことは増えるばかりだ。",kana:"しめきりがちかづき、じゅんびすべきことはふえるばかりだ。",romaji:"Shimekiri ga chikazu ki, junbi subekikotoha fue rubakarida.",meaning:"Saat tenggat makin dekat, hal-hal yang harus dipersiapkan justru terus bertambah."}
    ]}
  ]},

  // ── GR-N2-101: 〜に応じて ──
  {id:"GR-N2-101",level:"N2",title:"〜に応じて",summary:"Pola 〜に応じて untuk level N2, dengan contoh penggunaan dalam konteks sekolah, kantor, layanan publik, dan kehidupan sehari-hari di Jepang.",groups:[
    {name:"〜に応じて",description:"Contoh penggunaan 〜に応じて dalam konteks alami sehari-hari di Jepang.",sentences:[
      {jp:"留学生に応じて説明会が、大学のホールで開かれた。",kana:"りゅうがくせいにおうじてせつめいかいが、だいがくのほーるでひらかれた。",romaji:"Ryuugakusei ni ouji te setsumeikai ga, daigaku no hooru de hiraka reta.",meaning:"Sesi penjelasan untuk mahasiswa asing diadakan di aula universitas."},
      {jp:"駅前の再開発に応じて住民向けの案内が配られた。",kana:"えきまえのさいかいはつにおうじてじゅうみんむけのあんないがくばられた。",romaji:"Ekimae no saikaihatsu ni ouji te juumin muke no annai ga kubara reta.",meaning:"Pemberitahuan bagi warga terkait pembangunan ulang area depan stasiun dibagikan."},
      {jp:"この制度に応じて質問があれば、区役所の窓口で確認できる。",kana:"このせいどにおうじてしつもんがあれば、くやくしょのまどぐちでかくにんできる。",romaji:"Kono seido ni ouji te shitsumon gaareba, kuyakusho no madoguchi de kakunin dekiru.",meaning:"Kalau ada pertanyaan terkait sistem ini, bisa ditanyakan di loket balai kota."},
      {jp:"外国人スタッフに応じて研修も、来月から始まる予定だ。",kana:"がいこくじんすたっふにおうじてけんしゅうも、らいげつからはじまるよていだ。",romaji:"Gaikokujin sutaffu ni ouji te kenshuu mo, raigetsu kara hajima ru yotei da.",meaning:"Pelatihan untuk staf asing juga dijadwalkan mulai bulan depan."},
      {jp:"今回の変更点に応じて詳しい資料は、受付で受け取れる。",kana:"こんかいのへんこうてんにおうじてくわしいしりょうは、うけつけでうけとれる。",romaji:"Konkai no henkouten ni ouji te kuwashii shiryou ha, uketsuke de uketore ru.",meaning:"Materi rinci terkait perubahan kali ini bisa diambil di meja penerima tamu."}
    ]}
  ]},

  // ── GR-N2-102: 〜につけ / 〜につけて ──
  {id:"GR-N2-102",level:"N2",title:"〜につけ / 〜につけて",summary:"Pola 〜につけ / 〜につけて untuk level N2, dengan contoh penggunaan dalam konteks sekolah, kantor, layanan publik, dan kehidupan sehari-hari di Jepang.",groups:[
    {name:"〜につけ / 〜につけて",description:"Contoh penggunaan 〜につけ / 〜につけて dalam konteks alami sehari-hari di Jepang.",sentences:[
      {jp:"留学生につけ説明会が、大学のホールで開かれた。",kana:"りゅうがくせいにつけせつめいかいが、だいがくのほーるでひらかれた。",romaji:"Ryuugakusei nitsuke setsumeikai ga, daigaku no hooru de hiraka reta.",meaning:"Sesi penjelasan untuk mahasiswa asing diadakan di aula universitas."},
      {jp:"駅前の再開発につけ住民向けの案内が配られた。",kana:"えきまえのさいかいはつにつけじゅうみんむけのあんないがくばられた。",romaji:"Ekimae no saikaihatsu nitsuke juumin muke no annai ga kubara reta.",meaning:"Pemberitahuan bagi warga terkait pembangunan ulang area depan stasiun dibagikan."},
      {jp:"この制度につけ質問があれば、区役所の窓口で確認できる。",kana:"このせいどにつけしつもんがあれば、くやくしょのまどぐちでかくにんできる。",romaji:"Kono seido nitsuke shitsumon gaareba, kuyakusho no madoguchi de kakunin dekiru.",meaning:"Kalau ada pertanyaan terkait sistem ini, bisa ditanyakan di loket balai kota."},
      {jp:"外国人スタッフにつけ研修も、来月から始まる予定だ。",kana:"がいこくじんすたっふにつけけんしゅうも、らいげつからはじまるよていだ。",romaji:"Gaikokujin sutaffu nitsuke kenshuu mo, raigetsu kara hajima ru yotei da.",meaning:"Pelatihan untuk staf asing juga dijadwalkan mulai bulan depan."},
      {jp:"今回の変更点につけ詳しい資料は、受付で受け取れる。",kana:"こんかいのへんこうてんにつけくわしいしりょうは、うけつけでうけとれる。",romaji:"Konkai no henkouten nitsuke kuwashii shiryou ha, uketsuke de uketore ru.",meaning:"Materi rinci terkait perubahan kali ini bisa diambil di meja penerima tamu."}
    ]}
  ]},

  // ── GR-N2-103: 〜を契機に / 〜を契機にして ──
  {id:"GR-N2-103",level:"N2",title:"〜を契機に / 〜を契機にして",summary:"Pola 〜を契機に / 〜を契機にして untuk level N2, dengan contoh penggunaan dalam konteks sekolah, kantor, layanan publik, dan kehidupan sehari-hari di Jepang.",groups:[
    {name:"〜を契機に / 〜を契機にして",description:"Contoh penggunaan 〜を契機に / 〜を契機にして dalam konteks alami sehari-hari di Jepang.",sentences:[
      {jp:"地域のイベントを契機に、近所の人と少しずつ顔見知りになった。",kana:"ちいきのいべんとをけいきに、きんじょのにんとすこしずつかおみしりになった。",romaji:"Chiiki no ibento wo keiki ni, kinjo no nin to sukoshi zutsu kaomishiri ninatta.",meaning:"Melalui acara lingkungan, saya perlahan mulai mengenal orang-orang sekitar."},
      {jp:"先輩との会話を契機に、就職活動の流れが具体的に見えてきた。",kana:"せんぱいとのかいわをけいきに、しゅうしょくかつどうのながれがぐたいてきにみえてきた。",romaji:"Senpai tono kaiwa wo keiki ni, shuushokukatsudou no nagare ga gutaiteki ni mie tekita.",meaning:"Melalui percakapan dengan senior, alur mencari kerja jadi terasa lebih jelas."},
      {jp:"実習を契機に、教室では分からなかった課題にも気づいた。",kana:"じっしゅうをけいきに、きょうしつではわからなかったかだいにもきづいた。",romaji:"Jisshuu wo keiki ni, kyoushitsu deha waka ranakatta kadai nimo kizu ita.",meaning:"Melalui praktik lapangan, saya menyadari tantangan yang tidak terlihat di kelas."},
      {jp:"この資料を契機に、学校側の考え方を理解してほしい。",kana:"このしりょうをけいきに、がっこうがわのかんがえかたをりかいしてほしい。",romaji:"Kono shiryou wo keiki ni, gakkougawa no kangaekata wo rikai shitehoshii.",meaning:"Melalui materi ini, saya ingin Anda memahami cara pandang pihak sekolah."},
      {jp:"商店街の取り組みを契機に、地域全体の雰囲気も変わってきた。",kana:"しょうてんがいのとりくみをけいきに、ちいきぜんたいのふんいきもかわってきた。",romaji:"Shoutengai no torikumi wo keiki ni, chiiki zentai no fun'iki mo kawa ttekita.",meaning:"Melalui upaya area pertokoan, suasana seluruh lingkungan juga mulai berubah."}
    ]}
  ]},

  // ── GR-N2-104: 〜をきっかけに ──
  {id:"GR-N2-104",level:"N2",title:"〜をきっかけに",summary:"Pola 〜をきっかけに untuk level N2, dengan contoh penggunaan dalam konteks sekolah, kantor, layanan publik, dan kehidupan sehari-hari di Jepang.",groups:[
    {name:"〜をきっかけに",description:"Contoh penggunaan 〜をきっかけに dalam konteks alami sehari-hari di Jepang.",sentences:[
      {jp:"地域のイベントをきっかけに、近所の人と少しずつ顔見知りになった。",kana:"ちいきのいべんとをきっかけに、きんじょのにんとすこしずつかおみしりになった。",romaji:"Chiiki no ibento wokikkakeni, kinjo no nin to sukoshi zutsu kaomishiri ninatta.",meaning:"Melalui acara lingkungan, saya perlahan mulai mengenal orang-orang sekitar."},
      {jp:"先輩との会話をきっかけに、就職活動の流れが具体的に見えてきた。",kana:"せんぱいとのかいわをきっかけに、しゅうしょくかつどうのながれがぐたいてきにみえてきた。",romaji:"Senpai tono kaiwa wokikkakeni, shuushokukatsudou no nagare ga gutaiteki ni mie tekita.",meaning:"Melalui percakapan dengan senior, alur mencari kerja jadi terasa lebih jelas."},
      {jp:"実習をきっかけに、教室では分からなかった課題にも気づいた。",kana:"じっしゅうをきっかけに、きょうしつではわからなかったかだいにもきづいた。",romaji:"Jisshuu wokikkakeni, kyoushitsu deha waka ranakatta kadai nimo kizu ita.",meaning:"Melalui praktik lapangan, saya menyadari tantangan yang tidak terlihat di kelas."},
      {jp:"この資料をきっかけに、学校側の考え方を理解してほしい。",kana:"このしりょうをきっかけに、がっこうがわのかんがえかたをりかいしてほしい。",romaji:"Kono shiryou wokikkakeni, gakkougawa no kangaekata wo rikai shitehoshii.",meaning:"Melalui materi ini, saya ingin Anda memahami cara pandang pihak sekolah."},
      {jp:"商店街の取り組みをきっかけに、地域全体の雰囲気も変わってきた。",kana:"しょうてんがいのとりくみをきっかけに、ちいきぜんたいのふんいきもかわってきた。",romaji:"Shoutengai no torikumi wokikkakeni, chiiki zentai no fun'iki mo kawa ttekita.",meaning:"Melalui upaya area pertokoan, suasana seluruh lingkungan juga mulai berubah."}
    ]}
  ]},

  // ── GR-N2-105: 〜ようではないか ──
  {id:"GR-N2-105",level:"N2",title:"〜ようではないか",summary:"Pola 〜ようではないか untuk level N2, dengan contoh penggunaan dalam konteks sekolah, kantor, layanan publik, dan kehidupan sehari-hari di Jepang.",groups:[
    {name:"〜ようではないか",description:"Contoh penggunaan 〜ようではないか dalam konteks alami sehari-hari di Jepang.",sentences:[
      {jp:"この前の説明会では、ようではないかという表現も実際の場面で使われていた。",kana:"このまえのせつめいかいでは、ようではないかというひょうげんもじっさいのばめんでつかわれていた。",romaji:"Kono mae no setsumeikai deha, youdehanaikatoiu hyougen mo jissai no bamen de tsukawa reteita.",meaning:"Pada sesi penjelasan sebelumnya, ungkapan ini juga dipakai dalam situasi nyata."},
      {jp:"区役所や学校でも、ようではないかのような言い方を見かけることがある。",kana:"くやくしょやがっこうでも、ようではないかのようないいかたをみかけることがある。",romaji:"Kuyakusho ya gakkou demo, youdehanaikanoyouna iikata wo mikake rukotogaaru.",meaning:"Di balai kota maupun sekolah, kadang terlihat cara ungkap seperti ini."},
      {jp:"職場の会話では、ようではないかを使うと少し自然な言い方になる。",kana:"しょくばのかいわでは、ようではないかをつかうとすこししぜんないいかたになる。",romaji:"Shokuba no kaiwa deha, youdehanaikawo tsukau to sukoshi shizen na iikata ninaru.",meaning:"Dalam percakapan kerja, memakai pola ini bisa membuat ungkapan terdengar lebih alami."},
      {jp:"駅前の店で店員さんが話しているのを聞いて、ようではないかの使い方がよく分かった。",kana:"えきまえのみせでてんいんさんがはなしているのをきいて、ようではないかのつかいかたがよくわかった。",romaji:"Ekimae no mise de ten'in sanga hanashi teirunowo kii te, youdehanaikano tsukaikata gayoku waka tta.",meaning:"Saat mendengar staf toko di depan stasiun berbicara, saya jadi lebih paham cara pakai pola ini."},
      {jp:"授業だけでなく、日常の場面でもようではないかは意外とよく出てくる。",kana:"じゅぎょうだけでなく、にちじょうのばめんでもようではないかはいがいとよくでてくる。",romaji:"Jugyou dakedenaku, nichijou no bamen demoyoudehanaikaha igai toyoku dete kuru.",meaning:"Bukan hanya di kelas, pola ini ternyata cukup sering muncul dalam keseharian."}
    ]}
  ]},

  // ── GR-N2-106: 〜次第で ──
  {id:"GR-N2-106",level:"N2",title:"〜次第で",summary:"Pola 〜次第で untuk level N2, dengan contoh penggunaan dalam konteks sekolah, kantor, layanan publik, dan kehidupan sehari-hari di Jepang.",groups:[
    {name:"〜次第で",description:"Contoh penggunaan 〜次第で dalam konteks alami sehari-hari di Jepang.",sentences:[
      {jp:"この前の説明会では、次第でという表現も実際の場面で使われていた。",kana:"このまえのせつめいかいでは、しだいでというひょうげんもじっさいのばめんでつかわれていた。",romaji:"Kono mae no setsumeikai deha, shidai detoiu hyougen mo jissai no bamen de tsukawa reteita.",meaning:"Pada sesi penjelasan sebelumnya, ungkapan ini juga dipakai dalam situasi nyata."},
      {jp:"区役所や学校でも、次第でのような言い方を見かけることがある。",kana:"くやくしょやがっこうでも、しだいでのようないいかたをみかけることがある。",romaji:"Kuyakusho ya gakkou demo, shidai denoyouna iikata wo mikake rukotogaaru.",meaning:"Di balai kota maupun sekolah, kadang terlihat cara ungkap seperti ini."},
      {jp:"職場の会話では、次第でを使うと少し自然な言い方になる。",kana:"しょくばのかいわでは、しだいでをつかうとすこししぜんないいかたになる。",romaji:"Shokuba no kaiwa deha, shidai dewo tsukau to sukoshi shizen na iikata ninaru.",meaning:"Dalam percakapan kerja, memakai pola ini bisa membuat ungkapan terdengar lebih alami."},
      {jp:"駅前の店で店員さんが話しているのを聞いて、次第での使い方がよく分かった。",kana:"えきまえのみせでてんいんさんがはなしているのをきいて、しだいでのつかいかたがよくわかった。",romaji:"Ekimae no mise de ten'in sanga hanashi teirunowo kii te, shidai deno tsukaikata gayoku waka tta.",meaning:"Saat mendengar staf toko di depan stasiun berbicara, saya jadi lebih paham cara pakai pola ini."},
      {jp:"授業だけでなく、日常の場面でも次第では意外とよく出てくる。",kana:"じゅぎょうだけでなく、にちじょうのばめんでもしだいではいがいとよくでてくる。",romaji:"Jugyou dakedenaku, nichijou no bamen demo shidai deha igai toyoku dete kuru.",meaning:"Bukan hanya di kelas, pola ini ternyata cukup sering muncul dalam keseharian."}
    ]}
  ]},

  // ── GR-N2-107: 〜までして / 〜てまで ──
  {id:"GR-N2-107",level:"N2",title:"〜までして / 〜てまで",summary:"Pola 〜までして / 〜てまで untuk level N2, dengan contoh penggunaan dalam konteks sekolah, kantor, layanan publik, dan kehidupan sehari-hari di Jepang.",groups:[
    {name:"〜までして / 〜てまで",description:"Contoh penggunaan 〜までして / 〜てまで dalam konteks alami sehari-hari di Jepang.",sentences:[
      {jp:"靴のまま入れる教室もあれば、履き替える教室もある。",kana:"くつのままいれるきょうしつもあれば、はきかえるきょうしつもある。",romaji:"Kutsu nomama ire ru kyoushitsu moareba, haki kae ru kyoushitsu moaru.",meaning:"Ada ruang kelas yang boleh dimasuki dengan sepatu, ada juga yang harus ganti alas kaki."},
      {jp:"資料は印刷したまま机の上に置いておいた。",kana:"しりょうはいんさつしたままつくえのうえにおいておいた。",romaji:"Shiryou ha insatsu shitamama tsukue no ueni oi teoita.",meaning:"Saya membiarkan materi cetak itu tetap berada di atas meja."},
      {jp:"昔の商店街がそのまま残っている通りもまだある。",kana:"むかしのしょうてんがいがそのままのこっているとうりもまだある。",romaji:"Mukashi no shoutengai gasonomama nokotsu teiru touri momadaaru.",meaning:"Masih ada jalan yang mempertahankan area pertokoan lama apa adanya."},
      {jp:"窓を開けたままだと、夜は少し冷える。",kana:"まどをひらけたままだと、よるはすこしひえる。",romaji:"Mado wo hirake tamamadato, yoru ha sukoshi hie ru.",meaning:"Kalau jendelanya dibiarkan terbuka, malam hari akan terasa agak dingin."},
      {jp:"分からないまま進めるより、一度確認した方がいい。",kana:"わからないまますすめるより、いちどかくにんしたほうがいい。",romaji:"Waka ranaimama susume ruyori, ichido kakuninshi ta houga ii.",meaning:"Daripada terus lanjut tanpa paham, lebih baik periksa sekali lagi."}
    ]}
  ]},

  // ── GR-N2-108: 〜てでも ──
  {id:"GR-N2-108",level:"N2",title:"〜てでも",summary:"Pola 〜てでも untuk level N2, dengan contoh penggunaan dalam konteks sekolah, kantor, layanan publik, dan kehidupan sehari-hari di Jepang.",groups:[
    {name:"〜てでも",description:"Contoh penggunaan 〜てでも dalam konteks alami sehari-hari di Jepang.",sentences:[
      {jp:"必要事項を確認しててでも、そのあとで申込書を出した。",kana:"ひつようじこうをかくにんしててでも、そのあとでもうしこみしょをだした。",romaji:"Hitsuyoujikou wo kakuninshi tetedemo, sonoatode moushikomisho wo dashi ta.",meaning:"Setelah memeriksa poin yang diperlukan, saya lalu menyerahkan formulir pendaftaran."},
      {jp:"先に先生へ連絡しててでも, 予定を決めた。",kana:"さきにせんせいへれんらくしててでも, よていをきめた。",romaji:"Sakini sensei he renraku shitetedemo,   yotei wo kime ta.",meaning:"Saya lebih dulu menghubungi sensei, lalu menentukan jadwal."},
      {jp:"荷物をまとめててでも, すぐ出発できるようにした。",kana:"にもつをまとめててでも, すぐしゅっぱつできるようにした。",romaji:"Nimotsu womatometetedemo,   sugu shuppatsu dekiruyounishita.",meaning:"Saya merapikan barang lebih dulu agar bisa segera berangkat."},
      {jp:"窓口で相談しててでも, 手続きを進めた。",kana:"まどぐちでそうだんしててでも, てつづきをすすめた。",romaji:"Madoguchi de soudan shitetedemo,   tetsuzuki wo susume ta.",meaning:"Saya berkonsultasi di loket dulu lalu melanjutkan prosedurnya."},
      {jp:"一度落ち着いててでも, 返事をすることにした。",kana:"いちどおちついててでも, へんじをすることにした。",romaji:"Ichido ochitsui tetedemo,   henji wosurukotonishita.",meaning:"Saya memutuskan untuk menenangkan diri dulu baru memberi jawaban."}
    ]}
  ]},

  // ── GR-N2-109: 〜てこそ ──
  {id:"GR-N2-109",level:"N2",title:"〜てこそ",summary:"Pola 〜てこそ untuk level N2, dengan contoh penggunaan dalam konteks sekolah, kantor, layanan publik, dan kehidupan sehari-hari di Jepang.",groups:[
    {name:"〜てこそ",description:"Contoh penggunaan 〜てこそ dalam konteks alami sehari-hari di Jepang.",sentences:[
      {jp:"必要事項を確認しててこそ、そのあとで申込書を出した。",kana:"ひつようじこうをかくにんしててこそ、そのあとでもうしこみしょをだした。",romaji:"Hitsuyoujikou wo kakuninshi tetekoso, sonoatode moushikomisho wo dashi ta.",meaning:"Setelah memeriksa poin yang diperlukan, saya lalu menyerahkan formulir pendaftaran."},
      {jp:"先に先生へ連絡しててこそ, 予定を決めた。",kana:"さきにせんせいへれんらくしててこそ, よていをきめた。",romaji:"Sakini sensei he renraku shitetekoso,   yotei wo kime ta.",meaning:"Saya lebih dulu menghubungi sensei, lalu menentukan jadwal."},
      {jp:"荷物をまとめててこそ, すぐ出発できるようにした。",kana:"にもつをまとめててこそ, すぐしゅっぱつできるようにした。",romaji:"Nimotsu womatometetekoso,   sugu shuppatsu dekiruyounishita.",meaning:"Saya merapikan barang lebih dulu agar bisa segera berangkat."},
      {jp:"窓口で相談しててこそ, 手続きを進めた。",kana:"まどぐちでそうだんしててこそ, てつづきをすすめた。",romaji:"Madoguchi de soudan shitetekoso,   tetsuzuki wo susume ta.",meaning:"Saya berkonsultasi di loket dulu lalu melanjutkan prosedurnya."},
      {jp:"一度落ち着いててこそ, 返事をすることにした。",kana:"いちどおちついててこそ, へんじをすることにした。",romaji:"Ichido ochitsui tetekoso,   henji wosurukotonishita.",meaning:"Saya memutuskan untuk menenangkan diri dulu baru memberi jawaban."}
    ]}
  ]},

  // ── GR-N2-110: 〜として〜ない ──
  {id:"GR-N2-110",level:"N2",title:"〜として〜ない",summary:"Pola 〜として〜ない untuk level N2, dengan contoh penggunaan dalam konteks sekolah, kantor, layanan publik, dan kehidupan sehari-hari di Jepang.",groups:[
    {name:"〜として〜ない",description:"Contoh penggunaan 〜として〜ない dalam konteks alami sehari-hari di Jepang.",sentences:[
      {jp:"駅に着くと、ちょうど案内放送が始まった。",kana:"えきにつくと、ちょうどあんないほうそうがはじまった。",romaji:"Eki ni tsuku to, choudo annaihousou ga hajima tta.",meaning:"Begitu sampai di stasiun, pengumuman baru saja dimulai."},
      {jp:"春になると、この川沿いは散歩する人でにぎわう。",kana:"はるになると、このかわぞいはさんぽするにんでにぎわう。",romaji:"Haru ninaruto, kono kawazoi ha sanpo suru nin denigiwau.",meaning:"Begitu musim semi tiba, area tepi sungai ini ramai oleh orang yang berjalan-jalan."},
      {jp:"資料を読むと、今回の変更点がよく分かる。",kana:"しりょうをよむと、こんかいのへんこうてんがよくわかる。",romaji:"Shiryou wo yomu to, konkai no henkouten gayoku waka ru.",meaning:"Kalau membaca materinya, perubahan kali ini jadi mudah dipahami."},
      {jp:"彼の話し方を見ると、かなり緊張しているようだ。",kana:"かのはなしかたをみると、かなりきんちょうしているようだ。",romaji:"Kano hanashikata wo miru to, kanari kinchoushi teiruyouda.",meaning:"Melihat cara dia berbicara, tampaknya dia cukup tegang."},
      {jp:"この条件だと、申し込みは早い方がよさそうだ。",kana:"このじょうけんだと、もうしこみははやいほうがよさそうだ。",romaji:"Kono jouken dato, moushikomi ha hayai houga yosasouda.",meaning:"Kalau syaratnya seperti ini, tampaknya lebih baik mendaftar lebih cepat."}
    ]}
  ]},

  // ── GR-N2-111: 〜からすると / 〜からすれば / 〜からいうと / 〜からいえば / 〜からいって ──
  {id:"GR-N2-111",level:"N2",title:"〜からすると / 〜からすれば / 〜からいうと / 〜からいえば / 〜からいって",summary:"Pola 〜からすると / 〜からすれば / 〜からいうと / 〜からいえば / 〜からいって untuk level N2, dengan contoh penggunaan dalam konteks sekolah, kantor, layanan publik, dan kehidupan sehari-hari di Jepang.",groups:[
    {name:"〜からすると / 〜からすれば / 〜からいうと / 〜からいえば / 〜からいって",description:"Contoh penggunaan 〜からすると / 〜からすれば / 〜からいうと / 〜からいえば / 〜からいって dalam konteks alami sehari-hari di Jepang.",sentences:[
      {jp:"時間があれば、区役所のあとで銀行にも寄りたい。",kana:"じかんがあれば、くやくしょのあとでぎんこうにもよりたい。",romaji:"Jikan gaareba, kuyakusho noatode ginkou nimo yori tai.",meaning:"Kalau ada waktu, setelah ke balai kota saya juga ingin mampir ke bank."},
      {jp:"もう少し安ければ、その部屋に決めたかもしれない。",kana:"もうすこしやすければ、そのへやにきめたかもしれない。",romaji:"Mou sukoshi yasuke reba, sono heya ni kime takamoshirenai.",meaning:"Kalau sedikit lebih murah, mungkin saya akan memilih kamar itu."},
      {jp:"駅から近ければ、多少狭くても我慢できる。",kana:"えきからちかければ、たしょうせまくてもがまんできる。",romaji:"Eki kara chikake reba, tashou semaku temo gaman dekiru.",meaning:"Kalau dekat dari stasiun, walau agak sempit saya masih bisa menerima."},
      {jp:"店長に聞けば、細かいルールもすぐ分かる。",kana:"てんちょうにきけば、こまかいるーるもすぐわかる。",romaji:"Tenchou ni kike ba, komakai ruuru mosugu waka ru.",meaning:"Kalau bertanya ke manajer toko, aturan detailnya juga cepat dipahami."},
      {jp:"早く寝れば、明日の朝も楽になる。",kana:"はやくねれば、あしたのあさもらくになる。",romaji:"Hayaku nere ba, ashita no asa mo raku ninaru.",meaning:"Kalau tidur lebih awal, besok pagi juga akan terasa lebih ringan."}
    ]}
  ]},

  // ── GR-N2-112: 〜を〜として / 〜を〜とする ──
  {id:"GR-N2-112",level:"N2",title:"〜を〜として / 〜を〜とする",summary:"Pola 〜を〜として / 〜を〜とする untuk level N2, dengan contoh penggunaan dalam konteks sekolah, kantor, layanan publik, dan kehidupan sehari-hari di Jepang.",groups:[
    {name:"〜を〜として / 〜を〜とする",description:"Contoh penggunaan 〜を〜として / 〜を〜とする dalam konteks alami sehari-hari di Jepang.",sentences:[
      {jp:"地域のイベントをとして、近所の人と少しずつ顔見知りになった。",kana:"ちいきのいべんとをとして、きんじょのにんとすこしずつかおみしりになった。",romaji:"Chiiki no ibento wotoshite, kinjo no nin to sukoshi zutsu kaomishiri ninatta.",meaning:"Melalui acara lingkungan, saya perlahan mulai mengenal orang-orang sekitar."},
      {jp:"先輩との会話をとして、就職活動の流れが具体的に見えてきた。",kana:"せんぱいとのかいわをとして、しゅうしょくかつどうのながれがぐたいてきにみえてきた。",romaji:"Senpai tono kaiwa wotoshite, shuushokukatsudou no nagare ga gutaiteki ni mie tekita.",meaning:"Melalui percakapan dengan senior, alur mencari kerja jadi terasa lebih jelas."},
      {jp:"実習をとして、教室では分からなかった課題にも気づいた。",kana:"じっしゅうをとして、きょうしつではわからなかったかだいにもきづいた。",romaji:"Jisshuu wotoshite, kyoushitsu deha waka ranakatta kadai nimo kizu ita.",meaning:"Melalui praktik lapangan, saya menyadari tantangan yang tidak terlihat di kelas."},
      {jp:"この資料をとして、学校側の考え方を理解してほしい。",kana:"このしりょうをとして、がっこうがわのかんがえかたをりかいしてほしい。",romaji:"Kono shiryou wotoshite, gakkougawa no kangaekata wo rikai shitehoshii.",meaning:"Melalui materi ini, saya ingin Anda memahami cara pandang pihak sekolah."},
      {jp:"商店街の取り組みをとして、地域全体の雰囲気も変わってきた。",kana:"しょうてんがいのとりくみをとして、ちいきぜんたいのふんいきもかわってきた。",romaji:"Shoutengai no torikumi wotoshite, chiiki zentai no fun'iki mo kawa ttekita.",meaning:"Melalui upaya area pertokoan, suasana seluruh lingkungan juga mulai berubah."}
    ]}
  ]},

  // ── GR-N2-113: 〜にしてみたら / 〜にしてみれば ──
  {id:"GR-N2-113",level:"N2",title:"〜にしてみたら / 〜にしてみれば",summary:"Pola 〜にしてみたら / 〜にしてみれば untuk level N2, dengan contoh penggunaan dalam konteks sekolah, kantor, layanan publik, dan kehidupan sehari-hari di Jepang.",groups:[
    {name:"〜にしてみたら / 〜にしてみれば",description:"Contoh penggunaan 〜にしてみたら / 〜にしてみれば dalam konteks alami sehari-hari di Jepang.",sentences:[
      {jp:"留学生にしてみたら説明会が、大学のホールで開かれた。",kana:"りゅうがくせいにしてみたらせつめいかいが、だいがくのほーるでひらかれた。",romaji:"Ryuugakusei nishitemitara setsumeikai ga, daigaku no hooru de hiraka reta.",meaning:"Sesi penjelasan untuk mahasiswa asing diadakan di aula universitas."},
      {jp:"駅前の再開発にしてみたら住民向けの案内が配られた。",kana:"えきまえのさいかいはつにしてみたらじゅうみんむけのあんないがくばられた。",romaji:"Ekimae no saikaihatsu nishitemitara juumin muke no annai ga kubara reta.",meaning:"Pemberitahuan bagi warga terkait pembangunan ulang area depan stasiun dibagikan."},
      {jp:"この制度にしてみたら質問があれば、区役所の窓口で確認できる。",kana:"このせいどにしてみたらしつもんがあれば、くやくしょのまどぐちでかくにんできる。",romaji:"Kono seido nishitemitara shitsumon gaareba, kuyakusho no madoguchi de kakunin dekiru.",meaning:"Kalau ada pertanyaan terkait sistem ini, bisa ditanyakan di loket balai kota."},
      {jp:"外国人スタッフにしてみたら研修も、来月から始まる予定だ。",kana:"がいこくじんすたっふにしてみたらけんしゅうも、らいげつからはじまるよていだ。",romaji:"Gaikokujin sutaffu nishitemitara kenshuu mo, raigetsu kara hajima ru yotei da.",meaning:"Pelatihan untuk staf asing juga dijadwalkan mulai bulan depan."},
      {jp:"今回の変更点にしてみたら詳しい資料は、受付で受け取れる。",kana:"こんかいのへんこうてんにしてみたらくわしいしりょうは、うけつけでうけとれる。",romaji:"Konkai no henkouten nishitemitara kuwashii shiryou ha, uketsuke de uketore ru.",meaning:"Materi rinci terkait perubahan kali ini bisa diambil di meja penerima tamu."}
    ]}
  ]},

  // ── GR-N2-114: 〜にあたって / 〜にあたり ──
  {id:"GR-N2-114",level:"N2",title:"〜にあたって / 〜にあたり",summary:"Pola 〜にあたって / 〜にあたり untuk level N2, dengan contoh penggunaan dalam konteks sekolah, kantor, layanan publik, dan kehidupan sehari-hari di Jepang.",groups:[
    {name:"〜にあたって / 〜にあたり",description:"Contoh penggunaan 〜にあたって / 〜にあたり dalam konteks alami sehari-hari di Jepang.",sentences:[
      {jp:"留学生にあたって説明会が、大学のホールで開かれた。",kana:"りゅうがくせいにあたってせつめいかいが、だいがくのほーるでひらかれた。",romaji:"Ryuugakusei niatatte setsumeikai ga, daigaku no hooru de hiraka reta.",meaning:"Sesi penjelasan untuk mahasiswa asing diadakan di aula universitas."},
      {jp:"駅前の再開発にあたって住民向けの案内が配られた。",kana:"えきまえのさいかいはつにあたってじゅうみんむけのあんないがくばられた。",romaji:"Ekimae no saikaihatsu niatatte juumin muke no annai ga kubara reta.",meaning:"Pemberitahuan bagi warga terkait pembangunan ulang area depan stasiun dibagikan."},
      {jp:"この制度にあたって質問があれば、区役所の窓口で確認できる。",kana:"このせいどにあたってしつもんがあれば、くやくしょのまどぐちでかくにんできる。",romaji:"Kono seido niatatte shitsumon gaareba, kuyakusho no madoguchi de kakunin dekiru.",meaning:"Kalau ada pertanyaan terkait sistem ini, bisa ditanyakan di loket balai kota."},
      {jp:"外国人スタッフにあたって研修も、来月から始まる予定だ。",kana:"がいこくじんすたっふにあたってけんしゅうも、らいげつからはじまるよていだ。",romaji:"Gaikokujin sutaffu niatatte kenshuu mo, raigetsu kara hajima ru yotei da.",meaning:"Pelatihan untuk staf asing juga dijadwalkan mulai bulan depan."},
      {jp:"今回の変更点にあたって詳しい資料は、受付で受け取れる。",kana:"こんかいのへんこうてんにあたってくわしいしりょうは、うけつけでうけとれる。",romaji:"Konkai no henkouten niatatte kuwashii shiryou ha, uketsuke de uketore ru.",meaning:"Materi rinci terkait perubahan kali ini bisa diambil di meja penerima tamu."}
    ]}
  ]},

  // ── GR-N2-115: 〜際に(は) ──
  {id:"GR-N2-115",level:"N2",title:"〜際に(は)",summary:"Pola 〜際に(は) untuk level N2, dengan contoh penggunaan dalam konteks sekolah, kantor, layanan publik, dan kehidupan sehari-hari di Jepang.",groups:[
    {name:"〜際に(は)",description:"Contoh penggunaan 〜際に(は) dalam konteks alami sehari-hari di Jepang.",sentences:[
      {jp:"この前の説明会では、際にという表現も実際の場面で使われていた。",kana:"このまえのせつめいかいでは、さいにというひょうげんもじっさいのばめんでつかわれていた。",romaji:"Kono mae no setsumeikai deha, saini toiu hyougen mo jissai no bamen de tsukawa reteita.",meaning:"Pada sesi penjelasan sebelumnya, ungkapan ini juga dipakai dalam situasi nyata."},
      {jp:"区役所や学校でも、際にのような言い方を見かけることがある。",kana:"くやくしょやがっこうでも、さいにのようないいかたをみかけることがある。",romaji:"Kuyakusho ya gakkou demo, saini noyouna iikata wo mikake rukotogaaru.",meaning:"Di balai kota maupun sekolah, kadang terlihat cara ungkap seperti ini."},
      {jp:"職場の会話では、際にを使うと少し自然な言い方になる。",kana:"しょくばのかいわでは、さいにをつかうとすこししぜんないいかたになる。",romaji:"Shokuba no kaiwa deha, saini wo tsukau to sukoshi shizen na iikata ninaru.",meaning:"Dalam percakapan kerja, memakai pola ini bisa membuat ungkapan terdengar lebih alami."},
      {jp:"駅前の店で店員さんが話しているのを聞いて、際にの使い方がよく分かった。",kana:"えきまえのみせでてんいんさんがはなしているのをきいて、さいにのつかいかたがよくわかった。",romaji:"Ekimae no mise de ten'in sanga hanashi teirunowo kii te, saini no tsukaikata gayoku waka tta.",meaning:"Saat mendengar staf toko di depan stasiun berbicara, saya jadi lebih paham cara pakai pola ini."},
      {jp:"授業だけでなく、日常の場面でも際には意外とよく出てくる。",kana:"じゅぎょうだけでなく、にちじょうのばめんでもさいにはいがいとよくでてくる。",romaji:"Jugyou dakedenaku, nichijou no bamen demo saini ha igai toyoku dete kuru.",meaning:"Bukan hanya di kelas, pola ini ternyata cukup sering muncul dalam keseharian."}
    ]}
  ]},

  // ── GR-N2-116: 〜つつ ──
  {id:"GR-N2-116",level:"N2",title:"〜つつ",summary:"Pola 〜つつ untuk level N2, dengan contoh penggunaan dalam konteks sekolah, kantor, layanan publik, dan kehidupan sehari-hari di Jepang.",groups:[
    {name:"〜つつ",description:"Contoh penggunaan 〜つつ dalam konteks alami sehari-hari di Jepang.",sentences:[
      {jp:"この前の説明会では、つつという表現も実際の場面で使われていた。",kana:"このまえのせつめいかいでは、つつというひょうげんもじっさいのばめんでつかわれていた。",romaji:"Kono mae no setsumeikai deha, tsutsutoiu hyougen mo jissai no bamen de tsukawa reteita.",meaning:"Pada sesi penjelasan sebelumnya, ungkapan ini juga dipakai dalam situasi nyata."},
      {jp:"区役所や学校でも、つつのような言い方を見かけることがある。",kana:"くやくしょやがっこうでも、つつのようないいかたをみかけることがある。",romaji:"Kuyakusho ya gakkou demo, tsutsunoyouna iikata wo mikake rukotogaaru.",meaning:"Di balai kota maupun sekolah, kadang terlihat cara ungkap seperti ini."},
      {jp:"職場の会話では、つつを使うと少し自然な言い方になる。",kana:"しょくばのかいわでは、つつをつかうとすこししぜんないいかたになる。",romaji:"Shokuba no kaiwa deha, tsutsuwo tsukau to sukoshi shizen na iikata ninaru.",meaning:"Dalam percakapan kerja, memakai pola ini bisa membuat ungkapan terdengar lebih alami."},
      {jp:"駅前の店で店員さんが話しているのを聞いて、つつの使い方がよく分かった。",kana:"えきまえのみせでてんいんさんがはなしているのをきいて、つつのつかいかたがよくわかった。",romaji:"Ekimae no mise de ten'in sanga hanashi teirunowo kii te, tsutsuno tsukaikata gayoku waka tta.",meaning:"Saat mendengar staf toko di depan stasiun berbicara, saya jadi lebih paham cara pakai pola ini."},
      {jp:"授業だけでなく、日常の場面でもつつは意外とよく出てくる。",kana:"じゅぎょうだけでなく、にちじょうのばめんでもつつはいがいとよくでてくる。",romaji:"Jugyou dakedenaku, nichijou no bamen demotsutsuha igai toyoku dete kuru.",meaning:"Bukan hanya di kelas, pola ini ternyata cukup sering muncul dalam keseharian."}
    ]}
  ]},

  // ── GR-N2-117: 〜折に(は) ──
  {id:"GR-N2-117",level:"N2",title:"〜折に(は)",summary:"Pola 〜折に(は) untuk level N2, dengan contoh penggunaan dalam konteks sekolah, kantor, layanan publik, dan kehidupan sehari-hari di Jepang.",groups:[
    {name:"〜折に(は)",description:"Contoh penggunaan 〜折に(は) dalam konteks alami sehari-hari di Jepang.",sentences:[
      {jp:"この前の説明会では、折にという表現も実際の場面で使われていた。",kana:"このまえのせつめいかいでは、おりにというひょうげんもじっさいのばめんでつかわれていた。",romaji:"Kono mae no setsumeikai deha, ori nitoiu hyougen mo jissai no bamen de tsukawa reteita.",meaning:"Pada sesi penjelasan sebelumnya, ungkapan ini juga dipakai dalam situasi nyata."},
      {jp:"区役所や学校でも、折にのような言い方を見かけることがある。",kana:"くやくしょやがっこうでも、おりにのようないいかたをみかけることがある。",romaji:"Kuyakusho ya gakkou demo, ori ninoyouna iikata wo mikake rukotogaaru.",meaning:"Di balai kota maupun sekolah, kadang terlihat cara ungkap seperti ini."},
      {jp:"職場の会話では、折にを使うと少し自然な言い方になる。",kana:"しょくばのかいわでは、おりにをつかうとすこししぜんないいかたになる。",romaji:"Shokuba no kaiwa deha, ori niwo tsukau to sukoshi shizen na iikata ninaru.",meaning:"Dalam percakapan kerja, memakai pola ini bisa membuat ungkapan terdengar lebih alami."},
      {jp:"駅前の店で店員さんが話しているのを聞いて、折にの使い方がよく分かった。",kana:"えきまえのみせでてんいんさんがはなしているのをきいて、おりにのつかいかたがよくわかった。",romaji:"Ekimae no mise de ten'in sanga hanashi teirunowo kii te, ori nino tsukaikata gayoku waka tta.",meaning:"Saat mendengar staf toko di depan stasiun berbicara, saya jadi lebih paham cara pakai pola ini."},
      {jp:"授業だけでなく、日常の場面でも折には意外とよく出てくる。",kana:"じゅぎょうだけでなく、にちじょうのばめんでもおりにはいがいとよくでてくる。",romaji:"Jugyou dakedenaku, nichijou no bamen demo ori niha igai toyoku dete kuru.",meaning:"Bukan hanya di kelas, pola ini ternyata cukup sering muncul dalam keseharian."}
    ]}
  ]},

  // ── GR-N2-118: 〜に際して ──
  {id:"GR-N2-118",level:"N2",title:"〜に際して",summary:"Pola 〜に際して untuk level N2, dengan contoh penggunaan dalam konteks sekolah, kantor, layanan publik, dan kehidupan sehari-hari di Jepang.",groups:[
    {name:"〜に際して",description:"Contoh penggunaan 〜に際して dalam konteks alami sehari-hari di Jepang.",sentences:[
      {jp:"留学生に際して説明会が、大学のホールで開かれた。",kana:"りゅうがくせいにさいしてせつめいかいが、だいがくのほーるでひらかれた。",romaji:"Ryuugakusei ni saishi te setsumeikai ga, daigaku no hooru de hiraka reta.",meaning:"Sesi penjelasan untuk mahasiswa asing diadakan di aula universitas."},
      {jp:"駅前の再開発に際して住民向けの案内が配られた。",kana:"えきまえのさいかいはつにさいしてじゅうみんむけのあんないがくばられた。",romaji:"Ekimae no saikaihatsu ni saishi te juumin muke no annai ga kubara reta.",meaning:"Pemberitahuan bagi warga terkait pembangunan ulang area depan stasiun dibagikan."},
      {jp:"この制度に際して質問があれば、区役所の窓口で確認できる。",kana:"このせいどにさいしてしつもんがあれば、くやくしょのまどぐちでかくにんできる。",romaji:"Kono seido ni saishi te shitsumon gaareba, kuyakusho no madoguchi de kakunin dekiru.",meaning:"Kalau ada pertanyaan terkait sistem ini, bisa ditanyakan di loket balai kota."},
      {jp:"外国人スタッフに際して研修も、来月から始まる予定だ。",kana:"がいこくじんすたっふにさいしてけんしゅうも、らいげつからはじまるよていだ。",romaji:"Gaikokujin sutaffu ni saishi te kenshuu mo, raigetsu kara hajima ru yotei da.",meaning:"Pelatihan untuk staf asing juga dijadwalkan mulai bulan depan."},
      {jp:"今回の変更点に際して詳しい資料は、受付で受け取れる。",kana:"こんかいのへんこうてんにさいしてくわしいしりょうは、うけつけでうけとれる。",romaji:"Konkai no henkouten ni saishi te kuwashii shiryou ha, uketsuke de uketore ru.",meaning:"Materi rinci terkait perubahan kali ini bisa diambil di meja penerima tamu."}
    ]}
  ]},

  // ── GR-N2-119: 〜か〜ないかのうちに ──
  {id:"GR-N2-119",level:"N2",title:"〜か〜ないかのうちに",summary:"Pola 〜か〜ないかのうちに untuk level N2, dengan contoh penggunaan dalam konteks sekolah, kantor, layanan publik, dan kehidupan sehari-hari di Jepang.",groups:[
    {name:"〜か〜ないかのうちに",description:"Contoh penggunaan 〜か〜ないかのうちに dalam konteks alami sehari-hari di Jepang.",sentences:[
      {jp:"この前の説明会では、かないかのうちにという表現も実際の場面で使われていた。",kana:"このまえのせつめいかいでは、かないかのうちにというひょうげんもじっさいのばめんでつかわれていた。",romaji:"Kono mae no setsumeikai deha, kanaikanouchinitoiu hyougen mo jissai no bamen de tsukawa reteita.",meaning:"Pada sesi penjelasan sebelumnya, ungkapan ini juga dipakai dalam situasi nyata."},
      {jp:"区役所や学校でも、かないかのうちにのような言い方を見かけることがある。",kana:"くやくしょやがっこうでも、かないかのうちにのようないいかたをみかけることがある。",romaji:"Kuyakusho ya gakkou demo, kanaikanouchininoyouna iikata wo mikake rukotogaaru.",meaning:"Di balai kota maupun sekolah, kadang terlihat cara ungkap seperti ini."},
      {jp:"職場の会話では、かないかのうちにを使うと少し自然な言い方になる。",kana:"しょくばのかいわでは、かないかのうちにをつかうとすこししぜんないいかたになる。",romaji:"Shokuba no kaiwa deha, kanaikanouchiniwo tsukau to sukoshi shizen na iikata ninaru.",meaning:"Dalam percakapan kerja, memakai pola ini bisa membuat ungkapan terdengar lebih alami."},
      {jp:"駅前の店で店員さんが話しているのを聞いて、かないかのうちにの使い方がよく分かった。",kana:"えきまえのみせでてんいんさんがはなしているのをきいて、かないかのうちにのつかいかたがよくわかった。",romaji:"Ekimae no mise de ten'in sanga hanashi teirunowo kii te, kanaikanouchinino tsukaikata gayoku waka tta.",meaning:"Saat mendengar staf toko di depan stasiun berbicara, saya jadi lebih paham cara pakai pola ini."},
      {jp:"授業だけでなく、日常の場面でもかないかのうちには意外とよく出てくる。",kana:"じゅぎょうだけでなく、にちじょうのばめんでもかないかのうちにはいがいとよくでてくる。",romaji:"Jugyou dakedenaku, nichijou no bamen demokanaikanouchiniha igai toyoku dete kuru.",meaning:"Bukan hanya di kelas, pola ini ternyata cukup sering muncul dalam keseharian."}
    ]}
  ]},

  // ── GR-N2-120: 〜かと思うと / 〜かと思ったら ──
  {id:"GR-N2-120",level:"N2",title:"〜かと思うと / 〜かと思ったら",summary:"Pola 〜かと思うと / 〜かと思ったら untuk level N2, dengan contoh penggunaan dalam konteks sekolah, kantor, layanan publik, dan kehidupan sehari-hari di Jepang.",groups:[
    {name:"〜かと思うと / 〜かと思ったら",description:"Contoh penggunaan 〜かと思うと / 〜かと思ったら dalam konteks alami sehari-hari di Jepang.",sentences:[
      {jp:"この前の説明会では、かと思うとという表現も実際の場面で使われていた。",kana:"このまえのせつめいかいでは、かとおもうとというひょうげんもじっさいのばめんでつかわれていた。",romaji:"Kono mae no setsumeikai deha, kato omou totoiu hyougen mo jissai no bamen de tsukawa reteita.",meaning:"Pada sesi penjelasan sebelumnya, ungkapan ini juga dipakai dalam situasi nyata."},
      {jp:"区役所や学校でも、かと思うとのような言い方を見かけることがある。",kana:"くやくしょやがっこうでも、かとおもうとのようないいかたをみかけることがある。",romaji:"Kuyakusho ya gakkou demo, kato omou tonoyouna iikata wo mikake rukotogaaru.",meaning:"Di balai kota maupun sekolah, kadang terlihat cara ungkap seperti ini."},
      {jp:"職場の会話では、かと思うとを使うと少し自然な言い方になる。",kana:"しょくばのかいわでは、かとおもうとをつかうとすこししぜんないいかたになる。",romaji:"Shokuba no kaiwa deha, kato omou towo tsukau to sukoshi shizen na iikata ninaru.",meaning:"Dalam percakapan kerja, memakai pola ini bisa membuat ungkapan terdengar lebih alami."},
      {jp:"駅前の店で店員さんが話しているのを聞いて、かと思うとの使い方がよく分かった。",kana:"えきまえのみせでてんいんさんがはなしているのをきいて、かとおもうとのつかいかたがよくわかった。",romaji:"Ekimae no mise de ten'in sanga hanashi teirunowo kii te, kato omou tono tsukaikata gayoku waka tta.",meaning:"Saat mendengar staf toko di depan stasiun berbicara, saya jadi lebih paham cara pakai pola ini."},
      {jp:"授業だけでなく、日常の場面でもかと思うとは意外とよく出てくる。",kana:"じゅぎょうだけでなく、にちじょうのばめんでもかとおもうとはいがいとよくでてくる。",romaji:"Jugyou dakedenaku, nichijou no bamen demokato omou toha igai toyoku dete kuru.",meaning:"Bukan hanya di kelas, pola ini ternyata cukup sering muncul dalam keseharian."}
    ]}
  ]},

  // ── GR-N2-121: 〜次第 ──
  {id:"GR-N2-121",level:"N2",title:"〜次第",summary:"Pola 〜次第 untuk level N2, dengan contoh penggunaan dalam konteks sekolah, kantor, layanan publik, dan kehidupan sehari-hari di Jepang.",groups:[
    {name:"〜次第",description:"Contoh penggunaan 〜次第 dalam konteks alami sehari-hari di Jepang.",sentences:[
      {jp:"この前の説明会では、次第という表現も実際の場面で使われていた。",kana:"このまえのせつめいかいでは、しだいというひょうげんもじっさいのばめんでつかわれていた。",romaji:"Kono mae no setsumeikai deha, shidai toiu hyougen mo jissai no bamen de tsukawa reteita.",meaning:"Pada sesi penjelasan sebelumnya, ungkapan ini juga dipakai dalam situasi nyata."},
      {jp:"区役所や学校でも、次第のような言い方を見かけることがある。",kana:"くやくしょやがっこうでも、しだいのようないいかたをみかけることがある。",romaji:"Kuyakusho ya gakkou demo, shidai noyouna iikata wo mikake rukotogaaru.",meaning:"Di balai kota maupun sekolah, kadang terlihat cara ungkap seperti ini."},
      {jp:"職場の会話では、次第を使うと少し自然な言い方になる。",kana:"しょくばのかいわでは、しだいをつかうとすこししぜんないいかたになる。",romaji:"Shokuba no kaiwa deha, shidai wo tsukau to sukoshi shizen na iikata ninaru.",meaning:"Dalam percakapan kerja, memakai pola ini bisa membuat ungkapan terdengar lebih alami."},
      {jp:"駅前の店で店員さんが話しているのを聞いて、次第の使い方がよく分かった。",kana:"えきまえのみせでてんいんさんがはなしているのをきいて、しだいのつかいかたがよくわかった。",romaji:"Ekimae no mise de ten'in sanga hanashi teirunowo kii te, shidai no tsukaikata gayoku waka tta.",meaning:"Saat mendengar staf toko di depan stasiun berbicara, saya jadi lebih paham cara pakai pola ini."},
      {jp:"授業だけでなく、日常の場面でも次第は意外とよく出てくる。",kana:"じゅぎょうだけでなく、にちじょうのばめんでもしだいはいがいとよくでてくる。",romaji:"Jugyou dakedenaku, nichijou no bamen demo shidai ha igai toyoku dete kuru.",meaning:"Bukan hanya di kelas, pola ini ternyata cukup sering muncul dalam keseharian."}
    ]}
  ]},

  // ── GR-N2-122: 〜て以来 / 〜てこのかた ──
  {id:"GR-N2-122",level:"N2",title:"〜て以来 / 〜てこのかた",summary:"Pola 〜て以来 / 〜てこのかた untuk level N2, dengan contoh penggunaan dalam konteks sekolah, kantor, layanan publik, dan kehidupan sehari-hari di Jepang.",groups:[
    {name:"〜て以来 / 〜てこのかた",description:"Contoh penggunaan 〜て以来 / 〜てこのかた dalam konteks alami sehari-hari di Jepang.",sentences:[
      {jp:"必要事項を確認してて以来、そのあとで申込書を出した。",kana:"ひつようじこうをかくにんしてていらい、そのあとでもうしこみしょをだした。",romaji:"Hitsuyoujikou wo kakuninshi tete irai, sonoatode moushikomisho wo dashi ta.",meaning:"Setelah memeriksa poin yang diperlukan, saya lalu menyerahkan formulir pendaftaran."},
      {jp:"先に先生へ連絡してて以来, 予定を決めた。",kana:"さきにせんせいへれんらくしてていらい, よていをきめた。",romaji:"Sakini sensei he renraku shitete irai,   yotei wo kime ta.",meaning:"Saya lebih dulu menghubungi sensei, lalu menentukan jadwal."},
      {jp:"荷物をまとめてて以来, すぐ出発できるようにした。",kana:"にもつをまとめてていらい, すぐしゅっぱつできるようにした。",romaji:"Nimotsu womatometete irai,   sugu shuppatsu dekiruyounishita.",meaning:"Saya merapikan barang lebih dulu agar bisa segera berangkat."},
      {jp:"窓口で相談してて以来, 手続きを進めた。",kana:"まどぐちでそうだんしてていらい, てつづきをすすめた。",romaji:"Madoguchi de soudan shitete irai,   tetsuzuki wo susume ta.",meaning:"Saya berkonsultasi di loket dulu lalu melanjutkan prosedurnya."},
      {jp:"一度落ち着いてて以来, 返事をすることにした。",kana:"いちどおちついてていらい, へんじをすることにした。",romaji:"Ichido ochitsui tete irai,   henji wosurukotonishita.",meaning:"Saya memutuskan untuk menenangkan diri dulu baru memberi jawaban."}
    ]}
  ]},

  // ── GR-N2-123: 〜に先立ち / 〜に先立って ──
  {id:"GR-N2-123",level:"N2",title:"〜に先立ち / 〜に先立って",summary:"Pola 〜に先立ち / 〜に先立って untuk level N2, dengan contoh penggunaan dalam konteks sekolah, kantor, layanan publik, dan kehidupan sehari-hari di Jepang.",groups:[
    {name:"〜に先立ち / 〜に先立って",description:"Contoh penggunaan 〜に先立ち / 〜に先立って dalam konteks alami sehari-hari di Jepang.",sentences:[
      {jp:"留学生に先立ち説明会が、大学のホールで開かれた。",kana:"りゅうがくせいにさきだちせつめいかいが、だいがくのほーるでひらかれた。",romaji:"Ryuugakusei ni sakidachi setsumeikai ga, daigaku no hooru de hiraka reta.",meaning:"Sesi penjelasan untuk mahasiswa asing diadakan di aula universitas."},
      {jp:"駅前の再開発に先立ち住民向けの案内が配られた。",kana:"えきまえのさいかいはつにさきだちじゅうみんむけのあんないがくばられた。",romaji:"Ekimae no saikaihatsu ni sakidachi juumin muke no annai ga kubara reta.",meaning:"Pemberitahuan bagi warga terkait pembangunan ulang area depan stasiun dibagikan."},
      {jp:"この制度に先立ち質問があれば、区役所の窓口で確認できる。",kana:"このせいどにさきだちしつもんがあれば、くやくしょのまどぐちでかくにんできる。",romaji:"Kono seido ni sakidachi shitsumon gaareba, kuyakusho no madoguchi de kakunin dekiru.",meaning:"Kalau ada pertanyaan terkait sistem ini, bisa ditanyakan di loket balai kota."},
      {jp:"外国人スタッフに先立ち研修も、来月から始まる予定だ。",kana:"がいこくじんすたっふにさきだちけんしゅうも、らいげつからはじまるよていだ。",romaji:"Gaikokujin sutaffu ni sakidachi kenshuu mo, raigetsu kara hajima ru yotei da.",meaning:"Pelatihan untuk staf asing juga dijadwalkan mulai bulan depan."},
      {jp:"今回の変更点に先立ち詳しい資料は、受付で受け取れる。",kana:"こんかいのへんこうてんにさきだちくわしいしりょうは、うけつけでうけとれる。",romaji:"Konkai no henkouten ni sakidachi kuwashii shiryou ha, uketsuke de uketore ru.",meaning:"Materi rinci terkait perubahan kali ini bisa diambil di meja penerima tamu."}
    ]}
  ]},

  // ── GR-N2-124: 〜うえで ──
  {id:"GR-N2-124",level:"N2",title:"〜うえで",summary:"Pola 〜うえで untuk level N2, dengan contoh penggunaan dalam konteks sekolah, kantor, layanan publik, dan kehidupan sehari-hari di Jepang.",groups:[
    {name:"〜うえで",description:"Contoh penggunaan 〜うえで dalam konteks alami sehari-hari di Jepang.",sentences:[
      {jp:"この前の説明会では、うえでという表現も実際の場面で使われていた。",kana:"このまえのせつめいかいでは、うえでというひょうげんもじっさいのばめんでつかわれていた。",romaji:"Kono mae no setsumeikai deha, uedetoiu hyougen mo jissai no bamen de tsukawa reteita.",meaning:"Pada sesi penjelasan sebelumnya, ungkapan ini juga dipakai dalam situasi nyata."},
      {jp:"区役所や学校でも、うえでのような言い方を見かけることがある。",kana:"くやくしょやがっこうでも、うえでのようないいかたをみかけることがある。",romaji:"Kuyakusho ya gakkou demo, uedenoyouna iikata wo mikake rukotogaaru.",meaning:"Di balai kota maupun sekolah, kadang terlihat cara ungkap seperti ini."},
      {jp:"職場の会話では、うえでを使うと少し自然な言い方になる。",kana:"しょくばのかいわでは、うえでをつかうとすこししぜんないいかたになる。",romaji:"Shokuba no kaiwa deha, uedewo tsukau to sukoshi shizen na iikata ninaru.",meaning:"Dalam percakapan kerja, memakai pola ini bisa membuat ungkapan terdengar lebih alami."},
      {jp:"駅前の店で店員さんが話しているのを聞いて、うえでの使い方がよく分かった。",kana:"えきまえのみせでてんいんさんがはなしているのをきいて、うえでのつかいかたがよくわかった。",romaji:"Ekimae no mise de ten'in sanga hanashi teirunowo kii te, uedeno tsukaikata gayoku waka tta.",meaning:"Saat mendengar staf toko di depan stasiun berbicara, saya jadi lebih paham cara pakai pola ini."},
      {jp:"授業だけでなく、日常の場面でもうえでは意外とよく出てくる。",kana:"じゅぎょうだけでなく、にちじょうのばめんでもうえではいがいとよくでてくる。",romaji:"Jugyou dakedenaku, nichijou no bamen demouedeha igai toyoku dete kuru.",meaning:"Bukan hanya di kelas, pola ini ternyata cukup sering muncul dalam keseharian."}
    ]}
  ]},

  // ── GR-N2-125: 〜にかけては ──
  {id:"GR-N2-125",level:"N2",title:"〜にかけては",summary:"Pola 〜にかけては untuk level N2, dengan contoh penggunaan dalam konteks sekolah, kantor, layanan publik, dan kehidupan sehari-hari di Jepang.",groups:[
    {name:"〜にかけては",description:"Contoh penggunaan 〜にかけては dalam konteks alami sehari-hari di Jepang.",sentences:[
      {jp:"留学生にかけては説明会が、大学のホールで開かれた。",kana:"りゅうがくせいにかけてはせつめいかいが、だいがくのほーるでひらかれた。",romaji:"Ryuugakusei nikaketeha setsumeikai ga, daigaku no hooru de hiraka reta.",meaning:"Sesi penjelasan untuk mahasiswa asing diadakan di aula universitas."},
      {jp:"駅前の再開発にかけては住民向けの案内が配られた。",kana:"えきまえのさいかいはつにかけてはじゅうみんむけのあんないがくばられた。",romaji:"Ekimae no saikaihatsu nikaketeha juumin muke no annai ga kubara reta.",meaning:"Pemberitahuan bagi warga terkait pembangunan ulang area depan stasiun dibagikan."},
      {jp:"この制度にかけては質問があれば、区役所の窓口で確認できる。",kana:"このせいどにかけてはしつもんがあれば、くやくしょのまどぐちでかくにんできる。",romaji:"Kono seido nikaketeha shitsumon gaareba, kuyakusho no madoguchi de kakunin dekiru.",meaning:"Kalau ada pertanyaan terkait sistem ini, bisa ditanyakan di loket balai kota."},
      {jp:"外国人スタッフにかけては研修も、来月から始まる予定だ。",kana:"がいこくじんすたっふにかけてはけんしゅうも、らいげつからはじまるよていだ。",romaji:"Gaikokujin sutaffu nikaketeha kenshuu mo, raigetsu kara hajima ru yotei da.",meaning:"Pelatihan untuk staf asing juga dijadwalkan mulai bulan depan."},
      {jp:"今回の変更点にかけては詳しい資料は、受付で受け取れる。",kana:"こんかいのへんこうてんにかけてはくわしいしりょうは、うけつけでうけとれる。",romaji:"Konkai no henkouten nikaketeha kuwashii shiryou ha, uketsuke de uketore ru.",meaning:"Materi rinci terkait perubahan kali ini bisa diambil di meja penerima tamu."}
    ]}
  ]},

  // ── GR-N2-126: 〜とは ──
  {id:"GR-N2-126",level:"N2",title:"〜とは",summary:"Pola 〜とは untuk level N2, dengan contoh penggunaan dalam konteks sekolah, kantor, layanan publik, dan kehidupan sehari-hari di Jepang.",groups:[
    {name:"〜とは",description:"Contoh penggunaan 〜とは dalam konteks alami sehari-hari di Jepang.",sentences:[
      {jp:"駅に着くと、ちょうど案内放送が始まった。",kana:"えきにつくと、ちょうどあんないほうそうがはじまった。",romaji:"Eki ni tsuku to, choudo annaihousou ga hajima tta.",meaning:"Begitu sampai di stasiun, pengumuman baru saja dimulai."},
      {jp:"春になると、この川沿いは散歩する人でにぎわう。",kana:"はるになると、このかわぞいはさんぽするにんでにぎわう。",romaji:"Haru ninaruto, kono kawazoi ha sanpo suru nin denigiwau.",meaning:"Begitu musim semi tiba, area tepi sungai ini ramai oleh orang yang berjalan-jalan."},
      {jp:"資料を読むと、今回の変更点がよく分かる。",kana:"しりょうをよむと、こんかいのへんこうてんがよくわかる。",romaji:"Shiryou wo yomu to, konkai no henkouten gayoku waka ru.",meaning:"Kalau membaca materinya, perubahan kali ini jadi mudah dipahami."},
      {jp:"彼の話し方を見ると、かなり緊張しているようだ。",kana:"かのはなしかたをみると、かなりきんちょうしているようだ。",romaji:"Kano hanashikata wo miru to, kanari kinchoushi teiruyouda.",meaning:"Melihat cara dia berbicara, tampaknya dia cukup tegang."},
      {jp:"この条件だと、申し込みは早い方がよさそうだ。",kana:"このじょうけんだと、もうしこみははやいほうがよさそうだ。",romaji:"Kono jouken dato, moushikomi ha hayai houga yosasouda.",meaning:"Kalau syaratnya seperti ini, tampaknya lebih baik mendaftar lebih cepat."}
    ]}
  ]},

  // ── GR-N2-127: ということは ──
  {id:"GR-N2-127",level:"N2",title:"ということは",summary:"Pola ということは untuk level N2, dengan contoh penggunaan dalam konteks sekolah, kantor, layanan publik, dan kehidupan sehari-hari di Jepang.",groups:[
    {name:"ということは",description:"Contoh penggunaan ということは dalam konteks alami sehari-hari di Jepang.",sentences:[
      {jp:"駅に着くと、ちょうど案内放送が始まった。",kana:"えきにつくと、ちょうどあんないほうそうがはじまった。",romaji:"Eki ni tsuku to, choudo annaihousou ga hajima tta.",meaning:"Begitu sampai di stasiun, pengumuman baru saja dimulai."},
      {jp:"春になると、この川沿いは散歩する人でにぎわう。",kana:"はるになると、このかわぞいはさんぽするにんでにぎわう。",romaji:"Haru ninaruto, kono kawazoi ha sanpo suru nin denigiwau.",meaning:"Begitu musim semi tiba, area tepi sungai ini ramai oleh orang yang berjalan-jalan."},
      {jp:"資料を読むと、今回の変更点がよく分かる。",kana:"しりょうをよむと、こんかいのへんこうてんがよくわかる。",romaji:"Shiryou wo yomu to, konkai no henkouten gayoku waka ru.",meaning:"Kalau membaca materinya, perubahan kali ini jadi mudah dipahami."},
      {jp:"彼の話し方を見ると、かなり緊張しているようだ。",kana:"かのはなしかたをみると、かなりきんちょうしているようだ。",romaji:"Kano hanashikata wo miru to, kanari kinchoushi teiruyouda.",meaning:"Melihat cara dia berbicara, tampaknya dia cukup tegang."},
      {jp:"この条件だと、申し込みは早い方がよさそうだ。",kana:"このじょうけんだと、もうしこみははやいほうがよさそうだ。",romaji:"Kono jouken dato, moushikomi ha hayai houga yosasouda.",meaning:"Kalau syaratnya seperti ini, tampaknya lebih baik mendaftar lebih cepat."}
    ]}
  ]},

  // ── GR-N2-128: 〜まい ──
  {id:"GR-N2-128",level:"N2",title:"〜まい",summary:"Pola 〜まい untuk level N2, dengan contoh penggunaan dalam konteks sekolah, kantor, layanan publik, dan kehidupan sehari-hari di Jepang.",groups:[
    {name:"〜まい",description:"Contoh penggunaan 〜まい dalam konteks alami sehari-hari di Jepang.",sentences:[
      {jp:"靴のまま入れる教室もあれば、履き替える教室もある。",kana:"くつのままいれるきょうしつもあれば、はきかえるきょうしつもある。",romaji:"Kutsu nomama ire ru kyoushitsu moareba, haki kae ru kyoushitsu moaru.",meaning:"Ada ruang kelas yang boleh dimasuki dengan sepatu, ada juga yang harus ganti alas kaki."},
      {jp:"資料は印刷したまま机の上に置いておいた。",kana:"しりょうはいんさつしたままつくえのうえにおいておいた。",romaji:"Shiryou ha insatsu shitamama tsukue no ueni oi teoita.",meaning:"Saya membiarkan materi cetak itu tetap berada di atas meja."},
      {jp:"昔の商店街がそのまま残っている通りもまだある。",kana:"むかしのしょうてんがいがそのままのこっているとうりもまだある。",romaji:"Mukashi no shoutengai gasonomama nokotsu teiru touri momadaaru.",meaning:"Masih ada jalan yang mempertahankan area pertokoan lama apa adanya."},
      {jp:"窓を開けたままだと、夜は少し冷える。",kana:"まどをひらけたままだと、よるはすこしひえる。",romaji:"Mado wo hirake tamamadato, yoru ha sukoshi hie ru.",meaning:"Kalau jendelanya dibiarkan terbuka, malam hari akan terasa agak dingin."},
      {jp:"分からないまま進めるより、一度確認した方がいい。",kana:"わからないまますすめるより、いちどかくにんしたほうがいい。",romaji:"Waka ranaimama susume ruyori, ichido kakuninshi ta houga ii.",meaning:"Daripada terus lanjut tanpa paham, lebih baik periksa sekali lagi."}
    ]}
  ]},

  // ── GR-N2-129: 〜ようか〜まいか ──
  {id:"GR-N2-129",level:"N2",title:"〜ようか〜まいか",summary:"Pola 〜ようか〜まいか untuk level N2, dengan contoh penggunaan dalam konteks sekolah, kantor, layanan publik, dan kehidupan sehari-hari di Jepang.",groups:[
    {name:"〜ようか〜まいか",description:"Contoh penggunaan 〜ようか〜まいか dalam konteks alami sehari-hari di Jepang.",sentences:[
      {jp:"この前の説明会では、ようかまいかという表現も実際の場面で使われていた。",kana:"このまえのせつめいかいでは、ようかまいかというひょうげんもじっさいのばめんでつかわれていた。",romaji:"Kono mae no setsumeikai deha, youkamaikatoiu hyougen mo jissai no bamen de tsukawa reteita.",meaning:"Pada sesi penjelasan sebelumnya, ungkapan ini juga dipakai dalam situasi nyata."},
      {jp:"区役所や学校でも、ようかまいかのような言い方を見かけることがある。",kana:"くやくしょやがっこうでも、ようかまいかのようないいかたをみかけることがある。",romaji:"Kuyakusho ya gakkou demo, youkamaikanoyouna iikata wo mikake rukotogaaru.",meaning:"Di balai kota maupun sekolah, kadang terlihat cara ungkap seperti ini."},
      {jp:"職場の会話では、ようかまいかを使うと少し自然な言い方になる。",kana:"しょくばのかいわでは、ようかまいかをつかうとすこししぜんないいかたになる。",romaji:"Shokuba no kaiwa deha, youkamaikawo tsukau to sukoshi shizen na iikata ninaru.",meaning:"Dalam percakapan kerja, memakai pola ini bisa membuat ungkapan terdengar lebih alami."},
      {jp:"駅前の店で店員さんが話しているのを聞いて、ようかまいかの使い方がよく分かった。",kana:"えきまえのみせでてんいんさんがはなしているのをきいて、ようかまいかのつかいかたがよくわかった。",romaji:"Ekimae no mise de ten'in sanga hanashi teirunowo kii te, youkamaikano tsukaikata gayoku waka tta.",meaning:"Saat mendengar staf toko di depan stasiun berbicara, saya jadi lebih paham cara pakai pola ini."},
      {jp:"授業だけでなく、日常の場面でもようかまいかは意外とよく出てくる。",kana:"じゅぎょうだけでなく、にちじょうのばめんでもようかまいかはいがいとよくでてくる。",romaji:"Jugyou dakedenaku, nichijou no bamen demoyoukamaikaha igai toyoku dete kuru.",meaning:"Bukan hanya di kelas, pola ini ternyata cukup sering muncul dalam keseharian."}
    ]}
  ]},

  // ── GR-N2-130: 〜つもり ──
  {id:"GR-N2-130",level:"N2",title:"〜つもり",summary:"Pola 〜つもり untuk level N2, dengan contoh penggunaan dalam konteks sekolah, kantor, layanan publik, dan kehidupan sehari-hari di Jepang.",groups:[
    {name:"〜つもり",description:"Contoh penggunaan 〜つもり dalam konteks alami sehari-hari di Jepang.",sentences:[
      {jp:"この前の説明会では、つもりという表現も実際の場面で使われていた。",kana:"このまえのせつめいかいでは、つもりというひょうげんもじっさいのばめんでつかわれていた。",romaji:"Kono mae no setsumeikai deha, tsumoritoiu hyougen mo jissai no bamen de tsukawa reteita.",meaning:"Pada sesi penjelasan sebelumnya, ungkapan ini juga dipakai dalam situasi nyata."},
      {jp:"区役所や学校でも、つもりのような言い方を見かけることがある。",kana:"くやくしょやがっこうでも、つもりのようないいかたをみかけることがある。",romaji:"Kuyakusho ya gakkou demo, tsumorinoyouna iikata wo mikake rukotogaaru.",meaning:"Di balai kota maupun sekolah, kadang terlihat cara ungkap seperti ini."},
      {jp:"職場の会話では、つもりを使うと少し自然な言い方になる。",kana:"しょくばのかいわでは、つもりをつかうとすこししぜんないいかたになる。",romaji:"Shokuba no kaiwa deha, tsumoriwo tsukau to sukoshi shizen na iikata ninaru.",meaning:"Dalam percakapan kerja, memakai pola ini bisa membuat ungkapan terdengar lebih alami."},
      {jp:"駅前の店で店員さんが話しているのを聞いて、つもりの使い方がよく分かった。",kana:"えきまえのみせでてんいんさんがはなしているのをきいて、つもりのつかいかたがよくわかった。",romaji:"Ekimae no mise de ten'in sanga hanashi teirunowo kii te, tsumorino tsukaikata gayoku waka tta.",meaning:"Saat mendengar staf toko di depan stasiun berbicara, saya jadi lebih paham cara pakai pola ini."},
      {jp:"授業だけでなく、日常の場面でもつもりは意外とよく出てくる。",kana:"じゅぎょうだけでなく、にちじょうのばめんでもつもりはいがいとよくでてくる。",romaji:"Jugyou dakedenaku, nichijou no bamen demotsumoriha igai toyoku dete kuru.",meaning:"Bukan hanya di kelas, pola ini ternyata cukup sering muncul dalam keseharian."}
    ]}
  ]},

  // ── GR-N2-131: 〜ものがある ──
  {id:"GR-N2-131",level:"N2",title:"〜ものがある",summary:"Pola 〜ものがある untuk level N2, dengan contoh penggunaan dalam konteks sekolah, kantor, layanan publik, dan kehidupan sehari-hari di Jepang.",groups:[
    {name:"〜ものがある",description:"Contoh penggunaan 〜ものがある dalam konteks alami sehari-hari di Jepang.",sentences:[
      {jp:"この前の説明会では、ものがあるという表現も実際の場面で使われていた。",kana:"このまえのせつめいかいでは、ものがあるというひょうげんもじっさいのばめんでつかわれていた。",romaji:"Kono mae no setsumeikai deha, monogaarutoiu hyougen mo jissai no bamen de tsukawa reteita.",meaning:"Pada sesi penjelasan sebelumnya, ungkapan ini juga dipakai dalam situasi nyata."},
      {jp:"区役所や学校でも、ものがあるのような言い方を見かけることがある。",kana:"くやくしょやがっこうでも、ものがあるのようないいかたをみかけることがある。",romaji:"Kuyakusho ya gakkou demo, monogaarunoyouna iikata wo mikake rukotogaaru.",meaning:"Di balai kota maupun sekolah, kadang terlihat cara ungkap seperti ini."},
      {jp:"職場の会話では、ものがあるを使うと少し自然な言い方になる。",kana:"しょくばのかいわでは、ものがあるをつかうとすこししぜんないいかたになる。",romaji:"Shokuba no kaiwa deha, monogaaruwo tsukau to sukoshi shizen na iikata ninaru.",meaning:"Dalam percakapan kerja, memakai pola ini bisa membuat ungkapan terdengar lebih alami."},
      {jp:"駅前の店で店員さんが話しているのを聞いて、ものがあるの使い方がよく分かった。",kana:"えきまえのみせでてんいんさんがはなしているのをきいて、ものがあるのつかいかたがよくわかった。",romaji:"Ekimae no mise de ten'in sanga hanashi teirunowo kii te, monogaaruno tsukaikata gayoku waka tta.",meaning:"Saat mendengar staf toko di depan stasiun berbicara, saya jadi lebih paham cara pakai pola ini."},
      {jp:"授業だけでなく、日常の場面でもものがあるは意外とよく出てくる。",kana:"じゅぎょうだけでなく、にちじょうのばめんでもものがあるはいがいとよくでてくる。",romaji:"Jugyou dakedenaku, nichijou no bamen demomonogaaruha igai toyoku dete kuru.",meaning:"Bukan hanya di kelas, pola ini ternyata cukup sering muncul dalam keseharian."}
    ]}
  ]},

  // ── GR-N2-132: 〜ことに ──
  {id:"GR-N2-132",level:"N2",title:"〜ことに",summary:"Pola 〜ことに untuk level N2, dengan contoh penggunaan dalam konteks sekolah, kantor, layanan publik, dan kehidupan sehari-hari di Jepang.",groups:[
    {name:"〜ことに",description:"Contoh penggunaan 〜ことに dalam konteks alami sehari-hari di Jepang.",sentences:[
      {jp:"この前の説明会では、ことにという表現も実際の場面で使われていた。",kana:"このまえのせつめいかいでは、ことにというひょうげんもじっさいのばめんでつかわれていた。",romaji:"Kono mae no setsumeikai deha, kotonitoiu hyougen mo jissai no bamen de tsukawa reteita.",meaning:"Pada sesi penjelasan sebelumnya, ungkapan ini juga dipakai dalam situasi nyata."},
      {jp:"区役所や学校でも、ことにのような言い方を見かけることがある。",kana:"くやくしょやがっこうでも、ことにのようないいかたをみかけることがある。",romaji:"Kuyakusho ya gakkou demo, kotoninoyouna iikata wo mikake rukotogaaru.",meaning:"Di balai kota maupun sekolah, kadang terlihat cara ungkap seperti ini."},
      {jp:"職場の会話では、ことにを使うと少し自然な言い方になる。",kana:"しょくばのかいわでは、ことにをつかうとすこししぜんないいかたになる。",romaji:"Shokuba no kaiwa deha, kotoniwo tsukau to sukoshi shizen na iikata ninaru.",meaning:"Dalam percakapan kerja, memakai pola ini bisa membuat ungkapan terdengar lebih alami."},
      {jp:"駅前の店で店員さんが話しているのを聞いて、ことにの使い方がよく分かった。",kana:"えきまえのみせでてんいんさんがはなしているのをきいて、ことにのつかいかたがよくわかった。",romaji:"Ekimae no mise de ten'in sanga hanashi teirunowo kii te, kotonino tsukaikata gayoku waka tta.",meaning:"Saat mendengar staf toko di depan stasiun berbicara, saya jadi lebih paham cara pakai pola ini."},
      {jp:"授業だけでなく、日常の場面でもことには意外とよく出てくる。",kana:"じゅぎょうだけでなく、にちじょうのばめんでもことにはいがいとよくでてくる。",romaji:"Jugyou dakedenaku, nichijou no bamen demokotoniha igai toyoku dete kuru.",meaning:"Bukan hanya di kelas, pola ini ternyata cukup sering muncul dalam keseharian."}
    ]}
  ]},

  // ── GR-N2-133: 〜ことか ──
  {id:"GR-N2-133",level:"N2",title:"〜ことか",summary:"Pola 〜ことか untuk level N2, dengan contoh penggunaan dalam konteks sekolah, kantor, layanan publik, dan kehidupan sehari-hari di Jepang.",groups:[
    {name:"〜ことか",description:"Contoh penggunaan 〜ことか dalam konteks alami sehari-hari di Jepang.",sentences:[
      {jp:"この前の説明会では、ことかという表現も実際の場面で使われていた。",kana:"このまえのせつめいかいでは、ことかというひょうげんもじっさいのばめんでつかわれていた。",romaji:"Kono mae no setsumeikai deha, kotokatoiu hyougen mo jissai no bamen de tsukawa reteita.",meaning:"Pada sesi penjelasan sebelumnya, ungkapan ini juga dipakai dalam situasi nyata."},
      {jp:"区役所や学校でも、ことかのような言い方を見かけることがある。",kana:"くやくしょやがっこうでも、ことかのようないいかたをみかけることがある。",romaji:"Kuyakusho ya gakkou demo, kotokanoyouna iikata wo mikake rukotogaaru.",meaning:"Di balai kota maupun sekolah, kadang terlihat cara ungkap seperti ini."},
      {jp:"職場の会話では、ことかを使うと少し自然な言い方になる。",kana:"しょくばのかいわでは、ことかをつかうとすこししぜんないいかたになる。",romaji:"Shokuba no kaiwa deha, kotokawo tsukau to sukoshi shizen na iikata ninaru.",meaning:"Dalam percakapan kerja, memakai pola ini bisa membuat ungkapan terdengar lebih alami."},
      {jp:"駅前の店で店員さんが話しているのを聞いて、ことかの使い方がよく分かった。",kana:"えきまえのみせでてんいんさんがはなしているのをきいて、ことかのつかいかたがよくわかった。",romaji:"Ekimae no mise de ten'in sanga hanashi teirunowo kii te, kotokano tsukaikata gayoku waka tta.",meaning:"Saat mendengar staf toko di depan stasiun berbicara, saya jadi lebih paham cara pakai pola ini."},
      {jp:"授業だけでなく、日常の場面でもことかは意外とよく出てくる。",kana:"じゅぎょうだけでなく、にちじょうのばめんでもことかはいがいとよくでてくる。",romaji:"Jugyou dakedenaku, nichijou no bamen demokotokaha igai toyoku dete kuru.",meaning:"Bukan hanya di kelas, pola ini ternyata cukup sering muncul dalam keseharian."}
    ]}
  ]},

  // ── GR-N2-134: 〜ないものか ──
  {id:"GR-N2-134",level:"N2",title:"〜ないものか",summary:"Pola 〜ないものか untuk level N2, dengan contoh penggunaan dalam konteks sekolah, kantor, layanan publik, dan kehidupan sehari-hari di Jepang.",groups:[
    {name:"〜ないものか",description:"Contoh penggunaan 〜ないものか dalam konteks alami sehari-hari di Jepang.",sentences:[
      {jp:"この前の説明会では、ないものかという表現も実際の場面で使われていた。",kana:"このまえのせつめいかいでは、ないものかというひょうげんもじっさいのばめんでつかわれていた。",romaji:"Kono mae no setsumeikai deha, naimonokatoiu hyougen mo jissai no bamen de tsukawa reteita.",meaning:"Pada sesi penjelasan sebelumnya, ungkapan ini juga dipakai dalam situasi nyata."},
      {jp:"区役所や学校でも、ないものかのような言い方を見かけることがある。",kana:"くやくしょやがっこうでも、ないものかのようないいかたをみかけることがある。",romaji:"Kuyakusho ya gakkou demo, naimonokanoyouna iikata wo mikake rukotogaaru.",meaning:"Di balai kota maupun sekolah, kadang terlihat cara ungkap seperti ini."},
      {jp:"職場の会話では、ないものかを使うと少し自然な言い方になる。",kana:"しょくばのかいわでは、ないものかをつかうとすこししぜんないいかたになる。",romaji:"Shokuba no kaiwa deha, naimonokawo tsukau to sukoshi shizen na iikata ninaru.",meaning:"Dalam percakapan kerja, memakai pola ini bisa membuat ungkapan terdengar lebih alami."},
      {jp:"駅前の店で店員さんが話しているのを聞いて、ないものかの使い方がよく分かった。",kana:"えきまえのみせでてんいんさんがはなしているのをきいて、ないものかのつかいかたがよくわかった。",romaji:"Ekimae no mise de ten'in sanga hanashi teirunowo kii te, naimonokano tsukaikata gayoku waka tta.",meaning:"Saat mendengar staf toko di depan stasiun berbicara, saya jadi lebih paham cara pakai pola ini."},
      {jp:"授業だけでなく、日常の場面でもないものかは意外とよく出てくる。",kana:"じゅぎょうだけでなく、にちじょうのばめんでもないものかはいがいとよくでてくる。",romaji:"Jugyou dakedenaku, nichijou no bamen demonaimonokaha igai toyoku dete kuru.",meaning:"Bukan hanya di kelas, pola ini ternyata cukup sering muncul dalam keseharian."}
    ]}
  ]},

  // ── GR-N2-135: 〜たいものだ ──
  {id:"GR-N2-135",level:"N2",title:"〜たいものだ",summary:"Pola 〜たいものだ untuk level N2, dengan contoh penggunaan dalam konteks sekolah, kantor, layanan publik, dan kehidupan sehari-hari di Jepang.",groups:[
    {name:"〜たいものだ",description:"Contoh penggunaan 〜たいものだ dalam konteks alami sehari-hari di Jepang.",sentences:[
      {jp:"書類を出したいものだ, 受付番号を受け取った。",kana:"しょるいをだしたいものだ, うけつけばんごうをうけとった。",romaji:"Shorui wo dashi taimonoda,   uketsukebangou wo uketotsu ta.",meaning:"Setelah menyerahkan dokumen itu, saya menerima nomor antrean."},
      {jp:"部屋を見たいものだ, その日のうちに申し込む人も多い。",kana:"へやをみたいものだ, そのにちのうちにもうしこむにんもおおい。",romaji:"Heya wo mita imonoda,   sono nichi nouchini moushikomu nin mo ooi.",meaning:"Setelah melihat kamar itu, banyak orang langsung mendaftar pada hari yang sama."},
      {jp:"電車を降りたいものだ, 風の強さに驚いた。",kana:"でんしゃをおりたいものだ, かぜのつよさにおどろいた。",romaji:"Densha wo ori taimonoda,   kaze no tsuyosa ni odoroi ta.",meaning:"Begitu turun dari kereta, saya terkejut oleh kencangnya angin."},
      {jp:"先生に会ったいものだ, 少し安心した。",kana:"せんせいにあったいものだ, すこしあんしんした。",romaji:"Sensei ni atsu taimonoda,   sukoshi anshinshi ta.",meaning:"Setelah bertemu sensei, saya merasa sedikit lega."},
      {jp:"店に入ったいものだ, だしのいい香りが広がっていた。",kana:"みせにいっったいものだ, だしのいいかおりがひろがっていた。",romaji:"Mise ni itsutsu taimonoda,   dashinoii kaori ga hiroga tteita.",meaning:"Begitu masuk toko, aroma kaldu yang sedap langsung terasa."}
    ]}
  ]},

  // ── GR-N1-01: 〜あっての ──
  {id:"GR-N1-01",level:"N1",title:"〜あっての",summary:"Pola 〜あっての untuk level N1, dengan contoh penggunaan dalam konteks sekolah, kantor, layanan publik, dan kehidupan sehari-hari di Jepang.",groups:[
    {name:"〜あっての",description:"Contoh penggunaan 〜あっての dalam konteks alami sehari-hari di Jepang.",sentences:[
      {jp:"この前の説明会では、あってのという表現も実際の場面で使われていた。",kana:"このまえのせつめいかいでは、あってのというひょうげんもじっさいのばめんでつかわれていた。",romaji:"Kono mae no setsumeikai deha, attenotoiu hyougen mo jissai no bamen de tsukawa reteita.",meaning:"Pada sesi penjelasan sebelumnya, ungkapan ini juga dipakai dalam situasi nyata."},
      {jp:"区役所や学校でも、あってののような言い方を見かけることがある。",kana:"くやくしょやがっこうでも、あってののようないいかたをみかけることがある。",romaji:"Kuyakusho ya gakkou demo, attenonoyouna iikata wo mikake rukotogaaru.",meaning:"Di balai kota maupun sekolah, kadang terlihat cara ungkap seperti ini."},
      {jp:"職場の会話では、あってのを使うと少し自然な言い方になる。",kana:"しょくばのかいわでは、あってのをつかうとすこししぜんないいかたになる。",romaji:"Shokuba no kaiwa deha, attenowo tsukau to sukoshi shizen na iikata ninaru.",meaning:"Dalam percakapan kerja, memakai pola ini bisa membuat ungkapan terdengar lebih alami."},
      {jp:"駅前の店で店員さんが話しているのを聞いて、あってのの使い方がよく分かった。",kana:"えきまえのみせでてんいんさんがはなしているのをきいて、あってののつかいかたがよくわかった。",romaji:"Ekimae no mise de ten'in sanga hanashi teirunowo kii te, attenono tsukaikata gayoku waka tta.",meaning:"Saat mendengar staf toko di depan stasiun berbicara, saya jadi lebih paham cara pakai pola ini."},
      {jp:"授業だけでなく、日常の場面でもあってのは意外とよく出てくる。",kana:"じゅぎょうだけでなく、にちじょうのばめんでもあってのはいがいとよくでてくる。",romaji:"Jugyou dakedenaku, nichijou no bamen demoattenoha igai toyoku dete kuru.",meaning:"Bukan hanya di kelas, pola ini ternyata cukup sering muncul dalam keseharian."}
    ]}
  ]},

  // ── GR-N1-02: 〜いかんだ / いかんでは / いかんによっては ──
  {id:"GR-N1-02",level:"N1",title:"〜いかんだ / いかんでは / いかんによっては",summary:"Pola 〜いかんだ / いかんでは / いかんによっては untuk level N1, dengan contoh penggunaan dalam konteks sekolah, kantor, layanan publik, dan kehidupan sehari-hari di Jepang.",groups:[
    {name:"〜いかんだ / いかんでは / いかんによっては",description:"Contoh penggunaan 〜いかんだ / いかんでは / いかんによっては dalam konteks alami sehari-hari di Jepang.",sentences:[
      {jp:"この前の説明会では、いかんだという表現も実際の場面で使われていた。",kana:"このまえのせつめいかいでは、いかんだというひょうげんもじっさいのばめんでつかわれていた。",romaji:"Kono mae no setsumeikai deha, ikandatoiu hyougen mo jissai no bamen de tsukawa reteita.",meaning:"Pada sesi penjelasan sebelumnya, ungkapan ini juga dipakai dalam situasi nyata."},
      {jp:"区役所や学校でも、いかんだのような言い方を見かけることがある。",kana:"くやくしょやがっこうでも、いかんだのようないいかたをみかけることがある。",romaji:"Kuyakusho ya gakkou demo, ikandanoyouna iikata wo mikake rukotogaaru.",meaning:"Di balai kota maupun sekolah, kadang terlihat cara ungkap seperti ini."},
      {jp:"職場の会話では、いかんだを使うと少し自然な言い方になる。",kana:"しょくばのかいわでは、いかんだをつかうとすこししぜんないいかたになる。",romaji:"Shokuba no kaiwa deha, ikandawo tsukau to sukoshi shizen na iikata ninaru.",meaning:"Dalam percakapan kerja, memakai pola ini bisa membuat ungkapan terdengar lebih alami."},
      {jp:"駅前の店で店員さんが話しているのを聞いて、いかんだの使い方がよく分かった。",kana:"えきまえのみせでてんいんさんがはなしているのをきいて、いかんだのつかいかたがよくわかった。",romaji:"Ekimae no mise de ten'in sanga hanashi teirunowo kii te, ikandano tsukaikata gayoku waka tta.",meaning:"Saat mendengar staf toko di depan stasiun berbicara, saya jadi lebih paham cara pakai pola ini."},
      {jp:"授業だけでなく、日常の場面でもいかんだは意外とよく出てくる。",kana:"じゅぎょうだけでなく、にちじょうのばめんでもいかんだはいがいとよくでてくる。",romaji:"Jugyou dakedenaku, nichijou no bamen demoikandaha igai toyoku dete kuru.",meaning:"Bukan hanya di kelas, pola ini ternyata cukup sering muncul dalam keseharian."}
    ]}
  ]},

  // ── GR-N1-03: 〜いかんにかかわらず / いかんによらず / いかんを問わず ──
  {id:"GR-N1-03",level:"N1",title:"〜いかんにかかわらず / いかんによらず / いかんを問わず",summary:"Pola 〜いかんにかかわらず / いかんによらず / いかんを問わず untuk level N1, dengan contoh penggunaan dalam konteks sekolah, kantor, layanan publik, dan kehidupan sehari-hari di Jepang.",groups:[
    {name:"〜いかんにかかわらず / いかんによらず / いかんを問わず",description:"Contoh penggunaan 〜いかんにかかわらず / いかんによらず / いかんを問わず dalam konteks alami sehari-hari di Jepang.",sentences:[
      {jp:"この前の説明会では、いかんにかかわらずという表現も実際の場面で使われていた。",kana:"このまえのせつめいかいでは、いかんにかかわらずというひょうげんもじっさいのばめんでつかわれていた。",romaji:"Kono mae no setsumeikai deha, ikannikakawarazutoiu hyougen mo jissai no bamen de tsukawa reteita.",meaning:"Pada sesi penjelasan sebelumnya, ungkapan ini juga dipakai dalam situasi nyata."},
      {jp:"区役所や学校でも、いかんにかかわらずのような言い方を見かけることがある。",kana:"くやくしょやがっこうでも、いかんにかかわらずのようないいかたをみかけることがある。",romaji:"Kuyakusho ya gakkou demo, ikannikakawarazunoyouna iikata wo mikake rukotogaaru.",meaning:"Di balai kota maupun sekolah, kadang terlihat cara ungkap seperti ini."},
      {jp:"職場の会話では、いかんにかかわらずを使うと少し自然な言い方になる。",kana:"しょくばのかいわでは、いかんにかかわらずをつかうとすこししぜんないいかたになる。",romaji:"Shokuba no kaiwa deha, ikannikakawarazuwo tsukau to sukoshi shizen na iikata ninaru.",meaning:"Dalam percakapan kerja, memakai pola ini bisa membuat ungkapan terdengar lebih alami."},
      {jp:"駅前の店で店員さんが話しているのを聞いて、いかんにかかわらずの使い方がよく分かった。",kana:"えきまえのみせでてんいんさんがはなしているのをきいて、いかんにかかわらずのつかいかたがよくわかった。",romaji:"Ekimae no mise de ten'in sanga hanashi teirunowo kii te, ikannikakawarazuno tsukaikata gayoku waka tta.",meaning:"Saat mendengar staf toko di depan stasiun berbicara, saya jadi lebih paham cara pakai pola ini."},
      {jp:"授業だけでなく、日常の場面でもいかんにかかわらずは意外とよく出てくる。",kana:"じゅぎょうだけでなく、にちじょうのばめんでもいかんにかかわらずはいがいとよくでてくる。",romaji:"Jugyou dakedenaku, nichijou no bamen demoikannikakawarazuha igai toyoku dete kuru.",meaning:"Bukan hanya di kelas, pola ini ternyata cukup sering muncul dalam keseharian."}
    ]}
  ]},

  // ── GR-N1-04: いずれにしても / いずれにしろ / いずれにせよ ──
  {id:"GR-N1-04",level:"N1",title:"いずれにしても / いずれにしろ / いずれにせよ",summary:"Pola いずれにしても / いずれにしろ / いずれにせよ untuk level N1, dengan contoh penggunaan dalam konteks sekolah, kantor, layanan publik, dan kehidupan sehari-hari di Jepang.",groups:[
    {name:"いずれにしても / いずれにしろ / いずれにせよ",description:"Contoh penggunaan いずれにしても / いずれにしろ / いずれにせよ dalam konteks alami sehari-hari di Jepang.",sentences:[
      {jp:"この前の説明会では、いずれにしてもという表現も実際の場面で使われていた。",kana:"このまえのせつめいかいでは、いずれにしてもというひょうげんもじっさいのばめんでつかわれていた。",romaji:"Kono mae no setsumeikai deha, izurenishitemotoiu hyougen mo jissai no bamen de tsukawa reteita.",meaning:"Pada sesi penjelasan sebelumnya, ungkapan ini juga dipakai dalam situasi nyata."},
      {jp:"区役所や学校でも、いずれにしてものような言い方を見かけることがある。",kana:"くやくしょやがっこうでも、いずれにしてものようないいかたをみかけることがある。",romaji:"Kuyakusho ya gakkou demo, izurenishitemonoyouna iikata wo mikake rukotogaaru.",meaning:"Di balai kota maupun sekolah, kadang terlihat cara ungkap seperti ini."},
      {jp:"職場の会話では、いずれにしてもを使うと少し自然な言い方になる。",kana:"しょくばのかいわでは、いずれにしてもをつかうとすこししぜんないいかたになる。",romaji:"Shokuba no kaiwa deha, izurenishitemowo tsukau to sukoshi shizen na iikata ninaru.",meaning:"Dalam percakapan kerja, memakai pola ini bisa membuat ungkapan terdengar lebih alami."},
      {jp:"駅前の店で店員さんが話しているのを聞いて、いずれにしてもの使い方がよく分かった。",kana:"えきまえのみせでてんいんさんがはなしているのをきいて、いずれにしてものつかいかたがよくわかった。",romaji:"Ekimae no mise de ten'in sanga hanashi teirunowo kii te, izurenishitemono tsukaikata gayoku waka tta.",meaning:"Saat mendengar staf toko di depan stasiun berbicara, saya jadi lebih paham cara pakai pola ini."},
      {jp:"授業だけでなく、日常の場面でもいずれにしてもは意外とよく出てくる。",kana:"じゅぎょうだけでなく、にちじょうのばめんでもいずれにしてもはいがいとよくでてくる。",romaji:"Jugyou dakedenaku, nichijou no bamen demoizurenishitemoha igai toyoku dete kuru.",meaning:"Bukan hanya di kelas, pola ini ternyata cukup sering muncul dalam keseharian."}
    ]}
  ]},

  // ── GR-N1-05: 〜うちに入らない ──
  {id:"GR-N1-05",level:"N1",title:"〜うちに入らない",summary:"Pola 〜うちに入らない untuk level N1, dengan contoh penggunaan dalam konteks sekolah, kantor, layanan publik, dan kehidupan sehari-hari di Jepang.",groups:[
    {name:"〜うちに入らない",description:"Contoh penggunaan 〜うちに入らない dalam konteks alami sehari-hari di Jepang.",sentences:[
      {jp:"駅から徒歩二十分では、こちらでは駅近のうちに入らない。",kana:"えきからとほにじゅうふんでは、こちらではえきちかのうちにいらない。",romaji:"Eki kara toho nijuu fun deha, kochiradeha ekichika nouchini ira nai.",meaning:"Kalau jalan dua puluh menit dari stasiun, di sini itu belum dianggap dekat stasiun."},
      {jp:"この程度の寒さは、北海道では寒いうちに入らないそうだ。",kana:"このていどのさむさは、ほっかいどうではさむいうちにいらないそうだ。",romaji:"Kono teido no samusa ha, hokkaidou deha samui uchini ira naisouda.",meaning:"Katanya suhu seperti ini di Hokkaido bahkan belum dianggap dingin."},
      {jp:"日本語で少し話せるくらいでは、まだ上手なうちに入らない。",kana:"にほんごですこしはなせるくらいでは、まだじょうずなうちにいらない。",romaji:"Nihongo de sukoshi hanase rukuraideha, mada jouzu nauchini ira nai.",meaning:"Kalau baru bisa bicara sedikit dalam bahasa Jepang, itu belum termasuk mahir."},
      {jp:"この混み方なら、年度末としては大変なうちに入らないらしい。",kana:"このこみほうなら、ねんどまつとしてはたいへんなうちにいらないらしい。",romaji:"Kono komi hou nara, nendomatsu toshiteha taihen nauchini ira nairashii.",meaning:"Kalau tingkat ramainya seperti ini, katanya untuk akhir tahun fiskal belum termasuk parah."},
      {jp:"一日だけの残業なら、忙しいうちに入らないと言う人もいる。",kana:"ついたちだけのざんぎょうなら、いそがしいうちにいらないというにんもいる。",romaji:"Tsuitachi dakeno zangyou nara, isogashii uchini ira naito iu nin moiru.",meaning:"Ada juga yang bilang kalau lembur cuma sehari belum termasuk sibuk."}
    ]}
  ]},

  // ── GR-N1-06: 〜が / も〜なら / 〜が / も〜だ ──
  {id:"GR-N1-06",level:"N1",title:"〜が / も〜なら / 〜が / も〜だ",summary:"Pola 〜が / も〜なら / 〜が / も〜だ untuk level N1, dengan contoh penggunaan dalam konteks sekolah, kantor, layanan publik, dan kehidupan sehari-hari di Jepang.",groups:[
    {name:"〜が / も〜なら / 〜が / も〜だ",description:"Contoh penggunaan 〜が / も〜なら / 〜が / も〜だ dalam konteks alami sehari-hari di Jepang.",sentences:[
      {jp:"この前の説明会では、がという表現も実際の場面で使われていた。",kana:"このまえのせつめいかいでは、がというひょうげんもじっさいのばめんでつかわれていた。",romaji:"Kono mae no setsumeikai deha, gatoiu hyougen mo jissai no bamen de tsukawa reteita.",meaning:"Pada sesi penjelasan sebelumnya, ungkapan ini juga dipakai dalam situasi nyata."},
      {jp:"区役所や学校でも、がのような言い方を見かけることがある。",kana:"くやくしょやがっこうでも、がのようないいかたをみかけることがある。",romaji:"Kuyakusho ya gakkou demo, ganoyouna iikata wo mikake rukotogaaru.",meaning:"Di balai kota maupun sekolah, kadang terlihat cara ungkap seperti ini."},
      {jp:"職場の会話では、がを使うと少し自然な言い方になる。",kana:"しょくばのかいわでは、がをつかうとすこししぜんないいかたになる。",romaji:"Shokuba no kaiwa deha, gawo tsukau to sukoshi shizen na iikata ninaru.",meaning:"Dalam percakapan kerja, memakai pola ini bisa membuat ungkapan terdengar lebih alami."},
      {jp:"駅前の店で店員さんが話しているのを聞いて、がの使い方がよく分かった。",kana:"えきまえのみせでてんいんさんがはなしているのをきいて、がのつかいかたがよくわかった。",romaji:"Ekimae no mise de ten'in sanga hanashi teirunowo kii te, gano tsukaikata gayoku waka tta.",meaning:"Saat mendengar staf toko di depan stasiun berbicara, saya jadi lebih paham cara pakai pola ini."},
      {jp:"授業だけでなく、日常の場面でもがは意外とよく出てくる。",kana:"じゅぎょうだけでなく、にちじょうのばめんでもがはいがいとよくでてくる。",romaji:"Jugyou dakedenaku, nichijou no bamen demogaha igai toyoku dete kuru.",meaning:"Bukan hanya di kelas, pola ini ternyata cukup sering muncul dalam keseharian."}
    ]}
  ]},

  // ── GR-N1-07: 〜か否か ──
  {id:"GR-N1-07",level:"N1",title:"〜か否か",summary:"Pola 〜か否か untuk level N1, dengan contoh penggunaan dalam konteks sekolah, kantor, layanan publik, dan kehidupan sehari-hari di Jepang.",groups:[
    {name:"〜か否か",description:"Contoh penggunaan 〜か否か dalam konteks alami sehari-hari di Jepang.",sentences:[
      {jp:"この前の説明会では、か否かという表現も実際の場面で使われていた。",kana:"このまえのせつめいかいでは、かいなかというひょうげんもじっさいのばめんでつかわれていた。",romaji:"Kono mae no setsumeikai deha, ka inaka toiu hyougen mo jissai no bamen de tsukawa reteita.",meaning:"Pada sesi penjelasan sebelumnya, ungkapan ini juga dipakai dalam situasi nyata."},
      {jp:"区役所や学校でも、か否かのような言い方を見かけることがある。",kana:"くやくしょやがっこうでも、かいなかのようないいかたをみかけることがある。",romaji:"Kuyakusho ya gakkou demo, ka inaka noyouna iikata wo mikake rukotogaaru.",meaning:"Di balai kota maupun sekolah, kadang terlihat cara ungkap seperti ini."},
      {jp:"職場の会話では、か否かを使うと少し自然な言い方になる。",kana:"しょくばのかいわでは、かいなかをつかうとすこししぜんないいかたになる。",romaji:"Shokuba no kaiwa deha, ka inaka wo tsukau to sukoshi shizen na iikata ninaru.",meaning:"Dalam percakapan kerja, memakai pola ini bisa membuat ungkapan terdengar lebih alami."},
      {jp:"駅前の店で店員さんが話しているのを聞いて、か否かの使い方がよく分かった。",kana:"えきまえのみせでてんいんさんがはなしているのをきいて、かいなかのつかいかたがよくわかった。",romaji:"Ekimae no mise de ten'in sanga hanashi teirunowo kii te, ka inaka no tsukaikata gayoku waka tta.",meaning:"Saat mendengar staf toko di depan stasiun berbicara, saya jadi lebih paham cara pakai pola ini."},
      {jp:"授業だけでなく、日常の場面でもか否かは意外とよく出てくる。",kana:"じゅぎょうだけでなく、にちじょうのばめんでもかいなかはいがいとよくでてくる。",romaji:"Jugyou dakedenaku, nichijou no bamen demoka inaka ha igai toyoku dete kuru.",meaning:"Bukan hanya di kelas, pola ini ternyata cukup sering muncul dalam keseharian."}
    ]}
  ]},

  // ── GR-N1-08: 〜限りだ ──
  {id:"GR-N1-08",level:"N1",title:"〜限りだ",summary:"Pola 〜限りだ untuk level N1, dengan contoh penggunaan dalam konteks sekolah, kantor, layanan publik, dan kehidupan sehari-hari di Jepang.",groups:[
    {name:"〜限りだ",description:"Contoh penggunaan 〜限りだ dalam konteks alami sehari-hari di Jepang.",sentences:[
      {jp:"この前の説明会では、限りだという表現も実際の場面で使われていた。",kana:"このまえのせつめいかいでは、かぎりだというひょうげんもじっさいのばめんでつかわれていた。",romaji:"Kono mae no setsumeikai deha, kagiri datoiu hyougen mo jissai no bamen de tsukawa reteita.",meaning:"Pada sesi penjelasan sebelumnya, ungkapan ini juga dipakai dalam situasi nyata."},
      {jp:"区役所や学校でも、限りだのような言い方を見かけることがある。",kana:"くやくしょやがっこうでも、かぎりだのようないいかたをみかけることがある。",romaji:"Kuyakusho ya gakkou demo, kagiri danoyouna iikata wo mikake rukotogaaru.",meaning:"Di balai kota maupun sekolah, kadang terlihat cara ungkap seperti ini."},
      {jp:"職場の会話では、限りだを使うと少し自然な言い方になる。",kana:"しょくばのかいわでは、かぎりだをつかうとすこししぜんないいかたになる。",romaji:"Shokuba no kaiwa deha, kagiri dawo tsukau to sukoshi shizen na iikata ninaru.",meaning:"Dalam percakapan kerja, memakai pola ini bisa membuat ungkapan terdengar lebih alami."},
      {jp:"駅前の店で店員さんが話しているのを聞いて、限りだの使い方がよく分かった。",kana:"えきまえのみせでてんいんさんがはなしているのをきいて、かぎりだのつかいかたがよくわかった。",romaji:"Ekimae no mise de ten'in sanga hanashi teirunowo kii te, kagiri dano tsukaikata gayoku waka tta.",meaning:"Saat mendengar staf toko di depan stasiun berbicara, saya jadi lebih paham cara pakai pola ini."},
      {jp:"授業だけでなく、日常の場面でも限りだは意外とよく出てくる。",kana:"じゅぎょうだけでなく、にちじょうのばめんでもかぎりだはいがいとよくでてくる。",romaji:"Jugyou dakedenaku, nichijou no bamen demo kagiri daha igai toyoku dete kuru.",meaning:"Bukan hanya di kelas, pola ini ternyata cukup sering muncul dalam keseharian."}
    ]}
  ]},

  // ── GR-N1-09: 〜かたがた ──
  {id:"GR-N1-09",level:"N1",title:"〜かたがた",summary:"Pola 〜かたがた untuk level N1, dengan contoh penggunaan dalam konteks sekolah, kantor, layanan publik, dan kehidupan sehari-hari di Jepang.",groups:[
    {name:"〜かたがた",description:"Contoh penggunaan 〜かたがた dalam konteks alami sehari-hari di Jepang.",sentences:[
      {jp:"この前の説明会では、かたがたという表現も実際の場面で使われていた。",kana:"このまえのせつめいかいでは、かたがたというひょうげんもじっさいのばめんでつかわれていた。",romaji:"Kono mae no setsumeikai deha, katagatatoiu hyougen mo jissai no bamen de tsukawa reteita.",meaning:"Pada sesi penjelasan sebelumnya, ungkapan ini juga dipakai dalam situasi nyata."},
      {jp:"区役所や学校でも、かたがたのような言い方を見かけることがある。",kana:"くやくしょやがっこうでも、かたがたのようないいかたをみかけることがある。",romaji:"Kuyakusho ya gakkou demo, katagatanoyouna iikata wo mikake rukotogaaru.",meaning:"Di balai kota maupun sekolah, kadang terlihat cara ungkap seperti ini."},
      {jp:"職場の会話では、かたがたを使うと少し自然な言い方になる。",kana:"しょくばのかいわでは、かたがたをつかうとすこししぜんないいかたになる。",romaji:"Shokuba no kaiwa deha, katagatawo tsukau to sukoshi shizen na iikata ninaru.",meaning:"Dalam percakapan kerja, memakai pola ini bisa membuat ungkapan terdengar lebih alami."},
      {jp:"駅前の店で店員さんが話しているのを聞いて、かたがたの使い方がよく分かった。",kana:"えきまえのみせでてんいんさんがはなしているのをきいて、かたがたのつかいかたがよくわかった。",romaji:"Ekimae no mise de ten'in sanga hanashi teirunowo kii te, katagatano tsukaikata gayoku waka tta.",meaning:"Saat mendengar staf toko di depan stasiun berbicara, saya jadi lebih paham cara pakai pola ini."},
      {jp:"授業だけでなく、日常の場面でもかたがたは意外とよく出てくる。",kana:"じゅぎょうだけでなく、にちじょうのばめんでもかたがたはいがいとよくでてくる。",romaji:"Jugyou dakedenaku, nichijou no bamen demokatagataha igai toyoku dete kuru.",meaning:"Bukan hanya di kelas, pola ini ternyata cukup sering muncul dalam keseharian."}
    ]}
  ]},

  // ── GR-N1-10: 〜かたわら ──
  {id:"GR-N1-10",level:"N1",title:"〜かたわら",summary:"Pola 〜かたわら untuk level N1, dengan contoh penggunaan dalam konteks sekolah, kantor, layanan publik, dan kehidupan sehari-hari di Jepang.",groups:[
    {name:"〜かたわら",description:"Contoh penggunaan 〜かたわら dalam konteks alami sehari-hari di Jepang.",sentences:[
      {jp:"この前の説明会では、かたわらという表現も実際の場面で使われていた。",kana:"このまえのせつめいかいでは、かたわらというひょうげんもじっさいのばめんでつかわれていた。",romaji:"Kono mae no setsumeikai deha, katawaratoiu hyougen mo jissai no bamen de tsukawa reteita.",meaning:"Pada sesi penjelasan sebelumnya, ungkapan ini juga dipakai dalam situasi nyata."},
      {jp:"区役所や学校でも、かたわらのような言い方を見かけることがある。",kana:"くやくしょやがっこうでも、かたわらのようないいかたをみかけることがある。",romaji:"Kuyakusho ya gakkou demo, katawaranoyouna iikata wo mikake rukotogaaru.",meaning:"Di balai kota maupun sekolah, kadang terlihat cara ungkap seperti ini."},
      {jp:"職場の会話では、かたわらを使うと少し自然な言い方になる。",kana:"しょくばのかいわでは、かたわらをつかうとすこししぜんないいかたになる。",romaji:"Shokuba no kaiwa deha, katawarawo tsukau to sukoshi shizen na iikata ninaru.",meaning:"Dalam percakapan kerja, memakai pola ini bisa membuat ungkapan terdengar lebih alami."},
      {jp:"駅前の店で店員さんが話しているのを聞いて、かたわらの使い方がよく分かった。",kana:"えきまえのみせでてんいんさんがはなしているのをきいて、かたわらのつかいかたがよくわかった。",romaji:"Ekimae no mise de ten'in sanga hanashi teirunowo kii te, katawarano tsukaikata gayoku waka tta.",meaning:"Saat mendengar staf toko di depan stasiun berbicara, saya jadi lebih paham cara pakai pola ini."},
      {jp:"授業だけでなく、日常の場面でもかたわらは意外とよく出てくる。",kana:"じゅぎょうだけでなく、にちじょうのばめんでもかたわらはいがいとよくでてくる。",romaji:"Jugyou dakedenaku, nichijou no bamen demokatawaraha igai toyoku dete kuru.",meaning:"Bukan hanya di kelas, pola ini ternyata cukup sering muncul dalam keseharian."}
    ]}
  ]},

  // ── GR-N1-11: 〜がてら ──
  {id:"GR-N1-11",level:"N1",title:"〜がてら",summary:"Pola 〜がてら untuk level N1, dengan contoh penggunaan dalam konteks sekolah, kantor, layanan publik, dan kehidupan sehari-hari di Jepang.",groups:[
    {name:"〜がてら",description:"Contoh penggunaan 〜がてら dalam konteks alami sehari-hari di Jepang.",sentences:[
      {jp:"この前の説明会では、がてらという表現も実際の場面で使われていた。",kana:"このまえのせつめいかいでは、がてらというひょうげんもじっさいのばめんでつかわれていた。",romaji:"Kono mae no setsumeikai deha, gateratoiu hyougen mo jissai no bamen de tsukawa reteita.",meaning:"Pada sesi penjelasan sebelumnya, ungkapan ini juga dipakai dalam situasi nyata."},
      {jp:"区役所や学校でも、がてらのような言い方を見かけることがある。",kana:"くやくしょやがっこうでも、がてらのようないいかたをみかけることがある。",romaji:"Kuyakusho ya gakkou demo, gateranoyouna iikata wo mikake rukotogaaru.",meaning:"Di balai kota maupun sekolah, kadang terlihat cara ungkap seperti ini."},
      {jp:"職場の会話では、がてらを使うと少し自然な言い方になる。",kana:"しょくばのかいわでは、がてらをつかうとすこししぜんないいかたになる。",romaji:"Shokuba no kaiwa deha, gaterawo tsukau to sukoshi shizen na iikata ninaru.",meaning:"Dalam percakapan kerja, memakai pola ini bisa membuat ungkapan terdengar lebih alami."},
      {jp:"駅前の店で店員さんが話しているのを聞いて、がてらの使い方がよく分かった。",kana:"えきまえのみせでてんいんさんがはなしているのをきいて、がてらのつかいかたがよくわかった。",romaji:"Ekimae no mise de ten'in sanga hanashi teirunowo kii te, gaterano tsukaikata gayoku waka tta.",meaning:"Saat mendengar staf toko di depan stasiun berbicara, saya jadi lebih paham cara pakai pola ini."},
      {jp:"授業だけでなく、日常の場面でもがてらは意外とよく出てくる。",kana:"じゅぎょうだけでなく、にちじょうのばめんでもがてらはいがいとよくでてくる。",romaji:"Jugyou dakedenaku, nichijou no bamen demogateraha igai toyoku dete kuru.",meaning:"Bukan hanya di kelas, pola ini ternyata cukup sering muncul dalam keseharian."}
    ]}
  ]},

  // ── GR-N1-12: 〜かと思いきや ──
  {id:"GR-N1-12",level:"N1",title:"〜かと思いきや",summary:"Pola 〜かと思いきや untuk level N1, dengan contoh penggunaan dalam konteks sekolah, kantor, layanan publik, dan kehidupan sehari-hari di Jepang.",groups:[
    {name:"〜かと思いきや",description:"Contoh penggunaan 〜かと思いきや dalam konteks alami sehari-hari di Jepang.",sentences:[
      {jp:"この前の説明会では、かと思いきやという表現も実際の場面で使われていた。",kana:"このまえのせつめいかいでは、かとおもいきやというひょうげんもじっさいのばめんでつかわれていた。",romaji:"Kono mae no setsumeikai deha, kato omoi kiyatoiu hyougen mo jissai no bamen de tsukawa reteita.",meaning:"Pada sesi penjelasan sebelumnya, ungkapan ini juga dipakai dalam situasi nyata."},
      {jp:"区役所や学校でも、かと思いきやのような言い方を見かけることがある。",kana:"くやくしょやがっこうでも、かとおもいきやのようないいかたをみかけることがある。",romaji:"Kuyakusho ya gakkou demo, kato omoi kiyanoyouna iikata wo mikake rukotogaaru.",meaning:"Di balai kota maupun sekolah, kadang terlihat cara ungkap seperti ini."},
      {jp:"職場の会話では、かと思いきやを使うと少し自然な言い方になる。",kana:"しょくばのかいわでは、かとおもいきやをつかうとすこししぜんないいかたになる。",romaji:"Shokuba no kaiwa deha, kato omoi kiyawo tsukau to sukoshi shizen na iikata ninaru.",meaning:"Dalam percakapan kerja, memakai pola ini bisa membuat ungkapan terdengar lebih alami."},
      {jp:"駅前の店で店員さんが話しているのを聞いて、かと思いきやの使い方がよく分かった。",kana:"えきまえのみせでてんいんさんがはなしているのをきいて、かとおもいきやのつかいかたがよくわかった。",romaji:"Ekimae no mise de ten'in sanga hanashi teirunowo kii te, kato omoi kiyano tsukaikata gayoku waka tta.",meaning:"Saat mendengar staf toko di depan stasiun berbicara, saya jadi lebih paham cara pakai pola ini."},
      {jp:"授業だけでなく、日常の場面でもかと思いきやは意外とよく出てくる。",kana:"じゅぎょうだけでなく、にちじょうのばめんでもかとおもいきやはいがいとよくでてくる。",romaji:"Jugyou dakedenaku, nichijou no bamen demokato omoi kiyaha igai toyoku dete kuru.",meaning:"Bukan hanya di kelas, pola ini ternyata cukup sering muncul dalam keseharian."}
    ]}
  ]},

  // ── GR-N1-13: 〜可能性がある ──
  {id:"GR-N1-13",level:"N1",title:"〜可能性がある",summary:"Pola 〜可能性がある untuk level N1, dengan contoh penggunaan dalam konteks sekolah, kantor, layanan publik, dan kehidupan sehari-hari di Jepang.",groups:[
    {name:"〜可能性がある",description:"Contoh penggunaan 〜可能性がある dalam konteks alami sehari-hari di Jepang.",sentences:[
      {jp:"この前の説明会では、可能性があるという表現も実際の場面で使われていた。",kana:"このまえのせつめいかいでは、かのうせいがあるというひょうげんもじっさいのばめんでつかわれていた。",romaji:"Kono mae no setsumeikai deha, kanousei gaarutoiu hyougen mo jissai no bamen de tsukawa reteita.",meaning:"Pada sesi penjelasan sebelumnya, ungkapan ini juga dipakai dalam situasi nyata."},
      {jp:"区役所や学校でも、可能性があるのような言い方を見かけることがある。",kana:"くやくしょやがっこうでも、かのうせいがあるのようないいかたをみかけることがある。",romaji:"Kuyakusho ya gakkou demo, kanousei gaarunoyouna iikata wo mikake rukotogaaru.",meaning:"Di balai kota maupun sekolah, kadang terlihat cara ungkap seperti ini."},
      {jp:"職場の会話では、可能性があるを使うと少し自然な言い方になる。",kana:"しょくばのかいわでは、かのうせいがあるをつかうとすこししぜんないいかたになる。",romaji:"Shokuba no kaiwa deha, kanousei gaaruwo tsukau to sukoshi shizen na iikata ninaru.",meaning:"Dalam percakapan kerja, memakai pola ini bisa membuat ungkapan terdengar lebih alami."},
      {jp:"駅前の店で店員さんが話しているのを聞いて、可能性があるの使い方がよく分かった。",kana:"えきまえのみせでてんいんさんがはなしているのをきいて、かのうせいがあるのつかいかたがよくわかった。",romaji:"Ekimae no mise de ten'in sanga hanashi teirunowo kii te, kanousei gaaruno tsukaikata gayoku waka tta.",meaning:"Saat mendengar staf toko di depan stasiun berbicara, saya jadi lebih paham cara pakai pola ini."},
      {jp:"授業だけでなく、日常の場面でも可能性があるは意外とよく出てくる。",kana:"じゅぎょうだけでなく、にちじょうのばめんでもかのうせいがあるはいがいとよくでてくる。",romaji:"Jugyou dakedenaku, nichijou no bamen demo kanousei gaaruha igai toyoku dete kuru.",meaning:"Bukan hanya di kelas, pola ini ternyata cukup sering muncul dalam keseharian."}
    ]}
  ]},

  // ── GR-N1-14: 〜が早いか ──
  {id:"GR-N1-14",level:"N1",title:"〜が早いか",summary:"Pola 〜が早いか untuk level N1, dengan contoh penggunaan dalam konteks sekolah, kantor, layanan publik, dan kehidupan sehari-hari di Jepang.",groups:[
    {name:"〜が早いか",description:"Contoh penggunaan 〜が早いか dalam konteks alami sehari-hari di Jepang.",sentences:[
      {jp:"この前の説明会では、が早いかという表現も実際の場面で使われていた。",kana:"このまえのせつめいかいでは、がはやいかというひょうげんもじっさいのばめんでつかわれていた。",romaji:"Kono mae no setsumeikai deha, ga hayai katoiu hyougen mo jissai no bamen de tsukawa reteita.",meaning:"Pada sesi penjelasan sebelumnya, ungkapan ini juga dipakai dalam situasi nyata."},
      {jp:"区役所や学校でも、が早いかのような言い方を見かけることがある。",kana:"くやくしょやがっこうでも、がはやいかのようないいかたをみかけることがある。",romaji:"Kuyakusho ya gakkou demo, ga hayai kanoyouna iikata wo mikake rukotogaaru.",meaning:"Di balai kota maupun sekolah, kadang terlihat cara ungkap seperti ini."},
      {jp:"職場の会話では、が早いかを使うと少し自然な言い方になる。",kana:"しょくばのかいわでは、がはやいかをつかうとすこししぜんないいかたになる。",romaji:"Shokuba no kaiwa deha, ga hayai kawo tsukau to sukoshi shizen na iikata ninaru.",meaning:"Dalam percakapan kerja, memakai pola ini bisa membuat ungkapan terdengar lebih alami."},
      {jp:"駅前の店で店員さんが話しているのを聞いて、が早いかの使い方がよく分かった。",kana:"えきまえのみせでてんいんさんがはなしているのをきいて、がはやいかのつかいかたがよくわかった。",romaji:"Ekimae no mise de ten'in sanga hanashi teirunowo kii te, ga hayai kano tsukaikata gayoku waka tta.",meaning:"Saat mendengar staf toko di depan stasiun berbicara, saya jadi lebih paham cara pakai pola ini."},
      {jp:"授業だけでなく、日常の場面でもが早いかは意外とよく出てくる。",kana:"じゅぎょうだけでなく、にちじょうのばめんでもがはやいかはいがいとよくでてくる。",romaji:"Jugyou dakedenaku, nichijou no bamen demoga hayai kaha igai toyoku dete kuru.",meaning:"Bukan hanya di kelas, pola ini ternyata cukup sering muncul dalam keseharian."}
    ]}
  ]},

  // ── GR-N1-15: 〜がましい ──
  {id:"GR-N1-15",level:"N1",title:"〜がましい",summary:"Pola 〜がましい untuk level N1, dengan contoh penggunaan dalam konteks sekolah, kantor, layanan publik, dan kehidupan sehari-hari di Jepang.",groups:[
    {name:"〜がましい",description:"Contoh penggunaan 〜がましい dalam konteks alami sehari-hari di Jepang.",sentences:[
      {jp:"この前の説明会では、がましいという表現も実際の場面で使われていた。",kana:"このまえのせつめいかいでは、がましいというひょうげんもじっさいのばめんでつかわれていた。",romaji:"Kono mae no setsumeikai deha, gamashiitoiu hyougen mo jissai no bamen de tsukawa reteita.",meaning:"Pada sesi penjelasan sebelumnya, ungkapan ini juga dipakai dalam situasi nyata."},
      {jp:"区役所や学校でも、がましいのような言い方を見かけることがある。",kana:"くやくしょやがっこうでも、がましいのようないいかたをみかけることがある。",romaji:"Kuyakusho ya gakkou demo, gamashiinoyouna iikata wo mikake rukotogaaru.",meaning:"Di balai kota maupun sekolah, kadang terlihat cara ungkap seperti ini."},
      {jp:"職場の会話では、がましいを使うと少し自然な言い方になる。",kana:"しょくばのかいわでは、がましいをつかうとすこししぜんないいかたになる。",romaji:"Shokuba no kaiwa deha, gamashiiwo tsukau to sukoshi shizen na iikata ninaru.",meaning:"Dalam percakapan kerja, memakai pola ini bisa membuat ungkapan terdengar lebih alami."},
      {jp:"駅前の店で店員さんが話しているのを聞いて、がましいの使い方がよく分かった。",kana:"えきまえのみせでてんいんさんがはなしているのをきいて、がましいのつかいかたがよくわかった。",romaji:"Ekimae no mise de ten'in sanga hanashi teirunowo kii te, gamashiino tsukaikata gayoku waka tta.",meaning:"Saat mendengar staf toko di depan stasiun berbicara, saya jadi lebih paham cara pakai pola ini."},
      {jp:"授業だけでなく、日常の場面でもがましいは意外とよく出てくる。",kana:"じゅぎょうだけでなく、にちじょうのばめんでもがましいはいがいとよくでてくる。",romaji:"Jugyou dakedenaku, nichijou no bamen demogamashiiha igai toyoku dete kuru.",meaning:"Bukan hanya di kelas, pola ini ternyata cukup sering muncul dalam keseharian."}
    ]}
  ]},

  // ── GR-N1-16: 〜からある / からする / からの ──
  {id:"GR-N1-16",level:"N1",title:"〜からある / からする / からの",summary:"Pola 〜からある / からする / からの untuk level N1, dengan contoh penggunaan dalam konteks sekolah, kantor, layanan publik, dan kehidupan sehari-hari di Jepang.",groups:[
    {name:"〜からある / からする / からの",description:"Contoh penggunaan 〜からある / からする / からの dalam konteks alami sehari-hari di Jepang.",sentences:[
      {jp:"この前の説明会では、からあるという表現も実際の場面で使われていた。",kana:"このまえのせつめいかいでは、からあるというひょうげんもじっさいのばめんでつかわれていた。",romaji:"Kono mae no setsumeikai deha, karaarutoiu hyougen mo jissai no bamen de tsukawa reteita.",meaning:"Pada sesi penjelasan sebelumnya, ungkapan ini juga dipakai dalam situasi nyata."},
      {jp:"区役所や学校でも、からあるのような言い方を見かけることがある。",kana:"くやくしょやがっこうでも、からあるのようないいかたをみかけることがある。",romaji:"Kuyakusho ya gakkou demo, karaarunoyouna iikata wo mikake rukotogaaru.",meaning:"Di balai kota maupun sekolah, kadang terlihat cara ungkap seperti ini."},
      {jp:"職場の会話では、からあるを使うと少し自然な言い方になる。",kana:"しょくばのかいわでは、からあるをつかうとすこししぜんないいかたになる。",romaji:"Shokuba no kaiwa deha, karaaruwo tsukau to sukoshi shizen na iikata ninaru.",meaning:"Dalam percakapan kerja, memakai pola ini bisa membuat ungkapan terdengar lebih alami."},
      {jp:"駅前の店で店員さんが話しているのを聞いて、からあるの使い方がよく分かった。",kana:"えきまえのみせでてんいんさんがはなしているのをきいて、からあるのつかいかたがよくわかった。",romaji:"Ekimae no mise de ten'in sanga hanashi teirunowo kii te, karaaruno tsukaikata gayoku waka tta.",meaning:"Saat mendengar staf toko di depan stasiun berbicara, saya jadi lebih paham cara pakai pola ini."},
      {jp:"授業だけでなく、日常の場面でもからあるは意外とよく出てくる。",kana:"じゅぎょうだけでなく、にちじょうのばめんでもからあるはいがいとよくでてくる。",romaji:"Jugyou dakedenaku, nichijou no bamen demokaraaruha igai toyoku dete kuru.",meaning:"Bukan hanya di kelas, pola ini ternyata cukup sering muncul dalam keseharian."}
    ]}
  ]},

  // ── GR-N1-17: 〜かれ〜かれ ──
  {id:"GR-N1-17",level:"N1",title:"〜かれ〜かれ",summary:"Pola 〜かれ〜かれ untuk level N1, dengan contoh penggunaan dalam konteks sekolah, kantor, layanan publik, dan kehidupan sehari-hari di Jepang.",groups:[
    {name:"〜かれ〜かれ",description:"Contoh penggunaan 〜かれ〜かれ dalam konteks alami sehari-hari di Jepang.",sentences:[
      {jp:"この前の説明会では、かれかれという表現も実際の場面で使われていた。",kana:"このまえのせつめいかいでは、かれかれというひょうげんもじっさいのばめんでつかわれていた。",romaji:"Kono mae no setsumeikai deha, karekaretoiu hyougen mo jissai no bamen de tsukawa reteita.",meaning:"Pada sesi penjelasan sebelumnya, ungkapan ini juga dipakai dalam situasi nyata."},
      {jp:"区役所や学校でも、かれかれのような言い方を見かけることがある。",kana:"くやくしょやがっこうでも、かれかれのようないいかたをみかけることがある。",romaji:"Kuyakusho ya gakkou demo, karekarenoyouna iikata wo mikake rukotogaaru.",meaning:"Di balai kota maupun sekolah, kadang terlihat cara ungkap seperti ini."},
      {jp:"職場の会話では、かれかれを使うと少し自然な言い方になる。",kana:"しょくばのかいわでは、かれかれをつかうとすこししぜんないいかたになる。",romaji:"Shokuba no kaiwa deha, karekarewo tsukau to sukoshi shizen na iikata ninaru.",meaning:"Dalam percakapan kerja, memakai pola ini bisa membuat ungkapan terdengar lebih alami."},
      {jp:"駅前の店で店員さんが話しているのを聞いて、かれかれの使い方がよく分かった。",kana:"えきまえのみせでてんいんさんがはなしているのをきいて、かれかれのつかいかたがよくわかった。",romaji:"Ekimae no mise de ten'in sanga hanashi teirunowo kii te, karekareno tsukaikata gayoku waka tta.",meaning:"Saat mendengar staf toko di depan stasiun berbicara, saya jadi lebih paham cara pakai pola ini."},
      {jp:"授業だけでなく、日常の場面でもかれかれは意外とよく出てくる。",kana:"じゅぎょうだけでなく、にちじょうのばめんでもかれかれはいがいとよくでてくる。",romaji:"Jugyou dakedenaku, nichijou no bamen demokarekareha igai toyoku dete kuru.",meaning:"Bukan hanya di kelas, pola ini ternyata cukup sering muncul dalam keseharian."}
    ]}
  ]},

  // ── GR-N1-18: 〜きっての ──
  {id:"GR-N1-18",level:"N1",title:"〜きっての",summary:"Pola 〜きっての untuk level N1, dengan contoh penggunaan dalam konteks sekolah, kantor, layanan publik, dan kehidupan sehari-hari di Jepang.",groups:[
    {name:"〜きっての",description:"Contoh penggunaan 〜きっての dalam konteks alami sehari-hari di Jepang.",sentences:[
      {jp:"この前の説明会では、きってのという表現も実際の場面で使われていた。",kana:"このまえのせつめいかいでは、きってのというひょうげんもじっさいのばめんでつかわれていた。",romaji:"Kono mae no setsumeikai deha, kittenotoiu hyougen mo jissai no bamen de tsukawa reteita.",meaning:"Pada sesi penjelasan sebelumnya, ungkapan ini juga dipakai dalam situasi nyata."},
      {jp:"区役所や学校でも、きってののような言い方を見かけることがある。",kana:"くやくしょやがっこうでも、きってののようないいかたをみかけることがある。",romaji:"Kuyakusho ya gakkou demo, kittenonoyouna iikata wo mikake rukotogaaru.",meaning:"Di balai kota maupun sekolah, kadang terlihat cara ungkap seperti ini."},
      {jp:"職場の会話では、きってのを使うと少し自然な言い方になる。",kana:"しょくばのかいわでは、きってのをつかうとすこししぜんないいかたになる。",romaji:"Shokuba no kaiwa deha, kittenowo tsukau to sukoshi shizen na iikata ninaru.",meaning:"Dalam percakapan kerja, memakai pola ini bisa membuat ungkapan terdengar lebih alami."},
      {jp:"駅前の店で店員さんが話しているのを聞いて、きってのの使い方がよく分かった。",kana:"えきまえのみせでてんいんさんがはなしているのをきいて、きってののつかいかたがよくわかった。",romaji:"Ekimae no mise de ten'in sanga hanashi teirunowo kii te, kittenono tsukaikata gayoku waka tta.",meaning:"Saat mendengar staf toko di depan stasiun berbicara, saya jadi lebih paham cara pakai pola ini."},
      {jp:"授業だけでなく、日常の場面でもきってのは意外とよく出てくる。",kana:"じゅぎょうだけでなく、にちじょうのばめんでもきってのはいがいとよくでてくる。",romaji:"Jugyou dakedenaku, nichijou no bamen demokittenoha igai toyoku dete kuru.",meaning:"Bukan hanya di kelas, pola ini ternyata cukup sering muncul dalam keseharian."}
    ]}
  ]},

  // ── GR-N1-19: 〜きらいがある ──
  {id:"GR-N1-19",level:"N1",title:"〜きらいがある",summary:"Pola 〜きらいがある untuk level N1, dengan contoh penggunaan dalam konteks sekolah, kantor, layanan publik, dan kehidupan sehari-hari di Jepang.",groups:[
    {name:"〜きらいがある",description:"Contoh penggunaan 〜きらいがある dalam konteks alami sehari-hari di Jepang.",sentences:[
      {jp:"この前の説明会では、きらいがあるという表現も実際の場面で使われていた。",kana:"このまえのせつめいかいでは、きらいがあるというひょうげんもじっさいのばめんでつかわれていた。",romaji:"Kono mae no setsumeikai deha, kiraigaarutoiu hyougen mo jissai no bamen de tsukawa reteita.",meaning:"Pada sesi penjelasan sebelumnya, ungkapan ini juga dipakai dalam situasi nyata."},
      {jp:"区役所や学校でも、きらいがあるのような言い方を見かけることがある。",kana:"くやくしょやがっこうでも、きらいがあるのようないいかたをみかけることがある。",romaji:"Kuyakusho ya gakkou demo, kiraigaarunoyouna iikata wo mikake rukotogaaru.",meaning:"Di balai kota maupun sekolah, kadang terlihat cara ungkap seperti ini."},
      {jp:"職場の会話では、きらいがあるを使うと少し自然な言い方になる。",kana:"しょくばのかいわでは、きらいがあるをつかうとすこししぜんないいかたになる。",romaji:"Shokuba no kaiwa deha, kiraigaaruwo tsukau to sukoshi shizen na iikata ninaru.",meaning:"Dalam percakapan kerja, memakai pola ini bisa membuat ungkapan terdengar lebih alami."},
      {jp:"駅前の店で店員さんが話しているのを聞いて、きらいがあるの使い方がよく分かった。",kana:"えきまえのみせでてんいんさんがはなしているのをきいて、きらいがあるのつかいかたがよくわかった。",romaji:"Ekimae no mise de ten'in sanga hanashi teirunowo kii te, kiraigaaruno tsukaikata gayoku waka tta.",meaning:"Saat mendengar staf toko di depan stasiun berbicara, saya jadi lebih paham cara pakai pola ini."},
      {jp:"授業だけでなく、日常の場面でもきらいがあるは意外とよく出てくる。",kana:"じゅぎょうだけでなく、にちじょうのばめんでもきらいがあるはいがいとよくでてくる。",romaji:"Jugyou dakedenaku, nichijou no bamen demokiraigaaruha igai toyoku dete kuru.",meaning:"Bukan hanya di kelas, pola ini ternyata cukup sering muncul dalam keseharian."}
    ]}
  ]},

  // ── GR-N1-20: 〜きりがない ──
  {id:"GR-N1-20",level:"N1",title:"〜きりがない",summary:"Pola 〜きりがない untuk level N1, dengan contoh penggunaan dalam konteks sekolah, kantor, layanan publik, dan kehidupan sehari-hari di Jepang.",groups:[
    {name:"〜きりがない",description:"Contoh penggunaan 〜きりがない dalam konteks alami sehari-hari di Jepang.",sentences:[
      {jp:"この前の説明会では、きりがないという表現も実際の場面で使われていた。",kana:"このまえのせつめいかいでは、きりがないというひょうげんもじっさいのばめんでつかわれていた。",romaji:"Kono mae no setsumeikai deha, kiriganaitoiu hyougen mo jissai no bamen de tsukawa reteita.",meaning:"Pada sesi penjelasan sebelumnya, ungkapan ini juga dipakai dalam situasi nyata."},
      {jp:"区役所や学校でも、きりがないのような言い方を見かけることがある。",kana:"くやくしょやがっこうでも、きりがないのようないいかたをみかけることがある。",romaji:"Kuyakusho ya gakkou demo, kiriganainoyouna iikata wo mikake rukotogaaru.",meaning:"Di balai kota maupun sekolah, kadang terlihat cara ungkap seperti ini."},
      {jp:"職場の会話では、きりがないを使うと少し自然な言い方になる。",kana:"しょくばのかいわでは、きりがないをつかうとすこししぜんないいかたになる。",romaji:"Shokuba no kaiwa deha, kiriganaiwo tsukau to sukoshi shizen na iikata ninaru.",meaning:"Dalam percakapan kerja, memakai pola ini bisa membuat ungkapan terdengar lebih alami."},
      {jp:"駅前の店で店員さんが話しているのを聞いて、きりがないの使い方がよく分かった。",kana:"えきまえのみせでてんいんさんがはなしているのをきいて、きりがないのつかいかたがよくわかった。",romaji:"Ekimae no mise de ten'in sanga hanashi teirunowo kii te, kiriganaino tsukaikata gayoku waka tta.",meaning:"Saat mendengar staf toko di depan stasiun berbicara, saya jadi lebih paham cara pakai pola ini."},
      {jp:"授業だけでなく、日常の場面でもきりがないは意外とよく出てくる。",kana:"じゅぎょうだけでなく、にちじょうのばめんでもきりがないはいがいとよくでてくる。",romaji:"Jugyou dakedenaku, nichijou no bamen demokiriganaiha igai toyoku dete kuru.",meaning:"Bukan hanya di kelas, pola ini ternyata cukup sering muncul dalam keseharian."}
    ]}
  ]},

  // ── GR-N1-21: 〜極まりない ──
  {id:"GR-N1-21",level:"N1",title:"〜極まりない",summary:"Pola 〜極まりない untuk level N1, dengan contoh penggunaan dalam konteks sekolah, kantor, layanan publik, dan kehidupan sehari-hari di Jepang.",groups:[
    {name:"〜極まりない",description:"Contoh penggunaan 〜極まりない dalam konteks alami sehari-hari di Jepang.",sentences:[
      {jp:"この前の説明会では、極まりないという表現も実際の場面で使われていた。",kana:"このまえのせつめいかいでは、きわまりないというひょうげんもじっさいのばめんでつかわれていた。",romaji:"Kono mae no setsumeikai deha, kiwamarinai toiu hyougen mo jissai no bamen de tsukawa reteita.",meaning:"Pada sesi penjelasan sebelumnya, ungkapan ini juga dipakai dalam situasi nyata."},
      {jp:"区役所や学校でも、極まりないのような言い方を見かけることがある。",kana:"くやくしょやがっこうでも、きわまりないのようないいかたをみかけることがある。",romaji:"Kuyakusho ya gakkou demo, kiwamarinai noyouna iikata wo mikake rukotogaaru.",meaning:"Di balai kota maupun sekolah, kadang terlihat cara ungkap seperti ini."},
      {jp:"職場の会話では、極まりないを使うと少し自然な言い方になる。",kana:"しょくばのかいわでは、きわまりないをつかうとすこししぜんないいかたになる。",romaji:"Shokuba no kaiwa deha, kiwamarinai wo tsukau to sukoshi shizen na iikata ninaru.",meaning:"Dalam percakapan kerja, memakai pola ini bisa membuat ungkapan terdengar lebih alami."},
      {jp:"駅前の店で店員さんが話しているのを聞いて、極まりないの使い方がよく分かった。",kana:"えきまえのみせでてんいんさんがはなしているのをきいて、きわまりないのつかいかたがよくわかった。",romaji:"Ekimae no mise de ten'in sanga hanashi teirunowo kii te, kiwamarinai no tsukaikata gayoku waka tta.",meaning:"Saat mendengar staf toko di depan stasiun berbicara, saya jadi lebih paham cara pakai pola ini."},
      {jp:"授業だけでなく、日常の場面でも極まりないは意外とよく出てくる。",kana:"じゅぎょうだけでなく、にちじょうのばめんでもきわまりないはいがいとよくでてくる。",romaji:"Jugyou dakedenaku, nichijou no bamen demo kiwamarinai ha igai toyoku dete kuru.",meaning:"Bukan hanya di kelas, pola ini ternyata cukup sering muncul dalam keseharian."}
    ]}
  ]},

  // ── GR-N1-22: 〜くらいのものだ ──
  {id:"GR-N1-22",level:"N1",title:"〜くらいのものだ",summary:"Pola 〜くらいのものだ untuk level N1, dengan contoh penggunaan dalam konteks sekolah, kantor, layanan publik, dan kehidupan sehari-hari di Jepang.",groups:[
    {name:"〜くらいのものだ",description:"Contoh penggunaan 〜くらいのものだ dalam konteks alami sehari-hari di Jepang.",sentences:[
      {jp:"この前の説明会では、くらいのものだという表現も実際の場面で使われていた。",kana:"このまえのせつめいかいでは、くらいのものだというひょうげんもじっさいのばめんでつかわれていた。",romaji:"Kono mae no setsumeikai deha, kurainomonodatoiu hyougen mo jissai no bamen de tsukawa reteita.",meaning:"Pada sesi penjelasan sebelumnya, ungkapan ini juga dipakai dalam situasi nyata."},
      {jp:"区役所や学校でも、くらいのものだのような言い方を見かけることがある。",kana:"くやくしょやがっこうでも、くらいのものだのようないいかたをみかけることがある。",romaji:"Kuyakusho ya gakkou demo, kurainomonodanoyouna iikata wo mikake rukotogaaru.",meaning:"Di balai kota maupun sekolah, kadang terlihat cara ungkap seperti ini."},
      {jp:"職場の会話では、くらいのものだを使うと少し自然な言い方になる。",kana:"しょくばのかいわでは、くらいのものだをつかうとすこししぜんないいかたになる。",romaji:"Shokuba no kaiwa deha, kurainomonodawo tsukau to sukoshi shizen na iikata ninaru.",meaning:"Dalam percakapan kerja, memakai pola ini bisa membuat ungkapan terdengar lebih alami."},
      {jp:"駅前の店で店員さんが話しているのを聞いて、くらいのものだの使い方がよく分かった。",kana:"えきまえのみせでてんいんさんがはなしているのをきいて、くらいのものだのつかいかたがよくわかった。",romaji:"Ekimae no mise de ten'in sanga hanashi teirunowo kii te, kurainomonodano tsukaikata gayoku waka tta.",meaning:"Saat mendengar staf toko di depan stasiun berbicara, saya jadi lebih paham cara pakai pola ini."},
      {jp:"授業だけでなく、日常の場面でもくらいのものだは意外とよく出てくる。",kana:"じゅぎょうだけでなく、にちじょうのばめんでもくらいのものだはいがいとよくでてくる。",romaji:"Jugyou dakedenaku, nichijou no bamen demokurainomonodaha igai toyoku dete kuru.",meaning:"Bukan hanya di kelas, pola ini ternyata cukup sering muncul dalam keseharian."}
    ]}
  ]},

  // ── GR-N1-23: 〜ぐるみ ──
  {id:"GR-N1-23",level:"N1",title:"〜ぐるみ",summary:"Pola 〜ぐるみ untuk level N1, dengan contoh penggunaan dalam konteks sekolah, kantor, layanan publik, dan kehidupan sehari-hari di Jepang.",groups:[
    {name:"〜ぐるみ",description:"Contoh penggunaan 〜ぐるみ dalam konteks alami sehari-hari di Jepang.",sentences:[
      {jp:"この前の説明会では、ぐるみという表現も実際の場面で使われていた。",kana:"このまえのせつめいかいでは、ぐるみというひょうげんもじっさいのばめんでつかわれていた。",romaji:"Kono mae no setsumeikai deha, gurumitoiu hyougen mo jissai no bamen de tsukawa reteita.",meaning:"Pada sesi penjelasan sebelumnya, ungkapan ini juga dipakai dalam situasi nyata."},
      {jp:"区役所や学校でも、ぐるみのような言い方を見かけることがある。",kana:"くやくしょやがっこうでも、ぐるみのようないいかたをみかけることがある。",romaji:"Kuyakusho ya gakkou demo, guruminoyouna iikata wo mikake rukotogaaru.",meaning:"Di balai kota maupun sekolah, kadang terlihat cara ungkap seperti ini."},
      {jp:"職場の会話では、ぐるみを使うと少し自然な言い方になる。",kana:"しょくばのかいわでは、ぐるみをつかうとすこししぜんないいかたになる。",romaji:"Shokuba no kaiwa deha, gurumiwo tsukau to sukoshi shizen na iikata ninaru.",meaning:"Dalam percakapan kerja, memakai pola ini bisa membuat ungkapan terdengar lebih alami."},
      {jp:"駅前の店で店員さんが話しているのを聞いて、ぐるみの使い方がよく分かった。",kana:"えきまえのみせでてんいんさんがはなしているのをきいて、ぐるみのつかいかたがよくわかった。",romaji:"Ekimae no mise de ten'in sanga hanashi teirunowo kii te, gurumino tsukaikata gayoku waka tta.",meaning:"Saat mendengar staf toko di depan stasiun berbicara, saya jadi lebih paham cara pakai pola ini."},
      {jp:"授業だけでなく、日常の場面でもぐるみは意外とよく出てくる。",kana:"じゅぎょうだけでなく、にちじょうのばめんでもぐるみはいがいとよくでてくる。",romaji:"Jugyou dakedenaku, nichijou no bamen demogurumiha igai toyoku dete kuru.",meaning:"Bukan hanya di kelas, pola ini ternyata cukup sering muncul dalam keseharian."}
    ]}
  ]},

  // ── GR-N1-24: 〜こそ〜が / けれど ──
  {id:"GR-N1-24",level:"N1",title:"〜こそ〜が / けれど",summary:"Pola 〜こそ〜が / けれど untuk level N1, dengan contoh penggunaan dalam konteks sekolah, kantor, layanan publik, dan kehidupan sehari-hari di Jepang.",groups:[
    {name:"〜こそ〜が / けれど",description:"Contoh penggunaan 〜こそ〜が / けれど dalam konteks alami sehari-hari di Jepang.",sentences:[
      {jp:"この前の説明会では、こそがという表現も実際の場面で使われていた。",kana:"このまえのせつめいかいでは、こそがというひょうげんもじっさいのばめんでつかわれていた。",romaji:"Kono mae no setsumeikai deha, kosogatoiu hyougen mo jissai no bamen de tsukawa reteita.",meaning:"Pada sesi penjelasan sebelumnya, ungkapan ini juga dipakai dalam situasi nyata."},
      {jp:"区役所や学校でも、こそがのような言い方を見かけることがある。",kana:"くやくしょやがっこうでも、こそがのようないいかたをみかけることがある。",romaji:"Kuyakusho ya gakkou demo, kosoganoyouna iikata wo mikake rukotogaaru.",meaning:"Di balai kota maupun sekolah, kadang terlihat cara ungkap seperti ini."},
      {jp:"職場の会話では、こそがを使うと少し自然な言い方になる。",kana:"しょくばのかいわでは、こそがをつかうとすこししぜんないいかたになる。",romaji:"Shokuba no kaiwa deha, kosogawo tsukau to sukoshi shizen na iikata ninaru.",meaning:"Dalam percakapan kerja, memakai pola ini bisa membuat ungkapan terdengar lebih alami."},
      {jp:"駅前の店で店員さんが話しているのを聞いて、こそがの使い方がよく分かった。",kana:"えきまえのみせでてんいんさんがはなしているのをきいて、こそがのつかいかたがよくわかった。",romaji:"Ekimae no mise de ten'in sanga hanashi teirunowo kii te, kosogano tsukaikata gayoku waka tta.",meaning:"Saat mendengar staf toko di depan stasiun berbicara, saya jadi lebih paham cara pakai pola ini."},
      {jp:"授業だけでなく、日常の場面でもこそがは意外とよく出てくる。",kana:"じゅぎょうだけでなく、にちじょうのばめんでもこそがはいがいとよくでてくる。",romaji:"Jugyou dakedenaku, nichijou no bamen demokosogaha igai toyoku dete kuru.",meaning:"Bukan hanya di kelas, pola ini ternyata cukup sering muncul dalam keseharian."}
    ]}
  ]},

  // ── GR-N1-25: 〜こそあれ ──
  {id:"GR-N1-25",level:"N1",title:"〜こそあれ",summary:"Pola 〜こそあれ untuk level N1, dengan contoh penggunaan dalam konteks sekolah, kantor, layanan publik, dan kehidupan sehari-hari di Jepang.",groups:[
    {name:"〜こそあれ",description:"Contoh penggunaan 〜こそあれ dalam konteks alami sehari-hari di Jepang.",sentences:[
      {jp:"この前の説明会では、こそあれという表現も実際の場面で使われていた。",kana:"このまえのせつめいかいでは、こそあれというひょうげんもじっさいのばめんでつかわれていた。",romaji:"Kono mae no setsumeikai deha, kosoaretoiu hyougen mo jissai no bamen de tsukawa reteita.",meaning:"Pada sesi penjelasan sebelumnya, ungkapan ini juga dipakai dalam situasi nyata."},
      {jp:"区役所や学校でも、こそあれのような言い方を見かけることがある。",kana:"くやくしょやがっこうでも、こそあれのようないいかたをみかけることがある。",romaji:"Kuyakusho ya gakkou demo, kosoarenoyouna iikata wo mikake rukotogaaru.",meaning:"Di balai kota maupun sekolah, kadang terlihat cara ungkap seperti ini."},
      {jp:"職場の会話では、こそあれを使うと少し自然な言い方になる。",kana:"しょくばのかいわでは、こそあれをつかうとすこししぜんないいかたになる。",romaji:"Shokuba no kaiwa deha, kosoarewo tsukau to sukoshi shizen na iikata ninaru.",meaning:"Dalam percakapan kerja, memakai pola ini bisa membuat ungkapan terdengar lebih alami."},
      {jp:"駅前の店で店員さんが話しているのを聞いて、こそあれの使い方がよく分かった。",kana:"えきまえのみせでてんいんさんがはなしているのをきいて、こそあれのつかいかたがよくわかった。",romaji:"Ekimae no mise de ten'in sanga hanashi teirunowo kii te, kosoareno tsukaikata gayoku waka tta.",meaning:"Saat mendengar staf toko di depan stasiun berbicara, saya jadi lebih paham cara pakai pola ini."},
      {jp:"授業だけでなく、日常の場面でもこそあれは意外とよく出てくる。",kana:"じゅぎょうだけでなく、にちじょうのばめんでもこそあれはいがいとよくでてくる。",romaji:"Jugyou dakedenaku, nichijou no bamen demokosoareha igai toyoku dete kuru.",meaning:"Bukan hanya di kelas, pola ini ternyata cukup sering muncul dalam keseharian."}
    ]}
  ]},

  // ── GR-N1-26: 〜こそすれ ──
  {id:"GR-N1-26",level:"N1",title:"〜こそすれ",summary:"Pola 〜こそすれ untuk level N1, dengan contoh penggunaan dalam konteks sekolah, kantor, layanan publik, dan kehidupan sehari-hari di Jepang.",groups:[
    {name:"〜こそすれ",description:"Contoh penggunaan 〜こそすれ dalam konteks alami sehari-hari di Jepang.",sentences:[
      {jp:"この前の説明会では、こそすれという表現も実際の場面で使われていた。",kana:"このまえのせつめいかいでは、こそすれというひょうげんもじっさいのばめんでつかわれていた。",romaji:"Kono mae no setsumeikai deha, kososuretoiu hyougen mo jissai no bamen de tsukawa reteita.",meaning:"Pada sesi penjelasan sebelumnya, ungkapan ini juga dipakai dalam situasi nyata."},
      {jp:"区役所や学校でも、こそすれのような言い方を見かけることがある。",kana:"くやくしょやがっこうでも、こそすれのようないいかたをみかけることがある。",romaji:"Kuyakusho ya gakkou demo, kososurenoyouna iikata wo mikake rukotogaaru.",meaning:"Di balai kota maupun sekolah, kadang terlihat cara ungkap seperti ini."},
      {jp:"職場の会話では、こそすれを使うと少し自然な言い方になる。",kana:"しょくばのかいわでは、こそすれをつかうとすこししぜんないいかたになる。",romaji:"Shokuba no kaiwa deha, kososurewo tsukau to sukoshi shizen na iikata ninaru.",meaning:"Dalam percakapan kerja, memakai pola ini bisa membuat ungkapan terdengar lebih alami."},
      {jp:"駅前の店で店員さんが話しているのを聞いて、こそすれの使い方がよく分かった。",kana:"えきまえのみせでてんいんさんがはなしているのをきいて、こそすれのつかいかたがよくわかった。",romaji:"Ekimae no mise de ten'in sanga hanashi teirunowo kii te, kososureno tsukaikata gayoku waka tta.",meaning:"Saat mendengar staf toko di depan stasiun berbicara, saya jadi lebih paham cara pakai pola ini."},
      {jp:"授業だけでなく、日常の場面でもこそすれは意外とよく出てくる。",kana:"じゅぎょうだけでなく、にちじょうのばめんでもこそすれはいがいとよくでてくる。",romaji:"Jugyou dakedenaku, nichijou no bamen demokososureha igai toyoku dete kuru.",meaning:"Bukan hanya di kelas, pola ini ternyata cukup sering muncul dalam keseharian."}
    ]}
  ]},

  // ── GR-N1-27: 〜ごとく ──
  {id:"GR-N1-27",level:"N1",title:"〜ごとく",summary:"Pola 〜ごとく untuk level N1, dengan contoh penggunaan dalam konteks sekolah, kantor, layanan publik, dan kehidupan sehari-hari di Jepang.",groups:[
    {name:"〜ごとく",description:"Contoh penggunaan 〜ごとく dalam konteks alami sehari-hari di Jepang.",sentences:[
      {jp:"この前の説明会では、ごとくという表現も実際の場面で使われていた。",kana:"このまえのせつめいかいでは、ごとくというひょうげんもじっさいのばめんでつかわれていた。",romaji:"Kono mae no setsumeikai deha, gotokutoiu hyougen mo jissai no bamen de tsukawa reteita.",meaning:"Pada sesi penjelasan sebelumnya, ungkapan ini juga dipakai dalam situasi nyata."},
      {jp:"区役所や学校でも、ごとくのような言い方を見かけることがある。",kana:"くやくしょやがっこうでも、ごとくのようないいかたをみかけることがある。",romaji:"Kuyakusho ya gakkou demo, gotokunoyouna iikata wo mikake rukotogaaru.",meaning:"Di balai kota maupun sekolah, kadang terlihat cara ungkap seperti ini."},
      {jp:"職場の会話では、ごとくを使うと少し自然な言い方になる。",kana:"しょくばのかいわでは、ごとくをつかうとすこししぜんないいかたになる。",romaji:"Shokuba no kaiwa deha, gotokuwo tsukau to sukoshi shizen na iikata ninaru.",meaning:"Dalam percakapan kerja, memakai pola ini bisa membuat ungkapan terdengar lebih alami."},
      {jp:"駅前の店で店員さんが話しているのを聞いて、ごとくの使い方がよく分かった。",kana:"えきまえのみせでてんいんさんがはなしているのをきいて、ごとくのつかいかたがよくわかった。",romaji:"Ekimae no mise de ten'in sanga hanashi teirunowo kii te, gotokuno tsukaikata gayoku waka tta.",meaning:"Saat mendengar staf toko di depan stasiun berbicara, saya jadi lebih paham cara pakai pola ini."},
      {jp:"授業だけでなく、日常の場面でもごとくは意外とよく出てくる。",kana:"じゅぎょうだけでなく、にちじょうのばめんでもごとくはいがいとよくでてくる。",romaji:"Jugyou dakedenaku, nichijou no bamen demogotokuha igai toyoku dete kuru.",meaning:"Bukan hanya di kelas, pola ini ternyata cukup sering muncul dalam keseharian."}
    ]}
  ]},

  // ── GR-N1-28: 〜ことこの上ない ──
  {id:"GR-N1-28",level:"N1",title:"〜ことこの上ない",summary:"Pola 〜ことこの上ない untuk level N1, dengan contoh penggunaan dalam konteks sekolah, kantor, layanan publik, dan kehidupan sehari-hari di Jepang.",groups:[
    {name:"〜ことこの上ない",description:"Contoh penggunaan 〜ことこの上ない dalam konteks alami sehari-hari di Jepang.",sentences:[
      {jp:"この前の説明会では、ことこの上ないという表現も実際の場面で使われていた。",kana:"このまえのせつめいかいでは、ことこのじょうないというひょうげんもじっさいのばめんでつかわれていた。",romaji:"Kono mae no setsumeikai deha, kotokono jouna itoiu hyougen mo jissai no bamen de tsukawa reteita.",meaning:"Pada sesi penjelasan sebelumnya, ungkapan ini juga dipakai dalam situasi nyata."},
      {jp:"区役所や学校でも、ことこの上ないのような言い方を見かけることがある。",kana:"くやくしょやがっこうでも、ことこのじょうないのようないいかたをみかけることがある。",romaji:"Kuyakusho ya gakkou demo, kotokono jouna inoyouna iikata wo mikake rukotogaaru.",meaning:"Di balai kota maupun sekolah, kadang terlihat cara ungkap seperti ini."},
      {jp:"職場の会話では、ことこの上ないを使うと少し自然な言い方になる。",kana:"しょくばのかいわでは、ことこのじょうないをつかうとすこししぜんないいかたになる。",romaji:"Shokuba no kaiwa deha, kotokono jouna iwo tsukau to sukoshi shizen na iikata ninaru.",meaning:"Dalam percakapan kerja, memakai pola ini bisa membuat ungkapan terdengar lebih alami."},
      {jp:"駅前の店で店員さんが話しているのを聞いて、ことこの上ないの使い方がよく分かった。",kana:"えきまえのみせでてんいんさんがはなしているのをきいて、ことこのじょうないのつかいかたがよくわかった。",romaji:"Ekimae no mise de ten'in sanga hanashi teirunowo kii te, kotokono jouna ino tsukaikata gayoku waka tta.",meaning:"Saat mendengar staf toko di depan stasiun berbicara, saya jadi lebih paham cara pakai pola ini."},
      {jp:"授業だけでなく、日常の場面でもことこの上ないは意外とよく出てくる。",kana:"じゅぎょうだけでなく、にちじょうのばめんでもことこのじょうないはいがいとよくでてくる。",romaji:"Jugyou dakedenaku, nichijou no bamen demokotokono jouna iha igai toyoku dete kuru.",meaning:"Bukan hanya di kelas, pola ini ternyata cukup sering muncul dalam keseharian."}
    ]}
  ]},

  // ── GR-N1-29: 〜ことだし ──
  {id:"GR-N1-29",level:"N1",title:"〜ことだし",summary:"Pola 〜ことだし untuk level N1, dengan contoh penggunaan dalam konteks sekolah, kantor, layanan publik, dan kehidupan sehari-hari di Jepang.",groups:[
    {name:"〜ことだし",description:"Contoh penggunaan 〜ことだし dalam konteks alami sehari-hari di Jepang.",sentences:[
      {jp:"この前の説明会では、ことだしという表現も実際の場面で使われていた。",kana:"このまえのせつめいかいでは、ことだしというひょうげんもじっさいのばめんでつかわれていた。",romaji:"Kono mae no setsumeikai deha, kotodashitoiu hyougen mo jissai no bamen de tsukawa reteita.",meaning:"Pada sesi penjelasan sebelumnya, ungkapan ini juga dipakai dalam situasi nyata."},
      {jp:"区役所や学校でも、ことだしのような言い方を見かけることがある。",kana:"くやくしょやがっこうでも、ことだしのようないいかたをみかけることがある。",romaji:"Kuyakusho ya gakkou demo, kotodashinoyouna iikata wo mikake rukotogaaru.",meaning:"Di balai kota maupun sekolah, kadang terlihat cara ungkap seperti ini."},
      {jp:"職場の会話では、ことだしを使うと少し自然な言い方になる。",kana:"しょくばのかいわでは、ことだしをつかうとすこししぜんないいかたになる。",romaji:"Shokuba no kaiwa deha, kotodashiwo tsukau to sukoshi shizen na iikata ninaru.",meaning:"Dalam percakapan kerja, memakai pola ini bisa membuat ungkapan terdengar lebih alami."},
      {jp:"駅前の店で店員さんが話しているのを聞いて、ことだしの使い方がよく分かった。",kana:"えきまえのみせでてんいんさんがはなしているのをきいて、ことだしのつかいかたがよくわかった。",romaji:"Ekimae no mise de ten'in sanga hanashi teirunowo kii te, kotodashino tsukaikata gayoku waka tta.",meaning:"Saat mendengar staf toko di depan stasiun berbicara, saya jadi lebih paham cara pakai pola ini."},
      {jp:"授業だけでなく、日常の場面でもことだしは意外とよく出てくる。",kana:"じゅぎょうだけでなく、にちじょうのばめんでもことだしはいがいとよくでてくる。",romaji:"Jugyou dakedenaku, nichijou no bamen demokotodashiha igai toyoku dete kuru.",meaning:"Bukan hanya di kelas, pola ini ternyata cukup sering muncul dalam keseharian."}
    ]}
  ]},

  // ── GR-N1-30: 〜こととて ──
  {id:"GR-N1-30",level:"N1",title:"〜こととて",summary:"Pola 〜こととて untuk level N1, dengan contoh penggunaan dalam konteks sekolah, kantor, layanan publik, dan kehidupan sehari-hari di Jepang.",groups:[
    {name:"〜こととて",description:"Contoh penggunaan 〜こととて dalam konteks alami sehari-hari di Jepang.",sentences:[
      {jp:"この前の説明会では、こととてという表現も実際の場面で使われていた。",kana:"このまえのせつめいかいでは、こととてというひょうげんもじっさいのばめんでつかわれていた。",romaji:"Kono mae no setsumeikai deha, kotototetoiu hyougen mo jissai no bamen de tsukawa reteita.",meaning:"Pada sesi penjelasan sebelumnya, ungkapan ini juga dipakai dalam situasi nyata."},
      {jp:"区役所や学校でも、こととてのような言い方を見かけることがある。",kana:"くやくしょやがっこうでも、こととてのようないいかたをみかけることがある。",romaji:"Kuyakusho ya gakkou demo, kotototenoyouna iikata wo mikake rukotogaaru.",meaning:"Di balai kota maupun sekolah, kadang terlihat cara ungkap seperti ini."},
      {jp:"職場の会話では、こととてを使うと少し自然な言い方になる。",kana:"しょくばのかいわでは、こととてをつかうとすこししぜんないいかたになる。",romaji:"Shokuba no kaiwa deha, kotototewo tsukau to sukoshi shizen na iikata ninaru.",meaning:"Dalam percakapan kerja, memakai pola ini bisa membuat ungkapan terdengar lebih alami."},
      {jp:"駅前の店で店員さんが話しているのを聞いて、こととての使い方がよく分かった。",kana:"えきまえのみせでてんいんさんがはなしているのをきいて、こととてのつかいかたがよくわかった。",romaji:"Ekimae no mise de ten'in sanga hanashi teirunowo kii te, kotototeno tsukaikata gayoku waka tta.",meaning:"Saat mendengar staf toko di depan stasiun berbicara, saya jadi lebih paham cara pakai pola ini."},
      {jp:"授業だけでなく、日常の場面でもこととては意外とよく出てくる。",kana:"じゅぎょうだけでなく、にちじょうのばめんでもこととてはいがいとよくでてくる。",romaji:"Jugyou dakedenaku, nichijou no bamen demokotototeha igai toyoku dete kuru.",meaning:"Bukan hanya di kelas, pola ini ternyata cukup sering muncul dalam keseharian."}
    ]}
  ]},

  // ── GR-N1-31: 〜ことなしに ──
  {id:"GR-N1-31",level:"N1",title:"〜ことなしに",summary:"Pola 〜ことなしに untuk level N1, dengan contoh penggunaan dalam konteks sekolah, kantor, layanan publik, dan kehidupan sehari-hari di Jepang.",groups:[
    {name:"〜ことなしに",description:"Contoh penggunaan 〜ことなしに dalam konteks alami sehari-hari di Jepang.",sentences:[
      {jp:"この前の説明会では、ことなしにという表現も実際の場面で使われていた。",kana:"このまえのせつめいかいでは、ことなしにというひょうげんもじっさいのばめんでつかわれていた。",romaji:"Kono mae no setsumeikai deha, kotonashinitoiu hyougen mo jissai no bamen de tsukawa reteita.",meaning:"Pada sesi penjelasan sebelumnya, ungkapan ini juga dipakai dalam situasi nyata."},
      {jp:"区役所や学校でも、ことなしにのような言い方を見かけることがある。",kana:"くやくしょやがっこうでも、ことなしにのようないいかたをみかけることがある。",romaji:"Kuyakusho ya gakkou demo, kotonashininoyouna iikata wo mikake rukotogaaru.",meaning:"Di balai kota maupun sekolah, kadang terlihat cara ungkap seperti ini."},
      {jp:"職場の会話では、ことなしにを使うと少し自然な言い方になる。",kana:"しょくばのかいわでは、ことなしにをつかうとすこししぜんないいかたになる。",romaji:"Shokuba no kaiwa deha, kotonashiniwo tsukau to sukoshi shizen na iikata ninaru.",meaning:"Dalam percakapan kerja, memakai pola ini bisa membuat ungkapan terdengar lebih alami."},
      {jp:"駅前の店で店員さんが話しているのを聞いて、ことなしにの使い方がよく分かった。",kana:"えきまえのみせでてんいんさんがはなしているのをきいて、ことなしにのつかいかたがよくわかった。",romaji:"Ekimae no mise de ten'in sanga hanashi teirunowo kii te, kotonashinino tsukaikata gayoku waka tta.",meaning:"Saat mendengar staf toko di depan stasiun berbicara, saya jadi lebih paham cara pakai pola ini."},
      {jp:"授業だけでなく、日常の場面でもことなしには意外とよく出てくる。",kana:"じゅぎょうだけでなく、にちじょうのばめんでもことなしにはいがいとよくでてくる。",romaji:"Jugyou dakedenaku, nichijou no bamen demokotonashiniha igai toyoku dete kuru.",meaning:"Bukan hanya di kelas, pola ini ternyata cukup sering muncul dalam keseharian."}
    ]}
  ]},

  // ── GR-N1-32: 〜ことのないように ──
  {id:"GR-N1-32",level:"N1",title:"〜ことのないように",summary:"Pola 〜ことのないように untuk level N1, dengan contoh penggunaan dalam konteks sekolah, kantor, layanan publik, dan kehidupan sehari-hari di Jepang.",groups:[
    {name:"〜ことのないように",description:"Contoh penggunaan 〜ことのないように dalam konteks alami sehari-hari di Jepang.",sentences:[
      {jp:"この前の説明会では、ことのないようにという表現も実際の場面で使われていた。",kana:"このまえのせつめいかいでは、ことのないようにというひょうげんもじっさいのばめんでつかわれていた。",romaji:"Kono mae no setsumeikai deha, kotononaiyounitoiu hyougen mo jissai no bamen de tsukawa reteita.",meaning:"Pada sesi penjelasan sebelumnya, ungkapan ini juga dipakai dalam situasi nyata."},
      {jp:"区役所や学校でも、ことのないようにのような言い方を見かけることがある。",kana:"くやくしょやがっこうでも、ことのないようにのようないいかたをみかけることがある。",romaji:"Kuyakusho ya gakkou demo, kotononaiyouninoyouna iikata wo mikake rukotogaaru.",meaning:"Di balai kota maupun sekolah, kadang terlihat cara ungkap seperti ini."},
      {jp:"職場の会話では、ことのないようにを使うと少し自然な言い方になる。",kana:"しょくばのかいわでは、ことのないようにをつかうとすこししぜんないいかたになる。",romaji:"Shokuba no kaiwa deha, kotononaiyouniwo tsukau to sukoshi shizen na iikata ninaru.",meaning:"Dalam percakapan kerja, memakai pola ini bisa membuat ungkapan terdengar lebih alami."},
      {jp:"駅前の店で店員さんが話しているのを聞いて、ことのないようにの使い方がよく分かった。",kana:"えきまえのみせでてんいんさんがはなしているのをきいて、ことのないようにのつかいかたがよくわかった。",romaji:"Ekimae no mise de ten'in sanga hanashi teirunowo kii te, kotononaiyounino tsukaikata gayoku waka tta.",meaning:"Saat mendengar staf toko di depan stasiun berbicara, saya jadi lebih paham cara pakai pola ini."},
      {jp:"授業だけでなく、日常の場面でもことのないようには意外とよく出てくる。",kana:"じゅぎょうだけでなく、にちじょうのばめんでもことのないようにはいがいとよくでてくる。",romaji:"Jugyou dakedenaku, nichijou no bamen demokotononaiyouniha igai toyoku dete kuru.",meaning:"Bukan hanya di kelas, pola ini ternyata cukup sering muncul dalam keseharian."}
    ]}
  ]},

  // ── GR-N1-33: 〜こともあって ──
  {id:"GR-N1-33",level:"N1",title:"〜こともあって",summary:"Pola 〜こともあって untuk level N1, dengan contoh penggunaan dalam konteks sekolah, kantor, layanan publik, dan kehidupan sehari-hari di Jepang.",groups:[
    {name:"〜こともあって",description:"Contoh penggunaan 〜こともあって dalam konteks alami sehari-hari di Jepang.",sentences:[
      {jp:"この前の説明会では、こともあってという表現も実際の場面で使われていた。",kana:"このまえのせつめいかいでは、こともあってというひょうげんもじっさいのばめんでつかわれていた。",romaji:"Kono mae no setsumeikai deha, kotomoattetoiu hyougen mo jissai no bamen de tsukawa reteita.",meaning:"Pada sesi penjelasan sebelumnya, ungkapan ini juga dipakai dalam situasi nyata."},
      {jp:"区役所や学校でも、こともあってのような言い方を見かけることがある。",kana:"くやくしょやがっこうでも、こともあってのようないいかたをみかけることがある。",romaji:"Kuyakusho ya gakkou demo, kotomoattenoyouna iikata wo mikake rukotogaaru.",meaning:"Di balai kota maupun sekolah, kadang terlihat cara ungkap seperti ini."},
      {jp:"職場の会話では、こともあってを使うと少し自然な言い方になる。",kana:"しょくばのかいわでは、こともあってをつかうとすこししぜんないいかたになる。",romaji:"Shokuba no kaiwa deha, kotomoattewo tsukau to sukoshi shizen na iikata ninaru.",meaning:"Dalam percakapan kerja, memakai pola ini bisa membuat ungkapan terdengar lebih alami."},
      {jp:"駅前の店で店員さんが話しているのを聞いて、こともあっての使い方がよく分かった。",kana:"えきまえのみせでてんいんさんがはなしているのをきいて、こともあってのつかいかたがよくわかった。",romaji:"Ekimae no mise de ten'in sanga hanashi teirunowo kii te, kotomoatteno tsukaikata gayoku waka tta.",meaning:"Saat mendengar staf toko di depan stasiun berbicara, saya jadi lebih paham cara pakai pola ini."},
      {jp:"授業だけでなく、日常の場面でもこともあっては意外とよく出てくる。",kana:"じゅぎょうだけでなく、にちじょうのばめんでもこともあってはいがいとよくでてくる。",romaji:"Jugyou dakedenaku, nichijou no bamen demokotomoatteha igai toyoku dete kuru.",meaning:"Bukan hanya di kelas, pola ini ternyata cukup sering muncul dalam keseharian."}
    ]}
  ]},

  // ── GR-N1-34: 〜さ ──
  {id:"GR-N1-34",level:"N1",title:"〜さ",summary:"Pola 〜さ untuk level N1, dengan contoh penggunaan dalam konteks sekolah, kantor, layanan publik, dan kehidupan sehari-hari di Jepang.",groups:[
    {name:"〜さ",description:"Contoh penggunaan 〜さ dalam konteks alami sehari-hari di Jepang.",sentences:[
      {jp:"この前の説明会では、さという表現も実際の場面で使われていた。",kana:"このまえのせつめいかいでは、さというひょうげんもじっさいのばめんでつかわれていた。",romaji:"Kono mae no setsumeikai deha, satoiu hyougen mo jissai no bamen de tsukawa reteita.",meaning:"Pada sesi penjelasan sebelumnya, ungkapan ini juga dipakai dalam situasi nyata."},
      {jp:"区役所や学校でも、さのような言い方を見かけることがある。",kana:"くやくしょやがっこうでも、さのようないいかたをみかけることがある。",romaji:"Kuyakusho ya gakkou demo, sanoyouna iikata wo mikake rukotogaaru.",meaning:"Di balai kota maupun sekolah, kadang terlihat cara ungkap seperti ini."},
      {jp:"職場の会話では、さを使うと少し自然な言い方になる。",kana:"しょくばのかいわでは、さをつかうとすこししぜんないいかたになる。",romaji:"Shokuba no kaiwa deha, sawo tsukau to sukoshi shizen na iikata ninaru.",meaning:"Dalam percakapan kerja, memakai pola ini bisa membuat ungkapan terdengar lebih alami."},
      {jp:"駅前の店で店員さんが話しているのを聞いて、さの使い方がよく分かった。",kana:"えきまえのみせでてんいんさんがはなしているのをきいて、さのつかいかたがよくわかった。",romaji:"Ekimae no mise de ten'in sanga hanashi teirunowo kii te, sano tsukaikata gayoku waka tta.",meaning:"Saat mendengar staf toko di depan stasiun berbicara, saya jadi lebih paham cara pakai pola ini."},
      {jp:"授業だけでなく、日常の場面でもさは意外とよく出てくる。",kana:"じゅぎょうだけでなく、にちじょうのばめんでもさはいがいとよくでてくる。",romaji:"Jugyou dakedenaku, nichijou no bamen demosaha igai toyoku dete kuru.",meaning:"Bukan hanya di kelas, pola ini ternyata cukup sering muncul dalam keseharian."}
    ]}
  ]},

  // ── GR-N1-35: 〜さぞ / さぞかし ──
  {id:"GR-N1-35",level:"N1",title:"〜さぞ / さぞかし",summary:"Pola 〜さぞ / さぞかし untuk level N1, dengan contoh penggunaan dalam konteks sekolah, kantor, layanan publik, dan kehidupan sehari-hari di Jepang.",groups:[
    {name:"〜さぞ / さぞかし",description:"Contoh penggunaan 〜さぞ / さぞかし dalam konteks alami sehari-hari di Jepang.",sentences:[
      {jp:"初めて一人で日本に来た日は、さぞ心細かっただろう。",kana:"はじめてひとりでにっぽんにきたにちは、さぞこころぼそかっただろう。",romaji:"Hajimete hitori de nippon ni kita nichi ha, sazo kokorobosoka ttadarou.",meaning:"Pada hari pertama datang ke Jepang sendirian, pasti terasa sangat tidak tenang."},
      {jp:"急な変更で、担当の方もさぞ驚いたに違いない。",kana:"きゅうなへんこうで、たんとうのほうもさぞおどろいたにちがいない。",romaji:"Kyuuna henkou de, tantou no hou mosazo odoroi tani chigai nai.",meaning:"Karena perubahan yang mendadak, pihak penanggung jawab pasti sangat terkejut."},
      {jp:"長い準備期間のあとだから、発表が終わってさぞほっとしたはずだ。",kana:"ながいじゅんびきかんのあとだから、はっぴょうがおわってさぞほっとしたはずだ。",romaji:"Nagai junbikikan noatodakara, happyou ga owa ttesazohottoshitahazuda.",meaning:"Setelah persiapan panjang, dia pasti merasa sangat lega ketika presentasinya selesai."},
      {jp:"雪国での冬は、慣れない人にはさぞ厳しいだろう。",kana:"ゆきぐにでのふゆは、なれないにんにはさぞいかめしいだろう。",romaji:"Yukiguni deno fuyu ha, nare nai nin nihasazo ikameshii darou.",meaning:"Musim dingin di daerah bersalju pasti terasa berat bagi orang yang belum terbiasa."},
      {jp:"連休中も働き続けたのだから、今日はさぞ疲れていると思う。",kana:"れんきゅうちゅうもはたらきつづけたのだから、こんにちはさぞつかれているとおもう。",romaji:"Renkyuuchuu mo hataraki tsuzuke tanodakara, konnichiha sazo tsukare teiruto omou.",meaning:"Karena terus bekerja selama liburan panjang, saya rasa dia sangat lelah hari ini."}
    ]}
  ]},

  // ── GR-N1-36: 〜さも ──
  {id:"GR-N1-36",level:"N1",title:"〜さも",summary:"Pola 〜さも untuk level N1, dengan contoh penggunaan dalam konteks sekolah, kantor, layanan publik, dan kehidupan sehari-hari di Jepang.",groups:[
    {name:"〜さも",description:"Contoh penggunaan 〜さも dalam konteks alami sehari-hari di Jepang.",sentences:[
      {jp:"この前の説明会では、さもという表現も実際の場面で使われていた。",kana:"このまえのせつめいかいでは、さもというひょうげんもじっさいのばめんでつかわれていた。",romaji:"Kono mae no setsumeikai deha, samotoiu hyougen mo jissai no bamen de tsukawa reteita.",meaning:"Pada sesi penjelasan sebelumnya, ungkapan ini juga dipakai dalam situasi nyata."},
      {jp:"区役所や学校でも、さものような言い方を見かけることがある。",kana:"くやくしょやがっこうでも、さものようないいかたをみかけることがある。",romaji:"Kuyakusho ya gakkou demo, samonoyouna iikata wo mikake rukotogaaru.",meaning:"Di balai kota maupun sekolah, kadang terlihat cara ungkap seperti ini."},
      {jp:"職場の会話では、さもを使うと少し自然な言い方になる。",kana:"しょくばのかいわでは、さもをつかうとすこししぜんないいかたになる。",romaji:"Shokuba no kaiwa deha, samowo tsukau to sukoshi shizen na iikata ninaru.",meaning:"Dalam percakapan kerja, memakai pola ini bisa membuat ungkapan terdengar lebih alami."},
      {jp:"駅前の店で店員さんが話しているのを聞いて、さもの使い方がよく分かった。",kana:"えきまえのみせでてんいんさんがはなしているのをきいて、さものつかいかたがよくわかった。",romaji:"Ekimae no mise de ten'in sanga hanashi teirunowo kii te, samono tsukaikata gayoku waka tta.",meaning:"Saat mendengar staf toko di depan stasiun berbicara, saya jadi lebih paham cara pakai pola ini."},
      {jp:"授業だけでなく、日常の場面でもさもは意外とよく出てくる。",kana:"じゅぎょうだけでなく、にちじょうのばめんでもさもはいがいとよくでてくる。",romaji:"Jugyou dakedenaku, nichijou no bamen demosamoha igai toyoku dete kuru.",meaning:"Bukan hanya di kelas, pola ini ternyata cukup sering muncul dalam keseharian."}
    ]}
  ]},

  // ── GR-N1-37: 〜始末だ ──
  {id:"GR-N1-37",level:"N1",title:"〜始末だ",summary:"Pola 〜始末だ untuk level N1, dengan contoh penggunaan dalam konteks sekolah, kantor, layanan publik, dan kehidupan sehari-hari di Jepang.",groups:[
    {name:"〜始末だ",description:"Contoh penggunaan 〜始末だ dalam konteks alami sehari-hari di Jepang.",sentences:[
      {jp:"この前の説明会では、始末だという表現も実際の場面で使われていた。",kana:"このまえのせつめいかいでは、しまつだというひょうげんもじっさいのばめんでつかわれていた。",romaji:"Kono mae no setsumeikai deha, shimatsu datoiu hyougen mo jissai no bamen de tsukawa reteita.",meaning:"Pada sesi penjelasan sebelumnya, ungkapan ini juga dipakai dalam situasi nyata."},
      {jp:"区役所や学校でも、始末だのような言い方を見かけることがある。",kana:"くやくしょやがっこうでも、しまつだのようないいかたをみかけることがある。",romaji:"Kuyakusho ya gakkou demo, shimatsu danoyouna iikata wo mikake rukotogaaru.",meaning:"Di balai kota maupun sekolah, kadang terlihat cara ungkap seperti ini."},
      {jp:"職場の会話では、始末だを使うと少し自然な言い方になる。",kana:"しょくばのかいわでは、しまつだをつかうとすこししぜんないいかたになる。",romaji:"Shokuba no kaiwa deha, shimatsu dawo tsukau to sukoshi shizen na iikata ninaru.",meaning:"Dalam percakapan kerja, memakai pola ini bisa membuat ungkapan terdengar lebih alami."},
      {jp:"駅前の店で店員さんが話しているのを聞いて、始末だの使い方がよく分かった。",kana:"えきまえのみせでてんいんさんがはなしているのをきいて、しまつだのつかいかたがよくわかった。",romaji:"Ekimae no mise de ten'in sanga hanashi teirunowo kii te, shimatsu dano tsukaikata gayoku waka tta.",meaning:"Saat mendengar staf toko di depan stasiun berbicara, saya jadi lebih paham cara pakai pola ini."},
      {jp:"授業だけでなく、日常の場面でも始末だは意外とよく出てくる。",kana:"じゅぎょうだけでなく、にちじょうのばめんでもしまつだはいがいとよくでてくる。",romaji:"Jugyou dakedenaku, nichijou no bamen demo shimatsu daha igai toyoku dete kuru.",meaning:"Bukan hanya di kelas, pola ini ternyata cukup sering muncul dalam keseharian."}
    ]}
  ]},

  // ── GR-N1-38: 〜じみる / じみた ──
  {id:"GR-N1-38",level:"N1",title:"〜じみる / じみた",summary:"Pola 〜じみる / じみた untuk level N1, dengan contoh penggunaan dalam konteks sekolah, kantor, layanan publik, dan kehidupan sehari-hari di Jepang.",groups:[
    {name:"〜じみる / じみた",description:"Contoh penggunaan 〜じみる / じみた dalam konteks alami sehari-hari di Jepang.",sentences:[
      {jp:"この前の説明会では、じみるという表現も実際の場面で使われていた。",kana:"このまえのせつめいかいでは、じみるというひょうげんもじっさいのばめんでつかわれていた。",romaji:"Kono mae no setsumeikai deha, jimirutoiu hyougen mo jissai no bamen de tsukawa reteita.",meaning:"Pada sesi penjelasan sebelumnya, ungkapan ini juga dipakai dalam situasi nyata."},
      {jp:"区役所や学校でも、じみるのような言い方を見かけることがある。",kana:"くやくしょやがっこうでも、じみるのようないいかたをみかけることがある。",romaji:"Kuyakusho ya gakkou demo, jimirunoyouna iikata wo mikake rukotogaaru.",meaning:"Di balai kota maupun sekolah, kadang terlihat cara ungkap seperti ini."},
      {jp:"職場の会話では、じみるを使うと少し自然な言い方になる。",kana:"しょくばのかいわでは、じみるをつかうとすこししぜんないいかたになる。",romaji:"Shokuba no kaiwa deha, jimiruwo tsukau to sukoshi shizen na iikata ninaru.",meaning:"Dalam percakapan kerja, memakai pola ini bisa membuat ungkapan terdengar lebih alami."},
      {jp:"駅前の店で店員さんが話しているのを聞いて、じみるの使い方がよく分かった。",kana:"えきまえのみせでてんいんさんがはなしているのをきいて、じみるのつかいかたがよくわかった。",romaji:"Ekimae no mise de ten'in sanga hanashi teirunowo kii te, jimiruno tsukaikata gayoku waka tta.",meaning:"Saat mendengar staf toko di depan stasiun berbicara, saya jadi lebih paham cara pakai pola ini."},
      {jp:"授業だけでなく、日常の場面でもじみるは意外とよく出てくる。",kana:"じゅぎょうだけでなく、にちじょうのばめんでもじみるはいがいとよくでてくる。",romaji:"Jugyou dakedenaku, nichijou no bamen demojimiruha igai toyoku dete kuru.",meaning:"Bukan hanya di kelas, pola ini ternyata cukup sering muncul dalam keseharian."}
    ]}
  ]},

  // ── GR-N1-39: 〜ずくめ ──
  {id:"GR-N1-39",level:"N1",title:"〜ずくめ",summary:"Pola 〜ずくめ untuk level N1, dengan contoh penggunaan dalam konteks sekolah, kantor, layanan publik, dan kehidupan sehari-hari di Jepang.",groups:[
    {name:"〜ずくめ",description:"Contoh penggunaan 〜ずくめ dalam konteks alami sehari-hari di Jepang.",sentences:[
      {jp:"この前の説明会では、ずくめという表現も実際の場面で使われていた。",kana:"このまえのせつめいかいでは、ずくめというひょうげんもじっさいのばめんでつかわれていた。",romaji:"Kono mae no setsumeikai deha, zukumetoiu hyougen mo jissai no bamen de tsukawa reteita.",meaning:"Pada sesi penjelasan sebelumnya, ungkapan ini juga dipakai dalam situasi nyata."},
      {jp:"区役所や学校でも、ずくめのような言い方を見かけることがある。",kana:"くやくしょやがっこうでも、ずくめのようないいかたをみかけることがある。",romaji:"Kuyakusho ya gakkou demo, zukumenoyouna iikata wo mikake rukotogaaru.",meaning:"Di balai kota maupun sekolah, kadang terlihat cara ungkap seperti ini."},
      {jp:"職場の会話では、ずくめを使うと少し自然な言い方になる。",kana:"しょくばのかいわでは、ずくめをつかうとすこししぜんないいかたになる。",romaji:"Shokuba no kaiwa deha, zukumewo tsukau to sukoshi shizen na iikata ninaru.",meaning:"Dalam percakapan kerja, memakai pola ini bisa membuat ungkapan terdengar lebih alami."},
      {jp:"駅前の店で店員さんが話しているのを聞いて、ずくめの使い方がよく分かった。",kana:"えきまえのみせでてんいんさんがはなしているのをきいて、ずくめのつかいかたがよくわかった。",romaji:"Ekimae no mise de ten'in sanga hanashi teirunowo kii te, zukumeno tsukaikata gayoku waka tta.",meaning:"Saat mendengar staf toko di depan stasiun berbicara, saya jadi lebih paham cara pakai pola ini."},
      {jp:"授業だけでなく、日常の場面でもずくめは意外とよく出てくる。",kana:"じゅぎょうだけでなく、にちじょうのばめんでもずくめはいがいとよくでてくる。",romaji:"Jugyou dakedenaku, nichijou no bamen demozukumeha igai toyoku dete kuru.",meaning:"Bukan hanya di kelas, pola ini ternyata cukup sering muncul dalam keseharian."}
    ]}
  ]},

  // ── GR-N1-40: 〜ずじまい ──
  {id:"GR-N1-40",level:"N1",title:"〜ずじまい",summary:"Pola 〜ずじまい untuk level N1, dengan contoh penggunaan dalam konteks sekolah, kantor, layanan publik, dan kehidupan sehari-hari di Jepang.",groups:[
    {name:"〜ずじまい",description:"Contoh penggunaan 〜ずじまい dalam konteks alami sehari-hari di Jepang.",sentences:[
      {jp:"この前の説明会では、ずじまいという表現も実際の場面で使われていた。",kana:"このまえのせつめいかいでは、ずじまいというひょうげんもじっさいのばめんでつかわれていた。",romaji:"Kono mae no setsumeikai deha, zujimaitoiu hyougen mo jissai no bamen de tsukawa reteita.",meaning:"Pada sesi penjelasan sebelumnya, ungkapan ini juga dipakai dalam situasi nyata."},
      {jp:"区役所や学校でも、ずじまいのような言い方を見かけることがある。",kana:"くやくしょやがっこうでも、ずじまいのようないいかたをみかけることがある。",romaji:"Kuyakusho ya gakkou demo, zujimainoyouna iikata wo mikake rukotogaaru.",meaning:"Di balai kota maupun sekolah, kadang terlihat cara ungkap seperti ini."},
      {jp:"職場の会話では、ずじまいを使うと少し自然な言い方になる。",kana:"しょくばのかいわでは、ずじまいをつかうとすこししぜんないいかたになる。",romaji:"Shokuba no kaiwa deha, zujimaiwo tsukau to sukoshi shizen na iikata ninaru.",meaning:"Dalam percakapan kerja, memakai pola ini bisa membuat ungkapan terdengar lebih alami."},
      {jp:"駅前の店で店員さんが話しているのを聞いて、ずじまいの使い方がよく分かった。",kana:"えきまえのみせでてんいんさんがはなしているのをきいて、ずじまいのつかいかたがよくわかった。",romaji:"Ekimae no mise de ten'in sanga hanashi teirunowo kii te, zujimaino tsukaikata gayoku waka tta.",meaning:"Saat mendengar staf toko di depan stasiun berbicara, saya jadi lebih paham cara pakai pola ini."},
      {jp:"授業だけでなく、日常の場面でもずじまいは意外とよく出てくる。",kana:"じゅぎょうだけでなく、にちじょうのばめんでもずじまいはいがいとよくでてくる。",romaji:"Jugyou dakedenaku, nichijou no bamen demozujimaiha igai toyoku dete kuru.",meaning:"Bukan hanya di kelas, pola ini ternyata cukup sering muncul dalam keseharian."}
    ]}
  ]},

  // ── GR-N1-41: 〜ずとも ──
  {id:"GR-N1-41",level:"N1",title:"〜ずとも",summary:"Pola 〜ずとも untuk level N1, dengan contoh penggunaan dalam konteks sekolah, kantor, layanan publik, dan kehidupan sehari-hari di Jepang.",groups:[
    {name:"〜ずとも",description:"Contoh penggunaan 〜ずとも dalam konteks alami sehari-hari di Jepang.",sentences:[
      {jp:"今日は寄り道せずに、まっすぐ家に帰る。",kana:"こんにちはよりみちせずに、まっすぐいえにかえる。",romaji:"Konnichiha yorimichi sezuni, massugu ie ni kaeru.",meaning:"Hari ini saya pulang langsung ke rumah tanpa mampir ke mana-mana."},
      {jp:"大声を出すことなく、落ち着いて案内してくれた。",kana:"おおごえをだすことなく、おちついてあんないしてくれた。",romaji:"Oogoe wo dasu kotonaku, ochitsui te annai shitekureta.",meaning:"Dia memberi arahan dengan tenang tanpa meninggikan suara."},
      {jp:"詳しく説明せずとも、表情を見れば事情は伝わった。",kana:"くわしくせつめいせずとも、ひょうじょうをみればじじょうはつたわった。",romaji:"Kuwashiku setsumeise zutomo, hyoujou wo mire ba jijou ha tsutawa tta.",meaning:"Tanpa penjelasan panjang pun, situasinya tersampaikan hanya dari ekspresi wajah."},
      {jp:"休憩を取らずに働き続けるのは体によくない。",kana:"きゅうけいをとらずにはたらきつづけるのはからだによくない。",romaji:"Kyuukei wo tora zuni hataraki tsuzuke runoha karada niyokunai.",meaning:"Terus bekerja tanpa istirahat tidak baik untuk tubuh."},
      {jp:"無理に訳すことなく、そのまま聞き取る練習も大事だ。",kana:"むりにやくすことなく、そのままききとるれんしゅうもだいじだ。",romaji:"Muri ni yakusu kotonaku, sonomama kiki toru renshuu mo daiji da.",meaning:"Berlatih menangkap makna tanpa langsung menerjemahkan juga penting."}
    ]}
  ]},

  // ── GR-N1-42: 〜ずにはおかない / ないではおかない ──
  {id:"GR-N1-42",level:"N1",title:"〜ずにはおかない / ないではおかない",summary:"Pola 〜ずにはおかない / ないではおかない untuk level N1, dengan contoh penggunaan dalam konteks sekolah, kantor, layanan publik, dan kehidupan sehari-hari di Jepang.",groups:[
    {name:"〜ずにはおかない / ないではおかない",description:"Contoh penggunaan 〜ずにはおかない / ないではおかない dalam konteks alami sehari-hari di Jepang.",sentences:[
      {jp:"今日は寄り道せずに、まっすぐ家に帰る。",kana:"こんにちはよりみちせずに、まっすぐいえにかえる。",romaji:"Konnichiha yorimichi sezuni, massugu ie ni kaeru.",meaning:"Hari ini saya pulang langsung ke rumah tanpa mampir ke mana-mana."},
      {jp:"大声を出すことなく、落ち着いて案内してくれた。",kana:"おおごえをだすことなく、おちついてあんないしてくれた。",romaji:"Oogoe wo dasu kotonaku, ochitsui te annai shitekureta.",meaning:"Dia memberi arahan dengan tenang tanpa meninggikan suara."},
      {jp:"詳しく説明せずとも、表情を見れば事情は伝わった。",kana:"くわしくせつめいせずとも、ひょうじょうをみればじじょうはつたわった。",romaji:"Kuwashiku setsumeise zutomo, hyoujou wo mire ba jijou ha tsutawa tta.",meaning:"Tanpa penjelasan panjang pun, situasinya tersampaikan hanya dari ekspresi wajah."},
      {jp:"休憩を取らずに働き続けるのは体によくない。",kana:"きゅうけいをとらずにはたらきつづけるのはからだによくない。",romaji:"Kyuukei wo tora zuni hataraki tsuzuke runoha karada niyokunai.",meaning:"Terus bekerja tanpa istirahat tidak baik untuk tubuh."},
      {jp:"無理に訳すことなく、そのまま聞き取る練習も大事だ。",kana:"むりにやくすことなく、そのままききとるれんしゅうもだいじだ。",romaji:"Muri ni yakusu kotonaku, sonomama kiki toru renshuu mo daiji da.",meaning:"Berlatih menangkap makna tanpa langsung menerjemahkan juga penting."}
    ]}
  ]},

  // ── GR-N1-43: 〜ずには済まない / ないでは済まない ──
  {id:"GR-N1-43",level:"N1",title:"〜ずには済まない / ないでは済まない",summary:"Pola 〜ずには済まない / ないでは済まない untuk level N1, dengan contoh penggunaan dalam konteks sekolah, kantor, layanan publik, dan kehidupan sehari-hari di Jepang.",groups:[
    {name:"〜ずには済まない / ないでは済まない",description:"Contoh penggunaan 〜ずには済まない / ないでは済まない dalam konteks alami sehari-hari di Jepang.",sentences:[
      {jp:"今日は寄り道せずに、まっすぐ家に帰る。",kana:"こんにちはよりみちせずに、まっすぐいえにかえる。",romaji:"Konnichiha yorimichi sezuni, massugu ie ni kaeru.",meaning:"Hari ini saya pulang langsung ke rumah tanpa mampir ke mana-mana."},
      {jp:"大声を出すことなく、落ち着いて案内してくれた。",kana:"おおごえをだすことなく、おちついてあんないしてくれた。",romaji:"Oogoe wo dasu kotonaku, ochitsui te annai shitekureta.",meaning:"Dia memberi arahan dengan tenang tanpa meninggikan suara."},
      {jp:"詳しく説明せずとも、表情を見れば事情は伝わった。",kana:"くわしくせつめいせずとも、ひょうじょうをみればじじょうはつたわった。",romaji:"Kuwashiku setsumeise zutomo, hyoujou wo mire ba jijou ha tsutawa tta.",meaning:"Tanpa penjelasan panjang pun, situasinya tersampaikan hanya dari ekspresi wajah."},
      {jp:"休憩を取らずに働き続けるのは体によくない。",kana:"きゅうけいをとらずにはたらきつづけるのはからだによくない。",romaji:"Kyuukei wo tora zuni hataraki tsuzuke runoha karada niyokunai.",meaning:"Terus bekerja tanpa istirahat tidak baik untuk tubuh."},
      {jp:"無理に訳すことなく、そのまま聞き取る練習も大事だ。",kana:"むりにやくすことなく、そのままききとるれんしゅうもだいじだ。",romaji:"Muri ni yakusu kotonaku, sonomama kiki toru renshuu mo daiji da.",meaning:"Berlatih menangkap makna tanpa langsung menerjemahkan juga penting."}
    ]}
  ]},

  // ── GR-N1-44: 〜術がない ──
  {id:"GR-N1-44",level:"N1",title:"〜術がない",summary:"Pola 〜術がない untuk level N1, dengan contoh penggunaan dalam konteks sekolah, kantor, layanan publik, dan kehidupan sehari-hari di Jepang.",groups:[
    {name:"〜術がない",description:"Contoh penggunaan 〜術がない dalam konteks alami sehari-hari di Jepang.",sentences:[
      {jp:"この前の説明会では、術がないという表現も実際の場面で使われていた。",kana:"このまえのせつめいかいでは、じゅつがないというひょうげんもじっさいのばめんでつかわれていた。",romaji:"Kono mae no setsumeikai deha, jutsu ganaitoiu hyougen mo jissai no bamen de tsukawa reteita.",meaning:"Pada sesi penjelasan sebelumnya, ungkapan ini juga dipakai dalam situasi nyata."},
      {jp:"区役所や学校でも、術がないのような言い方を見かけることがある。",kana:"くやくしょやがっこうでも、じゅつがないのようないいかたをみかけることがある。",romaji:"Kuyakusho ya gakkou demo, jutsu ganainoyouna iikata wo mikake rukotogaaru.",meaning:"Di balai kota maupun sekolah, kadang terlihat cara ungkap seperti ini."},
      {jp:"職場の会話では、術がないを使うと少し自然な言い方になる。",kana:"しょくばのかいわでは、じゅつがないをつかうとすこししぜんないいかたになる。",romaji:"Shokuba no kaiwa deha, jutsu ganaiwo tsukau to sukoshi shizen na iikata ninaru.",meaning:"Dalam percakapan kerja, memakai pola ini bisa membuat ungkapan terdengar lebih alami."},
      {jp:"駅前の店で店員さんが話しているのを聞いて、術がないの使い方がよく分かった。",kana:"えきまえのみせでてんいんさんがはなしているのをきいて、じゅつがないのつかいかたがよくわかった。",romaji:"Ekimae no mise de ten'in sanga hanashi teirunowo kii te, jutsu ganaino tsukaikata gayoku waka tta.",meaning:"Saat mendengar staf toko di depan stasiun berbicara, saya jadi lebih paham cara pakai pola ini."},
      {jp:"授業だけでなく、日常の場面でも術がないは意外とよく出てくる。",kana:"じゅぎょうだけでなく、にちじょうのばめんでもじゅつがないはいがいとよくでてくる。",romaji:"Jugyou dakedenaku, nichijou no bamen demo jutsu ganaiha igai toyoku dete kuru.",meaning:"Bukan hanya di kelas, pola ini ternyata cukup sering muncul dalam keseharian."}
    ]}
  ]},

  // ── GR-N1-45: 〜すら / ですら ──
  {id:"GR-N1-45",level:"N1",title:"〜すら / ですら",summary:"Pola 〜すら / ですら untuk level N1, dengan contoh penggunaan dalam konteks sekolah, kantor, layanan publik, dan kehidupan sehari-hari di Jepang.",groups:[
    {name:"〜すら / ですら",description:"Contoh penggunaan 〜すら / ですら dalam konteks alami sehari-hari di Jepang.",sentences:[
      {jp:"この前の説明会では、すらという表現も実際の場面で使われていた。",kana:"このまえのせつめいかいでは、すらというひょうげんもじっさいのばめんでつかわれていた。",romaji:"Kono mae no setsumeikai deha, suratoiu hyougen mo jissai no bamen de tsukawa reteita.",meaning:"Pada sesi penjelasan sebelumnya, ungkapan ini juga dipakai dalam situasi nyata."},
      {jp:"区役所や学校でも、すらのような言い方を見かけることがある。",kana:"くやくしょやがっこうでも、すらのようないいかたをみかけることがある。",romaji:"Kuyakusho ya gakkou demo, suranoyouna iikata wo mikake rukotogaaru.",meaning:"Di balai kota maupun sekolah, kadang terlihat cara ungkap seperti ini."},
      {jp:"職場の会話では、すらを使うと少し自然な言い方になる。",kana:"しょくばのかいわでは、すらをつかうとすこししぜんないいかたになる。",romaji:"Shokuba no kaiwa deha, surawo tsukau to sukoshi shizen na iikata ninaru.",meaning:"Dalam percakapan kerja, memakai pola ini bisa membuat ungkapan terdengar lebih alami."},
      {jp:"駅前の店で店員さんが話しているのを聞いて、すらの使い方がよく分かった。",kana:"えきまえのみせでてんいんさんがはなしているのをきいて、すらのつかいかたがよくわかった。",romaji:"Ekimae no mise de ten'in sanga hanashi teirunowo kii te, surano tsukaikata gayoku waka tta.",meaning:"Saat mendengar staf toko di depan stasiun berbicara, saya jadi lebih paham cara pakai pola ini."},
      {jp:"授業だけでなく、日常の場面でもすらは意外とよく出てくる。",kana:"じゅぎょうだけでなく、にちじょうのばめんでもすらはいがいとよくでてくる。",romaji:"Jugyou dakedenaku, nichijou no bamen demosuraha igai toyoku dete kuru.",meaning:"Bukan hanya di kelas, pola ini ternyata cukup sering muncul dalam keseharian."}
    ]}
  ]},

  // ── GR-N1-46: 〜ぞ ──
  {id:"GR-N1-46",level:"N1",title:"〜ぞ",summary:"Pola 〜ぞ untuk level N1, dengan contoh penggunaan dalam konteks sekolah, kantor, layanan publik, dan kehidupan sehari-hari di Jepang.",groups:[
    {name:"〜ぞ",description:"Contoh penggunaan 〜ぞ dalam konteks alami sehari-hari di Jepang.",sentences:[
      {jp:"今度こそ、日本語の面接を落ち着いて受けてみせるぞ。",kana:"こんどこそ、にほんごのめんせつをおちついてうけてみせるぞ。",romaji:"Kondo koso, nihongo no mensetsu wo ochitsui te uke temiseruzo.",meaning:"Kali ini saya benar-benar akan menghadapi wawancara bahasa Jepang dengan tenang."},
      {jp:"今日は残っている書類を全部片づけるぞ。",kana:"こんにちはのこっているしょるいをぜんぶかたづけるぞ。",romaji:"Konnichiha nokotsu teiru shorui wo zenbu katazu keruzo.",meaning:"Hari ini saya akan membereskan semua dokumen yang tersisa."},
      {jp:"朝の電車は混むけど、遅刻しないように頑張るぞ。",kana:"あさのでんしゃはこむけど、ちこくしないようにがんばるぞ。",romaji:"Asa no densha ha komu kedo, chikoku shinaiyouni ganbaru zo.",meaning:"Kereta pagi memang ramai, tapi saya akan berusaha agar tidak terlambat."},
      {jp:"次の休みには、近所の図書館に必ず行くぞ。",kana:"つぎのやすみには、きんじょのとしょかんにかならずいくぞ。",romaji:"Tsugino yasumi niha, kinjo no toshokan ni kanarazu iku zo.",meaning:"Saat libur berikutnya, saya pasti akan pergi ke perpustakaan dekat rumah."},
      {jp:"今月は使いすぎに気をつけて、ちゃんと貯金するぞ。",kana:"こんげつはつかいすぎにきをつけて、ちゃんとちょきんするぞ。",romaji:"Kongetsu ha tsukai sugini kiwo tsukete, chanto chokin suruzo.",meaning:"Bulan ini saya akan hati-hati agar tidak terlalu boros dan benar-benar menabung."}
    ]}
  ]},

  // ── GR-N1-48: 〜そっちのけで ──
  {id:"GR-N1-48",level:"N1",title:"〜そっちのけで",summary:"Pola 〜そっちのけで untuk level N1, dengan contoh penggunaan dalam konteks sekolah, kantor, layanan publik, dan kehidupan sehari-hari di Jepang.",groups:[
    {name:"〜そっちのけで",description:"Contoh penggunaan 〜そっちのけで dalam konteks alami sehari-hari di Jepang.",sentences:[
      {jp:"この前の説明会では、そっちのけでという表現も実際の場面で使われていた。",kana:"このまえのせつめいかいでは、そっちのけでというひょうげんもじっさいのばめんでつかわれていた。",romaji:"Kono mae no setsumeikai deha, sotchinokedetoiu hyougen mo jissai no bamen de tsukawa reteita.",meaning:"Pada sesi penjelasan sebelumnya, ungkapan ini juga dipakai dalam situasi nyata."},
      {jp:"区役所や学校でも、そっちのけでのような言い方を見かけることがある。",kana:"くやくしょやがっこうでも、そっちのけでのようないいかたをみかけることがある。",romaji:"Kuyakusho ya gakkou demo, sotchinokedenoyouna iikata wo mikake rukotogaaru.",meaning:"Di balai kota maupun sekolah, kadang terlihat cara ungkap seperti ini."},
      {jp:"職場の会話では、そっちのけでを使うと少し自然な言い方になる。",kana:"しょくばのかいわでは、そっちのけでをつかうとすこししぜんないいかたになる。",romaji:"Shokuba no kaiwa deha, sotchinokedewo tsukau to sukoshi shizen na iikata ninaru.",meaning:"Dalam percakapan kerja, memakai pola ini bisa membuat ungkapan terdengar lebih alami."},
      {jp:"駅前の店で店員さんが話しているのを聞いて、そっちのけでの使い方がよく分かった。",kana:"えきまえのみせでてんいんさんがはなしているのをきいて、そっちのけでのつかいかたがよくわかった。",romaji:"Ekimae no mise de ten'in sanga hanashi teirunowo kii te, sotchinokedeno tsukaikata gayoku waka tta.",meaning:"Saat mendengar staf toko di depan stasiun berbicara, saya jadi lebih paham cara pakai pola ini."},
      {jp:"授業だけでなく、日常の場面でもそっちのけでは意外とよく出てくる。",kana:"じゅぎょうだけでなく、にちじょうのばめんでもそっちのけではいがいとよくでてくる。",romaji:"Jugyou dakedenaku, nichijou no bamen demosotchinokedeha igai toyoku dete kuru.",meaning:"Bukan hanya di kelas, pola ini ternyata cukup sering muncul dalam keseharian."}
    ]}
  ]},

  // ── GR-N1-49: 〜そばから ──
  {id:"GR-N1-49",level:"N1",title:"〜そばから",summary:"Pola 〜そばから untuk level N1, dengan contoh penggunaan dalam konteks sekolah, kantor, layanan publik, dan kehidupan sehari-hari di Jepang.",groups:[
    {name:"〜そばから",description:"Contoh penggunaan 〜そばから dalam konteks alami sehari-hari di Jepang.",sentences:[
      {jp:"時間があれば、区役所のあとで銀行にも寄りたい。",kana:"じかんがあれば、くやくしょのあとでぎんこうにもよりたい。",romaji:"Jikan gaareba, kuyakusho noatode ginkou nimo yori tai.",meaning:"Kalau ada waktu, setelah ke balai kota saya juga ingin mampir ke bank."},
      {jp:"もう少し安ければ、その部屋に決めたかもしれない。",kana:"もうすこしやすければ、そのへやにきめたかもしれない。",romaji:"Mou sukoshi yasuke reba, sono heya ni kime takamoshirenai.",meaning:"Kalau sedikit lebih murah, mungkin saya akan memilih kamar itu."},
      {jp:"駅から近ければ、多少狭くても我慢できる。",kana:"えきからちかければ、たしょうせまくてもがまんできる。",romaji:"Eki kara chikake reba, tashou semaku temo gaman dekiru.",meaning:"Kalau dekat dari stasiun, walau agak sempit saya masih bisa menerima."},
      {jp:"店長に聞けば、細かいルールもすぐ分かる。",kana:"てんちょうにきけば、こまかいるーるもすぐわかる。",romaji:"Tenchou ni kike ba, komakai ruuru mosugu waka ru.",meaning:"Kalau bertanya ke manajer toko, aturan detailnya juga cepat dipahami."},
      {jp:"早く寝れば、明日の朝も楽になる。",kana:"はやくねれば、あしたのあさもらくになる。",romaji:"Hayaku nere ba, ashita no asa mo raku ninaru.",meaning:"Kalau tidur lebih awal, besok pagi juga akan terasa lebih ringan."}
    ]}
  ]},

  // ── GR-N1-51: 〜たが最後 / 〜たら最後 ──
  {id:"GR-N1-51",level:"N1",title:"〜たが最後 / 〜たら最後",summary:"Pola 〜たが最後 / 〜たら最後 untuk level N1, dengan contoh penggunaan dalam konteks sekolah, kantor, layanan publik, dan kehidupan sehari-hari di Jepang.",groups:[
    {name:"〜たが最後 / 〜たら最後",description:"Contoh penggunaan 〜たが最後 / 〜たら最後 dalam konteks alami sehari-hari di Jepang.",sentences:[
      {jp:"書類を出したが最後, 受付番号を受け取った。",kana:"しょるいをだしたがさいご, うけつけばんごうをうけとった。",romaji:"Shorui wo dashi taga saigo,   uketsukebangou wo uketotsu ta.",meaning:"Setelah menyerahkan dokumen itu, saya menerima nomor antrean."},
      {jp:"部屋を見たが最後, その日のうちに申し込む人も多い。",kana:"へやをみたがさいご, そのにちのうちにもうしこむにんもおおい。",romaji:"Heya wo mita ga saigo,   sono nichi nouchini moushikomu nin mo ooi.",meaning:"Setelah melihat kamar itu, banyak orang langsung mendaftar pada hari yang sama."},
      {jp:"電車を降りたが最後, 風の強さに驚いた。",kana:"でんしゃをおりたがさいご, かぜのつよさにおどろいた。",romaji:"Densha wo ori taga saigo,   kaze no tsuyosa ni odoroi ta.",meaning:"Begitu turun dari kereta, saya terkejut oleh kencangnya angin."},
      {jp:"先生に会ったが最後, 少し安心した。",kana:"せんせいにあったがさいご, すこしあんしんした。",romaji:"Sensei ni atsu taga saigo,   sukoshi anshinshi ta.",meaning:"Setelah bertemu sensei, saya merasa sedikit lega."},
      {jp:"店に入ったが最後, だしのいい香りが広がっていた。",kana:"みせにいっったがさいご, だしのいいかおりがひろがっていた。",romaji:"Mise ni itsutsu taga saigo,   dashinoii kaori ga hiroga tteita.",meaning:"Begitu masuk toko, aroma kaldu yang sedap langsung terasa."}
    ]}
  ]},

  // ── GR-N1-52: 〜のみだ ──
  {id:"GR-N1-52",level:"N1",title:"〜のみだ",summary:"Pola 〜のみだ untuk level N1, dengan contoh penggunaan dalam konteks sekolah, kantor, layanan publik, dan kehidupan sehari-hari di Jepang.",groups:[
    {name:"〜のみだ",description:"Contoh penggunaan 〜のみだ dalam konteks alami sehari-hari di Jepang.",sentences:[
      {jp:"この前の説明会では、のみだという表現も実際の場面で使われていた。",kana:"このまえのせつめいかいでは、のみだというひょうげんもじっさいのばめんでつかわれていた。",romaji:"Kono mae no setsumeikai deha, nomidatoiu hyougen mo jissai no bamen de tsukawa reteita.",meaning:"Pada sesi penjelasan sebelumnya, ungkapan ini juga dipakai dalam situasi nyata."},
      {jp:"区役所や学校でも、のみだのような言い方を見かけることがある。",kana:"くやくしょやがっこうでも、のみだのようないいかたをみかけることがある。",romaji:"Kuyakusho ya gakkou demo, nomidanoyouna iikata wo mikake rukotogaaru.",meaning:"Di balai kota maupun sekolah, kadang terlihat cara ungkap seperti ini."},
      {jp:"職場の会話では、のみだを使うと少し自然な言い方になる。",kana:"しょくばのかいわでは、のみだをつかうとすこししぜんないいかたになる。",romaji:"Shokuba no kaiwa deha, nomidawo tsukau to sukoshi shizen na iikata ninaru.",meaning:"Dalam percakapan kerja, memakai pola ini bisa membuat ungkapan terdengar lebih alami."},
      {jp:"駅前の店で店員さんが話しているのを聞いて、のみだの使い方がよく分かった。",kana:"えきまえのみせでてんいんさんがはなしているのをきいて、のみだのつかいかたがよくわかった。",romaji:"Ekimae no mise de ten'in sanga hanashi teirunowo kii te, nomidano tsukaikata gayoku waka tta.",meaning:"Saat mendengar staf toko di depan stasiun berbicara, saya jadi lebih paham cara pakai pola ini."},
      {jp:"授業だけでなく、日常の場面でものみだは意外とよく出てくる。",kana:"じゅぎょうだけでなく、にちじょうのばめんでものみだはいがいとよくでてくる。",romaji:"Jugyou dakedenaku, nichijou no bamen demonomidaha igai toyoku dete kuru.",meaning:"Bukan hanya di kelas, pola ini ternyata cukup sering muncul dalam keseharian."}
    ]}
  ]},

  // ── GR-N1-53: 〜たつもりはない ──
  {id:"GR-N1-53",level:"N1",title:"〜たつもりはない",summary:"Pola 〜たつもりはない untuk level N1, dengan contoh penggunaan dalam konteks sekolah, kantor, layanan publik, dan kehidupan sehari-hari di Jepang.",groups:[
    {name:"〜たつもりはない",description:"Contoh penggunaan 〜たつもりはない dalam konteks alami sehari-hari di Jepang.",sentences:[
      {jp:"書類を出したつもりはない, 受付番号を受け取った。",kana:"しょるいをだしたつもりはない, うけつけばんごうをうけとった。",romaji:"Shorui wo dashi tatsumorihanai,   uketsukebangou wo uketotsu ta.",meaning:"Setelah menyerahkan dokumen itu, saya menerima nomor antrean."},
      {jp:"部屋を見たつもりはない, その日のうちに申し込む人も多い。",kana:"へやをみたつもりはない, そのにちのうちにもうしこむにんもおおい。",romaji:"Heya wo mita tsumorihanai,   sono nichi nouchini moushikomu nin mo ooi.",meaning:"Setelah melihat kamar itu, banyak orang langsung mendaftar pada hari yang sama."},
      {jp:"電車を降りたつもりはない, 風の強さに驚いた。",kana:"でんしゃをおりたつもりはない, かぜのつよさにおどろいた。",romaji:"Densha wo ori tatsumorihanai,   kaze no tsuyosa ni odoroi ta.",meaning:"Begitu turun dari kereta, saya terkejut oleh kencangnya angin."},
      {jp:"先生に会ったつもりはない, 少し安心した。",kana:"せんせいにあったつもりはない, すこしあんしんした。",romaji:"Sensei ni atsu tatsumorihanai,   sukoshi anshinshi ta.",meaning:"Setelah bertemu sensei, saya merasa sedikit lega."},
      {jp:"店に入ったつもりはない, だしのいい香りが広がっていた。",kana:"みせにいっったつもりはない, だしのいいかおりがひろがっていた。",romaji:"Mise ni itsutsu tatsumorihanai,   dashinoii kaori ga hiroga tteita.",meaning:"Begitu masuk toko, aroma kaldu yang sedap langsung terasa."}
    ]}
  ]},

  // ── GR-N1-54: 〜たところで ──
  {id:"GR-N1-54",level:"N1",title:"〜たところで",summary:"Pola 〜たところで untuk level N1, dengan contoh penggunaan dalam konteks sekolah, kantor, layanan publik, dan kehidupan sehari-hari di Jepang.",groups:[
    {name:"〜たところで",description:"Contoh penggunaan 〜たところで dalam konteks alami sehari-hari di Jepang.",sentences:[
      {jp:"書類を出したところで, 受付番号を受け取った。",kana:"しょるいをだしたところで, うけつけばんごうをうけとった。",romaji:"Shorui wo dashi tatokorode,   uketsukebangou wo uketotsu ta.",meaning:"Setelah menyerahkan dokumen itu, saya menerima nomor antrean."},
      {jp:"部屋を見たところで, その日のうちに申し込む人も多い。",kana:"へやをみたところで, そのにちのうちにもうしこむにんもおおい。",romaji:"Heya wo mita tokorode,   sono nichi nouchini moushikomu nin mo ooi.",meaning:"Setelah melihat kamar itu, banyak orang langsung mendaftar pada hari yang sama."},
      {jp:"電車を降りたところで, 風の強さに驚いた。",kana:"でんしゃをおりたところで, かぜのつよさにおどろいた。",romaji:"Densha wo ori tatokorode,   kaze no tsuyosa ni odoroi ta.",meaning:"Begitu turun dari kereta, saya terkejut oleh kencangnya angin."},
      {jp:"先生に会ったところで, 少し安心した。",kana:"せんせいにあったところで, すこしあんしんした。",romaji:"Sensei ni atsu tatokorode,   sukoshi anshinshi ta.",meaning:"Setelah bertemu sensei, saya merasa sedikit lega."},
      {jp:"店に入ったところで, だしのいい香りが広がっていた。",kana:"みせにいっったところで, だしのいいかおりがひろがっていた。",romaji:"Mise ni itsutsu tatokorode,   dashinoii kaori ga hiroga tteita.",meaning:"Begitu masuk toko, aroma kaldu yang sedap langsung terasa."}
    ]}
  ]},

  // ── GR-N1-55: 〜だに / だにしない ──
  {id:"GR-N1-55",level:"N1",title:"〜だに / だにしない",summary:"Pola 〜だに / だにしない untuk level N1, dengan contoh penggunaan dalam konteks sekolah, kantor, layanan publik, dan kehidupan sehari-hari di Jepang.",groups:[
    {name:"〜だに / だにしない",description:"Contoh penggunaan 〜だに / だにしない dalam konteks alami sehari-hari di Jepang.",sentences:[
      {jp:"この前の説明会では、だにという表現も実際の場面で使われていた。",kana:"このまえのせつめいかいでは、だにというひょうげんもじっさいのばめんでつかわれていた。",romaji:"Kono mae no setsumeikai deha, danitoiu hyougen mo jissai no bamen de tsukawa reteita.",meaning:"Pada sesi penjelasan sebelumnya, ungkapan ini juga dipakai dalam situasi nyata."},
      {jp:"区役所や学校でも、だにのような言い方を見かけることがある。",kana:"くやくしょやがっこうでも、だにのようないいかたをみかけることがある。",romaji:"Kuyakusho ya gakkou demo, daninoyouna iikata wo mikake rukotogaaru.",meaning:"Di balai kota maupun sekolah, kadang terlihat cara ungkap seperti ini."},
      {jp:"職場の会話では、だにを使うと少し自然な言い方になる。",kana:"しょくばのかいわでは、だにをつかうとすこししぜんないいかたになる。",romaji:"Shokuba no kaiwa deha, daniwo tsukau to sukoshi shizen na iikata ninaru.",meaning:"Dalam percakapan kerja, memakai pola ini bisa membuat ungkapan terdengar lebih alami."},
      {jp:"駅前の店で店員さんが話しているのを聞いて、だにの使い方がよく分かった。",kana:"えきまえのみせでてんいんさんがはなしているのをきいて、だにのつかいかたがよくわかった。",romaji:"Ekimae no mise de ten'in sanga hanashi teirunowo kii te, danino tsukaikata gayoku waka tta.",meaning:"Saat mendengar staf toko di depan stasiun berbicara, saya jadi lebih paham cara pakai pola ini."},
      {jp:"授業だけでなく、日常の場面でもだには意外とよく出てくる。",kana:"じゅぎょうだけでなく、にちじょうのばめんでもだにはいがいとよくでてくる。",romaji:"Jugyou dakedenaku, nichijou no bamen demodaniha igai toyoku dete kuru.",meaning:"Bukan hanya di kelas, pola ini ternyata cukup sering muncul dalam keseharian."}
    ]}
  ]},

  // ── GR-N1-56: 〜だの〜だの ──
  {id:"GR-N1-56",level:"N1",title:"〜だの〜だの",summary:"Pola 〜だの〜だの untuk level N1, dengan contoh penggunaan dalam konteks sekolah, kantor, layanan publik, dan kehidupan sehari-hari di Jepang.",groups:[
    {name:"〜だの〜だの",description:"Contoh penggunaan 〜だの〜だの dalam konteks alami sehari-hari di Jepang.",sentences:[
      {jp:"この前の説明会では、だのだのという表現も実際の場面で使われていた。",kana:"このまえのせつめいかいでは、だのだのというひょうげんもじっさいのばめんでつかわれていた。",romaji:"Kono mae no setsumeikai deha, danodanotoiu hyougen mo jissai no bamen de tsukawa reteita.",meaning:"Pada sesi penjelasan sebelumnya, ungkapan ini juga dipakai dalam situasi nyata."},
      {jp:"区役所や学校でも、だのだののような言い方を見かけることがある。",kana:"くやくしょやがっこうでも、だのだののようないいかたをみかけることがある。",romaji:"Kuyakusho ya gakkou demo, danodanonoyouna iikata wo mikake rukotogaaru.",meaning:"Di balai kota maupun sekolah, kadang terlihat cara ungkap seperti ini."},
      {jp:"職場の会話では、だのだのを使うと少し自然な言い方になる。",kana:"しょくばのかいわでは、だのだのをつかうとすこししぜんないいかたになる。",romaji:"Shokuba no kaiwa deha, danodanowo tsukau to sukoshi shizen na iikata ninaru.",meaning:"Dalam percakapan kerja, memakai pola ini bisa membuat ungkapan terdengar lebih alami."},
      {jp:"駅前の店で店員さんが話しているのを聞いて、だのだのの使い方がよく分かった。",kana:"えきまえのみせでてんいんさんがはなしているのをきいて、だのだののつかいかたがよくわかった。",romaji:"Ekimae no mise de ten'in sanga hanashi teirunowo kii te, danodanono tsukaikata gayoku waka tta.",meaning:"Saat mendengar staf toko di depan stasiun berbicara, saya jadi lebih paham cara pakai pola ini."},
      {jp:"授業だけでなく、日常の場面でもだのだのは意外とよく出てくる。",kana:"じゅぎょうだけでなく、にちじょうのばめんでもだのだのはいがいとよくでてくる。",romaji:"Jugyou dakedenaku, nichijou no bamen demodanodanoha igai toyoku dete kuru.",meaning:"Bukan hanya di kelas, pola ini ternyata cukup sering muncul dalam keseharian."}
    ]}
  ]},

  // ── GR-N1-57: 〜た弾みに / 〜た拍子に ──
  {id:"GR-N1-57",level:"N1",title:"〜た弾みに / 〜た拍子に",summary:"Pola 〜た弾みに / 〜た拍子に untuk level N1, dengan contoh penggunaan dalam konteks sekolah, kantor, layanan publik, dan kehidupan sehari-hari di Jepang.",groups:[
    {name:"〜た弾みに / 〜た拍子に",description:"Contoh penggunaan 〜た弾みに / 〜た拍子に dalam konteks alami sehari-hari di Jepang.",sentences:[
      {jp:"書類を出した弾みに, 受付番号を受け取った。",kana:"しょるいをだしたはずみに, うけつけばんごうをうけとった。",romaji:"Shorui wo dashi ta hazumi ni,   uketsukebangou wo uketotsu ta.",meaning:"Setelah menyerahkan dokumen itu, saya menerima nomor antrean."},
      {jp:"部屋を見た弾みに, その日のうちに申し込む人も多い。",kana:"へやをみたはずみに, そのにちのうちにもうしこむにんもおおい。",romaji:"Heya wo mita hazumi ni,   sono nichi nouchini moushikomu nin mo ooi.",meaning:"Setelah melihat kamar itu, banyak orang langsung mendaftar pada hari yang sama."},
      {jp:"電車を降りた弾みに, 風の強さに驚いた。",kana:"でんしゃをおりたはずみに, かぜのつよさにおどろいた。",romaji:"Densha wo ori ta hazumi ni,   kaze no tsuyosa ni odoroi ta.",meaning:"Begitu turun dari kereta, saya terkejut oleh kencangnya angin."},
      {jp:"先生に会った弾みに, 少し安心した。",kana:"せんせいにあったはずみに, すこしあんしんした。",romaji:"Sensei ni atsu ta hazumi ni,   sukoshi anshinshi ta.",meaning:"Setelah bertemu sensei, saya merasa sedikit lega."},
      {jp:"店に入った弾みに, だしのいい香りが広がっていた。",kana:"みせにいっったはずみに, だしのいいかおりがひろがっていた。",romaji:"Mise ni itsutsu ta hazumi ni,   dashinoii kaori ga hiroga tteita.",meaning:"Begitu masuk toko, aroma kaldu yang sedap langsung terasa."}
    ]}
  ]},

  // ── GR-N1-58: 〜ためしがない ──
  {id:"GR-N1-58",level:"N1",title:"〜ためしがない",summary:"Pola 〜ためしがない untuk level N1, dengan contoh penggunaan dalam konteks sekolah, kantor, layanan publik, dan kehidupan sehari-hari di Jepang.",groups:[
    {name:"〜ためしがない",description:"Contoh penggunaan 〜ためしがない dalam konteks alami sehari-hari di Jepang.",sentences:[
      {jp:"書類を出しためしがない, 受付番号を受け取った。",kana:"しょるいをだしためしがない, うけつけばんごうをうけとった。",romaji:"Shorui wo dashi tameshiganai,   uketsukebangou wo uketotsu ta.",meaning:"Setelah menyerahkan dokumen itu, saya menerima nomor antrean."},
      {jp:"部屋を見ためしがない, その日のうちに申し込む人も多い。",kana:"へやをみためしがない, そのにちのうちにもうしこむにんもおおい。",romaji:"Heya wo mita meshiganai,   sono nichi nouchini moushikomu nin mo ooi.",meaning:"Setelah melihat kamar itu, banyak orang langsung mendaftar pada hari yang sama."},
      {jp:"電車を降りためしがない, 風の強さに驚いた。",kana:"でんしゃをおりためしがない, かぜのつよさにおどろいた。",romaji:"Densha wo ori tameshiganai,   kaze no tsuyosa ni odoroi ta.",meaning:"Begitu turun dari kereta, saya terkejut oleh kencangnya angin."},
      {jp:"先生に会っためしがない, 少し安心した。",kana:"せんせいにあっためしがない, すこしあんしんした。",romaji:"Sensei ni atsu tameshiganai,   sukoshi anshinshi ta.",meaning:"Setelah bertemu sensei, saya merasa sedikit lega."},
      {jp:"店に入っためしがない, だしのいい香りが広がっていた。",kana:"みせにいっっためしがない, だしのいいかおりがひろがっていた。",romaji:"Mise ni itsutsu tameshiganai,   dashinoii kaori ga hiroga tteita.",meaning:"Begitu masuk toko, aroma kaldu yang sedap langsung terasa."}
    ]}
  ]},

  // ── GR-N1-59: 〜たら〜たで ──
  {id:"GR-N1-59",level:"N1",title:"〜たら〜たで",summary:"Pola 〜たら〜たで untuk level N1, dengan contoh penggunaan dalam konteks sekolah, kantor, layanan publik, dan kehidupan sehari-hari di Jepang.",groups:[
    {name:"〜たら〜たで",description:"Contoh penggunaan 〜たら〜たで dalam konteks alami sehari-hari di Jepang.",sentences:[
      {jp:"書類を出したらたで, 受付番号を受け取った。",kana:"しょるいをだしたらたで, うけつけばんごうをうけとった。",romaji:"Shorui wo dashi taratade,   uketsukebangou wo uketotsu ta.",meaning:"Setelah menyerahkan dokumen itu, saya menerima nomor antrean."},
      {jp:"部屋を見たらたで, その日のうちに申し込む人も多い。",kana:"へやをみたらたで, そのにちのうちにもうしこむにんもおおい。",romaji:"Heya wo mita ratade,   sono nichi nouchini moushikomu nin mo ooi.",meaning:"Setelah melihat kamar itu, banyak orang langsung mendaftar pada hari yang sama."},
      {jp:"電車を降りたらたで, 風の強さに驚いた。",kana:"でんしゃをおりたらたで, かぜのつよさにおどろいた。",romaji:"Densha wo ori taratade,   kaze no tsuyosa ni odoroi ta.",meaning:"Begitu turun dari kereta, saya terkejut oleh kencangnya angin."},
      {jp:"先生に会ったらたで, 少し安心した。",kana:"せんせいにあったらたで, すこしあんしんした。",romaji:"Sensei ni atsu taratade,   sukoshi anshinshi ta.",meaning:"Setelah bertemu sensei, saya merasa sedikit lega."},
      {jp:"店に入ったらたで, だしのいい香りが広がっていた。",kana:"みせにいっったらたで, だしのいいかおりがひろがっていた。",romaji:"Mise ni itsutsu taratade,   dashinoii kaori ga hiroga tteita.",meaning:"Begitu masuk toko, aroma kaldu yang sedap langsung terasa."}
    ]}
  ]},

  // ── GR-N1-60: 〜たら〜ところだ ──
  {id:"GR-N1-60",level:"N1",title:"〜たら〜ところだ",summary:"Pola 〜たら〜ところだ untuk level N1, dengan contoh penggunaan dalam konteks sekolah, kantor, layanan publik, dan kehidupan sehari-hari di Jepang.",groups:[
    {name:"〜たら〜ところだ",description:"Contoh penggunaan 〜たら〜ところだ dalam konteks alami sehari-hari di Jepang.",sentences:[
      {jp:"書類を出したらところだ, 受付番号を受け取った。",kana:"しょるいをだしたらところだ, うけつけばんごうをうけとった。",romaji:"Shorui wo dashi taratokoroda,   uketsukebangou wo uketotsu ta.",meaning:"Setelah menyerahkan dokumen itu, saya menerima nomor antrean."},
      {jp:"部屋を見たらところだ, その日のうちに申し込む人も多い。",kana:"へやをみたらところだ, そのにちのうちにもうしこむにんもおおい。",romaji:"Heya wo mita ratokoroda,   sono nichi nouchini moushikomu nin mo ooi.",meaning:"Setelah melihat kamar itu, banyak orang langsung mendaftar pada hari yang sama."},
      {jp:"電車を降りたらところだ, 風の強さに驚いた。",kana:"でんしゃをおりたらところだ, かぜのつよさにおどろいた。",romaji:"Densha wo ori taratokoroda,   kaze no tsuyosa ni odoroi ta.",meaning:"Begitu turun dari kereta, saya terkejut oleh kencangnya angin."},
      {jp:"先生に会ったらところだ, 少し安心した。",kana:"せんせいにあったらところだ, すこしあんしんした。",romaji:"Sensei ni atsu taratokoroda,   sukoshi anshinshi ta.",meaning:"Setelah bertemu sensei, saya merasa sedikit lega."},
      {jp:"店に入ったらところだ, だしのいい香りが広がっていた。",kana:"みせにいっったらところだ, だしのいいかおりがひろがっていた。",romaji:"Mise ni itsutsu taratokoroda,   dashinoii kaori ga hiroga tteita.",meaning:"Begitu masuk toko, aroma kaldu yang sedap langsung terasa."}
    ]}
  ]},

  // ── GR-N1-61: 〜たらしい / ったらしい ──
  {id:"GR-N1-61",level:"N1",title:"〜たらしい / ったらしい",summary:"Pola 〜たらしい / ったらしい untuk level N1, dengan contoh penggunaan dalam konteks sekolah, kantor, layanan publik, dan kehidupan sehari-hari di Jepang.",groups:[
    {name:"〜たらしい / ったらしい",description:"Contoh penggunaan 〜たらしい / ったらしい dalam konteks alami sehari-hari di Jepang.",sentences:[
      {jp:"この辺りは春になると桜がきれいらしい。",kana:"このあたりははるになるとさくらがきれいらしい。",romaji:"Kono atari ha haru ninaruto sakura gakireirashii.",meaning:"Katanya saat musim semi daerah ini punya bunga sakura yang indah."},
      {jp:"新しくできた食堂は学生に人気らしい。",kana:"あたらしくできたしょくどうはがくせいににんきらしい。",romaji:"Atarashiku dekita shokudou ha gakusei ni ninki rashii.",meaning:"Katanya kantin yang baru dibuka itu populer di kalangan mahasiswa."},
      {jp:"あの人は今年から区役所で働いているらしい。",kana:"あのにんはこんねんからくやくしょではたらいているらしい。",romaji:"Ano nin ha konnen kara kuyakusho de hatarai teirurashii.",meaning:"Katanya orang itu mulai bekerja di balai kota sejak tahun ini."},
      {jp:"明日の説明会は予定より少し短くなるらしい。",kana:"あしたのせつめいかいはよていよりすこしみじかくなるらしい。",romaji:"Ashita no setsumeikai ha yotei yori sukoshi mijikaku narurashii.",meaning:"Katanya sesi penjelasan besok akan sedikit lebih singkat dari rencana."},
      {jp:"このアパートは防音がしっかりしているらしい。",kana:"このあぱーとはぼうおんがしっかりしているらしい。",romaji:"Kono apaato ha bouon gashikkarishiteirurashii.",meaning:"Katanya apartemen ini memiliki peredam suara yang bagus."}
    ]}
  ]},

  // ── GR-N1-62: 〜たりとも ──
  {id:"GR-N1-62",level:"N1",title:"〜たりとも",summary:"Pola 〜たりとも untuk level N1, dengan contoh penggunaan dalam konteks sekolah, kantor, layanan publik, dan kehidupan sehari-hari di Jepang.",groups:[
    {name:"〜たりとも",description:"Contoh penggunaan 〜たりとも dalam konteks alami sehari-hari di Jepang.",sentences:[
      {jp:"書類を出したりとも, 受付番号を受け取った。",kana:"しょるいをだしたりとも, うけつけばんごうをうけとった。",romaji:"Shorui wo dashi taritomo,   uketsukebangou wo uketotsu ta.",meaning:"Setelah menyerahkan dokumen itu, saya menerima nomor antrean."},
      {jp:"部屋を見たりとも, その日のうちに申し込む人も多い。",kana:"へやをみたりとも, そのにちのうちにもうしこむにんもおおい。",romaji:"Heya wo mita ritomo,   sono nichi nouchini moushikomu nin mo ooi.",meaning:"Setelah melihat kamar itu, banyak orang langsung mendaftar pada hari yang sama."},
      {jp:"電車を降りたりとも, 風の強さに驚いた。",kana:"でんしゃをおりたりとも, かぜのつよさにおどろいた。",romaji:"Densha wo ori taritomo,   kaze no tsuyosa ni odoroi ta.",meaning:"Begitu turun dari kereta, saya terkejut oleh kencangnya angin."},
      {jp:"先生に会ったりとも, 少し安心した。",kana:"せんせいにあったりとも, すこしあんしんした。",romaji:"Sensei ni atsu taritomo,   sukoshi anshinshi ta.",meaning:"Setelah bertemu sensei, saya merasa sedikit lega."},
      {jp:"店に入ったりとも, だしのいい香りが広がっていた。",kana:"みせにいっったりとも, だしのいいかおりがひろがっていた。",romaji:"Mise ni itsutsu taritomo,   dashinoii kaori ga hiroga tteita.",meaning:"Begitu masuk toko, aroma kaldu yang sedap langsung terasa."}
    ]}
  ]},

  // ── GR-N1-63: 〜たるもの ──
  {id:"GR-N1-63",level:"N1",title:"〜たるもの",summary:"Pola 〜たるもの untuk level N1, dengan contoh penggunaan dalam konteks sekolah, kantor, layanan publik, dan kehidupan sehari-hari di Jepang.",groups:[
    {name:"〜たるもの",description:"Contoh penggunaan 〜たるもの dalam konteks alami sehari-hari di Jepang.",sentences:[
      {jp:"書類を出したるもの, 受付番号を受け取った。",kana:"しょるいをだしたるもの, うけつけばんごうをうけとった。",romaji:"Shorui wo dashi tarumono,   uketsukebangou wo uketotsu ta.",meaning:"Setelah menyerahkan dokumen itu, saya menerima nomor antrean."},
      {jp:"部屋を見たるもの, その日のうちに申し込む人も多い。",kana:"へやをみたるもの, そのにちのうちにもうしこむにんもおおい。",romaji:"Heya wo mita rumono,   sono nichi nouchini moushikomu nin mo ooi.",meaning:"Setelah melihat kamar itu, banyak orang langsung mendaftar pada hari yang sama."},
      {jp:"電車を降りたるもの, 風の強さに驚いた。",kana:"でんしゃをおりたるもの, かぜのつよさにおどろいた。",romaji:"Densha wo ori tarumono,   kaze no tsuyosa ni odoroi ta.",meaning:"Begitu turun dari kereta, saya terkejut oleh kencangnya angin."},
      {jp:"先生に会ったるもの, 少し安心した。",kana:"せんせいにあったるもの, すこしあんしんした。",romaji:"Sensei ni atsu tarumono,   sukoshi anshinshi ta.",meaning:"Setelah bertemu sensei, saya merasa sedikit lega."},
      {jp:"店に入ったるもの, だしのいい香りが広がっていた。",kana:"みせにいっったるもの, だしのいいかおりがひろがっていた。",romaji:"Mise ni itsutsu tarumono,   dashinoii kaori ga hiroga tteita.",meaning:"Begitu masuk toko, aroma kaldu yang sedap langsung terasa."}
    ]}
  ]},

  // ── GR-N1-64: 〜だろうに ──
  {id:"GR-N1-64",level:"N1",title:"〜だろうに",summary:"Pola 〜だろうに untuk level N1, dengan contoh penggunaan dalam konteks sekolah, kantor, layanan publik, dan kehidupan sehari-hari di Jepang.",groups:[
    {name:"〜だろうに",description:"Contoh penggunaan 〜だろうに dalam konteks alami sehari-hari di Jepang.",sentences:[
      {jp:"この前の説明会では、だろうにという表現も実際の場面で使われていた。",kana:"このまえのせつめいかいでは、だろうにというひょうげんもじっさいのばめんでつかわれていた。",romaji:"Kono mae no setsumeikai deha, darounitoiu hyougen mo jissai no bamen de tsukawa reteita.",meaning:"Pada sesi penjelasan sebelumnya, ungkapan ini juga dipakai dalam situasi nyata."},
      {jp:"区役所や学校でも、だろうにのような言い方を見かけることがある。",kana:"くやくしょやがっこうでも、だろうにのようないいかたをみかけることがある。",romaji:"Kuyakusho ya gakkou demo, darouninoyouna iikata wo mikake rukotogaaru.",meaning:"Di balai kota maupun sekolah, kadang terlihat cara ungkap seperti ini."},
      {jp:"職場の会話では、だろうにを使うと少し自然な言い方になる。",kana:"しょくばのかいわでは、だろうにをつかうとすこししぜんないいかたになる。",romaji:"Shokuba no kaiwa deha, darouniwo tsukau to sukoshi shizen na iikata ninaru.",meaning:"Dalam percakapan kerja, memakai pola ini bisa membuat ungkapan terdengar lebih alami."},
      {jp:"駅前の店で店員さんが話しているのを聞いて、だろうにの使い方がよく分かった。",kana:"えきまえのみせでてんいんさんがはなしているのをきいて、だろうにのつかいかたがよくわかった。",romaji:"Ekimae no mise de ten'in sanga hanashi teirunowo kii te, darounino tsukaikata gayoku waka tta.",meaning:"Saat mendengar staf toko di depan stasiun berbicara, saya jadi lebih paham cara pakai pola ini."},
      {jp:"授業だけでなく、日常の場面でもだろうには意外とよく出てくる。",kana:"じゅぎょうだけでなく、にちじょうのばめんでもだろうにはいがいとよくでてくる。",romaji:"Jugyou dakedenaku, nichijou no bamen demodarouniha igai toyoku dete kuru.",meaning:"Bukan hanya di kelas, pola ini ternyata cukup sering muncul dalam keseharian."}
    ]}
  ]},

  // ── GR-N1-65: 〜つ〜つ ──
  {id:"GR-N1-65",level:"N1",title:"〜つ〜つ",summary:"Pola 〜つ〜つ untuk level N1, dengan contoh penggunaan dalam konteks sekolah, kantor, layanan publik, dan kehidupan sehari-hari di Jepang.",groups:[
    {name:"〜つ〜つ",description:"Contoh penggunaan 〜つ〜つ dalam konteks alami sehari-hari di Jepang.",sentences:[
      {jp:"この前の説明会では、つつという表現も実際の場面で使われていた。",kana:"このまえのせつめいかいでは、つつというひょうげんもじっさいのばめんでつかわれていた。",romaji:"Kono mae no setsumeikai deha, tsutsutoiu hyougen mo jissai no bamen de tsukawa reteita.",meaning:"Pada sesi penjelasan sebelumnya, ungkapan ini juga dipakai dalam situasi nyata."},
      {jp:"区役所や学校でも、つつのような言い方を見かけることがある。",kana:"くやくしょやがっこうでも、つつのようないいかたをみかけることがある。",romaji:"Kuyakusho ya gakkou demo, tsutsunoyouna iikata wo mikake rukotogaaru.",meaning:"Di balai kota maupun sekolah, kadang terlihat cara ungkap seperti ini."},
      {jp:"職場の会話では、つつを使うと少し自然な言い方になる。",kana:"しょくばのかいわでは、つつをつかうとすこししぜんないいかたになる。",romaji:"Shokuba no kaiwa deha, tsutsuwo tsukau to sukoshi shizen na iikata ninaru.",meaning:"Dalam percakapan kerja, memakai pola ini bisa membuat ungkapan terdengar lebih alami."},
      {jp:"駅前の店で店員さんが話しているのを聞いて、つつの使い方がよく分かった。",kana:"えきまえのみせでてんいんさんがはなしているのをきいて、つつのつかいかたがよくわかった。",romaji:"Ekimae no mise de ten'in sanga hanashi teirunowo kii te, tsutsuno tsukaikata gayoku waka tta.",meaning:"Saat mendengar staf toko di depan stasiun berbicara, saya jadi lebih paham cara pakai pola ini."},
      {jp:"授業だけでなく、日常の場面でもつつは意外とよく出てくる。",kana:"じゅぎょうだけでなく、にちじょうのばめんでもつつはいがいとよくでてくる。",romaji:"Jugyou dakedenaku, nichijou no bamen demotsutsuha igai toyoku dete kuru.",meaning:"Bukan hanya di kelas, pola ini ternyata cukup sering muncul dalam keseharian."}
    ]}
  ]},

  // ── GR-N1-67: 〜ってば / ったら ──
  {id:"GR-N1-67",level:"N1",title:"〜ってば / ったら",summary:"Pola 〜ってば / ったら untuk level N1, dengan contoh penggunaan dalam konteks sekolah, kantor, layanan publik, dan kehidupan sehari-hari di Jepang.",groups:[
    {name:"〜ってば / ったら",description:"Contoh penggunaan 〜ってば / ったら dalam konteks alami sehari-hari di Jepang.",sentences:[
      {jp:"時間があれば、区役所のあとで銀行にも寄りたい。",kana:"じかんがあれば、くやくしょのあとでぎんこうにもよりたい。",romaji:"Jikan gaareba, kuyakusho noatode ginkou nimo yori tai.",meaning:"Kalau ada waktu, setelah ke balai kota saya juga ingin mampir ke bank."},
      {jp:"もう少し安ければ、その部屋に決めたかもしれない。",kana:"もうすこしやすければ、そのへやにきめたかもしれない。",romaji:"Mou sukoshi yasuke reba, sono heya ni kime takamoshirenai.",meaning:"Kalau sedikit lebih murah, mungkin saya akan memilih kamar itu."},
      {jp:"駅から近ければ、多少狭くても我慢できる。",kana:"えきからちかければ、たしょうせまくてもがまんできる。",romaji:"Eki kara chikake reba, tashou semaku temo gaman dekiru.",meaning:"Kalau dekat dari stasiun, walau agak sempit saya masih bisa menerima."},
      {jp:"店長に聞けば、細かいルールもすぐ分かる。",kana:"てんちょうにきけば、こまかいるーるもすぐわかる。",romaji:"Tenchou ni kike ba, komakai ruuru mosugu waka ru.",meaning:"Kalau bertanya ke manajer toko, aturan detailnya juga cepat dipahami."},
      {jp:"早く寝れば、明日の朝も楽になる。",kana:"はやくねれば、あしたのあさもらくになる。",romaji:"Hayaku nere ba, ashita no asa mo raku ninaru.",meaning:"Kalau tidur lebih awal, besok pagi juga akan terasa lebih ringan."}
    ]}
  ]},

  // ── GR-N1-68: 〜であれ / であろうと ──
  {id:"GR-N1-68",level:"N1",title:"〜であれ / であろうと",summary:"Pola 〜であれ / であろうと untuk level N1, dengan contoh penggunaan dalam konteks sekolah, kantor, layanan publik, dan kehidupan sehari-hari di Jepang.",groups:[
    {name:"〜であれ / であろうと",description:"Contoh penggunaan 〜であれ / であろうと dalam konteks alami sehari-hari di Jepang.",sentences:[
      {jp:"この前の説明会では、であれという表現も実際の場面で使われていた。",kana:"このまえのせつめいかいでは、であれというひょうげんもじっさいのばめんでつかわれていた。",romaji:"Kono mae no setsumeikai deha, dearetoiu hyougen mo jissai no bamen de tsukawa reteita.",meaning:"Pada sesi penjelasan sebelumnya, ungkapan ini juga dipakai dalam situasi nyata."},
      {jp:"区役所や学校でも、であれのような言い方を見かけることがある。",kana:"くやくしょやがっこうでも、であれのようないいかたをみかけることがある。",romaji:"Kuyakusho ya gakkou demo, dearenoyouna iikata wo mikake rukotogaaru.",meaning:"Di balai kota maupun sekolah, kadang terlihat cara ungkap seperti ini."},
      {jp:"職場の会話では、であれを使うと少し自然な言い方になる。",kana:"しょくばのかいわでは、であれをつかうとすこししぜんないいかたになる。",romaji:"Shokuba no kaiwa deha, dearewo tsukau to sukoshi shizen na iikata ninaru.",meaning:"Dalam percakapan kerja, memakai pola ini bisa membuat ungkapan terdengar lebih alami."},
      {jp:"駅前の店で店員さんが話しているのを聞いて、であれの使い方がよく分かった。",kana:"えきまえのみせでてんいんさんがはなしているのをきいて、であれのつかいかたがよくわかった。",romaji:"Ekimae no mise de ten'in sanga hanashi teirunowo kii te, deareno tsukaikata gayoku waka tta.",meaning:"Saat mendengar staf toko di depan stasiun berbicara, saya jadi lebih paham cara pakai pola ini."},
      {jp:"授業だけでなく、日常の場面でもであれは意外とよく出てくる。",kana:"じゅぎょうだけでなく、にちじょうのばめんでもであれはいがいとよくでてくる。",romaji:"Jugyou dakedenaku, nichijou no bamen demodeareha igai toyoku dete kuru.",meaning:"Bukan hanya di kelas, pola ini ternyata cukup sering muncul dalam keseharian."}
    ]}
  ]},

  // ── GR-N1-69: 〜て敵わない ──
  {id:"GR-N1-69",level:"N1",title:"〜て敵わない",summary:"Pola 〜て敵わない untuk level N1, dengan contoh penggunaan dalam konteks sekolah, kantor, layanan publik, dan kehidupan sehari-hari di Jepang.",groups:[
    {name:"〜て敵わない",description:"Contoh penggunaan 〜て敵わない dalam konteks alami sehari-hari di Jepang.",sentences:[
      {jp:"必要事項を確認してて敵わない、そのあとで申込書を出した。",kana:"ひつようじこうをかくにんしててかなわない、そのあとでもうしこみしょをだした。",romaji:"Hitsuyoujikou wo kakuninshi tete kanawa nai, sonoatode moushikomisho wo dashi ta.",meaning:"Setelah memeriksa poin yang diperlukan, saya lalu menyerahkan formulir pendaftaran."},
      {jp:"先に先生へ連絡してて敵わない, 予定を決めた。",kana:"さきにせんせいへれんらくしててかなわない, よていをきめた。",romaji:"Sakini sensei he renraku shitete kanawa nai,   yotei wo kime ta.",meaning:"Saya lebih dulu menghubungi sensei, lalu menentukan jadwal."},
      {jp:"荷物をまとめてて敵わない, すぐ出発できるようにした。",kana:"にもつをまとめててかなわない, すぐしゅっぱつできるようにした。",romaji:"Nimotsu womatometete kanawa nai,   sugu shuppatsu dekiruyounishita.",meaning:"Saya merapikan barang lebih dulu agar bisa segera berangkat."},
      {jp:"窓口で相談してて敵わない, 手続きを進めた。",kana:"まどぐちでそうだんしててかなわない, てつづきをすすめた。",romaji:"Madoguchi de soudan shitete kanawa nai,   tetsuzuki wo susume ta.",meaning:"Saya berkonsultasi di loket dulu lalu melanjutkan prosedurnya."},
      {jp:"一度落ち着いてて敵わない, 返事をすることにした。",kana:"いちどおちついててかなわない, へんじをすることにした。",romaji:"Ichido ochitsui tete kanawa nai,   henji wosurukotonishita.",meaning:"Saya memutuskan untuk menenangkan diri dulu baru memberi jawaban."}
    ]}
  ]},

  // ── GR-N1-70: 〜てからというもの ──
  {id:"GR-N1-70",level:"N1",title:"〜てからというもの",summary:"Pola 〜てからというもの untuk level N1, dengan contoh penggunaan dalam konteks sekolah, kantor, layanan publik, dan kehidupan sehari-hari di Jepang.",groups:[
    {name:"〜てからというもの",description:"Contoh penggunaan 〜てからというもの dalam konteks alami sehari-hari di Jepang.",sentences:[
      {jp:"必要事項を確認しててからというもの、そのあとで申込書を出した。",kana:"ひつようじこうをかくにんしててからというもの、そのあとでもうしこみしょをだした。",romaji:"Hitsuyoujikou wo kakuninshi tetekaratoiumono, sonoatode moushikomisho wo dashi ta.",meaning:"Setelah memeriksa poin yang diperlukan, saya lalu menyerahkan formulir pendaftaran."},
      {jp:"先に先生へ連絡しててからというもの, 予定を決めた。",kana:"さきにせんせいへれんらくしててからというもの, よていをきめた。",romaji:"Sakini sensei he renraku shitetekaratoiumono,   yotei wo kime ta.",meaning:"Saya lebih dulu menghubungi sensei, lalu menentukan jadwal."},
      {jp:"荷物をまとめててからというもの, すぐ出発できるようにした。",kana:"にもつをまとめててからというもの, すぐしゅっぱつできるようにした。",romaji:"Nimotsu womatometetekaratoiumono,   sugu shuppatsu dekiruyounishita.",meaning:"Saya merapikan barang lebih dulu agar bisa segera berangkat."},
      {jp:"窓口で相談しててからというもの, 手続きを進めた。",kana:"まどぐちでそうだんしててからというもの, てつづきをすすめた。",romaji:"Madoguchi de soudan shitetekaratoiumono,   tetsuzuki wo susume ta.",meaning:"Saya berkonsultasi di loket dulu lalu melanjutkan prosedurnya."},
      {jp:"一度落ち着いててからというもの, 返事をすることにした。",kana:"いちどおちついててからというもの, へんじをすることにした。",romaji:"Ichido ochitsui tetekaratoiumono,   henji wosurukotonishita.",meaning:"Saya memutuskan untuk menenangkan diri dulu baru memberi jawaban."}
    ]}
  ]},

  // ── GR-N1-71: 〜てしかるべきだ ──
  {id:"GR-N1-71",level:"N1",title:"〜てしかるべきだ",summary:"Pola 〜てしかるべきだ untuk level N1, dengan contoh penggunaan dalam konteks sekolah, kantor, layanan publik, dan kehidupan sehari-hari di Jepang.",groups:[
    {name:"〜てしかるべきだ",description:"Contoh penggunaan 〜てしかるべきだ dalam konteks alami sehari-hari di Jepang.",sentences:[
      {jp:"必要事項を確認しててしかるべきだ、そのあとで申込書を出した。",kana:"ひつようじこうをかくにんしててしかるべきだ、そのあとでもうしこみしょをだした。",romaji:"Hitsuyoujikou wo kakuninshi teteshikarubekida, sonoatode moushikomisho wo dashi ta.",meaning:"Setelah memeriksa poin yang diperlukan, saya lalu menyerahkan formulir pendaftaran."},
      {jp:"先に先生へ連絡しててしかるべきだ, 予定を決めた。",kana:"さきにせんせいへれんらくしててしかるべきだ, よていをきめた。",romaji:"Sakini sensei he renraku shiteteshikarubekida,   yotei wo kime ta.",meaning:"Saya lebih dulu menghubungi sensei, lalu menentukan jadwal."},
      {jp:"荷物をまとめててしかるべきだ, すぐ出発できるようにした。",kana:"にもつをまとめててしかるべきだ, すぐしゅっぱつできるようにした。",romaji:"Nimotsu womatometeteshikarubekida,   sugu shuppatsu dekiruyounishita.",meaning:"Saya merapikan barang lebih dulu agar bisa segera berangkat."},
      {jp:"窓口で相談しててしかるべきだ, 手続きを進めた。",kana:"まどぐちでそうだんしててしかるべきだ, てつづきをすすめた。",romaji:"Madoguchi de soudan shiteteshikarubekida,   tetsuzuki wo susume ta.",meaning:"Saya berkonsultasi di loket dulu lalu melanjutkan prosedurnya."},
      {jp:"一度落ち着いててしかるべきだ, 返事をすることにした。",kana:"いちどおちついててしかるべきだ, へんじをすることにした。",romaji:"Ichido ochitsui teteshikarubekida,   henji wosurukotonishita.",meaning:"Saya memutuskan untuk menenangkan diri dulu baru memberi jawaban."}
    ]}
  ]},

  // ── GR-N1-72: 〜て済むことではない ──
  {id:"GR-N1-72",level:"N1",title:"〜て済むことではない",summary:"Pola 〜て済むことではない untuk level N1, dengan contoh penggunaan dalam konteks sekolah, kantor, layanan publik, dan kehidupan sehari-hari di Jepang.",groups:[
    {name:"〜て済むことではない",description:"Contoh penggunaan 〜て済むことではない dalam konteks alami sehari-hari di Jepang.",sentences:[
      {jp:"必要事項を確認してて済むことではない、そのあとで申込書を出した。",kana:"ひつようじこうをかくにんしててすむことではない、そのあとでもうしこみしょをだした。",romaji:"Hitsuyoujikou wo kakuninshi tete sumu kotodehanai, sonoatode moushikomisho wo dashi ta.",meaning:"Setelah memeriksa poin yang diperlukan, saya lalu menyerahkan formulir pendaftaran."},
      {jp:"先に先生へ連絡してて済むことではない, 予定を決めた。",kana:"さきにせんせいへれんらくしててすむことではない, よていをきめた。",romaji:"Sakini sensei he renraku shitete sumu kotodehanai,   yotei wo kime ta.",meaning:"Saya lebih dulu menghubungi sensei, lalu menentukan jadwal."},
      {jp:"荷物をまとめてて済むことではない, すぐ出発できるようにした。",kana:"にもつをまとめててすむことではない, すぐしゅっぱつできるようにした。",romaji:"Nimotsu womatometete sumu kotodehanai,   sugu shuppatsu dekiruyounishita.",meaning:"Saya merapikan barang lebih dulu agar bisa segera berangkat."},
      {jp:"窓口で相談してて済むことではない, 手続きを進めた。",kana:"まどぐちでそうだんしててすむことではない, てつづきをすすめた。",romaji:"Madoguchi de soudan shitete sumu kotodehanai,   tetsuzuki wo susume ta.",meaning:"Saya berkonsultasi di loket dulu lalu melanjutkan prosedurnya."},
      {jp:"一度落ち着いてて済むことではない, 返事をすることにした。",kana:"いちどおちついててすむことではない, へんじをすることにした。",romaji:"Ichido ochitsui tete sumu kotodehanai,   henji wosurukotonishita.",meaning:"Saya memutuskan untuk menenangkan diri dulu baru memberi jawaban."}
    ]}
  ]},

  // ── GR-N1-73: 〜でなくてなんだろう ──
  {id:"GR-N1-73",level:"N1",title:"〜でなくてなんだろう",summary:"Pola 〜でなくてなんだろう untuk level N1, dengan contoh penggunaan dalam konteks sekolah, kantor, layanan publik, dan kehidupan sehari-hari di Jepang.",groups:[
    {name:"〜でなくてなんだろう",description:"Contoh penggunaan 〜でなくてなんだろう dalam konteks alami sehari-hari di Jepang.",sentences:[
      {jp:"この前の説明会では、でなくてなんだろうという表現も実際の場面で使われていた。",kana:"このまえのせつめいかいでは、でなくてなんだろうというひょうげんもじっさいのばめんでつかわれていた。",romaji:"Kono mae no setsumeikai deha, denakutenandaroutoiu hyougen mo jissai no bamen de tsukawa reteita.",meaning:"Pada sesi penjelasan sebelumnya, ungkapan ini juga dipakai dalam situasi nyata."},
      {jp:"区役所や学校でも、でなくてなんだろうのような言い方を見かけることがある。",kana:"くやくしょやがっこうでも、でなくてなんだろうのようないいかたをみかけることがある。",romaji:"Kuyakusho ya gakkou demo, denakutenandarounoyouna iikata wo mikake rukotogaaru.",meaning:"Di balai kota maupun sekolah, kadang terlihat cara ungkap seperti ini."},
      {jp:"職場の会話では、でなくてなんだろうを使うと少し自然な言い方になる。",kana:"しょくばのかいわでは、でなくてなんだろうをつかうとすこししぜんないいかたになる。",romaji:"Shokuba no kaiwa deha, denakutenandarouwo tsukau to sukoshi shizen na iikata ninaru.",meaning:"Dalam percakapan kerja, memakai pola ini bisa membuat ungkapan terdengar lebih alami."},
      {jp:"駅前の店で店員さんが話しているのを聞いて、でなくてなんだろうの使い方がよく分かった。",kana:"えきまえのみせでてんいんさんがはなしているのをきいて、でなくてなんだろうのつかいかたがよくわかった。",romaji:"Ekimae no mise de ten'in sanga hanashi teirunowo kii te, denakutenandarouno tsukaikata gayoku waka tta.",meaning:"Saat mendengar staf toko di depan stasiun berbicara, saya jadi lebih paham cara pakai pola ini."},
      {jp:"授業だけでなく、日常の場面でもでなくてなんだろうは意外とよく出てくる。",kana:"じゅぎょうだけでなく、にちじょうのばめんでもでなくてなんだろうはいがいとよくでてくる。",romaji:"Jugyou dakedenaku, nichijou no bamen demodenakutenandarouha igai toyoku dete kuru.",meaning:"Bukan hanya di kelas, pola ini ternyata cukup sering muncul dalam keseharian."}
    ]}
  ]},

  // ── GR-N1-74: 〜ではあるまいし / でもあるまいし ──
  {id:"GR-N1-74",level:"N1",title:"〜ではあるまいし / でもあるまいし",summary:"Pola 〜ではあるまいし / でもあるまいし untuk level N1, dengan contoh penggunaan dalam konteks sekolah, kantor, layanan publik, dan kehidupan sehari-hari di Jepang.",groups:[
    {name:"〜ではあるまいし / でもあるまいし",description:"Contoh penggunaan 〜ではあるまいし / でもあるまいし dalam konteks alami sehari-hari di Jepang.",sentences:[
      {jp:"この前の説明会では、ではあるまいしという表現も実際の場面で使われていた。",kana:"このまえのせつめいかいでは、ではあるまいしというひょうげんもじっさいのばめんでつかわれていた。",romaji:"Kono mae no setsumeikai deha, dehaarumaishitoiu hyougen mo jissai no bamen de tsukawa reteita.",meaning:"Pada sesi penjelasan sebelumnya, ungkapan ini juga dipakai dalam situasi nyata."},
      {jp:"区役所や学校でも、ではあるまいしのような言い方を見かけることがある。",kana:"くやくしょやがっこうでも、ではあるまいしのようないいかたをみかけることがある。",romaji:"Kuyakusho ya gakkou demo, dehaarumaishinoyouna iikata wo mikake rukotogaaru.",meaning:"Di balai kota maupun sekolah, kadang terlihat cara ungkap seperti ini."},
      {jp:"職場の会話では、ではあるまいしを使うと少し自然な言い方になる。",kana:"しょくばのかいわでは、ではあるまいしをつかうとすこししぜんないいかたになる。",romaji:"Shokuba no kaiwa deha, dehaarumaishiwo tsukau to sukoshi shizen na iikata ninaru.",meaning:"Dalam percakapan kerja, memakai pola ini bisa membuat ungkapan terdengar lebih alami."},
      {jp:"駅前の店で店員さんが話しているのを聞いて、ではあるまいしの使い方がよく分かった。",kana:"えきまえのみせでてんいんさんがはなしているのをきいて、ではあるまいしのつかいかたがよくわかった。",romaji:"Ekimae no mise de ten'in sanga hanashi teirunowo kii te, dehaarumaishino tsukaikata gayoku waka tta.",meaning:"Saat mendengar staf toko di depan stasiun berbicara, saya jadi lebih paham cara pakai pola ini."},
      {jp:"授業だけでなく、日常の場面でもではあるまいしは意外とよく出てくる。",kana:"じゅぎょうだけでなく、にちじょうのばめんでもではあるまいしはいがいとよくでてくる。",romaji:"Jugyou dakedenaku, nichijou no bamen demodehaarumaishiha igai toyoku dete kuru.",meaning:"Bukan hanya di kelas, pola ini ternyata cukup sering muncul dalam keseharian."}
    ]}
  ]},

  // ── GR-N1-75: 〜では済まない ──
  {id:"GR-N1-75",level:"N1",title:"〜では済まない",summary:"Pola 〜では済まない untuk level N1, dengan contoh penggunaan dalam konteks sekolah, kantor, layanan publik, dan kehidupan sehari-hari di Jepang.",groups:[
    {name:"〜では済まない",description:"Contoh penggunaan 〜では済まない dalam konteks alami sehari-hari di Jepang.",sentences:[
      {jp:"この前の説明会では、では済まないという表現も実際の場面で使われていた。",kana:"このまえのせつめいかいでは、ではすまないというひょうげんもじっさいのばめんでつかわれていた。",romaji:"Kono mae no setsumeikai deha, deha suma naitoiu hyougen mo jissai no bamen de tsukawa reteita.",meaning:"Pada sesi penjelasan sebelumnya, ungkapan ini juga dipakai dalam situasi nyata."},
      {jp:"区役所や学校でも、では済まないのような言い方を見かけることがある。",kana:"くやくしょやがっこうでも、ではすまないのようないいかたをみかけることがある。",romaji:"Kuyakusho ya gakkou demo, deha suma nainoyouna iikata wo mikake rukotogaaru.",meaning:"Di balai kota maupun sekolah, kadang terlihat cara ungkap seperti ini."},
      {jp:"職場の会話では、では済まないを使うと少し自然な言い方になる。",kana:"しょくばのかいわでは、ではすまないをつかうとすこししぜんないいかたになる。",romaji:"Shokuba no kaiwa deha, deha suma naiwo tsukau to sukoshi shizen na iikata ninaru.",meaning:"Dalam percakapan kerja, memakai pola ini bisa membuat ungkapan terdengar lebih alami."},
      {jp:"駅前の店で店員さんが話しているのを聞いて、では済まないの使い方がよく分かった。",kana:"えきまえのみせでてんいんさんがはなしているのをきいて、ではすまないのつかいかたがよくわかった。",romaji:"Ekimae no mise de ten'in sanga hanashi teirunowo kii te, deha suma naino tsukaikata gayoku waka tta.",meaning:"Saat mendengar staf toko di depan stasiun berbicara, saya jadi lebih paham cara pakai pola ini."},
      {jp:"授業だけでなく、日常の場面でもでは済まないは意外とよく出てくる。",kana:"じゅぎょうだけでなく、にちじょうのばめんでもではすまないはいがいとよくでてくる。",romaji:"Jugyou dakedenaku, nichijou no bamen demodeha suma naiha igai toyoku dete kuru.",meaning:"Bukan hanya di kelas, pola ini ternyata cukup sering muncul dalam keseharian."}
    ]}
  ]},

  // ── GR-N1-76: 〜手前 ──
  {id:"GR-N1-76",level:"N1",title:"〜手前",summary:"Pola 〜手前 untuk level N1, dengan contoh penggunaan dalam konteks sekolah, kantor, layanan publik, dan kehidupan sehari-hari di Jepang.",groups:[
    {name:"〜手前",description:"Contoh penggunaan 〜手前 dalam konteks alami sehari-hari di Jepang.",sentences:[
      {jp:"この前の説明会では、手前という表現も実際の場面で使われていた。",kana:"このまえのせつめいかいでは、てまえというひょうげんもじっさいのばめんでつかわれていた。",romaji:"Kono mae no setsumeikai deha, temae toiu hyougen mo jissai no bamen de tsukawa reteita.",meaning:"Pada sesi penjelasan sebelumnya, ungkapan ini juga dipakai dalam situasi nyata."},
      {jp:"区役所や学校でも、手前のような言い方を見かけることがある。",kana:"くやくしょやがっこうでも、てまえのようないいかたをみかけることがある。",romaji:"Kuyakusho ya gakkou demo, temae noyouna iikata wo mikake rukotogaaru.",meaning:"Di balai kota maupun sekolah, kadang terlihat cara ungkap seperti ini."},
      {jp:"職場の会話では、手前を使うと少し自然な言い方になる。",kana:"しょくばのかいわでは、てまえをつかうとすこししぜんないいかたになる。",romaji:"Shokuba no kaiwa deha, temae wo tsukau to sukoshi shizen na iikata ninaru.",meaning:"Dalam percakapan kerja, memakai pola ini bisa membuat ungkapan terdengar lebih alami."},
      {jp:"駅前の店で店員さんが話しているのを聞いて、手前の使い方がよく分かった。",kana:"えきまえのみせでてんいんさんがはなしているのをきいて、てまえのつかいかたがよくわかった。",romaji:"Ekimae no mise de ten'in sanga hanashi teirunowo kii te, temae no tsukaikata gayoku waka tta.",meaning:"Saat mendengar staf toko di depan stasiun berbicara, saya jadi lebih paham cara pakai pola ini."},
      {jp:"授業だけでなく、日常の場面でも手前は意外とよく出てくる。",kana:"じゅぎょうだけでなく、にちじょうのばめんでもてまえはいがいとよくでてくる。",romaji:"Jugyou dakedenaku, nichijou no bamen demo temae ha igai toyoku dete kuru.",meaning:"Bukan hanya di kelas, pola ini ternyata cukup sering muncul dalam keseharian."}
    ]}
  ]},

  // ── GR-N1-77: 〜てみせる ──
  {id:"GR-N1-77",level:"N1",title:"〜てみせる",summary:"Pola 〜てみせる untuk level N1, dengan contoh penggunaan dalam konteks sekolah, kantor, layanan publik, dan kehidupan sehari-hari di Jepang.",groups:[
    {name:"〜てみせる",description:"Contoh penggunaan 〜てみせる dalam konteks alami sehari-hari di Jepang.",sentences:[
      {jp:"必要事項を確認しててみせる、そのあとで申込書を出した。",kana:"ひつようじこうをかくにんしててみせる、そのあとでもうしこみしょをだした。",romaji:"Hitsuyoujikou wo kakuninshi tetemiseru, sonoatode moushikomisho wo dashi ta.",meaning:"Setelah memeriksa poin yang diperlukan, saya lalu menyerahkan formulir pendaftaran."},
      {jp:"先に先生へ連絡しててみせる, 予定を決めた。",kana:"さきにせんせいへれんらくしててみせる, よていをきめた。",romaji:"Sakini sensei he renraku shitetemiseru,   yotei wo kime ta.",meaning:"Saya lebih dulu menghubungi sensei, lalu menentukan jadwal."},
      {jp:"荷物をまとめててみせる, すぐ出発できるようにした。",kana:"にもつをまとめててみせる, すぐしゅっぱつできるようにした。",romaji:"Nimotsu womatometetemiseru,   sugu shuppatsu dekiruyounishita.",meaning:"Saya merapikan barang lebih dulu agar bisa segera berangkat."},
      {jp:"窓口で相談しててみせる, 手続きを進めた。",kana:"まどぐちでそうだんしててみせる, てつづきをすすめた。",romaji:"Madoguchi de soudan shitetemiseru,   tetsuzuki wo susume ta.",meaning:"Saya berkonsultasi di loket dulu lalu melanjutkan prosedurnya."},
      {jp:"一度落ち着いててみせる, 返事をすることにした。",kana:"いちどおちついててみせる, へんじをすることにした。",romaji:"Ichido ochitsui tetemiseru,   henji wosurukotonishita.",meaning:"Saya memutuskan untuk menenangkan diri dulu baru memberi jawaban."}
    ]}
  ]},

  // ── GR-N1-78: 〜(で)もあり〜(で)もある ──
  {id:"GR-N1-78",level:"N1",title:"〜(で)もあり〜(で)もある",summary:"Pola 〜(で)もあり〜(で)もある untuk level N1, dengan contoh penggunaan dalam konteks sekolah, kantor, layanan publik, dan kehidupan sehari-hari di Jepang.",groups:[
    {name:"〜(で)もあり〜(で)もある",description:"Contoh penggunaan 〜(で)もあり〜(で)もある dalam konteks alami sehari-hari di Jepang.",sentences:[
      {jp:"この前の説明会では、もありもあるという表現も実際の場面で使われていた。",kana:"このまえのせつめいかいでは、もありもあるというひょうげんもじっさいのばめんでつかわれていた。",romaji:"Kono mae no setsumeikai deha, moarimoarutoiu hyougen mo jissai no bamen de tsukawa reteita.",meaning:"Pada sesi penjelasan sebelumnya, ungkapan ini juga dipakai dalam situasi nyata."},
      {jp:"区役所や学校でも、もありもあるのような言い方を見かけることがある。",kana:"くやくしょやがっこうでも、もありもあるのようないいかたをみかけることがある。",romaji:"Kuyakusho ya gakkou demo, moarimoarunoyouna iikata wo mikake rukotogaaru.",meaning:"Di balai kota maupun sekolah, kadang terlihat cara ungkap seperti ini."},
      {jp:"職場の会話では、もありもあるを使うと少し自然な言い方になる。",kana:"しょくばのかいわでは、もありもあるをつかうとすこししぜんないいかたになる。",romaji:"Shokuba no kaiwa deha, moarimoaruwo tsukau to sukoshi shizen na iikata ninaru.",meaning:"Dalam percakapan kerja, memakai pola ini bisa membuat ungkapan terdengar lebih alami."},
      {jp:"駅前の店で店員さんが話しているのを聞いて、もありもあるの使い方がよく分かった。",kana:"えきまえのみせでてんいんさんがはなしているのをきいて、もありもあるのつかいかたがよくわかった。",romaji:"Ekimae no mise de ten'in sanga hanashi teirunowo kii te, moarimoaruno tsukaikata gayoku waka tta.",meaning:"Saat mendengar staf toko di depan stasiun berbicara, saya jadi lebih paham cara pakai pola ini."},
      {jp:"授業だけでなく、日常の場面でももありもあるは意外とよく出てくる。",kana:"じゅぎょうだけでなく、にちじょうのばめんでももありもあるはいがいとよくでてくる。",romaji:"Jugyou dakedenaku, nichijou no bamen demomoarimoaruha igai toyoku dete kuru.",meaning:"Bukan hanya di kelas, pola ini ternyata cukup sering muncul dalam keseharian."}
    ]}
  ]},

  // ── GR-N1-79: 〜ても差し⽀えない ──
  {id:"GR-N1-79",level:"N1",title:"〜ても差し⽀えない",summary:"Pola 〜ても差し⽀えない untuk level N1, dengan contoh penggunaan dalam konteks sekolah, kantor, layanan publik, dan kehidupan sehari-hari di Jepang.",groups:[
    {name:"〜ても差し⽀えない",description:"Contoh penggunaan 〜ても差し⽀えない dalam konteks alami sehari-hari di Jepang.",sentences:[
      {jp:"必要事項を確認してても差し⽀えない、そのあとで申込書を出した。",kana:"ひつようじこうをかくにんしててもさし⽀えない、そのあとでもうしこみしょをだした。",romaji:"Hitsuyoujikou wo kakuninshi tetemo sashi ⽀ enai, sonoatode moushikomisho wo dashi ta.",meaning:"Setelah memeriksa poin yang diperlukan, saya lalu menyerahkan formulir pendaftaran."},
      {jp:"先に先生へ連絡してても差し⽀えない, 予定を決めた。",kana:"さきにせんせいへれんらくしててもさし⽀えない, よていをきめた。",romaji:"Sakini sensei he renraku shitetemo sashi ⽀ enai,   yotei wo kime ta.",meaning:"Saya lebih dulu menghubungi sensei, lalu menentukan jadwal."},
      {jp:"荷物をまとめてても差し⽀えない, すぐ出発できるようにした。",kana:"にもつをまとめててもさし⽀えない, すぐしゅっぱつできるようにした。",romaji:"Nimotsu womatometetemo sashi ⽀ enai,   sugu shuppatsu dekiruyounishita.",meaning:"Saya merapikan barang lebih dulu agar bisa segera berangkat."},
      {jp:"窓口で相談してても差し⽀えない, 手続きを進めた。",kana:"まどぐちでそうだんしててもさし⽀えない, てつづきをすすめた。",romaji:"Madoguchi de soudan shitetemo sashi ⽀ enai,   tetsuzuki wo susume ta.",meaning:"Saya berkonsultasi di loket dulu lalu melanjutkan prosedurnya."},
      {jp:"一度落ち着いてても差し⽀えない, 返事をすることにした。",kana:"いちどおちついててもさし⽀えない, へんじをすることにした。",romaji:"Ichido ochitsui tetemo sashi ⽀ enai,   henji wosurukotonishita.",meaning:"Saya memutuskan untuk menenangkan diri dulu baru memberi jawaban."}
    ]}
  ]},

  // ── GR-N1-80: 〜ても知らない ──
  {id:"GR-N1-80",level:"N1",title:"〜ても知らない",summary:"Pola 〜ても知らない untuk level N1, dengan contoh penggunaan dalam konteks sekolah, kantor, layanan publik, dan kehidupan sehari-hari di Jepang.",groups:[
    {name:"〜ても知らない",description:"Contoh penggunaan 〜ても知らない dalam konteks alami sehari-hari di Jepang.",sentences:[
      {jp:"必要事項を確認してても知らない、そのあとで申込書を出した。",kana:"ひつようじこうをかくにんしててもしらない、そのあとでもうしこみしょをだした。",romaji:"Hitsuyoujikou wo kakuninshi tetemo shira nai, sonoatode moushikomisho wo dashi ta.",meaning:"Setelah memeriksa poin yang diperlukan, saya lalu menyerahkan formulir pendaftaran."},
      {jp:"先に先生へ連絡してても知らない, 予定を決めた。",kana:"さきにせんせいへれんらくしててもしらない, よていをきめた。",romaji:"Sakini sensei he renraku shitetemo shira nai,   yotei wo kime ta.",meaning:"Saya lebih dulu menghubungi sensei, lalu menentukan jadwal."},
      {jp:"荷物をまとめてても知らない, すぐ出発できるようにした。",kana:"にもつをまとめててもしらない, すぐしゅっぱつできるようにした。",romaji:"Nimotsu womatometetemo shira nai,   sugu shuppatsu dekiruyounishita.",meaning:"Saya merapikan barang lebih dulu agar bisa segera berangkat."},
      {jp:"窓口で相談してても知らない, 手続きを進めた。",kana:"まどぐちでそうだんしててもしらない, てつづきをすすめた。",romaji:"Madoguchi de soudan shitetemo shira nai,   tetsuzuki wo susume ta.",meaning:"Saya berkonsultasi di loket dulu lalu melanjutkan prosedurnya."},
      {jp:"一度落ち着いてても知らない, 返事をすることにした。",kana:"いちどおちついててもしらない, へんじをすることにした。",romaji:"Ichido ochitsui tetemo shira nai,   henji wosurukotonishita.",meaning:"Saya memutuskan untuk menenangkan diri dulu baru memberi jawaban."}
    ]}
  ]},

  // ── GR-N1-81: 〜てもどうにもならない ──
  {id:"GR-N1-81",level:"N1",title:"〜てもどうにもならない",summary:"Pola 〜てもどうにもならない untuk level N1, dengan contoh penggunaan dalam konteks sekolah, kantor, layanan publik, dan kehidupan sehari-hari di Jepang.",groups:[
    {name:"〜てもどうにもならない",description:"Contoh penggunaan 〜てもどうにもならない dalam konteks alami sehari-hari di Jepang.",sentences:[
      {jp:"必要事項を確認しててもどうにもならない、そのあとで申込書を出した。",kana:"ひつようじこうをかくにんしててもどうにもならない、そのあとでもうしこみしょをだした。",romaji:"Hitsuyoujikou wo kakuninshi tetemodounimonaranai, sonoatode moushikomisho wo dashi ta.",meaning:"Setelah memeriksa poin yang diperlukan, saya lalu menyerahkan formulir pendaftaran."},
      {jp:"先に先生へ連絡しててもどうにもならない, 予定を決めた。",kana:"さきにせんせいへれんらくしててもどうにもならない, よていをきめた。",romaji:"Sakini sensei he renraku shitetemodounimonaranai,   yotei wo kime ta.",meaning:"Saya lebih dulu menghubungi sensei, lalu menentukan jadwal."},
      {jp:"荷物をまとめててもどうにもならない, すぐ出発できるようにした。",kana:"にもつをまとめててもどうにもならない, すぐしゅっぱつできるようにした。",romaji:"Nimotsu womatometetemodounimonaranai,   sugu shuppatsu dekiruyounishita.",meaning:"Saya merapikan barang lebih dulu agar bisa segera berangkat."},
      {jp:"窓口で相談しててもどうにもならない, 手続きを進めた。",kana:"まどぐちでそうだんしててもどうにもならない, てつづきをすすめた。",romaji:"Madoguchi de soudan shitetemodounimonaranai,   tetsuzuki wo susume ta.",meaning:"Saya berkonsultasi di loket dulu lalu melanjutkan prosedurnya."},
      {jp:"一度落ち着いててもどうにもならない, 返事をすることにした。",kana:"いちどおちついててもどうにもならない, へんじをすることにした。",romaji:"Ichido ochitsui tetemodounimonaranai,   henji wosurukotonishita.",meaning:"Saya memutuskan untuk menenangkan diri dulu baru memberi jawaban."}
    ]}
  ]},

  // ── GR-N1-82: 〜でも何でもない / くも何ともない ──
  {id:"GR-N1-82",level:"N1",title:"〜でも何でもない / くも何ともない",summary:"Pola 〜でも何でもない / くも何ともない untuk level N1, dengan contoh penggunaan dalam konteks sekolah, kantor, layanan publik, dan kehidupan sehari-hari di Jepang.",groups:[
    {name:"〜でも何でもない / くも何ともない",description:"Contoh penggunaan 〜でも何でもない / くも何ともない dalam konteks alami sehari-hari di Jepang.",sentences:[
      {jp:"この前の説明会では、でも何でもないという表現も実際の場面で使われていた。",kana:"このまえのせつめいかいでは、でもなんでもないというひょうげんもじっさいのばめんでつかわれていた。",romaji:"Kono mae no setsumeikai deha, demo nande monaitoiu hyougen mo jissai no bamen de tsukawa reteita.",meaning:"Pada sesi penjelasan sebelumnya, ungkapan ini juga dipakai dalam situasi nyata."},
      {jp:"区役所や学校でも、でも何でもないのような言い方を見かけることがある。",kana:"くやくしょやがっこうでも、でもなんでもないのようないいかたをみかけることがある。",romaji:"Kuyakusho ya gakkou demo, demo nande monainoyouna iikata wo mikake rukotogaaru.",meaning:"Di balai kota maupun sekolah, kadang terlihat cara ungkap seperti ini."},
      {jp:"職場の会話では、でも何でもないを使うと少し自然な言い方になる。",kana:"しょくばのかいわでは、でもなんでもないをつかうとすこししぜんないいかたになる。",romaji:"Shokuba no kaiwa deha, demo nande monaiwo tsukau to sukoshi shizen na iikata ninaru.",meaning:"Dalam percakapan kerja, memakai pola ini bisa membuat ungkapan terdengar lebih alami."},
      {jp:"駅前の店で店員さんが話しているのを聞いて、でも何でもないの使い方がよく分かった。",kana:"えきまえのみせでてんいんさんがはなしているのをきいて、でもなんでもないのつかいかたがよくわかった。",romaji:"Ekimae no mise de ten'in sanga hanashi teirunowo kii te, demo nande monaino tsukaikata gayoku waka tta.",meaning:"Saat mendengar staf toko di depan stasiun berbicara, saya jadi lebih paham cara pakai pola ini."},
      {jp:"授業だけでなく、日常の場面でもでも何でもないは意外とよく出てくる。",kana:"じゅぎょうだけでなく、にちじょうのばめんでもでもなんでもないはいがいとよくでてくる。",romaji:"Jugyou dakedenaku, nichijou no bamen demodemo nande monaiha igai toyoku dete kuru.",meaning:"Bukan hanya di kelas, pola ini ternyata cukup sering muncul dalam keseharian."}
    ]}
  ]},

  // ── GR-N1-83: 〜てやまない ──
  {id:"GR-N1-83",level:"N1",title:"〜てやまない",summary:"Pola 〜てやまない untuk level N1, dengan contoh penggunaan dalam konteks sekolah, kantor, layanan publik, dan kehidupan sehari-hari di Jepang.",groups:[
    {name:"〜てやまない",description:"Contoh penggunaan 〜てやまない dalam konteks alami sehari-hari di Jepang.",sentences:[
      {jp:"必要事項を確認しててやまない、そのあとで申込書を出した。",kana:"ひつようじこうをかくにんしててやまない、そのあとでもうしこみしょをだした。",romaji:"Hitsuyoujikou wo kakuninshi teteyamanai, sonoatode moushikomisho wo dashi ta.",meaning:"Setelah memeriksa poin yang diperlukan, saya lalu menyerahkan formulir pendaftaran."},
      {jp:"先に先生へ連絡しててやまない, 予定を決めた。",kana:"さきにせんせいへれんらくしててやまない, よていをきめた。",romaji:"Sakini sensei he renraku shiteteyamanai,   yotei wo kime ta.",meaning:"Saya lebih dulu menghubungi sensei, lalu menentukan jadwal."},
      {jp:"荷物をまとめててやまない, すぐ出発できるようにした。",kana:"にもつをまとめててやまない, すぐしゅっぱつできるようにした。",romaji:"Nimotsu womatometeteyamanai,   sugu shuppatsu dekiruyounishita.",meaning:"Saya merapikan barang lebih dulu agar bisa segera berangkat."},
      {jp:"窓口で相談しててやまない, 手続きを進めた。",kana:"まどぐちでそうだんしててやまない, てつづきをすすめた。",romaji:"Madoguchi de soudan shiteteyamanai,   tetsuzuki wo susume ta.",meaning:"Saya berkonsultasi di loket dulu lalu melanjutkan prosedurnya."},
      {jp:"一度落ち着いててやまない, 返事をすることにした。",kana:"いちどおちついててやまない, へんじをすることにした。",romaji:"Ichido ochitsui teteyamanai,   henji wosurukotonishita.",meaning:"Saya memutuskan untuk menenangkan diri dulu baru memberi jawaban."}
    ]}
  ]},

  // ── GR-N1-84: 〜と相まって ──
  {id:"GR-N1-84",level:"N1",title:"〜と相まって",summary:"Pola 〜と相まって untuk level N1, dengan contoh penggunaan dalam konteks sekolah, kantor, layanan publik, dan kehidupan sehari-hari di Jepang.",groups:[
    {name:"〜と相まって",description:"Contoh penggunaan 〜と相まって dalam konteks alami sehari-hari di Jepang.",sentences:[
      {jp:"駅に着くと、ちょうど案内放送が始まった。",kana:"えきにつくと、ちょうどあんないほうそうがはじまった。",romaji:"Eki ni tsuku to, choudo annaihousou ga hajima tta.",meaning:"Begitu sampai di stasiun, pengumuman baru saja dimulai."},
      {jp:"春になると、この川沿いは散歩する人でにぎわう。",kana:"はるになると、このかわぞいはさんぽするにんでにぎわう。",romaji:"Haru ninaruto, kono kawazoi ha sanpo suru nin denigiwau.",meaning:"Begitu musim semi tiba, area tepi sungai ini ramai oleh orang yang berjalan-jalan."},
      {jp:"資料を読むと、今回の変更点がよく分かる。",kana:"しりょうをよむと、こんかいのへんこうてんがよくわかる。",romaji:"Shiryou wo yomu to, konkai no henkouten gayoku waka ru.",meaning:"Kalau membaca materinya, perubahan kali ini jadi mudah dipahami."},
      {jp:"彼の話し方を見ると、かなり緊張しているようだ。",kana:"かのはなしかたをみると、かなりきんちょうしているようだ。",romaji:"Kano hanashikata wo miru to, kanari kinchoushi teiruyouda.",meaning:"Melihat cara dia berbicara, tampaknya dia cukup tegang."},
      {jp:"この条件だと、申し込みは早い方がよさそうだ。",kana:"このじょうけんだと、もうしこみははやいほうがよさそうだ。",romaji:"Kono jouken dato, moushikomi ha hayai houga yosasouda.",meaning:"Kalau syaratnya seperti ini, tampaknya lebih baik mendaftar lebih cepat."}
    ]}
  ]},

  // ── GR-N1-85: 〜とあって ──
  {id:"GR-N1-85",level:"N1",title:"〜とあって",summary:"Pola 〜とあって untuk level N1, dengan contoh penggunaan dalam konteks sekolah, kantor, layanan publik, dan kehidupan sehari-hari di Jepang.",groups:[
    {name:"〜とあって",description:"Contoh penggunaan 〜とあって dalam konteks alami sehari-hari di Jepang.",sentences:[
      {jp:"駅に着くと、ちょうど案内放送が始まった。",kana:"えきにつくと、ちょうどあんないほうそうがはじまった。",romaji:"Eki ni tsuku to, choudo annaihousou ga hajima tta.",meaning:"Begitu sampai di stasiun, pengumuman baru saja dimulai."},
      {jp:"春になると、この川沿いは散歩する人でにぎわう。",kana:"はるになると、このかわぞいはさんぽするにんでにぎわう。",romaji:"Haru ninaruto, kono kawazoi ha sanpo suru nin denigiwau.",meaning:"Begitu musim semi tiba, area tepi sungai ini ramai oleh orang yang berjalan-jalan."},
      {jp:"資料を読むと、今回の変更点がよく分かる。",kana:"しりょうをよむと、こんかいのへんこうてんがよくわかる。",romaji:"Shiryou wo yomu to, konkai no henkouten gayoku waka ru.",meaning:"Kalau membaca materinya, perubahan kali ini jadi mudah dipahami."},
      {jp:"彼の話し方を見ると、かなり緊張しているようだ。",kana:"かのはなしかたをみると、かなりきんちょうしているようだ。",romaji:"Kano hanashikata wo miru to, kanari kinchoushi teiruyouda.",meaning:"Melihat cara dia berbicara, tampaknya dia cukup tegang."},
      {jp:"この条件だと、申し込みは早い方がよさそうだ。",kana:"このじょうけんだと、もうしこみははやいほうがよさそうだ。",romaji:"Kono jouken dato, moushikomi ha hayai houga yosasouda.",meaning:"Kalau syaratnya seperti ini, tampaknya lebih baik mendaftar lebih cepat."}
    ]}
  ]},

  // ── GR-N1-86: 〜とあれば ──
  {id:"GR-N1-86",level:"N1",title:"〜とあれば",summary:"Pola 〜とあれば untuk level N1, dengan contoh penggunaan dalam konteks sekolah, kantor, layanan publik, dan kehidupan sehari-hari di Jepang.",groups:[
    {name:"〜とあれば",description:"Contoh penggunaan 〜とあれば dalam konteks alami sehari-hari di Jepang.",sentences:[
      {jp:"時間があれば、区役所のあとで銀行にも寄りたい。",kana:"じかんがあれば、くやくしょのあとでぎんこうにもよりたい。",romaji:"Jikan gaareba, kuyakusho noatode ginkou nimo yori tai.",meaning:"Kalau ada waktu, setelah ke balai kota saya juga ingin mampir ke bank."},
      {jp:"もう少し安ければ、その部屋に決めたかもしれない。",kana:"もうすこしやすければ、そのへやにきめたかもしれない。",romaji:"Mou sukoshi yasuke reba, sono heya ni kime takamoshirenai.",meaning:"Kalau sedikit lebih murah, mungkin saya akan memilih kamar itu."},
      {jp:"駅から近ければ、多少狭くても我慢できる。",kana:"えきからちかければ、たしょうせまくてもがまんできる。",romaji:"Eki kara chikake reba, tashou semaku temo gaman dekiru.",meaning:"Kalau dekat dari stasiun, walau agak sempit saya masih bisa menerima."},
      {jp:"店長に聞けば、細かいルールもすぐ分かる。",kana:"てんちょうにきけば、こまかいるーるもすぐわかる。",romaji:"Tenchou ni kike ba, komakai ruuru mosugu waka ru.",meaning:"Kalau bertanya ke manajer toko, aturan detailnya juga cepat dipahami."},
      {jp:"早く寝れば、明日の朝も楽になる。",kana:"はやくねれば、あしたのあさもらくになる。",romaji:"Hayaku nere ba, ashita no asa mo raku ninaru.",meaning:"Kalau tidur lebih awal, besok pagi juga akan terasa lebih ringan."}
    ]}
  ]},

  // ── GR-N1-87: 〜といい〜といい ──
  {id:"GR-N1-87",level:"N1",title:"〜といい〜といい",summary:"Pola 〜といい〜といい untuk level N1, dengan contoh penggunaan dalam konteks sekolah, kantor, layanan publik, dan kehidupan sehari-hari di Jepang.",groups:[
    {name:"〜といい〜といい",description:"Contoh penggunaan 〜といい〜といい dalam konteks alami sehari-hari di Jepang.",sentences:[
      {jp:"駅に着くと、ちょうど案内放送が始まった。",kana:"えきにつくと、ちょうどあんないほうそうがはじまった。",romaji:"Eki ni tsuku to, choudo annaihousou ga hajima tta.",meaning:"Begitu sampai di stasiun, pengumuman baru saja dimulai."},
      {jp:"春になると、この川沿いは散歩する人でにぎわう。",kana:"はるになると、このかわぞいはさんぽするにんでにぎわう。",romaji:"Haru ninaruto, kono kawazoi ha sanpo suru nin denigiwau.",meaning:"Begitu musim semi tiba, area tepi sungai ini ramai oleh orang yang berjalan-jalan."},
      {jp:"資料を読むと、今回の変更点がよく分かる。",kana:"しりょうをよむと、こんかいのへんこうてんがよくわかる。",romaji:"Shiryou wo yomu to, konkai no henkouten gayoku waka ru.",meaning:"Kalau membaca materinya, perubahan kali ini jadi mudah dipahami."},
      {jp:"彼の話し方を見ると、かなり緊張しているようだ。",kana:"かのはなしかたをみると、かなりきんちょうしているようだ。",romaji:"Kano hanashikata wo miru to, kanari kinchoushi teiruyouda.",meaning:"Melihat cara dia berbicara, tampaknya dia cukup tegang."},
      {jp:"この条件だと、申し込みは早い方がよさそうだ。",kana:"このじょうけんだと、もうしこみははやいほうがよさそうだ。",romaji:"Kono jouken dato, moushikomi ha hayai houga yosasouda.",meaning:"Kalau syaratnya seperti ini, tampaknya lebih baik mendaftar lebih cepat."}
    ]}
  ]},

  // ── GR-N1-88: 〜という ──
  {id:"GR-N1-88",level:"N1",title:"〜という",summary:"Pola 〜という untuk level N1, dengan contoh penggunaan dalam konteks sekolah, kantor, layanan publik, dan kehidupan sehari-hari di Jepang.",groups:[
    {name:"〜という",description:"Contoh penggunaan 〜という dalam konteks alami sehari-hari di Jepang.",sentences:[
      {jp:"駅に着くと、ちょうど案内放送が始まった。",kana:"えきにつくと、ちょうどあんないほうそうがはじまった。",romaji:"Eki ni tsuku to, choudo annaihousou ga hajima tta.",meaning:"Begitu sampai di stasiun, pengumuman baru saja dimulai."},
      {jp:"春になると、この川沿いは散歩する人でにぎわう。",kana:"はるになると、このかわぞいはさんぽするにんでにぎわう。",romaji:"Haru ninaruto, kono kawazoi ha sanpo suru nin denigiwau.",meaning:"Begitu musim semi tiba, area tepi sungai ini ramai oleh orang yang berjalan-jalan."},
      {jp:"資料を読むと、今回の変更点がよく分かる。",kana:"しりょうをよむと、こんかいのへんこうてんがよくわかる。",romaji:"Shiryou wo yomu to, konkai no henkouten gayoku waka ru.",meaning:"Kalau membaca materinya, perubahan kali ini jadi mudah dipahami."},
      {jp:"彼の話し方を見ると、かなり緊張しているようだ。",kana:"かのはなしかたをみると、かなりきんちょうしているようだ。",romaji:"Kano hanashikata wo miru to, kanari kinchoushi teiruyouda.",meaning:"Melihat cara dia berbicara, tampaknya dia cukup tegang."},
      {jp:"この条件だと、申し込みは早い方がよさそうだ。",kana:"このじょうけんだと、もうしこみははやいほうがよさそうだ。",romaji:"Kono jouken dato, moushikomi ha hayai houga yosasouda.",meaning:"Kalau syaratnya seperti ini, tampaknya lebih baik mendaftar lebih cepat."}
    ]}
  ]},

  // ── GR-N1-89: 〜というところだ / といったところだ ──
  {id:"GR-N1-89",level:"N1",title:"〜というところだ / といったところだ",summary:"Pola 〜というところだ / といったところだ untuk level N1, dengan contoh penggunaan dalam konteks sekolah, kantor, layanan publik, dan kehidupan sehari-hari di Jepang.",groups:[
    {name:"〜というところだ / といったところだ",description:"Contoh penggunaan 〜というところだ / といったところだ dalam konteks alami sehari-hari di Jepang.",sentences:[
      {jp:"駅に着くと、ちょうど案内放送が始まった。",kana:"えきにつくと、ちょうどあんないほうそうがはじまった。",romaji:"Eki ni tsuku to, choudo annaihousou ga hajima tta.",meaning:"Begitu sampai di stasiun, pengumuman baru saja dimulai."},
      {jp:"春になると、この川沿いは散歩する人でにぎわう。",kana:"はるになると、このかわぞいはさんぽするにんでにぎわう。",romaji:"Haru ninaruto, kono kawazoi ha sanpo suru nin denigiwau.",meaning:"Begitu musim semi tiba, area tepi sungai ini ramai oleh orang yang berjalan-jalan."},
      {jp:"資料を読むと、今回の変更点がよく分かる。",kana:"しりょうをよむと、こんかいのへんこうてんがよくわかる。",romaji:"Shiryou wo yomu to, konkai no henkouten gayoku waka ru.",meaning:"Kalau membaca materinya, perubahan kali ini jadi mudah dipahami."},
      {jp:"彼の話し方を見ると、かなり緊張しているようだ。",kana:"かのはなしかたをみると、かなりきんちょうしているようだ。",romaji:"Kano hanashikata wo miru to, kanari kinchoushi teiruyouda.",meaning:"Melihat cara dia berbicara, tampaknya dia cukup tegang."},
      {jp:"この条件だと、申し込みは早い方がよさそうだ。",kana:"このじょうけんだと、もうしこみははやいほうがよさそうだ。",romaji:"Kono jouken dato, moushikomi ha hayai houga yosasouda.",meaning:"Kalau syaratnya seperti ini, tampaknya lebih baik mendaftar lebih cepat."}
    ]}
  ]},

  // ── GR-N1-90: 〜というもの ──
  {id:"GR-N1-90",level:"N1",title:"〜というもの",summary:"Pola 〜というもの untuk level N1, dengan contoh penggunaan dalam konteks sekolah, kantor, layanan publik, dan kehidupan sehari-hari di Jepang.",groups:[
    {name:"〜というもの",description:"Contoh penggunaan 〜というもの dalam konteks alami sehari-hari di Jepang.",sentences:[
      {jp:"駅に着くと、ちょうど案内放送が始まった。",kana:"えきにつくと、ちょうどあんないほうそうがはじまった。",romaji:"Eki ni tsuku to, choudo annaihousou ga hajima tta.",meaning:"Begitu sampai di stasiun, pengumuman baru saja dimulai."},
      {jp:"春になると、この川沿いは散歩する人でにぎわう。",kana:"はるになると、このかわぞいはさんぽするにんでにぎわう。",romaji:"Haru ninaruto, kono kawazoi ha sanpo suru nin denigiwau.",meaning:"Begitu musim semi tiba, area tepi sungai ini ramai oleh orang yang berjalan-jalan."},
      {jp:"資料を読むと、今回の変更点がよく分かる。",kana:"しりょうをよむと、こんかいのへんこうてんがよくわかる。",romaji:"Shiryou wo yomu to, konkai no henkouten gayoku waka ru.",meaning:"Kalau membaca materinya, perubahan kali ini jadi mudah dipahami."},
      {jp:"彼の話し方を見ると、かなり緊張しているようだ。",kana:"かのはなしかたをみると、かなりきんちょうしているようだ。",romaji:"Kano hanashikata wo miru to, kanari kinchoushi teiruyouda.",meaning:"Melihat cara dia berbicara, tampaknya dia cukup tegang."},
      {jp:"この条件だと、申し込みは早い方がよさそうだ。",kana:"このじょうけんだと、もうしこみははやいほうがよさそうだ。",romaji:"Kono jouken dato, moushikomi ha hayai houga yosasouda.",meaning:"Kalau syaratnya seperti ini, tampaknya lebih baik mendaftar lebih cepat."}
    ]}
  ]},

  // ── GR-N1-91: 〜といえども ──
  {id:"GR-N1-91",level:"N1",title:"〜といえども",summary:"Pola 〜といえども untuk level N1, dengan contoh penggunaan dalam konteks sekolah, kantor, layanan publik, dan kehidupan sehari-hari di Jepang.",groups:[
    {name:"〜といえども",description:"Contoh penggunaan 〜といえども dalam konteks alami sehari-hari di Jepang.",sentences:[
      {jp:"駅に着くと、ちょうど案内放送が始まった。",kana:"えきにつくと、ちょうどあんないほうそうがはじまった。",romaji:"Eki ni tsuku to, choudo annaihousou ga hajima tta.",meaning:"Begitu sampai di stasiun, pengumuman baru saja dimulai."},
      {jp:"春になると、この川沿いは散歩する人でにぎわう。",kana:"はるになると、このかわぞいはさんぽするにんでにぎわう。",romaji:"Haru ninaruto, kono kawazoi ha sanpo suru nin denigiwau.",meaning:"Begitu musim semi tiba, area tepi sungai ini ramai oleh orang yang berjalan-jalan."},
      {jp:"資料を読むと、今回の変更点がよく分かる。",kana:"しりょうをよむと、こんかいのへんこうてんがよくわかる。",romaji:"Shiryou wo yomu to, konkai no henkouten gayoku waka ru.",meaning:"Kalau membaca materinya, perubahan kali ini jadi mudah dipahami."},
      {jp:"彼の話し方を見ると、かなり緊張しているようだ。",kana:"かのはなしかたをみると、かなりきんちょうしているようだ。",romaji:"Kano hanashikata wo miru to, kanari kinchoushi teiruyouda.",meaning:"Melihat cara dia berbicara, tampaknya dia cukup tegang."},
      {jp:"この条件だと、申し込みは早い方がよさそうだ。",kana:"このじょうけんだと、もうしこみははやいほうがよさそうだ。",romaji:"Kono jouken dato, moushikomi ha hayai houga yosasouda.",meaning:"Kalau syaratnya seperti ini, tampaknya lebih baik mendaftar lebih cepat."}
    ]}
  ]},

  // ── GR-N1-92: 〜と言えなくもない ──
  {id:"GR-N1-92",level:"N1",title:"〜と言えなくもない",summary:"Pola 〜と言えなくもない untuk level N1, dengan contoh penggunaan dalam konteks sekolah, kantor, layanan publik, dan kehidupan sehari-hari di Jepang.",groups:[
    {name:"〜と言えなくもない",description:"Contoh penggunaan 〜と言えなくもない dalam konteks alami sehari-hari di Jepang.",sentences:[
      {jp:"駅に着くと、ちょうど案内放送が始まった。",kana:"えきにつくと、ちょうどあんないほうそうがはじまった。",romaji:"Eki ni tsuku to, choudo annaihousou ga hajima tta.",meaning:"Begitu sampai di stasiun, pengumuman baru saja dimulai."},
      {jp:"春になると、この川沿いは散歩する人でにぎわう。",kana:"はるになると、このかわぞいはさんぽするにんでにぎわう。",romaji:"Haru ninaruto, kono kawazoi ha sanpo suru nin denigiwau.",meaning:"Begitu musim semi tiba, area tepi sungai ini ramai oleh orang yang berjalan-jalan."},
      {jp:"資料を読むと、今回の変更点がよく分かる。",kana:"しりょうをよむと、こんかいのへんこうてんがよくわかる。",romaji:"Shiryou wo yomu to, konkai no henkouten gayoku waka ru.",meaning:"Kalau membaca materinya, perubahan kali ini jadi mudah dipahami."},
      {jp:"彼の話し方を見ると、かなり緊張しているようだ。",kana:"かのはなしかたをみると、かなりきんちょうしているようだ。",romaji:"Kano hanashikata wo miru to, kanari kinchoushi teiruyouda.",meaning:"Melihat cara dia berbicara, tampaknya dia cukup tegang."},
      {jp:"この条件だと、申し込みは早い方がよさそうだ。",kana:"このじょうけんだと、もうしこみははやいほうがよさそうだ。",romaji:"Kono jouken dato, moushikomi ha hayai houga yosasouda.",meaning:"Kalau syaratnya seperti ini, tampaknya lebih baik mendaftar lebih cepat."}
    ]}
  ]},

  // ── GR-N1-93: 〜といったところだ ──
  {id:"GR-N1-93",level:"N1",title:"〜といったところだ",summary:"Pola 〜といったところだ untuk level N1, dengan contoh penggunaan dalam konteks sekolah, kantor, layanan publik, dan kehidupan sehari-hari di Jepang.",groups:[
    {name:"〜といったところだ",description:"Contoh penggunaan 〜といったところだ dalam konteks alami sehari-hari di Jepang.",sentences:[
      {jp:"駅に着くと、ちょうど案内放送が始まった。",kana:"えきにつくと、ちょうどあんないほうそうがはじまった。",romaji:"Eki ni tsuku to, choudo annaihousou ga hajima tta.",meaning:"Begitu sampai di stasiun, pengumuman baru saja dimulai."},
      {jp:"春になると、この川沿いは散歩する人でにぎわう。",kana:"はるになると、このかわぞいはさんぽするにんでにぎわう。",romaji:"Haru ninaruto, kono kawazoi ha sanpo suru nin denigiwau.",meaning:"Begitu musim semi tiba, area tepi sungai ini ramai oleh orang yang berjalan-jalan."},
      {jp:"資料を読むと、今回の変更点がよく分かる。",kana:"しりょうをよむと、こんかいのへんこうてんがよくわかる。",romaji:"Shiryou wo yomu to, konkai no henkouten gayoku waka ru.",meaning:"Kalau membaca materinya, perubahan kali ini jadi mudah dipahami."},
      {jp:"彼の話し方を見ると、かなり緊張しているようだ。",kana:"かのはなしかたをみると、かなりきんちょうしているようだ。",romaji:"Kano hanashikata wo miru to, kanari kinchoushi teiruyouda.",meaning:"Melihat cara dia berbicara, tampaknya dia cukup tegang."},
      {jp:"この条件だと、申し込みは早い方がよさそうだ。",kana:"このじょうけんだと、もうしこみははやいほうがよさそうだ。",romaji:"Kono jouken dato, moushikomi ha hayai houga yosasouda.",meaning:"Kalau syaratnya seperti ini, tampaknya lebih baik mendaftar lebih cepat."}
    ]}
  ]},

  // ── GR-N1-94: 〜といったらない / といったらありゃしない ──
  {id:"GR-N1-94",level:"N1",title:"〜といったらない / といったらありゃしない",summary:"Pola 〜といったらない / といったらありゃしない untuk level N1, dengan contoh penggunaan dalam konteks sekolah, kantor, layanan publik, dan kehidupan sehari-hari di Jepang.",groups:[
    {name:"〜といったらない / といったらありゃしない",description:"Contoh penggunaan 〜といったらない / といったらありゃしない dalam konteks alami sehari-hari di Jepang.",sentences:[
      {jp:"駅に着くと、ちょうど案内放送が始まった。",kana:"えきにつくと、ちょうどあんないほうそうがはじまった。",romaji:"Eki ni tsuku to, choudo annaihousou ga hajima tta.",meaning:"Begitu sampai di stasiun, pengumuman baru saja dimulai."},
      {jp:"春になると、この川沿いは散歩する人でにぎわう。",kana:"はるになると、このかわぞいはさんぽするにんでにぎわう。",romaji:"Haru ninaruto, kono kawazoi ha sanpo suru nin denigiwau.",meaning:"Begitu musim semi tiba, area tepi sungai ini ramai oleh orang yang berjalan-jalan."},
      {jp:"資料を読むと、今回の変更点がよく分かる。",kana:"しりょうをよむと、こんかいのへんこうてんがよくわかる。",romaji:"Shiryou wo yomu to, konkai no henkouten gayoku waka ru.",meaning:"Kalau membaca materinya, perubahan kali ini jadi mudah dipahami."},
      {jp:"彼の話し方を見ると、かなり緊張しているようだ。",kana:"かのはなしかたをみると、かなりきんちょうしているようだ。",romaji:"Kano hanashikata wo miru to, kanari kinchoushi teiruyouda.",meaning:"Melihat cara dia berbicara, tampaknya dia cukup tegang."},
      {jp:"この条件だと、申し込みは早い方がよさそうだ。",kana:"このじょうけんだと、もうしこみははやいほうがよさそうだ。",romaji:"Kono jouken dato, moushikomi ha hayai houga yosasouda.",meaning:"Kalau syaratnya seperti ini, tampaknya lebih baik mendaftar lebih cepat."}
    ]}
  ]},

  // ── GR-N1-95: 〜といわず〜といわず ──
  {id:"GR-N1-95",level:"N1",title:"〜といわず〜といわず",summary:"Pola 〜といわず〜といわず untuk level N1, dengan contoh penggunaan dalam konteks sekolah, kantor, layanan publik, dan kehidupan sehari-hari di Jepang.",groups:[
    {name:"〜といわず〜といわず",description:"Contoh penggunaan 〜といわず〜といわず dalam konteks alami sehari-hari di Jepang.",sentences:[
      {jp:"駅に着くと、ちょうど案内放送が始まった。",kana:"えきにつくと、ちょうどあんないほうそうがはじまった。",romaji:"Eki ni tsuku to, choudo annaihousou ga hajima tta.",meaning:"Begitu sampai di stasiun, pengumuman baru saja dimulai."},
      {jp:"春になると、この川沿いは散歩する人でにぎわう。",kana:"はるになると、このかわぞいはさんぽするにんでにぎわう。",romaji:"Haru ninaruto, kono kawazoi ha sanpo suru nin denigiwau.",meaning:"Begitu musim semi tiba, area tepi sungai ini ramai oleh orang yang berjalan-jalan."},
      {jp:"資料を読むと、今回の変更点がよく分かる。",kana:"しりょうをよむと、こんかいのへんこうてんがよくわかる。",romaji:"Shiryou wo yomu to, konkai no henkouten gayoku waka ru.",meaning:"Kalau membaca materinya, perubahan kali ini jadi mudah dipahami."},
      {jp:"彼の話し方を見ると、かなり緊張しているようだ。",kana:"かのはなしかたをみると、かなりきんちょうしているようだ。",romaji:"Kano hanashikata wo miru to, kanari kinchoushi teiruyouda.",meaning:"Melihat cara dia berbicara, tampaknya dia cukup tegang."},
      {jp:"この条件だと、申し込みは早い方がよさそうだ。",kana:"このじょうけんだと、もうしこみははやいほうがよさそうだ。",romaji:"Kono jouken dato, moushikomi ha hayai houga yosasouda.",meaning:"Kalau syaratnya seperti ini, tampaknya lebih baik mendaftar lebih cepat."}
    ]}
  ]},

  // ── GR-N1-96: 〜ときたら ──
  {id:"GR-N1-96",level:"N1",title:"〜ときたら",summary:"Pola 〜ときたら untuk level N1, dengan contoh penggunaan dalam konteks sekolah, kantor, layanan publik, dan kehidupan sehari-hari di Jepang.",groups:[
    {name:"〜ときたら",description:"Contoh penggunaan 〜ときたら dalam konteks alami sehari-hari di Jepang.",sentences:[
      {jp:"駅に着くと、ちょうど案内放送が始まった。",kana:"えきにつくと、ちょうどあんないほうそうがはじまった。",romaji:"Eki ni tsuku to, choudo annaihousou ga hajima tta.",meaning:"Begitu sampai di stasiun, pengumuman baru saja dimulai."},
      {jp:"春になると、この川沿いは散歩する人でにぎわう。",kana:"はるになると、このかわぞいはさんぽするにんでにぎわう。",romaji:"Haru ninaruto, kono kawazoi ha sanpo suru nin denigiwau.",meaning:"Begitu musim semi tiba, area tepi sungai ini ramai oleh orang yang berjalan-jalan."},
      {jp:"資料を読むと、今回の変更点がよく分かる。",kana:"しりょうをよむと、こんかいのへんこうてんがよくわかる。",romaji:"Shiryou wo yomu to, konkai no henkouten gayoku waka ru.",meaning:"Kalau membaca materinya, perubahan kali ini jadi mudah dipahami."},
      {jp:"彼の話し方を見ると、かなり緊張しているようだ。",kana:"かのはなしかたをみると、かなりきんちょうしているようだ。",romaji:"Kano hanashikata wo miru to, kanari kinchoushi teiruyouda.",meaning:"Melihat cara dia berbicara, tampaknya dia cukup tegang."},
      {jp:"この条件だと、申し込みは早い方がよさそうだ。",kana:"このじょうけんだと、もうしこみははやいほうがよさそうだ。",romaji:"Kono jouken dato, moushikomi ha hayai houga yosasouda.",meaning:"Kalau syaratnya seperti ini, tampaknya lebih baik mendaftar lebih cepat."}
    ]}
  ]},

  // ── GR-N1-97: 〜ところ / ところを ──
  {id:"GR-N1-97",level:"N1",title:"〜ところ / ところを",summary:"Pola 〜ところ / ところを untuk level N1, dengan contoh penggunaan dalam konteks sekolah, kantor, layanan publik, dan kehidupan sehari-hari di Jepang.",groups:[
    {name:"〜ところ / ところを",description:"Contoh penggunaan 〜ところ / ところを dalam konteks alami sehari-hari di Jepang.",sentences:[
      {jp:"駅に着くと、ちょうど案内放送が始まった。",kana:"えきにつくと、ちょうどあんないほうそうがはじまった。",romaji:"Eki ni tsuku to, choudo annaihousou ga hajima tta.",meaning:"Begitu sampai di stasiun, pengumuman baru saja dimulai."},
      {jp:"春になると、この川沿いは散歩する人でにぎわう。",kana:"はるになると、このかわぞいはさんぽするにんでにぎわう。",romaji:"Haru ninaruto, kono kawazoi ha sanpo suru nin denigiwau.",meaning:"Begitu musim semi tiba, area tepi sungai ini ramai oleh orang yang berjalan-jalan."},
      {jp:"資料を読むと、今回の変更点がよく分かる。",kana:"しりょうをよむと、こんかいのへんこうてんがよくわかる。",romaji:"Shiryou wo yomu to, konkai no henkouten gayoku waka ru.",meaning:"Kalau membaca materinya, perubahan kali ini jadi mudah dipahami."},
      {jp:"彼の話し方を見ると、かなり緊張しているようだ。",kana:"かのはなしかたをみると、かなりきんちょうしているようだ。",romaji:"Kano hanashikata wo miru to, kanari kinchoushi teiruyouda.",meaning:"Melihat cara dia berbicara, tampaknya dia cukup tegang."},
      {jp:"この条件だと、申し込みは早い方がよさそうだ。",kana:"このじょうけんだと、もうしこみははやいほうがよさそうだ。",romaji:"Kono jouken dato, moushikomi ha hayai houga yosasouda.",meaning:"Kalau syaratnya seperti ini, tampaknya lebih baik mendaftar lebih cepat."}
    ]}
  ]},

  // ── GR-N1-98: 〜としたことが ──
  {id:"GR-N1-98",level:"N1",title:"〜としたことが",summary:"Pola 〜としたことが untuk level N1, dengan contoh penggunaan dalam konteks sekolah, kantor, layanan publik, dan kehidupan sehari-hari di Jepang.",groups:[
    {name:"〜としたことが",description:"Contoh penggunaan 〜としたことが dalam konteks alami sehari-hari di Jepang.",sentences:[
      {jp:"駅に着くと、ちょうど案内放送が始まった。",kana:"えきにつくと、ちょうどあんないほうそうがはじまった。",romaji:"Eki ni tsuku to, choudo annaihousou ga hajima tta.",meaning:"Begitu sampai di stasiun, pengumuman baru saja dimulai."},
      {jp:"春になると、この川沿いは散歩する人でにぎわう。",kana:"はるになると、このかわぞいはさんぽするにんでにぎわう。",romaji:"Haru ninaruto, kono kawazoi ha sanpo suru nin denigiwau.",meaning:"Begitu musim semi tiba, area tepi sungai ini ramai oleh orang yang berjalan-jalan."},
      {jp:"資料を読むと、今回の変更点がよく分かる。",kana:"しりょうをよむと、こんかいのへんこうてんがよくわかる。",romaji:"Shiryou wo yomu to, konkai no henkouten gayoku waka ru.",meaning:"Kalau membaca materinya, perubahan kali ini jadi mudah dipahami."},
      {jp:"彼の話し方を見ると、かなり緊張しているようだ。",kana:"かのはなしかたをみると、かなりきんちょうしているようだ。",romaji:"Kano hanashikata wo miru to, kanari kinchoushi teiruyouda.",meaning:"Melihat cara dia berbicara, tampaknya dia cukup tegang."},
      {jp:"この条件だと、申し込みは早い方がよさそうだ。",kana:"このじょうけんだと、もうしこみははやいほうがよさそうだ。",romaji:"Kono jouken dato, moushikomi ha hayai houga yosasouda.",meaning:"Kalau syaratnya seperti ini, tampaknya lebih baik mendaftar lebih cepat."}
    ]}
  ]},

  // ── GR-N1-99: 〜として〜ない ──
  {id:"GR-N1-99",level:"N1",title:"〜として〜ない",summary:"Pola 〜として〜ない untuk level N1, dengan contoh penggunaan dalam konteks sekolah, kantor, layanan publik, dan kehidupan sehari-hari di Jepang.",groups:[
    {name:"〜として〜ない",description:"Contoh penggunaan 〜として〜ない dalam konteks alami sehari-hari di Jepang.",sentences:[
      {jp:"駅に着くと、ちょうど案内放送が始まった。",kana:"えきにつくと、ちょうどあんないほうそうがはじまった。",romaji:"Eki ni tsuku to, choudo annaihousou ga hajima tta.",meaning:"Begitu sampai di stasiun, pengumuman baru saja dimulai."},
      {jp:"春になると、この川沿いは散歩する人でにぎわう。",kana:"はるになると、このかわぞいはさんぽするにんでにぎわう。",romaji:"Haru ninaruto, kono kawazoi ha sanpo suru nin denigiwau.",meaning:"Begitu musim semi tiba, area tepi sungai ini ramai oleh orang yang berjalan-jalan."},
      {jp:"資料を読むと、今回の変更点がよく分かる。",kana:"しりょうをよむと、こんかいのへんこうてんがよくわかる。",romaji:"Shiryou wo yomu to, konkai no henkouten gayoku waka ru.",meaning:"Kalau membaca materinya, perubahan kali ini jadi mudah dipahami."},
      {jp:"彼の話し方を見ると、かなり緊張しているようだ。",kana:"かのはなしかたをみると、かなりきんちょうしているようだ。",romaji:"Kano hanashikata wo miru to, kanari kinchoushi teiruyouda.",meaning:"Melihat cara dia berbicara, tampaknya dia cukup tegang."},
      {jp:"この条件だと、申し込みは早い方がよさそうだ。",kana:"このじょうけんだと、もうしこみははやいほうがよさそうだ。",romaji:"Kono jouken dato, moushikomi ha hayai houga yosasouda.",meaning:"Kalau syaratnya seperti ini, tampaknya lebih baik mendaftar lebih cepat."}
    ]}
  ]},

  // ── GR-N1-100: 〜としてあるまじき ──
  {id:"GR-N1-100",level:"N1",title:"〜としてあるまじき",summary:"Pola 〜としてあるまじき untuk level N1, dengan contoh penggunaan dalam konteks sekolah, kantor, layanan publik, dan kehidupan sehari-hari di Jepang.",groups:[
    {name:"〜としてあるまじき",description:"Contoh penggunaan 〜としてあるまじき dalam konteks alami sehari-hari di Jepang.",sentences:[
      {jp:"駅に着くと、ちょうど案内放送が始まった。",kana:"えきにつくと、ちょうどあんないほうそうがはじまった。",romaji:"Eki ni tsuku to, choudo annaihousou ga hajima tta.",meaning:"Begitu sampai di stasiun, pengumuman baru saja dimulai."},
      {jp:"春になると、この川沿いは散歩する人でにぎわう。",kana:"はるになると、このかわぞいはさんぽするにんでにぎわう。",romaji:"Haru ninaruto, kono kawazoi ha sanpo suru nin denigiwau.",meaning:"Begitu musim semi tiba, area tepi sungai ini ramai oleh orang yang berjalan-jalan."},
      {jp:"資料を読むと、今回の変更点がよく分かる。",kana:"しりょうをよむと、こんかいのへんこうてんがよくわかる。",romaji:"Shiryou wo yomu to, konkai no henkouten gayoku waka ru.",meaning:"Kalau membaca materinya, perubahan kali ini jadi mudah dipahami."},
      {jp:"彼の話し方を見ると、かなり緊張しているようだ。",kana:"かのはなしかたをみると、かなりきんちょうしているようだ。",romaji:"Kano hanashikata wo miru to, kanari kinchoushi teiruyouda.",meaning:"Melihat cara dia berbicara, tampaknya dia cukup tegang."},
      {jp:"この条件だと、申し込みは早い方がよさそうだ。",kana:"このじょうけんだと、もうしこみははやいほうがよさそうだ。",romaji:"Kono jouken dato, moushikomi ha hayai houga yosasouda.",meaning:"Kalau syaratnya seperti ini, tampaknya lebih baik mendaftar lebih cepat."}
    ]}
  ]},

  // ── GR-N1-101: 〜とて ──
  {id:"GR-N1-101",level:"N1",title:"〜とて",summary:"Pola 〜とて untuk level N1, dengan contoh penggunaan dalam konteks sekolah, kantor, layanan publik, dan kehidupan sehari-hari di Jepang.",groups:[
    {name:"〜とて",description:"Contoh penggunaan 〜とて dalam konteks alami sehari-hari di Jepang.",sentences:[
      {jp:"駅に着くと、ちょうど案内放送が始まった。",kana:"えきにつくと、ちょうどあんないほうそうがはじまった。",romaji:"Eki ni tsuku to, choudo annaihousou ga hajima tta.",meaning:"Begitu sampai di stasiun, pengumuman baru saja dimulai."},
      {jp:"春になると、この川沿いは散歩する人でにぎわう。",kana:"はるになると、このかわぞいはさんぽするにんでにぎわう。",romaji:"Haru ninaruto, kono kawazoi ha sanpo suru nin denigiwau.",meaning:"Begitu musim semi tiba, area tepi sungai ini ramai oleh orang yang berjalan-jalan."},
      {jp:"資料を読むと、今回の変更点がよく分かる。",kana:"しりょうをよむと、こんかいのへんこうてんがよくわかる。",romaji:"Shiryou wo yomu to, konkai no henkouten gayoku waka ru.",meaning:"Kalau membaca materinya, perubahan kali ini jadi mudah dipahami."},
      {jp:"彼の話し方を見ると、かなり緊張しているようだ。",kana:"かのはなしかたをみると、かなりきんちょうしているようだ。",romaji:"Kano hanashikata wo miru to, kanari kinchoushi teiruyouda.",meaning:"Melihat cara dia berbicara, tampaknya dia cukup tegang."},
      {jp:"この条件だと、申し込みは早い方がよさそうだ。",kana:"このじょうけんだと、もうしこみははやいほうがよさそうだ。",romaji:"Kono jouken dato, moushikomi ha hayai houga yosasouda.",meaning:"Kalau syaratnya seperti ini, tampaknya lebih baik mendaftar lebih cepat."}
    ]}
  ]},

  // ── GR-N1-102: 〜とは ──
  {id:"GR-N1-102",level:"N1",title:"〜とは",summary:"Pola 〜とは untuk level N1, dengan contoh penggunaan dalam konteks sekolah, kantor, layanan publik, dan kehidupan sehari-hari di Jepang.",groups:[
    {name:"〜とは",description:"Contoh penggunaan 〜とは dalam konteks alami sehari-hari di Jepang.",sentences:[
      {jp:"駅に着くと、ちょうど案内放送が始まった。",kana:"えきにつくと、ちょうどあんないほうそうがはじまった。",romaji:"Eki ni tsuku to, choudo annaihousou ga hajima tta.",meaning:"Begitu sampai di stasiun, pengumuman baru saja dimulai."},
      {jp:"春になると、この川沿いは散歩する人でにぎわう。",kana:"はるになると、このかわぞいはさんぽするにんでにぎわう。",romaji:"Haru ninaruto, kono kawazoi ha sanpo suru nin denigiwau.",meaning:"Begitu musim semi tiba, area tepi sungai ini ramai oleh orang yang berjalan-jalan."},
      {jp:"資料を読むと、今回の変更点がよく分かる。",kana:"しりょうをよむと、こんかいのへんこうてんがよくわかる。",romaji:"Shiryou wo yomu to, konkai no henkouten gayoku waka ru.",meaning:"Kalau membaca materinya, perubahan kali ini jadi mudah dipahami."},
      {jp:"彼の話し方を見ると、かなり緊張しているようだ。",kana:"かのはなしかたをみると、かなりきんちょうしているようだ。",romaji:"Kano hanashikata wo miru to, kanari kinchoushi teiruyouda.",meaning:"Melihat cara dia berbicara, tampaknya dia cukup tegang."},
      {jp:"この条件だと、申し込みは早い方がよさそうだ。",kana:"このじょうけんだと、もうしこみははやいほうがよさそうだ。",romaji:"Kono jouken dato, moushikomi ha hayai houga yosasouda.",meaning:"Kalau syaratnya seperti ini, tampaknya lebih baik mendaftar lebih cepat."}
    ]}
  ]},

  // ── GR-N1-103: 〜とはいえ ──
  {id:"GR-N1-103",level:"N1",title:"〜とはいえ",summary:"Pola 〜とはいえ untuk level N1, dengan contoh penggunaan dalam konteks sekolah, kantor, layanan publik, dan kehidupan sehari-hari di Jepang.",groups:[
    {name:"〜とはいえ",description:"Contoh penggunaan 〜とはいえ dalam konteks alami sehari-hari di Jepang.",sentences:[
      {jp:"駅に着くと、ちょうど案内放送が始まった。",kana:"えきにつくと、ちょうどあんないほうそうがはじまった。",romaji:"Eki ni tsuku to, choudo annaihousou ga hajima tta.",meaning:"Begitu sampai di stasiun, pengumuman baru saja dimulai."},
      {jp:"春になると、この川沿いは散歩する人でにぎわう。",kana:"はるになると、このかわぞいはさんぽするにんでにぎわう。",romaji:"Haru ninaruto, kono kawazoi ha sanpo suru nin denigiwau.",meaning:"Begitu musim semi tiba, area tepi sungai ini ramai oleh orang yang berjalan-jalan."},
      {jp:"資料を読むと、今回の変更点がよく分かる。",kana:"しりょうをよむと、こんかいのへんこうてんがよくわかる。",romaji:"Shiryou wo yomu to, konkai no henkouten gayoku waka ru.",meaning:"Kalau membaca materinya, perubahan kali ini jadi mudah dipahami."},
      {jp:"彼の話し方を見ると、かなり緊張しているようだ。",kana:"かのはなしかたをみると、かなりきんちょうしているようだ。",romaji:"Kano hanashikata wo miru to, kanari kinchoushi teiruyouda.",meaning:"Melihat cara dia berbicara, tampaknya dia cukup tegang."},
      {jp:"この条件だと、申し込みは早い方がよさそうだ。",kana:"このじょうけんだと、もうしこみははやいほうがよさそうだ。",romaji:"Kono jouken dato, moushikomi ha hayai houga yosasouda.",meaning:"Kalau syaratnya seperti ini, tampaknya lebih baik mendaftar lebih cepat."}
    ]}
  ]},

  // ── GR-N1-104: 〜とは打って変わって ──
  {id:"GR-N1-104",level:"N1",title:"〜とは打って変わって",summary:"Pola 〜とは打って変わって untuk level N1, dengan contoh penggunaan dalam konteks sekolah, kantor, layanan publik, dan kehidupan sehari-hari di Jepang.",groups:[
    {name:"〜とは打って変わって",description:"Contoh penggunaan 〜とは打って変わって dalam konteks alami sehari-hari di Jepang.",sentences:[
      {jp:"駅に着くと、ちょうど案内放送が始まった。",kana:"えきにつくと、ちょうどあんないほうそうがはじまった。",romaji:"Eki ni tsuku to, choudo annaihousou ga hajima tta.",meaning:"Begitu sampai di stasiun, pengumuman baru saja dimulai."},
      {jp:"春になると、この川沿いは散歩する人でにぎわう。",kana:"はるになると、このかわぞいはさんぽするにんでにぎわう。",romaji:"Haru ninaruto, kono kawazoi ha sanpo suru nin denigiwau.",meaning:"Begitu musim semi tiba, area tepi sungai ini ramai oleh orang yang berjalan-jalan."},
      {jp:"資料を読むと、今回の変更点がよく分かる。",kana:"しりょうをよむと、こんかいのへんこうてんがよくわかる。",romaji:"Shiryou wo yomu to, konkai no henkouten gayoku waka ru.",meaning:"Kalau membaca materinya, perubahan kali ini jadi mudah dipahami."},
      {jp:"彼の話し方を見ると、かなり緊張しているようだ。",kana:"かのはなしかたをみると、かなりきんちょうしているようだ。",romaji:"Kano hanashikata wo miru to, kanari kinchoushi teiruyouda.",meaning:"Melihat cara dia berbicara, tampaknya dia cukup tegang."},
      {jp:"この条件だと、申し込みは早い方がよさそうだ。",kana:"このじょうけんだと、もうしこみははやいほうがよさそうだ。",romaji:"Kono jouken dato, moushikomi ha hayai houga yosasouda.",meaning:"Kalau syaratnya seperti ini, tampaknya lebih baik mendaftar lebih cepat."}
    ]}
  ]},

  // ── GR-N1-105: 〜とばかりに ──
  {id:"GR-N1-105",level:"N1",title:"〜とばかりに",summary:"Pola 〜とばかりに untuk level N1, dengan contoh penggunaan dalam konteks sekolah, kantor, layanan publik, dan kehidupan sehari-hari di Jepang.",groups:[
    {name:"〜とばかりに",description:"Contoh penggunaan 〜とばかりに dalam konteks alami sehari-hari di Jepang.",sentences:[
      {jp:"朝から電車が止まっていたとばかりに、説明会の開始に間に合わなかった。",kana:"あさからでんしゃがとまっていたとばかりに、せつめいかいのかいしにまにあわなかった。",romaji:"Asa kara densha ga toma tteita tobakarini, setsumeikai no kaishi ni maniawa nakatta.",meaning:"Karena kereta berhenti sejak pagi, saya tidak sempat datang tepat waktu ke sesi penjelasan."},
      {jp:"必要書類を一枚忘れてしまったとばかりに、その日に手続きが終わらなかった。",kana:"ひつようしょるいをいちまいわすれてしまったとばかりに、そのにちにてつづきがおわらなかった。",romaji:"Hitsuyoushorui wo ichimai wasure teshimatta tobakarini, sono nichi ni tetsuzuki ga owa ranakatta.",meaning:"Karena saya lupa satu lembar dokumen, prosesnya tidak selesai hari itu."},
      {jp:"夜中まで課題をしていたとばかりに、午前の授業で集中できなかった。",kana:"よなかまでかだいをしていたとばかりに、ごぜんのじゅぎょうでしゅうちゅうできなかった。",romaji:"Yonaka made kadai woshiteita tobakarini, gozen no jugyou de shuuchuu dekinakatta.",meaning:"Karena mengerjakan tugas sampai larut malam, saya tidak bisa fokus di kelas pagi."},
      {jp:"店の前で工事が続いていたとばかりに、昼の時間帯でも客足が少なかった。",kana:"みせのまえでこうじがつづいていたとばかりに、ひるのじかんたいでもきゃくあしがすくなかった。",romaji:"Mise no mae de kouji ga tsuzui teita tobakarini, hiru no jikantai demo kyakuashi ga sukunaka tta.",meaning:"Karena ada konstruksi terus di depan toko, pelanggan tetap sedikit bahkan saat jam makan siang."},
      {jp:"思ったより雨が強かったとばかりに、商店街のイベントは途中で中止になった。",kana:"おもったよりあめがつよかったとばかりに、しょうてんがいのいべんとはとちゅうでちゅうしになった。",romaji:"Omotta yori ame ga tsuyoka tta tobakarini, shoutengai no ibento ha tochuu de chuushi ninatta.",meaning:"Karena hujan lebih deras daripada dugaan, acara di area pertokoan dihentikan di tengah jalan."}
    ]}
  ]},

  // ── GR-N1-106: 〜とは比べものにならない ──
  {id:"GR-N1-106",level:"N1",title:"〜とは比べものにならない",summary:"Pola 〜とは比べものにならない untuk level N1, dengan contoh penggunaan dalam konteks sekolah, kantor, layanan publik, dan kehidupan sehari-hari di Jepang.",groups:[
    {name:"〜とは比べものにならない",description:"Contoh penggunaan 〜とは比べものにならない dalam konteks alami sehari-hari di Jepang.",sentences:[
      {jp:"駅に着くと、ちょうど案内放送が始まった。",kana:"えきにつくと、ちょうどあんないほうそうがはじまった。",romaji:"Eki ni tsuku to, choudo annaihousou ga hajima tta.",meaning:"Begitu sampai di stasiun, pengumuman baru saja dimulai."},
      {jp:"春になると、この川沿いは散歩する人でにぎわう。",kana:"はるになると、このかわぞいはさんぽするにんでにぎわう。",romaji:"Haru ninaruto, kono kawazoi ha sanpo suru nin denigiwau.",meaning:"Begitu musim semi tiba, area tepi sungai ini ramai oleh orang yang berjalan-jalan."},
      {jp:"資料を読むと、今回の変更点がよく分かる。",kana:"しりょうをよむと、こんかいのへんこうてんがよくわかる。",romaji:"Shiryou wo yomu to, konkai no henkouten gayoku waka ru.",meaning:"Kalau membaca materinya, perubahan kali ini jadi mudah dipahami."},
      {jp:"彼の話し方を見ると、かなり緊張しているようだ。",kana:"かのはなしかたをみると、かなりきんちょうしているようだ。",romaji:"Kano hanashikata wo miru to, kanari kinchoushi teiruyouda.",meaning:"Melihat cara dia berbicara, tampaknya dia cukup tegang."},
      {jp:"この条件だと、申し込みは早い方がよさそうだ。",kana:"このじょうけんだと、もうしこみははやいほうがよさそうだ。",romaji:"Kono jouken dato, moushikomi ha hayai houga yosasouda.",meaning:"Kalau syaratnya seperti ini, tampaknya lebih baik mendaftar lebih cepat."}
    ]}
  ]},

  // ── GR-N1-107: 〜とまではいかないが / とまではいかないにしても ──
  {id:"GR-N1-107",level:"N1",title:"〜とまではいかないが / とまではいかないにしても",summary:"Pola 〜とまではいかないが / とまではいかないにしても untuk level N1, dengan contoh penggunaan dalam konteks sekolah, kantor, layanan publik, dan kehidupan sehari-hari di Jepang.",groups:[
    {name:"〜とまではいかないが / とまではいかないにしても",description:"Contoh penggunaan 〜とまではいかないが / とまではいかないにしても dalam konteks alami sehari-hari di Jepang.",sentences:[
      {jp:"駅に着くと、ちょうど案内放送が始まった。",kana:"えきにつくと、ちょうどあんないほうそうがはじまった。",romaji:"Eki ni tsuku to, choudo annaihousou ga hajima tta.",meaning:"Begitu sampai di stasiun, pengumuman baru saja dimulai."},
      {jp:"春になると、この川沿いは散歩する人でにぎわう。",kana:"はるになると、このかわぞいはさんぽするにんでにぎわう。",romaji:"Haru ninaruto, kono kawazoi ha sanpo suru nin denigiwau.",meaning:"Begitu musim semi tiba, area tepi sungai ini ramai oleh orang yang berjalan-jalan."},
      {jp:"資料を読むと、今回の変更点がよく分かる。",kana:"しりょうをよむと、こんかいのへんこうてんがよくわかる。",romaji:"Shiryou wo yomu to, konkai no henkouten gayoku waka ru.",meaning:"Kalau membaca materinya, perubahan kali ini jadi mudah dipahami."},
      {jp:"彼の話し方を見ると、かなり緊張しているようだ。",kana:"かのはなしかたをみると、かなりきんちょうしているようだ。",romaji:"Kano hanashikata wo miru to, kanari kinchoushi teiruyouda.",meaning:"Melihat cara dia berbicara, tampaknya dia cukup tegang."},
      {jp:"この条件だと、申し込みは早い方がよさそうだ。",kana:"このじょうけんだと、もうしこみははやいほうがよさそうだ。",romaji:"Kono jouken dato, moushikomi ha hayai houga yosasouda.",meaning:"Kalau syaratnya seperti ini, tampaknya lebih baik mendaftar lebih cepat."}
    ]}
  ]},

  // ── GR-N1-108: 〜と見るや ──
  {id:"GR-N1-108",level:"N1",title:"〜と見るや",summary:"Pola 〜と見るや untuk level N1, dengan contoh penggunaan dalam konteks sekolah, kantor, layanan publik, dan kehidupan sehari-hari di Jepang.",groups:[
    {name:"〜と見るや",description:"Contoh penggunaan 〜と見るや dalam konteks alami sehari-hari di Jepang.",sentences:[
      {jp:"駅に着くと、ちょうど案内放送が始まった。",kana:"えきにつくと、ちょうどあんないほうそうがはじまった。",romaji:"Eki ni tsuku to, choudo annaihousou ga hajima tta.",meaning:"Begitu sampai di stasiun, pengumuman baru saja dimulai."},
      {jp:"春になると、この川沿いは散歩する人でにぎわう。",kana:"はるになると、このかわぞいはさんぽするにんでにぎわう。",romaji:"Haru ninaruto, kono kawazoi ha sanpo suru nin denigiwau.",meaning:"Begitu musim semi tiba, area tepi sungai ini ramai oleh orang yang berjalan-jalan."},
      {jp:"資料を読むと、今回の変更点がよく分かる。",kana:"しりょうをよむと、こんかいのへんこうてんがよくわかる。",romaji:"Shiryou wo yomu to, konkai no henkouten gayoku waka ru.",meaning:"Kalau membaca materinya, perubahan kali ini jadi mudah dipahami."},
      {jp:"彼の話し方を見ると、かなり緊張しているようだ。",kana:"かのはなしかたをみると、かなりきんちょうしているようだ。",romaji:"Kano hanashikata wo miru to, kanari kinchoushi teiruyouda.",meaning:"Melihat cara dia berbicara, tampaknya dia cukup tegang."},
      {jp:"この条件だと、申し込みは早い方がよさそうだ。",kana:"このじょうけんだと、もうしこみははやいほうがよさそうだ。",romaji:"Kono jouken dato, moushikomi ha hayai houga yosasouda.",meaning:"Kalau syaratnya seperti ini, tampaknya lebih baik mendaftar lebih cepat."}
    ]}
  ]},

  // ── GR-N1-109: 〜とも〜とも ──
  {id:"GR-N1-109",level:"N1",title:"〜とも〜とも",summary:"Pola 〜とも〜とも untuk level N1, dengan contoh penggunaan dalam konteks sekolah, kantor, layanan publik, dan kehidupan sehari-hari di Jepang.",groups:[
    {name:"〜とも〜とも",description:"Contoh penggunaan 〜とも〜とも dalam konteks alami sehari-hari di Jepang.",sentences:[
      {jp:"駅に着くと、ちょうど案内放送が始まった。",kana:"えきにつくと、ちょうどあんないほうそうがはじまった。",romaji:"Eki ni tsuku to, choudo annaihousou ga hajima tta.",meaning:"Begitu sampai di stasiun, pengumuman baru saja dimulai."},
      {jp:"春になると、この川沿いは散歩する人でにぎわう。",kana:"はるになると、このかわぞいはさんぽするにんでにぎわう。",romaji:"Haru ninaruto, kono kawazoi ha sanpo suru nin denigiwau.",meaning:"Begitu musim semi tiba, area tepi sungai ini ramai oleh orang yang berjalan-jalan."},
      {jp:"資料を読むと、今回の変更点がよく分かる。",kana:"しりょうをよむと、こんかいのへんこうてんがよくわかる。",romaji:"Shiryou wo yomu to, konkai no henkouten gayoku waka ru.",meaning:"Kalau membaca materinya, perubahan kali ini jadi mudah dipahami."},
      {jp:"彼の話し方を見ると、かなり緊張しているようだ。",kana:"かのはなしかたをみると、かなりきんちょうしているようだ。",romaji:"Kano hanashikata wo miru to, kanari kinchoushi teiruyouda.",meaning:"Melihat cara dia berbicara, tampaknya dia cukup tegang."},
      {jp:"この条件だと、申し込みは早い方がよさそうだ。",kana:"このじょうけんだと、もうしこみははやいほうがよさそうだ。",romaji:"Kono jouken dato, moushikomi ha hayai houga yosasouda.",meaning:"Kalau syaratnya seperti ini, tampaknya lebih baik mendaftar lebih cepat."}
    ]}
  ]},

  // ── GR-N1-110: 〜ともあろうものが ──
  {id:"GR-N1-110",level:"N1",title:"〜ともあろうものが",summary:"Pola 〜ともあろうものが untuk level N1, dengan contoh penggunaan dalam konteks sekolah, kantor, layanan publik, dan kehidupan sehari-hari di Jepang.",groups:[
    {name:"〜ともあろうものが",description:"Contoh penggunaan 〜ともあろうものが dalam konteks alami sehari-hari di Jepang.",sentences:[
      {jp:"駅に着くと、ちょうど案内放送が始まった。",kana:"えきにつくと、ちょうどあんないほうそうがはじまった。",romaji:"Eki ni tsuku to, choudo annaihousou ga hajima tta.",meaning:"Begitu sampai di stasiun, pengumuman baru saja dimulai."},
      {jp:"春になると、この川沿いは散歩する人でにぎわう。",kana:"はるになると、このかわぞいはさんぽするにんでにぎわう。",romaji:"Haru ninaruto, kono kawazoi ha sanpo suru nin denigiwau.",meaning:"Begitu musim semi tiba, area tepi sungai ini ramai oleh orang yang berjalan-jalan."},
      {jp:"資料を読むと、今回の変更点がよく分かる。",kana:"しりょうをよむと、こんかいのへんこうてんがよくわかる。",romaji:"Shiryou wo yomu to, konkai no henkouten gayoku waka ru.",meaning:"Kalau membaca materinya, perubahan kali ini jadi mudah dipahami."},
      {jp:"彼の話し方を見ると、かなり緊張しているようだ。",kana:"かのはなしかたをみると、かなりきんちょうしているようだ。",romaji:"Kano hanashikata wo miru to, kanari kinchoushi teiruyouda.",meaning:"Melihat cara dia berbicara, tampaknya dia cukup tegang."},
      {jp:"この条件だと、申し込みは早い方がよさそうだ。",kana:"このじょうけんだと、もうしこみははやいほうがよさそうだ。",romaji:"Kono jouken dato, moushikomi ha hayai houga yosasouda.",meaning:"Kalau syaratnya seperti ini, tampaknya lebih baik mendaftar lebih cepat."}
    ]}
  ]},

  // ── GR-N1-111: 〜ともなく ──
  {id:"GR-N1-111",level:"N1",title:"〜ともなく",summary:"Pola 〜ともなく untuk level N1, dengan contoh penggunaan dalam konteks sekolah, kantor, layanan publik, dan kehidupan sehari-hari di Jepang.",groups:[
    {name:"〜ともなく",description:"Contoh penggunaan 〜ともなく dalam konteks alami sehari-hari di Jepang.",sentences:[
      {jp:"駅に着くと、ちょうど案内放送が始まった。",kana:"えきにつくと、ちょうどあんないほうそうがはじまった。",romaji:"Eki ni tsuku to, choudo annaihousou ga hajima tta.",meaning:"Begitu sampai di stasiun, pengumuman baru saja dimulai."},
      {jp:"春になると、この川沿いは散歩する人でにぎわう。",kana:"はるになると、このかわぞいはさんぽするにんでにぎわう。",romaji:"Haru ninaruto, kono kawazoi ha sanpo suru nin denigiwau.",meaning:"Begitu musim semi tiba, area tepi sungai ini ramai oleh orang yang berjalan-jalan."},
      {jp:"資料を読むと、今回の変更点がよく分かる。",kana:"しりょうをよむと、こんかいのへんこうてんがよくわかる。",romaji:"Shiryou wo yomu to, konkai no henkouten gayoku waka ru.",meaning:"Kalau membaca materinya, perubahan kali ini jadi mudah dipahami."},
      {jp:"彼の話し方を見ると、かなり緊張しているようだ。",kana:"かのはなしかたをみると、かなりきんちょうしているようだ。",romaji:"Kano hanashikata wo miru to, kanari kinchoushi teiruyouda.",meaning:"Melihat cara dia berbicara, tampaknya dia cukup tegang."},
      {jp:"この条件だと、申し込みは早い方がよさそうだ。",kana:"このじょうけんだと、もうしこみははやいほうがよさそうだ。",romaji:"Kono jouken dato, moushikomi ha hayai houga yosasouda.",meaning:"Kalau syaratnya seperti ini, tampaknya lebih baik mendaftar lebih cepat."}
    ]}
  ]},

  // ── GR-N1-112: 〜ともなれば / ともなると ──
  {id:"GR-N1-112",level:"N1",title:"〜ともなれば / ともなると",summary:"Pola 〜ともなれば / ともなると untuk level N1, dengan contoh penggunaan dalam konteks sekolah, kantor, layanan publik, dan kehidupan sehari-hari di Jepang.",groups:[
    {name:"〜ともなれば / ともなると",description:"Contoh penggunaan 〜ともなれば / ともなると dalam konteks alami sehari-hari di Jepang.",sentences:[
      {jp:"時間があれば、区役所のあとで銀行にも寄りたい。",kana:"じかんがあれば、くやくしょのあとでぎんこうにもよりたい。",romaji:"Jikan gaareba, kuyakusho noatode ginkou nimo yori tai.",meaning:"Kalau ada waktu, setelah ke balai kota saya juga ingin mampir ke bank."},
      {jp:"もう少し安ければ、その部屋に決めたかもしれない。",kana:"もうすこしやすければ、そのへやにきめたかもしれない。",romaji:"Mou sukoshi yasuke reba, sono heya ni kime takamoshirenai.",meaning:"Kalau sedikit lebih murah, mungkin saya akan memilih kamar itu."},
      {jp:"駅から近ければ、多少狭くても我慢できる。",kana:"えきからちかければ、たしょうせまくてもがまんできる。",romaji:"Eki kara chikake reba, tashou semaku temo gaman dekiru.",meaning:"Kalau dekat dari stasiun, walau agak sempit saya masih bisa menerima."},
      {jp:"店長に聞けば、細かいルールもすぐ分かる。",kana:"てんちょうにきけば、こまかいるーるもすぐわかる。",romaji:"Tenchou ni kike ba, komakai ruuru mosugu waka ru.",meaning:"Kalau bertanya ke manajer toko, aturan detailnya juga cepat dipahami."},
      {jp:"早く寝れば、明日の朝も楽になる。",kana:"はやくねれば、あしたのあさもらくになる。",romaji:"Hayaku nere ba, ashita no asa mo raku ninaru.",meaning:"Kalau tidur lebih awal, besok pagi juga akan terasa lebih ringan."}
    ]}
  ]},

  // ── GR-N1-113: 〜ないでもない / ないものでもない ──
  {id:"GR-N1-113",level:"N1",title:"〜ないでもない / ないものでもない",summary:"Pola 〜ないでもない / ないものでもない untuk level N1, dengan contoh penggunaan dalam konteks sekolah, kantor, layanan publik, dan kehidupan sehari-hari di Jepang.",groups:[
    {name:"〜ないでもない / ないものでもない",description:"Contoh penggunaan 〜ないでもない / ないものでもない dalam konteks alami sehari-hari di Jepang.",sentences:[
      {jp:"この前の説明会では、ないでもないという表現も実際の場面で使われていた。",kana:"このまえのせつめいかいでは、ないでもないというひょうげんもじっさいのばめんでつかわれていた。",romaji:"Kono mae no setsumeikai deha, naidemonaitoiu hyougen mo jissai no bamen de tsukawa reteita.",meaning:"Pada sesi penjelasan sebelumnya, ungkapan ini juga dipakai dalam situasi nyata."},
      {jp:"区役所や学校でも、ないでもないのような言い方を見かけることがある。",kana:"くやくしょやがっこうでも、ないでもないのようないいかたをみかけることがある。",romaji:"Kuyakusho ya gakkou demo, naidemonainoyouna iikata wo mikake rukotogaaru.",meaning:"Di balai kota maupun sekolah, kadang terlihat cara ungkap seperti ini."},
      {jp:"職場の会話では、ないでもないを使うと少し自然な言い方になる。",kana:"しょくばのかいわでは、ないでもないをつかうとすこししぜんないいかたになる。",romaji:"Shokuba no kaiwa deha, naidemonaiwo tsukau to sukoshi shizen na iikata ninaru.",meaning:"Dalam percakapan kerja, memakai pola ini bisa membuat ungkapan terdengar lebih alami."},
      {jp:"駅前の店で店員さんが話しているのを聞いて、ないでもないの使い方がよく分かった。",kana:"えきまえのみせでてんいんさんがはなしているのをきいて、ないでもないのつかいかたがよくわかった。",romaji:"Ekimae no mise de ten'in sanga hanashi teirunowo kii te, naidemonaino tsukaikata gayoku waka tta.",meaning:"Saat mendengar staf toko di depan stasiun berbicara, saya jadi lebih paham cara pakai pola ini."},
      {jp:"授業だけでなく、日常の場面でもないでもないは意外とよく出てくる。",kana:"じゅぎょうだけでなく、にちじょうのばめんでもないでもないはいがいとよくでてくる。",romaji:"Jugyou dakedenaku, nichijou no bamen demonaidemonaiha igai toyoku dete kuru.",meaning:"Bukan hanya di kelas, pola ini ternyata cukup sering muncul dalam keseharian."}
    ]}
  ]},

  // ── GR-N1-114: 〜ないとも限らない ──
  {id:"GR-N1-114",level:"N1",title:"〜ないとも限らない",summary:"Pola 〜ないとも限らない untuk level N1, dengan contoh penggunaan dalam konteks sekolah, kantor, layanan publik, dan kehidupan sehari-hari di Jepang.",groups:[
    {name:"〜ないとも限らない",description:"Contoh penggunaan 〜ないとも限らない dalam konteks alami sehari-hari di Jepang.",sentences:[
      {jp:"この前の説明会では、ないとも限らないという表現も実際の場面で使われていた。",kana:"このまえのせつめいかいでは、ないともかぎらないというひょうげんもじっさいのばめんでつかわれていた。",romaji:"Kono mae no setsumeikai deha, naitomo kagira naitoiu hyougen mo jissai no bamen de tsukawa reteita.",meaning:"Pada sesi penjelasan sebelumnya, ungkapan ini juga dipakai dalam situasi nyata."},
      {jp:"区役所や学校でも、ないとも限らないのような言い方を見かけることがある。",kana:"くやくしょやがっこうでも、ないともかぎらないのようないいかたをみかけることがある。",romaji:"Kuyakusho ya gakkou demo, naitomo kagira nainoyouna iikata wo mikake rukotogaaru.",meaning:"Di balai kota maupun sekolah, kadang terlihat cara ungkap seperti ini."},
      {jp:"職場の会話では、ないとも限らないを使うと少し自然な言い方になる。",kana:"しょくばのかいわでは、ないともかぎらないをつかうとすこししぜんないいかたになる。",romaji:"Shokuba no kaiwa deha, naitomo kagira naiwo tsukau to sukoshi shizen na iikata ninaru.",meaning:"Dalam percakapan kerja, memakai pola ini bisa membuat ungkapan terdengar lebih alami."},
      {jp:"駅前の店で店員さんが話しているのを聞いて、ないとも限らないの使い方がよく分かった。",kana:"えきまえのみせでてんいんさんがはなしているのをきいて、ないともかぎらないのつかいかたがよくわかった。",romaji:"Ekimae no mise de ten'in sanga hanashi teirunowo kii te, naitomo kagira naino tsukaikata gayoku waka tta.",meaning:"Saat mendengar staf toko di depan stasiun berbicara, saya jadi lebih paham cara pakai pola ini."},
      {jp:"授業だけでなく、日常の場面でもないとも限らないは意外とよく出てくる。",kana:"じゅぎょうだけでなく、にちじょうのばめんでもないともかぎらないはいがいとよくでてくる。",romaji:"Jugyou dakedenaku, nichijou no bamen demonaitomo kagira naiha igai toyoku dete kuru.",meaning:"Bukan hanya di kelas, pola ini ternyata cukup sering muncul dalam keseharian."}
    ]}
  ]},

  // ── GR-N1-115: 〜ないまでも ──
  {id:"GR-N1-115",level:"N1",title:"〜ないまでも",summary:"Pola 〜ないまでも untuk level N1, dengan contoh penggunaan dalam konteks sekolah, kantor, layanan publik, dan kehidupan sehari-hari di Jepang.",groups:[
    {name:"〜ないまでも",description:"Contoh penggunaan 〜ないまでも dalam konteks alami sehari-hari di Jepang.",sentences:[
      {jp:"この前の説明会では、ないまでもという表現も実際の場面で使われていた。",kana:"このまえのせつめいかいでは、ないまでもというひょうげんもじっさいのばめんでつかわれていた。",romaji:"Kono mae no setsumeikai deha, naimademotoiu hyougen mo jissai no bamen de tsukawa reteita.",meaning:"Pada sesi penjelasan sebelumnya, ungkapan ini juga dipakai dalam situasi nyata."},
      {jp:"区役所や学校でも、ないまでものような言い方を見かけることがある。",kana:"くやくしょやがっこうでも、ないまでものようないいかたをみかけることがある。",romaji:"Kuyakusho ya gakkou demo, naimademonoyouna iikata wo mikake rukotogaaru.",meaning:"Di balai kota maupun sekolah, kadang terlihat cara ungkap seperti ini."},
      {jp:"職場の会話では、ないまでもを使うと少し自然な言い方になる。",kana:"しょくばのかいわでは、ないまでもをつかうとすこししぜんないいかたになる。",romaji:"Shokuba no kaiwa deha, naimademowo tsukau to sukoshi shizen na iikata ninaru.",meaning:"Dalam percakapan kerja, memakai pola ini bisa membuat ungkapan terdengar lebih alami."},
      {jp:"駅前の店で店員さんが話しているのを聞いて、ないまでもの使い方がよく分かった。",kana:"えきまえのみせでてんいんさんがはなしているのをきいて、ないまでものつかいかたがよくわかった。",romaji:"Ekimae no mise de ten'in sanga hanashi teirunowo kii te, naimademono tsukaikata gayoku waka tta.",meaning:"Saat mendengar staf toko di depan stasiun berbicara, saya jadi lebih paham cara pakai pola ini."},
      {jp:"授業だけでなく、日常の場面でもないまでもは意外とよく出てくる。",kana:"じゅぎょうだけでなく、にちじょうのばめんでもないまでもはいがいとよくでてくる。",romaji:"Jugyou dakedenaku, nichijou no bamen demonaimademoha igai toyoku dete kuru.",meaning:"Bukan hanya di kelas, pola ini ternyata cukup sering muncul dalam keseharian."}
    ]}
  ]},

  // ── GR-N1-116: 〜ながらに / ながらの ──
  {id:"GR-N1-116",level:"N1",title:"〜ながらに / ながらの",summary:"Pola 〜ながらに / ながらの untuk level N1, dengan contoh penggunaan dalam konteks sekolah, kantor, layanan publik, dan kehidupan sehari-hari di Jepang.",groups:[
    {name:"〜ながらに / ながらの",description:"Contoh penggunaan 〜ながらに / ながらの dalam konteks alami sehari-hari di Jepang.",sentences:[
      {jp:"この前の説明会では、ながらにという表現も実際の場面で使われていた。",kana:"このまえのせつめいかいでは、ながらにというひょうげんもじっさいのばめんでつかわれていた。",romaji:"Kono mae no setsumeikai deha, nagaranitoiu hyougen mo jissai no bamen de tsukawa reteita.",meaning:"Pada sesi penjelasan sebelumnya, ungkapan ini juga dipakai dalam situasi nyata."},
      {jp:"区役所や学校でも、ながらにのような言い方を見かけることがある。",kana:"くやくしょやがっこうでも、ながらにのようないいかたをみかけることがある。",romaji:"Kuyakusho ya gakkou demo, nagaraninoyouna iikata wo mikake rukotogaaru.",meaning:"Di balai kota maupun sekolah, kadang terlihat cara ungkap seperti ini."},
      {jp:"職場の会話では、ながらにを使うと少し自然な言い方になる。",kana:"しょくばのかいわでは、ながらにをつかうとすこししぜんないいかたになる。",romaji:"Shokuba no kaiwa deha, nagaraniwo tsukau to sukoshi shizen na iikata ninaru.",meaning:"Dalam percakapan kerja, memakai pola ini bisa membuat ungkapan terdengar lebih alami."},
      {jp:"駅前の店で店員さんが話しているのを聞いて、ながらにの使い方がよく分かった。",kana:"えきまえのみせでてんいんさんがはなしているのをきいて、ながらにのつかいかたがよくわかった。",romaji:"Ekimae no mise de ten'in sanga hanashi teirunowo kii te, nagaranino tsukaikata gayoku waka tta.",meaning:"Saat mendengar staf toko di depan stasiun berbicara, saya jadi lebih paham cara pakai pola ini."},
      {jp:"授業だけでなく、日常の場面でもながらには意外とよく出てくる。",kana:"じゅぎょうだけでなく、にちじょうのばめんでもながらにはいがいとよくでてくる。",romaji:"Jugyou dakedenaku, nichijou no bamen demonagaraniha igai toyoku dete kuru.",meaning:"Bukan hanya di kelas, pola ini ternyata cukup sering muncul dalam keseharian."}
    ]}
  ]},

  // ── GR-N1-117: 〜なくしては ──
  {id:"GR-N1-117",level:"N1",title:"〜なくしては",summary:"Pola 〜なくしては untuk level N1, dengan contoh penggunaan dalam konteks sekolah, kantor, layanan publik, dan kehidupan sehari-hari di Jepang.",groups:[
    {name:"〜なくしては",description:"Contoh penggunaan 〜なくしては dalam konteks alami sehari-hari di Jepang.",sentences:[
      {jp:"この前の説明会では、なくしてはという表現も実際の場面で使われていた。",kana:"このまえのせつめいかいでは、なくしてはというひょうげんもじっさいのばめんでつかわれていた。",romaji:"Kono mae no setsumeikai deha, nakushitehatoiu hyougen mo jissai no bamen de tsukawa reteita.",meaning:"Pada sesi penjelasan sebelumnya, ungkapan ini juga dipakai dalam situasi nyata."},
      {jp:"区役所や学校でも、なくしてはのような言い方を見かけることがある。",kana:"くやくしょやがっこうでも、なくしてはのようないいかたをみかけることがある。",romaji:"Kuyakusho ya gakkou demo, nakushitehanoyouna iikata wo mikake rukotogaaru.",meaning:"Di balai kota maupun sekolah, kadang terlihat cara ungkap seperti ini."},
      {jp:"職場の会話では、なくしてはを使うと少し自然な言い方になる。",kana:"しょくばのかいわでは、なくしてはをつかうとすこししぜんないいかたになる。",romaji:"Shokuba no kaiwa deha, nakushitehawo tsukau to sukoshi shizen na iikata ninaru.",meaning:"Dalam percakapan kerja, memakai pola ini bisa membuat ungkapan terdengar lebih alami."},
      {jp:"駅前の店で店員さんが話しているのを聞いて、なくしてはの使い方がよく分かった。",kana:"えきまえのみせでてんいんさんがはなしているのをきいて、なくしてはのつかいかたがよくわかった。",romaji:"Ekimae no mise de ten'in sanga hanashi teirunowo kii te, nakushitehano tsukaikata gayoku waka tta.",meaning:"Saat mendengar staf toko di depan stasiun berbicara, saya jadi lebih paham cara pakai pola ini."},
      {jp:"授業だけでなく、日常の場面でもなくしてはは意外とよく出てくる。",kana:"じゅぎょうだけでなく、にちじょうのばめんでもなくしてははいがいとよくでてくる。",romaji:"Jugyou dakedenaku, nichijou no bamen demonakushitehaha igai toyoku dete kuru.",meaning:"Bukan hanya di kelas, pola ini ternyata cukup sering muncul dalam keseharian."}
    ]}
  ]},

  // ── GR-N1-118: 〜ならいざしらず ──
  {id:"GR-N1-118",level:"N1",title:"〜ならいざしらず",summary:"Pola 〜ならいざしらず untuk level N1, dengan contoh penggunaan dalam konteks sekolah, kantor, layanan publik, dan kehidupan sehari-hari di Jepang.",groups:[
    {name:"〜ならいざしらず",description:"Contoh penggunaan 〜ならいざしらず dalam konteks alami sehari-hari di Jepang.",sentences:[
      {jp:"この前の説明会では、ならいざしらずという表現も実際の場面で使われていた。",kana:"このまえのせつめいかいでは、ならいざしらずというひょうげんもじっさいのばめんでつかわれていた。",romaji:"Kono mae no setsumeikai deha, naraizashirazutoiu hyougen mo jissai no bamen de tsukawa reteita.",meaning:"Pada sesi penjelasan sebelumnya, ungkapan ini juga dipakai dalam situasi nyata."},
      {jp:"区役所や学校でも、ならいざしらずのような言い方を見かけることがある。",kana:"くやくしょやがっこうでも、ならいざしらずのようないいかたをみかけることがある。",romaji:"Kuyakusho ya gakkou demo, naraizashirazunoyouna iikata wo mikake rukotogaaru.",meaning:"Di balai kota maupun sekolah, kadang terlihat cara ungkap seperti ini."},
      {jp:"職場の会話では、ならいざしらずを使うと少し自然な言い方になる。",kana:"しょくばのかいわでは、ならいざしらずをつかうとすこししぜんないいかたになる。",romaji:"Shokuba no kaiwa deha, naraizashirazuwo tsukau to sukoshi shizen na iikata ninaru.",meaning:"Dalam percakapan kerja, memakai pola ini bisa membuat ungkapan terdengar lebih alami."},
      {jp:"駅前の店で店員さんが話しているのを聞いて、ならいざしらずの使い方がよく分かった。",kana:"えきまえのみせでてんいんさんがはなしているのをきいて、ならいざしらずのつかいかたがよくわかった。",romaji:"Ekimae no mise de ten'in sanga hanashi teirunowo kii te, naraizashirazuno tsukaikata gayoku waka tta.",meaning:"Saat mendengar staf toko di depan stasiun berbicara, saya jadi lebih paham cara pakai pola ini."},
      {jp:"授業だけでなく、日常の場面でもならいざしらずは意外とよく出てくる。",kana:"じゅぎょうだけでなく、にちじょうのばめんでもならいざしらずはいがいとよくでてくる。",romaji:"Jugyou dakedenaku, nichijou no bamen demonaraizashirazuha igai toyoku dete kuru.",meaning:"Bukan hanya di kelas, pola ini ternyata cukup sering muncul dalam keseharian."}
    ]}
  ]},

  // ── GR-N1-119: 〜ならでは ──
  {id:"GR-N1-119",level:"N1",title:"〜ならでは",summary:"Pola 〜ならでは untuk level N1, dengan contoh penggunaan dalam konteks sekolah, kantor, layanan publik, dan kehidupan sehari-hari di Jepang.",groups:[
    {name:"〜ならでは",description:"Contoh penggunaan 〜ならでは dalam konteks alami sehari-hari di Jepang.",sentences:[
      {jp:"この前の説明会では、ならではという表現も実際の場面で使われていた。",kana:"このまえのせつめいかいでは、ならではというひょうげんもじっさいのばめんでつかわれていた。",romaji:"Kono mae no setsumeikai deha, naradehatoiu hyougen mo jissai no bamen de tsukawa reteita.",meaning:"Pada sesi penjelasan sebelumnya, ungkapan ini juga dipakai dalam situasi nyata."},
      {jp:"区役所や学校でも、ならではのような言い方を見かけることがある。",kana:"くやくしょやがっこうでも、ならではのようないいかたをみかけることがある。",romaji:"Kuyakusho ya gakkou demo, naradehanoyouna iikata wo mikake rukotogaaru.",meaning:"Di balai kota maupun sekolah, kadang terlihat cara ungkap seperti ini."},
      {jp:"職場の会話では、ならではを使うと少し自然な言い方になる。",kana:"しょくばのかいわでは、ならではをつかうとすこししぜんないいかたになる。",romaji:"Shokuba no kaiwa deha, naradehawo tsukau to sukoshi shizen na iikata ninaru.",meaning:"Dalam percakapan kerja, memakai pola ini bisa membuat ungkapan terdengar lebih alami."},
      {jp:"駅前の店で店員さんが話しているのを聞いて、ならではの使い方がよく分かった。",kana:"えきまえのみせでてんいんさんがはなしているのをきいて、ならではのつかいかたがよくわかった。",romaji:"Ekimae no mise de ten'in sanga hanashi teirunowo kii te, naradehano tsukaikata gayoku waka tta.",meaning:"Saat mendengar staf toko di depan stasiun berbicara, saya jadi lebih paham cara pakai pola ini."},
      {jp:"授業だけでなく、日常の場面でもならではは意外とよく出てくる。",kana:"じゅぎょうだけでなく、にちじょうのばめんでもならでははいがいとよくでてくる。",romaji:"Jugyou dakedenaku, nichijou no bamen demonaradehaha igai toyoku dete kuru.",meaning:"Bukan hanya di kelas, pola ini ternyata cukup sering muncul dalam keseharian."}
    ]}
  ]},

  // ── GR-N1-120: 〜ならではだ / ならではの ──
  {id:"GR-N1-120",level:"N1",title:"〜ならではだ / ならではの",summary:"Pola 〜ならではだ / ならではの untuk level N1, dengan contoh penggunaan dalam konteks sekolah, kantor, layanan publik, dan kehidupan sehari-hari di Jepang.",groups:[
    {name:"〜ならではだ / ならではの",description:"Contoh penggunaan 〜ならではだ / ならではの dalam konteks alami sehari-hari di Jepang.",sentences:[
      {jp:"この前の説明会では、ならではだという表現も実際の場面で使われていた。",kana:"このまえのせつめいかいでは、ならではだというひょうげんもじっさいのばめんでつかわれていた。",romaji:"Kono mae no setsumeikai deha, naradehadatoiu hyougen mo jissai no bamen de tsukawa reteita.",meaning:"Pada sesi penjelasan sebelumnya, ungkapan ini juga dipakai dalam situasi nyata."},
      {jp:"区役所や学校でも、ならではだのような言い方を見かけることがある。",kana:"くやくしょやがっこうでも、ならではだのようないいかたをみかけることがある。",romaji:"Kuyakusho ya gakkou demo, naradehadanoyouna iikata wo mikake rukotogaaru.",meaning:"Di balai kota maupun sekolah, kadang terlihat cara ungkap seperti ini."},
      {jp:"職場の会話では、ならではだを使うと少し自然な言い方になる。",kana:"しょくばのかいわでは、ならではだをつかうとすこししぜんないいかたになる。",romaji:"Shokuba no kaiwa deha, naradehadawo tsukau to sukoshi shizen na iikata ninaru.",meaning:"Dalam percakapan kerja, memakai pola ini bisa membuat ungkapan terdengar lebih alami."},
      {jp:"駅前の店で店員さんが話しているのを聞いて、ならではだの使い方がよく分かった。",kana:"えきまえのみせでてんいんさんがはなしているのをきいて、ならではだのつかいかたがよくわかった。",romaji:"Ekimae no mise de ten'in sanga hanashi teirunowo kii te, naradehadano tsukaikata gayoku waka tta.",meaning:"Saat mendengar staf toko di depan stasiun berbicara, saya jadi lebih paham cara pakai pola ini."},
      {jp:"授業だけでなく、日常の場面でもならではだは意外とよく出てくる。",kana:"じゅぎょうだけでなく、にちじょうのばめんでもならではだはいがいとよくでてくる。",romaji:"Jugyou dakedenaku, nichijou no bamen demonaradehadaha igai toyoku dete kuru.",meaning:"Bukan hanya di kelas, pola ini ternyata cukup sering muncul dalam keseharian."}
    ]}
  ]},

  // ── GR-N1-121: 〜なり ──
  {id:"GR-N1-121",level:"N1",title:"〜なり",summary:"Pola 〜なり untuk level N1, dengan contoh penggunaan dalam konteks sekolah, kantor, layanan publik, dan kehidupan sehari-hari di Jepang.",groups:[
    {name:"〜なり",description:"Contoh penggunaan 〜なり dalam konteks alami sehari-hari di Jepang.",sentences:[
      {jp:"この前の説明会では、なりという表現も実際の場面で使われていた。",kana:"このまえのせつめいかいでは、なりというひょうげんもじっさいのばめんでつかわれていた。",romaji:"Kono mae no setsumeikai deha, naritoiu hyougen mo jissai no bamen de tsukawa reteita.",meaning:"Pada sesi penjelasan sebelumnya, ungkapan ini juga dipakai dalam situasi nyata."},
      {jp:"区役所や学校でも、なりのような言い方を見かけることがある。",kana:"くやくしょやがっこうでも、なりのようないいかたをみかけることがある。",romaji:"Kuyakusho ya gakkou demo, narinoyouna iikata wo mikake rukotogaaru.",meaning:"Di balai kota maupun sekolah, kadang terlihat cara ungkap seperti ini."},
      {jp:"職場の会話では、なりを使うと少し自然な言い方になる。",kana:"しょくばのかいわでは、なりをつかうとすこししぜんないいかたになる。",romaji:"Shokuba no kaiwa deha, nariwo tsukau to sukoshi shizen na iikata ninaru.",meaning:"Dalam percakapan kerja, memakai pola ini bisa membuat ungkapan terdengar lebih alami."},
      {jp:"駅前の店で店員さんが話しているのを聞いて、なりの使い方がよく分かった。",kana:"えきまえのみせでてんいんさんがはなしているのをきいて、なりのつかいかたがよくわかった。",romaji:"Ekimae no mise de ten'in sanga hanashi teirunowo kii te, narino tsukaikata gayoku waka tta.",meaning:"Saat mendengar staf toko di depan stasiun berbicara, saya jadi lebih paham cara pakai pola ini."},
      {jp:"授業だけでなく、日常の場面でもなりは意外とよく出てくる。",kana:"じゅぎょうだけでなく、にちじょうのばめんでもなりはいがいとよくでてくる。",romaji:"Jugyou dakedenaku, nichijou no bamen demonariha igai toyoku dete kuru.",meaning:"Bukan hanya di kelas, pola ini ternyata cukup sering muncul dalam keseharian."}
    ]}
  ]},

  // ── GR-N1-122: 〜なりとも ──
  {id:"GR-N1-122",level:"N1",title:"〜なりとも",summary:"Pola 〜なりとも untuk level N1, dengan contoh penggunaan dalam konteks sekolah, kantor, layanan publik, dan kehidupan sehari-hari di Jepang.",groups:[
    {name:"〜なりとも",description:"Contoh penggunaan 〜なりとも dalam konteks alami sehari-hari di Jepang.",sentences:[
      {jp:"この前の説明会では、なりともという表現も実際の場面で使われていた。",kana:"このまえのせつめいかいでは、なりともというひょうげんもじっさいのばめんでつかわれていた。",romaji:"Kono mae no setsumeikai deha, naritomotoiu hyougen mo jissai no bamen de tsukawa reteita.",meaning:"Pada sesi penjelasan sebelumnya, ungkapan ini juga dipakai dalam situasi nyata."},
      {jp:"区役所や学校でも、なりとものような言い方を見かけることがある。",kana:"くやくしょやがっこうでも、なりとものようないいかたをみかけることがある。",romaji:"Kuyakusho ya gakkou demo, naritomonoyouna iikata wo mikake rukotogaaru.",meaning:"Di balai kota maupun sekolah, kadang terlihat cara ungkap seperti ini."},
      {jp:"職場の会話では、なりともを使うと少し自然な言い方になる。",kana:"しょくばのかいわでは、なりともをつかうとすこししぜんないいかたになる。",romaji:"Shokuba no kaiwa deha, naritomowo tsukau to sukoshi shizen na iikata ninaru.",meaning:"Dalam percakapan kerja, memakai pola ini bisa membuat ungkapan terdengar lebih alami."},
      {jp:"駅前の店で店員さんが話しているのを聞いて、なりともの使い方がよく分かった。",kana:"えきまえのみせでてんいんさんがはなしているのをきいて、なりとものつかいかたがよくわかった。",romaji:"Ekimae no mise de ten'in sanga hanashi teirunowo kii te, naritomono tsukaikata gayoku waka tta.",meaning:"Saat mendengar staf toko di depan stasiun berbicara, saya jadi lebih paham cara pakai pola ini."},
      {jp:"授業だけでなく、日常の場面でもなりともは意外とよく出てくる。",kana:"じゅぎょうだけでなく、にちじょうのばめんでもなりともはいがいとよくでてくる。",romaji:"Jugyou dakedenaku, nichijou no bamen demonaritomoha igai toyoku dete kuru.",meaning:"Bukan hanya di kelas, pola ini ternyata cukup sering muncul dalam keseharian."}
    ]}
  ]},

  // ── GR-N1-123: 〜なりに / なりの ──
  {id:"GR-N1-123",level:"N1",title:"〜なりに / なりの",summary:"Pola 〜なりに / なりの untuk level N1, dengan contoh penggunaan dalam konteks sekolah, kantor, layanan publik, dan kehidupan sehari-hari di Jepang.",groups:[
    {name:"〜なりに / なりの",description:"Contoh penggunaan 〜なりに / なりの dalam konteks alami sehari-hari di Jepang.",sentences:[
      {jp:"この前の説明会では、なりにという表現も実際の場面で使われていた。",kana:"このまえのせつめいかいでは、なりにというひょうげんもじっさいのばめんでつかわれていた。",romaji:"Kono mae no setsumeikai deha, narinitoiu hyougen mo jissai no bamen de tsukawa reteita.",meaning:"Pada sesi penjelasan sebelumnya, ungkapan ini juga dipakai dalam situasi nyata."},
      {jp:"区役所や学校でも、なりにのような言い方を見かけることがある。",kana:"くやくしょやがっこうでも、なりにのようないいかたをみかけることがある。",romaji:"Kuyakusho ya gakkou demo, narininoyouna iikata wo mikake rukotogaaru.",meaning:"Di balai kota maupun sekolah, kadang terlihat cara ungkap seperti ini."},
      {jp:"職場の会話では、なりにを使うと少し自然な言い方になる。",kana:"しょくばのかいわでは、なりにをつかうとすこししぜんないいかたになる。",romaji:"Shokuba no kaiwa deha, nariniwo tsukau to sukoshi shizen na iikata ninaru.",meaning:"Dalam percakapan kerja, memakai pola ini bisa membuat ungkapan terdengar lebih alami."},
      {jp:"駅前の店で店員さんが話しているのを聞いて、なりにの使い方がよく分かった。",kana:"えきまえのみせでてんいんさんがはなしているのをきいて、なりにのつかいかたがよくわかった。",romaji:"Ekimae no mise de ten'in sanga hanashi teirunowo kii te, narinino tsukaikata gayoku waka tta.",meaning:"Saat mendengar staf toko di depan stasiun berbicara, saya jadi lebih paham cara pakai pola ini."},
      {jp:"授業だけでなく、日常の場面でもなりには意外とよく出てくる。",kana:"じゅぎょうだけでなく、にちじょうのばめんでもなりにはいがいとよくでてくる。",romaji:"Jugyou dakedenaku, nichijou no bamen demonariniha igai toyoku dete kuru.",meaning:"Bukan hanya di kelas, pola ini ternyata cukup sering muncul dalam keseharian."}
    ]}
  ]},

  // ── GR-N1-124: なんという / なんと / なんて ──
  {id:"GR-N1-124",level:"N1",title:"なんという / なんと / なんて",summary:"Pola なんという / なんと / なんて untuk level N1, dengan contoh penggunaan dalam konteks sekolah, kantor, layanan publik, dan kehidupan sehari-hari di Jepang.",groups:[
    {name:"なんという / なんと / なんて",description:"Contoh penggunaan なんという / なんと / なんて dalam konteks alami sehari-hari di Jepang.",sentences:[
      {jp:"この前の説明会では、なんというという表現も実際の場面で使われていた。",kana:"このまえのせつめいかいでは、なんというというひょうげんもじっさいのばめんでつかわれていた。",romaji:"Kono mae no setsumeikai deha, nantoiutoiu hyougen mo jissai no bamen de tsukawa reteita.",meaning:"Pada sesi penjelasan sebelumnya, ungkapan ini juga dipakai dalam situasi nyata."},
      {jp:"区役所や学校でも、なんというのような言い方を見かけることがある。",kana:"くやくしょやがっこうでも、なんというのようないいかたをみかけることがある。",romaji:"Kuyakusho ya gakkou demo, nantoiunoyouna iikata wo mikake rukotogaaru.",meaning:"Di balai kota maupun sekolah, kadang terlihat cara ungkap seperti ini."},
      {jp:"職場の会話では、なんというを使うと少し自然な言い方になる。",kana:"しょくばのかいわでは、なんというをつかうとすこししぜんないいかたになる。",romaji:"Shokuba no kaiwa deha, nantoiuwo tsukau to sukoshi shizen na iikata ninaru.",meaning:"Dalam percakapan kerja, memakai pola ini bisa membuat ungkapan terdengar lebih alami."},
      {jp:"駅前の店で店員さんが話しているのを聞いて、なんというの使い方がよく分かった。",kana:"えきまえのみせでてんいんさんがはなしているのをきいて、なんというのつかいかたがよくわかった。",romaji:"Ekimae no mise de ten'in sanga hanashi teirunowo kii te, nantoiuno tsukaikata gayoku waka tta.",meaning:"Saat mendengar staf toko di depan stasiun berbicara, saya jadi lebih paham cara pakai pola ini."},
      {jp:"授業だけでなく、日常の場面でもなんというは意外とよく出てくる。",kana:"じゅぎょうだけでなく、にちじょうのばめんでもなんというはいがいとよくでてくる。",romaji:"Jugyou dakedenaku, nichijou no bamen demonantoiuha igai toyoku dete kuru.",meaning:"Bukan hanya di kelas, pola ini ternyata cukup sering muncul dalam keseharian."}
    ]}
  ]},

  // ── GR-N1-125: 〜に〜ない ──
  {id:"GR-N1-125",level:"N1",title:"〜に〜ない",summary:"Pola 〜に〜ない untuk level N1, dengan contoh penggunaan dalam konteks sekolah, kantor, layanan publik, dan kehidupan sehari-hari di Jepang.",groups:[
    {name:"〜に〜ない",description:"Contoh penggunaan 〜に〜ない dalam konteks alami sehari-hari di Jepang.",sentences:[
      {jp:"留学生にない説明会が、大学のホールで開かれた。",kana:"りゅうがくせいにないせつめいかいが、だいがくのほーるでひらかれた。",romaji:"Ryuugakusei ninai setsumeikai ga, daigaku no hooru de hiraka reta.",meaning:"Sesi penjelasan untuk mahasiswa asing diadakan di aula universitas."},
      {jp:"駅前の再開発にない住民向けの案内が配られた。",kana:"えきまえのさいかいはつにないじゅうみんむけのあんないがくばられた。",romaji:"Ekimae no saikaihatsu ninai juumin muke no annai ga kubara reta.",meaning:"Pemberitahuan bagi warga terkait pembangunan ulang area depan stasiun dibagikan."},
      {jp:"この制度にない質問があれば、区役所の窓口で確認できる。",kana:"このせいどにないしつもんがあれば、くやくしょのまどぐちでかくにんできる。",romaji:"Kono seido ninai shitsumon gaareba, kuyakusho no madoguchi de kakunin dekiru.",meaning:"Kalau ada pertanyaan terkait sistem ini, bisa ditanyakan di loket balai kota."},
      {jp:"外国人スタッフにない研修も、来月から始まる予定だ。",kana:"がいこくじんすたっふにないけんしゅうも、らいげつからはじまるよていだ。",romaji:"Gaikokujin sutaffu ninai kenshuu mo, raigetsu kara hajima ru yotei da.",meaning:"Pelatihan untuk staf asing juga dijadwalkan mulai bulan depan."},
      {jp:"今回の変更点にない詳しい資料は、受付で受け取れる。",kana:"こんかいのへんこうてんにないくわしいしりょうは、うけつけでうけとれる。",romaji:"Konkai no henkouten ninai kuwashii shiryou ha, uketsuke de uketore ru.",meaning:"Materi rinci terkait perubahan kali ini bisa diambil di meja penerima tamu."}
    ]}
  ]},

  // ── GR-N1-126: 〜に〜を重ねて ──
  {id:"GR-N1-126",level:"N1",title:"〜に〜を重ねて",summary:"Pola 〜に〜を重ねて untuk level N1, dengan contoh penggunaan dalam konteks sekolah, kantor, layanan publik, dan kehidupan sehari-hari di Jepang.",groups:[
    {name:"〜に〜を重ねて",description:"Contoh penggunaan 〜に〜を重ねて dalam konteks alami sehari-hari di Jepang.",sentences:[
      {jp:"留学生にを重ねて説明会が、大学のホールで開かれた。",kana:"りゅうがくせいにをおもねてせつめいかいが、だいがくのほーるでひらかれた。",romaji:"Ryuugakusei niwo omone te setsumeikai ga, daigaku no hooru de hiraka reta.",meaning:"Sesi penjelasan untuk mahasiswa asing diadakan di aula universitas."},
      {jp:"駅前の再開発にを重ねて住民向けの案内が配られた。",kana:"えきまえのさいかいはつにをおもねてじゅうみんむけのあんないがくばられた。",romaji:"Ekimae no saikaihatsu niwo omone te juumin muke no annai ga kubara reta.",meaning:"Pemberitahuan bagi warga terkait pembangunan ulang area depan stasiun dibagikan."},
      {jp:"この制度にを重ねて質問があれば、区役所の窓口で確認できる。",kana:"このせいどにをおもねてしつもんがあれば、くやくしょのまどぐちでかくにんできる。",romaji:"Kono seido niwo omone te shitsumon gaareba, kuyakusho no madoguchi de kakunin dekiru.",meaning:"Kalau ada pertanyaan terkait sistem ini, bisa ditanyakan di loket balai kota."},
      {jp:"外国人スタッフにを重ねて研修も、来月から始まる予定だ。",kana:"がいこくじんすたっふにをおもねてけんしゅうも、らいげつからはじまるよていだ。",romaji:"Gaikokujin sutaffu niwo omone te kenshuu mo, raigetsu kara hajima ru yotei da.",meaning:"Pelatihan untuk staf asing juga dijadwalkan mulai bulan depan."},
      {jp:"今回の変更点にを重ねて詳しい資料は、受付で受け取れる。",kana:"こんかいのへんこうてんにをおもねてくわしいしりょうは、うけつけでうけとれる。",romaji:"Konkai no henkouten niwo omone te kuwashii shiryou ha, uketsuke de uketore ru.",meaning:"Materi rinci terkait perubahan kali ini bisa diambil di meja penerima tamu."}
    ]}
  ]},

  // ── GR-N1-127: 〜に値する ──
  {id:"GR-N1-127",level:"N1",title:"〜に値する",summary:"Pola 〜に値する untuk level N1, dengan contoh penggunaan dalam konteks sekolah, kantor, layanan publik, dan kehidupan sehari-hari di Jepang.",groups:[
    {name:"〜に値する",description:"Contoh penggunaan 〜に値する dalam konteks alami sehari-hari di Jepang.",sentences:[
      {jp:"留学生に値する説明会が、大学のホールで開かれた。",kana:"りゅうがくせいにあたいするせつめいかいが、だいがくのほーるでひらかれた。",romaji:"Ryuugakusei ni atai suru setsumeikai ga, daigaku no hooru de hiraka reta.",meaning:"Sesi penjelasan untuk mahasiswa asing diadakan di aula universitas."},
      {jp:"駅前の再開発に値する住民向けの案内が配られた。",kana:"えきまえのさいかいはつにあたいするじゅうみんむけのあんないがくばられた。",romaji:"Ekimae no saikaihatsu ni atai suru juumin muke no annai ga kubara reta.",meaning:"Pemberitahuan bagi warga terkait pembangunan ulang area depan stasiun dibagikan."},
      {jp:"この制度に値する質問があれば、区役所の窓口で確認できる。",kana:"このせいどにあたいするしつもんがあれば、くやくしょのまどぐちでかくにんできる。",romaji:"Kono seido ni atai suru shitsumon gaareba, kuyakusho no madoguchi de kakunin dekiru.",meaning:"Kalau ada pertanyaan terkait sistem ini, bisa ditanyakan di loket balai kota."},
      {jp:"外国人スタッフに値する研修も、来月から始まる予定だ。",kana:"がいこくじんすたっふにあたいするけんしゅうも、らいげつからはじまるよていだ。",romaji:"Gaikokujin sutaffu ni atai suru kenshuu mo, raigetsu kara hajima ru yotei da.",meaning:"Pelatihan untuk staf asing juga dijadwalkan mulai bulan depan."},
      {jp:"今回の変更点に値する詳しい資料は、受付で受け取れる。",kana:"こんかいのへんこうてんにあたいするくわしいしりょうは、うけつけでうけとれる。",romaji:"Konkai no henkouten ni atai suru kuwashii shiryou ha, uketsuke de uketore ru.",meaning:"Materi rinci terkait perubahan kali ini bisa diambil di meja penerima tamu."}
    ]}
  ]},

  // ── GR-N1-128: 〜にあって ──
  {id:"GR-N1-128",level:"N1",title:"〜にあって",summary:"Pola 〜にあって untuk level N1, dengan contoh penggunaan dalam konteks sekolah, kantor, layanan publik, dan kehidupan sehari-hari di Jepang.",groups:[
    {name:"〜にあって",description:"Contoh penggunaan 〜にあって dalam konteks alami sehari-hari di Jepang.",sentences:[
      {jp:"留学生にあって説明会が、大学のホールで開かれた。",kana:"りゅうがくせいにあってせつめいかいが、だいがくのほーるでひらかれた。",romaji:"Ryuugakusei niatte setsumeikai ga, daigaku no hooru de hiraka reta.",meaning:"Sesi penjelasan untuk mahasiswa asing diadakan di aula universitas."},
      {jp:"駅前の再開発にあって住民向けの案内が配られた。",kana:"えきまえのさいかいはつにあってじゅうみんむけのあんないがくばられた。",romaji:"Ekimae no saikaihatsu niatte juumin muke no annai ga kubara reta.",meaning:"Pemberitahuan bagi warga terkait pembangunan ulang area depan stasiun dibagikan."},
      {jp:"この制度にあって質問があれば、区役所の窓口で確認できる。",kana:"このせいどにあってしつもんがあれば、くやくしょのまどぐちでかくにんできる。",romaji:"Kono seido niatte shitsumon gaareba, kuyakusho no madoguchi de kakunin dekiru.",meaning:"Kalau ada pertanyaan terkait sistem ini, bisa ditanyakan di loket balai kota."},
      {jp:"外国人スタッフにあって研修も、来月から始まる予定だ。",kana:"がいこくじんすたっふにあってけんしゅうも、らいげつからはじまるよていだ。",romaji:"Gaikokujin sutaffu niatte kenshuu mo, raigetsu kara hajima ru yotei da.",meaning:"Pelatihan untuk staf asing juga dijadwalkan mulai bulan depan."},
      {jp:"今回の変更点にあって詳しい資料は、受付で受け取れる。",kana:"こんかいのへんこうてんにあってくわしいしりょうは、うけつけでうけとれる。",romaji:"Konkai no henkouten niatte kuwashii shiryou ha, uketsuke de uketore ru.",meaning:"Materi rinci terkait perubahan kali ini bisa diambil di meja penerima tamu."}
    ]}
  ]},

  // ── GR-N1-129: 〜に至って / 至り ──
  {id:"GR-N1-129",level:"N1",title:"〜に至って / 至り",summary:"Pola 〜に至って / 至り untuk level N1, dengan contoh penggunaan dalam konteks sekolah, kantor, layanan publik, dan kehidupan sehari-hari di Jepang.",groups:[
    {name:"〜に至って / 至り",description:"Contoh penggunaan 〜に至って / 至り dalam konteks alami sehari-hari di Jepang.",sentences:[
      {jp:"留学生に至って説明会が、大学のホールで開かれた。",kana:"りゅうがくせいにいたってせつめいかいが、だいがくのほーるでひらかれた。",romaji:"Ryuugakusei ni itatsu te setsumeikai ga, daigaku no hooru de hiraka reta.",meaning:"Sesi penjelasan untuk mahasiswa asing diadakan di aula universitas."},
      {jp:"駅前の再開発に至って住民向けの案内が配られた。",kana:"えきまえのさいかいはつにいたってじゅうみんむけのあんないがくばられた。",romaji:"Ekimae no saikaihatsu ni itatsu te juumin muke no annai ga kubara reta.",meaning:"Pemberitahuan bagi warga terkait pembangunan ulang area depan stasiun dibagikan."},
      {jp:"この制度に至って質問があれば、区役所の窓口で確認できる。",kana:"このせいどにいたってしつもんがあれば、くやくしょのまどぐちでかくにんできる。",romaji:"Kono seido ni itatsu te shitsumon gaareba, kuyakusho no madoguchi de kakunin dekiru.",meaning:"Kalau ada pertanyaan terkait sistem ini, bisa ditanyakan di loket balai kota."},
      {jp:"外国人スタッフに至って研修も、来月から始まる予定だ。",kana:"がいこくじんすたっふにいたってけんしゅうも、らいげつからはじまるよていだ。",romaji:"Gaikokujin sutaffu ni itatsu te kenshuu mo, raigetsu kara hajima ru yotei da.",meaning:"Pelatihan untuk staf asing juga dijadwalkan mulai bulan depan."},
      {jp:"今回の変更点に至って詳しい資料は、受付で受け取れる。",kana:"こんかいのへんこうてんにいたってくわしいしりょうは、うけつけでうけとれる。",romaji:"Konkai no henkouten ni itatsu te kuwashii shiryou ha, uketsuke de uketore ru.",meaning:"Materi rinci terkait perubahan kali ini bisa diambil di meja penerima tamu."}
    ]}
  ]},

  // ── GR-N1-130: 〜に至っては ──
  {id:"GR-N1-130",level:"N1",title:"〜に至っては",summary:"Pola 〜に至っては untuk level N1, dengan contoh penggunaan dalam konteks sekolah, kantor, layanan publik, dan kehidupan sehari-hari di Jepang.",groups:[
    {name:"〜に至っては",description:"Contoh penggunaan 〜に至っては dalam konteks alami sehari-hari di Jepang.",sentences:[
      {jp:"留学生に至っては説明会が、大学のホールで開かれた。",kana:"りゅうがくせいにいたってはせつめいかいが、だいがくのほーるでひらかれた。",romaji:"Ryuugakusei ni itatsu teha setsumeikai ga, daigaku no hooru de hiraka reta.",meaning:"Sesi penjelasan untuk mahasiswa asing diadakan di aula universitas."},
      {jp:"駅前の再開発に至っては住民向けの案内が配られた。",kana:"えきまえのさいかいはつにいたってはじゅうみんむけのあんないがくばられた。",romaji:"Ekimae no saikaihatsu ni itatsu teha juumin muke no annai ga kubara reta.",meaning:"Pemberitahuan bagi warga terkait pembangunan ulang area depan stasiun dibagikan."},
      {jp:"この制度に至っては質問があれば、区役所の窓口で確認できる。",kana:"このせいどにいたってはしつもんがあれば、くやくしょのまどぐちでかくにんできる。",romaji:"Kono seido ni itatsu teha shitsumon gaareba, kuyakusho no madoguchi de kakunin dekiru.",meaning:"Kalau ada pertanyaan terkait sistem ini, bisa ditanyakan di loket balai kota."},
      {jp:"外国人スタッフに至っては研修も、来月から始まる予定だ。",kana:"がいこくじんすたっふにいたってはけんしゅうも、らいげつからはじまるよていだ。",romaji:"Gaikokujin sutaffu ni itatsu teha kenshuu mo, raigetsu kara hajima ru yotei da.",meaning:"Pelatihan untuk staf asing juga dijadwalkan mulai bulan depan."},
      {jp:"今回の変更点に至っては詳しい資料は、受付で受け取れる。",kana:"こんかいのへんこうてんにいたってはくわしいしりょうは、うけつけでうけとれる。",romaji:"Konkai no henkouten ni itatsu teha kuwashii shiryou ha, uketsuke de uketore ru.",meaning:"Materi rinci terkait perubahan kali ini bisa diambil di meja penerima tamu."}
    ]}
  ]},

  // ── GR-N1-131: 〜に言わせれば ──
  {id:"GR-N1-131",level:"N1",title:"〜に言わせれば",summary:"Pola 〜に言わせれば untuk level N1, dengan contoh penggunaan dalam konteks sekolah, kantor, layanan publik, dan kehidupan sehari-hari di Jepang.",groups:[
    {name:"〜に言わせれば",description:"Contoh penggunaan 〜に言わせれば dalam konteks alami sehari-hari di Jepang.",sentences:[
      {jp:"留学生に言わせれば説明会が、大学のホールで開かれた。",kana:"りゅうがくせいにいわせればせつめいかいが、だいがくのほーるでひらかれた。",romaji:"Ryuugakusei ni iwa sereba setsumeikai ga, daigaku no hooru de hiraka reta.",meaning:"Sesi penjelasan untuk mahasiswa asing diadakan di aula universitas."},
      {jp:"駅前の再開発に言わせれば住民向けの案内が配られた。",kana:"えきまえのさいかいはつにいわせればじゅうみんむけのあんないがくばられた。",romaji:"Ekimae no saikaihatsu ni iwa sereba juumin muke no annai ga kubara reta.",meaning:"Pemberitahuan bagi warga terkait pembangunan ulang area depan stasiun dibagikan."},
      {jp:"この制度に言わせれば質問があれば、区役所の窓口で確認できる。",kana:"このせいどにいわせればしつもんがあれば、くやくしょのまどぐちでかくにんできる。",romaji:"Kono seido ni iwa sereba shitsumon gaareba, kuyakusho no madoguchi de kakunin dekiru.",meaning:"Kalau ada pertanyaan terkait sistem ini, bisa ditanyakan di loket balai kota."},
      {jp:"外国人スタッフに言わせれば研修も、来月から始まる予定だ。",kana:"がいこくじんすたっふにいわせればけんしゅうも、らいげつからはじまるよていだ。",romaji:"Gaikokujin sutaffu ni iwa sereba kenshuu mo, raigetsu kara hajima ru yotei da.",meaning:"Pelatihan untuk staf asing juga dijadwalkan mulai bulan depan."},
      {jp:"今回の変更点に言わせれば詳しい資料は、受付で受け取れる。",kana:"こんかいのへんこうてんにいわせればくわしいしりょうは、うけつけでうけとれる。",romaji:"Konkai no henkouten ni iwa sereba kuwashii shiryou ha, uketsuke de uketore ru.",meaning:"Materi rinci terkait perubahan kali ini bisa diambil di meja penerima tamu."}
    ]}
  ]},

  // ── GR-N1-132: 〜にかかっては / にかかったら / にかかると / かかれば ──
  {id:"GR-N1-132",level:"N1",title:"〜にかかっては / にかかったら / にかかると / かかれば",summary:"Pola 〜にかかっては / にかかったら / にかかると / かかれば untuk level N1, dengan contoh penggunaan dalam konteks sekolah, kantor, layanan publik, dan kehidupan sehari-hari di Jepang.",groups:[
    {name:"〜にかかっては / にかかったら / にかかると / かかれば",description:"Contoh penggunaan 〜にかかっては / にかかったら / にかかると / かかれば dalam konteks alami sehari-hari di Jepang.",sentences:[
      {jp:"留学生にかかっては説明会が、大学のホールで開かれた。",kana:"りゅうがくせいにかかってはせつめいかいが、だいがくのほーるでひらかれた。",romaji:"Ryuugakusei nikakatteha setsumeikai ga, daigaku no hooru de hiraka reta.",meaning:"Sesi penjelasan untuk mahasiswa asing diadakan di aula universitas."},
      {jp:"駅前の再開発にかかっては住民向けの案内が配られた。",kana:"えきまえのさいかいはつにかかってはじゅうみんむけのあんないがくばられた。",romaji:"Ekimae no saikaihatsu nikakatteha juumin muke no annai ga kubara reta.",meaning:"Pemberitahuan bagi warga terkait pembangunan ulang area depan stasiun dibagikan."},
      {jp:"この制度にかかっては質問があれば、区役所の窓口で確認できる。",kana:"このせいどにかかってはしつもんがあれば、くやくしょのまどぐちでかくにんできる。",romaji:"Kono seido nikakatteha shitsumon gaareba, kuyakusho no madoguchi de kakunin dekiru.",meaning:"Kalau ada pertanyaan terkait sistem ini, bisa ditanyakan di loket balai kota."},
      {jp:"外国人スタッフにかかっては研修も、来月から始まる予定だ。",kana:"がいこくじんすたっふにかかってはけんしゅうも、らいげつからはじまるよていだ。",romaji:"Gaikokujin sutaffu nikakatteha kenshuu mo, raigetsu kara hajima ru yotei da.",meaning:"Pelatihan untuk staf asing juga dijadwalkan mulai bulan depan."},
      {jp:"今回の変更点にかかっては詳しい資料は、受付で受け取れる。",kana:"こんかいのへんこうてんにかかってはくわしいしりょうは、うけつけでうけとれる。",romaji:"Konkai no henkouten nikakatteha kuwashii shiryou ha, uketsuke de uketore ru.",meaning:"Materi rinci terkait perubahan kali ini bisa diambil di meja penerima tamu."}
    ]}
  ]},

  // ── GR-N1-133: 〜に限ったことではない ──
  {id:"GR-N1-133",level:"N1",title:"〜に限ったことではない",summary:"Pola 〜に限ったことではない untuk level N1, dengan contoh penggunaan dalam konteks sekolah, kantor, layanan publik, dan kehidupan sehari-hari di Jepang.",groups:[
    {name:"〜に限ったことではない",description:"Contoh penggunaan 〜に限ったことではない dalam konteks alami sehari-hari di Jepang.",sentences:[
      {jp:"留学生に限ったことではない説明会が、大学のホールで開かれた。",kana:"りゅうがくせいにかぎったことではないせつめいかいが、だいがくのほーるでひらかれた。",romaji:"Ryuugakusei ni kagitsu takotodehanai setsumeikai ga, daigaku no hooru de hiraka reta.",meaning:"Sesi penjelasan untuk mahasiswa asing diadakan di aula universitas."},
      {jp:"駅前の再開発に限ったことではない住民向けの案内が配られた。",kana:"えきまえのさいかいはつにかぎったことではないじゅうみんむけのあんないがくばられた。",romaji:"Ekimae no saikaihatsu ni kagitsu takotodehanai juumin muke no annai ga kubara reta.",meaning:"Pemberitahuan bagi warga terkait pembangunan ulang area depan stasiun dibagikan."},
      {jp:"この制度に限ったことではない質問があれば、区役所の窓口で確認できる。",kana:"このせいどにかぎったことではないしつもんがあれば、くやくしょのまどぐちでかくにんできる。",romaji:"Kono seido ni kagitsu takotodehanai shitsumon gaareba, kuyakusho no madoguchi de kakunin dekiru.",meaning:"Kalau ada pertanyaan terkait sistem ini, bisa ditanyakan di loket balai kota."},
      {jp:"外国人スタッフに限ったことではない研修も、来月から始まる予定だ。",kana:"がいこくじんすたっふにかぎったことではないけんしゅうも、らいげつからはじまるよていだ。",romaji:"Gaikokujin sutaffu ni kagitsu takotodehanai kenshuu mo, raigetsu kara hajima ru yotei da.",meaning:"Pelatihan untuk staf asing juga dijadwalkan mulai bulan depan."},
      {jp:"今回の変更点に限ったことではない詳しい資料は、受付で受け取れる。",kana:"こんかいのへんこうてんにかぎったことではないくわしいしりょうは、うけつけでうけとれる。",romaji:"Konkai no henkouten ni kagitsu takotodehanai kuwashii shiryou ha, uketsuke de uketore ru.",meaning:"Materi rinci terkait perubahan kali ini bisa diambil di meja penerima tamu."}
    ]}
  ]},

  // ── GR-N1-134: 〜にかこつけて ──
  {id:"GR-N1-134",level:"N1",title:"〜にかこつけて",summary:"Pola 〜にかこつけて untuk level N1, dengan contoh penggunaan dalam konteks sekolah, kantor, layanan publik, dan kehidupan sehari-hari di Jepang.",groups:[
    {name:"〜にかこつけて",description:"Contoh penggunaan 〜にかこつけて dalam konteks alami sehari-hari di Jepang.",sentences:[
      {jp:"留学生にかこつけて説明会が、大学のホールで開かれた。",kana:"りゅうがくせいにかこつけてせつめいかいが、だいがくのほーるでひらかれた。",romaji:"Ryuugakusei nikakotsukete setsumeikai ga, daigaku no hooru de hiraka reta.",meaning:"Sesi penjelasan untuk mahasiswa asing diadakan di aula universitas."},
      {jp:"駅前の再開発にかこつけて住民向けの案内が配られた。",kana:"えきまえのさいかいはつにかこつけてじゅうみんむけのあんないがくばられた。",romaji:"Ekimae no saikaihatsu nikakotsukete juumin muke no annai ga kubara reta.",meaning:"Pemberitahuan bagi warga terkait pembangunan ulang area depan stasiun dibagikan."},
      {jp:"この制度にかこつけて質問があれば、区役所の窓口で確認できる。",kana:"このせいどにかこつけてしつもんがあれば、くやくしょのまどぐちでかくにんできる。",romaji:"Kono seido nikakotsukete shitsumon gaareba, kuyakusho no madoguchi de kakunin dekiru.",meaning:"Kalau ada pertanyaan terkait sistem ini, bisa ditanyakan di loket balai kota."},
      {jp:"外国人スタッフにかこつけて研修も、来月から始まる予定だ。",kana:"がいこくじんすたっふにかこつけてけんしゅうも、らいげつからはじまるよていだ。",romaji:"Gaikokujin sutaffu nikakotsukete kenshuu mo, raigetsu kara hajima ru yotei da.",meaning:"Pelatihan untuk staf asing juga dijadwalkan mulai bulan depan."},
      {jp:"今回の変更点にかこつけて詳しい資料は、受付で受け取れる。",kana:"こんかいのへんこうてんにかこつけてくわしいしりょうは、うけつけでうけとれる。",romaji:"Konkai no henkouten nikakotsukete kuwashii shiryou ha, uketsuke de uketore ru.",meaning:"Materi rinci terkait perubahan kali ini bisa diambil di meja penerima tamu."}
    ]}
  ]},

  // ── GR-N1-135: 〜に難くない ──
  {id:"GR-N1-135",level:"N1",title:"〜に難くない",summary:"Pola 〜に難くない untuk level N1, dengan contoh penggunaan dalam konteks sekolah, kantor, layanan publik, dan kehidupan sehari-hari di Jepang.",groups:[
    {name:"〜に難くない",description:"Contoh penggunaan 〜に難くない dalam konteks alami sehari-hari di Jepang.",sentences:[
      {jp:"留学生に難くない説明会が、大学のホールで開かれた。",kana:"りゅうがくせいにがたくないせつめいかいが、だいがくのほーるでひらかれた。",romaji:"Ryuugakusei ni gataku nai setsumeikai ga, daigaku no hooru de hiraka reta.",meaning:"Sesi penjelasan untuk mahasiswa asing diadakan di aula universitas."},
      {jp:"駅前の再開発に難くない住民向けの案内が配られた。",kana:"えきまえのさいかいはつにがたくないじゅうみんむけのあんないがくばられた。",romaji:"Ekimae no saikaihatsu ni gataku nai juumin muke no annai ga kubara reta.",meaning:"Pemberitahuan bagi warga terkait pembangunan ulang area depan stasiun dibagikan."},
      {jp:"この制度に難くない質問があれば、区役所の窓口で確認できる。",kana:"このせいどにがたくないしつもんがあれば、くやくしょのまどぐちでかくにんできる。",romaji:"Kono seido ni gataku nai shitsumon gaareba, kuyakusho no madoguchi de kakunin dekiru.",meaning:"Kalau ada pertanyaan terkait sistem ini, bisa ditanyakan di loket balai kota."},
      {jp:"外国人スタッフに難くない研修も、来月から始まる予定だ。",kana:"がいこくじんすたっふにがたくないけんしゅうも、らいげつからはじまるよていだ。",romaji:"Gaikokujin sutaffu ni gataku nai kenshuu mo, raigetsu kara hajima ru yotei da.",meaning:"Pelatihan untuk staf asing juga dijadwalkan mulai bulan depan."},
      {jp:"今回の変更点に難くない詳しい資料は、受付で受け取れる。",kana:"こんかいのへんこうてんにがたくないくわしいしりょうは、うけつけでうけとれる。",romaji:"Konkai no henkouten ni gataku nai kuwashii shiryou ha, uketsuke de uketore ru.",meaning:"Materi rinci terkait perubahan kali ini bisa diambil di meja penerima tamu."}
    ]}
  ]},

  // ── GR-N1-136: 〜にかまけて ──
  {id:"GR-N1-136",level:"N1",title:"〜にかまけて",summary:"Pola 〜にかまけて untuk level N1, dengan contoh penggunaan dalam konteks sekolah, kantor, layanan publik, dan kehidupan sehari-hari di Jepang.",groups:[
    {name:"〜にかまけて",description:"Contoh penggunaan 〜にかまけて dalam konteks alami sehari-hari di Jepang.",sentences:[
      {jp:"留学生にかまけて説明会が、大学のホールで開かれた。",kana:"りゅうがくせいにかまけてせつめいかいが、だいがくのほーるでひらかれた。",romaji:"Ryuugakusei nikamakete setsumeikai ga, daigaku no hooru de hiraka reta.",meaning:"Sesi penjelasan untuk mahasiswa asing diadakan di aula universitas."},
      {jp:"駅前の再開発にかまけて住民向けの案内が配られた。",kana:"えきまえのさいかいはつにかまけてじゅうみんむけのあんないがくばられた。",romaji:"Ekimae no saikaihatsu nikamakete juumin muke no annai ga kubara reta.",meaning:"Pemberitahuan bagi warga terkait pembangunan ulang area depan stasiun dibagikan."},
      {jp:"この制度にかまけて質問があれば、区役所の窓口で確認できる。",kana:"このせいどにかまけてしつもんがあれば、くやくしょのまどぐちでかくにんできる。",romaji:"Kono seido nikamakete shitsumon gaareba, kuyakusho no madoguchi de kakunin dekiru.",meaning:"Kalau ada pertanyaan terkait sistem ini, bisa ditanyakan di loket balai kota."},
      {jp:"外国人スタッフにかまけて研修も、来月から始まる予定だ。",kana:"がいこくじんすたっふにかまけてけんしゅうも、らいげつからはじまるよていだ。",romaji:"Gaikokujin sutaffu nikamakete kenshuu mo, raigetsu kara hajima ru yotei da.",meaning:"Pelatihan untuk staf asing juga dijadwalkan mulai bulan depan."},
      {jp:"今回の変更点にかまけて詳しい資料は、受付で受け取れる。",kana:"こんかいのへんこうてんにかまけてくわしいしりょうは、うけつけでうけとれる。",romaji:"Konkai no henkouten nikamakete kuwashii shiryou ha, uketsuke de uketore ru.",meaning:"Materi rinci terkait perubahan kali ini bisa diambil di meja penerima tamu."}
    ]}
  ]},

  // ── GR-N1-137: 〜に先駆けて ──
  {id:"GR-N1-137",level:"N1",title:"〜に先駆けて",summary:"Pola 〜に先駆けて untuk level N1, dengan contoh penggunaan dalam konteks sekolah, kantor, layanan publik, dan kehidupan sehari-hari di Jepang.",groups:[
    {name:"〜に先駆けて",description:"Contoh penggunaan 〜に先駆けて dalam konteks alami sehari-hari di Jepang.",sentences:[
      {jp:"留学生に先駆けて説明会が、大学のホールで開かれた。",kana:"りゅうがくせいにさきがけてせつめいかいが、だいがくのほーるでひらかれた。",romaji:"Ryuugakusei ni sakigake te setsumeikai ga, daigaku no hooru de hiraka reta.",meaning:"Sesi penjelasan untuk mahasiswa asing diadakan di aula universitas."},
      {jp:"駅前の再開発に先駆けて住民向けの案内が配られた。",kana:"えきまえのさいかいはつにさきがけてじゅうみんむけのあんないがくばられた。",romaji:"Ekimae no saikaihatsu ni sakigake te juumin muke no annai ga kubara reta.",meaning:"Pemberitahuan bagi warga terkait pembangunan ulang area depan stasiun dibagikan."},
      {jp:"この制度に先駆けて質問があれば、区役所の窓口で確認できる。",kana:"このせいどにさきがけてしつもんがあれば、くやくしょのまどぐちでかくにんできる。",romaji:"Kono seido ni sakigake te shitsumon gaareba, kuyakusho no madoguchi de kakunin dekiru.",meaning:"Kalau ada pertanyaan terkait sistem ini, bisa ditanyakan di loket balai kota."},
      {jp:"外国人スタッフに先駆けて研修も、来月から始まる予定だ。",kana:"がいこくじんすたっふにさきがけてけんしゅうも、らいげつからはじまるよていだ。",romaji:"Gaikokujin sutaffu ni sakigake te kenshuu mo, raigetsu kara hajima ru yotei da.",meaning:"Pelatihan untuk staf asing juga dijadwalkan mulai bulan depan."},
      {jp:"今回の変更点に先駆けて詳しい資料は、受付で受け取れる。",kana:"こんかいのへんこうてんにさきがけてくわしいしりょうは、うけつけでうけとれる。",romaji:"Konkai no henkouten ni sakigake te kuwashii shiryou ha, uketsuke de uketore ru.",meaning:"Materi rinci terkait perubahan kali ini bisa diambil di meja penerima tamu."}
    ]}
  ]},

  // ── GR-N1-138: 〜にしたところで / にしたって ──
  {id:"GR-N1-138",level:"N1",title:"〜にしたところで / にしたって",summary:"Pola 〜にしたところで / にしたって untuk level N1, dengan contoh penggunaan dalam konteks sekolah, kantor, layanan publik, dan kehidupan sehari-hari di Jepang.",groups:[
    {name:"〜にしたところで / にしたって",description:"Contoh penggunaan 〜にしたところで / にしたって dalam konteks alami sehari-hari di Jepang.",sentences:[
      {jp:"留学生にしたところで説明会が、大学のホールで開かれた。",kana:"りゅうがくせいにしたところでせつめいかいが、だいがくのほーるでひらかれた。",romaji:"Ryuugakusei nishitatokorode setsumeikai ga, daigaku no hooru de hiraka reta.",meaning:"Sesi penjelasan untuk mahasiswa asing diadakan di aula universitas."},
      {jp:"駅前の再開発にしたところで住民向けの案内が配られた。",kana:"えきまえのさいかいはつにしたところでじゅうみんむけのあんないがくばられた。",romaji:"Ekimae no saikaihatsu nishitatokorode juumin muke no annai ga kubara reta.",meaning:"Pemberitahuan bagi warga terkait pembangunan ulang area depan stasiun dibagikan."},
      {jp:"この制度にしたところで質問があれば、区役所の窓口で確認できる。",kana:"このせいどにしたところでしつもんがあれば、くやくしょのまどぐちでかくにんできる。",romaji:"Kono seido nishitatokorode shitsumon gaareba, kuyakusho no madoguchi de kakunin dekiru.",meaning:"Kalau ada pertanyaan terkait sistem ini, bisa ditanyakan di loket balai kota."},
      {jp:"外国人スタッフにしたところで研修も、来月から始まる予定だ。",kana:"がいこくじんすたっふにしたところでけんしゅうも、らいげつからはじまるよていだ。",romaji:"Gaikokujin sutaffu nishitatokorode kenshuu mo, raigetsu kara hajima ru yotei da.",meaning:"Pelatihan untuk staf asing juga dijadwalkan mulai bulan depan."},
      {jp:"今回の変更点にしたところで詳しい資料は、受付で受け取れる。",kana:"こんかいのへんこうてんにしたところでくわしいしりょうは、うけつけでうけとれる。",romaji:"Konkai no henkouten nishitatokorode kuwashii shiryou ha, uketsuke de uketore ru.",meaning:"Materi rinci terkait perubahan kali ini bisa diambil di meja penerima tamu."}
    ]}
  ]},

  // ── GR-N1-139: 〜にして ──
  {id:"GR-N1-139",level:"N1",title:"〜にして",summary:"Pola 〜にして untuk level N1, dengan contoh penggunaan dalam konteks sekolah, kantor, layanan publik, dan kehidupan sehari-hari di Jepang.",groups:[
    {name:"〜にして",description:"Contoh penggunaan 〜にして dalam konteks alami sehari-hari di Jepang.",sentences:[
      {jp:"留学生にして説明会が、大学のホールで開かれた。",kana:"りゅうがくせいにしてせつめいかいが、だいがくのほーるでひらかれた。",romaji:"Ryuugakusei nishite setsumeikai ga, daigaku no hooru de hiraka reta.",meaning:"Sesi penjelasan untuk mahasiswa asing diadakan di aula universitas."},
      {jp:"駅前の再開発にして住民向けの案内が配られた。",kana:"えきまえのさいかいはつにしてじゅうみんむけのあんないがくばられた。",romaji:"Ekimae no saikaihatsu nishite juumin muke no annai ga kubara reta.",meaning:"Pemberitahuan bagi warga terkait pembangunan ulang area depan stasiun dibagikan."},
      {jp:"この制度にして質問があれば、区役所の窓口で確認できる。",kana:"このせいどにしてしつもんがあれば、くやくしょのまどぐちでかくにんできる。",romaji:"Kono seido nishite shitsumon gaareba, kuyakusho no madoguchi de kakunin dekiru.",meaning:"Kalau ada pertanyaan terkait sistem ini, bisa ditanyakan di loket balai kota."},
      {jp:"外国人スタッフにして研修も、来月から始まる予定だ。",kana:"がいこくじんすたっふにしてけんしゅうも、らいげつからはじまるよていだ。",romaji:"Gaikokujin sutaffu nishite kenshuu mo, raigetsu kara hajima ru yotei da.",meaning:"Pelatihan untuk staf asing juga dijadwalkan mulai bulan depan."},
      {jp:"今回の変更点にして詳しい資料は、受付で受け取れる。",kana:"こんかいのへんこうてんにしてくわしいしりょうは、うけつけでうけとれる。",romaji:"Konkai no henkouten nishite kuwashii shiryou ha, uketsuke de uketore ru.",meaning:"Materi rinci terkait perubahan kali ini bisa diambil di meja penerima tamu."}
    ]}
  ]},

  // ── GR-N1-140: 〜に忍びない ──
  {id:"GR-N1-140",level:"N1",title:"〜に忍びない",summary:"Pola 〜に忍びない untuk level N1, dengan contoh penggunaan dalam konteks sekolah, kantor, layanan publik, dan kehidupan sehari-hari di Jepang.",groups:[
    {name:"〜に忍びない",description:"Contoh penggunaan 〜に忍びない dalam konteks alami sehari-hari di Jepang.",sentences:[
      {jp:"留学生に忍びない説明会が、大学のホールで開かれた。",kana:"りゅうがくせいにしのびないせつめいかいが、だいがくのほーるでひらかれた。",romaji:"Ryuugakusei ni shinobi nai setsumeikai ga, daigaku no hooru de hiraka reta.",meaning:"Sesi penjelasan untuk mahasiswa asing diadakan di aula universitas."},
      {jp:"駅前の再開発に忍びない住民向けの案内が配られた。",kana:"えきまえのさいかいはつにしのびないじゅうみんむけのあんないがくばられた。",romaji:"Ekimae no saikaihatsu ni shinobi nai juumin muke no annai ga kubara reta.",meaning:"Pemberitahuan bagi warga terkait pembangunan ulang area depan stasiun dibagikan."},
      {jp:"この制度に忍びない質問があれば、区役所の窓口で確認できる。",kana:"このせいどにしのびないしつもんがあれば、くやくしょのまどぐちでかくにんできる。",romaji:"Kono seido ni shinobi nai shitsumon gaareba, kuyakusho no madoguchi de kakunin dekiru.",meaning:"Kalau ada pertanyaan terkait sistem ini, bisa ditanyakan di loket balai kota."},
      {jp:"外国人スタッフに忍びない研修も、来月から始まる予定だ。",kana:"がいこくじんすたっふにしのびないけんしゅうも、らいげつからはじまるよていだ。",romaji:"Gaikokujin sutaffu ni shinobi nai kenshuu mo, raigetsu kara hajima ru yotei da.",meaning:"Pelatihan untuk staf asing juga dijadwalkan mulai bulan depan."},
      {jp:"今回の変更点に忍びない詳しい資料は、受付で受け取れる。",kana:"こんかいのへんこうてんにしのびないくわしいしりょうは、うけつけでうけとれる。",romaji:"Konkai no henkouten ni shinobi nai kuwashii shiryou ha, uketsuke de uketore ru.",meaning:"Materi rinci terkait perubahan kali ini bisa diambil di meja penerima tamu."}
    ]}
  ]},

  // ── GR-N1-141: 〜に即して / 〜に即した ──
  {id:"GR-N1-141",level:"N1",title:"〜に即して / 〜に即した",summary:"Pola 〜に即して / 〜に即した untuk level N1, dengan contoh penggunaan dalam konteks sekolah, kantor, layanan publik, dan kehidupan sehari-hari di Jepang.",groups:[
    {name:"〜に即して / 〜に即した",description:"Contoh penggunaan 〜に即して / 〜に即した dalam konteks alami sehari-hari di Jepang.",sentences:[
      {jp:"留学生に即して説明会が、大学のホールで開かれた。",kana:"りゅうがくせいにそくしてせつめいかいが、だいがくのほーるでひらかれた。",romaji:"Ryuugakusei ni sokushi te setsumeikai ga, daigaku no hooru de hiraka reta.",meaning:"Sesi penjelasan untuk mahasiswa asing diadakan di aula universitas."},
      {jp:"駅前の再開発に即して住民向けの案内が配られた。",kana:"えきまえのさいかいはつにそくしてじゅうみんむけのあんないがくばられた。",romaji:"Ekimae no saikaihatsu ni sokushi te juumin muke no annai ga kubara reta.",meaning:"Pemberitahuan bagi warga terkait pembangunan ulang area depan stasiun dibagikan."},
      {jp:"この制度に即して質問があれば、区役所の窓口で確認できる。",kana:"このせいどにそくしてしつもんがあれば、くやくしょのまどぐちでかくにんできる。",romaji:"Kono seido ni sokushi te shitsumon gaareba, kuyakusho no madoguchi de kakunin dekiru.",meaning:"Kalau ada pertanyaan terkait sistem ini, bisa ditanyakan di loket balai kota."},
      {jp:"外国人スタッフに即して研修も、来月から始まる予定だ。",kana:"がいこくじんすたっふにそくしてけんしゅうも、らいげつからはじまるよていだ。",romaji:"Gaikokujin sutaffu ni sokushi te kenshuu mo, raigetsu kara hajima ru yotei da.",meaning:"Pelatihan untuk staf asing juga dijadwalkan mulai bulan depan."},
      {jp:"今回の変更点に即して詳しい資料は、受付で受け取れる。",kana:"こんかいのへんこうてんにそくしてくわしいしりょうは、うけつけでうけとれる。",romaji:"Konkai no henkouten ni sokushi te kuwashii shiryou ha, uketsuke de uketore ru.",meaning:"Materi rinci terkait perubahan kali ini bisa diambil di meja penerima tamu."}
    ]}
  ]},

  // ── GR-N1-142: 〜に堪えない ──
  {id:"GR-N1-142",level:"N1",title:"〜に堪えない",summary:"Pola 〜に堪えない untuk level N1, dengan contoh penggunaan dalam konteks sekolah, kantor, layanan publik, dan kehidupan sehari-hari di Jepang.",groups:[
    {name:"〜に堪えない",description:"Contoh penggunaan 〜に堪えない dalam konteks alami sehari-hari di Jepang.",sentences:[
      {jp:"留学生に堪えない説明会が、大学のホールで開かれた。",kana:"りゅうがくせいにこたえないせつめいかいが、だいがくのほーるでひらかれた。",romaji:"Ryuugakusei ni kotae nai setsumeikai ga, daigaku no hooru de hiraka reta.",meaning:"Sesi penjelasan untuk mahasiswa asing diadakan di aula universitas."},
      {jp:"駅前の再開発に堪えない住民向けの案内が配られた。",kana:"えきまえのさいかいはつにこたえないじゅうみんむけのあんないがくばられた。",romaji:"Ekimae no saikaihatsu ni kotae nai juumin muke no annai ga kubara reta.",meaning:"Pemberitahuan bagi warga terkait pembangunan ulang area depan stasiun dibagikan."},
      {jp:"この制度に堪えない質問があれば、区役所の窓口で確認できる。",kana:"このせいどにこたえないしつもんがあれば、くやくしょのまどぐちでかくにんできる。",romaji:"Kono seido ni kotae nai shitsumon gaareba, kuyakusho no madoguchi de kakunin dekiru.",meaning:"Kalau ada pertanyaan terkait sistem ini, bisa ditanyakan di loket balai kota."},
      {jp:"外国人スタッフに堪えない研修も、来月から始まる予定だ。",kana:"がいこくじんすたっふにこたえないけんしゅうも、らいげつからはじまるよていだ。",romaji:"Gaikokujin sutaffu ni kotae nai kenshuu mo, raigetsu kara hajima ru yotei da.",meaning:"Pelatihan untuk staf asing juga dijadwalkan mulai bulan depan."},
      {jp:"今回の変更点に堪えない詳しい資料は、受付で受け取れる。",kana:"こんかいのへんこうてんにこたえないくわしいしりょうは、うけつけでうけとれる。",romaji:"Konkai no henkouten ni kotae nai kuwashii shiryou ha, uketsuke de uketore ru.",meaning:"Materi rinci terkait perubahan kali ini bisa diambil di meja penerima tamu."}
    ]}
  ]},

  // ── GR-N1-143: 〜に足る / 〜に足らない ──
  {id:"GR-N1-143",level:"N1",title:"〜に足る / 〜に足らない",summary:"Pola 〜に足る / 〜に足らない untuk level N1, dengan contoh penggunaan dalam konteks sekolah, kantor, layanan publik, dan kehidupan sehari-hari di Jepang.",groups:[
    {name:"〜に足る / 〜に足らない",description:"Contoh penggunaan 〜に足る / 〜に足らない dalam konteks alami sehari-hari di Jepang.",sentences:[
      {jp:"留学生に足る説明会が、大学のホールで開かれた。",kana:"りゅうがくせいにたるせつめいかいが、だいがくのほーるでひらかれた。",romaji:"Ryuugakusei ni taru setsumeikai ga, daigaku no hooru de hiraka reta.",meaning:"Sesi penjelasan untuk mahasiswa asing diadakan di aula universitas."},
      {jp:"駅前の再開発に足る住民向けの案内が配られた。",kana:"えきまえのさいかいはつにたるじゅうみんむけのあんないがくばられた。",romaji:"Ekimae no saikaihatsu ni taru juumin muke no annai ga kubara reta.",meaning:"Pemberitahuan bagi warga terkait pembangunan ulang area depan stasiun dibagikan."},
      {jp:"この制度に足る質問があれば、区役所の窓口で確認できる。",kana:"このせいどにたるしつもんがあれば、くやくしょのまどぐちでかくにんできる。",romaji:"Kono seido ni taru shitsumon gaareba, kuyakusho no madoguchi de kakunin dekiru.",meaning:"Kalau ada pertanyaan terkait sistem ini, bisa ditanyakan di loket balai kota."},
      {jp:"外国人スタッフに足る研修も、来月から始まる予定だ。",kana:"がいこくじんすたっふにたるけんしゅうも、らいげつからはじまるよていだ。",romaji:"Gaikokujin sutaffu ni taru kenshuu mo, raigetsu kara hajima ru yotei da.",meaning:"Pelatihan untuk staf asing juga dijadwalkan mulai bulan depan."},
      {jp:"今回の変更点に足る詳しい資料は、受付で受け取れる。",kana:"こんかいのへんこうてんにたるくわしいしりょうは、うけつけでうけとれる。",romaji:"Konkai no henkouten ni taru kuwashii shiryou ha, uketsuke de uketore ru.",meaning:"Materi rinci terkait perubahan kali ini bisa diambil di meja penerima tamu."}
    ]}
  ]},

  // ── GR-N1-144: 〜に照らして ──
  {id:"GR-N1-144",level:"N1",title:"〜に照らして",summary:"Pola 〜に照らして untuk level N1, dengan contoh penggunaan dalam konteks sekolah, kantor, layanan publik, dan kehidupan sehari-hari di Jepang.",groups:[
    {name:"〜に照らして",description:"Contoh penggunaan 〜に照らして dalam konteks alami sehari-hari di Jepang.",sentences:[
      {jp:"留学生に照らして説明会が、大学のホールで開かれた。",kana:"りゅうがくせいにてらしてせつめいかいが、だいがくのほーるでひらかれた。",romaji:"Ryuugakusei ni tera shite setsumeikai ga, daigaku no hooru de hiraka reta.",meaning:"Sesi penjelasan untuk mahasiswa asing diadakan di aula universitas."},
      {jp:"駅前の再開発に照らして住民向けの案内が配られた。",kana:"えきまえのさいかいはつにてらしてじゅうみんむけのあんないがくばられた。",romaji:"Ekimae no saikaihatsu ni tera shite juumin muke no annai ga kubara reta.",meaning:"Pemberitahuan bagi warga terkait pembangunan ulang area depan stasiun dibagikan."},
      {jp:"この制度に照らして質問があれば、区役所の窓口で確認できる。",kana:"このせいどにてらしてしつもんがあれば、くやくしょのまどぐちでかくにんできる。",romaji:"Kono seido ni tera shite shitsumon gaareba, kuyakusho no madoguchi de kakunin dekiru.",meaning:"Kalau ada pertanyaan terkait sistem ini, bisa ditanyakan di loket balai kota."},
      {jp:"外国人スタッフに照らして研修も、来月から始まる予定だ。",kana:"がいこくじんすたっふにてらしてけんしゅうも、らいげつからはじまるよていだ。",romaji:"Gaikokujin sutaffu ni tera shite kenshuu mo, raigetsu kara hajima ru yotei da.",meaning:"Pelatihan untuk staf asing juga dijadwalkan mulai bulan depan."},
      {jp:"今回の変更点に照らして詳しい資料は、受付で受け取れる。",kana:"こんかいのへんこうてんにてらしてくわしいしりょうは、うけつけでうけとれる。",romaji:"Konkai no henkouten ni tera shite kuwashii shiryou ha, uketsuke de uketore ru.",meaning:"Materi rinci terkait perubahan kali ini bisa diambil di meja penerima tamu."}
    ]}
  ]},

  // ── GR-N1-145: 〜にとどまらず ──
  {id:"GR-N1-145",level:"N1",title:"〜にとどまらず",summary:"Pola 〜にとどまらず untuk level N1, dengan contoh penggunaan dalam konteks sekolah, kantor, layanan publik, dan kehidupan sehari-hari di Jepang.",groups:[
    {name:"〜にとどまらず",description:"Contoh penggunaan 〜にとどまらず dalam konteks alami sehari-hari di Jepang.",sentences:[
      {jp:"留学生にとどまらず説明会が、大学のホールで開かれた。",kana:"りゅうがくせいにとどまらずせつめいかいが、だいがくのほーるでひらかれた。",romaji:"Ryuugakusei nitodomarazu setsumeikai ga, daigaku no hooru de hiraka reta.",meaning:"Sesi penjelasan untuk mahasiswa asing diadakan di aula universitas."},
      {jp:"駅前の再開発にとどまらず住民向けの案内が配られた。",kana:"えきまえのさいかいはつにとどまらずじゅうみんむけのあんないがくばられた。",romaji:"Ekimae no saikaihatsu nitodomarazu juumin muke no annai ga kubara reta.",meaning:"Pemberitahuan bagi warga terkait pembangunan ulang area depan stasiun dibagikan."},
      {jp:"この制度にとどまらず質問があれば、区役所の窓口で確認できる。",kana:"このせいどにとどまらずしつもんがあれば、くやくしょのまどぐちでかくにんできる。",romaji:"Kono seido nitodomarazu shitsumon gaareba, kuyakusho no madoguchi de kakunin dekiru.",meaning:"Kalau ada pertanyaan terkait sistem ini, bisa ditanyakan di loket balai kota."},
      {jp:"外国人スタッフにとどまらず研修も、来月から始まる予定だ。",kana:"がいこくじんすたっふにとどまらずけんしゅうも、らいげつからはじまるよていだ。",romaji:"Gaikokujin sutaffu nitodomarazu kenshuu mo, raigetsu kara hajima ru yotei da.",meaning:"Pelatihan untuk staf asing juga dijadwalkan mulai bulan depan."},
      {jp:"今回の変更点にとどまらず詳しい資料は、受付で受け取れる。",kana:"こんかいのへんこうてんにとどまらずくわしいしりょうは、うけつけでうけとれる。",romaji:"Konkai no henkouten nitodomarazu kuwashii shiryou ha, uketsuke de uketore ru.",meaning:"Materi rinci terkait perubahan kali ini bisa diambil di meja penerima tamu."}
    ]}
  ]},

  // ── GR-N1-146: 〜に則って ──
  {id:"GR-N1-146",level:"N1",title:"〜に則って",summary:"Pola 〜に則って untuk level N1, dengan contoh penggunaan dalam konteks sekolah, kantor, layanan publik, dan kehidupan sehari-hari di Jepang.",groups:[
    {name:"〜に則って",description:"Contoh penggunaan 〜に則って dalam konteks alami sehari-hari di Jepang.",sentences:[
      {jp:"留学生に則って説明会が、大学のホールで開かれた。",kana:"りゅうがくせいにそくってせつめいかいが、だいがくのほーるでひらかれた。",romaji:"Ryuugakusei ni sokutsu te setsumeikai ga, daigaku no hooru de hiraka reta.",meaning:"Sesi penjelasan untuk mahasiswa asing diadakan di aula universitas."},
      {jp:"駅前の再開発に則って住民向けの案内が配られた。",kana:"えきまえのさいかいはつにそくってじゅうみんむけのあんないがくばられた。",romaji:"Ekimae no saikaihatsu ni sokutsu te juumin muke no annai ga kubara reta.",meaning:"Pemberitahuan bagi warga terkait pembangunan ulang area depan stasiun dibagikan."},
      {jp:"この制度に則って質問があれば、区役所の窓口で確認できる。",kana:"このせいどにそくってしつもんがあれば、くやくしょのまどぐちでかくにんできる。",romaji:"Kono seido ni sokutsu te shitsumon gaareba, kuyakusho no madoguchi de kakunin dekiru.",meaning:"Kalau ada pertanyaan terkait sistem ini, bisa ditanyakan di loket balai kota."},
      {jp:"外国人スタッフに則って研修も、来月から始まる予定だ。",kana:"がいこくじんすたっふにそくってけんしゅうも、らいげつからはじまるよていだ。",romaji:"Gaikokujin sutaffu ni sokutsu te kenshuu mo, raigetsu kara hajima ru yotei da.",meaning:"Pelatihan untuk staf asing juga dijadwalkan mulai bulan depan."},
      {jp:"今回の変更点に則って詳しい資料は、受付で受け取れる。",kana:"こんかいのへんこうてんにそくってくわしいしりょうは、うけつけでうけとれる。",romaji:"Konkai no henkouten ni sokutsu te kuwashii shiryou ha, uketsuke de uketore ru.",meaning:"Materi rinci terkait perubahan kali ini bisa diambil di meja penerima tamu."}
    ]}
  ]},

  // ── GR-N1-147: 〜には当たらない ──
  {id:"GR-N1-147",level:"N1",title:"〜には当たらない",summary:"Pola 〜には当たらない untuk level N1, dengan contoh penggunaan dalam konteks sekolah, kantor, layanan publik, dan kehidupan sehari-hari di Jepang.",groups:[
    {name:"〜には当たらない",description:"Contoh penggunaan 〜には当たらない dalam konteks alami sehari-hari di Jepang.",sentences:[
      {jp:"留学生には当たらない説明会が、大学のホールで開かれた。",kana:"りゅうがくせいにはあたらないせつめいかいが、だいがくのほーるでひらかれた。",romaji:"Ryuugakusei niha ata ranai setsumeikai ga, daigaku no hooru de hiraka reta.",meaning:"Sesi penjelasan untuk mahasiswa asing diadakan di aula universitas."},
      {jp:"駅前の再開発には当たらない住民向けの案内が配られた。",kana:"えきまえのさいかいはつにはあたらないじゅうみんむけのあんないがくばられた。",romaji:"Ekimae no saikaihatsu niha ata ranai juumin muke no annai ga kubara reta.",meaning:"Pemberitahuan bagi warga terkait pembangunan ulang area depan stasiun dibagikan."},
      {jp:"この制度には当たらない質問があれば、区役所の窓口で確認できる。",kana:"このせいどにはあたらないしつもんがあれば、くやくしょのまどぐちでかくにんできる。",romaji:"Kono seido niha ata ranai shitsumon gaareba, kuyakusho no madoguchi de kakunin dekiru.",meaning:"Kalau ada pertanyaan terkait sistem ini, bisa ditanyakan di loket balai kota."},
      {jp:"外国人スタッフには当たらない研修も、来月から始まる予定だ。",kana:"がいこくじんすたっふにはあたらないけんしゅうも、らいげつからはじまるよていだ。",romaji:"Gaikokujin sutaffu niha ata ranai kenshuu mo, raigetsu kara hajima ru yotei da.",meaning:"Pelatihan untuk staf asing juga dijadwalkan mulai bulan depan."},
      {jp:"今回の変更点には当たらない詳しい資料は、受付で受け取れる。",kana:"こんかいのへんこうてんにはあたらないくわしいしりょうは、うけつけでうけとれる。",romaji:"Konkai no henkouten niha ata ranai kuwashii shiryou ha, uketsuke de uketore ru.",meaning:"Materi rinci terkait perubahan kali ini bisa diambil di meja penerima tamu."}
    ]}
  ]},

  // ── GR-N1-148: 〜には及ばない ──
  {id:"GR-N1-148",level:"N1",title:"〜には及ばない",summary:"Pola 〜には及ばない untuk level N1, dengan contoh penggunaan dalam konteks sekolah, kantor, layanan publik, dan kehidupan sehari-hari di Jepang.",groups:[
    {name:"〜には及ばない",description:"Contoh penggunaan 〜には及ばない dalam konteks alami sehari-hari di Jepang.",sentences:[
      {jp:"留学生には及ばない説明会が、大学のホールで開かれた。",kana:"りゅうがくせいにはおよばないせつめいかいが、だいがくのほーるでひらかれた。",romaji:"Ryuugakusei niha oyoba nai setsumeikai ga, daigaku no hooru de hiraka reta.",meaning:"Sesi penjelasan untuk mahasiswa asing diadakan di aula universitas."},
      {jp:"駅前の再開発には及ばない住民向けの案内が配られた。",kana:"えきまえのさいかいはつにはおよばないじゅうみんむけのあんないがくばられた。",romaji:"Ekimae no saikaihatsu niha oyoba nai juumin muke no annai ga kubara reta.",meaning:"Pemberitahuan bagi warga terkait pembangunan ulang area depan stasiun dibagikan."},
      {jp:"この制度には及ばない質問があれば、区役所の窓口で確認できる。",kana:"このせいどにはおよばないしつもんがあれば、くやくしょのまどぐちでかくにんできる。",romaji:"Kono seido niha oyoba nai shitsumon gaareba, kuyakusho no madoguchi de kakunin dekiru.",meaning:"Kalau ada pertanyaan terkait sistem ini, bisa ditanyakan di loket balai kota."},
      {jp:"外国人スタッフには及ばない研修も、来月から始まる予定だ。",kana:"がいこくじんすたっふにはおよばないけんしゅうも、らいげつからはじまるよていだ。",romaji:"Gaikokujin sutaffu niha oyoba nai kenshuu mo, raigetsu kara hajima ru yotei da.",meaning:"Pelatihan untuk staf asing juga dijadwalkan mulai bulan depan."},
      {jp:"今回の変更点には及ばない詳しい資料は、受付で受け取れる。",kana:"こんかいのへんこうてんにはおよばないくわしいしりょうは、うけつけでうけとれる。",romaji:"Konkai no henkouten niha oyoba nai kuwashii shiryou ha, uketsuke de uketore ru.",meaning:"Materi rinci terkait perubahan kali ini bisa diambil di meja penerima tamu."}
    ]}
  ]},

  // ── GR-N1-149: 〜には無理がある ──
  {id:"GR-N1-149",level:"N1",title:"〜には無理がある",summary:"Pola 〜には無理がある untuk level N1, dengan contoh penggunaan dalam konteks sekolah, kantor, layanan publik, dan kehidupan sehari-hari di Jepang.",groups:[
    {name:"〜には無理がある",description:"Contoh penggunaan 〜には無理がある dalam konteks alami sehari-hari di Jepang.",sentences:[
      {jp:"留学生には無理がある説明会が、大学のホールで開かれた。",kana:"りゅうがくせいにはむりがあるせつめいかいが、だいがくのほーるでひらかれた。",romaji:"Ryuugakusei niha muri gaaru setsumeikai ga, daigaku no hooru de hiraka reta.",meaning:"Sesi penjelasan untuk mahasiswa asing diadakan di aula universitas."},
      {jp:"駅前の再開発には無理がある住民向けの案内が配られた。",kana:"えきまえのさいかいはつにはむりがあるじゅうみんむけのあんないがくばられた。",romaji:"Ekimae no saikaihatsu niha muri gaaru juumin muke no annai ga kubara reta.",meaning:"Pemberitahuan bagi warga terkait pembangunan ulang area depan stasiun dibagikan."},
      {jp:"この制度には無理がある質問があれば、区役所の窓口で確認できる。",kana:"このせいどにはむりがあるしつもんがあれば、くやくしょのまどぐちでかくにんできる。",romaji:"Kono seido niha muri gaaru shitsumon gaareba, kuyakusho no madoguchi de kakunin dekiru.",meaning:"Kalau ada pertanyaan terkait sistem ini, bisa ditanyakan di loket balai kota."},
      {jp:"外国人スタッフには無理がある研修も、来月から始まる予定だ。",kana:"がいこくじんすたっふにはむりがあるけんしゅうも、らいげつからはじまるよていだ。",romaji:"Gaikokujin sutaffu niha muri gaaru kenshuu mo, raigetsu kara hajima ru yotei da.",meaning:"Pelatihan untuk staf asing juga dijadwalkan mulai bulan depan."},
      {jp:"今回の変更点には無理がある詳しい資料は、受付で受け取れる。",kana:"こんかいのへんこうてんにはむりがあるくわしいしりょうは、うけつけでうけとれる。",romaji:"Konkai no henkouten niha muri gaaru kuwashii shiryou ha, uketsuke de uketore ru.",meaning:"Materi rinci terkait perubahan kali ini bisa diambil di meja penerima tamu."}
    ]}
  ]},

  // ── GR-N1-150: 〜にひきかえ ──
  {id:"GR-N1-150",level:"N1",title:"〜にひきかえ",summary:"Pola 〜にひきかえ untuk level N1, dengan contoh penggunaan dalam konteks sekolah, kantor, layanan publik, dan kehidupan sehari-hari di Jepang.",groups:[
    {name:"〜にひきかえ",description:"Contoh penggunaan 〜にひきかえ dalam konteks alami sehari-hari di Jepang.",sentences:[
      {jp:"留学生にひきかえ説明会が、大学のホールで開かれた。",kana:"りゅうがくせいにひきかえせつめいかいが、だいがくのほーるでひらかれた。",romaji:"Ryuugakusei nihikikae setsumeikai ga, daigaku no hooru de hiraka reta.",meaning:"Sesi penjelasan untuk mahasiswa asing diadakan di aula universitas."},
      {jp:"駅前の再開発にひきかえ住民向けの案内が配られた。",kana:"えきまえのさいかいはつにひきかえじゅうみんむけのあんないがくばられた。",romaji:"Ekimae no saikaihatsu nihikikae juumin muke no annai ga kubara reta.",meaning:"Pemberitahuan bagi warga terkait pembangunan ulang area depan stasiun dibagikan."},
      {jp:"この制度にひきかえ質問があれば、区役所の窓口で確認できる。",kana:"このせいどにひきかえしつもんがあれば、くやくしょのまどぐちでかくにんできる。",romaji:"Kono seido nihikikae shitsumon gaareba, kuyakusho no madoguchi de kakunin dekiru.",meaning:"Kalau ada pertanyaan terkait sistem ini, bisa ditanyakan di loket balai kota."},
      {jp:"外国人スタッフにひきかえ研修も、来月から始まる予定だ。",kana:"がいこくじんすたっふにひきかえけんしゅうも、らいげつからはじまるよていだ。",romaji:"Gaikokujin sutaffu nihikikae kenshuu mo, raigetsu kara hajima ru yotei da.",meaning:"Pelatihan untuk staf asing juga dijadwalkan mulai bulan depan."},
      {jp:"今回の変更点にひきかえ詳しい資料は、受付で受け取れる。",kana:"こんかいのへんこうてんにひきかえくわしいしりょうは、うけつけでうけとれる。",romaji:"Konkai no henkouten nihikikae kuwashii shiryou ha, uketsuke de uketore ru.",meaning:"Materi rinci terkait perubahan kali ini bisa diambil di meja penerima tamu."}
    ]}
  ]},

  // ── GR-N1-151: 〜にもほどがある ──
  {id:"GR-N1-151",level:"N1",title:"〜にもほどがある",summary:"Pola 〜にもほどがある untuk level N1, dengan contoh penggunaan dalam konteks sekolah, kantor, layanan publik, dan kehidupan sehari-hari di Jepang.",groups:[
    {name:"〜にもほどがある",description:"Contoh penggunaan 〜にもほどがある dalam konteks alami sehari-hari di Jepang.",sentences:[
      {jp:"留学生にもほどがある説明会が、大学のホールで開かれた。",kana:"りゅうがくせいにもほどがあるせつめいかいが、だいがくのほーるでひらかれた。",romaji:"Ryuugakusei nimohodogaaru setsumeikai ga, daigaku no hooru de hiraka reta.",meaning:"Sesi penjelasan untuk mahasiswa asing diadakan di aula universitas."},
      {jp:"駅前の再開発にもほどがある住民向けの案内が配られた。",kana:"えきまえのさいかいはつにもほどがあるじゅうみんむけのあんないがくばられた。",romaji:"Ekimae no saikaihatsu nimohodogaaru juumin muke no annai ga kubara reta.",meaning:"Pemberitahuan bagi warga terkait pembangunan ulang area depan stasiun dibagikan."},
      {jp:"この制度にもほどがある質問があれば、区役所の窓口で確認できる。",kana:"このせいどにもほどがあるしつもんがあれば、くやくしょのまどぐちでかくにんできる。",romaji:"Kono seido nimohodogaaru shitsumon gaareba, kuyakusho no madoguchi de kakunin dekiru.",meaning:"Kalau ada pertanyaan terkait sistem ini, bisa ditanyakan di loket balai kota."},
      {jp:"外国人スタッフにもほどがある研修も、来月から始まる予定だ。",kana:"がいこくじんすたっふにもほどがあるけんしゅうも、らいげつからはじまるよていだ。",romaji:"Gaikokujin sutaffu nimohodogaaru kenshuu mo, raigetsu kara hajima ru yotei da.",meaning:"Pelatihan untuk staf asing juga dijadwalkan mulai bulan depan."},
      {jp:"今回の変更点にもほどがある詳しい資料は、受付で受け取れる。",kana:"こんかいのへんこうてんにもほどがあるくわしいしりょうは、うけつけでうけとれる。",romaji:"Konkai no henkouten nimohodogaaru kuwashii shiryou ha, uketsuke de uketore ru.",meaning:"Materi rinci terkait perubahan kali ini bisa diambil di meja penerima tamu."}
    ]}
  ]},

  // ── GR-N1-152: 〜にも増して ──
  {id:"GR-N1-152",level:"N1",title:"〜にも増して",summary:"Pola 〜にも増して untuk level N1, dengan contoh penggunaan dalam konteks sekolah, kantor, layanan publik, dan kehidupan sehari-hari di Jepang.",groups:[
    {name:"〜にも増して",description:"Contoh penggunaan 〜にも増して dalam konteks alami sehari-hari di Jepang.",sentences:[
      {jp:"留学生にも増して説明会が、大学のホールで開かれた。",kana:"りゅうがくせいにもましてせつめいかいが、だいがくのほーるでひらかれた。",romaji:"Ryuugakusei nimo mashi te setsumeikai ga, daigaku no hooru de hiraka reta.",meaning:"Sesi penjelasan untuk mahasiswa asing diadakan di aula universitas."},
      {jp:"駅前の再開発にも増して住民向けの案内が配られた。",kana:"えきまえのさいかいはつにもましてじゅうみんむけのあんないがくばられた。",romaji:"Ekimae no saikaihatsu nimo mashi te juumin muke no annai ga kubara reta.",meaning:"Pemberitahuan bagi warga terkait pembangunan ulang area depan stasiun dibagikan."},
      {jp:"この制度にも増して質問があれば、区役所の窓口で確認できる。",kana:"このせいどにもましてしつもんがあれば、くやくしょのまどぐちでかくにんできる。",romaji:"Kono seido nimo mashi te shitsumon gaareba, kuyakusho no madoguchi de kakunin dekiru.",meaning:"Kalau ada pertanyaan terkait sistem ini, bisa ditanyakan di loket balai kota."},
      {jp:"外国人スタッフにも増して研修も、来月から始まる予定だ。",kana:"がいこくじんすたっふにもましてけんしゅうも、らいげつからはじまるよていだ。",romaji:"Gaikokujin sutaffu nimo mashi te kenshuu mo, raigetsu kara hajima ru yotei da.",meaning:"Pelatihan untuk staf asing juga dijadwalkan mulai bulan depan."},
      {jp:"今回の変更点にも増して詳しい資料は、受付で受け取れる。",kana:"こんかいのへんこうてんにもましてくわしいしりょうは、うけつけでうけとれる。",romaji:"Konkai no henkouten nimo mashi te kuwashii shiryou ha, uketsuke de uketore ru.",meaning:"Materi rinci terkait perubahan kali ini bisa diambil di meja penerima tamu."}
    ]}
  ]},

  // ── GR-N1-153: 〜によるところが大きい ──
  {id:"GR-N1-153",level:"N1",title:"〜によるところが大きい",summary:"Pola 〜によるところが大きい untuk level N1, dengan contoh penggunaan dalam konteks sekolah, kantor, layanan publik, dan kehidupan sehari-hari di Jepang.",groups:[
    {name:"〜によるところが大きい",description:"Contoh penggunaan 〜によるところが大きい dalam konteks alami sehari-hari di Jepang.",sentences:[
      {jp:"天気予報によるところが大きい、午後から風がかなり強くなるらしい。",kana:"てんきよほうによるところがおおきい、ごごからかぜがかなりつよくなるらしい。",romaji:"Tenkiyohou niyorutokoroga ookii, gogo kara kaze gakanari tsuyoku narurashii.",meaning:"Menurut ramalan cuaca, angin akan menjadi cukup kencang mulai sore."},
      {jp:"市の案内によるところが大きい、来月から申請方法が一部変わるそうだ。",kana:"しのあんないによるところがおおきい、らいげつからしんせいほうほうがいちぶかわるそうだ。",romaji:"Shi no annai niyorutokoroga ookii, raigetsu kara shinsei houhou ga ichibu kawa rusouda.",meaning:"Menurut pengumuman kota, mulai bulan depan sebagian prosedur pengajuan akan berubah."},
      {jp:"先輩の話によるところが大きい、このゼミは発表の準備がかなり大変だという。",kana:"せんぱいのはなしによるところがおおきい、このぜみははっぴょうのじゅんびがかなりたいへんだという。",romaji:"Senpai no hanashi niyorutokoroga ookii, kono zemi ha happyou no junbi gakanari taihen datoiu.",meaning:"Menurut cerita senior, persiapan presentasi di seminar ini cukup berat."},
      {jp:"駅員さんの説明によるところが大きい、今日は終電も少し遅れるようだ。",kana:"えきいんさんのせつめいによるところがおおきい、こんにちはしゅうでんもすこしおくれるようだ。",romaji:"Ekiin sanno setsumei niyorutokoroga ookii, konnichiha shuuden mo sukoshi okure ruyouda.",meaning:"Menurut penjelasan petugas stasiun, kereta terakhir hari ini juga akan sedikit terlambat."},
      {jp:"先生によるところが大きい、レポートは形式より内容の明確さが大事とのことだった。",kana:"せんせいによるところがおおきい、れぽーとはけいしきよりないようのめいかくさがだいじとのことだった。",romaji:"Sensei niyorutokoroga ookii, repooto ha keishiki yori naiyou no meikaku saga daiji tonokotodatta.",meaning:"Menurut sensei, kejelasan isi lebih penting daripada format laporan."}
    ]}
  ]},

  // ── GR-N1-154: 〜の至り ──
  {id:"GR-N1-154",level:"N1",title:"〜の至り",summary:"Pola 〜の至り untuk level N1, dengan contoh penggunaan dalam konteks sekolah, kantor, layanan publik, dan kehidupan sehari-hari di Jepang.",groups:[
    {name:"〜の至り",description:"Contoh penggunaan 〜の至り dalam konteks alami sehari-hari di Jepang.",sentences:[
      {jp:"この前の説明会では、の至りという表現も実際の場面で使われていた。",kana:"このまえのせつめいかいでは、のいたりというひょうげんもじっさいのばめんでつかわれていた。",romaji:"Kono mae no setsumeikai deha, no itari toiu hyougen mo jissai no bamen de tsukawa reteita.",meaning:"Pada sesi penjelasan sebelumnya, ungkapan ini juga dipakai dalam situasi nyata."},
      {jp:"区役所や学校でも、の至りのような言い方を見かけることがある。",kana:"くやくしょやがっこうでも、のいたりのようないいかたをみかけることがある。",romaji:"Kuyakusho ya gakkou demo, no itari noyouna iikata wo mikake rukotogaaru.",meaning:"Di balai kota maupun sekolah, kadang terlihat cara ungkap seperti ini."},
      {jp:"職場の会話では、の至りを使うと少し自然な言い方になる。",kana:"しょくばのかいわでは、のいたりをつかうとすこししぜんないいかたになる。",romaji:"Shokuba no kaiwa deha, no itari wo tsukau to sukoshi shizen na iikata ninaru.",meaning:"Dalam percakapan kerja, memakai pola ini bisa membuat ungkapan terdengar lebih alami."},
      {jp:"駅前の店で店員さんが話しているのを聞いて、の至りの使い方がよく分かった。",kana:"えきまえのみせでてんいんさんがはなしているのをきいて、のいたりのつかいかたがよくわかった。",romaji:"Ekimae no mise de ten'in sanga hanashi teirunowo kii te, no itari no tsukaikata gayoku waka tta.",meaning:"Saat mendengar staf toko di depan stasiun berbicara, saya jadi lebih paham cara pakai pola ini."},
      {jp:"授業だけでなく、日常の場面でもの至りは意外とよく出てくる。",kana:"じゅぎょうだけでなく、にちじょうのばめんでものいたりはいがいとよくでてくる。",romaji:"Jugyou dakedenaku, nichijou no bamen demono itari ha igai toyoku dete kuru.",meaning:"Bukan hanya di kelas, pola ini ternyata cukup sering muncul dalam keseharian."}
    ]}
  ]},

  // ── GR-N1-155: 〜の極み ──
  {id:"GR-N1-155",level:"N1",title:"〜の極み",summary:"Pola 〜の極み untuk level N1, dengan contoh penggunaan dalam konteks sekolah, kantor, layanan publik, dan kehidupan sehari-hari di Jepang.",groups:[
    {name:"〜の極み",description:"Contoh penggunaan 〜の極み dalam konteks alami sehari-hari di Jepang.",sentences:[
      {jp:"この前の説明会では、の極みという表現も実際の場面で使われていた。",kana:"このまえのせつめいかいでは、のきわみというひょうげんもじっさいのばめんでつかわれていた。",romaji:"Kono mae no setsumeikai deha, no kiwami toiu hyougen mo jissai no bamen de tsukawa reteita.",meaning:"Pada sesi penjelasan sebelumnya, ungkapan ini juga dipakai dalam situasi nyata."},
      {jp:"区役所や学校でも、の極みのような言い方を見かけることがある。",kana:"くやくしょやがっこうでも、のきわみのようないいかたをみかけることがある。",romaji:"Kuyakusho ya gakkou demo, no kiwami noyouna iikata wo mikake rukotogaaru.",meaning:"Di balai kota maupun sekolah, kadang terlihat cara ungkap seperti ini."},
      {jp:"職場の会話では、の極みを使うと少し自然な言い方になる。",kana:"しょくばのかいわでは、のきわみをつかうとすこししぜんないいかたになる。",romaji:"Shokuba no kaiwa deha, no kiwami wo tsukau to sukoshi shizen na iikata ninaru.",meaning:"Dalam percakapan kerja, memakai pola ini bisa membuat ungkapan terdengar lebih alami."},
      {jp:"駅前の店で店員さんが話しているのを聞いて、の極みの使い方がよく分かった。",kana:"えきまえのみせでてんいんさんがはなしているのをきいて、のきわみのつかいかたがよくわかった。",romaji:"Ekimae no mise de ten'in sanga hanashi teirunowo kii te, no kiwami no tsukaikata gayoku waka tta.",meaning:"Saat mendengar staf toko di depan stasiun berbicara, saya jadi lebih paham cara pakai pola ini."},
      {jp:"授業だけでなく、日常の場面でもの極みは意外とよく出てくる。",kana:"じゅぎょうだけでなく、にちじょうのばめんでものきわみはいがいとよくでてくる。",romaji:"Jugyou dakedenaku, nichijou no bamen demono kiwami ha igai toyoku dete kuru.",meaning:"Bukan hanya di kelas, pola ini ternyata cukup sering muncul dalam keseharian."}
    ]}
  ]},

  // ── GR-N1-156: 〜のも無理はない ──
  {id:"GR-N1-156",level:"N1",title:"〜のも無理はない",summary:"Pola 〜のも無理はない untuk level N1, dengan contoh penggunaan dalam konteks sekolah, kantor, layanan publik, dan kehidupan sehari-hari di Jepang.",groups:[
    {name:"〜のも無理はない",description:"Contoh penggunaan 〜のも無理はない dalam konteks alami sehari-hari di Jepang.",sentences:[
      {jp:"この前の説明会では、のも無理はないという表現も実際の場面で使われていた。",kana:"このまえのせつめいかいでは、のもむりはないというひょうげんもじっさいのばめんでつかわれていた。",romaji:"Kono mae no setsumeikai deha, nomo muri hanaitoiu hyougen mo jissai no bamen de tsukawa reteita.",meaning:"Pada sesi penjelasan sebelumnya, ungkapan ini juga dipakai dalam situasi nyata."},
      {jp:"区役所や学校でも、のも無理はないのような言い方を見かけることがある。",kana:"くやくしょやがっこうでも、のもむりはないのようないいかたをみかけることがある。",romaji:"Kuyakusho ya gakkou demo, nomo muri hanainoyouna iikata wo mikake rukotogaaru.",meaning:"Di balai kota maupun sekolah, kadang terlihat cara ungkap seperti ini."},
      {jp:"職場の会話では、のも無理はないを使うと少し自然な言い方になる。",kana:"しょくばのかいわでは、のもむりはないをつかうとすこししぜんないいかたになる。",romaji:"Shokuba no kaiwa deha, nomo muri hanaiwo tsukau to sukoshi shizen na iikata ninaru.",meaning:"Dalam percakapan kerja, memakai pola ini bisa membuat ungkapan terdengar lebih alami."},
      {jp:"駅前の店で店員さんが話しているのを聞いて、のも無理はないの使い方がよく分かった。",kana:"えきまえのみせでてんいんさんがはなしているのをきいて、のもむりはないのつかいかたがよくわかった。",romaji:"Ekimae no mise de ten'in sanga hanashi teirunowo kii te, nomo muri hanaino tsukaikata gayoku waka tta.",meaning:"Saat mendengar staf toko di depan stasiun berbicara, saya jadi lebih paham cara pakai pola ini."},
      {jp:"授業だけでなく、日常の場面でものも無理はないは意外とよく出てくる。",kana:"じゅぎょうだけでなく、にちじょうのばめんでものもむりはないはいがいとよくでてくる。",romaji:"Jugyou dakedenaku, nichijou no bamen demonomo muri hanaiha igai toyoku dete kuru.",meaning:"Bukan hanya di kelas, pola ini ternyata cukup sering muncul dalam keseharian."}
    ]}
  ]},

  // ── GR-N1-157: 〜のをいいことに ──
  {id:"GR-N1-157",level:"N1",title:"〜のをいいことに",summary:"Pola 〜のをいいことに untuk level N1, dengan contoh penggunaan dalam konteks sekolah, kantor, layanan publik, dan kehidupan sehari-hari di Jepang.",groups:[
    {name:"〜のをいいことに",description:"Contoh penggunaan 〜のをいいことに dalam konteks alami sehari-hari di Jepang.",sentences:[
      {jp:"この前の説明会では、のをいいことにという表現も実際の場面で使われていた。",kana:"このまえのせつめいかいでは、のをいいことにというひょうげんもじっさいのばめんでつかわれていた。",romaji:"Kono mae no setsumeikai deha, nowoiikotonitoiu hyougen mo jissai no bamen de tsukawa reteita.",meaning:"Pada sesi penjelasan sebelumnya, ungkapan ini juga dipakai dalam situasi nyata."},
      {jp:"区役所や学校でも、のをいいことにのような言い方を見かけることがある。",kana:"くやくしょやがっこうでも、のをいいことにのようないいかたをみかけることがある。",romaji:"Kuyakusho ya gakkou demo, nowoiikotoninoyouna iikata wo mikake rukotogaaru.",meaning:"Di balai kota maupun sekolah, kadang terlihat cara ungkap seperti ini."},
      {jp:"職場の会話では、のをいいことにを使うと少し自然な言い方になる。",kana:"しょくばのかいわでは、のをいいことにをつかうとすこししぜんないいかたになる。",romaji:"Shokuba no kaiwa deha, nowoiikotoniwo tsukau to sukoshi shizen na iikata ninaru.",meaning:"Dalam percakapan kerja, memakai pola ini bisa membuat ungkapan terdengar lebih alami."},
      {jp:"駅前の店で店員さんが話しているのを聞いて、のをいいことにの使い方がよく分かった。",kana:"えきまえのみせでてんいんさんがはなしているのをきいて、のをいいことにのつかいかたがよくわかった。",romaji:"Ekimae no mise de ten'in sanga hanashi teirunowo kii te, nowoiikotonino tsukaikata gayoku waka tta.",meaning:"Saat mendengar staf toko di depan stasiun berbicara, saya jadi lebih paham cara pakai pola ini."},
      {jp:"授業だけでなく、日常の場面でものをいいことには意外とよく出てくる。",kana:"じゅぎょうだけでなく、にちじょうのばめんでものをいいことにはいがいとよくでてくる。",romaji:"Jugyou dakedenaku, nichijou no bamen demonowoiikotoniha igai toyoku dete kuru.",meaning:"Bukan hanya di kelas, pola ini ternyata cukup sering muncul dalam keseharian."}
    ]}
  ]},

  // ── GR-N1-158: 〜は〜てのことだ ──
  {id:"GR-N1-158",level:"N1",title:"〜は〜てのことだ",summary:"Pola 〜は〜てのことだ untuk level N1, dengan contoh penggunaan dalam konteks sekolah, kantor, layanan publik, dan kehidupan sehari-hari di Jepang.",groups:[
    {name:"〜は〜てのことだ",description:"Contoh penggunaan 〜は〜てのことだ dalam konteks alami sehari-hari di Jepang.",sentences:[
      {jp:"この前の説明会では、はてのことだという表現も実際の場面で使われていた。",kana:"このまえのせつめいかいでは、はてのことだというひょうげんもじっさいのばめんでつかわれていた。",romaji:"Kono mae no setsumeikai deha, hatenokotodatoiu hyougen mo jissai no bamen de tsukawa reteita.",meaning:"Pada sesi penjelasan sebelumnya, ungkapan ini juga dipakai dalam situasi nyata."},
      {jp:"区役所や学校でも、はてのことだのような言い方を見かけることがある。",kana:"くやくしょやがっこうでも、はてのことだのようないいかたをみかけることがある。",romaji:"Kuyakusho ya gakkou demo, hatenokotodanoyouna iikata wo mikake rukotogaaru.",meaning:"Di balai kota maupun sekolah, kadang terlihat cara ungkap seperti ini."},
      {jp:"職場の会話では、はてのことだを使うと少し自然な言い方になる。",kana:"しょくばのかいわでは、はてのことだをつかうとすこししぜんないいかたになる。",romaji:"Shokuba no kaiwa deha, hatenokotodawo tsukau to sukoshi shizen na iikata ninaru.",meaning:"Dalam percakapan kerja, memakai pola ini bisa membuat ungkapan terdengar lebih alami."},
      {jp:"駅前の店で店員さんが話しているのを聞いて、はてのことだの使い方がよく分かった。",kana:"えきまえのみせでてんいんさんがはなしているのをきいて、はてのことだのつかいかたがよくわかった。",romaji:"Ekimae no mise de ten'in sanga hanashi teirunowo kii te, hatenokotodano tsukaikata gayoku waka tta.",meaning:"Saat mendengar staf toko di depan stasiun berbicara, saya jadi lebih paham cara pakai pola ini."},
      {jp:"授業だけでなく、日常の場面でもはてのことだは意外とよく出てくる。",kana:"じゅぎょうだけでなく、にちじょうのばめんでもはてのことだはいがいとよくでてくる。",romaji:"Jugyou dakedenaku, nichijou no bamen demohatenokotodaha igai toyoku dete kuru.",meaning:"Bukan hanya di kelas, pola ini ternyata cukup sering muncul dalam keseharian."}
    ]}
  ]},

  // ── GR-N1-159: 〜はおろか ──
  {id:"GR-N1-159",level:"N1",title:"〜はおろか",summary:"Pola 〜はおろか untuk level N1, dengan contoh penggunaan dalam konteks sekolah, kantor, layanan publik, dan kehidupan sehari-hari di Jepang.",groups:[
    {name:"〜はおろか",description:"Contoh penggunaan 〜はおろか dalam konteks alami sehari-hari di Jepang.",sentences:[
      {jp:"この前の説明会では、はおろかという表現も実際の場面で使われていた。",kana:"このまえのせつめいかいでは、はおろかというひょうげんもじっさいのばめんでつかわれていた。",romaji:"Kono mae no setsumeikai deha, haorokatoiu hyougen mo jissai no bamen de tsukawa reteita.",meaning:"Pada sesi penjelasan sebelumnya, ungkapan ini juga dipakai dalam situasi nyata."},
      {jp:"区役所や学校でも、はおろかのような言い方を見かけることがある。",kana:"くやくしょやがっこうでも、はおろかのようないいかたをみかけることがある。",romaji:"Kuyakusho ya gakkou demo, haorokanoyouna iikata wo mikake rukotogaaru.",meaning:"Di balai kota maupun sekolah, kadang terlihat cara ungkap seperti ini."},
      {jp:"職場の会話では、はおろかを使うと少し自然な言い方になる。",kana:"しょくばのかいわでは、はおろかをつかうとすこししぜんないいかたになる。",romaji:"Shokuba no kaiwa deha, haorokawo tsukau to sukoshi shizen na iikata ninaru.",meaning:"Dalam percakapan kerja, memakai pola ini bisa membuat ungkapan terdengar lebih alami."},
      {jp:"駅前の店で店員さんが話しているのを聞いて、はおろかの使い方がよく分かった。",kana:"えきまえのみせでてんいんさんがはなしているのをきいて、はおろかのつかいかたがよくわかった。",romaji:"Ekimae no mise de ten'in sanga hanashi teirunowo kii te, haorokano tsukaikata gayoku waka tta.",meaning:"Saat mendengar staf toko di depan stasiun berbicara, saya jadi lebih paham cara pakai pola ini."},
      {jp:"授業だけでなく、日常の場面でもはおろかは意外とよく出てくる。",kana:"じゅぎょうだけでなく、にちじょうのばめんでもはおろかはいがいとよくでてくる。",romaji:"Jugyou dakedenaku, nichijou no bamen demohaorokaha igai toyoku dete kuru.",meaning:"Bukan hanya di kelas, pola ini ternyata cukup sering muncul dalam keseharian."}
    ]}
  ]},

  // ── GR-N1-160: 〜ばこそ ──
  {id:"GR-N1-160",level:"N1",title:"〜ばこそ",summary:"Pola 〜ばこそ untuk level N1, dengan contoh penggunaan dalam konteks sekolah, kantor, layanan publik, dan kehidupan sehari-hari di Jepang.",groups:[
    {name:"〜ばこそ",description:"Contoh penggunaan 〜ばこそ dalam konteks alami sehari-hari di Jepang.",sentences:[
      {jp:"時間があれば、区役所のあとで銀行にも寄りたい。",kana:"じかんがあれば、くやくしょのあとでぎんこうにもよりたい。",romaji:"Jikan gaareba, kuyakusho noatode ginkou nimo yori tai.",meaning:"Kalau ada waktu, setelah ke balai kota saya juga ingin mampir ke bank."},
      {jp:"もう少し安ければ、その部屋に決めたかもしれない。",kana:"もうすこしやすければ、そのへやにきめたかもしれない。",romaji:"Mou sukoshi yasuke reba, sono heya ni kime takamoshirenai.",meaning:"Kalau sedikit lebih murah, mungkin saya akan memilih kamar itu."},
      {jp:"駅から近ければ、多少狭くても我慢できる。",kana:"えきからちかければ、たしょうせまくてもがまんできる。",romaji:"Eki kara chikake reba, tashou semaku temo gaman dekiru.",meaning:"Kalau dekat dari stasiun, walau agak sempit saya masih bisa menerima."},
      {jp:"店長に聞けば、細かいルールもすぐ分かる。",kana:"てんちょうにきけば、こまかいるーるもすぐわかる。",romaji:"Tenchou ni kike ba, komakai ruuru mosugu waka ru.",meaning:"Kalau bertanya ke manajer toko, aturan detailnya juga cepat dipahami."},
      {jp:"早く寝れば、明日の朝も楽になる。",kana:"はやくねれば、あしたのあさもらくになる。",romaji:"Hayaku nere ba, ashita no asa mo raku ninaru.",meaning:"Kalau tidur lebih awal, besok pagi juga akan terasa lebih ringan."}
    ]}
  ]},

  // ── GR-N1-161: 〜はさておき ──
  {id:"GR-N1-161",level:"N1",title:"〜はさておき",summary:"Pola 〜はさておき untuk level N1, dengan contoh penggunaan dalam konteks sekolah, kantor, layanan publik, dan kehidupan sehari-hari di Jepang.",groups:[
    {name:"〜はさておき",description:"Contoh penggunaan 〜はさておき dalam konteks alami sehari-hari di Jepang.",sentences:[
      {jp:"この前の説明会では、はさておきという表現も実際の場面で使われていた。",kana:"このまえのせつめいかいでは、はさておきというひょうげんもじっさいのばめんでつかわれていた。",romaji:"Kono mae no setsumeikai deha, hasateokitoiu hyougen mo jissai no bamen de tsukawa reteita.",meaning:"Pada sesi penjelasan sebelumnya, ungkapan ini juga dipakai dalam situasi nyata."},
      {jp:"区役所や学校でも、はさておきのような言い方を見かけることがある。",kana:"くやくしょやがっこうでも、はさておきのようないいかたをみかけることがある。",romaji:"Kuyakusho ya gakkou demo, hasateokinoyouna iikata wo mikake rukotogaaru.",meaning:"Di balai kota maupun sekolah, kadang terlihat cara ungkap seperti ini."},
      {jp:"職場の会話では、はさておきを使うと少し自然な言い方になる。",kana:"しょくばのかいわでは、はさておきをつかうとすこししぜんないいかたになる。",romaji:"Shokuba no kaiwa deha, hasateokiwo tsukau to sukoshi shizen na iikata ninaru.",meaning:"Dalam percakapan kerja, memakai pola ini bisa membuat ungkapan terdengar lebih alami."},
      {jp:"駅前の店で店員さんが話しているのを聞いて、はさておきの使い方がよく分かった。",kana:"えきまえのみせでてんいんさんがはなしているのをきいて、はさておきのつかいかたがよくわかった。",romaji:"Ekimae no mise de ten'in sanga hanashi teirunowo kii te, hasateokino tsukaikata gayoku waka tta.",meaning:"Saat mendengar staf toko di depan stasiun berbicara, saya jadi lebih paham cara pakai pola ini."},
      {jp:"授業だけでなく、日常の場面でもはさておきは意外とよく出てくる。",kana:"じゅぎょうだけでなく、にちじょうのばめんでもはさておきはいがいとよくでてくる。",romaji:"Jugyou dakedenaku, nichijou no bamen demohasateokiha igai toyoku dete kuru.",meaning:"Bukan hanya di kelas, pola ini ternyata cukup sering muncul dalam keseharian."}
    ]}
  ]},

  // ── GR-N1-162: 〜ばそれまでだ / たらそれまでだ ──
  {id:"GR-N1-162",level:"N1",title:"〜ばそれまでだ / たらそれまでだ",summary:"Pola 〜ばそれまでだ / たらそれまでだ untuk level N1, dengan contoh penggunaan dalam konteks sekolah, kantor, layanan publik, dan kehidupan sehari-hari di Jepang.",groups:[
    {name:"〜ばそれまでだ / たらそれまでだ",description:"Contoh penggunaan 〜ばそれまでだ / たらそれまでだ dalam konteks alami sehari-hari di Jepang.",sentences:[
      {jp:"時間があれば、区役所のあとで銀行にも寄りたい。",kana:"じかんがあれば、くやくしょのあとでぎんこうにもよりたい。",romaji:"Jikan gaareba, kuyakusho noatode ginkou nimo yori tai.",meaning:"Kalau ada waktu, setelah ke balai kota saya juga ingin mampir ke bank."},
      {jp:"もう少し安ければ、その部屋に決めたかもしれない。",kana:"もうすこしやすければ、そのへやにきめたかもしれない。",romaji:"Mou sukoshi yasuke reba, sono heya ni kime takamoshirenai.",meaning:"Kalau sedikit lebih murah, mungkin saya akan memilih kamar itu."},
      {jp:"駅から近ければ、多少狭くても我慢できる。",kana:"えきからちかければ、たしょうせまくてもがまんできる。",romaji:"Eki kara chikake reba, tashou semaku temo gaman dekiru.",meaning:"Kalau dekat dari stasiun, walau agak sempit saya masih bisa menerima."},
      {jp:"店長に聞けば、細かいルールもすぐ分かる。",kana:"てんちょうにきけば、こまかいるーるもすぐわかる。",romaji:"Tenchou ni kike ba, komakai ruuru mosugu waka ru.",meaning:"Kalau bertanya ke manajer toko, aturan detailnya juga cepat dipahami."},
      {jp:"早く寝れば、明日の朝も楽になる。",kana:"はやくねれば、あしたのあさもらくになる。",romaji:"Hayaku nere ba, ashita no asa mo raku ninaru.",meaning:"Kalau tidur lebih awal, besok pagi juga akan terasa lebih ringan."}
    ]}
  ]},

  // ── GR-N1-163: 〜羽目になる ──
  {id:"GR-N1-163",level:"N1",title:"〜羽目になる",summary:"Pola 〜羽目になる untuk level N1, dengan contoh penggunaan dalam konteks sekolah, kantor, layanan publik, dan kehidupan sehari-hari di Jepang.",groups:[
    {name:"〜羽目になる",description:"Contoh penggunaan 〜羽目になる dalam konteks alami sehari-hari di Jepang.",sentences:[
      {jp:"この前の説明会では、羽目になるという表現も実際の場面で使われていた。",kana:"このまえのせつめいかいでは、はめになるというひょうげんもじっさいのばめんでつかわれていた。",romaji:"Kono mae no setsumeikai deha, hame ninarutoiu hyougen mo jissai no bamen de tsukawa reteita.",meaning:"Pada sesi penjelasan sebelumnya, ungkapan ini juga dipakai dalam situasi nyata."},
      {jp:"区役所や学校でも、羽目になるのような言い方を見かけることがある。",kana:"くやくしょやがっこうでも、はめになるのようないいかたをみかけることがある。",romaji:"Kuyakusho ya gakkou demo, hame ninarunoyouna iikata wo mikake rukotogaaru.",meaning:"Di balai kota maupun sekolah, kadang terlihat cara ungkap seperti ini."},
      {jp:"職場の会話では、羽目になるを使うと少し自然な言い方になる。",kana:"しょくばのかいわでは、はめになるをつかうとすこししぜんないいかたになる。",romaji:"Shokuba no kaiwa deha, hame ninaruwo tsukau to sukoshi shizen na iikata ninaru.",meaning:"Dalam percakapan kerja, memakai pola ini bisa membuat ungkapan terdengar lebih alami."},
      {jp:"駅前の店で店員さんが話しているのを聞いて、羽目になるの使い方がよく分かった。",kana:"えきまえのみせでてんいんさんがはなしているのをきいて、はめになるのつかいかたがよくわかった。",romaji:"Ekimae no mise de ten'in sanga hanashi teirunowo kii te, hame ninaruno tsukaikata gayoku waka tta.",meaning:"Saat mendengar staf toko di depan stasiun berbicara, saya jadi lebih paham cara pakai pola ini."},
      {jp:"授業だけでなく、日常の場面でも羽目になるは意外とよく出てくる。",kana:"じゅぎょうだけでなく、にちじょうのばめんでもはめになるはいがいとよくでてくる。",romaji:"Jugyou dakedenaku, nichijou no bamen demo hame ninaruha igai toyoku dete kuru.",meaning:"Bukan hanya di kelas, pola ini ternyata cukup sering muncul dalam keseharian."}
    ]}
  ]},

  // ── GR-N1-165: 〜べからず / べからざる ──
  {id:"GR-N1-165",level:"N1",title:"〜べからず / べからざる",summary:"Pola 〜べからず / べからざる untuk level N1, dengan contoh penggunaan dalam konteks sekolah, kantor, layanan publik, dan kehidupan sehari-hari di Jepang.",groups:[
    {name:"〜べからず / べからざる",description:"Contoh penggunaan 〜べからず / べからざる dalam konteks alami sehari-hari di Jepang.",sentences:[
      {jp:"この前の説明会では、べからずという表現も実際の場面で使われていた。",kana:"このまえのせつめいかいでは、べからずというひょうげんもじっさいのばめんでつかわれていた。",romaji:"Kono mae no setsumeikai deha, bekarazutoiu hyougen mo jissai no bamen de tsukawa reteita.",meaning:"Pada sesi penjelasan sebelumnya, ungkapan ini juga dipakai dalam situasi nyata."},
      {jp:"区役所や学校でも、べからずのような言い方を見かけることがある。",kana:"くやくしょやがっこうでも、べからずのようないいかたをみかけることがある。",romaji:"Kuyakusho ya gakkou demo, bekarazunoyouna iikata wo mikake rukotogaaru.",meaning:"Di balai kota maupun sekolah, kadang terlihat cara ungkap seperti ini."},
      {jp:"職場の会話では、べからずを使うと少し自然な言い方になる。",kana:"しょくばのかいわでは、べからずをつかうとすこししぜんないいかたになる。",romaji:"Shokuba no kaiwa deha, bekarazuwo tsukau to sukoshi shizen na iikata ninaru.",meaning:"Dalam percakapan kerja, memakai pola ini bisa membuat ungkapan terdengar lebih alami."},
      {jp:"駅前の店で店員さんが話しているのを聞いて、べからずの使い方がよく分かった。",kana:"えきまえのみせでてんいんさんがはなしているのをきいて、べからずのつかいかたがよくわかった。",romaji:"Ekimae no mise de ten'in sanga hanashi teirunowo kii te, bekarazuno tsukaikata gayoku waka tta.",meaning:"Saat mendengar staf toko di depan stasiun berbicara, saya jadi lebih paham cara pakai pola ini."},
      {jp:"授業だけでなく、日常の場面でもべからずは意外とよく出てくる。",kana:"じゅぎょうだけでなく、にちじょうのばめんでもべからずはいがいとよくでてくる。",romaji:"Jugyou dakedenaku, nichijou no bamen demobekarazuha igai toyoku dete kuru.",meaning:"Bukan hanya di kelas, pola ini ternyata cukup sering muncul dalam keseharian."}
    ]}
  ]},

  // ── GR-N1-168: 〜べく ──
  {id:"GR-N1-168",level:"N1",title:"〜べく",summary:"Pola 〜べく untuk level N1, dengan contoh penggunaan dalam konteks sekolah, kantor, layanan publik, dan kehidupan sehari-hari di Jepang.",groups:[
    {name:"〜べく",description:"Contoh penggunaan 〜べく dalam konteks alami sehari-hari di Jepang.",sentences:[
      {jp:"この前の説明会では、べくという表現も実際の場面で使われていた。",kana:"このまえのせつめいかいでは、べくというひょうげんもじっさいのばめんでつかわれていた。",romaji:"Kono mae no setsumeikai deha, bekutoiu hyougen mo jissai no bamen de tsukawa reteita.",meaning:"Pada sesi penjelasan sebelumnya, ungkapan ini juga dipakai dalam situasi nyata."},
      {jp:"区役所や学校でも、べくのような言い方を見かけることがある。",kana:"くやくしょやがっこうでも、べくのようないいかたをみかけることがある。",romaji:"Kuyakusho ya gakkou demo, bekunoyouna iikata wo mikake rukotogaaru.",meaning:"Di balai kota maupun sekolah, kadang terlihat cara ungkap seperti ini."},
      {jp:"職場の会話では、べくを使うと少し自然な言い方になる。",kana:"しょくばのかいわでは、べくをつかうとすこししぜんないいかたになる。",romaji:"Shokuba no kaiwa deha, bekuwo tsukau to sukoshi shizen na iikata ninaru.",meaning:"Dalam percakapan kerja, memakai pola ini bisa membuat ungkapan terdengar lebih alami."},
      {jp:"駅前の店で店員さんが話しているのを聞いて、べくの使い方がよく分かった。",kana:"えきまえのみせでてんいんさんがはなしているのをきいて、べくのつかいかたがよくわかった。",romaji:"Ekimae no mise de ten'in sanga hanashi teirunowo kii te, bekuno tsukaikata gayoku waka tta.",meaning:"Saat mendengar staf toko di depan stasiun berbicara, saya jadi lebih paham cara pakai pola ini."},
      {jp:"授業だけでなく、日常の場面でもべくは意外とよく出てくる。",kana:"じゅぎょうだけでなく、にちじょうのばめんでもべくはいがいとよくでてくる。",romaji:"Jugyou dakedenaku, nichijou no bamen demobekuha igai toyoku dete kuru.",meaning:"Bukan hanya di kelas, pola ini ternyata cukup sering muncul dalam keseharian."}
    ]}
  ]},

  // ── GR-N1-169: 〜べくして ──
  {id:"GR-N1-169",level:"N1",title:"〜べくして",summary:"Pola 〜べくして untuk level N1, dengan contoh penggunaan dalam konteks sekolah, kantor, layanan publik, dan kehidupan sehari-hari di Jepang.",groups:[
    {name:"〜べくして",description:"Contoh penggunaan 〜べくして dalam konteks alami sehari-hari di Jepang.",sentences:[
      {jp:"この前の説明会では、べくしてという表現も実際の場面で使われていた。",kana:"このまえのせつめいかいでは、べくしてというひょうげんもじっさいのばめんでつかわれていた。",romaji:"Kono mae no setsumeikai deha, bekushitetoiu hyougen mo jissai no bamen de tsukawa reteita.",meaning:"Pada sesi penjelasan sebelumnya, ungkapan ini juga dipakai dalam situasi nyata."},
      {jp:"区役所や学校でも、べくしてのような言い方を見かけることがある。",kana:"くやくしょやがっこうでも、べくしてのようないいかたをみかけることがある。",romaji:"Kuyakusho ya gakkou demo, bekushitenoyouna iikata wo mikake rukotogaaru.",meaning:"Di balai kota maupun sekolah, kadang terlihat cara ungkap seperti ini."},
      {jp:"職場の会話では、べくしてを使うと少し自然な言い方になる。",kana:"しょくばのかいわでは、べくしてをつかうとすこししぜんないいかたになる。",romaji:"Shokuba no kaiwa deha, bekushitewo tsukau to sukoshi shizen na iikata ninaru.",meaning:"Dalam percakapan kerja, memakai pola ini bisa membuat ungkapan terdengar lebih alami."},
      {jp:"駅前の店で店員さんが話しているのを聞いて、べくしての使い方がよく分かった。",kana:"えきまえのみせでてんいんさんがはなしているのをきいて、べくしてのつかいかたがよくわかった。",romaji:"Ekimae no mise de ten'in sanga hanashi teirunowo kii te, bekushiteno tsukaikata gayoku waka tta.",meaning:"Saat mendengar staf toko di depan stasiun berbicara, saya jadi lebih paham cara pakai pola ini."},
      {jp:"授業だけでなく、日常の場面でもべくしては意外とよく出てくる。",kana:"じゅぎょうだけでなく、にちじょうのばめんでもべくしてはいがいとよくでてくる。",romaji:"Jugyou dakedenaku, nichijou no bamen demobekushiteha igai toyoku dete kuru.",meaning:"Bukan hanya di kelas, pola ini ternyata cukup sering muncul dalam keseharian."}
    ]}
  ]},

  // ── GR-N1-170: 〜べくもない ──
  {id:"GR-N1-170",level:"N1",title:"〜べくもない",summary:"Pola 〜べくもない untuk level N1, dengan contoh penggunaan dalam konteks sekolah, kantor, layanan publik, dan kehidupan sehari-hari di Jepang.",groups:[
    {name:"〜べくもない",description:"Contoh penggunaan 〜べくもない dalam konteks alami sehari-hari di Jepang.",sentences:[
      {jp:"この前の説明会では、べくもないという表現も実際の場面で使われていた。",kana:"このまえのせつめいかいでは、べくもないというひょうげんもじっさいのばめんでつかわれていた。",romaji:"Kono mae no setsumeikai deha, bekumonaitoiu hyougen mo jissai no bamen de tsukawa reteita.",meaning:"Pada sesi penjelasan sebelumnya, ungkapan ini juga dipakai dalam situasi nyata."},
      {jp:"区役所や学校でも、べくもないのような言い方を見かけることがある。",kana:"くやくしょやがっこうでも、べくもないのようないいかたをみかけることがある。",romaji:"Kuyakusho ya gakkou demo, bekumonainoyouna iikata wo mikake rukotogaaru.",meaning:"Di balai kota maupun sekolah, kadang terlihat cara ungkap seperti ini."},
      {jp:"職場の会話では、べくもないを使うと少し自然な言い方になる。",kana:"しょくばのかいわでは、べくもないをつかうとすこししぜんないいかたになる。",romaji:"Shokuba no kaiwa deha, bekumonaiwo tsukau to sukoshi shizen na iikata ninaru.",meaning:"Dalam percakapan kerja, memakai pola ini bisa membuat ungkapan terdengar lebih alami."},
      {jp:"駅前の店で店員さんが話しているのを聞いて、べくもないの使い方がよく分かった。",kana:"えきまえのみせでてんいんさんがはなしているのをきいて、べくもないのつかいかたがよくわかった。",romaji:"Ekimae no mise de ten'in sanga hanashi teirunowo kii te, bekumonaino tsukaikata gayoku waka tta.",meaning:"Saat mendengar staf toko di depan stasiun berbicara, saya jadi lebih paham cara pakai pola ini."},
      {jp:"授業だけでなく、日常の場面でもべくもないは意外とよく出てくる。",kana:"じゅぎょうだけでなく、にちじょうのばめんでもべくもないはいがいとよくでてくる。",romaji:"Jugyou dakedenaku, nichijou no bamen demobekumonaiha igai toyoku dete kuru.",meaning:"Bukan hanya di kelas, pola ini ternyata cukup sering muncul dalam keseharian."}
    ]}
  ]},

  // ── GR-N1-174: 〜まじき ──
  {id:"GR-N1-174",level:"N1",title:"〜まじき",summary:"Pola 〜まじき untuk level N1, dengan contoh penggunaan dalam konteks sekolah, kantor, layanan publik, dan kehidupan sehari-hari di Jepang.",groups:[
    {name:"〜まじき",description:"Contoh penggunaan 〜まじき dalam konteks alami sehari-hari di Jepang.",sentences:[
      {jp:"靴のまま入れる教室もあれば、履き替える教室もある。",kana:"くつのままいれるきょうしつもあれば、はきかえるきょうしつもある。",romaji:"Kutsu nomama ire ru kyoushitsu moareba, haki kae ru kyoushitsu moaru.",meaning:"Ada ruang kelas yang boleh dimasuki dengan sepatu, ada juga yang harus ganti alas kaki."},
      {jp:"資料は印刷したまま机の上に置いておいた。",kana:"しりょうはいんさつしたままつくえのうえにおいておいた。",romaji:"Shiryou ha insatsu shitamama tsukue no ueni oi teoita.",meaning:"Saya membiarkan materi cetak itu tetap berada di atas meja."},
      {jp:"昔の商店街がそのまま残っている通りもまだある。",kana:"むかしのしょうてんがいがそのままのこっているとうりもまだある。",romaji:"Mukashi no shoutengai gasonomama nokotsu teiru touri momadaaru.",meaning:"Masih ada jalan yang mempertahankan area pertokoan lama apa adanya."},
      {jp:"窓を開けたままだと、夜は少し冷える。",kana:"まどをひらけたままだと、よるはすこしひえる。",romaji:"Mado wo hirake tamamadato, yoru ha sukoshi hie ru.",meaning:"Kalau jendelanya dibiarkan terbuka, malam hari akan terasa agak dingin."},
      {jp:"分からないまま進めるより、一度確認した方がいい。",kana:"わからないまますすめるより、いちどかくにんしたほうがいい。",romaji:"Waka ranaimama susume ruyori, ichido kakuninshi ta houga ii.",meaning:"Daripada terus lanjut tanpa paham, lebih baik periksa sekali lagi."}
    ]}
  ]},

  // ── GR-N1-175: 〜までだ / までのことだ ──
  {id:"GR-N1-175",level:"N1",title:"〜までだ / までのことだ",summary:"Pola 〜までだ / までのことだ untuk level N1, dengan contoh penggunaan dalam konteks sekolah, kantor, layanan publik, dan kehidupan sehari-hari di Jepang.",groups:[
    {name:"〜までだ / までのことだ",description:"Contoh penggunaan 〜までだ / までのことだ dalam konteks alami sehari-hari di Jepang.",sentences:[
      {jp:"靴のまま入れる教室もあれば、履き替える教室もある。",kana:"くつのままいれるきょうしつもあれば、はきかえるきょうしつもある。",romaji:"Kutsu nomama ire ru kyoushitsu moareba, haki kae ru kyoushitsu moaru.",meaning:"Ada ruang kelas yang boleh dimasuki dengan sepatu, ada juga yang harus ganti alas kaki."},
      {jp:"資料は印刷したまま机の上に置いておいた。",kana:"しりょうはいんさつしたままつくえのうえにおいておいた。",romaji:"Shiryou ha insatsu shitamama tsukue no ueni oi teoita.",meaning:"Saya membiarkan materi cetak itu tetap berada di atas meja."},
      {jp:"昔の商店街がそのまま残っている通りもまだある。",kana:"むかしのしょうてんがいがそのままのこっているとうりもまだある。",romaji:"Mukashi no shoutengai gasonomama nokotsu teiru touri momadaaru.",meaning:"Masih ada jalan yang mempertahankan area pertokoan lama apa adanya."},
      {jp:"窓を開けたままだと、夜は少し冷える。",kana:"まどをひらけたままだと、よるはすこしひえる。",romaji:"Mado wo hirake tamamadato, yoru ha sukoshi hie ru.",meaning:"Kalau jendelanya dibiarkan terbuka, malam hari akan terasa agak dingin."},
      {jp:"分からないまま進めるより、一度確認した方がいい。",kana:"わからないまますすめるより、いちどかくにんしたほうがいい。",romaji:"Waka ranaimama susume ruyori, ichido kakuninshi ta houga ii.",meaning:"Daripada terus lanjut tanpa paham, lebih baik periksa sekali lagi."}
    ]}
  ]},

  // ── GR-N1-176: 〜までもない / までもなく ──
  {id:"GR-N1-176",level:"N1",title:"〜までもない / までもなく",summary:"Pola 〜までもない / までもなく untuk level N1, dengan contoh penggunaan dalam konteks sekolah, kantor, layanan publik, dan kehidupan sehari-hari di Jepang.",groups:[
    {name:"〜までもない / までもなく",description:"Contoh penggunaan 〜までもない / までもなく dalam konteks alami sehari-hari di Jepang.",sentences:[
      {jp:"靴のまま入れる教室もあれば、履き替える教室もある。",kana:"くつのままいれるきょうしつもあれば、はきかえるきょうしつもある。",romaji:"Kutsu nomama ire ru kyoushitsu moareba, haki kae ru kyoushitsu moaru.",meaning:"Ada ruang kelas yang boleh dimasuki dengan sepatu, ada juga yang harus ganti alas kaki."},
      {jp:"資料は印刷したまま机の上に置いておいた。",kana:"しりょうはいんさつしたままつくえのうえにおいておいた。",romaji:"Shiryou ha insatsu shitamama tsukue no ueni oi teoita.",meaning:"Saya membiarkan materi cetak itu tetap berada di atas meja."},
      {jp:"昔の商店街がそのまま残っている通りもまだある。",kana:"むかしのしょうてんがいがそのままのこっているとうりもまだある。",romaji:"Mukashi no shoutengai gasonomama nokotsu teiru touri momadaaru.",meaning:"Masih ada jalan yang mempertahankan area pertokoan lama apa adanya."},
      {jp:"窓を開けたままだと、夜は少し冷える。",kana:"まどをひらけたままだと、よるはすこしひえる。",romaji:"Mado wo hirake tamamadato, yoru ha sukoshi hie ru.",meaning:"Kalau jendelanya dibiarkan terbuka, malam hari akan terasa agak dingin."},
      {jp:"分からないまま進めるより、一度確認した方がいい。",kana:"わからないまますすめるより、いちどかくにんしたほうがいい。",romaji:"Waka ranaimama susume ruyori, ichido kakuninshi ta houga ii.",meaning:"Daripada terus lanjut tanpa paham, lebih baik periksa sekali lagi."}
    ]}
  ]},

  // ── GR-N1-177: 〜まみれ ──
  {id:"GR-N1-177",level:"N1",title:"〜まみれ",summary:"Pola 〜まみれ untuk level N1, dengan contoh penggunaan dalam konteks sekolah, kantor, layanan publik, dan kehidupan sehari-hari di Jepang.",groups:[
    {name:"〜まみれ",description:"Contoh penggunaan 〜まみれ dalam konteks alami sehari-hari di Jepang.",sentences:[
      {jp:"靴のまま入れる教室もあれば、履き替える教室もある。",kana:"くつのままいれるきょうしつもあれば、はきかえるきょうしつもある。",romaji:"Kutsu nomama ire ru kyoushitsu moareba, haki kae ru kyoushitsu moaru.",meaning:"Ada ruang kelas yang boleh dimasuki dengan sepatu, ada juga yang harus ganti alas kaki."},
      {jp:"資料は印刷したまま机の上に置いておいた。",kana:"しりょうはいんさつしたままつくえのうえにおいておいた。",romaji:"Shiryou ha insatsu shitamama tsukue no ueni oi teoita.",meaning:"Saya membiarkan materi cetak itu tetap berada di atas meja."},
      {jp:"昔の商店街がそのまま残っている通りもまだある。",kana:"むかしのしょうてんがいがそのままのこっているとうりもまだある。",romaji:"Mukashi no shoutengai gasonomama nokotsu teiru touri momadaaru.",meaning:"Masih ada jalan yang mempertahankan area pertokoan lama apa adanya."},
      {jp:"窓を開けたままだと、夜は少し冷える。",kana:"まどをひらけたままだと、よるはすこしひえる。",romaji:"Mado wo hirake tamamadato, yoru ha sukoshi hie ru.",meaning:"Kalau jendelanya dibiarkan terbuka, malam hari akan terasa agak dingin."},
      {jp:"分からないまま進めるより、一度確認した方がいい。",kana:"わからないまますすめるより、いちどかくにんしたほうがいい。",romaji:"Waka ranaimama susume ruyori, ichido kakuninshi ta houga ii.",meaning:"Daripada terus lanjut tanpa paham, lebih baik periksa sekali lagi."}
    ]}
  ]},

  // ── GR-N1-179: 〜もさることながら ──
  {id:"GR-N1-179",level:"N1",title:"〜もさることながら",summary:"Pola 〜もさることながら untuk level N1, dengan contoh penggunaan dalam konteks sekolah, kantor, layanan publik, dan kehidupan sehari-hari di Jepang.",groups:[
    {name:"〜もさることながら",description:"Contoh penggunaan 〜もさることながら dalam konteks alami sehari-hari di Jepang.",sentences:[
      {jp:"この前の説明会では、もさることながらという表現も実際の場面で使われていた。",kana:"このまえのせつめいかいでは、もさることながらというひょうげんもじっさいのばめんでつかわれていた。",romaji:"Kono mae no setsumeikai deha, mosarukotonagaratoiu hyougen mo jissai no bamen de tsukawa reteita.",meaning:"Pada sesi penjelasan sebelumnya, ungkapan ini juga dipakai dalam situasi nyata."},
      {jp:"区役所や学校でも、もさることながらのような言い方を見かけることがある。",kana:"くやくしょやがっこうでも、もさることながらのようないいかたをみかけることがある。",romaji:"Kuyakusho ya gakkou demo, mosarukotonagaranoyouna iikata wo mikake rukotogaaru.",meaning:"Di balai kota maupun sekolah, kadang terlihat cara ungkap seperti ini."},
      {jp:"職場の会話では、もさることながらを使うと少し自然な言い方になる。",kana:"しょくばのかいわでは、もさることながらをつかうとすこししぜんないいかたになる。",romaji:"Shokuba no kaiwa deha, mosarukotonagarawo tsukau to sukoshi shizen na iikata ninaru.",meaning:"Dalam percakapan kerja, memakai pola ini bisa membuat ungkapan terdengar lebih alami."},
      {jp:"駅前の店で店員さんが話しているのを聞いて、もさることながらの使い方がよく分かった。",kana:"えきまえのみせでてんいんさんがはなしているのをきいて、もさることながらのつかいかたがよくわかった。",romaji:"Ekimae no mise de ten'in sanga hanashi teirunowo kii te, mosarukotonagarano tsukaikata gayoku waka tta.",meaning:"Saat mendengar staf toko di depan stasiun berbicara, saya jadi lebih paham cara pakai pola ini."},
      {jp:"授業だけでなく、日常の場面でももさることながらは意外とよく出てくる。",kana:"じゅぎょうだけでなく、にちじょうのばめんでももさることながらはいがいとよくでてくる。",romaji:"Jugyou dakedenaku, nichijou no bamen demomosarukotonagaraha igai toyoku dete kuru.",meaning:"Bukan hanya di kelas, pola ini ternyata cukup sering muncul dalam keseharian."}
    ]}
  ]},

  // ── GR-N1-180: 〜も同然だ ──
  {id:"GR-N1-180",level:"N1",title:"〜も同然だ",summary:"Pola 〜も同然だ untuk level N1, dengan contoh penggunaan dalam konteks sekolah, kantor, layanan publik, dan kehidupan sehari-hari di Jepang.",groups:[
    {name:"〜も同然だ",description:"Contoh penggunaan 〜も同然だ dalam konteks alami sehari-hari di Jepang.",sentences:[
      {jp:"この前の説明会では、も同然だという表現も実際の場面で使われていた。",kana:"このまえのせつめいかいでは、もどうぜんだというひょうげんもじっさいのばめんでつかわれていた。",romaji:"Kono mae no setsumeikai deha, mo douzen datoiu hyougen mo jissai no bamen de tsukawa reteita.",meaning:"Pada sesi penjelasan sebelumnya, ungkapan ini juga dipakai dalam situasi nyata."},
      {jp:"区役所や学校でも、も同然だのような言い方を見かけることがある。",kana:"くやくしょやがっこうでも、もどうぜんだのようないいかたをみかけることがある。",romaji:"Kuyakusho ya gakkou demo, mo douzen danoyouna iikata wo mikake rukotogaaru.",meaning:"Di balai kota maupun sekolah, kadang terlihat cara ungkap seperti ini."},
      {jp:"職場の会話では、も同然だを使うと少し自然な言い方になる。",kana:"しょくばのかいわでは、もどうぜんだをつかうとすこししぜんないいかたになる。",romaji:"Shokuba no kaiwa deha, mo douzen dawo tsukau to sukoshi shizen na iikata ninaru.",meaning:"Dalam percakapan kerja, memakai pola ini bisa membuat ungkapan terdengar lebih alami."},
      {jp:"駅前の店で店員さんが話しているのを聞いて、も同然だの使い方がよく分かった。",kana:"えきまえのみせでてんいんさんがはなしているのをきいて、もどうぜんだのつかいかたがよくわかった。",romaji:"Ekimae no mise de ten'in sanga hanashi teirunowo kii te, mo douzen dano tsukaikata gayoku waka tta.",meaning:"Saat mendengar staf toko di depan stasiun berbicara, saya jadi lebih paham cara pakai pola ini."},
      {jp:"授業だけでなく、日常の場面でもも同然だは意外とよく出てくる。",kana:"じゅぎょうだけでなく、にちじょうのばめんでももどうぜんだはいがいとよくでてくる。",romaji:"Jugyou dakedenaku, nichijou no bamen demomo douzen daha igai toyoku dete kuru.",meaning:"Bukan hanya di kelas, pola ini ternyata cukup sering muncul dalam keseharian."}
    ]}
  ]},

  // ── GR-N1-181: 〜ものと思われる / 〜ものと見られる ──
  {id:"GR-N1-181",level:"N1",title:"〜ものと思われる / 〜ものと見られる",summary:"Pola 〜ものと思われる / 〜ものと見られる untuk level N1, dengan contoh penggunaan dalam konteks sekolah, kantor, layanan publik, dan kehidupan sehari-hari di Jepang.",groups:[
    {name:"〜ものと思われる / 〜ものと見られる",description:"Contoh penggunaan 〜ものと思われる / 〜ものと見られる dalam konteks alami sehari-hari di Jepang.",sentences:[
      {jp:"この前の説明会では、ものと思われるという表現も実際の場面で使われていた。",kana:"このまえのせつめいかいでは、ものとおもわれるというひょうげんもじっさいのばめんでつかわれていた。",romaji:"Kono mae no setsumeikai deha, monoto omowa rerutoiu hyougen mo jissai no bamen de tsukawa reteita.",meaning:"Pada sesi penjelasan sebelumnya, ungkapan ini juga dipakai dalam situasi nyata."},
      {jp:"区役所や学校でも、ものと思われるのような言い方を見かけることがある。",kana:"くやくしょやがっこうでも、ものとおもわれるのようないいかたをみかけることがある。",romaji:"Kuyakusho ya gakkou demo, monoto omowa rerunoyouna iikata wo mikake rukotogaaru.",meaning:"Di balai kota maupun sekolah, kadang terlihat cara ungkap seperti ini."},
      {jp:"職場の会話では、ものと思われるを使うと少し自然な言い方になる。",kana:"しょくばのかいわでは、ものとおもわれるをつかうとすこししぜんないいかたになる。",romaji:"Shokuba no kaiwa deha, monoto omowa reruwo tsukau to sukoshi shizen na iikata ninaru.",meaning:"Dalam percakapan kerja, memakai pola ini bisa membuat ungkapan terdengar lebih alami."},
      {jp:"駅前の店で店員さんが話しているのを聞いて、ものと思われるの使い方がよく分かった。",kana:"えきまえのみせでてんいんさんがはなしているのをきいて、ものとおもわれるのつかいかたがよくわかった。",romaji:"Ekimae no mise de ten'in sanga hanashi teirunowo kii te, monoto omowa reruno tsukaikata gayoku waka tta.",meaning:"Saat mendengar staf toko di depan stasiun berbicara, saya jadi lebih paham cara pakai pola ini."},
      {jp:"授業だけでなく、日常の場面でもものと思われるは意外とよく出てくる。",kana:"じゅぎょうだけでなく、にちじょうのばめんでもものとおもわれるはいがいとよくでてくる。",romaji:"Jugyou dakedenaku, nichijou no bamen demomonoto omowa reruha igai toyoku dete kuru.",meaning:"Bukan hanya di kelas, pola ini ternyata cukup sering muncul dalam keseharian."}
    ]}
  ]},

  // ── GR-N1-182: 〜ものを ──
  {id:"GR-N1-182",level:"N1",title:"〜ものを",summary:"Pola 〜ものを untuk level N1, dengan contoh penggunaan dalam konteks sekolah, kantor, layanan publik, dan kehidupan sehari-hari di Jepang.",groups:[
    {name:"〜ものを",description:"Contoh penggunaan 〜ものを dalam konteks alami sehari-hari di Jepang.",sentences:[
      {jp:"この前の説明会では、ものをという表現も実際の場面で使われていた。",kana:"このまえのせつめいかいでは、ものをというひょうげんもじっさいのばめんでつかわれていた。",romaji:"Kono mae no setsumeikai deha, monowotoiu hyougen mo jissai no bamen de tsukawa reteita.",meaning:"Pada sesi penjelasan sebelumnya, ungkapan ini juga dipakai dalam situasi nyata."},
      {jp:"区役所や学校でも、ものをのような言い方を見かけることがある。",kana:"くやくしょやがっこうでも、ものをのようないいかたをみかけることがある。",romaji:"Kuyakusho ya gakkou demo, monowonoyouna iikata wo mikake rukotogaaru.",meaning:"Di balai kota maupun sekolah, kadang terlihat cara ungkap seperti ini."},
      {jp:"職場の会話では、ものをを使うと少し自然な言い方になる。",kana:"しょくばのかいわでは、ものををつかうとすこししぜんないいかたになる。",romaji:"Shokuba no kaiwa deha, monowowo tsukau to sukoshi shizen na iikata ninaru.",meaning:"Dalam percakapan kerja, memakai pola ini bisa membuat ungkapan terdengar lebih alami."},
      {jp:"駅前の店で店員さんが話しているのを聞いて、ものをの使い方がよく分かった。",kana:"えきまえのみせでてんいんさんがはなしているのをきいて、ものをのつかいかたがよくわかった。",romaji:"Ekimae no mise de ten'in sanga hanashi teirunowo kii te, monowono tsukaikata gayoku waka tta.",meaning:"Saat mendengar staf toko di depan stasiun berbicara, saya jadi lebih paham cara pakai pola ini."},
      {jp:"授業だけでなく、日常の場面でもものをは意外とよく出てくる。",kana:"じゅぎょうだけでなく、にちじょうのばめんでもものをはいがいとよくでてくる。",romaji:"Jugyou dakedenaku, nichijou no bamen demomonowoha igai toyoku dete kuru.",meaning:"Bukan hanya di kelas, pola ini ternyata cukup sering muncul dalam keseharian."}
    ]}
  ]},

  // ── GR-N1-183: もはや ──
  {id:"GR-N1-183",level:"N1",title:"もはや",summary:"Pola もはや untuk level N1, dengan contoh penggunaan dalam konteks sekolah, kantor, layanan publik, dan kehidupan sehari-hari di Jepang.",groups:[
    {name:"もはや",description:"Contoh penggunaan もはや dalam konteks alami sehari-hari di Jepang.",sentences:[
      {jp:"もはや、駅前の風景は十年前とはまったく違う。",kana:"もはや、えきまえのふうけいはじゅうねんまえとはまったくちがう。",romaji:"Mohaya, ekimae no fuukei ha juunenmae tohamattaku chigau.",meaning:"Sekarang pemandangan depan stasiun sudah benar-benar berbeda dari sepuluh tahun lalu."},
      {jp:"締め切りまで一時間を切っており、もはや迷っている時間はない。",kana:"しめきりまでいちじかんをきっており、もはやまよっているじかんはない。",romaji:"Shimekiri made ichijikan wo kitsu teori, mohaya mayotsu teiru jikan hanai.",meaning:"Batas waktu tinggal kurang dari satu jam, jadi sudah tidak ada waktu lagi untuk ragu."},
      {jp:"この時間になると、もはや窓口は長い列でいっぱいだ。",kana:"このじかんになると、もはやまどぐちはながいれつでいっぱいだ。",romaji:"Kono jikan ninaruto, mohaya madoguchi ha nagai retsu deippaida.",meaning:"Pada jam seperti ini, loket sudah penuh antrean panjang."},
      {jp:"何度も話し合ったので、もはや説明は不要だろう。",kana:"なんどもはなしあったので、もはやせつめいはふようだろう。",romaji:"Nando mo hanashiatsu tanode, mohaya setsumei ha fuyou darou.",meaning:"Karena sudah dibicarakan berkali-kali, penjelasan tambahan sepertinya tidak diperlukan lagi."},
      {jp:"体調を考えると、もはや無理はできない。",kana:"たいちょうをかんがえると、もはやむりはできない。",romaji:"Taichou wo kangae ruto, mohaya muri hadekinai.",meaning:"Melihat kondisi tubuh, saya sudah tidak bisa memaksakan diri lagi."}
    ]}
  ]},

  // ── GR-N1-184: 〜や否や ──
  {id:"GR-N1-184",level:"N1",title:"〜や否や",summary:"Pola 〜や否や untuk level N1, dengan contoh penggunaan dalam konteks sekolah, kantor, layanan publik, dan kehidupan sehari-hari di Jepang.",groups:[
    {name:"〜や否や",description:"Contoh penggunaan 〜や否や dalam konteks alami sehari-hari di Jepang.",sentences:[
      {jp:"この前の説明会では、や否やという表現も実際の場面で使われていた。",kana:"このまえのせつめいかいでは、やひやというひょうげんもじっさいのばめんでつかわれていた。",romaji:"Kono mae no setsumeikai deha, ya hi yatoiu hyougen mo jissai no bamen de tsukawa reteita.",meaning:"Pada sesi penjelasan sebelumnya, ungkapan ini juga dipakai dalam situasi nyata."},
      {jp:"区役所や学校でも、や否やのような言い方を見かけることがある。",kana:"くやくしょやがっこうでも、やひやのようないいかたをみかけることがある。",romaji:"Kuyakusho ya gakkou demo, ya hi yanoyouna iikata wo mikake rukotogaaru.",meaning:"Di balai kota maupun sekolah, kadang terlihat cara ungkap seperti ini."},
      {jp:"職場の会話では、や否やを使うと少し自然な言い方になる。",kana:"しょくばのかいわでは、やひやをつかうとすこししぜんないいかたになる。",romaji:"Shokuba no kaiwa deha, ya hi yawo tsukau to sukoshi shizen na iikata ninaru.",meaning:"Dalam percakapan kerja, memakai pola ini bisa membuat ungkapan terdengar lebih alami."},
      {jp:"駅前の店で店員さんが話しているのを聞いて、や否やの使い方がよく分かった。",kana:"えきまえのみせでてんいんさんがはなしているのをきいて、やひやのつかいかたがよくわかった。",romaji:"Ekimae no mise de ten'in sanga hanashi teirunowo kii te, ya hi yano tsukaikata gayoku waka tta.",meaning:"Saat mendengar staf toko di depan stasiun berbicara, saya jadi lebih paham cara pakai pola ini."},
      {jp:"授業だけでなく、日常の場面でもや否やは意外とよく出てくる。",kana:"じゅぎょうだけでなく、にちじょうのばめんでもやひやはいがいとよくでてくる。",romaji:"Jugyou dakedenaku, nichijou no bamen demoya hi yaha igai toyoku dete kuru.",meaning:"Bukan hanya di kelas, pola ini ternyata cukup sering muncul dalam keseharian."}
    ]}
  ]},

  // ── GR-N1-185: 〜やれ〜 ──
  {id:"GR-N1-185",level:"N1",title:"〜やれ〜",summary:"Pola 〜やれ〜 untuk level N1, dengan contoh penggunaan dalam konteks sekolah, kantor, layanan publik, dan kehidupan sehari-hari di Jepang.",groups:[
    {name:"〜やれ〜",description:"Contoh penggunaan 〜やれ〜 dalam konteks alami sehari-hari di Jepang.",sentences:[
      {jp:"この前の説明会では、やれという表現も実際の場面で使われていた。",kana:"このまえのせつめいかいでは、やれというひょうげんもじっさいのばめんでつかわれていた。",romaji:"Kono mae no setsumeikai deha, yaretoiu hyougen mo jissai no bamen de tsukawa reteita.",meaning:"Pada sesi penjelasan sebelumnya, ungkapan ini juga dipakai dalam situasi nyata."},
      {jp:"区役所や学校でも、やれのような言い方を見かけることがある。",kana:"くやくしょやがっこうでも、やれのようないいかたをみかけることがある。",romaji:"Kuyakusho ya gakkou demo, yarenoyouna iikata wo mikake rukotogaaru.",meaning:"Di balai kota maupun sekolah, kadang terlihat cara ungkap seperti ini."},
      {jp:"職場の会話では、やれを使うと少し自然な言い方になる。",kana:"しょくばのかいわでは、やれをつかうとすこししぜんないいかたになる。",romaji:"Shokuba no kaiwa deha, yarewo tsukau to sukoshi shizen na iikata ninaru.",meaning:"Dalam percakapan kerja, memakai pola ini bisa membuat ungkapan terdengar lebih alami."},
      {jp:"駅前の店で店員さんが話しているのを聞いて、やれの使い方がよく分かった。",kana:"えきまえのみせでてんいんさんがはなしているのをきいて、やれのつかいかたがよくわかった。",romaji:"Ekimae no mise de ten'in sanga hanashi teirunowo kii te, yareno tsukaikata gayoku waka tta.",meaning:"Saat mendengar staf toko di depan stasiun berbicara, saya jadi lebih paham cara pakai pola ini."},
      {jp:"授業だけでなく、日常の場面でもやれは意外とよく出てくる。",kana:"じゅぎょうだけでなく、にちじょうのばめんでもやれはいがいとよくでてくる。",romaji:"Jugyou dakedenaku, nichijou no bamen demoyareha igai toyoku dete kuru.",meaning:"Bukan hanya di kelas, pola ini ternyata cukup sering muncul dalam keseharian."}
    ]}
  ]},

  // ── GR-N1-186: 〜故に / 故の / 故だ ──
  {id:"GR-N1-186",level:"N1",title:"〜故に / 故の / 故だ",summary:"Pola 〜故に / 故の / 故だ untuk level N1, dengan contoh penggunaan dalam konteks sekolah, kantor, layanan publik, dan kehidupan sehari-hari di Jepang.",groups:[
    {name:"〜故に / 故の / 故だ",description:"Contoh penggunaan 〜故に / 故の / 故だ dalam konteks alami sehari-hari di Jepang.",sentences:[
      {jp:"この前の説明会では、故にという表現も実際の場面で使われていた。",kana:"このまえのせつめいかいでは、ゆえにというひょうげんもじっさいのばめんでつかわれていた。",romaji:"Kono mae no setsumeikai deha, yueni toiu hyougen mo jissai no bamen de tsukawa reteita.",meaning:"Pada sesi penjelasan sebelumnya, ungkapan ini juga dipakai dalam situasi nyata."},
      {jp:"区役所や学校でも、故にのような言い方を見かけることがある。",kana:"くやくしょやがっこうでも、ゆえにのようないいかたをみかけることがある。",romaji:"Kuyakusho ya gakkou demo, yueni noyouna iikata wo mikake rukotogaaru.",meaning:"Di balai kota maupun sekolah, kadang terlihat cara ungkap seperti ini."},
      {jp:"職場の会話では、故にを使うと少し自然な言い方になる。",kana:"しょくばのかいわでは、ゆえにをつかうとすこししぜんないいかたになる。",romaji:"Shokuba no kaiwa deha, yueni wo tsukau to sukoshi shizen na iikata ninaru.",meaning:"Dalam percakapan kerja, memakai pola ini bisa membuat ungkapan terdengar lebih alami."},
      {jp:"駅前の店で店員さんが話しているのを聞いて、故にの使い方がよく分かった。",kana:"えきまえのみせでてんいんさんがはなしているのをきいて、ゆえにのつかいかたがよくわかった。",romaji:"Ekimae no mise de ten'in sanga hanashi teirunowo kii te, yueni no tsukaikata gayoku waka tta.",meaning:"Saat mendengar staf toko di depan stasiun berbicara, saya jadi lebih paham cara pakai pola ini."},
      {jp:"授業だけでなく、日常の場面でも故には意外とよく出てくる。",kana:"じゅぎょうだけでなく、にちじょうのばめんでもゆえにはいがいとよくでてくる。",romaji:"Jugyou dakedenaku, nichijou no bamen demo yueni ha igai toyoku dete kuru.",meaning:"Bukan hanya di kelas, pola ini ternyata cukup sering muncul dalam keseharian."}
    ]}
  ]},

  // ── GR-N1-187: 〜ようが / ようと ──
  {id:"GR-N1-187",level:"N1",title:"〜ようが / ようと",summary:"Pola 〜ようが / ようと untuk level N1, dengan contoh penggunaan dalam konteks sekolah, kantor, layanan publik, dan kehidupan sehari-hari di Jepang.",groups:[
    {name:"〜ようが / ようと",description:"Contoh penggunaan 〜ようが / ようと dalam konteks alami sehari-hari di Jepang.",sentences:[
      {jp:"この前の説明会では、ようがという表現も実際の場面で使われていた。",kana:"このまえのせつめいかいでは、ようがというひょうげんもじっさいのばめんでつかわれていた。",romaji:"Kono mae no setsumeikai deha, yougatoiu hyougen mo jissai no bamen de tsukawa reteita.",meaning:"Pada sesi penjelasan sebelumnya, ungkapan ini juga dipakai dalam situasi nyata."},
      {jp:"区役所や学校でも、ようがのような言い方を見かけることがある。",kana:"くやくしょやがっこうでも、ようがのようないいかたをみかけることがある。",romaji:"Kuyakusho ya gakkou demo, youganoyouna iikata wo mikake rukotogaaru.",meaning:"Di balai kota maupun sekolah, kadang terlihat cara ungkap seperti ini."},
      {jp:"職場の会話では、ようがを使うと少し自然な言い方になる。",kana:"しょくばのかいわでは、ようがをつかうとすこししぜんないいかたになる。",romaji:"Shokuba no kaiwa deha, yougawo tsukau to sukoshi shizen na iikata ninaru.",meaning:"Dalam percakapan kerja, memakai pola ini bisa membuat ungkapan terdengar lebih alami."},
      {jp:"駅前の店で店員さんが話しているのを聞いて、ようがの使い方がよく分かった。",kana:"えきまえのみせでてんいんさんがはなしているのをきいて、ようがのつかいかたがよくわかった。",romaji:"Ekimae no mise de ten'in sanga hanashi teirunowo kii te, yougano tsukaikata gayoku waka tta.",meaning:"Saat mendengar staf toko di depan stasiun berbicara, saya jadi lebih paham cara pakai pola ini."},
      {jp:"授業だけでなく、日常の場面でもようがは意外とよく出てくる。",kana:"じゅぎょうだけでなく、にちじょうのばめんでもようがはいがいとよくでてくる。",romaji:"Jugyou dakedenaku, nichijou no bamen demoyougaha igai toyoku dete kuru.",meaning:"Bukan hanya di kelas, pola ini ternyata cukup sering muncul dalam keseharian."}
    ]}
  ]},

  // ── GR-N1-188: 〜ようにも〜ない ──
  {id:"GR-N1-188",level:"N1",title:"〜ようにも〜ない",summary:"Pola 〜ようにも〜ない untuk level N1, dengan contoh penggunaan dalam konteks sekolah, kantor, layanan publik, dan kehidupan sehari-hari di Jepang.",groups:[
    {name:"〜ようにも〜ない",description:"Contoh penggunaan 〜ようにも〜ない dalam konteks alami sehari-hari di Jepang.",sentences:[
      {jp:"この前の説明会では、ようにもないという表現も実際の場面で使われていた。",kana:"このまえのせつめいかいでは、ようにもないというひょうげんもじっさいのばめんでつかわれていた。",romaji:"Kono mae no setsumeikai deha, younimonaitoiu hyougen mo jissai no bamen de tsukawa reteita.",meaning:"Pada sesi penjelasan sebelumnya, ungkapan ini juga dipakai dalam situasi nyata."},
      {jp:"区役所や学校でも、ようにもないのような言い方を見かけることがある。",kana:"くやくしょやがっこうでも、ようにもないのようないいかたをみかけることがある。",romaji:"Kuyakusho ya gakkou demo, younimonainoyouna iikata wo mikake rukotogaaru.",meaning:"Di balai kota maupun sekolah, kadang terlihat cara ungkap seperti ini."},
      {jp:"職場の会話では、ようにもないを使うと少し自然な言い方になる。",kana:"しょくばのかいわでは、ようにもないをつかうとすこししぜんないいかたになる。",romaji:"Shokuba no kaiwa deha, younimonaiwo tsukau to sukoshi shizen na iikata ninaru.",meaning:"Dalam percakapan kerja, memakai pola ini bisa membuat ungkapan terdengar lebih alami."},
      {jp:"駅前の店で店員さんが話しているのを聞いて、ようにもないの使い方がよく分かった。",kana:"えきまえのみせでてんいんさんがはなしているのをきいて、ようにもないのつかいかたがよくわかった。",romaji:"Ekimae no mise de ten'in sanga hanashi teirunowo kii te, younimonaino tsukaikata gayoku waka tta.",meaning:"Saat mendengar staf toko di depan stasiun berbicara, saya jadi lebih paham cara pakai pola ini."},
      {jp:"授業だけでなく、日常の場面でもようにもないは意外とよく出てくる。",kana:"じゅぎょうだけでなく、にちじょうのばめんでもようにもないはいがいとよくでてくる。",romaji:"Jugyou dakedenaku, nichijou no bamen demoyounimonaiha igai toyoku dete kuru.",meaning:"Bukan hanya di kelas, pola ini ternyata cukup sering muncul dalam keseharian."}
    ]}
  ]},

  // ── GR-N1-189: 〜ようによっては / ようでは ──
  {id:"GR-N1-189",level:"N1",title:"〜ようによっては / ようでは",summary:"Pola 〜ようによっては / ようでは untuk level N1, dengan contoh penggunaan dalam konteks sekolah, kantor, layanan publik, dan kehidupan sehari-hari di Jepang.",groups:[
    {name:"〜ようによっては / ようでは",description:"Contoh penggunaan 〜ようによっては / ようでは dalam konteks alami sehari-hari di Jepang.",sentences:[
      {jp:"この前の説明会では、ようによってはという表現も実際の場面で使われていた。",kana:"このまえのせつめいかいでは、ようによってはというひょうげんもじっさいのばめんでつかわれていた。",romaji:"Kono mae no setsumeikai deha, youniyottehatoiu hyougen mo jissai no bamen de tsukawa reteita.",meaning:"Pada sesi penjelasan sebelumnya, ungkapan ini juga dipakai dalam situasi nyata."},
      {jp:"区役所や学校でも、ようによってはのような言い方を見かけることがある。",kana:"くやくしょやがっこうでも、ようによってはのようないいかたをみかけることがある。",romaji:"Kuyakusho ya gakkou demo, youniyottehanoyouna iikata wo mikake rukotogaaru.",meaning:"Di balai kota maupun sekolah, kadang terlihat cara ungkap seperti ini."},
      {jp:"職場の会話では、ようによってはを使うと少し自然な言い方になる。",kana:"しょくばのかいわでは、ようによってはをつかうとすこししぜんないいかたになる。",romaji:"Shokuba no kaiwa deha, youniyottehawo tsukau to sukoshi shizen na iikata ninaru.",meaning:"Dalam percakapan kerja, memakai pola ini bisa membuat ungkapan terdengar lebih alami."},
      {jp:"駅前の店で店員さんが話しているのを聞いて、ようによってはの使い方がよく分かった。",kana:"えきまえのみせでてんいんさんがはなしているのをきいて、ようによってはのつかいかたがよくわかった。",romaji:"Ekimae no mise de ten'in sanga hanashi teirunowo kii te, youniyottehano tsukaikata gayoku waka tta.",meaning:"Saat mendengar staf toko di depan stasiun berbicara, saya jadi lebih paham cara pakai pola ini."},
      {jp:"授業だけでなく、日常の場面でもようによってはは意外とよく出てくる。",kana:"じゅぎょうだけでなく、にちじょうのばめんでもようによってははいがいとよくでてくる。",romaji:"Jugyou dakedenaku, nichijou no bamen demoyouniyottehaha igai toyoku dete kuru.",meaning:"Bukan hanya di kelas, pola ini ternyata cukup sering muncul dalam keseharian."}
    ]}
  ]},

  // ── GR-N1-190: 〜わ〜わ ──
  {id:"GR-N1-190",level:"N1",title:"〜わ〜わ",summary:"Pola 〜わ〜わ untuk level N1, dengan contoh penggunaan dalam konteks sekolah, kantor, layanan publik, dan kehidupan sehari-hari di Jepang.",groups:[
    {name:"〜わ〜わ",description:"Contoh penggunaan 〜わ〜わ dalam konteks alami sehari-hari di Jepang.",sentences:[
      {jp:"この前の説明会では、わわという表現も実際の場面で使われていた。",kana:"このまえのせつめいかいでは、わわというひょうげんもじっさいのばめんでつかわれていた。",romaji:"Kono mae no setsumeikai deha, wawatoiu hyougen mo jissai no bamen de tsukawa reteita.",meaning:"Pada sesi penjelasan sebelumnya, ungkapan ini juga dipakai dalam situasi nyata."},
      {jp:"区役所や学校でも、わわのような言い方を見かけることがある。",kana:"くやくしょやがっこうでも、わわのようないいかたをみかけることがある。",romaji:"Kuyakusho ya gakkou demo, wawanoyouna iikata wo mikake rukotogaaru.",meaning:"Di balai kota maupun sekolah, kadang terlihat cara ungkap seperti ini."},
      {jp:"職場の会話では、わわを使うと少し自然な言い方になる。",kana:"しょくばのかいわでは、わわをつかうとすこししぜんないいかたになる。",romaji:"Shokuba no kaiwa deha, wawawo tsukau to sukoshi shizen na iikata ninaru.",meaning:"Dalam percakapan kerja, memakai pola ini bisa membuat ungkapan terdengar lebih alami."},
      {jp:"駅前の店で店員さんが話しているのを聞いて、わわの使い方がよく分かった。",kana:"えきまえのみせでてんいんさんがはなしているのをきいて、わわのつかいかたがよくわかった。",romaji:"Ekimae no mise de ten'in sanga hanashi teirunowo kii te, wawano tsukaikata gayoku waka tta.",meaning:"Saat mendengar staf toko di depan stasiun berbicara, saya jadi lebih paham cara pakai pola ini."},
      {jp:"授業だけでなく、日常の場面でもわわは意外とよく出てくる。",kana:"じゅぎょうだけでなく、にちじょうのばめんでもわわはいがいとよくでてくる。",romaji:"Jugyou dakedenaku, nichijou no bamen demowawaha igai toyoku dete kuru.",meaning:"Bukan hanya di kelas, pola ini ternyata cukup sering muncul dalam keseharian."}
    ]}
  ]},

  // ── GR-N1-191: 〜をおいて他にない ──
  {id:"GR-N1-191",level:"N1",title:"〜をおいて他にない",summary:"Pola 〜をおいて他にない untuk level N1, dengan contoh penggunaan dalam konteks sekolah, kantor, layanan publik, dan kehidupan sehari-hari di Jepang.",groups:[
    {name:"〜をおいて他にない",description:"Contoh penggunaan 〜をおいて他にない dalam konteks alami sehari-hari di Jepang.",sentences:[
      {jp:"地域のイベントをおいて他にない、近所の人と少しずつ顔見知りになった。",kana:"ちいきのいべんとをおいてほかにない、きんじょのにんとすこしずつかおみしりになった。",romaji:"Chiiki no ibento wooite hokani nai, kinjo no nin to sukoshi zutsu kaomishiri ninatta.",meaning:"Melalui acara lingkungan, saya perlahan mulai mengenal orang-orang sekitar."},
      {jp:"先輩との会話をおいて他にない、就職活動の流れが具体的に見えてきた。",kana:"せんぱいとのかいわをおいてほかにない、しゅうしょくかつどうのながれがぐたいてきにみえてきた。",romaji:"Senpai tono kaiwa wooite hokani nai, shuushokukatsudou no nagare ga gutaiteki ni mie tekita.",meaning:"Melalui percakapan dengan senior, alur mencari kerja jadi terasa lebih jelas."},
      {jp:"実習をおいて他にない、教室では分からなかった課題にも気づいた。",kana:"じっしゅうをおいてほかにない、きょうしつではわからなかったかだいにもきづいた。",romaji:"Jisshuu wooite hokani nai, kyoushitsu deha waka ranakatta kadai nimo kizu ita.",meaning:"Melalui praktik lapangan, saya menyadari tantangan yang tidak terlihat di kelas."},
      {jp:"この資料をおいて他にない、学校側の考え方を理解してほしい。",kana:"このしりょうをおいてほかにない、がっこうがわのかんがえかたをりかいしてほしい。",romaji:"Kono shiryou wooite hokani nai, gakkougawa no kangaekata wo rikai shitehoshii.",meaning:"Melalui materi ini, saya ingin Anda memahami cara pandang pihak sekolah."},
      {jp:"商店街の取り組みをおいて他にない、地域全体の雰囲気も変わってきた。",kana:"しょうてんがいのとりくみをおいてほかにない、ちいきぜんたいのふんいきもかわってきた。",romaji:"Shoutengai no torikumi wooite hokani nai, chiiki zentai no fun'iki mo kawa ttekita.",meaning:"Melalui upaya area pertokoan, suasana seluruh lingkungan juga mulai berubah."}
    ]}
  ]},

  // ── GR-N1-192: 〜を押して / 〜を押し切って ──
  {id:"GR-N1-192",level:"N1",title:"〜を押して / 〜を押し切って",summary:"Pola 〜を押して / 〜を押し切って untuk level N1, dengan contoh penggunaan dalam konteks sekolah, kantor, layanan publik, dan kehidupan sehari-hari di Jepang.",groups:[
    {name:"〜を押して / 〜を押し切って",description:"Contoh penggunaan 〜を押して / 〜を押し切って dalam konteks alami sehari-hari di Jepang.",sentences:[
      {jp:"地域のイベントを押して、近所の人と少しずつ顔見知りになった。",kana:"ちいきのいべんとをおして、きんじょのにんとすこしずつかおみしりになった。",romaji:"Chiiki no ibento wo oshi te, kinjo no nin to sukoshi zutsu kaomishiri ninatta.",meaning:"Melalui acara lingkungan, saya perlahan mulai mengenal orang-orang sekitar."},
      {jp:"先輩との会話を押して、就職活動の流れが具体的に見えてきた。",kana:"せんぱいとのかいわをおして、しゅうしょくかつどうのながれがぐたいてきにみえてきた。",romaji:"Senpai tono kaiwa wo oshi te, shuushokukatsudou no nagare ga gutaiteki ni mie tekita.",meaning:"Melalui percakapan dengan senior, alur mencari kerja jadi terasa lebih jelas."},
      {jp:"実習を押して、教室では分からなかった課題にも気づいた。",kana:"じっしゅうをおして、きょうしつではわからなかったかだいにもきづいた。",romaji:"Jisshuu wo oshi te, kyoushitsu deha waka ranakatta kadai nimo kizu ita.",meaning:"Melalui praktik lapangan, saya menyadari tantangan yang tidak terlihat di kelas."},
      {jp:"この資料を押して、学校側の考え方を理解してほしい。",kana:"このしりょうをおして、がっこうがわのかんがえかたをりかいしてほしい。",romaji:"Kono shiryou wo oshi te, gakkougawa no kangaekata wo rikai shitehoshii.",meaning:"Melalui materi ini, saya ingin Anda memahami cara pandang pihak sekolah."},
      {jp:"商店街の取り組みを押して、地域全体の雰囲気も変わってきた。",kana:"しょうてんがいのとりくみをおして、ちいきぜんたいのふんいきもかわってきた。",romaji:"Shoutengai no torikumi wo oshi te, chiiki zentai no fun'iki mo kawa ttekita.",meaning:"Melalui upaya area pertokoan, suasana seluruh lingkungan juga mulai berubah."}
    ]}
  ]},

  // ── GR-N1-193: 〜を顧みず / も顧みず ──
  {id:"GR-N1-193",level:"N1",title:"〜を顧みず / も顧みず",summary:"Pola 〜を顧みず / も顧みず untuk level N1, dengan contoh penggunaan dalam konteks sekolah, kantor, layanan publik, dan kehidupan sehari-hari di Jepang.",groups:[
    {name:"〜を顧みず / も顧みず",description:"Contoh penggunaan 〜を顧みず / も顧みず dalam konteks alami sehari-hari di Jepang.",sentences:[
      {jp:"地域のイベントを顧みず、近所の人と少しずつ顔見知りになった。",kana:"ちいきのいべんとをかえりみず、きんじょのにんとすこしずつかおみしりになった。",romaji:"Chiiki no ibento wo kaerimi zu, kinjo no nin to sukoshi zutsu kaomishiri ninatta.",meaning:"Melalui acara lingkungan, saya perlahan mulai mengenal orang-orang sekitar."},
      {jp:"先輩との会話を顧みず、就職活動の流れが具体的に見えてきた。",kana:"せんぱいとのかいわをかえりみず、しゅうしょくかつどうのながれがぐたいてきにみえてきた。",romaji:"Senpai tono kaiwa wo kaerimi zu, shuushokukatsudou no nagare ga gutaiteki ni mie tekita.",meaning:"Melalui percakapan dengan senior, alur mencari kerja jadi terasa lebih jelas."},
      {jp:"実習を顧みず、教室では分からなかった課題にも気づいた。",kana:"じっしゅうをかえりみず、きょうしつではわからなかったかだいにもきづいた。",romaji:"Jisshuu wo kaerimi zu, kyoushitsu deha waka ranakatta kadai nimo kizu ita.",meaning:"Melalui praktik lapangan, saya menyadari tantangan yang tidak terlihat di kelas."},
      {jp:"この資料を顧みず、学校側の考え方を理解してほしい。",kana:"このしりょうをかえりみず、がっこうがわのかんがえかたをりかいしてほしい。",romaji:"Kono shiryou wo kaerimi zu, gakkougawa no kangaekata wo rikai shitehoshii.",meaning:"Melalui materi ini, saya ingin Anda memahami cara pandang pihak sekolah."},
      {jp:"商店街の取り組みを顧みず、地域全体の雰囲気も変わってきた。",kana:"しょうてんがいのとりくみをかえりみず、ちいきぜんたいのふんいきもかわってきた。",romaji:"Shoutengai no torikumi wo kaerimi zu, chiiki zentai no fun'iki mo kawa ttekita.",meaning:"Melalui upaya area pertokoan, suasana seluruh lingkungan juga mulai berubah."}
    ]}
  ]},

  // ── GR-N1-194: 〜を限りに ──
  {id:"GR-N1-194",level:"N1",title:"〜を限りに",summary:"Pola 〜を限りに untuk level N1, dengan contoh penggunaan dalam konteks sekolah, kantor, layanan publik, dan kehidupan sehari-hari di Jepang.",groups:[
    {name:"〜を限りに",description:"Contoh penggunaan 〜を限りに dalam konteks alami sehari-hari di Jepang.",sentences:[
      {jp:"地域のイベントを限りに、近所の人と少しずつ顔見知りになった。",kana:"ちいきのいべんとをかぎりに、きんじょのにんとすこしずつかおみしりになった。",romaji:"Chiiki no ibento wo kagiri ni, kinjo no nin to sukoshi zutsu kaomishiri ninatta.",meaning:"Melalui acara lingkungan, saya perlahan mulai mengenal orang-orang sekitar."},
      {jp:"先輩との会話を限りに、就職活動の流れが具体的に見えてきた。",kana:"せんぱいとのかいわをかぎりに、しゅうしょくかつどうのながれがぐたいてきにみえてきた。",romaji:"Senpai tono kaiwa wo kagiri ni, shuushokukatsudou no nagare ga gutaiteki ni mie tekita.",meaning:"Melalui percakapan dengan senior, alur mencari kerja jadi terasa lebih jelas."},
      {jp:"実習を限りに、教室では分からなかった課題にも気づいた。",kana:"じっしゅうをかぎりに、きょうしつではわからなかったかだいにもきづいた。",romaji:"Jisshuu wo kagiri ni, kyoushitsu deha waka ranakatta kadai nimo kizu ita.",meaning:"Melalui praktik lapangan, saya menyadari tantangan yang tidak terlihat di kelas."},
      {jp:"この資料を限りに、学校側の考え方を理解してほしい。",kana:"このしりょうをかぎりに、がっこうがわのかんがえかたをりかいしてほしい。",romaji:"Kono shiryou wo kagiri ni, gakkougawa no kangaekata wo rikai shitehoshii.",meaning:"Melalui materi ini, saya ingin Anda memahami cara pandang pihak sekolah."},
      {jp:"商店街の取り組みを限りに、地域全体の雰囲気も変わってきた。",kana:"しょうてんがいのとりくみをかぎりに、ちいきぜんたいのふんいきもかわってきた。",romaji:"Shoutengai no torikumi wo kagiri ni, chiiki zentai no fun'iki mo kawa ttekita.",meaning:"Melalui upaya area pertokoan, suasana seluruh lingkungan juga mulai berubah."}
    ]}
  ]},

  // ── GR-N1-195: 〜をかねて ──
  {id:"GR-N1-195",level:"N1",title:"〜をかねて",summary:"Pola 〜をかねて untuk level N1, dengan contoh penggunaan dalam konteks sekolah, kantor, layanan publik, dan kehidupan sehari-hari di Jepang.",groups:[
    {name:"〜をかねて",description:"Contoh penggunaan 〜をかねて dalam konteks alami sehari-hari di Jepang.",sentences:[
      {jp:"地域のイベントをかねて、近所の人と少しずつ顔見知りになった。",kana:"ちいきのいべんとをかねて、きんじょのにんとすこしずつかおみしりになった。",romaji:"Chiiki no ibento wokanete, kinjo no nin to sukoshi zutsu kaomishiri ninatta.",meaning:"Melalui acara lingkungan, saya perlahan mulai mengenal orang-orang sekitar."},
      {jp:"先輩との会話をかねて、就職活動の流れが具体的に見えてきた。",kana:"せんぱいとのかいわをかねて、しゅうしょくかつどうのながれがぐたいてきにみえてきた。",romaji:"Senpai tono kaiwa wokanete, shuushokukatsudou no nagare ga gutaiteki ni mie tekita.",meaning:"Melalui percakapan dengan senior, alur mencari kerja jadi terasa lebih jelas."},
      {jp:"実習をかねて、教室では分からなかった課題にも気づいた。",kana:"じっしゅうをかねて、きょうしつではわからなかったかだいにもきづいた。",romaji:"Jisshuu wokanete, kyoushitsu deha waka ranakatta kadai nimo kizu ita.",meaning:"Melalui praktik lapangan, saya menyadari tantangan yang tidak terlihat di kelas."},
      {jp:"この資料をかねて、学校側の考え方を理解してほしい。",kana:"このしりょうをかねて、がっこうがわのかんがえかたをりかいしてほしい。",romaji:"Kono shiryou wokanete, gakkougawa no kangaekata wo rikai shitehoshii.",meaning:"Melalui materi ini, saya ingin Anda memahami cara pandang pihak sekolah."},
      {jp:"商店街の取り組みをかねて、地域全体の雰囲気も変わってきた。",kana:"しょうてんがいのとりくみをかねて、ちいきぜんたいのふんいきもかわってきた。",romaji:"Shoutengai no torikumi wokanete, chiiki zentai no fun'iki mo kawa ttekita.",meaning:"Melalui upaya area pertokoan, suasana seluruh lingkungan juga mulai berubah."}
    ]}
  ]},

  // ── GR-N1-196: 〜を皮切りに ──
  {id:"GR-N1-196",level:"N1",title:"〜を皮切りに",summary:"Pola 〜を皮切りに untuk level N1, dengan contoh penggunaan dalam konteks sekolah, kantor, layanan publik, dan kehidupan sehari-hari di Jepang.",groups:[
    {name:"〜を皮切りに",description:"Contoh penggunaan 〜を皮切りに dalam konteks alami sehari-hari di Jepang.",sentences:[
      {jp:"地域のイベントを皮切りに、近所の人と少しずつ顔見知りになった。",kana:"ちいきのいべんとをかわきりりに、きんじょのにんとすこしずつかおみしりになった。",romaji:"Chiiki no ibento wo kawakiri rini, kinjo no nin to sukoshi zutsu kaomishiri ninatta.",meaning:"Melalui acara lingkungan, saya perlahan mulai mengenal orang-orang sekitar."},
      {jp:"先輩との会話を皮切りに、就職活動の流れが具体的に見えてきた。",kana:"せんぱいとのかいわをかわきりりに、しゅうしょくかつどうのながれがぐたいてきにみえてきた。",romaji:"Senpai tono kaiwa wo kawakiri rini, shuushokukatsudou no nagare ga gutaiteki ni mie tekita.",meaning:"Melalui percakapan dengan senior, alur mencari kerja jadi terasa lebih jelas."},
      {jp:"実習を皮切りに、教室では分からなかった課題にも気づいた。",kana:"じっしゅうをかわきりりに、きょうしつではわからなかったかだいにもきづいた。",romaji:"Jisshuu wo kawakiri rini, kyoushitsu deha waka ranakatta kadai nimo kizu ita.",meaning:"Melalui praktik lapangan, saya menyadari tantangan yang tidak terlihat di kelas."},
      {jp:"この資料を皮切りに、学校側の考え方を理解してほしい。",kana:"このしりょうをかわきりりに、がっこうがわのかんがえかたをりかいしてほしい。",romaji:"Kono shiryou wo kawakiri rini, gakkougawa no kangaekata wo rikai shitehoshii.",meaning:"Melalui materi ini, saya ingin Anda memahami cara pandang pihak sekolah."},
      {jp:"商店街の取り組みを皮切りに、地域全体の雰囲気も変わってきた。",kana:"しょうてんがいのとりくみをかわきりりに、ちいきぜんたいのふんいきもかわってきた。",romaji:"Shoutengai no torikumi wo kawakiri rini, chiiki zentai no fun'iki mo kawa ttekita.",meaning:"Melalui upaya area pertokoan, suasana seluruh lingkungan juga mulai berubah."}
    ]}
  ]},

  // ── GR-N1-197: 〜を機に ──
  {id:"GR-N1-197",level:"N1",title:"〜を機に",summary:"Pola 〜を機に untuk level N1, dengan contoh penggunaan dalam konteks sekolah, kantor, layanan publik, dan kehidupan sehari-hari di Jepang.",groups:[
    {name:"〜を機に",description:"Contoh penggunaan 〜を機に dalam konteks alami sehari-hari di Jepang.",sentences:[
      {jp:"地域のイベントを機に、近所の人と少しずつ顔見知りになった。",kana:"ちいきのいべんとをきに、きんじょのにんとすこしずつかおみしりになった。",romaji:"Chiiki no ibento wo kini, kinjo no nin to sukoshi zutsu kaomishiri ninatta.",meaning:"Melalui acara lingkungan, saya perlahan mulai mengenal orang-orang sekitar."},
      {jp:"先輩との会話を機に、就職活動の流れが具体的に見えてきた。",kana:"せんぱいとのかいわをきに、しゅうしょくかつどうのながれがぐたいてきにみえてきた。",romaji:"Senpai tono kaiwa wo kini, shuushokukatsudou no nagare ga gutaiteki ni mie tekita.",meaning:"Melalui percakapan dengan senior, alur mencari kerja jadi terasa lebih jelas."},
      {jp:"実習を機に、教室では分からなかった課題にも気づいた。",kana:"じっしゅうをきに、きょうしつではわからなかったかだいにもきづいた。",romaji:"Jisshuu wo kini, kyoushitsu deha waka ranakatta kadai nimo kizu ita.",meaning:"Melalui praktik lapangan, saya menyadari tantangan yang tidak terlihat di kelas."},
      {jp:"この資料を機に、学校側の考え方を理解してほしい。",kana:"このしりょうをきに、がっこうがわのかんがえかたをりかいしてほしい。",romaji:"Kono shiryou wo kini, gakkougawa no kangaekata wo rikai shitehoshii.",meaning:"Melalui materi ini, saya ingin Anda memahami cara pandang pihak sekolah."},
      {jp:"商店街の取り組みを機に、地域全体の雰囲気も変わってきた。",kana:"しょうてんがいのとりくみをきに、ちいきぜんたいのふんいきもかわってきた。",romaji:"Shoutengai no torikumi wo kini, chiiki zentai no fun'iki mo kawa ttekita.",meaning:"Melalui upaya area pertokoan, suasana seluruh lingkungan juga mulai berubah."}
    ]}
  ]},

  // ── GR-N1-198: 〜を禁じ得ない ──
  {id:"GR-N1-198",level:"N1",title:"〜を禁じ得ない",summary:"Pola 〜を禁じ得ない untuk level N1, dengan contoh penggunaan dalam konteks sekolah, kantor, layanan publik, dan kehidupan sehari-hari di Jepang.",groups:[
    {name:"〜を禁じ得ない",description:"Contoh penggunaan 〜を禁じ得ない dalam konteks alami sehari-hari di Jepang.",sentences:[
      {jp:"地域のイベントを禁じ得ない、近所の人と少しずつ顔見知りになった。",kana:"ちいきのいべんとをきんじえない、きんじょのにんとすこしずつかおみしりになった。",romaji:"Chiiki no ibento wo kinji ena i, kinjo no nin to sukoshi zutsu kaomishiri ninatta.",meaning:"Melalui acara lingkungan, saya perlahan mulai mengenal orang-orang sekitar."},
      {jp:"先輩との会話を禁じ得ない、就職活動の流れが具体的に見えてきた。",kana:"せんぱいとのかいわをきんじえない、しゅうしょくかつどうのながれがぐたいてきにみえてきた。",romaji:"Senpai tono kaiwa wo kinji ena i, shuushokukatsudou no nagare ga gutaiteki ni mie tekita.",meaning:"Melalui percakapan dengan senior, alur mencari kerja jadi terasa lebih jelas."},
      {jp:"実習を禁じ得ない、教室では分からなかった課題にも気づいた。",kana:"じっしゅうをきんじえない、きょうしつではわからなかったかだいにもきづいた。",romaji:"Jisshuu wo kinji ena i, kyoushitsu deha waka ranakatta kadai nimo kizu ita.",meaning:"Melalui praktik lapangan, saya menyadari tantangan yang tidak terlihat di kelas."},
      {jp:"この資料を禁じ得ない、学校側の考え方を理解してほしい。",kana:"このしりょうをきんじえない、がっこうがわのかんがえかたをりかいしてほしい。",romaji:"Kono shiryou wo kinji ena i, gakkougawa no kangaekata wo rikai shitehoshii.",meaning:"Melalui materi ini, saya ingin Anda memahami cara pandang pihak sekolah."},
      {jp:"商店街の取り組みを禁じ得ない、地域全体の雰囲気も変わってきた。",kana:"しょうてんがいのとりくみをきんじえない、ちいきぜんたいのふんいきもかわってきた。",romaji:"Shoutengai no torikumi wo kinji ena i, chiiki zentai no fun'iki mo kawa ttekita.",meaning:"Melalui upaya area pertokoan, suasana seluruh lingkungan juga mulai berubah."}
    ]}
  ]},

  // ── GR-N1-199: 〜を境に ──
  {id:"GR-N1-199",level:"N1",title:"〜を境に",summary:"Pola 〜を境に untuk level N1, dengan contoh penggunaan dalam konteks sekolah, kantor, layanan publik, dan kehidupan sehari-hari di Jepang.",groups:[
    {name:"〜を境に",description:"Contoh penggunaan 〜を境に dalam konteks alami sehari-hari di Jepang.",sentences:[
      {jp:"地域のイベントを境に、近所の人と少しずつ顔見知りになった。",kana:"ちいきのいべんとをさかいに、きんじょのにんとすこしずつかおみしりになった。",romaji:"Chiiki no ibento wo sakai ni, kinjo no nin to sukoshi zutsu kaomishiri ninatta.",meaning:"Melalui acara lingkungan, saya perlahan mulai mengenal orang-orang sekitar."},
      {jp:"先輩との会話を境に、就職活動の流れが具体的に見えてきた。",kana:"せんぱいとのかいわをさかいに、しゅうしょくかつどうのながれがぐたいてきにみえてきた。",romaji:"Senpai tono kaiwa wo sakai ni, shuushokukatsudou no nagare ga gutaiteki ni mie tekita.",meaning:"Melalui percakapan dengan senior, alur mencari kerja jadi terasa lebih jelas."},
      {jp:"実習を境に、教室では分からなかった課題にも気づいた。",kana:"じっしゅうをさかいに、きょうしつではわからなかったかだいにもきづいた。",romaji:"Jisshuu wo sakai ni, kyoushitsu deha waka ranakatta kadai nimo kizu ita.",meaning:"Melalui praktik lapangan, saya menyadari tantangan yang tidak terlihat di kelas."},
      {jp:"この資料を境に、学校側の考え方を理解してほしい。",kana:"このしりょうをさかいに、がっこうがわのかんがえかたをりかいしてほしい。",romaji:"Kono shiryou wo sakai ni, gakkougawa no kangaekata wo rikai shitehoshii.",meaning:"Melalui materi ini, saya ingin Anda memahami cara pandang pihak sekolah."},
      {jp:"商店街の取り組みを境に、地域全体の雰囲気も変わってきた。",kana:"しょうてんがいのとりくみをさかいに、ちいきぜんたいのふんいきもかわってきた。",romaji:"Shoutengai no torikumi wo sakai ni, chiiki zentai no fun'iki mo kawa ttekita.",meaning:"Melalui upaya area pertokoan, suasana seluruh lingkungan juga mulai berubah."}
    ]}
  ]},

  // ── GR-N1-200: 〜を控えて ──
  {id:"GR-N1-200",level:"N1",title:"〜を控えて",summary:"Pola 〜を控えて untuk level N1, dengan contoh penggunaan dalam konteks sekolah, kantor, layanan publik, dan kehidupan sehari-hari di Jepang.",groups:[
    {name:"〜を控えて",description:"Contoh penggunaan 〜を控えて dalam konteks alami sehari-hari di Jepang.",sentences:[
      {jp:"地域のイベントを控えて、近所の人と少しずつ顔見知りになった。",kana:"ちいきのいべんとをひかえて、きんじょのにんとすこしずつかおみしりになった。",romaji:"Chiiki no ibento wo hikae te, kinjo no nin to sukoshi zutsu kaomishiri ninatta.",meaning:"Melalui acara lingkungan, saya perlahan mulai mengenal orang-orang sekitar."},
      {jp:"先輩との会話を控えて、就職活動の流れが具体的に見えてきた。",kana:"せんぱいとのかいわをひかえて、しゅうしょくかつどうのながれがぐたいてきにみえてきた。",romaji:"Senpai tono kaiwa wo hikae te, shuushokukatsudou no nagare ga gutaiteki ni mie tekita.",meaning:"Melalui percakapan dengan senior, alur mencari kerja jadi terasa lebih jelas."},
      {jp:"実習を控えて、教室では分からなかった課題にも気づいた。",kana:"じっしゅうをひかえて、きょうしつではわからなかったかだいにもきづいた。",romaji:"Jisshuu wo hikae te, kyoushitsu deha waka ranakatta kadai nimo kizu ita.",meaning:"Melalui praktik lapangan, saya menyadari tantangan yang tidak terlihat di kelas."},
      {jp:"この資料を控えて、学校側の考え方を理解してほしい。",kana:"このしりょうをひかえて、がっこうがわのかんがえかたをりかいしてほしい。",romaji:"Kono shiryou wo hikae te, gakkougawa no kangaekata wo rikai shitehoshii.",meaning:"Melalui materi ini, saya ingin Anda memahami cara pandang pihak sekolah."},
      {jp:"商店街の取り組みを控えて、地域全体の雰囲気も変わってきた。",kana:"しょうてんがいのとりくみをひかえて、ちいきぜんたいのふんいきもかわってきた。",romaji:"Shoutengai no torikumi wo hikae te, chiiki zentai no fun'iki mo kawa ttekita.",meaning:"Melalui upaya area pertokoan, suasana seluruh lingkungan juga mulai berubah."}
    ]}
  ]},

  // ── GR-N1-201: 〜を踏まえて ──
  {id:"GR-N1-201",level:"N1",title:"〜を踏まえて",summary:"Pola 〜を踏まえて untuk level N1, dengan contoh penggunaan dalam konteks sekolah, kantor, layanan publik, dan kehidupan sehari-hari di Jepang.",groups:[
    {name:"〜を踏まえて",description:"Contoh penggunaan 〜を踏まえて dalam konteks alami sehari-hari di Jepang.",sentences:[
      {jp:"地域のイベントを踏まえて、近所の人と少しずつ顔見知りになった。",kana:"ちいきのいべんとをふまえて、きんじょのにんとすこしずつかおみしりになった。",romaji:"Chiiki no ibento wo fuma ete, kinjo no nin to sukoshi zutsu kaomishiri ninatta.",meaning:"Melalui acara lingkungan, saya perlahan mulai mengenal orang-orang sekitar."},
      {jp:"先輩との会話を踏まえて、就職活動の流れが具体的に見えてきた。",kana:"せんぱいとのかいわをふまえて、しゅうしょくかつどうのながれがぐたいてきにみえてきた。",romaji:"Senpai tono kaiwa wo fuma ete, shuushokukatsudou no nagare ga gutaiteki ni mie tekita.",meaning:"Melalui percakapan dengan senior, alur mencari kerja jadi terasa lebih jelas."},
      {jp:"実習を踏まえて、教室では分からなかった課題にも気づいた。",kana:"じっしゅうをふまえて、きょうしつではわからなかったかだいにもきづいた。",romaji:"Jisshuu wo fuma ete, kyoushitsu deha waka ranakatta kadai nimo kizu ita.",meaning:"Melalui praktik lapangan, saya menyadari tantangan yang tidak terlihat di kelas."},
      {jp:"この資料を踏まえて、学校側の考え方を理解してほしい。",kana:"このしりょうをふまえて、がっこうがわのかんがえかたをりかいしてほしい。",romaji:"Kono shiryou wo fuma ete, gakkougawa no kangaekata wo rikai shitehoshii.",meaning:"Melalui materi ini, saya ingin Anda memahami cara pandang pihak sekolah."},
      {jp:"商店街の取り組みを踏まえて、地域全体の雰囲気も変わってきた。",kana:"しょうてんがいのとりくみをふまえて、ちいきぜんたいのふんいきもかわってきた。",romaji:"Shoutengai no torikumi wo fuma ete, chiiki zentai no fun'iki mo kawa ttekita.",meaning:"Melalui upaya area pertokoan, suasana seluruh lingkungan juga mulai berubah."}
    ]}
  ]},

  // ── GR-N1-202: 〜を経て ──
  {id:"GR-N1-202",level:"N1",title:"〜を経て",summary:"Pola 〜を経て untuk level N1, dengan contoh penggunaan dalam konteks sekolah, kantor, layanan publik, dan kehidupan sehari-hari di Jepang.",groups:[
    {name:"〜を経て",description:"Contoh penggunaan 〜を経て dalam konteks alami sehari-hari di Jepang.",sentences:[
      {jp:"地域のイベントを経て、近所の人と少しずつ顔見知りになった。",kana:"ちいきのいべんとをへて、きんじょのにんとすこしずつかおみしりになった。",romaji:"Chiiki no ibento wo hete, kinjo no nin to sukoshi zutsu kaomishiri ninatta.",meaning:"Melalui acara lingkungan, saya perlahan mulai mengenal orang-orang sekitar."},
      {jp:"先輩との会話を経て、就職活動の流れが具体的に見えてきた。",kana:"せんぱいとのかいわをへて、しゅうしょくかつどうのながれがぐたいてきにみえてきた。",romaji:"Senpai tono kaiwa wo hete, shuushokukatsudou no nagare ga gutaiteki ni mie tekita.",meaning:"Melalui percakapan dengan senior, alur mencari kerja jadi terasa lebih jelas."},
      {jp:"実習を経て、教室では分からなかった課題にも気づいた。",kana:"じっしゅうをへて、きょうしつではわからなかったかだいにもきづいた。",romaji:"Jisshuu wo hete, kyoushitsu deha waka ranakatta kadai nimo kizu ita.",meaning:"Melalui praktik lapangan, saya menyadari tantangan yang tidak terlihat di kelas."},
      {jp:"この資料を経て、学校側の考え方を理解してほしい。",kana:"このしりょうをへて、がっこうがわのかんがえかたをりかいしてほしい。",romaji:"Kono shiryou wo hete, gakkougawa no kangaekata wo rikai shitehoshii.",meaning:"Melalui materi ini, saya ingin Anda memahami cara pandang pihak sekolah."},
      {jp:"商店街の取り組みを経て、地域全体の雰囲気も変わってきた。",kana:"しょうてんがいのとりくみをへて、ちいきぜんたいのふんいきもかわってきた。",romaji:"Shoutengai no torikumi wo hete, chiiki zentai no fun'iki mo kawa ttekita.",meaning:"Melalui upaya area pertokoan, suasana seluruh lingkungan juga mulai berubah."}
    ]}
  ]},

  // ── GR-N1-203: 〜をもって / をもちまして ──
  {id:"GR-N1-203",level:"N1",title:"〜をもって / をもちまして",summary:"Pola 〜をもって / をもちまして untuk level N1, dengan contoh penggunaan dalam konteks sekolah, kantor, layanan publik, dan kehidupan sehari-hari di Jepang.",groups:[
    {name:"〜をもって / をもちまして",description:"Contoh penggunaan 〜をもって / をもちまして dalam konteks alami sehari-hari di Jepang.",sentences:[
      {jp:"地域のイベントをもって、近所の人と少しずつ顔見知りになった。",kana:"ちいきのいべんとをもって、きんじょのにんとすこしずつかおみしりになった。",romaji:"Chiiki no ibento womotte, kinjo no nin to sukoshi zutsu kaomishiri ninatta.",meaning:"Melalui acara lingkungan, saya perlahan mulai mengenal orang-orang sekitar."},
      {jp:"先輩との会話をもって、就職活動の流れが具体的に見えてきた。",kana:"せんぱいとのかいわをもって、しゅうしょくかつどうのながれがぐたいてきにみえてきた。",romaji:"Senpai tono kaiwa womotte, shuushokukatsudou no nagare ga gutaiteki ni mie tekita.",meaning:"Melalui percakapan dengan senior, alur mencari kerja jadi terasa lebih jelas."},
      {jp:"実習をもって、教室では分からなかった課題にも気づいた。",kana:"じっしゅうをもって、きょうしつではわからなかったかだいにもきづいた。",romaji:"Jisshuu womotte, kyoushitsu deha waka ranakatta kadai nimo kizu ita.",meaning:"Melalui praktik lapangan, saya menyadari tantangan yang tidak terlihat di kelas."},
      {jp:"この資料をもって、学校側の考え方を理解してほしい。",kana:"このしりょうをもって、がっこうがわのかんがえかたをりかいしてほしい。",romaji:"Kono shiryou womotte, gakkougawa no kangaekata wo rikai shitehoshii.",meaning:"Melalui materi ini, saya ingin Anda memahami cara pandang pihak sekolah."},
      {jp:"商店街の取り組みをもって、地域全体の雰囲気も変わってきた。",kana:"しょうてんがいのとりくみをもって、ちいきぜんたいのふんいきもかわってきた。",romaji:"Shoutengai no torikumi womotte, chiiki zentai no fun'iki mo kawa ttekita.",meaning:"Melalui upaya area pertokoan, suasana seluruh lingkungan juga mulai berubah."}
    ]}
  ]},

  // ── GR-N1-204: 〜をものともせずに ──
  {id:"GR-N1-204",level:"N1",title:"〜をものともせずに",summary:"Pola 〜をものともせずに untuk level N1, dengan contoh penggunaan dalam konteks sekolah, kantor, layanan publik, dan kehidupan sehari-hari di Jepang.",groups:[
    {name:"〜をものともせずに",description:"Contoh penggunaan 〜をものともせずに dalam konteks alami sehari-hari di Jepang.",sentences:[
      {jp:"地域のイベントをものともせずに、近所の人と少しずつ顔見知りになった。",kana:"ちいきのいべんとをものともせずに、きんじょのにんとすこしずつかおみしりになった。",romaji:"Chiiki no ibento womonotomosezuni, kinjo no nin to sukoshi zutsu kaomishiri ninatta.",meaning:"Melalui acara lingkungan, saya perlahan mulai mengenal orang-orang sekitar."},
      {jp:"先輩との会話をものともせずに、就職活動の流れが具体的に見えてきた。",kana:"せんぱいとのかいわをものともせずに、しゅうしょくかつどうのながれがぐたいてきにみえてきた。",romaji:"Senpai tono kaiwa womonotomosezuni, shuushokukatsudou no nagare ga gutaiteki ni mie tekita.",meaning:"Melalui percakapan dengan senior, alur mencari kerja jadi terasa lebih jelas."},
      {jp:"実習をものともせずに、教室では分からなかった課題にも気づいた。",kana:"じっしゅうをものともせずに、きょうしつではわからなかったかだいにもきづいた。",romaji:"Jisshuu womonotomosezuni, kyoushitsu deha waka ranakatta kadai nimo kizu ita.",meaning:"Melalui praktik lapangan, saya menyadari tantangan yang tidak terlihat di kelas."},
      {jp:"この資料をものともせずに、学校側の考え方を理解してほしい。",kana:"このしりょうをものともせずに、がっこうがわのかんがえかたをりかいしてほしい。",romaji:"Kono shiryou womonotomosezuni, gakkougawa no kangaekata wo rikai shitehoshii.",meaning:"Melalui materi ini, saya ingin Anda memahami cara pandang pihak sekolah."},
      {jp:"商店街の取り組みをものともせずに、地域全体の雰囲気も変わってきた。",kana:"しょうてんがいのとりくみをものともせずに、ちいきぜんたいのふんいきもかわってきた。",romaji:"Shoutengai no torikumi womonotomosezuni, chiiki zentai no fun'iki mo kawa ttekita.",meaning:"Melalui upaya area pertokoan, suasana seluruh lingkungan juga mulai berubah."}
    ]}
  ]},

  // ── GR-N1-205: 〜を余儀なくされる ──
  {id:"GR-N1-205",level:"N1",title:"〜を余儀なくされる",summary:"Pola 〜を余儀なくされる untuk level N1, dengan contoh penggunaan dalam konteks sekolah, kantor, layanan publik, dan kehidupan sehari-hari di Jepang.",groups:[
    {name:"〜を余儀なくされる",description:"Contoh penggunaan 〜を余儀なくされる dalam konteks alami sehari-hari di Jepang.",sentences:[
      {jp:"地域のイベントを余儀なくされる、近所の人と少しずつ顔見知りになった。",kana:"ちいきのいべんとをよぎなくされる、きんじょのにんとすこしずつかおみしりになった。",romaji:"Chiiki no ibento wo yogina kusareru, kinjo no nin to sukoshi zutsu kaomishiri ninatta.",meaning:"Melalui acara lingkungan, saya perlahan mulai mengenal orang-orang sekitar."},
      {jp:"先輩との会話を余儀なくされる、就職活動の流れが具体的に見えてきた。",kana:"せんぱいとのかいわをよぎなくされる、しゅうしょくかつどうのながれがぐたいてきにみえてきた。",romaji:"Senpai tono kaiwa wo yogina kusareru, shuushokukatsudou no nagare ga gutaiteki ni mie tekita.",meaning:"Melalui percakapan dengan senior, alur mencari kerja jadi terasa lebih jelas."},
      {jp:"実習を余儀なくされる、教室では分からなかった課題にも気づいた。",kana:"じっしゅうをよぎなくされる、きょうしつではわからなかったかだいにもきづいた。",romaji:"Jisshuu wo yogina kusareru, kyoushitsu deha waka ranakatta kadai nimo kizu ita.",meaning:"Melalui praktik lapangan, saya menyadari tantangan yang tidak terlihat di kelas."},
      {jp:"この資料を余儀なくされる、学校側の考え方を理解してほしい。",kana:"このしりょうをよぎなくされる、がっこうがわのかんがえかたをりかいしてほしい。",romaji:"Kono shiryou wo yogina kusareru, gakkougawa no kangaekata wo rikai shitehoshii.",meaning:"Melalui materi ini, saya ingin Anda memahami cara pandang pihak sekolah."},
      {jp:"商店街の取り組みを余儀なくされる、地域全体の雰囲気も変わってきた。",kana:"しょうてんがいのとりくみをよぎなくされる、ちいきぜんたいのふんいきもかわってきた。",romaji:"Shoutengai no torikumi wo yogina kusareru, chiiki zentai no fun'iki mo kawa ttekita.",meaning:"Melalui upaya area pertokoan, suasana seluruh lingkungan juga mulai berubah."}
    ]}
  ]},

  // ── GR-N1-206: 〜をよそに ──
  {id:"GR-N1-206",level:"N1",title:"〜をよそに",summary:"Pola 〜をよそに untuk level N1, dengan contoh penggunaan dalam konteks sekolah, kantor, layanan publik, dan kehidupan sehari-hari di Jepang.",groups:[
    {name:"〜をよそに",description:"Contoh penggunaan 〜をよそに dalam konteks alami sehari-hari di Jepang.",sentences:[
      {jp:"地域のイベントをよそに、近所の人と少しずつ顔見知りになった。",kana:"ちいきのいべんとをよそに、きんじょのにんとすこしずつかおみしりになった。",romaji:"Chiiki no ibento woyosoni, kinjo no nin to sukoshi zutsu kaomishiri ninatta.",meaning:"Melalui acara lingkungan, saya perlahan mulai mengenal orang-orang sekitar."},
      {jp:"先輩との会話をよそに、就職活動の流れが具体的に見えてきた。",kana:"せんぱいとのかいわをよそに、しゅうしょくかつどうのながれがぐたいてきにみえてきた。",romaji:"Senpai tono kaiwa woyosoni, shuushokukatsudou no nagare ga gutaiteki ni mie tekita.",meaning:"Melalui percakapan dengan senior, alur mencari kerja jadi terasa lebih jelas."},
      {jp:"実習をよそに、教室では分からなかった課題にも気づいた。",kana:"じっしゅうをよそに、きょうしつではわからなかったかだいにもきづいた。",romaji:"Jisshuu woyosoni, kyoushitsu deha waka ranakatta kadai nimo kizu ita.",meaning:"Melalui praktik lapangan, saya menyadari tantangan yang tidak terlihat di kelas."},
      {jp:"この資料をよそに、学校側の考え方を理解してほしい。",kana:"このしりょうをよそに、がっこうがわのかんがえかたをりかいしてほしい。",romaji:"Kono shiryou woyosoni, gakkougawa no kangaekata wo rikai shitehoshii.",meaning:"Melalui materi ini, saya ingin Anda memahami cara pandang pihak sekolah."},
      {jp:"商店街の取り組みをよそに、地域全体の雰囲気も変わってきた。",kana:"しょうてんがいのとりくみをよそに、ちいきぜんたいのふんいきもかわってきた。",romaji:"Shoutengai no torikumi woyosoni, chiiki zentai no fun'iki mo kawa ttekita.",meaning:"Melalui upaya area pertokoan, suasana seluruh lingkungan juga mulai berubah."}
    ]}
  ]},

  // ── GR-N1-207: 〜んがために ──
  {id:"GR-N1-207",level:"N1",title:"〜んがために",summary:"Pola 〜んがために untuk level N1, dengan contoh penggunaan dalam konteks sekolah, kantor, layanan publik, dan kehidupan sehari-hari di Jepang.",groups:[
    {name:"〜んがために",description:"Contoh penggunaan 〜んがために dalam konteks alami sehari-hari di Jepang.",sentences:[
      {jp:"この前の説明会では、んがためにという表現も実際の場面で使われていた。",kana:"このまえのせつめいかいでは、んがためにというひょうげんもじっさいのばめんでつかわれていた。",romaji:"Kono mae no setsumeikai deha, ngatamenitoiu hyougen mo jissai no bamen de tsukawa reteita.",meaning:"Pada sesi penjelasan sebelumnya, ungkapan ini juga dipakai dalam situasi nyata."},
      {jp:"区役所や学校でも、んがためにのような言い方を見かけることがある。",kana:"くやくしょやがっこうでも、んがためにのようないいかたをみかけることがある。",romaji:"Kuyakusho ya gakkou demo, ngatameninoyouna iikata wo mikake rukotogaaru.",meaning:"Di balai kota maupun sekolah, kadang terlihat cara ungkap seperti ini."},
      {jp:"職場の会話では、んがためにを使うと少し自然な言い方になる。",kana:"しょくばのかいわでは、んがためにをつかうとすこししぜんないいかたになる。",romaji:"Shokuba no kaiwa deha, ngatameniwo tsukau to sukoshi shizen na iikata ninaru.",meaning:"Dalam percakapan kerja, memakai pola ini bisa membuat ungkapan terdengar lebih alami."},
      {jp:"駅前の店で店員さんが話しているのを聞いて、んがためにの使い方がよく分かった。",kana:"えきまえのみせでてんいんさんがはなしているのをきいて、んがためにのつかいかたがよくわかった。",romaji:"Ekimae no mise de ten'in sanga hanashi teirunowo kii te, ngatamenino tsukaikata gayoku waka tta.",meaning:"Saat mendengar staf toko di depan stasiun berbicara, saya jadi lebih paham cara pakai pola ini."},
      {jp:"授業だけでなく、日常の場面でもんがためには意外とよく出てくる。",kana:"じゅぎょうだけでなく、にちじょうのばめんでもんがためにはいがいとよくでてくる。",romaji:"Jugyou dakedenaku, nichijou no bamen demongatameniha igai toyoku dete kuru.",meaning:"Bukan hanya di kelas, pola ini ternyata cukup sering muncul dalam keseharian."}
    ]}
  ]},

  // ── GR-N1-208: 〜んばかりに ──
  {id:"GR-N1-208",level:"N1",title:"〜んばかりに",summary:"Pola 〜んばかりに untuk level N1, dengan contoh penggunaan dalam konteks sekolah, kantor, layanan publik, dan kehidupan sehari-hari di Jepang.",groups:[
    {name:"〜んばかりに",description:"Contoh penggunaan 〜んばかりに dalam konteks alami sehari-hari di Jepang.",sentences:[
      {jp:"朝から電車が止まっていたんばかりに、説明会の開始に間に合わなかった。",kana:"あさからでんしゃがとまっていたんばかりに、せつめいかいのかいしにまにあわなかった。",romaji:"Asa kara densha ga toma tteita nbakarini, setsumeikai no kaishi ni maniawa nakatta.",meaning:"Karena kereta berhenti sejak pagi, saya tidak sempat datang tepat waktu ke sesi penjelasan."},
      {jp:"必要書類を一枚忘れてしまったんばかりに、その日に手続きが終わらなかった。",kana:"ひつようしょるいをいちまいわすれてしまったんばかりに、そのにちにてつづきがおわらなかった。",romaji:"Hitsuyoushorui wo ichimai wasure teshimatta nbakarini, sono nichi ni tetsuzuki ga owa ranakatta.",meaning:"Karena saya lupa satu lembar dokumen, prosesnya tidak selesai hari itu."},
      {jp:"夜中まで課題をしていたんばかりに、午前の授業で集中できなかった。",kana:"よなかまでかだいをしていたんばかりに、ごぜんのじゅぎょうでしゅうちゅうできなかった。",romaji:"Yonaka made kadai woshiteita nbakarini, gozen no jugyou de shuuchuu dekinakatta.",meaning:"Karena mengerjakan tugas sampai larut malam, saya tidak bisa fokus di kelas pagi."},
      {jp:"店の前で工事が続いていたんばかりに、昼の時間帯でも客足が少なかった。",kana:"みせのまえでこうじがつづいていたんばかりに、ひるのじかんたいでもきゃくあしがすくなかった。",romaji:"Mise no mae de kouji ga tsuzui teita nbakarini, hiru no jikantai demo kyakuashi ga sukunaka tta.",meaning:"Karena ada konstruksi terus di depan toko, pelanggan tetap sedikit bahkan saat jam makan siang."},
      {jp:"思ったより雨が強かったんばかりに、商店街のイベントは途中で中止になった。",kana:"おもったよりあめがつよかったんばかりに、しょうてんがいのいべんとはとちゅうでちゅうしになった。",romaji:"Omotta yori ame ga tsuyoka tta nbakarini, shoutengai no ibento ha tochuu de chuushi ninatta.",meaning:"Karena hujan lebih deras daripada dugaan, acara di area pertokoan dihentikan di tengah jalan."}
    ]}
  ]}
];
