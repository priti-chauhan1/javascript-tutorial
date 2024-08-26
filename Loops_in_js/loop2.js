//for loop

// Infinite loop: A loop that never ends.
// for (let i = 1; i <= 10; i++) {
//     console.log("i = ",i)

// }

// while loop
// let i = 1;
// while(i<=10){
// console.log("Priti chauhan is a girl who is very cute in the world")
// i++
// }


// Do while loop
// let i = 20;
// do {
//   console.log("Priti chauhan is cute");
//   i++;
// } while (i <= 10);


// For of loops
// let str = "javascript"
// let size = 0;
// for (let i of str) {
//    console.log("i =",i)
//    size++;
//     }
//     console.log("string size = ",size)

//For in loops
// let student = {
//     name:"Priti chauhan",
//     age: 20,
//     cgpa: 7.5,
//     isPass:true
// }
// for (let key in student) {
//    console.log("key =",key,"value =",student[key]);
// }

//1.Print all Even numbers from 0 to 100.
// for (let num = 0;num <= 100; num++) {
//     if (num % 2 === 0) {
//         console.log("num = ",num)
//        console.log(typeof num)
//     }
// }
// for (let num = 0;num <= 100; num++) {
//     if (num % 2 !== 0) {
//         console.log("num = ",num)
//        console.log(typeof num)
//     }
// }
// const readlineSync= require('readline-sync')
// let gameNum = 25;
// let userNum = parseInt(readlineSync.question("Guess the game number: "));
// console.log(userNum);
// while(userNum !== gameNum){
//     userNum = parseInt(readlineSync.question("you Entered wrong number.Guess again: "));
// } 
// // game play karenge in this while loop}
// console.log("congractulations, you Entered the correct value")


/*const prompt = require('prompt-sync')();
let gameNum = 25;
let userNum = parseInt(prompt("Guess the game number: "), 10);
while (userNum != gameNum) {
    userNum = parseInt(prompt("You entered the wrong number. Guess again: "), 10);
}
console.log("Congratulations, you entered the correct value!");*/

// string method in JS
// let str = "Priti\tchauhan"
// console.log(str)
// console.log(str.toUpperCase());

// let str = "PRITI\tCHAUHAN"
// console.log(str)
// console.log(str.toLowerCase());

// let str = "                   Priti chauhan   js           "
// console.log(str)
// console.log(str.trim());
// / let str1= "Priti chauhan"
// let str2 = " Apna college"
// let result = ("I m learning coding from shraddha khapra's channel "+str1+str2);
// console.log(result);


//slice method
//only it will print before one less time
// let str = "123456789"
//  console.log(str)
// console.log(str.slice(0,6));

// concat method
// let str1= "Priti chauhan"
// let str2 = " Apna college"
// let result = (str1.concat(str2));
// console.log(result);


//replace method
// let str= "hello"
// console.log(str.replaceAll("lo","p"));

// character At method

// let str = "ILoveJavascript"
//  str = str.replace("I","S")
// console.log(str);

// const prompt = require('prompt-sync')();
// let fullname = prompt(("Enter your full name without spaces: "));
// console.log(fullname);
// let username = "@"+fullname+fullname.length;
// console.log(username);
