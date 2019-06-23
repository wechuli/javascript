// A method is a function associated with an object, or simple put, a method is a property of an object that is a function.
// You can define methods for an object type by including a method definition in the object constructor function.

function displayCar() {
  let result = ` A Beautiful ${this._year} ${this._make} ${this._model}`;
  console.log(result);
}
//Notice the use of this to refer to the object to which the method belongs

function Car(make, model, year, owner) {
  this._make = make;
  this._model = model;
  this._year = year;
  this._owner = owner;
  this.displayCar = displayCar;
}
