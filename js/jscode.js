


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
// This code is adapted from https://www.w3schools.com/howto/howto_js_sticky_header.asp
// When the user scrolls the page, execute myFunction
window.onscroll = function() {myFunction()};

// Get the header
var header = document.getElementById("Header");

// Get the offset position of the navbar
var stickyheader = header.offsetTop;

// Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset > sticky) {
    header.classList.add("stickyHeader");
  } else {
    header.classList.remove("stickyHeader");
  }
}
