// function to get a random string
// from etherpad-lite: https://github.com/Pita/etherpad-lite by Pita,
// licensed under the Apache License v2: http://www.apache.org/licenses/LICENSE-2.0.html
// look in the index.html file of it
function randomString() {
	var chars = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
	var string_length = 10;
	var randomstring = '';
	for (var i = 0; i < string_length; i++) {
		var rnum = Math.floor(Math.random() * chars.length);
		randomstring += chars.substring(rnum, rnum + 1);
	}
	return randomstring;
}
