// let marks = [97,82,75,64,36];
// console.log(marks);
// console.log(marks.length);
// console.log(typeof marks)
// one more thing about js in when the things will be object

// let heroes = ["modi","gandhi","papa","mummy","dad","biskut wala"]
//     console.log(heroes)
// console.log(heroes.length);

// array indices (plural form of array )
// let arr= [97,82,76,36,67]
//  console.log("arr",arr[0],arr[1],arr[4]=66);

//  let str = "hello!"
//  console.log(str)

// Looping overflow on array
// let heroes = ["shruti","priti","komal","susmita","chauhan"]
// console.log(heroes);

//for loopfor
// const prompt = require('prompt-sync')();
// let n = prompt("Enter your names: ");
// console.log(n);

// let queens = ["Priti","Shruti","Komal","chauhan","Gupta","kushwaha"]
// for (let i = 0; i < queens.length; i++) {
//     console.log(queens[i])
//  }

//For of
// let queens = ["Priti","Shruti","Komal","chauhan","Gupta","kushwaha"]
// for (let queen of queens){
// console.log(queen)
// }

// let cities = ["Mumbai","Delhi","America","Bangalore","British"]
// for(let city of cities){
//     console.log(city.toUpperCase());
// }


// how to print aveage in the marks by the help of loop in array
// let marks = [85, 97, 44, 37, 76, 60]
// let sum = 0;
// for (let mark of marks) {
//   sum += mark;
// }
// let avg = sum / marks.length
// console.log(`Average marks of the class is = ${avg}`);

  // let items = [250,645, 44, 300, 900, 50]
  // let i = 0;
  // for(val of items){
  //   let offer = val / 10;
  //   items[i] = items[i] - offer;
  //   console.log(`value of offer = ${items[i]}`);
  //   i++
  // }
  // let offer = 0;
  // for (let i = 0; i < items.length; i++) {
  //   offer = items[i] / 10;
  //   items[i] -= offer;
  //   }
  
  // console.log(items);


// Array method
/*
push(): add to end
Pop(): delete from end & return
toString(): converts arrays to string*/

// let foodveggies = ["apple","papaya","grapes","litch","tomato"]

// console.log(foodveggies.push("chips"))
//   console.log(foodveggies);

// let foodveggies = ["apple","papaya","grapes","litch","tomato"]
// console.log(foodveggies)
// let deletedvalue = foodveggies.pop();
//   console.log(foodveggies);
//   console.log("deleted",deletedvalue)

// let foodveggies = ["apple","papaya","grapes","litch","tomato"]
// console.log(foodveggies);
// console.log(foodveggies.toString());


// let marks = [97,89,76,50,78,76]
// console.log(marks);
// console.log(marks.toString());


// Concate();    joins multiple arrays  & returns result
// let marvels_heroes = ["thor","spiderman","ironman"]
// let dc_heroes = ["superman","batman"];
// let indian_heroes = ["shaktiman","crish"]
// let heroes = (marvels_heroes.concat(dc_heroes,indian_heroes));
// console.log(heroes);


// Unshift();     method:-add to start
// let marvels = ["ironman", "hulk", "thor"];
// marvels.unshift("antman"); 
// let heroes = marvels;
// console.log(heroes);


//shift():- delet to start
// let marvelHeroes = ["ironman", "hulk", "thor"];
// let value = marvelHeroes.shift();
// console.log("deleted value =",value);


// Slice(); -method:- Return a piece of array
//(startIdx,endIdx)
// let marvels = ["ironman", "hulk", "thor","papa","mummy"];
// console.log(marvels);
// console.log(marvels.slice());

// splice method():- change original array (add,remove,replace);
//(startIdx,delcount,newEle)
// let arr = [1,2,3,4,5,6,7];
// arr.splice(2,2,101,102);
// console.log(arr);


// add element
// let arr = [1,2,3,4,5,6,7];
// arr.splice(2,0,101);
// console.log(arr);

// replace an elements
// let arr = [1,2,3,4,5,6,7];
// arr.splice(3,1,101);
// console.log(arr);

// let arr = [1,2,3,4,5,6,7];
// arr.splice(5);
// console.log(arr);


// creat an array to store companies ->"bloomberg","macrosoft","uber","google",IBM","netflix"
let companies = ["bloomberg","macrosoft","uber","google","IBM","netflix"]
companies.shift();
let cn = companies;
console.log(cn)












