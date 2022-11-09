"use strict";

function repeatedWord(str) {
  let words = str.split(" ");
  let hash = {};
  for (let i = 0; i < words.length; i++) {
    if (hash[words[i]]) {
      return words[i];
    } else {
      hash[words[i]] = 1;
    }
  }
  return "No Repetition";
}

module.exports = repeatedWord;
