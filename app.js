document.addEventListener("DOMContentLoaded", () => {

  const grid = document.getElementById("grid");
  const category = document.getElementById("category");
  const search = document.getElementById("search");

  const kanjiData = [
    { kanji:"水", kana:"みず", meaning:"air", type:"noun" },
    { kanji:"火", kana:"ひ", meaning:"api", type:"noun" },
    { kanji:"山", kana:"やま", meaning:"gunung", type:"noun" },
    { kanji:"行", kana:"いく", meaning:"pergi", type:"verb" },
    { kanji:"食", kana:"たべる", meaning:"makan", type:"verb" },
    { kanji:"高", kana:"たかい", meaning:"tinggi / mahal", type:"adj-i" },
    { kanji:"安", kana:"やすい", meaning:"murah", type:"adj-i" },
    { kanji:"元気", kana:"げんき", meaning:"sehat", type:"adj-na" },
    { kanji:"静", kana:"しずか", meaning:"tenang", type:"adj-na" }
  ];

  function render() {
    grid.innerHTML = "";

    const cat = category.value;
    const key = search.value.toLowerCase();

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