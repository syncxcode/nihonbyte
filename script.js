let current;

function startQuiz(){
  loadQuestion();
}

function loadQuestion(){
  current = words[Math.floor(Math.random() * words.length)];
  document.getElementById("question").innerText =
    "Apa arti dari: " + current.kanji + " ?";
  
  const optionsDiv = document.getElementById("options");
  optionsDiv.innerHTML = "";

  let options = words.map(w => w.arti);
  options.sort(() => Math.random() - 0.5);

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
