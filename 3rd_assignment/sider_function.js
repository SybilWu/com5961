
	function sidebar2_onMouseOver(){
		var sidebar2 = document.getElementById("sidebar2");
		sidebar2.className = "newStyle";
		sidebar2.innerHTML = "<h2>Be yourself</h2><p>Always aim for the best!</p>";
	}

	function sidebar2_onMouseOut(){
		var sidebar2 = document.getElementById("sidebar2");
		sidebar2.className = "defaultStyle";
		sidebar2.innerHTML = "<h2>Be yourself</h2><p>See what can be shown here</p>";
	}

	function sidebar3_validateForm(){
		var sidebar3 = document.getElementById("sidebar3");
		var x = document.forms["myForm"]["x_enter"].value;
		document.getElementById("sidebar2").innerHTML = "The Value is "+ x;
		document.getElementById("sidebar2").className = "formStyle";
	}