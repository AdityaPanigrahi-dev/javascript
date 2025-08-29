// when comparing two variables make sure there datatypes are same otherwise not always it will give predictable results.
// write clean code and avoid these coding practice.
console.log("1" > 2); // false - here 1 is converted as number

console.log(null > 0); //false
console.log(null == 0); //false
console.log(null >= 0); //true
//the reason is that an equality check == and the comparison < > <= >= work differently
//Comparison convert null to a number , treating it as 0
//that's why (3) null >= 0 is true and (1) null > 0 is false.

console.log(undefined == 0); //false
console.log(undefined > 0); //false
console.log(undefined < 0); // false

// === -> it checks strictly btw variables by also considering there datatypes and not converting..
