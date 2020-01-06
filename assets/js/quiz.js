var questionEL = $("#questions")
var secondsLeft = 75;
var timeEl = document.querySelector(".time");
var countQuestion = 0;
var allButtons = $("#button1, #button2, #button3, #button4");
var score = 0;
// Set timer function
function setTime() {
  var timerInterval = setInterval(function() {
    secondsLeft--;
    timeEl.textContent = "Timer: " + secondsLeft ;

    if(secondsLeft === 0) {
      clearInterval(timerInterval);
    }

  }, 1000);
}



// Create questions array and use constructor to target each question made
var questions = [
    {
      title: "Commonly used data types DO NOT include:",
      choices: ["strings", "booleans", "alerts", "numbers"],
      answer: "alerts"
    },
    {
      title: "The condition in an if / else statement is enclosed within ____.",
      choices: ["quotes", "curly brackets", "parentheses", "square brackets"],
      answer: "parentheses"
    },
    {
        title: "Which of the following is the correct place to put Javascript link?",
        choices: ["h1 ", "between html and body tag", "bottom of body tag or inside of head tag", "in you css file"],
        answer: "bottom of body tag or inside of head tag"
      },
      {
        title: "What element tag should only be used once in html page",
        choices: ["<h1>", "<br>", "<p>", "<button>"],
        answer: "<h1>"
      },
      {
        title: "The condition in an if / else statement is enclosed within ____.",
        choices: ["quotes", "curly brackets", "parentheses", "square brackets"],
        answer: "parentheses"
      },
  ];

// Load question to page
function getQuestion() {
	if (countQuestion < questions.length) {
		questionEL.text(questions[countQuestion].title);
        
        // Generate button choices 
		allButtons.each(function(i) {
			var allButtons = $(this);
            allButtons.text(questions[countQuestion].choices[i]);
		});
    }
}
// Change button answers with on click function and verify button answers to then move on to next question in array.
allButtons.on("click", function() {
	var butText = $(this).text();
    var $answer = questions[countQuestion].answer;
    // Conditional statement to affect score based on answer clicked
	if (butText === $answer) {
		score += 15;
	} else {
		score -= 15;
	}
    $(".score").text("Score: " + score);
    // Move along index of questions
    countQuestion++;
    // Call function to generate next question
	getQuestion();
});


// Create add event listener to which when start id is clicked it will display:none for h1 and p, and then show quiz container
$("#quiz-container").hide();
// Click event to begin test
$("#start").on("click", function(){
  console.log("connected");
  $("#quiz-container").show();
  $("#primary-content").hide();
  setTime();
  getQuestion();
  console.log("It worked");
});

