console.log("Move Forward");
console.log("Turn Right");

function stepForward (){
  console.log("Move Forward");
}
function turnRight() {
console.log("Turn Right");
}
function turnLeft() {
  turnRight();
  turnRight();
  turnRight();
}
function walkThreeSteps () {
  stepForward ();
  stepForward ();
  stepForward ();
}
function turnAround (){
  turnRight();
  turnRight();
}

walkThreeSteps()
turnAround ()
walkThreeSteps()
turnAround ()
walkThreeSteps()
turnLeft()
stepForward()
turnAround ()
stepForward()

function sayGoodMorning(){
  console.log("Good Morning ");
}
sayGoodMorning()

/*
if (isAwake) {
  console.log("Awake!");
}
else {
  console.log("Asleep!");
}
isAwake = true;
*/

function sayManyThings (){
 console.log("I can say ine thing.");
 return;
 console.log("But can I say many things?");
}

function getBankBalance () {
  return "You are cool";
}
/*
console.log(getBankBalance());

function addOne(inputNumber) {
 inputNumber += 1;
console.log(inputNumber);
  }
  addOne(inputNumber:8);
*/

/*
function square (numberToSquare) {
  return numberToSquare * numberToSquare;
}
let squaredNumber = square(numberToSquare:15);
console.log(squaredNumber);
*/

function doubleNumber (numberToDouble) {
  console.log(numberToDouble *= 2);
}
doubleNumber(4); // Output: 8



