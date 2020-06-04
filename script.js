
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

function codeQuiz(i){
    var questions = [
        {
            question:'Inside which HTML element do we put the JavaScript?',
            chooseItem:['<script>', '<scripting>', '<javascript>', '<js>'],
            answer: 0,
        },
        {
            question:'Where is the correct place to insert a JavaScript?',
            chooseItem:['The <body> section', 'The <head> section', 'below the </html> tag', 'Both the <head> section and the <body> section are correct'],
            answer: 3,
        },
        {
            question:'What is the correct syntax for referring to an external script called xxx.js?',
            chooseItem:['<script src="xxx.js">', '<script id="xxx.js"', '<script href="xxx.js">', '<script name="xxx.js">'],
            answer: 0,
        },
        {
            question:'How do you write "Hello World" in an alert box?',
            chooseItem:['msgBox("Hello World");', 'alertBox("Hello World");', 'alert("Hello World");', 'msg("Hello World");'],
            answer: 2,
        },
        {
            question:'How do you create a function in JavaScript?',
            chooseItem:['function = myFunction()', 'function myFunction()', 'Get;myFunction()', 'function:myFunction()'],
            answer: 1,
        },
        {
            question:'How do you call a function named "myFunction"?',
            chooseItem:['myFunction()', 'myFunction({})', 'call function myFunction()', 'call myFunction()'],
            answer: 0,
        },
        {
            question:'How to write an IF statement in JavaScript?',
            chooseItem:['if (i == 5)', 'if i = 5', 'if i = 5 then', 'if i == 5 then'],
            answer: 0,
        },
        {
            question:'How to write an IF statement for executing some code if "i" is NOT equal to 5?',
            chooseItem:['if i =! 5 then', 'if (i <> 5)', 'if i <> 5', 'if (i != 5)'],
            answer: 3,
        },
        {
            question:'How does a WHILE loop start?',
            chooseItem:['while (i <= 10)', 'while (i <= 10; i++)', 'while i = 1 to 10', 'while {i <= 10}'],
            answer: 0,
        },
        {
            question:'How does a FOR loop start?',
            chooseItem:['for i = 1 to 5', 'for (i = 0; i <= 5; i++)', 'for (i = 0; i <= 5)', 'for (i <= 5; i++)'],
            answer: 1,
        },
        {
            question:'How can you add a comment in a JavaScript?',
            chooseItem:['||This is a comment', '"This is a comment', '<!--This is a comment-->', '//This is a comment'],
            answer: 3,
        },
        {
            question:'What is the correct way to write a JavaScript array?',
            chooseItem:['var colors = ["red", "green", "blue"]', 'var colors = (1:"red", 2:"green", 3:"blue")', 'var colors = "red", "green", "blue"', 'var colors = 1 = ("red"), 2 = ("green"), 3 = ("blue")'],
            answer: 0,
        },
        {
            question:'How do you round the number 7.25, to the nearest integer?',
            chooseItem:['rnd(7.25)', 'Math.round(7.25)', 'round(7.25)', 'Math.rnd(7.25)'],
            answer: 1,
        },
        {
            question:'How do you find the number with the highest value of x and y?',
            chooseItem:['Math.max(x, y)', 'Math.ceil(x, y)', 'ceil(x, y)', 'top(x, y)'],
            answer: 0,
        },
        {
            question:'How can you detect the client browser name?',
            chooseItem:['client.navName', 'browser.name', 'navigator.appName', 'Navbar.appClient'],
            answer: 2,
        },
        {
            question:'Which event occurs when the user clicks on an HTML element?',
            chooseItem:['onmouseclick', 'onmouseover', 'onchange', 'onclick'],
            answer: 3,
        },
        {
            question:'How do you declare a JavaScript variable?',
            chooseItem:['var carWheel', 'variable carWheel', 'create carWheel', 'v carWheel'],
            answer: 0,
        },
        {
            question:'Which operator is used to assign a value to a variable?',
            chooseItem:['=', '^', 'x', '*'],
            answer: 0,
        },
        {
            question:'What will the following code return: Boolean(10 > 9)',
            chooseItem:['NaN', 'true', 'false', 'undefined'],
            answer: 1,
        },
        {
            question:'What is the correct JavaScript syntax to change the content of the HTML element below?',
            chooseItem:['document.getElement("p").innerHTML = "Hello World!";', '#demo.innerHTML = "Hello World!";', 'document.getElementByName("p").innerHTML = "Hello World!";', 'document.getElementById("demo").innerHTML = "Hello World!";'],
            answer: 3,
        },
    ]
}

playButton.addEventListener("click", startTimer);

