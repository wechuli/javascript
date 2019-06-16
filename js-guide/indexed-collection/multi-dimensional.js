// Arrays can be nested, meaning that an array can contain another array as an element

const a = new Array(4);

for (let i = 0; i < 4; i++) {
  a[i] = new Array(10);
  for (let j = 0; j < 10; j++) {
    a[i][j] = j * i;
  }
}

console.log(a);
