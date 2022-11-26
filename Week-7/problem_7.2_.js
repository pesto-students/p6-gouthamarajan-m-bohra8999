/*
 Given a singly linked list of size N. 
 The task is to left-shift the linked list by k nodes,
 where k is a given positive integer smaller than or equal to length of the linked list. 
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
  rotate(k) {
    let [current, count] = [this.head, 0];
    while (count < k - 1) {
      current = current.next;
      count++;
    }
    if (!current.next) return;
    let temp = current.next;
    current.next = null;
    current = temp;
    temp = this.head;
    this.head = current;
    while (current.next != null) {
      current = current.next;
    }
    current.next = temp;
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
list1.rotate(3);
list1.print();
