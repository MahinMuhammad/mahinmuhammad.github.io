let flag = true;

function navMenuSwitch(){
	if(flag){
		flag = false;
		document.getElementById("header-menu").style.visibility = "visible";
	    document.getElementById("header-menu").style.opacity = 1;
	    document.getElementById("bar-icon").style.display = "none"
	    document.getElementById("cross-icon").style.display = "block"
	}
	else{
		flag = true;
		document.getElementById("header-menu").style.visibility = "hidden";
	    document.getElementById("header-menu").style.opacity = 0;
	    document.getElementById("bar-icon").style.display = "block"
	    document.getElementById("cross-icon").style.display = "none"
	}
}