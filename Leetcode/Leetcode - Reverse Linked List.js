// https://leetcode.com/explore/interview/card/top-interview-questions-easy/93/linked-list/560/

class Node {
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
        let newNode = new Node(val)
        
        if(!this.head){
            this.head = newNode;
            this.tail = newNode;
            return;
        }
        
        this.tail.next = newNode;
        this.tail = newNode;
        return;
    }

    reverse(){
        let currentNode = this.head;
        let runnerNode = currentNode.next;
        let temp = runnerNode.next;

        while(temp != null) {
            console.log(currentNode.val, runnerNode.val, temp.val)
            runnerNode.next = currentNode;
            currentNode = currentNode.next;
            temp = temp.next;
        }
    }

    
}

let sll = new SLL();
sll.append(1);
sll.append(2);
sll.append(3);
sll.append(4);
sll.append(5)
sll.reverse();
console.log(sll)

