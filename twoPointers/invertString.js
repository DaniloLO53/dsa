// Write a function that reverses a string. The input string is given as an array of
// characters s. You must modify the input array "in-place" using constant extra memory
// (O(1)).

function foo(arr) {
    let i = 0
    let j = arr.length - 1

    while (i < j) {
        let temp = arr[i]
        arr[i] = arr[j]
        arr[j] = temp
        i++
        j--
    }

    return arr
}

//           j
// abracadabra
// i


const arr = 'abracadabra'.split('')
console.log(foo(arr))
