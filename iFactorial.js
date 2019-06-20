function iFactorial(n){
    var factorial = 1 
    for(var i = 1; i <= n; i++){
        factorial = i * factorial;
        console.log(factorial)
    }
}
iFactorial(5)

// 5 * 4 * 3 * 2 * 1