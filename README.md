# JS_Project_BubbleGame

Bubble Game project is a fun interactive web based game built using HTML, CSS and JavaScript. This game consists of multiple bubbles visible on the screen and the player's aim is to click on these bubble.

HTML Structure: The game interface is built using HTML to define the layout and structure of elements like the game canvas, score display, and any other user interface components.

CSS Styling: CSS is used to style the game elements, including the appearance of the bubbles, background colors, fonts, and layout positioning. 

JavaScript: JavaScript is the core of the game logic. This deals with the movement of the bubbles across the screen, and the player's interaction i.e mouse clicks. Event listeners are used to detect when the player clicks on a bubble and update the score accordingly.

Game Mechanics: The game starts with a number of bubbles appearing randomly on the screen. A value represented as 'Hit' is shown on the left hand side. The goal of the user is to click on a bubble which holds the same value as the Hit value. Upon clicking the right bubble, the value of Hit changes and the bubbles are shuffled. The goal is to score as many points as possible before the Timer present at the center runs out.

Scoring and Feedback: The player's score is displayed prominently on the right hand side of the screen, updating in real-time as bubbles are clicked. If the value displayed by Hit variable matches the value of the bubble clicked, the player is rewarded 10 points and the Hit value, bubble placement changes. In case the player fails to do so, the player is awarded 0 points and the Hit value, bubble placement doesn't change until the player gets it right. 
