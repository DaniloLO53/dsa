// [1,]
//  i
// [3,4,4,5,7]
//    j
// [1,5,6]

function foo(arr1, arr2) {
    let i = 0
    let j = 0
    const newArr = []

    while (i < arr1.length || j < arr2.length) {
        if (arr1[i] < arr2[j]) {
            newArr.push(arr1[i])
            i++
        } else {
            newArr.push(arr2[j])
            j++
        }
    }

    for (let k = i; k < arr1.length; k++) {
        newArr.push(arr1[k])
    }
    for (let k = j; k < arr2.length; k++) {
        newArr.push(arr2[k])
    }

    return newArr
}

const nums1 = [1, 5, 5, 10];
const nums2 = [5, 10, 11];
console.log(foo(nums1, nums2))