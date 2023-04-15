#!/usr/bin/node

// Write a script that prints two arguments passed to it, in the following format: “ is ”

const {argv} = require('process');

let x = 2;
if (argv.length > x) {
	let concat = argv[x] + ' is ' + argv[x + 1];
	console.log(concat);
}

else if (argv.length == 0) {
	console.log('undefine');
}


	
