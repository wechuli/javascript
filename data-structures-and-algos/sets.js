// A set is an abstract data type that can store certain values, without any particular order, and no repeated values.It is a computer implementation of the mathematical concept of a finite set. Unlike most other collection types, rather than retrieving a specific element from a set, one typically tests a value for membership in a set

class MySet {
  constructor() {
    this.collection = [];
  }

  //this method will check for the presence of an element and return true or false
  has(element) {
    return this.collection.indexOf(element) !== -1;
  }

  //this method will return all the values in the set
  values() {
    return this.collection;
  }

  //add an element to the set
  add(element) {
    if (!this.has(element)) {
      this.collection.push(element);
      return true;
    }
    return false;
  }
  //this method will remove an element from a set
  remove(element) {
    if (this.has(element)) {
      index = this.collection.indexOf(element);
      this.collection.splice(index, 1);
      return true;
    }
    return false;
  }
  //return the size of the collection
  size() {
    return this.collection.length;
  }

  //return the union of two sets
  union(otherSet) {
    let unionSet = new Set();
    let firstSet = this.values();
    let secondSet = otherSet.values();
    firstSet.forEach(e => {
      unionSet.add(e);
    });
    secondSet.forEach(e => {
      unionSet.add(e);
    });
    return unionSet;
  }
  //this method will return the intersection of two sets as a new set
  intersection(otherSet) {
    let intersectionSet = new MySet();
    let firstSet = this.values();
    firstSet.forEach(e => {
      if (otherSet.has(e)) {
        intersectionSet.add(e);
      }
    });
    return intersectionSet;
  }

  //this method will return the intersection of two sets as a new set
  difference(otherSet) {
    let Set = new MySet();
    let firstSet = this.values();
    firstSet.forEach(e => {
      if (!otherSet.has(e)) {
        intersectionSet.add(e);
      }
    });
  }
  //this method will test if the set is a subset of a different set
  subset(otherSet) {
    let firstSet = this.values();
    return firstSet.every(value => {
      otherSet.has(value);
    });
  }
}
