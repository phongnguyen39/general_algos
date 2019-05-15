function rand(n){
    arr = []
    for (var i = 0; i < n; i++){
        arr[i] = Math.floor((Math.random() * 10)+1)
    }
    console.log(arr)
}
rand(10)