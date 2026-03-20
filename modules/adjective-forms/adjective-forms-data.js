window.adjectiveFormsData = [
  {
    id: "adj-past",
    title: "Bentuk Lampau (過去形)",
    summary: "Dipakai untuk menyatakan kondisi sifat di masa lalu.",
    formulas: [
      { group: "い-adjective", rule: "Ganti akhiran い menjadi かった." },
      { group: "な-adjective", rule: "Tambah でした / だった setelah kata sifat." }
    ],
    groups: [
      {
        name: "い-adjective",
        examples: [
          {
            base: "暑い",
            transformed: "暑かった",
            kana: "あつい → あつかった",
            romaji: "atsui → atsukatta",
            meaning: "dulu panas",
            sentences: [
              { jp: "昨日はとても暑かったです。", kana: "きのうは とても あつかったです。", romaji: "Kinou wa totemo atsukatta desu.", meaning: "Kemarin sangat panas.", audio: "昨日はとても暑かったです。" },
              { jp: "去年の夏は暑かった。", kana: "きょねんの なつは あつかった。", romaji: "Kyonen no natsu wa atsukatta.", meaning: "Musim panas tahun lalu panas.", audio: "去年の夏は暑かった。" }
            ]
          }
        ]
      },
      {
        name: "な-adjective",
        examples: [
          {
            base: "静か",
            transformed: "静かでした",
            kana: "しずか → しずかでした",
            romaji: "shizuka → shizuka deshita",
            meaning: "dulu tenang",
            sentences: [
              { jp: "図書館は静かでした。", kana: "としょかんは しずかでした。", romaji: "Toshokan wa shizuka deshita.", meaning: "Perpustakaan tadi tenang.", audio: "図書館は静かでした。" },
              { jp: "朝の公園は静かだった。", kana: "あさの こうえんは しずかだった。", romaji: "Asa no kouen wa shizuka datta.", meaning: "Taman di pagi hari tenang.", audio: "朝の公園は静かだった。" }
            ]
          }
        ]
      }
    ]
  },
  {
    id: "adj-negative",
    title: "Bentuk Negatif (否定形)",
    summary: "Dipakai untuk menyatakan sifat yang tidak berlaku.",
    formulas: [
      { group: "い-adjective", rule: "Ganti akhiran い menjadi くない." },
      { group: "な-adjective", rule: "Tambah じゃない / ではありません." }
    ],
    groups: [
      {
        name: "い-adjective",
        examples: [
          {
            base: "高い",
            transformed: "高くない",
            kana: "たかい → たかくない",
            romaji: "takai → takakunai",
            meaning: "tidak mahal / tidak tinggi",
            sentences: [
              { jp: "この店の弁当は高くないです。", kana: "この みせの べんとうは たかくないです。", romaji: "Kono mise no bentou wa takakunai desu.", meaning: "Bento di toko ini tidak mahal.", audio: "この店の弁当は高くないです。" },
              { jp: "その山は高くない。", kana: "その やまは たかくない。", romaji: "Sono yama wa takakunai.", meaning: "Gunung itu tidak tinggi.", audio: "その山は高くない。" }
            ]
          }
        ]
      },
      {
        name: "な-adjective",
        examples: [
          {
            base: "便利",
            transformed: "便利じゃない",
            kana: "べんり → べんりじゃない",
            romaji: "benri → benri janai",
            meaning: "tidak praktis",
            sentences: [
              { jp: "ここは駅から遠くて便利じゃない。", kana: "ここは えきから とおくて べんりじゃない。", romaji: "Koko wa eki kara tookute benri janai.", meaning: "Tempat ini jauh dari stasiun jadi tidak praktis.", audio: "ここは駅から遠くて便利じゃない。" },
              { jp: "このアプリは便利じゃありません。", kana: "この アプリは べんりじゃありません。", romaji: "Kono apuri wa benri ja arimasen.", meaning: "Aplikasi ini tidak praktis.", audio: "このアプリは便利じゃありません。" }
            ]
          }
        ]
      }
    ]
  }
];
