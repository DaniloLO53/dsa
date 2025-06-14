//                i
// [1,2,2,3,4,6,7,7]

function foo(arr) {
    let i = 1
    const newArr = [arr[0]]

    while (i < arr.length) {
        if (arr[i] > arr[i-1]) {
            newArr.push(arr[i])
        }
        i++
    }

    return newArr
}

function foo(arr) {
    const newArr = []

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === arr[i+1]) continue
        newArr.push(arr[i])  
    }

    return newArr
}

console.log(foo([1,2,2,3,4,6,7,7]))