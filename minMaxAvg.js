function minMaxAvg(arr){
    var min = arr[0];
    var max = arr[0];
    var sum = 0;
    for(var i = 0; i< arr.length ; i++){
        if(arr[i]>max){
            max = arr[i];
            sum +=arr[i];
        }
        if(arr[i]<min){
            min = arr[i];
            sum +=arr[i];
        }
        avg = sum / arr.length;
    }
    console.log(min, max, avg)
}
minMaxAvg([1,5, 10, -2])