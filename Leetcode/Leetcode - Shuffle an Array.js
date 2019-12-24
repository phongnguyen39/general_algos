// https://leetcode.com/explore/interview/card/top-interview-questions-easy/98/design/670/

class Shuffle {
    constructor(nums){
        this.nums = nums;
    }

    reset(){
        return this.nums;        
    }

    shuffle(){
        let result = this.nums.slice();
    
        // console.log(this.nums, result)
        for(let i = 0; i < result.length; i++) {
            let rand = Math.floor(Math.random()*result.length)
            let temp = result[i];
            result[i] = result[rand];
            result[rand] = temp;
        }
        // console.log(this.nums)
        // console.log(this.nums, this.result)
        return result;
    }

 
}

let s = new Shuffle([1,2,3,4])
console.log(s.reset());
console.log(s.shuffle());
console.log(s.reset());
console.log(s.shuffle());
console.log(s.reset());
console.log(s.shuffle());
console.log(s.reset());
console.log(s.shuffle());
console.log(s.reset());

