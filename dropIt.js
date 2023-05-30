function dropElements(arr, func) {
  while (arr.length > 0 && !func(arr[0])) {
    arr.shift();
  }
  return arr;
}
console.log(
  dropElements([1, 2, 3, 4], function (n) {
    return n > 5;
  })
);

function dropElements(arr, func) {
  console.log(func)
  let sliceIndex = arr.findIndex(func);
  console.log(sliceIndex);
  return arr.slice(sliceIndex >= 0 ? sliceIndex : arr.length);
}

// test here
console.log(
  dropElements([1, 2, 3, 4], function (n) {
    return n >= 3;
  })
);


