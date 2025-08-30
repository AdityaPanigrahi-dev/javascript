const emailId = "panigrahi0412@gmail.com";

if (emailId) {
  console.log("got email id");
}

// falsy values
// false, 0 , -1, BigInt, 0n, "", null, undefined, NaN

//truthy values
// '0', 'false', ' ' , [], {}, function(){}

const array = [];

if (array.length === 0) {
  console.log("empty array");
}

const myObject = {};

if (Object.keys(myObject).length === 0) {
  console.log("obj is empty");
}

// nullish Coalescing Operator (??) : null undefined

// let val1;
// val1 = 5 ?? 10; //5
// val1 = null ?? 10; //10
// val1 = undefined ?? 15; //15
// val1 = null ?? 10 ?? 20   // 10
// console.log(val1);


//terniary operator
// condition ? true : false;


