// Source:   https://hackernoon.com/50-data-structure-and-algorithms-interview-questions-for-programmers-b4b1ac61f5b0

// Arrays //////////////////////////////////////////////

// 3.  How do you find the largest and smallest number in an unsorted integer array? 

// function maxMin(arr){
//     var max = 1;
//     var min = 1;
//     for(var i = 0; i < arr.length; i++){
//         if(arr[i] > max){
//             max = arr[i];
//         }
//         if(arr[i] < min){
//             min = arr[i];
//         }
//     }
//     console.log(max, min)
//     return;
// }
// console.log(maxMin([0,122, 3, -1]));

// 8.  How do you remove duplicates from an array in place?

// using a ES6 set
// function removeDups(arr){

//     // Instantiate a set (which removes duplicates)
//     var set = new Set(arr);

//     // Convert set back to an array
//     arr = Array.from(set);
//     return arr;
// }
// console.log(removeDups([-1,0,1,2,1]))

// using for loop


// Arrays //////////////////////////////////////////////