var getDieSize = function() {
	return Math.ceil( 6 * Math.random());
};


var firstDie = getDieSize(); 
var secondDie = getDieSize();

console.log(" Value of Die # 1 is: " + firstDie); 
console.log(" Value of Die # 2 is: " + secondDie );

console.log(" You rolled a " + (firstDie + secondDie));

Yank this data to new Buffer
