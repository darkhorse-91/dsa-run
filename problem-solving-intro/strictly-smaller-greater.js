/*
You are given an Array A of size N.
Find for how many elements, there is a strictly smaller element and a strictly greater element.
Example Input:  A = [1, 2, 3] 
Example Output: 1 
Explanation:    only 2 have a strictly smaller and strictly greater element, 1 and 3 respectively.
*/
// 'use strict'

var countElements = function(nums) {

    if (nums.length === 1 || nums.length === 0){
        return 0
    }

    var maxNum = Math.max(...nums);
    var minNum = Math.min(...nums);
    var numLen = nums.length;
    var counter = 0;
    for (let i=0; i<numLen; i++){
        if (nums[i] > minNum && nums[i] < maxNum){
            // console.log(i);
            counter++
        }
    }
    console.log(counter);
    return counter;

};

testArrayA = [1,2,3,4];
testArrayB = [11,7,2,15];

countElements(testArrayA);
countElements(testArrayB);

