// https://leetcode.com/discuss/interview-question/354523/dropbox-oa-2019-spelling-bee

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
        let microCounter = 0;

        for (let q = 0; q < puzzLetter.length; q++) {

            for (let z = 0; z < wordlist.length; z++) {
                // IF STATEMENT BREAKS IF NO KEY LETTER
                if (!wordDict[wordlist[z]].has(puzzLetter[0])) {
                    // console.log('keyletter', puzzLetter[0], wordDict[wordlist[z]]);
                    break;
                }

                // console.log('wordList', wordlist, 'puzlett', puzzLetter[q]);

                // CHECKS IF PUZZLE LETTER EXIST IN WORD
                if (wordDict[wordlist[z]].has(puzzLetter[q])) {
                    microCounter++;
                    
                    console.log(wordDict[wordlist[z]].has(puzzLetter[q]), Math.round(microCounter/3))
                    // wordDict[wordlist[z]].delete(puzzLetter[q]);
                    console.log(true, wordDict[wordlist[z]], puzzLetter[q])
                }
                // console.log(wordDict[wordlist[z]]);
                if (microCounter == 5) {
                    console.log(wordDict[wordlist[z]])
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
// spellingBeeSolutions(
//     ['APPLE', 'PLEAS', 'PLEASE'],
//     ['AELWXYZ', 'AELPXYZ', 'AELPSXY', 'SAELPXY', 'XAELPSY']) // [0,1,3,2,0]
spellingBeeSolutions(
    ['APPLE', 'PLEAS', 'PLEASE'],
    ['AELPSXY']) // [0,1,3,2,0]

