function format(cmd, arg) {
	// make a variable for the document
	var doc = document.getElementsByTagName("article")[0];
	// focus the document
	doc.focus();
	// format it
	document.execCommand(cmd, false, arg);
	// send the editing to the muc
	sendArticleToMuc();
}
