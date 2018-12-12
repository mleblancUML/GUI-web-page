// Javascript for Assignment 9
// By: Matthew LeBlanc
// email: matthewmleblanc@gmail.com
$( function() {
    $("#draggable").draggable({ 
        snap: ".ui-widget-header",
        containment: "#containmentWrapper", 
        scroll: false
    });
    $("#snapTarget").droppable( { drop: function( event, ui) {
        console.log("Target Dropped");
    }});

    document.getElementById("board").onload = function() {generateBoard()};
});

// Adding function to generate board
function generateBoard() {
    // Create some variables
    var i, j;
    var board = '<div id="snaptarget" class="ui-widget-header">';
    // Loop through and make the board using indicies from boardTemplate
    for (i = 0; i < 6; i++) {
        board += '<img src="Empty_Board_Tile.png">';
        board += '</div>';
        if (i == 5) {
            board += '<br>';
            if (j == 5) {
                break;
            }
            j++;
        }
    }
    var Board = getElementById("board");
    Board.innerHTML = board;
}

//'<img src="images/Scrabble_Tile_' + randGenChar() + '">';

function randGenChar () {
    console.log("Generating Random Char");
    var character = "";
    var alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ_";
    var i = 0;
    character += alphabet.charAt(Math.floor(Math.random() * alphabet.length));
    return character;
}