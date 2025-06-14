// [2,1,3,4,8,5,7,6]
// [2,1,3] [4] [8,5,7,6]
// [2,1,3]
// [2,1] [3]
// [1,2]
// [1] [2]
// [1] [2] [3] [4] [8,5,7,6]
// [5,6,7,8]
// [5] [6] [7,8]
// [5] [6] [7] [8]
// [1] [2] [3] [4] [5] [6] [7] [8]

function quickSort(arr, left = 0, right = arr.length - 1) {
    if (left < right) {
        const pivotIndex = sort(arr, left, right)
        quickSort(arr, left, pivotIndex-1)
        quickSort(arr, pivotIndex+1, right)
    }


    return arr
}

function sort(arr, left, right) {
    let pivot = arr[right]
    let i = left - 1
    let j = left

    while (j < right) {
        if (arr[j] < pivot) {
            i++
            let temp = arr[i]
            arr[i] = arr[j]
            arr[j] = temp 
        }
        j++
    }

    let temp = arr[i+1]
    arr[i+1] = arr[j]
    arr[j] = temp

    return i+1
}

// console.log(sort([2,1,3,6,8,5,7,4]))
console.log(quickSort([2,1,3,6,8,5,7,4]))