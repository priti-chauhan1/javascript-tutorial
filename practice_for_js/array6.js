const rlsync = require('readline-sync');
let n = parseInt(rlsync.question("Enter the number of elements: "));
let arr = [];

// Input array elements
for (let i = 0; i < n; i++) {
    const element = parseInt(rlsync.question(`Enter number ${i + 1}: `));
    arr.push(element);
}

console.log("Entered array:", arr);

let max = -Infinity;
let second_max = -Infinity;

for (let i = 0; i < n; i++) {
    if (arr[i] > max) {
        second_max = max;
        max = arr[i];
    } else if (arr[i] > second_max && arr[i] !== max) {
        second_max = arr[i];
    }
}

console.log("Second largest element:", second_max);
