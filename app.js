document.addEventListener("DOMContentLoaded", () => {
  const grid = document.getElementById("grid");
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

  // Elemen baru untuk modal search (dengan null check buat aman)
  const searchTrigger = document.getElementById("searchTrigger");
  const searchFilterModal = document.getElementById("searchFilterModal");
  const searchBackdrop = document.getElementById("searchBackdrop");
  const searchModalClose = document.getElementById("searchModalClose");
  const modalSearch = document.getElementById("modalSearch");
  const modalLevel = document.getElementById("modalLevel");
  const applyFilter = document.getElementById("applyFilter");

  if (!searchTrigger) {
    console.error("Elemen search trigger nggak ditemukan. Cek HTML buat id='searchTrigger'.");
    return; // Keluar awal biar nggak error lebih lanjut
  }

  // ===== IOS DETECTOR - SEMUA iOS DEVICE (Safari + Chrome iOS) =====
  function isIOS() {
    return /iPad|iPhone|iPod/.test(navigator.platform) ||
           (navigator.platform === 'MacIntel' && 'ontouchend' in document);
  }

  if (isIOS()) {
    document.documentElement.classList.add('ios-device');
    console.log('🛡️ NihonByte iOS Safe Mode AKTIF');

    // 🔥 Nonaktifkan animasi berat
    const style = document.createElement("style");
    style.innerHTML = `
      * {
        animation: none !important;
        transition: none !important;
      }
    `;
    document.head.appendChild(style);

    // 🔥 Hindari crash body fixed
    document.body.style.webkitOverflowScrolling = "touch";

    // 🔥 Batasi repaint besar saat resize
    window.addEventListener("resize", () => {
      document.body.style.height = window.innerHeight + "px";
    });
  }

  
  let selectedLevel = "all";
  let selectedType = "all";
  let searchValue = "";  // Pengganti nilai input search lama
  let viewMode = "vocab";

  // Temp buat modal (biar bisa preview tanpa langsung apply)
  let tempSearch = "";
  let tempLevel = "all";
  let tempType = "all";

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
    const key = (searchValue || "").toLowerCase().trim();
    const allowedTypes = ["verb-godan", "verb-ru", "verb-irregular", "adj-i", "adj-na"];  // Hanya 5 ini untuk modal
    return vocabularyData.filter((word) => {
      if (selectedLevel !== "all" && word.level !== selectedLevel) return false;
      if (selectedType !== "all" && !matchType(word.type, selectedType)) return false;
      if (selectedType !== "all" && !allowedTypes.includes(selectedType)) return false;  // Batasi hanya 5 tipe

      if (key) {
        const targets = [
          word.kanji?.toLowerCase() || "",
          word.kana?.toLowerCase() || "",
          word.romaji?.toLowerCase() || "",
          ...(word.meaning || []).map(m => m.toLowerCase())
        ].join(" ");
        if (!targets.includes(key)) return false;
      }
      return true;
    });
  }

  // Hamburger toggle (kode asli, nggak diubah)
  hamburger.addEventListener("click", () => {
    const isExpanded = hamburger.getAttribute("aria-expanded") === "true";
    sidebar.classList.toggle("active");
    overlay.classList.toggle("active");
    hamburger.setAttribute("aria-expanded", !isExpanded);
  });

  overlay.addEventListener("click", closeSidebar);

  function closeSidebar() {
    sidebar.classList.remove("active");
    overlay.classList.remove("active");
    hamburger.setAttribute("aria-expanded", "false");
  }

  // Sidebar filter buttons (diupdate: nggak ada category.value)
  document.querySelectorAll(".sidebar-filter-btn").forEach((button) => {
    button.addEventListener("click", () => {
      viewMode = "vocab";
      selectedLevel = button.dataset.level || "all";
      selectedType = button.dataset.type || "all";
      searchValue = "";  // Reset search (pengganti search.value = "")
      render();
      closeSidebar();
    });
  });

  document.querySelectorAll(".letter-btn").forEach((button) => {
    button.addEventListener("click", () => {
      viewMode = `letters:${button.dataset.script}`;
      searchValue = "";
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
      searchValue = "";
      selectedType = "all";
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

  // Listener baru buat modal
  searchTrigger.addEventListener("click", () => {
    searchFilterModal.classList.add("active");
    searchFilterModal.setAttribute("aria-hidden", "false");

    // Pre-fill dari state saat ini
    modalSearch.value = searchValue;
    modalLevel.value = selectedLevel;
    document.querySelectorAll(".category-tile").forEach(btn => {
      btn.classList.toggle("active", btn.dataset.type === selectedType);
    });
  });

  searchModalClose.addEventListener("click", closeSearchModal);
  searchBackdrop.addEventListener("click", closeSearchModal);

  function closeSearchModal() {
    searchFilterModal.classList.remove("active");
    searchFilterModal.setAttribute("aria-hidden", "true");
    // Nggak apply kalau tutup tanpa tombol (reset temp)
    tempSearch = tempLevel = tempType = "";
  }

  // Pilih kategori tile
  document.querySelectorAll(".category-tile").forEach(btn => {
    btn.addEventListener("click", () => {
      document.querySelectorAll(".category-tile").forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      tempType = btn.dataset.type;
    });
  });

  // Apply filter
  applyFilter.addEventListener("click", () => {
    searchValue = modalSearch.value.trim();
    selectedLevel = modalLevel.value;
    selectedType = tempType || "all";
    viewMode = "vocab";
    render();
    closeSearchModal();
  });

  document.getElementById("logo")?.addEventListener("click", () => {
    selectedLevel = "all";
    selectedType = "all";
    searchValue = "";
    viewMode = "vocab";
    render();
  });

  // Dukung Pengembang - listener
  document.getElementById("supportBtn").addEventListener("click", () => {
    viewMode = "support";
    searchValue = "";
    render();
    closeSidebar();
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

    resultInfo.textContent = "Terima kasih atas dukungan Anda ✨";
  }
  
  function render() {
    grid.classList.remove("support-mode");
    grid.innerHTML = "";

    if (viewMode === "support") {
      renderSupportPoster();
      return;
    }

    // Mode ungkapan umum (diupdate: nggak ada category.value)
    const isExpressionView =
      viewMode === "vocab" &&
      (selectedType === "ekspresi" ||
       selectedType === "expression" ||
       selectedType === "ungkapan umum");
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

    // Result info lebih spesifik
    let infoText = `${words.length} kata ditampilkan`;
    if (selectedType !== "all") {
      const labels = {
        "verb-godan": "Kata Kerja Godan",
        "verb-ru": "Kata Kerja Ichidan",
        "verb-irregular": "Kata Kerja Suru",
        "adj-i": "Kata Sifat い",
        "adj-na": "Kata Sifat な"
      };
      infoText += ` • ${labels[selectedType] || selectedType}`;
    }
    infoText += ` • ${selectedLevel === "all" ? "Semua level" : selectedLevel}`;
    resultInfo.textContent = infoText;
  }

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

// --- Rekonstruksi bagian truncated dari asli ---
function cardImageTemplate(word) {
  // Asumsi dari konteks asli: Generate HTML untuk kartu
  return `
    <div class="card-image">
      <div class="card-overlay">
        <h2 class="kanji">${word.kanji || word.kana}</h2>
        <p class="kana">${word.kana}</p>
        <p class="romaji">${word.romaji}</p>
        <p class="meaning">${word.meaning.join(', ')}</p>
      </div>
      <button class="play-audio-btn" aria-label="Putar audio">
        ▶️
      </button>
    </div>
  `;
}

function openModal(word) {
  // Asumsi dari asli: Tampil modal detail
  expandedCard.innerHTML = cardImageTemplate(word);  // Reuse template atau expand
  // Tambah rekomendasi, dll.
  kanjiModal.classList.add("active");
  kanjiModal.setAttribute("aria-hidden", "false");
  // Populate recommendationRow dari word terkait
  recommendationRow.innerHTML = 'Rekomendasi di sini'; // Placeholder, sesuaikan asli
}

function closeModal() {
  kanjiModal.classList.remove("active");
  kanjiModal.setAttribute("aria-hidden", "true");
}

function renderExpressionPoster() {
  // Dari asli: Tampil poster ungkapan umum
  grid.innerHTML = '<div class="expression-poster">Ungkapan umum di sini</div>'; // Placeholder, tambah dari asli
  resultInfo.textContent = "Ungkapan Umum";
}

function renderLetterPoster(script) {
  // Dari asli: Tampil hiragana/katakana
  const set = letterSets[script];
  let html = `<h2>${set.title}</h2>`;
  set.sections.forEach(section => {
    html += `<h3>${section.subtitle}</h3><table>`;
    section.rows.forEach(row => {
      html += '<tr>' + row.map(cell => `<td>${cell}</td>`).join('') + '</tr>';
    });
    html += '</table>';
  });
  grid.innerHTML = html;
}

function renderPatternPoster(level) {
  // Dari asli: Pola kalimat
  grid.innerHTML = `<div class="pattern-poster">Pola kalimat level ${level}</div>`; // Placeholder
}

function startTest(level, kind) {
  // Dari asli: Mulai test
  testState.active = true;
  testState.level = level;
  testState.kind = kind;
  // Generate questions dari data
  testState.questions = []; // Placeholder, tambah logic asli
  viewMode = `test:${kind}`;
  render();
}

function renderCurrentTestQuestion() {
  // Dari asli: Tampil soal test
  grid.innerHTML = '<div class="test-question">Soal di sini</div>'; // Placeholder
}

// Tambah fungsi lain dari truncated asli kalau ada, misal maintenance-btn listener
document.querySelectorAll(".maintenance-btn").forEach((button) => {
  button.addEventListener("click", () => {
    openInfoModal("Fitur ini sedang maintenance.");
  });
});
