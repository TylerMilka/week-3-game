
//Defies Variables
var wins = $('#wins');
var losses = $('#losses');
var guessesLeft = $('#guessesLeft');
var guessesSoFar = $('#guessesSoFar');



var userGuess = $("document").keypress(function(event){
	if (event.keycode == 'a'){
		wins ++1
	}
	
})
