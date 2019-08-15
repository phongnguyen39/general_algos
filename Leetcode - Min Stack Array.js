/**
 * initialize your data structure here.
 */
var MinStack = function() {
    this.top = null;
      this.bottom = null;  
  };
  
  /** 
   * @param {number} x
   * @return {void}
   */
  MinStack.prototype.push = function(x) {
  let newNode = new Node(x);    
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
  
  /**
   * @return {void}
   */
  MinStack.prototype.pop = function() {
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
  
  /**
   * @return {number}
   */
  MinStack.prototype.top = function() {
      if (!this.top) {
          return false;
      }
      
      return this.top.value;  
  };
  
  /**
   * @return {number}
   */
  MinStack.prototype.getMin = function() {
          if(!this.bottom) {
          return false;
      }
  
      let min = Infinity;
      let currentNode = this.top;
      
  
      // the way the stack is built, it traverses from top to bottom
      while(currentNode != null) {
          
          if(currentNode.value < min) {
              min = currentNode.value;
          }
          currentNode = currentNode.next; 
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