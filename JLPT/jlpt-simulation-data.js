// ==========================================
// BANK SOAL (REMIXED N4 - FULL VERSION)
// ==========================================
window.jlptSimulationData = {
  N5: {
    kanji: [{ prompt: '水', options: ['みず', 'みずう', 'すい', 'みつ'], answer: 0, instruction: 'Membaca Kanji: Pilih cara baca yang tepat.' }],
    goi: [{ prompt: '毎日（　　）を飲みます。', options: ['ぎゅうにゅう', 'ぎゅうにく', 'にゅうぎゅう', 'ぎゅにゅう'], answer: 0, instruction: 'Kosakata: Pilih kata yang tepat.' }],
    bunpou: [{ prompt: '先生＿＿＿日本語を教えます。', options: ['は', 'を', 'に', 'が'], answer: 0, instruction: 'Tata Bahasa: Pilih partikel yang tepat.' }]
  },
  
  N4: {
    // ==========================================
    // 1. KOSAKATA & KANJI (20 Soal)
    // ==========================================
    kanji: [
      /* Membaca Kanji */
      { prompt: 'この部屋はとても暗いです。', options: ['くろい', 'くらい', 'ひろい', 'あおい'], answer: 1, instruction: 'Membaca Kanji: Bagaimana cara membaca kata yang digarisbawahi?' },
      { prompt: '明日は大切な用事があります。', options: ['たいせつ', 'だいせつ', 'たいぜつ', 'だいぜつ'], answer: 0, instruction: 'Membaca Kanji: Bagaimana cara membaca kata yang digarisbawahi?' },
      { prompt: '荷物が重くて運べません。', options: ['おもくて', 'くろくて', 'あかくて', 'かるくて'], answer: 0, instruction: 'Membaca Kanji: Bagaimana cara membaca kata yang digarisbawahi?' },
      { prompt: 'あの店はいつも客が多いです。', options: ['きゃく', 'かく', 'きょく', 'きやく'], answer: 0, instruction: 'Membaca Kanji: Bagaimana cara membaca kata yang digarisbawahi?' },
      { prompt: '図書館で本を借りました。', options: ['かしました', 'かりました', 'かいました', 'とりました'], answer: 1, instruction: 'Membaca Kanji: Bagaimana cara membaca kata yang digarisbawahi?' },
      
      /* Menulis Kanji */
      { prompt: '田中さんに荷物をはこんでもらいました。', options: ['運ん', '動ん', '送ん', '転ん'], answer: 0, instruction: 'Menulis Kanji: Pilih kanji yang tepat.' },
      { prompt: '新しい自転車をえらびました。', options: ['並びました', '選びました', '遊びました', '喜びました'], answer: 1, instruction: 'Menulis Kanji: Pilih kanji yang tepat.' },
      { prompt: '彼はいつもまじめにはたらいています。', options: ['動いて', '動いて', '働いて', '歩いて'], answer: 2, instruction: 'Menulis Kanji: Pilih kanji yang tepat.' },
      { prompt: 'きのう、あたらしい靴を買いました。', options: ['新しい', '親しい', '古い', '美しい'], answer: 0, instruction: 'Menulis Kanji: Pilih kanji yang tepat.' },
      { prompt: 'もっとはやく走ってください。', options: ['早く', '速く', '急く', '走く'], answer: 1, instruction: 'Menulis Kanji: Pilih kanji yang tepat.' }
    ],

    goi: [
      /* Konteks / Mengisi Kurung */
      { prompt: 'お湯を（　　　）から、お茶を入れましょう。', options: ['やいて', 'わかして', 'ひやして', 'こわして'], answer: 1, instruction: 'Kosakata: Pilih kata yang paling tepat.' },
      { prompt: '会議の時間が（　　　）したので、気をつけてください。', options: ['へんこう', 'りよう', 'せつめい', 'しょうたい'], answer: 0, instruction: 'Kosakata: Pilih kata yang paling tepat.' },
      { prompt: '道が（　　　）いて、遅刻してしまいました。', options: ['す', 'こ', 'かわ', 'ひら'], answer: 1, instruction: 'Kosakata: Pilih kata yang paling tepat.' },
      { prompt: '朝、寝坊して（　　　）家を出ました。', options: ['しっかり', 'すっかり', 'あわてて', 'なるべく'], answer: 2, instruction: 'Kosakata: Pilih kata yang paling tepat.' },
      { prompt: 'このスープは少し味が（　　　）ですね。', options: ['うすい', 'ほそい', 'あさい', 'すずしい'], answer: 0, instruction: 'Kosakata: Pilih kata yang paling tepat.' },
      
      /* Parafrasa & Penggunaan */
      { prompt: 'このパソコンは複雑ですね。', options: ['このパソコンは高いですね。', 'このパソコンは便利ですね。', 'このパソコンは使いにくいですね。', 'このパソコンは新しいですね。'], answer: 2, instruction: 'Parafrasa: Pilih kalimat yang artinya paling mirip.' },
      { prompt: '山田さんはいつも親切です。', options: ['山田さんはいつも優しいです。', '山田さんはいつも厳しいです。', '山田さんはいつも面白いです。', '山田さんはいつも忙しいです。'], answer: 0, instruction: 'Parafrasa: Pilih kalimat yang artinya paling mirip.' },
      { prompt: '「すっかり」の使い方として最もよいものを選んでください。', options: ['薬を飲んだら、病気がすっかり良くなりました。', '明日はすっかり雨が降るでしょう。', 'このケーキはすっかり美味しいですね。', 'テストの前にすっかり勉強しました。'], answer: 0, instruction: 'Penggunaan Kata: Pilih kalimat yang tepat.' },
      { prompt: '「うつす」の使い方として最もよいものを選んでください。', options: ['ノートの字を黒板にうつしました。', 'カメラで美しい景色をうつしました。', '風邪を友達にうつしてしまいました。', '1・2・3 すべて正しいです。'], answer: 3, instruction: 'Penggunaan Kata: Pilih kalimat yang tepat.' },
      { prompt: '「さっき」の使い方として最もよいものを選んでください。', options: ['さっきから雨が降っています。', '山田さんなら、さっき帰りましたよ。', 'さっき、また遊びに来てください。', 'あしたのさっき、行きましょう。'], answer: 1, instruction: 'Penggunaan Kata: Pilih kalimat yang tepat.' }
    ],

    // ==========================================
    // 2. TATA BAHASA & DOKKAI (20 Soal)
    // ==========================================
    bunpou: [
      /* Grammar Biasa */
      { prompt: '雨が降っている（　　　）、試合は中止になりました。', options: ['のに', 'ので', 'でも', 'なら'], answer: 1, instruction: 'Tata Bahasa: Pilih kata yang paling tepat.' },
      { prompt: '日本語がもっと上手に（　　　）ように、毎日練習しています。', options: ['話す', '話せる', '話した', '話して'], answer: 1, instruction: 'Tata Bahasa: Pilih bentuk kata yang paling tepat.' },
      { prompt: 'この本は難しすぎて、私には（　　　）。', options: ['読まれます', '読ませます', '読めます', '読めません'], answer: 3, instruction: 'Tata Bahasa: Pilih bentuk kata yang paling tepat.' },
      { prompt: '部屋を出る時は、電気を（　　　）ままにしないでください。', options: ['つける', 'つけた', 'つけ', 'つけて'], answer: 1, instruction: 'Tata Bahasa: Pilih bentuk kata yang paling tepat.' },
      { prompt: 'あのレストランは美味しい（　　　）、いつも混んでいます。', options: ['し', 'から', 'ため', 'らしい'], answer: 0, instruction: 'Tata Bahasa: Pilih partikel yang paling tepat.' },
      
      /* Soal Bintang (Menyusun Kata) */
      { 
        type: 'star', 
        prompt: '明日は ___ ___ ★ ___ つもりです。', 
        options: ['に', '図書館', 'に行く', '勉強し'], 
        answer: 3, 
        instruction: 'Susunlah 4 pilihan di bawah ini menjadi kalimat yang benar. Lalu, pilih kata yang tepat untuk posisi bintang (★).' 
      },
      { 
        type: 'star', 
        prompt: 'きのう、 ___ ___ ★ ___ 掃除をさせました。', 
        options: ['は', 'に', '妹', '母'], 
        answer: 2, 
        instruction: 'Susunlah 4 pilihan di bawah ini menjadi kalimat yang benar. Lalu, pilih kata yang tepat untuk posisi bintang (★).' 
      },
      { 
        type: 'star', 
        prompt: '私は、 ___ ___ ★ ___ 好きです。', 
        options: ['飲みながら', 'が', 'お茶を', '本を読むの'], 
        answer: 0, 
        instruction: 'Susunlah 4 pilihan di bawah ini menjadi kalimat yang benar. Lalu, pilih kata yang tepat untuk posisi bintang (★).' 
      },
      { 
        type: 'star', 
        prompt: 'この ___ ___ ★ ___ お願いします。', 
        options: ['コピーして', '資料', 'を', 'ください'], 
        answer: 0, 
        instruction: 'Susunlah 4 pilihan di bawah ini menjadi kalimat yang benar. Lalu, pilih kata yang tepat untuk posisi bintang (★).' 
      },

      /* Dokkai (Membaca) */
      { 
        type: 'dokkai', 
        passage: `私は先月、駅の近くのコンビニでアルバイトを始めました。最初はレジの使い方が分からなくて、お客さんを待たせてしまい、よく失敗しました。

でも、店長や先輩が優しく教えてくれたので、今は一人で仕事ができるようになりました。昨日、いつも来るお客さんに「いつも笑顔でありがとう。頑張ってね」と言われて、とても嬉しかったです。

これからも、お客さんに喜んでもらえるように頑張りたいです。`, 
        prompt: '「私」はどうして嬉しかったのですか。', 
        options: ['新しいアルバイトを始めたから', '店長が優しく教えてくれたから', 'レジが一人で使えるようになったから', 'お客さんにお礼を言われたから'], 
        answer: 3, 
        instruction: 'Berdasarkan teks di samping, pilih jawaban yang paling tepat.' 
      },
      { 
        type: 'dokkai', 
        passage: `日本では、家に入るときに靴を脱ぐ習慣があります。外国から来た人にとっては、少し面倒だと思うかもしれません。

しかし、これには理由があります。昔の日本の家は、床が「畳（たたみ）」で作られていました。畳の上で座ったり、布団を敷いて寝たりするため、家の中をきれいにしておく必要があったからです。

今はベッドで寝る人も増えましたが、靴を脱ぐ習慣はそのまま残っています。`, 
        prompt: '日本人が家の中で靴を脱ぐのは、なぜですか。', 
        options: ['昔から畳の上で寝たり座ったりしていて、家の中をきれいにするため。', '外国人が日本の習慣を好きだから。', '最近はベッドで寝る人が増えたから。', '外から入るときに足が疲れるから。'], 
        answer: 0, 
        instruction: 'Berdasarkan teks di samping, pilih jawaban yang paling tepat.' 
      },
      { 
        type: 'dokkai', 
        passage: `（スーパーの入り口のポスター）
お知らせ

いつも「さくらスーパー」をご利用いただき、ありがとうございます。
来月の5月10日（月）から12日（水）まで、店内を工事するため、お店を休みます。
5月13日（木）の朝10時から、新しくなったお店を開けます。

なお、休みの間も、隣の「さくら薬局」はいつも通り開いています。
よろしくお願いします。`, 
        prompt: 'スーパーが新しく開くのはいつですか。', 
        options: ['5月10日', '5月12日', '5月13日', '薬局と同じ日'], 
        answer: 2, 
        instruction: 'Berdasarkan pengumuman di samping, pilih jawaban yang paling tepat.' 
      }
    ],

    // ==========================================
    // 3. CHOUKAI (5 Soal Mendengarkan)
    // ==========================================
    // Catatan: Karena kita tidak punya file MP3 asli JLPT, ini memakai dummy MP3 royalty-free 
    // agar fiturnya tetap bisa ditekan dan dicoba oleh user.
    choukai: [
      { 
        type: 'choukai', 
        audioSrc: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3',
        prompt: '男の人は明日、何時にどこへ行きますか。', 
        options: ['8時に駅', '9時に駅', '8時に会社', '9時に会社'], 
        answer: 1, 
        instruction: 'Dengarkan audio berikut dan pilih jawaban yang paling tepat.' 
      },
      { 
        type: 'choukai', 
        audioSrc: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3',
        prompt: '女の人は何を買いますか。', 
        options: ['赤いりんごを3つ', '青いりんごを3つ', '赤いりんごを5つ', '青いりんごを5つ'], 
        answer: 0, 
        instruction: 'Dengarkan audio berikut dan pilih jawaban yang paling tepat.' 
      },
      { 
        type: 'choukai', 
        audioSrc: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3',
        prompt: '二人は何について話していますか。', 
        options: ['明日の天気', '週末の旅行', '昨日のテスト', '新しい先生'], 
        answer: 1, 
        instruction: 'Dengarkan audio berikut dan pilih jawaban yang paling tepat.' 
      }
    ]
  }
};
