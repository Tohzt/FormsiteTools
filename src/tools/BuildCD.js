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

// DISABLE PART OF FORM(s)
function form_disable() {
	for(i=0; i<document.form.elements.length; i++) {
		document.form.elements[i].disabled=!document.form.elements[i].disabled;
	}
	//document.getElementById("input-numGuests").style.backgroundColor = "#CCCCCC";
}

// INCREASE / DECREASE ITEM LIST
function inc_itemList() {
	// IDENTIFY LIST
	var list = document.getElementById('item-list');
	// CREATE NEW INPUT
	var newItem = document.createElement("input");
	// SET NEW INPUT ID
	newItem.setAttribute('id', 'input-item');

	//newItem.innerText = "test";
	
	// ADD NEW ITEM TO LSIT
	list.appendChild(newItem);
	// STOP SUBMISSION
	return false; 
}
function dec_itemList() {
	// IDENTIFY LIST
	var list = document.getElementById('item-list');
	
	/**ERROR DETECTION**/

	// REMOVE ITEM FROM LIST
	list.removeChild(list.lastChild);

	// STOP SUBMISSION
	return false; 
}

// PRINT LIST OF ITEMS
function print_items() {
	var list = document.getElementById('item-list');
	var ans = "";
	var items = list.getElementsByTagName('*');

	// LOOP THROUGH LIST
	var i, e, d;
	for (i = 0; i < items.length; ++i) {
		e = items[i];
		ans = ans.concat(e.value.toString());
	}

	console.log(ans);
}
