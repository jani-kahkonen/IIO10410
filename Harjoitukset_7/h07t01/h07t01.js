// talot-taulukkoon ladataan talojen tiedot palvelimelta
var talot = [];

// funktiota kutsutaan web-sivulta bodyn onload-tapahtumasta
function loadJSON() {
	ajax("talotiedot.json", function(response) {
		//console.log("response = " + response);
		// create a json object
		var JSONObject = JSON.parse(response);
		talot = JSONObject.talot;
		//console.log(talot);
		for (var i=0;i<talot.length;i++) {
			naytaTalo(i);	
		}
	});
}
function ajax(url, fn) {
	var req;
	if (window.XMLHttpRequest) {
		req = new XMLHttpRequest();
	} else {
		req = new ActiveXObject('Microsoft.XMLHTTP');
	}
	req.onreadystatechange = function() {
		if (req.readyState == 4 && req.status == 200) {
			fn(req.responseText);
		}
	}
	req.open('GET', url, true);
	req.send();
}
function naytaTalo(index) {
	// uusi div	
	var taloDiv = document.createElement("div");
	taloDiv.setAttribute("class","taloContainer");
	
	var img = document.createElement("img");
	img.setAttribute("class","taloImage");
	img.setAttribute("src",talot[index].kuva);
	//console.log("kuva="+talot[index].kuva);
	taloDiv.appendChild(img);
	
	var p1 = document.createElement("p");
	p1.setAttribute("class","otsikko");
	var text = document.createTextNode(talot[index].osoite);	
	p1.appendChild(text);

	var p2 = document.createElement("p");
	var text = document.createTextNode(talot[index].koko);	
	p2.appendChild(text);

	var p3 = document.createElement("p");
	p3.setAttribute("class","kuvaus");
	var text = document.createTextNode(talot[index].kuvaus);	
	p3.appendChild(text);

	var p4 = document.createElement("p");
	var text = document.createTextNode(talot[index].hinta);	
	p4.appendChild(text);

	taloDiv.appendChild(p1);
	taloDiv.appendChild(p2);
	taloDiv.appendChild(p3);
	taloDiv.appendChild(p4);
	
	// talot div
	var talotDiv = document.getElementById("talot");
	
	talotDiv.appendChild(taloDiv);
}