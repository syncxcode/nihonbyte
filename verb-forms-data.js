(function initVerbFormsData() {
  const LEVEL_ORDER = ["N5", "N4", "N3", "N2", "N1"];

  const formDefinitions = [
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

  const groupSeeds = [
    {
      name: "Godan",
      base: "書く",
      baseKana: "かく",
      baseRomaji: "kaku",
      meaning: "menulis"
    },
    {
      name: "Ichidan",
      base: "食べる",
      baseKana: "たべる",
      baseRomaji: "taberu",
      meaning: "makan"
    },
    {
      name: "Irregular / Suru",
      base: "勉強する",
      baseKana: "べんきょうする",
      baseRomaji: "benkyou suru",
      meaning: "belajar"
    }
  ];

  const sentenceTimeWords = [
    ["毎日", "まいにち", "mainichi", "setiap hari"],
    ["今朝", "けさ", "kesa", "pagi ini"],
    ["今日は", "きょうは", "kyou wa", "hari ini"],
    ["明日", "あした", "ashita", "besok"],
    ["授業で", "じゅぎょうで", "jugyou de", "di kelas"],
    ["家で", "いえで", "ie de", "di rumah"],
    ["学校で", "がっこうで", "gakkou de", "di sekolah"],
    ["仕事の後で", "しごとの あとで", "shigoto no ato de", "setelah kerja"],
    ["週末に", "しゅうまつに", "shuumatsu ni", "di akhir pekan"],
    ["友だちと", "ともだちと", "tomodachi to", "bersama teman"]
  ];

  function createExampleSentences(transformed, baseMeaning, title) {
    return sentenceTimeWords.map(([prefixJp, prefixKana, prefixRomaji, prefixMeaning], index) => ({
      jp: `${prefixJp}「${transformed}」を使います。`,
      kana: `${prefixKana}「${transformed}」を つかいます。`,
      romaji: `${prefixRomaji} "${transformed}" o tsukaimasu.`,
      meaning: `${prefixMeaning}, saya memakai bentuk ${title.toLowerCase()} untuk kata kerja "${baseMeaning}".`,
      audio: `${prefixJp}「${transformed}」を使います。`,
      order: index + 1
    }));
  }

  function makeForm([number, suffix, summary, level]) {
    const id = `vf-${String(number).padStart(2, "0")}`;
    const title = `${suffix} • ${summary}`;

    return {
      id,
      level,
      order: Number(number),
      title,
      summary: `${summary} (${level}).`,
      formulas: [
        { group: "Godan", rule: `Pakai pola ${suffix} untuk kata kerja golongan Godan sesuai konteks.` },
        { group: "Ichidan", rule: `Pakai pola ${suffix} untuk kata kerja golongan Ichidan sesuai konteks.` },
        { group: "Irregular / Suru", rule: `Pakai pola ${suffix} untuk kata kerja tidak beraturan seperti する/来る.` }
      ],
      groups: groupSeeds.map((seed) => {
        const transformed = `${seed.base}${suffix.replace("~", "")}`;
        return {
          name: seed.name,
          examples: [
            {
              base: seed.base,
              transformed,
              kana: `${seed.baseKana} → ${seed.baseKana} + ${suffix.replace("~", "")}`,
              romaji: `${seed.baseRomaji} → ${seed.baseRomaji} + ${suffix.replace("~", "")}`,
              meaning: `${seed.meaning} (${summary.toLowerCase()})`,
              sentences: createExampleSentences(transformed, seed.meaning, summary)
            }
          ]
        };
      })
    };
  }

  const forms = formDefinitions.map(makeForm).sort((a, b) => a.order - b.order);

  window.verbFormsData = forms;
  window.verbFormsLevels = LEVEL_ORDER;
})();
