// All objects in JavaScript inherit from at least one other object. The object being inherited from is known as the prototype, and the inherited properties can be found in the prorotype object of the constructor

function Car(make, model, year) {
  this._make = make;
  this._model = model;
  this._year = year;
}

// You can add a property to a previously defined object type by using the prototype property. this defines a property that is shared by all objects of the specified type, rather than by just one instance of the object.

Car.prototype.color = null;
