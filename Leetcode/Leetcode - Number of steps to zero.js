// https://leetcode.com/problems/number-of-steps-to-reduce-a-number-to-zero/

var numberOfSteps  = function(num) {
    if(num<0 || num == null){
        return -1;
    }
    
    let steps = 0;
    
    // if even then divide by 2
    // if odd then subtract 1
    // count the steps above until zero is reached
    

    while(num>0){
        if(num%2 == 0) {
            num = num/2;
            steps++;
        } else {
            num -= 1
            steps++;
        }     
    }
 
    console.log(steps)
    return steps;
};

// numberOfSteps(2) // 2
// numberOfSteps(1) // 1
numberOfSteps(14) // 6
numberOfSteps(8) // 4
numberOfSteps(123) // 12
