
const headerText5 = document.getElementById("header5");
headerText5.innerHTML = "I AM LOST";

headerText5.style.color = "red";
headerText5.style.backgroundColor = "black";

const headerText6 = document.getElementById("button0");
headerText6.style.backgroundColor = "red";
headerText6.style.color = "white";

const textField0 = document.getElementById("text0");
textField0.innerHTML = getRandomInt(5);

function multiplyNumber (numberToMultiply) {
  return numberToMultiply * numberToMultiply;
}

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

function average (firstNumber, secondNumber) {
  return firstNumber + secondNumber;
}
