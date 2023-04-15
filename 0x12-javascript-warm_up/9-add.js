#!/usr/bin/node

// Write a script that prints the addition of 2 integers

const arg = process.argv[2];
const arg1 = process.argv[3];

function add(a,b) {
	return(a + b);
}

const total = add(Number(arg), Number(arg1));
console.log(total);
