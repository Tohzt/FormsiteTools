// GET GONDOLIER DATA
var fs = require('fs');
var path = require('path');

let rawdata = fs. readFileSync(path. resolve(__dirname, 'gondoliers.json'));
let json = JSON. parse(rawdata);

function check_name() {
	var input_name = document.getElementById("input-name").value;

	// UPDATE NAME COMPLETE
	console.log("Check Name Prediction...");

	for (var i = 0; i < json.Gondoliers.length; i++) {
		var _name = json.Gondoliers[i].firstName +" "+ json.Gondoliers[i].lastName
		if (_name.includes(input_name)) {
			document.getElementById("name-complete").innerHTML = json.Gondoliers[i].firstName + " " + json.Gondoliers[i].lastName;
		}
	}
}

function get_data( data_type ) {
	var input_name = document.getElementById("input-name").value;
	for (var i = 0; i < json.Gondoliers.length; i++) {
		var _name = json.Gondoliers[i].firstName +" "+ json.Gondoliers[i].lastName

		if (input_name != "" && input_name == _name) {
			// LOG DATA
			switch(data_type) {
				case "GAI_Hours":
					console.log("GAI Hours: " + json.Gondoliers[i].payType.GAI_hours);
					break;
				case "GAI_Tips":
					console.log("GAI Tips: " + json.Gondoliers[i].payType.GAI_tips);
					break;
				case "GCON_Hours":
					console.log("GCON Hours: " + json.Gondoliers[i].payType.GCON_hours);
					break;
				case "GCON_Tips":
					console.log("GCON Tips: " + json.Gondoliers[i].payType.GCON_tips);
					break;
				case "Office":
					console.log("Office Hours: " + json.Gondoliers[i].payType.Office_hours);
					break;
				case "Other1":
					console.log("Other 1 Hours: " + json.Gondoliers[i].payType.Other_1_hours);
					break;
				case "Other2":
					console.log("Other 2 Hours: " + json.Gondoliers[i].payType.Other_2_hours);
					break;
				case "Training":
					console.log("Training Hours: " + json.Gondoliers[i].payType.Training_hours);
					break;
			}
		}
	}
}

function get_GAIt() {
	console.log("Loop through JSON data and sum GAI gondolier hours.")
	var fs = require('fs');
	var path = require('path');

	let rawdata = fs. readFileSync(path. resolve(__dirname, 'gondoliers.json'));
	let json = JSON. parse(rawdata);

	console.log(json);
	console.log(json.Gondoliers.length);

	let sum = 0;

	for (var i = 0; i < json.Gondoliers.length; i++) {
		sum += parseInt(json.Gondoliers[i].payType.GAI_hours);
		console.log(sum)
	}
	console.log("Total: "+sum.toString());
}
