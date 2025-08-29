// // array

const { all } = require("express/lib/application");

const myArray = [0, 1, 2, 3, 4, 5, 6];

// console.log(myArray[3]);

// // array methods

// myArray.push(7);
// myArray.push(8);
// myArray.push(9);
// myArray.push(10);
// console.log(myArray);

// myArray.pop();
// console.log(myArray);

myArray.unshift(9);
// console.log(myArray);

myArray.shift();
// console.log(myArray);

// console.log(myArray.includes(8));
// console.log(myArray.indexOf(7));

const newArr = myArray.join();
// console.log(newArr);
// console.log(typeof newArr);

// slice and splice

console.log("a", myArray);

const myn1 = myArray.slice(1, 3);
console.log("b", myArray);
console.log(myn1);

const myn2 = myArray.splice(1, 3);
console.log("c", myArray);
console.log(myn2);

const marvel_heros = ["thor", "ironman", "captain", "hulk", "clint"];
const dc_heros = ["superman", "batman", "aquaman", "wonder woman", "flash"];

//marvel_heros.push(dc_heros); // array is andar array agaya
//["-2", "-1" ,"0" ,["1", "2","3"]]

// console.log(marvel_heros);
// console.log(marvel_heros[5]); /// gives dc hero array
// console.log(marvel_heros[5][1]); /// gives second element in the dc hero array

// const all_heros = marvel_heros.concat(dc_heros);
// console.log(all_heros);

const allHeros = [...marvel_heros, ...dc_heros];
//console.log(allHeros);

const anotherArray = [1, 2, 3, 4, [5, 6, 7], 8, [1, 2, 3, [4, 5, 6]]];

const useableArray = anotherArray.flat(Infinity);
// console.log(useableArray); //flatout array

console.log(Array.isArray("Hitesh")); //false
console.log(Array.from("Hitesh")); // returns an array
console.log(Array.from({ name: "Aditya" })); // returns an empty array
// we need to specify what array we need to make, key array, values array etc.

let score1 = 100;
let score2 = 200;
let score3 = 300;

console.log(Array.of(score1, score2, score3));
