// QUEUE data structures
// They are a sequential data structure (FIFO) and considered abstract data types.  It is abstract because there are no requirements on how the queue is constructed.  For instance, a queue could be applied to a SLL or DLL.  In the examples below we will be using SLL.
// Command methods for queues:  enqueue(val), dequeue(), front(), contains(val), isEmpty(), size()


// First we must define a class to construct a node and another class to construct the singly linked queue.

function node(value){
    this.val = value;
    this.next = null;
}

function slQueue(){
  var head = null;
  var tail = null;
}

// Second we instantiate a new queue and add two nodes to it. node(7) is set to head and node(18) to the tail
  var newQueue = new slQueue;
  newQueue.head = new node(7);
  newQueue.tail = new node(18);
  newQueue.head.next = newQueue.tail;


// Enqueue method adds a value to a list.  Each value is stored in a node.
function enqueue(val){

  // Instantiates a new node with value passed through parameter
  var newNode = new node(val);

  // Point the tail.next to the new node
  newQueue.tail.next = newNode;

  // Set the tail to new node
  newQueue.tail = newNode;
}
enqueue(1);
enqueue(2);

console.log(newQueue)


