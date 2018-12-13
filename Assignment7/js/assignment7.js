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
    // Adding the greaterThanEqual method for error checking
    // This came from the github repository for the additional methods.
    // I did it this way because I was having trouble accessing the additional methods
    // cdn. The link to the original code is: https://github.com/jquery-validation/jquery-validation/blob/master/src/additional/greaterThan.js
    $.validator.addMethod( "greaterThanEqual", function( value, element, param ) {
        var target = $( param );
    
        if ( this.settings.onfocusout && target.not( ".validate-greaterThanEqual-blur" ).length ) {
            target.addClass( "validate-greaterThanEqual-blur" ).on( "blur.validate-greaterThanEqual", function() {
                $( element ).valid();
            } );
        }
    
        return value >= target.val();
    }, "Please enter a greater value." );
    // Validate using the standard JQVP methods
    // Creating rules for the validation input. Empty space, non-numerical values, and 
    // some numerical value checking are done here. 
    $("#user-input").validate({
        rules: {
            cip: {
                required: true,
                number: true,
                min: -100,
                max: 100
            },
            cfp: {
                required: true,
                number: true,
                min: -100,
                max: 100,
                greaterThanEqual: "#cip"
            },
            rip: {
                required: true,
                number: true,
                min: -100,
                max: 100
            },
            rfp: {
                required: true,
                number: true,
                min: -100,
                max: 100,
                greaterThanEqual: "#rip"
            }
        }
    });
});
