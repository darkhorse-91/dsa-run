/*
You are given an array of distinct integers A, you have to find and return all elements in array which have at-least two greater elements than themselves.

NOTE: The result should have the order in which they are present in the original array.

Input 1:    [1, 2, 3, 4, 5]
Output 1:   [1,2,3]

Input 2:    [11, 17, 100, 5]
Output 2:   [11, 15]

*/

const atLeastTwo = (nums) => {
    let numLen = nums.length;
    let maxOne = Number.NEGATIVE_INFINITY;
    let maxTwo = Number.NEGATIVE_INFINITY;

    for (let i=0; i<numLen; i++){
        if (nums[i] > maxOne){
            maxTwo = maxOne;
            maxOne = nums[i];
            }
        else if (nums[i] > maxTwo){
            second = nums[i];
            }
        }
    const resArray = new Array();
    for (let i=0; i<numLen; i++){
        // if (nums[i] !== maxOne && nums[i] !== maxTwo){
        if (nums[i] < maxTwo){
            resArray.push(nums[i]);
        }
    }
    console.log(resArray);
    return resArray;

}

atLeastTwo([1, 2, 3, 4, 5]);
atLeastTwo([11, 17, 100, 5]);
