## Arrays vs Sets

Traditionally, a set of elements has been stored in arrays in JavaScript in alot of situations. the new Set object, however, has some advantages:

- Checking whether an element exists in a collection using indexOf for arrays is slow
- Set objects let you delete elements by their value. With an array, you would have to splice based on an element's index
- The value NaN cannor be found with indexOf in an array
- Set objects store unique values; you don't have to keep track of duplicates by yourself

## WeakSet Object

unique in the WeakSet's collection and objects are not enumerable.

The main differences to the Set object are:

- In contrast to Sets, WeakSets are collections of objects only and not of arbitrary values of any type.
- The WeakSet is weak: References to objects in the collection are held weakly. If there is no other reference to an object stored in the WeakSet, they can be garbage collected. That also means that there is no list of current objects stored in the collection. WeakSets are not enumerable.
  The use cases of WeakSet objects are limited. They will not leak memory so it can be safe to use DOM elements as a key and mark them for tracking purposes, for example.
