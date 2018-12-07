<<<<<<< HEAD
=======
// Matthew LeBlanc
// email: matthew_leblanc1@student.uml.edu

>>>>>>> 42961b5ac90d394dd212bdf9610fd03a1594b514
function getUserInfo() {
    var fDimension = [0, 0, 0, 0];
    var f;
    // Get element by id using f as the variable.
    f = document.getElementById('user-input');
    
    // Put the values into the array.
    var i;
    for (i = 0; i < f.length; i++) {
      fDimension[i] = f.elements[i].value;
    }
    //Need to call generateTable using the given elements.
    // Assuming everything was read in properly.
    generateTable(fDimension);
    
    
}

function generateTable(fDimension) {
  // Create string variable which will hold code.
  // Initialize tble with body and row tags to start off loop.
  var tble = ' <thead> <tr> <th></th>';
  // Add the first row seperately.
  for (var iter = fDimension[0]; iter <= fDimension[1]; iter++) {
    // Add the numbers in the row.
    tble += '<th>' + iter +'</th>';
  }
  // Close the above <tr> because we need to start another row.
  tble += '</tr> <tbody>';
  // Loop through the rows, and add each row.
  for (var i = fDimension[2]; i <= fDimension[3]; i++) {
    // Start the row off with the <tr> tag.
    tble += '<tr> <th scope="row">' + i + '</th>';
    for (var j = fDimension[0]; j <= fDimension[1]; j++) {
      // Add the elements starting with the row name.
      tble += '<td>' + i * j + '</td>';
    }
    tble += '</tr>';
  }
  // Close the <tbody> tag.
  tble += '</tbody>';

  // Need variable to hold the id of the place we want to put the stuff.
  var mt = document.getElementById('mul-table');
  // Write the tble to mt
  mt.innerHTML = tble;
}
