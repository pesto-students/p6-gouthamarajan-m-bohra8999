class Node {
  constructor(item) {
    this.data = item;
    this.left = this.right = null;
  }
}

function maxDepth(node) {
  if (node == null) return 0;
  return Math.max(maxDepth(node.left), maxDepth(node.right)) + 1;
}

let root;
// test 1 ==> 3
root = new Node(3);
root.left = new Node(9);
root.right = new Node(20);
root.right.left = new Node(15);
root.right.right = new Node(7);

// test 2 ==> 2
// root = new Node(1);
// root.right = new Node(2);

console.log(maxDepth(root));
