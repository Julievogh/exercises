const h2Texts = {
  dark: "This is the dark theme",
  light: "This is the light theme",
  party: "This is the party theme",
  cute: "This is the cute theme",
};

const imageIds = {
  dark: 128,
  light: 329,
  party: 530,
  cute: 631,
};

document.addEventListener("DOMContentLoaded", function () {

  //tjek om der er theme
  const storedTheme = localStorage.getItem("theme");

// brug theme
  if (storedTheme) {
    applyTheme(storedTheme);
  } 
});

document.querySelector("#themes").addEventListener("change", function (evt) {
  const selectedTheme = evt.target.value;

  // store theme
  localStorage.setItem("theme", selectedTheme);

  applyTheme(selectedTheme);
});

// ændr elementer
function applyTheme(theme) {
  document.querySelector("body").dataset.theme = theme;

  const changeH2 = document.querySelector("main h2");
  changeH2.textContent = h2Texts[theme];

  const imageId = imageIds[theme];
  const image = document.querySelector("main img");
  image.src = `https://picsum.photos/id/${imageId}/400/400`;

  document.querySelector("body").style.fontFamily = `var(--font)`;
}





