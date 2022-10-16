"use strict";

// Challenge02 - Breadth First Traversal:
// Given the roots of two binary trees p and q, write a function to check if they are the same or not using breadth-first-traversal.

// Two binary trees are considered the same if they are structurally identical, and the nodes have the same value.

// Example 1:
// Input: p = [1,2,3], q = [1,2,3]
// Output: true

// Example 2:
// Input: p = [1,2], q = [1,null,2]
// Output: false

// Example 3:
// Input: p = [1,2,1], q = [1,1,2]
// Output: false

class Node {
  constructor(value, left = null, right = null) {
    this.value = value;
    this.left = left;
    this.right = right;
  }
}

function breadthFirst(root) {
  let queue = [root];
  let result = [];

  while (queue.length) {
    let node = queue.shift();
    result.push(node.value);

    if (node.left) queue.push(node.left);
    if (node.right) queue.push(node.right);
  }

  return result;
}

module.exports = { Node, breadthFirst };
