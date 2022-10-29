let fibonacci = {
  a: 0,
  b: 1,
  limit: 0,
  count: 0,

  [Symbol.iterator]() {
    return this;
  },

  next() {
    if (this.count > 1) {
      temp = this.a + this.b;
      this.a = this.b;
      this.b = temp;
      this.count++;
      return { value: this.b, done: this.limit < this.count };
    } else if (this.count == 1) {
      this.count++;
      return { value: this.b, done: false };
    } else {
      this.count++;
      return { value: this.a, done: false };
    }
  },
};

fibonacci.limit = 11;

for (const i of fibonacci) {
  console.log(i);
}
