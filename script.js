var timeEl = document.querySelector(".card-title");
//var mainEl = document.querySelector(".card-timer");
// var secondsLeft = 60;
var timerStart = document.querySelector("#start-button");
var container = document.querySelector(".container")


function startTimer() {
    
    var timerInterval = setInterval(function() {
        setTime();
        secondsLeft--;
      timeEl.textContent = secondsLeft;
  
      if(secondsLeft === 0) {
        clearInterval(timerInterval);
        sendMessage();
      }
  
    }, 1000);
  
  }
  
  function sendMessage() {
    timeEl.textContent = " ";
  
    var imgEl = document.createElement("img");
  
    imgEl.setAttribute("src", "images/image_1.jpg");
    mainEl.appendChild(imgEl);
  
}
 
timerStart.addEventListener("click", startTimer);

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