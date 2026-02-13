const vocabularyData = [
  // Verb Godan (u-ending verbs)
  {
    kanji: "歩く",
    kana: "あるく",
    romaji: "aruku",
    meaning: "to walk",
    type: "verb-godan",
    level: "N5"
  },
  {
    kanji: "洗う",
    kana: "あらう",
    romaji: "arau",
    meaning: "to wash",
    type: "verb-godan",
    level: "N5"
  },
  {
    kanji: "ある",
    kana: "ある",
    romaji: "aru",
    meaning: "to be (inanimate), to have",
    type: "verb-godan",
    level: "N5"
  },
  {
    kanji: "遊ぶ",
    kana: "あそぶ",
    romaji: "asobu",
    meaning: "to play",
    type: "verb-godan",
    level: "N5"
  },
  {
    kanji: "会う",
    kana: "あう",
    romaji: "au",
    meaning: "to meet",
    type: "verb-godan",
    level: "N5"
  },
  {
    kanji: "買う",
    kana: "かう",
    romaji: "kau",
    meaning: "to buy",
    type: "verb-godan",
    level: "N5"
  },
  {
    kanji: "書く",
    kana: "かく",
    romaji: "kaku",
    meaning: "to write",
    type: "verb-godan",
    level: "N5"
  },
  {
    kanji: "帰る",
    kana: "かえる",
    romaji: "kaeru",
    meaning: "to return home",
    type: "verb-godan",
    level: "N5"
  },
  {
    kanji: "掛かる",
    kana: "かかる",
    romaji: "kakaru",
    meaning: "to take (time, money)",
    type: "verb-godan",
    level: "N5"
  },
  {
    kanji: "借りる",
    kana: "かりる",
    romaji: "kariru",
    meaning: "to borrow",
    type: "verb-godan",
    level: "N5"
  },
  {
    kanji: "貸す",
    kana: "かす",
    romaji: "kasu",
    meaning: "to lend",
    type: "verb-godan",
    level: "N5"
  },
  {
    kanji: "話す",
    kana: "はなす",
    romaji: "hanasu",
    meaning: "to speak",
    type: "verb-godan",
    level: "N5"
  },
  {
    kanji: "待つ",
    kana: "まつ",
    romaji: "matsu",
    meaning: "to wait",
    type: "verb-godan",
    level: "N5"
  },
  {
    kanji: "分かる",
    kana: "わかる",
    romaji: "wakaru",
    meaning: "to understand",
    type: "verb-godan",
    level: "N5"
  },
  {
    kanji: "いる",
    kana: "いる",
    romaji: "iru",
    meaning: "to need, to be necessary",
    type: "verb-godan",
    level: "N5"
  },
  {
    kanji: "違う",
    kana: "ちがう",
    romaji: "chigau",
    meaning: "to differ",
    type: "verb-godan",
    level: "N5"
  },
  {
    kanji: "切る",
    kana: "きる",
    romaji: "kiru",
    meaning: "to cut",
    type: "verb-godan",
    level: "N5"
  },
  {
    kanji: "作る",
    kana: "つくる",
    romaji: "tsukuru",
    meaning: "to make",
    type: "verb-godan",
    level: "N5"
  },
  {
    kanji: "持つ",
    kana: "もつ",
    romaji: "motsu",
    meaning: "to hold",
    type: "verb-godan",
    level: "N5"
  },
  {
    kanji: "取る",
    kana: "とる",
    romaji: "toru",
    meaning: "to take",
    type: "verb-godan",
    level: "N5"
  },
  {
    kanji: "入る",
    kana: "はいる",
    romaji: "hairu",
    meaning: "to enter",
    type: "verb-godan",
    level: "N5"
  },
  {
    kanji: "始まる",
    kana: "はじまる",
    romaji": "hajimaru",
    meaning: "to begin",
    type: "verb-godan",
    level: "N5"
  },
  {
    kanji: "走る",
    kana: "はしる",
    romaji": "hashiru",
    meaning: "to run",
    type: "verb-godan",
    level: "N5"
  },
  {
    kanji: "働く",
    kana: "はたるく",
    romaji": "hataraku",
    meaning: "to work",
    type: "verb-godan",
    level: "N5"
  },
  {
    kanji: "使う",
    kana: "つかう",
    romaji": "tsukau",
    meaning: "to use",
    type: "verb-godan",
    level: "N5"
  },
  {
    kanji: "言う",
    kana: "いう",
    romaji": "iu",
    meaning: "to say",
    type: "verb-godan",
    level: "N5"
  },

  // Verb Ru (eru/iru-ending verbs)
  {
    kanji: "食べる",
    kana: "たべる",
    romaji": "taberu",
    meaning: "to eat",
    type: "verb-ru",
    level: "N5"
  },
  {
    kanji: "寝る",
    kana: "ねる",
    romaji": "neru",
    meaning: "to sleep, to go to bed",
    type: "verb-ru",
    level: "N5"
  },
  {
    kanji: "見る",
    kana: "みる",
    romaji": "miru",
    meaning: "to see, to look, to watch",
    type: "verb-ru",
    level: "N5"
  },
  {
    kanji: "来る",
    kana: "くる",
    romaji": "kuru",
    meaning: "to come",
    type: "verb-ru",
    level: "N5"
  },
  {
    kanji: "開ける",
    kana: "あける",
    romaji": "akeru",
    meaning: "to open",
    type: "verb-ru",
    level: "N5"
  },
  {
    kanji: "教える",
    kana: "おしえる",
    romaji": "oshieru",
    meaning: "to teach, to tell",
    type: "verb-ru",
    level: "N5"
  },
  {
    kanji: "忘れる",
    kana: "わすれる",
    romaji": "wasureru",
    meaning: "to forget",
    type: "verb-ru",
    level: "N5"
  },
  {
    kanji: "出る",
    kana: "でる",
    romaji": "deru",
    meaning: "to go out",
    type: "verb-ru",
    level: "N5"
  },
  {
    kanji: "着る",
    kana: "きる",
    romaji": "kiru",
    meaning: "to wear",
    type: "verb-ru",
    level: "N5"
  },
  {
    kanji: "生きる",
    kana: "いきる",
    romaji": "ikiru",
    meaning: "to live",
    type: "verb-ru",
    level: "N5"
  },

  // Verb Irregular
  {
    kanji: "する",
    kana: "する",
    romaji": "suru",
    meaning: "to do",
    type: "verb-irregular",
    level: "N5"
  },
  {
    kanji: "勉強する",
    kana: "べんきょうする",
    romaji": "benkyou suru",
    meaning: "to study",
    type: "verb-irregular",
    level: "N5"
  },
  {
    kanji: "来る",
    kana: "くる",
    romaji": "kuru",
    meaning: "to come",
    type: "verb-irregular",
    level: "N5"
  },

  // Adj-i
  {
    kanji: "大きい",
    kana: "おおきい",
    romaji": "ookii",
    meaning: "big, large",
    type: "adj-i",
    level: "N5"
  },
  {
    kanji: "小さい",
    kana: "ちいさい",
    romaji": "chiisai",
    meaning: "small",
    type: "adj-i",
    level: "N5"
  },
  {
    kanji: "新しい",
    kana: "あたらし",
    romaji": "atarashii",
    meaning: "new",
    type: "adj-i",
    level: "N5"
  },
  {
    kanji: "古い",
    kana: "ふるい",
    romaji": "furui",
    meaning: "old",
    type: "adj-i",
    level: "N5"
  },
  {
    kanji: "いい",
    kana: "いい",
    romaji": "ii",
    meaning: "good",
    type: "adj-i",
    level: "N5"
  },
  {
    kanji: "悪い",
    kana: "わるい",
    romaji": "warui",
    meaning: "bad",
    type: "adj-i",
    level: "N5"
  },
  {
    kanji: "熱い",
    kana: "あつい",
    romaji": "atsui",
    meaning: "hot (touch)",
    type: "adj-i",
    level: "N5"
  },
  {
    kanji: "寒い",
    kana: "さむい",
    romaji": "samui",
    meaning: "cold (weather)",
    type: "adj-i",
    level: "N5"
  },
  {
    kanji: "冷たい",
    kana: "つめたい",
    romaji": "tsumetai",
    meaning: "cold (touch)",
    type: "adj-i",
    level: "N5"
  },
  {
    kanji: "難しい",
    kana: "むずかしい",
    romaji": "muzukashii",
    meaning: "difficult",
    type: "adj-i",
    level: "N5"
  },
  {
    kanji: "易しい",
    kana: "やさしい",
    romaji": "yasashii",
    meaning: "easy, kind",
    type: "adj-i",
    level: "N5"
  },
  {
    kanji: "高い",
    kana: "たかい",
    romaji": "takai",
    meaning: "high, tall, expensive",
    type: "adj-i",
    level: "N5"
  },
  {
    kanji: "安い",
    kana: "やすい",
    romaji": "yasui",
    meaning: "cheap",
    type: "adj-i",
    level: "N5"
  },
  {
    kanji: "低い",
    kana: "ひくい",
    romaji": "hikui",
    meaning: "low",
    type: "adj-i",
    level: "N5"
  },
  {
    kanji: "面白い",
    kana: "おもしろい",
    romaji": "omoshiroi",
    meaning: "interesting",
    type: "adj-i",
    level: "N5"
  },
  {
    kanji: "美味しい",
    kana: "おいしい",
    romaji": "oishii",
    meaning: "delicious",
    type: "adj-i",
    level: "N5"
  },
  {
    kanji: "忙しい",
    kana: "いそがしい",
    romaji": "isogashii",
    meaning: "busy",
    type: "adj-i",
    level: "N5"
  },
  {
    kanji: "楽しい",
    kana: "たのしい",
    romaji": "tanoshii",
    meaning: "fun",
    type: "adj-i",
    level: "N5"
  },
  {
    kanji: "白い",
    kana: "しろい",
    romaji": "shiroi",
    meaning: "white",
    type: "adj-i",
    level: "N5"
  },
  {
    kanji: "黒い",
    kana: "くろい",
    romaji": "kuroi",
    meaning: "black",
    type: "adj-i",
    level: "N5"
  },
  {
    kanji: "赤い",
    kana: "あかい",
    romaji": "akai",
    meaning: "red",
    type: "adj-i",
    level: "N5"
  },
  {
    kanji: "青い",
    kana: "あおい",
    romaji": "aoi",
    meaning: "blue",
    type: "adj-i",
    level: "N5"
  },
  {
    kanji: "寂しい",
    kana: "さびしい",
    romaji": "sabishii",
    meaning: "lonely",
    type: "adj-i",
    level: "N5"
  },

  // Adj-na
  {
    kanji: "好き",
    kana: "すき",
    romaji": "suki",
    meaning: "like",
    type: "adj-na",
    level: "N5"
  },
  {
    kanji: "嫌い",
    kana: "きらい",
    romaji": "kirai",
    meaning: "dislike",
    type: "adj-na",
    level: "N5"
  },
  {
    kanji: "上手",
    kana: "じょうず",
    romaji": "jouzu",
    meaning: "skilled",
    type: "adj-na",
    level: "N5"
  },
  {
    kanji: "下手",
    kana: "へた",
    romaji": "heta",
    meaning: "unskilled",
    type: "adj-na",
    level: "N5"
  },
  {
    kanji: "有名",
    kana: "ゆうめい",
    romaji": "yuumei",
    meaning: "famous",
    type: "adj-na",
    level: "N5"
  },
  {
    kanji: "大切",
    kana: "たいせつ",
    romaji": "taisetsu",
    meaning: "important",
    type: "adj-na",
    level: "N5"
  },
  {
    kanji: "安全",
    kana: "あんぜん",
    romaji": "anzen",
    meaning: "safe",
    type: "adj-na",
    level: "N5"
  },
  {
    kanji: "大丈夫",
    kana: "だいじょうぶ",
    romaji": "daijoubu",
    meaning: "all right",
    type: "adj-na",
    level: "N5"
  },
  {
    kanji: "便利",
    kana: "べんり",
    romaji": "benri",
    meaning: "convenient",
    type: "adj-na",
    level: "N5"
  },
  {
    kanji: "静か",
    kana: "しずか",
    romaji": "shizuka",
    meaning: "quiet",
    type: "adj-na",
    level: "N5"
  },
  {
    kanji: "自由",
    kana: "じゆう",
    romaji": "jiyuu",
    meaning: "free",
    type: "adj-na",
    level: "N5"
  },
  {
    kanji: "きれい",
    kana: "きれい",
    romaji": "kirei",
    meaning: "pretty, clean",
    type: "adj-na",
    level: "N5"
  },
  {
    kanji: "親切",
    kana: "しんせつ",
    romaji": "shinsetsu",
    meaning: "kind",
    type: "adj-na",
    level: "N5"
  },

  // Noun
  {
    kanji: "朝",
    kana: "あさ",
    romaji": "asa",
    meaning: "morning",
    type: "noun",
    level: "N5"
  },
  {
    kanji: "足",
    kana: "あし",
    romaji": "ashi",
    meaning: "leg, foot",
    type: "noun",
    level: "N5"
  },
  {
    kanji: "雨",
    kana: "あめ",
    romaji": "ame",
    meaning: "rain",
    type: "noun",
    level: "N5"
  },
  {
    kanji: "目",
    kana: "め",
    romaji": "me",
    meaning: "eye",
    type: "noun",
    level: "N5"
  },
  {
    kanji: "耳",
    kana: "みみ",
    romaji": "mimi",
    meaning: "ear",
    type: "noun",
    level: "N5"
  },
  {
    kanji: "口",
    kana: "くち",
    romaji": "kuchi",
    meaning: "mouth",
    type: "noun",
    level: "N5"
  },
  {
    kanji: "手",
    kana: "て",
    romaji": "te",
    meaning: "hand",
    type: "noun",
    level: "N5"
  },
  {
    kanji: "人",
    kana: "ひと",
    romaji": "hito",
    meaning: "person",
    type: "noun",
    level: "N5"
  },
  {
    kanji: "私",
    kana: "わたし",
    romaji": "watashi",
    meaning: "I",
    type: "noun",
    level: "N5"
  },
  {
    kanji: "あなた",
    kana: "あなた",
    romaji": "anata",
    meaning: "you",
    type: "noun",
    level: "N5"
  },
  {
    kanji: "父",
    kana: "ちち",
    romaji": "chichi",
    meaning: "father",
    type: "noun",
    level: "N5"
  },
  {
    kanji: "母",
    kana: "はは",
    romaji": "haha",
    meaning: "mother",
    type: "noun",
    level: "N5"
  },
  {
    kanji: "お父さん",
    kana: "おとうさん",
    romaji": "otousan",
    meaning: "father (polite)",
    type: "noun",
    level: "N5"
  },
  {
    kanji: "お母さん",
    kana: "おかあさん",
    romaji": "okaasan",
    meaning: "mother (polite)",
    type: "noun",
    level: "N5"
  },
  {
    kanji: "兄",
    kana: "あに",
    romaji": "ani",
    meaning: "older brother",
    type: "noun",
    level: "N5"
  },
  {
    kanji: "姉",
    kana: "あね",
    romaji": "ane",
    meaning: "older sister",
    type: "noun",
    level: "N5"
  },
  {
    kanji: "弟",
    kana: "おとうと",
    romaji": "otouto",
    meaning: "younger brother",
    type: "noun",
    level: "N5"
  },
  {
    kanji: "妹",
    kana: "いもうと",
    romaji": "imouto",
    meaning: "younger sister",
    type: "noun",
    level: "N5"
  },
  {
    kanji: "友達",
    kana: "ともだち",
    romaji": "tomodachi",
    meaning: "friend",
    type: "noun",
    level: "N5"
  },
  {
    kanji: "学校",
    kana: "がっこう",
    romaji": "gakkou",
    meaning: "school",
    type: "noun",
    level: "N5"
  },
  {
    kanji: "先生",
    kana: "せんせい",
    romaji": "sensei",
    meaning: "teacher",
    type: "noun",
    level: "N5"
  },
  {
    kanji: "学生",
    kana: "がくせい",
    romaji": "gakusei",
    meaning: "student",
    type: "noun",
    level: "N5"
  },
  {
    kanji: "会社",
    kana: "かいしゃ",
    romaji": "kaisha",
    meaning: "company",
    type: "noun",
    level: "N5"
  },
  {
    kanji: "本",
    kana: "ほん",
    romaji": "hon",
    meaning: "book",
    type: "noun",
    level: "N5"
  },
  {
    kanji: "新聞",
    kana: "しんぶん",
    romaji": "shinbun",
    meaning: "newspaper",
    type: "noun",
    level: "N5"
  },
  {
    kanji: "雑誌",
    kana: "ざっし",
    romaji": "zasshi",
    meaning: "magazine",
    type: "noun",
    level: "N5"
  },
  {
    kanji: "家",
    kana: "いえ",
    romaji": "ie",
    meaning: "house",
    type: "noun",
    level: "N5"
  },
  {
    kanji: "部屋",
    kana: "へや",
    romaji": "heya",
    meaning: "room",
    type: "noun",
    level: "N5"
  },
  {
    kanji: "トイレ",
    kana: "といれ",
    romaji": "toire",
    meaning: "toilet",
    type: "noun",
    level: "N5"
  },
  {
    kanji: "お風呂",
    kana: "おふろ",
    romaji": "ofuro",
    meaning: "bath",
    type: "noun",
    level: "N5"
  },
  {
    kanji: "公園",
    kana: "こうえん",
    romaji": "kouen",
    meaning: "park",
    type: "noun",
    level: "N5"
  },
  {
    kanji: "店",
    kana: "みせ",
    romaji": "mise",
    meaning: "shop",
    type: "noun",
    level: "N5"
  },
  {
    kanji: "病院",
    kana: "びょういん",
    romaji": "byouin",
    meaning: "hospital",
    type: "noun",
    level: "N5"
  },
  {
    kanji: "駅",
    kana: "えき",
    romaji": "eki",
    meaning: "station",
    type: "noun",
    level: "N5"
  },
  {
    kanji: "国",
    kana: "くに",
    romaji": "kuni",
    meaning: "country",
    type: "noun",
    level: "N5"
  },
  {
    kanji: "日本",
    kana: "にほん",
    romaji": "nihon",
    meaning: "Japan",
    type: "noun",
    level: "N5"
  },
  {
    kanji: "名前",
    kana: "なまえ",
    romaji": "namae",
    meaning: "name",
    type: "noun",
    level: "N5"
  },
  {
    kanji: "時間",
    kana: "じかん",
    romaji": "jikan",
    meaning: "time",
    type: "noun",
    level: "N5"
  },
  {
    kanji: "年",
    kana: "とし",
    romaji": "toshi",
    meaning: "year",
    type: "noun",
    level: "N5"
  },
  {
    kanji: "午前",
    kana: "ごぜん",
    romaji": "gozen",
    meaning: "AM",
    type: "noun",
    level: "N5"
  },
  {
    kanji: "午後",
    kana: "ごご",
    romaji": "gogo",
    meaning: "PM",
    type: "noun",
    level: "N5"
  },
  {
    kanji: "今",
    kana: "いま",
    romaji": "ima",
    meaning: "now",
    type: "noun",
    level: "N5"
  },
  {
    kanji: "今日",
    kana: "きょう",
    romaji": "kyou",
    meaning: "today",
    type: "noun",
    level: "N5"
  },
  {
    kanji: "明日",
    kana: "あした",
    romaji": "ashita",
    meaning: "tomorrow",
    type: "noun",
    level: "N5"
  },
  {
    kanji: "昨日",
    kana: "きのう",
    romaji": "kinou",
    meaning: "yesterday",
    type: "noun",
    level: "N5"
  },
  {
    kanji: "朝",
    kana: "あさ",
    romaji": "asa",
    meaning: "morning",
    type: "noun",
    level: "N5"
  },
  {
    kanji: "昼",
    kana: "ひる",
    romaji": "hiru",
    meaning: "noon",
    type: "noun",
    level: "N5"
  },
  {
    kanji: "夜",
    kana: "よる",
    romaji": "yoru",
    meaning: "night",
    type: "noun",
    level: "N5"
  },
  {
    kanji: "毎朝",
    kana: "まいあさ",
    romaji": "maiasa",
    meaning: "every morning",
    type: "noun",
    level: "N5"
  },
  {
    kanji: "毎日",
    kana: "まいにち",
    romaji": "mainichi",
    meaning: "every day",
    type: "noun",
    level: "N5"
  },
  {
    kanji: "毎年",
    kana: "まいとし",
    romaji": "maitoshi",
    meaning: "every year",
    type: "noun",
    level: "N5"
  },
  {
    kanji: "月曜日",
    kana: "げつようび",
    romaji": "getsuyoubi",
    meaning: "Monday",
    type: "noun",
    level: "N5"
  },
  {
    kanji: "火曜日",
    kana: "かようび",
    romaji": "kayoubi",
    meaning: "Tuesday",
    type: "noun",
    level: "N5"
  },
  {
    kanji: "水曜日",
    kana: "すいようび",
    romaji": "suiyoubi",
    meaning: "Wednesday",
    type: "noun",
    level: "N5"
  },
  {
    kanji: "木曜日",
    kana: "もくようび",
    romaji": "mokuyoubi",
    meaning: "Thursday",
    type: "noun",
    level: "N5"
  },
  {
    kanji: "金曜日",
    kana: "きんようび",
    romaji": "kinyoubi",
    meaning: "Friday",
    type: "noun",
    level: "N5"
  },
  {
    kanji: "土曜日",
    kana: "どようび",
    romaji": "doyoubi",
    meaning: "Saturday",
    type: "noun",
    level: "N5"
  },
  {
    kanji: "日曜日",
    kana: "にちようび",
    romaji": "nichiyoubi",
    meaning: "Sunday",
    type: "noun",
    level: "N5"
  },
  {
    kanji: "何曜日",
    kana: "なんようび",
    romaji": "nanyoubi",
    meaning: "what day of the week",
    type: "noun",
    level: "N5"
  },
  {
    kanji: "食べ物",
    kana: "たべもの",
    romaji": "tabemono",
    meaning: "food",
    type: "noun",
    level: "N5"
  },
  {
    kanji: "飲み物",
    kana: "のみもの",
    romaji": "nomimono",
    meaning: "drink",
    type: "noun",
    level: "N5"
  },
  {
    kanji: "水",
    kana: "みず",
    romaji": "mizu",
    meaning: "water",
    type: "noun",
    level: "N5"
  },
  {
    kanji: "お茶",
    kana: "おちゃ",
    romaji": "ocha",
    meaning: "tea",
    type: "noun",
    level: "N5"
  },
  {
    kanji: "牛乳",
    kana: "ぎゅうにゅう",
    romaji": "gyuunyuu",
    meaning: "milk",
    type: "noun",
    level: "N5"
  },
  {
    kanji: "ジュース",
    kana: "じゅーす",
    romaji": "juusu",
    meaning: "juice",
    type: "noun",
    level: "N5"
  },
  {
    kanji: "ビール",
    kana: "びーる",
    romaji": "biiru",
    meaning: "beer",
    type: "noun",
    level: "N5"
  },
  {
    kanji: "ご飯",
    kana: "ごはん",
    romaji": "gohan",
    meaning: "rice, meal",
    type: "noun",
    level: "N5"
  },
  {
    kanji: "朝ご飯",
    kana: "あさごはん",
    romaji": "asagohan",
    meaning: "breakfast",
    type: "noun",
    level: "N5"
  },
  {
    kanji: "昼ご飯",
    kana: "ひるごはん",
    romaji": "hirugohan",
    meaning: "lunch",
    type: "noun",
    level: "N5"
  },
  {
    kanji: "晩ご飯",
    kana: "ばんごはん",
    romaji": "bangohan",
    meaning: "dinner",
    type: "noun",
    level: "N5"
  },
  {
    kanji: "パン",
    kana: "ぱん",
    romaji": "pan",
    meaning: "bread",
    type: "noun",
    level: "N5"
  },
  {
    kanji: "野菜",
    kana: "やさい",
    romaji": "yasai",
    meaning: "vegetable",
    type: "noun",
    level: "N5"
  },
  {
    kanji: "果物",
    kana: "くだもの",
    romaji": "kudamono",
    meaning: "fruit",
    type: "noun",
    level: "N5"
  },
  {
    kanji: "肉",
    kana: "にく",
    romaji": "niku",
    meaning: "meat",
    type: "noun",
    level: "N5"
  },
  {
    kanji: "魚",
    kana: "さかな",
    romaji": "sakana",
    meaning: "fish",
    type: "noun",
    level: "N5"
  },
  {
    kanji: "卵",
    kana: "たまご",
    romaji": "tamago",
    meaning: "egg",
    type: "noun",
    level: "N5"
  },

  // Counter
  {
    kanji: "一つ",
    kana: "ひとつ",
    romaji": "hitotsu",
    meaning: "one (general counter)",
    type: "counter",
    level: "N5"
  },
  {
    kanji: "二つ",
    kana: "ふたつ",
    romaji": "futatsu",
    meaning: "two (general counter)",
    type: "counter",
    level: "N5"
  },
  {
    kanji: "三つ",
    kana: "みっつ",
    romaji": "mittsu",
    meaning: "three (general counter)",
    type: "counter",
    level: "N5"
  },
  {
    kanji: "四つ",
    kana: "よっつ",
    romaji": "yottsu",
    meaning: "four (general counter)",
    type: "counter",
    level: "N5"
  },
  {
    kanji: "五つ",
    kana: "いつつ",
    romaji": "itsutsu",
    meaning: "five (general counter)",
    type: "counter",
    level: "N5"
  },
  {
    kanji: "六つ",
    kana: "むっつ",
    romaji": "muttsu",
    meaning: "six (general counter)",
    type: "counter",
    level: "N5"
  },
  {
    kanji: "七つ",
    kana: "ななつ",
    romaji": "nanatsu",
    meaning: "seven (general counter)",
    type: "counter",
    level: "N5"
  },
  {
    kanji: "八つ",
    kana: "やっつ",
    romaji": "yattsu",
    meaning: "eight (general counter)",
    type: "counter",
    level: "N5"
  },
  {
    kanji: "九つ",
    kana: "ここのつ",
    romaji": "kokonotsu",
    meaning: "nine (general counter)",
    type: "counter",
    level: "N5"
  },
  {
    kanji: "十",
    kana: "とお",
    romaji": "too",
    meaning: "ten (general counter)",
    type: "counter",
    level: "N5"
  },
  {
    kanji: "何",
    kana: "なん",
    romaji": "nan",
    meaning: "what, how many (counter)",
    type: "counter",
    level: "N5"
  },
  {
    kanji: "一本",
    kana: "いっぽん",
    romaji": "ippon",
    meaning: "one (long cylindrical objects)",
    type: "counter",
    level: "N5"
  },
  {
    kanji: "一本",
    kana: "にほん",
    romaji": "nihon",
    meaning: "two (long cylindrical objects)",
    type: "counter",
    level: "N5"
  },
  {
    kanji: "三本",
    kana: "さんぼん",
    romaji": "sanbon",
    meaning: "three (long cylindrical objects)",
    type: "counter",
    level: "N5"
  },
  {
    kanji: "一本",
    kana: "よんほん",
    romaji": "yonhon",
    meaning: "four (long cylindrical objects)",
    type: "counter",
    level: "N5"
  },
  {
    kanji: "一本",
    kana: "ごほん",
    romaji": "gohon",
    meaning: "five (long cylindrical objects)",
    type: "counter",
    level: "N5"
  },
  {
    kanji: "一本",
    kana: "ろっぽん",
    romaji": "roppon",
    meaning: "six (long cylindrical objects)",
    type: "counter",
    level: "N5"
  },
  {
    kanji: "一本",
    kana: "ななほん",
    romaji": "nanahon",
    meaning: "seven (long cylindrical objects)",
    type: "counter",
    level: "N5"
  },
  {
    kanji: "一本",
    kana: "はちほん",
    romaji": "hachihon",
    meaning: "eight (long cylindrical objects)",
    type: "counter",
    level: "N5"
  },
  {
    kanji: "一本",
    kana: "きゅうほん",
    romaji": "kyuuhon",
    meaning: "nine (long cylindrical objects)",
    type: "counter",
    level: "N5"
  },
  {
    kanji: "一本",
    kana: "じゅっぽん",
    romaji": "juppon",
    meaning: "ten (long cylindrical objects)",
    type: "counter",
    level: "N5"
  },
  {
    kanji: "一本",
    kana: "なんぼん",
    romaji": "nanbon",
    meaning: "how many (long cylindrical objects)",
    type: "counter",
    level: "N5"
  },
  {
    kanji: "一枚",
    kana: "いちまい",
    romaji": "ichimai",
    meaning: "one (flat objects)",
    type: "counter",
    level: "N5"
  },
  {
    kanji: "二枚",
    kana: "にまい",
    romaji": "nimai",
    meaning: "two (flat objects)",
    type: "counter",
    level: "N5"
  },
  {
    kanji: "三枚",
    kana: "さんまい",
    romaji": "sanmai",
    meaning: "three (flat objects)",
    type: "counter",
    level: "N5"
  },
  {
    kanji: "何枚",
    kana: "なんまい",
    romaji": "nanmai",
    meaning: "how many (flat objects)",
    type: "counter",
    level: "N5"
  },
  {
    kanji: "一人",
    kana: "ひとり",
    romaji": "hitori",
    meaning: "one person",
    type: "counter",
    level: "N5"
  },
  {
    kanji: "二人",
    kana: "ふたり",
    romaji": "futari",
    meaning: "two people",
    type: "counter",
    level: "N5"
  },
  {
    kanji: "三人",
    kana: "さんにん",
    romaji": "sannin",
    meaning: "three people",
    type: "counter",
    level: "N5"
  },
  {
    kanji: "四人",
    kana: "よにん",
    romaji": "yonin",
    meaning: "four people",
    type: "counter",
    level: "N5"
  },
  {
    kanji: "何人",
    kana: "なんにん",
    romaji": "nannin",
    meaning: "how many people",
    type: "counter",
    level: "N5"
  },
  {
    kanji: "一歳",
    kana: "いっさい",
    romaji": "issai",
    meaning: "one year old",
    type: "counter",
    level: "N5"
  },
  {
    kanji: "二十歳",
    kana: "はたち",
    romaji": "hatachi",
    meaning: "twenty years old",
    type: "counter",
    level: "N5"
  },
  {
    kanji: "何歳",
    kana: "なんさい",
    romaji": "nansai",
    meaning: "how old",
    type: "counter",
    level: "N5"
  },
  {
    kanji: "時",
    kana: "じ",
    romaji": "ji",
    meaning: "o'clock",
    type: "counter",
    level: "N5"
  },
  {
    kanji: "分",
    kana: "ふん",
    romaji": "fun",
    meaning: "minute",
    type: "counter",
    level: "N5"
  },
  {
    kanji: "半",
    kana: "はん",
    romaji": "han",
    meaning: "half",
    type: "counter",
    level: "N5"
  },
  {
    kanji: "何時",
    kana: "なんじ",
    romaji": "nanji",
    meaning: "what time",
    type: "counter",
    level: "N5"
  },
  {
    kanji: "何分",
    kana: "なんふん",
    romaji": "nanpun",
    meaning: "how many minutes",
    type: "counter",
    level: "N5"
  },
  {
    kanji: "日",
    kana: "にち",
    romaji": "nichi",
    meaning: "day (date)",
    type: "counter",
    level: "N5"
  },
  {
    kanji: "月",
    kana: "がつ",
    romaji": "gatsu",
    meaning: "month",
    type: "counter",
    level: "N5"
  },
  {
    kanji: "年",
    kana: "ねん",
    romaji": "nen",
    meaning: "year",
    type: "counter",
    level: "N5"
  }
];

const patternData = {
  N5: [
    { pattern: "です", example: "私は学生です。", meaning: "Adalah." },
    { pattern: "ます", example: "私は毎日勉強します。", meaning: "Bentuk sopan." },
    { pattern: "ません", example: "私はコーヒーを飲みません。", meaning: "Bentuk negatif sopan." },
    { pattern: "でした", example: "昨日は暑かったです。", meaning: "Bentuk lampau." },
    { pattern: "ではありません", example: "これは本ではありません。", meaning: "Bukan." },
    { pattern: "か", example: "これは何ですか？", meaning: "Pertanyaan." },
    { pattern: "も", example: "私も学生です。", meaning: "Juga." },
    { pattern: "～の", example: "これは日本の車です。", meaning: "Kepemilikan/keterangan noun." },
    { pattern: "～を", example: "私はパンを食べます。", meaning: "Penanda objek langsung." },
    { pattern: "～に", example: "7時に起きます。", meaning: "Penanda waktu/tujuan keberadaan." },
    { pattern: "～で", example: "図書館で勉強します。", meaning: "Penanda tempat kegiatan/alat." },
    { pattern: "～へ", example: "日本へ行きます。", meaning: "Arah/tujuan." },
    { pattern: "～から～まで", example: "9時から5時まで働きます。", meaning: "Dari sampai." },
    { pattern: "～と", example: "友達と映画を見ます。", meaning: "Bersama/dengan." },
    { pattern: "～や～など", example: "机の上に本やノートなどがあります。", meaning: "Daftar tidak lengkap." },
    { pattern: "～がほしい", example: "新しい辞書がほしいです。", meaning: "Ingin benda." },
    { pattern: "～たい", example: "日本へ行きたいです。", meaning: "Ingin melakukan sesuatu." },
    { pattern: "～ませんか", example: "いっしょに昼ご飯を食べませんか。", meaning: "Ajakan halus." },
    { pattern: "～ましょう", example: "少し休みましょう。", meaning: "Mari kita..." },
    { pattern: "～てください", example: "ここに名前を書いてください。", meaning: "Permintaan sopan." },
    { pattern: "～てもいいです", example: "ここで写真を撮ってもいいです。", meaning: "Izin melakukan sesuatu." },
    { pattern: "～てはいけません", example: "ここでタバコを吸ってはいけません。", meaning: "Larangan." },
    { pattern: "～ています", example: "今、雨が降っています。", meaning: "Sedang berlangsung/keadaan." },
    { pattern: "～に行きます", example: "友達と買い物に行きます。", meaning: "Pergi untuk melakukan V-masu stem." },
    { pattern: "～たことがあります", example: "富士山に登ったことがあります。", meaning: "Pernah mengalami." },
    { pattern: "～たり～たりします", example: "日曜日は掃除をしたり、音楽を聞いたりします。", meaning: "Contoh aktivitas yang dilakukan." },
    { pattern: "～くて / ～で", example: "この店は安くておいしいです。", meaning: "Menggabung sifat/kalimat." },
    { pattern: "～から", example: "今日は寒いですから、コートを着ます。", meaning: "Alasan/sebab." },
    { pattern: "～ので", example: "用事があるので、先に帰ります。", meaning: "Alasan lebih lembut." },
    { pattern: "～と思います", example: "明日は晴れると思います。", meaning: "Menyatakan pendapat." },
    { pattern: "～つもりです", example: "来年、日本へ留学するつもりです。", meaning: "Rencana/niat." },
    { pattern: "～前に", example: "寝る前に歯を磨きます。", meaning: "Sebelum." },
    { pattern: "～後で", example: "仕事の後で買い物します。", meaning: "Sesudah." }
  ],
  N4: [
    { pattern: "～ながら", example: "彼はテレビを見ながらコーヒーを飲みます。", meaning: "Melakukan dua aktivitas bersamaan." },
    { pattern: "～てしまう", example: "宿題を忘れてしまいました。", meaning: "Selesai sepenuhnya/penyesalan." },
    { pattern: "～ておく", example: "旅行の前にホテルを予約しておきます。", meaning: "Persiapan sebelumnya." },
    { pattern: "～てみる", example: "この漢字を使ってみてください。", meaning: "Mencoba melakukan sesuatu." },
    { pattern: "～てくる", example: "ちょっと水を買ってきます。", meaning: "Pergi lalu kembali/muncul perubahan." },
    { pattern: "～ていく", example: "これから日本語をもっと勉強していきます。", meaning: "Perubahan berlanjut ke depan." },
    { pattern: "～ようになる", example: "日本語のニュースが少し分かるようになりました。", meaning: "Menjadi bisa/terjadi perubahan kemampuan." },
    { pattern: "～ことになる", example: "来月大阪へ転勤することになりました。", meaning: "Keputusan yang ditetapkan." },
    { pattern: "～ことにする", example: "健康のために毎日歩くことにします。", meaning: "Memutuskan sendiri." },
    { pattern: "～なければならない", example: "明日までにレポートを出さなければなりません。", meaning: "Harus." },
    { pattern: "～なくてもいい", example: "今日は残業しなくてもいいです。", meaning: "Tidak perlu." },
    { pattern: "～ば", example: "時間があれば、映画を見に行きます。", meaning: "Pengandaian jika." },
    { pattern: "～たら", example: "駅に着いたら、電話してください。", meaning: "Jika/ketika kondisi tercapai." },
    { pattern: "～なら", example: "日本へ行くなら、春がいいですよ。", meaning: "Kalau mengenai..., maka..." },
    { pattern: "～のに", example: "薬を飲んだのに、まだ痛いです。", meaning: "Berlawanan dengan harapan." },
    { pattern: "～ので", example: "電車が遅れたので、会議に遅れました。", meaning: "Sebab/alasan." },
    { pattern: "～ために", example: "日本で働くために、日本語を勉強しています。", meaning: "Untuk tujuan/karena." },
    { pattern: "～ように", example: "忘れないように、メモしてください。", meaning: "Agar/supaya." },
    { pattern: "～しか～ない", example: "財布に千円しかありません。", meaning: "Hanya ... saja." },
    { pattern: "～ばかり", example: "この店は外国人ばかりですね。", meaning: "Kebanyakan/baru saja." },
    { pattern: "～そうです（様態）", example: "このケーキはおいしそうです。", meaning: "Terlihat seperti." },
    { pattern: "～そうです（伝聞）", example: "天気予報によると、明日は雨だそうです。", meaning: "Katanya/menurut informasi." },
    { pattern: "～らしい", example: "彼は日本語が上手らしいです。", meaning: "Sepertinya (berdasar informasi)." },
    { pattern: "～ようだ", example: "外は静かなようです。", meaning: "Tampaknya/seperti." },
    { pattern: "～だろう / ～でしょう", example: "明日はたぶん暑いでしょう。", meaning: "Dugaan." },
    { pattern: "～てあげる", example: "私は友達に日本語を教えてあげます。", meaning: "Memberi manfaat ke orang lain." },
    { pattern: "～てもらう", example: "私は先生に作文を直してもらいました。", meaning: "Menerima bantuan." },
    { pattern: "～てくれる", example: "友達が駅まで迎えに来てくれました。", meaning: "Orang lain memberi manfaat ke saya." },
    { pattern: "～間に", example: "子どもが寝ている間に、掃除をします。", meaning: "Selama rentang waktu." },
    { pattern: "～ところです", example: "今から食事するところです。", meaning: "Tepat sebelum/saat/sesudah melakukan." }
  ]
};