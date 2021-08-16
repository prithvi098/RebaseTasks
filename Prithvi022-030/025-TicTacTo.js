// Create a tic-tac-toe application that can be played from console.
// Player 1 and Player 2 should get alternate turns to mark the grid. 
// Make use of 2D array for saving the data. 
// After every turn you need to display the state of the tic-tac-toe to the user.
// 
//INcompleted Task
const prompt = require('prompt-sync')();
// const input = prompt("Enter your name ")
// console.log("Your name is :", input);


//Create a 3x3 array that represents our tic tac toe board
let board = [[], [], []
]

//Initialize our board with dashes (empty positions)
for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
        board[i][j] = '-';
    }
}
console.log(board);
//Create a Scanner and ask the players for their names

process.stdout.write("Let's play Tic Tac Toe!\n");
const p1 = prompt("Player 1, what is your name? ");
const p2 = prompt("Player 2, what is your name? ");

//Create a player1 boolean that is true if it is player 1's turn and false if it is player 2's turn
let player1 = true;

//Create a gameEnded boolean and use it as the condition in the while loop
let gameEnded = false;
while (!gameEnded) {

    //Draw the board
    drawBoard(board);

    //Print whose turn it is
    if (player1) {
        process.stdout.write(p1 + "'s Turn (x):");
    } else {
        process.stdout.write(p2 + "'s Turn (o):");
    }

    //Create a char variable that stores either 'x' or 'o' based on what player's turn it is
    let c = '-';
    if (player1) {
        c = 'x';
    } else {
        c = 'o';
    }

    //Create row and col variables which represent indexes that correspond to a position on our board
    let row = 0;
    let col = 0;

    //Only break out of the while loop once the user enters a valid position
    while (true) {

        //Ask the user for what position they want to place their x or o
        const row = prompt("Enter a row number (0, 1, or 2): ")
        const col = prompt("Enter a column number (0, 1, or 2): ");

        //Check if the row and col are 0, 1, or 2
        if (row < 0 || col < 0 || row > 2 || col > 2) {
            process.stdout.write("This position is off the bounds of the board! Try again.");

            //Check if the position on the board the user entered is empty (has a -) or not
        } else if (board[row][col] != '-') {
            process.stdout.write("Someone has already made a move at this position! Try again.");

            //Otherwise, the position is valid so break out of the while loop
        } else {
            break;
        }

    }

    //Set the position on the board at row, col to c
    board[row][col] = c;

    //Check to see if either player has won
    if (playerHasWon(board) == 'x') {
        process.stdout.write(p1 + " has won!");
        gameEnded = true;
    } else if (playerHasWon(board) == 'o') {
        process.stdout.write(p2 + " has won!");
        gameEnded = true;
    } else {

        //If neither player has won, check to see if there has been a tie (if the board is full)
        if (boardIsFull(board)) {
            process.stdout.write("It's a tie!");
            gameEnded = true;
        } else {
            //If player1 is true, make it false, and vice versa; this way, the players alternate each turn
            player1 = !player1;
        }

    }

}

//Draw the board at the end of the game
drawBoard(board);



//Make a function to draw the tic tac toe board
function drawBoard(board) {
    let i, j;
    process.stdout.write("Board: \n");
    for (i = 0; i < 3; i++) {
        //The inner for loop prints out each row of the board
        for (j = 0; j < 3; j++) {
            process.stdout.write(board[i][j]);
        }
        //This print statement makes a new line so that each row is on a separate line
        process.stdout.write("\n");
    }
}

//Make a function to see if someone has won and return the winning char
function playerHasWon(board) {

    //Check each row
    for (let i = 0; i < 3; i++) {
        if (board[i][0] == board[i][1] && board[i][1] == board[i][2] && board[i][0] != '-') {
            return board[i][0];
        }
    }

    //Check each column
    for (let j = 0; j < 3; j++) {
        if (board[0][j] == board[1][j] && board[1][j] == board[2][j] && board[0][j] != '-') {
            return board[0][j];
        }
    }

    //Check the diagonals
    if (board[0][0] == board[1][1] && board[1][1] == board[2][2] && board[0][0] != '-') {
        return board[0][0];
    }
    if (board[2][0] == board[1][1] && board[1][1] == board[0][2] && board[2][0] != '-') {
        return board[2][0];
    }

    //Otherwise nobody has not won yet
    return ' ';

}

//Make a function to check if all of the positions on the board have been filled
function boardIsFull(board) {
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            if (board[i][j] == '-') {
                return false;
            }
        }
    }
    return true;
}
