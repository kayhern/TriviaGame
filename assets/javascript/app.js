//I am going to make a huge document.ready function that contains:
//-trivia game
//--within trivia game contains questions, ability to diplay questions, show resules, show timer

$(document).ready(function(){
//source for javascript multiple choice questions to appear as a variable: https://www.sitepoint.com/simple-javascript-quiz/

function theEntireGame(){

let numberCorrect = 0;
let numberIncorrect = 0;
let numberUnanswered = 0;
let timeQuiz = 1200;

const quizQuestions = [
    {
      question: "Who is the strongest?",
      answers: {
        a: "Superman",
        b: "The Terminator",
        c: "Waluigi, obviously",
        d: ""
      },
      correctAnswer: ""
    },
    {
      question: "What is the best site ever created?",
      answers: {
        a: "SitePoint",
        b: "Simple Steps Code",
        c: "Trick question; they're both the best",
        d: ""
      },
      correctAnswer: ""
    },
    {
      question: "Where is Waldo really?",
      answers: {
        a: "Antarctica",
        b: "Exploring the Pacific Ocean",
        c: "Sitting in a tree",
        d: "Minding his own business, so stop asking"
      },
      correctAnswer: "d"
    },
    {
        question: "Where is Waldo really?",
        answers: {
          a: "Antarctica",
          b: "Exploring the Pacific Ocean",
          c: "Sitting in a tree",
          d: "Minding his own business, so stop asking"
        },
        correctAnswer: "d"
      },
  ];

//add the timer somehow????

 //make the questions appear on the page using for Each method https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach?v=control
    function showQuestions() {

    };

//container to show results used when user clicked finish in the other function below
    function results() {

    };

//when user clicked finish: popup window showing number of correct, number of incorrect, number of unanswered or when the last answer is finished the results appear?
//source: https://www.geeksforgeeks.org/how-to-clear-the-content-of-a-div-using-javascript/
//--REMOVE CHILD TO REMOVE QUESTIONS
    $("#complete-game-button").click(function() {
        results();
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
        // let elementAppear = document.getElementById("#div.quiz");
        showQuestions();
    });
});


//timer is counting down from two minutes; when timer goes up the player loses

//when user selects answer to question1 : if answer is correct then corect number goes up else incorrect answer goes up or else unanswered goes up

//when user selects answer to question2 : if answer is correct then corect number goes up else incorrect answer goes up or else unanswered goes up

//when user selects answer to question3 : if answer is correct then corect number goes up else incorrect answer goes up or else unanswered goes up

//when user selects answer to question4 : if answer is correct then corect number goes up else incorrect answer goes up or else unanswered goes up

//when user selects answer to question5 : if answer is correct then corect number goes up else incorrect answer goes up or else unanswered goes up

