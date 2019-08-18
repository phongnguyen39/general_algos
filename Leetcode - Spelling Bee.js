// https://leetcode.com/discuss/interview-question/354523/dropbox-oa-2019-spelling-bee

// OBJECTIVE:  How many words from the wordlist be formed by using the puzzles?
// each puzzle 7 distinct char, the first char is the'key'
// come up with as many words as possible:  english, five letters long, contains key, no letters outside of 7 letters, letters may be reused including the key

function spellingBeeSolutions(wordlist, puzzles) {
    let wordDict = {};
    let output = [];


    for (let i = 0; i < wordlist.length; i++) {
        let words = new Set(wordlist[i]);
        wordDict[wordlist[i]] = words;
    }

    for (let p = 0; p < puzzles.length; p++) {
        let puzzLetter = puzzles[p].split('')
        console.log('puzzle', puzzLetter);
        let count = 0;

        for (let z = 0; z < wordlist.length; z++) {
            let microCounter = 0;
            let overcount = 0;
            for (let q = 0; q < puzzLetter.length; q++) {


                // IF STATEMENT BREAKS IF NO KEY LETTER
                if (!wordDict[wordlist[z]].has(puzzLetter[0])) {
                    // console.log('keyletter', puzzLetter[0], wordDict[wordlist[z]]);
                    break;
                }

                // console.log('wordList', wordlist, 'puzlett', puzzLetter[q]);

                // CHECKS IF PUZZLE LETTER EXIST IN WORD
                // console.log(wordDict[wordlist[z]].has(puzzLetter[q]), wordDict[wordlist[z]], puzzLetter[q])
                overcount++;
                if (wordDict[wordlist[z]].has(puzzLetter[q])) {
                    microCounter++;
                }

                if (microCounter >= wordDict[wordlist[z]].size && q === puzzLetter.length - 1) {
                    count++;
                }
            }
            // wordDict[wordlist[z]].size == 0?count++:null;       
            // console.log('size',wordDict[wordlist[z]].size);
        }

        output.push(count)
    }

    console.log(output);
    return output;
}
spellingBeeSolutions(
    ['APPLE', 'PLEAS', 'PLEASE'],
    ['AELWXYZ', 'AELPXYZ', 'AELPSXY', 'SAELPXY', 'XAELPSY']) // [0,1,3,2,0]
// spellingBeeSolutions(
//     ['APPLE', 'PLEAS', 'PLEASE'],
//     ['AELWXYZ']) // [0,1,3,2,0]

// we can do a simple check if all letters in wordlist are in the puzzle
// check if key letter from puzzle is present in word list
// check if wordlist is at least five letters long && puzzles are 7 letteres long
// 'AELPSXY' & 'PLEASE' => PLEASE, 
