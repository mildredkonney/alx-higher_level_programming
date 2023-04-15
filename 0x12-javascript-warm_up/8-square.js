#!/usr/bin/node

// Write a script that prints a square

const arg = process.argv[2];
const squareSize = Number(arg);

if (Number.isNaN(squareSize)) {
	console.log("Missing size");
}
else {
	for (let i = 0; i < squareSize; i++) {
		let square = "";
		for (let j = 0; j < squareSize; j++) {
			square += "X";
		}
		console.log(square);
	}
}
