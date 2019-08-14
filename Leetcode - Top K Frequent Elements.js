// https://leetcode.com/problems/top-k-frequent-elements/

// add freq of each array element to dictionary
//

let topKFrequent = (nums, k) => {
    if (nums.length === 0) {
        return false;
    }

    let dict = {};   
    let sortedArr = [];

    for (let i = 0; i < nums.length; i++) {
        if (!dict[nums[i]]) {
            dict[nums[i]] = 1;
        } else {
            dict[nums[i]]++;
        }

    }
    console.log(dict, 'DICTIONARY');
    let sortDict = Object.entries(dict)
    console.log(sortDict, 'ORIGINALLL')

    // let sortDict = Object.keys(dict).map(function(key) {return [key,dict[key]]});
    sortDict.sort(function(a,b) {return b[1] - a[1]})
    console.log(sortDict, 'SORTED')

    // console.log(sortDict, 'SORTED DICT')


    for(let j = 0; j < k; j++) {
        let temp = parseInt(sortDict[j][0])
        sortedArr.push(temp)
    }
    console.log('OUTPUT', sortedArr)

    return sortedArr;
}
// topKFrequent([1, 1, 1, 2, 2, 3], 2); // top two frequent [1,2]
topKFrequent([3,3,3,4,4,3,3,3,3,2,2,1], 2); // top two frequent [1,2]
// topKFrequent([1,1,4,5,4,4,4,5,1,2,2,3], 2); // top two frequent [1,2]