// [2,10,7,12]

// mergeSort([2,10,7,12])

export default function mergeSort(arr) {
    if (arr.length === 1) return arr

    let middle = Math.floor(arr.length / 2)
    const left = arr.slice(0, middle)
    const right = arr.slice(middle)

    return merge(mergeSort(left), mergeSort(right))
}

// Função auxiliar que mescla dois arrays ordenados
function merge(left, right) {
    let leftIndex = 0
    let rightIndex = 0
    const newArr = []

    while (leftIndex < left.length && rightIndex < right.length) {
        if (left[leftIndex] < right[rightIndex]) {
            newArr.push(left[leftIndex])
            leftIndex++
        } else {
            newArr.push(right[rightIndex])
            rightIndex++
        }
    }

    for (let i = leftIndex; i < left.length; i++) {
        newArr.push(left[i])
    }
    for (let i = rightIndex; i < right.length; i++) {
        newArr.push(right[i])
    }

    return newArr
}