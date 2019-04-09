// While the function declaration above is syntactically a statement, functions can also be created by a function expression. Such a function can be anonymous; it does not have to have a name

const square = function(square) {
  return square * square;
};
console.log(square(5));

// However, a name can be provided with a function expression and can be used inside the function to refer to itself, or in a debugger to identify the function in stack traces:

var factorial = function fac(n) {
  return n < 2 ? 1 : n * fac(n - 1);
};

console.log(factorial(9));


//Function expressions are convenient when passing a function as an argument to another function.

// In javascript, a function can be defined based on a condition. 

// A method is a function that is a property of an object



