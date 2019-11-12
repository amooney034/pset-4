const readlineSync = require("readline-sync");

const MIN = Number.MIN_SAFE_INTEGER;
const MAX = Number.MAX_SAFE_INTEGER;

let lowerBound = -1;
while (lowerBound < 0 || lowerBound > 100) {
    lowerBound = readlineSync.question("\nLower bound: ");
}
