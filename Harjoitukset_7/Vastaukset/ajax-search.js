var searchURLResults   = [];
var searchPlainResults = [];
var index              = 0;
var maxResults         = 0;
var resultURL          = "";

function ajaxSearch(field, event) {

   // 40=Down,38=Up,13=Enter,27=Esc
	var keyCode = event.keyCode;

	   if(keyCode == 40) {
		   index++;
	   } else if(keyCode == 38) {
		   index--;
	   } else if(keyCode == 13) {
		   //window.location.assign(resultURL);
         field.value = resultURL;
         index=0;
	   } else if(keyCode == 27) {
		   field.value = "";
         index=0;
	   }

	// Palataan listan ensimmÃ¤iseen tai viimeiseen
	if(index < 0) {
		index = maxResults;
	} else if(index > maxResults) {
		index = 0;
	}

	try {
		var xhr = new XMLHttpRequest();
	} catch(e) {
		alert(e);
	}
	
	var resultsDiv = document.getElementById("searchresults");
	
	if(field.value !== "") {
		resultsDiv.innerHTML = "";
	
		var params = "?q=" + field.value;
		var url = "ajax-suggest.php" + params;
		
		
		xhr.open("GET", url, true);
		xhr.send();
		
		xhr.onreadystatechange = function() {

			if(xhr.readyState == 4 && xhr.status==200) {		
				var persons = [];
				
				persons = parsePersonsToArray(xhr.responseText);	
				appendPersonResultsToResultsDiv(persons);
				
				maxResults = searchURLResults.length - 1;
            if (searchURLResults.length != 0 ) {
   				searchURLResults[index].children[0].style.background = "#53949c";
               searchURLResults[index].children[0].style.color      = "#ffffff";
	         }			
				// resultURL = searchURLResults[index];
            resultURL = searchPlainResults[index];
            //console.log(resultURL);
            //console.log(index);
				searchURLResults = [];
            searchPlainResults = [];				
			}
		}
	
	} else {
		resultsDiv.innerHTML = "";
      index = 0;
	}
}

function parsePersonsToArray(rtext) {
   var persons = rtext.split("\t");
	return persons;
}

function appendPersonResultsToResultsDiv(array) {
	var resultsDiv = document.getElementById("searchresults");
   resultsDiv.setAttribute('style','position:relative;top:0px;left:0;');
   resultsDiv.setAttribute('style','width: 240px; padding:0px; background-color:#f0f0f0;');

   // SHIFT+merkki (IsoKirjain): joskus kaksi perÃ¤kkÃ¤istÃ¤ KeyUppia
   // resultsDiv.children.length == 0 estÃ¤Ã¤ nimilistan tuplaantumisen
	if (array.length != 0 && resultsDiv.children.length == 0) {
		for(var i = 0; i < array.length; i++) {
			var div = document.createElement("div");
			var a = document.createElement("a");
			a.setAttribute("href", "ajax-suggest.php?q=" + array[i]);
         a.setAttribute("style", "text-decoration: none; color: #53949c");

         div.innerHTML = array[i];
			a.appendChild(div);
			searchURLResults.push(a);
         searchPlainResults.push(array[i]);
			resultsDiv.appendChild(a);
		}
	}
}

// Hakuikonia (suurennuslasia) klikattu
function submitInput() {
   var sinput = document.getElementById("searchinput");
   window.location.assign("ajax-suggest.php?q=" + sinput.value);
}
