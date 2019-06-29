Prototypes are the mechanism by which JavaScript objects inherit features from one another. JavaScript is often described as a prototype-based language - to provide inheritence, objects can have a prototype object, which acts as a template object that it inherits methods and properties from. An object's prototype object may also have a prototype object object, which it inherits methods and properties from and so on. This is often referred to as a prototype chain, and explains why different objects has properties and methods defined on other objects available to them.

The inherited properties and methods are defined on the prototype property on the Object's contructor functions, not the object instances themselves

In JavaScript, a link is made between the object instance and its prototype(its __proto__ property, which is derived from the prototype property on the constructor) and the properties and methods are found by walking up the chain of prototypes.

The methods and properties are not copied from one object to another in the prototype chain - they are accessed by walking up the chain.

The inherited properties and methods are the ones defined on the prototype property(you could callit a sub-namesapce) - that is, the ones that begin with Object.prototype. and not the ones that begin with just Object. The prototype property's calue is an object which is basically a bucket for storing properties and methods that we want to be inherited by objects further down the prototype chain.

By default, a constructor's prototype always starts empty. The prototype is a property containing an object on which you define members that you want to be inherited.


You will rarely see properties defined on the prototype property, because they are not very flexible whendeined like this. In fact, a fairly common pattern for more object definitions is to define the properties inside the constructor, and the methods on the prototype. This makes the code easier to read as the constructor only contains the property definitions, and the methods are split off into separate blocks.