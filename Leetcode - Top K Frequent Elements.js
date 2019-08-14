// https://leetcode.com/problems/top-k-frequent-elements/

// add freq of each array element to dictionary
//

let topKFrequent = (nums, k)=> {
    if (nums.length === 0) {
        return false;
    }
    
    let dict = {};
    
    for(let i = 0; i < nums.length; i++) {
        if(!dict[nums[i]]) {
            dict[nums[i]] =1;
        } else {
            dict[nums[i]]++;
        }
    }
    console.log(dict)

    return k;
}
topKFrequent([1,1,1,2,2,3], k); // top two frequent [1,2]