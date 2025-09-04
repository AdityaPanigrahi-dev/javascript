function SetUsername(username) {
  //complex DB calls
  this.username = username;
  console.log("called");
}

function CreateUser(username, email, password) {
  // this.username = SetUsername(username);
  SetUsername.call(this, username);

  this.email = email;
  this.password = password;
}

const chai = new CreateUser("chai", "panigrahi0412@gmail,com", "123");
console.log(chai);
