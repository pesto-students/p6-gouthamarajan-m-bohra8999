function sort(arr) {
  let [low, mid, high] = [0, 0, arr.length - 1];
  while (mid <= high) {
    if (arr[mid] === 0) {
      [arr[mid], arr[low]] = [arr[low], arr[mid]];
      low++;
      mid++;
    } else if (arr[mid] === 2) {
      [arr[mid], arr[high]] = [arr[high], arr[mid]];
      high--;
    } else {
      mid++;
    }
  }
  return arr;
}

console.log(sort([1, 0, 2, 1, 0, 0]));
