#!/usr/bin/node

// Write a function that prints the number of 
// arguments already printed and the new argument value.

exports.converter = function (base) {
    return function(numb) {
      return numb.toString(base);
    };

};
