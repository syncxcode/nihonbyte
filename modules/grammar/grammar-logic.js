// Grammar Logic — NihonByte
// Modul independen: tidak bergantung pada app.js untuk rendering.
// Mendukung dua struktur data: grammar native + verb-form (examples) yang sudah digabung.

(function initSentencePatternsLogic() {
  const sentenceState = new Map();
  const KEY_SEPARATOR = "::";
  const hubState = {
    page: 1,
    level: "all",
    filterLevels: ["all"],
    searchQuery: "",
    anchorId: null,
    scrollTop: 0,
    shouldRestoreScroll: false
  };

  function getData() {
    return Array.isArray(window.grammarData) ? window.grammarData : [];
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

  function getLevelRank(level) {
    const order = { N5: 0, N4: 1, N3: 2, N2: 3, N1: 4 };
    return Object.prototype.hasOwnProperty.call(order, level) ? order[level] : 999;
  }

  function normalizeSearchText(value) {
    return String(value || "").trim().toLowerCase();
  }

  function resolveHubFilterLevels(activeLevels) {
    const requestedLevels = Array.isArray(hubState.filterLevels) && hubState.filterLevels.length
      ? hubState.filterLevels
      : ["all"];
    const specificLevels = requestedLevels.filter((level) => level !== "all" && activeLevels.includes(level));
    return specificLevels.length ? specificLevels : ["all"];
  }

  function grammarMatchesQuery(pattern, normalizedQuery) {
    if (!normalizedQuery) return true;

    const fields = [
      pattern?.title,
      pattern?.summary,
      ...(Array.isArray(pattern?.groups)
        ? pattern.groups.flatMap((group) => [group?.name, group?.description])
        : [])
    ];

    return fields.some((field) => normalizeSearchText(field).includes(normalizedQuery));
  }

  function setHubFilters({ searchQuery = "", levels = ["all"] } = {}) {
    const nextLevels = Array.isArray(levels) && levels.length ? levels.map(String) : ["all"];
    const specificLevels = nextLevels.filter((level) => level !== "all");

    hubState.searchQuery = String(searchQuery || "").trim();
    hubState.filterLevels = specificLevels.length ? specificLevels : ["all"];
    hubState.level = "all";
    hubState.page = 1;
    hubState.anchorId = null;
    hubState.scrollTop = 0;
    hubState.shouldRestoreScroll = true;
  }

  function resetHubFilters() {
    setHubFilters({ searchQuery: "", levels: ["all"] });
  }

  function getHubFilters() {
    return {
      searchQuery: hubState.searchQuery,
      levels: Array.isArray(hubState.filterLevels) ? [...hubState.filterLevels] : ["all"]
    };
  }

  // ═══════════════════════════════════════════
  //  HUB — Daftar semua grammar (cards)
  // ═══════════════════════════════════════════
  function renderGrammarHub({ grid, onOpenPoster, isFavoritePattern, onToggleFavorite }) {
    const allPatterns = getData();
    const fallbackLevels = ["N5", "N4", "N3", "N2", "N1"];
    const configuredLevels = Array.isArray(window.grammarLevels) ? window.grammarLevels : fallbackLevels;
    const levelsInData = new Set(allPatterns.map((p) => p.level).filter(Boolean));
    const levels = configuredLevels.filter((level) => levelsInData.has(level));
    const activeLevels = levels.length ? levels : fallbackLevels.filter((level) => levelsInData.has(level));
    const unlockedLevelSet = new Set(activeLevels);
    const effectiveFilterLevels = resolveHubFilterLevels(activeLevels);
    const allowedFilterLevels = effectiveFilterLevels[0] === "all"
      ? activeLevels
      : activeLevels.filter((level) => effectiveFilterLevels.includes(level));
    const allowedLevelSet = new Set(allowedFilterLevels);
    const normalizedQuery = normalizeSearchText(hubState.searchQuery);
    const originalIndexMap = new Map();
    allPatterns.forEach((item, index) => originalIndexMap.set(item, index));
    const patterns = allPatterns
      .filter((p) => unlockedLevelSet.has(p.level))
      .filter((p) => allowedLevelSet.has(p.level))
      .filter((p) => grammarMatchesQuery(p, normalizedQuery))
      .slice()
      .sort((a, b) => {
        const byLevel = getLevelRank(a.level) - getLevelRank(b.level);
        if (byLevel !== 0) return byLevel;
        return (originalIndexMap.get(a) || 0) - (originalIndexMap.get(b) || 0);
      });
    const allLevelLabel = allowedFilterLevels.length > 1
      ? `${allowedFilterLevels[0]}~${allowedFilterLevels[allowedFilterLevels.length - 1]}`
      : (allowedFilterLevels[0] || "N5");

    grid.innerHTML = `
      <section class="gr-hub">
        <div class="gr-hub-head">
          <div>
            <h2>${t("Grammar (文法)")}</h2>
            <p>${t("Pilih level JLPT dulu, lalu buka poster grammar yang kamu butuhkan.")}</p>
          </div>
          <label class="gr-level-filter-wrap" for="gr-level-filter">
            <span>${t("Level")}</span>
            <select id="gr-level-filter" class="gr-level-filter">
              <option value="all">${t(`Semua Level (${allLevelLabel})`)}</option>
              ${allowedFilterLevels.map((level) => `<option value="${level}">${level}</option>`).join("")}
            </select>
          </label>
        </div>
        <div class="gr-brick-grid"></div>
        <div class="gr-hub-pagination" aria-label="${t("Pagination grammar")}"></div>
      </section>
    `;

    const brickGrid = grid.querySelector(".gr-brick-grid");
    const levelSelect = grid.querySelector("#gr-level-filter");
    const localPagination = grid.querySelector(".gr-hub-pagination");
    const isMobilePortrait = window.innerWidth <= 767 && (
      (typeof window.matchMedia === "function" && window.matchMedia("(orientation: portrait)").matches)
      || window.innerHeight >= window.innerWidth
    );
    const HUB_PAGE_SIZE = isMobilePortrait ? 10 : (window.innerWidth <= 767 ? 5 : 12);
    let hubPage = Number(hubState.page) > 0 ? Number(hubState.page) : 1;
    function hasScrollableContentPanel() {
      const contentPanel = document.querySelector(".content-panel");
      return !!contentPanel && contentPanel.scrollHeight > contentPanel.clientHeight + 1;
    }
    function getCurrentScrollTop() {
      const contentPanel = document.querySelector(".content-panel");
      if (hasScrollableContentPanel() && contentPanel) {
        return contentPanel.scrollTop;
      }
      return window.scrollY
        || window.pageYOffset
        || document.documentElement.scrollTop
        || document.body.scrollTop
        || 0;
    }
    function restoreScrollTop(top) {
      const safeTop = Number.isFinite(top) ? top : 0;
      const contentPanel = document.querySelector(".content-panel");
      if (hasScrollableContentPanel() && contentPanel) {
        contentPanel.scrollTop = safeTop;
        return;
      }
      if (document.documentElement) document.documentElement.scrollTop = safeTop;
      if (document.body) document.body.scrollTop = safeTop;
      window.scrollTo({ top: safeTop, behavior: "auto" });
    }
    function scrollViewportToTop() {
      restoreScrollTop(0);
    }
    function scrollHubToTop() {
      scrollViewportToTop();
    }
    function forceScrollHubToTop() {
      scrollHubToTop();
      if (typeof window.requestAnimationFrame === "function") {
        window.requestAnimationFrame(() => scrollHubToTop());
      }
      setTimeout(() => scrollHubToTop(), 0);
    }
    const selectableLevels = ["all", ...allowedFilterLevels];
    if (levelSelect && selectableLevels.includes(hubState.level)) {
      levelSelect.value = hubState.level;
    }

    function renderHubPagination(totalPages, onChange) {
      if (!localPagination) return;
      localPagination.innerHTML = "";
      if (totalPages <= 1) {
        localPagination.style.display = "none";
        return;
      }
      localPagination.style.display = "flex";
      const addButton = ({ label, page, active = false, disabled = false }) => {
        const btn = document.createElement("button");
        btn.type = "button";
        btn.className = `gr-page-btn ${active ? "active" : ""}`;
        btn.textContent = String(label);
        btn.disabled = !!disabled;
        if (!disabled && typeof page === "number") {
          btn.addEventListener("click", () => onChange(page));
        }
        localPagination.appendChild(btn);
      };
      const addDots = () => {
        const dots = document.createElement("span");
        dots.className = "gr-page-dots";
        dots.textContent = "...";
        localPagination.appendChild(dots);
      };

      addButton({ label: "<<", page: hubPage - 1, disabled: hubPage === 1 });

      let startPage = Math.max(1, hubPage - 1);
      let endPage = Math.min(totalPages, hubPage + 1);
      if (hubPage === 1) endPage = Math.min(3, totalPages);
      if (hubPage === totalPages) startPage = Math.max(1, totalPages - 2);

      if (startPage > 1) {
        addButton({ label: "1", page: 1, active: hubPage === 1 });
        if (startPage > 2) addDots();
      }

      for (let page = startPage; page <= endPage; page += 1) {
        addButton({ label: page, page, active: page === hubPage });
      }

      if (endPage < totalPages) {
        if (endPage < totalPages - 1) addDots();
        addButton({ label: String(totalPages), page: totalPages, active: hubPage === totalPages });
      }

      addButton({ label: ">>", page: hubPage + 1, disabled: hubPage === totalPages });
    }

    function paintList() {
      const rawSelectedLevel = levelSelect?.value || "all";
      const selectedLevel = rawSelectedLevel === "all" || allowedFilterLevels.includes(rawSelectedLevel)
        ? rawSelectedLevel
        : "all";
      if (levelSelect && levelSelect.value !== selectedLevel) levelSelect.value = selectedLevel;

      const filteredPatterns = selectedLevel === "all"
        ? patterns
        : patterns.filter((p) => p.level === selectedLevel);

      if (hubState.anchorId) {
        const anchorIndex = filteredPatterns.findIndex((p) => p.id === hubState.anchorId);
        if (anchorIndex >= 0) {
          hubPage = Math.floor(anchorIndex / HUB_PAGE_SIZE) + 1;
        }
        hubState.anchorId = null;
      }

      brickGrid.innerHTML = "";

      if (!filteredPatterns.length) {
        brickGrid.innerHTML = `<div class="empty-state">${t(normalizedQuery ? "Belum ada hasil grammar untuk pencarian ini." : "Belum ada materi untuk level ini.")}</div>`;
        if (localPagination) {
          localPagination.innerHTML = "";
          localPagination.style.display = "none";
        }
        return;
      }

      const totalPages = Math.max(1, Math.ceil(filteredPatterns.length / HUB_PAGE_SIZE));
      if (hubPage > totalPages) hubPage = totalPages;
      if (hubPage < 1) hubPage = 1;
      hubState.page = hubPage;
      hubState.level = selectedLevel;
      const start = (hubPage - 1) * HUB_PAGE_SIZE;
      const currentPatterns = filteredPatterns.slice(start, start + HUB_PAGE_SIZE);

      currentPatterns.forEach((pattern) => {
        const patternId = String(pattern.id || "");
        const isFavorite = typeof isFavoritePattern === "function" ? !!isFavoritePattern(patternId) : false;
        const bookmarkFill = isFavorite ? "#ff4d6d" : "none";
        const bookmarkStroke = isFavorite ? "#ff4d6d" : "currentColor";
        const btn = document.createElement("article");
        btn.className = "gr-brick";
        btn.setAttribute("role", "button");
        btn.setAttribute("tabindex", "0");
        btn.innerHTML = `
            <button
              class="card-action-btn bookmark-card-btn ${isFavorite ? "is-bookmarked" : ""}"
            type="button"
            data-bookmark-kind="grammar"
            data-pattern-id="${patternId}"
            title="${isFavorite ? t("Hapus dari Favorit") : t("Simpan ke Favorit")}"
            aria-label="${isFavorite ? t("Hapus dari Favorit") : t("Simpan ke Favorit")}"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="${bookmarkFill}" stroke="${bookmarkStroke}" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
              <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path>
            </svg>
          </button>
          <strong class="gr-brick-title">${t(pattern.title)}</strong>
          <span class="gr-brick-desc">${t(pattern.summary)}</span>
          <small class="gr-level-badge">${pattern.level || "-"}</small>
        `;
        btn.addEventListener("click", (event) => {
          const bookmarkButton = event?.target?.closest?.(".bookmark-card-btn");
          if (bookmarkButton) {
            onToggleFavorite?.(event, patternId);
            return;
          }

          const isTouchDevice = navigator.maxTouchPoints > 0 || (typeof window.matchMedia === "function" && window.matchMedia("(hover: none)").matches);
          if (isTouchDevice) {
            if (!btn.classList.contains("touch-revealed")) {
              document.querySelectorAll(".gr-brick.touch-revealed").forEach((card) => {
                if (card !== btn) card.classList.remove("touch-revealed");
              });
              btn.classList.add("touch-revealed");
              return;
            }
            btn.classList.remove("touch-revealed");
          }

          hubState.scrollTop = getCurrentScrollTop();
          hubState.anchorId = pattern.id;
          hubState.shouldRestoreScroll = true;
          onOpenPoster?.(pattern.id);
          if (isMobilePortrait) {
            scrollViewportToTop();
            if (typeof window.requestAnimationFrame === "function") {
              window.requestAnimationFrame(() => scrollViewportToTop());
            }
            setTimeout(() => scrollViewportToTop(), 0);
          }
        });
        btn.addEventListener("keydown", (event) => {
          if (event.key === "Enter" || event.key === " ") {
            event.preventDefault();
            btn.click();
          }
        });
        brickGrid.appendChild(btn);
      });

      renderHubPagination(totalPages, (nextPage) => {
        hubPage = nextPage;
        hubState.page = hubPage;
        paintList();
        forceScrollHubToTop();
      });
    }

    levelSelect?.addEventListener("change", () => {
      hubPage = 1;
      hubState.page = 1;
      hubState.level = levelSelect.value || "all";
      paintList();
      forceScrollHubToTop();
    });
    if (levelSelect) {
      levelSelect.disabled = allowedFilterLevels.length <= 1;
    }
    paintList();

    if (hubState.shouldRestoreScroll) {
      const restoreY = hubState.scrollTop;
      hubState.shouldRestoreScroll = false;
      setTimeout(() => {
        restoreScrollTop(restoreY);
      }, 90);
    }
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
      <article class="gr-sentence-card" data-gr-key="${key}">
        <div class="gr-sentence-box">
          <button type="button" class="gr-play-btn" data-text="${currentSentence.jp}" aria-label="${t("Putar kalimat")}">
            <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M8 6v12l10-6z"></path></svg>
          </button>
          <p class="gr-sentence-jp" data-role="sentence-jp">${currentSentence.jp}</p>
          <p data-role="sentence-kana">${currentSentence.kana}</p>
          <p data-role="sentence-romaji">${currentSentence.romaji}</p>
          <p data-role="sentence-meaning">${t(currentSentence.meaning)}</p>
        </div>
      </article>
    `;
  }

  // ═══════════════════════════════════════════
  //  POSTER — Detail grammar (groups + sentences)
  // ═══════════════════════════════════════════
  function renderGrammarPoster({ grid, patternId, onBack }) {
    const pattern = getData().find((item) => item.id === patternId);
    if (!pattern) {
      grid.innerHTML = `<div class="empty-state">${t("Materi grammar tidak ditemukan.")}</div>`;
      return;
    }

    const groups = Array.isArray(pattern.groups) ? pattern.groups : [];
    const formulaItems = Array.isArray(pattern.formulas) ? pattern.formulas : [];
    const formulaHtml = formulaItems.length
      ? `
        <h3>${t("Rumus")}</h3>
        <ul>
          ${formulaItems
            .map((item) => `<li><strong>${t(item.group || "")}:</strong> ${t(item.rule || "")}</li>`)
            .join("")}
        </ul>
      `
      : "";

    const groupsHtml = groups
      .map((group) => {
        const groupName = group?.name || "-";
        const groupDesc = group?.description || "";
        const hasExamples = Array.isArray(group?.examples) && group.examples.length > 0;

        if (!hasExamples) {
          const firstSentence = Array.isArray(group?.sentences) ? group.sentences[0] : null;
          const sentenceHtml = firstSentence
            ? buildSentenceCard(firstSentence, pattern.id, groupName, 0)
            : "";

          return `
            <section class="gr-group-panel" data-gr-group="${groupName}" data-gr-pattern="${pattern.id}">
              <h4>${groupName}</h4>
              <p class="gr-group-desc">${t(groupDesc)}</p>
              <div class="gr-sentences-area">
                ${sentenceHtml}
              </div>
              <div class="gr-sentence-actions">
                <button type="button" class="gr-shuffle-btn" data-pattern="${pattern.id}" data-group="${groupName}">
                  <span class="gr-shuffle-icon" aria-hidden="true">
                    <svg viewBox="0 0 24 24"><path d="M16 3h5v5"></path><path d="M4 20l7-7"></path><path d="M21 3l-7 7"></path><path d="M16 21h5v-5"></path><path d="M4 4l7 7"></path><path d="M21 21l-7-7"></path></svg>
                  </span>
                  ${t("Acak Kalimat")}
                </button>
              </div>
            </section>
          `;
        }

        const examplesHtml = group.examples
          .map((example, exampleIndex) => {
            const firstSentence = Array.isArray(example?.sentences) ? example.sentences[0] : null;
            const sentenceHtml = firstSentence
              ? buildSentenceCard(firstSentence, pattern.id, `${groupName}#${exampleIndex}`, 0)
              : "";

            return `
              <article class="example-card" data-gr-group="${groupName}" data-gr-example="${exampleIndex}">
                <h5>${t(example?.base || "")} → ${t(example?.transformed || "")}</h5>
                <p class="gr-group-desc">${t(example?.kana || "")}</p>
                <p class="gr-group-desc">${t(example?.romaji || "")}</p>
                <p class="gr-group-desc">${t(example?.meaning || "")}</p>
                <div class="gr-sentences-area">
                  ${sentenceHtml}
                </div>
                <div class="gr-sentence-actions">
                  <button type="button" class="gr-shuffle-btn" data-pattern="${pattern.id}" data-group="${groupName}" data-example="${exampleIndex}">
                    <span class="gr-shuffle-icon" aria-hidden="true">
                      <svg viewBox="0 0 24 24"><path d="M16 3h5v5"></path><path d="M4 20l7-7"></path><path d="M21 3l-7 7"></path><path d="M16 21h5v-5"></path><path d="M4 4l7 7"></path><path d="M21 21l-7-7"></path></svg>
                    </span>
                    ${t("Acak Kalimat")}
                  </button>
                </div>
              </article>
            `;
          })
          .join("");

        return `
          <section class="gr-group-panel form-group-panel" data-gr-group="${groupName}" data-gr-pattern="${pattern.id}">
            <h4>${groupName}</h4>
            <p class="gr-group-desc">${t(groupDesc)}</p>
            ${examplesHtml}
          </section>
        `;
      })
      .join("");

    grid.innerHTML = `
      <section class="gr-poster">
        <button type="button" class="gr-back-btn">← ${t("Kembali ke daftar")}</button>
        <h2>${t(pattern.title)}</h2>
        <p class="gr-poster-summary">${t(pattern.summary)}</p>
        ${formulaHtml}
        <h3>${t("Contoh Kalimat per Pola")}</h3>
        ${groupsHtml}
      </section>
    `;

    // ── Back button ──
    grid.querySelector(".gr-back-btn")?.addEventListener("click", () => onBack?.());

    // ── Play buttons ──
    grid.querySelectorAll(".gr-play-btn").forEach((btn) => {
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
    grid.querySelectorAll(".gr-shuffle-btn").forEach((btn) => {
      btn.addEventListener("click", () => {
        const patId = btn.dataset.pattern;
        const grpName = btn.dataset.group;
        const exampleIndexRaw = btn.dataset.example;
        const panel = btn.closest(".gr-group-panel");
        if (!panel) return;

        const selectedPattern = getData().find((p) => p.id === patId);
        const selectedGroup = selectedPattern?.groups.find((g) => g.name === grpName);
        if (!selectedGroup) return;

        let sourceSentences = Array.isArray(selectedGroup.sentences) ? selectedGroup.sentences : [];
        let sourceGroupKey = grpName;
        let area = panel.querySelector(".gr-sentences-area");

        if (typeof exampleIndexRaw !== "undefined" && exampleIndexRaw !== "") {
          const exampleIndex = Number(exampleIndexRaw);
          const selectedExample = Array.isArray(selectedGroup.examples) ? selectedGroup.examples[exampleIndex] : null;
          sourceSentences = Array.isArray(selectedExample?.sentences) ? selectedExample.sentences : [];
          sourceGroupKey = `${grpName}#${exampleIndex}`;
          const examplePanel = btn.closest(".example-card");
          area = examplePanel?.querySelector(".gr-sentences-area") || area;
        }

        if (!sourceSentences.length) return;
        if (!area) return;

        // Pick random sentence
        const currentKey = area.querySelector("[data-gr-key]")?.dataset.grKey;
        const currentIdx = currentKey ? Number(currentKey.split(KEY_SEPARATOR)[2]) : -1;
        const nextIdx = randomIndex(sourceSentences.length, currentIdx);
        const nextSentence = sourceSentences[nextIdx];

        // Update DOM
        const jpEl = area.querySelector('[data-role="sentence-jp"]');
        const kanaEl = area.querySelector('[data-role="sentence-kana"]');
        const romajiEl = area.querySelector('[data-role="sentence-romaji"]');
        const meaningEl = area.querySelector('[data-role="sentence-meaning"]');
        const playBtn = area.querySelector('.gr-play-btn');
        const card = area.querySelector('[data-gr-key]');

        if (jpEl) jpEl.textContent = nextSentence.jp;
        if (kanaEl) kanaEl.textContent = nextSentence.kana;
        if (romajiEl) romajiEl.textContent = nextSentence.romaji;
        if (meaningEl) meaningEl.textContent = t(nextSentence.meaning);
        if (playBtn) playBtn.dataset.text = nextSentence.jp;
        if (card) card.dataset.grKey = [patId, sourceGroupKey, nextIdx].join(KEY_SEPARATOR);
      });
    });
  }

  // ═══════════════════════════════════════════
  //  PUBLIC API — dipanggil dari app.js
  // ═══════════════════════════════════════════
  window.grammarUI = {
    renderHub: renderGrammarHub,
    renderPoster: renderGrammarPoster,
    setHubFilters,
    resetHubFilters,
    getHubFilters
  };
})();
