//https://leetcode.com/problems/happy-number/

// happy number
// get a positive integer
// split the integer into separate digits
// square each digit, and then square those in a loop until it reaches a total of 1, return true
// if never reaches 1 then false 

var isHappy = function (n) {
    if ( n < 1 || n === null) {
        return false;
    }

    let sum = 0;
    let answers = {};
    let nStr = n.toString().split('');


    while (sum != 1) {
        let sum = 0;

        for (let j = 0; j < nStr.length; j++) {
            let integer = parseInt(nStr[j])
            sum = sum + integer * integer;
            
            
        }
        if(!answers[sum]){
            answers[sum] = 1;
        } else {
            answers[sum] +=1;
            if(answers[sum] >1) {
                console.log('looooppppp')
                return false;
            }
        }
        if (sum === 1) {
            console.log(true)
            return true;
        } 
        nStr = sum.toString().split('');
        console.log(answers)
    }

    return false;
}
// isHappy(19) // true
isHappy(2) // true
// isHappy(7) // true