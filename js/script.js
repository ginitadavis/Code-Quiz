var buttonStart = document.querySelector('#buttonStart');
var header = document.querySelector("header");
var introduction = document.querySelector(".introduction");
var responses = document.querySelectorAll('#response');
var resultTitle = document.querySelectorAll('#resultTitle');
var correctAnswer = ["alerts", "parenthesis", "all of the above", "quotes", "console.log"];
var answer;
var numberCorrectAnswers = 0;
var firstQuestions = ["1. strings", "2. booleans", "3. alerts", "4. numbers"];
var secondQuestions = ["1. quotes", "2. curly brackets", "3. parenthesis", "4. square brackets"];
var thirdQuestions = ["1. numbers and strings", "2. other arrays", "3. booleans", "4. all of the above"];
var fourthQuestions = ["1. commas", "2. curly brackets", "3. quotes", "4. parenthesis"];
var fifthQuestions = ["1. JavaScript", "2. terminal/bash", "3. for loops", "4. console.log"];
var middleSection = document.querySelector(".middle");
var timer = document.querySelector(".timer");
var secondsLeft = 101;
var incorrectAnswer = false;
var value;//check if I need this
var firstScreen = false;


//Function makes the first screen to be hidden
buttonStart.addEventListener('click', function (event) {
    event.preventDefault();
    //setTime();

        header.textContent = 'Commonly used data types DO Not Include:';
        introduction.textContent = '';
        buttonStart.setAttribute("style", "display:none;");

            //Makes answer buttons visible
            for (var a = 0; a < responses.length ; a++){
                responses[a].setAttribute("style", "display:block");
            }
            //Adds 'first questions' array values to buttons
            responses[0].textContent = firstQuestions[0];
            responses[1].textContent = firstQuestions[1];
            responses[2].textContent = firstQuestions[2];
            responses[3].textContent = firstQuestions[3];

            //When the button is clicked, I get the text on the button and send it to function verifyAnswer
            //I want the addEventListener to only be called once in each screen
            responses[0].addEventListener('click', getValue1, { once: true });
            responses[1].addEventListener('click', getValue1, { once: true });
            responses[2].addEventListener('click', getValue1, { once: true });
            responses[3].addEventListener('click', getValue1, { once: true });

            function getValue1(event){
                event.preventDefault();
                var value = this.textContent.split(".");
                answer = value[1];
                verifyAnswer(answer, 0);
            }
    
    
}, { once: true });


//Compares the answer selected by the user with an array of correct answers and uses as index
//the number of the screen - first screen index 0, second screen index 1, etc
function verifyAnswer(answer, screenNumber) {

    //Screen number will increase and then show the next screen

    console.log("Correct answer " + correctAnswer[screenNumber] + " vs User answer " + answer);

    if (answer.trim() == correctAnswer[screenNumber].trim()) {
        messageCorrect();
    } else {
        messageIncorrect();
        incorrectAnswer = true;
    }

    screenNumber++;

    if (screenNumber < 5) {
        screenManagement(screenNumber);
    } else if (screenNumber === 5){
        callFinalScreen();
    }

    answer = "";

}

function screenManagement(screenNumber) {

    //var pause = secondsLeft + 5;
    

    //ScreenNumber 1 is the first screen with questions
    if (screenNumber === 1) {

        header.textContent = 'The condition in an if / else statement is enclosed with _________.';
        responses[0].textContent = secondQuestions[0];
        responses[1].textContent = secondQuestions[1];
        responses[2].textContent = secondQuestions[2];
        responses[3].textContent = secondQuestions[3];

        responses[0].addEventListener('click', getValue, { once: true });
        responses[1].addEventListener('click', getValue, { once: true });
        responses[2].addEventListener('click', getValue, { once: true });
        responses[3].addEventListener('click', getValue, { once: true });

        //console.log("Enters here "+ 1 + " Screen number 1");

        //ScreenNumber 2 is the second screen with questions
    } else if (screenNumber === 2) {

        header.textContent = 'Arrays in JavaScript can be used to store _________.';

        responses[0].textContent = thirdQuestions[0];
        responses[1].textContent = thirdQuestions[1];
        responses[2].textContent = thirdQuestions[2];
        responses[3].textContent = thirdQuestions[3];

        responses[0].addEventListener('click', getValue, { once: true });
        responses[1].addEventListener('click', getValue, { once: true });
        responses[2].addEventListener('click', getValue, { once: true });
        responses[3].addEventListener('click', getValue, { once: true });

        //ScreenNumber  is the third screen with questions
    } else if (screenNumber === 3) {

        header.textContent = 'String values must be enclosed within _________ when being assigned to variables.';

        responses[0].textContent = fourthQuestions[0];
        responses[1].textContent = fourthQuestions[1];
        responses[2].textContent = fourthQuestions[2];
        responses[3].textContent = fourthQuestions[3];

        responses[0].addEventListener('click', getValue, { once: true });
        responses[1].addEventListener('click', getValue, { once: true });
        responses[2].addEventListener('click', getValue, { once: true });
        responses[3].addEventListener('click', getValue, { once: true });

        //ScreenNumber 4 is the fourth screen with questions
    } else if (screenNumber === 4) {

        header.textContent = 'A very useful tool used during development and debugging for printing content to the debugger is:';

        responses[0].textContent = fifthQuestions[0];
        responses[1].textContent = fifthQuestions[1];
        responses[2].textContent = fifthQuestions[2];
        responses[3].textContent = fifthQuestions[3];

        responses[0].addEventListener('click', getValue, { once: true });
        responses[1].addEventListener('click', getValue, { once: true });
        responses[2].addEventListener('click', getValue, { once: true });
        responses[3].addEventListener('click', getValue, { once: true });

    }
    //  TESTING TO ADD FUNCTION HERE
    function getValue(event){

        console.log("getvalue screen number "+screenNumber);

        event.preventDefault();
        var value = this.textContent.split(".");
        answer = value[1];
        verifyAnswer(answer, screenNumber);
    }
}


// Displays message: CORRECT and adds scores
function messageCorrect() {
    numberCorrectAnswers++;
    document.getElementById("resultTitle").style.borderTop = "gray 1px solid";
    document.getElementById("resultTitle").textContent = "CORRECT!"
    document.getElementById("resultTitle").style.color = "gray";
    document.getElementById("resultTitle").style.marginTop = "10px";
    document.getElementById("resultTitle").style.paddingTop = "10px";
}

// Displays message: INCORRECT and substracts scores
function messageIncorrect() {
    numberCorrectAnswers--;
    document.getElementById("resultTitle").style.borderTop = "gray 1px solid";
    document.getElementById("resultTitle").textContent = "INCORRECT!"
    document.getElementById("resultTitle").style.color = "gray";
    document.getElementById("resultTitle").style.marginTop = "10px";
    document.getElementById("resultTitle").style.paddingTop = "10px";


}

function setTime() {

    // Sets interval in variable
    var timerInterval = setInterval(function () {
        secondsLeft--;

        //Displays the timer
        timer.textContent = "Time: " + secondsLeft;

        //For any incorrect answer we subtract 10 seconds
        if (incorrectAnswer) {
            secondsLeft = secondsLeft - 10;
        }
        incorrectAnswer = false;

        if (secondsLeft <= 0) {
            // Stops execution of action at set interval
            clearInterval(timerInterval);
            timer.textContent = "Time: " + 0;

        }

    }, 1000);
    return timerInterval;
    
}

function callFinalScreen(){
    //Remove response buttons
    for (var b = 0; b < responses.length ; b++){
        responses[b].style.display = "none";
    }

    header.textContent = 'All done!';
    introduction.textContent = 'Your final score is !';
    document.getElementById("resultTitle").textContent = ""
    document.getElementById("resultTitle").style.borderTop = "gray 1px";

    //
    var labelEl = document.getElementById("enterInitials").textContent = "Enter initials:";
    var initialData = document.getElementById("initialData").style.display = "block";
    var submitBtn = document.querySelector("submitBtn");

    //submitBtn.style.display = "block";

    /*submitBtn.addEventListener("click", preventDefault1);
    
    function preventDefault1(event){
        event.preventDefault();
    }*/

}