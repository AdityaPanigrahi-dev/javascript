class User {
  constructor(username) {
    this.username = username;
  }

  logMe() {
    console.log(`USERNAME : ${this.username}`);
  }
}

class Teacher extends User {
  constructor(username, email, password) {
    super(username);
    this.email = email;
    this.password = password;
  }

  addCourse() {
    console.log(`a new course was added by ${this.username}`);
  }
}

class Admin extends User {
  constructor(username, email, password) {
    super(username);
    this.email = email;
    this.password = password;
  }
}

class Student extends User {
  constructor(username, email, password) {
    super(username);
    this.email = email;
    this.password = password;
  }
}

const chai = new Teacher("chai", "panigrahi@gmail.com", "123");
chai.addCourse()
const masalachai = new User("masalachai")

console.log();
