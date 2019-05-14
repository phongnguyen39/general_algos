function greaterThanY(arr,y){
    count = 0;
    for(var i = 0; i< arr.length ; i++){
        if(arr[i] > y){
            count+=1;
        }
    }
    console.log(count)
    
}
greaterThanY([1,3,5,7],3)