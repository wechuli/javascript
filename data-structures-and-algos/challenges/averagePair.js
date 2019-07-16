// Write a function called averagePair. Given a sorted array of integers and a target average, determing if there is a pair of values in the array where the average of the pair equals the target average. There may be more than one pair that matches the avergae target.

function averagePair(array, targetAverage) {
  let checkArrayType = array.every(item => {
    return typeof item === "number";
  });
  if (!checkArrayType) {
    throw new Error("array must contain only numbers");
  }
  if (!(typeof targetAverage === "number")) {
    throw new Error("the target average must be a number");
  }
  let left = 0;
  let right = array.length - 1;

  while (left < right) {
    let average = (array[left] + array[right]) / 2;
    if (average === targetAverage) {
      return {
        pairFound: true,
        pair: {
          number1: array[left],
          number2: array[right]
        }
      };
    }
    if (average > targetAverage) {
      right--;
    } else {
      left++;
    }
  }
  return {
    pairFound: false,
    pair: undefined
  };
}

console.log(averagePair([1, 2, 3], 2.5));
console.log(averagePair([1, 3, 3, 5, 6, 7, 10, 12, 19], 8));
console.log(averagePair([-65, -42, -30, -4, 1, 2, 3, 56, 456, 780], -306));
