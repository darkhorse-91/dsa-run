/*
Problem Description

Write a function that takes an integer and returns the number of 1 bits present in its binary representation.

Input: 11
Output: 3

Input: 6
Output: 2
*/


// Brute Force - Right shift

const countSetBitsBrute = (n) => {
    let count = 0;
    while(n){
        if (n&1 > 0){
            count++;
        }
        n >>= 1;
    }
    return count;
}

// Optimised - Brian Kernighan's Algorithm

const countSetBits = (n) => {
    let count = 0;
    while(n){
        n = n&(n-1);
        count++;
    }
    return count;
}

let ansBrute = countSetBitsBrute(10);
console.log(ansBrute);
let ans = countSetBits(15);
console.log(ans);