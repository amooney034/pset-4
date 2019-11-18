const readlineSync = require("readline-sync");

const MIN = Number.MIN_SAFE_INTEGER;
const MAX = Number.MAX_SAFE_INTEGER;
let enter = Number(readlineSync.question("\nPositive integer: "));

while ((enter < MIN) || (enter > MAX) || (!(Number.isInteger(enter)))
|| (Number.isNaN(enter)))  {
enter = Number(readlineSync.question("Positive integer: "));
}
