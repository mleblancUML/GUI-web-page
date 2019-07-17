// Going to try and implement a standard nav-bar on all pages of my website.
// This code assumes that you have bootstrap4 linked in the web page

function initNav() {
    // Initializing nav as the base navbar requirements. Adding LI elements after.
    var nav = '<a class="navbar-brand" href="#">Matt LeBlanc</a> \
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">\
    <span class="navbar-toggler-icon"></span>\
    </button>\
    <div class="collapse navbar-collapse" id="navbarSupportedContent">\
    <ul class="navbar-nav mr-auto">\
    <li class="nav-item active">\
    <a class="nav-link" href="../index.html">Home<span class="sr-only">(current)</span></a>\
    </li>';

    // Making an array with the assignments in them
    var Assignments = ['Assignment3', 'Assignment6', 'Assignment7', 'Assignment8', 'Assignment9'];
    var i;
    for (i = 0; Assignments[i] != null; i++) {
        // Adding LI elements
        var elLi = '<li class="nav-item active"> \n <a class="nav-link" href="../';
        elLi += Assignments[i] + '/index.html" >' + Assignments[i] + '</a></li>';
        nav += elLi;
    }
    nav += '</ul></div>';

    var nb = document.getElementById("myNav");
    nb.innerHTML = nav;
}


