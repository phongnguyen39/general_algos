// https://leetcode.com/problems/find-all-numbers-disappeared-in-an-array/

var findDisappearedNumbers = function(nums) {
    let distinctVal = new Set(nums.sort());
    let disappeared = [];

    if(nums.length == 0) {
        return false;
    }
    
    // find distinct values in nums array
    // iterate through it and push to disappeared array if missing
    let count = Math.min(...distinctVal);

    for(let item of distinctVal) {
        if(item !== count) {
            disappeared.push(count);
        } 
        count++
    }
    console.log(disappeared)
    return disappeared;
};

findDisappearedNumbers([4,3,2,7,8,2,3,1]) // 5,6
