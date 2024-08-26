const readlinesync = require('readline-sync')
let n = parseInt(readlinesync.question("Enter number of string: "))
let names= ''
for (let i = 0; i < n; i++) {
    const element = readlinesync.question(`The ${i+1}th element: `)
     names = names + element + " "
    }
    console.log(names)
    

