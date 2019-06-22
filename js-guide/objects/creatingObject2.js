// using constructor functions

//1. Define the object type by writing constructor function.
//2. create an ionctance of the object with new

function Car(make, model, year) {
  this._make = make;
  this._model = model;
  this._year = year;
}

const myCar = new Car("Subaru", "Impreza", 2012);
const kensCar = new Car("Nissan", "300ZX", 2005);
const mercyCar = new Car("Merceded", "S-series", 2015);

console.log(typeof Car);
console.log(typeof myCar);
console.log(myCar);
console.log(mercyCar);

//An object can have a property that is itself another object

function Person(name, age, sex, owner) {
  this._name = name;
  this._age = age;
  this._sex = sex;
  this._owner = owner;
}

const paul = new Person("Paul", 26, "M", myCar);
console.log(paul);
