 document.addEventListener("DOMContentLoaded", () => {
  const grid = document.getElementById("grid");
  const category = document.getElementById("category");
  const search = document.getElementById("search");
  const hamburger = document.getElementById("hamburger");
  const sidebar = document.getElementById("sidebar");
  const overlay = document.getElementById("overlay");
  const resultInfo = document.getElementById("resultInfo");
  const randomWordButton = document.getElementById("randomWord");
  const menuButtons = document.querySelectorAll(".menu-btn[data-action]");
  const sidebarFilterButtons = document.querySelectorAll(".sidebar-filter-btn");
  const letterButtons = document.querySelectorAll(".letter-btn");
  const patternButtons = document.querySelectorAll(".pattern-btn");
  const testButtons = document.querySelectorAll(".test-btn");

  const kanjiModal = document.getElementById("kanjiModal");
  const modalBackdrop = document.getElementById("modalBackdrop");
  const modalClose = document.getElementById("modalClose");
  const expandedCard = document.getElementById("expandedCard");
  const recommendationRow = document.getElementById("recommendationRow");
  const modalSubtitle = document.getElementById("modalSubtitle");

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
            ["A", "あ", "か", "さ", "た", "な", "は", "ま", "や", "ら", "わ", "ん"],
            ["I", "い", "き", "し", "ち", "に", "ひ", "み", "", "り", "", ""],
            ["U", "う", "く", "す", "つ", "ぬ", "ふ", "む", "ゆ", "る", "", ""],
            ["E", "え", "け", "せ", "て", "ね", "へ", "め", "", "れ", "", ""],
            ["O", "お", "こ", "そ", "と", "の", "ほ", "も", "よ", "ろ", "を", ""],
          ],
        },
        {
          subtitle: "Dakuon & Handakuon",
          rows: [
            ["A", "が", "ざ", "だ", "ば", "ぱ"],
            ["I", "ぎ", "じ", "ぢ", "び", "ぴ"],
            ["U", "ぐ", "ず", "づ", "ぶ", "ぷ"],
            ["E", "げ", "ぜ", "で", "べ", "ぺ"],
            ["O", "ご", "ぞ", "ど", "ぼ", "ぽ"],
          ],
        },
        {
          subtitle: "Yōon",
          rows: [
            ["YA", "きゃ", "しゃ", "ちゃ", "にゃ", "ひゃ", "みゃ", "りゃ", "ぎゃ", "じゃ", "びゃ", "ぴゃ"],
            ["YU", "きゅ", "しゅ", "ちゅ", "にゅ", "ひゅ", "みゅ", "りゅ", "ぎゅ", "じゅ", "びゅ", "ぴゅ"],
            ["YO", "きょ", "しょ", "ちょ", "にょ", "ひょ", "みょ", "りょ", "ぎょ", "じょ", "びょ", "ぴょ"],
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
            ["A", "ア", "カ", "サ", "タ", "ナ", "ハ", "マ", "ヤ", "ラ", "ワ", "ン"],
            ["I", "イ", "キ", "シ", "チ", "ニ", "ヒ", "ミ", "", "リ", "", ""],
            ["U", "ウ", "ク", "ス", "ツ", "ヌ", "フ", "ム", "ユ", "ル", "", ""],
            ["E", "エ", "ケ", "セ", "テ", "ネ", "ヘ", "メ", "", "レ", "", ""],
            ["O", "オ", "コ", "ソ", "ト", "ノ", "ホ", "モ", "ヨ", "ロ", "ヲ", ""],
          ],
        },
        {
          subtitle: "Dakuon & Handakuon",
          rows: [
            ["A", "ガ", "ザ", "ダ", "バ", "パ"],
            ["I", "ギ", "ジ", "ヂ", "ビ", "ピ"],
            ["U", "グ", "ズ", "ヅ", "ブ", "プ"],
            ["E", "ゲ", "ゼ", "デ", "ベ", "ペ"],
            ["O", "ゴ", "ゾ", "ド", "ボ", "ポ"],
          ],
        },
        {
          subtitle: "Yōon",
          rows: [
            ["YA", "キャ", "シャ", "チャ", "ニャ", "ヒャ", "ミャ", "リャ", "ギャ", "ジャ", "ビャ", "ピャ"],
            ["YU", "キュ", "シュ", "チュ", "ニュ", "ヒュ", "ミュ", "リュ", "ギュ", "ジュ", "ビュ", "ピュ"],
            ["YO", "キョ", "ショ", "チョ", "ニョ", "ヒョ", "ミョ", "リョ", "ギョ", "ジョ", "ビョ", "ピョ"],
          ],
        },
      ],
    },
  };

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
    const selectedFromDropdown = category.value;

    return vocabularyData.filter((word) => {
      if (selectedLevel !== "all" && word.level !== selectedLevel) return false;

      const effectiveType = selectedType === "all" ? selectedFromDropdown : selectedType;
      if (effectiveType !== "all" && !matchType(word.type, effectiveType)) return false;

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
    for (let i = copy.length - 1; i > 0; i -= 1) {
      const j = Math.floor(Math.random() * (i  1));
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
    testState.currentIndex = 1;
    if (testState.currentIndex >= testState.questions.length) {
      finishTest();
      return;
    }
    renderCurrentTestQuestion();
  }

  function handleAnswer(selectedValue, optionButtons) {
    if (!testState.active || testState.answered) return;
    testState.answered = true;

    const currentQuestion = testState.questions[testState.currentIndex];
    const isCorrect = selectedValue === currentQuestion.correct;
    if (isCorrect) testState.correctCount = 1;

    optionButtons.forEach((button) => {
      button.disabled = true;
      if (button.dataset.value === currentQuestion.correct) button.classList.add("correct");
      if (button.dataset.value === selectedValue && selectedValue !== currentQuestion.correct) button.classList.add("wrong");
    });

    stopTestTimer();
    setTimeout(() => moveToNextQuestion(), 380);
  }

  function renderCurrentTestQuestion() {
    if (!testState.active) return;

    const question = testState.questions[testState.currentIndex];
    const total = testState.questions.length;
    const timerLimit = testState.type === "kanji" ? 5 : 30;
    testState.answered = false;

    grid.innerHTML = `
      <section class="test-board">
        <div class="test-header">
          <p class="test-progress">Soal ${testState.currentIndex  1}/${total} • ${testState.type.toUpperCase()} ${testState.level}</p>
          <p class="test-timer">Sisa waktu: <strong id="testTimer">${timerLimit}s</strong></p>
        </div>

        <article class="test-question-card">
          <h2>${question.prompt}</h2>
        </article>

        <div class="test-option-grid" id="testOptionGrid"></div>

        <button type="button" class="action-btn finish-test-btn" id="finishTestButton">Selesaikan Test</button>
      </section>
    `;

    const optionGrid = document.getElementById("testOptionGrid");
    const optionButtons = [];

    question.options.forEach((option) => {
      const button = document.createElement("button");
      button.type = "button";
      button.className = "test-option-btn";
      button.dataset.value = option;
      button.textContent = option;
      button.addEventListener("click", () => handleAnswer(option, optionButtons));
      optionButtons.push(button);
      optionGrid.appendChild(button);
    });

    document.getElementById("finishTestButton").addEventListener("click", finishTest);

    resultInfo.textContent = `${testState.type.toUpperCase()} Test • ${testState.level} • benar: ${testState.correctCount}`;
    startQuestionTimer(timerLimit);
  }

  function buildKanjiQuestions(level, count = 30) {
    const pool = vocabularyData.filter((word) => word.level === level && word.kana);
    const selected = shuffle(pool).slice(0, Math.min(count, pool.length));

    return selected.map((word) => {
      const wrongOptions = shuffle(
        pool.filter((candidate) => candidate.kana !== word.kana).map((candidate) => candidate.kana)
      ).slice(0, 3);

      return {
        prompt: word.kanji,
        correct: word.kana,
        options: shuffle([word.kana, ...wrongOptions]),
      };
    });
  }

  function buildBunpouQuestions(level, count = 20) {
    const pool = (sentencePatternData && sentencePatternData[level]) || [];
    const selected = shuffle(pool).slice(0, Math.min(count, pool.length));

    return selected.map((item) => {
      const wrongOptions = shuffle(
        pool.filter((candidate) => candidate.pattern !== item.pattern).map((candidate) => candidate.pattern)
      ).slice(0, 3);

      return {
        prompt: `${item.example}`,
        correct: item.pattern,
        options: shuffle([item.pattern, ...wrongOptions]),
      };
    });
  }

  function startTest(level, kind) {
    const questions = kind === "kanji" ? buildKanjiQuestions(level, 30) : buildBunpouQuestions(level, 20);

    if (!questions.length) {
      openInfoModal("Mohon maaf, data test belum tersedia untuk level ini.");
      return;
    }

    testState.active = true;
    testState.type = kind;
    testState.level = level;
    testState.questions = questions;
    testState.currentIndex = 0;
    testState.correctCount = 0;

    viewMode = `test:${kind}:${level}`;
    closeModal();
    renderCurrentTestQuestion();
  }

  function renderLetterPoster(script) {
    const data = letterSets[script];
    if (!data) return;
 
   function render() {
     grid.innerHTML = "";
    closeModal();

    const poster = document.createElement("section");
    poster.className = "letter-poster";
    poster.innerHTML = `<h2>${data.title}</h2>`;

    const body = document.createElement("div");
    body.className = "letter-poster-body";

    data.sections.forEach((section) => {
      const sectionEl = document.createElement("section");
      sectionEl.className = "letter-section";
      sectionEl.innerHTML = `<h3>${section.subtitle}</h3>`;

      section.rows.forEach((row) => {
        const rowEl = document.createElement("div");
        rowEl.className = "letter-row";
        rowEl.style.setProperty("--cols", row.length);
 
     const cat = category.value;
     const key = search.value.toLowerCase();
        row.forEach((ch, index) => {
          const cell = document.createElement("div");
          cell.className = index === 0 ? "letter-label" : "letter-cell";
          cell.textContent = ch;
          rowEl.appendChild(cell);
        });
 
     vocabularyData.forEach(k => {
        sectionEl.appendChild(rowEl);
      });
 
       if (cat !== "all" && !k.type.startsWith(cat)) return;
      body.appendChild(sectionEl);
    });
 
       const text = (k.kanji  k.kana  k.meaning).toLowerCase();
       if (key && !text.includes(key)) return;
    poster.appendChild(body);
    grid.appendChild(poster);
    resultInfo.textContent = `${data.title} • Gojūon  Dakuon/Handakuon  Yōon`;
  }
 
       const card = document.createElement("div");
       card.className = "card";
 
  function renderSupportPoster() {
    grid.innerHTML = `
      <section class="support-poster">
        <h2>Dukung Pengembang</h2>
        <p>Dukung perjalanan ini agar semakin banyak orang bisa belajar bahasa Jepang tanpa terkendala biaya.<br>Setiap support berarti.</p>
        <a class="support-link-btn" href="https://sociabuzz.com/syncxcode/tribe" target="_blank" rel="noopener noreferrer">Klik Disini</a>
      </section>
    `;
    closeModal();
    resultInfo.textContent = "Terima kasih atas dukungan Anda ✨";
  }

  function renderPatternPoster(level) {
    const patterns = (sentencePatternData && sentencePatternData[level]) || [];
    grid.innerHTML = "";
    closeModal();

    if (!patterns.length) {
      grid.innerHTML = '<div class="empty-state">Belum ada pola kalimat untuk level ini.</div>';
      resultInfo.textContent = `0 pola kalimat (${level})`;
      return;
    }

    const fragment = document.createDocumentFragment();
    patterns.forEach((item) => {
      const card = document.createElement("article");
      card.className = "pattern-card";
       card.innerHTML = `
         <div class="kanji">${k.kanji}</div>
         <div class="kana">${k.kana}</div>
         <div class="meaning">${k.meaning}</div>
        <div class="pattern-title">${item.pattern}</div>
        <div class="pattern-example">${item.example}</div>
        <div class="pattern-meaning">${item.meaning}</div>
        <button class="pattern-audio-btn" type="button" data-text="${item.example}" aria-label="Putar audio pola ${item.pattern}">▶</button>
       `;
      fragment.appendChild(card);
    });

    grid.appendChild(fragment);
    resultInfo.textContent = `${patterns.length} pola kalimat ditampilkan • ${level}`;
  }

  function getRecommendations(selectedWord, maxItems = 6) {
    const sameType = vocabularyData.filter(
      (word) => word.type === selectedWord.type && word.kanji !== selectedWord.kanji
    );

    const fallback = vocabularyData.filter((word) => word.kanji !== selectedWord.kanji);
    const source = sameType.length >= maxItems ? sameType : fallback;

    return source.slice(0, maxItems);
  }
 
       grid.appendChild(card);
  function openModal(word) {
    modalSubtitle.style.display = "block";
    recommendationRow.style.display = "grid";
    expandedCard.innerHTML = cardImageTemplate(word, true);
    recommendationRow.innerHTML = "";

    getRecommendations(word).forEach((item) => {
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

  function render() {
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

    if (viewMode === "support") {
      renderSupportPoster();
      return;
    }

    const words = getFilteredWords();
    grid.innerHTML = "";

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
      cardButton.setAttribute("aria-label", `Lihat detail ${word.kanji}`);
      cardButton.innerHTML = cardImageTemplate(word);
      cardButton.addEventListener("click", () => openModal(word));
      cardButton.addEventListener("keydown", (event) => {
        if (event.key === "Enter" || event.key === " ") {
          event.preventDefault();
          openModal(word);
        }
      });
      fragment.appendChild(cardButton);
     });

    grid.appendChild(fragment);
    const levelText = selectedLevel === "all" ? "Semua level" : selectedLevel;
    resultInfo.textContent = `${words.length} kata ditampilkan • ${levelText}`;
   }
 
   category.addEventListener("change", render);
   search.addEventListener("input", render);
  function pickRandomWord() {
    if (viewMode.startsWith("letters:")) return;
    const source = getFilteredWords();
    if (!source.length) return;
    const selected = source[Math.floor(Math.random() * source.length)];
    openModal(selected);
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
 
   hamburger.addEventListener("click", () => {
     sidebar.classList.toggle("active");
     overlay.classList.toggle("active");
    const active = sidebar.classList.toggle("active");
    overlay.classList.toggle("active", active);
    hamburger.setAttribute("aria-expanded", active ? "true" : "false");
   });
 
   overlay.addEventListener("click", () => {
     sidebar.classList.remove("active");
     overlay.classList.remove("active");
  overlay.addEventListener("click", closeSidebar);
  randomWordButton.addEventListener("click", pickRandomWord);
  modalBackdrop.addEventListener("click", closeModal);
  modalClose.addEventListener("click", closeModal);

  grid.addEventListener("click", (event) => {
    const audioButton = event.target.closest(".play-audio-btn");
    if (audioButton) {
      event.preventDefault();
      event.stopPropagation();
      speakWord(audioButton.dataset.text || "");
      return;
    }

    const patternAudioButton = event.target.closest(".pattern-audio-btn");
    if (!patternAudioButton) return;
    event.preventDefault();
    event.stopPropagation();
    speakWord(patternAudioButton.dataset.text || "");
   });
 
   render();
  recommendationRow.addEventListener("click", (event) => {
    const audioButton = event.target.closest(".rec-audio-btn");
    if (!audioButton) return;
    event.preventDefault();
    event.stopPropagation();
    speakWord(audioButton.dataset.text || "");
  });

  expandedCard.addEventListener("click", (event) => {
    const audioButton = event.target.closest(".play-audio-btn");
    if (!audioButton) return;
    event.preventDefault();
    event.stopPropagation();
    speakWord(audioButton.dataset.text || "");
  });

  sidebarFilterButtons.forEach((button) => {
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

  letterButtons.forEach((button) => {
    button.addEventListener("click", () => {
      viewMode = `letters:${button.dataset.script}`;
      search.value = "";
      closeModal();
      render();
      closeSidebar();
    });
  });

  patternButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const level = button.dataset.level;
      if (["N3", "N2", "N1"].includes(level)) {
        openInfoModal("Mohon maaf, materi pola kalimat level ini sedang dalam proses pengembangan. Silakan kembali lagi nanti ✨");
        closeSidebar();
        return;
      }
 
 });
  No newline at end of file
      viewMode = `patterns:${level}`;
      search.value = "";
      category.value = "all";
      closeModal();
      render();
      closeSidebar();
    });
  });

  testButtons.forEach((button) => {
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

  menuButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const action = button.dataset.action;
      if (action === "random") pickRandomWord();

      if (action === "reset") {
        viewMode = "vocab";
        selectedLevel = "all";
        selectedType = "all";
        category.value = "all";
        search.value = "";
      }

      if (action === "all") {
        viewMode = "vocab";
        selectedLevel = "all";
        selectedType = "all";
        category.value = "all";
      }

      if (action === "support") {
        viewMode = "support";
      }

      render();
      closeSidebar();
    });
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      closeModal();
      closeSidebar();
    }
  });

  render();
});
