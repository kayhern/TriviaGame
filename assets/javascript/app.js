$(document).ready(function(){
//source for javascript multiple choice questions to appear as a variable: https://www.sitepoint.com/simple-javascript-quiz/

let timeLeft = 20;
let numberCorrect = 0;
let numberIncorrect = 0;
let numberUnanswered = 0;
let quizWindow = $("#trivia-window");

const quizQuestions = [
    {
      question: "Who is the strongest?",
      answers: ["Superman", "The Terminator", "Waluigi, obviously", "None of these"],
      correctAnswer: "Superman",
    },
  ];

//container to show results used when user clicked finish in the other function below

//when the user is finished and clicks the finish button then results appear

//OR when the timer goes off the results will appear

//when user clicked finish: popup window showing number of correct, number of incorrect, number of unanswered or when the last answer is finished the results appear?

//source: https://www.geeksforgeeks.org/how-to-clear-the-content-of-a-div-using-javascript/
//--REMOVE CHILD TO REMOVE QUESTIONS

  function showResults() {

  };

  $(function(){
    let time = 10;
    //timer source: https://www.youtube.com/watch?v=65cQXbP_Hws
    function timeLeft(){
        setTimeout(redirect, 10000);
        $("#timerDisplay").html(time);
        if(time === 0){
            showResults();
        }
        time--;
    };

  });

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
     //  timedTrivia();
    });
});

