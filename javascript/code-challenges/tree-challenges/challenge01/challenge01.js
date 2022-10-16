// Write here the code challenge solution

"use strict";

class Node {
  constructor(value, left = null, right = null) {
    this.value = value;
    this.left = left;
    this.right = right;
  }
}

function buildTree(preorder, inorder) {
  if (preorder.length === 0) {
    return null;
  }

  let root = new Node(preorder[0]);
  let rootIndex = inorder.indexOf(preorder[0]);

  let leftInorder = inorder.slice(0, rootIndex);
  let rightInorder = inorder.slice(rootIndex + 1);

  let leftPreorder = preorder.filter((value) => leftInorder.includes(value));
  let rightPreorder = preorder.filter((value) => rightInorder.includes(value));

  root.left = buildTree(leftPreorder, leftInorder);
  root.right = buildTree(rightPreorder, rightInorder);

  return root;
}

module.exports = { Node, buildTree };
