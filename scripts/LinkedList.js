import Node from './Node';

export default class LinkedList {
  constructor (head = null) {
    this.head = head;
    this.length = 0;
  }

  unshift(item) {
    let next = this.head
    this.head = new Node(item)
    this.head.next = next
    this.length ++
  }

  shift(item) {
    if (!this.length) return null
    let removed = this.head
    this.head = this.head.next
    this.length --
    return removed
  }

  push(item) {
    // should figure out how to do this recursively...
    if (!this.length) {
      this.length ++
      this.head = new Node(item)
      return this.length
    }
    let findLast = this.head
    for (let i = 0; i < this.length- 1; i++) {
      findLast = findLast.next
    }
    findLast.next = new Node(item)
    this.length ++
  }

  pop() {
    if(!this.length) return null
    if(this.length === 1) {
      let popped = this.head
      this.head = null
      this.length--
      return popped
    }
    let findNextLast = this.head
    for (let i = 0; i < this.length- 2; i++) {
      findNextLast = findLast.next
    }
    console.log(findNextLast)
    let popped = findNextLast.next
    findNextLast.next = null;
    this.length--
    return popped
  }

}
