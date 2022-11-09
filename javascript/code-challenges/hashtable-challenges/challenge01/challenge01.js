"use strict";

// Challenge01 - Two Sum BST:
// Write a function that takes a Binary Search tree and an integer as a parameter. Return True if Binary search tree has two elements that their summation is the given integer.

// For example given the following Binary Search tree:

// Example 1:

// Input: The previous Binary Search tree ==> root = [7,2,9,1,5,null,14], k = 3

// Output: true

// Example 1:

// Input: The previous Binary Search tree ==> root = [7,2,9,1,5,null,14], k = 4

// Output: true

// use Hashtable to solve this problem

class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class Tree {
  constructor() {
    this.root = null;
  }

  add(value) {
    const node = new Node(value);
    if (!this.root) {
      this.root = node;
      return;
    }

    let current = this.root;
    while (current) {
      if (value < current.value) {
        if (!current.left) {
          current.left = node;
          return;
        }
        current = current.left;
      } else {
        if (!current.right) {
          current.right = node;
          return;
        }
        current = current.right;
      }
    }
  }
}

const twoSumBST = (tree, target) => {
  let hash = {};

  const traverse = (node) => {
    if (!node) return false;
    if (hash[target - node.value]) return true;
    hash[node.value] = true;

    return traverse(node.left) || traverse(node.right);
  };

  return traverse(tree.root);
};

module.exports = {
  Node,
  Tree,
  twoSumBST,
};
