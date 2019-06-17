// The WeakMap object is a collection of key/value pairs in which the keys are objects only and the values can be arbitrary values. The object references in the keys are held weakly, meaning that they are a target of garbage collection(GC) if there is no other references to the object anymore.

//WeakMap keys are not enumarable

//One use case of WeakMap objects is to store private data for an object or to hide implementation details.

const privates = new WeakMap();

function Public() {
  const me = {
    // Private data goes here
  };
  privates.set(this, me);
}

Public.prototype.method = function() {
  const me = privates.get(this);
  // Do stuff with private data in `me`...
};

module.exports = Public;
