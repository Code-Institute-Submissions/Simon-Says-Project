// START GAME
$(document).ready(function() {
    $('.start').click(function() {
        
    })
})

// CONSTANTS AND VARIABLES

let gameMemory = [];

let panels = ['red']

const audio1 = new Audio('../audio/simonSound1.mp3');
const audio2 = new Audio('../audio/simonSound2.mp3');
const audio3 = new Audio('../audio/simonSound3.mp3');
const audio4 = new Audio('../audio/simonSound4.mp3');
const audio5 = new Audio('../audio/Game_Failure_Sound.mp3');

let green = $('#green');
let red = $('#red');
let yellow = $('#yellow');
let blue = $('#blue');

// FUNCTIONS
function startGame()

// EXPERIMENTAL DIV FOR TESTING OUT THE FUNCTIONALITY OF JQUERY

$(".experimental").mouseenter(function() {
    $(this).css("background-color", "yellow");
});

$(".experimental").mouseleave(function() {
    $(this).css("background-color", "red");
});

function flash() {
    $("panels").mousedown(function() {
        $(this).css("background-color", "black");
    });
}

$("panels").click(function() {
    flash();
});

