const rlsync =require('readline-sync')
let n = parseInt(rlsync.question("Enter the number of elements: "))
arr = []
for (let i = 0; i < n; i++) {
    const element = parseInt(rlsync.question("Enter the number: "));
    arr.push(element)
}
console.log(arr)
let max = arr[0]
for (let i = 0; i < n; i++) {
    if (arr[i]>max) {
max = arr[i]
    }
}
console.log(max)