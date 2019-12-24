// https://leetcode.com/explore/interview/card/top-interview-questions-easy/94/trees/625/

class Node {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

class BST {
    constructor() {
        this.root = null;
    }

    insert(val) {
        let newNode = new Node(val);

        if (!this.root) {
            this.root = newNode;
            return;
        }

        let node = this.root

        function recursiveInsert(node, newNode){
            if (newNode.val < node.val) {
                if (!node.left) {
                    node.left = newNode;
                } else {
                    this.recursiveInsert(node.left, newNode)
                }
            }
            else {
                if(!node.right) {
                    node.right = newNode;
                } else {
                    this.recursiveInsert(node.right, newNode)
                }
            }
        }
        recursiveInsert(node,newNode)


    }

    isValidBST(node) {

        if (!node) return true;

        // base case to exit recursion
        if (node.left == null && node.right == null || node.left == null || node.right == null) {
            console.log(true);
            return true;
        }

        if (node.left.val >= node.val || node.right.val <= node.val) {
            console.log(false)
            return false;
        }
        return this.isValidBST(node.left) && this.isValidBST(node.right)
    }

    traverse() {
        function helper(node) {

            //this is the base case where you return when you are on the null of a leaf node
            if (node == null) return;

            //this is where preorder logic should go
            // [5,2,1,3,7,6,8] (one subtree then the other)preorder prints entire left substree then the next
            // console.log("This is preorder traversal", node.val);

            helper(node.left);
            //this is where inorder logic should go 
            // [1,2,3,5,6,7,8] (left to right) sequential from furthest left leaf node to furtherest right leaf node; with everything in between
            // console.log("This is inorder traversal", node.val);

            helper(node.right);
            //this is where postorder logic should go
            // [1,3,2,6,8,7,5] (bottom up)goes from left leaf level up to parent, then right leaf layer to parent then root finally.
            console.log("This is postorder traversal", node.val);
        }
        helper(this.root);
    }
}
let bst = new BST() // true
// bst.insert(5);
// bst.insert(2);
// bst.insert(1);
// bst.insert(3);
// bst.insert(7);
// bst.insert(8);
// bst.insert(6);

bst.insert(1)
bst.insert(2)
bst.insert(3)
// bst.insert(null)
// bst.insert(null)
bst.insert(4)
bst.insert(5)
console.log(bst)
// bst.traverse();


// bst.isValidBST(this.root);
// console.log(bst.isValidBST(this.root))
// BST.isValidBST()