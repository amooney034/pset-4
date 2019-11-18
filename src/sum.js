const readlineSync = require("readline-sync");

const MIN = Number.MIN_SAFE_INTEGER;
const MAX = Number.MAX_SAFE_INTEGER;
let lowerBound =Number(readlineSync.question("\nLower bound: "));
let upperBound = Number(readlineSync.question("Upper bound: "));
let finalEven;
let initialEven;



while ((upperBound < MIN) || (lowerBound > upperBound) || (lowerBound < MIN) || (lowerBound > MAX) || (upperBound > MAX) || (!(Number.isInteger(upperBound)))
|| (!(Number.isInteger(lowerBound))) || (Number.isNaN(lowerBound)) || (Number.isNaN(upperBound)))  {
  lowerBound = Number(readlineSync.question("Lower bound: "));
  upperBound = Number(readlineSync.question("Upper bound: "));
}

if (upperBound % 2 === 0) {
  finalEven = upperBound
} else {
  finalEven = upperBound - 1
}

if (lowerBound % 2 === 0) {
  initialEven = lowerBound
} else {
  initialEven = lowerBound + 1
}

let average = ((finalEven + initialEven)/2);
let quantity = (((finalEven - initialEven)/2) + 1);
let formula = average * quantity
let formulaTwo = formula.toLocaleString('en');

console.log("\n" + formulaTwo + ".\n");


console.log("\n" + next + ".\n");
