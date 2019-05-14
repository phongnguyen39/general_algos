function findMax(arr){
    max = arr[0]
    for(var i = 0; i<arr.length ; i++){
        if(arr[i] > max){
            max = arr[i]
        }
    }
    console.log(max)
    return max;
}
findMax([1,3,5,7,9,13,-3,-1])