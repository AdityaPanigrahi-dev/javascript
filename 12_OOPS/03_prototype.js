// let myName = "hitesh     ";

// console.log(myName.length);
// //console.log(myName.truelength);

let myHeros = ["thor", "spiderman"];

let heroPower = {
  thor: "hammer",
  spiderman: "sling",

  getSipderPower: function () {
    console.log(`spidy power is ${this.spiderman}`);
  },
};

Object.prototype.aditya = function () {
  console.log(`aditya is present in all objects`);
};

//heroPower.aditya();
//myHeros.aditya();

Array.prototype.HeyAditya = function () {
  console.log(`aditya's power is he is now more determined that he ever was`);
};

myHeros.HeyAditya();
//heroPower.HeyAditya();

//inheritance

const teacher = {
  makeVideo: true,
};
const TeachingSupport = {
  isAvailable: false,
};

const TASupport = {
  makeAssignment: "js assignment",
  fulltime: true,
  __proto__: TeachingSupport,
};

// Teacher.__proto__ = user // user obj baad mein bana lena

//modern syntax

Object.setPrototypeOf(TeachingSupport, teacher);

let anotherUsername = "chai      ";

String.prototype.truelength = function () {
  console.log(`${this}`);
  //  console.log(`${this.name}`);  // undefined
  console.log(`true length is : ${this.trim().length}`);
};

anotherUsername.truelength();
"aditya".truelength();
"IceTea".truelength();
