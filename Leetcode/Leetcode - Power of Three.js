// https://leetcode.com/explore/featured/card/top-interview-questions-easy/102/math/745/

var isPowerOfThree = function(n) {
    
    // for(let i = 0; i < n;i++) {
    //     if(n === Math.pow(3,i)){
    //         return true;
    //     }
    // }   
    // return false;

    if(n<1) {
        return false;
    }
    while(n % 3 ==0) {
        n /=3;
        console.log(n)
    }
    return n ==1;
}
// isPowerOfThree(27); // true
// isPowerOfThree(0); // false
// isPowerOfThree(9); // true
// isPowerOfThree(45); // false
isPowerOfThree(387420489) // true
console.log(isPowerOfThree(129140164)) // false