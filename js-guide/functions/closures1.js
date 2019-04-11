// A closure is an expression (typically a function) that can have free variables together with an environment that binds those variables

function addSuares(a, b) {
  let y = "rrttt";
  function square(x) {
    return x * x;
  }
  return square(a) + square(b);
}

a = addSuares(2, 3);
console.log(a);
b = addSuares(3, 4);
console.log(b);
c = addSuares(4, 5);
console.log(c);
