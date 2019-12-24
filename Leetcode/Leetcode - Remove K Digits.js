// https://leetcode.com/problems/remove-k-digits/
// remove three digits to produced the lowest number
// what constitutes a large number:  number of digits and highest value

let removeKdigits = (num,k) => {
    // we can try removing one digit at a time, store the number to min, reseting min each time
    if(num.length ===0) {
        return 0;
    }
    let sum = 0;
    let length = num.split('').length-k+1;
    let output = parseInt(num.split('').join(''))
    
    for(let i= 0; i < length; i++) {
        let numSplit = num.split('');
        // issue right now is that original array is shortening, how do we preserve it 
        numSplit.splice(i,k)
        sum = parseInt(numSplit.join(''))
        // console.log(i,numSplit, sum)
        if(Number.isNaN(sum)) {
            console.log(0)
            return '0';
        }
        if(sum < output) {
            output = sum;
        }
    }
    console.log('output',output.toString());
    return output.toString();; 
}
// removeKdigits("1432219", 3) // '1219' // remove 432
// removeKdigits('10200',1) // 200
// removeKdigits('10',2) // 0
// removeKdigits("1432219", 0) // 1432219
removeKdigits("5337", 2) // 33




