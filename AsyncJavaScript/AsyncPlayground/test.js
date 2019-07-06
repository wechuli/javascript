async function sumStuff() {
  let sum = 0;
  for (let i = 0; i < 1000000000; i++) {
    sum += i;
  }
  return sum;
}

console.log("I should run immediately");
console.log("I should run immediately");
console.log("I should run immediately");

sumStuff().then(result => console.log(result));
