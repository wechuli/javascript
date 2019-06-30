The `call()` function allows you to call a function defined somewhere else, but in the current context. The first parameter specidies the value of `this` that you want to use when running the function, and the other parameters are those that should be passed to the function when it is invoked.

Note that if the constructor you are inheriting from doesn't take its property values from parameters, you don't need to specify them as additional arguments in `call()`

```JavaScript

function Brick(){
    this.width = 10;
    this.heigth = 20;
}
function BlueGlassBrick(){
    Brick.call(this);
    this.opacity = 0.5;
    this.color = 'blue';
}
```

All is good so far, but we have a problem. We have defined a new constructor and it has a prototype property, which by default just contains a reference to the constructor function itself. It does not contain the methods of the Person constructor's `prototype` property.

## Object member summary

To summarize, you've basically got three types of property/method to worry about:

1. Those defined inside a constructor function that are given to object instances. These are fairly easy to spot — in your own custom code, they are the members defined inside a constructor using the this.x = x type lines; in built in browser code, they are the members only available to object instances (usually created by calling a constructor using the new keyword, e.g. var myInstance = new myConstructor()).

2. Those defined directly on the constructor themselves, that are available only on the constructor. These are commonly only available on built-in browser objects, and are recognized by being chained directly onto a constructor, not an instance. For example, Object.keys().

3. Those defined on a constructor's prototype, which are inherited by all instances and inheriting object classes. These include any member defined on a Constructor's prototype property, e.g. myConstructor.prototype.x().

## Getters and Setters

There may be times when we want to change the values of an attribute in the classes we create or we don't know what the final value of an attribute will be. We can handle such situations with getters and setters.

Getters and setters work in pairs. A getter returns the current value of the variable and its corresponing setter changes the value of the variable to the one it defines.

## When to Use Inheritence in JavaScript

It is a waste of time to use objects and inheritence just for the sake of it when you don't need them. But as your code bases get larger, you are more likely to find a need for it. If you find yourself starting to create a number of objects that have similar features, then creating a generic object type to contain all the shared functionality and inheriting those features in more specialized object types can be convenient and useful.

When using inheritence, you are advised not to have too many levels of inheritence and to keep careful track of where you define your methods and properties. It is possible to start writing code that temporarilty modifies the prototypes of built-in browser objects, but you should not do this. Too much inheritence can lead to endless confusion and endless pain when you try to debug such code.

Ultimately, objects are just another form of code reuse, like functions or loops, with their own specific roles and advantages. If you find yourself creating a bunch of related variables and functions and want to track them all together and package them neatly, an object is a good idea. Objects are also very useful when you want to pass a collection of data from one place to another. Both of these things can be achieved without use of constructors or inheritance. If you only need a single instance of an object, then you are probably better off just using an object literal, and you certainly don't need inheritance.
