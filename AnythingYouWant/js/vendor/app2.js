


let button0 = document.getElementById("button0");
let playerRoll = 0;

let playerRollText = document.getElementById("playerRollText");



button0.addEventListener("click", function() {
  playerRoll = getRandomInt();
  showPlayerRollResult ();
});


function getRandomInt() {
  playerRoll = Math.floor(Math.random() * 6) + 1;
}


function showPlayerRollResult () {
  playerRollText.innerText = playerRoll;
}


