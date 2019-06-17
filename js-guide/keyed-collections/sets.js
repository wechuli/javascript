// Set objects are collections of values. you can iterate its elements in insertion order. A value in a Set may only occur once; it is unique in the Set's collection

const mySet = new Set();
mySet.add(1);
mySet.add(1); //will not add to the Set
mySet.add("Some text");
mySet.add(["An arrauy", 12, "dd"]);
mySet.add("foo");

console.log(mySet);

console.log(mySet.has(1));
console.log(mySet.has("one"));
mySet.delete("foo");

console.log(mySet);

// You can create an Array from a Set using Array.from or the spread operator. Also, the set constructor accepts an Array to convert in the other direction. note again that Set objects store unique values, so any duplicate elements from an Array are deleted when converting

const duplArray = [1, 2, 1, 1, 1, 1, 2, 45, 34];
const myNewSet = new Set(duplArray);
console.log(myNewSet);

//lets turn it back to an array

const cleanedArray = Array.from(myNewSet);
console.log(cleanedArray);
