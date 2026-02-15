document.addEventListener("DOMContentLoaded", () => {

  // ==================== ELEMENT REFERENCES ====================
  const grid = document.getElementById("grid");
  const search = document.getElementById("search");
  const hamburger = document.getElementById("hamburger");
  const sidebar = document.getElementById("sidebar");
  const overlay = document.getElementById("overlay");
  const resultInfo = document.getElementById("resultInfo");
  const resetFilterButton = document.getElementById("resetFilter");
  const sidebarFilterButtons = document.querySelectorAll(".sidebar-filter-btn");
  const letterButtons = document.querySelectorAll(".letter-btn");
  const patternButtons = document.querySelectorAll(".pattern-btn");
  const testButtons = document.querySelectorAll(".test-btn");
  const logoTitle = document.getElementById("logoTitle");
  const categoryBtn = document.getElementById("categoryBtn");
  const categoryDropdown = document.getElementById("categoryDropdown");
  const kanjiModal = document.getElementById("kanjiModal");
  const modalBackdrop = document.getElementById("modalBackdrop");
  const modalClose = document.getElementById("modalClose");
  const expandedCard = document.getElementById("expandedCard");
  const recommendationRow = document.getElementById("recommendationRow");
  const modalSubtitle = document.getElementById("modalSubtitle");

  // ==================== STATE ====================
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

  // ==================== LETTER SETS (POSTER HURUF) ====================
  const letterSets = {
    hiragana: {
      title: "Poster Hiragana",
      sections: [
        { subtitle: "Gojūon", rows: [
          ["A", "あ", "か", "さ", "た", "な", "は", "ま", "や", "ら", "わ", "ん"],
          ["I", "い", "き", "し", "ち", "に", "ひ", "み", "", "り", "", ""],
          ["U", "う", "く", "す", "つ", "ぬ", "ふ", "む", "ゆ", "る", "", ""],
          ["E", "え", "け", "せ", "て", "ね", "へ", "め", "", "れ", "", ""],
          ["O", "お", "こ", "そ", "と", "の", "ほ", "も", "よ", "ろ", "を", ""],
        ]},
        { subtitle: "Dakuon & Handakuon", rows: [
          ["A", "が", "ざ", "だ", "ば", "ぱ"],
          ["I", "ぎ", "じ", "ぢ", "び", "ぴ"],
          ["U", "ぐ", "ず", "づ", "ぶ", "ぷ"],
          ["E", "げ", "ぜ", "で", "べ", "ぺ"],
          ["O", "ご", "ぞ", "ど", "ぼ", "ぽ"],
        ]},
        { subtitle: "Yōon", rows: [
          ["YA", "きゃ", "しゃ", "ちゃ", "にゃ", "ひゃ", "みゃ", "りゃ", "ぎゃ", "じゃ", "びゃ", "ぴゃ"],
          ["YU", "きゅ", "しゅ", "ちゅ", "にゅ", "ひゅ", "みゅ", "りゅ", "ぎゅ", "じゅ", "びゅ", "ぴゅ"],
          ["YO", "きょ", "しょ", "ちょ", "にょ", "ひょ", "みょ", "りょ", "ぎょ", "じょ", "びょ", "ぴょ"],
        ]},
      ],
    },
    katakana: {
      title: "Poster Katakana",
      sections: [
        { subtitle: "Gojūon", rows: [
          ["A", "ア", "カ", "サ", "タ", "ナ", "ハ", "マ", "ヤ", "ラ", "ワ", "ン"],
          ["I", "イ", "キ", "シ", "チ", "ニ", "ヒ", "ミ", "", "リ", "", ""],
          ["U", "ウ", "ク", "ス", "ツ", "ヌ", "フ", "ム", "ユ", "ル", "", ""],
          ["E", "エ", "ケ", "セ", "テ", "ネ", "ヘ", "メ", "", "レ", "", ""],
          ["O", "オ", "コ", "ソ", "ト", "ノ", "ホ", "モ", "ヨ", "ロ", "ヲ", ""],
        ]},
        { subtitle: "Dakuon & Handakuon", rows: [
          ["A", "ガ", "ザ", "ダ", "バ", "パ"],
          ["I", "ギ", "ジ", "ヂ", "ビ", "ピ"],
          ["U", "グ", "ズ", "ヅ", "ブ", "プ"],
          ["E", "ゲ", "ゼ", "デ", "ベ", "ペ"],
          ["O", "ゴ", "ゾ", "ド", "ボ", "ポ"],
        ]},
        { subtitle: "Yōon", rows: [
          ["YA", "キャ", "シャ", "チャ", "ニャ", "ヒャ", "ミャ", "リャ", "ギャ", "ジャ", "ビャ", "ピャ"],
          ["YU", "キュ", "シュ", "チュ", "ニュ", "ヒュ", "ミュ", "リュ", "ギュ", "ジュ", "ビュ", "ピュ"],
          ["YO", "キョ", "ショ", "チョ", "ニョ", "ヒョ", "ミョ", "リョ", "ギョ", "ジョ", "ビョ", "ピョ"],
        ]},
      ],
    },
  };

  // ==================== HELPER FUNCTIONS ====================
  function speakWord(text) {
    if (!window.speechSynthesis) return;
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = "ja-JP";
    utterance.rate = 0.95;
    window.speechSynthesis.cancel();
    window.speechSynthesis.speak(utterance);
  }

  function closeSidebar() {
    sidebar.classList.remove("active");
    overlay.classList.remove("active");
    hamburger.setAttribute("aria-expanded", "false");
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
      return wordType.startsWith("verb-irregular") || wordType.startsWith("verb-suru") || wordType === "suru";
    }
    return wordType.startsWith(targetType);
  }

  function getFilteredWords() {
    const key = search.value.toLowerCase().trim();
    return vocabularyData.filter((word) => {
      if (selectedLevel !== "all" && word.level !== selectedLevel) return false;
      if (selectedType !== "all" && !matchType(word.type, selectedType)) return false;
      const text = `${word.kanji}${word.kana}${word.romaji || ""}${word.meaning}`.toLowerCase();
      return !key || text.includes(key);
    });
  }

  function cardImageTemplate(word, expanded = false) {
    const expandedClass = expanded ? "expanded" : "";
    return `
      <div class="card-image ${expandedClass}">
        <img src="./assets/header.jpg" alt="Kartu ilustrasi ${word.kanji}">
        <button class="play-audio-btn" type="button" data-text="${word.kana}" aria-label="Putar audio ${word.kanji}">▶</button>
        <div class="card-overlay">
          <div class="kanji">${word.kanji}</div>
          <div class="kana">${word.kana}</div>
          <div class="romaji">${word.romaji || ""}</div>
          <div class="meaning">${word.meaning}</div>
        </div>
      </div>
    `;
  }

  function shuffle(array) {
    const copy = [...array];
    for (let i = copy.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [copy[i], copy[j]] = [copy[j], copy[i]];
    }
    return copy;
  }

  function stopTestTimer() {
    if (!testState.timerId) return;
    clearInterval(testState.timerId);
    testState.timerId = null;
  }

  function startQuestionTimer(seconds) {
    stopTestTimer();
    testState.timeLeft = seconds;
    const timerElement = document.getElementById("testTimer");
    if (timerElement) timerElement.textContent = `${testState.timeLeft}s`;

    testState.timerId = setInterval(() => {
      testState.timeLeft--;
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
    const total = testState.questions.length;
    const correct = testState.correctCount;
    const percentage = total ? Math.round((correct / total) * 100) : 0;
    const status = percentage >= 75 ? "LULUS ✅" : "TIDAK LULUS ❌";
    openInfoModal(`Hasil Test ${testState.type.toUpperCase()} ${testState.level}<br><strong>${correct}/${total}</strong> • <strong>${percentage}%</strong><br>${status}`);
    testState.active = false;
    viewMode = "vocab";
  }

  function moveToNextQuestion() {
    if (!testState.active) return;
    testState.currentIndex++;
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
      <div class="test-question-card"><h2>${isKanji ? question.kanji : question.pattern}</h2></div>
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
      if (correct) testState.correctCount++;
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

    let sourceData = kind === "kanji" 
      ? vocabularyData.filter(w => w.level === level) 
      : (patternData[level] || []);

    if (!sourceData.length) {
      openInfoModal("Tidak ada data untuk test ini.");
      testState.active = false;
      viewMode = "vocab";
      return;
    }

    const questions = shuffle(sourceData).slice(0, 10).map(item => {
      const correctOption = { ...item, correct: true };
      const wrongOptions = shuffle(sourceData.filter(w => 
        (kind === "kanji" ? w.kanji !== item.kanji : w.pattern !== item.pattern)
      )).slice(0, 3).map(w => ({ ...w, correct: false }));
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

    data.sections.forEach(section => {
      const secElem = document.createElement("div");
      secElem.className = "letter-section";
      secElem.innerHTML = `<h3>${section.subtitle}</h3>`;

      section.rows.forEach(row => {
        const rowElem = document.createElement("div");
        rowElem.className = "letter-row";
        rowElem.style.setProperty("--cols", row.length);

        row.forEach(cell => {
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
    patterns.forEach(pattern => {
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
    const sameType = vocabularyData.filter(w => w.type === word.type && w.kanji !== word.kanji && w.level === word.level);
    const fallback = vocabularyData.filter(w => w.kanji !== word.kanji && w.level === word.level);
    const source = sameType.length >= maxItems ? sameType : fallback;
    return shuffle(source).slice(0, maxItems);
  }

  function openModal(word) {
    modalSubtitle.style.display = "block";
    recommendationRow.style.display = "flex";
    expandedCard.innerHTML = cardImageTemplate(word, true);
    recommendationRow.innerHTML = "";

    getRecommendations(word).forEach(item => {
      const recBtn = document.createElement("article");
      recBtn.className = "recommendation-item";
      recBtn.setAttribute("role", "button");
      recBtn.setAttribute("tabindex", "0");
      recBtn.innerHTML = `
        <span class="rec-kanji">${item.kanji}</span>
        <span class="rec-kana">${item.kana}</span>
        <button class="rec-audio-btn" type="button" data-text="${item.kana}" aria-label="Putar audio ${item.kanji}">▶</button>
      `;
      recBtn.addEventListener("click", () => openModal(item));
      recBtn.addEventListener("keydown", (e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
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

  // ==================== RENDER UTAMA ====================
  function render() {
    grid.innerHTML = "";

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

    const words = getFilteredWords();
    if (!words.length) {
      grid.innerHTML = '<div class="empty-state">Belum ada hasil untuk kombinasi filter ini.</div>';
      resultInfo.textContent = "0 kata ditemukan";
      return;
    }

    const fragment = document.createDocumentFragment();
    words.forEach(word => {
      const cardButton = document.createElement("article");
      cardButton.className = "card";
      cardButton.setAttribute("role", "button");
      cardButton.setAttribute("tabindex", "0");
      cardButton.setAttribute("aria-label", `Lihat detail ${word.kanji}`);
      cardButton.dataset.word = JSON.stringify(word);
      cardButton.innerHTML = cardImageTemplate(word);

      cardButton.addEventListener("click", e => {
        if (e.target.closest(".play-audio-btn")) return;
        const storedWord = JSON.parse(cardButton.dataset.word);
        openModal(storedWord);
      });
      cardButton.addEventListener("keydown", e => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          const storedWord = JSON.parse(cardButton.dataset.word);
          openModal(storedWord);
        }
      });
      fragment.appendChild(cardButton);
    });

    grid.appendChild(fragment);
    const levelText = selectedLevel === "all" ? "Semua level" : selectedLevel;
    resultInfo.textContent = `${words.length} kata ditampilkan • ${levelText}`;
  }

  // ==================== EVENT LISTENERS ====================
  search.addEventListener("input", () => { viewMode = "vocab"; render(); });

  hamburger.addEventListener("click", () => {
    const active = sidebar.classList.toggle("active");
    overlay.classList.toggle("active", active);
    hamburger.setAttribute("aria-expanded", active ? "true" : "false");
  });

  overlay.addEventListener("click", closeSidebar);
  modalBackdrop.addEventListener("click", closeModal);
  modalClose.addEventListener("click", closeModal);

  grid.addEventListener("click", event => {
    const audioBtn = event.target.closest(".play-audio-btn, .pattern-audio-btn");
    if (audioBtn) {
      event.preventDefault();
      event.stopPropagation();
      speakWord(audioBtn.dataset.text || "");
    }
  });

  recommendationRow.addEventListener("click", event => {
    const audioBtn = event.target.closest(".rec-audio-btn");
    if (audioBtn) speakWord(audioBtn.dataset.text || "");
  });

  expandedCard.addEventListener("click", event => {
    const audioBtn = event.target.closest(".play-audio-btn");
    if (audioBtn) speakWord(audioBtn.dataset.text || "");
  });

  sidebarFilterButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      viewMode = "vocab";
      selectedLevel = btn.dataset.level || "all";
      selectedType = btn.dataset.type || "all";
      search.value = "";
      render();
      closeSidebar();
    });
  });

  letterButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      viewMode = `letters:${btn.dataset.script}`;
      search.value = "";
      closeModal();
      render();
      closeSidebar();
    });
  });

  patternButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      const level = btn.dataset.level;
      if (["N3","N2","N1"].includes(level)) {
        openInfoModal("Mohon maaf, materi pola kalimat level ini sedang dalam proses pengembangan.");
        closeSidebar();
        return;
      }
      viewMode = `patterns:${level}`;
      search.value = "";
      render();
      closeSidebar();
    });
  });

  testButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      const level = btn.dataset.level;
      const kind = btn.dataset.kind;
      if (["N3","N2","N1"].includes(level)) {
        openInfoModal("Mohon maaf, fitur test level ini masih dalam proses pengembangan.");
        closeSidebar();
        return;
      }
      startTest(level, kind);
      closeSidebar();
    });
  });

  resetFilterButton.addEventListener("click", () => {
    selectedLevel = "all";
    selectedType = "all";
    search.value = "";
    render();
  });

  logoTitle.addEventListener("click", () => {
    selectedLevel = "all";
    selectedType = "all";
    search.value = "";
    render();
  });

  categoryBtn.addEventListener("click", e => {
    e.stopPropagation();
    categoryDropdown.classList.toggle("show");
  });

  document.addEventListener("click", () => categoryDropdown.classList.remove("show"));

  categoryDropdown.addEventListener("click", e => {
    const item = e.target.closest("button, .dropdown-item");
    if (!item) return;
    viewMode = "vocab";
    selectedLevel = item.dataset.level || "all";
    selectedType = item.dataset.type || "all";
    search.value = "";
    render();
    categoryDropdown.classList.remove("show");
  });

  document.querySelectorAll(".maintenance").forEach(btn => {
    btn.addEventListener("click", () => {
      openInfoModal("Mohon Maaf, fitur ini masih dalam pengembangan.<br>Silahkan kembali lagi nanti 🔧");
      closeSidebar();
    });
  });

  document.addEventListener("keydown", e => {
    if (e.key === "Escape") {
      closeModal();
      closeSidebar();
    }
  });

  // Render pertama
  render();
});
