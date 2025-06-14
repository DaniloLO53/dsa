// [1,3,2,5,4]
// [1,3] [2,5,4]
// [1] [3] [2,5,4]
// [1] [3] [2] [5,4]
// [1] [3] [2] [5] [4]
// [5] [4] -> [4,5]
// [4,5] [2] -> [2,4,5]
// [2,4,5] [3] -> [2,3,4,5]
// [2,3,4,5] [1] -> [1,2,3,4,5]

export default function mergeSort(arr) {
    if (arr.length === 1) return arr

    let middle = Math.floor(arr.length / 2)
    const left = arr.slice(0, middle)
    const right = arr.slice(middle)

    return merge(mergeSort(left), mergeSort(right))
}

function merge(left, right) {
    let leftCur = 0
    let rightCur = 0
    const mergedArr = [] 
    
    while (leftCur < left.length && rightCur < right.length) {
        if (left[leftCur] < right[rightCur]) {
            mergedArr.push(left[leftCur])
            leftCur++
        } else {
            mergedArr.push(right[rightCur])
            rightCur++
        }
    }

    for (let i = leftCur; i < left.length; i++) {
        mergedArr.push(left[i])
    }
    for (let i = rightCur; i < right.length; i++) {
        mergedArr.push(right[i])
    }

    return mergedArr
}

console.log(mergeSort([1,3,2,5,4]))

// ******************* DOWN-TOP (Without recursion) *******************
