// https://leetcode.com/problems/sum-of-two-integers/

var getSum = function(a,b){
    while(true){
        let sum = a^b;
        let carry = (a&b)<<1;
        if(b==0){
             return a;
          }
          a=sum;
          b=carry;
     }
     console.log(a,b)
    
}
getSum(2,-3);
// getSum(2,3);
// getSum(-2,-3);