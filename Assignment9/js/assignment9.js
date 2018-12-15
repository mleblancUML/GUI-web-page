// Javascript for Assignment 9
// By: Matthew LeBlanc
// email: matthewmleblanc@gmail.com

// Global variable replaceCount
var replaceCount = 3;

// Adding function to generate board
function generateBoard() {
    // Create some variables
    var i;
    var j = 0;
    var snap = '<div class="boardPiece">';
    var board = snap;
    var emptyTile = '<img src="images/Board_Empty.png">';
    var DoubleLetter = '<img src="images/Board_Double_Letter.png">';
    var DoubleWord = '<img src="images/Board_Double_Word.png">';
    // Counters for the amount of randomly generated score multiplier tiles
    var doubleLetterScore = 4;
    var doubleWordScore = 4;
    // Loop through and make the board using indicies from boardTemplate
    for (j = 0; j <= 6; j++) {
        for (i = 0; i <= 6; i++) {
            // Finds the tile to place at a particular spot.
            if (doubleLetterScore != 0) {
                var randInt = Math.floor((Math.random() * 100) + 1)
                if (randInt % 7 == 0) {
                    board += DoubleLetter;
                    doubleLetterScore--;
                } else {
                    board += emptyTile;
                }
            } else if (doubleWordScore != 0) {
                var dwsRandInt = Math.floor((Math.random() * 100) + 1);
                if (dwsRandInt % 7 == 0) {
                    board += DoubleWord;
                    doubleWordScore--;
                } else {
                    board += emptyTile;
                }
            } else {
                board += emptyTile;
            }
            // Close determined div, then start next one.
            board += '</div>';
            if ((i + 1) <= 6) {
                // When i is not the last one, we add snap
                // Otherwise, we just want to go to the next row.
                board += snap;
            }
        }
        // We are at the end of the row for loop. Print <br>
        board += '<br>';
        if ((j + 1) <= 6) {
            board += snap;
        }
    }
    // Get the board element and then add the newly generated board code to the html
    var Board = document.getElementById("board");
    Board.innerHTML = board;
    $(".boardPiece").each(function() {
        $(this).addClass("snapTarget ui-widget-header");
    });
}

// Replace tiles with different letters
function replaceTiles() {
    if (replaceCount != 0) {
        $("#startTiles").find("img").each(function() {
            $(this).attr("src", "images/Scrabble_Tile_" + randGenChar() + '.jpg');
            $(this).css({
                "left": "0",
                "top": "0"
            });
        });
        replaceCount--;
    } else {
        window.alert("You can only replace the tiles 3 times.");
    }
}

// Function to generate a random character
function randGenChar () {
    console.log("Generating Random Char");
    var character = "";
    var alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ_";
    var i = 0;
    character += alphabet.charAt(Math.floor(Math.random() * alphabet.length));
    return character;
}

// Reset the screen button
function Reset() {
    generateBoard();
    replaceCount = 3;
    replaceTiles();
}

function Submit() {
    // Calculate Score
    
    // Display Score
    // Check if the words are valid
}

// Calculate score used in randomize_scribble.js
function calculateScore() {
    $()
}