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
