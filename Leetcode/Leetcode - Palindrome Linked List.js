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

        let fast = head;
        let slow = head;

        while (fast.next !== null && fast.next.next != null) {
            slow = slow.next;
            fast = fast.next.next;

        }
        let rev = reverse(slow);

        while (head != null && rev != null) {
            if (this.head.val !== rev.val) {
                return false
            }
            head = head.next;
            rev = rev.next;
        }
        return true;

        
    }
    reverse(head){
        let current = head;
        let prev;
        let next;
        while(current!==null){
            next = current.next;
            current.next = prev;
            prev = current
            current = next;
        }     
        head = prev;
        return head;
    }
}

let sll = new SLL();

sll.append(1)
sll.append(0)
sll.append(0)
// sll.append(2)
// sll.append(2)
// sll.append(1);
sll.isPalindrome()
