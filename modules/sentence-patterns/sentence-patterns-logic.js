// Sentence Patterns Logic — NihonByte
// Modul independen: tidak bergantung pada app.js untuk rendering.
// Menggunakan prefix class "sp-" agar tidak tabrakan dengan verb-forms.

(function initSentencePatternsLogic() {
  const sentenceState = new Map();
  const KEY_SEPARATOR = "::";

  function getData() {
    return Array.isArray(window.sentencePatternsData) ? window.sentencePatternsData : [];
  }

  function t(text) {
    return window.NIHONBYTE_I18N?.tMeaning ? window.NIHONBYTE_I18N.tMeaning(text) : text;
  }

  function randomIndex(max, except = -1) {
    if (max <= 1) return 0;
    let idx = Math.floor(Math.random() * max);
    while (idx === except) idx = Math.floor(Math.random() * max);
    return idx;
  }

  // ═══════════════════════════════════════════
  //  HUB — Daftar semua pola kalimat (cards)
  // ═══════════════════════════════════════════
  function renderSentencePatternsHub({ grid, onOpenPoster }) {
    const patterns = getData();
    const levels = Array.isArray(window.sentencePatternsLevels) ? window.sentencePatternsLevels : ["N5", "N4", "N3", "N2", "N1"];

    grid.innerHTML = `
      <section class="sp-hub">
        <div class="sp-hub-head">
          <div>
            <h2>${t("Pola Kalimat")}</h2>
            <p>${t("Pilih level JLPT dulu, lalu buka poster pola kalimat yang kamu butuhkan.")}</p>
          </div>
          <label class="sp-level-filter-wrap" for="sp-level-filter">
            <span>${t("Level")}</span>
            <select id="sp-level-filter" class="sp-level-filter">
              <option value="all">${t("Semua Level (N5~N1)")}</option>
              ${levels.map((level) => `<option value="${level}">${level}</option>`).join("")}
            </select>
          </label>
        </div>
        <div class="sp-brick-grid"></div>
        <div class="sp-hub-pagination" aria-label="${t("Pagination pola kalimat")}"></div>
      </section>
    `;

    const brickGrid = grid.querySelector(".sp-brick-grid");
    const levelSelect = grid.querySelector("#sp-level-filter");
    const localPagination = grid.querySelector(".sp-hub-pagination");
    const HUB_PAGE_SIZE = window.innerWidth <= 767 ? 5 : 12;
    let hubPage = 1;

    function renderHubPagination(totalPages, onChange) {
      if (!localPagination) return;
      localPagination.innerHTML = "";
      if (totalPages <= 1) {
        localPagination.style.display = "none";
        return;
      }
      localPagination.style.display = "flex";

      for (let page = 1; page <= totalPages; page += 1) {
        const btn = document.createElement("button");
        btn.type = "button";
        btn.className = `sp-page-btn ${page === hubPage ? "active" : ""}`;
        btn.textContent = String(page);
        btn.addEventListener("click", () => onChange(page));
        localPagination.appendChild(btn);
      }
    }

    function paintList() {
      const selectedLevel = levelSelect?.value || "all";
      const filteredPatterns = selectedLevel === "all"
        ? patterns
        : patterns.filter((p) => p.level === selectedLevel);

      brickGrid.innerHTML = "";

      if (!filteredPatterns.length) {
        brickGrid.innerHTML = `<div class="empty-state">${t("Belum ada materi untuk level ini.")}</div>`;
        if (localPagination) {
          localPagination.innerHTML = "";
          localPagination.style.display = "none";
        }
        return;
      }

      const totalPages = Math.max(1, Math.ceil(filteredPatterns.length / HUB_PAGE_SIZE));
      if (hubPage > totalPages) hubPage = totalPages;
      const start = (hubPage - 1) * HUB_PAGE_SIZE;
      const currentPatterns = filteredPatterns.slice(start, start + HUB_PAGE_SIZE);

      currentPatterns.forEach((pattern) => {
        const btn = document.createElement("button");
        btn.className = "sp-brick";
        btn.type = "button";
        btn.innerHTML = `
          <strong class="sp-brick-title">${t(pattern.title)}</strong>
          <span class="sp-brick-desc">${t(pattern.summary)}</span>
          <small class="sp-level-badge">${pattern.level || "-"}</small>
        `;
        btn.addEventListener("click", () => onOpenPoster?.(pattern.id));
        brickGrid.appendChild(btn);
      });

      renderHubPagination(totalPages, (nextPage) => {
        hubPage = nextPage;
        paintList();
      });
    }

    levelSelect?.addEventListener("change", () => {
      hubPage = 1;
      paintList();
    });
    paintList();
  }

  // ═══════════════════════════════════════════
  //  Sentence Card — 1 contoh kalimat
  // ═══════════════════════════════════════════
  function buildSentenceCard(sentence, patternId, groupName, sentenceIndex) {
    const key = [patternId, groupName, sentenceIndex].join(KEY_SEPARATOR);
    if (!sentenceState.has(key)) sentenceState.set(key, sentenceIndex);
    const idx = sentenceState.get(key);
    const currentSentence = sentence;

    return `
      <article class="sp-sentence-card" data-sp-key="${key}">
        <div class="sp-sentence-box">
          <button type="button" class="sp-play-btn" data-text="${currentSentence.jp}" aria-label="${t("Putar kalimat")}">
            <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M8 6v12l10-6z"></path></svg>
          </button>
          <p class="sp-sentence-jp" data-role="sentence-jp">${currentSentence.jp}</p>
          <p data-role="sentence-kana">${currentSentence.kana}</p>
          <p data-role="sentence-romaji">${currentSentence.romaji}</p>
          <p data-role="sentence-meaning">${t(currentSentence.meaning)}</p>
        </div>
      </article>
    `;
  }

  // ═══════════════════════════════════════════
  //  POSTER — Detail pola kalimat (groups + sentences)
  // ═══════════════════════════════════════════
  function renderSentencePatternPoster({ grid, patternId, onBack }) {
    const pattern = getData().find((item) => item.id === patternId);
    if (!pattern) {
      grid.innerHTML = `<div class="empty-state">${t("Materi pola kalimat tidak ditemukan.")}</div>`;
      return;
    }

    const groupsHtml = pattern.groups
      .map((group) => {
        // Tampilkan 1 kalimat awal, sisanya bisa diacak
        const firstSentence = group.sentences[0];
        const sentenceHtml = firstSentence
          ? buildSentenceCard(firstSentence, pattern.id, group.name, 0)
          : "";

        return `
          <section class="sp-group-panel" data-sp-group="${group.name}" data-sp-pattern="${pattern.id}">
            <h4>${group.name}</h4>
            <p class="sp-group-desc">${t(group.description)}</p>
            <div class="sp-sentences-area">
              ${sentenceHtml}
            </div>
            <div class="sp-sentence-actions">
              <button type="button" class="sp-shuffle-btn" data-pattern="${pattern.id}" data-group="${group.name}">
                <span class="sp-shuffle-icon" aria-hidden="true">
                  <svg viewBox="0 0 24 24"><path d="M16 3h5v5"></path><path d="M4 20l7-7"></path><path d="M21 3l-7 7"></path><path d="M16 21h5v-5"></path><path d="M4 4l7 7"></path><path d="M21 21l-7-7"></path></svg>
                </span>
                ${t("Acak Kalimat")}
              </button>
            </div>
          </section>
        `;
      })
      .join("");

    grid.innerHTML = `
      <section class="sp-poster">
        <button type="button" class="sp-back-btn">← ${t("Kembali ke daftar")}</button>
        <h2>${t(pattern.title)}</h2>
        <p class="sp-poster-summary">${t(pattern.summary)}</p>
        <h3>${t("Contoh Kalimat per Pola")}</h3>
        ${groupsHtml}
      </section>
    `;

    // ── Back button ──
    grid.querySelector(".sp-back-btn")?.addEventListener("click", () => onBack?.());

    // ── Play buttons ──
    grid.querySelectorAll(".sp-play-btn").forEach((btn) => {
      btn.addEventListener("click", () => {
        const text = btn.dataset.text;
        if (window.speechSynthesis && text) {
          window.speechSynthesis.cancel();
          const utter = new SpeechSynthesisUtterance(text);
          utter.lang = "ja-JP";
          utter.rate = 0.9;
          window.speechSynthesis.speak(utter);
        }
      });
    });

    // ── Shuffle buttons ──
    grid.querySelectorAll(".sp-shuffle-btn").forEach((btn) => {
      btn.addEventListener("click", () => {
        const patId = btn.dataset.pattern;
        const grpName = btn.dataset.group;
        const panel = btn.closest(".sp-group-panel");
        if (!panel) return;

        const selectedPattern = getData().find((p) => p.id === patId);
        const selectedGroup = selectedPattern?.groups.find((g) => g.name === grpName);
        if (!selectedGroup || !selectedGroup.sentences.length) return;

        // Pick random sentence
        const area = panel.querySelector(".sp-sentences-area");
        const currentKey = area?.querySelector("[data-sp-key]")?.dataset.spKey;
        const currentIdx = currentKey ? Number(currentKey.split(KEY_SEPARATOR)[2]) : -1;
        const nextIdx = randomIndex(selectedGroup.sentences.length, currentIdx);
        const nextSentence = selectedGroup.sentences[nextIdx];

        // Update DOM
        const jpEl = area.querySelector('[data-role="sentence-jp"]');
        const kanaEl = area.querySelector('[data-role="sentence-kana"]');
        const romajiEl = area.querySelector('[data-role="sentence-romaji"]');
        const meaningEl = area.querySelector('[data-role="sentence-meaning"]');
        const playBtn = area.querySelector('.sp-play-btn');
        const card = area.querySelector('[data-sp-key]');

        if (jpEl) jpEl.textContent = nextSentence.jp;
        if (kanaEl) kanaEl.textContent = nextSentence.kana;
        if (romajiEl) romajiEl.textContent = nextSentence.romaji;
        if (meaningEl) meaningEl.textContent = t(nextSentence.meaning);
        if (playBtn) playBtn.dataset.text = nextSentence.jp;
        if (card) card.dataset.spKey = [patId, grpName, nextIdx].join(KEY_SEPARATOR);
      });
    });
  }

  // ═══════════════════════════════════════════
  //  PUBLIC API — dipanggil dari app.js
  // ═══════════════════════════════════════════
  window.sentencePatternsUI = {
    renderHub: renderSentencePatternsHub,
    renderPoster: renderSentencePatternPoster
  };
})();
