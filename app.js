const grid = document.getElementById("kanjiGrid");
const buttons = document.querySelectorAll(".filters button");

function render(type = "all") {
  grid.innerHTML = "";

  const data = type === "all"
    ? kanjiData
    : kanjiData.filter(k => k.type === type);

  data.forEach(k => {
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

buttons.forEach(btn => {
  btn.addEventListener("click", () => {
    buttons.forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
    render(btn.dataset.type);
  });
});

render();
