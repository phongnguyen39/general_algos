// https://leetcode.com/explore/interview/card/top-interview-questions-easy/94/trees/625/

class Node {
    constructor(val) {
        this.val = val;
        this.right = null;
        this.left = null;
    }
}

class BST {
    constructor() {
        this.root = null;
    }

    insert(val) {
        let newNode = new Node(val);
        console.log(newNode)
        if(!this.root) {
            this.root = newNode;
            return;
        }
        // if the newNode val is less than currentNode then it is currentNode.left

        let currentNode = this.root;
        while(true) {
            if(val < currentNode.val) {
                if(!currentNode.left){
                    currentNode.left = newNode;
                    return;
                }
                currentNode = currentNode.left;
            } else {
                if(!currentNode.right) {
                    currentNode.right = newNode;
                    return;
                }
                currentNode = currentNode.right;
            }
        }
        }

    isValidBST(node){
        
        if(!node) return true;

        // base case to exit recursion
        if(node.left == null && node.right == null || node.left == null || node.right == null) {
            console.log(true);
            return true;
        }

        if(node.left.val >= node.val || node.right.val <= node.val) {
            console.log(false)
            return false;
        }
        return this.isValidBST(node.left) && this.isValidBST(node.right)
    }

    
}
let bst = new BST() // true
let bst2 = new BST(); // false
bst.insert(1);
bst.insert(1);
// bst.insert(3);
bst.isValidBST(this.root);
console.log(bst.isValidBST(this.root))


// bst2.insert(5);
// bst2.insert(1);
// bst2.insert(4);
// bst2.insert(3);
// bst2.insert(6);
// console.log(bst)

// BST.isValidBST()