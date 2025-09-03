//fetch("https://somithing.com").then().catch().finally();

// const promiseOne = new Promise(function (resolve, reject) {
//   // do an sync task
//   // db calls, cryptography, network

//   setTimeout(() => {
//     console.log("Async tasks is completed");
//     resolve();
//   }, 2000);
// });

// promiseOne.then(() => {
//   console.log("promise consumed");
// });

// new Promise((resolve, reject) => {
//   setTimeout(() => {
//     console.log("Async task 2");
//     resolve();
//   }, 1000);
// }).then(() => {
//   console.log("Async 2 resolved");
// });

// const promiseThree = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve({ username: "aditya", email: "panigrahi0412@gmail.com" });
//   }, 1000);
// });

// promiseThree.then((user) => {
//   console.log(user);
// });

// const promiseFour = new Promise((resolve, reject) => {
//   let error = true;
//   if (!error) {
//     resolve({ username: "aditya", password: "123#123" });
//   } else {
//     reject("ERROR! Something went wrong");
//   }
// });

// const username = promiseFour
//   .then((user) => {
//     console.log(user);
//     return user.username;
//   })
//   .then((username) => {
//     console.log(username);
//   })
//   .catch((error) => {
//     console.log(error);
//   })
//   .finally(() => {
//     console.log("The promise is either resolved or rejected");
//   });

const promiseFive = new Promise((resolve, reject) => {
  setTimeout(() => {
    let error = true;
    if (!error) {
      resolve({ username: "JS", password: "123#123" });
    } else {
      reject("ERROR! JS went wrong");
    }
  }, 1000);
});

async function consumePromiseFive() {
  try {
    const response = await promiseFive;
    console.log(response);
  } catch (error) {
    console.log(error);
  }
}

consumePromiseFive();

// async function getAllUsers() {
//   try {
//     const response = await fetch("");
//     const date = await response.json();
//     console.log(data);
//   } catch (error) {
//     console.log("E: ", error);
//   }
// }

// getAllUsers()

fetch("https://api.github.com/users/adityapanigrahi")
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.log(error);
  });
