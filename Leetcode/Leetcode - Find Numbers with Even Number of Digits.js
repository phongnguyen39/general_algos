// https://leetcode.com/problems/find-numbers-with-even-number-of-digits/

// iterate through each element of the array
// evalulate if the number of digits is even
// if even, then increment count by 1

const findNumbers =(nums)=> {
    let even = 0;

    if(nums == null){
        return;
    }
    
    for(let i = 0; i < nums.length; i++) {
        let numberStr = nums[i].toString();
        let length = parseInt(numberStr.length);
        if(length%2==0){
            even++;
        }    
    }
    return even;
    
}
findNumbers([12,345,2,6,7896])