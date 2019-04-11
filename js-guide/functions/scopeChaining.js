

function A(x) {
  function B(y) {
    function C(z) {
      console.log(x + y + z);
    }
    C(3);
  }
  B(2);
}

A(1);

// Name conflicts
// When two arguments or variables in the scopes of a closure have the same name, there is a name conflict. More inner scopes take precedence, so the inner-most scope takes the highest precedence
