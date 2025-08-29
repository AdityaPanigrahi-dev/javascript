const score = 400;
// console.log(score);
// const balance = new Number(1000);
// console.log(balance);

// console.log(balance.toString());
// console.log(balance.toString().length);

// console.log(balance.toFixed(2)); //decimal places always keep two when ecommerce website.

const newNumber = 1234.55678;
// console.log(newNumber.toPrecision(3));
// console.log(newNumber.toPrecision(4));
// console.log(newNumber.toPrecision(5));
// console.log(newNumber.toPrecision(6));

// const hundreds = 10000000;
// console.log(hundreds.toLocaleString()); // now its bydefault according to indian standards but when u want to make it us stds then
// console.log(hundreds.toLocaleString("en-US")); // for india en-IN

// ++++++++++++++++ Maths ++++++++++++++++++++++++

// console.log(Math); // its an object

// console.log(Math.abs(-4)); // absolute value minus becomes positive  4
// console.log(Math.round(4.6)); // it round off's the number 5
// console.log(Math.ceil(4.2)); // ceiling function  5
// console.log(Math.floor(4.9)); // floor functions  4

// console.log(Math.min(9, 2, 2, 4, 5, 8, 4, 5, 1)); //1
// console.log(Math.max(9, 2, 2, 4, 5, 8, 4, 5, 1)); //9

//most used math method

// console.log(Math.random()); // value will be always between 0 and 1
// console.log(Math.random() * 10); // it shifts a place but we may still get 0
// console.log(Math.random() * 10 + 1); // so we add +1 to it to start from 1
// console.log(Math.random() * 10 + 1);

const min = 10;
const max = 20;

console.log(Math.random() * (max - min + 1)); //gets between 1 to 11
console.log(Math.floor(Math.random() * (max - min + 1))); // gets floor value between 1 to 11
console.log(Math.floor(Math.random() * (max - min + 1) + min)); // gets floor between 10 to 20 because the max is 20 and min is 10

// remeber this - (max - min + 1) + min
