document.addEventListener("DOMContentLoaded", () => {

  const grid = document.getElementById("grid");
  const category = document.getElementById("category");
  const search = document.getElementById("search");

  function render() {
    grid.innerHTML = "";

    const cat = category.value;
    const key = search.value.toLowerCase();

    vocabularyData.forEach(k => {

      if (cat !== "all" && !k.type.startsWith(cat)) return;

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

  category.addEventListener("change", render);
  search.addEventListener("input", render);

  hamburger.addEventListener("click", () => {
    sidebar.classList.toggle("active");
    overlay.classList.toggle("active");
  });

  overlay.addEventListener("click", () => {
    sidebar.classList.remove("active");
    overlay.classList.remove("active");
  });

});