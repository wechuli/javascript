//A hash table (hash map) is a data structure that implements an associative arrau abstract data type, a structure that can map keys to values. A hash table uses a hash function to compute an index into an array of bucckets or slots, from which the desired value can be found

//Simple implementation of hash table
const hash = (string, max) => {
  let hash = 0;
  for (let i = 0; i < string.length; i++) {
    hash += string.charCodeAt(i);
  }
  return hash % max;
};

class HashTable {
  constructor() {
    this.storage = [];
    this.storageLimit = 4;
  }
  print() {
    console.log(this.storage);
  }
  add(key, value) {
    let index = hash(key, this.storageLimit);
    if (this.storage[index] === undefined) {
      this.storage[index] = [[key, value]];
    } else {
      let inserted = false;
      for (let item of this.storage[index]) {
        if (item[0] === key) {
          item[1] = value;
          inserted = true;
        }
      }
      if (inserted === false) {
        this.storage[index].push([key, value]);
      }
    }
  }
  remove(key) {
    let index = hash(key, this.storageLimit);
    if (this.storage[index].length === 1 && this.storage[index][0][0] === key) {
      delete storage[index];
    } else {
      for (let i = 0; i < this.storage[index]; i++) {
        if (this.storage[index][i][0] === key) {
          delete this.storage[index][i];
        }
      }
    }
  }
  lookup(key) {
    let index = hash(key, this.storageLimit);
    if (!this.storage[index]) {
      return undefined;
    }
    for (let item of this.storage[index]) {
      if (item[0] === key) {
        return item[1];
      }
    }
  }
}

const myHashTable = new HashTable();
myHashTable.add("beau", "person");
myHashTable.add("fido", "dog");
myHashTable.add("rex", "dinosour");
myHashTable.add("tux", "penguin");
myHashTable.add("rte", "cat");
myHashTable.add("zxa", "chicken");
console.log(myHashTable.storage);

console.log(myHashTable.lookup("zxa"));
console.log(myHashTable.lookup("rte"));
