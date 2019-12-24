// https://leetcode.com/problems/valid-sudoku/
// validate row is from 1 to 9
// validate column is from 1 to 9
// validate 3x3 is from 1 to 9 
// no repetition


let isValidSudoku = (board) => {


    for (let i = 0; i < board.length; i++) {
        // let rowSet = new Set(['1','2','3','4','5','6','7','8','9']);
        // let columnSet = new Set(['1','2','3','4','5','6','7','8','9']);
        // let clusterSet = new Set(['1','2','3','4','5','6','7','8','9']);
        let rowDict = {};


        for (let j = 0; j < board.length; j++) {
            if (board[i][j] == '.') {
                continue;
            }
            if (!rowDict[board[i][j]]) {
                rowDict[board[i][j]] = 1
            } else {
                return false;
            }
        }
        // console.log('Row', rowDict)
    }
    for (let i = 0; i < board.length; i++) {
        let columnDict = {};
        for (let j = 0; j < board.length; j++) {
            if (board[j][i] == '.') {
                continue;
            }
            if (!columnDict[board[j][i]]) {
                columnDict[board[j][i]] = 1;
            } else {
                return false;
            }
        }
        // console.log('Column', columnDict)
    }


    for (let i = 0; i < board.length; i += 3) {
        
        for (let j = 0; j < board.length; j += 3) {
            let subbox = board[i][j]+ board[i][j+1]+ board[i][j + 2]+
                board[i + 1][j]+ board[i + 1][j + 1]+ board[i + 1][j + 2]+
                board[i + 2][j]+ board[i + 2][j + 1]+ board[i + 2][j + 2]
            console.log(subbox);
            let subboxDict = {};
            for(let k = 0; k < subbox.length; k++) {
                
                if(subbox[k]=='.') {    
                    continue;
                }
                if(!subboxDict[subbox[k]]){
                    subboxDict[subbox[k]] =1;
                } else {
                    subboxDict[subbox[k]]++;
                    return false;
                }
            }
            // console.log(subboxDict)
        }
    }
    return true;
}
// isValidSudoku([
//     ["5", "3", ".", ".", "7", ".", ".", ".", "."],
//     ["6", ".", ".", "1", "9", "5", ".", ".", "."],
//     [".", "9", "8", ".", ".", ".", ".", "6", "."],
//     ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
//     ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
//     ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
//     [".", "6", ".", ".", ".", ".", "2", "8", "."],
//     [".", ".", ".", "4", "1", "9", ".", ".", "5"],
//     [".", ".", ".", ".", "8", ".", ".", "7", "9"]
// ]); // true

isValidSudoku([
    ["8","3",".",".","7",".",".",".","."],
    ["6",".",".","1","9","5",".",".","."],
    [".","9","8",".",".",".",".","6","."],
    ["8",".",".",".","6",".",".",".","3"],
    ["4",".",".","8",".","3",".",".","1"],
    ["7",".",".",".","2",".",".",".","6"],
    [".","6",".",".",".",".","2","8","."],
    [".",".",".","4","1","9",".",".","5"],
    [".",".",".",".","8",".",".","7","9"]
  ]) // false

