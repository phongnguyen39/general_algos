// https://khan4019.github.io/front-end-Interview-Questions/js1.html#isPrime

// works by only counting multiples of 10 when iterating through. It gets tricky when you reach hundreds, 100 => 2 zeroes
function countZero(n){
  var count = 0;
  while(n>0){
   count += Math.floor(n/10);
   n = n/10;
  }
  return count;
}

console.log(countZero(2014)); // 2
