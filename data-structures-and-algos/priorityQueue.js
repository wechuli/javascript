//In computer science, a priority queue is an abstract data type which is like a regula queus or stack data stucture, but where additionally each element has a priority associated with it. In a priority queues, an element with high priority is served before an element with low priority. In some implementations, if two elements have the same priority, they are served according to the order in which they were enqueued, while in other implementations, ordering of the elements with the same priority is undefined.

class PriorityQueue {
  constructor() {
    this.collection = [];
  }
  printCollection() {
    console.log(this.collection);
  }
  enqueue(element) {
    if (this.isEmpty()) {
      this.collection.push(element);
    } else {
      let added = false;
      for (let i = 0; i < this.collection.length; i++) {
        if (element[1] < this.collection[i][1]) {
          //checking priorities
          this.collection.splice(i, 0, element); //the delete count is zero, so nothing will actually be deleted, rather, we will insert the 'element' item
          added = true;
          break;
        }
      }
      if (!added) {
        this.collection.push(element);
      }
    }
  }
  dequeue() {
    return this.collection.shift()[0];
  }
  front() {
    return this.collection[0];
  }
  size() {
    return this.collection.length;
  }
  isEmpty() {
    return this.collection.length === 0;
  }
}

const myPQueue = new PriorityQueue();
myPQueue.enqueue(["June Mutelesa", 1]);
myPQueue.enqueue(["Jenniffer Moraa", 3]);
myPQueue.enqueue(["Caroline Jane", 10]);
myPQueue.enqueue(["April Wednesday", 5]);
myPQueue.enqueue(["Nicole Smith", 2]);
myPQueue.enqueue(["Mary Wanjiru", 4]);
