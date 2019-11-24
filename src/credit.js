const readlineSync = require("readline-sync");

let against = 1;
let input = 0; 
let add = 0;
let input2 = 0;
let sum = 0;
let repeat = 0;
let again = 0;
let single = 0;
let number = 0;
console.log();

do {
  input = Number(readlineSync.question("Number: "));
} while (input < 1000000000000 || input > 9999999999999999 || Number.isNaN(input) || !Number.isInteger(input))

input2 = input

while (input2 >= 1) {
  input2 = input2 / 10
  number = number + 1
}
repeat = Math.floor(input / 10 ** (number - 1))
again = (Math.floor(input / 10 ** (number - 2)) / 10) * 10

for (let loop = 0; loop < number; loop++) {
  single = (input - Math.floor(input / 10) * 10)
  input = Math.floor(input / 10)
  if (loop % 2 == 1) {
    if (single * 2 >= 10) {
      add = add + ((single * 2 - single * 2 % 10) / 10 + single * 2 % 10)
    }
    else if (single * 2 < 10) {
      add = add + single * 2
    }
  }
  else {
    add = add + single
  }
  against = against + 1
}

if (add / 10 % 1 != 0) {
  console.log("\nInvalid.")
}
else if (number == 15 && (again == 34 || again == 37)) {
  console.log("\nAmex.")
}
else if (number == 16 && (again <= 55 && again >= 51)) {
  console.log("\nMastercard.")
}
else if ((number == 13 || number == 16) && repeat == 4) {
  console.log("\nVisa.")
}
