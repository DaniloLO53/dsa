// [1,3,2,5,4]
// [1,3] [2,5,4]
// [1] [3] [2] [5,4]
//  i
// [1] [3] [2] [5] [4]
//      j

// [1,3] [2] [5] [4]
//      i       j
// [1,2,3] [5] [4]
//

export default function mergeSort(arr) {
    if (arr.length === 1) return arr
    
    let middle = Math.floor(arr.length / 2)
    const left = arr.slice(0, middle)
    const right = arr.slice(middle)

    return merge(mergeSort(left), mergeSort(right))
}

function merge(left, right) {
    const mergedArr = []
    let leftIndex = 0
    let rightIndex = 0

    while (leftIndex < left.length && rightIndex < right.length) {
        if (left[leftIndex] < right[rightIndex]) {
            mergedArr.push(left[leftIndex])
            leftIndex++
        } else {
            mergedArr.push(right[rightIndex])
            rightIndex++
        }
    }

    for (let i = leftIndex; i < left.length; i++) {
        mergedArr.push(left[i])
    }
    for (let i = rightIndex; i < right.length; i++) {
        mergedArr.push(right[i])
    }

    return mergedArr
}

// console.log(mergeSort([1,3,2,5,4]))

// ******************* DOWN-TOP (Without recursion) *******************
