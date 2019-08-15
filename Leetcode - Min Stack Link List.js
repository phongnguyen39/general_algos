var MinStack = function () {
    this.top = null;
    this.bottom = null;
};


let arr = [];
MinStack.prototype.push = function (x) {
    let newNode = new Node(x);
    // arr.push(newNode.value);
    if (!this.bottom) {
        this.top = newNode;
        this.bottom = newNode;
        return this;
    }
    
    let newTop = this.top;
    this.top = newNode;
    this.top.next = newTop;

    return this;
};

MinStack.prototype.pop = function () {

    if (!this.top) {
        return false;
    }

    // edge case, clears the stack completely
    if (this.top === this.bottom) {
        this.top = null;
        this.bottom = null;
        return this;
    }

    // just set the top to top.next which is null
    this.top = this.top.next;
    return this;
};

MinStack.prototype.peek = function () {
    // this should be top, not peek, but it must be a protected word
// MinStack.prototype.top = function () {
    if (!this.top) {
        return false;
    }
    // console.log(this.top.value)
    return this.top.value;
};


MinStack.prototype.getMin = function () {
    // want to traverse through stack, compare each value to min, if less than man, set it
    if(!this.bottom) {
        return false;
    }

    let min = Infinity;
    let currentNode = this.top;
    console.log(currentNode.value, 'tooppp')

    // the way the stack is built, it traverses from top to bottom
    while(currentNode != null) {
        console.log('CURRENT ',currentNode.value )
        if(currentNode.value < min) {
            min = currentNode.value;
        }
        currentNode = currentNode.next; 
    }
    console.log("MIN VALUE:", min)
    return min;
};

class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}


let newStack = new MinStack();

newStack.push(2);
newStack.push(-3);
newStack.push(0);
newStack.push(-3);
newStack.push(-3);
newStack.push(-40);
newStack.pop();
newStack.peek(); // this should be top, not peek, but it must be a protected word
newStack.getMin();
console.log(arr)
console.log(newStack)

