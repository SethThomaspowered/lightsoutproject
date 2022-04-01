# Lights Out Project
Using  Test Driven Design to recreate the classic game Lights Out

For my Javascript course, I am challenging myself to use test driven design to build out the game Lights Out.
I also created a game of Tic Tac Toe.

## User Stories

### Lights Out
- A player should be able to reset the gameboard.
- When a player clicks on a square it will toggle from white to black and the surrounding squares will toggle.
- The goal of the game is get all of the squares to be black.   
- A player should be able to see how long it takes them to solve the puzzle.
-
## Javascript requirements

- Retrieve data from an external API and display data in your app (such as with fetch() or with AJAX)
  - When a game of tic tac toe ends in a tie. A random cat image is generated from an external api.
- Create a form and save the values (on click of Submit button) to an external file 
 - Entering a player name in settings saves the information to session storage. This retrieved by on the scoreboard of the tic tac toe game.
  
- Create an array, dictionary or list, populate it with multiple values, retrieve at least one value, and use or display it in your application

- Create and use a function that accepts two or more values (parameters), calculates or determines a new value based on those inputs, and returns a new value
  - Game board for Lights Out is created in javascript and the size of the board can changed by adjusting the arguments.
- Implement a log that records errors, invalid inputs, or other important events and writes them to a text file
  - Players are alerted to wrong moves when playing tic tac toe. 

- Create 3 or more unit tests for your application (and document how to run them)
  - I created some tests with mocha. Run npm install to download mocha from the package.json file. npm test will run the unit tests.
- Build a conversion tool that converts user input to another type and displays it (ex: converts cups to grams)
  - I have a timer for players to use to track how long it takes them to complete Lights Out. 



