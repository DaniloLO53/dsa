// Given an array of integers, find the uniques triples which the sum of the elements is equal to zero. The solution should not contain duplicate triples

import mergeSort from '../sort/mergeSort.js'

function foo2(arr) {
    const arrs = []

    for (let i = 0; i < arr.length; i++) {
        let j = arr.length - 1
        let k = i+1

        while (k < j) {
            const sum = arr[i] + arr[k] + arr[j];

            if (sum === 0) {
                arrs.push([arr[i], arr[k], arr[j]])
                break;
            } 
            if (sum < 0) {
                k++
            } else {
                j--
            }
        }
    }

    return arrs
}


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

console.log(foo2([-3,-1,2,-2,4,-1]))

// [-3,-1,2,-2,4,-1] -> order -> [-3,-2,-1,-1,2,4]

//   i
// [-3,-2,-1,-1,2,4]
//      k         j