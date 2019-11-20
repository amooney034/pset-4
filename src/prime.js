const readlineSync = require("readline-sync");

const MIN = 0;
const MAX = Number.MAX_SAFE_INTEGER;
let input = Number(readlineSync.question("\nNon-negative integer: "));
let answer = "Prime";

while ((input < MIN) || (input > MAX) || (!(Number.isInteger(input))) ||
(Number.isNaN(input)))  {
  input = Number(readlineSync.question("Non-negative integer: "));
}

for (let number = 2; number < input; number++) {
  if (input % number === 0) {
    answer = ("Not Prime.");
  }
  else if (number == 1 || number == 2) {
    answer = ("Prime.");
  }
}
console.log("\n" + answer + "\n");
