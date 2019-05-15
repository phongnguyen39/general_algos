function shift(arr){

    // using pre-built javascript array methods
    // arr.shift(1)
    // arr.push(0)
    // console.log(arr)

    // manually shifting

    for (var i = 0; i < arr.length - 1 ; i++){
        arr[i] = arr[i+1]
    }
    arr[arr.length-1] = 0
    console.log(arr)


}
shift([1,5, 10, 7, -2])