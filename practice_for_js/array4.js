const rlsync = require('readline-sync')
let n = parseInt(rlsync.question("Enter the number of elements: "))
arr=[]
for (let i = 0; i < n; i++) {
    const element = parseInt(rlsync.question(`Enter the number ${i+1}: `));
    arr.push(element)
}
 console.log(arr)
let sum =0;
for (let i = 0; i < n; i++) {
    sum=sum+arr[i]
    }
    let avg=sum/n;
    console.log(avg)
