// const progamming = ["js", "py", "cpp", "c", "java"];

// const Values = progamming.forEach((item) => {
//   // console.log(item);
//   return item;
// });

// console.log(Values);

const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const value = myNums.filter((num) => {
//   return num > 4;
// });

// console.log(value);

// const newNums = [];

// myNums.forEach((num) => {
//   if (num > 4) {
//     newNums.push(num);
//   }
// });

// console.log(newNums);

// const newNums = myNums.map((num) => {
//   return num + 10;
// });

// ******* chaining **********

// const newNums = myNums
//   .map((num) => num * 10)
//   .map((num) => num + 1)
//   .filter((num) => num > 41);

// console.log(newNums);

// reduce

const newNums = myNums.reduce((acc, curr) => {
  console.log(` acc value- ${acc} and curr value - ${curr}`);
  return acc + curr;
}, 0);

console.log(newNums);
