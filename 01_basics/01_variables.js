const accountId = 12345;
let accountEmail = "aditya12@gmail.com";
var accountPassword = "12345";
accountCity = "Bhubaneswar";

//accountId = 2;  // not allowed

console.log(accountId);

accountEmail = "aditya21@gmail.com";
accountPassword = "212121";
accountCity = "Mumbai";
let accountState;

/* 
Prefer not to use var because issue in block scope and functional scope.
 */

console.table([
  accountId,
  accountEmail,
  accountPassword,
  accountCity,
  accountState,
]);

"use strict"; // treat all js code as newer version

// alert(3 + 3); // we are using nodejs not browser

// code readablity should be high

let name = "aditya"
let age = 18
let isLoggedIn = false

//number => 2 to power 53
//bigint
//string => ""
//boolean => true/false
//null => standalone value
//undefined => not value assigned
//symbol => unique

// Object

console.log(typeof "aditya") // string
console.log(typeof age); //  number
// typeof null = object
// typeof undefined = undefined