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

let flag = true;

function navMenuSwitch(){
	if(flag){
		flag = false;
		document.getElementById("header-menu").style.visibility = "visible";
	    document.getElementById("header-menu").style.opacity = 1;
	    document.getElementById("bar-icon").style.display = "none"
	    document.getElementById("cross-icon").style.display = "block"
		document.getElementById("chatBotIcon").style.display = "none"
	}
	else{
		flag = true;
		document.getElementById("header-menu").style.visibility = "hidden";
	    document.getElementById("header-menu").style.opacity = 0;
	    document.getElementById("bar-icon").style.display = "block"
	    document.getElementById("cross-icon").style.display = "none"
		document.getElementById("chatBotIcon").style.display = "block"
	}
}