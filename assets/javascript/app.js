$(document).ready(function(){
//source for javascript multiple choice questions to appear as a variable: https://www.sitepoint.com/simple-javascript-quiz/

let numberCorrect = 0;
let numberIncorrect = 0;
let numberUnanswered = 0;
let quizWindow = $("#trivia-window");
let results = $("#Results");

const quizQuestions = [
    {
//source for questions: https://en.wikipedia.org/wiki/Galactic_Center
//source for questions: https://conversationstartersworld.com/space-trivia-questions/
    question: "What is the center of the Milky Way Galaxy called?",
    answers: ["Galactic Center", "Norman", "Wolf-Rayet", "None of these"],
    correctAnswer: "Galactic Center",
    },
    {
    question: "What percent of the universe is dark matter?",
    answers: ["20", "0", "27", "10", "50"],
    correctAnswer: "27",
    },
    {
    question: "What is the smallest planet in our solar system?",
    answers: ["Earth", "Saturn", "Mercury", "Uranus", "Pluto"],
    correctAnswer: "Mercury",
    },
    {
    question: "What has a gravitational pull so strong that even light cannot escape it?",
    answers: ["a black hole", "the sun", "the moon", "Jupiter", "None of these"],
    correctAnswer: "",
    },
    {
    question: "How many moons are in our Solar System? (Hint: It’s over 50.)",
    answers: ["51", "5000", "120", "181", "300"],
    correctAnswer: "181",
    },

  ];

  function showResults() {
//removal of questions source: https://www.w3schools.com/js/js_htmldom_nodes.asp
    let elmnt = document.getElementById("#trivia-window");
    elmnt.remove();
    quizWindow.append("<p> Correct: " + numberCorrect + "</p><br>" + "<p> Incorrect: " + numberIncorrect + "</p><br>" + "<p> Unanswered" + numberUnanswered + "</p>");
  };

  
  function timedTrivia() {
    let timeLeft = 60;
//source for timer: https://stackoverflow.com/questions/45049175/countdown-from-60-to-0-in-javascript-and-loop
    window.setInterval(function(){
    if (timeLeft > 0)
        timeLeft--;
        document.getElementById("timeLeft").innerHTML = "Time Left: " + timeLeft + " seconds";
    if (timeLeft <= 0)
        timeLeft = 60;
    }, 1000);
//if time left is zero, show results, hide questions and stop timer
    if (timeLeft === 0) {
        showResults();
    };
    
  };

  function showQuestions() {
//display questions
    for (let i = 0; i < quizQuestions.length; i++ ){
        quizWindow.append("<p>" + quizQuestions[i].question + "</p>");
//display answers using a nested for loop
        for (let j = 0; j < quizQuestions[i].answers.length; j++){
            quizWindow.append("<input type='radio' name='question-" + i + "' value='" + quizQuestions[i].answers[j] + "''>" + quizQuestions[i].answers[j] + "<br><br>");
        }
    }

//select a single radio button at a time
    $("input").on("click", function(){
        let answer = $("input value :checked");
        // console.log($().html);
        // console.log($("input :checked"))
//if the answer the user has equals the correct answer then increment correct answer
        if (answer === quizQuestions.correctAnswer) {
            numberCorrect++;
            console.log(numberCorrect);
        }
//if the user picks not the correct answer, then increase incorrect number
        else if (answer !== quizQuestions.correctAnswer) {
            numberIncorrect++;
        };
        console.log(numberCorrect)
        console.log(numberIncorrect)
    //if the answer does not equal answers of any kind, then increment unanswered number
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

