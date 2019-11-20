const readlineSync = require("readline-sync");

const MIN = 1;
const MAX = 78;
let input = Number(readlineSync.question("\nPositive integer: "));
let sqrtFive = Math.sqrt(5);
let phi = ((1 + sqrtFive) / 2);


while ((Number.isNaN(input)) || (input < MIN) || (input > MAX) ||
(!(Number.isInteger(input))))  {
  input = Number(readlineSync.question("Positive integer: "));
}

let primary = ((phi ** input) - ((-phi) ** -input));
let secondary = (primary / sqrtFive);
let final = Math.round(secondary);
let finished = final.toLocaleString('en');

console.log("\n" + finished + ".\n");
