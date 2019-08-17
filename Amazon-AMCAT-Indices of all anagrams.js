// https://aonecode.com/find-all-anagrams

// Find the indices of all anagrams of a given word in a another word. 
// For example: Find the indices of all the anagrams of AB in ABCDBACDAB 
// (Answer: 0, 4, 8)

function indices(s,p){
    // letters can be reversed
    // create a set with possible permutations of anagrams
    // search string for it and return indexOf found
    // let pSorted = p.split('').sort().join('')       

    for(let i = 0; i < p.length; i++) {
        for(let j = i+1; j < p.length; j++) {
            console.log(p[i]+p.substring(j,i));

        }
    }

}
// indices('ABCDBACDAB','AB') // 0,4,8
indices('cbaebabacd','abc') /[0,6]