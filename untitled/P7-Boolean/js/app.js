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


