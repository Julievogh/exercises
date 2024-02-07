const bc = [
  { name: "Hvidevarer", link: "/hvidevarer" },
  { name: "Vaskemaskiner", link: "/hvidevarer/vaskemaskiner" },
  { name: "Bosch", link: "/hvidevarer/vaskemaskiner/bosch/" },
];

let currentIndex = 0;

console.log("bc.length", bc.length);
document.querySelector("button").addEventListener("click", generateBreadCrumb);
const pPointer = document.querySelector("p");

function generateBreadCrumb() {
  if (currentIndex < bc.length) {
    const crumb = bc[currentIndex];
    if (currentIndex === bc.length - 1) {
      pPointer.innerHTML += crumb.name;
    } else {
      pPointer.innerHTML += `<a href=${crumb.link}>${crumb.name}</a>   `;
    }
    currentIndex++;
  }
}
