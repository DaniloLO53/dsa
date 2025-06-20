// Move zeros to the end of array and keep the order of elements

//    j
// [2,0,1,0,3,4,12,9]
//      i

function foo4(arr) {
  let j = 0

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== 0) {
      arr[j] = arr[i]
      j++
    }
  }
  for (let i = j; i < arr.length; i++) {
    arr[i] = 0
  }

  return arr
}

function foo3(arr) {
  let j = 0;

  for (let i = 0; i < arr.length; i++) { 
    if (arr[i] !== 0) {
      arr[j] = arr[i];
      j++;
    }
  }

  for (let i = j; i < arr.length; i++) {
    arr[i] = 0;
  }

  return arr;
}

function foo2(arr) {
  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
    if (arr[left] === 0) {
      while (arr[right] === 0) right--;
      let temp = arr[left];
      arr[left] = arr[right];
      arr[right] = temp;
    }
    left++;
  }

  return arr;
}

function foo(arr, left = 0, right = arr.length - 1) {
  if (left >= right) {
    return arr;
  }

  while (arr[right] === 0) {
    right--;
  }
  if (arr[left] === 0) {
    let temp = arr[left];
    arr[left] = arr[right];
    arr[right] = temp;
    left++;
    return foo(arr, left, right);
  }
  left++;
  return foo(arr, left, right);
}

console.log(foo4([0, 9, 2, 0, 1, 0, 3, 12, 0]));
