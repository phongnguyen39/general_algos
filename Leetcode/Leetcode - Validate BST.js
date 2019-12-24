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

    traverse() {
        function helper(node){
            //this is the base case where you return when you are on the null of a leaf node
            if(node == null) return;
            //this is where preorder logic should go

            helper(node.left);
            //this is where in order logic should go 
            // [1,2,3,4,5,6,7,8]
            console.log("This is inorder traversal", node.val);
            helper(node.right);
            //this is where postorder logic should go
            
 
        }
        helper(this.root);
    }

    
}
let bst = new BST() // true
let bst2 = new BST(); // false
bst.insert(5);
bst.insert(2);
bst.insert(1);
bst.insert(3);
bst.insert(7);
bst.insert(8);
bst.insert(6);
bst.traverse();


// bst.isValidBST(this.root);
// console.log(bst.isValidBST(this.root))
// BST.isValidBST()