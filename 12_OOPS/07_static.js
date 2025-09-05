class User {
  constructor(username) {
    this.username = username;
  }

  logMe() {
    console.log(`Username: ${this.username}`);
  }

  static createID() {
    return `123`;
  }
}

class teacher extends User {
  constructor(username, email) {
    super(username);
    this.email = email;
  }
}

const iphone = new teacher("iphone", "iphone@apple.com");
iphone.logMe();
console.log(iphone.createID());

const aditya = new User("aditya");
//console.log(aditya.createID());
