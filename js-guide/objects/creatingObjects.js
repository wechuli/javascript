// JavaScript has a number of predefined objects. In addition, you can create your own objects. You can create an object using an object initializer. Alternatively, you can first create a constructor function and then instantiate an object invoking that function in conjuction with the new operator.

//Object initializer

const Cat = {
  name: "Rex",
  age: 2,
  color: "grey"
};

console.log(Cat);

// Object initializers are expressions, and each object initializer results in a new Object being created whenever the statement in which it appears is executed. Identical object initializers create distinct objects that will not compare to each other as equal. Objects are created as if a call to new Object() were made: that is, objects made from object literal expressions are instances of Object