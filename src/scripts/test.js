function test_add() {
	console.log("Append JSON");
	var fs = require('fs');
	var path = require('path');

	let first_name = document.getElementById("first-name").value;
	let last_name = document.getElementById("last-name").value;
	let test_num = 0.00;

	var newGondolier = {
		"firstName": first_name,
		"lastName": last_name,
		"payType": {
			"GAI_hours": test_num,
			"GAI_tips": test_num,
			"GCON_hours": test_num,
			"GCON_tips": test_num,
			"Office_hours": test_num,
			"Training_hours": test_num,
			"Other_1_hours": test_num,
			"Other_2_hours":test_num
		}
	};

	// ONLY ADD IF BOTH NAMES PRESENT
	if (first_name != "" && last_name != "") {
		let gondoliers = test_read();
		gondoliers.Gondoliers.push(newGondolier)

		fs.writeFileSync(path.resolve(__dirname, 'testSaveData.json'), JSON.stringify(gondoliers));
	}
	else 
			alert("First and Last name are required.");
}


function test_read() {
	console.log("Read From File...");
	var fs = require('fs');
	var path = require('path');

	let rawdata = fs. readFileSync(path. resolve(__dirname, 'gondoliers.json'));
	let gondoliers = JSON. parse(rawdata);

	console.log(gondoliers);
	return(gondoliers);
}

function test_init() {
	if (window.confirm("This will overwrite gondolier data.")) {
		console.log("Populate gondolier information..");
		var fs = require('fs');
		var path = require('path');
		let rawdata = fs. readFileSync(path. resolve(__dirname, 'init_gondoliers.json'));
		fs.writeFileSync(path.resolve(__dirname, 'gondoliers.json'), rawdata);
	}
}

function test_getAll_GAIh() {
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

function test_zeroOut() {
	console.log("Loop through JSON data and zero out.")
	var fs = require('fs');
	var path = require('path');

	let rawdata = fs. readFileSync(path. resolve(__dirname, 'gondoliers.json'));
	let json = JSON. parse(rawdata);

	for (var i = 0; i < json.Gondoliers.length; i++) {
		json.Gondoliers[i].payType.GAI_hours		= 0;
		json.Gondoliers[i].payType.GAI_tips			= 0;
		json.Gondoliers[i].payType.GCON_hours		= 0
		json.Gondoliers[i].payType.GCON_tips		= 0;
		json.Gondoliers[i].payType.Office_hours	= 0;
		json.Gondoliers[i].payType.Other_1_hours	= 0;
		json.Gondoliers[i].payType.Other_2_hours	= 0;
		json.Gondoliers[i].payType.Training_hours = 0;
	}

	fs.writeFileSync(path.resolve(__dirname, 'gondoliers.json'), JSON.stringify(json));
}


