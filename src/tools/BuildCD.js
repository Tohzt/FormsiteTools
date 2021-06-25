function tool_addMenuItemsCD() {
	console.log("No friggin way");
}

function generate_cd() {
	//Init File Handling
	var $ = require('jquery');
	var fs = require('fs');
	var filename = './src/tools/div_FrameUp.txt';

	// Init Variables
	var guest_current = 1;
	var guest_count = document.getElementById('input-numGuests').value;

	// Loop Through All Guests (guest_count)
	for (var i = 1; i <= guest_count; i++) {

		// Init Preleaded Text (RFF Eventually..)
		var str_1 = "{{IfG#}}{{G#Name}}{{G#Colon}}";

		// Add Guest Number to CD-head
		str_1 = str_1.replace(/#/g,guest_current.toString());
		console.log(str_1);
		console.log("");

		// Procede to next Guest
		guest_current++;
	}
}

