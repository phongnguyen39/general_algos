function reversing(arr){
    // 2,3,5,7,6
    // first and last closing in
    for(var i = 0; i< arr.length /2 ; i++){
        temp = arr[i]
        arr[i] = arr[arr.length -i-1]
        arr[arr.length -i-1] = temp
        
    }
    console.log(arr)
}
reversing([2, 3, 5, 7, 6])
reversing([-3,5,1,3,2,10]) // [10,2,3,1,5,-3]