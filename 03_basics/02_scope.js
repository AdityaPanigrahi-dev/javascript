//var c = 300;

if (true) {
  let a = 10;
  const b = 20;
  //c = 30;
}

//console.log(a); // error
//console.log(b); // error
//console.log(c); // 30

function one() {
  const username = "Aditya";

  function two() {
    const website = "youtube";
    console.log(username);
  }
  //console.log(website);

  two();
}
one();

//+++++++++++++++++ Interesting +++++++++++++++++++

console.log(addone(2));
function addone(num) {
  return num + 1;
}

// addtwo(2); error hosting (later concept)
const addtwo = function (num) {
  return num + 1;
};
addtwo(2);
