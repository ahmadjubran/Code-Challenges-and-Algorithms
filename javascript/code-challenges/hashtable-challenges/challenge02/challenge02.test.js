"use strict";

const repeatedWord = require("./challenge02.js");

describe("Repeated Word", () => {
  it("should return the first repeated word in a string", () => {
    expect(repeatedWord("ASAC is a department at LTUC. ASAC teaches programming in LTUC.")).toEqual("ASAC");
    expect(repeatedWord("I am learning programming at ASAC.")).toEqual("No Repetition");
  });
});
