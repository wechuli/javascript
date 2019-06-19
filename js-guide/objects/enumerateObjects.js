// for...in
// this method traverses all enumarable properties of an object and its prototype chain

//Object.keys(o)
//This method returns an array with all the own(not in the prototype chain) enumarable properties names('keys') of an object o.

//Object.getOwnPropertyNames(o)
//This method returns an array containing all own properties' names(enumarable or not) of an object o.

const Person = {
  name: "Wechuli",
  age: 27,
  education: "Bachelor",
  title: "Software Developer",
  interests: ["software development", "artifical intelligence", "ai"]
};

console.log(Object.getOwnPropertyNames(Person));
console.log(Object.keys(Person));

function loopObject(object) {
  for (let prop in object) {
    console.log(prop);
    console.log(object[prop]);
  }
}

loopObject(Person);
