const readlineSync = require("readline-sync");

const MAX = Number.MAX_SAFE_INTEGER
const MIN = Number.MIN_SAFE_INTEGER
let input;
let space;
let second;
console.log();

do {
    input = Number(readlineSync.question("Height: "));
}
while (Number.isNaN(input) || input % 1 !== 0 || input < MIN || input > MAX);

console.log();

let reverse = input;
while (reverse > 0) {
  space = "";
  second = "";

for (i = 0; i <= input; i++) {
  second = second + "#";
    }
for (i = 0; i < reverse - 1; i++) {
  second = second.replace(second.charAt(i), " ");
    }
for (i = reverse - 2; i < input; i++) {
        space = space + "#";
    }

console.log(second + " " + space);
  reverse = reverse - 1
}
console.log("\n");
