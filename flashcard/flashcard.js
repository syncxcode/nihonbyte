// ============================================================
//  NihonByte — Kanji Card (Flashcard)
//  Expose  : window.kanjiCardUI.render({ grid, onBackToMenu })
//  Prefix  : kc-
// ============================================================

(function initKanjiCard() {

  const CARD_TYPES = ["verb-godan", "verb-ru", "verb-irregular", "adj-i", "adj-na"];
  const LEVELS     = ["N5", "N4", "N3", "N2", "N1"];

  let _deck       = [];
  let _index      = 0;
  let _level      = "all";
  let _grid       = null;
  let _onBack     = null;
  let _flipping   = false;

  // Track mode aktif agar rerender tahu harus render apa
  // "list"   = flashcard utama (dari menu Kanji Card)
  // "single" = openWord (dari klik kartu di grid vocab)
  let _mode       = "list";
  let _activeWord = null;

  function shuffle(arr) {
    const a = arr.slice();
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }

  function buildDeck(level) {
    if (typeof vocabularyData === "undefined") return [];
    const filtered = vocabularyData.filter(w => {
      if (!CARD_TYPES.includes(w.type)) return false;
      if (level !== "all" && w.level !== level) return false;
      return true;
    });
    return shuffle(filtered);
  }

  function isMobileLandscape() {
    return window.innerWidth > window.innerHeight && window.innerWidth <= 1024;
  }

  function isMobile() {
    return window.innerWidth <= 1024;
  }

  function speakJP(text) {
    if (!window.speechSynthesis || !text) return;
    const clean = text.split("(")[0].trim();
    const utt   = new SpeechSynthesisUtterance(clean);
    utt.lang    = "ja-JP";
    utt.rate    = 0.95;
    window.speechSynthesis.cancel();
    window.speechSynthesis.speak(utt);
  }

  function getExamples(kanji) {
    const src = (typeof flashcardExamples !== "undefined") ? flashcardExamples : {};
    return src[kanji] || [];
  }

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

  const SVG_PLAY = '<svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden="true"><polygon points="5,3 19,12 5,21"/></svg>';
  const SVG_PREV = '<svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polyline points="15,18 9,12 15,6"/></svg>';
  const SVG_NEXT = '<svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polyline points="9,18 15,12 9,6"/></svg>';
  const SVG_BACK = '<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polyline points="15,18 9,12 15,6"/></svg>';

  function cardInnerHTML(word) {
    if (!word) return '<div class="kc-card-empty">Tidak ada kartu.</div>';
    return (
      '<div class="kc-card-inner">' +
        '<div class="kc-card-badge">' + typeBadge(word.type) + ' \u00b7 ' + word.level + '</div>' +
        '<div class="kc-card-kanji">' + (word.kanji || '\u2014') + '</div>' +
        '<div class="kc-card-kana">' + (word.kana || '') + '</div>' +
        '<div class="kc-card-divider"></div>' +
        '<div class="kc-card-romaji">' + (word.romaji || '') + '</div>' +
        '<div class="kc-card-meaning">' + (word.meaning || '') + '</div>' +
        '<div class="kc-card-underdev">Under Development</div>' +
      '</div>'
    );
  }

  function examplesHTML(word) {
    if (!word) return "";
    var examples = getExamples(word.kanji);
    var padded = examples.slice(0, 5);
    while (padded.length < 5) padded.push(null);

    return padded.map(function(ex) {
      if (!ex) {
        return (
          '<div class="kc-example-item">' +
            '<div class="kc-example-text">' +
              '<span class="kc-example-jp kc-underdev">Under Development</span>' +
            '</div>' +
            '<button class="kc-play-btn" data-text="" disabled>' + SVG_PLAY + '</button>' +
          '</div>'
        );
      }
      return (
        '<div class="kc-example-item">' +
          '<div class="kc-example-text">' +
            '<span class="kc-example-jp">' + ex.jp + '</span>' +
            '<span class="kc-example-romaji">' + ex.romaji + '</span>' +
            '<span class="kc-example-id">' + ex.id + '</span>' +
          '</div>' +
          '<button class="kc-play-btn" data-text="' + ex.jp + '">' + SVG_PLAY + '</button>' +
        '</div>'
      );
    }).join("");
  }

  function counterText() {
    if (_deck.length === 0) return "0 / 0";
    return (_index + 1) + " / " + _deck.length;
  }

  function navigate(dir) {
    if (_flipping || _deck.length === 0) return;
    var next = _index + dir;
    if (next < 0 || next >= _deck.length) return;

    _flipping = true;
    var cardEl = document.getElementById("kc-card");
    if (!cardEl) { _index = next; _flipping = false; return; }

    cardEl.classList.add(dir > 0 ? "kc-flip-out-left" : "kc-flip-out-right");

    setTimeout(function() {
      _index = next;
      var counter = document.getElementById("kc-counter");
      if (counter) counter.textContent = counterText();

      cardEl.innerHTML = cardInnerHTML(_deck[_index]);
      cardEl.classList.remove("kc-flip-out-left", "kc-flip-out-right");
      cardEl.classList.add(dir > 0 ? "kc-flip-in-right" : "kc-flip-in-left");

      var exEl = document.getElementById("kc-examples-body");
      if (exEl) exEl.innerHTML = examplesHTML(_deck[_index]);

      bindPlayButtons();
      updateNavBtns();

      setTimeout(function() {
        cardEl.classList.remove("kc-flip-in-right", "kc-flip-in-left");
        _flipping = false;
      }, 180);
    }, 150);
  }

  function updateNavBtns() {
    var prev = document.getElementById("kc-btn-prev");
    var next = document.getElementById("kc-btn-next");
    if (prev) prev.disabled = _index === 0;
    if (next) next.disabled = _index >= _deck.length - 1;
  }

  function bindPlayButtons() {
    document.querySelectorAll(".kc-play-btn").forEach(function(btn) {
      btn.addEventListener("click", function(e) {
        e.stopPropagation();
        var text = btn.dataset.text;
        if (text) speakJP(text);
      });
    });
  }

  function bindSwipe(el) {
    var startX = 0;
    var startY = 0;
    el.addEventListener("touchstart", function(e) {
      startX = e.touches[0].clientX;
      startY = e.touches[0].clientY;
    }, { passive: true });
    el.addEventListener("touchend", function(e) {
      var dx = e.changedTouches[0].clientX - startX;
      var dy = e.changedTouches[0].clientY - startY;
      if (Math.abs(dx) < 50 || Math.abs(dx) < Math.abs(dy)) return;
      navigate(dx < 0 ? 1 : -1);
    }, { passive: true });
  }

  function handleKeydown(e) {
    if (e.key === "ArrowRight") navigate(1);
    if (e.key === "ArrowLeft")  navigate(-1);
  }

  function onLevelChange(level) {
    _level = level;
    _deck  = buildDeck(level);
    _index = 0;
    var cardEl  = document.getElementById("kc-card");
    var exEl    = document.getElementById("kc-examples-body");
    var counter = document.getElementById("kc-counter");
    if (cardEl)  cardEl.innerHTML    = cardInnerHTML(_deck[0]);
    if (exEl)    exEl.innerHTML      = examplesHTML(_deck[0]);
    if (counter) counter.textContent = counterText();
    bindPlayButtons();
    updateNavBtns();
  }

  function render(opts) {
    var grid         = opts.grid;
    var onBackToMenu = opts.onBackToMenu || null;
    _grid   = grid;
    _onBack = onBackToMenu;
    _mode   = "list";

    // _preserveState: jangan rebuild deck (dipanggil dari rerender saat resize/rotate)
    if (!opts._preserveState) {
      _level = "all";
      _deck  = buildDeck("all");
      _index = 0;
    }

    var landscape = isMobileLandscape();
    var mobile    = isMobile();

    if (typeof closeSidebar === "function") closeSidebar();

    var word = _deck[0] || null;

    var levelOpts = '<option value="all">Semua Level (N5~N1)</option>';
    LEVELS.forEach(function(l) { levelOpts += '<option value="' + l + '">' + l + '</option>'; });

    var backBtn = (landscape && mobile)
      ? '<button id="kc-back-btn" class="kc-back-btn">' + SVG_BACK + '<span>Kembali</span></button>'
      : "";

    var navPrev = !mobile ? '<button id="kc-btn-prev" class="kc-nav-btn kc-nav-prev">' + SVG_PREV + '</button>' : "";
    var navNext = !mobile ? '<button id="kc-btn-next" class="kc-nav-btn kc-nav-next">' + SVG_NEXT + '</button>' : "";

    // Mobile portrait: swipe only (no nav row — counter ada di header)
    // Mobile landscape: swipe only

    grid.innerHTML =
      '<div class="kc-poster ' + (landscape ? "kc-landscape" : "kc-portrait") + '">' +

        '<div class="kc-poster-header">' +
          backBtn +
          '<div class="kc-poster-title">' +
            '<span class="kc-title-pill">Kanji Card</span>' +
            '<span id="kc-counter" class="kc-counter">' + counterText() + '</span>' +
          '</div>' +
          '<label class="kc-level-wrap" for="kc-level-select">' +
            '<select id="kc-level-select" class="kc-level-select">' + levelOpts + '</select>' +
          '</label>' +
        '</div>' +

        '<div class="kc-content-box">' +
          '<div class="kc-left-col">' +
            '<div class="kc-card-area">' +
              navPrev +
              '<div id="kc-card" class="kc-card">' + cardInnerHTML(word) + '</div>' +
              navNext +
            '</div>' +
          '</div>' +
          '<div class="kc-right-col">' +
            '<div class="kc-examples-panel">' +
              '<div class="kc-examples-header">' +
                '<span class="kc-examples-title">Contoh Kalimat</span>' +
              '</div>' +
              '<div id="kc-examples-body" class="kc-examples-body">' +
                examplesHTML(word) +
              '</div>' +
            '</div>' +
          '</div>' +
        '</div>' +

      '</div>';

    var cardEl = document.getElementById("kc-card");
    if (cardEl) bindSwipe(cardEl);

    var btnPrev = document.getElementById("kc-btn-prev");
    var btnNext = document.getElementById("kc-btn-next");
    var btnBack = document.getElementById("kc-back-btn");
    var sel     = document.getElementById("kc-level-select");

    if (btnPrev) btnPrev.addEventListener("click", function() { navigate(-1); });
    if (btnNext) btnNext.addEventListener("click", function() { navigate(1); });
    if (sel)     sel.addEventListener("change", function(e) { onLevelChange(e.target.value); });
    if (btnBack) btnBack.addEventListener("click", function() { if (typeof _onBack === "function") _onBack(); });

    bindPlayButtons();
    updateNavBtns();

    document.removeEventListener("keydown", handleKeydown);
    document.addEventListener("keydown", handleKeydown);
  }

  function buildDeckFromWord(word) {
    if (typeof vocabularyData === "undefined") return [word];
    // Filter by same type + level, shuffle
    var filtered = vocabularyData.filter(function(w) {
      return w.type === word.type && w.level === word.level;
    });
    if (filtered.length === 0) return [word];
    // Shuffle
    var arr = filtered.slice();
    for (var i = arr.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var tmp = arr[i]; arr[i] = arr[j]; arr[j] = tmp;
    }
    // Pastikan word yang diklik ada di index 0
    var idx = arr.findIndex(function(w) {
      return (w.kanji && w.kanji === word.kanji) || (!w.kanji && w.kana === word.kana);
    });
    if (idx > 0) { var t = arr[0]; arr[0] = arr[idx]; arr[idx] = t; }
    else if (idx === -1) arr.unshift(word);
    return arr;
  }

  function openWord(word, opts) {
    var grid         = opts.grid;
    var onBackToMenu = opts.onBackToMenu || null;
    _grid   = grid;
    _onBack = onBackToMenu;
    _mode   = "single";

    if (!word) return;
    _activeWord = word;

    // _preserveState: jangan rebuild deck (dipanggil dari rerender saat resize/rotate)
    if (!opts._preserveState) {
      _deck  = buildDeckFromWord(word);
      _index = 0;
    }

    if (typeof closeSidebar === "function") closeSidebar();

    var landscape = isMobileLandscape();
    var mobile    = isMobile();

    // Nav aktif di desktop, swipe di mobile
    var navPrev = !mobile ? '<button id="kc-btn-prev" class="kc-nav-btn kc-nav-prev">' + SVG_PREV + '</button>' : "";
    var navNext = !mobile ? '<button id="kc-btn-next" class="kc-nav-btn kc-nav-next">' + SVG_NEXT + '</button>' : "";

    grid.innerHTML =
      '<div class="kc-poster kc-single ' + (landscape ? "kc-landscape" : "kc-portrait") + '">' +
        '<div class="kc-content-box kc-single-box">' +
          '<button id="kc-back-btn" class="kc-single-back-btn" aria-label="Kembali">' +
            SVG_BACK +
          '</button>' +
          '<div class="kc-left-col">' +
            '<div class="kc-card-area">' +
              navPrev +
              '<div id="kc-card" class="kc-card">' + cardInnerHTML(word) + '</div>' +
              navNext +
            '</div>' +
          '</div>' +
          '<div class="kc-right-col">' +
            '<div class="kc-examples-panel">' +
              '<div class="kc-examples-header">' +
                '<span class="kc-examples-title">Contoh Kalimat</span>' +
              '</div>' +
              '<div id="kc-examples-body" class="kc-examples-body">' +
                examplesHTML(word) +
              '</div>' +
            '</div>' +
          '</div>' +
        '</div>' +
      '</div>';

    // Fix font glitch — paksa repaint setelah inject
    var cardEl = document.getElementById("kc-card");
    if (cardEl) {
      bindSwipe(cardEl);
      // Trigger repaint biar font Shippori Mincho gak glitch
      cardEl.style.opacity = "0.99";
      requestAnimationFrame(function() { cardEl.style.opacity = ""; });
    }

    var btnPrev = document.getElementById("kc-btn-prev");
    var btnNext = document.getElementById("kc-btn-next");
    var btnBack = document.getElementById("kc-back-btn");

    if (btnPrev) btnPrev.addEventListener("click", function() { navigate(-1); });
    if (btnNext) btnNext.addEventListener("click", function() { navigate(1); });
    if (btnBack) btnBack.addEventListener("click", function() {
      if (typeof _onBack === "function") _onBack();
    });

    bindPlayButtons();
    updateNavBtns();

    document.removeEventListener("keydown", handleKeydown);
    document.addEventListener("keydown", handleKeydown);
  }

  // ── rerender() ──────────────────────────────────────────────────────────────
  // Dipanggil oleh app.js saat resize / rotate layar.
  // Re-render ulang layout sesuai ukuran layar baru,
  // tanpa reset deck, index, atau word yang sedang aktif.
  // ─────────────────────────────────────────────────────────────────────────────
  function rerender() {
    if (!_grid) return;
    if (_mode === "single") {
      var word = _activeWord || (_deck && _deck[_index]);
      if (!word) return;
      openWord(word, { grid: _grid, onBackToMenu: _onBack, _preserveState: true });
    } else {
      render({ grid: _grid, onBackToMenu: _onBack, _preserveState: true });
    }
  }

  window.kanjiCardUI = { render: render, openWord: openWord, rerender: rerender };
