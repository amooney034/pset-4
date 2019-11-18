const readlineSync = require("readline-sync");

const MIN = 1;
const MAX = Number.MAX_SAFE_INTEGER;
let input = Number(readlineSync.question("\nPositive integer: "));

while ((input < MIN) || (input > MAX) || (!(Number.isInteger(input))) ||
(Number.isNaN(input)))  {
  input = Number(readlineSync.question("Positive integer: "));
}
