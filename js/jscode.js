

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

/* function to show legend on poplation density map */
function showleg() {
  "use strict";
    document.getElementById("legend").src = "images/ricelakeuncorrected.JPG";
}
/* return to top of screen button (adapted from w3schools): */
var mybutton = document.getElementById("topreturnBtn");


// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
} 