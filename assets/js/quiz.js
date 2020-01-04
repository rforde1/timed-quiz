var questionEL = $("#questions")
var secondsLeft = 75;
var timeEl = document.querySelector(".time");
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

// Set variable to have array of questions/choices/answers



// Create add event listener to which when start id is clicked it will display:none for h1 and p, and then show quiz container
$("#quiz-container").hide();
// Click event to begin test
$("#start").on("click", function(){
  console.log("connected");
  $("#quiz-container").show();
  $("#primary-content").hide();
  setTime();
  console.log("It worked");
});


// function that loops through quesitons array 
// for (var j = 0; j < questions[i].choices.length; j++){
//   var choicesBtn = $("<button>");
//   choicesBtn.attr("data-answer", questions[i].choices[j]);
//   choicesBtn.text(questions[i].choices[j]);
//   $("#buttons").append(choicesBtn);
// }


