let sizeof = require('object-sizeof')

// Comparing different JS Objects
// MAP - respects order, stores key:value, keys can be objects & primiatives
// DICT - does not respect order, stores key:value, keys can only be primitives
// Set - stores only unique keys

let arr = ['a','b','c']

// DICTIONARY ////////////////////////////////////////
let newDict = {};

// adding array elements to dictionary
let i = 0;
while(arr.length > i) {
    newDict[arr[i]] = 1;
    i++
}

console.log('***********************************')
console.log(Object.keys(newDict))
console.log('Bytes Dict: ',sizeof(newDict))
console.log(newDict)
console.log('Accessed: ', newDict['a'])

// MAP ////////////////////////////////////////
let newMap = new Map();
// adding array elements to Map
let h = 0;
while(arr.length > h){
    newMap.set(arr[h], 1);
    h++;
}

console.log('***********************************')
console.log(Object.keys(newMap)) // returns empty array
console.log('Bytes Map: ',sizeof(newMap))
console.log(newMap)
console.log('Accessed: ', newMap.has('a'))

// SET ////////////////////////////////////////
let newSet = new Set();
let k = 0;
while(arr.length > k) {
    newSet.add(arr[k]);
    k++;
}

console.log('***********************************')
console.log(Object.keys(newSet)) // returns empty array 
console.log('Bytes Set: ',sizeof(Object.keys(newSet)))
console.log(newSet)
