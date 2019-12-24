// Subtract the Product and Sum of Digits of an Integer

// https://leetcode.com/problems/subtract-the-product-and-sum-of-digits-of-an-integer/

let subtractProductAndSum =(n)=> {
    if(n == null){
        console.log('null')
        return;
    }

    let num = n.toString()
    let product = 1;
    let sum = 0;

    for(let i = 0; i < num.length; i++) {
        let number = parseInt(num[i])
        product*=number;
        sum+=number;
    }

    console.log(product-sum)
    return product - sum
}
// subtractProductAndSum();
// subtractProductAndSum(234); // 15
subtractProductAndSum(4421); // 15


// Input: n = 234
// Output: 15 
// Explanation: 
// Product of digits = 2 * 3 * 4 = 24 
// Sum of digits = 2 + 3 + 4 = 9 
// Result = 24 - 9 = 15