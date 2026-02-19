document.addEventListener("DOMContentLoaded", () => {
  const grid = document.getElementById("grid");
  const category = document.getElementById("category");
  const search = document.getElementById("search");
  const hamburger = document.getElementById("hamburger");
  const sidebar = document.getElementById("sidebar");
  const overlay = document.getElementById("overlay");
  const resultInfo = document.getElementById("resultInfo");
  const kanjiModal = document.getElementById("kanjiModal");
  const modalBackdrop = document.getElementById("modalBackdrop");
  const modalClose = document.getElementById("modalClose");
  const expandedCard = document.getElementById("expandedCard");
  const recommendationRow = document.getElementById("recommendationRow");
  const modalSubtitle = document.getElementById("modalSubtitle");
  
  // ==================== MODAL FILTER FINAL - BACKDROP 100% BISA KLIK ======================
  const searchBtn = document.getElementById("searchBtn");
  const filterModal = document.getElementById("filterModal");
  const filterBackdrop = document.getElementById("filterBackdrop");
  const filterModalClose = document.getElementById("filterModalClose");
  const modalSearchInput = document.getElementById("modalSearchInput");
  const applyFilterBtn = document.getElementById("applyFilterBtn");
  const resetFilterBtn = document.getElementById("resetFilterBtn");
 
  let isTesting = false;
  let currentQuizData = [];
  let quizIndex = 0;
  let score = 0;
  let timer;
  let timeLeft = 0;
    if (searchBtn && filterModal) {
      let bodyScrollY = 0;
  // 1. Fungsi Memulai Test
function startExercise(type, level) {
    // Ambil data yang sesuai dari data.js
    let filteredData = allData.filter(d => d.level === level);
    
    // Jika untuk Kanji, pastikan ada kanjinya
    if (type === 'kanji') {
        filteredData = filteredData.filter(d => d.kanji && d.kanji !== "");
    }

    if (filteredData.length < 5) {
        alert("Data belum cukup untuk memulai latihan di level ini.");
        return;
    }

    isTesting = true;
    quizIndex = 0;
    score = 0;
    
    // Acak dan ambil soal (30 untuk kanji/goi, 20 untuk bunpou)
    const maxQuestions = (type === 'kanji' || type === 'goi') ? 30 : 20;
    currentQuizData = filteredData.sort(() => Math.random() - 0.5).slice(0, maxQuestions);

    renderQuiz(type);
}

// 2. Fungsi Render Tampilan Soal
function renderQuiz(type) {
    if (quizIndex >= currentQuizData.length) {
        endQuiz();
        return;
    }

    const item = currentQuizData[quizIndex];
    const timeLimit = type === 'kanji' ? 5 : (type === 'bunpou' ? 30 : 10); 
    timeLeft = timeLimit;

    // Buat Pilihan Jawaban Otomatis (1 benar, 3 salah)
    const options = generateOptions(item, type);

    grid.classList.add("support-mode"); // Biar background tetap konsisten
    grid.innerHTML = `
        <div class="quiz-wrapper" style="max-width: 500px; margin: 0 auto; text-align: center; padding: 20px;">
            <div class="quiz-header" style="display: flex; justify-content: space-between; margin-bottom: 20px;">
                <span style="font-weight: bold;">Soal ${quizIndex + 1}/${currentQuizData.length}</span>
                <span id="quiz-timer" style="color: #ff4d6d; font-weight: bold; font-size: 1.2rem;">${timeLeft}s</span>
            </div>
            
            <div class="quiz-card-main" style="background: rgba(255,255,255,0.9); padding: 40px; border-radius: 20px; box-shadow: 0 10px 25px rgba(0,0,0,0.1); margin-bottom: 30px;">
                <h1 style="font-size: 5rem; color: #1f2937; margin: 0;">${type === 'goi' ? item.meaning : item.kanji}</h1>
                ${type === 'kanji' ? '<p style="color: #6b7280;">Bacaan Hiragana-nya?</p>' : ''}
            </div>

            <div class="options-grid" style="display: grid; grid-template-columns: 1fr 1fr; gap: 15px;">
                ${options.map(opt => `
                    <button onclick="checkAnswer('${opt}')" class="opt-btn" style="padding: 15px; border: none; border-radius: 12px; background: white; cursor: pointer; font-size: 1.1rem; font-weight: 500; transition: 0.2s;">
                        ${opt}
                    </button>
                `).join('')}
            </div>

            <button onclick="confirmEndQuiz()" style="margin-top: 30px; background: none; border: 1px solid #ff4d6d; color: #ff4d6d; padding: 8px 20px; border-radius: 20px; cursor: pointer;">
                SELESAIKAN TEST
            </button>
        </div>
    `;

    startTimer(type);
}

// 3. Fungsi Timer
function startTimer(type) {
    clearInterval(timer);
    timer = setInterval(() => {
        timeLeft--;
        const timerDisplay = document.getElementById("quiz-timer");
        if (timerDisplay) timerDisplay.textContent = `${timeLeft}s`;

        if (timeLeft <= 0) {
            clearInterval(timer);
            nextQuestion(); // Otomatis lanjut jika waktu habis (dianggap salah)
        }
    }, 1000);
}

// 4. Fungsi Cek Jawaban
function checkAnswer(selected) {
    clearInterval(timer);
    const item = currentQuizData[quizIndex];
    const correct = (viewMode.includes('goi')) ? item.kana : item.kana; 
    
    if (selected === item.kana) {
        score++;
    }
    nextQuestion();
}

function nextQuestion() {
    quizIndex++;
    const type = viewMode.split(':')[1]; // Mengambil tipe dari viewmode
    renderQuiz(type);
}

// 5. Generate Pilihan Acak
function generateOptions(correctItem, type) {
    let wrongPool = allData
        .filter(d => d.kana !== correctItem.kana && d.level === correctItem.level)
        .map(d => d.kana);
    
    let shuffledWrong = wrongPool.sort(() => 0.5 - Math.random()).slice(0, 3);
    return [...shuffledWrong, correctItem.kana].sort(() => 0.5 - Math.random());
}

    function endQuiz() {
    isTesting = false;
    clearInterval(timer);
    
    const totalSoal = currentQuizData.length;
    const jlptScore = Math.round((score / totalSoal) * 60); // Skala 60 poin
    
    let gradeMsg = "";
    if (jlptScore >= 50) gradeMsg = "Luar Biasa! (満点!)";
    else if (jlptScore >= 35) gradeMsg = "Bagus! Terus tingkatkan.";
    else gradeMsg = "Jangan menyerah, belajar lagi yuk!";

    const message = `
        <div style="text-align: center; padding: 20px;">
            <h2 style="color: #ff4d6d;">Test Selesai!</h2>
            <div style="font-size: 4rem; font-weight: bold; margin: 20px 0;">${jlptScore}/60</div>
            <p style="font-size: 1.1rem;">${gradeMsg}</p>
            <p>Benar: ${score} | Total Soal: ${totalSoal}</p>
            <button onclick="location.reload()" style="margin-top: 20px; background: #ff4d6d; color: white; border: none; padding: 12px 30px; border-radius: 25px; cursor: pointer; font-weight: bold;">
                KEMBALI KE MENU
            </button>
        </div>
    `;
    openInfoModal(message);
}

// Fungsi proteksi keluar
function confirmEndQuiz() {
    if(confirm("Apakah kamu yakin ingin mengakhiri test? Skor saat ini akan langsung dihitung.")) {
        endQuiz();
    }
}

      if (isTesting) {
    const motivasi = [
        "Selesaikan apa yang kamu mulai!",
        "Nyerah sekarang? Ingat impianmu ke Jepang!",
        "Sedikit lagi! Jangan biarkan usahamu sia-sia. 🔥"
    ];
    alert(motivasi[Math.floor(Math.random() * motivasi.length)]);
    return;
}
      
    searchBtn.addEventListener("click", () => {
      bodyScrollY = window.scrollY;
      document.body.style.overflow = "hidden";
      document.body.style.position = "fixed";
      document.body.style.width = "100%";
      document.body.style.top = `-${bodyScrollY}px`;

      filterModal.classList.add("active");
      filterModal.setAttribute("aria-hidden", "false");
      if (modalSearchInput) modalSearchInput.focus();
    });

    function closeFilterModal() {
      filterModal.classList.remove("active");
      filterModal.setAttribute("aria-hidden", "true");

      document.body.style.overflow = "";
      document.body.style.position = "";
      document.body.style.width = "";
      document.body.style.top = "";
      window.scrollTo(0, bodyScrollY);
    }

    // ==================== BACKDROP FIX (ROBUST) ====================
    filterModal.addEventListener("click", (e) => {
      if (e.target === filterModal || e.target === filterBackdrop) {
        closeFilterModal();
      }
    });

    if (filterModalClose) filterModalClose.addEventListener("click", closeFilterModal);

    // ==================== TOGGLE LEVEL (klik lagi = lepas) ====================
    document.querySelectorAll("#levelGrid .level-btn").forEach(btn => {
      btn.addEventListener("click", () => {
        const isAll = btn.dataset.level === "all";
        if (isAll) {
          document.querySelectorAll("#levelGrid .level-btn").forEach(b => b.classList.remove("active"));
          btn.classList.add("active");
        } else {
          if (btn.classList.contains("active")) {
            btn.classList.remove("active");
            document.querySelector('[data-level="all"]').classList.add("active");
          } else {
            document.querySelectorAll("#levelGrid .level-btn").forEach(b => b.classList.remove("active"));
            btn.classList.add("active");
          }
        }
      });
    });

    // Category buttons
    document.querySelectorAll("#categoryGrid .cat-btn").forEach(btn => {
      btn.addEventListener("click", () => {
        document.querySelectorAll("#categoryGrid .cat-btn").forEach(b => b.classList.remove("active"));
        btn.classList.add("active");
      });
    });

    // Apply & Reset
    if (applyFilterBtn) {
      applyFilterBtn.addEventListener("click", () => {
        const activeLevel = document.querySelector("#levelGrid .level-btn.active")?.dataset.level || "all";
        const activeType = document.querySelector("#categoryGrid .cat-btn.active")?.dataset.type || "all";

        selectedLevel = activeLevel;
        selectedType = activeType;
        viewMode = "vocab";
        if (modalSearchInput) search.value = modalSearchInput.value.trim();

        closeFilterModal();
        render();
      });
    }

    if (resetFilterBtn) {
      resetFilterBtn.addEventListener("click", () => {
        selectedLevel = "all";
        selectedType = "all";
        if (search) search.value = "";
        if (modalSearchInput) modalSearchInput.value = "";

        document.querySelectorAll(".level-btn, .cat-btn").forEach(b => b.classList.remove("active"));
        document.querySelector('[data-level="all"]').classList.add("active");

        closeFilterModal();
        render();
      });
    }
  }
  
  // ===== IOS DETECTOR - SEMUA iOS DEVICE (Safari + Chrome iOS) =====
  function isIOS() {
    return /iPad|iPhone|iPod/.test(navigator.platform) ||
           (navigator.platform === 'MacIntel' && 'ontouchend' in document);
  }

  if (isIOS()) {
    document.documentElement.classList.add('ios-device');
    console.log('🛡️ NihonByte iOS Safe Mode AKTIF');

    const style = document.createElement("style");
    style.innerHTML = `
      * {
        animation: none !important;
        transition: none !important;
      }
    `;
    document.head.appendChild(style);

    document.body.style.webkitOverflowScrolling = "touch";

    window.addEventListener("resize", () => {
      document.body.style.height = window.innerHeight + "px";
    });
  }

  let selectedLevel = "all";
  let selectedType = "all";
  let viewMode = "vocab";

  const testState = {
    active: false,
    type: "",
    level: "",
    questions: [],
    currentIndex: 0,
    correctCount: 0,
    timeLeft: 0,
    timerId: null,
    answered: false,
  };

  const letterSets = {
    hiragana: {
      title: "Poster Hiragana",
      sections: [
        {
          subtitle: "Gojūon",
          rows: [
            ["",  "A",  "I",  "U",  "E",  "O"],
            ["A",  "あ", "い", "う", "え", "お"],
            ["KA", "か", "き", "く", "け", "こ"],
            ["SA", "さ", "し", "す", "せ", "そ"],
            ["TA", "た", "ち", "つ", "て", "と"],
            ["NA", "な", "に", "ぬ", "ね", "の"],
            ["HA", "は", "ひ", "ふ", "へ", "ほ"],
            ["MA", "ま", "み", "む", "め", "も"],
            ["YA", "や", "",   "ゆ", "",   "よ"],
            ["RA", "ら", "り", "る", "れ", "ろ"],
            ["WA", "わ", "",   "",   "",   "を"],
            ["N",  "ん", "",   "",   "",   ""],
          ],
        },
        {
          subtitle: "Dakuon & Handakuon",
          rows: [
            ["", "A", "I", "U", "E", "O"],
            ["GA", "が", "ぎ", "ぐ", "げ", "ご"],
            ["ZA", "ざ", "じ", "ず", "ぜ", "ぞ"],
            ["DA", "だ", "ぢ", "づ", "で", "ど"],
            ["BA", "ば", "び", "ぶ", "べ", "ぼ"],
            ["PA", "ぱ", "ぴ", "ぷ", "ぺ", "ぽ"],
          ],
        },
        {
          subtitle: "Yōon",
          rows: [
            ["", "YA", "YU", "YO"],
            ["K", "きゃ", "きゅ", "きょ"],
            ["S", "しゃ", "しゅ", "しょ"],
            ["T", "ちゃ", "ちゅ", "ちょ"],
            ["N", "にゃ", "にゅ", "にょ"],
            ["H", "ひゃ", "ひゅ", "ひょ"],
            ["M", "みゃ", "みゅ", "みょ"],
            ["R", "りゃ", "りゅ", "りょ"],
            ["G", "ぎゃ", "ぎゅ", "ぎょ"],
            ["J", "じゃ", "じゅ", "じょ"],
            ["B", "びゃ", "びゅ", "びょ"],
            ["P", "ぴゃ", "ぴゅ", "ぴょ"],
          ],
        },
      ],
    },

    katakana: {
      title: "Poster Katakana",
      sections: [
        {
          subtitle: "Gojūon",
          rows: [
            ["",  "A",  "I",  "U",  "E",  "O"],
            ["A",  "ア", "イ", "ウ", "エ", "オ"],
            ["KA", "カ", "キ", "ク", "ケ", "コ"],
            ["SA", "サ", "シ", "ス", "セ", "ソ"],
            ["TA", "タ", "チ", "ツ", "テ", "ト"],
            ["NA", "ナ", "ニ", "ヌ", "ネ", "ノ"],
            ["HA", "ハ", "ヒ", "フ", "ヘ", "ホ"],
            ["MA", "マ", "ミ", "ム", "メ", "モ"],
            ["YA", "ヤ", "",   "ユ", "",   "ヨ"],
            ["RA", "ラ", "リ", "ル", "レ", "ロ"],
            ["WA", "ワ", "",   "",   "",   "ヲ"],
            ["N",  "ン", "",   "",   "",   ""],
          ],
        },
        {
          subtitle: "Dakuon & Handakuon",
          rows: [
            ["", "A", "I", "U", "E", "O"],
            ["GA", "ガ", "ギ", "グ", "ゲ", "ゴ"],
            ["ZA", "ザ", "ジ", "ズ", "ゼ", "ゾ"],
            ["DA", "ダ", "ヂ", "ヅ", "デ", "ド"],
            ["BA", "バ", "ビ", "ブ", "ベ", "ボ"],
            ["PA", "パ", "ピ", "プ", "ペ", "ポ"],
          ],
        },
        {
          subtitle: "Yōon",
          rows: [
            ["", "YA", "YU", "YO"],
            ["K", "キャ", "キュ", "キョ"],
            ["S", "シャ", "シュ", "ショ"],
            ["T", "チャ", "チュ", "チョ"],
            ["N", "ニャ", "ニュ", "ニョ"],
            ["H", "ヒャ", "ヒュ", "ヒョ"],
            ["M", "ミャ", "ミュ", "ミョ"],
            ["R", "リャ", "リュ", "リョ"],
            ["G", "ギャ", "ギュ", "ギョ"],
            ["J", "ジャ", "ジュ", "ジョ"],
            ["B", "ビャ", "ビュ", "ビョ"],
            ["P", "ピャ", "ピュ", "ピョ"],
          ],
        },
      ],
    },
  };

  function speakWord(text) {
    if (!window.speechSynthesis || !text) return;
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = "ja-JP";
    utterance.rate = 0.95;
    window.speechSynthesis.cancel();
    window.speechSynthesis.speak(utterance);
  }

  function openInfoModal(message) {
    expandedCard.innerHTML = `<div class="info-poster">${message}</div>`;
    modalSubtitle.style.display = "none";
    recommendationRow.style.display = "none";
    recommendationRow.innerHTML = "";
    kanjiModal.classList.add("active");
    kanjiModal.setAttribute("aria-hidden", "false");
  }

  function matchType(wordType, targetType) {
    if (targetType === "all") return true;
    
    if (targetType === "verb-irregular") {
      return wordType?.startsWith("verb-irregular") || wordType?.startsWith("verb-suru") || wordType === "suru";
    }
    
    if (targetType === "noun" || targetType.startsWith("noun-")) {
      // --- START LOGIKA GABUNGAN ---
      
      // 1. Gabungan Angka & Satuan
      if (targetType === "noun-number-counter") {
        return wordType === "noun-number" || wordType === "noun-counter";
      }

      // 2. Gabungan Rumah, Dapur, & Keluarga
      if (targetType === "noun-house-family") {
        return wordType === "noun-house" || 
               wordType === "noun-kitchen" || 
               wordType === "noun-family";
      }

      // 3. Gabungan Tubuh & Medis (Kesehatan)
      if (targetType === "noun-body-medical") {
        return wordType === "noun-body" || wordType === "noun-medical";
      }

      // 4. Gabungan Waktu, Bulan, & Cuaca
      if (targetType === "noun-time-weather") {
        return wordType === "noun-time" || 
               wordType === "noun-month" || 
               wordType === "noun-weather";
      }

      // --- END LOGIKA GABUNGAN ---

      // Jika tidak cocok dengan gabungan di atas, 
      // cek apakah tipe datanya persis sama (untuk kategori tunggal)
      return wordType === targetType;
    }
    
    if (targetType === "ekspresi" || targetType === "expression" || targetType === "ungkapan umum") {
      return ["expression", "ekspresi", "ungkapan umum"].includes(wordType);
    }
    
    return wordType?.startsWith(targetType) || false;
  }
  function getFilteredWords() {
    const key = (search.value || "").toLowerCase().trim();
    const selectedFromDropdown = category ? category.value : "all";
    if (typeof vocabularyData === "undefined") return []; // Safety check
    
    return vocabularyData.filter((word) => {
      if (selectedLevel !== "all" && word.level !== selectedLevel) return false;
      const effectiveType = selectedType === "all" ? selectedFromDropdown : selectedType;
      if (effectiveType !== "all" && !matchType(word.type, effectiveType)) return false;
      const text = [
        word.kanji || "",
        word.kana || "",
        word.romaji || "",
        word.meaning || ""
      ].join("").toLowerCase();
      return !key || text.includes(key);
    });
  }

  function cardImageTemplate(word, expanded = false) {
    const expandedClass = expanded ? "expanded" : "";
    return `
      <div class="card-image ${expandedClass}">
        <button class="play-audio-btn" type="button" data-text="${word.kana || ''}" aria-label="Putar audio ${word.kanji || word.kana || ''}">▶</button>
        <div class="card-overlay">
          <div class="kanji">${word.kanji || "—"}</div>
          <div class="kana">${word.kana || "—"}</div>
          <div class="romaji">${word.romaji || ""}</div>
          <div class="meaning">${word.meaning || "—"}</div>
        </div>
      </div>
    `;
  }

  function renderExpressionPoster() {
    grid.innerHTML = "";
    if (typeof vocabularyData === "undefined") return;
    
    const expressions = vocabularyData.filter(w =>
      w.type === "expression" || w.type === "ekspresi" || w.type === "ungkapan umum"
    );
    if (!expressions.length) {
      grid.innerHTML = '<div class="empty-state">Belum ada ungkapan umum.</div>';
      if(resultInfo) resultInfo.textContent = "0 ungkapan ditemukan";
      return;
    }
    const container = document.createElement("div");
    container.className = "expression-wide-grid";
    expressions.forEach((word) => {
      const card = document.createElement("div");
      card.className = "expression-wide-card";
      card.setAttribute("role", "button");
      card.setAttribute("tabindex", "0");
      card.setAttribute("aria-label", `Detail ungkapan ${word.kana || word.kanji}`);
      try {
        card.dataset.word = JSON.stringify(word);
      } catch (err) {
        console.warn("Gagal stringify ungkapan:", word);
        return;
      }
      card.innerHTML = `
        <div class="wide-kanji">${word.kanji || "—"}</div>
        <div class="wide-kana">${word.kana || "—"}</div>
        <div class="wide-romaji">${word.romaji || ""}</div>
        <div class="wide-meaning">${word.meaning || "—"}</div>
        <button class="wide-play-btn" type="button" data-text="${word.kana || word.kanji || ''}" aria-label="Putar">▶</button>
      `;
      card.addEventListener("click", (e) => {
        if (e.target.closest(".wide-play-btn")) return;
        try {
          const storedWord = JSON.parse(card.dataset.word);
          openModal(storedWord);
        } catch (err) {}
      });
      card.querySelector(".wide-play-btn").addEventListener("click", (e) => {
        e.stopPropagation();
        speakWord(card.querySelector(".wide-play-btn").dataset.text);
      });
      card.addEventListener("keydown", (e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          try { openModal(JSON.parse(card.dataset.word)); } catch {}
        }
      });
      container.appendChild(card);
    });
    grid.appendChild(container);
    if(resultInfo) resultInfo.textContent = `${expressions.length} ungkapan ditampilkan • ${selectedLevel === "all" ? "Semua level" : selectedLevel}`;
  }

  function shuffle(array) {
    if (!Array.isArray(array)) return [];
    const copy = [...array];
    for (let i = copy.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [copy[i], copy[j]] = [copy[j], copy[i]];
    }
    return copy;
  }

  function stopTestTimer() {
    if (testState.timerId) {
      clearInterval(testState.timerId);
      testState.timerId = null;
    }
  }

  function startQuestionTimer(seconds) {
    stopTestTimer();
    testState.timeLeft = seconds;
    const timerElement = document.getElementById("testTimer");
    if (timerElement) timerElement.textContent = `${testState.timeLeft}s`;
    testState.timerId = setInterval(() => {
      testState.timeLeft -= 1;
      const currentTimerElement = document.getElementById("testTimer");
      if (currentTimerElement) currentTimerElement.textContent = `${testState.timeLeft}s`;
      if (testState.timeLeft <= 0) {
        stopTestTimer();
        moveToNextQuestion();
      }
    }, 1000);
  }

  function finishTest() {
    stopTestTimer();
    const total = testState.questions.length || 0;
    const correct = testState.correctCount;
    const percentage = total ? Math.round((correct / total) * 100) : 0;
    const status = percentage >= 75 ? "LULUS ✅" : "TIDAK LULUS ❌";
    openInfoModal(`Hasil Test ${testState.type.toUpperCase()} ${testState.level}<br><strong>${correct}/${total}</strong> • <strong>${percentage}%</strong><br>${status}`);
    testState.active = false;
    viewMode = "vocab";
    render();
  }

  function moveToNextQuestion() {
    if (!testState.active) return;
    testState.currentIndex += 1;
    testState.answered = false;
    if (testState.currentIndex >= testState.questions.length) {
      finishTest();
      return;
    }
    renderCurrentTestQuestion();
  }

  function renderCurrentTestQuestion() {
    grid.innerHTML = "";
    const question = testState.questions[testState.currentIndex];
    const options = shuffle(question.options);
    const isKanji = testState.type === "kanji";
    const board = document.createElement("div");
    board.className = "test-board";
    board.innerHTML = `
      <header class="test-header">
        <p class="test-progress">Soal ${testState.currentIndex + 1}/${testState.questions.length}</p>
        <p class="test-timer" id="testTimer">30s</p>
      </header>
      <div class="test-question-card">
        <h2>${isKanji ? question.kanji : question.pattern}</h2>
      </div>
      <div class="test-option-grid"></div>
      <button class="action-btn finish-test-btn" type="button">Selesai Test</button>
    `;
    const optionGrid = board.querySelector(".test-option-grid");
    options.forEach((opt) => {
      const btn = document.createElement("button");
      btn.className = "test-option-btn";
      btn.textContent = isKanji ? opt.meaning : opt.meaning;
      btn.dataset.correct = opt.correct ? "true" : "false";
      optionGrid.appendChild(btn);
    });
    grid.appendChild(board);
    startQuestionTimer(30);
    optionGrid.addEventListener("click", (event) => {
      const btn = event.target.closest(".test-option-btn");
      if (!btn || testState.answered) return;
      testState.answered = true;
      stopTestTimer();
      const correct = btn.dataset.correct === "true";
      if (correct) testState.correctCount += 1;
      Array.from(optionGrid.children).forEach((optBtn) => {
        optBtn.disabled = true;
        if (optBtn.dataset.correct === "true") optBtn.classList.add("correct");
        else optBtn.classList.add("wrong");
      });
      setTimeout(moveToNextQuestion, 1500);
    });
    board.querySelector(".finish-test-btn").addEventListener("click", finishTest);
  }

  function startTest(level, kind) {
    viewMode = `test:${kind}:${level}`;
    testState.active = true;
    testState.type = kind;
    testState.level = level;
    testState.correctCount = 0;
    testState.currentIndex = 0;
    testState.answered = false;
    let sourceData;
    if (kind === "kanji") {
      sourceData = typeof vocabularyData !== "undefined" ? vocabularyData.filter((word) => word.level === level) : [];
    } else if (kind === "bunpou") {
      sourceData = typeof patternData !== "undefined" ? patternData[level] || [] : [];
    }
    if (!sourceData || !sourceData.length) {
      openInfoModal("Tidak ada data untuk test ini.");
      testState.active = false;
      viewMode = "vocab";
      render();
      return;
    }
    const questions = shuffle(sourceData).slice(0, 10).map((item) => {
      const correctOption = { ...item, correct: true };
      const wrongOptions = shuffle(sourceData.filter((w) => (w.kanji !== item.kanji || w.pattern !== item.pattern))).slice(0, 3).map((w) => ({ ...w, correct: false }));
      return { ...item, options: shuffle([correctOption, ...wrongOptions]) };
    });
    testState.questions = questions;
    renderCurrentTestQuestion();
  }

  function renderLetterPoster(script) {
    grid.innerHTML = "";
    const data = letterSets[script];
    if (!data) return;
    const poster = document.createElement("article");
    poster.className = "letter-poster";
    poster.innerHTML = `<h2>${data.title}</h2><div class="letter-poster-body"></div>`;
    data.sections.forEach((section) => {
      const secElem = document.createElement("div");
      secElem.className = "letter-section";
      secElem.innerHTML = `<h3>${section.subtitle}</h3>`;
      section.rows.forEach((row) => {
        const rowElem = document.createElement("div");
        rowElem.className = "letter-row";
        rowElem.style.setProperty("--cols", row.length);
        row.forEach((cell) => {
          const cellElem = document.createElement("div");
          cellElem.className = cell ? "letter-cell" : "letter-label";
          cellElem.textContent = cell || "";
          rowElem.appendChild(cellElem);
        });
        secElem.appendChild(rowElem);
      });
      poster.querySelector(".letter-poster-body").appendChild(secElem);
    });
    grid.appendChild(poster);
    if(resultInfo) resultInfo.textContent = "";
  }

  function renderPatternPoster(level) {
    grid.innerHTML = "";
    const patterns = typeof patternData !== "undefined" ? patternData[level] || [] : [];
    if (!patterns.length) {
      grid.innerHTML = '<div class="empty-state">Tidak ada pola kalimat untuk level ini.</div>';
      if(resultInfo) resultInfo.textContent = "0 pola ditemukan";
      return;
    }
    patterns.forEach((pattern) => {
      const card = document.createElement("article");
      card.className = "pattern-card";
      card.innerHTML = `
        <div class="pattern-title">${pattern.pattern}</div>
        <div class="pattern-example">${pattern.example}</div>
        <div class="pattern-meaning">${pattern.meaning}</div>
        <button class="pattern-audio-btn" type="button" data-text="${pattern.example}" aria-label="Putar audio pola">▶</button>
      `;
      grid.appendChild(card);
    });
    if(resultInfo) resultInfo.textContent = `${patterns.length} pola ditampilkan • ${level}`;
  }

  function getRecommendations(word) {
    if (typeof vocabularyData === "undefined") return [];
    const maxItems = 10;
    const sameType = vocabularyData.filter((w) => w.type === word.type && w.kanji !== word.kanji && w.level === word.level);
    const fallback = vocabularyData.filter((w) => w.kanji !== word.kanji && w.level === word.level);
    const source = sameType.length >= maxItems ? sameType : fallback;
    return shuffle(source).slice(0, maxItems);
  }

  function openModal(word) {
    if (!word) return;
    modalSubtitle.style.display = "block";
    recommendationRow.style.display = "flex";
    expandedCard.innerHTML = cardImageTemplate(word, true);
    recommendationRow.innerHTML = "";
    getRecommendations(word).forEach((item) => {
      const recBtn = document.createElement("article");
      recBtn.className = "recommendation-item";
      recBtn.setAttribute("role", "button");
      recBtn.setAttribute("tabindex", "0");
      recBtn.innerHTML = `
        <span class="rec-kanji">${item.kanji || "—"}</span>
        <span class="rec-kana">${item.kana || "—"}</span>
        <button class="rec-audio-btn" type="button" data-text="${item.kana || ""}" aria-label="Putar audio ${item.kanji || item.kana || ''}">▶</button>
      `;
      recBtn.addEventListener("click", () => openModal(item));
      recBtn.addEventListener("keydown", (event) => {
        if (event.key === "Enter" || event.key === " ") {
          event.preventDefault();
          openModal(item);
        }
      });
      recommendationRow.appendChild(recBtn);
    });
    kanjiModal.classList.add("active");
    kanjiModal.setAttribute("aria-hidden", "false");
  }

  function closeModal() {
    stopTestTimer();
    kanjiModal.classList.remove("active");
    kanjiModal.setAttribute("aria-hidden", "true");
    if (window.speechSynthesis) window.speechSynthesis.cancel();
  }

  modalClose.addEventListener("click", closeModal);
  modalBackdrop.addEventListener("click", closeModal);
  kanjiModal.addEventListener("click", (e) => {
    if (!e.target.closest(".kanji-modal-content")) {
      closeModal();
    }
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      closeModal();
      closeSidebar();
    }
  });

  let originalOverflow = '';
  let originalPosition = '';
  let originalTop = '';
  let originalWidth = '';
  let savedScrollPosition = 0;

  hamburger.addEventListener("click", () => {
    const isActive = sidebar.classList.toggle("active");
    overlay.classList.toggle("active", isActive);
    hamburger.setAttribute("aria-expanded", isActive);
    if (isActive) {
      savedScrollPosition = window.pageYOffset || document.documentElement.scrollTop;
      originalOverflow = document.body.style.overflow || '';
      originalPosition = document.body.style.position || '';
      originalTop = document.body.style.top || '';
      originalWidth = document.body.style.width || '';
      document.body.style.overflow = 'hidden';
      document.body.style.position = 'fixed';
      document.body.style.top = `-${savedScrollPosition}px`;
      document.body.style.width = '100%';
      document.documentElement.style.overflow = 'hidden';
    } else {
      closeSidebar();
    }
  });

  overlay.addEventListener("click", closeSidebar);

  function closeSidebar() {
    sidebar.classList.remove("active");
    overlay.classList.remove("active");
    hamburger.setAttribute("aria-expanded", "false");

    document.body.style.overflow = originalOverflow || '';
    document.body.style.position = originalPosition || '';
    document.body.style.top = originalTop || '';
    document.body.style.width = originalWidth || '';
    document.documentElement.style.overflow = '';

    if (typeof savedScrollPosition === 'number') {
      window.scrollTo(0, savedScrollPosition);
    }

    setTimeout(() => {
      document.body.style.position = '';
      document.body.style.overflow = '';
      document.documentElement.style.overflow = '';
    }, 80);
  }

  grid.addEventListener("click", (event) => {
    const audioButton = event.target.closest(".play-audio-btn, .pattern-audio-btn, .rec-audio-btn, .wide-play-btn");
    if (audioButton) {
      event.preventDefault();
      event.stopPropagation();
      speakWord(audioButton.dataset.text || "");
      return;
    }
  });

  recommendationRow.addEventListener("click", (event) => {
    const audioButton = event.target.closest(".rec-audio-btn");
    if (audioButton) {
      event.preventDefault();
      event.stopPropagation();
      speakWord(audioButton.dataset.text || "");
    }
  });

  expandedCard.addEventListener("click", (event) => {
    const audioButton = event.target.closest(".play-audio-btn");
    if (audioButton) {
      event.preventDefault();
      event.stopPropagation();
      speakWord(audioButton.dataset.text || "");
    }
  });

  document.querySelectorAll(".sidebar-filter-btn").forEach((button) => {
    button.addEventListener("click", () => {
      viewMode = "vocab";
      selectedLevel = button.dataset.level || "all";
      selectedType = button.dataset.type || "all";
      if (selectedType !== "all" && category) category.value = selectedType;
      if (search) search.value = "";
      render();
      closeSidebar();
    });
  });

  document.querySelectorAll(".letter-btn").forEach((button) => {
    button.addEventListener("click", () => {
      viewMode = `letters:${button.dataset.script}`;
      if (search) search.value = "";
      closeModal();
      render();
      closeSidebar();
    });
  });

  document.querySelectorAll(".pattern-btn").forEach((button) => {
  button.addEventListener("click", () => {
    const level = button.dataset.level;

    // Jika user klik N3, N2, atau N1 di menu Pola Kalimat
    if (["N3", "N2", "N1"].includes(level)) {
      // Formatnya: dev : mode : tipe_materi : level
      // Kita pakai mode 'pattern' agar fungsinya nulis "Pola Kalimat"
      viewMode = `dev:pattern:Pola Kalimat:${level}`; 
      render();
      closeSidebar();
      return;
    }

    // Jika N5 atau N4 (Normal)
    viewMode = `patterns:${level}`;
    render();
    closeSidebar();
  });
});
  
  document.querySelectorAll(".test-btn").forEach((button) => {
    button.addEventListener("click", () => {
      const level = button.dataset.level;
      const kind = button.dataset.kind;
      if (["N3", "N2", "N1"].includes(level)) {
        openInfoModal("Mohon maaf, fitur test level ini masih dalam proses pengembangan. Silakan kembali lagi nanti ✨");
        closeSidebar();
        return;
      }
      startTest(level, kind);
      closeSidebar();
    });
  });

  document.getElementById("logo")?.addEventListener("click", () => {
    selectedLevel = "all";
    selectedType = "all";
    if (category) category.value = "all";
    if (search) search.value = "";
    viewMode = "vocab";
    render();
  });

  document.getElementById("supportBtn")?.addEventListener("click", () => {
    viewMode = "support";
    if (search) search.value = "";
    if (category) category.value = "all";
    render();
    closeSidebar();
  });

  document.querySelectorAll(".exercise-btn").forEach((button) => {
  button.addEventListener("click", () => {
    const type = button.dataset.type; // kanji, bunpou, dll
    const level = button.dataset.level; // N5, N4, dll

    if (["N3", "N2", "N1"].includes(level)) {
      // Simpan format dev:mode:type:level
      viewMode = `dev:exercise:${type}:${level}`; 
      render();
      closeSidebar();
      return;
    }

    // Jalankan fungsi startExercise normal untuk N5/N4
    startExercise(type, level);
    closeSidebar();
  });
});
  
  function renderSupportPoster() {
    grid.classList.add("support-mode");
    grid.innerHTML = `
      <section class="support-poster">
        <h2>Dukung Pengembang</h2>
        <p>Nihonbyte dibuat dengan semangat berbagi ilmu Bahasa Jepang secara gratis dan terbuka untuk semua pembelajar.</p>
        <p>Dukungan Anda membantu menjaga proyek ini tetap hidup, berkembang, dan bisa menjangkau lebih banyak orang di masa depan, tanpa iklan, tanpa batasan akses.</p>
        <p>Setiap bentuk dukungan, sekecil apa pun, berarti kami bisa terus menambah materi baru, memperbaiki fitur, dan membangun komunitas belajar yang lebih baik.</p>
        <p>Terima kasih telah menjadi bagian dari perjalanan ini.</p>
        <a href="https://sociabuzz.com/syncxcode/tribe" target="_blank" rel="noopener noreferrer" class="support-btn">Klik Disini</a>
      </section>
    `;
    if(resultInfo) resultInfo.textContent = "Terima kasih atas dukungan Anda ✨";
  }

  function renderUnderDevelopment(mode, type, level) {
  grid.classList.remove("support-mode");
  grid.innerHTML = "";

  // Menentukan judul berdasarkan mode
  const titlePrefix = mode === "exercise" ? "Latihan" : "Pola Kalimat";
  
  const container = document.createElement("div");
  container.className = "empty-state";
  container.style.padding = "40px 20px";
  container.style.marginTop = "20px";

  container.innerHTML = `
    <div style="text-align: center;">
      <h2 style="color: #ff4d6d; margin-bottom: 20px;">🚧 ${titlePrefix} ${type}-${level} 🚧</h2>
      <p style="font-size: 1.2rem; font-weight: 600; color: #1f2937; margin-bottom: 10px;">
        Kategori yang anda pilih, masih dalam proses Pengembangan, silahkan kembali lagi nanti.
      </p>
      <p style="font-style: italic; color: #4b5563; margin-bottom: 25px;">
        The category you selected is still under development, please come back later.
      </p>
      <p style="font-size: 1.4rem; font-weight: 800; color: #ff4d6d; line-height: 1.6;">
        選択されたカテゴリーは現在開発中です。<br>後ほどもう一度ご確認ください。
      </p>
    </div>
  `;

  grid.appendChild(container);
  if (resultInfo) resultInfo.textContent = `${titlePrefix} ${type}-${level} (Coming Soon)`;
}
  
  // ==========================================
  // INI ADALAH FUNGSI RENDER() YANG BENAR
  // (Sudah mencakup semua logika dari awal sampai akhir)
  // ==========================================
  function render() {
    grid.classList.remove("support-mode");
    grid.innerHTML = "";

    if (viewMode === "support") {
      renderSupportPoster();
      return;
    }

    const isExpressionView =
      viewMode === "vocab" &&
      (category?.value === "ekspresi" ||
       selectedType === "ekspresi" ||
       selectedType === "expression" ||
       selectedType === "ungkapan umum");
    
    if (viewMode.startsWith("dev:")) {
    const parts = viewMode.split(":"); 
    // parts[1] = mode (exercise/pattern)
    // parts[2] = type (kanji/bunpou)
    // parts[3] = level (N3/N2/N1)
    renderUnderDevelopment(parts[1], parts[2], parts[3]);
    return;
  }
    
    if (isExpressionView) {
      renderExpressionPoster();
      return;
    }

    if (viewMode.startsWith("letters:")) {
      renderLetterPoster(viewMode.split(":")[1]);
      return;
    }

    if (viewMode.startsWith("patterns:")) {
      renderPatternPoster(viewMode.split(":")[1]);
      return;
    }

    if (viewMode.startsWith("test:")) {
      if (!testState.active) return;
      renderCurrentTestQuestion();
      return;
    }

    // ==== BAGIAN INI YANG SEBELUMNYA KESASAR KE BAWAH FILE ====
    const words = getFilteredWords();
    
    if (!words.length) {
      grid.innerHTML = '<div class="empty-state">Belum ada hasil untuk kombinasi folder/kategori ini.</div>';
      if (resultInfo) {
        resultInfo.textContent = "0 kata ditemukan";
      }
      return;
    }

    const fragment = document.createDocumentFragment();
    words.forEach((word) => {
      const cardButton = document.createElement("article");
      cardButton.className = "card";
      cardButton.setAttribute("role", "button");
      cardButton.setAttribute("tabindex", "0");
      cardButton.setAttribute("aria-label", `Lihat detail ${word.kanji || word.kana || 'kata'}`);
      
      try {
        cardButton.dataset.word = JSON.stringify(word);
      } catch (err) {
        console.warn("Gagal menyimpan data word:", word);
        return;
      }
      
      cardButton.innerHTML = cardImageTemplate(word);
      
      cardButton.addEventListener("click", (e) => {
        if (e.target.closest(".play-audio-btn")) return;
        try {
          const storedWord = JSON.parse(cardButton.dataset.word);
          openModal(storedWord);
        } catch (err) {
          console.error("Gagal membaca data kartu:", err);
        }
      });
      
      cardButton.addEventListener("keydown", (event) => {
        if (event.key === "Enter" || event.key === " ") {
          event.preventDefault();
          try {
            const storedWord = JSON.parse(cardButton.dataset.word);
            openModal(storedWord);
          } catch (err) {
            console.error("Gagal membaca data kartu (keyboard):", err);
          }
        }
      });
      
      fragment.appendChild(cardButton);
    });
    
    grid.appendChild(fragment);
    
    const levelText = selectedLevel === "all" ? "Semua level" : selectedLevel;
    if (resultInfo) {
      resultInfo.textContent = `${words.length} kata ditampilkan • ${levelText}`;
    }
  } // <-- Akhir dari fungsi render()

  if (category) {
    category.addEventListener("change", () => {
      viewMode = "vocab";
      selectedType = "all";
      render();
      closeSidebar();
    });
  }

  if (search) {
    search.addEventListener("input", () => {
      viewMode = "vocab";
      render();
    });
  }

  if (document.documentElement.classList.contains('ios-device')) {
    sidebar.classList.remove("active");
    overlay.classList.remove("active");
    if(hamburger) hamburger.setAttribute("aria-expanded", "false");
    
    document.body.style.position = '';
    document.body.style.top = '';
    document.body.style.overflow = '';
    document.documentElement.style.overflow = '';
  }
  
  sidebar.addEventListener('click', function(e) {
    if (e.target.closest('button') || 
        e.target.closest('a') || 
        e.target.closest('[role="button"]')) {
      closeSidebar();
    }
  }, { capture: true });

  // Panggil render saat pertama kali dimuat
  render();
});
