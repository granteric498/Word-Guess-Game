var randomWord = "";
var list = [
   "orange",
   "pear",
   "lemon",
   "lime",
   "apricot",
   "peach",
   "plum",
   "grapes",
   "mango",
   "durian",
   "quince",
   "loquat",
   "longan",
   "pluot",
   "damson",
   "feijoa",
   "jackfruit",
   "melon",
   "olives"
];
// Randomly select word from list array
randomNumber = Math.floor(Math.random() * list.length);
randomWord = list[randomNumber];

// Display the random word in an underscore. Example random word = apple. Display = _ _ _ _ _
var underscoreArray = [];
for (i = 0; i < randomWord.length; i++) {
    underscoreArray[i] = "_ "
}
document.getElementById("currentWord").innerHTML = underscoreArray;

// Define variables at start of game. Wins/Losses = 0. Number of guesses = 9.
// User guesses displays the letters that the user has played.
var winCount  = 0;
var loseCount = 0;
var guesses   = 9;
var userGuesses = 0;
var userGuessesArray = [];

// Display the guesses that the user has (9)
document.getElementById("guessesLeft").innerHTML = "Guesses left: " + guesses;

document.addEventListener("keypress", function(event){
    // The key that the user presses is now equal to variable pressedKey. 
    var pressedKey = event.key
        for (i = 0;  i < randomWord.length; i++) {
            // If the pressed key is a letter in randomWord, then the corresponding
            // letter will be displayed.
            if (randomWord[i] === pressedKey) {
                underscoreArray[i] = pressedKey;
                document.getElementById("currentWord").innerHTML = underscoreArray;
                guesses++;
                userGuesses--;
            }
        }
        // If the pressed key is NOT a letter in randomWord, then the following
        // actions follow.
        guesses --;
        document.getElementById("guessesLeft").innerHTML = "Guesses left: " + guesses;
        userGuessesArray[userGuesses] = pressedKey;
        userGuesses++;
        document.getElementById("userGuesses").innerHTML = "Your guesses so far: " + userGuessesArray;

    // If the user's inputted letters match randomWord, user wins.
    if (randomWord === underscoreArray.join("")) {
        alert ("You win! The answer was " + randomWord + "!");
        // Computer automatically randomizes for the next game.
        randomNumber = Math.floor(Math.random() * list.length);
        randomWord = list[randomNumber];
        // Computer adds a win and resets to start of game (number of guesses is reset, 
        // guessed letters are reset, and new randomWord is underscored.)
        winCount++;
        guesses        = 9
        userGuesses    = 0;
        userGuessesArray    = [];
        underscoreArray     = [];
        for (i = 0; i < randomWord.length; i++) {
            underscoreArray[i] = "_ "
        }
        // Displays the new win total and resets.
        document.getElementById("wins").innerHTML = "Wins: " + winCount;
        document.getElementById("guessesLeft").innerHTML = "Guesses left: 9";
        document.getElementById("userGuesses").innerHTML = "Your guesses so far: " + userGuessesArray;
        document.getElementById("currentWord").innerHTML = underscoreArray;
    } 

    // If user drops from guesses = 9 to guesses = 0, then user has lost.
    if (guesses === 0) {
        alert ("You lose! The answer was " + randomWord + "!");
        // Computer automatically randomizes for the next game.
        randomNumber = Math.floor(Math.random() * list.length);
        randomWord = list[randomNumber];
        // Computer adds a loss and resets to start of game (number of guesses is reset, 
        // guessed letters are reset, and new randomWord is underscored.)
        loseCount++;
        guesses        = 9
        userGuesses    = 0;
        userGuessesArray    = [];
        underscoreArray     = [];
        for (i = 0; i < randomWord.length; i++) {
            underscoreArray[i] = "_ "
        }
        // Displays the new win total and resets.
        document.getElementById("losses").innerHTML = "Losses: " + loseCount;
        document.getElementById("guessesLeft").innerHTML = "Guesses left: 9";
        document.getElementById("userGuesses").innerHTML = "Your guesses so far: " + userGuessesArray;
        document.getElementById("currentWord").innerHTML = underscoreArray;
    }
});