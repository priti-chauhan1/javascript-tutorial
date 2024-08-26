const readlinesync = require("readline-sync");
let a = parseInt(readlinesync.question("Enter the value of a: "));
let b = parseInt(readlinesync.question("Enter the value of b: "));
let c = parseInt(readlinesync.question("Enter the value of c: "));
let d = parseInt(readlinesync.question("Enter the value of d: "));
let n = [a, b, c, d];
for (let i = 0; i < n.length; i++) {
  for (let j = i + 1; j < n.length; j++) {
    if (n[i] < n[j]) {
      let temp = n[i];
      n[i] = n[j];
      n[j] = temp;
    }
  }
}
let secondMax = n[1];
console.log("The second maximum number is: " , secondMax);
