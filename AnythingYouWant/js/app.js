
const textField0 = document.getElementById("text0");
const textField1 = document.getElementById("text1");

const increaseScoreButton = document.getElementById("button0");

let score = 0;
let win = false;

increaseScoreButton.addEventListener("click", () => {
  increaseScoreByOne();
  updateScoreText();
  checkScoreForSeven();
});


function showScore (inputNumber) {
  return inputNumber * 100;
}
function showStylizedScore(scoreInput) {
  return "Your Score is: " + scoreInput * 100;
}

function increaseScoreByOne () {
 score++;
}

function checkScoreForSeven () {
  if (score >= 7) {
    changeScoreTextColorToGreen()
  }
}

function updateScoreText() {
 return textField0.innerHTML = "Your score is: " + score;
}
function updateStatusText(newText) {
 return textField1.innerHTML = newText;
}

function changeScoreTextColorToGreen() {
  textField0.style.color = "green";
}
