var zodiac = [
	{
		sign: "aquarius",
		image: "img/aquarius.jpg",
	},
	{
		sign: "aries",
		image: "img/aries.jpg"
	},
	{
		sign: "cancer",
		image: "img/cancer.jpg"
	},
	{
		sign: "capricorn",
		image: "img/capricorn.jpg"
	},
	{
		sign: "gemini",
		image: "img/gemini.jpg"
	},
	{
		sign: "leo",
		image: "img/leo.jpg"
	},
	{
		sign: "libra",
		image: "img/libra.jpg"
	},
	{
		sign: "pisces",
		image: "img/pisces.jpg"
	},
	{
		sign: "sagittarius",
		image: "img/sagittarius.jpg"
	},
	{
		sign: "scorpio",
		image: "img/scorpio.jpg"
	},
	{
		sign: "taurus",
		image: "img/taurus.jpg"
	},
	{
		sign: "virgo",
		image: "imgs/virgo.jpg"
	}
];

function findSign() {
	// store the user's input as the zodiac name to be used in the condition
	var userdata = document.getElementById("userdata");

	// confirms that the 'onclick' is working in the button with the users input
	console.log("users value is: " + userdata.value);

	// loop through zodiac array one item at a time
	for(var i = 0; i < zodiac.length; i = i + 1) {
		// check what the users input is before using it in this condition
		console.log("users value lowercase is: " + userdata.value.toLowerCase());
		// check the current item's sign in the zodiac array, and run through the properites that match the user's zodiac sign
		console.log("current zodiac sign in loop is: " + zodiac[i].sign);

		// if the value the user typed in, changed to all lowercase letters (as we listed the various signs in lowercase in the array of objects above), is equal to one of our signs, then we do something
		if(userdata.value.toLowerCase() === zodiac[i].sign) {
			// confirm the if statement ran
			console.log("if statement ran");

			// confirm the match between the users input and a zodiac sign, along with the image
			console.log("users typed in: " + userdata.value);
			console.log("current image value is: " + zodiac[i].image);

			// get element with id="userSign" and change the text to the user input in all caps
			document.getElementById("userSign").textContent = userdata.value.toUpperCase();
			// get element with id="symbol" and change source attribute to current zodiac image path
			document.getElementById("symbol").src = zodiac[i].image;
			
			// stop the function ~ Could this send a browser into an infinite loop? Is it worth finding out? Delete at your own risk.
			return;
		};

		// display the else situation in the console, given the users input is not a correct zodiac sign
		console.log("no matches were found, user failed to type in a correct zodiac sign");

		// what to display in the event above
		document.getElementById("userSign").textContent = "Not a Zodiac sign. Think now and try again!";
		document.getElementById("symbol").src = "";
	};
}




