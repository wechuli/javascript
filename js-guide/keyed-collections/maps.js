// ECMAScript 2015 introduces a new dta structure to map values. A Map object is a simple key/value map and can iterate its elements in insertion order

const sayings = new Map();
sayings.set("dog", "woof");
sayings.set("cat", "meow");
sayings.set("elephant", "toot");
sayings.set(1, 2); //the key can be of any value

console.log(sayings.size);
console.log(sayings.get("dd")); //undefined
console.log(sayings.get("dog"));
console.log(sayings.get(1));

console.log(sayings.has("food")); //false
console.log(sayings);
console.log(typeof sayings);
sayings.delete("dog");
console.log(sayings);

for (let key of sayings) {
  console.log(key);
}

