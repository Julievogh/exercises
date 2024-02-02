import { randomNumber } from "./numbers.js";

export function getRandomHSLColor() {
  const h = randomNumber(360);
  const s = randomNumber(100);
  const l = randomNumber(100);

  return `hsl(${h}, ${s}%, ${l}%)`;
}
