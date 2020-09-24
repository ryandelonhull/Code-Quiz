
var timeEl = document.querySelector(".card-title");
//var mainEl = document.querySelector(".card-timer");
var secondsLeft = 60;
var timerStart = document.querySelector("#start-button");
// // //var container = document.querySelector(".container");
// // var questions = document.querySelector("#questions");
var questionNumber = -1;
var yesButton = document.getElementById("yes-button")
var noButton = document.getElementById("no-button")
var maybeSoButton = document.getElementById("maybeSo-button")
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
        title: "Where's the beef?",
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
        title: "Does Bigfoot Exist?",
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
        
    //   if( XXXXXXX) {
    //       secondsLeft - 5;
    //   }
      if(secondsLeft === 0) {
        clearInterval(timerInterval);
        questionNumber = questionsArray.length;
        nextQuestion();
      }
  
    }, 1000);
  

  }
 
//   function setTime() {
//       var 
//   }

//   function sendMessage() {
//     timeEl.textContent = " ";
  
//     var imgEl = document.createElement("img");
  
//     imgEl.setAttribute("src", "images/image_1.jpg");
//     mainEl.appendChild(imgEl);
  
// }

function nextQuestion(){
    questionNumber++;
    if (questionNumber >= questionsArray.length){
        alert("Score is" + finalScore);
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
    nextQuestion()
} 
function noScore (){
    if (questionsArray[questionNumber].answerCorrect == questionsArray[questionNumber].option2){
        finalScore += 1;
    }
    nextQuestion()
} 
function maybeSoScore (){
    if (questionsArray[questionNumber].answerCorrect == questionsArray[questionNumber].option3){
        finalScore += 1;
    }
    nextQuestion()
} 

timerStart.addEventListener("click", startGame);
yesButton.addEventListener("click", yesScore);
noButton.addEventListener("click", noScore);
maybeSoButton.addEventListener("click", maybeSoScore);

// document.getElementById("start-button").addEventListener("click", function(){
//     var secondsLeft = 60;

//     var downloadTimer = setInterval(function function1(){
//     document.getElementById("countdown").innerHTML = timeleft + 
//     "&nbsp"+"seconds remaining";

//     timeleft -= 1;
//     if(timeleft <= 0){
//         clearInterval(downloadTimer);
//         document.getElementById("countdown").innerHTML = "Time is up!"
//     }
//     }, 1000);

//     console.log(countdown);
// });