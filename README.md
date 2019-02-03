Simon Says

This project represents a digital version of the popular ‘Simon Says’ game.
The game was built with HTML, CSS and JavaScript, with jQuery as an additional library.
It is a memory game; I have designed it to have 12 levels.
UX
The UX was made even simpler than the real game. I decided not to have a power (ON / OFF) button, as it seemed very counter-intuitive when I personally had to use it myself.
There is also no strict button on purpose, as it seems to oversaturate the board.
I think it looks cleaner and simpler when there is only one ‘START’ button, which, upon clicking, immediately initiates the game.
Part of my inspiration for the design, and for having only one play button, was the mobile game “Circles”, which could be argued is a copycat of “Simon Says.”
I believe my design makes more sense for a digital game, rather than a real-life, physical one.

FEATURES

1. Level Counter
•	The level counter is a simple ‘screen’ at the top of the game. It has the numbers 00 by default, indicating that the final level of the game is a double digits one.
I have also programmed it to say the words ‘WINNER!’ and ‘WRONG!’, when appropriate.

2. Game Pads (Colours)
•	As is traditional in the “Simon Says” game, it is made of 4 different pads, each one with a unique colour, and each colour / pad has a unique sounds.
•	Most developers opt out for the choice to have each button’s colour turn a slightly darker shade. In my experience that is a poor design choice, at least in the context of a digital (computer) version of the game, due to the fact that it’s barely noticeable when the colour is initiated. That is why I decided to make my pads (colours) turn black when initiated – something which I also saw in the copy-cat game “Circles.”
*When the player makes a mistake, the error has its unique sound.

3. Start Button
•	The start button initiates the game’s sequence. Some versions of the game online can be seen with the game starting as soon as the player enters the site / app, but I decided to leave it for the player to decide when to begin playing (by having them click the Start Button manually).

•	The button has a simple hover design, where both text and background colour change upon hovering. This has been achieved with pure CSS.

Technologies used
•	Bootstrap 4
•	HTML
•	CSS
•	JavaScript
•	jQuery
Deployment
The website is deployed via GitHub pages.
Locally it can be run by downloading the files from GitHub and loading them on a coding editor.

CREDITS
* W3Schools * Stack Overflow * Udemy
.
MEDIA
The sounds for the pads were downloaded from Amazon.com

The error sound file is a license-free sound.

ACKNOWLEDGEMENTS

My main inspiration was drawn from the “Circles” mobile game (‘Simon Says’ copycat).

TESTING

Due to the simplicity of the game, I felt it unnecessary to perform tests via Jasmine or other similar testing frameworks.

All tests have been performed manually.

To start the game, one must first enter the website and press the start button.

Once the start button has been pressed, the game begins by highlighting one of the pads and also making the appropriate (unique) sound.

The player is expected to correctly press the same pad.

When I press the same pad, the game moves on to the next level and so on.

When I make a mistake, the game gives an ‘ERROR’ message on the level counter, alongside a unique sound.

The game also initiates the same error when the player clicks on a pad, while Simon is performing its sequence. Initially that seemed like a problem, but I have come to look at it as a feature; That is to say – the player is NOT meant to press any pads while Simon is performing its sequence, lest they get an error.

Once the game reaches the final level (12), and the player completes it successfully, they get a ‘WINNER’ message on the level counter.


