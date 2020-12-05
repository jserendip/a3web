

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

/* function to show more info on JS on button click  
from w3schools example*/
function displayJS() {
	var dis = document.getElementById('JSinfo');
	dis.style.display='block';
}

