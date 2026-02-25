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
  
  const topbar = document.querySelector(".topbar");
  
  // ==================== MODAL FILTER FINAL - BACKDROP 100% BISA KLIK ======================
  const searchBtn = document.getElementById("searchBtn");
  const filterModal = document.getElementById("filterModal");
  const filterBackdrop = document.getElementById("filterBackdrop");
  const filterModalClose = document.getElementById("filterModalClose");
  const modalSearchInput = document.getElementById("modalSearchInput");
  const applyFilterBtn = document.getElementById("applyFilterBtn");
  const resetFilterBtn = document.getElementById("resetFilterBtn");

  function enforceMobileTopbarOrder() {
    const topbar = document.querySelector(".topbar");
    if (!topbar || !resultInfo || !searchBtn) return;

    if (window.innerWidth <= 768) {
      topbar.insertBefore(resultInfo, searchBtn);
      topbar.appendChild(searchBtn);
      resultInfo.style.position = "static";
      resultInfo.style.transform = "none";
      resultInfo.style.marginLeft = "auto";
      resultInfo.style.marginRight = "6px";
      searchBtn.style.marginLeft = "0";
    } else {
      resultInfo.style.position = "";
      resultInfo.style.transform = "";
      resultInfo.style.marginLeft = "";
      resultInfo.style.marginRight = "";
      searchBtn.style.marginLeft = "";
    }
  }

  let isTesting = false;
  let currentExerciseMeta = { type: "", level: "" };
  let currentQuizData = [];
  let quizIndex = 0;
  let score = 0;
  let timer;
  let timeLeft = 0;
  let sessionTimeLeft = 0;
  let bodyScrollY = 0;
  let quizOriginalBodyOverflow = "";
  let quizOriginalHtmlOverflow = "";
  let quizOriginalBodyHeight = "";
  let quizOriginalHtmlHeight = "";
  let isQuizScrollLocked = false;

// ==========================================
// 1. Mesin Latihan Baru (Sumber Khusus latihan-data.js)
// ==========================================
  function lockQuizScroll() {
    if (isQuizScrollLocked) return;
    quizOriginalBodyOverflow = document.body.style.overflow || "";
    quizOriginalHtmlOverflow = document.documentElement.style.overflow || "";
    quizOriginalBodyHeight = document.body.style.height || "";
    quizOriginalHtmlHeight = document.documentElement.style.height || "";
    document.body.style.overflow = "hidden";
    document.documentElement.style.overflow = "hidden";
    document.body.style.height = "100dvh";
    document.documentElement.style.height = "100dvh";
    isQuizScrollLocked = true;
  }

  function unlockQuizScroll() {
    if (!isQuizScrollLocked) return;
    document.body.style.overflow = quizOriginalBodyOverflow;
    document.documentElement.style.overflow = quizOriginalHtmlOverflow;
    document.body.style.height = quizOriginalBodyHeight;
    document.documentElement.style.height = quizOriginalHtmlHeight;
    isQuizScrollLocked = false;
  }
  
  const latihanSectionLabel = {
    "goi-kanji-reading": "Membaca Kanji",
    "goi-orthography": "Ortografi",
    "goi-context-expression": "Ekspresi yang didefinisikan secara kontekstual",
    "goi-paraphrase": "Parafrasa",
    "goi-usage": "Penggunaan",
    "bunpou-form": "Tata bahasa kalimat (Memilih bentuk tata bahasa)",
    "bunpou-composition": "Tata bahasa kalimat (Komposisi kalimat)",
    "bunpou-text": "Tata Bahasa Teks",
    "dokkai-reading": "Dokkai Membaca",
    "choukai-listening": "Choukai Mendengarkan",
  };

  const goiSectionOrder = [
    "goi-kanji-reading",
    "goi-orthography",
    "goi-context-expression",
    "goi-paraphrase",
    "goi-usage",
  ];

  const bunpouSectionOrder = [
    "bunpou-form",
    "bunpou-composition",
    "bunpou-text",
  ];

  function getSectionProgress(type, section) {
    const order = type === "bunpou" ? bunpouSectionOrder : goiSectionOrder;
    const idx = order.indexOf(section);
    return { index: idx >= 0 ? idx + 1 : 1, total: order.length };
  }

  function buildBunpouSessionQuestions(level, maxQuestions = 20) {
    const source = getLatihanPatternSource(level);
    const sessions = [
      {
        key: "bunpou-form",
        label: latihanSectionLabel["bunpou-form"],
        map: (item) => ({ prompt: item.meaning, answer: item.pattern, level }),
      },
      {
        key: "bunpou-composition",
        label: latihanSectionLabel["bunpou-composition"],
        map: (item) => ({ prompt: item.pattern, answer: item.example, level }),
      },
      {
        key: "bunpou-text",
        label: latihanSectionLabel["bunpou-text"],
        map: (item) => ({ prompt: item.example, answer: item.meaning, level }),
      },
    ];

    const perSession = Math.max(1, Math.floor(maxQuestions / sessions.length));
    const all = [];

    sessions.forEach((session, idx) => {
      const picked = source
        .slice(0, perSession)
        .map((item) => ({
          ...session.map(item),
          section: session.key,
          sectionLabel: session.label,
          sectionIndex: idx + 1,
          sectionTotal: sessions.length,
        }));
      all.push(...picked);
    });

    const remaining = maxQuestions - all.length;
    if (remaining > 0) {
      const filler = source
        .slice(0, remaining)
        .map((item) => ({
          prompt: item.meaning,
          answer: item.pattern,
          level,
          section: "bunpou-form",
          sectionLabel: latihanSectionLabel["bunpou-form"],
          sectionIndex: 1,
          sectionTotal: sessions.length,
        }));
      all.push(...filler);
    }

    return all.filter((q) => q.prompt && q.answer);
  }

  function buildGoiSessionQuestions(level) {
    // Tarik data format baru (JLPT Real)
    const source = window.latihanGoiReal && window.latihanGoiReal[level] ? window.latihanGoiReal[level] : {};
    const all = [];

    // Urutan KAMAR (Sesi) yang mutlak dan gak boleh ditukar
    const sessions = [
      { key: "goi-kanji-reading", label: latihanSectionLabel["goi-kanji-reading"] },
      { key: "goi-orthography", label: latihanSectionLabel["goi-orthography"] },
      { key: "goi-context-expression", label: latihanSectionLabel["goi-context-expression"] },
      { key: "goi-paraphrase", label: latihanSectionLabel["goi-paraphrase"] }
    ];

    sessions.forEach((session, idx) => {
      const questionsData = source[session.key] || [];
      
      // Acak urutan soal HANYA di dalam sesi ini saja!
      const shuffledData = shuffleArray([...questionsData]);
      
      const picked = shuffledData.map((q) => ({
        prompt: q.question,      // Pertanyaan yang ada <u> garis bawahnya
        options: q.options,      // Tarik 4 pilihan ganda rakitan lu
        answer: q.answer,        // Jawaban benarnya
        translation: q.translation, 
        level: level,
        section: session.key,
        sectionLabel: session.label,
        sectionIndex: idx + 1,
        sectionTotal: sessions.length
      }));
      
      all.push(...picked);
    });

    return all;
  }

  function formatSessionTime(seconds) {
    const safe = Math.max(0, seconds);
    const mm = String(Math.floor(safe / 60)).padStart(2, "0");
    const ss = String(safe % 60).padStart(2, "0");
    return `${mm}:${ss}`;
  }

  function getLatihanVocabularySource() {
    return Array.isArray(window.latihanVocabularyData) ? window.latihanVocabularyData : [];
  }

  function getLatihanPatternSource(level) {
    if (window.latihanPatternData && Array.isArray(window.latihanPatternData[level])) return window.latihanPatternData[level];
    return [];
  }

  function shuffleArray(arr) {
    return [...arr].sort(() => Math.random() - 0.5);
  }

  function buildExerciseQuestions(mainType, section, level) {
    if (mainType === "goi") {
      return buildGoiSessionQuestions(level);
    }

    if (mainType === "bunpou") {
      if (!section) return buildBunpouSessionQuestions(level);
      const source = getLatihanPatternSource(level);
      return source.map((item) => {
        if (section === "bunpou-form") return { prompt: item.meaning, answer: item.pattern, level, section, sectionLabel: latihanSectionLabel[section], sectionIndex: 1, sectionTotal: 3 };
        if (section === "bunpou-composition") return { prompt: item.pattern, answer: item.example, level, section, sectionLabel: latihanSectionLabel[section], sectionIndex: 2, sectionTotal: 3 };
        return { prompt: item.example, answer: item.meaning, level, section, sectionLabel: latihanSectionLabel[section], sectionIndex: 3, sectionTotal: 3 };
      });
    }

    return [];
  }

  function generateExerciseOptions(question) {
    // 🚀 MANTRA BARU: Kalau soal dari format JLPT bawa 'options', pakai itu & acak urutannya!
    if (question.options && Array.isArray(question.options) && question.options.length > 0) {
      return shuffleArray([...question.options]);
    }
    
    // Fallback (Cadangan) kalau format data lama
    const pool = currentQuizData.map((q) => q.answer).filter((answer) => answer !== question.answer);
    const uniqueWrong = Array.from(new Set(pool));
    const wrongChoices = shuffleArray(uniqueWrong).slice(0, 3);
    while (wrongChoices.length < 3) wrongChoices.push("-");
    return shuffleArray([question.answer, ...wrongChoices]);
  }

  function startExercise(mainType, section, level) {
    const sectionKey = section || (mainType === "bunpou" ? "bunpou-form" : "goi-kanji-reading");
    const questions = buildExerciseQuestions(mainType, section, level).filter((q) => q.prompt && q.answer);

    if (questions.length < 5) {
      alert("Data latihan belum cukup di level ini. Silakan pilih level lain.");
      return;
    }

    isTesting = true;
    currentExerciseMeta = {
      type: mainType,
      section: sectionKey,
      sectionLabel: latihanSectionLabel[sectionKey] || sectionKey,
      level,
    };

    lockQuizScroll();
    quizIndex = 0;
    score = 0;
    
    currentQuizData = questions;

    const totalMinuteByLevel = { N5: 20, N4: 25 };
    const defaultMinutes = totalMinuteByLevel[level] || 20;
    sessionTimeLeft = defaultMinutes * 60;

    renderQuiz();
    startTimer();
  }

  function renderQuiz() {
    if (quizIndex >= currentQuizData.length) {
      endQuiz();
      return;
    }

    const item = currentQuizData[quizIndex];
    const mainLabel = currentExerciseMeta.type === "bunpou"
      ? "言語知識（文法） / Pengetahuan Bahasa (Tata Bahasa)"
      : "言語知識（文字・語彙） / Pengetahuan Bahasa (Kosakata)";

    const dynamicSection = item.section || currentExerciseMeta.section;
    const dynamicSectionLabel = item.sectionLabel || currentExerciseMeta.sectionLabel;
    const sectionProgress = item.sectionIndex
      ? { index: item.sectionIndex, total: item.sectionTotal || (currentExerciseMeta.type === "bunpou" ? 3 : 5) }
      : getSectionProgress(currentExerciseMeta.type, dynamicSection);
    const options = generateExerciseOptions(item);
    if (resultInfo) resultInfo.textContent = "頑張ってください";

    grid.className = "";
    grid.classList.add("quiz-active-mode");
    document.body.classList.add("training-session");

    grid.innerHTML = `
      <div class="quiz-wrapper-pro">
        <p class="quiz-section-title">${mainLabel} • ${currentExerciseMeta.level}</p>
        <p class="quiz-subtitle">${sectionProgress.index}. ${dynamicSectionLabel}</p>

        <div class="quiz-head-pro">
          <div class="quiz-progress-text">Soal ${quizIndex + 1}/${currentQuizData.length}</div>
          <div class="quiz-timer-text">Timer <span id="quiz-timer">${formatSessionTime(sessionTimeLeft)}</span></div>
        </div>

        <div class="quiz-qcard-pro">
          <h1 class="quiz-question-main">${item.prompt}</h1>
        </div>

        <div class="quiz-options-pro">
          ${options.map((opt) => `<button class="quiz-opt-btn-pro" data-answer="${opt}">${opt}</button>`).join("")}
        </div>

        <div class="quiz-finish-pro">
          <button id="finishBtnManual">Selesaikan Test</button>
        </div>
      </div>
    `;

    document.querySelectorAll(".quiz-opt-btn-pro").forEach((btn) => {
      btn.addEventListener("click", () => checkAnswer(btn.dataset.answer));
    });

    document.getElementById("finishBtnManual")?.addEventListener("click", confirmEndQuiz);
  }

  function startTimer() {
    clearInterval(timer);
    timer = setInterval(() => {
      sessionTimeLeft--;
      const timerDisplay = document.getElementById("quiz-timer");
      if (timerDisplay) timerDisplay.textContent = formatSessionTime(sessionTimeLeft);

      if (sessionTimeLeft <= 0) {
        clearInterval(timer);
        endQuiz();
      }
    }, 1000);
  }

  function checkAnswer(selected) {
    clearInterval(timer);
    const item = currentQuizData[quizIndex];

    if (selected === item.answer) score++;

    document.querySelectorAll(".quiz-opt-btn-pro").forEach((btn) => {
      btn.disabled = true;
      btn.style.cursor = "default";

      if (btn.dataset.answer === item.answer) {
        btn.style.background = "#4ade80";
        btn.style.color = "white";
        btn.style.borderColor = "#22c55e";
      } else if (btn.dataset.answer === selected && selected !== item.answer) {
        btn.style.background = "#fb7185";
        btn.style.color = "white";
        btn.style.borderColor = "#e11d48";
      }
    });

    setTimeout(() => {
      quizIndex++;
      renderQuiz();
    }, 900);
  }

  function showCorrectAnswerAndNext() {
    const item = currentQuizData[quizIndex];

    document.querySelectorAll(".quiz-opt-btn-pro").forEach((btn) => {
      btn.disabled = true;
      if (btn.dataset.answer === item.answer) {
        btn.style.background = "#facc15";
        btn.style.color = "#854d0e";
        btn.style.borderColor = "#eab308";
      }
    });

    setTimeout(() => {
      quizIndex++;
      renderQuiz();
    }, 1100);
  }

  function endQuiz() {
    isTesting = false;
    document.body.classList.remove("training-session");
    clearInterval(timer);
    sessionTimeLeft = 0;
    unlockQuizScroll();

    const totalSoal = currentQuizData.length;
    const jlptScore = Math.round((score / totalSoal) * 60);

    let gradeMsg = "";
    if (jlptScore >= 50) gradeMsg = "Luar Biasa! (満点!)";
    else if (jlptScore >= 35) gradeMsg = "Bagus! Terus tingkatkan.";
    else gradeMsg = "Jangan menyerah, belajar lagi yuk!";

    const message = `
      <div style="text-align: center; padding: 15px;">
        <h2 style="color: #ff4d6d; margin-bottom: 5px;">Test Selesai!</h2>
        <div style="font-size: 4.5rem; font-weight: 800; margin: 15px 0; color: #ffffff; line-height: 1;">${jlptScore}<span style="font-size: 1.8rem; color: #9ca3af;">/60</span></div>
        <p style="font-size: 1.15rem; font-weight: 600; color: #f3f4f6;">${gradeMsg}</p>
        <p style="color: #9ca3af; margin-top: 10px; font-size: 0.95rem;">Benar: <strong style="color: #4ade80;">${score}</strong> | Total Soal: ${totalSoal}</p>
        <button onclick="location.reload()" style="margin-top: 25px; background: #ff4d6d; color: white; border: none; padding: 14px 30px; border-radius: 999px; cursor: pointer; font-size: 1.05rem; font-weight: bold; box-shadow: 0 4px 15px rgba(255, 77, 109, 0.4); width: 100%;">KEMBALI KE MENU</button>
      </div>
    `;
    openInfoModal(message);
  }

  function confirmEndQuiz() {
    if (confirm("Yakin ingin mengakhiri test sekarang? Skor saat ini akan langsung dihitung.")) endQuiz();
  }
      
    searchBtn.addEventListener("click", () => {
      if (isTesting) {
        openInfoModal(`
          <div style="text-align: center; padding: 10px;">
            <h3 style="color: #ff4d6d; margin-bottom: 10px;">集中して！ (Fokus!) 🎯</h3>
            <p style="font-size: 1.1rem;">Selesaikan ujianmu dulu sebelum mencari kosakata lain!</p>
          </div>
        `);
        return;
      }
      bodyScrollY = window.scrollY;
      document.body.style.overflow = "hidden";
      document.body.style.position = "fixed";
      document.body.style.width = "100%";
      document.body.style.top = `-${bodyScrollY}px`;

      // --- RESET TAMPILAN MODAL SAAT DIBUKA ---
      // 1. Kosongkan input pencarian
      if (modalSearchInput) modalSearchInput.value = "";
      
      // 2. Reset Level JLPT kembali ke "Semua Level"
      document.querySelectorAll("#levelGrid .level-btn").forEach(b => b.classList.remove("active"));
      document.querySelector('#levelGrid [data-level="all"]')?.classList.add("active");
      
      // 3. Reset Kategori Khusus (Lepas semua pilihan)
      document.querySelectorAll("#categoryGrid .cat-btn").forEach(b => b.classList.remove("active"));
      // ----------------------------------------

      filterModal.classList.add("active");
      filterModal.setAttribute("aria-hidden", "false");
      
      // FOKUS INPUT: Hanya jalan di Desktop (lebar layar > 768px). 
      // Di HP tidak akan fokus otomatis, jadi keyboard tidak akan tiba-tiba muncul!
      if (modalSearchInput && window.innerWidth > 768) {
        modalSearchInput.focus();
      }
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
    // Category buttons (Bisa di-toggle / lepas pilihan)
    document.querySelectorAll("#categoryGrid .cat-btn").forEach(btn => {
      btn.addEventListener("click", () => {
        // Cek apakah tombol sedang aktif
        if (btn.classList.contains("active")) {
          // Kalau sudah aktif, klik lagi berarti LEPAS pilihan (unselect)
          btn.classList.remove("active");
        } else {
          // Kalau belum aktif, matikan yang lain lalu aktifkan yang ini
          document.querySelectorAll("#categoryGrid .cat-btn").forEach(b => b.classList.remove("active"));
          btn.classList.add("active");
        }
      });
    });

    // Apply & Reset
    if (applyFilterBtn) {
      applyFilterBtn.addEventListener("click", () => {
        const activeLevel = document.querySelector("#levelGrid .level-btn.active")?.dataset.level || "all";
        let activeType = document.querySelector("#categoryGrid .cat-btn.active")?.dataset.type || "verb-adj-only";

        // KUNCI GLOBAL SEARCH POP-UP: Buka gembok jadi "all" kalau user cuma ngetik tapi gak milih kategori
        if (modalSearchInput && modalSearchInput.value.trim() !== "" && !document.querySelector("#categoryGrid .cat-btn.active")) {
          activeType = "all";
        }

        selectedLevel = activeLevel;
        selectedType = activeType;
        viewMode = "vocab";
        if (search && modalSearchInput) search.value = modalSearchInput.value.trim();

        closeFilterModal();
        render();
      });
    }

    if (resetFilterBtn) {
      resetFilterBtn.addEventListener("click", () => {
        selectedLevel = "all";
        selectedType = "verb-adj-only"; // Balik ke default halaman awal
        if (search) search.value = "";
        if (modalSearchInput) modalSearchInput.value = "";

        document.querySelectorAll(".level-btn, .cat-btn").forEach(b => b.classList.remove("active"));
        document.querySelector('#levelGrid [data-level="all"]')?.classList.add("active");

        closeFilterModal();
        render();
      });
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
  let selectedType = "verb-adj-only";
  let viewMode = "vocab";

  const typeLabelMap = {
    "verb-godan": "Kata Kerja Godan",
    "verb-ru": "Kata Kerja Ichidan",
    "verb-irregular": "Kata Kerja Suru",
    "adj-i": "Kata Sifat I",
    "adj-na": "Kata Sifat Na",
    "noun-time-weather": "Kosakata Waktu & Cuaca",
    "noun-number-counter": "Kosakata Angka & Satuan",
    "noun-house-family": "Kosakata Rumah & Keluarga",
    "noun-body-medical": "Kosakata Tubuh & Kesehatan",
    "noun-work": "Kosakata Dunia Kerja Umum",
    "noun-vehicle": "Kosakata Kendaraan",
    "noun-caregiving": "Kosakata Keperawatan",
    "noun-animal": "Kosakata Nama Binatang",
    "noun-factory": "Kosakata Pabrik & Manufaktur",
    "noun-agriculture": "Kosakata Pertanian",
    "noun-profession": "Kosakata Profesi",
    "noun-restaurant": "Kosakata Restoran",
    "noun-school": "Kosakata Sekolah",
    "noun-place": "Kosakata Tempat & Bangunan",
    "question": "Kosakata Kata Tanya",
    "adv": "Kosakata Keterangan",
    "noun": "Kosakata",
    "ekspresi": "Ungkapan Umum",
    "expression": "Ungkapan Umum",
    "ungkapan umum": "Ungkapan Umum",
    "verb-adj-only": "Kosakata Utama",
    "pattern": "Pola Kalimat",
    "activity": "Kosakata Aktivitas",
    "noun-hobby": "Kosakata Hobi",
    "noun-sports": "Kosakata Olahraga",
    "noun-color": "Kosakata Warna",
  };

  function shouldShowLevelInResult(typeKey) {
    return ["verb-godan", "verb-ru", "verb-irregular", "adj-i", "adj-na"].includes(typeKey);
  }

  function formatResultInfo(totalCount, options = {}) {
    const { typeOverride = null, levelOverride = null, includeLevel = false } = options;
    const dropdownType = category ? category.value : "all";
    const effectiveType = typeOverride || (selectedType === "all" ? dropdownType : selectedType);
    const baseLabel = typeLabelMap[effectiveType] || "Kosakata";
    const levelValue = levelOverride || selectedLevel;
    
    if ((includeLevel || shouldShowLevelInResult(effectiveType)) && levelValue !== "all") {
      return `${totalCount} (${baseLabel}) - ${levelValue}`;
    }
    return `${totalCount} (${baseLabel})`;
  }
  
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
    const textJepangAja = text.split('(')[0].trim();
    const utterance = new SpeechSynthesisUtterance(textJepangAja);
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
    
    bodyScrollY = window.scrollY; 
    document.body.style.position = "fixed";
    document.body.style.width = "100%";
    document.body.style.top = `-${bodyScrollY}px`;
    document.body.style.overflow = "hidden";
  }
  function closeModal() {
    stopTestTimer();
    kanjiModal.classList.remove("active");
    kanjiModal.setAttribute("aria-hidden", "true");
    if (window.speechSynthesis) window.speechSynthesis.cancel();

    document.body.style.position = "";
    document.body.style.width = "";
    document.body.style.top = "";
    document.body.style.overflow = "";
    window.scrollTo(0, bodyScrollY);
  }

  function matchType(wordType, targetType) {
    if (targetType === "all") return true;
    
    if (targetType === "verb-adj-only") {
      return wordType?.startsWith("verb") || wordType?.startsWith("adj") || wordType === "suru";
    }
    
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
    const cardId = `card-${(word.kanji || word.kana).replace(/\s+/g, '')}`;
    
    return `
      <div class="card-image ${expandedClass}" id="${cardId}">
        <button class="play-audio-btn" type="button" data-text="${word.kana || ''}" aria-label="Putar audio">▶</button>
        
        <button class="download-card-btn" type="button" onclick="downloadAsImage(event, '${cardId}')" title="Download Flashcard" style="position:absolute;top:10px;right:10px;left:auto;width:36px;height:36px;border-radius:50%;display:flex;align-items:center;justify-content:center;z-index:20;background:rgba(255,255,255,0.4);border:1px solid rgba(255,255,255,0.6);backdrop-filter:blur(4px);-webkit-backdrop-filter:blur(4px);color:#ff4d6d;appearance:none;-webkit-appearance:none;">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
            <polyline points="7 10 12 15 17 10"></polyline>
            <line x1="12" y1="15" x2="12" y2="3"></line>
          </svg>
        </button>
        
        <div class="card-overlay" style="position: relative; z-index: 2;">
          <div class="kanji">${word.kanji || "—"}</div>
          <div class="kana">${word.kana || "—"}</div>
          <div class="romaji">${word.romaji || ""}</div>
          <div class="meaning">${word.meaning || "—"}</div>
          
          <img class="watermark-logo" src="./assets/logo.png" alt="NihonByte Logo" style="position:absolute; top:50%; left:50%; transform:translate(-50%, -50%); width:70%; height:auto; opacity:0; pointer-events:none; z-index:-1;">
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
      if(resultInfo) resultInfo.textContent = formatResultInfo(0, { typeOverride: "expression" });
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
    if(resultInfo) resultInfo.textContent = formatResultInfo(expressions.length, { typeOverride: "expression" });
  }

  function renderActivityPoster() {
    grid.innerHTML = "";
    if (typeof vocabularyData === "undefined") return;
    
    const activities = vocabularyData.filter(w => w.type === "activity");
    
    if (!activities.length) {
      grid.innerHTML = '<div class="empty-state">Belum ada kosakata aktivitas.</div>';
      if(resultInfo) resultInfo.textContent = formatResultInfo(0, { typeOverride: "activity" });
      return;
    }
    
    const container = document.createElement("div");
    container.className = "expression-wide-grid"; 
    
    activities.forEach((word) => {
      const card = document.createElement("div");
      card.className = "expression-wide-card";
      card.setAttribute("role", "button");
      card.setAttribute("tabindex", "0");
      card.setAttribute("aria-label", `Detail aktivitas ${word.kana || word.kanji}`);
      
      try {
        card.dataset.word = JSON.stringify(word);
      } catch (err) {
        console.warn("Gagal stringify aktivitas:", word);
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
    if(resultInfo) resultInfo.textContent = formatResultInfo(activities.length, { typeOverride: "activity" });
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
    resultInfo.textContent = script.charAt(0).toUpperCase() + script.slice(1);
  }

  function renderPatternPoster(level) {
    grid.classList.add("pattern-grid-layout");
    grid.style.setProperty("grid-template-columns", window.innerWidth <= 768 ? "1fr" : "repeat(2, minmax(0, 1fr))", "important");
    grid.innerHTML = "";
    const patterns = typeof patternData !== "undefined" ? patternData[level] || [] : [];
    if (!patterns.length) {
      grid.innerHTML = '<div class="empty-state">Tidak ada pola kalimat untuk level ini.</div>';
      if(resultInfo) resultInfo.textContent = formatResultInfo(0, { typeOverride: "pattern", levelOverride: level, includeLevel: true });
      return;
    }
    patterns.forEach((pattern) => {
      const card = document.createElement("article");
      card.className = "pattern-card";
      const fullExample = pattern.example || "";
      const splitMatch = fullExample.match(/^(.*?)(?:\s*\((.*?)\))?$/);
      const jpExample = (splitMatch?.[1] || "").trim();
      const idTranslation = (splitMatch?.[2] || "").trim();
      card.innerHTML = `
        <div class="pattern-title">${pattern.pattern}</div>
        <div class="pattern-example-jp">${jpExample}</div>
        <div class="pattern-example-id">${idTranslation}</div>
        <div class="pattern-meaning">${pattern.meaning}</div>
        <button class="pattern-audio-btn" type="button" data-text="${pattern.example}" aria-label="Putar audio pola">▶</button>
      `;
      
      grid.appendChild(card);
    });
   if(resultInfo) resultInfo.textContent = formatResultInfo(patterns.length, { typeOverride: "pattern", levelOverride: level, includeLevel: true });
  }

  function syncMobileTopbarLayout() {
    const topbar = document.querySelector(".topbar");
    const isMobile = window.innerWidth <= 768;
    if (!topbar || !resultInfo) return;

    if (isMobile) {
      topbar.style.setProperty("display", "flex", "important");
      topbar.style.setProperty("align-items", "center", "important");
      resultInfo.style.setProperty("order", "3", "important");
      resultInfo.style.setProperty("position", "static", "important");
      resultInfo.style.setProperty("margin-left", "auto", "important");
      resultInfo.style.setProperty("margin-right", "6px", "important");
      resultInfo.style.setProperty("max-width", "calc(100vw - 220px)", "important");
      resultInfo.style.setProperty("white-space", "nowrap", "important");
      resultInfo.style.setProperty("overflow", "hidden", "important");
      resultInfo.style.setProperty("text-overflow", "ellipsis", "important");
      searchBtn?.style.setProperty("order", "4", "important");
    } else {
      topbar.style.removeProperty("display");
      topbar.style.removeProperty("align-items");
      ["order", "position", "margin-left", "margin-right", "max-width", "white-space", "overflow", "text-overflow"].forEach((prop) => resultInfo.style.removeProperty(prop));
      searchBtn?.style.removeProperty("order");
    }
  }

  function getRecommendations(word) {
    if (typeof vocabularyData === "undefined") return [];
    const maxItems = 10;
    const sameType = vocabularyData.filter((w) => w.type === word.type && w.kanji !== word.kanji && w.level === word.level);
    const fallback = vocabularyData.filter((w) => w.kanji !== word.kanji && w.level === word.level);
    const source = sameType.length >= maxItems ? sameType : fallback;
    return shuffle(source).slice(0, maxItems);
  }

  let kanjiModalScrollY = 0;
  let kanjiModalScrollLocked = false;

  function lockPageScrollForKanjiModal() {
    if (kanjiModalScrollLocked) return;
    kanjiModalScrollY = window.scrollY || window.pageYOffset || 0;
    document.body.style.overflow = "hidden";
    document.body.style.position = "fixed";
    document.body.style.width = "100%";
    document.body.style.top = `-${kanjiModalScrollY}px`;
    document.documentElement.style.overflow = "hidden";
    kanjiModalScrollLocked = true;
  }

  function unlockPageScrollForKanjiModal() {
    if (!kanjiModalScrollLocked) return;
    if (sidebar && sidebar.classList.contains("active")) return;
    document.body.style.overflow = "";
    document.body.style.position = "";
    document.body.style.width = "";
    document.body.style.top = "";
    document.documentElement.style.overflow = "";
    window.scrollTo(0, kanjiModalScrollY);
    kanjiModalScrollLocked = false;
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
    lockPageScrollForKanjiModal();
    kanjiModal.classList.add("active");
    kanjiModal.setAttribute("aria-hidden", "false");
  }

  function closeModal() {
    stopTestTimer();
    kanjiModal.classList.remove("active");
    kanjiModal.setAttribute("aria-hidden", "true");
    unlockPageScrollForKanjiModal();
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
    if (isTesting) {
      openInfoModal(`
        <div style="text-align: center; padding: 10px;">
          <h3 style="color: #ff4d6d; margin-bottom: 10px;">Ujian Sedang Berlangsung! 🚧</h3>
          <p style="font-size: 1.1rem;">Selesaikan test terlebih dahulu sebelum membuka menu lain. Fokus, Bosku! 🔥</p>
        </div>
      `);
      return; // Stop di sini, sidebar tidak akan terbuka!
    }
    const isActive = sidebar.classList.toggle("active");
    overlay.classList.toggle("active", isActive);
    hamburger.setAttribute("aria-expanded", isActive);
    
    if (isActive) {
      // --- TAMBAHAN BARU: Kembalikan scroll sidebar ke paling atas ---
      sidebar.scrollTop = 0;
      
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

    // ==================================================
    // KUNCI AUTO-CLOSE: Tutup semua subfolder (<details>)
    // ==================================================
    document.querySelectorAll("#sidebar details").forEach(detail => {
      detail.removeAttribute("open");
    });
    // ==================================================

    document.body.style.overflow = originalOverflow || '';
    document.body.style.position = originalPosition || '';
    document.body.style.top = originalTop || '';
    document.body.style.width = originalWidth || '';
    document.documentElement.style.overflow = '';

    if (typeof savedScrollPosition === 'number') {
      window.scrollTo(0, savedScrollPosition);
    }

    if (!kanjiModal.classList.contains("active")) {
      kanjiModalScrollLocked = false;
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
    // PROTEKSI MODE TEST: User gak boleh kabur lewat logo
    if (isTesting) {
      const messages = [
        "<h3>諦めないで (Jangan Menyerah)! 💪</h3><p>Latihan ini adalah langkahmu menuju kesuksesan. Selesaikan dulu ujiannya!!</p>",
        "<h3>ちょっと待って! (Tunggu Sebentar!) ✋</h3><p>Sayang banget skornya kalau ditinggal sekarang. Sedikit lagi kamu akan menguasai materi ini!</p>",
        "<h3>Fokus, Bosku! 🔥</h3><p>Selesaikan apa yang sudah kamu mulai. Perjalanan seribu mil dimulai dengan satu langkah (dan tidak berhenti di tengah jalan).</p>"
      ];
      
      const randomMsg = messages[Math.floor(Math.random() * messages.length)];
      openInfoModal(`<div style="text-align: center; padding: 10px;">${randomMsg}</div>`);
      return;
    }

    // LOGIC NORMAL: Jika tidak sedang test
    selectedLevel = "all";
    selectedType = "verb-adj-only"; // <--- INI KUNCINYA, UBAH JADI VERB-ADJ-ONLY
    if (typeof category !== 'undefined' && category) category.value = "all";
    if (search) search.value = "";
    viewMode = "vocab";

    // Hapus warna aktif di tombol sidebar (kalau abis buka dari sidebar)
    document.querySelectorAll(".sidebar-filter-btn").forEach(btn => btn.classList.remove("active"));

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
      const mainType = button.dataset.main || button.dataset.type || "";
      const section = button.dataset.section || mainType;
      const level = button.dataset.level;

      // GOI & BUNPOU hanya aktif untuk N5-N4. Dokkai/Choukai semua dev mode.
      const goiOrBunpouDev = ["goi", "bunpou"].includes(mainType) && ["N3", "N2", "N1"].includes(level);
      const readingListeningDev = ["dokkai", "choukai", "listening"].includes(mainType);

      if (goiOrBunpouDev || readingListeningDev) {
        const devTitleMap = {
          goi: "Pengetahuan Bahasa (Kosakata)",
          bunpou: "Pengetahuan Bahasa (Tata Bahasa)",
          dokkai: "Dokkai Membaca",
          choukai: "Choukai Mendengarkan",
          listening: "Choukai Mendengarkan",
        };
        viewMode = `dev:exercise:${devTitleMap[mainType] || (latihanSectionLabel[section] || section)}:${level}`;
        render();
        closeSidebar();
        return;
      }

      startExercise(mainType, section, level);
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
      <h2 style="color: #ff4d6d; margin-bottom: 20px;">🚧 ${titlePrefix} ${type} 🚧</h2>
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
  if (resultInfo) resultInfo.textContent = `${titlePrefix} ${type} ${level} (Coming Soon)`;
}
  
  // ==========================================
  // INI ADALAH FUNGSI RENDER() YANG BENAR
  // (Sudah mencakup semua logika dari awal sampai akhir)
  // ==========================================
  function render() {
    window.scrollTo(0, 0);
    savedScrollPosition = 0;
    if (!isTesting) unlockQuizScroll();
    syncMobileTopbarLayout();
    grid.classList.remove("support-mode", "pattern-grid-layout");
    grid.style.removeProperty("grid-template-columns");
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
       
    const isActivityView = 
      viewMode === "vocab" && 
      (category?.value === "activity" || selectedType === "activity");
    
    if (viewMode.startsWith("dev:")) {
      const parts = viewMode.split(":"); 
      renderUnderDevelopment(parts[1], parts[2], parts[3]);
      return;
    }
    
    if (isExpressionView) {
      renderExpressionPoster();
      return;
    }

    if (isActivityView) {
      renderActivityPoster();
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
        resultInfo.textContent = formatResultInfo(0);
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
        if (e.target.closest(".play-audio-btn") || e.target.closest(".download-card-btn")) return;
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
    
    
    if (resultInfo) {
      resultInfo.textContent = formatResultInfo(words.length);
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
    search.addEventListener("input", (e) => {
      const query = e.target.value.trim();
      
      // Buka gembok: Kalau user ngetik pencarian dan posisi lagi di halaman default
      if (query !== "" && selectedType === "verb-adj-only") {
        selectedType = "all";
      } 
      // Kunci lagi: Kalau pencarian dihapus bersih & gak ada kategori yg lagi aktif
      else if (query === "" && !document.querySelector("#categoryGrid .cat-btn.active") && !document.querySelector(".sidebar-filter-btn.active")) {
        selectedType = "verb-adj-only";
      }
      
      render();
    });
  }
  window.addEventListener("resize", () => {
    syncMobileTopbarLayout();
    if (viewMode.startsWith("patterns:")) {
      grid.style.setProperty("grid-template-columns", window.innerWidth <= 768 ? "1fr" : "repeat(2, minmax(0, 1fr))", "important");
    }
  });
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

  window.downloadAsImage = function(event, cardId) {
  event.stopPropagation(); // Mencegah modal pop-up ikut kebuka

  const element = document.getElementById(cardId);
  if (!element) return;

  const watermark = element.querySelector('.watermark-logo');
  const audioBtn = element.querySelector('.play-audio-btn');
  const dlBtn = element.querySelector('.download-card-btn');

  // 1. Persiapan sebelum difoto
  if (watermark) watermark.style.opacity = '0.15'; 
  if (audioBtn) audioBtn.style.visibility = 'hidden';
  if (dlBtn) dlBtn.style.visibility = 'hidden';

  // 🚀 KALKULASI RESOLUSI FHD DINAMIS (ANTI BURIK CLUB!)
  const rect = element.getBoundingClientRect();
  const targetWidth = 1080; // Target kita: Lebar foto 1080px (FHD / IG Story Ready)
  let dynamicScale = targetWidth / rect.width;

  // Safety Limit biar RAM HP kentang gak meledak!
  // Mentok di scale 4, minimal di scale 2.5 biar tetep tajam.
  if (dynamicScale > 4) dynamicScale = 4;
  if (dynamicScale < 2.5) dynamicScale = 2.5;

  setTimeout(() => {
    html2canvas(element, {
      backgroundColor: null, // Tetap transparan
      scale: dynamicScale,   // <--- MANTRA BARU: Pakai kalkulasi skala di atas!
      useCORS: true,
      allowTaint: true,   
      logging: false,
      onclone: function (clonedDoc) {
        const clonedCard = clonedDoc.getElementById(cardId);
        
        // Paksa lengkungan dan potong area luar
        clonedCard.style.borderRadius = "16px"; 
        clonedCard.style.overflow = "hidden";   

        // Bikin elemen induk jadi transparan total biar gak bocor kotak-kotak putihnya
        if (clonedCard.parentElement) {
            clonedCard.parentElement.style.background = "transparent";
            clonedCard.parentElement.style.backgroundColor = "transparent";
        }
      }
    }).then(canvas => {
      const link = document.createElement('a');
      link.download = `NihonByte-${cardId}.png`;
      link.href = canvas.toDataURL("image/png");
      link.click();

      // 3. Kembalikan ke tampilan semula
      if (watermark) watermark.style.opacity = '0'; 
      if (audioBtn) audioBtn.style.visibility = 'visible';
      if (dlBtn) dlBtn.style.visibility = 'visible';
    }).catch(err => {
      console.error("Gagal mendownload gambar:", err);
      if (watermark) watermark.style.opacity = '0';
      if (audioBtn) audioBtn.style.visibility = 'visible';
      if (dlBtn) dlBtn.style.visibility = 'visible';
    });
  }, 150); 
};
  
  // Panggil render saat pertama kali dimuat
  window.addEventListener("resize", enforceMobileTopbarOrder);
  enforceMobileTopbarOrder();
  
  render();
});
