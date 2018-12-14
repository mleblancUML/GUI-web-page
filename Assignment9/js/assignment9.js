// Javascript for Assignment 9
// By: Matthew LeBlanc
// email: matthewmleblanc@gmail.com

// Adding function to generate board
function generateBoard() {
    // Create some variables
    var i;
    var j = 0;
    var snap = '<div id="snaptarget" class="ui-widget-header">';
    var board = snap;
    // Loop through and make the board using indicies from boardTemplate
    for (j = 0; j <= 6; j++) {
        for (i = 0; i <= 6; i++) {
            board += '<img src="images/Empty_Board_Tile.png">';
            board += '</div>';
            if (i < 6){
                board += snap;
            }
        }
        board += '<br>';
    }
    

    // Get the board element and then add the newly generated board code to the html
    var Board = document.getElementById("board");
    Board.innerHTML = board;
}

// Replace tiles with different letters
function replaceTiles() {
    
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