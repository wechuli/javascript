//Strings

const name1 = "Paul";
//as an object
const name2 = new String("Paul");

console.log(typeof name2);
console.log(typeof name1);

if (name2 == "Paul") {
  console.log("Yes");
} else {
  console.log("NO");
}

//Numbers
const num1 = 5;
const num2 = new Number(5);

//Boolean

const bool1 = true;
const bool2 = new Boolean(true);

//functions

const getSum1 = function(x, y) {
  return x + y;
};
getSum1(3, 4);

const getSum2 = new Function("x", "y", "return x + y");

//oBJECTS
const john1 = { name: "John" };
const john2 = new Object({ name: "John" });

//Arrays
const arr1 = [1, 2, 3, 4];
const arr2 = new Array(1, 2, 3, 4);

//Regular expressions
const rel = /\w+/;
const re2 = new RegExp("w+");
