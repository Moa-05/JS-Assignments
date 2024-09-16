const birthdYear = 2010;
const currentyear = 2024;
let ageOfPerson = currentyear - birthdYear;
console.log(ageOfPerson);

let isChild = (ageOfPerson <= 0) && (ageOfPerson <=10);
let isTeenager = (ageOfPerson >= 11) && (ageOfPerson <= 17);
let isAdult = ageOfPerson >= 18;

console.log(isChild)
console.log(isTeenager)
console.log(isAdult)



let playerTouchGround = true;
let playerHasJetPack = false;

if (playerTouchGround) {
console.log("player is on the ground.");
console.log("player can jump.");
}

else if (playerHasJetPack) {
  console.log("Player can jet Away");
}

else  {
  console.log("player is NOT on the ground!");
  console.log("player CANNOT jump!");
}










