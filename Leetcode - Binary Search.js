var search = function(nums,target) {
    // let left = 0;
    // let right = nums.length - 1;

    // while ( left <= right) {
    //     let mid = left + right 
    //     if()
    // }

    let l = 0;
    let r = nums.length-1;
    
    while (l <= r) {
      let m = l+r>>1;
      console.log(l+r, l, r, m)
      if (nums[m] <= target) {
        l = m+1;
      } else {
        r = m-1;
      }
    }
    
    return r >= 0 && nums[r] === target ? r : -1;
}
console.log(search( [-1,0,3,5,9,12], 9))