var titleScore = document.querySelector('.score');
var buttonStart = document.querySelector('#buttonStart');
var header = document.querySelector("header");
var introduction = document.querySelector(".introduction");
var responses = document.querySelectorAll('#response');
var resultTitle = document.querySelectorAll('#resultTitle');
var labelEl = document.getElementById("enterInitials")
var submitBtn = document.getElementById("submitBtn");
var goBackBtn = document.getElementById('goBack');
var userScore = document.querySelector('#userScore');
var clearScores = document.getElementById('clearScores');
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
var secondsLeft = 100;
var value;//check if I need this
var firstScreen = false;
var highScoreUser;
var userScores;
var timerInterval;
var stopTime = false;


var questionAsked = [false, false, false, false, false];

timer.textContent = "Time: " + 100;

//Function makes the first screen to be hidden
buttonStart.addEventListener('click', function (event) {
    event.preventDefault();
    setTime();

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

            responses.forEach(function(element){
                element.addEventListener('click', getValue0);
            })


            function getValue0(event){
                event.preventDefault();
                var value = this.textContent.split(".");
                answer = value[1];
                verifyAnswer(answer, 0);

                screenManagement(1)
            }
    
});



//Compares the answer selected by the user with an array of correct answers and uses as index
//the number of the screen - first screen index 0, second screen index 1, etc
function verifyAnswer(answer, screenNumber) {

    if (!questionAsked[screenNumber]){
        if (answer.trim() === correctAnswer[screenNumber].trim()) {
            numberCorrectAnswers = messageCorrect();
        } else {
            numberCorrectAnswers = messageIncorrect();
            secondsLeft = secondsLeft - 10;
        }
        questionAsked[screenNumber] = true;
    }

    if (screenNumber > 5){
        pauseTimer();
        score = secondsLeft;
        callFinalScreen(score);
    }

}


function screenManagement(screenNumber) {

    //ScreenNumber 1 is the first screen with questions
    if (screenNumber === 1) {

        header.textContent = 'The condition in an if / else statement is enclosed with _________.';
        responses[0].textContent = secondQuestions[0];
        responses[1].textContent = secondQuestions[1];
        responses[2].textContent = secondQuestions[2];
        responses[3].textContent = secondQuestions[3];


        responses.forEach(function(element){
            element.addEventListener('click', getValue1);
        })

        //ScreenNumber 2 is the second screen with questions
    } else if (screenNumber === 2) {

        header.textContent = 'Arrays in JavaScript can be used to store _________.';

        responses[0].textContent = thirdQuestions[0];
        responses[1].textContent = thirdQuestions[1];
        responses[2].textContent = thirdQuestions[2];
        responses[3].textContent = thirdQuestions[3];

        responses.forEach(function(element){
            element.addEventListener('click', getValue2);
        })

        //ScreenNumber  is the third screen with questions
    } else if (screenNumber === 3) {

        header.textContent = 'String values must be enclosed within _________ when being assigned to variables.';

        responses[0].textContent = fourthQuestions[0];
        responses[1].textContent = fourthQuestions[1];
        responses[2].textContent = fourthQuestions[2];
        responses[3].textContent = fourthQuestions[3];


        responses.forEach(function(element){
            element.addEventListener('click', getValue3);
        })

        //ScreenNumber 4 is the fourth screen with questions
    } else if (screenNumber === 4) {

        header.textContent = 'A very useful tool used during development and debugging for printing content to the debugger is:';

        responses[0].textContent = fifthQuestions[0];
        responses[1].textContent = fifthQuestions[1];
        responses[2].textContent = fifthQuestions[2];
        responses[3].textContent = fifthQuestions[3];

        responses.forEach(function(element){
            element.addEventListener('click', getValue4);
        })

    }
    //  TESTING TO ADD FUNCTION HERE
    function getValue1(event){

        //var hello = event.target.innerText.split('.')[1]
        //console.log(hello)
        
        event.preventDefault();
        var value = this.textContent.split(".");
        answer = value[1];
        verifyAnswer(answer, screenNumber);

        screenManagement(2)
    }

    function getValue2(event){
        
        event.preventDefault();
        var value = this.textContent.split(".");
        answer = value[1];
        verifyAnswer(answer, 2);

        screenManagement(3)
    }

    function getValue3(event){
        
        event.preventDefault();
        var value = this.textContent.split(".");
        answer = value[1];
        verifyAnswer(answer, 3);

        screenManagement(4)
    }

    function getValue4(event){
        
        event.preventDefault();
        var value = this.textContent.split(".");
        answer = value[1];
        verifyAnswer(answer, 4);
        callFinalScreen(100);
    }

}


// Displays message: CORRECT and adds scores
function messageCorrect() {
    //console.log("numberCorrectAnswers from correct function"+numberCorrectAnswers)
    numberCorrectAnswers++;
    document.getElementById("resultTitle").style.borderTop = "gray 1px solid";
    document.getElementById("resultTitle").textContent = "CORRECT!"
    document.getElementById("resultTitle").style.color = "gray";
    document.getElementById("resultTitle").style.marginTop = "10px";
    document.getElementById("resultTitle").style.paddingTop = "10px";
    //console.log("numberCorrectAnswers "+numberCorrectAnswers)
    return numberCorrectAnswers;
}

// Displays message: INCORRECT
function messageIncorrect() {
    //console.log("numberCorrectAnswers from Incorrect function "+numberCorrectAnswers)
    document.getElementById("resultTitle").style.borderTop = "gray 1px solid";
    document.getElementById("resultTitle").textContent = "INCORRECT!"
    document.getElementById("resultTitle").style.color = "gray";
    document.getElementById("resultTitle").style.marginTop = "10px";
    document.getElementById("resultTitle").style.paddingTop = "10px";
    return numberCorrectAnswers;
}

//Runs the time until it gets to zero seconds
function setTime() {
    timerInterval = setInterval(() => {
        secondsLeft--;

        //Displays the timer
        timer.textContent = "Time: " + secondsLeft;
        if (secondsLeft <= 0) {
            // Stops execution of action at set interval
            pauseTimer();
            timer.textContent = "Time: " + 0;
        }

        //If the game is finished it freezes the timer
        if (stopTime){
            secondsLeft++;
            timer.textContent = "Time: " + secondsLeft;
            pauseTimer();
        }

    }, 1000);
    return timerInterval;
}

//Stops the timer
function pauseTimer() {
    clearInterval(timerInterval);
}

function callFinalScreen(score){

    stopTime = true;

    //Remove response buttons
    for (var b = 0; b < responses.length ; b++){
        responses[b].style.display = "none";
    }

    buttonStart.remove();


    //Show the user their score
    header.textContent = 'All done!';
    introduction.textContent = 'Your final score is ' + secondsLeft + "!";
    document.getElementById("resultTitle").textContent = ""
    document.getElementById("resultTitle").style.borderTop = "gray 1px";

    labelEl.textContent = "Enter initials:";
    userInitials.style.display = "block";
    submitBtn.style.display = "block";
    submitBtn.textContent = "Submit";

    submitBtn.addEventListener("click", function(event){
        event.preventDefault();
        submitFn();
    })

    

}

function submitFn(){
    labelEl = document.getElementById("enterInitials").textContent = " ";
    document.getElementById("userInitials").style.display = 'none';
    var userInitials = document.querySelector("#userInitials").value;
    introduction.style.display = 'none';
    
    userScore.style.display = 'block';
    header.textContent = 'High Scores';
    submitBtn.style.display = 'none';

    goBack.style.display = 'block';
    clearScores.style.display = 'block';
    
    highScoreUser = localStorage.getItem('userInitials');
    score = localStorage.getItem('score');
    userScore.textContent = "User Initials: " + userInitials + " score: " + secondsLeft;

    //Current values
    var tempUser = userInitials;
    var tempScore = secondsLeft;

    //Values from localStorage
    var localUser = localStorage.getItem('userInitials');
    var localScore = localStorage.getItem('score');

    //Compare if values from storage are null
    if (localUser !== null || localUser !== 'undefined'){
        console.log("enters to save in the local storage");
        console.log(tempUser);
        if (tempScore > localScore){
            localStorage.setItem("score", tempScore);
            localStorage.setItem("userInitials", tempUser);
        }
    }

    return secondsLeft, userInitials;
}


function showHighScores(){
    
    window.alert('User Initial: '+ localStorage.getItem('userInitials') + '\n highest score: ' + localStorage.getItem('score'));
}

clearScores.addEventListener('click', function(e){
    e.preventDefault();

    //Clear highest score

    delete localStorage.score;
    delete localStorage.userInitials;

})

titleScore.addEventListener('click', alertFn);

function alertFn(){
    showHighScores();
}

