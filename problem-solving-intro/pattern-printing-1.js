/*
Problem Description

Print a Pattern According to The Given Value of A.

Input :     3
Output :    1 0 0
            1 2 0
            1 2 3
*/

const patternPrint = (num) => {
    for(let i=0; i<num; i++){
        let k = 1;
        for(let j=0; j<num; j++){
            if (j<=i){
                console.log(k);
            }
            else{
                console.log(0);
            }
        k++;
        }
    }
}

patternPrint(3);
patternPrint(5);