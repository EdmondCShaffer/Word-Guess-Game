// Javascript Document
// my variable's
var wordBank = ["Green", "Haze", "Bright", 'Julius',"FullClip","Doubleganger","Luscious","Crusher","Hellbrook","Alena","Beelzebub","Skadoosh","Lightweight","Sprang","Mettle","Artaic","Vicinity","Pier","Santilli","Whirlpool","Morph","Awake","Matiss","Bennington"];
var underScores = [];
var wins = 0;
var losses = 0;
var playersGuess = [];
var guessesLeft = 8;
var gameStart = false;
var wordPicked = "";
var wrongletterbank = [];

// doc.getelementbyId variable's
var win = document.getElementById("winner");
var loss = document.getElementById("loser");
var guess = document.getElementById("guessleft");
var wrongLetter = document.getElementById("wrongLetters");
var underscores = document.getElementById("fillunderscores");
var startGame = document.getElementById("buttonStart")


// functon's

function newGame() {
    gameStart = true;
    guessesLeft = 8;
    wrongletterbank = [];
    underScores = [];
    playersGuess = [];


    wordPicked = wordBank[Math.floor(Math.random() * wordBank.length)];

    for (var i = 0; i < wordPicked.length; i++) {
        if (wordPicked[i] === " ") {

            underScores.push("");

        } else {
            underScores.push(" _ ");
        }
    }
    document.getElementById("fillunderscores").textContent = underScores.join("");
    document.getElementById("guessleft").textContent = guessesLeft;
    document.getElementById("wrongLetters").text = wrongletterbank;

}

function letterGuess(letter) {
    console.log(letter);

    if (gameStart === true && playersGuess.indexOf(letter) === -1) {

        playersGuess.push(letter);

        for (var i = 0; i < wordPicked.length; i++) {

            if (wordPicked[i].toLowerCase() === letter.toLowerCase()) {
                underScores[i] = letter;
            }
        }

        document.getElementById("fillunderscores").textContent = underScores.join("");
        wrongLetterGuess(letter);
    }
    else {
        if (!gameStart) {
            alert("Click Bottom's Up Play");
        }
        else {
            alert("Are you seeing double? Try Another Letter.");
        }
    }
}

function wrongLetterGuess(letter) {

    if (underScores.indexOf(letter.toLowerCase()) === -1 &&
        underScores.indexOf(letter.toUpperCase()) === -1) {
        guessesLeft--;
        wrongletterbank.push(letter);

        document.getElementById("wrongLetters").textContent = wrongletterbank.join(" ");
        document.getElementById("guessleft").textContent = guessesLeft;
    }
    checkLoss();
    winn();
}

function checkLoss() {
    if (guessesLeft === 0) {
        losses++;
        gameStart = false;
        document.getElementById("loser").textContent = losses;
        alert("You Lost! You Must Be DRUNK! Call a Ride Home.");
    }
    
}


function winn() { debugger
    if (wordPicked.toLowerCase() === underScores.join("").toLowerCase()) {
        wins++;
        gameStart = false;
        document.getElementById("winner").textContent = wins;
        alert("CHEERS! Your a Winner")
    }
    
}

    document.onkeyup = function (event) { 
        console.dir(event);
        if (event.keyCode >= 65 && event.keyCode <= 90) {
            letterGuess(event.key);
        }

    }

    document.getElementById("buttonStart").addEventListener("click", newGame);



