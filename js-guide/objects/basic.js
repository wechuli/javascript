//JavaScript is designed on a simple object-based paradigm. An object is a collection of properties and a property is an association between a name(or key) and a value.

const myCar = new Object();
myCar.make = "Ford";
myCar.model = "Mustang";
myCar.year = 1969;

console.log(myCar);
//unassigned properties of an object are undefined(an not null)

//An object property name can be any valid JavaScript string, or anything that can be converted to a string, including the empty string. However, any property name that is not a valid JavaScript identifier (for example, a property name that has a space or a hyphen, or that starts with a number) can only be accessed using the square bracket notation. This notation is also very useful when property names are to be dynamically determined (when the property name is not determined until runtime).

const myObj = new Object();
let str = "myString";
let rand = Math.random();
const obj = new Object();

myObj.type = "Dot Syntax";
myObj["date created"] = "String with space";
myObj[str] = "String value";
myObj[rand] = "Random Number";
myObj[obj] = "Object";
myObj[""] = "Even an empty string";

console.log(myObj);

//all keys in the square bracket notation are converted to string unless they're Symbols

for (let props in myObj) {
  console.log(props);
}

function showProps(obj, objName) {
  let result = ``;
  for (let item in obj) {
    //obj.hasOwnProperty() is used to filter out properties from the object's prototype chain
    if (obj.hasOwnProperty(item)) {
      result += `${objName}.${item} = ${obj[item]}\n`;
    }
  }
  return result;
}

console.log(showProps(myObj, "myObj"));
