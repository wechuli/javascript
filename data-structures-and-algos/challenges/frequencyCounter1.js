// Write a function called sameFrequency. Given two positive integers, find out if the two numbers have the same frequency of digits

function sameFrequency(int1, int2) {

    //turn the integers into strings
    let int1Str = int1.toString();
    let int2Str = int2.toString();

    //if the strings are of unequal length, return early, since there is no way for the strings to have an equal length and the function return true
    if (int1Str.length !== int2Str.length) {
        return false;
    }

    // make objects to hold the two frequencies
    const int1numFreq = {};
    const int2numFreq = {};

    // loop through both the strings and create the frequency counter object, no need to use two loops since all the strings have the same length (that is if they succeeded reaching this point)
    for (let i = 0; i < int1Str.length; i++) {
        int1numFreq[int1Str[i]] = (int1numFreq[int1Str[i]]) ? (int1numFreq[int1Str[i]] + 1) : 1;
        int2numFreq[int2Str[i]] = (int2numFreq[int2Str[i]]) ? (int2numFreq[int2Str[i]] + 1) : 1;
    }

    //use another loop to confirm that each key and value in int1numFreq correspond with a pair in int2numFreq and if not return false early
    for (let number in int1numFreq) {
        if (int1numFreq[number] !== int2numFreq[number]) {
            return false;
        }
    }
    return true;

}


// We have two loops going through each elements thus the time complexity is O(2N) hence O(N)
console.log(sameFrequency(22, 222))