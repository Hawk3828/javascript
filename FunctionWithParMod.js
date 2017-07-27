var getDieSize = function(dieSize) {
	return Math.ceil( dieSize * Math.random());
};

var firstDie = getDieSize(10); 
var secondDie = getDieSize(10);

console.log(" Value of Die # 1 is: " + firstDie); 
console.log(" Value of Die # 2 is: " + secondDie );

console.log(" You rolled a " + (firstDie + secondDie));

Yank this data to new Buffer
