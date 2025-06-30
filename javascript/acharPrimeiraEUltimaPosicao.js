// [1,3,4,5,5,7,8]
//          i

function foo(arr, target) {
    const result = [-1,-1]
    let found = false

    for (let i = 0; i < arr.length; i++) {
        if (found === false && arr[i] === target) {
            result[0] = i
            found = true
        } else if (found === true && arr[i] === target) {
            result[1] = i
        }
    }

    return result
}

console.log(foo([5, 7, 7, 8, 8, 8, 8, 10], 8))