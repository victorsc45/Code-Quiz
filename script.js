
var playButton = document.querySelector("#play");
var minutesDisplay = document.querySelector("#minutes");
var secondsDisplay = document.querySelector("#seconds");
var gameMinutes = document.querySelector("#game-minutes");
var timeLabel = document.getElementById("minute-label")
var totalSeconds = 0;
var secondsElapsed = 0;
var interval;


//These two functions are just for making sure the numbers look nice for the html elements
function getFormattedMinutes() {
  //
  var secondsLeft = totalSeconds - secondsElapsed;

  var minutesLeft = Math.floor(secondsLeft / 60);

  var formattedMinutes;

  if (minutesLeft < 10) {
    formattedMinutes = "0" + minutesLeft;
  } else {
    formattedMinutes = minutesLeft;
  }

  return formattedMinutes;
}

function getFormattedSeconds() {
  var secondsLeft = (totalSeconds - secondsElapsed) % 60;

  var formattedSeconds;

  if (secondsLeft < 10) {
    formattedSeconds = "0" + secondsLeft;
  } else {
    formattedSeconds = secondsLeft;
  }

  return formattedSeconds;
}

/*  sets the totalSeconds variable which
   is used in getFormattedMinutes/Seconds() and the renderTime() function. 
   It essentially resets our timer */
function setTime() {
  var minutes = 2;
  minutes = gameMinutes.value.trim();
  clearInterval(interval);
  totalSeconds = minutes * 60;
}

//This function does 2 things. displays the time and checks to see if time is up.
function renderTime() {
 
  minutesDisplay.textContent = getFormattedMinutes();
  secondsDisplay.textContent = getFormattedSeconds();

 // ..and then checks to see if the time has run out
  if (secondsElapsed >= totalSeconds) {
   
      alert("game over");
    

    stopTimer();
  }
}

// This function is where the "time" aspect of the timer runs

function startTimer() {
  setTime();
  renderTime();
 playButton.style.display = "none";
 gameMinutes.style.display = "none";
 timeLabel.style.display = "none";
  // we only want to start the timer if minutes is > 0 USE THIS TO SUBTRACT THE TIME FOR WRONG ANSWERS
  if (totalSeconds > 0) {    
    /* the "interval" variable here using "setInterval()" begins the recurring increment of the 
       secondsElapsed variable which is used to check if the time is up */
      interval = setInterval(function() {
        secondsElapsed++;
        //So renderTime() is called here once every second.
        renderTime();
      }, 1000);
  } else {
    alert("Minutes of work/rest must be greater than 0.")
  }
}



/* This function stops the interval and also resets secondsElapsed 
   and calls "setTime()" which effectively reset the timer 
   to the input selections gameMinutes.value  */
function stopTimer() {
  secondsElapsed = 0;
  setTime();
  renderTime();
}



playButton.addEventListener("click", startTimer);

