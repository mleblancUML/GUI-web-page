// Javascript for Assignment 9
// By: Matthew LeBlanc
// email: matthewmleblanc@gmail.com

// Global variable replaceCount
var replaceCount = 3;
var dws = 0;
var CurrentPlayer = '.Score' + Player;
var tileUseCount = 0;
var UserString = "";

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
            var i;
            tileUseCount++;
            // Parse the tile that was dropped and store it in UserString
            var droppedSrc = ui.draggable.attr("src");
            var letterImg = droppedSrc.split("images/Scrabble_Tile_");
            var letter = letterImg[1].split(".jpg")[0];
            UserString += letter;
            // Decrement the amount of tiles for this letter
            // Create variable to pass to calculateScore
            var DLDWCheck = $(this).find("img");
            // call calculate score function
            if (dws > 0) {
                Score = Score / (Math.pow(2, dws));
            }
            calculateScore(DLDWCheck);
        }
    });
}

// Replace tiles with different letters

function getTiles() {
    // Making Variables.
    var i;
    var dragTile = '<img class="drag tile" src="images/Scrabble_Tile_';
    var tiles = "";
    var tileInit = document.getElementById("startTiles");
    // Looping through to make 7 random tiles.

    // Check for tile usage
    if (tileUseCount != 0) {
        // We have used some tiles, so we want to replace tiles used.
        console.log("tile use: " + tileUseCount);
        // Adding the amount of tiles we used previously
        for (i = 0; i < tileUseCount; i++) {
            $("#startTiles").append(dragTile + randGenChar() + '.jpg">');
        }
        tileUseCount = 0;
    } else {
        for (i = 0; i <= 6; i++) {
            tiles += dragTile + randGenChar() + '.jpg">';
        }
        tileInit.innerHTML = tiles;
    } 
    
    // Attatch drag functionality to current tile.
    $(".drag").draggable({ 
        snap: ".ui-widget-header",
        snapTolerance: 20,
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
    //generateBoard();
    // Reset Count variable.
    replaceCount = 3;
    // Place tiles back to the starting point.
    tileUseCount = 0;
    $("#startTiles").find("img").each(function() {
        $(this).css({
            "left": "0",
            "top": "0"
        });
    });
    // Reset Score
    Score = 0;
    // Reset dws
    dws = 0;
    // Reset High Scores
    $("#highScoreList li").each(function() {
        $(this).remove();
    });
    $("#highScoreList").append('<li class="Score' + Player + '">');
}

// Calculate score used in randomize_scribble.js
function Submit() {
    // First we should make sure that the word they used is a word.
    // Check the UserString agains the dictionary
    var xhttp = new XMLHttpRequest();
    xhttp.open("GET", "words_alpha.txt", true);
    xhttp.onreadystatechange = function() {
        if (xhttp.readyState == 4 && xhttp.status == 0) {
            console.log(xhttp.responseText.indexOf(UserString));
        }
    };
    
    xhttp.send(null);

    // When you want to enter in your final score
    Player++;
    var nextScore = 'Score' + Player;
    $("#highScoreList").append('<li class="Score' + nextScore + '">');
    CurrentPlayer = '.' + nextScore;
    Score = 0;
    dws = 0;
    tileUseCount = 0;
    generateBoard();
    getTiles();
}

// Function to calculate score
function calculateScore(DLDWCheck) {
    console.log("Calculating Score");
    var i;
    // Loop through UserString and check for points, and add to score.
    for (i = 0; i < boardPieces.length; i++) {
        // compare with current character
        if (UserString.charAt(UserString.length - 1) == boardPieces[i].letter){
            // Decrement the amount of tiles of this letter
            boardPieces[i].amount--;
            
            if(DLDWCheck.hasClass("DL")){
                // Double letter confirmed, so mulitply letter value by 2
                Score += boardPieces[i].value * 2;
            } else {
                // Otherwise, we just have a regular char or dw
                Score += boardPieces[i].value;
            }
            // Check to see if double word tile is used
            if (DLDWCheck.hasClass("DW")) {
                dws++;
            }
            if (dws > 0) {
                Score *= (Math.pow(2, dws));
            }
            $("#highScoreList").find(CurrentPlayer).text(Score);
        }
    }
}