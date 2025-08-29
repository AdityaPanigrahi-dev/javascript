// two ways to declare an object
//1. literal way  2. constructor way

//object literals

const mySym = Symbol("key1");

const jsUser = {
  name: "aditya",
  "full name": "Aditya Anil Panigrahi",
  [mySym]: "mykey1", // delcaring symbol inside object u need []
  // by doing " " - will give string
  age: 21,
  email: "adityapanigrahi@gmail.com",
  isLoggedIn: true,
  lastLoggesIn: ["Monday", "Friday"],
};

// console.log(jsUser.email); // not a good way to access obj elements
// console.log(jsUser["email"]);
// console.log(jsUser["full name"]);

// console.log(jsUser[mySym]);

jsUser.email = "panigrahi0412@gmail.com";
//console.log(jsUser["email"]);
//Object.freeze(jsUser);
jsUser.email = "panigrahi0412@google.com";
//console.log(jsUser);

jsUser.greeting = function () {
  console.log("hello Js user");
};

jsUser.greetingTwo = function () {
  console.log(`hello Js user, ${this.name}`);
};

// console.log(jsUser.greeting());
// console.log(jsUser.greetingTwo());

//singleton - koi bhi constructor se jo obj banta hai
//Object.create

//const tinderUser = new Object();  // singleton obj
const tinderUser = {}; // non singleton obj

tinderUser.id = "123abc";
tinderUser.name = "aditya";
tinderUser.age = 21;

//console.log(tinderUser);

const regularUser = {
  email: "panigrahi012@gmail.com",
  fullname: {
    userFullname: {
      firstname: "aditya",
      middlename: "anil",
      lastname: "panigrahi",
    },
  },
};

//console.log(regularUser.fullname.userFullname.firstname);

const obj1 = { 1: "a", 2: "b", 3: "c" };
const obj2 = { 4: "a", 5: "b", 6: "c" };

//const obj3 = { obj1, obj2 }; // same array problem object ke andar do object
// {{..}, {..}}
//const obj3 = Object.assign({}, obj1, obj2);
//{} - target , rest - source

const obj3 = { ...obj1, ...obj2 };
//console.log(obj3);

const user = [
  {
    id: 1,
    name: "aditya",
  },
  {
    id: 1,
    name: "aditya",
  },
  {
    id: 1,
    name: "aditya",
  },
  {
    id: 1,
    name: "aditya",
  },
];

//console.log(user[1].email);

// console.log(tinderUser);

// console.log(Object.keys(tinderUser)); // returns an array of keys
// console.log(Object.values(tinderUser)); // returns an array of values
// console.log(Object.entries(tinderUser)); // every element inside an object is an array

//console.log(tinderUser.hasOwnProperty("age"));

// ************** Destructuring object and json api ***********************

const myCourse = {
  coursename: "js hindi",
  price: "999",
  courseInstructor: "hitesh",
};

//course.courseInstructor

const { courseInstructor: Instructor } = myCourse;
//console.log(Instructor);

const navbar = ({ company }) => {}; // destructuring

navbar((company = "aditya"));

//JSON API
/*
{
  "name" : "Aditya",
  "coursename" : "Js in Hindi",
  "price" : "free"
}
  */

[{}, {}, {}, {}];
