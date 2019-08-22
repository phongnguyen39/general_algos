// https://leetcode.com/problems/valid-parentheses/submissions/


/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    if(s.length %2 ==1){
        return false;
    }

    let stack = [];
    let dict = {')':'(',']':'[','}':'{'}


    let orderCheck =(s) =>{
        let open = dict[s];
        let peek = stack[stack.length -1];
        if(open != peek){
            // console.log('Open',open, 'Peek',peek)
            return false;
        } else {
            return stack.pop();
        }
    }

    for(let i = 0; i < s.length; i++) {
        if(s[i] == '(' || s[i] == '[' || s[i] == '{'){
            stack.push(s[i]);
        }
        if(s[i] == ')' || s[i] == ']' || s[i] == '}'){
            orderCheck(s[i])
            // stack.pop(s[i]);
        }
    }
    // console.log(stack.length)
    
    if(stack.length === 0){
        // console.log("YES")
        return true;
    } else {
        // console.log("NO")
        return false;
    }    
    
};