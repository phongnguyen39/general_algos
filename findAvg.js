function findAvg(arr){
    var sum = 0;
    for(var i = 0; i<arr.length ; i++){
        sum+=arr[i];
    }
    console.log(sum / arr.length)
    
}
findAvg([1,3,5,7,9,13,-3,-1])