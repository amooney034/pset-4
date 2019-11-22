const readlineSync = require("readline-sync");

const MIN = Number.MIN_SAFE_INTEGER;
let final = 0;
let factor = 0;
console.log();

do{
number = Number(readlineSync.question("Positive integer: "));
}
while (number < 1 || number > Number.MAX_SAFE_INTEGER || Number.isNaN(number) ||
number % 1 != 0 || !Number.isInteger(number));

do {
factor = number % 10;
if (factor % 2 != 0) {
  final = final + factor;
}
number = number - factor;
number = number / 10;
}
while (number >= 10);

final = final + number

console.log("\n" + final + ".");
