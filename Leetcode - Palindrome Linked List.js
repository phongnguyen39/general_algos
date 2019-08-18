// https://leetcode.com/problems/palindrome-linked-list/

// return true if SLL is a palindrome

class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

class SLL {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    append(val) {
        let newNode = new Node(val);

        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
            this.length++;
            return;
        }
        this.tail.next = newNode;
        this.tail = newNode;
        this.length++;
        return;
    }

    isPalindrome() {
        let dict = {};

        if (!this.head) {
            return true;
        }

        // if(this.head.val === this.tail.val && this.length == 2){
        //     return true;
        // }

        let count = 0;
        let seenBefore = 0;
        let currentNode = this.head;

        while (currentNode != null) {
            count++;
            if (dict[currentNode.val] == null) {
                
                dict[currentNode.val] = currentNode.val;
                currentNode = currentNode.next;
                
            } else {
                seenBefore++;
                currentNode = currentNode.next;
            }
        }
        
        if (seenBefore / count == .5) {
            return true;
        }
        
        return false;
    }
}

let sll = new SLL();
// sll.append(0)
// sll.append(0)
sll.append(1)
// sll.append(2)
// sll.append(2)
// sll.append(1);
sll.isPalindrome()
console.log(sll)