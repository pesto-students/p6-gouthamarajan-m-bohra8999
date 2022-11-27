class Queue {
  constructor() {
    this.s1 = [];
    this.s2 = [];
  }

  enQueue(x) {
    this.s1.push(x);
  }

  deQueue() {
    if (this.s1.length == 0 && this.s2.length == 0) {
      console.log('Q is empty');
      return;
    }

    if (this.s2.length == 0) {
      while (this.s1.length != 0) {
        this.s2.push(this.s1[0]);
        this.s1.shift();
      }
    }

    let x = this.s2[0];
    this.s2.shift();
    return x;
  }
}

let q = new Queue();
q.enQueue(1);
q.enQueue(2);
q.enQueue(3);

console.log(q.deQueue());
console.log(q.deQueue());
console.log(q.deQueue());
