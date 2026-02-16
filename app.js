document.addEventListener("DOMContentLoaded", () => {

  const grid = document.getElementById("grid");
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

  const filterBtn = document.getElementById("filterBtn");
  const filterDropdown = document.getElementById("filterDropdown");

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
    if (!window.speechSynthesis || !text) return;
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

  function closeModal() {
    kanjiModal.classList.remove("active");
    kanjiModal.setAttribute("aria-hidden", "true");
    expandedCard.innerHTML = "";
    recommendationRow.innerHTML = "";
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
    return wordType?.startsWith(targetType) || false;
  }

  function getFilteredWords() {
    const key = (search.value || "").toLowerCase().trim();

    return vocabularyData.filter((word) => {
      if (selectedLevel !== "all" && word.level !== selectedLevel) return false;

      if (selectedType !== "all" && !matchType(word.type, selectedType)) return false;

      const text = [
        word.kanji || "",
        word.kana || "",
        word.romaji || "",
        word.meaning || "",
        word.type || ""
      ].join(" ").toLowerCase();

      if (key && !text.includes(key)) return false;

      return true;
    });
  }

  function cardImageTemplate(word) {
    return `
      <div class="card-image">
        <div class="card-overlay">
          <div class="kanji">${word.kanji || word.kana || ""}</div>
          <div class="kana">${word.kana || ""}</div>
          <div class="romaji">${word.romaji || ""}</div>
          <div class="meaning">${word.meaning || ""}</div>
        </div>
        <button class="play-audio-btn" data-text="${word.kana || word.kanji || ""}">▶</button>
      </div>
    `;
  }

  function openModal(word) {
    // Implementasi modal detail kata (contoh sederhana, sesuaikan dengan kebutuhan)
    expandedCard.innerHTML = `
      <div class="expanded-content">
        <h2>${word.kanji || word.kana}</h2>
        <p>Kana: ${word.kana}</p>
        <p>Romaji: ${word.romaji}</p>
        <p>Arti: ${word.meaning}</p>
        <button class="play-audio-btn wide-play-btn" data-text="${word.kana || word.kanji}">▶ Dengar Pengucapan</button>
      </div>
    `;
    modalSubtitle.style.display = "block";
    // Rekomendasi terkait bisa ditambahkan di sini jika ada logika
    recommendationRow.innerHTML = "";
    kanjiModal.classList.add("active");
    kanjiModal.setAttribute("aria-hidden", "false");
  }

  function renderPatternPoster(level) {
    // Implementasi poster pola kalimat (placeholder)
    grid.innerHTML = `<div class="info-poster">Poster Pola Kalimat ${level} (sedang dikembangkan)</div>`;
    resultInfo.textContent = "";
  }

  function startTest(level, kind) {
    // Implementasi mulai test (placeholder)
    testState.active = true;
    testState.level = level;
    testState.type = kind;
    // Logika generate questions di sini
    grid.innerHTML = `<div class="info-poster">Test ${kind.toUpperCase()} ${level} dimulai!</div>`;
  }

  function renderCurrentTestQuestion() {
    // Implementasi render soal test
    grid.innerHTML = `<div class="info-poster">Soal test saat ini (placeholder)</div>`;
  }

  function render() {
    grid.innerHTML = "";

    if (viewMode.startsWith("letters:")) {
      const script = viewMode.split(":")[1];
      // Render poster hiragana/katakana (placeholder sederhana)
      grid.innerHTML = `<div class="info-poster">Poster ${script.toUpperCase()}</div>`;
      resultInfo.textContent = "";
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

      cardButton.dataset.word = JSON.stringify(word);
      cardButton.innerHTML = cardImageTemplate(word);

      cardButton.addEventListener("click", (e) => {
        if (e.target.closest(".play-audio-btn")) return;
        const storedWord = JSON.parse(cardButton.dataset.word);
        openModal(storedWord);
      });

      cardButton.addEventListener("keydown", (event) => {
        if (event.key === "Enter" || event.key === " ") {
          event.preventDefault();
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

  // Event Listeners
  search.addEventListener("input", () => {
    viewMode = "vocab";
    render();
  });

  hamburger.addEventListener("click", () => {
    const active = sidebar.classList.toggle("active");
    overlay.classList.toggle("active", active);
    hamburger.setAttribute("aria-expanded", active ? "true" : "false");
  });

  overlay.addEventListener("click", closeSidebar);
  modalBackdrop.addEventListener("click", closeModal);
  modalClose.addEventListener("click", closeModal);

  grid.addEventListener("click", (event) => {
    const audioButton = event.target.closest(".play-audio-btn, .pattern-audio-btn, .rec-audio-btn, .wide-play-btn");
    if (audioButton) {
      event.preventDefault();
      event.stopPropagation();
      speakWord(audioButton.dataset.text || "");
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
    search.value = "";
    viewMode = "vocab";
    render();
  });

  // Filter Dropdown Handler (Nested)
  filterBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    const isShown = filterDropdown.classList.toggle("show");
    filterBtn.setAttribute("aria-expanded", isShown ? "true" : "false");
  });

  document.addEventListener("click", (e) => {
    if (!filterBtn.contains(e.target) && !filterDropdown.contains(e.target)) {
      filterDropdown.classList.remove("show");
      filterBtn.setAttribute("aria-expanded", "false");
    }
  });

  filterDropdown.addEventListener("click", (e) => {
    const btn = e.target.closest("button[data-action='select']");
    if (!btn) return;

    e.stopPropagation();

    selectedType = btn.dataset.type || "all";
    selectedLevel = btn.dataset.level || "all";

    document.querySelectorAll("#filterDropdown .dropdown-item.active, #filterDropdown .has-submenu.active").forEach(el => el.classList.remove("active"));
    const parentItem = btn.closest(".dropdown-item") || btn.closest(".has-submenu");
    if (parentItem) parentItem.classList.add("active");

    filterDropdown.classList.remove("show");
    filterBtn.setAttribute("aria-expanded", "false");

    search.value = "";
    render();
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      closeModal();
      closeSidebar();
      filterDropdown.classList.remove("show");
      filterBtn.setAttribute("aria-expanded", "false");
    }
  });

  // Inisialisasi
  render();
});
