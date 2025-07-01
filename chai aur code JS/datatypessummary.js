// there are two types of datatypes
// 1) Primitive data type
// 2) Non-Primitive data type

/*
1) Primitive data type    (call by value)
7 types of  Primitive data type
String,Number,boolean,null,undefined,Symbol,BigInt
*/

const score=100; // Number
const name='John'; // String
const isActive=true; // Boolean
const user=null; // Null
let age; // Undefined



// Javascript is a dynamic language.

const id=Symbol('123456');
// const anotherid=Symbol('123456');
// console.log([anotherid === id]);

// const bigNumber =1020230303948840488n; bigInt


// 2) Non-Primitive data type(reference type)
// Arrays,Objects,functions
const hero =["Ironman","Spiderman","Hulk"];
let myObj ={
    name:"Pranav",
    age:23,
}
const myFunction = function(){
    console.log("Hello World");
}

// how to check the type of data
// then used type of operator
 console.log(typeof hero);
    console.log(typeof myObj);  
    console.log(typeof myFunction);
    console.log(typeof score);
    console.log(typeof name);
    console.log(typeof isActive);
    console.log(typeof user);
    console.log(typeof age);
    console.log(typeof id);
    

    
// typeof operator returns the type of data
// for arrays and objects it returns 'object'
// for functions it returns 'function'
// for primitive data types it returns the type of data
// for null it returns 'object' (this is a bug in javascript)
// for undefined it returns 'undefined'
// for symbols it returns 'symbol'
// for BigInt it returns 'bigint'



