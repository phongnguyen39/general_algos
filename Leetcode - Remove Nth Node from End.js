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

    removeNth(n){
        let count = 0;
        
        let currentNode = this.head;
        while(currentNode != null){
            count++;
            currentNode = currentNode.next;
        }

        if(this.head.val == n && count == 1) {
            this.head = null;
            return head;
        }
        
        // after we get the count, we subtract n from it to find stop position
        let removeNode = count - n+1;
        console.log(removeNode, count, n)
        let runner = this.head;
        let runner1 = runner.next;

        // what if we set the n to be .next.next.next?
        let arr = []
        while(runner1 != null){
            if(runner.val == removeNode){
                console.log('Runner',runner.val, 'Runner1', runner1.val)
                runner.next = runner1.next;
            }
            arr.push(runner.val)   
            runner = runner.next;
            runner1 = runner1.next;  
        }
        console.log(arr)
        return this.head;
    }
}

let sll = new SLL();
sll.append(1);
sll.append(2);
// sll.append(3);
// sll.append(4);
// sll.append(5);
sll.removeNth(2);
console.log(sll)

