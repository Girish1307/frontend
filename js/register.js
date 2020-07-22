var register_form = document.getElementById("register");

register_form.onsubmit = function() {
	reg_data = {};
	elements = register_form.elements;

	for(var i = 0; i < elements.length - 1; i++) {
		reg_data[elements[i].name] = elements[i].value;
	}
	
	APIcall('POST', 'register', reg_data);
	alert("request sent!");
}