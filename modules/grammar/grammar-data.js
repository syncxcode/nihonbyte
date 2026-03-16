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
  {id:"GR-N3-01",level:"N3",title:"〜おかげで",summary:"Menyatakan sebab yang membawa hasil baik atau hal yang disyukuri, artinya berkat sesuatu. Umumnya dipakai untuk hasil positif, bantuan orang lain, kondisi yang menguntungkan, atau kejadian yang akhirnya terasa membawa manfaat.",groups:[{name:"〜おかげで",description:"[Penyebab/alasan] + おかげで + [hasil baik]. Nuansanya positif atau setidaknya mengandung rasa syukur. Untuk hasil buruk, biasanya tidak dipakai.",sentences:[
    {jp:"留学したばかりのころ、近所のパン屋さんの奥さんがいつも気にかけてくれたおかげで、初めての冬もあまり寂しくなかった。",kana:"りゅうがくしたばかりのころ、きんじょのぱんやさんのおくさんがいつもきにかけてくれたおかげで、はじめてのふゆもあまりさびしくなかった。",romaji:"Ryuugaku shita bakari no koro, kinjo no pan'ya-san no okusan ga itsumo ki ni kakete kureta okage de, hajimete no fuyu mo amari sabishikunakatta.",meaning:"Waktu baru mulai tinggal di luar negeri, berkat istri pemilik toko roti dekat rumah yang selalu perhatian, musim dingin pertama saya tidak terasa terlalu sepi."},
    {jp:"朝のうちに資料を共有しておいてくれたおかげで、会議では細かい説明よりも議論そのものに集中できた。",kana:"あさのうちにしりょうをきょうゆうしておいてくれたおかげで、かいぎではこまかいせつめいよりもぎろんそのものにしゅうちゅうできた。",romaji:"Asa no uchi ni shiryou o kyouyuu shite oite kureta okage de, kaigi de wa komakai setsumei yori mo giron sono mono ni shuuchuu dekita.",meaning:"Berkat dokumennya sudah dibagikan sejak pagi, saat rapat saya bisa fokus ke diskusinya sendiri, bukan ke penjelasan detail yang dasar."},
    {jp:"毎日少しずつでも書き続けたおかげで、卒論は締め切り直前に徹夜しないで提出できた。",kana:"まいにちすこしずつでもかきつづけたおかげで、そつろんはしめきりちょくぜんにてつやしないでていしゅつできた。",romaji:"Mainichi sukoshizutsu demo kakitsuzuketa okage de, sotsuron wa shimekiri chokuzen ni tetsuya shinai de teishutsu dekita.",meaning:"Berkat terus menulis sedikit demi sedikit setiap hari, skripsi saya bisa dikumpulkan tanpa begadang mepet deadline."},
    {jp:"子どものころから父が本を読む楽しさを教えてくれたおかげで、今でも知らない分野を学ぶことにあまり抵抗がない。",kana:"こどものころからちちがほんをよむたのしさをおしえてくれたおかげで、いまでもしらないぶんやをまなぶことにあまりていこうがない。",romaji:"Kodomo no koro kara chichi ga hon o yomu tanoshisa o oshiete kureta okage de, ima demo shiranai bun'ya o manabu koto ni amari teikou ga nai.",meaning:"Berkat ayah mengenalkan serunya membaca sejak kecil, sampai sekarang saya tidak terlalu takut mempelajari bidang yang belum saya kenal."},
    {jp:"電車が少し遅れたおかげで、駅で偶然高校時代の友達に再会できて、そのまま何時間も話し込んでしまった。",kana:"でんしゃがすこしおくれたおかげで、えきでぐうぜんこうこうじだいのともだちにさいかいできて、そのままなんじかんもはなしこんでしまった。",romaji:"Densha ga sukoshi okureta okage de, eki de guuzen koukou jidai no tomodachi ni saikai dekite, sono mama nanjikan mo hanashikonde shimatta.",meaning:"Berkat keretanya sedikit terlambat, saya malah bisa ketemu lagi secara tidak sengaja dengan teman SMA di stasiun, lalu kami ngobrol berjam-jam."}
  ]}]},

  {id:"GR-N3-02",level:"N3",title:"〜せいで",summary:"Menyatakan sebab yang membawa hasil buruk, merepotkan, atau mengecewakan. Nuansanya menyalahkan situasi, orang, atau kondisi tertentu.",groups:[
    {name:"〜せいで",description:"[Penyebab] + せいで + [hasil buruk]. Dipakai saat ingin menonjolkan dampak negatif atau rasa kesal.",sentences:[
      {jp:"寝坊したせいで、朝のミーティングに五分遅れてしまった。",kana:"ねぼう した せいで、あさ の みーてぃんぐ に ごふん おくれて しまった。",romaji:"Nebou shita seide,asa no miiteingu ni gofun okurete shimatta.",meaning:"Karena bangun kesiangan, saya jadi terlambat lima menit untuk meeting pagi."},
      {jp:"急な雨のせいで、駅まで歩くだけで靴がびしょびしょになった。",kana:"きゅうな あめ の せいで、えき まで あるく だけ で くつ が びしょびしょ に なった。",romaji:"Kyuuna ame no seide,eki made aruku dake de kutsu ga bishobisho ni natta.",meaning:"Karena hujan mendadak, hanya jalan ke stasiun saja sepatu saya sudah basah kuyup."},
      {jp:"隣の工事の音のせいで、午後はぜんぜん集中できなかった。",kana:"となり の こうじ の おと の せいで、ごご は ぜんぜん しゅうちゅう できなかった。",romaji:"Tonari no kouji no oto no seide,gogo wa zenzen shuuchuu dekinakatta.",meaning:"Karena suara proyek di sebelah, sore tadi saya sama sekali tidak bisa fokus."},
      {jp:"スマホの充電が切れたせいで、待ち合わせの連絡が見られなかった。",kana:"すまほ の じゅうでん が きれた せいで、まちあわせ の れんらく が みられなかった。",romaji:"Sumaho no juuden ga kireta seide,machiawase no renraku ga mirarenakatta.",meaning:"Karena baterai HP habis, saya tidak bisa melihat pesan soal janji ketemu."},
      {jp:"彼の説明があいまいだったせいで、みんな違う作業を始めてしまった。",kana:"かれ の せつめい が あいまい だった せいで、みんな ちがう さぎょう を はじめて しまった。",romaji:"Kare no setsumei ga aimai datta seide,minna chigau sagyou o hajimete shimatta.",meaning:"Karena penjelasannya dia kurang jelas, semua orang malah mulai mengerjakan hal yang berbeda-beda."}
    ]}
  ]},
  {id:"GR-N3-03",level:"N3",title:"〜からこそ",summary:"Menyatakan alasan yang justru paling kuat dan paling penting. Artinya kurang lebih, justru karena itulah, makanya hal berikut menjadi mungkin atau bermakna.",groups:[
    {name:"〜からこそ",description:"[Alasan] + からこそ + [hal penting]. Dipakai untuk menekankan alasan inti, bukan alasan biasa.",sentences:[
      {jp:"失敗した経験があるからこそ、今の私は準備を大切にしている。",kana:"しっぱい した けいけん が ある からこそ、いま の わたし は じゅんび を たいせつ に している。",romaji:"Shippai shita keiken ga aru karakoso,ima no watashi wa junbi o taisetsu ni shiteiru.",meaning:"Justru karena pernah gagal, sekarang saya sangat menghargai persiapan."},
      {jp:"一人で暮らしているからこそ、体調管理には気をつけるようになった。",kana:"ひとり で くらしている からこそ、たいちょう かんり に は き を つける よう に なった。",romaji:"Hitori de kurashiteiru karakoso,taichou kanri ni wa ki o tsukeru you ni natta.",meaning:"Justru karena tinggal sendiri, saya jadi lebih hati-hati menjaga kondisi badan."},
      {jp:"気心の知れた友達だからこそ、遠慮せずに本音で話せる。",kana:"きごころ の しれた ともだち だからこそ、えんりょ せず に ほんね で はなせる。",romaji:"Kigokoro no shireta tomodachi dakarakoso,enryo sezu ni honne de hanaseru.",meaning:"Justru karena dia teman dekat yang benar-benar paham saya, saya bisa bicara terus terang tanpa sungkan."},
      {jp:"忙しい時期だからこそ、チームで細かく共有する必要がある。",kana:"いそがしい じき だからこそ、ちーむ で こまかく きょうゆう する ひつよう が ある。",romaji:"Isogashii jiki dakarakoso,chiimu de komakaku kyouyuu suru hitsuyou ga aru.",meaning:"Justru karena sedang masa sibuk, tim perlu sering berbagi info dengan detail."},
      {jp:"日本で働きたいからこそ、敬語もごまかさずに勉強したい。",kana:"にほん で はたらきたい からこそ、けいご も ごまかさず に べんきょう したい。",romaji:"Nihon de hatarakitai karakoso,keigo mo gomakasazu ni benkyou shitai.",meaning:"Justru karena ingin bekerja di Jepang, saya juga ingin belajar keigo dengan serius, bukan asal lewat."}
    ]}
  ]},
  {id:"GR-N3-04",level:"N3",title:"〜によって①",summary:"Menyatakan sebab atau penyebab suatu hasil, terutama dalam kalimat yang terdengar formal, penjelasan, atau berita.",groups:[
    {name:"原因",description:"[Hasil] + によって + [penyebab]. Sering dipakai dalam penjelasan formal, laporan, atau berita.",sentences:[
      {jp:"台風によって、週末のイベントは中止になった。",kana:"たいふう によって、しゅうまつ の いべんと は ちゅうし に なった。",romaji:"Taifuu niyotte,shuumatsu no ibento wa chuushi ni natta.",meaning:"Karena topan, acara akhir pekan dibatalkan."},
      {jp:"システム障害によって、一部のサービスが利用できなくなっています。",kana:"しすてむ しょうがい によって、いちぶ の さーびす が りよう できなく なって います。",romaji:"Shisutemu shougai niyotte,ichibu no saabisu ga riyou dekinaku natte imasu.",meaning:"Karena gangguan sistem, sebagian layanan sedang tidak bisa digunakan."},
      {jp:"大雪によって、高速道路の一部が通行止めになったらしい。",kana:"おおゆき によって、こうそく どうろ の いちぶ が つうこうどめ に なった らしい。",romaji:"Ooyuki niyotte,kousoku douro no ichibu ga tsuukoudome ni natta rashii.",meaning:"Karena salju lebat, sebagian jalan tol kabarnya ditutup."},
      {jp:"この絵は光の当たり方によって、見え方がかなり変わる。",kana:"この え は ひかり の あたりかた によって、みえかた が かなり かわる。",romaji:"Kono e wa hikari no atarikata niyotte,miekata ga kanari kawaru.",meaning:"Lukisan ini terlihat cukup berbeda tergantung cara cahaya mengenainya."},
      {jp:"小さな思い違いによって、長く気まずい空気が続いてしまった。",kana:"ちいさな おもいちがい によって、ながく きまずい くうき が つづいて しまった。",romaji:"Chiisana omoichigai niyotte,nagaku kimazui kuuki ga tsuzuite shimatta.",meaning:"Karena salah paham kecil, suasana canggung berlangsung cukup lama."}
    ]}
  ]},
  {id:"GR-N3-05",level:"N3",title:"〜(んだ)もの / 〜もん",summary:"Menyatakan alasan atau pembelaan diri dengan nuansa pribadi. もの lebih netral, もん lebih santai dan lisan.",groups:[
    {name:"〜んだもの",description:"Menjelaskan alasan dengan nada pribadi, kadang terdengar seperti membela diri atau mengeluh halus.",sentences:[
      {jp:"そんなに急に誘われても、今日は残業があるんだもの。",kana:"そんな に きゅう に さそわれても、きょう は ざんぎょう が ある んだもの。",romaji:"Sonna ni kyuu ni sasowaretemo,kyou wa zangyou ga aru ndamono.",meaning:"Mau diajak mendadak begitu juga susah, hari ini saya memang lembur."},
      {jp:"彼が何も言わずに帰ったから、心配になるんだもの。",kana:"かれ が なにも いわず に かえった から、しんぱい に なる んだもの。",romaji:"Kare ga nanimo iwazu ni kaetta kara,shinpai ni naru ndamono.",meaning:"Karena dia pulang tanpa bilang apa-apa, wajar kalau saya jadi khawatir."},
      {jp:"この店の限定パフェ、おいしいんだもの。並んでも食べたいよ。",kana:"この みせ の げんてい ぱふぇ、おいしい んだもの。ならんでも たべたい よ。",romaji:"Kono mise no gentei pafue,oishii ndamono.narandemo tabetai yo.",meaning:"Soalnya parfait edisi terbatas di toko ini enak, jadi saya tetap mau meski harus antre."},
      {jp:"まだ始めたばかりなんだもの、完璧にできなくても仕方ないよ。",kana:"まだ はじめた ばかり なんだもの、かんぺき に できなくても しかたない よ。",romaji:"Mada hajimeta bakari nandamono,kanpeki ni dekinakutemo shikatanai yo.",meaning:"Namanya juga baru mulai, kalau belum bisa sempurna ya wajar."},
      {jp:"だって、本当にその映画が好きなんだもん。何回でも見られる。",kana:"だって、ほんとう に その えいが が すき なんだもん。なんかい でも みられる。",romaji:"Datte,hontou ni sono eiga ga suki nandamon.nankai demo mirareru.",meaning:"Soalnya saya memang suka banget film itu, ditonton berkali-kali pun tetap bisa."}
    ]}
  ]}
,

  {id:"GR-N3-06",level:"N3",title:"〜ことはない",summary:"Menyatakan tidak perlu melakukan sesuatu atau tidak usah terlalu khawatir. Nuansanya menenangkan atau memberi saran.",groups:[
    {name:"〜ことはない",description:"[V辞書形] + ことはない. Artinya tidak perlu sampai melakukan hal itu.",sentences:[
      {jp:"まだ時間はあるから、そんなに急ぐことはないよ。",kana:"まだ じかん は ある から、そんな に いそぐ こと は ない よ。",romaji:"Mada jikan wa aru kara,sonna ni isogu koto wa nai yo.",meaning:"Masih ada waktu, jadi tidak perlu buru-buru begitu."},
      {jp:"一回ミスしたくらいで、そんなに落ち込むことはない。",kana:"いっかい みす した くらい で、そんな に おちこむ こと は ない。",romaji:"Ikkai misu shita kurai de,sonna ni ochikomu koto wa nai.",meaning:"Cuma satu kali salah, jadi tidak perlu sedown itu."},
      {jp:"初めてなんだから、最初から完璧を目指すことはない。",kana:"はじめて なんだ から、さいしょ から かんぺき を めざす こと は ない。",romaji:"Hajimete nanda kara,saisho kara kanpeki o mezasu koto wa nai.",meaning:"Karena ini pertama kalinya, tidak perlu menuntut diri langsung sempurna sejak awal."},
      {jp:"その件ならメールで確認できるし、わざわざ来ることはないです。",kana:"その けん なら めーる で かくにん できる し、わざわざ くる こと は ない です。",romaji:"Sono ken nara meeru de kakunin dekiru shi,wazawaza kuru koto wa nai desu.",meaning:"Kalau soal itu bisa dicek lewat email, jadi tidak perlu datang jauh-jauh."},
      {jp:"周りと比べて焦ることはない、自分のペースで進めばいい。",kana:"まわり と くらべて あせる こと は ない、じぶん の ぺーす で すすめば いい。",romaji:"Mawari to kurabete aseru koto wa nai,jibun no peesu de susumeba ii.",meaning:"Tidak perlu panik karena membandingkan diri dengan orang lain, jalan saja dengan ritme sendiri."}
    ]}
  ]},

  {id:"GR-N3-08",level:"N3",title:"〜ように",summary:"Menyatakan tujuan, harapan, atau usaha agar suatu keadaan bisa terwujud. Sering dipakai dengan kata kerja yang tidak bisa dikendalikan langsung, seperti なる, 見える, 聞こえる, できる.",groups:[
    {name:"〜ように",description:"[Tujuan/harapan] + ように. Dipakai untuk makna agar, supaya, semoga.",sentences:[
      {jp:"漢字が読めるように、毎朝少しずつ新聞を読むことにしている。",kana:"かんじ が よめる ように、まいあさ すこしずつ しんぶん を よむ こと に している。",romaji:"Kanji ga yomeru youni,maiasa sukoshizutsu shinbun o yomu koto ni shiteiru.",meaning:"Supaya bisa membaca kanji, saya membiasakan diri membaca koran sedikit demi sedikit setiap pagi."},
      {jp:"忘れないように、気づいたことはすぐメモしている。",kana:"わすれない ように、きづいた こと は すぐ めも している。",romaji:"Wasurenai youni,kizuita koto wa sugu memo shiteiru.",meaning:"Supaya tidak lupa, hal-hal yang terpikir langsung saya catat."},
      {jp:"会場の後ろの人にも聞こえるように、少し大きめの声で話した。",kana:"かいじょう の うしろ の ひと に も きこえる ように、すこし おおきめ の こえ で はなした。",romaji:"Kaijou no ushiro no hito ni mo kikoeru youni,sukoshi ookime no koe de hanashita.",meaning:"Supaya orang-orang di belakang ruangan juga bisa mendengar, saya bicara dengan suara agak lebih keras."},
      {jp:"来月までに一人でも出張できるように、今のうちに流れを覚えたい。",kana:"らいげつ まで に ひとり でも しゅっちょう できる ように、いま の うち に ながれ を おぼえたい。",romaji:"Raigetsu made ni hitori demo shucchou dekiru youni,ima no uchi ni nagare o oboetai.",meaning:"Supaya bulan depan saya sudah bisa pergi dinas sendiri, saya ingin hafal alurnya dari sekarang."},
      {jp:"みんなの願いがかないますように、神社で静かに手を合わせた。",kana:"みんな の ねがい が かない ます ように、じんじゃ で しずか に て を あわせた。",romaji:"Minna no negai ga kanai masu youni,jinja de shizuka ni te o awaseta.",meaning:"Saya menangkupkan tangan dengan tenang di kuil, berharap semoga keinginan semua orang terkabul."}
    ]}
  ]},

  {id:"GR-N3-09",level:"N3",title:"〜こと",summary:"Menyatakan aturan, catatan, atau instruksi secara tertulis dan formal. Sering dipakai di pengumuman, tata tertib, atau memo.",groups:[
    {name:"〜こと",description:"[V辞書形 / Vない形] + こと. Bentuk resmi untuk aturan atau instruksi.",sentences:[
      {jp:"会場内では、ほかのお客様の迷惑になる行為をしないこと。",kana:"かいじょうない では、ほか の おきゃくさま の めいわく に なる こうい を しない こと。",romaji:"Kaijounai deha,hoka no okyakusama no meiwaku ni naru koui o shinai koto.",meaning:"Di dalam venue, jangan melakukan hal yang mengganggu pengunjung lain."},
      {jp:"レポートは金曜日の午後五時までに提出すること。",kana:"れぽーと は きんようび の ごご ごじ まで に ていしゅつ する こと。",romaji:"Repooto wa kinyoubi no gogo goji made ni teishutsu suru koto.",meaning:"Laporan harus dikumpulkan paling lambat Jumat jam lima sore."},
      {jp:"体調が悪い場合は、無理をせず早めに申し出ること。",kana:"たいちょう が わるい ばあい は、むり を せず はやめ に もうしでる こと。",romaji:"Taichou ga warui baai ha,muri o sezu hayame ni moushideru koto.",meaning:"Kalau kondisi badan tidak baik, laporkan lebih awal tanpa memaksakan diri."},
      {jp:"図書館の本には書き込みをしないこと。",kana:"としょかん の ほん に は かきこみ を しない こと。",romaji:"Toshokan no hon ni wa kakikomi o shinai koto.",meaning:"Jangan mencoret-coret buku perpustakaan."},
      {jp:"試験中にスマホを机の上に置かないこと。",kana:"しけんちゅう に すまほ を つくえ の うえ に おかない こと。",romaji:"Shikenchuu ni sumaho o tsukue no ue ni okanai koto.",meaning:"Saat ujian, jangan meletakkan HP di atas meja."}
    ]}
  ]},

  {id:"GR-N3-10",level:"N3",title:"〜によって②",summary:"Menyatakan cara, alat, atau sarana yang dipakai untuk mencapai sesuatu. Artinya dengan, melalui, atau berdasarkan.",groups:[
    {name:"手段",description:"[Cara/sarana] + によって. Dipakai saat menjelaskan metode atau alat secara formal.",sentences:[
      {jp:"このアプリでは、顔認証によってログインできます。",kana:"この あぷり では、かお にんしょう によって ろぐいん できます。",romaji:"Kono apuri deha,kao ninshou niyotte roguin dekimasu.",meaning:"Di aplikasi ini, login bisa dilakukan melalui pengenalan wajah."},
      {jp:"地域によっては、今でも現金だけの店が少なくない。",kana:"ちいき によって は、いま でも げんきん だけ の みせ が すくなくない。",romaji:"Chiiki niyotte ha,ima demo genkin dake no mise ga sukunakunai.",meaning:"Tergantung daerahnya, sampai sekarang masih cukup banyak toko yang hanya menerima uang tunai."},
      {jp:"留学生の数は年によってかなり差がある。",kana:"りゅうがくせい の かず は とし によって かなり さ が ある。",romaji:"Ryuugakusei no kazu wa toshi niyotte kanari sa ga aru.",meaning:"Jumlah mahasiswa asing berbeda cukup jauh tergantung tahunnya."},
      {jp:"人によって、ちょうどいい距離感はかなり違う。",kana:"ひと によって、ちょうど いい きょりかん は かなり ちがう。",romaji:"Hito niyotte,choudo ii kyorikan wa kanari chigau.",meaning:"Tergantung orangnya, rasa nyaman soal jarak dengan orang lain bisa sangat berbeda."},
      {jp:"同じ言葉でも、言い方によって印象がやわらかくなる。",kana:"おなじ ことば でも、いいかた によって いんしょう が やわらかく なる。",romaji:"Onaji kotoba demo,iikata niyotte inshou ga yawarakaku naru.",meaning:"Meski katanya sama, kesannya bisa jadi lebih lembut tergantung cara mengucapkannya."}
    ]}
  ]},

  {id:"GR-N3-11",level:"N3",title:"〜によれば / 〜によると",summary:"Menyatakan sumber informasi, artinya menurut, berdasarkan, atau kata sumber tersebut.",groups:[
    {name:"〜によれば / 〜によると",description:"[Sumber] + によれば / によると + [isi informasi]. Banyak dipakai di berita atau saat menyampaikan info dari orang lain.",sentences:[
      {jp:"天気予報によると、明日の午後から雪になるらしい。",kana:"てんき よほう によると、あした の ごご から ゆき に なる らしい。",romaji:"Tenki yohou niyoruto,ashita no gogo kara yuki ni naru rashii.",meaning:"Menurut prakiraan cuaca, besok mulai sore katanya akan turun salju."},
      {jp:"先生の話によれば、来週のテストは記述が多いそうだ。",kana:"せんせい の はなし によれば、らいしゅう の てすと は きじゅつ が おおい そうだ。",romaji:"Sensei no hanashi niyoreba,raishuu no tesuto wa kijutsu ga ooi souda.",meaning:"Menurut penjelasan sensei, ujian minggu depan katanya banyak soal uraian."},
      {jp:"ニュースによると、新しい駅は来年の春に開業する。",kana:"にゅーす によると、あたらしい えき は らいねん の はる に かいぎょう する。",romaji:"Nyuusu niyoruto,atarashii eki wa rainen no haru ni kaigyou suru.",meaning:"Menurut berita, stasiun baru itu akan mulai beroperasi musim semi tahun depan."},
      {jp:"友達によれば、あの店は平日のほうがゆっくりできるらしい。",kana:"ともだち によれば、あの みせ は へいじつ の ほう が ゆっくり できる らしい。",romaji:"Tomodachi niyoreba,ano mise wa heijitsu no hou ga yukkuri dekiru rashii.",meaning:"Menurut teman saya, toko itu lebih enak didatangi di hari kerja karena lebih santai."},
      {jp:"会社からの案内によると、入館証は今月中に更新が必要です。",kana:"かいしゃ から の あんない によると、にゅうかんしょう は こんげつちゅう に こうしん が ひつよう です。",romaji:"Kaisha kara no annai niyoruto,nyuukanshou wa kongetsuchuu ni koushin ga hitsuyou desu.",meaning:"Menurut pemberitahuan dari kantor, kartu akses gedung harus diperbarui bulan ini."}
    ]}
  ]},

  {id:"GR-N3-12",level:"N3",title:"〜を通して / 〜を通じて①",summary:"Menyatakan media atau perantara, artinya melalui sesuatu, lewat sesuatu.",groups:[
    {name:"媒体 / 仲介",description:"[Media/perantara] + を通して / を通じて. Dipakai saat ada saluran atau perantara di tengah.",sentences:[
      {jp:"このサービスはアプリを通して予約する仕組みになっている。",kana:"この さーびす は あぷり を とおして よやく する しくみ に なっている。",romaji:"Kono saabisu wa apuri o tooshite yoyaku suru shikumi ni natteiru.",meaning:"Layanan ini memakai sistem reservasi melalui aplikasi."},
      {jp:"担当者を通じて、先方にこちらの希望を伝えた。",kana:"たんとうしゃ を つうじて、せんぽう に こちら の きぼう を つたえた。",romaji:"Tantousha o tsuujite,senpou ni kochira no kibou o tsutaeta.",meaning:"Melalui staf penanggung jawab, saya menyampaikan keinginan pihak kami ke sana."},
      {jp:"SNSを通して知り合った人と、今では一緒に仕事をしている。",kana:"えすえぬえす を とおして しりあった ひと と、いま では いっしょ に しごと を している。",romaji:"Esuenuesu o tooshite shiriatta hito to,ima deha issho ni shigoto o shiteiru.",meaning:"Orang yang saya kenal lewat media sosial itu sekarang malah bekerja bareng dengan saya."},
      {jp:"留学センターを通じて、ホームステイ先を紹介してもらった。",kana:"りゅうがく せんたー を つうじて、ほーむすていさき を しょうかい して もらった。",romaji:"Ryuugaku sentaa o tsuujite,hoomusuteisaki o shoukai shite moratta.",meaning:"Lewat pusat studi luar negeri, saya dikenalkan ke tempat homestay."},
      {jp:"記事を通して、その町の空気が少し伝わってきた気がした。",kana:"きじ を とおして、その まち の くうき が すこし つたわって きた き が した。",romaji:"Kiji o tooshite,sono machi no kuuki ga sukoshi tsutawatte kita ki ga shita.",meaning:"Lewat artikel itu, saya merasa sedikit bisa menangkap suasana kota tersebut."}
    ]}
  ]},

  {id:"GR-N3-13",level:"N3",title:"〜から〜にかけて",summary:"Menyatakan rentang waktu atau tempat yang kira-kira memanjang dari titik A sampai sekitar titik B.",groups:[
    {name:"〜から〜にかけて",description:"Dipakai untuk rentang yang tidak terlalu tegas, artinya dari sekitar sampai sekitar.",sentences:[
      {jp:"このあたりでは、六月から七月にかけて雨の日が続く。",kana:"この あたり では、ろくがつ から しちがつ に かけて あめ の ひ が つづく。",romaji:"Kono atari deha,rokugatsu kara shichigatsu ni kakete ame no hi ga tsuzuku.",meaning:"Di daerah sini, dari sekitar Juni sampai Juli hari hujan cenderung terus berlanjut."},
      {jp:"駅前から商店街にかけて、新しいカフェが一気に増えた。",kana:"えきまえ から しょうてんがい に かけて、あたらしい かふぇ が いっき に ふえた。",romaji:"Ekimae kara shoutengai ni kakete,atarashii kafue ga ikki ni fueta.",meaning:"Dari depan stasiun sampai kawasan pertokoan, kafe-kafe baru bertambah banyak sekaligus."},
      {jp:"昨夜から今朝にかけて、風がかなり強かったですね。",kana:"さくや から けさ に かけて、かぜ が かなり つよかった です ね。",romaji:"Sakuya kara kesa ni kakete,kaze ga kanari tsuyokatta desu ne.",meaning:"Dari tadi malam sampai pagi ini, anginnya cukup kencang ya."},
      {jp:"肩から腕にかけてずっと重い感じがする。",kana:"かた から うで に かけて ずっと おもい かんじ が する。",romaji:"Kata kara ude ni kakete zutto omoi kanji ga suru.",meaning:"Dari bahu sampai lengan rasanya berat terus."},
      {jp:"年末から年始にかけては、どこへ行っても人が多い。",kana:"ねんまつ から ねんし に かけて は、どこ へ いっても ひと が おおい。",romaji:"Nenmatsu kara nenshi ni kakete ha,doko e ittemo hito ga ooi.",meaning:"Dari akhir tahun sampai awal tahun, pergi ke mana pun orangnya ramai."}
    ]}
  ]},

  {id:"GR-N3-14",level:"N3",title:"〜を中心に",summary:"Menyatakan sesuatu dilakukan dengan menjadikan satu hal sebagai pusat, fokus, atau inti utama.",groups:[
    {name:"〜を中心に",description:"[Objek] + を中心に. Artinya berpusat pada, fokus pada, dengan inti utama.",sentences:[
      {jp:"この展示会は若手作家の作品を中心に紹介している。",kana:"この てんじかい は わかて さっか の さくひん を ちゅうしん に しょうかい している。",romaji:"Kono tenjikai wa wakate sakka no sakuhin o chuushin ni shoukai shiteiru.",meaning:"Pameran ini memperkenalkan karya-karya dengan fokus utama pada seniman muda."},
      {jp:"新しい企画では、学生の使いやすさを中心に考えたい。",kana:"あたらしい きかく では、がくせい の つかいやすさ を ちゅうしん に かんがえたい。",romaji:"Atarashii kikaku deha,gakusei no tsukaiyasusa o chuushin ni kangaetai.",meaning:"Dalam proyek baru ini, saya ingin berpikir dengan fokus utama pada kemudahan bagi pelajar."},
      {jp:"週末は家族を中心に予定を立てることが多い。",kana:"しゅうまつ は かぞく を ちゅうしん に よてい を たてる こと が おおい。",romaji:"Shuumatsu wa kazoku o chuushin ni yotei o tateru koto ga ooi.",meaning:"Saat akhir pekan, saya sering menyusun rencana dengan keluarga sebagai pusatnya."},
      {jp:"駅の周辺を中心に、再開発が進んでいる。",kana:"えき の しゅうへん を ちゅうしん に、さいかいはつ が すすんでいる。",romaji:"Eki no shuuhen o chuushin ni,saikaihatsu ga susundeiru.",meaning:"Pembangunan ulang sedang berjalan terutama di sekitar area stasiun."},
      {jp:"今回の会議は来月のイベント運営を中心に話し合う予定です。",kana:"こんかい の かいぎ は らいげつ の いべんと うんえい を ちゅうしん に はなしあう よてい です。",romaji:"Konkai no kaigi wa raigetsu no ibento unei o chuushin ni hanashiau yotei desu.",meaning:"Rapat kali ini rencananya akan membahas terutama soal operasional acara bulan depan."}
    ]}
  ]},

  {id:"GR-N3-15",level:"N3",title:"〜を通して / 〜を通じて②",summary:"Menyatakan sesuatu berlangsung sepanjang periode tertentu atau lewat pengalaman yang terus menerus.",groups:[
    {name:"経験 / 全体",description:"Dipakai untuk makna sepanjang, selama keseluruhan, atau melalui pengalaman yang mendalam.",sentences:[
      {jp:"四季を通して、この町は散歩するだけでも気持ちがいい。",kana:"しき を とおして、この まち は さんぽ する だけ でも きもち が いい。",romaji:"Shiki o tooshite,kono machi wa sanpo suru dake demo kimochi ga ii.",meaning:"Sepanjang empat musim, kota ini enak dinikmati bahkan hanya dengan berjalan-jalan."},
      {jp:"一年を通じて、気温の差があまり大きくない地域です。",kana:"いちねん を つうじて、きおん の さ が あまり おおきく ない ちいき です。",romaji:"Ichinen o tsuujite,kion no sa ga amari ookiku nai chiiki desu.",meaning:"Daerah ini adalah wilayah yang sepanjang tahun perbedaan suhunya tidak terlalu besar."},
      {jp:"アルバイトを通して、社会人との話し方を少しずつ覚えた。",kana:"あるばいと を とおして、しゃかいじん と の はなしかた を すこしずつ おぼえた。",romaji:"Arubaito o tooshite,shakaijin to no hanashikata o sukoshizutsu oboeta.",meaning:"Melalui kerja paruh waktu, saya pelan-pelan belajar cara berbicara dengan orang yang sudah bekerja."},
      {jp:"旅を通じて、自分が思っていたよりずっと不器用だと気づいた。",kana:"たび を つうじて、じぶん が おもっていた より ずっと ぶきよう だ と きづいた。",romaji:"Tabi o tsuujite,jibun ga omotteita yori zutto bukiyou da to kizuita.",meaning:"Lewat perjalanan itu, saya sadar ternyata saya jauh lebih canggung dari yang saya kira."},
      {jp:"学生時代を通して、一番苦手だったのは人前で話すことだった。",kana:"がくせい じだい を とおして、いちばん にがて だった の は ひとまえ で はなす こと だった。",romaji:"Gakusei jidai o tooshite,ichiban nigate datta no wa hitomae de hanasu koto datta.",meaning:"Sepanjang masa sekolah, hal yang paling saya tidak kuasai adalah bicara di depan orang banyak."}
    ]}
  ]},

  {id:"GR-N3-18",level:"N3",title:"〜ないと / なきゃ / なくちゃ",summary:"Menyatakan keharusan dalam percakapan sehari-hari, artinya harus. なきゃ dan なくちゃ lebih santai.",groups:[
    {name:"〜ないと / なきゃ / なくちゃ",description:"Bentuk percakapan dari kewajiban. Sering dipakai dalam obrolan santai dan situasi sehari-hari.",sentences:[
      {jp:"そろそろ出ないと、終電に間に合わない。",kana:"そろそろ でない と、しゅうでん に まにあわない。",romaji:"Sorosoro denai to,shuuden ni maniawanai.",meaning:"Kalau tidak segera berangkat, saya tidak akan sempat naik kereta terakhir."},
      {jp:"明日プレゼンだから、今夜のうちに資料を直さなきゃ。",kana:"あした ぷれぜん だ から、こんや の うち に しりょう を なおさなきゃ。",romaji:"Ashita purezen da kara,konya no uchi ni shiryou o naosanakya.",meaning:"Besok presentasi, jadi malam ini saya harus membetulkan materinya."},
      {jp:"冷蔵庫が空っぽだし、帰りに何か買わなくちゃ。",kana:"れいぞうこ が からっぽ だ し、かえり に なにか かわなくちゃ。",romaji:"Reizouko ga karappo da shi,kaeri ni nanika kawanakucha.",meaning:"Kulkas sudah kosong, jadi nanti pulang saya harus beli sesuatu."},
      {jp:"連絡をもらったら、なるべく早く返事しないとね。",kana:"れんらく を もらったら、なるべく はやく へんじ しない と ね。",romaji:"Renraku o morattara,narubeku hayaku henji shinai to ne.",meaning:"Kalau sudah dapat pesan, sebisa mungkin memang harus cepat membalas ya."},
      {jp:"次の休みこそ、たまった洗濯を全部やらなきゃと思ってる。",kana:"つぎ の やすみ こそ、たまった せんたく を ぜんぶ やらなきゃ と おもってる。",romaji:"Tsugi no yasumi koso,tamatta sentaku o zenbu yaranakya to omotteru.",meaning:"Begitu libur berikutnya tiba, saya benar-benar harus membereskan semua cucian yang menumpuk."}
    ]}
  ]},

  {id:"GR-N3-19",level:"N3",title:"〜たって",summary:"Bentuk santai dari 〜ても. Artinya meskipun, walaupun, sekalipun.",groups:[
    {name:"〜たって",description:"[Kalimat] + たって. Banyak dipakai dalam percakapan santai.",sentences:[
      {jp:"今から急いで向かったって、開演にはもう間に合わないよ。",kana:"いま から いそいで むかったって、かいえん に は もう まにあわない よ。",romaji:"Ima kara isoide mukattatte,kaien ni wa mou maniawanai yo.",meaning:"Meskipun berangkat terburu-buru dari sekarang, kita tetap tidak akan sempat untuk mulai acaranya."},
      {jp:"そんなに説明したって、興味がなければ聞いてもらえない。",kana:"そんな に せつめい したって、きょうみ が なければ きいて もらえない。",romaji:"Sonna ni setsumei shitatte,kyoumi ga nakereba kiite moraenai.",meaning:"Meski dijelaskan sepanjang itu, kalau tidak tertarik ya tetap tidak akan didengarkan."},
      {jp:"値段が少し安くなったって、今月はもう買えないかな。",kana:"ねだん が すこし やすく なったって、こんげつ は もう かえない かな。",romaji:"Nedan ga sukoshi yasuku nattatte,kongetsu wa mou kaenai kana.",meaning:"Walaupun harganya sedikit turun, bulan ini sepertinya saya tetap belum bisa beli."},
      {jp:"謝ったって、なくしたデータは戻ってこない。",kana:"あやまったって、なくした でーた は もどって こない。",romaji:"Ayamattatte,nakushita deeta wa modotte konai.",meaning:"Meskipun minta maaf, data yang hilang tetap tidak akan kembali."},
      {jp:"休みだって、家でずっとじっとしているタイプじゃない。",kana:"やすみ だって、いえ で ずっと じっと している たいぷ じゃない。",romaji:"Yasumi datte,ie de zutto jitto shiteiru taipu janai.",meaning:"Walaupun hari libur, saya bukan tipe orang yang bisa diam terus di rumah."}
    ]}
  ]},

  {id:"GR-N3-20",level:"N3",title:"〜っけ",summary:"Dipakai untuk mengingat kembali sesuatu yang agak samar, seperti lho ya yang mana tadi, kapan ya, atau memang begitu ya.",groups:[
    {name:"〜っけ",description:"Ungkapan lisan untuk memancing ingatan sendiri atau menanyakan hal yang dulu pernah tahu.",sentences:[
      {jp:"あれ、この店って月曜日も開いてたっけ。",kana:"あれ、この みせ って げつようび も あいてたっけ。",romaji:"Are,kono mise tte getsuyoubi mo aitetakke.",meaning:"Eh, toko ini dulu buka juga hari Senin ya?"},
      {jp:"田中さんの誕生日って、たしか来週だっけ。",kana:"たなかさん の たんじょうび って、たしか らいしゅう だっけ。",romaji:"Tanakasan no tanjoubi tte,tashika raishuu dakke.",meaning:"Ulang tahun Tanaka, kalau tidak salah minggu depan ya?"},
      {jp:"この書類、先にメールで送ったっけ、それともまだだっけ。",kana:"この しょるい、さき に めーる で おくったっけ、それとも まだ だっけ。",romaji:"Kono shorui,saki ni meeru de okuttakke,soretomo mada dakke.",meaning:"Dokumen ini tadi sudah saya kirim lewat email atau belum ya?"},
      {jp:"駅まで何分ぐらいかかるんだっけ、歩ける距離だったよね。",kana:"えき まで なんぷん ぐらい かかる んだっけ、あるける きょり だった よ ね。",romaji:"Eki made nanpun gurai kakaru ndakke,arukeru kyori datta yo ne.",meaning:"Ke stasiun kira-kira berapa menit ya, tadi jaraknya masih bisa jalan kaki kan?"},
      {jp:"前にすすめてくれた映画のタイトル、なんだっけ。",kana:"まえ に すすめて くれた えいが の たいとる、なんだっけ。",romaji:"Mae ni susumete kureta eiga no taitoru,nandakke.",meaning:"Judul film yang dulu kamu rekomendasikan itu apa ya?"}
    ]}
  ]},

  {id:"GR-N3-21",level:"N3",title:"〜と、〜た / 〜たら、〜た",summary:"Menyatakan penemuan, kejadian tak terduga, atau hasil yang baru disadari setelah suatu tindakan atau keadaan.",groups:[
    {name:"〜と、〜た / 〜たら、〜た",description:"Dipakai saat sesuatu terjadi lalu pembicara menemukan hasil tertentu, sering kali tanpa rencana.",sentences:[
      {jp:"ドアを開けると、部屋の中が思ったよりずっと明るかった。",kana:"どあ を あける と、へや の なか が おもった より ずっと あかるかった。",romaji:"Doa o akeru to,heya no naka ga omotta yori zutto akarukatta.",meaning:"Begitu membuka pintu, ternyata bagian dalam ruangan jauh lebih terang dari yang saya kira."},
      {jp:"駅に着いたら、ちょうど友達から電話がかかってきた。",kana:"えき に ついたら、ちょうど ともだち から でんわ が かかって きた。",romaji:"Eki ni tsuitara,choudo tomodachi kara denwa ga kakatte kita.",meaning:"Begitu sampai di stasiun, pas sekali teman saya menelepon."},
      {jp:"冷蔵庫を見てみると、牛乳がもう一本残っていた。",kana:"れいぞうこ を みてみる と、ぎゅうにゅう が もう いっぽん のこっていた。",romaji:"Reizouko o mitemiru to,gyuunyuu ga mou ippon nokotteita.",meaning:"Saat saya cek kulkas, ternyata masih ada satu botol susu tersisa."},
      {jp:"家に帰ったら、机の上に小さなメモが置いてあった。",kana:"いえ に かえったら、つくえ の うえ に ちいさな めも が おいてあった。",romaji:"Ie ni kaettara,tsukue no ue ni chiisana memo ga oiteatta.",meaning:"Begitu pulang ke rumah, ada memo kecil tergeletak di atas meja."},
      {jp:"窓の外を見ると、いつのまにか雨が雪に変わっていた。",kana:"まど の そと を みる と、いつのまにか あめ が ゆき に かわっていた。",romaji:"Mado no soto o miru to,itsunomanika ame ga yuki ni kawatteita.",meaning:"Begitu melihat ke luar jendela, entah sejak kapan hujannya sudah berubah jadi salju."}
    ]}
  ]}
,

  {id:"GR-N3-22",level:"N3",title:"〜としたら / 〜とすれば",summary:"Menyatakan asumsi, artinya kalau memang begitu, seandainya begitu, atau jika dilihat dari kemungkinan itu.",groups:[
    {name:"〜としたら / 〜とすれば",description:"Dipakai saat membahas dugaan atau kemungkinan secara hati-hati.",sentences:[
      {jp:"もし来月転勤するとしたら、今のうちに部屋を探し始めたほうがいい。",kana:"もし らいげつ てんきん する としたら、いま の うち に へや を さがし はじめた ほう が いい。",romaji:"Moshi raigetsu tenkin suru toshitara,ima no uchi ni heya o sagashi hajimeta hou ga ii.",meaning:"Kalau memang bulan depan jadi pindah tugas, lebih baik mulai cari kamar dari sekarang."},
      {jp:"この値段で本当に全部込みだとすれば、かなりお得だと思う。",kana:"この ねだん で ほんとう に ぜんぶ こみ だ とすれば、かなり おとく だ と おもう。",romaji:"Kono nedan de hontou ni zenbu komi da tosureba,kanari otoku da to omou.",meaning:"Kalau dengan harga segini memang sudah termasuk semuanya, menurut saya itu cukup menguntungkan."},
      {jp:"彼が来られないとしたら、別の人にも声をかけておこうか。",kana:"かれ が こられない としたら、べつ の ひと に も こえ を かけて おこう か。",romaji:"Kare ga korarenai toshitara,betsu no hito ni mo koe o kakete okou ka.",meaning:"Kalau ternyata dia tidak bisa datang, mungkin sebaiknya kita hubungi orang lain juga."},
      {jp:"もし私が逆の立場だとすれば、同じように迷ったと思います。",kana:"もし わたし が ぎゃく の たちば だ とすれば、おなじ よう に まよった と おもいます。",romaji:"Moshi watashi ga gyaku no tachiba da tosureba,onaji you ni mayotta to omoimasu.",meaning:"Kalau saya ada di posisi sebaliknya, saya rasa saya juga akan bingung seperti itu."},
      {jp:"今の反応を見ると、知らなかったとしたら少し不自然かもしれない。",kana:"いま の はんのう を みる と、しらなかった としたら すこし ふしぜん かもしれない。",romaji:"Ima no hannou o miru to,shiranakatta toshitara sukoshi fushizen kamoshirenai.",meaning:"Melihat reaksinya barusan, kalau dia memang tidak tahu mungkin agak terasa janggal."}
    ]}
  ]},

  {id:"GR-N3-23",level:"N3",title:"〜ば〜のに",summary:"Menyatakan penyesalan, harapan, atau ketidakpuasan, artinya andai saja kalau begitu, padahal kalau begitu.",groups:[
    {name:"〜ば〜のに",description:"Sering dipakai untuk andaian yang sayangnya tidak terwujud.",sentences:[
      {jp:"あと十分早く家を出れば、あの電車に乗れたのに。",kana:"あと じゅっぷん はやく いえ を でれば、あの でんしゃ に のれた のに。",romaji:"Ato juppun hayaku ie o dereba,ano densha ni noreta noni.",meaning:"Andai saya keluar rumah sepuluh menit lebih cepat, tadi bisa naik kereta itu."},
      {jp:"わからないなら、最初に聞いてくれればよかったのに。",kana:"わからない なら、さいしょ に きいて くれれば よかった のに。",romaji:"Wakaranai nara,saisho ni kiite kurereba yokatta noni.",meaning:"Kalau memang tidak paham, padahal dari awal tinggal tanya saja."},
      {jp:"そんなに疲れていたなら、今日は休めばいいのに。",kana:"そんな に つかれていた なら、きょう は やすめば いい のに。",romaji:"Sonna ni tsukareteita nara,kyou wa yasumeba ii noni.",meaning:"Kalau memang capek sekali, harusnya hari ini istirahat saja."},
      {jp:"天気がよければ、海までドライブしたかったのに。",kana:"てんき が よければ、うみ まで どらいぶ したかった のに。",romaji:"Tenki ga yokereba,umi made doraibu shitakatta noni.",meaning:"Andai cuacanya bagus, saya sebenarnya ingin road trip sampai ke pantai."},
      {jp:"言いたいことがあるなら、遠回しにしないで言えばいいのに。",kana:"いいたい こと が ある なら、とおまわし に しないで いえば いい のに。",romaji:"Iitai koto ga aru nara,toomawashi ni shinaide ieba ii noni.",meaning:"Kalau memang ada yang mau disampaikan, mending bilang saja langsung tanpa muter-muter."}
    ]}
  ]},

  {id:"GR-N3-24",level:"N3",title:"もし〜たなら",summary:"Menyatakan andaian yang cukup jelas, artinya kalau nanti benar-benar terjadi, maka.",groups:[
    {name:"もし〜たなら",description:"Dipakai saat membahas kemungkinan dengan nada cukup tegas atau serius.",sentences:[
      {jp:"もし予定が変わったなら、できるだけ早く知らせてください。",kana:"もし よてい が かわった なら、できるだけ はやく しらせて ください。",romaji:"Moshi yotei ga kawatta nara,dekirudake hayaku shirasete kudasai.",meaning:"Kalau nanti jadwalnya berubah, tolong kabari secepat mungkin."},
      {jp:"もし向こうから連絡が来たなら、その場で返事しなくても大丈夫だよ。",kana:"もし むこう から れんらく が きた なら、そのば で へんじ しなくても だいじょうぶ だ よ。",romaji:"Moshi mukou kara renraku ga kita nara,sonoba de henji shinakutemo daijoubu da yo.",meaning:"Kalau nanti mereka menghubungi duluan, tidak perlu langsung dibalas di tempat juga tidak apa-apa."},
      {jp:"もし席が空いていたなら、窓側に座りたいです。",kana:"もし せき が あいていた なら、まどがわ に すわりたい です。",romaji:"Moshi seki ga aiteita nara,madogawa ni suwaritai desu.",meaning:"Kalau nanti ada kursi kosong, saya ingin duduk di sisi jendela."},
      {jp:"もし彼が本当にそう言ったなら、少し話し合ったほうがいい。",kana:"もし かれ が ほんとう に そう いった なら、すこし はなしあった ほう が いい。",romaji:"Moshi kare ga hontou ni sou itta nara,sukoshi hanashiatta hou ga ii.",meaning:"Kalau dia benar-benar mengatakan begitu, sebaiknya memang dibicarakan dulu."},
      {jp:"もし次も同じことが起きたなら、今度は記録を残しておこう。",kana:"もし つぎ も おなじ こと が おきた なら、こんど は きろく を のこして おこう。",romaji:"Moshi tsugi mo onaji koto ga okita nara,kondo wa kiroku o nokoshite okou.",meaning:"Kalau nanti hal yang sama terjadi lagi, kali ini kita simpan catatannya."}
    ]}
  ]},

  {id:"GR-N3-25",level:"N3",title:"〜がち",summary:"Menyatakan kecenderungan yang sering terjadi, biasanya ke arah negatif seperti mudah terlambat, mudah lupa, atau gampang sakit.",groups:[
    {name:"〜がち",description:"[Masu-stem] + がち. Artinya cenderung sering melakukan atau mengalami sesuatu.",sentences:[
      {jp:"忙しくなると、どうしても返信が遅れがちです。",kana:"いそがしく なる と、どうしても へんしん が おくれがち です。",romaji:"Isogashiku naru to,doushitemo henshin ga okuregachi desu.",meaning:"Kalau sedang sibuk, balasan saya memang cenderung jadi terlambat."},
      {jp:"冬は運動不足になりがちだから、意識して歩くようにしている。",kana:"ふゆ は うんどう ぶそく に なりがち だ から、いしき して あるく よう に している。",romaji:"Fuyu wa undou busoku ni narigachi da kara,ishiki shite aruku you ni shiteiru.",meaning:"Saat musim dingin saya cenderung kurang bergerak, jadi saya sengaja berusaha lebih banyak jalan."},
      {jp:"一人で抱え込むと、考え方が暗くなりがちだよ。",kana:"ひとり で かかえこむ と、かんがえかた が くらく なりがち だ よ。",romaji:"Hitori de kakaekomu to,kangaekata ga kuraku narigachi da yo.",meaning:"Kalau memendam semuanya sendiri, cara berpikir kita cenderung jadi gelap."},
      {jp:"出張が続く時期は、生活リズムが乱れがちになる。",kana:"しゅっちょう が つづく じき は、せいかつ りずむ が みだれがち に なる。",romaji:"Shucchou ga tsuzuku jiki ha,seikatsu rizumu ga midaregachi ni naru.",meaning:"Saat masa-masa dinas berturut-turut, ritme hidup cenderung berantakan."},
      {jp:"締め切り前は細かいミスを見落としがちなので、最後に必ず見直す。",kana:"しめきりまえ は こまかい みす を みおとしがち な の で、さいご に かならず みなおす。",romaji:"Shimekirimae wa komakai misu o miotoshigachi na no de,saigo ni kanarazu minaosu.",meaning:"Menjelang deadline saya cenderung melewatkan salah-salah kecil, jadi di akhir selalu saya cek ulang."}
    ]}
  ]},

  {id:"GR-N3-26",level:"N3",title:"〜だらけ",summary:"Menyatakan sesuatu penuh dengan, dipenuhi oleh, atau banyak sekali sesuatu, biasanya dengan nuansa kurang enak.",groups:[
    {name:"〜だらけ",description:"[Noun] + だらけ. Artinya penuh dengan, kebanyakan dipakai untuk hal yang negatif atau berantakan.",sentences:[
      {jp:"引っ越したばかりの部屋は、まだ段ボールだらけだ。",kana:"ひっこした ばかり の へや は、まだ だんぼーる だらけ だ。",romaji:"Hikkoshita bakari no heya ha,mada danbooru darake da.",meaning:"Kamar yang baru ditempati setelah pindahan masih penuh kardus."},
      {jp:"久しぶりにクローゼットを開けたら、着ない服だらけで驚いた。",kana:"ひさしぶり に くろーぜっと を あけたら、きない ふく だらけ で おどろいた。",romaji:"Hisashiburi ni kuroozetto o aketara,kinai fuku darake de odoroita.",meaning:"Waktu lama-lama saya buka lemari, saya kaget karena isinya penuh baju yang tidak pernah dipakai."},
      {jp:"その企画書、修正メモだらけになってるけど大丈夫そう。",kana:"その きかくしょ、しゅうせい めも だらけ に なってる けど だいじょうぶ そう。",romaji:"Sono kikakusho,shuusei memo darake ni natteru kedo daijoubu sou.",meaning:"Proposal itu sudah penuh catatan revisi, tapi sepertinya tetap bisa dibereskan."},
      {jp:"雨の中を歩いたから、ズボンのすそが泥だらけになった。",kana:"あめ の なか を あるいた から、ずぼん の すそ が どろ だらけ に なった。",romaji:"Ame no naka o aruita kara,zubon no suso ga doro darake ni natta.",meaning:"Karena jalan kaki saat hujan, ujung celana saya jadi penuh lumpur."},
      {jp:"旅行の写真を見返したら、食べ物の写真だらけで笑ってしまった。",kana:"りょこう の しゃしん を みかえしたら、たべもの の しゃしん だらけ で わらって しまった。",romaji:"Ryokou no shashin o mikaeshitara,tabemono no shashin darake de waratte shimatta.",meaning:"Pas lihat lagi foto-foto liburan, isinya hampir semua foto makanan sampai saya ketawa sendiri."}
    ]}
  ]},

  {id:"GR-N3-27",level:"N3",title:"〜っぱなし",summary:"Menyatakan sesuatu dibiarkan terus begitu saja atau suatu keadaan berlangsung terus tanpa perubahan.",groups:[
    {name:"〜っぱなし",description:"[Masu-stem] + っぱなし. Sering dipakai untuk kondisi yang dibiarkan, biasanya kurang baik.",sentences:[
      {jp:"エアコンをつけっぱなしで寝てしまって、朝のどが痛かった。",kana:"えあこん を つけっぱなし で ねて しまって、あさ のど が いたかった。",romaji:"Eakon o tsukeppanashi de nete shimatte,asa nodo ga itakatta.",meaning:"Saya tertidur dengan AC menyala terus, jadi pagi-pagi tenggorokan terasa sakit."},
      {jp:"資料を開きっぱなしにしていたせいで、パソコンの充電がなくなった。",kana:"しりょう を ひらきっぱなし に していた せいで、ぱそこん の じゅうでん が なくなった。",romaji:"Shiryou o hirakippanashi ni shiteita seide,pasokon no juuden ga nakunatta.",meaning:"Karena dokumennya dibiarkan terus terbuka, baterai laptop habis."},
      {jp:"言いたいことを言いっぱなしで終わるのは、ちょっとずるいと思う。",kana:"いいたい こと を いいっぱなし で おわる の は、ちょっと ずるい と おもう。",romaji:"Iitai koto o iippanashi de owaru no ha,chotto zurui to omou.",meaning:"Menurut saya kurang adil kalau cuma melempar pendapat lalu selesai begitu saja."},
      {jp:"玄関の電気が一晩中つけっぱなしだったよ。",kana:"げんかん の でんき が ひとばんじゅう つけっぱなし だった よ。",romaji:"Genkan no denki ga hitobanjuu tsukeppanashi datta yo.",meaning:"Lampu teras tadi menyala terus semalaman loh."},
      {jp:"最近、忙しくてメッセージを読みっぱなしにしてしまうことが多い。",kana:"さいきん、いそがしくて めっせーじ を よみっぱなし に してしまう こと が おおい。",romaji:"Saikin,isogashikute messeeji o yomippanashi ni shiteshimau koto ga ooi.",meaning:"Akhir-akhir ini karena sibuk, saya sering cuma baca pesan lalu membiarkannya begitu saja tanpa balas."}
    ]}
  ]},

  {id:"GR-N3-28",level:"N3",title:"〜っぽい",summary:"Menyatakan terasa seperti, kelihatan seperti, atau cenderung mudah begitu. Dipakai luas dalam percakapan.",groups:[
    {name:"〜っぽい",description:"Bisa berarti seperti, mirip, atau gampang cenderung ke arah tertentu.",sentences:[
      {jp:"このコート、形はシンプルなのにどこか古着っぽくて好き。",kana:"この こーと、かたち は しんぷる な のに どこか ふるぎっぽくて すき。",romaji:"Kono kooto,katachi wa shinpuru na noni dokoka furugippokute suki.",meaning:"Mantel ini bentuknya sederhana, tapi ada nuansa vintage yang saya suka."},
      {jp:"彼はあっさりしているけど、意外とさびしがり屋っぽい。",kana:"かれ は あっさり している けど、いがい と さびしがりやっぽい。",romaji:"Kare wa assari shiteiru kedo,igai to sabishigariyappoi.",meaning:"Dia kelihatannya santai, tapi ternyata seperti tipe orang yang gampang kesepian."},
      {jp:"今日は朝から空が灰色っぽくて、雨が降りそうだね。",kana:"きょう は あさ から そら が はいいろっぽくて、あめ が ふりそう だ ね。",romaji:"Kyou wa asa kara sora ga haiiroppokute,ame ga furisou da ne.",meaning:"Sejak pagi langit agak kelabu, sepertinya memang bakal hujan."},
      {jp:"私、飽きっぽいところがあるから、最初に仕組みを作っておきたい。",kana:"わたし、あきっぽい ところ が ある から、さいしょ に しくみ を つくって おきたい。",romaji:"Watashi,akippoi tokoro ga aru kara,saisho ni shikumi o tsukutte okitai.",meaning:"Saya ada sifat gampang bosan, jadi ingin bikin sistemnya dulu dari awal."},
      {jp:"その言い方だと、少し子どもっぽく聞こえるかもしれない。",kana:"その いいかた だ と、すこし こどもっぽく きこえる かもしれない。",romaji:"Sono iikata da to,sukoshi kodomoppoku kikoeru kamoshirenai.",meaning:"Kalau mengucapkannya seperti itu, mungkin terdengar agak kekanak-kanakan."}
    ]}
  ]},

  {id:"GR-N3-29",level:"N3",title:"〜気味",summary:"Menyatakan kecenderungan ringan atau gejala awal, seperti agak, sedikit cenderung, atau terasa mulai begitu.",groups:[
    {name:"〜気味",description:"[Noun / Masu-stem] + 気味. Dipakai untuk gejala ringan atau kecenderungan tipis.",sentences:[
      {jp:"最近ちょっと寝不足気味で、午後になると集中が切れやすい。",kana:"さいきん ちょっと ねぶそくぎみ で、ごご に なる と しゅうちゅう が きれやすい。",romaji:"Saikin chotto nebusokugimi de,gogo ni naru to shuuchuu ga kireyasui.",meaning:"Akhir-akhir ini saya agak kurang tidur, jadi siang-siang gampang hilang fokus."},
      {jp:"風邪気味なら、今日は無理しないで早く帰ったほうがいいよ。",kana:"かぜぎみ なら、きょう は むり しないで はやく かえった ほう が いい よ。",romaji:"Kazegimi nara,kyou wa muri shinaide hayaku kaetta hou ga ii yo.",meaning:"Kalau rasanya agak masuk angin, hari ini mending jangan dipaksakan dan cepat pulang."},
      {jp:"連休明けは、どうしても仕事モードに戻るのが遅れ気味だ。",kana:"れんきゅうあけ は、どうしても しごと もーど に もどる の が おくれぎみ だ。",romaji:"Renkyuuake ha,doushitemo shigoto moodo ni modoru no ga okuregimi da.",meaning:"Setelah libur panjang, saya memang agak lambat kembali ke mode kerja."},
      {jp:"このところ忙しくて、部屋の片づけが後回し気味になっている。",kana:"この ところ いそがしくて、へや の かたづけ が あとまわしぎみ に なっている。",romaji:"Kono tokoro isogashikute,heya no katazuke ga atomawashigimi ni natteiru.",meaning:"Belakangan ini sibuk, jadi beres-beres kamar agak terus tertunda."},
      {jp:"彼は今日は少し疲れ気味で、いつもより口数が少ない。",kana:"かれ は きょう は すこし つかれぎみ で、いつも より くちかず が すくない。",romaji:"Kare wa kyou wa sukoshi tsukaregimi de,itsumo yori kuchikazu ga sukunai.",meaning:"Hari ini dia kelihatan agak capek, jadi lebih pendiam dari biasanya."}
    ]}
  ]},

  {id:"GR-N3-30",level:"N3",title:"〜ふりをする",summary:"Menyatakan berpura-pura melakukan, tahu, atau merasakan sesuatu.",groups:[
    {name:"〜ふりをする",description:"[Kalimat biasa] + ふりをする. Artinya berpura-pura begitu.",sentences:[
      {jp:"聞こえないふりをしても、さっきちゃんと目が合ってたよ。",kana:"きこえない ふり を しても、さっき ちゃんと め が あってた よ。",romaji:"Kikoenai furi o shitemo,sakki chanto me ga atteta yo.",meaning:"Walaupun pura-pura tidak dengar, tadi jelas-jelas tatapan kita sempat bertemu."},
      {jp:"彼は知っているのに、知らないふりをして話を聞いていた。",kana:"かれ は しっている のに、しらない ふり を して はなし を きいていた。",romaji:"Kare wa shitteiru noni,shiranai furi o shite hanashi o kiiteita.",meaning:"Padahal dia tahu, tapi dia mendengarkan sambil pura-pura tidak tahu."},
      {jp:"忙しいふりをしていたけど、実はずっと動画を見ていたらしい。",kana:"いそがしい ふり を していた けど、じつ は ずっと どうが を みていた らしい。",romaji:"Isogashii furi o shiteita kedo,jitsu wa zutto douga o miteita rashii.",meaning:"Kelihatannya pura-pura sibuk, tapi katanya sebenarnya dia malah nonton video terus."},
      {jp:"平気なふりをしていたけれど、本当はかなり緊張していた。",kana:"へいき な ふり を していた けれど、ほんとう は かなり きんちょう していた。",romaji:"Heiki na furi o shiteita keredo,hontou wa kanari kinchou shiteita.",meaning:"Saya berpura-pura tenang, padahal sebenarnya cukup tegang."},
      {jp:"寝たふりをしていた子どもが、お菓子の袋の音で急に起きた。",kana:"ねた ふり を していた こども が、おかし の ふくろ の おと で きゅう に おきた。",romaji:"Neta furi o shiteita kodomo ga,okashi no fukuro no oto de kyuu ni okita.",meaning:"Anak yang tadi pura-pura tidur tiba-tiba bangun waktu dengar suara bungkus camilan."}
    ]}
  ]},

  {id:"GR-N3-31",level:"N3",title:"〜まま",summary:"Menyatakan keadaan tetap seperti itu, tanpa diubah. Bisa berarti tetap, sambil, atau dibiarkan dalam kondisi tertentu.",groups:[
    {name:"〜まま",description:"[Keadaan] + まま. Artinya tetap dalam kondisi itu, tanpa perubahan.",sentences:[
      {jp:"窓を開けたまま寝てしまって、朝は部屋がかなり冷えていた。",kana:"まど を あけた まま ねて しまって、あさ は へや が かなり ひえていた。",romaji:"Mado o aketa mama nete shimatte,asa wa heya ga kanari hieteita.",meaning:"Saya tertidur dengan jendela tetap terbuka, jadi pagi-pagi kamar terasa sangat dingin."},
      {jp:"メイクを落とさないまま寝るのは、肌によくないってわかってる。",kana:"めいく を おとさない まま ねる の は、はだ に よくない って わかってる。",romaji:"Meiku o otosanai mama neru no ha,hada ni yokunai tte wakatteru.",meaning:"Saya tahu tidur tanpa membersihkan makeup itu tidak baik untuk kulit."},
      {jp:"昔の写真を見たら、笑ったままの自分がたくさん写っていた。",kana:"むかし の しゃしん を みたら、わらった まま の じぶん が たくさん うつっていた。",romaji:"Mukashi no shashin o mitara,waratta mama no jibun ga takusan utsutteita.",meaning:"Waktu lihat foto-foto lama, banyak sekali foto saya yang tertangkap sambil tetap tertawa."},
      {jp:"靴をはいたまま入れるスペースだったので、思ったより楽だった。",kana:"くつ を はいた まま はいれる すぺーす だった の で、おもった より らく だった。",romaji:"Kutsu o haita mama haireru supeesu datta no de,omotta yori raku datta.",meaning:"Karena itu ruang yang bisa dimasuki tanpa melepas sepatu, ternyata lebih praktis dari dugaan."},
      {jp:"気持ちをうまく言えないまま、一日が終わってしまった。",kana:"きもち を うまく いえない まま、いちにち が おわって しまった。",romaji:"Kimochi o umaku ienai mama,ichinichi ga owatte shimatta.",meaning:"Hari ini berakhir begitu saja sementara saya tetap tidak berhasil mengungkapkan perasaan dengan baik."}
    ]}
  ]},

  {id:"GR-N3-32",level:"N3",title:"〜みたい",summary:"Ungkapan santai untuk mengatakan seperti, sepertinya, atau mirip seperti.",groups:[
    {name:"〜みたい",description:"Dipakai dalam percakapan untuk dugaan atau perbandingan yang ringan.",sentences:[
      {jp:"外、思ったより寒いみたいだから、上着を持っていったほうがいいよ。",kana:"そと、おもった より さむい みたい だ から、うわぎ を もって いった ほう が いい よ。",romaji:"Soto,omotta yori samui mitai da kara,uwagi o motte itta hou ga ii yo.",meaning:"Di luar sepertinya lebih dingin dari dugaan, jadi sebaiknya bawa jaket."},
      {jp:"そのカフェ、平日の朝はかなり空いてるみたい。",kana:"その かふぇ、へいじつ の あさ は かなり すいてる みたい。",romaji:"Sono kafue,heijitsu no asa wa kanari suiteru mitai.",meaning:"Kafe itu sepertinya cukup sepi di pagi hari saat weekdays."},
      {jp:"彼、今日はいつもより機嫌がよくないみたいだね。",kana:"かれ、きょう は いつも より きげん が よくない みたい だ ね。",romaji:"Kare,kyou wa itsumo yori kigen ga yokunai mitai da ne.",meaning:"Hari ini dia sepertinya mood-nya tidak sebagus biasanya ya."},
      {jp:"このスープ、見た目はシンプルだけど味は意外と深いみたい。",kana:"この すーぷ、みため は しんぷる だけど あじ は いがい と ふかい みたい。",romaji:"Kono suupu,mitame wa shinpuru dakedo aji wa igai to fukai mitai.",meaning:"Sup ini kelihatannya sederhana, tapi rasanya sepertinya cukup dalam dan kompleks."},
      {jp:"新しく入った人、日本語より韓国語のほうが得意みたい。",kana:"あたらしく はいった ひと、にほんご より かんこくご の ほう が とくい みたい。",romaji:"Atarashiku haitta hito,nihongo yori kankokugo no hou ga tokui mitai.",meaning:"Orang baru itu sepertinya lebih jago bahasa Korea daripada bahasa Jepang."}
    ]}
  ]},

  {id:"GR-N3-33",level:"N3",title:"(まるで)〜ようだ",summary:"Menyatakan kemiripan yang cukup kuat, seperti seolah-olah atau bagaikan.",groups:[
    {name:"(まるで)〜ようだ",description:"Dipakai saat sesuatu terasa sangat mirip dengan keadaan lain.",sentences:[
      {jp:"雨上がりの空気が澄んでいて、まるで山の朝のようだった。",kana:"あめあがり の くうき が すんでいて、まるで やま の あさ の よう だった。",romaji:"Ameagari no kuuki ga sundeite,marude yama no asa no you datta.",meaning:"Udara setelah hujan terasa jernih sekali, seolah-olah seperti pagi di pegunungan."},
      {jp:"彼の説明はていねいで、初めて聞く人にも先生のようにわかりやすい。",kana:"かれ の せつめい は ていねい で、はじめて きく ひと に も せんせい の よう に わかりやすい。",romaji:"Kare no setsumei wa teinei de,hajimete kiku hito ni mo sensei no you ni wakariyasui.",meaning:"Penjelasannya dia rapi sekali, bahkan untuk orang yang baru mendengar pun mudah dipahami seperti guru."},
      {jp:"忙しいはずなのに落ち着いていて、まるで時間がゆっくり流れているようだ。",kana:"いそがしい はず な のに おちついていて、まるで じかん が ゆっくり ながれている よう だ。",romaji:"Isogashii hazu na noni ochitsuiteite,marude jikan ga yukkuri nagareteiru you da.",meaning:"Padahal harusnya sibuk, tapi suasananya tenang sekali, seolah waktu berjalan pelan."},
      {jp:"その笑い方を聞くと、昔の友達がそこにいるような気がする。",kana:"その わらいかた を きく と、むかし の ともだち が そこ に いる ような き が する。",romaji:"Sono waraikata o kiku to,mukashi no tomodachi ga soko ni iru youna ki ga suru.",meaning:"Kalau dengar cara tertawanya, saya merasa seperti teman lama saya ada di situ."},
      {jp:"初めて行ったのに、不思議と前にも来たことがあるように感じた。",kana:"はじめて いった のに、ふしぎ と まえ に も きた こと が ある よう に かんじた。",romaji:"Hajimete itta noni,fushigi to mae ni mo kita koto ga aru you ni kanjita.",meaning:"Padahal baru pertama kali ke sana, entah kenapa rasanya seperti pernah datang sebelumnya."}
    ]}
  ]},

  {id:"GR-N3-34",level:"N3",title:"〜がる",summary:"Dipakai untuk menunjukkan perasaan yang tampak pada orang lain, seperti takut, senang, malu, atau ingin.",groups:[
    {name:"〜がる",description:"Dipakai karena perasaan orang lain tidak bisa dinilai langsung, jadi dilihat dari sikap atau ucapan.",sentences:[
      {jp:"子どもが暗い道を怖がって、私の手をずっと離さなかった。",kana:"こども が くらい みち を こわがって、わたし の て を ずっと はなさなかった。",romaji:"Kodomo ga kurai michi o kowagatte,watashi no te o zutto hanasanakatta.",meaning:"Anak itu kelihatan takut pada jalan yang gelap, sampai terus memegang tangan saya."},
      {jp:"弟は人前で話すのを嫌がるけど、文章でならよく話してくれる。",kana:"おとうと は ひとまえ で はなす の を いやがる けど、ぶんしょう で なら よく はなして くれる。",romaji:"Otouto wa hitomae de hanasu no o iyagaru kedo,bunshou de nara yoku hanashite kureru.",meaning:"Adik saya kelihatan tidak suka bicara di depan orang, tapi kalau lewat tulisan dia lumayan terbuka."},
      {jp:"彼女は新しい環境でもあまり不安がらないタイプだ。",kana:"かのじょ は あたらしい かんきょう で も あまり ふあんがらない たいぷ だ。",romaji:"Kanojo wa atarashii kankyou de mo amari fuangaranai taipu da.",meaning:"Dia tipe orang yang tidak terlalu kelihatan cemas walau masuk ke lingkungan baru."},
      {jp:"うちの猫は知らない人が来ると、すぐ警戒したがる。",kana:"うち の ねこ は しらない ひと が くる と、すぐ けいかい したがる。",romaji:"Uchi no neko wa shiranai hito ga kuru to,sugu keikai shitagaru.",meaning:"Kucing saya kalau ada orang asing datang, langsung cenderung waspada."},
      {jp:"みんなが心配しすぎだと言っても、母は私の帰りを気にしたがる。",kana:"みんな が しんぱい しすぎ だ と いっても、はは は わたし の かえり を き に したがる。",romaji:"Minna ga shinpai shisugi da to ittemo,haha wa watashi no kaeri o ki ni shitagaru.",meaning:"Walaupun semua bilang ibu terlalu khawatir, beliau tetap cenderung mencemaskan kepulangan saya."}
    ]}
  ]},

  {id:"GR-N3-35",level:"N3",title:"〜(っ)きり",summary:"Menyatakan hanya itu saja, atau sejak suatu waktu sampai sekarang tidak berubah lagi.",groups:[
    {name:"〜(っ)きり",description:"Bisa berarti hanya, atau sejak saat itu lalu tidak lagi.",sentences:[
      {jp:"彼とは卒業式で会ったきり、もう何年も連絡を取っていない。",kana:"かれ と は そつぎょうしき で あった きり、もう なんねん も れんらく を とって いない。",romaji:"Kare to wa sotsugyoushiki de atta kiri,mou nannen mo renraku o totte inai.",meaning:"Sejak bertemu dia di acara wisuda, sudah bertahun-tahun kami tidak saling menghubungi lagi."},
      {jp:"昨日は朝からコーヒー一杯きりで、ちゃんと食べていなかった。",kana:"きのう は あさ から こーひー いっぱい きり で、ちゃんと たべて いなかった。",romaji:"Kinou wa asa kara koohii ippai kiri de,chanto tabete inakatta.",meaning:"Kemarin sejak pagi saya cuma minum secangkir kopi dan tidak sempat makan dengan benar."},
      {jp:"ドアを少し開けっきりにしておくと、風がちょうどいい。",kana:"どあ を すこし あけっきり に しておく と、かぜ が ちょうど いい。",romaji:"Doa o sukoshi akekkiri ni shiteoku to,kaze ga choudo ii.",meaning:"Kalau pintunya dibiarkan sedikit terbuka terus, anginnya pas."},
      {jp:"あの店には一度行ったきりだけど、今でも雰囲気を覚えている。",kana:"あの みせ に は いちど いった きり だけど、いま でも ふんいき を おぼえている。",romaji:"Ano mise ni wa ichido itta kiri dakedo,ima demo funiki o oboeteiru.",meaning:"Saya baru satu kali ke toko itu, tapi sampai sekarang masih ingat suasananya."},
      {jp:"今日は朝から座りっきりだから、少し外を歩いてこようかな。",kana:"きょう は あさ から すわりっきり だ から、すこし そと を あるいて こよう かな。",romaji:"Kyou wa asa kara suwarikkiri da kara,sukoshi soto o aruite koyou kana.",meaning:"Karena dari pagi saya duduk terus, mungkin saya mau keluar jalan sebentar."}
    ]}
  ]}
,

  {id:"GR-N3-36",level:"N3",title:"〜ばかり",summary:"Bisa menyatakan hanya itu melulu, baru saja selesai, atau terlihat semakin. Di level ini, yang paling sering adalah hanya, melulu.",groups:[
    {name:"〜ばかり",description:"Maknanya bergantung konteks, tapi intinya ada nuansa condong ke satu hal saja.",sentences:[
      {jp:"最近、甘いものばかり食べている気がしてちょっとこわい。",kana:"さいきん、あまい もの ばかり たべている き が して ちょっと こわい。",romaji:"Saikin,amai mono bakari tabeteiru ki ga shite chotto kowai.",meaning:"Akhir-akhir ini saya merasa makan yang manis-manis saja terus, jadi agak ngeri sendiri."},
      {jp:"彼は文句ばかりで、自分では何もしようとしない。",kana:"かれ は もんく ばかり で、じぶん で は なに も しよう と しない。",romaji:"Kare wa monku bakari de,jibun de wa nani mo shiyou to shinai.",meaning:"Dia isinya mengeluh terus, tapi dirinya sendiri tidak mau melakukan apa-apa."},
      {jp:"休みの日くらい、仕事のことばかり考えないようにしたい。",kana:"やすみ の ひ くらい、しごと の こと ばかり かんがえない よう に したい。",romaji:"Yasumi no hi kurai,shigoto no koto bakari kangaenai you ni shitai.",meaning:"Setidaknya di hari libur, saya ingin berhenti memikirkan pekerjaan terus-menerus."},
      {jp:"さっき食べたばかりなのに、もうお腹がすいてきた。",kana:"さっき たべた ばかり な のに、もう おなか が すいてきた。",romaji:"Sakki tabeta bakari na noni,mou onaka ga suitekita.",meaning:"Padahal baru saja makan, tapi saya sudah mulai lapar lagi."},
      {jp:"引っ越したばかりで、まだ近所のことがよくわからない。",kana:"ひっこした ばかり で、まだ きんじょ の こと が よく わからない。",romaji:"Hikkoshita bakari de,mada kinjo no koto ga yoku wakaranai.",meaning:"Karena baru pindah, saya masih belum terlalu paham lingkungan sekitar."}
    ]}
  ]},

  {id:"GR-N3-38",level:"N3",title:"〜と / 〜たら / 〜ば、いい(なあ)",summary:"Menyatakan saran ringan, harapan, atau gumaman seperti bagusnya kalau begitu.",groups:[
    {name:"〜と / 〜たら / 〜ば、いい(なあ)",description:"Dipakai saat memberi saran atau mengungkapkan keinginan ringan.",sentences:[
      {jp:"時間がないなら、先に要点だけ伝えるといいよ。",kana:"じかん が ない なら、さき に ようてん だけ つたえる と いい よ。",romaji:"Jikan ga nai nara,saki ni youten dake tsutaeru to ii yo.",meaning:"Kalau waktunya sedikit, lebih baik sampaikan poin-poin pentingnya dulu."},
      {jp:"迷ったら、実際に使う場面を想像して選んだらいい。",kana:"まよったら、じっさい に つかう ばめん を そうぞう して えらんだら いい。",romaji:"Mayottara,jissai ni tsukau bamen o souzou shite erandara ii.",meaning:"Kalau bingung, coba pilih sambil membayangkan situasi saat benar-benar dipakai."},
      {jp:"もっと自然に話せるようになりたければ、声に出して練習すればいい。",kana:"もっと しぜん に はなせる よう に なりたければ、こえ に だして れんしゅう すれば いい。",romaji:"Motto shizen ni hanaseru you ni naritakereba,koe ni dashite renshuu sureba ii.",meaning:"Kalau ingin bisa bicara lebih natural, latihan keras-keras saja."},
      {jp:"明日はどうか晴れるといいな。",kana:"あした は どうか はれる と いい な。",romaji:"Ashita wa douka hareru to ii na.",meaning:"Semoga besok cerah ya."},
      {jp:"せっかくの休みだから、今日はスマホを見ないで過ごせたらいいなと思う。",kana:"せっかく の やすみ だ から、きょう は すまほ を みないで すごせたら いい な と おもう。",romaji:"Sekkaku no yasumi da kara,kyou wa sumaho o minaide sugosetara ii na to omou.",meaning:"Karena lagi libur, saya berharap hari ini bisa lewat tanpa terus-terusan lihat HP."}
    ]}
  ]},

  {id:"GR-N3-39",level:"N3",title:"〜ますように / 〜ませんように",summary:"Ungkapan doa atau harapan, artinya semoga. 〜ませんように dipakai untuk harapan agar sesuatu yang tidak diinginkan tidak terjadi.",groups:[
    {name:"〜ますように / 〜ませんように",description:"Sering dipakai di doa, kartu ucapan, atau harapan yang tulus.",sentences:[
      {jp:"みんなが安心して新しい一歩を踏み出せますように。",kana:"みんな が あんしん して あたらしい いっぽ を ふみだせます よう に。",romaji:"Minna ga anshin shite atarashii ippo o fumidasemasu you ni.",meaning:"Semoga semua orang bisa melangkah maju dengan tenang."},
      {jp:"明日の発表がうまくいきますようにと、朝から落ち着かない。",kana:"あした の はっぴょう が うまく いきます よう に と、あさ から おちつかない。",romaji:"Ashita no happyou ga umaku ikimasu you ni to,asa kara ochitsukanai.",meaning:"Sejak pagi saya gelisah sambil berharap semoga presentasi besok berjalan lancar."},
      {jp:"今年こそ家族みんなでゆっくり過ごせますように。",kana:"ことし こそ かぞく みんな で ゆっくり すごせます よう に。",romaji:"Kotoshi koso kazoku minna de yukkuri sugosemasu you ni.",meaning:"Semoga tahun ini akhirnya semua keluarga bisa menikmati waktu santai bersama."},
      {jp:"大事なデータが消えませんようにと願いながら更新ボタンを押した。",kana:"だいじな でーた が きえません よう に と ねがいながら こうしん ぼたん を おした。",romaji:"Daijina deeta ga kiemasen you ni to negainagara koushin botan o oshita.",meaning:"Sambil berharap semoga data pentingnya tidak hilang, saya menekan tombol update."},
      {jp:"これ以上、同じことで悩みませんようにと自分に言い聞かせた。",kana:"これ いじょう、おなじ こと で なやみません よう に と じぶん に いいきかせた。",romaji:"Kore ijou,onaji koto de nayamimasen you ni to jibun ni iikikaseta.",meaning:"Saya menenangkan diri sendiri sambil berharap semoga saya tidak terus-terusan tersiksa oleh hal yang sama lagi."}
    ]}
  ]},

  {id:"GR-N3-40",level:"N3",title:"〜として",summary:"Menyatakan posisi, peran, kapasitas, atau kategori, artinya sebagai.",groups:[
    {name:"〜として",description:"[Noun] + として. Artinya sebagai, dalam posisi, atau dari sudut kapasitas itu.",sentences:[
      {jp:"一人の読者として、その結末にはかなり満足している。",kana:"ひとり の どくしゃ として、その けつまつ に は かなり まんぞく している。",romaji:"Hitori no dokusha toshite,sono ketsumatsu ni wa kanari manzoku shiteiru.",meaning:"Sebagai seorang pembaca, saya cukup puas dengan akhir ceritanya."},
      {jp:"この町は観光地としてだけでなく、暮らしやすさでも人気がある。",kana:"この まち は かんこうち として だけ で なく、くらしやすさ で も にんき が ある。",romaji:"Kono machi wa kankouchi toshite dake de naku,kurashiyasusa de mo ninki ga aru.",meaning:"Kota ini populer bukan cuma sebagai tujuan wisata, tapi juga karena nyaman untuk ditinggali."},
      {jp:"親として、子どもの選択を頭ごなしに否定したくはない。",kana:"おや として、こども の せんたく を あたまごなし に ひてい したく は ない。",romaji:"Oya toshite,kodomo no sentaku o atamagonashi ni hitei shitaku wa nai.",meaning:"Sebagai orang tua, saya tidak ingin langsung menolak pilihan anak begitu saja."},
      {jp:"その映画はシリーズの第一作として十分に印象的だった。",kana:"その えいが は しりーず の だいいっさく として じゅうぶん に いんしょうてき だった。",romaji:"Sono eiga wa shiriizu no daiissaku toshite juubun ni inshouteki datta.",meaning:"Film itu cukup berkesan sebagai karya pertama dari serial tersebut."},
      {jp:"留学生として来たはずが、気づけばここで働くことまで考えている。",kana:"りゅうがくせい として きた はず が、きづけば ここ で はたらく こと まで かんがえている。",romaji:"Ryuugakusei toshite kita hazu ga,kizukeba koko de hataraku koto made kangaeteiru.",meaning:"Awalnya saya datang sebagai pelajar, tapi tanpa sadar sekarang saya sampai mulai mempertimbangkan bekerja di sini."}
    ]}
  ]},

  {id:"GR-N3-41",level:"N3",title:"〜にとって",summary:"Menyatakan sudut pandang atau arti suatu hal bagi seseorang, artinya bagi, untuk, dari sudut seseorang.",groups:[
    {name:"〜にとって",description:"[Orang/kelompok] + にとって. Menunjukkan arti atau nilai sesuatu bagi pihak itu.",sentences:[
      {jp:"この経験は私にとって、ただの思い出では終わらないと思う。",kana:"この けいけん は わたし にとって、ただ の おもいで で は おわらない と おもう。",romaji:"Kono keiken wa watashi nitotte,tada no omoide de wa owaranai to omou.",meaning:"Pengalaman ini bagi saya tidak akan berakhir cuma sebagai kenangan biasa."},
      {jp:"子どもにとって、安心して話せる大人が一人いるだけでも大きい。",kana:"こども にとって、あんしん して はなせる おとな が ひとり いる だけ でも おおきい。",romaji:"Kodomo nitotte,anshin shite hanaseru otona ga hitori iru dake demo ookii.",meaning:"Bagi anak-anak, hanya punya satu orang dewasa yang bisa diajak bicara dengan aman pun sangat berarti."},
      {jp:"私にとっての理想は、無理なく続けられる働き方です。",kana:"わたし にとって の りそう は、むり なく つづけられる はたらきかた です。",romaji:"Watashi nitotte no risou ha,muri naku tsuzukerareru hatarakikata desu.",meaning:"Bagi saya, bentuk kerja yang ideal adalah yang bisa dijalani terus tanpa memaksakan diri."},
      {jp:"その一言は彼にとって、想像以上に励みになったらしい。",kana:"その ひとこと は かれ にとって、そうぞう いじょう に はげみ に なった らしい。",romaji:"Sono hitokoto wa kare nitotte,souzou ijou ni hagemi ni natta rashii.",meaning:"Satu kalimat itu rupanya menjadi penyemangat yang jauh lebih besar dari dugaan bagi dirinya."},
      {jp:"海外での生活は楽しいだけでなく、私にとって大きな学びでもあった。",kana:"かいがい で の せいかつ は たのしい だけ で なく、わたし にとって おおきな まなび で も あった。",romaji:"Kaigai de no seikatsu wa tanoshii dake de naku,watashi nitotte ookina manabi de mo atta.",meaning:"Hidup di luar negeri bukan cuma menyenangkan, tapi juga menjadi pelajaran besar bagi saya."}
    ]}
  ]},

  {id:"GR-N3-42",level:"N3",title:"〜ばかりか / 〜ばかりでなく",summary:"Menyatakan bukan hanya A, tapi juga B. Dipakai untuk menambah sesuatu yang bahkan lebih luas atau lebih mengejutkan.",groups:[
    {name:"〜ばかりか / 〜ばかりでなく",description:"Artinya tidak hanya, bahkan juga.",sentences:[
      {jp:"彼は日本語ばかりか、中国語まで自然に話せる。",kana:"かれ は にほんご ばかりか、ちゅうごくご まで しぜん に はなせる。",romaji:"Kare wa nihongo bakarika,chuugokugo made shizen ni hanaseru.",meaning:"Dia bukan hanya bisa bahasa Jepang, bahkan bahasa Mandarin pun bisa dia pakai dengan natural."},
      {jp:"この町は静かなばかりでなく、交通の便も意外といい。",kana:"この まち は しずか な ばかり でなく、こうつう の べん も いがい と いい。",romaji:"Kono machi wa shizuka na bakari denaku,koutsuu no ben mo igai to ii.",meaning:"Kota ini bukan cuma tenang, akses transportasinya juga ternyata bagus."},
      {jp:"彼女は歌が上手なばかりか、曲まで自分で作れる。",kana:"かのじょ は うた が じょうず な ばかりか、きょく まで じぶん で つくれる。",romaji:"Kanojo wa uta ga jouzu na bakarika,kyoku made jibun de tsukureru.",meaning:"Dia bukan hanya pandai menyanyi, bahkan bisa membuat lagu sendiri."},
      {jp:"値段が高いばかりでなく、予約まで取りにくいなんて驚いた。",kana:"ねだん が たかい ばかり でなく、よやく まで とりにくい なんて おどろいた。",romaji:"Nedan ga takai bakari denaku,yoyaku made torinikui nante odoroita.",meaning:"Saya kaget karena bukan cuma mahal, reservasinya pun susah didapat."},
      {jp:"そのアプリは便利なばかりか、画面も見やすくて使いやすい。",kana:"その あぷり は べんり な ばかりか、がめん も みやすくて つかいやすい。",romaji:"Sono apuri wa benri na bakarika,gamen mo miyasukute tsukaiyasui.",meaning:"Aplikasi itu bukan hanya praktis, tampilannya juga mudah dilihat dan gampang dipakai."}
    ]}
  ]},

  {id:"GR-N3-43",level:"N3",title:"〜はもちろん〜も",summary:"Menyatakan tentu saja A, dan B juga. Mirip bukan hanya A tapi juga B, dengan nuansa A sudah jelas sekali.",groups:[
    {name:"〜はもちろん〜も",description:"Dipakai saat A itu sudah jelas, lalu B juga ikut disebut.",sentences:[
      {jp:"週末はもちろん、平日の夜もこの店はかなり混んでいる。",kana:"しゅうまつ は もちろん、へいじつ の よる も この みせ は かなり こんでいる。",romaji:"Shuumatsu wa mochiron,heijitsu no yoru mo kono mise wa kanari kondeiru.",meaning:"Bukan cuma akhir pekan, malam hari di weekdays pun toko ini cukup ramai."},
      {jp:"彼は英語はもちろん、スペイン語も少し話せる。",kana:"かれ は えいご は もちろん、すぺいんご も すこし はなせる。",romaji:"Kare wa eigo wa mochiron,supeingo mo sukoshi hanaseru.",meaning:"Dia tentu saja bisa bahasa Inggris, dan sedikit bahasa Spanyol juga."},
      {jp:"味はもちろん、盛りつけまできれいで写真を撮りたくなる。",kana:"あじ は もちろん、もりつけ まで きれい で しゃしん を とりたく なる。",romaji:"Aji wa mochiron,moritsuke made kirei de shashin o toritaku naru.",meaning:"Bukan cuma rasanya, penyajiannya juga cantik sampai bikin ingin difoto."},
      {jp:"母は私の誕生日はもちろん、友達の名前までよく覚えている。",kana:"はは は わたし の たんじょうび は もちろん、ともだち の なまえ まで よく おぼえている。",romaji:"Haha wa watashi no tanjoubi wa mochiron,tomodachi no namae made yoku oboeteiru.",meaning:"Ibu tentu hafal ulang tahun saya, bahkan nama teman-teman saya juga dia ingat baik."},
      {jp:"この映画は大人はもちろん、子どもも楽しめる内容だと思う。",kana:"この えいが は おとな は もちろん、こども も たのしめる ないよう だ と おもう。",romaji:"Kono eiga wa otona wa mochiron,kodomo mo tanoshimeru naiyou da to omou.",meaning:"Menurut saya film ini bukan cuma bisa dinikmati orang dewasa, anak-anak pun bisa menikmati."}
    ]}
  ]},

  {id:"GR-N3-44",level:"N3",title:"たとえ〜ても",summary:"Menyatakan andaian ekstrim, artinya sekalipun pun tetap begitu.",groups:[
    {name:"たとえ〜ても",description:"Dipakai saat hasil di belakang kalimat tidak berubah walaupun kondisi di depan berubah.",sentences:[
      {jp:"たとえ少し時間がかかっても、自分で納得できる形にしたい。",kana:"たとえ すこし じかん が かかっても、じぶん で なっとく できる かたち に したい。",romaji:"Tatoe sukoshi jikan ga kakattemo,jibun de nattoku dekiru katachi ni shitai.",meaning:"Sekalipun butuh waktu sedikit lebih lama, saya ingin membuatnya dalam bentuk yang saya sendiri puas."},
      {jp:"たとえ反対されても、今回は自分の意見をちゃんと伝えるつもりだ。",kana:"たとえ はんたい されても、こんかい は じぶん の いけん を ちゃんと つたえる つもり だ。",romaji:"Tatoe hantai saretemo,konkai wa jibun no iken o chanto tsutaeru tsumori da.",meaning:"Sekalipun ditentang, kali ini saya berniat menyampaikan pendapat saya dengan jelas."},
      {jp:"たとえ小さな約束でも、守るかどうかで信頼は変わる。",kana:"たとえ ちいさな やくそく でも、まもる か どうか で しんらい は かわる。",romaji:"Tatoe chiisana yakusoku demo,mamoru ka douka de shinrai wa kawaru.",meaning:"Sekalipun janjinya kecil, dipercaya atau tidaknya seseorang bisa berubah dari situ."},
      {jp:"たとえ失敗しても、何もしないよりはずっといいと思う。",kana:"たとえ しっぱい しても、なに も しない より は ずっと いい と おもう。",romaji:"Tatoe shippai shitemo,nani mo shinai yori wa zutto ii to omou.",meaning:"Sekalipun gagal, menurut saya itu masih jauh lebih baik daripada tidak mencoba sama sekali."},
      {jp:"たとえ雨でも、このイベントは予定通り行われるそうです。",kana:"たとえ あめ でも、この いべんと は よていどおり おこなわれる そう です。",romaji:"Tatoe ame demo,kono ibento wa yoteidoori okonawareru sou desu.",meaning:"Sekalipun hujan, acara ini katanya akan tetap dilaksanakan sesuai rencana."}
    ]}
  ]},

  {id:"GR-N3-45",level:"N3",title:"どんなに〜ても / いくら〜ても",summary:"Menyatakan seberapa pun atau bagaimanapun pun, hasilnya tetap sama.",groups:[
    {name:"どんなに〜ても / いくら〜ても",description:"Dipakai untuk menegaskan bahwa banyaknya usaha atau kuatnya keadaan tidak mengubah hasil.",sentences:[
      {jp:"どんなに急いでも、この時間だと一時間はかかると思う。",kana:"どんな に いそいでも、この じかん だ と いちじかん は かかる と おもう。",romaji:"Donna ni isoidemo,kono jikan da to ichijikan wa kakaru to omou.",meaning:"Bagaimanapun juga kalau jam segini, saya rasa tetap butuh satu jam."},
      {jp:"いくら考えても、あの時もっといい言い方があった気がする。",kana:"いくら かんがえても、あの とき もっと いい いいかた が あった き が する。",romaji:"Ikura kangaetemo,ano toki motto ii iikata ga atta ki ga suru.",meaning:"Mau dipikirkan sebanyak apa pun, saya tetap merasa waktu itu seharusnya ada cara ngomong yang lebih baik."},
      {jp:"どんなに便利でも、使い方が複雑すぎると続かない。",kana:"どんな に べんり でも、つかいかた が ふくざつ すぎる と つづかない。",romaji:"Donna ni benri demo,tsukaikata ga fukuzatsu sugiru to tsuzukanai.",meaning:"Sepraktis apa pun, kalau cara pakainya terlalu rumit biasanya tidak bertahan dipakai."},
      {jp:"いくら謝っても、今すぐ元通りになるわけじゃない。",kana:"いくら あやまっても、いますぐ もとどおり に なる わけ じゃない。",romaji:"Ikura ayamattemo,imasugu motodoori ni naru wake janai.",meaning:"Minta maaf sebanyak apa pun, keadaan tidak langsung kembali seperti semula."},
      {jp:"どんなに好きでも、言葉にしなければ伝わらないこともある。",kana:"どんな に すき でも、ことば に しなければ つたわらない こと も ある。",romaji:"Donna ni suki demo,kotoba ni shinakereba tsutawaranai koto mo aru.",meaning:"Sebesar apa pun rasa suka itu, kadang kalau tidak diungkapkan tetap tidak akan tersampaikan."}
    ]}
  ]},

  {id:"GR-N3-46",level:"N3",title:"〜つもりだった",summary:"Menyatakan niat atau rencana di masa lalu yang ternyata tidak berjalan seperti itu.",groups:[
    {name:"〜つもりだった",description:"Artinya tadinya berniat, tadinya mau.",sentences:[
      {jp:"今日は早く寝るつもりだったのに、気づけばもうこんな時間だ。",kana:"きょう は はやく ねる つもり だった のに、きづけば もう こんな じかん だ。",romaji:"Kyou wa hayaku neru tsumori datta noni,kizukeba mou konna jikan da.",meaning:"Tadinya saya mau tidur cepat, tapi tahu-tahu sudah semalam ini."},
      {jp:"その場で返事するつもりだったけど、思ったより難しくて持ち帰った。",kana:"そのば で へんじ する つもり だった けど、おもった より むずかしくて もちかえった。",romaji:"Sonoba de henji suru tsumori datta kedo,omotta yori muzukashikute mochikaetta.",meaning:"Tadinya saya mau jawab saat itu juga, tapi ternyata lebih sulit dari dugaan jadi saya bawa pulang dulu."},
      {jp:"週末に部屋を片づけるつもりだったが、結局ほとんど寝てしまった。",kana:"しゅうまつ に へや を かたづける つもり だった が、けっきょく ほとんど ねて しまった。",romaji:"Shuumatsu ni heya o katazukeru tsumori datta ga,kekkyoku hotondo nete shimatta.",meaning:"Tadinya akhir pekan mau beres-beres kamar, tapi akhirnya malah lebih banyak tidur."},
      {jp:"もっと軽い話題にするつもりだったのに、いつのまにか真面目な話になっていた。",kana:"もっと かるい わだい に する つもり だった のに、いつのまにか まじめ な はなし に なっていた。",romaji:"Motto karui wadai ni suru tsumori datta noni,itsunomanika majime na hanashi ni natteita.",meaning:"Tadinya saya mau membawa topik yang ringan, tapi entah kapan malah jadi obrolan serius."},
      {jp:"大学を出たらすぐ働くつもりだったけど、今はもう少し勉強したい気持ちが強い。",kana:"だいがく を でたら すぐ はたらく つもり だった けど、いま は もう すこし べんきょう したい きもち が つよい。",romaji:"Daigaku o detara sugu hataraku tsumori datta kedo,ima wa mou sukoshi benkyou shitai kimochi ga tsuyoi.",meaning:"Dulu saya berniat langsung kerja setelah lulus kuliah, tapi sekarang justru makin ingin lanjut belajar."}
    ]}
  ]},

  {id:"GR-N3-47",level:"N3",title:"〜わけだ",summary:"Menyatakan kesimpulan yang terasa masuk akal, artinya pantesan, berarti, atau memang begitu ya.",groups:[
    {name:"〜わけだ",description:"Dipakai saat pembicara akhirnya mengerti alasan atau hubungan antar fakta.",sentences:[
      {jp:"毎日終電まで働いていたのか。疲れて見えるわけだ。",kana:"まいにち しゅうでん まで はたらいていた の か。つかれて みえる わけ だ。",romaji:"Mainichi shuuden made hataraiteita no ka.tsukarete mieru wake da.",meaning:"Oh, jadi kamu kerja sampai kereta terakhir setiap hari. Pantas saja kelihatan capek."},
      {jp:"この店、予約制だったんですね。急に行っても入れないわけだ。",kana:"この みせ、よやくせい だった んです ね。きゅう に いっても はいれない わけ だ。",romaji:"Kono mise,yoyakusei datta ndesu ne.kyuu ni ittemo hairenai wake da.",meaning:"Oh, jadi toko ini sistem reservasi ya. Pantas saja tidak bisa masuk kalau datang mendadak."},
      {jp:"子どものころから海外に住んでいたなら、発音が自然なわけだ。",kana:"こども の ころ から かいがい に すんでいた なら、はつおん が しぜん な わけ だ。",romaji:"Kodomo no koro kara kaigai ni sundeita nara,hatsuon ga shizen na wake da.",meaning:"Kalau dari kecil tinggal di luar negeri, pantesan pelafalannya natural."},
      {jp:"地図を見たら駅からかなり遠い。タクシーを使う人が多いわけだ。",kana:"ちず を みたら えき から かなり とおい。たくしー を つかう ひと が おおい わけ だ。",romaji:"Chizu o mitara eki kara kanari tooi.takushii o tsukau hito ga ooi wake da.",meaning:"Setelah lihat peta, ternyata tempatnya cukup jauh dari stasiun. Pantas saja banyak orang naik taksi."},
      {jp:"朝から何も食べていなかったのか。それなら集中できないわけだよ。",kana:"あさ から なにも たべて いなかった の か。それなら しゅうちゅう できない わけ だ よ。",romaji:"Asa kara nanimo tabete inakatta no ka.sorenara shuuchuu dekinai wake da yo.",meaning:"Oh, jadi sejak pagi kamu belum makan apa-apa. Kalau begitu wajar kalau tidak bisa fokus."}
    ]}
  ]},

  {id:"GR-N3-48",level:"N3",title:"つまり",summary:"Dipakai untuk merangkum atau menyederhanakan isi pembicaraan, artinya singkatnya atau dengan kata lain.",groups:[
    {name:"つまり",description:"Membantu menyimpulkan inti pembicaraan dengan lebih jelas.",sentences:[
      {jp:"資料は今日中、発表は明日、つまり今夜が山場ってことだね。",kana:"しりょう は きょうじゅう、はっぴょう は あした、つまり こんや が やまば って こと だ ね。",romaji:"Shiryou wa kyoujuu,happyou wa ashita,tsumari konya ga yamaba tte koto da ne.",meaning:"Materinya harus selesai hari ini dan presentasinya besok, jadi singkatnya malam ini momen paling beratnya."},
      {jp:"彼は参加しないけど意見は出す。つまり裏方として関わるんだと思う。",kana:"かれ は さんか しない けど いけん は だす。つまり うらかた として かかわる んだ と おもう。",romaji:"Kare wa sanka shinai kedo iken wa dasu.tsumari urakata toshite kakawaru nda to omou.",meaning:"Dia tidak ikut terjun langsung, tapi tetap memberi pendapat. Jadi intinya dia terlibat sebagai orang belakang layar."},
      {jp:"電車もバスも止まっている。つまり今日は家を出ないほうがいい。",kana:"でんしゃ も ばす も とまっている。つまり きょう は いえ を でない ほう が いい。",romaji:"Densha mo basu mo tomatteiru.tsumari kyou wa ie o denai hou ga ii.",meaning:"Kereta dan bus sama-sama berhenti. Artinya hari ini lebih baik tidak usah keluar rumah."},
      {jp:"必要なのは才能だけじゃなくて、続ける工夫。つまり仕組みづくりなんだよね。",kana:"ひつよう な の は さいのう だけ じゃなくて、つづける くふう。つまり しくみづくり なんだ よ ね。",romaji:"Hitsuyou na no wa sainou dake janakute,tsuzukeru kufuu.tsumari shikumizukuri nanda yo ne.",meaning:"Yang dibutuhkan bukan cuma bakat, tapi juga cara supaya bisa terus jalan. Intinya adalah membangun sistem."},
      {jp:"予定より人が多いということは、つまり席が足りない可能性がある。",kana:"よてい より ひと が おおい という こと は、つまり せき が たりない かのうせい が ある。",romaji:"Yotei yori hito ga ooi toiu koto ha,tsumari seki ga tarinai kanousei ga aru.",meaning:"Kalau jumlah orang lebih banyak dari rencana, artinya ada kemungkinan kursinya tidak cukup."}
    ]}
  ]},

  {id:"GR-N3-49",level:"N3",title:"〜ということだ①",summary:"Menyatakan informasi yang didengar atau disampaikan dari sumber lain. Nuansanya agak formal, seperti katanya atau menurut informasi.",groups:[
    {name:"伝聞",description:"[Informasi] + ということだ. Dipakai untuk menyampaikan info dari orang lain atau dari sumber tertentu.",sentences:[
      {jp:"来週の会議はオンラインに変更になったということです。",kana:"らいしゅう の かいぎ は おんらいん に へんこう に なった という こと です。",romaji:"Raishuu no kaigi wa onrain ni henkou ni natta toiu koto desu.",meaning:"Katanya rapat minggu depan diubah menjadi online."},
      {jp:"担当の方によると、結果は明日中に出るということだ。",kana:"たんとう の かた によると、けっか は あしたじゅう に でる という こと だ。",romaji:"Tantou no kata niyoruto,kekka wa ashitajuu ni deru toiu koto da.",meaning:"Menurut orang yang bertanggung jawab, hasilnya katanya akan keluar besok."},
      {jp:"ニュースでは、この週末は気温がかなり下がるということだった。",kana:"にゅーす では、この しゅうまつ は きおん が かなり さがる という こと だった。",romaji:"Nyuusu deha,kono shuumatsu wa kion ga kanari sagaru toiu koto datta.",meaning:"Di berita dikatakan kalau akhir pekan ini suhu akan turun cukup drastis."},
      {jp:"彼は今年いっぱいで今の部署を離れるということです。",kana:"かれ は ことし いっぱい で いま の ぶしょ を はなれる という こと です。",romaji:"Kare wa kotoshi ippai de ima no busho o hanareru toiu koto desu.",meaning:"Kabarnya dia akan meninggalkan divisi sekarang pada akhir tahun ini."},
      {jp:"先生のお話では、今回は再提出も認められるということでした。",kana:"せんせい の おはなし では、こんかい は さいていしゅつ も みとめられる という こと でした。",romaji:"Sensei no ohanashi deha,konkai wa saiteishutsu mo mitomerareru toiu koto deshita.",meaning:"Menurut penjelasan sensei, kali ini pengumpulan ulang juga diperbolehkan."}
    ]}
  ]},

  {id:"GR-N3-50",level:"N3",title:"〜ことがある / 〜こともある",summary:"Menyatakan ada kalanya, kadang-kadang, atau pernah terjadi dalam beberapa kasus.",groups:[
    {name:"〜ことがある / 〜こともある",description:"Dipakai untuk kebiasaan sesekali atau kemungkinan yang kadang terjadi.",sentences:[
      {jp:"忙しい時期は、昼ごはんを食べそこねることがある。",kana:"いそがしい じき は、ひるごはん を たべそこねる こと が ある。",romaji:"Isogashii jiki ha,hirugohan o tabesokoneru koto ga aru.",meaning:"Di masa-masa sibuk, kadang saya sampai kelewat makan siang."},
      {jp:"どんなに仲がよくても、言い方ひとつですれ違うこともある。",kana:"どんな に なか が よくても、いいかた ひとつ で すれちがう こと も ある。",romaji:"Donna ni naka ga yokutemo,iikata hitotsu de surechigau koto mo aru.",meaning:"Meski hubungannya dekat, kadang cuma gara-gara cara bicara saja orang bisa salah paham."},
      {jp:"休日は早起きして散歩することがある。",kana:"きゅうじつ は はやおき して さんぽ する こと が ある。",romaji:"Kyuujitsu wa hayaoki shite sanpo suru koto ga aru.",meaning:"Kadang saat libur saya bangun pagi lalu pergi jalan-jalan."},
      {jp:"このアプリは便利だけど、ときどき動きが重くなることがある。",kana:"この あぷり は べんり だけど、ときどき うごき が おもく なる こと が ある。",romaji:"Kono apuri wa benri dakedo,tokidoki ugoki ga omoku naru koto ga aru.",meaning:"Aplikasi ini memang praktis, tapi kadang-kadang performanya menjadi berat."},
      {jp:"人前では平気そうに見えても、一人になると急に不安になることもある。",kana:"ひとまえ では へいきそう に みえても、ひとり に なる と きゅう に ふあん に なる こと も ある。",romaji:"Hitomae deha heikisou ni mietemo,hitori ni naru to kyuu ni fuan ni naru koto mo aru.",meaning:"Walaupun di depan orang terlihat tenang, kadang saat sendirian rasa cemas bisa datang tiba-tiba."}
    ]}
  ]}
,

  {id:"GR-N3-51",level:"N3",title:"〜に対して①",summary:"Menyatakan arah perasaan, tindakan, tanggapan, atau sikap terhadap sesuatu atau seseorang.",groups:[
    {name:"〜に対して",description:"[Orang/hal] + に対して. Artinya terhadap, kepada, untuk.",sentences:[
      {jp:"お客様に対して失礼のない言い方を意識したい。",kana:"おきゃくさま にたいして しつれい の ない いいかた を いしき したい。",romaji:"Okyakusama nitaishite shitsurei no nai iikata o ishiki shitai.",meaning:"Saya ingin sadar memilih cara bicara yang tidak terkesan tidak sopan kepada pelanggan."},
      {jp:"その発言に対して、会場からすぐ質問が出た。",kana:"その はつげん にたいして、かいじょう から すぐ しつもん が でた。",romaji:"Sono hatsugen nitaishite,kaijou kara sugu shitsumon ga deta.",meaning:"Terhadap pernyataan itu, langsung muncul pertanyaan dari peserta."},
      {jp:"親に対して強い言い方をしてしまって、少し後悔している。",kana:"おや にたいして つよい いいかた を して しまって、すこし こうかい している。",romaji:"Oya nitaishite tsuyoi iikata o shite shimatte,sukoshi koukai shiteiru.",meaning:"Saya menyesal sedikit karena sempat bicara terlalu keras kepada orang tua."},
      {jp:"このアンケートは新入社員に対して行われたものです。",kana:"この あんけーと は しんにゅうしゃいん にたいして おこなわれた もの です。",romaji:"Kono ankeeto wa shinnyuushain nitaishite okonawareta mono desu.",meaning:"Survei ini dilakukan kepada para karyawan baru."},
      {jp:"自分に対して厳しすぎると、かえって続かなくなることがある。",kana:"じぶん にたいして きびしすぎる と、かえって つづかなく なる こと が ある。",romaji:"Jibun nitaishite kibishisugiru to,kaette tsuzukanaku naru koto ga aru.",meaning:"Kalau terlalu keras terhadap diri sendiri, kadang justru jadi tidak bisa bertahan."}
    ]}
  ]},

  {id:"GR-N3-52",level:"N3",title:"〜向け",summary:"Menyatakan sasaran atau target yang dituju, artinya untuk, ditujukan bagi.",groups:[
    {name:"〜向け",description:"[Target] + 向け. Banyak dipakai untuk produk, layanan, atau isi tertentu.",sentences:[
      {jp:"この講座は日本で働きたい人向けに作られている。",kana:"この こうざ は にほん で はたらきたい ひとむけ に つくられている。",romaji:"Kono kouza wa nihon de hatarakitai hitomuke ni tsukurareteiru.",meaning:"Kelas ini dibuat untuk orang-orang yang ingin bekerja di Jepang."},
      {jp:"子ども向けのイベントだけど、大人が見ても十分楽しめる。",kana:"こどもむけ の いべんと だけど、おとな が みても じゅうぶん たのしめる。",romaji:"Kodomomuke no ibento dakedo,otona ga mitemo juubun tanoshimeru.",meaning:"Meski acara ini ditujukan untuk anak-anak, orang dewasa pun tetap bisa menikmatinya."},
      {jp:"海外向けのページには英語版も用意してあります。",kana:"かいがいむけ の ぺーじ に は えいごばん も ようい して あります。",romaji:"Kaigaimuke no peeji ni wa eigoban mo youi shite arimasu.",meaning:"Untuk halaman yang ditujukan ke luar negeri, versi bahasa Inggris juga sudah disiapkan."},
      {jp:"初心者向けだから説明がていねいで助かる。",kana:"しょしんしゃむけ だ から せつめい が ていねい で たすかる。",romaji:"Shoshinshamuke da kara setsumei ga teinei de tasukaru.",meaning:"Karena ini ditujukan untuk pemula, penjelasannya rapi dan sangat membantu."},
      {jp:"この商品は女性向けに見えるけど、実際はかなり幅広く使われている。",kana:"この しょうひん は じょせいむけ に みえる けど、じっさい は かなり はばひろく つかわれている。",romaji:"Kono shouhin wa joseimuke ni mieru kedo,jissai wa kanari habahiroku tsukawareteiru.",meaning:"Produk ini kelihatan seperti ditujukan untuk perempuan, tapi sebenarnya dipakai cukup luas."}
    ]}
  ]},

  {id:"GR-N3-53",level:"N3",title:"〜というと / 〜といえば / 〜といったら",summary:"Dipakai untuk membawa topik terkait, menyorot sesuatu yang khas, atau mengangkat hal yang langsung terbayang saat kata itu disebut.",groups:[
    {name:"〜というと / 〜といえば / 〜といったら",description:"Artinya kalau bicara soal, kalau menyebut, atau ngomong-ngomong tentang.",sentences:[
      {jp:"京都というと、やっぱり静かな寺や町家の景色を思い出す。",kana:"きょうと というと、やっぱり しずかな てら や まちや の けしき を おもいだす。",romaji:"Kyouto toiuto,yappari shizukana tera ya machiya no keshiki o omoidasu.",meaning:"Kalau bicara soal Kyoto, yang langsung teringat tetap pemandangan kuil dan rumah tradisional yang tenang."},
      {jp:"夏といえば、子どものころは毎年かき氷を楽しみにしていた。",kana:"なつ といえば、こども の ころ は まいとし かきごおり を たのしみ に していた。",romaji:"Natsu toieba,kodomo no koro wa maitoshi kakigoori o tanoshimi ni shiteita.",meaning:"Kalau menyebut musim panas, waktu kecil saya selalu menunggu-nunggu es serut."},
      {jp:"この町の冬といったら、風が強くて顔が痛いくらいだよ。",kana:"この まち の ふゆ といったら、かぜ が つよくて かお が いたい くらい だ よ。",romaji:"Kono machi no fuyu toittara,kaze ga tsuyokute kao ga itai kurai da yo.",meaning:"Kalau soal musim dingin di kota ini, anginnya kencang sekali sampai muka terasa sakit."},
      {jp:"週末の楽しみというと、最近は早起きしてパン屋に行くことかな。",kana:"しゅうまつ の たのしみ というと、さいきん は はやおき して ぱんや に いく こと かな。",romaji:"Shuumatsu no tanoshimi toiuto,saikin wa hayaoki shite panya ni iku koto kana.",meaning:"Kalau bicara soal kesenangan di akhir pekan, belakangan ini mungkin bangun pagi lalu ke toko roti."},
      {jp:"日本の春といえば桜だけど、私はまだ朝の空気のほうが印象に残っている。",kana:"にほん の はる といえば さくら だけど、わたし は まだ あさ の くうき の ほう が いんしょう に のこっている。",romaji:"Nihon no haru toieba sakura dakedo,watashi wa mada asa no kuuki no hou ga inshou ni nokotteiru.",meaning:"Kalau menyebut musim semi di Jepang memang sakura, tapi buat saya udara paginya justru lebih membekas."}
    ]}
  ]},

  {id:"GR-N3-54",level:"N3",title:"〜について",summary:"Menyatakan topik atau hal yang dibahas, artinya tentang atau mengenai.",groups:[
    {name:"〜について",description:"[Topik] + について. Dipakai untuk bahasan, penjelasan, diskusi, atau pertanyaan.",sentences:[
      {jp:"日本での就職活動について、先輩にいろいろ聞いてみたい。",kana:"にほん で の しゅうしょくかつどう について、せんぱい に いろいろ きいてみたい。",romaji:"Nihon de no shuushokukatsudou nitsuite,senpai ni iroiro kiitemitai.",meaning:"Saya ingin bertanya macam-macam pada senior tentang proses cari kerja di Jepang."},
      {jp:"この件については、あとで改めて共有します。",kana:"この けん について は、あと で あらためて きょうゆう します。",romaji:"Kono ken nitsuite ha,ato de aratamete kyouyuu shimasu.",meaning:"Soal hal ini, nanti akan saya bagikan lagi dengan lebih rapi."},
      {jp:"旅行先について調べていたら、行きたい場所が増えてしまった。",kana:"りょこうさき について しらべていたら、いきたい ばしょ が ふえて しまった。",romaji:"Ryokousaki nitsuite shirabeteitara,ikitai basho ga fuete shimatta.",meaning:"Waktu mencari tahu soal tujuan perjalanan, tempat yang ingin saya kunjungi malah jadi makin banyak."},
      {jp:"先生はレポートの構成について具体的にアドバイスしてくれた。",kana:"せんせい は れぽーと の こうせい について ぐたいてき に あどばいす して くれた。",romaji:"Sensei wa repooto no kousei nitsuite gutaiteki ni adobaisu shite kureta.",meaning:"Sensei memberi saran yang konkret tentang struktur laporan saya."},
      {jp:"環境問題について話し始めると、彼はいつも熱が入る。",kana:"かんきょう もんだい について はなしはじめる と、かれ は いつも ねつ が はいる。",romaji:"Kankyou mondai nitsuite hanashihajimeru to,kare wa itsumo netsu ga hairu.",meaning:"Kalau mulai bicara soal isu lingkungan, dia selalu langsung jadi bersemangat."}
    ]}
  ]},

  {id:"GR-N3-55",level:"N3",title:"〜ことだ",summary:"Menyatakan saran atau nasihat yang tegas, artinya sebaiknya lakukan atau jangan lakukan.",groups:[
    {name:"〜ことだ",description:"[V辞書形 / Vない形] + ことだ. Sering dipakai untuk memberi nasihat.",sentences:[
      {jp:"早く慣れたいなら、毎日少しでも声に出して練習することだ。",kana:"はやく なれたい なら、まいにち すこし でも こえ に だして れんしゅう する こと だ。",romaji:"Hayaku naretai nara,mainichi sukoshi demo koe ni dashite renshuu suru koto da.",meaning:"Kalau ingin cepat terbiasa, yang perlu dilakukan adalah latihan keras-keras setiap hari walau sedikit."},
      {jp:"体調を崩したくないなら、まず睡眠時間を削らないことだよ。",kana:"たいちょう を くずしたくない なら、まず すいみん じかん を けずらない こと だ よ。",romaji:"Taichou o kuzushitakunai nara,mazu suimin jikan o kezuranai koto da yo.",meaning:"Kalau tidak ingin jatuh sakit, pertama-tama jangan memangkas jam tidur."},
      {jp:"迷ったときほど、一人で決めつけないことだ。",kana:"まよった とき ほど、ひとり で きめつけない こと だ。",romaji:"Mayotta toki hodo,hitori de kimetsukenai koto da.",meaning:"Justru saat bingung, jangan langsung menyimpulkan semuanya sendiri."},
      {jp:"新しい環境で大事なのは、無理に背伸びしすぎないことだと思う。",kana:"あたらしい かんきょう で だいじ な の は、むり に せのび しすぎない こと だ と おもう。",romaji:"Atarashii kankyou de daiji na no ha,muri ni senobi shisuginai koto da to omou.",meaning:"Menurut saya, yang penting di lingkungan baru adalah jangan memaksa diri tampil berlebihan."},
      {jp:"結局いちばん効くのは、続ける仕組みを作ることだ。",kana:"けっきょく いちばん きく の は、つづける しくみ を つくる こと だ。",romaji:"Kekkyoku ichiban kiku no ha,tsuzukeru shikumi o tsukuru koto da.",meaning:"Pada akhirnya yang paling efektif adalah membuat sistem supaya bisa terus berlanjut."}
    ]}
  ]},

  {id:"GR-N3-58",level:"N3",title:"〜たところ",summary:"Menyatakan setelah melakukan sesuatu lalu mendapat hasil tertentu, atau kebetulan hasilnya seperti itu.",groups:[
    {name:"〜たところ",description:"[Vた] + ところ. Sering dipakai saat tindakan tadi langsung menghasilkan penemuan atau respons.",sentences:[
      {jp:"駅員さんに聞いたところ、次の電車は十分後だと言われた。",kana:"えきいんさん に きいた ところ、つぎ の でんしゃ は じゅっぷんご だ と いわれた。",romaji:"Ekiinsan ni kiita tokoro,tsugi no densha wa juppungo da to iwareta.",meaning:"Setelah saya tanya petugas stasiun, katanya kereta berikutnya datang sepuluh menit lagi."},
      {jp:"試しにこの方法を使ってみたところ、思ったよりずっと簡単だった。",kana:"ためし に この ほうほう を つかって みた ところ、おもった より ずっと かんたん だった。",romaji:"Tameshi ni kono houhou o tsukatte mita tokoro,omotta yori zutto kantan datta.",meaning:"Setelah saya coba pakai cara ini, ternyata jauh lebih mudah dari dugaan."},
      {jp:"病院で診てもらったところ、大きな問題はないそうです。",kana:"びょういん で みて もらった ところ、おおきな もんだい は ない そう です。",romaji:"Byouin de mite moratta tokoro,ookina mondai wa nai sou desu.",meaning:"Setelah diperiksa di rumah sakit, katanya tidak ada masalah besar."},
      {jp:"管理人に確認したところ、その部屋はもう埋まっていた。",kana:"かんりにん に かくにん した ところ、その へや は もう うまっていた。",romaji:"Kanrinin ni kakunin shita tokoro,sono heya wa mou umatteita.",meaning:"Setelah saya cek ke penjaga gedung, kamar itu ternyata sudah terisi."},
      {jp:"写真を見返したところ、肝心な場面だけ撮れていなかった。",kana:"しゃしん を みかえした ところ、かんじん な ばめん だけ とれていなかった。",romaji:"Shashin o mikaeshita tokoro,kanjin na bamen dake toreteinakatta.",meaning:"Setelah saya lihat lagi fotonya, justru momen yang paling penting malah tidak terambil."}
    ]}
  ]},

  {id:"GR-N3-59",level:"N3",title:"〜うちに①",summary:"Menyatakan selama suatu keadaan masih berlangsung, sebelum keadaan itu berubah.",groups:[
    {name:"〜うちに",description:"Artinya selagi, selama masih, atau sebelum terlambat.",sentences:[
      {jp:"温かいうちに食べたほうが、このスープは絶対おいしい。",kana:"あたたかい うち に たべた ほう が、この すーぷ は ぜったい おいしい。",romaji:"Atatakai uchi ni tabeta hou ga,kono suupu wa zettai oishii.",meaning:"Sup ini pasti lebih enak kalau dimakan selagi masih hangat."},
      {jp:"日本にいるうちに、行きたかった場所へできるだけ行っておきたい。",kana:"にほん に いる うち に、いきたかった ばしょ へ できるだけ いって おきたい。",romaji:"Nihon ni iru uchi ni,ikitakatta basho e dekirudake itte okitai.",meaning:"Selagi masih di Jepang, saya ingin pergi ke sebanyak mungkin tempat yang sudah lama ingin saya kunjungi."},
      {jp:"若いうちにいろんな失敗をしておくのも悪くないと思う。",kana:"わかい うち に いろんな しっぱい を して おく の も わるくない と おもう。",romaji:"Wakai uchi ni ironna shippai o shite oku no mo warukunai to omou.",meaning:"Menurut saya, tidak buruk juga mengalami banyak kegagalan selagi masih muda."},
      {jp:"忘れないうちに、今日決まったことをメモしておこう。",kana:"わすれない うち に、きょう きまった こと を めも して おこう。",romaji:"Wasurenai uchi ni,kyou kimatta koto o memo shite okou.",meaning:"Sebelum lupa, mari kita catat dulu hal-hal yang diputuskan hari ini."},
      {jp:"雨が強くならないうちに、急いで駅まで歩こう。",kana:"あめ が つよく ならない うち に、いそいで えき まで あるこう。",romaji:"Ame ga tsuyoku naranai uchi ni,isoide eki made arukou.",meaning:"Sebelum hujannya makin deras, ayo cepat jalan ke stasiun."}
    ]}
  ]},

  {id:"GR-N3-60",level:"N3",title:"〜かけ",summary:"Menyatakan sesuatu yang setengah jalan, belum selesai, atau baru mulai.",groups:[
    {name:"〜かけ",description:"Bisa dipakai untuk benda, tindakan, atau proses yang belum tuntas.",sentences:[
      {jp:"読みかけの小説が気になって、寝る前にまた開いてしまった。",kana:"よみかけ の しょうせつ が き に なって、ねる まえ に また ひらいて しまった。",romaji:"Yomikake no shousetsu ga ki ni natte,neru mae ni mata hiraite shimatta.",meaning:"Karena novel yang belum selesai saya baca itu terus kepikiran, sebelum tidur saya buka lagi."},
      {jp:"言いかけてやめると、逆にすごく気になるよ。",kana:"いいかけて やめる と、ぎゃく に すごく き に なる よ。",romaji:"Iikakete yameru to,gyaku ni sugoku ki ni naru yo.",meaning:"Kalau sudah mulai bicara lalu berhenti, malah jadi bikin orang penasaran sekali."},
      {jp:"食べかけのケーキを冷蔵庫に入れておいた。",kana:"たべかけ の けーき を れいぞうこ に いれて おいた。",romaji:"Tabekake no keeki o reizouko ni irete oita.",meaning:"Kue yang belum habis saya makan tadi saya simpan ke kulkas."},
      {jp:"その件はやりかけのまま止まっているから、今週中に片づけたい。",kana:"その けん は やりかけ の まま とまっている から、こんしゅうちゅう に かたづけたい。",romaji:"Sono ken wa yarikake no mama tomatteiru kara,konshuuchuu ni katazuketai.",meaning:"Karena urusan itu berhenti dalam keadaan setengah jalan, saya ingin menuntaskannya minggu ini."},
      {jp:"彼は何か言いかけたけど、結局そのまま黙ってしまった。",kana:"かれ は なにか いいかけた けど、けっきょく そのまま だまって しまった。",romaji:"Kare wa nanika iikaketa kedo,kekkyoku sonomama damatte shimatta.",meaning:"Dia sempat mulai mengatakan sesuatu, tapi akhirnya malah diam begitu saja."}
    ]}
  ]},

  {id:"GR-N3-61",level:"N3",title:"〜てからでないと / 〜てからでなければ",summary:"Menyatakan sesuatu baru bisa dilakukan setelah langkah sebelumnya selesai. Artinya kalau belum itu, tidak bisa.",groups:[
    {name:"〜てからでないと / 〜てからでなければ",description:"Menekankan urutan, tahap A dulu, baru B bisa.",sentences:[
      {jp:"一度上司に確認してからでないと、はっきりした返事はできません。",kana:"いちど じょうし に かくにん して から でない と、はっきり した へんじ は できません。",romaji:"Ichido joushi ni kakunin shite kara denai to,hakkiri shita henji wa dekimasen.",meaning:"Kalau belum saya cek ke atasan, saya belum bisa memberi jawaban yang pasti."},
      {jp:"現物を見てからでなければ、細かい判断は難しいと思います。",kana:"げんぶつ を みて から でなければ、こまかい はんだん は むずかしい と おもいます。",romaji:"Genbutsu o mite kara denakereba,komakai handan wa muzukashii to omoimasu.",meaning:"Kalau belum melihat barang aslinya, saya rasa sulit membuat penilaian detail."},
      {jp:"登録を済ませてからでないと、このサービスは使えない。",kana:"とうろく を すませて から でない と、この さーびす は つかえない。",romaji:"Touroku o sumasete kara denai to,kono saabisu wa tsukaenai.",meaning:"Kalau belum selesai daftar, layanan ini tidak bisa dipakai."},
      {jp:"実際に話してみてからでなければ、その人の雰囲気はわからない。",kana:"じっさい に はなして みて から でなければ、その ひと の ふんいき は わからない。",romaji:"Jissai ni hanashite mite kara denakereba,sono hito no funiki wa wakaranai.",meaning:"Kalau belum benar-benar bicara langsung, suasana orang itu tidak akan terasa."},
      {jp:"全部そろってからでないと、発送の手続きに進めないそうだ。",kana:"ぜんぶ そろって から でない と、はっそう の てつづき に すすめない そう だ。",romaji:"Zenbu sorotte kara denai to,hassou no tetsuzuki ni susumenai sou da.",meaning:"Katanya kalau semuanya belum lengkap, proses pengiriman belum bisa dilanjutkan."}
    ]}
  ]},

  {id:"GR-N3-62",level:"N3",title:"〜てはじめて",summary:"Menyatakan baru setelah mengalami atau melakukan sesuatu, seseorang benar-benar paham atau menyadari.",groups:[
    {name:"〜てはじめて",description:"Artinya baru setelah, barulah.",sentences:[
      {jp:"一人暮らしをしてはじめて、家事の大変さがわかった。",kana:"ひとりぐらし を して はじめて、かじ の たいへんさ が わかった。",romaji:"Hitorigurashi o shite hajimete,kaji no taihensa ga wakatta.",meaning:"Baru setelah tinggal sendiri, saya paham repotnya mengurus pekerjaan rumah."},
      {jp:"失ってはじめて、その存在の大きさに気づくこともある。",kana:"うしなって はじめて、その そんざい の おおきさ に きづく こと も ある。",romaji:"Ushinatte hajimete,sono sonzai no ookisa ni kizuku koto mo aru.",meaning:"Kadang baru setelah kehilangan, kita sadar betapa besar arti keberadaan sesuatu itu."},
      {jp:"実際に使ってはじめて、この道具の便利さが実感できた。",kana:"じっさい に つかって はじめて、この どうぐ の べんりさ が じっかん できた。",romaji:"Jissai ni tsukatte hajimete,kono dougu no benrisa ga jikkan dekita.",meaning:"Baru setelah dipakai langsung, saya benar-benar merasakan praktisnya alat ini."},
      {jp:"海外で暮らしてはじめて、日本の四季の細かさを懐かしく思った。",kana:"かいがい で くらして はじめて、にほん の しき の こまかさ を なつかしく おもった。",romaji:"Kaigai de kurashite hajimete,nihon no shiki no komakasa o natsukashiku omotta.",meaning:"Baru setelah tinggal di luar negeri, saya jadi merindukan detail pergantian musim di Jepang."},
      {jp:"人前で話してはじめて、自分の癖に気づく人も多い。",kana:"ひとまえ で はなして はじめて、じぶん の くせ に きづく ひと も おおい。",romaji:"Hitomae de hanashite hajimete,jibun no kuse ni kizuku hito mo ooi.",meaning:"Banyak orang baru sadar kebiasaan bicara mereka sendiri setelah berbicara di depan umum."}
    ]}
  ]},

  {id:"GR-N3-63",level:"N3",title:"〜ところだった",summary:"Menyatakan hampir saja akan, nyaris, atau pas sekali hampir terjadi.",groups:[
    {name:"〜ところだった",description:"Bisa dipakai untuk nyaris melakukan sesuatu atau hampir terjadi sesuatu.",sentences:[
      {jp:"もう少しで大事なメールを削除するところだった。",kana:"もう すこし で だいじ な めーる を さくじょ する ところ だった。",romaji:"Mou sukoshi de daiji na meeru o sakujo suru tokoro datta.",meaning:"Sedikit lagi saya hampir menghapus email penting."},
      {jp:"急いで降りたら、スマホを電車に置き忘れるところだった。",kana:"いそいで おりたら、すまほ を でんしゃ に おきわすれる ところ だった。",romaji:"Isoide oritara,sumaho o densha ni okiwasureru tokoro datta.",meaning:"Karena turun terburu-buru, saya hampir meninggalkan HP di kereta."},
      {jp:"寝不足でぼんやりしていて、会議の開始時間を勘違いするところだった。",kana:"ねぶそく で ぼんやり していて、かいぎ の かいし じかん を かんちがい する ところ だった。",romaji:"Nebusoku de bonyari shiteite,kaigi no kaishi jikan o kanchigai suru tokoro datta.",meaning:"Karena kurang tidur dan agak blank, saya nyaris salah paham soal jam mulai rapat."},
      {jp:"信号が変わるのが遅かったら、雨の中でかなり待つところだった。",kana:"しんごう が かわる の が おそかったら、あめ の なか で かなり まつ ところ だった。",romaji:"Shingou ga kawaru no ga osokattara,ame no naka de kanari matsu tokoro datta.",meaning:"Kalau lampunya ganti lebih lama sedikit, saya hampir harus menunggu cukup lama di tengah hujan."},
      {jp:"彼の一言がなかったら、私はそのままあきらめるところでした。",kana:"かれ の ひとこと が なかったら、わたし は そのまま あきらめる ところ でした。",romaji:"Kare no hitokoto ga nakattara,watashi wa sonomama akirameru tokoro deshita.",meaning:"Kalau bukan karena satu kalimat dari dia, saya mungkin sudah menyerah begitu saja."}
    ]}
  ]},

  {id:"GR-N3-64",level:"N3",title:"〜たとたん",summary:"Menyatakan tepat pada saat sesuatu terjadi, hal lain langsung terjadi sesudahnya.",groups:[
    {name:"〜たとたん",description:"Artinya begitu, tepat setelah itu, seketika.",sentences:[
      {jp:"家を出たとたん、急に雨が強くなってきた。",kana:"いえ を でた とたん、きゅう に あめ が つよく なってきた。",romaji:"Ie o deta totan,kyuu ni ame ga tsuyoku nattekita.",meaning:"Begitu keluar rumah, hujannya tiba-tiba langsung makin deras."},
      {jp:"席に座ったとたん、どっと眠気がきた。",kana:"せき に すわった とたん、どっと ねむけ が きた。",romaji:"Seki ni suwatta totan,dotto nemuke ga kita.",meaning:"Begitu duduk di kursi, rasa kantuk langsung datang sekaligus."},
      {jp:"電気を消したとたん、外の虫の音が急にはっきり聞こえた。",kana:"でんき を けした とたん、そと の むし の おと が きゅう に はっきり きこえた。",romaji:"Denki o keshita totan,soto no mushi no oto ga kyuu ni hakkiri kikoeta.",meaning:"Begitu lampu dimatikan, suara serangga di luar langsung terdengar jelas."},
      {jp:"安心したとたん、今まで張っていた気持ちが一気にほどけた。",kana:"あんしん した とたん、いま まで はっていた きもち が いっき に ほどけた。",romaji:"Anshin shita totan,ima made hatteita kimochi ga ikki ni hodoketa.",meaning:"Begitu merasa lega, ketegangan yang saya tahan dari tadi langsung lepas semua."},
      {jp:"ドアが開いたとたん、焼きたてのパンの香りが広がった。",kana:"どあ が あいた とたん、やきたて の ぱん の かおり が ひろがった。",romaji:"Doa ga aita totan,yakitate no pan no kaori ga hirogatta.",meaning:"Begitu pintu dibuka, aroma roti yang baru matang langsung menyebar."}
    ]}
  ]},

  {id:"GR-N3-65",level:"N3",title:"〜とともに",summary:"Menyatakan bersamaan dengan, bersama dengan, atau seiring dengan suatu perubahan.",groups:[
    {name:"〜とともに",description:"Bisa berarti bersama, bersamaan, atau seiring.",sentences:[
      {jp:"年を重ねるとともに、選ぶものの基準も少しずつ変わってきた。",kana:"とし を かさねる とともに、えらぶ もの の きじゅん も すこしずつ かわってきた。",romaji:"Toshi o kasaneru totomoni,erabu mono no kijun mo sukoshizutsu kawattekita.",meaning:"Seiring bertambah usia, standar saya dalam memilih sesuatu juga pelan-pelan berubah."},
      {jp:"駅前の開発とともに、この辺りの雰囲気もかなり変わった。",kana:"えきまえ の かいはつ とともに、この あたり の ふんいき も かなり かわった。",romaji:"Ekimae no kaihatsu totomoni,kono atari no funiki mo kanari kawatta.",meaning:"Seiring pembangunan di depan stasiun, suasana daerah sekitar sini juga banyak berubah."},
      {jp:"彼は笑顔とともに、温かい言葉をかけてくれた。",kana:"かれ は えがお とともに、あたたかい ことば を かけて くれた。",romaji:"Kare wa egao totomoni,atatakai kotoba o kakete kureta.",meaning:"Dia memberikan kata-kata hangat bersamaan dengan senyumannya."},
      {jp:"卒業とともに、それぞれの生活が一気に別の方向へ進み始めた。",kana:"そつぎょう とともに、それぞれ の せいかつ が いっき に べつ の ほうこう へ すすみはじめた。",romaji:"Sotsugyou totomoni,sorezore no seikatsu ga ikki ni betsu no houkou e susumihajimeta.",meaning:"Begitu lulus, hidup masing-masing langsung bergerak ke arah yang berbeda-beda."},
      {jp:"春とともに、この町にも少しずつ人の動きが戻ってきた。",kana:"はる とともに、この まち に も すこしずつ ひと の うごき が もどってきた。",romaji:"Haru totomoni,kono machi ni mo sukoshizutsu hito no ugoki ga modottekita.",meaning:"Seiring datangnya musim semi, pergerakan orang-orang di kota ini juga pelan-pelan kembali."}
    ]}
  ]},

  {id:"GR-N3-66",level:"N3",title:"〜たて",summary:"Menyatakan sesuatu baru saja selesai dibuat atau diselesaikan, dan masih terasa baru.",groups:[
    {name:"〜たて",description:"[Masu-stem] + たて. Sering dipakai untuk makanan atau hal yang baru selesai.",sentences:[
      {jp:"焼きたてのパンの香りって、それだけで幸せな気分になる。",kana:"やきたて の ぱん の かおり って、それ だけ で しあわせ な きぶん に なる。",romaji:"Yakitate no pan no kaori tte,sore dake de shiawase na kibun ni naru.",meaning:"Aroma roti yang baru matang itu saja sudah cukup bikin suasana hati jadi bahagia."},
      {jp:"入れたてのコーヒーを片手に、ゆっくり本を読む朝が好きだ。",kana:"いれたて の こーひー を かたて に、ゆっくり ほん を よむ あさ が すき だ。",romaji:"Iretate no koohii o katate ni,yukkuri hon o yomu asa ga suki da.",meaning:"Saya suka pagi-pagi membaca buku pelan-pelan sambil memegang kopi yang baru diseduh."},
      {jp:"炊きたてのご飯があるだけで、家に帰った感じがする。",kana:"たきたて の ごはん が ある だけ で、いえ に かえった かんじ が する。",romaji:"Takitate no gohan ga aru dake de,ie ni kaetta kanji ga suru.",meaning:"Hanya dengan adanya nasi yang baru matang saja rasanya benar-benar seperti pulang ke rumah."},
      {jp:"できたての資料だから、まだ細かいところは直すかもしれません。",kana:"できたて の しりょう だ から、まだ こまかい ところ は なおす かもしれません。",romaji:"Dekitate no shiryou da kara,mada komakai tokoro wa naosu kamoshiremasen.",meaning:"Karena dokumennya baru selesai, mungkin masih ada bagian-bagian kecil yang akan saya rapikan lagi."},
      {jp:"生まれたての子猫みたいに、その子はずっと震えていた。",kana:"うまれたて の こねこ みたい に、その こ は ずっと ふるえていた。",romaji:"Umaretate no koneko mitai ni,sono ko wa zutto furueteita.",meaning:"Anak itu gemetar terus seperti anak kucing yang baru lahir."}
    ]}
  ]},

  {id:"GR-N3-67",level:"N3",title:"〜ついでに",summary:"Menyatakan melakukan hal lain sekalian saat sudah melakukan suatu hal utama.",groups:[
    {name:"〜ついでに",description:"Artinya sekalian, mumpung, atau sambil lalu.",sentences:[
      {jp:"駅まで行くついでに、銀行にも寄ってこようと思う。",kana:"えき まで いく ついで に、ぎんこう に も よって こよう と おもう。",romaji:"Eki made iku tsuide ni,ginkou ni mo yotte koyou to omou.",meaning:"Sekalian pergi ke stasiun, saya pikir sekalian mampir bank juga."},
      {jp:"部屋を片づけたついでに、読まない本も整理した。",kana:"へや を かたづけた ついで に、よまない ほん も せいり した。",romaji:"Heya o katazuketa tsuide ni,yomanai hon mo seiri shita.",meaning:"Sekalian beres-beres kamar, saya juga merapikan buku-buku yang sudah tidak dibaca."},
      {jp:"コピーするついでに、この書類も一枚お願いできますか。",kana:"こぴー する ついで に、この しょるい も いちまい おねがい できます か。",romaji:"Kopii suru tsuide ni,kono shorui mo ichimai onegai dekimasu ka.",meaning:"Sekalian fotokopi, boleh tolong tambahkan satu lembar dokumen ini juga?"},
      {jp:"買い物のついでに、気になっていたカフェをのぞいてみた。",kana:"かいもの の ついで に、き に なっていた かふぇ を のぞいて みた。",romaji:"Kaimono no tsuide ni,ki ni natteita kafue o nozoite mita.",meaning:"Sekalian belanja, saya coba mengintip kafe yang dari dulu bikin penasaran."},
      {jp:"散歩のついでに、近所の桜がどのくらい咲いたか見てきた。",kana:"さんぽ の ついで に、きんじょ の さくら が どの くらい さいた か みてきた。",romaji:"Sanpo no tsuide ni,kinjo no sakura ga dono kurai saita ka mitekita.",meaning:"Sekalian jalan kaki, saya lihat juga sakura di dekat rumah sudah mekar sejauh apa."}
    ]}
  ]}
,

  {id:"GR-N3-72",level:"N3",title:"〜うちに②",summary:"Menyatakan perubahan atau kejadian yang tanpa sadar terjadi selama suatu proses berlangsung.",groups:[
    {name:"〜うちに②",description:"Sering dipakai untuk arti lama-lama jadi, tahu-tahu menjadi begitu.",sentences:[
      {jp:"日本語の動画を毎日見ているうちに、字幕なしでもだいぶ聞き取れるようになった。",kana:"にほんご の どうが を まいにち みている うち に、じまく なし でも だいぶ ききとれる よう に なった。",romaji:"Nihongo no douga o mainichi miteiru uchi ni,jimaku nashi demo daibu kikitoreru you ni natta.",meaning:"Setelah setiap hari menonton video berbahasa Jepang, lama-lama saya jadi cukup bisa menangkap tanpa subtitle."},
      {jp:"話しているうちに、最初の緊張が少しずつ消えていった。",kana:"はなしている うち に、さいしょ の きんちょう が すこしずつ きえていった。",romaji:"Hanashiteiru uchi ni,saisho no kinchou ga sukoshizutsu kieteitta.",meaning:"Saat terus berbicara, rasa tegang di awal perlahan-lahan hilang."},
      {jp:"使っているうちに、このアプリの便利さがわかってきた。",kana:"つかっている うち に、この あぷり の べんりさ が わかってきた。",romaji:"Tsukatteiru uchi ni,kono apuri no benrisa ga wakattekita.",meaning:"Semakin sering dipakai, lama-lama saya jadi paham kepraktisan aplikasi ini."},
      {jp:"最初は乗り気じゃなかったのに、準備しているうちにだんだん楽しみになってきた。",kana:"さいしょ は のりき じゃなかった のに、じゅんび している うち に だんだん たのしみ に なってきた。",romaji:"Saisho wa noriki janakatta noni,junbi shiteiru uchi ni dandan tanoshimi ni nattekita.",meaning:"Awalnya saya tidak terlalu antusias, tapi sambil mempersiapkan semuanya lama-lama jadi ikut bersemangat."},
      {jp:"その町を歩いているうちに、観光地というより生活の場所なんだと感じた。",kana:"その まち を あるいている うち に、かんこうち という より せいかつ の ばしょ なんだ と かんじた。",romaji:"Sono machi o aruiteiru uchi ni,kankouchi toiu yori seikatsu no basho nanda to kanjita.",meaning:"Saat berjalan-jalan di kota itu, lama-lama saya merasa tempat itu lebih seperti ruang hidup orang-orang, bukan sekadar tempat wisata."}
    ]}
  ]},

  {id:"GR-N3-73",level:"N3",title:"〜において",summary:"Menyatakan tempat, situasi, atau bidang secara formal, artinya di, dalam, pada.",groups:[
    {name:"〜において",description:"Dipakai dalam tulisan, pidato, atau situasi resmi.",sentences:[
      {jp:"本日の会議は三階の大会議室において行われます。",kana:"ほんじつ の かいぎ は さんがい の だいかいぎしつ において おこなわれます。",romaji:"Honjitsu no kaigi wa sangai no daikaigishitsu nioite okonawaremasu.",meaning:"Rapat hari ini akan dilaksanakan di ruang rapat besar lantai tiga."},
      {jp:"この分野において、彼の研究はかなり高く評価されている。",kana:"この ぶんや において、かれ の けんきゅう は かなり たかく ひょうか されている。",romaji:"Kono bunya nioite,kare no kenkyuu wa kanari takaku hyouka sareteiru.",meaning:"Di bidang ini, penelitiannya dinilai sangat tinggi."},
      {jp:"現代社会において、情報の扱い方はますます重要になっている。",kana:"げんだい しゃかい において、じょうほう の あつかいかた は ますます じゅうよう に なっている。",romaji:"Gendai shakai nioite,jouhou no atsukaikata wa masumasu juuyou ni natteiru.",meaning:"Dalam masyarakat modern, cara menangani informasi menjadi semakin penting."},
      {jp:"留学生活において大切なのは、完璧さより柔軟さだと思う。",kana:"りゅうがく せいかつ において たいせつ な の は、かんぺきさ より じゅうなんさ だ と おもう。",romaji:"Ryuugaku seikatsu nioite taisetsu na no ha,kanpekisa yori juunansa da to omou.",meaning:"Menurut saya, dalam kehidupan studi di luar negeri, yang penting bukan kesempurnaan melainkan keluwesan."},
      {jp:"日本においては、季節ごとの行事が暮らしと深く結びついている。",kana:"にほん において は、きせつ ごと の ぎょうじ が くらし と ふかく むすびついている。",romaji:"Nihon nioite ha,kisetsu goto no gyouji ga kurashi to fukaku musubitsuiteiru.",meaning:"Di Jepang, acara-acara musiman terhubung erat dengan kehidupan sehari-hari."}
    ]}
  ]},

  {id:"GR-N3-74",level:"N3",title:"〜最中に",summary:"Menyatakan sedang di tengah-tengah sesuatu, pas sedang berlangsung.",groups:[
    {name:"〜最中に",description:"Artinya di tengah, saat sedang berlangsung tepat pada waktu itu.",sentences:[
      {jp:"会議の最中にスマホが鳴ってしまって、すごく気まずかった。",kana:"かいぎ の さいちゅう に すまほ が なって しまって、すごく きまずかった。",romaji:"Kaigi no saichuu ni sumaho ga natte shimatte,sugoku kimazukatta.",meaning:"HP saya berbunyi di tengah rapat, dan itu terasa sangat canggung."},
      {jp:"料理している最中に来客があって、キッチンが大混乱だった。",kana:"りょうり している さいちゅう に らいきゃく が あって、きっちん が だいこんらん だった。",romaji:"Ryouri shiteiru saichuu ni raikyaku ga atte,kicchin ga daikonran datta.",meaning:"Di tengah-tengah memasak ada tamu datang, jadi dapurnya langsung kacau."},
      {jp:"ちょうど引っ越しの最中に体調を崩してしまった。",kana:"ちょうど ひっこし の さいちゅう に たいちょう を くずして しまった。",romaji:"Choudo hikkoshi no saichuu ni taichou o kuzushite shimatta.",meaning:"Saya justru jatuh sakit tepat di tengah proses pindahan."},
      {jp:"試験の最中に急に眠くなるの、ほんとうに困る。",kana:"しけん の さいちゅう に きゅう に ねむく なる の、ほんとう に こまる。",romaji:"Shiken no saichuu ni kyuu ni nemuku naru no,hontou ni komaru.",meaning:"Rasa kantuk yang datang mendadak di tengah ujian itu benar-benar merepotkan."},
      {jp:"映画のいい最中に後ろの席でずっと話している人がいて残念だった。",kana:"えいが の いい さいちゅう に うしろ の せき で ずっと はなしている ひと が いて ざんねん だった。",romaji:"Eiga no ii saichuu ni ushiro no seki de zutto hanashiteiru hito ga ite zannen datta.",meaning:"Sayang sekali, di bagian film yang lagi bagus justru ada orang di belakang yang terus ngobrol."}
    ]}
  ]},

  {id:"GR-N3-75",level:"N3",title:"〜たものだ",summary:"Bisa menyatakan kebiasaan atau kenangan masa lalu dengan rasa nostalgia, kadang juga rasa heran pada masa lalu.",groups:[
    {name:"〜たものだ",description:"Sering dipakai saat mengenang kebiasaan lama.",sentences:[
      {jp:"子どものころは、夏になると近くの川でよく遊んだものだ。",kana:"こども の ころ は、なつ に なる と ちかく の かわ で よく あそんだ もの だ。",romaji:"Kodomo no koro ha,natsu ni naru to chikaku no kawa de yoku asonda mono da.",meaning:"Waktu kecil, setiap musim panas saya biasa sering bermain di sungai dekat rumah."},
      {jp:"昔は終電を逃して、友達の家によく泊めてもらったものだ。",kana:"むかし は しゅうでん を のがして、ともだち の いえ に よく とめて もらった もの だ。",romaji:"Mukashi wa shuuden o nogashite,tomodachi no ie ni yoku tomete moratta mono da.",meaning:"Dulu saya sering ketinggalan kereta terakhir lalu menginap di rumah teman."},
      {jp:"学生時代は、レポートの締め切り前によく徹夜したものだ。",kana:"がくせい じだい は、れぽーと の しめきりまえ に よく てつや した もの だ。",romaji:"Gakusei jidai ha,repooto no shimekirimae ni yoku tetsuya shita mono da.",meaning:"Saat masih jadi mahasiswa, saya sering begadang menjelang deadline tugas."},
      {jp:"あのころは少しのことで本気で悩んだものだなあと今では思う。",kana:"あの ころ は すこし の こと で ほんき で なやんだ もの だ なあ と いま では おもう。",romaji:"Ano koro wa sukoshi no koto de honki de nayanda mono da naa to ima deha omou.",meaning:"Sekarang saya suka berpikir, dulu saya benar-benar galau hanya karena hal-hal kecil."},
      {jp:"日本に来たばかりのころは、駅のアナウンスが速すぎて何も聞き取れなかったものだ。",kana:"にほん に きた ばかり の ころ は、えき の あなうんす が はやすぎて なにも ききとれなかった もの だ。",romaji:"Nihon ni kita bakari no koro ha,eki no anaunsu ga hayasugite nanimo kikitorenakatta mono da.",meaning:"Waktu baru datang ke Jepang, pengumuman di stasiun terasa terlalu cepat sampai tidak ada yang bisa saya tangkap."}
    ]}
  ]},

  {id:"GR-N3-76",level:"N3",title:"〜ないことはない",summary:"Menyatakan masih mungkin, tidak mustahil, atau tidak sampai benar-benar tidak. Nuansanya setengah-setengah.",groups:[
    {name:"〜ないことはない",description:"Artinya bukan tidak bisa, bukan tidak ada kemungkinan.",sentences:[
      {jp:"時間をかければできないことはないけど、今週中は厳しい。",kana:"じかん を かければ できない こと は ない けど、こんしゅうちゅう は きびしい。",romaji:"Jikan o kakereba dekinai koto wa nai kedo,konshuuchuu wa kibishii.",meaning:"Kalau diberi waktu sebenarnya bukan tidak bisa, tapi kalau harus minggu ini memang berat."},
      {jp:"行きたくないことはないんだけど、予算がちょっと心配なんだ。",kana:"いきたくない こと は ない んだ けど、よさん が ちょっと しんぱい な んだ。",romaji:"Ikitakunai koto wa nai nda kedo,yosan ga chotto shinpai na nda.",meaning:"Bukan berarti saya tidak mau pergi, cuma saya agak khawatir soal anggarannya."},
      {jp:"辛いものも食べられないことはないが、自分からはあまり選ばない。",kana:"からい もの も たべられない こと は ない が、じぶん から は あまり えらばない。",romaji:"Karai mono mo taberarenai koto wa nai ga,jibun kara wa amari erabanai.",meaning:"Bukan berarti saya sama sekali tidak bisa makan pedas, tapi saya jarang memilihnya sendiri."},
      {jp:"その説明ならわからないことはないけど、まだ少し曖昧だ。",kana:"その せつめい なら わからない こと は ない けど、まだ すこし あいまい だ。",romaji:"Sono setsumei nara wakaranai koto wa nai kedo,mada sukoshi aimai da.",meaning:"Dengan penjelasan itu bukannya saya tidak paham sama sekali, tapi masih agak samar."},
      {jp:"今からでも間に合わないことはないから、とにかく動こう。",kana:"いま から でも まにあわない こと は ない から、とにかく うごこう。",romaji:"Ima kara demo maniawanai koto wa nai kara,tonikaku ugokou.",meaning:"Mulai dari sekarang pun bukannya sudah tidak mungkin, jadi ayo bergerak dulu."}
    ]}
  ]},

  {id:"GR-N3-77",level:"N3",title:"〜ばよかった",summary:"Menyatakan penyesalan, artinya seandainya tadi melakukan itu saja.",groups:[
    {name:"〜ばよかった",description:"[Vば] + よかった. Digunakan saat menyesal karena tidak melakukan sesuatu.",sentences:[
      {jp:"もっと早く相談すればよかったと、あとから何度も思った。",kana:"もっと はやく そうだん すれば よかった と、あと から なんど も おもった。",romaji:"Motto hayaku soudan sureba yokatta to,ato kara nando mo omotta.",meaning:"Belakangan saya berkali-kali berpikir, andai tadi saya konsultasi lebih cepat."},
      {jp:"雨が降るなら、折りたたみ傘を持ってくればよかった。",kana:"あめ が ふる なら、おりたたみ がさ を もってくれば よかった。",romaji:"Ame ga furu nara,oritatami gasa o mottekureba yokatta.",meaning:"Kalau tahu hujan, seharusnya tadi saya bawa payung lipat."},
      {jp:"あのとき意地を張らないで、素直に謝ればよかったな。",kana:"あの とき いじ を はらないで、すなお に あやまれば よかった な。",romaji:"Ano toki iji o haranaide,sunao ni ayamareba yokatta na.",meaning:"Waktu itu seharusnya saya tidak keras kepala dan minta maaf saja dengan jujur."},
      {jp:"写真をもっと撮っておけばよかったと、帰ってから少し後悔した。",kana:"しゃしん を もっと とって おけば よかった と、かえって から すこし こうかい した。",romaji:"Shashin o motto totte okeba yokatta to,kaette kara sukoshi koukai shita.",meaning:"Setelah pulang saya agak menyesal, seharusnya tadi saya mengambil lebih banyak foto."},
      {jp:"体調が悪かったなら、無理して来なければよかったのに。",kana:"たいちょう が わるかった なら、むり して こなければ よかった のに。",romaji:"Taichou ga warukatta nara,muri shite konakereba yokatta noni.",meaning:"Kalau memang sedang tidak enak badan, seharusnya tadi tidak usah memaksakan diri datang."}
    ]}
  ]},

  {id:"GR-N3-78",level:"N3",title:"〜ずにはいられない",summary:"Menyatakan tidak bisa menahan diri untuk tidak melakukan sesuatu.",groups:[
    {name:"〜ずにはいられない",description:"Artinya tidak bisa menahan diri, mau tidak mau jadi begitu.",sentences:[
      {jp:"その話を聞いたら、心配せずにはいられないよ。",kana:"その はなし を きいたら、しんぱい せず に は いられない よ。",romaji:"Sono hanashi o kiitara,shinpai sezu ni wa irarenai yo.",meaning:"Kalau dengar cerita seperti itu, rasanya tidak mungkin tidak khawatir."},
      {jp:"久しぶりにこの曲を聞くと、学生時代を思い出さずにはいられない。",kana:"ひさしぶり に この きょく を きく と、がくせい じだい を おもいださず に は いられない。",romaji:"Hisashiburi ni kono kyoku o kiku to,gakusei jidai o omoidasazu ni wa irarenai.",meaning:"Kalau dengar lagu ini lagi setelah lama, saya pasti teringat masa kuliah."},
      {jp:"彼のあの言い方には、少し笑わずにはいられなかった。",kana:"かれ の あの いいかた に は、すこし わらわず に は いられなかった。",romaji:"Kare no ano iikata ni ha,sukoshi warawazu ni wa irarenakatta.",meaning:"Dengan cara ngomongnya tadi, saya tidak bisa menahan tawa sedikit pun."},
      {jp:"頑張っている姿を見ると、応援せずにはいられません。",kana:"がんばっている すがた を みる と、おうえん せず に は いられません。",romaji:"Ganbatteiru sugata o miru to,ouen sezu ni wa iraremasen.",meaning:"Kalau melihat seseorang berusaha sekeras itu, saya tidak bisa tidak mendukungnya."},
      {jp:"こんな景色を目の前にしたら、写真を撮らずにはいられない。",kana:"こんな けしき を め の まえ に したら、しゃしん を とらず に は いられない。",romaji:"Konna keshiki o me no mae ni shitara,shashin o torazu ni wa irarenai.",meaning:"Kalau pemandangan seperti ini ada di depan mata, rasanya mustahil untuk tidak memotretnya."}
    ]}
  ]},

  {id:"GR-N3-79",level:"N3",title:"〜てしょうがない / 〜てしかたがない",summary:"Menyatakan perasaan atau keadaan yang sangat kuat sampai tidak bisa diapa-apakan lagi.",groups:[
    {name:"〜てしょうがない / 〜てしかたがない",description:"Sering dipakai untuk rasa, emosi, atau kondisi yang sangat kuat.",sentences:[
      {jp:"明日の結果が気になってしょうがない。",kana:"あした の けっか が き に なって しょうがない。",romaji:"Ashita no kekka ga ki ni natte shouganai.",meaning:"Saya terus kepikiran hasil besok, sampai rasanya tidak bisa diam."},
      {jp:"このセーター、肌ざわりがよくて気持ちよくてしかたがない。",kana:"この せーたー、はだざわり が よくて きもちよくて しかたがない。",romaji:"Kono seetaa,hadazawari ga yokute kimochiyokute shikataganai.",meaning:"Sweater ini enak sekali di kulit, sampai rasanya nyaman banget."},
      {jp:"久しぶりの再会がうれしくてしょうがなかった。",kana:"ひさしぶり の さいかい が うれしくて しょうがなかった。",romaji:"Hisashiburi no saikai ga ureshikute shouganakatta.",meaning:"Saya senang sekali karena bisa bertemu lagi setelah lama."},
      {jp:"花粉の季節になると、目がかゆくてしかたがない。",kana:"かふん の きせつ に なる と、め が かゆくて しかたがない。",romaji:"Kafun no kisetsu ni naru to,me ga kayukute shikataganai.",meaning:"Saat musim serbuk sari datang, mata saya gatal sekali sampai tidak tahan."},
      {jp:"彼は新しいカメラを買ってから、使いたくてしょうがないみたいだ。",kana:"かれ は あたらしい かめら を かって から、つかいたくて しょうがない みたい だ。",romaji:"Kare wa atarashii kamera o katte kara,tsukaitakute shouganai mitai da.",meaning:"Sejak beli kamera baru, dia kelihatannya ingin memakainya terus dan tidak sabar sama sekali."}
    ]}
  ]},

  {id:"GR-N3-80",level:"N3",title:"〜わけにはいかない",summary:"Menyatakan tidak bisa melakukan sesuatu karena alasan sosial, tanggung jawab, atau situasi.",groups:[
    {name:"〜わけにはいかない",description:"Artinya tidak bisa begitu saja, tidak mungkin secara posisi atau keadaan.",sentences:[
      {jp:"明日は大事な発表があるから、体調が悪くても休むわけにはいかない。",kana:"あした は だいじ な はっぴょう が ある から、たいちょう が わるくても やすむ わけ に は いかない。",romaji:"Ashita wa daiji na happyou ga aru kara,taichou ga warukutemo yasumu wake ni wa ikanai.",meaning:"Besok ada presentasi penting, jadi walau badan kurang enak saya tidak bisa begitu saja libur."},
      {jp:"頼まれた以上、中途半端な状態で返すわけにはいかない。",kana:"たのまれた いじょう、ちゅうとはんぱ な じょうたい で かえす わけ に は いかない。",romaji:"Tanomareta ijou,chuutohanpa na joutai de kaesu wake ni wa ikanai.",meaning:"Karena sudah diminta tolong, saya tidak bisa mengembalikan hasil kerja dalam keadaan setengah-setengah."},
      {jp:"みんなが準備してくれているのに、自分だけ何もしないわけにはいかないよ。",kana:"みんな が じゅんび して くれている のに、じぶん だけ なにも しない わけ に は いかない よ。",romaji:"Minna ga junbi shite kureteiru noni,jibun dake nanimo shinai wake ni wa ikanai yo.",meaning:"Saat semua orang sudah ikut mempersiapkan, saya tidak mungkin diam saja dan tidak melakukan apa-apa."},
      {jp:"約束したからには、今さら行かないわけにはいかない。",kana:"やくそく した から に は、いまさら いかない わけ に は いかない。",romaji:"Yakusoku shita kara ni ha,imasara ikanai wake ni wa ikanai.",meaning:"Karena saya sudah janji, sekarang saya tidak bisa tiba-tiba tidak jadi datang."},
      {jp:"後輩の前でいつまでも弱音ばかり吐くわけにはいかないと思った。",kana:"こうはい の まえ で いつまでも よわね ばかり はく わけ に は いかない と おもった。",romaji:"Kouhai no mae de itsumademo yowane bakari haku wake ni wa ikanai to omotta.",meaning:"Saya merasa tidak bisa terus-terusan mengeluh di depan junior."}
    ]}
  ]},

  {id:"GR-N3-81",level:"N3",title:"〜たびに",summary:"Menyatakan setiap kali sesuatu terjadi, hal lain juga ikut terjadi.",groups:[
    {name:"〜たびに",description:"Artinya setiap kali.",sentences:[
      {jp:"この写真を見るたびに、あの旅の空気まで思い出す。",kana:"この しゃしん を みる たび に、あの たび の くうき まで おもいだす。",romaji:"Kono shashin o miru tabi ni,ano tabi no kuuki made omoidasu.",meaning:"Setiap kali melihat foto ini, saya teringat sampai ke suasana perjalanan waktu itu."},
      {jp:"季節が変わるたびに、服が足りない気がしてしまう。",kana:"きせつ が かわる たび に、ふく が たりない き が して しまう。",romaji:"Kisetsu ga kawaru tabi ni,fuku ga tarinai ki ga shite shimau.",meaning:"Setiap kali musim berganti, saya merasa pakaian saya selalu kurang."},
      {jp:"彼は会うたびに少しずつ雰囲気が変わっている。",kana:"かれ は あう たび に すこしずつ ふんいき が かわっている。",romaji:"Kare wa au tabi ni sukoshizutsu funiki ga kawatteiru.",meaning:"Setiap kali bertemu dia, suasananya seperti sedikit berubah."},
      {jp:"新しい単語を覚えるたびに、少し世界が広がる感じがする。",kana:"あたらしい たんご を おぼえる たび に、すこし せかい が ひろがる かんじ が する。",romaji:"Atarashii tango o oboeru tabi ni,sukoshi sekai ga hirogaru kanji ga suru.",meaning:"Setiap kali menghafal kosakata baru, saya merasa dunia saya sedikit lebih luas."},
      {jp:"その話を聞くたびに、自分ももう少し頑張ろうと思える。",kana:"その はなし を きく たび に、じぶん も もう すこし がんばろう と おもえる。",romaji:"Sono hanashi o kiku tabi ni,jibun mo mou sukoshi ganbarou to omoeru.",meaning:"Setiap kali mendengar cerita itu, saya jadi merasa ingin berusaha sedikit lebih keras juga."}
    ]}
  ]},

  {id:"GR-N3-82",level:"N3",title:"〜とおり(に)",summary:"Menyatakan sesuai, persis seperti, atau menurut apa yang disebutkan sebelumnya.",groups:[
    {name:"〜とおり(に)",description:"Artinya seperti, sesuai, persis menurut.",sentences:[
      {jp:"地図で見たとおり、この辺りは坂が多いですね。",kana:"ちず で みた とおり、この あたり は さか が おおい です ね。",romaji:"Chizu de mita toori,kono atari wa saka ga ooi desu ne.",meaning:"Sesuai yang terlihat di peta, daerah sini memang banyak tanjakannya ya."},
      {jp:"説明書のとおりに設定したら、すぐ使えるようになった。",kana:"せつめいしょ の とおり に せってい したら、すぐ つかえる よう に なった。",romaji:"Setsumeisho no toori ni settei shitara,sugu tsukaeru you ni natta.",meaning:"Setelah saya atur sesuai petunjuk buku manual, langsung bisa dipakai."},
      {jp:"思ったとおり、彼は甘いものに目がない。",kana:"おもった とおり、かれ は あまい もの に め が ない。",romaji:"Omotta toori,kare wa amai mono ni me ga nai.",meaning:"Seperti yang saya duga, dia memang benar-benar lemah terhadap makanan manis."},
      {jp:"先生が言ったとおり、最初は焦らず基本からやればよかった。",kana:"せんせい が いった とおり、さいしょ は あせらず きほん から やれば よかった。",romaji:"Sensei ga itta toori,saisho wa aserazu kihon kara yareba yokatta.",meaning:"Sesuai kata sensei, memang seharusnya saya mulai dari dasar dulu tanpa buru-buru."},
      {jp:"計画どおりに進まなくても、途中で調整できれば問題ない。",kana:"けいかくどおり に すすまなくても、とちゅう で ちょうせい できれば もんだい ない。",romaji:"Keikakudoori ni susumanakutemo,tochuu de chousei dekireba mondai nai.",meaning:"Walaupun tidak berjalan persis sesuai rencana, tidak masalah selama masih bisa disesuaikan di tengah jalan."}
    ]}
  ]},

  {id:"GR-N3-83",level:"N3",title:"〜にしたがって",summary:"Menyatakan perubahan yang terjadi seiring perubahan lain, atau mengikuti aturan dan arahan.",groups:[
    {name:"〜にしたがって",description:"Artinya seiring dengan, sesuai dengan, atau mengikuti.",sentences:[
      {jp:"時間がたつにしたがって、少しずつ不安がやわらいできた。",kana:"じかん が たつ にしたがって、すこしずつ ふあん が やわらいで きた。",romaji:"Jikan ga tatsu nishitagatte,sukoshizutsu fuan ga yawaraide kita.",meaning:"Seiring waktu berjalan, rasa cemas saya pelan-pelan mereda."},
      {jp:"山に登るにしたがって、空気が冷たくなっていくのがわかった。",kana:"やま に のぼる にしたがって、くうき が つめたく なって いく の が わかった。",romaji:"Yama ni noboru nishitagatte,kuuki ga tsumetaku natte iku no ga wakatta.",meaning:"Seiring mendaki gunung, saya bisa merasakan udara makin dingin."},
      {jp:"規模が大きくなるにしたがって、必要な調整も増えていく。",kana:"きぼ が おおきく なる にしたがって、ひつよう な ちょうせい も ふえて いく。",romaji:"Kibo ga ookiku naru nishitagatte,hitsuyou na chousei mo fuete iku.",meaning:"Seiring skala proyek membesar, penyesuaian yang diperlukan juga makin banyak."},
      {jp:"説明にしたがって入力すれば、それほど難しくありません。",kana:"せつめい にしたがって にゅうりょく すれば、それほど むずかしく ありません。",romaji:"Setsumei nishitagatte nyuuryoku sureba,sorehodo muzukashiku arimasen.",meaning:"Kalau mengisi sesuai petunjuk, sebenarnya tidak terlalu sulit."},
      {jp:"年齢にしたがって興味の向きが変わるのは自然なことだと思う。",kana:"ねんれい にしたがって きょうみ の むき が かわる の は しぜん な こと だ と おもう。",romaji:"Nenrei nishitagatte kyoumi no muki ga kawaru no wa shizen na koto da to omou.",meaning:"Menurut saya, arah minat yang berubah seiring bertambahnya usia adalah hal yang alami."}
    ]}
  ]},

  {id:"GR-N3-84",level:"N3",title:"〜ていく / 〜てくる",summary:"Menyatakan perubahan yang bergerak ke depan atau datang mendekat ke sekarang. ていく sering terasa menjauh atau berlanjut ke depan, てくる sering terasa datang dari masa lalu ke sekarang atau mendekat.",groups:[
    {name:"〜ていく / 〜てくる",description:"Pola penting untuk perubahan, arah, dan perkembangan dari sudut pandang pembicara.",sentences:[
      {jp:"春が近づくにつれて、日が少しずつ長くなってきた。",kana:"はる が ちかづく につれて、ひ が すこしずつ ながく なってきた。",romaji:"Haru ga chikazuku nitsurete,hi ga sukoshizutsu nagaku nattekita.",meaning:"Semakin mendekati musim semi, siang hari pelan-pelan mulai bertambah panjang."},
      {jp:"これから先も、自分なりの働き方を探していきたい。",kana:"これから さき も、じぶん なり の はたらきかた を さがして いきたい。",romaji:"Korekara saki mo,jibun nari no hatarakikata o sagashite ikitai.",meaning:"Mulai sekarang dan seterusnya, saya ingin terus mencari cara bekerja yang cocok buat diri saya."},
      {jp:"最初は静かだった会場が、開演時間に近づくと少しずつにぎやかになってきた。",kana:"さいしょ は しずか だった かいじょう が、かいえん じかん に ちかづく と すこしずつ にぎやか に なってきた。",romaji:"Saisho wa shizuka datta kaijou ga,kaien jikan ni chikazuku to sukoshizutsu nigiyaka ni nattekita.",meaning:"Venue yang awalnya sepi, makin mendekati jam mulai acara pelan-pelan jadi ramai."},
      {jp:"覚えたことを忘れないように、これからも使いながら身につけていくつもりだ。",kana:"おぼえた こと を わすれない よう に、これから も つかいながら み に つけて いく つもり だ。",romaji:"Oboeta koto o wasurenai you ni,korekara mo tsukainagara mi ni tsukete iku tsumori da.",meaning:"Supaya yang sudah dipelajari tidak hilang, saya berniat terus membiasakannya sambil dipakai."},
      {jp:"遠くから聞こえていた音楽が、だんだんこちらへ近づいてきた。",kana:"とおく から きこえていた おんがく が、だんだん こちら へ ちかづいてきた。",romaji:"Tooku kara kikoeteita ongaku ga,dandan kochira e chikazuitekita.",meaning:"Musik yang tadinya terdengar dari kejauhan lama-lama semakin mendekat ke arah sini."}
    ]}
  ]}
,

  {id:"GR-N3-86",level:"N3",title:"〜ば〜ほど",summary:"Menyatakan semakin A, semakin B. Menunjukkan perubahan yang berbanding lurus.",groups:[
    {name:"〜ば〜ほど",description:"[条件] + ば + [hasil] + ほど. Artinya semakin, maka semakin.",sentences:[
      {jp:"考えれば考えるほど、何が正解かわからなくなることがある。",kana:"かんがえれば かんがえる ほど、なに が せいかい か わからなく なる こと が ある。",romaji:"Kangaereba kangaeru hodo,nani ga seikai ka wakaranaku naru koto ga aru.",meaning:"Semakin dipikirkan, kadang malah semakin tidak tahu mana yang benar."},
      {jp:"この町は歩けば歩くほど、好きな場所が増えていく。",kana:"この まち は あるけば あるく ほど、すき な ばしょ が ふえていく。",romaji:"Kono machi wa arukeba aruku hodo,suki na basho ga fueteiku.",meaning:"Kota ini semakin banyak disukai tempat-tempatnya semakin sering saya jalan kaki menjelajahinya."},
      {jp:"練習すればするほど、自分の癖がよく見えてくる。",kana:"れんしゅう すれば する ほど、じぶん の くせ が よく みえてくる。",romaji:"Renshuu sureba suru hodo,jibun no kuse ga yoku mietekuru.",meaning:"Semakin berlatih, kebiasaan-kebiasaan saya sendiri makin kelihatan."},
      {jp:"知れば知るほど、その仕事の奥深さを感じる。",kana:"しれば しる ほど、その しごと の おくぶかさ を かんじる。",romaji:"Shireba shiru hodo,sono shigoto no okubukasa o kanjiru.",meaning:"Semakin saya mengenalnya, semakin terasa dalamnya pekerjaan itu."},
      {jp:"使いやすい道具ほど、見た目は案外シンプルだったりする。",kana:"つかいやすい どうぐ ほど、みため は あんがい しんぷる だったり する。",romaji:"Tsukaiyasui dougu hodo,mitame wa angai shinpuru dattari suru.",meaning:"Semakin praktis suatu alat, justru tampilannya kadang malah sederhana."}
    ]}
  ]},

  {id:"GR-N3-87",level:"N3",title:"〜くせに",summary:"Menyatakan ketidaksesuaian yang terasa menjengkelkan atau menyebalkan, artinya padahal.",groups:[
    {name:"〜くせに",description:"Nuansanya emosional, sering untuk mengkritik atau mengeluh.",sentences:[
      {jp:"知ってるくせに、最後まで何も言ってくれなかった。",kana:"しってる くせ に、さいご まで なにも いって くれなかった。",romaji:"Shitteru kuse ni,saigo made nanimo itte kurenakatta.",meaning:"Padahal tahu, tapi sampai akhir dia tidak bilang apa-apa kepada saya."},
      {jp:"そんなに眠いくせに、動画を見始めるのはやめたほうがいいよ。",kana:"そんな に ねむい くせ に、どうが を みはじめる の は やめた ほう が いい よ。",romaji:"Sonna ni nemui kuse ni,douga o mihajimeru no wa yameta hou ga ii yo.",meaning:"Padahal sudah ngantuk banget, mending jangan mulai nonton video lagi."},
      {jp:"彼は自分で決めたくせに、うまくいかないと人のせいにする。",kana:"かれ は じぶん で きめた くせ に、うまく いかない と ひと の せい に する。",romaji:"Kare wa jibun de kimeta kuse ni,umaku ikanai to hito no sei ni suru.",meaning:"Padahal dia sendiri yang memutuskan, tapi kalau gagal malah menyalahkan orang lain."},
      {jp:"安いくせに意外と長持ちして、このバッグは当たりだった。",kana:"やすい くせ に いがい と ながもち して、この ばっぐ は あたり だった。",romaji:"Yasui kuse ni igai to nagamochi shite,kono baggu wa atari datta.",meaning:"Padahal murah, tas ini ternyata awet juga, jadi benar-benar pembelian yang bagus."},
      {jp:"子どものくせに、言うことが妙に大人っぽくて驚いた。",kana:"こども の くせ に、いう こと が みょう に おとなっぽくて おどろいた。",romaji:"Kodomo no kuse ni,iu koto ga myou ni otonappokute odoroita.",meaning:"Padahal masih anak-anak, tapi cara bicaranya anehnya dewasa sekali sampai bikin kaget."}
    ]}
  ]},

  {id:"GR-N3-88",level:"N3",title:"〜くらい / 〜ぐらい / 〜ほど",summary:"Menyatakan derajat, kadar, atau contoh, artinya sampai, sekitar, atau selevel itu.",groups:[
    {name:"〜くらい / 〜ぐらい / 〜ほど",description:"Dipakai untuk besaran, contoh, atau penekanan tingkat.",sentences:[
      {jp:"今日は立っていられないくらい足が疲れている。",kana:"きょう は たって いられない くらい あし が つかれている。",romaji:"Kyou wa tatte irarenai kurai ashi ga tsukareteiru.",meaning:"Hari ini kaki saya capek sampai rasanya tidak kuat berdiri."},
      {jp:"一人で食べきれないぐらい量が多くて驚いた。",kana:"ひとり で たべきれない ぐらい りょう が おおくて おどろいた。",romaji:"Hitori de tabekirenai gurai ryou ga ookute odoroita.",meaning:"Saya kaget karena porsinya banyak sekali sampai tidak mungkin dihabiskan sendirian."},
      {jp:"泣くほどではないけど、ちょっと悔しかった。",kana:"なく ほど では ない けど、ちょっと くやしかった。",romaji:"Naku hodo deha nai kedo,chotto kuyashikatta.",meaning:"Memang tidak sampai nangis, tapi saya tetap merasa agak kesal."},
      {jp:"週末くらいは仕事のことを忘れて休みたい。",kana:"しゅうまつ くらい は しごと の こと を わすれて やすみたい。",romaji:"Shuumatsu kurai wa shigoto no koto o wasurete yasumitai.",meaning:"Setidaknya saat akhir pekan saya ingin istirahat tanpa memikirkan pekerjaan."},
      {jp:"そんなこと、子どもでもわかるぐらい簡単だよ。",kana:"そんな こと、こども でも わかる ぐらい かんたん だ よ。",romaji:"Sonna koto,kodomo demo wakaru gurai kantan da yo.",meaning:"Hal seperti itu mudah sekali, sampai anak kecil pun bisa paham."}
    ]}
  ]},

  {id:"GR-N3-89",level:"N3",title:"〜こそ",summary:"Menyatakan penekanan kuat, artinya justru ini, inilah, atau justru karena itu.",groups:[
    {name:"〜こそ",description:"Dipakai untuk memberi penekanan yang kuat pada unsur tertentu.",sentences:[
      {jp:"こういう時こそ、あわてずに順番を確認したい。",kana:"こういう とき こそ、あわてず に じゅんばん を かくにん したい。",romaji:"Kouiu toki koso,awatezu ni junban o kakunin shitai.",meaning:"Justru saat seperti ini saya ingin tetap tenang dan memeriksa urutannya dulu."},
      {jp:"失敗した今こそ、何を直すべきかが見える。",kana:"しっぱい した いま こそ、なに を なおす べき か が みえる。",romaji:"Shippai shita ima koso,nani o naosu beki ka ga mieru.",meaning:"Justru sekarang setelah gagal, saya bisa melihat apa yang harus diperbaiki."},
      {jp:"忙しい日々の中でこそ、小さな休憩が大事になる。",kana:"いそがしい ひび の なか で こそ、ちいさな きゅうけい が だいじ に なる。",romaji:"Isogashii hibi no naka de koso,chiisana kyuukei ga daiji ni naru.",meaning:"Justru di tengah hari-hari yang sibuk, jeda kecil menjadi penting."},
      {jp:"そういう率直な意見こそ、チームには必要だと思う。",kana:"そういう そっちょく な いけん こそ、ちーむ に は ひつよう だ と おもう。",romaji:"Souiu socchoku na iken koso,chiimu ni wa hitsuyou da to omou.",meaning:"Menurut saya justru pendapat yang jujur seperti itu yang dibutuhkan tim."},
      {jp:"日本語は難しいけれど、だからこそ面白いとも言える。",kana:"にほんご は むずかしい けれど、だから こそ おもしろい とも いえる。",romaji:"Nihongo wa muzukashii keredo,dakara koso omoshiroi tomo ieru.",meaning:"Bahasa Jepang memang sulit, tapi justru karena itulah bisa dibilang menarik."}
    ]}
  ]},

  {id:"GR-N3-90",level:"N3",title:"〜(で)さえ",summary:"Menyatakan bahkan, sampai, atau sesuatu yang paling minimal pun.",groups:[
    {name:"〜(で)さえ",description:"Dipakai untuk menunjukkan hal yang paling dasar pun ternyata berlaku.",sentences:[
      {jp:"この暑さで、夜でさえクーラーなしではつらい。",kana:"この あつさ で、よる で さえ くーらー なし では つらい。",romaji:"Kono atsusa de,yoru de sae kuuraa nashi deha tsurai.",meaning:"Dengan panas seperti ini, bahkan malam hari pun terasa berat tanpa AC."},
      {jp:"忙しくて、昼ごはんを食べる時間さえなかった。",kana:"いそがしくて、ひるごはん を たべる じかん さえ なかった。",romaji:"Isogashikute,hirugohan o taberu jikan sae nakatta.",meaning:"Saya sibuk sekali sampai bahkan waktu untuk makan siang pun tidak ada."},
      {jp:"その問題は先生でさえすぐには答えられなかった。",kana:"その もんだい は せんせい で さえ すぐ に は こたえられなかった。",romaji:"Sono mondai wa sensei de sae sugu ni wa kotaerarenakatta.",meaning:"Masalah itu bahkan sensei sendiri tidak bisa langsung menjawabnya."},
      {jp:"今月は本当に余裕がなくて、コーヒー一杯さえちょっと迷う。",kana:"こんげつ は ほんとう に よゆう が なくて、こーひー いっぱい さえ ちょっと まよう。",romaji:"Kongetsu wa hontou ni yoyuu ga nakute,koohii ippai sae chotto mayou.",meaning:"Bulan ini saya benar-benar pas-pasan sampai mau beli secangkir kopi saja jadi mikir dua kali."},
      {jp:"緊張しすぎて、自分の名前でさえ一瞬出てこなかった。",kana:"きんちょう しすぎて、じぶん の なまえ で さえ いっしゅん でてこなかった。",romaji:"Kinchou shisugite,jibun no namae de sae isshun detekonakatta.",meaning:"Karena terlalu tegang, bahkan nama saya sendiri sempat tidak keluar sejenak."}
    ]}
  ]},

  {id:"GR-N3-91",level:"N3",title:"〜なんか / 〜なんて",summary:"Menyatakan perasaan meremehkan, merendahkan, atau kadang terkejut, tergantung konteks.",groups:[
    {name:"〜なんか / 〜なんて",description:"Bisa bernuansa merendahkan, meremehkan, atau kagum tak terduga.",sentences:[
      {jp:"私なんかが前に出て話していいのかなと、少し迷った。",kana:"わたし なんか が まえ に でて はなして いい の かな と、すこし まよった。",romaji:"Watashi nanka ga mae ni dete hanashite ii no kana to,sukoshi mayotta.",meaning:"Saya sempat ragu, apa orang seperti saya pantas maju dan bicara di depan."},
      {jp:"休日に仕事のメールなんて、なるべく見たくない。",kana:"きゅうじつ に しごと の めーる なんて、なるべく みたくない。",romaji:"Kyuujitsu ni shigoto no meeru nante,narubeku mitakunai.",meaning:"Email kerja di hari libur sih, sebisa mungkin saya tidak mau melihatnya."},
      {jp:"彼がそんなに素直に謝るなんて、ちょっと意外だった。",kana:"かれ が そんな に すなお に あやまる なんて、ちょっと いがい だった。",romaji:"Kare ga sonna ni sunao ni ayamaru nante,chotto igai datta.",meaning:"Dia minta maaf setulus itu, jujur saya agak terkejut."},
      {jp:"料理なんかできないと思っていたけど、やってみたら案外楽しい。",kana:"りょうり なんか できない と おもっていた けど、やってみたら あんがい たのしい。",romaji:"Ryouri nanka dekinai to omotteita kedo,yattemitara angai tanoshii.",meaning:"Saya dulu merasa mana bisa saya masak, tapi setelah dicoba ternyata lumayan seru."},
      {jp:"あの人に相談できるなんて、ほんとうに運がよかったね。",kana:"あの ひと に そうだん できる なんて、ほんとう に うん が よかった ね。",romaji:"Ano hito ni soudan dekiru nante,hontou ni un ga yokatta ne.",meaning:"Bisa berkonsultasi dengan orang itu, kamu benar-benar beruntung ya."}
    ]}
  ]},

  {id:"GR-N3-92",level:"N3",title:"〜まで",summary:"Selain sampai, pola ini juga bisa dipakai untuk menambahkan sesuatu yang ekstrem, artinya bahkan sampai.",groups:[
    {name:"〜まで",description:"Menunjukkan batas atau tambahan yang mengejutkan.",sentences:[
      {jp:"彼は会場の準備だけでなく、片づけまで手伝ってくれた。",kana:"かれ は かいじょう の じゅんび だけ で なく、かたづけ まで てつだって くれた。",romaji:"Kare wa kaijou no junbi dake de naku,katazuke made tetsudatte kureta.",meaning:"Dia bukan cuma membantu persiapan venue, bahkan sampai beres-beresnya juga."},
      {jp:"そんな細かいところまで気づくなんてすごいね。",kana:"そんな こまかい ところ まで きづく なんて すごい ね。",romaji:"Sonna komakai tokoro made kizuku nante sugoi ne.",meaning:"Bisa sadar sampai detail sekecil itu, hebat juga ya."},
      {jp:"今日は駅までじゃなくて、その先の公園まで歩いてみた。",kana:"きょう は えき まで じゃなくて、その さき の こうえん まで あるいて みた。",romaji:"Kyou wa eki made janakute,sono saki no kouen made aruite mita.",meaning:"Hari ini saya jalan bukan cuma sampai stasiun, tapi sampai taman di sebelah sana juga."},
      {jp:"冗談のつもりだったのに、相手を傷つけるまでになってしまった。",kana:"じょうだん の つもり だった のに、あいて を きずつける まで に なって しまった。",romaji:"Joudan no tsumori datta noni,aite o kizutsukeru made ni natte shimatta.",meaning:"Padahal tadinya cuma bercanda, tapi ternyata sampai menyakiti lawan bicara."},
      {jp:"その日は夜遅くまでではなく、朝まで話し込んでしまった。",kana:"その ひ は よる おそく まで では なく、あさ まで はなしこんで しまった。",romaji:"Sono hi wa yoru osoku made deha naku,asa made hanashikonde shimatta.",meaning:"Hari itu kami bukan cuma ngobrol sampai malam, tapi sampai pagi."}
    ]}
  ]},

  {id:"GR-N3-93",level:"N3",title:"〜という",summary:"Menyatakan bahwa suatu hal disebut, dikenal sebagai, atau berupa.",groups:[
    {name:"〜という",description:"Dipakai untuk menjelaskan nama, isi, atau identitas sesuatu.",sentences:[
      {jp:"この辺りには、夜しか開かないバーがあるという話を聞いた。",kana:"この あたり に は、よる しか ひらかない ばー が ある という はなし を きいた。",romaji:"Kono atari ni ha,yoru shika hirakanai baa ga aru toiu hanashi o kiita.",meaning:"Saya dengar kabar kalau di daerah sini ada bar yang buka hanya malam hari."},
      {jp:"最初の一歩がいちばん大事だという考え方は、案外好きだ。",kana:"さいしょ の いっぽ が いちばん だいじ だ という かんがえかた は、あんがい すき だ。",romaji:"Saisho no ippo ga ichiban daiji da toiu kangaekata ha,angai suki da.",meaning:"Saya ternyata cukup suka pada pemikiran bahwa langkah pertama adalah yang paling penting."},
      {jp:"時間を味方につけるという発想は、勉強にも仕事にも使える。",kana:"じかん を みかた に つける という はっそう は、べんきょう に も しごと に も つかえる。",romaji:"Jikan o mikata ni tsukeru toiu hassou ha,benkyou ni mo shigoto ni mo tsukaeru.",meaning:"Cara berpikir menjadikan waktu sebagai teman itu bisa dipakai untuk belajar maupun bekerja."},
      {jp:"雨の日にだけ出会える景色があるというのは、ちょっと素敵だ。",kana:"あめ の ひ に だけ であえる けしき が ある という の は、ちょっと すてき だ。",romaji:"Ame no hi ni dake deaeru keshiki ga aru toiu no ha,chotto suteki da.",meaning:"Ada pemandangan yang hanya bisa ditemui saat hujan, dan itu terasa cukup indah."},
      {jp:"彼は静かだけど、芯が強いという印象を受けた。",kana:"かれ は しずか だけど、しん が つよい という いんしょう を うけた。",romaji:"Kare wa shizuka dakedo,shin ga tsuyoi toiu inshou o uketa.",meaning:"Dia memang tenang, tapi saya mendapat kesan bahwa batinnya kuat."}
    ]}
  ]},

  {id:"GR-N3-94",level:"N3",title:"〜ということだ②",summary:"Menyatakan kesimpulan atau makna dari informasi yang ada, artinya berarti, dengan kata lain.",groups:[
    {name:"解釈 / 結論",description:"Dipakai untuk menarik arti atau kesimpulan dari fakta yang sudah disebut.",sentences:[
      {jp:"返信がまだないということは、向こうもまだ検討中ということだろう。",kana:"へんしん が まだ ない という こと は、むこう も まだ けんとうちゅう という こと だろう。",romaji:"Henshin ga mada nai toiu koto ha,mukou mo mada kentouchuu toiu koto darou.",meaning:"Kalau balasan masih belum ada, berarti pihak sana juga masih sedang mempertimbangkan."},
      {jp:"この道が閉鎖中ということは、別のルートを考えないといけない。",kana:"この みち が へいさちゅう という こと は、べつ の るーと を かんがえない と いけない。",romaji:"Kono michi ga heisachuu toiu koto ha,betsu no ruuto o kangaenai to ikenai.",meaning:"Kalau jalan ini sedang ditutup, berarti kita harus memikirkan rute lain."},
      {jp:"毎日続けられているということは、その方法が合っているということかもしれない。",kana:"まいにち つづけられている という こと は、その ほうほう が あっている という こと かもしれない。",romaji:"Mainichi tsuzukerareteiru toiu koto ha,sono houhou ga atteiru toiu koto kamoshirenai.",meaning:"Kalau bisa terus dilakukan setiap hari, mungkin itu berarti cara tersebut memang cocok."},
      {jp:"彼が何も言わなかったということは、反対ではないのかもしれない。",kana:"かれ が なにも いわなかった という こと は、はんたい では ない の かもしれない。",romaji:"Kare ga nanimo iwanakatta toiu koto ha,hantai deha nai no kamoshirenai.",meaning:"Kalau dia tidak mengatakan apa-apa, mungkin itu berarti dia tidak menentang."},
      {jp:"今日ここまで進んだということは、思っていたより順調だね。",kana:"きょう ここ まで すすんだ という こと は、おもっていた より じゅんちょう だ ね。",romaji:"Kyou koko made susunda toiu koto ha,omotteita yori junchou da ne.",meaning:"Kalau hari ini sudah bisa maju sejauh ini, berarti progress-nya lebih lancar dari dugaan ya."}
    ]}
  ]},

  {id:"GR-N3-95",level:"N3",title:"[命令形 / 禁止形] と言われる",summary:"Menyatakan bahwa seseorang disuruh atau dilarang secara langsung. Bentuknya sering muncul dalam cerita atau percakapan saat mengutip ucapan tegas.",groups:[
    {name:"[命令形 / 禁止形] と言われる",description:"Dipakai saat mengutip bahwa ada orang yang berkata suruh lakukan atau jangan lakukan.",sentences:[
      {jp:"先生にもっと大きな声で読めと言われて、少しあわてた。",kana:"せんせい に もっと おおきな こえ で よめ と いわれて、すこし あわてた。",romaji:"Sensei ni motto ookina koe de yome to iwarete,sukoshi awateta.",meaning:"Sensei menyuruh saya membaca dengan suara lebih besar, dan saya jadi agak panik."},
      {jp:"母に帰りが遅くなるなら先に連絡しろと言われている。",kana:"はは に かえり が おそく なる なら さき に れんらく しろ と いわれている。",romaji:"Haha ni kaeri ga osoku naru nara saki ni renraku shiro to iwareteiru.",meaning:"Ibu selalu bilang, kalau pulang terlambat harus kabari dulu."},
      {jp:"危ないからそこへ入るなと言われたのに、つい近づいてしまった。",kana:"あぶない から そこ へ はいる な と いわれた のに、つい ちかづいて しまった。",romaji:"Abunai kara soko e hairu na to iwareta noni,tsui chikazuite shimatta.",meaning:"Padahal sudah dibilang jangan masuk ke situ karena berbahaya, tapi saya malah sempat mendekat."},
      {jp:"上司に今日は無理をするなと言われて、少し気が楽になった。",kana:"じょうし に きょう は むり を する な と いわれて、すこし き が らく に なった。",romaji:"Joushi ni kyou wa muri o suru na to iwarete,sukoshi ki ga raku ni natta.",meaning:"Atasan bilang hari ini jangan memaksakan diri, dan saya sedikit merasa lega."},
      {jp:"子どものころ、父によく最後までやり抜けと言われたものだ。",kana:"こども の ころ、ちち に よく さいご まで やりぬけ と いわれた もの だ。",romaji:"Kodomo no koro,chichi ni yoku saigo made yarinuke to iwareta mono da.",meaning:"Waktu kecil, ayah sering menyuruh saya menuntaskan apa pun sampai akhir."}
    ]}
  ]},

  {id:"GR-N3-96",level:"N3",title:"〜らしい",summary:"Menyatakan katanya, tampaknya memang seperti itu, atau menunjukkan ciri khas yang sesuai dengan identitasnya.",groups:[
    {name:"〜らしい",description:"Bisa berarti katanya, tampaknya, atau sangat khas seperti itu.",sentences:[
      {jp:"あの店、新しくオープンしたばかりらしいよ。",kana:"あの みせ、あたらしく おーぷん した ばかり らしい よ。",romaji:"Ano mise,atarashiku oopun shita bakari rashii yo.",meaning:"Toko itu katanya baru saja buka."},
      {jp:"今日は春らしいやわらかい風が吹いている。",kana:"きょう は はるらしい やわらかい かぜ が ふいている。",romaji:"Kyou wa harurashii yawarakai kaze ga fuiteiru.",meaning:"Hari ini bertiup angin lembut yang terasa benar-benar seperti musim semi."},
      {jp:"彼は忙しいらしく、メッセージの返事がまだ来ない。",kana:"かれ は いそがしい らしく、めっせーじ の へんじ が まだ こない。",romaji:"Kare wa isogashii rashiku,messeeji no henji ga mada konai.",meaning:"Dia tampaknya sedang sibuk, soalnya balasan pesannya belum juga datang."},
      {jp:"自分らしいやり方で続ければいいと、最近やっと思えるようになった。",kana:"じぶんらしい やりかた で つづければ いい と、さいきん やっと おもえる よう に なった。",romaji:"Jibunrashii yarikata de tsuzukereba ii to,saikin yatto omoeru you ni natta.",meaning:"Belakangan ini saya akhirnya bisa berpikir bahwa cukup menjalani semuanya dengan cara saya sendiri."},
      {jp:"その子は年齢のわりにしっかりしていて、大人らしいところがある。",kana:"その こ は ねんれい の わり に しっかり していて、おとならしい ところ が ある。",romaji:"Sono ko wa nenrei no wari ni shikkari shiteite,otonarashii tokoro ga aru.",meaning:"Anak itu untuk usianya cukup dewasa, ada sisi-sisi yang terasa sangat matang."}
    ]}
  ]},

  {id:"GR-N3-97",level:"N3",title:"〜んだって",summary:"Bentuk santai untuk menyampaikan kabar yang didengar dari orang lain, artinya katanya.",groups:[
    {name:"〜んだって",description:"Dipakai di percakapan santai untuk info yang didengar.",sentences:[
      {jp:"来月、新しい先生が来るんだって。",kana:"らいげつ、あたらしい せんせい が くる んだって。",romaji:"Raigetsu,atarashii sensei ga kuru ndatte.",meaning:"Katanya bulan depan akan datang guru baru."},
      {jp:"あのカフェ、朝の時間帯はドリンクが少し安いんだって。",kana:"あの かふぇ、あさ の じかんたい は どりんく が すこし やすい んだって。",romaji:"Ano kafue,asa no jikantai wa dorinku ga sukoshi yasui ndatte.",meaning:"Katanya di kafe itu minuman agak lebih murah pada jam-jam pagi."},
      {jp:"彼、今の会社を辞めて海外に行くんだって。",kana:"かれ、いま の かいしゃ を やめて かいがい に いく んだって。",romaji:"Kare,ima no kaisha o yamete kaigai ni iku ndatte.",meaning:"Katanya dia mau keluar dari perusahaan sekarang lalu pergi ke luar negeri."},
      {jp:"その映画、ラストがすごく切ないんだって。",kana:"その えいが、らすと が すごく せつない んだって。",romaji:"Sono eiga,rasuto ga sugoku setsunai ndatte.",meaning:"Katanya akhir film itu sedih sekali."},
      {jp:"先生によると、今回の宿題はそんなに難しくないんだって。",kana:"せんせい によると、こんかい の しゅくだい は そんなに むずかしくない んだって。",romaji:"Sensei niyoruto,konkai no shukudai wa sonnani muzukashikunai ndatte.",meaning:"Menurut sensei, katanya PR kali ini tidak terlalu sulit."}
    ]}
  ]},

  {id:"GR-N3-98",level:"N3",title:"〜かなあ",summary:"Menyatakan pikiran sendiri, keraguan, atau harapan secara santai seperti gumaman.",groups:[
    {name:"〜かなあ",description:"Dipakai saat bicara ke diri sendiri atau mengungkapkan pikiran dengan lembut.",sentences:[
      {jp:"このまま進めて本当に大丈夫かなあ。",kana:"このまま すすめて ほんとう に だいじょうぶ かなあ。",romaji:"Konomama susumete hontou ni daijoubu kanaa.",meaning:"Apa kalau lanjut begini benar-benar tidak apa-apa ya."},
      {jp:"次の休み、どこか静かなところへ行けないかなあ。",kana:"つぎ の やすみ、どこか しずか な ところ へ いけない かなあ。",romaji:"Tsugi no yasumi,dokoka shizuka na tokoro e ikenai kanaa.",meaning:"Libur berikutnya, kira-kira bisa tidak ya pergi ke tempat yang tenang."},
      {jp:"あの人、私のこと覚えていてくれてるかなあ。",kana:"あの ひと、わたし の こと おぼえていて くれてる かなあ。",romaji:"Ano hito,watashi no koto oboeteite kureteru kanaa.",meaning:"Kira-kira orang itu masih ingat saya tidak ya."},
      {jp:"この荷物、ひとりで全部持てるかなあ。",kana:"この にもつ、ひとり で ぜんぶ もてる かなあ。",romaji:"Kono nimotsu,hitori de zenbu moteru kanaa.",meaning:"Kira-kira saya bisa bawa semua barang ini sendirian tidak ya."},
      {jp:"いつか自分の言葉で自然に話せるようになるかなあ。",kana:"いつか じぶん の ことば で しぜん に はなせる よう に なる かなあ。",romaji:"Itsuka jibun no kotoba de shizen ni hanaseru you ni naru kanaa.",meaning:"Kira-kira suatu hari nanti saya bisa bicara natural dengan kata-kata saya sendiri tidak ya."}
    ]}
  ]},

  {id:"GR-N3-99",level:"N3",title:"もしかすると / もしかしたら〜かもしれない",summary:"Menyatakan kemungkinan yang tidak pasti, artinya mungkin, barangkali.",groups:[
    {name:"もしかすると / もしかしたら〜かもしれない",description:"Nuansanya dugaan yang belum pasti, sering dipakai dengan hati-hati.",sentences:[
      {jp:"もしかしたら、彼はまだ本当の気持ちを言えていないのかもしれない。",kana:"もしかしたら、かれ は まだ ほんとう の きもち を いえていない の かもしれない。",romaji:"Moshikashitara,kare wa mada hontou no kimochi o ieteinai no kamoshirenai.",meaning:"Mungkin saja dia belum bisa mengungkapkan perasaan yang sebenarnya."},
      {jp:"もしかすると、この方法のほうが今の私には合っているかもしれない。",kana:"もしかすると、この ほうほう の ほう が いま の わたし に は あっている かもしれない。",romaji:"Moshikasuruto,kono houhou no hou ga ima no watashi ni wa atteiru kamoshirenai.",meaning:"Barangkali justru cara ini yang lebih cocok untuk saya sekarang."},
      {jp:"もしかしたら雨が降るかもしれないから、折りたたみ傘だけ入れておこう。",kana:"もしかしたら あめ が ふる かもしれない から、おりたたみ がさ だけ いれて おこう。",romaji:"Moshikashitara ame ga furu kamoshirenai kara,oritatami gasa dake irete okou.",meaning:"Mungkin nanti hujan, jadi saya bawa payung lipat saja untuk jaga-jaga."},
      {jp:"もしかすると、あの時の一言が彼を助けたのかもしれない。",kana:"もしかすると、あの とき の ひとこと が かれ を たすけた の かもしれない。",romaji:"Moshikasuruto,ano toki no hitokoto ga kare o tasuketa no kamoshirenai.",meaning:"Mungkin saja satu kalimat waktu itu justru membantu dia."},
      {jp:"もしかしたら間違っているかもしれないけど、私はそう感じた。",kana:"もしかしたら まちがっている かもしれない けど、わたし は そう かんじた。",romaji:"Moshikashitara machigatteiru kamoshirenai kedo,watashi wa sou kanjita.",meaning:"Mungkin saya salah, tapi itulah yang saya rasakan."}
    ]}
  ]},

  {id:"GR-N3-100",level:"N3",title:"〜に違いない",summary:"Menyatakan keyakinan kuat, artinya pasti, tidak mungkin bukan.",groups:[
    {name:"〜に違いない",description:"Dipakai saat pembicara yakin sekali berdasarkan alasan tertentu.",sentences:[
      {jp:"こんなに静かなのに電気だけついているなんて、誰かまだ中にいるに違いない。",kana:"こんな に しずか な のに でんき だけ ついている なんて、だれか まだ なか に いる に ちがいない。",romaji:"Konna ni shizuka na noni denki dake tsuiteiru nante,dareka mada naka ni iru ni chigainai.",meaning:"Ruangan setenang ini tapi lampunya masih menyala, pasti masih ada seseorang di dalam."},
      {jp:"彼があんなにうれしそうなら、いい知らせに違いない。",kana:"かれ が あんな に うれしそう なら、いい しらせ に ちがいない。",romaji:"Kare ga anna ni ureshisou nara,ii shirase ni chigainai.",meaning:"Kalau dia terlihat sebahagia itu, pasti kabar yang dia terima baik."},
      {jp:"毎日続けているんだから、力は少しずつついているに違いない。",kana:"まいにち つづけている んだ から、ちから は すこしずつ ついている に ちがいない。",romaji:"Mainichi tsuzuketeiru nda kara,chikara wa sukoshizutsu tsuiteiru ni chigainai.",meaning:"Karena dijalani setiap hari, pasti kemampuan itu sedikit demi sedikit sedang terbentuk."},
      {jp:"この味、あの店のレシピをかなり研究したに違いない。",kana:"この あじ、あの みせ の れしぴ を かなり けんきゅう した に ちがいない。",romaji:"Kono aji,ano mise no reshipi o kanari kenkyuu shita ni chigainai.",meaning:"Rasa ini pasti hasil dari banyak mempelajari resep toko itu."},
      {jp:"ここまで準備してきたんだから、本番でもきっとうまくいくに違いない。",kana:"ここ まで じゅんび して きた んだ から、ほんばん で も きっと うまく いく に ちがいない。",romaji:"Koko made junbi shite kita nda kara,honban de mo kitto umaku iku ni chigainai.",meaning:"Karena sudah mempersiapkan sejauh ini, pasti nanti di hari-H juga akan berjalan baik."}
    ]}
  ]},

  {id:"GR-N3-101",level:"N3",title:"〜しかない",summary:"Menyatakan tidak ada pilihan lain selain melakukan itu.",groups:[
    {name:"〜しかない",description:"Artinya tidak ada jalan lain, mau tidak mau hanya itu.",sentences:[
      {jp:"終電がないなら、今日はタクシーで帰るしかない。",kana:"しゅうでん が ない なら、きょう は たくしー で かえる しか ない。",romaji:"Shuuden ga nai nara,kyou wa takushii de kaeru shika nai.",meaning:"Kalau sudah tidak ada kereta terakhir, ya hari ini tidak ada pilihan selain pulang naik taksi."},
      {jp:"ここまで来たら、最後までやるしかないよね。",kana:"ここ まで きたら、さいご まで やる しか ない よ ね。",romaji:"Koko made kitara,saigo made yaru shika nai yo ne.",meaning:"Kalau sudah sampai sejauh ini, ya memang tidak ada pilihan selain menuntaskannya sampai akhir."},
      {jp:"誰も気づいていないなら、自分が言うしかないと思った。",kana:"だれ も きづいていない なら、じぶん が いう しか ない と おもった。",romaji:"Dare mo kizuiteinai nara,jibun ga iu shika nai to omotta.",meaning:"Kalau tidak ada yang sadar, saya merasa tidak ada pilihan selain saya sendiri yang mengatakannya."},
      {jp:"天気ばかりはどうにもならないし、予定を変えるしかないか。",kana:"てんき ばかり は どう に も ならない し、よてい を かえる しか ない か。",romaji:"Tenki bakari wa dou ni mo naranai shi,yotei o kaeru shika nai ka.",meaning:"Kalau soal cuaca memang tidak bisa diapa-apakan, jadi sepertinya tidak ada pilihan selain mengubah rencana."},
      {jp:"今月は節約するしかないから、外食は少し控えよう。",kana:"こんげつ は せつやく する しか ない から、がいしょく は すこし ひかえよう。",romaji:"Kongetsu wa setsuyaku suru shika nai kara,gaishoku wa sukoshi hikaeyou.",meaning:"Bulan ini mau tidak mau harus berhemat, jadi makan di luar akan saya kurangi dulu."}
    ]}
  ]},

  {id:"GR-N3-102",level:"N3",title:"〜じゃない",summary:"Bisa dipakai untuk penegasan, konfirmasi, atau rasa heran seperti kan, dong, atau lho.",groups:[
    {name:"〜じゃない",description:"Nuansanya berubah sesuai intonasi, bisa akrab, heran, atau menegaskan.",sentences:[
      {jp:"この店、前に一緒に来たことあるじゃない。",kana:"この みせ、まえ に いっしょ に きた こと ある じゃない。",romaji:"Kono mise,mae ni issho ni kita koto aru janai.",meaning:"Kan kita pernah datang ke toko ini bareng dulu."},
      {jp:"そんなに落ち込まなくても、まだチャンスはあるじゃない。",kana:"そんな に おちこまなくても、まだ ちゃんす は ある じゃない。",romaji:"Sonna ni ochikomanakutemo,mada chansu wa aru janai.",meaning:"Tidak usah sedown itu, kan masih ada kesempatan."},
      {jp:"え、それって昨日言ってた話と全然違うじゃない。",kana:"え、それ って きのう いってた はなし と ぜんぜん ちがう じゃない。",romaji:"E,sore tte kinou itteta hanashi to zenzen chigau janai.",meaning:"Eh, itu kan beda banget dengan yang kamu bilang kemarin."},
      {jp:"この景色、写真で見るよりずっときれいじゃない。",kana:"この けしき、しゃしん で みる より ずっと きれい じゃない。",romaji:"Kono keshiki,shashin de miru yori zutto kirei janai.",meaning:"Pemandangan ini kan jauh lebih bagus daripada di foto."},
      {jp:"やってみたら意外とできるじゃない、と自分でも驚いた。",kana:"やってみたら いがい と できる じゃない、と じぶん で も おどろいた。",romaji:"Yattemitara igai to dekiru janai,to jibun de mo odoroita.",meaning:"Waktu dicoba saya malah kaget sendiri, ternyata saya lumayan bisa juga."}
    ]}
  ]}
,

  {id:"GR-N3-103",level:"N3",title:"〜ずに",summary:"Menyatakan tanpa melakukan sesuatu.",groups:[
    {name:"〜ずに",description:"[Vない tanpa ない] + ずに. Artinya tanpa melakukan hal itu.",sentences:[
      {jp:"朝ごはんを食べずに家を出ると、やっぱり途中でお腹がすく。",kana:"あさごはん を たべず に いえ を でる と、やっぱり とちゅう で おなか が すく。",romaji:"Asagohan o tabezu ni ie o deru to,yappari tochuu de onaka ga suku.",meaning:"Kalau keluar rumah tanpa sarapan, tetap saja nanti di tengah jalan akan lapar."},
      {jp:"何も言わずに帰るなんて、少しさびしいよ。",kana:"なにも いわず に かえる なんて、すこし さびしい よ。",romaji:"Nanimo iwazu ni kaeru nante,sukoshi sabishii yo.",meaning:"Kalau pulang tanpa bilang apa-apa, rasanya agak sedih loh."},
      {jp:"休日はアラームをかけずに寝るのが小さな楽しみだ。",kana:"きゅうじつ は あらーむ を かけず に ねる の が ちいさな たのしみ だ。",romaji:"Kyuujitsu wa araamu o kakezu ni neru no ga chiisana tanoshimi da.",meaning:"Di hari libur, tidur tanpa pasang alarm adalah kesenangan kecil saya."},
      {jp:"迷った末に、誰にも相談せずに自分で決めた。",kana:"まよった すえ に、だれ に も そうだん せず に じぶん で きめた。",romaji:"Mayotta sue ni,dare ni mo soudan sezu ni jibun de kimeta.",meaning:"Setelah lama bimbang, saya memutuskan sendiri tanpa berkonsultasi dengan siapa pun."},
      {jp:"彼は笑わずに最後まで話を聞いてくれた。",kana:"かれ は わらわず に さいご まで はなし を きいて くれた。",romaji:"Kare wa warawazu ni saigo made hanashi o kiite kureta.",meaning:"Dia mendengarkan cerita saya sampai selesai tanpa menertawakannya."}
    ]}
  ]},

  {id:"GR-N3-104",level:"N3",title:"〜わけではない",summary:"Menyatakan tidak selalu begitu atau bukan berarti sepenuhnya begitu.",groups:[
    {name:"〜わけではない",description:"Artinya bukan berarti, tidak selalu, tidak sepenuhnya.",sentences:[
      {jp:"高い店が全部おいしいわけではないよね。",kana:"たかい みせ が ぜんぶ おいしい わけ では ない よ ね。",romaji:"Takai mise ga zenbu oishii wake deha nai yo ne.",meaning:"Tidak semua restoran mahal itu pasti enak, kan."},
      {jp:"日本語が話せるからといって、敬語まで完璧なわけではない。",kana:"にほんご が はなせる から といって、けいご まで かんぺき な わけ では ない。",romaji:"Nihongo ga hanaseru kara toitte,keigo made kanpeki na wake deha nai.",meaning:"Bisa bahasa Jepang bukan berarti keigo-nya juga langsung sempurna."},
      {jp:"行きたくないわけではないけど、今日は少し疲れている。",kana:"いきたくない わけ では ない けど、きょう は すこし つかれている。",romaji:"Ikitakunai wake deha nai kedo,kyou wa sukoshi tsukareteiru.",meaning:"Bukannya saya tidak mau pergi, cuma hari ini agak capek."},
      {jp:"静かな人が冷たいわけではないと、最近よく思う。",kana:"しずか な ひと が つめたい わけ では ない と、さいきん よく おもう。",romaji:"Shizuka na hito ga tsumetai wake deha nai to,saikin yoku omou.",meaning:"Belakangan saya sering merasa, orang yang pendiam itu bukan berarti dingin."},
      {jp:"毎日頑張っていても、いつも前向きでいられるわけではない。",kana:"まいにち がんばっていても、いつも まえむき で いられる わけ では ない。",romaji:"Mainichi ganbatteitemo,itsumo maemuki de irareru wake deha nai.",meaning:"Walaupun berusaha setiap hari, kita juga tidak selalu bisa terus positif."}
    ]}
  ]},

  {id:"GR-N3-105",level:"N3",title:"〜ことは〜が",summary:"Menyatakan mengakui satu sisi, tetapi ada sisi lain juga. Mirip memang sih, tapi.",groups:[
    {name:"〜ことは〜が",description:"Sering dipakai untuk jawaban yang bernuansa iya, tapi.",sentences:[
      {jp:"行きたいことは行きたいが、今月はちょっと予定が詰まっている。",kana:"いきたい こと は いきたい が、こんげつ は ちょっと よてい が つまっている。",romaji:"Ikitai koto wa ikitai ga,kongetsu wa chotto yotei ga tsumatteiru.",meaning:"Pengen pergi sih pengen, tapi bulan ini jadwal saya agak penuh."},
      {jp:"わかることはわかるけど、すぐには決められない。",kana:"わかる こと は わかる けど、すぐ に は きめられない。",romaji:"Wakaru koto wa wakaru kedo,sugu ni wa kimerarenai.",meaning:"Saya paham sih, tapi belum bisa langsung memutuskan sekarang."},
      {jp:"便利なことは便利だが、使いすぎると逆に疲れる。",kana:"べんり な こと は べんり だ が、つかいすぎる と ぎゃく に つかれる。",romaji:"Benri na koto wa benri da ga,tsukaisugiru to gyaku ni tsukareru.",meaning:"Memang praktis sih, tapi kalau terlalu sering dipakai malah bikin capek."},
      {jp:"彼の気持ちも理解できることはできるが、今回は賛成しにくい。",kana:"かれ の きもち も りかい できる こと は できる が、こんかい は さんせい しにくい。",romaji:"Kare no kimochi mo rikai dekiru koto wa dekiru ga,konkai wa sansei shinikui.",meaning:"Perasaannya dia memang bisa saya pahami, tapi kali ini saya agak sulit setuju."},
      {jp:"食べられないことはないけど、わざわざ自分からは選ばないかな。",kana:"たべられない こと は ない けど、わざわざ じぶん から は えらばない かな。",romaji:"Taberarenai koto wa nai kedo,wazawaza jibun kara wa erabanai kana.",meaning:"Bukannya tidak bisa makan, cuma saya tidak akan sengaja memilihnya sendiri."}
    ]}
  ]},

  {id:"GR-N3-106",level:"N3",title:"まったく / めったに / 決して / 少しも〜ない",summary:"Kumpulan adverbia yang dipakai dengan bentuk negatif untuk menegaskan tidak sama sekali, jarang, atau tidak pernah boleh.",groups:[
    {name:"まったく / めったに / 決して / 少しも〜ない",description:"Semua pola ini dipakai bersama bentuk negatif.",sentences:[
      {jp:"昨日は疲れすぎて、夜はまったく勉強できなかった。",kana:"きのう は つかれすぎて、よる は まったく べんきょう できなかった。",romaji:"Kinou wa tsukaresugite,yoru wa mattaku benkyou dekinakatta.",meaning:"Kemarin saya terlalu capek, jadi malamnya benar-benar tidak bisa belajar sama sekali."},
      {jp:"この店は人気だけど、平日の昼ならめったに並ばない。",kana:"この みせ は にんき だけど、へいじつ の ひる なら めったに ならばない。",romaji:"Kono mise wa ninki dakedo,heijitsu no hiru nara mettani narabanai.",meaning:"Toko ini memang populer, tapi kalau siang hari di weekday biasanya jarang antre."},
      {jp:"約束を決して軽く考えてはいけないと思う。",kana:"やくそく を けっして かるく かんがえて は いけない と おもう。",romaji:"Yakusoku o kesshite karuku kangaete wa ikenai to omou.",meaning:"Menurut saya, janji itu sama sekali tidak boleh dianggap enteng."},
      {jp:"その説明だけでは、少しも安心できなかった。",kana:"その せつめい だけ では、すこし も あんしん できなかった。",romaji:"Sono setsumei dake deha,sukoshi mo anshin dekinakatta.",meaning:"Dengan penjelasan itu saja, saya sama sekali tidak merasa tenang."},
      {jp:"最近は忙しくて、まったく映画を見に行けていない。",kana:"さいきん は いそがしくて、まったく えいが を みに いけていない。",romaji:"Saikin wa isogashikute,mattaku eiga o mini iketeinai.",meaning:"Belakangan ini sibuk, jadi benar-benar belum sempat pergi nonton film."}
    ]}
  ]},

  {id:"GR-N3-107",level:"N3",title:"〜とは限らない",summary:"Menyatakan tidak selalu begitu, belum tentu, atau ada pengecualian.",groups:[
    {name:"〜とは限らない",description:"Artinya belum tentu, tidak mutlak seperti itu.",sentences:[
      {jp:"努力した人が必ず報われるとは限らないけど、無駄になるとも限らない。",kana:"どりょく した ひと が かならず むくわれる と は かぎらない けど、むだ に なる と も かぎらない。",romaji:"Doryoku shita hito ga kanarazu mukuwareru to wa kagiranai kedo,muda ni naru to mo kagiranai.",meaning:"Orang yang berusaha memang belum tentu selalu langsung berhasil, tapi itu juga belum tentu sia-sia."},
      {jp:"日本語が話せるからといって、日本の文化まで全部知っているとは限らない。",kana:"にほんご が はなせる から といって、にほん の ぶんか まで ぜんぶ しっている と は かぎらない。",romaji:"Nihongo ga hanaseru kara toitte,nihon no bunka made zenbu shitteiru to wa kagiranai.",meaning:"Bisa bahasa Jepang bukan berarti sudah tahu semua budaya Jepang."},
      {jp:"安いものが悪いとは限らないし、高いものが最高とも限らない。",kana:"やすい もの が わるい と は かぎらない し、たかい もの が さいこう と も かぎらない。",romaji:"Yasui mono ga warui to wa kagiranai shi,takai mono ga saikou to mo kagiranai.",meaning:"Barang murah belum tentu jelek, dan barang mahal juga belum tentu paling bagus."},
      {jp:"今のやり方が、来年も通用するとは限らない。",kana:"いま の やりかた が、らいねん も つうよう する と は かぎらない。",romaji:"Ima no yarikata ga,rainen mo tsuuyou suru to wa kagiranai.",meaning:"Cara yang berhasil sekarang belum tentu masih ampuh tahun depan."},
      {jp:"仲がいいからといって、何でも言っていいとは限らないよ。",kana:"なか が いい から といって、なん でも いって いい と は かぎらない よ。",romaji:"Naka ga ii kara toitte,nan demo itte ii to wa kagiranai yo.",meaning:"Walaupun dekat, bukan berarti semua hal boleh dikatakan sembarangan."}
    ]}
  ]},

  {id:"GR-N3-108",level:"N3",title:"〜かわりに",summary:"Menyatakan sebagai pengganti, sebagai kompensasi, atau sebagai balasan dari hal lain.",groups:[
    {name:"〜かわりに",description:"Artinya sebagai pengganti, sebagai imbalan, atau sebagai gantinya.",sentences:[
      {jp:"今日は私が料理するかわりに、後片づけをお願いしてもいい？",kana:"きょう は わたし が りょうり する かわり に、あとかたづけ を おねがい して も いい。",romaji:"Kyou wa watashi ga ryouri suru kawari ni,atokatazuke o onegai shite mo ii.",meaning:"Hari ini saya yang masak, tapi sebagai gantinya boleh minta tolong kamu yang beres-beres?"},
      {jp:"駅から遠いかわりに、この部屋は家賃がかなり安い。",kana:"えき から とおい かわり に、この へや は やちん が かなり やすい。",romaji:"Eki kara tooi kawari ni,kono heya wa yachin ga kanari yasui.",meaning:"Karena jauh dari stasiun, sebagai gantinya kamar ini sewanya cukup murah."},
      {jp:"父は厳しいかわりに、困った時は誰よりも頼りになる。",kana:"ちち は きびしい かわり に、こまった とき は だれ より も たより に なる。",romaji:"Chichi wa kibishii kawari ni,komatta toki wa dare yori mo tayori ni naru.",meaning:"Ayah memang keras, tapi sebagai gantinya beliau paling bisa diandalkan saat ada masalah."},
      {jp:"今回は旅行をあきらめるかわりに、少しいいホテルに泊まることにした。",kana:"こんかい は りょこう を あきらめる かわり に、すこし いい ほてる に とまる こと に した。",romaji:"Konkai wa ryokou o akirameru kawari ni,sukoshi ii hoteru ni tomaru koto ni shita.",meaning:"Kali ini daripada pergi liburan jauh, sebagai gantinya saya memutuskan menginap di hotel yang agak bagus."},
      {jp:"直接会えないかわりに、今日は長めに電話しよう。",kana:"ちょくせつ あえない かわり に、きょう は ながめ に でんわ しよう。",romaji:"Chokusetsu aenai kawari ni,kyou wa nagame ni denwa shiyou.",meaning:"Karena tidak bisa bertemu langsung, sebagai gantinya hari ini ayo teleponan lebih lama."}
    ]}
  ]},

  {id:"GR-N3-109",level:"N3",title:"〜というより",summary:"Menyatakan koreksi atau ungkapan yang terasa lebih tepat, artinya bukan A, lebih tepatnya B.",groups:[
    {name:"〜というより",description:"Dipakai saat memperbaiki cara menyebut sesuatu.",sentences:[
      {jp:"あの人は厳しいというより、むしろとても丁寧なんだと思う。",kana:"あの ひと は きびしい という より、むしろ とても ていねい な んだ と おもう。",romaji:"Ano hito wa kibishii toiu yori,mushiro totemo teinei na nda to omou.",meaning:"Menurut saya orang itu bukan galak, lebih tepatnya justru sangat teliti."},
      {jp:"今日は暑いというより、空気が重たい感じがする。",kana:"きょう は あつい という より、くうき が おもたい かんじ が する。",romaji:"Kyou wa atsui toiu yori,kuuki ga omotai kanji ga suru.",meaning:"Hari ini bukan sekadar panas, lebih tepatnya udaranya terasa berat."},
      {jp:"その映画は感動作というより、静かに残る作品だった。",kana:"その えいが は かんどうさく という より、しずか に のこる さくひん だった。",romaji:"Sono eiga wa kandousaku toiu yori,shizuka ni nokoru sakuhin datta.",meaning:"Film itu bukan tipe yang mengharukan secara besar-besaran, lebih tepatnya karya yang meninggalkan kesan tenang."},
      {jp:"彼は無口というより、話す前によく考えるタイプだ。",kana:"かれ は むくち という より、はなす まえ に よく かんがえる たいぷ だ。",romaji:"Kare wa mukuchi toiu yori,hanasu mae ni yoku kangaeru taipu da.",meaning:"Dia bukan pendiam, lebih tepatnya tipe yang berpikir baik-baik sebelum bicara."},
      {jp:"これは勉強というより、もう半分趣味みたいなものだ。",kana:"これ は べんきょう という より、もう はんぶん しゅみ みたい な もの だ。",romaji:"Kore wa benkyou toiu yori,mou hanbun shumi mitai na mono da.",meaning:"Ini bukan belajar dalam arti kaku, lebih tepatnya sudah setengah jadi hobi."}
    ]}
  ]},

  {id:"GR-N3-110",level:"N3",title:"〜にかわって / 〜にかわり",summary:"Menyatakan menggantikan, mewakili, atau sebagai pengganti seseorang atau sesuatu.",groups:[
    {name:"〜にかわって / 〜にかわり",description:"Artinya menggantikan atau mewakili.",sentences:[
      {jp:"今日は部長にかわって、私が先にご説明いたします。",kana:"きょう は ぶちょう にかわって、わたし が さき に ごせつめい いたします。",romaji:"Kyou wa buchou nikawatte,watashi ga saki ni gosetsumei itashimasu.",meaning:"Hari ini saya yang akan menjelaskan lebih dulu menggantikan manajer."},
      {jp:"紙のチケットにかわり、今はスマホで入場する方式が主流です。",kana:"かみ の ちけっと にかわり、いま は すまほ で にゅうじょう する ほうしき が しゅりゅう です。",romaji:"Kami no chiketto nikawari,ima wa sumaho de nyuujou suru houshiki ga shuryuu desu.",meaning:"Sebagai pengganti tiket kertas, sekarang cara masuk dengan HP menjadi arus utama."},
      {jp:"父にかわって、今日は私が駅まで迎えに行くよ。",kana:"ちち にかわって、きょう は わたし が えき まで むかえ に いく よ。",romaji:"Chichi nikawatte,kyou wa watashi ga eki made mukae ni iku yo.",meaning:"Hari ini saya yang akan menjemput ke stasiun menggantikan ayah."},
      {jp:"担当者にかわり、おわび申し上げます。",kana:"たんとうしゃ にかわり、おわび もうしあげます。",romaji:"Tantousha nikawari,owabi moushiagemasu.",meaning:"Saya menyampaikan permohonan maaf mewakili orang yang bertanggung jawab."},
      {jp:"現金にかわる決済手段として、電子マネーの利用が増えている。",kana:"げんきん にかわる けっさい しゅだん として、でんし まねー の りよう が ふえている。",romaji:"Genkin nikawaru kessai shudan toshite,denshi manee no riyou ga fueteiru.",meaning:"Sebagai alat bayar pengganti uang tunai, penggunaan uang elektronik makin meningkat."}
    ]}
  ]},

  {id:"GR-N3-111",level:"N3",title:"〜にしては",summary:"Menyatakan sesuatu yang terasa di luar dugaan jika dilihat dari standar tertentu, artinya untuk ukuran.",groups:[
    {name:"〜にしては",description:"Artinya untuk ukuran itu, hasilnya terasa agak tidak biasa.",sentences:[
      {jp:"初めて作ったにしては、このカレーかなりおいしいね。",kana:"はじめて つくった にしては、この かれー かなり おいしい ね。",romaji:"Hajimete tsukutta nishiteha,kono karee kanari oishii ne.",meaning:"Untuk ukuran pertama kali bikin, kari ini enak juga ya."},
      {jp:"彼は新人にしては落ち着いていて、説明もわかりやすい。",kana:"かれ は しんじん にしては おちついていて、せつめい も わかりやすい。",romaji:"Kare wa shinjin nishiteha ochitsuiteite,setsumei mo wakariyasui.",meaning:"Untuk ukuran karyawan baru, dia tenang sekali dan penjelasannya juga mudah dipahami."},
      {jp:"この値段にしては、素材がかなりしっかりしている。",kana:"この ねだん にしては、そざい が かなり しっかり している。",romaji:"Kono nedan nishiteha,sozai ga kanari shikkari shiteiru.",meaning:"Untuk harga segini, bahannya ternyata cukup bagus."},
      {jp:"今日は四月にしては風が冷たい。",kana:"きょう は しがつ にしては かぜ が つめたい。",romaji:"Kyou wa shigatsu nishiteha kaze ga tsumetai.",meaning:"Untuk bulan April, anginnya dingin juga hari ini."},
      {jp:"小さい店にしては、メニューが思ったより豊富だった。",kana:"ちいさい みせ にしては、めにゅー が おもった より ほうふ だった。",romaji:"Chiisai mise nishiteha,menyuu ga omotta yori houfu datta.",meaning:"Untuk ukuran toko kecil, menunya ternyata lebih lengkap dari yang saya kira."}
    ]}
  ]},

  {id:"GR-N3-112",level:"N3",title:"〜に対して②",summary:"Menyatakan perbandingan atau pertentangan dua hal, artinya sedangkan atau berbanding dengan.",groups:[
    {name:"対比",description:"Dipakai saat membandingkan dua sisi yang berbeda.",sentences:[
      {jp:"兄がにぎやかなのに対して、弟はかなりおとなしい。",kana:"あに が にぎやか な の にたいして、おとうと は かなり おとなしい。",romaji:"Ani ga nigiyaka na no nitaishite,otouto wa kanari otonashii.",meaning:"Kalau kakaknya ramai dan ekspresif, adiknya justru cukup pendiam."},
      {jp:"前半は晴れていたのに対して、午後からは急に雲が増えた。",kana:"ぜんはん は はれていた の にたいして、ごご から は きゅう に くも が ふえた。",romaji:"Zenhan wa hareteita no nitaishite,gogo kara wa kyuu ni kumo ga fueta.",meaning:"Kalau paruh pertama hari tadi cerah, sore mulai mendadak banyak awan."},
      {jp:"都会の便利さに対して、地方には静かな時間がある。",kana:"とかい の べんりさ にたいして、ちほう に は しずか な じかん が ある。",romaji:"Tokai no benrisa nitaishite,chihou ni wa shizuka na jikan ga aru.",meaning:"Di sisi kenyamanan kota besar, daerah kecil punya waktu yang lebih tenang."},
      {jp:"弟が直感で動くタイプなのに対して、私はかなり慎重だ。",kana:"おとうと が ちょっかん で うごく たいぷ な の にたいして、わたし は かなり しんちょう だ。",romaji:"Otouto ga chokkan de ugoku taipu na no nitaishite,watashi wa kanari shinchou da.",meaning:"Kalau adik saya tipe yang bergerak berdasarkan insting, saya justru cukup hati-hati."},
      {jp:"今年の前半が忙しかったのに対して、後半は少し余裕がありそうだ。",kana:"ことし の ぜんはん が いそがしかった の にたいして、こうはん は すこし よゆう が ありそう だ。",romaji:"Kotoshi no zenhan ga isogashikatta no nitaishite,kouhan wa sukoshi yoyuu ga arisou da.",meaning:"Kalau paruh pertama tahun ini sibuk, paruh keduanya sepertinya akan agak lebih longgar."}
    ]}
  ]},

  {id:"GR-N3-113",level:"N3",title:"〜に比べて",summary:"Menyatakan perbandingan dengan standar lain, artinya dibandingkan dengan.",groups:[
    {name:"〜に比べて",description:"Dipakai untuk membandingkan secara langsung.",sentences:[
      {jp:"去年に比べて、今年は少し気持ちに余裕がある。",kana:"きょねん にくらべて、ことし は すこし きもち に よゆう が ある。",romaji:"Kyonen nikurabete,kotoshi wa sukoshi kimochi ni yoyuu ga aru.",meaning:"Dibanding tahun lalu, tahun ini saya merasa sedikit lebih punya ruang bernapas."},
      {jp:"都会に比べて、この町は時間の流れがゆっくり感じられる。",kana:"とかい にくらべて、この まち は じかん の ながれ が ゆっくり かんじられる。",romaji:"Tokai nikurabete,kono machi wa jikan no nagare ga yukkuri kanjirareru.",meaning:"Dibanding kota besar, kota ini terasa punya aliran waktu yang lebih pelan."},
      {jp:"前回に比べて、今回はかなり落ち着いて話せたと思う。",kana:"ぜんかい にくらべて、こんかい は かなり おちついて はなせた と おもう。",romaji:"Zenkai nikurabete,konkai wa kanari ochitsuite hanaseta to omou.",meaning:"Dibanding sebelumnya, kali ini saya rasa saya bisa bicara jauh lebih tenang."},
      {jp:"兄に比べて、私は昔からかなりのんびりした性格だ。",kana:"あに にくらべて、わたし は むかし から かなり のんびり した せいかく だ。",romaji:"Ani nikurabete,watashi wa mukashi kara kanari nonbiri shita seikaku da.",meaning:"Dibanding kakak saya, dari dulu sifat saya memang jauh lebih santai."},
      {jp:"このアプリは前のものに比べて、画面がかなり見やすい。",kana:"この あぷり は まえ の もの にくらべて、がめん が かなり みやすい。",romaji:"Kono apuri wa mae no mono nikurabete,gamen ga kanari miyasui.",meaning:"Aplikasi ini dibanding yang sebelumnya tampilannya jauh lebih mudah dilihat."}
    ]}
  ]},

  {id:"GR-N3-114",level:"N3",title:"〜ほど…は…ない / 〜くらい…は…ない",summary:"Menyatakan tidak se... itu, atau tidak sampai setingkat itu.",groups:[
    {name:"〜ほど…は…ない / 〜くらい…は…ない",description:"Artinya tidak sebanding, tidak sampai setaraf.",sentences:[
      {jp:"今年の夏は去年ほど暑くはない気がする。",kana:"ことし の なつ は きょねん ほど あつく は ない き が する。",romaji:"Kotoshi no natsu wa kyonen hodo atsuku wa nai ki ga suru.",meaning:"Musim panas tahun ini rasanya tidak sepanas tahun lalu."},
      {jp:"駅前は便利だけど、中心部ほど家賃は高くない。",kana:"えきまえ は べんり だけど、ちゅうしんぶ ほど やちん は たかくない。",romaji:"Ekimae wa benri dakedo,chuushinbu hodo yachin wa takakunai.",meaning:"Depan stasiun memang praktis, tapi sewanya tidak semahal pusat kota."},
      {jp:"思ったほど緊張はしなかった。",kana:"おもった ほど きんちょう は しなかった。",romaji:"Omotta hodo kinchou wa shinakatta.",meaning:"Saya tidak segugup yang saya bayangkan."},
      {jp:"今日は昨日くらい風は強くないね。",kana:"きょう は きのう くらい かぜ は つよくない ね。",romaji:"Kyou wa kinou kurai kaze wa tsuyokunai ne.",meaning:"Hari ini anginnya tidak sekuat kemarin ya."},
      {jp:"今の私は、昔ほど無理をしなくなった。",kana:"いま の わたし は、むかし ほど むり を しなく なった。",romaji:"Ima no watashi ha,mukashi hodo muri o shinaku natta.",meaning:"Diri saya sekarang tidak lagi memaksakan diri separah dulu."}
    ]}
  ]},

  {id:"GR-N3-115",level:"N3",title:"〜によって③",summary:"Menyatakan pelaku dalam kalimat pasif atau pencipta karya, artinya oleh.",groups:[
    {name:"行為者",description:"Dipakai untuk menyebut pelaku secara formal, terutama di tulisan atau penjelasan.",sentences:[
      {jp:"この小説は若い作家によって書かれたものです。",kana:"この しょうせつ は わかい さっか によって かかれた もの です。",romaji:"Kono shousetsu wa wakai sakka niyotte kakareta mono desu.",meaning:"Novel ini ditulis oleh seorang penulis muda."},
      {jp:"その橋は百年以上前に地元の職人たちによって造られた。",kana:"その はし は ひゃくねん いじょう まえ に じもと の しょくにんたち によって つくられた。",romaji:"Sono hashi wa hyakunen ijou mae ni jimoto no shokunintachi niyotte tsukurareta.",meaning:"Jembatan itu dibangun lebih dari seratus tahun lalu oleh para pengrajin setempat."},
      {jp:"会場の飾りつけは学生ボランティアによって行われた。",kana:"かいじょう の かざりつけ は がくせい ぼらんてぃあ によって おこなわれた。",romaji:"Kaijou no kazaritsuke wa gakusei boranteia niyotte okonawareta.",meaning:"Dekorasi venue dikerjakan oleh para relawan mahasiswa."},
      {jp:"この制度は多くの議論によって少しずつ形になってきた。",kana:"この せいど は おおく の ぎろん によって すこしずつ かたち に なってきた。",romaji:"Kono seido wa ooku no giron niyotte sukoshizutsu katachi ni nattekita.",meaning:"Sistem ini sedikit demi sedikit terbentuk melalui banyak diskusi."},
      {jp:"その絵は光と影の使い方によって独特の雰囲気が生まれている。",kana:"その え は ひかり と かげ の つかいかた によって どくとく の ふんいき が うまれている。",romaji:"Sono e wa hikari to kage no tsukaikata niyotte dokutoku no funiki ga umareteiru.",meaning:"Lukisan itu melahirkan suasana khas lewat cara penggunaan cahaya dan bayangan."}
    ]}
  ]},

  {id:"GR-N3-116",level:"N3",title:"〜わりに(は)",summary:"Menyatakan hasil yang terasa tidak sesuai dengan bayangan umum, artinya walaupun, padahal kalau dilihat dari.",groups:[
    {name:"〜わりに(は)",description:"Mirip にしては, tapi lebih percakapan dan sering dipakai untuk kesan pribadi.",sentences:[
      {jp:"この店、駅から遠いわりにはお客さんが多いね。",kana:"この みせ、えき から とおい わり に は おきゃくさん が おおい ね。",romaji:"Kono mise,eki kara tooi wari ni wa okyakusan ga ooi ne.",meaning:"Toko ini walaupun jauh dari stasiun, pelanggannya banyak juga ya."},
      {jp:"彼は年下のわりに話が落ち着いている。",kana:"かれ は としした の わり に は はなし が おちついている。",romaji:"Kare wa toshishita no wari ni wa hanashi ga ochitsuiteiru.",meaning:"Dia walaupun lebih muda, cara bicaranya tenang sekali."},
      {jp:"運動していないわりには、今日は意外と体が軽い。",kana:"うんどう していない わり に は、きょう は いがい と からだ が かるい。",romaji:"Undou shiteinai wari ni ha,kyou wa igai to karada ga karui.",meaning:"Walaupun akhir-akhir ini tidak olahraga, hari ini tubuh saya ternyata terasa cukup ringan."},
      {jp:"この映画、長いわりには最後まで飽きなかった。",kana:"この えいが、ながい わり に は さいご まで あきなかった。",romaji:"Kono eiga,nagai wari ni wa saigo made akinakatta.",meaning:"Film ini walaupun panjang, saya tidak bosan sampai akhir."},
      {jp:"初対面だったわりには、会話が自然に続いた。",kana:"しょたいめん だった わり に は、かいわ が しぜん に つづいた。",romaji:"Shotaimen datta wari ni ha,kaiwa ga shizen ni tsuzuita.",meaning:"Walaupun baru pertama kali bertemu, percakapannya mengalir dengan natural."}
    ]}
  ]},

  {id:"GR-N3-117",level:"N3",title:"〜というのは",summary:"Dipakai untuk menjelaskan alasan, latar, atau definisi, artinya soalnya atau yang dimaksud itu.",groups:[
    {name:"〜というのは",description:"Bisa dipakai untuk memberi definisi atau menjelaskan alasan di belakang pernyataan.",sentences:[
      {jp:"今日は少し急いでいる。というのは、このあと病院の予約があるからだ。",kana:"きょう は すこし いそいでいる。という の は、このあと びょういん の よやく が ある から だ。",romaji:"Kyou wa sukoshi isoideiru.toiu no ha,konoato byouin no yoyaku ga aru kara da.",meaning:"Hari ini saya agak terburu-buru. Soalnya setelah ini saya punya janji ke rumah sakit."},
      {jp:"彼が人気な理由というのは、話しやすさだけではないと思う。",kana:"かれ が にんき な りゆう という の は、はなしやすさ だけ で は ない と おもう。",romaji:"Kare ga ninki na riyuu toiu no ha,hanashiyasusa dake de wa nai to omou.",meaning:"Menurut saya alasan dia populer itu bukan cuma karena enak diajak bicara."},
      {jp:"自由というのは、何をしてもいいという意味ではない。",kana:"じゆう という の は、なに を しても いい という いみ では ない。",romaji:"Jiyuu toiu no ha,nani o shitemo ii toiu imi deha nai.",meaning:"Kebebasan itu bukan berarti boleh melakukan apa saja tanpa batas."},
      {jp:"私が大事にしたいのは続けることだ。というのは、勢いだけでは長続きしないから。",kana:"わたし が だいじ に したい の は つづける こと だ。という の は、いきおい だけ では ながつづき しない から。",romaji:"Watashi ga daiji ni shitai no wa tsuzukeru koto da.toiu no ha,ikioi dake deha nagatsuzuki shinai kara.",meaning:"Yang ingin saya jaga adalah keberlanjutan. Soalnya kalau cuma mengandalkan semangat sesaat, tidak akan tahan lama."},
      {jp:"この店の魅力というのは、料理よりむしろ店の空気かもしれない。",kana:"この みせ の みりょく という の は、りょうり より むしろ みせ の くうき かもしれない。",romaji:"Kono mise no miryoku toiu no ha,ryouri yori mushiro mise no kuuki kamoshirenai.",meaning:"Daya tarik toko ini mungkin justru bukan makanannya, melainkan suasana tempatnya."}
    ]}
  ]},

  {id:"GR-N3-118",level:"N3",title:"〜といっても",summary:"Menyatakan pembatasan atau penyesuaian, artinya walaupun dibilang, tapi sebenarnya.",groups:[
    {name:"〜といっても",description:"Dipakai untuk mengoreksi ekspektasi lawan bicara.",sentences:[
      {jp:"一人暮らしといっても、実家から電車で二十分の場所なんだけどね。",kana:"ひとりぐらし といっても、じっか から でんしゃ で にじゅっぷん の ばしょ な んだ けど ね。",romaji:"Hitorigurashi toittemo,jikka kara densha de nijuppun no basho na nda kedo ne.",meaning:"Walaupun dibilang tinggal sendiri, sebenarnya tempat saya cuma dua puluh menit naik kereta dari rumah orang tua."},
      {jp:"料理ができるといっても、作れるのはほんの数種類だけだよ。",kana:"りょうり が できる といっても、つくれる の は ほんの すうしゅるい だけ だ よ。",romaji:"Ryouri ga dekiru toittemo,tsukureru no wa honno suushurui dake da yo.",meaning:"Walaupun dibilang bisa masak, sebenarnya yang bisa saya buat cuma beberapa jenis saja."},
      {jp:"夏休みといっても、今年はそんなに長く取れない。",kana:"なつやすみ といっても、ことし は そんな に ながく とれない。",romaji:"Natsuyasumi toittemo,kotoshi wa sonna ni nagaku torenai.",meaning:"Walaupun namanya libur musim panas, tahun ini saya tidak bisa ambil lama-lama."},
      {jp:"近いといっても、歩くと意外と三十分ぐらいかかる。",kana:"ちかい といっても、あるく と いがい と さんじゅっぷん ぐらい かかる。",romaji:"Chikai toittemo,aruku to igai to sanjuppun gurai kakaru.",meaning:"Walaupun dibilang dekat, kalau jalan kaki ternyata tetap sekitar tiga puluh menit."},
      {jp:"日本語が話せるといっても、まだ仕事では緊張する場面が多い。",kana:"にほんご が はなせる といっても、まだ しごと では きんちょう する ばめん が おおい。",romaji:"Nihongo ga hanaseru toittemo,mada shigoto deha kinchou suru bamen ga ooi.",meaning:"Walaupun saya bisa bahasa Jepang, di pekerjaan masih banyak situasi yang bikin tegang."}
    ]}
  ]},

  {id:"GR-N3-119",level:"N3",title:"〜に関して / 関する",summary:"Menyatakan tentang atau mengenai secara formal. Sering dipakai di tulisan, berita, dan situasi resmi.",groups:[
    {name:"〜に関して / 関する",description:"Dipakai dalam gaya yang lebih resmi daripada について.",sentences:[
      {jp:"この件に関して、後ほど正式なお知らせがあります。",kana:"この けん にかんして、のちほど せいしき な おしらせ が あります。",romaji:"Kono ken nikanshite,nochihodo seishiki na oshirase ga arimasu.",meaning:"Mengenai hal ini, nanti akan ada pemberitahuan resmi."},
      {jp:"環境問題に関する本を最近よく読むようになった。",kana:"かんきょう もんだい にかんする ほん を さいきん よく よむ よう に なった。",romaji:"Kankyou mondai nikansuru hon o saikin yoku yomu you ni natta.",meaning:"Belakangan ini saya jadi sering membaca buku-buku yang berkaitan dengan isu lingkungan."},
      {jp:"応募条件に関して不明な点があれば、お気軽にお問い合わせください。",kana:"おうぼ じょうけん にかんして ふめい な てん が あれば、おきがる に おといあわせ ください。",romaji:"Oubo jouken nikanshite fumei na ten ga areba,okigaru ni otoiawase kudasai.",meaning:"Kalau ada hal yang belum jelas mengenai syarat pendaftaran, silakan hubungi kami."},
      {jp:"その調査に関する資料は、共有フォルダにまとめてあります。",kana:"その ちょうさ にかんする しりょう は、きょうゆう ふぉるだ に まとめて あります。",romaji:"Sono chousa nikansuru shiryou ha,kyouyuu fuoruda ni matomete arimasu.",meaning:"Dokumen yang berkaitan dengan penelitian itu sudah saya kumpulkan di folder bersama."},
      {jp:"健康に関しては、無理を続けないことがいちばん大事だと思う。",kana:"けんこう にかんして は、むり を つづけない こと が いちばん だいじ だ と おもう。",romaji:"Kenkou nikanshite ha,muri o tsuzukenai koto ga ichiban daiji da to omou.",meaning:"Kalau soal kesehatan, menurut saya yang paling penting adalah tidak terus-menerus memaksakan diri."}
    ]}
  ]}
,

  {id:"GR-N2-01",level:"N2",title:"〜ものの / とはいうものの",summary:"Menyatakan kenyataan yang bertolak belakang dengan hal setelahnya, artinya walaupun memang begitu, tetapi.",groups:[
    {name:"〜ものの / とはいうものの",description:"Dipakai saat hasil akhirnya tidak sesuai harapan awal atau penjelasan sebelumnya.",sentences:[
      {"jp":"予約は取れたものの、人気の展示は入場制限で見られなかった。","kana":"よやくはとれたものの、にんきのてんじはにゅうじょうせいげんでみられなかった。","romaji":"yoyaku ha tore tamonono, ninki no tenji ha nyuujouseigen de mira renakatta.","meaning":"Walaupun reservasinya berhasil didapat, pameran yang populer itu tetap tidak bisa dilihat karena pembatasan masuk."},
      {"jp":"日本での生活には慣れてきたものの、役所の手続きはまだ緊張する。","kana":"にっぽんでのせいかつにはなれてきたものの、やくしょのてつづきはまだきんちょうする。","romaji":"nippon deno seikatsu niha nare tekitamonono, yakusho no tetsuzuki hamada kinchousu ru.","meaning":"Walaupun saya mulai terbiasa hidup di Jepang, urusan administrasi di kantor pemerintahan masih bikin tegang."},
      {"jp":"駅の近くに引っ越したものの、朝の通勤ラッシュはやはり大変だ。","kana":"えきのちかくにひっこしたものの、あさのつうきんらっしゅはやはりたいへんだ。","romaji":"eki no chikaku ni hikkoshi tamonono, asa no tsuukin rasshu hayahari taihen da.","meaning":"Walaupun saya pindah dekat stasiun, jam sibuk pagi tetap berat juga."},
      {"jp":"静かな町とはいうものの、祭りの日はかなりにぎやかになる。","kana":"しずかなまちとはいうものの、まつりのにちはかなりにぎやかになる。","romaji":"shizuka na machi tohaiumonono, matsuri no nichi hakanarinigiyakaninaru.","meaning":"Walaupun disebut kota yang tenang, saat hari festival suasananya jadi sangat ramai."},
      {"jp":"留学したとはいうものの、最初の数か月は日本語より身ぶりで何とかしていた。","kana":"りゅうがくしたとはいうものの、さいしょのすうかげつはにほんごよりみぶりでなんとかしていた。","romaji":"ryuugaku shitatohaiumonono, saisho no suukagetsu ha nihongo yori mi buride nantoka shiteita.","meaning":"Walaupun saya datang untuk belajar ke luar negeri, beberapa bulan pertama saya lebih banyak bertahan dengan bahasa tubuh daripada bahasa Jepang."}
    ]}
  ]},

  {id:"GR-N2-02",level:"N2",title:"〜にもかかわらず",summary:"Menyatakan hal yang terjadi bertentangan dengan kondisi yang seharusnya, artinya meskipun.",groups:[
    {name:"〜にもかかわらず",description:"Nuansanya agak formal dan sering dipakai di pengumuman, berita, atau penjelasan yang tegas.",sentences:[
      {"jp":"大雨にもかかわらず、区役所の窓口には朝から人が並んでいた。","kana":"おおあめにもかかわらず、くやくしょのまどぐちにはあさからにんがならんでいた。","romaji":"ooame nimokakawarazu, kuyakusho no madoguchi niha asa kara nin ga naran deita.","meaning":"Meskipun hujan deras, sejak pagi orang-orang sudah mengantre di loket kantor wilayah."},
      {"jp":"体調がよくないにもかかわらず、彼は最後まで会議に出ていた。","kana":"たいちょうがよくないにもかかわらず、かれはさいごまでかいぎにでていた。","romaji":"taichou gayokunainimokakawarazu, kareha saigo made kaigi ni dete ita.","meaning":"Meskipun kondisinya kurang sehat, dia tetap ikut rapat sampai selesai."},
      {"jp":"平日にもかかわらず、このカフェは外国人のお客さんで混んでいる。","kana":"へいじつにもかかわらず、このかふぇはがいこくじんのおきゃくさんでこんでいる。","romaji":"heijitsu nimokakawarazu, kono kafe ha gaikokujin noo kyaku sande kon deiru.","meaning":"Meskipun hari kerja, kafe ini ramai oleh pelanggan asing."},
      {"jp":"注意されたにもかかわらず、またホームで走る人がいた。","kana":"ちゅういされたにもかかわらず、またほーむではしるにんがいた。","romaji":"chuui saretanimokakawarazu, mata hoomu de hashiru nin gaita.","meaning":"Meskipun sudah diperingatkan, masih ada orang yang berlari di peron."},
      {"jp":"準備不足にもかかわらず、本番は意外とうまくいった。","kana":"じゅんびぶそくにもかかわらず、ほんばんはいがいとうまくいった。","romaji":"junbibusoku nimokakawarazu, honban ha igai toumakuitta.","meaning":"Meskipun persiapannya kurang, pelaksanaannya ternyata berjalan cukup baik."}
    ]}
  ]},

  {id:"GR-N2-03",level:"N2",title:"〜ながら(も)",summary:"Menyatakan dua hal yang bertentangan dalam satu keadaan, artinya walaupun begitu tetap.",groups:[
    {name:"〜ながら(も)",description:"Sering dipakai untuk menunjukkan perasaan campur aduk atau keadaan yang tidak sepenuhnya sesuai.",sentences:[
      {"jp":"駅前で働きながらも、彼女は毎晩日本語学校に通っている。","kana":"えきまえではたらきながらも、かのじょはまいばんにほんごがくこうにとおっている。","romaji":"ekimae de hataraki nagaramo, kanojo ha maiban nihongogaku kou ni tootte iru.","meaning":"Walaupun bekerja di depan stasiun, dia tetap pergi ke sekolah bahasa Jepang tiap malam."},
      {"jp":"不便だと感じながら、結局この町の落ち着いた雰囲気が好きになった。","kana":"ふべんだとかんじながら、けっきょくこのまちのおちついたふんいきがすきになった。","romaji":"fuben dato kanji nagara, kekkyoku kono machi no ochitsui ta fun'iki ga suki ninatta.","meaning":"Walaupun saya merasa kota ini tidak terlalu praktis, akhirnya saya jadi suka suasananya yang tenang."},
      {"jp":"申し訳ないと思いながらも、締め切りの延長をお願いした。","kana":"もうしわけないとおもいながらも、しめきりのえんちょうをおねがいした。","romaji":"moushiwakenai to omoi nagaramo, shimekiri no enchou woo negai shita.","meaning":"Walaupun merasa tidak enak, saya tetap meminta perpanjangan tenggat."},
      {"jp":"古い建物ながら、館内はきれいに手入れされている。","kana":"ふるいたてものながら、かんないはきれいにていれされている。","romaji":"furui tatemono nagara, kannai hakireini teire sareteiru.","meaning":"Walaupun bangunannya tua, bagian dalamnya terawat rapi."},
      {"jp":"学生ながらも、地域の防災活動に真剣に関わっている人がいる。","kana":"がくせいながらも、ちいきのぼうさいかつどうにしんけんにかかわっているにんがいる。","romaji":"gakusei nagaramo, chiiki no bousai katsudou ni shinken ni kakawa tteiru nin gairu.","meaning":"Ada orang yang walaupun masih mahasiswa, terlibat serius dalam kegiatan kesiapsiagaan bencana di lingkungan sekitar."}
    ]}
  ]},

  {id:"GR-N2-04",level:"N2",title:"〜つつ(も)",summary:"Menyatakan pertentangan saat seseorang sadar akan sesuatu tetapi tetap melakukan hal lain.",groups:[
    {name:"〜つつ(も)",description:"Banyak dipakai di tulisan atau ucapan yang sedikit lebih formal daripada ながらも.",sentences:[
      {"jp":"無理だと分かりつつ、締め切り前はつい徹夜してしまう。","kana":"むりだとわかりつつ、しめきりまえはついてつやしてしまう。","romaji":"muri dato waka ritsutsu, shimekiri mae hatsui tetsuya shiteshimau.","meaning":"Walaupun tahu itu tidak baik, menjelang tenggat saya tetap saja begadang."},
      {"jp":"気になりつつも、忙しくて病院の予約を先延ばしにしていた。","kana":"きになりつつも、いそがしくてびょういんのよやくをさきのばしにしていた。","romaji":"kini naritsutsumo, isogashiku te byouin no yoyaku wo saki noba shinishiteita.","meaning":"Walaupun khawatir, karena sibuk saya terus menunda membuat janji ke rumah sakit."},
      {"jp":"失礼だと思いつつ、会議中に何度も時計を見てしまった。","kana":"しつれいだとおもいつつ、かいぎちゅうになんどもとけいをみてしまった。","romaji":"shitsurei dato omoi tsutsu, kaigichuu ni nando mo tokei wo mite shimatta.","meaning":"Walaupun merasa itu tidak sopan, saya tetap beberapa kali melihat jam saat rapat."},
      {"jp":"節約しなければと思いつつ、コンビニで新作スイーツを見ると買ってしまう。","kana":"せつやくしなければとおもいつつ、こんびにでしんさくすいーつをみるとかってしまう。","romaji":"setsuyaku shinakerebato omoi tsutsu, konbini de shinsaku suiitsu wo miru to katsu teshimau.","meaning":"Walaupun berpikir harus hemat, tiap lihat dessert baru di konbini saya tetap membelinya."},
      {"jp":"周りに頼るべきだと思いつつも、最後は自分で抱え込んでしまう。","kana":"まわりにたよるべきだとおもいつつも、さいごはじぶんでかかえこんでしまう。","romaji":"mawari ni tayoru bekidato omoi tsutsumo, saigo ha jibun de kakae kon deshimau.","meaning":"Walaupun merasa seharusnya mengandalkan orang lain, pada akhirnya saya malah menanggung semuanya sendiri."}
    ]}
  ]},

  {id:"GR-N2-05",level:"N2",title:"〜にかかわらず / にかかわりなく",summary:"Menyatakan tanpa melihat perbedaan kondisi, jenis, atau status, artinya tanpa memandang.",groups:[
    {name:"〜にかかわらず / にかかわりなく",description:"Sering dipakai untuk aturan, pengumuman, dan penjelasan resmi.",sentences:[
      {"jp":"この図書館は市内在住かどうかにかかわらず利用できます。","kana":"このとしょかんはしないざいじゅうかどうかにかかわらずりようできます。","romaji":"kono toshokan ha shinai zaijuu kadoukanikakawarazu riyou dekimasu.","meaning":"Perpustakaan ini bisa dipakai tanpa memandang apakah tinggal di dalam kota atau tidak."},
      {"jp":"経験の有無にかかわらず、応募できるアルバイトです。","kana":"けいけんのうむにかかわらず、おうぼできるあるばいとです。","romaji":"keiken no umu nikakawarazu, oubo dekiru arubaito desu.","meaning":"Ini pekerjaan paruh waktu yang bisa dilamar tanpa memandang ada pengalaman atau tidak."},
      {"jp":"国籍にかかわりなく、災害時は同じ避難所が案内されます。","kana":"こくせきにかかわりなく、さいがいじはおなじひなんじょがあんないされます。","romaji":"kokuseki nikakawarinaku, saigaiji ha onaji hinanjo ga annai saremasu.","meaning":"Tanpa memandang kewarganegaraan, saat bencana orang-orang akan diarahkan ke tempat evakuasi yang sama."},
      {"jp":"雨天にかかわらず、地域清掃は予定どおり行われます。","kana":"うてんにかかわらず、ちいきせいそうはよていどおりおこなわれます。","romaji":"uten nikakawarazu, chiiki seisou ha yotei doori okonawa remasu.","meaning":"Tanpa memandang hujan atau tidak, kegiatan bersih-bersih lingkungan tetap berjalan sesuai jadwal."},
      {"jp":"年齢にかかわりなく参加できる日本語交流会が人気らしい。","kana":"ねんれいにかかわりなくさんかできるにほんごこうりゅうかいがにんきらしい。","romaji":"nenrei nikakawarinaku sanka dekiru nihongo kouryuukai ga ninki rashii.","meaning":"Katanya acara pertukaran bahasa Jepang yang bisa diikuti tanpa memandang usia itu cukup populer."}
    ]}
  ]},

  {id:"GR-N2-06",level:"N2",title:"〜からといって / からって",summary:"Menyatakan bahwa alasan tertentu tidak otomatis membenarkan kesimpulan setelahnya, artinya hanya karena begitu bukan berarti.",groups:[
    {name:"〜からといって / からって",description:"からって adalah bentuk lisan yang santai.",sentences:[
      {"jp":"近いからといって、終電ぎりぎりまで駅前で遊ぶのは危ない。","kana":"ちかいからといって、しゅうでんぎりぎりまでえきまえであそぶのはあぶない。","romaji":"chikai karatoitte, shuuden girigirimade ekimae de asobu noha abunai.","meaning":"Hanya karena rumah dekat bukan berarti aman bermain di sekitar stasiun sampai mepet kereta terakhir."},
      {"jp":"日本語が上手だからといって、敬語まで完璧とは限らない。","kana":"にほんごがじょうずだからといって、けいごまでかんぺきとはかぎらない。","romaji":"nihongo ga jouzu dakaratoitte, keigo made kanpeki toha kagira nai.","meaning":"Hanya karena bahasa Jepangnya bagus bukan berarti keigo-nya juga pasti sempurna."},
      {"jp":"有名な店だからって、毎回すぐ入れるわけじゃない。","kana":"ゆうめいなみせだからって、まいかいすぐいれるわけじゃない。","romaji":"yuumei na mise dakaratte, maikai sugu ire ruwakejanai.","meaning":"Hanya karena tokonya terkenal bukan berarti setiap kali kita bisa langsung masuk."},
      {"jp":"雨が弱いからといって、傘なしで出ると帰りに困るよ。","kana":"あめがよわいからといって、かさなしででるとかえりにこまるよ。","romaji":"ame ga yowai karatoitte, kasa nashide deru to kaeri ni komaru yo.","meaning":"Hanya karena hujannya sedang ringan bukan berarti aman keluar tanpa payung."},
      {"jp":"外国人だからって、みんな同じサポートが必要なわけではない。","kana":"がいこくじんだからって、みんなおなじさぽーとがひつようなわけではない。","romaji":"gaikokujin dakaratte, minna onaji sapooto ga hitsuyou nawakedehanai.","meaning":"Hanya karena seseorang orang asing bukan berarti semua membutuhkan dukungan yang sama."}
    ]}
  ]},

  {id:"GR-N2-07",level:"N2",title:"〜にしても / にしろ / にせよ",summary:"Menyatakan andaipun memilih sisi mana pun, pembicara tetap ingin menekankan hal berikutnya.",groups:[
    {name:"〜にしても / にしろ / にせよ",description:"Sering dipakai saat mempertimbangkan beberapa kemungkinan.",sentences:[
      {"jp":"引っ越すにしても、まずは区役所で住所変更の手続きを確認したい。","kana":"ひっこすにしても、まずはくやくしょでじゅうしょへんこうのてつづきをかくにんしたい。","romaji":"hikkosu nishitemo, mazuha kuyakusho de juushohenkou no tetsuzuki wo kakuninshi tai.","meaning":"Kalaupun jadi pindah, saya ingin mengecek dulu prosedur perubahan alamat di kantor wilayah."},
      {"jp":"断るにしろ、早めに連絡したほうがいい。","kana":"ことわるにしろ、はやめにれんらくしたほうがいい。","romaji":"kotowaru nishiro, hayame ni renraku shitahougaii.","meaning":"Kalaupun mau menolak, lebih baik memberi kabar lebih awal."},
      {"jp":"留学を続けるにせよ帰国するにせよ、今月中には決めないといけない。","kana":"りゅうがくをつづけるにせよきこくするにせよ、こんげつちゅうにはきめないといけない。","romaji":"ryuugaku wo tsuzuke runiseyo kikoku suruniseyo, kongetsuchuu niha kime naitoikenai.","meaning":"Mau lanjut kuliah di luar negeri atau pulang ke negara asal, saya harus memutuskan dalam bulan ini."},
      {"jp":"安いにしても、このスマホケースはさすがに作りが軽すぎる。","kana":"やすいにしても、このすまほけーすはさすがにつくりがかるすぎる。","romaji":"yasui nishitemo, kono sumahokeesu hasasugani tsukuri ga karusu giru.","meaning":"Walaupun harganya murah, casing ponsel ini tetap terasa terlalu ringkih."},
      {"jp":"歩くにしろ電車に乗るにしろ、今日は早めに出たほうがよさそうだ。","kana":"あるくにしろでんしゃにのるにしろ、こんにちははやめにでたほうがよさそうだ。","romaji":"aruku nishiro densha ni noru nishiro, konnichiha hayame ni deta hougayosasouda.","meaning":"Entah jalan kaki atau naik kereta, hari ini sepertinya lebih baik berangkat lebih awal."}
    ]}
  ]},

  {id:"GR-N2-08",level:"N2",title:"〜かのようだ / かのように",summary:"Menyatakan keadaan yang terlihat seolah-olah demikian, artinya seperti, seakan-akan.",groups:[
    {name:"〜かのようだ / かのように",description:"Dipakai untuk menggambarkan kesan yang kuat atau gaya penulisan yang lebih deskriptif.",sentences:[
      {"jp":"店員は常連客の名前を全部覚えているかのように自然に声をかけていた。","kana":"てんいんはじょうれんきゃくのなまえをぜんぶおぼえているかのようにしぜんにこえをかけていた。","romaji":"ten'in ha jourenkyaku no namae wo zenbu oboe teirukanoyouni shizen ni koe wokaketeita.","meaning":"Pelayan itu menyapa dengan natural seolah-olah mengingat nama semua pelanggan tetap."},
      {"jp":"彼は何もなかったかのように翌日ふつうに出社した。","kana":"かれはなにもなかったかのようによくじつふつうにしゅっしゃした。","romaji":"kareha nanimo nakattakanoyouni yokujitsu futsuuni shussha shita.","meaning":"Dia masuk kerja keesokan harinya seperti tidak terjadi apa-apa."},
      {"jp":"初めて来たのに、昔からこの町を知っているかのような気持ちになった。","kana":"はじめてきたのに、むかしからこのまちをしっているかのようなきもちになった。","romaji":"hajimete kita noni, mukashi karakono machi wo shitte irukanoyouna kimochi ninatta.","meaning":"Padahal baru pertama datang, saya merasa seperti sudah lama mengenal kota ini."},
      {"jp":"先生はゆっくり息を整えるかのように、発表の前に少し間を置いた。","kana":"せんせいはゆっくりいきをととのえるかのように、はっぴょうのまえにすこしかんをおいた。","romaji":"sensei hayukkuri iki wo totonoe rukanoyouni, happyou no mae ni sukoshi kan wo oita.","meaning":"Guru itu berhenti sejenak sebelum presentasi seolah-olah sedang menenangkan napas."},
      {"jp":"雪は音を吸い込むかのように、街全体を静かにしていた。","kana":"ゆきはおとをすいこむかのように、まちぜんたいをしずかにしていた。","romaji":"yuki ha oto wo suikomu kanoyouni, machi zentai wo shizuka nishiteita.","meaning":"Salju membuat seluruh kota menjadi tenang seolah-olah menyerap semua suara."}
    ]}
  ]},

  {id:"GR-N2-09",level:"N2",title:"〜げ",summary:"Menyatakan kesan yang terlihat dari luar, seperti tampak, kelihatan, berkesan.",groups:[
    {name:"〜げ",description:"Sering melekat pada kata sifat atau perasaan dan banyak dipakai untuk menggambarkan ekspresi orang.",sentences:[
      {"jp":"窓口の職員は少し困りげな顔をしながら、別の番号札を渡してくれた。","kana":"まどぐちのしょくいんはすこしこまりげなかおをしながら、べつのばんごうさつをわたしてくれた。","romaji":"madoguchi no shokuin ha sukoshi komari gena kao woshinagara, betsuno bangou satsu wo watashi tekureta.","meaning":"Petugas loket itu memberikan nomor antrean lain sambil menunjukkan ekspresi yang agak kebingungan."},
      {"jp":"彼は自信ありげに答えていたのに、結果が出たら意外と静かだった。","kana":"かれはじしんありげにこたえていたのに、けっかがでたらいがいとしずかだった。","romaji":"kareha jishin arigeni kotae teitanoni, kekka ga deta ra igai to shizuka datta.","meaning":"Tadi dia menjawab dengan sangat percaya diri, tapi setelah hasil keluar dia justru jadi diam."},
      {"jp":"ホームで立っていた女の子が不安げに何度も案内板を見ていた。","kana":"ほーむでたっていたおんなのこがふあんげになんどもあんないばんをみていた。","romaji":"hoomu de tatsu teita onnanoko ga fuan geni nando mo annaiban wo mite ita.","meaning":"Anak perempuan yang berdiri di peron terus melihat papan petunjuk dengan wajah cemas."},
      {"jp":"店長は忙しげに店内を行き来していて、話しかけるタイミングがなかった。","kana":"てんちょうはいそがしげにてんないをいききしていて、はなしかけるたいみんぐがなかった。","romaji":"tenchou ha isogashi geni tennai wo ikiki shiteite, hanashi kakeru taimingu ganakatta.","meaning":"Manajer toko mondar-mandir dengan terlihat sangat sibuk sehingga saya tidak sempat menyapanya."},
      {"jp":"その学生は誇らしげに奨学金の通知を見せてくれた。","kana":"そのがくせいはほこらしげにしょうがくきんのつうちをみせてくれた。","romaji":"sono gakusei ha hokora shigeni shougakukin no tsuuchi wo mise tekureta.","meaning":"Mahasiswa itu menunjukkan surat beasiswanya dengan ekspresi bangga."}
    ]}
  ]},

  {id:"GR-N2-10",level:"N2",title:"〜ばかりに",summary:"Menyatakan penyebab tunggal yang membuat hasil buruk terjadi, artinya hanya karena.",groups:[
    {name:"〜ばかりに",description:"Nuansanya penyesalan atau sayang sekali gara-gara hal itu.",sentences:[
      {"jp":"終電を一本逃したばかりに、タクシー代が予想以上にかかった。","kana":"しゅうでんをいっぽんのがしたばかりに、たくしーだいがよそういじょうにかかった。","romaji":"shuuden wo ippon nogashi tabakarini, takushii dai ga yosouijou nikakatta.","meaning":"Hanya karena ketinggalan satu kereta terakhir, ongkos taksinya jadi jauh lebih mahal dari perkiraan."},
      {"jp":"確認を一つ怠ったばかりに、在留カードの更新で二度手間になった。","kana":"かくにんをひとつおこたったばかりに、ざいりゅうかーどのこうしんでにどでまになった。","romaji":"kakunin wo hitotsu okotatsu tabakarini, zairyuu kaado no koushin de nidodema ninatta.","meaning":"Hanya karena melewatkan satu pengecekan, pengurusan perpanjangan kartu tinggal jadi dua kali kerja."},
      {"jp":"つい見栄を張ったばかりに、あとで説明が大変になった。","kana":"ついみえをはったばかりに、あとでせつめいがたいへんになった。","romaji":"tsui mie wo hatsu tabakarini, atode setsumei ga taihen ninatta.","meaning":"Hanya karena tadi sempat gengsi, penjelasannya jadi merepotkan di belakang."},
      {"jp":"安い部屋を選んだばかりに、冬の寒さでかなり苦労した。","kana":"やすいへやをえらんだばかりに、ふゆのさむさでかなりくろうした。","romaji":"yasui heya wo eran dabakarini, fuyu no samusa dekanari kurou shita.","meaning":"Hanya karena memilih kamar yang murah, saya cukup menderita saat musim dingin."},
      {"jp":"『大丈夫です』と言ったばかりに、全部一人で任されてしまった。","kana":"『だいじょうぶです』といったばかりに、ぜんぶひとりでまかされてしまった。","romaji":"( daijoubu desu ) to itta bakarini, zenbu hitori de makasa reteshimatta.","meaning":"Hanya karena saya bilang 'tidak apa-apa', akhirnya semua diserahkan ke saya sendirian."}
    ]}
  ]},

  {id:"GR-N2-11",level:"N2",title:"〜につき",summary:"Menyatakan alasan atau dasar pengumuman secara formal, artinya karena, disebabkan oleh.",groups:[
    {name:"〜につき",description:"Sering terlihat di papan pengumuman, toko, dan surat resmi.",sentences:[
      {"jp":"工事中につき、こちらの通路は通れません。","kana":"こうじちゅうにつき、こちらのつうろはとうれません。","romaji":"koujichuu nitsuki, kochirano tsuuro ha toure masen.","meaning":"Karena sedang ada konstruksi, lorong ini tidak bisa dilewati."},
      {"jp":"本日は棚卸しにつき、コンビニの一部商品が買えません。","kana":"ほんじつはたなおろしにつき、こんびにのいちぶしょうひんがかえません。","romaji":"honjitsu ha tanaoroshi nitsuki, konbini no ichibu shouhin ga kae masen.","meaning":"Karena hari ini ada stok opname, sebagian barang di konbini tidak bisa dibeli."},
      {"jp":"会場整備につき、午後一時までロビーでお待ちください。","kana":"かいじょうせいびにつき、ごごいちじまでろびーでおまちください。","romaji":"kaijou seibi nitsuki, gogo ichiji made robii deo machi kudasai.","meaning":"Karena penataan venue, harap menunggu di lobi sampai pukul satu siang."},
      {"jp":"準備中につき、窓口の受付はまだ始まっておりません。","kana":"じゅんびちゅうにつき、まどぐちのうけつけはまだはじまっておりません。","romaji":"junbichuu nitsuki, madoguchi no uketsuke hamada hajima tteorimasen.","meaning":"Karena masih tahap persiapan, pelayanan loket belum dimulai."},
      {"jp":"研修につき、本日の電話対応は少人数で行っております。","kana":"けんしゅうにつき、ほんじつのでんわたいおうはしょうにんずうでいっております。","romaji":"kenshuu nitsuki, honjitsu no denwa taiou ha shouninzuu de itte orimasu.","meaning":"Karena ada pelatihan, layanan telepon hari ini ditangani oleh staf yang lebih sedikit."}
    ]}
  ]},

  {id:"GR-N2-12",level:"N2",title:"〜あまり",summary:"Menyatakan sesuatu terjadi karena perasaan atau keadaan yang terlalu kuat, artinya karena terlalu.",groups:[
    {name:"〜あまり",description:"Sering dipakai untuk emosi, kelelahan, atau keadaan berlebihan.",sentences:[
      {"jp":"心配のあまり、母は夜遅くに何度もメッセージを送ってきた。","kana":"しんぱいのあまり、はははよるおそくになんどもめっせーじをおくってきた。","romaji":"shinpai noamari, haha ha yoruosoku ni nando mo messeeji wo okutsu tekita.","meaning":"Karena terlalu khawatir, ibu sampai mengirim pesan berkali-kali larut malam."},
      {"jp":"忙しさのあまり、冷蔵庫に何があるかさえ覚えていなかった。","kana":"いそがしさのあまり、れいぞうこになにがあるかさえおぼえていなかった。","romaji":"isogashisa noamari, reizouko ni nani gaarukasae oboe teinakatta.","meaning":"Karena terlalu sibuk, saya sampai tidak ingat isi kulkas."},
      {"jp":"緊張のあまり、面接で自分の名前を言い直してしまった。","kana":"きんちょうのあまり、めんせつでじぶんのなまえをいいなおしてしまった。","romaji":"kinchou noamari, mensetsu de jibun no namae wo ii naoshi teshimatta.","meaning":"Karena terlalu tegang, saya sampai harus mengulangi nama sendiri saat wawancara."},
      {"jp":"うれしさのあまり、その場で先生に何度もお礼を言った。","kana":"うれしさのあまり、そのばでせんせいになんどもおれいをいった。","romaji":"ureshisanoamari, sono ba de sensei ni nando moo rei wo itta.","meaning":"Karena terlalu senang, saya berterima kasih berkali-kali kepada sensei di tempat itu juga."},
      {"jp":"暑さのあまり、駅までの道でアイスを二本も買ってしまった。","kana":"あつさのあまり、えきまでのみちであいすをにほんもかってしまった。","romaji":"atsusa noamari, eki madeno michi de aisu wo nihon mo katsu teshimatta.","meaning":"Karena terlalu panas, di jalan ke stasiun saya malah membeli dua es krim sekaligus."}
    ]}
  ]},

  {id:"GR-N2-13",level:"N2",title:"〜ものだから",summary:"Menyatakan alasan pribadi yang terdengar seperti penjelasan atau permintaan pengertian, artinya soalnya.",groups:[
    {name:"〜ものだから",description:"Banyak dipakai saat menjelaskan keadaan diri sendiri dengan nada agak lembut.",sentences:[
      {"jp":"日本に来たばかりなものだから、電車の乗り換えにまだ慣れていないんです。","kana":"にっぽんにきたばかりなものだから、でんしゃののりかえにまだなれていないんです。","romaji":"nippon ni kita bakarinamonodakara, densha no norikae nimada nare teinaindesu.","meaning":"Soalnya saya baru datang ke Jepang, jadi masih belum terbiasa ganti kereta."},
      {"jp":"子どもが熱を出したものですから、今日は在宅で仕事をします。","kana":"こどもがねつをだしたものですから、こんにちはざいたくでしごとをします。","romaji":"kodomo ga netsu wo dashi tamonodesukara, konnichiha zaitaku de shigoto woshimasu.","meaning":"Soalnya anak saya demam, hari ini saya akan bekerja dari rumah."},
      {"jp":"このあたりは詳しくないものですから、駅までの道を教えていただけますか。","kana":"このあたりはくわしくないものですから、えきまでのみちをおしえていただけますか。","romaji":"konoatariha kuwashiku naimonodesukara, eki madeno michi wo oshie teitadakemasuka.","meaning":"Soalnya saya belum tahu daerah sini, bolehkah Anda memberi tahu jalan ke stasiun?"},
      {"jp":"急に予定が変わったものだから、予約の時間に少し遅れそうです。","kana":"きゅうによていがかわったものだから、よやくのじかんにすこしおくれそうです。","romaji":"kyuuni yotei ga kawa ttamonodakara, yoyaku no jikan ni sukoshi okure soudesu.","meaning":"Soalnya jadwalnya mendadak berubah, saya sepertinya akan sedikit terlambat untuk reservasi."},
      {"jp":"人前で話すのが苦手なものだから、発表の前はいつも落ち着かなくて。","kana":"ひとまえではなすのがにがてなものだから、はっぴょうのまえはいつもおちつかなくて。","romaji":"hitomae de hanasu noga nigate namonodakara, happyou no mae haitsumo ochitsuka nakute.","meaning":"Soalnya saya kurang pandai bicara di depan orang, jadi sebelum presentasi saya selalu gelisah."}
    ]}
  ]},

  {id:"GR-N2-14",level:"N2",title:"〜のことだから",summary:"Menyatakan dugaan berdasarkan sifat atau kebiasaan seseorang, artinya mengingat dia orang seperti itu.",groups:[
    {name:"〜のことだから",description:"Dipakai saat pembicara mengenal baik sifat orang yang dibicarakan.",sentences:[
      {"jp":"時間に厳しい佐藤さんのことだから、もう会場に着いていると思う。","kana":"じかんにいかめしいさとうさんのことだから、もうかいじょうについているとおもう。","romaji":"jikan ni ikameshii satou sannokotodakara, mou kaijou ni tsui teiruto omou.","meaning":"Mengingat Satou-san sangat disiplin soal waktu, saya rasa dia sudah sampai di venue."},
      {"jp":"甘い物が好きな彼女のことだから、新しい限定パフェはもう食べたはずだ。","kana":"あまいものがすきなかのじょのことだから、あたらしいげんていぱふぇはもうたべたはずだ。","romaji":"amai mono ga suki na kanojo nokotodakara, atarashii gentei pafe hamou tabeta hazuda.","meaning":"Mengingat dia suka makanan manis, pasti dia sudah mencoba parfait edisi terbatas yang baru itu."},
      {"jp":"責任感の強い先輩のことだから、最後まできちんと対応してくれるだろう。","kana":"せきにんかんのつよいせんぱいのことだから、さいごまできちんとたいおうしてくれるだろう。","romaji":"sekininkan no tsuyoi senpai nokotodakara, saigo madekichinto taiou shitekurerudarou.","meaning":"Mengingat senior itu rasa tanggung jawabnya kuat, pasti dia akan menangani sampai tuntas."},
      {"jp":"子ども思いの先生のことだから、保護者への連絡も丁寧にしているはずだ。","kana":"こどもおもいのせんせいのことだから、ほごしゃへのれんらくもていねいにしているはずだ。","romaji":"kodomo omoi no sensei nokotodakara, hogosha heno renraku mo teinei nishiteiruhazuda.","meaning":"Mengingat guru itu sangat perhatian pada anak-anak, pasti dia juga menghubungi orang tua dengan teliti."},
      {"jp":"旅行好きの友達のことだから、連休はじっと家にいないと思う。","kana":"りょこうすきのともだちのことだから、れんきゅうはじっといえにいないとおもう。","romaji":"ryokou suki no tomodachi nokotodakara, renkyuu hajitto ie niinaito omou.","meaning":"Mengingat teman saya suka jalan-jalan, saya rasa saat libur panjang dia tidak akan diam di rumah."}
    ]}
  ]},

  {id:"GR-N2-15",level:"N2",title:"〜ことから",summary:"Menyatakan alasan atau dasar penilaian berdasarkan fakta tertentu, artinya karena, dari fakta bahwa.",groups:[
    {name:"〜ことから",description:"Sering dipakai untuk penjelasan objektif atau tulisan resmi.",sentences:[
      {"jp":"この地域は坂が多いことから、自転車よりバスを使う人が多い。","kana":"このちいきはさかがおおいことから、じてんしゃよりばすをつかうにんがおおい。","romaji":"kono chiiki ha saka ga ooi kotokara, jitensha yori basu wo tsukau nin ga ooi.","meaning":"Karena daerah ini banyak tanjakan, orang-orang lebih banyak memakai bus daripada sepeda."},
      {"jp":"駅から近いことから、この会議室がよく選ばれている。","kana":"えきからちかいことから、このかいぎしつがよくえらばれている。","romaji":"eki kara chikai kotokara, kono kaigishitsu gayoku eraba reteiru.","meaning":"Karena dekat dari stasiun, ruang rapat ini sering dipilih."},
      {"jp":"申込者が多いことから、説明会は二回に分けて行われることになった。","kana":"もうしこみしゃがおおいことから、せつめいかいはにかいにわけておこなわれることになった。","romaji":"moushikomisha ga ooi kotokara, setsumeikai ha nikai ni wake te okonawa rerukotoninatta.","meaning":"Karena pendaftarnya banyak, sesi penjelasan diputuskan diadakan dalam dua gelombang."},
      {"jp":"発音が似ていることから、学習者が間違えやすい表現だと言われている。","kana":"はつおんがにていることから、がくしゅうしゃがまちがえやすいひょうげんだといわれている。","romaji":"hatsuon ga nite irukotokara, gakushuusha ga machigae yasui hyougen dato iwa reteiru.","meaning":"Karena pelafalannya mirip, ungkapan ini katanya mudah tertukar oleh pelajar."},
      {"jp":"古い写真が見つかったことから、この建物の歴史が改めて注目された。","kana":"ふるいしゃしんがみつかったことから、このたてもののれきしがあらためてちゅうもくされた。","romaji":"furui shashin ga mitsu kattakotokara, kono tatemono no rekishi ga aratame te chuumoku sareta.","meaning":"Karena foto lamanya ditemukan, sejarah bangunan ini kembali mendapat perhatian."}
    ]}
  ]},

  {id:"GR-N2-16",level:"N2",title:"〜からには / 〜からは / 〜以上は / 〜上は",summary:"Menyatakan kalau sesuatu sudah diputuskan atau dilakukan, maka ada tanggung jawab atau konsekuensi setelahnya.",groups:[
    {name:"〜からには / 〜からは / 〜以上は / 〜上は",description:"Dipakai untuk tekad, kewajiban, dan keputusan yang tidak setengah-setengah.",sentences:[
      {"jp":"日本で働くからには、職場のルールをきちんと理解しておきたい。","kana":"にっぽんではたらくからには、しょくばのるーるをきちんとりかいしておきたい。","romaji":"nippon de hataraku karaniha, shokuba no ruuru wokichinto rikai shiteokitai.","meaning":"Kalau sudah bekerja di Jepang, saya ingin memahami aturan kantor dengan benar."},
      {"jp":"引き受けたからは、最後まで責任を持ってやるつもりです。","kana":"ひきうけたからは、さいごまでせきにんをもってやるつもりです。","romaji":"hikiuke takaraha, saigo made sekinin wo motsu teyarutsumoridesu.","meaning":"Kalau sudah saya terima, saya berniat mengerjakannya dengan tanggung jawab sampai akhir."},
      {"jp":"留学すると決めた以上は、中途半端な気持ちではいたくない。","kana":"りゅうがくするときめたいじょうは、ちゅうとはんぱなきもちではいたくない。","romaji":"ryuugaku suruto kime ta ijou ha, chuutohanpa na kimochi dehaitakunai.","meaning":"Kalau sudah memutuskan untuk belajar ke luar negeri, saya tidak mau menjalaninya setengah hati."},
      {"jp":"発表者である上は、質問にも落ち着いて答えないといけない。","kana":"はっぴょうしゃであるうえは、しつもんにもおちついてこたえないといけない。","romaji":"happyousha dearu ue ha, shitsumon nimo ochitsui te kotae naitoikenai.","meaning":"Kalau sudah menjadi presenter, saya harus bisa menjawab pertanyaan dengan tenang juga."},
      {"jp":"住民としてこの町に暮らすからには、地域の防災訓練にも参加したい。","kana":"じゅうみんとしてこのまちにくらすからには、ちいきのぼうさいくんれんにもさんかしたい。","romaji":"juumin toshitekono machi ni kura sukaraniha, chiiki no bousaikunren nimo sanka shitai.","meaning":"Kalau sudah tinggal di kota ini sebagai warga, saya juga ingin ikut latihan kesiapsiagaan bencananya."}
    ]}
  ]},

  {id:"GR-N2-17",level:"N2",title:"〜ところをみると",summary:"Menyatakan penilaian berdasarkan situasi yang terlihat, artinya dilihat dari.",groups:[
    {name:"〜ところをみると",description:"Dipakai saat menyimpulkan sesuatu dari tanda yang tampak.",sentences:[
      {"jp":"玄関に濡れた傘が何本もあるところを見ると、もう中にかなり人が集まっているようだ。","kana":"げんかんにぬれたかさがなんぼんもあるところをみると、もうなかにかなりにんがあつまっているようだ。","romaji":"genkan ni nure ta kasa ga nanbon moarutokorowo miru to, mou nakani kanari nin ga atsuma tteiruyouda.","meaning":"Dilihat dari banyaknya payung basah di pintu masuk, sepertinya di dalam sudah cukup ramai."},
      {"jp":"店員と自然に話しているところを見ると、彼はこの辺りの常連らしい。","kana":"てんいんとしぜんにはなしているところをみると、かれはこのあたりのじょうれんらしい。","romaji":"ten'in to shizen ni hanashi teirutokorowo miru to, kareha kono atari no jouren rashii.","meaning":"Dilihat dari caranya bicara akrab dengan pelayan, sepertinya dia pelanggan tetap di daerah sini."},
      {"jp":"申請書を迷わず書いているところを見ると、手続きに慣れているんですね。","kana":"しんせいしょをまよわずかいているところをみると、てつづきになれているんですね。","romaji":"shinseisho wo mayowa zu kai teirutokorowo miru to, tetsuzuki ni nare teirundesune.","meaning":"Dilihat dari caranya mengisi formulir tanpa ragu, sepertinya Anda sudah terbiasa dengan prosedur ini ya."},
      {"jp":"机の上に参考書が何冊も開いてあるところを見ると、試験前でかなり忙しそうだ。","kana":"つくえのうえにさんこうしょがなんさつもひらいてあるところをみると、しけんまえでかなりいそがしそうだ。","romaji":"tsukue no ueni sankousho ga nansatsu mo hirai tearutokorowo miru to, shikenmae dekanari isogashiso uda.","meaning":"Dilihat dari banyaknya buku referensi yang terbuka di meja, kelihatannya dia sangat sibuk menjelang ujian."},
      {"jp":"会場の雰囲気が明るいところを見ると、今年の交流会は成功だったんだろう。","kana":"かいじょうのふんいきがあかるいところをみると、こんねんのこうりゅうかいはせいこうだったんだろう。","romaji":"kaijou no fun'iki ga akarui tokorowo miru to, konnen no kouryuukai ha seikou dattandarou.","meaning":"Dilihat dari suasana venue yang cerah, acara pertukaran tahun ini sepertinya sukses."}
    ]}
  ]},

  {id:"GR-N2-18",level:"N2",title:"〜だけに / 〜だけあって",summary:"Menyatakan karena memang sesuai kemampuan atau keadaan, hasilnya terasa wajar dan pantas.",groups:[
    {name:"〜だけに / 〜だけあって",description:"だけあって cenderung untuk hasil yang sesuai harapan, だけに bisa juga menekankan sisi beratnya.",sentences:[
      {"jp":"観光地だけあって、駅の案内表示に英語と中国語もあった。","kana":"かんこうちだけあって、えきのあんないひょうじにえいごとちゅうごくごもあった。","romaji":"kankouchi dakeatte, eki no annaihyouji ni eigo to chuugokugo moatta.","meaning":"Karena memang daerah wisata, papan petunjuk di stasiunnya juga ada bahasa Inggris dan Mandarin."},
      {"jp":"十年日本に住んでいるだけあって、役所での説明もとてもスムーズだった。","kana":"じゅうねんにっぽんにすんでいるだけあって、やくしょでのせつめいもとてもすむーずだった。","romaji":"juunen nippon ni sun deirudakeatte, yakusho deno setsumei mototemo sumuuzu datta.","meaning":"Karena memang sudah tinggal di Jepang sepuluh tahun, penjelasannya di kantor pemerintahan juga sangat lancar."},
      {"jp":"期待していただけに、休演の知らせを見た時はがっかりした。","kana":"きたいしていただけに、きゅうえんのしらせをみたときはがっかりした。","romaji":"kitaishi teitadakeni, kyuuen no shirase wo mita toki hagakkarishita.","meaning":"Justru karena saya sangat berharap, saat melihat kabar pertunjukannya dibatalkan saya jadi kecewa sekali."},
      {"jp":"人気店だけあって、平日の昼でも行列ができていた。","kana":"にんきみせだけあって、へいじつのひるでもぎょうれつができていた。","romaji":"ninki mise dakeatte, heijitsu no hiru demo gyouretsu gadekiteita.","meaning":"Karena memang toko terkenal, bahkan siang hari kerja pun antreannya panjang."},
      {"jp":"任された仕事が大きいだけに、準備にも時間をかけたかった。","kana":"まかされたしごとがおおきいだけに、じゅんびにもじかんをかけたかった。","romaji":"makasa reta shigoto ga ookii dakeni, junbi nimo jikan wokaketakatta.","meaning":"Justru karena pekerjaan yang diberikan cukup besar, saya ingin meluangkan lebih banyak waktu untuk persiapan."}
    ]}
  ]},

  {id:"GR-N2-19",level:"N2",title:"〜ことだし",summary:"Menyatakan alasan tambahan yang cukup untuk mengambil tindakan, artinya lagipula, sekalian.",groups:[
    {name:"〜ことだし",description:"Sering dipakai dalam percakapan santai untuk memberi dorongan melakukan sesuatu.",sentences:[
      {"jp":"せっかく近くまで来たことだし、帰りに神社にも寄っていこう。","kana":"せっかくちかくまできたことだし、かえりにじんじゃにもよっていこう。","romaji":"sekkaku chikaku made kita kotodashi, kaeri ni jinja nimo yotsu teikou.","meaning":"Mumpung kita sudah sampai dekat sini, sekalian mampir ke kuil saat pulang yuk."},
      {"jp":"雨もやんだことだし、少し散歩してから帰ろうか。","kana":"あめもやんだことだし、すこしさんぽしてからかえろうか。","romaji":"ame moyandakotodashi, sukoshi sanpo shitekara kaero uka.","meaning":"Karena hujannya juga sudah berhenti, bagaimana kalau kita jalan sebentar sebelum pulang?"},
      {"jp":"新しい学期が始まることだし、ノートとペンを買い替えたい。","kana":"あたらしいがっきがはじまることだし、のーととぺんをかいかえたい。","romaji":"atarashii gakki ga hajima rukotodashi, nooto to pen wo kai kae tai.","meaning":"Karena semester baru juga mulai, saya ingin ganti buku catatan dan pena."},
      {"jp":"時間もあることだし、在留手続きに必要な書類を今のうちに整理しておこう。","kana":"じかんもあることだし、ざいりゅうてつづきにひつようなしょるいをいまのうちにせいりしておこう。","romaji":"jikan moarukotodashi, zairyuu tetsuzuki ni hitsuyou na shorui wo ima nouchini seiri shiteokou.","meaning":"Karena waktunya juga ada, mari rapikan dokumen yang dibutuhkan untuk urusan izin tinggal sekarang."},
      {"jp":"引っ越したことだし、近所の避難場所も確認しておいたほうがいいね。","kana":"ひっこしたことだし、きんじょのひなんばしょもかくにんしておいたほうがいいね。","romaji":"hikkoshi takotodashi, kinjo no hinanbasho mo kakuninshi teoitahougaiine.","meaning":"Karena baru pindah juga, sebaiknya kita cek juga lokasi tempat evakuasi di sekitar sini."}
    ]}
  ]},

  {id:"GR-N2-20",level:"N2",title:"〜てこそ",summary:"Menyatakan bahwa sesuatu baru bermakna jika syarat itu terpenuhi, artinya justru setelah, barulah.",groups:[
    {name:"〜てこそ",description:"Dipakai untuk menekankan inti atau nilai sebenarnya dari sesuatu.",sentences:[
      {"jp":"毎日使ってこそ、日本語の表現は自然に身についていく。","kana":"まいにちつかってこそ、にほんごのひょうげんはしぜんにみについていく。","romaji":"mainichi tsukatte koso, nihongo no hyougen ha shizen ni mini tsuiteiku.","meaning":"Justru dengan dipakai setiap hari, ungkapan bahasa Jepang baru menempel secara alami."},
      {"jp":"地域の行事は参加してこそ、その町の雰囲気が分かる。","kana":"ちいきのぎょうじはさんかしてこそ、そのまちのふんいきがわかる。","romaji":"chiiki no gyouji ha sanka shitekoso, sono machi no fun'iki ga waka ru.","meaning":"Justru dengan ikut acara lingkungan, kita baru mengerti suasana kota itu."},
      {"jp":"防災知識は実際に訓練してこそ役に立つ。","kana":"ぼうさいちしきはじっさいにくんれんしてこそやくにたつ。","romaji":"bousai chishiki ha jissaini kunren shitekoso yakunitatsu.","meaning":"Pengetahuan kebencanaan justru berguna setelah benar-benar dilatih."},
      {"jp":"感謝の気持ちは言葉にしてこそ相手に伝わる。","kana":"かんしゃのきもちはことばにしてこそあいてにつたわる。","romaji":"kansha no kimochi ha kotoba nishitekoso aite ni tsutawa ru.","meaning":"Perasaan terima kasih justru tersampaikan setelah diucapkan dengan kata-kata."},
      {"jp":"学んだ敬語は職場で使ってこそ意味があると思う。","kana":"まなんだけいごはしょくばでつかってこそいみがあるとおもう。","romaji":"manan da keigo ha shokuba de tsukatte koso imi gaaruto omou.","meaning":"Menurut saya keigo yang dipelajari justru punya arti kalau dipakai di tempat kerja."}
    ]}
  ]},

  {id:"GR-N2-21",level:"N2",title:"あまりの〜に",summary:"Menyatakan sesuatu terjadi karena keadaan atau perasaan yang terlalu kuat, artinya karena begitu.",groups:[
    {name:"あまりの〜に",description:"Bentuk ini memakai kata benda atau kata sifat yang dinominalkan.",sentences:[
      {"jp":"あまりの暑さに、駅まで歩くのをあきらめてバスに乗った。","kana":"あまりのあつさに、えきまであるくのをあきらめてばすにじょうった。","romaji":"amarino atsusa ni, eki made aruku nowoakiramete basu ni joutsu ta.","meaning":"Karena panasnya luar biasa, saya menyerah berjalan sampai stasiun dan memilih naik bus."},
      {"jp":"あまりの混雑に、コンビニに入るだけでも時間がかかった。","kana":"あまりのこんざつに、こんびににいるだけでもじかんがかかった。","romaji":"amarino konzatsu ni, konbini ni iru dakedemo jikan gakakatta.","meaning":"Karena terlalu padat, untuk masuk ke konbini saja butuh waktu."},
      {"jp":"あまりの緊張に、名前を書こうとしてペンを落としてしまった。","kana":"あまりのきんちょうに、なまえをかこうとしてぺんをおとしてしまった。","romaji":"amarino kinchou ni, namae wo kako utoshite pen wo oto shiteshimatta.","meaning":"Karena terlalu tegang, saat hendak menulis nama saya malah menjatuhkan pena."},
      {"jp":"あまりの静けさに、図書館の中でスマホを触るのもためらわれた。","kana":"あまりのしずけさに、としょかんのなかですまほをふるのもためらわれた。","romaji":"amarino shizukesa ni, toshokan no naka de sumaho wo furu nomotamerawareta.","meaning":"Karena suasananya terlalu sunyi, saya sampai segan menyentuh ponsel di dalam perpustakaan."},
      {"jp":"あまりの親切に、初めて来た町なのに不安が少し消えた。","kana":"あまりのしんせつに、はじめてきたまちなのにふあんがすこしきえた。","romaji":"amarino shinsetsu ni, hajimete kita machi nanoni fuan ga sukoshi kie ta.","meaning":"Karena orang-orangnya sangat ramah, kecemasan saya sebagai pendatang baru sedikit berkurang."}
    ]}
  ]},

  {id:"GR-N2-22",level:"N2",title:"〜ものなら / 〜もんなら",summary:"Menyatakan andaikata sesuatu mungkin dilakukan, biasanya dengan nuansa sulit atau penyesalan, artinya kalau saja bisa.",groups:[
    {name:"〜ものなら / 〜もんなら",description:"もんなら adalah bentuk lisan yang lebih santai.",sentences:[
      {"jp":"取れるものなら、来月の連休に有給を取りたい。","kana":"とれるものなら、らいげつのれんきゅうにゆうきゅうをとりたい。","romaji":"tore rumononara, raigetsu no renkyuu ni yuukyuu wo tori tai.","meaning":"Kalau saja memungkinkan, saya ingin mengambil cuti berbayar pada libur panjang bulan depan."},
      {"jp":"戻れるものなら、申請書を出す前の自分に確認不足だと言いたい。","kana":"もどれるものなら、しんせいしょをだすまえのじぶんにかくにんぶそくだといいたい。","romaji":"modore rumononara, shinseisho wo dasu mae no jibun ni kakuninbusoku dato ii tai.","meaning":"Kalau saja bisa kembali ke masa sebelum menyerahkan formulir, saya ingin bilang pada diri sendiri bahwa pengecekannya kurang."},
      {"jp":"買えるもんなら、駅前のあの広いマンションに住んでみたいよ。","kana":"かえるもんなら、えきまえのあのひろいまんしょんにすんでみたいよ。","romaji":"kae rumonnara, ekimae noano hiroi manshon ni sun demitaiyo.","meaning":"Kalau saja sanggup beli, saya ingin mencoba tinggal di apartemen luas dekat stasiun itu."},
      {"jp":"休めるものなら、今日は一日中家で寝ていたい。","kana":"やすめるものなら、こんにちはいちにちじゅういえでねていたい。","romaji":"yasume rumononara, konnichiha ichinichijuu ie de nete itai.","meaning":"Kalau saja bisa libur, hari ini saya ingin tidur di rumah seharian."},
      {"jp":"やり直せるものなら、面接の最後の一言をもう少し丁寧に言い換えたい。","kana":"やりなおせるものなら、めんせつのさいごのひとことをもうすこしていねいにいいかえたい。","romaji":"yari naose rumononara, mensetsu no saigo no hitokoto womou sukoshi teinei ni iikae tai.","meaning":"Kalau saja bisa diulang, saya ingin menyampaikan kalimat terakhir saat wawancara dengan lebih sopan."}
    ]}
  ]},

  {id:"GR-N2-23",level:"N2",title:"〜ないことには〜ない",summary:"Menyatakan sesuatu tidak akan terjadi sebelum syaratnya terpenuhi, artinya kalau tidak, tidak akan.",groups:[
    {name:"〜ないことには〜ない",description:"Sering dipakai untuk syarat penting yang mendahului langkah berikutnya.",sentences:[
      {"jp":"区役所で住民票を取らないことには、銀行口座の手続きが進められない。","kana":"くやくしょでじゅうみんひょうをとらないことには、ぎんこうこうざのてつづきがすすめられない。","romaji":"kuyakusho de juuminhyou wo tora naikotoniha, ginkoukouza no tetsuzuki ga susume rarenai.","meaning":"Kalau belum ambil surat domisili di kantor wilayah, proses rekening bank tidak bisa dilanjutkan."},
      {"jp":"実際に会って話さないことには、誤解が解けるかどうか分からない。","kana":"じっさいにあってはなさないことには、ごかいがとけるかどうかわからない。","romaji":"jissaini atsu te hanasa naikotoniha, gokai ga toke rukadouka waka ranai.","meaning":"Kalau belum bicara langsung, tidak tahu apakah salah pahamnya bisa selesai atau tidak."},
      {"jp":"予定が決まらないことには、ホテルも予約しにくい。","kana":"よていがきまらないことには、ほてるもよやくしにくい。","romaji":"yotei ga kima ranaikotoniha, hoteru mo yoyaku shinikui.","meaning":"Kalau jadwalnya belum pasti, hotel juga susah dipesan."},
      {"jp":"検査を受けないことには、原因ははっきりしないでしょう。","kana":"けんさをうけないことには、げんいんははっきりしないでしょう。","romaji":"kensa wo uke naikotoniha, gen'in hahakkirishinaideshou.","meaning":"Kalau belum menjalani pemeriksaan, penyebabnya mungkin tidak akan jelas."},
      {"jp":"本人に確認しないことには、この書類を提出していいか判断できません。","kana":"ほんにんにかくにんしないことには、このしょるいをていしゅつしていいかはんだんできません。","romaji":"honnin ni kakuninshi naikotoniha, kono shorui wo teishutsu shiteiika handan dekimasen.","meaning":"Kalau belum dikonfirmasi ke orangnya langsung, saya tidak bisa memutuskan apakah dokumen ini boleh diserahkan."}
    ]}
  ]},

  {id:"GR-N2-24",level:"N2",title:"〜さえ〜ば",summary:"Menyatakan cukup dengan satu syarat utama, hasil yang diinginkan akan tercapai.",groups:[
    {name:"〜さえ〜ば",description:"Nuansanya menekankan bahwa syarat itu adalah yang paling penting.",sentences:[
      {"jp":"駅まで近ければ、部屋は少し狭くてもかまわない。","kana":"えきまでちかければ、へやはすこしせまくてもかまわない。","romaji":"eki made chikake reba, heya ha sukoshi semaku temokamawanai.","meaning":"Asal dekat ke stasiun, kamar agak sempit pun tidak masalah."},
      {"jp":"身分証明書さえあれば、その日のうちにカードを受け取れます。","kana":"みぶんしょうめいしょさえあれば、そのにちのうちにかーどをうけとれます。","romaji":"mibunshoumeisho saeareba, sono nichi nouchini kaado wo uketore masu.","meaning":"Asal ada kartu identitas, kartunya bisa diterima hari itu juga."},
      {"jp":"静かに勉強できる場所さえあれば、私はどこでも集中できる。","kana":"しずかにべんきょうできるばしょさえあれば、わたしはどこでもしゅうちゅうできる。","romaji":"shizuka ni benkyou dekiru basho saeareba, watashi hadokodemo shuuchuu dekiru.","meaning":"Asal ada tempat tenang untuk belajar, saya bisa fokus di mana saja."},
      {"jp":"通じる日本語さえ話せれば、最初は完璧じゃなくても何とかなる。","kana":"つうじるにほんごさえはなせれば、さいしょはかんぺきじゃなくてもなんとかなる。","romaji":"tsuuji ru nihongo sae hanase reba, saisho ha kanpeki janakutemo nantoka naru.","meaning":"Asal bisa bicara bahasa Jepang yang cukup dipahami, awalnya tidak sempurna pun masih bisa jalan."},
      {"jp":"時間さえ合えば、地域のイベントにももっと参加したい。","kana":"じかんさえあえば、ちいきのいべんとにももっとさんかしたい。","romaji":"jikan sae ae ba, chiiki no ibento nimomotto sanka shitai.","meaning":"Asal waktunya cocok, saya juga ingin lebih sering ikut acara lingkungan."}
    ]}
  ]},

  {id:"GR-N2-25",level:"N2",title:"〜ようものなら",summary:"Menyatakan kalau hal buruk itu sampai terjadi, akibatnya akan serius.",groups:[
    {name:"〜ようものなら",description:"Nuansanya peringatan atau konsekuensi berat.",sentences:[
      {"jp":"朝の山手線でスマホを落とそうものなら、見つけるのが本当に大変だ。","kana":"あさのやまのてせんですまほをおとそうものなら、みつけるのがほんとうにたいへんだ。","romaji":"asa no yamanotesen de sumaho wo oto soumononara, mitsu kerunoga hontou ni taihen da.","meaning":"Kalau sampai menjatuhkan ponsel di Yamanote Line saat jam sibuk pagi, mencarinya benar-benar sulit."},
      {"jp":"提出期限を一日でも過ぎようものなら、申請は受け付けてもらえない。","kana":"ていしゅつきげんをついたちでもすぎようものなら、しんせいはうけつけてもらえない。","romaji":"teishutsukigen wo tsuitachi demo sugi youmononara, shinsei ha uketsuke temoraenai.","meaning":"Kalau sampai lewat satu hari saja dari tenggat, pengajuannya tidak akan diterima."},
      {"jp":"アラームを止めて二度寝しようものなら、その日はほぼ遅刻だ。","kana":"あらーむをとめてにどねしようものなら、そのにちはほぼちこくだ。","romaji":"araamu wo tome te nido neshi youmononara, sono nichi hahobo chikoku da.","meaning":"Kalau habis mematikan alarm lalu tidur lagi, hampir pasti hari itu akan terlambat."},
      {"jp":"会議中にそんな言い方をしようものなら、場の空気が一気に固まる。","kana":"かいぎちゅうにそんないいかたをしようものなら、ばのくうきがいっきにかたまる。","romaji":"kaigichuu nisonna iikata woshiyoumononara, ba no kuuki ga ikki ni katama ru.","meaning":"Kalau sampai bicara seperti itu saat rapat, suasananya akan langsung membeku."},
      {"jp":"真夏に水を持たずに外出しようものなら、すぐ体調を崩しかねない。","kana":"まなつにみずをもたずにがいしゅつしようものなら、すぐたいちょうをくずしかねない。","romaji":"manatsu ni mizu wo mota zuni gaishutsu shiyoumononara, sugu taichou wo kuzushi kanenai.","meaning":"Kalau keluar di tengah musim panas tanpa bawa air, kondisi tubuh bisa cepat drop."}
    ]}
  ]},

  {id:"GR-N2-26",level:"N2",title:"〜となると",summary:"Menyatakan saat topik bergeser ke hal tertentu, situasinya menjadi berbeda atau perlu dipikirkan lagi.",groups:[
    {name:"〜となると",description:"Sering dipakai saat masuk ke pembahasan yang lebih serius atau spesifik.",sentences:[
      {"jp":"観光なら気楽だけど、日本で就職するとなると話は別だ。","kana":"かんこうならきらくだけど、にっぽんでしゅうしょくするとなるとはなしはべつだ。","romaji":"kankou nara kiraku dakedo, nippon de shuushoku surutonaruto hanashi ha betsu da.","meaning":"Kalau hanya untuk wisata sih santai, tapi kalau sampai bekerja di Jepang ceritanya beda."},
      {"jp":"日帰りなら行けるが、泊まりとなると荷物も増える。","kana":"ひがえりならいけるが、とまりとなるとにもつもふえる。","romaji":"higaeri nara ike ruga, tomari tonaruto nimotsu mo fue ru.","meaning":"Kalau hanya pergi pulang-pergi masih mudah, tapi kalau menginap barang bawaannya jadi lebih banyak."},
      {"jp":"学生同士ならいいけど、先生も来るとなると服装に少し気を使う。","kana":"がくせいどうしならいいけど、せんせいもくるとなるとふくそうにすこしきをつかう。","romaji":"gakusei doushi naraiikedo, sensei mo kuru tonaruto fukusou ni sukoshi kiwo tsukau.","meaning":"Kalau hanya sesama mahasiswa sih tidak apa-apa, tapi kalau dosen juga datang saya jadi lebih memperhatikan pakaian."},
      {"jp":"一人で食べるなら平気でも、お客さんに出すとなると味が気になる。","kana":"ひとりでたべるならへいきでも、おきゃくさんにだすとなるとあじがきになる。","romaji":"hitori de tabe runara heiki demo, o kyaku sanni dasu tonaruto aji ga kini naru.","meaning":"Kalau dimakan sendiri saya tidak masalah, tapi kalau disajikan ke tamu saya jadi memikirkan rasanya."},
      {"jp":"更新手続きとなると、必要書類をもう一度全部確認したくなる。","kana":"こうしんてつづきとなると、ひつようしょるいをもういちどぜんぶかくにんしたくなる。","romaji":"koushin tetsuzuki tonaruto, hitsuyoushorui womou ichido zenbu kakuninshi takunaru.","meaning":"Kalau sudah bicara soal perpanjangan dokumen, saya jadi ingin memeriksa lagi semua berkas yang diperlukan."}
    ]}
  ]},

  {id:"GR-N2-27",level:"N2",title:"〜にしても〜にしても / 〜にしろ〜にしろ / 〜にせよ〜にせよ",summary:"Menyatakan dua kemungkinan mana pun yang dipilih, pembicara ingin mengatakan hal yang sama sesudahnya.",groups:[
    {name:"〜にしても〜にしても / 〜にしろ〜にしろ / 〜にせよ〜にせよ",description:"Dipakai untuk menyebut dua opsi sekaligus lalu memberi komentar umum.",sentences:[
      {"jp":"電車にしてもバスにしても、今朝は遅れが出ているみたいだ。","kana":"でんしゃにしてもばすにしても、けさはおくれがでているみたいだ。","romaji":"densha nishitemo basu nishitemo, kesa ha okure ga dete irumitaida.","meaning":"Entah kereta atau bus, sepertinya pagi ini sama-sama mengalami keterlambatan."},
      {"jp":"自炊にしろ外食にしろ、最近は食費が前より上がった。","kana":"じすいにしろがいしょくにしろ、さいきんはしょくひがまえよりあがった。","romaji":"jisui nishiro gaishoku nishiro, saikin ha shokuhi ga mae yori aga tta.","meaning":"Entah masak sendiri atau makan di luar, belakangan biaya makan jadi lebih tinggi dari sebelumnya."},
      {"jp":"大学にせよ専門学校にせよ、見学してから決めたい。","kana":"だいがくにせよせんもんがっこうにせよ、けんがくしてからきめたい。","romaji":"daigaku niseyo senmongakkou niseyo, kengaku shitekara kime tai.","meaning":"Entah universitas atau sekolah kejuruan, saya ingin memutuskan setelah melihat langsung."},
      {"jp":"日本人にしても外国人にしても、この手続きは最初は分かりにくいと思う。","kana":"にほんじんにしてもがいこくじんにしても、このてつづきはさいしょはわかりにくいとおもう。","romaji":"nihonjin nishitemo gaikokujin nishitemo, kono tetsuzuki ha saisho ha waka rinikuito omou.","meaning":"Entah orang Jepang atau orang asing, saya rasa prosedur ini memang sulit dipahami pada awalnya."},
      {"jp":"オンラインにしろ対面にしろ、事前準備が足りないと不安になる。","kana":"おんらいんにしろたいめんにしろ、じぜんじゅんびがたりないとふあんになる。","romaji":"onrain nishiro taimen nishiro, jizenjunbi ga tari naito fuan ninaru.","meaning":"Entah online atau tatap muka, kalau persiapannya kurang saya jadi gelisah."}
    ]}
  ]},

  {id:"GR-N2-28",level:"N2",title:"〜に基づいて / をもとに(して)",summary:"Menyatakan sesuatu dibuat atau diputuskan berdasarkan data, aturan, atau bahan tertentu.",groups:[
    {name:"〜に基づいて / をもとに(して)",description:"Dipakai di laporan, presentasi, berita, dan penjelasan resmi.",sentences:[
      {"jp":"アンケート結果に基づいて、日本語クラスの時間が見直された。","kana":"あんけーとけっかにもとづいて、にほんごくらすのじかんがみなおされた。","romaji":"ankeeto kekka ni motozu ite, nihongo kurasu no jikan ga minaosa reta.","meaning":"Berdasarkan hasil angket, jadwal kelas bahasa Jepang ditinjau ulang."},
      {"jp":"住民の意見をもとにして、公園の使い方が改善された。","kana":"じゅうみんのいけんをもとにして、こうえんのつかいかたがかいぜんされた。","romaji":"juumin no iken womotonishite, kouen no tsukaikata ga kaizen sareta.","meaning":"Berdasarkan pendapat warga, cara penggunaan taman diperbaiki."},
      {"jp":"この資料は去年の統計に基づいて作成されています。","kana":"このしりょうはきょねんのとうけいにもとづいてさくせいされています。","romaji":"kono shiryou ha kyonen no toukei ni motozu ite sakusei sareteimasu.","meaning":"Materi ini dibuat berdasarkan statistik tahun lalu."},
      {"jp":"実際の体験談をもとにした記事だから、とても読みやすかった。","kana":"じっさいのたいけんだんをもとにしたきじだから、とてもよみやすかった。","romaji":"jissai no taikendan womotonishita kiji dakara, totemo yomi yasukatta.","meaning":"Karena artikelnya dibuat berdasarkan pengalaman nyata, sangat mudah dibaca."},
      {"jp":"医師の説明に基づいて、しばらく食事を変えることにした。","kana":"いしのせつめいにもとづいて、しばらくしょくじをかえることにした。","romaji":"ishi no setsumei ni motozu ite, shibaraku shokuji wo kae rukotonishita.","meaning":"Berdasarkan penjelasan dokter, saya memutuskan mengubah pola makan untuk sementara."}
    ]}
  ]},

  {id:"GR-N2-29",level:"N2",title:"〜のもと(で)",summary:"Menyatakan keadaan, pengaruh, atau lingkungan tempat sesuatu berlangsung, artinya di bawah, dalam.",groups:[
    {name:"〜のもと(で)",description:"Bisa dipakai untuk pengawasan, kebijakan, aturan, atau kondisi tertentu.",sentences:[
      {"jp":"専門家の指導のもとで、地域の防災訓練が行われた。","kana":"せんもんかのしどうのもとで、ちいきのぼうさいくんれんがおこなわれた。","romaji":"senmonka no shidou nomotode, chiiki no bousaikunren ga okonawa reta.","meaning":"Latihan kesiapsiagaan bencana di lingkungan ini dilakukan di bawah bimbingan pakar."},
      {"jp":"新しい制度のもと、窓口の受付時間が少し変わった。","kana":"あたらしいせいどのもと、まどぐちのうけつけじかんがすこしかわった。","romaji":"atarashii seido nomoto, madoguchi no uketsukejikan ga sukoshi kawa tta.","meaning":"Di bawah sistem baru, jam pelayanan loket sedikit berubah."},
      {"jp":"静かな環境のもとで勉強すると、やはり集中しやすい。","kana":"しずかなかんきょうのもとでべんきょうすると、やはりしゅうちゅうしやすい。","romaji":"shizuka na kankyou nomotode benkyou suruto, yahari shuuchuu shiyasui.","meaning":"Kalau belajar dalam lingkungan yang tenang, memang lebih mudah fokus."},
      {"jp":"店長の管理のもとで、アルバイトのシフトが細かく調整されている。","kana":"てんちょうのかんりのもとで、あるばいとのしふとがこまかくちょうせいされている。","romaji":"tenchou no kanri nomotode, arubaito no shifuto ga komakaku chousei sareteiru.","meaning":"Di bawah pengelolaan manajer toko, jadwal kerja part-time diatur dengan rinci."},
      {"jp":"十分な準備のもとで始めたイベントは、当日も落ち着いて進んだ。","kana":"じゅうぶんなじゅんびのもとではじめたいべんとは、とうじつもおちついてすすんだ。","romaji":"juubun na junbi nomotode hajime ta ibento ha, toujitsu mo ochitsui te susun da.","meaning":"Acara yang dimulai dengan persiapan cukup berjalan tenang juga pada hari-H."}
    ]}
  ]},

  {id:"GR-N2-30",level:"N2",title:"〜に沿って",summary:"Menyatakan mengikuti aturan, rencana, garis, atau arah tertentu.",groups:[
    {name:"〜に沿って",description:"Sering dipakai untuk manual, jalur, panduan, dan kebijakan.",sentences:[
      {"jp":"係員の案内に沿って、避難口まで移動してください。","kana":"かかりいんのあんないにそって、ひなんくちまでいどうしてください。","romaji":"kakariin no annai ni sotte, hinan kuchi made idou shitekudasai.","meaning":"Silakan bergerak ke pintu evakuasi mengikuti arahan petugas."},
      {"jp":"マニュアルに沿って作業すれば、初めてでも大きな失敗はしにくい。","kana":"まにゅあるにそってさぎょうすれば、はじめてでもおおきなしっぱいはしにくい。","romaji":"manyuaru ni sotte sagyou sureba, hajimete demo ooki na shippai hashinikui.","meaning":"Kalau bekerja mengikuti manual, bahkan pemula pun lebih kecil kemungkinan melakukan kesalahan besar."},
      {"jp":"川に沿って歩いていくと、古い商店街に出ます。","kana":"かわにそってあるいていくと、ふるいしょうてんがいにでます。","romaji":"kawa ni sotte arui teikuto, furui shoutengai ni dema su.","meaning":"Kalau berjalan menyusuri sungai, nanti akan sampai di area pertokoan lama."},
      {"jp":"計画に沿って進めていたのに、配送の遅れで予定がずれた。","kana":"けいかくにそってすすめていたのに、はいそうのおくれでよていがずれた。","romaji":"keikaku ni sotte susume teitanoni, haisou no okure de yotei gazureta.","meaning":"Padahal semuanya berjalan sesuai rencana, tapi jadwal bergeser karena keterlambatan pengiriman."},
      {"jp":"市の方針に沿った形で、多言語の案内が増えてきた。","kana":"しのほうしんにそったかたちで、たげんごのあんないがふえてきた。","romaji":"shi no houshin ni sotsu ta katachi de, tagengo no annai ga fue tekita.","meaning":"Sesuai kebijakan kota, jumlah petunjuk multibahasa mulai bertambah."}
    ]}
  ]},

  {id:"GR-N2-31",level:"N2",title:"〜どころか",summary:"Menyatakan kenyataan jauh melampaui atau justru berlawanan dengan dugaan, artinya jangankan, malah.",groups:[
    {name:"〜どころか",description:"Dipakai saat hasilnya lebih ekstrem dari perkiraan.",sentences:[
      {"jp":"休むどころか、今週は残業が続いている。","kana":"やすむどころか、こんしゅうはざんぎょうがつづいている。","romaji":"yasumu dokoroka, konshuu ha zangyou ga tsuzui teiru.","meaning":"Jangankan bisa istirahat, minggu ini saya malah terus lembur."},
      {"jp":"一駅歩くどころか、今日は最寄りのコンビニに行くだけで汗だくになった。","kana":"ひとえきあるくどころか、こんにちはもよりのこんびににいくだけであせだくになった。","romaji":"hitoeki aruku dokoroka, konnichiha moyori no konbini ni iku dakede ase dakuninatta.","meaning":"Jangankan jalan satu stasiun, hari ini jalan ke konbini terdekat saja sudah mandi keringat."},
      {"jp":"日本語の勉強は楽になるどころか、N2に入ってからますます奥が深い。","kana":"にほんごのべんきょうはらくになるどころか、N2にいっってからますますおくがふかい。","romaji":"nihongo no benkyou ha raku ninarudokoroka, N2 ni itsutsu tekaramasumasu oku ga fukai.","meaning":"Belajar bahasa Jepang bukannya jadi lebih mudah, justru sejak masuk N2 terasa makin dalam."},
      {"jp":"静かになるどころか、祭りの時間が近づくほど人が増えてきた。","kana":"しずかになるどころか、まつりのじかんがちかづくほどにんがふえてきた。","romaji":"shizuka ninarudokoroka, matsuri no jikan ga chikazu kuhodo nin ga fue tekita.","meaning":"Bukannya makin sepi, semakin dekat waktu festival orang-orang justru makin banyak."},
      {"jp":"値下げされるどころか、人気エリアの家賃はまた上がっていた。","kana":"ねさげされるどころか、にんきえりあのやちんはまたあがっていた。","romaji":"nesage sarerudokoroka, ninki eria no yachin hamata aga tteita.","meaning":"Bukannya turun harga, sewa di area populer malah naik lagi."}
    ]}
  ]},

  {id:"GR-N2-32",level:"N2",title:"〜一方で",summary:"Menyatakan dua sisi yang berjalan bersamaan, satu hal benar tapi di sisi lain ada hal lain juga.",groups:[
    {name:"〜一方で",description:"Sering dipakai untuk menjelaskan keseimbangan atau kontras yang netral.",sentences:[
      {"jp":"駅前は便利な一方で、夜でも車の音が気になる。","kana":"えきまえはべんりないっぽうで、よるでもくるまのおとがきになる。","romaji":"ekimae ha benri na ippou de, yoru demo kuruma no oto ga kini naru.","meaning":"Di satu sisi area depan stasiun itu praktis, tapi di sisi lain suara mobil terasa bahkan malam hari."},
      {"jp":"オンライン授業は助かる一方で、集中を保つのが難しい日もある。","kana":"おんらいんじゅぎょうはたすかるいっぽうで、しゅうちゅうをたもつのがむずかしいにちもある。","romaji":"onrain jugyou ha tasuka ru ippou de, shuuchuu wo tamotsu noga muzukashii nichi moaru.","meaning":"Di satu sisi kelas online membantu, tapi di sisi lain ada hari-hari ketika sulit menjaga fokus."},
      {"jp":"外国人向けの案内が増える一方で、細かい手続きはまだ分かりにくい。","kana":"がいこくじんむけのあんないがふえるいっぽうで、こまかいてつづきはまだわかりにくい。","romaji":"gaikokujin muke no annai ga fue ru ippou de, komakai tetsuzuki hamada waka rinikui.","meaning":"Di satu sisi petunjuk untuk orang asing bertambah, tapi di sisi lain prosedur rinci masih sulit dipahami."},
      {"jp":"この仕事はやりがいが大きい一方で、責任もかなり重い。","kana":"このしごとはやりがいがおおきいいっぽうで、せきにんもかなりおもい。","romaji":"kono shigoto hayarigaiga ookii ippou de, sekinin mokanari omoi.","meaning":"Di satu sisi pekerjaan ini sangat memuaskan, tapi di sisi lain tanggung jawabnya juga cukup berat."},
      {"jp":"中心部の家賃は高い一方で、通勤時間を短くできる利点がある。","kana":"ちゅうしんぶのやちんはたかいいっぽうで、つうきんじかんをみじかくできるりてんがある。","romaji":"chuushinbu no yachin ha takai ippou de, tsuukinjikan wo mijikaku dekiru riten gaaru.","meaning":"Di satu sisi sewa di pusat kota mahal, tapi di sisi lain ada keuntungan waktu commute jadi lebih singkat."}
    ]}
  ]},

  {id:"GR-N2-33",level:"N2",title:"〜に反して",summary:"Menyatakan hasil yang berlawanan dengan harapan, aturan, atau dugaan.",groups:[
    {name:"〜に反して",description:"Banyak dipakai dalam tulisan atau penjelasan yang agak formal.",sentences:[
      {"jp":"天気予報に反して、午後は意外なくらい晴れた。","kana":"てんきよほうにはんして、ごごはいがいなくらいはれた。","romaji":"tenkiyohou ni hanshi te, gogo ha igai nakurai hare ta.","meaning":"Berlawanan dengan ramalan cuaca, sore harinya justru cerah sekali."},
      {"jp":"期待に反して、説明会は思ったより短時間で終わった。","kana":"きたいにはんして、せつめいかいはおもったよりたんじかんでおわった。","romaji":"kitai ni hanshi te, setsumeikai ha omotta yori tanjikan de owa tta.","meaning":"Berlawanan dengan dugaan, sesi penjelasan selesai lebih cepat dari perkiraan."},
      {"jp":"親の心配に反して、娘は新しい学校にすぐ慣れた。","kana":"おやのしんぱいにはんして、むすめはあたらしいがっこうにすぐなれた。","romaji":"oya no shinpai ni hanshi te, musume ha atarashii gakkou nisugu nare ta.","meaning":"Berlawanan dengan kekhawatiran orang tuanya, anak itu cepat menyesuaikan diri di sekolah baru."},
      {"jp":"見た目の印象に反して、その先生はかなり話しやすかった。","kana":"みためのいんしょうにはんして、そのせんせいはかなりはなしやすかった。","romaji":"mitame no inshou ni hanshi te, sono sensei hakanari hanashi yasukatta.","meaning":"Berlawanan dengan kesan penampilannya, guru itu ternyata sangat mudah diajak bicara."},
      {"jp":"ルールに反して、ゴミ出しの日以外に袋を置く人がいて困っている。","kana":"るーるにはんして、ごみだしのにちいがいにふくろをおくにんがいてこまっている。","romaji":"ruuru ni hanshi te, gomi dashi no nichi igai ni fukuro wo oku nin gaite komatsu teiru.","meaning":"Berlawanan dengan aturan, ada orang yang menaruh sampah di luar jadwal sehingga merepotkan."}
    ]}
  ]},

  {id:"GR-N2-34",level:"N2",title:"〜というより",summary:"Menyatakan bahwa ungkapan pertama kurang tepat dan ungkapan kedua lebih cocok.",groups:[
    {name:"〜というより",description:"Sering dipakai untuk memperbaiki pilihan kata secara halus.",sentences:[
      {"jp":"この町は静かというより、夜になると本当に人通りが少ない。","kana":"このまちはしずかというより、よるになるとほんとうにひとどおりがすくない。","romaji":"kono machi ha shizuka toiuyori, yoru ninaruto hontou ni hitodoori ga sukunai.","meaning":"Kota ini bukan sekadar tenang, tapi malam hari benar-benar sepi orang."},
      {"jp":"彼は厳しいというより、仕事の基準がはっきりしているんだと思う。","kana":"かれはいかめしいというより、しごとのきじゅんがはっきりしているんだとおもう。","romaji":"kareha ikameshii toiuyori, shigoto no kijun gahakkirishiteirundato omou.","meaning":"Dia bukan keras, melainkan menurut saya standar kerjanya memang jelas."},
      {"jp":"今日は寒いというより、風が痛いくらい強い。","kana":"こんにちはさむいというより、かぜがいたいくらいつよい。","romaji":"konnichiha samui toiuyori, kaze ga itai kurai tsuyoi.","meaning":"Hari ini bukan cuma dingin, anginnya sampai terasa menusuk."},
      {"jp":"趣味というより、もう生活の一部みたいな感じです。","kana":"しゅみというより、もうせいかつのいちぶみたいなかんじです。","romaji":"shumi toiuyori, mou seikatsu no ichibu mitaina kanji desu.","meaning":"Ini bukan sekadar hobi, rasanya sudah seperti bagian dari hidup sehari-hari."},
      {"jp":"その店は安いというより、量のわりにちょうどいい価格だ。","kana":"そのみせはやすいというより、りょうのわりにちょうどいいかかくだ。","romaji":"sono mise ha yasui toiuyori, ryou nowarinichoudoii kakaku da.","meaning":"Toko itu bukan benar-benar murah, tapi harganya pas jika melihat porsinya."}
    ]}
  ]},

  {id:"GR-N2-35",level:"N2",title:"〜だけまし",summary:"Menyatakan walaupun tidak ideal, setidaknya masih lebih baik daripada kemungkinan yang lebih buruk.",groups:[
    {name:"〜だけまし",description:"Nuansanya setidaknya mendingan.",sentences:[
      {"jp":"駅から遠いけど、家賃が手ごろなだけましだ。","kana":"えきからとおいけど、やちんがてごろなだけましだ。","romaji":"eki kara tooi kedo, yachin ga tegoro nadakemashida.","meaning":"Walaupun jauh dari stasiun, setidaknya sewanya masih terjangkau."},
      {"jp":"全席禁煙じゃないけど、分煙されているだけましだと思う。","kana":"ぜんせききんえんじゃないけど、ぶんえんされているだけましだとおもう。","romaji":"zensekikin'en janaikedo, bun'en sareteirudakemashidato omou.","meaning":"Walaupun belum seluruhnya bebas rokok, setidaknya area merokoknya sudah dipisah."},
      {"jp":"説明は少し分かりにくかったが、英語の資料があるだけましだった。","kana":"せつめいはすこしわかりにくかったが、えいごのしりょうがあるだけましだった。","romaji":"setsumei ha sukoshi waka rinikukattaga, eigo no shiryou gaarudakemashidatta.","meaning":"Penjelasannya memang agak sulit dipahami, tapi setidaknya ada materi berbahasa Inggris."},
      {"jp":"待ち時間は長かったものの、当日中に診てもらえただけましだ。","kana":"まちじかんはながかったものの、とうじつちゅうにみてもらえただけましだ。","romaji":"machijikan ha nagaka ttamonono, toujitsuchuu ni mite moraetadakemashida.","meaning":"Walaupun waktu tunggunya lama, setidaknya saya masih bisa diperiksa pada hari yang sama."},
      {"jp":"残業になったけれど、終電に間に合っただけましだった。","kana":"ざんぎょうになったけれど、しゅうでんにまにあっただけましだった。","romaji":"zangyou ninattakeredo, shuuden ni maniatsu tadakemashidatta.","meaning":"Walaupun jadi lembur, setidaknya saya masih sempat naik kereta terakhir."}
    ]}
  ]},

  {id:"GR-N2-36",level:"N2",title:"〜くらいなら",summary:"Menyatakan jika harus memilih kondisi yang buruk itu, lebih baik memilih pilihan lain.",groups:[
    {name:"〜くらいなら",description:"Sering dipakai untuk preferensi kuat atau penolakan.",sentences:[
      {"jp":"そんなに高い家賃を払うくらいなら、少し遠くても広い部屋に住みたい。","kana":"そんなにたかいやちんをはらうくらいなら、すこしとおくてもひろいへやにすみたい。","romaji":"sonnani takai yachin wo harau kurainara, sukoshi tooku temo hiroi heya ni sumi tai.","meaning":"Kalau harus membayar sewa semahal itu, saya lebih pilih kamar yang agak jauh tapi lebih luas."},
      {"jp":"長い列に並ぶくらいなら、時間をずらしてまた来ます。","kana":"ながいつらにならぶくらいなら、じかんをずらしてまたきます。","romaji":"nagai tsurani narabu kurainara, jikan wozurashitemata kima su.","meaning":"Kalau harus antre sepanjang itu, saya lebih baik datang lagi di waktu lain."},
      {"jp":"よく分からないまま契約するくらいなら、今日は持ち帰って確認したい。","kana":"よくわからないままけいやくするくらいなら、こんにちはもちかえってかくにんしたい。","romaji":"yoku waka ranaimama keiyaku surukurainara, konnichiha mochikaetsu te kakuninshi tai.","meaning":"Kalau harus menandatangani kontrak tanpa paham betul, saya lebih baik bawa pulang dulu untuk dicek."},
      {"jp":"無理して一人で抱えるくらいなら、早めに相談したほうがいい。","kana":"むりしてひとりでかかえるくらいなら、はやめにそうだんしたほうがいい。","romaji":"muri shite hitori de kakae rukurainara, hayame ni soudan shitahougaii.","meaning":"Kalau harus memaksakan diri menanggung sendiri, lebih baik berkonsultasi lebih awal."},
      {"jp":"コンビニで毎日買うくらいなら、週末にまとめて作り置きしたい。","kana":"こんびにでまいにちかうくらいなら、しゅうまつにまとめてつくりおきしたい。","romaji":"konbini de mainichi kau kurainara, shuumatsu nimatomete tsukuri oki shitai.","meaning":"Kalau harus beli di konbini setiap hari, saya lebih pilih masak untuk stok di akhir pekan."}
    ]}
  ]},

  {id:"GR-N2-37",level:"N2",title:"〜ざるをえない",summary:"Menyatakan terpaksa harus melakukan sesuatu karena keadaan, artinya mau tak mau.",groups:[
    {name:"〜ざるをえない",description:"Bentuk formal, asalnya dari bentuk negatif lama ざる.",sentences:[
      {"jp":"電車が止まったので、タクシーを使わざるをえなかった。","kana":"でんしゃがとまったので、たくしーをつかわざるをえなかった。","romaji":"densha ga toma ttanode, takushii wo tsukawa zaruwoenakatta.","meaning":"Karena keretanya berhenti beroperasi, saya terpaksa naik taksi."},
      {"jp":"人手が足りず、店長もレジに入らざるをえない状況だった。","kana":"ひとでがたりず、てんちょうもれじにいらざるをえないじょうきょうだった。","romaji":"hitode ga tari zu, tenchou mo reji ni ira zaruwoenai joukyou datta.","meaning":"Karena kekurangan staf, manajer toko pun terpaksa turun ke kasir."},
      {"jp":"締め切りが近い以上、今日は少し残らざるをえません。","kana":"しめきりがちかいいじょう、こんにちはすこしのこらざるをえません。","romaji":"shimekiri ga chikai ijou, konnichiha sukoshi nokora zaruwoemasen.","meaning":"Karena tenggat sudah dekat, hari ini saya mau tak mau harus tinggal sedikit lebih lama."},
      {"jp":"在留期限が迫っていて、予定を変えざるをえなくなった。","kana":"ざいりゅうきげんがせまっていて、よていをかえざるをえなくなった。","romaji":"zairyuu kigen ga sematsu teite, yotei wo kae zaruwoenakunatta.","meaning":"Karena batas masa tinggal sudah dekat, saya terpaksa mengubah rencana."},
      {"jp":"この値段なら、昼食を簡単に済ませざるをえない日もある。","kana":"このねだんなら、ちゅうしょくをかんたんにすませざるをえないにちもある。","romaji":"kono nedan nara, chuushoku wo kantan ni suma sezaruwoenai nichi moaru.","meaning":"Dengan harga seperti ini, ada hari-hari ketika saya mau tak mau harus makan siang seadanya."}
    ]}
  ]},

  {id:"GR-N2-38",level:"N2",title:"〜て(は)いられない",summary:"Menyatakan tidak bisa terus berada dalam keadaan itu, karena ada alasan emosional atau situasional.",groups:[
    {name:"〜て(は)いられない",description:"Bisa berarti tidak bisa diam saja atau tidak bisa terus melakukan hal itu.",sentences:[
      {"jp":"ニュースを見て、ただ待っていてはいられないと思った。","kana":"にゅーすをみて、ただまっていてはいられないとおもった。","romaji":"nyuusu wo mite, tada matsu teitehairarenaito omotta.","meaning":"Setelah melihat berita, saya merasa tidak bisa hanya diam menunggu."},
      {"jp":"忙しい時期だけど、子どもの発表会には行かずにはいられないし、仕事ばかりしてはいられない。","kana":"いそがしいじきだけど、こどものはっぴょうかいにはいかずにはいられないし、しごとばかりしてはいられない。","romaji":"isogashii jiki dakedo, kodomo no happyoukai niha ika zunihairarenaishi, shigoto bakarishitehairarenai.","meaning":"Walaupun sedang sibuk, saya tidak bisa cuma terus bekerja dan melewatkan pentas anak."},
      {"jp":"後輩が困っているのに、見ているだけではいられなかった。","kana":"こうはいがこまっているのに、みているだけではいられなかった。","romaji":"kouhai ga komatsu teirunoni, mite irudakedehairarenakatta.","meaning":"Melihat junior sedang kesulitan, saya tidak bisa hanya menonton saja."},
      {"jp":"試験前だからといって、毎晩遅くまで起きてはいられない。","kana":"しけんまえだからといって、まいばんおそくまでおきてはいられない。","romaji":"shikenmae dakaratoitte, maiban osoku made oki tehairarenai.","meaning":"Hanya karena menjelang ujian bukan berarti saya bisa terus begadang tiap malam."},
      {"jp":"家賃も上がっているし、いつまでも今の働き方のままではいられない。","kana":"やちんもあがっているし、いつまでもいまのはたらきほうのままではいられない。","romaji":"yachin mo aga tteirushi, itsumademo ima no hataraki hou nomamadehairarenai.","meaning":"Karena sewa juga naik, saya tidak bisa selamanya bertahan dengan cara kerja yang sekarang."}
    ]}
  ]},

  {id:"GR-N2-39",level:"N2",title:"〜ないではいられない",summary:"Menyatakan perasaan yang begitu kuat sehingga tidak bisa menahan diri untuk tidak melakukan sesuatu.",groups:[
    {name:"〜ないではいられない",description:"Sering dipakai untuk tawa, tangis, komentar, atau tindakan spontan.",sentences:[
      {"jp":"あの店の期間限定メニューを見ると、試さないではいられない。","kana":"あのみせのきかんげんていめにゅーをみると、ためさないではいられない。","romaji":"ano mise no kikangentei menyuu wo miru to, tamesa naidehairarenai.","meaning":"Setiap melihat menu edisi terbatas toko itu, saya tidak bisa menahan diri untuk tidak mencobanya."},
      {"jp":"子どもたちのやり取りが面白くて、笑わないではいられなかった。","kana":"こどもたちのやりとりがおもしろくて、わらわないではいられなかった。","romaji":"kodomo tachinoyari tori ga omoshiroku te, warawa naidehairarenakatta.","meaning":"Interaksi anak-anak itu begitu lucu sampai saya tidak bisa menahan tawa."},
      {"jp":"駅で再会した友達の顔を見て、声をかけないではいられなかった。","kana":"えきでさいかいしたともだちのかおをみて、こえをかけないではいられなかった。","romaji":"eki de saikai shita tomodachi no kao wo mite, koe wokakenaidehairarenakatta.","meaning":"Saat melihat wajah teman yang bertemu lagi di stasiun, saya tidak bisa menahan diri untuk tidak menyapanya."},
      {"jp":"そんな言い方をされたら、反論しないではいられないよ。","kana":"そんないいかたをされたら、はんろんしないではいられないよ。","romaji":"sonna iikata wosaretara, hanron shinaidehairarenaiyo.","meaning":"Kalau dibilangi seperti itu, saya tidak mungkin diam tanpa membantah."},
      {"jp":"努力している姿を見ると、つい応援しないではいられなくなる。","kana":"どりょくしているすがたをみると、ついおうえんしないではいられなくなる。","romaji":"doryoku shiteiru sugata wo miru to, tsui ouen shinaidehairarenakunaru.","meaning":"Saat melihat seseorang berusaha keras, saya jadi tidak bisa menahan diri untuk tidak mendukungnya."}
    ]}
  ]},

  {id:"GR-N2-40",level:"N2",title:"〜てならない",summary:"Menyatakan perasaan yang sangat kuat dan terus terasa, artinya sangat sekali.",groups:[
    {name:"〜てならない",description:"Sering dipakai untuk kekhawatiran, penyesalan, rasa malu, atau keinginan kuat.",sentences:[
      {"jp":"初めての一人暮らしで、家族のことが心配でならない。","kana":"はじめてのひとりぐらしで、かぞくのことがしんぱいでならない。","romaji":"hajimete no hitorigurashi de, kazoku nokotoga shinpai denaranai.","meaning":"Karena baru pertama tinggal sendiri, saya sangat terus-menerus mengkhawatirkan keluarga."},
      {"jp":"あの時もっと丁寧に説明できたはずだと思うと、悔しくてならない。","kana":"あのときもっとていねいにせつめいできたはずだとおもうと、くやしくてならない。","romaji":"ano toki motto teinei ni setsumei dekitahazudato omou to, kuyashiku tenaranai.","meaning":"Kalau teringat seharusnya saya bisa menjelaskan lebih baik saat itu, saya merasa sangat menyesal."},
      {"jp":"卒業式が近づくと、この教室が少しさびしく感じられてならない。","kana":"そつぎょうしきがちかづくと、このきょうしつがすこしさびしくかんじられてならない。","romaji":"sotsugyoushiki ga chikazu kuto, kono kyoushitsu ga sukoshi sabishiku kanji raretenaranai.","meaning":"Semakin dekat hari wisuda, ruang kelas ini terasa makin menyedihkan bagi saya."},
      {"jp":"お世話になった先生に、早く良い報告がしたくてならない。","kana":"おせわになったせんせいに、はやくよいほうこくがしたくてならない。","romaji":"o sewa ninatta sensei ni, hayaku yoi houkoku gashitakutenaranai.","meaning":"Saya sangat ingin segera menyampaikan kabar baik kepada guru yang sudah banyak membantu."},
      {"jp":"最近は物価の上がり方が気になってならない。","kana":"さいきんはぶっかのあがりかたがきになってならない。","romaji":"saikin ha bukka no agarikata ga kini nattenaranai.","meaning":"Belakangan kenaikan harga-harga benar-benar membuat saya terus kepikiran."}
    ]}
  ]},

  {id:"GR-N2-41",level:"N2",title:"〜にほかならない",summary:"Menyatakan bahwa sesuatu tidak lain adalah hal itu sendiri, sangat menegaskan inti atau hakikat.",groups:[
    {name:"〜にほかならない",description:"Biasa dipakai dalam tulisan, pidato, atau penjelasan yang tegas.",sentences:[
      {"jp":"今回の成功は、現場スタッフの努力の結果にほかならない。","kana":"こんかいのせいこうは、げんばすたっふのどりょくのけっかにほかならない。","romaji":"konkai no seikou ha, genba sutaffu no doryoku no kekka nihokanaranai.","meaning":"Keberhasilan kali ini tidak lain adalah hasil dari kerja keras staf lapangan."},
      {"jp":"この制度の目的は、住民の不安を減らすことにほかならない。","kana":"このせいどのもくてきは、じゅうみんのふあんをへらすことにほかならない。","romaji":"kono seido no mokuteki ha, juumin no fuan wo hera sukotonihokanaranai.","meaning":"Tujuan sistem ini tidak lain adalah mengurangi kecemasan warga."},
      {"jp":"彼が日本語を上達させた理由は、毎日使い続けたことにほかならない。","kana":"かれがにほんごをじょうたつさせたりゆうは、まいにちつかいつづけたことにほかならない。","romaji":"kare ga nihongo wo joutatsu saseta riyuu ha, mainichi tsukai tsuzuke takotonihokanaranai.","meaning":"Alasan dia bisa meningkatkan bahasa Jepangnya tidak lain adalah karena terus memakainya setiap hari."},
      {"jp":"長い行列ができているのは、この店が信頼されている証拠にほかならない。","kana":"ながいぎょうれつができているのは、このみせがしんらいされているしょうこにほかならない。","romaji":"nagai gyouretsu gadekiteirunoha, kono mise ga shinrai sareteiru shouko nihokanaranai.","meaning":"Antrean panjang itu tidak lain adalah bukti bahwa toko ini dipercaya."},
      {"jp":"地域の交流会に参加する意味は、新しく来た人を孤立させないことにほかならない。","kana":"ちいきのこうりゅうかいにさんかするいみは、あたらしくきたにんをこりつさせないことにほかならない。","romaji":"chiiki no kouryuukai ni sanka suru imi ha, atarashiku kita nin wo koritsu sasenaikotonihokanaranai.","meaning":"Makna ikut acara komunitas tidak lain adalah mencegah pendatang baru merasa terisolasi."}
    ]}
  ]},

  {id:"GR-N2-42",level:"N2",title:"〜というものだ",summary:"Menyatakan penilaian umum yang dianggap wajar atau memang begitulah seharusnya.",groups:[
    {name:"〜というものだ",description:"Dipakai saat menyatakan pendapat yang terasa sebagai kesimpulan umum.",sentences:[
      {"jp":"困っている人に窓口まで付き添うのが親切というものだ。","kana":"こまっているにんにまどぐちまでつきそうのがしんせつというものだ。","romaji":"komatsu teiru nin ni madoguchi made tsuki sou noga shinsetsu toiumonoda.","meaning":"Mendampingi orang yang sedang kesulitan sampai ke loket itulah yang namanya kebaikan."},
      {"jp":"大事な連絡に返事をしないのは失礼というものだ。","kana":"だいじなれんらくにへんじをしないのはしつれいというものだ。","romaji":"daiji na renraku ni henji woshinainoha shitsurei toiumonoda.","meaning":"Tidak membalas pesan penting itu memang bisa dibilang tidak sopan."},
      {"jp":"せっかく学ぶなら、教科書だけでなく実際に使ってこそ勉強というものだ。","kana":"せっかくまなぶなら、きょうかしょだけでなくじっさいにつかってこそべんきょうというものだ。","romaji":"sekkaku manabu nara, kyoukasho dakedenaku jissaini tsukatte koso benkyou toiumonoda.","meaning":"Kalau sudah belajar, bukan cuma buku teks tetapi juga pemakaian nyata itulah yang namanya belajar."},
      {"jp":"地域に住む以上、ゴミのルールを守るのは当然というものだ。","kana":"ちいきにすむいじょう、ごみのるーるをまもるのはとうぜんというものだ。","romaji":"chiiki ni sumu ijou, gomi no ruuru wo mamoru noha touzen toiumonoda.","meaning":"Kalau tinggal di suatu lingkungan, mematuhi aturan buang sampah memang sudah sewajarnya."},
      {"jp":"相手の立場を考えて話すのが、社会人の会話というものだと思う。","kana":"あいてのたちばをかんがえてはなすのが、しゃかいじんのかいわというものだとおもう。","romaji":"aite no tachiba wo kangae te hanasu noga, shakaijin no kaiwa toiumonodato omou.","meaning":"Menurut saya, berbicara sambil mempertimbangkan posisi lawan bicara itulah percakapan orang dewasa."}
    ]}
  ]},

  {id:"GR-N2-43",level:"N2",title:"〜にすぎない",summary:"Menyatakan bahwa sesuatu tidak lebih dari itu saja, merendahkan atau membatasi kadar.",groups:[
    {name:"〜にすぎない",description:"Sering diterjemahkan hanya, cuma, tidak lebih dari.",sentences:[
      {"jp":"これは個人的な感想にすぎないので、参考程度に聞いてください。","kana":"これはこじんてきなかんそうにすぎないので、さんこうていどにきいてください。","romaji":"koreha kojintekina kansou nisuginainode, sankouteido ni kii tekudasai.","meaning":"Ini tidak lebih dari pendapat pribadi, jadi tolong anggap sebagai referensi saja."},
      {"jp":"駅から徒歩五分といっても、実際は広告の表現にすぎないことも多い。","kana":"えきからとほごぶといっても、じっさいはこうこくのひょうげんにすぎないこともおおい。","romaji":"eki kara toho gobu toittemo, jissai ha koukoku no hyougen nisuginaikotomo ooi.","meaning":"Walaupun tertulis lima menit jalan kaki dari stasiun, sering kali itu tidak lebih dari bahasa iklan."},
      {"jp":"そのミスは手続き全体から見れば一部にすぎない。","kana":"そのみすはてつづきぜんたいからみればいちぶにすぎない。","romaji":"sono misu ha tetsuzuki zentai kara mire ba ichibu nisuginai.","meaning":"Kesalahan itu jika dilihat dari keseluruhan proses tidak lebih dari satu bagian kecil saja."},
      {"jp":"今の私は、まだ入口に立ったにすぎないと感じている。","kana":"いまのわたしは、まだいりぐちにたったにすぎないとかんじている。","romaji":"ima no watashi ha, mada iriguchi ni tatsu tanisuginaito kanji teiru.","meaning":"Saya merasa diri saya sekarang masih tidak lebih dari baru berdiri di pintu masuk."},
      {"jp":"うわさはうわさにすぎないから、本人の話を聞くまで判断しないほうがいい。","kana":"うわさはうわさにすぎないから、ほんにんのはなしをきくまではんだんしないほうがいい。","romaji":"uwasahauwasanisuginaikara, honnin no hanashi wo kiku made handan shinaihougaii.","meaning":"Rumor tidak lebih dari rumor, jadi lebih baik jangan menilai sebelum mendengar langsung dari orangnya."}
    ]}
  ]},

  {id:"GR-N2-44",level:"N2",title:"〜(より)ほかない",summary:"Menyatakan tidak ada pilihan lain selain melakukan itu.",groups:[
    {name:"〜(より)ほかない",description:"Nuansanya pasrah atau kesimpulan realistis.",sentences:[
      {"jp":"終電がない以上、今日はホテルに泊まるほかない。","kana":"しゅうでんがないいじょう、こんにちはほてるにとまるほかない。","romaji":"shuuden ganai ijou, konnichiha hoteru ni toma ruhokanai.","meaning":"Karena sudah tidak ada kereta terakhir, hari ini tidak ada pilihan selain menginap di hotel."},
      {"jp":"この書類が足りないなら、明日もう一度来るほかありません。","kana":"このしょるいがたりないなら、あしたもういちどくるほかありません。","romaji":"kono shorui ga tari nainara, ashita mou ichido kuru hokaarimasen.","meaning":"Kalau dokumen ini kurang, berarti tidak ada pilihan selain datang lagi besok."},
      {"jp":"相手から連絡が来ないので、今は待つよりほかない。","kana":"あいてかられんらくがこないので、いまはまつよりほかない。","romaji":"aite kara renraku ga konai node, ima ha matsu yorihokanai.","meaning":"Karena belum ada kabar dari pihak sana, sekarang tidak ada pilihan selain menunggu."},
      {"jp":"道に迷ったら、近くの交番で聞くほかないと思う。","kana":"みちにまよったら、ちかくのこうばんできくほかないとおもう。","romaji":"michi ni mayotsu tara, chikaku no kouban de kiku hokanaito omou.","meaning":"Kalau tersesat, saya rasa tidak ada pilihan selain bertanya di pos polisi terdekat."},
      {"jp":"急な雨なら、駅の売店で傘を買うほかないね。","kana":"きゅうなあめなら、えきのばいてんでかさをかうほかないね。","romaji":"kyuuna ame nara, eki no baiten de kasa wo kau hokanaine.","meaning":"Kalau hujannya mendadak, ya tidak ada pilihan selain beli payung di kios stasiun."}
    ]}
  ]},

  {id:"GR-N2-45",level:"N2",title:"〜おそれがある",summary:"Menyatakan adanya risiko atau kekhawatiran bahwa sesuatu yang buruk bisa terjadi.",groups:[
    {name:"〜おそれがある",description:"Sering muncul di berita, laporan, dan pengumuman resmi.",sentences:[
      {"jp":"台風の進路によっては、明日の電車に遅れが出るおそれがあります。","kana":"たいふうのしんろによっては、あしたのでんしゃにおくれがでるおそれがあります。","romaji":"taifuu no shinro niyotteha, ashita no densha ni okure ga deru osoregaarimasu.","meaning":"Tergantung arah topannya, besok ada risiko kereta mengalami keterlambatan."},
      {"jp":"記入漏れがあると、申請が受理されないおそれがある。","kana":"きにゅうもれがあると、しんせいがじゅりされないおそれがある。","romaji":"kinyuu more gaaruto, shinsei ga juri sarenaiosoregaaru.","meaning":"Kalau ada bagian yang tidak terisi, ada risiko pengajuannya tidak diterima."},
      {"jp":"このまま雪が降り続けば、高速道路が通行止めになるおそれがある。","kana":"このままゆきがおりつづけば、こうそくどうろがつうこうどめめになるおそれがある。","romaji":"konomama yuki ga ori tsuzuke ba, kousokudouro ga tsuukoudome meninaruosoregaaru.","meaning":"Kalau saljunya terus turun seperti ini, ada risiko jalan tol ditutup."},
      {"jp":"人が集中しすぎると、会場周辺が危険な状態になるおそれがある。","kana":"にんがしゅうちゅうしすぎると、かいじょうしゅうへんがきけんなじょうたいになるおそれがある。","romaji":"nin ga shuuchuu shisugiruto, kaijou shuuhen ga kiken na joutai ninaruosoregaaru.","meaning":"Kalau orang terlalu terkumpul, ada risiko area sekitar venue menjadi berbahaya."},
      {"jp":"誤った情報を広めると、地域に混乱を招くおそれがある。","kana":"あやまったじょうほうをひろめると、ちいきにこんらんをまねくおそれがある。","romaji":"ayamatsu ta jouhou wo hirome ruto, chiiki ni konran wo maneku osoregaaru.","meaning":"Kalau menyebarkan informasi yang salah, ada risiko menimbulkan kebingungan di masyarakat."}
    ]}
  ]},

  {id:"GR-N2-46",level:"N2",title:"〜かねない",summary:"Menyatakan ada kemungkinan cukup besar terjadinya hal buruk.",groups:[
    {name:"〜かねない",description:"Lebih kuat dan lebih subjektif daripada おそれがある.",sentences:[
      {"jp":"こんなに睡眠不足のまま運転すれば、事故を起こしかねない。","kana":"こんなにすいみんぶそくのままうんてんすれば、じこをおこしかねない。","romaji":"konnani suiminbusoku nomama unten sureba, jiko wo oko shikanenai.","meaning":"Kalau mengemudi dengan kurang tidur seperti ini, bisa-bisa menyebabkan kecelakaan."},
      {"jp":"あいまいな案内は、初めて来た人を混乱させかねない。","kana":"あいまいなあんないは、はじめてきたにんをこんらんさせかねない。","romaji":"aimaina annai ha, hajimete kita nin wo konran sasekanenai.","meaning":"Petunjuk yang samar bisa saja membuat orang yang baru datang menjadi bingung."},
      {"jp":"忙しいからといって食事を抜き続けると、体調を崩しかねないよ。","kana":"いそがしいからといってしょくじをぬきつづけると、たいちょうをくずしかねないよ。","romaji":"isogashii karatoitte shokuji wo nuki tsuzuke ruto, taichou wo kuzushi kanenaiyo.","meaning":"Kalau terus melewatkan makan hanya karena sibuk, kondisi tubuhmu bisa drop."},
      {"jp":"不用意な一言が、長く続いた信頼関係を壊しかねない。","kana":"ふよういなひとことが、ながくつづいたしんらいかんけいをこわしかねない。","romaji":"fuyoui na hitokoto ga, nagaku tsuzui ta shinraikankei wo kowashi kanenai.","meaning":"Satu kalimat yang ceroboh bisa saja merusak kepercayaan yang sudah lama terbangun."},
      {"jp":"この暑さで水分を取らないと、熱中症になりかねません。","kana":"このあつさですいぶんをとらないと、ねっちゅうしょうになりかねません。","romaji":"kono atsusa de suibun wo tora naito, netchuu shou ninarikanemasen.","meaning":"Dalam panas seperti ini, kalau tidak minum cukup air Anda bisa kena heatstroke."}
    ]}
  ]},

  {id:"GR-N2-47",level:"N2",title:"〜に相違ない",summary:"Menyatakan keyakinan kuat bahwa sesuatu pasti benar, artinya pasti, tidak salah lagi.",groups:[
    {name:"〜に相違ない",description:"Nuansanya formal dan lebih tertulis.",sentences:[
      {"jp":"この丁寧な対応なら、あのホテルは評判が高いに相違ない。","kana":"このていねいなたいおうなら、あのほてるはひょうばんがたかいにそういない。","romaji":"kono teinei na taiou nara, ano hoteru ha hyouban ga takai ni soui nai.","meaning":"Dengan pelayanan seteliti ini, hotel itu pasti punya reputasi tinggi."},
      {"jp":"あれだけ準備していたのだから、彼女は本番でも落ち着いていたに相違ない。","kana":"あれだけじゅんびしていたのだから、かのじょはほんばんでもおちついていたにそういない。","romaji":"aredake junbi shiteitanodakara, kanojo ha honban demo ochitsui teitani soui nai.","meaning":"Karena dia sudah mempersiapkan sebanyak itu, pasti saat hari-H dia juga tenang."},
      {"jp":"駅前にこれだけ人が集まっているということは、何か大きなイベントがあるに相違ない。","kana":"えきまえにこれだけにんがあつまっているということは、なにかおおきないべんとがあるにそういない。","romaji":"ekimae nikoredake nin ga atsuma tteirutoiukotoha, nanika ooki na ibento gaaruni soui nai.","meaning":"Kalau sebanyak ini orang berkumpul di depan stasiun, pasti ada acara besar."},
      {"jp":"誰も文句を言わずに通っている店だから、味は確かに相違ない。","kana":"だれももんくをいわずにとおっているみせだから、あじはたしかにそういない。","romaji":"daremo monku wo iwa zuni tootte iru mise dakara, aji ha tashikani soui nai.","meaning":"Karena toko itu terus didatangi tanpa keluhan, rasanya pasti memang dapat dipercaya."},
      {"jp":"先生があれほど喜んでいたのだから、合格したに相違ない。","kana":"せんせいがあれほどよろこんでいたのだから、ごうかくしたにそういない。","romaji":"sensei gaarehodo yorokonde itanodakara, goukaku shitani soui nai.","meaning":"Karena sensei sampai segembira itu, pasti saya lulus."}
    ]}
  ]},

  {id:"GR-N2-48",level:"N2",title:"〜とか",summary:"Menyatakan contoh yang didengar atau disebut secara santai, artinya katanya, seperti.",groups:[
    {name:"〜とか",description:"Dalam N2, bentuk ini sering terasa lisan dan tidak memastikan semua detail.",sentences:[
      {"jp":"駅前に新しいベーカリーができたとかで、朝からかなり並んでいた。","kana":"えきまえにあたらしいべーかりーができたとかで、あさからかなりならんでいた。","romaji":"ekimae ni atarashii beekarii gadekitatokade, asa karakanari naran deita.","meaning":"Katanya ada toko roti baru di depan stasiun, jadi dari pagi sudah ramai antre."},
      {"jp":"今年は花火大会が中止になるとか聞いたけど、本当かな。","kana":"こんねんははなびたいかいがちゅうしになるとかきいたけど、ほんとうかな。","romaji":"konnen ha hanabitaikai ga chuushi ninarutoka kii takedo, hontou kana.","meaning":"Saya dengar katanya festival kembang api tahun ini dibatalkan, apa benar ya?"},
      {"jp":"課長は来週から大阪に転勤だとか。","kana":"かちょうはらいしゅうからおおさかにてんきんだとか。","romaji":"kachou ha raishuu kara oosaka ni tenkin datoka.","meaning":"Katanya kepala divisi mulai minggu depan dipindah ke Osaka."},
      {"jp":"その映画、公開初日から泣けるとか話題になっていた。","kana":"そのえいが、こうかいしょにちからなけるとかわだいになっていた。","romaji":"sono eiga, koukai shonichi kara nake rutoka wadai ninatteita.","meaning":"Katanya film itu sudah ramai dibicarakan sejak hari pertama tayang karena sangat menyentuh."},
      {"jp":"このあたりは昔、川が流れていたとかで地名にもその名残がある。","kana":"このあたりはむかし、かわがながれていたとかでちめいにもそのなごりがある。","romaji":"konoatariha mukashi, kawa ga nagare teitatokade chimei nimosono nagori gaaru.","meaning":"Katanya dulu di sekitar sini pernah ada sungai, dan jejaknya masih terlihat di nama daerah."}
    ]}
  ]},

  {id:"GR-N2-49",level:"N2",title:"〜やら〜やら",summary:"Menyatakan banyak hal bercampur dan agak kacau, artinya ini itu, bermacam-macam.",groups:[
    {name:"〜やら〜やら",description:"Sering dipakai saat situasinya ramai, ribet, atau emosinya campur aduk.",sentences:[
      {"jp":"引っ越しの日は荷物の整理やら住所変更やらで一日が終わった。","kana":"ひっこしのにちはにもつのせいりやらじゅうしょへんこうやらでついたちがおわった。","romaji":"hikkoshi no nichi ha nimotsu no seiri yara juushohenkou yarade tsuitachi ga owa tta.","meaning":"Hari pindahan habis begitu saja untuk beres-beres barang, ubah alamat, dan macam-macam lainnya."},
      {"jp":"会場では日本語やら英語やらが飛び交っていて、にぎやかだった。","kana":"かいじょうではにほんごやらえいごやらがとびかっていて、にぎやかだった。","romaji":"kaijou deha nihongo yara eigo yaraga tobikatsu teite, nigiyakadatta.","meaning":"Di venue itu bahasa Jepang, bahasa Inggris, dan berbagai bahasa lain terdengar bersahutan sehingga suasananya ramai."},
      {"jp":"合格発表の日はうれしいやら不安やらで落ち着かなかった。","kana":"ごうかくはっぴょうのにちはうれしいやらふあんやらでおちつかなかった。","romaji":"goukakuhappyou no nichi haureshiiyara fuan yarade ochitsuka nakatta.","meaning":"Di hari pengumuman kelulusan saya tidak tenang karena campuran rasa senang dan cemas."},
      {"jp":"年末は忘年会やら実家への発送やらで出費が増える。","kana":"ねんまつはぼうねんかいやらじっかへのはっそうやらでしゅっぴがふえる。","romaji":"nenmatsu ha bounenkai yara jikka heno hassou yarade shuppi ga fue ru.","meaning":"Menjelang akhir tahun pengeluaran bertambah karena acara tahun akhir, kirim barang ke rumah, dan lain-lain."},
      {"jp":"週末の商店街は買い物客やら観光客やらでとにかく人が多い。","kana":"しゅうまつのしょうてんがいはかいものきゃくやらかんこうきゃくやらでとにかくにんがおおい。","romaji":"shuumatsu no shoutengai ha kaimono kyaku yara kankoukyaku yaradetonikaku nin ga ooi.","meaning":"Pada akhir pekan area pertokoan itu penuh oleh pembeli, turis, dan banyak orang lainnya."}
    ]}
  ]},

  {id:"GR-N2-50",level:"N2",title:"〜といった",summary:"Menyatakan contoh representative, artinya seperti, semacam.",groups:[
    {name:"〜といった",description:"Biasa dipakai untuk merangkum beberapa contoh yang sejenis.",sentences:[
      {"jp":"窓口では在留カードやパスポートといった本人確認書類が必要です。","kana":"まどぐちではざいりゅうかーどやぱすぽーとといったほんにんかくにんしょるいがひつようです。","romaji":"madoguchi deha zairyuu kaado ya pasupooto toitta honnin kakuninsho rui ga hitsuyou desu.","meaning":"Di loket dibutuhkan dokumen identitas seperti kartu tinggal dan paspor."},
      {"jp":"このエリアには書店、喫茶店、古着屋といった落ち着いた店が多い。","kana":"このえりあにはしょてん、きっさてん、ふるぎやといったおちついたみせがおおい。","romaji":"kono eria niha shoten, kissaten, furugi ya toitta ochitsui ta mise ga ooi.","meaning":"Di area ini banyak toko yang tenang seperti toko buku, kafe, dan toko pakaian bekas."},
      {"jp":"発表では家賃や通学時間といった生活面の比較も入れたい。","kana":"はっぴょうではやちんやつうがくじかんといったせいかつめんのひかくもいれたい。","romaji":"happyou deha yachin ya tsuugakujikan toitta seikatsu men no hikaku mo ire tai.","meaning":"Dalam presentasi saya juga ingin memasukkan perbandingan aspek kehidupan seperti sewa dan waktu perjalanan ke sekolah."},
      {"jp":"冬は乾燥、インフルエンザ、雪道対策といった注意が必要になる。","kana":"ふゆはかんそう、いんふるえんざ、ゆきみちたいさくといったちゅういがひつようになる。","romaji":"fuyu ha kansou, infuruenza, yukimichi taisaku toitta chuui ga hitsuyou ninaru.","meaning":"Di musim dingin perlu perhatian terhadap hal-hal seperti udara kering, influenza, dan jalan bersalju."},
      {"jp":"日本で働くには報連相といった基本も大事だと感じる。","kana":"にっぽんではたらくにはほうれんそうといったきほんもだいじだとかんじる。","romaji":"nippon de hataraku niha hou ren sou toitta kihon mo daiji dato kanji ru.","meaning":"Saya merasa bahwa hal-hal dasar seperti hou-ren-sou juga penting untuk bekerja di Jepang."}
    ]}
  ]},

  {id:"GR-N2-51",level:"N2",title:"〜というか〜というか",summary:"Menyatakan pembicara mencari kata yang paling pas, artinya dibilang begini juga iya, dibilang begitu juga iya.",groups:[
    {name:"〜というか〜というか",description:"Nuansanya percakapan dan agak ragu memilih ungkapan.",sentences:[
      {"jp":"あの先生は厳しいというか、細かいところまでよく見ているというか、油断できない。","kana":"あのせんせいはいかめしいというか、こまかいところまでよくみているというか、ゆだんできない。","romaji":"ano sensei ha ikameshii toiuka, komakai tokoromadeyoku mite irutoiuka, yudan dekinai.","meaning":"Guru itu bisa dibilang tegas, bisa juga dibilang sangat memperhatikan detail, jadi kita tidak bisa lengah."},
      {"jp":"この町は便利というか、不便が少ないというか、暮らしやすい。","kana":"このまちはべんりというか、ふべんがすくないというか、くらしやすい。","romaji":"kono machi ha benri toiuka, fuben ga sukunai toiuka, kurashi yasui.","meaning":"Kota ini bisa dibilang praktis, atau mungkin lebih tepatnya sedikit sekali hal yang merepotkan, jadi nyaman ditinggali."},
      {"jp":"彼の日本語は上手というか、自然すぎて外国人に見えない。","kana":"かのにほんごはじょうずというか、しぜんすぎてがいこくじんにみえない。","romaji":"kano nihongo ha jouzu toiuka, shizen sugite gaikokujin ni mie nai.","meaning":"Bahasa Jepangnya bukan cuma bagus, malah terlalu alami sampai tidak kelihatan seperti orang asing."},
      {"jp":"緊張したというか、周りに圧倒されたというか、最初はほとんど話せなかった。","kana":"きんちょうしたというか、まわりにあっとうされたというか、さいしょはほとんどはなせなかった。","romaji":"kinchoushi tatoiuka, mawari ni attou saretatoiuka, saisho hahotondo hanase nakatta.","meaning":"Saya ini entah gugup atau kewalahan oleh suasana sekitar, pokoknya awalnya hampir tidak bisa bicara."},
      {"jp":"その店は静かというか、少し緊張するくらい整っていた。","kana":"そのみせはしずかというか、すこしきんちょうするくらいととのっていた。","romaji":"sono mise ha shizuka toiuka, sukoshi kinchousu rukurai totonotsu teita.","meaning":"Toko itu bukan sekadar tenang, tapi begitu rapi sampai sedikit membuat tegang."}
    ]}
  ]},

  {id:"GR-N2-52",level:"N2",title:"〜抜きで / 〜抜きにして",summary:"Menyatakan menghilangkan sesuatu dari pertimbangan atau tanpa sesuatu itu.",groups:[
    {name:"〜抜きで / 〜抜きにして",description:"Bisa dipakai untuk makanan, formalitas, atau pembahasan tertentu.",sentences:[
      {"jp":"今日はあいさつ抜きで、すぐ本題に入りましょう。","kana":"こんにちはあいさつぬきで、すぐほんだいにいりましょう。","romaji":"konnichiha aisatsu nuki de, sugu hondai ni iri mashou.","meaning":"Hari ini tanpa basa-basi, mari langsung masuk ke pokok pembahasan."},
      {"jp":"卵抜きで作れるメニューがあれば教えてください。","kana":"たまごぬきでつくれるめにゅーがあればおしえてください。","romaji":"tamago nuki de tsukure ru menyuu gaareba oshie tekudasai.","meaning":"Kalau ada menu yang bisa dibuat tanpa telur, tolong beri tahu saya."},
      {"jp":"個人的な感情は抜きにして、この案の問題点だけを確認したい。","kana":"こじんてきなかんじょうはぬきにして、このあんのもんだいてんだけをかくにんしたい。","romaji":"kojintekina kanjou ha nuki nishite, kono an no mondaiten dakewo kakuninshi tai.","meaning":"Tanpa melibatkan perasaan pribadi, saya ingin memeriksa dulu masalah dari usulan ini saja."},
      {"jp":"予約なしでは入れない人気店だけど、平日の昼なら行列抜きで入れることもある。","kana":"よやくなしではいれないにんきみせだけど、へいじつのひるならぎょうれつぬきでいれることもある。","romaji":"yoyaku nashideha ire nai ninki mise dakedo, heijitsu no hiru nara gyouretsu nuki de ire rukotomoaru.","meaning":"Walaupun toko populer ini biasanya harus reservasi, siang hari kerja kadang bisa masuk tanpa antre."},
      {"jp":"形式ばった紹介は抜きで、まず名前だけ覚えてもらえればうれしいです。","kana":"けいしきばったしょうかいはぬきで、まずなまえだけおぼえてもらえればうれしいです。","romaji":"keishiki batta shoukai ha nuki de, mazu namae dake oboe temoraerebaureshiidesu.","meaning":"Tanpa perkenalan yang terlalu formal, saya akan senang kalau nama saya dulu yang diingat."}
    ]}
  ]},

  {id:"GR-N2-53",level:"N2",title:"〜ことなく",summary:"Menyatakan tanpa melakukan hal itu sama sekali.",groups:[
    {name:"〜ことなく",description:"Sering dipakai dalam bentuk tulisan dan terdengar lebih formal daripada ないで.",sentences:[
      {"jp":"彼は一度も迷うことなく、窓口までまっすぐ歩いていった。","kana":"かれはいちどもまようことなく、まどぐちまでまっすぐあるいていった。","romaji":"kareha ichido mo mayou kotonaku, madoguchi mademassugu arui teitta.","meaning":"Dia berjalan lurus ke loket tanpa ragu sedikit pun."},
      {"jp":"その職人は無駄な動きをすることなく作業を進めていた。","kana":"そのしょくにんはむだなうごきをすることなくさぎょうをすすめていた。","romaji":"sono shokunin ha muda na ugoki wosurukotonaku sagyou wo susume teita.","meaning":"Pengrajin itu melanjutkan pekerjaannya tanpa gerakan yang sia-sia."},
      {"jp":"休日はどこへ行くこともなく、部屋の掃除だけして終わった。","kana":"きゅうじつはどこへいくこともなく、へやのそうじだけしておわった。","romaji":"kyuujitsu hadokohe iku kotomonaku, heya no souji dakeshite owa tta.","meaning":"Saat libur saya tidak pergi ke mana-mana dan cuma berakhir dengan membersihkan kamar."},
      {"jp":"大きな混乱が起こることなく、イベントは無事に終了した。","kana":"おおきなこんらんがおこることなく、いべんとはぶじにしゅうりょうした。","romaji":"ooki na konran ga oko rukotonaku, ibento ha buji ni shuuryou shita.","meaning":"Acara itu selesai dengan aman tanpa terjadi kekacauan besar."},
      {"jp":"文句を言うことなく働く人ほど、実は疲れをためているのかもしれない。","kana":"もんくをいうことなくはたらくにんほど、じつはつかれをためているのかもしれない。","romaji":"monku wo iu kotonaku hataraku nin hodo, jitsuha tsukare wotameteirunokamoshirenai.","meaning":"Orang yang bekerja tanpa mengeluh justru mungkin diam-diam menumpuk kelelahan."}
    ]}
  ]},

  {id:"GR-N2-54",level:"N2",title:"〜をこめて",summary:"Menyatakan melakukan sesuatu dengan memasukkan perasaan, doa, atau makna tertentu ke dalamnya.",groups:[
    {name:"〜をこめて",description:"Sering dipakai untuk ucapan, hadiah, surat, dan karya.",sentences:[
      {"jp":"感謝をこめて、留学中にお世話になった先生へ手紙を書いた。","kana":"かんしゃをこめて、りゅうがくちゅうにおせわになったせんせいへてがみをかいた。","romaji":"kansha wokomete, ryuugakuchuu nio sewa ninatta sensei he tegami wo kai ta.","meaning":"Dengan penuh rasa terima kasih, saya menulis surat kepada guru yang membantu saya selama studi."},
      {"jp":"応援の気持ちをこめて、部活の後輩にメッセージを送った。","kana":"おうえんのきもちをこめて、ぶかつのこうはいにめっせーじをおくった。","romaji":"ouen no kimochi wokomete, bukatsu no kouhai ni messeeji wo okutsu ta.","meaning":"Dengan perasaan mendukung, saya mengirim pesan kepada junior klub."},
      {"jp":"無事を祈る気持ちをこめて、お守りを渡した。","kana":"ぶじをいのるきもちをこめて、おまもりをわたした。","romaji":"buji wo inoru kimochi wokomete, o mamori wo watashi ta.","meaning":"Saya memberikan jimat dengan doa agar semuanya selamat."},
      {"jp":"お祝いの気持ちをこめて、先輩の送別会で小さな花束を用意した。","kana":"おいわいのきもちをこめて、せんぱいのそうべつかいでちいさなはなたばをよういした。","romaji":"o iwai no kimochi wokomete, senpai no soubetsukai de chiisa na hanataba wo youishi ta.","meaning":"Dengan perasaan ikut merayakan, saya menyiapkan buket kecil untuk acara perpisahan senior."},
      {"jp":"地域の人への敬意をこめて、祭りではいつも手伝うようにしている。","kana":"ちいきのにんへのけいいをこめて、まつりではいつもてつだうようにしている。","romaji":"chiiki no nin heno keii wokomete, matsuri dehaitsumo tetsudau younishiteiru.","meaning":"Sebagai bentuk rasa hormat kepada warga setempat, saya selalu berusaha membantu saat festival."}
    ]}
  ]},

  {id:"GR-N2-55",level:"N2",title:"〜に限り",summary:"Menyatakan hanya berlaku pada kondisi atau orang tertentu.",groups:[
    {name:"〜に限り",description:"Sering dipakai di pengumuman atau aturan khusus.",sentences:[
      {"jp":"本日に限り、この窓口でも英語で対応しています。","kana":"ほんじつにかぎり、このまどぐちでもえいごでたいおうしています。","romaji":"honjitsu ni kagiri, kono madoguchi demo eigo de taiou shiteimasu.","meaning":"Hanya untuk hari ini, loket ini juga melayani dalam bahasa Inggris."},
      {"jp":"学生に限り、図書館の延長利用が認められています。","kana":"がくせいにかぎり、としょかんのえんちょうりようがみとめられています。","romaji":"gakusei ni kagiri, toshokan no enchou riyou ga mitome rareteimasu.","meaning":"Hanya untuk mahasiswa, penggunaan perpustakaan dengan perpanjangan waktu diizinkan."},
      {"jp":"このクーポンは平日に限り使えます。","kana":"このくーぽんはへいじつにかぎりつかえます。","romaji":"kono kuupon ha heijitsu ni kagiri tsukae masu.","meaning":"Kupon ini hanya bisa dipakai pada hari kerja."},
      {"jp":"初回参加者に限り、登録料が無料になります。","kana":"しょかいさんかしゃにかぎり、とうろくりょうがむりょうになります。","romaji":"shokai sankasha ni kagiri, tourokuryou ga muryou ninarimasu.","meaning":"Hanya untuk peserta pertama kali, biaya pendaftaran menjadi gratis."},
      {"jp":"雨天時に限り、校内の一部通路が開放されます。","kana":"うてんじにかぎり、こうないのいちぶつうろがかいほうされます。","romaji":"utenji ni kagiri, kounai no ichibu tsuuro ga kaihou saremasu.","meaning":"Hanya saat hujan, sebagian lorong di dalam sekolah dibuka."}
    ]}
  ]},

  {id:"GR-N2-56",level:"N2",title:"〜に限って",summary:"Menyatakan anehnya justru pada saat atau orang tertentu terjadi hal yang tidak diinginkan.",groups:[
    {name:"〜に限って",description:"Sering memuat rasa kesal atau heran.",sentences:[
      {"jp":"急いでいる日に限って、改札前で定期が見つからない。","kana":"いそいでいるにちにかぎって、かいさつまえでていきがみつからない。","romaji":"isoi deiru nichi ni kagitsu te, kaisatsu mae de teiki ga mitsu karanai.","meaning":"Anehnya justru pada hari sedang terburu-buru kartu langganan saya tidak ketemu di depan gerbang."},
      {"jp":"こういう大事な会議の日に限って、プリンターが止まるんだよね。","kana":"こういうだいじなかいぎのにちにかぎって、ぷりんたーがとまるんだよね。","romaji":"kouiu daiji na kaigi no nichi ni kagitsu te, purintaa ga toma rundayone.","meaning":"Anehnya justru di hari rapat penting seperti ini printer malah berhenti."},
      {"jp":"普段は元気なのに、病院へ行く日に限って子どもが熱を出す。","kana":"ふだんはげんきなのに、びょういんへいくにちにかぎってこどもがねつをだす。","romaji":"fudan ha genki nanoni, byouin he iku nichi ni kagitsu te kodomo ga netsu wo dasu.","meaning":"Biasanya anak sehat-sehat saja, tapi anehnya justru di hari ke rumah sakit dia demam."},
      {"jp":"忘れ物をしない人に限って、一度するとかなり落ち込む。","kana":"わすれものをしないにんにかぎって、いちどするとかなりおちこむ。","romaji":"wasuremono woshinai nin ni kagitsu te, ichido surutokanari ochikomu.","meaning":"Justru orang yang biasanya tidak pernah lupa barang, sekali lupa akan sangat terpukul."},
      {"jp":"旅行の朝に限って、近所で工事が始まって早く目が覚めた。","kana":"りょこうのあさにかぎって、きんじょでこうじがはじまってはやくめがさめた。","romaji":"ryokou no asa ni kagitsu te, kinjo de kouji ga hajima tte hayaku me ga same ta.","meaning":"Anehnya justru pada pagi hari keberangkatan ada konstruksi di sekitar rumah dan saya jadi bangun terlalu cepat."}
    ]}
  ]},

  {id:"GR-N2-57",level:"N2",title:"〜限り(は)",summary:"Menyatakan selama kondisi itu masih berlaku, hasil setelahnya juga berlaku.",groups:[
    {name:"〜限り(は)",description:"Bisa diterjemahkan selama, sepanjang.",sentences:[
      {"jp":"日本に住む限り、ゴミの分別には慣れないといけない。","kana":"にっぽんにすむかぎり、ごみのふんべつにはなれないといけない。","romaji":"nippon ni sumu kagiri, gomi no funbetsu niha nare naitoikenai.","meaning":"Selama tinggal di Jepang, kita harus terbiasa memilah sampah."},
      {"jp":"私が担当する限り、この案内はもっと分かりやすくしたい。","kana":"わたしがたんとうするかぎり、このあんないはもっとわかりやすくしたい。","romaji":"watashi ga tantou suru kagiri, kono annai hamotto waka riyasukushitai.","meaning":"Selama saya yang menangani, saya ingin petunjuk ini dibuat lebih mudah dipahami."},
      {"jp":"健康である限り、できるだけ自分の足で出かけたい。","kana":"けんこうであるかぎり、できるだけじぶんのあしででかけたい。","romaji":"kenkou dearu kagiri, dekirudake jibun no ashi de deka ketai.","meaning":"Selama masih sehat, saya ingin pergi dengan kaki sendiri sebisa mungkin."},
      {"jp":"予約サイトが開いている限り、まだ空きがある可能性があります。","kana":"よやくさいとがひらいているかぎり、まだあきがあるかのうせいがあります。","romaji":"yoyaku saito ga hirai teiru kagiri, mada aki gaaru kanousei gaarimasu.","meaning":"Selama situs reservasinya masih bisa dibuka, masih ada kemungkinan slotnya tersedia."},
      {"jp":"ルールが変わらない限り、来年度もこの方法で申請することになる。","kana":"るーるがかわらないかぎり、らいねんどもこのほうほうでしんせいすることになる。","romaji":"ruuru ga kawa ranai kagiri, rainendo mokono houhou de shinsei surukotoninaru.","meaning":"Selama aturannya tidak berubah, tahun depan pun pengajuan akan dilakukan dengan cara ini."}
    ]}
  ]},

  {id:"GR-N2-58",level:"N2",title:"〜限りでは",summary:"Menyatakan penilaian sejauh berdasarkan informasi atau pengamatan tertentu.",groups:[
    {name:"〜限りでは",description:"Sering diterjemahkan sejauh yang saya lihat, sejauh berdasarkan.",sentences:[
      {"jp":"私が見た限りでは、この書類に大きな不備はありません。","kana":"わたしがみたかぎりでは、このしょるいにおおきなふびはありません。","romaji":"watashi ga mita kagiri deha, kono shorui ni ooki na fubi haarimasen.","meaning":"Sejauh yang saya lihat, dokumen ini tidak punya kekurangan besar."},
      {"jp":"案内板を読んだ限りでは、受付は二階のようです。","kana":"あんないばんをよんだかぎりでは、うけつけはにかいのようです。","romaji":"annaiban wo yonda kagiri deha, uketsuke ha nikai noyoudesu.","meaning":"Sejauh yang saya baca dari papan petunjuk, loketnya sepertinya ada di lantai dua."},
      {"jp":"先生の説明を聞いた限りでは、試験内容は去年と大きく変わらない。","kana":"せんせいのせつめいをきいたかぎりでは、しけんないようはきょねんとおおきくかわらない。","romaji":"sensei no setsumei wo kii ta kagiri deha, shikennaiyou ha kyonen to ookiku kawa ranai.","meaning":"Sejauh yang saya dengar dari penjelasan sensei, isi ujiannya tidak banyak berubah dari tahun lalu."},
      {"jp":"私の経験した限りでは、この地域の人はかなり親切です。","kana":"わたしのけいけんしたかぎりでは、このちいきのにんはかなりしんせつです。","romaji":"watashi no keiken shita kagiri deha, kono chiiki no nin hakanari shinsetsu desu.","meaning":"Sejauh pengalaman saya, orang-orang di daerah ini cukup ramah."},
      {"jp":"公開されている情報だけを見る限りでは、まだ判断が難しい。","kana":"こうかいされているじょうほうだけをみるかぎりでは、まだはんだんがむずかしい。","romaji":"koukai sareteiru jouhou dakewo miru kagiri deha, mada handan ga muzukashii.","meaning":"Sejauh hanya melihat informasi yang dipublikasikan, masih sulit mengambil keputusan."}
    ]}
  ]},

  {id:"GR-N2-59",level:"N2",title:"〜どころではない",summary:"Menyatakan situasi terlalu serius sehingga tidak sempat memikirkan hal lain.",groups:[
    {name:"〜どころではない",description:"Nuansanya lebih kuat daripada どころか.",sentences:[
      {"jp":"引っ越し直後は観光どころではなく、生活を整えるだけで精いっぱいだった。","kana":"ひっこしちょくごはかんこうどころではなく、せいかつをととのえるだけでせいいっぱいだった。","romaji":"hikkoshi chokugo ha kankou dokorodehanaku, seikatsu wo totonoe rudakede seiippai datta.","meaning":"Setelah baru pindah, jangankan jalan-jalan, mengatur hidup sehari-hari saja sudah sangat melelahkan."},
      {"jp":"締め切り前で昼休みどころではない。","kana":"しめきりまえでひるやすみどころではない。","romaji":"shimekiri mae de hiruyasumi dokorodehanai.","meaning":"Karena menjelang tenggat, jangankan istirahat siang, saya bahkan tidak sempat berhenti."},
      {"jp":"子どもが急に熱を出して、買い物どころではなくなった。","kana":"こどもがきゅうにねつをだして、かいものどころではなくなった。","romaji":"kodomo ga kyuuni netsu wo dashi te, kaimono dokorodehanakunatta.","meaning":"Anak tiba-tiba demam, jadi jangankan belanja, keluar rumah pun batal."},
      {"jp":"地震の速報を見て、冗談を言っているどころではない空気になった。","kana":"じしんのそくほうをみて、じょうだんをいっているどころではないくうきになった。","romaji":"jishin no sokuhou wo mite, joudan wo itte irudokorodehanai kuuki ninatta.","meaning":"Begitu melihat kabar gempa, suasananya langsung tidak lagi memungkinkan untuk bercanda."},
      {"jp":"新生活の最初の週は自炊どころではなく、毎日コンビニに頼っていた。","kana":"しんせいかつのさいしょのしゅうはじすいどころではなく、まいにちこんびににたよっていた。","romaji":"shinseikatsu no saisho no shuu ha jisui dokorodehanaku, mainichi konbini ni tayotsu teita.","meaning":"Pada minggu pertama hidup baru, jangankan masak sendiri, saya tiap hari bergantung pada konbini."}
    ]}
  ]},

  {id:"GR-N2-60",level:"N2",title:"〜ものか",summary:"Menyatakan penolakan atau keyakinan kuat bahwa sesuatu tidak mungkin dilakukan.",groups:[
    {name:"〜ものか",description:"Sering terdengar emosional dan kuat dalam percakapan.",sentences:[
      {"jp":"あんな対応をされた店に、もう二度と行くものか。","kana":"あんなたいおうをされたみせに、もうにどといくものか。","romaji":"anna taiou wosareta mise ni, mou nido to iku monoka.","meaning":"Setelah dilayani seperti itu, saya tidak akan pergi lagi ke toko itu."},
      {"jp":"こんなに準備したんだから、簡単にあきらめるものか。","kana":"こんなにじゅんびしたんだから、かんたんにあきらめるものか。","romaji":"konnani junbi shitandakara, kantan niakiramerumonoka.","meaning":"Karena saya sudah mempersiapkan sebanyak ini, saya tidak akan menyerah begitu saja."},
      {"jp":"忙しいからといって、大事な約束を忘れるものか。","kana":"いそがしいからといって、だいじなやくそくをわすれるものか。","romaji":"isogashii karatoitte, daiji na yakusoku wo wasure rumonoka.","meaning":"Hanya karena sibuk bukan berarti saya akan melupakan janji penting."},
      {"jp":"あのミスを繰り返すものかと、手順を全部書き出した。","kana":"あのみすをくりかえすものかと、てじゅんをぜんぶかきだした。","romaji":"ano misu wo kurikaesu monokato, tejun wo zenbu kakidashi ta.","meaning":"Saya menuliskan semua langkah sambil bertekad tidak akan mengulangi kesalahan itu lagi."},
      {"jp":"寒いくらいで部活を休むものかと、彼は外へ出ていった。","kana":"さむいくらいでぶかつをやすむものかと、かれはそとへでていった。","romaji":"samui kuraide bukatsu wo yasumu monokato, kareha soto he dete itta.","meaning":"Hanya karena dingin, dia tidak mau sampai bolos kegiatan klub lalu tetap keluar."}
    ]}
  ]},

  {id:"GR-N2-61",level:"N2",title:"〜っこない",summary:"Menyatakan keyakinan santai tapi kuat bahwa sesuatu mustahil terjadi.",groups:[
    {name:"〜っこない",description:"Lebih kasual daripada わけがない.",sentences:[
      {"jp":"終電まであと十分しかないし、今から走っても間に合いっこない。","kana":"しゅうでんまであとじゅうぶんしかないし、いまからはしってもまにあいっこない。","romaji":"shuuden madeato juubun shikanaishi, imaka ra hashitsu temo maniai kkonai.","meaning":"Kereta terakhir tinggal sepuluh menit lagi, jadi sekalipun lari sekarang tetap tidak mungkin sempat."},
      {"jp":"そんな難しい漢字、今日一日で全部覚えられっこないよ。","kana":"そんなむずかしいかんじ、きょういちにちでぜんぶおぼえられっこないよ。","romaji":"sonna muzukashii kanji, kyouichinichi de zenbu oboe rarekkonaiyo.","meaning":"Kanji sesulit itu tidak mungkin dihafal semua hanya dalam satu hari."},
      {"jp":"説明なしでこの書類を一人で完成できっこない。","kana":"せつめいなしでこのしょるいをひとりでかんせいできっこない。","romaji":"setsumei nashidekono shorui wo hitori de kansei dekikkonai.","meaning":"Tanpa penjelasan, tidak mungkin saya bisa menyelesaikan dokumen ini sendirian."},
      {"jp":"あの行列じゃ、開店直後に入れっこないね。","kana":"あのぎょうれつじゃ、かいてんちょくごにいれっこないね。","romaji":"ano gyouretsu ja, kaitenchokugo ni ire kkonaine.","meaning":"Dengan antrean sepanjang itu, tidak mungkin kita bisa masuk tepat setelah buka."},
      {"jp":"毎日寝不足のままで、いい集中力なんて続きっこない。","kana":"まいにちねぶそくのままで、いいしゅうちゅうりょくなんてつづきっこない。","romaji":"mainichi nebusoku nomamade, ii shuuchuuryoku nante tsuzuki kkonai.","meaning":"Kalau terus kurang tidur tiap hari, konsentrasi yang baik tidak mungkin bertahan."}
    ]}
  ]},

  {id:"GR-N2-62",level:"N2",title:"〜わけがない",summary:"Menyatakan dengan logis bahwa sesuatu mustahil benar.",groups:[
    {name:"〜わけがない",description:"Lebih objektif dan tegas daripada っこない.",sentences:[
      {"jp":"準備なしであの発表をこなせるわけがない。","kana":"じゅんびなしであのはっぴょうをこなせるわけがない。","romaji":"junbi nashideano happyou wokonaseruwakeganai.","meaning":"Tidak mungkin seseorang bisa menjalani presentasi sebesar itu tanpa persiapan."},
      {"jp":"こんなに静かな住宅街で、深夜まで店が開いているわけがない。","kana":"こんなにしずかなじゅうたくがいで、しんやまでみせがひらいているわけがない。","romaji":"konnani shizuka na juutakugai de, shinya made mise ga hirai teiruwakeganai.","meaning":"Di area perumahan setenang ini tidak mungkin ada toko yang buka sampai larut malam."},
      {"jp":"彼が約束の時間を忘れるわけがないから、何か事情があるはずだ。","kana":"かれがやくそくのじかんをわすれるわけがないから、なにかじじょうがあるはずだ。","romaji":"kare ga yakusoku no jikan wo wasure ruwakeganaikara, nanika jijou gaaruhazuda.","meaning":"Tidak mungkin dia lupa waktu janji, jadi pasti ada suatu alasan."},
      {"jp":"一度も練習していないのに、いきなり本番でうまくできるわけがない。","kana":"いちどもれんしゅうしていないのに、いきなりほんばんでうまくできるわけがない。","romaji":"ichido mo renshuu shiteinainoni, ikinari honban deumakudekiruwakeganai.","meaning":"Kalau tidak pernah latihan, tidak mungkin langsung bisa melakukannya dengan baik saat tampil."},
      {"jp":"パスポートなしで国際線に乗れるわけがありません。","kana":"ぱすぽーとなしでこくさいせんにのれるわけがありません。","romaji":"pasupooto nashide kokusaisen ni nore ruwakegaarimasen.","meaning":"Tidak mungkin bisa naik penerbangan internasional tanpa paspor."}
    ]}
  ]},

  {id:"GR-N2-63",level:"N2",title:"〜というものではない / 〜というものでもない",summary:"Menyatakan bahwa sesuatu tidak selalu bisa disimpulkan seperti itu.",groups:[
    {name:"〜というものではない / 〜というものでもない",description:"Dipakai untuk menyangkal generalisasi yang terlalu sederhana.",sentences:[
      {"jp":"日本語は長く勉強すればいいというものではなく、使い方も大事だ。","kana":"にほんごはながくべんきょうすればいいというものではなく、つかいかたもだいじだ。","romaji":"nihongo ha nagaku benkyou surebaiitoiumonodehanaku, tsukaikata mo daiji da.","meaning":"Belajar bahasa Jepang bukan cuma soal belajar lama, cara memakainya juga penting."},
      {"jp":"安ければいいというものではなく、住みやすさも考えたい。","kana":"やすければいいというものではなく、すみやすさもかんがえたい。","romaji":"yasuke rebaiitoiumonodehanaku, sumi yasusamo kangae tai.","meaning":"Tempat tinggal bukan berarti yang murah saja sudah cukup, kenyamanan juga ingin saya pertimbangkan."},
      {"jp":"謝ればそれで済むというものでもない場面もある。","kana":"あやまればそれですむというものでもないばめんもある。","romaji":"ayamare basorede sumu toiumonodemonai bamen moaru.","meaning":"Ada situasi di mana meminta maaf saja tidak otomatis menyelesaikan semuanya."},
      {"jp":"多言語化すれば伝わるというものではなく、案内の見やすさも必要だ。","kana":"たげんごかすればつたわるというものではなく、あんないのみやすさもひつようだ。","romaji":"tagengo kasu reba tsutawa rutoiumonodehanaku, annai no miya susamo hitsuyou da.","meaning":"Bukan berarti kalau sudah dibuat multibahasa semua akan langsung tersampaikan, keterbacaan petunjuk juga perlu."},
      {"jp":"急げば早く終わるというものではないので、まず落ち着いて確認しよう。","kana":"いそげばはやくおわるというものではないので、まずおちついてかくにんしよう。","romaji":"isoge ba hayaku owa rutoiumonodehanainode, mazu ochitsui te kakuninshi you.","meaning":"Bukan berarti kalau diburu semuanya jadi cepat selesai, jadi mari tenang dan periksa dulu."}
    ]}
  ]},

  {id:"GR-N2-64",level:"N2",title:"〜のみならず(〜も)",summary:"Menyatakan tidak hanya A, tetapi juga B.",groups:[
    {name:"〜のみならず(〜も)",description:"Nuansanya formal dan banyak dipakai dalam tulisan.",sentences:[
      {"jp":"このイベントは学生のみならず、地域の大人にも人気がある。","kana":"このいべんとはがくせいのみならず、ちいきのおとなにもにんきがある。","romaji":"kono ibento ha gakusei nominarazu, chiiki no otona nimo ninki gaaru.","meaning":"Acara ini populer bukan hanya di kalangan mahasiswa, tetapi juga warga dewasa di sekitarnya."},
      {"jp":"日本語のみならず、英語での案内も充実してきた。","kana":"にほんごのみならず、えいごでのあんないもじゅうじつしてきた。","romaji":"nihongo nominarazu, eigo deno annai mo juujitsu shitekita.","meaning":"Bukan hanya bahasa Jepang, petunjuk dalam bahasa Inggris juga makin lengkap."},
      {"jp":"彼は接客のみならず、在庫管理まで任されている。","kana":"かれはせっきゃくのみならず、ざいこかんりまでまかされている。","romaji":"kareha sekkyaku nominarazu, zaikokanri made makasa reteiru.","meaning":"Dia tidak hanya menangani pelayanan pelanggan, tetapi juga dipercaya mengelola stok."},
      {"jp":"この制度は住民のみならず、観光客にも影響を与える。","kana":"このせいどはじゅうみんのみならず、かんこうきゃくにもえいきょうをあたえる。","romaji":"kono seido ha juumin nominarazu, kankoukyaku nimo eikyou wo atae ru.","meaning":"Sistem ini berdampak bukan hanya kepada warga, tetapi juga turis."},
      {"jp":"その先生は授業のみならず、進路相談にも親身だ。","kana":"そのせんせいはじゅぎょうのみならず、しんろそうだんにもしんみだ。","romaji":"sono sensei ha jugyou nominarazu, shinro soudan nimo shinmi da.","meaning":"Sensei itu bukan hanya baik saat mengajar, tetapi juga sangat perhatian dalam konsultasi karier."}
    ]}
  ]},

  {id:"GR-N2-65",level:"N2",title:"〜に限らず",summary:"Menyatakan bahwa sesuatu berlaku tidak hanya untuk satu hal yang disebut.",groups:[
    {name:"〜に限らず",description:"Dipakai untuk memperluas cakupan secara netral.",sentences:[
      {"jp":"駅前に限らず、この地域全体で家賃が上がっている。","kana":"えきまえにかぎらず、このちいきぜんたいでやちんがあがっている。","romaji":"ekimae ni kagira zu, kono chiiki zentai de yachin ga aga tteiru.","meaning":"Bukan hanya area depan stasiun, sewa di seluruh daerah ini juga sedang naik."},
      {"jp":"日本人に限らず、初めて来た人にはこの案内が分かりにくい。","kana":"にほんじんにかぎらず、はじめてきたにんにはこのあんないがわかりにくい。","romaji":"nihonjin ni kagira zu, hajimete kita nin nihakono annai ga waka rinikui.","meaning":"Bukan hanya orang Jepang, bagi orang yang baru datang petunjuk ini memang sulit dipahami."},
      {"jp":"平日に限らず、土日もこのクリニックはかなり混んでいる。","kana":"へいじつにかぎらず、どにちもこのくりにっくはかなりこんでいる。","romaji":"heijitsu ni kagira zu, donichi mokono kurinikku hakanari kon deiru.","meaning":"Bukan hanya hari kerja, klinik ini juga cukup ramai pada Sabtu dan Minggu."},
      {"jp":"若者に限らず、高齢者にもスマホ手続きの負担が大きい。","kana":"わかものにかぎらず、こうれいしゃにもすまほてつづきのふたんがおおきい。","romaji":"wakamono ni kagira zu, koureisha nimo sumaho tetsuzuki no futan ga ookii.","meaning":"Bukan hanya anak muda, orang lanjut usia pun terbebani oleh prosedur via ponsel."},
      {"jp":"東京に限らず、地方都市でも外国人向けの支援が必要だと思う。","kana":"とうきょうにかぎらず、ちほうとしでもがいこくじんむけのしえんがひつようだとおもう。","romaji":"toukyou ni kagira zu, chihoutoshi demo gaikokujin muke no shien ga hitsuyou dato omou.","meaning":"Menurut saya dukungan bagi warga asing dibutuhkan bukan hanya di Tokyo, tetapi juga di kota-kota daerah."}
    ]}
  ]},

  {id:"GR-N2-66",level:"N2",title:"〜はもとより(〜も)",summary:"Menyatakan tentu saja A, apalagi juga B.",groups:[
    {name:"〜はもとより(〜も)",description:"Lebih formal daripada もちろん.",sentences:[
      {"jp":"駅員はもとより、近くの店員まで道案内に慣れていた。","kana":"えきいんはもとより、ちかくのてんいんまでみちあんないになれていた。","romaji":"ekiin hamotoyori, chikaku no ten'in made michiannai ni nare teita.","meaning":"Tentu saja petugas stasiun, bahkan pegawai toko di dekat situ pun terbiasa memberi petunjuk jalan."},
      {"jp":"日本語はもとより、英語での説明まで必要になる場面が増えた。","kana":"にほんごはもとより、えいごでのせつめいまでひつようになるばめんがふえた。","romaji":"nihongo hamotoyori, eigo deno setsumei made hitsuyou ninaru bamen ga fue ta.","meaning":"Tentu saja bahasa Jepang, bahkan penjelasan dalam bahasa Inggris pun makin sering diperlukan."},
      {"jp":"この図書館は本はもとより、学習スペースも充実している。","kana":"このとしょかんはほんはもとより、がくしゅうすぺーすもじゅうじつしている。","romaji":"kono toshokan ha hon hamotoyori, gakushuu supeesu mo juujitsu shiteiru.","meaning":"Perpustakaan ini tentu saja memiliki buku, bahkan area belajarnya pun sangat lengkap."},
      {"jp":"安全面はもとより、子どもが楽しめる工夫も考えられている。","kana":"あんぜんめんはもとより、こどもがたのしめるくふうもかんがえられている。","romaji":"anzenmen hamotoyori, kodomo ga tanoshi meru kufuu mo kangae rareteiru.","meaning":"Tentu saja aspek keamanan diperhatikan, dan bahkan unsur agar anak-anak bisa menikmatinya juga dipikirkan."},
      {"jp":"家賃はもとより、初期費用の高さにも驚いた。","kana":"やちんはもとより、しょきひようのたかさにもおどろいた。","romaji":"yachin hamotoyori, shoki hiyou no takasa nimo odoroi ta.","meaning":"Tentu saja sewanya sendiri mahal, dan saya juga terkejut dengan tingginya biaya awal."}
    ]}
  ]},

  {id:"GR-N2-67",level:"N2",title:"〜うえに",summary:"Menyatakan penambahan hal lain, biasanya searah, artinya selain itu, di samping itu.",groups:[
    {name:"〜うえに",description:"Bisa dipakai untuk hal positif maupun negatif.",sentences:[
      {"jp":"このマンションは駅に近いうえに、スーパーもすぐそばにある。","kana":"このまんしょんはえきにちかいうえに、すーぱーもすぐそばにある。","romaji":"kono manshon ha eki ni chikai ueni, suupaa mosugusobaniaru.","meaning":"Apartemen ini selain dekat stasiun, supermarketnya juga ada di dekat sini."},
      {"jp":"今日は風が強いうえに、気温まで下がってきた。","kana":"こんにちはかぜがつよいうえに、きおんまでさがってきた。","romaji":"konnichiha kaze ga tsuyoi ueni, kion made saga ttekita.","meaning":"Hari ini selain anginnya kencang, suhunya juga turun."},
      {"jp":"彼女は説明が丁寧なうえに、質問にも落ち着いて答えてくれる。","kana":"かのじょはせつめいがていねいなうえに、しつもんにもおちついてこたえてくれる。","romaji":"kanojo ha setsumei ga teinei naueni, shitsumon nimo ochitsui te kotae tekureru.","meaning":"Dia selain menjelaskan dengan rinci, juga menjawab pertanyaan dengan tenang."},
      {"jp":"連休前で店が混んでいるうえに、店員も少なくて大変そうだった。","kana":"れんきゅうまえでみせがこんでいるうえに、てんいんもすくなくてたいへんそうだった。","romaji":"renkyuumae de mise ga kon deiruueni, ten'in mo sukunaku te taihen soudatta.","meaning":"Menjelang libur panjang tokonya ramai, dan ditambah stafnya sedikit sehingga terlihat kewalahan."},
      {"jp":"この制度は手続きが簡単なうえに、相談窓口も分かりやすい。","kana":"このせいどはてつづきがかんたんなうえに、そうだんまどぐちもわかりやすい。","romaji":"kono seido ha tetsuzuki ga kantan naueni, soudanmadoguchi mo waka riyasui.","meaning":"Sistem ini selain prosedurnya sederhana, loket konsultasinya juga mudah dipahami."}
    ]}
  ]},

  {id:"GR-N2-68",level:"N2",title:"〜も〜ば、〜も",summary:"Menyatakan beberapa sisi atau sifat sekaligus.",groups:[
    {name:"〜も〜ば、〜も",description:"Sering dipakai untuk menilai orang atau benda dari dua arah.",sentences:[
      {"jp":"この町は家賃も安ければ、交通の便も悪くない。","kana":"このまちはやちんもやすければ、こうつうのびんもわるくない。","romaji":"kono machi ha yachin mo yasuke reba, koutsuu no bin mo waruku nai.","meaning":"Kota ini sewanya murah, dan akses transportasinya juga tidak buruk."},
      {"jp":"彼は仕事も早ければ、説明も分かりやすい。","kana":"かれはしごともはやければ、せつめいもわかりやすい。","romaji":"kareha shigoto mo hayake reba, setsumei mo waka riyasui.","meaning":"Dia kerjanya cepat, dan penjelasannya juga mudah dipahami."},
      {"jp":"そのイベントは楽しい面もあれば、準備が大変な面もある。","kana":"そのいべんとはたのしいめんもあれば、じゅんびがたいへんなめんもある。","romaji":"sono ibento ha tanoshii men moareba, junbi ga taihen na men moaru.","meaning":"Acara itu ada sisi menyenangkannya, tapi ada juga sisi persiapannya melelahkan."},
      {"jp":"日本での生活は便利なこともあれば、細かい手続きに戸惑うこともある。","kana":"にっぽんでのせいかつはべんりなこともあれば、こまかいてつづきにとまどうこともある。","romaji":"nippon deno seikatsu ha benri nakotomoareba, komakai tetsuzuki ni tomadou kotomoaru.","meaning":"Hidup di Jepang ada praktisnya, tapi ada juga saat-saat kita bingung oleh prosedur yang detail."},
      {"jp":"このアプリは見やすいし、検索もしやすければ共有も簡単だ。","kana":"このあぷりはみやすいし、けんさくもしやすければきょうゆうもかんたんだ。","romaji":"kono apuri ha miya suishi, kensaku moshiyasukereba kyouyuu mo kantan da.","meaning":"Aplikasi ini mudah dilihat, mudah dicari, dan juga mudah dibagikan."}
    ]}
  ]},

  {id:"GR-N2-69",level:"N2",title:"〜を問わず",summary:"Menyatakan tanpa memandang perbedaan jenis, waktu, usia, dan sebagainya.",groups:[
    {name:"〜を問わず",description:"Sering dipakai untuk aturan atau cakupan yang luas.",sentences:[
      {"jp":"この交流会は年齢を問わず参加できます。","kana":"このこうりゅうかいはねんれいをとわずさんかできます。","romaji":"kono kouryuukai ha nenrei wo towa zu sanka dekimasu.","meaning":"Acara pertukaran ini bisa diikuti tanpa memandang usia."},
      {"jp":"昼夜を問わず救急の相談ができる番号を確認しておくと安心だ。","kana":"ちゅうやをとわずきゅうきゅうのそうだんができるばんごうをかくにんしておくとあんしんだ。","romaji":"chuuya wo towa zu kyuukyuu no soudan gadekiru bangou wo kakuninshi teokuto anshin da.","meaning":"Rasanya tenang kalau sudah tahu nomor layanan darurat yang bisa dihubungi siang maupun malam."},
      {"jp":"経験を問わず応募可能な求人だったので、留学生にも人気がある。","kana":"けいけんをとわずおうぼかのうなきゅうじんだったので、りゅうがくせいにもにんきがある。","romaji":"keiken wo towa zu oubo kanouna kyuujin dattanode, ryuugakusei nimo ninki gaaru.","meaning":"Karena lowongan ini bisa dilamar tanpa memandang pengalaman, lowongan ini populer juga di kalangan pelajar asing."},
      {"jp":"国籍を問わず利用できる相談窓口が増えてきた。","kana":"こくせきをとわずりようできるそうだんまどぐちがふえてきた。","romaji":"kokuseki wo towa zu riyou dekiru soudanmadoguchi ga fue tekita.","meaning":"Loket konsultasi yang bisa dipakai tanpa memandang kewarganegaraan mulai bertambah."},
      {"jp":"この施設は天候を問わず子どもが遊べるのが魅力だ。","kana":"このしせつはてんこうをとわずこどもがあそべるのがみりょくだ。","romaji":"kono shisetsu ha tenkou wo towa zu kodomo ga asobe runoga miryoku da.","meaning":"Daya tarik fasilitas ini adalah anak-anak bisa bermain di sini tanpa memandang cuaca."}
    ]}
  ]},

  {id:"GR-N2-70",level:"N2",title:"〜もかまわず",summary:"Menyatakan melakukan sesuatu tanpa peduli keadaan atau penilaian sekitar.",groups:[
    {name:"〜もかまわず",description:"Sering bernuansa kritik atau kekagetan.",sentences:[
      {"jp":"彼は人目もかまわず、駅前で友達と再会して泣いていた。","kana":"かれはひとめもかまわず、えきまえでともだちとさいかいしてないていた。","romaji":"kareha hitome mokamawazu, ekimae de tomodachi to saikai shite nai teita.","meaning":"Dia sampai menangis di depan stasiun saat bertemu lagi dengan temannya tanpa peduli pandangan orang."},
      {"jp":"時間もかまわず電話してしまって、あとで申し訳なくなった。","kana":"じかんもかまわずでんわしてしまって、あとでもうしわけなくなった。","romaji":"jikan mokamawazu denwa shiteshimatte, atode moushiwake nakunatta.","meaning":"Saya menelepon tanpa mempedulikan waktunya, lalu belakangan merasa tidak enak."},
      {"jp":"雨もかまわず練習を続ける部員たちを見て驚いた。","kana":"あめもかまわずれんしゅうをつづけるぶいんたちをみておどろいた。","romaji":"ame mokamawazu renshuu wo tsuzuke ru buin tachiwo mite odoroi ta.","meaning":"Saya kaget melihat anggota klub itu terus latihan tanpa peduli hujan."},
      {"jp":"彼は服の汚れもかまわず、転んだ子どもをすぐ助けに行った。","kana":"かれはふくのよごれもかまわず、ころんだこどもをすぐたすけにいった。","romaji":"kareha fuku no yogore mokamawazu, koron da kodomo wosugu tasuke ni itta.","meaning":"Tanpa peduli bajunya akan kotor, dia langsung menolong anak yang jatuh."},
      {"jp":"周囲の反対もかまわず、その店は深夜営業を始めたらしい。","kana":"しゅういのはんたいもかまわず、そのみせはしんやえいぎょうをはじめたらしい。","romaji":"shuui no hantai mokamawazu, sono mise ha shinya eigyou wo hajime tarashii.","meaning":"Katanya toko itu mulai buka sampai larut malam tanpa mempedulikan penolakan sekitar."}
    ]}
  ]},

  {id:"GR-N2-71",level:"N2",title:"〜はともかく(として)",summary:"Menyatakan untuk sementara membiarkan topik pertama dan fokus ke hal lain yang lebih penting.",groups:[
    {name:"〜はともかく(として)",description:"Sering diterjemahkan terlepas dari, soal itu nanti dulu.",sentences:[
      {"jp":"細かいデザインはともかくとして、まず内容を固めましょう。","kana":"こまかいでざいんはともかくとして、まずないようをかためましょう。","romaji":"komakai dezain hatomokakutoshite, mazu naiyou wo katame mashou.","meaning":"Soal desain yang rinci nanti dulu, mari mantapkan isinya terlebih dahulu."},
      {"jp":"結果はともかく、最後までやり切ったことに意味がある。","kana":"けっかはともかく、さいごまでやりきったことにいみがある。","romaji":"kekka hatomokaku, saigo madeyari kitsu takotoni imi gaaru.","meaning":"Terlepas dari hasilnya, ada makna pada fakta bahwa kita menyelesaikannya sampai akhir."},
      {"jp":"費用はともかくとして、手続きにどれくらい時間がかかるか知りたい。","kana":"ひようはともかくとして、てつづきにどれくらいじかんがかかるかしりたい。","romaji":"hiyou hatomokakutoshite, tetsuzuki nidorekurai jikan gakakaruka shiri tai.","meaning":"Terlepas dari biaya, saya ingin tahu berapa lama prosesnya."},
      {"jp":"好き嫌いはともかく、この案は現実的だと思う。","kana":"すききらいはともかく、このあんはげんじつてきだとおもう。","romaji":"suki kirai hatomokaku, kono an ha genjitsuteki dato omou.","meaning":"Terlepas dari suka atau tidak, menurut saya usulan ini realistis."},
      {"jp":"天気はともかく、交通機関だけは止まらないでほしい。","kana":"てんきはともかく、こうつうきかんだけはとまらないでほしい。","romaji":"tenki hatomokaku, koutsuukikan dakeha toma ranaidehoshii.","meaning":"Soal cuaca bagaimana nanti dulu, saya hanya berharap transportasinya jangan sampai berhenti."}
    ]}
  ]},

  {id:"GR-N2-72",level:"N2",title:"〜はさておき",summary:"Menyatakan topik pertama disisihkan dulu untuk membicarakan hal utama.",groups:[
    {name:"〜はさておき",description:"Mirip dengan はともかく, tetapi terasa lebih jelas menunda topik itu.",sentences:[
      {"jp":"冗談はさておき、そろそろ会議を始めましょう。","kana":"じょうだんはさておき、そろそろかいぎをはじめましょう。","romaji":"joudan hasateoki, sorosoro kaigi wo hajime mashou.","meaning":"Leluconnya nanti dulu, mari mulai rapatnya."},
      {"jp":"観光の話はさておき、まず住む場所を決めないといけない。","kana":"かんこうのはなしはさておき、まずすむばしょをきめないといけない。","romaji":"kankou no hanashi hasateoki, mazu sumu basho wo kime naitoikenai.","meaning":"Soal wisata nanti dulu, pertama-tama saya harus menentukan tempat tinggal."},
      {"jp":"見た目はさておき、このカバンはとにかく軽くて使いやすい。","kana":"みためはさておき、このかばんはとにかくかるくてつかいやすい。","romaji":"mitame hasateoki, kono kaban hatonikaku karuku te tsukai yasui.","meaning":"Soal penampilannya nanti dulu, tas ini yang jelas ringan dan mudah dipakai."},
      {"jp":"感想はさておき、提出期限だけは今日中に確認してください。","kana":"かんそうはさておき、ていしゅつきげんだけはきょうじゅうにかくにんしてください。","romaji":"kansou hasateoki, teishutsukigen dakeha kyoujuu ni kakuninshi tekudasai.","meaning":"Pendapatnya nanti dulu, yang penting tolong cek batas pengumpulannya hari ini."},
      {"jp":"昔の話はさておき、今できる対応を考えよう。","kana":"むかしのはなしはさておき、いまできるたいおうをかんがえよう。","romaji":"mukashi no hanashi hasateoki, ima dekiru taiou wo kangae you.","meaning":"Cerita masa lalu nanti dulu, mari pikirkan respons yang bisa dilakukan sekarang."}
    ]}
  ]},

  {id:"GR-N2-73",level:"N2",title:"〜をめぐって",summary:"Menyatakan seputar sesuatu yang menjadi pusat pembahasan, konflik, atau gerakan.",groups:[
    {name:"〜をめぐって",description:"Sering dipakai dalam berita dan diskusi sosial.",sentences:[
      {"jp":"再開発計画をめぐって、住民説明会が何度も開かれている。","kana":"さいかいはつけいかくをめぐって、じゅうみんせつめいかいがなんどもひらかれている。","romaji":"saikaihatsu keikaku womegutte, juumin setsumeikai ga nando mo hiraka reteiru.","meaning":"Seputar rencana pembangunan ulang, sesi penjelasan untuk warga sudah diadakan berkali-kali."},
      {"jp":"その予算案をめぐって、議論が長引いているらしい。","kana":"そのよさんあんをめぐって、ぎろんがながびいているらしい。","romaji":"sono yosan'an womegutte, giron ga nagabii teirurashii.","meaning":"Katanya perdebatan soal rancangan anggaran itu berlangsung panjang."},
      {"jp":"駅前の喫煙所をめぐって、賛成と反対の意見が分かれている。","kana":"えきまえのきつえんじょをめぐって、さんせいとはんたいのいけんがわかれている。","romaji":"ekimae no kitsuenjo womegutte, sansei to hantai no iken ga waka reteiru.","meaning":"Seputar area merokok di depan stasiun, pendapat yang setuju dan menolak terpecah."},
      {"jp":"留学生支援をめぐる取り組みが、最近少しずつ広がってきた。","kana":"りゅうがくせいしえんをめぐるとりくみが、さいきんすこしずつひろがってきた。","romaji":"ryuugakusei shien womeguru torikumi ga, saikin sukoshi zutsu hiroga ttekita.","meaning":"Upaya seputar dukungan bagi pelajar internasional belakangan mulai meluas sedikit demi sedikit."},
      {"jp":"文化財の保存をめぐって、地域の人たちが話し合いを続けている。","kana":"ぶんかざいのほぞんをめぐって、ちいきのにんたちがはなしあいをつづけている。","romaji":"bunkazai no hozon womegutte, chiiki no nin tachiga hanashiai wo tsuzuke teiru.","meaning":"Warga daerah terus berdiskusi mengenai pelestarian aset budaya."}
    ]}
  ]},

  {id:"GR-N2-74",level:"N2",title:"〜に応えて / 〜に応える",summary:"Menyatakan menanggapi harapan, permintaan, atau dukungan.",groups:[
    {name:"〜に応えて / 〜に応える",description:"Bisa dipakai untuk respons konkret maupun hasil yang sesuai harapan.",sentences:[
      {"jp":"住民の要望に応えて、区役所の案内が多言語化された。","kana":"じゅうみんのようぼうにこたえて、くやくしょのあんないがたげんごかされた。","romaji":"juumin no youbou ni kotae te, kuyakusho no annai ga tagengo kasa reta.","meaning":"Menanggapi permintaan warga, petunjuk di kantor wilayah dibuat multibahasa."},
      {"jp":"ファンの声に応えて、駅前で追加公演が決まった。","kana":"ふぁんのこえにこたえて、えきまえでついかこうえんがきまった。","romaji":"fan no koe ni kotae te, ekimae de tsuikakouen ga kima tta.","meaning":"Menanggapi suara penggemar, pertunjukan tambahan diputuskan diadakan di dekat stasiun."},
      {"jp":"先生の期待に応えられるよう、毎日少しずつ準備している。","kana":"せんせいのきたいにこたえられるよう、まいにちすこしずつじゅんびしている。","romaji":"sensei no kitai ni kotae rareruyou, mainichi sukoshi zutsu junbi shiteiru.","meaning":"Saya sedang mempersiapkan sedikit demi sedikit setiap hari agar bisa memenuhi harapan sensei."},
      {"jp":"地域の不安に応える形で、防災セミナーが開かれた。","kana":"ちいきのふあんにこたえるかたちで、ぼうさいせみなーがひらかれた。","romaji":"chiiki no fuan ni kotae ru katachi de, bousai seminaa ga hiraka reta.","meaning":"Dalam bentuk menanggapi kecemasan warga, seminar kesiapsiagaan bencana diadakan."},
      {"jp":"応援に応えて、選手たちは最後まで走りきった。","kana":"おうえんにこたえて、せんしゅたちはさいごまではしりきった。","romaji":"ouen ni kotae te, senshu tachiha saigo made hashiri kitta.","meaning":"Menjawab dukungan para pendukung, para atlet berlari sampai akhir."}
    ]}
  ]},

  {id:"GR-N2-75",level:"N2",title:"〜をはじめ / 〜をはじめとして",summary:"Menyatakan menyebut contoh utama lalu masih ada yang lain juga.",groups:[
    {name:"〜をはじめ / 〜をはじめとして",description:"Dipakai untuk memperkenalkan perwakilan dari kelompok.",sentences:[
      {"jp":"東京をはじめ、多くの都市で外国人向け相談窓口が増えている。","kana":"とうきょうをはじめ、おおくのとしでがいこくじんむけそうだんまどぐちがふえている。","romaji":"toukyou wohajime, ooku no toshi de gaikokujin muke soudanmadoguchi ga fue teiru.","meaning":"Dimulai dari Tokyo, banyak kota juga menambah loket konsultasi bagi orang asing."},
      {"jp":"店長をはじめとして、スタッフ全員が丁寧に対応してくれた。","kana":"てんちょうをはじめとして、すたっふぜんいんがていねいにたいおうしてくれた。","romaji":"tenchou wohajimetoshite, sutaffu zen'in ga teinei ni taiou shitekureta.","meaning":"Dimulai dari manajer toko, semua staf melayani dengan sangat sopan."},
      {"jp":"日本語の先生をはじめ、たくさんの人に支えてもらった。","kana":"にほんごのせんせいをはじめ、たくさんのにんにささえてもらった。","romaji":"nihongo no sensei wohajime, takusanno nin ni sasae temoratta.","meaning":"Dimulai dari sensei bahasa Jepang, saya banyak dibantu oleh banyak orang."},
      {"jp":"駅周辺をはじめ、この地域は夜でも比較的明るい。","kana":"えきしゅうへんをはじめ、このちいきはよるでもひかくてきあかるい。","romaji":"ekishuuhen wohajime, kono chiiki ha yoru demo hikakuteki akarui.","meaning":"Dimulai dari area sekitar stasiun, daerah ini relatif terang bahkan pada malam hari."},
      {"jp":"春をはじめとして、京都はどの季節も観光客が多い。","kana":"はるをはじめとして、きょうとはどのきせつもかんこうきゃくがおおい。","romaji":"haru wohajimetoshite, kyouto hadono kisetsu mo kankoukyaku ga ooi.","meaning":"Dimulai dari musim semi, Kyoto ramai turis di musim mana pun."}
    ]}
  ]},

  {id:"GR-N2-76",level:"N2",title:"〜限り",summary:"Menyatakan selama rentang itu, atau sejauh kapasitas tertentu masih ada.",groups:[
    {name:"〜限り",description:"Di N2, bentuk ini sering menunjukkan batas maksimal atau sepanjang durasi tertentu.",sentences:[
      {"jp":"見える限り、ホームの先まで人でいっぱいだった。","kana":"みえるかぎり、ほーむのさきまでにんでいっぱいだった。","romaji":"mie ru kagiri, hoomu no saki made nin deippaidatta.","meaning":"Sejauh mata memandang, sampai ujung peron dipenuhi orang."},
      {"jp":"私の知る限り、この地域で一番朝早く開く店です。","kana":"わたしのしるかぎり、このちいきでいちばんあさはやくひらくみせです。","romaji":"watashi no shiru kagiri, kono chiiki de ichiban asahayaku hiraku mise desu.","meaning":"Sejauh yang saya tahu, ini toko yang buka paling pagi di daerah ini."},
      {"jp":"体力の続く限り、今年も山登りに挑戦したい。","kana":"たいりょくのつづくかぎり、こんねんもやまのぼりにちょうせんしたい。","romaji":"tairyoku no tsuzuku kagiri, konnen mo yamanobori ni chousen shitai.","meaning":"Selama tenaga saya masih cukup, tahun ini pun saya ingin mencoba mendaki gunung."},
      {"jp":"許される限り、学生の負担は減らしたいと先生は言っていた。","kana":"ゆるされるかぎり、がくせいのふたんはへらしたいとせんせいはいっていた。","romaji":"yurusa reru kagiri, gakusei no futan ha hera shitaito sensei ha itte ita.","meaning":"Sensei bilang beliau ingin mengurangi beban mahasiswa sejauh hal itu diizinkan."},
      {"jp":"できる限り簡単な日本語で説明してもらえて助かった。","kana":"できるかぎりかんたんなにほんごでせつめいしてもらえてたすかった。","romaji":"dekiru kagiri kantan na nihongo de setsumeishi temoraete tasuka tta.","meaning":"Saya terbantu karena penjelasannya diberikan dengan bahasa Jepang sesederhana mungkin."}
    ]}
  ]},

  {id:"GR-N2-77",level:"N2",title:"〜からして",summary:"Menyatakan bahkan dari titik itu saja sudah terlihat suatu penilaian.",groups:[
    {name:"〜からして",description:"Nuansanya dari ... saja sudah.",sentences:[
      {"jp":"この店は入口の雰囲気からして落ち着いていて入りやすい。","kana":"このみせはいりぐちのふんいきからしておちついていていりやすい。","romaji":"kono mise ha iriguchi no fun'iki karashite ochitsui teite iri yasui.","meaning":"Toko ini dari suasana pintu masuknya saja sudah terasa tenang dan mudah dimasuki."},
      {"jp":"彼はあいさつの仕方からして、とても礼儀正しい。","kana":"かれはあいさつのしかたからして、とてもれいぎただしい。","romaji":"kareha aisatsuno shikata karashite, totemo reigitadashi i.","meaning":"Dari cara menyapanya saja sudah terlihat bahwa dia sangat sopan."},
      {"jp":"この書類は項目の多さからして、準備に時間がかかりそうだ。","kana":"このしょるいはこうもくのおおさからして、じゅんびにじかんがかかりそうだ。","romaji":"kono shorui ha koumoku no oosa karashite, junbi ni jikan gakakarisouda.","meaning":"Dari banyaknya kolom saja, kelihatannya dokumen ini butuh waktu lama untuk disiapkan."},
      {"jp":"駅名の読み方からして、初めての人には難しいかもしれない。","kana":"えきめいのよみかたからして、はじめてのにんにはむずかしいかもしれない。","romaji":"ekimei no yomikata karashite, hajimete no nin niha muzukashii kamoshirenai.","meaning":"Dari cara membaca nama stasiunnya saja, mungkin ini sulit bagi orang yang baru pertama kali datang."},
      {"jp":"あの人は持ち物からして仕事ができそうな雰囲気がある。","kana":"あのにんはもちものからしてしごとができそうなふんいきがある。","romaji":"ano nin ha mochimono karashite shigoto gadekisouna fun'iki gaaru.","meaning":"Dari barang bawaan yang dipakainya saja, ada aura bahwa dia sangat kompeten bekerja."}
    ]}
  ]},

  {id:"GR-N2-78",level:"N2",title:"〜にわたって",summary:"Menyatakan sesuatu berlangsung atau mencakup rentang yang luas dalam waktu, area, atau jumlah.",groups:[
    {name:"〜にわたって",description:"Sering dipakai untuk durasi panjang atau cakupan luas.",sentences:[
      {"jp":"この工事は三か月にわたって行われる予定です。","kana":"このこうじはさんかがつにわたっておこなわれるよていです。","romaji":"kono kouji ha san ka gatsu niwatatte okonawa reru yotei desu.","meaning":"Pekerjaan konstruksi ini rencananya akan berlangsung selama tiga bulan."},
      {"jp":"説明会では二日間にわたって生活情報が紹介された。","kana":"せつめいかいではふつかかんにわたってせいかつじょうほうがしょうかいされた。","romaji":"setsumeikai deha futsukakan niwatatte seikatsujouhou ga shoukai sareta.","meaning":"Dalam sesi penjelasan, informasi kehidupan diperkenalkan selama dua hari."},
      {"jp":"川沿いの道が数キロにわたってライトアップされていた。","kana":"かわぞいのみちがかずきろにわたってらいとあっぷされていた。","romaji":"kawazoi no michi ga kazu kiro niwatatte raitoappu sareteita.","meaning":"Jalan di sepanjang sungai itu diterangi lampu sejauh beberapa kilometer."},
      {"jp":"長年にわたる調査の結果、この地域の歴史が詳しく分かってきた。","kana":"ながねんにわたるちょうさのけっか、このちいきのれきしがくわしくわかってきた。","romaji":"naganen niwataru chousa no kekka, kono chiiki no rekishi ga kuwashiku waka ttekita.","meaning":"Berkat penelitian selama bertahun-tahun, sejarah daerah ini mulai dipahami lebih rinci."},
      {"jp":"交流会では、学生から社会人まで幅広い立場の人が参加していた。","kana":"こうりゅうかいでは、がくせいからしゃかいじんまではばひろいたちばのにんがさんかしていた。","romaji":"kouryuukai deha, gakusei kara shakaijin made habahiroi tachiba no nin ga sanka shiteita.","meaning":"Dalam acara pertukaran itu, peserta yang hadir berasal dari latar yang sangat beragam, dari mahasiswa sampai pekerja."}
    ]}
  ]},

  {id:"GR-N2-79",level:"N2",title:"〜だけ",summary:"Menyatakan sesuai kadar, sejauh, atau sebanyak itu.",groups:[
    {name:"〜だけ",description:"Di N2, bentuk ini sering muncul dalam nuansa sebatas, sebanyak, sejauh.",sentences:[
      {"jp":"できるだけ早く区役所へ行って、必要な手続きを済ませたい。","kana":"できるだけはやくくやくしょへいって、ひつようなてつづきをすませたい。","romaji":"dekirudake hayaku kuyakusho he itte, hitsuyou na tetsuzuki wo suma setai.","meaning":"Saya ingin pergi ke kantor wilayah secepat mungkin dan menyelesaikan prosedur yang dibutuhkan."},
      {"jp":"食べたいだけ取るのではなく、食べられる分だけにしたほうがいい。","kana":"たべたいだけとるのではなく、たべられるふんだけにしたほうがいい。","romaji":"tabeta idake toru nodehanaku, tabe rareru fun dakenishitahougaii.","meaning":"Daripada mengambil sebanyak yang diinginkan, lebih baik ambil sesuai yang bisa dimakan."},
      {"jp":"分かるだけでいいので、今の状況を説明してください。","kana":"わかるだけでいいので、いまのじょうきょうをせつめいしてください。","romaji":"waka rudakedeiinode, ima no joukyou wo setsumeishi tekudasai.","meaning":"Cukup sejauh yang Anda pahami, tolong jelaskan situasi saat ini."},
      {"jp":"見たいだけ写真を撮ったら、あとは景色そのものを楽しみたい。","kana":"みたいだけしゃしんをとったら、あとはけしきそのものをたのしみたい。","romaji":"mita idake shashin wo totsu tara, atoha keshiki sonomonowo tanoshimi tai.","meaning":"Setelah mengambil foto sebanyak yang saya mau, saya ingin menikmati pemandangannya secara langsung."},
      {"jp":"無理をするだけして倒れてしまっては意味がない。","kana":"むりをするだけしてたおれてしまってはいみがない。","romaji":"muri wosurudakeshite taore teshimatteha imi ganai.","meaning":"Tidak ada gunanya memaksakan diri sebanyak-banyaknya sampai akhirnya tumbang."}
    ]}
  ]},

  {id:"GR-N2-80",level:"N2",title:"〜ものだ",summary:"Menyatakan kecenderungan umum, rasa kagum, kenangan, atau nasihat yang terasa manusiawi.",groups:[
    {name:"〜ものだ",description:"Maknanya berubah sesuai konteks, jadi perhatikan nuansanya.",sentences:[
      {"jp":"春になると、この川沿いをゆっくり歩きたくなるものだ。","kana":"はるになると、このかわぞいをゆっくりあるきたくなるものだ。","romaji":"haru ninaruto, kono kawazoi woyukkuri aruki takunarumonoda.","meaning":"Begitu musim semi tiba, saya jadi ingin berjalan santai di sepanjang sungai ini."},
      {"jp":"初めて日本に来たころは、駅の複雑さに驚いたものだ。","kana":"はじめてにっぽんにきたころは、えきのふくざつさにおどろいたものだ。","romaji":"hajimete nippon ni kita koroha, eki no fukuzatsusa ni odoroi tamonoda.","meaning":"Waktu pertama datang ke Jepang dulu, saya benar-benar kagum dengan rumitnya stasiun."},
      {"jp":"人の親切は、離れて暮らしてみて初めて身にしみるものだ。","kana":"にんのしんせつは、はなれてくらしてみてはじめてみにしみるものだ。","romaji":"nin no shinsetsu ha, hanare te kurashi temite hajimete mini shimirumonoda.","meaning":"Kebaikan orang itu baru terasa sungguh-sungguh setelah kita hidup jauh dari rumah."},
      {"jp":"子どもは思っている以上に周りをよく見ているものです。","kana":"こどもはおもっているいじょうにまわりをよくみているものです。","romaji":"kodomo ha omotte iru ijou ni mawari woyoku mite irumonodesu.","meaning":"Anak-anak biasanya memperhatikan sekitar lebih dari yang kita kira."},
      {"jp":"忙しい時ほど、基本を忘れないようにしたいものだ。","kana":"いそがしいときほど、きほんをわすれないようにしたいものだ。","romaji":"isogashii toki hodo, kihon wo wasure naiyounishitaimonoda.","meaning":"Justru saat sibuk saya ingin berusaha tidak melupakan hal-hal dasar."}
    ]}
  ]},

  {id:"GR-N2-81",level:"N2",title:"〜ものではない",summary:"Menyatakan larangan, nasihat, atau penilaian umum bahwa sesuatu tidak patut dilakukan.",groups:[
    {name:"〜ものではない",description:"Sering dipakai oleh orang yang lebih tua, guru, atau dalam tulisan bernada nasihat.",sentences:[
      {"jp":"公共の場所では、大きな声で電話をするものではない。","kana":"こうきょうのばしょでは、おおきなこえででんわをするものではない。","romaji":"koukyou no basho deha, ooki na koe de denwa wosurumonodehanai.","meaning":"Di tempat umum, sebaiknya jangan menelepon dengan suara keras."},
      {"jp":"人の苦労を簡単に比べるものではないと思う。","kana":"にんのくろうをかんたんにくらべるものではないとおもう。","romaji":"nin no kurou wo kantan ni kurabe rumonodehanaito omou.","meaning":"Menurut saya, kesulitan orang tidak sepatutnya dibanding-bandingkan dengan mudah."},
      {"jp":"忙しいからといって、食事を抜くものではありません。","kana":"いそがしいからといって、しょくじをぬくものではありません。","romaji":"isogashii karatoitte, shokuji wo nuku monodehaarimasen.","meaning":"Hanya karena sibuk, bukan berarti kita pantas melewatkan makan."},
      {"jp":"借りた本に書き込みをするものではないよ。","kana":"かりたほんにかきこみをするものではないよ。","romaji":"kari ta hon ni kakikomi wosurumonodehanaiyo.","meaning":"Buku pinjaman itu tidak sepatutnya dicorat-coret ya."},
      {"jp":"失敗した人をみんなの前で責めるものではない。","kana":"しっぱいしたにんをみんなのまえでせめるものではない。","romaji":"shippai shita nin wominnano mae de seme rumonodehanai.","meaning":"Tidak pantas menyalahkan orang yang gagal di depan semua orang."}
    ]}
  ]},

  {id:"GR-N2-82",level:"N2",title:"〜ことだ",summary:"Menyatakan saran kuat atau hal terbaik yang sebaiknya dilakukan.",groups:[
    {name:"〜ことだ",description:"Sering muncul dalam nasihat praktis.",sentences:[
      {"jp":"日本で長く暮らすつもりなら、まず地域のルールを知ることだ。","kana":"にっぽんでながくくらすつもりなら、まずちいきのるーるをしることだ。","romaji":"nippon de nagaku kura sutsumorinara, mazu chiiki no ruuru wo shiru kotoda.","meaning":"Kalau berniat tinggal lama di Jepang, hal pertama yang sebaiknya dilakukan adalah memahami aturan setempat."},
      {"jp":"面接で緊張しやすいなら、声に出して練習することだ。","kana":"めんせつできんちょうしやすいなら、こえにだしてれんしゅうすることだ。","romaji":"mensetsu de kinchoushi yasuinara, koe ni dashi te renshuu surukotoda.","meaning":"Kalau mudah gugup saat wawancara, yang terbaik adalah berlatih dengan mengucapkan keras-keras."},
      {"jp":"体調を崩しやすい季節は、無理せず早めに休むことだ。","kana":"たいちょうをくずしやすいきせつは、むりせずはやめにやすむことだ。","romaji":"taichou wo kuzushi yasui kisetsu ha, muri sezu hayame ni yasumu kotoda.","meaning":"Pada musim saat tubuh mudah drop, yang terbaik adalah beristirahat lebih awal tanpa memaksakan diri."},
      {"jp":"新しい環境で友達を作りたいなら、自分から一度話しかけてみることだ。","kana":"あたらしいかんきょうでともだちをつくりたいなら、じぶんからいちどはなしかけてみることだ。","romaji":"atarashii kankyou de tomodachi wo tsukuri tainara, jibun kara ichido hanashi kaketemirukotoda.","meaning":"Kalau ingin punya teman di lingkungan baru, cobalah menyapa lebih dulu setidaknya sekali."},
      {"jp":"書類で困ったら、一人で悩まず窓口で聞くことです。","kana":"しょるいでこまったら、ひとりでなやまずまどぐちできくことです。","romaji":"shorui de komatsu tara, hitori de nayama zu madoguchi de kiku kotodesu.","meaning":"Kalau bingung soal dokumen, yang terbaik adalah bertanya di loket tanpa memikirkan sendiri."}
    ]}
  ]},

  {id:"GR-N2-83",level:"N2",title:"〜反面",summary:"Menyatakan di satu sisi ada sifat atau hasil tertentu, tetapi di sisi lain ada sisi berbeda juga.",groups:[
    {name:"〜反面",description:"Mirip 一方で tetapi sering terasa lebih formal dan evaluatif.",sentences:[
      {"jp":"この町は便利な反面、週末になると観光客でかなり混む。","kana":"このまちはべんりなはんめん、しゅうまつになるとかんこうきゃくでかなりこむ。","romaji":"kono machi ha benri na hanmen, shuumatsu ninaruto kankoukyaku dekanari komu.","meaning":"Di satu sisi kota ini praktis, tapi di sisi lain saat akhir pekan sangat ramai turis."},
      {"jp":"在宅勤務は通勤がなくて楽な反面、気持ちの切り替えが難しい。","kana":"ざいたくきんむはつうきんがなくてらくなはんめん、きもちのきりかえがむずかしい。","romaji":"zaitakukinmu ha tsuukin ganakute raku na hanmen, kimochi no kirikae ga muzukashii.","meaning":"Kerja dari rumah di satu sisi enak karena tidak perlu commute, tapi di sisi lain sulit memisahkan mode kerja dan istirahat."},
      {"jp":"新しい制度は分かりやすい反面、細かい例外には対応しにくい。","kana":"あたらしいせいどはわかりやすいはんめん、こまかいれいがいにはたいおうしにくい。","romaji":"atarashii seido ha waka riyasui hanmen, komakai reigai niha taiou shinikui.","meaning":"Sistem baru di satu sisi mudah dipahami, tapi di sisi lain sulit menangani pengecualian yang rinci."},
      {"jp":"駅近の部屋は便利な反面、夜でも少し騒がしい。","kana":"えきちかのへやはべんりなはんめん、よるでもすこしさわがしい。","romaji":"ekichika no heya ha benri na hanmen, yoru demo sukoshi sawagashii.","meaning":"Kamar dekat stasiun di satu sisi praktis, tapi di sisi lain agak berisik bahkan malam hari."},
      {"jp":"日本語で仕事ができるのは自信になる反面、間違えたくない気持ちも強くなる。","kana":"にほんごでしごとができるのはじしんになるはんめん、まちがえたくないきもちもつよくなる。","romaji":"nihongo de shigoto gadekirunoha jishin ninaru hanmen, machigae takunai kimochi mo tsuyoku naru.","meaning":"Bisa bekerja dalam bahasa Jepang di satu sisi menambah percaya diri, tapi di sisi lain membuat saya makin takut salah."}
    ]}
  ]},

  {id:"GR-N2-84",level:"N2",title:"〜だけのことはある",summary:"Menyatakan hasilnya memang pantas mengingat usaha, reputasi, atau nilainya.",groups:[
    {name:"〜だけのことはある",description:"Nuansanya positif, seperti memang tidak heran.",sentences:[
      {"jp":"人気店だけのことはあって、ランチの味も接客も満足だった。","kana":"にんきみせだけのことはあって、らんちのあじもせっきゃくもまんぞくだった。","romaji":"ninki mise dakenokotohaatte, ranchi no aji mo sekkyaku mo manzoku datta.","meaning":"Memang pantas disebut toko populer, rasa makan siangnya maupun layanannya sama-sama memuaskan."},
      {"jp":"毎日練習しているだけのことはあって、発表がとても自然だった。","kana":"まいにちれんしゅうしているだけのことはあって、はっぴょうがとてもしぜんだった。","romaji":"mainichi renshuu shiteirudakenokotohaatte, happyou gatotemo shizen datta.","meaning":"Tidak heran, karena latihan tiap hari presentasinya terdengar sangat alami."},
      {"jp":"長年この町で働いているだけのことはあって、彼は顔が広い。","kana":"ながねんこのまちではたらいているだけのことはあって、かれはかおがひろい。","romaji":"naganen kono machi de hatarai teirudakenokotohaatte, kareha kao ga hiroi.","meaning":"Pantas saja dia kenal banyak orang, karena memang sudah lama bekerja di kota ini."},
      {"jp":"老舗旅館だけのことはあり、おもてなしが細やかだった。","kana":"しにせりょかんだけのことはあり、おもてなしがささやかだった。","romaji":"shinise ryokan dakenokotohaari, omotenashiga sasayaka datta.","meaning":"Memang pantas disebut ryokan tua yang mapan, pelayanannya sangat penuh perhatian."},
      {"jp":"苦労して勉強しただけのことはあって、難しい質問にも落ち着いて答えていた。","kana":"くろうしてべんきょうしただけのことはあって、むずかしいしつもんにもおちついてこたえていた。","romaji":"kurou shite benkyou shitadakenokotohaatte, muzukashii shitsumon nimo ochitsui te kotae teita.","meaning":"Pantas saja, karena telah belajar dengan susah payah dia bisa menjawab pertanyaan sulit dengan tenang."}
    ]}
  ]},

  {id:"GR-N2-87",level:"N2",title:"〜ようがない",summary:"Menyatakan tidak ada cara untuk melakukan sesuatu.",groups:[
    {name:"〜ようがない",description:"Umumnya memakai masu-stem + ようがない.",sentences:[
      {"jp":"連絡先が分からないので、知らせようがない。","kana":"れんらくさきがわからないので、しらせようがない。","romaji":"renrakusaki ga waka ranainode, shirase youganai.","meaning":"Karena saya tidak tahu kontaknya, tidak ada cara untuk memberi tahu dia."},
      {"jp":"電車が全部止まってしまっては、どうしようもないし帰りようがない。","kana":"でんしゃがぜんぶとまってしまっては、どうしようもないしかえりようがない。","romaji":"densha ga zenbu toma tteshimatteha, doushiyoumonaishi kaeri youganai.","meaning":"Kalau semua kereta berhenti, tidak ada cara untuk pulang."},
      {"jp":"本人が来ないことには、こちらでは確認しようがありません。","kana":"ほんにんがこないことには、こちらではかくにんしようがありません。","romaji":"honnin ga konai kotoniha, kochiradeha kakuninshi yougaarimasen.","meaning":"Kalau orangnya sendiri belum datang, dari pihak kami tidak ada cara untuk memastikan."},
      {"jp":"昔の資料が残っていないから、その経緯は調べようがない。","kana":"むかしのしりょうがのこっていないから、そのけいいはしらべようがない。","romaji":"mukashi no shiryou ga nokotsu teinaikara, sono keii ha shirabe youganai.","meaning":"Karena dokumen lamanya tidak tersisa, tidak ada cara menelusuri prosesnya."},
      {"jp":"店内で写真が禁止されていると、あとで比べようがないですね。","kana":"てんないでしゃしんがきんしされていると、あとでくらべようがないですね。","romaji":"tennai de shashin ga kinshi sareteiruto, atode kurabe youganaidesune.","meaning":"Kalau memotret di dalam toko dilarang, nanti kita jadi tidak punya cara untuk membandingkan."}
    ]}
  ]},

  {id:"GR-N2-89",level:"N2",title:"〜たきり",summary:"Menyatakan setelah suatu tindakan, keadaan tidak berubah lagi sejak itu.",groups:[
    {name:"〜たきり",description:"Sering dipakai dengan nuansa tidak kembali, tidak muncul lagi, atau terus begitu.",sentences:[
      {"jp":"春に引っ越してきたきり、まだ一度も実家へ帰れていない。","kana":"はるにひっこしてきたきり、まだいちどもじっかへかえれていない。","romaji":"haru ni hikkoshi tekitakiri, mada ichido mo jikka he kaere teinai.","meaning":"Sejak pindah di musim semi, saya belum sempat pulang ke rumah sama sekali."},
      {"jp":"朝出かけたきり、兄は夜まで連絡がなかった。","kana":"あさでかけたきり、あにはよるまでれんらくがなかった。","romaji":"asa deka ketakiri, ani ha yoru made renraku ganakatta.","meaning":"Sejak pergi pagi tadi, kakak saya tidak memberi kabar sampai malam."},
      {"jp":"その本は友達に貸したきり、まだ戻ってきていない。","kana":"そのほんはともだちにかしたきり、まだもどってきていない。","romaji":"sono hon ha tomodachi ni kashi takiri, mada modotsu tekiteinai.","meaning":"Buku itu sejak saya pinjamkan ke teman belum juga kembali."},
      {"jp":"一度体調を崩したきり、無理をしないようにしている。","kana":"いちどたいちょうをくずしたきり、むりをしないようにしている。","romaji":"ichido taichou wo kuzushi takiri, muri woshinaiyounishiteiru.","meaning":"Sejak sekali jatuh sakit itu, saya berusaha tidak memaksakan diri lagi."},
      {"jp":"彼とは卒業式で会ったきりだ。","kana":"かれとはそつぎょうしきであったきりだ。","romaji":"kare toha sotsugyoushiki de atsu takirida.","meaning":"Sejak bertemu di upacara kelulusan itu, saya belum pernah bertemu dia lagi."}
    ]}
  ]},

  {id:"GR-N2-90",level:"N2",title:"〜あげく",summary:"Menyatakan setelah proses panjang atau berliku, hasil akhirnya biasanya buruk atau mengecewakan.",groups:[
    {name:"〜あげく",description:"Sering diterjemahkan ujung-ujungnya setelah susah payah.",sentences:[
      {"jp":"何度も窓口を行ったり来たりしたあげく、必要書類が一枚足りないと言われた。","kana":"なんどもまどぐちをいったりきたりしたあげく、ひつようしょるいがいちまいたりないといわれた。","romaji":"nando mo madoguchi wo itta ri kita rishitaageku, hitsuyoushorui ga ichimai tari naito iwa reta.","meaning":"Setelah bolak-balik loket berkali-kali, ujung-ujungnya saya diberi tahu bahwa masih kurang satu dokumen."},
      {"jp":"長く悩んだあげく、今回は引っ越しを見送ることにした。","kana":"ながくなやんだあげく、こんかいはひっこしをみおくることにした。","romaji":"nagaku nayan daageku, konkai ha hikkoshi wo miokuru kotonishita.","meaning":"Setelah berpikir lama, pada akhirnya saya memutuskan menunda pindahan kali ini."},
      {"jp":"店をいくつも回ったあげく、結局最初の店で買うことになった。","kana":"みせをいくつもまわったあげく、けっきょくさいしょのみせでかうことになった。","romaji":"mise woikutsumo mawatsu taageku, kekkyoku saisho no mise de kau kotoninatta.","meaning":"Setelah keliling banyak toko, ujung-ujungnya saya jadi beli di toko pertama."},
      {"jp":"夜遅くまで話し合ったあげく、結論は来週に持ち越された。","kana":"よるおそくまではなしあったあげく、けつろんはらいしゅうにもちこされた。","romaji":"yoruosoku made hanashiatsu taageku, ketsuron ha raishuu ni mochikosa reta.","meaning":"Setelah berdiskusi sampai larut malam, pada akhirnya kesimpulannya ditunda ke minggu depan."},
      {"jp":"無理を重ねたあげく、しばらく仕事を休むことになってしまった。","kana":"むりをおもねたあげく、しばらくしごとをやすむことになってしまった。","romaji":"muri wo omone taageku, shibaraku shigoto wo yasumu kotoninatteshimatta.","meaning":"Setelah terus memaksakan diri, ujung-ujungnya saya malah harus istirahat kerja beberapa waktu."}
    ]}
  ]},

  {id:"GR-N2-91",level:"N2",title:"〜末(に)",summary:"Menyatakan setelah proses atau pertimbangan panjang, akhirnya menghasilkan suatu keputusan atau hasil.",groups:[
    {name:"〜末(に)",description:"Berbeda dengan あげく, hasilnya bisa positif maupun netral.",sentences:[
      {"jp":"家族で何度も相談した末に、日本へ留学することを決めた。","kana":"かぞくでなんどもそうだんしたまつに、にっぽんへりゅうがくすることをきめた。","romaji":"kazoku de nando mo soudan shita matsu ni, nippon he ryuugaku surukotowo kime ta.","meaning":"Setelah berdiskusi berkali-kali bersama keluarga, saya akhirnya memutuskan belajar di Jepang."},
      {"jp":"検討の末、来年度から制度を少し変更することになった。","kana":"けんとうのまつ、らいねんどからせいどをすこしへんこうすることになった。","romaji":"kentou no matsu, rainendo kara seido wo sukoshi henkou surukotoninatta.","meaning":"Setelah dipertimbangkan, diputuskan bahwa mulai tahun depan sistemnya akan sedikit diubah."},
      {"jp":"迷った末に、駅から少し遠くても静かな部屋を選んだ。","kana":"まよったまつに、えきからすこしとおくてもしずかなへやをえらんだ。","romaji":"mayotsu ta matsu ni, eki kara sukoshi tooku temo shizuka na heya wo eran da.","meaning":"Setelah bimbang lama, saya akhirnya memilih kamar yang agak jauh dari stasiun tetapi lebih tenang."},
      {"jp":"努力の末に合格通知を受け取った時は、本当にほっとした。","kana":"どりょくのまつにごうかくつうちをうけとったときは、ほんとうにほっとした。","romaji":"doryoku no matsu ni goukakutsuuchi wo uketotsu ta toki ha, hontou nihottoshita.","meaning":"Setelah perjuangan panjang, saat menerima surat kelulusan saya benar-benar lega."},
      {"jp":"話し合いの末、地域の祭りは予定どおり行われることになった。","kana":"はなしあいのまつ、ちいきのまつりはよていどおりおこなわれることになった。","romaji":"hanashiai no matsu, chiiki no matsuri ha yotei doori okonawa rerukotoninatta.","meaning":"Setelah perundingan, festival lingkungan diputuskan tetap diadakan sesuai jadwal."}
    ]}
  ]},

  {id:"GR-N2-92",level:"N2",title:"〜ずじまい",summary:"Menyatakan akhirnya tidak sempat atau tidak jadi melakukan sesuatu.",groups:[
    {name:"〜ずじまい",description:"Sering memuat rasa sayang atau penyesalan ringan.",sentences:[
      {"jp":"気になっていたラーメン屋に行けずじまいで、引っ越すことになった。","kana":"きになっていたらーめんやにいけずじまいで、ひっこすことになった。","romaji":"kini natteita raamen ya ni ike zujimaide, hikkosu kotoninatta.","meaning":"Akhirnya saya pindah tanpa sempat pergi ke kedai ramen yang sudah lama ingin saya coba."},
      {"jp":"忙しくて、先生にお礼を言えずじまいだった。","kana":"いそがしくて、せんせいにおれいをいえずじまいだった。","romaji":"isogashiku te, sensei nio rei wo ie zujimaidatta.","meaning":"Karena sibuk, akhirnya saya tidak sempat mengucapkan terima kasih kepada sensei."},
      {"jp":"傘を買おうと思っていたのに、また忘れたまま帰らずじまいだった。","kana":"かさをかおうとおもっていたのに、またわすれたままかえらずじまいだった。","romaji":"kasa wo kao uto omotte itanoni, mata wasure tamama kaera zujimaidatta.","meaning":"Padahal sudah berniat membeli payung, akhirnya saya pulang tanpa jadi juga."},
      {"jp":"旅行中ずっと雨で、海を見られずじまいだった。","kana":"りょこうちゅうずっとあめで、うみをみられずじまいだった。","romaji":"ryokouchuu zutto ame de, umi wo mira rezujimaidatta.","meaning":"Sepanjang perjalanan hujan terus, jadi saya akhirnya tidak sempat melihat laut."},
      {"jp":"あの映画は話題になっていたのに、結局見ずじまいだったな。","kana":"あのえいがはわだいになっていたのに、けっきょくみずじまいだったな。","romaji":"ano eiga ha wadai ninatteitanoni, kekkyoku mizu jimaidattana.","meaning":"Padahal film itu ramai dibicarakan, tapi akhirnya saya tidak jadi menontonnya."}
    ]}
  ]},

  {id:"GR-N2-93",level:"N2",title:"〜次第だ",summary:"Menyatakan hasil yang memang merupakan konsekuensi alami dari keadaan tertentu.",groups:[
    {name:"〜次第だ",description:"Dalam N2 sering dipakai sebagai penjelasan formal, karena alasan itu jadinya begini.",sentences:[
      {"jp":"連日の残業で疲れがたまり、今日は少し集中力が落ちている次第です。","kana":"れんじつのざんぎょうでつかれがたまり、こんにちはすこししゅうちゅうりょくがおちているしだいです。","romaji":"renjitsu no zangyou de tsukare gatamari, konnichiha sukoshi shuuchuuryoku ga ochi teiru shidai desu.","meaning":"Karena lembur terus-menerus, kelelahan menumpuk dan hari ini konsentrasi saya sedikit menurun."},
      {"jp":"日本に来てから多くの人に助けられ、今こうして生活している次第です。","kana":"にっぽんにきてからおおくのにんにたすけられ、いまこうしてせいかつしているしだいです。","romaji":"nippon ni kite kara ooku no nin ni tasuke rare, imako ushite seikatsu shiteiru shidai desu.","meaning":"Sejak datang ke Jepang saya banyak dibantu orang, dan karena itulah sekarang saya bisa hidup seperti ini."},
      {"jp":"事情を十分に確認したうえで、このような判断に至った次第です。","kana":"じじょうをじゅうぶんにかくにんしたうえで、このようなはんだんにいたったしだいです。","romaji":"jijou wo juubun ni kakuninshi tauede, konoyouna handan ni itatsu ta shidai desu.","meaning":"Setelah mengecek keadaan dengan cukup, karena itulah kami sampai pada keputusan ini."},
      {"jp":"急な変更となりましたが、以上が本日のご案内となる次第です。","kana":"きゅうなへんこうとなりましたが、いじょうがほんじつのごあんないとなるしだいです。","romaji":"kyuuna henkou tonarimashitaga, ijou ga honjitsu nogo annai tonaru shidai desu.","meaning":"Meski ada perubahan mendadak, demikianlah isi pengumuman untuk hari ini."},
      {"jp":"皆様のご理解に支えられて、無事に再開できた次第です。","kana":"みなさまのごりかいにささえられて、ぶじにさいかいできたしだいです。","romaji":"minasama nogo rikai ni sasae rarete, buji ni saikai dekita shidai desu.","meaning":"Berkat dukungan dan pengertian Anda semua, akhirnya kami bisa buka kembali dengan aman."}
    ]}
  ]},

  {id:"GR-N2-95",level:"N2",title:"〜にともなって / 〜にともない / 〜にともなう",summary:"Menyatakan sesuatu berubah atau terjadi seiring perubahan lain.",groups:[
    {name:"〜にともなって / 〜にともない / 〜にともなう",description:"Sering dipakai di berita, bisnis, dan penjelasan formal.",sentences:[
      {"jp":"物価の上昇にともなって、学食のメニューも少し値上がりした。","kana":"ぶっかのじょうしょうにともなって、がくしょくのめにゅーもすこしねあがりした。","romaji":"bukka no joushou nitomonatte, gakushoku no menyuu mo sukoshi neagari shita.","meaning":"Seiring kenaikan harga-harga, menu kafetaria kampus juga sedikit naik."},
      {"jp":"利用者の増加にともない、駅の案内表示が見直された。","kana":"りようしゃのぞうかにともない、えきのあんないひょうじがみなおされた。","romaji":"riyousha no zouka nitomonai, eki no annaihyouji ga minaosa reta.","meaning":"Seiring bertambahnya pengguna, papan petunjuk di stasiun ditinjau ulang."},
      {"jp":"季節の変化にともなって、観光客の服装もかなり変わる。","kana":"きせつのへんかにともなって、かんこうきゃくのふくそうもかなりかわる。","romaji":"kisetsu no henka nitomonatte, kankoukyaku no fukusou mokanari kawa ru.","meaning":"Seiring pergantian musim, pakaian para wisatawan juga banyak berubah."},
      {"jp":"制度改正にともなう説明会が来週開かれる。","kana":"せいどかいせいにともなうせつめいかいがらいしゅうひらかれる。","romaji":"seido kaisei nitomonau setsumeikai ga raishuu hiraka reru.","meaning":"Sesi penjelasan terkait revisi sistem akan diadakan minggu depan."},
      {"jp":"人口の高齢化にともなって、地域の支援体制も見直しが進んでいる。","kana":"じんこうのこうれいかにともなって、ちいきのしえんたいせいもみなおしがすすんでいる。","romaji":"jinkou no koureika nitomonatte, chiiki no shien taisei mo minaoshi ga susun deiru.","meaning":"Seiring penuaan populasi, sistem dukungan masyarakat juga sedang ditinjau ulang."}
    ]}
  ]},

  {id:"GR-N2-96",level:"N2",title:"〜につれて",summary:"Menyatakan perubahan bertahap yang mengikuti perubahan lain.",groups:[
    {name:"〜につれて",description:"Lebih alami untuk perubahan yang terjadi sedikit demi sedikit.",sentences:[
      {"jp":"日本語に慣れるにつれて、ニュースも少しずつ聞き取れるようになった。","kana":"にほんごになれるにつれて、にゅーすもすこしずつききとれるようになった。","romaji":"nihongo ni nare runitsurete, nyuusu mo sukoshi zutsu kiki tore ruyouninatta.","meaning":"Seiring saya makin terbiasa dengan bahasa Jepang, berita pun sedikit demi sedikit mulai bisa saya tangkap."},
      {"jp":"駅に近づくにつれて、人通りが増えてきた。","kana":"えきにちかづくにつれて、ひとどおりがふえてきた。","romaji":"eki ni chikazu kunitsurete, hitodoori ga fue tekita.","meaning":"Semakin mendekati stasiun, jumlah orang lewat makin banyak."},
      {"jp":"季節が秋に変わるにつれて、朝晩が冷えてきた。","kana":"きせつがあきにかわるにつれて、あさばんがひえてきた。","romaji":"kisetsu ga aki ni kawa runitsurete, asaban ga hie tekita.","meaning":"Seiring musim bergeser ke musim gugur, pagi dan malam mulai terasa dingin."},
      {"jp":"経験を積むにつれて、職場で質問するタイミングも分かってきた。","kana":"けいけんをつむにつれて、しょくばでしつもんするたいみんぐもわかってきた。","romaji":"keiken wo tsumu nitsurete, shokuba de shitsumon suru taimingu mo waka ttekita.","meaning":"Seiring bertambahnya pengalaman, saya mulai mengerti timing yang pas untuk bertanya di kantor."},
      {"jp":"子どもが大きくなるにつれて、話す内容も少しずつ変わっていく。","kana":"こどもがおおきくなるにつれて、はなすないようもすこしずつかわっていく。","romaji":"kodomo ga ookiku narunitsurete, hanasu naiyou mo sukoshi zutsu kawa tteiku.","meaning":"Seiring anak bertambah besar, isi percakapannya pun sedikit demi sedikit berubah."}
    ]}
  ]},

  {id:"GR-N2-97",level:"N2",title:"〜かいあって / 〜かいもなく",summary:"Menyatakan usaha itu membuahkan hasil, atau sebaliknya sia-sia.",groups:[
    {name:"〜かいあって / 〜かいもなく",description:"Dipakai untuk menunjukkan sepadan atau tidak sepadan dengan usaha.",sentences:[
      {"jp":"毎日発音を練習したかいあって、接客でも聞き返されなくなった。","kana":"まいにちはつおんをれんしゅうしたかいあって、せっきゃくでもききかえされなくなった。","romaji":"mainichi hatsuon wo renshuu shitakaiatte, sekkyaku demo kiki kaesa renakunatta.","meaning":"Berkat latihan pengucapan setiap hari, saya tidak lagi sering diminta mengulang saat melayani pelanggan."},
      {"jp":"早起きしたかいあって、市役所の手続きを午前中に全部終えられた。","kana":"はやおきしたかいあって、しやくしょのてつづきをごぜんちゅうにぜんぶおえられた。","romaji":"hayaoki shitakaiatte, shiyakusho no tetsuzuki wo gozenchuu ni zenbu oe rareta.","meaning":"Berkat bangun pagi, semua urusan di balai kota selesai dalam pagi hari."},
      {"jp":"何度も練習したかいもなく、本番では途中で言葉が出なくなった。","kana":"なんどもれんしゅうしたかいもなく、ほんばんではとちゅうでことばがでなくなった。","romaji":"nando mo renshuu shitakaimonaku, honban deha tochuu de kotoba ga dena kunatta.","meaning":"Sayangnya meski sudah berlatih berkali-kali, di penampilan utama kata-kata saya justru sempat tidak keluar."},
      {"jp":"遠くまで並んで来たかいあって、限定商品を買うことができた。","kana":"とおくまでならんできたかいあって、げんていしょうひんをかうことができた。","romaji":"tooku made naran de kita kaiatte, genteishouhin wo kau kotogadekita.","meaning":"Berkat rela antre jauh-jauh, saya berhasil membeli barang edisi terbatas itu."},
      {"jp":"徹夜したかいもなく、提出形式を間違えてやり直しになった。","kana":"てつやしたかいもなく、ていしゅつけいしきをまちがえてやりなおしになった。","romaji":"tetsuya shitakaimonaku, teishutsu keishiki wo machigae teyari naoshi ninatta.","meaning":"Sayangnya meski sudah begadang, format pengumpulannya salah dan saya harus mengulang."}
    ]}
  ]},

  {id:"GR-N2-98",level:"N2",title:"〜つつある",summary:"Menyatakan sesuatu sedang berlangsung menuju perubahan tertentu.",groups:[
    {name:"〜つつある",description:"Sering dipakai untuk perubahan sosial, kebiasaan, atau keadaan yang sedang bergerak.",sentences:[
      {"jp":"この地域でも外国人向けの支援体制が少しずつ整いつつある。","kana":"このちいきでもがいこくじんむけのしえんたいせいがすこしずつととのいつつある。","romaji":"kono chiiki demo gaikokujin muke no shien taisei ga sukoshi zutsu totonoi tsutsuaru.","meaning":"Di daerah ini pun sistem dukungan untuk warga asing sedang perlahan-lahan tertata."},
      {"jp":"紙の申請は減りつつあり、手続きの多くがオンライン化している。","kana":"かみのしんせいはへりつつあり、てつづきのおおくがおんらいんかしている。","romaji":"kami no shinsei ha heri tsutsuari, tetsuzuki no ooku ga onrain kashi teiru.","meaning":"Pengajuan kertas sedang berkurang, dan banyak prosedur makin beralih ke online."},
      {"jp":"駅前の商店街は形を変えつつあるが、昔の雰囲気もまだ残っている。","kana":"えきまえのしょうてんがいはかたちをかえつつあるが、むかしのふんいきもまだのこっている。","romaji":"ekimae no shoutengai ha katachi wo kae tsutsuaruga, mukashi no fun'iki momada nokotsu teiru.","meaning":"Area pertokoan depan stasiun sedang berubah bentuk, tapi suasana lamanya masih tersisa."},
      {"jp":"季節は春に向かいつつあり、朝の空気が少しやわらかい。","kana":"きせつははるにむかいつつあり、あさのくうきがすこしやわらかい。","romaji":"kisetsu ha haru ni mukai tsutsuari, asa no kuuki ga sukoshi yawarakai.","meaning":"Musim sedang bergerak menuju musim semi, dan udara pagi terasa sedikit lebih lembut."},
      {"jp":"私の生活もようやく落ち着きつつある。","kana":"わたしのせいかつもようやくおちつきつつある。","romaji":"watashi no seikatsu moyouyaku ochitsuki tsutsuaru.","meaning":"Hidup saya akhirnya mulai berangsur stabil."}
    ]}
  ]},

  {id:"GR-N2-99",level:"N2",title:"〜一方だ",summary:"Menyatakan sesuatu terus berubah ke satu arah saja, biasanya makin kuat atau makin parah.",groups:[
    {name:"〜一方だ",description:"Sering dipakai untuk perubahan sepihak yang terus berlanjut.",sentences:[
      {"jp":"物価は上がる一方で、学生の生活はますます大変になっている。","kana":"ぶっかはあがるいっぽうで、がくせいのせいかつはますますたいへんになっている。","romaji":"bukka ha aga ru ippou de, gakusei no seikatsu hamasumasu taihen ninatteiru.","meaning":"Harga-harga terus naik, dan hidup mahasiswa makin lama makin berat."},
      {"jp":"駅前の再開発で、この辺りの景色は変わる一方だ。","kana":"えきまえのさいかいはつで、このあたりのけしきはかわるいっぽうだ。","romaji":"ekimae no saikaihatsu de, kono atari no keshiki ha kawa ru ippou da.","meaning":"Karena pembangunan ulang depan stasiun, pemandangan di sekitar sini terus berubah."},
      {"jp":"忙しさが増す一方で、部屋の片づけが全然進まない。","kana":"いそがしさがますいっぽうで、へやのかたづけがぜんぜんすすまない。","romaji":"isogashisa ga masu ippou de, heya no katazu kega zenzen susuma nai.","meaning":"Kesibukan terus bertambah, sementara beres-beres kamar tidak berjalan sama sekali."},
      {"jp":"外国人旅行者は増える一方らしく、案内の見直しが必要だ。","kana":"がいこくじんりょこうしゃはふえるいっぽうらしく、あんないのみなおしがひつようだ。","romaji":"gaikokujinryokousha ha fue ru ippou rashiku, annai no minaoshi ga hitsuyou da.","meaning":"Katanya wisatawan asing terus bertambah, jadi peninjauan ulang petunjuk memang perlu."},
      {"jp":"会議が長引く一方で、結論はなかなか出なかった。","kana":"かいぎがながびくいっぽうで、けつろんはなかなかでなかった。","romaji":"kaigi ga nagabiku ippou de, ketsuron hanakanaka dena katta.","meaning":"Rapat terus saja memanjang, sementara kesimpulannya sulit keluar."}
    ]}
  ]},

  {id:"GR-N2-100",level:"N2",title:"〜ばかりだ",summary:"Menyatakan tinggal menunggu satu langkah lagi, atau perubahan terus menuju satu arah.",groups:[
    {name:"〜ばかりだ",description:"Maknanya berbeda tergantung konteks, jadi perhatikan isi kalimat.",sentences:[
      {"jp":"荷物も送ったし、あとは出発の日を待つばかりだ。","kana":"にもつもおくったし、あとはしゅっぱつのにちをまつばかりだ。","romaji":"nimotsu mo okutsu tashi, atoha shuppatsu no nichi wo matsu bakarida.","meaning":"Barang sudah dikirim, jadi sekarang tinggal menunggu hari keberangkatan."},
      {"jp":"手続きはすべて終わり、カードの到着を待つばかりです。","kana":"てつづきはすべておわり、かーどのとうちゃくをまつばかりです。","romaji":"tetsuzuki hasubete owari, kaado no touchaku wo matsu bakaridesu.","meaning":"Semua prosedur sudah selesai, sekarang tinggal menunggu kartu tiba."},
      {"jp":"練習不足のままだと、不安は増すばかりだ。","kana":"れんしゅうぶそくのままだと、ふあんはますばかりだ。","romaji":"renshuubusoku nomamadato, fuan ha masu bakarida.","meaning":"Kalau tetap kurang latihan, rasa cemas hanya akan terus bertambah."},
      {"jp":"このまま空き家が増えるばかりでは、商店街も元気を失ってしまう。","kana":"このままあきやがふえるばかりでは、しょうてんがいもげんきをうってしまう。","romaji":"konomama akiya ga fue rubakarideha, shoutengai mo genki wo utsu teshimau.","meaning":"Kalau rumah kosong terus bertambah seperti ini, area pertokoan juga akan kehilangan semangatnya."},
      {"jp":"新生活は忙しいけれど、少しずつ楽しみも増えるばかりだ。","kana":"しんせいかつはいそがしいけれど、すこしずつたのしみもふえるばかりだ。","romaji":"shinseikatsu ha isogashii keredo, sukoshi zutsu tanoshimi mo fue rubakarida.","meaning":"Hidup baru memang sibuk, tapi sedikit demi sedikit hal-hal menyenangkannya juga semakin banyak."}
    ]}
  ]},

  {id:"GR-N2-101",level:"N2",title:"〜に応じて",summary:"Menyatakan sesuatu berubah atau dipilih sesuai keadaan, kebutuhan, atau tingkat tertentu.",groups:[
    {name:"〜に応じて",description:"Sering dipakai untuk aturan fleksibel atau penyesuaian.",sentences:[
      {"jp":"混雑状況に応じて、入場制限を行う場合があります。","kana":"こんざつじょうきょうにおうじて、にゅうじょうせいげんをおこなうばあいがあります。","romaji":"konzatsujoukyou ni ouji te, nyuujouseigen wo okonau baai gaarimasu.","meaning":"Sesuai tingkat keramaian, kemungkinan pembatasan masuk akan diberlakukan."},
      {"jp":"学生の理解度に応じて、先生が説明の速さを変えてくれた。","kana":"がくせいのりかいどにおうじて、せんせいがせつめいのはやさをかえてくれた。","romaji":"gakusei no rikaido ni ouji te, sensei ga setsumei no hayasa wo kae tekureta.","meaning":"Sesuai tingkat pemahaman murid, sensei mengubah kecepatan penjelasannya."},
      {"jp":"天気に応じて、イベント会場を屋内に変更するそうだ。","kana":"てんきにおうじて、いべんとかいじょうをおくないにへんこうするそうだ。","romaji":"tenki ni ouji te, ibento kaijou wo okunai ni henkou surusouda.","meaning":"Katanya sesuai cuaca, lokasi acara akan dipindahkan ke dalam ruangan."},
      {"jp":"予算に応じて、必要な設備から順番にそろえていきたい。","kana":"よさんにおうじて、ひつようなせつびからじゅんばんにそろえていきたい。","romaji":"yosan ni ouji te, hitsuyou na setsubi kara junban nisoroeteikitai.","meaning":"Sesuai anggaran, saya ingin melengkapi fasilitas yang perlu satu per satu."},
      {"jp":"相談内容に応じて、担当窓口をご案内します。","kana":"そうだんないようにおうじて、たんとうまどぐちをごあんないします。","romaji":"soudannaiyou ni ouji te, tantoumadoguchi wogo annai shimasu.","meaning":"Sesuai isi konsultasinya, kami akan mengarahkan Anda ke loket yang tepat."}
    ]}
  ]},

  {id:"GR-N2-102",level:"N2",title:"〜につけ / 〜につけて",summary:"Menyatakan setiap kali melihat, mendengar, atau mengalami sesuatu, perasaan tertentu muncul.",groups:[
    {name:"〜につけ / 〜につけて",description:"Sering dipakai untuk kenangan atau emosi yang berulang.",sentences:[
      {"jp":"春の匂いを感じるにつけ、日本に来た最初の年を思い出す。","kana":"はるのにおいをかんじるにつけ、にっぽんにきたさいしょのねんをおもいだす。","romaji":"haru no nioi wo kanji runitsuke, nippon ni kita saisho no nen wo omoidasu.","meaning":"Setiap kali mencium aroma musim semi, saya teringat tahun pertama saya datang ke Jepang."},
      {"jp":"駅の発車メロディーを聞くにつけ、帰国前の気持ちがよみがえる。","kana":"えきのはっしゃめろでぃーをきくにつけ、きこくまえのきもちがよみがえる。","romaji":"eki no hassha merodii wo kiku nitsuke, kikoku mae no kimochi gayomigaeru.","meaning":"Setiap kali mendengar melodi keberangkatan di stasiun, perasaan sebelum pulang ke negara asal kembali muncul."},
      {"jp":"後輩の成長を見るにつけ、自分ももっと頑張ろうと思う。","kana":"こうはいのせいちょうをみるにつけ、じぶんももっとがんばろうとおもう。","romaji":"kouhai no seichou wo miru nitsuke, jibun momotto ganbaro uto omou.","meaning":"Setiap kali melihat junior berkembang, saya juga merasa ingin berusaha lebih keras."},
      {"jp":"困っている外国人を見るにつけ、最初のころの自分を思い出す。","kana":"こまっているがいこくじんをみるにつけ、さいしょのころのじぶんをおもいだす。","romaji":"komatsu teiru gaikokujin wo miru nitsuke, saisho nokorono jibun wo omoidasu.","meaning":"Setiap kali melihat orang asing yang sedang kesulitan, saya teringat diri saya dulu di awal."},
      {"jp":"季節の行事にふれるにつけ、この町で暮らしている実感が深くなる。","kana":"きせつのぎょうじにふれるにつけ、このまちでくらしているじっかんがふかくなる。","romaji":"kisetsu no gyouji nifurerunitsuke, kono machi de kurashi teiru jikkan ga fukaku naru.","meaning":"Setiap kali ikut tradisi musiman, rasa bahwa saya benar-benar hidup di kota ini makin dalam."}
    ]}
  ]},

  {id:"GR-N2-103",level:"N2",title:"〜を契機に / 〜を契機にして",summary:"Menyatakan sesuatu menjadi titik balik atau kesempatan untuk perubahan.",groups:[
    {name:"〜を契機に / 〜を契機にして",description:"Nuansanya formal dan sering dipakai dalam tulisan atau berita.",sentences:[
      {"jp":"留学を契機に、自分の将来を真剣に考えるようになった。","kana":"りゅうがくをけいきに、じぶんのしょうらいをしんけんにかんがえるようになった。","romaji":"ryuugaku wo keiki ni, jibun no shourai wo shinken ni kangae ruyouninatta.","meaning":"Belajar di luar negeri menjadi titik balik yang membuat saya mulai serius memikirkan masa depan."},
      {"jp":"この地震を契機に、家でも防災グッズをそろえ始めた。","kana":"このじしんをけいきに、いえでもぼうさいぐっずをそろえはじめた。","romaji":"kono jishin wo keiki ni, ie demo bousai guzzu wosoroe hajime ta.","meaning":"Gempa ini menjadi titik tolak bagi kami untuk mulai menyiapkan perlengkapan darurat di rumah."},
      {"jp":"駅前の再開発を契機にして、周辺の店も少しずつ変わってきた。","kana":"えきまえのさいかいはつをけいきにして、しゅうへんのみせもすこしずつかわってきた。","romaji":"ekimae no saikaihatsu wo keiki nishite, shuuhen no mise mo sukoshi zutsu kawa ttekita.","meaning":"Pembangunan ulang depan stasiun menjadi momentum yang membuat toko-toko di sekitarnya ikut berubah."},
      {"jp":"先生との出会いを契機に、日本語の勉強が一気に楽しくなった。","kana":"せんせいとのであいをけいきに、にほんごのべんきょうがいっきにたのしくなった。","romaji":"sensei tono deai wo keiki ni, nihongo no benkyou ga ikki ni tanoshiku natta.","meaning":"Pertemuan dengan sensei menjadi titik balik yang membuat belajar bahasa Jepang jadi sangat menyenangkan."},
      {"jp":"受賞を契機に、その活動が全国に知られるようになった。","kana":"じゅしょうをけいきに、そのかつどうがぜんこくにしられるようになった。","romaji":"jushou wo keiki ni, sono katsudou ga zenkoku ni shira reruyouninatta.","meaning":"Penghargaan itu menjadi momentum yang membuat kegiatan tersebut dikenal secara nasional."}
    ]}
  ]},

  {id:"GR-N2-104",level:"N2",title:"〜をきっかけに",summary:"Menyatakan sesuatu menjadi pemicu perubahan atau awal suatu hal.",groups:[
    {name:"〜をきっかけに",description:"Lebih umum dan percakapan daripada を契機に.",sentences:[
      {"jp":"友達に誘われたのをきっかけに、地域のボランティアに参加し始めた。","kana":"ともだちにさそわれたのをきっかけに、ちいきのぼらんてぃあにさんかしはじめた。","romaji":"tomodachi ni sasowa retanowokikkakeni, chiiki no boranteia ni sanka shi hajime ta.","meaning":"Ajakan dari teman menjadi pemicu saya mulai ikut kegiatan relawan lingkungan."},
      {"jp":"引っ越しをきっかけに、物を増やしすぎない生活を意識するようになった。","kana":"ひっこしをきっかけに、ものをふやしすぎないせいかつをいしきするようになった。","romaji":"hikkoshi wokikkakeni, mono wo fuyashi suginai seikatsu wo ishiki suruyouninatta.","meaning":"Pindahan menjadi pemicu saya mulai lebih sadar untuk tidak menumpuk barang."},
      {"jp":"病院で注意されたのをきっかけに、毎日歩くようにしている。","kana":"びょういんでちゅういされたのをきっかけに、まいにちあるくようにしている。","romaji":"byouin de chuui saretanowokikkakeni, mainichi aruku younishiteiru.","meaning":"Setelah diingatkan di rumah sakit, saya mulai membiasakan berjalan kaki setiap hari."},
      {"jp":"その映画をきっかけに、日本の手話に興味を持った。","kana":"そのえいがをきっかけに、にっぽんのしゅわにきょうみをもった。","romaji":"sono eiga wokikkakeni, nippon no shuwa ni kyoumi wo motsu ta.","meaning":"Film itu menjadi pemicu ketertarikan saya pada bahasa isyarat Jepang."},
      {"jp":"店長との会話をきっかけに、アルバイト先での悩みが少し軽くなった。","kana":"てんちょうとのかいわをきっかけに、あるばいとさきでのなやみがすこしかるくなった。","romaji":"tenchou tono kaiwa wokikkakeni, arubaito saki deno nayami ga sukoshi karuku natta.","meaning":"Percakapan dengan manajer toko menjadi pemicu yang sedikit meringankan kegelisahan saya di tempat kerja part-time."}
    ]}
  ]},

  {id:"GR-N2-105",level:"N2",title:"〜ようではないか",summary:"Menyatakan ajakan kuat atau seruan bersama, artinya mari kita.",groups:[
    {name:"〜ようではないか",description:"Banyak dipakai dalam pidato, slogan, atau ucapan yang membangkitkan semangat.",sentences:[
      {"jp":"新しい学期が始まったのだから、気持ちを切り替えて頑張ろうではないか。","kana":"あたらしいがっきがはじまったのだから、きもちをきりかえてがんばろうではないか。","romaji":"atarashii gakki ga hajima ttanodakara, kimochi wo kirikae te ganbaro udehanaika.","meaning":"Semester baru sudah dimulai, jadi mari kita ganti suasana hati dan berusaha."},
      {"jp":"地域の一員として、まずは挨拶から始めようではないか。","kana":"ちいきのいちいんとして、まずはあいさつからはじめようではないか。","romaji":"chiiki no ichiin toshite, mazuha aisatsu kara hajime youdehanaika.","meaning":"Sebagai bagian dari lingkungan ini, mari mulai dari saling menyapa."},
      {"jp":"せっかく集まったのだから、遠慮せず意見を出し合おうではないか。","kana":"せっかくあつまったのだから、えんりょせずいけんをだしあおうではないか。","romaji":"sekkaku atsuma ttanodakara, enryo sezu iken wo dashi ao udehanaika.","meaning":"Mumpung sudah berkumpul, mari saling menyampaikan pendapat tanpa sungkan."},
      {"jp":"防災の日をきっかけに、家族で避難先を確認しようではありませんか。","kana":"ぼうさいのにちをきっかけに、かぞくでひなんさきをかくにんしようではありませんか。","romaji":"bousai no nichi wokikkakeni, kazoku de hinansaki wo kakuninshi youdehaarimasenka.","meaning":"Mari menjadikan hari kesiapsiagaan bencana sebagai momen untuk memeriksa lokasi evakuasi bersama keluarga."},
      {"jp":"失敗を恐れるより、まず一歩を踏み出してみようではないか。","kana":"しっぱいをおそれるより、まずいっぽをふみだしてみようではないか。","romaji":"shippai wo osore ruyori, mazu ippo wo fumi dashi temiyoudehanaika.","meaning":"Daripada takut gagal, mari coba dulu melangkah satu langkah."}
    ]}
  ]},

  {id:"GR-N2-106",level:"N2",title:"〜次第で",summary:"Menyatakan hasil berubah tergantung pada hal tertentu.",groups:[
    {name:"〜次第で",description:"Artinya tergantung, bergantung pada.",sentences:[
      {"jp":"面接の結果次第で、春からの予定が大きく変わりそうだ。","kana":"めんせつのけっかしだいで、はるからのよていがおおきくかわりそうだ。","romaji":"mensetsu no kekkashidai de, haru karano yotei ga ookiku kawari souda.","meaning":"Tergantung hasil wawancara, rencana saya mulai musim semi nanti bisa banyak berubah."},
      {"jp":"天気次第で、花見の場所を公園から屋内に変える。","kana":"てんきしだいで、はなみのばしょをこうえんからおくないにかえる。","romaji":"tenki shidai de, hanami no basho wo kouen kara okunai ni kae ru.","meaning":"Tergantung cuaca, lokasi hanami akan dipindah dari taman ke dalam ruangan."},
      {"jp":"上司の判断次第で、在宅勤務の日数が決まるらしい。","kana":"じょうしのはんだんしだいで、ざいたくきんむのにっすうがきまるらしい。","romaji":"joushi no handan shidai de, zaitakukinmu no nissuu ga kima rurashii.","meaning":"Katanya jumlah hari kerja dari rumah ditentukan tergantung keputusan atasan."},
      {"jp":"体調次第では、明日の授業をオンラインにするかもしれません。","kana":"たいちょうしだいでは、あしたのじゅぎょうをおんらいんにするかもしれません。","romaji":"taichou shidai deha, ashita no jugyou wo onrain nisurukamoshiremasen.","meaning":"Tergantung kondisi tubuh, kelas besok mungkin akan diubah menjadi online."},
      {"jp":"あなたの説明の仕方次第で、相手の受け取り方も変わるよ。","kana":"あなたのせつめいのしかたしだいで、あいてのうけとりかたもかわるよ。","romaji":"anatano setsumei no shikata shidai de, aite no uketorikata mo kawa ruyo.","meaning":"Tergantung cara Anda menjelaskan, cara orang lain menerima pun bisa berubah."}
    ]}
  ]},

  {id:"GR-N2-107",level:"N2",title:"〜までして / 〜てまで",summary:"Menyatakan sampai melakukan hal sejauh itu demi sesuatu.",groups:[
    {name:"〜までして / 〜てまで",description:"Sering memuat penilaian apakah tindakan itu pantas atau berlebihan.",sentences:[
      {"jp":"夜食を我慢してまで、健康診断の数値を改善したいと思った。","kana":"やしょくをがまんしてまで、けんこうしんだんのすうちをかいぜんしたいとおもった。","romaji":"yashoku wo gaman shitemade, kenkoushindan no suuchi wo kaizen shitaito omotta.","meaning":"Saya sampai rela menahan makan malam demi memperbaiki hasil pemeriksaan kesehatan."},
      {"jp":"そこまでして働く必要があるのか、少し考えたほうがいい。","kana":"そこまでしてはたらくひつようがあるのか、すこしかんがえたほうがいい。","romaji":"sokomadeshite hataraku hitsuyou gaarunoka, sukoshi kangae tahougaii.","meaning":"Mungkin perlu dipikirkan lagi apakah memang perlu bekerja sampai sejauh itu."},
      {"jp":"人に借金してまで新しいスマホを買うつもりはない。","kana":"にんにしゃっきんしてまであたらしいすまほをかうつもりはない。","romaji":"nin ni shakkin shitemade atarashii sumaho wo kau tsumorihanai.","meaning":"Saya tidak berniat membeli ponsel baru sampai harus berutang pada orang lain."},
      {"jp":"徹夜してまで資料を直したのに、提出先を間違えていた。","kana":"てつやしてまでしりょうをなおしたのに、ていしゅつさきをまちがえていた。","romaji":"tetsuya shitemade shiryou wo naoshi tanoni, teishutsusaki wo machigae teita.","meaning":"Padahal saya sampai begadang memperbaiki materi, ternyata tujuan pengirimannya malah salah."},
      {"jp":"休日をつぶしてまで参加した勉強会は、それだけの価値があった。","kana":"きゅうじつをつぶしてまでさんかしたべんきょうかいは、それだけのかちがあった。","romaji":"kyuujitsu wotsubushitemade sanka shita benkyoukai ha, soredakeno kachi gaatta.","meaning":"Sesi belajar yang saya ikuti sampai mengorbankan hari libur itu ternyata memang sepadan nilainya."}
    ]}
  ]},

  {id:"GR-N2-108",level:"N2",title:"〜てでも",summary:"Menyatakan meskipun harus melakukan cara yang agak berat, tetap ingin mencapai tujuan.",groups:[
    {name:"〜てでも",description:"Nuansanya tekad atau prioritas yang kuat.",sentences:[
      {"jp":"多少並んででも、あの病院で診てもらいたい。","kana":"たしょうならんででも、あのびょういんでみてもらいたい。","romaji":"tashou naran dedemo, ano byouin de mite moraitai.","meaning":"Meskipun harus antre lumayan lama, saya tetap ingin diperiksa di rumah sakit itu."},
      {"jp":"無理をしてでも行くべきかどうか、今日は少し迷っている。","kana":"むりをしてでもいくべきかどうか、こんにちはすこしまよっている。","romaji":"muri woshitedemo iku bekikadouka, konnichiha sukoshi mayotsu teiru.","meaning":"Hari ini saya agak ragu apakah harus tetap pergi meskipun harus memaksakan diri."},
      {"jp":"少し高くても、この時期は駅近の部屋を借りてでも通勤時間を減らしたい。","kana":"すこしたかくても、このじきはえきちかのへやをかりてでもつうきんじかんをへらしたい。","romaji":"sukoshi takaku temo, kono jiki ha ekichika no heya wo kari tedemo tsuukinjikan wo hera shitai.","meaning":"Meskipun sedikit mahal, pada masa seperti ini saya ingin mengurangi waktu commute walau harus menyewa kamar dekat stasiun."},
      {"jp":"短い時間ででも、毎日日本語に触れるようにしている。","kana":"みじかいじかんででも、まいにちにほんごにふれるようにしている。","romaji":"mijikai jikan dedemo, mainichi nihongo ni fureru younishiteiru.","meaning":"Saya berusaha tetap bersentuhan dengan bahasa Jepang setiap hari meskipun hanya sebentar."},
      {"jp":"お願いしてでも、今日中に確認してもらわないと間に合わない。","kana":"おねがいしてでも、きょうじゅうにかくにんしてもらわないとまにあわない。","romaji":"o negai shitedemo, kyoujuu ni kakuninshi temorawanaito maniawa nai.","meaning":"Meskipun harus minta tolong dengan sungguh-sungguh, saya harus mendapatkan pengecekan hari ini supaya sempat."}
    ]}
  ]},

  {id:"GR-N2-109",level:"N2",title:"〜てこそ",summary:"Menyatakan nilai atau hasil yang baru bermakna kalau syaratnya terpenuhi.",groups:[
    {name:"〜てこそ",description:"Walau bentuknya sama dengan N2 nomor 20, di sini nuansanya lebih menonjol sebagai penegasan nilai.",sentences:[
      {"jp":"言葉は相手を思って使ってこそ、本当のコミュニケーションになる。","kana":"ことばはあいてをおもってつかってこそ、ほんとうのこみゅにけーしょんになる。","romaji":"kotoba ha aite wo omotte tsukatte koso, hontou no komyunikeeshon ninaru.","meaning":"Bahasa baru menjadi komunikasi yang sesungguhnya jika dipakai dengan memikirkan lawan bicara."},
      {"jp":"地域の情報は住んでいる人に届いてこそ意味がある。","kana":"ちいきのじょうほうはすんでいるにんにとどいてこそいみがある。","romaji":"chiiki no jouhou ha sun deiru nin ni todoi tekoso imi gaaru.","meaning":"Informasi lingkungan baru punya arti jika benar-benar sampai ke orang yang tinggal di situ."},
      {"jp":"学んだ防災知識は、いざという時に動けてこそ役立つ。","kana":"まなんだぼうさいちしきは、いざというときにうごけてこそやくたつ。","romaji":"manan da bousai chishiki ha, izatoiu tokini ugoke tekoso yakutatsu.","meaning":"Pengetahuan kebencanaan baru berguna jika kita bisa bergerak saat keadaan darurat."},
      {"jp":"店のサービスは続けて利用してこそ、細かな良さが分かる。","kana":"みせのさーびすはつづけてりようしてこそ、こまかなよさがわかる。","romaji":"mise no saabisu ha tsuzuke te riyou shitekoso, komaka na yosa ga waka ru.","meaning":"Pelayanan toko baru benar-benar terasa kualitas kecilnya kalau kita terus menggunakannya."},
      {"jp":"留学の経験は帰国後に生かしてこそ、自分の力になると思う。","kana":"りゅうがくのけいけんはきこくごにいかしてこそ、じぶんのちからになるとおもう。","romaji":"ryuugaku no keiken ha kikokugo ni ika shitekoso, jibun no chikara ninaruto omou.","meaning":"Menurut saya pengalaman belajar di luar negeri baru jadi kekuatan kalau dimanfaatkan setelah pulang."}
    ]}
  ]},

  {id:"GR-N2-110",level:"N2",title:"〜として〜ない",summary:"Menyatakan bahkan jika dilihat dari sudut paling ringan pun, sesuatu tidak terpenuhi.",groups:[
    {name:"〜として〜ない",description:"Sering muncul dalam bentuk 一日として〜ない, 一度として〜ない.",sentences:[
      {"jp":"来日してから、一日として日本語にふれなかった日はない。","kana":"らいにちしてから、ついたちとしてにほんごにふれなかったにちはない。","romaji":"rainichi shitekara, tsuitachi toshite nihongo nifurenakatta nichi hanai.","meaning":"Sejak datang ke Jepang, tidak ada satu hari pun saya tidak bersentuhan dengan bahasa Jepang."},
      {"jp":"この一週間、一度として定時に帰れていない。","kana":"このいっしゅうかん、いちどとしてていじにかえれていない。","romaji":"kono isshuukan, ichido toshite teiji ni kaere teinai.","meaning":"Selama satu minggu ini, tidak ada satu kali pun saya bisa pulang tepat waktu."},
      {"jp":"駅前のあの店は、昼どきは一日として空いている日がない。","kana":"えきまえのあのみせは、ひるどきはついたちとしてあいているにちがない。","romaji":"ekimae noano mise ha, hiru dokiha tsuitachi toshite ai teiru nichi ganai.","meaning":"Toko itu di depan stasiun tidak punya satu hari pun yang sepi saat jam makan siang."},
      {"jp":"彼は約束を一度として軽く扱ったことがない。","kana":"かれはやくそくをいちどとしてかるくあつかったことがない。","romaji":"kareha yakusoku wo ichido toshite karuku atsukatsu takotoganai.","meaning":"Dia tidak pernah sekalipun memperlakukan janji dengan enteng."},
      {"jp":"試験前の今月は、一日として気が抜ける日はなかった。","kana":"しけんまえのこんげつは、ついたちとしてきがぬけるにちはなかった。","romaji":"shikenmae no kongetsu ha, tsuitachi toshite kiga nuke ru nichi hanakatta.","meaning":"Selama bulan menjelang ujian ini, tidak ada satu hari pun saya bisa benar-benar santai."}
    ]}
  ]},

  {id:"GR-N2-111",level:"N2",title:"〜からすると / 〜からすれば / 〜からいうと / 〜からいえば / 〜からいって",summary:"Menyatakan penilaian dari sudut pandang tertentu.",groups:[
    {name:"〜からすると / 〜からすれば / 〜からいうと / 〜からいえば / 〜からいって",description:"Artinya kalau dilihat dari, menurut sudut pandang.",sentences:[
      {"jp":"初めて日本で暮らす人からすると、このゴミ出しのルールは複雑に見えるだろう。","kana":"はじめてにっぽんでくらすにんからすると、このごみだしのるーるはふくざつにみえるだろう。","romaji":"hajimete nippon de kura su nin karasuruto, kono gomi dashi no ruuru ha fukuzatsu ni mie rudarou.","meaning":"Kalau dilihat dari sudut pandang orang yang baru pertama hidup di Jepang, aturan buang sampah ini pasti terlihat rumit."},
      {"jp":"親からすれば、子どもが夜遅くまで帰らないのはやはり心配だ。","kana":"したしからすれば、こどもがよるおそくまでかえらないのはやはりしんぱいだ。","romaji":"shitashika rasureba, kodomo ga yoruosoku made kaera nainohayahari shinpai da.","meaning":"Kalau dari sudut pandang orang tua, anak yang pulang larut malam tentu tetap mengkhawatirkan."},
      {"jp":"通う立場からいうと、駅から近いだけで大きな安心感がある。","kana":"かようたちばからいうと、えきからちかいだけでおおきなあんしんかんがある。","romaji":"kayou tachiba karaiuto, eki kara chikai dakede ooki na anshinkan gaaru.","meaning":"Kalau dari sudut pandang orang yang harus berangkat setiap hari, dekat dari stasiun saja sudah memberi rasa tenang."},
      {"jp":"留学生からいえば、手続きの情報はもっと多言語であってほしい。","kana":"りゅうがくせいからいえば、てつづきのじょうほうはもっとたげんごであってほしい。","romaji":"ryuugakusei karaieba, tetsuzuki no jouhou hamotto tagengo deattehoshii.","meaning":"Kalau dari sudut pandang pelajar asing, saya ingin informasi prosedur lebih banyak tersedia dalam berbagai bahasa."},
      {"jp":"利用者からいって、このアプリは更新後のほうがずっと使いやすい。","kana":"りようしゃからいって、このあぷりはこうしんのちのほうがずっとつかいやすい。","romaji":"riyousha karaitte, kono apuri ha koushin nochino hougazutto tsukai yasui.","meaning":"Kalau dilihat dari sisi pengguna, aplikasi ini jauh lebih mudah dipakai setelah diperbarui."}
    ]}
  ]},

  {id:"GR-N2-112",level:"N2",title:"〜を〜として / 〜を〜とする",summary:"Menyatakan menjadikan sesuatu sebagai posisi, tujuan, atau bahan dasar.",groups:[
    {name:"〜を〜として / 〜を〜とする",description:"Sering dipakai dalam definisi, aturan, dan penjelasan formal.",sentences:[
      {"jp":"この施設は地域交流の場を目的として設計された。","kana":"このしせつはちいきこうりゅうのばをもくてきとしてせっけいされた。","romaji":"kono shisetsu ha chiiki kouryuu no ba wo mokuteki toshite sekkei sareta.","meaning":"Fasilitas ini dirancang dengan tujuan menjadi tempat interaksi warga."},
      {"jp":"日本語を共通言語として、いろいろな国の人が話していた。","kana":"にほんごをきょうつうげんごとして、いろいろなくにのにんがはなしていた。","romaji":"nihongo wo kyoutsuugengo toshite, iroirona kuni no nin ga hanashi teita.","meaning":"Dengan bahasa Jepang sebagai bahasa bersama, orang-orang dari berbagai negara saling berbicara."},
      {"jp":"来月一日を開始日とする研修が予定されている。","kana":"らいげつついたちをかいしびとするけんしゅうがよていされている。","romaji":"raigetsu tsuitachi wo kaishibi tosuru kenshuu ga yotei sareteiru.","meaning":"Pelatihan dengan tanggal mulai pada tanggal satu bulan depan sedang dijadwalkan."},
      {"jp":"その団体は子どもの支援を中心として活動している。","kana":"そのだんたいはこどものしえんをちゅうしんとしてかつどうしている。","romaji":"sono dantai ha kodomo no shien wo chuushin toshite katsudou shiteiru.","meaning":"Organisasi itu berkegiatan dengan menjadikan dukungan anak-anak sebagai fokus utama."},
      {"jp":"この報告書は去年の調査結果を基礎資料としてまとめられた。","kana":"このほうこくしょはきょねんのちょうさけっかをきそしりょうとしてまとめられた。","romaji":"kono houkokusho ha kyonen no chousakekka wo kisoshiryou toshitematomerareta.","meaning":"Laporan ini dirangkum dengan hasil survei tahun lalu sebagai bahan dasar."}
    ]}
  ]},

  {id:"GR-N2-113",level:"N2",title:"〜にしてみたら / 〜にしてみれば",summary:"Menyatakan jika dilihat dari sudut orang itu, perasaannya tentu begini.",groups:[
    {name:"〜にしてみたら / 〜にしてみれば",description:"Dipakai untuk empati atau mempertimbangkan posisi pihak lain.",sentences:[
      {"jp":"初めて海外で働く人にしてみれば、毎日の小さな手続きでも大きな負担だろう。","kana":"はじめてかいがいではたらくにんにしてみれば、まいにちのちいさなてつづきでもおおきなふたんだろう。","romaji":"hajimete kaigai de hataraku nin nishitemireba, mainichi no chiisa na tetsuzuki demo ooki na futan darou.","meaning":"Kalau dilihat dari sudut orang yang baru pertama kali bekerja di luar negeri, prosedur kecil sehari-hari pun pasti terasa berat."},
      {"jp":"親にしてみれば、子どもが一人で東京に出るのは心配でたまらないはずだ。","kana":"おやにしてみれば、こどもがひとりでとうきょうにでるのはしんぱいでたまらないはずだ。","romaji":"oya nishitemireba, kodomo ga hitori de toukyou ni deru noha shinpai detamaranaihazuda.","meaning":"Kalau dari sudut pandang orang tua, anak yang pergi sendirian ke Tokyo pasti sangat mengkhawatirkan."},
      {"jp":"店側にしてみれば、急なキャンセルが続くのはかなり痛い。","kana":"みせがわにしてみれば、きゅうなきゃんせるがつづくのはかなりいたい。","romaji":"misegawa nishitemireba, kyuuna kyanseru ga tsuzuku nohakanari itai.","meaning":"Kalau dilihat dari sisi toko, pembatalan mendadak yang terus terjadi tentu sangat merugikan."},
      {"jp":"引っ越したばかりの人にしてみたら、近所のルールは分からなくて当然だ。","kana":"ひっこしたばかりのにんにしてみたら、きんじょのるーるはわからなくてとうぜんだ。","romaji":"hikkoshi tabakarino nin nishitemitara, kinjo no ruuru ha waka ranakute touzen da.","meaning":"Kalau dilihat dari sudut orang yang baru pindah, wajar saja kalau mereka belum paham aturan lingkungan."},
      {"jp":"聞かれた本人にしてみれば、何気ない質問でも答えにくい時がある。","kana":"きかれたほんにんにしてみれば、なにげないしつもんでもこたえにくいときがある。","romaji":"kika reta honnin nishitemireba, nanigena i shitsumon demo kotae nikui toki gaaru.","meaning":"Bagi orang yang ditanya, ada kalanya pertanyaan yang tampak biasa pun sulit dijawab."}
    ]}
  ]},

  {id:"GR-N2-114",level:"N2",title:"〜にあたって / 〜にあたり",summary:"Menyatakan pada saat melakukan hal penting tertentu.",groups:[
    {name:"〜にあたって / 〜にあたり",description:"Sering dipakai di pengumuman, pidato, dan dokumen resmi.",sentences:[
      {"jp":"契約にあたって、事前に重要事項説明を受ける必要があります。","kana":"けいやくにあたって、じぜんにじゅうようじこうせつめいをうけるひつようがあります。","romaji":"keiyaku niatatte, jizen ni juuyoujikou setsumei wo ukeru hitsuyou gaarimasu.","meaning":"Saat membuat kontrak, Anda perlu menerima penjelasan poin-poin penting terlebih dahulu."},
      {"jp":"留学開始にあたり、保険の内容をもう一度確認した。","kana":"りゅうがくかいしにあたり、ほけんのないようをもういちどかくにんした。","romaji":"ryuugaku kaishi niatari, hoken no naiyou womou ichido kakuninshi ta.","meaning":"Saat memulai studi di luar negeri, saya mengecek lagi isi asuransinya."},
      {"jp":"開会にあたり、主催者から一言ごあいさつがあります。","kana":"かいかいにあたり、しゅさいしゃからひとことごあいさつがあります。","romaji":"kaikai niatari, shusaisha kara hitokoto goaisatsugaarimasu.","meaning":"Saat pembukaan, akan ada sambutan singkat dari penyelenggara."},
      {"jp":"新しい仕事を始めるにあたって、生活リズムも整えたい。","kana":"あたらしいしごとをはじめるにあたって、せいかつりずむもととのえたい。","romaji":"atarashii shigoto wo hajime runiatatte, seikatsu rizumu mo totonoe tai.","meaning":"Menjelang mulai pekerjaan baru, saya juga ingin merapikan ritme hidup."},
      {"jp":"受験にあたって、不安な点は早めに先生へ相談してください。","kana":"じゅけんにあたって、ふあんなてんははやめにせんせいへそうだんしてください。","romaji":"juken niatatte, fuan na ten ha hayame ni sensei he soudan shitekudasai.","meaning":"Saat menghadapi ujian masuk, kalau ada kekhawatiran sebaiknya segera konsultasikan ke sensei."}
    ]}
  ]},

  {id:"GR-N2-115",level:"N2",title:"〜際に(は)",summary:"Menyatakan pada saat itu, ketika kesempatan atau momen tersebut terjadi.",groups:[
    {name:"〜際に(は)",description:"Umum dalam pengumuman, aturan, dan tulisan yang rapi.",sentences:[
      {"jp":"ご来館の際には、入口で学生証をご提示ください。","kana":"ごらいかんのさいには、いりぐちでがくせいしょうをごていじください。","romaji":"go raikan no saini ha, iriguchi de gakuseishou wogo teiji kudasai.","meaning":"Saat berkunjung ke perpustakaan ini, mohon tunjukkan kartu pelajar di pintu masuk."},
      {"jp":"お困りの際は、遠慮なくスタッフにお声がけください。","kana":"おこまりのきわは、えんりょなくすたっふにおこえがけください。","romaji":"o komari no kiwa ha, enryo naku sutaffu nio koe gakekudasai.","meaning":"Saat mengalami kesulitan, silakan hubungi staf tanpa sungkan."},
      {"jp":"申請の際に必要な持ち物は、事前にサイトで確認できます。","kana":"しんせいのさいにひつようなもちものは、じぜんにさいとでかくにんできます。","romaji":"shinsei no saini hitsuyou na mochimono ha, jizen ni saito de kakunin dekimasu.","meaning":"Barang yang diperlukan saat pengajuan bisa dicek lebih dulu di situs."},
      {"jp":"日本へ入国する際には、最新の案内を必ず確認したほうがいい。","kana":"にっぽんへにゅうこくするさいには、さいしんのあんないをかならずかくにんしたほうがいい。","romaji":"nippon he nyuukoku suru saini ha, saishin no annai wo kanarazu kakuninshi tahougaii.","meaning":"Saat masuk ke Jepang, sebaiknya pastikan selalu mengecek informasi terbaru."},
      {"jp":"災害の際は、まず身の安全を確保してください。","kana":"さいがいのきわは、まずみのあんぜんをかくほしてください。","romaji":"saigai no kiwa ha, mazu mino anzen wo kakuho shitekudasai.","meaning":"Saat terjadi bencana, pastikan keselamatan diri terlebih dahulu."}
    ]}
  ]},

  {id:"GR-N2-116",level:"N2",title:"〜つつ",summary:"Menyatakan sambil melakukan satu hal, dilakukan juga hal lain, biasanya gaya tulis.",groups:[
    {name:"〜つつ",description:"Lebih formal dan tertulis daripada ながら.",sentences:[
      {"jp":"周囲の反応を見つつ、説明のしかたを少し変えた。","kana":"しゅういのはんのうをみつつ、せつめいのしかたをすこしかえた。","romaji":"shuui no hannou wo mitsu tsu, setsumei noshikatawo sukoshi kae ta.","meaning":"Sambil melihat reaksi sekitar, saya sedikit mengubah cara menjelaskan."},
      {"jp":"駅からの道を確認しつつ、近くの店も何軒か見て回った。","kana":"えきからのみちをかくにんしつつ、ちかくのみせもなんけんかみてまわった。","romaji":"eki karano michi wo kakuninshi tsutsu, chikaku no mise mo nanken ka mite mawatsu ta.","meaning":"Sambil memastikan jalan dari stasiun, saya juga melihat-lihat beberapa toko di sekitar."},
      {"jp":"先輩の助言を受けつつ、自分なりの方法も探している。","kana":"せんぱいのじょげんをうけつつ、じぶんなりのほうほうもさがしている。","romaji":"senpai no jogen wo uke tsutsu, jibun narino houhou mo sagashi teiru.","meaning":"Sambil menerima saran senior, saya juga mencari cara yang cocok bagi diri sendiri."},
      {"jp":"状況を整理しつつ、次に必要な手続きを考えた。","kana":"じょうきょうをせいりしつつ、つぎにひつようなてつづきをかんがえた。","romaji":"joukyou wo seiri shitsutsu, tsugini hitsuyou na tetsuzuki wo kangae ta.","meaning":"Sambil merapikan situasi, saya memikirkan prosedur berikutnya yang diperlukan."},
      {"jp":"昔の面影を残しつつ、新しい店も増えてきた。","kana":"むかしのおもかげをのこしつつ、あたらしいみせもふえてきた。","romaji":"mukashi no omokage wo nokoshi tsutsu, atarashii mise mo fue tekita.","meaning":"Sambil tetap menyisakan nuansa lama, toko-toko baru juga mulai bertambah."}
    ]}
  ]},

  {id:"GR-N2-117",level:"N2",title:"〜折に(は)",summary:"Menyatakan pada kesempatan tertentu.",groups:[
    {name:"〜折に(は)",description:"Terdengar agak formal dan sopan.",sentences:[
      {"jp":"お近くにお越しの折には、ぜひお立ち寄りください。","kana":"おちかくにおこしのおりには、ぜひおたちよりください。","romaji":"o chikaku nio koshi no ori niha, zehio tachi yori kudasai.","meaning":"Saat Anda kebetulan datang ke dekat sini, silakan mampir."},
      {"jp":"日本へいらした折には、この町にも遊びに来てください。","kana":"にっぽんへいらしたおりには、このまちにもあそびにきてください。","romaji":"nippon heirashita ori niha, kono machi nimo asobi ni kite kudasai.","meaning":"Kalau suatu saat Anda datang ke Jepang, mampirlah juga ke kota ini."},
      {"jp":"困った折には、以前お世話になった先生に相談している。","kana":"こまったおりには、いぜんおせわになったせんせいにそうだんしている。","romaji":"komatsu ta ori niha, izen o sewa ninatta sensei ni soudan shiteiru.","meaning":"Pada saat mengalami kesulitan, saya biasanya berkonsultasi dengan sensei yang pernah membantu saya."},
      {"jp":"卒業の折には、家族へきちんと感謝を伝えたい。","kana":"そつぎょうのおりには、かぞくへきちんとかんしゃをつたえたい。","romaji":"sotsugyou no ori niha, kazoku hekichinto kansha wo tsutae tai.","meaning":"Saat kelulusan nanti, saya ingin menyampaikan rasa terima kasih kepada keluarga dengan baik."},
      {"jp":"機会があった折に、近所の神社の歴史を調べてみた。","kana":"きかいがあったおりに、きんじょのじんじゃのれきしをしらべてみた。","romaji":"kikai gaatta ori ni, kinjo no jinja no rekishi wo shirabe temita.","meaning":"Pada suatu kesempatan, saya mencoba meneliti sejarah kuil dekat rumah."}
    ]}
  ]},

  {id:"GR-N2-118",level:"N2",title:"〜に際して",summary:"Menyatakan pada saat yang penting, resmi, atau khusus.",groups:[
    {name:"〜に際して",description:"Lebih formal daripada 際に.",sentences:[
      {"jp":"卒業に際して、お世話になった方々へ手紙を書いた。","kana":"そつぎょうにさいして、おせわになったかたがたへてがみをかいた。","romaji":"sotsugyou ni saishi te, o sewa ninatta katagata he tegami wo kai ta.","meaning":"Menjelang kelulusan, saya menulis surat kepada orang-orang yang telah banyak membantu."},
      {"jp":"契約更新に際して、条件を再確認する必要があります。","kana":"けいやくこうしんにさいして、じょうけんをさいかくにんするひつようがあります。","romaji":"keiyaku koushin ni saishi te, jouken wo saikakunin suru hitsuyou gaarimasu.","meaning":"Saat perpanjangan kontrak, syarat-syaratnya perlu dikonfirmasi lagi."},
      {"jp":"開店に際して、近隣住民へあいさつ回りをしたそうだ。","kana":"かいてんにさいして、きんりんじゅうみんへあいさつまわりをしたそうだ。","romaji":"kaiten ni saishi te, kinrinjuumin heaisatsu mawari woshitasouda.","meaning":"Katanya menjelang pembukaan toko, mereka berkeliling menyapa warga sekitar."},
      {"jp":"移転に際して、営業時間も変更となりました。","kana":"いてんにさいして、えいぎょうじかんもへんこうとなりました。","romaji":"iten ni saishi te, eigyoujikan mo henkou tonarimashita.","meaning":"Sehubungan dengan perpindahan lokasi, jam operasional juga berubah."},
      {"jp":"大会開催に際して、駅周辺では交通規制が行われる。","kana":"たいかいかいさいにさいして、えきしゅうへんではこうつうきせいがおこなわれる。","romaji":"taikaikaisai ni saishi te, ekishuuhen deha koutsuukisei ga okonawa reru.","meaning":"Menjelang penyelenggaraan turnamen, pembatasan lalu lintas akan diberlakukan di sekitar stasiun."}
    ]}
  ]},

  {id:"GR-N2-119",level:"N2",title:"〜か〜ないかのうちに",summary:"Menyatakan sesuatu terjadi hampir bersamaan, begitu A terjadi, langsung B.",groups:[
    {name:"〜か〜ないかのうちに",description:"Menekankan jeda yang sangat singkat.",sentences:[
      {"jp":"授業が終わるか終わらないかのうちに、学生たちは食堂へ向かった。","kana":"じゅぎょうがおわるかおわらないかのうちに、がくせいたちはしょくどうへむかった。","romaji":"jugyou ga owa ruka owa ranaikanouchini, gakusei tachiha shokudou he muka tta.","meaning":"Begitu kelas selesai, para mahasiswa langsung menuju kantin."},
      {"jp":"家に着くか着かないかのうちに、急な雨が降り出した。","kana":"いえにつくかつかないかのうちに、きゅうなあめがおりだした。","romaji":"ie ni tsuku ka tsuka naikanouchini, kyuuna ame ga ori dashi ta.","meaning":"Begitu saya hampir sampai rumah, hujan mendadak turun."},
      {"jp":"駅の階段を上がるか上がらないかのうちに、発車ベルが鳴った。","kana":"えきのかいだんをあがるかあがらないかのうちに、はっしゃべるがなった。","romaji":"eki no kaidan wo aga ruka aga ranaikanouchini, hassha beru ga natsu ta.","meaning":"Begitu saya hampir selesai menaiki tangga stasiun, bel keberangkatan berbunyi."},
      {"jp":"席に座るか座らないかのうちに、名前を呼ばれた。","kana":"せきにすわるかすわらないかのうちに、なまえをよばれた。","romaji":"seki ni suwaru ka suwara naikanouchini, namae wo yoba reta.","meaning":"Begitu saya baru hampir duduk, nama saya dipanggil."},
      {"jp":"店が開くか開かないかのうちに、入口に列ができていた。","kana":"みせがひらくかひらかないかのうちに、いりぐちにれつができていた。","romaji":"mise ga hiraku ka hiraka naikanouchini, iriguchi ni retsu gadekiteita.","meaning":"Begitu toko hampir buka, antrean sudah terbentuk di pintu masuk."}
    ]}
  ]},

  {id:"GR-N2-120",level:"N2",title:"〜かと思うと / 〜かと思ったら",summary:"Menyatakan perubahan atau kejadian kedua terjadi sangat cepat setelah yang pertama.",groups:[
    {name:"〜かと思うと / 〜かと思ったら",description:"Sering dipakai untuk perubahan mendadak yang mengejutkan.",sentences:[
      {"jp":"さっきまで晴れていたかと思ったら、急に土砂降りになった。","kana":"さっきまではれていたかとおもったら、きゅうにどしゃぶりになった。","romaji":"sakkimade hare teitakato omotta ra, kyuuni doshaburi ninatta.","meaning":"Baru saja tadi cerah, tahu-tahu hujan deras turun."},
      {"jp":"子どもたちは静かになったかと思うと、次の瞬間にはまた走り回っていた。","kana":"こどもたちはしずかになったかとおもうと、つぎのしゅんかんにはまたはしりまわっていた。","romaji":"kodomo tachiha shizuka ninattakato omou to, tsugino shunkan nihamata hashiri mawatsu teita.","meaning":"Anak-anak baru saja diam, tahu-tahu detik berikutnya mereka sudah berlari lagi."},
      {"jp":"駅に着いたかと思ったら、もう乗り換えのアナウンスが流れた。","kana":"えきについたかとおもったら、もうのりかえのあなうんすがながれた。","romaji":"eki ni tsui takato omotta ra, mou norikae no anaunsu ga nagare ta.","meaning":"Begitu sampai di stasiun, langsung terdengar pengumuman untuk transit."},
      {"jp":"春になったかと思ったら、また寒さが戻ってきた。","kana":"はるになったかとおもったら、またさむさがもどってきた。","romaji":"haru ninattakato omotta ra, mata samusa ga modotsu tekita.","meaning":"Baru saja terasa musim semi datang, tahu-tahu dinginnya kembali lagi."},
      {"jp":"彼は怒ったかと思ったら、すぐにいつもの表情に戻った。","kana":"かれはいかったかとおもったら、すぐにいつものひょうじょうにもどった。","romaji":"kareha ikatsu takato omotta ra, suguniitsumono hyoujou ni modotsu ta.","meaning":"Baru saya kira dia marah, ternyata segera kembali ke ekspresi biasanya."}
    ]}
  ]},

  {id:"GR-N2-121",level:"N2",title:"〜次第",summary:"Menyatakan akan segera melakukan sesuatu begitu syarat atau tahap sebelumnya selesai.",groups:[
    {name:"〜次第",description:"Sering dipakai dalam pengumuman atau bahasa kerja.",sentences:[
      {"jp":"準備ができ次第、順番にご案内いたします。","kana":"じゅんびができしだい、じゅんばんにごあんないいたします。","romaji":"junbi gadeki shidai, junban nigo annai itashimasu.","meaning":"Begitu persiapannya selesai, kami akan memandu Anda satu per satu."},
      {"jp":"結果が分かり次第、ご連絡します。","kana":"けっかがわかりしだい、ごれんらくします。","romaji":"kekka ga waka ri shidai, go renraku shimasu.","meaning":"Begitu hasilnya diketahui, saya akan menghubungi Anda."},
      {"jp":"資料がそろい次第、申請書を提出する予定です。","kana":"しりょうがそろいしだい、しんせいしょをていしゅつするよていです。","romaji":"shiryou gasoroi shidai, shinseisho wo teishutsu suru yotei desu.","meaning":"Begitu semua materi lengkap, saya berencana menyerahkan formulir pengajuan."},
      {"jp":"会場の安全確認が終わり次第、入場を開始します。","kana":"かいじょうのあんぜんかくにんがおわりしだい、にゅうじょうをかいしします。","romaji":"kaijou no anzenkakunin ga owari shidai, nyuujou wo kaishi shimasu.","meaning":"Begitu pemeriksaan keamanan venue selesai, masuk akan dibuka."},
      {"jp":"新しい情報が入り次第、掲示板にも反映されるはずです。","kana":"あたらしいじょうほうがいりしだい、けいじばんにもはんえいされるはずです。","romaji":"atarashii jouhou ga iri shidai, keijiban nimo han'ei sareruhazudesu.","meaning":"Begitu ada informasi baru masuk, seharusnya itu juga akan ditampilkan di papan pengumuman."}
    ]}
  ]},

  {id:"GR-N2-122",level:"N2",title:"〜て以来 / 〜てこのかた",summary:"Menyatakan sejak saat itu sampai sekarang keadaan terus berlanjut.",groups:[
    {name:"〜て以来 / 〜てこのかた",description:"てこのかた terdengar lebih formal dan puitis daripada て以来.",sentences:[
      {"jp":"日本に来て以来、電車の時間の正確さに毎回感心している。","kana":"にっぽんにきていらい、でんしゃのじかんのせいかくさにまいかいかんしんしている。","romaji":"nippon ni kite irai, densha no jikan no seikaku sani maikai kanshin shiteiru.","meaning":"Sejak datang ke Jepang, saya selalu kagum pada ketepatan waktu keretanya."},
      {"jp":"この町に住み始めて以来、朝の散歩が日課になった。","kana":"このまちにすみはじめていらい、あさのさんぽがにっかになった。","romaji":"kono machi ni sumi hajime te irai, asa no sanpo ga nikka ninatta.","meaning":"Sejak mulai tinggal di kota ini, jalan pagi menjadi kebiasaan harian saya."},
      {"jp":"先生に会って以来、日本語の勉強の見方が変わった。","kana":"せんせいにあっていらい、にほんごのべんきょうのみかたがかわった。","romaji":"sensei ni atsu te irai, nihongo no benkyou no mikata ga kawa tta.","meaning":"Sejak bertemu sensei itu, cara pandang saya terhadap belajar bahasa Jepang berubah."},
      {"jp":"祖父は手術してこのかた、食事にかなり気をつけている。","kana":"そふはしゅじゅつしてこのかた、しょくじにかなりきをつけている。","romaji":"sofu ha shujutsu shitekonokata, shokuji nikanari kiwo tsuketeiru.","meaning":"Sejak menjalani operasi, kakek sangat memperhatikan makanannya."},
      {"jp":"あの日連絡をもらって以来、ずっと結果を待っている。","kana":"あのにちれんらくをもらっていらい、ずっとけっかをまっている。","romaji":"ano nichiren raku womoratte irai, zutto kekka wo matsu teiru.","meaning":"Sejak menerima kabar hari itu, saya terus menunggu hasilnya."}
    ]}
  ]},

  {id:"GR-N2-123",level:"N2",title:"〜に先立ち / 〜に先立って",summary:"Menyatakan dilakukan terlebih dahulu sebelum acara atau hal utama.",groups:[
    {name:"〜に先立ち / 〜に先立って",description:"Nuansanya formal dan sering dipakai untuk acara resmi.",sentences:[
      {"jp":"式典に先立ち、会場の安全確認が行われた。","kana":"しきてんにさきだち、かいじょうのあんぜんかくにんがおこなわれた。","romaji":"shikiten ni sakidachi, kaijou no anzenkakunin ga okonawa reta.","meaning":"Sebelum upacara dimulai, pemeriksaan keamanan venue dilakukan."},
      {"jp":"新学期に先立って、保護者向けの説明会が開かれる。","kana":"しんがっきにさきだって、ほごしゃむけのせつめいかいがひらかれる。","romaji":"shingakki ni sakidatsu te, hogosha muke no setsumeikai ga hiraka reru.","meaning":"Sebelum semester baru dimulai, akan diadakan sesi penjelasan bagi orang tua."},
      {"jp":"工事開始に先立ち、近隣住民への案内が配られた。","kana":"こうじかいしにさきだち、きんりんじゅうみんへのあんないがくばられた。","romaji":"kouji kaishi ni sakidachi, kinrinjuumin heno annai ga kubara reta.","meaning":"Sebelum konstruksi dimulai, pemberitahuan dibagikan kepada warga sekitar."},
      {"jp":"本格導入に先立って、まず小規模なテスト運用をするらしい。","kana":"ほんかくどうにゅうにさきだって、まずしょうきぼなてすとうんようをするらしい。","romaji":"honkaku dounyuu ni sakidatsu te, mazu shoukibo na tesuto unyou wosururashii.","meaning":"Katanya sebelum penerapan penuh, mereka akan melakukan uji coba skala kecil terlebih dahulu."},
      {"jp":"発表会に先立ち、機材の最終確認を済ませておきたい。","kana":"はっぴょうかいにさきだち、きざいのさいしゅうかくにんをすませておきたい。","romaji":"happyoukai ni sakidachi, kizai no saishuu kakunin wo suma seteokitai.","meaning":"Sebelum presentasi dimulai, saya ingin menyelesaikan pengecekan akhir peralatannya."}
    ]}
  ]},

  {id:"GR-N2-124",level:"N2",title:"〜うえで",summary:"Menyatakan setelah melakukan langkah pertama, lalu baru langkah berikutnya.",groups:[
    {name:"〜うえで",description:"Banyak dipakai untuk prosedur, penjelasan, dan pertimbangan.",sentences:[
      {"jp":"説明をよく読んだうえで、申込フォームを送信してください。","kana":"せつめいをよくよんだうえで、もうしこみふぉーむをそうしんしてください。","romaji":"setsumei woyoku yonda uede, moushikomi foomu wo soushin shitekudasai.","meaning":"Setelah membaca penjelasannya dengan baik, silakan kirim formulir pendaftaran."},
      {"jp":"家族と相談したうえで、進学先を決めたい。","kana":"かぞくとそうだんしたうえで、しんがくさきをきめたい。","romaji":"kazoku to soudan shitauede, shingakusaki wo kime tai.","meaning":"Saya ingin memutuskan tempat studi setelah berdiskusi dengan keluarga."},
      {"jp":"実際に見学したうえで、その部屋を借りるか判断する。","kana":"じっさいにけんがくしたうえで、そのへやをかりるかはんだんする。","romaji":"jissaini kengaku shitauede, sono heya wo kari ruka handan suru.","meaning":"Saya akan memutuskan apakah akan menyewa kamar itu setelah melihat langsung."},
      {"jp":"先生の助言を聞いたうえで、研究テーマをしぼった。","kana":"せんせいのじょげんをきいたうえで、けんきゅうてーまをしぼった。","romaji":"sensei no jogen wo kii tauede, kenkyuu teema woshibotta.","meaning":"Setelah mendengar saran sensei, saya mempersempit tema penelitian."},
      {"jp":"体調を確認したうえで、明日の予定を決めましょう。","kana":"たいちょうをかくにんしたうえで、あしたのよていをきめましょう。","romaji":"taichou wo kakuninshi tauede, ashita no yotei wo kime mashou.","meaning":"Mari tentukan rencana besok setelah memastikan kondisi tubuh."}
    ]}
  ]},

  {id:"GR-N2-125",level:"N2",title:"〜にかけては",summary:"Menyatakan kalau soal bidang itu, orang atau hal tersebut sangat menonjol.",groups:[
    {name:"〜にかけては",description:"Dipakai untuk kelebihan yang khusus.",sentences:[
      {"jp":"接客の丁寧さにかけては、この店は駅前でも評判がいい。","kana":"せっきゃくのていねいさにかけては、このみせはえきまえでもひょうばんがいい。","romaji":"sekkyaku no teinei sanikaketeha, kono mise ha ekimae demo hyouban gaii.","meaning":"Kalau soal keramahan pelayanan, toko ini terkenal baik bahkan di area depan stasiun."},
      {"jp":"行動の早さにかけては、彼女の右に出る人はいない。","kana":"こうどうのはやさにかけては、かのじょのみぎにでるにんはいない。","romaji":"koudou no hayasa nikaketeha, kanojo no migi ni deru nin hainai.","meaning":"Kalau soal cepat bertindak, tidak ada yang mengalahkan dia."},
      {"jp":"日本の季節行事の知識にかけては、うちの先生は本当に詳しい。","kana":"にっぽんのきせつぎょうじのちしきにかけては、うちのせんせいはほんとうにくわしい。","romaji":"nippon no kisetsu gyouji no chishiki nikaketeha, uchino sensei ha hontou ni kuwashii.","meaning":"Kalau soal pengetahuan tentang tradisi musiman Jepang, sensei kami benar-benar sangat paham."},
      {"jp":"早起きにかけては自信があるので、朝番でも大丈夫です。","kana":"はやおきにかけてはじしんがあるので、あさばんでもだいじょうぶです。","romaji":"hayaoki nikaketeha jishin gaarunode, asa ban demo daijoubu desu.","meaning":"Kalau soal bangun pagi saya percaya diri, jadi shift pagi pun tidak masalah."},
      {"jp":"地元の店情報にかけては、商店街の会長に聞くのが一番早い。","kana":"じもとのみせじょうほうにかけては、しょうてんがいのかいちょうにきくのがいちばんはやい。","romaji":"jimoto no mise jouhou nikaketeha, shoutengai no kaichou ni kiku noga ichiban hayai.","meaning":"Kalau soal info toko-toko setempat, paling cepat memang bertanya ke ketua area pertokoan."}
    ]}
  ]},

  {id:"GR-N2-126",level:"N2",title:"〜とは",summary:"Menyatakan kejutan, definisi, atau penegasan terhadap sesuatu yang tidak disangka.",groups:[
    {name:"〜とは",description:"Maknanya bergantung konteks, sering terdengar seperti wah ternyata.",sentences:[
      {"jp":"平日の昼にこんなに混むとは思わなかった。","kana":"へいじつのひるにこんなにこむとはおもわなかった。","romaji":"heijitsu no hiru nikonnani komu toha omowa nakatta.","meaning":"Saya tidak menyangka siang hari kerja pun akan seramai ini."},
      {"jp":"日本で桜を見ながら入学式を迎えられるとは、来る前は想像していなかった。","kana":"にっぽんでさくらをみながらにゅうがくしきをむかえられるとは、くるまえはそうぞうしていなかった。","romaji":"nippon de sakura wo mina gara nyuugakushiki wo mukae rarerutoha, kuru mae ha souzou shiteinakatta.","meaning":"Sebelum datang ke sini saya tidak membayangkan bisa menyambut awal sekolah sambil melihat bunga sakura di Jepang."},
      {"jp":"報連相とは、仕事の基本になる大事な考え方の一つです。","kana":"ほうれんそうとは、しごとのきほんになるだいじなかんがえかたのひとつです。","romaji":"hou ren sou toha, shigoto no kihon ninaru daiji na kangaekata no hitotsu desu.","meaning":"Hou-ren-sou adalah salah satu cara pikir penting yang menjadi dasar dalam pekerjaan."},
      {"jp":"たった一駅違うだけで、雰囲気がここまで変わるとは驚きだ。","kana":"たったひとえきちがうだけで、ふんいきがここまでかわるとはおどろきだ。","romaji":"tatta hitoeki chigau dakede, fun'iki gakokomade kawa rutoha odoroki da.","meaning":"Saya terkejut hanya beda satu stasiun saja suasananya bisa berubah sejauh ini."},
      {"jp":"自分が人前で日本語を話す日が来るとは、昔は思ってもみなかった。","kana":"じぶんがひとまえでにほんごをはなすにちがくるとは、むかしはおもってもみなかった。","romaji":"jibun ga hitomae de nihongo wo hanasu nichi ga kuru toha, mukashi ha omotte mominakatta.","meaning":"Dulu saya sama sekali tidak menyangka akan tiba hari ketika saya berbicara bahasa Jepang di depan orang banyak."}
    ]}
  ]},

  {id:"GR-N2-127",level:"N2",title:"ということは",summary:"Menyatakan kesimpulan yang ditarik dari informasi sebelumnya.",groups:[
    {name:"ということは",description:"Sering diterjemahkan kalau begitu berarti.",sentences:[
      {"jp":"最終の受付が六時までということは、五時半には着いておきたい。","kana":"さいしゅうのうけつけがろくときまでということは、ごじはんにはついておきたい。","romaji":"saishuu no uketsuke ga roku toki madetoiukotoha, goji han niha tsui teokitai.","meaning":"Kalau begitu berarti karena pendaftaran terakhir sampai jam enam, saya ingin sudah sampai setengah enam."},
      {"jp":"来週は祝日があるということは、ゴミ出しの日も変わるかもしれない。","kana":"らいしゅうはしゅくじつがあるということは、ごみだしのにちもかわるかもしれない。","romaji":"raishuu ha shukujitsu gaarutoiukotoha, gomi dashi no nichi mo kawa rukamoshirenai.","meaning":"Kalau begitu berarti karena minggu depan ada hari libur nasional, jadwal buang sampah juga mungkin berubah."},
      {"jp":"この部屋は即入居可ということは、もうクリーニングも終わっているんですね。","kana":"このへやはそくにゅうきょかということは、もうくりーにんぐもおわっているんですね。","romaji":"kono heya ha soku nyuukyo ka toiukotoha, mou kuriiningu mo owa tteirundesune.","meaning":"Kalau begitu berarti karena kamar ini bisa langsung ditempati, pembersihannya juga sudah selesai ya."},
      {"jp":"彼がまだ来ていないということは、電車が遅れているのかも。","kana":"かれがまだきていないということは、でんしゃがおくれているのかも。","romaji":"kare gamada kite inaitoiukotoha, densha ga okure teirunokamo.","meaning":"Kalau begitu berarti karena dia belum datang, mungkin keretanya terlambat."},
      {"jp":"発表者が三人増えるということは、持ち時間も少し短くなりそうだ。","kana":"はっぴょうしゃがさんにんふえるということは、もちじかんもすこしみじかくなりそうだ。","romaji":"happyousha ga sannin fue rutoiukotoha, mochijikan mo sukoshi mijikaku narisouda.","meaning":"Kalau begitu berarti karena presenternya bertambah tiga orang, waktu per orang juga akan sedikit lebih singkat."}
    ]}
  ]},

  {id:"GR-N2-128",level:"N2",title:"〜まい",summary:"Menyatakan niat untuk tidak melakukan atau dugaan kuat bahwa sesuatu tidak akan terjadi.",groups:[
    {name:"〜まい",description:"Bentuk ini terdengar tertulis atau agak kaku.",sentences:[
      {"jp":"もう同じ失敗は繰り返すまいと、手順を全部見直した。","kana":"もうおなじしっぱいはくりかえすまいと、てじゅんをぜんぶみなおした。","romaji":"mou onaji shippai ha kurikaesu maito, tejun wo zenbu minaoshi ta.","meaning":"Dengan tekad tidak akan mengulangi kesalahan yang sama, saya meninjau ulang semua prosedur."},
      {"jp":"彼はそんな約束を忘れるまい。","kana":"かれはそんなやくそくをわすれるまい。","romaji":"kareha sonna yakusoku wo wasure rumai.","meaning":"Dia pasti tidak akan melupakan janji seperti itu."},
      {"jp":"二度と終電を逃すまいと、最近は早めに切り上げている。","kana":"にどとしゅうでんをのがすまいと、さいきんははやめにきりあげている。","romaji":"nido to shuuden wo nogasu maito, saikin ha hayame ni kiriage teiru.","meaning":"Dengan tekad agar tidak ketinggalan kereta terakhir lagi, belakangan saya selalu pulang lebih cepat."},
      {"jp":"これ以上迷惑をかけるまいとして、一人で抱え込んでしまった。","kana":"これいじょうめいわくをかけるまいとして、ひとりでかかえこんでしまった。","romaji":"kore ijou meiwaku wokakerumaitoshite, hitori de kakae kon deshimatta.","meaning":"Karena berniat tidak ingin merepotkan orang lagi, saya malah memikul semuanya sendirian."},
      {"jp":"あの先生なら、学生の努力を見落とすまい。","kana":"あのせんせいなら、がくせいのどりょくをみおとすまい。","romaji":"ano sensei nara, gakusei no doryoku wo mioto sumai.","meaning":"Kalau sensei itu, saya yakin beliau tidak akan melewatkan usaha muridnya."}
    ]}
  ]},

  {id:"GR-N2-129",level:"N2",title:"〜ようか〜まいか",summary:"Menyatakan kebimbangan antara melakukan atau tidak melakukan sesuatu.",groups:[
    {name:"〜ようか〜まいか",description:"Sering dipakai saat benar-benar sedang mempertimbangkan dua pilihan.",sentences:[
      {"jp":"その講座に申し込もうか申し込むまいか、締め切り直前まで迷っている。","kana":"そのこうざにもうしこもうかもうしこむまいか、しめきりちょくぜんまでまよっている。","romaji":"sono kouza ni moushikomo uka moushikomu maika, shimekiri chokuzen made mayotsu teiru.","meaning":"Saya masih bimbang sampai menjelang tenggat apakah akan mendaftar kelas itu atau tidak."},
      {"jp":"引っ越そうかこのまま住み続けまいか、家賃更新の前に決めたい。","kana":"ひっこそうかこのまますみつづけまいか、やちんこうしんのまえにきめたい。","romaji":"hikkoso ukakonomama sumi tsuzuke maika, yachin koushin no mae ni kime tai.","meaning":"Saya ingin memutuskan sebelum perpanjangan sewa apakah akan pindah atau tetap tinggal di sini."},
      {"jp":"話そうか話すまいか迷っているうちに、タイミングを逃してしまった。","kana":"はなそうかはなすまいかまよっているうちに、たいみんぐをのがしてしまった。","romaji":"hanaso uka hanasu maika mayotsu teiruuchini, taimingu wo nogashi teshimatta.","meaning":"Saat saya bimbang mau bicara atau tidak, saya malah kehilangan timing."},
      {"jp":"買おうか買うまいか悩んでいるうちに、限定品は売り切れてしまった。","kana":"かおうかかうまいかなやんでいるうちに、げんていひんはうりきれてしまった。","romaji":"kao uka kau maika nayan deiruuchini, genteihin ha urikire teshimatta.","meaning":"Saat saya bimbang mau beli atau tidak, barang edisi terbatas itu malah habis."},
      {"jp":"参加しようかするまいかは、明日の体調で決めるつもりだ。","kana":"さんかしようかするまいかは、あしたのたいちょうできめるつもりだ。","romaji":"sanka shiyoukasurumaikaha, ashita no taichou de kime rutsumorida.","meaning":"Saya berniat memutuskan ikut atau tidak berdasarkan kondisi tubuh besok."}
    ]}
  ]},

  {id:"GR-N2-130",level:"N2",title:"〜つもり",summary:"Menyatakan keyakinan pribadi atau cara pandang subjektif bahwa seseorang merasa dirinya begini.",groups:[
    {name:"〜つもり",description:"Di N2, bentuk ini sering dipakai untuk kesadaran diri atau anggapan subjektif.",sentences:[
      {"jp":"自分では丁寧に話したつもりだったが、少しかたく聞こえたかもしれない。","kana":"じぶんではていねいにはなしたつもりだったが、すこしかたくきこえたかもしれない。","romaji":"jibun deha teinei ni hanashi tatsumoridattaga, sukoshi kataku kiko etakamoshirenai.","meaning":"Saya merasa tadi sudah bicara dengan sopan, tapi mungkin terdengar agak kaku."},
      {"jp":"まだ若いつもりでも、無理をすると次の日に響く。","kana":"まだわかいつもりでも、むりをするとつぎのにちにひびく。","romaji":"mada wakai tsumoridemo, muri wosuruto tsugino nichi ni hibiku.","meaning":"Walaupun merasa diri masih muda, kalau memaksakan diri efeknya terasa keesokan hari."},
      {"jp":"分かっているつもりでいたが、実際に手続きをすると迷うことが多かった。","kana":"わかっているつもりでいたが、じっさいにてつづきをするとまようことがおおかった。","romaji":"waka tteirutsumorideitaga, jissaini tetsuzuki wosuruto mayou kotoga ooka tta.","meaning":"Saya kira sudah paham, tapi saat benar-benar menjalani prosedur ternyata ada banyak hal yang membingungkan."},
      {"jp":"簡単な案内を書いたつもりでも、読む人には難しいことがある。","kana":"かんたんなあんないをかいたつもりでも、よむにんにはむずかしいことがある。","romaji":"kantan na annai wo kai tatsumoridemo, yomu nin niha muzukashii kotogaaru.","meaning":"Walaupun saya merasa sudah menulis petunjuk yang sederhana, bagi pembaca itu tetap bisa terasa sulit."},
      {"jp":"休んだつもりでも、頭の中では仕事のことばかり考えていた。","kana":"やすんだつもりでも、あたまのなかではしごとのことばかりかんがえていた。","romaji":"yasun datsumoridemo, atama no naka deha shigoto nokotobakari kangae teita.","meaning":"Walaupun merasa sudah beristirahat, di kepala saya ternyata tetap memikirkan pekerjaan terus."}
    ]}
  ]},

  {id:"GR-N2-131",level:"N2",title:"〜ものがある",summary:"Menyatakan ada sesuatu yang kuat terasa, sulit dijelaskan, atau menyentuh perasaan.",groups:[
    {name:"〜ものがある",description:"Sering dipakai untuk penilaian subjektif yang dalam.",sentences:[
      {"jp":"昔ながらの商店街には、今の大型店にはない温かいものがある。","kana":"むかしながらのしょうてんがいには、いまのおおがたてんにはないあたたかいものがある。","romaji":"mukashi nagarano shoutengai niha, ima no oogataten nihanai atatakai monogaaru.","meaning":"Di area pertokoan tradisional ada kehangatan yang tidak dimiliki toko besar modern."},
      {"jp":"一人で生活を整えていく大変さには、実際に住んでみて初めて分かるものがある。","kana":"ひとりでせいかつをととのえていくたいへんさには、じっさいにすんでみてはじめてわかるものがある。","romaji":"hitori de seikatsu wo totonoe teiku taihen saniha, jissaini sun demite hajimete waka rumonogaaru.","meaning":"Ada hal tentang sulitnya menata hidup sendiri yang baru benar-benar dipahami setelah menjalaninya."},
      {"jp":"災害の記録を読むと、今の備えについて考えさせられるものがある。","kana":"さいがいのきろくをよむと、いまのそなえについてかんがえさせられるものがある。","romaji":"saigai no kiroku wo yomu to, ima no sonae nitsuite kangae saserarerumonogaaru.","meaning":"Saat membaca catatan bencana, ada sesuatu yang membuat kita memikirkan kesiapan diri saat ini."},
      {"jp":"異国で頑張る人の話には、胸を打たれるものがある。","kana":"いこくでがんばるにんのはなしには、むねをうたれるものがある。","romaji":"ikoku de ganbaru nin no hanashi niha, mune wo uta rerumonogaaru.","meaning":"Ada sesuatu yang menggetarkan hati dalam cerita orang yang berjuang di negeri asing."},
      {"jp":"長く使われてきた道具には、それだけの重みを感じさせるものがある。","kana":"ながくつかわれてきたどうぐには、それだけのおもみをかんじさせるものがある。","romaji":"nagaku tsukawa retekita dougu niha, soredakeno omomi wo kanji saserumonogaaru.","meaning":"Pada alat yang telah dipakai lama, ada sesuatu yang membuat kita merasakan bobot sejarahnya."}
    ]}
  ]},

  {id:"GR-N2-132",level:"N2",title:"〜ことに",summary:"Menyatakan perasaan pembicara terhadap seluruh kejadian, seperti untungnya, anehnya, sedihnya.",groups:[
    {name:"〜ことに",description:"Biasanya memakai kata seperti 驚いたことに, 幸いなことに.",sentences:[
      {"jp":"幸いなことに、必要な書類はその場で全部そろえられた。","kana":"さいわいなことに、ひつようなしょるいはそのばでぜんぶそろえられた。","romaji":"saiwai nakotoni, hitsuyou na shorui hasono ba de zenbu soroerareta.","meaning":"Untungnya, dokumen yang diperlukan bisa dilengkapi semuanya di tempat itu juga."},
      {"jp":"驚いたことに、その小さな店には海外からのお客さんも多かった。","kana":"おどろいたことに、そのちいさなみせにはかいがいからのおきゃくさんもおおかった。","romaji":"odoroi takotoni, sono chiisa na mise niha kaigai karanoo kyaku sanmo ooka tta.","meaning":"Mengejutkannya, toko kecil itu juga punya banyak pelanggan dari luar negeri."},
      {"jp":"残念なことに、今年の地域祭りは中止になった。","kana":"ざんねんなことに、こんねんのちいきまつりはちゅうしになった。","romaji":"zannen nakotoni, konnen no chiiki matsuri ha chuushi ninatta.","meaning":"Sayangnya, festival lingkungan tahun ini dibatalkan."},
      {"jp":"ありがたいことに、近所の人がゴミ出しのルールを丁寧に教えてくれた。","kana":"ありがたいことに、きんじょのにんがごみだしのるーるをていねいにおしえてくれた。","romaji":"arigataikotoni, kinjo no nin ga gomi dashi no ruuru wo teinei ni oshie tekureta.","meaning":"Syukurnya, tetangga sekitar menjelaskan aturan buang sampah dengan rinci."},
      {"jp":"不思議なことに、最初は苦手だった納豆が最近は平気になってきた。","kana":"ふしぎなことに、さいしょはにがてだったなっとうがさいきんはへいきになってきた。","romaji":"fushigi nakotoni, saisho ha nigate datta nattou ga saikin ha heiki ninattekita.","meaning":"Aneh tapi nyata, natto yang dulu saya tidak suka belakangan justru mulai terasa biasa saja."}
    ]}
  ]},

  {id:"GR-N2-133",level:"N2",title:"〜ことか",summary:"Menyatakan tingkat perasaan yang sangat kuat, seperti betapa.",groups:[
    {name:"〜ことか",description:"Sering dipakai dalam bentuk どんなに〜ことか atau 〜ことか.",sentences:[
      {"jp":"一人で病院へ行く日、どれほど心細かったことか。","kana":"ひとりでびょういんへいくにち、どれほどこころぼそかったことか。","romaji":"hitori de byouin he iku nichi, dorehodo kokorobosoka ttakotoka.","meaning":"Betapa cemasnya saya pada hari harus pergi ke rumah sakit sendirian."},
      {"jp":"合格通知を開く瞬間、どんなに緊張したことか。","kana":"ごうかくつうちをひらくしゅんかん、どんなにきんちょうしたことか。","romaji":"goukakutsuuchi wo hiraku shunkan, donnani kinchoushi takotoka.","meaning":"Betapa tegangnya saya saat membuka surat kelulusan itu."},
      {"jp":"家族からの荷物が届いた時、どれだけうれしかったことか。","kana":"かぞくからのにもつがとどいたとき、どれだけうれしかったことか。","romaji":"kazoku karano nimotsu ga todoi ta toki, doredakeureshikattakotoka.","meaning":"Betapa senangnya saya saat paket dari keluarga tiba."},
      {"jp":"初めて給料を受け取った日の安心感は、今でも忘れられないことか。","kana":"はじめてきゅうりょうをうけとったにちのあんしんかんは、いまでもわすれられないことか。","romaji":"hajimete kyuuryou wo uketotsu ta nichi no anshinkan ha, ima demo wasure rarenaikotoka.","meaning":"Betapa leganya saya pada hari menerima gaji pertama, sampai sekarang rasanya sulit dilupakan."},
      {"jp":"あの雪の日に駅まで歩いた時、どんなに寒かったことか。","kana":"あのゆきのにちにえきまであるいたとき、どんなにさむかったことか。","romaji":"ano yuki no nichi ni eki made arui ta toki, donnani samuka ttakotoka.","meaning":"Betapa dinginnya saat saya berjalan ke stasiun pada hari bersalju itu."}
    ]}
  ]},

  {id:"GR-N2-134",level:"N2",title:"〜ないものか",summary:"Menyatakan harapan atau keinginan agar sesuatu bisa terjadi.",groups:[
    {name:"〜ないものか",description:"Nuansanya berharap, apakah tidak bisa ya.",sentences:[
      {"jp":"この手続き、もう少し簡単にならないものか。","kana":"このてつづき、もうすこしかんたんにならないものか。","romaji":"kono tetsuzuki, mou sukoshi kantan ninaranaimonoka.","meaning":"Apakah prosedur ini tidak bisa dibuat sedikit lebih sederhana ya."},
      {"jp":"駅前の空き店舗を、地域の交流スペースにできないものかと考えている。","kana":"えきまえのあきてんぽを、ちいきのこうりゅうすぺーすにできないものかとかんがえている。","romaji":"ekimae no aki tenpo wo, chiiki no kouryuu supeesu nidekinaimonokato kangae teiru.","meaning":"Saya berpikir apakah toko kosong di depan stasiun itu tidak bisa dijadikan ruang interaksi warga."},
      {"jp":"忙しい時期でも、週に一度くらいは早く帰れないものか。","kana":"いそがしいじきでも、しゅうにいちどくらいははやくかえれないものか。","romaji":"isogashii jiki demo, shuu ni ichido kuraiha hayaku kaere naimonoka.","meaning":"Apakah bahkan di masa sibuk pun saya tidak bisa pulang cepat setidaknya seminggu sekali."},
      {"jp":"外国人向けの案内が、もっと分かりやすくならないものだろうか。","kana":"がいこくじんむけのあんないが、もっとわかりやすくならないものだろうか。","romaji":"gaikokujin muke no annai ga, motto waka riyasukunaranaimonodarouka.","meaning":"Apakah petunjuk untuk warga asing tidak bisa dibuat lebih mudah dipahami ya."},
      {"jp":"商店街と学校が一緒に何かできないものかと、最近よく話題になる。","kana":"しょうてんがいとがっこうがいっしょになにかできないものかと、さいきんよくわだいになる。","romaji":"shoutengai to gakkou ga isshoni nanika dekinaimonokato, saikin yoku wadai ninaru.","meaning":"Belakangan sering dibicarakan apakah area pertokoan dan sekolah tidak bisa membuat sesuatu bersama."}
    ]}
  ]},

  {id:"GR-N2-135",level:"N2",title:"〜たいものだ",summary:"Menyatakan harapan atau keinginan yang kuat dengan nada agak dewasa atau reflektif.",groups:[
    {name:"〜たいものだ",description:"Sering dipakai untuk hal yang belum tentu mudah tercapai.",sentences:[
      {"jp":"せっかく日本に住んでいるのだから、季節の行事をもっと大切にしたいものだ。","kana":"せっかくにっぽんにすんでいるのだから、きせつのぎょうじをもっとたいせつにしたいものだ。","romaji":"sekkaku nippon ni sun deirunodakara, kisetsu no gyouji womotto taisetsu nishitaimonoda.","meaning":"Mumpung tinggal di Jepang, saya ingin lebih menghargai tradisi musiman."},
      {"jp":"忙しくても、感謝の言葉だけは忘れずにいたいものだ。","kana":"いそがしくても、かんしゃのことばだけはわすれずにいたいものだ。","romaji":"isogashiku temo, kansha no kotoba dakeha wasure zuniitaimonoda.","meaning":"Meskipun sibuk, saya ingin tetap tidak melupakan kata-kata terima kasih."},
      {"jp":"次に引っ越す時は、駅近だけでなく静かさも重視したいものだ。","kana":"つぎにひっこすときは、えきちかだけでなくしずかさもじゅうししたいものだ。","romaji":"tsugini hikkosu toki ha, ekichika dakedenaku shizuka samo juushi shitaimonoda.","meaning":"Kalau nanti pindah lagi, saya ingin menimbang bukan hanya dekat stasiun tetapi juga ketenangannya."},
      {"jp":"子どもたちには、安心して学べる環境を残したいものです。","kana":"こどもたちには、あんしんしてまなべるかんきょうをのこしたいものです。","romaji":"kodomo tachiniha, anshinshi te manabe ru kankyou wo nokoshita imonodesu.","meaning":"Saya ingin meninggalkan lingkungan tempat anak-anak bisa belajar dengan tenang."},
      {"jp":"せっかく出会えた人との縁は、できるだけ長く大事にしたいものだ。","kana":"せっかくであえたにんとのへりは、できるだけながくだいじにしたいものだ。","romaji":"sekkaku deae ta nin tono heri ha, dekirudake nagaku daiji nishitaimonoda.","meaning":"Hubungan dengan orang-orang yang sudah bisa saya temui ini ingin saya jaga selama mungkin."}
    ]}
  ]}

];
