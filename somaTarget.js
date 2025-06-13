//  i       k
// [1,2,6,3,4,4]

function foo(arr, target) {
    let i = 0
    let j = arr.length-1

    while (i < j) {
        if (arr[i] + arr[j] === target) return true
        if (arr[i] + arr[j] < target) i++
        if (arr[i] + arr[j] > target) j--
    }
    return false
}

console.log(foo([1,2,3,4,7,9], 20))