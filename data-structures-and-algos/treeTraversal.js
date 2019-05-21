import { Node, BST } from "./binarySearchTree";

class AdvancedBinaryTree extends BST {
  constructor() {
    super();
  }

  isBalanced() {
    return this.findMaxHeight() >= this.findMaxHeight() - 1;
  }
  findMinHeight(node = this.root) {
    if (node == null) {
      return -1;
    }
    let left = this.findMinHeight(node.left);
    let right = this.findMinHeight(node.right);
    if (left < right) {
      return left + 1;
    } else {
      return right + 1;
    }
  }

  findMaxHeight(node = this.root) {
    if (node == null) {
      return -1;
    }
    let left = this.findMaxHeight(node.left);
    let right = this.findMaxHeight(node.right);
    if (left > right) {
      return left + 1;
    } else {
      return right + 1;
    }
  }
  inOrder() {
    if (this.root == null) {
      return null;
    }
    let results = new Array();
    function traverseInOrder(node) {
      node.left && traverseInOrder(node.left);
      results.push(node.data);
      node.right && traverseInOrder(node.right);
    }
    traverseInOrder(this.root);
    return results;
  }
  inOrder() {
    if (this.root == null) {
      return null;
    }
    let results = new Array();
    function traversePreOrder(node) {
      results.push(node.data);
      node.left && traversePreOrder(node.left);
      node.right && traversePreOrder(node.right);
    }
    traversePreOrder(this.root);
    return results;
  }
  postOrder() {
    if (this.root == null) {
      return null;
    }
    let results = new Array();
    function traversePostOrder(node) {
      node.left && traversePostOrder(node.left);
      node.right && traversePostOrder(node.right);
      results.push(node.data);
    }
    traversePostOrder(this.root);
    return results;
  }
  levelOrder() {
    let result = [];
    let Q = [];
    if (this.root != null) {
      Q.push(this.root);
      while (Q.length > 0) {
        let node = Q.shift();
        result = push(node.data);
        if (node.left != null) {
          Q.push(node.left);
        }
        if (node.right != null) {
          Q.push(node.right);
        }
      }
      return result;
    } else {
      return null;
    }
  }
}
