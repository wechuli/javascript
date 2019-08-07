// Given an array of integers and a number, write a function called maxSubarraySum which find the maximum sum of subarray with the length of the number passed to the function

// Note that a subarray must consits of consecutive elements from the original array.

function maxSubarraySum(array, number) {

    if (number > array.length) {
        return null;
    }
    // get the sum of the first subarray

    //slide through the whole array checking if a subsequence is more

    let maxIndexStart = 0;
    let maxSum = 0;
    let nextSum = 0;
    let currentSum = 0;
    //sum of first subarray
    for (let i = 0; i < number; i++) {
        maxSum += array[i];
    }

    currentSum = maxSum;
    for (let i = 0; i < array.length - number; i++) {
        nextSum = currentSum - array[i] + array[i + number]
        if (nextSum > maxSum) {
            maxIndexStart = i + 1;
            maxSum = nextSum;
        }
        currentSum = nextSum;

    }
    return {
        indexStart: maxIndexStart,
        sum: maxSum
    }
}



console.log(maxSubarraySum([1, 2, 3, 45003, -34, 2323], 3));
console.log(maxSubarraySum([100, 200, 300, 400], 2));
console.log(maxSubarraySum([1, 4, 2, 10, 23, 3, 1, 0, 20], 4));
console.log(maxSubarraySum([-3, 4, 0, -2, 6, -1], 2));
console.log(maxSubarraySum([3, -2, 7, -4, 1, -1, 4, -2, 1], 2));
console.log(maxSubarraySum([2, 3], 3))