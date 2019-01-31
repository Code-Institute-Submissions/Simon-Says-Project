// START GAME
$(document).ready(function() {
    $('.start').click(function() {
        level++;
        startGame()
    })
})

// CONSTANTS AND VARIABLES

let gameMemory = [];
let playerMemory = [];

let panels = ['red']

const audio1 = new Audio('../audio/simonSound1.mp3');
const audio2 = new Audio('../audio/simonSound2.mp3');
const audio3 = new Audio('../audio/simonSound3.mp3');
const audio4 = new Audio('../audio/simonSound4.mp3');
const audio5 = new Audio('../audio/Game_Failure_Sound.mp3');

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
    randomNumber();
    let i = 0;
    let myInterval = setInterval(function() {
        id = gameMemory[i];
        color = $('#'+id).attr("class").split(" ")[1];
        console.log(id+" "+color);
        addClassSound(id, color);
    }, 1000);
}

// GENERATE RANDOM NUMBERS
function randomNumber() {
    let random = Math.floor(Math.random()* 4);
    gameMemory.push(random);
}

// ADD TEMPORARY CLASS AND SOUND
function addClassSound(id, color){
    $("#" + id).addClass(color+"active");
    playSound
    setTimeout(function() {
        $("#"+id).removeClass(color+"-active")
    }, 500);
}

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

