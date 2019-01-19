const cleanRoom = function() {
  return new Promise(function(resolve, reject) {
    resolve("cleaning my room ");
  });
};

const removeGarbage = function(message) {
  return new Promise(function(resolve, reject) {
    resolve(message + "then I removed the garbage");
  });
};

const winIcecream = function(message) {
  return new Promise(function(resolve, reject) {
    resolve(message + ", and finally I earned my ice cream");
  });
};

Promise.all([cleanRoom(), removeGarbage(), winIcecream()]).then(function() {
  //running all promises at the same time
  console.log("all finished");
});
//IF YOU ARE ONLY INTERESTED IN ONE
Promise.race([cleanRoom(), removeGarbage(), winIcecream()]).then(function() {
  //running all promises at the same time
  console.log("all finished");
});
