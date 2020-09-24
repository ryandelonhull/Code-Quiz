
var timeEl = document.querySelector(".card-title");
var secondsLeft = 60;
var timerStart = document.querySelector("#start-button");
var yesButton = document.getElementById("yes-button")
var noButton = document.getElementById("no-button")
var maybeSoButton = document.getElementById("maybeSo-button")
var questionNumber = -1;
var finalScore = 0

function toggleButtons(show){
   if (show){
    document.getElementById("start-button").style.display = "none";
    document.getElementById("yes-button").style.display = "block";
    document.getElementById("no-button").style.display = "block";
    document.getElementById("maybeSo-button").style.display = "block";
   } else {
    document.getElementById("start-button").style.display = "block";
    document.getElementById("yes-button").style.display = "none";
    document.getElementById("no-button").style.display = "none";
    document.getElementById("maybeSo-button").style.display = "none";
   }
}
toggleButtons (false)
var questionsArray = [
    {
        title: "Does Bigfoot Exist?",
        option1: "Yes",
        option2: "No",
        option3: "maybeSo",
        answerCorrect: "maybeSo",
    },
    {
        title: "Does pineapple go on pizza?",
        option1: "Yes",
        option2: "No",
        option3: "maybeSo",
        answerCorrect: "maybeSo",
    },
    {
        title: "Is cereal soup?",
        option1: "Yes",
        option2: "No",
        option3: "maybeSo",
        answerCorrect: "maybeSo",
    },
    {
        title: "Is a hotdog a sandwich?",
        option1: "Yes",
        option2: "No",
        option3: "maybeSo",
        answerCorrect: "maybeSo",
    },
    {
        title: "Do friends make the best enemies?",
        option1: "Yes",
        option2: "No",
        option3: "maybeSo",
        answerCorrect: "maybeSo",
    },
    {
        title: "Were dinosaurs just giant chickens and pigeons?",
        option1: "Yes",
        option2: "No",
        option3: "maybeSo",
        answerCorrect: "maybeSo",
    },
    {
        title: "Are plants actually farming us for CO2 and extra compost?",
        option1: "Yes",
        option2: "No",
        option3: "maybeSo",
        answerCorrect: "maybeSo",
    },
    {
        title: "Is truth even close to the same thing as reality?",
        option1: "Yes",
        option2: "No",
        option3: "maybeSo",
        answerCorrect: "maybeSo",
    },
    {
        title: "Did your pet make up a name for you like you did for your pet?",
        option1: "Yes",
        option2: "No",
        option3: "maybeSo",
        answerCorrect: "maybeSo",
    },
]
function startTimer() {
    //setTime();
    var timerInterval = setInterval(function() {
        secondsLeft--;
        timeEl.textContent = secondsLeft;
        // if ()

        if(secondsLeft === 0 ) {
        clearInterval(timerInterval);
        questionNumber = questionsArray.length;
        nextQuestion();
      }
  
    }, 1000);
}
 

function nextQuestion(){
    questionNumber++;
    if (questionNumber >= questionsArray.length){
        var init = prompt("what is your initials?")
        alert(init + ", your score is " + finalScore);

        var highscores = JSON.parse(window.localStorage.getItem("highscores")) || [];
        var newScore = {
            score: finalScore,
            initials : init
        }
        highscores.push(newScore);
        window.localStorage.setItem("highscores", JSON.stringify(highscores));
        
        secondsLeft = 1;
        toggleButtons(false);
        secondsLeft == 1;
        return;
    }
    var questionCurrent = questionsArray[questionNumber];
    var x = document.getElementById("question");
    x.innerHTML = questionCurrent.title;

}
function startGame (){
    startTimer();
    toggleButtons(true);
    nextQuestion();    
}

function yesScore (){
    if (questionsArray[questionNumber].answerCorrect == questionsArray[questionNumber].option1){
        finalScore += 1;
       
    }
    secondsLeft -= 5;
    nextQuestion()
} 
function noScore (){
    if (questionsArray[questionNumber].answerCorrect == questionsArray[questionNumber].option2){
        finalScore += 1;
    }
    secondsLeft -= 5;
    nextQuestion()
} 
function maybeSoScore (){
    if (questionsArray[questionNumber].answerCorrect == questionsArray[questionNumber].option3){
        finalScore += 1;
    }
    nextQuestion()
} 


function subtractScore (){

}


timerStart.addEventListener("click", startGame);
yesButton.addEventListener("click", yesScore);
noButton.addEventListener("click", noScore);
maybeSoButton.addEventListener("click", maybeSoScore);
