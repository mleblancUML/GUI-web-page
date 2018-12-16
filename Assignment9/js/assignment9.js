// Javascript for Assignment 9
// By: Matthew LeBlanc
// email: matthewmleblanc@gmail.com

// Global variable replaceCount
var replaceCount = 3;
var DWS = 0;
var CurrentPlayer = '.Score' + Player;
var tileUseCount = 0;

// Adding function to generate board
function generateBoard() {
    // Create some variables
    var i;
    var j = 0;
    var snap = '<div class="boardPiece">';
    var board = snap;
    var emptyTile = '<img src="images/Board_Empty.png">';
    var DoubleLetter = '<img class="DL" src="images/Board_Double_Letter.png">';
    var DoubleWord = '<img class="DW" src="images/Board_Double_Word.png">';
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
    // Add droppability to the board pieces.
    $(".snapTarget").droppable( { 
        drop: function( event, ui ) {
            // Testing dropping functionality
            console.log("Dropped");
            var i;
            tileUseCount++;
            // Parse the tile that was dropped and find what letter it is.
            var droppedSrc = ui.draggable.attr("src");
            var letterImg = droppedSrc.split("images/Scrabble_Tile_");
            var letter = letterImg[1].split(".jpg")[0];
            // Loop through Board_Pieces object for corresponding letters
            for (i = 0; i < boardPieces.length; i++) {
                // If the letters match, add the value to the overall score.
                if (letter == boardPieces[i].letter) {
                    if($(this).find("img").hasClass("DL")) {
                        Score += (boardPieces[i].value * 2);
                    } else if ($(this).find("img").hasClass("DW")) {
                        Score += boardPieces[i].value;
                        DWS++;
                    } else {
                        Score += boardPieces[i].value;
                    }
                }
                $("#highScoreList").find(CurrentPlayer).text(Score);
            }
        }
    });
}

// Replace tiles with different letters

function replaceTiles() {
    // Making Variables.
    var i;
    var dragTile = '<img class="drag tile" src="images/Scrabble_Tile_';
    var tiles = "";
    var tileInit = document.getElementById("startTiles");
    // Looping through to make 7 random tiles.
    if (replaceCount != 0) {
        // Check for tile usage
        if (tileUseCount != 0) {
            // We have used some tiles, so we want to replace tiles used.
            console.log("tile use: " + tileUseCount);
            // Adding the amount of tiles we used previously
            for (i = 0; i < tileUseCount; i++) {
                $("#startTiles").append(dragTile + randGenChar() + '.jpg">');
            }
        } else {
            for (i = 0; i <= 6; i++) {
                tiles += dragTile + randGenChar() + '.jpg">';
            }
            tileInit.innerHTML = tiles;
        }
        replaceCount--;
    } else {
        window.alert("You can only replace the tiles 3 times");
    }
    
    
    // Attatch drag functionality to current tile.
    $(".drag").draggable({ 
        snap: ".ui-widget-header",
        containment: "document", 
        scroll: "false"
    });
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
    // Generate New Board
    generateBoard();
    // Reset Count variable.
    replaceCount = 3;
    // Replace the tiles with new tiles.
    tileUseCount = 0;
    replaceTiles();
    // Reset Score
    Score = 0;
    // Reset High Scores

}

// Calculate score used in randomize_scribble.js
function Submit(DWS) {
    // Calculate Score
    console.log(DWS);
    if (DWS > 0) {
        Score *= (DWS * 2);
    }
    // When you want to enter in your final score
    Player++;
    var nextScore = 'Score' + Player;
    $("#highScoreList").append('<li class="' + nextScore + '">');
    CurrentPlayer = '.' + nextScore;
    Score = 0;
}