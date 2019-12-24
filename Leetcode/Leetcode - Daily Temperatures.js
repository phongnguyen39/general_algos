// https://leetcode.com/problems/daily-temperatures/

// iterate through the array
// at each element, evalulate for each element after it if difference is positive
// if difference is positive then push to output array
// if there is no future day, then push 0

let dailyTemperatures =(T)=>{
    
    if(T.length ==0) {
        return;
    }

    let output = [];

    for(let i = 0; i<T.length; i++){
        let days = 0;
        for(let j = i+1; j<T.length; j++){
            // console.log(T[i], T[j])
            let diff = T[j] - T[i]
            console.log(diff)
            days++;
            if( diff >0){
                // console.log(diff)
                output.push(days)
                break;
            } else if( diff < 0 && j == T.length-1){
                output.push(0)
                // no future day that warmer
            }
        }
    }
    console.log(output)   
}
dailyTemperatures([73, 74, 75, 71, 69, 72, 76, 73]) // [1, 1, 4, 2, 1, 1, 0, 0]