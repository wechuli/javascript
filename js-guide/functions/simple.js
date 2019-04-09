// Functions are one of the funcdamental building blocks in JavaScript. A function is a JavaScript procedure - a set of statements that performs a task or calculates a value. To use a function, you must define it somewhere in the scope from which you wish to call it

// function definition/function expression/function statement

function square(number) {
  return number * number;
}

console.log(square(78));

//Primitive parameters (such as a number) are passed to functions by value; the value is passed to the function, but if the function changes the value of the parameter, this change is not reflected globally or in the calling function

//If you pass an object(i.e a non primitive value such as Array or a user-defined object) as a parameter and the function changes the object's properties, that change is visible outside the function

function myFunct(theObject) {
  theObject.make = "Toyota";
}

const mycar = {
  make: "Honda",
  model: "Accord",
  year: 1998
};
let x, y;
x = mycar.make;

myFunct(mycar);
y = mycar.make;

console.log(`x before: ${x}`);
console.log(`y after ${y}`);
console.log(mycar.make);
