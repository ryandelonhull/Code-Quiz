
var timeEl = document.querySelector(".card-title");
//var mainEl = document.querySelector(".card-timer");
var secondsLeft = 60;
var timerStart = document.querySelector("#start-button");
// // //var container = document.querySelector(".container");
// // var questions = document.querySelector("#questions");
var questionNumber = -1;


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
        answerCorrect: "maybeSo",
    },
    {
        title: "Does pineapple go on pizza?",
        answerCorrect: "maybeSo",
    },
    {
        title: "Is cereal soup?",
        answerCorrect: "maybeSo",
    },
    {
        title: "Is a hotdog a sandwich?",
        answerCorrect: "maybeSo",
    },
    {
        title: "Does Bigfoot Exist?",
        answerCorrect: "maybeSo",
    },
    {
        title: "Were dinosaurs just giant chickens and pigeons?",
        answerCorrect: "maybeSo",
    },
    {
        title: "Are plants actually farming us for CO2 and extra compost?",
        answerCorrect: "maybeSo",
    },
    {
        title: "Is truth even close to the same thing as reality?",
        answerCorrect: "maybeSo",
    },
    {
        title: "Did your pet make up a name for you like you did for your pet?",
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
        sendMessage();
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

function nextQuestion (){
    questionNumber++;
    var questionCurrent = questionsArray[questionNumber];
    var x = document.getElementById("question");
    x.innerHTML = questionCurrent.title;

}
function startGame (){
    startTimer();
    nextQuestion();
    
}

timerStart.addEventListener("click", startGame);

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