const readlineSync = require("readline-sync");

const MIN = 1;
const MAX = Number.MAX_SAFE_INTEGER;
let input = Number(readlineSync.question("\nPositive integer: "));

while ((input < MIN) || (input > MAX) || (!(Number.isInteger(input))) ||
(Number.isNaN(input)))  {
  input = Number(readlineSync.question("Positive integer: "));
}

function reverseNumber(input) {
  var revNumber = 0;
  while (input > 0) {
    revNumber = (revNumber * 10) + (input % 10);
    input = Math.floor(input / 10);
  }
  return revNumber;
}
let final = (reverseNumber(input));
let secondFinal = final.toLocaleString();
console.log(secondFinal);
