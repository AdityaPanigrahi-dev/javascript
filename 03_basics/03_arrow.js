const user = {
  username: "Aditya",
  age: 21,
  welcomeMessage: function () {
    console.log(`${this.username}, welcome to website`);
    // console.log(this); // return current context
  },
};
// this - refers to current context

// user.welcomeMessage();
// user.username = "Adi";
// user.welcomeMessage();

//console.log(this); // return {}

// function chai() {
//   let username = "Aditya";
//   console.log(this.username); // undefined can be only used in object not in functions
// }
// chai();

// const chai = function () {
//   let username = "Aditya";
//   console.log(this.username);
// };
// chai();

//+++++++++++++++++++++++   arrow function  +++++++++++++++++++++++++++++++
const chai = () => {
  let username = "Adusernameitya";
  console.log(this);
};
//chai();

//const addTwo = (num1, num2) => num1 + num2

const addTwo = (num1, num2) => num1 + num2; // implicit way of arrow function and no need to write return
//explicit when we need return keyword

const add = () => ({ username: "Aditya" });

//console.log(add());

// const myArray = [1, 2, 3, 4, 5, 6];

// myArray.forEach(function () {});
// myArray.forEach(() => {});
