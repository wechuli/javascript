console.log("Our program has started");

function mapThroughArray(list) {
  return new Promise((resolve, reject) => {
    if (list instanceof Array) {
      list = list.map(item => {
        return item * 2;
      });
      resolve(list);
    } else {
      reject(new Error("Incorrect data type"));
    }
  });
}

const correctArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let incorrectInput = "This is incorrect";

mapThroughArray(incorrectInput)
  .then(data => console.log(data))
  .catch(error => console.log(error));

console.log("This log is below the promise");
