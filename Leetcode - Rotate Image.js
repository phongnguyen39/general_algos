// https://leetcode.com/explore/interview/card/top-interview-questions-easy/92/array/770/discuss/18872/A-common-method-to-rotate-the-image

var rotate = function(matrix) {
    // reverse vertically then, then swap on the 45 degree reflection

    matrix.reverse()
    for(let i = 0; i < matrix.length; i++){       
        for(let j = i+1; j < matrix.length; j++){
            let temp = matrix[i][j];
            matrix[i][j] = matrix[j][i];
            matrix[j][i] = temp;
        }
    }
}
rotate([
    [1,2,3],
    [4,5,6],
    [7,8,9]
  ])