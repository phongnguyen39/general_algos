// https://www.hackerrank.com/challenges/ctci-bubble-sort/problem?h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=sorting

function countSwaps(a) {
    let numSwaps = 0;

    for(let i = 0; i < a.length; i++) {
        for(let j = 0; j < a.length -1 ; j++) {
            
            if(a[j] > a[j+1]) {
            let temp = a[j];
            a[j] = a[j + 1];
            a[j+1] = temp;
            numSwaps++;
            }
            
        }
    }

    var firstElement = a[0];
    var lastElement = a[a.length - 1]
    console.log('Array is sorted in ' + numSwaps + ' swaps.');
    console.log('First Element: ' + firstElement);
    console.log('Last Element: ' + lastElement);

}
countSwaps([6,4,1])
countSwaps([1,2,3])