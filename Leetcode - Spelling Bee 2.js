function spellingBeeSolutions(wordlist, puzzles) {

    if(wordlist.length == 0 || puzzles == 0){
        return false;
    }

    let wordDict = {};
    let output = [];

    for (let i = 0; i < wordlist.length; i++) {
        let words = new Set(wordlist[i]);
        wordDict[wordlist[i]] = words;
    }

    for (let p = 0; p < puzzles.length; p++) {
        let puzzLetter = puzzles[p].split('')
        let count = 0;

        for (let z = 0; z < wordlist.length; z++) {
            let microCounter = 0;
            let overcount = 0;
            for (let q = 0; q < puzzLetter.length; q++) {                
                overcount++;
                if (!wordDict[wordlist[z]].has(puzzLetter[0])) {                
                    break;
                }

                if (wordDict[wordlist[z]].has(puzzLetter[q])) {
                    microCounter++;
                }

                if (microCounter == wordDict[wordlist[z]].size && q === puzzLetter.length - 1) {
                    count++;
                }
            }
            
        }
        output.push(count)
    }
    console.log(output)
    return output;
}

spellingBeeSolutions(
    ['APPLE', 'PLEAS', 'PLEASE'],
    ['AELWXYZ', 'AELPXYZ', 'AELPSXY', 'SAELPXY', 'XAELPSY']) // [0,1,3,2,0]