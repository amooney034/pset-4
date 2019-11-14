const readlineSync = require("readline-sync");

const MIN = Number.MIN_SAFE_INTEGER;
const MAX = Number.MAX_SAFE_INTEGER;
let lowerBound =Number(readlineSync.question("\nLower bound: "));
let upperBound = Number(readlineSync.question("Upper bound: "));
let finalEven;
let initialEven;
let n;

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

if ((upperBound % 2 === 0) && (lowerBound % 2 === 0)) {
  n = upperBound / 2
} else if (upperBound % 2 === 0 && lowerBound % 2 !== 0) {
  n = (upperBound / 2) - 1
} else if (upperBound % 2 !== 0) {
  n = Math.floor(upperBound - 1)
}


let sumin = (initialEven + finalEven);
let next = (n / 2) * sumin;


console.log("\n" + next + ".\n");
