function doubleNumber (numberToDouble) {
  console.log(numberToDouble *= 2);
}
doubleNumber(4); // Output: 8


function multiplyNumber (numberToMultiply) {
  return numberToMultiply * numberToMultiply;
}
console.log(multiplyNumber(4));

function add(firstnumber, secondnumber) {
  return firstnumber + secondnumber;
}
console.log(add(5, 20));

function avreage (firstnumber, secondnumber) {
  return (firstnumber + secondnumber) / 2;
}
console.log(avreage(2, 6));
/*
function avg (firstName,secoundName) {
 return "Welcome" + " " + firstName + " " + secoundName;
  }
  console.log(avg("Ben", "Ting"));
*/
function avg (firstName, secoundName, thirdName) {
  return firstName + " " + secoundName + " " + thirdName;
}
console.log(avg("Welcome", "Moa", "Berglund"));

function getRandomNumber () {
return Math.floor(Math.random() * 3);
}
console.log(getRandomNumber());
console.log(getRandomNumber());
/*
function convertNumbersToLetters (numbers) {
  if (numbers === 0) ;
  {
    return "A";
  }
  else if (numbers === 1) ; {
    return "B";
  }
  else if (numbers === 2) ; {
    return "C";
  }
  else {
    return "Invalid Number";
  }
}
  console.log(convertNumbersToLetters(0));
console.log(convertNumbersToLetters(1));
console.log(convertNumbersToLetters(2));
*/

function evoulation (firstNumber, secondNumber) {
 let string;
  if (firstNumber === secondNumber) {
    string = "Both numbers are equal!";
  }
  else if (firstNumber === secondNumber) {
  string = "First number is greater!";
}
  else if (firstNumber === secondNumber) {
  string = " Second number is greater!";
}
}
console.log(evoulation(312, 412));
