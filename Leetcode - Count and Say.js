// https://leetcode.com/explore/featured/card/top-interview-questions-easy/127/strings/886/

var countAndSay = function(n) {
    let output = ''
    let final = '';

    // starting at 1, what would it look like after nth sequence?
    // build char string
    if(n === 1) {
        return '1';
    }
    
    let start = '1';
    for(let i = 1; i <= n; i++){
        // 1) parse value to str + integer
        // 2) convert integer into a string
        // 3) concat str1 + str2
        output+=start;
    
        for(let j = 0; j < output.length; j++) {
            if(output[j] == 1) {
                output += '1'
                console.log(output)
            }
        }
        
        

        // if(output = 1) {
        //     console.log('one')
        // }
        
        // console.log(output.length)
        // console.log(parseInt(output))
    }


    return output;
}
countAndSay(2);