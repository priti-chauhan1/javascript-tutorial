var readline = require('readline-sync');
let n = readline.question('Enter the property name:');
let dict = {"name": "Raju", "marks": 56};

// Initialize a variable to track existence
let exists = false;

// Loop through each property in the object
for (let key in dict) {
    if (key === n) {
        exists = true; // If property found, set exists to true
        break; // Exit the loop since we found the property
    }
}

// Check if exists is true and print the result
if (exists) {
    console.log(`${n} exists`);
} else {
    console.log(`${n} does not exist`);
}
