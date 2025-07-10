// Stack memory can be used in primitives data types
// Heap memory can be used in non-primitive data types

// stack memory
let myName="Pranav raj";
let anothername=myName;
anothername='shanu'
console.log(anothername);
console.log(myName);
// stack memormy can provide a copy for that variable,
// so if we change the value of anothername, it will not change the value of myName

// heap memory
// heap memory can be provide a reference for that variable,,it will not provide a copy for that variable
// so if we change the value of userTwo, it will also change the value of userOne
// heap memory is used for objects, arrays, functions, etc.
let userOne={
    email:"pranav@gmail.com",
    mainid:"1235"
}
userTwo=userOne;
userTwo.mainid="5678"
userTwo.email="pranavraj@gmail.com"
console.log(userTwo);

