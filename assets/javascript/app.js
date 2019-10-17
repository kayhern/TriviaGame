$(document).ready(function(){

    let numberCorrect = 0;
    let numberIncorrect = 0;
    let numberUnanswered = 0;
    let timeQuiz = 1200;

//first window pops up - start button - make it disappear on click function
//source: https://www.youtube.com/watch?v=RCFzfym8RvU
    $("button.start-button").click(function(){
        let element = document.getElementById("div.trivia-window");
        element.style.display = "hidden";

//when start button is clicked: second window pops up, timer begins
        let elementAppear = document.getElementById("div.quiz");
        elementAppear.style.diplay = "show";
    });

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