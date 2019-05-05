const trees = ["redwood", "bay", "cedar", "oak", "maple"];

delete trees[3];
console.log(trees);
//When the delete operator removes an array element, that element is no longer in the array. In the following example, trees[3] is removed with delete. However, trees[3] is still addressable and returns undefined.