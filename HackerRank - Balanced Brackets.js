// https://www.hackerrank.com/challenges/balanced-brackets/problem?h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=stacks-queues

function isBalanced(s) {
    // are the the brackets balanced, meaning for each opener there must be a corresponding closer
    
    if(s.length %2 ==1 || s.length==0){
        return 'NO';
    }

    let stack = [];
    let dict = {')':'(',']':'[','}':'{'}


    let orderCheck =(s) =>{
        let open = dict[s];
        let peek = stack[stack.length -1];
        if(open != peek){
            // console.log('Open',open, 'Peek',peek)
            return 'NO';
        } else {
            return stack.pop();
        }
    }

    for(let i = 0; i < s.length; i++) {
        if(s[i] == '(' || s[i] == '[' || s[i] == '{'){
            stack.push(s[i]);
        }
        if(s[i] == ')' || s[i] == ']' || s[i] == '}'){
            orderCheck(s[i])
            // stack.pop(s[i]);
        }
    }
    
    if(stack.length === 0){
        console.log("YES")
        return 'YES';
    } else {
        console.log("NO")
        return 'NO';
    }    
}
// isBalanced('{[()]}'); // return YES
// isBalanced('{[(])}'); // return NO
// isBalanced('{{[[(())]]}}'); // return YES
isBalanced(']({}{()}[}}[]{]([]{}({({(][})}{)[[(})][)})(){(}{){]][(}(][{[])(]]([[{{(]]{}([}]]){[[({]}[(}][(]){[]}])}{]])][([][([)]{[}()])}[{][]{{(]{[][){[)([}]}[{}(({{({)}()}}{{{{}[}]}){})[((}[[}[[}(')
// isBalanced('[([{{}}]{[[][][([[]]){[]}{}]]}[]{{}}{})[[]]]{{}}(()[[[[[(){}[]]({}{[]})[][[][]]]]{}]{[{}]{[{[][](()({{()}}){([]({({{[]}([([()]{()[[([({{{[]{(){}}[][]({{[([])()](())([{[]([()]{})}]){}([]){()}{}[]([[()]])}()})[{}]}()}(())}){{}()}[]]{{}})]][[]({{[{}]}})({{}({{[]{()}([][{[()]}]{})}()})}{{}}{})]()(){}}(()({()}[([](){[]()}[])])[])[])][{[{[]}]{}([])}]()(()))}){([{}])}[(([]){[]{}})]{}({}{})}){}({{}([][](){{[][{()([[{}()]]{()}{{}{[()]}})[()[]{}](){[{}()[]][{{}}{[{}][]()}[]](())[[][]][]()}}[({}([[{([]){}}]()([()(){}]){([()]())}](()))(()))]]{}()[][{[{}(([]){([()]{()()}([{}][[[]{[[(({([([]){()[]}]){(())}[]}))][((([]{})[{}[[()]({({[()[]]{}(()[{}[][[{}][][]({()}[{([])}][])]][]{})([])}){}{((){})}}){[]}[]()(()(()))(()[{{}}]){}({{{((()([](()[][]{}){({})}{(([{({{}})}]))})))}}})]]))]]}]]))})]}]}})}))})}]}}])') // YES, it was correct




