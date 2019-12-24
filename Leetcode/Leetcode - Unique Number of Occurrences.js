// https://leetcode.com/problems/unique-number-of-occurrences/


// PASSED:  SLOW ATTEMPT
// let uniqueOccurrences = (arr) => {
//     // count the occurences of each element in array
//     // store these occurences in an object
//     // check this object if there are any dups
//     if (arr.length == 0) {
//         return 1;
//     }

//     let counts = {};


//     for (let i = 0; i < arr.length; i++) {
//         if (!counts[arr[i]]) {
//             counts[arr[i]] = 1;
//         } else {
//             counts[arr[i]] += 1;
//         }
//     }
//     // console.log(counts)
//     let checkDup = Object.values(counts).sort((a, b) => { return a - b });
//     // console.log(checkDup)

//     for (let j = 0; j < checkDup.length - 1; j++) {
//         console.log(checkDup[j], checkDup[j + 1])
//         if (checkDup[j] == checkDup[j + 1]) {

//             console.log(false)
//             return false;
//         }
//     }
//     console.log(true)
//     return true;
// }
// // uniqueOccurrences([1,2,2,1,1,3]) // true
// uniqueOccurrences([1, 2]) // false
// // uniqueOccurrences([-3,0,1,-3,1,1,1,-3,10,0]) // true


// REFACTORED: FAST

let uniqueOccurrences = (arr) => {
    // count the occurences of each element in array
    // store these occurences in an object
    // check this object if there are any dups
    if (arr.length == 0) {
        return 1;
    }

    let sorted = arr.sort((a,b)=>{a - b})

    let countsSet = new Set();


    for (let i = 0; i < sorted.length; i++) {
        if (!countsSet.has(sorted[i])) {
            countsSet.add(sorted[i])
        } else {
                        
        }
    }
    
    for (let j = 0; j < checkDup.length - 1; j++) {
        console.log(checkDup[j], checkDup[j + 1])
        if (checkDup[j] == checkDup[j + 1]) {

            console.log(false)
            return false;
        }
    }
    console.log(true)
    return true;
}
// uniqueOccurrences([1,2,2,1,1,3]) // true
uniqueOccurrences([1, 2]) // false
// uniqueOccurrences([-3,0,1,-3,1,1,1,-3,10,0]) // true
