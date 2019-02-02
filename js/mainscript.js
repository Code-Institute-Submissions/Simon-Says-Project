// START GAME
$(document).ready(function() {
    $('.start').click(function() {
        level++;
        startGame()
    })
    // Player Listener
    $(".pad").click(function() {
        id = $(this).attr("id");
        color = $(this).attr("class").split(" ")[1];
        playerMemory.push(id);
        console.log(id + " " + color);
        addClassSound(id, color);
        // check player sequence
        if (!playerSequenceCorrect()) {
            displayError();
            playerMemory = [];
        }
        // check end of sequence
        if (playerMemory.length == gameMemory.length) {
            level++;
            playerMemory = [];
            startGame();
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



// CONSTANTS AND VARIABLES

let gameMemory = [0, 2, 2];
let playerMemory = [];

// const audio1 = new Audio('../audio/simonSound1.mp3');
// const audio2 = new Audio('../audio/simonSound2.mp3');
// const audio3 = new Audio('../audio/simonSound3.mp3');
// const audio4 = new Audio('../audio/simonSound4.mp3');
// const audio5 = new Audio('../audio/Game_Failure_Sound.mp3');

let gameSounds = [
    '../audio/simonSound1.mp3',
    '../audio/simonSound2.mp3',
    '../audio/simonSound3.mp3',
    '../audio/simonSound4.mp3',
];

let id = 0;
let color = 0;
let level = 0;

let green = $('.green');
let red = $('.red');
let yellow = $('.yellow');
let blue = $('.blue');

// FUNCTIONS

// GAME SEQUENCE
function startGame() {
    console.log(level);
    $('.level-counter').text(level);
    // randomNumber();
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
    // playSound(id)
    setTimeout(function() {
        $("#" + id).removeClass(color + "-active");
    }, 500);
}

// PLAY GAME SOUNDS
function playSound(id) {

}

// EXPERIMENTAL DIV FOR TESTING OUT THE FUNCTIONALITY OF JQUERY

$(".experimental").mouseenter(function() {
    $(this).css("background-color", "yellow");
});

$(".experimental").mouseleave(function() {
    $(this).css("background-color", "red");
});

$("panels").click(function() {
    flash();
});
