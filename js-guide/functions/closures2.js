function outside(x) {
  function inside(y) {
    return x + y;
  }
  return inside;
}

fn_inside = outside(3);
console.log(`Type of fn_inside ${typeof fn_inside} value: ${fn_inside}`);

result = fn_inside(5);
console.log(result);

//or we could skip the game and pass all arguments at once

console.log(outside(3)(5));
