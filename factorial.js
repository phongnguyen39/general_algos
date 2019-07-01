// Factorial functions in three different ways:  1) Recursive 2) While Loop 3) For Loop

// Recursive

// function factorial(n){
//     if(n < 0){
//         return -1; 
//     }
//     else if( n ==0 ){
//         return 1;
//     }
//     else{
//         return ( n * factorial(n-1));
//     }
// }
// console.log(factorial(5));

// While Loop

// function factorial(n) {
//     var result = n;
//     if (n == 0 || n == 1) {
//         return 1;
//     }

//     while (n > 1) {
//         n--;
//         result = result * n;
//     }
//     return result;
// }
// console.log(factorial(5));


// For Loop

function factorial(n) {
    if (n == 0 || n == 1) {
        return 1;
    }
    for(var i = n -1 ; i >= 1; i--){
        n *= i;
    
    }
    return n;
}
console.log(factorial(5));