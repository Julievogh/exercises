const curseWords = [
  { bad: "var", good: "const" },
  { bad: "float", good: "grid" },
  { bad: "marquee", good: "just don't" },
];

document
  .querySelector("button")
  .addEventListener("pointerdown", checkIfSentenceContainsProfanity);

function checkIfSentenceContainsProfanity() {
  let theText = document.querySelector("p").textContent;
  curseWords.forEach((wordObj) => {
    theText = theText.replaceAll(wordObj.bad, wordObj.good);

    document.querySelector("p").textContent = theText;
  });
}





/*
function goodToBadCurse(text) {
  let newText = text;
  curseWords.forEach(function (pair) {
    newText = newText.replaceAll(pair.bad, pair.good);
  });
  return newText;
}

document.querySelector(".profanity_btn").addEventListener("click", function () {
  const paragraph = document.querySelector(".profanity_txt");

  paragraph.textContent = goodToBadCurse(paragraph.textContent);

  console.log(paragraph.textContent);
});


*/

/*
let theText =
  "Jeg er en tekst hvor nogle ord skal skiftes ud med nogle andre ord";

let newText =
  "Programmering er sjovt! Men husk altid at bruge const, grid og just don't i moderne kodning.";
*/
/*let findWord = theText.replaceAll("ord", "ting");

console.log(findWord);*/

/*Find ordet "ord" i strengen theText og erstat den med ting 

Prøv med split / join.

Prøv med replaceAll()

console.log dit resultat*/


document.querySelector(".bat_fox_btn").addEventListener("pointerdown",btnPointerDown);



function btnPointerDown() {
  document.querySelector("h1").dataset.filter="bat";
}


