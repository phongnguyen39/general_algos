// https://www.hackerrank.com/challenges/minimum-swaps-2/problem?h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=arrays

// Sort in ascending order from smallest to largest   we can swap any two numbers
// End goal is to find the minimum number of swaps required

let swaps = 0;
// const arr = [7,1,3,2,4,5,6]

function minimumSwaps(arr){
    var temp = 0;
    // swapping two items  (using temp)
    // condition is that lesser of both elements moves to left
    var i = 0;
    while (arr[i] > arr[i + 1]){
        for(var i = 0; i < arr.length; i++){
            
        }
        console.log(i, arr[i], arr[i+1])
        temp = arr[i+1];
        arr[i+1] =  arr[i];
        arr[i] = temp;
        i++;
    }
    console.log(arr)
}
minimumSwaps([7,1,3,2,4,5,6])


