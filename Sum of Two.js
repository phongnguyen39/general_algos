// https://khan4019.github.io/front-end-Interview-Questions/js1.html#isPrime

function sumFinder(arr, sum) {

    // NAIVE WAY - NESTED FOR LOOP
    // var len = arr.length;

    // for(var i =0; i<len-1; i++){  
    //    for(var j = i+1;j<len; j++){
    //       if (arr[i] + arr[j] == sum)
    //           return true;
    //    }
    // }

    // return false;

    // OPTIMIZED.  Dict stores difference if it exist, else store arr element.  If neither exist then return false

    var differ = {}, len = arr.length,subtract;

    for (var i = 0; i < len; i++) {
        subtract = sum - arr[i];

        if (differ[substract])
            return true;
        else
            differ[arr[i]] = true;
    }
    console.log(differ)
    return false;
}

console.log(sumFinder([6, 4, 3, 2, 1, 7], 9)); // true
console.log(sumFinder([6, 4, 3, 2, 1, 7], 2)); // false