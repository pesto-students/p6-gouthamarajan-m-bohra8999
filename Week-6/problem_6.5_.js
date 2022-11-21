function isPairExist(arr, n) {
  arr = arr.sort((a, b) => a - b);
  let [i, j] = [0, 1];
  while (i < arr.length && j < arr.length) {
    if (i != j && arr[j] - arr[i] == n) {
      return 1;
    } else if (arr[j] - arr[i] < n) j++;
    else i++;
  }
  return 0;
}

console.log(isPairExist([5, 10, 3, 2, 50, 80], 78)); // 1
console.log(isPairExist([5, 10, 3, 2, 50, 80], 0)); // 0
