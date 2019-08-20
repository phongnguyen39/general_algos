//https://leetcode.com/explore/interview/card/top-interview-questions-easy/98/design/670/

// f(0) = 0; f(1) = 1;
// return nth number in the sequence => 

function f(n) {
    // base case
    if(n ==1 || n === 2){
        return 1;
    }
    
    return f(n-1) + f(n-2);
}
console.log(f(3)); // returns 5
// console.log(f(6)); // returns 5
// f([0,1,1,2,3,5,8],6) // 5 is the value