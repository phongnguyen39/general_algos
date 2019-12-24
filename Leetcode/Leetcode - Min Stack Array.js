/**
 * initialize your data structure here.
 */
var MinStack = function() {
     this.stack = [];
  };
  
  /** 
   * @param {number} x
   * @return {void}
   */
  MinStack.prototype.push = function(x) {
    this.stack.push(x);
      return this;
  };
  
  /**
   * @return {void}
   */

   
  MinStack.prototype.pop = function() {
       
    this.stack.pop();
      return this;
  };
  
  /**
   * @return {number}
   */
  MinStack.prototype.peek = function() {
//   MinStack.prototype.top = function() {
        // top is the last item added 
        this.stack[this.stack.length -1];
        console.log(this.stack[this.stack.length -1])
      return this;  
  };
  
  /**
   * @return {number}
   */
  MinStack.prototype.getMin = function() {
    
    let min = Infinity;
    
    for(let i = 0; i < this.stack.length; i++) {
        if(this.stack[i] < min) {
            min = this.stack[i];
        }
    }
      return min;
  };
  
  /** 
   * Your MinStack object will be instantiated and called as such:
   * var obj = new MinStack()
   * obj.push(x)
   * obj.pop()
   * var param_3 = obj.top()
   * var param_4 = obj.getMin()
   */

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
  
  console.log(newStack)