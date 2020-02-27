var sumZero = function(n) {
  // if n is even then have equal number of neg and pos integers in array, but they all must be unique
  // arr doesn't have to be sorted
  // if odd then handle it

  let arr = [];
  if(n ==1) {
      arr.push(0)
  }

  let x = n.reduce(function(a,b){
      return a+b;
  })

  console.log(x)
  return arr;
};
sumZero(5) // [-7,-1,1,3,4]) [-5,-1,1,2,3] , [-3,-1,2,-2,4].

sumZero(3) // [-1,0,1]

sumZero(1) // [0]

// constraints 1 <= n <= 1000