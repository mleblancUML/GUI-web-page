// Create a variable called msg to hold a new message
var msg = 'Yo yo yo diggy dog!';

// Create a function to update the content of the element whose id attribute has a value of message
function updateMessage() {
  message = document.getElementById('message');
  message.textContent = msg;
}

// Call the function
updateMessage();
