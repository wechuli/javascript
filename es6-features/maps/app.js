//MAPS = key-value pairs - can use any type as a key or value

const map1 = new Map();

//set keys
const key1 = "some string",
  key2 = {},
  key3 = function() {};

//Set map values by key
map1.set(key1, "Value of key1");
map1.set(key2, "Value of key2");
map1.set(key3, "Value of key3");

//Get values by keys

console.log(map1.get(key1));
console.log(map1.get(key2));
console.log(map1.get(key3));

console.log(map1);
//Count values
console.log(map1.size);

//ITERATING MAPS

//Loop using for ..of to get keys and values

for (let [key, value] of map1) {
  console.log(`${key}=${value}`);
}

//Iterate keys only

for (let key of map1.keys()) {
  console.log(`${key}`);
}

//Iterate values only
for (let value of map1.values()) {
  console.log(`${value}`);
}

//Loop with for Each
map1.forEach((value, key) => {
  console.log(key, value);
});

//CONVERT TO ARRAYS

//create an array of the key value pairs
const keyValArrays = Array.from(map1);
console.log(keyValArrays);

//create an array of the keys
const keyArrays = Array.from(map1.keys());
console.log(keyArrays);

//create an array of the values
const ValArrays = Array.from(map1.values());
console.log(ValArrays);
