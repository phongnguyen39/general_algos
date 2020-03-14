function pivotIndex(nums){
    let leftSum = 0;
    let rightSum = 0;

    for(let i = 0; i < nums.length; i++) {
        leftSum+=nums[i]
        leftSumDict[i] = leftSum;   
    }

    for(let j = nums.length -1; j >=0 ; j--) {
        rightSum+=nums[j]
        for(let k in leftSumDict) {
            if(leftSumDict[k] == rightSum) {
                // console.log(j, rightSum)
                console.log(j-1)
                return j-1;
            }
        }
    }

    return -1;


    // console.log(leftSumDict)
    // console.log(rightSumDict)

}
pivotIndex([1,7,3,6,5,6]) // total of 11, pivots at index 3

// find sum going from left to right
// find sum going from right to left

// FAILED ATTEMPT
// function pivotIndex(nums){

//     let leftSumDict = {};
//     let sums = new Set();
//     let leftSum = 0;
//     let rightSum = 0;

//     for(let i = 0; i < nums.length; i++) {
//         leftSum+=nums[i]
//         leftSumDict[i] = leftSum;   
//     }

//     for(let j = nums.length -1; j >=0 ; j--) {
//         rightSum+=nums[j]
//         for(let k in leftSumDict) {
//             if(leftSumDict[k] == rightSum) {
//                 // console.log(j, rightSum)
//                 console.log(j-1)
//                 return j-1;
//             }
//         }
//     }

//     return -1;


//     // console.log(leftSumDict)
//     // console.log(rightSumDict)

// }
// pivotIndex([1,7,3,6,5,6]) // total of 11, pivots at index 3

// // find sum going from left to right
// // find sum going from right to left