function popMe(arr){
    console.log(arr)
    for(var i =  0; i<arr.length; i++){
        arr.pop()
        
    }
    console.log(arr)
}
popMe([1,2,3,4,5])