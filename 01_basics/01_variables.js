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

