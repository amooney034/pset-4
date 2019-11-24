const readlineSync = require("readline-sync");

const MAX = Number.MAX_SAFE_INTEGER;
let input = 0;//positiveInteger
let number = 1; // x
let zero = 0; //y
let final = ""; //final

console.log();

do {
      input = Number(readlineSync.question("Positive integer: "));
}
while (input <= 0 || input > MAX || Number.isNaN(input) || !Number.isInteger(input));

while (number <= Math.floor(Math.sqrt(input))) {
if (number <= input) {
  zero = input % number

if (number === Math.floor(Math.sqrt(input))) {
  final = final + number + ". "
break;
      }
else if (zero === 0) {
  final = final + number + ", " + (input / number) + ", "
}
  number++
}
}


  console.log("\n" + final + "\n");
