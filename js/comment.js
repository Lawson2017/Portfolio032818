var DOM = document.getElementById('addHere');
var navDiv = document.createElement('DIV');
navDiv.className = 'header';
DOM.prepend(navDiv)



// function to add users comment to DOM
function addComment(){
	// assign the users input to a local variable 'comment'
	var comment = document.getElementById('userInput').value;
	// create a text node containing the users 'comment'	
	var username = document.getElementById('userName').value

	var author = document.createTextNode(username)
	var text = document.createTextNode(username + ": " + comment);
	// create a list item to add that text to
	var item = document.createElement('LI');
	item.className = 'comment'
	// add the text to the new list item
	item.appendChild(text);
	// assign the unordered list we're using as comment section to a variable 'comments'
	var comments = document.getElementById('commentSection');
	// add the comment to the comment section!
	comments.appendChild(item)
}

