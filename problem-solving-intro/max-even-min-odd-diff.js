/*
Problem Description

You are given an array of integers A of size N.
Return the difference between the maximum among all even numbers of A and the minimum among all odd numbers in A.

Input 1: [0, 2, 9]
Output: -7       

Input 2: [5, 17, 100, 1]
Output: 99
*/

const maxMinDiff = (list) => {
    let maxEven = Number.NEGATIVE_INFINITY;
    let minOdd = Number.POSITIVE_INFINITY;
    const lenList = list.length;
    for(let i=0; i<lenList; i++){
        if(!(list[i]&1)){
            // console.log(list[i], "test-n");
            if(list[i]>maxEven){
                maxEven = list[i];
            } 
        }
        else{
            // console.log(list[i], "test-p");
            if(list[i]<minOdd){
                minOdd = list[i];
            }
        }
    }
    console.log(maxEven-minOdd);
    return maxEven-minOdd;
}

let inp1 = [0, 2, 9]
let inp2 = [5, 17, 100, 1]

maxMinDiff(inp1);
maxMinDiff(inp2);
