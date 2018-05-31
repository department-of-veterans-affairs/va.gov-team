if (document.location.href.lastIndexOf("#") == -1) {
	if (document.location.href.lastIndexOf("?") == -1 ) {
		/* if no "#" or "?" in the URL set the variable to document.location.href */
		var currLoc = document.location.href;
	} else {
		/* if a "?" is contained in the URL, set the variable to everything before the "?" */
		var tempLoc = window.location.href.split('?');
		var currLoc = tempLoc[0];
	}
} else {
	/* if a "#" is contained in the URL, set the variable to everything before the "#" */
	var tempLoc = window.location.href.split('#');
	var currLoc = tempLoc[0];
}

document.write('<input name="NQ" type="hidden" value="URL:' + encodeURI(currLoc) + '">');
