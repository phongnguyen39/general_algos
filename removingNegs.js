function removingNegs(arr){
    var count = 0
    for(var i = 0; i< arr.length; i++){
        if(arr[i] < 0){
            count+=1;
            // arr[i] = 0
            
        } else {
            arr[i-count] = arr[i]
        }
    }
    for(var j = 0; j < count; j++){
        arr.pop()
    }
    console.log(arr)
}
removingNegs([0, -1, 2, -3, 4, -5, 6])
