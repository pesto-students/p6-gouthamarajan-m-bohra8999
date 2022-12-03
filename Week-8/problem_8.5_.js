const getTownJudge = (trust, personCount) => {
  let count = Array(personCount + 1).fill(0);
  for (let i = 0; i < trust.length; i++) {
    let [p1, p2] = trust[i];
    count[p1]--;
    count[p2]++;
  }
  for (let i = 1; i <= personCount; i++) {
    if (count[i] === personCount - 1) return i;
  }

  return -1;
};

let trust = [
  [1, 3],
  [1, 4],
  [2, 3],
  [2, 4],
  [3, 4],
];

let result = getTownJudge(trust, 4); // 4
console.log('result => ', result);

// Time: O(connections) Space: O(persons)
// connections = persons^2 in worst case scenario
