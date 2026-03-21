(function initVerbFormsLogic() {
  const sentenceState = new Map();
  const KEY_SEPARATOR = "::";

  function getData() {
    return Array.isArray(window.verbFormsData) ? window.verbFormsData : [];
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

  function renderVerbFormsHub({ grid, onOpenPoster }) {
    const allFormsRaw = getData();
    const fallbackLevels = ["N5", "N4", "N3", "N2", "N1"];
    const configuredLevels = Array.isArray(window.verbFormsLevels) ? window.verbFormsLevels : fallbackLevels;
    const normalizeLevel = (form) => {
      const rawLevel = String(form?.level || "").toUpperCase();
      if (fallbackLevels.includes(rawLevel)) return rawLevel;
      const detected = `${form?.title || ""} ${form?.summary || ""}`.match(/\bN[1-5]\b/i);
      return detected ? detected[0].toUpperCase() : "N5";
    };
    const forms = allFormsRaw.map((form) => ({ ...form, level: normalizeLevel(form) }));
    const levelsInData = new Set(forms.map((form) => form.level).filter(Boolean));
    const levels = configuredLevels.filter((level) => levelsInData.has(level));
    const activeLevels = levels.length ? levels : fallbackLevels.filter((level) => levelsInData.has(level));
    const unlockedLevelSet = new Set(activeLevels);
    const filteredByUnlock = forms.filter((form) => unlockedLevelSet.has(form.level));
    const allLevelLabel = activeLevels.length > 1
      ? `${activeLevels[0]}~${activeLevels[activeLevels.length - 1]}`
      : (activeLevels[0] || "N5");

    grid.innerHTML = `
      <section class="forms-hub">
        <div class="forms-hub-head">
          <div>
            <h2>${t("Bentuk Kata Kerja")}</h2>
            <p>${t("Pilih level JLPT dulu, lalu buka poster bentuk kata kerja yang kamu butuhkan.")}</p>
          </div>
          <label class="forms-level-filter-wrap" for="verb-form-level-filter">
            <span>${t("Level")}</span>
            <select id="verb-form-level-filter" class="forms-level-filter">
              <option value="all">${t(`Semua Level (${allLevelLabel})`)}</option>
              ${activeLevels.map((level) => `<option value="${level}">${level}</option>`).join("")}
            </select>
          </label>
        </div>
        <div class="forms-brick-grid"></div>
        <div class="forms-hub-pagination" aria-label="${t("Pagination bentuk kata kerja")}"></div>
      </section>
    `;

    const brickGrid = grid.querySelector(".forms-brick-grid");
    const levelSelect = grid.querySelector("#verb-form-level-filter");
    const localPagination = grid.querySelector(".forms-hub-pagination");
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
      const addButton = ({ label, page, active = false, disabled = false }) => {
        const btn = document.createElement("button");
        btn.type = "button";
        btn.className = `forms-page-btn ${active ? "active" : ""}`;
        btn.textContent = String(label);
        btn.disabled = !!disabled;
        if (!disabled && typeof page === "number") {
          btn.addEventListener("click", () => onChange(page));
        }
        localPagination.appendChild(btn);
      };
      const addDots = () => {
        const dots = document.createElement("span");
        dots.className = "forms-page-dots";
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
      const selectedLevel = rawSelectedLevel === "all" || activeLevels.includes(rawSelectedLevel)
        ? rawSelectedLevel
        : "all";
      if (levelSelect && levelSelect.value !== selectedLevel) levelSelect.value = selectedLevel;
      const filteredForms = selectedLevel === "all"
        ? filteredByUnlock
        : filteredByUnlock.filter((form) => form.level === selectedLevel);

      brickGrid.innerHTML = "";

      if (!filteredForms.length) {
        brickGrid.innerHTML = `<div class="empty-state">${t("Belum ada materi untuk level ini.")}</div>`;
        if (localPagination) {
          localPagination.innerHTML = "";
          localPagination.style.display = "none";
        }
        return;
      }

      const totalPages = Math.max(1, Math.ceil(filteredForms.length / HUB_PAGE_SIZE));
      if (hubPage > totalPages) hubPage = totalPages;
      const start = (hubPage - 1) * HUB_PAGE_SIZE;
      const currentForms = filteredForms.slice(start, start + HUB_PAGE_SIZE);

      currentForms.forEach((form) => {
        const btn = document.createElement("button");
        btn.className = "form-brick";
        btn.type = "button";
        btn.innerHTML = `<strong class="form-brick-title-only">${t((form.title || "").split("•")[0].trim())}</strong><span class="form-brick-desc-only">${t(form.summary)}</span><small class="form-level-badge">${form.level || "-"}</small>`;
        btn.addEventListener("click", () => onOpenPoster?.(form.id));
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
    if (levelSelect) levelSelect.disabled = activeLevels.length <= 1;
    paintList();
  }

  function buildSentenceCard(example, formId, groupName, exampleIndex) {
    const key = [formId, groupName, exampleIndex].join(KEY_SEPARATOR);
    if (!sentenceState.has(key)) sentenceState.set(key, 0);
    const idx = sentenceState.get(key);
    const sentence = example.sentences[idx] || example.sentences[0];

    return `
      <article class="example-card" data-example-key="${key}">
        <h5>${example.base} → ${example.transformed}</h5>
        <p><strong>Kana:</strong> ${example.kana}</p>
        <p><strong>Romaji:</strong> ${example.romaji}</p>
        <p><strong>${t("Arti:")}</strong> ${t(example.meaning)}</p>
        <div class="sentence-box">
          <button type="button" class="wide-play-btn form-sentence-play-btn" data-text="${sentence.audio || sentence.jp}" aria-label="${t("Putar kalimat")}">
            <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M8 6v12l10-6z"></path></svg>
          </button>
          <p class="sentence-jp" data-role="sentence-jp">${sentence.jp}</p>
          <p data-role="sentence-kana">${sentence.kana}</p>
          <p data-role="sentence-romaji">${sentence.romaji}</p>
          <p data-role="sentence-meaning">${t(sentence.meaning)}</p>
        </div>
        <div class="sentence-actions">
          <button type="button" class="shuffle-sentence-btn" data-key="${key}">
            <span class="shuffle-icon" aria-hidden="true">
              <svg viewBox="0 0 24 24"><path d="M16 3h5v5"></path><path d="M4 20l7-7"></path><path d="M21 3l-7 7"></path><path d="M16 21h5v-5"></path><path d="M4 4l7 7"></path><path d="M21 21l-7-7"></path></svg>
            </span>
            ${t("Acak Kalimat")}
          </button>
        </div>
      </article>
    `;
  }



  function getVerbGroupDisplayName(name) {
    if (!name) return "";
    if (/godan/i.test(name)) return t("KATA KERJA GODAN");
    if (/ichidan/i.test(name)) return t("KATA KERJA ICHIDAN");
    if (/irregular|suru|kuru/i.test(name)) return t("KATA KERJA IRREGULER");
    return `${t("KATA KERJA")} ${name.toUpperCase()}`;
  }

  function renderVerbFormPoster({ grid, formId, onBack }) {
    const form = getData().find((item) => item.id === formId);
    if (!form) {
      grid.innerHTML = `<div class="empty-state">${t("Materi bentuk kata kerja tidak ditemukan.")}</div>`;
      return;
    }

    const formulaHtml = form.formulas
      .map((item) => `<li><strong>${item.group}:</strong> ${t(item.rule)}</li>`)
      .join("");

    const groupsHtml = form.groups
      .map((group) => {
        const examplesHtml = group.examples
          .map((example, index) => buildSentenceCard(example, form.id, group.name, index))
          .join("");

        return `
          <section class="form-group-panel">
            <h4>${getVerbGroupDisplayName(group.name)} <span class="group-subtitle">(${group.name})</span></h4>
            ${examplesHtml}
          </section>
        `;
      })
      .join("");

    grid.innerHTML = `
      <section class="form-poster">
        <button type="button" class="form-back-btn">← ${t("Kembali ke daftar")}</button>
        <h2>${t(form.title)}</h2>
        <p>${t(form.summary)}</p>
        <h3>${t("Rumus")}</h3>
        <ul>${formulaHtml}</ul>
        <h3>${t("Contoh Kosakata + Kalimat")}</h3>
        ${groupsHtml}
      </section>
    `;

    grid.querySelector(".form-back-btn")?.addEventListener("click", () => onBack?.());

    grid.querySelectorAll(".shuffle-sentence-btn").forEach((btn) => {
      btn.addEventListener("click", () => {
        const key = btn.dataset.key;
        const target = grid.querySelector(`[data-example-key="${key}"]`);
        if (!target) return;

        const [formKey, groupName, exampleIndexRaw] = key.split(KEY_SEPARATOR);
        const exampleIndex = Number(exampleIndexRaw);
        const selectedForm = getData().find((item) => item.id === formKey);
        const selectedGroup = selectedForm?.groups.find((item) => item.name === groupName);
        const selectedExample = selectedGroup?.examples[exampleIndex];
        if (!selectedExample) return;

        const current = sentenceState.get(key) || 0;
        const next = randomIndex(selectedExample.sentences.length, current);
        sentenceState.set(key, next);

        const sentence = selectedExample.sentences[next];
        target.querySelector('[data-role="sentence-jp"]').textContent = sentence.jp;
        target.querySelector('[data-role="sentence-kana"]').textContent = sentence.kana;
        target.querySelector('[data-role="sentence-romaji"]').textContent = sentence.romaji;
        target.querySelector('[data-role="sentence-meaning"]').textContent = t(sentence.meaning);
        target.querySelector(".form-sentence-play-btn").dataset.text = sentence.audio || sentence.jp;
      });
    });
  }

  window.verbFormsUI = {
    renderHub: renderVerbFormsHub,
    renderPoster: renderVerbFormPoster
  };
})();
