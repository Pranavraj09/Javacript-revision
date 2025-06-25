const name ="pranav"
const repoCount = 50

// console.log(name + repoCount + "value");not used today

// console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);
// it can use backtics`` and that it define string interpolation. it is modern way to represent this.

const gameName = new String('pranav-hc')

// console.log(gameName[0]);
// console.log(gameName.__proto__);


// console.log(gameName.length);
// console.log(gameName.toUpperCase());
console.log(gameName.charAt(4));
console.log(gameName.indexOf('v'));

const newString = gameName.substring(0, 4)
console.log(newString);

const anotherString = gameName.slice(-8, 4)
console.log(anotherString);

// trim and replace method

// trim
const newStringOne = "   pranav   "
console.log(newStringOne);
console.log(newStringOne.trim());

// replace
const url = "https://hitesh.com/hitsh%20choudhry"

console.log(url.replace('%20', '-'));
// for check the words can be present in the  string
console.log(url.includes('hitesh'));

console.log(gameName.split('-'));







