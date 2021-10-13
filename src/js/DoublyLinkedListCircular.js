// Create the node class
export class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}

export default class DoublyLinkedList {
  constructor(maxSize) {
    this.head = null;
    this.tail = null;
    this.size = 0;
    this.maxSize = maxSize || null;
  }

  // Prepend a node to the DLL
  unshift(value) {
    // Check if maxSize has been reached
    if (this.size === this.maxSize) {
      return -1;
    }

    // Instantiate a new node
    const newNode = new Node(value);

    // Check if the linked list is empty
    if (!this.head) {
      // Set this.head and this.tail to point to newNode
      this.head = newNode;
      this.tail = newNode;
    } else {
      // Point next pointer of newNode to head
      newNode.next = this.head;

      // Point prev pointer of head to newNode
      this.head.prev = newNode;

      // Set head to point to newNode
      this.head = newNode;
    }

    // Connect the head to the tail
    this.head.prev = this.tail;

    // Connect the tail to the head
    this.tail.next = this.head;

    // Increment the length of the DLL
    this.size++;

    return this;
  }

  // Append a node to the DLL
  push(value) {
    // Check if maxSize has been reached
    if (this.size === this.maxSize) {
      return -1;
    }

    // Instantiate a new node
    const newNode = new Node(value);

    // Check if the linked list is empty
    if (!this.head) {
      // Set this.head and this.tail to point to newNode
      this.head = newNode;
      this.tail = newNode;
    } else {
      // Point next pointer of tail to newNode
      this.tail.next = newNode;

      // Point prev pointer of newNode to tail
      newNode.prev = this.tail;

      // Set tail to point to newNode
      this.tail = newNode;
    }

    // Connect the head to the tail
    this.head.prev = this.tail;

    // Connect the tail to the head
    this.tail.next = this.head;

    // Increment the length of the DLL
    this.size++;

    return this;
  }

  // Remove a node from the start of the DLL
  shift() {
    // If DLL is empty, return -1;
    if (!this.head) {
      return -1;
    }

    // Set a pointer to head node (this will be the node which is removed)
    const removedNode = this.head;

    // If DLL only has 1 node, reset DLL to be empty DLL
    if (this.size === 1) {
      this.head = null;
      this.tail = null;
    }
    // Otherwise, remove the head node and update the head pointer
    else {
      // Set a pointer to head.next
      const newHead = this.head.next;

      // Set prev pointer of newHead to point to null
      newHead.prev = null;

      // Set next pointer of head to point to null
      this.head.next = null;

      // Set this.head to point to newHead
      this.head = newHead;

      // Connect the head to the tail
      this.head.prev = this.tail;

      // Connect the tail to the head
      this.tail.next = this.head;
    }

    this.size--;
    return removedNode;
  }

  // Remove a node from the end of the DLL
  pop() {
    // If DLL is empty, return -1;
    if (!this.head) {
      return -1;
    }

    // Set a pointer to tail node (this will be the node which is removed)
    const removedNode = this.tail;

    // If DLL only has 1 node, reset DLL to be empty DLL
    if (this.size === 1) {
      this.head = null;
      this.tail = null;
    }
    // Otherwise, remove the tail node and update the tail pointer
    else {
      // Set a pointer to tail.prev
      const newtail = this.tail.prev;

      // Set next pointer of newtail to point to null
      newtail.next = null;

      // Set prev pointer of tail to point to null
      this.tail.prev = null;

      // Set this.tail to point to newtail
      this.tail = newtail;

      // Connect the head to the tail
      this.head.prev = this.tail;

      // Connect the tail to the head
      this.tail.next = this.head;
    }

    this.size--;
    return removedNode;
  }

  // Find a node by its index
  // Return the node at the specified index
  findByIdx(idx) {
    // If DLL is empty, OR idx < 0, OR idx >= this.size, return -1
    if (!this.head || idx < 0 || idx >= this.size) {
      return -1;
    }

    // Initialize a currentNode pointer
    let currentNode = this.head;

    // If idx <= this.size / 2, set currentNode to this.head and traverse DLL forwards
    if (idx < Math.floor(this.size / 2)) {
      while (idx > 0) {
        currentNode = currentNode.next;
        idx--;
      }
    }
    // Otherwise, set currentNode to this.tail and traverse DLL backwards
    else {
      currentNode = this.tail;
      let counter = this.size - 1 - idx;
      while (counter > 0) {
        currentNode = currentNode.prev;
        counter--;
      }
    }
    return currentNode;
  }

  // Find a node by its value
  // Find the first node with a specified value in the SLL
  // Return the index of the node at the value
  // Return -1 if target value is not found
  findByValue(targetValue) {
    // Create a pointer node, set it to head
    let currentNode = this.head;

    // Initialize an index variable to 0
    let idx = 0;

    // Traverse the linked list
    do {
      // If we find the value we are looking for, exit the function
      if (currentNode.value === targetValue) {
        return idx;
      }

      // Move pointer to next node
      currentNode = currentNode.next;

      idx++; // increment index
    } while (currentNode !== this.head);

    // If cannot find value after traversing linked list, return -1
    return -1;
  }

  // Add a node at a specified index
  insert(idx, value) {
    // Check if maxSize has been reached
    if (this.size === this.maxSize) {
      return -1;
    }

    // If idx <= 0, unshift
    if (idx <= 0) {
      return this.unshift(value);
    }

    // If idx >= this.size, push
    if (idx >= this.size) {
      return this.push(value);
    }

    // Otherwise, insert in the middle
    // Instantiate a new node
    const newNode = new Node(value);

    // set a pointer (prevNode) to the result of findByIdx(idx-1)
    const prevNode = this.findByIdx(idx - 1);

    // set a pointer (nextNode) to prevNode.next
    const nextNode = prevNode.next;

    // set next pointer of prevNode to newNode
    prevNode.next = newNode;

    // set prev pointer of newNode to prevNode
    newNode.prev = prevNode;

    // set next pointer of newNode to nextNode
    newNode.next = nextNode;

    // set prev pointer of nextNode to newNode
    nextNode.prev = newNode;

    // Increment the size
    this.size++;

    // return the linked list
    return this;
  }

  // Remove a node at a specified index
  remove(idx) {
    // If idx <= 0, shift
    if (idx <= 0) {
      return this.shift();
    }

    // If idx >= this.size - 1, pop
    if (idx >= this.size - 1) {
      return this.pop();
    }

    // Otherwise, remove from the middle
    // Create a pointer (removedNode) to the result of findByIdx(idx)
    const removedNode = this.findByIdx(idx);

    // Create a pointer (prevNode) to removedNode.prev
    const prevNode = removedNode.prev;

    // Create a pointer (nextNode) to removedNode.next
    const nextNode = removedNode.next;

    // Set next pointer of prevNode to nextNode
    prevNode.next = nextNode;

    // Set prev pointer of nextNode to prevNode
    nextNode.prev = prevNode;

    // Set prev and next pointers of removedNode to null
    // This removes removedNode from the DLL
    removedNode.prev = null;
    removedNode.next = null;

    // Decrement size
    this.size--;

    // Return removedNode
    return removedNode;
  }

  // Reverse the DLL iteratively
  reverse() {
    // Create prevNode and nextNode pointers, initialize to null
    let prevNode = this.tail;
    let nextNode = this.tail;

    // Create currentNode pointer and set to head
    let currentNode = this.head;

    // Traverse DLL while currentNode pointer does not point to null
    do {
      // move nextNode pointer to currentNode.next
      nextNode = currentNode.next;

      // Set currentNode.prev to point to nextNode
      currentNode.prev = nextNode;

      // Set currentNode.next to point to prevNode
      currentNode.next = prevNode;

      // Move prevNode to currentNode
      prevNode = currentNode;

      // Move currentNode to nextNode
      currentNode = nextNode;
    } while (currentNode !== this.head);

    // Swap positions of head and tail pointers
    this.tail = this.head;
    this.head = prevNode;
    return this;
  }

  // Print the components in the DLL
  print() {
    console.log("Size:", this.size);

    // If the DLL is empty, log empty and return
    if (!this.head) {
      console.log("Empty DLL \n");
      return;
    }

    // Initialize currentNode pointer and set it to this.head
    let currentNode = this.head;

    // while currentNode exists
    do {
      // log currentNode.prev.value to console
      console.log("----------");
      console.log("Prev:", currentNode.prev.value);

      // log currentNode.value to console
      console.log("Node:", currentNode.value);

      // log currentNode.next.value to console
      console.log("Next:", currentNode.next.value);

      // update currentNode to currentNode.next
      currentNode = currentNode.next;
    } while (currentNode !== this.head);

    console.log();
  }
}

// TESTING
// console.log(`
// ============================
// INSTANTIATE DoublyLinkedList
// ============================`);
// const dll = new DoublyLinkedList();
// dll.print();

// console.log(`
// ======================
// TESTING unshift METHOD
// ======================`);
// dll.print();
// dll.unshift("a");
// dll.print();
// dll.unshift("b").unshift("c");
// dll.print();

// console.log(`
// ====================
// TESTING shift METHOD
// ====================`);
// dll.print();
// console.log(dll.shift());
// dll.print();
// console.log(dll.shift());
// dll.print();
// console.log(dll.shift());
// dll.print();
// console.log(dll.shift());
// dll.print();

// console.log(`
// ===================
// TESTING push METHOD
// ===================`);
// dll.print();
// dll.push("a");
// dll.print();
// dll.push("b").push("c");
// dll.print();

// console.log(`
// ==================
// TESTING pop METHOD
// ==================`);
// dll.print();
// console.log(dll.pop());
// console.log(dll.pop());
// console.log(dll.pop());
// console.log(dll.pop());
// dll.print();

// console.log(`
// ========================
// TESTING findByIdx METHOD
// ========================`);
// const dll2 = new DoublyLinkedList();
// dll2.push("a").push("b").push("c");
// dll2.print();
// console.log(dll2.findByIdx(-10));
// console.log(dll2.findByIdx(0));
// console.log(dll2.findByIdx(1));
// console.log(dll2.findByIdx(2));
// console.log(dll2.findByIdx(3));

// console.log(`
// ==========================
// TESTING findByValue METHOD
// ==========================`);
// dll2.print();
// console.log(dll2.findByValue("hi")); // -1
// console.log(dll2.findByValue(0)); // -1
// console.log(dll2.findByValue("a")); // 0
// console.log(dll2.findByValue("b")); // 1
// console.log(dll2.findByValue("c")); // 2
// console.log(dll2.findByValue("Did you find it?")); // -1

// console.log(`
// =====================
// TESTING insert METHOD
// =====================`);
// const dll3 = new DoublyLinkedList();
// dll3.print();
// dll3.insert(0, "a");
// dll3.print();
// dll3.insert(1, "b");
// dll3.print();
// dll3.insert(2, "c");
// dll3.print();
// dll3.insert(2, "hi");
// dll3.print();
// dll3.insert(100, 1);
// dll3.insert(-5, "yo");
// dll3.print();

// console.log(`
// =====================
// TESTING remove METHOD
// =====================`);
// dll3.print();
// dll3.remove(-10);
// dll3.print();
// dll3.remove(10);
// dll3.print();
// dll3.remove(2);
// dll3.print();
// dll3.remove(1);
// dll3.print();
// dll3.remove(1);
// dll3.print();
// dll3.remove(0);
// dll3.print();

// console.log(`
// ======================
// TESTING reverse METHOD
// ======================`);
// const dll4 = new DoublyLinkedList();
// dll4.push(1).push(2).push(3).push(4).push(5);
// dll4.print();
// dll4.reverse();
// dll4.print();
// console.log(dll4);
