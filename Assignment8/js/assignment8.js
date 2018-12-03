// Matthew LeBlanc
// email: matthew_leblanc1@student.uml.edu

// This assingment is to add a slider and tab interface for our Dynamic
// multiplication table.
$(function() {
    var tabTitle = $( "#tab_title" ),
      tabContent = $( "table" ),
      tabTemplate = "<li><a href='#{href}'>#{label}</a> <span class='ui-icon ui-icon-close' role='presentation'>Remove Tab</span></li>",
      tabCounter = 0,
      tableData = getUserInfo();
 
    var tabs = $( "#tabs" ).tabs();
 
    // Actual addTab function: adds new tab using the input from the form above
    function addTab() {
      var label = tabTitle.val() || "Table " + tabCounter,
        id = "tabs-" + tabCounter,
        li = $( tabTemplate.replace( /#\{href\}/g, "#" + id ).replace( /#\{label\}/g, label ) ),
        tabContentHtml = '<table class="table table-bordered mult-table">' +
                        getUserInfo() +
                        '</table>';
 
      tabs.find( ".ui-tabs-nav" ).append( li );
      tabs.append( "<div id='" + id + "'>" + tabContentHtml + "</div>" );
      tabs.tabs( "refresh" );
      tabCounter++;
      if (tabCounter == 10) {
        $("#save").prop("disabled", true);
      } else {
          $("#save").removeAttr("disabled");
      }
    }
 
    // AddTab button: calls the addTab function
    $( "#save" ).button().on( "click", function() {
        addTab();
      });
 
    // Close icon: removing the tab on click
    tabs.on( "click", "span.ui-icon-close", function() {
      var panelId = $( this ).closest( "li" ).remove().attr( "aria-controls" );
      $( "#" + panelId ).remove();
      tabs.tabs( "refresh" );
    });
 
    tabs.on( "keyup", function( event ) {
      if ( event.altKey && event.keyCode === $.ui.keyCode.BACKSPACE ) {
        var panelId = tabs.find( ".ui-tabs-active" ).remove().attr( "aria-controls" );
        $( "#" + panelId ).remove();
        tabs.tabs( "refresh" );
      }
    });

/******************************************************************************/
    // Creating handle for sliders.
    var handle1 = $("#ciCustom-handle");
    // Initial Column Slider
    $("#ciSlider").slider({
        create: function() {
            handle1.text($(this).slider("value"));
        },
        slide: function(event, ui) {
            handle1.text(ui.value);
            $("#cip").val(ui.value);
            $("#ciSlider").click(function() {
                if ($("#cip").valid()) {
                    getUserInfo();
                }
                else {
                    
                }
            });
            getUserInfo();
        },
        animate: true,
        range: "max",
        min: -15,
        max: 15,
        value: 1
    });
    // This next thing needs to handle putting the slider values into the box
    $("#cip").val($("#ciSlider").slider("value"));

/*****************************************************************************/

    var handle2 = $("#cfCustom-handle");
    // Final Column Slider
    $("#cfSlider").slider({
        create: function() {
            handle2.text($(this).slider("value"));
        },
        slide: function(event, ui) {
            handle2.text(ui.value);
            $("#cfp").val(ui.value);
            getUserInfo();
        },
        animate: true,
        range: "max",
        min: -15,
        max: 15,
        value: 5
    });
    $("#cfp").val($("#cfSlider").slider("value"));

/******************************************************************************/

    var handle3 = $("#riCustom-handle");
    // Initial Row Slider
    $("#riSlider").slider({
        create: function() {
            handle3.text($(this).slider("value"));
        },
        slide: function(event, ui) {
            handle3.text(ui.value);
            $("#rip").val(ui.value);
            getUserInfo();
        },
        animate: true,
        range: "max",
        min: -15,
        max: 15,
        value: 2
    });
    $("#rip").val($("#riSlider").slider("value"));
    
/******************************************************************************/

    var handle4 = $("#rfCustom-handle");
    // Final Row Slider
    $("#rfSlider").slider({
        create: function() {
            handle4.text($(this).slider("value"));
        },
        slide: function(event, ui) {
            handle4.text(ui.value);
            $("#rfp").val(ui.value);
            getUserInfo();
        },
        animate: true,
        range: "max",
        min: -15,
        max: 15,
        value: 8
    });
    $("#rfp").val($("#rfSlider").slider("value"));

    getUserInfo();
});