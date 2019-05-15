function insertXY(arr,x,y){
    

    var newArr = []
    for(var i = 0; i< arr.length; i++){
        if(i == y){
            newArr.push(x)
        }
        newArr.push(arr[i])
    }
    console.log(newArr)
}
insertXY([1,3,5,7],10,2)
insertXY([1,10,9,8,5,7],1,5)