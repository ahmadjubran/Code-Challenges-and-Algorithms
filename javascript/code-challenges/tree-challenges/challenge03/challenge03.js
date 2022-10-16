"use strict";
class Node {
  constructor(value, left = null, right = null) {
    this.value = value;
    this.left = left;
    this.right = right;
  }
}

function sortedArrayToBST(nums) {
  if (!nums.length) return null;

  let mid = Math.floor(nums.length / 2);
  let root = new Node(nums[mid]);
  root.left = sortedArrayToBST(nums.slice(0, mid));
  root.right = sortedArrayToBST(nums.slice(mid + 1));

  return root;
}

module.exports = { Node, sortedArrayToBST };
