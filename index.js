class SortedList {
  constructor() {
    this.items = [];
    this.length = this.items.length;
  
  }

  add(item) {
    this.items.push(item);
    this.items.sort((a, b) => {
      return a - b;
    });
    this.length++;
  }

  get(pos) {
    if (pos < this.length) {
      return this.items.indexOf(pos);
    } else {
      throw new Error("OutOfBounds");
    }
  }

  max() {
    if (0 < this.length) {
      // return Math.max(...this.items)
      return this.items.pop()
    } else {
      throw new Error("EmptySortedList");
    }
  }

  min() {
    if (0 < this.length) {
      // return Math.min(...this.items)
      return this.items.shift()
    } else {
      throw new Error("EmptySortedList");
    }
  }

  sum() {
    if (0 < this.length) {
      return this.items.reduce((a,b) => a + b, 0)
    } else {
      return 0
    }
  }

  avg() {
    if (0 < this.length) {
      return this.items.reduce((a,b) => a + b, 0) / this.length 
    } else {
      throw new Error("OutOfBounds");
    }
  }
}

module.exports = SortedList;
