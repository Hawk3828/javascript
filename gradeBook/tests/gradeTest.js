var book = require("../lib/grades.js"). book ;

// This export is used to reset the _grades array so that it can be used again
exports ["setUp"] = function (callback){
		book.reset();
	    callback();
};

//This export is a test to get a letter grade for 
exports ["Can compute a letter grade of 'A' "] = function (test){
		book.addGrade(100);
		book.addGrade(90);
		
		var result = book.getLetterGrade();
		
		test.equal( result , "A") ;
		test.done();
};

// This test is the export that test if the grades in the _grades array average out to 75
exports [ "Can average grades"] = function (test) {
		book.addGrade(100) ;
		book.addGrade(50) ;
	
		var average = book.getAverage() ;
	
		test.equal (average, 75) ;
		test.done() ;
};

// This export is the test that verifies the amount  elements being evaluated
exports [ "Can add new grades"] = function (test)  {
		book.addGrade(90) ;

		var count = book.getCountOfGrades() ;
		test.equal (count , 1) ;
		test.done() ;
};






