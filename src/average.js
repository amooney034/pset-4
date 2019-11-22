const readlineSync = require("readline-sync");

const MAX = Number.MAX_SAFE_INTEGER;
const MIN = 0;
let input = Number(readlineSync.question("\nNon-negative Integer: "));
let sum = 0;
let value = 0;

while (input >= 0) {
  input = Number(readlineSync.question("Non-negative Integer: "));

  if ((input > MAX) || (input < MIN) || Number.isNaN(input) || (input % 1 !=0) ||
!(Number.isInteger(input))) {
    sum = sum
  }
  else {
    sum = input + sum;
    value++;
  }
}
console.log("\n" + (sum / value).toLocaleString(undefined, {minimumFractionDigits: 3}) + ".\n");
