// ECMAScript added two new kinds of parameters: default parameters and rest parameters

//Default parameters

function multiply(a, b = 1) {
  return a * b;
}

console.log(multiply(5));
console.log(multiply(5, 6));
