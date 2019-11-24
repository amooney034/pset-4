const readlineSync = require("readline-sync");

const MAX = 24;
const MIN = 1;
let input = Number(readlineSync.question("\nHeight: "));
let dialogue = "";
while (input > MAX || input < MIN || Number.isNaN(input) || input%1!=0){
  input = Number(readlineSync.question("Height: "));
}
console.log();
for (let i = MIN; i < input + 1; i++){
for (let x = 0; x < input - i; x++){
dialogue = dialogue + " ";
}
for (let x = 0; x < i + MIN; x++){
dialogue = dialogue + "#";
}
console.log(dialogue);
dialogue = "";
}
