const cleanRoom = function() {
  return new Promise(function(resolve, reject) {
    resolve("cleaning my room ");
  });
};

const removeGarbage = function(message) {
  return new Promise(function(resolve, reject) {
    resolve(message+ "then I removed the garbage");
  });
};

const winIcecream = function(message) {
  return new Promise(function(resolve, reject) {
    resolve(message + ", and finally I earned my ice cream");
  });
};

cleanRoom()
  .then(function(result) {
    return removeGarbage(result);
  })
  .then(function(result) {
    return winIcecream(result);
  })
  .then(function(result) {
    console.log("I finished "+result);
  });
