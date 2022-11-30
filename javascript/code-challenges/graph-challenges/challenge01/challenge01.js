"use strict";

bfs = (graph, root) => {
  let queue = [];
  let visited = [];
  queue.push(root);
  while (queue.length > 0) {
    let node = queue.shift();
    if (!visited.includes(node)) {
      visited.push(node);
      let neighbors = graph[node];
      for (let i = 0; i < neighbors.length; i++) {
        queue.push(neighbors[i]);
      }
    }
  }
  return visited;
};

module.exports = bfs;
