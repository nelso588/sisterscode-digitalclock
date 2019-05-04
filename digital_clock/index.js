$(document).ready( function() {

    // With this function we will assemble our clock,
    // calling up whole date and then hours, minutes,
    // and seconds individually.

    function displayTime() {
      //Set current time in a variable called 'currentTime'
      //Set hours, minutes and seconds in their own variables


        // Let's set the AM and PM meridiem and
          // 12-hour format
          // Default is AM


        // If hours is greater than 12
          // Convert to 12-hour format
          // Keep track of the meridiem


        // 0 AM and 0 PM should read as 12


        // If the hours digit is less than 10
            // Add the "0" digit to the front
            // so 9 becomes "09"


        // Format minutes and seconds the same way
          //Minutes:

          //Seconds:

        // This gets a "handle" to the clock div in our HTML


        // Then we set the text inside the clock div
        // to the hours, minutes, and seconds of the current time

        
    }

    // This runs the displayTime function the first time
    displayTime();

    // This makes our clock 'tick' by repeatedly
    // running the displayTime function every second.
    setInterval(displayTime, 1000);

});
