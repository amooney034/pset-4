const input = require("readline-sync");

const MAX = Number.MAX_SAFE_INTEGER;
let number = Number(input.question("\nPositive integer: "));
let range = [];
let zero = 0;

while (number > MAX || number < 1 || Number.isNaN(number)
|| number % 1 != 0 || !Number.isInteger(number)) {
 number = Number(input.question("Positive integer: "));
}
for (let i = 1; i < number / 2; i++) {
 if (number % i == 0) {
   zero = number / i;
   range.push(i);
   range.push(zero);
 }
}
range = [...new Set(range)];
console.log("\n" + range.join (", ") + ".\n");
