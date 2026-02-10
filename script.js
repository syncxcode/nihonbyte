let current;

function startQuiz(){
  loadQuestion();
}

function loadQuestion(){
  const filterValue = document.getElementById("filter").value;
  let filteredWords = words;

  if(filterValue !== "all"){
    if(filterValue.startsWith("level-")){
      const level = filterValue.replace("level-", "");
      filteredWords = words.filter(w => w.level === level);
    }

    if(filterValue.startsWith("type-")){
      const type = filterValue.replace("type-", "");
      filteredWords = words.filter(w => w.type === type);
    }
  }

  if(filteredWords.length === 0){
    document.getElementById("question").innerText =
      "Tidak ada data di kategori ini.";
    document.getElementById("options").innerHTML = "";
    return;
  }

  current = filteredWords[Math.floor(Math.random() * filteredWords.length)];

  document.getElementById("question").innerText =
    "Apa arti dari: " + current.kanji + " ?";

  const optionsDiv = document.getElementById("options");
  optionsDiv.innerHTML = "";

  let options = words.map(w => w.arti);
  options.sort(() => Math.random() - 0.5);
  options = options.slice(0, 4);

  if(!options.includes(current.arti)){
    options[Math.floor(Math.random() * options.length)] = current.arti;
  }

  options.forEach(opt => {
    let btn = document.createElement("button");
    btn.innerText = opt;
    btn.onclick = () => checkAnswer(opt);
    optionsDiv.appendChild(btn);
  });
}

function checkAnswer(answer){
  if(answer === current.arti){
    document.getElementById("result").innerText = "Benar!";
  } else {
    document.getElementById("result").innerText =
      "Salah! Jawaban: " + current.arti;
  }
}
