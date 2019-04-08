// The continue statement can be used to restart a while, do-while, for, or label statement.

// When you use continue without a label, it terminates the current iteration of the innermost enclosing while, do-while, or for statement and continues execution of the loop with the next iteration. In contrast to the break statement, continue does not terminate the execution of the loop entirely. In a while loop, it jumps back to the condition. In a for loop, it jumps to the increment-expression.
// When you use continue with a label, it applies to the looping statement identified with that label.

var i = 0;
var n = 0;
while (i < 5) {
  i++;
  if (i == 3) {
    continue;
  }
  n += i;
  console.log(n);
}
//1,3,7,12

var i = 0;
var n = 0;
while (i < 5) {
  i++;
  if (i == 3) {
    // continue;
  }
  n += i;
  console.log(n);
}
// 1,3,6,10,15
