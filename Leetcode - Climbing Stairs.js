// https://leetcode.com/problems/climbing-stairs/submissions/

var climbStairs = function(n) {
    // let combo = 1;
    // for(let i = 1; i <=n;i++){
    //     combo*=i;
    // }
    // return combo
    for(var i = 3, F = [0,1,2]; i <= n; i++) F[i] = F[i - 1] + F[i - 2];
    return F[n] || 1;
};
console.log(climbStairs(2));
console.log(climbStairs(3)); //3