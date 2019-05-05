//The typeof operator returns a string indicating the type of the unevaluated operand. operand is the string, variable, keyword, or object for which the type is to be returned. The parentheses are optional.

var myFun = new Function("5 + 2");
var shape = "round";
var size = 1;
var foo = ["Apple", "Mango", "Orange"];
var today = new Date();

console.log(typeof myFun); // returns "function"
console.log(typeof shape); // returns "string"
console.log(typeof size); // returns "number"
console.log(typeof foo); // returns "object"
console.log(typeof today); // returns "object"
console.log(typeof doesntExist); // returns "undefined"
console.log(typeof true); // returns 'boolean'
console.log(typeof null); //returns 'object
