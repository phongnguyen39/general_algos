function squareVal(arr){
    
    for(var i = 0; i< arr.length ; i++){
        arr[i] = arr[i] * arr[i]
    }
    console.log(arr)
    
}
squareVal([1,5, 10, -2])