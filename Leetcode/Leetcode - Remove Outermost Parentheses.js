// https://leetcode.com/problems/remove-outermost-parentheses/

const removeOuterParentheses = (S) => {
	
	let newStr = '';
	
	for (let i = 0; i < S.length - 1; i++) {
		if (S[i] == '(' && S[i + 1] == ')') {
			newStr+=S[i]+S[i+1];
			newStr+=S.substring(i,S.length-i-1)
			console.log(newStr, '<-')
		} 
	}
	S = newStr;
	console.log(S)
	
}
removeOuterParentheses("(()())(())") // ()()()
// removeOuterParentheses('(()())(())(()(()))') //
// removeOuterParentheses('()()') //