#!/usr/bin/node
// Write a script that imports an array and computes a new array.

const { list } = require('./100-data');

const newList = list.map((numb, index) => numb * index);

console.log("Initial list:", list);
console.log("New list:", newList);
