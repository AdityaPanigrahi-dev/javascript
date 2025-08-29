// primitive
// 7 types :  string, null, number, boolean, undefined, symbol, BigInt

const score = 100; //number
const percentage = 97.9; //number

const isLoggedIn = false; //boolean
const outsideTemp = null; //null // object
const name = "Aditya"; //string
let emailId; //  undefined u can also assign undefined as value to it..

const id = Symbol("123");
const anotherid = Symbol("123");

console.log(id === anotherId); // false

const bigNumber = 1832562783567n; // BigInt

// nonprimitive type or reference type
// Array, Objects, Functions,

const names = ["Aditya", "Ashutosh", "Jyotiraditya"];

let myObj = {
  name: "Aditya",
  age: 21,
};

const myFunction = function () {
  console.log("Hello");
};
