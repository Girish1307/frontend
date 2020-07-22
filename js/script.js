BASE_URL = "https://techw.srikar.tech/"

function APIcall(method, url, json) {

	// var return_data;

	var xhttp = new XMLHttpRequest();

	xhttp.open(method, BASE_URL + url, true);
	xhttp.setRequestHeader("Content-Type", "application/json");
	xhttp.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 200) {
			var response = JSON.parse(this.responseText);
			console.log(response);
		}
	};

	if(json){
		json = JSON.stringify(json);
		console.log('Sending with json');
		xhttp.send(json);
	}

	else {
		console.log('Sending without json');
		xhttp.send();
	}
}