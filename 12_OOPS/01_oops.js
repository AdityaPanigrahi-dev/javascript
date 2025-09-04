const user = {
  username: "Aditya",
  loginCount: 5,
  signedIn: true,

  getUserdetails: function () {
    //console.log("got user details in db");
    // console.log(`username : ${this.username}`);
    console.log(this); // current context
  },
};
console.log(user.username);
// console.log(user.getUserdetails());
// console.log(this); // {}

// constructor function

// const promiseOne = new Promise()
// const date = new Date()

function User(username, loginCount, signedIn) {
  this.username = username;
  this.loginCount = loginCount;
  this.signedIn = signedIn;

  this.greeting = function () {
    console.log(`welcome ${this.username}`);
  };
  // return this;
}

const UserOne = new User("Aditya", 8, true);
console.log(UserOne);

console.log(UserOne.constructor);

const UserTwo = new User("Adi", 8, true);
console.log(UserTwo);
