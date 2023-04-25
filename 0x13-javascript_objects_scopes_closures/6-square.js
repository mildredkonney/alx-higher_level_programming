#!/usr/bin/node
// Write a class Square that defines a square
// and inherits from Square of 5-square.js:

const Rectangle = require('./5-rectangle');

class Square extends Rectangle {
  constructor(size) {
    super(size, size);
  }

  charPrint(c) {
    if (c === undefined) {
      c = "X";
    }
    const row = c.repeat(this.width);
    for (let i = 0; i < this.height; i++) {
      console.log(row);
    }
  }
}
