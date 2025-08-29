//function
// jitna bhi code usko ek package mein band kar diya hai aur uska copy hum jahan chahe jaise chahe use kar sakte hai

// console.log("a");
// console.log("d");
// console.log("i");

function sayMyName() {
  console.log("a");
  console.log("d");
  console.log("i");
}

// sayMyName; //reference
// sayMyName(); // function ka execution

function addTwoNumber(number1, number2) {
  //parameters
  console.log(number1 + number2);
}
//const result = addTwoNumber(3, 5); //8
//console.log(result); // underfined
// addTwoNumber(); //NaN
// addTwoNumber(1, 2);  //arguments
// addTwoNumber("1", 3);
// addTwoNumber("a", 4);
// addTwoNumber(null, 4);

function addTwoNumber1(number1, number2) {
  return number1 + number2;
}
const result1 = addTwoNumber1(3, 5); //8
console.log(result1);

function logInUserMessage(username = "Aditya") {
  // default value
  if (username === undefined) {
    // (!username)
    console.log("Please enter an username");
    return;
  }
  return `${username} just Logged In`;
}

console.log(logInUserMessage()); // returns undefined then rest of string.
console.log(logInUserMessage("Aditya"));

function caluclateCartPrice(...num1) {
  // rest operator
  // it is use for spread operator but called according to use case
  return num1;
}

console.log(caluclateCartPrice(200, 400, 600)); // returns array

const user = {
  username: "aditya",
  age: 21,
};

function handleObject(anyobject) {
  console.log(`username is ${anyobject.username} and age is ${anyobject.age}`);
}

//console.log(handleObject(user));
handleObject({
  username: "Adi",
  age: 21,
});

const myNewArray = [10, 20, 30, 40, 50];

function returnSecondValue(getArray) {
  return getArray[1];
}

console.log(returnSecondValue(myNewArray));
