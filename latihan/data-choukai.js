// ============================================================
//  DATA CHOUKAI — 聴解 Listening Comprehension
//
//  Struktur: choukaiData[level][sessionKey] = [...soal]
//  Setiap sesi = subset soal yang digabung oleh buildChoukaiSessionQuestions()
//  menjadi 1 sesi gabungan per level (mirip Goi 4 kategori → 40 soal).
//
//  Session keys:
//    tugas        → 課題理解  Pemahaman Berbasis Tugas
//    poin         → ポイント理解 Pemahaman Poin Penting
//    garisBesar   → 概要理解  Pemahaman Garis Besar Umum
//    verbal       → 発話表現  Ekspresi Verbal
//    cepat        → 即時応答  Respons Cepat
//    terintegrasi → 統合理解  Pemahaman Terintegrasi
// ============================================================

// ── Metadata sesi (label UI) ──────────────────────────────
const CHOUKAI_SESSIONS = {
  tugas:        { label: "Pemahaman Berbasis Tugas",   kanji: "課題理解" },
  poin:         { label: "Pemahaman Poin Penting",     kanji: "ポイント理解" },
  garisBesar:   { label: "Pemahaman Garis Besar",      kanji: "概要理解" },
  verbal:       { label: "Ekspresi Verbal",             kanji: "発話表現" },
  cepat:        { label: "Respons Cepat",              kanji: "即時応答" },
  terintegrasi: { label: "Pemahaman Terintegrasi",     kanji: "統合理解" },
};

// ── Ketersediaan sesi per level (urutan = urutan soal) ────
//   N5: tugas, poin, garisBesar, cepat, terintegrasi
//   N4: tugas, poin, garisBesar, cepat, terintegrasi
//   N3: tugas, poin, garisBesar, verbal, cepat
//   N2: tugas, poin, verbal, cepat
//   N1: tugas, poin, verbal, cepat
const CHOUKAI_AVAILABILITY = {
  N5: ["tugas", "poin", "garisBesar", "cepat", "terintegrasi"],
  N4: ["tugas", "poin", "garisBesar", "cepat", "terintegrasi"],
  N3: ["tugas", "poin", "garisBesar", "verbal", "cepat"],
  N2: ["tugas", "poin", "verbal", "cepat"],
  N1: ["tugas", "poin", "verbal", "cepat"],
};

// ── Data soal ───────────────────────────────────────────────
const choukaiData = {

  // ══════════════════════════════════════════════════════════
  //  N5 — Pemula · skenario sehari-hari sederhana
  // ══════════════════════════════════════════════════════════
  N5: {

    // ── 課題理解: Pahami apa yang harus dilakukan ──────────
    tugas: [
      {
        id: "N5_T01",
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
        explanation: "男の人は「ラーメンを一つと、餃子を二つ」と注文しました。",
      },
      {
        id: "N5_T02",
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
        id: "N5_T03",
        type: "conversation",
        script: [
          { gender: "female", text: "田中さん、今日の宿題は何ですか。" },
          { gender: "male",   text: "数学と英語の宿題があります。" },
          { gender: "female", text: "えっ、国語はないですか。" },
          { gender: "male",   text: "国語は明日です。" },
        ],
        question: "今日やらなければならない宿題はどれですか。",
        options: ["数学だけ", "英語だけ", "数学と英語", "数学と国語と英語"],
        answer: 2,
        explanation: "今日は「数学と英語の宿題があります」。国語は明日です。",
      },
    ],

    // ── ポイント理解: Tangkap informasi kunci ──────────────
    poin: [
      {
        id: "N5_P01",
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
        id: "N5_P02",
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
        id: "N5_P03",
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
        explanation: "「頭が痛い」と「熱もある」と言いました。咳はありません。",
      },
    ],

    // ── 概要理解: Pahami inti/tujuan utama ────────────────
    garisBesar: [
      {
        id: "N5_G01",
        type: "announcement",
        script: [
          { gender: "male", text: "お知らせします。明日の体育の授業は、雨のため、体育館で行います。グラウンドではありませんので、ご注意ください。" },
        ],
        question: "このお知らせの目的は何ですか。",
        options: ["体育を中止するため", "明日雨が降ることを知らせるため", "授業の場所が変わることを知らせるため", "体育館の使い方を説明するため"],
        answer: 2,
        explanation: "お知らせは「体育館で行います（グラウンドではない）」という場所変更の連絡です。",
      },
      {
        id: "N5_G02",
        type: "announcement",
        script: [
          { gender: "female", text: "図書館からお知らせです。本日は午後六時に閉館します。普段は午後八時まで開いていますが、今日は特別に早く閉めます。ご利用の方はご注意ください。" },
        ],
        question: "このお知らせで一番大切な情報は何ですか。",
        options: ["図書館は毎日八時に閉まる", "今日だけ早く閉まる", "今日は図書館が休みだ", "図書館が新しくなった"],
        answer: 1,
        explanation: "「本日は特別に午後六時に閉館」というのが最も重要な情報です。",
      },
    ],

    // ── 即時応答: Jawab pertanyaan singkat/cepat ───────────
    cepat: [
      {
        id: "N5_C01",
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
        id: "N5_C02",
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
        id: "N5_C03",
        type: "announcement",
        script: [
          { gender: "female", text: "お知らせします。二番出口のそばに、黒いかばんが落ちています。お心当たりの方は、サービスカウンターまでお越しください。" },
        ],
        question: "何が落ちていますか。",
        options: ["赤いかばん", "黒いかばん", "青いかばん", "白いかばん"],
        answer: 1,
        explanation: "「黒いかばんが落ちています」と言いました。",
      },
    ],

    // ── 統合理解: Pahami percakapan kompleks ──────────────
    terintegrasi: [
      {
        id: "N5_I01",
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

  },

  // ══════════════════════════════════════════════════════════
  //  N4, N3, N2, N1 — data menyusul (development)
  // ══════════════════════════════════════════════════════════
  N4: { tugas: [], poin: [], garisBesar: [], cepat: [], terintegrasi: [] },
  N3: { tugas: [], poin: [], garisBesar: [], verbal: [], cepat: [] },
  N2: { tugas: [], poin: [], verbal: [], cepat: [] },
  N1: { tugas: [], poin: [], verbal: [], cepat: [] },

};
