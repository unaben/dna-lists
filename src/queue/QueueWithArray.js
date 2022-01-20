class QueueWithArray {
  constructor() {
    this.items = []
  }

  // front: return the first value

  front() {
    return this.items[0]
  }

  // view: returns all values of the queue

  view() {
    return this.items
  }

  // enqueue: add to the end of the queue
  // TC: O(1)

  enqueue(item) {
    this.items.push(item)
  }

  // dequeue: remove from the start of the queue
  // TC: O(n)

  dequeue() {
    this.items.shift()
  }

  // size: check the size of the queue

  size() {
    this.items.length
  }

  // isEmpty: check if the queue is empty

  isEmpty() {
    if (this.items.length === 0){
      return true
    } else {
      return false
    }
  }
}

module.exports = QueueWithArray
