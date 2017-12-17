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

  shift() {
    if (!this.length) return null
    let removed = this.head
    this.head = this.head.next
    this.length --
    return removed
  }

  push(item) {
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
      findNextLast = findNextLast.next
    }
    let popped = findNextLast.next
    findNextLast.next = null;
    this.length--
    return popped
  }

  find(item) {
    if (!this.length) return null
    let currentNode = this.head
    while(currentNode.data !== item) {
      if(currentNode.next === null) return null
      currentNode = currentNode.next
    }
    return currentNode
  }

  getLast() {
    if (!this.length) return null
    let currentNode = this.head
    while(currentNode.next !== null) {
      currentNode = currentNode.next
    }
    return currentNode
  }

  delete(item) {
    if (!this.length) return null
    let currentNode = this.head
    if (currentNode.data === item) {
      this.head = this.head.next
      this.length --
      return this.length
    }
    while(currentNode.next !== null && currentNode.next.data !== item) {
      currentNode = currentNode.next
    }
    if(currentNode.next === null) return null
    currentNode.next = currentNode.next.next
    this.length --
    return this.length
  }

  toArray() {
    let array = []
    if (!this.length) return array
    let currentNode = this.head
    while(currentNode !== null) {
      array.push(currentNode.data) 
      currentNode = currentNode.next
    }
    return array
  }

  include(item) {
    if (!this.length) return false
    let currentNode = this.head
    while(currentNode.data !== item) {
      if(currentNode.next === null) return false
      currentNode = currentNode.next
    }
    return true
  }

  index(item) {
    if (!this.length) return null
    let currentNode = this.head
    let index = 0;
    if (currentNode.data === item) return index
    while(currentNode.data !== item) {
      if(currentNode.next === null) return null
      currentNode = currentNode.next
      index ++
    }
    return index
  }

  insert(idx, item) {
    if (idx > this.length) return null
    let currentNode = this.head
    let index = 0;
    if (currentNode.data === item) return index
    while(currentNode.data !== item) {
      if(currentNode.next === null) return null
      currentNode = currentNode.next
      index ++
    }
    return index
  }

}
