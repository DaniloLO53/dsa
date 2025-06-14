//    i
//        j
// [5,1,4,3,2]
// [1,5,4,3,2]
// [1,4,5,3,2]
// [1,4,3,5,2]
// [1,4,3,2,5]
// [1,3,4,2,5]
// [1,3,2,4,5]
// [1,2,3,4,5]


function foo(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
        for (let j = 0; j < i; j++) {
            if (arr[j] > arr[j+1]) {
                const temp = arr[j]
                arr[j] = arr[j+1]
                arr[j+1] = temp
            }
        }
    }
    return arr
}

console.log(foo([5,1,4,3,2]))