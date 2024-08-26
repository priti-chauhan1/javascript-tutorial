const rlsync =require('readline-sync')
let n =parseInt(rlsync.question(`Enter the number:`))
for (let i =1; i <= n; i++) {
    if (i% 2 ===0) {
       console.log(i)  
}
    }
    
