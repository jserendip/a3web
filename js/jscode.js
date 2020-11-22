
function correctalert() {
	alert("After geocorrecting this old satellite image can be integrated with correct ground coordinates");
	}



function newimage()  {
	document.getElementById("satimage").src="images/ricelakecorrected.JPG";
	correctalert();
	}
	
function oldimage()  {
	document.getElementById("satimage").src="images/ricelakeuncorrected.JPG";
	}
	
