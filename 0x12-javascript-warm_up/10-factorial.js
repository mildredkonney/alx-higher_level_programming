#!/usr/bin/node

// Write a script that computes and prints a factorial.

const [arg] = process.argv.slice(2);

function factorial(n) {
	if (isNaN(n)) {
		return 1;
	} else if (n === 0) {
		return 1;
	} else {
		return n * factorial(n - 1);
	}
}

console.log(factorial(Number(arg)));
