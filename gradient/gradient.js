// henter div-element ved dets id
const colorfulDiv = document.getElementById("colorful-div");

// tilføj en eventlistener for at registrere musens bevægelse
document.addEventListener("mousemove", function (event) {
  // musens X- og Y-koordinater (clientX er musen på x-aksen, clientY er musen på y-aksen)
  const mouseX = event.clientX;
  const mouseY = event.clientY;

  // beregn saturation baseret på musens Y-position og vinduets højde
  const saturation = (mouseY / window.innerHeight) * 100;

  // lightness baseret på musens X-position og vinduets bredde gange med 100, så det passer med procent
  const lightness = (mouseX / window.innerWidth) * 100;

  // laver HSL-farvestrengen ved hjælp af den beregnede saturation og lightness
  const color = "hsl(680, " + saturation + "%, " + lightness + "%)";

  // sæt baggrundsfarven på div til den beregnede farve
  colorfulDiv.style.setProperty("background-color", color);
});
e;


/*
Dannis version: */


const root = document.documentElement;

function updateCursor(e) {

  const x = e.clientX / window.innerWidth;
  const y = e.clientY / window.innerHeight;

  
}

