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
