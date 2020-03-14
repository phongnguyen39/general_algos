// https://aonecode.com/find-the-left-view-of-binary-tree

// find the left view of the binary tree

// first enter the root
// if there's no node, then exit
// condition to check if there is a node to the left, can use recursion or while loop
// output to an array at each step
// binary tree, use recursion so we are finding the this.left node each time

let bstArr = [];
let btArr = [];
let view = [];

class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BT {
    constructor(){
        this.root = null;
    }
    
    insert(value) {
        let newNode = new Node(value);
        if(!this.root) {
            this.root = newNode;
            btArr.push(newNode.value);
            return;
        }

        var currentNode = this.root; 
        var parentNode; 
        while (true){ 
            parentNode = currentNode; 
            if (value < currentNode.value) { 
                current = current.left; 
                if (current == null){ 
                    parent.left = newNode;
                    btArr.push(newNode.value);
                    break; 
                } 
            } else { 
                currentNode = currentNode.right; 
                if (currentNode == null){ 
                    parentNode.right = newNode;
                    btArr.push(newNode.value); 
                    break; 
                } 
            } 
        } 
    }

    
    singleView () {
        let currentNode = this.root;  // declare var, so this.root is stored in cN address
        while(currentNode != null) {
            view.push(currentNode.value);
            currentNode = currentNode.right; // ref'd, so cN now moves to cN.next location
        }
        return;
    }
}

let myBT = new BT();
myBT.insert(1)
myBT.insert(2)
myBT.insert(3)
myBT.insert(4)
myBT.insert(5)
myBT.insert(6)
myBT.insert(7)
myBT.insert(8)
myBT.insert(9)
myBT.singleView()
console.log(myBT);
console.log(btArr);
console.log(view)



// SUMMARY, CREATED A BST, WHICH HAS ORDERING, BUT THE QUESTION CALLED FOR A BT, WHICH HAS NO ORDERING.

// class BST {
//     constructor() {
//         this.root = null;
//     }

//     insert(value) {
//         let newNode = new Node(value);
//         if (!this.root) {
//             this.root = newNode;
//         } else {

//             let currentNode = this.root;
//             while (currentNode != null) {
//                 if (value < currentNode.value) {
//                     if (!currentNode.left) {
//                         currentNode.left = newNode;
//                         bstArr.push(currentNode.value);
//                         return this;
//                     }
//                     currentNode = currentNode.left;
//                 } else {
//                     if (!currentNode.right) {
//                         currentNode.right = newNode;
//                         bstArr.push(currentNode.value);
//                         return this;
//                     }
//                     currentNode = currentNode.right;
//                 }
//             }
//         }
//         return this;
//     }
// }

// let myBST = new BST();
// myBST.insert(1)
// myBST.insert(2)
// myBST.insert(3)
// myBST.insert(4)
// myBST.insert(5)
// myBST.insert(6)
// myBST.insert(7)
// myBST.insert(8)
// myBST.insert(9)
// console.log(bstArr)
// console.log(myBST);