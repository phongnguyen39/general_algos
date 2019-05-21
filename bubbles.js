function bubble(arr) {

    // sort the array in ascending order
    // using for loop ////////////

    for (var i = 0; i < arr.length; i++) {
        for (var j = 0; j < arr.length - 1 - i; j++) {
            if (arr[j] > arr[j+1]) {
                temp = arr[j]
                arr[j] = arr[j + 1]
                arr[j + 1] = temp
                console.log(arr)
            }
        }
    }
    console.log(arr)

    // Explanation of the solution.  i = 0 moves the 5 to the very end, i = 1 moves 4 to the very end, i = 2 moves 3 to the very end, and so on.
}
bubble([5, 4, 3, 2, 1])