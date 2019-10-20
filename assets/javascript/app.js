$(document).ready(function(){
//source for javascript multiple choice questions to appear as a variable: https://www.sitepoint.com/simple-javascript-quiz/

let timeLeft = 60;
let numberCorrect = 0;
let numberIncorrect = 0;
let numberUnanswered = 0;
let quizWindow = $("#trivia-window");
let timerWindow = $("#Timer");
let results = $("#Results");

const quizQuestions = [
    {
//source for questions: https://en.wikipedia.org/wiki/Galactic_Center
      question: "What is the center of the Milky Way Galaxy called?",
      answers: ["Galactic Center", "Norman", "Wolf-Rayet", "None of these"],
      correctAnswer: "Galactic Center",
    },

  ];

//source: https://www.geeksforgeeks.org/how-to-clear-the-content-of-a-div-using-javascript/
//--REMOVE CHILD TO REMOVE QUESTIONS

  function showResults() {
    results.append("<p> Correct: " + numberCorrect + "</p><br>" + "<p> Incorrect: " + numberIncorrect + "</p><br>" + "<p> Unanswered" + numberUnanswered + "</p>");
  };


  function timedTrivia() {
    timerWindow.append("<h1>" + timeLeft + "</h1>");
    setTimeout(function(){ timeLeft--;}, 60000);
  };

  function showQuestions() {
//display questions
    for (let i = 0; i < quizQuestions.length; i++ ){
        quizWindow.append("<p>" + quizQuestions[i].question + "</p>");
//display answers using a nested for loop
        for (let j = 0; j < quizQuestions[i].answers.length; j++){
            quizWindow.append("<input type='radio' name='question-" + i + "' value='" + quizQuestions[i].answers[j] + "''>" + quizQuestions[i].answers[j] + "<br>");
        }
    }

//select a single radio button at a time
    $("input").on("click", function(){
        let answer = $("input value :checked");
        // console.log($().html);
        // console.log($("input :checked"))
        if (answer === quizQuestions.correctAnswer) {
            numberCorrect++;
            console.log(numberCorrect);
        }
        else if (answer !== quizQuestions.correctAnswer) {
            numberIncorrect++;
        };
        console.log(numberCorrect)
        console.log(numberIncorrect)
    //if the answer does not equal answers of any kind, then increate unanswered number
        if (answer !== quizQuestions.answers) {
            numberUnanswered++;
        };
    });


};

//first window pops up - start button - make it disappear on click function
//source: https://www.youtube.com/watch?v=RCFzfym8RvU

    $("#start-game-button").click(function(){
        $("#start-game-button").css("display","none");
        $("#trivia-text").css("display","none");
        $("#trivia-text2").css("display","none");
        $("#trivia-text3").css("display","none");
//when start button is clicked: display pops up, timer begins
       showQuestions();
        timedTrivia();
    });
});

