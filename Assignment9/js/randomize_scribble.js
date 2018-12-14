// Javascript file to randomize the tiles, and if I have time, the board as well.
// By: Matthew LeBlanc
// email: matthewmleblanc@gmail.com
//console.log("Loading Tiles");
// Set the img with proper tile
/*$("#tile").each(function() {
    $(this).attr("src", "images/Scrabble_Tile_" + randGenChar() + '.jpg');
});*/

// Define the tile generator 

$( function() {
    $(".drag").draggable({ 
        snap: ".ui-widget-header",
        containment: "#window", 
        scroll: "false"
    });
    $("#snapTarget").droppable( { drop: function( event, ui) {
        console.log("Target Dropped");
    }});

    var generateInitTiles = $(".tile").each(function() {
        $(this).attr("src", 'images/Scrabble_Tile_' + randGenChar() + '.jpg');
    });
    
    generateBoard();
});

console.log("Loading Board");
// Set the img with board tile
$("#boardPiece_empty").each(function() {
    $(this).attr("src", "images/Empty_Board_Tile.png");
});

