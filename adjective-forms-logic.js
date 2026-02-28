(function initAdjectiveFormsLogic() {
  const sentenceState = new Map();
  const KEY_SEPARATOR = "::";

  function getData() {
    return Array.isArray(window.adjectiveFormsData) ? window.adjectiveFormsData : [];
  }

  function randomIndex(max, except = -1) {
    if (max <= 1) return 0;
    let idx = Math.floor(Math.random() * max);
    while (idx === except) idx = Math.floor(Math.random() * max);
    return idx;
  }

  function createKey(formId, groupName, exampleIndex) {
    return [formId, groupName, exampleIndex].join(KEY_SEPARATOR);
  }

  function renderHub({ grid, onOpenPoster }) {
    const forms = getData();
    grid.innerHTML = `
      <section class="forms-hub">
        <h2>Bentuk Kata Sifat</h2>
        <p>Pilih poster bentuk kata sifat untuk buka materi lengkap.</p>
        <div class="forms-brick-grid"></div>
      </section>
    `;

    const brickGrid = grid.querySelector(".forms-brick-grid");
    forms.forEach((form) => {
      const btn = document.createElement("button");
      btn.className = "form-brick";
      btn.type = "button";
      btn.innerHTML = `<strong>${form.title}</strong><span>${form.summary}</span>`;
      btn.addEventListener("click", () => onOpenPoster?.(form.id));
      brickGrid.appendChild(btn);
    });
  }

  function buildSentenceCard(example, formId, groupName, exampleIndex) {
    const key = createKey(formId, groupName, exampleIndex);
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
          <p class="sentence-jp">${sentence.jp}</p>
          <p>${sentence.kana}</p>
          <p>${sentence.romaji}</p>
          <p>${sentence.meaning}</p>
        </div>
        <div class="sentence-actions">
          <button type="button" class="wide-play-btn" data-text="${sentence.audio || sentence.jp}">▶ Play</button>
          <button type="button" class="shuffle-sentence-btn" data-key="${key}">🔀 Acak Kalimat</button>
        </div>
      </article>
    `;
  }

  function renderPoster({ grid, formId, onBack }) {
    const form = getData().find((item) => item.id === formId);
    if (!form) {
      grid.innerHTML = '<div class="empty-state">Materi bentuk kata sifat tidak ditemukan.</div>';
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
            <h4>${group.name}</h4>
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

        const [formIdPart, groupName, exampleIndexRaw] = key.split(KEY_SEPARATOR);
        const exampleIndex = Number(exampleIndexRaw);
        const selectedForm = getData().find((item) => item.id === formIdPart);
        const selectedGroup = selectedForm?.groups.find((item) => item.name === groupName);
        const selectedExample = selectedGroup?.examples[exampleIndex];
        if (!selectedExample) return;

        const current = sentenceState.get(key) || 0;
        const next = randomIndex(selectedExample.sentences.length, current);
        sentenceState.set(key, next);

        const sentence = selectedExample.sentences[next];
        target.querySelector(".sentence-jp").textContent = sentence.jp;
        target.querySelector(".sentence-box p:nth-child(2)").textContent = sentence.kana;
        target.querySelector(".sentence-box p:nth-child(3)").textContent = sentence.romaji;
        target.querySelector(".sentence-box p:nth-child(4)").textContent = sentence.meaning;
        target.querySelector(".wide-play-btn").dataset.text = sentence.audio || sentence.jp;
      });
    });
  }

  window.adjectiveFormsUI = { renderHub, renderPoster };
})();
