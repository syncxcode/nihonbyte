// ============================================================
//  NihonByte — Practice System
//  Expose : window.practiceUI.open(opts)
//           window.practiceUI.rerender()
//  Prefix : prc-
// ============================================================

(function initPractice() {

  // ── Constants ──────────────────────────────────────────────
  const LOCKED_TYPES = ["verb-godan", "verb-ru", "verb-suru", "adj-i", "adj-na"];

  const TYPE_LABELS = {
    "verb-godan" : "Kata Kerja Godan",
    "verb-ru"    : "Kata Kerja Ichidan",
    "verb-suru"  : "Kata Kerja Suru",
    "adj-i"      : "Kata Sifat い",
    "adj-na"     : "Kata Sifat な",
  };

  const LEVEL_LABELS = {
    N5: "基礎",
    N4: "初級",
    N3: "中級",
    N2: "上級",
    N1: "最上級",
  };

  const LEVELS = ["N5", "N4", "N3", "N2", "N1"];

  // SVG icons per chapter type (full color / two-tone)
  const TYPE_SVGS = {
    "verb-godan": `<svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="24" cy="24" r="22" fill="#fff0f3"/>
      <path d="M14 34V18a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v16" stroke="#e11d48" stroke-width="2.5" stroke-linecap="round"/>
      <path d="M10 34h28" stroke="#e11d48" stroke-width="2.5" stroke-linecap="round"/>
      <path d="M20 26h8M20 30h5" stroke="#fda4af" stroke-width="2" stroke-linecap="round"/>
      <path d="M21 16v-4M27 16v-4" stroke="#e11d48" stroke-width="2" stroke-linecap="round"/>
    </svg>`,
    "verb-ru": `<svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="24" cy="24" r="22" fill="#eff6ff"/>
      <path d="M16 12h16v24H16z" fill="#bfdbfe" rx="2"/>
      <rect x="16" y="12" width="16" height="24" rx="2" stroke="#2563eb" stroke-width="2.5"/>
      <path d="M20 18h8M20 22h8M20 26h5" stroke="#2563eb" stroke-width="2" stroke-linecap="round"/>
      <path d="M30 8l4 4-4 4" stroke="#2563eb" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>`,
    "verb-suru": `<svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="24" cy="24" r="22" fill="#f0fdf4"/>
      <path d="M24 14a10 10 0 1 1 0 20 10 10 0 0 1 0-20z" fill="#bbf7d0"/>
      <path d="M24 14a10 10 0 1 1 0 20 10 10 0 0 1 0-20z" stroke="#16a34a" stroke-width="2.5"/>
      <path d="M20 24l3 3 5-5" stroke="#16a34a" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M24 10v4M24 34v4M10 24h4M34 24h4" stroke="#16a34a" stroke-width="2" stroke-linecap="round"/>
    </svg>`,
    "adj-i": `<svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="24" cy="24" r="22" fill="#fefce8"/>
      <path d="M24 12l3 7h7l-5.5 4 2 7L24 26l-6.5 4 2-7L14 19h7z" fill="#fde68a"/>
      <path d="M24 12l3 7h7l-5.5 4 2 7L24 26l-6.5 4 2-7L14 19h7z" stroke="#ca8a04" stroke-width="2" stroke-linejoin="round"/>
    </svg>`,
    "adj-na": `<svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="24" cy="24" r="22" fill="#fdf4ff"/>
      <path d="M24 14c-5.5 0-10 4.5-10 10s4.5 10 10 10 10-4.5 10-10" stroke="#9333ea" stroke-width="2.5" stroke-linecap="round"/>
      <path d="M24 14v10l7 4" stroke="#9333ea" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
      <circle cx="34" cy="14" r="5" fill="#e9d5ff"/>
      <path d="M32 14l1.5 1.5L37 12" stroke="#9333ea" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>`,
  };

  // SVG icons per level
  const LEVEL_SVGS = {
    N5: `<svg viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="28" cy="28" r="26" fill="#fff0f3"/>
      <circle cx="28" cy="28" r="26" stroke="#e11d48" stroke-width="2"/>
      <text x="28" y="24" text-anchor="middle" font-size="11" font-weight="700" fill="#e11d48" font-family="Ubuntu,sans-serif">N5</text>
      <text x="28" y="36" text-anchor="middle" font-size="9" fill="#9f1239" font-family="Shippori Mincho,serif">基礎</text>
    </svg>`,
    N4: `<svg viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="28" cy="28" r="26" fill="#eff6ff"/>
      <circle cx="28" cy="28" r="26" stroke="#2563eb" stroke-width="2"/>
      <text x="28" y="24" text-anchor="middle" font-size="11" font-weight="700" fill="#2563eb" font-family="Ubuntu,sans-serif">N4</text>
      <text x="28" y="36" text-anchor="middle" font-size="9" fill="#1e40af" font-family="Shippori Mincho,serif">初級</text>
    </svg>`,
    N3: `<svg viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="28" cy="28" r="26" fill="#f0fdf4"/>
      <circle cx="28" cy="28" r="26" stroke="#16a34a" stroke-width="2"/>
      <text x="28" y="24" text-anchor="middle" font-size="11" font-weight="700" fill="#16a34a" font-family="Ubuntu,sans-serif">N3</text>
      <text x="28" y="36" text-anchor="middle" font-size="9" fill="#14532d" font-family="Shippori Mincho,serif">中級</text>
    </svg>`,
    N2: `<svg viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="28" cy="28" r="26" fill="#fefce8"/>
      <circle cx="28" cy="28" r="26" stroke="#ca8a04" stroke-width="2"/>
      <text x="28" y="24" text-anchor="middle" font-size="11" font-weight="700" fill="#ca8a04" font-family="Ubuntu,sans-serif">N2</text>
      <text x="28" y="36" text-anchor="middle" font-size="9" fill="#713f12" font-family="Shippori Mincho,serif">上級</text>
    </svg>`,
    N1: `<svg viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="28" cy="28" r="26" fill="#fdf4ff"/>
      <circle cx="28" cy="28" r="26" stroke="#9333ea" stroke-width="2"/>
      <text x="28" y="24" text-anchor="middle" font-size="11" font-weight="700" fill="#9333ea" font-family="Ubuntu,sans-serif">N1</text>
      <text x="28" y="36" text-anchor="middle" font-size="9" fill="#581c87" font-family="Shippori Mincho,serif">最上級</text>
    </svg>`,
  };

  const LOCK_SVG = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>`;

  // ── State ───────────────────────────────────────────────────
  let _container   = null;
  let _onClose     = null;
  let _screen      = "level";    // "onboarding" | "level" | "chapter" | "placement"
  let _activeLevel = null;       // level yang sedang dibuka chapter-nya
  let _practiceProg = null;      // cache progress dari Firestore
  let _placementState = null;    // state placement quiz aktif
  let _currentQuestions = [];
  let _currentQIdx  = 0;
  let _correctCount = 0;

  // ── Firestore Helpers ───────────────────────────────────────
  async function getPracticeProgress() {
    if (!window.firebaseDb || !window.doc || !window.getDoc || !window.currentUser) return null;
    try {
      const uid = window.currentUser.uid;
      const ref = window.doc(window.firebaseDb, "users", uid, "practice", "progress");
      const snap = await window.getDoc(ref);
      const data = snap.exists() ? snap.data() : null;
      // Update cache agar render() bisa cek sync
      if (window.practiceUI) window.practiceUI._latestProg = data;
      return data;
    } catch (e) {
      console.error("Gagal ambil practice progress:", e);
      return null;
    }
  }

  async function savePracticeProgress(data) {
    if (!window.firebaseDb || !window.doc || !window.setDoc || !window.currentUser) return;
    try {
      const uid = window.currentUser.uid;
      const ref = window.doc(window.firebaseDb, "users", uid, "practice", "progress");
      await window.setDoc(ref, data, { merge: true });
      // Update cache agar render() bisa cek sync
      if (window.practiceUI) window.practiceUI._latestProg = data;
    } catch (e) {
      console.error("Gagal simpan practice progress:", e);
    }
  }

  async function savePlacementState(data) {
    if (!window.firebaseDb || !window.doc || !window.setDoc || !window.currentUser) return;
    try {
      const uid = window.currentUser.uid;
      const ref = window.doc(window.firebaseDb, "users", uid, "practice", "placementQuiz");
      await window.setDoc(ref, data, { merge: true });
    } catch (e) {
      console.error("Gagal simpan placement state:", e);
    }
  }

  async function getPlacementState() {
    if (!window.firebaseDb || !window.doc || !window.getDoc || !window.currentUser) return null;
    try {
      const uid = window.currentUser.uid;
      const ref = window.doc(window.firebaseDb, "users", uid, "practice", "placementQuiz");
      const snap = await window.getDoc(ref);
      return snap.exists() ? snap.data() : null;
    } catch (e) {
      return null;
    }
  }

  async function saveChapterProgress(chapterId, opened, total) {
    if (!window.firebaseDb || !window.doc || !window.setDoc || !window.currentUser) return;
    try {
      const uid = window.currentUser.uid;
      const percent = total ? Math.round((opened / total) * 100) : 0;
      const ref = window.doc(window.firebaseDb, "users", uid, "practice", "chapters");
      const patch = {};
      patch[chapterId] = { total, opened, percent, completed: percent >= 90 };
      await window.setDoc(ref, patch, { merge: true });
    } catch (e) {
      console.error("Gagal simpan chapter progress:", e);
    }
  }

  async function getChapterProgress() {
    if (!window.firebaseDb || !window.doc || !window.getDoc || !window.currentUser) return {};
    try {
      const uid = window.currentUser.uid;
      const ref = window.doc(window.firebaseDb, "users", uid, "practice", "chapters");
      const snap = await window.getDoc(ref);
      return snap.exists() ? snap.data() : {};
    } catch (e) {
      return {};
    }
  }

  // ── Utils ───────────────────────────────────────────────────
  function shuffleArray(arr) {
    const a = arr.slice();
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }

  function getUnlockedLevels(prog) {
    if (!prog) return [];
    return LEVELS.filter(l => prog.levelStatus && (prog.levelStatus[l] === "active" || prog.levelStatus[l] === "completed"));
  }

  function isLevelUnlocked(level, prog) {
    if (!prog) return false;
    return prog.levelStatus && (prog.levelStatus[level] === "active" || prog.levelStatus[level] === "completed");
  }

  function getVocabByTypeLevel(type, level) {
    if (typeof vocabularyData === "undefined") return [];
    return vocabularyData.filter(w => w.type === type && w.level === level);
  }

  function isMobileLandscape() {
    return window.innerWidth < window.innerHeight === false &&
           window.matchMedia("screen and (orientation: landscape) and (max-height: 520px)").matches;
  }

  function isDesktop() {
    return window.innerWidth >= 769;
  }

  // ── Placement Quiz Data ─────────────────────────────────────
  function buildPlacementQuestions(level, type) {
    // type: "goi" | "bunpou"
    let questions = [];
    if (type === "goi") {
      const src = window.latihanGoiReal && window.latihanGoiReal[level] ? window.latihanGoiReal[level] : {};
      // Ambil dari semua subtype yang ada, 10 soal total random
      const allQ = [];
      Object.values(src).forEach(arr => { if (Array.isArray(arr)) allQ.push(...arr); });
      questions = shuffleArray(allQ).slice(0, 10);
    } else if (type === "bunpou") {
      const src = window.latihanBunpouReal && window.latihanBunpouReal[level] ? window.latihanBunpouReal[level] : {};
      const allQ = [];
      Object.values(src).forEach(arr => { if (Array.isArray(arr)) allQ.push(...arr); });
      questions = shuffleArray(allQ).slice(0, 10);
    }
    return questions.map(q => ({
      prompt: q.question,
      options: q.options,
      answer: q.answer,
      translation: q.translation || "",
    }));
  }

  function buildPlacementSections(targetLevel) {
    const targetIdx = LEVELS.indexOf(targetLevel);
    const sections = [];
    for (let i = 0; i < targetIdx; i++) {
      const lvl = LEVELS[i];
      sections.push({ level: lvl, type: "goi",    id: `${lvl}_goi`,    done: false, score: 0, passed: false });
      sections.push({ level: lvl, type: "bunpou", id: `${lvl}_bunpou`, done: false, score: 0, passed: false });
    }
    return sections;
  }

  // ── Check if placement quiz in progress on app load ─────────
  async function checkPlacementOnLoad() {
    const state = await getPlacementState();
    if (state && state.status === "in_progress") {
      _placementState = state;
      return true;
    }
    return false;
  }

  // ── Render: Onboarding ──────────────────────────────────────
  function renderOnboarding() {
    _screen = "onboarding";
    if (!_container) return;

    _container.innerHTML = `
      <div class="prc-screen prc-onboarding">
        <div class="prc-onboarding-card">
          <div class="prc-onboarding-logo">
            <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="32" cy="32" r="30" fill="#fff0f3"/>
              <circle cx="32" cy="32" r="30" stroke="#e11d48" stroke-width="2"/>
              <path d="M20 44V22l12-8 12 8v22" stroke="#e11d48" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M26 44v-8h12v8" stroke="#fda4af" stroke-width="2" stroke-linecap="round"/>
              <path d="M32 14v4" stroke="#e11d48" stroke-width="2" stroke-linecap="round"/>
            </svg>
          </div>
          <h2 class="prc-onboarding-title">Mulai Perjalananmu</h2>
          <p class="prc-onboarding-desc">Kamu sudah familiar dengan level JLPT mana?</p>
          <div class="prc-onboarding-levels">
            ${LEVELS.map(lvl => `
              <button class="prc-onboarding-level-btn" data-level="${lvl}">
                <div class="prc-onboarding-level-icon">${LEVEL_SVGS[lvl]}</div>
                <div class="prc-onboarding-level-info">
                  <span class="prc-onboarding-level-name">${lvl}</span>
                  <span class="prc-onboarding-level-sub">${LEVEL_LABELS[lvl]}</span>
                </div>
                <div class="prc-onboarding-level-arrow">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"/></svg>
                </div>
              </button>
            `).join("")}
          </div>
          <p class="prc-onboarding-note">Jika kamu memilih level di atas N5, kamu akan dites terlebih dahulu.</p>
        </div>
      </div>
    `;

    _container.querySelectorAll(".prc-onboarding-level-btn").forEach(btn => {
      btn.addEventListener("click", () => {
        const level = btn.dataset.level;
        handleOnboardingSelect(level);
      });
    });
  }

  async function handleOnboardingSelect(level) {
    if (level === "N5") {
      // Langsung unlock N5
      const prog = {
        onboardingDone: true,
        startLevel: "N5",
        levelStatus: { N5: "active", N4: "locked", N3: "locked", N2: "locked", N1: "locked" }
      };
      await savePracticeProgress(prog);
      _practiceProg = prog;
      renderLevelSelect();
    } else {
      // Perlu placement test untuk level di bawah yang dipilih
      const sections = buildPlacementSections(level);
      _placementState = {
        status: "in_progress",
        targetLevel: level,
        sections: sections.map(s => ({ ...s })),
        currentSectionIdx: 0,
        startedAt: Date.now()
      };
      await savePlacementState(_placementState);
      renderPlacementIntro();
    }
  }

  // ── Render: Placement Intro ─────────────────────────────────
  function renderPlacementIntro() {
    _screen = "placement";
    if (!_container) return;

    const targetLevel = _placementState.targetLevel;
    const targetIdx = LEVELS.indexOf(targetLevel);
    const levelsToTest = LEVELS.slice(0, targetIdx);

    _container.innerHTML = `
      <div class="prc-screen prc-placement-intro">
        <div class="prc-placement-intro-card">
          <div class="prc-placement-icon">
            <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="32" cy="32" r="30" fill="#fff0f3"/>
              <circle cx="32" cy="32" r="30" stroke="#e11d48" stroke-width="2"/>
              <path d="M20 36h24M20 28h24M20 44h16" stroke="#fda4af" stroke-width="2.5" stroke-linecap="round"/>
              <circle cx="46" cy="44" r="8" fill="#e11d48"/>
              <path d="M43 44l2 2 4-4" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </div>
          <h2 class="prc-placement-intro-title">Placement Test</h2>
          <p class="prc-placement-intro-desc">
            Karena kamu memilih <strong>${targetLevel}</strong>, kamu perlu membuktikan kemampuan di level sebelumnya.
          </p>
          <div class="prc-placement-intro-levels">
            ${levelsToTest.map(lvl => `
              <div class="prc-placement-intro-level">
                <div class="prc-placement-intro-level-icon">${LEVEL_SVGS[lvl]}</div>
                <div class="prc-placement-intro-level-tests">
                  <span class="prc-placement-intro-level-name">${lvl}</span>
                  <span class="prc-placement-intro-level-sub">Goi (10 soal) + Bunpou (10 soal)</span>
                </div>
              </div>
            `).join("")}
          </div>
          <p class="prc-placement-note">Nilai minimum 80% per bagian. Kamu tidak bisa keluar sampai selesai.</p>
          <button class="prc-placement-start-btn" id="prc-start-placement">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polygon points="5 3 19 12 5 21"/></svg>
            Mulai Test
          </button>
        </div>
      </div>
    `;

    document.getElementById("prc-start-placement")?.addEventListener("click", () => {
      startNextPlacementSection();
    });
  }

  // ── Placement Quiz Logic ────────────────────────────────────
  function startNextPlacementSection() {
    if (!_placementState) return;
    const sections = _placementState.sections;
    const idx = _placementState.currentSectionIdx;

    // Cari seksi yang belum done
    let nextIdx = idx;
    while (nextIdx < sections.length && sections[nextIdx].done && sections[nextIdx].passed) {
      nextIdx++;
    }
    // Cek ada yang gagal dan perlu diulang
    const failedIdx = sections.findIndex(s => s.done && !s.passed);
    if (failedIdx > -1) nextIdx = failedIdx;

    if (nextIdx >= sections.length) {
      // Semua selesai
      finishPlacement();
      return;
    }

    _placementState.currentSectionIdx = nextIdx;
    const section = sections[nextIdx];
    _currentQuestions = buildPlacementQuestions(section.level, section.type);
    _currentQIdx = 0;
    _correctCount = 0;
    renderPlacementQuiz(section);
  }

  function renderPlacementQuiz(section) {
    _screen = "placement";
    if (!_container) return;

    const q = _currentQuestions[_currentQIdx];
    if (!q) return;

    const total = _currentQuestions.length;
    const progress = Math.round((_currentQIdx / total) * 100);
    const sectionLabel = section.type === "goi" ? "言語知識（語彙）" : "言語知識（文法）";

    _container.innerHTML = `
      <div class="prc-screen prc-quiz">
        <div class="prc-quiz-header">
          <div class="prc-quiz-meta">
            <span class="prc-quiz-level-badge">${section.level}</span>
            <span class="prc-quiz-section-label">${sectionLabel}</span>
          </div>
          <div class="prc-quiz-counter">${_currentQIdx + 1} / ${total}</div>
        </div>
        <div class="prc-quiz-progress-bar">
          <div class="prc-quiz-progress-fill" style="width:${progress}%"></div>
        </div>
        <div class="prc-quiz-body">
          <div class="prc-quiz-prompt">${q.prompt}</div>
          ${q.translation ? `<div class="prc-quiz-translation">${q.translation}</div>` : ""}
          <div class="prc-quiz-options" id="prc-quiz-options">
            ${q.options.map((opt, i) => `
              <button class="prc-quiz-option" data-opt="${encodeURIComponent(opt)}" data-answer="${encodeURIComponent(q.answer)}">
                <span class="prc-quiz-option-key">${String.fromCharCode(65 + i)}</span>
                <span class="prc-quiz-option-text">${opt}</span>
              </button>
            `).join("")}
          </div>
        </div>
        <div class="prc-quiz-lock-note">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" width="14" height="14"><rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
          Selesaikan test untuk melanjutkan
        </div>
      </div>
    `;

    document.querySelectorAll(".prc-quiz-option").forEach(btn => {
      btn.addEventListener("click", () => handlePlacementAnswer(btn, section));
    });
  }

  function handlePlacementAnswer(btn, section) {
    const opt = decodeURIComponent(btn.dataset.opt);
    const answer = decodeURIComponent(btn.dataset.answer);
    const isCorrect = opt === answer;

    if (isCorrect) _correctCount++;

    // Mark all options
    document.querySelectorAll(".prc-quiz-option").forEach(b => {
      b.disabled = true;
      const bOpt = decodeURIComponent(b.dataset.opt);
      if (bOpt === answer) b.classList.add("prc-quiz-option--correct");
      else if (b === btn && !isCorrect) b.classList.add("prc-quiz-option--wrong");
    });

    setTimeout(() => {
      _currentQIdx++;
      if (_currentQIdx >= _currentQuestions.length) {
        // Seksi selesai
        const score = Math.round((_correctCount / _currentQuestions.length) * 100);
        const passed = score >= 80;
        const sections = _placementState.sections;
        const idx = _placementState.currentSectionIdx;
        sections[idx].done = true;
        sections[idx].score = score;
        sections[idx].passed = passed;

        savePlacementState(_placementState);
        renderSectionResult(section, score, passed);
      } else {
        renderPlacementQuiz(section);
      }
    }, 800);
  }

  function renderSectionResult(section, score, passed) {
    if (!_container) return;
    const sectionLabel = section.type === "goi" ? "Goi" : "Bunpou";

    const pendingSections = _placementState.sections.filter(s => !s.done || !s.passed);

    _container.innerHTML = `
      <div class="prc-screen prc-section-result">
        <div class="prc-section-result-card">
          <div class="prc-section-result-icon ${passed ? "prc-section-result-icon--pass" : "prc-section-result-icon--fail"}">
            ${passed
              ? `<svg viewBox="0 0 48 48" fill="none"><circle cx="24" cy="24" r="22" fill="#f0fdf4" stroke="#16a34a" stroke-width="2"/><polyline points="14,24 20,30 34,16" stroke="#16a34a" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/></svg>`
              : `<svg viewBox="0 0 48 48" fill="none"><circle cx="24" cy="24" r="22" fill="#fff0f3" stroke="#e11d48" stroke-width="2"/><line x1="16" y1="16" x2="32" y2="32" stroke="#e11d48" stroke-width="3" stroke-linecap="round"/><line x1="32" y1="16" x2="16" y2="32" stroke="#e11d48" stroke-width="3" stroke-linecap="round"/></svg>`
            }
          </div>
          <h3 class="prc-section-result-title">${section.level} ${sectionLabel}</h3>
          <div class="prc-section-result-score ${passed ? "prc-section-result-score--pass" : "prc-section-result-score--fail"}">
            ${score}%
          </div>
          <p class="prc-section-result-msg">
            ${passed
              ? "Bagus! Lanjut ke bagian berikutnya."
              : `Nilai minimum 80%. Kamu perlu mengulang bagian ini.`
            }
          </p>
          <button class="prc-placement-start-btn" id="prc-next-section">
            ${pendingSections.length > 0
              ? `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polygon points="5 3 19 12 5 21"/></svg> ${passed ? "Lanjut" : "Ulangi"}`
              : `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg> Lihat Hasil`
            }
          </button>
        </div>
      </div>
    `;

    document.getElementById("prc-next-section")?.addEventListener("click", () => {
      startNextPlacementSection();
    });
  }

  async function finishPlacement() {
    const sections = _placementState.sections;
    const targetLevel = _placementState.targetLevel;
    const targetIdx = LEVELS.indexOf(targetLevel);

    // Tentukan level yang unlock berdasarkan hasil
    const levelStatus = { N5: "locked", N4: "locked", N3: "locked", N2: "locked", N1: "locked" };

    // Unlock N5 selalu
    levelStatus["N5"] = "active";

    // Cek per level apakah goi dan bunpou keduanya passed
    for (let i = 1; i < targetIdx; i++) {
      const lvl = LEVELS[i - 1];
      const goiPassed = sections.find(s => s.level === lvl && s.type === "goi")?.passed;
      const bunpouPassed = sections.find(s => s.level === lvl && s.type === "bunpou")?.passed;
      if (goiPassed && bunpouPassed) {
        levelStatus[LEVELS[i]] = "active";
      } else {
        break; // Stop di level yang gagal
      }
    }

    // Cek apakah semua level sebelum target lulus → unlock target
    const allPassed = sections.every(s => s.passed);
    if (allPassed) levelStatus[targetLevel] = "active";

    const prog = {
      onboardingDone: true,
      startLevel: "N5",
      levelStatus,
    };

    await savePracticeProgress(prog);
    await savePlacementState({ ...(_placementState || {}), status: "done" });
    _practiceProg = prog;
    _placementState = null;

    renderPlacementFinalResult(levelStatus, targetLevel);
  }

  function renderPlacementFinalResult(levelStatus, targetLevel) {
    if (!_container) return;
    const unlockedLevels = LEVELS.filter(l => levelStatus[l] === "active");

    _container.innerHTML = `
      <div class="prc-screen prc-final-result">
        <div class="prc-final-result-card">
          <div class="prc-final-result-icon">
            <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="32" cy="32" r="30" fill="#fff0f3"/>
              <circle cx="32" cy="32" r="30" stroke="#e11d48" stroke-width="2"/>
              <path d="M24 32l6 6 12-12" stroke="#e11d48" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </div>
          <h2 class="prc-final-result-title">Placement Selesai</h2>
          <p class="prc-final-result-desc">Level yang berhasil di-unlock:</p>
          <div class="prc-final-result-levels">
            ${unlockedLevels.map(l => `
              <div class="prc-final-result-level">
                ${LEVEL_SVGS[l]}
                <span>${l} — ${LEVEL_LABELS[l]}</span>
              </div>
            `).join("")}
          </div>
          ${!unlockedLevels.includes(targetLevel)
            ? `<p class="prc-final-result-note">Beberapa level belum terbuka. Pelajari dari N5 terlebih dahulu.</p>`
            : ""
          }
          <button class="prc-placement-start-btn" id="prc-go-practice">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            Mulai Belajar
          </button>
        </div>
      </div>
    `;

    document.getElementById("prc-go-practice")?.addEventListener("click", () => {
      renderLevelSelect();
    });
  }

  // ── Render: Level Select ────────────────────────────────────
  async function renderLevelSelect() {
    _screen = "level";
    _activeLevel = null;
    if (!_container) return;

    // Refresh progress
    _practiceProg = await getPracticeProgress();
    const chapterProg = await getChapterProgress();

    const unlockedLevels = getUnlockedLevels(_practiceProg);

    _container.innerHTML = `
      <div class="prc-screen prc-level-select">
        <div class="prc-level-header">
          <h2 class="prc-level-title">Practice</h2>
          <p class="prc-level-sub">Pilih level untuk mulai belajar</p>
        </div>
        <div class="prc-level-grid">
          ${LEVELS.map(lvl => {
            const unlocked = unlockedLevels.includes(lvl);

            // Hitung overall progress level ini
            const levelChapters = LOCKED_TYPES.map(t => `${lvl}_${t}`);
            const done = levelChapters.filter(id => chapterProg[id]?.completed).length;
            const total = levelChapters.length;
            const pct = total ? Math.round((done / total) * 100) : 0;

            return `
              <button class="prc-level-card ${unlocked ? "" : "prc-level-card--locked"}"
                      data-level="${lvl}" ${unlocked ? "" : "disabled"}>
                <div class="prc-level-card-icon">${LEVEL_SVGS[lvl]}</div>
                <div class="prc-level-card-body">
                  <div class="prc-level-card-head">
                    <span class="prc-level-card-name">${lvl}</span>
                    <span class="prc-level-card-label">${LEVEL_LABELS[lvl]}</span>
                  </div>
                  ${unlocked ? `
                    <div class="prc-level-card-progress-wrap">
                      <div class="prc-level-card-progress-bar">
                        <div class="prc-level-card-progress-fill" style="width:${pct}%"></div>
                      </div>
                      <span class="prc-level-card-pct">${done}/${total} chapter</span>
                    </div>
                  ` : `
                    <div class="prc-level-card-lock">
                      ${LOCK_SVG}
                      <span>Selesaikan level sebelumnya</span>
                    </div>
                  `}
                </div>
                ${unlocked
                  ? `<div class="prc-level-card-arrow"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"/></svg></div>`
                  : ""
                }
              </button>
            `;
          }).join("")}
        </div>
      </div>
    `;

    _container.querySelectorAll(".prc-level-card:not([disabled])").forEach(btn => {
      btn.addEventListener("click", () => {
        renderChapterSelect(btn.dataset.level);
      });
    });
  }

  // ── Render: Chapter Select ──────────────────────────────────
  async function renderChapterSelect(level) {
    _screen = "chapter";
    _activeLevel = level;
    if (!_container) return;

    const chapterProg = await getChapterProgress();

    _container.innerHTML = `
      <div class="prc-screen prc-chapter-select">
        <div class="prc-chapter-header">
          <button class="prc-back-btn" id="prc-chapter-back">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="15 18 9 12 15 6"/></svg>
          </button>
          <div class="prc-chapter-title-wrap">
            <span class="prc-chapter-level-badge">${level}</span>
            <span class="prc-chapter-title">${LEVEL_LABELS[level]}</span>
          </div>
        </div>
        <div class="prc-chapter-grid">
          ${LOCKED_TYPES.map(type => {
            const chapterId = `${level}_${type}`;
            const prog = chapterProg[chapterId];
            const pct = prog ? prog.percent : 0;
            const opened = prog ? prog.opened : 0;
            const total = getVocabByTypeLevel(type, level).length;
            const completed = pct >= 90;

            return `
              <button class="prc-chapter-card ${completed ? "prc-chapter-card--done" : ""}"
                      data-type="${type}" data-level="${level}" data-total="${total}">
                <div class="prc-chapter-card-icon">${TYPE_SVGS[type] || ""}</div>
                <div class="prc-chapter-card-body">
                  <div class="prc-chapter-card-name">${TYPE_LABELS[type]}</div>
                  <div class="prc-chapter-card-count">${total} kata</div>
                  <div class="prc-chapter-card-progress-wrap">
                    <div class="prc-chapter-card-progress-bar">
                      <div class="prc-chapter-card-progress-fill" style="width:${pct}%"></div>
                    </div>
                    <span class="prc-chapter-card-pct">${pct}%</span>
                  </div>
                  ${completed
                    ? `<div class="prc-chapter-card-done-badge">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" width="12" height="12"><polyline points="20 6 9 17 4 12"/></svg>
                        Selesai
                       </div>`
                    : `<div class="prc-chapter-card-cta">${opened > 0 ? "Lanjutkan" : "Mulai"}</div>`
                  }
                </div>
              </button>
            `;
          }).join("")}
        </div>
      </div>
    `;

    document.getElementById("prc-chapter-back")?.addEventListener("click", () => {
      renderLevelSelect();
    });

    _container.querySelectorAll(".prc-chapter-card").forEach(btn => {
      btn.addEventListener("click", () => {
        openChapterInFlashcard(btn.dataset.type, btn.dataset.level, parseInt(btn.dataset.total));
      });
    });
  }

  // ── Open Chapter in Kanji Card ──────────────────────────────
  function openChapterInFlashcard(type, level, total) {
    if (typeof window.kanjiCardUI === "undefined" || !window.kanjiCardUI) return;

    // Ambil vocab untuk chapter ini
    const words = getVocabByTypeLevel(type, level);
    if (!words.length) return;

    // Track kata yang dibuka
    let openedSet = new Set();
    const chapterId = `${level}_${type}`;

    // Sembunyikan practice container
    if (_container) _container.style.display = "none";

    // Siapkan grid
    const grid = document.getElementById("grid");
    if (!grid) return;

    const kcContainer = document.createElement("div");
    kcContainer.id = "kc-single-container";
    kcContainer.style.cssText = "width:100%;grid-column:1/-1;";
    grid.appendChild(kcContainer);
    grid.classList.add("kc-grid-mode");
    grid.style.removeProperty("grid-template-columns");

    const contentPanel = document.querySelector(".content-panel");
    if (contentPanel) contentPanel.scrollTop = 0;

    // Set viewMode
    if (typeof viewMode !== "undefined") {
      window._practiceViewModeBackup = window.viewMode;
    }

    window.kanjiCardUI.openWord(words[0], {
      grid: kcContainer,
      onBackToMenu: async () => {
        kcContainer.remove();
        grid.classList.remove("kc-grid-mode");
        if (_container) _container.style.display = "";

        // Hitung progress
        openedSet.add(words[0].kanji || words[0].kana);
        const opened = openedSet.size;
        await saveChapterProgress(chapterId, opened, total);

        // Re-render chapter
        renderChapterSelect(level);
      }
    });

    // Track kata yang dibuka via navigation
    const origNavigate = window.kanjiCardUI._navigate;
  }

  // ── Render: Blur Overlay on Grid ────────────────────────────
  function applyBlurOverlay(show) {
    const grid = document.getElementById("grid");
    const searchBtn = document.getElementById("searchBtn");

    if (show) {
      grid?.classList.add("prc-blur-overlay");
      if (searchBtn) {
        searchBtn.disabled = true;
        searchBtn.classList.add("prc-search-blocked");
        searchBtn.setAttribute("title", "Selesaikan onboarding terlebih dahulu");
      }
      // Tambah overlay card kalau belum ada
      if (!document.getElementById("prc-unlock-overlay")) {
        const overlay = document.createElement("div");
        overlay.id = "prc-unlock-overlay";
        overlay.className = "prc-unlock-overlay";
        overlay.innerHTML = `
          <div class="prc-unlock-card">
            <div class="prc-unlock-icon">
              ${LOCK_SVG}
            </div>
            <h3 class="prc-unlock-title">Konten Terkunci</h3>
            <p class="prc-unlock-desc">Pilih level belajarmu terlebih dahulu untuk membuka konten ini.</p>
            <button class="prc-unlock-btn" id="prc-unlock-cta">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
              Mulai Onboarding
            </button>
          </div>
        `;
        document.body.appendChild(overlay);

        document.getElementById("prc-unlock-cta")?.addEventListener("click", () => {
          // Tutup overlay dan buka practice
          removeBlurOverlay();
          openPractice({ container: document.getElementById("grid"), onClose: () => {} });
        });
      }
    } else {
      removeBlurOverlay();
    }
  }

  function removeBlurOverlay() {
    const grid = document.getElementById("grid");
    const searchBtn = document.getElementById("searchBtn");

    grid?.classList.remove("prc-blur-overlay");
    if (searchBtn) {
      searchBtn.disabled = false;
      searchBtn.classList.remove("prc-search-blocked");
      searchBtn.setAttribute("title", "Buka pencarian & filter");
    }
    document.getElementById("prc-unlock-overlay")?.remove();
  }

  // ── Check onboarding status ─────────────────────────────────
  async function checkOnboardingStatus() {
    if (!window.currentUser) return;
    const prog = await getPracticeProgress();
    _practiceProg = prog;

    if (!prog || !prog.onboardingDone) {
      // Hanya apply blur di halaman vocab/flashcard utama
      // Jangan apply di Latihan, Grammar, dll
      const grid = document.getElementById("grid");
      const isVocabView = grid && grid.style.display !== "none" &&
        !grid.classList.contains("hub-mode") &&
        !document.body.classList.contains("training-session");
      if (isVocabView) {
        applyBlurOverlay(true);
      }
    } else {
      removeBlurOverlay();
    }
  }

  // ── Open Practice ───────────────────────────────────────────
  async function openPractice(opts) {
    _onClose = opts.onClose || null;

    // Inject wrapper di dalam #grid langsung (replace konten grid)
    const grid = document.getElementById("grid");
    const contentPanel = document.querySelector(".content-panel");

    let wrapper = document.getElementById("prc-wrapper");
    if (!wrapper) {
      wrapper = document.createElement("div");
      wrapper.id = "prc-wrapper";
      wrapper.className = "prc-wrapper";
    }

    // Kosongkan grid dan inject wrapper ke dalamnya
    grid.innerHTML = "";
    grid.classList.remove("hub-mode", "support-mode", "kc-grid-mode");
    grid.style.removeProperty("grid-template-columns");
    grid.appendChild(wrapper);

    wrapper.style.display = "";
    if (contentPanel) contentPanel.scrollTop = 0;
    else window.scrollTo({ top: 0, behavior: "instant" });

    _container = wrapper;

    // Cek apakah ada placement quiz yang sedang berjalan
    const inProgress = await checkPlacementOnLoad();
    if (inProgress) {
      renderPlacementIntro();
      return;
    }

    // Cek apakah onboarding sudah selesai
    const prog = await getPracticeProgress();
    _practiceProg = prog;

    if (!prog || !prog.onboardingDone) {
      renderOnboarding();
    } else {
      renderLevelSelect();
    }
  }

  function closePractice() {
    const wrapper = document.getElementById("prc-wrapper");
    if (wrapper) wrapper.remove(); // hapus dari DOM

    _container = null;
    _screen = "level";
    if (typeof _onClose === "function") _onClose(); // trigger render()
  }

  // ── rerender (untuk resize/rotate) ─────────────────────────
  function rerender() {
    if (!_container) return;
    switch (_screen) {
      case "onboarding":    renderOnboarding(); break;
      case "level":         renderLevelSelect(); break;
      case "chapter":       if (_activeLevel) renderChapterSelect(_activeLevel); break;
      case "placement":
        if (_placementState && _placementState.sections) {
          const idx = _placementState.currentSectionIdx || 0;
          const section = _placementState.sections[idx];
          if (section && _currentQuestions.length > 0) {
            renderPlacementQuiz(section);
          } else {
            renderPlacementIntro();
          }
        }
        break;
    }
  }

  // ── Expose ──────────────────────────────────────────────────
  // Cache progress biar tidak fetch ulang tiap kali
  let _cachedProg = null;
  async function _getPracticeProgressCached() {
    if (_practiceProg) return _practiceProg;
    if (_cachedProg) return _cachedProg;
    _cachedProg = await getPracticeProgress();
    return _cachedProg;
  }

  window.practiceUI = {
    open: openPractice,
    close: closePractice,
    rerender,
    checkOnboardingStatus,
    applyBlurOverlay,
    removeBlurOverlay,
    getScreen: () => _screen,
    _getPracticeProgressCached,
    _latestProg: undefined, // undefined = belum fetch, null = sudah fetch tapi kosong
  };

})();
