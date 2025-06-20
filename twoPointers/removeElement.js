// Given an array of integers nums and an integer val, remove all occurrences of val in
// nums "in-place". The order of elements that are not equal to val may be changed.
// Return k, the number of remaining elements that are not equal to val.

function foo(arr, v) {
    let j = 0

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== v) {
            arr[j] = arr[i]
            j++
        }
    }

    return arr.length - j
}

//  j
// [5,2,1,8,2,9,3,1,2]
//      i

const arr1 = [5,2,1,8,2,9,3,1,2]
const arr2 = [1,1]
console.log(foo(arr1, 2))
console.log(foo(arr2, 1))
