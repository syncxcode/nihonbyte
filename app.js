const grid = document.getElementById("kanjiGrid");
const categorySelect = document.getElementById("category");

function render(category = "all") {
  grid.innerHTML = "";

  const filtered = category === "all"
    ? kanjiData
    : kanjiData.filter(k => k.type === category);

  filtered.forEach(k => {
    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `
      <div class="kanji">${k.kanji}</div>
      <div class="kana">${k.kana}</div>
      <div class="meaning">${k.meaning}</div>
      <div class="tag">${k.type}</div>
    `;
    grid.appendChild(card);
  });
}

categorySelect.addEventListener("change", e => {
  render(e.target.value);
});

render();
