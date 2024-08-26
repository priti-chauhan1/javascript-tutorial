const rlsync =require('readline-sync')
let n = parseInt(rlsync.question("Enter the number of element: "))
arr =[]
for (let i = 0; i < n; i++) {
    const element = parseInt(rlsync.question(`Enter the Number${i+1}:`));
    arr.push(element)
    }
    console.log("Entered the arr:",arr);
    let reversed_array =[];
    for (let i = n-1; i >=0; i--) {
        reversed_array.push(arr[i])
        }
        console.log("reversed_array",reversed_array)

        