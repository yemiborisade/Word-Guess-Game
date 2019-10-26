// array of words
var strangeWords = ["eleven", "hopper", "lucas", "mad max", "demidog", "waffles", "hawkins"];

startGame();

//chooses word randomly
function startGame () {
console.log(wrongWord)
document.getElementById("wrongGuess").innerHTML = "";

var randNum = Math.floor(Math.random() * strangeWords.length);
var rightWord = [];
var wrongWord = [];
var chosenWord = strangeWords[randNum];
var underScore = [];
var wins = 0;
var losses = 0;
var guessesLeft = 10;
var winsElem = document.getElementById("wins");
var lossesElem = document.getElementById("losses");


// dom manipulation
var docUnderScore = document.getElementsByClassName('underscores');
var docRightGuess = document.getElementsByClassName('rightGuess');
var docWrongGuess = document.getElementsByClassName('wrongGuess');
document.getElementById("numGuesses").textContent = guessesLeft;


// create underscores based on length of word
var generateUnderscore = function() {
    for (let i = 0; i < chosenWord.length; i++) {
        underScore.push("_ ");
    }
    return underScore;
}

// get users guess
document.addEventListener('keypress', (event) => {
    var keycode = event.keyCode;
    var keyword = String.fromCharCode(keycode);

// is users guess is right 
    if (chosenWord.indexOf(keyword) > -1) {
    // add to users guess is right
        rightWord.push(keyword);
       
    for (let i = 0; i < chosenWord.length; i++) {
        if (chosenWord[i] === keyword)
        underScore[i] = keyword
    } 
    // replace underscore with right letter
        // underScore[chosenWord.indexOf(keyword)] = keyword;
        document.getElementById("underscores").textContent = underScore.join(' ');
        // document.getElementById("rightGuess").textContent = rightWord;
    // checks to see if user word matches guesses
        if(underScore.join('') == chosenWord) {
            alert('You Win');
            startGame();
        }
    }   
        else {
            wrongWord.push(keyword);
            guessesLeft--;
            // changes to HTML
            document.getElementById("numGuesses").textContent = guessesLeft;
            document.getElementsByClassName("wrongGuess").textContent = wrongWord;
        }

        if (wrongWord.indexOf(keyword) < 0) {
            wrongWord.push(keyword);
            document.getElementById("wrongGuess").textContent = wrongWord;
        } else {
            alert("Youve used this letter!")
        }   console.log(underScore)
        if (underScore.indexOf("_ ") === -1) {
        console.log("wins")
        wins++;
      } else if (wrongWord === chosenWord) {
        losses++;
      }

      winsElem.textContent = wins;
      lossesElem.textContent = losses;
      console.log(lossesElem)

});
// console.log(generateUnderscore().join(''));
document.getElementById("underscores").textContent = generateUnderscore().join(' ')

// Generate wins and losses counter on page 

}