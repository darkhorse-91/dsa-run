/*
Problem Description

Given an array of integers A, every element appears twice except for one. Find that integer that occurs once.
NOTE: Your algorithm should have a linear runtime complexity. Could you implement it without using extra memory?

Input 1: [1, 2, 2, 3, 1]
Output 1: 3

Input 2: [1, 2, 2]
Output 2: 1

*/


const singleOccurence = (list) => {
    
    let listLen = list.length;
    let res = list[0];
    for(let i=1; i<listLen; i++){
        res = res^list[i];
    }
    console.log(res);
    return res
}


let inp1 = [1, 2, 3, 2, 1]
let inp2 = [1, 2, 2]

singleOccurence(inp1);
singleOccurence(inp2);





