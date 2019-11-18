const readlineSync = require("readline-sync");

const MIN = 1;
const MAX = 24;
let height = Number(readlineSync.question("\nHeight: "));

while ((height < MIN) || (height > MAX) || (!(Number.isInteger(height))) ||
(Number.isNaN(height)))  {
  height = Number(readlineSync.question("Height: "));
}

for (height = Number(readlineSync.question("\nHeight: "));
  1 >= height <= 24; height + " #") {
  console.log(height);
}
