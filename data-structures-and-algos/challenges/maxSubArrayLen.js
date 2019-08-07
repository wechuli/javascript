// Write a function called minSubArrayLen which accepts two parameters - an array of postitive integeres and a positive integer

//This function should return the minimal length of a contigous subarray of which the sum is greater than or equal to the integer passed to the function. If there isn't one, return 0 instead

function minSubArrayLen(array, number) {


    for (let i = 1; i <= array.length; i++) {
        // loop through each combination with a sliding window and stop once it is found
        let maxIndexStart = 0;

        let nextSum = 0;
        let currentSum = 0;
        //sum of first subarray
        for (let j = 0; j < i; j++) {
            currentSum += array[j];
        }

        for (let k = 0; k < array.length - i; k++) {
            console.log(currentSum);


            nextSum = currentSum - array[k] + array[k + i]
            currentSum = nextSum;

            if (currentSum >= number) {
                return {
                    number: i,
                    sum: currentSum
                }
            }

        }
        return 0;
    }
}

console.log(minSubArrayLen([2, 3, 1, 2, 4, 3], 7));