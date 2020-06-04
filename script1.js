// h1 changes with each question possible use
var tagName = prompt("Please enter an HTML Tag (ex. h1, h2, p, div):", "enter tag");

if (tagName !== "h1" && tagName !== "h2" && tagName !== "p" && tagName !== "div") {
  alert("please enter a valid tag");
} else {
  var tag = document.createElement(tagName);
  tag.textContent = "This was made via prompts. It's a " + tagName;
  document.body.appendChild(tag);
}

var nextTag = confirm("Would you like to add another tag?");
if (nextTag === true) {
  var secondTagName = prompt("Please enter another  HTML Tag (ex. h1, h2, p, div):", "enter tag here");
  if(secondTagName !== "h1" && secondTagName !== "h2" && secondTagName !== "p" && secondTagName !== "div") {
    alert("please enter a valid tag");
  } else {
    var secondTag = document.createElement(secondTagName);
    secondTag.textContent = "This is our second tag via prompts, it's a " + secondTagName;
    document.body.appendChild(secondTag);
  }
}
// timer function activity 09
var poem = "Some say the world will end in 🔥, Some say in ice. From what I’ve tasted of desire, I hold with those who favor fire. But if it had to perish twice, I think I know enough of hate. To say that for destruction ice, Is also great, And would suffice.";
var words = poem.split(" ");

var mainEl = document.getElementById("main");
var readEl = document.getElementById("read");
var timerEl = document.getElementById("countdown");
var bodyEl = document.createElement("div");

var i = 0;

var millisecondsPerWord = prompt("How many milliseconds between words would you like?");

function prepareRead() {
  var timeLeft = 5;

  var timeInterval = setInterval(function() {
    timerEl.textContent = timeLeft + " seconds remaining";
    timeLeft--;

    if (timeLeft === 0) {
      timerEl.textContent = "";
      speedRead();
      clearInterval(timeInterval);
    }

  }, 1000);
}


function speedRead() {
  mainEl.append(bodyEl);

  var poemInterval = setInterval(function() {
    if (words[i] === undefined) {
      clearInterval(poemInterval);
    } else {
      mainEl.textContent = words[i];
      i++;
    }

  }, millisecondsPerWord);
}

prepareRead();
// next question after button click listener 10 activity
var themeSwitcher = document.querySelector("#theme-switcher");
var container = document.querySelector(".container");
var mode = "dark";

themeSwitcher.addEventListener("click", function() {
  if (mode === "dark") {
    mode = "light";
    container.setAttribute("class", "light");
  }
  else {
    mode = "dark";
    container.setAttribute("class", "dark");
  }
});
// eventlistener with response textcontent activity 12
var submitEl = document.querySelector("#submit");
var nameInput = document.querySelector("#name");
var emailInput = document.querySelector("#email");
var submissionResponseEl = document.querySelector("#response");

submitEl.addEventListener("click", function(event) {
  event.preventDefault();

  console.log(event);
  
  var response = "Thank you for your submission " + nameInput.value + "! We will reach out to you at " + emailInput.value + ".";
  submissionResponseEl.textContent = response;
});
// clear highscore acivity 14
clearEl.addEventListener("click", function(event) {
    event.preventDefault();
    textAreaEl.value = "";
    elements.forEach(function(element) {
      element.textContent = "";
    });
  });
//   button click event element parent id activity 18
var listEl = document.querySelector("#grocery-list");
var shoppingCartEl = document.querySelector("#shopping-cart");
var groceries = ["Bananas", "Apples", "Oranges", "Grapes", "Blueberries"];

listEl.addEventListener("click", function(event) {
  event.preventDefault();
  if(event.target.matches("button")) {
    var item = document.createElement("div");
    item.textContent = groceries[event.target.parentElement.id];
    shoppingCartEl.append(item);
  }
});

// SAVE TO array activity 19
closeEl.addEventListener("click", close);
saveBtn.addEventListener("click", function(event) {
  event.preventDefault();
  people[currentId].description = descriptionEl.value;
  close();
});
// local storage of score activity 21
signUpButton.addEventListener("click", function(event) {
    event.preventDefault();
  
    var email = document.querySelector("#email").value;
    var password = document.querySelector("#password").value;
  
    if (email === "") {
      displayMessage("error", "Email cannot be blank");
    } else if (password === "") {
      displayMessage("error", "Password cannot be blank");
    } else {
      displayMessage("success", "Registered successfully");
  
      localStorage.setItem("email", email);
      localStorage.setItem("password", password);
      renderLastRegistered();
    }
  });
//   queryselector element target set attribute data type activity 24
var imageContainer = document.querySelector(".img-container");

imageContainer.addEventListener("click", function(event) {
  var element = event.target;

  if (element.matches("img")) {
    var state = element.getAttribute("data-state");

    if (state === "still") {
      element.setAttribute("data-state", "animate");
      element.setAttribute("src", element.getAttribute("data-animate"));
    } else if (state === "animate") {
      element.setAttribute("data-state", "still");
      element.setAttribute("src", element.getAttribute("data-still"));
    }
  }
});
// display questions for quiz using object like activity 26 27 28 create element buttons todos
var todoInput = document.querySelector("#todo-text");
var todoForm = document.querySelector("#todo-form");
var todoList = document.querySelector("#todo-list");
var todoCountSpan = document.querySelector("#todo-count");

var todos = [];

init();

function renderTodos() {
  // Clear todoList element and update todoCountSpan
  todoList.innerHTML = "";
  todoCountSpan.textContent = todos.length;

  // Render a new li for each todo
  for (var i = 0; i < todos.length; i++) {
    var todo = todos[i];

    var li = document.createElement("li");
    li.textContent = todo;
    li.setAttribute("data-index", i);

    var button = document.createElement("button");
    button.textContent = "Complete";

    li.appendChild(button);
    todoList.appendChild(li);
  }
}

function init() {
  // Get stored todos from localStorage
  // Parsing the JSON string to an object
  var storedTodos = JSON.parse(localStorage.getItem("todos"));

  // If todos were retrieved from localStorage, update the todos array to it
  if (storedTodos !== null) {
    todos = storedTodos;
  }

  // Render todos to the DOM
  renderTodos();
}

function storeTodos() {
  // Stringify and set "todos" key in localStorage to todos array
  localStorage.setItem("todos", JSON.stringify(todos));
}

// When form is submitted...
todoForm.addEventListener("submit", function(event) {
  event.preventDefault();

  var todoText = todoInput.value.trim();

  // Return from function early if submitted todoText is blank
  if (todoText === "") {
    return;
  }

  // Add new todoText to todos array, clear the input
  todos.push(todoText);
  todoInput.value = "";

  // Store updated todos in localStorage, re-render the list
  storeTodos();
  renderTodos();
});

// When a element inside of the todoList is clicked...
todoList.addEventListener("click", function(event) {
  var element = event.target;

  // If that element is a button...
  if (element.matches("button") === true) {
    // Get its data-index value and remove the todo element from the list
    var index = element.parentElement.getAttribute("data-index");
    todos.splice(index, 1);

    // Store updated todos in localStorage, re-render the list
    storeTodos();
    renderTodos();
  }
});

// timer functions 29 activity 
var statusSpan = document.querySelector("#status");
var statusToggle = document.querySelector("#status-toggle");
var playButton = document.querySelector("#play");
var pauseButton = document.querySelector("#pause");
var stopButton = document.querySelector("#stop");
var minutesDisplay = document.querySelector("#minutes");
var secondsDisplay = document.querySelector("#seconds");
var workMinutesInput = document.querySelector("#work-minutes");
var restMinutesInput = document.querySelector("#rest-minutes");

var totalSeconds = 0;
var secondsElapsed = 0;
var status = "Working";
var interval;

/* One thing to distinguish here is that not all functions are created equal.
   Some functions just change settings, some functions just call other functions,
   some functions just format strings or numbers, etc. */

//this launches the app by calling setTime() and renderTime()
getTimePreferences();

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

/* This function just retrieves the values from the html input elements; Sort of 
   getting run in the background, it sets the totalSeconds variable which
   is used in getFormattedMinutes/Seconds() and the renderTime() function. 
   It essentially resets our timer */
function setTime() {
  var minutes;

  if (status === "Working") {
    minutes = workMinutesInput.value.trim();
  } else {
    minutes = restMinutesInput.value.trim();
  }

  clearInterval(interval);
  totalSeconds = minutes * 60;
}

//This function does 2 things. displays the time and checks to see if time is up.
function renderTime() {
  // When renderTime is called it sets the textContent for the timer html...
  minutesDisplay.textContent = getFormattedMinutes();
  secondsDisplay.textContent = getFormattedSeconds();

 // ..and then checks to see if the time has run out
  if (secondsElapsed >= totalSeconds) {
    if (status === "Working") {
      alert("Time for a break!");
    } else {
      alert("Time to get back to work!");
    }

    stopTimer();
  }
}

// This function is where the "time" aspect of the timer runs
// Notice no settings are changed other than to increment the secondsElapsed var
function startTimer() {
  setTime();

  // we only want to start the timer if minutes is > 0
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

/* This function stops the setInterval() set in startTimer but does not
   reset the secondsElapsed variable and does not reset the time by calling "setTime()" */
function pauseTimer() {
  clearInterval(interval);
  renderTime();
}

/* This function stops the interval and also resets secondsElapsed 
   and calls "setTime()" which effectively reset the timer 
   to the input selections workMinutesInput.value and restMinutesInput.value */
function stopTimer() {
  secondsElapsed = 0;
  setTime();
  renderTime();
}

/* Our timer is fancy enough to handle 2 different settings at once this toggle 
   function basically just specifies which of our 2 timer settings to use. */
function toggleStatus(event) {
  var checked = event.target.checked;

  if (checked) {
    status = "Working";
  } else {
    status = "Resting";
  }

  statusSpan.textContent = status;

  secondsElapsed = 0;
  setTime();
  renderTime();
}

function getTimePreferences() {
  /* Here we check to see if any preferences have 
     been set in the local storage via "setTimePreferences()" */
  var preferences = JSON.parse(localStorage.getItem("preferences"));

  /* "setTimePreferences()" is actually never called so the below code will never run 
     (ie. the "preferences" variable checked below will always be null.
     The settings are always set by directly checking the input elements in the setTime() function) */
  if (preferences) {
    if (preferences.workMinutes) {
      workMinutesInput.value = preferences.workMinutes;
    }

    if (preferences.restMinutes) {
      restMinutesInput.value = preferences.restMinutes;
    }
  }

  //This is where the app is really kicked-off, setTime and renderTime are the two main routines.
  setTime();
  renderTime();
}

//This function is defined but never used.
function setTimePreferences() {
  localStorage.setItem(
    "preferences",
    JSON.stringify({
      workMinutes: workMinutesInput.value.trim(),
      restMinutes: restMinutesInput.value.trim()
    })
  );
}

playButton.addEventListener("click", startTimer);
pauseButton.addEventListener("click", pauseTimer);
stopButton.addEventListener("click", stopTimer);
statusToggle.addEventListener("change", toggleStatus);

