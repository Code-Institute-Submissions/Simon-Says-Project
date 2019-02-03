# **SIMON SAYS**

This project represents a digital version of the popular 'Simon Says' game.

The game was built with HTML, CSS and JavaScript, with jQuery as an additional library.

It is a memory game; It is designed to have 12 levels.

## **UX** 

The UX was made even simpler than the real game. I decided not to have a power (ON / OFF) button, as it seemed very counter-intuitive when I personally had to use it myself.
There is also no strict mode on purpose, as it seems to oversaturate the board.
It looks cleaner and simpler when there is only one 'START' button, which, upon clicking, immediately initiates the game.
Part of my inspiration for the design, and for having only play button, was the mobile game 'Circles', which could be argued is a copycat of 'Simon Says.'
I believe my design makes more sense for a digital game.

## **FEATURES**

### **1.Level counter**

The level counter is a simple 'screen' at the top of the game. It has the numbers 00 by default, indicating that the final level of the game is double digits.
I have programmed it to say the words 'WRONG' and 'WINNER' when appropriate.

### **2. Game Pads (Colours)**

As is traditional in the 'Simon Says' game, it is made of four different pads, each one with a unique colour, and each colour / pad has a unique sound.
Most developers choose to have each button's colour turn a slightly darker shade when the button is activated. From my observation, that is a poor design. It might make sense in a physical version of the game, but it is barely noticeable on the screen of a computer / mobile device. I chose to have the pads turn black when initiated. It is something that I saw on a copycat of 'Simon' called 'Circles' - a mobile app game.

### **3. Start Button**

The start button initiates the game's sequence. Some versions of the game online can be seen with the game starting as soon as the player enters the site / app, but I decided to leave it for the player to decide when to begin playing (by having them click the Start button manually).
The button has a simple hover design, where both text and background color change upon hovering. This has been achieved with pure CSS.

### **Technologies Used**

*Bootstrap 4*
*HTML*
*CSS*
*JavaScript*
*jQuery*

### **Deployment**

The website is deployed via GitHub Pages.
Locally it can be run by downloading the files from GitHub and loading them onto a coding editor.

### **Credits**

*W3Schools* - *Stack Overflow* - *Udemy*

### **Media**

The sounds for the pads were downloaded from Amazon.com.
The error sound file is a license-free sound.

### **Acknowledgements**

My main inspiration was drawn from the 'Circles' mobile app game.

### **Testing**

Due to the simplicity of the game, I felt it unnecessary to perform tests via Jasmine or other similar testing frameworks.
All tests have been performed manually.
I open the website and press the start button, which initiates one click and sound on the pad (at random).
I press the correct colour and Simon increments by one. When I keep clickin on the correct pads, Simon keeps incrementing.
When I make a mistake, Simon gives an error sound and I have to try again and get it right, lest it takes me to the next level.

![Simon Error Screenshot](https://i.imgur.com/hlkCz2U.jpg "Simon Error")

When I make an error, not only does it make the unique error sound, but I have also designed it to say the word 'WRONG!' on the level counter pad.
Once the game reaches the final level (12), and the player completes it successfully, they get a 'WINNER' message on the level counter.

