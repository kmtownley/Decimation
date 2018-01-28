# Decimation

### About
  Decimals...Blossoms...what more could you ask for in a game. Tapping into the gamification trend in education, Decimation is a one player game that not only tests your knowledge of decimal places but also your hand-eye coordination. A decimal value will appear in written notation at the top of the playing field, and depending on the level of the game, blossoms will float across the field with random decimal values. By clicking the correct blossom you earn points and knowledge.  

### Functionality & MVP

Decimation will allows users to:
  -Start, Pause, Stop and restart a game
  -Gain points by exploding blossoms with matching decimal values.
  -Earn a spot on the leader board through seed accumulation!!
  -Level up to increase both the difficult of the numbers and the speed of the fruit

### Wireframes
  Decimation will be a single page app with controls that allow users to Start, Stop, Pause and Begin a new game. Additionally, the users score will be displayed and updated in real time. Finally, there will be an introductory modal explaining the game. The page will also have live links to both my Linked in account and Github repo.
![alt text](assets/images/wireframe.png)

### Composition and Technology
  The app will be created using the subsequent technologies:
    * webpack to bundle js files
    * JavaScript for game logic
    * Canvas, CSS3, & HTML5 for rendering

  The game will rely upon four scripts:
    * game.js: will handle the logic of the game board and will handle the updating necessary elements, which will cause rerenders.  
    * blossom.js: will manage the logic of the blossoms being displayed on the board. Each blossom object will hold a decimal value and a unqie path.
    * player.js: responsible for the player's scores.
    * word.js: will be responsible for displaying corresponding decimal values that match visible blossoms on the screen in a random fashion.
    * explosion.js will cause explosions to render at corresponding blossom coordinates.

### Implementation Details

Day 1:
  * Implement all node modules, including browserfy. Create a simple entry file.
  * Learn Canvas

Day 2:
  * Build out the game.js logic and allow the blossom objects to communicate with the game object.
  * Create the word.js to connect with the blossom.js and game.js. Ensure each blossom object has the match its decimal value with the word vale.
  * Add the word container, which will hold the question value and sync its display with visible blossoms on the screen.

Day 3:
  * Create the player.js that will connect to the game.js.
  * Implement modular functions that will handle the explosion logic of the game.

Day 4:
  * Integrate user controls that will allow the player to start, stop and reset the game.
  * Implement a leader board that will locally store the top ten seed scores
