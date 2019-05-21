// return true if the binary trees rooted and a and b are equal in structure and value
// return false otherwise
function compare(a, b) {
  if (a == null && b == null) {
    return true;
  } else if (a == null || b == null) {
    return false;
  } else {
    return (
      a.val == b.val && compare(a.left, b.left) && compare(a.right, b.right)
    );
  }
}
