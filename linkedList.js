export default class LinkedList {
  arr = [];

  append(value) {
    let nodeChange = this.arr[this.arr.length - 1];
    let node = new Node(value);
    if (nodeChange != undefined) nodeChange.nextNode = node.value;
    this.arr = [...this.arr, node];
  }

  prepend(value) {
    let nodeValue = this.arr[0];
    let node = new Node(value);

    if (nodeValue != undefined) node.nextNode = nodeValue.value;
    this.arr = [node, ...this.arr];
  }

  size() {
    return this.arr.length;
  }

  head() {
    let head = this.arr[0];
    if (head != undefined) return head;
    return 'Array is empty head is ' + head;
  }

  tail() {
    let tail = this.arr[this.arr.length - 1];
    if (tail != undefined) return tail;
    return 'Array is empty, tail is ' + tail;
  }

  at(index) {
    let at = this.arr[index];
    if (at != undefined) return at;
    return 'You need to give a value to at(value)';
  }

  pop() {
    let newArr = [];
    for (let i = 0; i < this.arr.length - 1; i++) {
      newArr = [...newArr, this.arr[i]];
    }
    newArr[newArr.length - 1].nextNode = null;
    return (this.arr = newArr);
  }

  contains(value) {
    for (let i = 0; i < this.arr.length; i++) {
      if (this.arr[i].value === value) return true;
    }
    return false;
  }

  find(value) {
    for (let i = 0; i < this.arr.length; i++) {
      if (this.arr[i].value === value) return i + 1;
    }
    return null;
  }

  toString() {
    let string = '';
    for (let i = 0; i < this.arr.length; i++) {
      string = string + `( ${this.arr[i].value} ) -> `;
      if (i == this.arr.length - 1) string = string + 'null';
    }
    return string;
  }

  insertAt(value, index) {
    if (this.arr[index] == null) {
      this.append(value);
      return this.arr;
    }
    let newArr = [];
    for (let i = 0; i < index; i++) {
      newArr = [...newArr, this.arr[i]];
    }
    let node = new Node(value, this.arr[index].value);
    newArr = [...newArr, node];
    newArr[index - 1].nextNode = value;

    for (let i = index; i < this.arr.length; i++) {
      newArr = [...newArr, this.arr[i]];
    }

    return (this.arr = newArr);
  }

  removeAt(index) {
    if (this.arr[index - 1] == undefined)
      return `No item with ${index} as index`;
    let newArr = [];
    for (let i = 0; i < index - 1; i++) {
      newArr = [...newArr, this.arr[i]];
    }
    newArr[newArr.length - 1].nextNode = this.arr[index]
      ? this.arr[index].value
      : null;
    for (let i = index; i < this.arr.length; i++) {
      newArr = [...newArr, this.arr[i]];
    }
    return (this.arr = newArr);
  }
}

class Node {
  constructor(value = null, nextNode = null) {
    this.value = value;
    this.nextNode = nextNode;
  }
}
