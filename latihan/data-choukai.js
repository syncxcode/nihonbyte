// Generated custom choukai data based on requested session logic
const CHOUKAI_SESSIONS = {
  "tugas": {
    "label": "Pemahaman Berbasis Tugas",
    "kanji": "課題理解"
  },
  "poin": {
    "label": "Pemahaman Poin Penting",
    "kanji": "ポイント理解"
  },
  "garisBesar": {
    "label": "Pemahaman Garis Besar Umum",
    "kanji": "概要理解"
  },
  "verbal": {
    "label": "Ekspresi Verbal",
    "kanji": "発話表現"
  },
  "cepat": {
    "label": "Respons Cepat",
    "kanji": "即時応答"
  },
  "terintegrasi": {
    "label": "Pemahaman Terpadu",
    "kanji": "統合理解"
  }
};

const CHOUKAI_AVAILABILITY = {
  "N1": [
    "tugas",
    "poin",
    "garisBesar",
    "cepat",
    "terintegrasi"
  ],
  "N2": [
    "tugas",
    "poin",
    "garisBesar",
    "cepat",
    "terintegrasi"
  ],
  "N3": [
    "tugas",
    "poin",
    "garisBesar",
    "verbal",
    "cepat"
  ],
  "N4": [
    "tugas",
    "poin",
    "verbal",
    "cepat"
  ],
  "N5": [
    "tugas",
    "poin",
    "verbal",
    "cepat"
  ]
};

const choukaiData = {
  "N5": {
    "tugas": [
      {
        "id": "N5_T01",
        "type": "conversation",
        "script": [
          {
            "gender": "female",
            "text": "いらっしゃいませ。カフェへようこそ。"
          },
          {
            "gender": "male",
            "text": "ほうじ茶ラテを一つください。"
          },
          {
            "gender": "female",
            "text": "ほかにいかがですか。"
          },
          {
            "gender": "male",
            "text": "チーズケーキもお願いします。"
          },
          {
            "gender": "female",
            "text": "かしこまりました。"
          }
        ],
        "question": "男の人は何を買いますか。",
        "options": [
          "ほうじ茶ラテとチーズケーキ",
          "アイスコーヒーとチーズケーキ",
          "ほうじ茶ラテだけ",
          "チーズケーキだけ"
        ],
        "answer": 0,
        "explanation": "男の人は「ほうじ茶ラテ」と「チーズケーキ」を頼みました。"
      },
      {
        "id": "N5_T02",
        "type": "conversation",
        "script": [
          {
            "gender": "female",
            "text": "いらっしゃいませ。パン屋へようこそ。"
          },
          {
            "gender": "male",
            "text": "クロワッサンを一つください。"
          },
          {
            "gender": "female",
            "text": "ほかにいかがですか。"
          },
          {
            "gender": "male",
            "text": "かぼちゃスープもお願いします。"
          },
          {
            "gender": "female",
            "text": "かしこまりました。"
          }
        ],
        "question": "男の人は何を買いますか。",
        "options": [
          "クロワッサンとかぼちゃスープ",
          "メロンパンとかぼちゃスープ",
          "クロワッサンだけ",
          "サンドイッチとかぼちゃスープ"
        ],
        "answer": 0,
        "explanation": "男の人は「クロワッサン」と「かぼちゃスープ」を頼みました。"
      },
      {
        "id": "N5_T03",
        "type": "conversation",
        "script": [
          {
            "gender": "female",
            "text": "いらっしゃいませ。弁当屋へようこそ。"
          },
          {
            "gender": "male",
            "text": "鮭おにぎりを一つください。"
          },
          {
            "gender": "female",
            "text": "ほかにいかがですか。"
          },
          {
            "gender": "male",
            "text": "みそ汁もお願いします。"
          },
          {
            "gender": "female",
            "text": "かしこまりました。"
          }
        ],
        "question": "男の人は何を買いますか。",
        "options": [
          "鮭おにぎりとみそ汁",
          "ツナおにぎりとみそ汁",
          "鮭おにぎりだけ",
          "唐揚げ弁当とみそ汁"
        ],
        "answer": 0,
        "explanation": "男の人は「鮭おにぎり」と「みそ汁」を頼みました。"
      },
      {
        "id": "N5_T04",
        "type": "conversation",
        "script": [
          {
            "gender": "female",
            "text": "いらっしゃいませ。カフェへようこそ。"
          },
          {
            "gender": "male",
            "text": "アイスレモンティーを一つください。"
          },
          {
            "gender": "female",
            "text": "ほかにいかがですか。"
          },
          {
            "gender": "male",
            "text": "ハムサンドもお願いします。"
          },
          {
            "gender": "female",
            "text": "かしこまりました。"
          }
        ],
        "question": "男の人は何を買いますか。",
        "options": [
          "アイスレモンティーとハムサンド",
          "ホットコーヒーとハムサンド",
          "ハムサンドだけ",
          "アイスレモンティーだけ"
        ],
        "answer": 0,
        "explanation": "男の人は「アイスレモンティー」と「ハムサンド」を頼みました。"
      },
      {
        "id": "N5_T05",
        "type": "conversation",
        "script": [
          {
            "gender": "female",
            "text": "いらっしゃいませ。売店へようこそ。"
          },
          {
            "gender": "male",
            "text": "いちごミルクを一つください。"
          },
          {
            "gender": "female",
            "text": "ほかにいかがですか。"
          },
          {
            "gender": "male",
            "text": "あんパンもお願いします。"
          },
          {
            "gender": "female",
            "text": "かしこまりました。"
          }
        ],
        "question": "男の人は何を買いますか。",
        "options": [
          "いちごミルクとあんパン",
          "牛乳とあんパン",
          "いちごミルクだけ",
          "メロンパンと牛乳"
        ],
        "answer": 0,
        "explanation": "男の人は「いちごミルク」と「あんパン」を頼みました。"
      },
      {
        "id": "N5_T06",
        "type": "conversation",
        "script": [
          {
            "gender": "male",
            "text": "すみません、新宿へ行きたいんですが。"
          },
          {
            "gender": "female",
            "text": "三番線の快速に乗ってください。"
          },
          {
            "gender": "male",
            "text": "ありがとうございます。"
          }
        ],
        "question": "男の人はどこで電車を待ちますか。",
        "options": [
          "一番線",
          "二番線",
          "三番線",
          "四番線"
        ],
        "answer": 2,
        "explanation": "新宿へ行くには「三番線」に行きます。"
      },
      {
        "id": "N5_T07",
        "type": "conversation",
        "script": [
          {
            "gender": "male",
            "text": "すみません、上野へ行きたいんですが。"
          },
          {
            "gender": "female",
            "text": "二番線の各駅停車に乗ってください。"
          },
          {
            "gender": "male",
            "text": "ありがとうございます。"
          }
        ],
        "question": "男の人はどこで電車を待ちますか。",
        "options": [
          "一番線",
          "二番線",
          "三番線",
          "五番線"
        ],
        "answer": 1,
        "explanation": "上野へ行くには「二番線」に行きます。"
      },
      {
        "id": "N5_T08",
        "type": "conversation",
        "script": [
          {
            "gender": "male",
            "text": "すみません、横浜へ行きたいんですが。"
          },
          {
            "gender": "female",
            "text": "四番線の急行に乗ってください。"
          },
          {
            "gender": "male",
            "text": "ありがとうございます。"
          }
        ],
        "question": "男の人はどこで電車を待ちますか。",
        "options": [
          "二番線",
          "三番線",
          "四番線",
          "六番線"
        ],
        "answer": 2,
        "explanation": "横浜へ行くには「四番線」に行きます。"
      },
      {
        "id": "N5_T09",
        "type": "conversation",
        "script": [
          {
            "gender": "male",
            "text": "すみません、池袋へ行きたいんですが。"
          },
          {
            "gender": "female",
            "text": "一番線の普通に乗ってください。"
          },
          {
            "gender": "male",
            "text": "ありがとうございます。"
          }
        ],
        "question": "男の人はどこで電車を待ちますか。",
        "options": [
          "一番線",
          "二番線",
          "三番線",
          "四番線"
        ],
        "answer": 0,
        "explanation": "池袋へ行くには「一番線」に行きます。"
      },
      {
        "id": "N5_T10",
        "type": "conversation",
        "script": [
          {
            "gender": "male",
            "text": "すみません、渋谷へ行きたいんですが。"
          },
          {
            "gender": "female",
            "text": "五番線の特急に乗ってください。"
          },
          {
            "gender": "male",
            "text": "ありがとうございます。"
          }
        ],
        "question": "男の人はどこで電車を待ちますか。",
        "options": [
          "三番線",
          "四番線",
          "五番線",
          "六番線"
        ],
        "answer": 2,
        "explanation": "渋谷へ行くには「五番線」に行きます。"
      },
      {
        "id": "N5_T11",
        "type": "conversation",
        "script": [
          {
            "gender": "female",
            "text": "先生、明日は何を持って行きますか。"
          },
          {
            "gender": "male",
            "text": "明日の遠足ですから、水筒と帽子を持って来てください。"
          },
          {
            "gender": "female",
            "text": "わかりました。"
          }
        ],
        "question": "女の人は明日何を持って行きますか。",
        "options": [
          "水筒と帽子",
          "弁当と上履き",
          "教科書とノート",
          "傘と手袋"
        ],
        "answer": 0,
        "explanation": "先生は「水筒と帽子を持って来てください」と言いました。"
      },
      {
        "id": "N5_T12",
        "type": "conversation",
        "script": [
          {
            "gender": "female",
            "text": "先生、明日は何を持って行きますか。"
          },
          {
            "gender": "male",
            "text": "図工の授業ですから、はさみとのりを持って来てください。"
          },
          {
            "gender": "female",
            "text": "わかりました。"
          }
        ],
        "question": "女の人は明日何を持って行きますか。",
        "options": [
          "色えんぴつ",
          "はさみとのり",
          "体操服",
          "リコーダー"
        ],
        "answer": 1,
        "explanation": "先生は「はさみとのりを持って来てください」と言いました。"
      },
      {
        "id": "N5_T13",
        "type": "conversation",
        "script": [
          {
            "gender": "female",
            "text": "先生、明日は何を持って行きますか。"
          },
          {
            "gender": "male",
            "text": "プールですから、水着とタオルを持って来てください。"
          },
          {
            "gender": "female",
            "text": "わかりました。"
          }
        ],
        "question": "女の人は明日何を持って行きますか。",
        "options": [
          "水着とタオル",
          "辞書とノート",
          "長靴と傘",
          "弁当と箸"
        ],
        "answer": 0,
        "explanation": "先生は「水着とタオルを持って来てください」と言いました。"
      },
      {
        "id": "N5_T14",
        "type": "conversation",
        "script": [
          {
            "gender": "female",
            "text": "先生、明日は何を持って行きますか。"
          },
          {
            "gender": "male",
            "text": "音楽会ですから、リコーダーを持って来てください。"
          },
          {
            "gender": "female",
            "text": "わかりました。"
          }
        ],
        "question": "女の人は明日何を持って行きますか。",
        "options": [
          "上履き",
          "水筒",
          "リコーダー",
          "はさみ"
        ],
        "answer": 2,
        "explanation": "先生は「リコーダーを持って来てください」と言いました。"
      },
      {
        "id": "N5_T15",
        "type": "conversation",
        "script": [
          {
            "gender": "female",
            "text": "先生、明日は何を持って行きますか。"
          },
          {
            "gender": "male",
            "text": "雨の日の通学ですから、折りたたみ傘を持って来てください。"
          },
          {
            "gender": "female",
            "text": "わかりました。"
          }
        ],
        "question": "女の人は明日何を持って行きますか。",
        "options": [
          "手袋",
          "折りたたみ傘",
          "うちわ",
          "双眼鏡"
        ],
        "answer": 1,
        "explanation": "先生は「折りたたみ傘を持って来てください」と言いました。"
      },
      {
        "id": "N5_T16",
        "type": "conversation",
        "script": [
          {
            "gender": "male",
            "text": "すみません、図書館の本はどうしたらいいですか。"
          },
          {
            "gender": "female",
            "text": "二階の返却箱に入れるといいですよ。"
          },
          {
            "gender": "male",
            "text": "ありがとうございます。"
          }
        ],
        "question": "男の人はどうしますか。",
        "options": [
          "カウンターで買う",
          "二階の返却箱に入れる",
          "家に持って帰る",
          "友だちに渡す"
        ],
        "answer": 1,
        "explanation": "店の人は「二階の返却箱に入れる」と言いました。"
      },
      {
        "id": "N5_T17",
        "type": "conversation",
        "script": [
          {
            "gender": "male",
            "text": "すみません、クリーニングはどうしたらいいですか。"
          },
          {
            "gender": "female",
            "text": "金曜日の午後に取りに行くといいですよ。"
          },
          {
            "gender": "male",
            "text": "ありがとうございます。"
          }
        ],
        "question": "男の人はどうしますか。",
        "options": [
          "今すぐ出す",
          "月曜日に電話する",
          "金曜日の午後に取りに行く",
          "土曜日の朝に取りに行く"
        ],
        "answer": 2,
        "explanation": "店の人は「金曜日の午後に取りに行く」と言いました。"
      },
      {
        "id": "N5_T18",
        "type": "conversation",
        "script": [
          {
            "gender": "male",
            "text": "すみません、市役所の書類はどうしたらいいですか。"
          },
          {
            "gender": "female",
            "text": "三番窓口で出すといいですよ。"
          },
          {
            "gender": "male",
            "text": "ありがとうございます。"
          }
        ],
        "question": "男の人はどうしますか。",
        "options": [
          "一番窓口で受け取る",
          "三番窓口で出す",
          "郵便局へ行く",
          "コピーを二枚取る"
        ],
        "answer": 1,
        "explanation": "店の人は「三番窓口で出す」と言いました。"
      },
      {
        "id": "N5_T19",
        "type": "conversation",
        "script": [
          {
            "gender": "male",
            "text": "すみません、宅配便はどうしたらいいですか。"
          },
          {
            "gender": "female",
            "text": "コンビニから送るといいですよ。"
          },
          {
            "gender": "male",
            "text": "ありがとうございます。"
          }
        ],
        "question": "男の人はどうしますか。",
        "options": [
          "駅で預ける",
          "家で待つ",
          "コンビニから送る",
          "会社に持って行く"
        ],
        "answer": 2,
        "explanation": "店の人は「コンビニから送る」と言いました。"
      },
      {
        "id": "N5_T20",
        "type": "conversation",
        "script": [
          {
            "gender": "male",
            "text": "すみません、自転車はどうしたらいいですか。"
          },
          {
            "gender": "female",
            "text": "店の前の駐輪場に止めるといいですよ。"
          },
          {
            "gender": "male",
            "text": "ありがとうございます。"
          }
        ],
        "question": "男の人はどうしますか。",
        "options": [
          "歩道に置く",
          "店の前の駐輪場に止める",
          "駅まで乗る",
          "友だちに貸す"
        ],
        "answer": 1,
        "explanation": "店の人は「店の前の駐輪場に止める」と言いました。"
      },
      {
        "id": "N5_T21",
        "type": "conversation",
        "script": [
          {
            "gender": "female",
            "text": "土曜日の朝十時に会いましょう。"
          },
          {
            "gender": "male",
            "text": "いいですね。どこですか。"
          },
          {
            "gender": "female",
            "text": "駅の南口でお願いします。"
          },
          {
            "gender": "male",
            "text": "わかりました。"
          }
        ],
        "question": "二人はどこで会いますか。",
        "options": [
          "駅の北口",
          "駅の南口",
          "図書館の前",
          "公園の入り口"
        ],
        "answer": 1,
        "explanation": "女の人は「駅の南口でお願いします」と言いました。"
      },
      {
        "id": "N5_T22",
        "type": "conversation",
        "script": [
          {
            "gender": "female",
            "text": "日曜日の午後一時に会いましょう。"
          },
          {
            "gender": "male",
            "text": "いいですね。どこですか。"
          },
          {
            "gender": "female",
            "text": "カフェの前でお願いします。"
          },
          {
            "gender": "male",
            "text": "わかりました。"
          }
        ],
        "question": "二人はどこで会いますか。",
        "options": [
          "スーパーの前",
          "カフェの前",
          "学校の前",
          "郵便局の前"
        ],
        "answer": 1,
        "explanation": "女の人は「カフェの前でお願いします」と言いました。"
      },
      {
        "id": "N5_T23",
        "type": "conversation",
        "script": [
          {
            "gender": "female",
            "text": "金曜日の六時半に会いましょう。"
          },
          {
            "gender": "male",
            "text": "いいですね。どこですか。"
          },
          {
            "gender": "female",
            "text": "映画館のロビーでお願いします。"
          },
          {
            "gender": "male",
            "text": "わかりました。"
          }
        ],
        "question": "二人はどこで会いますか。",
        "options": [
          "映画館のロビー",
          "本屋",
          "バス停",
          "自宅"
        ],
        "answer": 0,
        "explanation": "女の人は「映画館のロビーでお願いします」と言いました。"
      },
      {
        "id": "N5_T24",
        "type": "conversation",
        "script": [
          {
            "gender": "female",
            "text": "水曜日の四時に会いましょう。"
          },
          {
            "gender": "male",
            "text": "いいですね。どこですか。"
          },
          {
            "gender": "female",
            "text": "市民センターの一階でお願いします。"
          },
          {
            "gender": "male",
            "text": "わかりました。"
          }
        ],
        "question": "二人はどこで会いますか。",
        "options": [
          "二階の教室",
          "市民センターの一階",
          "公園のベンチ",
          "駅前広場"
        ],
        "answer": 1,
        "explanation": "女の人は「市民センターの一階でお願いします」と言いました。"
      },
      {
        "id": "N5_T25",
        "type": "conversation",
        "script": [
          {
            "gender": "female",
            "text": "祝日の午前九時に会いましょう。"
          },
          {
            "gender": "male",
            "text": "いいですね。どこですか。"
          },
          {
            "gender": "female",
            "text": "神社の鳥居の前でお願いします。"
          },
          {
            "gender": "male",
            "text": "わかりました。"
          }
        ],
        "question": "二人はどこで会いますか。",
        "options": [
          "神社の鳥居の前",
          "コンビニ",
          "交番",
          "商店街"
        ],
        "answer": 0,
        "explanation": "女の人は「神社の鳥居の前でお願いします」と言いました。"
      }
    ],
    "poin": [
      {
        "id": "N5_P01",
        "type": "announcement",
        "script": [
          {
            "gender": "female",
            "text": "本日のフードトラックは、正門の横に来ています。カレーとクレープを売っています。"
          }
        ],
        "question": "フードトラックはどこにありますか。",
        "options": [
          "図書館の前",
          "正門の横",
          "体育館の後ろ",
          "駅前"
        ],
        "answer": 1,
        "explanation": "「正門の横に来ています」と言っています。"
      },
      {
        "id": "N5_P02",
        "type": "announcement",
        "script": [
          {
            "gender": "female",
            "text": "図書館からお知らせします。今日は棚の点検のため、午後六時に閉館します。"
          }
        ],
        "question": "図書館は何時に閉まりますか。",
        "options": [
          "午後五時",
          "午後六時",
          "午後七時",
          "午後八時"
        ],
        "answer": 1,
        "explanation": "今日は「午後六時に閉館します」。"
      },
      {
        "id": "N5_P03",
        "type": "announcement",
        "script": [
          {
            "gender": "female",
            "text": "公園の朝市は、雨のため日曜日に延期します。時間は午前九時からです。"
          }
        ],
        "question": "朝市はいつありますか。",
        "options": [
          "土曜日の朝",
          "土曜日の昼",
          "日曜日の朝",
          "日曜日の夜"
        ],
        "answer": 2,
        "explanation": "「日曜日」「午前九時から」です。"
      },
      {
        "id": "N5_P04",
        "type": "announcement",
        "script": [
          {
            "gender": "female",
            "text": "三号館のエレベーターは故障中です。四階へ行く方は、階段をご利用ください。"
          }
        ],
        "question": "四階へ行く人はどうしますか。",
        "options": [
          "エレベーターに乗る",
          "外へ出る",
          "階段を使う",
          "待つ"
        ],
        "answer": 2,
        "explanation": "エレベーターは故障中なので、階段を使います。"
      },
      {
        "id": "N5_P05",
        "type": "announcement",
        "script": [
          {
            "gender": "female",
            "text": "スーパーのレジはただいま大変混んでいます。お急ぎの方はセルフレジをご利用ください。"
          }
        ],
        "question": "急いでいる人はどこを使いますか。",
        "options": [
          "サービスカウンター",
          "セルフレジ",
          "二階の売り場",
          "駐車場"
        ],
        "answer": 1,
        "explanation": "お急ぎの方は「セルフレジ」を使います。"
      },
      {
        "id": "N5_P06",
        "type": "conversation",
        "script": [
          {
            "gender": "male",
            "text": "もしもし、斎藤です。美容院の予約を一時間遅らせたいんですが。"
          },
          {
            "gender": "female",
            "text": "はい、午後三時から午後四時に変更します。"
          }
        ],
        "question": "予約は何時になりますか。",
        "options": [
          "午後二時",
          "午後三時",
          "午後四時",
          "午後五時"
        ],
        "answer": 2,
        "explanation": "予約は「午後四時」に変わりました。"
      },
      {
        "id": "N5_P07",
        "type": "conversation",
        "script": [
          {
            "gender": "female",
            "text": "もしもし、ケーキ屋です。ご注文のショートケーキは明日の午後一時にご用意できます。"
          },
          {
            "gender": "male",
            "text": "わかりました。取りに行きます。"
          }
        ],
        "question": "ケーキはいつ受け取りますか。",
        "options": [
          "今日の午後一時",
          "明日の午前一時",
          "明日の午後一時",
          "明後日の午後一時"
        ],
        "answer": 2,
        "explanation": "店の人は「明日の午後一時」と言いました。"
      },
      {
        "id": "N5_P08",
        "type": "conversation",
        "script": [
          {
            "gender": "male",
            "text": "山口さん、会議室はAからBに変わりました。二階ではなく三階です。"
          },
          {
            "gender": "female",
            "text": "ありがとうございます。"
          }
        ],
        "question": "会議室はどこですか。",
        "options": [
          "二階A",
          "二階B",
          "三階A",
          "三階B"
        ],
        "answer": 3,
        "explanation": "会議室は「三階のB」です。"
      },
      {
        "id": "N5_P09",
        "type": "conversation",
        "script": [
          {
            "gender": "female",
            "text": "宅配便です。冷蔵の荷物をお届けします。明日の夜七時以降なら伺えます。"
          },
          {
            "gender": "male",
            "text": "では、その時間でお願いします。"
          }
        ],
        "question": "荷物はいつ届きますか。",
        "options": [
          "明日の昼",
          "明日の夜七時以降",
          "今日の夜七時",
          "明後日の朝"
        ],
        "answer": 1,
        "explanation": "「明日の夜七時以降」に届けます。"
      },
      {
        "id": "N5_P10",
        "type": "conversation",
        "script": [
          {
            "gender": "male",
            "text": "もしもし、歯医者です。次回は来週の木曜日、朝九時半です。"
          },
          {
            "gender": "female",
            "text": "はい、お願いします。"
          }
        ],
        "question": "予約はいつですか。",
        "options": [
          "来週の水曜日九時半",
          "来週の木曜日九時半",
          "今週の木曜日九時半",
          "来週の木曜日十時"
        ],
        "answer": 1,
        "explanation": "予約は「来週の木曜日、朝九時半」です。"
      },
      {
        "id": "N5_P11",
        "type": "conversation",
        "script": [
          {
            "gender": "male",
            "text": "どうしましたか。"
          },
          {
            "gender": "female",
            "text": "のどが痛くて、少しせきも出ます。"
          },
          {
            "gender": "male",
            "text": "熱はありますか。"
          },
          {
            "gender": "female",
            "text": "熱はありません。"
          }
        ],
        "question": "女の人の症状は何ですか。",
        "options": [
          "のどの痛みとせき",
          "熱とせき",
          "頭痛とのどの痛み",
          "熱だけ"
        ],
        "answer": 0,
        "explanation": "女の人は「のどが痛い」「せきも出る」と言いました。"
      },
      {
        "id": "N5_P12",
        "type": "conversation",
        "script": [
          {
            "gender": "female",
            "text": "昨日からおなかが痛いんです。"
          },
          {
            "gender": "male",
            "text": "食欲はありますか。"
          },
          {
            "gender": "female",
            "text": "あまりありません。"
          }
        ],
        "question": "女の人はどうですか。",
        "options": [
          "頭が痛い",
          "おなかが痛い",
          "歯が痛い",
          "目が痛い"
        ],
        "answer": 1,
        "explanation": "女の人は「おなかが痛い」と言いました。"
      },
      {
        "id": "N5_P13",
        "type": "conversation",
        "script": [
          {
            "gender": "male",
            "text": "今日は学校を休みます。"
          },
          {
            "gender": "female",
            "text": "どうしたの。"
          },
          {
            "gender": "male",
            "text": "朝から熱が三十八度あります。"
          }
        ],
        "question": "男の人はどうしましたか。",
        "options": [
          "けがをした",
          "熱がある",
          "せきが出る",
          "おなかがすいた"
        ],
        "answer": 1,
        "explanation": "男の人は「熱が三十八度あります」と言いました。"
      },
      {
        "id": "N5_P14",
        "type": "conversation",
        "script": [
          {
            "gender": "female",
            "text": "先生、目がかゆいです。"
          },
          {
            "gender": "male",
            "text": "花粉かもしれませんね。"
          }
        ],
        "question": "女の人は何がつらいですか。",
        "options": [
          "のど",
          "目",
          "耳",
          "足"
        ],
        "answer": 1,
        "explanation": "女の人は「目がかゆい」と言いました。"
      },
      {
        "id": "N5_P15",
        "type": "conversation",
        "script": [
          {
            "gender": "male",
            "text": "昨日あまり寝ていなくて、今日はずっと眠いです。"
          },
          {
            "gender": "female",
            "text": "じゃあ、早く帰ったほうがいいですね。"
          }
        ],
        "question": "男の人は今どうですか。",
        "options": [
          "元気だ",
          "眠い",
          "怒っている",
          "寒い"
        ],
        "answer": 1,
        "explanation": "男の人は「ずっと眠い」と言いました。"
      },
      {
        "id": "N5_P16",
        "type": "conversation",
        "script": [
          {
            "gender": "female",
            "text": "このマグカップ、青はありますか。"
          },
          {
            "gender": "male",
            "text": "青は売り切れです。白と黄色ならあります。"
          },
          {
            "gender": "female",
            "text": "では、白をください。"
          }
        ],
        "question": "女の人は何色を買いますか。",
        "options": [
          "青",
          "白",
          "黒",
          "黄色"
        ],
        "answer": 1,
        "explanation": "青は売り切れなので、白を買います。"
      },
      {
        "id": "N5_P17",
        "type": "conversation",
        "script": [
          {
            "gender": "male",
            "text": "すみません、いちご大福を四つと、みたらし団子を二本ください。"
          },
          {
            "gender": "female",
            "text": "はい、全部で七百円です。"
          }
        ],
        "question": "男の人は何を買いますか。",
        "options": [
          "大福四つと団子二本",
          "大福二つと団子四本",
          "大福四つだけ",
          "団子二本だけ"
        ],
        "answer": 0,
        "explanation": "「いちご大福を四つ、みたらし団子を二本」です。"
      },
      {
        "id": "N5_P18",
        "type": "conversation",
        "script": [
          {
            "gender": "female",
            "text": "このコインランドリー、洗濯は三百円、乾燥は二十分で百円です。"
          },
          {
            "gender": "male",
            "text": "じゃあ、洗濯してから四十分乾燥します。"
          }
        ],
        "question": "男の人はいくら払いますか。",
        "options": [
          "四百円",
          "五百円",
          "六百円",
          "七百円"
        ],
        "answer": 1,
        "explanation": "洗濯三百円＋乾燥二百円で五百円です。"
      },
      {
        "id": "N5_P19",
        "type": "conversation",
        "script": [
          {
            "gender": "female",
            "text": "あの、傘の忘れ物を探しています。"
          },
          {
            "gender": "male",
            "text": "色は何ですか。"
          },
          {
            "gender": "female",
            "text": "水色で、持ち手が白いです。"
          }
        ],
        "question": "傘はどんな傘ですか。",
        "options": [
          "白で持ち手が水色",
          "黒で持ち手が白",
          "水色で持ち手が白",
          "水色で持ち手が黒"
        ],
        "answer": 2,
        "explanation": "水色で、持ち手が白い傘です。"
      },
      {
        "id": "N5_P20",
        "type": "conversation",
        "script": [
          {
            "gender": "male",
            "text": "今日の弁当はAとBがあります。Aは鶏肉、Bは魚です。"
          },
          {
            "gender": "female",
            "text": "じゃあ、魚のほうをお願いします。"
          }
        ],
        "question": "女の人はどちらを選びますか。",
        "options": [
          "Aの弁当",
          "Bの弁当",
          "両方",
          "まだ決めていない"
        ],
        "answer": 1,
        "explanation": "魚はBなので、Bの弁当を選びます。"
      },
      {
        "id": "N5_P21",
        "type": "announcement",
        "script": [
          {
            "gender": "female",
            "text": "本日、駅前広場でフリーマーケットを行っています。古本や食器、子ども服などがあります。"
          }
        ],
        "question": "フリーマーケットはどこで開かれていますか。",
        "options": [
          "駅前広場",
          "市役所の中",
          "学校の庭",
          "図書館の横"
        ],
        "answer": 0,
        "explanation": "「駅前広場で」と言っています。"
      },
      {
        "id": "N5_P22",
        "type": "announcement",
        "script": [
          {
            "gender": "female",
            "text": "このバスは市民病院を通りません。市民病院へ行く方は、次のバスに乗ってください。"
          }
        ],
        "question": "市民病院へ行く人はどうしますか。",
        "options": [
          "このバスに乗る",
          "次のバスに乗る",
          "歩いて行く",
          "駅へ戻る"
        ],
        "answer": 1,
        "explanation": "市民病院へ行く人は「次のバスに乗ってください」と言っています。"
      },
      {
        "id": "N5_P23",
        "type": "announcement",
        "script": [
          {
            "gender": "female",
            "text": "ただいま一階の催事場で、北海道のお菓子フェアを開催しています。試食もできます。"
          }
        ],
        "question": "一階では何をしていますか。",
        "options": [
          "写真展",
          "お菓子フェア",
          "本のセール",
          "子ども教室"
        ],
        "answer": 1,
        "explanation": "一階では「北海道のお菓子フェア」を開催しています。"
      },
      {
        "id": "N5_P24",
        "type": "announcement",
        "script": [
          {
            "gender": "female",
            "text": "マンションの皆さまへ。明日の朝九時から十時まで、水道工事のため水が使えません。"
          }
        ],
        "question": "いつ水が使えませんか。",
        "options": [
          "今日の朝九時から十時",
          "明日の朝九時から十時",
          "明日の夜九時から十時",
          "毎朝九時から十時"
        ],
        "answer": 1,
        "explanation": "「明日の朝九時から十時まで」です。"
      },
      {
        "id": "N5_P25",
        "type": "announcement",
        "script": [
          {
            "gender": "female",
            "text": "明日のハイキングは、朝七時に学校の前に集合です。雨でも行きます。"
          }
        ],
        "question": "みんなはどこに集まりますか。",
        "options": [
          "公園",
          "駅",
          "学校の前",
          "山の入り口"
        ],
        "answer": 2,
        "explanation": "集合場所は「学校の前」です。"
      }
    ],
    "verbal": [
      {
        "id": "N5_V01",
        "type": "conversation",
        "script": [
          {
            "gender": "female",
            "text": "すみません、この席、空いていますか。"
          }
        ],
        "question": "男の人は何と言うのがいちばんいいですか。",
        "options": [
          "はい、どうぞ。",
          "いいえ、食べます。",
          "あした行きます。",
          "三百円です。"
        ],
        "answer": 0,
        "explanation": "席について聞かれているので、「はい、どうぞ。」が自然です。"
      },
      {
        "id": "N5_V02",
        "type": "conversation",
        "script": [
          {
            "gender": "male",
            "text": "このあと、駅前のパン祭りに行きませんか。"
          }
        ],
        "question": "女の人は行く時、何と言いますか。",
        "options": [
          "いいですね。行きましょう。",
          "まだ寝ています。",
          "それは本です。",
          "右へ曲がります。"
        ],
        "answer": 0,
        "explanation": "誘いに応じる返事は「いいですね。行きましょう。」です。"
      },
      {
        "id": "N5_V03",
        "type": "conversation",
        "script": [
          {
            "gender": "female",
            "text": "ノートを忘れました。少し見せてもらってもいいですか。"
          }
        ],
        "question": "男の人は何と言うのがいいですか。",
        "options": [
          "いいですよ。どうぞ。",
          "それは赤いです。",
          "来週の金曜日です。",
          "ここで泳ぎます。"
        ],
        "answer": 0,
        "explanation": "見せてほしいという頼みに対して「いいですよ。どうぞ。」が自然です。"
      },
      {
        "id": "N5_V04",
        "type": "conversation",
        "script": [
          {
            "gender": "male",
            "text": "この近くにコインロッカーはありますか。"
          }
        ],
        "question": "女の人は道を教える時、何と言いますか。",
        "options": [
          "あそこにありますよ。",
          "毎日読みます。",
          "寒くないです。",
          "魚を食べます。"
        ],
        "answer": 0,
        "explanation": "場所を聞かれているので、「あそこにありますよ。」が自然です。"
      },
      {
        "id": "N5_V05",
        "type": "conversation",
        "script": [
          {
            "gender": "female",
            "text": "今日は少し頭が痛いです。"
          }
        ],
        "question": "男の人は何と言うのがいいですか。",
        "options": [
          "じゃあ、早く休んでください。",
          "それは百円です。",
          "わたしは先生です。",
          "明日は水曜日です。"
        ],
        "answer": 0,
        "explanation": "体調が悪い人への返事として「早く休んでください」が自然です。"
      },
      {
        "id": "N5_V06",
        "type": "conversation",
        "script": [
          {
            "gender": "female",
            "text": "レジ袋はご利用になりますか。"
          }
        ],
        "question": "客は袋がいらない時、何と言いますか。",
        "options": [
          "大丈夫です。いりません。",
          "はい、雨ですね。",
          "三人です。",
          "よく見えます。"
        ],
        "answer": 0,
        "explanation": "袋がいらない時の自然な答えです。"
      },
      {
        "id": "N5_V07",
        "type": "conversation",
        "script": [
          {
            "gender": "male",
            "text": "すみません、写真を一枚撮っていただけますか。"
          }
        ],
        "question": "女の人は何と言いますか。",
        "options": [
          "はい、もちろんです。",
          "いいえ、六月です。",
          "あとで食べます。",
          "そこは駅です。"
        ],
        "answer": 0,
        "explanation": "依頼を受ける返事は「はい、もちろんです。」です。"
      },
      {
        "id": "N5_V08",
        "type": "conversation",
        "script": [
          {
            "gender": "female",
            "text": "あ、電車がもうすぐ来ますよ。"
          }
        ],
        "question": "男の人は急ぐ時、何と言いますか。",
        "options": [
          "じゃあ、走りましょう。",
          "でも青いです。",
          "二回目です。",
          "わたしは学生です。"
        ],
        "answer": 0,
        "explanation": "電車が来るので「じゃあ、走りましょう。」が自然です。"
      },
      {
        "id": "N5_V09",
        "type": "conversation",
        "script": [
          {
            "gender": "male",
            "text": "おつり、五十円多いですよ。"
          }
        ],
        "question": "店員は何と言いますか。",
        "options": [
          "すみません。ありがとうございます。",
          "では、二階です。",
          "今日は休みます。",
          "日本語が好きです。"
        ],
        "answer": 0,
        "explanation": "金額の間違いを教えてもらったら謝って感謝します。"
      },
      {
        "id": "N5_V10",
        "type": "conversation",
        "script": [
          {
            "gender": "female",
            "text": "このスープ、少し熱いですね。"
          }
        ],
        "question": "男の人はどう答えるのがいいですか。",
        "options": [
          "そうですね。少し待ちましょう。",
          "あした買います。",
          "ここに駅があります。",
          "十時に寝ます。"
        ],
        "answer": 0,
        "explanation": "熱いので少し待つ、が自然です。"
      },
      {
        "id": "N5_V11",
        "type": "conversation",
        "script": [
          {
            "gender": "male",
            "text": "明日の朝、駅まで送ってくれませんか。"
          }
        ],
        "question": "女の人は引き受ける時、何と言いますか。",
        "options": [
          "いいよ。何時がいい？",
          "駅は遠いです。",
          "新聞を読みます。",
          "そこは暑いです。"
        ],
        "answer": 0,
        "explanation": "頼みを受けるなら「いいよ。何時がいい？」が自然です。"
      },
      {
        "id": "N5_V12",
        "type": "conversation",
        "script": [
          {
            "gender": "female",
            "text": "きょうのオンライン授業、リンクが開かないんです。"
          }
        ],
        "question": "友だちは何と言うのがいいですか。",
        "options": [
          "先生にメールしてみたら？",
          "赤い靴を買います。",
          "水を三本です。",
          "そこに座ります。"
        ],
        "answer": 0,
        "explanation": "困っている人への助言として自然です。"
      },
      {
        "id": "N5_V13",
        "type": "conversation",
        "script": [
          {
            "gender": "male",
            "text": "ごめん、約束の時間に少し遅れそう。"
          }
        ],
        "question": "女の人は何と言いますか。",
        "options": [
          "わかった。気をつけて来てね。",
          "明日は晴れでした。",
          "五枚あります。",
          "肉は食べません。"
        ],
        "answer": 0,
        "explanation": "遅れる連絡への自然な返事です。"
      },
      {
        "id": "N5_V14",
        "type": "conversation",
        "script": [
          {
            "gender": "female",
            "text": "このケーキ、半分こしない？"
          }
        ],
        "question": "男の人は賛成する時、何と言いますか。",
        "options": [
          "いいね、そうしよう。",
          "今日は月曜日です。",
          "ここで待ちません。",
          "古い本です。"
        ],
        "answer": 0,
        "explanation": "提案に賛成する返事です。"
      },
      {
        "id": "N5_V15",
        "type": "conversation",
        "script": [
          {
            "gender": "male",
            "text": "すみません、席を少し詰めてもらえますか。"
          }
        ],
        "question": "女の人は何と言いますか。",
        "options": [
          "はい、いいですよ。",
          "いいえ、寒いです。",
          "先週でした。",
          "そこを読みます。"
        ],
        "answer": 0,
        "explanation": "席を詰める依頼への自然な返答です。"
      },
      {
        "id": "N5_V16",
        "type": "conversation",
        "script": [
          {
            "gender": "female",
            "text": "この漢字、どう読むんですか。"
          }
        ],
        "question": "先生は何と言うのがいちばんいいですか。",
        "options": [
          "『さくら』と読みます。",
          "じゃあ、買いましょう。",
          "そこは静かです。",
          "今日は二人です。"
        ],
        "answer": 0,
        "explanation": "読み方を聞かれているのでそれを答えます。"
      },
      {
        "id": "N5_V17",
        "type": "conversation",
        "script": [
          {
            "gender": "male",
            "text": "あの、注文したラテ、まだですか。"
          }
        ],
        "question": "店員は何と言いますか。",
        "options": [
          "申し訳ありません。すぐお持ちします。",
          "それは図書館です。",
          "明日は寒かったです。",
          "三回行きます。"
        ],
        "answer": 0,
        "explanation": "注文を待たせた時の自然な対応です。"
      },
      {
        "id": "N5_V18",
        "type": "conversation",
        "script": [
          {
            "gender": "female",
            "text": "わたし、猫カフェに行ったことがないんです。"
          }
        ],
        "question": "友だちは何と言いますか。",
        "options": [
          "じゃあ、今度いっしょに行こう。",
          "でも白です。",
          "机の下です。",
          "八時に終わる。"
        ],
        "answer": 0,
        "explanation": "未経験の話への自然な誘いです。"
      },
      {
        "id": "N5_V19",
        "type": "conversation",
        "script": [
          {
            "gender": "male",
            "text": "荷物が重そうですね。"
          }
        ],
        "question": "女の人は助けてほしい時、何と言いますか。",
        "options": [
          "ありがとうございます。お願いします。",
          "今日は元気です。",
          "本を二冊です。",
          "窓を開けます。"
        ],
        "answer": 0,
        "explanation": "助けを受ける自然な返事です。"
      },
      {
        "id": "N5_V20",
        "type": "conversation",
        "script": [
          {
            "gender": "female",
            "text": "この席、充電できますか。"
          }
        ],
        "question": "店員は何と言いますか。",
        "options": [
          "はい、足元にコンセントがあります。",
          "いいえ、明日です。",
          "三枚買いました。",
          "家で食べます。"
        ],
        "answer": 0,
        "explanation": "充電できるか聞かれているので答えます。"
      },
      {
        "id": "N5_V21",
        "type": "conversation",
        "script": [
          {
            "gender": "male",
            "text": "じゃ、そろそろ帰ります。"
          }
        ],
        "question": "女の人は何と言いますか。",
        "options": [
          "今日はありがとう。気をつけて。",
          "海は広いです。",
          "まだ高いです。",
          "あとで開けます。"
        ],
        "answer": 0,
        "explanation": "別れ際の自然なあいさつです。"
      },
      {
        "id": "N5_V22",
        "type": "conversation",
        "script": [
          {
            "gender": "female",
            "text": "プリンターが止まってしまいました。"
          }
        ],
        "question": "男の人は手伝う時、何と言いますか。",
        "options": [
          "見てみますね。",
          "昨日買いました。",
          "バスで行きます。",
          "そこは暑いです。"
        ],
        "answer": 0,
        "explanation": "助ける時の自然な言い方です。"
      },
      {
        "id": "N5_V23",
        "type": "conversation",
        "script": [
          {
            "gender": "male",
            "text": "明日、雨ならどうしますか。"
          }
        ],
        "question": "女の人は予定を変える時、何と言いますか。",
        "options": [
          "その時は映画を見に行こう。",
          "それは青いです。",
          "七時半です。",
          "先に食べました。"
        ],
        "answer": 0,
        "explanation": "雨なら別の予定を提案するのが自然です。"
      },
      {
        "id": "N5_V24",
        "type": "conversation",
        "script": [
          {
            "gender": "female",
            "text": "すみません、ここで写真を撮ってもいいですか。"
          }
        ],
        "question": "係の人は許可する時、何と言いますか。",
        "options": [
          "はい、フラッシュなしでお願いします。",
          "ここは甘いです。",
          "今年は五年です。",
          "南口にいます。"
        ],
        "answer": 0,
        "explanation": "許可しつつ条件を伝える自然な表現です。"
      },
      {
        "id": "N5_V25",
        "type": "conversation",
        "script": [
          {
            "gender": "male",
            "text": "今日のシフト、代わってもらえませんか。"
          }
        ],
        "question": "女の人は無理な時、何と言いますか。",
        "options": [
          "ごめん、今日はちょっと難しい。",
          "もちろん、赤です。",
          "そこにあります。",
          "今は四つです。"
        ],
        "answer": 0,
        "explanation": "断る時の自然な言い方です。"
      }
    ],
    "cepat": [
      {
        "id": "N5_C01",
        "type": "conversation",
        "script": [
          {
            "gender": "female",
            "text": "お会計は別々ですか。"
          }
        ],
        "question": "このとき、いちばん自然な返事はどれですか。",
        "options": [
          "いっしょでお願いします。",
          "明日は休みです。",
          "外は寒いです。",
          "図書館へ行きます。"
        ],
        "answer": 0,
        "explanation": "会計について聞かれているので、「いっしょでお願いします」が適切です。"
      },
      {
        "id": "N5_C02",
        "type": "conversation",
        "script": [
          {
            "gender": "female",
            "text": "もう一杯いかがですか。"
          }
        ],
        "question": "このとき、いちばん自然な返事はどれですか。",
        "options": [
          "ありがとうございます。でも、けっこうです。",
          "昨日の午後です。",
          "三本読みました。",
          "北口にあります。"
        ],
        "answer": 0,
        "explanation": "飲み物を勧められて断る自然な返事です。"
      },
      {
        "id": "N5_C03",
        "type": "conversation",
        "script": [
          {
            "gender": "female",
            "text": "次は新橋です。お降りの方はご準備ください。"
          }
        ],
        "question": "このとき、いちばん自然な返事はどれですか。",
        "options": [
          "はい。",
          "五百円です。",
          "来週の月曜です。",
          "英語を勉強します。"
        ],
        "answer": 0,
        "explanation": "アナウンスへの短い反応として自然です。"
      },
      {
        "id": "N5_C04",
        "type": "conversation",
        "script": [
          {
            "gender": "female",
            "text": "この席、使いますか。"
          }
        ],
        "question": "このとき、いちばん自然な返事はどれですか。",
        "options": [
          "いいえ、どうぞ。",
          "はい、雨です。",
          "三つあります。",
          "来年行きます。"
        ],
        "answer": 0,
        "explanation": "席を使うか聞かれた時の自然な返事です。"
      },
      {
        "id": "N5_C05",
        "type": "conversation",
        "script": [
          {
            "gender": "female",
            "text": "エアコン、少し弱くしましょうか。"
          }
        ],
        "question": "このとき、いちばん自然な返事はどれですか。",
        "options": [
          "お願いします。",
          "もう食べました。",
          "右のほうです。",
          "赤じゃないです。"
        ],
        "answer": 0,
        "explanation": "提案を受ける返答です。"
      },
      {
        "id": "N5_C06",
        "type": "conversation",
        "script": [
          {
            "gender": "female",
            "text": "きっぷはお持ちですか。"
          }
        ],
        "question": "このとき、いちばん自然な返事はどれですか。",
        "options": [
          "はい、あります。",
          "二階にいます。",
          "今朝はパンです。",
          "書きません。"
        ],
        "answer": 0,
        "explanation": "持っているか聞かれているので「あります」が適切です。"
      },
      {
        "id": "N5_C07",
        "type": "conversation",
        "script": [
          {
            "gender": "female",
            "text": "お名前をもう一度お願いします。"
          }
        ],
        "question": "このとき、いちばん自然な返事はどれですか。",
        "options": [
          "中村です。",
          "来月です。",
          "三本です。",
          "それは青いです。"
        ],
        "answer": 0,
        "explanation": "名前を聞かれたので答えます。"
      },
      {
        "id": "N5_C08",
        "type": "conversation",
        "script": [
          {
            "gender": "female",
            "text": "この席、窓側と通路側、どちらがいいですか。"
          }
        ],
        "question": "このとき、いちばん自然な返事はどれですか。",
        "options": [
          "窓側でお願いします。",
          "二時半でした。",
          "いつも飲みます。",
          "雨が降ります。"
        ],
        "answer": 0,
        "explanation": "座席の希望を答える返事です。"
      },
      {
        "id": "N5_C09",
        "type": "conversation",
        "script": [
          {
            "gender": "female",
            "text": "スマホの充電器、持ってますか。"
          }
        ],
        "question": "このとき、いちばん自然な返事はどれですか。",
        "options": [
          "はい、持ってますよ。",
          "いいえ、火曜日です。",
          "わたしは図書館です。",
          "八百円でした。"
        ],
        "answer": 0,
        "explanation": "持っているかどうかへの返答です。"
      },
      {
        "id": "N5_C10",
        "type": "conversation",
        "script": [
          {
            "gender": "female",
            "text": "もう出発しますよ。"
          }
        ],
        "question": "このとき、いちばん自然な返事はどれですか。",
        "options": [
          "今、行きます。",
          "そこに座ります。",
          "先週でした。",
          "緑色です。"
        ],
        "answer": 0,
        "explanation": "急がされている時の自然な返事です。"
      },
      {
        "id": "N5_C11",
        "type": "conversation",
        "script": [
          {
            "gender": "female",
            "text": "少し手伝ってもらえますか。"
          }
        ],
        "question": "このとき、いちばん自然な返事はどれですか。",
        "options": [
          "はい、何をすればいいですか。",
          "ええと、四時です。",
          "今日は寒かったです。",
          "図書館の前です。"
        ],
        "answer": 0,
        "explanation": "手伝いを求められた時の適切な反応です。"
      },
      {
        "id": "N5_C12",
        "type": "conversation",
        "script": [
          {
            "gender": "female",
            "text": "お湯、足りていますか。"
          }
        ],
        "question": "このとき、いちばん自然な返事はどれですか。",
        "options": [
          "はい、大丈夫です。",
          "じゃあ、走ります。",
          "白を買います。",
          "猫が好きです。"
        ],
        "answer": 0,
        "explanation": "足りているか聞かれた時の自然な返事です。"
      },
      {
        "id": "N5_C13",
        "type": "conversation",
        "script": [
          {
            "gender": "female",
            "text": "少し待っていただけますか。"
          }
        ],
        "question": "このとき、いちばん自然な返事はどれですか。",
        "options": [
          "はい、わかりました。",
          "二本ください。",
          "うちで寝ます。",
          "南口でした。"
        ],
        "answer": 0,
        "explanation": "待つように言われた時の適切な返事です。"
      },
      {
        "id": "N5_C14",
        "type": "conversation",
        "script": [
          {
            "gender": "female",
            "text": "これ、試着してもいいですか。"
          }
        ],
        "question": "このとき、いちばん自然な返事はどれですか。",
        "options": [
          "どうぞ。",
          "五時ごろです。",
          "まだ寒いです。",
          "駅で会います。"
        ],
        "answer": 0,
        "explanation": "許可を与える自然な表現です。"
      },
      {
        "id": "N5_C15",
        "type": "conversation",
        "script": [
          {
            "gender": "female",
            "text": "明日の集合、七時で大丈夫？"
          }
        ],
        "question": "このとき、いちばん自然な返事はどれですか。",
        "options": [
          "うん、大丈夫。",
          "三冊あります。",
          "あそこで買います。",
          "まだ赤いです。"
        ],
        "answer": 0,
        "explanation": "時間の確認に対する自然な返答です。"
      },
      {
        "id": "N5_C16",
        "type": "conversation",
        "script": [
          {
            "gender": "female",
            "text": "お先に失礼します。"
          }
        ],
        "question": "このとき、いちばん自然な返事はどれですか。",
        "options": [
          "おつかれさまでした。",
          "百円足ります。",
          "よく晴れます。",
          "前にあります。"
        ],
        "answer": 0,
        "explanation": "職場で先に帰る人への自然な返事です。"
      },
      {
        "id": "N5_C17",
        "type": "conversation",
        "script": [
          {
            "gender": "female",
            "text": "これ、辛いですか。"
          }
        ],
        "question": "このとき、いちばん自然な返事はどれですか。",
        "options": [
          "いいえ、あまり辛くないです。",
          "来週の木曜日です。",
          "いま勉強します。",
          "外で待ちます。"
        ],
        "answer": 0,
        "explanation": "辛さを聞かれて答える表現です。"
      },
      {
        "id": "N5_C18",
        "type": "conversation",
        "script": [
          {
            "gender": "female",
            "text": "何か温かい飲み物、ありますか。"
          }
        ],
        "question": "このとき、いちばん自然な返事はどれですか。",
        "options": [
          "はい、しょうが湯があります。",
          "十ページです。",
          "ここで読みます。",
          "白いかばんです。"
        ],
        "answer": 0,
        "explanation": "飲み物の有無を尋ねられたので答えます。"
      },
      {
        "id": "N5_C19",
        "type": "conversation",
        "script": [
          {
            "gender": "female",
            "text": "席、替わってもらえますか。"
          }
        ],
        "question": "このとき、いちばん自然な返事はどれですか。",
        "options": [
          "はい、いいですよ。",
          "すぐ晴れます。",
          "来月帰ります。",
          "川の近くです。"
        ],
        "answer": 0,
        "explanation": "席を替わる依頼に応じる返事です。"
      },
      {
        "id": "N5_C20",
        "type": "conversation",
        "script": [
          {
            "gender": "female",
            "text": "次の授業、何教室？"
          }
        ],
        "question": "このとき、いちばん自然な返事はどれですか。",
        "options": [
          "二〇三教室だよ。",
          "駅の中です。",
          "まだ食べません。",
          "小さいです。"
        ],
        "answer": 0,
        "explanation": "教室を聞かれているので番号を答えます。"
      },
      {
        "id": "N5_C21",
        "type": "conversation",
        "script": [
          {
            "gender": "female",
            "text": "きょう、残業できますか。"
          }
        ],
        "question": "このとき、いちばん自然な返事はどれですか。",
        "options": [
          "すみません、今日は病院があります。",
          "毎朝飲みます。",
          "右に曲がります。",
          "七枚あります。"
        ],
        "answer": 0,
        "explanation": "できない理由を簡単に伝える返事です。"
      },
      {
        "id": "N5_C22",
        "type": "conversation",
        "script": [
          {
            "gender": "female",
            "text": "窓、開けてもいい？"
          }
        ],
        "question": "このとき、いちばん自然な返事はどれですか。",
        "options": [
          "うん、いいよ。",
          "では三時です。",
          "そこを読みます。",
          "味は甘いです。"
        ],
        "answer": 0,
        "explanation": "許可を与える自然な返事です。"
      },
      {
        "id": "N5_C23",
        "type": "conversation",
        "script": [
          {
            "gender": "female",
            "text": "この荷物、上に置きましょうか。"
          }
        ],
        "question": "このとき、いちばん自然な返事はどれですか。",
        "options": [
          "ありがとうございます。助かります。",
          "日曜日が好きです。",
          "明るかったです。",
          "バスで三十分です。"
        ],
        "answer": 0,
        "explanation": "助けを申し出てもらった時の自然な返事です。"
      },
      {
        "id": "N5_C24",
        "type": "conversation",
        "script": [
          {
            "gender": "female",
            "text": "今夜のイベント、行けそう？"
          }
        ],
        "question": "このとき、いちばん自然な返事はどれですか。",
        "options": [
          "たぶん行けると思う。",
          "今年は青です。",
          "ここでは書きません。",
          "六本飲みます。"
        ],
        "answer": 0,
        "explanation": "行けそうかどうかへの自然な返答です。"
      },
      {
        "id": "N5_C25",
        "type": "conversation",
        "script": [
          {
            "gender": "female",
            "text": "ご注文は以上でよろしいですか。"
          }
        ],
        "question": "このとき、いちばん自然な返事はどれですか。",
        "options": [
          "はい、お願いします。",
          "もう閉めました。",
          "そこは静かです。",
          "手前にあります。"
        ],
        "answer": 0,
        "explanation": "注文確認に対する自然な返事です。"
      }
    ]
  },
  "N4": {
    "tugas": [
      {
        "id": "N4_T01",
        "type": "conversation",
        "script": [
          {
            "gender": "female",
            "text": "アルバイト初日なんですが、まず何をすればいいですか。"
          },
          {
            "gender": "male",
            "text": "ロッカーに荷物を入れてから、エプロンを着てください。そのあとでレジの横に来てください。"
          }
        ],
        "question": "女の人はまずどうしますか。",
        "options": [
          "すぐレジに立つ",
          "ロッカーに荷物を入れてから、エプロンを着る",
          "店長に電話する",
          "先に休憩を取る"
        ],
        "answer": 1,
        "explanation": "まずロッカーに荷物を入れてから、エプロンを着ます。"
      },
      {
        "id": "N4_T02",
        "type": "conversation",
        "script": [
          {
            "gender": "male",
            "text": "ゼミの発表、何か手伝うことありますか。"
          },
          {
            "gender": "female",
            "text": "じゃあ、資料を二十部印刷して、教室の後ろに置いてください。発表の順番表は私が作ります。"
          }
        ],
        "question": "男の人がやるのは何ですか。",
        "options": [
          "順番表を作る",
          "資料を二十部印刷して、教室の後ろに置く",
          "先生にメールする",
          "プロジェクターを借りる"
        ],
        "answer": 1,
        "explanation": "男の人は資料を印刷して教室の後ろに置きます。"
      },
      {
        "id": "N4_T03",
        "type": "conversation",
        "script": [
          {
            "gender": "female",
            "text": "引っ越しの手続きって、何からすればいいんですか。"
          },
          {
            "gender": "male",
            "text": "先に市役所で転入届を出して、そのあと銀行や携帯の住所変更をするといいですよ。"
          }
        ],
        "question": "女の人は最初に何をしますか。",
        "options": [
          "銀行へ行く",
          "携帯ショップへ行く",
          "市役所で転入届を出す",
          "荷物を開ける"
        ],
        "answer": 2,
        "explanation": "最初にするのは市役所で転入届を出すことです。"
      },
      {
        "id": "N4_T04",
        "type": "conversation",
        "script": [
          {
            "gender": "male",
            "text": "このスマホ、修理をお願いしたいんですが。"
          },
          {
            "gender": "female",
            "text": "では、アプリで番号札を取ってから窓口へお越しください。"
          }
        ],
        "question": "男の人は先に何をしますか。",
        "options": [
          "そのまま窓口へ行く",
          "電話で問い合わせる",
          "アプリで番号札を取る",
          "別の日に来る"
        ],
        "answer": 2,
        "explanation": "先にアプリで番号札を取ります。"
      },
      {
        "id": "N4_T05",
        "type": "conversation",
        "script": [
          {
            "gender": "female",
            "text": "サークルの新歓に参加したいんですが。"
          },
          {
            "gender": "male",
            "text": "受付で名前を書いて、青い名札を受け取ってください。"
          }
        ],
        "question": "女の人は何を受け取りますか。",
        "options": [
          "赤い名札",
          "青い名札",
          "地図",
          "飲み物"
        ],
        "answer": 1,
        "explanation": "受付で受け取るのは青い名札です。"
      },
      {
        "id": "N4_T06",
        "type": "conversation",
        "script": [
          {
            "gender": "male",
            "text": "明日の料理教室、何を持って行けばいいですか。"
          },
          {
            "gender": "female",
            "text": "エプロンとふきん、それから筆記用具もお願いします。材料は教室で用意します。"
          }
        ],
        "question": "男の人は何を持って行きますか。",
        "options": [
          "材料とエプロン",
          "エプロンとふきんと筆記用具",
          "ふきんだけ",
          "材料と筆記用具"
        ],
        "answer": 1,
        "explanation": "材料は要りません。持って行くのはエプロンとふきんと筆記用具です。"
      },
      {
        "id": "N4_T07",
        "type": "conversation",
        "script": [
          {
            "gender": "female",
            "text": "来週の地域清掃、参加したいんですが。"
          },
          {
            "gender": "male",
            "text": "朝八時に公園へ来てください。ごみ袋はこちらで配りますが、軍手は持参してください。"
          }
        ],
        "question": "女の人が持って行くものは何ですか。",
        "options": [
          "ごみ袋",
          "軍手",
          "ほうき",
          "水"
        ],
        "answer": 1,
        "explanation": "ごみ袋は配るので、軍手を持って行きます。"
      },
      {
        "id": "N4_T08",
        "type": "conversation",
        "script": [
          {
            "gender": "female",
            "text": "すみません、この自習室を使いたいんですが。"
          },
          {
            "gender": "male",
            "text": "学生証を見せて、利用カードに時間を書いてください。席は自由です。"
          }
        ],
        "question": "女の人は何をしなければなりませんか。",
        "options": [
          "席を予約する",
          "学生証を見せて時間を書く",
          "先生の許可をもらう",
          "二階でお金を払う"
        ],
        "answer": 1,
        "explanation": "学生証を見せて利用カードに時間を書きます。"
      },
      {
        "id": "N4_T09",
        "type": "conversation",
        "script": [
          {
            "gender": "male",
            "text": "フリーマーケットに出店したいんですが。"
          },
          {
            "gender": "female",
            "text": "では、この申込用紙を書いてください。当日は朝九時までに受付へ来てください。"
          }
        ],
        "question": "男の人はまず何をしますか。",
        "options": [
          "朝九時に受付へ行く",
          "品物を並べる",
          "申込用紙を書く",
          "場所代を払う"
        ],
        "answer": 2,
        "explanation": "まず申込用紙を書きます。"
      },
      {
        "id": "N4_T10",
        "type": "conversation",
        "script": [
          {
            "gender": "female",
            "text": "来月の日本語スピーチ大会に出たいです。"
          },
          {
            "gender": "male",
            "text": "今週金曜日までにテーマを書いて提出してください。原稿は再来週で大丈夫です。"
          }
        ],
        "question": "女の人は今週金曜日までに何を出しますか。",
        "options": [
          "原稿",
          "テーマ",
          "参加費",
          "写真"
        ],
        "answer": 1,
        "explanation": "今週金曜日までに出すのはテーマです。"
      },
      {
        "id": "N4_T11",
        "type": "conversation",
        "script": [
          {
            "gender": "male",
            "text": "ネットで注文した靴を受け取りたいんですが。"
          },
          {
            "gender": "female",
            "text": "注文番号か、登録した電話番号をお願いします。試着して、サイズが合わなければ交換もできます。"
          }
        ],
        "question": "男の人は最初に何を言いますか。",
        "options": [
          "住所",
          "注文番号か電話番号",
          "交換したい理由",
          "靴の色"
        ],
        "answer": 1,
        "explanation": "受け取りのために注文番号か電話番号を伝えます。"
      },
      {
        "id": "N4_T12",
        "type": "conversation",
        "script": [
          {
            "gender": "female",
            "text": "この炊飯器、使い方がよくわからなくて。"
          },
          {
            "gender": "male",
            "text": "まずこのボタンでメニューを選んでください。そのあと、スタートを押します。"
          }
        ],
        "question": "女の人は最初に何をしますか。",
        "options": [
          "スタートを押す",
          "水を捨てる",
          "メニューを選ぶ",
          "電源を抜く"
        ],
        "answer": 2,
        "explanation": "最初にメニューを選びます。"
      },
      {
        "id": "N4_T13",
        "type": "conversation",
        "script": [
          {
            "gender": "female",
            "text": "持ち帰りですか、それともこちらで召し上がりますか。"
          },
          {
            "gender": "male",
            "text": "持ち帰りです。スプーンは一本ください。"
          }
        ],
        "question": "男の人はどうしたいですか。",
        "options": [
          "店で食べる",
          "持ち帰る",
          "配達してもらう",
          "注文をやめる"
        ],
        "answer": 1,
        "explanation": "男の人は持ち帰りにします。"
      },
      {
        "id": "N4_T14",
        "type": "conversation",
        "script": [
          {
            "gender": "male",
            "text": "このスマートウォッチ、修理をお願いしたいんですが。"
          },
          {
            "gender": "female",
            "text": "保証書があれば無料です。なければ見積もりを出します。"
          }
        ],
        "question": "男の人は無料にしたいなら何が必要ですか。",
        "options": [
          "レシート",
          "箱",
          "保証書",
          "会員カード"
        ],
        "answer": 2,
        "explanation": "無料修理には保証書が必要です。"
      },
      {
        "id": "N4_T15",
        "type": "conversation",
        "script": [
          {
            "gender": "female",
            "text": "このスーツケース、鍵をなくしてしまって。"
          },
          {
            "gender": "male",
            "text": "こちらのカウンターで身分証を見せてください。確認できたら開けます。"
          }
        ],
        "question": "女の人は何を見せますか。",
        "options": [
          "航空券",
          "身分証",
          "地図",
          "予約番号"
        ],
        "answer": 1,
        "explanation": "身分証を見せる必要があります。"
      },
      {
        "id": "N4_T16",
        "type": "conversation",
        "script": [
          {
            "gender": "female",
            "text": "京都へ日帰りで行きたいんですが、どの切符がいいですか。"
          },
          {
            "gender": "male",
            "text": "往復なら割引切符があります。自由席ですが、千円安くなります。"
          }
        ],
        "question": "女の人は何を買うのがよさそうですか。",
        "options": [
          "片道切符",
          "割引の往復切符",
          "指定席だけの切符",
          "バスの回数券"
        ],
        "answer": 1,
        "explanation": "日帰りなので往復の割引切符がよさそうです。"
      },
      {
        "id": "N4_T17",
        "type": "conversation",
        "script": [
          {
            "gender": "male",
            "text": "空港行きのバスはここですか。"
          },
          {
            "gender": "female",
            "text": "はい。ただし、大きい荷物がある方は先に整理券を取ってください。"
          }
        ],
        "question": "男の人は大きい荷物がある場合、まず何をしますか。",
        "options": [
          "先に乗る",
          "整理券を取る",
          "荷物を預ける",
          "窓口へ行く"
        ],
        "answer": 1,
        "explanation": "大きい荷物がある方は整理券を取ります。"
      },
      {
        "id": "N4_T18",
        "type": "conversation",
        "script": [
          {
            "gender": "female",
            "text": "今日の山手線、少し遅れているんですか。"
          },
          {
            "gender": "male",
            "text": "はい。信号トラブルで五分ほど遅れています。急ぐなら地下鉄のほうが早いですよ。"
          }
        ],
        "question": "急いでいる人はどうしたほうがいいですか。",
        "options": [
          "山手線を待つ",
          "地下鉄に乗る",
          "タクシーを呼ぶ",
          "歩く"
        ],
        "answer": 1,
        "explanation": "急ぐなら地下鉄のほうが早いと言っています。"
      },
      {
        "id": "N4_T19",
        "type": "conversation",
        "script": [
          {
            "gender": "male",
            "text": "レンタサイクルを借りたいです。"
          },
          {
            "gender": "female",
            "text": "アプリで登録してから、このQRコードを読み取ってください。"
          }
        ],
        "question": "男の人は先に何をしますか。",
        "options": [
          "QRコードを読む",
          "アプリで登録する",
          "お金を払う",
          "店に電話する"
        ],
        "answer": 1,
        "explanation": "先にアプリで登録します。"
      },
      {
        "id": "N4_T20",
        "type": "conversation",
        "script": [
          {
            "gender": "female",
            "text": "ホテルの朝食券をなくしてしまいました。"
          },
          {
            "gender": "male",
            "text": "フロントで部屋番号を言えば、再発行できます。"
          }
        ],
        "question": "女の人はどうすればいいですか。",
        "options": [
          "食堂で説明する",
          "フロントで部屋番号を言う",
          "新しく買う",
          "朝食をあきらめる"
        ],
        "answer": 1,
        "explanation": "フロントで部屋番号を言えば再発行できます。"
      },
      {
        "id": "N4_T21",
        "type": "announcement",
        "script": [
          {
            "gender": "female",
            "text": "お知らせします。本日、二号館の自動販売機は点検中です。飲み物は一階の売店をご利用ください。"
          }
        ],
        "question": "飲み物を買いたい人はどうしますか。",
        "options": [
          "二号館の自動販売機を使う",
          "一階の売店へ行く",
          "点検が終わるまで待つ",
          "外の店へ行く"
        ],
        "answer": 1,
        "explanation": "飲み物は一階の売店を利用します。"
      },
      {
        "id": "N4_T22",
        "type": "announcement",
        "script": [
          {
            "gender": "female",
            "text": "市民プールからのお知らせです。本日は大会のため、一般の方は午後三時からご利用いただけます。"
          }
        ],
        "question": "一般の人はいつからプールを使えますか。",
        "options": [
          "午前九時",
          "正午",
          "午後三時",
          "午後五時"
        ],
        "answer": 2,
        "explanation": "一般利用は午後三時からです。"
      },
      {
        "id": "N4_T23",
        "type": "announcement",
        "script": [
          {
            "gender": "female",
            "text": "マンションの皆さまへ。粗大ごみを出す方は、前日までに管理人室でシールを買ってください。"
          }
        ],
        "question": "粗大ごみを出す前に何をしますか。",
        "options": [
          "管理人室でシールを買う",
          "市役所へ電話する",
          "玄関に置く",
          "部屋番号を書く"
        ],
        "answer": 0,
        "explanation": "前日までに管理人室でシールを買います。"
      },
      {
        "id": "N4_T24",
        "type": "announcement",
        "script": [
          {
            "gender": "female",
            "text": "大学からのお知らせです。明日の一限はオンラインに変更になりました。授業のリンクは今夜メールで送ります。"
          }
        ],
        "question": "学生は何を確認しますか。",
        "options": [
          "教室の番号",
          "今夜のメール",
          "図書館の掲示板",
          "先生のSNS"
        ],
        "answer": 1,
        "explanation": "授業リンクは今夜メールで送られます。"
      },
      {
        "id": "N4_T25",
        "type": "announcement",
        "script": [
          {
            "gender": "female",
            "text": "商店街の夏祭りに来る方へ。自転車で来る場合は、駅前ではなく川沿いの臨時駐輪場を使ってください。"
          }
        ],
        "question": "自転車で来る人はどこに止めますか。",
        "options": [
          "駅前",
          "商店街の中",
          "川沿いの臨時駐輪場",
          "店の前"
        ],
        "answer": 2,
        "explanation": "川沿いの臨時駐輪場を使います。"
      }
    ],
    "poin": [
      {
        "id": "N4_P01",
        "type": "announcement",
        "script": [
          {
            "gender": "female",
            "text": "駅前のホールでは、今週末だけ台湾フードフェアを開いています。小籠包や豆花が人気です。入場は無料です。"
          }
        ],
        "question": "イベントで人気なのは何ですか。",
        "options": [
          "カレー",
          "小籠包や豆花",
          "和菓子",
          "ラーメン"
        ],
        "answer": 1,
        "explanation": "人気なのは小籠包や豆花です。"
      },
      {
        "id": "N4_P02",
        "type": "announcement",
        "script": [
          {
            "gender": "female",
            "text": "市立博物館からお知らせです。特別展の最終入場は午後四時半です。閉館は五時ですが、入場はその三十分前までです。"
          }
        ],
        "question": "最終入場は何時ですか。",
        "options": [
          "四時",
          "四時半",
          "五時",
          "五時半"
        ],
        "answer": 1,
        "explanation": "最終入場は午後四時半です。"
      },
      {
        "id": "N4_P03",
        "type": "announcement",
        "script": [
          {
            "gender": "female",
            "text": "明日のマラソン大会のため、朝七時から十時まで中央通りは車が通れません。バスも迂回します。"
          }
        ],
        "question": "中央通りはいつ車が通れませんか。",
        "options": [
          "朝六時から九時",
          "朝七時から十時",
          "朝八時から十一時",
          "一日中"
        ],
        "answer": 1,
        "explanation": "朝七時から十時までです。"
      },
      {
        "id": "N4_P04",
        "type": "announcement",
        "script": [
          {
            "gender": "female",
            "text": "このスーパーでは、今月からレジ袋が一枚五円になりました。マイバッグをお持ちください。"
          }
        ],
        "question": "レジ袋はいくらですか。",
        "options": [
          "一円",
          "三円",
          "五円",
          "十円"
        ],
        "answer": 2,
        "explanation": "レジ袋は一枚五円です。"
      },
      {
        "id": "N4_P05",
        "type": "announcement",
        "script": [
          {
            "gender": "female",
            "text": "大学の健康診断は、男子が火曜日、女子が水曜日です。受付時間はどちらも朝九時から十一時までです。"
          }
        ],
        "question": "女子の健康診断はいつですか。",
        "options": [
          "火曜日の朝",
          "水曜日の朝",
          "火曜日の午後",
          "水曜日の午後"
        ],
        "answer": 1,
        "explanation": "女子は水曜日の朝です。"
      },
      {
        "id": "N4_P06",
        "type": "conversation",
        "script": [
          {
            "gender": "female",
            "text": "田村さん、来週の出張、ホテルはもう取りましたか。"
          },
          {
            "gender": "male",
            "text": "はい。駅の近くは高かったので、少し離れたビジネスホテルにしました。朝食付きです。"
          }
        ],
        "question": "男の人が予約したホテルはどんなホテルですか。",
        "options": [
          "駅の近くで高いホテル",
          "少し離れた朝食付きのホテル",
          "温泉があるホテル",
          "朝食がないホテル"
        ],
        "answer": 1,
        "explanation": "少し離れた朝食付きのホテルです。"
      },
      {
        "id": "N4_P07",
        "type": "conversation",
        "script": [
          {
            "gender": "male",
            "text": "来月の展示会、土曜は行けないんです。"
          },
          {
            "gender": "female",
            "text": "じゃあ、日曜の午前中はどうですか。午後は混みますよ。"
          },
          {
            "gender": "male",
            "text": "そうします。"
          }
        ],
        "question": "男の人はいつ展示会に行きますか。",
        "options": [
          "土曜の午前",
          "土曜の午後",
          "日曜の午前",
          "日曜の午後"
        ],
        "answer": 2,
        "explanation": "日曜の午前に行きます。"
      },
      {
        "id": "N4_P08",
        "type": "conversation",
        "script": [
          {
            "gender": "female",
            "text": "このアパート、南向きで明るいですね。"
          },
          {
            "gender": "male",
            "text": "そうですね。駅からは少し遠いですが、スーパーが近いのは便利です。"
          }
        ],
        "question": "このアパートのいい点は何ですか。",
        "options": [
          "駅に近い",
          "スーパーが近い",
          "家賃が安い",
          "部屋が広い"
        ],
        "answer": 1,
        "explanation": "スーパーが近いのが便利です。"
      },
      {
        "id": "N4_P09",
        "type": "conversation",
        "script": [
          {
            "gender": "male",
            "text": "今日の会議、オンラインになったんですよね。"
          },
          {
            "gender": "female",
            "text": "はい。資料は午前中に共有フォルダへ入れておきました。"
          }
        ],
        "question": "資料はどこにありますか。",
        "options": [
          "机の上",
          "メールの添付",
          "共有フォルダ",
          "印刷室"
        ],
        "answer": 2,
        "explanation": "資料は共有フォルダにあります。"
      },
      {
        "id": "N4_P10",
        "type": "conversation",
        "script": [
          {
            "gender": "female",
            "text": "冷蔵庫の中にヨーグルトが二つあります。片方は明日まで、もう片方は来週までです。"
          },
          {
            "gender": "male",
            "text": "じゃあ、明日までのを先に食べます。"
          }
        ],
        "question": "男の人はどちらを先に食べますか。",
        "options": [
          "来週までのもの",
          "明日までのもの",
          "両方",
          "食べない"
        ],
        "answer": 1,
        "explanation": "明日までのものを先に食べます。"
      },
      {
        "id": "N4_P11",
        "type": "conversation",
        "script": [
          {
            "gender": "male",
            "text": "引っ越し先、もう決まった？"
          },
          {
            "gender": "female",
            "text": "うん。学校には少し遠いけど、家賃が今より一万円安いところにした。"
          }
        ],
        "question": "女の人が新しい部屋を選んだ理由は何ですか。",
        "options": [
          "学校に近いから",
          "家賃が安いから",
          "部屋が広いから",
          "駅が近いから"
        ],
        "answer": 1,
        "explanation": "家賃が安いことが理由です。"
      },
      {
        "id": "N4_P12",
        "type": "conversation",
        "script": [
          {
            "gender": "female",
            "text": "このワンピース、黒とベージュがあります。"
          },
          {
            "gender": "male",
            "text": "ベージュがいいけど、サイズがありませんね。じゃあ黒にします。"
          }
        ],
        "question": "男の人は何色を買いますか。",
        "options": [
          "黒",
          "ベージュ",
          "青",
          "白"
        ],
        "answer": 0,
        "explanation": "ベージュはサイズがないので黒を買います。"
      },
      {
        "id": "N4_P13",
        "type": "conversation",
        "script": [
          {
            "gender": "male",
            "text": "注文していた本、入荷したそうですよ。"
          },
          {
            "gender": "female",
            "text": "本当？仕事のあとに本屋へ寄って受け取るよ。"
          }
        ],
        "question": "女の人はこのあとどうしますか。",
        "options": [
          "家に帰る",
          "本屋へ寄る",
          "図書館へ行く",
          "注文を取り消す"
        ],
        "answer": 1,
        "explanation": "仕事のあとに本屋へ寄ります。"
      },
      {
        "id": "N4_P14",
        "type": "conversation",
        "script": [
          {
            "gender": "female",
            "text": "明日のゼミ、発表順が変わったって聞いた？"
          },
          {
            "gender": "male",
            "text": "うん。山本さんのあと、私じゃなくて佐々木さんが先になったらしい。"
          }
        ],
        "question": "男の人の前に発表するのはだれですか。",
        "options": [
          "山本さん",
          "佐々木さん",
          "先生",
          "男の人自身"
        ],
        "answer": 1,
        "explanation": "男の人の前は佐々木さんです。"
      },
      {
        "id": "N4_P15",
        "type": "conversation",
        "script": [
          {
            "gender": "male",
            "text": "きのうのライブ、何時に終わったの？"
          },
          {
            "gender": "female",
            "text": "九時半には終わったよ。思ったより早かった。"
          }
        ],
        "question": "ライブは何時ごろ終わりましたか。",
        "options": [
          "九時ごろ",
          "九時半ごろ",
          "十時ごろ",
          "十時半ごろ"
        ],
        "answer": 1,
        "explanation": "九時半ごろ終わりました。"
      },
      {
        "id": "N4_P16",
        "type": "conversation",
        "script": [
          {
            "gender": "female",
            "text": "保育園ですが、今日は遠足なのでお弁当が必要です。"
          },
          {
            "gender": "male",
            "text": "あ、忘れていました。今から持って行きます。"
          }
        ],
        "question": "男の人は何を持って行きますか。",
        "options": [
          "おやつ",
          "お弁当",
          "水筒",
          "タオル"
        ],
        "answer": 1,
        "explanation": "遠足なのでお弁当を持って行きます。"
      },
      {
        "id": "N4_P17",
        "type": "conversation",
        "script": [
          {
            "gender": "male",
            "text": "明日の飛行機を午後便に変えたいんですが。"
          },
          {
            "gender": "female",
            "text": "空席がありますので、三時二十分発に変更できます。"
          }
        ],
        "question": "変更後の飛行機は何時に出ますか。",
        "options": [
          "二時二十分",
          "三時二十分",
          "四時二十分",
          "五時二十分"
        ],
        "answer": 1,
        "explanation": "三時二十分発に変更します。"
      },
      {
        "id": "N4_P18",
        "type": "conversation",
        "script": [
          {
            "gender": "female",
            "text": "このカフェ、平日は静かでいいですね。"
          },
          {
            "gender": "male",
            "text": "そうですね。土日は混みますけど、平日の午後は席が取りやすいです。"
          }
        ],
        "question": "席が取りやすいのはいつですか。",
        "options": [
          "平日の午後",
          "平日の朝",
          "土日の午後",
          "土日の夜"
        ],
        "answer": 0,
        "explanation": "平日の午後は席が取りやすいです。"
      },
      {
        "id": "N4_P19",
        "type": "conversation",
        "script": [
          {
            "gender": "male",
            "text": "スマホの画面が割れてしまって。修理に何日ぐらいかかりますか。"
          },
          {
            "gender": "female",
            "text": "通常は三日ですが、部品がなければ一週間ほどかかります。"
          }
        ],
        "question": "普通なら修理は何日かかりますか。",
        "options": [
          "一日",
          "二日",
          "三日",
          "一週間"
        ],
        "answer": 2,
        "explanation": "通常は三日かかります。"
      },
      {
        "id": "N4_P20",
        "type": "conversation",
        "script": [
          {
            "gender": "female",
            "text": "あの映画、吹き替え版と字幕版があるよ。"
          },
          {
            "gender": "male",
            "text": "日本語の勉強になるから、字幕版にしようかな。"
          }
        ],
        "question": "男の人はどちらを選びそうですか。",
        "options": [
          "吹き替え版",
          "字幕版",
          "まだ決めていない",
          "見ない"
        ],
        "answer": 1,
        "explanation": "日本語の勉強になるので字幕版です。"
      },
      {
        "id": "N4_P21",
        "type": "conversation",
        "script": [
          {
            "gender": "male",
            "text": "このマンション、インターネット代が家賃に入っているんだって。"
          },
          {
            "gender": "female",
            "text": "それは助かるね。じゃあ毎月払うのは家賃と電気代ぐらいかな。"
          }
        ],
        "question": "家賃に含まれているのは何ですか。",
        "options": [
          "電気代",
          "ガス代",
          "インターネット代",
          "水道代"
        ],
        "answer": 2,
        "explanation": "家賃に含まれているのはインターネット代です。"
      },
      {
        "id": "N4_P22",
        "type": "conversation",
        "script": [
          {
            "gender": "female",
            "text": "部長、来週の会食ですが、和食のお店を予約しました。"
          },
          {
            "gender": "male",
            "text": "ありがとう。参加者は六人だから、個室だと助かるな。"
          },
          {
            "gender": "female",
            "text": "はい、個室をお願いしてあります。"
          }
        ],
        "question": "予約した店はどんな店ですか。",
        "options": [
          "洋食の店",
          "和食の店で個室がある",
          "中華の店",
          "立ち食いの店"
        ],
        "answer": 1,
        "explanation": "和食の店で個室があります。"
      },
      {
        "id": "N4_P23",
        "type": "conversation",
        "script": [
          {
            "gender": "male",
            "text": "この前頼んだスニーカー、今日届くはずなんだけど。"
          },
          {
            "gender": "female",
            "text": "配達状況を見たら、雪で一日遅れるって出てたよ。"
          }
        ],
        "question": "スニーカーはどうなっていますか。",
        "options": [
          "もう届いた",
          "今日の夜に届く",
          "一日遅れる",
          "注文がキャンセルになった"
        ],
        "answer": 2,
        "explanation": "雪で一日遅れます。"
      },
      {
        "id": "N4_P24",
        "type": "conversation",
        "script": [
          {
            "gender": "female",
            "text": "山に行くなら、今日は午後から風が強くなるって。"
          },
          {
            "gender": "male",
            "text": "じゃあ、午前中だけ歩いて早めに下りよう。"
          }
        ],
        "question": "二人はどうしますか。",
        "options": [
          "午後から登る",
          "一日中歩く",
          "午前中だけ歩く",
          "今日は行かない"
        ],
        "answer": 2,
        "explanation": "午前中だけ歩きます。"
      },
      {
        "id": "N4_P25",
        "type": "conversation",
        "script": [
          {
            "gender": "male",
            "text": "来月のライブ、一般発売は日曜の十時からだよ。"
          },
          {
            "gender": "female",
            "text": "ありがとう。忘れないようにアラームをかけておく。"
          }
        ],
        "question": "一般発売はいつですか。",
        "options": [
          "土曜の十時",
          "日曜の十時",
          "日曜の午後",
          "来月の一日"
        ],
        "answer": 1,
        "explanation": "一般発売は日曜の十時からです。"
      }
    ],
    "verbal": [
      {
        "id": "N4_V01",
        "type": "conversation",
        "script": [
          {
            "gender": "female",
            "text": "すみません、この荷物、上の棚に置くのを手伝っていただけますか。"
          }
        ],
        "question": "男の人は引き受ける時、何と言いますか。",
        "options": [
          "はい、お持ちします。",
          "いえ、来週です。",
          "それは三階です。",
          "昨日読みました。"
        ],
        "answer": 0,
        "explanation": "頼みを引き受ける自然な返事です。"
      },
      {
        "id": "N4_V02",
        "type": "conversation",
        "script": [
          {
            "gender": "male",
            "text": "会議の資料、まだ届いていないんですが。"
          }
        ],
        "question": "女の人は確認して伝える時、何と言いますか。",
        "options": [
          "今、メールを確認します。",
          "それは赤いです。",
          "午後は暑かったです。",
          "駅前で買いました。"
        ],
        "answer": 0,
        "explanation": "確認して対応する返事が自然です。"
      },
      {
        "id": "N4_V03",
        "type": "conversation",
        "script": [
          {
            "gender": "female",
            "text": "土曜日、よかったら商店街の夜市に行きませんか。"
          }
        ],
        "question": "男の人は予定がある時、何と言いますか。",
        "options": [
          "行きたいんですが、その日はバイトがあります。",
          "三冊借りました。",
          "今日はここまでです。",
          "窓を閉めました。"
        ],
        "answer": 0,
        "explanation": "断りつつ気持ちを伝える自然な表現です。"
      },
      {
        "id": "N4_V04",
        "type": "conversation",
        "script": [
          {
            "gender": "male",
            "text": "レポート、金曜までに出してくださいね。"
          }
        ],
        "question": "学生はまだ終わっていない時、何と言いますか。",
        "options": [
          "はい、木曜までに仕上げます。",
          "それは広いです。",
          "今朝はパンでした。",
          "よく泳ぎます。"
        ],
        "answer": 0,
        "explanation": "期限に間に合わせる返答が自然です。"
      },
      {
        "id": "N4_V05",
        "type": "conversation",
        "script": [
          {
            "gender": "female",
            "text": "このあと少し時間がありますか。相談したいことがあるんです。"
          }
        ],
        "question": "男の人は応じる時、何と言いますか。",
        "options": [
          "はい、十分ほどなら大丈夫です。",
          "右へ曲がります。",
          "来月二十日です。",
          "白いほうが好きです。"
        ],
        "answer": 0,
        "explanation": "時間があることを伝える返事です。"
      },
      {
        "id": "N4_V06",
        "type": "conversation",
        "script": [
          {
            "gender": "female",
            "text": "申し訳ありませんが、ご注文の品は今日は入荷しておりません。"
          }
        ],
        "question": "客は取り寄せをお願いする時、何と言いますか。",
        "options": [
          "では、入ったら連絡をいただけますか。",
          "その映画は見ません。",
          "一番奥にあります。",
          "ええ、九回目です。"
        ],
        "answer": 0,
        "explanation": "入荷待ちの自然な応答です。"
      },
      {
        "id": "N4_V07",
        "type": "conversation",
        "script": [
          {
            "gender": "male",
            "text": "この文章、少しわかりにくいですね。"
          }
        ],
        "question": "女の人は直す提案をする時、何と言いますか。",
        "options": [
          "じゃあ、例を入れて書き直しましょうか。",
          "雨なら出かけます。",
          "そこは高いです。",
          "週末は寝ます。"
        ],
        "answer": 0,
        "explanation": "改善提案として自然です。"
      },
      {
        "id": "N4_V08",
        "type": "conversation",
        "script": [
          {
            "gender": "female",
            "text": "遅くなってしまって、本当にすみません。"
          }
        ],
        "question": "男の人はやわらかく返す時、何と言いますか。",
        "options": [
          "大丈夫ですよ。気をつけて来てくれてありがとう。",
          "今日は海でした。",
          "まだ二つあります。",
          "先に読みました。"
        ],
        "answer": 0,
        "explanation": "謝罪に対するやわらかい返事です。"
      },
      {
        "id": "N4_V09",
        "type": "conversation",
        "script": [
          {
            "gender": "male",
            "text": "こちら、試食ですが、いかがですか。"
          }
        ],
        "question": "女の人は食べてみたい時、何と言いますか。",
        "options": [
          "じゃあ、一ついただきます。",
          "それは遠いです。",
          "昨日返しました。",
          "九時に終わりません。"
        ],
        "answer": 0,
        "explanation": "試食を受ける自然な表現です。"
      },
      {
        "id": "N4_V10",
        "type": "conversation",
        "script": [
          {
            "gender": "female",
            "text": "パソコンの調子が悪くて、画面が急に暗くなるんです。"
          }
        ],
        "question": "男の人は助言する時、何と言いますか。",
        "options": [
          "一度再起動してみたらどうですか。",
          "今夜は月です。",
          "本棚にあります。",
          "あまり高くないです。"
        ],
        "answer": 0,
        "explanation": "困りごとへの助言として自然です。"
      },
      {
        "id": "N4_V11",
        "type": "conversation",
        "script": [
          {
            "gender": "male",
            "text": "明日の飲み会、人数が増えそうです。"
          }
        ],
        "question": "店に連絡する時、何と言いますか。",
        "options": [
          "予約人数を一人増やしたいんですが。",
          "そのかばんは軽いです。",
          "先週行きました。",
          "南口が近いです。"
        ],
        "answer": 0,
        "explanation": "店への連絡として自然です。"
      },
      {
        "id": "N4_V12",
        "type": "conversation",
        "script": [
          {
            "gender": "female",
            "text": "この書類、今日中に必要でしょうか。"
          }
        ],
        "question": "上司は急ぎではない時、何と言いますか。",
        "options": [
          "明日の午前中でも大丈夫ですよ。",
          "そこは狭いですね。",
          "二回読んでください。",
          "いえ、雨でした。"
        ],
        "answer": 0,
        "explanation": "期限をゆるめる自然な表現です。"
      },
      {
        "id": "N4_V13",
        "type": "conversation",
        "script": [
          {
            "gender": "male",
            "text": "あのう、エアコンが少し寒いんですが。"
          }
        ],
        "question": "店員は対応する時、何と言いますか。",
        "options": [
          "失礼しました。少し上げますね。",
          "いいえ、四枚です。",
          "先に行ってください。",
          "駅で待っています。"
        ],
        "answer": 0,
        "explanation": "店員の応答として自然です。"
      },
      {
        "id": "N4_V14",
        "type": "conversation",
        "script": [
          {
            "gender": "female",
            "text": "このアプリの使い方、まだよくわからなくて。"
          }
        ],
        "question": "友だちは教える時、何と言いますか。",
        "options": [
          "最初にログインしてから、このボタンを押すんだよ。",
          "たぶん青です。",
          "今年は暑いです。",
          "三回目でした。"
        ],
        "answer": 0,
        "explanation": "使い方を説明する自然な返答です。"
      },
      {
        "id": "N4_V15",
        "type": "conversation",
        "script": [
          {
            "gender": "male",
            "text": "来週の出張、ホテルの領収書って必要ですか。"
          }
        ],
        "question": "先輩は説明する時、何と言いますか。",
        "options": [
          "うん、あとで精算するから取っておいて。",
          "そこに花があります。",
          "明日借ります。",
          "五本買いました。"
        ],
        "answer": 0,
        "explanation": "経費精算の説明として自然です。"
      },
      {
        "id": "N4_V16",
        "type": "conversation",
        "script": [
          {
            "gender": "female",
            "text": "昨日、提出のメールを送ったんですが、届いていますか。"
          }
        ],
        "question": "先生はまだ見ていない時、何と言いますか。",
        "options": [
          "今は確認できないので、あとで見ておきます。",
          "電車が好きです。",
          "外は静かでした。",
          "一時間寝ました。"
        ],
        "answer": 0,
        "explanation": "メール確認の自然な返答です。"
      },
      {
        "id": "N4_V17",
        "type": "conversation",
        "script": [
          {
            "gender": "male",
            "text": "すみません、こちらの席、コンセントは使えますか。"
          }
        ],
        "question": "店員は案内する時、何と言いますか。",
        "options": [
          "壁側の席ならご利用いただけます。",
          "はい、二十日です。",
          "さっき読みました。",
          "左は白いです。"
        ],
        "answer": 0,
        "explanation": "案内として自然です。"
      },
      {
        "id": "N4_V18",
        "type": "conversation",
        "script": [
          {
            "gender": "female",
            "text": "その件、まだ決まっていないんです。"
          }
        ],
        "question": "男の人は少し待つと言う時、何と言いますか。",
        "options": [
          "わかりました。では、返事を待っています。",
          "そこで泳ぎます。",
          "今日は五人です。",
          "それは甘すぎます。"
        ],
        "answer": 0,
        "explanation": "未決定への返事として自然です。"
      },
      {
        "id": "N4_V19",
        "type": "conversation",
        "script": [
          {
            "gender": "male",
            "text": "体調が悪そうですね。早退したほうがいいですよ。"
          }
        ],
        "question": "女の人は感謝して帰る時、何と言いますか。",
        "options": [
          "ありがとうございます。お先に失礼します。",
          "それでは三冊です。",
          "来週は赤です。",
          "このへんは便利です。"
        ],
        "answer": 0,
        "explanation": "早退の時の自然なあいさつです。"
      },
      {
        "id": "N4_V20",
        "type": "conversation",
        "script": [
          {
            "gender": "female",
            "text": "コピー用紙がなくなりそうです。"
          }
        ],
        "question": "男の人は頼む時、何と言いますか。",
        "options": [
          "じゃあ、倉庫から一箱持ってきてもらえますか。",
          "今夜は涼しいです。",
          "ここで食べました。",
          "昨日は金曜です。"
        ],
        "answer": 0,
        "explanation": "依頼として自然な言い方です。"
      },
      {
        "id": "N4_V21",
        "type": "conversation",
        "script": [
          {
            "gender": "male",
            "text": "すみません、道に迷ってしまって。市民会館はこの近くですか。"
          }
        ],
        "question": "女の人は説明する時、何と言いますか。",
        "options": [
          "この先の信号を右に曲がると見えますよ。",
          "そこは苦いです。",
          "会議は終わりました。",
          "白い猫がいます。"
        ],
        "answer": 0,
        "explanation": "道案内として自然です。"
      },
      {
        "id": "N4_V22",
        "type": "conversation",
        "script": [
          {
            "gender": "female",
            "text": "このコース料理、量が多いですか。"
          }
        ],
        "question": "店員は説明する時、何と言いますか。",
        "options": [
          "女性のお客様なら少し多めかもしれません。",
          "毎日六時です。",
          "それは軽いです。",
          "今度借ります。"
        ],
        "answer": 0,
        "explanation": "量についての説明として自然です。"
      },
      {
        "id": "N4_V23",
        "type": "conversation",
        "script": [
          {
            "gender": "male",
            "text": "今日中に返事が必要ですか。"
          }
        ],
        "question": "女の人は少し余裕がある時、何と言いますか。",
        "options": [
          "できれば明日の朝までにお願いします。",
          "ここは深いです。",
          "前に座ります。",
          "今月は二冊です。"
        ],
        "answer": 0,
        "explanation": "期限をやわらかく伝える自然な表現です。"
      },
      {
        "id": "N4_V24",
        "type": "conversation",
        "script": [
          {
            "gender": "female",
            "text": "私、まだ一度も着物を着たことがないんです。"
          }
        ],
        "question": "友だちは提案する時、何と言いますか。",
        "options": [
          "じゃあ、今度レンタルしてみようよ。",
          "でもあそこは左です。",
          "新聞は三部です。",
          "きのうは忙しそう。"
        ],
        "answer": 0,
        "explanation": "自然な提案です。"
      },
      {
        "id": "N4_V25",
        "type": "conversation",
        "script": [
          {
            "gender": "male",
            "text": "この件、部長にも共有しておいたほうがいいでしょうか。"
          }
        ],
        "question": "女の人は賛成する時、何と言いますか。",
        "options": [
          "はい、そのほうが安心だと思います。",
          "でも赤じゃないです。",
          "六時に寝ます。",
          "駅なら近いです。"
        ],
        "answer": 0,
        "explanation": "共有に賛成する自然な言い方です。"
      }
    ],
    "cepat": [
      {
        "id": "N4_C01",
        "type": "conversation",
        "script": [
          {
            "gender": "female",
            "text": "領収書、分けておきましょうか。"
          }
        ],
        "question": "このとき、いちばん自然な返事はどれですか。",
        "options": [
          "お願いします。",
          "昨日の午後です。",
          "三本読みました。",
          "北口にあります。"
        ],
        "answer": 0,
        "explanation": "申し出を受ける自然な返事は「お願いします。」です。"
      },
      {
        "id": "N4_C02",
        "type": "conversation",
        "script": [
          {
            "gender": "female",
            "text": "この席、日が当たりますけど大丈夫ですか。"
          }
        ],
        "question": "このとき、いちばん自然な返事はどれですか。",
        "options": [
          "はい、問題ありません。",
          "まだ食べません。",
          "二階の右です。",
          "それは丸いです。"
        ],
        "answer": 0,
        "explanation": "確認への自然な返答です。"
      },
      {
        "id": "N4_C03",
        "type": "conversation",
        "script": [
          {
            "gender": "female",
            "text": "会議、五分後に始めます。"
          }
        ],
        "question": "このとき、いちばん自然な返事はどれですか。",
        "options": [
          "わかりました。",
          "今朝は雨でした。",
          "あと三冊です。",
          "家で作ります。"
        ],
        "answer": 0,
        "explanation": "開始の案内への自然な返事です。"
      },
      {
        "id": "N4_C04",
        "type": "conversation",
        "script": [
          {
            "gender": "female",
            "text": "こちら、温めますか。"
          }
        ],
        "question": "このとき、いちばん自然な返事はどれですか。",
        "options": [
          "はい、お願いします。",
          "もう行きました。",
          "赤いほうです。",
          "先月でした。"
        ],
        "answer": 0,
        "explanation": "レジでの自然な返答です。"
      },
      {
        "id": "N4_C05",
        "type": "conversation",
        "script": [
          {
            "gender": "female",
            "text": "明日のシフト、九時からで大丈夫？"
          }
        ],
        "question": "このとき、いちばん自然な返事はどれですか。",
        "options": [
          "はい、大丈夫です。",
          "左に曲がります。",
          "昨日は寒いです。",
          "二回目でした。"
        ],
        "answer": 0,
        "explanation": "勤務時間の確認への返答です。"
      },
      {
        "id": "N4_C06",
        "type": "conversation",
        "script": [
          {
            "gender": "female",
            "text": "メール、転送しておきましょうか。"
          }
        ],
        "question": "このとき、いちばん自然な返事はどれですか。",
        "options": [
          "助かります。お願いします。",
          "今年は多いです。",
          "ここで読みません。",
          "五百円ぐらいです。"
        ],
        "answer": 0,
        "explanation": "申し出に対する自然な返答です。"
      },
      {
        "id": "N4_C07",
        "type": "conversation",
        "script": [
          {
            "gender": "female",
            "text": "少し声が小さいようです。"
          }
        ],
        "question": "このとき、いちばん自然な返事はどれですか。",
        "options": [
          "失礼しました。もう少し大きな声で話します。",
          "来週の火曜です。",
          "そこは甘いです。",
          "駅で降りました。"
        ],
        "answer": 0,
        "explanation": "指摘に対応する自然な返答です。"
      },
      {
        "id": "N4_C08",
        "type": "conversation",
        "script": [
          {
            "gender": "female",
            "text": "窓側の席が空きました。移りますか。"
          }
        ],
        "question": "このとき、いちばん自然な返事はどれですか。",
        "options": [
          "はい、お願いします。",
          "もう終わりました。",
          "七枚あります。",
          "前の店です。"
        ],
        "answer": 0,
        "explanation": "移動の提案を受ける自然な返答です。"
      },
      {
        "id": "N4_C09",
        "type": "conversation",
        "script": [
          {
            "gender": "female",
            "text": "これ、今日中にコピーできますか。"
          }
        ],
        "question": "このとき、いちばん自然な返事はどれですか。",
        "options": [
          "はい、三時ごろまでにできます。",
          "日曜は休みです。",
          "いちご味でした。",
          "八人で行きます。"
        ],
        "answer": 0,
        "explanation": "作業可能かどうかに答える自然な返事です。"
      },
      {
        "id": "N4_C10",
        "type": "conversation",
        "script": [
          {
            "gender": "female",
            "text": "次の方、どうぞ。"
          }
        ],
        "question": "このとき、いちばん自然な返事はどれですか。",
        "options": [
          "失礼します。",
          "九ページです。",
          "まだ赤いです。",
          "そうじしました。"
        ],
        "answer": 0,
        "explanation": "窓口で呼ばれた時の自然な反応です。"
      },
      {
        "id": "N4_C11",
        "type": "conversation",
        "script": [
          {
            "gender": "female",
            "text": "まだ少し時間がかかりそうです。"
          }
        ],
        "question": "このとき、いちばん自然な返事はどれですか。",
        "options": [
          "わかりました。ここで待ちます。",
          "そこは新しいです。",
          "今夜読みます。",
          "三階に住みます。"
        ],
        "answer": 0,
        "explanation": "待つことへの自然な返事です。"
      },
      {
        "id": "N4_C12",
        "type": "conversation",
        "script": [
          {
            "gender": "female",
            "text": "この料理、香草が入っていますが大丈夫ですか。"
          }
        ],
        "question": "このとき、いちばん自然な返事はどれですか。",
        "options": [
          "はい、問題ありません。",
          "毎朝七時です。",
          "もう借りました。",
          "この先は橋です。"
        ],
        "answer": 0,
        "explanation": "食材確認への返答です。"
      },
      {
        "id": "N4_C13",
        "type": "conversation",
        "script": [
          {
            "gender": "female",
            "text": "会場まで送迎バスが出ます。利用しますか。"
          }
        ],
        "question": "このとき、いちばん自然な返事はどれですか。",
        "options": [
          "はい、利用します。",
          "まだ白いです。",
          "去年でした。",
          "二本持っています。"
        ],
        "answer": 0,
        "explanation": "利用するかの問いへの自然な返事です。"
      },
      {
        "id": "N4_C14",
        "type": "conversation",
        "script": [
          {
            "gender": "female",
            "text": "申し込みの締切は金曜日です。"
          }
        ],
        "question": "このとき、いちばん自然な返事はどれですか。",
        "options": [
          "承知しました。",
          "その本は高いです。",
          "前に食べました。",
          "南は静かです。"
        ],
        "answer": 0,
        "explanation": "締切の案内への自然な返答です。"
      },
      {
        "id": "N4_C15",
        "type": "conversation",
        "script": [
          {
            "gender": "female",
            "text": "この書類、先にスキャンしておいてください。"
          }
        ],
        "question": "このとき、いちばん自然な返事はどれですか。",
        "options": [
          "はい、先にやっておきます。",
          "明日は九月です。",
          "外は深いです。",
          "まだ買いません。"
        ],
        "answer": 0,
        "explanation": "指示を受けた自然な返事です。"
      },
      {
        "id": "N4_C16",
        "type": "conversation",
        "script": [
          {
            "gender": "female",
            "text": "お飲み物はあとでお持ちしてもよろしいですか。"
          }
        ],
        "question": "このとき、いちばん自然な返事はどれですか。",
        "options": [
          "はい、かまいません。",
          "今は細いです。",
          "一度読みました。",
          "右手にあります。"
        ],
        "answer": 0,
        "explanation": "許可を与える自然な返事です。"
      },
      {
        "id": "N4_C17",
        "type": "conversation",
        "script": [
          {
            "gender": "female",
            "text": "その件、もう一度説明していただけますか。"
          }
        ],
        "question": "このとき、いちばん自然な返事はどれですか。",
        "options": [
          "はい、最初からご説明します。",
          "でも白ではないです。",
          "来年歩きます。",
          "九時に会います。"
        ],
        "answer": 0,
        "explanation": "説明のやり直しに応じる返答です。"
      },
      {
        "id": "N4_C18",
        "type": "conversation",
        "script": [
          {
            "gender": "female",
            "text": "予定が変わったら、すぐ知らせてくださいね。"
          }
        ],
        "question": "このとき、いちばん自然な返事はどれですか。",
        "options": [
          "はい、わかりました。",
          "もう終わっています。",
          "それは黒です。",
          "二枚だけです。"
        ],
        "answer": 0,
        "explanation": "依頼への自然な返事です。"
      },
      {
        "id": "N4_C19",
        "type": "conversation",
        "script": [
          {
            "gender": "female",
            "text": "この席、予約されています。"
          }
        ],
        "question": "このとき、いちばん自然な返事はどれですか。",
        "options": [
          "失礼しました。別の席に移ります。",
          "今月は暑いです。",
          "そこが入口です。",
          "明日泳ぎます。"
        ],
        "answer": 0,
        "explanation": "席の指摘への適切な返答です。"
      },
      {
        "id": "N4_C20",
        "type": "conversation",
        "script": [
          {
            "gender": "female",
            "text": "荷物はロビーに置かないでください。"
          }
        ],
        "question": "このとき、いちばん自然な返事はどれですか。",
        "options": [
          "すみません、すぐ持って行きます。",
          "今日は二人です。",
          "右の店でした。",
          "上が広いです。"
        ],
        "answer": 0,
        "explanation": "注意への自然な返答です。"
      },
      {
        "id": "N4_C21",
        "type": "conversation",
        "script": [
          {
            "gender": "female",
            "text": "コピー機の使い方、ご存じですか。"
          }
        ],
        "question": "このとき、いちばん自然な返事はどれですか。",
        "options": [
          "いえ、まだよくわかりません。",
          "それは辛いです。",
          "六時に寝ました。",
          "川の近くです。"
        ],
        "answer": 0,
        "explanation": "知らない時の自然な返答です。"
      },
      {
        "id": "N4_C22",
        "type": "conversation",
        "script": [
          {
            "gender": "female",
            "text": "予約番号を確認しますので、少々お待ちください。"
          }
        ],
        "question": "このとき、いちばん自然な返事はどれですか。",
        "options": [
          "はい、お願いします。",
          "三回目でした。",
          "そこで食べます。",
          "曇りの色です。"
        ],
        "answer": 0,
        "explanation": "確認を待つ自然な返答です。"
      },
      {
        "id": "N4_C23",
        "type": "conversation",
        "script": [
          {
            "gender": "female",
            "text": "こちら、試着室はあちらです。"
          }
        ],
        "question": "このとき、いちばん自然な返事はどれですか。",
        "options": [
          "ありがとうございます。",
          "来週は木曜です。",
          "先に借ります。",
          "八個あります。"
        ],
        "answer": 0,
        "explanation": "案内への自然な返事です。"
      },
      {
        "id": "N4_C24",
        "type": "conversation",
        "script": [
          {
            "gender": "female",
            "text": "お急ぎでしたら、先にこちらへどうぞ。"
          }
        ],
        "question": "このとき、いちばん自然な返事はどれですか。",
        "options": [
          "ありがとうございます。",
          "でも赤でした。",
          "昨日歩きました。",
          "北側です。"
        ],
        "answer": 0,
        "explanation": "順番を譲られた時の自然な返答です。"
      },
      {
        "id": "N4_C25",
        "type": "conversation",
        "script": [
          {
            "gender": "female",
            "text": "空調を少し弱くしました。"
          }
        ],
        "question": "このとき、いちばん自然な返事はどれですか。",
        "options": [
          "助かります。ありがとうございます。",
          "今は五冊です。",
          "あとで見ます。",
          "外は白いです。"
        ],
        "answer": 0,
        "explanation": "対応してもらった時の自然な返しです。"
      }
    ]
  },
  "N3": {
    "tugas": [
      {
        "id": "N3_T01",
        "type": "conversation",
        "script": [
          {
            "gender": "female",
            "text": "来週の商店街イベントの件ですが、何から手をつければいいでしょうか。"
          },
          {
            "gender": "male",
            "text": "まず出店者の一覧を確認して、電源が必要な店だけ別の表にまとめてください。そのあとで配置図を直します。"
          }
        ],
        "question": "女の人は最初に何をしますか。",
        "options": [
          "配置図を直す",
          "出店者の一覧を確認する",
          "電源の工事を頼む",
          "全員にメールを送る"
        ],
        "answer": 1,
        "explanation": "最初にするのは出店者の一覧の確認です。"
      },
      {
        "id": "N3_T02",
        "type": "conversation",
        "script": [
          {
            "gender": "male",
            "text": "このアンケート結果、今日中に社内へ共有したいんですが。"
          },
          {
            "gender": "female",
            "text": "では、数値の集計だけ先に終わらせてください。コメント部分は私があとで要約します。"
          }
        ],
        "question": "男の人が先にやるのは何ですか。",
        "options": [
          "コメントの要約",
          "数値の集計",
          "会議室の予約",
          "外部への送信"
        ],
        "answer": 1,
        "explanation": "先に終わらせるのは数値の集計です。"
      },
      {
        "id": "N3_T03",
        "type": "conversation",
        "script": [
          {
            "gender": "female",
            "text": "新入生向けの案内資料、まだ完成していません。"
          },
          {
            "gender": "male",
            "text": "写真はあとで差し込めばいいので、まず日程と教室だけ確定させてください。"
          }
        ],
        "question": "女の人はまず何を確定させますか。",
        "options": [
          "写真の種類",
          "日程と教室",
          "参加者の感想",
          "印刷部数"
        ],
        "answer": 1,
        "explanation": "まず確定させるのは日程と教室です。"
      },
      {
        "id": "N3_T04",
        "type": "conversation",
        "script": [
          {
            "gender": "male",
            "text": "動画の字幕修正、どこから始めればいいですか。"
          },
          {
            "gender": "female",
            "text": "冒頭の自己紹介の部分だけ今日直してください。後半の質疑応答は明日でかまいません。"
          }
        ],
        "question": "男の人は今日どこを直しますか。",
        "options": [
          "全部",
          "後半の質疑応答",
          "冒頭の自己紹介",
          "BGM"
        ],
        "answer": 2,
        "explanation": "今日直すのは冒頭の自己紹介の部分です。"
      },
      {
        "id": "N3_T05",
        "type": "conversation",
        "script": [
          {
            "gender": "female",
            "text": "会場設営なんですが、机を全部並べればいいですか。"
          },
          {
            "gender": "male",
            "text": "いえ、先に後ろの二列だけ下げて通路を広くしてください。前の机はそのままで大丈夫です。"
          }
        ],
        "question": "女の人はまず何をしますか。",
        "options": [
          "前の机を片づける",
          "全部の机を並べる",
          "後ろの二列を下げる",
          "椅子を外へ出す"
        ],
        "answer": 2,
        "explanation": "まず後ろの二列だけ下げて通路を広くします。"
      },
      {
        "id": "N3_T06",
        "type": "conversation",
        "script": [
          {
            "gender": "male",
            "text": "区役所でマイナンバーカードを受け取るには、何が要りますか。"
          },
          {
            "gender": "female",
            "text": "本人確認書類と、届いたはがきを持ってきてください。暗証番号のメモもあると手続きが早いです。"
          }
        ],
        "question": "男の人が持って行く必要があるのは何ですか。",
        "options": [
          "本人確認書類とはがき",
          "写真と印鑑",
          "住民票だけ",
          "現金だけ"
        ],
        "answer": 0,
        "explanation": "必要なのは本人確認書類とはがきです。"
      },
      {
        "id": "N3_T07",
        "type": "conversation",
        "script": [
          {
            "gender": "female",
            "text": "オンライン面接の接続テスト、何分前に入ればいいですか。"
          },
          {
            "gender": "male",
            "text": "本番の十分前には入って、音声だけ先に確認しておいてください。映像はそのあとでいいです。"
          }
        ],
        "question": "女の人は先に何を確認しますか。",
        "options": [
          "映像",
          "背景",
          "音声",
          "資料"
        ],
        "answer": 2,
        "explanation": "先に確認するのは音声です。"
      },
      {
        "id": "N3_T08",
        "type": "conversation",
        "script": [
          {
            "gender": "male",
            "text": "週末の山歩き、持ち物は何に気をつければいいですか。"
          },
          {
            "gender": "female",
            "text": "山頂は寒いので、上着を必ず持って行ってください。飲み物は現地でも買えます。"
          }
        ],
        "question": "男の人が必ず持って行くものは何ですか。",
        "options": [
          "飲み物",
          "上着",
          "地図",
          "おやつ"
        ],
        "answer": 1,
        "explanation": "必ず持って行くのは上着です。"
      },
      {
        "id": "N3_T09",
        "type": "conversation",
        "script": [
          {
            "gender": "female",
            "text": "来月の展示、受付の流れをもう一度確認したいです。"
          },
          {
            "gender": "male",
            "text": "来場者には先に名札を渡して、そのあとアンケート用紙を配ってください。"
          }
        ],
        "question": "受付では最初に何を渡しますか。",
        "options": [
          "アンケート用紙",
          "名札",
          "入場券",
          "地図"
        ],
        "answer": 1,
        "explanation": "先に渡すのは名札です。"
      },
      {
        "id": "N3_T10",
        "type": "conversation",
        "script": [
          {
            "gender": "male",
            "text": "引っ越しの日、ガスの立ち会いって必要ですか。"
          },
          {
            "gender": "female",
            "text": "開栓するときは必要です。閉めるだけなら電話連絡で大丈夫ですよ。"
          }
        ],
        "question": "立ち会いが必要なのはどんなときですか。",
        "options": [
          "ガスを止めるとき",
          "ガスを開けるとき",
          "住所変更のとき",
          "料金を払うとき"
        ],
        "answer": 1,
        "explanation": "ガスを開けるときに立ち会いが必要です。"
      },
      {
        "id": "N3_T11",
        "type": "conversation",
        "script": [
          {
            "gender": "female",
            "text": "明日のフィールドワーク、雨ならどうなりますか。"
          },
          {
            "gender": "male",
            "text": "中止にはしませんが、駅前集合ではなく、資料館に直接来てください。"
          }
        ],
        "question": "雨の場合、学生はどうしますか。",
        "options": [
          "中止になるので行かない",
          "駅前に集まる",
          "資料館に直接行く",
          "時間を一時間遅らせる"
        ],
        "answer": 2,
        "explanation": "雨の場合は資料館に直接行きます。"
      },
      {
        "id": "N3_T12",
        "type": "conversation",
        "script": [
          {
            "gender": "male",
            "text": "発表会の受付、混みそうですね。"
          },
          {
            "gender": "female",
            "text": "開場前に列ができたら、招待客を先に中へ案内してください。一般の方はそのあとです。"
          }
        ],
        "question": "受付ではだれを先に案内しますか。",
        "options": [
          "一般の人",
          "学生",
          "招待客",
          "スタッフ"
        ],
        "answer": 2,
        "explanation": "先に案内するのは招待客です。"
      },
      {
        "id": "N3_T13",
        "type": "conversation",
        "script": [
          {
            "gender": "female",
            "text": "取材に来る記者の方、駅から迷わないでしょうか。"
          },
          {
            "gender": "male",
            "text": "入口がわかりにくいので、駅に着いたら私に電話してもらうよう伝えてください。"
          }
        ],
        "question": "記者の人は駅に着いたらどうしますか。",
        "options": [
          "地図を見る",
          "男の人に電話する",
          "そのまま会場へ向かう",
          "受付へメールする"
        ],
        "answer": 1,
        "explanation": "駅に着いたら男の人に電話します。"
      },
      {
        "id": "N3_T14",
        "type": "conversation",
        "script": [
          {
            "gender": "male",
            "text": "明日の撮影ですが、機材は全部持って行くんですか。"
          },
          {
            "gender": "female",
            "text": "大きい照明はいりません。カメラと三脚、それに予備の電池だけで足ります。"
          }
        ],
        "question": "持って行かないものは何ですか。",
        "options": [
          "カメラ",
          "三脚",
          "予備の電池",
          "大きい照明"
        ],
        "answer": 3,
        "explanation": "持って行かないのは大きい照明です。"
      },
      {
        "id": "N3_T15",
        "type": "conversation",
        "script": [
          {
            "gender": "female",
            "text": "新しいアプリの説明会、参加者には何を配りますか。"
          },
          {
            "gender": "male",
            "text": "資料は紙では配りません。入口でQRコードのカードだけ渡してください。"
          }
        ],
        "question": "参加者に渡すのは何ですか。",
        "options": [
          "紙の資料",
          "名刺",
          "QRコードのカード",
          "アンケート"
        ],
        "answer": 2,
        "explanation": "入口で渡すのはQRコードのカードです。"
      },
      {
        "id": "N3_T16",
        "type": "announcement",
        "script": [
          {
            "gender": "female",
            "text": "町内会からのお知らせです。来週の防災訓練に参加する方は、前日までに配布した用紙をポストに入れてください。当日は上履きをご持参ください。"
          }
        ],
        "question": "参加する人は前日までに何をしますか。",
        "options": [
          "上履きを買う",
          "用紙をポストに入れる",
          "会場へ電話する",
          "家族の名前を書く"
        ],
        "answer": 1,
        "explanation": "前日までにするのは配布した用紙をポストに入れることです。"
      },
      {
        "id": "N3_T17",
        "type": "announcement",
        "script": [
          {
            "gender": "female",
            "text": "図書館からのお知らせです。新しい自習室を利用するには、受付で学生証を登録する必要があります。一度登録すれば、次回からはそのまま入れます。"
          }
        ],
        "question": "最初に利用するとき何が必要ですか。",
        "options": [
          "学生証の登録",
          "料金の支払い",
          "先生の許可",
          "予約メール"
        ],
        "answer": 0,
        "explanation": "最初の利用時には学生証の登録が必要です。"
      },
      {
        "id": "N3_T18",
        "type": "announcement",
        "script": [
          {
            "gender": "female",
            "text": "本日のバスツアーにご参加の皆さまへ。帰りの集合時刻は変更になり、午後四時半ではなく五時になりました。集合場所は変わらず北口です。"
          }
        ],
        "question": "帰りの集合時刻は何時ですか。",
        "options": [
          "午後四時",
          "午後四時半",
          "午後五時",
          "午後五時半"
        ],
        "answer": 2,
        "explanation": "変更後の集合時刻は午後五時です。"
      },
      {
        "id": "N3_T19",
        "type": "announcement",
        "script": [
          {
            "gender": "female",
            "text": "市民ホールをご利用の方へ。大ホールの入口は工事中のため使えません。横の階段を上がって二階の入口からお入りください。"
          }
        ],
        "question": "利用者はどこから入りますか。",
        "options": [
          "大ホール正面入口",
          "一階の横の扉",
          "二階の入口",
          "地下の駐車場"
        ],
        "answer": 2,
        "explanation": "二階の入口から入ります。"
      },
      {
        "id": "N3_T20",
        "type": "announcement",
        "script": [
          {
            "gender": "female",
            "text": "大学祭に出店する団体へ連絡します。電気を使う場合は、当日ではなく今週中に申請書を学生課へ出してください。"
          }
        ],
        "question": "電気を使う団体はどうしなければなりませんか。",
        "options": [
          "当日に学生課へ行く",
          "今週中に申請書を出す",
          "会場で口頭で伝える",
          "特に何もしない"
        ],
        "answer": 1,
        "explanation": "今週中に申請書を学生課へ出す必要があります。"
      }
    ],
    "poin": [
      {
        "id": "N3_P01",
        "type": "announcement",
        "script": [
          {
            "gender": "female",
            "text": "市役所前の広場では、今月いっぱい地元野菜の朝市を開いています。特に土曜日は農家の方が直接販売するため、品数が多いそうです。"
          }
        ],
        "question": "朝市で品数が多いのはいつですか。",
        "options": [
          "平日",
          "金曜日",
          "土曜日",
          "日曜日"
        ],
        "answer": 2,
        "explanation": "土曜日は農家の方が直接販売するため、品数が多いです。"
      },
      {
        "id": "N3_P02",
        "type": "announcement",
        "script": [
          {
            "gender": "female",
            "text": "本日のコンサートは午後六時開演ですが、会場内のカフェは五時で閉まります。飲み物を買いたい方はご注意ください。"
          }
        ],
        "question": "カフェは何時に閉まりますか。",
        "options": [
          "四時",
          "五時",
          "六時",
          "六時半"
        ],
        "answer": 1,
        "explanation": "会場内のカフェは五時で閉まります。"
      },
      {
        "id": "N3_P03",
        "type": "announcement",
        "script": [
          {
            "gender": "female",
            "text": "この地域では来月から資源ごみの出し方が変わります。びんと缶は同じ日ですが、ペットボトルは別の日になります。"
          }
        ],
        "question": "来月から別の日になるのは何ですか。",
        "options": [
          "びん",
          "缶",
          "ペットボトル",
          "新聞"
        ],
        "answer": 2,
        "explanation": "ペットボトルだけ別の日になります。"
      },
      {
        "id": "N3_P04",
        "type": "announcement",
        "script": [
          {
            "gender": "female",
            "text": "空港からお知らせします。国内線の保安検査場が一か所工事中のため、通常より混雑しています。出発の三十分前ではなく、一時間前にはお越しください。"
          }
        ],
        "question": "空港にはいつごろ来るように言っていますか。",
        "options": [
          "三十分前",
          "四十分前",
          "一時間前",
          "二時間前"
        ],
        "answer": 2,
        "explanation": "通常より混むので一時間前に来るよう案内しています。"
      },
      {
        "id": "N3_P05",
        "type": "conversation",
        "script": [
          {
            "gender": "female",
            "text": "来月の研修、東京会場はいっぱいだそうです。"
          },
          {
            "gender": "male",
            "text": "じゃあ、横浜会場にしようかな。家からもそのほうが近いし。"
          }
        ],
        "question": "男の人はどこに行きそうですか。",
        "options": [
          "東京会場",
          "横浜会場",
          "大阪会場",
          "まだ決めていない"
        ],
        "answer": 1,
        "explanation": "東京会場はいっぱいなので横浜会場にしそうです。"
      },
      {
        "id": "N3_P06",
        "type": "conversation",
        "script": [
          {
            "gender": "male",
            "text": "このレストラン、昼は行列だけど、夜は意外と空いているんだね。"
          },
          {
            "gender": "female",
            "text": "うん。しかも平日はコースが少し安くなるらしいよ。"
          }
        ],
        "question": "平日の夜はどうですか。",
        "options": [
          "行列ができる",
          "コースが少し安い",
          "休み",
          "昼より高い"
        ],
        "answer": 1,
        "explanation": "平日はコースが少し安くなると言っています。"
      },
      {
        "id": "N3_P07",
        "type": "conversation",
        "script": [
          {
            "gender": "female",
            "text": "来週の取材、先方は午後二時以降なら大丈夫だそうです。"
          },
          {
            "gender": "male",
            "text": "じゃあ、移動時間を考えると三時ごろがよさそうだね。"
          }
        ],
        "question": "二人は何時ごろがいいと考えていますか。",
        "options": [
          "一時",
          "二時",
          "三時ごろ",
          "四時半"
        ],
        "answer": 2,
        "explanation": "移動時間を考えて三時ごろがよさそうだと言っています。"
      },
      {
        "id": "N3_P08",
        "type": "conversation",
        "script": [
          {
            "gender": "male",
            "text": "この前申し込んだ講座、抽選結果ってもう出た？"
          },
          {
            "gender": "female",
            "text": "うん。メールはまだだけど、サイトに当選者番号が出てたよ。"
          }
        ],
        "question": "結果はどこで確認できますか。",
        "options": [
          "電話",
          "メール",
          "サイト",
          "会場の掲示板"
        ],
        "answer": 2,
        "explanation": "サイトに当選者番号が出ています。"
      },
      {
        "id": "N3_P09",
        "type": "conversation",
        "script": [
          {
            "gender": "female",
            "text": "冷凍庫のケーキ、食べてもいい？"
          },
          {
            "gender": "male",
            "text": "いいよ。ただ、丸い箱のほうは明日使うから、四角い箱のだけにして。"
          }
        ],
        "question": "食べてもいいのはどれですか。",
        "options": [
          "丸い箱のケーキ",
          "四角い箱のケーキ",
          "全部",
          "どちらもだめ"
        ],
        "answer": 1,
        "explanation": "食べてもいいのは四角い箱のケーキです。"
      },
      {
        "id": "N3_P10",
        "type": "conversation",
        "script": [
          {
            "gender": "male",
            "text": "このマンション、駅からは少し遠いけど、バス停はすぐ目の前なんだ。"
          },
          {
            "gender": "female",
            "text": "それなら雨の日は便利そうだね。"
          }
        ],
        "question": "このマンションの便利な点は何ですか。",
        "options": [
          "駅が近い",
          "バス停が近い",
          "家賃が安い",
          "新しい"
        ],
        "answer": 1,
        "explanation": "バス停が目の前にある点が便利です。"
      },
      {
        "id": "N3_P11",
        "type": "conversation",
        "script": [
          {
            "gender": "female",
            "text": "ゼミ合宿の宿、海の近くにしたんだって？"
          },
          {
            "gender": "male",
            "text": "うん。駅から送迎もあるし、夜は会議室も使えるらしい。"
          }
        ],
        "question": "宿のよい点は何ですか。",
        "options": [
          "温泉しかない",
          "駅から送迎がある",
          "学校に近い",
          "朝食がない"
        ],
        "answer": 1,
        "explanation": "駅から送迎があるのがよい点です。"
      },
      {
        "id": "N3_P12",
        "type": "conversation",
        "script": [
          {
            "gender": "male",
            "text": "あのカフェ、今日は持ち帰りだけなんだって。"
          },
          {
            "gender": "female",
            "text": "じゃあ、公園で食べようか。ちょうど天気もいいし。"
          }
        ],
        "question": "二人はどうしますか。",
        "options": [
          "店内で食べる",
          "公園で食べる",
          "家に帰る",
          "注文をやめる"
        ],
        "answer": 1,
        "explanation": "持ち帰りだけなので公園で食べます。"
      },
      {
        "id": "N3_P13",
        "type": "conversation",
        "script": [
          {
            "gender": "female",
            "text": "昨日の説明会、思ったより質問が多かったですね。"
          },
          {
            "gender": "male",
            "text": "うん。特に費用については、みんな気にしていたみたい。"
          }
        ],
        "question": "参加者が特に気にしていたのは何ですか。",
        "options": [
          "会場",
          "費用",
          "日程",
          "講師"
        ],
        "answer": 1,
        "explanation": "費用についての質問が多かったです。"
      },
      {
        "id": "N3_P14",
        "type": "conversation",
        "script": [
          {
            "gender": "male",
            "text": "このアプリ、更新したら前より動きが速くなったね。"
          },
          {
            "gender": "female",
            "text": "でも設定の場所が少し変わって、最初は探しにくかったよ。"
          }
        ],
        "question": "変わったのは何ですか。",
        "options": [
          "値段",
          "設定の場所",
          "色だけ",
          "容量"
        ],
        "answer": 1,
        "explanation": "設定の場所が少し変わりました。"
      },
      {
        "id": "N3_P15",
        "type": "conversation",
        "script": [
          {
            "gender": "female",
            "text": "明日の面接、最寄り駅から会場まで歩いて十分ぐらいらしいよ。"
          },
          {
            "gender": "male",
            "text": "じゃあ、少し早めに着く電車に乗ったほうが安心だね。"
          }
        ],
        "question": "会場まで駅からどのくらいですか。",
        "options": [
          "五分",
          "十分ぐらい",
          "十五分",
          "二十分"
        ],
        "answer": 1,
        "explanation": "駅から会場までは歩いて十分ぐらいです。"
      },
      {
        "id": "N3_P16",
        "type": "conversation",
        "script": [
          {
            "gender": "male",
            "text": "新しい図書館、閲覧席は予約制なんだって。"
          },
          {
            "gender": "female",
            "text": "へえ。でも本を借りるだけなら予約しなくていいらしいよ。"
          }
        ],
        "question": "予約が必要なのは何ですか。",
        "options": [
          "本を借りる時",
          "閲覧席を使う時",
          "返却だけする時",
          "館内見学"
        ],
        "answer": 1,
        "explanation": "予約が必要なのは閲覧席を使う時です。"
      },
      {
        "id": "N3_P17",
        "type": "conversation",
        "script": [
          {
            "gender": "female",
            "text": "会議は三時からだけど、その前に資料を五部だけ追加で印刷しておいて。"
          },
          {
            "gender": "male",
            "text": "わかった。二時半までにやっておくよ。"
          }
        ],
        "question": "男の人は何をしますか。",
        "options": [
          "資料を五部追加で印刷する",
          "会議室を変更する",
          "参加者に電話する",
          "資料を配らない"
        ],
        "answer": 0,
        "explanation": "資料を五部追加で印刷します。"
      },
      {
        "id": "N3_P18",
        "type": "conversation",
        "script": [
          {
            "gender": "male",
            "text": "この前の展示、平日は空いてたけど、最終日はかなり混んだらしいね。"
          },
          {
            "gender": "female",
            "text": "うん。友だちも入るまで三十分待ったって言ってた。"
          }
        ],
        "question": "最終日はどうでしたか。",
        "options": [
          "空いていた",
          "かなり混んでいた",
          "休みだった",
          "無料だった"
        ],
        "answer": 1,
        "explanation": "最終日はかなり混んでいました。"
      },
      {
        "id": "N3_P19",
        "type": "conversation",
        "script": [
          {
            "gender": "female",
            "text": "ここの弁当、予約すれば会議室まで届けてくれるんだって。"
          },
          {
            "gender": "male",
            "text": "それは便利だね。昼休みに取りに行かなくていいし。"
          }
        ],
        "question": "何が便利ですか。",
        "options": [
          "安いこと",
          "会議室まで届けてくれること",
          "量が多いこと",
          "夜も買えること"
        ],
        "answer": 1,
        "explanation": "会議室まで届けてくれることが便利です。"
      },
      {
        "id": "N3_P20",
        "type": "conversation",
        "script": [
          {
            "gender": "male",
            "text": "来週のオンライン説明会、録画も公開する予定らしいよ。"
          },
          {
            "gender": "female",
            "text": "じゃあ、当日参加できない人にも案内しやすいね。"
          }
        ],
        "question": "説明会はどうなりますか。",
        "options": [
          "録画はしない",
          "録画も公開する",
          "会場だけで行う",
          "中止になる"
        ],
        "answer": 1,
        "explanation": "録画も公開する予定です。"
      }
    ],
    "garisBesar": [
      {
        "id": "N3_G01",
        "type": "announcement",
        "script": [
          {
            "gender": "female",
            "text": "市立図書館では来月から、夜の利用者を増やすため、平日に限って閉館時間を一時間延ばします。仕事帰りの方にも来てもらいたいという考えです。"
          }
        ],
        "question": "このお知らせの中心は何ですか。",
        "options": [
          "図書館が土日に休むこと",
          "平日の閉館時間が延びること",
          "新しい本が増えること",
          "仕事帰りの人は利用できないこと"
        ],
        "answer": 1,
        "explanation": "中心は平日の閉館時間を延ばすことです。"
      },
      {
        "id": "N3_G02",
        "type": "announcement",
        "script": [
          {
            "gender": "female",
            "text": "商店街では若い人にも来てもらおうと、今月から週末に小さなライブやワークショップを始めました。買い物だけでなく、長く滞在してもらうのが目的です。"
          }
        ],
        "question": "この話のいちばん大切な点は何ですか。",
        "options": [
          "商店街の店が減ったこと",
          "週末のイベントを始めた目的",
          "ワークショップの作り方",
          "若い人が音楽が好きなこと"
        ],
        "answer": 1,
        "explanation": "週末イベントを始めた目的を説明しています。"
      },
      {
        "id": "N3_G03",
        "type": "announcement",
        "script": [
          {
            "gender": "female",
            "text": "会社からのお知らせです。在宅勤務の日は自由な時間に始めてよいわけではありません。九時までにチャットで業務開始を連絡するようにしてください。"
          }
        ],
        "question": "このお知らせで特に伝えたいことは何ですか。",
        "options": [
          "在宅勤務はなくなること",
          "九時までに開始連絡が必要なこと",
          "自由な時間に働けること",
          "電話で連絡すること"
        ],
        "answer": 1,
        "explanation": "在宅勤務でも九時までに開始連絡が必要です。"
      },
      {
        "id": "N3_G04",
        "type": "conversation",
        "script": [
          {
            "gender": "female",
            "text": "最近、駅前に新しいコワーキングスペースができたの知ってる？"
          },
          {
            "gender": "male",
            "text": "うん。料金は少し高いけど、飲み物が自由で、夜まで使えるらしいね。"
          },
          {
            "gender": "female",
            "text": "家だと集中しにくいし、一度試してみようかな。"
          }
        ],
        "question": "二人はこの場所をどう考えていますか。",
        "options": [
          "高すぎて全く使いたくない",
          "便利そうなので試す価値がありそうだ",
          "家のほうがいいので必要ない",
          "学生しか使えない"
        ],
        "answer": 1,
        "explanation": "少し高いが便利そうなので試す価値があると考えています。"
      },
      {
        "id": "N3_G05",
        "type": "conversation",
        "script": [
          {
            "gender": "male",
            "text": "この地域、去年から外国人向けの案内板が増えたよね。"
          },
          {
            "gender": "female",
            "text": "うん。観光客だけじゃなくて、住んでいる人にも役立つからいいと思う。"
          }
        ],
        "question": "二人は案内板についてどう思っていますか。",
        "options": [
          "役に立たない",
          "住民にも役立つのでよい",
          "観光客だけが使う",
          "もっと減らしたほうがよい"
        ],
        "answer": 1,
        "explanation": "観光客だけでなく住民にも役立つのでよいと考えています。"
      },
      {
        "id": "N3_G06",
        "type": "announcement",
        "script": [
          {
            "gender": "female",
            "text": "大学のキャリアセンターでは、就職活動の相談に来る学生が増えているため、来月から予約枠を増やします。特に夕方の時間帯を多くする予定です。"
          }
        ],
        "question": "この話の要点は何ですか。",
        "options": [
          "相談はできなくなる",
          "予約枠、特に夕方が増える",
          "学生が減っている",
          "来月から閉まる"
        ],
        "answer": 1,
        "explanation": "相談が増えているため、予約枠、特に夕方を増やします。"
      },
      {
        "id": "N3_G07",
        "type": "announcement",
        "script": [
          {
            "gender": "female",
            "text": "このアパートでは、自転車置き場が足りなくなってきたため、使っていない自転車に札を付けて確認します。一定期間連絡がないものは整理の対象になります。"
          }
        ],
        "question": "このお知らせの目的は何ですか。",
        "options": [
          "新しい自転車を売るため",
          "自転車置き場を整理するため",
          "札のデザインを決めるため",
          "住民に自転車を増やしてもらうため"
        ],
        "answer": 1,
        "explanation": "目的は自転車置き場の整理です。"
      },
      {
        "id": "N3_G08",
        "type": "conversation",
        "script": [
          {
            "gender": "female",
            "text": "最近、社内の連絡がチャット中心になって便利になったよね。"
          },
          {
            "gender": "male",
            "text": "うん。でも大事な内容まで流れやすいから、あとで見返せる工夫も必要だと思う。"
          }
        ],
        "question": "男の人が言いたいことは何ですか。",
        "options": [
          "チャットは便利だが工夫も必要だ",
          "チャットは全く便利ではない",
          "メールをやめるべきだ",
          "連絡は口頭だけでよい"
        ],
        "answer": 0,
        "explanation": "便利だが大事な内容が流れやすいので工夫が必要だと言っています。"
      },
      {
        "id": "N3_G09",
        "type": "announcement",
        "script": [
          {
            "gender": "female",
            "text": "町の国際交流イベントでは、今年から料理だけでなく各国の遊びを体験できるコーナーも作ります。子ども連れの家族にも来てもらいたいからです。"
          }
        ],
        "question": "このイベントの新しい工夫は何ですか。",
        "options": [
          "料理をなくすこと",
          "子ども向けの遊び体験を増やすこと",
          "入場料を高くすること",
          "夜だけ開くこと"
        ],
        "answer": 1,
        "explanation": "各国の遊びを体験できるコーナーを作るのが新しい工夫です。"
      },
      {
        "id": "N3_G10",
        "type": "conversation",
        "script": [
          {
            "gender": "male",
            "text": "あの店、前は現金だけだったけど、今は電子決済も使えるようになったんだ。"
          },
          {
            "gender": "female",
            "text": "それなら急いでいる時に助かるね。小銭を出さなくていいし。"
          }
        ],
        "question": "この会話の中心は何ですか。",
        "options": [
          "店が閉まること",
          "支払い方法が便利になったこと",
          "現金が使えなくなったこと",
          "小銭が足りないこと"
        ],
        "answer": 1,
        "explanation": "電子決済も使えるようになり、支払いが便利になった話です。"
      },
      {
        "id": "N3_G11",
        "type": "announcement",
        "script": [
          {
            "gender": "female",
            "text": "地域センターでは、高齢者向けのスマホ講座を続けてきましたが、今後は予約の取り方や防災アプリの使い方など、より実生活に近い内容を増やす予定です。"
          }
        ],
        "question": "今後の講座はどうなりますか。",
        "options": [
          "基本操作だけになる",
          "実生活に近い内容が増える",
          "スマホ以外を教える",
          "講座がなくなる"
        ],
        "answer": 1,
        "explanation": "今後はより実生活に近い内容が増える予定です。"
      },
      {
        "id": "N3_G12",
        "type": "conversation",
        "script": [
          {
            "gender": "female",
            "text": "最近、会社の食堂で地元の食材を使うメニューが増えたよね。"
          },
          {
            "gender": "male",
            "text": "うん。味だけじゃなくて、地元の店とのつながりも意識しているみたいだね。"
          }
        ],
        "question": "二人は会社の食堂について何を話していますか。",
        "options": [
          "値段が高くなったこと",
          "地元とのつながりを意識した変化",
          "量が減ったこと",
          "営業時間が短くなったこと"
        ],
        "answer": 1,
        "explanation": "地元食材を使い、地元とのつながりを意識した変化について話しています。"
      },
      {
        "id": "N3_G13",
        "type": "announcement",
        "script": [
          {
            "gender": "female",
            "text": "この春から始まったシェア自転車の実験は、駅の周辺だけでなく、大学や病院の近くでも利用が多かったため、設置場所を増やすことになりました。"
          }
        ],
        "question": "この話でいちばん言いたいことは何ですか。",
        "options": [
          "実験をやめること",
          "利用が多かったので設置場所を増やすこと",
          "駅の周辺では人気がないこと",
          "大学では使えないこと"
        ],
        "answer": 1,
        "explanation": "利用が多かったため設置場所を増やすことが中心です。"
      },
      {
        "id": "N3_G14",
        "type": "conversation",
        "script": [
          {
            "gender": "male",
            "text": "最近の新人研修、前より実践的になったらしいよ。"
          },
          {
            "gender": "female",
            "text": "座学だけじゃなくて、実際の対応を練習する時間が増えたって聞いた。"
          }
        ],
        "question": "この会話の要点は何ですか。",
        "options": [
          "研修が短くなった",
          "研修が実践的になった",
          "新人が減った",
          "座学が増えた"
        ],
        "answer": 1,
        "explanation": "研修が前より実践的になったという話です。"
      },
      {
        "id": "N3_G15",
        "type": "announcement",
        "script": [
          {
            "gender": "female",
            "text": "駅ビルでは、昼休みの混雑を減らすため、人気の弁当店で事前注文サービスを始めました。アプリで注文しておけば、列に並ばず受け取れます。"
          }
        ],
        "question": "このサービスの目的は何ですか。",
        "options": [
          "弁当を高く売るため",
          "昼休みの混雑を減らすため",
          "アプリを宣伝するため",
          "新しい店を作るため"
        ],
        "answer": 1,
        "explanation": "目的は昼休みの混雑を減らすことです。"
      },
      {
        "id": "N3_G16",
        "type": "conversation",
        "script": [
          {
            "gender": "female",
            "text": "最近、授業の録画がすぐ見られるようになって助かるよ。"
          },
          {
            "gender": "male",
            "text": "うん。復習しやすいし、聞き逃したところも確認できるからね。"
          }
        ],
        "question": "二人は録画についてどう思っていますか。",
        "options": [
          "復習に役立つ",
          "必要ない",
          "音が悪い",
          "見る時間がない"
        ],
        "answer": 0,
        "explanation": "録画は復習に役立つと考えています。"
      },
      {
        "id": "N3_G17",
        "type": "announcement",
        "script": [
          {
            "gender": "female",
            "text": "観光案内所では、外国語のパンフレットを増やすだけでなく、混雑する時間帯には画面で順番を表示する仕組みも取り入れました。待ち時間の不安を減らすためです。"
          }
        ],
        "question": "新しい仕組みを入れた理由は何ですか。",
        "options": [
          "職員を減らすため",
          "待ち時間の不安を減らすため",
          "パンフレットをなくすため",
          "外国語対応をやめるため"
        ],
        "answer": 1,
        "explanation": "待ち時間の不安を減らすために導入しました。"
      },
      {
        "id": "N3_G18",
        "type": "conversation",
        "script": [
          {
            "gender": "male",
            "text": "この町、引っ越してきた人向けの案内がわかりやすくなったよね。"
          },
          {
            "gender": "female",
            "text": "うん。生活の手続きだけじゃなくて、病院やスーパーの情報もまとまっていて便利。"
          }
        ],
        "question": "二人がよいと思っている点は何ですか。",
        "options": [
          "情報が少ないこと",
          "必要な情報がまとまっていて便利なこと",
          "役所が遠いこと",
          "病院がないこと"
        ],
        "answer": 1,
        "explanation": "必要な情報がまとまっていて便利だと話しています。"
      },
      {
        "id": "N3_G19",
        "type": "announcement",
        "script": [
          {
            "gender": "female",
            "text": "来月の学園祭では、去年よりごみの分別をわかりやすくするため、色ごとに回収場所を分け、案内スタッフも増やすことになりました。"
          }
        ],
        "question": "この発表の中心は何ですか。",
        "options": [
          "ごみ箱を減らすこと",
          "分別をわかりやすくする工夫",
          "学園祭を短くすること",
          "色をなくすこと"
        ],
        "answer": 1,
        "explanation": "ごみの分別をわかりやすくする工夫が中心です。"
      },
      {
        "id": "N3_G20",
        "type": "conversation",
        "script": [
          {
            "gender": "female",
            "text": "あの温泉旅館、古い建物だけど評判がいいよね。"
          },
          {
            "gender": "male",
            "text": "うん。設備の新しさより、接客の丁寧さで人気があるみたい。"
          }
        ],
        "question": "二人はその旅館の何を評価していますか。",
        "options": [
          "建物の新しさ",
          "接客の丁寧さ",
          "駅からの近さ",
          "値段の安さ"
        ],
        "answer": 1,
        "explanation": "接客の丁寧さが人気の理由だと話しています。"
      }
    ],
    "verbal": [
      {
        "id": "N3_V01",
        "type": "conversation",
        "script": [
          {
            "gender": "female",
            "text": "取引先との打ち合わせ、開始を十五分遅らせたいんですが。"
          }
        ],
        "question": "男の人は丁寧に伝える時、何と言いますか。",
        "options": [
          "申し訳ありませんが、開始を十五分ほど遅らせていただけますか。",
          "じゃ、あとで。",
          "時間を変えて。",
          "今日はやめます。"
        ],
        "answer": 0,
        "explanation": "ビジネスで丁寧に頼む表現です。"
      },
      {
        "id": "N3_V02",
        "type": "conversation",
        "script": [
          {
            "gender": "male",
            "text": "この資料、表現が少し強すぎる気がします。"
          }
        ],
        "question": "女の人はやわらかく直す提案をする時、何と言いますか。",
        "options": [
          "では、もう少しやわらかい言い方に直してみます。",
          "そうですか、終わりです。",
          "それは駅です。",
          "三回読みました。"
        ],
        "answer": 0,
        "explanation": "提案として自然です。"
      },
      {
        "id": "N3_V03",
        "type": "conversation",
        "script": [
          {
            "gender": "female",
            "text": "来週の発表、まだ十分に準備できていなくて不安です。"
          }
        ],
        "question": "先輩は励ます時、何と言いますか。",
        "options": [
          "一人で全部抱えず、必要なら手伝うよ。",
          "それは青いですね。",
          "昨日は暑かったです。",
          "右へ行きます。"
        ],
        "answer": 0,
        "explanation": "不安な相手を励ます自然な表現です。"
      },
      {
        "id": "N3_V04",
        "type": "conversation",
        "script": [
          {
            "gender": "male",
            "text": "予約内容に間違いがあったようでして。"
          }
        ],
        "question": "店員はまず何と言うのが適切ですか。",
        "options": [
          "ご迷惑をおかけして申し訳ございません。",
          "では、また今度。",
          "外は寒いですね。",
          "それは五枚です。"
        ],
        "answer": 0,
        "explanation": "まず謝罪するのが適切です。"
      },
      {
        "id": "N3_V05",
        "type": "conversation",
        "script": [
          {
            "gender": "female",
            "text": "この企画、予算内でできるか少し心配です。"
          }
        ],
        "question": "男の人は確認を提案する時、何と言いますか。",
        "options": [
          "一度見積もりを取り直してみましょうか。",
          "とても赤いです。",
          "今年は少ないです。",
          "先に食べました。"
        ],
        "answer": 0,
        "explanation": "確認を提案する自然な表現です。"
      },
      {
        "id": "N3_V06",
        "type": "conversation",
        "script": [
          {
            "gender": "male",
            "text": "明日の取材、天気が悪かったら予定を変える必要がありますね。"
          }
        ],
        "question": "女の人は代案を出す時、何と言いますか。",
        "options": [
          "その場合は屋内で撮れる場所に変更しましょう。",
          "昨日は魚でした。",
          "そこは高かったです。",
          "二本あります。"
        ],
        "answer": 0,
        "explanation": "代案として自然です。"
      },
      {
        "id": "N3_V07",
        "type": "conversation",
        "script": [
          {
            "gender": "female",
            "text": "申し込みが予想より多くて、席が足りないかもしれません。"
          }
        ],
        "question": "上司は指示する時、何と言いますか。",
        "options": [
          "では、追加の椅子を早めに手配してください。",
          "今日は静かですね。",
          "来月借ります。",
          "白い方を買います。"
        ],
        "answer": 0,
        "explanation": "指示として自然です。"
      },
      {
        "id": "N3_V08",
        "type": "conversation",
        "script": [
          {
            "gender": "male",
            "text": "この説明だと、初めての人には少しわかりにくいと思います。"
          }
        ],
        "question": "女の人は改善する時、何と言いますか。",
        "options": [
          "例を入れて、流れが見えるようにします。",
          "それは深いです。",
          "夜は読みます。",
          "九月でした。"
        ],
        "answer": 0,
        "explanation": "改善案として自然です。"
      },
      {
        "id": "N3_V09",
        "type": "conversation",
        "script": [
          {
            "gender": "female",
            "text": "会議の議事録、今日中に共有したほうがいいでしょうか。"
          }
        ],
        "question": "男の人は賛成する時、何と言いますか。",
        "options": [
          "はい、記憶が新しいうちに送ったほうがいいですね。",
          "でも南です。",
          "去年でした。",
          "外で待ちます。"
        ],
        "answer": 0,
        "explanation": "賛成の自然な言い方です。"
      },
      {
        "id": "N3_V10",
        "type": "conversation",
        "script": [
          {
            "gender": "male",
            "text": "すみません、こちらの確認が遅くなってしまって。"
          }
        ],
        "question": "女の人は受け止める時、何と言いますか。",
        "options": [
          "承知しました。では、今から対応いたします。",
          "海は広いですね。",
          "三冊借りました。",
          "来週泳ぎます。"
        ],
        "answer": 0,
        "explanation": "丁寧な受け答えとして自然です。"
      },
      {
        "id": "N3_V11",
        "type": "conversation",
        "script": [
          {
            "gender": "female",
            "text": "新人にもわかるように説明してほしいと言われました。"
          }
        ],
        "question": "先輩は助言する時、何と言いますか。",
        "options": [
          "専門用語を減らして、順番に話すといいよ。",
          "それは丸いです。",
          "駅は遠いです。",
          "四時に終わる。"
        ],
        "answer": 0,
        "explanation": "助言として自然です。"
      },
      {
        "id": "N3_V12",
        "type": "conversation",
        "script": [
          {
            "gender": "male",
            "text": "資料の締切、延ばしてもらうのは難しいでしょうか。"
          }
        ],
        "question": "相手に相談する時、何と言いますか。",
        "options": [
          "もし可能でしたら、一日だけ延ばしていただけないでしょうか。",
          "まだ青いです。",
          "この前食べました。",
          "三人来ます。"
        ],
        "answer": 0,
        "explanation": "丁寧な相談表現です。"
      },
      {
        "id": "N3_V13",
        "type": "conversation",
        "script": [
          {
            "gender": "female",
            "text": "参加者から、案内メールが長すぎると言われました。"
          }
        ],
        "question": "男の人は改善案を出す時、何と言いますか。",
        "options": [
          "要点を先に書いて、詳細は下にまとめましょう。",
          "今夜は寒いです。",
          "本を返しました。",
          "左へ曲がります。"
        ],
        "answer": 0,
        "explanation": "改善案として自然です。"
      },
      {
        "id": "N3_V14",
        "type": "conversation",
        "script": [
          {
            "gender": "male",
            "text": "その件、私の説明不足もあったと思います。"
          }
        ],
        "question": "女の人は前向きに返す時、何と言いますか。",
        "options": [
          "では、次回は伝え方も一緒に見直しましょう。",
          "先に寝ました。",
          "白は甘いです。",
          "駅前が二つです。"
        ],
        "answer": 0,
        "explanation": "前向きな返答として自然です。"
      },
      {
        "id": "N3_V15",
        "type": "conversation",
        "script": [
          {
            "gender": "female",
            "text": "来月のイベント、学生ボランティアに何をお願いすればいいでしょうか。"
          }
        ],
        "question": "男の人は提案する時、何と言いますか。",
        "options": [
          "受付と案内を中心にお願いするとよさそうです。",
          "昨日は雨でした。",
          "ここは浅いです。",
          "八個あります。"
        ],
        "answer": 0,
        "explanation": "役割の提案として自然です。"
      },
      {
        "id": "N3_V16",
        "type": "conversation",
        "script": [
          {
            "gender": "male",
            "text": "この表現、少し断定的に聞こえませんか。"
          }
        ],
        "question": "女の人は言い換える時、何と言いますか。",
        "options": [
          "では、『可能性があります』に変えてみます。",
          "駅が白いです。",
          "毎朝六時です。",
          "もう返しました。"
        ],
        "answer": 0,
        "explanation": "断定を弱める言い換えです。"
      },
      {
        "id": "N3_V17",
        "type": "conversation",
        "script": [
          {
            "gender": "female",
            "text": "当日の流れを参加者に口頭だけで説明するのは不安です。"
          }
        ],
        "question": "男の人は補う時、何と言いますか。",
        "options": [
          "簡単な案内カードも作っておきましょう。",
          "でも赤でした。",
          "先週歩きました。",
          "三時の橋です。"
        ],
        "answer": 0,
        "explanation": "不安を補う具体案として自然です。"
      },
      {
        "id": "N3_V18",
        "type": "conversation",
        "script": [
          {
            "gender": "male",
            "text": "先方から返事が来ないので、催促したいんですが。"
          }
        ],
        "question": "女の人はやわらかく伝える文を勧める時、何と言いますか。",
        "options": [
          "確認のためご連絡しました、という形がいいと思います。",
          "外は細いです。",
          "二冊いました。",
          "今日は読むです。"
        ],
        "answer": 0,
        "explanation": "やわらかい催促の表現です。"
      },
      {
        "id": "N3_V19",
        "type": "conversation",
        "script": [
          {
            "gender": "female",
            "text": "急な変更で、参加者が混乱しないか心配です。"
          }
        ],
        "question": "男の人は対策を言う時、何と言いますか。",
        "options": [
          "入口にも同じ案内を出しておけば安心ですね。",
          "昨日は魚です。",
          "その机は右です。",
          "来月は二本。"
        ],
        "answer": 0,
        "explanation": "具体的な対策として自然です。"
      },
      {
        "id": "N3_V20",
        "type": "conversation",
        "script": [
          {
            "gender": "male",
            "text": "この案、完全ではないんですが、たたき台として見てもらえますか。"
          }
        ],
        "question": "女の人は受ける時、何と言いますか。",
        "options": [
          "もちろんです。まず全体の方向を確認しましょう。",
          "でもそれは黒いです。",
          "今は九枚です。",
          "先に泳ぎます。"
        ],
        "answer": 0,
        "explanation": "案を受けて検討する自然な表現です。"
      }
    ],
    "cepat": [
      {
        "id": "N3_C01",
        "type": "conversation",
        "script": [
          {
            "gender": "female",
            "text": "この件、先方には私から連絡しておきます。"
          }
        ],
        "question": "このとき、いちばん自然な返事はどれですか。",
        "options": [
          "助かります。お願いします。",
          "昨日の午後です。",
          "三本読みました。",
          "北口にあります。"
        ],
        "answer": 0,
        "explanation": "申し出を受ける自然な返答です。"
      },
      {
        "id": "N3_C02",
        "type": "conversation",
        "script": [
          {
            "gender": "female",
            "text": "念のため、もう一度日程を確認してもらえますか。"
          }
        ],
        "question": "このとき、いちばん自然な返事はどれですか。",
        "options": [
          "承知しました。確認しておきます。",
          "それは青いです。",
          "来月でした。",
          "川の近くです。"
        ],
        "answer": 0,
        "explanation": "確認依頼への自然な返答です。"
      },
      {
        "id": "N3_C03",
        "type": "conversation",
        "script": [
          {
            "gender": "female",
            "text": "この資料、外部にはまだ出さないでください。"
          }
        ],
        "question": "このとき、いちばん自然な返事はどれですか。",
        "options": [
          "わかりました。社内だけで共有します。",
          "今日は四冊です。",
          "駅前が静かです。",
          "もう食べました。"
        ],
        "answer": 0,
        "explanation": "指示への自然な返答です。"
      },
      {
        "id": "N3_C04",
        "type": "conversation",
        "script": [
          {
            "gender": "female",
            "text": "開始時間が少し後ろにずれそうです。"
          }
        ],
        "question": "このとき、いちばん自然な返事はどれですか。",
        "options": [
          "では、参加者にも伝えておきます。",
          "右が白いです。",
          "来週泳ぎます。",
          "二時は赤です。"
        ],
        "answer": 0,
        "explanation": "変更への対応として自然です。"
      },
      {
        "id": "N3_C05",
        "type": "conversation",
        "script": [
          {
            "gender": "female",
            "text": "もし混んでいたら、別の入口からお入りください。"
          }
        ],
        "question": "このとき、いちばん自然な返事はどれですか。",
        "options": [
          "はい、そのようにします。",
          "三枚あります。",
          "昨日の橋です。",
          "今朝は甘いです。"
        ],
        "answer": 0,
        "explanation": "案内への自然な返答です。"
      },
      {
        "id": "N3_C06",
        "type": "conversation",
        "script": [
          {
            "gender": "female",
            "text": "こちらの都合で恐縮ですが、日程を再調整したいです。"
          }
        ],
        "question": "このとき、いちばん自然な返事はどれですか。",
        "options": [
          "承知しました。候補日を送ります。",
          "青いからです。",
          "昨日は海です。",
          "一冊だけです。"
        ],
        "answer": 0,
        "explanation": "再調整への自然な返答です。"
      },
      {
        "id": "N3_C07",
        "type": "conversation",
        "script": [
          {
            "gender": "female",
            "text": "この部分だけ、表現を少しやわらかくしてください。"
          }
        ],
        "question": "このとき、いちばん自然な返事はどれですか。",
        "options": [
          "はい、言い回しを見直します。",
          "駅は広いです。",
          "七本ありました。",
          "先月借ります。"
        ],
        "answer": 0,
        "explanation": "修正依頼への自然な返答です。"
      },
      {
        "id": "N3_C08",
        "type": "conversation",
        "script": [
          {
            "gender": "female",
            "text": "接続が不安定なので、音声だけで進めます。"
          }
        ],
        "question": "このとき、いちばん自然な返事はどれですか。",
        "options": [
          "わかりました。音声で参加します。",
          "そこは暗いです。",
          "二回読みます。",
          "白は高いです。"
        ],
        "answer": 0,
        "explanation": "状況に合わせた返答です。"
      },
      {
        "id": "N3_C09",
        "type": "conversation",
        "script": [
          {
            "gender": "female",
            "text": "参加人数が確定したら、すぐ教えてください。"
          }
        ],
        "question": "このとき、いちばん自然な返事はどれですか。",
        "options": [
          "はい、確定次第ご連絡します。",
          "去年でした。",
          "手前にあります。",
          "もう歩いた。"
        ],
        "answer": 0,
        "explanation": "依頼への自然な返答です。"
      },
      {
        "id": "N3_C10",
        "type": "conversation",
        "script": [
          {
            "gender": "female",
            "text": "その説明だと誤解されるかもしれません。"
          }
        ],
        "question": "このとき、いちばん自然な返事はどれですか。",
        "options": [
          "では、補足を入れるようにします。",
          "昨日は遠いです。",
          "四本寝ます。",
          "赤が駅です。"
        ],
        "answer": 0,
        "explanation": "改善の返答として自然です。"
      },
      {
        "id": "N3_C11",
        "type": "conversation",
        "script": [
          {
            "gender": "female",
            "text": "念のため、控えも取っておいてください。"
          }
        ],
        "question": "このとき、いちばん自然な返事はどれですか。",
        "options": [
          "はい、コピーを残しておきます。",
          "今日は海です。",
          "二人は青です。",
          "来週閉めます。"
        ],
        "answer": 0,
        "explanation": "控えを残す返答です。"
      },
      {
        "id": "N3_C12",
        "type": "conversation",
        "script": [
          {
            "gender": "female",
            "text": "このままだと時間内に終わらないかもしれません。"
          }
        ],
        "question": "このとき、いちばん自然な返事はどれですか。",
        "options": [
          "優先順位を決めて進めましょう。",
          "その本は丸いです。",
          "外で読みます。",
          "九月が右です。"
        ],
        "answer": 0,
        "explanation": "対策として自然です。"
      },
      {
        "id": "N3_C13",
        "type": "conversation",
        "script": [
          {
            "gender": "female",
            "text": "詳細はあとで送りますので、まず予定だけ空けておいてください。"
          }
        ],
        "question": "このとき、いちばん自然な返事はどれですか。",
        "options": [
          "承知しました。予定を押さえておきます。",
          "昨日は浅いです。",
          "三冊来ます。",
          "左が暑いです。"
        ],
        "answer": 0,
        "explanation": "依頼への自然な返答です。"
      },
      {
        "id": "N3_C14",
        "type": "conversation",
        "script": [
          {
            "gender": "female",
            "text": "その情報、まだ確定ではないので扱いに注意してください。"
          }
        ],
        "question": "このとき、いちばん自然な返事はどれですか。",
        "options": [
          "わかりました。確定前として共有します。",
          "六時が白いです。",
          "橋を食べます。",
          "今月は遠いです。"
        ],
        "answer": 0,
        "explanation": "注意への返答として自然です。"
      },
      {
        "id": "N3_C15",
        "type": "conversation",
        "script": [
          {
            "gender": "female",
            "text": "会場の案内、もう少し見やすくできますか。"
          }
        ],
        "question": "このとき、いちばん自然な返事はどれですか。",
        "options": [
          "はい、文字を大きくして作り直します。",
          "来年は黒いです。",
          "そこで二本です。",
          "昨日は広いです。"
        ],
        "answer": 0,
        "explanation": "改善対応として自然です。"
      },
      {
        "id": "N3_C16",
        "type": "conversation",
        "script": [
          {
            "gender": "female",
            "text": "先方が到着したら、すぐ会議室へご案内ください。"
          }
        ],
        "question": "このとき、いちばん自然な返事はどれですか。",
        "options": [
          "はい、受付でお迎えします。",
          "今日は三回です。",
          "その机は甘いです。",
          "来月食べます。"
        ],
        "answer": 0,
        "explanation": "案内の指示への自然な返答です。"
      },
      {
        "id": "N3_C17",
        "type": "conversation",
        "script": [
          {
            "gender": "female",
            "text": "もし質問が出たら、あとでまとめて答えます。"
          }
        ],
        "question": "このとき、いちばん自然な返事はどれですか。",
        "options": [
          "では、その場では控えておきます。",
          "赤いので駅です。",
          "二日を読みます。",
          "昨日が右です。"
        ],
        "answer": 0,
        "explanation": "対応方針への自然な返答です。"
      },
      {
        "id": "N3_C18",
        "type": "conversation",
        "script": [
          {
            "gender": "female",
            "text": "この件は私一人では判断できません。"
          }
        ],
        "question": "このとき、いちばん自然な返事はどれですか。",
        "options": [
          "では、関係者にも確認しましょう。",
          "本は高い海です。",
          "七月を食べます。",
          "前が四人です。"
        ],
        "answer": 0,
        "explanation": "次の行動として自然です。"
      },
      {
        "id": "N3_C19",
        "type": "conversation",
        "script": [
          {
            "gender": "female",
            "text": "少し早めに来て、受付の準備をお願いできますか。"
          }
        ],
        "question": "このとき、いちばん自然な返事はどれですか。",
        "options": [
          "はい、三十分前には行きます。",
          "でも白いです。",
          "二冊借りる駅です。",
          "昨日は浅いです。"
        ],
        "answer": 0,
        "explanation": "依頼に応じる返答です。"
      },
      {
        "id": "N3_C20",
        "type": "conversation",
        "script": [
          {
            "gender": "female",
            "text": "状況が変わったら、その時点でまた相談しましょう。"
          }
        ],
        "question": "このとき、いちばん自然な返事はどれですか。",
        "options": [
          "はい、変化があればすぐ共有します。",
          "来月は丸いです。",
          "青を読むです。",
          "三階が深いです。"
        ],
        "answer": 0,
        "explanation": "状況変化への対応として自然です。"
      }
    ]
  },
  "N2": {
    "tugas": [],
    "poin": [],
    "garisBesar": [],
    "cepat": [],
    "terintegrasi": []
  },
  "N1": {
    "tugas": [],
    "poin": [],
    "garisBesar": [],
    "cepat": [],
    "terintegrasi": []
  }
};
