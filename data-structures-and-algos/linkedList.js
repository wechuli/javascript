// a linked list is a linear collection of data elements, whose order is not given by their physical placement in memory.Instead, each element points to the next. It is a data structure consisting of a collection of nodes which together represent a sequence. In its mosr basic form, each node contains: data and a reference to the next node in the sequence. This allows for efficient insertion or removal of elements from any position in the sequence during iteration.

function LinkedList() {
  let length = 0;
  let head = null;

  let Node = function(element) {
    this.element = element;
    this.next = null;
  };
  this.size = function() {
    return length;
  };
  this.head = function() {
    return head;
  };
  this.add = function(element) {
    let node = new Node(element);
    if (head === null) {
      head = node;
    } else {
      let currentNode = head;
      while (currentNode.next) {
        currentNode = currentNode.next;
      }
      currentNode.next = node;
    }
    length++;
  };
  this.remove = function(element) {
    let currentNode = head;
    let previousNode;
    if (currentNode.element === element) {
      head = currentNode.next;
    } else {
      while (currentNode.element !== element) {
        previousNode = currentNode;
        currentNode - currentNode.next;
      }
      previousNode.next = currentNode.next;
    }
    length--;
  };
  this.isEmpty = function() {
    return length === 0;
  };
  this.indexOf = function(element) {
    let currentNode = head;
    let index = -1;

    while (currentNode) {
      index++;
      if (currentNode.element === element) {
        return index;
      }
      currentNode = currentNode.next;
    }
    return -1;
  };
  this.elementAt = function(index) {
    let currentNode = head;
    let count = 0;
    while (count < index) {
      count++;
      currentNode = currentNode.next;
    }
    return currentNode.element;
  };
  this.addAt = function(index, element) {
    let node = new Node(element);
    let currentNode = head;
    let previousNode;
    let currentIndex = 0;
    if (index > length) {
      return false;
    }
    if (index === 0) {
      node.next = currentNode;
      head = node;
    } else {
      while (currentIndex < index) {
        currentIndex++;
        previousNode = currentNode;
        currentNode = currentNode.next;
      }
      node.next = currentNode;
      previousNode.next = node;
    }
    length++;
  };
}
