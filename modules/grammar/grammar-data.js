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
  ]}]}
,

  {
      id:"GR-N1-01",
      level:"N1",
      title:"〜あっての",
      summary:"Menekankan bahwa sesuatu ada atau bermakna karena dukungan hal lain.",
      groups:[
        {
          name:"〜あっての",
          description:"Menekankan bahwa sesuatu ada atau bermakna karena dukungan hal lain.",
          sentences:[
            {
              jp:"地域のボランティアがあってのこの夏祭りだ。",
              kana:"ちいきのぼらんてぃあがあってのこのなつまつりだ。",
              romaji:"Chiikinoboranteiagaattenokononatsumatsurida。",
              meaning:"Festival musim panas ini bisa terlaksana karena para relawan warga."
            },
            {
              jp:"健康あっての留学生活だから、最近は睡眠を大事にしている。",
              kana:"けんこうあってのりゅうがくせいかつだから、さいきんはすいみんをだいじにしている。",
              romaji:"Kenkouattenoryuugakuseikatsudakara、saikinhasuiminwodaijinishiteiru。",
              meaning:"Karena hidup sebagai pelajar di luar negeri bergantung pada kesehatan, belakangan ini saya lebih menjaga tidur."
            },
            {
              jp:"お客さんの信頼があっての商売だと、店長は毎朝スタッフに話している。",
              kana:"おきゃくさんのしんらいがあってのしょうばいだと、てんちょうはまいあさすたっふにはなしている。",
              romaji:"Okyakusannoshinraigaattenoshoubaidato、tenchouhamaiasasutaffunihanashiteiru。",
              meaning:"Manajer toko selalu bilang setiap pagi bahwa usaha ini berjalan karena kepercayaan pelanggan."
            },
            {
              jp:"家族の理解あっての海外赴任なので、週末はできるだけ連絡するようにしている。",
              kana:"かぞくのりかいあってのかいがいふにんなので、しゅうまつはできるだけれんらくするようにしている。",
              romaji:"Kazokunorikaiattenokaigaifuninnanode、shuumatsuhadekirudakerenrakusuruyounishiteiru。",
              meaning:"Karena penugasan ke luar negeri ini terjadi berkat pengertian keluarga, saya berusaha menghubungi mereka setiap akhir pekan."
            },
            {
              jp:"裏方の支えがあっての文化祭成功だと、実行委員長が最後に頭を下げた。",
              kana:"うらかたのささえがあってのぶんかさいせいこうだと、じっこういいんちょうがさいごにあたまをさげた。",
              romaji:"Urakatanosasaegaattenobunkasaiseikoudato、jikkouiinchougasaigoniatamawosageta。",
              meaning:"Ketua panitia menutup acara dengan mengatakan bahwa keberhasilan festival sekolah ini terjadi berkat dukungan tim belakang layar."
            }
          ]
        }
      ]
    },

  {
      id:"GR-N1-02",
      level:"N1",
      title:"〜いかんだ/いかんでは/いかんによっては",
      summary:"Menyatakan bahwa hasil atau keputusan bergantung pada keadaan tertentu.",
      groups:[
        {
          name:"〜いかんだ/いかんでは/いかんによっては",
          description:"Menyatakan bahwa hasil atau keputusan bergantung pada keadaan tertentu.",
          sentences:[
            {
              jp:"配属先は研修の結果いかんで決まるらしい。",
              kana:"はいぞくさきはけんしゅうのけっかいかんできまるらしい。",
              romaji:"Haizokusakihakenshuunokekkaikandekimarurashii。",
              meaning:"Katanya penempatan divisi akan ditentukan tergantung hasil pelatihan."
            },
            {
              jp:"天候いかんでは、河川敷の花火大会は中止になることもある。",
              kana:"てんこういかんでは、かせんじきのはなびたいかいはちゅうしになることもある。",
              romaji:"Tenkouikandeha、kasenjikinohanabitaikaihachuushininarukotomoaru。",
              meaning:"Tergantung cuaca, pesta kembang api di tepi sungai bisa saja dibatalkan."
            },
            {
              jp:"予算の使い方いかんによっては、来年度の計画を見直す必要がある。",
              kana:"よさんのつかいかたいかんによっては、らいねんどのけいかくをみなおすひつようがある。",
              romaji:"Yosannotsukaikataikanniyotteha、rainendonokeikakuwominaosuhitsuyougaaru。",
              meaning:"Tergantung cara penggunaan anggaran, rencana tahun depan mungkin perlu ditinjau ulang."
            },
            {
              jp:"最終的な配属は、面談での印象いかんだと人事が説明していた。",
              kana:"さいしゅうてきなはいぞくは、めんだんでのいんしょういかんだとじんじがせつめいしていた。",
              romaji:"Saishuutekinahaizokuha、mendandenoinshouikandatojinjigasetsumeishiteita。",
              meaning:"Bagian HR menjelaskan bahwa penempatan akhir bergantung pada kesan saat wawancara."
            },
            {
              jp:"店の評判は最初の接客いかんで大きく変わる。",
              kana:"みせのひょうばんはさいしょのせっきゃくいかんでおおきくかわる。",
              romaji:"Misenohyoubanhasaishonosekkyakuikandeookikukawaru。",
              meaning:"Reputasi toko bisa sangat berubah tergantung pelayanan pertama yang diberikan."
            }
          ]
        }
      ]
    },

  {
      id:"GR-N1-03",
      level:"N1",
      title:"〜いかんにかかわらず/いかんによらず/いかんを問わず",
      summary:"Menyatakan tidak bergantung pada kondisi, alasan, atau jenis tertentu.",
      groups:[
        {
          name:"〜いかんにかかわらず/いかんによらず/いかんを問わず",
          description:"Menyatakan tidak bergantung pada kondisi, alasan, atau jenis tertentu.",
          sentences:[
            {
              jp:"国籍いかんにかかわらず、この相談窓口は誰でも利用できる。",
              kana:"こくせきいかんにかかわらず、このそうだんまどぐちはだれでもりようできる。",
              romaji:"Kokusekiikannikakawarazu、konosoudanmadoguchihadaredemoriyoudekiru。",
              meaning:"Terlepas dari kewarganegaraan, siapa pun bisa memakai loket konsultasi ini."
            },
            {
              jp:"経験の有無いかんによらず、研修には全員参加してください。",
              kana:"けいけんのうむいかんによらず、けんしゅうにはぜんいんさんかしてください。",
              romaji:"Keikennoumuikanniyorazu、kenshuunihazen'insankashitekudasai。",
              meaning:"Terlepas dari ada atau tidaknya pengalaman, semua orang harus ikut pelatihan ini."
            },
            {
              jp:"理由のいかんを問わず、試験開始後の入室は認められない。",
              kana:"りゆうのいかんをとわず、しけんかいしごのにゅうしつはみとめられない。",
              romaji:"Riyuunoikanwotowazu、shikenkaishigononyuushitsuhamitomerarenai。",
              meaning:"Apa pun alasannya, masuk ruangan setelah ujian dimulai tidak diizinkan."
            },
            {
              jp:"年齢いかんにかかわらず、地域の防災訓練には参加できる。",
              kana:"ねんれいいかんにかかわらず、ちいきのぼうさいくんれんにはさんかできる。",
              romaji:"Nenreiikannikakawarazu、chiikinobousaikunrennihasankadekiru。",
              meaning:"Tanpa memandang usia, siapa pun boleh ikut latihan tanggap bencana di lingkungan ini."
            },
            {
              jp:"天候いかんによらず、この説明会はオンラインでも配信される。",
              kana:"てんこういかんによらず、このせつめいかいはおんらいんでもはいしんされる。",
              romaji:"Tenkouikanniyorazu、konosetsumeikaihaonraindemohaishinsareru。",
              meaning:"Terlepas dari cuaca, sesi penjelasan ini juga akan disiarkan secara online."
            }
          ]
        }
      ]
    },

  {
      id:"GR-N1-04",
      level:"N1",
      title:"いずれにしても/いずれにしろ/いずれにせよ",
      summary:"Menyatakan bahwa apa pun keadaannya, kesimpulannya tetap sama.",
      groups:[
        {
          name:"いずれにしても/いずれにしろ/いずれにせよ",
          description:"Menyatakan bahwa apa pun keadaannya, kesimpulannya tetap sama.",
          sentences:[
            {
              jp:"いずれにしても、今月中に住民票を移しておいたほうがいい。",
              kana:"いずれにしても、こんげつちゅうにじゅうみんひょうをうつしておいたほうがいい。",
              romaji:"Izurenishitemo、kongetsuchuunijuuminhyouwoutsushiteoitahougaii。",
              meaning:"Bagaimanapun juga, sebaiknya kamu memindahkan kartu domisili dalam bulan ini."
            },
            {
              jp:"いずれにしろ、今日のうちに店長へ連絡を入れておいて。",
              kana:"いずれにしろ、きょうのうちにてんちょうへれんらくをいれておいて。",
              romaji:"Izurenishiro、kyounouchinitenchouherenrakuwoireteoite。",
              meaning:"Apa pun keputusannya, hubungi dulu manajer toko hari ini."
            },
            {
              jp:"いずれにせよ、結果が出るまで落ち着いて待つしかない。",
              kana:"いずれにせよ、けっかがでるまでおちついてまつしかない。",
              romaji:"Izureniseyo、kekkagaderumadeochitsuitematsushikanai。",
              meaning:"Bagaimanapun juga, kita hanya bisa menunggu dengan tenang sampai hasilnya keluar."
            },
            {
              jp:"いずれにしても、駅前の再開発でこの辺の雰囲気は変わりそうだ。",
              kana:"いずれにしても、えきまえのさいかいはつでこのへんのふんいきはかわりそうだ。",
              romaji:"Izurenishitemo、ekimaenosaikaihatsudekonohennofun'ikihakawarisouda。",
              meaning:"Apa pun nanti detailnya, penataan ulang depan stasiun sepertinya akan mengubah suasana daerah ini."
            },
            {
              jp:"いずれにしろ、書類に不備があれば再提出になる。",
              kana:"いずれにしろ、しょるいにふびがあればさいていしゅつになる。",
              romaji:"Izurenishiro、shoruinifubigaarebasaiteishutsuninaru。",
              meaning:"Bagaimanapun juga, kalau ada kekurangan di dokumen, kamu harus mengajukannya lagi."
            }
          ]
        }
      ]
    },

  {
      id:"GR-N1-05",
      level:"N1",
      title:"〜うちに入らない",
      summary:"Menyatakan bahwa sesuatu bahkan belum pantas dianggap termasuk kategori tertentu.",
      groups:[
        {
          name:"〜うちに入らない",
          description:"Menyatakan bahwa sesuatu bahkan belum pantas dianggap termasuk kategori tertentu.",
          sentences:[
            {
              jp:"N1対策をするなら、この程度の読解は難問のうちに入らない。",
              kana:"N1たいさくをするなら、このていどのどくかいはなんもんのうちにいらない。",
              romaji:"N1taisakuwosurunara、konoteidonodokukaihananmonnouchiniiranai。",
              meaning:"Kalau sedang menyiapkan N1, bacaan setingkat ini belum termasuk soal sulit."
            },
            {
              jp:"東京で一人暮らしをしていると、このくらいの満員電車は驚くうちに入らない。",
              kana:"とうきょうでひとりぐらしをしていると、このくらいのまんいんでんしゃはおどろくうちにいらない。",
              romaji:"Toukyoudehitorigurashiwoshiteiruto、konokurainoman'indenshahaodorokuuchiniiranai。",
              meaning:"Kalau tinggal sendiri di Tokyo, kereta sepadat ini bahkan tidak lagi termasuk hal yang mengejutkan."
            },
            {
              jp:"この店では五分待ちなんて待ったうちに入らないそうだ。",
              kana:"このみせではごぶまちなんてまったうちにいらないそうだ。",
              romaji:"Konomisedehagobumachinantematsutauchiniiranaisouda。",
              meaning:"Katanya di toko ini menunggu lima menit saja belum dianggap benar-benar menunggu."
            },
            {
              jp:"ベテランの通訳からすれば、そのくらいの言い間違いは失敗のうちに入らない。",
              kana:"べてらんのつうやくからすれば、そのくらいのいいまちがいはしっぱいのうちにいらない。",
              romaji:"Beterannotsuuyakukarasureba、sonokurainoiimachigaihashippainouchiniiranai。",
              meaning:"Bagi penerjemah berpengalaman, salah ucap sebesar itu belum termasuk kegagalan."
            },
            {
              jp:"ここでは三ページくらいの報告書は長いうちに入らない。",
              kana:"ここではさんぺーじくらいのほうこくしょはながいうちにいらない。",
              romaji:"Kokodehasanpeejikurainohoukokushohanagaiuchiniiranai。",
              meaning:"Di sini, laporan sekitar tiga halaman belum dianggap panjang."
            }
          ]
        }
      ]
    },

  {
      id:"GR-N1-06",
      level:"N1",
      title:"〜が/も〜なら、〜が/も〜だ",
      summary:"Menyatakan bahwa dua sifat atau hal sama-sama berlaku.",
      groups:[
        {
          name:"〜が/も〜なら、〜が/も〜だ",
          description:"Menyatakan bahwa dua sifat atau hal sama-sama berlaku.",
          sentences:[
            {
              jp:"田中さんは説明が丁寧なら、返信も早い。",
              kana:"たなかさんはせつめいがていねいなら、へんしんもはやい。",
              romaji:"Tanakasanhasetsumeigateineinara、henshinmohayai。",
              meaning:"Kalau Tanaka-san penjelasannya rapi, balasannya juga cepat."
            },
            {
              jp:"この町は家賃が手ごろなら、駅も意外と近い。",
              kana:"このまちはやちんがてごろなら、えきもいがいとちかい。",
              romaji:"Konomachihayachingategoronara、ekimoigaitochikai。",
              meaning:"Di kota ini sewa rumahnya terjangkau, dan stasiunnya juga ternyata dekat."
            },
            {
              jp:"あの先生は発音がきれいなら、教え方も分かりやすい。",
              kana:"あのせんせいははつおんがきれいなら、おしえかたもわかりやすい。",
              romaji:"Anosenseihahatsuongakireinara、oshiekatamowakariyasui。",
              meaning:"Guru itu pengucapannya bagus, dan cara mengajarnya juga mudah dipahami."
            },
            {
              jp:"その新しいアプリは操作も簡単なら、案内も多言語対応だ。",
              kana:"そのあたらしいあぷりはそうさもかんたんなら、あんないもたげんごたいおうだ。",
              romaji:"Sonoatarashiiapurihasousamokantannara、annaimotagengotaiouda。",
              meaning:"Aplikasi baru itu tidak hanya mudah dipakai, panduannya juga tersedia dalam banyak bahasa."
            },
            {
              jp:"この定食屋は味がいいなら、量もかなり多い。",
              kana:"このていしょくやはあじがいいなら、りょうもかなりおおい。",
              romaji:"Konoteishokuyahaajigaiinara、ryoumokanariooi。",
              meaning:"Restoran set menu ini rasanya enak, porsinya juga cukup banyak."
            }
          ]
        }
      ]
    },

  {
      id:"GR-N1-07",
      level:"N1",
      title:"〜か否か",
      summary:"Digunakan untuk menyatakan apakah sesuatu dilakukan atau tidak, terjadi atau tidak.",
      groups:[
        {
          name:"〜か否か",
          description:"Digunakan untuk menyatakan apakah sesuatu dilakukan atau tidak, terjadi atau tidak.",
          sentences:[
            {
              jp:"契約を更新するか否かは、今週中に決めなければならない。",
              kana:"けいやくをこうしんするかいなかは、こんしゅうちゅうにきめなければならない。",
              romaji:"Keiyakuwokoushinsurukainakaha、konshuuchuunikimenakerebanaranai。",
              meaning:"Harus diputuskan minggu ini apakah kontrak akan diperpanjang atau tidak."
            },
            {
              jp:"留学を続けるか否かについて、家族ともよく話し合った。",
              kana:"りゅうがくをつづけるかいなかについて、かぞくともよくはなしあった。",
              romaji:"Ryuugakuwotsuzukerukainakanitsuite、kazokutomoyokuhanashiatsuta。",
              meaning:"Saya juga sudah membicarakan baik-baik dengan keluarga apakah akan melanjutkan studi di luar negeri atau tidak."
            },
            {
              jp:"採用するか否かは、最終面接のあとに通知します。",
              kana:"さいようするかいなかは、さいしゅうめんつのあとにつうちします。",
              romaji:"Saiyousurukainakaha、saishuumentsunoatonitsuuchishimasu。",
              meaning:"Keputusan apakah diterima atau tidak akan diberitahukan setelah wawancara akhir."
            },
            {
              jp:"修理に出すか否かで迷っているうちに、保証期間が過ぎてしまった。",
              kana:"しゅうりにだすかいなかでまよっているうちに、ほしょうきかんがすぎてしまった。",
              romaji:"Shuurinidasukainakademayotsuteiruuchini、hoshoukikangasugiteshimatta。",
              meaning:"Karena terlalu lama bimbang apakah akan diservis atau tidak, masa garansinya keburu habis."
            },
            {
              jp:"イベントを屋外で行うか否かは、前日の天気次第だ。",
              kana:"いべんとをおくがいでおこなうかいなかは、ぜんじつのてんきしだいだ。",
              romaji:"Ibentowookugaideokonaukainakaha、zenjitsunotenkishidaida。",
              meaning:"Apakah acara akan diadakan di luar ruangan atau tidak bergantung pada cuaca sehari sebelumnya."
            }
          ]
        }
      ]
    },

  {
      id:"GR-N1-08",
      level:"N1",
      title:"〜限りだ",
      summary:"Menyatakan perasaan yang sangat kuat seperti sangat senang, sangat bersyukur, sangat menyesal.",
      groups:[
        {
          name:"〜限りだ",
          description:"Menyatakan perasaan yang sangat kuat seperti sangat senang, sangat bersyukur, sangat menyesal.",
          sentences:[
            {
              jp:"子どもたちが安心して通える通学路になって、保護者としてはうれしい限りだ。",
              kana:"こどもたちがあんしんしてかよえるつうがくろになって、ほごしゃとしてはうれしいかぎりだ。",
              romaji:"Kodomotachigaanshinshitekayoerutsuugakuroninatte、hogoshatoshitehaureshiikagirida。",
              meaning:"Sebagai orang tua, saya sangat senang jalur ke sekolah kini menjadi lebih aman untuk anak-anak."
            },
            {
              jp:"日本での生活に少しずつ慣れてきたと聞いて、家族としては安心する限りだ。",
              kana:"にっぽんでのせいかつにすこしずつなれてきたときいて、かぞくとしてはあんしんするかぎりだ。",
              romaji:"Nippondenoseikatsunisukoshizutsunaretekitatokiite、kazokutoshitehaanshinsurukagirida。",
              meaning:"Sebagai keluarga, kami sangat lega mendengar kamu mulai terbiasa dengan hidup di Jepang."
            },
            {
              jp:"近所の商店街がまた活気を取り戻してきて、本当に喜ばしい限りだ。",
              kana:"きんじょのしょうてんがいがまたかっきをとりもどしてきて、ほんとうによろこばしいかぎりだ。",
              romaji:"Kinjonoshoutengaigamatakakkiwotorimodoshitekite、hontouniyorokobashiikagirida。",
              meaning:"Sangat membahagiakan melihat pertokoan di lingkungan ini kembali ramai."
            },
            {
              jp:"努力が結果につながったのなら、指導した側としてもうれしい限りだ。",
              kana:"どりょくがけっかにつながったのなら、しどうしたがわとしてもうれしいかぎりだ。",
              romaji:"Doryokugakekkanitsunagattanonara、shidoushitagawatoshitemoureshiikagirida。",
              meaning:"Kalau usaha itu berbuah hasil, sebagai pihak yang membimbing tentu saya sangat senang."
            },
            {
              jp:"地域の人たちが新しいルールに協力してくれて、ありがたい限りです。",
              kana:"ちいきのにんたちがあたらしいるーるにきょうりょくしてくれて、ありがたいかぎりです。",
              romaji:"Chiikinonintachigaatarashiiruurunikyouryokushitekurete、arigataikagiridesu。",
              meaning:"Saya sungguh bersyukur warga setempat mau bekerja sama dengan aturan baru itu."
            }
          ]
        }
      ]
    },

  {
      id:"GR-N1-09",
      level:"N1",
      title:"〜かたがた",
      summary:"Menyatakan melakukan sesuatu sambil memanfaatkan kesempatan lain, sering dipakai dalam situasi agak formal.",
      groups:[
        {
          name:"〜かたがた",
          description:"Menyatakan melakukan sesuatu sambil memanfaatkan kesempatan lain, sering dipakai dalam situasi agak formal.",
          sentences:[
            {
              jp:"お礼かたがた、先週お借りした本を研究室まで返しに行った。",
              kana:"おれいかたがた、せんしゅうおかりしたほんをけんきゅうしつまでかえしにいった。",
              romaji:"Oreikatagata、senshuuokarishitahonwokenkyuushitsumadekaeshiniitta。",
              meaning:"Sekalian berterima kasih, saya pergi mengembalikan buku yang saya pinjam minggu lalu ke ruang dosen."
            },
            {
              jp:"散歩かたがた、近所の桜の様子を見てきた。",
              kana:"さんぽかたがた、きんじょのさくらのようすをみてきた。",
              romaji:"Sanpokatagata、kinjonosakuranoyousuwomitekita。",
              meaning:"Sekalian berjalan-jalan, saya melihat keadaan bunga sakura di sekitar rumah."
            },
            {
              jp:"ごあいさつかたがた、新しい配属先の各部署を回った。",
              kana:"ごあいさつかたがた、あたらしいはいぞくさきのかくぶしょをまわった。",
              romaji:"Goaisatsukatagata、atarashiihaizokusakinokakubushowomawatsuta。",
              meaning:"Sekalian memperkenalkan diri, saya berkeliling ke tiap bagian di tempat penugasan baru."
            },
            {
              jp:"買い物かたがた、駅前の市役所出張所で住民票も取ってきた。",
              kana:"かいものかたがた、えきまえのしやくしょしゅっちょうしょでじゅうみんひょうもとってきた。",
              romaji:"Kaimonokatagata、ekimaenoshiyakushoshutchoushodejuuminhyoumototsutekita。",
              meaning:"Sekalian belanja, saya juga mengambil kartu domisili di kantor cabang balai kota dekat stasiun."
            },
            {
              jp:"報告かたがた、先日のイベントのお礼をメールで送った。",
              kana:"ほうこくかたがた、せんじつのいべんとのおれいをめーるでおくった。",
              romaji:"Houkokukatagata、senjitsunoibentonooreiwomeerudeokutsuta。",
              meaning:"Sekalian memberi laporan, saya kirim email ucapan terima kasih untuk acara beberapa hari lalu."
            }
          ]
        }
      ]
    },

  {
      id:"GR-N1-10",
      level:"N1",
      title:"〜かたわら",
      summary:"Menyatakan melakukan satu hal di samping kegiatan utama yang lain.",
      groups:[
        {
          name:"〜かたわら",
          description:"Menyatakan melakukan satu hal di samping kegiatan utama yang lain.",
          sentences:[
            {
              jp:"大学で日本語を教えるかたわら、地域の通訳ボランティアもしている。",
              kana:"だいがくでにほんごをおしえるかたわら、ちいきのつうやくぼらんてぃあもしている。",
              romaji:"Daigakudenihongowooshierukatawara、chiikinotsuuyakuboranteiamoshiteiru。",
              meaning:"Selain mengajar bahasa Jepang di universitas, dia juga menjadi relawan penerjemah di daerahnya."
            },
            {
              jp:"彼女は会社で働くかたわら、夜は専門学校に通っている。",
              kana:"かのじょはかいしゃではたらくかたわら、よるはせんもんがっこうにとおっている。",
              romaji:"Kanojohakaishadehatarakukatawara、yoruhasenmongakkounitootteiru。",
              meaning:"Selain bekerja di kantor, dia juga sekolah kejuruan pada malam hari."
            },
            {
              jp:"店を切り盛りするかたわら、SNSの更新まで一人でこなしている。",
              kana:"みせをきりもりするかたわら、SNSのこうしんまでひとりでこなしている。",
              romaji:"Misewokirimorisurukatawara、SNSnokoushinmadehitoridekonashiteiru。",
              meaning:"Selain mengelola toko, dia juga sendirian mengurus pembaruan media sosialnya."
            },
            {
              jp:"父は農業のかたわら、町内会の役員も引き受けている。",
              kana:"ちちはのうぎょうのかたわら、ちょうないかいのやくいんもひきうけている。",
              romaji:"Chichihanougyounokatawara、chounaikainoyakuinmohikiuketeiru。",
              meaning:"Selain bertani, ayah juga merangkap sebagai pengurus RT setempat."
            },
            {
              jp:"研究のかたわら、留学生向けの相談会も続けている。",
              kana:"けんきゅうのかたわら、りゅうがくせいむけのそうだんかいもつづけている。",
              romaji:"Kenkyuunokatawara、ryuugakuseimukenosoudankaimotsuzuketeiru。",
              meaning:"Selain meneliti, dia juga terus menjalankan sesi konsultasi untuk mahasiswa asing."
            }
          ]
        }
      ]
    },

  {
      id:"GR-N1-11",
      level:"N1",
      title:"〜がてら",
      summary:"Menyatakan melakukan sesuatu sekalian dengan kegiatan lain yang searah atau sejalan.",
      groups:[
        {
          name:"〜がてら",
          description:"Menyatakan melakukan sesuatu sekalian dengan kegiatan lain yang searah atau sejalan.",
          sentences:[
            {
              jp:"銀行へ行きがてら、駅前のドラッグストアで日用品を買った。",
              kana:"ぎんこうへいきがてら、えきまえのどらっぐすとあでにちようひんをかった。",
              romaji:"Ginkouheikigatera、ekimaenodoraggusutoadenichiyouhinwokatsuta。",
              meaning:"Sekalian pergi ke bank, saya membeli kebutuhan sehari-hari di toko obat dekat stasiun."
            },
            {
              jp:"仕事帰りがてら、区役所の夜間窓口に寄ってきた。",
              kana:"しごとかえりがてら、くやくしょのやかんまどぐちによってきた。",
              romaji:"Shigotokaerigatera、kuyakushonoyakanmadoguchiniyotsutekita。",
              meaning:"Sekalian pulang kerja, saya mampir ke loket malam kantor kelurahan."
            },
            {
              jp:"散歩がてら、商店街の新しいカフェをのぞいてみた。",
              kana:"さんぽがてら、しょうてんがいのあたらしいかふぇをのぞいてみた。",
              romaji:"Sanpogatera、shoutengainoatarashiikafewonozoitemita。",
              meaning:"Sekalian jalan kaki, saya mampir melihat kafe baru di area pertokoan."
            },
            {
              jp:"送迎がてら、近くのスーパーで夕飯の材料を買ってきた。",
              kana:"そうげいがてら、ちかくのすーぱーでゆうはんのざいりょうをかってきた。",
              romaji:"Sougeigatera、chikakunosuupaadeyuuhannozairyouwokatsutekita。",
              meaning:"Sekalian menjemput, saya membeli bahan makan malam di supermarket dekat situ."
            },
            {
              jp:"あいさつがてら、新しく入ったアルバイトの子に声をかけた。",
              kana:"あいさつがてら、あたらしくいっったあるばいとのこにこえをかけた。",
              romaji:"Aisatsugatera、atarashikuitsutsutaarubaitonokonikoewokaketa。",
              meaning:"Sekalian menyapa, saya mengajak bicara pegawai paruh waktu yang baru masuk."
            }
          ]
        }
      ]
    },

  {
      id:"GR-N1-12",
      level:"N1",
      title:"〜かと思いきや",
      summary:"Menyatakan bahwa kenyataan ternyata berbeda dari dugaan awal.",
      groups:[
        {
          name:"〜かと思いきや",
          description:"Menyatakan bahwa kenyataan ternyata berbeda dari dugaan awal.",
          sentences:[
            {
              jp:"静かになったかと思いきや、隣の教室ではもう次の準備が始まっていた。",
              kana:"しずかになったかとおもいきや、となりのきょうしつではもうつぎのじゅんびがはじまっていた。",
              romaji:"Shizukaninattakatoomoikiya、tonarinokyoushitsudehamoutsuginojunbigahajimatteita。",
              meaning:"Baru saja saya kira suasana sudah tenang, ternyata kelas sebelah sudah mulai menyiapkan kegiatan berikutnya."
            },
            {
              jp:"雨がやんだかと思いきや、駅に着いた途端また降り出した。",
              kana:"あめがやんだかとおもいきや、えきについたとたんまたおりだした。",
              romaji:"Amegayandakatoomoikiya、ekinitsuitatotanmataoridashita。",
              meaning:"Baru saja saya kira hujannya berhenti, ternyata begitu sampai stasiun turun lagi."
            },
            {
              jp:"もう満席かと思いきや、奥に一つだけ空席が残っていた。",
              kana:"もうまんせきかとおもいきや、おくにひとつだけくうせきがのこっていた。",
              romaji:"Moumansekikatoomoikiya、okunihitotsudakekuusekiganokotsuteita。",
              meaning:"Saya kira sudah penuh, ternyata masih ada satu kursi kosong di bagian dalam."
            },
            {
              jp:"厳しい人かと思いきや、相談すると意外と親身に話を聞いてくれた。",
              kana:"いかめしいにんかとおもいきや、そうだんするといがいとしんみにはなしをきいてくれた。",
              romaji:"Ikameshiininkatoomoikiya、soudansurutoigaitoshinminihanashiwokiitekureta。",
              meaning:"Saya kira dia orang yang keras, ternyata saat diajak konsultasi justru mendengarkan dengan hangat."
            },
            {
              jp:"故障したかと思いきや、ただコンセントが抜けていただけだった。",
              kana:"こしょうしたかとおもいきや、ただこんせんとがぬけていただけだった。",
              romaji:"Koshoushitakatoomoikiya、tadakonsentoganuketeitadakedatta。",
              meaning:"Saya kira alatnya rusak, ternyata hanya kabelnya yang terlepas."
            }
          ]
        }
      ]
    },

  {
      id:"GR-N1-13",
      level:"N1",
      title:"〜可能性がある",
      summary:"Menyatakan ada kemungkinan sesuatu akan terjadi.",
      groups:[
        {
          name:"〜可能性がある",
          description:"Menyatakan ada kemungkinan sesuatu akan terjadi.",
          sentences:[
            {
              jp:"台風の進路によっては、明日の便が欠航になる可能性がある。",
              kana:"たいふうのしんろによっては、あしたのびんがけっこうになるかのうせいがある。",
              romaji:"Taifuunoshinroniyotteha、ashitanobingakekkouninarukanouseigaaru。",
              meaning:"Tergantung jalur topan, penerbangan besok ada kemungkinan dibatalkan."
            },
            {
              jp:"このまま空き店舗が増えると、商店街全体が静かになる可能性がある。",
              kana:"このままあきてんぽがふえると、しょうてんがいぜんたいがしずかになるかのうせいがある。",
              romaji:"Konomamaakitenpogafueruto、shoutengaizentaigashizukaninarukanouseigaaru。",
              meaning:"Kalau toko kosong terus bertambah, ada kemungkinan seluruh area pertokoan menjadi semakin sepi."
            },
            {
              jp:"申請書に不備があると、審査が長引く可能性があります。",
              kana:"しんせいしょにふびがあると、しんさがながびくかのうせいがあります。",
              romaji:"Shinseishonifubigaaruto、shinsaganagabikukanouseigaarimasu。",
              meaning:"Kalau ada kekurangan di formulir, proses pemeriksaannya bisa memakan waktu lebih lama."
            },
            {
              jp:"春先は気温差が大きいので、体調を崩す可能性がある。",
              kana:"はるさきはきおんさがおおきいので、たいちょうをくずすかのうせいがある。",
              romaji:"Harusakihakionsagaookiinode、taichouwokuzusukanouseigaaru。",
              meaning:"Karena selisih suhu di awal musim semi besar, ada kemungkinan kondisi tubuh menurun."
            },
            {
              jp:"通勤時間帯は道路が混むため、予定より遅れる可能性がある。",
              kana:"つうきんじかんたいはどうろがこむため、よていよりおくれるかのうせいがある。",
              romaji:"Tsuukinjikantaihadourogakomutame、yoteiyoriokurerukanouseigaaru。",
              meaning:"Karena jalanan padat saat jam berangkat kerja, ada kemungkinan tiba lebih lambat dari rencana."
            }
          ]
        }
      ]
    },

  {
      id:"GR-N1-14",
      level:"N1",
      title:"〜が早いか",
      summary:"Menyatakan begitu satu hal terjadi, hal lain langsung menyusul hampir bersamaan.",
      groups:[
        {
          name:"〜が早いか",
          description:"Menyatakan begitu satu hal terjadi, hal lain langsung menyusul hampir bersamaan.",
          sentences:[
            {
              jp:"チャイムが鳴るが早いか、学生たちは一斉に教室を飛び出した。",
              kana:"ちゃいむがなるがはやいか、がくせいたちはいっせいにきょうしつをとびだした。",
              romaji:"Chaimuganarugahayaika、gakuseitachihaisseinikyoushitsuwotobidashita。",
              meaning:"Begitu bel berbunyi, para siswa langsung berhamburan keluar kelas."
            },
            {
              jp:"ドアが開くが早いか、乗客がホームへ流れ出た。",
              kana:"どあがひらくがはやいか、じょうきゃくがほーむへながれでた。",
              romaji:"Doagahirakugahayaika、joukyakugahoomuhenagaredeta。",
              meaning:"Begitu pintu terbuka, para penumpang langsung mengalir ke peron."
            },
            {
              jp:"店長はレジの異変に気づくが早いか、すぐに予備機を持ってきた。",
              kana:"てんちょうはれじのいへんにきづくがはやいか、すぐによびきをもってきた。",
              romaji:"Tenchouharejinoihennikizukugahayaika、suguniyobikiwomotsutekita。",
              meaning:"Begitu menyadari kasir bermasalah, manajer toko langsung membawa mesin cadangan."
            },
            {
              jp:"合図が出るが早いか、スタッフ全員が持ち場へ散った。",
              kana:"あいずがでるがはやいか、すたっふぜんいんがもちばへちった。",
              romaji:"Aizugaderugahayaika、sutaffuzen'ingamochibahechitsuta。",
              meaning:"Begitu aba-aba diberikan, semua staf langsung bergerak ke pos masing-masing."
            },
            {
              jp:"子どもは母親の姿を見るが早いか、うれしそうに走り出した。",
              kana:"こどもはははおやのすがたをみるがはやいか、うれしそうにはしりだした。",
              romaji:"Kodomohahahaoyanosugatawomirugahayaika、ureshisounihashiridashita。",
              meaning:"Begitu melihat ibunya, anak itu langsung berlari dengan gembira."
            }
          ]
        }
      ]
    },

  {
      id:"GR-N1-15",
      level:"N1",
      title:"〜がましい",
      summary:"Menyatakan nuansa terasa seperti, terkesan terlalu, atau cenderung bernada tertentu.",
      groups:[
        {
          name:"〜がましい",
          description:"Menyatakan nuansa terasa seperti, terkesan terlalu, atau cenderung bernada tertentu.",
          sentences:[
            {
              jp:"あの言い方は少し押しつけがましく聞こえるから、表現を変えたほうがいい。",
              kana:"あのいいかたはすこしおしつけがましくきこえるから、ひょうげんをかえたほうがいい。",
              romaji:"Anoiikatahasukoshioshitsukegamashikukikoerukara、hyougenwokaetahougaii。",
              meaning:"Cara bicara itu terdengar agak memaksa, jadi sebaiknya ungkapannya diubah."
            },
            {
              jp:"会議で何度も自分の話に戻すのは、自慢がましい印象を与えかねない。",
              kana:"かいぎでなんどもじぶんのはなしにもどすのは、じまんがましいいんしょうをあたえかねない。",
              romaji:"Kaigidenandomojibunnohanashinimodosunoha、jimangamashiiinshouwoataekanenai。",
              meaning:"Kalau di rapat terus-terusan kembali ke cerita sendiri, bisa memberi kesan seperti pamer."
            },
            {
              jp:"せっかくの案内文だから、説教がましい文面にはしたくない。",
              kana:"せっかくのあんないぶんだから、せっきょうがましいぶんめんにはしたくない。",
              romaji:"Sekkakunoannaibundakara、sekkyougamashiibunmennihashitakunai。",
              meaning:"Karena ini teks panduan, saya tidak ingin isinya terasa seperti menggurui."
            },
            {
              jp:"親切のつもりでも、やり方によっては恩着せがましくなる。",
              kana:"しんせつのつもりでも、やりほうによってはおんきせがましくなる。",
              romaji:"Shinsetsunotsumoridemo、yarihouniyottehaonkisegamashikunaru。",
              meaning:"Meskipun niatnya membantu, caranya bisa saja terkesan menuntut balas budi."
            },
            {
              jp:"広告が宣伝がましすぎると、かえって客は離れてしまう。",
              kana:"こうこくがせんでんがましすぎると、かえってきゃくははなれてしまう。",
              romaji:"Koukokugasendengamashisugiruto、kaettekyakuhahanareteshimau。",
              meaning:"Kalau iklan terasa terlalu promosional, pelanggan justru bisa menjauh."
            }
          ]
        }
      ]
    },

  {
      id:"GR-N1-16",
      level:"N1",
      title:"〜からある/からする/からの",
      summary:"Menyatakan jumlah, ukuran, atau harga yang besar, biasanya melebihi dugaan.",
      groups:[
        {
          name:"〜からある/からする/からの",
          description:"Menyatakan jumlah, ukuran, atau harga yang besar, biasanya melebihi dugaan.",
          sentences:[
            {
              jp:"会場には千人からの観客が集まり、入口はかなり混雑していた。",
              kana:"かいじょうにはせんにんからのかんきゃくがあつまり、いりぐちはかなりこんざつしていた。",
              romaji:"Kaijounihasenninkaranokankyakugaatsumari、iriguchihakanarikonzatsushiteita。",
              meaning:"Lebih dari seribu penonton datang ke lokasi, sehingga pintu masuk sangat padat."
            },
            {
              jp:"その着物は十万円からするそうで、気軽には手が出せない。",
              kana:"そのきものはじゅうまんえんからするそうで、きがるにはてがだせない。",
              romaji:"Sonokimonohajuuman'enkarasurusoude、kigarunihategadasenai。",
              meaning:"Katanya kimono itu harganya mulai dari seratus ribu yen, jadi tidak mudah untuk dibeli begitu saja."
            },
            {
              jp:"修理費は場合によっては五万円からすることもある。",
              kana:"しゅうりひはばあいによってはごまんえんからすることもある。",
              romaji:"Shuurihihabaainiyottehagomanenkarasurukotomoaru。",
              meaning:"Biaya perbaikan dalam beberapa kasus bisa mencapai lima puluh ribu yen atau lebih."
            },
            {
              jp:"祭りの日は朝から駅に何百人からの行列ができる。",
              kana:"まつりのにちはあさからえきになんびゃくにんからのぎょうれつができる。",
              romaji:"Matsurinonichihaasakaraekininanbyakuninkaranogyouretsugadekiru。",
              meaning:"Pada hari festival, sejak pagi ada antrean ratusan orang di stasiun."
            },
            {
              jp:"この荷物は十キロからあるので、一人で運ぶのは大変だ。",
              kana:"このにもつはじゅうきろからあるので、ひとりではこぶのはたいへんだ。",
              romaji:"Kononimotsuhajuukirokaraarunode、hitoridehakobunohataihenda。",
              meaning:"Barang ini beratnya lebih dari sepuluh kilo, jadi sulit dibawa sendirian."
            }
          ]
        }
      ]
    },

  {
      id:"GR-N1-17",
      level:"N1",
      title:"〜かれ〜かれ",
      summary:"Menyatakan dua sisi atau pilihan, dan keduanya sama-sama tercakup.",
      groups:[
        {
          name:"〜かれ〜かれ",
          description:"Menyatakan dua sisi atau pilihan, dan keduanya sama-sama tercakup.",
          sentences:[
            {
              jp:"賛成かれ反対かれ、まずは全員の意見を聞くべきだ。",
              kana:"さんせいかれはんたいかれ、まずはぜんいんのいけんをきくべきだ。",
              romaji:"Sanseikarehantaikare、mazuhazen'innoikenwokikubekida。",
              meaning:"Setuju ataupun tidak, yang penting semua orang didengar dulu pendapatnya."
            },
            {
              jp:"成功するかれ失敗するかれ、この経験は次に生きる。",
              kana:"せいこうするかれしっぱいするかれ、このけいけんはつぎにいきる。",
              romaji:"Seikousurukareshippaisurukare、konokeikenhatsuginiikiru。",
              meaning:"Berhasil ataupun gagal, pengalaman ini akan berguna untuk langkah berikutnya."
            },
            {
              jp:"大きいかれ小さいかれ、この町の店にはそれぞれ役割がある。",
              kana:"おおきいかれちーさいかれ、このまちのみせにはそれぞれやくわりがある。",
              romaji:"Ookiikarechisaikare、konomachinomisenihasorezoreyakuwarigaaru。",
              meaning:"Besar ataupun kecil, setiap toko di kota ini punya perannya masing-masing."
            },
            {
              jp:"国内かれ海外かれ、出張前には必ず保険を確認している。",
              kana:"こくないかれかいがいかれ、しゅっちょうまえにはかならずほけんをかくにんしている。",
              romaji:"Kokunaikarekaigaikare、shutchoumaenihakanarazuhokenwokakuninshiteiru。",
              meaning:"Baik perjalanan dinas dalam negeri maupun luar negeri, saya selalu mengecek asuransi sebelumnya."
            },
            {
              jp:"行くかれ行かないかれ、早めに返事だけはしてほしい。",
              kana:"いくかれいかないかれ、はやめにへんじだけはしてほしい。",
              romaji:"Ikukareikanaikare、hayamenihenjidakehashitehoshii。",
              meaning:"Pergi atau tidak, saya ingin setidaknya jawaban diberikan lebih awal."
            }
          ]
        }
      ]
    },

  {
      id:"GR-N1-18",
      level:"N1",
      title:"〜きっての",
      summary:"Menyatakan yang paling terkenal, paling menonjol, atau paling unggul dalam suatu kelompok.",
      groups:[
        {
          name:"〜きっての",
          description:"Menyatakan yang paling terkenal, paling menonjol, atau paling unggul dalam suatu kelompok.",
          sentences:[
            {
              jp:"彼はクラスきっての努力家で、毎朝一番に自習室へ来る。",
              kana:"かれはくらすきってのどりょくかで、まいあさいちばんにじしゅうしつへくる。",
              romaji:"Karehakurasukittenodoryokukade、maiasaichibannijishuushitsuhekuru。",
              meaning:"Dia dikenal sebagai orang paling rajin di kelas dan selalu datang paling awal ke ruang belajar mandiri."
            },
            {
              jp:"あの商店街はこの地域きっての食べ歩きスポットとして知られている。",
              kana:"あのしょうてんがいはこのちいききってのたべあるきすぽっととしてしられている。",
              romaji:"Anoshoutengaihakonochiikikittenotabearukisupottotoshiteshirareteiru。",
              meaning:"Area pertokoan itu dikenal sebagai tempat kuliner kaki lima paling terkenal di kawasan ini."
            },
            {
              jp:"彼女は社内きっての交渉上手で、難しい相手にも落ち着いて対応する。",
              kana:"かのじょはしゃないきってのこうしょうじょうずで、むずかしいあいてにもおちついてたいおうする。",
              romaji:"Kanojohashanaikittenokoushoujouzude、muzukashiiaitenimoochitsuitetaiousuru。",
              meaning:"Dia dikenal sebagai negosiator terbaik di kantor dan tetap tenang menghadapi lawan bicara yang sulit."
            },
            {
              jp:"その図書館は市内きっての蔵書数を誇る。",
              kana:"そのとしょかんはしないきってのぞうしょすうをほこる。",
              romaji:"Sonotoshokanhashinaikittenozoushosuuwohokoru。",
              meaning:"Perpustakaan itu membanggakan jumlah koleksi yang termasuk paling banyak di kota ini."
            },
            {
              jp:"今日は町内きっての人気店でも、開店前から行列ができていた。",
              kana:"こんにちはちょうないきってのにんきみせでも、かいてんまえからぎょうれつができていた。",
              romaji:"Konnichihachounaikittenoninkimisedemo、kaitenmaekaragyouretsugadekiteita。",
              meaning:"Bahkan di toko paling populer di lingkungan ini, antrean sudah terbentuk sebelum buka."
            }
          ]
        }
      ]
    },

  {
      id:"GR-N1-19",
      level:"N1",
      title:"〜きらいがある",
      summary:"Menyatakan kecenderungan yang kurang baik atau agak mengkhawatirkan.",
      groups:[
        {
          name:"〜きらいがある",
          description:"Menyatakan kecenderungan yang kurang baik atau agak mengkhawatirkan.",
          sentences:[
            {
              jp:"この制度は説明が専門的すぎて、初めての人を置き去りにするきらいがある。",
              kana:"このせいどはせつめいがせんもんてきすぎて、はじめてのにんをおきざりにするきらいがある。",
              romaji:"Konoseidohasetsumeigasenmontekisugite、hajimetenoninwookizarinisurukiraigaaru。",
              meaning:"Sistem ini penjelasannya terlalu teknis, sehingga cenderung membuat orang baru tertinggal."
            },
            {
              jp:"彼は忙しくなると、一人で抱え込みすぎるきらいがある。",
              kana:"かれはいそがしくなると、ひとりでかかえこみすぎるきらいがある。",
              romaji:"Karehaisogashikunaruto、hitoridekakaekomisugirukiraigaaru。",
              meaning:"Saat sibuk, dia cenderung memikul semuanya sendirian."
            },
            {
              jp:"観光地の案内は英語に偏りがちで、やさしい日本語が不足するきらいがある。",
              kana:"かんこうちのあんないはえいごにかたよりがちで、やさしいにほんごがふそくするきらいがある。",
              romaji:"Kankouchinoannaihaeigonikatayorigachide、yasashiinihongogafusokusurukiraigaaru。",
              meaning:"Petunjuk di tempat wisata cenderung terlalu berat ke bahasa Inggris dan kurang memakai bahasa Jepang yang mudah."
            },
            {
              jp:"最近の会議は結論を急ぎすぎるきらいがある。",
              kana:"さいきんのかいぎはけつろんをいそぎすぎるきらいがある。",
              romaji:"Saikinnokaigihaketsuronwoisogisugirukiraigaaru。",
              meaning:"Rapat-rapat belakangan ini cenderung terlalu terburu-buru menarik kesimpulan."
            },
            {
              jp:"SNSの情報だけで判断すると、話題性ばかりを重視するきらいがある。",
              kana:"SNSのじょうほうだけではんだんすると、わだいせいばかりをじゅうしするきらいがある。",
              romaji:"SNSnojouhoudakedehandansuruto、wadaiseibakariwojuushisurukiraigaaru。",
              meaning:"Kalau hanya mengandalkan informasi dari media sosial, orang cenderung terlalu menekankan apa yang sedang ramai."
            }
          ]
        }
      ]
    },

  {
      id:"GR-N1-20",
      level:"N1",
      title:"〜きりがない",
      summary:"Menyatakan bahwa jika sesuatu diteruskan, tidak akan ada habisnya.",
      groups:[
        {
          name:"〜きりがない",
          description:"Menyatakan bahwa jika sesuatu diteruskan, tidak akan ada habisnya.",
          sentences:[
            {
              jp:"引っ越し前に気になることを挙げ始めたら、きりがない。",
              kana:"ひっこしまえにきになることをあげはじめたら、きりがない。",
              romaji:"Hikkoshimaenikininarukotowoagehajimetara、kiriganai。",
              meaning:"Kalau mulai menyebut semua hal yang dikhawatirkan sebelum pindah rumah, tidak akan ada habisnya."
            },
            {
              jp:"東京の行きたい店を調べ出したら、きりがない。",
              kana:"とうきょうのいきたいみせをしらべだしたら、きりがない。",
              romaji:"Toukyounoikitaimisewoshirabedashitara、kiriganai。",
              meaning:"Kalau mulai mencari semua toko yang ingin dikunjungi di Tokyo, tidak akan ada habisnya."
            },
            {
              jp:"書類の細かい表現まで直していたら、きりがないよ。",
              kana:"しょるいのこまかいひょうげんまでなおしていたら、きりがないよ。",
              romaji:"Shoruinokomakaihyougenmadenaoshiteitara、kiriganaiyo。",
              meaning:"Kalau sampai memperbaiki detail kecil di dokumen satu per satu, tidak akan selesai-selesai."
            },
            {
              jp:"電気代を節約する方法を探し始めると、きりがない。",
              kana:"でんきだいをせつやくするほうほうをさがしはじめると、きりがない。",
              romaji:"Denkidaiwosetsuyakusuruhouhouwosagashihajimeruto、kiriganai。",
              meaning:"Kalau mulai mencari semua cara menghemat tagihan listrik, tidak akan ada ujungnya."
            },
            {
              jp:"駅周辺の再開発について話し出したら、きりがないほど論点が多い。",
              kana:"えきしゅうへんのさいかいはつについてはなしだしたら、きりがないほどろんてんがおおい。",
              romaji:"Ekishuuhennosaikaihatsunitsuitehanashidashitara、kiriganaihodorontengaooi。",
              meaning:"Kalau mulai membahas penataan ulang sekitar stasiun, topiknya begitu banyak sampai seperti tidak ada habisnya."
            }
          ]
        }
      ]
    },

  {
      id:"GR-N1-21",
      level:"N1",
      title:"〜極まりない",
      summary:"Menyatakan tingkat yang sangat tinggi, sering untuk hal negatif atau perasaan kuat.",
      groups:[
        {
          name:"〜極まりない",
          description:"Menyatakan tingkat yang sangat tinggi, sering untuk hal negatif atau perasaan kuat.",
          sentences:[
            {
              jp:"あの説明文は分かりにくい極まりない。",
              kana:"あのせつめいぶんはわかりにくいきわまりない。",
              romaji:"Anosetsumeibunhawakarinikuikiwamarinai。",
              meaning:"Teks penjelasan itu benar-benar sangat sulit dipahami."
            },
            {
              jp:"夏の満員電車は不快極まりない。",
              kana:"なつのまんいんでんしゃはふかいきわまりない。",
              romaji:"Natsunoman'indenshahafukaikiwamarinai。",
              meaning:"Kereta penuh di musim panas benar-benar sangat tidak nyaman."
            },
            {
              jp:"こんな大事な日に寝坊するとは、申し訳ない極まりない。",
              kana:"こんなだいじなにちにねぼうするとは、もうしわけないきわまりない。",
              romaji:"Konnadaijinanichininebousurutoha、moushiwakenaikiwamarinai。",
              meaning:"Sangat tidak enak rasanya bisa bangun kesiangan pada hari sepenting ini."
            },
            {
              jp:"深夜の工事音が毎日続くのは迷惑極まりない。",
              kana:"しんやのこうじおとがまいにちつづくのはめいわくきわまりない。",
              romaji:"Shinyanokoujiotogamainichitsuzukunohameiwakukiwamarinai。",
              meaning:"Suara proyek pada tengah malam yang terus berlanjut setiap hari benar-benar sangat mengganggu."
            },
            {
              jp:"住民への連絡なしに工事時間を変えるとは乱暴極まりない。",
              kana:"じゅうみんへのれんらくなしにこうじじかんをかえるとはらんぼうきわまりない。",
              romaji:"Juuminhenorenrakunashinikoujijikanwokaerutoharanboukiwamarinai。",
              meaning:"Mengubah jam pekerjaan tanpa pemberitahuan ke warga benar-benar keterlaluan."
            }
          ]
        }
      ]
    },

  {
      id:"GR-N1-22",
      level:"N1",
      title:"〜くらいのものだ",
      summary:"Menyatakan bahwa pilihan, kemungkinan, atau hal yang bisa dilakukan hanya sedikit.",
      groups:[
        {
          name:"〜くらいのものだ",
          description:"Menyatakan bahwa pilihan, kemungkinan, atau hal yang bisa dilakukan hanya sedikit.",
          sentences:[
            {
              jp:"初めての一人暮らしで頼れるのは、近所の案内所くらいのものだ。",
              kana:"はじめてのひとりぐらしでたよれるのは、きんじょのあんないじょくらいのものだ。",
              romaji:"Hajimetenohitorigurashidetayorerunoha、kinjonoannaijokurainomonoda。",
              meaning:"Saat baru pertama kali tinggal sendiri, tempat yang benar-benar bisa diandalkan hanya pusat informasi dekat rumah."
            },
            {
              jp:"この時間に開いているのは駅前のコンビニくらいのものだ。",
              kana:"このじかんにひらいているのはえきまえのこんびにくらいのものだ。",
              romaji:"Konojikannihiraiteirunohaekimaenokonbinikurainomonoda。",
              meaning:"Pada jam seperti ini, yang masih buka paling-paling hanya konbini depan stasiun."
            },
            {
              jp:"週末にゆっくり座って話せる場所といえば、あの喫茶店くらいのものだ。",
              kana:"しゅうまつにゆっくりすわってはなせるばしょといえば、あのきっさてんくらいのものだ。",
              romaji:"Shuumatsuniyukkurisuwatsutehanaserubashotoieba、anokissatenkurainomonoda。",
              meaning:"Kalau bicara tempat duduk santai di akhir pekan, paling hanya kafe itu yang cocok."
            },
            {
              jp:"今の給料で無理なく通える語学学校は、ここくらいのものだ。",
              kana:"いまのきゅうりょうでむりなくかよえるごがくがっこうは、ここくらいのものだ。",
              romaji:"Imanokyuuryoudemurinakukayoerugogakugakkouha、kokokurainomonoda。",
              meaning:"Dengan gaji saya sekarang, sekolah bahasa yang masih bisa dijangkau tanpa berat paling hanya tempat ini."
            },
            {
              jp:"この辺で外国語の相談に対応できる窓口は、市役所くらいのものだ。",
              kana:"このへんでがいこくごのそうだんにたいおうできるまどぐちは、しやくしょくらいのものだ。",
              romaji:"Konohendegaikokugonosoudannitaioudekirumadoguchiha、shiyakushokurainomonoda。",
              meaning:"Di sekitar sini, loket yang bisa melayani konsultasi dalam bahasa asing paling hanya ada di balai kota."
            }
          ]
        }
      ]
    },

  {
      id:"GR-N1-23",
      level:"N1",
      title:"〜ぐるみ",
      summary:"Menyatakan seluruh pihak atau satu kelompok terlibat secara menyeluruh.",
      groups:[
        {
          name:"〜ぐるみ",
          description:"Menyatakan seluruh pihak atau satu kelompok terlibat secara menyeluruh.",
          sentences:[
            {
              jp:"町ぐるみで観光客向けのマナー案内を見直している。",
              kana:"まちぐるみでかんこうきゃくむけのまなーあんないをみなおしている。",
              romaji:"Machigurumidekankoukyakumukenomanaaannaiwominaoshiteiru。",
              meaning:"Satu kota bersama-sama sedang meninjau ulang panduan etika untuk wisatawan."
            },
            {
              jp:"会社ぐるみで残業を減らす取り組みが始まった。",
              kana:"かいしゃぐるみでざんぎょうをへらすとりくみがはじまった。",
              romaji:"Kaishagurumidezangyouwoherasutorikumigahajimatta。",
              meaning:"Perusahaan secara menyeluruh mulai menjalankan upaya untuk mengurangi lembur."
            },
            {
              jp:"家族ぐるみで付き合いのある近所の人に、引っ越しの相談をした。",
              kana:"かぞくぐるみでつきあいのあるきんじょのにんに、ひっこしのそうだんをした。",
              romaji:"Kazokugurumidetsukiainoarukinjononinni、hikkoshinosoudanwoshita。",
              meaning:"Saya berkonsultasi soal pindahan kepada tetangga yang sudah akrab dengan keluarga kami."
            },
            {
              jp:"地域ぐるみで子どもの見守りを続けている。",
              kana:"ちいきぐるみでこどものみまもりをつづけている。",
              romaji:"Chiikigurumidekodomonomimamoriwotsuzuketeiru。",
              meaning:"Seluruh lingkungan terus bersama-sama menjaga keamanan anak-anak."
            },
            {
              jp:"学校ぐるみで留学生歓迎イベントを準備している。",
              kana:"がっこうぐるみでりゅうがくせいかんげいいべんとをじゅんびしている。",
              romaji:"Gakkougurumideryuugakuseikangeiibentowojunbishiteiru。",
              meaning:"Satu sekolah sedang bersama-sama menyiapkan acara penyambutan mahasiswa asing."
            }
          ]
        }
      ]
    },

  {
      id:"GR-N1-24",
      level:"N1",
      title:"〜こそ〜が/けれど",
      summary:"Menyatakan mengakui satu sisi, tetapi menekankan sisi lain.",
      groups:[
        {
          name:"〜こそ〜が/けれど",
          description:"Menyatakan mengakui satu sisi, tetapi menekankan sisi lain.",
          sentences:[
            {
              jp:"日本語こそまだ完璧ではないが、役所での手続きは一人でできるようになった。",
              kana:"にほんごこそまだかんぺきではないが、やくしょでのてつづきはひとりでできるようになった。",
              romaji:"Nihongokosomadakanpekidehanaiga、yakushodenotetsuzukihahitoridedekiruyouninatta。",
              meaning:"Bahasa Jepang saya memang belum sempurna, tetapi sekarang saya sudah bisa mengurus administrasi sendiri."
            },
            {
              jp:"この店は小さいこそ小さいが、惣菜の種類はかなり多い。",
              kana:"このみせはちーさいこそちーさいが、そうざいのしゅるいはかなりおおい。",
              romaji:"Konomisehachisaikosochisaiga、souzainoshuruihakanariooi。",
              meaning:"Toko ini memang kecil, tetapi pilihan lauk siap santapnya cukup banyak."
            },
            {
              jp:"給料こそ高くないけれど、休みが取りやすいのはありがたい。",
              kana:"きゅうりょうこそたかくないけれど、やすみがとりやすいのはありがたい。",
              romaji:"Kyuuryoukosotakakunaikeredo、yasumigatoriyasuinohaarigatai。",
              meaning:"Gajinya memang tidak tinggi, tetapi mudah mengambil cuti itu sangat membantu."
            },
            {
              jp:"駅からこそ少し遠いが、家賃の安さは魅力的だ。",
              kana:"えきからこそすこしとおいが、やちんのやすさはみりょくてきだ。",
              romaji:"Ekikarakososukoshitooiga、yachinnoyasusahamiryokutekida。",
              meaning:"Memang agak jauh dari stasiun, tetapi murahnya sewa rumah itu tetap menarik."
            },
            {
              jp:"彼は無口こそ無口だが、頼まれたことは必ずやり遂げる。",
              kana:"かれはむくちこそむくちだが、たのまれたことはかならずやりとげる。",
              romaji:"Karehamukuchikosomukuchidaga、tanomaretakotohakanarazuyaritogeru。",
              meaning:"Dia memang pendiam, tetapi apa yang diminta kepadanya selalu dituntaskan."
            }
          ]
        }
      ]
    },

  {
      id:"GR-N1-25",
      level:"N1",
      title:"〜こそあれ",
      summary:"Menyatakan memang ada hal tertentu, tetapi hasil utamanya tidak sampai buruk.",
      groups:[
        {
          name:"〜こそあれ",
          description:"Menyatakan memang ada hal tertentu, tetapi hasil utamanya tidak sampai buruk.",
          sentences:[
            {
              jp:"不便こそあれ、この町には静かで住みやすい魅力がある。",
              kana:"ふべんこそあれ、このまちにはしずかですみやすいみりょくがある。",
              romaji:"Fubenkosoare、konomachinihashizukadesumiyasuimiryokugaaru。",
              meaning:"Memang ada sisi kurang praktisnya, tetapi kota ini punya daya tarik yang tenang dan nyaman ditinggali."
            },
            {
              jp:"時間はかかったこそあれ、申請自体は無事に通った。",
              kana:"じかんはかかったこそあれ、しんせいじたいはぶじにかよった。",
              romaji:"Jikanhakakattakosoare、shinseijitaihabujinikayotsuta。",
              meaning:"Memang memakan waktu, tetapi pengajuannya sendiri berhasil lolos tanpa masalah."
            },
            {
              jp:"緊張こそあれ、初めての発表は思ったより落ち着いてできた。",
              kana:"きんちょうこそあれ、はじめてのはっぴょうはおもったよりおちついてできた。",
              romaji:"Kinchoukosoare、hajimetenohappyouhaomottayoriochitsuitedekita。",
              meaning:"Memang sempat tegang, tetapi presentasi pertama itu bisa dijalani lebih tenang dari dugaan."
            },
            {
              jp:"小さな行き違いこそあれ、大きなトラブルにはならなかった。",
              kana:"ちいさないきちがいこそあれ、おおきなとらぶるにはならなかった。",
              romaji:"Chiisanaikichigaikosoare、ookinatoraburunihanaranakatta。",
              meaning:"Memang ada sedikit salah paham, tetapi tidak berkembang menjadi masalah besar."
            },
            {
              jp:"値上げの影響こそあれ、客足は今のところ大きく変わっていない。",
              kana:"ねあげのえいきょうこそあれ、きゃくあしはいまのところおおきくかわっていない。",
              romaji:"Neagenoeikyoukosoare、kyakuashihaimanotokoroookikukawatteinai。",
              meaning:"Memang ada dampak dari kenaikan harga, tetapi jumlah pelanggan untuk saat ini belum banyak berubah."
            }
          ]
        }
      ]
    },

  {
      id:"GR-N1-26",
      level:"N1",
      title:"〜こそすれ",
      summary:"Menyatakan satu arah saja yang terjadi, sementara arah kebalikannya tidak terjadi.",
      groups:[
        {
          name:"〜こそすれ",
          description:"Menyatakan satu arah saja yang terjadi, sementara arah kebalikannya tidak terjadi.",
          sentences:[
            {
              jp:"値上がりこそすれ、この先急に安くなることはなさそうだ。",
              kana:"ねあがりこそすれ、このさききゅうにやすくなることはなさそうだ。",
              romaji:"Neagarikososure、konosakikyuuniyasukunarukotohanasasouda。",
              meaning:"Harga mungkin naik, tetapi tampaknya tidak akan tiba-tiba turun dalam waktu dekat."
            },
            {
              jp:"注意こそすれ、頭ごなしに叱るような先生ではない。",
              kana:"ちゅういこそすれ、あたまごなしにしかるようなせんせいではない。",
              romaji:"Chuuikososure、atamagonashinishikaruyounasenseidehanai。",
              meaning:"Dia mungkin menegur, tetapi bukan tipe guru yang memarahi orang secara kasar."
            },
            {
              jp:"応援こそすれ、途中で投げ出すような仲間ではない。",
              kana:"おうえんこそすれ、とちゅうでなげだすようななかまではない。",
              romaji:"Ouenkososure、tochuudenagedasuyounanakamadehanai。",
              meaning:"Teman-teman ini mungkin hanya mendukung, tetapi mereka jelas bukan tipe yang meninggalkan di tengah jalan."
            },
            {
              jp:"利用者は増えこそすれ、急に減ることは考えにくい。",
              kana:"りようしゃはふえこそすれ、きゅうにへることはかんがえにくい。",
              romaji:"Riyoushahafuekososure、kyuuniherukotohakangaenikui。",
              meaning:"Pengguna mungkin bertambah, tetapi sulit membayangkan jumlahnya mendadak menurun."
            },
            {
              jp:"準備に時間はかかりこそすれ、やる価値は十分ある。",
              kana:"じゅんびにじかんはかかりこそすれ、やるかちはじゅうぶんある。",
              romaji:"Junbinijikanhakakarikososure、yarukachihajuubunaru。",
              meaning:"Memang butuh waktu untuk persiapan, tetapi tetap sangat layak dilakukan."
            }
          ]
        }
      ]
    },

  {
      id:"GR-N1-27",
      level:"N1",
      title:"〜ごとく",
      summary:"Gaya formal untuk menyatakan seperti, bagaikan, atau seolah-olah.",
      groups:[
        {
          name:"〜ごとく",
          description:"Gaya formal untuk menyatakan seperti, bagaikan, atau seolah-olah.",
          sentences:[
            {
              jp:"彼は何事もなかったごとく、翌朝ふつうに出勤してきた。",
              kana:"かれはなにごともなかったごとく、よくちょうふつうにしゅっきんしてきた。",
              romaji:"Karehananigotomonakattagotoku、yokuchoufutsuunishukkinshitekita。",
              meaning:"Dia masuk kerja seperti tidak terjadi apa-apa pada keesokan paginya."
            },
            {
              jp:"店内は図書館のごとく静まり返っていた。",
              kana:"てんないはとしょかんのごとくしずまりかえっていた。",
              romaji:"Tennaihatoshokannogotokushizumarikaetsuteita。",
              meaning:"Di dalam toko suasananya senyap seperti perpustakaan."
            },
            {
              jp:"雪が舞うごとく、桜の花びらが歩道に落ちていた。",
              kana:"ゆきがまうごとく、さくらのはなびらがほどうにおちていた。",
              romaji:"Yukigamaugotoku、sakuranohanabiragahodouniochiteita。",
              meaning:"Kelopak sakura jatuh ke trotoar seperti salju yang beterbangan."
            },
            {
              jp:"その子は吸い込まれるごとくゲーム売り場へ向かっていった。",
              kana:"そのこはすいこまれるごとくげーむうりばへむかっていった。",
              romaji:"Sonokohasuikomarerugotokugeemuuribahemukatteitta。",
              meaning:"Anak itu berjalan ke area game seolah tertarik tanpa bisa menahan diri."
            },
            {
              jp:"新しい制服を着た学生たちは、少し緊張したごとく見えた。",
              kana:"あたらしいせいふくをきたがくせいたちは、すこしきんちょうしたごとくみえた。",
              romaji:"Atarashiiseifukuwokitagakuseitachiha、sukoshikinchoushitagotokumieta。",
              meaning:"Para siswa dengan seragam baru tampak seolah sedikit tegang."
            }
          ]
        }
      ]
    },

  {
      id:"GR-N1-28",
      level:"N1",
      title:"〜ことこの上ない",
      summary:"Menyatakan tingkat sangat tinggi, sering untuk hal yang sangat baik atau sangat buruk.",
      groups:[
        {
          name:"〜ことこの上ない",
          description:"Menyatakan tingkat sangat tinggi, sering untuk hal yang sangat baik atau sangat buruk.",
          sentences:[
            {
              jp:"初めて担当した企画が成功し、うれしいことこの上ない。",
              kana:"はじめてたんとうしたきかくがせいこうし、うれしいことこのじょうない。",
              romaji:"Hajimetetantoushitakikakugaseikoushi、ureshiikotokonojounai。",
              meaning:"Proyek pertama yang saya tangani berhasil, dan rasanya sangat membahagiakan."
            },
            {
              jp:"引っ越した部屋が駅にもスーパーにも近くて便利なことこの上ない。",
              kana:"ひっこしたへやがえきにもすーぱーにもちかくてべんりなことこのじょうない。",
              romaji:"Hikkoshitaheyagaekinimosuupaanimochikakutebenrinakotokonojounai。",
              meaning:"Apartemen yang baru saya tempati sangat praktis karena dekat stasiun dan supermarket."
            },
            {
              jp:"真夏の停電は不便なことこの上ない。",
              kana:"まなつのていでんはふべんなことこのじょうない。",
              romaji:"Manatsunoteidenhafubennakotokonojounai。",
              meaning:"Pemadaman listrik di tengah musim panas benar-benar sangat merepotkan."
            },
            {
              jp:"大切な書類をなくしてしまい、情けないことこの上なかった。",
              kana:"たいせつなしょるいをなくしてしまい、なさけないことこのじょうなかった。",
              romaji:"Taisetsunashoruiwonakushiteshimai、nasakenaikotokonojounakatta。",
              meaning:"Saya kehilangan dokumen penting, dan rasanya sangat memalukan."
            },
            {
              jp:"外国人にも分かりやすい案内板が増えたのは、ありがたいことこの上ない。",
              kana:"がいこくじんにもわかりやすいあんないばんがふえたのは、ありがたいことこのじょうない。",
              romaji:"Gaikokujinnimowakariyasuiannaibangafuetanoha、arigataikotokonojounai。",
              meaning:"Bertambahnya papan petunjuk yang mudah dipahami orang asing sungguh sangat patut disyukuri."
            }
          ]
        }
      ]
    },

  {
      id:"GR-N1-29",
      level:"N1",
      title:"〜ことだし",
      summary:"Dipakai untuk menyebut alasan yang cukup wajar untuk mengambil tindakan.",
      groups:[
        {
          name:"〜ことだし",
          description:"Dipakai untuk menyebut alasan yang cukup wajar untuk mengambil tindakan.",
          sentences:[
            {
              jp:"時間も遅いことだし、今日はこの辺で切り上げよう。",
              kana:"じかんもおそいことだし、こんにちはこのへんできりあげよう。",
              romaji:"Jikanmoosoikotodashi、konnichihakonohendekiriageyou。",
              meaning:"Karena sudah larut juga, mari kita akhiri sampai di sini hari ini."
            },
            {
              jp:"せっかく近くまで来たことだし、前から気になっていた店に入ってみよう。",
              kana:"せっかくちかくまできたことだし、ぜんからきになっていたみせにいっってみよう。",
              romaji:"Sekkakuchikakumadekitakotodashi、zenkarakininatteitamiseniitsutsutemiyou。",
              meaning:"Mumpung sudah sampai dekat sini, ayo coba masuk ke toko yang dari dulu membuat penasaran."
            },
            {
              jp:"雨も弱くなってきたことだし、そろそろ駅へ向かおうか。",
              kana:"あめもよわくなってきたことだし、そろそろえきへむかおうか。",
              romaji:"Amemoyowakunattekitakotodashi、sorosoroekihemukaouka。",
              meaning:"Karena hujannya juga mulai reda, bagaimana kalau kita menuju stasiun sekarang."
            },
            {
              jp:"新年度が始まることだし、部屋の中も一度整理したい。",
              kana:"しんねんどがはじまることだし、へやのなかもいちどせいりしたい。",
              romaji:"Shinnendogahajimarukotodashi、heyanonakamoichidoseirishitai。",
              meaning:"Karena tahun ajaran baru akan mulai, saya ingin merapikan kamar sekali lagi."
            },
            {
              jp:"みんな集まったことだし、先に写真だけ撮っておこう。",
              kana:"みんなあつまったことだし、さきにしゃしんだけとっておこう。",
              romaji:"Minnaatsumattakotodashi、sakinishashindaketotsuteokou。",
              meaning:"Karena semua sudah berkumpul, mari ambil foto dulu."
            }
          ]
        }
      ]
    },

  {
      id:"GR-N1-30",
      level:"N1",
      title:"〜こととて",
      summary:"Ungkapan formal untuk menyatakan alasan yang wajar karena situasi tertentu.",
      groups:[
        {
          name:"〜こととて",
          description:"Ungkapan formal untuk menyatakan alasan yang wajar karena situasi tertentu.",
          sentences:[
            {
              jp:"年末のこととて、区役所の窓口は朝からかなり混んでいた。",
              kana:"ねんまつのこととて、くやくしょのまどぐちはあさからかなりこんでいた。",
              romaji:"Nenmatsunokototote、kuyakushonomadoguchihaasakarakanarikondeita。",
              meaning:"Karena ini akhir tahun, loket di balai kota sudah sangat ramai sejak pagi."
            },
            {
              jp:"初めての海外生活のこととて、最初は手続き一つにも時間がかかった。",
              kana:"はじめてのかいがいせいかつのこととて、さいしょはてつづきひとつにもじかんがかかった。",
              romaji:"Hajimetenokaigaiseikatsunokototote、saishohatetsuzukihitotsunimojikangakakatta。",
              meaning:"Karena ini kehidupan luar negeri yang pertama kali, awalnya satu urusan administrasi saja memakan waktu."
            },
            {
              jp:"祭り当日のこととて、駅前は普段よりずっとにぎやかだった。",
              kana:"まつりとうじつのこととて、えきまえはふだんよりずっとにぎやかだった。",
              romaji:"Matsuritoujitsunokototote、ekimaehafudanyorizuttonigiyakadatta。",
              meaning:"Karena hari itu bertepatan dengan festival, area depan stasiun jauh lebih ramai dari biasanya."
            },
            {
              jp:"繁忙期のこととて、ホテルの予約は一週間前では間に合わなかった。",
              kana:"はんぼうきのこととて、ほてるのよやくはいっしゅうかんまえではまにあわなかった。",
              romaji:"Hanboukinokototote、hoterunoyoyakuhaisshuukanmaedehamaniawanakatta。",
              meaning:"Karena sedang musim sibuk, memesan hotel seminggu sebelumnya saja tidak sempat."
            },
            {
              jp:"急な欠員が出たこととて、現場は朝から慌ただしかった。",
              kana:"きゅうなけついんがでたこととて、げんばはあさからあわただしかった。",
              romaji:"Kyuunaketsuingadetakototote、genbahaasakaraawatadashikatta。",
              meaning:"Karena mendadak ada pegawai yang absen, tempat kerja sejak pagi terasa sangat sibuk."
            }
          ]
        }
      ]
    },

  {
      id:"GR-N1-31",
      level:"N1",
      title:"〜ことなしに",
      summary:"Menyatakan sesuatu dilakukan tanpa melakukan hal yang seharusnya lebih dulu.",
      groups:[
        {
          name:"〜ことなしに",
          description:"Menyatakan sesuatu dilakukan tanpa melakukan hal yang seharusnya lebih dulu.",
          sentences:[
            {
              jp:"現場を確認することなしに、工事の許可は出せない。",
              kana:"げんばをかくにんすることなしに、こうじのきょかはだせない。",
              romaji:"Genbawokakuninsurukotonashini、koujinokyokahadasenai。",
              meaning:"Izin proyek tidak bisa dikeluarkan tanpa memeriksa lokasi terlebih dahulu."
            },
            {
              jp:"利用者の声を聞くことなしに、案内表示だけ変えても意味がない。",
              kana:"りようしゃのこえをきくことなしに、あんないひょうじだけかえてもいみがない。",
              romaji:"Riyoushanokoewokikukotonashini、annaihyoujidakekaetemoimiganai。",
              meaning:"Tidak ada gunanya hanya mengubah papan petunjuk tanpa mendengar suara para pengguna."
            },
            {
              jp:"本人に知らせることなしに、勤務時間を変えるのは問題だ。",
              kana:"ほんにんにしらせることなしに、きんむじかんをかえるのはもんだいだ。",
              romaji:"Honninnishiraserukotonashini、kinmujikanwokaerunohamondaida。",
              meaning:"Mengubah jam kerja tanpa memberi tahu orang yang bersangkutan itu bermasalah."
            },
            {
              jp:"基本を理解することなしに、応用問題だけ解こうとしても難しい。",
              kana:"きほんをりかいすることなしに、おうようもんだいだけとこうとしてもむずかしい。",
              romaji:"Kihonworikaisurukotonashini、ouyoumondaidaketokoutoshitemomuzukashii。",
              meaning:"Sulit kalau mencoba mengerjakan soal lanjutan tanpa memahami dasar-dasarnya."
            },
            {
              jp:"近隣住民に説明することなしに、深夜工事を始めるべきではない。",
              kana:"きんりんじゅうみんにせつめいすることなしに、しんやこうじをはじめるべきではない。",
              romaji:"Kinrinjuuminnisetsumeisurukotonashini、shinyakoujiwohajimerubekidehanai。",
              meaning:"Pekerjaan malam hari tidak seharusnya dimulai tanpa menjelaskan dulu kepada warga sekitar."
            }
          ]
        }
      ]
    },

  {
      id:"GR-N1-32",
      level:"N1",
      title:"〜ことのないように",
      summary:"Dipakai untuk menyatakan pencegahan agar sesuatu yang tidak diinginkan tidak terjadi.",
      groups:[
        {
          name:"〜ことのないように",
          description:"Dipakai untuk menyatakan pencegahan agar sesuatu yang tidak diinginkan tidak terjadi.",
          sentences:[
            {
              jp:"提出先を間違えることのないように、封筒の表をもう一度確認してください。",
              kana:"ていしゅつさきをまちがえることのないように、ふうとうのあらをもういちどかくにんしてください。",
              romaji:"Teishutsusakiwomachigaerukotononaiyouni、fuutounoarawomouichidokakuninshitekudasai。",
              meaning:"Silakan periksa sekali lagi bagian depan amplop agar tidak salah menyerahkan ke tujuan."
            },
            {
              jp:"電車に傘を忘れることのないように、降りる前に荷物を見直すようにしている。",
              kana:"でんしゃにかさをわすれることのないように、おりるまえににもつをみなおすようにしている。",
              romaji:"Denshanikasawowasurerukotononaiyouni、orirumaeninimotsuwominaosuyounishiteiru。",
              meaning:"Supaya tidak meninggalkan payung di kereta, saya selalu memeriksa barang sebelum turun."
            },
            {
              jp:"来場者が迷うことのないように、入口ごとに案内スタッフを配置した。",
              kana:"らいじょうしゃがまようことのないように、いりぐちごとにあんないすたっふをはいちした。",
              romaji:"Raijoushagamayoukotononaiyouni、iriguchigotoniannaisutaffuwohaichishita。",
              meaning:"Agar pengunjung tidak tersesat, petugas informasi ditempatkan di setiap pintu masuk."
            },
            {
              jp:"緊急時に慌てることのないように、寮では避難経路を事前に確認しておく。",
              kana:"きんきゅうじにあわてることのないように、りょうではひなんけいろをじぜんにかくにんしておく。",
              romaji:"Kinkyuujiniawaterukotononaiyouni、ryoudehahinankeirowojizennikakuninshiteoku。",
              meaning:"Agar tidak panik saat darurat, penghuni asrama memeriksa rute evakuasi lebih dulu."
            },
            {
              jp:"支払い期限を過ぎることのないように、毎月スマホに通知を設定している。",
              kana:"しはらいきげんをすぎることのないように、まいつきすまほにつうちをせっていしている。",
              romaji:"Shiharaikigenwosugirukotononaiyouni、maitsukisumahonitsuuchiwosetteishiteiru。",
              meaning:"Supaya tidak melewati batas waktu pembayaran, saya memasang pengingat di ponsel setiap bulan."
            }
          ]
        }
      ]
    },

  {
      id:"GR-N1-33",
      level:"N1",
      title:"〜こともあって",
      summary:"Menyatakan suatu hal juga menjadi salah satu alasan terjadinya hal lain.",
      groups:[
        {
          name:"〜こともあって",
          description:"Menyatakan suatu hal juga menjadi salah satu alasan terjadinya hal lain.",
          sentences:[
            {
              jp:"駅から近いこともあって、このマンションは学生に人気がある。",
              kana:"えきからちかいこともあって、このまんしょんはがくせいににんきがある。",
              romaji:"Ekikarachikaikotomoatte、konomanshonhagakuseinininkigaaru。",
              meaning:"Karena salah satu alasannya dekat stasiun, apartemen ini populer di kalangan mahasiswa."
            },
            {
              jp:"今年は雨が少なかったこともあって、桜が長く楽しめた。",
              kana:"こんねんはあめがすくなかったこともあって、さくらがながくたのしめた。",
              romaji:"Konnenhaamegasukunakattakotomoatte、sakuraganagakutanoshimeta。",
              meaning:"Karena tahun ini hujannya juga sedikit, bunga sakura bisa dinikmati lebih lama."
            },
            {
              jp:"担当者が丁寧だったこともあって、手続きは思ったより早く終わった。",
              kana:"たんとうしゃがていねいだったこともあって、てつづきはおもったよりはやくおわった。",
              romaji:"Tantoushagateineidattakotomoatte、tetsuzukihaomottayorihayakuowatta。",
              meaning:"Karena petugasnya juga teliti, urusannya selesai lebih cepat dari yang saya kira."
            },
            {
              jp:"前回の反省があったこともあって、今回は受付の流れがかなり改善された。",
              kana:"ぜんかいのはんせいがあったこともあって、こんかいはうけつけのながれがかなりかいぜんされた。",
              romaji:"Zenkainohanseigaattakotomoatte、konkaihauketsukenonagaregakanarikaizensareta。",
              meaning:"Karena ada evaluasi dari sebelumnya juga, alur penerimaan kali ini jauh lebih baik."
            },
            {
              jp:"多言語対応の案内が増えたこともあって、外国人客からの問い合わせは減っている。",
              kana:"たげんごたいおうのあんないがふえたこともあって、がいこくじんきゃくからのといあわせはへっている。",
              romaji:"Tagengotaiounoannaigafuetakotomoatte、gaikokujinkyakukaranotoiawasehahetsuteiru。",
              meaning:"Karena penjelasan multibahasa juga bertambah, pertanyaan dari pelanggan asing mulai berkurang."
            }
          ]
        }
      ]
    },

  {
      id:"GR-N1-34",
      level:"N1",
      title:"〜さ",
      summary:"Akhiran santai untuk menegaskan atau melembutkan ucapan dalam gaya percakapan.",
      groups:[
        {
          name:"〜さ",
          description:"Akhiran santai untuk menegaskan atau melembutkan ucapan dalam gaya percakapan.",
          sentences:[
            {
              jp:"そんな細かいところまで気にしなくていいさ。",
              kana:"そんなこまかいところまできにしなくていいさ。",
              romaji:"Sonnakomakaitokoromadekinishinakuteiisa。",
              meaning:"Tidak usah terlalu memikirkan hal sekecil itu."
            },
            {
              jp:"初日は誰でも緊張するさ。",
              kana:"しょにちはだれでもきんちょうするさ。",
              romaji:"Shonichihadaredemokinchousurusa。",
              meaning:"Hari pertama itu siapa pun pasti tegang."
            },
            {
              jp:"道に迷っても、駅員さんに聞けば何とかなるさ。",
              kana:"みちにまよっても、えきいんさんにきけばなんとかなるさ。",
              romaji:"Michinimayotsutemo、ekiinsannikikebanantokanarusa。",
              meaning:"Kalau tersesat pun, tanya petugas stasiun nanti juga beres."
            },
            {
              jp:"たまには失敗することだってあるさ。",
              kana:"たまにはしっぱいすることだってあるさ。",
              romaji:"Tamanihashippaisurukotodattearusa。",
              meaning:"Kadang-kadang gagal itu biasa saja."
            },
            {
              jp:"焦らなくても、順番にやれば終わるさ。",
              kana:"あせらなくても、じゅんばんにやればおわるさ。",
              romaji:"Aseranakutemo、junbanniyarebaowarusa。",
              meaning:"Tidak usah panik, kalau dikerjakan satu-satu nanti selesai juga."
            }
          ]
        }
      ]
    },

  {
      id:"GR-N1-35",
      level:"N1",
      title:"〜さぞ/さぞかし",
      summary:"Menyatakan dugaan kuat bahwa seseorang pasti merasa sangat begitu.",
      groups:[
        {
          name:"〜さぞ/さぞかし",
          description:"Menyatakan dugaan kuat bahwa seseorang pasti merasa sangat begitu.",
          sentences:[
            {
              jp:"合格の知らせを聞いて、ご家族もさぞ安心したことでしょう。",
              kana:"ごうかくのしらせをきいて、ごかぞくもさぞあんしんしたことでしょう。",
              romaji:"Goukakunoshirasewokiite、gokazokumosazoanshinshitakotodeshou。",
              meaning:"Begitu mendengar kabar kelulusan itu, keluarga Anda pasti sangat lega."
            },
            {
              jp:"雪の中を長時間待ったなら、さぞ寒かったでしょうね。",
              kana:"ゆきのなかをちょうじかんまったなら、さぞさむかったでしょうね。",
              romaji:"Yukinonakawochoujikanmatsutanara、sazosamukattadeshoune。",
              meaning:"Kalau menunggu lama di tengah salju, pasti sangat dingin ya."
            },
            {
              jp:"初めての海外勤務で、最初はさぞ心細かったと思う。",
              kana:"はじめてのかいがいきんむで、さいしょはさぞこころぼそかったとおもう。",
              romaji:"Hajimetenokaigaikinmude、saishohasazokokorobosokattatoomou。",
              meaning:"Dengan penugasan luar negeri pertama, saya rasa awalnya pasti sangat cemas."
            },
            {
              jp:"大切に育てた店を閉めることになって、店主はさぞ残念だっただろう。",
              kana:"たいせつにそだてたみせをしめることになって、てんしゅはさぞざんねんだっただろう。",
              romaji:"Taisetsunisodatetamisewoshimerukotoninatte、tenshuhasazozannendattadarou。",
              meaning:"Karena harus menutup toko yang lama dirawat, pemiliknya pasti sangat sedih."
            },
            {
              jp:"昨夜ほとんど眠れなかったなら、今日はさぞ眠いはずだ。",
              kana:"さくやほとんどねむれなかったなら、こんにちはさぞねむいはずだ。",
              romaji:"Sakuyahotondonemurenakattanara、konnichihasazonemuihazuda。",
              meaning:"Kalau semalam hampir tidak tidur, hari ini pasti sangat mengantuk."
            }
          ]
        }
      ]
    },

  {
      id:"GR-N1-36",
      level:"N1",
      title:"〜さも",
      summary:"Menyatakan sesuatu terlihat atau terdengar seolah-olah memang begitu.",
      groups:[
        {
          name:"〜さも",
          description:"Menyatakan sesuatu terlihat atau terdengar seolah-olah memang begitu.",
          sentences:[
            {
              jp:"彼はさも前から知っていたかのように話していた。",
              kana:"かれはさもぜんからしっていたかのようにはなしていた。",
              romaji:"Karehasamozenkarashitteitakanoyounihanashiteita。",
              meaning:"Dia berbicara seolah-olah sudah tahu sejak lama."
            },
            {
              jp:"その店員はさも当然という顔で英語と日本語を切り替えていた。",
              kana:"そのてんいんはさもとうぜんというかおでえいごとにほんごをきりかえていた。",
              romaji:"Sonoten'inhasamotouzentoiukaodeeigotonihongowokirikaeteita。",
              meaning:"Pegawai itu berganti antara bahasa Inggris dan Jepang dengan wajah seolah itu hal yang sangat biasa."
            },
            {
              jp:"部長はさも簡単そうに言うが、現場の準備はかなり大変だ。",
              kana:"ぶちょうはさもかんたんそうにいうが、げんばのじゅんびはかなりたいへんだ。",
              romaji:"Buchouhasamokantansouniiuga、genbanojunbihakanaritaihenda。",
              meaning:"Kepala divisi bicara seakan-akan mudah, padahal persiapan di lapangan cukup berat."
            },
            {
              jp:"彼女はさも忙しそうに見えたが、声をかけたらすぐ対応してくれた。",
              kana:"かのじょはさもいそがしそうにみえたが、こえをかけたらすぐたいおうしてくれた。",
              romaji:"Kanojohasamoisogashisounimietaga、koewokaketarasugutaioushitekureta。",
              meaning:"Dia tampak seolah sangat sibuk, tetapi saat diajak bicara langsung membantu."
            },
            {
              jp:"その広告は、さも誰でもすぐ上達できるように見せている。",
              kana:"そのこうこくは、さもだれでもすぐじょうたつできるようにみせている。",
              romaji:"Sonokoukokuha、samodaredemosugujoutatsudekiruyounimiseteiru。",
              meaning:"Iklan itu menampilkan seolah-olah siapa pun bisa cepat mahir."
            }
          ]
        }
      ]
    },

  {
      id:"GR-N1-37",
      level:"N1",
      title:"〜始末だ",
      summary:"Menyatakan akibat buruk sampai pada tingkat yang tidak diinginkan.",
      groups:[
        {
          name:"〜始末だ",
          description:"Menyatakan akibat buruk sampai pada tingkat yang tidak diinginkan.",
          sentences:[
            {
              jp:"締め切り前なのに資料がまだ半分もできておらず、徹夜する始末だ。",
              kana:"しめきりまえなのにしりょうがまだはんぶんもできておらず、てつやするしまつだ。",
              romaji:"Shimekirimaenanonishiryougamadahanbunmodekiteorazu、tetsuyasurushimatsuda。",
              meaning:"Padahal tenggat sudah dekat, bahan presentasi bahkan belum separuh jadi sampai-sampai harus begadang."
            },
            {
              jp:"スマホばかり見ていたせいで、降りる駅を通り過ぎてしまう始末だった。",
              kana:"すまほばかりみていたせいで、おりるえきをとうりすぎてしまうしまつだった。",
              romaji:"Sumahobakarimiteitaseide、oriruekiwotourisugiteshimaushimatsudatta。",
              meaning:"Karena terus melihat ponsel, saya sampai kelewatan stasiun tempat turun."
            },
            {
              jp:"値上がりが続き、昼食を毎日コンビニで済ませるのもためらう始末だ。",
              kana:"ねあがりがつづき、ちゅうしょくをまいにちこんびにですませるのもためらうしまつだ。",
              romaji:"Neagarigatsuzuki、chuushokuwomainichikonbinidesumaserunomotameraushimatsuda。",
              meaning:"Karena harga terus naik, sampai-sampai makan siang di konbini tiap hari pun terasa berat."
            },
            {
              jp:"人手不足で、店長まで配達に回る始末になっている。",
              kana:"ひとでぶそくで、てんちょうまではいたつにまわるしまつになっている。",
              romaji:"Hitodebusokude、tenchoumadehaitatsunimawarushimatsuninatteiru。",
              meaning:"Karena kekurangan pegawai, bahkan manajer toko sampai ikut antar barang."
            },
            {
              jp:"片づけを後回しにしていたら、玄関に段ボールが積み上がる始末だ。",
              kana:"かたづけをあとまわしにしていたら、げんかんにだんぼーるがつみあがるしまつだ。",
              romaji:"Katazukewoatomawashinishiteitara、genkannidanborugatsumiagarushimatsuda。",
              meaning:"Karena terus menunda beres-beres, kardus menumpuk sampai di pintu masuk."
            }
          ]
        }
      ]
    },

  {
      id:"GR-N1-38",
      level:"N1",
      title:"〜じみる/〜じみた",
      summary:"Menyatakan terasa seperti atau bernuansa tertentu.",
      groups:[
        {
          name:"〜じみる/〜じみた",
          description:"Menyatakan terasa seperti atau bernuansa tertentu.",
          sentences:[
            {
              jp:"まだ四月なのに、今日は夏じみた暑さだ。",
              kana:"まだしがつなのに、こんにちはなつじみたあつさだ。",
              romaji:"Madashigatsunanoni、konnichihanatsujimitaatsusada。",
              meaning:"Padahal masih bulan April, tetapi hari ini panasnya sudah terasa seperti musim panas."
            },
            {
              jp:"その言い方は少し子どもじみていて、会議の場には合わない。",
              kana:"そのいいかたはすこしこどもじみていて、かいぎのばにはあわない。",
              romaji:"Sonoiikatahasukoshikodomojimiteite、kaiginobanihaawanai。",
              meaning:"Cara bicara itu agak kekanak-kanakan dan kurang cocok untuk suasana rapat."
            },
            {
              jp:"駅前のイルミネーションで、街全体が祭りじみた雰囲気になっていた。",
              kana:"えきまえのいるみねーしょんで、まちぜんたいがまつりじみたふんいきになっていた。",
              romaji:"Ekimaenoirumineeshonde、machizentaigamatsurijimitafun'ikininatteita。",
              meaning:"Karena iluminasi di depan stasiun, seluruh kota terasa seperti sedang festival."
            },
            {
              jp:"あの冗談は悪意じみて聞こえるから、職場では控えたほうがいい。",
              kana:"あのじょうだんはあくいじみてきこえるから、しょくばではひかえたほうがいい。",
              romaji:"Anojoudanhaakuijimitekikoerukara、shokubadehahikaetahougaii。",
              meaning:"Lelucon itu terdengar agak bernada jahat, jadi sebaiknya tidak dipakai di tempat kerja."
            },
            {
              jp:"彼は時々達観したような、年寄りじみたことを言う。",
              kana:"かれはときどきたっかんしたような、としよりじみたことをいう。",
              romaji:"Karehatokidokitakkanshitayouna、toshiyorijimitakotowoiu。",
              meaning:"Kadang dia mengatakan hal-hal yang terdengar tua dan terlalu dewasa untuk usianya."
            }
          ]
        }
      ]
    },

  {
      id:"GR-N1-39",
      level:"N1",
      title:"〜ずくめ",
      summary:"Menyatakan penuh dengan hal tertentu, biasanya semuanya baik atau semuanya satu warna/sifat.",
      groups:[
        {
          name:"〜ずくめ",
          description:"Menyatakan penuh dengan hal tertentu, biasanya semuanya baik atau semuanya satu warna/sifat.",
          sentences:[
            {
              jp:"今月は面接も内定も決まって、うれしいことずくめだった。",
              kana:"こんげつはめんせつもないていもきまって、うれしいことずくめだった。",
              romaji:"Kongetsuhamensetsumonaiteimokimatte、ureshiikotozukumedatta。",
              meaning:"Bulan ini wawancara dan tawaran kerja sama-sama berhasil, jadi isinya benar-benar kabar baik semua."
            },
            {
              jp:"新しい職場は人も雰囲気も良くて、今のところ助かることずくめだ。",
              kana:"あたらしいしょくばはにんもふんいきもよくて、いまのところたすかることずくめだ。",
              romaji:"Atarashiishokubahaninmofun'ikimoyokute、imanotokorotasukarukotozukumeda。",
              meaning:"Tempat kerja baru ini orang-orangnya baik dan suasananya nyaman, jadi sejauh ini yang dirasakan benar-benar banyak hal yang membantu."
            },
            {
              jp:"旅行初日は雨だったが、二日目からは晴れずくめで快適だった。",
              kana:"りょこうしょにちはあめだったが、ふつかめからははれずくめでかいてきだった。",
              romaji:"Ryokoushonichihaamedattaga、futsukamekarahaharezukumedekaitekidatta。",
              meaning:"Hari pertama perjalanan memang hujan, tetapi sejak hari kedua cuacanya terus cerah dan menyenangkan."
            },
            {
              jp:"今日は会議も商談も外出も続いて、朝から忙しいことずくめだ。",
              kana:"こんにちはかいぎもしょうだんもがいしゅつもつづいて、あさからいそがしいことずくめだ。",
              romaji:"Konnichihakaigimoshoudanmogaishutsumotsuzuite、asakaraisogashiikotozukumeda。",
              meaning:"Hari ini sejak pagi isinya rapat, pertemuan bisnis, dan keluar kantor terus, jadi benar-benar penuh kesibukan."
            },
            {
              jp:"引っ越し先は駅もスーパーも病院も近くて、便利ずくめと言っていい。",
              kana:"ひっこしさきはえきもすーぱーもびょういんもちかくて、べんりずくめといっていい。",
              romaji:"Hikkoshisakihaekimosuupaamobyouinmochikakute、benrizukumetoitteii。",
              meaning:"Tempat tinggal baru ini dekat stasiun, supermarket, dan rumah sakit, jadi bisa dibilang sangat serba praktis."
            }
          ]
        }
      ]
    },

  {
      id:"GR-N1-40",
      level:"N1",
      title:"〜ずじまい",
      summary:"Menyatakan sesuatu akhirnya tidak jadi dilakukan sampai akhir.",
      groups:[
        {
          name:"〜ずじまい",
          description:"Menyatakan sesuatu akhirnya tidak jadi dilakukan sampai akhir.",
          sentences:[
            {
              jp:"結局、その人気店には一度も行かずじまいで引っ越すことになった。",
              kana:"けっきょく、そのにんきみせにはいちどもいかずじまいでひっこすことになった。",
              romaji:"Kekkyoku、sononinkimisenihaichidomoikazujimaidehikkosukotoninatta。",
              meaning:"Akhirnya saya pindah rumah tanpa sempat sekali pun pergi ke toko populer itu."
            },
            {
              jp:"忙しくて市民祭りの花火も見ずじまいだった。",
              kana:"いそがしくてしみんまつりのはなびもみずじまいだった。",
              romaji:"Isogashikuteshiminmatsurinohanabimomizujimaidatta。",
              meaning:"Karena sibuk, saya berakhir tidak sempat menonton kembang api festival warga."
            },
            {
              jp:"修理に出そうと思いながら、古い炊飯器は結局出さずじまいだった。",
              kana:"しゅうりにだそうとおもいながら、ふるいすいはんきはけっきょくださずじまいだった。",
              romaji:"Shuurinidasoutoomoinagara、furuisuihankihakekkyokudasazujimaidatta。",
              meaning:"Walaupun berkali-kali berniat menservisnya, akhirnya rice cooker lama itu tetap tidak jadi saya bawa ke tempat perbaikan."
            },
            {
              jp:"あいさつに行くつもりだったが、担当の先生には会えずじまいだった。",
              kana:"あいさつにいくつもりだったが、たんとうのせんせいにはあえずじまいだった。",
              romaji:"Aisatsuniikutsumoridattaga、tantounosenseinihaaezujimaidatta。",
              meaning:"Saya berniat datang menyapa, tetapi akhirnya tidak berhasil bertemu dosen pembimbing itu."
            },
            {
              jp:"春のうちに京都へ行きたかったのに、予定が合わずじまいだった。",
              kana:"はるのうちにきょうとへいきたかったのに、よていがあわずじまいだった。",
              romaji:"Harunouchinikyoutoheikitakattanoni、yoteigaawazujimaidatta。",
              meaning:"Padahal ingin pergi ke Kyoto sebelum musim semi lewat, tetapi akhirnya jadwal tidak cocok dan tidak jadi pergi."
            }
          ]
        }
      ]
    },

  {
      id:"GR-N1-41",
      level:"N1",
      title:"〜ずとも",
      summary:"Pola N1 〜ずとも dalam konteks alami sehari-hari dan formal.",
      groups:[
        {
          name:"〜ずとも",
          description:"Pola N1 〜ずとも dalam konteks alami sehari-hari dan formal.",
          sentences:[
            {
              jp:"予約がなくとも、平日の昼なら入れることが多い。",
              kana:"よやくがなくとも、へいじつのひるならいれることがおおい。",
              romaji:"Yoyakuganakutomo、heijitsunohirunarairerukotogaooi。",
              meaning:"Meski tanpa reservasi, kalau siang hari kerja biasanya masih bisa masuk."
            },
            {
              jp:"この説明なら、専門用語を使わずとも十分伝わる。",
              kana:"このせつめいなら、せんもんようごをつかわずともじゅうぶんつたわる。",
              romaji:"Konosetsumeinara、senmonyougowotsukawazutomojuubuntsutawaru。",
              meaning:"Dengan penjelasan seperti ini, maksudnya sudah tersampaikan meski tanpa istilah teknis."
            },
            {
              jp:"急がずとも、次の電車でも十分間に合います。",
              kana:"いそがずとも、つぎのでんしゃでもじゅっぷんかんにあいます。",
              romaji:"Isogazutomo、tsuginodenshademojuppunkanniaimasu。",
              meaning:"Tidak usah buru-buru, naik kereta berikutnya pun masih sempat."
            },
            {
              jp:"先生に言われずとも、提出期限は自分で確認するべきだ。",
              kana:"せんせいにいわれずとも、ていしゅつきげんはじぶんでかくにんするべきだ。",
              romaji:"Senseiniiwarezutomo、teishutsukigenhajibundekakuninsurubekida。",
              meaning:"Meski tidak diingatkan dosen, tenggat pengumpulan seharusnya dicek sendiri."
            },
            {
              jp:"高価な機材がなくとも、配信はスマホ一台で始められる。",
              kana:"こうかなきざいがなくとも、はいしんはすまほいちだいではじめられる。",
              romaji:"Koukanakizaiganakutomo、haishinhasumahoichidaidehajimerareru。",
              meaning:"Tanpa alat mahal pun, siaran bisa mulai hanya dengan satu ponsel."
            }
          ]
        }
      ]
    },

  {
      id:"GR-N1-42",
      level:"N1",
      title:"〜ずにはおかない / 〜ないではおかない",
      summary:"Pola N1 〜ずにはおかない / 〜ないではおかない dalam konteks alami sehari-hari dan formal.",
      groups:[
        {
          name:"〜ずにはおかない / 〜ないではおかない",
          description:"Pola N1 〜ずにはおかない / 〜ないではおかない dalam konteks alami sehari-hari dan formal.",
          sentences:[
            {
              jp:"この映画は、見た人を泣かずにはおかない。",
              kana:"このえいがは、みたにんをなかずにはおかない。",
              romaji:"Konoeigaha、mitaninwonakazunihaokanai。",
              meaning:"Film ini pasti membuat penontonnya menangis."
            },
            {
              jp:"その一言は、周りを不安にさせずにはおかなかった。",
              kana:"そのひとことは、まわりをふあんにさせずにはおかなかった。",
              romaji:"Sonohitokotoha、mawariwofuannisasezunihaokanakatta。",
              meaning:"Satu ucapan itu mau tidak mau membuat orang sekitar cemas."
            },
            {
              jp:"本当においしい店は、また行きたいと思わせずにはおかない。",
              kana:"ほんとうにおいしいみせは、またいきたいとおもわせずにはおかない。",
              romaji:"Hontounioishiimiseha、mataikitaitoomowasezunihaokanai。",
              meaning:"Restoran yang benar-benar enak pasti membuat orang ingin datang lagi."
            },
            {
              jp:"彼の誠実な対応は、利用者を安心させずにはおかない。",
              kana:"かのせいじつなたいおうは、りようしゃをあんしんさせずにはおかない。",
              romaji:"Kanoseijitsunataiouha、riyoushawoanshinsasezunihaokanai。",
              meaning:"Sikapnya yang tulus pasti membuat pengguna merasa tenang."
            },
            {
              jp:"あの展示は、日本文化への関心を高めずにはおかない内容だった。",
              kana:"あのてんじは、にほんぶんかへのかんしんをたかめずにはおかないないようだった。",
              romaji:"Anotenjiha、nihonbunkahenokanshinwotakamezunihaokanainaiyoudatta。",
              meaning:"Pameran itu isinya pasti membangkitkan minat pada budaya Jepang."
            }
          ]
        }
      ]
    },

  {
      id:"GR-N1-43",
      level:"N1",
      title:"〜ずには済まない / 〜ないでは済まない",
      summary:"Pola N1 〜ずには済まない / 〜ないでは済まない dalam konteks alami sehari-hari dan formal.",
      groups:[
        {
          name:"〜ずには済まない / 〜ないでは済まない",
          description:"Pola N1 〜ずには済まない / 〜ないでは済まない dalam konteks alami sehari-hari dan formal.",
          sentences:[
            {
              jp:"この件は、担当者に確認せずには済まない。",
              kana:"このけんは、たんとうしゃにかくにんせずにはすまない。",
              romaji:"Konokenha、tantoushanikakuninsezunihasumanai。",
              meaning:"Soal ini mau tidak mau harus dicek ke penanggung jawab."
            },
            {
              jp:"住民票の住所が違っていたので、修正しないでは済まなかった。",
              kana:"じゅうみんひょうのじゅうしょがちがっていたので、しゅうせいしないではすまなかった。",
              romaji:"Juuminhyounojuushogachigatsuteitanode、shuuseishinaidehasumanakatta。",
              meaning:"Karena alamat di kartu domisili berbeda, mau tidak mau harus diperbaiki."
            },
            {
              jp:"ここまで迷惑をかけた以上、きちんと謝らずには済まない。",
              kana:"ここまでめいわくをかけたいじょう、きちんとあやまらずにはすまない。",
              romaji:"Kokomademeiwakuwokaketaijou、kichintoayamarazunihasumanai。",
              meaning:"Kalau sudah merepotkan sejauh ini, mau tidak mau harus meminta maaf dengan baik."
            },
            {
              jp:"個人情報が漏れたとなれば、会社としても説明しないでは済まない。",
              kana:"こじんじょうほうがもれたとなれば、かいしゃとしてもせつめいしないではすまない。",
              romaji:"Kojinjouhougamoretatonareba、kaishatoshitemosetsumeishinaidehasumanai。",
              meaning:"Kalau data pribadi bocor, perusahaan tentu tidak bisa tidak memberi penjelasan."
            },
            {
              jp:"駅で財布を拾った以上、届けずには済まないと思った。",
              kana:"えきでさいふをひろったいじょう、とどけずにはすまないとおもった。",
              romaji:"Ekidesaifuwohirotsutaijou、todokezunihasumanaitoomotta。",
              meaning:"Karena menemukan dompet di stasiun, saya merasa harus menyerahkannya."
            }
          ]
        }
      ]
    },

  {
      id:"GR-N1-44",
      level:"N1",
      title:"〜術がない",
      summary:"Pola N1 〜術がない dalam konteks alami sehari-hari dan formal.",
      groups:[
        {
          name:"〜術がない",
          description:"Pola N1 〜術がない dalam konteks alami sehari-hari dan formal.",
          sentences:[
            {
              jp:"終電が出たあとでは、もう帰る術がない。",
              kana:"しゅうでんがでたあとでは、もうかえるじゅつがない。",
              romaji:"Shuudengadetaatodeha、moukaerujutsuganai。",
              meaning:"Setelah kereta terakhir lewat, sudah tidak ada cara untuk pulang."
            },
            {
              jp:"スマホの充電が切れて、地図を確認する術がなかった。",
              kana:"すまほのじゅうでんがきれて、ちずをかくにんするじゅつがなかった。",
              romaji:"Sumahonojuudengakirete、chizuwokakuninsurujutsuganakatta。",
              meaning:"Baterai ponsel habis, jadi tidak ada cara untuk mengecek peta."
            },
            {
              jp:"相手の連絡先が分からず、お礼を伝える術がない。",
              kana:"あいてのれんらくさきがわからず、おれいをつたえるじゅつがない。",
              romaji:"Aitenorenrakusakigawakarazu、oreiwotsutaerujutsuganai。",
              meaning:"Karena tidak tahu kontak orangnya, tidak ada cara untuk menyampaikan terima kasih."
            },
            {
              jp:"書類をなくしてしまっては、申請を進める術がない。",
              kana:"しょるいをなくしてしまっては、しんせいをすすめるじゅつがない。",
              romaji:"Shoruiwonakushiteshimatteha、shinseiwosusumerujutsuganai。",
              meaning:"Kalau dokumennya hilang, tidak ada cara untuk melanjutkan pengajuan."
            },
            {
              jp:"本人が来られない以上、その場で確認する術はなかった。",
              kana:"ほんにんがこられないいじょう、そのばでかくにんするじゅつはなかった。",
              romaji:"Honningakorarenaiijou、sonobadekakuninsurujutsuhanakatta。",
              meaning:"Karena yang bersangkutan tidak bisa datang, saat itu tidak ada cara untuk mengonfirmasi."
            }
          ]
        }
      ]
    },

  {
      id:"GR-N1-45",
      level:"N1",
      title:"〜すら / 〜ですら",
      summary:"Pola N1 〜すら / 〜ですら dalam konteks alami sehari-hari dan formal.",
      groups:[
        {
          name:"〜すら / 〜ですら",
          description:"Pola N1 〜すら / 〜ですら dalam konteks alami sehari-hari dan formal.",
          sentences:[
            {
              jp:"忙しくて、昼ごはんを食べる時間すらなかった。",
              kana:"いそがしくて、ひるごはんをたべるじかんすらなかった。",
              romaji:"Isogashikute、hirugohanwotaberujikansuranakatta。",
              meaning:"Sibuk sekali sampai tidak punya waktu bahkan untuk makan siang."
            },
            {
              jp:"その新入社員は、敬語ですら自然に使いこなしていた。",
              kana:"そのしんにゅうしゃいんは、けいごですらしぜんにつかいこなしていた。",
              romaji:"Sonoshinnyuushainha、keigodesurashizennitsukaikonashiteita。",
              meaning:"Pegawai baru itu bahkan keigo pun sudah bisa dipakai dengan natural."
            },
            {
              jp:"寒すぎて、手袋をしていても指先すら冷たい。",
              kana:"さむすぎて、てぶくろをしていてもゆびさきすらつめたい。",
              romaji:"Samusugite、tebukurowoshiteitemoyubisakisuratsumetai。",
              meaning:"Terlalu dingin, sampai ujung jari pun tetap dingin meski sudah memakai sarung tangan."
            },
            {
              jp:"彼は自分の名前すら書けない状態だった。",
              kana:"かれはじぶんのなまえすらかけないじょうたいだった。",
              romaji:"Karehajibunnonamaesurakakenaijoutaidatta。",
              meaning:"Dia berada dalam kondisi bahkan tidak bisa menulis namanya sendiri."
            },
            {
              jp:"連休中は、近所のコンビニですらかなり混んでいた。",
              kana:"れんきゅうちゅうは、きんじょのこんびにですらかなりこんでいた。",
              romaji:"Renkyuuchuuha、kinjonokonbinidesurakanarikondeita。",
              meaning:"Saat libur panjang, bahkan konbini dekat rumah pun sangat ramai."
            }
          ]
        }
      ]
    },

  {
      id:"GR-N1-46",
      level:"N1",
      title:"〜ぞ",
      summary:"Pola N1 〜ぞ dalam konteks alami sehari-hari dan formal.",
      groups:[
        {
          name:"〜ぞ",
          description:"Pola N1 〜ぞ dalam konteks alami sehari-hari dan formal.",
          sentences:[
            {
              jp:"次の試合こそ、絶対に負けないぞ。",
              kana:"つぎのしあいこそ、ぜったいにまけないぞ。",
              romaji:"Tsuginoshiaikoso、zettainimakenaizo。",
              meaning:"Pertandingan berikutnya, saya pasti tidak akan kalah."
            },
            {
              jp:"明日は朝一で区役所へ行くぞ。",
              kana:"あしたはあさいちでくやくしょへいくぞ。",
              romaji:"Ashitahaasaichidekuyakushoheikuzo。",
              meaning:"Besok pagi-pagi saya akan ke balai kota."
            },
            {
              jp:"今年こそ、JLPT N1に受かるぞ。",
              kana:"こんねんこそ、JLPT N1にうかるぞ。",
              romaji:"Konnenkoso、JLPT N1niukaruzo。",
              meaning:"Tahun ini saya akan lulus JLPT N1."
            },
            {
              jp:"雨でも走るぞと言っていたのに、結局みんな室内に集まった。",
              kana:"あめでもはしるぞといっていたのに、けっきょくみんなしつないにあつまった。",
              romaji:"Amedemohashiruzotoitteitanoni、kekkyokuminnashitsunainiatsumatta。",
              meaning:"Padahal tadi bilang akan tetap lari meski hujan, akhirnya semua malah berkumpul di dalam ruangan."
            },
            {
              jp:"今日は定時で帰るぞと決めて、朝から集中して仕事した。",
              kana:"こんにちはていじでかえるぞときめて、あさからしゅうちゅうしてしごとした。",
              romaji:"Konnichihateijidekaeruzotokimete、asakarashuuchuushiteshigotoshita。",
              meaning:"Saya memutuskan hari ini akan pulang tepat waktu, jadi sejak pagi kerja dengan fokus."
            }
          ]
        }
      ]
    },

  {
      id:"GR-N1-48",
      level:"N1",
      title:"〜そっちのけで",
      summary:"Pola N1 〜そっちのけで dalam konteks alami sehari-hari dan formal.",
      groups:[
        {
          name:"〜そっちのけで",
          description:"Pola N1 〜そっちのけで dalam konteks alami sehari-hari dan formal.",
          sentences:[
            {
              jp:"締め切りが近いのに、彼は準備そっちのけで雑談していた。",
              kana:"しめきりがちかいのに、かれはじゅんびそっちのけでざつだんしていた。",
              romaji:"Shimekirigachikainoni、karehajunbisotchinokedezatsudanshiteita。",
              meaning:"Padahal tenggat sudah dekat, dia malah ngobrol dan menomorduakan persiapan."
            },
            {
              jp:"勉強そっちのけでゲームばかりしていたら、さすがに親に注意された。",
              kana:"べんきょうそっちのけでげーむばかりしていたら、さすがにおやにちゅういされた。",
              romaji:"Benkyousotchinokedegeemubakarishiteitara、sasuganioyanichuuisareta。",
              meaning:"Karena cuma main game dan mengabaikan belajar, akhirnya saya ditegur orang tua."
            },
            {
              jp:"子どもたちは宿題そっちのけで雪遊びに夢中だった。",
              kana:"こどもたちはしゅくだいそっちのけでゆきあそびにむちゅうだった。",
              romaji:"Kodomotachihashukudaisotchinokedeyukiasobinimuchuudatta。",
              meaning:"Anak-anak terlalu asyik bermain salju sampai melupakan PR."
            },
            {
              jp:"店長は昼休みそっちのけで、レジの対応を続けていた。",
              kana:"てんちょうはひるやすみそっちのけで、れじのたいおうをつづけていた。",
              romaji:"Tenchouhahiruyasumisotchinokede、rejinotaiouwotsuzuketeita。",
              meaning:"Manajer toko terus melayani kasir sampai mengorbankan jam istirahat siang."
            },
            {
              jp:"観光そっちのけで、ずっと中古レコード屋を回っていた。",
              kana:"かんこうそっちのけで、ずっとちゅうこれこーどやをまわっていた。",
              romaji:"Kankousotchinokede、zuttochuukorekoodoyawomawatsuteita。",
              meaning:"Saya malah keliling toko piringan hitam bekas dan hampir tidak sempat wisata."
            }
          ]
        }
      ]
    },

  {
      id:"GR-N1-49",
      level:"N1",
      title:"〜そばから",
      summary:"Pola N1 〜そばから dalam konteks alami sehari-hari dan formal.",
      groups:[
        {
          name:"〜そばから",
          description:"Pola N1 〜そばから dalam konteks alami sehari-hari dan formal.",
          sentences:[
            {
              jp:"片づけたそばから書類がまた机に積まれていく。",
              kana:"かたづけたそばからしょるいがまたつくえにつまれていく。",
              romaji:"Katazuketasobakarashoruigamatatsukuenitsumareteiku。",
              meaning:"Baru saja dirapikan, dokumen sudah menumpuk lagi di meja."
            },
            {
              jp:"覚えたそばから忘れてしまうので、単語は何度も書いている。",
              kana:"おぼえたそばからわすれてしまうので、たんごはなんどもかいている。",
              romaji:"Oboetasobakarawasureteshimaunode、tangohanandomokaiteiru。",
              meaning:"Karena baru hafal lalu cepat lupa lagi, saya menulis kosakata berkali-kali."
            },
            {
              jp:"注意したそばから同じミスをされたので、言い方を変えることにした。",
              kana:"ちゅういしたそばからおなじみすをされたので、いいかたをかえることにした。",
              romaji:"Chuuishitasobakaraonajimisuwosaretanode、iikatawokaerukotonishita。",
              meaning:"Baru saja diingatkan, kesalahan yang sama terulang lagi, jadi saya putuskan mengubah cara menjelaskannya."
            },
            {
              jp:"乾いたそばから洗濯物がたまっていく。",
              kana:"かわいたそばからせんたくものがたまっていく。",
              romaji:"Kawaitasobakarasentakumonogatamatteiku。",
              meaning:"Begitu cucian kering, cucian baru sudah menumpuk lagi."
            },
            {
              jp:"入れたそばから売れていくので、このパンは夕方までもたない。",
              kana:"いれたそばからうれていくので、このぱんはゆうがたまでもたない。",
              romaji:"Iretasobakaraureteikunode、konopanhayuugatamademotanai。",
              meaning:"Begitu roti ini dipajang, langsung terjual, jadi biasanya tidak sampai sore."
            }
          ]
        }
      ]
    },

  {
      id:"GR-N1-51",
      level:"N1",
      title:"〜たが最後 / 〜たら最後",
      summary:"Pola N1 〜たが最後 / 〜たら最後 dalam konteks alami sehari-hari dan formal.",
      groups:[
        {
          name:"〜たが最後 / 〜たら最後",
          description:"Pola N1 〜たが最後 / 〜たら最後 dalam konteks alami sehari-hari dan formal.",
          sentences:[
            {
              jp:"このアプリを開いたが最後、つい時間を忘れてしまう。",
              kana:"このあぷりをひらいたがさいご、ついじかんをわすれてしまう。",
              romaji:"Konoapuriwohiraitagasaigo、tsuijikanwowasureteshimau。",
              meaning:"Begitu buka aplikasi ini, saya langsung lupa waktu."
            },
            {
              jp:"その店の限定ラーメンを知ったが最後、並ばずにはいられなかった。",
              kana:"そのみせのげんていらーめんをしったがさいご、ならばずにはいられなかった。",
              romaji:"Sonomisenogenteiraamenwoshitsutagasaigo、narabazunihairarenakatta。",
              meaning:"Begitu tahu ramen edisi terbatas di toko itu, saya tidak bisa menahan diri untuk tidak antre."
            },
            {
              jp:"一度引き受けたら最後、中途半端には終われない。",
              kana:"いちどひきうけたらさいご、ちゅうとはんぱにはおわれない。",
              romaji:"Ichidohikiuketarasaigo、chuutohanpanihaowarenai。",
              meaning:"Kalau sudah terlanjur menerima, tidak bisa berhenti setengah-setengah."
            },
            {
              jp:"この時期に風邪をひいたが最後、試験まで体調を引きずりそうだ。",
              kana:"このじきにかぜをひいたがさいご、しけんまでたいちょうをひきずりそうだ。",
              romaji:"Konojikinikazewohiitagasaigo、shikenmadetaichouwohikizurisouda。",
              meaning:"Kalau sampai kena flu di masa seperti ini, rasanya akan terbawa sampai ujian."
            },
            {
              jp:"彼はスイッチが入ったら最後、閉店まで働き続ける。",
              kana:"かれはすいっちがいっったらさいご、へいてんまではたらきつづける。",
              romaji:"Karehasuitchigaitsutsutarasaigo、heitenmadehatarakitsuzukeru。",
              meaning:"Begitu semangat kerjanya menyala, dia akan terus bekerja sampai toko tutup."
            }
          ]
        }
      ]
    },

  {
      id:"GR-N1-52",
      level:"N1",
      title:"ただ〜のみだ",
      summary:"Pola N1 ただ〜のみだ dalam konteks alami sehari-hari dan formal.",
      groups:[
        {
          name:"ただ〜のみだ",
          description:"Pola N1 ただ〜のみだ dalam konteks alami sehari-hari dan formal.",
          sentences:[
            {
              jp:"結果を待って、静かに連絡を待つのみだ。",
              kana:"けっかをまって、しずかにれんらくをまつのみだ。",
              romaji:"Kekkawomatsute、shizukanirenrakuwomatsunomida。",
              meaning:"Sekarang tinggal menunggu hasil dan kabar dengan tenang."
            },
            {
              jp:"できる準備はすべてしたので、あとは本番を迎えるのみだ。",
              kana:"できるじゅんびはすべてしたので、あとはほんばんをむかえるのみだ。",
              romaji:"Dekirujunbihasubeteshitanode、atohahonbanwomukaerunomida。",
              meaning:"Semua persiapan sudah dilakukan, sekarang tinggal menghadapi hari-H."
            },
            {
              jp:"誤解を解くためには、正直に話すのみだと思う。",
              kana:"ごかいをとくためには、しょうじきにはなすのみだとおもう。",
              romaji:"Gokaiwotokutameniha、shoujikinihanasunomidatoomou。",
              meaning:"Untuk meluruskan salah paham, menurut saya tinggal bicara jujur."
            },
            {
              jp:"申請は済んだので、許可が下りるのを待つのみです。",
              kana:"しんせいはすんだので、きょかがおりるのをまつのみです。",
              romaji:"Shinseihasundanode、kyokagaorirunowomatsunomidesu。",
              meaning:"Pengajuannya sudah selesai, sekarang tinggal menunggu izin turun."
            },
            {
              jp:"ここまで来たら、最後まで信じて進むのみだ。",
              kana:"ここまできたら、さいごまでしんじてすすむのみだ。",
              romaji:"Kokomadekitara、saigomadeshinjitesusumunomida。",
              meaning:"Kalau sudah sejauh ini, tinggal terus maju sampai akhir dengan percaya."
            }
          ]
        }
      ]
    },

  {
      id:"GR-N1-53",
      level:"N1",
      title:"〜たつもりはない",
      summary:"Pola N1 〜たつもりはない dalam konteks alami sehari-hari dan formal.",
      groups:[
        {
          name:"〜たつもりはない",
          description:"Pola N1 〜たつもりはない dalam konteks alami sehari-hari dan formal.",
          sentences:[
            {
              jp:"相手を責めたつもりはなかったが、言い方がきつく聞こえたらしい。",
              kana:"あいてをせめたつもりはなかったが、いいかたがきつくきこえたらしい。",
              romaji:"Aitewosemetatsumorihanakattaga、iikatagakitsukukikoetarashii。",
              meaning:"Saya tidak berniat menyalahkan, tetapi rupanya cara bicara saya terdengar keras."
            },
            {
              jp:"急がせたつもりはないので、気にしないでください。",
              kana:"いそがせたつもりはないので、きにしないでください。",
              romaji:"Isogasetatsumorihanainode、kinishinaidekudasai。",
              meaning:"Saya tidak bermaksud mendesak, jadi jangan terlalu dipikirkan."
            },
            {
              jp:"自慢したつもりはないのに、少し誤解された。",
              kana:"じまんしたつもりはないのに、すこしごかいされた。",
              romaji:"Jimanshitatsumorihanainoni、sukoshigokaisareta。",
              meaning:"Padahal saya tidak bermaksud pamer, tetapi rupanya sedikit disalahpahami."
            },
            {
              jp:"その場を盛り上げたつもりはなかったが、みんなが笑ってくれて助かった。",
              kana:"そのばをもりあげたつもりはなかったが、みんながわらってくれてたすかった。",
              romaji:"Sonobawomoriagetatsumorihanakattaga、minnagawaratsutekuretetasukatta。",
              meaning:"Saya tidak berniat mencairkan suasana, tetapi untung semua tertawa."
            },
            {
              jp:"驚かせたつもりはないけれど、突然の訪問になってしまった。",
              kana:"おどろかせたつもりはないけれど、とつぜんのほうもんになってしまった。",
              romaji:"Odorokasetatsumorihanaikeredo、totsuzennohoumonninatteshimatta。",
              meaning:"Saya tidak bermaksud membuat kaget, tetapi jadinya memang datang mendadak."
            }
          ]
        }
      ]
    },

  {
      id:"GR-N1-54",
      level:"N1",
      title:"〜たところで",
      summary:"Pola N1 〜たところで dalam konteks alami sehari-hari dan formal.",
      groups:[
        {
          name:"〜たところで",
          description:"Pola N1 〜たところで dalam konteks alami sehari-hari dan formal.",
          sentences:[
            {
              jp:"今から急いだところで、最終電車にはもう間に合わない。",
              kana:"いまからいそいだところで、さいしゅうでんしゃにはもうまにあわない。",
              romaji:"Imakaraisoidatokorode、saishuudenshanihamoumaniawanai。",
              meaning:"Sekarang mau buru-buru pun sudah tidak akan sempat mengejar kereta terakhir."
            },
            {
              jp:"一人で悩んだところで、答えが出ないこともある。",
              kana:"ひとりでなやんだところで、こたえがでないこともある。",
              romaji:"Hitoridenayandatokorode、kotaegadenaikotomoaru。",
              meaning:"Kadang meski dipikirkan sendiri terus, jawabannya tetap tidak keluar."
            },
            {
              jp:"値下げしたところで、この場所では客足はあまり変わらないと思う。",
              kana:"ねさげしたところで、このばしょではきゃくあしはあまりかわらないとおもう。",
              romaji:"Nesageshitatokorode、konobashodehakyakuashihaamarikawaranaitoomou。",
              meaning:"Menurut saya, meski diturunkan harganya, jumlah pengunjung di lokasi ini tidak akan banyak berubah."
            },
            {
              jp:"今さら言い訳したところで、印象はよくならない。",
              kana:"いまさらいいわけしたところで、いんしょうはよくならない。",
              romaji:"Imasaraiiwakeshitatokorode、inshouhayokunaranai。",
              meaning:"Sekarang mau beralasan pun tidak akan memperbaiki kesan."
            },
            {
              jp:"数日徹夜したところで、体力がもたなくなるだけだ。",
              kana:"すうじつてつやしたところで、たいりょくがもたなくなるだけだ。",
              romaji:"Suujitsutetsuyashitatokorode、tairyokugamotanakunarudakeda。",
              meaning:"Meski begadang beberapa hari, hasilnya hanya badan yang tumbang."
            }
          ]
        }
      ]
    },

  {
      id:"GR-N1-55",
      level:"N1",
      title:"〜だに / 〜だにしない",
      summary:"Pola N1 〜だに / 〜だにしない dalam konteks alami sehari-hari dan formal.",
      groups:[
        {
          name:"〜だに / 〜だにしない",
          description:"Pola N1 〜だに / 〜だにしない dalam konteks alami sehari-hari dan formal.",
          sentences:[
            {
              jp:"あの時は、海外で働く未来など想像だにしなかった。",
              kana:"あのときは、かいがいではたらくみらいなどそうぞうだにしなかった。",
              romaji:"Anotokiha、kaigaidehatarakumirainadosouzoudanishinakatta。",
              meaning:"Waktu itu saya bahkan tidak membayangkan akan bekerja di luar negeri."
            },
            {
              jp:"彼は疲れている様子すら見せだにしなかった。",
              kana:"かれはつかれているようすすらみせだにしなかった。",
              romaji:"Karehatsukareteiruyoususuramisedanishinakatta。",
              meaning:"Dia bahkan tidak menunjukkan sedikit pun bahwa dirinya lelah."
            },
            {
              jp:"そのニュースを聞いた瞬間の驚きは、言葉にすることだに難しい。",
              kana:"そのにゅーすをきいたしゅんかんのおどろきは、ことばにすることだにむずかしい。",
              romaji:"Sononyuusuwokiitashunkannoodorokiha、kotobanisurukotodanimuzukashii。",
              meaning:"Keterkejutan saat mendengar berita itu bahkan sulit diungkapkan dengan kata-kata."
            },
            {
              jp:"昔の私は、人前で発表する日が来ることなど考えだにしなかった。",
              kana:"むかしのわたしは、ひとまえではっぴょうするにちがくることなどかんがえだにしなかった。",
              romaji:"Mukashinowatashiha、hitomaedehappyousurunichigakurukotonadokangaedanishinakatta。",
              meaning:"Dulu saya bahkan tidak pernah membayangkan akan ada hari saya presentasi di depan umum."
            },
            {
              jp:"彼女は不満を口にだにしないが、相当無理をしているように見える。",
              kana:"かのじょはふまんをくちにだにしないが、そうとうむりをしているようにみえる。",
              romaji:"Kanojohafumanwokuchinidanishinaiga、soutoumuriwoshiteiruyounimieru。",
              meaning:"Dia bahkan tidak mengucapkan keluhan, tetapi tampak sangat memaksakan diri."
            }
          ]
        }
      ]
    },

  {
      id:"GR-N1-56",
      level:"N1",
      title:"〜だの〜だの",
      summary:"Pola N1 〜だの〜だの dalam konteks alami sehari-hari dan formal.",
      groups:[
        {
          name:"〜だの〜だの",
          description:"Pola N1 〜だの〜だの dalam konteks alami sehari-hari dan formal.",
          sentences:[
            {
              jp:"会議のあと、資料が足りないだの説明が長いだのと不満が続いた。",
              kana:"かいぎのあと、しりょうがたりないだのせつめいがながいだのとふまんがつづいた。",
              romaji:"Kaiginoato、shiryougatarinaidanosetsumeiganagaidanotofumangatsuzuita。",
              meaning:"Setelah rapat, keluhan bermunculan seperti katanya dokumen kurang dan penjelasan terlalu panjang."
            },
            {
              jp:"旅行前になると、忘れ物がないかだの天気はどうかだの気になってしまう。",
              kana:"りょこうまえになると、わすれものがないかだのてんきはどうかだのきになってしまう。",
              romaji:"Ryokoumaeninaruto、wasuremonoganaikadanotenkihadoukadanokininatteshimau。",
              meaning:"Menjelang bepergian, saya jadi kepikiran macam-macam seperti ada barang tertinggal atau cuaca bagaimana."
            },
            {
              jp:"子どもたちはお菓子だのジュースだのを次々かごに入れた。",
              kana:"こどもたちはおかしだのじゅーすだのをつぎつぎかごにいれた。",
              romaji:"Kodomotachihaokashidanojuusudanowotsugitsugikagoniireta。",
              meaning:"Anak-anak memasukkan ini itu seperti camilan dan jus ke keranjang."
            },
            {
              jp:"引っ越しの週は、住所変更だの契約だのに追われっぱなしだった。",
              kana:"ひっこしのしゅうは、じゅうしょへんこうだのけいやくだのにおわれっぱなしだった。",
              romaji:"Hikkoshinoshuuha、juushohenkoudanokeiyakudanoniowareppanashidatta。",
              meaning:"Minggu pindahan penuh dengan urusan seperti ganti alamat dan kontrak ini itu."
            },
            {
              jp:"SNSでは値段が高いだの対応が遅いだの、いろいろ書かれていた。",
              kana:"SNSではねだんがたかいだのたいおうがおそいだの、いろいろかかれていた。",
              romaji:"SNSdehanedangatakaidanotaiougaosoidano、iroirokakareteita。",
              meaning:"Di media sosial ditulis macam-macam seperti harga mahal dan respons lambat."
            }
          ]
        }
      ]
    },

  {
      id:"GR-N1-57",
      level:"N1",
      title:"〜た弾みに / 〜た拍子に",
      summary:"Pola N1 〜た弾みに / 〜た拍子に dalam konteks alami sehari-hari dan formal.",
      groups:[
        {
          name:"〜た弾みに / 〜た拍子に",
          description:"Pola N1 〜た弾みに / 〜た拍子に dalam konteks alami sehari-hari dan formal.",
          sentences:[
            {
              jp:"立ち上がった拍子に、机の角にひざをぶつけた。",
              kana:"たちあがったひょうしに、つくえのかくにひざをぶつけた。",
              romaji:"Tachiagattahyoushini、tsukuenokakunihizawobutsuketa。",
              meaning:"Saat berdiri, saya tidak sengaja membenturkan lutut ke sudut meja."
            },
            {
              jp:"ドアを開けた弾みに、手に持っていた書類を落としてしまった。",
              kana:"どあをひらけたはずみに、てにもっていたしょるいをおとしてしまった。",
              romaji:"Doawohiraketahazumini、tenimotsuteitashoruiwootoshiteshimatta。",
              meaning:"Saat membuka pintu, saya tanpa sengaja menjatuhkan dokumen yang saya pegang."
            },
            {
              jp:"振り返った拍子に、後ろの人とかばんが当たってしまった。",
              kana:"ふりかえったひょうしに、うしろのにんとかばんがあたってしまった。",
              romaji:"Furikaetsutahyoushini、ushirononintokabangaatatteshimatta。",
              meaning:"Waktu menoleh, tas saya tidak sengaja mengenai orang di belakang."
            },
            {
              jp:"電車が揺れた拍子に、スマホを落としそうになった。",
              kana:"でんしゃがゆれたひょうしに、すまほをおとしそうになった。",
              romaji:"Denshagayuretahyoushini、sumahowootoshisouninatta。",
              meaning:"Saat kereta berguncang, ponsel saya hampir terjatuh."
            },
            {
              jp:"笑った弾みに飲み物が少しこぼれてしまった。",
              kana:"わらったはずみにのみものがすこしこぼれてしまった。",
              romaji:"Waratsutahazumininomimonogasukoshikoboreteshimatta。",
              meaning:"Saat tertawa, minuman saya sedikit tumpah."
            }
          ]
        }
      ]
    },

  {
      id:"GR-N1-58",
      level:"N1",
      title:"〜ためしがない",
      summary:"Pola N1 〜ためしがない dalam konteks alami sehari-hari dan formal.",
      groups:[
        {
          name:"〜ためしがない",
          description:"Pola N1 〜ためしがない dalam konteks alami sehari-hari dan formal.",
          sentences:[
            {
              jp:"この店の限定スイーツは、夕方まで残っていたためしがない。",
              kana:"このみせのげんていすいーつは、ゆうがたまでのこっていたためしがない。",
              romaji:"Konomisenogenteisuiitsuha、yuugatamadenokotsuteitatameshiganai。",
              meaning:"Manisan edisi terbatas di toko ini tidak pernah bertahan sampai sore."
            },
            {
              jp:"彼は待ち合わせに遅れたためしがない。",
              kana:"かれはまちあわせにおくれたためしがない。",
              romaji:"Karehamachiawaseniokuretatameshiganai。",
              meaning:"Dia tidak pernah terlambat datang ke tempat janji."
            },
            {
              jp:"梅雨の時期に洗濯物が一日で乾いたためしがない。",
              kana:"つゆのじきにせんたくものがついたちでかわいたためしがない。",
              romaji:"Tsuyunojikinisentakumonogatsuitachidekawaitatameshiganai。",
              meaning:"Di musim hujan, cucian tidak pernah kering dalam satu hari."
            },
            {
              jp:"あの窓口は昼休みの前に空いていたためしがない。",
              kana:"あのまどぐちはひるやすみのまえにあいていたためしがない。",
              romaji:"Anomadoguchihahiruyasuminomaeniaiteitatameshiganai。",
              meaning:"Loket itu tidak pernah sepi menjelang jam istirahat siang."
            },
            {
              jp:"このアプリは更新直後に不具合が出なかったためしがない。",
              kana:"このあぷりはこうしんちょくごにふぐあいがでなかったためしがない。",
              romaji:"Konoapurihakoushinchokugonifuguaigadenakattatameshiganai。",
              meaning:"Aplikasi ini rasanya tidak pernah lolos dari bug tepat setelah update."
            }
          ]
        }
      ]
    },

  {
      id:"GR-N1-59",
      level:"N1",
      title:"〜たら〜たで",
      summary:"Pola N1 〜たら〜たで dalam konteks alami sehari-hari dan formal.",
      groups:[
        {
          name:"〜たら〜たで",
          description:"Pola N1 〜たら〜たで dalam konteks alami sehari-hari dan formal.",
          sentences:[
            {
              jp:"一人で行ったら行ったで、気楽で楽しかった。",
              kana:"ひとりでいったらいったで、きらくでたのしかった。",
              romaji:"Hitorideittaraittade、kirakudetanoshikatta。",
              meaning:"Kalau pergi sendiri pun, ada enaknya juga dan tetap menyenangkan."
            },
            {
              jp:"雨が降ったら降ったで、予定を室内に変えればいい。",
              kana:"あめがふったらふったで、よていをしつないにかえればいい。",
              romaji:"Amegafutsutarafutsutade、yoteiwoshitsunainikaerebaii。",
              meaning:"Kalau ternyata hujan juga, tinggal ubah rencananya ke dalam ruangan."
            },
            {
              jp:"引っ越したら引っ越したで、新しい生活に慣れるまで忙しい。",
              kana:"ひっこしたらひっこしたで、あたらしいせいかつになれるまでいそがしい。",
              romaji:"Hikkoshitarahikkoshitade、atarashiiseikatsuninarerumadeisogashii。",
              meaning:"Kalau jadi pindah pun, setelah itu pasti sibuk menyesuaikan diri dengan hidup baru."
            },
            {
              jp:"休みになったらなったで、やりたいことが多すぎて迷う。",
              kana:"やすみになったらなったで、やりたいことがおおすぎてまよう。",
              romaji:"Yasumininattaranattade、yaritaikotogaoosugitemayou。",
              meaning:"Kalau libur datang juga, justru bingung karena banyak sekali yang ingin dilakukan."
            },
            {
              jp:"断られたら断られたで、別の方法を考えるしかない。",
              kana:"ことわられたらことわられたで、べつのほうほうをかんがえるしかない。",
              romaji:"Kotowararetarakotowararetade、betsunohouhouwokangaerushikanai。",
              meaning:"Kalau sampai ditolak pun, ya tinggal cari cara lain."
            }
          ]
        }
      ]
    },

  {
      id:"GR-N1-60",
      level:"N1",
      title:"〜たら〜ところだ",
      summary:"Pola N1 〜たら〜ところだ dalam konteks alami sehari-hari dan formal.",
      groups:[
        {
          name:"〜たら〜ところだ",
          description:"Pola N1 〜たら〜ところだ dalam konteks alami sehari-hari dan formal.",
          sentences:[
            {
              jp:"あと五分遅れていたら、面接に間に合わないところだった。",
              kana:"あとごぶおくれていたら、めんせつにまにあわないところだった。",
              romaji:"Atogobuokureteitara、mensetsunimaniawanaitokorodatta。",
              meaning:"Kalau terlambat lima menit lagi, saya hampir saja tidak sempat wawancara."
            },
            {
              jp:"傘を持たずに出ていたら、びしょぬれになるところだった。",
              kana:"かさをもたずにでていたら、びしょぬれになるところだった。",
              romaji:"Kasawomotazunideteitara、bishonureninarutokorodatta。",
              meaning:"Kalau tadi keluar tanpa bawa payung, saya hampir saja basah kuyup."
            },
            {
              jp:"連絡をもらわなかったら、会場を間違えるところでした。",
              kana:"れんらくをもらわなかったら、かいじょうをまちがえるところでした。",
              romaji:"Renrakuwomorawanakattara、kaijouwomachigaerutokorodeshita。",
              meaning:"Kalau tidak diberi kabar, saya hampir salah datang ke lokasi."
            },
            {
              jp:"ブレーキが遅れていたら、前の車にぶつかるところだった。",
              kana:"ぶれーきがおくれていたら、まえのくるまにぶつかるところだった。",
              romaji:"Bureekigaokureteitara、maenokurumanibutsukarutokorodatta。",
              meaning:"Kalau rem terlambat sedikit saja, saya hampir menabrak mobil depan."
            },
            {
              jp:"友達が止めてくれなかったら、そのまま申し込むところだった。",
              kana:"ともだちがとめてくれなかったら、そのままもうしこむところだった。",
              romaji:"Tomodachigatometekurenakattara、sonomamamoushikomutokorodatta。",
              meaning:"Kalau teman saya tidak menghentikan, saya hampir langsung mendaftar begitu saja."
            }
          ]
        }
      ]
    },

  {
      id:"GR-N1-61",
      level:"N1",
      title:"〜たらしい / 〜ったらしい",
      summary:"Pola N1 〜たらしい / 〜ったらしい dalam konteks alami sehari-hari dan formal.",
      groups:[
        {
          name:"〜たらしい / 〜ったらしい",
          description:"Pola N1 〜たらしい / 〜ったらしい dalam konteks alami sehari-hari dan formal.",
          sentences:[
            {
              jp:"朝から文句ったらしい言い方をされて、少し気分が重くなった。",
              kana:"あさからもんくったらしいいいかたをされて、すこしきぶんがおもくなった。",
              romaji:"Asakaramonkuttarashiiiikatawosarete、sukoshikibungaomokunatta。",
              meaning:"Dari pagi saya diajak bicara dengan gaya yang penuh keluhan, jadi suasana hati agak berat."
            },
            {
              jp:"自慢ったらしい話ばかり続くと、周りは疲れてしまう。",
              kana:"じまんったらしいはなしばかりつづくと、まわりはつかれてしまう。",
              romaji:"Jimanttarashiihanashibakaritsuzukuto、mawarihatsukareteshimau。",
              meaning:"Kalau isinya terus cerita bernada pamer, orang sekitar jadi lelah."
            },
            {
              jp:"先生に注意されたのに、言い訳ったらしい返事をしてしまった。",
              kana:"せんせいにちゅういされたのに、いいわけったらしいへんじをしてしまった。",
              romaji:"Senseinichuuisaretanoni、iiwakettarashiihenjiwoshiteshimatta。",
              meaning:"Padahal sudah ditegur dosen, saya malah menjawab dengan nada seperti mencari alasan."
            },
            {
              jp:"広告の文が説明というより宣伝ったらしかった。",
              kana:"こうこくのぶんがせつめいというよりせんでんったらしかった。",
              romaji:"Koukokunobungasetsumeitoiuyorisendenttarashikatta。",
              meaning:"Teks iklan itu terasa lebih seperti promosi daripada penjelasan."
            },
            {
              jp:"あの人の笑い方、少し子どもったらしくて憎めない。",
              kana:"あのにんのわらいかた、すこしこどもったらしくてにくめない。",
              romaji:"Anoninnowaraikata、sukoshikodomottarashikutenikumenai。",
              meaning:"Cara tertawanya agak kekanak-kanakan, tetapi jadi tidak bisa dibenci."
            }
          ]
        }
      ]
    },

  {
      id:"GR-N1-62",
      level:"N1",
      title:"〜たりとも",
      summary:"Pola N1 〜たりとも dalam konteks alami sehari-hari dan formal.",
      groups:[
        {
          name:"〜たりとも",
          description:"Pola N1 〜たりとも dalam konteks alami sehari-hari dan formal.",
          sentences:[
            {
              jp:"この書類は一枚たりともなくしてはいけない。",
              kana:"このしょるいはいちまいたりともなくしてはいけない。",
              romaji:"Konoshoruihaichimaitaritomonakushitehaikenai。",
              meaning:"Dokumen ini tidak boleh hilang satu lembar pun."
            },
            {
              jp:"試験中は一分たりとも気が抜けなかった。",
              kana:"しけんちゅうはいちぶたりともきがぬけなかった。",
              romaji:"Shikenchuuhaichibutaritomokiganukenakatta。",
              meaning:"Saat ujian, saya tidak bisa lengah sedetik pun."
            },
            {
              jp:"その事故以来、彼はハンドルを握る時に一瞬たりとも油断しなくなった。",
              kana:"そのじこいらい、かれははんどるをにぎるときにいっしゅんたりともゆだんしなくなった。",
              romaji:"Sonojikoirai、karehahandoruwonigirutokiniisshuntaritomoyudanshinakunatta。",
              meaning:"Sejak kecelakaan itu, dia tidak lagi lengah sesaat pun saat menyetir."
            },
            {
              jp:"税金から出る以上、一円たりとも無駄にできない。",
              kana:"ぜいきんからでるいじょう、いちえんたりともむだにできない。",
              romaji:"Zeikinkaraderuijou、ichientaritomomudanidekinai。",
              meaning:"Karena berasal dari pajak, satu yen pun tidak boleh diboroskan."
            },
            {
              jp:"駅前の再開発では、一本たりとも木を減らしたくないという声もある。",
              kana:"えきまえのさいかいはつでは、いっぽんたりともきをへらしたくないというこえもある。",
              romaji:"Ekimaenosaikaihatsudeha、ippontaritomokiwoherashitakunaitoiukoemoaru。",
              meaning:"Dalam penataan ulang depan stasiun, ada juga suara yang ingin tidak mengurangi satu pohon pun."
            }
          ]
        }
      ]
    },

  {
      id:"GR-N1-63",
      level:"N1",
      title:"〜たるもの",
      summary:"Pola N1 〜たるもの dalam konteks alami sehari-hari dan formal.",
      groups:[
        {
          name:"〜たるもの",
          description:"Pola N1 〜たるもの dalam konteks alami sehari-hari dan formal.",
          sentences:[
            {
              jp:"医療に関わる者たるもの、基本的な説明責任は果たすべきだ。",
              kana:"いりょうにかかわるものたるもの、きほんてきなせつめいせきにんははたすべきだ。",
              romaji:"Iryounikakawarumonotarumono、kihontekinasetsumeisekininhahatasubekida。",
              meaning:"Sebagai orang yang berkecimpung di bidang medis, kita harus memenuhi tanggung jawab memberi penjelasan dasar."
            },
            {
              jp:"社会人たるもの、時間の約束には気を配りたい。",
              kana:"しゃかいじんたるもの、じかんのやくそくにはきをくばりたい。",
              romaji:"Shakaijintarumono、jikannoyakusokunihakiwokubaritai。",
              meaning:"Sebagai orang dewasa yang bekerja, kita seharusnya peduli pada ketepatan waktu."
            },
            {
              jp:"店長たるもの、忙しい時ほど落ち着いて指示を出さないといけない。",
              kana:"てんちょうたるもの、いそがしいときほどおちついてしじをださないといけない。",
              romaji:"Tenchoutarumono、isogashiitokihodoochitsuiteshijiwodasanaitoikenai。",
              meaning:"Sebagai manajer toko, justru saat sibuk harus memberi arahan dengan tenang."
            },
            {
              jp:"指導者たるもの、結果だけでなく過程も見る必要がある。",
              kana:"しどうしゃたるもの、けっかだけでなくかていもみるひつようがある。",
              romaji:"Shidoushatarumono、kekkadakedenakukateimomiruhitsuyougaaru。",
              meaning:"Sebagai pembimbing, yang dilihat bukan hanya hasil, tetapi juga proses."
            },
            {
              jp:"留学生たるもの、困った時は一人で抱え込まず相談してほしい。",
              kana:"りゅうがくせいたるもの、こまったときはひとりでかかえこまずそうだんしてほしい。",
              romaji:"Ryuugakuseitarumono、komatsutatokihahitoridekakaekomazusoudanshitehoshii。",
              meaning:"Sebagai pelajar asing, saya ingin kalian berkonsultasi saat ada masalah dan tidak memendamnya sendiri."
            }
          ]
        }
      ]
    },

  {
      id:"GR-N1-64",
      level:"N1",
      title:"〜だろうに",
      summary:"Pola N1 〜だろうに dalam konteks alami sehari-hari dan formal.",
      groups:[
        {
          name:"〜だろうに",
          description:"Pola N1 〜だろうに dalam konteks alami sehari-hari dan formal.",
          sentences:[
            {
              jp:"もう少し早く連絡してくれれば、間に合っただろうに。",
              kana:"もうすこしはやくれんらくしてくれれば、まにあっただろうに。",
              romaji:"Mousukoshihayakurenrakushitekurereba、maniatsutadarouni。",
              meaning:"Kalau saja diberi kabar sedikit lebih cepat, pasti masih sempat."
            },
            {
              jp:"雨具を持っていけばよかっただろうにと、駅で何度も思った。",
              kana:"あまぐをもっていけばよかっただろうにと、えきでなんどもおもった。",
              romaji:"Amaguwomotsuteikebayokattadarounito、ekidenandomoomotta。",
              meaning:"Di stasiun saya berkali-kali berpikir, coba tadi bawa jas hujan."
            },
            {
              jp:"本人に直接聞けば早いだろうに、なぜ遠回りするんだろう。",
              kana:"ほんにんにちょくせつきけばはやいだろうに、なぜとおまわりするんだろう。",
              romaji:"Honninnichokusetsukikebahayaidarouni、nazetoomawarisurundarou。",
              meaning:"Padahal kalau tanya langsung ke orangnya pasti lebih cepat, mengapa harus memutar begitu."
            },
            {
              jp:"こんなに混むと分かっていたなら、平日に来ただろうに。",
              kana:"こんなにこむとわかっていたなら、へいじつにきただろうに。",
              romaji:"Konnanikomutowakatteitanara、heijitsunikitadarouni。",
              meaning:"Kalau tahu akan seramai ini, saya pasti datang saat hari kerja."
            },
            {
              jp:"一言謝れば済んだだろうに、話が大きくなってしまった。",
              kana:"ひとことあやまればすんだだろうに、はなしがおおきくなってしまった。",
              romaji:"Hitokotoayamarebasundadarouni、hanashigaookikunatteshimatta。",
              meaning:"Padahal kalau minta maaf satu kali saja mungkin selesai, tetapi masalahnya membesar."
            }
          ]
        }
      ]
    },

  {
      id:"GR-N1-65",
      level:"N1",
      title:"〜つ〜つ",
      summary:"Pola N1 〜つ〜つ dalam konteks alami sehari-hari dan formal.",
      groups:[
        {
          name:"〜つ〜つ",
          description:"Pola N1 〜つ〜つ dalam konteks alami sehari-hari dan formal.",
          sentences:[
            {
              jp:"駅へ向かいつつ、今日の会議の流れを頭の中で整理していた。",
              kana:"えきへむかいつつ、きょうのかいぎのながれをあたまのなかでせいりしていた。",
              romaji:"Ekihemukaitsutsu、kyounokaiginonagarewoatamanonakadeseirishiteita。",
              meaning:"Sambil berjalan menuju stasiun, saya menata alur rapat hari ini di kepala."
            },
            {
              jp:"迷いつつも、結局は日本で働く道を選んだ。",
              kana:"まよいつつも、けっきょくはにっぽんではたらくみちをえらんだ。",
              romaji:"Mayoitsutsumo、kekkyokuhanippondehatarakumichiwoeranda。",
              meaning:"Walau sempat ragu, akhirnya saya memilih jalan untuk bekerja di Jepang."
            },
            {
              jp:"相手の反応を見つつ、言い方を少しずつ調整した。",
              kana:"あいてのはんのうをみつつ、いいかたをすこしずつちょうせいした。",
              romaji:"Aitenohannouwomitsutsu、iikatawosukoshizutsuchouseishita。",
              meaning:"Sambil melihat reaksi lawan bicara, saya sedikit demi sedikit menyesuaikan cara bicara."
            },
            {
              jp:"春の気配を感じつつ、まだ朝晩はコートが手放せない。",
              kana:"はるのけはいをかんじつつ、まだあさばんはこーとがてばなせない。",
              romaji:"Harunokehaiwokanjitsutsu、madaasabanhakootogatebanasenai。",
              meaning:"Meski mulai terasa musim semi, pagi dan malam saya masih butuh mantel."
            },
            {
              jp:"周囲に助けられつつ、何とか新しい職場に慣れてきた。",
              kana:"しゅういにたすけられつつ、なんとかあたらしいしょくばになれてきた。",
              romaji:"Shuuinitasukeraretsutsu、nantokaatarashiishokubaninaretekita。",
              meaning:"Dengan dibantu orang sekitar, perlahan saya mulai terbiasa dengan tempat kerja baru."
            }
          ]
        }
      ]
    },

  {
      id:"GR-N1-67",
      level:"N1",
      title:"〜ってば / 〜ったら",
      summary:"Pola N1 〜ってば / 〜ったら dalam konteks alami sehari-hari dan formal.",
      groups:[
        {
          name:"〜ってば / 〜ったら",
          description:"Pola N1 〜ってば / 〜ったら dalam konteks alami sehari-hari dan formal.",
          sentences:[
            {
              jp:"もう時間がないってば、早く出ようよ。",
              kana:"もうじかんがないってば、はやくでようよ。",
              romaji:"Moujikanganaitteba、hayakudeyouyo。",
              meaning:"Sudah tidak ada waktu, ayo cepat berangkat."
            },
            {
              jp:"だから違うったら、私が言いたいのはそこじゃない。",
              kana:"だからちがうったら、わたしがいいたいのはそこじゃない。",
              romaji:"Dakarachigautsutara、watashigaiitainohasokojanai。",
              meaning:"Makanya bukan itu, yang ingin saya bilang bukan bagian itu."
            },
            {
              jp:"危ないってば、ホームでは走らないで。",
              kana:"あぶないってば、ほーむでははしらないで。",
              romaji:"Abunaitteba、hoomudehahashiranaide。",
              meaning:"Bahaya, jangan lari di peron."
            },
            {
              jp:"その話はあとで聞くったら、今はレジを手伝って。",
              kana:"そのはなしはあとできくったら、いまはれじをてつだって。",
              romaji:"Sonohanashihaatodekikuttara、imaharejiwotetsudatsute。",
              meaning:"Nanti saja dengar cerita itu, sekarang bantu jaga kasir dulu."
            },
            {
              jp:"大丈夫だってばと笑っていたけど、顔色はあまりよくなかった。",
              kana:"だいじょうぶだってばとわらっていたけど、かおいろはあまりよくなかった。",
              romaji:"Daijoubudattebatowaratsuteitakedo、kaoirohaamariyokunakatta。",
              meaning:"Dia tertawa sambil bilang baik-baik saja, tetapi wajahnya terlihat kurang sehat."
            }
          ]
        }
      ]
    },

  {
      id:"GR-N1-68",
      level:"N1",
      title:"〜であれ / 〜であろうと",
      summary:"Pola N1 〜であれ / 〜であろうと dalam konteks alami sehari-hari dan formal.",
      groups:[
        {
          name:"〜であれ / 〜であろうと",
          description:"Pola N1 〜であれ / 〜であろうと dalam konteks alami sehari-hari dan formal.",
          sentences:[
            {
              jp:"相手が誰であれ、失礼な言い方はよくない。",
              kana:"あいてがだれであれ、しつれいないいかたはよくない。",
              romaji:"Aitegadaredeare、shitsureinaiikatahayokunai。",
              meaning:"Siapa pun lawan bicara kita, berbicara kasar tetap tidak baik."
            },
            {
              jp:"理由が何であろうと、無断欠勤は認められない。",
              kana:"りゆうがなんであろうと、むだんけっきんはみとめられない。",
              romaji:"Riyuuganandearouto、mudankekkinhamitomerarenai。",
              meaning:"Apa pun alasannya, bolos tanpa izin tidak bisa diterima."
            },
            {
              jp:"子どもであれ大人であれ、このルールは守ってください。",
              kana:"こどもであれおとなであれ、このるーるはまもってください。",
              romaji:"Kodomodeareotonadeare、konoruuruhamamotsutekudasai。",
              meaning:"Baik anak-anak maupun orang dewasa, tolong patuhi aturan ini."
            },
            {
              jp:"結果がどうであろうと、やるべきことは変わらない。",
              kana:"けっかがどうであろうと、やるべきことはかわらない。",
              romaji:"Kekkagadoudearouto、yarubekikotohakawaranai。",
              meaning:"Apa pun hasilnya nanti, yang harus dilakukan tetap sama."
            },
            {
              jp:"外国人であれ日本人であれ、同じ説明を受けられるようにしてある。",
              kana:"がいこくじんであれにほんじんであれ、おなじせつめいをうけられるようにしてある。",
              romaji:"Gaikokujindearenihonjindeare、onajisetsumeiwoukerareruyounishitearu。",
              meaning:"Baik warga asing maupun Jepang, sistemnya dibuat supaya semua bisa mendapat penjelasan yang sama."
            }
          ]
        }
      ]
    },

  {
      id:"GR-N1-69",
      level:"N1",
      title:"〜て敵わない",
      summary:"Pola N1 〜て敵わない dalam konteks alami sehari-hari dan formal.",
      groups:[
        {
          name:"〜て敵わない",
          description:"Pola N1 〜て敵わない dalam konteks alami sehari-hari dan formal.",
          sentences:[
            {
              jp:"この湿気では、髪が広がって敵わない。",
              kana:"このしっけでは、かみがひろがってかなわない。",
              romaji:"Konoshikkedeha、kamigahirogattekanawanai。",
              meaning:"Dengan kelembapan seperti ini, rambut saya mengembang dan benar-benar merepotkan."
            },
            {
              jp:"隣の工事の音が大きくて敵わない。",
              kana:"となりのこうじのおとがおおきくてかなわない。",
              romaji:"Tonarinokoujinootogaookikutekanawanai。",
              meaning:"Suara proyek di sebelah terlalu keras dan benar-benar menyiksa."
            },
            {
              jp:"花粉がひどくて、外を歩くだけで目がかゆくて敵わない。",
              kana:"かふんがひどくて、そとをあるくだけでめがかゆくてかなわない。",
              romaji:"Kafungahidokute、sotowoarukudakedemegakayukutekanawanai。",
              meaning:"Serbuk sarinya parah, sampai jalan di luar saja mata sudah gatal sekali."
            },
            {
              jp:"新人対応と月末処理が重なって、忙しくて敵わない。",
              kana:"しんじんたいおうとげつまつしょりがかさなって、いそがしくてかなわない。",
              romaji:"Shinjintaioutogetsumatsushorigakasanatsute、isogashikutekanawanai。",
              meaning:"Menangani pegawai baru dan pekerjaan akhir bulan bertumpuk, jadi sibuk sekali sampai kewalahan."
            },
            {
              jp:"この古い建物は冬になると寒くて敵わない。",
              kana:"このふるいたてものはふゆになるとさむくてかなわない。",
              romaji:"Konofuruitatemonohafuyuninarutosamukutekanawanai。",
              meaning:"Gedung tua ini kalau musim dingin dinginnya benar-benar tidak tahan."
            }
          ]
        }
      ]
    },

  {
      id:"GR-N1-70",
      level:"N1",
      title:"〜てからというもの",
      summary:"Pola N1 〜てからというもの dalam konteks alami sehari-hari dan formal.",
      groups:[
        {
          name:"〜てからというもの",
          description:"Pola N1 〜てからというもの dalam konteks alami sehari-hari dan formal.",
          sentences:[
            {
              jp:"日本へ来てからというもの、季節の行事が前より気になるようになった。",
              kana:"にっぽんへきてからというもの、きせつのぎょうじがまえよりきになるようになった。",
              romaji:"Nipponhekitekaratoiumono、kisetsunogyoujigamaeyorikininaruyouninatta。",
              meaning:"Sejak datang ke Jepang, saya jadi lebih memperhatikan acara-acara musiman."
            },
            {
              jp:"在宅勤務になってからというもの、通勤時間の感覚がなくなった。",
              kana:"ざいたくきんむになってからというもの、つうきんじかんのかんかくがなくなった。",
              romaji:"Zaitakukinmuninattekaratoiumono、tsuukinjikannokankakuganakunatta。",
              meaning:"Sejak mulai kerja dari rumah, rasa soal waktu commute jadi hilang."
            },
            {
              jp:"引っ越してからというもの、近所の銭湯によく行くようになった。",
              kana:"ひっこしてからというもの、きんじょのせんとうによくいくようになった。",
              romaji:"Hikkoshitekaratoiumono、kinjonosentouniyokuikuyouninatta。",
              meaning:"Sejak pindah rumah, saya jadi sering pergi ke pemandian umum dekat rumah."
            },
            {
              jp:"このアプリを使い始めてからというもの、紙のメモをほとんど使わない。",
              kana:"このあぷりをつかいはじめてからというもの、かみのめもをほとんどつかわない。",
              romaji:"Konoapuriwotsukaihajimetekaratoiumono、kaminomemowohotondotsukawanai。",
              meaning:"Sejak mulai memakai aplikasi ini, saya hampir tidak lagi memakai memo kertas."
            },
            {
              jp:"新しい上司が来てからというもの、会議の進み方がかなり変わった。",
              kana:"あたらしいじょうしがきてからというもの、かいぎのすすみかたがかなりかわった。",
              romaji:"Atarashiijoushigakitekaratoiumono、kaiginosusumikatagakanarikawatta。",
              meaning:"Sejak atasan baru datang, jalannya rapat berubah cukup banyak."
            }
          ]
        }
      ]
    },

  {
      id:"GR-N1-71",
      level:"N1",
      title:"〜てしかるべきだ",
      summary:"Pola N1 〜てしかるべきだ dalam konteks alami sehari-hari dan formal.",
      groups:[
        {
          name:"〜てしかるべきだ",
          description:"Pola N1 〜てしかるべきだ dalam konteks alami sehari-hari dan formal.",
          sentences:[
            {
              jp:"利用者に不便をかけたのなら、まずは説明して謝ってしかるべきだ。",
              kana:"りようしゃにふべんをかけたのなら、まずはせつめいしてあやまってしかるべきだ。",
              romaji:"Riyoushanifubenwokaketanonara、mazuhasetsumeishiteayamatsuteshikarubekida。",
              meaning:"Kalau sudah membuat pengguna tidak nyaman, sudah sepantasnya menjelaskan dan meminta maaf dulu."
            },
            {
              jp:"これだけ働いているのだから、正当に評価されてしかるべきだ。",
              kana:"これだけはたらいているのだから、せいとうにひょうかされてしかるべきだ。",
              romaji:"Koredakehataraiteirunodakara、seitounihyoukasareteshikarubekida。",
              meaning:"Kalau bekerja sekeras ini, sudah semestinya dinilai dengan layak."
            },
            {
              jp:"事故の原因が明らかなら、会社は再発防止策を示してしかるべきだ。",
              kana:"じこのげんいんがあきらかなら、かいしゃはさいはつぼうしさくをしめしてしかるべきだ。",
              romaji:"Jikonogen'ingaakirakanara、kaishahasaihatsuboushisakuwoshimeshiteshikarubekida。",
              meaning:"Kalau penyebab kecelakaan sudah jelas, perusahaan sepantasnya menunjukkan langkah pencegahan."
            },
            {
              jp:"子どもの安全が関わる以上、学校が慎重に判断してしかるべきだ。",
              kana:"こどものあんぜんがかかわるいじょう、がっこうがしんちょうにはんだんしてしかるべきだ。",
              romaji:"Kodomonoanzengakakawaruijou、gakkougashinchounihandanshiteshikarubekida。",
              meaning:"Karena menyangkut keselamatan anak-anak, sekolah memang sepantasnya bertindak hati-hati."
            },
            {
              jp:"約束を守れなかったなら、事情を伝えてしかるべきだと思う。",
              kana:"やくそくをまもれなかったなら、じじょうをつたえてしかるべきだとおもう。",
              romaji:"Yakusokuwomamorenakattanara、jijouwotsutaeteshikarubekidatoomou。",
              meaning:"Kalau tidak bisa menepati janji, menurut saya sudah seharusnya memberi tahu alasannya."
            }
          ]
        }
      ]
    },

  {
      id:"GR-N1-72",
      level:"N1",
      title:"〜て済むことではない",
      summary:"Pola N1 〜て済むことではない dalam konteks alami sehari-hari dan formal.",
      groups:[
        {
          name:"〜て済むことではない",
          description:"Pola N1 〜て済むことではない dalam konteks alami sehari-hari dan formal.",
          sentences:[
            {
              jp:"個人情報の流出は、謝って済むことではない。",
              kana:"こじんじょうほうのりゅうしゅつは、あやまってすむことではない。",
              romaji:"Kojinjouhounoryuushutsuha、ayamatsutesumukotodehanai。",
              meaning:"Kebocoran data pribadi bukan masalah yang selesai hanya dengan meminta maaf."
            },
            {
              jp:"今回のミスは、担当者一人を責めて済むことではない。",
              kana:"こんかいのみすは、たんとうしゃひとりをせめてすむことではない。",
              romaji:"Konkainomisuha、tantoushahitoriwosemetesumukotodehanai。",
              meaning:"Kesalahan kali ini bukan hal yang bisa selesai hanya dengan menyalahkan satu orang."
            },
            {
              jp:"高齢者向けの案内を分かりにくいままにしておいて済むことではない。",
              kana:"こうれいしゃむけのあんないをわかりにくいままにしておいてすむことではない。",
              romaji:"Koureishamukenoannaiwowakarinikuimamanishiteoitesumukotodehanai。",
              meaning:"Membiarkan panduan untuk lansia tetap sulit dipahami bukan hal yang boleh dibiarkan."
            },
            {
              jp:"試験問題の配布ミスは、訂正して済むことではない場合もある。",
              kana:"しけんもんだいのはいふみすは、ていせいしてすむことではないばあいもある。",
              romaji:"Shikenmondainohaifumisuha、teiseishitesumukotodehanaibaaimoaru。",
              meaning:"Kesalahan pembagian soal ujian kadang bukan sesuatu yang selesai hanya dengan koreksi."
            },
            {
              jp:"お金を返して済むことではないと、店側も重く受け止めていた。",
              kana:"おきんをかえしてすむことではないと、みせがわもおもくうけとめていた。",
              romaji:"Okinwokaeshitesumukotodehanaito、misegawamoomokuuketometeita。",
              meaning:"Pihak toko pun menganggapnya serius karena ini bukan hal yang selesai hanya dengan mengembalikan uang."
            }
          ]
        }
      ]
    },

  {
      id:"GR-N1-73",
      level:"N1",
      title:"〜でなくてなんだろう",
      summary:"Pola N1 〜でなくてなんだろう dalam konteks alami sehari-hari dan formal.",
      groups:[
        {
          name:"〜でなくてなんだろう",
          description:"Pola N1 〜でなくてなんだろう dalam konteks alami sehari-hari dan formal.",
          sentences:[
            {
              jp:"こんなに毎日通いたくなる店なら、名店でなくてなんだろう。",
              kana:"こんなにまいにちかよいたくなるみせなら、めいてんでなくてなんだろう。",
              romaji:"Konnanimainichikayoitakunarumisenara、meitendenakutenandarou。",
              meaning:"Kalau toko seperti ini membuat orang ingin datang setiap hari, kalau bukan toko hebat lalu apa lagi."
            },
            {
              jp:"困っている時に黙って助けてくれる人こそ、友人でなくてなんだろう。",
              kana:"こまっているときにだまってたすけてくれるにんこそ、ゆうじんでなくてなんだろう。",
              romaji:"Komatsuteirutokinidamatsutetasuketekureruninkoso、yuujindenakutenandarou。",
              meaning:"Orang yang diam-diam membantu saat kita susah, kalau bukan teman sejati lalu apa."
            },
            {
              jp:"ここまで徹底した案内表示は、おもてなしでなくてなんだろう。",
              kana:"ここまでてっていしたあんないひょうじは、おもてなしでなくてなんだろう。",
              romaji:"Kokomadetetteishitaannaihyoujiha、omotenashidenakutenandarou。",
              meaning:"Petunjuk yang serapi ini, kalau bukan bentuk keramahan lalu apa."
            },
            {
              jp:"あの状況で逃げずに説明したのは、責任感でなくてなんだろう。",
              kana:"あのじょうきょうでにげずにせつめいしたのは、せきにんかんでなくてなんだろう。",
              romaji:"Anojoukyoudenigezunisetsumeishitanoha、sekininkandenakutenandarou。",
              meaning:"Mau berdiri dan menjelaskan dalam situasi itu, kalau bukan tanggung jawab lalu apa."
            },
            {
              jp:"毎年地域の行事を支える姿勢は、愛着でなくてなんだろう。",
              kana:"まいとしちいきのぎょうじをささえるしせいは、あいちゃくでなくてなんだろう。",
              romaji:"Maitoshichiikinogyoujiwosasaerushiseiha、aichakudenakutenandarou。",
              meaning:"Semangat mendukung acara warga setiap tahun, kalau bukan rasa sayang pada daerah lalu apa."
            }
          ]
        }
      ]
    },

  {
      id:"GR-N1-74",
      level:"N1",
      title:"〜ではあるまいし / 〜でもあるまいし",
      summary:"Pola N1 〜ではあるまいし / 〜でもあるまいし dalam konteks alami sehari-hari dan formal.",
      groups:[
        {
          name:"〜ではあるまいし / 〜でもあるまいし",
          description:"Pola N1 〜ではあるまいし / 〜でもあるまいし dalam konteks alami sehari-hari dan formal.",
          sentences:[
            {
              jp:"子どもではあるまいし、会議中にすねるのはやめてほしい。",
              kana:"こどもではあるまいし、かいぎちゅうにすねるのはやめてほしい。",
              romaji:"Kodomodehaarumaishi、kaigichuunisunerunohayametehoshii。",
              meaning:"Bukan anak kecil, jadi jangan merajuk saat rapat."
            },
            {
              jp:"初めて日本に来たわけでもあるまいし、駅でそんなに慌てなくても大丈夫。",
              kana:"はじめてにっぽんにきたわけでもあるまいし、えきでそんなにあわてなくてもだいじょうぶ。",
              romaji:"Hajimetenipponnikitawakedemoarumaishi、ekidesonnaniawatenakutemodaijoubu。",
              meaning:"Bukan baru pertama kali ke Jepang, jadi tidak usah panik begitu di stasiun."
            },
            {
              jp:"学生でもあるまいし、締め切り直前まで何もしないのは困る。",
              kana:"がくせいでもあるまいし、しめきりちょくぜんまでなにもしないのはこまる。",
              romaji:"Gakuseidemoarumaishi、shimekirichokuzenmadenanimoshinainohakomaru。",
              meaning:"Bukan pelajar yang bisa santai begitu, jadi merepotkan kalau tidak melakukan apa-apa sampai tenggat mepet."
            },
            {
              jp:"新人ではあるまいし、その説明で終わらせるのは無理がある。",
              kana:"しんじんではあるまいし、そのせつめいでおわらせるのはむりがある。",
              romaji:"Shinjindehaarumaishi、sonosetsumeideowaraserunohamurigaaru。",
              meaning:"Bukan pegawai baru lagi, jadi kurang masuk akal kalau penjelasannya cuma sebatas itu."
            },
            {
              jp:"観光客でもあるまいし、地図ばかり見て歩いていたら不自然だよ。",
              kana:"かんこうきゃくでもあるまいし、ちずばかりみてあるいていたらふしぜんだよ。",
              romaji:"Kankoukyakudemoarumaishi、chizubakarimitearuiteitarafushizendayo。",
              meaning:"Bukan turis, jadi kalau jalan sambil terus melihat peta terasa aneh."
            }
          ]
        }
      ]
    },

  {
      id:"GR-N1-75",
      level:"N1",
      title:"〜では済まない",
      summary:"Pola N1 〜では済まない dalam konteks alami sehari-hari dan formal.",
      groups:[
        {
          name:"〜では済まない",
          description:"Pola N1 〜では済まない dalam konteks alami sehari-hari dan formal.",
          sentences:[
            {
              jp:"この遅刻は、注意だけでは済まないかもしれない。",
              kana:"このちこくは、ちゅういだけではすまないかもしれない。",
              romaji:"Konochikokuha、chuuidakedehasumanaikamoshirenai。",
              meaning:"Keterlambatan ini mungkin tidak selesai hanya dengan teguran."
            },
            {
              jp:"無断で写真を公開したら、削除では済まない問題になる。",
              kana:"むだんでしゃしんをこうかいしたら、さくじょではすまないもんだいになる。",
              romaji:"Mudandeshashinwokoukaishitara、sakujodehasumanaimondaininaru。",
              meaning:"Kalau mempublikasikan foto tanpa izin, masalahnya bisa lebih besar daripada sekadar menghapus."
            },
            {
              jp:"事故の規模によっては、店の休業では済まない。",
              kana:"じこのきぼによっては、みせのきゅうぎょうではすまない。",
              romaji:"Jikonokiboniyotteha、misenokyuugyoudehasumanai。",
              meaning:"Tergantung skalanya, kecelakaan itu bisa berdampak lebih dari sekadar toko tutup sementara."
            },
            {
              jp:"観光地のごみ問題は、呼びかけだけでは済まない段階に来ている。",
              kana:"かんこうちのごみもんだいは、よびかけだけではすまないだんかいにきている。",
              romaji:"Kankouchinogomimondaiha、yobikakedakedehasumanaidankainikiteiru。",
              meaning:"Masalah sampah di tempat wisata sudah sampai tahap yang tidak bisa diatasi hanya dengan imbauan."
            },
            {
              jp:"今回の情報漏れは、担当部署だけの責任では済まない。",
              kana:"こんかいのじょうほうもれは、たんとうぶしょだけのせきにんではすまない。",
              romaji:"Konkainojouhoumoreha、tantoubushodakenosekinindehasumanai。",
              meaning:"Kebocoran informasi kali ini tidak bisa dianggap tanggung jawab satu divisi saja."
            }
          ]
        }
      ]
    },

  {
      id:"GR-N1-76",
      level:"N1",
      title:"〜手前",
      summary:"Pola N1 〜手前 dalam konteks alami sehari-hari dan formal.",
      groups:[
        {
          name:"〜手前",
          description:"Pola N1 〜手前 dalam konteks alami sehari-hari dan formal.",
          sentences:[
            {
              jp:"約束した手前、今日は顔を出さないわけにはいかない。",
              kana:"やくそくしたてまえ、こんにちはかおをださないわけにはいかない。",
              romaji:"Yakusokushitatemae、konnichihakaowodasanaiwakenihaikanai。",
              meaning:"Karena sudah telanjur berjanji, hari ini saya tidak enak kalau tidak datang."
            },
            {
              jp:"上司に相談した手前、途中で投げ出すわけにもいかない。",
              kana:"じょうしにそうだんしたてまえ、とちゅうでなげだすわけにもいかない。",
              romaji:"Joushinisoudanshitatemae、tochuudenagedasuwakenimoikanai。",
              meaning:"Karena sudah lebih dulu berkonsultasi dengan atasan, saya tidak bisa berhenti di tengah jalan."
            },
            {
              jp:"みんなの前で引き受けた手前、責任を持って最後までやるつもりだ。",
              kana:"みんなのまえでひきうけたてまえ、せきにんをもってさいごまでやるつもりだ。",
              romaji:"Minnanomaedehikiuketatemae、sekininwomotsutesaigomadeyarutsumorida。",
              meaning:"Karena sudah menerimanya di depan semua orang, saya berniat menuntaskannya dengan tanggung jawab."
            },
            {
              jp:"案内役を買って出た手前、駅まで送ることにした。",
              kana:"あんないやくをかってでたてまえ、えきまでおくることにした。",
              romaji:"Annaiyakuwokatsutedetatemae、ekimadeokurukotonishita。",
              meaning:"Karena tadi menawarkan diri jadi pemandu, saya putuskan mengantar sampai stasiun."
            },
            {
              jp:"地域の人に応援してもらった手前、結果を出したい。",
              kana:"ちいきのにんにおうえんしてもらったてまえ、けっかをだしたい。",
              romaji:"Chiikinoninniouenshitemorattatemae、kekkawodashitai。",
              meaning:"Karena sudah didukung warga sekitar, saya ingin menunjukkan hasil."
            }
          ]
        }
      ]
    },

  {
      id:"GR-N1-77",
      level:"N1",
      title:"〜てみせる",
      summary:"Pola N1 〜てみせる dalam konteks alami sehari-hari dan formal.",
      groups:[
        {
          name:"〜てみせる",
          description:"Pola N1 〜てみせる dalam konteks alami sehari-hari dan formal.",
          sentences:[
            {
              jp:"次の発表では、前回より落ち着いて話してみせる。",
              kana:"つぎのはっぴょうでは、ぜんかいよりおちついてはなしてみせる。",
              romaji:"Tsuginohappyoudeha、zenkaiyoriochitsuitehanashitemiseru。",
              meaning:"Di presentasi berikutnya, saya akan tunjukkan bahwa saya bisa bicara lebih tenang dari sebelumnya."
            },
            {
              jp:"今月中に部屋を片づけてみせると自分に言い聞かせた。",
              kana:"こんげつちゅうにへやをかたづけてみせるとじぶんにいいきかせた。",
              romaji:"Kongetsuchuuniheyawokatazuketemiserutojibunniiikikaseta。",
              meaning:"Saya meyakinkan diri bahwa bulan ini saya pasti bisa merapikan kamar."
            },
            {
              jp:"外国人向けの案内も、もっと分かりやすく改善してみせる。",
              kana:"がいこくじんむけのあんないも、もっとわかりやすくかいぜんしてみせる。",
              romaji:"Gaikokujinmukenoannaimo、mottowakariyasukukaizenshitemiseru。",
              meaning:"Saya akan tunjukkan bahwa panduan untuk warga asing juga bisa diperbaiki agar lebih mudah dipahami."
            },
            {
              jp:"彼は反対されても、最後には企画を通してみせた。",
              kana:"かれははんたいされても、さいごにはきかくをとうしてみせた。",
              romaji:"Karehahantaisaretemo、saigonihakikakuwotoushitemiseta。",
              meaning:"Meski ditentang, pada akhirnya dia berhasil meloloskan rencana itu."
            },
            {
              jp:"いつか日本語で自然に雑談してみせると決めている。",
              kana:"いつかにほんごでしぜんにざつだんしてみせるときめている。",
              romaji:"Itsukanihongodeshizennizatsudanshitemiserutokimeteiru。",
              meaning:"Saya sudah memutuskan suatu hari nanti saya akan bisa mengobrol dalam bahasa Jepang dengan natural."
            }
          ]
        }
      ]
    },

  {
      id:"GR-N1-78",
      level:"N1",
      title:"〜(で)もあり〜(で)もある",
      summary:"Pola N1 〜(で)もあり〜(で)もある dalam konteks alami sehari-hari dan formal.",
      groups:[
        {
          name:"〜(で)もあり〜(で)もある",
          description:"Pola N1 〜(で)もあり〜(で)もある dalam konteks alami sehari-hari dan formal.",
          sentences:[
            {
              jp:"この街は学生の街でもあり、観光の拠点でもある。",
              kana:"このまちはがくせいのまちでもあり、かんこうのきょてんでもある。",
              romaji:"Konomachihagakuseinomachidemoari、kankounokyotendemoaru。",
              meaning:"Kota ini adalah kota pelajar sekaligus titik awal wisata."
            },
            {
              jp:"彼は店長でもあり、地域イベントの世話役でもある。",
              kana:"かれはてんちょうでもあり、ちいきいべんとのせわやくでもある。",
              romaji:"Karehatenchoudemoari、chiikiibentonosewayakudemoaru。",
              meaning:"Dia sekaligus manajer toko dan pengurus acara warga."
            },
            {
              jp:"この建物は図書館でもあり、災害時の避難所でもある。",
              kana:"このたてものはとしょかんでもあり、さいがいじのひなんじょでもある。",
              romaji:"Konotatemonohatoshokandemoari、saigaijinohinanjodemoaru。",
              meaning:"Gedung ini berfungsi sebagai perpustakaan sekaligus tempat evakuasi saat bencana."
            },
            {
              jp:"日本語学習は趣味でもあり、今の仕事の土台でもある。",
              kana:"にほんごがくならはしゅみでもあり、いまのしごとのどだいでもある。",
              romaji:"Nihongogakunarahashumidemoari、imanoshigotonododaidemoaru。",
              meaning:"Belajar bahasa Jepang adalah hobi sekaligus dasar pekerjaan saya sekarang."
            },
            {
              jp:"その時間は通勤のピークでもあり、事故が起きやすい時間帯でもある。",
              kana:"そのじかんはつうきんのぴーくでもあり、じこがおきやすいじかんたいでもある。",
              romaji:"Sonojikanhatsuukinnopiikudemoari、jikogaokiyasuijikantaidemoaru。",
              meaning:"Jam itu adalah puncak jam pergi kerja sekaligus waktu yang rawan kecelakaan."
            }
          ]
        }
      ]
    },

  {
      id:"GR-N1-79",
      level:"N1",
      title:"〜ても差し支えない",
      summary:"Pola N1 〜ても差し支えない dalam konteks alami sehari-hari dan formal.",
      groups:[
        {
          name:"〜ても差し支えない",
          description:"Pola N1 〜ても差し支えない dalam konteks alami sehari-hari dan formal.",
          sentences:[
            {
              jp:"必要なら、この資料は社内で共有しても差し支えない。",
              kana:"ひつようなら、このしりょうはしゃないできょうゆうしてもさしつかえない。",
              romaji:"Hitsuyounara、konoshiryouhashanaidekyouyuushitemosashitsukaenai。",
              meaning:"Kalau perlu, dokumen ini tidak masalah dibagikan di dalam perusahaan."
            },
            {
              jp:"少し開始時間を遅らせても差し支えないでしょうか。",
              kana:"すこしかいしじかんをおくらせてもさしつかえないでしょうか。",
              romaji:"Sukoshikaishijikanwookurasetemosashitsukaenaideshouka。",
              meaning:"Apakah tidak masalah kalau waktu mulai sedikit diundur."
            },
            {
              jp:"この内容なら、留学生に見せても差し支えないと思う。",
              kana:"このないようなら、りゅうがくせいにみせてもさしつかえないとおもう。",
              romaji:"Kononaiyounara、ryuugakuseinimisetemosashitsukaenaitoomou。",
              meaning:"Kalau isi seperti ini, menurut saya tidak masalah diperlihatkan kepada mahasiswa asing."
            },
            {
              jp:"体調が悪ければ、今日は早退しても差し支えありません。",
              kana:"たいちょうがわるければ、こんにちはそうたいしてもさしつかえありません。",
              romaji:"Taichougawarukereba、konnichihasoutaishitemosashitsukaearimasen。",
              meaning:"Kalau kondisi tubuh buruk, hari ini pulang lebih awal pun tidak masalah."
            },
            {
              jp:"事情を説明したうえでなら、予定を変更しても差し支えない。",
              kana:"じじょうをせつめいしたうえでなら、よていをへんこうしてもさしつかえない。",
              romaji:"Jijouwosetsumeishitauedenara、yoteiwohenkoushitemosashitsukaenai。",
              meaning:"Kalau alasannya dijelaskan lebih dulu, mengubah jadwal juga tidak masalah."
            }
          ]
        }
      ]
    },

  {
      id:"GR-N1-80",
      level:"N1",
      title:"〜ても知らない",
      summary:"Pola N1 〜ても知らない dalam konteks alami sehari-hari dan formal.",
      groups:[
        {
          name:"〜ても知らない",
          description:"Pola N1 〜ても知らない dalam konteks alami sehari-hari dan formal.",
          sentences:[
            {
              jp:"そんな格好で山に行くなら、寒くても知らないよ。",
              kana:"そんなかっこうでやまにいくなら、さむくてもしらないよ。",
              romaji:"Sonnakakkoudeyamaniikunara、samukutemoshiranaiyo。",
              meaning:"Kalau naik gunung dengan pakaian seperti itu, kedinginan nanti saya tidak tanggung."
            },
            {
              jp:"申込期限を過ぎたら受け付けてもらえなくても知らないよ。",
              kana:"もうしこみきげんをすぎたらうけつけてもらえなくてもしらないよ。",
              romaji:"Moushikomikigenwosugitarauketsuketemoraenakutemoshiranaiyo。",
              meaning:"Kalau lewat tenggat pendaftaran lalu tidak diterima, jangan salahkan saya."
            },
            {
              jp:"確認しないで送信して、間違っていても知らないからね。",
              kana:"かくにんしないでそうしんして、まちがっていてもしらないからね。",
              romaji:"Kakuninshinaidesoushinshite、machigatsuteitemoshiranaikarane。",
              meaning:"Kalau kirim tanpa cek lalu salah, jangan salahkan saya ya."
            },
            {
              jp:"終電ぎりぎりまで飲んで、帰れなくなっても知らないよ。",
              kana:"しゅうでんぎりぎりまでのんで、かえれなくなってもしらないよ。",
              romaji:"Shuudengirigirimadenonde、kaerenakunattemoshiranaiyo。",
              meaning:"Kalau minum sampai mepet kereta terakhir lalu tidak bisa pulang, saya tidak tanggung."
            },
            {
              jp:"そんなに無理して働いて体を壊しても知らないよ。",
              kana:"そんなにむりしてはたらいてからだをこわしてもしらないよ。",
              romaji:"Sonnanimurishitehataraitekaradawokowashitemoshiranaiyo。",
              meaning:"Kalau memaksakan kerja sampai badan rusak, saya tidak tanggung.'''"
            }
          ]
        }
      ]
    },

  {
      id:"GR-N1-81",
      level:"N1",
      title:"〜てもどうにもならない",
      summary:"Pola N1 〜てもどうにもならない dalam konteks alami sehari-hari dan formal.",
      groups:[
        {
          name:"〜てもどうにもならない",
          description:"Pola N1 〜てもどうにもならない dalam konteks alami sehari-hari dan formal.",
          sentences:[
            {
              jp:"終わったことを悔やんでいても、どうにもならない。",
              kana:"おわったことをくやんでいても、どうにもならない。",
              romaji:"Owattakotowokuyandeitemo、dounimonaranai。",
              meaning:"Walau terus disesali, hal yang sudah berlalu tidak akan berubah."
            },
            {
              jp:"店の前で待っていても、今日は臨時休業だからどうにもならない。",
              kana:"みせのまえでまっていても、こんにちはりんじきゅうぎょうだからどうにもならない。",
              romaji:"Misenomaedematsuteitemo、konnichiharinjikyuugyoudakaradounimonaranai。",
              meaning:"Walau menunggu di depan toko, hari ini tutup mendadak jadi tidak akan ada hasilnya."
            },
            {
              jp:"電車が止まっている以上、駅で焦っていてもどうにもならない。",
              kana:"でんしゃがとまっているいじょう、えきであせっていてもどうにもならない。",
              romaji:"Denshagatomatteiruijou、ekideasetsuteitemodounimonaranai。",
              meaning:"Kalau keretanya berhenti beroperasi, panik di stasiun pun tidak akan membantu."
            },
            {
              jp:"一人で抱え込んでいてもどうにもならないから、早めに相談して。",
              kana:"ひとりでかかえこんでいてもどうにもならないから、はやめにそうだんして。",
              romaji:"Hitoridekakaekondeitemodounimonaranaikara、hayamenisoudanshite。",
              meaning:"Kalau dipendam sendiri tidak akan selesai, jadi lebih baik cepat berkonsultasi."
            },
            {
              jp:"その場で怒っていてもどうにもならないので、まず状況を確認した。",
              kana:"そのばでいかっていてもどうにもならないので、まずじょうきょうをかくにんした。",
              romaji:"Sonobadeikatsuteitemodounimonaranainode、mazujoukyouwokakuninshita。",
              meaning:"Marah saat itu juga tidak akan menyelesaikan apa-apa, jadi saya cek situasinya dulu."
            }
          ]
        }
      ]
    },

  {
      id:"GR-N1-82",
      level:"N1",
      title:"〜でも何でもない / 〜くも何ともない",
      summary:"Pola N1 〜でも何でもない / 〜くも何ともない dalam konteks alami sehari-hari dan formal.",
      groups:[
        {
          name:"〜でも何でもない / 〜くも何ともない",
          description:"Pola N1 〜でも何でもない / 〜くも何ともない dalam konteks alami sehari-hari dan formal.",
          sentences:[
            {
              jp:"このくらいの距離なら、私にとっては遠くも何ともない。",
              kana:"このくらいのきょりなら、わたしにとってはとおくもなんともない。",
              romaji:"Konokurainokyorinara、watashinitottehatookumonantomonai。",
              meaning:"Jarak segini bagi saya sama sekali tidak terasa jauh."
            },
            {
              jp:"彼は人前で話すのが苦にならないらしく、緊張でも何でもないと言っていた。",
              kana:"かれはひとまえではなすのがくにならないらしく、きんちょうでもなんでもないといっていた。",
              romaji:"Karehahitomaedehanasunogakuninaranairashiku、kinchoudemonandemonaitoitteita。",
              meaning:"Katanya bicara di depan umum bukan masalah sama sekali baginya."
            },
            {
              jp:"毎日走っている人にとっては、五キロなんて長くも何ともない。",
              kana:"まいにちはしっているにんにとっては、ごきろなんてながくもなんともない。",
              romaji:"Mainichihashitsuteiruninnitotteha、gokironantenagakumonantomonai。",
              meaning:"Bagi orang yang berlari tiap hari, lima kilometer sama sekali tidak terasa jauh."
            },
            {
              jp:"この作業は慣れてしまえば難しくも何ともない。",
              kana:"このさぎょうはなれてしまえばむずかしくもなんともない。",
              romaji:"Konosagyouhanareteshimaebamuzukashikumonantomonai。",
              meaning:"Kalau sudah terbiasa, pekerjaan ini sama sekali tidak sulit."
            },
            {
              jp:"子どもの元気な声くらい、うるさくも何ともないと思う。",
              kana:"こどものげんきなこえくらい、うるさくもなんともないとおもう。",
              romaji:"Kodomonogenkinakoekurai、urusakumonantomonaitoomou。",
              meaning:"Menurut saya, suara riang anak-anak tidak berisik sama sekali."
            }
          ]
        }
      ]
    },

  {
      id:"GR-N1-83",
      level:"N1",
      title:"〜てやまない",
      summary:"Pola N1 〜てやまない dalam konteks alami sehari-hari dan formal.",
      groups:[
        {
          name:"〜てやまない",
          description:"Pola N1 〜てやまない dalam konteks alami sehari-hari dan formal.",
          sentences:[
            {
              jp:"被災地の一日も早い復旧を願ってやまない。",
              kana:"ひさいちのついたちもはやいふっきゅうをねがってやまない。",
              romaji:"Hisaichinotsuitachimohayaifukkyuuwonegatsuteyamanai。",
              meaning:"Saya terus mendoakan agar daerah bencana pulih secepatnya."
            },
            {
              jp:"日本でお世話になった先生には感謝してやまない。",
              kana:"にっぽんでおせわになったせんせいにはかんしゃしてやまない。",
              romaji:"Nippondeosewaninattasenseinihakanshashiteyamanai。",
              meaning:"Saya tidak henti-hentinya bersyukur kepada dosen yang membantu saya di Jepang."
            },
            {
              jp:"地域の文化を残そうと努力する人たちを尊敬してやまない。",
              kana:"ちいきのぶんかをのこそうとどりょくするにんたちをそんけいしてやまない。",
              romaji:"Chiikinobunkawonokosoutodoryokusurunintachiwosonkeishiteyamanai。",
              meaning:"Saya sungguh menghormati orang-orang yang berusaha melestarikan budaya daerah."
            },
            {
              jp:"留学中に支えてくれた友人のことは今でも忘れてやまない。",
              kana:"りゅうがくちゅうにささえてくれたゆうじんのことはいまでもわすれてやまない。",
              romaji:"Ryuugakuchuunisasaetekuretayuujinnokotohaimademowasureteyamanai。",
              meaning:"Sampai sekarang saya terus mengingat teman yang mendukung saya saat studi di luar negeri."
            },
            {
              jp:"事故が二度と起きないことを祈ってやまない。",
              kana:"じこがにどとおきないことをいのってやまない。",
              romaji:"Jikoganidotookinaikotowoinotsuteyamanai。",
              meaning:"Saya terus berharap kecelakaan seperti itu tidak terulang lagi."
            }
          ]
        }
      ]
    },

  {
      id:"GR-N1-84",
      level:"N1",
      title:"〜と相まって",
      summary:"Pola N1 〜と相まって dalam konteks alami sehari-hari dan formal.",
      groups:[
        {
          name:"〜と相まって",
          description:"Pola N1 〜と相まって dalam konteks alami sehari-hari dan formal.",
          sentences:[
            {
              jp:"駅前の再開発は、観光客の増加と相まって街の印象を大きく変えた。",
              kana:"えきまえのさいかいはつは、かんこうきゃくのぞうかとそうまってまちのいんしょうをおおきくかえた。",
              romaji:"Ekimaenosaikaihatsuha、kankoukyakunozoukatosoumattemachinoinshouwoookikukaeta。",
              meaning:"Penataan ulang depan stasiun, ditambah peningkatan wisatawan, sangat mengubah kesan kota."
            },
            {
              jp:"物価の上昇と相まって、家計の負担が重くなっている。",
              kana:"ぶっかのじょうしょうとそうまって、かけいのふたんがおもくなっている。",
              romaji:"Bukkanojoushoutosoumatte、kakeinofutangaomokunatteiru。",
              meaning:"Kenaikan harga, ditambah faktor lain, membuat beban rumah tangga makin berat."
            },
            {
              jp:"季節のイベントと相まって、その商店街は週末ごとににぎわっている。",
              kana:"きせつのいべんととそうまって、そのしょうてんがいはしゅうまつごとににぎわっている。",
              romaji:"Kisetsunoibentotosoumatte、sonoshoutengaihashuumatsugotoninigiwatteiru。",
              meaning:"Ditambah acara musiman, area pertokoan itu ramai setiap akhir pekan."
            },
            {
              jp:"円安と相まって、海外旅行の費用がかなり高く感じられる。",
              kana:"えんやすとそうまって、かいがいりょこうのひようがかなりたかくかんじられる。",
              romaji:"Enyasutosoumatte、kaigairyokounohiyougakanaritakakukanjirareru。",
              meaning:"Melemahnya yen membuat biaya wisata ke luar negeri terasa jauh lebih mahal."
            },
            {
              jp:"静かな音楽と照明の落ち着いた雰囲気が相まって、店内は居心地がよかった。",
              kana:"しずかなおんがくとしょうめいのおちついたふんいきがそうまって、てんないはいごこちがよかった。",
              romaji:"Shizukanaongakutoshoumeinoochitsuitafun'ikigasoumatte、tennaihaigokochigayokatta。",
              meaning:"Musik yang tenang dan pencahayaan yang lembut berpadu membuat toko itu nyaman."
            }
          ]
        }
      ]
    },

  {
      id:"GR-N1-85",
      level:"N1",
      title:"〜とあって",
      summary:"Pola N1 〜とあって dalam konteks alami sehari-hari dan formal.",
      groups:[
        {
          name:"〜とあって",
          description:"Pola N1 〜とあって dalam konteks alami sehari-hari dan formal.",
          sentences:[
            {
              jp:"人気店の新作発売日とあって、開店前から長い列ができていた。",
              kana:"にんきみせのしんさくはつばいびとあって、かいてんまえからながいれつができていた。",
              romaji:"Ninkimisenoshinsakuhatsubaibitoatte、kaitenmaekaranagairetsugadekiteita。",
              meaning:"Karena hari itu adalah hari rilis produk baru dari toko populer, antreannya sudah panjang sebelum buka."
            },
            {
              jp:"春休みの最終日とあって、駅は家族連れで混んでいた。",
              kana:"はるやすみのさいしゅうびとあって、えきはかぞくづれでこんでいた。",
              romaji:"Haruyasuminosaishuubitoatte、ekihakazokuzuredekondeita。",
              meaning:"Karena hari itu akhir liburan musim semi, stasiun penuh keluarga."
            },
            {
              jp:"市役所の手続き最終日とあって、窓口は朝から混雑していた。",
              kana:"しやくしょのてつづきさいしゅうびとあって、まどぐちはあさからこんざつしていた。",
              romaji:"Shiyakushonotetsuzukisaishuubitoatte、madoguchihaasakarakonzatsushiteita。",
              meaning:"Karena hari itu hari terakhir pengurusan di balai kota, loket sudah ramai sejak pagi."
            },
            {
              jp:"初めての日本開催とあって、海外からの参加者も多かった。",
              kana:"はじめてのにっぽんかいさいとあって、かいがいからのさんかしゃもおおかった。",
              romaji:"Hajimetenonipponkaisaitoatte、kaigaikaranosankashamoookatta。",
              meaning:"Karena untuk pertama kalinya diadakan di Jepang, pesertanya banyak yang datang dari luar negeri."
            },
            {
              jp:"話題の映画の公開初日とあって、ロビーまで人であふれていた。",
              kana:"わだいのえいがのこうかいしょにちとあって、ろびーまでにんであふれていた。",
              romaji:"Wadainoeiganokoukaishonichitoatte、robiimadenindeafureteita。",
              meaning:"Karena hari pertama film yang sedang ramai dibicarakan itu tayang, sampai lobi pun penuh orang."
            }
          ]
        }
      ]
    },

  {
      id:"GR-N1-86",
      level:"N1",
      title:"〜とあれば",
      summary:"Pola N1 〜とあれば dalam konteks alami sehari-hari dan formal.",
      groups:[
        {
          name:"〜とあれば",
          description:"Pola N1 〜とあれば dalam konteks alami sehari-hari dan formal.",
          sentences:[
            {
              jp:"地元の祭りを守るためとあれば、みんな進んで手伝ってくれる。",
              kana:"じもとのまつりをまもるためとあれば、みんなすすんでてつだってくれる。",
              romaji:"Jimotonomatsuriwomamorutametoareba、minnasusundetetsudatsutekureru。",
              meaning:"Kalau demi menjaga festival daerah, semua orang akan membantu dengan sukarela."
            },
            {
              jp:"家族のためとあれば、多少の無理は気にならないと言う人も多い。",
              kana:"かぞくのためとあれば、たしょうのむりはきにならないというにんもおおい。",
              romaji:"Kazokunotametoareba、tashounomurihakininaranaitoiuninmoooi。",
              meaning:"Kalau demi keluarga, banyak orang bilang sedikit susah pun tidak masalah."
            },
            {
              jp:"留学生の安全に関わることとあれば、大学もすぐに動く。",
              kana:"りゅうがくせいのあんぜんにかかわることとあれば、だいがくもすぐにうごく。",
              romaji:"Ryuugakuseinoanzennikakawarukototoareba、daigakumosuguniugoku。",
              meaning:"Kalau menyangkut keselamatan mahasiswa asing, universitas pun akan segera bergerak."
            },
            {
              jp:"子どもが喜ぶこととあれば、親は早起きでも苦にならない。",
              kana:"こどもがよろこぶこととあれば、おやははやおきでもくにならない。",
              romaji:"Kodomogayorokobukototoareba、oyahahayaokidemokuninaranai。",
              meaning:"Kalau demi hal yang membuat anak senang, orang tua tidak keberatan bangun pagi."
            },
            {
              jp:"店の信用に関わるとあれば、店長が直接対応するのも当然だ。",
              kana:"みせのしんようにかかわるとあれば、てんちょうがちょくせつたいおうするのもとうぜんだ。",
              romaji:"Misenoshinyounikakawarutoareba、tenchougachokusetsutaiousurunomotouzenda。",
              meaning:"Kalau menyangkut reputasi toko, wajar kalau manajer turun tangan langsung."
            }
          ]
        }
      ]
    },

  {
      id:"GR-N1-87",
      level:"N1",
      title:"〜といい〜といい",
      summary:"Pola N1 〜といい〜といい dalam konteks alami sehari-hari dan formal.",
      groups:[
        {
          name:"〜といい〜といい",
          description:"Pola N1 〜といい〜といい dalam konteks alami sehari-hari dan formal.",
          sentences:[
            {
              jp:"この町は空気といい水といい、本当に住みやすい。",
              kana:"このまちはくうきといいみずといい、ほんとうにすみやすい。",
              romaji:"Konomachihakuukitoiimizutoii、hontounisumiyasui。",
              meaning:"Kota ini, baik udaranya maupun airnya, benar-benar nyaman untuk ditinggali."
            },
            {
              jp:"あの食堂は味といい値段といい、学生に人気なのも分かる。",
              kana:"あのしょくどうはあじといいねだんといい、がくせいににんきなのもわかる。",
              romaji:"Anoshokudouhaajitoiinedantoii、gakuseinininkinanomowakaru。",
              meaning:"Kantin itu, baik rasa maupun harganya, pantas saja populer di kalangan mahasiswa."
            },
            {
              jp:"彼は話し方といい気配りといい、接客に向いている。",
              kana:"かれははなしかたといいきくばりといい、せっきゃくにむいている。",
              romaji:"Karehahanashikatatoiikikubaritoii、sekkyakunimuiteiru。",
              meaning:"Cara bicara dan perhatian detailnya menunjukkan dia cocok untuk pelayanan pelanggan."
            },
            {
              jp:"この資料は内容といい見やすさといい、配布用にぴったりだ。",
              kana:"このしりょうはないようといいみやすさといい、はいふようにぴったりだ。",
              romaji:"Konoshiryouhanaiyoutoiimiyasusatoii、haifuyounipittarida。",
              meaning:"Dokumen ini, baik isi maupun tampilannya, cocok sekali untuk dibagikan."
            },
            {
              jp:"京都は景色といい街の落ち着きといい、何度来ても飽きない。",
              kana:"きょうとはけしきといいまちのおちつきといい、なんどきてもあきない。",
              romaji:"Kyoutohakeshikitoiimachinoochitsukitoii、nandokitemoakinai。",
              meaning:"Kyoto, baik pemandangan maupun suasana kotanya, tidak membosankan meski dikunjungi berkali-kali."
            }
          ]
        }
      ]
    },

  {
      id:"GR-N1-88",
      level:"N1",
      title:"〜という",
      summary:"Pola N1 〜という dalam konteks alami sehari-hari dan formal.",
      groups:[
        {
          name:"〜という",
          description:"Pola N1 〜という dalam konteks alami sehari-hari dan formal.",
          sentences:[
            {
              jp:"今使っている部屋は、もともと倉庫だったという。",
              kana:"いまつかっているへやは、もともとそうこだったという。",
              romaji:"Imatsukatteiruheyaha、motomotosoukodattatoiu。",
              meaning:"Katanya ruangan yang sekarang dipakai itu awalnya gudang."
            },
            {
              jp:"その制度は来年から見直されるという話を聞いた。",
              kana:"そのせいどはらいねんからみなおされるというはなしをきいた。",
              romaji:"Sonoseidoharainenkaraminaosarerutoiuhanashiwokiita。",
              meaning:"Saya dengar ada kabar bahwa sistem itu akan ditinjau ulang mulai tahun depan."
            },
            {
              jp:"駅前に新しい図書館ができるという知らせで、地域が少し盛り上がっている。",
              kana:"えきまえにあたらしいとしょかんができるというしらせで、ちいきがすこしもりあがっている。",
              romaji:"Ekimaeniatarashiitoshokangadekirutoiushirasede、chiikigasukoshimoriagatteiru。",
              meaning:"Kabar bahwa perpustakaan baru akan dibangun di depan stasiun membuat warga agak bersemangat."
            },
            {
              jp:"彼は一度見た道は忘れないという。",
              kana:"かれはいちどみたみちはわすれないという。",
              romaji:"Karehaichidomitamichihawasurenaitoiu。",
              meaning:"Katanya dia tidak pernah lupa jalan yang sekali pernah dilihat."
            },
            {
              jp:"来月、近くの公園で大きなフリーマーケットを開くという。",
              kana:"らいげつ、ちかくのこうえんでおおきなふりーまーけっとをひらくという。",
              romaji:"Raigetsu、chikakunokouendeookinafuriimaakettowohirakutoiu。",
              meaning:"Katanya bulan depan akan ada pasar loak besar di taman dekat sini."
            }
          ]
        }
      ]
    },

  {
      id:"GR-N1-89",
      level:"N1",
      title:"〜というところだ / 〜といったところだ",
      summary:"Pola N1 〜というところだ / 〜といったところだ dalam konteks alami sehari-hari dan formal.",
      groups:[
        {
          name:"〜というところだ / 〜といったところだ",
          description:"Pola N1 〜というところだ / 〜といったところだ dalam konteks alami sehari-hari dan formal.",
          sentences:[
            {
              jp:"準備は八割ほど終わったというところです。",
              kana:"じゅんびははちわりほどおわったというところです。",
              romaji:"Junbihahachiwarihodoowattatoiutokorodesu。",
              meaning:"Persiapannya bisa dibilang baru selesai sekitar delapan puluh persen."
            },
            {
              jp:"今の売上は、目標まであと少しといったところだ。",
              kana:"いまのうりあげは、もくひょうまであとすこしといったところだ。",
              romaji:"Imanouriageha、mokuhyoumadeatosukoshitoittatokoroda。",
              meaning:"Penjualan sekarang bisa dibilang tinggal sedikit lagi menuju target."
            },
            {
              jp:"彼の日本語は、日常会話なら問題ないというところだ。",
              kana:"かのにほんごは、にちじょうかいわならもんだいないというところだ。",
              romaji:"Kanonihongoha、nichijoukaiwanaramondainaitoiutokoroda。",
              meaning:"Bahasa Jepangnya bisa dibilang sudah aman untuk percakapan sehari-hari."
            },
            {
              jp:"会場の混み具合は、立つ人が少し出るといったところだった。",
              kana:"かいじょうのこみぐあいは、たつにんがすこしでるといったところだった。",
              romaji:"Kaijounokomiguaiha、tatsuningasukoshiderutoittatokorodatta。",
              meaning:"Kepadatan tempatnya kira-kira sampai ada sedikit orang yang harus berdiri."
            },
            {
              jp:"完成までは、早くてもあと一週間というところだろう。",
              kana:"かんせいまでは、はやくてもあといっしゅうかんというところだろう。",
              romaji:"Kanseimadeha、hayakutemoatoisshuukantoiutokorodarou。",
              meaning:"Kalau paling cepat, selesainya kira-kira masih seminggu lagi."
            }
          ]
        }
      ]
    },

  {
      id:"GR-N1-90",
      level:"N1",
      title:"〜というもの",
      summary:"Pola N1 〜というもの dalam konteks alami sehari-hari dan formal.",
      groups:[
        {
          name:"〜というもの",
          description:"Pola N1 〜というもの dalam konteks alami sehari-hari dan formal.",
          sentences:[
            {
              jp:"人の話を最後まで聞くのが礼儀というものだ。",
              kana:"にんのはなしをさいごまできくのがれいぎというものだ。",
              romaji:"Ninnohanashiwosaigomadekikunogareigitoiumonoda。",
              meaning:"Mendengarkan sampai orang lain selesai bicara itulah yang namanya sopan santun."
            },
            {
              jp:"困っている人を見たら声をかけるのが地域の支え合いというものだ。",
              kana:"こまっているにんをみたらこえをかけるのがちいきのささえあいというものだ。",
              romaji:"Komatsuteiruninwomitarakoewokakerunogachiikinosasaeaitoiumonoda。",
              meaning:"Kalau melihat orang kesulitan lalu menyapa, itulah yang namanya saling mendukung di lingkungan."
            },
            {
              jp:"結果がよくても感謝を忘れないのが大人というものだと思う。",
              kana:"けっかがよくてもかんしゃをわすれないのがおとなというものだとおもう。",
              romaji:"Kekkagayokutemokanshawowasurenainogaotonatoiumonodatoomou。",
              meaning:"Menurut saya, tetap berterima kasih meski hasilnya bagus itulah sikap dewasa."
            },
            {
              jp:"公共の場では少し周りに配慮するのがマナーというものだ。",
              kana:"こうきょうのばではすこしまわりにはいりょするのがまなーというものだ。",
              romaji:"Koukyounobadehasukoshimawarinihairyosurunogamanaatoiumonoda。",
              meaning:"Di tempat umum, sedikit memperhatikan orang sekitar itulah yang disebut tata krama."
            },
            {
              jp:"使った場所をきれいに戻すのが利用者というものだ。",
              kana:"つかったばしょをきれいにもどすのがりようしゃというものだ。",
              romaji:"Tsukattabashowokireinimodosunogariyoushatoiumonoda。",
              meaning:"Mengembalikan tempat yang dipakai dalam keadaan rapi, itulah sikap seorang pengguna."
            }
          ]
        }
      ]
    },

  {
      id:"GR-N1-91",
      level:"N1",
      title:"〜といえども",
      summary:"Pola N1 〜といえども dalam konteks alami sehari-hari dan formal.",
      groups:[
        {
          name:"〜といえども",
          description:"Pola N1 〜といえども dalam konteks alami sehari-hari dan formal.",
          sentences:[
            {
              jp:"新人といえども、守るべきルールは同じだ。",
              kana:"しんじんといえども、まもるべきるーるはおなじだ。",
              romaji:"Shinjintoiedomo、mamorubekiruuruhaonajida。",
              meaning:"Meski pegawai baru, aturan yang harus dipatuhi tetap sama."
            },
            {
              jp:"休日といえども、救急外来は常に忙しい。",
              kana:"きゅうじつといえども、きゅうきゅうがいらいはつねにいそがしい。",
              romaji:"Kyuujitsutoiedomo、kyuukyuugairaihatsuneniisogashii。",
              meaning:"Meski hari libur, IGD selalu sibuk."
            },
            {
              jp:"小さなミスといえども、積み重なると大きな問題になる。",
              kana:"ちいさなみすといえども、つみかさなるとおおきなもんだいになる。",
              romaji:"Chiisanamisutoiedomo、tsumikasanarutoookinamondaininaru。",
              meaning:"Meski kesalahan kecil, kalau menumpuk bisa jadi masalah besar."
            },
            {
              jp:"親しい仲といえども、言っていいことと悪いことがある。",
              kana:"したしいなかといえども、いっていいこととわるいことがある。",
              romaji:"Shitashiinakatoiedomo、itteiikototowaruikotogaaru。",
              meaning:"Meski hubungan dekat, tetap ada hal yang boleh dan tidak boleh dikatakan."
            },
            {
              jp:"地方都市といえども、観光シーズンは宿が取りにくい。",
              kana:"ちほうとしといえども、かんこうしーずんはやどがとりにくい。",
              romaji:"Chihoutoshitoiedomo、kankoushiizunhayadogatorinikui。",
              meaning:"Meski kota daerah, saat musim wisata penginapan tetap sulit didapat."
            }
          ]
        }
      ]
    },

  {
      id:"GR-N1-92",
      level:"N1",
      title:"〜と言えなくもない",
      summary:"Pola N1 〜と言えなくもない dalam konteks alami sehari-hari dan formal.",
      groups:[
        {
          name:"〜と言えなくもない",
          description:"Pola N1 〜と言えなくもない dalam konteks alami sehari-hari dan formal.",
          sentences:[
            {
              jp:"この案なら、現実的だと言えなくもない。",
              kana:"このあんなら、げんじつてきだといえなくもない。",
              romaji:"Konoannara、genjitsutekidatoienakumonai。",
              meaning:"Rencana ini bisa juga dibilang cukup realistis."
            },
            {
              jp:"彼の説明は少し長いが、丁寧だと言えなくもない。",
              kana:"かのせつめいはすこしながいが、ていねいだといえなくもない。",
              romaji:"Kanosetsumeihasukoshinagaiga、teineidatoienakumonai。",
              meaning:"Penjelasannya memang agak panjang, tetapi bisa juga dibilang teliti."
            },
            {
              jp:"駅から近いと言えなくもないが、雨の日は少し面倒だ。",
              kana:"えきからちかいといえなくもないが、あめのにちはすこしめんどうだ。",
              romaji:"Ekikarachikaitoienakumonaiga、amenonichihasukoshimendouda。",
              meaning:"Bisa juga dibilang dekat dari stasiun, tetapi saat hujan agak merepotkan."
            },
            {
              jp:"その態度は慎重だと言えなくもない。",
              kana:"そのたいどはしんちょうだといえなくもない。",
              romaji:"Sonotaidohashinchoudatoienakumonai。",
              meaning:"Sikap itu bisa juga dibilang hati-hati."
            },
            {
              jp:"今回の結果は成功と言えなくもないが、課題は残った。",
              kana:"こんかいのけっかはせいこうといえなくもないが、かだいはのこった。",
              romaji:"Konkainokekkahaseikoutoienakumonaiga、kadaihanokotsuta。",
              meaning:"Hasil kali ini bisa juga disebut berhasil, tetapi masih ada pekerjaan rumah."
            }
          ]
        }
      ]
    },

  {
      id:"GR-N1-93",
      level:"N1",
      title:"〜といったところだ",
      summary:"Pola N1 〜といったところだ dalam konteks alami sehari-hari dan formal.",
      groups:[
        {
          name:"〜といったところだ",
          description:"Pola N1 〜といったところだ dalam konteks alami sehari-hari dan formal.",
          sentences:[
            {
              jp:"今の日本語力なら、接客は簡単な対応までといったところだ。",
              kana:"いまのにほんごりょくなら、せっきゃくはかんたんなたいおうまでといったところだ。",
              romaji:"Imanonihongoryokunara、sekkyakuhakantannataioumadetoittatokoroda。",
              meaning:"Dengan kemampuan Jepang saya sekarang, untuk pelayanan pelanggan paling baru sampai penanganan sederhana."
            },
            {
              jp:"この辺の家賃相場は、ワンルームで七万円前後といったところだ。",
              kana:"このへんのやちんそうばは、わんるーむでしちまんえんぜんごといったところだ。",
              romaji:"Konohennoyachinsoubaha、wanruumudeshichiman'enzengotoittatokoroda。",
              meaning:"Kisaran sewa daerah sini kira-kira sekitar tujuh puluh ribu yen untuk satu kamar."
            },
            {
              jp:"満開は来週末といったところでしょう。",
              kana:"まんかいはらいしゅうまつといったところでしょう。",
              romaji:"Mankaiharaishuumatsutoittatokorodeshou。",
              meaning:"Puncak mekarnya kira-kira akhir pekan depan."
            },
            {
              jp:"参加者は二百人弱といったところだった。",
              kana:"さんかしゃはにひゃくにんよわといったところだった。",
              romaji:"Sankashahanihyakuninyowatoittatokorodatta。",
              meaning:"Pesertanya kira-kira sedikit di bawah dua ratus orang."
            },
            {
              jp:"完成度はまだ六割といったところだ。",
              kana:"かんせいどはまだろくわといったところだ。",
              romaji:"Kanseidohamadarokuwatoittatokoroda。",
              meaning:"Tingkat penyelesaiannya kira-kira baru enam puluh persen."
            }
          ]
        }
      ]
    },

  {
      id:"GR-N1-94",
      level:"N1",
      title:"〜といったらない / 〜といったらありゃしない",
      summary:"Pola N1 〜といったらない / 〜といったらありゃしない dalam konteks alami sehari-hari dan formal.",
      groups:[
        {
          name:"〜といったらない / 〜といったらありゃしない",
          description:"Pola N1 〜といったらない / 〜といったらありゃしない dalam konteks alami sehari-hari dan formal.",
          sentences:[
            {
              jp:"駅前の混み方といったらなかった。",
              kana:"えきまえのこみほうといったらなかった。",
              romaji:"Ekimaenokomihoutoittaranakatta。",
              meaning:"Kepadatan depan stasiun tadi benar-benar luar biasa."
            },
            {
              jp:"この湿気といったらありゃしない。",
              kana:"このしっけといったらありゃしない。",
              romaji:"Konoshikketoittaraaryashinai。",
              meaning:"Kelembapan hari ini parah sekali."
            },
            {
              jp:"引っ越し当日の忙しさといったらなかった。",
              kana:"ひっこしとうじつのいそがしさといったらなかった。",
              romaji:"Hikkoshitoujitsunoisogashisatoittaranakatta。",
              meaning:"Kesibukan di hari pindahan benar-benar luar biasa."
            },
            {
              jp:"初めて一人で区役所へ行った時の心細さといったらなかった。",
              kana:"はじめてひとりでくやくしょへいったときのこころほそさといったらなかった。",
              romaji:"Hajimetehitoridekuyakushoheittatokinokokorohososatoittaranakatta。",
              meaning:"Rasa tidak tenang saat pertama kali ke balai kota sendirian benar-benar tak terlukiskan."
            },
            {
              jp:"連休最終日の高速の渋滞といったらありゃしない。",
              kana:"れんきゅうさいしゅうびのこうそくのじゅうたいといったらありゃしない。",
              romaji:"Renkyuusaishuubinokousokunojuutaitoittaraaryashinai。",
              meaning:"Macet di jalan tol pada hari terakhir liburan parah sekali."
            }
          ]
        }
      ]
    },

  {
      id:"GR-N1-95",
      level:"N1",
      title:"〜といわず〜といわず",
      summary:"Pola N1 〜といわず〜といわず dalam konteks alami sehari-hari dan formal.",
      groups:[
        {
          name:"〜といわず〜といわず",
          description:"Pola N1 〜といわず〜といわず dalam konteks alami sehari-hari dan formal.",
          sentences:[
            {
              jp:"観光シーズンになると、平日といわず週末といわず、この辺は混む。",
              kana:"かんこうしーずんになると、へいじつといわずしゅうまつといわず、このへんはこむ。",
              romaji:"Kankoushiizunninaruto、heijitsutoiwazushuumatsutoiwazu、konohenhakomu。",
              meaning:"Saat musim wisata, daerah sini ramai baik hari kerja maupun akhir pekan."
            },
            {
              jp:"彼は朝といわず夜といわず、研究室にこもっている。",
              kana:"かれはあさといわずよるといわず、けんきゅうしつにこもっている。",
              romaji:"Karehaasatoiwazuyorutoiwazu、kenkyuushitsunikomotteiru。",
              meaning:"Dia berada di lab terus, baik pagi maupun malam."
            },
            {
              jp:"子どもたちは家の中といわず外といわず走り回っていた。",
              kana:"こどもたちはいえのあたといわずそとといわずはしりまわっていた。",
              romaji:"Kodomotachihaienoatatoiwazusototoiwazuhashirimawatsuteita。",
              meaning:"Anak-anak berlarian ke sana kemari baik di dalam maupun luar rumah."
            },
            {
              jp:"試験前は電車の中といわず食堂といわず、どこでも参考書を開いていた。",
              kana:"しけんまえはでんしゃのあたといわずしょくどうといわず、どこでもさんこうしょをひらいていた。",
              romaji:"Shikenmaehadenshanoatatoiwazushokudoutoiwazu、dokodemosankoushowohiraiteita。",
              meaning:"Menjelang ujian, saya membuka buku di mana saja, baik di kereta maupun kantin."
            },
            {
              jp:"夏になると、駅前といわず公園といわず、あちこちで祭りの音が聞こえる。",
              kana:"なつになると、えきまえといわずこうえんといわず、あちこちでまつりのおとがきこえる。",
              romaji:"Natsuninaruto、ekimaetoiwazukouentoiwazu、achikochidematsurinootogakikoeru。",
              meaning:"Saat musim panas, suara festival terdengar di mana-mana, baik di depan stasiun maupun taman."
            }
          ]
        }
      ]
    },

  {
      id:"GR-N1-96",
      level:"N1",
      title:"〜ときたら",
      summary:"Pola N1 〜ときたら dalam konteks alami sehari-hari dan formal.",
      groups:[
        {
          name:"〜ときたら",
          description:"Pola N1 〜ときたら dalam konteks alami sehari-hari dan formal.",
          sentences:[
            {
              jp:"うちの上司ときたら、忙しい日に限って急な依頼を入れてくる。",
              kana:"うちのじょうしときたら、いそがしいにちにかぎってきゅうないらいをいれてくる。",
              romaji:"Uchinojoushitokitara、isogashiinichinikagitsutekyuunairaiwoiretekuru。",
              meaning:"Kalau soal atasan saya, justru di hari sibuk dia suka memasukkan permintaan mendadak."
            },
            {
              jp:"最近の物価ときたら、コンビニでも気軽に買えなくなってきた。",
              kana:"さいきんのぶっかときたら、こんびにでもきがるにかえなくなってきた。",
              romaji:"Saikinnobukkatokitara、konbinidemokigarunikaenakunattekita。",
              meaning:"Kalau soal harga belakangan ini, sampai di konbini pun tidak bisa belanja seenaknya lagi."
            },
            {
              jp:"このスマホの電池ときたら、半日ももたない。",
              kana:"このすまほのでんちときたら、はんにちももたない。",
              romaji:"Konosumahonodenchitokitara、hannichimomotanai。",
              meaning:"Kalau baterai ponsel ini, setengah hari saja sudah tidak tahan."
            },
            {
              jp:"花粉の季節ときたら、朝から目も鼻もつらい。",
              kana:"かふんのきせつときたら、あさからめもはなもつらい。",
              romaji:"Kafunnokisetsutokitara、asakaramemohanamotsurai。",
              meaning:"Kalau musim serbuk sari, dari pagi mata dan hidung sudah tersiksa."
            },
            {
              jp:"駅前の駐輪場ときたら、朝はいつも満車だ。",
              kana:"えきまえのちゅうりんじょうときたら、あさはいつもまんしゃだ。",
              romaji:"Ekimaenochuurinjoutokitara、asahaitsumomanshada。",
              meaning:"Kalau tempat parkir sepeda depan stasiun, pagi-pagi selalu penuh."
            }
          ]
        }
      ]
    },

  {
      id:"GR-N1-97",
      level:"N1",
      title:"〜ところ / 〜ところを",
      summary:"Pola N1 〜ところ / 〜ところを dalam konteks alami sehari-hari dan formal.",
      groups:[
        {
          name:"〜ところ / 〜ところを",
          description:"Pola N1 〜ところ / 〜ところを dalam konteks alami sehari-hari dan formal.",
          sentences:[
            {
              jp:"お忙しいところ、わざわざ来ていただいてありがとうございます。",
              kana:"おいそがしいところ、わざわざきていただいてありがとうございます。",
              romaji:"Oisogashiitokoro、wazawazakiteitadaitearigatougozaimasu。",
              meaning:"Terima kasih sudah datang jauh-jauh di tengah kesibukan Anda."
            },
            {
              jp:"帰ろうとしていたところを、駅で先生に呼び止められた。",
              kana:"かえろうとしていたところを、えきでせんせいによびやめられた。",
              romaji:"Kaeroutoshiteitatokorowo、ekidesenseiniyobiyamerareta。",
              meaning:"Saat saya hendak pulang, saya dihentikan dosen di stasiun."
            },
            {
              jp:"お休みのところ申し訳ありませんが、確認だけお願いできますか。",
              kana:"おやすみのところもうしわけありませんが、かくにんだけおねがいできますか。",
              romaji:"Oyasuminotokoromoushiwakearimasenga、kakunindakeonegaidekimasuka。",
              meaning:"Maaf mengganggu di saat Anda sedang libur, tetapi boleh minta tolong cek sebentar."
            },
            {
              jp:"ちょうど説明を始めるところですので、席にお着きください。",
              kana:"ちょうどせつめいをはじめるところですので、せきにおつきください。",
              romaji:"Choudosetsumeiwohajimerutokorodesunode、sekiniotsukikudasai。",
              meaning:"Kami tepat akan mulai menjelaskan, jadi silakan duduk."
            },
            {
              jp:"出かけるところを母に頼まれて、ゴミだけ先に出してきた。",
              kana:"でかけるところをははにたのまれて、ごみだけさきにだしてきた。",
              romaji:"Dekakerutokorowohahanitanomarete、gomidakesakinidashitekita。",
              meaning:"Saat hendak keluar rumah, saya diminta ibu membuang sampah dulu."
            }
          ]
        }
      ]
    },

  {
      id:"GR-N1-98",
      level:"N1",
      title:"〜としたことが",
      summary:"Pola N1 〜としたことが dalam konteks alami sehari-hari dan formal.",
      groups:[
        {
          name:"〜としたことが",
          description:"Pola N1 〜としたことが dalam konteks alami sehari-hari dan formal.",
          sentences:[
            {
              jp:"いつも慎重な彼としたことが、書類の添付を忘れるなんて珍しい。",
              kana:"いつもしんちょうなかれとしたことが、しょるいのてんぷをわすれるなんてめずらしい。",
              romaji:"Itsumoshinchounakaretoshitakotoga、shoruinotenpuwowasurerunantemezurashii。",
              meaning:"Untuk orang yang sehati-hati dia, lupa lampiran dokumen itu langka sekali."
            },
            {
              jp:"店長ともあろう人としたことが、レジ締めを間違えるとは。",
              kana:"てんちょうともあろうにんとしたことが、れじしめをまちがえるとは。",
              romaji:"Tenchoutomoarounintoshitakotoga、rejishimewomachigaerutoha。",
              meaning:"Untuk sosok seperti manajer toko, salah hitung kasir sungguh tidak terduga."
            },
            {
              jp:"日本に長く住んでいる私としたことが、区役所の手続きを勘違いしていた。",
              kana:"にっぽんにながくすんでいるわたしとしたことが、くやくしょのてつづきをかんちがいしていた。",
              romaji:"Nipponninagakusundeiruwatashitoshitakotoga、kuyakushonotetsuzukiwokanchigaishiteita。",
              meaning:"Saya yang sudah lama tinggal di Jepang pun ternyata salah paham soal prosedur balai kota."
            },
            {
              jp:"料理上手な母としたことが、今日は塩を入れすぎた。",
              kana:"りょうりじょうずなははとしたことが、こんにちはしおをいれすぎた。",
              romaji:"Ryourijouzunahahatoshitakotoga、konnichihashiowoiresugita。",
              meaning:"Ibu yang biasanya jago masak pun hari ini kebanyakan memberi garam."
            },
            {
              jp:"時間に厳しい彼女としたことが、電車を乗り過ごしたらしい。",
              kana:"じかんにいかめしいかのじょとしたことが、でんしゃをのりすごしたらしい。",
              romaji:"Jikanniikameshiikanojotoshitakotoga、denshawonorisugoshitarashii。",
              meaning:"Dia yang biasanya sangat tepat waktu pun rupanya kelewatan kereta."
            }
          ]
        }
      ]
    },

  {
      id:"GR-N1-99",
      level:"N1",
      title:"〜として〜ない",
      summary:"Pola N1 〜として〜ない dalam konteks alami sehari-hari dan formal.",
      groups:[
        {
          name:"〜として〜ない",
          description:"Pola N1 〜として〜ない dalam konteks alami sehari-hari dan formal.",
          sentences:[
            {
              jp:"学生として、あいさつもしないのはどうかと思う。",
              kana:"がくせいとして、あいさつもしないのはどうかとおもう。",
              romaji:"Gakuseitoshite、aisatsumoshinainohadoukatoomou。",
              meaning:"Sebagai pelajar, menurut saya kurang baik kalau sampai tidak memberi salam."
            },
            {
              jp:"社会人として知っておきたい表現だが、まだ使いこなせていない。",
              kana:"しゃかいじんとしてしっておきたいひょうげんだが、まだつかいこなせていない。",
              romaji:"Shakaijintoshiteshitteokitaihyougendaga、madatsukaikonaseteinai。",
              meaning:"Ini ungkapan yang sebaiknya diketahui sebagai pekerja, tetapi saya belum sepenuhnya menguasainya."
            },
            {
              jp:"親として黙って見てはいられない場面もある。",
              kana:"おやとしてだまってみてはいられないばめんもある。",
              romaji:"Oyatoshitedamatsutemitehairarenaibamenmoaru。",
              meaning:"Ada situasi yang sebagai orang tua kita tidak bisa hanya diam melihat."
            },
            {
              jp:"利用者として、この案内の分かりにくさは見過ごせない。",
              kana:"りようしゃとして、このあんないのわかりにくさはみすごせない。",
              romaji:"Riyoushatoshite、konoannainowakarinikusahamisugosenai。",
              meaning:"Sebagai pengguna, sulit untuk membiarkan panduan yang membingungkan seperti ini."
            },
            {
              jp:"日本語教師として、誤解される説明は避けたい。",
              kana:"にほんごきょうしとして、ごかいされるせつめいはさけたい。",
              romaji:"Nihongokyoushitoshite、gokaisarerusetsumeihasaketai。",
              meaning:"Sebagai pengajar bahasa Jepang, saya ingin menghindari penjelasan yang menimbulkan salah paham."
            }
          ]
        }
      ]
    },

  {
      id:"GR-N1-100",
      level:"N1",
      title:"〜としてあるまじき",
      summary:"Pola N1 〜としてあるまじき dalam konteks alami sehari-hari dan formal.",
      groups:[
        {
          name:"〜としてあるまじき",
          description:"Pola N1 〜としてあるまじき dalam konteks alami sehari-hari dan formal.",
          sentences:[
            {
              jp:"公務員としてあるまじき対応だと、窓口で問題になっていた。",
              kana:"こうむいんとしてあるまじきたいおうだと、まどぐちでもんだいになっていた。",
              romaji:"Koumuintoshitearumajikitaioudato、madoguchidemondaininatteita。",
              meaning:"Itu dianggap sebagai respons yang tidak pantas bagi pegawai negeri."
            },
            {
              jp:"医療に関わる者としてあるまじき発言だ。",
              kana:"いりょうにかかわるものとしてあるまじきはつげんだ。",
              romaji:"Iryounikakawarumonotoshitearumajikihatsugenda。",
              meaning:"Itu ucapan yang tidak pantas bagi orang yang bekerja di bidang medis."
            },
            {
              jp:"案内役としてあるまじきミスで、集合場所を間違えて伝えてしまった。",
              kana:"あんないやくとしてあるまじきみすで、しゅうごうばしょをまちがえてつたえてしまった。",
              romaji:"Annaiyakutoshitearumajikimisude、shuugoubashowomachigaetetsutaeteshimatta。",
              meaning:"Itu kesalahan yang tidak pantas bagi seorang pemandu, karena saya menyampaikan titik kumpul yang salah."
            },
            {
              jp:"教える立場の者としてあるまじき態度だと感じた。",
              kana:"おしえるたちばのものとしてあるまじきたいどだとかんじた。",
              romaji:"Oshierutachibanomonotoshitearumajikitaidodatokanjita。",
              meaning:"Saya merasa itu sikap yang tidak pantas bagi orang yang bertugas mengajar."
            },
            {
              jp:"責任者としてあるまじき判断ミスだった。",
              kana:"せきにんしゃとしてあるまじきはんだんみすだった。",
              romaji:"Sekininshatoshitearumajikihandanmisudatta。",
              meaning:"Itu kekeliruan keputusan yang tidak pantas bagi seorang penanggung jawab."
            }
          ]
        }
      ]
    },

  {
      id:"GR-N1-101",
      level:"N1",
      title:"〜とて",
      summary:"Pola N1 〜とて dalam konteks alami sehari-hari dan formal.",
      groups:[
        {
          name:"〜とて",
          description:"Pola N1 〜とて dalam konteks alami sehari-hari dan formal.",
          sentences:[
            {
              jp:"留学生とて、不安がまったくないわけではない。",
              kana:"りゅうがくせいとて、ふあんがまったくないわけではない。",
              romaji:"Ryuugakuseitote、fuangamattakunaiwakedehanai。",
              meaning:"Mahasiswa asing pun tentu bukan berarti sama sekali tidak punya rasa cemas."
            },
            {
              jp:"子どもとて、言われたくないことはある。",
              kana:"こどもとて、いわれたくないことはある。",
              romaji:"Kodomotote、iwaretakunaikotohaaru。",
              meaning:"Anak-anak pun ada hal yang tidak ingin dikatakan kepada mereka."
            },
            {
              jp:"ベテランとて、体調が悪ければ判断を誤ることもある。",
              kana:"べてらんとて、たいちょうがわるければはんだんをあやまることもある。",
              romaji:"Beterantote、taichougawarukerebahandanwoayamarukotomoaru。",
              meaning:"Pekerja senior pun bisa salah menilai kalau sedang tidak enak badan."
            },
            {
              jp:"休日とて、駅前の交番には人が来る。",
              kana:"きゅうじつとて、えきまえのこうばんにはにんがくる。",
              romaji:"Kyuujitsutote、ekimaenokoubannihaningakuru。",
              meaning:"Meski hari libur, orang tetap datang ke pos polisi depan stasiun."
            },
            {
              jp:"社長とて、一人で会社を回せるわけではない。",
              kana:"しゃちょうとて、ひとりでかいしゃをまわせるわけではない。",
              romaji:"Shachoutote、hitoridekaishawomawaseruwakedehanai。",
              meaning:"Direktur sekalipun tidak mungkin menjalankan perusahaan sendirian."
            }
          ]
        }
      ]
    },

  {
      id:"GR-N1-102",
      level:"N1",
      title:"〜とは",
      summary:"Pola N1 〜とは dalam konteks alami sehari-hari dan formal.",
      groups:[
        {
          name:"〜とは",
          description:"Pola N1 〜とは dalam konteks alami sehari-hari dan formal.",
          sentences:[
            {
              jp:"この制度とは、留学生向けの家賃補助のことです。",
              kana:"このせいどとは、りゅうがくせいむけのやちんほじょのことです。",
              romaji:"Konoseidotoha、ryuugakuseimukenoyachinhojonokotodesu。",
              meaning:"Yang dimaksud sistem ini adalah subsidi sewa untuk mahasiswa asing."
            },
            {
              jp:"防災訓練とは、災害時の動きを確認するための練習だ。",
              kana:"ぼうさいくんれんとは、さいがいじのうごきをかくにんするためのれんしゅうだ。",
              romaji:"Bousaikunrentoha、saigaijinougokiwokakuninsurutamenorenshuuda。",
              meaning:"Latihan kebencanaan adalah latihan untuk memastikan tindakan saat bencana."
            },
            {
              jp:"キャッシュレス決済とは何かを祖母に説明した。",
              kana:"きゃっしゅれすけっさいとはなにかをそぼにせつめいした。",
              romaji:"Kyasshuresukessaitohananikawosobonisetsumeishita。",
              meaning:"Saya menjelaskan kepada nenek apa itu pembayaran non tunai."
            },
            {
              jp:"この街の魅力とは何かを改めて考えさせられた。",
              kana:"このまちのみりょくとはなにかをあらためてかんがえさせられた。",
              romaji:"Konomachinomiryokutohananikawoaratametekangaesaserareta。",
              meaning:"Saya dibuat berpikir lagi tentang apa sebenarnya daya tarik kota ini."
            },
            {
              jp:"働きやすさとは、給料だけで決まるものではない。",
              kana:"はたらきやすさとは、きゅうりょうだけできまるものではない。",
              romaji:"Hatarakiyasusatoha、kyuuryoudakedekimarumonodehanai。",
              meaning:"Kenyamanan bekerja bukanlah sesuatu yang ditentukan hanya oleh gaji."
            }
          ]
        }
      ]
    },

  {
      id:"GR-N1-103",
      level:"N1",
      title:"〜とはいえ",
      summary:"Pola N1 〜とはいえ dalam konteks alami sehari-hari dan formal.",
      groups:[
        {
          name:"〜とはいえ",
          description:"Pola N1 〜とはいえ dalam konteks alami sehari-hari dan formal.",
          sentences:[
            {
              jp:"春とはいえ、朝晩はまだ冷える。",
              kana:"はるとはいえ、あさばんはまだひえる。",
              romaji:"Harutohaie、asabanhamadahieru。",
              meaning:"Meskipun sudah musim semi, pagi dan malam masih dingin."
            },
            {
              jp:"便利とはいえ、使いすぎには気をつけたい。",
              kana:"べんりとはいえ、つかいすぎにはきをつけたい。",
              romaji:"Benritohaie、tsukaisuginihakiwotsuketai。",
              meaning:"Walaupun praktis, saya tetap ingin berhati-hati agar tidak berlebihan memakainya."
            },
            {
              jp:"駅近とはいえ、家賃は思ったほど高くなかった。",
              kana:"えきちかとはいえ、やちんはおもったほどたかくなかった。",
              romaji:"Ekichikatohaie、yachinhaomottahodotakakunakatta。",
              meaning:"Walaupun dekat stasiun, sewanya tidak semahal yang saya kira."
            },
            {
              jp:"学生とはいえ、アルバイト先では社会人として見られる。",
              kana:"がくせいとはいえ、あるばいとさきではしゃかいじんとしてみられる。",
              romaji:"Gakuseitohaie、arubaitosakidehashakaijintoshitemirareru。",
              meaning:"Walaupun mahasiswa, di tempat kerja paruh waktu tetap dipandang sebagai orang dewasa yang bertanggung jawab."
            },
            {
              jp:"人気店とはいえ、平日の昼なら意外と入りやすい。",
              kana:"にんきみせとはいえ、へいじつのひるならいがいといりやすい。",
              romaji:"Ninkimisetohaie、heijitsunohirunaraigaitoiriyasui。",
              meaning:"Walaupun toko populer, kalau siang hari kerja ternyata cukup mudah masuk."
            }
          ]
        }
      ]
    },

  {
      id:"GR-N1-104",
      level:"N1",
      title:"〜とは打って変わって",
      summary:"Pola N1 〜とは打って変わって dalam konteks alami sehari-hari dan formal.",
      groups:[
        {
          name:"〜とは打って変わって",
          description:"Pola N1 〜とは打って変わって dalam konteks alami sehari-hari dan formal.",
          sentences:[
            {
              jp:"昨日の静けさとは打って変わって、今日は駅前がかなりにぎやかだ。",
              kana:"きのうのしずけさとはうってかわって、こんにちはえきまえがかなりにぎやかだ。",
              romaji:"Kinounoshizukesatohautsutekawatte、konnichihaekimaegakanarinigiyakada。",
              meaning:"Berbeda sekali dengan suasana tenang kemarin, hari ini depan stasiun sangat ramai."
            },
            {
              jp:"午前中の雨とは打って変わって、午後はよく晴れた。",
              kana:"ごぜんちゅうのあめとはうってかわって、ごごはよくはれた。",
              romaji:"Gozenchuunoametohautsutekawatte、gogohayokuhareta。",
              meaning:"Berbeda sekali dengan hujan pagi tadi, siang sampai sore malah cerah."
            },
            {
              jp:"普段の穏やかな表情とは打って変わって、会議ではかなり厳しかった。",
              kana:"ふだんのおだやかなひょうじょうとはうってかわって、かいぎではかなりいかめしかった。",
              romaji:"Fudannoodayakanahyoujoutohautsutekawatte、kaigidehakanariikameshikatta。",
              meaning:"Berbeda dengan ekspresinya yang biasanya tenang, di rapat dia sangat tegas."
            },
            {
              jp:"平日の店内とは打って変わって、土日は家族連れであふれる。",
              kana:"へいじつのてんないとはうってかわって、どにちはかぞくづれであふれる。",
              romaji:"Heijitsunotennaitohautsutekawatte、donichihakazokuzuredeafureru。",
              meaning:"Berbeda dengan suasana hari kerja, akhir pekan toko itu penuh keluarga."
            },
            {
              jp:"前回の結果とは打って変わって、今回はかなり順調だった。",
              kana:"ぜんかいのけっかとはうってかわって、こんかいはかなりじゅんちょうだった。",
              romaji:"Zenkainokekkatohautsutekawatte、konkaihakanarijunchoudatta。",
              meaning:"Berbeda dengan hasil sebelumnya, kali ini semuanya berjalan cukup lancar."
            }
          ]
        }
      ]
    },

  {
      id:"GR-N1-105",
      level:"N1",
      title:"〜とばかりに",
      summary:"Pola N1 〜とばかりに dalam konteks alami sehari-hari dan formal.",
      groups:[
        {
          name:"〜とばかりに",
          description:"Pola N1 〜とばかりに dalam konteks alami sehari-hari dan formal.",
          sentences:[
            {
              jp:"もう終わりだとばかりに、皆が席を立ち始めた。",
              kana:"もうおわりだとばかりに、みながせきをたちはじめた。",
              romaji:"Mouowaridatobakarini、minagasekiwotachihajimeta。",
              meaning:"Seolah-olah acara sudah selesai, semua orang mulai berdiri dari kursinya."
            },
            {
              jp:"待っていましたとばかりに、子どもたちは外へ飛び出した。",
              kana:"まっていましたとばかりに、こどもたちはそとへとびだした。",
              romaji:"Matsuteimashitatobakarini、kodomotachihasotohetobidashita。",
              meaning:"Seakan memang sudah menunggu saat itu, anak-anak langsung berlari keluar."
            },
            {
              jp:"任せてほしいとばかりに、先輩が前に出て説明してくれた。",
              kana:"まかせてほしいとばかりに、せんぱいがまえにでてせつめいしてくれた。",
              romaji:"Makasetehoshiitobakarini、senpaigamaenidetesetsumeishitekureta。",
              meaning:"Seolah berkata serahkan saja padaku, senior maju dan menjelaskan."
            },
            {
              jp:"チャンスだとばかりに、彼はその場で応募した。",
              kana:"ちゃんすだとばかりに、かれはそのばでおうぼした。",
              romaji:"Chansudatobakarini、karehasonobadeouboshita。",
              meaning:"Seolah ini kesempatan emas, dia langsung mendaftar saat itu juga."
            },
            {
              jp:"写真を撮ってくれとばかりに、観光客がスマホを差し出してきた。",
              kana:"しゃしんをとってくれとばかりに、かんこうきゃくがすまほをさしだしてきた。",
              romaji:"Shashinwototsutekuretobakarini、kankoukyakugasumahowosashidashitekita。",
              meaning:"Seolah meminta difoto, wisatawan itu langsung menyodorkan ponselnya."
            }
          ]
        }
      ]
    },

  {
      id:"GR-N1-106",
      level:"N1",
      title:"〜とは比べものにならない",
      summary:"Pola N1 〜とは比べものにならない dalam konteks alami sehari-hari dan formal.",
      groups:[
        {
          name:"〜とは比べものにならない",
          description:"Pola N1 〜とは比べものにならない dalam konteks alami sehari-hari dan formal.",
          sentences:[
            {
              jp:"今年の暑さは去年とは比べものにならない。",
              kana:"こんねんのあつさはきょねんとはくらべものにならない。",
              romaji:"Konnennoatsusahakyonentohakurabemononinaranai。",
              meaning:"Panas tahun ini tidak ada apa-apanya dibanding tahun lalu."
            },
            {
              jp:"今の接客は、入ったばかりの頃とは比べものにならないほど安定している。",
              kana:"いまのせっきゃくは、いっったばかりのごろとはくらべものにならないほどあんていしている。",
              romaji:"Imanosekkyakuha、itsutsutabakarinogorotohakurabemononinaranaihodoanteishiteiru。",
              meaning:"Pelayanan saya sekarang jauh lebih stabil dibanding saat baru masuk kerja."
            },
            {
              jp:"駅前の便利さは、昔とは比べものにならない。",
              kana:"えきまえのべんりさは、むかしとはくらべものにならない。",
              romaji:"Ekimaenobenrisaha、mukashitohakurabemononinaranai。",
              meaning:"Kemudahan di depan stasiun sekarang jauh berbeda dibanding dulu."
            },
            {
              jp:"手書きより、このアプリのほうが速さでは比べものにならない。",
              kana:"てがきより、このあぷりのほうがはやさではくらべものにならない。",
              romaji:"Tegakiyori、konoapurinohougahayasadehakurabemononinaranai。",
              meaning:"Kalau soal kecepatan, aplikasi ini jauh tak tertandingi dibanding menulis tangan."
            },
            {
              jp:"本場で食べる寿司は、冷凍のものとは比べものにならない。",
              kana:"ほんばでたべるすしは、れいとうのものとはくらべものにならない。",
              romaji:"Honbadetaberusushiha、reitounomonotohakurabemononinaranai。",
              meaning:"Sushi yang dimakan di tempat asalnya jauh tidak bisa dibandingkan dengan yang beku."
            }
          ]
        }
      ]
    },

  {
      id:"GR-N1-107",
      level:"N1",
      title:"〜とまではいかないが / とまではいかないにしても",
      summary:"Pola N1 〜とまではいかないが / とまではいかないにしても dalam konteks alami sehari-hari dan formal.",
      groups:[
        {
          name:"〜とまではいかないが / とまではいかないにしても",
          description:"Pola N1 〜とまではいかないが / とまではいかないにしても dalam konteks alami sehari-hari dan formal.",
          sentences:[
            {
              jp:"完璧とまではいかないが、十分提出できる内容だ。",
              kana:"かんぺきとまではいかないが、じゅうぶんていしゅつできるないようだ。",
              romaji:"Kanpekitomadehaikanaiga、juubunteishutsudekirunaiyouda。",
              meaning:"Belum bisa dibilang sempurna, tetapi isinya sudah cukup untuk dikumpulkan."
            },
            {
              jp:"母語話者とまではいかないにしても、彼の日本語はかなり自然だ。",
              kana:"ぼごわしゃとまではいかないにしても、かのにほんごはかなりしぜんだ。",
              romaji:"Bogowashatomadehaikanainishitemo、kanonihongohakanarishizenda。",
              meaning:"Belum sampai setara penutur asli, tetapi bahasa Jepangnya cukup alami."
            },
            {
              jp:"毎日とまではいかないが、週に三回は走るようにしている。",
              kana:"まいにちとまではいかないが、しゅうにさんかいははしるようにしている。",
              romaji:"Mainichitomadehaikanaiga、shuunisankaihahashiruyounishiteiru。",
              meaning:"Memang tidak sampai setiap hari, tetapi saya berusaha lari tiga kali seminggu."
            },
            {
              jp:"高級店とまではいかないが、接客はかなり丁寧だった。",
              kana:"こうきゅうみせとまではいかないが、せっきゃくはかなりていねいだった。",
              romaji:"Koukyuumisetomadehaikanaiga、sekkyakuhakanariteineidatta。",
              meaning:"Belum bisa disebut restoran mewah, tetapi pelayanannya sangat sopan."
            },
            {
              jp:"大問題とまではいかないにしても、早めに直したほうがいい。",
              kana:"だいもんだいとまではいかないにしても、はやめになおしたほうがいい。",
              romaji:"Daimondaitomadehaikanainishitemo、hayameninaoshitahougaii。",
              meaning:"Mungkin belum sampai masalah besar, tetapi sebaiknya cepat diperbaiki."
            }
          ]
        }
      ]
    },

  {
      id:"GR-N1-108",
      level:"N1",
      title:"〜と見るや",
      summary:"Pola N1 〜と見るや dalam konteks alami sehari-hari dan formal.",
      groups:[
        {
          name:"〜と見るや",
          description:"Pola N1 〜と見るや dalam konteks alami sehari-hari dan formal.",
          sentences:[
            {
              jp:"先生は誤字を見つけると見るや、すぐ赤で直した。",
              kana:"せんせいはごじをみつけるとみるや、すぐあかでなおした。",
              romaji:"Senseihagojiwomitsukerutomiruya、suguakadenaoshita。",
              meaning:"Begitu melihat salah ketik, dosen langsung memperbaikinya dengan tinta merah."
            },
            {
              jp:"母は洗濯物が乾いたと見るや、すぐ取り込んだ。",
              kana:"はははせんたくものがかわいたとみるや、すぐとりこんだ。",
              romaji:"Hahahasentakumonogakawaitatomiruya、sugutorikonda。",
              meaning:"Begitu melihat cucian sudah kering, ibu langsung mengangkatnya."
            },
            {
              jp:"店員は外国人客だと見るや、やさしい日本語で話し始めた。",
              kana:"てんいんはがいこくじんきゃくだとみるや、やさしいにほんごではなしはじめた。",
              romaji:"Ten'inhagaikokujinkyakudatomiruya、yasashiinihongodehanashihajimeta。",
              meaning:"Begitu melihat pelanggannya orang asing, pegawai itu langsung berbicara dengan bahasa Jepang yang mudah."
            },
            {
              jp:"警備員は転びそうな人を見るや、すぐ駆け寄った。",
              kana:"けいびいんはころびそうなにんをみるや、すぐかけよった。",
              romaji:"Keibiinhakorobisounaninwomiruya、sugukakeyotsuta。",
              meaning:"Begitu melihat ada orang yang hampir jatuh, petugas keamanan langsung mendekat."
            },
            {
              jp:"課長は異変があると見るや、会議を中断した。",
              kana:"かちょうはいへんがあるとみるや、かいぎをちゅうだんした。",
              romaji:"Kachouhaihengaarutomiruya、kaigiwochuudanshita。",
              meaning:"Begitu melihat ada hal yang tidak beres, kepala bagian langsung menghentikan rapat."
            }
          ]
        }
      ]
    },

  {
      id:"GR-N1-109",
      level:"N1",
      title:"〜とも〜とも",
      summary:"Pola N1 〜とも〜とも dalam konteks alami sehari-hari dan formal.",
      groups:[
        {
          name:"〜とも〜とも",
          description:"Pola N1 〜とも〜とも dalam konteks alami sehari-hari dan formal.",
          sentences:[
            {
              jp:"彼の返事が本気とも冗談とも取れて、みんな困っていた。",
              kana:"かのへんじがほんきともじょうだんともとれて、みんなこまっていた。",
              romaji:"Kanohenjigahonkitomojoudantomotorete、minnakomatsuteita。",
              meaning:"Jawabannya terdengar bisa dianggap serius maupun bercanda, jadi semua bingung."
            },
            {
              jp:"あの表情は怒っているとも悲しんでいるとも見えた。",
              kana:"あのひょうじょうはいかっているともかなしんでいるともみえた。",
              romaji:"Anohyoujouhaikatsuteirutomokanashindeirutomomieta。",
              meaning:"Ekspresinya terlihat bisa seperti marah dan bisa juga seperti sedih."
            },
            {
              jp:"賛成とも反対とも言えない空気のまま、会議が終わった。",
              kana:"さんせいともはんたいともいえないくうきのまま、かいぎがおわった。",
              romaji:"Sanseitomohantaitomoienaikuukinomama、kaigigaowatta。",
              meaning:"Rapat berakhir dalam suasana yang sulit dibilang setuju ataupun menolak."
            },
            {
              jp:"駅前の再開発が便利とも不便ともまだ判断できない。",
              kana:"えきまえのさいかいはつがべんりともふべんともまだはんだんできない。",
              romaji:"Ekimaenosaikaihatsugabenritomofubentomomadahandandekinai。",
              meaning:"Penataan ulang depan stasiun itu masih belum bisa dinilai akan memudahkan atau malah merepotkan."
            },
            {
              jp:"その説明では、十分とも不十分とも言い切れない。",
              kana:"そのせつめいでは、じゅうぶんともふじゅうぶんともいいきれない。",
              romaji:"Sonosetsumeideha、juubuntomofujuubuntomoiikirenai。",
              meaning:"Dengan penjelasan itu, sulit dipastikan apakah sudah cukup atau belum."
            }
          ]
        }
      ]
    },

  {
      id:"GR-N1-110",
      level:"N1",
      title:"〜ともあろうものが",
      summary:"Pola N1 〜ともあろうものが dalam konteks alami sehari-hari dan formal.",
      groups:[
        {
          name:"〜ともあろうものが",
          description:"Pola N1 〜ともあろうものが dalam konteks alami sehari-hari dan formal.",
          sentences:[
            {
              jp:"店長ともあろうものが、開店時間を間違えるなんて。",
              kana:"てんちょうともあろうものが、かいてんじかんをまちがえるなんて。",
              romaji:"Tenchoutomoaroumonoga、kaitenjikanwomachigaerunante。",
              meaning:"Seorang manajer toko kok bisa salah soal jam buka."
            },
            {
              jp:"教師ともあろうものが、そんな言い方をするべきではない。",
              kana:"きょうしともあろうものが、そんないいかたをするべきではない。",
              romaji:"Kyoushitomoaroumonoga、sonnaiikatawosurubekidehanai。",
              meaning:"Seorang guru tidak seharusnya berkata seperti itu."
            },
            {
              jp:"運転に慣れた人ともあろうものが、シートベルトを忘れるとは。",
              kana:"うんてんになれたにんともあろうものが、しーとべるとをわすれるとは。",
              romaji:"Untenninaretanintomoaroumonoga、shiitoberutowowasurerutoha。",
              meaning:"Orang yang sudah terbiasa menyetir kok bisa lupa sabuk pengaman."
            },
            {
              jp:"社会人ともあろうものが、連絡なしで遅刻するのはまずい。",
              kana:"しゃかいじんともあろうものが、れんらくなしでちこくするのはまずい。",
              romaji:"Shakaijintomoaroumonoga、renrakunashidechikokusurunohamazui。",
              meaning:"Sebagai orang dewasa yang bekerja, terlambat tanpa memberi kabar itu tidak baik."
            },
            {
              jp:"代表者ともあろうものが、資料を読んでいないのは困る。",
              kana:"だいひょうしゃともあろうものが、しりょうをよんでいないのはこまる。",
              romaji:"Daihyoushatomoaroumonoga、shiryouwoyondeinainohakomaru。",
              meaning:"Seorang perwakilan kok tidak membaca dokumen, itu merepotkan."
            }
          ]
        }
      ]
    },

  {
      id:"GR-N1-111",
      level:"N1",
      title:"〜ともなく",
      summary:"Pola N1 〜ともなく dalam konteks alami sehari-hari dan formal.",
      groups:[
        {
          name:"〜ともなく",
          description:"Pola N1 〜ともなく dalam konteks alami sehari-hari dan formal.",
          sentences:[
            {
              jp:"気づくともなく窓の外を見ていた。",
              kana:"きづくともなくまどのそとをみていた。",
              romaji:"Kizukutomonakumadonosotowomiteita。",
              meaning:"Tanpa sadar saya memandangi ke luar jendela."
            },
            {
              jp:"待つともなく駅前で時間をつぶしていたら、友達に会った。",
              kana:"まつともなくえきまえでじかんをつぶしていたら、ともだちにあった。",
              romaji:"Matsutomonakuekimaedejikanwotsubushiteitara、tomodachiniatsuta。",
              meaning:"Saat menghabiskan waktu di depan stasiun tanpa tujuan jelas, saya bertemu teman."
            },
            {
              jp:"聞くともなく隣の会話が耳に入ってきた。",
              kana:"きくともなくとなりのかいわがみみにいっってきた。",
              romaji:"Kikutomonakutonarinokaiwagamiminiitsutsutekita。",
              meaning:"Tanpa sengaja saya mendengar percakapan di sebelah."
            },
            {
              jp:"考えるともなく将来のことを思っていた。",
              kana:"かんがえるともなくしょうらいのことをおもっていた。",
              romaji:"Kangaerutomonakushourainokotowoomotteita。",
              meaning:"Tanpa sengaja saya sedang memikirkan masa depan."
            },
            {
              jp:"見るともなく掲示板を見ていたら、募集の案内を見つけた。",
              kana:"みるともなくけいじばんをみていたら、ぼしゅうのあんないをみつけた。",
              romaji:"Mirutomonakukeijibanwomiteitara、boshuunoannaiwomitsuketa。",
              meaning:"Saat melihat papan pengumuman tanpa tujuan khusus, saya menemukan pengumuman lowongan."
            }
          ]
        }
      ]
    },

  {
      id:"GR-N1-112",
      level:"N1",
      title:"〜ともなれば / ともなると",
      summary:"Pola N1 〜ともなれば / ともなると dalam konteks alami sehari-hari dan formal.",
      groups:[
        {
          name:"〜ともなれば / ともなると",
          description:"Pola N1 〜ともなれば / ともなると dalam konteks alami sehari-hari dan formal.",
          sentences:[
            {
              jp:"四月ともなれば、新生活で駅も混み始める。",
              kana:"しがつともなれば、しんせいかつでえきもこみはじめる。",
              romaji:"Shigatsutomonareba、shinseikatsudeekimokomihajimeru。",
              meaning:"Begitu masuk bulan April, stasiun mulai ramai karena kehidupan baru dimulai."
            },
            {
              jp:"年末ともなると、スーパーもかなり混雑する。",
              kana:"ねんまつともなると、すーぱーもかなりこんざつする。",
              romaji:"Nenmatsutomonaruto、suupaamokanarikonzatsusuru。",
              meaning:"Begitu mendekati akhir tahun, supermarket juga sangat ramai."
            },
            {
              jp:"責任者ともなれば、発言一つにも気をつかう。",
              kana:"せきにんしゃともなれば、はつげんひとつにもきをつかう。",
              romaji:"Sekininshatomonareba、hatsugenhitotsunimokiwotsukau。",
              meaning:"Kalau sudah menjadi penanggung jawab, ucapan sekecil apa pun harus diperhatikan."
            },
            {
              jp:"N1対策ともなると、語彙もかなり細かい。",
              kana:"N1たいさくともなると、ごいもかなりこまかい。",
              romaji:"N1taisakutomonaruto、goimokanarikomakai。",
              meaning:"Kalau sudah masuk persiapan N1, kosakatanya juga sangat detail."
            },
            {
              jp:"夏休みともなれば、この海辺の町は観光客でいっぱいだ。",
              kana:"なつやすみともなれば、このうみべのまちはかんこうきゃくでいっぱいだ。",
              romaji:"Natsuyasumitomonareba、konoumibenomachihakankoukyakudeippaida。",
              meaning:"Begitu musim libur panas, kota pantai ini penuh wisatawan."
            }
          ]
        }
      ]
    },

  {
      id:"GR-N1-113",
      level:"N1",
      title:"〜ないでもない / 〜ないものでもない",
      summary:"Pola N1 〜ないでもない / 〜ないものでもない dalam konteks alami sehari-hari dan formal.",
      groups:[
        {
          name:"〜ないでもない / 〜ないものでもない",
          description:"Pola N1 〜ないでもない / 〜ないものでもない dalam konteks alami sehari-hari dan formal.",
          sentences:[
            {
              jp:"少し高いが、場所を考えれば納得できないでもない。",
              kana:"すこしたかいが、ばしょをかんがえればなっとくできないでもない。",
              romaji:"Sukoshitakaiga、bashowokangaerebanattokudekinaidemonai。",
              meaning:"Memang agak mahal, tetapi kalau melihat lokasinya masih bisa dimaklumi."
            },
            {
              jp:"この案も工夫次第では使えないものでもない。",
              kana:"このあんもくふうしだいではつかえないものでもない。",
              romaji:"Konoanmokufuushidaidehatsukaenaimonodemonai。",
              meaning:"Rencana ini juga bukan berarti tidak bisa dipakai jika diolah dengan baik."
            },
            {
              jp:"彼の言いたいことも分からないでもない。",
              kana:"かのいいたいこともわからないでもない。",
              romaji:"Kanoiitaikotomowakaranaidemonai。",
              meaning:"Bukan berarti saya sama sekali tidak paham maksud yang ingin dia sampaikan."
            },
            {
              jp:"急ぐ気持ちは分からないでもないが、まず落ち着こう。",
              kana:"いそぐきもちはわからないでもないが、まずおちつこう。",
              romaji:"Isogukimochihawakaranaidemonaiga、mazuochitsukou。",
              meaning:"Perasaan ingin buru-buru itu bukannya tidak bisa dipahami, tetapi tenang dulu."
            },
            {
              jp:"中古でも状態がよければ、買えないものでもない。",
              kana:"ちゅうこでもじょうたいがよければ、かえないものでもない。",
              romaji:"Chuukodemojoutaigayokereba、kaenaimonodemonai。",
              meaning:"Meski barang bekas, kalau kondisinya bagus bukannya tidak layak dibeli."
            }
          ]
        }
      ]
    },

  {
      id:"GR-N1-114",
      level:"N1",
      title:"〜ないとも限らない",
      summary:"Pola N1 〜ないとも限らない dalam konteks alami sehari-hari dan formal.",
      groups:[
        {
          name:"〜ないとも限らない",
          description:"Pola N1 〜ないとも限らない dalam konteks alami sehari-hari dan formal.",
          sentences:[
            {
              jp:"今夜は雪にならないとも限らないので、早めに帰ったほうがいい。",
              kana:"こんやはゆきにならないともかぎらないので、はやめにかえったほうがいい。",
              romaji:"Konyahayukininaranaitomokagiranainode、hayamenikaetsutahougaii。",
              meaning:"Malam ini bukan tidak mungkin turun salju, jadi sebaiknya pulang lebih cepat."
            },
            {
              jp:"この先、方針が変わらないとも限らない。",
              kana:"このさき、ほうしんがかわらないともかぎらない。",
              romaji:"Konosaki、houshingakawaranaitomokagiranai。",
              meaning:"Ke depannya bukan tidak mungkin kebijakannya berubah."
            },
            {
              jp:"あの店も、時間帯によっては空いていないとも限らない。",
              kana:"あのみせも、じかんたいによってはあいていないともかぎらない。",
              romaji:"Anomisemo、jikantainiyottehaaiteinaitomokagiranai。",
              meaning:"Toko itu pun belum tentu tidak ramai, tergantung jamnya."
            },
            {
              jp:"忙しい時期だから、返信が明日にならないとも限らない。",
              kana:"いそがしいじきだから、へんしんがあしたにならないともかぎらない。",
              romaji:"Isogashiijikidakara、henshingaashitaninaranaitomokagiranai。",
              meaning:"Karena sedang musim sibuk, bukan tidak mungkin balasannya baru besok."
            },
            {
              jp:"油断していると、同じミスを繰り返さないとも限らない。",
              kana:"ゆだんしていると、おなじみすをくりかえさないともかぎらない。",
              romaji:"Yudanshiteiruto、onajimisuwokurikaesanaitomokagiranai。",
              meaning:"Kalau lengah, bukan tidak mungkin kesalahan yang sama terulang."
            }
          ]
        }
      ]
    },

  {
      id:"GR-N1-115",
      level:"N1",
      title:"〜ないまでも",
      summary:"Pola N1 〜ないまでも dalam konteks alami sehari-hari dan formal.",
      groups:[
        {
          name:"〜ないまでも",
          description:"Pola N1 〜ないまでも dalam konteks alami sehari-hari dan formal.",
          sentences:[
            {
              jp:"毎日とは言えないまでも、週末には運動するようにしている。",
              kana:"まいにちとはいえないまでも、しゅうまつにはうんどうするようにしている。",
              romaji:"Mainichitohaienaimademo、shuumatsunihaundousuruyounishiteiru。",
              meaning:"Walau tidak bisa dibilang setiap hari, saya berusaha olahraga setidaknya saat akhir pekan."
            },
            {
              jp:"完璧でないまでも、十分実用的な日本語だ。",
              kana:"かんぺきでないまでも、じゅうぶんじつようてきなにほんごだ。",
              romaji:"Kanpekidenaimademo、juubunjitsuyoutekinanihongoda。",
              meaning:"Walau belum sempurna, bahasa Jepang itu cukup praktis digunakan."
            },
            {
              jp:"参加できないまでも、資料の確認だけはお願いしたい。",
              kana:"さんかできないまでも、しりょうのかくにんだけはおねがいしたい。",
              romaji:"Sankadekinaimademo、shiryounokakunindakehaonegaishitai。",
              meaning:"Walau tidak bisa ikut hadir, saya ingin setidaknya minta tolong cek dokumennya."
            },
            {
              jp:"現地に行けないまでも、オンラインで様子は見られる。",
              kana:"げんちにいけないまでも、おんらいんでようすはみられる。",
              romaji:"Genchiniikenaimademo、onraindeyousuhamirareru。",
              meaning:"Walau tidak bisa datang ke lokasi, setidaknya situasinya bisa dilihat lewat online."
            },
            {
              jp:"全部は無理でないまでも、基本だけでも覚えておきたい。",
              kana:"ぜんぶはむりでないまでも、きほんだけでもおぼえておきたい。",
              romaji:"Zenbuhamuridenaimademo、kihondakedemooboeteokitai。",
              meaning:"Kalau semua tidak bisa dipelajari, saya ingin setidaknya mengingat yang dasar-dasar."
            }
          ]
        }
      ]
    },

  {
      id:"GR-N1-116",
      level:"N1",
      title:"〜ながらに / ながらの",
      summary:"Pola N1 〜ながらに / ながらの dalam konteks alami sehari-hari dan formal.",
      groups:[
        {
          name:"〜ながらに / ながらの",
          description:"Pola N1 〜ながらに / ながらの dalam konteks alami sehari-hari dan formal.",
          sentences:[
            {
              jp:"彼は昔ながらの商店街が好きで、休みの日によく歩いている。",
              kana:"かれはむかしながらのしょうてんがいがすきで、やすみのにちによくあるいている。",
              romaji:"Karehamukashinagaranoshoutengaigasukide、yasuminonichiniyokuaruiteiru。",
              meaning:"Dia suka pertokoan tradisional yang tetap bergaya lama, jadi sering jalan-jalan di sana saat libur."
            },
            {
              jp:"その街には、下町ながらの温かさが残っている。",
              kana:"そのまちには、したまちながらのあたたかさがのこっている。",
              romaji:"Sonomachiniha、shitamachinagaranoatatakasaganokotsuteiru。",
              meaning:"Di kota itu masih tersisa kehangatan khas kawasan lama."
            },
            {
              jp:"この旅館では、木造ながらの落ち着いた雰囲気が味わえる。",
              kana:"このりょかんでは、もくぞうながらのおちついたふんいきがあじわえる。",
              romaji:"Konoryokandeha、mokuzounagaranoochitsuitafun'ikigaajiwaeru。",
              meaning:"Di ryokan ini kita bisa menikmati suasana tenang khas bangunan kayu tradisional."
            },
            {
              jp:"彼女は生まれながらにして音感がいい。",
              kana:"かのじょはうまれながらにしておんかんがいい。",
              romaji:"Kanojohaumarenagaranishiteonkangaii。",
              meaning:"Sejak lahir dia memang memiliki kepekaan nada yang bagus."
            },
            {
              jp:"昔ながらのやり方ながらに、今でも十分通用している。",
              kana:"むかしながらのやりほうながらに、いまでもじゅうぶんつうようしている。",
              romaji:"Mukashinagaranoyarihounagarani、imademojuubuntsuuyoushiteiru。",
              meaning:"Meski dengan cara tradisional, sampai sekarang masih cukup berlaku."
            }
          ]
        }
      ]
    },

  {
      id:"GR-N1-117",
      level:"N1",
      title:"〜なくしては",
      summary:"Pola N1 〜なくしては dalam konteks alami sehari-hari dan formal.",
      groups:[
        {
          name:"〜なくしては",
          description:"Pola N1 〜なくしては dalam konteks alami sehari-hari dan formal.",
          sentences:[
            {
              jp:"地域の協力なくしては、この防災訓練は成り立たない。",
              kana:"ちいきのきょうりょくなくしては、このぼうさいくんれんはなりたたない。",
              romaji:"Chiikinokyouryokunakushiteha、konobousaikunrenhanaritatanai。",
              meaning:"Tanpa kerja sama warga, latihan kebencanaan ini tidak akan berjalan."
            },
            {
              jp:"努力なくしては、N1合格は難しい。",
              kana:"どりょくなくしては、N1ごうかくはむずかしい。",
              romaji:"Doryokunakushiteha、N1goukakuhamuzukashii。",
              meaning:"Tanpa usaha, lulus N1 itu sulit."
            },
            {
              jp:"スマホなくしては、一日の予定管理ができない人も多い。",
              kana:"すまほなくしては、ついたちのよていかんりができないにんもおおい。",
              romaji:"Sumahonakushiteha、tsuitachinoyoteikanrigadekinaininmoooi。",
              meaning:"Banyak orang yang tanpa ponsel tidak bisa mengatur jadwal harian."
            },
            {
              jp:"信頼関係なくしては、長く働き続けるのは難しい。",
              kana:"しんらいかんけいなくしては、ながくはたらきつづけるのはむずかしい。",
              romaji:"Shinraikankeinakushiteha、nagakuhatarakitsuzukerunohamuzukashii。",
              meaning:"Tanpa hubungan saling percaya, sulit untuk terus bekerja lama."
            },
            {
              jp:"基本の理解なくしては、応用問題は解けない。",
              kana:"きほんのりかいなくしては、おうようもんだいはとけない。",
              romaji:"Kihonnorikainakushiteha、ouyoumondaihatokenai。",
              meaning:"Tanpa pemahaman dasar, soal penerapan tidak bisa dikerjakan."
            }
          ]
        }
      ]
    },

  {
      id:"GR-N1-118",
      level:"N1",
      title:"〜ならいざしらず",
      summary:"Pola N1 〜ならいざしらず dalam konteks alami sehari-hari dan formal.",
      groups:[
        {
          name:"〜ならいざしらず",
          description:"Pola N1 〜ならいざしらず dalam konteks alami sehari-hari dan formal.",
          sentences:[
            {
              jp:"子どもならいざしらず、大人がその態度では困る。",
              kana:"こどもならいざしらず、おとながそのたいどではこまる。",
              romaji:"Kodomonaraizashirazu、otonagasonotaidodehakomaru。",
              meaning:"Kalau anak-anak mungkin masih bisa dimaklumi, tetapi kalau orang dewasa dengan sikap seperti itu jadi masalah."
            },
            {
              jp:"数分ならいざしらず、一時間も待たせるのは長すぎる。",
              kana:"すうふんならいざしらず、いちじかんもまたせるのはながすぎる。",
              romaji:"Suufunnaraizashirazu、ichijikanmomataserunohanagasugiru。",
              meaning:"Kalau cuma beberapa menit mungkin masih wajar, tetapi kalau satu jam terlalu lama."
            },
            {
              jp:"旅行中ならいざしらず、普段から外食ばかりはきつい。",
              kana:"りょこうちゅうならいざしらず、ふだんからがいしょくばかりはきつい。",
              romaji:"Ryokouchuunaraizashirazu、fudankaragaishokubakarihakitsui。",
              meaning:"Kalau sedang bepergian mungkin lain cerita, tetapi kalau setiap hari makan di luar terasa berat."
            },
            {
              jp:"一回ならいざしらず、何度も同じことを聞かれると困る。",
              kana:"いっかいならいざしらず、なんどもおなじことをきかれるとこまる。",
              romaji:"Ikkainaraizashirazu、nandomoonajikotowokikarerutokomaru。",
              meaning:"Kalau sekali mungkin tidak apa-apa, tetapi kalau berulang kali ditanya hal yang sama jadi repot."
            },
            {
              jp:"休日ならいざしらず、平日の昼にこの混み方は珍しい。",
              kana:"きゅうじつならいざしらず、へいじつのひるにこのこみかたはめずらしい。",
              romaji:"Kyuujitsunaraizashirazu、heijitsunohirunikonokomikatahamezurashii。",
              meaning:"Kalau hari libur mungkin biasa, tetapi siang hari kerja seramai ini cukup langka."
            }
          ]
        }
      ]
    },

  {
      id:"GR-N1-119",
      level:"N1",
      title:"〜ならでは",
      summary:"Pola N1 〜ならでは dalam konteks alami sehari-hari dan formal.",
      groups:[
        {
          name:"〜ならでは",
          description:"Pola N1 〜ならでは dalam konteks alami sehari-hari dan formal.",
          sentences:[
            {
              jp:"この細かい気配りは、老舗旅館ならではだ。",
              kana:"このこまかいきくばりは、しにせりょかんならではだ。",
              romaji:"Konokomakaikikubariha、shiniseryokannaradehada。",
              meaning:"Perhatian sedetail ini memang khas ryokan lama."
            },
            {
              jp:"春の京都ならではの景色を見に来た。",
              kana:"はるのきょうとならではのけしきをみにきた。",
              romaji:"Harunokyoutonaradehanokeshikiwominikita。",
              meaning:"Saya datang untuk melihat pemandangan yang khas Kyoto saat musim semi."
            },
            {
              jp:"この店のだしの香りは専門店ならではだ。",
              kana:"このみせのだしのかおりはせんもんてんならではだ。",
              romaji:"Konomisenodashinokaorihasenmontennaradehada。",
              meaning:"Aroma kuah di toko ini memang khas toko spesialis."
            },
            {
              jp:"地域密着の商店街ならではの温かさを感じた。",
              kana:"ちいきみっちゃくのしょうてんがいならではのあたたかさをかんじた。",
              romaji:"Chiikimitchakunoshoutengainaradehanoatatakasawokanjita。",
              meaning:"Saya merasakan kehangatan yang khas pertokoan yang dekat dengan warga sekitar."
            },
            {
              jp:"長年住んでいる人ならではの視点で町を案内してくれた。",
              kana:"ながねんすんでいるにんならではのしてんでまちをあんないしてくれた。",
              romaji:"Naganensundeiruninnaradehanoshitendemachiwoannaishitekureta。",
              meaning:"Dia memandu kota dengan sudut pandang yang hanya dimiliki orang yang sudah lama tinggal di sana."
            }
          ]
        }
      ]
    },

  {
      id:"GR-N1-120",
      level:"N1",
      title:"〜ならではだ / 〜ならではの",
      summary:"Pola N1 〜ならではだ / 〜ならではの dalam konteks alami sehari-hari dan formal.",
      groups:[
        {
          name:"〜ならではだ / 〜ならではの",
          description:"Pola N1 〜ならではだ / 〜ならではの dalam konteks alami sehari-hari dan formal.",
          sentences:[
            {
              jp:"手書きのメッセージには、紙ならではの良さがある。",
              kana:"てがきのめっせーじには、かみならではのよさがある。",
              romaji:"Tegakinomesseejiniha、kaminaradehanoyosagaaru。",
              meaning:"Pesan tulisan tangan punya kelebihan yang memang khas media kertas."
            },
            {
              jp:"この企画は学生ならではの発想が生かされている。",
              kana:"このきかくはがくせいならではのはっそうがいかされている。",
              romaji:"Konokikakuhagakuseinaradehanohassougaikasareteiru。",
              meaning:"Ide khas mahasiswa dimanfaatkan dengan baik dalam proyek ini."
            },
            {
              jp:"夜の屋台街は、福岡ならではの楽しみだ。",
              kana:"よるのやたいまちは、ふくおかならではのたのしみだ。",
              romaji:"Yorunoyataimachiha、fukuokanaradehanotanoshimida。",
              meaning:"Kawasan yatai di malam hari adalah kesenangan yang khas Fukuoka."
            },
            {
              jp:"この静けさは早朝の神社ならではだ。",
              kana:"このしずけさはそうちょうのじんじゃならではだ。",
              romaji:"Konoshizukesahasouchounojinjanaradehada。",
              meaning:"Ketenangan seperti ini memang hanya terasa di kuil saat pagi sekali."
            },
            {
              jp:"小さな店ならではの柔軟な対応に助けられた。",
              kana:"ちいさなみせならではのじゅうなんなたいおうにたすけられた。",
              romaji:"Chiisanamisenaradehanojuunannataiounitasukerareta。",
              meaning:"Saya terbantu oleh respons yang fleksibel, khas toko kecil."
            }
          ]
        }
      ]
    },

  {
      id:"GR-N1-121",
      level:"N1",
      title:"〜なり",
      summary:"Pola N1 〜なり dalam konteks alami sehari-hari dan formal.",
      groups:[
        {
          name:"〜なり",
          description:"Pola N1 〜なり dalam konteks alami sehari-hari dan formal.",
          sentences:[
            {
              jp:"席に着くなり、彼はノートを開いた。",
              kana:"せきにつくなり、かれはのーとをひらいた。",
              romaji:"Sekinitsukunari、karehanootowohiraita。",
              meaning:"Begitu duduk, dia langsung membuka catatan."
            },
            {
              jp:"家に帰るなり、制服のまま寝てしまった。",
              kana:"いえにかえるなり、せいふくのままねてしまった。",
              romaji:"Ienikaerunari、seifukunomamaneteshimatta。",
              meaning:"Begitu sampai rumah, dia langsung tertidur masih memakai seragam."
            },
            {
              jp:"ベルが鳴るなり、学生たちは教室を出ていった。",
              kana:"べるがなるなり、がくせいたちはきょうしつをでていった。",
              romaji:"Beruganarunari、gakuseitachihakyoushitsuwodeteitta。",
              meaning:"Begitu bel berbunyi, para siswa langsung keluar kelas."
            },
            {
              jp:"駅に着くなり雨が強くなった。",
              kana:"えきにつくなりあめがつよくなった。",
              romaji:"Ekinitsukunariamegatsuyokunatta。",
              meaning:"Begitu sampai di stasiun, hujannya langsung makin deras."
            },
            {
              jp:"社長は会議室に入るなり、結論から話し始めた。",
              kana:"しゃちょうはかいぎしつにいるなり、けつろんからはなしはじめた。",
              romaji:"Shachouhakaigishitsuniirunari、ketsuronkarahanashihajimeta。",
              meaning:"Begitu masuk ruang rapat, direktur langsung mulai dari kesimpulannya."
            }
          ]
        }
      ]
    },

  {
      id:"GR-N1-122",
      level:"N1",
      title:"〜なりとも",
      summary:"Pola N1 〜なりとも dalam konteks alami sehari-hari dan formal.",
      groups:[
        {
          name:"〜なりとも",
          description:"Pola N1 〜なりとも dalam konteks alami sehari-hari dan formal.",
          sentences:[
            {
              jp:"一言なりとも、お礼を伝えたほうがいい。",
              kana:"ひとことなりとも、おれいをつたえたほうがいい。",
              romaji:"Hitokotonaritomo、oreiwotsutaetahougaii。",
              meaning:"Setidaknya satu kata pun sebaiknya digunakan untuk menyampaikan terima kasih."
            },
            {
              jp:"何かあれば電話なりともしてください。",
              kana:"なにかあればでんわなりともしてください。",
              romaji:"Nanikaarebadenwanaritomoshitekudasai。",
              meaning:"Kalau ada apa-apa, telepon saja setidaknya."
            },
            {
              jp:"せめて理由なりとも聞かせてほしい。",
              kana:"せめてりゆうなりともきかせてほしい。",
              romaji:"Semeteriyuunaritomokikasetehoshii。",
              meaning:"Setidaknya saya ingin diberi tahu alasannya."
            },
            {
              jp:"資料が無理なら、メモなりとも残しておいてください。",
              kana:"しりょうがむりなら、めもなりとものこしておいてください。",
              romaji:"Shiryougamurinara、memonaritomonokoshiteoitekudasai。",
              meaning:"Kalau dokumen tidak sempat, tolong tinggalkan setidaknya memo."
            },
            {
              jp:"短時間なりとも、毎日復習することが大事だ。",
              kana:"たんじかんなりとも、まいにちふくしゅうすることがだいじだ。",
              romaji:"Tanjikannaritomo、mainichifukushuusurukotogadaijida。",
              meaning:"Meskipun sebentar, yang penting adalah tetap mengulang pelajaran setiap hari."
            }
          ]
        }
      ]
    },

  {
      id:"GR-N1-123",
      level:"N1",
      title:"〜なりに / なりの",
      summary:"Pola N1 〜なりに / なりの dalam konteks alami sehari-hari dan formal.",
      groups:[
        {
          name:"〜なりに / なりの",
          description:"Pola N1 〜なりに / なりの dalam konteks alami sehari-hari dan formal.",
          sentences:[
            {
              jp:"私なりに分かりやすく説明したつもりだ。",
              kana:"わたしなりにわかりやすくせつめいしたつもりだ。",
              romaji:"Watashinariniwakariyasukusetsumeishitatsumorida。",
              meaning:"Saya berusaha menjelaskan dengan cara saya sendiri agar mudah dipahami."
            },
            {
              jp:"子どもには子どもなりの悩みがある。",
              kana:"こどもにはこどもなりのなやみがある。",
              romaji:"Kodomonihakodomonarinonayamigaaru。",
              meaning:"Anak-anak pun punya kekhawatiran mereka sendiri."
            },
            {
              jp:"新人なりに一生懸命やっているのだから、少し見守ろう。",
              kana:"しんじんなりにいっしょうけんめいやっているのだから、すこしみまもろう。",
              romaji:"Shinjinnariniisshoukenmeiyatteirunodakara、sukoshimimamorou。",
              meaning:"Sebagai pegawai baru dia sudah berusaha keras dengan caranya sendiri, jadi mari kita awasi dengan sedikit sabar."
            },
            {
              jp:"この町にもこの町なりの魅力がある。",
              kana:"このまちにもこのまちなりのみりょくがある。",
              romaji:"Konomachinimokonomachinarinomiryokugaaru。",
              meaning:"Kota ini juga punya daya tariknya sendiri."
            },
            {
              jp:"留学生には留学生なりの苦労がある。",
              kana:"りゅうがくせいにはりゅうがくせいなりのくろうがある。",
              romaji:"Ryuugakuseiniharyuugakuseinarinokurougaaru。",
              meaning:"Mahasiswa asing punya tantangan mereka sendiri."
            }
          ]
        }
      ]
    },

  {
      id:"GR-N1-124",
      level:"N1",
      title:"なんという / なんと / なんて",
      summary:"Pola N1 なんという / なんと / なんて dalam konteks alami sehari-hari dan formal.",
      groups:[
        {
          name:"なんという / なんと / なんて",
          description:"Pola N1 なんという / なんと / なんて dalam konteks alami sehari-hari dan formal.",
          sentences:[
            {
              jp:"なんという偶然だろう、駅で中学の友達に会った。",
              kana:"なんというぐうぜんだろう、えきでちゅうがくのともだちにあった。",
              romaji:"Nantoiuguuzendarou、ekidechuugakunotomodachiniatsuta。",
              meaning:"Kebetulan sekali, saya bertemu teman SMP di stasiun."
            },
            {
              jp:"なんて静かな朝なんだろう。",
              kana:"なんてしずかなあさなんだろう。",
              romaji:"Nanteshizukanaasanandarou。",
              meaning:"Betapa tenangnya pagi ini."
            },
            {
              jp:"なんと親切な人だろうと、母が感心していた。",
              kana:"なんとしんせつなにんだろうと、ははがかんしんしていた。",
              romaji:"Nantoshinsetsunanindarouto、hahagakanshinshiteita。",
              meaning:"Ibu sampai berkata, alangkah baiknya orang itu."
            },
            {
              jp:"なんて分かりやすい案内なんだと感動した。",
              kana:"なんてわかりやすいあんないなんだとかんどうした。",
              romaji:"Nantewakariyasuiannainandatokandoushita。",
              meaning:"Saya terkesan karena petunjuknya sangat mudah dipahami."
            },
            {
              jp:"なんという暑さだ、外に出るだけで疲れる。",
              kana:"なんというあつさだ、そとにでるだけでつかれる。",
              romaji:"Nantoiuatsusada、sotoniderudakedetsukareru。",
              meaning:"Panas sekali, baru keluar saja sudah lelah."
            }
          ]
        }
      ]
    },

  {
      id:"GR-N1-125",
      level:"N1",
      title:"〜に〜ない",
      summary:"Pola N1 〜に〜ない dalam konteks alami sehari-hari dan formal.",
      groups:[
        {
          name:"〜に〜ない",
          description:"Pola N1 〜に〜ない dalam konteks alami sehari-hari dan formal.",
          sentences:[
            {
              jp:"この機会に参加しない手はない。",
              kana:"このきかいにさんかしないてはない。",
              romaji:"Konokikainisankashinaitehanai。",
              meaning:"Pada kesempatan seperti ini, sayang sekali kalau tidak ikut."
            },
            {
              jp:"駅前に住んでいて、この祭りを見に行かない理由はない。",
              kana:"えきまえにすんでいて、このまつりをみにいかないりゆうはない。",
              romaji:"Ekimaenisundeite、konomatsuriwominiikanairiyuuhanai。",
              meaning:"Kalau tinggal di dekat stasiun, tidak ada alasan untuk tidak melihat festival ini."
            },
            {
              jp:"この条件なら、申し込まないわけにはいかない。",
              kana:"このじょうけんなら、もうしこまないわけにはいかない。",
              romaji:"Konojoukennara、moushikomanaiwakenihaikanai。",
              meaning:"Dengan syarat seperti ini, rasanya tidak mungkin tidak mendaftar."
            },
            {
              jp:"評判を聞けば、一度食べてみないではいられない。",
              kana:"ひょうばんをきけば、いちどたべてみないではいられない。",
              romaji:"Hyoubanwokikeba、ichidotabeteminaidehairarenai。",
              meaning:"Setelah mendengar reputasinya, rasanya tidak bisa tidak mencoba sekali."
            },
            {
              jp:"ここまで準備した以上、最後までやらないでは済まない。",
              kana:"ここまでじゅんびしたいじょう、さいごまでやらないではすまない。",
              romaji:"Kokomadejunbishitaijou、saigomadeyaranaidehasumanai。",
              meaning:"Karena sudah menyiapkan sejauh ini, mau tidak mau harus diselesaikan sampai akhir."
            }
          ]
        }
      ]
    },

  {
      id:"GR-N1-126",
      level:"N1",
      title:"〜に〜を重ねて",
      summary:"Pola N1 〜に〜を重ねて dalam konteks alami sehari-hari dan formal.",
      groups:[
        {
          name:"〜に〜を重ねて",
          description:"Pola N1 〜に〜を重ねて dalam konteks alami sehari-hari dan formal.",
          sentences:[
            {
              jp:"新年度にあたり、関係者の皆様に感謝を重ねて申し上げます。",
              kana:"しんねんどにあたり、かんけいしゃのみなさまにかんしゃをおもねてもうしあげます。",
              romaji:"Shinnendoniatari、kankeishanominasamanikanshawoomonetemoushiagemasu。",
              meaning:"Memasuki tahun ajaran baru, saya menyampaikan terima kasih yang berulang kepada semua pihak terkait."
            },
            {
              jp:"ご迷惑をおかけしたうえに、お待たせしたことを重ねておわびします。",
              kana:"ごめいわくをおかけしたうえに、おまたせしたことをおもねておわびします。",
              romaji:"Gomeiwakuwookakeshitaueni、omataseshitakotowoomoneteowabishimasu。",
              meaning:"Selain merepotkan, saya juga minta maaf sekali lagi karena membuat Anda menunggu."
            },
            {
              jp:"成功を祝うとともに、今後の協力を重ねてお願いしたい。",
              kana:"せいこうをいわうとともに、こんごのきょうりょくをおもねておねがいしたい。",
              romaji:"Seikouwoiwautotomoni、kongonokyouryokuwoomoneteonegaishitai。",
              meaning:"Sambil merayakan keberhasilan ini, saya juga kembali memohon kerja sama ke depan."
            },
            {
              jp:"ご支援に感謝を重ねてお伝えします。",
              kana:"ごしえんにかんしゃをおもねておつたえします。",
              romaji:"Goshiennikanshawoomoneteotsutaeshimasu。",
              meaning:"Saya kembali menyampaikan rasa terima kasih atas dukungan Anda."
            },
            {
              jp:"安全確認に注意を重ねて呼びかけている。",
              kana:"あんぜんかくにんにちゅういをおもねてよびかけている。",
              romaji:"Anzenkakuninnichuuiwoomoneteyobikaketeiru。",
              meaning:"Mereka terus berulang kali mengimbau agar perhatian pada pengecekan keselamatan ditingkatkan."
            }
          ]
        }
      ]
    },

  {
      id:"GR-N1-127",
      level:"N1",
      title:"〜に値する",
      summary:"Pola N1 〜に値する dalam konteks alami sehari-hari dan formal.",
      groups:[
        {
          name:"〜に値する",
          description:"Pola N1 〜に値する dalam konteks alami sehari-hari dan formal.",
          sentences:[
            {
              jp:"この研究は、十分に評価に値する内容だ。",
              kana:"このけんきゅうは、じゅうぶんにひょうかにあたいするないようだ。",
              romaji:"Konokenkyuuha、juubunnihyoukaniataisurunaiyouda。",
              meaning:"Penelitian ini cukup layak mendapatkan penilaian tinggi."
            },
            {
              jp:"長年の努力は尊敬に値する。",
              kana:"ながねんのどりょくはそんけいにあたいする。",
              romaji:"Naganennodoryokuhasonkeiniataisuru。",
              meaning:"Usaha selama bertahun-tahun itu layak dihormati."
            },
            {
              jp:"その丁寧な接客は、店の看板に値する。",
              kana:"そのていねいなせっきゃくは、みせのかんばんにあたいする。",
              romaji:"Sonoteineinasekkyakuha、misenokanbanniataisuru。",
              meaning:"Pelayanan yang sopan itu layak menjadi kebanggaan toko."
            },
            {
              jp:"この映画は、家族で見るに値する作品だ。",
              kana:"このえいがは、かぞくでみるにあたいするさくひんだ。",
              romaji:"Konoeigaha、kazokudemiruniataisurusakuhinda。",
              meaning:"Film ini layak ditonton bersama keluarga."
            },
            {
              jp:"地域のために動いた彼らの行動は称賛に値する。",
              kana:"ちいきのためにうごいたかれらのこうどうはしょうさんにあたいする。",
              romaji:"Chiikinotameniugoitakareranokoudouhashousanniataisuru。",
              meaning:"Tindakan mereka yang bergerak demi warga layak dipuji."
            }
          ]
        }
      ]
    },

  {
      id:"GR-N1-128",
      level:"N1",
      title:"〜にあって",
      summary:"Pola N1 〜にあって dalam konteks alami sehari-hari dan formal.",
      groups:[
        {
          name:"〜にあって",
          description:"Pola N1 〜にあって dalam konteks alami sehari-hari dan formal.",
          sentences:[
            {
              jp:"非常時にあって、落ち着いた案内が何より大事だ。",
              kana:"ひじょうじにあって、おちついたあんないがなによりだいじだ。",
              romaji:"Hijoujiniatte、ochitsuitaannaigananiyoridaijida。",
              meaning:"Dalam keadaan darurat, panduan yang tenang adalah hal terpenting."
            },
            {
              jp:"海外にあっても、日本の家族と毎週連絡を取っている。",
              kana:"かいがいにあっても、にっぽんのかぞくとまいしゅうれんらくをとっている。",
              romaji:"Kaigainiattemo、nipponnokazokutomaishuurenrakuwototsuteiru。",
              meaning:"Meski berada di luar negeri, saya tetap berhubungan dengan keluarga di Jepang setiap minggu."
            },
            {
              jp:"忙しい時期にあって、彼だけはいつも冷静だ。",
              kana:"いそがしいじきにあって、かれだけはいつもれいせいだ。",
              romaji:"Isogashiijikiniatte、karedakehaitsumoreiseida。",
              meaning:"Di tengah masa sibuk, hanya dia yang tetap tenang."
            },
            {
              jp:"不況下にあっても、この店は客足が安定している。",
              kana:"ふきょうしたにあっても、このみせはきゃくあしがあんていしている。",
              romaji:"Fukyoushitaniattemo、konomisehakyakuashigaanteishiteiru。",
              meaning:"Bahkan di tengah resesi, jumlah pelanggan toko ini tetap stabil."
            },
            {
              jp:"多文化の環境にあって、相手への配慮はますます必要だ。",
              kana:"たぶんかのかんきょうにあって、あいてへのはいりょはますますひつようだ。",
              romaji:"Tabunkanokankyouniatte、aitehenohairyohamasumasuhitsuyouda。",
              meaning:"Dalam lingkungan multibudaya, perhatian kepada orang lain justru makin penting."
            }
          ]
        }
      ]
    },

  {
      id:"GR-N1-129",
      level:"N1",
      title:"〜に至って / に至り",
      summary:"Pola N1 〜に至って / に至り dalam konteks alami sehari-hari dan formal.",
      groups:[
        {
          name:"〜に至って / に至り",
          description:"Pola N1 〜に至って / に至り dalam konteks alami sehari-hari dan formal.",
          sentences:[
            {
              jp:"度重なる遅刻に至って、ついに契約更新が見送られた。",
              kana:"たびかさなるちこくにいたって、ついにけいやくこうしんがみおくられた。",
              romaji:"Tabikasanaruchikokuniitatsute、tsuinikeiyakukoushingamiokurareta。",
              meaning:"Setelah keterlambatan berulang, akhirnya perpanjangan kontrak dibatalkan."
            },
            {
              jp:"新年度に至り、制度の一部が改正された。",
              kana:"しんねんどにいたり、せいどのいちぶがかいせいされた。",
              romaji:"Shinnendoniitari、seidonoichibugakaiseisareta。",
              meaning:"Saat memasuki tahun ajaran baru, sebagian sistem direvisi."
            },
            {
              jp:"長い検討の末に至って、ようやく方針が固まった。",
              kana:"ながいけんとうのまつにいたって、ようやくほうしんがかたまった。",
              romaji:"Nagaikentounomatsuniitatsute、youyakuhoushingakatamatta。",
              meaning:"Setelah pembahasan panjang, akhirnya kebijakan diputuskan."
            },
            {
              jp:"今回の騒ぎに至って、管理体制の弱さが明らかになった。",
              kana:"こんかいのさわぎにいたって、かんりたいせいのよわさがあきらかになった。",
              romaji:"Konkainosawaginiitatsute、kanritaiseinoyowasagaakirakaninatta。",
              meaning:"Sampai pada keributan kali ini, kelemahan sistem pengelolaan menjadi jelas."
            },
            {
              jp:"交渉が最終段階に至り、両社の温度差が見えてきた。",
              kana:"こうしょうがさいしゅうだんかいにいたり、りょうしゃのおんどさがみえてきた。",
              romaji:"Koushougasaishuudankainiitari、ryoushanoondosagamietekita。",
              meaning:"Saat negosiasi mencapai tahap akhir, perbedaan pandangan kedua perusahaan mulai terlihat."
            }
          ]
        }
      ]
    },

  {
      id:"GR-N1-130",
      level:"N1",
      title:"〜に至っては",
      summary:"Pola N1 〜に至っては dalam konteks alami sehari-hari dan formal.",
      groups:[
        {
          name:"〜に至っては",
          description:"Pola N1 〜に至っては dalam konteks alami sehari-hari dan formal.",
          sentences:[
            {
              jp:"手続きの複雑さに至っては、地元の人でも迷うほどだ。",
              kana:"てつづきのふくざつさにいたっては、じもとのにんでもまようほどだ。",
              romaji:"Tetsuzukinofukuzatsusaniitatsuteha、jimotononindemomayouhododa。",
              meaning:"Kalau soal rumitnya prosedur, bahkan warga lokal pun bisa bingung."
            },
            {
              jp:"値段はまだしも、対応の悪さに至っては見過ごせない。",
              kana:"ねだんはまだしも、たいおうのわるさにいたってはみすごせない。",
              romaji:"Nedanhamadashimo、taiounowarusaniitatsutehamisugosenai。",
              meaning:"Kalau harga mungkin masih bisa ditoleransi, tetapi buruknya pelayanan sulit dibiarkan."
            },
            {
              jp:"通勤時間はともかく、終電の早さに至っては不便だ。",
              kana:"つうきんじかんはともかく、しゅうでんのはやさにいたってはふべんだ。",
              romaji:"Tsuukinjikanhatomokaku、shuudennohayasaniitatsutehafubenda。",
              meaning:"Kalau waktu berangkat kerja mungkin masih bisa diterima, tetapi kereta terakhir yang terlalu awal itu merepotkan."
            },
            {
              jp:"説明の長さはまだいいとして、結論のなさに至っては困る。",
              kana:"せつめいのながさはまだいいとして、けつろんのなさにいたってはこまる。",
              romaji:"Setsumeinonagasahamadaiitoshite、ketsuronnonasaniitatsutehakomaru。",
              meaning:"Kalau panjangnya penjelasan mungkin masih oke, tetapi tidak adanya kesimpulan itu merepotkan."
            },
            {
              jp:"この地域は家賃も高いが、駐車場代に至ってはさらに驚く。",
              kana:"このちいきはやちんもたかいが、ちゅうしゃじょうだいにいたってはさらにおどろく。",
              romaji:"Konochiikihayachinmotakaiga、chuushajoudainiitatsutehasaraniodoroku。",
              meaning:"Daerah ini sewanya memang mahal, tetapi kalau soal biaya parkir lebih mengejutkan lagi."
            }
          ]
        }
      ]
    },

  {
      id:"GR-N1-131",
      level:"N1",
      title:"〜に言わせれば",
      summary:"Pola N1 〜に言わせれば dalam konteks alami sehari-hari dan formal.",
      groups:[
        {
          name:"〜に言わせれば",
          description:"Pola N1 〜に言わせれば dalam konteks alami sehari-hari dan formal.",
          sentences:[
            {
              jp:"本人に言わせれば、それが一番自然な選択だったらしい。",
              kana:"ほんにんにいわせれば、それがいちばんしぜんなせんたくだったらしい。",
              romaji:"Honninniiwasereba、soregaichibanshizennasentakudattarashii。",
              meaning:"Menurut dia sendiri, itu adalah pilihan yang paling alami."
            },
            {
              jp:"店長に言わせれば、接客は技術より姿勢が大事だそうだ。",
              kana:"てんちょうにいわせれば、せっきゃくはぎじゅつよりしせいがだいじだそうだ。",
              romaji:"Tenchouniiwasereba、sekkyakuhagijutsuyorishiseigadaijidasouda。",
              meaning:"Menurut manajer toko, dalam pelayanan sikap lebih penting daripada teknik."
            },
            {
              jp:"長く日本に住む友人に言わせれば、最初の一年が一番大変だという。",
              kana:"ながくにっぽんにすむゆうじんにいわせれば、さいしょのいちねんがいちばんたいへんだという。",
              romaji:"Nagakunipponnisumuyuujinniiwasereba、saishonoichinengaichibantaihendatoiu。",
              meaning:"Menurut teman yang sudah lama tinggal di Jepang, tahun pertama adalah yang paling berat."
            },
            {
              jp:"母に言わせれば、健康以上に大切なものはない。",
              kana:"ははにいわせれば、けんこういじょうにたいせつなものはない。",
              romaji:"Hahaniiwasereba、kenkouijounitaisetsunamonohanai。",
              meaning:"Menurut ibu, tidak ada yang lebih penting daripada kesehatan."
            },
            {
              jp:"利用者に言わせれば、使いやすさが一番だ。",
              kana:"りようしゃにいわせれば、つかいやすさがいちばんだ。",
              romaji:"Riyoushaniiwasereba、tsukaiyasusagaichibanda。",
              meaning:"Kalau menurut pengguna, kemudahan pemakaian adalah yang utama."
            }
          ]
        }
      ]
    },

  {
      id:"GR-N1-132",
      level:"N1",
      title:"〜にかかっては / にかかったら / にかかると / かかれば",
      summary:"Pola N1 〜にかかっては / にかかったら / にかかると / かかれば dalam konteks alami sehari-hari dan formal.",
      groups:[
        {
          name:"〜にかかっては / にかかったら / にかかると / かかれば",
          description:"Pola N1 〜にかかっては / にかかったら / にかかると / かかれば dalam konteks alami sehari-hari dan formal.",
          sentences:[
            {
              jp:"父にかかっては、古い家電でも直してしまう。",
              kana:"ちちにかかっては、ふるいかでんでもなおしてしまう。",
              romaji:"Chichinikakatteha、furuikadendemonaoshiteshimau。",
              meaning:"Kalau sudah ayah yang menangani, peralatan lama pun bisa diperbaiki."
            },
            {
              jp:"彼にかかったら、このくらいの問題はすぐ片づく。",
              kana:"かれにかかったら、このくらいのもんだいはすぐかたづく。",
              romaji:"Karenikakattara、konokurainomondaihasugukatazuku。",
              meaning:"Kalau ditangani dia, masalah seperti ini cepat selesai."
            },
            {
              jp:"この講師にかかると、難しい文法も分かりやすい。",
              kana:"このこうしにかかると、むずかしいぶんぽうもわかりやすい。",
              romaji:"Konokoushinikakaruto、muzukashiibunpoumowakariyasui。",
              meaning:"Kalau dia yang mengajar, tata bahasa sulit pun jadi mudah dipahami."
            },
            {
              jp:"ベテランの手にかかれば、狭い部屋でも広く見せられる。",
              kana:"べてらんのてにかかれば、せまいへやでもひろくみせられる。",
              romaji:"Beterannotenikakareba、semaiheyademohirokumiserareru。",
              meaning:"Kalau ditangani tangan profesional, kamar sempit pun bisa dibuat terlihat luas."
            },
            {
              jp:"あの先輩にかかっては、新人も自然に育つ。",
              kana:"あのせんぱいにかかっては、しんじんもしぜんにそだつ。",
              romaji:"Anosenpainikakatteha、shinjinmoshizennisodatsu。",
              meaning:"Kalau dibimbing senior itu, pegawai baru pun berkembang secara alami."
            }
          ]
        }
      ]
    },

  {
      id:"GR-N1-133",
      level:"N1",
      title:"〜に限ったことではない",
      summary:"Pola N1 〜に限ったことではない dalam konteks alami sehari-hari dan formal.",
      groups:[
        {
          name:"〜に限ったことではない",
          description:"Pola N1 〜に限ったことではない dalam konteks alami sehari-hari dan formal.",
          sentences:[
            {
              jp:"この問題はうちの学校に限ったことではない。",
              kana:"このもんだいはうちのがっこうにかぎったことではない。",
              romaji:"Konomondaihauchinogakkounikagitsutakotodehanai。",
              meaning:"Masalah ini bukan hanya terjadi di sekolah kami."
            },
            {
              jp:"物価の上昇は東京に限ったことではない。",
              kana:"ぶっかのじょうしょうはとうきょうにかぎったことではない。",
              romaji:"Bukkanojoushouhatoukyounikagitsutakotodehanai。",
              meaning:"Kenaikan harga bukan hanya terjadi di Tokyo."
            },
            {
              jp:"通勤ラッシュの混雑は日本に限ったことではない。",
              kana:"つうきんらっしゅのこんざつはにっぽんにかぎったことではない。",
              romaji:"Tsuukinrasshunokonzatsuhanipponnikagitsutakotodehanai。",
              meaning:"Padatnya jam berangkat kerja bukan hanya terjadi di Jepang."
            },
            {
              jp:"言葉の壁で悩むのは留学生に限ったことではない。",
              kana:"ことばのかべでなやむのはりゅうがくせいにかぎったことではない。",
              romaji:"Kotobanokabedenayamunoharyuugakuseinikagitsutakotodehanai。",
              meaning:"Kesulitan karena hambatan bahasa bukan hanya dialami mahasiswa asing."
            },
            {
              jp:"SNSでの誤解は若者に限ったことではない。",
              kana:"SNSでのごかいはわかものにかぎったことではない。",
              romaji:"SNSdenogokaihawakamononikagitsutakotodehanai。",
              meaning:"Salah paham di media sosial bukan hanya terjadi pada anak muda."
            }
          ]
        }
      ]
    },

  {
      id:"GR-N1-134",
      level:"N1",
      title:"〜にかこつけて",
      summary:"Pola N1 〜にかこつけて dalam konteks alami sehari-hari dan formal.",
      groups:[
        {
          name:"〜にかこつけて",
          description:"Pola N1 〜にかこつけて dalam konteks alami sehari-hari dan formal.",
          sentences:[
            {
              jp:"歓迎会にかこつけて、みんなで高い店に行くことになった。",
              kana:"かんげいかいにかこつけて、みんなでたかいみせにいくことになった。",
              romaji:"Kangeikainikakotsukete、minnadetakaimiseniikukotoninatta。",
              meaning:"Dengan dalih pesta penyambutan, akhirnya kami pergi ke restoran mahal."
            },
            {
              jp:"点検にかこつけて、部屋の様子を細かく見られた気がした。",
              kana:"てんけんにかこつけて、へやのようすをこまかくみられたきがした。",
              romaji:"Tenkennikakotsukete、heyanoyousuwokomakakumiraretakigashita。",
              meaning:"Dengan alasan inspeksi, saya merasa kondisi kamar dilihat terlalu detail."
            },
            {
              jp:"勉強会にかこつけて、久しぶりに友達と会えた。",
              kana:"べんきょうかいにかこつけて、ひさしぶりにともだちとあえた。",
              romaji:"Benkyoukainikakotsukete、hisashiburinitomodachitoaeta。",
              meaning:"Berkat dalih kelompok belajar, saya bisa bertemu teman lagi setelah lama."
            },
            {
              jp:"季節のイベントにかこつけて、商店街は毎回かなり盛り上がる。",
              kana:"きせつのいべんとにかこつけて、しょうてんがいはまいかいかなりもりあがる。",
              romaji:"Kisetsunoibentonikakotsukete、shoutengaihamaikaikanarimoriagaru。",
              meaning:"Dengan memanfaatkan acara musiman, pertokoan selalu jadi sangat ramai."
            },
            {
              jp:"健康診断にかこつけて、午後は早めに上がらせてもらった。",
              kana:"けんこうしんだんにかこつけて、ごごははやめにあがらせてもらった。",
              romaji:"Kenkoushindannikakotsukete、gogohahayameniagarasetemoratta。",
              meaning:"Dengan alasan medical check-up, saya diizinkan pulang lebih awal siang itu."
            }
          ]
        }
      ]
    },

  {
      id:"GR-N1-135",
      level:"N1",
      title:"〜に難くない",
      summary:"Pola N1 〜に難くない dalam konteks alami sehari-hari dan formal.",
      groups:[
        {
          name:"〜に難くない",
          description:"Pola N1 〜に難くない dalam konteks alami sehari-hari dan formal.",
          sentences:[
            {
              jp:"事故の知らせを聞いた家族の動揺は想像に難くない。",
              kana:"じこのしらせをきいたかぞくのどうようはそうぞうにがたくない。",
              romaji:"Jikonoshirasewokiitakazokunodouyouhasouzounigatakunai。",
              meaning:"Keguncangan keluarga yang mendengar kabar kecelakaan itu mudah dibayangkan."
            },
            {
              jp:"初めての一人暮らしで不安を感じるのは理解に難くない。",
              kana:"はじめてのひとりぐらしでふあんをかんじるのはりかいにがたくない。",
              romaji:"Hajimetenohitorigurashidefuanwokanjirunoharikainigatakunai。",
              meaning:"Sangat mudah dipahami kalau orang merasa cemas saat pertama kali tinggal sendiri."
            },
            {
              jp:"結果を見て本人が落ち込んだであろうことは察するに難くない。",
              kana:"けっかをみてほんにんがおちこんだであろうことはさっするにがたくない。",
              romaji:"Kekkawomitehonningaochikondadearoukotohasassurunigatakunai。",
              meaning:"Mudah dibayangkan bahwa dia pasti sangat terpukul melihat hasilnya."
            },
            {
              jp:"急な値上げに利用者が不満を持つのは想像に難くない。",
              kana:"きゅうなねあげにりようしゃがふまんをもつのはそうぞうにがたくない。",
              romaji:"Kyuunaneageniriyoushagafumanwomotsunohasouzounigatakunai。",
              meaning:"Sangat mudah membayangkan pengguna akan merasa tidak puas dengan kenaikan harga mendadak."
            },
            {
              jp:"母国を離れて暮らす苦労は、留学生を見れば理解に難くない。",
              kana:"ぼこくをはなれてくらすくろうは、りゅうがくせいをみればりかいにがたくない。",
              romaji:"Bokokuwohanaretekurasukurouha、ryuugakuseiwomirebarikainigatakunai。",
              meaning:"Kalau melihat mahasiswa asing, tidak sulit memahami beratnya hidup jauh dari negara asal."
            }
          ]
        }
      ]
    },

  {
      id:"GR-N1-136",
      level:"N1",
      title:"〜にかまけて",
      summary:"Pola N1 〜にかまけて dalam konteks alami sehari-hari dan formal.",
      groups:[
        {
          name:"〜にかまけて",
          description:"Pola N1 〜にかまけて dalam konteks alami sehari-hari dan formal.",
          sentences:[
            {
              jp:"忙しさにかまけて、返信が遅くなってしまった。",
              kana:"いそがしさにかまけて、へんしんがおそくなってしまった。",
              romaji:"Isogashisanikamakete、henshingaosokunatteshimatta。",
              meaning:"Karena terlalu sibuk, balasan saya jadi terlambat."
            },
            {
              jp:"仕事にかまけて、最近ほとんど運動していない。",
              kana:"しごとにかまけて、さいきんほとんどうんどうしていない。",
              romaji:"Shigotonikamakete、saikinhotondoundoushiteinai。",
              meaning:"Karena terlalu fokus kerja, akhir-akhir ini saya hampir tidak olahraga."
            },
            {
              jp:"子育てにかまけて、自分の体調管理を後回しにしていた。",
              kana:"こそだてにかまけて、じぶんのたいちょうかんりをあとまわしにしていた。",
              romaji:"Kosodatenikamakete、jibunnotaichoukanriwoatomawashinishiteita。",
              meaning:"Karena sibuk mengurus anak, saya menunda menjaga kesehatan sendiri."
            },
            {
              jp:"売上ばかりにかまけて、店内の清掃がおろそかになっていた。",
              kana:"うりあげばかりにかまけて、てんないのせいそうがおろそかになっていた。",
              romaji:"Uriagebakarinikamakete、tennainoseisougaorosokaninatteita。",
              meaning:"Karena terlalu fokus pada penjualan, kebersihan toko sempat terabaikan."
            },
            {
              jp:"試験対策にかまけて、部屋がかなり散らかった。",
              kana:"しけんたいさくにかまけて、へやがかなりちらかった。",
              romaji:"Shikentaisakunikamakete、heyagakanarichirakatta。",
              meaning:"Karena sibuk belajar untuk ujian, kamar jadi sangat berantakan."
            }
          ]
        }
      ]
    },

  {
      id:"GR-N1-137",
      level:"N1",
      title:"〜に先駆けて",
      summary:"Pola N1 〜に先駆けて dalam konteks alami sehari-hari dan formal.",
      groups:[
        {
          name:"〜に先駆けて",
          description:"Pola N1 〜に先駆けて dalam konteks alami sehari-hari dan formal.",
          sentences:[
            {
              jp:"桜祭りに先駆けて、駅前に提灯が飾られた。",
              kana:"さくらまつりりにさきがけて、えきまえにていとうがかざられた。",
              romaji:"Sakuramatsuririnisakigakete、ekimaeniteitougakazarareta。",
              meaning:"Menjelang lebih dulu festival sakura, lampion dipasang di depan stasiun."
            },
            {
              jp:"一般販売に先駆けて、会員向けの案内が始まった。",
              kana:"いっぱんはんばいにさきがけて、かいいんむけのあんないがはじまった。",
              romaji:"Ippanhanbainisakigakete、kaiinmukenoannaigahajimatta。",
              meaning:"Sebelum penjualan umum dimulai, informasi untuk anggota lebih dulu dibuka."
            },
            {
              jp:"新学期に先駆けて、学生寮の説明会が行われた。",
              kana:"しんがっきにさきがけて、がくせいりょうのせつめいかいがおこなわれた。",
              romaji:"Shingakkinisakigakete、gakuseiryounosetsumeikaigaokonawareta。",
              meaning:"Sebelum semester baru dimulai, diadakan sesi penjelasan asrama mahasiswa."
            },
            {
              jp:"制度変更に先駆けて、職員向け研修が実施された。",
              kana:"せいどへんこうにさきがけて、しょくいんむけけんしゅうがじっしされた。",
              romaji:"Seidohenkounisakigakete、shokuinmukekenshuugajisshisareta。",
              meaning:"Sebelum perubahan sistem diberlakukan, pelatihan untuk staf dilaksanakan."
            },
            {
              jp:"夏の観光シーズンに先駆けて、商店街の看板が新しくなった。",
              kana:"なつのかんこうしーずんにさきがけて、しょうてんがいのかんばんがあたらしくなった。",
              romaji:"Natsunokankoushiizunnisakigakete、shoutengainokanbangaatarashikunatta。",
              meaning:"Sebelum musim wisata panas dimulai, papan toko di pertokoan diperbarui."
            }
          ]
        }
      ]
    },

  {
      id:"GR-N1-138",
      level:"N1",
      title:"〜にしたところで / にしたって",
      summary:"Pola N1 〜にしたところで / にしたって dalam konteks alami sehari-hari dan formal.",
      groups:[
        {
          name:"〜にしたところで / にしたって",
          description:"Pola N1 〜にしたところで / にしたって dalam konteks alami sehari-hari dan formal.",
          sentences:[
            {
              jp:"今さら謝るにしたところで、失った信頼はすぐには戻らない。",
              kana:"いまさらあやまるにしたところで、うったしんらいはすぐにはもどらない。",
              romaji:"Imasaraayamarunishitatokorode、utsutashinraihasugunihamodoranai。",
              meaning:"Bahkan kalau sekarang meminta maaf, kepercayaan yang hilang tidak akan segera kembali."
            },
            {
              jp:"学生にしたって、毎日余裕があるわけではない。",
              kana:"がくせいにしたって、まいにちよゆうがあるわけではない。",
              romaji:"Gakuseinishitatte、mainichiyoyuugaaruwakedehanai。",
              meaning:"Bahkan mahasiswa pun tidak selalu punya banyak waktu luang."
            },
            {
              jp:"駅前に住むにしたところで、家賃の高さは覚悟が必要だ。",
              kana:"えきまえにすむにしたところで、やちんのたかさはかくごがひつようだ。",
              romaji:"Ekimaenisumunishitatokorode、yachinnotakasahakakugogahitsuyouda。",
              meaning:"Kalau pun tinggal dekat stasiun, kita harus siap dengan sewa yang mahal."
            },
            {
              jp:"彼にしたって、好きで厳しいことを言っているわけじゃない。",
              kana:"かれにしたって、すきでいかめしいことをいっているわけじゃない。",
              romaji:"Karenishitatte、sukideikameshiikotowoitteiruwakejanai。",
              meaning:"Bahkan dia pun bukan berkata keras karena suka."
            },
            {
              jp:"急いだにしたって、説明を省きすぎだと思う。",
              kana:"いそいだにしたって、せつめいをはぶきすぎだとおもう。",
              romaji:"Isoidanishitatte、setsumeiwohabukisugidatoomou。",
              meaning:"Walaupun mungkin sedang buru-buru, menurut saya penjelasannya terlalu dipersingkat."
            }
          ]
        }
      ]
    },

  {
      id:"GR-N1-139",
      level:"N1",
      title:"〜にして",
      summary:"Pola N1 〜にして dalam konteks alami sehari-hari dan formal.",
      groups:[
        {
          name:"〜にして",
          description:"Pola N1 〜にして dalam konteks alami sehari-hari dan formal.",
          sentences:[
            {
              jp:"彼は三十歳にして、もう支店長を任されている。",
              kana:"かれはさんじゅうさいにして、もうしてんちょうをまかされている。",
              romaji:"Karehasanjuusainishite、moushitenchouwomakasareteiru。",
              meaning:"Di usia tiga puluh tahun, dia sudah dipercaya menjadi kepala cabang."
            },
            {
              jp:"この静けさは早朝にして初めて味わえる。",
              kana:"このしずけさはそうちょうにしてはじめてあじわえる。",
              romaji:"Konoshizukesahasouchounishitehajimeteajiwaeru。",
              meaning:"Ketenangan seperti ini baru bisa dirasakan di pagi sekali."
            },
            {
              jp:"失って初めて、その存在の大きさを知ることがある。",
              kana:"うってはじめて、そのそんざいのおおきさをしることがある。",
              romaji:"Utsutehajimete、sonosonzainoookisawoshirukotogaaru。",
              meaning:"Kadang kita baru sadar besarnya arti sesuatu setelah kehilangannya."
            },
            {
              jp:"一言にして場の空気が変わった。",
              kana:"ひとことにしてばのくうきがかわった。",
              romaji:"Hitokotonishitebanokuukigakawatta。",
              meaning:"Hanya dengan satu kalimat, suasana ruangan berubah."
            },
            {
              jp:"N1にしてなお、この読解は難しいと感じる。",
              kana:"N1にしてなお、このどくかいはむずかしいとかんじる。",
              romaji:"N1nishitenao、konodokukaihamuzukashiitokanjiru。",
              meaning:"Bahkan di level N1 pun, saya merasa bacaan ini sulit."
            }
          ]
        }
      ]
    },

  {
      id:"GR-N1-140",
      level:"N1",
      title:"〜に忍びない",
      summary:"Pola N1 〜に忍びない dalam konteks alami sehari-hari dan formal.",
      groups:[
        {
          name:"〜に忍びない",
          description:"Pola N1 〜に忍びない dalam konteks alami sehari-hari dan formal.",
          sentences:[
            {
              jp:"子どもが泣いているのを見るに忍びなくて、つい声をかけた。",
              kana:"こどもがないているのをみるにしのびなくて、ついこえをかけた。",
              romaji:"Kodomoganaiteirunowomirunishinobinakute、tsuikoewokaketa。",
              meaning:"Saya tidak tega melihat anak itu menangis, jadi spontan menyapanya."
            },
            {
              jp:"努力してきた学生を落とすのは見るに忍びない。",
              kana:"どりょくしてきたがくせいをおとすのはみるにしのびない。",
              romaji:"Doryokushitekitagakuseiwootosunohamirunishinobinai。",
              meaning:"Tidak tega rasanya melihat mahasiswa yang sudah berusaha keras gagal."
            },
            {
              jp:"そんな顔をされると、断るに忍びない。",
              kana:"そんなかおをされると、ことわるにしのびない。",
              romaji:"Sonnakaowosareruto、kotowarunishinobinai。",
              meaning:"Kalau ditatap seperti itu, rasanya tidak tega untuk menolak."
            },
            {
              jp:"雨の中で長く待たせるのは忍びないので、中へどうぞ。",
              kana:"あめのなかでながくまたせるのはしのびないので、なかへどうぞ。",
              romaji:"Amenonakadenagakumataserunohashinobinainode、nakahedouzo。",
              meaning:"Tidak enak hati membiarkan Anda menunggu lama di bawah hujan, jadi silakan masuk."
            },
            {
              jp:"祖父の大切な品を処分するに忍びなくて、まだ取ってある。",
              kana:"そふのたいせつなひんをしょぶんするにしのびなくて、まだとってある。",
              romaji:"Sofunotaisetsunahinwoshobunsurunishinobinakute、madatotsutearu。",
              meaning:"Saya tidak tega membuang barang berharga milik kakek, jadi masih saya simpan."
            }
          ]
        }
      ]
    },

  {
      id:"GR-N1-141",
      level:"N1",
      title:"〜に即して / に即した",
      summary:"Pola N1 〜に即して / に即した dalam konteks alami sehari-hari dan formal.",
      groups:[
        {
          name:"〜に即して / に即した",
          description:"Pola N1 〜に即して / に即した dalam konteks alami sehari-hari dan formal.",
          sentences:[
            {
              jp:"実情に即したルールでないと、現場では使いにくい。",
              kana:"じつじょうにそくしたるーるでないと、げんばではつかいにくい。",
              romaji:"Jitsujounisokushitaruurudenaito、genbadehatsukainikui。",
              meaning:"Kalau aturannya tidak sesuai dengan kondisi nyata, akan sulit dipakai di lapangan."
            },
            {
              jp:"年齢に即した説明をしたほうが伝わりやすい。",
              kana:"ねんれいにそくしたせつめいをしたほうがつたわりやすい。",
              romaji:"Nenreinisokushitasetsumeiwoshitahougatsutawariyasui。",
              meaning:"Penjelasan yang sesuai usia akan lebih mudah dipahami."
            },
            {
              jp:"地域の実態に即して、避難訓練の内容も見直された。",
              kana:"ちいきのじったいにそくして、ひなんくんれんのないようもみなおされた。",
              romaji:"Chiikinojittainisokushite、hinankunrennonaiyoumominaosareta。",
              meaning:"Isi latihan evakuasi juga ditinjau ulang agar sesuai kondisi nyata daerah."
            },
            {
              jp:"利用者の声に即した改善が求められている。",
              kana:"りようしゃのこえにそくしたかいぜんがもとめられている。",
              romaji:"Riyoushanokoenisokushitakaizengamotomerareteiru。",
              meaning:"Perbaikan yang sesuai suara pengguna sedang dibutuhkan."
            },
            {
              jp:"実際の場面に即した教材なので、とても役に立つ。",
              kana:"じっさいのばめんにそくしたきょうざいなので、とてもやくにたつ。",
              romaji:"Jissainobamennisokushitakyouzainanode、totemoyakunitatsu。",
              meaning:"Karena materi ajarnya sesuai dengan situasi nyata, sangat membantu."
            }
          ]
        }
      ]
    },

  {
      id:"GR-N1-142",
      level:"N1",
      title:"〜に堪えない",
      summary:"Pola N1 〜に堪えない dalam konteks alami sehari-hari dan formal.",
      groups:[
        {
          name:"〜に堪えない",
          description:"Pola N1 〜に堪えない dalam konteks alami sehari-hari dan formal.",
          sentences:[
            {
              jp:"この写真は見るに堪えないほど傷んでいた。",
              kana:"このしゃしんはみるにこたえないほどきずんでいた。",
              romaji:"Konoshashinhamirunikotaenaihodokizundeita。",
              meaning:"Foto ini rusak sampai sulit dilihat."
            },
            {
              jp:"その誤字だらけの資料は読むに堪えない。",
              kana:"そのごじだらけのしりょうはよむにこたえない。",
              romaji:"Sonogojidarakenoshiryouhayomunikotaenai。",
              meaning:"Dokumen yang penuh salah ketik itu sulit dibaca."
            },
            {
              jp:"彼の失礼な態度は聞くに堪えなかった。",
              kana:"かのしつれいなたいどはきくにこたえなかった。",
              romaji:"Kanoshitsureinataidohakikunikotaenakatta。",
              meaning:"Sikapnya yang tidak sopan benar-benar sulit diterima untuk didengar."
            },
            {
              jp:"この暑さの中で長時間並ぶのは忍耐に堪えない。",
              kana:"このあつさのなかでちょうじかんならぶのはにんたいにこたえない。",
              romaji:"Konoatsusanonakadechoujikannarabunohanintainikotaenai。",
              meaning:"Mengantre lama dalam panas seperti ini terasa sangat berat."
            },
            {
              jp:"あの騒音はもう我慢に堪えない。",
              kana:"あのそうおんはもうがまんにこたえない。",
              romaji:"Anosouonhamougamannikotaenai。",
              meaning:"Kebisingan itu sudah benar-benar tidak tertahankan lagi."
            }
          ]
        }
      ]
    },

  {
      id:"GR-N1-143",
      level:"N1",
      title:"〜に足る / に足らない",
      summary:"Pola N1 〜に足る / に足らない dalam konteks alami sehari-hari dan formal.",
      groups:[
        {
          name:"〜に足る / に足らない",
          description:"Pola N1 〜に足る / に足らない dalam konteks alami sehari-hari dan formal.",
          sentences:[
            {
              jp:"彼の説明は信頼に足る内容だった。",
              kana:"かのせつめいはしんらいにたるないようだった。",
              romaji:"Kanosetsumeihashinrainitarunaiyoudatta。",
              meaning:"Penjelasannya layak dipercaya."
            },
            {
              jp:"その行動は評価に足ると思う。",
              kana:"そのこうどうはひょうかにたるとおもう。",
              romaji:"Sonokoudouhahyoukanitarutoomou。",
              meaning:"Menurut saya tindakan itu layak mendapat penilaian baik."
            },
            {
              jp:"少しの失敗は問題に足らない。",
              kana:"すこしのしっぱいはもんだいにたらない。",
              romaji:"Sukoshinoshippaihamondainitaranai。",
              meaning:"Kesalahan kecil itu tidak cukup berarti untuk dipermasalahkan."
            },
            {
              jp:"この件は議論に足るテーマだ。",
              kana:"このけんはぎろんにたるてーまだ。",
              romaji:"Konokenhagironnitaruteemada。",
              meaning:"Masalah ini layak dijadikan bahan diskusi."
            },
            {
              jp:"うわさだけでは証拠に足らない。",
              kana:"うわさだけではしょうこにたらない。",
              romaji:"Uwasadakedehashoukonitaranai。",
              meaning:"Kalau cuma rumor, itu tidak cukup sebagai bukti."
            }
          ]
        }
      ]
    },

  {
      id:"GR-N1-144",
      level:"N1",
      title:"〜に照らして",
      summary:"Pola N1 〜に照らして dalam konteks alami sehari-hari dan formal.",
      groups:[
        {
          name:"〜に照らして",
          description:"Pola N1 〜に照らして dalam konteks alami sehari-hari dan formal.",
          sentences:[
            {
              jp:"規則に照らして考えると、この対応は問題ない。",
              kana:"きそくにてらしてかんがえると、このたいおうはもんだいない。",
              romaji:"Kisokuniterashitekangaeruto、konotaiouhamondainai。",
              meaning:"Kalau dinilai berdasarkan aturan, penanganan ini tidak bermasalah."
            },
            {
              jp:"過去の例に照らしても、今回は早い対応だった。",
              kana:"かこのれいにてらしても、こんかいははやいたいおうだった。",
              romaji:"Kakonoreiniterashitemo、konkaihahayaitaioudatta。",
              meaning:"Bahkan dibanding contoh-contoh sebelumnya, penanganan kali ini tergolong cepat."
            },
            {
              jp:"常識に照らせば、その発言は少しきつい。",
              kana:"じょうしきにてらせば、そのはつげんはすこしきつい。",
              romaji:"Joushikiniteraseba、sonohatsugenhasukoshikitsui。",
              meaning:"Kalau dilihat dari akal sehat, ucapan itu agak terlalu keras."
            },
            {
              jp:"本人の希望に照らして進路を考えるべきだ。",
              kana:"ほんにんのきぼうにてらしてしんろをかんがえるべきだ。",
              romaji:"Honninnokibouniterashiteshinrowokangaerubekida。",
              meaning:"Arah masa depan sebaiknya dipikirkan berdasarkan keinginan orang itu sendiri."
            },
            {
              jp:"目的に照らして、この予算の使い方を見直したい。",
              kana:"もくてきにてらして、このよさんのつかいかたをみなおしたい。",
              romaji:"Mokutekiniterashite、konoyosannotsukaikatawominaoshitai。",
              meaning:"Saya ingin meninjau penggunaan anggaran ini berdasarkan tujuannya."
            }
          ]
        }
      ]
    },

  {
      id:"GR-N1-145",
      level:"N1",
      title:"〜にとどまらず",
      summary:"Pola N1 〜にとどまらず dalam konteks alami sehari-hari dan formal.",
      groups:[
        {
          name:"〜にとどまらず",
          description:"Pola N1 〜にとどまらず dalam konteks alami sehari-hari dan formal.",
          sentences:[
            {
              jp:"この祭りは地元の人にとどまらず、観光客にも人気だ。",
              kana:"このまつりはじもとのにんにとどまらず、かんこうきゃくにもにんきだ。",
              romaji:"Konomatsurihajimotononinnitodomarazu、kankoukyakunimoninkida。",
              meaning:"Festival ini populer bukan hanya di kalangan warga lokal, tetapi juga wisatawan."
            },
            {
              jp:"彼の影響は社内にとどまらず、地域にも広がっている。",
              kana:"かのえいきょうはしゃないにとどまらず、ちいきにもひろがっている。",
              romaji:"Kanoeikyouhashanainitodomarazu、chiikinimohirogatteiru。",
              meaning:"Pengaruhnya meluas bukan hanya di dalam perusahaan, tetapi juga di masyarakat sekitar."
            },
            {
              jp:"問題は一部の店舗にとどまらず、全体に及んでいた。",
              kana:"もんだいはいちぶのてんぽにとどまらず、ぜんたいにおよんでいた。",
              romaji:"Mondaihaichibunotenponitodomarazu、zentainioyondeita。",
              meaning:"Masalahnya tidak hanya di beberapa cabang, tetapi menjalar ke seluruh sistem."
            },
            {
              jp:"日本語だけにとどまらず、英語でも案内が必要だ。",
              kana:"にほんごだけにとどまらず、えいごでもあんないがひつようだ。",
              romaji:"Nihongodakenitodomarazu、eigodemoannaigahitsuyouda。",
              meaning:"Bukan hanya bahasa Jepang, panduan dalam bahasa Inggris juga diperlukan."
            },
            {
              jp:"被害は建物にとどまらず、交通にも影響した。",
              kana:"ひがいはたてものにとどまらず、こうつうにもえいきょうした。",
              romaji:"Higaihatatemononitodomarazu、koutsuunimoeikyoushita。",
              meaning:"Dampaknya tidak hanya pada bangunan, tetapi juga pada transportasi."
            }
          ]
        }
      ]
    },

  {
      id:"GR-N1-146",
      level:"N1",
      title:"〜に則って",
      summary:"Pola N1 〜に則って dalam konteks alami sehari-hari dan formal.",
      groups:[
        {
          name:"〜に則って",
          description:"Pola N1 〜に則って dalam konteks alami sehari-hari dan formal.",
          sentences:[
            {
              jp:"社内規定に則って、交通費を申請してください。",
              kana:"しゃないきていにそくって、こうつうひをしんせいしてください。",
              romaji:"Shanaikiteinisokutsute、koutsuuhiwoshinseishitekudasai。",
              meaning:"Silakan ajukan biaya transportasi sesuai aturan internal perusahaan."
            },
            {
              jp:"マニュアルに則って対応すれば、大きなミスは防げる。",
              kana:"まにゅあるにそくってたいおうすれば、おおきなみすはふせげる。",
              romaji:"Manyuarunisokutsutetaiousureba、ookinamisuhafusegeru。",
              meaning:"Kalau menanganinya sesuai manual, kesalahan besar bisa dicegah."
            },
            {
              jp:"地域のルールに則ってごみを分別している。",
              kana:"ちいきのるーるにそくってごみをふんべつしている。",
              romaji:"Chiikinoruurunisokutsutegomiwofunbetsushiteiru。",
              meaning:"Saya memilah sampah sesuai aturan daerah setempat."
            },
            {
              jp:"契約書に則った手続きが必要です。",
              kana:"けいやくしょにそくったてつづきがひつようです。",
              romaji:"Keiyakushonisokutsutatetsuzukigahitsuyoudesu。",
              meaning:"Diperlukan prosedur yang sesuai isi kontrak."
            },
            {
              jp:"現場では、安全基準に則って作業が進められていた。",
              kana:"げんばでは、あんぜんきじゅんにそくってさぎょうがすすめられていた。",
              romaji:"Genbadeha、anzenkijunnisokutsutesagyougasusumerareteita。",
              meaning:"Di lapangan, pekerjaan dilakukan sesuai standar keselamatan."
            }
          ]
        }
      ]
    },

  {
      id:"GR-N1-147",
      level:"N1",
      title:"〜には当たらない",
      summary:"Pola N1 〜には当たらない dalam konteks alami sehari-hari dan formal.",
      groups:[
        {
          name:"〜には当たらない",
          description:"Pola N1 〜には当たらない dalam konteks alami sehari-hari dan formal.",
          sentences:[
            {
              jp:"その程度の遅れなら、心配するには当たらない。",
              kana:"そのていどのおくれなら、しんぱいするにはあたらない。",
              romaji:"Sonoteidonookurenara、shinpaisurunihaataranai。",
              meaning:"Kalau keterlambatannya cuma segitu, tidak perlu terlalu khawatir."
            },
            {
              jp:"まだ決定ではないので、慌てるには当たらない。",
              kana:"まだけっていではないので、あわてるにはあたらない。",
              romaji:"Madaketteidehanainode、awaterunihaataranai。",
              meaning:"Karena belum keputusan final, belum perlu panik."
            },
            {
              jp:"一度断られたくらいで落ち込むには当たらない。",
              kana:"いちどことわられたくらいでおちこむにはあたらない。",
              romaji:"Ichidokotowararetakuraideochikomunihaataranai。",
              meaning:"Baru sekali ditolak tidak perlu terlalu putus asa."
            },
            {
              jp:"今回の件は謝罪するには当たらないと上司に言われた。",
              kana:"こんかいのけんはしゃざいするにはあたらないとじょうしにいわれた。",
              romaji:"Konkainokenhashazaisurunihaataranaitojoushiniiwareta。",
              meaning:"Atasan mengatakan bahwa untuk kasus kali ini, sampai minta maaf pun tidak perlu."
            },
            {
              jp:"予想通りの結果だから、驚くには当たらない。",
              kana:"よそうどおりのけっかだから、おどろくにはあたらない。",
              romaji:"Yosoudoorinokekkadakara、odorokunihaataranai。",
              meaning:"Hasilnya sesuai dugaan, jadi tidak perlu heran."
            }
          ]
        }
      ]
    },

  {
      id:"GR-N1-148",
      level:"N1",
      title:"〜には及ばない",
      summary:"Pola N1 〜には及ばない dalam konteks alami sehari-hari dan formal.",
      groups:[
        {
          name:"〜には及ばない",
          description:"Pola N1 〜には及ばない dalam konteks alami sehari-hari dan formal.",
          sentences:[
            {
              jp:"その件はご心配には及びません。",
              kana:"そのけんはごしんぱいにはおよびません。",
              romaji:"Sonokenhagoshinpainihaoyobimasen。",
              meaning:"Untuk hal itu, Anda tidak perlu khawatir."
            },
            {
              jp:"今回は書面で十分なので、わざわざお越しには及びません。",
              kana:"こんかいはしょめんでじゅうぶんなので、わざわざおこしにはおよびません。",
              romaji:"Konkaihashomendejuubunnanode、wazawazaokoshinihaoyobimasen。",
              meaning:"Kali ini cukup lewat dokumen, jadi Anda tidak perlu datang."
            },
            {
              jp:"説明するまでもなく、皆さんご存じでしょう。",
              kana:"せつめいするまでもなく、みなさんごぞんじでしょう。",
              romaji:"Setsumeisurumademonaku、minasangozonjideshou。",
              meaning:"Tanpa perlu dijelaskan pun, saya rasa semua sudah tahu."
            },
            {
              jp:"今さら言い訳するには及ばない。",
              kana:"いまさらいいわけするにはおよばない。",
              romaji:"Imasaraiiwakesurunihaoyobanai。",
              meaning:"Sekarang tidak perlu lagi memberi alasan."
            },
            {
              jp:"謝罪には及ばないが、今後は気をつけてほしい。",
              kana:"しゃざいにはおよばないが、こんごはきをつけてほしい。",
              romaji:"Shazainihaoyobanaiga、kongohakiwotsuketehoshii。",
              meaning:"Tidak sampai perlu minta maaf, tetapi saya ingin ke depannya lebih diperhatikan."
            }
          ]
        }
      ]
    },

  {
      id:"GR-N1-149",
      level:"N1",
      title:"〜には無理がある",
      summary:"Pola N1 〜には無理がある dalam konteks alami sehari-hari dan formal.",
      groups:[
        {
          name:"〜には無理がある",
          description:"Pola N1 〜には無理がある dalam konteks alami sehari-hari dan formal.",
          sentences:[
            {
              jp:"一日で全部覚えようとするのは、さすがに無理がある。",
              kana:"ついたちでぜんぶおぼえようとするのは、さすがにむりがある。",
              romaji:"Tsuitachidezenbuoboeyoutosurunoha、sasuganimurigaaru。",
              meaning:"Mencoba menghafal semuanya dalam satu hari jelas terlalu berat."
            },
            {
              jp:"その予算で駅前に店を出すのは無理がある。",
              kana:"そのよさんでえきまえにみせをだすのはむりがある。",
              romaji:"Sonoyosandeekimaenimisewodasunohamurigaaru。",
              meaning:"Dengan anggaran sebesar itu, membuka toko di depan stasiun terasa tidak realistis."
            },
            {
              jp:"説明なしで納得してもらうには無理がある。",
              kana:"せつめいなしでなっとくしてもらうにはむりがある。",
              romaji:"Setsumeinashidenattokushitemoraunihamurigaaru。",
              meaning:"Mengharapkan orang paham tanpa penjelasan rasanya terlalu dipaksakan."
            },
            {
              jp:"寝不足のまま長距離を運転するのは無理がある。",
              kana:"ねぶそくのままちょうきょりをうんてんするのはむりがある。",
              romaji:"Nebusokunomamachoukyoriwountensurunohamurigaaru。",
              meaning:"Menyetir jarak jauh dalam kondisi kurang tidur itu terlalu berbahaya."
            },
            {
              jp:"この人数で全部を運営するには無理がある。",
              kana:"このにんずうでぜんぶをうんえいするにはむりがある。",
              romaji:"Kononinzuudezenbuwoun'eisurunihamurigaaru。",
              meaning:"Dengan jumlah orang segini, mengelola semuanya terasa terlalu berat."
            }
          ]
        }
      ]
    },

  {
      id:"GR-N1-150",
      level:"N1",
      title:"〜にひきかえ",
      summary:"Pola N1 〜にひきかえ dalam konteks alami sehari-hari dan formal.",
      groups:[
        {
          name:"〜にひきかえ",
          description:"Pola N1 〜にひきかえ dalam konteks alami sehari-hari dan formal.",
          sentences:[
            {
              jp:"兄が社交的なのにひきかえ、弟はかなり静かだ。",
              kana:"あにがしゃこうてきなのにひきかえ、おとうとはかなりしずかだ。",
              romaji:"Anigashakoutekinanonihikikae、otoutohakanarishizukada。",
              meaning:"Berbeda dengan kakaknya yang supel, adiknya cukup pendiam."
            },
            {
              jp:"去年の暑さにひきかえ、今年の夏はまだ過ごしやすい。",
              kana:"きょねんのあつさにひきかえ、こんねんのなつはまだすごしやすい。",
              romaji:"Kyonennoatsusanihikikae、konnennonatsuhamadasugoshiyasui。",
              meaning:"Berbeda dengan panas tahun lalu, musim panas tahun ini masih lebih nyaman."
            },
            {
              jp:"駅前のにぎやかさにひきかえ、この辺は夜になると静かだ。",
              kana:"えきまえのにぎやかさにひきかえ、このへんはよるになるとしずかだ。",
              romaji:"Ekimaenonigiyakasanihikikae、konohenhayoruninarutoshizukada。",
              meaning:"Berbeda dengan keramaian depan stasiun, daerah sini menjadi tenang saat malam."
            },
            {
              jp:"都会の便利さにひきかえ、地方は移動に時間がかかる。",
              kana:"とかいのべんりさにひきかえ、ちほうはいどうにじかんがかかる。",
              romaji:"Tokainobenrisanihikikae、chihouhaidounijikangakakaru。",
              meaning:"Berbeda dengan kemudahan di kota besar, di daerah butuh waktu lebih lama untuk berpindah tempat."
            },
            {
              jp:"兄の部屋のきれいさにひきかえ、私は片づけが苦手だ。",
              kana:"あにのへやのきれいさにひきかえ、わたしはかたづけがにがてだ。",
              romaji:"Aninoheyanokireisanihikikae、watashihakatazukeganigateda。",
              meaning:"Berbeda dengan kamar kakak yang rapi, saya kurang pandai merapikan."
            }
          ]
        }
      ]
    },

  {
      id:"GR-N1-151",
      level:"N1",
      title:"〜にもほどがある",
      summary:"Pola N1 〜にもほどがある dalam konteks alami sehari-hari dan formal.",
      groups:[
        {
          name:"〜にもほどがある",
          description:"Pola N1 〜にもほどがある dalam konteks alami sehari-hari dan formal.",
          sentences:[
            {
              jp:"その値上げは高すぎにもほどがある。",
              kana:"そのねあげはたかすぎにもほどがある。",
              romaji:"Sononeagehatakasuginimohodogaaru。",
              meaning:"Kenaikan harga itu keterlaluan sekali."
            },
            {
              jp:"寝坊したとはいえ、二時間の遅刻は遅すぎにもほどがある。",
              kana:"ねぼうしたとはいえ、にじかんのちこくはおそすぎにもほどがある。",
              romaji:"Neboushitatohaie、nijikannochikokuhaososuginimohodogaaru。",
              meaning:"Walau ketiduran, terlambat dua jam itu kelewatan."
            },
            {
              jp:"夏なのに暖房をつけるなんて、無駄にもほどがある。",
              kana:"なつなのにだんぼうをつけるなんて、むだにもほどがある。",
              romaji:"Natsunanonidanbouwotsukerunante、mudanimohodogaaru。",
              meaning:"Menyalakan pemanas di musim panas itu keterlaluan borosnya."
            },
            {
              jp:"その言い方は失礼にもほどがある。",
              kana:"そのいいかたはしつれいにもほどがある。",
              romaji:"Sonoiikatahashitsureinimohodogaaru。",
              meaning:"Cara bicara itu keterlaluan kasarnya."
            },
            {
              jp:"毎回締め切り直前に頼むのは勝手にもほどがある。",
              kana:"まいかいしめきりちょくぜんにたのむのはかってにもほどがある。",
              romaji:"Maikaishimekirichokuzennitanomunohakattenimohodogaaru。",
              meaning:"Selalu meminta bantuan tepat sebelum tenggat itu terlalu seenaknya."
            }
          ]
        }
      ]
    },

  {
      id:"GR-N1-152",
      level:"N1",
      title:"〜にも増して",
      summary:"Pola N1 〜にも増して dalam konteks alami sehari-hari dan formal.",
      groups:[
        {
          name:"〜にも増して",
          description:"Pola N1 〜にも増して dalam konteks alami sehari-hari dan formal.",
          sentences:[
            {
              jp:"今年は例年にも増して花粉が多い気がする。",
              kana:"こんねんはれいねんにもましてかふんがおおいきがする。",
              romaji:"Konnenhareinennimomashitekafungaooikigasuru。",
              meaning:"Tahun ini rasanya serbuk sari lebih banyak daripada biasanya."
            },
            {
              jp:"引っ越してから、前にも増して電車を使うようになった。",
              kana:"ひっこしてから、まえにもましてでんしゃをつかうようになった。",
              romaji:"Hikkoshitekara、maenimomashitedenshawotsukauyouninatta。",
              meaning:"Sejak pindah, saya lebih sering naik kereta daripada sebelumnya."
            },
            {
              jp:"新学期は普段にも増して駅が混む。",
              kana:"しんがっきはふだんにもましてえきがこむ。",
              romaji:"Shingakkihafudannimomashiteekigakomu。",
              meaning:"Awal semester membuat stasiun lebih ramai daripada biasanya."
            },
            {
              jp:"試験前で、教室はいつにも増して静かだった。",
              kana:"しけんまえで、きょうしつはいつにもましてしずかだった。",
              romaji:"Shikenmaede、kyoushitsuhaitsunimomashiteshizukadatta。",
              meaning:"Menjelang ujian, kelas terasa lebih sunyi daripada biasanya."
            },
            {
              jp:"外国人対応の窓口は、今月にも増して忙しそうだ。",
              kana:"がいこくじんたいおうのまどぐちは、こんげつにもましていそがしそうだ。",
              romaji:"Gaikokujintaiounomadoguchiha、kongetsunimomashiteisogashisouda。",
              meaning:"Loket penanganan warga asing tampak lebih sibuk daripada bulan-bulan biasa."
            }
          ]
        }
      ]
    },

  {
      id:"GR-N1-153",
      level:"N1",
      title:"〜によるところが大きい",
      summary:"Pola N1 〜によるところが大きい dalam konteks alami sehari-hari dan formal.",
      groups:[
        {
          name:"〜によるところが大きい",
          description:"Pola N1 〜によるところが大きい dalam konteks alami sehari-hari dan formal.",
          sentences:[
            {
              jp:"今回の成功は、現場の判断によるところが大きい。",
              kana:"こんかいのせいこうは、げんばのはんだんによるところがおおきい。",
              romaji:"Konkainoseikouha、genbanohandanniyorutokorogaookii。",
              meaning:"Keberhasilan kali ini sangat bergantung pada keputusan di lapangan."
            },
            {
              jp:"この店の人気は、立地によるところが大きい。",
              kana:"このみせのにんきは、りっちによるところがおおきい。",
              romaji:"Konomisenoninkiha、ritchiniyorutokorogaookii。",
              meaning:"Popularitas toko ini sangat dipengaruhi lokasinya."
            },
            {
              jp:"外国語学習の伸びは、毎日の積み重ねによるところが大きい。",
              kana:"がいこくごがくしゅうののびは、まいにちのつみかさねによるところがおおきい。",
              romaji:"Gaikokugogakushuunonobiha、mainichinotsumikasaneniyorutokorogaookii。",
              meaning:"Perkembangan belajar bahasa asing sangat bergantung pada latihan harian."
            },
            {
              jp:"満足度の差は、最初の案内によるところが大きい。",
              kana:"まんぞくどのさは、さいしょのあんないによるところがおおきい。",
              romaji:"Manzokudonosaha、saishonoannainiyorutokorogaookii。",
              meaning:"Perbedaan tingkat kepuasan sangat dipengaruhi penjelasan awal."
            },
            {
              jp:"その選手の活躍は、日々の体調管理によるところが大きい。",
              kana:"そのせんしゅのかつやくは、ひびのたいちょうかんりによるところがおおきい。",
              romaji:"Sonosenshunokatsuyakuha、hibinotaichoukanriniyorutokorogaookii。",
              meaning:"Performa atlet itu sangat bergantung pada pengelolaan kondisi tubuh sehari-hari."
            }
          ]
        }
      ]
    },

  {
      id:"GR-N1-154",
      level:"N1",
      title:"〜の至り",
      summary:"Pola N1 〜の至り dalam konteks alami sehari-hari dan formal.",
      groups:[
        {
          name:"〜の至り",
          description:"Pola N1 〜の至り dalam konteks alami sehari-hari dan formal.",
          sentences:[
            {
              jp:"このようなお言葉をいただき、光栄の至りです。",
              kana:"このようなおことばをいただき、こうえいのいたりです。",
              romaji:"Konoyounaokotobawoitadaki、koueinoitaridesu。",
              meaning:"Saya merasa sangat terhormat menerima kata-kata seperti ini."
            },
            {
              jp:"ご迷惑をおかけし、恐縮の至りです。",
              kana:"ごめいわくをおかけし、きょうしゅくのいたりです。",
              romaji:"Gomeiwakuwookakeshi、kyoushukunoitaridesu。",
              meaning:"Saya sungguh merasa sangat tidak enak telah merepotkan Anda."
            },
            {
              jp:"未熟者ながら表彰までいただき、感激の至りです。",
              kana:"みじゅくものながらひょうしょうまでいただき、かんげきのいたりです。",
              romaji:"Mijukumononagarahyoushoumadeitadaki、kangekinoitaridesu。",
              meaning:"Walau masih belum matang, saya sangat terharu sampai mendapat penghargaan."
            },
            {
              jp:"長年の夢がかなって、喜びの至りだ。",
              kana:"ながねんのゆめがかなって、よろこびのいたりだ。",
              romaji:"Naganennoyumegakanatte、yorokobinoitarida。",
              meaning:"Mimpi bertahun-tahun terwujud, saya sangat bahagia."
            },
            {
              jp:"皆様に支えられて今日を迎えられたことは、感謝の至りです。",
              kana:"みなさまにささえられてきょうをむかえられたことは、かんしゃのいたりです。",
              romaji:"Minasamanisasaeraretekyouwomukaeraretakotoha、kanshanoitaridesu。",
              meaning:"Bisa sampai pada hari ini berkat dukungan semua orang benar-benar membuat saya sangat bersyukur."
            }
          ]
        }
      ]
    },

  {
      id:"GR-N1-155",
      level:"N1",
      title:"〜の極み",
      summary:"Pola N1 〜の極み dalam konteks alami sehari-hari dan formal.",
      groups:[
        {
          name:"〜の極み",
          description:"Pola N1 〜の極み dalam konteks alami sehari-hari dan formal.",
          sentences:[
            {
              jp:"大勢の前で転んでしまい、恥ずかしさの極みだった。",
              kana:"おおぜいのまえでころんでしまい、はずかしさのきわみだった。",
              romaji:"Oozeinomaedekorondeshimai、hazukashisanokiwamidatta。",
              meaning:"Jatuh di depan banyak orang benar-benar puncak rasa malu."
            },
            {
              jp:"この暑さの中で歩き回るのは疲労の極みだ。",
              kana:"このあつさのなかであるきまわるのはひろうのきわみだ。",
              romaji:"Konoatsusanonakadearukimawarunohahirounokiwamida。",
              meaning:"Berjalan ke sana kemari dalam panas seperti ini benar-benar puncak kelelahan."
            },
            {
              jp:"大事な書類を失くすなんて、不注意の極みだ。",
              kana:"だいじなしょるいをなくすなんて、ふちゅういのきわみだ。",
              romaji:"Daijinashoruiwonakusunante、fuchuuinokiwamida。",
              meaning:"Sampai kehilangan dokumen penting benar-benar puncak keteledoran."
            },
            {
              jp:"信頼していた人にだまされて、悔しさの極みだった。",
              kana:"しんらいしていたにんにだまされて、くやしさのきわみだった。",
              romaji:"Shinraishiteitaninnidamasarete、kuyashisanokiwamidatta。",
              meaning:"Tertipu oleh orang yang dipercaya benar-benar puncak kekecewaan."
            },
            {
              jp:"こんなに静かな図書館は快適さの極みだ。",
              kana:"こんなにしずかなとしょかんはかいてきさのきわみだ。",
              romaji:"Konnanishizukanatoshokanhakaitekisanokiwamida。",
              meaning:"Perpustakaan setenang ini adalah puncak kenyamanan."
            }
          ]
        }
      ]
    },

  {
      id:"GR-N1-156",
      level:"N1",
      title:"〜のも無理はない",
      summary:"Pola N1 〜のも無理はない dalam konteks alami sehari-hari dan formal.",
      groups:[
        {
          name:"〜のも無理はない",
          description:"Pola N1 〜のも無理はない dalam konteks alami sehari-hari dan formal.",
          sentences:[
            {
              jp:"初めての面接で緊張するのも無理はない。",
              kana:"はじめてのめんせつできんちょうするのもむりはない。",
              romaji:"Hajimetenomensetsudekinchousurunomomurihanai。",
              meaning:"Wajar kalau gugup saat wawancara pertama."
            },
            {
              jp:"電車が止まれば、みんなが焦るのも無理はない。",
              kana:"でんしゃがとまれば、みんながあせるのもむりはない。",
              romaji:"Denshagatomareba、minnagaaserunomomurihanai。",
              meaning:"Kalau kereta berhenti beroperasi, wajar kalau semua panik."
            },
            {
              jp:"急な値上げに不満が出るのも無理はない。",
              kana:"きゅうなねあげにふまんがでるのもむりはない。",
              romaji:"Kyuunaneagenifumangaderunomomurihanai。",
              meaning:"Wajar kalau muncul ketidakpuasan terhadap kenaikan harga mendadak."
            },
            {
              jp:"母国を離れて寂しくなるのも無理はない。",
              kana:"ぼこくをはなれてさびしくなるのもむりはない。",
              romaji:"Bokokuwohanaretesabishikunarunomomurihanai。",
              meaning:"Wajar kalau merasa kesepian saat tinggal jauh dari negara asal."
            },
            {
              jp:"あの量の仕事を前にして気が重くなるのも無理はない。",
              kana:"あのりょうのしごとをまえにしてきがおもくなるのもむりはない。",
              romaji:"Anoryounoshigotowomaenishitekigaomokunarunomomurihanai。",
              meaning:"Wajar kalau merasa berat melihat pekerjaan sebanyak itu."
            }
          ]
        }
      ]
    },

  {
      id:"GR-N1-157",
      level:"N1",
      title:"〜のをいいことに",
      summary:"Pola N1 〜のをいいことに dalam konteks alami sehari-hari dan formal.",
      groups:[
        {
          name:"〜のをいいことに",
          description:"Pola N1 〜のをいいことに dalam konteks alami sehari-hari dan formal.",
          sentences:[
            {
              jp:"相手がやさしいのをいいことに、何度も頼みごとをしていた。",
              kana:"あいてがやさしいのをいいことに、なんどもたのみごとをしていた。",
              romaji:"Aitegayasashiinowoiikotoni、nandomotanomigotowoshiteita。",
              meaning:"Karena tahu lawannya baik, dia terus-menerus meminta tolong."
            },
            {
              jp:"店長が不在なのをいいことに、みんな少し気が緩んでいた。",
              kana:"てんちょうがふざいなのをいいことに、みんなすこしきがゆるんでいた。",
              romaji:"Tenchougafuzainanowoiikotoni、minnasukoshikigayurundeita。",
              meaning:"Karena manajer toko tidak ada, semua agak lengah."
            },
            {
              jp:"子どもが寝ているのをいいことに、急いで家事を片づけた。",
              kana:"こどもがねているのをいいことに、いそいでかじをかたづけた。",
              romaji:"Kodomoganeteirunowoiikotoni、isoidekajiwokatazuketa。",
              meaning:"Memanfaatkan saat anak sedang tidur, saya cepat-cepat menyelesaikan pekerjaan rumah."
            },
            {
              jp:"外国人だと分からないのをいいことに、高い料金を請求するのはひどい。",
              kana:"がいこくじんだとわからないのをいいことに、たかいりょうきんをせいきゅうするのはひどい。",
              romaji:"Gaikokujindatowakaranainowoiikotoni、takairyoukinwoseikyuusurunohahidoi。",
              meaning:"Memanfaatkan ketidaktahuan orang asing lalu menagih biaya mahal itu keterlaluan."
            },
            {
              jp:"親しい仲なのをいいことに、言いすぎるのはよくない。",
              kana:"したしいなかなのをいいことに、いいすぎるのはよくない。",
              romaji:"Shitashiinakananowoiikotoni、iisugirunohayokunai。",
              meaning:"Memanfaatkan kedekatan lalu bicara kelewat jauh itu tidak baik."
            }
          ]
        }
      ]
    },

  {
      id:"GR-N1-158",
      level:"N1",
      title:"〜は〜てのことだ",
      summary:"Pola N1 〜は〜てのことだ dalam konteks alami sehari-hari dan formal.",
      groups:[
        {
          name:"〜は〜てのことだ",
          description:"Pola N1 〜は〜てのことだ dalam konteks alami sehari-hari dan formal.",
          sentences:[
            {
              jp:"合格できたのは、毎日続けてのことだ。",
              kana:"ごうかくできたのは、まいにちつづけてのことだ。",
              romaji:"Goukakudekitanoha、mainichitsuzuketenokotoda。",
              meaning:"Bisa lulus itu terjadi karena terus belajar setiap hari."
            },
            {
              jp:"安心して任せられるのは、普段から信頼していてのことだ。",
              kana:"あんしんしてまかせられるのは、ふだんからしんらいしていてのことだ。",
              romaji:"Anshinshitemakaserarerunoha、fudankarashinraishiteitenokotoda。",
              meaning:"Bisa mempercayakan dengan tenang itu karena hubungan saling percaya sudah dibangun sehari-hari."
            },
            {
              jp:"この売上は、地元の人が通ってくれてのことだ。",
              kana:"このうりあげは、じもとのにんがとおってくれてのことだ。",
              romaji:"Konouriageha、jimotononingatoottekuretenokotoda。",
              meaning:"Penjualan ini tercapai karena warga sekitar terus datang."
            },
            {
              jp:"家族が支えてくれてのことだと、本人も話していた。",
              kana:"かぞくがささえてくれてのことだと、ほんにんもはなしていた。",
              romaji:"Kazokugasasaetekuretenokotodato、honninmohanashiteita。",
              meaning:"Dia sendiri juga bilang bahwa semua ini terjadi karena keluarga mendukung."
            },
            {
              jp:"今の自分があるのは、先生方の指導あってのことだ。",
              kana:"いまのじぶんがあるのは、せんせいがたのしどうあってのことだ。",
              romaji:"Imanojibungaarunoha、senseigatanoshidouattenokotoda。",
              meaning:"Diri saya yang sekarang ada karena bimbingan para guru."
            }
          ]
        }
      ]
    },

  {
      id:"GR-N1-159",
      level:"N1",
      title:"〜はおろか",
      summary:"Pola N1 〜はおろか dalam konteks alami sehari-hari dan formal.",
      groups:[
        {
          name:"〜はおろか",
          description:"Pola N1 〜はおろか dalam konteks alami sehari-hari dan formal.",
          sentences:[
            {
              jp:"忙しくて昼ごはんはおろか、水を飲む時間もなかった。",
              kana:"いそがしくてひるごはんはおろか、みずをのむじかんもなかった。",
              romaji:"Isogashikutehirugohanhaoroka、mizuwonomujikanmonakatta。",
              meaning:"Saking sibuknya, makan siang saja tidak sempat, apalagi minum air."
            },
            {
              jp:"今年は旅行はおろか、近場の外出もあまりしていない。",
              kana:"こんねんはりょこうはおろか、ちかばのがいしゅつもあまりしていない。",
              romaji:"Konnenharyokouhaoroka、chikabanogaishutsumoamarishiteinai。",
              meaning:"Tahun ini jangankan bepergian jauh, keluar dekat rumah saja jarang."
            },
            {
              jp:"彼は英語はおろか、日本語の敬語まで上手だ。",
              kana:"かれはえいごはおろか、にほんごのけいごまでじょうずだ。",
              romaji:"Karehaeigohaoroka、nihongonokeigomadejouzuda。",
              meaning:"Jangankan bahasa Inggris, keigo bahasa Jepangnya pun bagus."
            },
            {
              jp:"引っ越し直後は家具はおろか、カーテンもそろっていなかった。",
              kana:"ひっこしちょくごはかぐはおろか、かーてんもそろっていなかった。",
              romaji:"Hikkoshichokugohakaguhaoroka、kaatenmosorotteinakatta。",
              meaning:"Setelah baru pindah, jangankan perabot, gorden saja belum lengkap."
            },
            {
              jp:"その日は休憩はおろか、座る時間さえなかった。",
              kana:"そのにちはきゅうけいはおろか、すわるじかんさえなかった。",
              romaji:"Sononichihakyuukeihaoroka、suwarujikansaenakatta。",
              meaning:"Hari itu jangankan istirahat, waktu duduk pun tidak ada."
            }
          ]
        }
      ]
    },

  {
      id:"GR-N1-160",
      level:"N1",
      title:"〜ばこそ",
      summary:"Pola N1 〜ばこそ dalam konteks alami sehari-hari dan formal.",
      groups:[
        {
          name:"〜ばこそ",
          description:"Pola N1 〜ばこそ dalam konteks alami sehari-hari dan formal.",
          sentences:[
            {
              jp:"信頼があればこそ、ここまで任せてもらえる。",
              kana:"しんらいがあればこそ、ここまでまかせてもらえる。",
              romaji:"Shinraigaarebakoso、kokomademakasetemoraeru。",
              meaning:"Justru karena ada kepercayaan, saya bisa diberi tanggung jawab sejauh ini."
            },
            {
              jp:"若いうちに挑戦すればこそ、見える景色もある。",
              kana:"わかいうちにちょうせんすればこそ、みえるけしきもある。",
              romaji:"Wakaiuchinichousensurebakoso、mierukeshikimoaru。",
              meaning:"Justru karena mencoba saat masih muda, ada hal-hal yang bisa terlihat."
            },
            {
              jp:"地域の支えがあればこそ、この祭りは続いている。",
              kana:"ちいきのささえがあればこそ、このまつりはつづいている。",
              romaji:"Chiikinosasaegaarebakoso、konomatsurihatsuzuiteiru。",
              meaning:"Justru karena dukungan warga, festival ini terus berlanjut."
            },
            {
              jp:"厳しく指導してくれればこそ、今の成長がある。",
              kana:"いかめしくしどうしてくれればこそ、いまのせいちょうがある。",
              romaji:"Ikameshikushidoushitekurerebakoso、imanoseichougaaru。",
              meaning:"Justru karena dibimbing dengan tegas, saya bisa berkembang seperti sekarang."
            },
            {
              jp:"日頃から備えていればこそ、非常時にも落ち着ける。",
              kana:"ひごろからそなえていればこそ、ひじょうじにもおちつける。",
              romaji:"Higorokarasonaeteirebakoso、hijoujinimoochitsukeru。",
              meaning:"Justru karena terbiasa bersiap setiap hari, kita bisa tenang saat darurat."
            }
          ]
        }
      ]
    },

  {
      id:"GR-N1-161",
      level:"N1",
      title:"〜はさておき",
      summary:"Pola N1 〜はさておき dalam konteks alami sehari-hari dan formal.",
      groups:[
        {
          name:"〜はさておき",
          description:"Pola N1 〜はさておき dalam konteks alami sehari-hari dan formal.",
          sentences:[
            {
              jp:"細かい点はさておき、まず全体の流れを確認しよう。",
              kana:"こまかいてんはさておき、まずぜんたいのながれをかくにんしよう。",
              romaji:"Komakaitenhasateoki、mazuzentainonagarewokakuninshiyou。",
              meaning:"Hal-hal kecil kita kesampingkan dulu, mari cek alur keseluruhannya."
            },
            {
              jp:"冗談はさておき、そろそろ本題に入ろう。",
              kana:"じょうだんはさておき、そろそろほんだいにいろう。",
              romaji:"Joudanhasateoki、sorosorohondainiirou。",
              meaning:"Bercandanya cukup dulu, mari masuk ke pokok pembicaraan."
            },
            {
              jp:"好き嫌いはさておき、この案は現実的だ。",
              kana:"すききらいはさておき、このあんはげんじつてきだ。",
              romaji:"Sukikiraihasateoki、konoanhagenjitsutekida。",
              meaning:"Terlepas dari suka atau tidak, rencana ini realistis."
            },
            {
              jp:"理由はさておき、結果として改善は必要だ。",
              kana:"りゆうはさておき、けっかとしてかいぜんはひつようだ。",
              romaji:"Riyuuhasateoki、kekkatoshitekaizenhahitsuyouda。",
              meaning:"Alasannya kita kesampingkan dulu, yang jelas hasilnya tetap perlu diperbaiki."
            },
            {
              jp:"見た目はさておき、使いやすさはかなり高い。",
              kana:"みためはさておき、つかいやすさはかなりたかい。",
              romaji:"Mitamehasateoki、tsukaiyasusahakanaritakai。",
              meaning:"Soal tampilan kita kesampingkan dulu, yang jelas kemudahan pakainya cukup tinggi."
            }
          ]
        }
      ]
    },

  {
      id:"GR-N1-162",
      level:"N1",
      title:"〜ばそれまでだ / 〜たらそれまでだ",
      summary:"Pola N1 〜ばそれまでだ / 〜たらそれまでだ dalam konteks alami sehari-hari dan formal.",
      groups:[
        {
          name:"〜ばそれまでだ / 〜たらそれまでだ",
          description:"Pola N1 〜ばそれまでだ / 〜たらそれまでだ dalam konteks alami sehari-hari dan formal.",
          sentences:[
            {
              jp:"途中であきらめてしまえばそれまでだ。",
              kana:"とちゅうであきらめてしまえばそれまでだ。",
              romaji:"Tochuudeakirameteshimaebasoremadeda。",
              meaning:"Kalau menyerah di tengah jalan, ya semuanya selesai di situ."
            },
            {
              jp:"信頼を失ったらそれまでだと、店長はよく言う。",
              kana:"しんらいをうったらそれまでだと、てんちょうはよくいう。",
              romaji:"Shinraiwoutsutarasoremadedato、tenchouhayokuiu。",
              meaning:"Kalau sampai kehilangan kepercayaan, tamat sudah, begitu kata manajer toko."
            },
            {
              jp:"申請期限を過ぎればそれまでなので、今日中に出したい。",
              kana:"しんせいきげんをすぎればそれまでなので、きょうじゅうにだしたい。",
              romaji:"Shinseikigenwosugirebasoremadenanode、kyoujuunidashitai。",
              meaning:"Kalau tenggat pengajuan lewat, ya sudah selesai, jadi saya ingin menyerahkannya hari ini."
            },
            {
              jp:"安全確認を怠ったらそれまでだ。",
              kana:"あんぜんかくにんをおこたったらそれまでだ。",
              romaji:"Anzenkakuninwookotatsutarasoremadeda。",
              meaning:"Kalau mengabaikan pengecekan keselamatan, akibatnya bisa fatal."
            },
            {
              jp:"チャンスが来ても動かなければそれまでだ。",
              kana:"ちゃんすがきてもうごかなければそれまでだ。",
              romaji:"Chansugakitemougokanakerebasoremadeda。",
              meaning:"Kalau kesempatan datang lalu kita tidak bergerak, ya selesai di situ."
            }
          ]
        }
      ]
    },

  {
      id:"GR-N1-163",
      level:"N1",
      title:"〜羽目になる",
      summary:"Pola N1 〜羽目になる dalam konteks alami sehari-hari dan formal.",
      groups:[
        {
          name:"〜羽目になる",
          description:"Pola N1 〜羽目になる dalam konteks alami sehari-hari dan formal.",
          sentences:[
            {
              jp:"終電を逃して、駅で朝まで待つ羽目になった。",
              kana:"しゅうでんをのがして、えきであさまでまつはめになった。",
              romaji:"Shuudenwonogashite、ekideasamadematsuhameninatta。",
              meaning:"Saya ketinggalan kereta terakhir dan akhirnya harus menunggu di stasiun sampai pagi."
            },
            {
              jp:"準備不足で、発表中に何度も言い直す羽目になった。",
              kana:"じゅんびぶそくで、はっぴょうなかになんどもいいなおすはめになった。",
              romaji:"Junbibusokude、happyounakaninandomoiinaosuhameninatta。",
              meaning:"Karena persiapan kurang, saya akhirnya harus berkali-kali mengulang saat presentasi."
            },
            {
              jp:"鍵を忘れて、大家さんを呼ぶ羽目になった。",
              kana:"かぎをわすれて、おおやさんをよぶはめになった。",
              romaji:"Kagiwowasurete、ooyasanwoyobuhameninatta。",
              meaning:"Karena lupa kunci, saya akhirnya harus memanggil pemilik apartemen."
            },
            {
              jp:"急な雨で、コンビニで傘を買う羽目になった。",
              kana:"きゅうなあめで、こんびにでかさをかうはめになった。",
              romaji:"Kyuunaamede、konbinidekasawokauhameninatta。",
              meaning:"Karena hujan mendadak, saya akhirnya harus membeli payung di konbini."
            },
            {
              jp:"書類の不備が見つかって、もう一度区役所へ行く羽目になった。",
              kana:"しょるいのふびがみつかって、もういちどくやくしょへいくはめになった。",
              romaji:"Shoruinofubigamitsukatte、mouichidokuyakushoheikuhameninatta。",
              meaning:"Karena ditemukan kekurangan dokumen, saya akhirnya harus ke balai kota sekali lagi."
            }
          ]
        }
      ]
    },

  {
      id:"GR-N1-165",
      level:"N1",
      title:"〜べからず / 〜べからざる",
      summary:"Pola N1 〜べからず / 〜べからざる dalam konteks alami sehari-hari dan formal.",
      groups:[
        {
          name:"〜べからず / 〜べからざる",
          description:"Pola N1 〜べからず / 〜べからざる dalam konteks alami sehari-hari dan formal.",
          sentences:[
            {
              jp:"関係者以外立ち入るべからずと書かれていた。",
              kana:"かんけいしゃいがいたちいるべからずとかかれていた。",
              romaji:"Kankeishaigaitachiirubekarazutokakareteita。",
              meaning:"Tertulis bahwa selain pihak terkait dilarang masuk."
            },
            {
              jp:"この資料は社外に持ち出すべからざるものだ。",
              kana:"このしりょうはしゃがいにもちだすべからざるものだ。",
              romaji:"Konoshiryouhashagainimochidasubekarazarumonoda。",
              meaning:"Dokumen ini adalah hal yang tidak boleh dibawa keluar perusahaan."
            },
            {
              jp:"試験中、携帯電話を使うべからず。",
              kana:"しけんちゅう、けいたいでんわをつかうべからず。",
              romaji:"Shikenchuu、keitaidenwawotsukaubekarazu。",
              meaning:"Saat ujian, ponsel dilarang digunakan."
            },
            {
              jp:"公共の場で他人を撮影するべからざる場合もある。",
              kana:"こうきょうのばでたにんをさつえいするべからざるばあいもある。",
              romaji:"Koukyounobadetaninwosatsueisurubekarazarubaaimoaru。",
              meaning:"Ada situasi di tempat umum di mana memotret orang lain tidak boleh dilakukan."
            },
            {
              jp:"ここは駐車すべからずの区域です。",
              kana:"ここはちゅうしゃすべからずのくいきです。",
              romaji:"Kokohachuushasubekarazunokuikidesu。",
              meaning:"Ini adalah area di mana parkir dilarang."
            }
          ]
        }
      ]
    },

  {
      id:"GR-N1-168",
      level:"N1",
      title:"〜べく",
      summary:"Pola N1 〜べく dalam konteks alami sehari-hari dan formal.",
      groups:[
        {
          name:"〜べく",
          description:"Pola N1 〜べく dalam konteks alami sehari-hari dan formal.",
          sentences:[
            {
              jp:"状況を確認すべく、担当者に電話した。",
              kana:"じょうきょうをかくにんすべく、たんとうしゃにでんわした。",
              romaji:"Joukyouwokakuninsubeku、tantoushanidenwashita。",
              meaning:"Untuk memastikan situasinya, saya menelepon penanggung jawab."
            },
            {
              jp:"問題を解決すべく、チームで集まって話し合った。",
              kana:"もんだいをかいけつすべく、ちーむであつまってはなしあった。",
              romaji:"Mondaiwokaiketsusubeku、chiimudeatsumattehanashiatsuta。",
              meaning:"Untuk menyelesaikan masalah, tim berkumpul dan berdiskusi."
            },
            {
              jp:"新しい生活に慣れるべく、近所を歩いてみた。",
              kana:"あたらしいせいかつになれるべく、きんじょをあるいてみた。",
              romaji:"Atarashiiseikatsuninarerubeku、kinjowoaruitemita。",
              meaning:"Agar terbiasa dengan kehidupan baru, saya mencoba berjalan-jalan di sekitar rumah."
            },
            {
              jp:"誤解を避けるべく、表現を少し変えた。",
              kana:"ごかいをさけるべく、ひょうげんをすこしかえた。",
              romaji:"Gokaiwosakerubeku、hyougenwosukoshikaeta。",
              meaning:"Untuk menghindari salah paham, saya mengubah sedikit ungkapannya."
            },
            {
              jp:"安全を守るべく、駅では案内が何度も流れていた。",
              kana:"あんぜんをまもるべく、えきではあんないがなんどもながれていた。",
              romaji:"Anzenwomamorubeku、ekidehaannaiganandomonagareteita。",
              meaning:"Untuk menjaga keselamatan, pengumuman di stasiun diputar berkali-kali."
            }
          ]
        }
      ]
    },

  {
      id:"GR-N1-169",
      level:"N1",
      title:"〜べくして",
      summary:"Pola N1 〜べくして dalam konteks alami sehari-hari dan formal.",
      groups:[
        {
          name:"〜べくして",
          description:"Pola N1 〜べくして dalam konteks alami sehari-hari dan formal.",
          sentences:[
            {
              jp:"起こるべくして起きたミスだと思う。",
              kana:"おこるべくしておきたみすだとおもう。",
              romaji:"Okorubekushiteokitamisudatoomou。",
              meaning:"Menurut saya, ini adalah kesalahan yang memang hampir pasti terjadi."
            },
            {
              jp:"長年の努力の末の合格は、得るべくして得た結果だ。",
              kana:"ながねんのどりょくのまつのごうかくは、えるべくしてえたけっかだ。",
              romaji:"Naganennodoryokunomatsunogoukakuha、erubekushiteetakekkada。",
              meaning:"Kelulusan setelah usaha bertahun-tahun adalah hasil yang memang layak didapat."
            },
            {
              jp:"準備不足で起きた混乱は、起こるべくして起きた。",
              kana:"じゅんびぶそくでおきたこんらんは、おこるべくしておきた。",
              romaji:"Junbibusokudeokitakonranha、okorubekushiteokita。",
              meaning:"Kekacauan yang terjadi karena kurang persiapan memang sesuatu yang bisa diduga terjadi."
            },
            {
              jp:"この人気は、評価されるべくして評価されたと言える。",
              kana:"このにんきは、ひょうかされるべくしてひょうかされたといえる。",
              romaji:"Kononinkiha、hyoukasarerubekushitehyoukasaretatoieru。",
              meaning:"Popularitas ini bisa dibilang memang terjadi karena layak dihargai."
            },
            {
              jp:"地域に必要とされるべくして残った店なのだろう。",
              kana:"ちいきにひつようとされるべくしてのこったみせなのだろう。",
              romaji:"Chiikinihitsuyoutosarerubekushitenokotsutamisenanodarou。",
              meaning:"Mungkin toko itu bertahan karena memang dibutuhkan warga sekitar."
            }
          ]
        }
      ]
    },

  {
      id:"GR-N1-170",
      level:"N1",
      title:"〜べくもない",
      summary:"Pola N1 〜べくもない dalam konteks alami sehari-hari dan formal.",
      groups:[
        {
          name:"〜べくもない",
          description:"Pola N1 〜べくもない dalam konteks alami sehari-hari dan formal.",
          sentences:[
            {
              jp:"忙しそうな様子では、今は頼めるべくもない。",
              kana:"いそがしそうなようすでは、いまはたのめるべくもない。",
              romaji:"Isogashisounayousudeha、imahatanomerubekumonai。",
              meaning:"Melihat dia sangat sibuk, sekarang rasanya tidak mungkin meminta bantuan."
            },
            {
              jp:"あの混雑では、座れるべくもない。",
              kana:"あのこんざつでは、すわれるべくもない。",
              romaji:"Anokonzatsudeha、suwarerubekumonai。",
              meaning:"Dengan keramaian seperti itu, jelas tidak mungkin mendapat tempat duduk."
            },
            {
              jp:"説明が少なすぎて、事情を知るべくもなかった。",
              kana:"せつめいがずくなすぎて、じじょうをしるべくもなかった。",
              romaji:"Setsumeigazukunasugite、jijouwoshirubekumonakatta。",
              meaning:"Karena penjelasannya terlalu sedikit, saya sama sekali tidak mungkin mengetahui keadaannya."
            },
            {
              jp:"初めて来た場所なので、道順など分かるべくもない。",
              kana:"はじめてきたばしょなので、みちじゅんなどわかるべくもない。",
              romaji:"Hajimetekitabashonanode、michijunnadowakarubekumonai。",
              meaning:"Karena ini tempat yang baru pertama kali saya datangi, tentu saya tidak mungkin tahu jalannya."
            },
            {
              jp:"本人が何を考えているのか、外からは知るべくもない。",
              kana:"ほんにんがなにをかんがえているのか、そとからはしるべくもない。",
              romaji:"Honningananiwokangaeteirunoka、sotokarahashirubekumonai。",
              meaning:"Dari luar, mustahil mengetahui apa yang sedang dia pikirkan."
            }
          ]
        }
      ]
    },

  {
      id:"GR-N1-174",
      level:"N1",
      title:"〜まじき",
      summary:"Pola N1 〜まじき dalam konteks alami sehari-hari dan formal.",
      groups:[
        {
          name:"〜まじき",
          description:"Pola N1 〜まじき dalam konteks alami sehari-hari dan formal.",
          sentences:[
            {
              jp:"学生にあるまじき態度だと注意された。",
              kana:"がくせいにあるまじきたいどだとちゅういされた。",
              romaji:"Gakuseiniarumajikitaidodatochuuisareta。",
              meaning:"Saya ditegur karena dianggap bersikap tidak pantas bagi seorang pelajar."
            },
            {
              jp:"公務員にあるまじき発言として問題になった。",
              kana:"こうむいんにあるまじきはつげんとしてもんだいになった。",
              romaji:"Koumuinniarumajikihatsugentoshitemondaininatta。",
              meaning:"Hal itu menjadi masalah karena dianggap ucapan yang tidak pantas bagi pegawai negeri."
            },
            {
              jp:"専門家にあるまじき初歩的なミスだ。",
              kana:"せんもんかにあるまじきしょほてきなみすだ。",
              romaji:"Senmonkaniarumajikishohotekinamisuda。",
              meaning:"Itu kesalahan mendasar yang tidak pantas bagi seorang ahli."
            },
            {
              jp:"責任者として取るまじき行動だったと思う。",
              kana:"せきにんしゃとしてとるまじきこうどうだったとおもう。",
              romaji:"Sekininshatoshitetorumajikikoudoudattatoomou。",
              meaning:"Menurut saya itu tindakan yang tidak pantas diambil seorang penanggung jawab."
            },
            {
              jp:"客に向けるまじき言い方だ。",
              kana:"きゃくにむけるまじきいいかただ。",
              romaji:"Kyakunimukerumajikiiikatada。",
              meaning:"Itu cara bicara yang tidak pantas diarahkan kepada pelanggan."
            }
          ]
        }
      ]
    },

  {
      id:"GR-N1-175",
      level:"N1",
      title:"〜までだ / までのことだ",
      summary:"Pola N1 〜までだ / までのことだ dalam konteks alami sehari-hari dan formal.",
      groups:[
        {
          name:"〜までだ / までのことだ",
          description:"Pola N1 〜までだ / までのことだ dalam konteks alami sehari-hari dan formal.",
          sentences:[
            {
              jp:"だめなら別の方法を試すまでだ。",
              kana:"だめならべつのほうほうをためすまでだ。",
              romaji:"Damenarabetsunohouhouwotamesumadeda。",
              meaning:"Kalau tidak berhasil, tinggal mencoba cara lain."
            },
            {
              jp:"電車がないなら歩いて帰るまでだ。",
              kana:"でんしゃがないならあるいてかえるまでだ。",
              romaji:"Denshaganainaraaruitekaerumadeda。",
              meaning:"Kalau tidak ada kereta, tinggal pulang dengan berjalan kaki."
            },
            {
              jp:"断られたらまた出直すまでのことだ。",
              kana:"ことわられたらまたでなおすまでのことだ。",
              romaji:"Kotowararetaramatadenaosumadenokotoda。",
              meaning:"Kalau ditolak, ya tinggal datang lagi lain waktu."
            },
            {
              jp:"必要なら休日に作業するまでだ。",
              kana:"ひつようならきゅうじつにさぎょうするまでだ。",
              romaji:"Hitsuyounarakyuujitsunisagyousurumadeda。",
              meaning:"Kalau memang perlu, tinggal bekerja saat hari libur."
            },
            {
              jp:"家賃が合わないなら、別の部屋を探すまでだ。",
              kana:"やちんがあわないなら、べつのへやをさがすまでだ。",
              romaji:"Yachingaawanainara、betsunoheyawosagasumadeda。",
              meaning:"Kalau sewanya tidak cocok, tinggal cari kamar lain."
            }
          ]
        }
      ]
    },

  {
      id:"GR-N1-176",
      level:"N1",
      title:"〜までもない / までもなく",
      summary:"Pola N1 〜までもない / までもなく dalam konteks alami sehari-hari dan formal.",
      groups:[
        {
          name:"〜までもない / までもなく",
          description:"Pola N1 〜までもない / までもなく dalam konteks alami sehari-hari dan formal.",
          sentences:[
            {
              jp:"言うまでもなく、安全確認が最優先だ。",
              kana:"いうまでもなく、あんぜんかくにんがさいゆうせんだ。",
              romaji:"Iumademonaku、anzenkakuningasaiyuusenda。",
              meaning:"Tak perlu dikatakan lagi, pengecekan keselamatan adalah prioritas utama."
            },
            {
              jp:"説明するまでもなく、彼が一番詳しい。",
              kana:"せつめいするまでもなく、かれがいちばんくわしい。",
              romaji:"Setsumeisurumademonaku、karegaichibankuwashii。",
              meaning:"Tanpa perlu dijelaskan lagi, dialah yang paling paham."
            },
            {
              jp:"改めて言うまでもないが、遅刻は厳禁だ。",
              kana:"あらためていうまでもないが、ちこくはげんきんだ。",
              romaji:"Aratameteiumademonaiga、chikokuhagenkinda。",
              meaning:"Tak perlu diulang lagi, terlambat itu dilarang keras."
            },
            {
              jp:"駅から近いので、車で行くまでもない。",
              kana:"えきからちかいので、くるまでいくまでもない。",
              romaji:"Ekikarachikainode、kurumadeikumademonai。",
              meaning:"Karena dekat dari stasiun, tidak perlu pergi dengan mobil."
            },
            {
              jp:"通知を見るまでもなく、結果は雰囲気で分かった。",
              kana:"つうちをみるまでもなく、けっかはふんいきでわかった。",
              romaji:"Tsuuchiwomirumademonaku、kekkahafun'ikidewakatta。",
              meaning:"Tanpa melihat pemberitahuan pun, hasilnya terasa sudah bisa ditebak."
            }
          ]
        }
      ]
    },

  {
      id:"GR-N1-177",
      level:"N1",
      title:"〜まみれ",
      summary:"Pola N1 〜まみれ dalam konteks alami sehari-hari dan formal.",
      groups:[
        {
          name:"〜まみれ",
          description:"Pola N1 〜まみれ dalam konteks alami sehari-hari dan formal.",
          sentences:[
            {
              jp:"雨で靴が泥まみれになった。",
              kana:"あめでくつがなずまみれになった。",
              romaji:"Amedekutsuganazumamireninatta。",
              meaning:"Sepatu saya penuh lumpur karena hujan."
            },
            {
              jp:"年末の大掃除で服がほこりまみれになった。",
              kana:"ねんまつのおおそうじでふくがほこりまみれになった。",
              romaji:"Nenmatsunooosoujidefukugahokorimamireninatta。",
              meaning:"Saat bersih-bersih akhir tahun, pakaian saya penuh debu."
            },
            {
              jp:"汗まみれで駅まで走ってきた。",
              kana:"あせまみれでえきまではしってきた。",
              romaji:"Asemamiredeekimadehashitsutekita。",
              meaning:"Saya berlari ke stasiun sampai tubuh penuh keringat."
            },
            {
              jp:"子どもたちは砂まみれになって遊んでいた。",
              kana:"こどもたちはすなまみれになってあそんでいた。",
              romaji:"Kodomotachihasunamamireninatteasondeita。",
              meaning:"Anak-anak bermain sampai tubuh mereka penuh pasir."
            },
            {
              jp:"書類仕事が続いて、机の上はメモまみれだ。",
              kana:"しょるいしごとがつづいて、つくえのうえはめもまみれだ。",
              romaji:"Shoruishigotogatsuzuite、tsukuenouehamemomamireda。",
              meaning:"Karena terus mengurus dokumen, meja saya penuh memo."
            }
          ]
        }
      ]
    },

  {
      id:"GR-N1-179",
      level:"N1",
      title:"〜もさることながら",
      summary:"Pola N1 〜もさることながら dalam konteks alami sehari-hari dan formal.",
      groups:[
        {
          name:"〜もさることながら",
          description:"Pola N1 〜もさることながら dalam konteks alami sehari-hari dan formal.",
          sentences:[
            {
              jp:"便利さもさることながら、この町は人の温かさが魅力だ。",
              kana:"べんりさもさることながら、このまちはにんのあたたかさがみりょくだ。",
              romaji:"Benrisamosarukotonagara、konomachihaninnoatatakasagamiryokuda。",
              meaning:"Selain kemudahannya, daya tarik kota ini adalah kehangatan warganya."
            },
            {
              jp:"味もさることながら、盛り付けもきれいだ。",
              kana:"あじもさることながら、もりつけもきれいだ。",
              romaji:"Ajimosarukotonagara、moritsukemokireida。",
              meaning:"Selain rasanya, penyajiannya juga indah."
            },
            {
              jp:"給料もさることながら、働きやすさを重視したい。",
              kana:"きゅうりょうもさることながら、はたらきやすさをじゅうししたい。",
              romaji:"Kyuuryoumosarukotonagara、hatarakiyasusawojuushishitai。",
              meaning:"Selain gaji, saya ingin lebih mengutamakan kenyamanan kerja."
            },
            {
              jp:"成績もさることながら、毎日続けた努力を褒めたい。",
              kana:"せいせきもさることながら、まいにちつづけたどりょくをほめたい。",
              romaji:"Seisekimosarukotonagara、mainichitsuzuketadoryokuwohometai。",
              meaning:"Selain nilainya, saya juga ingin memuji usaha yang dilakukan setiap hari."
            },
            {
              jp:"駅からの近さもさることながら、周辺環境の静かさもいい。",
              kana:"えきからのちかさもさることながら、しゅうへんかんきょうのしずかさもいい。",
              romaji:"Ekikaranochikasamosarukotonagara、shuuhenkankyounoshizukasamoii。",
              meaning:"Selain dekat dari stasiun, lingkungan sekitarnya yang tenang juga bagus."
            }
          ]
        }
      ]
    },

  {
      id:"GR-N1-180",
      level:"N1",
      title:"〜も同然だ",
      summary:"Pola N1 〜も同然だ dalam konteks alami sehari-hari dan formal.",
      groups:[
        {
          name:"〜も同然だ",
          description:"Pola N1 〜も同然だ dalam konteks alami sehari-hari dan formal.",
          sentences:[
            {
              jp:"連絡もなく一時間遅れるのは欠席も同然だ。",
              kana:"れんらくもなくいちじかんおくれるのはけっせきもどうぜんだ。",
              romaji:"Renrakumonakuichijikanokurerunohakessekimodouzenda。",
              meaning:"Terlambat satu jam tanpa kabar hampir sama saja dengan tidak hadir."
            },
            {
              jp:"この距離なら歩いても同然だ。",
              kana:"このきょりならあるいてもどうぜんだ。",
              romaji:"Konokyorinaraaruitemodouzenda。",
              meaning:"Kalau sejauh ini, hampir sama saja dengan berjalan kaki."
            },
            {
              jp:"準備をしていないまま発表するのは、無防備も同然だ。",
              kana:"じゅんびをしていないままはっぴょうするのは、むぼうびもどうぜんだ。",
              romaji:"Junbiwoshiteinaimamahappyousurunoha、muboubimodouzenda。",
              meaning:"Presentasi tanpa persiapan hampir sama saja dengan tanpa perlindungan."
            },
            {
              jp:"その条件では断られたも同然だと思う。",
              kana:"そのじょうけんではことわられたもどうぜんだとおもう。",
              romaji:"Sonojoukendehakotowararetamodouzendatoomou。",
              meaning:"Dengan syarat seperti itu, menurut saya hampir sama saja dengan ditolak."
            },
            {
              jp:"使っていない部屋だから、倉庫も同然になっている。",
              kana:"つかっていないへやだから、そうこもどうぜんになっている。",
              romaji:"Tsukatteinaiheyadakara、soukomodouzenninatteiru。",
              meaning:"Karena kamar itu tidak dipakai, jadinya hampir seperti gudang."
            }
          ]
        }
      ]
    },

  {
      id:"GR-N1-181",
      level:"N1",
      title:"〜ものと思われる / ものと見られる",
      summary:"Pola N1 〜ものと思われる / ものと見られる dalam konteks alami sehari-hari dan formal.",
      groups:[
        {
          name:"〜ものと思われる / ものと見られる",
          description:"Pola N1 〜ものと思われる / ものと見られる dalam konteks alami sehari-hari dan formal.",
          sentences:[
            {
              jp:"来月には新しい案内が出るものと思われる。",
              kana:"らいげつにはあたらしいあんないがでるものとおもわれる。",
              romaji:"Raigetsunihaatarashiiannaigaderumonotoomowareru。",
              meaning:"Diperkirakan pemberitahuan baru akan keluar bulan depan."
            },
            {
              jp:"今回の混雑は連休の影響によるものと見られる。",
              kana:"こんかいのこんざつはれんきゅうのえいきょうによるものとみられる。",
              romaji:"Konkainokonzatsuharenkyuunoeikyouniyorumonotomirareru。",
              meaning:"Keramaian kali ini diduga terjadi karena pengaruh libur panjang."
            },
            {
              jp:"近いうちに制度が見直されるものと思われる。",
              kana:"ちかいうちにせいどがみなおされるものとおもわれる。",
              romaji:"Chikaiuchiniseidogaminaosarerumonotoomowareru。",
              meaning:"Diperkirakan sistem itu akan ditinjau ulang dalam waktu dekat."
            },
            {
              jp:"現場の様子から、大きなけが人はいないものと見られる。",
              kana:"げんばのようすから、おおきなけがにんはいないものとみられる。",
              romaji:"Genbanoyousukara、ookinakeganinhainaimonotomirareru。",
              meaning:"Dari kondisi di lokasi, diduga tidak ada korban luka berat."
            },
            {
              jp:"このままいけば、予定どおり開業できるものと思われる。",
              kana:"このままいけば、よていどおりかいぎょうできるものとおもわれる。",
              romaji:"Konomamaikeba、yoteidoorikaigyoudekirumonotoomowareru。",
              meaning:"Kalau terus seperti ini, diperkirakan pembukaan bisa sesuai jadwal."
            }
          ]
        }
      ]
    },

  {
      id:"GR-N1-182",
      level:"N1",
      title:"〜ものを",
      summary:"Pola N1 〜ものを dalam konteks alami sehari-hari dan formal.",
      groups:[
        {
          name:"〜ものを",
          description:"Pola N1 〜ものを dalam konteks alami sehari-hari dan formal.",
          sentences:[
            {
              jp:"一言相談してくれれば手伝えたものを。",
              kana:"ひとことそうだんしてくれればてつだえたものを。",
              romaji:"Hitokotosoudanshitekurerebatetsudaetamonowo。",
              meaning:"Kalau saja kamu bilang satu kata, saya bisa membantu."
            },
            {
              jp:"早く出ていれば間に合ったものを、ぎりぎりまで準備していた。",
              kana:"はやくでていればまにあったものを、ぎりぎりまでじゅんびしていた。",
              romaji:"Hayakudeteirebamaniatsutamonowo、girigirimadejunbishiteita。",
              meaning:"Kalau berangkat lebih cepat pasti sempat, tetapi malah bersiap sampai mepet."
            },
            {
              jp:"あの時確認しておけば、防げたものを。",
              kana:"あのときかくにんしておけば、ふせげたものを。",
              romaji:"Anotokikakuninshiteokeba、fusegetamonowo。",
              meaning:"Kalau saat itu dicek, seharusnya bisa dicegah."
            },
            {
              jp:"説明を読めば分かったものを、思い込みで進めてしまった。",
              kana:"せつめいをよめばわかったものを、おもいこみですすめてしまった。",
              romaji:"Setsumeiwoyomebawakattamonowo、omoikomidesusumeteshimatta。",
              meaning:"Kalau saja baca penjelasannya, sebenarnya bisa paham, tetapi saya malah lanjut dengan asumsi sendiri."
            },
            {
              jp:"雨が降る前に帰ればよかったものを。",
              kana:"あめがふるまえにかえればよかったものを。",
              romaji:"Amegafurumaenikaerebayokattamonowo。",
              meaning:"Padahal kalau pulang sebelum hujan pasti lebih baik."
            }
          ]
        }
      ]
    },

  {
      id:"GR-N1-183",
      level:"N1",
      title:"もはや",
      summary:"Pola N1 もはや dalam konteks alami sehari-hari dan formal.",
      groups:[
        {
          name:"もはや",
          description:"Pola N1 もはや dalam konteks alami sehari-hari dan formal.",
          sentences:[
            {
              jp:"終電もなく、もはやタクシーで帰るしかない。",
              kana:"しゅうでんもなく、もはやたくしーでかえるしかない。",
              romaji:"Shuudenmonaku、mohayatakushiidekaerushikanai。",
              meaning:"Kereta terakhir sudah tidak ada, sekarang benar-benar tinggal naik taksi."
            },
            {
              jp:"ここまで来たら、もはや迷っている場合ではない。",
              kana:"ここまできたら、もはやまよっているばあいではない。",
              romaji:"Kokomadekitara、mohayamayotsuteirubaaidehanai。",
              meaning:"Kalau sudah sejauh ini, sekarang benar-benar bukan saatnya ragu-ragu."
            },
            {
              jp:"古い機械なので、もはや修理は難しい。",
              kana:"ふるいきかいなので、もはやしゅうりはむずかしい。",
              romaji:"Furuikikainanode、mohayashuurihamuzukashii。",
              meaning:"Karena mesinnya sudah tua, sekarang perbaikan benar-benar sulit."
            },
            {
              jp:"その店は人気すぎて、もはや予約なしでは入れない。",
              kana:"そのみせはにんきすぎて、もはやよやくなしではいれない。",
              romaji:"Sonomisehaninkisugite、mohayayoyakunashidehairenai。",
              meaning:"Toko itu terlalu populer, sekarang praktis tidak bisa masuk tanpa reservasi."
            },
            {
              jp:"もはや説明するまでもなく、皆が状況を理解していた。",
              kana:"もはやせつめいするまでもなく、みながじょうきょうをりかいしていた。",
              romaji:"Mohayasetsumeisurumademonaku、minagajoukyouworikaishiteita。",
              meaning:"Sekarang bahkan tanpa dijelaskan pun semua orang sudah paham situasinya."
            }
          ]
        }
      ]
    },

  {
      id:"GR-N1-184",
      level:"N1",
      title:"〜や否や",
      summary:"Pola N1 〜や否や dalam konteks alami sehari-hari dan formal.",
      groups:[
        {
          name:"〜や否や",
          description:"Pola N1 〜や否や dalam konteks alami sehari-hari dan formal.",
          sentences:[
            {
              jp:"電車を降りるや否や、急いで改札へ向かった。",
              kana:"でんしゃをおりるやひや、いそいでかいさつへむかった。",
              romaji:"Denshawooriruyahiya、isoidekaisatsuhemukatta。",
              meaning:"Begitu turun dari kereta, saya langsung buru-buru menuju gerbang tiket."
            },
            {
              jp:"ベルが鳴るや否や、学生たちは席を立った。",
              kana:"べるがなるやひや、がくせいたちはせきをたった。",
              romaji:"Beruganaruyahiya、gakuseitachihasekiwotatsuta。",
              meaning:"Begitu bel berbunyi, para siswa langsung berdiri dari kursi."
            },
            {
              jp:"ドアが開くや否や、冷たい風が入ってきた。",
              kana:"どあがひらくやひや、つめたいかぜがいっってきた。",
              romaji:"Doagahirakuyahiya、tsumetaikazegaitsutsutekita。",
              meaning:"Begitu pintu terbuka, angin dingin langsung masuk."
            },
            {
              jp:"家に着くや否や、子どもは宿題を始めた。",
              kana:"いえにつくやひや、こどもはしゅくだいをはじめた。",
              romaji:"Ienitsukuyahiya、kodomohashukudaiwohajimeta。",
              meaning:"Begitu sampai rumah, anak itu langsung mulai mengerjakan PR."
            },
            {
              jp:"会議が終わるや否や、課長は次の電話に出た。",
              kana:"かいぎがおわるやひや、かちょうはつぎのでんわにでた。",
              romaji:"Kaigigaowaruyahiya、kachouhatsuginodenwanideta。",
              meaning:"Begitu rapat selesai, kepala bagian langsung menjawab telepon berikutnya."
            }
          ]
        }
      ]
    },

  {
      id:"GR-N1-185",
      level:"N1",
      title:"やれ〜やれ〜",
      summary:"Pola N1 やれ〜やれ〜 dalam konteks alami sehari-hari dan formal.",
      groups:[
        {
          name:"やれ〜やれ〜",
          description:"Pola N1 やれ〜やれ〜 dalam konteks alami sehari-hari dan formal.",
          sentences:[
            {
              jp:"会議では、予算が足りないやれ人手が足りないやれと不満が続いた。",
              kana:"かいぎでは、よさんがたりないやれひとでがたりないやれとふまんがつづいた。",
              romaji:"Kaigideha、yosangatarinaiyarehitodegatarinaiyaretofumangatsuzuita。",
              meaning:"Di rapat, keluhan bermunculan seperti anggaran kurang dan tenaga kerja kurang."
            },
            {
              jp:"引っ越し前は、契約だの荷造りだのと騒がしい。",
              kana:"ひっこしまえは、けいやくだのにづくりだのとさわがしい。",
              romaji:"Hikkoshimaeha、keiyakudanonizukuridanotosawagashii。",
              meaning:"Menjelang pindahan, ramai dengan ini itu seperti kontrak dan berkemas."
            },
            {
              jp:"休日になると、子どもたちは遊園地だの映画だのと言い出す。",
              kana:"きゅうじつになると、こどもたちはゆうえんちだのえいがだのといいだす。",
              romaji:"Kyuujitsuninaruto、kodomotachihayuuenchidanoeigadanotoiidasu。",
              meaning:"Saat libur, anak-anak mulai bilang mau ke taman bermain atau nonton film."
            },
            {
              jp:"最近は、物価が高いやれ税金が上がるやれで落ち着かない。",
              kana:"さいきんは、ぶっかがたかいやれぜいきんがあがるやれでおちつかない。",
              romaji:"Saikinha、bukkagatakaiyarezeikingaagaruyaredeochitsukanai。",
              meaning:"Belakangan ini suasana tidak tenang karena ada ini itu seperti harga naik dan pajak meningkat."
            },
            {
              jp:"親戚が集まると、結婚はまだかやれ仕事はどうだやれで大変だ。",
              kana:"しんせきがあつまると、けっこんはまだかやれしごとはどうだやれでたいへんだ。",
              romaji:"Shinsekigaatsumaruto、kekkonhamadakayareshigotohadoudayaredetaihenda。",
              meaning:"Kalau keluarga besar berkumpul, repot sekali karena ditanya ini itu seperti kapan menikah dan bagaimana pekerjaan."
            }
          ]
        }
      ]
    },

  {
      id:"GR-N1-186",
      level:"N1",
      title:"〜故に / 故の / 故だ",
      summary:"Pola N1 〜故に / 故の / 故だ dalam konteks alami sehari-hari dan formal.",
      groups:[
        {
          name:"〜故に / 故の / 故だ",
          description:"Pola N1 〜故に / 故の / 故だ dalam konteks alami sehari-hari dan formal.",
          sentences:[
            {
              jp:"経験が浅い故に、判断に時間がかかった。",
              kana:"けいけんがあさいゆえに、はんだんにじかんがかかった。",
              romaji:"Keikengaasaiyueni、handannijikangakakatta。",
              meaning:"Karena pengalaman masih sedikit, pengambilan keputusan memakan waktu."
            },
            {
              jp:"急な事情があった故の欠席です。",
              kana:"きゅうなじじょうがあったゆえのけっせきです。",
              romaji:"Kyuunajijougaattayuenokessekidesu。",
              meaning:"Ketidakhadiran itu karena ada keadaan mendadak."
            },
            {
              jp:"人気店故に、予約なしでは入りにくい。",
              kana:"にんきみせゆえに、よやくなしではいりにくい。",
              romaji:"Ninkimiseyueni、yoyakunashidehairinikui。",
              meaning:"Karena toko itu populer, sulit masuk tanpa reservasi."
            },
            {
              jp:"不慣れ故のミスだったと本人も反省していた。",
              kana:"ふなれゆえのみすだったとほんにんもはんせいしていた。",
              romaji:"Funareyuenomisudattatohonninmohanseishiteita。",
              meaning:"Dia sendiri juga menyesali bahwa itu adalah kesalahan karena belum terbiasa."
            },
            {
              jp:"長年住んだ町故に、離れるのが少し寂しい。",
              kana:"ながねんすんだまちゆえに、はなれるのがすこしさびしい。",
              romaji:"Naganensundamachiyueni、hanarerunogasukoshisabishii。",
              meaning:"Karena kota itu sudah lama saya tinggali, meninggalkannya terasa agak sedih."
            }
          ]
        }
      ]
    },

  {
      id:"GR-N1-187",
      level:"N1",
      title:"〜ようが / 〜ようと",
      summary:"Pola N1 〜ようが / 〜ようと dalam konteks alami sehari-hari dan formal.",
      groups:[
        {
          name:"〜ようが / 〜ようと",
          description:"Pola N1 〜ようが / 〜ようと dalam konteks alami sehari-hari dan formal.",
          sentences:[
            {
              jp:"雨が降ろうが降るまいが、式は予定どおり行われる。",
              kana:"あめがふろうがふるまいが、しきはよていどおりおこなわれる。",
              romaji:"Amegafurougafurumaiga、shikihayoteidooriokonawareru。",
              meaning:"Entah hujan turun atau tidak, upacaranya tetap berlangsung sesuai jadwal."
            },
            {
              jp:"相手が何と言おうと、自分で決めた道を進みたい。",
              kana:"あいてがなんといおうと、じぶんできめたみちをすすみたい。",
              romaji:"Aiteganantoiouto、jibundekimetamichiwosusumitai。",
              meaning:"Apa pun yang orang lain katakan, saya ingin berjalan di jalan yang saya pilih sendiri."
            },
            {
              jp:"忙しかろうが、連絡だけは入れてほしい。",
              kana:"いそがしかろうが、れんらくだけはいれてほしい。",
              romaji:"Isogashikarouga、renrakudakehairetehoshii。",
              meaning:"Walaupun sibuk, saya ingin setidaknya diberi kabar."
            },
            {
              jp:"結果がどうなろうと、最後までやり切るつもりだ。",
              kana:"けっかがどうなろうと、さいごまでやりきるつもりだ。",
              romaji:"Kekkagadounarouto、saigomadeyarikirutsumorida。",
              meaning:"Apa pun hasilnya nanti, saya berniat menuntaskannya sampai akhir."
            },
            {
              jp:"寒かろうと、朝の散歩は続けたい。",
              kana:"さむかろうと、あさのさんぽはつづけたい。",
              romaji:"Samukarouto、asanosanpohatsuzuketai。",
              meaning:"Meski dingin, saya ingin tetap melanjutkan jalan pagi."
            }
          ]
        }
      ]
    },

  {
      id:"GR-N1-188",
      level:"N1",
      title:"〜ようにも〜ない",
      summary:"Pola N1 〜ようにも〜ない dalam konteks alami sehari-hari dan formal.",
      groups:[
        {
          name:"〜ようにも〜ない",
          description:"Pola N1 〜ようにも〜ない dalam konteks alami sehari-hari dan formal.",
          sentences:[
            {
              jp:"スマホの電池がなくて、連絡しようにもできなかった。",
              kana:"すまほのでんちがなくて、れんらくしようにもできなかった。",
              romaji:"Sumahonodenchiganakute、renrakushiyounimodekinakatta。",
              meaning:"Baterai ponsel habis, jadi mau menghubungi pun tidak bisa."
            },
            {
              jp:"地図がなくて、行こうにも道が分からない。",
              kana:"ちずがなくて、いこうにもみちがわからない。",
              romaji:"Chizuganakute、ikounimomichigawakaranai。",
              meaning:"Karena tidak ada peta, saya ingin pergi pun tidak tahu jalannya."
            },
            {
              jp:"時間が足りなくて、見直そうにも見直せない。",
              kana:"じかんがたりなくて、みなおそうにもみなおせない。",
              romaji:"Jikangatarinakute、minaosounimominaosenai。",
              meaning:"Karena waktu tidak cukup, saya ingin meninjau ulang pun tidak bisa."
            },
            {
              jp:"相手の名前を忘れてしまい、呼ぼうにも呼べなかった。",
              kana:"あいてのなまえをわすれてしまい、よぼうにもよべなかった。",
              romaji:"Aitenonamaewowasureteshimai、yobounimoyobenakatta。",
              meaning:"Karena lupa nama orangnya, saya mau menyapa pun tidak bisa."
            },
            {
              jp:"材料がそろっていなくて、作ろうにも作れない。",
              kana:"ざいりょうがそろっていなくて、つくろうにもつくれない。",
              romaji:"Zairyougasorotteinakute、tsukurounimotsukurenai。",
              meaning:"Bahannya belum lengkap, jadi ingin membuat pun tidak bisa."
            }
          ]
        }
      ]
    },

  {
      id:"GR-N1-189",
      level:"N1",
      title:"〜ようによっては / ようでは",
      summary:"Pola N1 〜ようによっては / ようでは dalam konteks alami sehari-hari dan formal.",
      groups:[
        {
          name:"〜ようによっては / ようでは",
          description:"Pola N1 〜ようによっては / ようでは dalam konteks alami sehari-hari dan formal.",
          sentences:[
            {
              jp:"言い方ようによっては、きつく聞こえることもある。",
              kana:"いいかたようによっては、きつくきこえることもある。",
              romaji:"Iikatayouniyotteha、kitsukukikoerukotomoaru。",
              meaning:"Tergantung cara mengatakannya, kalimat itu bisa terdengar keras."
            },
            {
              jp:"考えようによっては、今回の失敗もいい経験だ。",
              kana:"かんがえようによっては、こんかいのしっぱいもいいけいけんだ。",
              romaji:"Kangaeyouniyotteha、konkainoshippaimoiikeikenda。",
              meaning:"Kalau dilihat dari sudut tertentu, kegagalan kali ini juga pengalaman yang baik."
            },
            {
              jp:"使いようによっては、この狭い部屋でも十分暮らせる。",
              kana:"つかいようによっては、このせまいへやでもじゅうぶんくらせる。",
              romaji:"Tsukaiyouniyotteha、konosemaiheyademojuubunkuraseru。",
              meaning:"Kalau dimanfaatkan dengan baik, kamar sempit ini pun cukup untuk ditinggali."
            },
            {
              jp:"見方によっては、その沈黙は賛成とも取れる。",
              kana:"みかたによっては、そのちんもくはさんせいともとれる。",
              romaji:"Mikataniyotteha、sonochinmokuhasanseitomotoreru。",
              meaning:"Tergantung cara melihatnya, diam itu bisa juga dianggap setuju."
            },
            {
              jp:"その程度であきらめるようでは、まだ甘い。",
              kana:"そのていどであきらめるようでは、まだあまい。",
              romaji:"Sonoteidodeakirameruyoudeha、madaamai。",
              meaning:"Kalau menyerah hanya karena hal segitu, berarti masih kurang matang."
            }
          ]
        }
      ]
    },

  {
      id:"GR-N1-190",
      level:"N1",
      title:"〜わ〜わ",
      summary:"Pola N1 〜わ〜わ dalam konteks alami sehari-hari dan formal.",
      groups:[
        {
          name:"〜わ〜わ",
          description:"Pola N1 〜わ〜わ dalam konteks alami sehari-hari dan formal.",
          sentences:[
            {
              jp:"会場は人でわあわあしていて、落ち着いて話せなかった。",
              kana:"かいじょうはにんでわあわあしていて、おちついてはなせなかった。",
              romaji:"Kaijouhanindewaawaashiteite、ochitsuitehanasenakatta。",
              meaning:"Tempat acara penuh keramaian sampai sulit bicara dengan tenang."
            },
            {
              jp:"子どもたちが公園でわいわい遊んでいた。",
              kana:"こどもたちがこうえんでわいわいあそんでいた。",
              romaji:"Kodomotachigakouendewaiwaiasondeita。",
              meaning:"Anak-anak bermain ramai-ramai di taman."
            },
            {
              jp:"閉店前の店内は、客でわあわあだった。",
              kana:"へいてんまえのてんないは、きゃくでわあわあだった。",
              romaji:"Heitenmaenotennaiha、kyakudewaawaadatta。",
              meaning:"Menjelang tutup, toko itu benar-benar ramai oleh pelanggan."
            },
            {
              jp:"発表が終わった瞬間、教室はわっと拍手に包まれた。",
              kana:"はっぴょうがおわったしゅんかん、きょうしつはわっとはくしゅにつつまれた。",
              romaji:"Happyougaowattashunkan、kyoushitsuhawattohakushunitsutsumareta。",
              meaning:"Begitu presentasi selesai, kelas langsung dipenuhi tepuk tangan."
            },
            {
              jp:"セール初日の売り場は朝からわいわいしていた。",
              kana:"せーるしょにちのうりばはあさからわいわいしていた。",
              romaji:"Seerushonichinouribahaasakarawaiwaishiteita。",
              meaning:"Area penjualan pada hari pertama diskon sudah ramai sejak pagi."
            }
          ]
        }
      ]
    },

  {
      id:"GR-N1-191",
      level:"N1",
      title:"〜をおいて他にない",
      summary:"Pola N1 〜をおいて他にない dalam konteks alami sehari-hari dan formal.",
      groups:[
        {
          name:"〜をおいて他にない",
          description:"Pola N1 〜をおいて他にない dalam konteks alami sehari-hari dan formal.",
          sentences:[
            {
              jp:"この町で朝食を食べるなら、この店をおいて他にない。",
              kana:"このまちでちょうしょくをたべるなら、このみせをおいてほかにない。",
              romaji:"Konomachidechoushokuwotaberunara、konomisewooitehokaninai。",
              meaning:"Kalau mau sarapan di kota ini, tidak ada pilihan lain selain toko ini."
            },
            {
              jp:"彼ほどこの仕事に向いている人は、彼をおいて他にない。",
              kana:"かれほどこのしごとにむいているにんは、かれをおいてほかにない。",
              romaji:"Karehodokonoshigotonimuiteiruninha、karewooitehokaninai。",
              meaning:"Kalau soal cocok untuk pekerjaan ini, tidak ada orang lain selain dia."
            },
            {
              jp:"この問題を今まとめられるのは、部長をおいて他にない。",
              kana:"このもんだいをいままとめられるのは、ぶちょうをおいてほかにない。",
              romaji:"Konomondaiwoimamatomerarerunoha、buchouwooitehokaninai。",
              meaning:"Untuk merangkum masalah ini sekarang, tidak ada orang lain selain kepala divisi."
            },
            {
              jp:"週末の散歩コースは、この川沿いをおいて他にない。",
              kana:"しゅうまつのさんぽこーすは、このかわぞいをおいてほかにない。",
              romaji:"Shuumatsunosanpokoosuha、konokawazoiwooitehokaninai。",
              meaning:"Kalau untuk rute jalan santai akhir pekan, tidak ada yang lebih pas selain sepanjang sungai ini."
            },
            {
              jp:"留学生相談なら、あの窓口をおいて他にない。",
              kana:"りゅうがくせいそうだんなら、あのまどぐちをおいてほかにない。",
              romaji:"Ryuugakuseisoudannara、anomadoguchiwooitehokaninai。",
              meaning:"Kalau soal konsultasi mahasiswa asing, tidak ada yang lebih tepat selain loket itu."
            }
          ]
        }
      ]
    },

  {
      id:"GR-N1-192",
      level:"N1",
      title:"〜を押して / を押し切って",
      summary:"Pola N1 〜を押して / を押し切って dalam konteks alami sehari-hari dan formal.",
      groups:[
        {
          name:"〜を押して / を押し切って",
          description:"Pola N1 〜を押して / を押し切って dalam konteks alami sehari-hari dan formal.",
          sentences:[
            {
              jp:"体調不良を押して出勤したが、やはり早退した。",
              kana:"たいちょうふりょうをおしてしゅっきんしたが、やはりそうたいした。",
              romaji:"Taichoufuryouwooshiteshukkinshitaga、yaharisoutaishita。",
              meaning:"Meski memaksakan diri masuk kerja saat badan tidak fit, akhirnya saya pulang cepat juga."
            },
            {
              jp:"家族の反対を押し切って、彼は留学を決めた。",
              kana:"かぞくのはんたいをおしきって、かれはりゅうがくをきめた。",
              romaji:"Kazokunohantaiwooshikitsute、kareharyuugakuwokimeta。",
              meaning:"Menembus penolakan keluarga, dia memutuskan untuk belajar di luar negeri."
            },
            {
              jp:"小雨を押して祭りは予定どおり始まった。",
              kana:"こさめをおしてまつりはよていどおりはじまった。",
              romaji:"Kosamewooshitematsurihayoteidoorihajimatta。",
              meaning:"Meski gerimis, festival tetap dimulai sesuai jadwal."
            },
            {
              jp:"眠気を押してレポートを書き上げた。",
              kana:"ねむけをおしてれぽーとをかきあげた。",
              romaji:"Nemukewooshiterepootowokakiageta。",
              meaning:"Saya menyelesaikan laporan sambil menahan rasa kantuk."
            },
            {
              jp:"周囲の心配を押し切って、彼女は一人で引っ越した。",
              kana:"しゅういのしんぱいをおしきって、かのじょはひとりでひっこした。",
              romaji:"Shuuinoshinpaiwooshikitsute、kanojohahitoridehikkoshita。",
              meaning:"Menembus kekhawatiran orang sekitar, dia pindah sendirian."
            }
          ]
        }
      ]
    },

  {
      id:"GR-N1-193",
      level:"N1",
      title:"〜を顧みず / も顧みず",
      summary:"Pola N1 〜を顧みず / も顧みず dalam konteks alami sehari-hari dan formal.",
      groups:[
        {
          name:"〜を顧みず / も顧みず",
          description:"Pola N1 〜を顧みず / も顧みず dalam konteks alami sehari-hari dan formal.",
          sentences:[
            {
              jp:"危険を顧みず川に入るのはやめてください。",
              kana:"きけんをかえりみずかわにいるのはやめてください。",
              romaji:"Kikenwokaerimizukawaniirunohayametekudasai。",
              meaning:"Tolong jangan masuk sungai tanpa mempedulikan bahaya."
            },
            {
              jp:"彼は体調も顧みず働き続けてしまう。",
              kana:"かれはたいちょうもかえりみずはたらきつづけてしまう。",
              romaji:"Karehataichoumokaerimizuhatarakitsuzuketeshimau。",
              meaning:"Dia terus bekerja tanpa mempedulikan kondisi tubuhnya."
            },
            {
              jp:"世間の評価を顧みず、自分の信じる道を進んだ。",
              kana:"せけんのひょうかをかえりみず、じぶんのしんじるみちをすすんだ。",
              romaji:"Sekennohyoukawokaerimizu、jibunnoshinjirumichiwosusunda。",
              meaning:"Tanpa mempedulikan penilaian orang lain, dia menempuh jalan yang diyakininya."
            },
            {
              jp:"被害を顧みず開発を進めるべきではない。",
              kana:"ひがいをかえりみずかいはつをすすめるべきではない。",
              romaji:"Higaiwokaerimizukaihatsuwosusumerubekidehanai。",
              meaning:"Pembangunan tidak seharusnya dipaksakan tanpa mempedulikan dampaknya."
            },
            {
              jp:"後先も顧みず買い物をしてしまった。",
              kana:"あとさきもかえりみずかいものをしてしまった。",
              romaji:"Atosakimokaerimizukaimonowoshiteshimatta。",
              meaning:"Saya berbelanja tanpa memikirkan akibatnya."
            }
          ]
        }
      ]
    },

  {
      id:"GR-N1-194",
      level:"N1",
      title:"〜を限りに",
      summary:"Pola N1 〜を限りに dalam konteks alami sehari-hari dan formal.",
      groups:[
        {
          name:"〜を限りに",
          description:"Pola N1 〜を限りに dalam konteks alami sehari-hari dan formal.",
          sentences:[
            {
              jp:"本日を限りに、この窓口は移転となります。",
              kana:"ほんじつをかぎりに、このまどぐちはいてんとなります。",
              romaji:"Honjitsuwokagirini、konomadoguchihaitentonarimasu。",
              meaning:"Mulai hari ini, loket ini dipindahkan."
            },
            {
              jp:"今月末を限りに、深夜営業は終了する。",
              kana:"こんげつすえをかぎりに、しんやえいぎょうはしゅうりょうする。",
              romaji:"Kongetsusuewokagirini、shinyaeigyouhashuuryousuru。",
              meaning:"Mulai akhir bulan ini, operasional larut malam akan dihentikan."
            },
            {
              jp:"今回を限りに、遅刻は許されないと思ってください。",
              kana:"こんかいをかぎりに、ちこくはゆるされないとおもってください。",
              romaji:"Konkaiwokagirini、chikokuhayurusarenaitoomottekudasai。",
              meaning:"Anggap saja mulai kali ini, keterlambatan tidak akan ditoleransi lagi."
            },
            {
              jp:"このセールは在庫がなくなり次第を限りに終了です。",
              kana:"このせーるはざいこがなくなりしだいをかぎりにしゅうりょうです。",
              romaji:"Konoseeruhazaikoganakunarishidaiwokagirinishuuryoudesu。",
              meaning:"Diskon ini akan berakhir setelah stok habis."
            },
            {
              jp:"留学前のアルバイトは来週を限りに辞める予定だ。",
              kana:"りゅうがくまえのあるばいとはらいしゅうをかぎりにやめるよていだ。",
              romaji:"Ryuugakumaenoarubaitoharaishuuwokagiriniyameruyoteida。",
              meaning:"Saya berencana berhenti dari kerja paruh waktu menjelang studi ke luar negeri mulai minggu depan."
            }
          ]
        }
      ]
    },

  {
      id:"GR-N1-195",
      level:"N1",
      title:"〜をかねて",
      summary:"Pola N1 〜をかねて dalam konteks alami sehari-hari dan formal.",
      groups:[
        {
          name:"〜をかねて",
          description:"Pola N1 〜をかねて dalam konteks alami sehari-hari dan formal.",
          sentences:[
            {
              jp:"お礼をかねて、先生に近況を報告した。",
              kana:"おれいをかねて、せんせいにきんきょうをほうこくした。",
              romaji:"Oreiwokanete、senseinikinkyouwohoukokushita。",
              meaning:"Sekalian menyampaikan terima kasih, saya juga memberi kabar terbaru kepada dosen."
            },
            {
              jp:"散歩をかねて、近所の神社まで歩いた。",
              kana:"さんぽをかねて、きんじょのじんじゃまであるいた。",
              romaji:"Sanpowokanete、kinjonojinjamadearuita。",
              meaning:"Sekalian jalan-jalan, saya berjalan ke kuil dekat rumah."
            },
            {
              jp:"あいさつをかねて、新しい隣人にお菓子を持って行った。",
              kana:"あいさつをかねて、あたらしいりんじんにおかしをもっていった。",
              romaji:"Aisatsuwokanete、atarashiirinjinniokashiwomotsuteitta。",
              meaning:"Sekalian berkenalan, saya membawa camilan ke tetangga baru."
            },
            {
              jp:"勉強をかねて、ニュースは日本語で見るようにしている。",
              kana:"べんきょうをかねて、にゅーすはにほんごでみるようにしている。",
              romaji:"Benkyouwokanete、nyuusuhanihongodemiruyounishiteiru。",
              meaning:"Sekalian belajar, saya membiasakan menonton berita dalam bahasa Jepang."
            },
            {
              jp:"下見をかねて、会場の近くまで行ってみた。",
              kana:"したみをかねて、かいじょうのちかくまでいってみた。",
              romaji:"Shitamiwokanete、kaijounochikakumadeittemita。",
              meaning:"Sekalian survei lokasi, saya pergi mendekati tempat acara."
            }
          ]
        }
      ]
    },

  {
      id:"GR-N1-196",
      level:"N1",
      title:"〜を皮切りに",
      summary:"Pola N1 〜を皮切りに dalam konteks alami sehari-hari dan formal.",
      groups:[
        {
          name:"〜を皮切りに",
          description:"Pola N1 〜を皮切りに dalam konteks alami sehari-hari dan formal.",
          sentences:[
            {
              jp:"東京公演を皮切りに、全国ツアーが始まる。",
              kana:"とうきょうこうえんをかわきりりに、ぜんこくつあーがはじまる。",
              romaji:"Toukyoukouenwokawakiririni、zenkokutsuaagahajimaru。",
              meaning:"Tur nasional akan dimulai dengan pertunjukan pertama di Tokyo."
            },
            {
              jp:"四月を皮切りに、制度の変更が順次行われる。",
              kana:"しがつをかわきりりに、せいどのへんこうがじゅんじおこなわれる。",
              romaji:"Shigatsuwokawakiririni、seidonohenkougajunjiokonawareru。",
              meaning:"Mulai bulan April, perubahan sistem akan dilakukan bertahap."
            },
            {
              jp:"この店は駅前出店を皮切りに、県内で店舗を増やした。",
              kana:"このみせはえきまえでみせをかわきりりに、けんないでてんぽをふやした。",
              romaji:"Konomisehaekimaedemisewokawakiririni、kennaidetenpowofuyashita。",
              meaning:"Toko ini menambah cabang di prefektur dengan pembukaan depan stasiun sebagai langkah awal."
            },
            {
              jp:"朝の清掃を皮切りに、一日の業務が始まる。",
              kana:"あさのせいそうをかわきりりに、ついたちのぎょうむがはじまる。",
              romaji:"Asanoseisouwokawakiririni、tsuitachinogyoumugahajimaru。",
              meaning:"Hari kerja dimulai dengan kegiatan bersih-bersih pagi sebagai langkah awal."
            },
            {
              jp:"今回の説明会を皮切りに、募集が本格化する。",
              kana:"こんかいのせつめいかいをかわきりりに、ぼしゅうがほんかくかする。",
              romaji:"Konkainosetsumeikaiwokawakiririni、boshuugahonkakukasuru。",
              meaning:"Perekrutan akan mulai berjalan serius dengan sesi penjelasan kali ini sebagai pembuka."
            }
          ]
        }
      ]
    },

  {
      id:"GR-N1-197",
      level:"N1",
      title:"〜を機に",
      summary:"Pola N1 〜を機に dalam konteks alami sehari-hari dan formal.",
      groups:[
        {
          name:"〜を機に",
          description:"Pola N1 〜を機に dalam konteks alami sehari-hari dan formal.",
          sentences:[
            {
              jp:"卒業を機に、一人暮らしを始めた。",
              kana:"そつぎょうをきに、ひとりぐらしをはじめた。",
              romaji:"Sotsugyouwokini、hitorigurashiwohajimeta。",
              meaning:"Setelah lulus, saya mulai tinggal sendiri."
            },
            {
              jp:"来日を機に、料理を自分で作るようになった。",
              kana:"らいにちをきに、りょうりをじぶんでつくるようになった。",
              romaji:"Rainichiwokini、ryouriwojibundetsukuruyouninatta。",
              meaning:"Sejak datang ke Jepang, saya mulai memasak sendiri."
            },
            {
              jp:"転職を機に、生活リズムを見直した。",
              kana:"てんしょくをきに、せいかつりずむをみなおした。",
              romaji:"Tenshokuwokini、seikatsurizumuwominaoshita。",
              meaning:"Setelah pindah kerja, saya meninjau ulang pola hidup saya."
            },
            {
              jp:"引っ越しを機に、いらない物をかなり処分した。",
              kana:"ひっこしをきに、いらないものをかなりしょぶんした。",
              romaji:"Hikkoshiwokini、iranaimonowokanarishobunshita。",
              meaning:"Setelah pindah rumah, saya membuang cukup banyak barang yang tidak diperlukan."
            },
            {
              jp:"この事故を機に、安全管理が見直された。",
              kana:"このじこをきに、あんぜんかんりがみなおされた。",
              romaji:"Konojikowokini、anzenkanrigaminaosareta。",
              meaning:"Kecelakaan ini menjadi momentum untuk meninjau ulang pengelolaan keselamatan."
            }
          ]
        }
      ]
    },

  {
      id:"GR-N1-198",
      level:"N1",
      title:"〜を禁じ得ない",
      summary:"Pola N1 〜を禁じ得ない dalam konteks alami sehari-hari dan formal.",
      groups:[
        {
          name:"〜を禁じ得ない",
          description:"Pola N1 〜を禁じ得ない dalam konteks alami sehari-hari dan formal.",
          sentences:[
            {
              jp:"その知らせを聞いて、驚きを禁じ得なかった。",
              kana:"そのしらせをきいて、おどろきをきんじえなかった。",
              romaji:"Sonoshirasewokiite、odorokiwokinjienakatta。",
              meaning:"Mendengar kabar itu, saya tak bisa menahan rasa terkejut."
            },
            {
              jp:"あまりの対応の悪さに、怒りを禁じ得ない。",
              kana:"あまりのたいおうのわるさに、いかりをきんじえない。",
              romaji:"Amarinotaiounowarusani、ikariwokinjienai。",
              meaning:"Melihat pelayanan yang begitu buruk, saya tak bisa menahan marah."
            },
            {
              jp:"長年の努力が報われた姿に、感動を禁じ得ない。",
              kana:"ながねんのどりょくがむくわれたすがたに、かんどうをきんじえない。",
              romaji:"Naganennodoryokugamukuwaretasugatani、kandouwokinjienai。",
              meaning:"Melihat usaha bertahun-tahun itu terbayar, saya tak bisa menahan haru."
            },
            {
              jp:"自然災害の被害の大きさに、言葉を失うばかりだった。",
              kana:"しぜんさいがいのひがいのおおきさに、ことばをうしなうばかりだった。",
              romaji:"Shizensaigainohigainoookisani、kotobawoushinaubakaridatta。",
              meaning:"Melihat besarnya kerusakan bencana alam, saya hanya bisa terdiam."
            },
            {
              jp:"突然の閉店の知らせに、戸惑いを禁じ得ない。",
              kana:"とつぜんのへいてんのしらせに、とまどいをきんじえない。",
              romaji:"Totsuzennoheitennoshiraseni、tomadoiwokinjienai。",
              meaning:"Saya tak bisa menahan kebingungan mendengar kabar toko itu tutup mendadak."
            }
          ]
        }
      ]
    },

  {
      id:"GR-N1-199",
      level:"N1",
      title:"〜を境に",
      summary:"Pola N1 〜を境に dalam konteks alami sehari-hari dan formal.",
      groups:[
        {
          name:"〜を境に",
          description:"Pola N1 〜を境に dalam konteks alami sehari-hari dan formal.",
          sentences:[
            {
              jp:"大学進学を境に、地元を離れて暮らし始めた。",
              kana:"だいがくしんがくをさかいに、じもとをはなれてくらしはじめた。",
              romaji:"Daigakushingakuwosakaini、jimotowohanaretekurashihajimeta。",
              meaning:"Sejak masuk universitas, saya mulai tinggal jauh dari kampung halaman."
            },
            {
              jp:"その事故を境に、地域の交通ルールが厳しくなった。",
              kana:"そのじこをさかいに、ちいきのこうつうるーるがいかめしくなった。",
              romaji:"Sonojikowosakaini、chiikinokoutsuuruurugaikameshikunatta。",
              meaning:"Sejak kecelakaan itu, aturan lalu lintas di daerah menjadi lebih ketat."
            },
            {
              jp:"三十歳を境に、健康に気をつけるようになった。",
              kana:"さんじゅうさいをさかいに、けんこうにきをつけるようになった。",
              romaji:"Sanjuusaiwosakaini、kenkounikiwotsukeruyouninatta。",
              meaning:"Memasuki usia tiga puluh, saya mulai lebih menjaga kesehatan."
            },
            {
              jp:"引っ越しを境に、人づきあいも少し変わった。",
              kana:"ひっこしをさかいに、にんづきあいもすこしかわった。",
              romaji:"Hikkoshiwosakaini、ninzukiaimosukoshikawatta。",
              meaning:"Sejak pindah rumah, hubungan pergaulan saya juga sedikit berubah."
            },
            {
              jp:"雨を境に、気温が一気に下がった。",
              kana:"あめをさかいに、きおんがいっきにさがった。",
              romaji:"Amewosakaini、kiongaikkinisagatta。",
              meaning:"Setelah hujan turun, suhu langsung menurun drastis."
            }
          ]
        }
      ]
    },

  {
      id:"GR-N1-200",
      level:"N1",
      title:"〜を控えて",
      summary:"Pola N1 〜を控えて dalam konteks alami sehari-hari dan formal.",
      groups:[
        {
          name:"〜を控えて",
          description:"Pola N1 〜を控えて dalam konteks alami sehari-hari dan formal.",
          sentences:[
            {
              jp:"試験を控えて、図書館は朝から混んでいる。",
              kana:"しけんをひかえて、としょかんはあさからこんでいる。",
              romaji:"Shikenwohikaete、toshokanhaasakarakondeiru。",
              meaning:"Menjelang ujian, perpustakaan sudah ramai sejak pagi."
            },
            {
              jp:"出産を控えて、部屋の準備を少しずつ進めている。",
              kana:"しゅっさんをひかえて、へやのじゅんびをすこしずつすすめている。",
              romaji:"Shussanwohikaete、heyanojunbiwosukoshizutsususumeteiru。",
              meaning:"Menjelang persalinan, saya menyiapkan kamar sedikit demi sedikit."
            },
            {
              jp:"新学期を控えて、駅前の文房具店がにぎわっている。",
              kana:"しんがっきをひかえて、えきまえのぶんぼうぐてんがにぎわっている。",
              romaji:"Shingakkiwohikaete、ekimaenobunbougutenganigiwatteiru。",
              meaning:"Menjelang semester baru, toko alat tulis depan stasiun ramai."
            },
            {
              jp:"大型連休を控えて、空港の案内が増えていた。",
              kana:"おおがたれんきゅうをひかえて、くうこうのあんないがふえていた。",
              romaji:"Oogatarenkyuuwohikaete、kuukounoannaigafueteita。",
              meaning:"Menjelang libur panjang, petunjuk di bandara bertambah banyak."
            },
            {
              jp:"本番を控えて、チーム全体が少し緊張していた。",
              kana:"ほんばんをひかえて、ちーむぜんたいがすこしきんちょうしていた。",
              romaji:"Honbanwohikaete、chiimuzentaigasukoshikinchoushiteita。",
              meaning:"Menjelang hari-H, seluruh tim sedikit tegang."
            }
          ]
        }
      ]
    },

  {
      id:"GR-N1-201",
      level:"N1",
      title:"〜を踏まえて",
      summary:"Pola N1 〜を踏まえて dalam konteks alami sehari-hari dan formal.",
      groups:[
        {
          name:"〜を踏まえて",
          description:"Pola N1 〜を踏まえて dalam konteks alami sehari-hari dan formal.",
          sentences:[
            {
              jp:"先週の反省を踏まえて、進め方を少し変えた。",
              kana:"せんしゅうのはんせいをふまえて、すすめかたをすこしかえた。",
              romaji:"Senshuunohanseiwofumaete、susumekatawosukoshikaeta。",
              meaning:"Berdasarkan evaluasi minggu lalu, kami sedikit mengubah cara kerja."
            },
            {
              jp:"利用者の意見を踏まえて、案内表示を改善した。",
              kana:"りようしゃのいけんをふまえて、あんないひょうじをかいぜんした。",
              romaji:"Riyoushanoikenwofumaete、annaihyoujiwokaizenshita。",
              meaning:"Berdasarkan masukan pengguna, papan petunjuk diperbaiki."
            },
            {
              jp:"現場の状況を踏まえて、予定を見直すことにした。",
              kana:"げんばのじょうきょうをふまえて、よていをみなおすことにした。",
              romaji:"Genbanojoukyouwofumaete、yoteiwominaosukotonishita。",
              meaning:"Berdasarkan kondisi lapangan, kami memutuskan meninjau ulang jadwal."
            },
            {
              jp:"前回の失敗を踏まえて、今回は早めに準備した。",
              kana:"ぜんかいのしっぱいをふまえて、こんかいははやめにじゅんびした。",
              romaji:"Zenkainoshippaiwofumaete、konkaihahayamenijunbishita。",
              meaning:"Berdasarkan kegagalan sebelumnya, kali ini saya bersiap lebih awal."
            },
            {
              jp:"天気予報を踏まえて、イベントは屋内開催になった。",
              kana:"てんきよほうをふまえて、いべんとはおくないかいさいになった。",
              romaji:"Tenkiyohouwofumaete、ibentohaokunaikaisaininatta。",
              meaning:"Berdasarkan ramalan cuaca, acara dipindahkan ke dalam ruangan."
            }
          ]
        }
      ]
    },

  {
      id:"GR-N1-202",
      level:"N1",
      title:"〜を経て",
      summary:"Pola N1 〜を経て dalam konteks alami sehari-hari dan formal.",
      groups:[
        {
          name:"〜を経て",
          description:"Pola N1 〜を経て dalam konteks alami sehari-hari dan formal.",
          sentences:[
            {
              jp:"研修を経て、ようやく一人で窓口に立てるようになった。",
              kana:"けんしゅうをへて、ようやくひとりでまどぐちにたてるようになった。",
              romaji:"Kenshuuwohete、youyakuhitoridemadoguchinitateruyouninatta。",
              meaning:"Setelah melalui pelatihan, saya akhirnya bisa bertugas sendiri di loket."
            },
            {
              jp:"長い話し合いを経て、やっと方針が決まった。",
              kana:"ながいはなしあいをへて、やっとほうしんがきまった。",
              romaji:"Nagaihanashiaiwohete、yattohoushingakimatta。",
              meaning:"Setelah diskusi panjang, akhirnya kebijakan diputuskan."
            },
            {
              jp:"数回の試作を経て、この商品が完成した。",
              kana:"すうかいのしさくをへて、このしょうひんがかんせいした。",
              romaji:"Suukainoshisakuwohete、konoshouhingakanseishita。",
              meaning:"Setelah beberapa kali percobaan, produk ini akhirnya selesai."
            },
            {
              jp:"京都を経て大阪に向かう予定だ。",
              kana:"きょうとをへておおさかにむかうよていだ。",
              romaji:"Kyoutowoheteoosakanimukauyoteida。",
              meaning:"Saya berencana menuju Osaka lewat Kyoto."
            },
            {
              jp:"入国手続きを経て、ようやく外に出られた。",
              kana:"にゅうこくてつづきをへて、ようやくそとにでられた。",
              romaji:"Nyuukokutetsuzukiwohete、youyakusotoniderareta。",
              meaning:"Setelah melalui prosedur masuk negara, saya akhirnya bisa keluar."
            }
          ]
        }
      ]
    },

  {
      id:"GR-N1-203",
      level:"N1",
      title:"〜をもって / をもちまして",
      summary:"Pola N1 〜をもって / をもちまして dalam konteks alami sehari-hari dan formal.",
      groups:[
        {
          name:"〜をもって / をもちまして",
          description:"Pola N1 〜をもって / をもちまして dalam konteks alami sehari-hari dan formal.",
          sentences:[
            {
              jp:"本日をもって、こちらのサービスは終了いたします。",
              kana:"ほんじつをもって、こちらのさーびすはしゅうりょういたします。",
              romaji:"Honjitsuwomotte、kochiranosaabisuhashuuryouitashimasu。",
              meaning:"Mulai hari ini, layanan ini akan dihentikan."
            },
            {
              jp:"この件をもちまして、説明会を終わります。",
              kana:"このけんをもちまして、せつめいかいをおわります。",
              romaji:"Konokenwomochimashite、setsumeikaiwoowarimasu。",
              meaning:"Dengan ini, sesi penjelasan akan kami akhiri."
            },
            {
              jp:"三月末をもって退職することになりました。",
              kana:"さんがつまつをもってたいしょくすることになりました。",
              romaji:"Sangatsumatsuwomottetaishokusurukotoninarimashita。",
              meaning:"Saya akan berhenti bekerja per akhir Maret."
            },
            {
              jp:"以上をもちまして、本日の発表を終了します。",
              kana:"いじょうをもちまして、ほんじつのはっぴょうをしゅうりょうします。",
              romaji:"Ijouwomochimashite、honjitsunohappyouwoshuuryoushimasu。",
              meaning:"Dengan demikian, presentasi hari ini selesai."
            },
            {
              jp:"本通知をもって、正式なご案内といたします。",
              kana:"ほんどおりちをもって、せいしきなごあんないといたします。",
              romaji:"Hondoorichiwomotte、seishikinagoannaitoitashimasu。",
              meaning:"Pemberitahuan ini kami jadikan pengumuman resmi."
            }
          ]
        }
      ]
    },

  {
      id:"GR-N1-204",
      level:"N1",
      title:"〜をものともせずに",
      summary:"Pola N1 〜をものともせずに dalam konteks alami sehari-hari dan formal.",
      groups:[
        {
          name:"〜をものともせずに",
          description:"Pola N1 〜をものともせずに dalam konteks alami sehari-hari dan formal.",
          sentences:[
            {
              jp:"強い雨をものともせずに、ランナーたちは走り続けた。",
              kana:"つよいあめをものともせずに、らんなーたちははしりつづけた。",
              romaji:"Tsuyoiamewomonotomosezuni、rannaatachihahashiritsuzuketa。",
              meaning:"Tanpa gentar pada hujan deras, para pelari terus berlari."
            },
            {
              jp:"暑さをものともせずに、子どもたちは公園で遊んでいた。",
              kana:"あつさをものともせずに、こどもたちはこうえんであそんでいた。",
              romaji:"Atsusawomonotomosezuni、kodomotachihakouendeasondeita。",
              meaning:"Tanpa peduli panas, anak-anak tetap bermain di taman."
            },
            {
              jp:"周囲の反対をものともせずに、彼は挑戦を続けた。",
              kana:"しゅういのはんたいをものともせずに、かれはちょうせんをつづけた。",
              romaji:"Shuuinohantaiwomonotomosezuni、karehachousenwotsuzuketa。",
              meaning:"Tanpa gentar pada penolakan orang sekitar, dia terus menantang diri."
            },
            {
              jp:"年齢をものともせずに、祖父は毎朝散歩している。",
              kana:"ねんれいをものともせずに、そふはまいあささんぽしている。",
              romaji:"Nenreiwomonotomosezuni、sofuhamaiasasanposhiteiru。",
              meaning:"Tanpa peduli usia, kakek berjalan pagi setiap hari."
            },
            {
              jp:"小さな失敗をものともせずに、彼女は前に進んだ。",
              kana:"ちいさなしっぱいをものともせずに、かのじょはまえにすすんだ。",
              romaji:"Chiisanashippaiwomonotomosezuni、kanojohamaenisusunda。",
              meaning:"Tanpa takut pada kesalahan kecil, dia tetap melangkah maju."
            }
          ]
        }
      ]
    },

  {
      id:"GR-N1-205",
      level:"N1",
      title:"〜を余儀なくされる",
      summary:"Pola N1 〜を余儀なくされる dalam konteks alami sehari-hari dan formal.",
      groups:[
        {
          name:"〜を余儀なくされる",
          description:"Pola N1 〜を余儀なくされる dalam konteks alami sehari-hari dan formal.",
          sentences:[
            {
              jp:"大雪の影響で、列車の運休を余儀なくされた。",
              kana:"おおゆきのえいきょうで、れっしゃのうんきゅうをよぎなくされた。",
              romaji:"Ooyukinoeikyoude、resshanounkyuuwoyoginakusareta。",
              meaning:"Karena salju lebat, kereta terpaksa dihentikan."
            },
            {
              jp:"書類に不備があり、再提出を余儀なくされた。",
              kana:"しょるいにふびがあり、さいていしゅつをよぎなくされた。",
              romaji:"Shoruinifubigaari、saiteishutsuwoyoginakusareta。",
              meaning:"Karena ada kekurangan dokumen, saya terpaksa mengajukan ulang."
            },
            {
              jp:"急な人手不足で、営業時間の短縮を余儀なくされた。",
              kana:"きゅうなひとでぶそくで、えいぎょうじかんのたんしゅくをよぎなくされた。",
              romaji:"Kyuunahitodebusokude、eigyoujikannotanshukuwoyoginakusareta。",
              meaning:"Karena kekurangan staf mendadak, jam operasional terpaksa dipersingkat."
            },
            {
              jp:"体調不良のため、旅行の延期を余儀なくされた。",
              kana:"たいちょうふりょうのため、りょこうのえんきをよぎなくされた。",
              romaji:"Taichoufuryounotame、ryokounoenkiwoyoginakusareta。",
              meaning:"Karena kondisi badan kurang baik, saya terpaksa menunda perjalanan."
            },
            {
              jp:"設備の故障で、一時休業を余儀なくされた。",
              kana:"せつびのこしょうで、いちじきゅうぎょうをよぎなくされた。",
              romaji:"Setsubinokoshoude、ichijikyuugyouwoyoginakusareta。",
              meaning:"Karena kerusakan fasilitas, toko itu terpaksa tutup sementara."
            }
          ]
        }
      ]
    },

  {
      id:"GR-N1-206",
      level:"N1",
      title:"〜をよそに",
      summary:"Pola N1 〜をよそに dalam konteks alami sehari-hari dan formal.",
      groups:[
        {
          name:"〜をよそに",
          description:"Pola N1 〜をよそに dalam konteks alami sehari-hari dan formal.",
          sentences:[
            {
              jp:"親の心配をよそに、本人は意外と落ち着いていた。",
              kana:"おやのしんぱいをよそに、ほんにんはいがいとおちついていた。",
              romaji:"Oyanoshinpaiwoyosoni、honninhaigaitoochitsuiteita。",
              meaning:"Di tengah kekhawatiran orang tuanya, dia sendiri justru cukup tenang."
            },
            {
              jp:"周囲の忙しさをよそに、猫は窓辺で眠っていた。",
              kana:"しゅういのいそがしさをよそに、ねこはまどべでねむっていた。",
              romaji:"Shuuinoisogashisawoyosoni、nekohamadobedenemutsuteita。",
              meaning:"Di tengah kesibukan sekitar, kucing itu tidur di dekat jendela."
            },
            {
              jp:"世間の不安をよそに、観光地はかなりにぎわっていた。",
              kana:"せけんのふあんをよそに、かんこうちはかなりにぎわっていた。",
              romaji:"Sekennofuanwoyosoni、kankouchihakanarinigiwatteita。",
              meaning:"Di tengah kecemasan masyarakat, tempat wisata itu tetap ramai."
            },
            {
              jp:"雨の予報をよそに、空は午後から晴れてきた。",
              kana:"あめのよほうをよそに、そらはごごからはれてきた。",
              romaji:"Amenoyohouwoyosoni、sorahagogokaraharetekita。",
              meaning:"Meski ramalan bilang hujan, langit malah cerah mulai siang."
            },
            {
              jp:"締め切りへの焦りをよそに、彼だけは普段どおりだった。",
              kana:"しめきりへのあせりをよそに、かれだけはふだんどおりだった。",
              romaji:"Shimekirihenoaseriwoyosoni、karedakehafudandooridatta。",
              meaning:"Di tengah kegelisahan soal tenggat, hanya dia yang tetap seperti biasa."
            }
          ]
        }
      ]
    },

  {
      id:"GR-N1-207",
      level:"N1",
      title:"〜んがために",
      summary:"Pola N1 〜んがために dalam konteks alami sehari-hari dan formal.",
      groups:[
        {
          name:"〜んがために",
          description:"Pola N1 〜んがために dalam konteks alami sehari-hari dan formal.",
          sentences:[
            {
              jp:"家族を安心させんがために、無事だとすぐ連絡した。",
              kana:"かぞくをあんしんさせんがために、ぶじだとすぐれんらくした。",
              romaji:"Kazokuwoanshinsasengatameni、bujidatosugurenrakushita。",
              meaning:"Demi menenangkan keluarga, saya segera mengabari bahwa saya baik-baik saja."
            },
            {
              jp:"合格せんがために、毎朝早く起きて勉強している。",
              kana:"ごうかくせんがために、まいあさはやくおきてべんきょうしている。",
              romaji:"Goukakusengatameni、maiasahayakuokitebenkyoushiteiru。",
              meaning:"Demi lulus, saya bangun pagi setiap hari untuk belajar."
            },
            {
              jp:"信頼を得んがために、約束の時間だけは必ず守っている。",
              kana:"しんらいをえんがために、やくそくのじかんだけはかならずまもっている。",
              romaji:"Shinraiwoengatameni、yakusokunojikandakehakanarazumamotsuteiru。",
              meaning:"Demi mendapatkan kepercayaan, saya selalu menjaga ketepatan waktu."
            },
            {
              jp:"地域を守らんがために、住民たちが自主的に動いた。",
              kana:"ちいきをまもらんがために、じゅうみんたちがじしゅてきにうごいた。",
              romaji:"Chiikiwomamorangatameni、juumintachigajishutekiniugoita。",
              meaning:"Demi melindungi lingkungan tempat tinggal, para warga bergerak secara sukarela."
            },
            {
              jp:"よりよい提案を作らんがために、何度も修正を重ねた。",
              kana:"よりよいていあんをつくらんがために、なんどもしゅうせいをおもねた。",
              romaji:"Yoriyoiteianwotsukurangatameni、nandomoshuuseiwoomoneta。",
              meaning:"Demi membuat usulan yang lebih baik, saya berkali-kali merevisinya."
            }
          ]
        }
      ]
    },

  {
      id:"GR-N1-208",
      level:"N1",
      title:"〜んばかりに",
      summary:"Pola N1 〜んばかりに dalam konteks alami sehari-hari dan formal.",
      groups:[
        {
          name:"〜んばかりに",
          description:"Pola N1 〜んばかりに dalam konteks alami sehari-hari dan formal.",
          sentences:[
            {
              jp:"子どもたちは今にも飛び出さんばかりに前のめりで待っていた。",
              kana:"こどもたちはいまにもとびださんばかりにまえのめりでまっていた。",
              romaji:"Kodomotachihaimanimotobidasanbakarinimaenomeridematsuteita。",
              meaning:"Anak-anak menunggu sambil condong ke depan seolah akan langsung meloncat keluar."
            },
            {
              jp:"彼は怒鳴りださんばかりの勢いで話していた。",
              kana:"かれはどなりださんばかりのいきおいではなしていた。",
              romaji:"Karehadonaridasanbakarinoikioidehanashiteita。",
              meaning:"Dia berbicara dengan gaya seolah hampir berteriak."
            },
            {
              jp:"拍手が会場を包み、天井が揺れんばかりだった。",
              kana:"はくしゅがかいじょうをつつみ、てんじょうがゆれんばかりだった。",
              romaji:"Hakushugakaijouwotsutsumi、tenjougayurenbakaridatta。",
              meaning:"Tepuk tangan memenuhi ruangan sampai terasa seolah langit-langit akan bergetar."
            },
            {
              jp:"うれしさのあまり、泣きださんばかりの表情だった。",
              kana:"うれしさのあまり、なきださんばかりのひょうじょうだった。",
              romaji:"Ureshisanoamari、nakidasanbakarinohyoujoudatta。",
              meaning:"Karena begitu senang, ekspresinya seperti hampir menangis."
            },
            {
              jp:"急げと言わんばかりに、駅員が何度も案内していた。",
              kana:"いそげといわんばかりに、えきいんがなんどもあんないしていた。",
              romaji:"Isogetoiwanbakarini、ekiinganandomoannaishiteita。",
              meaning:"Petugas stasiun berkali-kali memberi arahan seolah berkata cepatlah."
            }
          ]
        }
      ]
    }

];
