
    const rlsync = require('readline-sync');
let n = parseInt(rlsync.question("Enter the number of elements: "));
let arr = [];
for (let i = 0; i < n; i++) {
    arr[i] = rlsync.question(`The ${i}th element is : `)
}
console.log("Entered array:", arr);
let count = 0;
for (let i = 0; i < n; i++) {
    if (arr[i]==arr[(n-1)-i]) {
        count+=1
    }
}if(count===n){
    console.log("This is a palindrome")
}else{
   console.log("This is not a palindrome")
}
