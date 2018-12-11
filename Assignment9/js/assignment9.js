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
});