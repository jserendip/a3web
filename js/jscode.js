

/* function to swap ricelake satellite image with corrected image
based on w3schools examples
James Serendip owns this code 12/05/2020 */
function newsat()  {
	document.getElementById("satimage").src="images/ricelakecorrected.JPG";
	}

/* function to return original satellite image on mouseout
James Serendip owns this code 12/05/2020  */
function oldsat()  {
	document.getElementById("satimage").src="images/ricelakeuncorrected.JPG";
	}

/* function to show fun facts on button click  
from w3schools example*/


//Get return to top of screen button (adapted from w3schools):
mybutton = document.getElementById("topreturnBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
} 