function numStr(arr){

    for (var i = 0; i < arr.length; i++){
        if(arr[i]<0){
            arr[i] ="dojo"
        }
    }
    console.log(arr)
}
numStr([-1,5, 10, 7, -2])