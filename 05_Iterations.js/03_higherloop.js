// for of
// array specific loop
//[" ", " ", " "]
//[({}, {}, {})];

const myArray = [1, 2, 3, 4, 5];

for (const num of myArray) {
  console.log(num);
}

const greetings = "Hello Good afternoon";

for (const greet of greetings) {
  console.log(`Each char is ${greet}`);
}

// maps- objects and holds key value pair

const maps = new Map();
maps.set("IN", "India");
maps.set("US", "United States");
//maps.set("US", "United States");  // maps are known to store unique values
console.log(maps);

// using for of loop

for (const key of maps) {
  console.log(key);
}

for (const [key, value] of maps) {
  console.log(key, ":-", value);
}

const myObject = {
  name: "aditya",
  age: 21,
};

// objects are not iterable in for of

// for in loop
// for (const key in object) {
//     if (Object.prototype.hasOwnProperty.call(object, key)) {
//         const element = object[key];

//     }
// }

for (const key in myObject) {
  console.log(`${key} is ${myObject[key]}`);
}

const progamming = ["js", "py", "cpp", "c", "java"];

// for (const key in progamming) {
//   console.log(key);
// }
// only of key for array 0 1 2 3 4

for (const key in progamming) {
  console.log(progamming[key]);
}
