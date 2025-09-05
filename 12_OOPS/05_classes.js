//ES6

class User {
  constructor(username, age, password) {
    this.username = username;
    this.age = age;
    this.password = password;
  }

  encryptPassword() {
    return `${this.password}abc`;
  }

  ChangeUsername() {
    return `${this.username.toUpperCase()}`;
  }
}

const chai = new User("chai", 21, "123");
console.log(chai);
console.log(chai.encryptPassword());
console.log(chai.ChangeUsername());

//Behind the scene
function user(username, age, password) {
  this.username = username;
  this.age = age;
  this.password = password;
}

user.prototype.encryptPassword = function () {
  return `${this.password}abc`;
};

user.prototype.ChangeUsername = function () {
  return `${this.username.toUpperCase()}`;
};

const tea = new user("tea", 21, "123");
console.log(tea);
console.log(tea.encryptPassword());
console.log(tea.ChangeUsername());
