$(document).ready(function(){

    let numberCorrect = 0;
    let numberIncorrect = 0;
    let numberUnanswered = 0;
    let timeQuiz = 1200;

 
    function showQuestions() {

    };
    showQuestions();

    function showResults() {

    };
    showResults();

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

    $("#complete-game-button").click(function() {
        showResults();
    };


});


//timer is counting down from two minutes; when timer goes up the player loses

//when user selects answer to question1 : if answer is correct then corect number goes up else incorrect answer goes up or else unanswered goes up

//when user selects answer to question2 : if answer is correct then corect number goes up else incorrect answer goes up or else unanswered goes up

//when user selects answer to question3 : if answer is correct then corect number goes up else incorrect answer goes up or else unanswered goes up

//when user selects answer to question4 : if answer is correct then corect number goes up else incorrect answer goes up or else unanswered goes up

//when user selects answer to question5 : if answer is correct then corect number goes up else incorrect answer goes up or else unanswered goes up

//when user selects answer to question6 : if answer is correct then corect number goes up else incorrect answer goes up or else unanswered goes up

//when user selects answer to question7 : if answer is correct then corect number goes up else incorrect answer goes up or else unanswered goes up

//when user selects answer to question8 : if answer is correct then corect number goes up else incorrect answer goes up or else unanswered goes up

//when user clicked finish: popup window showing number of correct, number of incorrect, number of unanswered
//source: https://www.geeksforgeeks.org/how-to-clear-the-content-of-a-div-using-javascript/
//--REMOVE CHILD TO REMOVE QUESTIONS