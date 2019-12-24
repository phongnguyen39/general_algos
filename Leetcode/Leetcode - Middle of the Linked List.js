// https://leetcode.com/problems/middle-of-the-linked-list/




class ListNode {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

class LinkedList {
    constructor(){
        this.head = null;
        this.tail = null;
    }
    append(val){
        let newNode = new ListNode(val);
        if(!this.head) {
            this.head = newNode;
            this.tail = newNode;
            return;
        }
        this.tail.next = newNode;
        this.tail = newNode;
        return;
    }

    middleNode(){
        // traverse the list, get the length /2
        let length = 0;
        let listArray = [];
        let currentNode = this.head;
        while(currentNode!=null){
            listArray.push(currentNode);
            currentNode = currentNode.next;
            length++;
        }
        console.log(listArray.length/2)
        let mid = Math.floor(listArray.length/2);
        console.log('middle',listArray[mid])
        return listArray[mid];
    }
}

let newList = new LinkedList();
newList.append(1);
newList.append(2);
newList.append(3);
newList.append(4);
newList.append(5);
newList.append(6);
newList.middleNode();
console.log(newList)