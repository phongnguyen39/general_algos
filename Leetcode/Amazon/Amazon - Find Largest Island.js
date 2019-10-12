// https://aonecode.com/amazon-onsite

// Given water and island represented in a matrix. Find the size of the largest island. For example ‘X’ is land and ‘O’ is water.
// XXOOOO
// XXXOOX
// OOXOOX
// XOOOOO
// Return 5 which is the size of the largest island (top left corner).

// Solved the problem with DFS. Was then asked for big O analysis.

// DEPTH FIRST SEARCH.  Walk through the matrix, when encounter 'X', follow depth of that X

function islands(m) {
    // create dict + set

    let maxIsland;


    for (let i = 0; i < m.length; i++) {
        for (let j = 0; j < m[i].length; j++) {
            // console.log(m[i][j])
            // if stmt to check x or o
            if (m[i][j] == 'X') {
                let currCount = 0;
                // run recursion on all four corners// mutate 
                currCount = recursion(i, j, currCount)
                // console.log('current', currCount)
                maxIsland = Math.max(currCount, maxIsland);
                console.log(currCount, maxIsland)   
            }
            
        }
        
    }

    console.log(maxIsland);

    return maxIsland;

    function recursion(i, j, currCount) {
        
        // check if it is in bound
        if (i < 0 || j < 0 || i > m.length - 1 || j > m[0].length - 1 || m[i][j] == 'O') {
            return;
        }
        currCount++;
        console.log('inside recursion -->', i, j, currCount)
        // mutate
        m[i][j] = 'O';
        // check North
        recursion(i - 1, j, currCount)
        // check East
        recursion(i, j + 1, currCount)
        // check South
        recursion(i + 1, j, currCount)
        // check West
        recursion(i, j - 1, currCount)
        return currCount; 
    }



    // check if X or 0, if X then go all adj cells for X, 
    // when it reaches then end store the count
    // find max of the counts
    // once X is counted, mutate to 0 so it doesn't double count
    // recursive function to check all cardinal positions(if only valid X or 0, and bounds)

}
console.log(islands([
    ['X', 'X', 'O', 'O', 'O', 'O'],
    ['X', 'X', 'X', 'O', 'O', 'X'],
    ['O', 'O', 'X', 'O', 'O', 'X'],
    ['X', 'O', 'O', 'O', 'O', 'O']
]));
