function bookSearch(){
	var search = document.getElementById('search').value
	
	//JSON request
	$.ajax({
		url: "https://www.googleapis.com/books/v1/volumes?q=" + search,
		dataType: "json",
		type: "GET",	 

		success: function(data) {
			for(i = 0; i < data.items.length; i++){
				console.log(data.items[i].volumeInfo.title)
				//store the current data regarding users submission
				var jdata = data.items[i].volumeInfo

				//create elements to append titles and photos
				var newColSm4 = document.createElement('div');
		   		var newImg    = document.createElement('img');
		   		var newH2     = document.createElement('h2');
		   		var newH3     = document.createElement('h3');
		   		var newH4     = document.createElement('h4');
		   		var newAnchor = document.createElement('a');
		   		
		   		//add titles to elements
		   		newH2.textContent = jdata.title
		   		newAnchor.innerText = "About the Novel"

		   		//add attributes to the "about" section
		   		newAnchor.href = jdata.infoLink	
		   		newAnchor.setAttribute = ("target", "_blank")

		   		//add bootstrap class to anchors
		   		newColSm4.className = 'col-sm-12 col-md-8 col-md-offset-2 item';
		   		newAnchor.className = 'btn btn-primary';

		   		//check for imageLinks and add if present
		   		if(jdata.imageLinks) {
			   		newImg.src = jdata.imageLinks.thumbnail;
			   		} else {
				   		newImg.src = 'img/nobook.jpg';
		   		};

		   		// create publish date if one exists
		   		if(jdata.publishedDate) {
		   			newH4.innerText = jdata.publishedDate;
		   		} else {
		   			newH4.innerText = 'no publish date found';
		   		};

		   		// create author if one exists
		   		if(jdata.authors) {
			   		newH3.innerText = jdata.authors[0];
		   		} else {
			   		newH3.innerText = 'no author found';
		   		};

		   		// add tags to document
		   		newColSm4.appendChild(newImg);
		   		newColSm4.appendChild(newH2);
		   		newColSm4.appendChild(newH3);
		   		newColSm4.appendChild(newH4);
		   		newColSm4.appendChild(newAnchor);

		   		// add results to the screen
		   		var results = document.getElementById("results");
		   		results.appendChild(newColSm4);

			};

		},
	});
}

document.getElementById('searchBtn').addEventListener('click', bookSearch, false)