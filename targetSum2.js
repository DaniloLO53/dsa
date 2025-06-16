//    i
// [1,3,4,7]
//      j

function foo(arr, t) {
    let leftIndex = 0
    let rightIndex = arr.length - 1

    while (leftIndex < rightIndex) {
        if (arr[leftIndex] + arr[rightIndex] > t) {
            rightIndex--
        } else if (arr[leftIndex] + arr[rightIndex] < t) {
            leftIndex++
        } else {
            return [leftIndex + 1, rightIndex + 1]
        }
    }
}

console.log(foo([2, 7, 11, 15], 9))