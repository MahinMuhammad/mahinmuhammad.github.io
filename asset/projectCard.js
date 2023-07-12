/* Copyright 2023 Md. Mahinur Rahman

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

	http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License. */

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