// Coding Dojo Algorithm Challenges
// The Dojo Collection
// Version 1.1.7
// Published May 8, 2017

// Preface, I skipped passed the foundational assignments to focus on areas that I warranted further practice or understanding. All problems will have a page and chapter reference.  
// TO VIEW THE OUTPUT OF EACH ASSIGNMENT, SIMPLY UNCOMMENT THAT SECTION OF CODE
// Ctrl+F "Come back" for uncompleted assignments

// Chapter 1 - Fundamentals //////////////////////////////////////////

// Setting and Swapping //////////////////////////////////////////

// var myNumber = 42;
// var myName = "John Smith";
// console.log(myNumber, myName)
// myNumber = "John Smith" // swapped
// myName = 42;  // swapped
// console.log(myNumber, myName) 

// Print -52 to 1066  //////////////////////////////////////////

// for(var i = -52; i<=1066; i++){
//     console.log(i)
// }

// Don't Worry, Be Happy  //////////////////////////////////////////

// function beCheerful(){
//     console.log("good morning!")
// }
// for(var i = 1; i <= 98; i++){
//     beCheerful();
// };

// Multiples of Three - but Not All  //////////////////////////////////////////

// for(var i = -300; i<= 0 ; i = i+ 3){
//     if( i == -3 ||  i == -6){
//         continue;
//     } else {
//         console.log(i);
//     }
// }

// Printing Integers with While  //////////////////////////////////////////

// var i = 2000;
// while( i <= 5280 ){
//     console.log(i);
//     i++
// }

// You Say It's Your Birthday  //////////////////////////////////////////

// function birthday(month,day){
//     var birthday = month.toString() + day.toString();
//     var yourBirthday = "312";
//     if(birthday == yourBirthday){
//         console.log("How did you know?")
//     } else {
//         console.log("Just another day...")
//     }
// }
// birthday(3,12);
// birthday(3,15);

// Leap Year  //////////////////////////////////////////

// function leapYear(year){
//     if(year % 4 == 0 && year % 100 != 0 || year % 400 == 0){
//         console.log(true);
//     } else {
//         console.log(false);
//     }
// }
// leapYear(2001);
// leapYear(2020);

// Print and Count  //////////////////////////////////////////

// var count = 0;
// for(var i = 512; i <= 4096 ; i++){
//     if(i % 5 == 0){
//         count ++;
//         console.log(i);
//     }
// }
// console.log(count);

// Multiples of Six  //////////////////////////////////////////

// var i = 0;
// while( i <= 60000){
//     if( i % 6 ==0 ){
//         console.log(i);
//     }
//     i+=6;
// }

// Counting, the Dojo Way  //////////////////////////////////////////

// What Do You Know?  //////////////////////////////////////////
// Whoa, That Sucker's Huge...  //////////////////////////////////////////
// Countdown by Fours...  //////////////////////////////////////////
// Flexible Countdown...  //////////////////////////////////////////
// The Final Countdown...  //////////////////////////////////////////


// Chapter 1 - Fundamentals - Arrays //////////////////////////////////////////

// Countdown...  //////////////////////////////////////////

// function countdown(num){
//     var arr = [];
//     for(var i = num; i >= 0 ; i--){
//         arr.push(i);
//     }
//     console.log(arr," length of ",arr.length)
//     return;
// }
// countdown(5);

// Print and Return...  //////////////////////////////////////////

// function printReturn(num1,num2){
//     console.log(num1);
//     return num2;
// }
// printReturn(2, 3)

// First Plus Length...  //////////////////////////////////////////

// function firstPlusLength(arr){
//     console.log(arr[0] + arr.length)
//     return arr[0] + arr.length;
// }
// firstPlusLength([3,42,1,-1]);
// firstPlusLength(["yippi",42,1,-1]);  // this will concatenate the string with the length of the array

// Values Greater than Second...  //////////////////////////////////////////

// var arr = [1,3,5,7,9,13]

// function gtrThanSec(arr){
//     var count = 0;
//     for(var i = 0; i < arr.length; i++){
//         if(arr[i] > arr[1]){
//             count++;
//         }
//     }
//     return count;
// }
// console.log(gtrThanSec(arr));

// Values Greater Than Second, Generalized...  //////////////////////////////////////////

// function gtrThanSec(arr){
//     var newArr = [];
//     if(arr.length <= 1){
//         return "Not long enough";
//     }
//     for(var i = 0; i < arr.length; i++){
//         if(arr[i] > arr[1]){
//             newArr.push(arr[i])
//         }
//     }
//     return newArr.length;
// }
// console.log(gtrThanSec([1,3,5,7,9,13]));
// console.log(gtrThanSec([1]));


// This Length, That Value...  //////////////////////////////////////////

// function lenVal(num1, num2){
//     var arr = [];
//     for(var i = 0; i < num1; i++){
//         arr.push(num2);
//     }
//     console.log(arr);
//     return arr;
// }
// lenVal(4,5);

// Fit the First Value...  //////////////////////////////////////////

// function fitFirstVal(arr){
//     if(arr[0] > arr.length){
//         return "Too Big";
//     } else if (arr[0] < arr.length){
//         return "Too small";
//     } else{
//         return "Just rightt";
//     }
// }
// console.log(fitFirstVal([1,3,2,2,1]));
// console.log(fitFirstVal([30,3,2,2,1]));
// console.log(fitFirstVal([5,3,2,2,1]));

// Farenheit to Celsius...  //////////////////////////////////////////

// function fToC(farenheit){
//     // farenheit = (9/5 * Celsius) + 32;
//     var celsius = (farenheit - 32)/1.8
//     return celsius;
// }
// console.log(fToC(75));

// Celsius to Farenheit...  //////////////////////////////////////////

// function cToF(celsius){
//     var farenheit = (9/5 * celsius) + 32;
//     return farenheit;
// }
// console.log(cToF(100));

// Biggie Size...  //////////////////////////////////////////

// function biggie(arr) {
//     for (var i = 0; i < arr.length; i++) {
//         if (arr[i] > 0) {
//             arr[i] = "big";
//         }
//     }
//     return arr;
// }
// console.log(biggie([-1, 3, 5, -5]));

// Print Low, Return High...  //////////////////////////////////////////

// function printLowReturnHigh(arr) {
//     var low = arr[0];
//     var high = arr[0];
//     for (var i = 0; i < arr.length; i++) {
//         if (arr[i] < low) {
//             low = arr[i];
//             console.log(low)
//         }
//         if (arr[i] > high) {
//             high = arr[i];
//             console.log(high)
//         }
//     }
//     return high;
// }
// printLowReturnHigh([5, 1, 23, 3, 2, 5])

// Print One, Return Another...  //////////////////////////////////////////

// function printLowReturnHigh(arr) {
//     console.log(arr[arr.length-2])

//     var odd;
//     for (var i = 0; i < arr.length; i++) {
//         if (arr[i] % 2 ==1) {
//            odd = arr[i];
//            console.log("odd", odd)
//            return odd; 
//         }
//     }
// }
// printLowReturnHigh([7, 1, 23, 3, 2, 5])

// Double Vision...  //////////////////////////////////////////

// function double(arr){
//     var newArr = [];
//     for(var i = 0; i < arr.length; i++){
//         newArr.push(arr[i]*2);
//     }
//     return newArr;
// }
// console.log(double([1,2,3]));

// Count Positives...  //////////////////////////////////////////

// function countPositive(arr){
//     var count = 0;
//     for(var i = 0; i<arr.length; i++){
//         if(arr[i] > 0){
//             count++;
//         }
//     }
//     return count;
// }
// console.log(countPositive([-1,1,1,1]));

// Even and Odds...  //////////////////////////////////////////

/* COME BACK TO MEEEEEEE *******************************************************/
// function evenOdd(arr){
//     var count = 0;
//     for(var i = 0; i<arr.length; i++){
//         if(arr[i] > 0){
//             count++;
//         }
//     }
//     return count;
// }
// console.log(evenOdd([1,3,6,5])); // expected "Nada"
// console.log(evenOdd([1,3,5,6])); // expected "That's odd!"
// console.log(evenOdd([1,3,5,7])); // expected "Even more so!"

// Increment the Seconds...  //////////////////////////////////////////

// function incrSeconds(arr){
//     // incr +1 odd elements
//     for(var i = 0; i< arr.length; i++){
//         if(i%2 == 1){
//             arr[i]++
//         }
//     }
//     return arr;
// }
// console.log(incrSeconds([1,23,2,5,6]));

// Previous Lengths...  //////////////////////////////////////////

// function prevLen(arr){
//     for(var i = 0; i < arr.length; i++){
//         if(typeof(arr[i]) === 'string'){
//             arr[i] = arr[i].length;
//         }
//     }
//     return arr;
// }
// console.log(prevLen(["Coding","Dojo",2,"Rocks","My","Socks"]));

// Add Seven to Most...  //////////////////////////////////////////

// function seven(arr){
//     var newArr = [];
//     for(var i = 0; i < arr.length ; i++ ){
//         if(i == 0){
//             newArr.push(arr[i]);
//             continue;
//         } else {
//             newArr.push(arr[i]+7);
//         }
//     }
//     return newArr;
// }
// console.log(seven([1,2,23,2,1]));

// Reverse Array...  //////////////////////////////////////////

// function revArr(arr){

//     for(var i = 0; i < arr.length/2; i++){
//         var temp = arr[i];
//         arr[i] = arr[arr.length-1-i]
//         arr[arr.length-1-i] = temp;
//     }
//     return arr;
// }
// console.log(revArr([3,1,6,4,2]))  // expected output [2,4,6,1,3]

// Outlook: Negative...  //////////////////////////////////////////

// function outlookNeg(arr){
//     var newArr = [];
//     for(var i = 0; i < arr.length; i++){
//         if(arr[i] > 0){
//             arr[i] *= -1;
//         }
//         newArr.push(arr[i])
//     }
//     return newArr;
// }
// console.log(outlookNeg([1,-3,5]));

// Always Hungry...  //////////////////////////////////////////

// function hungry(arr){
//     for(var i = 0 ; i < arr.length ; i++){
//         if(arr[i] === "food"){
//             console.log("yummy")
//             return "yummy";
//         }
//         else{
//             console.log("I'm hungry")
//         }
//     }
// }
// hungry(["Coding","Dojo","food"]);
// hungry(["Coding","Dojo","rocks"]);

// Swap Toward the Center...  //////////////////////////////////////////

// Come back **********************/////////////////////////////////
// function swapCenter(arr){
//     for(var i = 0; i < arr.length; i++){
//         var temp = arr[i];
//         arr[i] = arr[arr.length-1-i]
//         arr[arr.length-1-i] = temp;
//     }
//     console.log(arr)
//     return arr;

// }
// swapCenter([1,2,3,4,5,6]);  //expected [6,2,4,3,5,1]
// swapCenter([true,42,"Ada",2,"pizza"]) // expected ["pizza",42,"Ada",2,true]

// Scale the Array...  //////////////////////////////////////////

// function scale(num, arr){
//     for(var i = 0; i < arr.length; i++){
//         arr[i] = arr[i] * num;
//     }
//     return arr;
// }
// console.log(scale(3, [1,2,3,15]));



// Chatper 2 - Fundamentals, Part II //////////////////////////////////////////

// Only Keep the Last Few...  //////////////////////////////////////////

// Come back **********************/////////////////////////////////
// function lastFew(x,arr){
//     // iterate twice, 5 - 3 = 2   arr.length - x   5 - 3 -1 = 

//     // arr.length 5
//     // # of iterations  = arr.length - 1 
//     // x, the remainder of arr.length

//     for(var i = 0; i < arr.length + x ; i++){
//         arr.shift();
//         console.log(x, i, arr)
//     }
//     return arr;

// }
// lastFew(3,[2,4,6,8,10]); // expected [6,8,10]
// // lastFew(1,[2,4,6,8,10]); // expected [10]

// Math Help...  //////////////////////////////////////////

// function mathHelp(num1, num2, num3){
//     var m = num1;
//     var b = num2;
//     var y = num3;
//     var x = (y-b)/m;
//     // solve for x;
//     console.log(x);
//     return x;
// }
// mathHelp(2,1,15);

// Poor Kenny...  //////////////////////////////////////////

// function whatHappensToday(days){
//     var volcanos = days * .1;
//     var tsunamis = days * .15;
//     var earthquakes = days * .2;
//     var blizzards = days * .25;
//     var meteors = days * .3;
//     var outcome = ("Vol:  " + volcanos + " Tsu:  " + tsunamis + " Eart:  " + earthquakes + " Bliz:  " + blizzards + " Met:  " + meteors)
//     console.log(outcome)

// }
// whatHappensToday(100);
// whatHappensToday(1);

// What Really Happened...  //////////////////////////////////////////

// Come back **********************/////////////////////////////////
// function whatHappensToday(days){
//     var volcanos = days * .1;
//     var tsunamis = days * .15;
//     var earthquakes = days * .2;
//     var blizzards = days * .25;
//     var meteors = days * .3;
//     var outcome = ("Vol:  " + volcanos + " Tsu:  " + tsunamis + " Eart:  " + earthquakes + " Bliz:  " + blizzards + " Met:  " + meteors)
//     console.log(outcome)

// }
// whatHappensToday(100);
// whatHappensToday(1);

// Soaring IQ...  //////////////////////////////////////////
// Letter Grade...  //////////////////////////////////////////
// More Accurate Grades...  //////////////////////////////////////////


// come back to page 34

// Sigma...  //////////////////////////////////////////

// function sigma(num){
//     var output = 0;
//     for(var i = 1; i <= num; i++){
//         output += i;
//     }
//     return output
// }
// console.log(sigma(3));
// console.log(sigma(5));

// Factorial //////////////////////////////////////////

// function factorial(num){
//     var output = 1;
//     for (var i = 1; i <= num; i++){
//         output *= i;
//     }
//     return output;
// }
// console.log(factorial(3));
// console.log(factorial(5));

// Star Art //////////////////////////////////////////
// Character Art //////////////////////////////////////////



// Three and Fives  //////////////////////////////////////////

// function threesFives(){
//     var output = 0;
//     for(var i = 100; i<= 4000000; i++ ){
//         // if( i % 3 == 0 || i % 5 == 0  ){  /// come back, unsure about solution
//         if( i % 3 == 0 || i % 5 == 0 && i % 3 == 0  && i % 5 == 0 ){   
//             output += i;
//         }
//     }
//     return output;
// }
// console.log(threesFives());

// Generate Coin Challenge   //////////////////////////////////////////
// Messy Math Mashup  //////////////////////////////////////////
// Twelve-Bar Blues   //////////////////////////////////////////

// function twelveBlues(){

//     // come back ////////////////////////
//     // at multiple of 5 put an integer
//     // multiple of 2 put chck
//     // at multiple of 3 put boom      

//     for (var i = 1; i <=13; i++){
//         if(i % 5 == 0 ){
//             console.log(i)
//         }
//         else if (i % 4 ==0 || i % 2 == 0){
//             console.log("chick")
//         }
//         else if(i % 3 == 0){
//             console.log("boom")
//         }
//         else{
//             console.log();
//         }
//     }
// }
// twelveBlues();  // expected  // 1, "chick", "boom", "chick", 2, "chick", "boom", "chick" ... to 12

// Fibonnaci  //////////////////////////////////////////

 // Characteristics of fib:
    // each number is the sum of the previous two
    // start with values 0 and 1
    // each function only accepts one argument
    // this is solved by recursion as opposed to loops.  Recursions are O(2^5) potentially
    //https://medium.com/quick-code/fibonacci-sequence-javascript-interview-question-iterative-and-recursive-solutions-6a0346d24053

    // fib(0) = 0;
    // fib(1) = 1;
    // fib(2) = 1;  // fib(0) + fib(1)
    // fib(3) = 2; // fib(2) + fib(1)
    // fib(4) = 3; // fib(3) + fib(2)
    // fib(5) = 5; // fib(4) + fib(3)
    // fib(6) = 8; // fib(5) + fib(4)
    // fib(7) = 13; // fib(6) + fib(5)

// function fib(n){
   
    
//     if(n < 2){
//         return n;
//     }
//     var output = fib(n-1) + fib(n-2);
    
//     return output;
// }
// console.log(fib(0));
// console.log(fib(7));

// Sum to One Digit  //////////////////////////////////////////

// Come back********

// sumToOne(928) // expected 9+2+8 = 19 => 1 + 9 = 10 => 1 + 0 = 1

// function sumToOne(num){
//     parseInt()
// }
// sumToOne();

// Clock Hand Angles  //////////////////////////////////////////
// Is Prime  //////////////////////////////////////////

// Rockin' The Dojo Sweatshirt  //////////////////////////////////////////

// function sweatShirt(n){
//     var cost = 20;
//     var items = n;

//     if(items == 2){
//         discount = .09;
//         return Math.ceil(items * cost * discount);
//     } 
//     else if( items == 3){
//         discount = .19;
//         return Math.ceil(items * cost  * discount);
//     }
//     else if( items >= 4 ){
//         discount = .35;
//         return Math.ceil(items * cost * discount);
//     }
//     else{
//         return items * cost;
//     }
// }
// console.log(sweatShirt(1));
// console.log(sweatShirt(2));
// console.log(sweatShirt(3));
// console.log(sweatShirt(4));

// Clock Hand Angles, Revisited  //////////////////////////////////////////


// Chatper 3 - Arrays //////////////////////////////////////////
// Chatper 4 - Strings and Associative Arrays  //////////////////////////////////////////
// Chatper 5 - Linked Lists  //////////////////////////////////////////
// Chatper 6 - Queues and Stacks  //////////////////////////////////////////
// Chatper 7 - Arrays, Part II  //////////////////////////////////////////
// Chatper 8 - Linked Lists, Part II  //////////////////////////////////////////
// Chatper 9 - Recursion  //////////////////////////////////////////
// Chatper 10 - Strings, Part II  //////////////////////////////////////////
// Chatper 11 - Trees  //////////////////////////////////////////
// Chatper 12 - Sorts  //////////////////////////////////////////
// Chatper 13 - Set and Priority Queues  //////////////////////////////////////////
// Chatper 14 - Hashes  //////////////////////////////////////////
// Chatper 15 - Trees, Part II  //////////////////////////////////////////
// Chatper 16 - Tries  //////////////////////////////////////////
// Chatper 17 - Graphs  //////////////////////////////////////////
// Chatper 18 - Bit Arithmetic  //////////////////////////////////////////
// Chatper 19 - Trees, Part III  //////////////////////////////////////////
// Chatper 20 - Spacial, Logic, Estimation  //////////////////////////////////////////
// Chatper 21 - Optimization  //////////////////////////////////////////


