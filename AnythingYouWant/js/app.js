
const textField0 = document.getElementById("text0");
const textField1 = document.getElementById("text1");

let score = 0;

increaseScoreByOne();

function showScore (inputNumber) {
  return inputNumber * 100;
}
function showStylizedScore(scoreInput) {
  return "Your Score is: " + scoreInput * 100;
}

function increaseScoreByOne () {
  score++;
  updateScoreText(score);
}

function updateScoreText(newText) {
 return textField0.innerHTML = newText;
}
function updateStatusText(newText) {
 return textField1.innerHTML = newText;
}

