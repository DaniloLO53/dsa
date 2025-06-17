// a man, a plan, a canal: panama
// amanaplanacanalpanama
// i                   k

function foo(str) {
    let str2 = str.replace(/[^0-9a-z]/gi, '')

    let left = 0
    let right = str2.length - 1

    while (left < right) {
        if (str2[left] !== str2[right]) return false
        left++
        right--
    }
    return true
}

console.log(foo("a man, a plan, a canal: panama"))
