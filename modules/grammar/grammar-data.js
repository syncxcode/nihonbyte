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
      {jp:"このあたりはかつて海だったようで、地層から貝の化石が見つかっています。",kana:"このあたりはかつてうみだったようで、ちそうからかいのかせきがみつかっています。",romaji:"Kono atari wa katsute umi datta you de, chisou kara kai no kaseki ga mitsukatte imasu.",meaning:"Sepertinya area ini dulunya adalah laut — fosil kerang ditemukan dari lapisan tanahnya."},
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
      {jp:"このデザイン、もう少し余白があったほうが見やすいと思います。",kana:"このでざいん、もうすこしよはくがあったほうがみやすいとおもいます。",romaji:"Kono dezain, mou sukoshi yohaku ga atta hou ga miyasui to omoimasu.",meaning:"Menurut saya desain ini akan lebih mudah dibaca kalau ada sedikit lebih banyak ruang kosong."},
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
      {jp:"伝統的な和紙は、楮という植物の繊維で作られています。",kana:"でんとうてきなわしは、こうぞというしょくぶつのせんいでつくられています。",romaji:"Dentouteki na washi wa, kouzo to iu shokubutsu no sen'i de tsukurete imasu.",meaning:"Kertas washi tradisional dibuat dari serat tanaman yang disebut kouzo."},
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
    {jp:"SNSはつながりやすさが魅力だけど、その手軽さが孤独感を増やすこともある。",kana:"えすえぬえすはつながりやすさがみりょくだけど、そのてがるさがこどくかんをふやすこともある。",romaji:"SNS wa tsunagariyasusa ga miryoku daketa, sono tegaru-sa ga kodokukan o fuyasu koto mo aru.",meaning:"Kemudahan terhubung adalah daya tarik media sosial, tapi kepraktisan itu juga kadang justru memperparah rasa kesepian."}
  ]}]},

  // ── GR-N4-80: [Adjective] + [Verb] ──
  {id:"GR-N4-80",level:"N4",title:"[Adjective] + [Verb]",summary:"Kata sifat yang diubah menjadi kata keterangan untuk memodifikasi kata kerja. い-adj: ganti い → く. な-adj: tambah に. Menyatakan cara atau kondisi saat melakukan tindakan.",groups:[
    {name:"い-adj → 〜く + Verb",description:"Ubah い menjadi く untuk memodifikasi kata kerja.",sentences:[
      {jp:"プレゼン前は声を大きくはっきり話すように意識しています。",kana:"ぷれぜんまえはこえをおおきくはっきりはなすようにいしきしています。",romaji:"Purezen mae wa koe o ookiku hakkiri hanasu you ni ishiki shite imasu.",meaning:"Sebelum presentasi, selalu sadar untuk bicara dengan suara keras dan jelas."},
      {jp:"締め切りが迫っているから、少し早く仕上げてもらえると助かります。",kana:"しめきりがせまっているから、すこしはやくしあげてもらえるとたすかります。",romaji:"Shimekiri ga sematte iru kara, sukoshi hayaku shiagete moraeru to tasukarimasu.",meaning:"Deadlinenya sudah dekat, jadi kalau bisa diselesaikan sedikit lebih cepat akan sangat membantu."},
      {jp:"部屋を明るく飾ったら、なんとなく気分も上向きになった。",kana:"へやをあかるくかざったら、なんとなくきぶんもうわむきになった。",romaji:"Heya o akaruku kazattara, nantonaku kibun mo uwamuki ni natta.",meaning:"Setelah mendekorasi kamar menjadi lebih cerah, entah kenapa suasana hati juga ikut membaik."},
      {jp:"悲しくて泣きたいときは、無理に笑わなくていいよ。",kana:"かなしくてなきたいときは、むりにわらわなくていいよ。",romaji:"Kanashikute nakitai toki wa, muri ni warawanakute ii yo.",meaning:"Kalau sedih dan mau menangis, tidak perlu memaksakan diri untuk tersenyum."},
      {jp:"このフォント、もう少し小さくすると全体のバランスがよくなると思う。",kana:"このふぉんと、もうすこしちいさくすると全体のばらんすがよくなるとおもう。",romaji:"Kono fonto, mou sukoshi chiisaku suru to zentai no baransu ga yoku naru to omou.",meaning:"Kalau font ini diperkecil sedikit lagi, keseimbangan keseluruhannya menurut saya akan lebih baik."}
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
    {jp:"丁寧語はすでに〜ます／〜ですで学んでいるが、尊敬語と謙譲語はそこからさらに一段上のレベルになる。",kana:"ていねいごはすでに〜ます／〜ですでまなんでいるが、そんけいごとけんじょうごはそこからさらにいちだんうえのれべるになる。",romaji:"Teineigo wa sude ni ～masu/～desu de manande iru ga, sonkeigo to kenjougo wa soko kara sara ni ichidan ue no reberu ni naru.",meaning:"Teineigo sudah dipelajari lewat 〜ます／〜です, tapi sonkeigo dan kenjougo adalah satu tingkat lebih tinggi dari situ."},
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
];
