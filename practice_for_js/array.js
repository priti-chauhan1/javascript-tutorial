

// Initialize an empty array
const rlsync = require('readline-sync');
let array = [];

// Get the number of elements from the user
let n = parseInt(rlsync.question("Enter the number of elements:"));

// Loop to get input from the user
for (let i = 0; i < n; i++) {
    let element = rlsync.question(`Enter element ${i+1}:`);
    array.push(element);
}

// Print the array
console.log("Array:", array);

