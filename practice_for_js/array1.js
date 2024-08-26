// // // write a programme to find the count of the karodpati ,lakhpati,dilwale
// // var kitna_paisa_hai = [3000, 600000, 324990909, 90990900, 30000, 5600000, 690909090, 31010101, 532010, 510, 4100]
// ar kitnapaisahai = [3000, 600000, 324990909, 90990900, 30000, 5600000, 690909090, 31010101, 532010, 510, 4100]

// Who has the more than 1 crore or equal to 1 crore called Crorepati hain.

// Who has the more than 1 lakh or equal to 1 lakh called Lakhpati hain.

// Who has less than 1 lakh they are called as Dilwale hain.

// You have to print Count of crorepati, Count of lakhpati, Count of Dilwale 

const readlineSync = require('readline-sync');

let n = parseInt(readlineSync.question("Enter the number of elements: "));
let count_of_carorepati = 0;
let count_of_lakhpati = 0;
let count_of_dilwale = 0;

for (let i = 0; i < n; i++) {
    let n = parseInt(readlineSync.question("Enter the n: "));
    
    if (n >= 10000000) {
        count_of_carorepati += 1;
    } else if (n>= 100000) {
        count_of_lakhpati += 1;
    } else {
        count_of_dilwale += 1;
    }
}
console.log("Number of crorepati: ", count_of_carorepati);
console.log("Number of lakhpati: ", count_of_lakhpati);
console.log("Number of dilwale: ", count_of_dilwale);
