//  i
// [1,1,,1,1,2,2,2,3,3,4,6,7,7,7]
//  x


function foo3(arr) {
    let x = 0

    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] !== arr[i+1]) {
            x++
            arr[x] = arr[i+1]     
        }
    }

    return arr.slice(0, arr[x] - 1)
}

function foo2(arr) {
    let insertIndex = 0

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== arr[i+1]) {
            arr[insertIndex] = arr[i]
            insertIndex++
        }
    }

    return arr.slice(0, insertIndex)
}

function foo(arr) {
    const newArr = []

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === arr[i+1]) continue
        newArr.push(arr[i])  
    }

    return newArr
}



// console.log(foo([1,2,2,2,3,3,4,6,7,7,7]))
console.log(foo3([1,1,1,1,2,2,2,3,3,4,6,7,7,7]))