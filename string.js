const name='abcd'
const age=20

console.log(name +age+"years");
// at the present time these are the bad way for syntax to concatenate strings and variables

console.log(`My name is ${name} and I am ${age} years old.`);
// this is the best way to concatenate strings and variables . these are the modern way to concatenate strings and variables

const gameName = new String('rajput');
console.log(gameName);
// these can help. to acces the key value example as
console.log(gameName[2]); // gives the key value of the string
console.log(gameName.__proto__); // gives the prototype of the string object

