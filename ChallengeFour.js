class Queue {
  constructor() {
    this.items = [];
  }
  add(element) {
    this.items.push(element);
  }
  remove() {
    this.items.shift();
  }
  display() {
    console.log(this.items);
  }
}
const queue = new Queue();
queue.add(1);
queue.add(2);
queue.add(3);
// you can remove() the last element of the Queue FILO with the fonction "remove()"
queue.display();
