// Coding Dojo Algorithm Challenges
// The Dojo Collection
// Version 1.1.7
// Published May 8, 2017

// Preface, I skipped passed the foundational assignments to focus on areas that I warranted further practice or understanding. All problems will have a page and chapter reference.  TO VIEW THE OUTPUT OF EACH ASSIGNMENT, SIMPLY UNCOMMENT THAT SECTION OF CODE

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

// The Final Countdown...  //////////////////////////////////////////
// The Final Countdown...  //////////////////////////////////////////
// The Final Countdown...  //////////////////////////////////////////
// The Final Countdown...  //////////////////////////////////////////
// The Final Countdown...  //////////////////////////////////////////
// The Final Countdown...  //////////////////////////////////////////
// The Final Countdown...  //////////////////////////////////////////
// The Final Countdown...  //////////////////////////////////////////



// Chatper 2 - Fundamentals, Part II //////////////////////////////////////////
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


