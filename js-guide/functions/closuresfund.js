// Closures are one of the most powerful features of JavaScript.JavaScript allowa for the nesting of fucntions and grants the inner function full access to all the variables and functions defined inside the outer function.However, the outer function does not have access to the variables and functions defined inside the inner function.This provides a sort of encapsulation for the variables of the inner function. Also, since the inner function has access to the scope of the outer function, the variables and functions defined in the outer function will live longer than the duartion of the outer function execution, if the inner function manages to survice beyond the life of the ouuter function. A closure is created when the inner function is somehow made available to any scope outside the outer function

const pet = function(name) {
  const getName = function() {
    return name;
  };
  return getName;
};

console.log(pet("Maxi")());
