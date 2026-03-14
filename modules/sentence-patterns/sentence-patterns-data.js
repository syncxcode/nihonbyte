// Sentence Patterns Data — NihonByte
// Modul terpisah dari data.js (vocab) dan app.js (logic utama).
// Tiap pattern punya: id, level, title, summary, groups[].
// Tiap group punya: name, description, sentences[] (min 10 contoh).

window.sentencePatternsLevels = ["N5", "N4", "N3", "N2", "N1"];

window.sentencePatternsData = [

  // ─────────────────────────────────────
  // SP-N5-01: これ / それ / あれ / どれ
  // ─────────────────────────────────────
  {
    id: "SP-N5-01",
    level: "N5",
    title: "これ / それ / あれ / どれ",
    summary: "Kata tunjuk untuk benda. これ (ini, dekat pembicara), それ (itu, dekat pendengar), あれ (itu di sana, jauh dari keduanya), どれ (yang mana, kata tanya).",
    groups: [
      {
        name: "これ",
        description: "Menunjuk benda yang dekat dengan pembicara (ini).",
        sentences: [
          { jp: "これは本です。", kana: "これはほんです。", romaji: "Kore wa hon desu.", meaning: "Ini adalah buku." },
          { jp: "これはペンです。", kana: "これはぺんです。", romaji: "Kore wa pen desu.", meaning: "Ini adalah pena." },
          { jp: "これは私の鍵です。", kana: "これはわたしのかぎです。", romaji: "Kore wa watashi no kagi desu.", meaning: "Ini adalah kunci saya." },
          { jp: "これはおいしいです。", kana: "これはおいしいです。", romaji: "Kore wa oishii desu.", meaning: "Ini enak." },
          { jp: "これは何ですか。", kana: "これはなんですか。", romaji: "Kore wa nan desu ka.", meaning: "Ini apa?" },
          { jp: "これは日本語の本です。", kana: "これはにほんごのほんです。", romaji: "Kore wa nihongo no hon desu.", meaning: "Ini adalah buku bahasa Jepang." },
          { jp: "これは新しいです。", kana: "これはあたらしいです。", romaji: "Kore wa atarashii desu.", meaning: "Ini baru." },
          { jp: "これは友達の傘です。", kana: "これはともだちのかさです。", romaji: "Kore wa tomodachi no kasa desu.", meaning: "Ini payung teman saya." },
          { jp: "これは高いです。", kana: "これはたかいです。", romaji: "Kore wa takai desu.", meaning: "Ini mahal." },
          { jp: "これは私のかばんです。", kana: "これはわたしのかばんです。", romaji: "Kore wa watashi no kaban desu.", meaning: "Ini adalah tas saya." }
        ]
      },
      {
        name: "それ",
        description: "Menunjuk benda yang dekat dengan pendengar (itu).",
        sentences: [
          { jp: "それは辞書です。", kana: "それはじしょです。", romaji: "Sore wa jisho desu.", meaning: "Itu adalah kamus." },
          { jp: "それは誰のですか。", kana: "それはだれのですか。", romaji: "Sore wa dare no desu ka.", meaning: "Itu punya siapa?" },
          { jp: "それをください。", kana: "それをください。", romaji: "Sore o kudasai.", meaning: "Tolong berikan itu." },
          { jp: "それは面白いです。", kana: "それはおもしろいです。", romaji: "Sore wa omoshiroi desu.", meaning: "Itu menarik." },
          { jp: "それは田中さんのです。", kana: "それはたなかさんのです。", romaji: "Sore wa Tanaka-san no desu.", meaning: "Itu milik Tanaka." },
          { jp: "それはいくらですか。", kana: "それはいくらですか。", romaji: "Sore wa ikura desu ka.", meaning: "Itu berapa harganya?" },
          { jp: "それは古いです。", kana: "それはふるいです。", romaji: "Sore wa furui desu.", meaning: "Itu sudah lama." },
          { jp: "それは何の雑誌ですか。", kana: "それはなんのざっしですか。", romaji: "Sore wa nan no zasshi desu ka.", meaning: "Itu majalah apa?" },
          { jp: "それは大きいです。", kana: "それはおおきいです。", romaji: "Sore wa ookii desu.", meaning: "Itu besar." },
          { jp: "それは私のじゃありません。", kana: "それはわたしのじゃありません。", romaji: "Sore wa watashi no ja arimasen.", meaning: "Itu bukan milik saya." }
        ]
      },
      {
        name: "あれ",
        description: "Menunjuk benda yang jauh dari pembicara dan pendengar (itu di sana).",
        sentences: [
          { jp: "あれは学校です。", kana: "あれはがっこうです。", romaji: "Are wa gakkou desu.", meaning: "Itu (di sana) adalah sekolah." },
          { jp: "あれは何ですか。", kana: "あれはなんですか。", romaji: "Are wa nan desu ka.", meaning: "Itu (di sana) apa?" },
          { jp: "あれは山です。", kana: "あれはやまです。", romaji: "Are wa yama desu.", meaning: "Itu (di sana) adalah gunung." },
          { jp: "あれは銀行です。", kana: "あれはぎんこうです。", romaji: "Are wa ginkou desu.", meaning: "Itu (di sana) adalah bank." },
          { jp: "あれは大きい建物です。", kana: "あれはおおきいたてものです。", romaji: "Are wa ookii tatemono desu.", meaning: "Itu (di sana) adalah gedung besar." },
          { jp: "あれは病院です。", kana: "あれはびょういんです。", romaji: "Are wa byouin desu.", meaning: "Itu (di sana) adalah rumah sakit." },
          { jp: "あれは駅です。", kana: "あれはえきです。", romaji: "Are wa eki desu.", meaning: "Itu (di sana) adalah stasiun." },
          { jp: "あれは田中さんの車です。", kana: "あれはたなかさんのくるまです。", romaji: "Are wa Tanaka-san no kuruma desu.", meaning: "Itu (di sana) adalah mobil Tanaka." },
          { jp: "あれは図書館です。", kana: "あれはとしょかんです。", romaji: "Are wa toshokan desu.", meaning: "Itu (di sana) adalah perpustakaan." },
          { jp: "あれは新しいホテルです。", kana: "あれはあたらしいほてるです。", romaji: "Are wa atarashii hoteru desu.", meaning: "Itu (di sana) adalah hotel baru." }
        ]
      },
      {
        name: "どれ",
        description: "Kata tanya untuk menanyakan pilihan dari tiga benda atau lebih (yang mana).",
        sentences: [
          { jp: "どれがあなたのですか。", kana: "どれがあなたのですか。", romaji: "Dore ga anata no desu ka.", meaning: "Yang mana milikmu?" },
          { jp: "どれがいいですか。", kana: "どれがいいですか。", romaji: "Dore ga ii desu ka.", meaning: "Yang mana yang bagus?" },
          { jp: "どれが好きですか。", kana: "どれがすきですか。", romaji: "Dore ga suki desu ka.", meaning: "Yang mana yang kamu suka?" },
          { jp: "どれが安いですか。", kana: "どれがやすいですか。", romaji: "Dore ga yasui desu ka.", meaning: "Yang mana yang murah?" },
          { jp: "どれが田中さんのかばんですか。", kana: "どれがたなかさんのかばんですか。", romaji: "Dore ga Tanaka-san no kaban desu ka.", meaning: "Yang mana tas Tanaka?" },
          { jp: "どれを買いますか。", kana: "どれをかいますか。", romaji: "Dore o kaimasu ka.", meaning: "Yang mana yang kamu beli?" },
          { jp: "どれが一番おいしいですか。", kana: "どれがいちばんおいしいですか。", romaji: "Dore ga ichiban oishii desu ka.", meaning: "Yang mana yang paling enak?" },
          { jp: "どれが正しいですか。", kana: "どれがただしいですか。", romaji: "Dore ga tadashii desu ka.", meaning: "Yang mana yang benar?" },
          { jp: "どれにしますか。", kana: "どれにしますか。", romaji: "Dore ni shimasu ka.", meaning: "Mau pilih yang mana?" },
          { jp: "どれが新しいですか。", kana: "どれがあたらしいですか。", romaji: "Dore ga atarashii desu ka.", meaning: "Yang mana yang baru?" }
        ]
      }
    ]
  }

];
