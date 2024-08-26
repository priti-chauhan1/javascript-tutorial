// const prompt = require('prompt-sync')();
// let  n = prompt("Enter the number of elements:")
// let x = prompt("Enter the value of x: ");
// let y = prompt("Enter the value of y ");
// let result  = Math.floor(x % y)
// console.log(result);


//     function countItems(subArray) {
//         for (let item of subArray) {
//             if (Array.isArray(item)) {
//                 countItems(item);
//             } else {
//                 count++;
//             }
//         }
//     }
//     countItems(arr);
//     return count;
// }
// console.log(getLength([1, [2, 3]])); 
// console.log(getLength([1, [2, [3, 4]]])); 
// console.log(getLength([1, [2, [3, [4, [5, 6]]]]])); 
// console.log(getLength([1, [2], 1, [2], 1])); 

const prompt = require('prompt-sync')();
let A = parseFloat(prompt("Enter the amount first: "));
let B = parseFloat(prompt("Enter the amount second : "));
let v1 = (A / 10) * 100; 
let v2 = (B / 20) * 100; 
if (v1 > v2) {
    console.log("First");
} else if (v1 < v2) {
    console.log("Second");
} else {
    console.log("Any");
}

