// https://leetcode.com/problems/unique-morse-code-words/




var uniqueMorseRepresentations = function(words) {
    let morse = [".-","-...","-.-.","-..",".","..-.","--.","....","..",".---","-.-",".-..","--","-.","---",".--.","--.-",".-.","...","-","..-","...-",".--","-..-","-.--","--.."]
    let alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
    let lookup = {};
    let transformed = [];
    let count = 0;
    let morseLookup = '';

    if(words.length == 0) {
        return false;
    }

    for(let i = 0; i < morse.length; i++) {
        lookup[alphabet[i]] = morse[i]
    }
    // console.log(lookup)

    // transform words to morse, store the morse and then compare each element; count each time there is a change

    for(let j = 0; j < words.length; j++) {
        for(let k = 0; k < words[j].length; k++) {
            morseLookup+=lookup[words[j][k]];
        }
        transformed.push(morseLookup)
    }
    console.log(count, transformed)
};
uniqueMorseRepresentations(["gin", "zen", "gig", "msg"]);
