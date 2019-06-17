// You can throw exceptions using the throw statement and handle them using the try..catch statements

function randomThrow() {
  let randumber = Math.random();
  if (randumber > 0.5) {
    throw "Sorry, too big a number";
  } else {
    return {
      annoyed: true
    };
  }
}

console.log(randomThrow());
