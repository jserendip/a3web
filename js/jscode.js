

/* function to swap ricelake satellite image with corrected image
based on w3schools examples
James Serendip owns this code 12/05/2020 */

function newsat() {
  "use strict";
    document.getElementById("satimage").src = "images/ricelakecorrected.JPG";
}

/* function to return original satellite image on mouseout
James Serendip owns this code 12/05/2020  */
function oldsat() {
  "use strict";
    document.getElementById("satimage").src = "images/ricelakeuncorrected.JPG";
}



/* When the user clicks on the button, scroll to the top of the document -- James Serendip owns this code */
function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
} 