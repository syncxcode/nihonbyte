window.verbFormsData = [
  {
    id: "te",
    title: "~TE (て形)",
    summary: "Bentuk sambung untuk meminta, menghubungkan kalimat, progresif (~ています), izin (~てもいい), dan larangan (~てはいけない).",
    formulas: [
      {
        group: "Godan",
        rule: "Ubah akhiran sesuai baris: う/つ/る → って, む/ぶ/ぬ → んで, く → いて (行く → 行って), ぐ → いで, す → して."
      },
      {
        group: "Ichidan",
        rule: "Hapus akhiran る lalu tambah て."
      },
      {
        group: "Irregular / Suru",
        rule: "する → して, 来る(くる) → 来て(きて)."
      }
    ],
    groups: [
      {
        name: "Godan",
        examples: [
          {
            base: "洗う",
            transformed: "洗って",
            kana: "あらう → あらって",
            romaji: "arau → aratte",
            meaning: "mencuci",
            sentences: [
              {
                jp: "手を洗ってください。",
                kana: "てを あらって ください。",
                romaji: "Te o aratte kudasai.",
                meaning: "Tolong cuci tangan.",
                audio: "手を洗ってください。"
              },
              {
                jp: "皿を洗ってから寝ます。",
                kana: "さらを あらって から ねます。",
                romaji: "Sara o aratte kara nemasu.",
                meaning: "Saya tidur setelah mencuci piring.",
                audio: "皿を洗ってから寝ます。"
              }
            ]
          }
        ]
      },
      {
        name: "Ichidan",
        examples: [
          {
            base: "食べる",
            transformed: "食べて",
            kana: "たべる → たべて",
            romaji: "taberu → tabete",
            meaning: "makan",
            sentences: [
              {
                jp: "野菜を食べて元気になりましょう。",
                kana: "やさいを たべて げんきに なりましょう。",
                romaji: "Yasai o tabete genki ni narimashou.",
                meaning: "Mari makan sayur agar sehat.",
                audio: "野菜を食べて元気になりましょう。"
              },
              {
                jp: "朝ごはんを食べて学校へ行きます。",
                kana: "あさごはんを たべて がっこうへ いきます。",
                romaji: "Asagohan o tabete gakkou e ikimasu.",
                meaning: "Saya sarapan lalu pergi ke sekolah.",
                audio: "朝ごはんを食べて学校へ行きます。"
              }
            ]
          }
        ]
      },
      {
        name: "Irregular / Suru",
        examples: [
          {
            base: "掃除する",
            transformed: "掃除して",
            kana: "そうじする → そうじして",
            romaji: "souji suru → souji shite",
            meaning: "bersih-bersih",
            sentences: [
              {
                jp: "部屋を掃除してから出かけます。",
                kana: "へやを そうじして から でかけます。",
                romaji: "Heya o souji shite kara dekakemasu.",
                meaning: "Saya pergi setelah membersihkan kamar.",
                audio: "部屋を掃除してから出かけます。"
              },
              {
                jp: "週末にいっしょに掃除してくれませんか。",
                kana: "しゅうまつに いっしょに そうじして くれませんか。",
                romaji: "Shuumatsu ni issho ni souji shite kuremasen ka.",
                meaning: "Mau bantu bersih-bersih bareng akhir pekan ini?",
                audio: "週末にいっしょに掃除してくれませんか。"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    id: "nai",
    title: "~NAI (ない形)",
    summary: "Bentuk negatif kasual untuk menyatakan tidak melakukan suatu aksi.",
    formulas: [
      { group: "Godan", rule: "Ubah akhiran u ke baris a + ない. Khusus う → わない." },
      { group: "Ichidan", rule: "Hapus る lalu tambah ない." },
      { group: "Irregular / Suru", rule: "する → しない, 来る(くる) → 来ない(こない)." }
    ],
    groups: [
      {
        name: "Godan",
        examples: [
          {
            base: "飲む",
            transformed: "飲まない",
            kana: "のむ → のまない",
            romaji: "nomu → nomanai",
            meaning: "tidak minum",
            sentences: [
              { jp: "今日はコーヒーを飲まない。", kana: "きょうは コーヒーを のまない。", romaji: "Kyou wa koohii o nomanai.", meaning: "Hari ini saya tidak minum kopi.", audio: "今日はコーヒーを飲まない。" },
              { jp: "薬を飲まないとだめです。", kana: "くすりを のまないと だめです。", romaji: "Kusuri o nomanai to dame desu.", meaning: "Kalau tidak minum obat tidak boleh.", audio: "薬を飲まないとだめです。" }
            ]
          }
        ]
      },
      {
        name: "Ichidan",
        examples: [
          {
            base: "見る",
            transformed: "見ない",
            kana: "みる → みない",
            romaji: "miru → minai",
            meaning: "tidak melihat",
            sentences: [
              { jp: "テレビを見ないで勉強します。", kana: "テレビを みないで べんきょうします。", romaji: "Terebi o minaide benkyou shimasu.", meaning: "Saya belajar tanpa menonton TV.", audio: "テレビを見ないで勉強します。" },
              { jp: "怖い映画は見ない。", kana: "こわい えいがは みない。", romaji: "Kowai eiga wa minai.", meaning: "Saya tidak menonton film horor.", audio: "怖い映画は見ない。" }
            ]
          }
        ]
      },
      {
        name: "Irregular / Suru",
        examples: [
          {
            base: "勉強する",
            transformed: "勉強しない",
            kana: "べんきょうする → べんきょうしない",
            romaji: "benkyou suru → benkyou shinai",
            meaning: "tidak belajar",
            sentences: [
              { jp: "毎日勉強しないと忘れます。", kana: "まいにち べんきょうしないと わすれます。", romaji: "Mainichi benkyou shinai to wasuremasu.", meaning: "Kalau tidak belajar tiap hari, akan lupa.", audio: "毎日勉強しないと忘れます。" },
              { jp: "今日は日本語を勉強しない。", kana: "きょうは にほんごを べんきょうしない。", romaji: "Kyou wa nihongo o benkyou shinai.", meaning: "Hari ini saya tidak belajar bahasa Jepang.", audio: "今日は日本語を勉強しない。" }
            ]
          }
        ]
      }
    ]
  }
];
