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

      // all other elements
      if (count === idx-1){
        if (current === this.tail) {
          this.tail = newNode;
        }else{
          newNode.next = current.next;
        }
        current.next = newNode;
      }
      current = current.next;
      count++;
    }
    this.length++;
  }

  /** removeAt(idx): return & remove item at idx, */

  removeAt(idx) {
    let current = this.head; 
    let count = 0;

    //empty list
    if(this.head === null) return null;

    while(current !== null){
      //one item case
      if(this.head === this.tail){
        this.head = null;
        this.tail = null;
      }

      //all other cases
      if(count === idx-1){
        //remove from the front
        if(count === 0) this.head = current.next;
        //remove from the back
        if(current.next.next === null) this.tail = current
        //all other cases
        current.next = current.next.next;
      }

      current = current.next;
      count++;
    }
    this.length--;
  }

  /** average(): return an average of all values in the list */

  average() {
    let current = this.head;
    let sum = 0;

    if (this.head === null){
      return 0;
    }

    while (current !== null){
      sum += current.val;
      current = current.next;
    }

    return (sum/this.length);
  }
}

module.exports = LinkedList;