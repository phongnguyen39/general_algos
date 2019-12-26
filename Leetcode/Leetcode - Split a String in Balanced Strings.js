// https://leetcode.com/problems/split-a-string-in-balanced-strings/

// Evaluate if s has equal number of L and R. 
// Iterate through string, if L, count, if R, count
// using pop and push
// queue // FIFO
// stack // LIFO

var balancedStringSplit = function(s) {

    let stack = [];
    let output = 0;

    for(let i = 0; i < s.length; i++) {

        if(stack.length == 0) {
            stack.push(s[i])
        } else if (stack[stack.length-1] == "L" && s[i] == "R") {
            stack.pop();
            output++
        }  else if (stack[stack.length-1] == "R" && s[i] == "L") {
            stack.pop();
            output++
        } 
        console.log(stack, output)

    }
    console.log(output)
    return output

    // comb through the string for LR or RL combos.  If combo found, output++
    // whatever is leftover is then 

}
// balancedStringSplit("RLRRLLRLRL")  // 4
// balancedStringSplit("RLLLLRRRLR")  // 3
// balancedStringSplit("LLLLRRRR")  // 1
balancedStringSplit("RLRRRLLRLL")  // 2
