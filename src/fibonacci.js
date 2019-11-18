const readlineSync = require("readline-sync");

const MIN = 1;
const MAX = 78;
let input = Number(readlineSync.question("\nPositive integer: "));

while ((input < MIN) || (input > MAX) || (!(Number.isInteger(input))) ||
(Number.isNaN(input)))  {
  input = Number(readlineSync.question("Positive integer: "));
}

let first = input + 1
