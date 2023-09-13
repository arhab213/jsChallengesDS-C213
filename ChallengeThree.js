class Stack {
  constructor() {
    this.item = [];
  }

  push(element) {
    this.item.push(element);
  }
  display() {
    console.log(this.item);
  }
  remove() {
    this.item.pop();
  }
}
const stack = new Stack();
stack.push(1);
stack.push(2);
stack.push(3);
// Use the fonction "remove()" to remove the last element that you add FIFO
stack.display();
