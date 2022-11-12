function hasDuplicate(input) {
  let record = new Set();

  for (let i = 0; i < input.length; i++) {
    if (record.has(input[i])) {
      console.log(`${input[i]} is duplicate`);
      return true;
    } else {
      record.add(input[i]);
    }
  }
  return false;
}

console.log(hasDuplicate([23, 56, 1, -5, 0, 10, 1]));
console.log(hasDuplicate([12, 4, 5, 7, 0]));

// Output -
// 1 is duplicate
// true
// false
