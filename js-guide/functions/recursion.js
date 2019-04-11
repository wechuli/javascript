// A function can refer to and call itself. There are three ways for a function to refer to itself:

// the function's name
// arguments.callee
// an in-scope variable that refers to the function

const foo = function bar() {
  console.log("This will never end");
};

let x = 0;

while (x <= 10) {
  console.log(`${x} from while loop`);
  x++;
}

function loop(y) {
  if (y > 10) {
    return;
  }
  console.log(`${y} from recursion`);
  loop(y + 1);
}

loop(0);