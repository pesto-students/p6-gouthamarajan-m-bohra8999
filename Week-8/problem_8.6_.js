function bfs(graph, src, dest) {
  let queue = [[src, src]];
  let paths = [];
  while (queue.length) {
    let [ele, path] = queue.shift();
    if (ele == dest) paths.push(path);
    for (const neighbour of graph[ele]) {
      queue.push([neighbour, path + neighbour]);
    }
  }

  return paths.length ? paths : 'no path';
}

// create adjacency list from "[[]]" data structure
let graph = {
  0: [4, 3, 1],
  1: [3, 2, 4],
  2: [3],
  3: [4],
  4: [],
};

let result = bfs(graph, '0', '4');
console.log('result => ', result);
