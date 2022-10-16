"use strict";

const { Node, sortedArrayToBST } = require("./challenge03");

describe("Testing challenge 3", () => {
  test("It should return a tree", () => {
    const nums = [-10, -3, 0, 5, 9];

    const tree = new Node(0);
    tree.left = new Node(-3);
    tree.right = new Node(9);
    tree.left.left = new Node(-10);
    tree.right.left = new Node(5);

    expect(sortedArrayToBST(nums)).toEqual(tree);
  });

  test("It should return a tree", () => {
    const nums = [3, 1];

    const tree = new Node(1);
    tree.left = new Node(3);

    expect(sortedArrayToBST(nums)).toEqual(tree);
  });
});
