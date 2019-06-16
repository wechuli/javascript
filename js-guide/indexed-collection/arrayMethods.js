const first = new Array(
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday"
);
const second = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December"
];

const third = Array(1, 2, 3, 4, 5, 6, 7, 8, 9);

//1. concat() joins two or more array and returns a new array

console.log(first.concat(second));

//2. join(delimiter=',') joins all elementys of an array into a string
console.log(second.join(","));

//3.push() - adds one or more elements to the end of an array and returns the resultingg length of the array

//4. pop() - removes the last element from an array and returns that element

//5. shift() - removes the first element from an array and returns that element

//6. unshift() - adds one or more elements to the front of an array and returns the new length of the array

//7. slice(start_index,upto_index) extracts a section of an array and returns a new array, excluding the upto_index element
let myNewDays = first.slice(0, 3);
console.log(myNewDays);
//8.splice(index,count_to_remove,addElemt1,addElemnt2,..) removes elements from an array and optionally replaces them. It returns the items which were removed
//Lets add a new day- call it PaulDay
const myOwnFDay = first.splice(6, 0, "Paulday"); //am not removing the element at that index, just adding my own
console.log(myOwnFDay); //empty array
console.log(first);
first.splice(6, 1); //just removed it
console.log(first);

//9. reverse() transposes the elements of an array, in place: the first array element becomes the last and the last becomes the first. it returns a reference to the array
console.log(first);
console.log(first.reverse());

//10. sort() sorts the elements of an array in place and returns a reference to the array

const girls = ["Jennifer", "Mercy", "Abigail", "Sharon", "Lily"];
const mynumbers = [23, 3, 2, 3434, 1, 2, 0, -32, 3, 13, 23];

console.log(girls.sort());
console.log(mynumbers.sort());

//11. indexOf(searchElement[,fromIndex]) searches the array for searchElement and returns the index of the first match

const array = new Array("a", "b", "c", "a", "b", "b", "a");
console.log(array.indexOf("b"));
console.log(array.indexOf("b", 2)); //note that the serach will include the startIndex given
console.log(array.indexOf("z")); //logs -1 because "z" was not found

//lastIndexOf(searchElement[,fromIndex]) works like indexOf, but starts at the end and searches backwards

console.log(array.lastIndexOf("b"));
console.log(array.lastIndexOf("b", 3));

//forEach()
//map()
//filter()
//every()
//some()
//reduce()
//reduceRight()
