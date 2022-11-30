class Node {
  constructor(item) {
    this.data = item;
    this.left = this.right = null;
  }
}

function levelOrder(node) {
  let result = [];
  let Q = [];
  if (node != null) {
    Q.push(node);
    while (Q.length > 0) {
      let node = Q.shift();
      result.push(node.data);
      if (node.left != null) {
        Q.push(node.left);
      }
      if (node.right != null) {
        Q.push(node.right);
      }
    }
    return result;
  } else {
    return null;
  }
}

let root;

root = new Node(3);
root.left = new Node(9);
root.right = new Node(20);
root.right.left = new Node(15);
root.right.right = new Node(7);

console.log(levelOrder(root));
