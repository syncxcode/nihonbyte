document.addEventListener("DOMContentLoaded", () => {
  const grid = document.getElementById("kanjiGrid");
  const category = document.getElementById("category");
  const search = document.getElementById("search");

  if (!grid) {
    console.error("kanjiGrid tidak ditemukan");
    return;
  }

  function render() {
    grid.innerHTML = "";

    const cat = category.value;
    const key = search.value.trim().toLowerCase();

    kanjiData.forEach(k => {
      if (cat !== "all" && k.type !== cat) return;

      const text = (k.kanji + k.kana + k.meaning).toLowerCase();
      if (key && !text.includes(key)) return;

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

  category.addEventListener("change", render);
  search.addEventListener("input", render);

  render();
});
