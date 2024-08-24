// Create a "close" button and append it to each list item
var myNodelist = document.getElementsByTagName("LI");
var i;
// Get all <li> elements in the document
var myNodelist = document.getElementsByTagName("LI");

// Loop through each <li> element
for (i = 0; i < myNodelist.length; i++) {
  
    // Create a new <span> element to act as the close button
  var span = document.createElement("SPAN");
  
  // Create a text node containing the "×" symbol (used for the close button)
  var txt = document.createTextNode("\u00D7");
  
  // Add the class "close" to the <span> element to style it as a close button
  span.className = "close";
  
  // Append the text node ("×") to the <span> element
  span.appendChild(txt);
  
  // Append the <span> element (the close button) to the current <li> element
  myNodelist[i].appendChild(span);
}


// Click on a close button to hide the current list item

// Get all elements with the class name "close"
var close = document.getElementsByClassName("close");

// Declare a variable to be used as the loop counter
var i;

// Loop through all elements with the class name "close"
for (i = 0; i < close.length; i++) {
  
  // Add an onclick event listener to each close button
  close[i].onclick = function() {
    
    // Get the parent element of the close button (the <li> element)
    var div = this.parentElement;
    
    // Set the display style of the parent element to "none"
    // This hides the <li> element, effectively removing it from view
    div.style.display = "none";
  }
}


// Add a "checked" symbol when clicking on a list item

// Select the first <ul> element in the document
var list = document.querySelector('ul');

// Add a click event listener to the <ul> element
list.addEventListener('click', function(ev) {
  // Check if the clicked element is an <li> element
  if (ev.target.tagName === 'LI') {
    // Toggle the "checked" class on the clicked <li> element
    ev.target.classList.toggle('checked');
  }
}, false);


// Create a new list item when clicking on the "Add" button

function newElement() {
    // Create a new <li> element
    var li = document.createElement("li");
    
    // Get the value entered in the input field with id="myInput"
    var inputValue = document.getElementById("myInput").value;
    
    // Create a text node containing the input value
    var t = document.createTextNode(inputValue);
    
    // Append the text node to the newly created <li> element
    li.appendChild(t);
    
    // Check if the input field is empty
    if (inputValue === '') {
      // If empty, alert the user to write something
      alert("You must write something!");
    } else {
      // If not empty, append the new <li> element to the <ul> with id="myUL"
      document.getElementById("myUL").appendChild(li);
    }
    
    // Clear the input field for new input
    document.getElementById("myInput").value = "";
    
    // Create a new <span> element for the close button
    var span = document.createElement("SPAN");
    
    // Create a text node containing the "×" symbol for the close button
    var txt = document.createTextNode("\u00D7");
    
    // Add the class "close" to the <span> element for styling purposes
    span.className = "close"; 
    
    // Append the text node to the <span> element
    span.appendChild(txt);
    
    // Append the <span> element (close button) to the <li> element
    li.appendChild(span);
    
    // Get all elements with the class name "close"
    var close = document.getElementsByClassName("close");
    
    // Loop through all elements with the class name "close"
    for (i = 0; i < close.length; i++) {
      // Add an onclick event listener to each close button
      close[i].onclick = function() {
        // Get the parent element of the close button (the <li> element)
        var div = this.parentElement;
        // Set the display style of the parent element to "none" to hide it
        div.style.display = "none";
      }
    }
  }