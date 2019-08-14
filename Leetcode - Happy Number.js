//https://leetcode.com/problems/happy-number/

// happy number
// get a positive integer
// split the integer into separate digits
// square each digit, and then square those in a loop until it reaches a total of 1, return true
// if never reaches 1 then false 

var isHappy = function (n) {
    if (n < 0 || n === null) {
        return false;
    }

    let sum = 0;

    // let nStr = n.toString().split('');
    // console.log(nStr)

    let i = 0;
    while (i != 20) {
        let sum = 0;

        
        nStr = n.toString().split('');
        // console.log('Nstr', nStr)
        
        for (let j = 0; j < nStr.length; j++) {
            let integer = parseInt(nStr[j])
            
            sum = sum + integer * integer;
            // sum = sum + Math.pow(integer,2);

        }
        nStr = sum.toString().split('');
        console.log('Sum: ', sum, 'nStr:', nStr)
        // nStr = sum;

        i++;
    }
    // if (sum == 1) {
    //     return true;
    // }

    return false;
}
isHappy(19) // true