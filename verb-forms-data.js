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
    ["仕事の後で", "しごとのあとで", "shigoto no ato de", "setelah kerja"],
    ["週末に", "しゅうまつに", "shuumatsu ni", "di akhir pekan"],
    ["友だちと", "ともだちと", "tomodachi to", "bersama teman"]
  ];

  function createConjugator(seed) {
    if (seed.name === "Godan") {
      const d = {
        plain: ["書く", "かく", "kaku"],
        nai: ["書かない", "かかない", "kakanai"],
        masu: ["書きます", "かきます", "kakimasu"],
        masen: ["書きません", "かきません", "kakimasen"],
        ta: ["書いた", "かいた", "kaita"],
        nakatta: ["書かなかった", "かかなかった", "kakanakatta"],
        mashita: ["書きました", "かきました", "kakimashita"],
        masendeshita: ["書きませんでした", "かきませんでした", "kakimasen deshita"],
        ba: ["書けば", "かけば", "kakeba"],
        nakereba: ["書かなければ", "かかなければ", "kakanakereba"],
        te: ["書いて", "かいて", "kaite"],
        naide: ["書かないで", "かかないで", "kakanaide"],
        imperative: ["書け", "かけ", "kake"],
        shite: ["書いて", "かいて", "kaite"],
        chau: ["書いちゃう", "かいちゃう", "kaichau"],
        causative: ["書かせる", "かかせる", "kakaseru"],
        stem: ["書き", "かき", "kaki"],
        volitional: ["書こう", "かこう", "kakou"]
      };
      return {
        transform(order) {
          const f = {
            1: d.plain, 2: d.nai, 3: d.masu, 4: d.masen, 5: d.ta, 6: d.nakatta, 7: d.mashita, 8: d.masendeshita,
            9: ["書くでしょう", "かくでしょう", "kaku deshou"], 10: ["書かないでしょう", "かかないでしょう", "kakanai deshou"],
            11: ["書くよ", "かくよ", "kaku yo"], 12: ["書かないよ", "かかないよ", "kakanai yo"],
            13: d.ba, 14: d.nakereba, 15: d.te, 16: d.naide,
            17: ["書いてください", "かいてください", "kaite kudasai"], 18: ["書かないでください", "かかないでください", "kakanaide kudasai"],
            19: d.imperative, 20: ["書くな", "かくな", "kaku na"], 21: ["書けよ", "かけよ", "kake yo"], 22: ["書くなよ", "かくなよ", "kaku na yo"],
            23: ["書いてしまう", "かいてしまう", "kaite shimau"], 24: ["書いてしまいます", "かいてしまいます", "kaite shimaimasu"],
            25: ["書いてしまった", "かいてしまった", "kaite shimatta"], 26: ["書いてしまいました", "かいてしまいました", "kaite shimaimashita"],
            27: d.chau, 28: ["書いちゃいます", "かいちゃいます", "kaichaimasu"], 29: ["書いちゃった", "かいちゃった", "kaichatta"], 30: ["書いちゃいました", "かいちゃいました", "kaichaimashita"],
            31: ["書いてもいい", "かいてもいい", "kaite mo ii"], 32: ["書かなくてもいい", "かかなくてもいい", "kakanakute mo ii"],
            33: ["書かないといけない", "かかないといけない", "kakanai to ikenai"], 34: ["書いてはいけない", "かいてはいけない", "kaite wa ikenai"],
            35: ["書きたい", "かきたい", "kakitai"], 36: ["書きたくない", "かきたくない", "kakitakunai"],
            37: ["書きたいです", "かきたいです", "kakitai desu"], 38: ["書きたくないです", "かきたくないです", "kakitakunai desu"],
            39: ["書きたかった", "かきたかった", "kakitakatta"], 40: ["書きたくなかった", "かきたくなかった", "kakitakunakatta"],
            41: ["書きたかったです", "かきたかったです", "kakitakatta desu"], 42: ["書きたくなかったです", "かきたくなかったです", "kakitakunakatta desu"],
            43: ["書いてほしい", "かいてほしい", "kaite hoshii"], 44: ["書いてほしくない", "かいてほしくない", "kaite hoshikunai"],
            45: ["書いてほしかった", "かいてほしかった", "kaite hoshikatta"], 46: ["書いてほしくなかった", "かいてほしくなかった", "kaite hoshikunakatta"],
            47: ["書くべきだ", "かくべきだ", "kaku beki da"], 48: ["書くべきです", "かくべきです", "kaku beki desu"], 49: ["書くべきでしょう", "かくべきでしょう", "kaku beki deshou"],
            50: ["書いたほうがいい", "かいたほうがいい", "kaita hou ga ii"], 51: ["書かないほうがいい", "かかないほうがいい", "kakanai hou ga ii"],
            52: ["書きましょう", "かきましょう", "kakimashou"], 53: ["書こうとする", "かこうとする", "kakou to suru"],
            54: ["書きやすい", "かきやすい", "kakiyasui"], 55: ["書きにくい", "かきにくい", "kakinikui"],
            56: d.causative, 57: ["書かせます", "かかせます", "kakasemasu"], 58: ["書かせた", "かかせた", "kakaseta"], 59: ["書かせました", "かかせました", "kakasemashita"],
            60: ["書きすぎる", "かきすぎる", "kakisugiru"], 61: ["書きすぎた", "かきすぎた", "kakisugita"],
            62: ["書いてもらう", "かいてもらう", "kaite morau"]
          };
          return f[order] || d.plain;
        }
      };
    }

    if (seed.name === "Ichidan") {
      const d = {
        plain: ["食べる", "たべる", "taberu"],
        nai: ["食べない", "たべない", "tabenai"],
        masu: ["食べます", "たべます", "tabemasu"],
        masen: ["食べません", "たべません", "tabemasen"],
        ta: ["食べた", "たべた", "tabeta"],
        nakatta: ["食べなかった", "たべなかった", "tabenakatta"],
        mashita: ["食べました", "たべました", "tabemashita"],
        masendeshita: ["食べませんでした", "たべませんでした", "tabemasen deshita"],
        ba: ["食べれば", "たべれば", "tabereba"],
        nakereba: ["食べなければ", "たべなければ", "tabenakereba"],
        te: ["食べて", "たべて", "tabete"],
        naide: ["食べないで", "たべないで", "tabenaide"],
        imperative: ["食べろ", "たべろ", "tabero"],
        volitional: ["食べよう", "たべよう", "tabeyou"]
      };
      return {
        transform(order) {
          const f = {
            1: d.plain, 2: d.nai, 3: d.masu, 4: d.masen, 5: d.ta, 6: d.nakatta, 7: d.mashita, 8: d.masendeshita,
            9: ["食べるでしょう", "たべるでしょう", "taberu deshou"], 10: ["食べないでしょう", "たべないでしょう", "tabenai deshou"],
            11: ["食べるよ", "たべるよ", "taberu yo"], 12: ["食べないよ", "たべないよ", "tabenai yo"],
            13: d.ba, 14: d.nakereba, 15: d.te, 16: d.naide,
            17: ["食べてください", "たべてください", "tabete kudasai"], 18: ["食べないでください", "たべないでください", "tabenaide kudasai"],
            19: d.imperative, 20: ["食べるな", "たべるな", "taberu na"], 21: ["食べろよ", "たべろよ", "tabero yo"], 22: ["食べるなよ", "たべるなよ", "taberu na yo"],
            23: ["食べてしまう", "たべてしまう", "tabete shimau"], 24: ["食べてしまいます", "たべてしまいます", "tabete shimaimasu"],
            25: ["食べてしまった", "たべてしまった", "tabete shimatta"], 26: ["食べてしまいました", "たべてしまいました", "tabete shimaimashita"],
            27: ["食べちゃう", "たべちゃう", "tabechau"], 28: ["食べちゃいます", "たべちゃいます", "tabechaimasu"], 29: ["食べちゃった", "たべちゃった", "tabechatta"], 30: ["食べちゃいました", "たべちゃいました", "tabechaimashita"],
            31: ["食べてもいい", "たべてもいい", "tabete mo ii"], 32: ["食べなくてもいい", "たべなくてもいい", "tabenakute mo ii"],
            33: ["食べないといけない", "たべないといけない", "tabenai to ikenai"], 34: ["食べてはいけない", "たべてはいけない", "tabete wa ikenai"],
            35: ["食べたい", "たべたい", "tabetai"], 36: ["食べたくない", "たべたくない", "tabetakunai"],
            37: ["食べたいです", "たべたいです", "tabetai desu"], 38: ["食べたくないです", "たべたくないです", "tabetakunai desu"],
            39: ["食べたかった", "たべたかった", "tabetakatta"], 40: ["食べたくなかった", "たべたくなかった", "tabetakunakatta"],
            41: ["食べたかったです", "たべたかったです", "tabetakatta desu"], 42: ["食べたくなかったです", "たべたくなかったです", "tabetakunakatta desu"],
            43: ["食べてほしい", "たべてほしい", "tabete hoshii"], 44: ["食べてほしくない", "たべてほしくない", "tabete hoshikunai"],
            45: ["食べてほしかった", "たべてほしかった", "tabete hoshikatta"], 46: ["食べてほしくなかった", "たべてほしくなかった", "tabete hoshikunakatta"],
            47: ["食べるべきだ", "たべるべきだ", "taberu beki da"], 48: ["食べるべきです", "たべるべきです", "taberu beki desu"], 49: ["食べるべきでしょう", "たべるべきでしょう", "taberu beki deshou"],
            50: ["食べたほうがいい", "たべたほうがいい", "tabeta hou ga ii"], 51: ["食べないほうがいい", "たべないほうがいい", "tabenai hou ga ii"],
            52: ["食べましょう", "たべましょう", "tabemashou"], 53: ["食べようとする", "たべようとする", "tabeyou to suru"],
            54: ["食べやすい", "たべやすい", "tabeyasui"], 55: ["食べにくい", "たべにくい", "tabenikui"],
            56: ["食べさせる", "たべさせる", "tabesaseru"], 57: ["食べさせます", "たべさせます", "tabesasemasu"], 58: ["食べさせた", "たべさせた", "tabesaseta"], 59: ["食べさせました", "たべさせました", "tabesasemashita"],
            60: ["食べすぎる", "たべすぎる", "tabesugiru"], 61: ["食べすぎた", "たべすぎた", "tabesugita"],
            62: ["食べてもらう", "たべてもらう", "tabete morau"]
          };
          return f[order] || d.plain;
        }
      };
    }

    // Irregular / Suru
    return {
      transform(order) {
        const f = {
          1: ["勉強する", "べんきょうする", "benkyou suru"],
          2: ["勉強しない", "べんきょうしない", "benkyou shinai"],
          3: ["勉強します", "べんきょうします", "benkyou shimasu"],
          4: ["勉強しません", "べんきょうしません", "benkyou shimasen"],
          5: ["勉強した", "べんきょうした", "benkyou shita"],
          6: ["勉強しなかった", "べんきょうしなかった", "benkyou shinakatta"],
          7: ["勉強しました", "べんきょうしました", "benkyou shimashita"],
          8: ["勉強しませんでした", "べんきょうしませんでした", "benkyou shimasen deshita"],
          9: ["勉強するでしょう", "べんきょうするでしょう", "benkyou suru deshou"],
          10: ["勉強しないでしょう", "べんきょうしないでしょう", "benkyou shinai deshou"],
          11: ["勉強するよ", "べんきょうするよ", "benkyou suru yo"],
          12: ["勉強しないよ", "べんきょうしないよ", "benkyou shinai yo"],
          13: ["勉強すれば", "べんきょうすれば", "benkyou sureba"],
          14: ["勉強しなければ", "べんきょうしなければ", "benkyou shinakereba"],
          15: ["勉強して", "べんきょうして", "benkyou shite"],
          16: ["勉強しないで", "べんきょうしないで", "benkyou shinaide"],
          17: ["勉強してください", "べんきょうしてください", "benkyou shite kudasai"],
          18: ["勉強しないでください", "べんきょうしないでください", "benkyou shinaide kudasai"],
          19: ["勉強しろ", "べんきょうしろ", "benkyou shiro"],
          20: ["勉強するな", "べんきょうするな", "benkyou suru na"],
          21: ["勉強しろよ", "べんきょうしろよ", "benkyou shiro yo"],
          22: ["勉強するなよ", "べんきょうするなよ", "benkyou suru na yo"],
          23: ["勉強してしまう", "べんきょうしてしまう", "benkyou shite shimau"],
          24: ["勉強してしまいます", "べんきょうしてしまいます", "benkyou shite shimaimasu"],
          25: ["勉強してしまった", "べんきょうしてしまった", "benkyou shite shimatta"],
          26: ["勉強してしまいました", "べんきょうしてしまいました", "benkyou shite shimaimashita"],
          27: ["勉強しちゃう", "べんきょうしちゃう", "benkyou shichau"],
          28: ["勉強しちゃいます", "べんきょうしちゃいます", "benkyou shichaimasu"],
          29: ["勉強しちゃった", "べんきょうしちゃった", "benkyou shichatta"],
          30: ["勉強しちゃいました", "べんきょうしちゃいました", "benkyou shichaimashita"],
          31: ["勉強してもいい", "べんきょうしてもいい", "benkyou shite mo ii"],
          32: ["勉強しなくてもいい", "べんきょうしなくてもいい", "benkyou shinakute mo ii"],
          33: ["勉強しないといけない", "べんきょうしないといけない", "benkyou shinai to ikenai"],
          34: ["勉強してはいけない", "べんきょうしてはいけない", "benkyou shite wa ikenai"],
          35: ["勉強したい", "べんきょうしたい", "benkyou shitai"],
          36: ["勉強したくない", "べんきょうしたくない", "benkyou shitakunai"],
          37: ["勉強したいです", "べんきょうしたいです", "benkyou shitai desu"],
          38: ["勉強したくないです", "べんきょうしたくないです", "benkyou shitakunai desu"],
          39: ["勉強したかった", "べんきょうしたかった", "benkyou shitakatta"],
          40: ["勉強したくなかった", "べんきょうしたくなかった", "benkyou shitakunakatta"],
          41: ["勉強したかったです", "べんきょうしたかったです", "benkyou shitakatta desu"],
          42: ["勉強したくなかったです", "べんきょうしたくなかったです", "benkyou shitakunakatta desu"],
          43: ["勉強してほしい", "べんきょうしてほしい", "benkyou shite hoshii"],
          44: ["勉強してほしくない", "べんきょうしてほしくない", "benkyou shite hoshikunai"],
          45: ["勉強してほしかった", "べんきょうしてほしかった", "benkyou shite hoshikatta"],
          46: ["勉強してほしくなかった", "べんきょうしてほしくなかった", "benkyou shite hoshikunakatta"],
          47: ["勉強するべきだ", "べんきょうするべきだ", "benkyou suru beki da"],
          48: ["勉強するべきです", "べんきょうするべきです", "benkyou suru beki desu"],
          49: ["勉強するべきでしょう", "べんきょうするべきでしょう", "benkyou suru beki deshou"],
          50: ["勉強したほうがいい", "べんきょうしたほうがいい", "benkyou shita hou ga ii"],
          51: ["勉強しないほうがいい", "べんきょうしないほうがいい", "benkyou shinai hou ga ii"],
          52: ["勉強しましょう", "べんきょうしましょう", "benkyou shimashou"],
          53: ["勉強しようとする", "べんきょうしようとする", "benkyou shiyou to suru"],
          54: ["勉強しやすい", "べんきょうしやすい", "benkyou shiyasui"],
          55: ["勉強しにくい", "べんきょうしにくい", "benkyou shinikui"],
          56: ["勉強させる", "べんきょうさせる", "benkyou saseru"],
          57: ["勉強させます", "べんきょうさせます", "benkyou sasemasu"],
          58: ["勉強させた", "べんきょうさせた", "benkyou saseta"],
          59: ["勉強させました", "べんきょうさせました", "benkyou sasemashita"],
          60: ["勉強しすぎる", "べんきょうしすぎる", "benkyou shisugiru"],
          61: ["勉強しすぎた", "べんきょうしすぎた", "benkyou shisugita"],
          62: ["勉強してもらう", "べんきょうしてもらう", "benkyou shite morau"]
        };
        return f[order] || f[1];
      }
    };
  }

  function createExampleSentences(transformed, transformedKana, transformedRomaji, baseMeaning, title) {
    return sentenceTimeWords.map(([prefixJp, prefixKana, prefixRomaji, prefixMeaning], index) => ({
      jp: `${prefixJp}「${transformed}」という形を練習します。`,
      kana: `${prefixKana}「${transformedKana}」という かたちを れんしゅうします。`,
      romaji: `${prefixRomaji} "${transformedRomaji}" to iu katachi o renshuu shimasu.`,
      meaning: `${prefixMeaning}, saya berlatih bentuk ${title.toLowerCase()} dari kata kerja "${baseMeaning}".`,
      audio: `${prefixJp}「${transformed}」という形を練習します。`,
      order: index + 1
    }));
  }

  function makeForm([number, suffix, summary, level]) {
    const id = `vf-${String(number).padStart(2, "0")}`;
    const title = `${suffix} • ${summary}`;
    const order = Number(number);

    return {
      id,
      level,
      order,
      title,
      summary: `${summary} (${level}).`,
      formulas: [
        { group: "Godan", rule: `Gunakan pola ${suffix} pada kata kerja golongan Godan sesuai aturannya.` },
        { group: "Ichidan", rule: `Gunakan pola ${suffix} pada kata kerja golongan Ichidan sesuai aturannya.` },
        { group: "Irregular / Suru", rule: `Gunakan pola ${suffix} pada kata kerja tidak beraturan seperti する/来る.` }
      ],
      groups: groupSeeds.map((seed) => {
        const conjugator = createConjugator(seed);
        const [transformed, transformedKana, transformedRomaji] = conjugator.transform(order);
        return {
          name: seed.name,
          examples: [
            {
              base: seed.base,
              transformed,
              kana: `${seed.baseKana} → ${transformedKana}`,
              romaji: `${seed.baseRomaji} → ${transformedRomaji}`,
              meaning: `${seed.meaning} (${summary.toLowerCase()})`,
              sentences: createExampleSentences(transformed, transformedKana, transformedRomaji, seed.meaning, summary)
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
