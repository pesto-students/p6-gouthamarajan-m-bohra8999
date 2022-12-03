function _getAdjacencyList(matrix) {
  let adjacencyList = {};
  for (const edges of matrix) {
    let [node1, node2] = edges;
    if (!(node1 in adjacencyList)) {
      adjacencyList[node1] = [];
    }
    if (!(node2 in adjacencyList)) {
      adjacencyList[node2] = [];
    }
    adjacencyList[node1].push(node2);
    adjacencyList[node2].push(node1);
  }
  console.log('adjacencyList =>', adjacencyList);
  return adjacencyList;
}

function dfs_recursive(graph, source, dest, visited) {
  if (visited.has(String(source))) return false;
  if (source == dest) return true;
  visited.add(String(source));
  for (const neighbour of graph[source]) {
    if (dfs_recursive(graph, neighbour, dest, visited)) {
      return true;
    }
  }
  return false;
}

let graph = [
  [0, 1],
  [1, 2],
  [2, 0],
  [2, 5],
  [7, 9],
];

let result = dfs_recursive(_getAdjacencyList(graph), '0', '9', new Set()); // false
// let result = dfs_recursive(_getAdjacencyList(graph), '0', '5', new Set()); // true
console.log('result => ', result);
