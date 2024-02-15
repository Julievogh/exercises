const splitTarget = document.querySelectorAll("[data-split]");

splitTarget.forEach((target) => {
  // har teksten fra DOM

  const content = target.textContent;

  // split teksten

  const splittedText = splitIntoChars(content);

  // sæt den her i target.innerHTML

  target.innerHTML = splittedText;
});

// indholdet fra deroppe, skal herned

function splitIntoChars(string) {
  // tager hvad den får i return og putter ind i funktionen wrapInSpan

  // alle bogstaverne er i en span
  return string.split("").map(wrapInSpan).join("");
}

function wrapInSpan(node, i) {
  // splittet de top specifikke data-split i span elementer

  return `<span class="char" style="--i: ${i}">${node}</span>`;
}
