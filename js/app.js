$(document).ready(function () {
  //highscore variables
  let highInput = document.querySelector("#high-text");
  let highSave = document.querySelector("#save");
  let highList = document.querySelector("#high-list");
  let highCountSpan = document.querySelector("#high-count");
  let highs = [];

  //timer variables
  let timer = $(".timer");
  let countIt = 0;
  let timeAmount = 120;
  let loseTime = 0;

  //variables for quiz question functions
  let i = 0;
  let x = true;
  let q = true;
  let counter = 0;
  let final = 0;
  let question;
  let answer;
  let chooseItem = [];
  let scoreTotal = 0;
  let interval;

  //hide saved scores elements
  $("#save").hide();
  $("#initials").hide();
  $("#high-text").hide();
  $("#high-count").hide();
  $("#high-list").hide();
  $("#highCounter").hide();
  $("#buttn").hide();

  //elements will be shown at start of quiz
  $("#top").html("Javascript Code Quiz!");
  $("#game-form").hide();
  $(".top").hide();

  //click start quiz on splash page to begin quiz
  $("#start-button").on("click", function () {
    $("#splash-screen").empty();
    $(".new").hide();
    $(".high").hide();
    $("#game-form").show();
    $("input[name='r1']").show();
    $(".top").show();
    $("#next").attr("disabled", true);
    codeQuiz(i);
    interval = setInterval(timeCounter, 1000);
  });

  // timer functions below
  function convertSecs(s) {
    min = Math.floor(s / 60);
    sec = Number(s % 60);
    if (sec < 10) {
      return "0" + min + ":" + "0" + sec;
    } else {
      return "0" + min + ":" + sec;
    }
  }

  // Timer counter  begins with the startquiz button
  function timeCounter() {
    countIt++;
    finalTimer = timeAmount - countIt - loseTime;
    timer.html(convertSecs(finalTimer));

    //Stop timer if total time is reached
    if (finalTimer <= 0) {

      clearInterval(interval);
      countIt = 0;
      loseTime = 0;
      timer.html("min 00 : seconds 00 times up player!");
      endGame();
    }
  }

  //High Score elements and intialize local storage
  $(".high").on("click", function (event) {
    event.preventDefault();
    $("#initials").show();
    $("#high-text").show();
    $("#highCounter").show();
    $("#high-count").show();
    $("#high-list").show();
    $("#save").show();
    $("#buttn").show();
    init();
  });
  function init() {
    // Get stored highs from localStorage
    // Parsing the JSON string to an object
    var storedhighs = JSON.parse(localStorage.getItem("highs"));

    // If highs were retrieved from localStorage, update the highs array to it
    if (storedhighs !== null) {
      highs = storedhighs;
    }

    // Render highs to the DOM
    renderhighs();
  }

  function renderhighs() {
    // Clear highList element 
    highList.innerHTML = "";
    highCountSpan.textContent = highs.length;

    // Render a new li for each high
    for (var i = 0; i < highs.length; i++) {
      var high = highs[i];

      var li = document.createElement("li");
      console.log(high)
      li.textContent = Object.keys(high)[0] + "" + high[Object.keys(high)[0]];
      li.setAttribute("data-index", i);

      //appending new element with key objects attributes set
      highList.appendChild(li);

    }
  }

  function storehighs() {
    // Stringify and set "highs" key in localStorage to highs array
    localStorage.setItem("highs", JSON.stringify(highs));
  }

  // When form is submitted new highscore 
  highSave.addEventListener("click", function (event) {
    event.preventDefault();

    var highText = highInput.value.trim()
    console.log("INitials:", highText)

    // Add new highText to highs array, clear the input
    var newScore = {
      [highText]: final
    }
    highs.push(newScore);
    highInput.value = "";
    $("#save").hide();
    $("#high-text").hide();
    $("#initials").hide();


    // Store updated highs in localStorage, re-render the list
    storehighs();
    renderhighs();
  });
  $("#buttn").click(function (event) {
    event.preventDefault();
    var key;
    for (var i = 0; i < localStorage.length; i++) {
      key = localStorage.key(i);
      localStorage.removeItem(key);
    }
    $("#high-list").empty();
    $("#highCounter").empty();
  });
  //function to list Objects for questions
  function codeQuiz(i) {
    var questions = [
      {
        question: "Inside which HTML element do we put JavaScript?",
        chooseItem: [
          "inside script> tags",
          "inside scripting> tags",
          "inside javascript> tags",
          "inside js> tags",
        ],
        answer: 0,
      },
      {
        question: "Where is the correct place to insert a JavaScript?",
        chooseItem: [
          "The body> tag section",
          "The head> tag section",
          "below the html> closing tag",
          "Both the head> tag section and the body> tag sections are correct",
        ],
        answer: 3,
      },
      {
        question:
          "What is the correct syntax for referring to an external script called xxx.js?",
        chooseItem: ["src=xxx.js", "id=xxx.js", "href=xxx.js", "name=xxx.js"],
        answer: 0,
      },
      {
        question: 'How do you write "Hello World" in an alert box?',
        chooseItem: [
          'msgBox("Hello World");',
          'alertBox("Hello World");',
          'alert("Hello World");',
          'msg("Hello World");',
        ],
        answer: 2,
      },
      {
        question: "How do you create a function in JavaScript?",
        chooseItem: [
          "function = myFunction()",
          "function myFunction()",
          "Get;myFunction()",
          "function:myFunction()",
        ],
        answer: 1,
      },
      {
        question: 'How do you call a function named "myFunction"?',
        chooseItem: [
          "myFunction()",
          "myFunction({})",
          "call function myFunction()",
          "call myFunction()",
        ],
        answer: 0,
      },
      {
        question: "How to write an IF statement in JavaScript?",
        chooseItem: [
          "if (i == 5)",
          "if i = 5",
          "if i = 5 then",
          "if i == 5 then",
        ],
        answer: 0,
      },
      {
        question:
          'How to write an IF statement for executing some code if "i" is NOT equal to 5?',
        chooseItem: [
          "if i =! 5 then",
          "if (i <> 5)",
          "if i <> 5",
          "if (i != 5)",
        ],
        answer: 3,
      },
      {
        question: "How does a WHILE loop start?",
        chooseItem: [
          "while (i <= 10)",
          "while (i <= 10; i++)",
          "while i = 1 to 10",
          "while {i <= 10}",
        ],
        answer: 0,
      },
      {
        question: "How does a FOR loop start?",
        chooseItem: [
          "for i = 1 to 5",
          "for (i = 0; i <= 5; i++)",
          "for (i = 0; i <= 5)",
          "for (i <= 5; i++)",
        ],
        answer: 1,
      },
      {
        question: "How can you add a comment in a JavaScript?",
        chooseItem: [
          "||This is a comment",
          '"This is a comment',
          "<<<<-This is a comment>>>>",
          "//This is a comment",
        ],
        answer: 3,
      },
      {
        question: "What is the correct way to write a JavaScript array?",
        chooseItem: [
          'var colors = ["red", "green", "blue"]',
          'var colors = (1:"red", 2:"green", 3:"blue")',
          'var colors = "red", "green", "blue"',
          'var colors = 1 = ("red"), 2 = ("green"), 3 = ("blue")',
        ],
        answer: 0,
      },
      {
        question: "How do you round the number 7.25, to the nearest integer?",
        chooseItem: [
          "rnd(7.25)",
          "Math.round(7.25)",
          "round(7.25)",
          "Math.rnd(7.25)",
        ],
        answer: 1,
      },
      {
        question:
          "How do you find the number with the highest value of x and y?",
        chooseItem: [
          "Math.max(x, y)",
          "Math.ceil(x, y)",
          "ceil(x, y)",
          "top(x, y)",
        ],
        answer: 0,
      },
      {
        question: "How can you detect the client browser name?",
        chooseItem: [
          "client.navName",
          "browser.name",
          "navigator.appName",
          "Navbar.appClient",
        ],
        answer: 2,
      },
      {
        question: "Which event occurs when the user clicks on an HTML element?",
        chooseItem: ["onmouseclick", "onmouseover", "onchange", "onclick"],
        answer: 3,
      },
      {
        question: "How do you declare a JavaScript variable?",
        chooseItem: [
          "var carWheel",
          "variable carWheel",
          "create carWheel",
          "v carWheel",
        ],
        answer: 0,
      },
      {
        question: "Which operator is used to assign a value to a variable?",
        chooseItem: ["=", "^", "x", "*"],
        answer: 0,
      },
      {
        question: "What will the following code return: Boolean(10 > 9)",
        chooseItem: ["NaN", "true", "false", "undefined"],
        answer: 1,
      },
      {
        question:
          "What is the correct JavaScript syntax to change the content of the HTML element below?",
        chooseItem: [
          'document.getElement("p").innerHTML = "Hello World!";',
          '#demo.innerHTML = "Hello World!";',
          'document.getElementByName("p").innerHTML = "Hello World!";',
          'document.getElementById("demo").innerHTML = "Hello World!";',
        ],
        answer: 3,
      },
    ];

    correctAnswer = questions[i].answer;
    numOfQuestions = questions[i].question;

    loadQandA(questions, i);
  }
  //load the questions to DOM
  function loadQandA(questions, i) {
    $("#question").html(numOfQuestions);

    $("#a1").html("1: " + " " + questions[i].chooseItem[0]);

    $("#a2").html("2: " + " " + questions[i].chooseItem[1]);

    $("#a3").html("3: " + " " + questions[i].chooseItem[2]);

    $("#a4").html("4: " + " " + questions[i].chooseItem[3]);

    validateAnswer(questions, i);
  }

  function validateAnswer(questions, i) {
    $(".quiz-check").click(function (event) {
      event.preventDefault();
      //validate that an answer is choosen
      if (!$("input[name='r1']:checked").val()) {
        $("#result").html("Must choose an answer!");
      } else {
        //check the value of the answers on the DOM
        $("#final").empty();
        if (document.getElementById("r1").checked) {
          userAnswer = document.getElementById("r1").value;
        } else if (document.getElementById("r2").checked) {
          userAnswer = document.getElementById("r2").value;
        } else if (document.getElementById("r3").checked) {
          userAnswer = document.getElementById("r3").value;
        } else if (document.getElementById("r4").checked) {
          userAnswer = document.getElementById("r4").value;
        }
      }
      //check if the player answer is correct or incorrect update score
      if (correctAnswer == userAnswer) {
        $("input[name='r1']").each(function () {
          $(this).attr("disabled", "disabled");
        });
        $(".quiz-check").attr("disabled", true);
        x = true;
        scoreTot(x);
      } else if (correctAnswer != userAnswer) {
        $("input[name='r1']").each(function () {
          $(this).attr("disabled", "disabled");
        });
        $(".quiz-check").attr("disabled", true);
        loseTime = loseTime + 5;
        x = false;
        scoreTot(x);
      }

      $("#next").attr("disabled", false);
    });
  }

  function nextQuestion() {
    $("#next").click(function (event) {
      //prepare the DOM for next questions
      event.preventDefault();
      $("input[name='r1']").attr('disabled', false);
      $("#a1").html(" ");
      $("#a2").html(" ");
      $("#a3").html(" ");
      $("#a4").html(" ");
      $("#question").html(" ");
      $("#r1").prop('checked', false);
      $("#r2").prop('checked', false);
      $("#r3").prop('checked', false);
      $("#r4").prop('checked', false);
      $("#result").html(" ");
      $(".quiz-check").attr('disabled', false);
      $("#next").attr('disabled', true);


      //condition to end the game if all questions answered
      if (counter >= 20) {
        endGame();
      }
      else {
        //continue to the next question
        questions = [codeQuiz(++i)];
        loadQandA(questions, i);
      }
    });



  }
  // calculate the score as each question is answered either incorrect or correct
  function scoreTot(x) {
    if (x != true) {
      counter++;
      delete correctAnswer;
      delete userAnswer;
      scoreTotal = scoreTotal + 0;
      $("#result").html("Answer is incorrect!");
      $("#score").html(" " + scoreTotal);
      $("#currentQuest").html(" " + " of" + " " + counter);

    } else if (x == true) {
      counter++;
      delete correctAnswer;
      delete userAnswer;
      scoreTotal++;
      $("#result").html("Answer is correct!");
      $("#score").html(" " + scoreTotal);
      $("#currentQuest").html(" " + " of" + " " + counter);
    }
    //calculate the final total of the number questions right out of 20 
    final = Math.floor((scoreTotal / 20) * 100);
    nextQuestion();
  }

  function endGame() {
    //empty elements on the DOM 
    $("input[name='r1']").attr("disabled", false);
    $(".ques").empty();
    $("#h1").empty();
    $("#next").attr("disabled", true);
    $("#next").hide();
    $(".quiz-check").attr("disabled", true);
    $(".quiz-check").hide();
    $("input[name='r1']").empty();

    //display new game and highscore and final totals for player
    $(".new").show();
    $(".new").attr("disabled", false);
    $("#question").html("Remember there are 20 total questions");
    $(".high").show();
    $("#final").html("The final score is..." + " " + final + "%");
    $("#result").html("Click...Play Again! for another round!");

    //Start new quiz button click
    $(".new").click(function (event) {

      location.reload(true);
    })
  }
});
