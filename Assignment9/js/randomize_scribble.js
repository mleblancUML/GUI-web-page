// Javascript file to randomize the tiles, and if I have time, the board as well.
// By: Matthew LeBlanc
// email: matthewmleblanc@gmail.com

// Define global variable Score
var Score;

// Define the tile generator 

$( function() {
    // Define drag class that allows for things to be dragged.
    replaceTiles();
    generateBoard();
    $(".drag").draggable({ 
        snap: ".ui-widget-header",
        containment: "document", 
        scroll: "false"
    });
    // Attempting to define the droppable target.
    $(".snapTarget").droppable( { 
        drop: function( event, ui ) {
            // Testing dropping functionality
            console.log("Dropped");
            var i;
            var droppedObject = $(".drag").val();
            console.log(droppedObject.class);
        }
    });
    
});

console.log("Loading Board");
// Set the img with board tile
$("#boardPiece_empty").each(function() {
    $(this).attr("src", "images/Empty_Board_Tile.png");
});

function getTile($item) {
   var i = 0;
   for (i; i < boardPieces.length; i++) {
       if (boardPieces[i] == $item) {
           console.log(boardPieces[i]);
       }
   }
}
console.log(boardPieces[0]);
