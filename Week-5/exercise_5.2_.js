function isVowel(char) {
  return ['a', 'e', 'i', 'o', 'u'].indexOf(char) > -1;
}

function getVowelCount(input) {
  let frequency_map = new Map();
  for (let char of input) {
    char = char.toLowerCase();
    if (!isVowel(char)) {
      continue;
    }
    if (!frequency_map[char]) {
      frequency_map[char] = 0;
    }
    frequency_map[char]++;
  }

  return frequency_map;
}

console.log(getVowelCount('Aeio aEIo'));
console.log(getVowelCount('The quick brown fox jumps over the lazy dog'));

// Output -
// Map(0) { a: 2, e: 2, i: 2, o: 2 }
// Map(0) { e: 3, u: 2, i: 1, o: 4, a: 1 }
