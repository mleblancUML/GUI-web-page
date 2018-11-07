// Matthew LeBlanc: matthew_leblanc1@student.uml.edu

function getUserInfo() {
    var fDimension = [0, 0, 0, 0];
    var f;
    // Get element by id using f as the variable.
    f = document.getElementById('user-input');
    // First we check to see if the input is valid
    // We need to read in each input individually.
    var sc, fc, sr, fr;
    sc = document.getElementById('cip');
    fc = document.getElementById('cfp');
    sr = document.getElementById('rip');
    fr = document.getElementById('rfp');
    // Now we must check the cases for all these variables.
    // Check to see if fc < sc and same for the next vars.
    if (Number(fc.value) < Number(sc.value) || Number(fr.value) < Number(sr.value)) {
      window.alert('Error: Starting dimension must be less than ending dimension');
      // You have alerted the user, now we must reset the form.
      f.reset();
    } else if ((Number(fc.value) - Number(sc.value) > 1000) || (Number(fr.value) - Number(sr.value) > 1000)) {
      window.alert('Error: Please make sure your total amount of values is less than 1000');
      // Have to do the same thing with this one.
      f.reset();
    } else {
      // Put the values into the array.
      var i;
      for (i = 0; i < f.length; i++) {
        fDimension[i] = f.elements[i].value;
      }
      //Need to call generateTable using the given elements.
      // Assuming everything was read in properly.
      generateTable(fDimension);
    }
    
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
