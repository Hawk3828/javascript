var book = require("./lib/grades").book;
var express = require("express");
var app = express();

//This app.get command send the sting Hell Hawlk when root is entered in URL
app.get("/", function(req,res){
	
	res.send("Hell Hawk");
});	

//This app.get calculates the average numbers you put in URL after grade=....
app.get("/grade", function(req,res){
	
	// The split will produce an array with the value you put in between the split
	var grades = req.query.grades.split(",");
	
	for( var i = 0; i < grades.length ; i++){
		book.addGrade(parseInt(grades[i]));
	}
	var average = book.getAverage();
	var letter = book.getLetterGrade();
	
	res.send("Your average is  " +  average + " grade " + letter);
});

app.listen(3000);
console.log("Server ready...");

