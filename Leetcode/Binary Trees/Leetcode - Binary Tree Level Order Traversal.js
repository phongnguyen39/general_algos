// https://leetcode.com/explore/interview/card/top-interview-questions-easy/94/trees/628/

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
        if (!this.root) {
            this.root = newNode;
            return;
        }
        // if the newNode val is less than currentNode then it is currentNode.left

        let currentNode = this.root;
        while (true) {
            if (val < currentNode.val) {
                if (!currentNode.left) {
                    currentNode.left = newNode;
                    return;
                }
                currentNode = currentNode.left;
            } else {
                if (!currentNode.right) {
                    currentNode.right = newNode;
                    return;
                }
                currentNode = currentNode.right;
            }
        }

    }

    // convertArrToBST(arr){
    //     let mid = Math.floor(arr.length/2);
    //     let newNode = new Node(arr[mid]);
    //     if(arr.splice(0,mid).length>0){
    //         newNode.left = this.convertArrToBST(arr.splice(0,mid));
    //     }
    //     if(arr.splice(mid+1).length > 0){
    //         newNode.right = this.convertArrToBST(arr.splice(mid+1))
    //     }
    //     return newNode;
    // }

    


}

let newBST = new BST();
newBST.insert(3)
newBST.insert(9)
newBST.insert(20)
newBST.insert(null)
newBST.insert(null)
newBST.insert(15)
newBST.insert(7)
console.log(newBST)
// console.log(newBST.convertArrToBST([3,9,20,null,null,15,7]));
