document.addEventListener("DOMContentLoaded", () => {
  const grid = document.getElementById("kanjiGrid");
  const categorySelect = document.getElementById("category");
  const searchInput = document.getElementById("search");

  let currentCategory = "all";
  let currentSearch = "";

  function render() {
    grid.innerHTML = "";

    const filtered = kanjiData.filter(k => {
      const matchCategory =
        currentCategory === "all" || k.type === currentCategory;

      const matchSearch =
        k.kanji.includes(currentSearch) ||
        k.kana.includes(currentSearch) ||
        k.meaning.toLowerCase().includes(currentSearch);

      return matchCategory && matchSearch;
    });

    if (filtered.length === 0) {
      grid.innerHTML = `<p style="grid-column:1/-1;text-align:center;">Data tidak ditemukan</p>`;
      return;
    }

    filtered.forEach(k => {
      const card = document.createElement("div");
      card.className = "card";
      card.innerHTML = `
        <div class="kanji">${k.kanji}</div>
        <div class="kana">${k.kana}</div>
        <div class="meaning">${k.meaning}</div>
      `;
      grid.appendChild(card);
    });
  }

  categorySelect.addEventListener("change", e => {
    currentCategory = e.target.value;
    render();
  });

  searchInput.addEventListener("input", e => {
    currentSearch = e.target.value.trim().toLowerCase();
    render();
  });

  render();
});
