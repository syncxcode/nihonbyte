const grid = document.getElementById("kanjiGrid");
const categorySelect = document.getElementById("category");
const searchInput = document.getElementById("search");

function render() {
  const category = categorySelect.value;
  const keyword = searchInput.value.toLowerCase();

  grid.innerHTML = "";

  const filtered = kanjiData.filter(k => {
    const matchCategory =
      category === "all" || k.type === category;

    const matchSearch =
      k.kanji.includes(keyword) ||
      k.kana.includes(keyword) ||
      k.meaning.toLowerCase().includes(keyword);

    return matchCategory && matchSearch;
  });

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

categorySelect.addEventListener("change", render);
searchInput.addEventListener("input", render);

render();
