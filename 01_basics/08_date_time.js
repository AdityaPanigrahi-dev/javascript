// dates

let myDate = new Date();
// console.log(typeof myDate);
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toISOString());
// console.log(myDate.toJSON());
// console.log(myDate.toLocaleDateString());
// console.log(myDate.toLocaleString());
// console.log(myDate.toLocaleTimeString());
// console.log(myDate.toTimeString());

// let myCustomDate = new Date(2025, 0, 25, 5, 3, 30);
// console.log(myCustomDate);
// console.log(myCustomDate.toString());
// console.log(myCustomDate.toLocaleString());

//let myCustomDate = new Date("2025-01-14");
let myCustomDate = new Date("01-01-2026");
//console.log(myCustomDate.toLocaleString());

// ******** time stamps ************

let myTimeStamp = Date.now();
console.log(myTimeStamp); // in milliseconds
console.log(myCustomDate.getTime()); // same in miliseconds but with our date
console.log(Math.floor(Date.now() / 1000)); // in seconds
// if we dont use floor function it will have decimal value

// console.log(" ");

let newDate = new Date("08-29-2025");
// console.log(newDate);
// console.log(newDate.getMilliseconds());
// console.log(newDate.getSeconds());
// console.log(newDate.getTime());
// console.log(newDate.getDate());
// console.log(newDate.getDay());
// console.log(newDate.getFullYear());
// console.log(newDate.getHours());
// console.log(newDate.getMonth());

// most imp method
newDate.toLocaleString("default", {
  weekday: "long",
}); // we define object inside it
