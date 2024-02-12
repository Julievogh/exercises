document.querySelector("#themes").addEventListener("change", themeChange);

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

function themeChange(evt) {
  console.log("change", evt.target.value);
  document.querySelector("body").dataset.theme = evt.target.value;

  const changeH2 = document.querySelector("main h2");
  changeH2.textContent = h2Texts[evt.target.value];

  const imageId = imageIds[evt.target.value];
  const image = document.querySelector("main img");
  image.src = `https://picsum.photos/id/${imageId}/400/400`;

  document.querySelector("body").style.fontFamily = `var(--font)`;
}
