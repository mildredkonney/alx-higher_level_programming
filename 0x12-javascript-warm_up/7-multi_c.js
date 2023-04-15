#!/usr/bin/node

// Write a script that prints x times “C is fun”

const args = process.argv.slice(2);
const x = Number(arg);

if (isNaN(x)) {
	console.log("Missing number of occurrences");
} else {
	for (let i = 0; i < x; i++) {
		console.log("C is fun");
	}
}
