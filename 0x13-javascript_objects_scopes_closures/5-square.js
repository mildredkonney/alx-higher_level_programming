#!/usr/bin/node
// Write a class Square that defines a square
// and inherits from Rectangle of 4-rectangle.js:

const Rectangle = require('./4-rectangle.js').Rectangle;

function Square (size) {
  Rectangle.call(this, size, size);
}

module.exports = { Square, Rectangle };
