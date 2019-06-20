var arr = [24, 8, 23, 3];


function linearSearch(n, arr){
    for(var i = 0; i< arr.length; i++){
        if(arr[i] == n){
            console.log(i)
        }else {console.log(false)};

    }
}

linearSearch(8, arr);   // => 1
linearSearch(-99, arr); // => false