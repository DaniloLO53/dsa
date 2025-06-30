//  i
// [6,5,4,1,7,4,1,3]
//               j
// area = menor(arr[i], arr[j]) * (j - i)

function foo(arr) {
    let left = 0
    let right = arr.length - 1
    let maxArea = 0

    while (left < right) {
        let width = right - left
        let smallerHeight = Math.min(arr[left], arr[right])
        let currentArea = width * smallerHeight

        maxArea = Math.max(maxArea, currentArea)

        if (arr[right] < arr[left]) {
            right--
        } else {
            left++
        }
    }

    return maxArea
}

console.log(foo([1, 8, 6, 2, 5, 4, 8, 3, 7]))