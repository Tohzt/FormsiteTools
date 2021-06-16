
function generate() {
	//Init File Handling
	var $ = require('jquery');
	var fs = require('fs');
	var filename = './src/tools/div_FrameUp.txt';

	// Init Preleaded Text (RFF Eventually..)
	var _startToUpgr = "<div><span style=\"font-weight:bold;color: red\">Upgrade (Additional $";
	var _upgrToName  = " + tax):</span></div><div><span style=\"font-family:Times New Roman;\”><span style=\"font-size: 18px;\"><strong>";
	var _nameToDesc  = "</strong></span></span><span style=\"font-family:Times New Roman, Italic;\”><span style=\"font-size: 14px;\”>(";
	var _descToEnd   = ")</span></span></div>";

	// Get User Input
	var _upgr = document.getElementById('upgr').value;
	var _name = document.getElementById('name').value;
	var _desc = document.getElementById('desc').value;

	// Include/Remove Upgrade Info
	if (_upgr === "") {
		_startToUpgr = "";
		_upgrToName  = "<div><span style=\"font-family:Times New Roman;\”><span style=\"font-size: 18px;\"><strong>";
	}

	// Concat Result
	var ans = _startToUpgr.concat(_upgr, _upgrToName, _name, _nameToDesc, _desc, _descToEnd);

	// Display Preview
	document.getElementById('preview-text').innerHTML = ans;
	document.getElementById('preview-div').innerHTML = ans;

	/* Get the text field */
	var copyText = document.getElementById("preview-div");

	/* Select the text field */
	copyText.select();
	copyText.setSelectionRange(0, 99999); /* For mobile devices */

	/* Copy the text inside the text field */
	document.execCommand("copy");

	/* Alert the copied text */
	alert("Copied the text: " + copyText.value);
}

