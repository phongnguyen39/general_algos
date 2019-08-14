let sizeof = require('object-sizeof')

// Comparing different JS Objects

let arr = ['a','b','c']

// MAP ////////////////////////////////////////
let newMap = new Map();
// adding array elements to Map
let h = 0;
while(arr.length > h){
    newMap.set(arr[h], 1);
    h++;
}

console.log('***********************************')
console.log('Bytes Map: ',sizeof(newMap))
console.log(newMap)

// DICTIONARY ////////////////////////////////////////
let newDict = {};

// adding array elements to dictionary
let i = 0;
while(arr.length > i) {
    newDict[arr[i]] = 1;
    i++
}

console.log('***********************************')
console.log('Bytes Map: ',sizeof(newMap),'\n', 'Bytes Dict: ',sizeof(newDict),'\n','Bytes Set: ',sizeof(newSet))
console.log(newDict)

// SET ////////////////////////////////////////
let newSet = new Set();
let k = 0;
while(arr.length > k) {
    newSet.add([arr[k]]);
    k++;
}

console.log('***********************************')

 

console.log('Bytes Map: ',sizeof(newMap),'\n', 'Bytes Dict: ',sizeof(newDict),'\n','Bytes Set: ',sizeof(newSet))
console.log('***********************************')
console.log(newMap,'\n\n', newDict,'\n\n',newSet)