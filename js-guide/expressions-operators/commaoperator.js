//The comma operator (,) simply evaluates both of its operands and returns the value of the last operand. This operator is primarily used inside a for loop, to allow multiple variables to be updated each time through the loop

let x = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
let a = [x, x, x, x, x, x, x, x, x, x];

for (let i = 0, j = 9; i <= j; i++, j--) {
  console.log(`a[${i}][${j}] = ${a[i][j]}`);
}
