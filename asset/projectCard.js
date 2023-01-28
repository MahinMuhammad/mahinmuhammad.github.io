function selectProjectCard(id) {
	// document.getElementById(event.target.id).style.border-radius = "0rem";
	const elements = document.getElementsByClassName("envelop");
	for (let i = 0; i < elements.length; i++) {
		elements[i].style.borderRadius = "1rem";
		elements[i].style.opacity = "0.4";
		elements[i].style.textIndent = "-9999px";
		elements[i].getElementsByTagName('button')[0].style.visibility = "hidden";
	}

	document.getElementById(id).style.borderRadius = "0rem";
	document.getElementById(id).style.opacity = "1";
	document.getElementById(id).style.textIndent = "0px";
	document.getElementById(id).getElementsByTagName('button')[0].style.visibility = "visible";
}