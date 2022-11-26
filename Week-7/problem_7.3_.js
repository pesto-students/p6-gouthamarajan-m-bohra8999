/**
 * Given a linked list of N nodes.
 * The task is to check if the linked list has a loop.
 * Linkedlist can contain self loop.
 */

class Node {
  constructor(val) {
    this.data = val;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  // Time Complexity: O(N). Expected Auxiliary Space: O(1)
  detectLoop() {
    // creating a loop
    this.head.next.next.next = this.head.next; // 8 -> 4
    let { head } = this;
    while (head != null) {
      if (head.flag === 1) return true;
      head.flag = 1;
      head = head.next;
    }
    return false;
  }

  print() {
    let temp = this.head;
    let res = 'head -> ';
    while (temp != null) {
      res += temp.data + ' -> ';
      temp = temp.next;
    }
    console.log(res + temp);
  }

  push(data) {
    let temp = new Node(data);
    temp.next = this.head;
    this.head = temp;
  }
}

let list1 = new LinkedList();

list1.push(9);
list1.push(8);
list1.push(7);
list1.push(4);
list1.push(2);

list1.print();
console.log(list1.detectLoop());
list1.print();
