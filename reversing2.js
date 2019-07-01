// Reversing a string with three different methods:  Built-in functions, decrementing loop, & recursion

// Built-in

// function reverse(str){
//     var arr = str.split("").reverse().join("")
//     return arr;
// }
// console.log(reverse("hello"));

// Decrementing Loop

// function reverse(str){
//     var newStr = "";
//     for(var i = str.length -1; i >=0; i--){
//         newStr += str[i];
//     }
//     return newStr;
// }
// console.log(reverse("hello"));

// Recursive

function reverse(str){
    var newStr = "";
    if(str.length == 0){
        return newStr = '';
    }
    else {
        newStr = reverse(str.substr(1)) + str.charAt(0);
        return newStr;
    }
}
console.log(reverse("hello"))