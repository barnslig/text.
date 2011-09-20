// message handler
function handleMessage(aJSJaCPacket) {
	// check that the message is from another writer
	var getJID = aJSJaCPacket.getFrom();
	getJID = getJID.split("/");
	if(getJID[1] != nickname) {		
		// clear the document
		document.getElementsByTagName("article")[0].innerHTML = "";
		// set the new entry
		var entry = aJSJaCPacket.getBody();
		document.getElementsByTagName("article")[0].innerHTML = entry;
		// set the new, old document
		thisDoc = doc;
	}
}

// presence handler
function handlePresence(aJSJaCPacket) {
}

// function to join a MultiUserChat
function joinMUC(nickname, room) {
	// create a join-packet
	var packet = new JSJaCPresence();
	packet.setTo(room + "/" + nickname);
	packet.appendNode('x', {xmlns: "http://jabber.org/protocol/muc"});
	
	// try to join the room
	try {
		con.send(packet);
		// remove the hideall div
		document.getElementById("hideall").style.display = "none";
	// an error!!
	} catch (e) {
		alert(e.message);
	}
}

// function to send a message to a MultiUserChat-Room
function sendMsgToMUC(nickname, room, message) {
	try {
		// create a new message packet
		var aMsg = new JSJaCMessage();
		aMsg.setTo(new JSJaCJID(room));
		aMsg.setType("groupchat");
		aMsg.setBody(message);
		// send the message
		con.send(aMsg);
	// an error!!
	} catch (e) {
		alert(e.message);
	}
}

// login function
function login(http_bind) {
	try {
		// make a new object for the connection settings
		oArgs = new Object();
		oArgs.httpbase = http_bind;
		oArgs.timerval = 2000;
		oArgs.authtype = "saslanon";
		oArgs.domain = "anonymous.draugr.de";
		
		// create a new connection object
		con = new JSJaCHttpBindingConnection(oArgs);
		
		// set the handlers
		con.registerHandler("message", handleMessage);
		con.registerHandler("presence", handlePresence);
		
		// connect
		con.connect(oArgs);
	} catch (e) {
		// error alert!
		alert(e.toString());
	}
}

// disconnect function
function disconnect() {
	con.disconnect();
}

// function to send the complete document to the muc
function sendArticleToMuc() {
	// get the document
	var doc = document.getElementsByTagName("article")[0].innerHTML;
	// check that the document has changed
	if(doc != thisDoc) {
		// send the message
		sendMsgToMUC(nickname, muc, doc);
		// set the new, old document
		thisDoc = doc;
	}
}

function makeEverythingOk() {
	// login
	login();
	// join the muc room
	window.setTimeout("joinMUC(nickname, muc);", 2500);
	// send an initial message
	sendMsgToMUC(nickname, muc, "penis");
}
