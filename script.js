// Javascript for specials tabs
function openCity(evt, cityName) {
    // Declare all variables
    var i, tabcontent, tablinks;
  
    // Get all elements with class="tabcontent" and hide them
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
  
    // Get all elements with class="tablinks" and remove the class "active"
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
  
    // Show the current tab, and add an "active" class to the button that opened the tab
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
  } 

// Code for Modals
// Get the modal
var modal = document.getElementsByClassName("myModal");

// Get the button that opens the modal
var btn = document.getElementsByClassName("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close");

// When the user clicks on the button, open the modal
btn[0].onclick = function() {
  modal[0].style.display = "block";
}

btn[1].onclick = function() {
  modal[1].style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span[0].onclick = function() {
  modal[0].style.display = "none";
}

span[1].onclick = function() {
  modal[1].style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  for(let i = 0; i < modal.length; i++) {
    if(event.target == modal[i]) {
      modal[i].style.display = "none";
      break;
    }
  }
  // if (event.target == modal[0]) {
  //   modal[0].style.display = "none";
  // }
} 