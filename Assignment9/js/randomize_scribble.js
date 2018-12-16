// Javascript file to randomize the tiles, and if I have time, the board as well.
// By: Matthew LeBlanc
// email: matthewmleblanc@gmail.com

// Define global variable Score
var Score = 0;
var Player = 0;
// Define the tile generator 

$( function() {
    var DWS = 0;
    console.log("Generating Tiles");
    replaceTiles();
    // Show score and update it when needed
    $("#highScoreList").append('<li></li>');
    $("#highScoreList li").addClass("Score" + Player);
    console.log("Loading Board");
    generateBoard();

    $(".drag").draggable({ 
        snap: ".ui-widget-header",
        containment: "document", 
        scroll: "false"
    });
});

