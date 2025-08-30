// for
// const array = [1, 2, 3, 4, 5, 6, 7];

// for (let index = 0; index < 10; index++) {
//   const element = index;
//   console.log(element);
// }

// for (let i = 0; i <= 10; i++) {
//   console.log(` outer loop value: ${i}`);
//   for (let j = 0; j <= 10; j++) {
//     console.log(` inner loop value: ${j}`);
//   }
//   console.log(" ");
// }

const myArray = [1, 2, 3, 4, 5, 6, 7];

for (let index = 0; index < myArray.length; index++) {
  const element = myArray[index];
  //console.log(element);
}

// break and continue

for (let i = 0; i < 11; i++) {
  const element = i;
  if (element === 5) {
    console.log("5 detected");
    break; // print till 4 and then the message 5 detected out of loop
  }
  console.log(i);
}

for (let i = 0; i < 11; i++) {
  const element = i;
  if (element === 5) {
    console.log("5 detected"); // print all except the number 5 but the console.log()
    continue;
  }
  console.log(i);
}
