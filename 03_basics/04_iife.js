// Immediately Invoked Function Expression ( IIFE )
// ------> global scope ke varibales/polutation se problem hoti hai kayi bar uss problem ko resolve karne ke liye hum IIFE ka sahara lete hai
// function chai() {
//   console.log(`DB connected`);
// }
// chai();

(function chai() {
  //named IIFE
  console.log(`DB connected`);
})();

//()(); // first is for function defination and second for funtion execution
// use semicolon to end the function
(() => {
  //unnamed IIFE
  console.log(`DB Connected`);
})();

((name) => {
  console.log(`DB Connected with name, ${name}`);
})("Aditya");

