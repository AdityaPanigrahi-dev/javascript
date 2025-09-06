class User {
  constructor(email, password) {
    (this.email = email), (this.password = password);
  }

  get password() {
    return this._password.toUpperCase();
  }
  set password(value) {
    this._password = value;
  }
}

const aditya = new User("aditya@gmail.com", "123");
console.log(aditya.password);
