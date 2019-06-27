// A getter is a method that gets the value of a specific property. A setter is a method that sets the value of a specific property. You can define getters and setters on any predefined object or user-defined object that supports the addition of new properties. The syntax for defining getters and setters uses the object literal syntax

class EmptyGetters {
  constructor(name, age) {
    this._name = name;
    this._age = age;
  }
  get name() {
    return this._name;
  }
  set name(name) {
    this._name = name;
  }
  get age() {
    return this._age;
  }
  set age(age) {
    this._age = age;
  }
}

const person = new EmptyGetters("Paul", 26);

console.log(person.name);
person.name = "Wechuli";
console.log(person.name);
console.log(person.age);

// You can remove a non-inherited property by using the delete operator.
// Objects are a reference type. Two distinct objects are never equal, even if they have the same properties. Only comparing the same object reference with itself yields true.
