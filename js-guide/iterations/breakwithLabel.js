let x = 0;
let y = 0;

labelCancelLoops: while (true) { //Applying label to a loop so as to refer to it later
  console.log(`Outer loops: ${x}`);
  x++;
  z = 1;
  while (true) {
    console.log(`Inner loops: ${z}`);
    z++;
    if (z === 10 && x === 10) {
      break labelCancelLoops;
    } else if (z === 10) {
      break;
    }
  }
}
