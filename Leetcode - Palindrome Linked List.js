// https://leetcode.com/problems/palindrome-linked-list/

// return true if SLL is a palindrome

class Node{
    constructor(val){
        this.val = val;
        this.next = null;
    }
}

class SLL {
    constructor(){
        this.head = null;
        this.tail = null;
    }

    append(val){
        let newNode = new Node(val);

        if(!this.head){
            this.head = newNode;
            this.tail = newNode;
            return;
        }
        
        this.tail.next = newNode;
        this.tail = newNode;
        return;
    }
}

let sll = new SLL();
sll.append(1)
sll.append(2)
sll.append(2)
sll.append(1);
console.log(sll)