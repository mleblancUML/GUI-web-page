// Javascript file to randomize the tiles, and if I have time, the board as well.
// By: Matthew LeBlanc
// email: matthewmleblanc@gmail.com
console.log("Loading Tiles");
// Set the img with proper tile
$("#tile").ready(function() {
    $("#tile").attr("src", "images/Scrabble_Tile_" + randGenChar() + '.jpg');
});

console.log("Loading Board");
// Set the img with board tile
$("#boardPiece_empty").each(function() {
    $(this).attr("src", "images/Empty_Board_Tile.png");
});