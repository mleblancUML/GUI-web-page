// Javascript for Assignment 9
// By: Matthew LeBlanc
// email: matthewmleblanc@gmail.com
$( function() {
    $(".drag").draggable({ 
        snap: ".ui-widget-header",
        containment: "#window", 
        scroll: "false"
    });
    $("#snapTarget").droppable( { drop: function( event, ui) {
        console.log("Target Dropped");
    }});
    generateInitTiles();
    generateBoard();
});

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

// Function to generate the 7 tiles that the player starts with
function generateInitTiles() {
    console.log("Creating initial tiles");
    // Create the variables
    var i;
    var tileImage = '<img id="tile" class="drag ui-draggable" src="images/Scrabble_Tile_';
    var tiles = "";
    var tileInit = document.getElementById("startTiles");
    // Make a loop to generate the tile code
    for (i = 0; i < 7; i++) {
        tiles += tileImage + randGenChar() + '.jpg">';
        
    }
    tileInit.innerHTML = tiles;
    
    
}

function randGenChar () {
    console.log("Generating Random Char");
    var character = "";
    var alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ_";
    var i = 0;
    character += alphabet.charAt(Math.floor(Math.random() * alphabet.length));
    return character;
}