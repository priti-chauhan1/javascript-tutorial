const readlinesync = require('readline-sync');
let n = parseInt(readlinesync.question("Enter the number of elements: "));
let arr = [];
for (let i = 0; i < n; i++) {
    arr[i] = parseInt(readlinesync.question(`Enter the ${i + 1}th number: `));
}
console.log("Entered array:", arr);
let max = arr[0]; 
for (let i = 1; i < n; i++) {
    if (arr[i] > max) {
        max = arr[i]; 
    }
}
console.log("The maximum value in the array is:", max);
