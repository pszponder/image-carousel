export class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}

export default class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  /**
   * Push a new value to the tail of the linked list.
   */

  push(value) {}

  /**
   * Remove an item from the end of the linked list.
   */
  pop() {}

  /**
   * Remove a node from the beginning of the list.
   */
  shift() {}

  /**
   * Add a node to the head of the linked list.
   */
  unshift(value) {}

  /**
   * Get a Node at a specific index
   */
  getNodeAtIndex(index) {}

  /**
   * Set a node at a specific index.
   */
  setNodeAtIndex(index, value) {}

  /**
   *  Insert a node at a specific index.
   */
  insertAtIndex(index, val) {}

  /**
   * Remove a node at a specific index.
   */
  removeAtIndex(index) {}
}
