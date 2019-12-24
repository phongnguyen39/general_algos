/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
​
// [1,null,2,3,4]
var boundaryOfBinaryTree = function(root) {
//     find left boundary => left array
    // find right boundary => right array
    // find leaf nodes => leaf array
    // concat nodes, iterate, add to set, check for dups, then push to output array
    
    if(!root) {
        return [];
    }
​
    // left
    let leftArr = [];
    let currentNode = root;
    
    if(!currentNode.left && root) {
        leftArr.push(currentNode);
    }  else {
    while(currentNode != null) {
        if(currentNode.left) {
            leftArr.push(currentNode);
            currentNode = currentNode.left;
        } else {
            if(currentNode.right) {
                leftArr.push(currentNode);
                currentNode = currentNode.right;
            } else {
                leftArr.push(currentNode);
                break;
            }
        }
    }
    }
    
    // right
    let rightArr = [];
    currentNode = root;
    
    if(!currentNode.right && root) {
        rightArr.push(currentNode);
    }  else {
   while(currentNode != null) {
        if(currentNode.right) {
            rightArr.push(currentNode);
            currentNode = currentNode.right;
        } else {
            if(currentNode.left) {
                rightArr.push(currentNode);
                currentNode = currentNode.left;
            } else {
                rightArr.push(currentNode);
                break;
            }
        }
    }
    }
    
    // leaves
    let leaves = [];
    currentNode = root;
    let leftT = traverse(currentNode.left);
    let rightT = traverse(currentNode.right);
    function traverse(node) {
        if(!node || node == null) {
            return;
        }
        if(node.right == null && node.left == null) {
            leaves.push(node)    
        }
        
        return traverse(node.left), traverse(node.right);
    }
    // console.log(leftArr, leaves, rightArr)
    let arrProcess = leftArr.concat(leaves).concat(rightArr.reverse());
    // console.log(arrProcess)
    
    let output = []
    let nodeSet = new Set();
    for(let i = 0; i < arrProcess.length; i++) {
        if(!nodeSet.has(arrProcess[i])) {
            nodeSet.add(arrProcess[i]);
            output.push(arrProcess[i].val)
        } 
    }
    
    // console.log(output)
    return output;
};