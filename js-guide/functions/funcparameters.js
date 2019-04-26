// ECMAScript added two new kinds of parameters: default parameters and rest parameters

//Default parameters

function multiply(a, b = 1) {
  return a * b;
}

console.log(multiply(5));
console.log(multiply(5, 6));

//REST parameters
//The rest parameter syntax allows us to represent an indefinite number of arguments as an array

function multiplyrest(multiplier, ...theArgs) {
  return theArgs.map(x => multiplier * x);
}

console.log(multiplyrest(2, 1, 2, 3, 4, 5, 6, 7, 8, 9));
