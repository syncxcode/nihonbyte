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

// ===== IOS DETECTOR - SEMUA iOS DEVICE (Safari + Chrome iOS) =====
  function isIOS() {
    return /iPad|iPhone|iPod/.test(navigator.platform) ||
           (navigator.platform === 'MacIntel' && 'ontouchend' in document);
  }

if (isIOS()) {
  document.documentElement.classList.add('ios-device');
  console.log('🛡️ NihonByte iOS Safe Mode AKTIF');

  // 🔥 Disable heavy animation
  const style = document.createElement("style");
  style.innerHTML = `
    * {
      animation: none !important;
      transition: none !important;
    }
  `;
  document.head.appendChild(style);

  // 🔥 Hindari body fixed crash
  document.body.style.webkitOverflowScrolling = "touch";

  // 🔥 Batasi repaint besar saat resize
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
      return wordType === targetType;
    }
    if (targetType === "ekspresi" || targetType === "expression" || targetType === "ungkapan umum") {
      return ["expression", "ekspresi", "ungkapan umum"].includes(wordType);
    }
    return wordType?.startsWith(targetType) || false;
  }

  function getFilteredWords() {
    const key = (search.value || "").toLowerCase().trim();
    const selectedFromDropdown = category.value;
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
    const expressions = vocabularyData.filter(w =>
      w.type === "expression" || w.type === "ekspresi" || w.type === "ungkapan umum"
    );
    if (!expressions.length) {
      grid.innerHTML = '<div class="empty-state">Belum ada ungkapan umum.</div>';
      resultInfo.textContent = "0 ungkapan ditemukan";
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
          try {
            openModal(JSON.parse(card.dataset.word));
          } catch {}
        }
      });
      container.appendChild(card);
    });
    grid.appendChild(container);
    resultInfo.textContent = `${expressions.length} ungkapan ditampilkan • ${selectedLevel === "all" ? "Semua level" : selectedLevel}`;
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
      sourceData = vocabularyData.filter((word) => word.level === level);
    } else if (kind === "bunpou") {
      sourceData = patternData[level] || [];
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
    resultInfo.textContent = "";
  }

  function renderPatternPoster(level) {
    grid.innerHTML = "";
    const patterns = patternData[level] || [];
    if (!patterns.length) {
      grid.innerHTML = '<div class="empty-state">Tidak ada pola kalimat untuk level ini.</div>';
      resultInfo.textContent = "0 pola ditemukan";
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
    resultInfo.textContent = `${patterns.length} pola ditampilkan • ${level}`;
  }

  function getRecommendations(word) {
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
    document.body.style.overflow = originalOverflow;
    document.body.style.position = originalPosition;
    document.body.style.top = originalTop;
    document.body.style.width = originalWidth;
    window.scrollTo(0, savedScrollPosition);
    document.documentElement.style.overflow = '';
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
      if (selectedType !== "all") category.value = selectedType;
      search.value = "";
      render();
      closeSidebar();
    });
  });

  document.querySelectorAll(".letter-btn").forEach((button) => {
    button.addEventListener("click", () => {
      viewMode = `letters:${button.dataset.script}`;
      search.value = "";
      closeModal();
      render();
      closeSidebar();
    });
  });

  document.querySelectorAll(".pattern-btn").forEach((button) => {
    button.addEventListener("click", () => {
      const level = button.dataset.level;
      if (["N3", "N2", "N1"].includes(level)) {
        openInfoModal("Mohon maaf, materi pola kalimat level ini sedang dalam proses pengembangan. Silakan kembali lagi nanti ✨");
        closeSidebar();
        return;
      }
      viewMode = `patterns:${level}`;
      search.value = "";
      category.value = "all";
      closeModal();
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
    category.value = "all";
    search.value = "";
    viewMode = "vocab";
    render();
  });

  // Dukung Pengembang - listener
  document.getElementById("supportBtn").addEventListener("click", () => {
    viewMode = "support";
    search.value = "";
    category.value = "all";
    render();
    closeSidebar();
  });

function renderSupportPoster() {
  // Aktifkan mode khusus support (biar keluar dari grid layout)
  grid.classList.add("support-mode");

grid.innerHTML = `
    <section class="support-poster">

      <h2>Dukung Pengembang</h2>

      <p>
        Nihonbyte dibuat dengan semangat berbagi ilmu Bahasa Jepang secara gratis 
        dan terbuka untuk semua pembelajar.
      </p>

      <p>
        Dukungan Anda membantu menjaga proyek ini tetap hidup, berkembang, dan 
        bisa menjangkau lebih banyak orang di masa depan, tanpa iklan, tanpa batasan akses.
      </p>

      <p>
        Setiap bentuk dukungan, sekecil apa pun, berarti kami bisa terus menambah materi baru, 
        memperbaiki fitur, dan membangun komunitas belajar yang lebih baik.
      </p>

      <p>
        Terima kasih telah menjadi bagian dari perjalanan ini.
      </p>

      <a 
        href="https://sociabuzz.com/syncxcode/tribe"
        target="_blank"
        rel="noopener noreferrer"
        class="support-btn"
      >
        Klik Disini
      </a>

    </section>
  `;

  resultInfo.textContent = "Terima kasih atas dukungan Anda ✨";
}
  
  function render() {

    // RESET SUPPORT MODE tiap render
    grid.classList.remove("support-mode");
    grid.innerHTML = "";

    // Mode dukungan pengembang
    if (viewMode === "support") {
      renderSupportPoster();
      return;
    }

    // Mode ungkapan umum
    const isExpressionView =
      viewMode === "vocab" &&
      (category.value === "ekspresi" ||
       selectedType === "ekspresi" ||
       selectedType === "expression" ||
       selectedType === "ungkapan umum");
    if (isExpressionView) {
      renderExpressionPoster();
      return;
    }

    // Mode huruf (hiragana/katakana)
    if (viewMode.startsWith("letters:")) {
      renderLetterPoster(viewMode.split(":")[1]);
      return;
    }

    // Mode pola kalimat
    if (viewMode.startsWith("patterns:")) {
      renderPatternPoster(viewMode.split(":")[1]);
      return;
    }

    // Mode test
    if (viewMode.startsWith("test:")) {
      if (!testState.active) return;
      renderCurrentTestQuestion();
      return;
    }

    // Mode vocab normal
    const words = getFilteredWords();
    if (!words.length) {
      grid.innerHTML = '<div class="empty-state">Belum ada hasil untuk kombinasi folder/kategori ini.</div>';
      resultInfo.textContent = "0 kata ditemukan";
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
    resultInfo.textContent = `${words.length} kata ditampilkan • ${levelText}`;
  }

  category.addEventListener("change", () => {
    viewMode = "vocab";
    selectedType = "all";
    render();
  });

  search.addEventListener("input", () => {
    viewMode = "vocab";
    render();
  });

  // Render awal aplikasi
  render();
});

// ===== FORCE CLOSE SIDEBAR SAAT LOAD DI SEMUA iOS =====
if (document.documentElement.classList.contains('ios-device')) {
  console.log('🔧 Force close sidebar on iOS initial load');
  
  sidebar.classList.remove("active");
  overlay.classList.remove("active");
  hamburger.setAttribute("aria-expanded", "false");
  
  // Reset scroll lock
  document.body.style.position = '';
  document.body.style.top = '';
  document.body.style.overflow = '';
  document.documentElement.style.overflow = '';
}
