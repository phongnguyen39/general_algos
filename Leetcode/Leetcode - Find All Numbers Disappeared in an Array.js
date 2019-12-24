// https://leetcode.com/problems/find-all-numbers-disappeared-in-an-array/

var findDisappearedNumbers = function(nums) {
    // find distinct values in nums array
    // iterate through it and push to disappeared array if missing

    let distinctVal = new Set(nums.sort());
    let max = nums.length;
    let min = 1;
    let disappeared = [];

    if(nums.length == 0) {
        return [];
    }
    
    for(let i = min; i <= max; i++) {
        if(!distinctVal.has(i)) {
            disappeared.push(i)
        }
    }
    

    // for(let item of distinctVal) {
    //     if(item !== count) {
    //         disappeared.push(count);
    //     } 
    //     count++
    // }
    console.log(disappeared)
    return disappeared;
};

findDisappearedNumbers([4,3,2,7,8,2,3,1]) // 5,6
findDisappearedNumbers([1,1]) // 5,6
findDisappearedNumbers([2,2]) // 5,6
