class Node {
  constructor(item) {
    this.data = item;
    this.left = this.right = null;
  }
}

function isBST(node, minVal, maxVal) {
  if (node === null) return true;
  if (node.data >= maxVal || node.data <= minVal) return false;
  return isBST(node.left, minVal, node.data) && isBST(node.right, node.data, maxVal);
}

let root;

root = new Node(2);
root.left = new Node(1);
root.right = new Node(3);
// root.right.left = new Node(15);
// root.right.right = new Node(7);

let [minVal, maxVal] = [-Infinity, Infinity];
console.log(isBST(root, minVal, maxVal));
