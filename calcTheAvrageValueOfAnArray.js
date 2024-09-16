'use strict'

const CalculatingTheAverage = (arr) => {
    let result = 0;

    for(let i = 0 ; i < arr.length ; i++){
        result += arr[i];
    };
    
    result = result / arr.length;
    return result;
};


const array = Array.from({length : 5} , (_,i) => (i + 1) * 5);  // 5,10,15,20,25 ; n = 5
CalculatingTheAverage(array)