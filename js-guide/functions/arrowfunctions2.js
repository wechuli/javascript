//Until arrow functions, every new function defined its own this value (a new object in the case of a constructor, undefined in strict mode function calls, the base object if the function is called as an "object method", etc.)

function Person() {
  //The Person() constructor defines 'this' as itself

  this.age = 0;
  setInterval(function growUp() {
    //In nonstrict mode, the growUp() function defines 'this' as the global object, which is different from the 'this' defined by the Person()
    //constructo
    this.age++;
  }, 1000);
}

let p = new Person();

//In ECMAScript 3/5, this issue was fixed by assigning the value in this to a variable that could be closed over.

function Person2() {
  var self = this; // Some choose `that` instead of `self`.
  // Choose one and be consistent.
  self.age = 0;

  setInterval(function growUp() {
    // The callback refers to the `self` variable of which
    // the value is the expected object.
    self.age++;
  }, 1000);
}

//An arrow function does not have its own this; the this value of the enclosing execution context is used. Thus, in the following code, the this within the function that is passed to setInterval has the same value as this in the enclosing function:

function Person3() {
  this.age = 0;

  setInterval(() => {
    this.age++; // |this| properly refers to the person object
  }, 1000);
}

var p = new Person3();
