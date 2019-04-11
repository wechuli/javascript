// functions must be in scope when they are called and can be hoisted
// hoisting only works with function decalaration and not function expression

//recusrsion

function factorial(n) {
  if (n === 1 || n === 0) {
    return 1;
  }
  return n * factorial(n - 1);
}

console.log(factorial(3));
console.log(factorial(5));

// Functions are, themselves objects and these objects in turn have methods