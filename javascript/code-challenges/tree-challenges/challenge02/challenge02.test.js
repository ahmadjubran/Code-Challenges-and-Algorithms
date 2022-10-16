"use strict";

const { Node, breadthFirst } = require("./challenge02");

describe("Testing challenge 2", () => {
  test("It should return true if the trees are the same", () => {
    const p = new Node(1);
    p.left = new Node(2);
    p.right = new Node(3);

    const q = new Node(1);
    q.left = new Node(2);
    q.right = new Node(3);

    expect(breadthFirst(p)).toEqual(breadthFirst(q));
  });

  test("It should return false if the trees are not the same", () => {
    const p = new Node(1);
    p.left = new Node(2);

    const q = new Node(1);
    q.left = new Node(null);
    q.right = new Node(2);

    expect(breadthFirst(p)).not.toEqual(breadthFirst(q));
  });

  test("It should return false if the trees are not the same", () => {
    const p = new Node(1);
    p.left = new Node(2);
    p.right = new Node(1);

    const q = new Node(1);
    q.left = new Node(1);
    q.right = new Node(2);

    expect(breadthFirst(p)).not.toEqual(breadthFirst(q));
  });
});
