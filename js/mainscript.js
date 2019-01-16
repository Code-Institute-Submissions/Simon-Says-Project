// CONSTANTS AND VARIABLES

let gameMemory = [];

const audio1 = new Audio('../audio/simonSound1.mp3');
const audio2 = new Audio('../audio/simonSound2.mp3');
const audio3 = new Audio('../audio/simonSound3.mp3');
const audio4 = new Audio('../audio/simonSound4.mp3');
const audio5 = new Audio('../audio/Game_Failure_Sound.mp3');

function repeatSequence(){
    if (gameMemory = true) {
        gameMemory.repeatSequence(2);
    }
    else {audio5.play();}    
}

// EXPERIMENTAL DIV FOR TESTING OUT THE FUNCTIONALITY OF JQUERY

$(".experimental").mouseenter(function() {
    $(this).css("background-color", "yellow");
});

$(".experimental").mouseleave(function() {
    $(this).css("background-color", "red");
});

// GREEN BUTTON FUNCTIONS

$("#green").click(function() {
    console.log("PRESS GREEN");
    gameMemory.push("green");
    console.log(gameMemory);
    audio1.play();
});

$('#green').mousedown(function() {
    $(this).css("background-color", "black");
});

$('#green').mouseup(function() {
    $(this).css("background-color", "green");
});

// BLUE BUTTON FUNCTIONS

$("#blue").click(function() {
    console.log("PRESS BLUE");
    gameMemory.push("blue");
    console.log(gameMemory);
    audio2.play();
});

$('#blue').mousedown(function() {
    $(this).css("background-color", "black");
});

$('#blue').mouseup(function() {
    $(this).css("background-color", "blue");
});

// YELLOW BUTTON FUNCTIONS

$("#yellow").click(function() {
    console.log("PRESS YELLOW");
    simonList.push("yellow");
    console.log(simonList);
    audio3.play();
});

$('#yellow').mousedown(function() {
    $(this).css("background-color", "black");
});

$('#yellow').mouseup(function() {
    $(this).css("background-color", "yellow");
});

// RED BUTTON FUNCTIONS

$("#red").click(function() {
    console.log("PRESS RED");
    simonList.push("red");
    console.log(simonList);
    audio4.play();
});

$('#red').mousedown(function() {
    $(this).css("background-color", "black");
});

$('#red').mouseup(function() {
    $(this).css("background-color", "red");
});

// GAME FUNCTIONS
$('container').children().click(function() {
    repeatSequence();
});





