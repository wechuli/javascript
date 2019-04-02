// Boolean
//null
//undefined
//Number
//String
//Symbol - A data type whose instances are unique and immutable
// Object

//parseInt()
//parseFloat()

const fish = ["tuna", , "trout", "tilapia"]; //the 2nd element will be undefined while the last trailing comma is ignored

console.log(fish[1]);
console.log(fish.length);

//an object literal is a list of zero or more pairs of property names and associated values of an object, enclosed in curly braces ({})

let sales = "Toyota";

function carTypes(name) {
  if (name === "Honda") {
    return name;
  } else {
    return `Sorry, we don't sell ${name}.`;
  }
}

const car = {
  myCar: "Saturn",
  getCar: carTypes("Honda"),
  special: sales
};

console.log(car.myCar);
console.log(car.getCar);
console.log(car.special);
console.log(car["myCar"]);

//Additionally, you can use a numeric or string literal for the name of a property or nest an object inside another
//Object property names can be any string, including the empty string. If the property name would not be a valid JavaScript identifier or number, it must be enclosed in quotes.Property names that are not valid JavaScript identifier or number must be enclosed in quotes.

//Enhanced Object literals
const obj = {
  // __proto__
  __proto__: theProtoObj,
  // Shorthand for ‘handler: handler’
  handler,
  // Methods
  toString() {
    // Super calls
    return "d " + super.toString();
  },
  // Computed (dynamic) property names
  ["prop_" + (() => 42)()]: 42
};
