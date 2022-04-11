/** Node: node for a singly linked list. */

class Node {
  val = null;
  next = null;

  constructor(val) {
    this.val = val;
  }
}

/** LinkedList: chained together nodes. */

class LinkedList {
  head = null;
  tail = null;
  length = 0;

  constructor(vals = []) {
    for (let val of vals) this.push(val);
  }

  /** push(val): add new value to end of list. */

  push(val) {
    const newNode = new Node(val);
    if(this.head === null) this.head = newNode;
    if(this.tail !== null) this.tail.next = newNode;
    this.tail = newNode;
    this.length++;
  }

  /** unshift(val): add new value to start of list. */

  unshift(val) {
    const newNode = new Node(val);
    if (this.head === null){
      this.tail = newNode;
    } else {
      newNode.next = this.head;
    }
    this.length++;
    this.head = newNode;
  }

  /** pop(): return & remove last item. */

  pop() {
    let current = this.head;
    
    // if empty list
    if (this.tail === null) return null;

    // if only 1 item in LL
    if (this.head === this.tail) {
      this.head = null;
      this.tail = null;
      this.length--;
      return current.val;
    }

    // all other cases
    while (current !== null) {
      // second from last item
      if (current.next.next === null) {
        const popNode = current.next;
        current.next = null;
        this.tail = current;
        this.length--;
        return popNode.val;
      }
      current = current.next;
    }
  }

  /** shift(): return & remove first item. */

  shift() {
    let current = this.head;

    // if empty list
    if (this.tail === null) return null;

    // if only 1 item in LL
    if (this.head === this.tail) {
      this.head = null;
      this.tail = null;
      this.length--;
      return current.val;
    }

    // all other cases
    this.head = current.next;
    this.length--;
    return current.val;
  }

  /** getAt(idx): get val at idx. */

  getAt(idx) {
    let current = this.head; 
    let count = 0;

    while(current !== null){
      if(count === idx){
        return current.val;
      }
      current = current.next;
      count++;
    }
  }

  /** setAt(idx, val): set val at idx to val */

  setAt(idx, val) {
    let current = this.head; 
    let count = 0;

    while(current !== null){
      if(count === idx){
        current.val = val;
      }
      current = current.next;
      count++;
    }
  }

  /** insertAt(idx, val): add node w/val before idx. */

  insertAt(idx, val) {
    let current = this.head; 
    let count = 0;
    const newNode = new Node(val);

    // emtpy list
    if (this.head === null) {
      this.head = newNode;
      this.tail = newNode;
    }

    while(current !== null){
      // only 1 element in list
      if (this.head === this.tail) {
        this.head = newNode;
        newNode.next = current;
      }
      // tail element
      if (current === this.tail) {
        this.tail = newNode;
        current.next = newNode;
      }
      // all other elements
      if (count === idx-1){
        newNode.next = current.next;
        current.next = newNode;
      }
      
      current = current.next;
      count++;
    }

    this.length++;
  }

  /** removeAt(idx): return & remove item at idx, */

  removeAt(idx) {

  }

  /** average(): return an average of all values in the list */

  average() {
    
  }
}

module.exports = LinkedList;
