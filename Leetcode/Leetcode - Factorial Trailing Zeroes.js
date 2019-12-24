var trailingZeroes = function(n) {
    let product = 1;
    let count = 0;
    for(let i = 1; i <= n; i++) {
        product *= i;
        
    }
    product = product.toString();
    if(BigInt(product.charAt(product.length-1)) == 0) {
        console.log('yes', product)

        for(let j = product.length-1; j > 0; j--) {
            if(product[j] == 0) {
                console.log(product[j])
                count++;
            }
            if(product[j]!=0) {
                console.log(count)
                return count;
            }
        }
    }
    console.log(count)
    // detect trailing zeroes

}
trailingZeroes(30) // 1