
let nullSVissen = 0;
let gekregenVissen = 15;

localStorage.setItem("nullVissen", 0);
localStorage.setItem("obVissen", 15);


var score; // to store the current score
   var duration = 15; // 30 seconds
   var startTime; // start time
   var ended = true; // boolean indicating if game is ended
   // we get DOM References for some HTML elements
   var timerTxt = document.getElementById("timer");
   var scoreTxt = document.getElementById("score");
   var clicksTxt = document.getElementById("clicks");
   var startBtn = document.getElementById("start");
   var clickArea = document.getElementById("clickarea");

   // we define two functions for showing or hiding a HTML element
   var show = function(elem) {
     elem.style.display = 'inline';
   };

   var hide = function(elem) {
     elem.style.display = 'none';
   };

   // Method called when the game starts
   function startGame() {
     hide(startBtn);
     score = -1;
     ended = false;
     // we get start time
     startTime = new Date().getTime();

     // we create a timer with the setInterval method
     var timerId = setInterval(function() {
       var total = (new Date().getTime() - startTime) / 1000;

       // while total lower than duration, we update timer and the clicks by seconds
       if (total < duration) {
         timerTxt.textContent = total.toFixed(3);
         clicksTxt.textContent = (score / total).toFixed(2);
       } else {
         // otherwise, game is ended, we clear interval and we set game as ended
         ended = true;
         clearInterval(timerId);
         // we call the end game method
         endGame();
       }
     }, 1);
 }

 // end game method
 function endGame() {
   // we write final stats
   var clicsBySeconds = (score / duration).toFixed(2);
   timerTxt.textContent = duration.toFixed(3);
   clicksTxt.textContent = clicsBySeconds;
   // we show start button to play an other game
   show(startBtn);

   // we display result to the user in delayed mode
   //to update DOM elements just before the alert
   setTimeout(function() {
     if (score >= 35) {
       alert('You made ' + score + ' clicks in ' + duration +
       ' seconds. It is ' + clicsBySeconds +
       ' clicks by seconds. You win!!!');
     }else {
       alert('You made ' + score + ' clicks in ' + duration +
       ' seconds. It is ' + clicsBySeconds +
       ' clicks by seconds. You lose!!!');
     }
   }, 10);
 }

 // we set a click event listener on the start button
 startBtn.addEventListener("click", function(e) {
   startGame();
 });

 // we add a click event listener on the click area div to update the score when the user will click
 clickArea.addEventListener("click", function(e) {
   if (!ended) {
     score++;
     scoreTxt.textContent = score;
   }
 });


const continueButton = document.querySelector('#continue-button');
continueButton.onclick = () => {
  const nextPage = 'mapscherm';
  const coordinates = ''
  const locationName = '';
  location.assign(`../mapscherm/index.html?nullVissen=${nullSVissen}&obVissen=${gekregenVissen}&nextPage=${nextPage}`)
}
