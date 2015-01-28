$(document).ready(function() {
	/*--- Display information modal box ---*/
  	$(".what").click(function(){
    	$(".overlay").fadeIn(1000);

  	});

  	/*--- Hide information modal box ---*/
  	$("a.close").click(function(){
  		$(".overlay").fadeOut(1000);
  	});

// VARIABLES 
var newNumber = Math.floor(Math.random() * (100 - 1)) + 1;
var guessCount = 0;
    
// NEW GAME
var newGame = function (event) {
    //Generate and store random variable between 1 and 100
    guessCount = 0;
    $("#count").html(guessCount);
    $("#feedback").html("<h2>Make your Guess!</h2>");
    $("#guessList").empty();
    $("#userGuess").val("");
    event.preventDefault();
    newNumber = Math.floor(Math.random() * (100 - 1)) + 1;
};

//GUESS A NUMBER 
var makeGuess = function() {
    //USER GUESS
    var userGuess = $("#userGuess").val();
    //ADD GUESS
    var addGuess = function() {
    //increase guessCount by 1
    guessCount = guessCount + 1;
    $("#count").html(guessCount);
    //append guess to ul#guessList 
    $("#guessList").append("<li>" + userGuess + "</li>");
    };
    //CHECK IF HOT OR COLD
    if (userGuess == newNumber) {
        $("#feedback").html("<h2>Way to go! That is correct! Click on '+NEW GAME' to start a new game.</h2>"); 
    }
    else if (userGuess == NaN || userGuess > 100 || userGuess < 1) {
        $("#feedback").html("<h2>That is not a number!</h2>");
        addGuess();
    }
    else if (userGuess >= newNumber + 50 || userGuess <= newNumber - 50)   {        
        $("#feedback").html("<h2>Brrr! Freezing!</h2>");
        addGuess();
    }
    else if (userGuess >= newNumber + 30 || userGuess <= newNumber - 30) {      
        $("#feedback").html("<h2>Cold.</h2>");
        addGuess();
    }
    else if (userGuess >= newNumber + 20 || userGuess <= newNumber - 20) {     
        $("#feedback").html("<h2>Warm.</h2>");
        addGuess();
    }
    else if (userGuess >= newNumber + 10 || userGuess <= newNumber - 10) {
        $("#feedback").html("<h2>Hot!</h2>");
        addGuess();  
    }
    else if (userGuess >= newNumber + 1 || userGuess <= newNumber - 1) {
        $("#feedback").html("<h2>On Fire!!</h2>");
        addGuess(); 
    } 
};
                  
//MAKE GUESS                
$("#guessButton").on("click", makeGuess);
//START NEW GAME 
$(".new").on("click", newGame); 


});

    



