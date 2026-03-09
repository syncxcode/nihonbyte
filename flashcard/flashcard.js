// ============================================================
//  NihonByte — Kanji Card (Flashcard)
//  Isolated: semua logic & render di sini
//  Expose  : window.kanjiCardUI.render({ grid, onBackToMenu })
//  Prefix  : kc- (zero collision dengan style.css)
// ============================================================

(function initKanjiCard() {

  // ── Target types dari data.js ──
  const CARD_TYPES = ["verb-godan", "verb-ru", "verb-irregular", "adj-i", "adj-na"];
  const LEVELS     = ["N5", "N4", "N3", "N2", "N1"];

  // ── State ──
  let _deck       = [];   // kartu setelah shuffle
  let _index      = 0;    // posisi saat ini
  let _level      = "all";
  let _grid       = null;
  let _onBack     = null;
  let _flipping   = false;

  // ── Fisher-Yates shuffle ──
  function shuffle(arr) {
    const a = arr.slice();
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }

  // ── Build deck dari vocabularyData ──
  function buildDeck(level) {
    if (typeof vocabularyData === "undefined") return [];
    const filtered = vocabularyData.filter(w => {
      if (!CARD_TYPES.includes(w.type)) return false;
      if (level !== "all" && w.level !== level) return false;
      return true;
    });
    return shuffle(filtered);
  }

  // ── Detect mobile landscape ──
  function isMobileLandscape() {
    return window.innerWidth > window.innerHeight && window.innerWidth <= 900;
  }

  function isMobile() {
    return window.innerWidth <= 900;
  }

  // ── Speech synthesis ──
  function speakJP(text) {
    if (!window.speechSynthesis || !text) return;
    const clean = text.split("(")[0].trim();
    const utt   = new SpeechSynthesisUtterance(clean);
    utt.lang    = "ja-JP";
    utt.rate    = 0.95;
    window.speechSynthesis.cancel();
    window.speechSynthesis.speak(utt);
  }

  // ── Get examples untuk kata ini ──
  function getExamples(kanji) {
    const src = (typeof flashcardExamples !== "undefined") ? flashcardExamples : {};
    return src[kanji] || [];
  }

  // ── Render badge type ──
  function typeBadge(type) {
    const map = {
      "verb-godan"    : "Godan",
      "verb-ru"       : "Ichidan",
      "verb-irregular": "Suru",
      "adj-i"         : "Kata Sifat い",
      "adj-na"        : "Kata Sifat な",
    };
    return map[type] || type;
  }

  // ── SVG Icons ──
  const SVG_PLAY = `<svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden="true"><polygon points="5,3 19,12 5,21"/></svg>`;
  const SVG_PREV = `<svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polyline points="15,18 9,12 15,6"/></svg>`;
  const SVG_NEXT = `<svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polyline points="9,18 15,12 9,6"/></svg>`;
  const SVG_BACK = `<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polyline points="15,18 9,12 15,6"/></svg>`;

  // ── Render isi kartu ──
  function cardInnerHTML(word) {
    if (!word) return `<div class="kc-card-empty">Tidak ada kartu.</div>`;
    return `
      <div class="kc-card-inner">
        <div class="kc-card-badge">${typeBadge(word.type)} · ${word.level}</div>
        <div class="kc-card-kanji">${word.kanji || "—"}</div>
        <div class="kc-card-kana">${word.kana || ""}</div>
        <div class="kc-card-divider"></div>
        <div class="kc-card-romaji">${word.romaji || ""}</div>
        <div class="kc-card-meaning">${word.meaning || ""}</div>
        <div class="kc-card-underdev">Under Development</div>
      </div>
    `;
  }

  // ── Render contoh kalimat ──
  function examplesHTML(word) {
    if (!word) return "";
    const examples = getExamples(word.kanji);

    if (examples.length === 0) {
      // Render 5 placeholder under development + play button tetap ada
      return Array.from({ length: 5 }, (_, i) => `
        <div class="kc-example-item">
          <div class="kc-example-text">
            <span class="kc-example-jp kc-underdev">Under Development</span>
            <span class="kc-example-romaji kc-underdev-sub"></span>
            <span class="kc-example-id kc-underdev-sub"></span>
          </div>
          <button class="kc-play-btn" data-text="" aria-label="Putar contoh kalimat" disabled>
            ${SVG_PLAY}
          </button>
        </div>
      `).join("");
    }

    // Pad ke 5 kalau kurang
    const padded = examples.slice(0, 5);
    while (padded.length < 5) padded.push(null);

    return padded.map(ex => {
      if (!ex) return `
        <div class="kc-example-item">
          <div class="kc-example-text">
            <span class="kc-example-jp kc-underdev">Under Development</span>
          </div>
          <button class="kc-play-btn" data-text="" aria-label="Putar contoh kalimat" disabled>
            ${SVG_PLAY}
          </button>
        </div>
      `;
      return `
        <div class="kc-example-item">
          <div class="kc-example-text">
            <span class="kc-example-jp">${ex.jp}</span>
            <span class="kc-example-romaji">${ex.romaji}</span>
            <span class="kc-example-id">${ex.id}</span>
          </div>
          <button class="kc-play-btn" data-text="${ex.jp}" aria-label="Putar contoh kalimat">
            ${SVG_PLAY}
          </button>
        </div>
      `;
    }).join("");
  }

  // ── Counter text ──
  function counterText() {
    if (_deck.length === 0) return "0 / 0";
    return `${_index + 1} / ${_deck.length}`;
  }

  // ── Navigate dengan flip animation ──
  function navigate(dir) {
    if (_flipping || _deck.length === 0) return;
    const next = _index + dir;
    if (next < 0 || next >= _deck.length) return;

    _flipping = true;
    const cardEl = document.getElementById("kc-card");
    if (!cardEl) { _index = next; _flipping = false; return; }

    // Flip out
    cardEl.classList.add(dir > 0 ? "kc-flip-out-left" : "kc-flip-out-right");

    setTimeout(() => {
      _index = next;
      // Update counter
      const counter = document.getElementById("kc-counter");
      if (counter) counter.textContent = counterText();

      // Swap content
      cardEl.innerHTML = cardInnerHTML(_deck[_index]);
      cardEl.classList.remove("kc-flip-out-left", "kc-flip-out-right");
      cardEl.classList.add(dir > 0 ? "kc-flip-in-right" : "kc-flip-in-left");

      // Update examples
      const exEl = document.getElementById("kc-examples-body");
      if (exEl) exEl.innerHTML = examplesHTML(_deck[_index]);

      // Bind play buttons
      bindPlayButtons();

      // Update nav buttons state
      updateNavBtns();

      setTimeout(() => {
        cardEl.classList.remove("kc-flip-in-right", "kc-flip-in-left");
        _flipping = false;
      }, 180);
    }, 150);
  }

  // ── Update prev/next button state ──
  function updateNavBtns() {
    const prev = document.getElementById("kc-btn-prev");
    const next = document.getElementById("kc-btn-next");
    if (prev) prev.disabled = _index === 0;
    if (next) next.disabled = _index >= _deck.length - 1;
  }

  // ── Bind play buttons ──
  function bindPlayButtons() {
    document.querySelectorAll(".kc-play-btn").forEach(btn => {
      btn.addEventListener("click", e => {
        e.stopPropagation();
        const text = btn.dataset.text;
        if (text) speakJP(text);
      });
    });
  }

  // ── Touch swipe pada card element ──
  function bindSwipe(el) {
    let startX = 0;
    let startY = 0;
    const THRESHOLD = 50;

    el.addEventListener("touchstart", e => {
      startX = e.touches[0].clientX;
      startY = e.touches[0].clientY;
    }, { passive: true });

    el.addEventListener("touchend", e => {
      const dx = e.changedTouches[0].clientX - startX;
      const dy = e.changedTouches[0].clientY - startY;
      // Hanya proses horizontal swipe yang dominan
      if (Math.abs(dx) < THRESHOLD || Math.abs(dx) < Math.abs(dy)) return;
      if (dx < 0) navigate(1);  // swipe kiri → next
      else        navigate(-1); // swipe kanan → prev
    }, { passive: true });
  }

  // ── Keyboard navigation ──
  function handleKeydown(e) {
    if (e.key === "ArrowRight") navigate(1);
    if (e.key === "ArrowLeft")  navigate(-1);
  }

  // ── Level change handler ──
  function onLevelChange(level) {
    _level = level;
    _deck  = buildDeck(level);
    _index = 0;

    const cardEl = document.getElementById("kc-card");
    const exEl   = document.getElementById("kc-examples-body");
    const counter = document.getElementById("kc-counter");

    if (cardEl)  cardEl.innerHTML  = cardInnerHTML(_deck[0]);
    if (exEl)    exEl.innerHTML    = examplesHTML(_deck[0]);
    if (counter) counter.textContent = counterText();

    bindPlayButtons();
    updateNavBtns();
  }

  // ── Main render ──
  function render({ grid, onBackToMenu }) {
    _grid   = grid;
    _onBack = onBackToMenu || null;
    _level  = "all";
    _deck   = buildDeck("all");
    _index  = 0;

    const landscape = isMobileLandscape();
    const mobile    = isMobile();

    // Close sidebar saat landscape mobile
    if (landscape && typeof closeSidebar === "function") {
      closeSidebar();
    }

    const word = _deck[0] || null;

    // ── Level dropdown options ──
    const levelOpts = [
      `<option value="all">Semua Level (N5~N1)</option>`,
      ...LEVELS.map(l => `<option value="${l}">${l}</option>`)
    ].join("");

    // ── Back button (landscape mobile only) ──
    const backBtn = (landscape && mobile) ? `
      <button id="kc-back-btn" class="kc-back-btn" aria-label="Kembali ke Belajar">
        ${SVG_BACK}
        <span>Kembali</span>
      </button>
    ` : "";

    // ── Card area ──
    const cardArea = `
      <div class="kc-card-area">
        ${!mobile ? `<button id="kc-btn-prev" class="kc-nav-btn kc-nav-prev" aria-label="Kartu sebelumnya">${SVG_PREV}</button>` : ""}
        <div id="kc-card" class="kc-card">${cardInnerHTML(word)}</div>
        ${!mobile ? `<button id="kc-btn-next" class="kc-nav-btn kc-nav-next" aria-label="Kartu berikutnya">${SVG_NEXT}</button>` : ""}
      </div>
    `;

    // ── Mobile nav row (portrait) ──
    const mobileNav = (mobile && !landscape) ? `
      <div class="kc-mobile-nav">
        <button id="kc-btn-prev" class="kc-nav-btn kc-nav-prev" aria-label="Kartu sebelumnya">${SVG_PREV}</button>
        <span id="kc-counter" class="kc-counter">${counterText()}</span>
        <button id="kc-btn-next" class="kc-nav-btn kc-nav-next" aria-label="Kartu berikutnya">${SVG_NEXT}</button>
      </div>
    ` : "";

    // ── Examples area ──
    const examplesArea = `
      <div class="kc-examples-panel">
        <div class="kc-examples-header">
          <span class="kc-examples-title">Contoh Kalimat</span>
        </div>
        <div id="kc-examples-body" class="kc-examples-body">
          ${examplesHTML(word)}
        </div>
      </div>
    `;

    // ── Full render ──
    grid.innerHTML = `
      <div class="kc-poster ${landscape ? "kc-landscape" : "kc-portrait"}">

        <div class="kc-poster-header">
          ${backBtn}
          <div class="kc-poster-title">
            <span class="kc-title-pill">Kanji Card</span>
            ${!landscape ? `<span id="kc-counter" class="kc-counter">${counterText()}</span>` : ""}
            ${landscape ? `<span id="kc-counter" class="kc-counter">${counterText()}</span>` : ""}
          </div>
          <label class="kc-level-wrap" for="kc-level-select">
            <select id="kc-level-select" class="kc-level-select" aria-label="Pilih level JLPT">
              ${levelOpts}
            </select>
          </label>
        </div>

        <div class="kc-poster-body">
          <div class="kc-left-col">
            ${cardArea}
            ${mobileNav}
          </div>
          <div class="kc-right-col">
            ${examplesArea}
          </div>
        </div>

      </div>
    `;

    // ── Bind events ──
    const cardEl = document.getElementById("kc-card");
    if (cardEl) bindSwipe(cardEl);

    document.getElementById("kc-btn-prev")?.addEventListener("click", () => navigate(-1));
    document.getElementById("kc-btn-next")?.addEventListener("click", () => navigate(1));

    document.getElementById("kc-level-select")?.addEventListener("change", e => {
      onLevelChange(e.target.value);
    });

    document.getElementById("kc-back-btn")?.addEventListener("click", () => {
      if (typeof _onBack === "function") _onBack();
    });

    bindPlayButtons();
    updateNavBtns();

    // Keyboard
    document.removeEventListener("keydown", handleKeydown);
    document.addEventListener("keydown", handleKeydown);
  }

  // ── Expose global ──
  window.kanjiCardUI = { render };

})();
