function checkTime(i) {
    //i is the parameter we will later be filling with the minutes & seconds values
    if (i < 10) {
        // If the value is less than 10, add a leading 0.
        i = "0" + i;
    };
    // no else condition needed, as it will return the double digit values by default after :09
    // Return the new value of 'i' - this may be changed or unchanged, depending on if the conditional statement evaluated as 'true'
    return i;
};


function startTime(){
	//I've minified each line of code by declaring variables to store all of the time values
	var today = new Date();
	var hours = today.getHours();
	if(hours > 12){
		hours = hours - 12;
	} hours = hours;
	var minutes = today.getMinutes();
	var seconds = today.getSeconds();
	//run the checkTime() that we declared above on our m/s values, as we have a seperate condition to handle the hour
    minutes = checkTime(minutes);
    seconds = checkTime(seconds);
	var time = hours + ":" + minutes + ":" + seconds;
	var clock = document.getElementById("time");
	clock.textContent = time;
	//run this function every second *this will not work if it is not declared INSIDE of the function
	setTimeout(startTime, 1000);

}
// the "onload" event will run my startTime() upon loading in the div that we ID'd as time, 
document.getElementById('time').addEventListener('onload', startTime(), false);


