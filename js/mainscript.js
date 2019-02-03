// CONSTANTS AND VARIABLES

let gameMemory = [];
let playerMemory = [];
const numberOfLevel = 12; // The game runs for 12 levels.

// START GAME
$(document).ready(function() {
    $('.start').click(function() {
        level++;
        startGame();
    });
    // Player Listener
    $(".pad").click(function() {
        id = $(this).attr("id");
        color = $(this).attr("class").split(" ")[1];
        playerMemory.push(id);
        console.log(id + " " + color);
        addClassSound(id, color);
        // check player sequence
        if (!playerSequenceCorrect()) {
            generateError();
            playerMemory = [];
        }
        // check end of sequence
        if (playerMemory.length == gameMemory.length && playerMemory.length < numberOfLevel) {
            level++;
            playerMemory = [];
            startGame();
        }
        // check for winners
        if (gameMemory.length == numberOfLevel) {
            $(".level-counter").text("WINNER!");
        }
    });
});

// Comparing player sequence with game memory
function playerSequenceCorrect() {
    for (let i = 0; i < playerMemory.length; i++) {
        if (playerMemory[i] != gameMemory[i]) {
            return false;
        }
    }
    return true;
}

// GENERATE ERROR
function generateError() {
    console.log("error");
    let counter = 0;
    let myError = setInterval(function() {
        $(".level-counter").text("WRONG!");
        audioError.play();
        counter++;
        if (counter == 3) {
            $(".level-counter").text(level);
            clearInterval(myError);
            playerMemory = [];
            counter = 0;
        }
    }, 600);
}


const audioError = new Audio('../audio/Game_Failure_Sound.mp3');

let gameSounds = [
    'https://s3.amazonaws.com/freecodecamp/simonSound1.mp3',
    'https://s3.amazonaws.com/freecodecamp/simonSound2.mp3',
    'https://s3.amazonaws.com/freecodecamp/simonSound3.mp3',
    'https://s3.amazonaws.com/freecodecamp/simonSound4.mp3',
];

let id = 0;
let color = 0;
let level = 0;

// FUNCTIONS

// GAME SEQUENCE
function startGame() {
    console.log(level);
    $('.level-counter').text(level);
    randomNumber();
    let i = 0;
    let myInterval = setInterval(function() {
        id = gameMemory[i];
        color = $('#' + id).attr("class").split(" ")[1];
        console.log(id + " " + color);
        addClassSound(id, color);
        i++;
        if (i == gameMemory.length) {
            clearInterval(myInterval);
        }
    }, 1000);
}

// GENERATE RANDOM NUMBERS
function randomNumber() {
    let random = Math.floor(Math.random() * 4);
    gameMemory.push(random);
}

// ADD TEMPORARY CLASS AND SOUND
function addClassSound(id, color) {
    $("#" + id).addClass(color + "-active");
    playSound(id);
    setTimeout(function() {
        $("#" + id).removeClass(color + "-active");
    }, 500);
}

// PLAY GAME SOUNDS
function playSound(id) {
    let sound = new Audio(gameSounds[id]);
    sound.play();
}
