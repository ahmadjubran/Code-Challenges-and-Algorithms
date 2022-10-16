"use strict";
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
