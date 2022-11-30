// Write your test here

// same as challenge01.test.js

"use strict";

const bfs = require("./challenge02");

describe("breadth first search", () => {
  it("should return the correct order of visited nodes", () => {
    let graph = {
      a: ["b", "c", "d"],
      b: ["a", "d"],
      c: ["a", "e"],
      d: ["a", "b"],
      e: ["c"],
      f: [],
    };
    expect(bfs(graph, "a")).toEqual(["a", "b", "c", "d", "e"]);
  });
});
