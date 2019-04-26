//arguments of a function are maintained in an array-like object
// Using the arguments object, you can call a function with more arguments than it is formally declared to accept. This is often useful if you don't know in advance how many arguments will be passed to the function

function myConcat(separator) {
  let result = "";
  let i;
  // iterate through the arguments
  for (i = 1; i < arguments.length; i++) {
    if (i != arguments.length) {
      result += arguments[i] + separator;
    } else {
      result += arguments[i];
    }
  }
  return result;
}

console.log(myConcat(", ", "red", "orange", "blue"));
