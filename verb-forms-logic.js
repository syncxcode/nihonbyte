(function initVerbFormsLogic() {
  const sentenceState = new Map();
  const KEY_SEPARATOR = "::";

  function getData() {
    return Array.isArray(window.verbFormsData) ? window.verbFormsData : [];
  }

  function randomIndex(max, except = -1) {
    if (max <= 1) return 0;
    let idx = Math.floor(Math.random() * max);
    while (idx === except) idx = Math.floor(Math.random() * max);
    return idx;
  }

  function renderVerbFormsHub({ grid, onOpenPoster }) {
    const forms = getData();
    const levels = Array.isArray(window.verbFormsLevels) ? window.verbFormsLevels : ["N5", "N4", "N3", "N2", "N1"];

    grid.innerHTML = `
      <section class="forms-hub">
        <div class="forms-hub-head">
          <div>
            <h2>Bentuk Kata Kerja</h2>
            <p>Pilih level JLPT dulu, lalu buka poster bentuk kata kerja yang kamu butuhkan.</p>
          </div>
          <label class="forms-level-filter-wrap" for="verb-form-level-filter">
            <span>Level</span>
            <select id="verb-form-level-filter" class="forms-level-filter">
              <option value="all">Semua Level (N5~N1)</option>
              ${levels.map((level) => `<option value="${level}">${level}</option>`).join("")}
            </select>
          </label>
        </div>
        <div class="forms-brick-grid"></div>
      </section>
    `;

    const brickGrid = grid.querySelector(".forms-brick-grid");
    const levelSelect = grid.querySelector("#verb-form-level-filter");

    function paintList() {
      const selectedLevel = levelSelect?.value || "all";
      const filteredForms = selectedLevel === "all"
        ? forms
        : forms.filter((form) => form.level === selectedLevel);

      brickGrid.innerHTML = "";

      if (!filteredForms.length) {
        brickGrid.innerHTML = '<div class="empty-state">Belum ada materi untuk level ini.</div>';
        return;
      }

      filteredForms.forEach((form) => {
        const btn = document.createElement("button");
        btn.className = "form-brick";
        btn.type = "button";
        btn.innerHTML = `<strong>${form.title}</strong><span>${form.summary}</span><small class="form-level-badge">${form.level || "-"}</small>`;
        btn.addEventListener("click", () => onOpenPoster?.(form.id));
        brickGrid.appendChild(btn);
      });
    }

    levelSelect?.addEventListener("change", paintList);
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
        <p><strong>Arti:</strong> ${example.meaning}</p>
        <div class="sentence-box">
          <button type="button" class="wide-play-btn form-sentence-play-btn" data-text="${sentence.audio || sentence.jp}" aria-label="Putar kalimat">
            <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M8 6v12l10-6z"></path></svg>
          </button>
          <p class="sentence-jp" data-role="sentence-jp">${sentence.jp}</p>
          <p data-role="sentence-kana">${sentence.kana}</p>
          <p data-role="sentence-romaji">${sentence.romaji}</p>
          <p data-role="sentence-meaning">${sentence.meaning}</p>
        </div>
        <div class="sentence-actions">
          <button type="button" class="shuffle-sentence-btn" data-key="${key}">
            <span class="shuffle-icon" aria-hidden="true">
              <svg viewBox="0 0 24 24"><path d="M16 3h5v5"></path><path d="M4 20l7-7"></path><path d="M21 3l-7 7"></path><path d="M16 21h5v-5"></path><path d="M4 4l7 7"></path><path d="M21 21l-7-7"></path></svg>
            </span>
            Acak Kalimat
          </button>
        </div>
      </article>
    `;
  }



  function getVerbGroupDisplayName(name) {
    if (!name) return "";
    if (/godan/i.test(name)) return "KATA KERJA GODAN";
    if (/ichidan/i.test(name)) return "KATA KERJA ICHIDAN";
    if (/irregular|suru|kuru/i.test(name)) return "KATA KERJA IRREGULER";
    return `KATA KERJA ${name.toUpperCase()}`;
  }

  function renderVerbFormPoster({ grid, formId, onBack }) {
    const form = getData().find((item) => item.id === formId);
    if (!form) {
      grid.innerHTML = '<div class="empty-state">Materi bentuk kata kerja tidak ditemukan.</div>';
      return;
    }

    const formulaHtml = form.formulas
      .map((item) => `<li><strong>${item.group}:</strong> ${item.rule}</li>`)
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
        <button type="button" class="form-back-btn">← Kembali ke daftar</button>
        <h2>${form.title}</h2>
        <p>${form.summary}</p>
        <h3>Rumus</h3>
        <ul>${formulaHtml}</ul>
        <h3>Contoh Kosakata + Kalimat</h3>
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
        target.querySelector('[data-role="sentence-meaning"]').textContent = sentence.meaning;
        target.querySelector(".form-sentence-play-btn").dataset.text = sentence.audio || sentence.jp;
      });
    });
  }

  window.verbFormsUI = {
    renderHub: renderVerbFormsHub,
    renderPoster: renderVerbFormPoster
  };
})();
