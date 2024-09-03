"use strict";


const $startBtn = document.getElementById("start-btn");
const $guessBtn = document.getElementById("guess-btn");
const $cowBtn = document.getElementById("cow-btn");
const $output = document.getElementById("output");
const $numUsr = document.getElementById("num-usr");
const $maxUsr = document.getElementById("max-usr");

let secretNumber = 0;
let nbGuesses = 0;
let maxGuesses = 0;

function launchGame(_evt) {
  secretNumber = Math.floor(Math.random() * $maxUsr.value) + 1;
  maxGuesses = Math.ceil(Math.log($maxUsr.value)) + 1;
  // TODO : compléter ici
  $output.innerHTML = "Le jeu commence"
  console.log(secretNumber)

  $guessBtn.removeAttribute("disabled");
  $numUsr.addEventListener("keydown", function(event){
    if (event.key === "Enter"){
      if ($numUsr.value == ""){
        $output.innerHTML = "Votre réponse n'est pas valide."
      }
      else{
        nbGuesses++;
        let userGuess = $numUsr.value;
      if (userGuess == secretNumber) {
        $output.innerHTML = "Le bon nombre a été trouvé en  " + nbGuesses + " essais.";
        $guessBtn.setAttribute("disabled", "");
    } 
    else {
      if (userGuess >= secretNumber) {
        if(nbGuesses >= maxGuesses) {
          $output.innerHTML = "Vous n'avez plus d'essai. Le nombre qu'il fallait trouver était " + secretNumber + ".";
          $guessBtn.setAttribute("disabled", "");
      } 
      else{
        $output.innerHTML = "Le nombre à trouver est plus petit. Il vous reste " + (maxGuesses - nbGuesses) + " essais.";
      }
        
      }
      else{
        if(nbGuesses >= maxGuesses) {
          $output.innerHTML = "Vous n'avez plus d'essai. Le nombre qu'il fallait trouver était " + secretNumber + ".";
          $guessBtn.setAttribute("disabled", "");
      } 
      else{
        $output.innerHTML = "Le nombre à trouver est plus grand. Il vous reste " + (maxGuesses - nbGuesses) + " essais.";
      }
        
      }
        
    }
  }    
    }
    
  }
)
}
$guessBtn.addEventListener("click", function(event){
    if ($numUsr.value == ""){
      $output.innerHTML = "Votre réponse n'est pas valide."
    }
    else{
      nbGuesses++;
      let userGuess = $numUsr.value;
    if (userGuess == secretNumber) {
      $output.innerHTML = "Le bon nombre a été trouvé en  " + nbGuesses + " essais.";
      $guessBtn.setAttribute("disabled", "");
  } 
  else {
    if (userGuess >= secretNumber) {
      if(nbGuesses >= maxGuesses) {
        $output.innerHTML = "Vous n'avez plus d'essai. Le nombre qu'il fallait trouver était " + secretNumber + ".";
        $guessBtn.setAttribute("disabled", "");
    } 
    else{
      $output.innerHTML = "Le nombre à trouver est plus petit. Il vous reste " + (maxGuesses - nbGuesses) + " essais.";
    }
      
    }
    else{
      if(nbGuesses >= maxGuesses) {
        $output.innerHTML = "Vous n'avez plus d'essai. Le nombre qu'il fallait trouver était " + secretNumber + ".";
        $guessBtn.setAttribute("disabled", "");
    } 
    else{
      $output.innerHTML = "Le nombre à trouver est plus grand. Il vous reste " + (maxGuesses - nbGuesses) + " essais.";
    }
      
    }
      
  }
}    
  }
  
)


$startBtn.addEventListener("click", launchGame)



function addCow(evt) {
  console.debug(evt.x, evt.y);
  // TODO : compléter ici
  const $cowImg = document.createElement("img");
  $cowImg.setAttribute("style", "left : " + evt.x + "px; top : " + evt.y + "px; transform : rotate(" + Math.floor(Math.random() * 360) + "deg);");
    $cowImg.setAttribute("src", "https://upload.wikimedia.org/wikipedia/commons/3/30/Cowicon.svg");
    $cowImg.classList.add("cow");
    document.body.appendChild($cowImg);
}

function toggleCow(_evt) {
  if (document.onmousedown instanceof Function) {
    document.onmousedown = null;
  } else {
    document.onmousedown = addCow;
  }
}
$cowBtn.addEventListener("click", toggleCow);

