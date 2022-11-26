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

  reverse() {
    let [prev, current, next] = [null, this.head, null];
    while (current != null) {
      next = current.next;
      current.next = prev;
      prev = current;
      current = next;
    }
    this.head = prev;
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

list1.push(20);
list1.push(4);
list1.push(15);
list1.push(85);

list1.print();
list1.reverse();
list1.print();
