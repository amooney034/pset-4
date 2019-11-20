const readlineSync = require("readline-sync");

const MIN = 1;
const MAX = Number.MAX_SAFE_INTEGER;
let input = Number(readlineSync.question("\nPositive integer: "));

while ((input < MIN) || (input > MAX) || (!(Number.isInteger(input))) ||
(Number.isNaN(input)))  {
  input = Number(readlineSync.question("Positive integer: "));
}

let revNumber = 0;
let revNumberComma = "";
while (input > 0) {
  revNumber = (input % 10);
  input = Math.floor(input / 10);
  if (input === 0) {
    revNumberComma = revNumberComma + revNumber + ".";
  }
  else {
    revNumberComma = revNumberComma + revNumber + ", ";
  }
}


console.log("\n" + revNumberComma + "\n");
