var nextPerm = function(nums) {
    let max = Math.max(...nums);
    if(nums.length ===0) {
        return false;
    }
    if(max == nums[0]) {
        nums.sort((a,b)=>{return a-b});
    }
    
    // find from right to left first decreasing element
    // find number larger than the one just found
    // swap the two

    let num1 = nums.join('')
    console.log(num1);

    let swap = (n1,n2) =>{
        let temp = n1;
        n1 = n2;
        n2 = temp;
        return;
    }

    for(let i = 1; i < nums.length-1; i++){
        num2 = swap(nums[i],nums[i+1]);
        console.log(num2);
        if(num1 < num2) {
            console.log(num2);
        }
    }

    for(let i = nums.length; i > 0; i--) {
        if(nums[i-1] < nums[i]) {
            let temp = nums[i-1];
        }
        console.log(nums)
    }

}
nextPerm([1,2,3]); // 1,3,2
// nextPerm([3,2,1]); // 1,2,3
// nextPerm([1,1,5]); // 1,5,1
// nextPerm([9, 5, 4, 3, 1])