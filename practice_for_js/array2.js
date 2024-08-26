// Count of the elements that is repeated in a list.

// var char_list = ["a", "n", "t", "a", "a", "t", "n", "n", "a", "x", "u", "g", "a", "x", "a"]
const readlinesync = require('readline-sync')
let n = parseInt(realinesync("enter the number:"))
arr=[]
for(var i = 0;i<=n;i++){
   if(!arr.includes(i)){
       uniques.push(i)
   }
}
console.log(uniques);
 
for(var j of uniques){
   count=0
   for(var k of char_list){
       if (j === k){
           count+=1
       }
   }
   console.log(j,count," times");
}