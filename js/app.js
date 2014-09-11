$( document ).ready(function() {
	/*--- Display information modal box ---*/
  	$(".what").click(function(){
    	$(".overlay").fadeIn(1000);

  	});

  	/*--- Hide information modal box ---*/
  	$("a.close").click(function(){
  		$(".overlay").fadeOut(1000);
  	});

// VARIABLES 
var newNumber = Math.floor(Math.random() * 10) + 1;
var guessCount = 0;
var userGuess = $("#userGuess").val();

var newGame = function (event) {
    //Generate and store random variable between 1 and 100
    event.preventDefault();
    return newNumber;
    //Clear all previously stored values (See below)
};

var addGuess = function () {
    //increase guessCount by 1
    $("#count").replaceWith(guessCount + 1);
    //append guess to ul#guessList 
    $("#guessList").append("<li>" + userGuess + "</li>");
    };
    
//START NEW GAME 
$(".new").on("click", newGame());

    
//GUESS A NUMBER
$("#guessButton").on("click", function (event) {
    event.preventDefault();
    if (userGuess === newNumber) {
        $("#feedback").find("h2").replaceWith("Way to go! That is correct! Click on '+NEW GAME' to start a new game."); 
    }
    else if (userGuess === NaN || userGuess > 100 || userGuess < 1) 
    {
    $("#feedback").find("h2").replaceWith("Brrr! Freezing!");
        addGuess();
    }
    else if (userGuess >= newNumber + 50 || userGuess <= newNumber - 50)           $("#feedback").find("h2").replaceWith("Brrr! Freezing!");
        addGuess();
    }
    else if (userGuess >= newNumber + 30 || userGuess <= newNumber - 30) {      $("#feedback").find("h2").replaceWith("Cold.");
    addGuess();
    }
    else if (userGuess >= newNumber + 20 || userGuess <= newNumber - 20) {     $("#feedback").find("h2").replaceWith("Warm.");
    addGuess();
    }
    else if (userGuess >= newNumber + 15 || userGuess <= newNumber - 15) {
$("#feedback").find("h2").replaceWith("Hot!");
    addGuess();  
    }
    else if (userGuess >= newNumber + 10 || userGuess <= newNumber - 10) {
$("#feedback").find("h2").replaceWith("On Fire!!");
    addGuess(); 
    }
);

});

    



