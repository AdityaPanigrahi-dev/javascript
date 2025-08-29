const name = "Aditya";
const repoCount = 12;

console.log(name + repoCount + " Value");

// `` - backticks
// ${} - placeholders

console.log(`hello my name is ${name} and my repo count is ${repoCount}.`);

const myName = new String("Aditya");

console.log(myName[0]);
console.log(myName.length);
console.log(myName.__proto__);
console.log(myName.toUpperCase());
console.log(myName.charAt(3));
console.log(myName.indexOf("i"));

const newStringOne = myName.substring(0, 5); // it goes till n-1.
console.log(newStringOne);

const newStringTwo = myName.slice(-5, 3); // u can also add -ve value in it
// it will start from reverse if first one is negative.
console.log(newStringTwo);

const newName = "Aditya-panigrahi-04";
const newNameString = newName.trim();
console.log(newName);
console.log(newNameString);

const url = "https://aditya.com/aditya%04panigrahi";
console.log(url.replace("%04", "_"));
console.log(url.includes("aditya"));

console.log(newName.split("-"));

const Name = "Aditya";
const greeting = `Hello, ${Name}`;
console.log(greeting); // "Hello, Aditya"

const one = "Hello, ";
const two = "how are you?";
const joined = `${one}${two}`;
console.log(joined); // "Hello, how are you?"

const song = "Like a prayer";
const score = 10;
const highestScore = 10;
const output = `I like the song ${song}. I gave it a score of ${
  (score / highestScore) * 100
}%.`;
console.log(output); // "I like the song Fight the Youth. I gave it a score of 90%."

const tagline = "MDN - Resources for developers, by developers";
const firstOccurrence = tagline.indexOf("developers");
const secondOccurrence = tagline.indexOf("developers", firstOccurrence + 1);

console.log(firstOccurrence); // 20
console.log(secondOccurrence); // 35
