const ListNode = require('../extensions/list-node');
/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 *
 */

class Queue {
  constructor() {
    this.head = null;
    this.lastnode = null;
    this.length = 0;
  }

  get size() {
    return this.length;
  }

  enqueue(element) {
    if (this.head === null) {
      this.head = new ListNode(element);
      this.lastnode = this.head;
    } else {
      const node = new ListNode(element);
      this.lastnode.next = node;
      this.lastnode = node;
    }
    this.length++;
  }

  dequeue() {
    const index = this.head.value;
    this.head = this.head.next;
    this.length--;
    return index;
  }
}

module.exports = Queue;
