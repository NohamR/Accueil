var seconds = prompt("Minuteur sur ... ?") * 60;
var buttonStart = document.getElementById("start_timer10");
//var timer = null;

function nombredonnee() {
  if (seconds == 0) {
    seconds = 1200
  }
}

function secondPassed() {
  var minutes = Math.round((seconds - 30) / 60); //  (1200 - 30) / 60) = 19.5  //math round permet d'arrondir à 20 
  var remainingSeconds = seconds % 60;   // 500 modulo 60  = 20

  if (remainingSeconds < 10) {  // 05 min : 56 sec si les secondes son inférieur à 10 
    remainingSeconds = "0" + remainingSeconds; // on ajoute un 0 en chaine de caratère , en fait c'est une question de format     10 min 5 sec => 10 min 05 sec
  }

  document.getElementById("countdown10").innerHTML = + minutes + ":" + remainingSeconds;



  if (seconds == 0) { // si var seconds = 0 alors le minuteur est terminé et affiche un message.
    clearInterval(startTimer()); // Permet d'annuler une action répétée minutée initiée via un appel à setInterval().

    document.getElementById("countdown10").innerHTML = "fin du compte à rebours"; // si les secondes sont = 0 alors affiche "fin du compte à rebours"
  } else {
    seconds--; // si les secondes ne sont pas à zéro alors on décremente.
  }
}


// pour démarrer
function startTimer() {
  var countdownTimer = setInterval('secondPassed()', 1000); // / l'interval du décompte est de 1000 millisecondes soit 1 seconde. fonction qui lane le timer

}


buttonStart.addEventListener("click", function () {
  nombredonnee()
  startTimer()
}); 1200




function toggleFullScreen() {
  if (!document.fullscreenElement) {
    document.documentElement.requestFullscreen();
  } else if (document.exitFullscreen) {
    document.exitFullscreen();
  }
}

document.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    toggleFullScreen();
  }
}, false);



