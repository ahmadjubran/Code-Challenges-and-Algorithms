"use strict";

const { Node, buildTree } = require("./challenge01");

describe("Testing challenge 1", () => {
  test("It should return a tree", () => {
    const preorder = [3, 9, 20, 15, 7];
    const inorder = [9, 3, 15, 20, 7];

    const tree = new Node(3);
    tree.left = new Node(9);
    tree.right = new Node(20);
    tree.right.left = new Node(15);
    tree.right.right = new Node(7);

    expect(buildTree(preorder, inorder)).toEqual(tree);
  });

  test("It should return a tree", () => {
    const preorder = [-1];
    const inorder = [-1];

    const tree = new Node(-1);

    expect(buildTree(preorder, inorder)).toEqual(tree);
  });
});
