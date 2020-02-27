  // https://leetcode.com/problems/count-negative-numbers-in-a-sorted-matrix/

var countNegatives = function(grid) {
    // m * n grid is sorted in decreasing order from left to right and from top to bottom
    // count the number of negative numbers
    // a faster way would be to check from right to left and from bottom to top
    //m == grid.length   n == grid[i].length

    if(grid.length == 0) {
        return -1;
    }

    // grid[m][n]
    let m = grid.length -1;
    let n = grid[0].length -1;
    let count = 0;

    for(let i = m ; i >= 0; i--) {
        for(let j = n; j >= 0; j--) {
            if(grid[i][j] < 0) {
                count++
            }
        }
    }
    console.log(count);
    return count;
    
};

countNegatives([[4,3,2,-1],[3,2,1,-1],[1,1,-1,-2],[-1,-1,-2,-3]]) //Output: 8
    
countNegatives([[3,2],[1,0]]) //Output: 0
    
countNegatives([[1,-1],[-1,-1]]) //Output: 3
    
countNegatives([[-1]]) //Output: 1
    