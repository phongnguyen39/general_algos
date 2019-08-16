var lastStoneWeight = function(stones){
    // compare two of the heaviest stones, if they are equal cancel, if one is greater thake the difference from the two
        // find the two heaviest stones
        // do the comparison, replace two stones with the result into stonesArray
    
    // find the two greatest (sort first)
    let sortedStone = stones.sort((a,b)=> {return a-b})
    // console.log(sortedStone)

    if(stones.length == 0 ) {
        return false;
    }



    // find the last two of sorted
    while(sortedStone.length>1) {
        if(sortedStone[sortedStone.length-1] === sortedStone[sortedStone.length-2]){
            if(stones.length === 2 && stones[0] === stones[1]) {
                return 0;
            }
            // console.log(sortedStone[sortedStone.length-1] === sortedStone[sortedStone.length-2])
            sortedStone.pop();
            sortedStone.pop();
            // sortedStone.splice(sortedStone.length-2,2);
        } else {
            let result = Math.abs(sortedStone[sortedStone.length-1] - sortedStone[sortedStone.length-2]);
            console.log(result, sortedStone[sortedStone.length-1],sortedStone[sortedStone.length-2]);
            sortedStone.splice(sortedStone.length-2,2, result);
            sortedStone = sortedStone.sort((a,b)=>{return a-b});
        }
    }
    console.log(sortedStone[0])
    return sortedStone[0];
}
// lastStoneWeight([2,7,4,1,8,1]);
lastStoneWeight([2,2]);
// lastStoneWeight([9,3,2,10]);