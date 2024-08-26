const readlineSync = require('readline-sync');
let n = parseInt(readlineSync.question("Enter the number of elements: "));
let arr = [];
for (let i = 0; i < n; i++) {
    arr[i] = parseInt(readlineSync.question(`Enter the number for element ${i + 1}: `));
}
console.log("Entered array:", arr);
let max = -Infinity;
let second_max = -Infinity;
for (let i = 0; i < n; i++) {
    if (arr[i] > max) {
        second_max = max;
        max = arr[i];
    } else if (arr[i] > second_max && arr[i] < max) {
        second_max = arr[i];
    }
}
if (second_max === -Infinity) {
    console.log("There is no second maximum value.");
} else {
    console.log("The second maximum value is:", second_max);
}
