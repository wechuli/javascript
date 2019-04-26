//An arrow function expression (previously, and now incorrectly known as fat arrow function) has a shorter syntax compared to function expressions and does not have its own this, arguments, super, or new.target

let a = ["Hydrogen", "Helium", "Lithium", "Beryllium", "Boron", "Cabon"];

let a2 = a.map(function(array, index) {
  return array.length;
});
console.log(a2);
//or alternatively

let a3 = a.map(array => array.length);
console.log(a3);

//There is no separate this