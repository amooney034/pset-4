const readlineSync = require("readline-sync");

const MIN = Number.MIN_SAFE_INTEGER;
const MAX = Number.MAX_SAFE_INTEGER;
let lowerBound =Number(readlineSync.question("\nLower bound: "));
let upperBound = Number(readlineSync.question("Upper bound: "));

while ((upperBound < MIN) || (lowerBound > upperBound) || (lowerBound < MIN) || (lowerBound > MAX) || (upperBound > MAX) || (!(Number.isInteger(upperBound)))
|| (!(Number.isInteger(lowerBound))) || (Number.isNaN(lowerBound)) || (Number.isNaN(upperBound)))  {
  lowerBound = Number(readlineSync.question("Lower bound: "));
  upperBound = Number(readlineSync.question("Upper bound: "));
}

final = 
console.log("\n" + final + ".\n");
