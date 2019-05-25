// A queue is a linear list of elements in which deletion of an element can take place only at one enc called the front and insertion can take place on the other end which is termed as the rear. In the concept of a queue, the first element to be inserted in the queue will be first

function Queue() {
  this.collection = [];
  this.print = function() {
    console.log(this.collection);
  };

  //insert at the beginning
  this.enqueue = function(element) {
    this.collection.push(element);
  };

  //remove the first item
  this.dequeue = function() {
    return this.collection.shift();
  };

  //get the first element
  this.front = function() {
    return this.collection[0];
  };

  //get the size
  this.size = function() {
    return this.collection.length;
  };

  //check is the queue is empty
  this.isEmpty = function() {
    return this.collection.length === 0;
  };
}

Queue.prototype.test = function() {
  console.log("Yes");
};
