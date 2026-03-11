// ============================================================
//  DATA CHOUKAI — 聴解 Listening Comprehension
//  Format: script dialog → TTS multi-voice → bel → soal TTS
//  Setiap soal: script[], question, options[], answer (index)
// ============================================================

const choukaiData = {

  // ──────────────────────────────────────────────
  //  N5 — 12 soal, skenario sehari-hari sederhana
  // ──────────────────────────────────────────────
  N5: [
    {
      id: "N5_001",
      type: "conversation",
      script: [
        { gender: "female", text: "いらっしゃいませ。ご注文はお決まりですか。" },
        { gender: "male",   text: "ラーメンを一つと、餃子を二つください。" },
        { gender: "female", text: "お飲み物はいかがですか。" },
        { gender: "male",   text: "オレンジジュースをお願いします。" },
        { gender: "female", text: "かしこまりました。少々お待ちください。" },
      ],
      question: "男の人は食べ物を何を注文しましたか。",
      options: ["ラーメンと餃子", "ラーメンだけ", "餃子とスープ", "うどんと餃子"],
      answer: 0,
      explanation: "男の人は「ラーメンを一つと、餃子を二つ」と言いました。",
    },

    {
      id: "N5_002",
      type: "conversation",
      script: [
        { gender: "male",   text: "すみません、このシャツはいくらですか。" },
        { gender: "female", text: "二千五百円です。" },
        { gender: "male",   text: "少し高いですね。こちらはどうですか。" },
        { gender: "female", text: "それは千八百円です。" },
        { gender: "male",   text: "じゃあ、安い方をください。" },
      ],
      question: "男の人はいくらのシャツを買いますか。",
      options: ["千円", "千八百円", "二千五百円", "三千円"],
      answer: 1,
      explanation: "安い方は「千八百円」のシャツです。",
    },

    {
      id: "N5_003",
      type: "conversation",
      script: [
        { gender: "female", text: "田中さん、今日の宿題は何ですか。" },
        { gender: "male",   text: "数学と英語の宿題があります。" },
        { gender: "female", text: "えっ、国語はないですか。" },
        { gender: "male",   text: "国語は明日です。" },
      ],
      question: "今日の宿題は何ですか。",
      options: ["数学だけ", "英語だけ", "数学と英語", "数学と国語と英語"],
      answer: 2,
      explanation: "男の人は「数学と英語の宿題があります」と言いました。国語は明日です。",
    },

    {
      id: "N5_004",
      type: "conversation",
      script: [
        { gender: "male",   text: "もしもし、山田さんですか。" },
        { gender: "female", text: "はい、そうです。" },
        { gender: "male",   text: "明日、映画を見に行きませんか。" },
        { gender: "female", text: "いいですね。何時ですか。" },
        { gender: "male",   text: "午後三時はどうですか。駅の前で会いましょう。" },
        { gender: "female", text: "わかりました。では明日。" },
      ],
      question: "二人はどこで会いますか。",
      options: ["映画館の前", "学校の前", "駅の前", "バス停の前"],
      answer: 2,
      explanation: "男の人は「駅の前で会いましょう」と言いました。",
    },

    {
      id: "N5_005",
      type: "announcement",
      script: [
        { gender: "male", text: "お知らせします。明日の体育の授業は、雨のため、体育館で行います。グラウンドではありませんので、ご注意ください。" },
      ],
      question: "明日の体育の授業はどこですか。",
      options: ["グラウンド", "プール", "体育館", "教室"],
      answer: 2,
      explanation: "「体育館で行います」と言いました。グラウンドではありません。",
    },

    {
      id: "N5_006",
      type: "conversation",
      script: [
        { gender: "female", text: "ケンジ、晩ご飯ができましたよ。" },
        { gender: "male",   text: "今日は何ですか。" },
        { gender: "female", text: "カレーライスよ。" },
        { gender: "male",   text: "やった！カレーは大好きです。いただきます。" },
      ],
      question: "今日の晩ご飯は何ですか。",
      options: ["ラーメン", "寿司", "カレーライス", "うどん"],
      answer: 2,
      explanation: "お母さんは「カレーライスよ」と言いました。",
    },

    {
      id: "N5_007",
      type: "conversation",
      script: [
        { gender: "male",   text: "すみません、東京駅に行きたいのですが、どの電車に乗ればいいですか。" },
        { gender: "female", text: "三番線の電車に乗ってください。" },
        { gender: "male",   text: "何時に出発しますか。" },
        { gender: "female", text: "十五分後に出ます。" },
      ],
      question: "男の人は何番線の電車に乗りますか。",
      options: ["一番線", "二番線", "三番線", "四番線"],
      answer: 2,
      explanation: "駅員さんは「三番線の電車に乗ってください」と言いました。",
    },

    {
      id: "N5_008",
      type: "conversation",
      script: [
        { gender: "male",   text: "どうしましたか。" },
        { gender: "female", text: "昨日から頭が痛いです。それに、少し熱もあります。" },
        { gender: "male",   text: "咳はありますか。" },
        { gender: "female", text: "いいえ、咳はありません。" },
        { gender: "male",   text: "では、薬を出しますね。ゆっくり休んでください。" },
      ],
      question: "患者さんはどんな症状がありますか。",
      options: ["頭痛と咳", "頭痛と熱", "熱と咳", "頭痛だけ"],
      answer: 1,
      explanation: "患者さんは「頭が痛い」と「熱もある」と言いました。咳はありません。",
    },

    {
      id: "N5_009",
      type: "conversation",
      script: [
        { gender: "female", text: "いらっしゃいませ。何かお探しですか。" },
        { gender: "male",   text: "青いTシャツを探しています。" },
        { gender: "female", text: "こちらはいかがですか。青と白があります。" },
        { gender: "male",   text: "青いのをください。Mサイズはありますか。" },
        { gender: "female", text: "はい、ございます。こちらへどうぞ。" },
      ],
      question: "客は何色のTシャツを買いますか。",
      options: ["白", "赤", "青", "黄色"],
      answer: 2,
      explanation: "客は「青いのをください」と言いました。",
    },

    {
      id: "N5_010",
      type: "announcement",
      script: [
        { gender: "female", text: "図書館からお知らせです。本日は午後六時に閉館します。普段は午後八時まで開いていますが、今日は特別に早く閉めます。ご利用の方はご注意ください。" },
      ],
      question: "今日、図書館は何時に閉まりますか。",
      options: ["午後四時", "午後六時", "午後七時", "午後八時"],
      answer: 1,
      explanation: "「本日は午後六時に閉館します」と言いました。普段は八時ですが今日は特別です。",
    },

    {
      id: "N5_011",
      type: "announcement",
      script: [
        { gender: "female", text: "お知らせします。二番出口のそばに、黒いかばんが落ちています。お心当たりの方は、サービスカウンターまでお越しください。" },
      ],
      question: "何が落ちていますか。",
      options: ["赤いかばん", "黒いかばん", "青いかばん", "白いかばん"],
      answer: 1,
      explanation: "「黒いかばんが落ちています」と言いました。",
    },

    {
      id: "N5_012",
      type: "conversation",
      script: [
        { gender: "female", text: "いらっしゃいませ。" },
        { gender: "male",   text: "チェックインをお願いします。田中と申します。" },
        { gender: "female", text: "田中様、三泊でご予約のお客様でしょうか。" },
        { gender: "male",   text: "はい、そうです。" },
        { gender: "female", text: "お部屋は三階の三〇五号室です。どうぞ。" },
      ],
      question: "男の人の部屋は何号室ですか。",
      options: ["二〇三号室", "三〇三号室", "三〇五号室", "五〇三号室"],
      answer: 2,
      explanation: "「三階の三〇五号室です」と言いました。",
    },
  ],

};
