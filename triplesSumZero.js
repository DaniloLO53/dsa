import mergeSort from './mergeSort.js'


function foo(arr) {
    const newArr = []
    const sortedArr = mergeSort(arr)
    
    for (let k = 0; k < sortedArr.length - 1; k++) {
        let i = k+1
        let j = sortedArr.length - 1
        while (i < j) {
            if (sortedArr[i] + sortedArr[j] + sortedArr[k] === 0) {
                newArr.push([sortedArr[i], sortedArr[j], sortedArr[k]])
                break
            } else if (sortedArr[i] + sortedArr[j] + sortedArr[k] < 0) {
                i++
            } else {
                j--
            }
        }
    }

    return newArr
}

// console.log(mergeSort([-3,-1,2,-2,4,-1]))
console.log(foo([-3,-1,2,-2,4,-1]))
// [-3,-1,2,-2,4,-1,5,-4]

//      k
// [-4,-3,-2,-1,1,2,4,5]
//         i          j 