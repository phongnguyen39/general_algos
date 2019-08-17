// https://leetcode.com/problems/word-break-ii/

let wordBreak =(s,wordDict)=>{
    let output = [];
    // add a space between string to form words
    // if words are in dict, then push to output;

    // go through string and indexof wordDict
    let dict = new Set(wordDict);
    let i = 0;
    // for(let i = 0; i < wordDict.length; i++){
        while(i < wordDict.length) {
            console.log(s.indexOf(wordDict[i]));
            let start = s.indexOf(wordDict[i]);
            let wLength = wordDict[i].length;
            let wordSplice = s.slice(start,wLength)
            output.push(wordSplice+' ');
            i++;
        }
        
    
    console.log([output.join('')])

    return output;
}
wordBreak('catsanddog',["cat", "cats", "and", "sand", "dog"]);