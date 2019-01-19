//The REST operator turns a list of arguments into an array

function sum(...numbers) {
  //   console.log(numbers);
  //   let sum = 0;
  //   for (let i = 0; i < numbers.length; i++) {
  //     sum += numbers[i];
  //   }
  //   return sum;

  //using reduce
  return numbers.reduce((sum, number) => {
    return sum + number;
  }, 0);
}

const results = sum([1, 2, 4, 4, 5, 5, 5, 3, 4, 55]);
console.log(results);

const results2 = sum(1, 2, 4, 4, 5, 5, 5, 3, 4, 55);
console.log(results2);

//Now using the rest operator

const sumrest = (...numbers) => {
  let sum = 0;
  numbers.forEach(element => {
    sum += element;
  });
  return sum;
};

console.log(sumrest(1, 3, 4));
