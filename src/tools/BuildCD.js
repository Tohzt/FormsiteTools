function generate_cd() {
	// Init Variables
	var cd_data = "";
	var guest_current = 1;
	var guest_count = document.getElementById('input-numGuests').value;

	// LOOP THROUGH GUESTS (guest_count)
	for (var i = 1; i <= guest_count; i++) {

		// INIT STRING (RFF Eventually..)
		var str = "<b>{{IfG#}}{{G#Name}}{{G#Colon}}</b>";

		// ADD GUEST NUMBER TO INITIAL STRING
		str = str.replace(/#/g,guest_current.toString());
		
		// GET LIST OF INPUTS
		var list = document.getElementById('item-list');
		var items = list.getElementsByTagName('*');

		// LOOP THROUGH LIST
		if (items.length > 0) {
			for (var j = 0; j < items.length; ++j) {
				str = str.concat(
					"{{G",
					guest_current,
					"_",
					document.getElementById('input-menu').value.toString(),
					"_",
					items[j].value.toString(),
					"}}");
			}
		}

		// ADD 'SPECIAL' INFORMATION
		str = str.concat(
			"<b>{{G",
			guest_current,
			"_SpecialHeader}}</b>{{G",
			guest_current,
			"_Special}}{{G",
			guest_current,
			"_Slash}}<br>"
		);

		// UPDATE
		cd_data = cd_data.concat(str);

		// PROCEED TO NEXT GUEST
		guest_current++;
	}
	
	// DISPLAY RESULTS
	document.getElementById('preview-cd').innerHTML = cd_data;
	// PRINT RESULT
	console.log(cd_data);
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

	// CHECK FOR EMPTY LIST
	if (list.childElementCount > 0) {

		// REMOVE ITEM FROM LIST
		list.removeChild(list.lastChild);
	}
	else {
		alert("There are no items");
	}
	// STOP SUBMISSION
	return false; 
}

