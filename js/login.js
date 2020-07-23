var login_form = document.getElementById("login");

var token;

login_form.onsubmit = function() {
	login_data = {};
	elements = login_form.elements;

	for(var i = 0; i < elements.length - 1; i++) {
		login_data[elements[i].name] = elements[i].value;
	}
	
	loginUser(login_data);
	alert("request sent!");
	window.open('/home/');
}