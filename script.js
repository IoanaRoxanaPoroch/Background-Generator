var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var h3= document.querySelector("h3");
var btn = document.querySelector("button");

function setGradient(){
    body.style.background = "linear-gradient(to right, " + color1.value + ", " + color2.value + ")"; 
    h3.textContent = body.style.background + ";";
    
}

color1.addEventListener ("input", setGradient);
color2.addEventListener ("input", setGradient);
window.addEventListener ("load", setGradient);

function randomNumber(){
  
   return Math.floor(Math.random()*(255-0+0));
}

function randomColor(){
  body.style.background = `linear-gradient(to right, rgba(${randomNumber()}, ${randomNumber()}, ${randomNumber()}, ${randomNumber()}), rgba(${randomNumber()}, ${randomNumber()}, ${randomNumber()}, ${randomNumber()}))`;
}


btn.addEventListener("click", randomColor);