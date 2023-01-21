var buttonStart = document.querySelector('#buttonStart');
var header = document.querySelector("header");
var introduction = document.querySelector(".introduction");
var responses = document.querySelectorAll('#response');
var resultTitle = document.querySelectorAll('#resultTitle');
var correctAnswer = ["alerts", "parenthesis", "all of the above", "quotes", "console.log"];
var answer;
var screenNumber = 0;
var numberCorrectAnswers = 0;
var firstQuestions = ["1. strings", "2. booleans", "3. alerts", "4. numbers"];
var secondQuestions = ["1. quotes", "2. curly brackets", "3. parenthesis", "4. square brackets"];
var thirdQuestions = ["1. numbers and strings", "2. other arrays", "3. booleans", "4. all of the above"];
var fourthQuestions = ["1. commas", "2. curly brackets", "3. quotes", "4. parenthesis"];
var fifthQuestions = ["1. JavaScript", "2. terminal/bash", "3. for loops", "4. console.log"];
var timer = document.querySelector(".timer");
var secondsLeft = 101;
var incorrectAnswer=false;

//Function makes the first screen to be hidden
buttonStart.addEventListener('click', function (event) {
    event.preventDefault();
    //setTime();

    console.log(screenNumber);
    
    //screenNumber 0 is the Main Code Quiz screen
    if (screenNumber === 0) {

        header.textContent = 'Commonly used data types DO Not Include:';
        introduction.textContent = '';
        buttonStart.setAttribute("style", "display:none;");

        for (var a = 0; a < responses.length; a++) {
            //Display answer buttons
            responses[a].setAttribute("style", "display:block");

            //Puts labels of answers in the buttons
            responses[a].textContent = firstQuestions[a];

            //Stop buttons to follow default behavior
            responses[a].addEventListener('click', function (event) {

                event.preventDefault();
                //Stores the text in the button to a variable 'answer'
                var value = this.textContent.split(".");
                answer = value[1];

                verifyAnswer(answer, screenNumber);
            });
        }
    }
});

function screenManagement() {

    console.log(screenNumber + " CHECK");

    //If not main screen, screenNumber will be a number between 1 and 5
    for (var b; b < responses.length; b++) {

        //ScreenNumber 1 is the first screen with questions
        if (screenNumber === 1) {
            
            header.textContent = 'The condition in an if / else statement is enclosed with _________.';
            for (var c = 0; b < responses.length; c++) {
                responses[c].textContent = secondQuestions[c];
            }

            //ScreenNumber 2 is the second screen with questions
        } else if (screenNumber === 2) {
            responses = "";
            header.textContent = 'Arrays in JavaScript can be used to store _________.';
            for (var c = 0; c < responses.length; c++) {
                responses[c].textContent = thirdQuestions[c];
            }

            //ScreenNumber  is the third screen with questions
        } else if (screenNumber === 3) {
            responses = "";
            header.textContent = 'String values must be enclosed within _________ when being assigned to variables.';
            for (var c = 0; c < responses.length; c++) {
                responses[c].textContent = fourthQuestions[c];
            }

            //ScreenNumber 4 is the fourth screen with questions
        } else if (screenNumber === 4) {
            responses = "";
            header.textContent = 'A very useful tool used during development and debugging for printing content to the debugger is:';
            for (var c = 0; c < responses.length; c++) {
                responses[c].textContent = fifthQuestions[c];
            }
        }
    }
}

//Compares the answer selected by the user with an array of correct answers and uses as index
//the number of the screen - first screen index 0, second screen index 1, etc
function verifyAnswer(answer, screenNumber) {
    //Screen number will increase and then show the next screen
    if (answer.trim() == correctAnswer[screenNumber].trim()) {
        messageCorrect();
    } else {
        messageIncorrect();
        incorrectAnswer = true;
    }
    screenNumber++;
    console.log(screenNumber);
    if (screenNumber < 6){
        screenManagement();
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
        if (incorrectAnswer){
            secondsLeft = secondsLeft - 10;
        }
        incorrectAnswer= false;

        if (secondsLeft <= 0) {
            // Stops execution of action at set interval
            clearInterval(timerInterval);
            timer.textContent = "Time: " + 0;

        }

    }, 1000);
}
