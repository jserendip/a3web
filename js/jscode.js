


function newimage()  {
	document.getElementById("satimage").src="images/ricelakecorrected.JPG";
/*	function correcttext() {
		document.getElementById("corrected").innerHTML = "After geocorrecting this old satellite image can be integrated with correct ground coordinates";
		setTimeout(function()  {
			$('#corrected').html('');
			}, 3000);
		}
		correctalert();  */
	}
	
function oldimage()  {
	document.getElementById("satimage").src="images/ricelakeuncorrected.JPG";
	}