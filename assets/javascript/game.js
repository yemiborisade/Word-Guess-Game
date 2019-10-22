<script type="text/javascript">


// array of words
var strangeWords = ["eleven", "hopper", "starcourt mall", "mad max", "demidog", "hawkins"];

//chooses word randomly
let randNum = Math.floor(Math.random() * strangeWords.length);
let rightWord = [];
let wrongWord = [];
let chosenWord = strangeWords[randNum];
let underScore = [];

// dom manipulation
let docUnderScore = document.getElementsByClassName('underscore');
let docRightGuess = document.getElementsByClassName('rightGuess');
let docWrongGuess = document.getElementsByClassName('wrongGuess');

// create underscores based on length of word
let generateUnderscore = () => {
    for (let i = 0; i < chosenWord.lentgh; i++) {
        underScore.push("_");
    }
    return underScore;
}

// get users guess
document.addEventListener('keypress', (event) => {
    let keycode = event.keyCode;
    let keyword = String.fromCharCode(keycode);

// is users guess is right 
    if (chosenWord.indexOf(keyword) > -1) {
    // add to users guess is right
        rightWord.push(keyword);
        
    // replace underscore with righ letter
        underScore[chosenWord.indexOf(keyword)] = keyword;
            docUnderScore[0].innerHTML = underScore.join(' ');
            RightGuess[0].innerHTML = rightWord;
    // checks to see if user word matches guesses
        if(underScore.join('') == chosenWord) {
            alert('You Win');
        } else wrongWord.push(keyword); 
        docWrongGuess[0].innerHTML = wrongWord;
    }    
});

docUnderScore[0].innerHTML = generateUnderscore().join(' ');