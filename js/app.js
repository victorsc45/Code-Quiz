$(document).ready(function(){
	
	
	var i = 0;
	var x = true;
	var q = true;
	var counter = 0;
	var final = 0;
	// var rock = true;
	var question;
	var answer;
	var chooseItem = [];
	var scoreTotal = 0;
	
	// $(".rock").hide();
	$("#game-form").hide();
	$(".top").hide();
	$("#start-button").on("click",function(){ 
    $("#splash-screen").hide();
    $("#game-form").show();
    $("input[name='r1']").show();
   	$(".top").show();
   	$("#next").attr('disabled', true);
   	$(".new").hide();
   	$(".rock").show();
   	musicQuiz(i);
	
})

// 	$(".rock").click(function (event){
//          event.preventDefault();

// 		if(rock == true){
			
//   	$("#rock-sound")[0].volume = 0.5;
//     $("#rock-sound")[0].load();
//     $("#rock-sound")[0].play();
//     $( ".line-1" ).text("music by:Rockefeller Horsecollar");
//     rock = false;
// }else{
// 	$("#rock-sound")[0].pause();
//  	 $( ".line-1" ).text(" ");
//  	rock = true;   
// }
// })


	
   function musicQuiz(i){
   	
		
   	
	var questions = [
		{
			question:'Inside which HTML element do we put the JavaScript?',
			chooseItem:['script tags', 'scripting tags', 'javascript tags', 'js tags'],
			answer: 0,
		},
		{
			question:'Where is the correct place to insert a JavaScript?',
			chooseItem:['The body tag section', 'The head tag section', 'below the html closing tag', 'Both the head tag section and the body tag sections are correct'],
			answer: 3,
		},
		{
			question:'What is the correct syntax for referring to an external script called xxx.js?',
			chooseItem:['src=xxx.js','id=xxx.js', 'href=xxx.js', 'name=xxx.js'],
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
		}
	]


loadQandA(questions, i);	
}


		function loadQandA(questions, i){
	
	numOfQuestions = questions.length;
	
	$("#question").html("Question" + " " + (1 + i) +" "+ "of" + " " +questions.length+" " + questions[i].question);
	   		
	$("#a1").append( "Answer 1." + " " +" " +" "+ questions[i].chooseItem[0]);
		
    $("#a2").append( "Answer 2." + " "+" "+" "+ questions[i].chooseItem[1]);
        
    $("#a3").append( "Answer 3." +" "+ " " +" "+ questions[i].chooseItem[2]);
       
    $("#a4").append( "Answer 4." + " "+ " " +" "+ questions[i].chooseItem[3]);
           
  	
  			delete correctAnswer;
  			 
			correctAnswer = questions[i].answer;
			validateAnswer(questions, i);
	
}

	function validateAnswer(questions, i){
		 
		
	
		$(".quiz-check").click(function (event) {
            event.preventDefault();
		if (!$("input[name='r1']:checked").val()) {
       				$("#result").html("Must choose an answer!");
       				 
    					}
    				else {
      				
    				
	$("#final").html("The correct answer is "+ " "+ (correctAnswer + 1));
			if (document.getElementById("r1").checked){
				userAnswer = document.getElementById("r1").value;
			}
			
           		
           		
            else if (document.getElementById("r2").checked){
				 userAnswer = document.getElementById("r2").value;
			} 
           		
           else if (document.getElementById("r3").checked){
				 userAnswer = document.getElementById("r3").value;
			}
           		

			else if (document.getElementById("r4").checked){
				  userAnswer = document.getElementById("r4").value;
			}  
			}
				if(correctAnswer == userAnswer){
				$("input[name='r1']").each(function(){
				$(this).attr('disabled', 'disabled');
							});	
				$(".quiz-check").attr('disabled', true);
				
				x = true;
				scoreTot(x);	
					}

				else if(correctAnswer != userAnswer){
				$("input[name='r1']").each(function(){
				$(this).attr('disabled', 'disabled');
							});	
				$(".quiz-check").attr('disabled', true);

				x = false;
				scoreTot(x);

				}

				
					
           	$("#next").attr('disabled', false);	
			});
			
			
	
			}
		

	

	function nextQuestion(){

	$("#next").click(function (event){
         event.preventDefault();
	
   	$("input[name='r1']").attr('disabled',false);
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
  	$("#final").html("Keep on Rockin'!");
   	

 	
  	if(counter == 20){
		endGame();
	}else{
	 
	questions = [musicQuiz(++i)];
	
	
   	loadQandA(questions, i);
 	}

 	})
  


 	}
 function scoreTot(x){
 	
 	if(x != true){
 		delete correctAnswer;
 		delete userAnswer;
 	scoreTotal = (scoreTotal + 0);
 	$("#result").html("Answer is incorrect!");
    $("#score").html(scoreTotal);
    }else if(x == true){
    	delete correctAnswer;
 		delete userAnswer;
    scoreTotal++;
    $("#result").html("Answer is correct!");
	$("#score").html(scoreTotal);

    }
    counter++;
    final = ((scoreTotal/counter)*100);
   
	nextQuestion();


 }	
 	
function endGame(){
	$(".new").show();
	$(".new").attr('disabled', false);
	$("input[name='r1']").attr('disabled',false);
	$("#a1").html(" ");   
    $("#a2").html(" ");
	$("#a3").html(" ");  
    $("#a4").html(" "); 
   	$("#question").html("Play it again...? ");
   	$("#r1").attr('checked', false);
   	$("#r2").attr('checked', false);
   	$("#r3").attr('checked', false);
   	$("#r4").attr('checked', false);
		$("#next").attr('disabled', true);
		$(".quiz-check").attr('disabled', true);
		$("#final").html("The final score is..." + " "+ final + "%");
		$("#result").html("Click...Play Again! for another round!");
	$("input[name='r1']").hide();
$(".new").click(function (event){
         event.preventDefault();
    	location.reload(true);
});
		
}	
					
});