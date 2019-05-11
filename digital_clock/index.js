$(document).ready( function() {

    // With this function we will assemble our clock,
    // calling up whole date and then hours, minutes,
    // and seconds individually.

    function displayTime() {
      //Set current time in a variable called 'currentTime'
      var currentTime=new Date();

      //Set hours, minutes and seconds in their own variables
      var hours=currentTime.getHours();
      var minutes=currentTime.getMinutes();
      var seconds=currentTime.getSeconds();


        // Let's set the AM and PM meridiem and
          // 12-hour format
          // Default is AM
          var meridiem="AM";



        // If hours is greater than 12
          // Convert to 12-hour format
          // Keep track of the meridiem
          if(hours > 12){
            hours=hours - 12;
            meridiem= "PM";
          }


        // 0 AM and 0 PM should read as 12
        if (hours == 0){
          hours=12;
        }

        // If the hours digit is less than 10
            // Add the "0" digit to the front
            // so 9 becomes "09"
            if (hours < 10){
              hours = "0"+ hours;
            }


        // Format minutes and seconds the same way
          //Minutes:
          if (minutes < 10){
              minutes = "0" + minutes;
            }

          //Seconds:
          if (seconds < 10){
              seconds = "0" + seconds;
            }

        // This gets a "handle" to the clock div in our HTML
        var clockDiv= document.getElementById('clock');


        // Then we set the text inside the clock div
        // to the hours, minutes, and seconds of the current time
        clockDiv.innerText = hours + ":" + minutes +":" seconds +" "+ meridiem;


        }

    // This runs the displayTime function the first time
    displayTime();

    // This makes our clock 'tick' by repeatedly
    // running the displayTime function every second.
    setInterval(displayTime, 1000);

});
