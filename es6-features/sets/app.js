//SETS -Store unique values of any type

const set1 = new Set();

//Add values to set

set1.add(100);
set1.add("A string");
set1.add({ name: "Paul" });
set1.add(true);
set1.add(100); //will not create another vaalue

console.log(set1);

//We can pass an array to a set
const set2 = new Set([
  1,
  2,
  3,
  4,
  "Thing",
  {
    car: "Ferari",
    computer: "hp",
    myfunt: function(name) {
      console.log("I am a function inside a set", name);
    }
  }
]);
console.log(set2);

//Get count
console.log(set2.size);

//Check for values
console.log(set1.has(100));
console.log(set1.has(50 + 50));
console.log(set1.has({ name: "John" })); //This is false

//Delete from the set
set1.delete(100);
console.log(set1);

//ITERATING THROUGH SETS

//For of

for (let item of set2) {
  console.log(item);
}

//for ..each loop

set1.forEach(value => {
  console.log(value);
});

//COnvert set to Array
const setArr = Array.from(set2);
console.log(setArr);
