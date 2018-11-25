// Matthew LeBlanc
// email: matthew_leblanc1@student.uml.edu

$(function() {
    // Validator defaults, (get the error messages to stand out)
    $.validator.setDefaults({
        highlight: function(element) {
            $(element).closest(".form-group").addClass("text-danger");
            $(element).closest(".form-control").addClass("is-invalid");
        },
        unhighlight: function(element) {
            $(element).closest(".form-group").removeClass("text-danger");
            $(element).closest(".form-control").removeClass("is-invalid");
        }
    });
    // Need to make sure that the information isn't too big and won't crash the site.
    // the number can be no greater than 1000
    $.validator.addMethod("numValid", function(value, element) {
        if (/^\d{1,3}?$/.test(value)) {
            return true; // Matched a number that has 1-3 digits
        }
        else {
            return false; // Matched a number that doesn't have 1-3 digits
        }
    }, "Please enter a number between 1 and 999");
    // Adding the lessThan method for error checking
    // This came from the github repository for the additional methods.
    // I did it this way because I was having trouble accessing the additional methods
    // cdn. The link to the original code is: https://github.com/jquery-validation/jquery-validation/blob/master/src/additional/greaterThan.js
    $.validator.addMethod( "greaterThan", function( value, element, param ) {
        var target = $( param );
    
        if ( this.settings.onfocusout && target.not( ".validate-greaterThan-blur" ).length ) {
            target.addClass( "validate-greaterThan-blur" ).on( "blur.validate-greaterThan", function() {
                $( element ).valid();
            } );
        }
    
        return value > target.val();
    }, "Please enter a greater value." );
    // Validate using the standard JQVP methods
    // Creating rules for the validation input. Empty space, non-numerical values, and 
    // some numerical value checking are done here. 
    $("#user-input").validate({
        rules: {
            cip: {
                required: true,
                number: true,
                numValid: true
            },
            cfp: {
                required: true,
                number: true,
                numValid: true,
                greaterThan: "#cip"
            },
            rip: {
                required: true,
                number: true,
                numValid: true
            },
            rfp: {
                required: true,
                number: true,
                numValid: true,
                greaterThan: "#rip"
            }
        },
        messages: {
            cip: {
                required: "<b>Please make sure to enter a number</b>",
                number: "<b>Please enter a number, you have entered something else.</b>",
            },
            cfp: {
                required: "<b>Please make sure to enter a number</b>",
                number: "<b>Please enter a number, you have entered something else.</b>",
                greaterThan: "<b>Please make sure that this value is larger than the previous one.</b>"
            },
            rip: {
                required: "<b>Please make sure to enter a number</b>",
                number: "<b>Please enter a number, you have entered something else.</b>",
            },
            rfp: {
                required: "<b>Please make sure to enter a number</b>",
                number: "<b>Please enter a number, you have entered something else.</b>",
                greaterThan: "<b>Please make sure that this value is larger than the previous one.</b>"
            }
        }
    });
    // Attempting to disable the button so you can't submit something that is invalid
    // Button is disabled from the start, and only after valid values are entered, can
    // you submit the form and get the table.
    // Got this from: https://stackoverflow.com/questions/21953694/enabling-disabled-button-after-successful-jquery-validation
    $("#user-input input").on('blur', function() {
        if ($("#user-input").valid()) {
            $("#submit").removeAttr("disabled");
        } else {
            $("#submit").attr("disabled", "disabled");
        }
    });
});
