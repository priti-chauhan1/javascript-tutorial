// see this list:

// marks = [[78, 76, 94, 86, 88],[91, 71, 98, 65, 76],[95, 45, 78, 52, 49]]

// Think that this is marks of some students from last 3 years, you need to calculate the marks of all subjects.

// For the above given list the total sum is- 1142.
const readlinesync = require('readline-sync');
let n = parseInt(readlinesync.question("Enter the number of elements: "));
let arr = [];
// Loop to get input from the user
for (let i = 0; i < n; i++) {
    let element = parseInt(readlinesync.question(`Enter element ${i}: `));
    arr.push(element);
}
let marks = [
    [78, 76, 94, 86, 88],
    [91, 71, 98, 65, 76],
    [95, 45, 78, 52, 49]
];
let sum = 0;
// Calculate the sum of all elements in the marks array
for (let i of marks) {
    for (let j of i) {
        sum += j;
    }
}
console.log("Total sum of marks:", sum);




