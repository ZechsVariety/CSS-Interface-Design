// DONE 6: Nab all the DETAILS elements
const details = document.querySelectorAll("details");

// DONE 7: Loop through the element array, and add an event listener for the toggle event
details.forEach((detail) => {
	console.log(detail);

	detail.addEventListener("toggle", (event) => {
		console.log("Jerma");
		console.log(event);

		// DONE 8a: Check to see whether the DETAILS event that was toggled has the "open" attribute
		if(event.target.open) {
			console.log("985");
			// DONE 8b: The browser just added the "open" attribute, so this DETAILS element was previously closed
			details.forEach((detail) => {
				// DONE 8c: If this DETAILS element is NOT the one that was just clicked, close it by removing the "open" attribute
				if(detail != event.target) {
					detail.removeAttribute("open");
				}
			});
		}
	});
});
// DONE 9: Verify that it works in the browser
		
	


// This experiment based on https://developer.mozilla.org/en-US/docs/Web/HTML/Element/details
