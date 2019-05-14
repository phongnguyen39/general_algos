function oddArr(n){
    Y = []
    for(var i = 1; i<=n ; i++){
        if(i%2==1){
            Y.push(i)
        }
    }
    console.log(Y)
    
}
oddArr(255)