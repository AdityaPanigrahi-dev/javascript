let score = "99abc"; // score = null; - > print score - > 0

console.log(typeof score);
console.log(typeof score);

let valueInNumber = Number(score);
console.log(typeof valueInNumber); //number
console.log(valueInNumber); //Nan

// "33" => 33
// "33abc" => NaN
// true => 1; false => 0

let isLoggedIn = 1;

let booleanIsLoggedIn = Boolean(isLoggedIn);
console.log(booleanIsLoggedIn);

// 1 - true;
// 0 - false;
// "" - false;
// "hitesh" - true;

let someNumber = 22;
let stringNumber = String(someNumber);
console.log(stringNumber);
console.log(typeof stringNumber); // string

// ######### Operations ###########
let value = 3;
let negValue = -value;
console.log(negValue); //-3

let str1 = "Hello";
let str2 = " Aditya";
let str3 = str1 + str2;
console.log(str3); // Hello Aditya

console.log("1" + 2); // 12
console.log(1 + "2"); //12
console.log("1" + "2"); //12
console.log("1" + 2 + 2); //122
console.log(1 + 2 + "2"); // 32

console.log(+true); // 1
console.log(+""); // 0

let gameCounter = 100;
gameCounter++;
console.log(gameCounter);


